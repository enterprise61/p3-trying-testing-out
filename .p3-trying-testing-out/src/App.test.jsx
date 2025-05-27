
import { expect, test } from "vitest";
import App from './App';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';


test("App", () => {
    render(<App />);
    expect(screen.getByText(/open /i)).toBeInTheDocument();
    const button =  screen.getByRole("button", { name: /after hours/i});
    expect(linkElement).toBeInTheDocument();
    fireEvent.click(button);
});