import { LangSelect } from "@/components/forms/langSelect";
import { LanguageContextProvider } from "@/contexts/LanguageContextProvider";

describe('<LangSelect />', () => {
  it('should only renders the LangOptionsList when click in LangSelectToggle', () => {
    cy.mount(
      <LanguageContextProvider>
        <LangSelect />
      </LanguageContextProvider>
    )

    cy.get('ul#Lang-Select_List').should('have.attr', 'aria-hidden', 'true');
    cy.get('ul#Lang-Select_List').should('have.css', 'opacity', '0');
    cy.get('button#Lang-Select_Toggle').click();
    cy.get('ul#Lang-Select_List').should('have.attr', 'aria-hidden', 'false');
    cy.get('ul#Lang-Select_List').should('have.css', 'opacity', '1');
  })
});