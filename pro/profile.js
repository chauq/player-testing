describe('user profile', function() {

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
		browser.driver.manage().window().maximize()
	});

	it('should be able to go to the user profile', function() {
		//var avatar = element(by.id('top_menu_avatar'));
		var avatar = browser.driver.findElement(by.xpath('//*[@id="top_menu_avatar"]/img'))
		var profile = element(by.id('top-drop-my-profile'));

		browser.driver.manage().window().maximize();
		avatar.click();
		profile.click();

		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/profile');
	});

	it('should be able to go to followers list', function() {
		var followers = element(by.css('[ng-click="followingTab(false)"]'));
		//var name = element.all(by.binding('username')).get(1);

		followers.click();

		browser.driver.findElement(by.xpath('//*[@id="profile_right_col"]/div[3]/div[1]/div/div[1]/div[1]')).getText().
			    then(function(promise){
                expect(promise).toEqual('Paul Robinson');
                console.log("Expected text is: " + promise); 
            });

		//expect(name.getText()).toEqual('Paul_livestation');
		//expect(browser.driver.findElement(by.xpath('//*[@id="profile_right_col"]/div[3]/div[1]/div/div[1]/div[1]')).getText()).toEqual('Paul_livestation');
	});

	it('should be able to go to likes list', function() {
		//var likes = element(by.id('sp_like'));
		var likes = browser.driver.findElement(by.xpath('//*[@id="sp_like"]'));
		//var name = element.all(by.binding('feed_title ng-binding'));

		likes.click();

		browser.driver.findElement(by.xpath('//*[@id="directive-two-col-feed"]/div[1]/a/div[2]/div[1]')).getText().
			    then(function(promise){
                expect(promise).toEqual('Audio test');
                console.log("Expected text is: " + promise); 
            });

		//expect(name.getText()).toEqual('Watch BBC WorldNews');
	});

	it('should be able to go to broadcast list', function() {
		var broadcast = browser.driver.findElement(by.xpath('//*[@id="sp_broadcast"]'));
		//var name = element.all(by.binding('feed_title ng-binding'));

		broadcast.click();

		browser.driver.findElement(by.xpath('//*[@id="directive-two-col-feed"]/div[1]/a/div[2]/div[1]')).getText().
			    then(function(promise){
                expect(promise).toEqual('f24');
                console.log("Expected text is: " + promise); 
            });

		//expect(name.getText()).toEqual('Police at work');
	});

	it('should be able to go to the user profile bio', function() {
		browser.driver.findElement(by.xpath('//*[@id="profile_right_col"]/div[1]/div/div/div[3]')).getText().
			    then(function(promise){
                expect(promise).toEqual('Appium test');               
                console.log("Expected text is: " + promise); 
            });
	});

	it('should be able to see the user profile settings', function() {
		var settings = element(by.id('profile-settings-icon'));

		settings.click();

		browser.driver.findElement(by.xpath('//*[@id="profile_right_col"]/div[1]/div/div[2]/div/div[1]/div')).getText().
			    then(function(promise){
                expect(promise).toEqual('MANAGE\nSUBSCRIPTIONS');               
                console.log("Expected text is: " + promise); 
            });

		browser.driver.findElement(by.xpath('//*[@id="profile_right_col"]/div[1]/div/div[2]/div/div[2]/div')).getText().
			    then(function(promise){
                expect(promise).toEqual('MANAGE\nNOTIFICATIONS');               
                console.log("Expected text is: " + promise); 
            });
	});

	it('should be able to logout of the website', function() {
		var avatar = element(by.id('top_menu_avatar'));
		var logout = element(by.id('top-drop-logout'));

		avatar.click();
		logout.click();
		expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/#/intro');
	});
});