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
		browser.get('http://lsng.livestation.com/#/content/f3bcfa38-8adf-46e0-8629-b0fc3d0d1fcb');

		expect(browser.getCurrentUrl()).toEqual('http://lsng.livestation.com/#/content/f3bcfa38-8adf-46e0-8629-b0fc3d0d1fcb');
	});

	it('should be able to see the title of the video', function() {
		var title = element(by.css('.feed_title'));

		expect(title.getText()).toEqual('Rec 20 sec test');
	});

	it('should be able to see the location of the video', function() {
		var location = browser.driver.findElement(by.xpath('//*[@id="content_detail"]/div[2]/div[2]/span[2]'));

		expect(location.getText()).toEqual('• Bevenden Street, London, United Kingdom');
	});

	it('should be able to see the commentor of the video', function() {
		var commentor = element(by.binding('commentor'));

		expect(commentor.getText()).toEqual('lippe.oo');
	});

	it('should be able to see the commentor of the video', function() {
		var comment = element(by.css('.comment_txt'));

		expect(comment.getText()).toEqual('boom');
	});

	it('should be able to see the RELATED BROADCASTS title text', function() {
		var title = element(by.css('#rb_title'));

		expect(title.getText()).toEqual('RELATED BROADCASTS');
	});

	it('should be able to see the the title of the 1st RELATED BROADCASTS vod', function() {
		var title = browser.driver.findElement(by.xpath('//*[@id="directive-two-col-feed"]/div[1]/a/div/div[1]'));

		expect(title.getText()).toEqual('Rec 20 sec test');
	});

});