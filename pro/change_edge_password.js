describe('changePW/edge password login', function() {

	it('should be able to log in as a user using username', function() {
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
		password.sendKeys('123123');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');
	});

	it('should be able to go to the edit user profile pop up', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var edit = element(by.id('top-drop-edit-profile'));
		var title = element(by.css('.regHead'));

		browser.driver.manage().window().maximize();
		avatar.click();
		edit.click();

		expect(title.getText()).toEqual('Edit Profile');
	});

	it('should be able to change the user password for testing edge cases', function() {
		var old = element(by.id('old_password_input'));
		var newPassword = element(by.id('new_password_input'));
		var confirm = element(by.id('conf_password_input'));

		old.sendKeys('123123');
		newPassword.sendKeys('AbcAbc');
		confirm.sendKeys('AbcAbc');

		element(by.id('btn-edit-profile-modal-done')).click();
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});

	it('should be able to show a error message if user enters the old password', function() {
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
		password.sendKeys('123123');
		done.click();

		expect(done.getText()).toEqual('Login');
	});

	it('should be able to show a error message if user enters a password with all caps in it', function() {
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
		password.sendKeys('ABCABC');
		done.click();

		expect(done.getText()).toEqual('Login');
	});

	it('should be able to show a error message if user enters a password with no caps in it', function() {
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
		password.sendKeys('abcabc');
		done.click();

		expect(done.getText()).toEqual('Login');
	});

	it('should be able to log in as a user using new password', function() {
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
		password.sendKeys('AbcAbc');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');
	});

	it('should be able to go to the edit user profile pop up', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var edit = element(by.id('top-drop-edit-profile'));
		var title = element(by.css('.regHead'));

		avatar.click();
		edit.click();

		expect(title.getText()).toEqual('Edit Profile');
	});

	it('should be able to change the user password back to the old password', function() {
		var old = element(by.id('old_password_input'));
		var newPassword = element(by.id('new_password_input'));
		var confirm = element(by.id('conf_password_input'));

		old.sendKeys('AbcAbc');
		newPassword.sendKeys('123123');
		confirm.sendKeys('123123');

		element(by.id('btn-edit-profile-modal-done')).click();
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});
});