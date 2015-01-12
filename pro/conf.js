exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //'flaging.js'
  specs: ['spec.js', 'join_exist.js', 'login_buttons.js', 'edge_username_login.js', 'change_edge_password.js', 'home.js', 'search.js', 'profile.js', 'channel.js', 'trending.js', 'video.js', 'edit_profile.js', 'about_livestation.js', 'nav_buttons.js', 'offline.js', 'lsng_login.js', 'test_logout.js', 'guest_users.js'],
  capabilities: {
    browserName: 'safari'
  }
}