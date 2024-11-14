// BookingForm.jsx
import React, { useState, useReducer, useEffect } from "react";

import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { submitAPI, fetchAPI } from "../API"; // Import submitAPI from API.js

// Function to initialize available times (now it fetches available times based on today's date)
const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today); // Fetch available times for today
};

// Reducer function to update available times based on the selected date
const updateTimes = (state, action) => {
  const { type, date } = action;

  switch (type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(date)); // Fetch available times for the selected date
    default:
      return state;
  }
};

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate(); // Use navigate hook for navigation

  useEffect(() => {
    if (date) {
      dispatch({ type: "UPDATE_TIMES", date });
    }
  }, [date]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
  };

  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  // Function to submit form data
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      // Navigate to the confirmed booking page if submission is successful
      navigate("/confirmed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationData = { date, time, guests, occasion };
    console.log("Reservation Data: ", reservationData);
    submitForm(reservationData); // Submit form data
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
