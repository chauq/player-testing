describe('lsng login social', function() {

	it('should be able to show the login popup title', function() {
		browser.get('http://staging.lsng.livestation.com/intro'); 

		var login = element(by.id('btn-intro-login'));
		var title = element(by.css('.modal h1'));

		login.click();

		expect(title.getText()).toEqual('Log In');
	});

	it('should be able to log in as a facebook user', function() {
		browser.get('http://staging.lsng.livestation.com/intro'); 

		var login = element(by.id('btn-intro-login'));
		//var fbLogin = browser.driver.findElement(by.xpath('//*[@id="btn-modal-login-fb"]/img'))
		var fbLogin = element(by.id('btn-modal-login-fb'));
		var fbusername = element(by.id('email'));
		var fbpassword = element(by.id('pass'));
		var fbdone = element(by.id('u_0_1'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		fbLogin.click();
		fbusername.sendkeys('lsftest101@gmail.com');
		fbpassword.sendkeys('jackpot123');
		fbdone.click();

		expect(welcome.getText()).toEqual('Welcome back quang');
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		//browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/intro');
	});

	it('should be able to log in as a Twitter user', function() {
		browser.get('http://staging.lsng.livestation.com/#/intro'); 

		var login = element(by.id('btn-intro-login'));
		var twitterLogin = browser.driver.findElement(by.xpath('//*[@id="btn-modal-login-twitter"]/img'))
		var welcome = element(by.css('.welcome_text'));

		login.click();
		twitterLogin.click();

		expect(welcome.getText()).toEqual('Welcome back quang');
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		//browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/intro');
	});
	
});