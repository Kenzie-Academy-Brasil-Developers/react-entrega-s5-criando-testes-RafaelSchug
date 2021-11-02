context("Search CEP", () => {
    it("Enters the Search page and type a CEP number", () => {
        cy.visit('http://localhost:3000');
        cy.viewport(1400,900);
        
        cy.get("#CEP_field").type(88600000)
        cy.contains("Buscar pelo CEP").click();
        cy.get("input[name=city]").should('have.value', 'São Joaquim')
    })
})