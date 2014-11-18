exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //'flaging.js'
  specs: ['spec.js', 'login_buttons.js', 'lsng_login.js', 'edge_username_login.js', 'change_edge_password.js', 'home.js', 'profile.js', 'channel.js', 'trending.js', 'video.js', 'edit_profile.js', 'about_livestation.js', 'nav_buttons.js', 'offline.js'],
  capabilities: {
    browserName: 'safari'
  }
}