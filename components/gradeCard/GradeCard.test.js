
import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import GradeCard from "./GradeCard";

const student = "Test Student";
const grades = [
    { class: "Testing", mark: 100},
    { class: "Jesting", mark: 90}
]

it("renders GradeCard correctly", () => {
  render(<GradeCard student={student} grades={grades} />)
});

it("should display gradeCard props student name correctly", () => {
  render(<GradeCard student={student} grades={grades} />)
  const studentName = screen.getByText(student);
  expect(studentName).toBeInTheDocument();
});

it("should display gradeCard props grades correctly", () => {
  render(<GradeCard student={student} grades={grades} />)
  grades.forEach( grade => {
    const gradeClass = screen.getByText(grade.class);
    const gradeMark = screen.getByText(grade.mark);
    expect(gradeClass).toBeInTheDocument();
    expect(gradeMark).toBeInTheDocument();
  })
});
