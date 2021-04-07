// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("Should return an encoded string", () => {
        const shift = 3;
        const input = "Mark Sullivan";
        const encoded = true;
        const expected = "pdun vxoolydq";
        const actual = caesar("Mark Sullivan", 3, true);
        expect(actual).to.eql(expected);
    })
})
