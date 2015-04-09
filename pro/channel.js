describe('watch a channel', function() {

	it('should be able to log in as a user using username', function() {
		var login = require('./login');
		var welcome = element(by.css('.welcome_text'));

		expect(welcome.getText()).toEqual('Welcome back quang');
	});

	it('should be able to go to the station list page by clicking on the icon', function() {
		var station = element(by.id('stations_link'));

		station.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/stations');
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

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/station/sky_news_international/712d5ee5-867c-4fde-b34e-b48f3fbf3ac0');

			browser.driver.findElement(by.xpath('//*[@id="rb_title"]')).getText().
			    then(function(promise){
                expect(promise).toEqual('RELATED BROADCASTS');
                console.log("Expected text is: " + promise); 
            });
	});

	it('should be able to go to the video page by going to a link', function() {
		browser.get('http://staging.lsng.livestation.com/#/station/sky_news_international/712d5ee5-867c-4fde-b34e-b48f3fbf3ac0');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/station/sky_news_international/712d5ee5-867c-4fde-b34e-b48f3fbf3ac0');

			/*browser.driver.findElement(by.xpath('//*[@id="rb_title"]')).getText().
			    then(function(promise){
                expect(promise).toEqual('RELATED BROADCASTS');
                console.log("Expected text is: " + promise); 
            });*/
	});

	it('should be able to logout of the website', function() {
		var logout = require('./logout');
	});

});