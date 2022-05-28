describe('workspace-project App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display title', () => {
    cy.get('app-root h1').should('contain', 'ngx-online-status');
  });
  
  it('should display description', () => {
    cy.get('app-root p').should('contain', 'Try this package by turning on and off your internet connection');
  });
});
