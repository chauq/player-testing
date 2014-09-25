require 'capybara'
require 'rubygems'
require "selenium-webdriver"
require 'capybara/cucumber'
require 'capybara/session'

Capybara.default_driver = :selenium
Capybara.ignore_hidden_elements = false
#Capybara.default_selector = :xpath
#Selenium::WebDriver.for :firefox

class WebWorld
  include Capybara

	def logout
		all(:xpath, '//button[@id="top_menu_avatar"]')[0].click
		all(:xpath, '//button[@id="top-drop-logout"]')[0].click
		sleep(1)
	end

end

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

World do
  WebWorld.new
end

#Capybara::Node::Element.class_eval do
  		
  	#def click_at(x, y)
    	#wait_until do
      	#right = x - (native.size.width / 2)
      	#top = y - (native.size.height / 2)
      	#driver.browser.action.move_to(native).move_by(right.to_i, top.to_i).click.perform
    	#end
  	#end
#end