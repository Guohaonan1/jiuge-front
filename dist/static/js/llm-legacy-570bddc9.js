!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,u=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw a}}return u}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,o=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw o}}}}function a(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return n};var t,n={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(t){f=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),u=new N(r||[]);return i(o,"_invoke",{value:E(e,n,u)}),o}function v(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=d;var p="suspendedStart",h="suspendedYield",g="executing",y="completed",x={};function m(){}function b(){}function w(){}var k={};f(k,c,(function(){return this}));var _=Object.getPrototypeOf,S=_&&_(_(P([])));S&&S!==r&&a.call(S,c)&&(k=S);var I=w.prototype=m.prototype=Object.create(k);function L(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function O(t,n){function r(i,o,u,c){var l=v(t[i],t,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==e(f)&&a.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,u,c)}),(function(e){r("throw",e,u,c)})):n.resolve(f).then((function(e){s.value=e,u(s)}),(function(e){return r("throw",e,u,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new n((function(n,a){r(e,t,n,a)}))}return o=o?o.then(a,a):a()}})}function E(e,n,r){var a=p;return function(i,o){if(a===g)throw Error("Generator is already running");if(a===y){if("throw"===i)throw o;return{value:t,done:!0}}for(r.method=i,r.arg=o;;){var u=r.delegate;if(u){var c=C(u,r);if(c){if(c===x)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===p)throw a=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=g;var l=v(e,n,r);if("normal"===l.type){if(a=r.done?y:h,l.arg===x)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=y,r.method="throw",r.arg=l.arg)}}}function C(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),x;var i=v(a,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,x;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,x):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,x)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,o=function e(){for(;++i<n.length;)if(a.call(n,i))return e.value=n[i],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(e(n)+" is not iterable")}return b.prototype=w,i(I,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:b,configurable:!0}),b.displayName=f(w,s,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,f(e,s,"GeneratorFunction")),e.prototype=Object.create(I),e},n.awrap=function(e){return{__await:e}},L(O.prototype),f(O.prototype,l,(function(){return this})),n.AsyncIterator=O,n.async=function(e,t,r,a,i){void 0===i&&(i=Promise);var o=new O(d(e,t,r,a),i);return n.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},L(I),f(I,s,"Generator"),f(I,c,(function(){return this})),f(I,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=P,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return u.type="throw",u.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,x):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),x},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),x}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),x}},n}function u(e,t,n,r,a,i,o){try{var u=e[i](o),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){u(i,r,a,o,c,"next",e)}function c(e){u(i,r,a,o,c,"throw",e)}o(void 0)}))}}System.register(["./index-legacy-b0dbdee4.js","./index-legacy-6bcd7952.js"],(function(e,a){"use strict";var i,u,l,s,f,d,v,p,h,g,y,x,m,b,w,k,_,S,I,L,O,E,C,T,j,N,P,A,H,J,z,B,U,R,M,F,G,$,W,D,K,q,V,Y,Q,X,Z,ee;return{setters:[function(e){i=e.d,u=e.s,l=e.a1,s=e.B,f=e.v,d=e.f,v=e.a2,p=e.C,h=e.a3,g=e.o,y=e.g,x=e.V,m=e.H,b=e.w,w=e.a4,k=e.a,_=e.n,S=e.j,I=e.W,L=e.$,O=e.a0,E=e.a5,C=e.c,T=e.h,j=e.a7,N=e.F,P=e.a8,A=e.G,H=e.a9,J=e.aa,z=e.Q,B=e.ab,U=e.K,R=e.ad,M=e.ae,F=e.ac,G=e.af},function(e){$=e.g,W=e.h,D=e.j,K=e.m,q=e.E,V=e.k,Y=e.f,Q=e.l,X=e.n,Z=e.v,ee=e.H}],execute:function(){var te=document.createElement("style");te.textContent=".conf-btn[data-v-4b850eaf]{position:absolute;background:#b1e0fb;top:40px}.conf-btn-2[data-v-4b850eaf]{margin-left:0;position:absolute;background:#b1e0fb;top:80px}.conf-btn-3[data-v-4b850eaf]{margin-left:0;position:absolute;background:#b1e0fb;top:120px}\n",document.head.appendChild(te);var ne=function(e){return R("data-v-4b850eaf"),e=e(),M(),e},re={class:"aichat-main"},ae={class:"chat-class"},ie={class:"feed-out"},oe={class:"model-pick"},ue={key:0,class:"human"},ce={class:"h-content"},le={class:"h-inner"},se={key:0,class:"h-c1"},fe={class:"c2"},de={key:1,class:"h-c1-all"},ve={class:"h-c3-out"},pe={class:"h-c3-edit"},he=ne((function(){return x("svg",{class:"icon4","aria-hidden":"true"},[x("use",{"xlink:href":"#icon-duihao2"})],-1)})),ge=ne((function(){return x("svg",{class:"icon5","aria-hidden":"true"},[x("use",{"xlink:href":"#icon-ruocuowu"})],-1)})),ye={class:"user"},xe={key:1,class:"ai"},me={class:"ai-inner"},be={class:"user"},we={class:"ai-c1"},ke={key:0,class:"ai-title"},_e={key:1,class:"warn-icon"},Se=[ne((function(){return x("svg",{class:"icon2","aria-hidden":"true"},[x("use",{"xlink:href":"#icon-jinggao3"})],-1)}))],Ie=["innerHTML"],Le={key:2,class:"start-prompt"},Oe={class:"ai-c3-out"},Ee={key:0,class:"ai-c3"},Ce={class:"ai-c3-btn"},Te=ne((function(){return x("svg",{class:"icon3","aria-hidden":"true"},[x("use",{"xlink:href":"#icon-fuzhi2"})],-1)})),je=ne((function(){return x("div",{class:"empty"},null,-1)})),Ne=ne((function(){return x("svg",{class:"icon5","aria-hidden":"true"},[x("use",{"xlink:href":"#icon-xiangxia31"})],-1)})),Pe={class:"bottom-item",id:"inputArea"},Ae=ne((function(){return x("div",{class:"file-position"},null,-1)})),He={class:"input-position"},Je={key:0,class:"ipt"},ze=[ne((function(){return x("svg",{class:"icon8","aria-hidden":"true"},[x("use",{"xlink:href":"#icon-fasong"})],-1)}))],Be=[ne((function(){return x("svg",{class:"icon8","aria-hidden":"true"},[x("use",{"xlink:href":"#icon-fasong1"})],-1)}))],Ue=[F('<svg version="1.1" id="L6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" data-v-4b850eaf><rect fill="none" stroke="#fff" stroke-width="4" x="25" y="25" width="50" height="50" data-v-4b850eaf><animateTransform attributeName="transform" dur="0.5s" from="0 50 50" to="180 50 50" type="rotate" id="strokeBox" attributeType="XML" begin="rectBox.end" data-v-4b850eaf></animateTransform></rect><rect x="27" y="27" fill="#fff" width="46" height="50" data-v-4b850eaf><animate attributeName="height" dur="1.3s" attributeType="XML" from="50" to="0" id="rectBox" fill="freeze" begin="0s;strokeBox.end" data-v-4b850eaf></animate></rect></svg>',1)],Re=ne((function(){return x("div",null,null,-1)})),Me={key:1,class:"resend"},Fe=ne((function(){return x("span",{class:"resend-text"},"重新生成",-1)})),Ge=ne((function(){return x("svg",{class:"icon3","aria-hidden":"true"},[x("use",{"xlink:href":"#icon-zhongxinshengcheng4"})],-1)})),$e={key:2,class:"resend"},We=ne((function(){return x("span",{class:"resend-text"},"重新发送",-1)})),De=ne((function(){return x("svg",{class:"icon3","aria-hidden":"true"},[x("use",{"xlink:href":"#icon-zhongxinshengcheng4"})],-1)})),Ke="服务器返回出错，请重新生成！",qe=i({__name:"llm",emits:["update-data"],setup:function(e,i){i.emit;var R=H((function(){return J((function(){return a.import("./ApiSet-legacy-cf125e4e.js")}),void 0,a.meta.url)})),M=u(!1),F=u(),G=function(){M.value=!M.value},te=function(){M.value=!1},ne=$(),qe=l(ne),Ve=qe.llmParam,Ye=qe.apiBaseUrl,Qe=qe.modelSelect,Xe=qe.authHeader,Ze=qe.systemSetup,et=qe.modelName;s(Ye,(function(e){}));var tt=function(e){ne.seyLlmParams(e)},nt=u(0);f({40:{style:{color:"#1989FA"},label:"80(推荐)"}}),f({80:{style:{color:"#1989FA"},label:"0.8(推荐)"}}),f({40:{style:{color:"#1989FA"},label:"0.8(推荐)"}});var rt=u(40),at=u(80),it=u(40),ot=u(40),ut=u(80),ct=u(40),lt=function(){if(Ve.value.topK)ot.value=Ve.value.topK,ut.value=Ve.value.topP,ct.value=Ve.value.temperature;else{ot.value=JSON.parse(JSON.stringify(rt.value)),ut.value=JSON.parse(JSON.stringify(at.value)),ct.value=JSON.parse(JSON.stringify(it.value));var e={topK:ot.value,topP:ut.value,temperature:ct.value};tt(e)}},st=u(!1),ft=u(),dt=d((function(){return window.innerWidth<=1440?{width:st.value?"260px":"130px",height:st.value?"168px":"32px",marginLeft:st.value?"-65px":"0px"}:window.innerWidth>1440&&window.innerWidth<=1920?{width:st.value?"320px":"160px",height:st.value?"168px":"36px",marginLeft:st.value?"-80px":"0px"}:{width:st.value?"400px":"200px",height:st.value?"168px":"42px",marginLeft:st.value?"-100px":"0px"}}));d((function(){return{overflow:"hidden",height:st.value?"auto":"0"}}));var vt=f({font:{fontSize:14,color:"rgba(0, 0, 0, 0.10)"},zIndex:1,rotate:-22,gap:[150,150],offset:[]}),pt=u(!1),ht=function(){pt.value=!pt.value},gt=W("image/user.png"),yt=W("image/ai-logo.png"),xt=u(""),mt=u(),bt=u(),wt=u([{content:"需要设置通用模型的配置"}]),kt=u([{speaker:"default",title:"Hi，我是AI助手",content:"对话基于通用模型的api，与网页本身无关。",loading:!1,isStart:!0,idx:0,parentId:-1}]),_t=u([{speaker:"default",title:"Hi，我是AI助手",content:"对话基于通用模型的api，与网页本身无关。",loading:!1,isStart:!0,idx:0,parentId:-1}]),St=u(""),It=function(){Lt()},Lt=function(){var e=u(localStorage.getItem("name"));e.value?St.value=Z()+"-"+e.value:St.value=Z()+"-customer",sessionStorage.setItem("itemUuid",St.value)},Ot=function(e){e.preventDefault()},Et=function(e){e.preventDefault(),Jt(1)},Ct=u(0),Tt=(u(),u()),jt=u([]),Nt=u(!1),Pt=u(!1);u(!0);var At=function(){var e=c(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$t(1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ht=function(e){try{if(""===e.input)_t.value[_t.value.length-1].content=Ke,e.input=Ke;var t={data:{dialogue_create_time:"",dialogue_id:nt.value+1,topic_id:1}};return nt.value+=1,t}catch(n){return null}},Jt=function(){var e=c(o().mark((function e(t){var n,r,a,i,u,c,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Pt.value){e.next=4;break}e.next=49;break;case 4:if(Pt.value=!0,0!=Ct.value){e.next=15;break}return e.next=9,It();case 9:jt.value=[],n={speaker:"none",content:"root-null",loading:!1,idx:0,parentId:-1,children:[],currentPage:-1,create_time:"1",session_id:null},jt.value.push(n),Ct.value=1,e.next=18;break;case 15:St.value=_t.value[_t.value.length-1].session_id;case 18:if(1==t?(r=JSON.parse(JSON.stringify(xt.value)),xt.value=""):r=JSON.parse(JSON.stringify(_t.value[_t.value.length-1].content)),a=_t.value.length-1,0!=Ct.value){e.next=37;break}({input:r,session_id:St.value}),e.prev=24,ht(),u={input:r,parent_id:0,topic_id:1,session_id:St.value,content_type:1},i=Ht(u),e.next=35;break;case 31:return e.prev=31,e.t0=e.catch(24),e.abrupt("return");case 35:e.next=42;break;case 37:c={input:r,parent_id:_t.value[_t.value.length-1].idx,topic_id:Ct.value,session_id:St.value,content_type:1},i=Ht(c);case 42:return l={speaker:"user",content:r,loading:!1,idx:i.data.dialogue_id,isEdit:!1,session_id:St.value,parentId:_t.value[_t.value.length-1].idx,children:[],currentPage:-1},zt(l),e.next=49,Ut(r,a,1);case 49:case"end":return e.stop()}}),e,null,[[24,31]])})));return function(t){return e.apply(this,arguments)}}(),zt=function(e){var t=jt.value.find((function(t){return t.idx===e.parentId}));t.children.push(e.idx);var n=t.children.indexOf(e.idx);-1!==n&&(t.currentPage=n+1),e.nodeInfo={pPage:t.currentPage,length:t.children.length},jt.value.push(e),_t.value.push(e)},Bt=u(),Ut=function(){var e=c(o().mark((function e(t,n,r){var a,i,u,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],""!=Ze.value&&a.push({role:"system",content:Ze.value}),_t.value.forEach((function(e,t){"none"==e.speaker||""==e.content||"default"==e.speaker||a.push({role:e.speaker,content:e.content})})),i={speaker:"assistant",content:"",loading:!0,idx:-1,isEdit:!1,session_id:St.value,parentId:_t.value[_t.value.length-1].idx,children:[],currentPage:-1,htmlContent:""},2!=r&&4!=r||(i.parentId=_t.value[_t.value.length-1].idx),e.next=12,zt(i);case 12:return Bt.value=new AbortController,u=setTimeout((function(){Bt.value&&$t(1)}),2e4),e.prev=15,e.next=18,Rt(a,n);case 18:if(c=e.sent,clearTimeout(u),!c){e.next=26;break}return e.next=24,Mt(c,i);case 24:e.next=26;break;case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(15),Gt(e.t0,i);case 31:case"end":return e.stop()}}),e,null,[[15,28]])})));return function(t,n,r){return e.apply(this,arguments)}}(),Rt=function(){var e=c(o().mark((function e(t,n){var r,a,i,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Bt.value.signal,e.prev=2,a=JSON.stringify({model:Qe.value,messages:t,stream:!0}),i={"Content-Type":"application/json",Accept:"application/json"},Xe.value&&(i[Xe.value.name]=Xe.value.value),e.next=10,fetch("".concat(Ye.value),{method:"POST",signal:r,headers:i,body:a});case 10:if((u=e.sent).ok){e.next=14;break}throw Pt.value=!1,new Error("HTTP error! status: ".concat(u.status));case 14:return e.abrupt("return",u);case 17:throw e.prev=17,e.t0=e.catch(2),e.t0;case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,n){return e.apply(this,arguments)}}(),Mt=function(){var e=c(o().mark((function e(t,n){var a,i,u,c,l,s,f,d,v,p,h,g,y,x,m,b,w,k,_,S,I,L;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0,i=null===(a=t.body)||void 0===a?void 0:a.getReader(),u="",c=!1,l=_t.value[_t.value.length-1],0==Ct.value&&ht();case 8:if(c){e.next=60;break}return e.next=11,i.read();case 11:if(s=e.sent,f=s.value,d=s.done,!f){e.next=57;break}v=new TextDecoder,u+=v.decode(f),p=u.split("\n"),u=p.pop(),h=r(p),e.prev=20,h.s();case 22:if((g=h.n()).done){e.next=49;break}if(""!==(y=g.value).trim()){e.next=28;break}e.next=47;break;case 28:if(e.prev=28,e.prev=29,x=y.replace("data: ",""),(m=JSON.parse(x)).choices&&m.choices.length>0&&(b=m.choices[0].delta.content)&&(l.content+=b,l.htmlContent=Kt(l.content,l)),!m.choices||"stop"!==m.choices[0].finish_reason){e.next=37;break}return c=!0,e.abrupt("break",49);case 37:e.next=42;break;case 39:e.prev=39,e.t0=e.catch(29);case 42:e.next=47;break;case 44:e.prev=44,e.t1=e.catch(28);case 47:e.next=22;break;case 49:e.next=54;break;case 51:e.prev=51,e.t2=e.catch(20),h.e(e.t2);case 54:return e.prev=54,h.f(),e.finish(54);case 57:d&&(c=!0),e.next=8;break;case 60:return w={input:l.content,parent_id:n.parentId,topic_id:Ct.value,session_id:St.value,content_type:2},e.next=64,Ht(w);case 64:k=e.sent,l.idx=k.data.dialogue_id,_=_t.value.find((function(e){return e.idx===n.parentId})),S=jt.value.find((function(e){return e.idx===n.parentId})),I=_.children.findIndex((function(e){return-1===e})),L=S.children.findIndex((function(e){return-1===e})),_.children[I]=k.data.dialogue_id,S.children[L]=k.data.dialogue_id,Pt.value=!1,(l=_t.value[_t.value.length-1]).loading=!1,localStorage.removeItem("conv"),localStorage.setItem("conv",JSON.stringify(_t.value));case 78:case"end":return e.stop()}}),e,null,[[20,51,54,57],[28,44],[29,39]])})));return function(t,n){return e.apply(this,arguments)}}(),Ft=u(0),Gt=function(){var e=c(o().mark((function e(t,n){var r,a,i,u,c,l,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.name,r=_t.value[_t.value.length-1],Pt.value=!1,a={input:r.content,parent_id:n.parentId,topic_id:Ct.value,session_id:St.value,content_type:2},0!=Ft.value&&Tt.value&&(a.topic_id=Tt.value.topic_id),e.next=12,Ht(a);case 12:i=e.sent,r.idx=i.data.dialogue_id,u=_t.value.find((function(e){return e.idx===n.parentId})),c=jt.value.find((function(e){return e.idx===n.parentId})),l=u.children.findIndex((function(e){return-1===e})),s=c.children.findIndex((function(e){return-1===e})),u.children[l]=i.data.dialogue_id,c.children[s]=i.data.dialogue_id,Tt.value=null,Ft.value=0;case 24:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$t=function(e){null!=Bt.value?(2==e||(Pt.value=!1),3==e?Ft.value=1:4==e&&(Ft.value=2),_t.value[_t.value.length-1].loading=!1,Bt.value.abort(),Bt.value=null):Pt.value=!1},Wt=function(){if(window.innerWidth<=1440){if(mt.value){var e=mt.value;e.style.height="20px";var t=e.scrollHeight;if(28>=t||0===xt.value.length)return void Dt();e.style.removeProperty("overflow-y"),e.style.height=t+"px";var n=bt.value,r=e.offsetHeight;n.style.height=r+"px"}vt.font.fontSize=12,vt.gap=[50,50]}else if(mt.value){var a=mt.value;a.style.height="32px";var i=a.scrollHeight;if(32>=i||0===xt.value.length)return void Dt();a.style.removeProperty("overflow-y"),a.style.height=i+"px";var o=bt.value,u=a.offsetHeight;o.style.height=u+"px"}},Dt=function(){if(window.innerWidth<1440){if(mt.value){var e=mt.value;e.style.height="20px",e.style.overflowY="hidden",bt.value.style.height="32px"}}else if(mt.value){var t=mt.value;t.style.height="32px",t.style.overflowY="hidden",bt.value.style.height="40px"}},Kt=function(e,t){if(""==e)return"<p></p>";var n=K.parse(e);return n=n.trim()},qt=v().proxy,Vt=function(e){var t=e.getElementsByTagName("code")[0].innerHTML,n=decodeURIComponent(t);qt.$copyText(n).then((function(t){var n=e.innerHTML;e.innerHTML='<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">\n                    <polyline points="20 6 9 17 4 12"></polyline>\n                </svg>\n                <span>Copied!</span>',setTimeout((function(){e.innerHTML=n}),1e3)}),(function(e){}))},Yt=u(!0),Qt=u(null),Xt=function(){var e=c(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null===(t=Qt.value)||void 0===t?void 0:t.$el.querySelector(".el-scrollbar__wrap"),Yt.value){e.next=5;break}e.next=14;break;case 5:if(!Nt.value){e.next=11;break}return e.next=8,z();case 8:n.scrollTo({top:n.scrollHeight,behavior:"smooth"}),e.next=14;break;case 11:return e.next=13,z();case 13:n.scrollTo({top:n.scrollHeight});case 14:Nt.value=!1;case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Zt=function(){var e=c(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=null===(t=Qt.value)||void 0===t?void 0:t.$el.querySelector(".el-scrollbar__wrap")).scrollTo({top:n.scrollHeight,behavior:"smooth"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),en=function(){var e,t=null===(e=Qt.value)||void 0===e?void 0:e.$el.querySelector(".el-scrollbar__wrap");if(t){var n=t.scrollHeight-(t.scrollTop+t.clientHeight);Yt.value=n<=10}},tn=function(e){qt.$copyText(e).then((function(e){D({message:"复制成功",type:"success"})}),(function(e){D({message:"复制失败",type:"warning"})}))},nn=function(){var e=c(o().mark((function e(t,n){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Pt.value=!0,_t.value.pop(),e.next=7,It();case 7:return r={session_id:t.session_id,new_session_id:St.value},a=jt.value.find((function(e){return e.idx===t.parentId})),e.prev=10,e.next=13,forkData(r,a.content,2);case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,n){return e.apply(this,arguments)}}(),rn=u(!1),an=u(),on=u(),un=u(null),cn=u(),ln=function(){var e=c(o().mark((function e(t,n){var r,a,i,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isEdit=!1,rn.value=!1,gn.value=0,Pt.value=!0,e.next=8,It();case 8:return r={input:t.content,parent_id:t.parentId,topic_id:Ct.value,session_id:St.value,content_type:1},e.next=12,Ht(r);case 12:return a=e.sent,i={session_id:t.session_id,new_session_id:St.value},(u=JSON.parse(JSON.stringify(t))).children=[],u.content=t.content,u.idx=a.data.dialogue_id,u.nodeInfo.pPage+=1,u.nodeInfo.length+=1,u.currentPage=u.nodeInfo.pPage,u.create_time=a.data.dialogue_create_time,e.prev=27,e.next=30,fn(u);case 30:return e.next=32,forkData(i,u.content,1);case 32:e.next=36;break;case 34:e.prev=34,e.t0=e.catch(27);case 36:case"end":return e.stop()}}),e,null,[[27,34]])})));return function(t,n){return e.apply(this,arguments)}}(),sn=function(){var e=c(o().mark((function e(t,n){var r,a,i,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isEdit=!1,rn.value=!1,Pt.value=!0,e.next=7,It();case 7:return r={input:an.value,parent_id:t.parentId,topic_id:Ct.value,session_id:St.value,content_type:1},e.next=11,Ht(r);case 11:return a=e.sent,i={session_id:t.session_id,new_session_id:St.value},(u=JSON.parse(JSON.stringify(t))).children=[],u.content=an.value,u.idx=a.data.dialogue_id,u.nodeInfo.pPage+=1,u.nodeInfo.length+=1,u.currentPage=u.nodeInfo.pPage,u.create_time=a.data.dialogue_create_time,e.prev=26,e.next=29,fn(u);case 29:return e.next=31,forkData(i,u.content,1);case 31:e.next=35;break;case 33:e.prev=33,e.t0=e.catch(26);case 35:case"end":return e.stop()}}),e,null,[[26,33]])})));return function(t,n){return e.apply(this,arguments)}}(),fn=function(){var e=c(o().mark((function e(t){var r,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={speaker:t.speaker,content:t.content,loading:!1,idx:t.idx,isEdit:!1,session_id:t.session_id,parentId:t.parentId,create_time:t.create_time,children:t.children,currentPage:-1},(a=jt.value.find((function(e){return e.idx===r.parentId}))).currentPage=t.nodeInfo.pPage,-1!==(i=_t.value.findIndex((function(e){return e.idx===a.idx})))){e.next=8;break}return e.abrupt("return");case 8:return _t.value.splice(i+1),e.next=12,zt(r);case 12:_t.value=n(_t.value);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),dn=function(){var e=c(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),vn=u(window.innerWidth),pn=function(){vn.value=window.innerWidth},hn=d((function(){return vn.value>1920?"large-textarea":vn.value>1440&&vn.value<=1920?"medium-textarea":"small-textarea"})),gn=u(0),yn=function(){var e=c(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=_t.value.length,_t.value[t-1].content!=Ke){e.next=5;break}gn.value=1,e.next=15;break;case 5:if("user"!==_t.value[t-1].speaker){e.next=9;break}gn.value=2,e.next=15;break;case 9:return gn.value=0,e.next=12,z();case 12:if(!mt.value){e.next=15;break}return e.next=15,Wt();case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xn=function(e){Pt.value&&$t(1)},mn=function(){localStorage.removeItem("conv"),_t.value=JSON.parse(JSON.stringify(kt.value))},bn=function(){var e=_t.value.map((function(e){return"Speaker: ".concat(e.speaker,"\nContent:\n").concat(e.content,"\n")})).join("\n---\n"),t=new Blob([e],{type:"text/plain"}),n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download="QA.txt",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)};return p(c(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=localStorage.getItem("conv"))&&(Ct.value=1,_t.value=JSON.parse(n),jt.value=JSON.parse(JSON.stringify(_t.value))),window.copy=Vt,lt(),e.next=6,a=void 0,a={code:function(e,t,n){var r=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");return t&&"html"==t&&(r=encodeURIComponent(e)),t&&(r=ee.highlightAuto(e).value),""===t.trim()&&(t="bash"),'<div class="bg-white mb-4 rounded-md">\n      <div class="code_header flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans">\n        <span>'.concat(t||"",'</span>\n        <button onclick="copy(this)" class="copy-btn">\n          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">\n            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>\n          </svg>\n          <span>Copy code</span>\n          <code style="display:none">').concat(encodeURIComponent(e),'</code>\n        </button>\n      </div>\n\n      <div class="p-4 overflow-y-auto">\n        <code class="whitespace-pre hljs language-').concat(t,'">').concat(r,"</code>\n      </div>\n    </div>")},paragraph:function(e){return'<p style="white-space:pre-wrap;">'.concat(e,"</p >")}},void K.use({renderer:a});case 6:mt.value&&Wt(),(r=null===(t=Qt.value)||void 0===t?void 0:t.$el.querySelector(".el-scrollbar__wrap"))&&r.addEventListener("scroll",en),window.addEventListener("resize",pn),window.addEventListener("beforeunload",xn);case 11:case"end":return e.stop()}var a}),e)})))),h((function(){var e,t=null===(e=Qt.value)||void 0===e?void 0:e.$el.querySelector(".el-scrollbar__wrap");t&&t.removeEventListener("scroll",en),window.removeEventListener("resize",pn),window.removeEventListener("beforeunload",xn)})),s(_t,(function(e,t){rn.value||Xt(),yn()}),{deep:!0}),s((function(){return xt.value}),(function(e,t){e!==t&&Wt()})),s((function(){return an.value}),(function(e,t){e!==t&&dn()})),s([ot,ut,ct],(function(e){var n=t(e,3),r=n[0],a=n[1],i=n[2];tt({topK:r,topP:a,temperature:i})})),function(e,t){var n=B,r=q,a=V,i=U,o=Y,u=Q,c=X;return g(),y("div",re,[x("div",ae,[m(n,{class:"conf-btn-1",onClick:G},{default:b((function(){return[w("设置")]})),_:1}),m(n,{class:"conf-btn-2",onClick:mn},{default:b((function(){return[w("清空")]})),_:1}),m(n,{class:"conf-btn-3",onClick:bn},{default:b((function(){return[w("下载")]})),_:1}),x("div",ie,[m(k(R),{ref_key:"apiSetRef",ref:F,type:2,isOpen:k(M),onCloseCard:te},null,8,["isOpen"])]),x("div",oe,[x("div",{class:_(["dropdown-container",{expanded:k(st)}]),style:S(k(dt)),ref_key:"confPlace",ref:ft},[x("div",{class:"dd-header",onClick:G},[x("div",null,I(k(et)),1)])],6)]),m(c,{ref_key:"scrollArea",ref:Qt,class:"scroll-area",style:{width:"100%",height:"calc(100% - 150px)","margin-top":"30px"}},{default:b((function(){return[m(u,{content:["AI生成","生成内容仅供参考"],gap:k(vt).gap,"z-index":k(vt).zIndex,font:k(vt).font},{default:b((function(){return[k(_t).length>0?(g(),y("div",{key:0,class:"all-content",ref_key:"allOutDiv",ref:cn},[(g(!0),y(L,null,O(k(_t),(function(e,u){return g(),y(L,{key:u},["user"==e.speaker?(g(),y("div",ue,[x("div",ce,[x("div",le,[e.isEdit?(g(),y("div",de,[x("div",{class:"c2",ref_for:!0,ref_key:"editRefOut",ref:un},[m(r,{ref_for:!0,ref_key:"editRef",ref:on,modelValue:k(an),"onUpdate:modelValue":t[0]||(t[0]=function(e){return E(an)?an.value=e:null}),autosize:"",type:"textarea",class:_(["edit-text",k(hn)])},null,8,["modelValue","class"])],512),x("div",ve,[x("div",pe,[0!=k(an).length?(g(),C(n,{key:0,link:"",class:"btn-tooltip",onClick:function(t){return sn(e,u)}},{default:b((function(){return[he]})),_:2},1032,["onClick"])):T("",!0),m(n,{link:"",class:"btn-tooltip",onClick:function(t){return e.isEdit=!1,void(rn.value=!1)},style:{"margin-left":"4px"}},{default:b((function(){return[ge]})),_:2},1032,["onClick"])])])])):(g(),y("div",se,[x("div",fe,I(e.content),1)])),x("div",ye,[m(a,{src:k(gt),class:"hm-img"},null,8,["src"])])])])])):T("",!0),"assistant"==e.speaker||"default"==e.speaker?(g(),y("div",xe,[x("div",{class:_(["ai-content",{"last-item-ai":u==k(_t).length-1}])},[x("div",me,[x("div",be,[m(a,{src:k(yt),class:"ai-img"},null,8,["src"])]),x("div",we,[x("div",{class:_(["ai-c2",{"warn-outer":e.content==Ke}])},["default"==e.speaker?(g(),y("div",ke,I(e.title),1)):T("",!0),e.content==Ke?(g(),y("div",_e,Se)):T("",!0),x("div",{class:_([{"result-streaming":k(Pt)&&k(_t).length-1==u,"warn-content":e.content==Ke},"c2"]),innerHTML:e.htmlContent},null,10,Ie),e.isStart?(g(),y("div",Le,[(g(!0),y(L,null,O(k(wt),(function(e,t){return g(),y("div",{key:t,class:"prompt-style"},[m(i,{class:"right-icon"},{default:b((function(){return[m(k(j))]})),_:1}),x("div",null,I(e.content),1)])})),128))])):T("",!0)],2),x("div",Oe,[e.loading||e.title?T("",!0):(g(),y("div",Ee,[x("div",Ce,[m(o,{class:"box-item",effect:"dark",content:"复制markdown",placement:"bottom"},{default:b((function(){return[m(n,{link:"",onClick:function(t){return n=e.content,void tn(n);var n},class:"btn-tooltip",circle:""},{default:b((function(){return[Te]})),_:2},1032,["onClick"])]})),_:2},1024)])]))])])])],2)])):T("",!0)],64)})),128)),je],512)):T("",!0)]})),_:1},8,["gap","z-index","font"])]})),_:1},512),k(Yt)||k(Pt)?T("",!0):(g(),y("div",{key:0,class:"stable-position",onClick:Zt},[m(n,{link:"",class:"btn-tooltip"},{default:b((function(){return[Ne]})),_:1})])),x("div",Pe,[Ae,x("div",He,[0==k(gn)?(g(),y("div",Je,[N(x("textarea",{ref_key:"inputChat",ref:mt,"onUpdate:modelValue":t[1]||(t[1]=function(e){return E(xt)?xt.value=e:null}),onKeydown:A(Ot,["enter"]),onKeyup:A(Et,["enter"])},null,544),[[P,k(xt)]]),x("div",{ref_key:"inputBtn",ref:bt,class:"btn-outer"},[!k(Pt)&&k(xt).length>0?(g(),y("div",{key:0,onClick:t[2]||(t[2]=function(e){return Jt(1)}),class:"click-btn"},ze)):T("",!0),k(Pt)||0!=k(xt).length?T("",!0):(g(),y("div",{key:1,onClick:t[3]||(t[3]=function(e){D({message:"输入不能为空，请调整输入！",type:"warning",offset:5,appendTo:"#inputArea"})}),class:"click-btn not-allow-send"},Be)),k(Pt)?(g(),y("div",{key:2,onClick:t[4]||(t[4]=function(e){return At()}),class:"click-btn"},Ue)):T("",!0),Re],512)])):T("",!0),1==k(gn)?(g(),y("div",Me,[m(n,{class:"resend-btn",onClick:t[5]||(t[5]=function(e){return nn(k(_t)[k(_t).length-1],0)})},{default:b((function(){return[Fe,Ge]})),_:1})])):T("",!0),2==k(gn)?(g(),y("div",$e,[m(n,{class:"resend-btn",onClick:t[6]||(t[6]=function(e){return ln(k(_t)[k(_t).length-1])})},{default:b((function(){return[We,De]})),_:1})])):T("",!0)])])])])}}});e("default",G(qe,[["__scopeId","data-v-4b850eaf"]]))}}}))}();
