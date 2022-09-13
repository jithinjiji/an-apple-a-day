import { expect } from "chai";
import { convert } from ".";

const tests = [
  {
    input: "",
    rows: 3,
    output: ""
  },
  {
    input: "PAYPALISHIRING",
    rows: 3,
    output: "PAHNAPLSIIGYIR"
  },
  {
    input: "PAYPALISHIRING",
    rows: 1,
    output: "PAYPALISHIRING"
  },
  {
    input: "PAYPALISHIRING",
    rows: 4,
    output: "PINALSIGYAHRPI"
  }
]
describe("ZigZag Conversion", () => {
  it("should return zigzag converted strings", (done) => {
    tests.forEach(test => {
      expect(convert(test.input,test.rows)).to.equal(test.output);
    })    
    done()
  })
});