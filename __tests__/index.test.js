import '@testing-library/jest-dom'
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

it("Home page renders correctly", ()=> {
    render(<Home />)

    const homeHeading = screen.getByRole('heading', {
        name: "School Analytics"
    })

    expect(homeHeading).toBeInTheDocument();
})
