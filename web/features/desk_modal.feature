Feature: Desktop login modal directive
	Create a default modal directive in Angular to handle any template and model...
	Modal should have a standard size (except for registration form)
	If any data entry inside the modal the 'x' in the top right corner should be able to dismiss it but NOT clicking outside the modal
	If just info in the modal clicking both the 'x' AND outside the modal should dismiss it

Background:
	Given that I am on the Livestation home page
	When I click on the "Log in"

Scenario: Visit login modal
	Then the browser should show me a modal with the text "Log In"

Scenario: Clicking outside modal
	When that I click outside of the login modal
	Then the browser should show me a modal with the text "Log In"

Scenario: Clicking on 'x' on modal
	When that I click 'x' of the login modal
	Then the browser should show me a page which weclomes me with the text "Be There Now"