describe('lsng logout', function() {

	it('should be able to logout from home page', function() {
		var login = require('./login');

		var logout = require('./logout');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});

	it('should be able to logout from trending page', function() {
		browser.get('http://staging.lsng.livestation.com/'); 

		var login = require('./login');

		browser.get('http://staging.lsng.livestation.com/#/trending'); 

		var logout = require('./logout');

		browser.sleep(1000);

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});

	it('should be able to logout from stations page', function() {
		browser.sleep(1000);
		browser.get('http://staging.lsng.livestation.com/'); 

		var login = require('./login');

		browser.get('http://staging.lsng.livestation.com/#/stations'); 

		var logout = require('./logout');

		browser.sleep(1000);

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});

	it('should be able to logout from another user profile page', function() {
		var login = require('./login');

		browser.get('http://staging.lsng.livestation.com/#/station/Ash'); 

		var logout = require('./logout');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});

	it('should be able to logout from a live channel page', function() {
		var login = require('./login');

		browser.get('http://staging.lsng.livestation.com/#/station/france24_english/abf214bc-3fcc-4189-8440-52d2a85083c7'); 

		var logout = require('./logout');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});

	it('should be able to logout from own profile page', function() {
		var login = require('./login');

		browser.get('http://staging.lsng.livestation.com/#/profile'); 

		var logout = require('./logout');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});

}); 