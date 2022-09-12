// Problem statement: https://leetcode.com/problems/median-of-two-sorted-arrays/
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let num1Length = nums1.length;
  let num2Length = nums2.length;
  let i = 0, j = 0;
  let sorted: number[] = [];
  while (i < num1Length && j < num2Length) {
    if (nums1[i] < nums2[j]) {
      sorted.push(nums1[i]);
      i++;
    } else {
      sorted.push(nums2[j])
      j++
    }
  }
  if (i >= num1Length) {
    while (j < num2Length) {
      sorted.push(nums2[j])
      j++
    }
  }
  if (j >= num2Length) {
    while (i < num1Length) {
      sorted.push(nums1[i])
      i++
    }
  }
  if (sorted.length % 2 == 0) {
    let k = (sorted.length / 2) - 1
    let l = k + 1
    return (sorted[k] + sorted[l]) / 2.0
  } else {
    return sorted[Math.floor(sorted.length / 2)]
  }

};

const first = [1, 2]
const second = [3, 4];

console.log("Median of Sorted Arrays:", findMedianSortedArrays(first, second))
