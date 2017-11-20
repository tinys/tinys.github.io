# 揭开React风靡前端开发领域的面纱

![](file:///Users/mawenting/Desktop/Yes,%20React%20is%20taking%20over%20front-end%20development.%20The%20question%20is%20why._files/1-3IUcek7o2S5aJnFAgtP5Gg(1).png)

[^本文的重点是React受欢迎的原因，而不是与其他框架或库进行比较]: 

以下是React如此迅速流行的几个原因：

* 使用DOM API成本较大。React使开发人员能够使用比真实浏览器更友好的虚拟浏览器。React的虚拟浏览器就像开发者和真实浏览器之间的代理一样。
* React允许开发人员声明式地描述UI并给界面状态建模。这意味着开发者只需通过一个最终的状态来描述页面，而不必一步步的处理界面上发生的交互。当前的状态发生改变时，React会相应地更新UI。
* React只是JavaScript，开发者只需学习非常少量的API（一些函数及函数使用方法）来掌握React。掌握JavaScript技能有助于你成为更好的React开发人员，没有入门障碍。一个JavaScript开发者可以在几个小时内成为一个高效的React开发者。

不仅仅是这些，下面让我们揭开React不断流行背后的更多原因。一个原因是它的Virtual DOM（React的reconciliation 算法)。我们通过一个例子来展示这算法的实际应用价值。

React的官方定义：*用于构建UI的JavaScript库*。这个定义强调了两个不同的方面：

1. **React是一个JavaScript库，不是一个框架**。 它并不是一套完整的解决方案，我们需要使用更多其他的库。React并不能取代一套解决方案中的其他角色。它只关注于做好一件事。
2. **另一方面，React做的很棒的地方：*构建UI* **：UI使得用户可以与机器进行交互。UI随处可见，小到微波炉上的一个按钮，大到航天器的仪表盘。如果我们要交互的设备可以识别Javascript语言，那么我们就可以使用React来描述它的UI。


Web浏览器可以识别JavaScript，所以我们可以使用React来描述Web用户界面。我喜欢用**描述**这个词，因为这就是我们用React主要做的事：只需要告诉它我们想要什么，然后React帮我们在Web浏览器中构建出实际的UI。如果没有React或类似的库，我们将不得不使用原生的Web API和JavaScript手动构建用户界面。

当你听到“React是声明式的”时，没错，就是这样：我们用“React”描述用户界面，告诉它我们想要什么（而不是如何做）。React本身会处理“如何做”，将我们的声明式描述（用React来描述）转换为浏览器中的实际用户界面。使用React，我们可以声明动态数据的HTML页面，而不仅仅是静态数据。

React有三个主要的设计理念推动了它的流行：

##### 1—可复用，组件化，有状态组件

在React中，我们使用组件描述UI。你可以将组件视为简单的函数（任何编程语言中的函数）：我们调用函数时，给定一个输入，它会给我们返回一个输出。我们可以按需复用函数，可以用小的函数组合成更大的函数。

组件也是一样的，组件的输入被称为“属性（properties）”和“状态（state）”，组件的输出是一个用户界面的描述（就像HTML是对浏览器界面的描述一样）。我们可以在多个用户界面中复用同一个组件，组件也可以包含其他组件。

但是，与纯函数不同的是，React组件可以有一个私有的状态来保存可能随时间变化的数据。

##### 2 — 响应式更新

React，顾名思义，就是这个概念的简单解释。当组件的状态（输入）发生变化时，它所表示的用户界面（输出）也会随之发生变化。对UI的描述发生了变化必然会引起我们交互设备的变化。

在浏览器中，我们需要在DOM（文档对象模型）中重新生成HTML视图。使用React，我们不需要关心*如何*反映这些更改，甚至不需要管理*何时*把更改映射到浏览器中；React会对状态改变做出反应，并在需要时自动更新DOM。

##### 3 — 在内存中视图的虚拟表现

使用React，我们用JavaScript编写HTML，使用JavaScript根据数据生成HTML，而不是扩展HTML去反映数据。对HTML进行扩展是其它JavaScript框架通常做的事，例如Angular给HTML扩展了一些特性如循环、条件判断等。

当我们收到来自服务器的数据（在后台使用AJAX）时，我们需要比HTML更多的东西来对该数据做出响应：要么使用扩展后的HTML（如Angular），要么使用JavaScript来生成HTML。这两种方法各有优劣。React属于后者，并且宣称该方法优胜于劣。

