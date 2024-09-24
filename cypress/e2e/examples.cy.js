describe("Various examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("multi-page testing", () => {
    cy.getDataTest("nav-why-cypress").click();
    cy.location("pathname").should("equal", "/");

    //Overview Page
    cy.getDataTest("nav-overview").click();
    cy.location("pathname").should("equal", "/overview");

    //Fundamentals Page
    cy.getDataTest("nav-fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    //Forms Page
    cy.getDataTest("nav-forms").click();
    cy.location("pathname").should("equal", "/forms");

    //Examples Page
    cy.getDataTest("nav-examples").click();
    cy.location("pathname").should("equal", "/examples");

    //Component Page
    cy.getDataTest("nav-component").click();
    cy.location("pathname").should("equal", "/component");

    //Best Practices Page
    cy.getDataTest("nav-best-practices").click();
    cy.location("pathname").should("equal", "/best-practices");
  });
  it("intercepts", () => {
    //Add an intercept
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getDataTest("post-button").click();
  });
  it.only("grudges", () => {
    //Make sure there is no grudge list
    cy.contains(/add some grudges/i);
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });

    //Validate the grudge input
    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("Some grudge");
    });
    cy.getDataTest("add-grudge-button").click();
    cy.getDataTest("grudge-list").within(() => {
        cy.get("li").should("have.length", 1);
      });
  });
});
