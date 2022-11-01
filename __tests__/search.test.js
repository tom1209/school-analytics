import '@testing-library/jest-dom'
import React from "react";
import { render, screen, act } from "@testing-library/react";
import Search from "@/pages/search";

it("search component renders with search button and input", ()=> {
    render(<Search />)

    const searchParagraph = screen.getByText("Search for a school");
    const searchButton = screen.getByRole('button', {
        name: "Search"
    })

    expect(searchParagraph).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
})