事实上，react有一个主要的优势使它成为这种方式的良好实践：使用JavaScript来渲染HTML使React能够容易地在内存中保留HTML的虚拟表示（通常称为*“虚拟DOM”*）。React首先使用虚拟DOM渲染一个虚拟的HTML树，然后，每当一个状态发生改变，我们便得到一个需要更新到浏览器DOM中的新HTML树。但我们不需要把这整个HTML树都更新到浏览器DOM中，而是只需要更新新旧HTML树不同的部分（因为React在内存中保存着新旧两个HTML树），这个过程被称为Tree Reconciliation。我认为，这是自AJAX诞生以来，在Web开发领域中发生的最好的事情！

在接下来的示例中，将重点介绍最后一个概念，并且可以看到一个简单的Tree Reconciliation过程示例及其所带来的巨大不同。我们将使用两种方式编写相同的HTML示例，首先使用原生Web API和JavaScript编写，然后我们将看到如何使用React描述相同的HTML树。

为了强调最后一个概念，我们将不使用组件，而是使用JavaScript定时器来模拟状态改变的操作。我们也不会使用JSX，尽管使用JSX会是一段更简洁的代码。我写React时一直使用JSX，但是在这个例子中我直接使用React API，目的是使大家更好地理解这个概念。

#### React的reconciliation算法示例


在开始这个例子之前，你需要一个浏览器和一个编辑器。或者你可以使用在线编码工具。我会使用本地文件并在浏览器中直接测试。（暂不需要web server）。

我们从头开始这个例子，创建一个新的目录，打开你最喜爱的编辑器：

```
mkdir react-demo
cd react-demo
atom .
```

在当前目录下创建一个`index.html`文件，在其中建立一个标准HTML模板。在该模板中引入一个`script.js`文件，可以在该脚本文件中写一个`console.log`语句测试一下是否已正确引入。

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React Demo</title>
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

在浏览器中打开`index.html`文件，确保你可以看到这个空模板，并且可以在控制台看到你在`script.js`中放置的`console.log` 测试信息。

```
open index.html # On Mac
explorer index.html # On Windows
```

