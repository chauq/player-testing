describe('Video page', function() {

	it('should be able to log in as a user using username', function() {
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
	});

	it('should be able to go to the test station page by going to a link', function() {
		browser.get('http://www.livestation.com/quangchau/71194604-2e3c-436b-8a93-f5294ae91a8b');

		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/quangchau/71194604-2e3c-436b-8a93-f5294ae91a8b');
	});

	it('should be able to see the title of the video', function() {
		var title = element(by.css('.feed_title'));

		expect(title.getText()).toEqual('Timer test');
	});

	it('should be able to see the location of the video', function() {
		var location = browser.driver.findElement(by.xpath('//*[@id="content_detail"]/div/div[2]/span[3]'));

		expect(location.getText()).toEqual('• Hoxton, London, United Kingdom');
	});

	it('should be able to see the commentor of the video', function() {
		//var commentor = element(by.binding('commentor'));
		var commentor = browser.driver.findElement(by.xpath('//*[@id="comment.id"]/div/div/div[1]/div[1]'));

		expect(commentor.getText()).toEqual('You');
	});

	it('should be able to see the comment of the video', function() {
		//var comment = element(by.css('.comment_txt'));
		var comment = browser.driver.findElement(by.xpath('//*[@id="comment.id"]/div/div/div[2]'));

		expect(comment.getText()).toEqual('1');
	});
/*
	it('should be able to see the RELATED BROADCASTS title text', function() {
		var title = element(by.css('#rb_title'));

		expect(title.getText()).toEqual('RELATED BROADCASTS');
	});

	it('should be able to see the the title of the 1st RELATED BROADCASTS vod', function() {
		var title = browser.driver.findElement(by.xpath('//*[@id="directive-two-col-feed"]/div[1]/a/div/div[1]'));

		expect(title.getText()).toEqual('0:47');
	});
*/
	it('should be able to logout of the website', function() {
		//var logout = require('./logout');
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/intro');
	});

});