import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/Components/Header';
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
});
