# JAVASCRIPT 写作指南

￼
<img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*7qYONdlJuS0pkUpdav-LQQ.jpeg">

1992年，由 William Strunk Jr. 创作的《英文写作指南》（“The Elements of Style”）出版了。这是一本禁受住了时间考验的英文写作风格指南书。由此类推，代码也可以有类似的风格指南。

下面我们讨论的是一些指南，并非铁律。为了使代码的含义更明确，我们可以有充足的理由不遵循这些指南，但是，你要对此行为有所警惕和自觉。这些指南因为这些好的因素（good reason）禁受住了时间的考验：他们通常是正确的。只有在有充足理由的时候才偏离他们--而不是仅仅突发奇想或者是因为个人偏好。

几乎每一条基本写作指南都可以在编写代码上实践：

```
	让段落成为组合的单元：每段一个主题
	删掉无用的词句
	主动句永远比被动句直接有力
	避免使用一连串的松散句子
	意思关联紧密的词放在一块
	语句中多使用肯定的形式
	平行结构讲究对称美：内容对等，结构一致。
```

我们可以在代码风格上实践几乎一模一样的指南：

```
	让函数成为基本单元：每个函数只做一件事情
	删掉无用的代码
	主动句永远比被动句直接有力
	避免一连串松散的语句
	关联紧密的代码放在一块
	让语句多使用肯定的形式
	为并发的概念使用并发的代码
```

1. 让函数成为构建的单元：每个函数只干一件事情

   软件开发的本质就是组合。我们通过组合模块、函数和数据结构来构建软件。

   明白如何写函数是一个软件开发工作者的基本技能。

   模块则是一个或者多个函数或数据结构的组合；而数据结构就是我们用来（如何）表示我们程序的状态，但在运行函数之前什么都不会发生。

   在 Javascript 中有以下三种函数：

   ```
   通信函数：用于执行 I/O 操作
   过程函数：一连串集合在一起的指令
   映射函数：给定一个输入，该函数返回相应的输出
   ```

   虽然所有的程序都需要 I/O，也有很多程序都会按照特定的步骤去执行，但是大部分你的函数都应该是映射函数：给定一个输入，函数返回相应的输出。

   所有的函数都要遵循一个事情：如果你的函数是为了处理 I/O 而写的，那就不要往里面添加映射（或者计算）。如果你的函数是映射函数，那就不要在里面处理 I/O 操作。所以从定义上来看，过程函数违反了这一原则。不仅如此，过程函数还违反了另外一个原则：避免使用一连串松散的语句。最理想的函数是一个简洁的，输入决定输出的纯函数：

   ```
   给定相同的输入，输出一定是相同的
   没有副作用
   ```

   参见“什么是一个纯函数？”

