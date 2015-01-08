describe('lsng login social', function() {

	it('should be able to show the login popup title', function() {
		browser.get('http://staging.lsng.livestation.com/#/intro'); 

		var login = element(by.css('.btn_intro_login'));
		var title = element(by.css('.modal h1'));

		login.click();

		expect(title.getText()).toEqual('Log In');
	});

	it('should be able to log in as a facebook user', function() {
		browser.get('http://staging.lsng.livestation.com/#/intro'); 

		var login = element(by.css('.btn_intro_login'));
		var FBLogin = browser.driver.findElement(by.xpath('//*[@id="btn-modal-login-fb"]/img'))
		var FBusername = element(by.id('email'));
		var FBpassword = element(by.id('pass'));
		var FBdone = element(by.id('u_0_1'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		FBLogin.click();
		FBusername.sendkeys('lsftest101@gmail.com');
		FBpassword.sendkeys('jackpot123');
		FBdone.click();

		expect(welcome.getText()).toEqual('Welcome back quang');
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});

	it('should be able to log in as a Twitter user', function() {
		browser.get('http://staging.lsng.livestation.com/#/intro'); 

		var login = element(by.css('.btn_intro_login'));
		var TwitterLogin = browser.driver.findElement(by.xpath('//*[@id="btn-modal-login-twitter"]/img'))
		var welcome = element(by.css('.welcome_text'));

		login.click();
		TwitterLogin.click();

		expect(welcome.getText()).toEqual('Welcome back quang');
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});
	
});