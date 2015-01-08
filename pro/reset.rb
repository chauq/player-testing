require 'rubygems'
require 'selenium-webdriver'
require 'capybara'

driver = Selenium::WebDriver.for :chrome
driver.get "http://www.gmail.com"
puts 'website loaded'

#element = driver.find_element :css => ".btn-intro-login"
#element.click
driver.find_element(:id, "gmail-sign-in").click

puts 'log in'

#driver.quit
