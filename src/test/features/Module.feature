@Tamil
Feature: TamilKumar 08-07-2026 Add course structure

  Background:
    Given the user is on the login page
    When the user enters valid credentials
    And the user clicks on the login button
    When I navigate to the Course Management page
    And search the course name

  @Tamil
  Scenario: Create a course structure with valid data
    When the user clicks the Add Course Structure button on the Course Management page
    And the user clicks the Module button on the Course Structure page
    And the user fills all the basic information
    And the user clicks the Create & Save button
    Then the user should see the message Operation completed successfully

  @Tamil
  Scenario: Create a course structure with invalid data
    When the user clicks the Add Course Structure button on the Course Management page
    And the user clicks the Module button on the Course Structure page
    And the user fills all the invalid basic information
    And the user clicks the Create & Save button
    Then the user should see the validation message Title is required for module

  @Tamil
  Scenario: Add a similar course structure with valid inputs
    When the user clicks the Add Course Structure button on the Course Management page
    And the user clicks the Similar Course button
    And the user selects the course category and the user searches for the course to duplicate
      | category       | JAVA |
      | search_keyword | JavaScript      |
    And the user selects all modules and clicks the Duplicate Structure button
    And the user accepts the duplicate confirmation alert
    Then the user should see the message Operation completed successfully

  @Tamil
  Scenario: Edit the module in course structure
    When the user clicks the Add Course Structure button on the Course Management page
    And the user clicks the more dropdown on the Course Structure page
    And select the Hierarchy Actions and select the more button
    And click the three dots on the module and select the edit option
    And the user updates the module details and clicks the save button
    Then the user should see the message Operation completed successfully

  @Tamil
  Scenario Outline: Verify the Teaching Elements filter displays the correct details
    When the user clicks the Add Course Structure button on the Course Management page
    And the user selects "<Teaching_Elements>" from the Teaching Elements dropdown
    Then only "<Teaching_Elements>" details should be displayed

    Examples:
      | Teaching_Elements     |
      | All Teaching Elements |
      | I Do Activities       |
      | We Do Activities      |
      | You Do Activities     |
