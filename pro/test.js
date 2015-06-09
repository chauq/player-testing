exports.config = {
	  jasmineNodeOpts: {defaultTimeoutInterval: 3600000},
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['lsng_login.js'],
  capabilities: {
    browserName: 'chrome'
  }
}