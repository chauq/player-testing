Given /^that I am on the Livestation home page$/ do
  visit "http://lsng.livestation.com/"
  #get "http://lsng.livestation.com/"
end

When /^I click on the "(.*?)"$/ do |button|
	all(:xpath, '//button[@id="btn-intro-login"]')[0].click
	#click_on(:id, "btn-intro-login")
	#find_elements(:xpath, "//div[@id='introPage']/div/div/div[2]/button[2]").click
	#click_button("id=Log in") if button == "Log in"
	#find_elements(:class_name, "btn signin btn_intro_login bliss_medium").click
end

Then /^the browser should show me a modal with the text "(.*?)"$/ do |text|
  page.should have_content(text)
end

When /^that I click outside of the login modal$/ do
	#pending
	#page click_at(50, 50)
	#all(:xpath, '//div[@id=".modal"]')[0].click_at(50, 50)
 	#page.execute_script('(document.elementFromPoint(10, 50)).click();')
 	#element = page.find(:xpath, '//div[@id=".modal-backdrop"]')[0]
  	#page.driver.browser.mouse.double_click(element.native)
  	#tag = page.find(:css, 'div#content') 
	#tag.trigger(:mouseover) 

	#This does find and trys to click on the div content, which I hope is not the modal. However this does not work on chromedriver: 
	#http://stackoverflow.com/questions/11908249/debugging-element-is-not-clickable-at-point-error
	find('div#content').click

end

When /^that I click 'x' of the login modal$/ do
	all(:xpath, '//button[@id="btn-modal-close"]')[0].click
	#click_on(:id, "btn-modal-close")
end
