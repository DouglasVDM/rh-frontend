it("should say left wins for rock vs. scissors", () => {
    // Arrange
    cy.visit("/");
  
    // Act
    cy.findByLabelText("Left").select("rock");
    cy.findByLabelText("Right").select("scissors");
    cy.findByText("Throw").click();
  
    // Assert
    cy.findByTestId("outcome").should("contain.text", "Left wins!");
  });