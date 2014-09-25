myAfterHooks = ->
	@After (cb)->
		@browser.close()
		cb()

module.exports = myAfterHooks