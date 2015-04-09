describe('See a 404 page', function() {

	it('should be able to log in as a user using username', function() {
		var login = require('./login');
	});

	it('should be able to go a page that is not on staging and see a 404 message', function() {
		browser.get('http://staging.lsng.livestation.com/downloads');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/404.html');

				browser.driver.findElement(by.xpath('/html/body/div/h1')).getText().
			    then(function(promise){
                expect(promise).toEqual('SOMETHING WENT WRONG');               
                console.log("Expected text is: " + promise); 
            });
	});

});