现在，我们来引入React库。可以在[React官网](https://facebook.github.io/react/docs/installation.html)中直接复制出react和react-dom脚本地址放在`index.html`中。

```
<script src="https://unpkg.com/react@15/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
```

之所以引入这两个不同的脚本，是因为`React`库本身适合在没有浏览器的情况下使用，要在浏览器中使用React，我们需要`ReactDOM`库。

我们刷新浏览器，应该可以看到`React`和`ReactDOM`全局可用。

![](file:///Users/mawenting/Desktop/Yes,%20React%20is%20taking%20over%20front-end%20development.%20The%20question%20is%20why._files/1-g5-fvPYO0bTelGckK9RWzA(1).png)

通过这样简单的配置，现在我们可以访问`React`和`ReactDom`API。当然，原生的Web API和JavaScript也是可以访问的，我们将首先使用它们。

我们可以使用原生JavaScript和DOM Web API在浏览器中动态插入HTML。创建一个id为“js”的div元素来放置我们的JavaScript HTML内容。在`index.html`body元素里script标签的前面，添加：

```
<div id="js"></div>
```

然后在`script.js`中，我们通过id来获取这个新的div元素并把它放到一个常量中，将该常量命名为jsContainer。可以通过`document.getElementById`从HTML中获取div元素：

```
const jsContainer = document.getElementById("js");
```

我们在div元素上直接调用innerHTML来控制它的内容。调用这个方法可以将任何HTML模板插入到DOM元素中。我们来插入一个class为“demo”的div元素，内容为“Hello JS”字符串：

```
jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
  </div>
`;
```

确保以上可以在浏览器中运行，现在你应该可以在屏幕中看到“Hello JS”。

到目前为止，这个示例div是我们的用户界面。非常简单的一个。只输出了一串文字给用户看到。

`document.getElementById` 和 `element.innerHTML`都属于原生DOM Web API的一部分。这里我们通过使用Web平台支持的API直接和浏览器交流。然而，当我们写React代码时，使用React API，React使用DOM Web API与浏览器进行交流。

React就像我们和浏览器之间的一个代理，大部分情况下我们只需要和React交流而不是浏览器。当然仍然有些情况是需要我们和浏览器直接交流的，但这种情况较少。

仍然是之前创建的用户界面，这次我们用React API。再创建一个div元素，id为"react"。在`index.html`中，`div#js`的后面，添加：

```
<div id="react"></div>
```

然后，在`script.js`中，为该div创建一个新的常量容器：

```
const reactContainer = document.getElementById("react");
```

这个容器是我们唯一调用原生web API的地方，因为ReactDOM需要知道将我们的应用放在DOM里的哪个位置。

定义好了react 的容器，现在我们可以用ReactDOM库来将React版本的HTML模板渲染到这一容器里：

```
ReactDOM.render(
  /* TODO: React's version of the HTML template */,
  reactContainer
)
```

接下来我们要做的将是你真正理解React库的第一个里程碑。还记得前面说的用React的话我们可以用JavaScript来写HTML吗？这正是接下来我们要做的~

我们将使用JavaScript调用React API来完成这个简单的HTML用户界面，在这个例子完成之后你会比较直观的明白我们这么做的原因。

相对于处理字符串（上面我们的原生JavaScript示例是这样做的），用React我们处理的是*对象*。通过调用`React.createElement`（React API的核心方法），任何HTML字符串都将被表示为一个对象。

这是我们用React写的一个与前面等效的HTML用户界面：

 ```
ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "Hello React"
    ),
    reactContainer
  );
 ```

`React.createElement`接收一些参数：

* 第一个参数是HTML标签，在我们的例子中是一个div。
* 第二个参数是一个对象，表示我们希望此标签具有的一些属性。为了与前面原生JS示例保持一致，我们用`{className:"demo"}`,它将被转为`class="demo"`。注意我们在属性中用的是`className`而不是`class` ,因为React是用JavaScript与Web API匹配而不是HTML本身。
* 第三个参数是元素的内容。我们在其中放了一个“Hello React”字符串。

现在我们可以测试一下。浏览器应该显示“Hello JS”和“Hello React”。通过使用样式，我们把示例div显示为一个盒子，便于视觉上的区分。在`index.html`中：

```
<style media="screen">
  .demo {
    border: 1px solid #ccc;
    margin: 1em;
    padding: 1em;
  }
</style>
```

现在我们有两个结点，一个由DOM Web API直接控制，另一个由React API控制。我们在浏览器中构建这两个结点的方式之间唯一的主要区别是，在JS版本中，我们使用一个字符串表示内容，而在React版本中，我们使用原生JavaScript调用，并且内容用一个对象表示而不是一个字符串。

无论HTML用户界面多么复杂，使用React时，通过调用`React.createElement`，每个HTML元素都将被表示为一个JavaScript对象。

现在来为我们简单的用户界面添加更多的功能。添加一个文本框来读取用户的输入。

要在HTML模板中嵌套元素，在JS版本中可直接嵌入，因为它是HTML。例如，要使示例`div`渲染一个`<input />`元素，我们只需将其添加到其中：

```
jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
    <input />
  </div>
`;
```

用React我们可以做到同样的事，通过在`React.createElement`的第三个参数之后添加更多的参数。为了与原生JS示例保持一致，我们添加第四个参数，该参数是另一个`React.createElement`的调用，用来渲染一个`input`元素（记住，每个HTML元素都是一个对象）：

```
ReactDOM.render(
  React.createElement(
    "div",
    { className: "demo" },
    "Hello React",
    React.createElement("input")
  ),
  reactContainer
);
```

![](file:///Users/mawenting/Desktop/Yes,%20React%20is%20taking%20over%20front-end%20development.%20The%20question%20is%20why._files/1-TwcqWtECXp6OA0mowRcvEA(1).png)

*在这一点上，如果您质疑我们正在做什么，并且认为“这使一个简单的过程变得复杂”，那么你是完全正确的！但是我们正在做的事情有一个很好的理由。请继续阅读。*

下面继续在两个版本中添加时间戳。在JS版本中，我们将其放在一个段落元素中。可以调用`new Date()`来显示一个简单的时间戳：

```
jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
    <input />
    <p>${new Date()}</p>
  </div>
`;
```



在React版本中也添加。在最外层`div`元素中添加第五个参数。该参数是另一个`React.createElement`的调用，这次使用一个`p`标签，不含属性，内容是`new Date()`的字符串：

```
ReactDOM.render(
  React.createElement(
    "div",
    { className: "demo" },
    "Hello React",
    React.createElement("input"),
    React.createElement(
      "p",
      null,
      new Date().toString()
    )
  ),
  reactContainer
);
```



JS和React版本仍然在浏览器中呈现完全相同的HTML。



![](https://cdn-images-1.medium.com/max/800/1*fLaNHWXUJh4ICEvMXByvwg.png)

正如你所看到的，到目前为止，使用React实际上比使用简单、熟悉的原生方式困难得多。那么是React的什么优点，值得我们放弃熟悉的HTML，还不得不学习一个新的API来编写本可以用HTML轻易编写的内容？答案不在于渲染第一个HTML视图，而在于我们要做什么来更新现有的DOM视图。

所以，我们来对现有的DOM进行一次更新操作，简单地用时间戳来计时。

我们可以使用`setInterval`（Web定时器API） 轻松地在浏览器中重复调用一个JavaScript函数。所以，我们将JS版本和React版本的DOM操作都放在一个函数中，这个函数命名为`render`，然后在`setInterval`中调用它使其每秒重复调用一次。

以下是`script.js`中完整的最终代码：

```
const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");
const render = () => {
  jsContainer.innerHTML = `
    <div class="demo">
      Hello JS
      <input />
      <p>${new Date()}</p>
    </div>
  `;
  ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "Hello React ",
      React.createElement("input"),
      React.createElement(
        "p",
        null,
        new Date().toString()
      )
    ),
    reactContainer
  );
}
setInterval(render, 1000);
```

现在我们刷新浏览器，在两个版本中，时间戳字符串在每秒变化，DOM和用户界面必然也在更新着。

*接下来就是React可能让你大吃一惊的时刻。* 如果你尝试在JS版本的文本框中输入内容，你将无法进行。这是意料之中的，因为我们基本上是在每秒钟都扔掉整个DOM节点并重新生成。然而，如果你试着在用React渲染的文本框中输入某些内容，便可以做到！

虽然整个React渲染代码在我们的计时器内，但React只是改变时间戳的那一段落，而不是整个DOM节点。这就是为什么文本输入框没有重新生成且我们可以在其中输入。

如果在Chrome开发者工具元素面板中检查这两个DOM节点，你可以形象地看到这两种更新DOM的不同方式。Chrome 开发者工具高亮显示任何被更新的HTML元素。你将看到我们是如何在每秒钟重新生成了整个“js”div，而React只是巧妙地重新生成带有时间戳字符串的段落。



![Image captured in Chrome](https://cdn-images-1.medium.com/max/800/1*9RGpVv6Mwjl6LApR7vsYqA.gif)

React有一个聪明的diffing算法：通过差异比较，仅对需要更新的DOM节点做重新生成，其余部分保持不变。这个diffing算法可以使用是由于React的虚拟DOM以及在内存中保留了用户界面的表示（因为我们用JavaScript写的）。

使用虚拟DOM，React在内存中保留上一个DOM版本，当一个新的DOM版本需要更新到浏览器中时，这一新的版本也存在内存中，因此React可以计算新旧版本的差异（在我们的例子中，这个差异是时间戳段落）。

然后React会指示浏览器只更新计算出的差异，而不是整个DOM节点。无论我们重新生成用户界面多少次，React都仅让浏览器“部分”更新。

这种方法不仅非常高效，而且大量减少了我们思考更新用户界面方式的复杂性。有了React来做所有关于我们是否应该更新DOM的计算，使我们能够专注于思考数据（状态）和描述用户界面的方式。

然后，我们只需要根据需求来管理数据更新，而不用关心如何将这些更新反映到浏览器的用户界面中（因为我们知道React会做到这一点，而且是以一种有效的方式做到这一点）！



谢谢阅读！你可以在[这里](https://github.com/jscomplete/react-virtual-dom-demo/tree/master/demo)查看以上demo的源代码，可以在[这里](https://jscomplete.github.io/react-virtual-dom-demo/demo/)看demo演示。

如果您对本文或我写的其他文章有任何疑问，请在[此闲置帐户](https://slack.jscomplete.com/)中联系我（您可以邀请自己）并在#questions频道询问。

我为[Pluralsight](https://www.pluralsight.com/search?q=samer+buna&categories=course)和[Lynda](https://www.lynda.com/Samer-Buna/7060467-1.html)创建了在线课程。我最近的课程有[React.js入门](https://www.pluralsight.com/courses/react-js-getting-started)，[高级Node.js](https://www.pluralsight.com/courses/nodejs-advanced)和[学习全栈JavaScript](https://www.lynda.com/Express-js-tutorials/Learning-Full-Stack-JavaScript-Development-MongoDB-Node-React/533304-2.html)。



> 原文链接[https://medium.freecodecamp.com/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76](https://medium.freecodecamp.com/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76)

