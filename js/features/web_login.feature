Feature: Web login
	In order to start using the new gen Livestation website
	As an QA tester
	I want to log into the website using my username given to me by the developer and to also be able to use my social accounts to login into the website, given I have make Livestation accounts for them.

	Scenario: Login using Livestation username
		Given that I go to the Livestation home page
		And that I click Livestation option on the website
		When I enter my username as "quang.chau"
		And I enter my password as "1"
		And I click the done button
		Then the website should show me a feed which welcomes me with the text "Welcome back" at the top of the page
