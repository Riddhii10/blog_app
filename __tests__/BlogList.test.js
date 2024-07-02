import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import BlogList from '@/Components/BlogList';

import axios from 'axios'; // Import Axios

// Mock Axios post function
jest.mock('axios');

describe('BlogList Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock function call counts before each test
  });

  it('renders header elements correctly', () => {
    render(<BlogList />);

    // Assert presence of elements
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Lifestyle')).toBeInTheDocument();
    expect(screen.getByText('StartUp')).toBeInTheDocument();
  });
});