2. 删除无用代码

   “Vigorous writing is concise. A sentence should contain no unnecessary words, a paragraph no unnecessary sentences, for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts. This requires not that the writer make all sentences short, or avoid all detail and treat subjects only in outline, but that every word tell.” [Needless words omitted.]
   ~ William Strunk, Jr., The Elements of Style

   简洁的语言是有力的。一个句子不应该包含多余的词语，一个段落不应该包含多余的句子，基于相同的原因，一个绘画不应该包含多余的线条，一台机器不应该包含多余的零件。这不是要把语句缩短，或者忽略所有细节，简单地描述大纲，而是保证每一个词都是有意义的。

   简洁的代码在软件中是非常重要的。因为代码越多就给bug越多的隐藏的空间。

   代码越少=bug的藏身之处更少=更少的bug

   代码越清晰就意味着它的信噪比越高：代码阅读者只需过滤掉很少的语法噪音就能真正读懂它的含义。更少的代码=更少的噪音=更清晰地表达

   从《英文写作指南》中借用一句话：简洁的代码更有力

   ```javascript
   function secret (message) {
   	return function () {
   		return message;
   	}
   };
   ```

   可以被简化成：

   ```javascript
   const secret = msg => () => msg;
   ```

   这样的代码对那些熟悉简洁的箭头函数（于2015年随ES6发布）的人更具有可读性。它删除了不必要的语法：花括号，`function`关键字, 还有 `return`语句。

   第一个代码块包含了一些非必要的语法。花括号，`function`关键字，和`return`语句对于那些熟悉箭头函数的人来说别无深意。它们只是为了让那些不熟悉ES6语法的人看这个代码块更眼熟而已。

   自 2015年开始，ES6已经成为了 JavaScript 语言的标准。现在是时候我们来好好熟悉熟悉它了。 

   删掉不必要的变量

   有时我们常常创建一个其实并不需要具名的具名临时变量。因为人的大脑在活跃记忆的资源是有限的，在大脑中记忆这些变量是会消耗大脑记忆能力的。因此，一个有经验的开发者就会学到删除那些不必要的变量。举个例子，在很多场景下，你可以删掉那些仅仅是为了函数返回值而创造的变量。你的函数名也需要充分反映该函数的返回值的信息。

   看看下面两块代码：

   ```javascript
   const getFullName = ({firstName, lastName}) => {
   	const fullName = firstName + ' ' + lastName;
   	return fullName;
   };
   ```

   vs…

   ```javascript
   const getFullName = ({firstName, lastName}) => (
   	firstName + ' ' + lastName
   );
   ```

   另外一种开发者常用的减少变量的手法是利用函数组合（译者注：参见函数式编程）和 Point-Free Style（译者注：该模式为函数式编程的一种模式，暂无中译名） function composition and point-free style.

   Point-free style是一种在定义函数的时候不写出该函数使用了那些参数的手法。常见的 Point-free手法包括柯里化和函数组合。我们来看看一个柯里化的例子：

   ```javascript
   const add2 = a => b => a + b;
   // Now we can define a point-free inc()
   // that adds 1 to any number.
   const inc = add2(1);
   inc(3); // 4
   ```

   让我们来看看 `inc()`函数的定义。注意我们没有使用`function`关键字或者`=>`来定义它。所以它没有地方可以写形参，因为它不直接在函数内部使用它们。相反，`inc()`返回了一个自己会接收参数的函数。

   接下来我们看看使用函数组合的一个例子。函数组合就是将一个函数的返回值作为另一个函数的参数的过程。不管你是否意识到了，其实你经常在用它。只要你使用`.map()`和`promise.then()`这样的链式调用你就会用到它。举个例子来说，最简单的函数组合看起来就像是：` f(g(x))`。它在代数学中经常是这么写的`f*g `（它念做"f after g"或者"f composed with g"）。

   当你将两个函数组合到一起的时候，你就减少了一个原来被用来在两个函数之间传值的临时变量。我们来看看函数组合是怎么为我们捋清代码的吧：

   ```javascript
   const g = n => n + 1;
   const f = n => n * 2;
   // With points:
   const incThenDoublePoints = n => {
   	const incremented = g(n);
   	return f(incremented);
   };

   incThenDoublePoints(20); // 42
   // compose2 - Take two functions and return their composition
   const compose2 = (f, g) => x => f(g(x));

   // Point-free:
   const incThenDoublePointFree = compose2(f, g);

   incThenDoublePointFree(20); // 42
   ```

   你也可以对任何`functor`这样做。`functor`就是任何可以`map`的东西（私以为是指可以链式调用的东西）。比如数组（`Array.map()`）或者promise（`promise.then()`）。我们来用`map`链写一个新的 `compose2` 函数组合：

   ```javascript
   const compose2 = (f, g) => x => [x].map(g).map(f).pop();
   const incThenDoublePointFree = compose2(f, g);
   incThenDoublePointFree(20); // 42
   ```

   你在使用promise链式调用的时候差不多也是这么处理的。

   现在基本上每个函数式编程库都有至少两个版本的组合功能（compose utils）：第一个是 `compose()`,它是从右向左结合的；第二个是 `pipe()`，它是从左往右结合的。`Lodash` 库把它们叫做 `compose()` 和 `flow()`。笔者平时在使用 `Lodash` 的时候通常是这么 import 它们的：

   ```javascript
   import pipe from 'lodash/fp/flow';

   pipe(g, f)(20); // 42
   ```

   但是下面的代码并没有增加代码量，却可以做到同样的事情：

   ```javascript
   const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

   pipe(g, f)(20); // 42
   ```

   如果函数组合对你来说看起来像是无字天书，而且你也不知道你会怎么使用它，那你需要好好想想再说：

   软件开发的本质就是组合。我们就是通过组合一个一个更小的模块，函数和数据结构来构建一个应用的。

   综上所述，理解函数和对象的组合就像建筑工人理解钻头和射钉枪一样重要。

   如果你使用命令式代码将不同函数的返回结果通过临时变量组合在一起，就像粗暴地使用胶带和胶水把它们组合在一起一样。

   牢记：

   ```
   如果你在不改变或混淆本意的情况下，能用更少的代码完成相同的工作，你应该这么做。
   如果你在不改变或混淆本意的情况下，能用更少的变量完成相同的工作，你应该这么做。
   ```

   ​

