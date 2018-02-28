"use strict";

// // let [x, y] = [1, 2];
// // console.log(x);
// // console.log(y);
// // [x, y] = [y, x];
// // console.log(x);
// // console.log(y);

// let { foo: bar } = { foo: "abc" };
// // console.log(foo)
// console.log(bar)

var root = document.getElementById("root");
var table = document.getElementById("table");
var div = document.createElement("div");
var name = "jialee";
div.innerHTML = "Welcome " + name;
root.appendChild(div);

var tmpl = function tmpl(datas) {
  return "\n    " + datas.map(function (data) {
    return "\n      <tr>\n      <td>" + data.last + "</td>\n      <td>" + data.first + "</td>\n      </tr>\n      ";
  }).join(" ").trim(" ") + "\n    ";
};
var data = [{
  first: "Sun",
  last: "Carry"
}, {
  first: "Lee",
  last: "Peers"
}];
console.log(tmpl(data));
table.innerHTML = tmpl(data);