import NavMenu from "../../components/navMenu/NavMenu";
describe('NavMenu.cy.js', () => {
  it('NavMenu Component Renders', () => {
    cy.mount(<NavMenu />)
  })
})