describe('Sub expired message', function() {

	it('should be able to login as user', function() {
		browser.get('http://staging.lsng.livestation.com/'); 

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		//emailLogin.click();
		username.sendKeys('qsub');
		password.sendKeys('123123');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back Q');
	});

	it('should be able to go to rt english page as a user and see the sub message', function() {
		browser.get('http://staging.lsng.livestation.com/rt_english/d530b854-c628-411a-b02f-43f6daeaa5f9');
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/rt_english/d530b854-c628-411a-b02f-43f6daeaa5f9');

		browser.driver.findElement(by.xpath('//*[@id="content_player_holder"]/div/div/div/div[2]/p')).getText().
			then(function(promise){
            expect(promise).toEqual('You will need to subscribe to this station to watch this broadcast');
            console.log("Expected text is: " + promise); 
        });
	});

	it('should be able to click on the learn more button and click on to the sub form', function() {
		var subHeader = element(by.css('.subscribe_info_head'));

		browser.driver.findElement(by.xpath('//*[@id="content_player_holder"]/div/div/div/div[2]/div')).click();
		expect(subHeader.getText()).toEqual('Premium Stations')
		browser.driver.findElement(by.xpath('//*[@id="subscribe-info-modal"]/div[2]/div/div/div/div[3]')).click();
	});

	it('should be able to fill in the form with the card_declined code', function() {
		var name = element(by.id('card_name_input'));
		var card_number = element(by.id('card_number_input'));
		var card_expiry = element(by.id('card_expiry_input'));
		var cvc = element(by.id('cvc_input'));
		var terms = browser.driver.findElement(by.xpath('//*[@id="subscribe-info-modal"]/div[2]/div/div/div/form/div/fieldset/div[3]/label/input'));
		var pay = browser.driver.findElement(by.xpath('//*[@id="subscribe-info-modal"]/div[2]/div/div/div/form/button'));

		name.sendKeys('qsub test');
		card_number.sendKeys('4000000000000069');
		card_expiry.sendKeys('1216');
		cvc.sendKeys('123');
		terms.click();
		pay.click();
	});

	it('The payement should fail and tell you why', function() {
		browser.sleep(15000);

		browser.driver.findElement(by.xpath('//*[@id="subscribe-info-modal"]/div[2]/div/div/div/div/div[1]')).getText().
			then(function(promise){
            expect(promise).toEqual('Subscription Failed');
            console.log("Expected text is: " + promise); 
        });

		browser.driver.findElement(by.xpath('//*[@id="subscribe-info-modal"]/div[2]/div/div/div/div/div[2]/div')).getText().
			then(function(promise){
            expect(promise).toEqual("Your card has expired.");
            console.log("Expected text is: " + promise); 
        });

	});

	it('should be able to exit the sub box and see the sub message again', function() {
		browser.driver.findElement(by.xpath('//*[@id="subscribe-info-modal"]/div[2]/div/div/div/div/div[3]')).click();

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

		//browser.driver.manage().window().maximize();

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/intro');
	});

}); 