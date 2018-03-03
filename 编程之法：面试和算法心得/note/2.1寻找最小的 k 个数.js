/**
 * 题目描述：
 * 输入n个整数，输出其中最小的 k 个。
 * 解法：
 * 遍历 n 个数，将先遍历到的 k 个数先存入大小为 k 的数组，作为最小的 k 个数，
 * 查找 k 个数中的最大值，kmax
 * 遍历其余 n-k 个数，假设每次遍历到的数为 x ， 如果 x < kmax 用 x 替换 kamx，重新找出 k 个数中的最大值，如果 x > kamx, 则继续遍历不处理数组 
 */
function mink(arr, k, n) {
  var result = arr.slice(0, k);
  var kmax = arr[0];
  kmax = findKmax(result, k, kmax);
  for (var i = k; i < n; i++) {
    if (arr[i] < kmax) {
      //更新最小的k个数 O（k）
      result.splice(result.indexOf(kmax), 1, arr[i]);
      kmax = findKmax(result, k, arr[i]);
    } else {
      //不更新数组O（0）
    }
  }
  console.log(result);
}
function findKmax(arr, k, kmax) {
  for (var i = 1; i < k; i++) {
    if (arr[i] > kmax) kmax = arr[i];
  }
  return kmax;
}
var input = [1, 2, 8, 4, 5, 3, 6, 7];
mink(input, 4, input.length);
