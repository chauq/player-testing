describe('watch a channel', function() {

	it('should be able to log in as a user using username', function() {
		var login = require('./login');
		var welcome = element(by.css('.welcome_text'));

		expect(welcome.getText()).toEqual('Welcome back quangchau');
	});

	it('should be able to go to the station list page by clicking on the icon', function() {
		var station = element(by.id('stations-icon'));

		station.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/stations');
	});

	it('should be able to scroll down the station page', function() {
		var scrollIntoView = function () {
        	arguments[0].scrollIntoView();
    	}

    	browser.executeScript(scrollIntoView, browser.driver.findElement(by.xpath('//*[@id="stations-container"]/div[50]/div/a/div/div/div/div/img')));

    	//check if top bar is still here by clicking the station icon
		var station = element(by.id('stations-icon'));

		station.click();
	});

	it('should be able to scroll up the station page', function() {
		var scrollIntoView = function () {
        	arguments[0].scrollIntoView();
    	}

    	browser.executeScript(scrollIntoView, browser.driver.findElement(by.xpath('//*[@id="stations-container"]/div[2]/div/a/div/div/div/div/img')));

    	//check if top bar is still here by clicking the station icon
		var station = element(by.id('stations-icon'));

		station.click();
	});


	it('should be able to go to the station page by clicking on the icon', function() {
		browser.get('http://staging.lsng.livestation.com/#/stations');
		element.all(by.css('.station-avatar-bg img')).get(1).click();

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/profile/41e0a4d4-fbcb-4d16-818a-666dec0ea7d1');
	});

	it('should be able to go to the video page by going to a link', function() {
		browser.get('http://staging.lsng.livestation.com/#/profile/f08f288d-78d2-4a77-aff5-d9f771814a65');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/profile/f08f288d-78d2-4a77-aff5-d9f771814a65');
	});

});