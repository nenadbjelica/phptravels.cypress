Feature: Creating a new customer and checking success/failed creation

    Scenario: Check creation of a new customer
        Given url is navigated
        When user click on Signup button
        And enters all valid credentials and signup
        Then user is successfully created

    Scenario: Check creation of existing customer
        When user click on Signup button
        And enters all credentials with existing email and signup
        Then email validation is thrown