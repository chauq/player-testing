describe('lsng homepage', function() {
  it('should show me a intro text', function() {
    browser.get('http://staging.lsng.livestation.com/'); 

	expect(browser.getCurrentUrl()).toEqual('http://staging.lsng.livestation.com/intro');
  });

});