describe('Fliter the stations', function() {

	it('should be able to log in as a user using username', function() {
		browser.get('http://lsng.livestation.com'); 

		var login = element(by.id('btn-intro-login'));
		var emailLogin = element(by.css('.login_email_txt a'));
		var username = element(by.id('login_email_input'));
		var password = element(by.id('login_password_input'));
		var done = element(by.id('btn-modal-login-email-done'));
		var welcome = element(by.css('.welcome_text'));

		login.click();
		emailLogin.click();
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

	it('should be able filter by TV stations under the Filter dropdown', function() {
		var filter = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span[1]'));

		filter.click();

		var stations = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[1]/a')); 

		stations.click();

		var tv = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[1]/ul/li[1]/a')); 

		tv.click();

		//show only show Tv stations
	});
	
	it('should be able filter by People stations under the Filter dropdown', function() {
		var filter = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span[1]'));

		filter.click();

		var stations = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[1]/a')); 

		stations.click();

		var people = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[1]/ul/li[2]/a')); 

		people.click();

		//show only show People stations
	});

	it('should be able to clear the station filter under the Filter dropdown', function() {
		var filter = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span[1]'));

		filter.click();

		var stations = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[1]/a')); 

		stations.click();

		var clear = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[1]/ul/li[3]/a')); 

		clear.click();

		//show all stations
	});

	it('should be able filter by Language - English under the Filter dropdown', function() {
		var filter = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span[1]'));

		filter.click();

		var language = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[3]/a')); 

		language.click();

		var eng = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[3]/ul/li[2]/a')); 

		eng.click();

		//show only show English stations
	});
	
	it('should be able filter by Language - Arabic under the Filter dropdown', function() {
		var filter = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span[1]'));

		filter.click();

		var language = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[3]/a')); 

		language.click();

		var arabic = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[3]/ul/li[3]/a')); 

		people.click();

		//show only show Arabic stations
	});

	it('should be able to clear the Language filter under the Filter dropdown', function() {
		var filter = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span[1]'));

		filter.click();

		var language = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[3]/a')); 

		language.click();

		var clear = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[3]/ul/li[4]/a')); 

		clear.click();

		//show all stations
	});

	it('should be able filter by TV stations and Language - English under the Filter dropdown', function() {
		var filter = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span[1]'));

		filter.click();

		var stations = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[1]/a')); 

		stations.click();

		var tv = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[1]/ul/li[1]/a')); 

		tv.click();

		var language = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[3]/a')); 

		language.click();

		var eng = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[3]/ul/li[2]/a')); 

		eng.click();

		//show only show English Tv stations
	});

	it('should be able filter by TV stations and Language - English under the Filter dropdown', function() {
		var filter = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span[1]'));

		filter.click();

		var stations = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[1]/a')); 

		stations.click();

		var tv = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[1]/ul/li[1]/a')); 

		tv.click();

		var language = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[3]/a')); 

		language.click();

		var arabic = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[3]/ul/li[3]/a')); 

		arabic.click();

		//show only show Arabic Tv stations
	});

});