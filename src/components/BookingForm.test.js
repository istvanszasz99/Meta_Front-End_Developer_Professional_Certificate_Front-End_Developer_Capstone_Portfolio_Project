import { render, screen } from "@testing-library/react";
import {BookingForm, initializeTimes, updateTimes} from './BookingForm';
import { fetchAPI } from './API'; // Import fetchAPI to mock it

jest.mock('./API', () => ({
    fetchAPI: jest.fn(),
  }));

  test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });

  // Test for initializeTimes now calls fetchAPI and returns dynamic available times
  test('initializeTimes returns available times from fetchAPI', () => {
    // Mock fetchAPI to return a fixed set of times for testing
    fetchAPI.mockReturnValueOnce(['17:00', '18:00', '19:00', '20:00']);

    // Call initializeTimes, which now depends on fetchAPI
    const result = initializeTimes();

    // Test that the returned times match the mocked return value
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00']);
  });

  // Test for updateTimes that checks the date and returned available times
  test('updateTimes returns updated available times based on selected date', () => {
    // Mock fetchAPI to return times based on the date passed
    fetchAPI.mockReturnValueOnce(['17:00', '18:00', '19:00', '20:00']);

    const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    // Simulate dispatching the UPDATE_TIMES action with a selected date
    const action = { type: 'UPDATE_TIMES', date: '2024-11-14' };
    const updatedTimes = updateTimes(initialTimes, action);

    // The times should match what fetchAPI returned, not the initial static list
    expect(updatedTimes).toEqual(['17:00', '18:00', '19:00', '20:00']);
  });