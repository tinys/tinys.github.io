---
layout: post
title: JavaScript基础1
categories: [随笔]
tags: []
fullview: true
---

本文主要讲述了JavaScript语言中基本知识和概念以及平时工作时遇到的一些问题。

### 为什么需要深入了解JavaScript

  首先，作为前端工程师，无论在学习新的框架和技术，还是工作开发中，都要不断的阅读JavaScript代码，因此越深入JavaScript的基础，就能更好的理解别人的代码，也能更好的创造出自己的写法，提高自己的开发效率。同时在追踪一些bug时，也能根据JavaScript的基础知识来判断问题的原因（比如异步的一些问题），更快速的定位问题。

本文所讲的JavaScript基础的主要内容包括：

1. 变量和作用域
1. 对象和原型
1. 函数
1. 面向对象编程
1. 异步编程

### 变量和作用域

#### JavaScript是动态类型、直译语言
  动态类型是指在声明变量时，不需要指定类型，也就是说变量可以存放任何类型的数据，直译语言是指在代码是在运行时解释执行的。同时JavaScript也是一个基于原型的语言（下一节会讲到），也是一门多范式语言，它支持面向对象编程，命令式编程以及函数式编程。
  在语法上JavaScript与C语言有很多相似的地方，比如判断和循环等

#### JavaScript的数据类型
  虽然JavaScript的变量没有类型，但是数据是区分类型的。JavaScript的数据类型分为两大类：基本数据类型和引用类型。
  基本数据类型包括：`undefined` `null` `boolean` `number` `string` 五种
  引用类型是除了基本数据类型以外的所有数据类型，包括数组、对象和原生对象等等
  可以通过typeof来判断数据属于哪种基本数据类型，以下表达式的值都为true：

```javascript
typeof undefined === 'undefined'  
typeof null === 'object' //  判断null时可以考虑使用===来判断而不是用typeof
typeof true === 'boolean'
typeof 123 === 'number' 
typeof '123' === 'string'
```

#### 小数运算的问题
  考虑这个表达式的结果`0.7+0.1`，我们期望的结果是`0.8`，但是运算后的结果却是：`0.7999999999`,为什么会出现这个问题呢？
  由于JavaScript只有双精度浮点数字类型（不像Java那样区分整型和浮点型），对于JavaScript来说，`1.0 === 1` 是为true的。在JavaScript内部使用IEEE754格式来存储数值，但是这种格式无法准确的用二进制来表示某些十进制小数，这样就带来了小数运算时的精度问题。
  由于一般情况下我们不需要那么高的精读，所以我们可以通过四舍五入的方式来实现我们想要的结果。比如把上面的结果四舍五入保留一位小数后就会变成我们想要的`0.8`了。

