
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

it("should display gradeCard props name correct", () => {
  render(<GradeCard student={student} grades={grades} />)
  const studentName = screen.getByTestId("studentName");

  expect(screen.getByTestId("studentName")).toBeInTheDocument();
  expect(studentName).toHaveTextContent("Test Student");
});
