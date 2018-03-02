/**
 * 题目描述:
 * 给定一个字符串，求它的最长回文子串的长度。
 *
 */

/**
 * 解法一：
 * 以每个位置为中心遍历一遍，一旦检测到边界，其他的值就不再考虑,同时要考虑到 回文数长度为偶数 aba 奇数 abba
 *
 */
var res = "";
var max = 0;
function f(str) {
  if (!str) return 0;
  if (str.length == 1) return 1;
  for (var i = 0; i < str.length; i++) {
    c(str, i, i); // even偶数 aba
    c(str, i, i + 1); // odd奇数 abba
  }
  console.log(max);
  console.log(res);
  return max;
}
function c(str, low, high) {
  while (low >= 0 && high < str.length) {
    if (str[low] == str[high]) {
      if (high - low + 1 > max) {
        max = high - low + 1;
        res = str.substring(low, high + 1);
      }
      low--;
      high++;
    } else {
      return;
    }
  }
}
f("dabcacbadd"); //9

/**
 * 解法二：
 * Manacher
 * 参考https://www.felix021.com/blog/read.php?2040
 */
