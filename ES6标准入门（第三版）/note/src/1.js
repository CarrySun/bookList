// // // let [x, y] = [1, 2];
// // // console.log(x);
// // // console.log(y);
// // // [x, y] = [y, x];
// // // console.log(x);
// // // console.log(y);

// // let { foo: bar } = { foo: "abc" };
// // // console.log(foo)
// // console.log(bar)

// var root = document.getElementById("root");
// var table = document.getElementById("table");
// var div = document.createElement("div");
// var name = "jialee";
// div.innerHTML = `Welcome ${name}`;
// root.appendChild(div);

// var tmpl = datas => `
//     ${datas
//       .map(
//         data => `
//       <tr>
//       <td>${data.last}</td>
//       <td>${data.first}</td>
//       </tr>
//       `
//       )
//       .join(" ")
//       .trim(" ")}
//     `;
// var data = [
//   {
//     first: "Sun",
//     last: "Carry"
//   },
//   {
//     first: "Lee",
//     last: "Peers"
//   }
// ];
// console.log(tmpl(data));
// table.innerHTML = tmpl(data);

var sum = (num1, num2) => {
  num1 = num1 * 2
  return num1 + num2;
};
console.log(sum(1,2))