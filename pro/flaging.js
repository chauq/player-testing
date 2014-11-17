describe('flaging', function() {

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

		expect(welcome.getText()).toEqual('Welcome back qaangchau');
	});

	it('should be able to go to the timer test', function() {
		browser.get('http://staging-lsng.livestation.com/#/content/71194604-2e3c-436b-8a93-f5294ae91a8b'); 

	});


	it('should be able to add a comment', function() {
		var comment = element(by.id('comment_txt'));
		//var sent = browser.driver.findElement(by.xpath('//*[@id="comment_send_btn"]'));
		//var sent = element(by.id('comment_send_btn'));

		comment.sendKeys('1');
		//browser.driver.manage().window().maximize()
		//sent.click();
				browser.driver.findElement(by.xpath('//*[@id="comment.id"]/div/div/div[3]')).getText().
			    then(function(promise){
                expect(promise).toEqual('1');               
                console.log("Expected text is: " + promise); 
            });
	});

	it('should be able to click on the flag icon of that 1 comment', function() {
		browser.driver.actions().mouseMove(browser.driver.findElement(by.xpath('//*[@id="comment_avatar"]/img'))).perform();
		//var flag = browser.driver.findElement(by.xpath('//*[@id="report-button"]/a/img"]'));
		var flag = element(by.id('report-button'));
		//var time = browser.driver.findElement(by.xpath('//*[@id="live-or-time"]'));

		//time.click();
		flag.click();
				browser.driver.findElement(by.xpath('//*[@id="comment.id"]/div/div/div[1]')).getText().
			    then(function(promise){
                expect(promise).toEqual('You are about to report this comment.');               
                console.log("Expected text is: " + promise); 
            });
	});

	it('should be able to to click on the yes button', function() {
		//var yes = element(by.id('btn btn-primary btn-small pull-right'));
		var yes = browser.driver.findElement(by.xpath('//*[@id="comment.id"]/div/div/div[3]/button[2]'))
		yes.click();
	});

	it('should be able to logout of the website', function() {
		browser.get('http://staging-lsng.livestation.com/'); 
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		var intro = element(by.css('.tagline'));

		avatar.click();
		logout.click();
		expect(intro.getText()).toEqual('Be There Now');
	});

});
