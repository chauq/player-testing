describe('test configuration fr', function() {

	it('should be able to login as developers_fr', function() {
		browser.get('http://staging.lsng.livestation.com/'); 

		var login = element(by.id('btn-intro-login'));
		var emailLogin = element(by.css('.login_email_txt a'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		emailLogin.click();
		username.sendKeys('developers_fr');
		password.sendKeys('developers_fr');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back Francis');
	});

	it('should be able to go to available_nogb page and see the channel', function() {
		browser.get('http://staging.lsng.livestation.com/available_nogb/591dbbd7-e69d-41c6-bf4a-d49cf2afbeb1');
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/available_nogb/591dbbd7-e69d-41c6-bf4a-d49cf2afbeb1');

		browser.driver.findElement(by.xpath('//*[@id="content_detail"]/div/div[1]')).getText().
			then(function(promise){
            expect(promise).toEqual('Available - No GB');
            console.log("Expected text is: " + promise); 
        });
	});

	it('should be able to go to premium_nogb page and see the channel', function() {
		browser.get('http://staging.lsng.livestation.com/premium_nogb/55371af3-85d2-4132-b45b-6dea91da678d');
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/premium_nogb/55371af3-85d2-4132-b45b-6dea91da678d');

		browser.driver.findElement(by.xpath('//*[@id="content_detail"]/div/div[1]')).getText().
			then(function(promise){
            expect(promise).toEqual('Premium - No GB');
            console.log("Expected text is: " + promise); 
        });
	});

	it('should be able to go to available_everywhere page and see the channel', function() {
		browser.get('http://staging.lsng.livestation.com/available_everywhere/62a345e4-9de9-4607-964f-4cf2c17a8057');
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/available_everywhere/62a345e4-9de9-4607-964f-4cf2c17a8057');

		browser.driver.findElement(by.xpath('//*[@id="content_detail"]/div/div[1]')).getText().
			then(function(promise){
            expect(promise).toEqual('Available Everywhere');
            console.log("Expected text is: " + promise); 
        });
	});

	it('should be able to logout of the website', function() {
		//var logout = require('./logout');
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/intro');
	});


}); 