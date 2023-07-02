import { render, screen } from '@testing-library/react';
import HomePage from '@/app/components/homePage';
import '@testing-library/jest-dom';
 
describe('HomePage', () => {
  it('renders a heading', () => {
    render(<HomePage />);
 
    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });
 
    expect(heading).toBeInTheDocument();
  });
});
