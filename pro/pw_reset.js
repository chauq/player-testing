describe('password reset', function() {

	it('should be able to show a password reset pop up', function() {
		browser.get('http://staging.lsng.livestation.com/intro'); 

		var login = element(by.id('btn-intro-login'));
		var emailLogin = element(by.css('.login_email_txt a'));
		var forgotten = element(by.id('forgotten_image'));

		login.click();
		emailLogin.click();
		forgotten.click();
	});

	it('should be able to enter an email on the reset box', function() {

		var emailreset = element(by.id('forgot_password_email_input'));
		var done = element(by.id('btn-modal-forgot-password-done'));

		emailreset.sendKeys('lsftest102@gmail.com');
		done.click();
	});

	it('should be able to go back to home page', function() {
		
		var gotit = element(by.id('btn-modal-got-it'));

		gotit.click();
	});

	/*it('should be able to go gmail inbox', function() {
		browser.ignoreSynchronization = true
		browser.get('http://www.gmail.com'); 
		
		var email = element(by.id('Email'));
		var password = element(by.id('Passwd'));
		var signin = element(by.id('signIn'));

		email.sendKeys('lsftest102@gmail.com');
		password.sendKeys('jackpot123');
		signin.click();
	});*/
	
	it('should be able to go gmail inbox', function() {
		browser.driver.get('http://www.gmail.com'); 

		browser.driver.findElement(by.id('Email')).sendKeys('lsftest102@gmail.com');
		browser.driver.findElement(by.id('Passwd')).sendKeys('jackpot123');
		browser.driver.findElement(by.id('signIn')).click();
	});

	it('should be able get into the password reset email', function() {
		browser.driver.findElement(by.name('Livestation Support')).click();
		browser.driver.findElement(by.xpath('//*[@id=":iz"]/div/div[2]/div/div[3]/a')).click();
	});


}); 