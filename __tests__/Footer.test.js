import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '@/Components/Footer';

import axios from 'axios'; // Import Axios

// Mock Axios post function
jest.mock('axios');

describe('Footer Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock function call counts before each test
  });

  it('renders footer elements correctly', () => {
    render(<Footer />);

    // Assert presence of elements
    expect(screen.getByText('All rights reserved. Copyright @travelKaro')).toBeInTheDocument();
    
  });
});
