/**
 * 字符串转换成整数
 * 题目描述
 * 输入一个由数字组成的字符串，把它转换成整数并输出。例如：输入字符串"123"，输出整数123。
 */

/**
 * 是否为空
 * 正负号
 * 非法字符 isNaN(str)
 * 是否溢出 Number.MAX_VALUE 1.7976931348623157e+308
 */

function StrToInt(str) {
  var sign = 1; //正负
  //是否为空
  if (!str || str.length == 0) {
    return;
  } else {
    var i = 0;
    //判断正负
    if (str[0] == "-") {
      sign = -1;
      i = 1;
    } else if (str[0] == "+") {
      sign = 1;
      i = 1;
    }

    if (isNaN(str[i])) {
      return;
    } else {
      var number = str[i];
      i ++;
      //非法字符
      while (!isNaN(str[i]) && i < str.length) {
        //是否溢出
        var flag =
          number > Number.MAX_VALUE / 10 ||
          (number == Number.MAX_VALUE / 10 &&
            str[str.length - 1] > Number.MAX_VALUE % 10);
        if (flag) {
          if (sign === 1) {
            return Number.POSITIVE_INFINITY;
          } else if (sign === -1) {
            return Number.NEGATIVE_INFINITY;
          }
        } else {
          number = number * 10 + Number(str[i]);
          i++;
        }
      }
      number = number * sign;
      return number;
    }
  }
}
// StrToInt("-123");//-123
// StrToInt("+123");//123
// StrToInt("123");//123
// var max =
//   "-1700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
// var max =
//   "-1700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
var max = "w1e1";
var a = StrToInt(max);
console.log(a);
