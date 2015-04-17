exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //safari
  specs: ['spec.js','login_buttons.js', 'edge_username_login.js',  
  		  'search.js', 'profile.js', 'lsng_login.js', 
        'test_logout.js'],
  //'home.js', 'video.js', 'about_livestation.js',
  capabilities: {
    browserName: 'chrome'
  }
}