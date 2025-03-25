import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '@/app/page';

describe('Home Page', () => {
  it('renders home with role alert', () => {
    render(<Home />);

    const home = screen.getByRole('alert');
    expect(home).toBeInTheDocument();
  });
});
