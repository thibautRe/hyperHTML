var hyperHTML=function(e){"use strict";function t(e){return arguments.length<2?null==e?G("html"):"string"==typeof e?r(null,e):"raw"in e?G("html")(e):"nodeType"in e?n(e):I(e,"html"):("raw"in e?G("html"):r).apply(null,arguments)}function n(e){return s.bind(e)}function r(e,t){return arguments.length<1?G("html"):null==e?G(t||"html"):I(e,t||"html")}function i(){}function o(e,t){for(var n=0,r=e.length,i=t.length;n<r;){if(!(n<i&&e[n]===t[n]))return n;n++}return n===i?-1:n}function a(e,t){switch(t.nodeType){case Q:var n=e.childNodes;if(n[0]===t){l(n,1);break}c(e,t);break;case Z:-1!==o(e.childNodes,t.childNodes)&&c(e,t);break;case X:e.textContent=t.textContent}}function l(e,t){for(var n,r=e.length;t<r--;)n=e[r],n.parentNode.removeChild(n)}function c(e,t){e.textContent="",e.appendChild(t)}function u(e,t,n){var r=k(e);0!==n?(l(e.childNodes,n),ye(r,t.slice(n)),e.appendChild(r)):(ye(r,t),c(e,r))}function s(e){var t=ke.get(this);return t&&t.template===(le?K(e):e)||(t=W.apply(this,arguments),ke.set(this,t)),V.apply(t.updates,arguments),this}function f(e,t,n){var r,i=e.ownerElement,o=/^on/.test(n),a="data"===n||S(i,n)&&!ne.test(n),l=o?n.slice(2):"",c=o||a;return o&&n.toLowerCase()in i&&(l=l.toLowerCase()),c&&t.push(i,n),o?function(e){r!==e&&(r&&i.removeEventListener(l,r,!1),r=e,e&&i.addEventListener(l,e,!1))}:a?function(e){r!==e&&(r=e,i[n]!==e&&(null==e?(i[n]=null,i.removeAttribute(n)):i[n]=e))}:function(t){r!==t&&(r=t,e.value!==t&&(null==t?c||(c=!0,i.removeAttributeNode(e)):(e.value=t,c&&(c=!1,i.setAttributeNode(e)))))}}function h(e,t){var n,r=!t;return function c(s){switch(typeof s){case"string":case"number":case"boolean":r?n!==s&&(n=s,e.textContent=s):1===t.length&&t[0].nodeType===X?n!==s&&(n=s,t[0].textContent=s):(n=s,l(t,0),t=[x(e,s)],e.parentNode.insertBefore(t[0],e));break;case"function":c(r?s(e,be(e),0):s(e.parentNode,t,0));break;case"object":case"undefined":if(null==s){n=s,c("");break}s instanceof i&&(s=s.render());default:if(n=s,pe(s)){var f=s.length;if(0!==f||r)switch(typeof s[0]){case"string":case"number":case"boolean":c({html:s});break;case"function":for(var h=r?e:e.parentNode,d=r?se.call(be(e)):t,p=0;p<f;p++)s[p]=s[p](h,d,p);r&&l(d,p),c(s.concat.apply([],s));break;case"object":if(pe(s[0])&&(s=s.concat.apply([],s)),O(s[0])){Promise.all(s).then(c);break}for(var p=0,f=s.length;p<f;p++)s[p]instanceof i&&(s[p]=s[p].render());default:if(r){var p=o(e.childNodes,s);-1!==p&&u(e,s,p)}else $(e,t,s)}else l(t,0),t=[]}else if(D(s))r?a(e,s):$(e,t,s.nodeType===Z?se.call(s.childNodes):[s]);else if(O(s))s.then(c);else if("placeholder"in s)L(c,s);else if("text"in s)c(String(s.text));else if("any"in s)c(s.any);else if("html"in s){var v=[].concat(s.html).join("");if(r)e.innerHTML=v;else{l(t,0);var g=b(e,v);t=se.call(g.childNodes),e.parentNode.insertBefore(g,e)}}else c("length"in s?se.call(s):M(s))}}}function d(e,t,n){for(var r,i,o=ie,a=e.attributes,l=0,c=a.length;l<c;l++)i=a[l],i.value===o&&(r=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1"),t.push(z("attr",e.attributes[r.toLowerCase()],r)))}function p(e,t,n){for(var r,i=e.childNodes,o=i.length,a=0;a<o;a++)switch(r=i[a],r.nodeType){case Q:d(r,t,n),p(r,t,n);break;case Y:r.textContent===ie&&(n.shift(),1===o||j(r,"previous")&&j(r,"next")?(t.push(z("any",e)),a=o):t.push(z("virtual",r)));break;case X:ne.test(e.nodeName)&&ve.call(r.textContent)===oe&&(n.shift(),t.push(z("any",e)))}}function v(e){return fe[e]}function g(e){return{html:e}}function m(e){for(var t,n=[],r=e.childNodes,i=0,o=r.length;i<o;i++)t=r[i],t.nodeType!==Q&&0===ve.call(t.textContent).length||n.push(t);return 1===n.length?n[0]:n}function y(e){return e.createDocumentFragment()}function b(e,t){return(ee in e?w:N)(e,t.replace(we,Ce))}function N(e,t){var n,r=e.ownerDocument,i=r.createElement("template"),o="content"in i,a=!1;if(o||(n=y(r),a=/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)),a){var l=RegExp.$1;i.innerHTML="<table>"+t+"</table>",ye(n,se.call(i.querySelectorAll(l)))}else i.innerHTML=t,o?n=i.content:ye(n,se.call(i.childNodes));return n}function w(e,t){var n=e.ownerDocument,r=y(n);if(ce||ue){var i=n.createElement("div");i.innerHTML='<svg xmlns="'+te+'">'+t+"</svg>",ye(r,se.call(i.firstChild.childNodes))}else{var i=n.createElementNS(te,"svg");i.innerHTML=t,ye(r,se.call(i.childNodes))}return r}function x(e,t){return e.ownerDocument.createTextNode(t)}function C(e,t,n,r){for(var i=e,o=e.ownerDocument,a=n.path,l=Ne(t,a),c=0,u=a.length;c<u;c++)switch(a[c++]){case"attributes":var s=l.name;e.hasAttribute(s)||e.setAttribute(s,""),i=e.attributes[s];break;case"childNodes":var f=be(e),h=be(l.parentNode);i=Se(l);var d=i?a.indexOf.call(h,i)+1:-1;i=Ee(l);var p=i?a.indexOf.call(h,i):-1;switch(i=o.createComment(ie),!0){case p<0:p=f.length;break;case d<0:d=0;default:p=-(h.length-p)}r.push.apply(r,se.call(f,d,p)),r.length?E(e,i,Ee(r[r.length-1])):E(e,i,se.call(f,p)[0]),0===r.length&&H(e,i);break;default:i=be(e)[a[c]]||e.appendChild(e.ownerDocument.createElement(Ne(t,a.slice(0,c+1)).nodeName)),e=i}return i}function T(e){var n=t.document,r=n.customElements||n.defaultView.customElements;return r&&r.get(e.nodeName.toLowerCase())}function E(e,t,n){n?e.insertBefore(t,n):e.appendChild(t)}function S(e,t){var n=!(ee in e);if(n&&/-/.test(e.nodeName)){var r=T(e);r&&(e=r.prototype)}return n&&t in e}function k(e){return y(e.ownerDocument)}function L(e,t){e(t.placeholder),"text"in t?Promise.resolve(t.text).then(String).then(e):"any"in t?Promise.resolve(t.any).then(e):"html"in t?Promise.resolve(t.html).then(g).then(e):Promise.resolve(M(t)).then(e)}function M(e){for(var t in me)if(e.hasOwnProperty(t))return me[t](e[t])}function D(e){return"ELEMENT_NODE"in e}function O(e){return null!=e&&"then"in e}function A(e,t){var n="_"+e+"$";return{get:function(){return this[n]||(this[e]=t.call(this,e))},set:function(e){ge(this,n,{configurable:!0,value:e})}}}function j(e,t){for(;null!=(e=e[t+"Sibling"])&&e.nodeType===X&&ve.call(e.textContent).length<1;);return null==e}function P(e){for(var t=0,n=e.length;t<n;t++)e[t++].removeAttribute(e[t])}function H(e,t){var n=t.previousSibling;n&&n.nodeType===X&&(e.removeChild(n),H(e,t))}function _(e,t,n,r){var i;switch(e.type){case"any":i=h(t,null);break;case"attr":i=f(t,n,e.name);break;case"virtual":i=h(t,r)}return i}function $(e,t,n){var r=o(t,n);if(-1!==r){var i=k(e);l(t,r),t.splice(r),n=n.slice(r),ye(i,n),e.parentNode.insertBefore(i,e),t.push.apply(t,n)}}function z(e,t,n){return{type:e,path:F(t),name:n}}function B(e){var t=[],n=b(this,e.join(oe)),r={fragment:n,paths:t};return p(n,t,e.slice()),Me.set(e,r),r}function F(e){var t,n=[];switch(e.nodeType){case Q:case Z:t=e;break;case Y:t=e.parentNode,n.unshift("childNodes",n.indexOf.call(t.childNodes,e));break;case U:default:t=e.ownerElement,n.unshift("attributes",e.name)}for(e=t;t=t.parentNode;e=t)n.unshift("children",n.indexOf.call(be(t),e));return n}function R(e,t){for(var n,r,i=[],o=[],a=0,c=t.length;a<c;a++)n=t[a],r=Ne(e,n.path),r.nodeType===Z&&(l(r.childNodes,0),r=this),i[a]=_(n,r,o,[]);return P(o),i}function q(e,t){for(var n,r,i=[],o=[],a=0,l=t.length;a<l;a++)r=[],n=t[a],i[a]=_(n,C(this,e,n,r),o,r);return P(o),i}function V(){for(var e=1,t=arguments.length;e<t;e++)this[e-1](arguments[e])}function W(e){le&&(e=K(e));var t,n=Me.get(e)||B.call(this,e);if(De){var r=Oe(n.fragment);t=R.call(this,r,n.paths),c(this,r)}else t=q.call(this,n.fragment,n.paths);return{template:e,updates:t}}function G(e){function r(t){c=y(t),l="svg"===e?t.createElementNS(te,"svg"):c,u=n(l)}function i(){return s&&(s=!1,"svg"===e&&ye(c,se.call(l.childNodes)),a=m(c)),a}var o,a,l,c,u,s,f;return"adopt"===e?function(n){var a=arguments;return le&&(n=K(n)),f!==n&&(s=!0,f=n,o=function(n,o,f){return s&&(f<o.length?(l=o[f],c={ownerDocument:l.ownerDocument,childNodes:[l],children:[l]},u=t.adopt(c)):(ee in n&&(e="svg"),r(n.ownerDocument))),u.apply(null,a),i()}),o}:function(e){return le&&(e=K(e)),f!==e&&(s=!0,f=e,r(t.document)),u.apply(null,arguments),i()}}function I(e,t){var n=Le.get(e),r=t.indexOf(":"),i=t;return-1<r&&(i=t.slice(r+1),t=t.slice(0,r)||"html"),n||(n={},Le.set(e,n)),n[i]||(n[i]=G(t))}/*! (c) 2017 Andrea Giammarchi @WebReflection, (ISC) */
t.document=e,t.hyper=t,t.adopt=function(e){return function(){return De=!1,s.apply(e,arguments),De=!0,e}},t.bind=n,t.define=function(e,t){me[e]=t},t.escape=function(e){return e.replace(/[&<>'"]/g,v)},t.wire=r,t.Component=i,Object.defineProperties(i.prototype,{handleEvent:{value:function(e){this[(e.currentTarget.dataset||{}).call||"on"+e.type](e)}},html:A("html",G),svg:A("svg",G),state:A("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},setState:{value:function(e){var t=this.state,n="function"==typeof e?e.call(this,t):e;for(var r in n)t[r]=n[r];this.render()}}});var J,K,Q=1,U=2,X=3,Y=8,Z=11,ee="ownerSVGElement",te="http://www.w3.org/2000/svg",ne=/^style$/i,re="_hyper_html: ",ie=re+(Math.random()*new Date|0)+";",oe="\x3c!--"+ie+"--\x3e",ae=y(e),le="object"==typeof navigator&&/Firefox\/(\d+)/.test(navigator.userAgent)&&parseFloat(RegExp.$1)<55,ce=function(){var t=e.createElement("p");return t.innerHTML='<i data-i="" class=""></i>',/class/i.test(t.firstChild.attributes[0].name)}(),ue=!("children"in ae),se=[].slice,fe={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},he=typeof WeakMap==typeof he?function(){return{get:function(e){return e[re]},set:function(e,t){Object.defineProperty(e,re,{configurable:!0,value:t})}}}:WeakMap,de=typeof Map==typeof de?function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}}:Map,pe=Array.isArray||function(){var e={}.toString,t=e.call([]);return function(n){return e.call(n)===t}}(),ve=re.trim||function(){return this.replace(/^\s+|\s+$/g,"")},ge=Object.defineProperty,me={};le&&(J={},K=function(e){var t="_"+e.join(oe);return J[t]||(J[t]=e)});var ye="append"in ae?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=0,r=t.length;n<r;n++)e.appendChild(t[n])},be=ue||ce?function(e){for(var t,n=[],r=e.childNodes,i=0,o=0,a=r.length;o<a;o++)t=r[o],t.nodeType===Q&&(n[i++]=t);return n}:function(e){return e.children},Ne=ce||ue?function(e,t){for(var n,r=0,i=t.length;r<i;r++)switch(n=t[r++]){case"children":e=be(e)[t[r]];break;default:e=e[n][t[r]]}return e}:function(e,t){for(var n=0,r=t.length;n<r;n++)e=e[t[n++]][t[n]];return e},we=/(<[a-z]+[a-z0-9:_-]*)((?:[^\S]+[a-z0-9:_-]+(?:=(?:'.*?'|".*?"|<.+?>|\S+))?)+)([^\S]*\/?>)/gi,xe=new RegExp("([^\\S][a-z]+[a-z0-9:_-]*=)(['\"]?)"+oe+"\\2","gi"),Ce=function(e,t,n,r){return t+n.replace(xe,Te)+r},Te=function(e,t,n){return t+(n||'"')+ie+(n||'"')},Ee=ce?function(e){for(;e=e.nextSibling;)if(e.nodeType===Q)return e}:function(e){return e.nextElementSibling},Se=ce?function(e){for(;e=e.previousSibling;)if(e.nodeType===Q)return e}:function(e){return e.previousElementSibling},ke=new he,Le=new he,Me=new de,De=!0,Oe=function(){return ae.appendChild(x(ae,"g")),ae.appendChild(x(ae,"")),1===ae.cloneNode(!0).childNodes.length?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=0,i=n.length;r<i;r++)t.appendChild(Oe(n[r]));return t}:function(e){return e.cloneNode(!0)}}();return t}(document);try{module.exports=hyperHTML}catch(e){}