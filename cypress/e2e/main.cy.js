describe('Comprueba la funcionalidad de index.html', () => {
  it('Muestra el texto legal al hacer clic en "Ver las condiciones legales', () => {
    
    cy.visit('127.0.0.1:5500/index.html');

    cy.get('#show-legal').click(); // Verifica que el botón que muestra el texto legal es visible
    cy.get('#legal-text').should('be.visible'); // Verifica que el texto legal es visible
    cy.get('#accept-legal').should('be.visible'); //Verifica que el botón "Acepto las condiciones legales" es visible
  })
  it('Permite al usuario aceptar las condiciones legales', () => {
    
    cy.visit('127.0.0.1:5500/index.html');

    cy.get('#show-legal').click();
    cy.get('#accept-legal').click();
    cy.get('#accept-message').should('be.visible');
    cy.get('#accept-legal', { timeout: 5000 }).should('not.be.visible');
  })
})