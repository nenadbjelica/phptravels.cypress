Feature: Check login function

    Background: Navigate to Login page
        Given url is navigated

    Scenario Outline: Check if <role> is logged in successfully
        Given '<role>' with '<username>' and '<password>' is logged in
        Then assert that 'Welcome Back' is shown

        Examples:
            | role     | username             | password  |
            | customer | user@phptravels.com  | demouser  |
            | agent    | agent@phptravels.com | demoagent |

    Scenario: Check if validation message apears for wrong credentials
        Given user try to login with wrong credentials
        Then validation error message appears