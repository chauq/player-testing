describe('trending page', function() {

	it('should be able to log in as a user using username', function() {
		browser.get('http://staging.lsng.livestation.com/'); 

		var login = element(by.id('btn-intro-login'));
		var emailLogin = element(by.css('.login_email_txt a'));
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

	it('should be able to go to the trending page by clicking on the icon', function() {
		var trending = element(by.id('trend-icon'));

		trending.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/trending');
	});

	it('should be able to scroll down the trending page', function() {
		var scrollIntoView = function () {
        	arguments[0].scrollIntoView();
    	}

    	browser.executeScript(scrollIntoView, browser.driver.findElement(by.xpath('//*[@id="trends-container"]/div[50]/span/span/div/div[1]/a/div/div[1]/div')));

    	//check if top bar is still here by clicking the trend icon
    	var trending = element(by.id('trend-icon'));

		trending.click();
	});

	it('should be able to scroll up the trending page', function() {
		var scrollIntoView = function () {
        	arguments[0].scrollIntoView();
    	}

    	browser.executeScript(scrollIntoView, browser.driver.findElement(by.xpath('//*[@id="trends-container"]/div[2]/span/span/div/div[2]/a/div/div[1]/div')));

    	//check if top bar is still here by clicking the trend icon
    	var trending = element(by.id('trend-icon'));

		trending.click();
	});

	it('should be able to go to the BBC station page by clicking on the icon', function() {
		//element.all(by.css('.itembgratio .ratio-content')).get(1).click();
		browser.driver.findElement(by.xpath('//*[@id="trends-container"]/div[2]/span/span/div/div[2]/a/div/div[1]/div')).click();

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/profile/f08f288d-78d2-4a77-aff5-d9f771814a65');
	});

});