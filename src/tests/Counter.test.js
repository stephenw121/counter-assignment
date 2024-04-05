// import necessary react testing library helpers here
import {render, fireEvent, screen} from '@testing-library/react'
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  const InitialCount = screen.getByText(/0/i);
  expect(InitialCount).toBeInTheDocument();

  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'))
  const Count = screen.getByText(/1/i);
  expect(Count).toBeInTheDocument()
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'))
  const Count = screen.getByText(/-1/i);
  expect(Count).toBeInTheDocument()
  // Complete the unit test below based on the objective in the line above
});
