var M=Object.defineProperty;var i=(r,n)=>M(r,"name",{value:n,configurable:!0});var $=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports);import{j as V,d as W,w as d,p as F}from"./iframe.6a32f557.js";var Te=$((Oe,h)=>{var I;function k(r,n){return n||(n=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(n)}}))}i(k,"_taggedTemplateLiteral");function X(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}i(X,"_classCallCheck$1");function w(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}i(w,"_defineProperties$1");function K(r,n,e){return n&&w(r.prototype,n),e&&w(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}i(K,"_createClass$1");var Q=i(function(){return Math.random().toString(16).slice(2)},"generateRandomId"),q=function(){function r(){var n=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.transport,a=e.async,u=a===void 0?!1:a;X(this,r),this.isAsync=void 0,this.sender=Q(),this.events={},this.data={},this.transport=void 0,this.addPeerListener=V(function(s,c){n.addListener(s,c)},W(I||(I=k([`
      channel.addPeerListener is deprecated
    `])))),this.isAsync=u,t&&(this.transport=t,this.transport.setHandler(function(s){return n.handleEvent(s)}))}return i(r,"Channel"),K(r,[{key:"hasTransport",get:i(function(){return!!this.transport},"get")},{key:"addListener",value:i(function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)},"addListener")},{key:"emit",value:i(function(e){for(var t=this,a=arguments.length,u=new Array(a>1?a-1:0),s=1;s<a;s++)u[s-1]=arguments[s];var c={type:e,args:u,from:this.sender},f={};u.length>=1&&u[0]&&u[0].options&&(f=u[0].options);var S=i(function(){t.transport&&t.transport.send(c,f),t.handleEvent(c)},"handler");this.isAsync?setImmediate(S):S()},"emit")},{key:"last",value:i(function(e){return this.data[e]},"last")},{key:"eventNames",value:i(function(){return Object.keys(this.events)},"eventNames")},{key:"listenerCount",value:i(function(e){var t=this.listeners(e);return t?t.length:0},"listenerCount")},{key:"listeners",value:i(function(e){var t=this.events[e];return t||void 0},"listeners")},{key:"once",value:i(function(e,t){var a=this.onceListener(e,t);this.addListener(e,a)},"once")},{key:"removeAllListeners",value:i(function(e){e?this.events[e]&&delete this.events[e]:this.events={}},"removeAllListeners")},{key:"removeListener",value:i(function(e,t){var a=this.listeners(e);a&&(this.events[e]=a.filter(function(u){return u!==t}))},"removeListener")},{key:"on",value:i(function(e,t){this.addListener(e,t)},"on")},{key:"off",value:i(function(e,t){this.removeListener(e,t)},"off")},{key:"handleEvent",value:i(function(e){var t=this.listeners(e.type);t&&t.length&&t.forEach(function(a){a.apply(e,e.args)}),this.data[e.type]=e.args},"handleEvent")},{key:"onceListener",value:i(function(e,t){var a=this,u=i(function s(){return a.removeListener(e,s),t.apply(void 0,arguments)},"onceListener");return u},"onceListener")}]),r}();const z=q;var J=d.LOGLEVEL,E=d.console,R={trace:1,debug:2,info:3,warn:4,error:5,silent:10},Z=J,T=R[Z]||R.info,x={trace:i(function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return T<=R.trace&&E.trace.apply(E,[n].concat(t))},"trace"),debug:i(function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return T<=R.debug&&E.debug.apply(E,[n].concat(t))},"debug"),info:i(function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return T<=R.info&&E.info.apply(E,[n].concat(t))},"info"),warn:i(function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return T<=R.warn&&E.warn.apply(E,[n].concat(t))},"warn"),error:i(function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return T<=R.error&&E.error.apply(E,[n].concat(t))},"error"),log:i(function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return T<R.silent&&E.log.apply(E,[n].concat(t))},"log")};function ee(){var r={setHandler:i(function(){},"setHandler"),send:i(function(){},"send")};return new z({transport:r})}i(ee,"mockChannel");var L;(function(r){r.TAB="tab",r.PANEL="panel",r.TOOL="tool",r.TOOLEXTRA="toolextra",r.PREVIEW="preview",r.NOTES_ELEMENT="notes-element"})(L||(L={}));function P(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}i(P,"_defineProperties");function ne(r,n,e){return n&&P(r.prototype,n),e&&P(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}i(ne,"_createClass");function re(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}i(re,"_classCallCheck");var te=ne(i(function r(){var n=this;re(this,r),this.loaders={},this.elements={},this.config={},this.channel=void 0,this.serverChannel=void 0,this.promise=void 0,this.resolve=void 0,this.getChannel=function(){return n.channel||n.setChannel(ee()),n.channel},this.getServerChannel=function(){if(!n.serverChannel)throw new Error("Accessing non-existent serverChannel");return n.serverChannel},this.ready=function(){return n.promise},this.hasChannel=function(){return!!n.channel},this.hasServerChannel=function(){return!!n.serverChannel},this.setChannel=function(e){n.channel=e,n.resolve()},this.setServerChannel=function(e){n.serverChannel=e},this.getElements=function(e){return n.elements[e]||(n.elements[e]={}),n.elements[e]},this.addPanel=function(e,t){n.add(e,Object.assign({type:L.PANEL},t))},this.add=function(e,t){var a=t.type,u=n.getElements(a);u[e]=Object.assign({id:e},t)},this.setConfig=function(e){Object.assign(n.config,e)},this.getConfig=function(){return n.config},this.register=function(e,t){n.loaders[e]&&x.warn("".concat(e," was loaded twice, this could have bad side-effects")),n.loaders[e]=t},this.loadAddons=function(e){Object.values(n.loaders).forEach(function(t){return t(e)})},this.promise=new Promise(function(e){n.resolve=function(){return e(n.getChannel())}})},"AddonStore")),p="__STORYBOOK_ADDONS";function ae(){return d[p]||(d[p]=new te),d[p]}i(ae,"getAddonsStore");var G=ae(),o;(function(r){r.CHANNEL_CREATED="channelCreated",r.CONFIG_ERROR="configError",r.STORY_INDEX_INVALIDATED="storyIndexInvalidated",r.STORY_SPECIFIED="storySpecified",r.SET_STORIES="setStories",r.SET_CURRENT_STORY="setCurrentStory",r.CURRENT_STORY_WAS_SET="currentStoryWasSet",r.FORCE_RE_RENDER="forceReRender",r.FORCE_REMOUNT="forceRemount",r.PRELOAD_STORIES="preloadStories",r.STORY_PREPARED="storyPrepared",r.STORY_CHANGED="storyChanged",r.STORY_UNCHANGED="storyUnchanged",r.STORY_RENDERED="storyRendered",r.STORY_MISSING="storyMissing",r.STORY_ERRORED="storyErrored",r.STORY_THREW_EXCEPTION="storyThrewException",r.STORY_RENDER_PHASE_CHANGED="storyRenderPhaseChanged",r.UPDATE_STORY_ARGS="updateStoryArgs",r.STORY_ARGS_UPDATED="storyArgsUpdated",r.RESET_STORY_ARGS="resetStoryArgs",r.SET_GLOBALS="setGlobals",r.UPDATE_GLOBALS="updateGlobals",r.GLOBALS_UPDATED="globalsUpdated",r.REGISTER_SUBSCRIPTION="registerSubscription",r.PREVIEW_KEYDOWN="previewKeydown",r.SELECT_STORY="selectStory",r.STORIES_COLLAPSE_ALL="storiesCollapseAll",r.STORIES_EXPAND_ALL="storiesExpandAll",r.DOCS_RENDERED="docsRendered",r.SHARED_STATE_CHANGED="sharedStateChanged",r.SHARED_STATE_SET="sharedStateSet",r.NAVIGATE_URL="navigateUrl",r.UPDATE_QUERY_PARAMS="updateQueryParams"})(o||(o={}));o.CHANNEL_CREATED;o.CONFIG_ERROR;o.STORY_INDEX_INVALIDATED;o.STORY_SPECIFIED;o.SET_STORIES;o.SET_CURRENT_STORY;o.CURRENT_STORY_WAS_SET;o.FORCE_RE_RENDER;o.FORCE_REMOUNT;o.STORY_PREPARED;var ie=o.STORY_CHANGED;o.STORY_UNCHANGED;o.PRELOAD_STORIES;o.STORY_RENDERED;o.STORY_MISSING;o.STORY_ERRORED;o.STORY_THREW_EXCEPTION;o.STORY_RENDER_PHASE_CHANGED;o.UPDATE_STORY_ARGS;o.STORY_ARGS_UPDATED;o.RESET_STORY_ARGS;o.SET_GLOBALS;o.UPDATE_GLOBALS;o.GLOBALS_UPDATED;o.REGISTER_SUBSCRIPTION;o.PREVIEW_KEYDOWN;o.SELECT_STORY;o.STORIES_COLLAPSE_ALL;o.STORIES_EXPAND_ALL;o.DOCS_RENDERED;o.SHARED_STATE_CHANGED;o.SHARED_STATE_SET;o.NAVIGATE_URL;o.UPDATE_QUERY_PARAMS;var v="storybook/a11y",Y="a11yHighlight",se="".concat(v,"/result"),oe="".concat(v,"/request"),ue="".concat(v,"/running"),le="".concat(v,"/error"),ce="".concat(v,"/manual"),fe="".concat(v,"/highlight"),g={RESULT:se,REQUEST:oe,RUNNING:ue,ERROR:le,MANUAL:ce,HIGHLIGHT:fe};function b(r,n,e,t,a,u,s){try{var c=r[u](s),f=c.value}catch(S){e(S);return}c.done?n(f):Promise.resolve(f).then(t,a)}i(b,"asyncGeneratorStep");function D(r){return function(){var n=this,e=arguments;return new Promise(function(t,a){var u=r.apply(n,e);function s(f){b(u,t,a,s,c,"next",f)}i(s,"_next");function c(f){b(u,t,a,s,c,"throw",f)}i(c,"_throw"),s(void 0)})}}i(D,"_asyncToGenerator");var Ee=d.document,he=d.window;h&&h.hot&&h.hot.decline&&h.hot.decline();var A=G.getChannel(),O=!1,_,Re=function(){var r=D(regeneratorRuntime.mark(i(function n(e){var t,a;return regeneratorRuntime.wrap(i(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,U(e);case 2:if(t=s.sent,a=t.manual,a){s.next=7;break}return s.next=7,y(e);case 7:case"end":return s.stop()}},"_callee$"),n)},"_callee")));return i(function(e){return r.apply(this,arguments)},"handleRequest")}(),y=function(){var r=D(regeneratorRuntime.mark(i(function n(e){var t,a,u,s,c,f,S,m,N;return regeneratorRuntime.wrap(i(function(l){for(;;)switch(l.prev=l.next){case 0:return _=e,l.prev=1,l.next=4,U(e);case 4:if(t=l.sent,O){l.next=19;break}return O=!0,A.emit(g.RUNNING),l.next=10,F(()=>import("./axe.db6c49a2.js").then(B=>B.a),["assets/axe.db6c49a2.js","assets/iframe.6a32f557.js"]);case 10:return a=l.sent.default,u=t.element,s=u===void 0?"#root":u,c=t.config,f=t.options,S=f===void 0?{}:f,m=Ee.querySelector(s),a.reset(),c&&a.configure(c),l.next=17,a.run(m,S);case 17:N=l.sent,_===e?A.emit(g.RESULT,N):(O=!1,y(_));case 19:l.next=24;break;case 21:l.prev=21,l.t0=l.catch(1),A.emit(g.ERROR,l.t0);case 24:return l.prev=24,O=!1,l.finish(24);case 27:case"end":return l.stop()}},"_callee2$"),n,null,[[1,21,24,27]])},"_callee2")));return i(function(e){return r.apply(this,arguments)},"run")}(),U=function(){var r=D(regeneratorRuntime.mark(i(function n(e){var t,a;return regeneratorRuntime.wrap(i(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,he.__STORYBOOK_STORY_STORE__.loadStory({storyId:e});case 2:if(s.t0=s.sent,s.t0){s.next=5;break}s.t0={};case 5:return t=s.t0,a=t.parameters,s.abrupt("return",a.a11y||{config:{},options:{restoreScroll:!0}});case 8:case"end":return s.stop()}},"_callee3$"),n)},"_callee3")));return i(function(e){return r.apply(this,arguments)},"getParams")}();A.on(g.REQUEST,Re);A.on(g.MANUAL,y);var de=i(function(n){return`
  outline: 2px dashed `.concat(n,`;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`)},"highlightStyle"),C=d.document;h&&h.hot&&h.hot.decline&&h.hot.decline();var H=G.getChannel(),Se=i(function(n){var e=Y;j();var t=Array.from(new Set(n.elements)),a=C.createElement("style");a.setAttribute("id",e),a.innerHTML=t.map(function(u){return"".concat(u,`{
          `).concat(de(n.color),`
         }`)}).join(" "),C.head.appendChild(a)},"highlight"),j=i(function(){var n=Y,e=C.getElementById(n);e&&e.parentNode.removeChild(e)},"resetHighlight");H.on(ie,j);H.on(g.HIGHLIGHT,Se)});export default Te();
//# sourceMappingURL=preview.58c236ae.js.map