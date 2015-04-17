describe('edge username login', function() {

	it('should be able to log in as a user using username, even if the username has caps in it', function() {
		browser.get('http://www.livestation.com/'); 

		browser.waitForAngular();

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		//emailLogin.click();
		username.sendKeys('QuangChau');
		password.sendKeys('cologi37');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/intro');
	});

	it('should be able to log in as a user using username, even if the username has a space in front of it', function() {
		browser.get('http://www.livestation.com/'); 

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		//emailLogin.click();
		username.sendKeys(' quangchau');
		password.sendKeys('cologi37');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/intro');
	});

	it('should be able to log in as a user using username, even if the username has a space in after of it', function() {
		browser.get('http://www.livestation.com/'); 

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		//emailLogin.click();
		username.sendKeys('quangchau ');
		password.sendKeys('cologi37');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/intro');
	});
	
});