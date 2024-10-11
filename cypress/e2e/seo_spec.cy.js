describe('SEO', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should show my name', () => {
        cy.get('h1[data-cy=name-surname]').should('be.visible');
    });
  });
  