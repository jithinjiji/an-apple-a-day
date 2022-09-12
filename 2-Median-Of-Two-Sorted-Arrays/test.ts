import { expect } from "chai";
import { findMedianSortedArrays } from ".";

const tests = [
  {
    first: [1, 4, 5],
    second: [2, 5, 7],
    median: 4.5
  },
  {
    first: [1, 2, 3],
    second: [4, 5, 6],
    median: 3.5
  },
  {
    first: [1, 4, 5],
    second: [2, 7],
    median: 4
  },
  {
    first: [1],
    second: [2],
    median: 1.5
  }
]
describe("Median Of Two Sorted Arrays", () => {
  it("should return median of sorted arrays", (done) => {
    tests.forEach(test => {
      expect(findMedianSortedArrays(test.first,test.second)).to.equal(test.median);
    })    
    done()
  })
});