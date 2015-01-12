describe('Filter and Recommended buttons', function() {

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
		password.sendKeys('123123');
		done.click();

		expect(welcome.getText()).toEqual('Welcome back quang');
	});

	it('should be able to go to the trending page by clicking on the icon', function() {
		var trending = element(by.id('trend-icon'));

		trending.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/trending');
	});


	it('should be able to see the Filter button', function() {
		var filter = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span[1]'));

		expect(filter.getText()).toEqual('FILTERS');
	});

	it('should be able to see the sort button', function() {
		var sort = browser.driver.findElement(by.xpath('//*[@id="sort_text"]'));

		expect(sort.getText()).toEqual('RECOMMENDED');
	});

	it('should be able to see the Filter options under the Filter dropdown', function() {
		var filter = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span[1]'));

		filter.click();

		var stations = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[1]/a')); 
		var locations = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[2]/a')); 
		var languages = browser.driver.findElement(by.xpath('//*[@id="filters_menu"]/div/ul/li[3]/a')); 

		expect(stations.getText()).toEqual('STATIONS');
		expect(locations.getText()).toEqual('LOCATIONS');
		expect(languages.getText()).toEqual('LANGUAGES');
	});

	it('should be able to see the sort options under the sort dropdown', function() {
		var sort = browser.driver.findElement(by.xpath('//*[@id="sort_icon"]"]'));

		sort.click();

		var recommended = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span')); 
		var views = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span')); 
		var recent = browser.driver.findElement(by.xpath('//*[@id="btn_plain"]/span')); 

		expect(recommended.getText()).toEqual('RECOMMENDED');
		expect(views.getText()).toEqual('VIEWS');
		expect(recent.getText()).toEqual('LANGUAGES');

	});


});