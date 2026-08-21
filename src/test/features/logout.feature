@Mythily
Feature: Mythily_20/08/2026_User_Logout

  Background:
    Given the user is on the login page
    When the user enters valid credentials
    And the user clicks on the login button
    Then the user should be redirected to the dashboard page

  @logout 
  Scenario: Verify that the user is able to logout successfully
    When the user clicks on the logout button
    Then the user should be redirected to the login page
    And the login page should be displayed