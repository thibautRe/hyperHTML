(function(A,G){if(typeof define=='function'&&define.amd)define([],G);else if(typeof module=='object'&&module.exports)module.exports=G();else A.hyperHTML=G()}(typeof self!='undefined'?self:this,function(){
/*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){"use strict";function t(){return this}function n(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}function r(){}function i(){var e=function(e,n){for(var r=new w(n),i=e.length,o=0;o<i;o++){var a=e[o];a.nodeType===f&&t(a,r)}},t=function r(e,t){Ne.has(e)&&e.dispatchEvent(t);for(var n=e.children||te(e),i=n.length,o=0;o<i;o++)r(n[o],t)};try{new MutationObserver(function(t){for(var n=t.length,r=0;r<n;r++){var i=t[r];e(i.removedNodes,p),e(i.addedNodes,v)}}).observe(document,{subtree:!0,childList:!0})}catch(n){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],p)},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],v)},!1)}}function o(e){var t=Pe.get(this);return t&&t.template===ie(e)?u.apply(t.updates,arguments):a.apply(this,arguments),this}function a(e){e=ie(e);var t=Be.get(e)||c.call(this,e),n=ne(this.ownerDocument,t.fragment),r=$e.create(n,t.paths);Pe.set(this,{template:e,updates:r}),u.apply(r,arguments),this.textContent="",this.appendChild(n)}function u(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t])}function c(e){var t=[],n=e.join(b).replace(Re,_e),r=Y(this,n);$e.find(r,t,e.slice());var i={fragment:r,paths:t};return Be.set(e,i),i}function l(e){return arguments.length<2?null==e?Fe("html"):"string"==typeof e?l.wire(null,e):"raw"in e?Fe("html")(e):"nodeType"in e?l.bind(e):Ze(e,"html"):("raw"in e?Fe("html"):l.wire).apply(null,arguments)}var s=document.defaultView,f=1,d=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,h="http://www.w3.org/2000/svg",v="connected",p="dis"+v,m=/^style|textarea$/i,g="_hyper: "+(Math.random()*new Date|0)+";",b="\x3c!--"+g+"--\x3e",w=s.Event;try{new w("Event")}catch(We){w=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}var y=s.Map||function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}},N=0,x=s.WeakMap||function(){var e=g+N++;return{get:function(t){return t[e]},set:function(t,n){Object.defineProperty(t,e,{configurable:!0,value:n})}}},E=s.WeakSet||function(){var e=new x;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}},C=Array.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}({}.toString),j=g.trim||function(){return this.replace(/^\s+|\s+$/g,"")},A=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||k(this,n,t.call(this,e))},set:function(e){k(this,n,e)}}},k=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},O={},S={},T=[],L=S.hasOwnProperty,M=0,$={attributes:O,define:function(e,t){e.indexOf("-")<0?(e in S||(M=T.push(e)),S[e]=t):O[e]=t},invoke:function(e,t){for(var n=0;n<M;n++){var r=T[n];if(L.call(e,r))return S[r](e[r],t)}}},D=function(e,t){return P(e).createElement(t)},P=function(e){return e.ownerDocument||e},B=function(e){return P(e).createDocumentFragment()},R=function(e,t){return P(e).createTextNode(t)},_=" \\f\\n\\r\\t",H="[ "+_+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",z="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",F="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",Z=new RegExp(z+H+F+"+)([ "+_+"]*/?>)","g"),V=new RegExp(z+H+F+"*)([ "+_+"]*/>)","g"),G=B(document),I="append"in G,W="content"in D(document,"template");G.appendChild(R(G,"g")),G.appendChild(R(G,""));var q=1===G.cloneNode(!0).childNodes.length,J="importNode"in document,K=I?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},Q=new RegExp("("+H+"=)(['\"]?)"+b+"\\2","gi"),U=function(e,t,n,r){return"<"+t+n.replace(Q,X)+r},X=function(e,t,n){return t+(n||'"')+g+(n||'"')},Y=function(e,t){return("ownerSVGElement"in e?ue:ae)(e,t.replace(Z,U))},ee=q?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(ee(n[i]));return t}:function(e){return e.cloneNode(!0)},te=function(e){for(var t=[],n=e.childNodes,r=n.length,i=0;i<r;i++)n[i].nodeType===f&&t.push(n[i]);return t},ne=J?function(e,t){return e.importNode(t,!0)}:function(e,t){return ee(t)},re=[].slice,ie=function(e){return oe(e)},oe=function(e){if(e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw)||/Firefox\/(\d+)/.test((s.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var t={};oe=function(e){var n="^"+e.join("^");return t[n]||(t[n]=e)}}else oe=function(e){return e};return oe(e)},ae=W?function(e,t){var n=D(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=D(e,"template"),r=B(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",K(r,re.call(n.querySelectorAll(i)))}else n.innerHTML=t,K(r,re.call(n.childNodes));return r},ue=W?function(e,t){var n=B(e),r=P(e).createElementNS(h,"svg");return r.innerHTML=t,K(n,re.call(r.childNodes)),n}:function(e,t){var n=B(e),r=D(e,"div");return r.innerHTML='<svg xmlns="'+h+'">'+t+"</svg>",K(n,re.call(r.firstChild.childNodes)),n};n.prototype.insert=function(){var e=B(this.first);return K(e,this.childNodes),e},n.prototype.remove=function(){var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=P(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var ce=function(e){var t=[],n=void 0;switch(e.nodeType){case f:case 11:n=e;break;case 8:n=e.parentNode,le(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)le(t,n,e);return t},le=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))},se={create:function(e,t,n){return{type:e,name:n,node:t,path:ce(t)}},find:function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e}},fe=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,de=function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),he(r,n)}return he(e.style,n)},he=function(e,t){var n=void 0,r=void 0;return function(i){switch(typeof i){case"object":if(i){if("object"===n){if(!t&&r!==i)for(var o in r)o in i||(e[o]="")}else t?e.value="":e.cssText="";var a=t?{}:e;for(var u in i){var c=i[u],l="number"!=typeof c||fe.test(u)?c:c+"px";/^--/.test(u)?a.setProperty(u,l):a[u]=l}n="object",t?e.value=me(r=a):r=i;break}default:r!=i&&(n="string",r=i,t?e.value=i||"":e.cssText=i||"")}}},ve=/([^A-Z])([A-Z]+)/g,pe=function(e,t,n){return t+"-"+n.toLowerCase()},me=function(e){var t=[];for(var n in e)t.push(n.replace(ve,pe),":",e[n],";");return t.join("")},ge=function(e,t){return e==t},be=function(e){return e},we=function(e,t,n,r){if(null==r)t.removeChild(e(n,-1));else{var i=t.ownerDocument.createRange();i.setStartBefore(e(n,-1)),i.setEndAfter(e(r,-1)),i.deleteContents()}},ye=function(e,t,n,r){r||(r={});for(var i=r.compare||ge,o=r.node||be,a=null==r.before?null:o(r.before,0),u=0,c=0,l=t.length-1,s=t[0],f=t[l],d=n.length-1,h=n[0],v=n[d];u<=l&&c<=d;)if(null==s)s=t[++u];else if(null==f)f=t[--l];else if(null==h)h=n[++c];else if(null==v)v=n[--d];else if(i(s,h))s=t[++u],h=n[++c];else if(i(f,v))f=t[--l],v=n[--d];else if(i(s,v))e.insertBefore(o(s,1),o(f,-0).nextSibling),s=t[++u],v=n[--d];else if(i(f,h))e.insertBefore(o(f,1),o(s,0)),f=t[--l],h=n[++c];else{var p=t.indexOf(h);if(p<0)e.insertBefore(o(h,1),o(s,0)),h=n[++c];else{for(var m=p,g=c;m<=l&&g<=d&&t[m]===n[g];)m++,g++;if(1<m-p)--p===u?e.removeChild(o(s,-1)):we(o,e,s,t[p]),u=m,c=g,s=t[m],h=n[g];else{var b=t[p];t[p]=null,e.insertBefore(o(b,1),o(s,0)),h=n[++c]}}}if(u<=l||c<=d)if(u>l){var w=n[d+1],y=null==w?a:o(w,0);if(c===d)e.insertBefore(o(n[c],1),y);else{for(var N=e.ownerDocument.createDocumentFragment();c<=d;)N.appendChild(o(n[c++],1));e.insertBefore(N,y)}}else null==t[u]&&u++,u===l?e.removeChild(o(t[u],-1)):we(o,e,t[u],t[l]);return n},Ne=new E;r.prototype=Object.create(null);var xe=function(e){return{html:e}},Ee=function qe(e,t){return"ELEMENT_NODE"in e?e:e.constructor===n?1/t<0?t?e.remove():e.last:t?e.insert():e.first:qe(e.render(),t)},Ce=function(e){return"ELEMENT_NODE"in e||e instanceof n||e instanceof t},je=function(e,t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t[i],a=se.find(e,o.path);switch(o.type){case"any":n.push(Te(a,[]));break;case"attr":n.push(Le(a,o.name,o.node));break;case"text":n.push(Me(a)),a.textContent=""}}return n},Ae=function Je(e,t,n){for(var r=e.childNodes,i=r.length,o=0;o<i;o++){var a=r[o];switch(a.nodeType){case f:ke(a,t,n),Je(a,t,n);break;case 8:a.textContent===g&&(n.shift(),t.push(m.test(e.nodeName)?se.create("text",e):se.create("any",a)));break;case 3:m.test(e.nodeName)&&j.call(a.textContent)===b&&(n.shift(),t.push(se.create("text",e)))}}},ke=function(e,t,n){for(var i=new r,o=e.attributes,a=re.call(o),u=[],c=a.length,l=0;l<c;l++){var s=a[l];if(s.value===g){var f=s.name;if(!(f in i)){var d=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");i[f]=o[d]||o[d.toLowerCase()],t.push(se.create("attr",i[f],d))}u.push(s)}}for(var h=u.length,v=0;v<h;v++){var p=u[v];/^id$/i.test(p.name)?e.removeAttribute(p.name):e.removeAttributeNode(u[v])}var m=e.nodeName;if(/^script$/i.test(m)){for(var b=document.createElement(m),w=0;w<o.length;w++)b.setAttributeNode(o[w].cloneNode(!0));b.textContent=e.textContent,e.parentNode.replaceChild(b,e)}},Oe=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(xe).then(t):Promise.resolve($.invoke(e,t)).then(t)},Se=function(e){return null!=e&&"then"in e},Te=function(e,t){var n={node:Ee,before:e},r=!1,i=void 0;return function o(a){switch(typeof a){case"string":case"number":case"boolean":r?i!==a&&(i=a,t[0].textContent=a):(r=!0,i=a,t=ye(e.parentNode,t,[R(e,a)],n));break;case"object":case"undefined":if(null==a){r=!1,t=ye(e.parentNode,t,[],n);break}default:if(r=!1,i=a,C(a))if(0===a.length)t.length&&(t=ye(e.parentNode,t,[],n));else switch(typeof a[0]){case"string":case"number":case"boolean":o({html:a});break;case"object":if(C(a[0])&&(a=a.concat.apply([],a)),Se(a[0])){Promise.all(a).then(o);break}default:t=ye(e.parentNode,t,a,n)}else Ce(a)?t=ye(e.parentNode,t,11===a.nodeType?re.call(a.childNodes):[a],n):Se(a)?a.then(o):"placeholder"in a?Oe(a,o):"text"in a?o(String(a.text)):"any"in a?o(a.any):"html"in a?t=ye(e.parentNode,t,re.call(Y(e,[].concat(a.html).join("")).childNodes),n):o("length"in a?re.call(a):$.invoke(a,o))}}},Le=function(e,t,n){var r="ownerSVGElement"in e,o=void 0;if("style"===t)return de(e,n,r);if(/^on/.test(t)){var a=t.slice(2);return a===v||a===p?(De&&(De=!1,i()),Ne.add(e)):t.toLowerCase()in e&&(a=a.toLowerCase()),function(t){o!==t&&(o&&e.removeEventListener(a,o,!1),o=t,t&&e.addEventListener(a,t,!1))}}if("data"===t||!r&&t in e)return function(n){o!==n&&(o=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};if(t in $.attributes)return function(n){o=$.attributes[t](e,n),e.setAttribute(t,null==o?"":o)};var u=!1,c=n.cloneNode(!0);return function(t){o!==t&&(o=t,c.value!==t&&(null==t?(u&&(u=!1,e.removeAttributeNode(c)),c.value=t):(c.value=t,u||(u=!0,e.setAttributeNode(c)))))}},Me=function(e){var t=void 0;return function n(r){t!==r&&(t=r,"object"==typeof r&&r?Se(r)?r.then(n):"placeholder"in r?Oe(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?re.call(r).join(""):$.invoke(r,n)):e.textContent=null==r?"":r)}},$e={create:je,find:Ae},De=!0,Pe=new x,Be=function(){try{var e=new x,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(t){return new y}}(),Re=V,_e=function(e,t,n){return d.test(t)?e:"<"+t+n+"></"+t+">"},He=new x,ze=function(e,t){return null==e?Fe(t||"html"):Ze(e,t||"html")},Fe=function(e){var t=void 0,n=void 0,r=void 0,i=void 0,a=void 0;return function(u){u=ie(u);var c=i!==u;return c&&(i=u,r=B(document),n="svg"===e?document.createElementNS(h,"svg"):r,a=o.bind(n)),a.apply(null,arguments),c&&("svg"===e&&K(r,re.call(n.childNodes)),t=Ve(r)),t}},Ze=function(e,t){var n=t.indexOf(":"),r=He.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||He.set(e,r={}),r[i]||(r[i]=Fe(t))},Ve=function(e){for(var t=e.childNodes,r=t.length,i=[],o=0;o<r;o++){var a=t[o];a.nodeType!==f&&0===j.call(a.textContent).length||i.push(a)}return 1===i.length?i[0]:new n(i)},Ge=function(e){return o.bind(e)},Ie=$.define;return l.Component=t,l.bind=Ge,l.define=Ie,l.diff=ye,l.hyper=l,l.wire=ze,function(e){var n=new x,r=Object.create,i=function(e,t,n){return e.set(t,n),n},o=function(e,t,n,o){var u=t.get(e)||a(e,t);switch(typeof o){case"object":case"function":var c=u.w||(u.w=new x);return c.get(o)||i(c,o,new e(n));default:var l=u.p||(u.p=r(null));return l[o]||(l[o]=new e(n))}},a=function(e,t){var n={w:null,p:null};return t.set(e,n),n},u=function(e){var t=new y;return n.set(e,t),t};Object.defineProperties(t,{"for":{configurable:!0,value:function(e,t){return o(this,n.get(e)||u(e),e,null==t?"default":t)}}}),Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:A("html",e),svg:A("svg",e),state:A("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return!1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return!1!==t&&this.render(),this}}})}(Fe),l}(window);
return hyperHTML}));
