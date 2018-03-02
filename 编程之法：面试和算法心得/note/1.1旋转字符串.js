/**
 * 题目描述：
 * 给定一个字符串，要求把字符串前面的若干个字符移动到字符串的尾部，
 * 如把字符串“abcdef”前面的2个字符'a'和'b'移动到字符串的尾部，使得原字符串变成字符串“cdefab”。
 * 请写一个函数完成此功能，要求对长度为n的字符串操作的时间复杂度为 O(n)，空间复杂度为 O(1)。
 * 
 * 解法：
 * 左半部反转，右半部反转，整体反转
 */

/**
 *
 * @param {String} str - 需要反转的字符串
 * @param {Number} start - 开始位置的数组下标
 * @param {Number} end - 结束位置的数组下标
 */
function reverseString(str, start, end) {
  str = str.split("");
  while (start < end) {
    var t = str[start];
    str[start] = str[end];
    str[end] = t;
    start++;
    end--;
  }
  return str.join("");
}

/**
 *
 * @param {String} str - 要移动的字符串
 * @param {Number} n - 需要从前部移到尾部的字符个数
 */
function rotateString(str, n) {
  var length = str.length;
  if (n > length) {
    console.error("字符串没那么长");
  } else {
    var strLeft = reverseString(str, 0, n - 1);
    var strRight = reverseString(strLeft, n, length);
    str = reverseString(strRight, 0, length - 1);
  }
  console.log(str);
  return str;
}

/**
 * 测试
 */
rotateString("abcdef", 3); //defabc
rotateString("abcdef", 7); //字符串没那么长
rotateString("helloworld", 5); //worldhello

/**
 * 题目描述:
 * 单词翻转。
 * 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变，句子中单词以空格符隔开。
 * 为简单起见，标点符号和普通字母一样处理。
 * 例如，输入“I am a student.”，则输出“student. a am I”。
 * 
 * 解决方案1：
 * 首先将整个句子翻转，然后再将其中的每个单词翻转
 */

/**
 * @param {String} str - 需要获取单词的字符串
 */
function getWord(str) {
  var arr = [];
  var n = 0;
  var item = "";
  for (var i = 0; i < str.length; i++) {
    if (i == str.length - 1) {
      item += str[i];
      arr[n] = item;
      item = "";
    } else if (str[i] != " ") {
      item += str[i];
    } else {
      arr[n] = item;
      n++;
      item = "";
    }
  }
  return arr;
}
/**
 *
 * @param {String} word - 要反转的句子
 */
function reverseWord(word) {
  var string = reverseString(word, 0, word.length - 1);
  var arr = getWord(string);
  var result = "";
  var item = "";
  for (var i = 0; i < arr.length; i++) {
    item = reverseString(arr[i], 0, arr[i].length - 1) + " ";
    result += item;
  }
  console.log(result);
  return result;
}

/**
 * 测试
 */

reverseWord("I am a student."); //student. a am I

/**
 * 解决方案2：
 * 翻转句子中单词的顺序
 */

/**
 * @param {Array} arr - 要反转的数组
 */
function reverseArray(arr) {
  var start = 0;
  var end = arr.length - 1;
  while (start < end) {
    var t = arr[start];
    arr[start] = arr[end];
    arr[end] = t;
    start++;
    end--;
  }
  return arr.join(" ");
}
/**
 * 测试
 */
reverseArray(getWord("I am a student.")); //student. a am I



