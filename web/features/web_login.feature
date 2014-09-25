Feature: Web login
	In order to start using the new gen Livestation website
	As an QA tester
	I want to log into the website using my username given to me by the developer and to also be able to use my social accounts to login into the website, given I have make Livestation accounts for them.

Background:
	Given that I am on the Livestation home page
	And that I have gone to the login option on the website

Scenario: Login using Livestation username
	Given that I click Livestation option on the website
	When I enter my username as "quang.chau"
	And I enter my password as "1"
	And I click the done button
	Then the website should show me a feed which welcomes me with the text "Welcome back" at the top of the page

Scenario: Logout of the website, so I can run more tests
	Given that I log out of the website
	Then I should be taken back to the Livestation homepage

Scenario: Login using Twitter
	When I click on the Twitter option
	Then the website should show me a feed which welcomes me with the text "Welcome back" at the top of the page