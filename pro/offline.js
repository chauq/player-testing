describe('See a offline channel', function() {

	it('should be able to log in as a user using username', function() {
		var login = require('./login');
	});

	it('should be able to go a offline channel and see a message', function() {
		browser.get('http://staging-lsng.livestation.com/#/station/Ash');

		expect(browser.getCurrentUrl()).toEqual('http://staging-lsng.livestation.com/#/station/Ash');

				browser.driver.findElement(by.xpath('//*[@id="not_live_thumb"]/div[1]')).getText().
			    then(function(promise){
                expect(promise).toEqual('Currently Offline');               
                console.log("Expected text is: " + promise); 
            });
	});

});