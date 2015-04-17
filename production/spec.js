describe('lsng homepage', function() {
  it('should show me a intro text', function() {
    browser.get('http://www.livestation.com/'); 

	expect(browser.getCurrentUrl()).toEqual('http://www.livestation.com/intro');
  });

});