exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test_logout.js'],
  capabilities: {
    browserName: 'chrome'
  }
}