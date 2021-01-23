// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = "";

  function is_same_char(s, left, right) {
    if (left < 0) return false;
    if (s.length <= right) return false;

    if (s[left] == s[right]) return true;
    else return false;
  }

  function updateMax(s, i, diff) {
    if (max.length < s.substring(i - diff, i + 1 + diff).length) {
      max = s.substring(i - diff, i + 1 + diff);
    }
    console.log("max", max);
  }

  for (let i = 1; i < s.length; i++) {
    let diff = 0;
    while (true) {
      console.log(diff);
      if (is_same_char(s, i - diff, i + 1 + diff)) {
        updateMax(s, i, diff);
        diff++;
      } else {
        break;
      }
    }
  }

  return max;
};

console.log("tes");
console.log(longestPalindrome("abba"));
console.log(longestPalindrome("abccba"));
console.log(longestPalindrome("abccb"));
