describe('Join as existing user', function() {

	it('should be able sign up with email from the home page', function() {
		browser.get('http://www.livestation.com/intro'); 

		var join = element(by.id('btn-intro-login'));
		var email = element(by.id('btn-modal-reg-email'));
		var title = element(by.css('.regHead'));

		join.click();
		email.click();

		expect(title.getText()).toEqual('Join Now');
	});

	it('should not let the user to sign up using the same email/username', function() {
		var username = element(by.id('username_input'));
		var first = element(by.id('first_name_input'));
		var last = element(by.id('last_name_input'));
		var email = element(by.id('email_input'));
		var password = element(by.id('password_input'));
		var conf = element(by.id('password_conf_input'));
		var done = element(by.id('btn-modal-reg-email-done'));

		username.sendKeys('quangchau');
		first.sendKeys('quang');
		last.sendKeys('chau');
		email.sendKeys('quang.chau@livestation.com');
		password.sendKeys('123456');
		conf.sendKeys('123456');

		done.click();

		expect(done.getText()).toEqual('Done');
	});

/*
	it('should be able sign up with email from the guest user pop up', function() {
		browser.get('http://www.livestation.com/Ash/bb50dd05-3bbd-4d86-b65f-acc5112e8a36'); 

		browser.sleep(1000);
		//var guest = element(by.css('.top_guest_overlay'));
		var guest = element(by.id('content'));
		var email = browser.driver.findElement(by.xpath('//*[@id="btn-modal-login-email"]'));
		var title = element(by.css('.regHead'));

		guest.click();
		email.click();

		expect(title.getText()).toEqual('Join Now');
	});

	it('should not let the user to sign up using the same email/username from the guest user pop up', function() {
		//browser.get('http://www.livestation.com/#/register/email'); 
		
		var username = element(by.id('username_input'));
		var first = element(by.id('first_name_input'));
		var last = element(by.id('last_name_input'));
		var email = element(by.id('email_input'));
		var password = element(by.id('password_input'));
		var conf = element(by.id('password_conf_input'));
		var done = element(by.id('btn-modal-reg-email-done'));

		username.sendKeys('quangchau');
		first.sendKeys('quang');
		last.sendKeys('chau');
		email.sendKeys('quang.chau@livestation.com');
		password.sendKeys('123456');
		conf.sendKeys('123456');

		done.click();

		expect(done.getText()).toEqual('Done');
	});
*/

});