#### 四舍五入的问题
  那一般我们用什么做四舍五入呢？有人会想到原生的`toFixed`方法，这里我们可以看一下从知乎中一个问题的[讨论](https://www.zhihu.com/question/37639441)：

> 通过查看`toFixed`方法在ECMA-262 5.1 Edition标准中的定义
```
15.7.4.5 Number.prototype.toFixed (fractionDigits)

Return a String containing this Number value represented in decimal fixed-point notation with fractionDigits 
digits after the decimal point. If fractionDigits is undefined, 0 is assumed. Specifically, perform the following 
steps: 
1. Let f be ToInteger(fractionDigits). (If fractionDigits is undefined, this step produces the value 0). 
2. If f < 0 or f > 20, throw a RangeError exception. 
3. Let x be this Number value. 
4. If x is NaN, return the String "NaN". 
5. Let s be the empty String. 
6. If x < 0, then 
  a. Let s be "-". 
  b. Let x = –x. 
7. If x >= 10^21, then 
  a. Let m = ToString(x). 
8. Else, x < 10^21
  a. Let n be an integer for which the exact mathematical value of n / 10^f – x is as close to zero as possible. If there are two such n, pick the larger n. 
  b. If n = 0, let m be the String "0". Otherwise, let m be the String consisting of the digits of the decimal representation of n (in order, with no leading zeroes). 
  c. If f != 0, then 
    i. Let k be the number of characters in m. 
    ii. If k ≤ f, then 
      1. Let z be the String consisting of f+1–k occurrences of the character '0'. 
      2. Let m be the concatenation of Strings z and m. 
      3. Let k = f + 1. 
    iii. Let a be the first k–f characters of m, and let b be the remaining f characters of m. 
    iv. Let m be the concatenation of the three Strings a, ".", and b. 
9. Return the concatenation of the Strings s and m.
```

>根据上述步骤
9.655.toFixed(2)的过程在8中
```
1. f = 2
3. x = 9.655
5. s = ''
8.

  a. n = 965
    原因
    当 n = 965 时 n / 10^f – x = -0.004999999999999005
    当 n = 966 时 n / 10^f – x = 0.005000000000000782
    965更靠近0
  b. m = '965'
  c.
    i. k = 3
    iii. a = '9', b = '65'
    iv. m = a + '.' + b = '9.65'
9. Return s + m = '9.65'
```

由上面可以看到，实际上受精度影响，在乘法除法进行移位时，会造成误差，导致`toFixed` 进行四舍五入也是不准确的，所以如果想要精确的运算结果，可以使用MDN上提供的一种[方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)来进行四舍五入

```javascript
// Closure
(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // If the value is negative...
    if (value < 0) {
      return -decimalAdjust(type, -value, exp);
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

// Round
Math.round10(55.55, -1);   // 55.6
Math.round10(55.549, -1);  // 55.5
Math.round10(55, 1);       // 60
Math.round10(54.9, 1);     // 50
Math.round10(-55.55, -1);  // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1);      // -50
Math.round10(-55.1, 1);    // -60
Math.round10(1.005, -2);   // 1.01 -- compare this with Math.round(1.005*100)/100 above
Math.round10(-1.005, -2);  // -1.01
// Floor
Math.floor10(55.59, -1);   // 55.5
Math.floor10(59, 1);       // 50
Math.floor10(-55.51, -1);  // -55.6
Math.floor10(-51, 1);      // -60
// Ceil
Math.ceil10(55.51, -1);    // 55.6
Math.ceil10(51, 1);        // 60
Math.ceil10(-55.59, -1);   // -55.5
Math.ceil10(-59, 1);       // -50
```
上面代码也可以看到，如果直接使用`Math.round(1.005*100)/100`这种方式也是不精确的，其结果是1，而不是预想的1.01。
这里的代码提供了安全的移位方式，通过科学计数法的方式来进行移位。以上的代码提供了对Math下round、floor和ceil的封装，增强了这三个函数的功能。

#### 变量的赋值

  基本数据类型的赋值和引用类型的赋值方式有所不同。基本数据类型为值传递，而引用类型是引用传递，目的是减少内存开销和对比开销，当引用类型对比时，只是对比的引用是否相同，而不是像基本类型对比一样，进行值的对比。
  请参考下面的代码：

```javascript
  var a = '123'
  var b = a;
  a = a + '456'
  a === b // false

  a = { x : 1 }
  b = a
  a.x = 2;k
  a === b // true
```

#### 复制变量

  由于像对象这种引用类型的赋值为引用传递，会在工作中造成一些非常隐蔽的问题，比如通过参数传进来的对象和数组，在函数内部被修改，会引起外部无法预料的情况，所以如果不想对外部环境在成影响，就需要对对象或数组进行复制。
  以下以对象的复制为例，一般对象复制分为深复制和浅复制。
  浅复制一般实现方式是对对象自身所包含的属性进行遍历，对每个属性通过赋值操作赋值到新对象上的同名属性的操作（无论是否是引用类型），一般可以通过`Object.assign`方法或者ES7提案中的对象展开符来方便的复制
  深复制一般实现方式是在浅复制的基础上，判断属性是否为引用类型，如果是引用类型，再递归的对该属性进行复制的操作。
  请考虑下面的代码

```javascript
function anotherFunction(){}

var anotherObject = {
  c:true,
}
var anotherArray = []
var myObject = {
  a:2,
  b:anotherObject,
  c:anotherArray,
  d:anotherFunction,
}
anotherArray.push(anotherObject, myObject)
```

如果想深复制`myObject`这个对象，当遍历属性时，会遇到anotherArray属性，当我递归的复制它的c属性时，它引用了`myObject`对象，如果不加判断的递归就会导致死循环，所以深复制时要注意循环引用的问题。当复制d属性时，也会出现问题，函数是没有办法进行复制的。而且复制函数也没有意义。
除了使用递归的方式，也可以使用`JSON.stringify`和`JSON.parse`来进行简单的复制，但是要注意错误处理，同时也注意上面提到的问题，如不要包含函数和循环引用的问题。

#### 作用域和作用域链

作用域是指变量在程序中作用的范围，换句话说，当获取一个变量的值的时候，语言引擎获取值的一种规则。作用域分为两种：动态作用域和静态作用域。
动态作用域是指：根据函数的调用链来确定变量的可见范围。
静态作用域是指：根据函数定义（对于JavaScript来说）的文本环境来确定变量的可见范围。函数定义内可见，函数定义外部不可见。JavaScript就属于静态作用域。
当使用var定义变量时，定义的变量就会在当前作用域（ES6之前只有函数作用域），不使用var则定义在全局环境
作用域链是指：当在函数内部定义函数，也就是作用域嵌套时，则内部作用域能访问外部作用域的变量（当内部作用域无此变量时），此访问链称为作用域链
通过利于外部作用域无法访问内部作用域变量的特点，可以实现隐藏内部实现的功能，防止内部变量被意外篡改，引发异常。

#### 闭包

闭包是指一个函数持有一个外部函数作用域中变量的引用。一般如果一个函数作为变量被返回一般就会发生闭包。请看下面一个经典例子：

```javascript
for(var i = 1; i <= 5 ; i++){
  setTimeout( function timer(){
    console.log(i);
  }, i*1000);
}
```
我们期望的结果是每隔一秒输出1~5这5个数字，结果确实一直是6。由于timer形成了闭包，只是拿了i的一个外部引用，当延迟执行的时候，i值已经被for循环改为6了，所以我们通过每次创建一个新的作用域来暂存住i的值，如下：
```javascript
for(var i = 1; i <= 5 ; i++){
  (function(){
    var j = i;
    setTimeout( function timer(){
      console.log( j );
    }, i*1000);
  })()
}
```
这样就能如我们预期的一样了。这里有一点需要注意：如果i是一个引用类型，则要复制i的值，而不是赋值，来防止引用赋值的问题。

##### 变量提升

考虑下面的代码：

```javascript
var v = 'Hello World'

(function(){
  console.log(v)
  var v = 'thanks'
})()
```
这里会输出什么呢？结果是`undefined`,这里是由于变量提升的原因，也就是说变量提升只提升变量的定义，不提升变量赋值。

#### 对象和原型链
JavaScript中定义一个对象非常的方便，可以使用对象字面量的方式进行定义，本质上是一种哈希表的实现。
JavaScript对象上有一个特殊的内部属性：原型`[[Prototype]]`，它只是一个其他对象的引用。几乎所有的对象在被创建时，它的这个属性都被赋予了一个非null值。
请考虑下面的代码：
```javascript
var anotherObject = {
  a:2,
}
var myObject = Object.create( anotherObject );
myObject.a; // 2
```
上面的代码通过`Object.create`方法使`myObject`的原型指向了`anotherObject`，显然`myObject.a`实际上不存在，但是引擎从`anotherObject`上找到并返回了值`2`，如果在``anotherObject上也没找到`a`，而且如果它的原型链不为空，就沿着它的原型链继续查找，以此类推，直到找到a属性或者到达原型链的终点，如果在终点也没找到，则会返回`undefined`，一般对象的原型链重点是`Object.prototype`

#### 函数

JavaScript中的函数是一种特殊的对象，可以赋值给变量，并且和对象一样可以拥有自己的属性，但与一般对象不同的是，在创建时会自动包含prototype属性，并且prototype其中包含constructor并指向自身

#### 函数中的`this`

函数中的this不是编写时绑定，而是运行时绑定，它是根据函数在代码中调用的位置（不是被声明的位置）决定的，也就是说他和函数的调用栈（call-stack）有关系。
this的绑定遵循四种规则：
* 默认绑定：独立的函数调用，也就是直接通过函数名调用，this会指向全局对象，在严格模式下会被设置为`undefined`
* 隐藏绑定：函数属于某个对象的方法，通过该对象去调用，this会指向该对象。比如`obj`上有一个方法`f`，通过`obj.f()`调用，则f中的this指向为obj。但是如果当把`var b = obj.f`赋值给b后，再去`b()`，则会按照默认绑定规则，如果作为回调函数，情况也是如此。
* 明确绑定：通过call或apply调用函数，指定this的指向。如果再用一个函数包装起来，则称为硬绑定，类似与通过ES5中的`bind`方法，this绑定固定后将无法改变
* new绑定：在JavaScript中被new调用，则函数被作为构造器，引擎会创造一个新的对象作为调用中的this。这个会在后面详细讲到

##### 绑定优先级

从下到上 new绑定 > 明确绑定 > 隐藏绑定 > 默认绑定

##### 箭头函数

前面讲的函数都是指一般的函数。箭头函数作为一种特殊的函数，它内部的this绑定由词法作用域决定的（不是运行时绑定，而是编写时绑定），类似于在外部把this赋值给self，然后在箭头函数内部使用self




