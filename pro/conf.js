exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js', 'login_buttons.js', 'lsng_login.js', 'home.js', 'profile.js', 'channel.js', 'trending.js', 'video.js', 'edit_profile.js', 'about_livestation.js', 'flaging.js', 'nav_buttons.js'],
  capabilities: {
    browserName: 'chrome'
  }
}