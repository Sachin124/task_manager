// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import TaskForm from './TaskForm';

// describe('TaskForm Component', () => {
//   test('renders task form correctly', () => {
//     render(<TaskForm />);

//     // Example test for input rendering
//     expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Due Date/i)).toBeInTheDocument();
//     expect(screen.getByText(/Add Task/i)).toBeInTheDocument();
//   });

//   test('allows user to add a task', () => {
//     render(<TaskForm />);

//     // Example test for form submission
//     fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Task' } });
//     fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Test Description' } });
//     fireEvent.change(screen.getByLabelText(/Due Date/i), { target: { value: '2024-07-16' } });
//     fireEvent.click(screen.getByText(/Add Task/i));

//     // Assertion to check if task is added
//     expect(screen.getByText(/Test Task/i)).toBeInTheDocument();
//     expect(screen.getByText(/Test Description/i)).toBeInTheDocument();
//     expect(screen.getByText(/Due: 2024-07-16/i)).toBeInTheDocument();
//   });
// });
