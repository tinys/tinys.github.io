
两年前，我们团队在 Google 开始尝试使用 JavaScript 库来降低构建渐进式 Web应用模型的阻力。我们一开始使用像 sw-precache 和 sw-toolbox 一类的 [Service Worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers "Service Worker") 工具，如今有数以千计的团队在移动站点的生产环境中使用这些工具来支持离线缓存和用户访问即时加载。



![alt](https://cdn-images-1.medium.com/max/2000/1*p-1klG8eb74q54meVe1mRA.png)

在2017年，如果你还没有利用Service Worker的优势，那么你将输在性能这场大战上。
让我们来比较一下[CNet’s Tech Today](https://www.cnet.com/tech-today/) 和 [Housing.com](https://housing.com/)这两个PWA的前后时间轴。在3G网络环境中我们可以看到首屏加载平均时间提升了3-4秒，Service Worker缓存了他们APP的壳（App Shell）和数据来节约时间：

![alt](https://cdn-images-1.medium.com/max/2000/1*ENxl8Sbl70CS3bHo-MoGXw.png)

哇！ 这几乎都是瞬间完成的 :)这种方式借助Service Worker使网站加载和可交互性变得更加的迅速。这效仿了原生APP的最令人满意的一个特点---一旦应用安装后，重新加载时的启动延迟被降低并且很稳定：

> Service Worker是[性能可靠的](https://infrequently.org/2016/05/service-workers-and-pwas-its-about-reliable-performance-not-offline/)。而不仅仅是“支持离线” --- Alex Russell, Chrome


像推特这种大型网站，最近利用Service Worker[将他们全部移动端流量导至PWA中](https://twitter.com/necolas/status/829128165314306048?lang=en)，App Shell 模型 和 PRPL 模式也显示出了相似的优势：

![alt](https://cdn-images-1.medium.com/max/2000/1*yuhXsK8dh7RNS-oQylhhnQ.png)

这不是一个仅仅应用于移动端和PWA的优化。Service Worker 也可以提高桌面站点加载性能。
比如，Flipkart缓存他们的静态文件所以在重复的访问首屏时内容加载比第一次快了1.5秒：

![alt](https://cdn-images-1.medium.com/max/2000/1*S5_WIvU0pB9xVFjHjaeRZQ.png)

Flipkart.com在桌面中使用sw-precache缓存静态文件以减少多次重复加载的时间

如[JavaScript启动性能](https://medium.com/dev-channel/javascript-start-up-performance-69200f43b201#.hln1ehcre)一样，Service Worker还会选择在首次执行JavaScript时进行V8代码缓存，以便JS启动更快。
当然 Service Worker 可以做的不仅仅只有缓存。
我们还发布了一个用于[Offline Google Analytics](https://github.com/GoogleChrome/sw-helpers/tree/master/packages/sw-offline-google-analytics)基于Service Worker和IndexedDB的库。当用户处于离线状态或断网的时候，我们将以队列的形式组织他们的analytics，一旦恢复网络状态立刻发送请求。这个功能被像墨西哥的eBay Classifieds这样的网站使用，以最大限度地减少用户在使用过程中丢失有用的统计信息。
![alt](https://cdn-images-1.medium.com/max/2000/1*cvZuuCxQQSO66-qhxIq66w.jpeg)


在Google I / O 2015网站上成功内测这个想法之后，我们发现它很有用，所以我们决定写一个文档来归纳它，方便任何人的使用。
离线分析库的一个很好的例子就是Autotrack — 帮助人们更好的跟踪大多数人关心的事情。它还有很多插件，比如PWA/SPA URL改变的插件，元素可见插件，用户滚动插件，媒体查询插件，页面可视监听插件等等。这些插件可帮助像1Password这样的生产站点轻松跟踪重要的事件，而不需要使用模板：

![alt](https://cdn-images-1.medium.com/max/2000/1*YtkbQKYxKpOBp1MneXj6Fg.jpeg)

接下来，我们开始研究 [Web Push Notifications库](https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web)，但是在与Firebase合作寻求更好的解决方案时出现了一个机会，所以我们也帮助发布了[Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/)。这是一种跨平台的消息传递解决方案，可以发送基于消息或数据的通知，并且可以很好的结合PWA使用。

阿里巴巴就是如今使用FCM的PWA产品之一：

![alt](https://cdn-images-1.medium.com/max/2000/1*mfMuzbDtP82bzIiThlexjg.jpeg)

我们也参与了Mozilla的[web-push库](https://github.com/web-push-libs/web-push)的开发，作为Web Push Notifications的替代品，它在这个领域也很有潜力。

因为Service Worker成为我们很多库的核心部分，所以我们也需要一些公用组件去进行单元测试。我们创建了[selenium-assistant](https://github.com/GoogleChrome/selenium-assistant)通过多浏览器使用Selenium来进行端对端的测试。我们也写了[sw-testing-helpers](https://github.com/GoogleChrome/sw-testing-helpers)在测试中控制Service Worker。

## 开始使用Javascript的库
谷歌研发代码实验站的[ sw-precache](https://codelabs.developers.google.com/codelabs/sw-precache/index.html?index=..%2F..%2Findex#0),[sw-toolbox](https://google-developer-training.gitbooks.io/progressive-web-apps-ilt-codelabs/content/docs/lab_sw-precache_and_sw-toolbox.html)和[offline-analytics](https://google-developer-training.gitbooks.io/progressive-web-apps-ilt-codelabs/content/docs/lab_integrating_analytics.html)都是免费可用的。

**Service Worker 脚手架**

[sw-precache](https://github.com/GoogleChrome/sw-precache)(也能很好的结合[webpack](https://www.npmjs.com/package/sw-precache-webpack-plugin)使用)会为你生成一个Service Worker。在最简单的情况下，你可以创建一个“dist”目录，它将为离线的静态文件提供默认缓存。因此当重复访问时他们将从[缓存API](https://developer.mozilla.org/en-US/docs/Web/API/Cache)中立即加载：
```
$ sw-precache --root=dist
```
你可以通过使用Chrome开发者工具[Application panel](https://developers.google.com/web/tools/chrome-devtools/progressive-web-apps)验证文件已经被正确的缓存了。在加载页面后查找'Cache Storage'，可以看到相应的目录：

![alt](https://cdn-images-1.medium.com/max/1600/1*ri2Qp7j0B-lWrej5lCAkOg.png)

同时还支持使用` --config <file> `传递复杂的配置。任何文件中的配置都可以通过命令行标志覆盖。我们推荐使用一个额外的Javascript文件来定义使用module.exports的配置。比如，假设有这样一个path/to/sw-precache-config.js 文件包含以下配置：
```
module.exports = {
  staticFileGlobs: [
    'app/css/**.css',
    'app/**.html',
    'app/images/**.*',
    'app/js/**.js'
  ],
  stripPrefix: 'app/',
  runtimeCaching: [{
  	urlPattern: /this\\.is\\.a\\.regex/,
  	handler: 'networkFirst'
  }]
};
```

我们可以将文件传递到命令行界面，同时可以设置详细的配置项：

```
sw-precache --config=path/to/sw-precache-config.js --verbose
```
这实现了最大的灵活性，比如在`runtimeCaching.urlPattern`选项中提供正则表达式。在成功运行sw-precache时，它还将统计预加载静态文件的预估大小，以帮助你了解用户数据的使用情况：



![alt](https://cdn-images-1.medium.com/max/2000/1*j6dtPpvJN9dWP_-O_lrnCA.png)

使用[Webpack 插件](https://www.npmjs.com/package/sw-precache-webpack-plugin)用于预处理静态文件的经典配置大概如下所示：

```
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
module.exports = {
  // ...
  plugins: [
    // ...
    new SWPrecacheWebpackPlugin({
      cacheId: 'my-cache',
      filename: 'service-worker.js',
      staticFileGlobs: [
        './public/images/**/*.png,jpg,gif',
        './public/scripts/**/*.js',
        './public/styles/**/*.css',
        './public/partials/**/*.html'
      ],
      stripPrefix: './public/'
  	})
  ]
};
```

**将sw-precache整合到gulp构建系统中**

要在gulp中使用sw-precache，我们首先要在gulp文件头部引入插件：
```
const swPrecache = require('sw-precache');
```
然后创建一个gulp任务并在swPrecache中调用write函数，如下所示：
```
swPrecache.write(filePath, options, callback)
```
filePath 用来写入Service Worker所在位置。options定义生成Service Worker行为的对象（可以在[Github文档](https://github.com/GoogleChrome/sw-precache#options-parameter)中查看全部的选项列表）。回调函数通常都会被执行。当一个异步操作完成时gulp通常监听到。如果发生错误，错误日志将会传递到回调函数中。如果没有错误，则传递null到回调函数。
我们来看一个例子：
```
gulp.task('generate-service-worker', function(callback) {
  swPrecache.write('app/service-worker.js'), {
    //1
    staticFileGlobs: [
       'app/index.html',
       'app/js/bundle.js',
       'app/css/bundle.css',
       'app/img/**/*.svg,png,jpg,gif'
     ],
    // 2
    importScripts: [
       'app/node_modules/sw-toolbox/sw-toolbox.js',
       'app/js/toolbox-script.js'
     ],
    // 3
    stripPrefix: 'app/'
  }, callback);
});
```



我们执行gulp task来创建一个`generate-service-worker`任务，并传递一个回调给该函数使其实现异步。

swPrecache.write 通过以下参数生成一个service worker：
<li>staticFileGlobs中的资源是预缓存的，这意味着生成一个service worker将包含一个缓存资源的`install`事件处理器。
<li>在`importScripts`中的脚本用来在`importScripts`方法中生成的Service Worker。在这个例子中，有sw-toolbox模块和一个包含路由的脚本。
<li>`app/`将从`staticFileGlob`中的所有文件路径中删除以便生成service worker 中的相对路径。

**运行缓存**

[sw-toolbox](https://github.com/GoogleChrome/sw-toolbox)是一个免费的库，可以拦截service worker中的网络请求并执行相应缓存策略。它可以用于路由，类似于fetch()事件的监听器，路由拦截网络请求匹配URL模式和HTTP请求方法，然后基于规则响应请求。

sw-toolbox有大约5个内置的处理程序来覆盖[最常见的缓存策略](https://google-developer-training.gitbooks.io/progressive-web-apps-ilt-concepts/content/docs/sw-toolbox_and_sw-precache.html#strategies)：

![alt](https://cdn-images-1.medium.com/max/2000/1*Fo6sCmH3J2fm-xT-8xUd6Q.png)

如果你很熟悉`Express`，sw-toolbox支持使用与其路由语法相似的URL语法模式。

```
toolbox.router.get('img/**/*.{png,jpg}', global.toolbox.cacheFirst);
```

它会拦截img文件夹中任何PNG / JPG文件的GET请求，根据cacheFirst策略处理请求，首先检查缓存的响应。如果检查失败，请求将被发送到网络。如果网络请求成功，响应将被添加到缓存中。

也可以在这里使用完整的域名，例如缓存Google字体：

```
toolbox.router.get('https://fonts.googleapis.com/',
toolbox.cacheFirst);
```

我们还可以使用Express-style路由拦截GET请求到另一个域。我们只需要在选项中定义一个'origin'属性（一个字符串或RegExp）来匹配URL的full origin。
```
toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
  origin: /\.googleapis\.com$/
});
```

也可以使用RegExp对象。这里，我们以“https://www.googleapis.com” 开头的POST请求的路由：

```
toolbox.router.post(/^https://www.googleapis.com\//, global.toolbox.networkFirst);
```
![alt](https://cdn-images-1.medium.com/max/1200/1*XdMqgQkQ5dmOYEx3_Cbwvw.png)
提示: 当检查Cache 缓存时，你可以区分sw-toolbox是缓存，因为它管理$$$ toolbox-cache $$命名空间。


**更精准的控制**

sw-toolbox也提供给我们可以更精准的控制缓存特性的接口。除了指定的设置外，我们还可以按如下方式自定义缓存：
<li>我们可以定义一个名字（'products'）
<li>我们可以定义文件入口项的最大数量为12（使用maxEntries参数）
<li>我们可以设置一天的过期时间（24小时 = 86400秒）

```
toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
  cache: 
   name: 'products',
   maxEntries: 12,
   maxAgeSeconds: 86400
  },
  origin: /.products.com$/
});
```
你可以在我们的Progressive Web Apps Instructor Led培训资料中找到有关sw-precache＆sw-toolbox的[教程](https://google-developer-training.gitbooks.io/progressive-web-apps-ilt-concepts/content/docs/using-sw-precache-and-sw-toolbox.html)。

#### Offline Google Analytics

像之前提到的，[离线的 Google Analytics](https://github.com/GoogleChrome/sw-helpers/tree/master/packages/sw-offline-google-analytics)可以在网络连接时再次发送用户分析请求。要添加这个到你的Service Worker仅需要两行代码：
```
// Import offline analytics into the SW global scope:
importScripts('path/to/offline-google-analytics-import.js');
// initialize it
goog.offlineGoogleAnalytics.initialize();
```

Boom!就是这个！
还可以在重放请求中包含自定义参数的对象：

```
goog.offlineGoogleAnalytics.initialize({
  parameterOverrides: {
    cd1: 'Guacamole',
    cd2: 'So much cheese'
  }
});
```
_
注意: 传递参数覆盖对象的主要用例是检测何时被正常发送（对比Service Worker重放发送）_

**Autotrack.js**

设置Autotrack是比较直观的。除了在页面中包含analytics.js之外，还可以在Autotrack库中异步加载。接下来，更新你的默认监听代码来添加你需要的Autotrack插件：

```
<script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', '<!-- your google_analytics_tracking_id -->', 'auto');
// Autotrack plugins available
ga('require', 'urlChangeTracker');
ga('require', 'cleanUrlTracker');    
ga('require', 'eventTracker');
ga('require', 'maxScrollTracker');
ga('require', 'outboundLinkTracker');  
ga('require', 'pageVisibilityTracker');    

ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>
<script async src='/public/js/autotrack.js'></script>
```
_注意: Autotrack.js的一些插件可以在没有指定配置（例如outboundLinkTracker）的情况下工作而其他的不会（例如clearUrlTracker）。一定要检查[文档](https://github.com/googleanalytics/autotrack#plugins)，看看各种插件如何配置:)_

**Selenium Assistant**

如上所述，[Selenium Assistant](https://googlechrome.github.io/selenium-assistant/)帮助我们获取了我们机器上可用的浏览器列表，为它们安装一个Web驱动程序实例，然后运行一些测试用例。

![alt](https://cdn-images-1.medium.com/max/1200/1*cyN5qtBQ7ucEXPJTRvJYJQ.jpeg)
你可以为你想要测试的浏览器安装[Web Driver](http://www.seleniumhq.org/projects/webdriver/)模块（npm 安装 chromedriver 等）然后可以遍历这些浏览器的列表，并根据需要进行控制。如果你需要测试没有安装在本地的浏览器，可以将Selenium Assistant和Sauce Labs结合使用。

**Firebase Cloud Messaging**

将[Firebase 添加](https://firebase.google.com/docs/web/setup)到一个已有的项目后，还需要一些额外的步骤支持Web Push通知：

1 .  添加FCM的 gcm_sender_id到你的web应用Manifest (manifest.json) 文件中:

```
"gcm_sender_id": "103953800507"
```
2  . 创建一个新的firebase-messaging-service-worker.js文件。 我们将Firebase Messaging库导入到此文件中来访问FCM：

```
importScripts('https://www.gstatic.com/firebasejs/3.6.10/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.6.10/firebase-messaging.js')
```

然后在Service Worker中初始化Firebase应用程序。传递
messagingSenderId（保存在Firebase项目设置中的）到Firebase初始化函数中：


```
firebase.initializeApp({
  'messagingSenderId': '\<-- your sender ID goes here --\>'
});
```
接下来，生成Firebase Messaging的一个实例来处理后台消息：

```
const messaging = firebase.messaging();
```
并请求显示通知的权限。你也许想要等一个合适的时机来做这个功能而不是当页面启动的时候：

```
messaging.requestPermission()
.then(function() {
  console.log('Notification permissions granted.');
  // ...
})
.catch(function(err) {
  console.log('Permission denied', err);
});
```
现在当用户从FCM接收到消息时，如果他们启用这个权限就会显示通知。

## 接下来要做什么呢？

目前，我们正在开发Service Worker的[下一个](https://github.com/googlechrome/sw-helpers)大版本库，扩展我们的探索，同时覆盖了[后台同步](https://developers.google.com/web/updates/2015/12/background-sync)，基于服务工作者的HiDPI图像交换和对于PWA的智能分析。
 我们期待分享更多实现这些功能的beta版本的库。

我们还计划在[ Sustainable Loading](https://medium.com/reloading)频道上发布一个关于Google.com生产环境的Service Worker的新帖。

在此之前，我们希望证明我们的库是有用的，无论你是建立一个PWA还是只是为了提高网站的性能 :)

感谢我们帅气的团队成员— Jeff Posnick, Matt Gaunt, Taylor Savage, Joe Medley, Prateek Bhatnagar, Lucas Mullens, Phil Walton, Alex Russell and former member Mat Scales 在我们小家庭中为开源库做出的贡献。

参考资源：
<li>[Instant Loading with Service Workers](https://www.youtube.com/watch?v=jCKZDTtUA2A)
<li>[Getting started with Firebase Cloud Messaging for Web](https://www.youtube.com/watch?v=BsCBCudx58g)
<li>[Great libraries and tools for great Progressive Web Apps](https://www.youtube.com/watch?v=Use459WBeWc)
<li>[Web Push Notifications book](https://web-push-book.gauntface.com/)
<li>[Instant Loading: Building offline-first PWAs](https://www.youtube.com/watch?v=cmGr0RszHc8)
<li>[Offline Google Analytics](https://developers.google.com/web/updates/2016/07/offline-google-analytics)
<li>[Offline-caching for your static site](https://www.youtube.com/watch?v=_kJMjJ1tm6o)
<li>[Booking.com: PWAs with Service Workers (sw-toolbox)](https://blog.booking.com/progressive-web-apps-with-service-workers.html)
<li>[WashingtonPost: AMP up with PWAs (sw-toolbox)](https://developer.washingtonpost.com/pb/blog/post/2016/07/15/amp-up-with-progressive-web-apps/)
<li>[Adding PWA support to create-react-app with sw-precache](https://github.com/jeffposnick/create-react-pwa)
<li>[Offline Angular Apps with Service Workers (sw-precache)](https://coryrylan.com/blog/fast-offline-angular-apps-with-service-workers)



> 原文链接：[https://medium.com/dev-channel/progressive-web-app-libraries-in-production-b52cad37d34](https://medium.com/dev-channel/progressive-web-app-libraries-in-production-b52cad37d34)