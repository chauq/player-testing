exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['profile.js'],
  capabilities: {
    browserName: 'chrome'
  }
}