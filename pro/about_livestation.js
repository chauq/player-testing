describe('About Livestation', function() {

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

	it('should be able to see the about Livestation page', function() {
		browser.get('http://lsng.livestation.com/#/about'); 

		expect(browser.getCurrentUrl()).toEqual('http://staging-lsng.livestation.com/about');
	});

	it('should be able to see the terms page', function() {
		browser.driver.findElement(by.xpath('//*[@id="footer_container"]/div/div[1]/ul/li[2]/a')).click();

		expect(browser.getCurrentUrl()).toEqual('http://staging-lsng.livestation.com/terms');
	});

	it('should be able to see the privacy page', function() {
		browser.driver.findElement(by.xpath('//*[@id="footer_container"]/div/div[1]/ul/li[3]/a')).click();

		expect(browser.getCurrentUrl()).toEqual('http://staging-lsng.livestation.com/#/privacy');
	});

	it('should be able to see the support page', function() {
		//browser.driver.findElement(by.xpath('//*[@id="footer_container"]/div/div[1]/ul/li[4]/a')).click();

		//browser.sleep(10000);
		//expect(browser.getCurrentUrl()).toEqual('http://livestation.zendesk.com/categories/20063236-frequently-asked-questions');
	});

	it('should be able to logout of the website', function() {
		browser.get('http://lsng.livestation.com'); 
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		var intro = element(by.css('.tagline'));

		avatar.click();
		logout.click();
		expect(intro.getText()).toEqual('Be There Now');
	});

});