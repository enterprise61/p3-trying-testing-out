
import { expect, test } from "vitest";
import App from './App';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';



test("renders hello message", () => {
    render(<App />);
expect(screen.getByText(/open for business/i)).toBeInTheDocument();
});