3. 主动句永远比被动句直接有力

   “The active voice is usually more direct and vigorous than the passive.” ~ William Strunk, Jr., The Elements of Style

   尽可能的直接命名一个东西

   ```
   myFunction.wasCalled() 更优于 myFunction.hasBeenCalled()
   createUser() 更优于 User.create()
   notify() 更优于 Notifier.doNotification()
   ```

   给返回真假的变量起一个类似于<u>预测</u>和<u>是否</u>的名字：

   ```
   isActive(user) 更优于 getActiveStatus(user)
   isFirstRun = false; 更优于 firstRun = false;
   ```

   用动词来给函数起名：

   ```
   increment() is better than plusOne()
   unzip() is better than filesFromZip()
   filter(fn, array) is better than matchingItemsFromArray(fn, array)
   ```

   Event Handlers

   事件处理器和生命周期函数的命名里面要有动词，因为它们是作为校验用的（used as qualifiers）。它们不应该仅仅被命名为要做什么，而是应该被命名为在什么时候做什么事情。它们需要被命名然后我们可以从它们的名字能读到（一些信息）， “<when to act>, <verb>”。

   ```
   element.onClick(handleClick) 优于 element.click(handleClick)
   component.onDragStart(handleDragStart) 优于 component.startDrag(handleDragStart)
   ```

   后一种（不被推荐的表述方式）看起来像是我们在触发这个事件而不是响应它。

   生命周期函数

   我们来看看用一下

   ```
   componentWillBeUpdated(doSomething)
   componentWillUpdate(doSomething)
   beforeUpdate(doSomething)
   ```

   第一个使用了被语态(will be updated instead of will update)，这种方式拗口且不清晰。

   第二种方式`componentWillUpdate(doSomething)`比第一种方式`componentWillBeUpdated(doSomething)`更好一些，但是还是没有清晰地表达出了在组件更新前调用事件处理函数。它的表述看起来像是我们要更新`handler`函数，但是其实不是的。我们是想说：在组件更新前调用`handler`。`beforeComponentUpdate()` 更清晰的表达了这个意思。

   我们还可以做进一步简化，既然这些都是组件的方法，那么在方法名中再出现组件的名字就有些啰嗦了。想象一下，假如我们通过组件来直接调用这些方法会怎样：`component.componentWillUpdate()`。这就像是这么说：“吉米吉米晚餐吃牛排”，显然你不需要听到两次他的名字。

   ```
   component.beforeUpdate(doSomething) is better than component.beforeComponentUpdate(doSomething)
   ```

   函数混入是一些给对象添加属性和方法的函数。这些函数就像流水线一样一个接一个的被调用。每个函数混入把对象实例当作这个函数的输入，然后在这个对象实例被传递给下一个函数之前给这个对象实例添加一些内容。

   我喜欢用形容词来给函数混入命名。你可以使用"ing"或者"able"作为后缀来找一些有用的形容词。比如：

   ```
   const duck = composeMixins(flying, quacking);
   const box = composeMixins(iterable, mappable);
   ```

