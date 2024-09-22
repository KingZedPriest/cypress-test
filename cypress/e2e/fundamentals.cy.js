describe('Fundamental test', () => {
  it('Contains correct header text', () => {
    cy.visit('/fundamentals');
    cy.get('[data-test="fundamentals-header"]').should("contain.text", "Testing Fundamentals");
    
  });
}); 