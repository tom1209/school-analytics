import Header from "../../components/header/Header"
describe('Header.cy.js', () => {
  it('Header Component Renders', () => {
    cy.mount(<Header />)
  })
})