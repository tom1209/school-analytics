import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from "./Header";

it("renders Header correctly", () => {
    const title = "School Analytics Tool";
    render(<Header />)

    const headerTitle = screen.getByText(title);
    expect(headerTitle).toBeInTheDocument();
});