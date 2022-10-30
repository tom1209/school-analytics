import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NavMenuItems } from "../../helpers/NavMenuItems";

import NavMenu from "./NavMenu";

it("renders Header correctly", () => {
    render(<NavMenu />)
});

it("should display the correct number of menu items", () => {
    render(<NavMenu />)
    
    NavMenuItems.forEach( item => {
        const itemName = screen.getByText(item.name)

        expect(itemName).toBeInTheDocument();
    })
})