exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',
  //'flaging.js', 'trending.js', 'guest_users.js', 'edit_profile.js', 'nav_buttons.js', 'join_exist.js', 
  //'offline.js'
  //safari
  specs: ['spec.js'],
  //'change_edge_password.js', 'channel.js', '404.js', 'home.js', 
  capabilities: {
     browserName: 'chrome',
     'appium-version': '1.3.7',
     platformName: 'Android',
     platformVersion: '4.4.2',
     deviceName: '4df78c440779211d',
    baseUrl: 'http://livestation.com',
 }
}