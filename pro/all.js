exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js','lsng_login.js', 'home.js', 'profile.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'safari'
  }, {
    browserName: 'chrome'
  }]
}