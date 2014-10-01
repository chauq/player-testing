exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['trending.js'],
  capabilities: {
    browserName: 'chrome'
  }
}