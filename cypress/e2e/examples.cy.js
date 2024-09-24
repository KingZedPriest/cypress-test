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
    //First Grudge Sample
    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("Some grudge");
    });
    cy.getDataTest("add-grudge-button").click();
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });

    //Second Grudge Sample
    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("Some grudge 2");
    });
    cy.getDataTest("add-grudge-button").click();
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 2);
      cy.get("li").its(0).should("contains.text", "Some grudge");
    });

    //Test the X button, and make sure it works
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li")
        .its(0)
        .within(() => {
          cy.get("button").click();
        });
    });
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });
  });
});
