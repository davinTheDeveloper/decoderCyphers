// Write your tests here!
// Write your tests here!
const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("Should return a decoded string", () => {
      
        const input = "Software";
        const encoded = true;
        const expected = "jrufscpw";
        const actual = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev", true);
        expect(actual).to.eql(expected);
    })
  
  it("Should return a decoded string", () => {
      
        const input = "Software";
        const encoded = true;
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev", true);
        expect(actual).to.eql(expected);
})
   it("Should return a decoded string", () => {
      
        const input = "Software";
        const encoded = true;
        const expected = "thinkful";
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.eql(expected);
   })
   it("Should return a decoded string", () => {
      
        const input = "Software";
        const encoded = true;
        const expected = "y&ss$r&";
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.eql(expected);
   })
  
  it("Should return a decoded string", () => {
      
        const input = "Software";
        const encoded = true;
        const expected = false;
        const actual = substitution("thinkful", "short");
        expect(actual).to.eql(expected);
  })
  
   it("Should return a decoded string", () => {
      
        const input = "Software";
        const encoded = true;
        const expected = false;
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.eql(expected);
   })
})