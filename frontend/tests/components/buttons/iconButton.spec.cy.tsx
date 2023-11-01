import { IconButton } from '../../../src/components/buttons/IconButton';

describe('<IconButton />', () => {
  it('should renders an icon button with the correct color', () => {
    cy.mount(
      <IconButton
        color='transparent'
        Icon={<span className='my-custom-icon'>Icon</span>}
      />
    );

    cy.get('button.icon-button')
      .should('have.attr', 'data-variantColor', 'transparent')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    cy.get('button.icon-button').should('have.descendants', 'span')
    cy.get('span').should('have.text', 'Icon').should('have.class', 'my-custom-icon')
  });

  it('should call onClick when button is clicked', () => {
    const onClick = cy.spy();

    cy.mount(
      <IconButton
        color='transparent'
        Icon={<span>Icon</span>}
        onClick={onClick}
      />
    );

    cy.get('button.icon-button').click();
    cy.wrap(onClick).should('have.been.called');
  });
});