describe('empty feed', function() {

	it('should be able to log in as a user using twitter account', function() {
		browser.get('http://lsng.livestation.com'); 

		var login = element(by.css('.btn_intro_login'));
		var twitter = element(by.id('btn-modal-login-twitter'));

		login.click();
		twitter.click();

		//log into twitter

		//see empty feed

	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		var intro = element(by.css('.tagline'));

		avatar.click();
		logout.click();
		expect(intro.getText()).toEqual('Be There Now');
	});
	
});