Given /^that I have gone to the login option on the website$/ do
	all(:xpath, '//button[@id="btn-intro-login"]')[0].click
	#click_on(:id, "btn-intro-login")
end

Given /^that I click Livestation option on the website$/ do
	all(:xpath, '//button[@id="btn-modal-login-email"]')[0].click
	#click_on(:id, "btn-modal-login-email")
end

When /^I enter my username as "(.*?)"$/ do |username|
  #fill_in("login_email_input", {:with => username})
  find(:xpath, './/input[@id="login_email_input"]').set(username)
end

When /^I enter my password as "(.*?)"$/ do |password|
  #fill_in("login_password_input", {:with => password})
  find(:xpath, './/input[@id="login_password_input"]').set(password)
end

When /^I click the done button$/ do
  all(:xpath, './/button[@id="btn-modal-login-email-done"]')[0].click
end

Then /^the website should show me a feed which welcomes me with the text "(.*?)" at the top of the page$/ do |text|
  page.should have_content(text)
end

When /^I click on the Twitter option$/ do
  pending # express the regexp above with the code you wish you had
end
