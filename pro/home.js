describe('lsng home', function() {

	it('should be able to log in as a user using username', function() {
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
		password.sendKeys('1');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quangchau');
	});

	it('should be able to see the BBC World News station', function() {
		var bbc = element.all(by.css('.feed_text_holder')).get(1);

		expect(bbc.getText()).toEqual("Watch BBC WorldNews\nby Bbc-world\nLIVE");
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

	it('should be able to scroll up the home page', function() {
		var scrollIntoView = function () {
        	arguments[0].scrollIntoView();
    	}

    	browser.executeScript(scrollIntoView, browser.driver.findElement(by.xpath('//*[@id="feeds-container"]/div[3]/a/img')));

    	//check if top bar is still here by clicking the home icon
    	var trending = element(by.id('home-icon'));

		trending.click();
	});


	it('should be able to go to the station list page by clicking on the icon', function() {
		var station = element(by.id('stations-icon'));

		station.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/stations');
	});


	it('should be able to go to the trending page by clicking on the icon', function() {
		var trending = element(by.id('trend-icon'));

		trending.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/trending');
	});

	it('should be able to go back to the home page by clicking on the icon', function() {
		var home = element(by.id('home-icon'));

		home.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/home');
	});

	it('should be able to click on the explore trending button and go to the trending page', function() {
		var explore = element(by.id('btn_feed_explore_trending'));

		explore.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/trending');
	});

	it('should be able to click on the BBC button and go to the BBC page', function() {
		//browser.driver.findElement(by.css('.feed_img')).get(2).click();
		var bbc = element.all(by.css('.feed_text_holder')).get(1);

		bbc.click();

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/station/bbc_world/8d889d9c-de66-4c82-b9c9-54dcf70dc031');

		var feeds = element.all(by.repeater('feed in feeds'));

		feeds.first().then(function(elm){
			elm.click();
		});
	
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		var intro = element(by.css('.tagline'));

		browser.driver.manage().window().maximize();
		avatar.click();
		//browser.sleep(1000);
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});

});

