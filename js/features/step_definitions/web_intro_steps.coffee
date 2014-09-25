module.exports = ->
	@World = require('../support/world.coffee').World

	@Given /^that I go to the Livestation home page$/, (callback) ->
		@browser.get('http://lsng.livestation.com').then ->
		callback()

	@Then /^the browser should show me a page which weclomes me with the text "([^"]*)"$/, (name, callback) ->
    	intro = element(@By.css('.tagline'))
    	expect(intro.getText()).toEqual('Be There Now')
		callback()