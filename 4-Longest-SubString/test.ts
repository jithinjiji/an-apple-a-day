import { expect } from "chai";
import { lengthOfLongestSubstring } from ".";

const tests = [
  {
    input: "asdfghaa",
    output: 6
  },
  {
    input: "",
    output: 0
  },
  {
    input: " ",
    output: 1
  },
  {
    input: "dvfd",
    output: 3
  }

];

describe("Longest Substring", () => {
  it("should return longest substring length", (done) => {
    tests.forEach(test => {
      expect(lengthOfLongestSubstring(test.input)).to.equal(test.output);
    })    
    done()
  })
});