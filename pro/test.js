exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['video.js'],
  capabilities: {
    browserName: 'chrome'
  }
}