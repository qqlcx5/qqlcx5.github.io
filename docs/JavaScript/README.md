
# JavaScript 的基本语法

## 1.变量

* 什么是变量？

变量是存储数据值的容器。

* 如何声明变量？

您可以通过 `var` `let` `const` 等关键词来声明 JavaScript 变量。

* 什么是字面量？

字面量就是字面上的意思，可以是数字或者一串字符如`"hello world"`

```
let a
```
如果只是声明变量而没有赋值，则该变量的值是undefined。undefined是一个特殊的值，表示“无定义”。

```
let a = b + 1
// Uncaught ReferenceError: b is not defined
```
如果一个变量没有声明就直接使用，JavaScript 会报错，告诉你变量未定义。

```
var a = 1
var a = 2
```
你猜 a 等于多少。

答案的等于2。

理由：JavaScript 程序的执行单位为行（line），也就是一行一行地执行。这很容易理解，JavaScript 如果是无序执行语句，就会造成得出结果也是未知数，这显然不是我们希望看到的。


## 2.语句
语句（statement）是为了完成某种任务而进行的操作，比如下面就是一行赋值语句。
```
let a = 1+2+3;
```
声明一个变量`a`，然后将 `1+2+3` 计算出来的值6，赋值给a。

其中 `1+2+3` 就是表达式，和数学中的公式类似，为了得到某个值的计算式。例如：已知一个直角三角形，知道`a` `b`的长度，求c的值，运用勾股定理中 `a²+b²=c²`轻易得出c的值。学JavaScript怎么跑到数学知识上了，啪

![BC705ECD2FC92819901E728728F70A68](media/15858094377157/BC705ECD2FC92819901E728728F70A68.gif)

> 注：行末的分号表示当前语句结束，在单行内需要分开都条语句，这个分号才是必须的。一些人认为每条语句末尾加分号是一种好的风格。

## 3.标识符
声明变量标识符，需要符合javaScript 的规则。
* 第一个字符，可以是任意 包括英文字母，以及美元符号（$）和下划线（_）。或者其他语言的字母。
* 第二个字符及后面的字符，除了 Unicode 字母、美元符号和下划线，还可以用数字0-9。

```
let 数学 = 250
```
上面这段代码，JavaScript虽然能运行，但是不建议用汉字作为标识符，相信我。

![error](media/15858094377157/15858174659469.jpg)

为什么要这样规定，我写个例子你就知道为什么了。

JavaScript 定义一些变量，这些特殊变量标识符，你重新声明，程序不会把这些当成标识符看待，就会报错。

```
Uncaught SyntaxError: let is disallowed as a lexically bound name
```
以下就是JavaScript一些保留字，不能用作标识符。
```
arguments、break、case、catch、class、const、
continue、debugger、default、delete、do、
else、enum、eval、export、extends、false、
finally、for、function、if、implements、
import、in、instanceof、interface、let、new、
null、package、private、protected、public、
return、static、super、switch、this、throw、
true、try、typeof、var、void、while、with、yield。
```

## 4.条件语句
### 4.1 if 语句

```
let m = 3
if (m === 3) {
  m = m + 1;
}else {
 m = m -1
}
// 4
```
上面的语句表达的意思是，当 m 的值 全等于 数字类型 3 的时候，m 就在原来的基础上在加上一，或者就在原来基础减去一。

输出的结果就是m等于4。

通过上面的例子可以轻松理解 if...else语句的含义。
```
if (条件是否满足) {
  // 满足条件时，执行的语句
} else {
  // 不满足条件时，执行的语句
}
```
用户: if语句这就讲完了吗？

不正经作者：嗯

用户：听听你瞎逼逼半天，讲到重要知识点，一笔带过。啪啪

![84FB8750DF043B0B3F768359961F81DD](media/15858094377157/84FB8750DF043B0B3F768359961F81DD.gif)

不正经作者：轻点，我怕疼

![teng](media/15858094377157/15858179512858.jpg)

