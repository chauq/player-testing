Given /^that I am on a web browser with a width of (\d+)px or over$/ do |width|
  @width = width
  page.driver.browser.manage.window.resize_to(@width, 1024)
  #driver = Selenium::WebDriver.for :chrome
  #driver.set_window_size(1024, 500)
end

When /^I go to the Livestation home page on the browser$/ do
  visit "http://lsng.livestation.com/"
end

Then /^the browser should show me a page which weclomes me with the text "(.*?)"$/ do |text|
  page.should have_content(text)
end
