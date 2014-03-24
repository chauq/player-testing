require "selenium-webdriver"

browser = ["chrome", "firefox", "internet_explorer"] 
player = ["flowplayerplayer"] #, "projekktorplayer", "videojsplayer", "mediaelementplayer", "osmfplayer", "jw6player"]
edge = ["ovh", "cdn1", "cdn2"]

browser.each do |browser|
	if browser == "chrome"
		driver = Selenium::WebDriver.for :chrome
	elsif browser == "firefox"
		driver = Selenium::WebDriver.for :firefox
	else browser == "internet_explorer"
		driver = Selenium::WebDriver.for :internet_explorer
	end
	player.each do |player|
		edge.each do |edge|
			driver.navigate.to "http://player-testing.livestation.com/"
			driver.navigate.to "http://player-testing.livestation.com/" + player + ".html?&channel=cna&source=" + edge
			sleep(2)
			driver.save_screenshot("./pcimage/" + player + " on " + edge + " using " + browser + " after 2 sec.png")
			sleep(8)
			driver.save_screenshot("./pcimage/" + player + " on " + edge + " using " + browser + " after 10 sec.png")
			sleep(5)
			driver.save_screenshot("./pcimage/" + player + " on " + edge + " using " + browser + " after 15 sec.png")
		end
	end
	driver.quit
end

