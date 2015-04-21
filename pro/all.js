exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  multiCapabilities: [/*{
    browserName: 'firefox'
  }, */{
    browserName: 'safari', 'safariOptions' : {
    args: ['--lang=en',
           '--window-size=350,650']
  	},  
  }, {
    browserName: 'chrome', 'chromeOptions' : {
    args: ['--lang=en',
           '--window-size=350,650']
    },
  }]
}