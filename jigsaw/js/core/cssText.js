/**combine by hugjs**/
define("core/cssText",function(){return function(e){var t={},n={},r=e.split(";");return r.forEach(function(e){var t=e.split(":");n[t[0]]=t[1]}),t.css=function(e){for(var r in e)n[r]=e[r];return t},t.cssText=function(){var e=[];for(var t in n)e.push(t+":"+n[t]);return e.join(";")},t}});