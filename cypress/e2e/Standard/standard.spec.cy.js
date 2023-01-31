import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit google.com", () => {
  cy.visit("https://www.google.com");
});

Then("I should see a search bar", () => {
  cy.contains("Google").should("be.visible");
});
