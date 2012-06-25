/*
 * Hammer.JS
 * version 0.6.1
 * author: Eight Media
 * https://github.com/EightMedia/hammer.js
 */
function Hammer(i,f,H){var o,p,g,d,q;function x(a){a=a||window.event;if(B){for(var b=[],c=0<a.touches.length?a.touches:a.changedTouches,e=0,d=c.length;e<d;e++)a=c[e],b.push({x:a.pageX,y:a.pageY});return b}b=document;c=b.body;return[{x:a.pageX||a.clientX+(b&&b.scrollLeft||c&&c.scrollLeft||0)-(b&&b.clientLeft||c&&b.clientLeft||0),y:a.pageY||a.clientY+(b&&b.scrollTop||c&&c.scrollTop||0)-(b&&b.clientTop||c&&b.clientTop||0)}]}function C(a,b){if(2==a.length&&2==b.length){var c,e;c=a[0].x-a[1].x;e=a[0].y-
a[1].y;var d=Math.sqrt(c*c+e*e);c=b[0].x-b[1].x;e=b[0].y-b[1].y;return Math.sqrt(c*c+e*e)/d}return 0}function D(a,b){if(2==a.length&&2==b.length){var c,e;c=a[0].x-a[1].x;e=a[0].y-a[1].y;var d=180*Math.atan2(e,c)/Math.PI;c=b[0].x-b[1].x;e=b[0].y-b[1].y;return 180*Math.atan2(e,c)/Math.PI-d}return 0}function j(a,b){b.touches=x(b.originalEvent);b.type=a;"[object Function]"==Object.prototype.toString.call(r["on"+a])&&r["on"+a].call(r,b)}function s(a){a=a||window.event;a.preventDefault?(a.preventDefault(),
a.stopPropagation()):(a.returnValue=!1,a.cancelBubble=!0)}function y(a){switch(a.type){case "mousedown":case "touchstart":g=x(a);v=(new Date).getTime();n=!0;E=a;var b=i.getBoundingClientRect();o=b.top+(window.pageYOffset||i.scrollTop||document.body.scrollTop)-(i.clientTop||document.body.clientTop||0);p=b.left+(window.pageXOffset||i.scrollLeft||document.body.scrollLeft)-(i.clientLeft||document.body.clientLeft||0);w=!0;t.hold(a);f.prevent_default&&s(a);break;case "mousemove":case "touchmove":if(!w)return!1;
d=x(a);t.transform(a)||t.drag(a);break;case "mouseup":case "mouseout":case "touchcancel":case "touchend":if(!w||"transform"!=h&&a.touches&&0<a.touches.length)return!1;w=!1;b="drag"==h;t.swipe(a);b?j("dragend",{originalEvent:a,direction:m,distance:k,angle:l}):"transform"==h?j("transformend",{originalEvent:a,position:q,scale:C(g,d),rotation:D(g,d)}):t.tap(E);F=h;j("release",{originalEvent:a,gesture:h});q=d=g=void 0;n=!1;l=k=0;h=null}}function z(a,b,c){for(var b=b.split(" "),e=0,d=b.length;e<d;e++)a.addEventListener?
a.addEventListener(b[e],c,!1):document.attachEvent&&a.attachEvent("on"+b[e],c)}var r=this,f=function(a,b){var c={};if(!b)return a;for(var e in a)c[e]=e in b?b[e]:a[e];return c}({prevent_default:!1,css_hacks:!0,swipe:!0,swipe_time:200,swipe_min_distance:20,drag:!0,drag_vertical:!0,drag_horizontal:!0,drag_min_distance:20,transform:!0,scale_treshold:0.1,rotation_treshold:15,tap:!0,tap_double:!0,tap_max_interval:300,tap_max_distance:10,tap_double_distance:20,hold:!0,hold_timeout:500},f);(function(){if(!f.css_hacks)return!1;
for(var a=["webkit","moz","ms","o",""],b={userSelect:"none",touchCallout:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"},c="",e=0;e<a.length;e++)for(var d in b)c=d,a[e]&&(c=a[e]+c.substring(0,1).toUpperCase()+c.substring(1)),i.style[c]=b[d]})();var k=0,l=0,m=0;q=d=g=void 0;var n=!1,h=null,F=null,v=null,u={x:0,y:0},A=null,G=null;p=o=void 0;var w=!1,E,B="ontouchstart"in window;this.option=function(a,b){b!=H&&(f[a]=b);return f[a]};this.getDirectionFromAngle=function(a){var a={down:45<=a&&135>
a,left:135<=a||-135>=a,up:-45>a&&-135<a,right:-45<=a&&45>=a},b,c;for(c in a)if(a[c]){b=c;break}return b};var t={hold:function(a){f.hold&&(h="hold",clearTimeout(G),G=setTimeout(function(){"hold"==h&&j("hold",{originalEvent:a,position:g})},f.hold_timeout))},swipe:function(a){if(d){var b=d[0].x-g[0].x,c=d[0].y-g[0].y;k=Math.sqrt(b*b+c*c);var e=(new Date).getTime()-v;f.swipe&&(f.swipe_time>e&&k>f.swipe_min_distance)&&(l=180*Math.atan2(d[0].y-g[0].y,d[0].x-g[0].x)/Math.PI,m=r.getDirectionFromAngle(l),
h="swipe",j("swipe",{originalEvent:a,position:{x:d[0].x-p,y:d[0].y-o},direction:m,distance:k,distanceX:b,distanceY:c,angle:l}))}},drag:function(a){var b=d[0].x-g[0].x,c=d[0].y-g[0].y;k=Math.sqrt(b*b+c*c);if(f.drag&&k>f.drag_min_distance||"drag"==h){l=180*Math.atan2(d[0].y-g[0].y,d[0].x-g[0].x)/Math.PI;m=r.getDirectionFromAngle(l);var e="up"==m||"down"==m;(e&&!f.drag_vertical||!e&&!f.drag_horizontal)&&k>f.drag_min_distance||(h="drag",b={originalEvent:a,position:{x:d[0].x-p,y:d[0].y-o},direction:m,
distance:k,distanceX:b,distanceY:c,angle:l},n&&(j("dragstart",b),n=!1),j("drag",b),s(a))}},transform:function(a){if(f.transform){if(2!=(a.touches?a.touches.length:1))return!1;var b=D(g,d),c=C(g,d);if("drag"!=h&&("transform"==h||Math.abs(1-c)>f.scale_treshold||Math.abs(b)>f.rotation_treshold))return h="transform",q={x:(d[0].x+d[1].x)/2-p,y:(d[0].y+d[1].y)/2-o},b={originalEvent:a,position:q,scale:c,rotation:b},n&&(j("transformstart",b),n=!1),j("transform",b),s(a),!0}return!1},tap:function(a){var b=
(new Date).getTime(),c=b-v;if(!f.hold||f.hold&&f.hold_timeout>c){if(u&&f.tap_double&&"tap"==F&&v-A<f.tap_max_interval)var c=Math.abs(u[0].x-g[0].x),e=Math.abs(u[0].y-g[0].y),c=u&&g&&Math.max(c,e)<f.tap_double_distance;else c=!1;c?(h="double_tap",A=null,j("doubletap",{originalEvent:a,position:g}),s(a)):(c=d?Math.abs(d[0].x-g[0].x):0,e=d?Math.abs(d[0].y-g[0].y):0,k=Math.max(c,e),k<f.tap_max_distance&&(h="tap",A=b,u=g,f.tap&&(j("tap",{originalEvent:a,position:g}),s(a))))}}};B?z(i,"touchstart touchmove touchend touchcancel",
y):(z(i,"mouseup mousedown mousemove",y),z(i,"mouseout",function(a){var b;a:if(b=a.relatedTarget,!b&&(window.event&&window.event.toElement)&&(b=window.event.toElement),i===b)b=!0;else{if(b)for(b=b.parentNode;null!==b;){if(b===i){b=!0;break a}b=b.parentNode}b=!1}b||y(a)}))};



/*
 * Hammer.JS jQuery plugin
 * version 0.3
 * author: Eight Media
 * https://github.com/EightMedia/hammer.js
 */
jQuery.fn.hammer=function(e){return this.each(function(){var c=new Hammer(this,e),d=jQuery(this);d.data("hammer",c);for(var b="hold tap doubletap transformstart transform transformend dragstart drag dragend swipe release".split(" "),a=0;a<b.length;a++)c["on"+b[a]]=function(a,b){return function(c){a.trigger(jQuery.Event(b,c))}}(d,b[a])})};


$(function() {

    // iOS stuff
    window.top.scrollTo(0, 1);

    $('.btn').hammer().bind('tap', function(e) {
      var self = $(this),
          target = self.attr('data-target');

      $(target).collapse('toggle');
    });

    var resize = function() {
        var win = $(window),
            height = win.height(),
            width = win.width();

        height = (height > 370) ? height : 370;

        $('iframe').attr({
          height: height,
          width:width
        })
    }

    $(window).resize(resize);

    resize();

})
