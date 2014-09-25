browser.get('http://lsng.livestation.com'); 

var loginBtn = element(by.css('.btn_intro_login'));
var emailLogin = element(by.id('btn-modal-login-email'));
var usernameFd = element(by.id('login_email_input'));
var passwordFd = element(by.id('login_password_input'));
var done = element(by.id('btn-modal-login-email-done'));

loginBtn.click();
emailLogin.click();
usernameFd.sendKeys('quang.chau');
passwordFd.sendKeys('1');
done.click();