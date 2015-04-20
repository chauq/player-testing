exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js', 'join_exist.js', 'login_buttons.js', 'edge_username_login.js', 'change_edge_password.js', 'home.js', 'profile.js', 'channel.js', 'trending.js', 'video.js', 'edit_profile.js', 'about_livestation.js', 'nav_buttons.js', 'offline.js', 'lsng_login.js', 'guest_users.js'],
  multiCapabilities: [/*{
    browserName: 'firefox'
  }, */{
    browserName: 'safari',
  }, {
    browserName: 'chrome'
  }]
}