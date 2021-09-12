!function(e){"use strict";function t(e){var t=e.getBoundingClientRect(),r={left:t.left,top:t.top,right:t.right,bottom:t.bottom,width:t.width,height:t.height};return r.element=e,r.center={x:r.left+Math.floor(r.width/2),y:r.top+Math.floor(r.height/2)},r.center.left=r.center.right=r.center.x,r.center.top=r.center.bottom=r.center.y,r}function r(e,t,r){for(var n=[[],[],[],[],[],[],[],[],[]],o=0;o<e.length;o++){var i,u,a,c=e[o],s=c.center;if(i=s.x<t.left?0:s.x<=t.right?1:2,n[a=3*(u=s.y<t.top?0:s.y<=t.bottom?1:2)+i].push(c),-1!==[0,2,6,8].indexOf(a)){var f=r;c.left<=t.right-t.width*f&&(2===a?n[1].push(c):8===a&&n[7].push(c)),c.right>=t.left+t.width*f&&(0===a?n[1].push(c):6===a&&n[7].push(c)),c.top<=t.bottom-t.height*f&&(6===a?n[3].push(c):8===a&&n[5].push(c)),c.bottom>=t.top+t.height*f&&(0===a?n[3].push(c):2===a&&n[5].push(c))}}return n}function n(e){return{nearPlumbLineIsBetter:function(t){var r;return(r=t.center.x<e.center.x?e.center.x-t.right:t.left-e.center.x)<0?0:r},nearHorizonIsBetter:function(t){var r;return(r=t.center.y<e.center.y?e.center.y-t.bottom:t.top-e.center.y)<0?0:r},nearTargetLeftIsBetter:function(t){var r;return(r=t.center.x<e.center.x?e.left-t.right:t.left-e.left)<0?0:r},nearTargetTopIsBetter:function(t){var r;return(r=t.center.y<e.center.y?e.top-t.bottom:t.top-e.top)<0?0:r},topIsBetter:function(e){return e.top},bottomIsBetter:function(e){return-1*e.bottom},leftIsBetter:function(e){return e.left},rightIsBetter:function(e){return-1*e.right}}}function o(e){for(var t=null,r=0;r<e.length;r++)if(e[r].group.length){t=e[r];break}if(!t)return null;var n=t.distance;return t.group.sort((function(e,t){for(var r=0;r<n.length;r++){var o=n[r],i=o(e)-o(t);if(i)return i}return 0})),t.group}function i(e,i,u,a){if(!(e&&i&&u&&u.length))return null;for(var c=[],s=0;s<u.length;s++){var f=t(u[s]);f&&c.push(f)}if(!c.length)return null;var l=t(e);if(!l)return null;var d,v=n(l),p=r(c,l,a.straightOverlapThreshold),g=r(p[4],l.center,a.straightOverlapThreshold);switch(i){case"left":keyleft();break;case"right":keyright();break;case"up":keyup();break;case"down":keydown();break;default:return null}function keyleft(){d=[{group:g[0].concat(g[3]).concat(g[6]),distance:[v.nearPlumbLineIsBetter,v.topIsBetter]},{group:p[3],distance:[v.nearPlumbLineIsBetter,v.topIsBetter]},{group:p[0].concat(p[6]),distance:[v.nearHorizonIsBetter,v.rightIsBetter,v.nearTargetTopIsBetter]}]}function keyright(){d=[{group:g[2].concat(g[5]).concat(g[8]),distance:[v.nearPlumbLineIsBetter,v.topIsBetter]},{group:p[5],distance:[v.nearPlumbLineIsBetter,v.topIsBetter]},{group:p[2].concat(p[8]),distance:[v.nearHorizonIsBetter,v.leftIsBetter,v.nearTargetTopIsBetter]}]}function keyup(){d=[{group:g[0].concat(g[1]).concat(g[2]),distance:[v.nearHorizonIsBetter,v.leftIsBetter]},{group:p[1],distance:[v.nearHorizonIsBetter,v.leftIsBetter]},{group:p[0].concat(p[2]),distance:[v.nearPlumbLineIsBetter,v.bottomIsBetter,v.nearTargetLeftIsBetter]}]}function keydown(){d=[{group:g[6].concat(g[7]).concat(g[8]),distance:[v.nearHorizonIsBetter,v.leftIsBetter]},{group:p[7],distance:[v.nearHorizonIsBetter,v.leftIsBetter]},{group:p[6].concat(p[8]),distance:[v.nearPlumbLineIsBetter,v.topIsBetter,v.nearTargetLeftIsBetter]}]}a.straightOnly&&d.pop();var h=o(d);if(!h)return null;var b=null;if(a.rememberSource&&a.previous&&a.previous.destination===e&&a.previous.reverse===i)for(var m=0;m<h.length;m++)if(h[m].element===a.previous.target){b=h[m].element;break}return b||(b=h[0].element),b}function u(){for(var e;e=A+String(++z),C[e];);return e}function a(t){return e?e(t).get():"string"==typeof t?[].slice.call(document.querySelectorAll(t)):"object"==typeof t&&t.length?[].slice.call(t):"object"==typeof t&&1===t.nodeType?[t]:[]}function c(t,r){return e?e(t).is(r):"string"==typeof r?Q.call(t,r):"object"==typeof r&&r.length?r.indexOf(t)>=0:"object"==typeof r&&1===r.nodeType&&t===r}function s(){var e=document.activeElement;if(e&&e!==document.body)return e}function f(e){e=e||{};for(var t=1;t<arguments.length;t++)if(arguments[t])for(var r in arguments[t])arguments[t].hasOwnProperty(r)&&void 0!==arguments[t][r]&&(e[r]=arguments[t][r]);return e}function l(e,t){Array.isArray(t)||(t=[t]);for(var r,n=0;n<t.length;n++)(r=e.indexOf(t[n]))>=0&&e.splice(r,1);return e}function d(e,t,r){if(!e||!t||!C[t]||C[t].disabled)return!1;if(e.offsetWidth<=0&&e.offsetHeight<=0||e.hasAttribute("disabled"))return!1;if(r&&!c(e,C[t].selector))return!1;if("function"==typeof C[t].navigableFilter){if(!1===C[t].navigableFilter(e,t))return!1}else if("function"==typeof F.navigableFilter&&!1===F.navigableFilter(e,t))return!1;return!0}function v(e){for(var t in C)if(!C[t].disabled&&c(e,C[t].selector))return t}function p(e){return a(C[e].selector).filter((function(t){return d(t,e)}))}function g(t){var r=C[t].defaultElement;return r?("string"==typeof r?r=a(r)[0]:e&&r instanceof e&&(r=r.get(0)),d(r,t,!0)?r:null):null}function h(e){var t=C[e].lastFocusedElement;return d(t,e,!0)?t:null}function b(e,t,r,n){arguments.length<4&&(n=!0);var o=document.createEvent("CustomEvent");return o.initCustomEvent(P+t,!0,n,r),e.dispatchEvent(o)}function m(e,t,r){if(!e)return!1;var n=s(),o=function(){n&&n.blur(),e.focus(),y(e,t)};if(N)return o(),!0;if(N=!0,K)return o(),N=!1,!0;if(n){var i={nextElement:e,nextSectionId:t,direction:r,native:!1};if(!b(n,"willunfocus",i))return N=!1,!1;n.blur(),b(n,"unfocused",i,!1)}var u={previousElement:n,sectionId:t,direction:r,native:!1};return b(e,"willfocus",u)?(e.focus(),b(e,"focused",u,!1),N=!1,y(e,t),!0):(N=!1,!1)}function y(e,t){t||(t=v(e)),t&&(C[t].lastFocusedElement=e,q=t)}function w(e,t){if("@"==e.charAt(0))return 1==e.length?I():I(e.substr(1));var r=a(e)[0];if(r){var n=v(r);if(d(r,n))return m(r,n,t)}return!1}function I(e){var t=[],r=function(e){e&&t.indexOf(e)<0&&C[e]&&!C[e].disabled&&t.push(e)};e?r(e):(r(D),r(q),Object.keys(C).map(r));for(var n=0;n<t.length;n++){var o,i=t[n];if(o="last-focused"==C[i].enterTo?h(i)||g(i)||p(i)[0]:g(i)||h(i)||p(i)[0])return m(o,i)}return!1}function B(e,t){b(e,"navigatefailed",{direction:t},!1)}function E(t,r){if(C[t].leaveFor&&void 0!==C[t].leaveFor[r]){var n=C[t].leaveFor[r];if("string"==typeof n)return""===n?null:w(n,r);e&&n instanceof e&&(n=n.get(0));var o=v(n);if(d(n,o))return m(n,o,r)}return!1}function x(e,t,r){var n=t.getAttribute("data-sn-"+e);if("string"==typeof n)return!(""===n||!w(n,e))||(B(t,e),!1);var o={},u=[];for(var a in C)o[a]=p(a),u=u.concat(o[a]);var c,s=f({},F,C[r]);if("self-only"==s.restrict||"self-first"==s.restrict){var d=o[r];(c=i(t,e,l(d,t),s))||"self-first"!=s.restrict||(c=i(t,e,l(u,d),s))}else c=i(t,e,l(u,t),s);if(c){C[r].previous={target:t,destination:c,reverse:j[e]};var b=v(c);if(r!=b){var y,I=E(r,e);if(I)return!0;if(null===I)return B(t,e),!1;switch(C[b].enterTo){case"last-focused":y=h(b)||g(b);break;case"default-element":y=g(b)}y&&(c=y)}return m(c,b,e)}return!!E(r,e)||(B(t,e),!1)}function L(e){if(!(!M||K||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)){var t,r=function(){return e.preventDefault(),e.stopPropagation(),!1},n=O[e.keyCode];if(n){if(!(t=s())&&(q&&(t=h(q)),!t))return I(),r();var o=v(t);if(o)return b(t,"willmove",{direction:n,sectionId:o,cause:"keydown"})&&x(n,t,o),r()}else if(13==e.keyCode&&(t=s())&&v(t)&&!b(t,"enter-down"))return r()}}function k(e){if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&!K&&M&&13==e.keyCode){var t=s();t&&v(t)&&(b(t,"enter-up")||(e.preventDefault(),e.stopPropagation()))}}function T(e){var t=e.target;if(t!==window&&t!==document&&M&&!N){var r=v(t);if(r){if(K)return void y(t,r);var n={sectionId:r,native:!0};b(t,"willfocus",n)?(b(t,"focused",n,!1),y(t,r)):(N=!0,t.blur(),N=!1)}}}function S(e){var t=e.target;if(t!==window&&t!==document&&!K&&M&&!N&&v(t)){var r={native:!0};b(t,"willunfocus",r)?b(t,"unfocused",r,!1):(N=!0,setTimeout((function(){t.focus(),N=!1})))}}var F={selector:"",straightOnly:!1,straightOverlapThreshold:.5,rememberSource:!1,disabled:!1,defaultElement:"",enterTo:"",leaveFor:null,restrict:"self-first",tabIndexIgnoreList:"a, input, select, textarea, button, iframe, [contentEditable=true]",navigableFilter:null},O={37:"left",38:"up",39:"right",40:"down"},j={left:"right",up:"down",right:"left",down:"up"},P="sn:",A="section-",z=0,H=!1,K=!1,C={},M=0,D="",q="",N=!1,Q=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||function(e){var t=(this.parentNode||this.document).querySelectorAll(e);return[].slice.call(t).indexOf(this)>=0},R={init:function(){H||(window.addEventListener("keydown",L),window.addEventListener("keyup",k),window.addEventListener("focus",T,!0),window.addEventListener("blur",S,!0),H=!0)},uninit:function(){window.removeEventListener("blur",S,!0),window.removeEventListener("focus",T,!0),window.removeEventListener("keyup",k),window.removeEventListener("keydown",L),R.clear(),z=0,H=!1},clear:function(){C={},M=0,D="",q="",N=!1},set:function(){var e,t;if("object"==typeof arguments[0])t=arguments[0];else{if("string"!=typeof arguments[0]||"object"!=typeof arguments[1])return;if(e=arguments[0],t=arguments[1],!C[e])throw new Error('Section "'+e+"\" doesn't exist!")}for(var r in t)void 0!==F[r]&&(e?C[e][r]=t[r]:void 0!==t[r]&&(F[r]=t[r]));e&&(C[e]=f({},C[e]))},add:function(){var e,t={};if("object"==typeof arguments[0]?t=arguments[0]:"string"==typeof arguments[0]&&"object"==typeof arguments[1]&&(e=arguments[0],t=arguments[1]),e||(e="string"==typeof t.id?t.id:u()),C[e])throw new Error('Section "'+e+'" has already existed!');return C[e]={},M++,R.set(e,t),e},remove:function(e){if(!e||"string"!=typeof e)throw new Error('Please assign the "sectionId"!');return!!C[e]&&(C[e]=void 0,C=f({},C),M--,q===e&&(q=""),!0)},disable:function(e){return!!C[e]&&(C[e].disabled=!0,!0)},enable:function(e){return!!C[e]&&(C[e].disabled=!1,!0)},pause:function(){K=!0},resume:function(){K=!1},focus:function(t,r){var n=!1;void 0===r&&"boolean"==typeof t&&(r=t,t=void 0);var o=!K&&r;if(o&&R.pause(),t)if("string"==typeof t)n=C[t]?I(t):w(t);else{e&&t instanceof e&&(t=t.get(0));var i=v(t);d(t,i)&&(n=m(t,i))}else n=I();return o&&R.resume(),n},move:function(e,t){if(e=e.toLowerCase(),!j[e])return!1;var r=t?a(t)[0]:s();if(!r)return!1;var n=v(r);return!!n&&!!b(r,"willmove",{direction:e,sectionId:n,cause:"api"})&&x(e,r,n)},makeFocusable:function(e){var t=function(e){var t=void 0!==e.tabIndexIgnoreList?e.tabIndexIgnoreList:F.tabIndexIgnoreList;a(e.selector).forEach((function(e){c(e,t)||e.getAttribute("tabindex")||e.setAttribute("tabindex","-1")}))};if(e){if(!C[e])throw new Error('Section "'+e+"\" doesn't exist!");t(C[e])}else for(var r in C)t(C[r])},setDefaultSection:function(e){if(e){if(!C[e])throw new Error('Section "'+e+"\" doesn't exist!");D=e}else D=""}};window.navitem=R,"object"==typeof module&&(module.exports=R),e&&(e.navitem=function(){if(R.init(),arguments.length>0){if(e.isPlainObject(arguments[0]))return R.add(arguments[0]);if("string"===e.type(arguments[0])&&e.isFunction(R[arguments[0]]))return R[arguments[0]].apply(R,[].slice.call(arguments,1))}return e.extend({},R)},e.fn.navitem=function(){var t;return(t=e.isPlainObject(arguments[0])?arguments[0]:{id:arguments[0]}).selector=this,R.init(),t.id&&R.remove(t.id),R.add(t),R.makeFocusable(t.id),this})}(window.jQuery);

// setTimeout(() => {
    navitem.init(),
    navitem.add({selector:".navitem, .navkey, .navpad"}),
    navitem.makeFocusable(),
    navitem.focus()
// }, 1000);
/*window.onload = function(){
    navitem.init(),
    navitem.add({selector:".navitem, .navkey, .navpad"}),
    navitem.makeFocusable(),
    navitem.focus()
}*/
