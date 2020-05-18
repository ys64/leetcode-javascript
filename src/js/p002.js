// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  let ss = ""; // substring
  let max_ss = "";

  for (let j = 0; j < s.length; j++) {
    ss = s[j];
    if (max_ss.length < ss.length) {
      max_ss = ss;
    }

    for (let i = j + 1; i < s.length; i++) {
      if (ss.indexOf(s[i]) !== -1) {
        if (max_ss.length < ss.length) {
          max_ss = ss;
        }
        ss = s[i];
      } else {
        ss += s[i];
        if (max_ss.length < ss.length) {
          max_ss = ss;
        }
      }
    }
  }

  console.log(max_ss.length, max_ss);
  return max_ss.length;
};

// console.log(lengthOfLongestSubstring("abcabcbb")); // expected: 3
// console.log(lengthOfLongestSubstring("bbbbb")); // expected: 1
// console.log(lengthOfLongestSubstring("pwwkew")); // expected: 3

// failed test cases
// console.log(lengthOfLongestSubstring(" ")); // expected: 1
// console.log(lengthOfLongestSubstring("au")); // expected: 2
// console.log(lengthOfLongestSubstring("dvdf")); // expected: 3
