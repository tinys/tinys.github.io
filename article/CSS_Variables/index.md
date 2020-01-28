#CSS变量，来了？

##简介：

Web开发人员一直希望，可以在css开发中能够使用强大的变量。现在，CSS变量终于来了。在这篇文章中，我们会追忆CSS变量的历史，重要性以及应用，在这里你能够了解到如何利用CSS变量，来使CSS的开发和维护变得更快更容易

CSS变量的历史是坎坷的。该功能最初是由W3C在2012年提出，但是只有Chrome和Firefox对该特性进行了实现。 当该规范在2014年得到了显著的语法改进后，Firefox仍然更新并修改了它的实现，而Chrome则决定在特性被确定后，再对它的实现进行修改。微软对此漠不关心，他们使用了另一种方式。

在2015年9月，[caniuse.com](http://www.caniuse.com)的报告中指出浏览器支持CSS变量低于9%，以下是它当时的报告

![GitHub set up](https://cdn-images-1.medium.com/max/640/1*wFzzp4BrgEpcwJfXa416lA.png)

然而，在2016年，Chrome，Safari，Opera，安卓浏览器等全部跳上CSS变量这趟列车，突然之间CSS变量支持率骤升到69%（全美境内网站支持率为77%），从最近的报道中可以看出，Edge浏览器也开始支持CSS变量

![GitHub set up](https://cdn-images-1.medium.com/max/640/1*JA-pkkzdhGp8ms3h33rnJA.png)

所以，现在CSS变量是一个你可以应用在实际中的官方特性

##变量的进阶
变量，不管在什么语言中，它只是一个存储值（方便以后引用）的容器。例如在表达式x=3中， x是变量名，而3则是变量值。当然变量值是可以被更改的（要不干嘛叫变量呢？），但是真正被使用的值是通过引用这个变量而获得的。因此，如果x=3，那么表达式x+2便等于5，但是如果x的值在某个点变化到4，那么同样的表达式，x+2，它便等于6。变量x总是返回变量当前值，它不受使用场景和使用频率的影响

CSS是一种声明式的、模式匹配的语言，而不是一种过程式的步进式的语言，那么我们为什么要在CSS中使用变量呢?这和我们在数学，编程中使用变量的原因是相同的，因为它的简单、一致性和易于维护，能够做到一个状态的缩写，可以不重复定义。通过在CSS中使用变量，可以将值局部化，并简化开发、迭代测试和后期维护。变量是这样的:一次定义，全局可用，一次修改，全局变化

###它们是变量还是属性？
CSS变量有一个恰当的称谓叫做“自定义属性”。你甚至可以把它们称为“无效属性”，因为CSS变量不能与已有CSS属性重名，并且也不会成为新的CSS属性（浏览器不会将它识别为CSS属性，现在不会，以后也不会）。

举个例子，属性名`background-color`能被浏览器识别为具有特定意义的属性,但是`——hey-this-is-my-cool-bg-color`确不能被识别，对浏览器来说是无意义的。所以,它是一个无效的属性名，除非是作为一个变量出现在CSS中

自定义属性与常规属性的都会储存一个值,但与常规属性不同的是我们在后面可以通过引用变量名来复用这个值。就像变量一样，然后您将看到,它可以通过关键字`var()`来引用。不得不说的是，从专业的角度来说，它是自定义变量，但是我们依旧称它为CSS变量，甚至W3C也是这样滴

###解决的问题：
在开发过程中通一个简单的CSS也会很快变的混乱,而难以维护。许多属性/值偶然或必然的会被重复很多次。例如,对于每一个你想将左margin设置为`20px`的元素,你都会给它们写上CSS样式：`margin-left:20px;`。但是你认为如果左margin为`15px`效果会更好,这时你只能调整每个元素的CSS样式，这就产生了一种维护问题。

举个例子 ：下面这部分CSS代码使用了`darkcyan`这个标准颜色名

```
body {
  margin: 50px;
  padding: 20px;
  border: 5px solid darkcyan;
  font-family: tahoma, verdana;
  text-align: center;
}
.legend {
  color: darkcyan;
  font-weight: bold;
}
a {
  outline: none;
  color: Darkcyan;
  text-decoration: none;
}
fieldset {
  border: 1px solid darkcyan;
  height: 300px;
}

```

如果我想将这种重复的`darkcyan`变为`orange`，你就不得不仔细查看CSS代码并且需要手动改变三处。实际上，实际项目中的代码并不像我示例中那样紧凑，而是更多，更分散，所以维护便成为了一种噩梦。

我知道你现在在想什么：全局搜索，替换不就可以解决了吗？当然,没问题,如果您的编码风格完全相同，但是你要知道CSS属性名是区分大小写的,但属性值不是，也就是说`darkcyan`和`Darkcyan`都可以在你CSS中正常工作,所以一次搜索和替换操作并不能完全覆盖到。事实上,如果考虑到这一点,回头再看看代码，想一想，颜色有多少种表示方式，用常用的白色举例，`#ffffff`,`#FFFFFF`,`#fff`,`#FFF`,`rgb(255、255、255)`, `white`，是的，他们都可以代表白色，并且对于浏览器来说都是有效的，但是它们需要用不同的搜索条件来查找，面对这种情况，怎么办？

CSS变量就是它的答案！

###语法：

1、声明：
回想下吧，CSS变量也是一个属性/值对,它的定义方法和定义常规的属性名是一样的，除了我们是用一个自己定义的字符串来做它的属性名。最重要的一点就是让浏览器知道这是个无效的属性名是**故意命名的**，而不是像`background-colour`这种错误输入（犯这种错误，就要打手心哦！）

在你的变量名前加两个横杠来表面这是个变量，举个例子`--my-background-color`,` --standard-shadow`, `--bqindents`。这样的话，以两个横杠开头的属性名将被自动识别为变量，而不是无效的属性名，它们的属性值就是变量的值。

2、获取：
这已经成功了一半,现在我们只需要通过`var()`(他看起来是一个函数调用，但确实是个关键字，就别吹毛求疵啦)关键字来引用变量名。 使用`var()`关键字来告诉浏览器获取先前定义的变量,把它放到实际的属性值后面,例如:`var(——bqindents）`

所以，这就完了吗？

没错，就是这样！第一步，在`:root`伪类中定义你的属性／值对：
```
:root {
  --bgcolour: #ffffd0;
  --bqindents: 40px;
  --warningtextsize: 125%;
}
```

第二步，在我们需要使用它们的地方来引用变量名来获取对应的值

```
table {
  background-color: var(--bgcolour);
}
blockquote {
  margin-left: var(--bqindents);
  margin-right: var(--bqindents);
}
p.warning {
  color: red;
  background-color: var(--bgcolour);
  font-size: var(--warningtextsize);
}
```

回顾下：

一声明，

二使用，

三享受

完美



###PAQs：
以下是对常问问题的解答，可能也包含了你想问的问题哦

Q:我们总是要使用`:root`伪类做为一个选择器来定义变量吗?
A:不，不一定,但通常情况下是这样的。这样做有两个目的，首先,它可以把所有的变量收集在一个地方,方便变量的维护；其次,`:root`可以匹配到整个页面中的任何元素,所以定义在其中的变量可以全局使用

Q:我是否可以在不同的规则中给相同变量设置不同的值，让其成为局部变量而不是全局变量呢？
A:是的，虽然通常来说这并不是必要的,但在某些情况下,它却是是有意义的（参考xxx部分）

Q:自定义属性是否可以被层叠呢？
A:是的,它和其他属性一样，是可被层叠的。如果你通过变量来设置`<div>`的背景颜色,那么div的子元素的背景颜色的也将保持一致。

Q:变量名区分大小写吗?
A:是的，它是区分大小写的。`--h1color`,`--H1color`,` —h1Color`代表着不同的变量，如果引用错误迎接你的将是数小时悲伤的调试。所以我推荐大家使用驼峰式命名规则，这样可以一定程度上避免这种问题的产生

Q:定义变量名时我可以使用破折号或者下划线吗?
A:可以使用,但是中间千万不能有空格。`-h1-color`,`h1_color`,`h-1_color`都是有效的变量,但是`—h1 color`这种写法是无效的。事实上，CSS本身更偏向于使用破折号，在许多标准的属性名中都可以发现破折号的存在,在破折号和下划线的选择上，我推荐使用破折号，这样可以保持代码的一致性和变量名的可读性

Q:我可以在多个不同的属性中引用同一个变量吗？
A:可以,只要它们都是是有效的。例如,你可以定义一个值为20PX的变量，你可以在所有的变量中使用它们，譬如`margins`, `padding`, `font size`。在上面的例子中可以发现`--bqindents`被使用两次

Q:我可以定义一个单独的数字做为变量值吗,然后在不同属性中使用?
A:不，这是不被允许的，您不能用单独的数字或单位来构建一个值;一个变量必须具有一个单独的、有效的、明确的值，例如（下面的例子不会生效）：

```
:root {
  --my-value: 20;
}
. . .
blockquote {
  margin-left: var(--my-value)px;
}

```

Q:那么,我可以使用属性名作为变量值吗?
A:当然不可以,变量只能在值中被使用，不能作为属性名来使用。例如（下面的例子不会生效）：

```
:root {
  --my-property: font-size;
}
. . .
p {
  var(--my-property): 24px;
}

```

Q:我们可以把一个变量设置为另一个变量的值吗？
A:可以，虽然我不能想到一个很好的例子,但它确实是行得通的

```
:root {
  --mybasecolor: red;
}
. . .
p.wow {
  --myparacolor: var(--mybasecolor);
}
```

Q:为什么不直接使用SASS,LESS,或者其他一些CSS预处理来定义变量呢?
A:打蚊何需用大炮，杀鸡何需用牛刀呢

##如何处理色彩值？

网上有很多关于CSS变量的文章，大家都爱使用颜色来做例子。以下两个原因，首先，颜色的替换是直观改变、并且易于发现的;其次，它是该特性的一个非常实用和通用的例子。虽然设置颜色决不是使用变量的唯一方法，但大多数CSS使用者，首次尝试使用变量时会使用颜色来作为例子。

接下来让我们看些实际的例子，既有与颜色有关，也有与颜色无关的

1、内容高亮：

想象一下，你在一个web页面中将斑马表格、标签、引用的背景、和输入框获取焦点时的高亮效果保持相同，你可以给每一个元素设置你想要的高亮颜色，刷新下页面，它可能看起来像这样

![GitHub set up](https://cdn-images-1.medium.com/max/640/1*yRF-SSr6tI5NrLaXzjv4MQ.png)

但是，看着这个颜色,并不是像你期望的那种淡黄色,所以你决定使用另一种颜色，这个时候，你不得不查找对应代码并且替换它们，这样做很容易漏掉一个样式或者出错。所以我们需要打破这种重复操作，你只需要设置一个变量，来定义原始颜色并在实际的元素中使用它，例如：


```
:root {
  --hilitecolor: #ffffe0;
}
. . .
tbody tr:nth-child(odd) {
  background-color: var(--hilitecolor);
}
span.hilite {
  background-color: var(--hilitecolor);
}
blockquote {
  font-family: times;
  font-weight: bold;
  font-size: 90%;
  margin-left: 75px;
  margin-right: 75px;
  background-color: var(--hilitecolor);
  padding: 10px;
  border: 1px solid black;
  border-radius: 15px;
}
input:focus {
  background-color: var(--hilitecolor);
}
```

现在,你全局定义了一个你想要使用的高亮颜色,你只需要改变一个变量声明,而不是规则本身。如果不满意该颜色，那在定义的地方改变它即可,然后重新加载,所有的高亮将随之改变。是不是超级简单？

2、斑马表:
斑马表和(其他典型的单用项)提出了一个有趣的问题:如果您只打算在一个或两个规则中使用变量，那么为什么还要定义变量呢?实际上使用变量并没有带来更多的好处，那么为什么不直接在具体的规则中编写属性值呢?
这是一个很好的问题，最重要的是:变量易于维护。定义斑马表的交替背景颜色的属性可能淹没在你的CSS代码中,因此很难找到和维护,但如果你在样式表顶部的:root声明你的颜色变量,在几秒钟内你可以容易的找到它,并且修改它。下面是一个使用奇偶行突出显示的例子：
![GitHub set up](https://cdn-images-1.medium.com/max/640/1*wz-muRD95o0eFVpu3-MZIw.png)

```
:root {
  --zebraevencolor: lightgreen;
  --zebraoddcolor: lightblue;
}
. . .
tbody tr:nth-child(even) {
  background-color: var(--zebraevencolor);
}
tbody tr:nth-child(odd) {
  background-color: var(--zebraoddcolor);
}
```

现在,无论两个:nth-child()规则是什么,你都不需要关系它们，只要在顶部定义两个css变量的地方改变它就好了。

3、Swapping Link Colors on Hover
这里有一个简单的用例，它是为变量量身定做的。当用户在文本链接上悬浮时，一些开发人员喜欢改变链接的前景和背景颜色。这个简单的技巧使操作形象化，但是因为它使用了现有的颜色，它不会影响页面的配色方案。或者，您可以使用一种颜色组合，与页面颜色形成对比，以增强效果。这里有个蓝色和白色的例子：
![GitHub set up](https://cdn-images-1.medium.com/max/640/1*VRD2i8Ovrgz-6tQCPcROyw.png)

尽管这听起来很简单，但它是一个完整并正确的代码。在这个方案中，如果想再添加:link 和:visited这两种状态的效果，但是:hover和:active已经使用了这种方案，那么要如何做呢？
      也就是说，在那简单的规则中有8种对应的颜色属性和值，如果你不小心出错，你将会很难定位错误并修复它们。但是，如果你用变量来设置颜色，那么在不考虑规则的情况下更改颜色就是变得很容易。它只需要两个变量。一旦四种规则调用-linkfg和-linkbg变量，它们就永远是正确的。就像上面的例子一样，这个可以极大地简化颜色的调整，直到你得到一个满意的组合。

```
:root {
  --linkfg: #000080;
  --linkbg: #ffffff;
}
 . . .
a:link {
  color:var(--linkfg);
  background-color:var(--linkbg);
}
a:visited {
  color:var(--linkfg);
  background-color:var(--linkbg);
}
a:hover {
  color:var(--linkbg);
  background-color:var(--linkfg);
}
a:active {
  color:var(--linkbg);
  background-color:var(--linkfg);
}
```

在这里，你可能已经了解到链接伪类排序的正确排序了:link, visited, hover, and active。若没有，你可以通过记忆“LoVe over HAte”来记住这一顺序。

4、Multi-part Values：
回想一下，我们之前提到过如何定义变量的有效值，是的，不管值是像黄色这样的单例，还是像10px 20px 15px 20px这样的值，只要不是以逗号分隔而是连接在一起，都是可以生效的。接下来我们看一个例子：
![GitHub set up](https://cdn-images-1.medium.com/max/640/1*wUPGT9SXWegPQi-pGt4ezw.png)

阴影是一个很好的特性，但是它们通常需要一些尝试和调整才能得到正确的效果。毕竟，阴影有四个组成部分:水平偏移、垂直偏移、模糊半径和颜色。假设有一个页面，你想要不同的文本和图形元素具有相同的阴影效果,我想你并不需要使用18个小时来调整多个CSS规则，以确保它们达到相同的效果。这时，CSS变量就是你的救星！

```
:root {
  --stdshadow: 3px 3px 5px #A0A0A0;
}
. . .
h1 {
  text-shadow: var(--stdshadow);
}
p.shadow {
  text-shadow: var(--stdshadow);
}
img.boxed {
  box-shadow: var(--stdshadow);
}
```

你只需设置一个变量，其中包含shadow的各个值，在所有使用该阴影的地方调用该变量。想要调整它，测试它，然后改变它吗?不用担心，你只需简单的改变变量声明然后刷新就好了。

5、Themes (让营销人员开心就好)：
所有的这些都是对变量的合理延伸，不仅对颜色还是缩进设置来讲。更重要的是,使用变量可以构建很多可以工作的样式集合,如colors, margins, spacing, line height, list style, shadows, justification等等;换句话说,这个样式集合则是一种主题。

基于变量的主题不仅可以帮助你自己，还可以保持部门间的平静，就像当营销代表说“不，不是那个蓝色的，是这个蓝色！”不管谁想要改变什么，你都可以快速且轻松地测试它，而不需要备份多个CSS文件(相比于不使用变量来说)来防止不必要的事情发生。你只需复制一个变量块，它代表你的测试主题，原本的变量是你的备用主题，将备用主题注释掉，然后对测试主题进行调整即可。
例如，虽然没有看到这些主题块所应用的页面，但你可以很容易地想象当一个或另一个变量集被应用时，它会有什么不同。如果测试主题出现问题，你可以将它注释，然后恢复备用主题，直到测试主题被修复之后，你根本不需要对单独的规则进修查找和修改。这，就是基于变量主题的力量。
```
**Variable set 1 — test theme (currently in use) **

:root {
--transition-type: padding-left 250ms ease-out;
--transition-padding: 20px;
--transition-font-size: 100%;
--navbar-bgcolor: lightgray;
--navbar-h2-color: brown;
--navbar-h2-border: thin brown solid;
--navbar-font-size: 12px;
--font-stack: Cambria, Georgia, "Times New Roman", serif;
--font-size: 16px;
--font-color: darkblue;
--max-width: 1000px;
--header-fontvariant: normal;
--header-color: white;
--header-bg: teal;
--header-shadow: 2px 3px 4px red;
--header-curve: 20px;
--header-border: thin darkblue solid;
--teaser-color: yellow;
--byline-color: white;
--h3-color: teal;
--h3-fontvariant: small-caps;
--dropcap-size: 200%;
--dropcap-font: Times;
--pullquote-border: thick black solid;
--pullquote-start: url(quotestart.png);
--pullquote-end: url(quoteend.png);
--zebraoddcolor: white;
--zebraevencolor: lightyellow;
--linkfg: darkblue;
--linkbg: white;
}

** Variable set 2 -- fallback theme (currently commented out)
:root {
--transition-type: font-size 250ms ease-out;
--transition-padding: 0px;
--transition-font-size: 200%;
--navbar-bgcolor: lightblue;
--navbar-h2-color: darkgreen;
--navbar-h2-border: thin darkgreen dashed;
--navbar-font-size: 14px;
--font-stack: Verdana, Arial, sans;
--font-size: 18px;
--font-color: darkgreen;
--max-width: 1500px;
--header-fontvariant: small-caps;
--header-color: black;
--header-bg: lightyellow;
--header-shadow: 2px 3px 4px orange;
--header-curve: 100px;
--header-border: thick red solid;
--teaser-color: red;
--byline-color: orange;
--h3-color: darkred;
--h3-fontvariant: normal;
--dropcap-size: 400%;
--dropcap-font: Courier;
--pullquote-border: thick #ff6a00 dotted;
--pullquote-start: url(orangequotestart.png);
--pullquote-end: url(orangequoteend.png);
--zebraoddcolor: yellow;
--zebraevencolor: lightgray;
--linkfg: red;
--linkbg: white;
}
**
```


_如果你想要了解在实践中如何使用这样的主题，请访问[http://davegash.com/cssvars/](css variables folder) 。这里有两个页面apocalypsetoday1.htm 和 apocalypsetoday2.htm， 它们分别引用了apocalypsetoday1.css和apocalypsetoday2.css。除了它们的主题是基于变量而更改的，HTML页面和CSS样式表都是完全相同的。可以将HTML页面并排打开，方便查看通过简单地交换CSS变量而取得的显著差异。_

6、还有一件事情：
说到回退，还有一件事你应该了解:回退的值。`var()`函数有第二个可选参数，如果变量解析失败，它将代替该参数来赋值。

类似于让浏览器从糟糕的字体调用中恢复字体堆栈，回退值让你的规则从一个错误变量恢复到正常。这简单，当解析出错时，它们可以完全替换你的引用。在属性值中变量引用之后，如果变量不能正确地被解析，就添加一个逗号和一个值作为回退。

```
:root {
  --custom-width: 80%;
  --myTextColour: darkblue;
}
. . .
div.special {
  width: var(--custom-width, 80%);
  color: var(--mytextcolour, red);
}
```

在`class="special`的div中，自定义变量`--custom-width`引用成功，即使没有，回退值也匹配了预期的变量值，因此它总是正确的。但是，`--mytextcolour`变量引用失败（我很确定你知道失败原因）这个时候回退值会取代未解析的变量值。

事实上，第二个例子以创意并有用的方式验证了回退值:使用很明显不同的回退值作为一种调试方法！在本例中，您期望div文本是深蓝色的。但它实际展示的是红色，这很明显，该变量并没有赋值成功。定位错误（驼峰写法），解决它，然后再进行测试。深蓝色的文本将呈现在你的面前。

##高级应用：
1、作用域
让我们回顾一下作用域的概念。CSS变量最常见的作用域是全局的，这意味着它们可以被用在任何CSS规则或HTML元素中。但是有些情况下，您可能想要限制使用范围以简化页面维护和更新。
考虑一个包含多个内容块的HTML页面，每个内容块包含一系列简短的文章，其中的文章属于不同的逻辑组或部分。基本的HTML可能是这样的

```
<section class="thisweek">
  <article>
  . . .
  </article>
  <article>
  . . .
  </article>
  <article>
  . . .
  </article>
</section>
<section class="lastweek">
  <article>
  . . .
  </article>
  <article>
  . . .
  </article>
  <article>
  . . .
  </article>
</section>
<section class="oldstuff">
  <article>
  . . .
  </article>
  <article>
  . . .
  </article>
  <article>
  . . .
  </article>
</section>
```

这些部分将被CSS用来设置不同的属性，虽然每部分中的文章看起来是相似的，但是与其他部分仍存在不同。也就是说，每个部分都有自己的外观或小主题。

你可以从结构中推断，随着内容的增加，文章可能会从一节移到另一节，并添加新的内容。这看起来是个简单的维护任务，只需将整个文章从一个部分剪切并粘贴到另一个部分即可。但是，他们的样式会如何变化呢?如果文章中的元素有它们自己的CSS规则，你怎么能保证它们的主题不互相冲突呢?
为了简单起见,我们给`<h1>`设定颜色和字体大小,但是,我们可能会修改文章的其他属性,size, font, images, shadows, margins, backgrounds等等——为了区分各个部分。这里有一些CSS

```
section.thisweek {
  --h1-color: red;
  --h1-size: 110%;
}
section.lastweek {
  --h1-color: green;
  --h1-size: 100%;
}
section.oldstuff {
  --h1-color: blue;
  --h1-size: 90%;
}
article h1 {
  color: var(--h1-color);
  font-size: var(--h1-size;)
}
```

首先使用相同的变量来设置两个属性，注意是在它自己的section上面定义，而不是在`:root`上。这代表着在不同的局部作用域中为相同的变量建立了不同的值。在后面的使用中只需要使用后代(也称为上下文)选择器来匹配文章中的h1，使用它们当前作用域中的变量值为每部分的标题设置颜色和字体大小。

这样，您就可以轻松地将文章从一节移到另一节，不需要再修改任何特定的规则，就可以保证它们将与目标部分中的其他部分相融合。当然，这些规则并不会影响到这三个部分之外的h1或其他任何元素。

2、计算

前面我们说过，不能只使用一个变量值或一个度量单位来构建一个属性值。但是，您可以使用(有点深奥但完全有用)的CSS` calc()`函数来计算一个你想要的实际值。
假设在页面一个中心有个banner，它会占用一部分，但并不填充整个页面。一般情况，可以将其宽度作为页面宽度的百分比来编写。例如`width:85%;`但这并不是最优编写方式，每次页面宽度改变时，它的左右距离和banner的宽度都会随页面宽度改变而改变。如果你想做到不管页面宽度而左右宽带均保持40px的大小呢，这种情况就可以使用CSS math:`width:calc(100%-80px)`，再把剩余的80px分成两份。

那么我们如何结合`calc()`和`var()`来获得一个可用的结果呢?让我们举另外一个的例子。例如，我们希望blockquote页面的文本为1.5em，但警告页面文本为2.0em，我们已经意识到这些大小并不是一成不变的;用户测试、营销需求或其他外部影响都可能会迫使它们不停地改变。下面是一些CSS，

```
:root {
  --bq-resize-by: 1.5;
  --warning-resize-by: 2.0;
}
. . .
blockquote {
  font-size: calc(var(--bq-resize-by) * 1em);
}
.warning {
  font-size: calc(var(--warning-resize-by) * 1em);
}
```

通过将变量值与1em的常量字体大小相乘，我们得到了两种文本类型所需的大小。而且，和往常一样， 当乘法因素需要改变时，它们很容易在CSS顶部的`:root`中找到。如果普通的blockquote元素字体需要0.9em，带warnings的blockquote元素字体需要1.75em，那么只要改变变量就可以了。

3、JavaScript
好了，再说一个特性，这也是另一种能力。虽然我不认为它最好的，但是我确定它是存在的。而且，如果我在这里没有提到，读者可能会用匿名的方式来攻击我。

简单地说，您在JavaScript中可以用get和set方式来访问CSS变量。如果想获得一个变量的值，比如`—my-bg-colour`，首先取到文档中样式对象，其次获取该属性值，最后将其放入一个JavaScript变量中。trim()函数并不是必需的,但是可以去掉空白值。

```
var allstyles = getComputedStyle(document.documentElement);
var varval = string(allstyles.getPropertyValue("--my-bg-colour"));
var varval = varval.trim();
```

相反,你在文档的样式对象中直接设置一个变量的值。最后,你可以在css中通过一个变量设置另一个变量的值,在JavaScript中你也可以为其它变量指定第二个参数。要记得,`var()`和引用是必需的!

```
document.documentElement.style.setProperty("--my-bg-colour", "#008080");
document.documentElement.style.setProperty("--my-bg-colour", "var(--my-fg-colour)");
```

##要点回顾：

如果你一直在关注，你可能已经得出了以下结论，让我们一起回顾一下要点:
1、CSS变量是很重要的。多年来，开发者一直在寻求这个功能，原生浏览器支持已经有一段时间了。它不需要任何第三方工具，不需要任何的构建步骤，也不需要使用命令行，CSS变量就可以在浏览器中很好地工作了

2、CSS变量它不仅仅是一个深奥的技巧，或者只有硬核开发者才会欣赏的古怪特性。每个使用CSS的人都应该使用CSS变量;他们在开发和维护模式中都能够大大地提升工作效率。

3、CSS变量是一种易于学习的有趣特性，并且非常有用。对于变量这个概念来说，无论你是新手，还是老手，你都能够马上掌握它的特性，随着你使用的越多，你就会发现它们的优势就越大。

##资料来源：
搜索“css变量”会返回成千上万的文章，但是并不是所有的文章都有最新的，最正确的信息。下面是一些我推荐的一些文章:
·[A short and useful basic CSS variables tutorial](http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/)
·[A comparison of native and preprocessor CSS variables](https://css-tricks.com/difference-between-types-of-css-variables/)
·[A very good “What You Should Know” tutorial](https://web-crunch.com/know-css-variables/)
·[A CSS variables guide that covers calc() and JavaScript access](http://www.htmlgoodies.com/html5/css/a-guide-to-using-css-variables.html#fbid=O5ClIaBBTR0)
·[The W3C Editor’s Draft specification](https://drafts.csswg.org/css-variables/)

##感谢：
感谢您阅读这篇文章,我希望您能够学到一些东西!若您有问题，可以联系作者Dave Gash,dave@davegash.com。

##原文地址
[https://medium.com/dev-channel/css-variables-no-really-76f8c91bd34e](https://medium.com/dev-channel/css-variables-no-really-76f8c91bd34e)



