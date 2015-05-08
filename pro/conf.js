exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //'flaging.js', 'trending.js', 'guest_users.js', 'edit_profile.js', 'nav_buttons.js', 'join_exist.js', 
  //'offline.js'
  //safari
  specs: ['spec.js','login_buttons.js', 'edge_username_login.js',  
  		  'search.js', 'guest_users', 'profile.js', 'about_livestation.js', 'video.js', 'lsng_login.js',
        'test_logout.js', 'test_config.js', 'test_config_fr.js', 'test_config_gb.js'],
  //'change_edge_password.js', 'channel.js', '404.js', 'home.js', 
  capabilities: {
    browserName: 'chrome'
  }
}