import Home from "../../pages/index";
describe('Index.cy.js', () => {
  it('Home screen renders', () => {
    cy.mount(<Home />)
  })
})