4. 避免一堆松散的语句
   “…a series soon becomes monotonous and tedious.”
   ~ William Strunk, Jr., The Elements of Style

   开发人员经常将一系列松散的语句连接起来，这就是传说中的意大利面条式的代码。

   这些松散的代码片段经常会重复很多次，它们之间很相似，但又有些细微的差别。举例来说，一个用户界面组件可能和其他的用户界面共享同样的核心需求。他的这些需求可以被打散到生命周期的不同阶段的函数中。

   考虑以下代码：

   ```javascript
   const drawUserProfile = ({ userId }) => {
       const userData = loadUserData(userId);
       const dataToDisplay = calculateDisplayData(userData);
       renderProfileData(dataToDisplay);
   };
   ```

   这个函数确实做了三件事：加载数据，从加载的数据中计算显示状态，最后渲染。

   在多数现代化的前端应用架构中，需要单独考虑这些事情中的每一个。通过分离这些问题，我们可以轻松地为每一个关注点匹配不同的函数。

   例如，我们可以完全替换渲染器，且它不会影响程序的其它部分。例如，react丰富的自定义渲染器，关于原生IOS和安卓apps的 ReactNative，关于 WebVR的AFrame，关于server-side rendering的ReactDOM/Server等...

   关于这个函数的另外一个问题是你不能简单地计算出需要显示的数据，且在不加载数据的时候生成标记。要是已经加载了数据怎么办呢？这时你就做了一些无用功。

   分类开这些事情也可以让它们可进行单独测试。我喜欢为我的应用程序执行单元测试，且在我写代码时随时测试变化结果。相反，如果将渲染代码和数据加载代码绑定，就很难在冗长的测试中使用假数据来测试渲染代码。

   这样从我的单元测试中不能立即得到反馈结果。分离函数之后可以对每一部分进行单元测试。

   这个例子已经使用了分离函数，在应用中提供不同的生命周期钩子。当应用挂载组件后触发加载。视图状态更新时触发计算和渲染。

   这样更清晰地描述了软件的功能，每一个组件可以复用相同的结构和生命周期钩子，这使得软件性能更好，我们也可以从重复工作中得到解放。

5. 将相关代码放在一起

   许多框架和代码模板会将文件按照技术分类。这对于一个日历或者待办事项小应用来说是没有问题的，但是对于大一些的项目，按照功能将文件分类会更好一些。

   举例来说，对于一个待办事项应用，以下是两种不同文件结构：

   **按类型分类：**

   ```
   .
   ├── components
   │   ├── todos
   │   └── user
   ├── reducers
   │   ├── todos
   │   └── user
   └── tests
       ├── todos
       └── use
   ```

   **按功能分类：**

   ```
   .
   ├── todos
   │   ├── component
   │   ├── reducer
   │   └── test
   └── user
       ├── component
       ├── reducer
       └── test
   ```

   如果按照功能进行分类，你就能避免为了修改一个功能而翻遍整个文件列表了。

   > 将与同一个功能相关的文件放到一起

