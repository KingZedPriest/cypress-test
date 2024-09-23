describe("Form test", () => {
    beforeEach(() => {
        cy.visit("/forms")
    });
    it("Test subscribe form", () => {
        cy.contains(/testing forms/i);
        //Get the input, make it an alias
        cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
        //Add email
        cy.get("@subscribe-input").type("sample@email.com");
        //Check and make sure the validation message doesn't exist
        cy.contains(/Successfully subbed: sample@email.com!/i).should("not.exist");
        //Click the button
        cy.getDataTest("subscribe-button").click();
        //Check if the validation message now exists
        cy.contains(/Successfully subbed: sample@email.com!/i).should("exist");
        //Wait for 3 seconds
        cy.wait(3000);
        //Check and make sure the validation text no longer exists 
        cy.contains(/Successfully subbed: sample@email.com!/i).should("not.exist");

        //For the Negative part of the validation
        cy.get("@subscribe-input").type("sample@email.io");
        cy.contains(/Invalid email: sample@email.io!/i).should("not.exist");
        cy.getDataTest("subscribe-button").click();
        cy.contains(/Invalid email: sample@email.io!/i).should("exist");
        cy.wait(3000);
        cy.contains(/Invalid email: sample@email.io!/i).should("not.exist");
    });
})