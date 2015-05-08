exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['sub_incorrect_cvc.js'],
  capabilities: {
    browserName: 'chrome'
  }
}