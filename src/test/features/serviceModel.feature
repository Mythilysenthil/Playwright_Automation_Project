@Jerishwin
Feature: Jerishwin 09/07/2026 service Model

    Background:
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        And the user is on Dynamic Field Management page
        And the user clicks the service model button

    @Jerishwin
    Scenario:Adding Service
        And the user clicks on the add service button
        And the user enter the service Name and description
        And clicks the create service button
        Then the service created message is shown

    @Jerishwin
    Scenario: Deleting Service
        And the users searches for the service
        And clicks the delete button 
        And clicks delete on the confirmation
        Then the service is deleted

