describe('Video page', function() {

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

	it('should be able to go to the test station page by going to a link', function() {
		browser.get('http://lsng.livestation.com/#/content/d5d0fac3-7398-43cf-87b0-225347ca8345');

		expect(browser.getCurrentUrl()).toEqual('http://lsng.livestation.com/#/content/d5d0fac3-7398-43cf-87b0-225347ca8345');
	});

	it('should be able to see the title of the video', function() {
		var title = element(by.css('.feed_title'));

		expect(title.getText()).toEqual('Proteus Core Take Two');
	});

	it('should be able to see the location of the video', function() {
		var location = browser.driver.findElement(by.xpath('//*[@id="content_detail"]/div[2]/div[2]/span[2]'));

		expect(location.getText()).toEqual('• Auckland, New Zealand');
	});

	it('should be able to see the commentor of the video', function() {
		var commentor = element(by.binding('commentor'));

		expect(commentor.getText()).toEqual('tomekn');
	});

	it('should be able to see the commentor of the video', function() {
		var comment = element(by.css('.comment_txt'));

		expect(comment.getText()).toEqual('asdasd');
	});

	it('should be able to see the RELATED BROADCASTS title text', function() {
		var title = element(by.css('#rb_title'));

		expect(title.getText()).toEqual('RELATED BROADCASTS');
	});

	it('should be able to see the the title of the 1st RELATED BROADCASTS vod', function() {
		var title = browser.driver.findElement(by.xpath('//*[@id="directive-two-col-feed"]/div[1]/a/div/div[1]'));

		expect(title.getText()).toEqual('Test 13');
	});

});