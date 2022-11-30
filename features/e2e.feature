@wip
Feature: Bootcamp E2E

  Background: 
    Given I am on the home page
    * I close promo banner if it appears

  Scenario: Search bar
    When I enter the word Windows in the search bar
    * I click the search button
    Then I see list with at least one item

  Scenario: Internet shop logo button
    When I click on the Today's Best Deals tab
    * I click on the Internet shop logo
    Then I am on the main page
