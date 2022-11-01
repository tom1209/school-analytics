import '@testing-library/jest-dom'
import React from "react";
import { render, screen } from "@testing-library/react";
import AddStudent from "@/pages/add";

it("Add Student Page page renders correctly with form", ()=> {
    render(<AddStudent />)

    const schoolName = screen.getByLabelText("Student Name")
    const studentName = screen.getByLabelText("Student Name")
    const enterClass = screen.getByLabelText("Enter Class")
    const enterMark = screen.getByLabelText("Enter Mark")
    const addGrade = screen.getByRole('button', {
        name: "Add More Grades"
    })
    const addStudent = screen.getByRole('button', {
        name: "Add Student"
    })

    expect(schoolName).toBeInTheDocument();
    expect(studentName).toBeInTheDocument();
    expect(enterClass).toBeInTheDocument();
    expect(enterMark).toBeInTheDocument();
    expect(addGrade).toBeInTheDocument();
    expect(addStudent).toBeInTheDocument();
})
