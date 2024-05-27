import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('should render the button with the primary variant', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Primary Button');
  });

  it('should render the button with the secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Secondary Button');
  });

  it('should render the button with the default primary variant', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Default Button');
  });
});
