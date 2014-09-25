describe('watch a channel', function() {

	it('should be able to log in as a user using username', function() {
		var login = require('./login');
		var welcome = element(by.css('.welcome_text'));

		expect(welcome.getText()).toEqual('Welcome back Quang.chau');
	});

	it('should be able to go to the station list page by clicking on the icon', function() {
		var station = element(by.id('stations-icon'));

		station.click();
		expect(browser.getCurrentUrl()).toEqual('http://lsng.livestation.com/#/stations');
	});


	it('should be able to go to the station page by clicking on the icon', function() {
		browser.get('http://lsng.livestation.com/#/stations');
		element.all(by.css('.station-avatar-bg img')).get(1).click();

		expect(browser.getCurrentUrl()).toEqual('http://lsng.livestation.com/#/profile/f08f288d-78d2-4a77-aff5-d9f771814a65');
	});

	it('should be able to go to the video page by going to a link', function() {
		browser.get('http://lsng.livestation.com/#/profile/f08f288d-78d2-4a77-aff5-d9f771814a65');

		expect(browser.getCurrentUrl()).toEqual('http://lsng.livestation.com/#/profile/f08f288d-78d2-4a77-aff5-d9f771814a65');
	});

});