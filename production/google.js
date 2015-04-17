var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
driver.get('https://www.accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/');

var email = element(by.id('Email'));
var password = element(by.id('Passwd'));
var signin = element(by.id('signIn'));

email.sendKeys('lsftest102@gmail.com');
password.sendKeys('jackpot123');
signin.click();

driver.quit();