/**
 * 题目描述
 * 输入一个数组和一个数字，在数组中查找两个数，使得它们的和正好是输入的那个数字。
 * 要求时间复杂度是O(N)。如果有多对数字的和等于输入的数字，输出任意一对即可。
 * 例如输入数组1、2、4、7、11、15和数字15。由于4+11=15，因此输出4和11。
 */

/**
 * 解法一
 * 根据前面的分析，a[i]在序列中，如果a[i]+a[k]=sum的话，那么sum-a[i]（a[k])也必然在序列中。
 * 举个例子，如下： 原始序列：
 * 1、 2、 4、 7、11、15
 * 用输入数字15减一下各个数，得到对应的序列为：
 * 14、13、11、8、4、 0
 * 第一个数组以一指针i 从数组最左端开始向右扫描，
 * 第二个数组以一指针j 从数组最右端开始向左扫描，
 * 如果第一个数组出现了和第二个数组一样的数，即a[i]=a[j]，就找出这俩个数来了。
 * 如上，i，j最终在第一个，和第二个序列中找到了相同的数4和11，所以符合条件的两个数，即为4+11=15。
 * 两端同时查找，时间复杂度瞬间缩短到了O(N)，但却同时需要O(N)的空间存储第二个数组。
 */

function findSum(arr, number) {
  var result = [];
  var farr = arr.map(function(item) {
    return number - item;
  });
  for (var i = 0; i < arr.length; i++) {
    for (var j = farr.length - 1; j >= 0; j--) {
      if (arr[i] == farr[j]) {
        // result.length++;
        // result[result.length - 1] = [];
        // result[result.length - 1][0] = arr[i];
        // result[result.length - 1][1] = arr[j];
        result[0] = arr[i];
        result[1] = arr[j];
        console.log(result);
        return result;
      }
    }
  }
}
var arr = [1, 2, 4, 7, 11, 15];
var number = 15;
findSum(arr, number);

/**
 * 如果数组是无序的，先排序(N log N)，然后用两个指针i，j，各自指向数组的首尾两端，令i=0，j=n-1，然后i++，j--，逐次判断a[i]+a[j]?=sum，
 * 如果某一刻a[i]+a[j] > sum，则要想办法让sum的值减小，所以此刻i不动，j--；
 * 如果某一刻a[i]+a[j] < sum，则要想办法让sum的值增大，所以此刻i++，j不动。
 * 所以，数组无序的时候，时间复杂度最终为O(N log N + N)=O(N log N)。
 */
