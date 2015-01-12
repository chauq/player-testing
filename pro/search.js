describe('search', function() {

	it('should be able to login from intro page', function() {
		browser.get('http://staging.lsng.livestation.com/'); 

		var login = element(by.css('.btn_intro_login'));
		var emailLogin = element(by.id('btn-modal-login-email'));
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

	it('should be able to search from intro page', function() {
		var search = element(by.id('search_txt'));

		search.click();
		search.sendKeys('bbc');
		search.sendKeys(protractor.Key.ENTER);
		search.sendKeys(protractor.Key.ENTER);
		//browser.sleep(10000);

		browser.driver.findElement(by.xpath('//*[@id="stations-container"]/div/div[2]')).getText().
			then(function(promise){
            expect(promise).toEqual('No Results');
            console.log("Expected text is: " + promise); 
        });
	});

	it('should be able to search from trending page', function() {
		browser.get('http://staging.lsng.livestation.com/#/trending'); 

		var search = element(by.id('search_txt'));

		search.click();
		search.sendKeys('timer');
		search.sendKeys(protractor.Key.ENTER);
		search.sendKeys(protractor.Key.ENTER);
		//browser.sleep(10000);

		browser.driver.findElement(by.xpath('//*[@id="trends-container"]/div/div[2]/a/div[2]/div[1]')).getText().
			then(function(promise){
            expect(promise).toEqual('Timer test');
            console.log("Expected text is: " + promise); 
        });
	});

	it('should be able to search from stations page', function() {
		browser.get('http://staging.lsng.livestation.com/#/stations'); 
		
		var search = element(by.id('search_txt'));

		search.click();
		search.sendKeys('bbc');
		search.sendKeys(protractor.Key.ENTER);
		search.sendKeys(protractor.Key.ENTER);
		//browser.sleep(10000);

		browser.driver.findElement(by.xpath('//*[@id="stations-container"]/div/div[2]/div/div[1]/div[1]')).getText().
			then(function(promise){
            expect(promise).toEqual('BBC News');
            console.log("Expected text is: " + promise); 
        });
	});

}); 