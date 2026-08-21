Feature: TamilKumar12-07-2026 Question Bank Management updated 19=07=2026

    Background:
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        And the user clicks on the Question Bank option from the Admin Dashboard page

    @smoke @questionbank @Tamil
    Scenario: Create a new MCQ question successfully
        When the user clicks the Create Question Bank dropdown
        And the user selects the MCQ Question option
        And the user enters the category Data Structures and fill the question
        And the user enters Stack as Option one
        And the user enters Queue as Option two
        And the user clicks the Add Option button
        And the user enters Linked List as Option three
        And the user opens the Answer Key
        And the user selects the first answer option
        And the user clicks the Done button
        And the user clicks the Save Question button
        Then the question should be saved successfully

    @Tamil @questionbank
    Scenario: Verify user cannot save an MCQ question without entering the question
        When the user clicks the Create Question Bank dropdown
        And the user selects the MCQ Question option
        And the user enters the category Data Structures
        And the user enters Stack as Option one
        And the user enters Queue as Option two
        And the user clicks the Add Option button
        And the user enters Linked List as Option three
        And the user opens the Answer Key
        And the user selects the first answer option
        And the user clicks the Done button
        And the user clicks the Save Question button
        Then the question required validation message should be displayed
    @Tamil @questionbank
    Scenario: Verify user can create a Programming question
        When the user clicks the Create Question Bank dropdown
        And the user selects the Programming Question option
        And the user enters the program title
        And the user enters the question description
        And the user enters the test case and expected outcome
        And the user clicks the Save Question Button
        Then the question should be created successfully