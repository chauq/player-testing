exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['sub_processing_error.js'],
  capabilities: {
    browserName: 'chrome'
  }
}