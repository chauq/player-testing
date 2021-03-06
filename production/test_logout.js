describe('lsng logout test', function() {
/*
	it('should be able to logout from trending page', function() {
		browser.get('http://wwww.livestation.com'); 

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		//emailLogin.click();
		username.sendKeys('quangchau');
		password.sendKeys('cologi37');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');

		browser.get('http://www.livestation.com/trending');

		var logout = require('./logout');

		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/intro');
	});
*/
	it('should be able to logout from stations page', function() {
		browser.get('http://www.livestation.com/'); 

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		//emailLogin.click();
		username.sendKeys('quangchau');
		password.sendKeys('cologi37');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');

		browser.get('http://www.livestation.com/stations'); 

		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();

		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/intro');
	});

	it('should be able to logout from another user profile page', function() {
		browser.get('http://www.livestation.com/'); 

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		//emailLogin.click();
		username.sendKeys('quangchau');
		password.sendKeys('cologi37');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');

		browser.get('http://www.livestation.com/station/Ash'); 

		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();

		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/intro');
	});

	it('should be able to logout from a live channel page', function() {
		browser.get('http://www.livestation.com/'); 

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		//emailLogin.click();
		username.sendKeys('quangchau');
		password.sendKeys('cologi37');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');

		browser.get('http://www.livestation.com/station/france24_english/abf214bc-3fcc-4189-8440-52d2a85083c7'); 

		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();

		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/intro');
	});

	it('should be able to logout from own profile page', function() {
		browser.get('http://www.livestation.com/'); 

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		//emailLogin.click();
		username.sendKeys('quangchau');
		password.sendKeys('cologi37');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');

		browser.get('http://www.livestation.com/profile'); 

		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();

		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/intro');
	});

	it('should be able to logout from station profile page', function() {
		browser.get('http://www.livestation.com/'); 

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		//emailLogin.click();
		username.sendKeys('quangchau');
		password.sendKeys('cologi37');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');

		browser.get('http://www.livestation.com/station/sky_news_international'); 

		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();

		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/intro');
	});

	it('should be able to logout from VoD page', function() {
		browser.get('http://www.livestation.com/'); 

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		//emailLogin.click();
		username.sendKeys('quangchau');
		password.sendKeys('cologi37');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');

		browser.get('http://www.livestation.com/station/Ash/bb50dd05-3bbd-4d86-b65f-acc5112e8a36'); 

		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();

		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/intro');
	});

/*
	it('should be able to logout after logging in from the guest user pop up', function() {
		browser.get('http://www.livestation.com/station/Ash/bb50dd05-3bbd-4d86-b65f-acc5112e8a36'); 

		browser.sleep(1000);
		var guest = element(by.css('.top_guest_overlay'));
		var login = browser.driver.findElement(by.xpath('/html/body/div[5]/div/div/div/div/div[1]/div[5]/span/a'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		guest.click();
		login.click();

		//browser.get('http://www.livestation.com/#/login/email'); 
		
		username.sendKeys('quangchau');
		password.sendKeys('cologi37');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');

		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();

		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/intro');
	});
*/
}); 