exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['sub_declined.js'],
  capabilities: {
    browserName: 'chrome'
  }
}