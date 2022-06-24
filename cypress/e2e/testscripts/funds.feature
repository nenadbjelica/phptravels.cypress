Feature: Check funds creating with diferent payment

    Scenario Outline: Check <payment> payment and its assertation
        Given url is navigated and agent is logged in
        When click on Add Funds page
        And select '<payment>' payment, input '<amount>' and click on Pay Now button
        Then assert that entered amount '<amount>' is shown

        # skiped 'stripe' payment since doesn't work (error 404)
        Examples:
            | payment       | amount |
            # | stripe        | 500.00 |
            | paypal        | 800.00 |
            | bank-transfer | 600.00 |