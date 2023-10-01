import { ThemeSwitcher } from "@/components/forms/themeSwitcher";

describe('<ThemeSwitcher/>', () => {
  it('should render a ThemeSwitcher button when isButton is set to true', () => {
    cy.mount(
      <ThemeSwitcher isButton={true} />
    )

    cy.get('button').should('have.class', 'theme-switcher_Button');
    cy.get('svg')
      .should('have.attr', 'aria-label')
      .and('match', /dark theme icon|light theme icon/);
    cy.get('button').should(($button) => {
      const buttonText = $button.text().trim();
      expect(buttonText).to.match(/^(light|dark)$/);
    });
  })
});