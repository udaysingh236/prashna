import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../ui/Header';

describe('Render Header component', () => {
  test('Should include the sub heading', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const heading = screen.getByText(/Do you think you know ?/i);
    expect(heading).toBeInTheDocument();
  });
});
