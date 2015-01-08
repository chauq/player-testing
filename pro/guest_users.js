describe('Guest users', function() {

	it('should be able to go a channel as a guest user', function() {
		browser.get('http://staging.lsng.livestation.com/#/station/Ash');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/station/Ash');
	});

	it('should show the option to log in or sign up on that channel page', function() {
		//var login = browser.driver.findElement(by.xpath('//*[@id="anon-user-menu"]/a[1]');

		browser.driver.findElement(by.xpath('//*[@id="anon-user-menu"]/a[1]')).getText().
			then(function(promise){
            expect(promise).toEqual('Log In');               
            console.log("Expected text is: " + promise); 
        });

		browser.driver.findElement(by.xpath('//*[@id="anon-user-menu"]/a[2]')).getText().
			then(function(promise){
            expect(promise).toEqual('Sign Up');               
            console.log("Expected text is: " + promise); 
        });

	});

	it('should not let the guest user in the profile page', function() {
		browser.get('http://staging.lsng.livestation.com/#/profile');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});

	it('should let the guest user in the stations page', function() {
		browser.get('http://staging.lsng.livestation.com/#/stations');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/stations');
	});

	it('should show the option to log in or sign up on the stations page', function() {
		//var login = browser.driver.findElement(by.xpath('//*[@id="anon-user-menu"]/a[1]');

		browser.driver.findElement(by.xpath('//*[@id="anon-user-menu"]/a[1]')).getText().
			then(function(promise){
            expect(promise).toEqual('Log In');               
            console.log("Expected text is: " + promise); 
        });

		browser.driver.findElement(by.xpath('//*[@id="anon-user-menu"]/a[2]')).getText().
			then(function(promise){
            expect(promise).toEqual('Sign Up');               
            console.log("Expected text is: " + promise); 
        });

	});

	it('should not let the guest user in the home page', function() {
		browser.get('http://staging.lsng.livestation.com/#/home');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});

	it('should let the guest user in a VOD page', function() {
		browser.get('http://staging.lsng.livestation.com/#/station/EricW/035bfac0-f90b-41b3-856a-f908e8bda277');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/station/EricW/035bfac0-f90b-41b3-856a-f908e8bda277');
	});

	it('should show the option to log in or sign up on the VOD page', function() {
		//var login = browser.driver.findElement(by.xpath('//*[@id="anon-user-menu"]/a[1]');

		browser.driver.findElement(by.xpath('//*[@id="anon-user-menu"]/a[1]')).getText().
			then(function(promise){
            expect(promise).toEqual('Log In');               
            console.log("Expected text is: " + promise); 
        });

		browser.driver.findElement(by.xpath('//*[@id="anon-user-menu"]/a[2]')).getText().
			then(function(promise){
            expect(promise).toEqual('Sign Up');               
            console.log("Expected text is: " + promise); 
        });

	});

	it('should not let the guest user in the trending page', function() {
		browser.get('http://staging.lsng.livestation.com/#/trending');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});


	it('should let the guest user into a users profile page', function() {
		browser.get('http://staging.lsng.livestation.com/#/station/EricW');

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/station/EricW');
	});

});