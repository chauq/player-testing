browser.get('http://staging.lsng.livestation.com/'); 

var loginBtn = element(by.id('btn-intro-login'));
var emailLogin = element(by.css('.login_email_txt a'));
var usernameFd = element(by.id('login_email_input'));
var passwordFd = element(by.id('login_password_input'));
var done = element(by.id('btn-modal-login-email-done'));

browser.waitForAngular();
loginBtn.click();
emailLogin.click();
usernameFd.sendKeys('quangchau');
passwordFd.sendKeys('123123');
done.click();