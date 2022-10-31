import { render } from "@testing-library/react";
import AddStudent from "../../pages/add";

it('renders add student page unchanged', () => {
  const { container } = render(<AddStudent />)
  expect(container).toMatchSnapshot()
})