### 4.2 switch 语句
多个if...else连在一起使用的时候，可以转为使用更方便的switch结构。
```
var number = 1;
switch (number) {
  case 1:
    // 满足number === 1 条件时，执行的语句
    break;
  case 2:
    // 满足number === 2 条件时，执行的语句
    break;
  default:
    // 不满足以上条件时，执行的语句
}
```
上面代码根据变量number的值，选择执行相应的case。如果所有case都不符合，则执行最后的default部分。需要注意的是，每个case代码块内部的break语句不能少，否则会接下去执行下一个case代码块，而不是跳出switch结构。


```
var number = 5 - 4;
switch (number) {
  case 1:
    // 找回零钱4
  case 2:
    // 找回零钱3
    break;
  default:
    // 找回零钱 0
}
```
上面代码中，case代码块之中没有break语句，导致不会跳出switch结构，而会一直执行下去。

例子：一位顾客手里有5块钱，在超市买2根棒棒糖（一根棒棒糖5毛），本来应该找回零钱4块，结果你的程序漏掉`break`，出现系统bug。系统退回给顾客7块钱。

你就会被老板打，相信我。

![1B5238B37C05C69071B524790034CFAD](media/15858094377157/1B5238B37C05C69071B524790034CFAD.gif)

`default` 在系统中常表示：默认;系统设定值;预置值;

你这英语渣渣，我会不知道 `default` 的意思，瞧不起是吗？啪

![33F95F7A5D95B699647D30D51100239B](media/15858094377157/33F95F7A5D95B699647D30D51100239B.gif)

`if...else` 语句 和 `switch` 语句 还有一个需要特别注意的地方，if(条件) 条件进行类型转换，`switch`则不会。

### 4.3 三元运算符 ?:
条件满足执行表达式1，或者执行表达式2
```
(条件满足) ? 表达式1 : 表达式2
```
这不是和if...else 语句 功能一样？

对你没看错就是一摸一样，那为啥有必要说，为什么呢，因为这个逼格足够高，虽然代码写的很渣，但是为了不要让别人看出来，能用三元表达式就用，三元表达式代码写出来也比比较简洁明了。

![F8541A4514D9DE437D9E7973](media/15858094377157/F8541A4514D9DE437D9E7973C6791228.gif)

### 4.4 while 循环
While语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。

```
while (条件) 语句;
```

下面是 `while` 语句的一个例子。

```
var i = 0;

while (i < 10) {
  console.log('i 当前为：' + i);
  i = i + 1;
}
// i 当前为：0...
```
> `console.log`方法 用于在控制台输出信息。

### 4.5 do...while 循环

```
do {
  语句
} while (条件);
```
上面代码中看到，不管三七二十一，一来就相干了再说。这就是这个结构的最大特点，while语句后面的分号注意不要省略。

### break 语句和 continue 语句

**疑问：**

上面代码各种循环语句，但是有这么一种情况，如果我想在某个循环中，找到符合条件就不在继续执行了或者符合条件不执行操作怎么办。

这时候就到了`break` `continue` 上场了。

`break`语句和`continue`语句都具有跳转作用，可以让代码不按既有的顺序执行。

`break`语句用于跳出代码块或循环。

`continue`语句用于立即终止本轮循环。

```
for (var i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// 0
// 1
// 2
// 3
```
以上代码在没有`break`时候，正常会打印出0-4的数字，而用了`break`后当条件满足三直接跳出这个循环了。so 输出了0-3的数字。

`continue` 兄弟迫不及待的说，到俺了，快点，我说这就来
```
for (var i = 0; i < 5; i++) {
  if (i === 3)continue;
  console.log(i);
}
// 0
// 1
// 2
// 4
```
从上面代码看到，当条件满足了时候，程序忽略`console.log` 下面的语句，而继续执行下一个循环了。

## 后续

第一次写这种风格的文章，虽然写的不怎么好，但是希望勿喷，看不下的把网页关掉即可。


