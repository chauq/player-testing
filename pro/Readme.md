Readme for lsng website qa

These end to end tests uses the Protractor framework - which you will need to set up: http://angular.github.io/protractor/#/

Setup

Have sure you have Node.js installed. From the Protractor website: 

Use npm to install Protractor globally with:

npm install -g protractor
This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

webdriver-manager update
Now start up a server with:

webdriver-manager start
This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at http://localhost:4444/wd/hub.


Running tests:

Start a Selenium Server with:

webdriver-manager start

and run the tests using:

protractor conf.js

There are also:

protractor all.js

For running the muilt browser tests, you can add more tests by changing specs files, you can also add new specs files to the spec list in the conf.js/all.js files
