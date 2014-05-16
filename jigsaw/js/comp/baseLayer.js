/**combine by hugjs**/
define("comp/baseLayer",function(e){var t=e,n=t("core/model"),r=t.hug,o=function(){var e={},t=function(){return e.div||(e.div=document.createElement("div"),e.div.style.cssText="z-index:1;position:absolute;left:0px;top:0px;width:100%;height:100%;background-color:#000;opacity:.6;display:none;",document.body.appendChild(e.div)),e.div};return e.setOpacity=function(e){t().style.opacity=e},e.show=function(){var e=document.documentElement.clientWidth,n=document.documentElement.clientHeight;t().style.width=e+"px",t().style.height=n+"px",t().style.display=""},e.hide=function(){t().style.display="none"},e.getMask=function(){return t()},e}(),i=function(e){var t={},n=e.style.cssText,r=n.split(";");r.forEach(function(e){if(e){var n=e.split(":");n[0].trim()&&(t[n[0].trim()]=n[1])}});var o={};return o.css=function(e){if(e)for(var n in e)t[n]=e[n]},o.getText=function(){var e=[];for(var n in t)e.push(n+":"+t[n]);return e.join(";")},o};return function(e){var t={mask:!0,opacity:.8,zIndex:3,left:0,top:0,html:"",preventDefault:!1,style:{}},u=n(),l={_layer:!1};e&&(t=r.extend(t,e));var a=["touchstart","touchmove"],c=function(){if(l._layer=document.createElement("div"),l._layer.style.cssText="position:absolute;left:0px;top:0px;display:none;",document.body.appendChild(l._layer),t.html&&(l._layer.innerHTML=t.html),t.preventDefault&&a.forEach(function(e){document.body.addEventListener(e,u,!1)}),t.style){var e=i(l._layer);e.css(t.style),l._layer.style.cssText=e.getText()}};return u.handleEvent=function(e){e.preventDefault()},u.show=function(e){var n=i(l._layer);n.css(e),n.css({display:""}),l._layer.style.cssText=n.getText(),t.mask&&o.show(),u.trigger("show")},u.hide=function(){l._layer.style.display="none",u.trigger("hide")},u.setHTML=function(e){l._layer.innerHTML=e},u.getOuter=function(){return l._layer},u.destroy=function(){o.hide(),t.preventDefault&&a.forEach(function(e){document.body.removeEventListener(e,u,!1)}),l._layer.parentNode.removeChild(l._layer),u.trigger("destroy")},c(),u}});