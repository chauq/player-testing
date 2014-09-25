require 'capybara'
require 'rubygems'
require "selenium-webdriver"

browser = ["chrome", "firefox", "safari"]#, "opera"], "internet_explorer"] 

browser.each do |browser|
	if browser == "chrome"
		driver = Selenium::WebDriver.for :chrome
	elsif browser == "firefox"
		driver = Selenium::WebDriver.for :firefox
	elsif browser == "internet_explorer"
		driver = Selenium::WebDriver.for :internet_explorer
	elsif browser == "safari"
		driver = Selenium::WebDriver.for :safari
	else browser == "opera"
		driver = Selenium::WebDriver.for :opera
	end
	driver.navigate.to "http://lsng.livestation.com/"
	driver.click_on(:id, "btn-intro-login")
	driver.click_on(:id, "btn-modal-login-email")
	fill_in("login_email_input", {:with => username})
	fill_in("login_password_input", {:with => password})
	driver.save_screenshot("./home/" + "lsng on " + browser + ".png")
	driver.quit
end

