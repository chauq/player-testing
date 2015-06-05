describe('bottom menu bar', function() {

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

	it('should be able to scroll down the home page', function() {
		var scrollIntoView = function () {
        	arguments[0].scrollIntoView();
    	}

    	browser.executeScript(scrollIntoView, browser.driver.findElement(by.xpath('//*[@id="feeds-container"]/div[11]/a/img')));

    	//check if top bar is still here by clicking the home icon
    	var trending = element(by.id('home-icon'));

		trending.click();
	});

	it('should be able to click on the about text on the bottom menu bar', function() {
		var about = browser.driver.findElement(by.xpath('//*[@id="bottom-menu"]/div/div/div[1]/a'));

		about.click();

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/about');
	});

	it('should be able to got back to the home screen and scroll down the page', function() {
		browser.get('http://staging.lsng.livestation.com/home'); 

		var scrollIntoView = function () {
        	arguments[0].scrollIntoView();
    	}

    	browser.executeScript(scrollIntoView, browser.driver.findElement(by.xpath('//*[@id="feeds-container"]/div[11]/a/img')));
	});

	it('should be able to click on the T&C text on the bottom menu bar', function() {
		var about = browser.driver.findElement(by.xpath('//*[@id="bottom-menu"]/div/div/div[2]/a'));

		about.click();

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/about');
	});

	it('should be able to got back to the home screen and scroll down the page', function() {
		browser.get('http://staging.lsng.livestation.com/home'); 

		var scrollIntoView = function () {
        	arguments[0].scrollIntoView();
    	}

    	browser.executeScript(scrollIntoView, browser.driver.findElement(by.xpath('//*[@id="feeds-container"]/div[11]/a/img')));
	});

	it('should be able to click on the privacy text on the bottom menu bar', function() {
		var about = browser.driver.findElement(by.xpath('//*[@id="bottom-menu"]/div/div/div[3]/a'));

		about.click();

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/about');
	});

	it('should be able to got back to the home screen and scroll down the page', function() {
		browser.get('http://staging.lsng.livestation.com/home'); 

		var scrollIntoView = function () {
        	arguments[0].scrollIntoView();
    	}

    	browser.executeScript(scrollIntoView, browser.driver.findElement(by.xpath('//*[@id="feeds-container"]/div[11]/a/img')));
	});

	it('should be able to click on the support text on the bottom menu bar', function() {
		var about = browser.driver.findElement(by.xpath('//*[@id="bottom-menu"]/div/div/div[4]/a'));

		about.click();

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/about');
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