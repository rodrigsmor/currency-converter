import { IconButton } from '../../../src/components/buttons/IconButton';

describe('<IconButton />', () => {
  it('should renders an icon button with the correct color', () => {
    cy.mount(
      <IconButton
        color='transparent'
        Icon={<span>Icon</span>}
      />
    );

    cy.get('button').should('have.class', 'transparent').should('have.class', 'icon-button');
    cy.get('button').should('have.descendants', 'span')
    cy.get('span').should('have.text', 'Icon')
  });
});