/**combine by hugjs**/
define("core/model",function(){return function(e){var n=e||{},t={};return n.on=function(e,n){var r=t[e];r||(r=t[e]=[]),r.push(n)},n.trigger=function(e){var r=t[e],o=Array.prototype.slice.call(arguments,1);r&&r.forEach(function(e){try{e.apply(n,o)}catch(t){}})},n.off=function(e,n){var r=t[e];if(r)for(var o=0;o<r.length;o++)if(r[o]==n)return r.splice(o,1)},n.destroy=function(){t=null},n}});