6. 用肯定句表述语句和表达式
   “Make definite assertions. Avoid tame, colorless, hesitating, non-committal language. Use the word not as a means of denial or in antithesis, never as a means of evasion.”

   ```
   isFlying 优于 isNotFlying
   late 优于 notOnTime
   ```

   If 语句

   ```javascript
   if (err) return reject(err);
   // do something...
   ```

   优于

   ```javascript
   if (!err) {
   	// ... do something
   } else {
   	return reject(err);
   }
   ```

   ​
   三元运算符

   ```javascript
   {
   	[Symbol.iterator]: iterator ? iterator : defaultIterator
   }
   ```

   优于

   ```javascript
   {
   	[Symbol.iterator]: (!iterator) ? defaultIterator : iterator
   }
   ```

   选用强否定语句

   有些时候我们只关心变量是否缺失，这个时候如果我们用肯定句我们就必须加上一个`!`。在这个情况下，应该使用强否定形式，而不是“not”或`!`这种弱否定形式。

   ```
   if (missingValue) 优于 if (!hasValue)
   if (anonymous) 优于 if (!user)
   if (isEmpty(thing)) 优于 if (notDefined(thing))
   ```

   在函数调用的时候避免传递 `null`或者`undefined`为参数。

   不要让函数调用的时候传递一个`undefined`或者`null`来作为一个可选参数的占位符。我们可以使用命名对象作为参数：

   ```javascript
   const createEvent = ({
   	title = 'Untitled',
   	timeStamp = Date.now(),
   	description = ''
   }) => ({ title, description, timeStamp });
   // later...
   const birthdayParty = createEvent({
   	title: 'Birthday Party',
   	description: 'Best party ever!'
   });
   ```

   ​
   优于:

   ```javascript
   const createEvent = (
   	title = 'Untitled',
   	timeStamp = Date.now(),
   	description = ''
   ) => ({ title, description, timeStamp });
   // later...
   const birthdayParty = createEvent(
   	'Birthday Party',
   	undefined, // 这一行代码是完全可避免的
   	'Best party ever!'  
   );
   ```

   ​
   Use Parallel Code for Parallel Concepts
   “…parallel construction requires that expressions of similar content and function should be outwardly similar. The likeness of form enables the reader to recognize more readily the likeness of content and function.”

   还有一些在软件开发中没有被解决的问题。我们最后总是一次又一次的重复做某件事情。当类似情况发生的时候，这就是我们对这些工作进行抽象的好时机了。找出那些重复的部分，对它进行抽象，这样我们就能在不同的情境下使用这个抽象部分了。

   这就是库和框架给我们解决的问题。

   UI组件就是一个极好的例子。不到十年之前，开发中常用jQuery来混合UI更新、软件逻辑和网络I/O。然后人们意识到了我们可以给用户端的web app使用MVC框架，之后大家就开始将模型（models）与UI更新逻辑拆分开了。最终web app走到了一个可以让我们使用 JSX 或者 HTML模版来申明模型（model）的组件模型（component model）道路上。

   最终，所有组件的更新UI逻辑都被统一了，我们不需要再给每个组件写一个自己的更新UI逻辑。

   对于那些很熟悉组件的人来说，他们很容易弄明白每个组件是怎么工作的：我们有一些declarative markup记录了UI元素，监听behaviors的事件处理器，还有可以在需要的时候触发回调函数的生命周期函数。

   当我们对相似问题使用相似的模式，只要熟悉这个模式的人就会很容易读懂这些代码的目的。

   总结：代码应该简洁但是不应该过分简单

   ES6在2015就被确立为标准了，但是到了2017还是有很多开发者避免使用像箭头函数、默认返回值、`rest`和`spread`操作符等。他们还是习惯写那些看起来更熟悉的代码。这绝对是一个错误。我们知道熟能生巧，一旦写熟了，ES6的简洁绝对比ES5要好：与语法重复的替代方案相比，简洁的代码很简单。

   代码应该简洁，但是实践不是很简答.
   鉴于简洁的代码是:

   ```
   Less bug prone
   Easier to debug
   ```

   鉴于bugs:

   ```
   Are extremely expensive to fix
   Tend to cause more bugs
   Interrupt the flow of normal feature development
   ```

   鉴于简明的代码也是:

   ```
   易写
   易读
   易维护
   ```

   对于开发者而言，在诸如concise syntax, currying & composition上投资培训是绝对划算的。当我们为了熟悉的老代码而放弃这些的话，我们就像是给我们代码的阅读者用特别简单的语言来沟通，就像一个大人用咿呀来和小朋友交流一样。

   你可以假设代码阅读者对这个实现不甚了解，但是千万别把他们当作傻子或者是对这门语言一无所知。做明确化，但是不要弱智化。弱智化既浪费时间又让人觉得被辱。在练习和熟悉上花时间来获取更好的编程词汇和更优雅的风格。

   代码应该简洁但是不应该过分简单