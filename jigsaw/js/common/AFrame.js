/**combine by hugjs**/
define("common/AFrame",function(){function e(){var e;do e=Math.floor(1e9*Math.random());while(e in i);return e}function t(t){var n=e();return i[n]=o(function(){delete i[n],t.apply(u,arguments)}),n}function n(e){var n;return n=t(function(){i[n]=o(function(){delete i[n],e.apply(u,arguments)})})}var r=window,o=r.requestAnimationFrame||r.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||r.msRequestAnimationFrame||function(e){r.setTimeout(e,1e3/60)},i={},u=r;return{queue:t,queueAfter:n}});