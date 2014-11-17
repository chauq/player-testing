exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['lsng_login.js'],
  capabilities: {
    browserName: 'chrome'
  }
}