// Problem statement: https://leetcode.com/problems/longest-substring-without-repeating-characters
export function lengthOfLongestSubstring(s: string): number {
  let longestLength = 0;
  let subString: string = "";
  for(let i=0;i<s.length;i++){
      const dupAtIndex = subString.indexOf(s.charAt(i));
      if(dupAtIndex!=-1){
          subString = subString.slice(dupAtIndex+1);    
      }
      subString+=s.charAt(i);
      if(subString.length>longestLength){
          longestLength = subString.length
      }
  }
  return longestLength;
};

console.log("Longest substring of 'asdfghaa' without repeating charaters is of length:", lengthOfLongestSubstring("asdfghaa"))