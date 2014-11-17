describe('lsng login', function() {

	it('should be able to show the login popup title', function() {
		browser.get('http://staging-lsng.livestation.com/#/intro'); 

		var login = element(by.css('.btn_intro_login'));
		var title = element(by.css('.modal h1'));

		login.click();

		expect(title.getText()).toEqual('Log In');
	});

	it('should be able to show a error message if user enters wrong login details', function() {
		browser.get('http://staging-lsng.livestation.com/#/intro'); 

		var login = element(by.css('.btn_intro_login'));
		var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		emailLogin.click();
		username.sendKeys('quang');
		password.sendKeys('12');
		done.click();

		expect(done.getText()).toEqual('Wrong!');
	});

	it('should be able to log in as a user using username', function() {
		browser.get('http://staging-lsng.livestation.com/#/intro'); 

		var login = element(by.css('.btn_intro_login'));
		var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		emailLogin.click();
		username.sendKeys('quangchau');
		password.sendKeys('1');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quangchau');
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		var intro = element(by.css('.tagline'));

		browser.driver.manage().window().maximize();
		avatar.click();
		logout.click();
		expect(intro.getText()).toEqual('Be There Now');
	});
	
});

