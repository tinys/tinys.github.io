说起来有点凄凉，当我满怀信心进入手机开发的时候，我觉得是手机web应用会像web在pc那样火起来，谁知道我接到的第一个需求竟然能是在浏览器上推广客户端。甭管我们自己怎么觉得h5怎么怎么火，但是老大们的中心其实还是在app上。但是我们也不能自怨自艾，相信有一天我们一定会成为主流。
废话少说吧，由于浏览器限制，我们是不可能直接访问本地资源的，更别说去判断用户到底装没装客户端。只能通过其他方式。
#准备
首先需要app进行Schema注册，具体怎么弄，这里就不说了。好弄。
#原理代码
原理是当通过schema方式打开客户端后，手机当前聚焦的视图就不是浏览器了，浏览器就暂时不会执行setTimeout和setInterval方法

下面以腾讯微博为例
```javascript
function redirect(){
  location.href="TencentWeibo://xxx";
  var t = Date.now();
  setTimeout(function(){
    // 之所以加个100 是因为settimeout不是那么准时
    if(Date.now()-t < 600){
      location.href="http://t.qq.com"
    }
  },500)

}

```
#实际应用
如果直接应用上诉代码，会发现在android和ios部分浏览器中，如果用户未安装app，会直接跳到报错页面。所以我采用iframe的方式。通过iframe方式启动app
```javascript
var loadIframe = null;
function createIframe(){
  var iframe = document.createElement("iframe");
	iframe.style.cssText = "display:none;width:0px;height:0px;";
	document.body.appendChild(iframe);
	loadIframe = iframe;
}
function redirect(){
  loadIframe.src="TencentWeibo://xxx";
  var t = Date.now();
  setTimeout(function(){
    if(Date.now()-t < 600){
      location.href="http://t.qq.com"
    }
  },500)
}
createIframe();

```
这种写法在大部分浏览器中是没问题的，不过还有以下问题：
1、在ios低版本的safari上会提示一个未找到页面的提示，然后执行setTimeout方法。
2、在Android的chrome上没效果

第一个bug暂时没有解决，
第二个需要去查看下chrome的资料,参考：([Android Intents with Chrome](https://developer.chrome.com/multidevice/android/intents))

修改写法如下：
```javascript
var ua = navigate.userAgent,
			loadIframe,
			win = window;
	
	function getIntentIframe(){
		if(!loadIframe){
			var iframe = document.createElement("iframe");
			iframe.style.cssText = "display:none;width:0px;height:0px;";
			document.body.appendChild(iframe);
			loadIframe = iframe;
		}
		return loadIframe;
	}
	
	function getChromeIntent(url){
		return  "intent://t.qq.com/#Intent;scheme="+url+";package=com.tencent.WBlog;end";
	}
	var appInstall = {
		isChrome:ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
		isAndroid:ua.match(/(Android);?[\s\/]+([\d.]+)?/),
		timeout:500,
		/**
		 * 尝试跳转appurl,如果跳转失败，进入h5url
		 * @param {Object} appurl 应用地址
		 * @param {Object} h5url  http地址
		 */
		open:function(appurl,h5url){
			var t = Date.now();
			appInstall.openApp(appurl);
			setTimeout(function(){
				if(Date.now() - t < appInstall.timeout+100){
					h5url && appInstall.openH5(h5url);
				}
			},appInstall.timeout)
		},
		openApp:function(appurl){
			if(appInstall.isChrome){
				if(appInstall.isAndroid){
					win.location.href = getChromeIntent(appurl);
				}else{
					win.location.href = appurl;
				}
			}else{
				getIntentIframe().src = appurl;
			}
		},
		openH5:function(h5url){
			win.location.href = h5url;
		}
	}
```
#其他
##safari
ios 6.0 以上app推荐
<meta name="apple-itunes-app" content="app-id=432274380">
##微信中判断是否安装app
```javascript
// 判断是否安装
WeixinJSBridge.invoke("getInstallState", {packageName: "com.tencent.WBlog",packageUrl: "TencentWeibo://"}, function(e) {
    var n = e.err_msg;
    if(n.indexOf("get_install_state:yes") > -1){
      alert("已经安装");
    } 
})
// 安装
WeixinJSBridge.invoke("addDownloadTask", {task_name: "腾讯微博",task_url: "http://softfile.3g.qq.com/msoft/180/2104/2104/WBlog_4.2.1_100000024_131210163458a.apk",file_md5: "31C49560B20057ECBB4C7C52D35B00DB"}, function(t) {
 
})

```
