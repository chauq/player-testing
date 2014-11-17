describe('Video flagging', function() {

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

		expect(welcome.getText()).toEqual('Welcome back quang.chau');
	});

	it('should be able to go to the test station page by going to a link', function() {
		browser.get('http://lsng.livestation.com/#/content/quang.chau/71194604-2e3c-436b-8a93-f5294ae91a8b');

		expect(browser.getCurrentUrl()).toEqual('http://lsng.livestation.com/#/content/quang.chau/71194604-2e3c-436b-8a93-f5294ae91a8b');
	});

	it('should be able to see the flagging overlay when you mouseover the player', function() {
		//mouseover player
		//see overlay
	});

	it('should be able to see the flagging options for the video', function() {
		//click on overlay
		//see options
	});

});