describe('login buttons', function() {

  it('should be able to show the join now box', function() {
    browser.get('http://staging-lsng.livestation.com/'); 

    var join = element(by.id('btn-intro-join-now'));
    var title = element(by.css('.modal h1'));

	join.click();

	expect(title.getText()).toEqual('Join Now');
  });

  it('should be able to close the Join Now box to go back to the home page', function() {
	 browser.driver.findElement(by.id('btn-modal-close')).click();

	 var intro = element(by.css('.tagline'));

	 expect(intro.getText()).toEqual('Be There Now');
  });

  it('should be able to close the login box to go back to the home page', function() {
    browser.get('http://staging-lsng.livestation.com/'); 

    var login = element(by.css('.btn_intro_login'));

    login.click();
    //browser.sleep(1000);
    browser.driver.findElement(by.id('btn-modal-close')).click();
    
    var intro = element(by.css('.tagline'));

    expect(intro.getText()).toEqual('Be There Now');
  });

   it('should be able to close the login box, after going to the email login box. It should then to go back to the home page', function() {
    browser.get('http://staging-lsng.livestation.com/'); 

    var login = element(by.css('.btn_intro_login'));
    var emailLogin = element(by.id('btn-modal-login-email'));

    login.click();
    emailLogin.click();
    //browser.sleep(1000);
    browser.driver.findElement(by.id('btn-modal-close')).click();

    var intro = element(by.css('.tagline'));
    expect(intro.getText()).toEqual('Be There Now');
  });


});