Feature: Web Trending 
	
	Users of the Website should be able to check what is trending on Livestation

Scenario: Be able what is trending on the web
	Given that I am log into the website using quang.chau and 1
	And I go the trending page on the website
	Then I should see the trending page

Scenario: Be able to play the trending video on the top of the page
	When I click on the trending video on top the page
	Then I should be able to see page with a video and the text "Watch CNN International"

Scenario: Be able to stop the stream playing and get back to the main trending page
	When I click on the stream that is playing
	And stop the the stream playing by clicking on the pause button
	Then I should be able to get back to the trending page by clicking on the back button.