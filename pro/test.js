exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['guest_users.js'],
  capabilities: {
    browserName: 'chrome'
  }
}