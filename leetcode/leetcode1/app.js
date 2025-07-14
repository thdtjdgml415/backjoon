/**
 * 3. Longest Substring Without Repeating Characters
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  const strObj = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (strObj.has(s[right])) {
      strObj.delete(s[left]);
      left++;
    }
    strObj.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
