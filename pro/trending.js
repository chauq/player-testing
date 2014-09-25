describe('trending page', function() {

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

	it('should be able to go to the trending page by clicking on the icon', function() {
		var trending = element(by.id('trend-icon'));

		trending.click();
		expect(browser.getCurrentUrl()).toEqual('http://lsng.livestation.com/#/trending');
	});

	it('should be able to go to the BBC station page by clicking on the icon', function() {
		//element.all(by.css('.itembgratio .ratio-content')).get(1).click();
		browser.driver.findElement(by.xpath('//*[@id="trends-container"]/div[2]/span/span/div/div[1]/a/div/div[1]/div')).click();
		var name = browser.driver.findElement(by.xpath('//*[@id="content_detail"]/div[2]/div[1]'));

		//expect(browser.getCurrentUrl()).toEqual('http://lsng.livestation.com/#/content/eea014ce-25e2-4090-af51-bddf446b2e04');
		expect(name.getText()).toEqual('Watch BBC WorldNews');
	});

});