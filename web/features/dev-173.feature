Feature: Desktop web intro

Scenario: Visit Home page 
	Given that I am on a web browser with a width of 1024px or over
	When I go to the Livestation home page on the browser
	Then the browser should show me a page which weclomes me with the text "Be There Now"