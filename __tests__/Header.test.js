import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/Components/Header';

import axios from 'axios'; // Import Axios
import { toast } from 'react-toastify';

// Mock Axios post function
jest.mock('axios');
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock function call counts before each test
  });

  it('renders header elements correctly', () => {
    render(<Header />);

    // Assert presence of elements
    expect(screen.getByText('Get started')).toBeInTheDocument();
    expect(screen.getByText('Lastest Travel Blogs')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter the email.')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

  it('updates email input value correctly', () => {
    render(<Header />);

    const emailInput = screen.getByPlaceholderText('Enter the email.');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });
  
  it('renders a button with the correct text', () => {
    const { container } = render(<Header />);
    const button = container.querySelector('button');
    expect(button).toHaveTextContent('Get started');
  });
  // it('calls axios post and shows success toast on successful form submission', async () => {
  //   axios.post.mockResolvedValue({ data: { success: true, msg: 'Subscribed successfully!' } });

  //   render(<Header />);

  //   const emailInput = screen.getByPlaceholderText('Enter the email.');
  //   fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

  //   const submitButton = screen.getByText('Subscribe');
  //   fireEvent.click(submitButton);

  //   await waitFor(() => expect(axios.post).toHaveBeenCalledWith('/api/email', expect.any(FormData)));
  //   await waitFor(() => expect(toast.success).toHaveBeenCalledWith('Subscribed successfully!'));
  //   expect(emailInput.value).toBe('');
  // });

  // it('calls axios post and shows error toast on failed form submission', async () => {
  //   axios.post.mockResolvedValue({ data: { success: false } });

  //   render(<Header />);

  //   const emailInput = screen.getByPlaceholderText('Enter the email.');
  //   fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

  //   const submitButton = screen.getByText('Subscribe');
  //   fireEvent.click(submitButton);

  //   await waitFor(() => expect(axios.post).toHaveBeenCalledWith('/api/email', expect.any(FormData)));
  //   await waitFor(() => expect(toast.error).toHaveBeenCalledWith('Error...'));
  // });

  
});
