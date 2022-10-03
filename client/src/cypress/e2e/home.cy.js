describe("home page", () => {
  it("h1 has correct text", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("title").contains("Disaster");
  });
});
