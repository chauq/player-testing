exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['home.js'],
  capabilities: {
    browserName: 'chrome'
  }
}