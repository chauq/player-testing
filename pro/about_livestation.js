describe('About Livestation', function() {

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

	it('should be able to see the about Livestation page', function() {
		browser.get('http://staging.lsng.livestation.com/about'); 

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/about');
	});

	it('should be able to see the terms page', function() {
		browser.driver.findElement(by.xpath('//*[@id="terms_link"]')).click();

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/terms');
	});

	it('should be able to see the privacy page', function() {
		browser.driver.findElement(by.xpath('//*[@id="privacy_link"]')).click();

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/privacy');
	});

	it('should be able to see the support page', function() {
	});

	it('should be able to see the channels page', function() {
		browser.driver.findElement(by.xpath('//*[@id="channels_link"]')).click();

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/channels');
	});

	it('should be able to logout of the website', function() {
		browser.get('http://staging.lsng.livestation.com'); 
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		browser.driver.manage().window().maximize();
		
		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/intro');
	});

});