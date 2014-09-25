describe('user profile', function() {

	it('should be able to log in as a user using username', function() {
		browser.get('http://lsng.livestation.com'); 

		var login = element(by.css('.btn_intro_login'));
		var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		emailLogin.click();
		username.sendKeys('quang.chau');
		password.sendKeys('1');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back Quang.chau');
	});

	it('should be able to go to the user profile', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var profile = element(by.id('top-drop-my-profile'));

		avatar.click();
		profile.click();

		expect(browser.getCurrentUrl()).toEqual('http://lsng.livestation.com/#/myprofile');
	});

	it('should be able to go to followers list', function() {
		var followers = element(by.css('[ng-click="followingTab(false)"]'));
		var name = element.all(by.binding('username')).get(1);

		followers.click();

		expect(name.getText()).toEqual('Lippe.oo');
	});

	it('should be able to go to followers list', function() {
		var following = element(by.css('[ng-click="followingTab(true)"]'));
		var name = element.all(by.binding('username')).get(1);

		following.click();

		expect(name.getText()).toEqual('Bbc-world');
	});

	it('should be able to go to likes list', function() {
		var likes = element(by.id('btn sp_menu_btn'));
		var name = element.all(by.binding('feed_title ng-binding'));

		likes.click();

		expect(name.getText()).toEqual('Watch BBC WorldNews');
	});

	it('should be able to go to broadcast list', function() {
		var broadcast = element(by.id('sp_broadcast'));
		var name = element.all(by.binding('feed_title ng-binding'));

		broadcast.click();

		expect(name.getText()).toEqual('Police at work');
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