describe('lsng homepage', function() {
  it('should show me a intro text', function() {
    browser.get('http://staging-lsng.livestation.com/'); 

    var intro = element(by.css('.tagline'));

    expect(intro.getText()).toEqual('Be There Now');
  });

});