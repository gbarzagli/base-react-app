describe('App', () => {
    beforeEach(() => cy.visit('http://localhost:3000/'));

    it('should have two radio buttons and a button', () => {
        cy.get('[data-testid="IncreaseChooser"]').should('exist');
        cy.get('[data-testid="IncreaseChooser"] > .ant-radio-wrapper').should(
            'have.length',
            2,
        );
        cy.get('[data-testid="CountButton"]').should('exist');
    });
});
