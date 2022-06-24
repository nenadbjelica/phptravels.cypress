Feature: Check navigation function including sidebar and main menu list

    Background: Navigate to login page and do customer login action
        Given url is navigated
        When customer is logged in

    Scenario Outline: Check page load of all <navigation> items and its text/url assertation
        Then assert that all '<navigation>' items contain requested text
        Then assert that correct url is shown by click on all '<navigation>' items

        Examples:
            | navigation   |
            | main_menu    |
            | sidebar_menu |