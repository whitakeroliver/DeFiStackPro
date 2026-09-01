// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DeFiStackPro title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DeFiStackPro/i);
    expect(titleElement).toBeInTheDocument();
});
