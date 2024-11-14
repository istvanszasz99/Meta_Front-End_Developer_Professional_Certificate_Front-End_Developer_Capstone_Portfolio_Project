import { render, screen } from "@testing-library/react";
import {BookingForm, initializeTimes, updateTimes} from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns the correct initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    expect(initializeTimes()).toEqual(expectedTimes);
});

test('updateTimes returns the same value for available times regardless of date', () => {
    const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UPDATE_TIMES', date: '2024-11-14' };
    expect(updateTimes(initialTimes, action)).toEqual(initialTimes);
});