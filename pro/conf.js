exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js', 'lsng_login.js', 'home.js', 'profile.js', 'channel.js', 'trending.js', 'video.js', 'edit_profile.js'],
  capabilities: {
    browserName: 'safari'
  }
}