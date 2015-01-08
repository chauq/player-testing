exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['join_exist.js'],
  capabilities: {
    browserName: 'chrome'
  }
}