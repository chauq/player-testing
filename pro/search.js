describe('search', function() {

	it('should be able to login from intro page', function() {
		browser.get('http://staging.lsng.livestation.com/'); 

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

		expect(welcome.getText()).toEqual('Welcome back quang');
	});

	it('should be able to search from intro page', function() {
		var search = element(by.id('search_txt'));

		search.click();
		search.sendKeys('bbc');
		search.sendKeys(protractor.Key.ENTER);
		search.sendKeys(protractor.Key.ENTER);
		browser.sleep(10000);

		//expect(welcome.getText()).toEqual('Welcome back quang');
	});

}); 