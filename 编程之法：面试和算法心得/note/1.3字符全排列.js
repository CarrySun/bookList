/**
 * 问题导读：
 * 字符串转换成整数
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 例如输入字符串abc，则输出由字符a、b、c 所能排列出来的所有字符串
 * abc、acb、bac、bca、cab 和 cba。
 */

/**
 * 全排列（递归交换）算法
 * 参考：http://www.jb51.net/article/39291.htm
 * 1、将第一个位置分别放置各个不同的元素；
 * 2、对剩余的位置进行全排列（递归）；
 * 3、递归出口为只对一个元素进行全排列。
 */

function swap(arr, i, j) {
  if (i != j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
function core(str) {
  var arr = str.split("");
  var result = [];
  (function fn(n) {
    if (n == arr.length - 1) {
    } else {
      for (var i = n; i < arr.length; i++) {
        swap(arr, i, n);
        if (n + 1 < arr.length - 1) {
          arguments.callee(n + 1);
        } else {
          result.push(arr.join(""));
        }
        swap(arr, i, n);
      }
    }
  })(0);
  console.log(result);
  return result;
}
/**
 * 测试
 */
core("abc"); //[ 'abc', 'acb', 'bac', 'bca', 'cba', 'cab' ]

/**
 * 
 * @param {String} str 
 * 参考：https://www.cnblogs.com/star91/p/5615327.html
 */
function permutate(str) {
  var result = [];
  if (str.length == 1) {
    return [str];
  } else {
    var preResult = permutate(str.slice(1));
    for (var j = 0; j < preResult.length; j++) {
      for (var k = 0; k < preResult[j].length + 1; k++) {
        var temp = preResult[j].slice(0, k) + str[0] + preResult[j].slice(k);
        result.push(temp);
      }
    }
    return result;
  }
}

console.log(permutate("abc"));