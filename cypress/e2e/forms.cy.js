describe("Form test", () => {
    beforeEach(() => {
        cy.visit("/forms")
    });
    it("Test subscribe form", () => {
        cy.contains(/testing forms/i);
        cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
        cy.get("@subscribe-input").type("sample@email.com");
        cy.contains(/Successfully subbed: sample@email.com!/i).should("not.exist");
        cy.getDataTest("subscribe-button").click();
        cy.contains(/Successfully subbed: sample@email.com!/i).should("exist");
        cy.wait(3000);
        cy.contains(/Successfully subbed: sample@email.com!/i).should("not.exist");
    });
})