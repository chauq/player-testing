Given /^that I log out of the website$/ do
	sleep(10)
  	find(:xpath, '//button[@id="top_menu_avatar"]').click
	find(:xpath, '//button[@id="top-drop-logout"]').click
end

Then /^I should be taken back to the Livestation homepage$/ do
  pending # express the regexp above with the code you wish you had
end
