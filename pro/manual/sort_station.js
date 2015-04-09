describe('Sort the stations', function() {

	it('should be able to log in as a user using username', function() {
		browser.get('http://lsng.livestation.com'); 

		var login = element(by.css('.login_txt a'));
		//var emailLogin = element(by.id('btn-modal-login-email'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		//emailLogin.click();
		username.sendKeys('quang.chau');
		password.sendKeys('1');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back Quang.chau');
	});

	it('should be able to go to the station list page by clicking on the icon', function() {
		var station = element(by.id('stations-icon'));

		station.click();
		expect(browser.getCurrentUrl()).toEqual('http://lsng.livestation.com/#/stations');
	});

	it('should be able to see the sort the stations by number of followers', function() {
		var sort = browser.driver.findElement(by.xpath('//*[@id="sort_icon"]"]'));

		sort.click();

		var followers = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span')); 

		followers.click();

		//stations should be sorted by number of followers
	});

	it('should be able to see the sort the stations by number of followers', function() {
		var sort = browser.driver.findElement(by.xpath('//*[@id="sort_icon"]"]'));

		sort.click();

		var followers = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span')); 

		followers.click();

		//stations should be sorted by number of followers
	});

	it('should be able to see the sort the stations by activity', function() {
		var sort = browser.driver.findElement(by.xpath('//*[@id="sort_icon"]"]'));

		sort.click();

		var activity = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span')); 

		activity.click();

		//stations should be sorted by activity
	});

	it('should be able to see the sort the stations by nearest', function() {
		var sort = browser.driver.findElement(by.xpath('//*[@id="sort_icon"]"]'));

		sort.click();

		var nearest = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span')); 

		nearest.click();

		//stations should be sorted by activity
	});

	it('should be able to see the sort the stations by recommended', function() {
		var sort = browser.driver.findElement(by.xpath('//*[@id="sort_icon"]"]'));

		sort.click();

		var recommended = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span')); 

		recommended.click();

		//stations should be sorted by recommended
	});


});