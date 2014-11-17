describe('changePW/edge password login', function() {

	it('should be able to log in as a user using username', function() {
		browser.get('http://staging-lsng.livestation.com/'); 

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

		old.sendKeys('1');
		newPassword.sendKeys('Abc');
		confirm.sendKeys('Abc');

		element(by.id('btn-edit-profile-modal-done')).click();
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		var intro = element(by.css('.tagline'));

		avatar.click();
		logout.click();
		expect(intro.getText()).toEqual('Be There Now');
	});

	it('should be able to show a error message if user enters the old password', function() {
		browser.get('http://staging-lsng.livestation.com/'); 

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

		expect(done.getText()).toEqual('Wrong!');
	});

	it('should be able to show a error message if user enters a password with all caps in it', function() {
		browser.get('http://staging-lsng.livestation.com/'); 

		var login = element(by.css('.btn_intro_login'));
		var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		emailLogin.click();
		username.sendKeys('quangchau');
		password.sendKeys('ABC');
		done.click();

		expect(done.getText()).toEqual('Wrong!');
	});

	it('should be able to show a error message if user enters a password with no caps in it', function() {
		browser.get('http://staging-lsng.livestation.com/'); 

		var login = element(by.css('.btn_intro_login'));
		var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		emailLogin.click();
		username.sendKeys('quangchau');
		password.sendKeys('abc');
		done.click();

		expect(done.getText()).toEqual('Wrong!');
	});

	it('should be able to log in as a user using new password', function() {
		browser.get('http://staging-lsng.livestation.com/'); 

		var login = element(by.css('.btn_intro_login'));
		var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		emailLogin.click();
		username.sendKeys('quangchau');
		password.sendKeys('Abc');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quangchau');
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

		old.sendKeys('Abc');
		newPassword.sendKeys('1');
		confirm.sendKeys('1');

		element(by.id('btn-edit-profile-modal-done')).click();
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		var intro = element(by.css('.tagline'));

		avatar.click();
		logout.click();
		expect(intro.getText()).toEqual('Be There Now');
	});
});