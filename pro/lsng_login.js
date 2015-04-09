describe('lsng login', function() {

	it('should be able to show the login popup title', function() {
		browser.get('http://staging.lsng.livestation.com/intro'); 

		var login = element(by.css('.login_txt a'));
		var title = element(by.css('.modal h1'));

		login.click();

		expect(title.getText()).toEqual('Log in');
	});

	it('should be able to show a error message if user enters wrong login details', function() {
		browser.get('http://staging.lsng.livestation.com/intro'); 

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));

		login.click();
		//emailLogin.click();
		username.sendKeys('quang');
		password.sendKeys('123456');
		done.click();

		expect(done.getText()).toEqual('Login');
	});

	it('should be able to log in as a user using username', function() {
		browser.get('http://staging.lsng.livestation.com/intro'); 

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		//emailLogin.click();
		username.sendKeys('quangchau');
		password.sendKeys('123123');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/intro');
	});
	
});

