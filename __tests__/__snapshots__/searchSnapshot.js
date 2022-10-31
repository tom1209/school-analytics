import { render } from "@testing-library/react";
import Search from "../../pages/search";

it('renders search page unchanged', () => {
  const { container } = render(<Search />)
  expect(container).toMatchSnapshot()
})