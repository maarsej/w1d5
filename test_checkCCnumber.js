var assert = require("chai").assert;
var valid_luhn_number = require("../lib/luhnAlgo");

describe("Check number", function() {
  it("should return true if valid number", function() {
    var value = "4682434315345536";
    var result = valid_luhn_number(value);
    assert.isTrue(result);
  });

  it("should return false if a word is NOT a valid number", function() {
    var word = "4682434315345534";
    assert.isFalse(isPalindrome(word));
  });

});