describe('login buttons', function() {

  it('should be able to show the Sign in box', function() {
    browser.get('http://staging.lsng.livestation.com/'); 

    var join = element(by.id('btn-intro-login'));
    var title = element(by.css('.modal h1'));

	join.click();

	expect(title.getText()).toEqual('Sign in');
  });

  it('should be able to close the Join Now box to go back to the home page', function() {
	 browser.driver.findElement(by.id('btn-modal-close')).click();

	 expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/intro');
  });

  it('should be able to close the login box to go back to the home page', function() {
    browser.get('http://staging.lsng.livestation.com/'); 

    var login = element(by.id('btn-intro-login'));

    login.click();
    //browser.sleep(1000);
    browser.driver.findElement(by.id('btn-modal-close')).click();

    expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/intro');
  });

   it('should be able to close the login box, after going to the email login box. It should then to go back to the home page', function() {
    browser.get('http://staging.lsng.livestation.com/'); 

    var login = element(by.id('btn-intro-login'));
    var emailLogin = element(by.css('.login_email_txt a'));

    login.click();
    emailLogin.click();
    //browser.sleep(1000);
    browser.driver.findElement(by.id('btn-modal-close')).click();

    expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/intro');
  });


});