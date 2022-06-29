Feature: Search for Hotels

    Scenario: Search for Hotels
        Given url is navigated and customer is logged in
        When click on Home page
        And input cyty 'Belgrade', checkin date '15-7-2022' and checkout date '30-7-2022'
        And click on Submit button
        Then assert that image that represent no results is shown
