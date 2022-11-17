describe("Add Disaster", () => {
    it("h1 has correct text", () => {
      cy.visit("http://localhost:3000/login");
      cy.get("title").contains("Disaster");
      cy.get("#username").type("Jane");
      cy.get("#password").type("testtest");
      cy.get("#login").first().click();
      cy.get("Button").contains("Add Event").click();
      cy.get("#name").type("Floodyflood");
      cy.get("#type").type("Flood");
      cy.get("Description").type("FloodinFlorida");
      
    });
  });
  