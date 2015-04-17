describe('Premium message', function() {

	it('should be able to go to BBC World page as a guest user and see the join message', function() {
		browser.get('http://www.livestation.com/bbc_world/6d6bafd8-1e3d-4200-8859-2f16ece887b5');
		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/bbc_world/6d6bafd8-1e3d-4200-8859-2f16ece887b5');

		browser.wait(10000);

		browser.driver.findElement(by.xpath('//*[@id="content_player_holder"]/div/div/div/div[2]/p')).getText().
			then(function(promise){
            expect(promise).toEqual('You will need to join Livestation andsubscribe to this station to watch this broadcast');
            console.log("Expected text is: " + promise); 
        });
	});

	it('should be able to login as user', function() {
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

	it('should be able to go to BBC World page as a user and see the sub  message', function() {
		browser.get('http://www.livestation.com/premium_nogb/55371af3-85d2-4132-b45b-6dea91da678d');
		expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/premium_nogb/55371af3-85d2-4132-b45b-6dea91da678d');

		browser.driver.findElement(by.xpath('//*[@id="content_player_holder"]/div/div/div/div[2]/p')).getText().
			then(function(promise){
            expect(promise).toEqual('You will need to subscribe to this station to watch this broadcast');
            console.log("Expected text is: " + promise); 
        });
	});

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