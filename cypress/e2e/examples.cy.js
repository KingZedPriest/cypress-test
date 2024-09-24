describe('Various examples', () => {
    beforeEach(() => {
        cy.visit("/examples")
    })
    it('multi-page testing', () => {
        cy.getDataTest("nav-why-cypress").click();
        cy.location("pathname").should("equal", "/")

        //Overview Page
        cy.getDataTest("nav-overview").click();
        cy.location("pathname").should("equal", "/overview")

        //Fundamentals Page
        cy.getDataTest("nav-fundamentals").click();
        cy.location("pathname").should("equal", "/fundamentals")

        //Forms Page
        cy.getDataTest("nav-forms").click();
        cy.location("pathname").should("equal", "/forms")

        //Examples Page
        cy.getDataTest("nav-examples").click();
        cy.location("pathname").should("equal", "/examples")

        //Component Page
        cy.getDataTest("nav-component").click();
        cy.location("pathname").should("equal", "/component")

        //Best Practices Page
        cy.getDataTest("nav-best-practices").click();
        cy.location("pathname").should("equal", "/best-practices")
    });
    it.only("intercepts", () => {
        cy.intercept("POST", "http://localhost:3000/examples", {
            fixture: "example.json"
        })
        cy.getDataTest("post-button")
    })
})