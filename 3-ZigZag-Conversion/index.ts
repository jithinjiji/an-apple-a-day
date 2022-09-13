// https://leetcode.com/problems/zigzag-conversion/

export function convert(s: string, numRows: number): string {
  let output = new Array<string>(numRows);
  let down = true;
  let groupId = 0;
  if (numRows <= 1) {
    return s;
  }
  for (let i = 0; i < s.length; i++) {
    output[groupId] = output[groupId] ? output[groupId] + s.charAt(i) : s.charAt(i);
    if (groupId + 1 >= numRows) {
      down = false
      groupId--
    } else if (groupId - 1 < 0) {
      down = true
      groupId++
    } else {
      if (down) {
        groupId++;
      } else {
        groupId--
      }
    }
  }
  return output.join("");
};

console.log("ZigZag converted(PAYPALISHIRING):", convert("PAYPALISHIRING", 3))
