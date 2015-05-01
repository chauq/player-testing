exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['edge_username_login.js'],
  capabilities: {
    browserName: 'chrome'
  }
}