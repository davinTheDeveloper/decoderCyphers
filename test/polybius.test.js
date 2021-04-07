// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("Should return an encoded string", () => {
        const input = "Mark Sullivan";
        const encoded = true;
        const expected = "23112452 3454131342151133";
        const actual = polybius("Mark Sullivan", true);
        expect(actual).to.eql(expected);
    });
});