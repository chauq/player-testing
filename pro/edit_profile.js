describe('edit user profile', function() {

	it('should be able to log in as a user using username', function() {
		browser.get('http://staging.lsng.livestation.com/'); 

		var login = element(by.id('btn-intro-login'));
		var emailLogin = element(by.css('.login_email_txt a'));
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

		avatar.click();
		edit.click();

		expect(title.getText()).toEqual('Edit Profile');
	});

	it('should be able to change the user details', function() {
		var username = element(by.id('username_input'));
		var first_name = element(by.id('first_name_input'));
		var last_name = element(by.id('last_name_input'));
		var email = element(by.id('email_input'));
		var bio = element(by.id('bio_input'));

		username.clear();
		username.sendKeys('quangchau');

		first_name.clear();
		first_name.sendKeys('quang');

		last_name.clear();
		last_name.sendKeys('chau');

		email.clear();
		email.sendKeys('quang.chau@livestation.com');

		bio.clear();
		bio.sendKeys('appium test');

		element(by.id('btn-edit-profile-modal-done')).click();
		element(by.id('top_menu_avatar')).click();
		element(by.id('top-drop-edit-profile')).click();

		expect(username.getText()).toEqual('');
	});
});