## let

* 只在其所在代码块有效
* 不存在变量提升
* 暂时性死区 在 let 声明变量之前，不允许使用变量
* 禁止重复声明
* 块级作用域 (1.内部变量覆盖外部变量; 2.计数的循环变量泄露为全局变量) 外层作用域无法读取内层作用域，
* 返回值 do 表达式

```js
let x = do {
  let t = fn();
  t * t + 1;
};
```

## const

* 只读，声明后必须立即初始化
* 只在声明的块级作用域有效
* 不存在变量提升
* 暂时性死区 在 let 声明变量之前，不允许使用变量
* 禁止重复声明
* const 保证的是变量指向内存地址不许改变
* 对象冻结：`Object.freeze()`

## 解构赋值

* 默认值：当变量严格等于 undefined，默认值才会生效。
* 解构失败：变量的值就等于 undefined。
* 不完全解构
* 数组(具有 iterator 接口的数据结构)
* 对象: 找到同名属性，赋值给对应的变量，真正被赋值的是后者（变量）而不是前者（匹配的模式）

```js
let { foo: baz } = { foo: "aaa", bar: "bbb" };
baz; // "aaa"
foo; // error: foo is not defined
//上面代码中，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。
```

* 非对象转换为对象

```js
const [a, b, c, d, e] = "hello";
a; // "h"
b; // "e"
c; // "l"
d; // "l"
e; // "o"
let { length: len } = "hello";
len; // 5
let { toString: s } = 123;
s === Number.prototype.toString; // true

let { toString: s } = true;
s === Boolean.prototype.toString; // true
```

* 函数的参数也可以使用解构赋值

```js
//默认值
function move({ x = 0, y = 0 } = {}) {
  return [x, y];
}

move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

function move({ x, y } = { x: 0, y: 0 }) {
  return [x, y];
}

move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
```

* 圆括号问题

```js
不能使用圆括号的情况：

（1）变量声明语句
let [(a)] = [1];
（2）函数参数
function f([(z)]) { return z; }
（3）赋值语句的模式
({ p: a }) = { p: 42 };

可以使用圆括号的情况：
（1）赋值语句的非模式部分
({ p: (d) } = {}); // 正确
（2）因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
let x;
({ x } = { x: 1 });
```

* 用途

```
（1）交换变量的值
（2）函数参数的定义
（3）提取json数据
（3）函数参数的默认值
（4）遍历Map结构数据
（5）输入模块的指定方法
（6）从函数返回多个值
```

## 模板字符串

* 保留空格换行（trim）
* 变量
* 字符串
* JavaScript 表达式
* 调用函数
* 嵌套

```es6
const tmpl = addrs => `
  <table>
  ${addrs
    .map(
      addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `
    )
    .join("")}
  </table>
`;
const data = [
  { first: "<Jane>", last: "Bond" },
  { first: "Lars", last: "<Croft>" }
];

console.log(tmpl(data));
// <table>
//
//   <tr><td><Jane></td></tr>
//   <tr><td>Bond</td></tr>
//
//   <tr><td>Lars</td></tr>
//   <tr><td><Croft></td></tr>
//
// </table>
```

* 执行

```js
// 写法一
let str = "return " + "`Hello ${name}!`";
let func = new Function("name", str);
func("Jack"); // "Hello Jack!"

// 写法二
let str = "(name) => `Hello ${name}!`";
let func = eval.call(null, str);
func("Jack"); // "Hello Jack!"
```

## 箭头函数

```js
var f = v => v;
//上面的箭头函数等同于：
var f = function(v) {
  return v;
};
```

## 双冒号运算符

函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即 this 对象），绑定到右边的函数上面。

```js
foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);

const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return obj::hasOwnProperty(key);
}
```

如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。

```js
var method = obj::obj.foo;
// 等同于
var method = ::obj.foo;

let log = ::console.log;
// 等同于
var log = console.log.bind(console);
```

如果双冒号运算符的运算结果，还是一个对象，就可以采用链式写法。

```js
import { map, takeWhile, forEach } from "iterlib";

getPlayers()
  ::map(x => x.character())
  ::takeWhile(x => x.strength > 100)
  ::forEach(x => console.log(x));
```

## 尾调用优化

只在严格模式下开启，正常模式是无效的。

尾调用就是指某个函数的最后一步是调用另一个函数。

```js
function f(x) {
  return g(x);
}
```

“尾调用优化”（Tail call optimization），即只保留内层函数的调用帧，这将大大节省内存。这就是“尾调用优化”的意义。

## 尾递归

函数调用自身，称为递归。如果尾调用自身，就称为尾递归。只存在一个调用帧，所以永远不会发生“栈溢出”错误。
