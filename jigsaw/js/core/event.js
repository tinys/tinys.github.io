/**combine by hugjs**/
define("core/event",function(){return{addEvent:function(t,e,n,r){t&&t.addEventListener(e,n,r)},removeEvent:function(t,e,n,r){t&&t.removeEventListener(e,n,r)},stopEvent:function(t){t.preventDefault(),t.stopPropagation()},preventDefault:function(t){t.preventDefault()},getEvent:function(){}}});