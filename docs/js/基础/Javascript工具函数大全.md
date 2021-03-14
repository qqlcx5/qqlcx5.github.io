# Javascript 工具函数大全 (Plus)

## 前言

在两年的项目开发中，对项目中常见的工具函数的一些总结的经验之谈。

目录：

* 第一部分：数组
* 第二部分：函数
* 第三部分：字符串
* 第四部分：对象
* 第五部分：数字

参考文章：

* [127 Helpful JavaScript Snippets You Can Learn in 30 Seconds or Less — Part 1 of 6
](https://betterprogramming.pub/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5)



## 1. 第一部分：数组

1. `setMultArr`：普通数组转二维数组

该函数传入第一个参数，第二个参数是可选的，函数返回一个二维数组。

`arr` <Array> 任何合法的数组类型。
`count` 子数组需要的长度。

```
function setMultArr(arr, count = 8, pages = []) {
    arr.forEach((item, index) => {
    const page = Math.floor(index / count)
        if (!pages[page]) pages[page] = []
        pages[page].push(item)
    })
    return pages
}
```

示例

```
setMultArr([1, 2, 3, 4, 5, 6, 7], 2)

// [[1, 2], [3, 4], [5, 6], [7]]
```

1. `flat` 数组扁平化

该函数传入一个二维数组，函数返回一个普通数组。

```
// 扁平化  Map 方法
const flatten = (arr) => [].concat(...arr.map(v => Array.isArray(v) ? flatten(v) : v))

// 扁平化  reduce 方法
const flatten = (arr) => arr.reduce((a, c) => a.concat(Array.isArray(c)? flatten(c) : c), [])
```

示例

```
flatten([1, [2], [3], [4, 5]]);
 
// [1, 2, 3, 4, 5]
```

扩展补充：ES6提供的新方法 `flat(depth)`

`flat(depth)` 方法中的参数depth，代表展开嵌套数组的深度，默认是`1`

```
let a = [1, [2, 3]]

a.flat(); // [1, 2, 3] 
```

1. `average` 求平均值

该函数返回两个或多个数值的平均值。

```
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```

1. `isArrayEqual` 检查两个数组各项相等

该函数必须传入两个数组，返回 Boolean。

```
const isArrayEqual = (a, b, has = true) => {
  if (a.length !== b.length) return has = false
  const s = new Set(b);
  for (let i = 0; i < a.length; i++) {
      if(!s.has(a[i])) return has = false
  }
  return has
}
```

示例

```
isArrayEqual([6, 5, 2, 4, 1, 3], [1, 2, 3, 4, 5, 6])

// true
```

1. `allEqual` 检查数组各项相等

该函数传入一个数组，返回 Boolean

```
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false

allEqual([1, 1, 1, 1]); // true
```

1. `diffArray`筛选两个数组差异值

该函数传入两个数组，返回第一个数组的值

```
const diffArray = (a, b) => {
  const a1 = new Set(a);
  const b1 = new Set(b);
  let arr1 = a.filter(x => !b1.has(x));
  let arr2 = b.filter(x => !a1.has(x));
  return [...arr1, ...arr2]
};
```

示例

```
diffArray([1, 2, 6, 7], [1, 2, 9, 5])
// [ 6, 7, 9, 5 ]
```

1. `averageBy` 检查数组对象各项相等

该函数必须传入一个数组对象，第二个参数对象的属性名，返回 Boolean

```
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5

averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```

1. `aboutEqual` 两个值是否约等于

该函数传入两个数字是否大致相等，但相差很小

```
const aboutEqual = (n1, n2, epsilon = 0.001) => Math.abs(n1 - n2) < epsilon;

console.log(aboutEqual(1.25, 1.2, 0.06)); // true
```

1. `getLineSize` 计算两点之间的距离

通过勾股定理计算，返回两点之间的距离

```
const getLineSize = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)

getLineSize(0, 0, 3, 4) // 5
```

1. `uniqueArray` 数组去重

该函数传入一个数组，返回一个去重后的新数组

```
const uniqueArray = (...arr) => [... new Set(arr)]

// ES6
const uniqueArray = (...arr) => Array.from(new Set(arr))

uniqueArray([1, 2, 2, 3, 4, 4, 5])
uniqueArray(1, 2, 2, 3, 4, 4, 5)
// [ 1, 2, 3, 4, 5 ]
```

1. `uniqueArrayObject` 数组对象去重

该函数传入一个数组对象，返回一个去重后的新数组

```
const uniqueArrayObject = (arr, key) => {
  return arr.reduce((acc, cur) => {
    const ids = acc.map((item) => item[key]);
    return ids.includes(cur[key]) ? acc : [...acc, cur];
  }, []);
};
```

示例

```
const responseList = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
];

uniqueArrayObject(responseList, 'id')

// [ { id: 1, a: 1 }, { id: 2, a: 2 }, { id: 3, a: 3 } ]

```

1. `setTree`生成树结构(阿里面试题)

该函数传入一个数组，返回一个树结构数组

```
const setTree = (arr, id = null, link = 'parent_id') =>
  arr
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: setTree(arr, item.id) }));
```

示例

```
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 },
];

setTree(comments)

// [ { id: 1, parent_id: null, children: [ [Object], [Object] ] } ]
```

1. `ascArr` 数组升序

该函数第一个参数传入一个数组， 返回升序的新数组。

```
const ascArr = (arr) => arr.sort((a, b) => a - b)

ascArr([3, 2, 3, 4, 1])
// [ 1, 2, 3, 3, 4 ]
```

不足之处： sort()方法会改变原数组，默认按unicode码顺序排列

```
通过ES6 ...展开运算符浅拷贝一份新数组

const ascArr = (arr) => [...arr].sort((a, b) => a - b)
```

1. `descArr` 数组降序

该函数第一个参数传入一个数组， 返回降序的新数组。

```
const descArr = (arr) => [...arr].sort((a, b) => b - a)

descArr([3, 2, 3, 4, 1])
// [ 4, 3, 3, 2, 1 ]
```


1. `isFind` 查找数组符合条件的值

该函数第一个参数传入一个数组，第二个参数属性值，或者是一个函数，第三个符合条件的值，返回一个boolean值

```
const isFind = (arr, fn, key) => !!arr.find(typeof fn === 'function' ? fn : val => val[fn] === key)

isFind([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o=> o.n === 6) 
// true

isFind([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n', 1)
// false
```

## 对象

1. `isObjectEqual`检查两个对象各项相等

该函数必须传入两个数组，返回 Boolean。

```
function isObjectEqual(obj1, obj2, has = true) {
  // 判断类型
  const o1 = obj1 instanceof Object;
  const o2 = obj2 instanceof Object;
  if (!o1 || !o2) return obj1 === obj2;
  // 判断长度
  const keys1 = Object.getOwnPropertyNames(obj1);
  const keys2 = Object.getOwnPropertyNames(obj2);
  if (keys1.length !== keys2.length) return false;
  // 各项对比
  for (let o in obj1) {
    let t1 = obj1[o] instanceof Object;
    let t2 = obj2[o] instanceof Object;
    if (t1 && t2) {
      has = diffByObj(obj1[o], obj2[o]);
    } else if (obj1[o] !== obj2[o]) {
      has = false;
      break;
    }
  }
  return has;
}
```

示例

```
isObjectEqual({a:2,b:4}, {b:4,a:2})
// true
```

## 其他

 1. `getCurrentURL` 获取当前的URL地址

 该函数返回当前页面的URL地址。
 
 
```
const getCurrentURL = () => window.location.href

getCurrentURL() //"https://qqlcx5.github.io/"
```


## node