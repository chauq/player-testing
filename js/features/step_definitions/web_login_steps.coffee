module.exports = ->
  @World = require('../support/world.coffee').World

  @Given /^that I click Livestation option on the website$/, (callback) ->
    el = @browser.findElement(@By.id 'btn-intro-login')
    el.click()
    @browser.get('http://google.com').then ->
    callback()

  @When /^I enter my username as "([^"]*)"$/, (arg1, callback) ->
    # Write code here that turns the phrase above into concrete actions
    callback.pending()

  @When /^I enter my password as "([^"]*)"$/, (arg1, callback) ->
    # Write code here that turns the phrase above into concrete actions
    callback.pending()

  @When /^I click the done button$/, (callback) ->
    # Write code here that turns the phrase above into concrete actions
    callback.pending()

  @Then /^the website should show me a feed which welcomes me with the text "([^"]*)" at the top of the page$/, (name, callback) ->
    # Write code here that turns the phrase above into concrete actions
    callback.pending()