/**
 * 题目描述：
 * 回文，英文palindrome，指一个顺着读和反过来读都一样的字符串
 * 解法：
 * 从字符串头部和尾部，逐次向中间检测。
 */

/**

 * @param {String} str
 */
function isPalindrome(str) {
  if (!str) {
    return false;
  }
  var middle = str.length / 2;
  for (var i = 0, j = str.length - 1; i < j; i++, j--) {
    console.log(i);
    console.log(j);
    console.log(str[i]);
    console.log(str[j]);
    if (str[j] != str[i]) {
      return false;
    }
  }
  return true;
}
isPalindrome("maddam");//true
isPalindrome("abca");//false
