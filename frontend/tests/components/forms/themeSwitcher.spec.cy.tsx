import { ThemeSwitcher } from "@/components/forms/themeSwitcher";
import { CurrentThemeProvider } from "@/contexts/CurrentThemeProvider";

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

  it('should toggle theme when click on theme button', () => {;
    cy.mount(
      <CurrentThemeProvider>
        <ThemeSwitcher isButton={true} />
      </CurrentThemeProvider>
    );

    cy.get('button').should('contain.text', 'light');

    cy.get('button').click();

    cy.get('button').should('contain.text', 'dark');
  });
});