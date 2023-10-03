import { LangSelect } from "@/components/forms/langSelect";
import { LanguageContextProvider } from "@/contexts/LanguageContextProvider";

describe('<LangSelect />', () => {
  beforeEach(() => {
    cy.mount(
      <LanguageContextProvider>
        <LangSelect />
      </LanguageContextProvider>
    )
  })

  it('should only renders the LangOptionsList when click in LangSelectToggle', () => {
    cy.get('ul#Lang-Select_List').should('have.attr', 'aria-hidden', 'true');
    cy.get('ul#Lang-Select_List').should('have.css', 'opacity', '0');

    cy.get('button#Lang-Select_Toggle').click();

    cy.get('ul#Lang-Select_List').should('have.attr', 'aria-hidden', 'false');
    cy.get('ul#Lang-Select_List').should('have.css', 'opacity', '1');
  })

  it('should select the language correctly', () => {
    cy.get('span#language-selected_code').should('contain.text', 'EN');
    cy.get('li#option-EN').should('have.attr', 'aria-selected', 'true');
    cy.get('li#option-PT').should('have.attr', 'aria-selected', 'false');

    cy.get('button#Lang-Select_Toggle').click();
    cy.get('li#option-PT>button').click();

    cy.get('span#language-selected_code').should('contain.text', 'PT');
    cy.get('li#option-EN').should('have.attr', 'aria-selected', 'false');
    cy.get('li#option-PT').should('have.attr', 'aria-selected', 'true');
  });
});