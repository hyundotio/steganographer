!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Steg=e():t.Steg=e()}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){var e=new Image;return e.src=t,e}function r(t){if(isNaN(t)||!isFinite(t)||t%1||t<2)return!1;if(t%2==0)return 2===t;if(t%3==0)return 3===t;for(var e=Math.sqrt(t),n=5;n<=e;n+=6){if(t%n==0)return!1;if(t%(n+2)==0)return!1}return!0}function o(t){for(var e=t;;e+=1)if(r(e))return e}t.r(e),t.d(e,{decode:()=>h,encode:()=>s});var i={t:3,threshold:1,codeUnitSize:16},a=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function l(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,l)}u((r=r.apply(t,e||[])).next())}))},l=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=e.call(t,a)}catch(t){l=[6,t],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}};function u(t,e){for(var n=!0,r=0;r<16&&n;r+=1)n=n&&255===t[e+4*r];return n}function h(t,e){return a(this,void 0,void 0,(function(){var r,a,h,f,c,s,d,p,g,v,w,y,m,b,S;return l(this,(function(l){if("string"==typeof t)t=n(t);else{if(!(t instanceof HTMLImageElement&&t.src))throw new Error("Invalid image input: The input image is neither an URL string nor an image.");t=n(t.src)}if(r=e?e.t:i.t,a=e?e.threshold:i.threshold,h=e?e.codeUnitSize:i.codeUnitSize,f=o(Math.pow(2,r)),!r||r<1||r>7)throw new Error('Invalid t value: Parameter t = " + t + " is not valid: 0 < t < 8');if(c=document.createElement("canvas"),s=c.getContext("2d"),c.style.display="none",c.width=t.width,c.height=t.height,s){if(s.drawImage(t,0,0),d=s.getImageData(0,0,c.width,c.height),p=d.data,g=[],v=void 0,w=void 0,1===a)for(v=3,w=!1;!w&&v<p.length&&!w;v+=4)(w=u(p,v))||g.push(p[v]-(255-f+1));for(y="",m=0,b=0,S=Math.pow(2,h)-1,v=0;v<g.length;v+=1)m+=g[v]<<b,(b+=r)>=h&&(y+=String.fromCharCode(m&S),b%=h,m=g[v]>>r-b);return 0!==m&&(y+=String.fromCharCode(m&S)),[2,y]}throw new Error("DOM Error: Could not initialize Image Context.")}))}))}var f=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function l(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,l)}u((r=r.apply(t,e||[])).next())}))},c=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=e.call(t,a)}catch(t){l=[6,t],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}};function s(t,e,r){return f(this,void 0,void 0,(function(){var a,l,u,h,f,s,d,p,g,v,w,y,m,b,S,M,x,E,I,C,U,z,T,k,P,j,D,O,L,N;return c(this,(function(c){if("string"==typeof e)e=n(e);else{if(!(e instanceof HTMLImageElement&&e.src)){if("string"!=typeof t||t.length)throw new Error("Invalid message input: Message is either empty or not a string.");throw new Error("Invalid image input: The input image is neither an URL string nor an image.")}e=n(e.src)}if(a=function(t,e,n){var r=t.width,o=t.height;return(n?n.t:e.t)*r*o/(n?n.codeUnitSize:e.codeUnitSize)>>0}(e,i,r),a>t.length){if(l=r?r.t:i.t,u=r?r.threshold:i.threshold,h=r?r.codeUnitSize:i.codeUnitSize,f=o(Math.pow(2,l)),!l||l<1||l>7)throw new Error('Invalid t value: Parameter t = " + t + " is not valid: 0 < t < 8');if(s=document.createElement("canvas"),d=s.getContext("2d"),s.style.display="none",s.width=e.width,s.height=e.height,d){for(d.drawImage(e,0,0),p=d.getImageData(0,0,s.width,s.height),g=p.data,v=h/l>>0,w=h%l,y=[],m=0,b=void 0,S=void 0,M=void 0,x=void 0,E=void 0,I=void 0,C=void 0,U=void 0,z=void 0,U=0;U<=t.length;U+=1){if(E=t.charCodeAt(U)||0,(I=w*U%l)>0&&m){if(C=Math.pow(2,l-I)-1,S=Math.pow(2,h)*(1-Math.pow(2,-I)),M=(E&C)<<I,x=(m&S)>>h-I,y.push(M+x),U<t.length){for(C=Math.pow(2,2*l-I)*(1-Math.pow(2,-l)),z=1;z<v;z+=1)b=E&C,y.push(b>>(z-1)*l+(l-I)),C<<=l;w*(U+1)%l==0?(C=Math.pow(2,h)*(1-Math.pow(2,-l)),b=E&C,y.push(b>>h-l)):w*(U+1)%l+(l-I)<=l&&(b=E&C,y.push(b>>(v-1)*l+(l-I)))}}else if(U<t.length)for(C=Math.pow(2,l)-1,z=0;z<v;z+=1)b=E&C,y.push(b>>z*l),C<<=l;m=E}for(T=function(t){for(var e=new Array(3*t),n=0;n<e.length;n+=1)e[n]=255;return e}(u),k=void 0,P=void 0,j=void 0,D=void 0,O=void 0,k=0;4*(k+u)<=g.length&&k+u<=y.length;k+=u){for(O=[],U=0;U<u&&U+k<y.length;U+=1){for(D=0,z=k;z<u+k&&z<y.length;z+=1)D+=y[z]*Math.pow(U+1,z-k);O[U]=255-f+1+D%f}for(U=4*k;U<4*(k+O.length)&&U<g.length;U+=4)g[U+3]=O[U/4%u];j=O.length}if(void 0!==j){for(P=k+j;P-(k+j)<T.length&&4*(k+T.length)<g.length;P+=1)g[4*P+3]=T[P-(k+j)];for(U=4*(P+1)+3;U<g.length;U+=4)g[U]=255;L={settings:p.colorSpace},N=new ImageData(g,p.width,p.height,L),d.putImageData(N,0,0)}return[2,s.toDataURL()]}throw new Error("DOM Error: Could not initialize Image Context.")}throw new Error("Not enough capacity: The input image is too small to store the given message.")}))}))}return e})()));