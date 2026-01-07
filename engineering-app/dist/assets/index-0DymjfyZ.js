(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var vh={exports:{}},Wo={};var t_;function vy(){if(t_)return Wo;t_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var u=null;if(c!==void 0&&(u=""+c),l.key!==void 0&&(u=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:u,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=t,Wo.jsx=n,Wo.jsxs=n,Wo}var e_;function xy(){return e_||(e_=1,vh.exports=vy()),vh.exports}var mt=xy(),xh={exports:{}},pe={};var n_;function Sy(){if(n_)return pe;n_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function S(N,et,pt){this.props=N,this.context=et,this.refs=M,this.updater=pt||b}S.prototype.isReactComponent={},S.prototype.setState=function(N,et){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,et,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function z(){}z.prototype=S.prototype;function D(N,et,pt){this.props=N,this.context=et,this.refs=M,this.updater=pt||b}var L=D.prototype=new z;L.constructor=D,A(L,S.prototype),L.isPureReactComponent=!0;var I=Array.isArray;function H(){}var F={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function T(N,et,pt){var Rt=pt.ref;return{$$typeof:r,type:N,key:et,ref:Rt!==void 0?Rt:null,props:pt}}function w(N,et){return T(N.type,et,N.props)}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function it(N){var et={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(pt){return et[pt]})}var Q=/\/+/g;function ut(N,et){return typeof N=="object"&&N!==null&&N.key!=null?it(""+N.key):et.toString(36)}function rt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(H,H):(N.status="pending",N.then(function(et){N.status==="pending"&&(N.status="fulfilled",N.value=et)},function(et){N.status==="pending"&&(N.status="rejected",N.reason=et)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,et,pt,Rt,Xt){var nt=typeof N;(nt==="undefined"||nt==="boolean")&&(N=null);var ht=!1;if(N===null)ht=!0;else switch(nt){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(N.$$typeof){case r:case t:ht=!0;break;case g:return ht=N._init,O(ht(N._payload),et,pt,Rt,Xt)}}if(ht)return Xt=Xt(N),ht=Rt===""?"."+ut(N,0):Rt,I(Xt)?(pt="",ht!=null&&(pt=ht.replace(Q,"$&/")+"/"),O(Xt,et,pt,"",function(Ht){return Ht})):Xt!=null&&(G(Xt)&&(Xt=w(Xt,pt+(Xt.key==null||N&&N.key===Xt.key?"":(""+Xt.key).replace(Q,"$&/")+"/")+ht)),et.push(Xt)),1;ht=0;var Nt=Rt===""?".":Rt+":";if(I(N))for(var Vt=0;Vt<N.length;Vt++)Rt=N[Vt],nt=Nt+ut(Rt,Vt),ht+=O(Rt,et,pt,nt,Xt);else if(Vt=y(N),typeof Vt=="function")for(N=Vt.call(N),Vt=0;!(Rt=N.next()).done;)Rt=Rt.value,nt=Nt+ut(Rt,Vt++),ht+=O(Rt,et,pt,nt,Xt);else if(nt==="object"){if(typeof N.then=="function")return O(rt(N),et,pt,Rt,Xt);throw et=String(N),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return ht}function B(N,et,pt){if(N==null)return N;var Rt=[],Xt=0;return O(N,Rt,"","",function(nt){return et.call(pt,nt,Xt++)}),Rt}function J(N){if(N._status===-1){var et=N._result;et=et(),et.then(function(pt){(N._status===0||N._status===-1)&&(N._status=1,N._result=pt)},function(pt){(N._status===0||N._status===-1)&&(N._status=2,N._result=pt)}),N._status===-1&&(N._status=0,N._result=et)}if(N._status===1)return N._result.default;throw N._result}var Mt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},vt={map:B,forEach:function(N,et,pt){B(N,function(){et.apply(this,arguments)},pt)},count:function(N){var et=0;return B(N,function(){et++}),et},toArray:function(N){return B(N,function(et){return et})||[]},only:function(N){if(!G(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return pe.Activity=_,pe.Children=vt,pe.Component=S,pe.Fragment=n,pe.Profiler=l,pe.PureComponent=D,pe.StrictMode=s,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,pe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},pe.cache=function(N){return function(){return N.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(N,et,pt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Rt=A({},N.props),Xt=N.key;if(et!=null)for(nt in et.key!==void 0&&(Xt=""+et.key),et)!Y.call(et,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&et.ref===void 0||(Rt[nt]=et[nt]);var nt=arguments.length-2;if(nt===1)Rt.children=pt;else if(1<nt){for(var ht=Array(nt),Nt=0;Nt<nt;Nt++)ht[Nt]=arguments[Nt+2];Rt.children=ht}return T(N.type,Xt,Rt)},pe.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},pe.createElement=function(N,et,pt){var Rt,Xt={},nt=null;if(et!=null)for(Rt in et.key!==void 0&&(nt=""+et.key),et)Y.call(et,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Xt[Rt]=et[Rt]);var ht=arguments.length-2;if(ht===1)Xt.children=pt;else if(1<ht){for(var Nt=Array(ht),Vt=0;Vt<ht;Vt++)Nt[Vt]=arguments[Vt+2];Xt.children=Nt}if(N&&N.defaultProps)for(Rt in ht=N.defaultProps,ht)Xt[Rt]===void 0&&(Xt[Rt]=ht[Rt]);return T(N,nt,Xt)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(N){return{$$typeof:d,render:N}},pe.isValidElement=G,pe.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:J}},pe.memo=function(N,et){return{$$typeof:p,type:N,compare:et===void 0?null:et}},pe.startTransition=function(N){var et=F.T,pt={};F.T=pt;try{var Rt=N(),Xt=F.S;Xt!==null&&Xt(pt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(H,Mt)}catch(nt){Mt(nt)}finally{et!==null&&pt.types!==null&&(et.types=pt.types),F.T=et}},pe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},pe.use=function(N){return F.H.use(N)},pe.useActionState=function(N,et,pt){return F.H.useActionState(N,et,pt)},pe.useCallback=function(N,et){return F.H.useCallback(N,et)},pe.useContext=function(N){return F.H.useContext(N)},pe.useDebugValue=function(){},pe.useDeferredValue=function(N,et){return F.H.useDeferredValue(N,et)},pe.useEffect=function(N,et){return F.H.useEffect(N,et)},pe.useEffectEvent=function(N){return F.H.useEffectEvent(N)},pe.useId=function(){return F.H.useId()},pe.useImperativeHandle=function(N,et,pt){return F.H.useImperativeHandle(N,et,pt)},pe.useInsertionEffect=function(N,et){return F.H.useInsertionEffect(N,et)},pe.useLayoutEffect=function(N,et){return F.H.useLayoutEffect(N,et)},pe.useMemo=function(N,et){return F.H.useMemo(N,et)},pe.useOptimistic=function(N,et){return F.H.useOptimistic(N,et)},pe.useReducer=function(N,et,pt){return F.H.useReducer(N,et,pt)},pe.useRef=function(N){return F.H.useRef(N)},pe.useState=function(N){return F.H.useState(N)},pe.useSyncExternalStore=function(N,et,pt){return F.H.useSyncExternalStore(N,et,pt)},pe.useTransition=function(){return F.H.useTransition()},pe.version="19.2.3",pe}var i_;function ip(){return i_||(i_=1,xh.exports=Sy()),xh.exports}var vi=ip(),Sh={exports:{}},qo={},yh={exports:{}},Mh={};var a_;function yy(){return a_||(a_=1,(function(r){function t(O,B){var J=O.length;O.push(B);t:for(;0<J;){var Mt=J-1>>>1,vt=O[Mt];if(0<l(vt,B))O[Mt]=B,O[J]=vt,J=Mt;else break t}}function n(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var B=O[0],J=O.pop();if(J!==B){O[0]=J;t:for(var Mt=0,vt=O.length,N=vt>>>1;Mt<N;){var et=2*(Mt+1)-1,pt=O[et],Rt=et+1,Xt=O[Rt];if(0>l(pt,J))Rt<vt&&0>l(Xt,pt)?(O[Mt]=Xt,O[Rt]=J,Mt=Rt):(O[Mt]=pt,O[et]=J,Mt=et);else if(Rt<vt&&0>l(Xt,J))O[Mt]=Xt,O[Rt]=J,Mt=Rt;else break t}}return B}function l(O,B){var J=O.sortIndex-B.sortIndex;return J!==0?J:O.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var m=[],p=[],g=1,_=null,v=3,y=!1,b=!1,A=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var B=n(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=O)s(p),B.sortIndex=B.expirationTime,t(m,B);else break;B=n(p)}}function I(O){if(A=!1,L(O),!b)if(n(m)!==null)b=!0,H||(H=!0,it());else{var B=n(p);B!==null&&rt(I,B.startTime-O)}}var H=!1,F=-1,Y=5,T=-1;function w(){return M?!0:!(r.unstable_now()-T<Y)}function G(){if(M=!1,H){var O=r.unstable_now();T=O;var B=!0;try{t:{b=!1,A&&(A=!1,z(F),F=-1),y=!0;var J=v;try{e:{for(L(O),_=n(m);_!==null&&!(_.expirationTime>O&&w());){var Mt=_.callback;if(typeof Mt=="function"){_.callback=null,v=_.priorityLevel;var vt=Mt(_.expirationTime<=O);if(O=r.unstable_now(),typeof vt=="function"){_.callback=vt,L(O),B=!0;break e}_===n(m)&&s(m),L(O)}else s(m);_=n(m)}if(_!==null)B=!0;else{var N=n(p);N!==null&&rt(I,N.startTime-O),B=!1}}break t}finally{_=null,v=J,y=!1}B=void 0}}finally{B?it():H=!1}}}var it;if(typeof D=="function")it=function(){D(G)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ut=Q.port2;Q.port1.onmessage=G,it=function(){ut.postMessage(null)}}else it=function(){S(G,0)};function rt(O,B){F=S(function(){O(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(O){switch(v){case 1:case 2:case 3:var B=3;break;default:B=v}var J=v;v=B;try{return O()}finally{v=J}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var J=v;v=O;try{return B()}finally{v=J}},r.unstable_scheduleCallback=function(O,B,J){var Mt=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Mt+J:Mt):J=Mt,O){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=J+vt,O={id:g++,callback:B,priorityLevel:O,startTime:J,expirationTime:vt,sortIndex:-1},J>Mt?(O.sortIndex=J,t(p,O),n(m)===null&&O===n(p)&&(A?(z(F),F=-1):A=!0,rt(I,J-Mt))):(O.sortIndex=vt,t(m,O),b||y||(b=!0,H||(H=!0,it()))),O},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(O){var B=v;return function(){var J=v;v=B;try{return O.apply(this,arguments)}finally{v=J}}}})(Mh)),Mh}var s_;function My(){return s_||(s_=1,yh.exports=yy()),yh.exports}var Eh={exports:{}},On={};var r_;function Ey(){if(r_)return On;r_=1;var r=ip();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},On.flushSync=function(m){var p=u.T,g=s.p;try{if(u.T=null,s.p=2,m)return m()}finally{u.T=p,s.p=g,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},On.useFormStatus=function(){return u.H.useHostTransitionStatus()},On.version="19.2.3",On}var o_;function by(){if(o_)return Eh.exports;o_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Eh.exports=Ey(),Eh.exports}var l_;function Ty(){if(l_)return qo;l_=1;var r=My(),t=ip(),n=by();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(o=f.return,o!==null){a=o;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return m(f),e;if(h===o)return m(f),i;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=f,o=h;else{for(var x=!1,R=f.child;R;){if(R===a){x=!0,a=f,o=h;break}if(R===o){x=!0,o=f,a=h;break}R=R.sibling}if(!x){for(R=h.child;R;){if(R===a){x=!0,a=h,o=f;break}if(R===o){x=!0,o=h,a=f;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case H:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case L:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return i=e.displayName||null,i!==null?i:ut(e.type)||"Memo";case Y:i=e._payload,e=e._init;try{return ut(e(i))}catch{}}return null}var rt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},Mt=[],vt=-1;function N(e){return{current:e}}function et(e){0>vt||(e.current=Mt[vt],Mt[vt]=null,vt--)}function pt(e,i){vt++,Mt[vt]=e.current,e.current=i}var Rt=N(null),Xt=N(null),nt=N(null),ht=N(null);function Nt(e,i){switch(pt(nt,i),pt(Xt,e),pt(Rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?E0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=E0(i),e=b0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(Rt),pt(Rt,e)}function Vt(){et(Rt),et(Xt),et(nt)}function Ht(e){e.memoizedState!==null&&pt(ht,e);var i=Rt.current,a=b0(i,e.type);i!==a&&(pt(Xt,e),pt(Rt,a))}function me(e){Xt.current===e&&(et(Rt),et(Xt)),ht.current===e&&(et(ht),Go._currentValue=J)}var Me,ue;function _t(e){if(Me===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Me=i&&i[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Me+e+ue}var At=!1;function Et(e,i){if(!e||At)return"";At=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(lt){var st=lt}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(lt){st=lt}e.call(xt.prototype)}}else{try{throw Error()}catch(lt){st=lt}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(lt){if(lt&&st&&typeof lt.stack=="string")return[lt.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],R=h[1];if(x&&R){var V=x.split(`
`),tt=R.split(`
`);for(f=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;f<tt.length&&!tt[f].includes("DetermineComponentFrameRoot");)f++;if(o===V.length||f===tt.length)for(o=V.length-1,f=tt.length-1;1<=o&&0<=f&&V[o]!==tt[f];)f--;for(;1<=o&&0<=f;o--,f--)if(V[o]!==tt[f]){if(o!==1||f!==1)do if(o--,f--,0>f||V[o]!==tt[f]){var dt=`
`+V[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=f);break}}}finally{At=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_t(a):""}function Ft(e,i){switch(e.tag){case 26:case 27:case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return e.child!==i&&i!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return Et(e.type,!1);case 11:return Et(e.type.render,!1);case 1:return Et(e.type,!0);case 31:return _t("Activity");default:return""}}function P(e){try{var i="",a=null;do i+=Ft(e,a),a=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ne=Object.prototype.hasOwnProperty,It=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,Dt=r.unstable_shouldYield,U=r.unstable_requestPaint,E=r.unstable_now,k=r.unstable_getCurrentPriorityLevel,ct=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,jt=r.unstable_LowPriority,Lt=r.unstable_IdlePriority,Jt=r.log,oe=r.unstable_setDisableYieldValue,bt=null,Ct=null;function Yt(e){if(typeof Jt=="function"&&oe(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(bt,e)}catch{}}var Wt=Math.clz32?Math.clz32:W,Pt=Math.log,_e=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Pt(e)/_e|0)|0}var Bt=256,wt=262144,qt=4194304;function Tt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var f=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?f=Tt(o):(x&=R,x!==0?f=Tt(x):a||(a=R&~e,a!==0&&(f=Tt(a))))):(R=o&~h,R!==0?f=Tt(R):x!==0?f=Tt(x):a||(a=o&~e,a!==0&&(f=Tt(a)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,a=i&-i,h>=a||h===32&&(a&4194048)!==0)?i:f}function Ut(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function he(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=qt;return qt<<=1,(qt&62914560)===0&&(qt=4194304),e}function we(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Nn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,i,a,o,f,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,V=e.expirationTimes,tt=e.hiddenUpdates;for(a=x&~a;0<a;){var dt=31-Wt(a),xt=1<<dt;R[dt]=0,V[dt]=-1;var st=tt[dt];if(st!==null)for(tt[dt]=null,dt=0;dt<st.length;dt++){var lt=st[dt];lt!==null&&(lt.lane&=-536870913)}a&=~xt}o!==0&&pl(e,o,0),h!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~i))}function pl(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Wt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Jr(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Wt(a),f=1<<o;f&i|e[o]&i&&(e[o]|=i),a&=~f}}function Hs(e,i){var a=i&-i;return a=(a&42)!==0?1:$r(a),(a&(e.suspendedLanes|i))!==0?0:a}function $r(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function to(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Y0(e.type))}function Oi(e,i){var a=B.p;try{return B.p=e,i()}finally{B.p=a}}var oi=Math.random().toString(36).slice(2),on="__reactFiber$"+oi,yn="__reactProps$"+oi,Ei="__reactContainer$"+oi,Vs="__reactEvents$"+oi,ks="__reactListeners$"+oi,ml="__reactHandles$"+oi,eo="__reactResources$"+oi,ls="__reactMarker$"+oi;function no(e){delete e[on],delete e[yn],delete e[Vs],delete e[ks],delete e[ml]}function Ta(e){var i=e[on];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Ei]||a[on]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=L0(e);e!==null;){if(a=e[on])return a;e=L0(e)}return i}e=a,a=e.parentNode}return null}function Aa(e){if(e=e[on]||e[Ei]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function cs(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Ra(e){var i=e[eo];return i||(i=e[eo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function C(e){e[ls]=!0}var j=new Set,ot={};function at(e,i){K(e,i),K(e+"Capture",i)}function K(e,i){for(ot[e]=i,e=0;e<i.length;e++)j.add(i[e])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zt={},Gt={};function Kt(e){return ne.call(Gt,e)?!0:ne.call(Zt,e)?!1:zt.test(e)?Gt[e]=!0:(Zt[e]=!0,!1)}function $t(e,i,a){if(Kt(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function re(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function te(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}function le(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(e,i,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function je(e){if(!e._valueTracker){var i=Oe(e)?"checked":"value";e._valueTracker=Qe(e,i,""+e[i])}}function Fe(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=Oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function ae(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pe=/[\n"\\]/g;function de(e){return e.replace(Pe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Mn(e,i,a,o,f,h,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),i!=null?x==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+le(i)):e.value!==""+le(i)&&(e.value=""+le(i)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),i!=null?En(e,x,le(i)):a!=null?En(e,x,le(a)):o!=null&&e.removeAttribute("value"),f==null&&h!=null&&(e.defaultChecked=!!h),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+le(R):e.removeAttribute("name")}function Qi(e,i,a,o,f,h,x,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),i!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){je(e);return}a=a!=null?""+le(a):"",i=i!=null?""+le(i):a,R||i===e.value||(e.value=i),e.defaultValue=i}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),je(e)}function En(e,i,a){i==="number"&&ae(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function li(e,i,a,o){if(e=e.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<e.length;a++)f=i.hasOwnProperty("$"+e[a].value),e[a].selected!==f&&(e[a].selected=f),f&&o&&(e[a].defaultSelected=!0)}else{for(a=""+le(a),i=null,f=0;f<e.length;f++){if(e[f].value===a){e[f].selected=!0,o&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Be(e,i,a){if(i!=null&&(i=""+le(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+le(a):""}function bn(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(rt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=le(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),je(e)}function pn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||Tn.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Xs(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var f in i)o=i[f],i.hasOwnProperty(f)&&a[f]!==o&&An(e,f,o)}else for(var h in i)i.hasOwnProperty(h)&&An(e,h,i[h])}function bi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var px=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return mx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var pu=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,qs=null;function Mp(e){var i=Aa(e);if(i&&(e=i.stateNode)){var a=e[yn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Mn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var f=o[yn]||null;if(!f)throw Error(s(90));Mn(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&Fe(o)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&li(e,!!a.multiple,i,!1)}}}var gu=!1;function Ep(e,i,a){if(gu)return e(i,a);gu=!0;try{var o=e(i);return o}finally{if(gu=!1,(Ws!==null||qs!==null)&&(ic(),Ws&&(i=Ws,e=qs,qs=Ws=null,Mp(i),e)))for(i=0;i<e.length;i++)Mp(e[i])}}function io(e,i){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if($i)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){_u=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{_u=!1}var Ca=null,vu=null,_l=null;function bp(){if(_l)return _l;var e,i=vu,a=i.length,o,f="value"in Ca?Ca.value:Ca.textContent,h=f.length;for(e=0;e<a&&i[e]===f[e];e++);var x=a-e;for(o=1;o<=x&&i[a-o]===f[h-o];o++);return _l=f.slice(e,1<o?1-o:void 0)}function vl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function xl(){return!0}function Tp(){return!1}function Vn(e){function i(a,o,f,h,x){this._reactName=a,this._targetInst=f,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?xl:Tp,this.isPropagationStopped=Tp,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Vn(us),so=_({},us,{view:0,detail:0}),gx=Vn(so),xu,Su,ro,yl=_({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(xu=e.screenX-ro.screenX,Su=e.screenY-ro.screenY):Su=xu=0,ro=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:Su}}),Ap=Vn(yl),_x=_({},yl,{dataTransfer:0}),vx=Vn(_x),xx=_({},so,{relatedTarget:0}),yu=Vn(xx),Sx=_({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),yx=Vn(Sx),Mx=_({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ex=Vn(Mx),bx=_({},us,{data:0}),Rp=Vn(bx),Tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Rx[e])?!!i[e]:!1}function Mu(){return Cx}var wx=_({},so,{key:function(e){if(e.key){var i=Tx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ax[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dx=Vn(wx),Lx=_({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Vn(Lx),Ux=_({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Nx=Vn(Ux),Ox=_({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Px=Vn(Ox),zx=_({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=Vn(zx),Ix=_({},us,{newState:0,oldState:0}),Bx=Vn(Ix),Hx=[9,13,27,32],Eu=$i&&"CompositionEvent"in window,oo=null;$i&&"documentMode"in document&&(oo=document.documentMode);var Gx=$i&&"TextEvent"in window&&!oo,wp=$i&&(!Eu||oo&&8<oo&&11>=oo),Dp=" ",Lp=!1;function Up(e,i){switch(e){case"keyup":return Hx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ys=!1;function Vx(e,i){switch(e){case"compositionend":return Np(i);case"keypress":return i.which!==32?null:(Lp=!0,Dp);case"textInput":return e=i.data,e===Dp&&Lp?null:e;default:return null}}function kx(e,i){if(Ys)return e==="compositionend"||!Eu&&Up(e,i)?(e=bp(),_l=vu=Ca=null,Ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return wp&&i.locale!=="ko"?null:i.data;default:return null}}var Xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Xx[e.type]:i==="textarea"}function Pp(e,i,a,o){Ws?qs?qs.push(o):qs=[o]:Ws=o,i=uc(i,"onChange"),0<i.length&&(a=new Sl("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var lo=null,co=null;function Wx(e){_0(e,0)}function Ml(e){var i=cs(e);if(Fe(i))return e}function zp(e,i){if(e==="change")return i}var Fp=!1;if($i){var bu;if($i){var Tu="oninput"in document;if(!Tu){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),Tu=typeof Ip.oninput=="function"}bu=Tu}else bu=!1;Fp=bu&&(!document.documentMode||9<document.documentMode)}function Bp(){lo&&(lo.detachEvent("onpropertychange",Hp),co=lo=null)}function Hp(e){if(e.propertyName==="value"&&Ml(co)){var i=[];Pp(i,co,e,mu(e)),Ep(Wx,i)}}function qx(e,i,a){e==="focusin"?(Bp(),lo=i,co=a,lo.attachEvent("onpropertychange",Hp)):e==="focusout"&&Bp()}function Yx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(co)}function jx(e,i){if(e==="click")return Ml(i)}function Zx(e,i){if(e==="input"||e==="change")return Ml(i)}function Kx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Qn=typeof Object.is=="function"?Object.is:Kx;function uo(e,i){if(Qn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var f=a[o];if(!ne.call(i,f)||!Qn(e[f],i[f]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vp(e,i){var a=Gp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gp(a)}}function kp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?kp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ae(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ae(e.document)}return i}function Au(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Qx=$i&&"documentMode"in document&&11>=document.documentMode,js=null,Ru=null,fo=null,Cu=!1;function Wp(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||js==null||js!==ae(o)||(o=js,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&uo(fo,o)||(fo=o,o=uc(Ru,"onSelect"),0<o.length&&(i=new Sl("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=js)))}function fs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Zs={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},wu={},qp={};$i&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function hs(e){if(wu[e])return wu[e];if(!Zs[e])return e;var i=Zs[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in qp)return wu[e]=i[a];return e}var Yp=hs("animationend"),jp=hs("animationiteration"),Zp=hs("animationstart"),Jx=hs("transitionrun"),$x=hs("transitionstart"),tS=hs("transitioncancel"),Kp=hs("transitionend"),Qp=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function Ti(e,i){Qp.set(e,i),at(i,[e])}var El=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Ks=0,Lu=0;function bl(){for(var e=Ks,i=Lu=Ks=0;i<e;){var a=ci[i];ci[i++]=null;var o=ci[i];ci[i++]=null;var f=ci[i];ci[i++]=null;var h=ci[i];if(ci[i++]=null,o!==null&&f!==null){var x=o.pending;x===null?f.next=f:(f.next=x.next,x.next=f),o.pending=f}h!==0&&Jp(a,f,h)}}function Tl(e,i,a,o){ci[Ks++]=e,ci[Ks++]=i,ci[Ks++]=a,ci[Ks++]=o,Lu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Uu(e,i,a,o){return Tl(e,i,a,o),Al(e)}function ds(e,i){return Tl(e,null,null,i),Al(e)}function Jp(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var f=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(f=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,f&&i!==null&&(f=31-Wt(a),e=h.hiddenUpdates,o=e[f],o===null?e[f]=[i]:o.push(i),i.lane=a|536870912),h):null}function Al(e){if(50<Oo)throw Oo=0,Vf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Qs={};function eS(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,i,a,o){return new eS(e,i,a,o)}function Nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,i){var a=e.alternate;return a===null?(a=Jn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $p(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Rl(e,i,a,o,f,h){var x=0;if(o=e,typeof e=="function")Nu(e)&&(x=1);else if(typeof e=="string")x=ry(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case T:return e=Jn(31,a,i,f),e.elementType=T,e.lanes=h,e;case A:return ps(a.children,f,h,i);case M:x=8,f|=24;break;case S:return e=Jn(12,a,i,f|2),e.elementType=S,e.lanes=h,e;case I:return e=Jn(13,a,i,f),e.elementType=I,e.lanes=h,e;case H:return e=Jn(19,a,i,f),e.elementType=H,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:x=10;break t;case z:x=9;break t;case L:x=11;break t;case F:x=14;break t;case Y:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=Jn(x,a,i,f),i.elementType=e,i.type=o,i.lanes=h,i}function ps(e,i,a,o){return e=Jn(7,e,o,i),e.lanes=a,e}function Ou(e,i,a){return e=Jn(6,e,null,i),e.lanes=a,e}function tm(e){var i=Jn(18,null,null,0);return i.stateNode=e,i}function Pu(e,i,a){return i=Jn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var em=new WeakMap;function ui(e,i){if(typeof e=="object"&&e!==null){var a=em.get(e);return a!==void 0?a:(i={value:e,source:i,stack:P(i)},em.set(e,i),i)}return{value:e,source:i,stack:P(i)}}var Js=[],$s=0,Cl=null,ho=0,fi=[],hi=0,wa=null,Pi=1,zi="";function ea(e,i){Js[$s++]=ho,Js[$s++]=Cl,Cl=e,ho=i}function nm(e,i,a){fi[hi++]=Pi,fi[hi++]=zi,fi[hi++]=wa,wa=e;var o=Pi;e=zi;var f=32-Wt(o)-1;o&=~(1<<f),a+=1;var h=32-Wt(i)+f;if(30<h){var x=f-f%5;h=(o&(1<<x)-1).toString(32),o>>=x,f-=x,Pi=1<<32-Wt(i)+f|a<<f|o,zi=h+e}else Pi=1<<h|a<<f|o,zi=e}function zu(e){e.return!==null&&(ea(e,1),nm(e,1,0))}function Fu(e){for(;e===Cl;)Cl=Js[--$s],Js[$s]=null,ho=Js[--$s],Js[$s]=null;for(;e===wa;)wa=fi[--hi],fi[hi]=null,zi=fi[--hi],fi[hi]=null,Pi=fi[--hi],fi[hi]=null}function im(e,i){fi[hi++]=Pi,fi[hi++]=zi,fi[hi++]=wa,Pi=i.id,zi=i.overflow,wa=e}var Rn=null,Ze=null,Ce=!1,Da=null,di=!1,Iu=Error(s(519));function La(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(ui(i,e)),Iu}function am(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[on]=e,i[yn]=o,a){case"dialog":be("cancel",i),be("close",i);break;case"iframe":case"object":case"embed":be("load",i);break;case"video":case"audio":for(a=0;a<zo.length;a++)be(zo[a],i);break;case"source":be("error",i);break;case"img":case"image":case"link":be("error",i),be("load",i);break;case"details":be("toggle",i);break;case"input":be("invalid",i),Qi(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":be("invalid",i);break;case"textarea":be("invalid",i),bn(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||y0(i.textContent,a)?(o.popover!=null&&(be("beforetoggle",i),be("toggle",i)),o.onScroll!=null&&be("scroll",i),o.onScrollEnd!=null&&be("scrollend",i),o.onClick!=null&&(i.onclick=Ji),i=!0):i=!1,i||La(e,!0)}function sm(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Rn=Rn.return}}function tr(e){if(e!==Rn)return!1;if(!Ce)return sm(e),Ce=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ih(e.type,e.memoizedProps)),a=!a),a&&Ze&&La(e),sm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=D0(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=D0(e)}else i===27?(i=Ze,Wa(e.type)?(e=lh,lh=null,Ze=e):Ze=i):Ze=Rn?mi(e.stateNode.nextSibling):null;return!0}function ms(){Ze=Rn=null,Ce=!1}function Bu(){var e=Da;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Da=null),e}function po(e){Da===null?Da=[e]:Da.push(e)}var Hu=N(null),gs=null,na=null;function Ua(e,i,a){pt(Hu,i._currentValue),i._currentValue=a}function ia(e){e._currentValue=Hu.current,et(Hu)}function Gu(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function Vu(e,i,a,o){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var h=f.dependencies;if(h!==null){var x=f.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=f;for(var V=0;V<i.length;V++)if(R.context===i[V]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),Gu(h.return,a,e),o||(x=null);break t}h=R.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),Gu(x,a,e),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===e){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function er(e,i,a,o){e=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=f.type;Qn(f.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(f===ht.current){if(x=f.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}f=f.return}e!==null&&Vu(i,e,a,o),i.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){gs=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return rm(gs,e)}function Dl(e,i){return gs===null&&_s(e),rm(e,i)}function rm(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},na===null){if(e===null)throw Error(s(308));na=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else na=na.next=i;return a}var nS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},iS=r.unstable_scheduleCallback,aS=r.unstable_NormalPriority,ln={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new nS,data:new Map,refCount:0}}function mo(e){e.refCount--,e.refCount===0&&iS(aS,function(){e.controller.abort()})}var go=null,Xu=0,nr=0,ir=null;function sS(e,i){if(go===null){var a=go=[];Xu=0,nr=jf(),ir={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xu++,i.then(om,om),i}function om(){if(--Xu===0&&go!==null){ir!==null&&(ir.status="fulfilled");var e=go;go=null,nr=0,ir=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function rS(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(o.status="rejected",o.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),o}var lm=O.S;O.S=function(e,i){Wg=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&sS(e,i),lm!==null&&lm(e,i)};var vs=N(null);function Wu(){var e=vs.current;return e!==null?e:Ye.pooledCache}function Ll(e,i){i===null?pt(vs,vs.current):pt(vs,i.pool)}function cm(){var e=Wu();return e===null?null:{parent:ln._currentValue,pool:e}}var ar=Error(s(460)),qu=Error(s(474)),Ul=Error(s(542)),Nl={then:function(){}};function um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fm(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Ji,Ji),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dm(e),e;default:if(typeof i.status=="string")i.then(Ji,Ji);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=o}},function(o){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dm(e),e}throw Ss=i,ar}}function xs(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,ar):a}}var Ss=null;function hm(){if(Ss===null)throw Error(s(459));var e=Ss;return Ss=null,e}function dm(e){if(e===ar||e===Ul)throw Error(s(483))}var sr=null,_o=0;function Ol(e){var i=_o;return _o+=1,sr===null&&(sr=[]),fm(sr,e,i)}function vo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Pl(e,i){throw i.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function pm(e){function i(Z,X){if(e){var $=Z.deletions;$===null?(Z.deletions=[X],Z.flags|=16):$.push(X)}}function a(Z,X){if(!e)return null;for(;X!==null;)i(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function f(Z,X){return Z=ta(Z,X),Z.index=0,Z.sibling=null,Z}function h(Z,X,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<X?(Z.flags|=67108866,X):$):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function x(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,X,$,gt){return X===null||X.tag!==6?(X=Ou($,Z.mode,gt),X.return=Z,X):(X=f(X,$),X.return=Z,X)}function V(Z,X,$,gt){var se=$.type;return se===A?dt(Z,X,$.props.children,gt,$.key):X!==null&&(X.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Y&&xs(se)===X.type)?(X=f(X,$.props),vo(X,$),X.return=Z,X):(X=Rl($.type,$.key,$.props,null,Z.mode,gt),vo(X,$),X.return=Z,X)}function tt(Z,X,$,gt){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Pu($,Z.mode,gt),X.return=Z,X):(X=f(X,$.children||[]),X.return=Z,X)}function dt(Z,X,$,gt,se){return X===null||X.tag!==7?(X=ps($,Z.mode,gt,se),X.return=Z,X):(X=f(X,$),X.return=Z,X)}function xt(Z,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ou(""+X,Z.mode,$),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return $=Rl(X.type,X.key,X.props,null,Z.mode,$),vo($,X),$.return=Z,$;case b:return X=Pu(X,Z.mode,$),X.return=Z,X;case Y:return X=xs(X),xt(Z,X,$)}if(rt(X)||it(X))return X=ps(X,Z.mode,$,null),X.return=Z,X;if(typeof X.then=="function")return xt(Z,Ol(X),$);if(X.$$typeof===D)return xt(Z,Dl(Z,X),$);Pl(Z,X)}return null}function st(Z,X,$,gt){var se=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return se!==null?null:R(Z,X,""+$,gt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===se?V(Z,X,$,gt):null;case b:return $.key===se?tt(Z,X,$,gt):null;case Y:return $=xs($),st(Z,X,$,gt)}if(rt($)||it($))return se!==null?null:dt(Z,X,$,gt,null);if(typeof $.then=="function")return st(Z,X,Ol($),gt);if($.$$typeof===D)return st(Z,X,Dl(Z,$),gt);Pl(Z,$)}return null}function lt(Z,X,$,gt,se){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get($)||null,R(X,Z,""+gt,se);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case y:return Z=Z.get(gt.key===null?$:gt.key)||null,V(X,Z,gt,se);case b:return Z=Z.get(gt.key===null?$:gt.key)||null,tt(X,Z,gt,se);case Y:return gt=xs(gt),lt(Z,X,$,gt,se)}if(rt(gt)||it(gt))return Z=Z.get($)||null,dt(X,Z,gt,se,null);if(typeof gt.then=="function")return lt(Z,X,$,Ol(gt),se);if(gt.$$typeof===D)return lt(Z,X,$,Dl(X,gt),se);Pl(X,gt)}return null}function Qt(Z,X,$,gt){for(var se=null,Ue=null,ee=X,ve=X=0,Ae=null;ee!==null&&ve<$.length;ve++){ee.index>ve?(Ae=ee,ee=null):Ae=ee.sibling;var Ne=st(Z,ee,$[ve],gt);if(Ne===null){ee===null&&(ee=Ae);break}e&&ee&&Ne.alternate===null&&i(Z,ee),X=h(Ne,X,ve),Ue===null?se=Ne:Ue.sibling=Ne,Ue=Ne,ee=Ae}if(ve===$.length)return a(Z,ee),Ce&&ea(Z,ve),se;if(ee===null){for(;ve<$.length;ve++)ee=xt(Z,$[ve],gt),ee!==null&&(X=h(ee,X,ve),Ue===null?se=ee:Ue.sibling=ee,Ue=ee);return Ce&&ea(Z,ve),se}for(ee=o(ee);ve<$.length;ve++)Ae=lt(ee,Z,ve,$[ve],gt),Ae!==null&&(e&&Ae.alternate!==null&&ee.delete(Ae.key===null?ve:Ae.key),X=h(Ae,X,ve),Ue===null?se=Ae:Ue.sibling=Ae,Ue=Ae);return e&&ee.forEach(function(Ka){return i(Z,Ka)}),Ce&&ea(Z,ve),se}function ce(Z,X,$,gt){if($==null)throw Error(s(151));for(var se=null,Ue=null,ee=X,ve=X=0,Ae=null,Ne=$.next();ee!==null&&!Ne.done;ve++,Ne=$.next()){ee.index>ve?(Ae=ee,ee=null):Ae=ee.sibling;var Ka=st(Z,ee,Ne.value,gt);if(Ka===null){ee===null&&(ee=Ae);break}e&&ee&&Ka.alternate===null&&i(Z,ee),X=h(Ka,X,ve),Ue===null?se=Ka:Ue.sibling=Ka,Ue=Ka,ee=Ae}if(Ne.done)return a(Z,ee),Ce&&ea(Z,ve),se;if(ee===null){for(;!Ne.done;ve++,Ne=$.next())Ne=xt(Z,Ne.value,gt),Ne!==null&&(X=h(Ne,X,ve),Ue===null?se=Ne:Ue.sibling=Ne,Ue=Ne);return Ce&&ea(Z,ve),se}for(ee=o(ee);!Ne.done;ve++,Ne=$.next())Ne=lt(ee,Z,ve,Ne.value,gt),Ne!==null&&(e&&Ne.alternate!==null&&ee.delete(Ne.key===null?ve:Ne.key),X=h(Ne,X,ve),Ue===null?se=Ne:Ue.sibling=Ne,Ue=Ne);return e&&ee.forEach(function(_y){return i(Z,_y)}),Ce&&ea(Z,ve),se}function We(Z,X,$,gt){if(typeof $=="object"&&$!==null&&$.type===A&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:t:{for(var se=$.key;X!==null;){if(X.key===se){if(se=$.type,se===A){if(X.tag===7){a(Z,X.sibling),gt=f(X,$.props.children),gt.return=Z,Z=gt;break t}}else if(X.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Y&&xs(se)===X.type){a(Z,X.sibling),gt=f(X,$.props),vo(gt,$),gt.return=Z,Z=gt;break t}a(Z,X);break}else i(Z,X);X=X.sibling}$.type===A?(gt=ps($.props.children,Z.mode,gt,$.key),gt.return=Z,Z=gt):(gt=Rl($.type,$.key,$.props,null,Z.mode,gt),vo(gt,$),gt.return=Z,Z=gt)}return x(Z);case b:t:{for(se=$.key;X!==null;){if(X.key===se)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Z,X.sibling),gt=f(X,$.children||[]),gt.return=Z,Z=gt;break t}else{a(Z,X);break}else i(Z,X);X=X.sibling}gt=Pu($,Z.mode,gt),gt.return=Z,Z=gt}return x(Z);case Y:return $=xs($),We(Z,X,$,gt)}if(rt($))return Qt(Z,X,$,gt);if(it($)){if(se=it($),typeof se!="function")throw Error(s(150));return $=se.call($),ce(Z,X,$,gt)}if(typeof $.then=="function")return We(Z,X,Ol($),gt);if($.$$typeof===D)return We(Z,X,Dl(Z,$),gt);Pl(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Z,X.sibling),gt=f(X,$),gt.return=Z,Z=gt):(a(Z,X),gt=Ou($,Z.mode,gt),gt.return=Z,Z=gt),x(Z)):a(Z,X)}return function(Z,X,$,gt){try{_o=0;var se=We(Z,X,$,gt);return sr=null,se}catch(ee){if(ee===ar||ee===Ul)throw ee;var Ue=Jn(29,ee,null,Z.mode);return Ue.lanes=gt,Ue.return=Z,Ue}}}var ys=pm(!0),mm=pm(!1),Na=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var f=o.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),o.pending=i,i=Al(e),Jp(e,null,a),i}return Tl(e,o,i,a),Al(e)}function xo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,Jr(e,a)}}function Zu(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?f=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Ku=!1;function So(){if(Ku){var e=ir;if(e!==null)throw e}}function yo(e,i,a,o){Ku=!1;var f=e.updateQueue;Na=!1;var h=f.firstBaseUpdate,x=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var V=R,tt=V.next;V.next=null,x===null?h=tt:x.next=tt,x=V;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==x&&(R===null?dt.firstBaseUpdate=tt:R.next=tt,dt.lastBaseUpdate=V))}if(h!==null){var xt=f.baseState;x=0,dt=tt=V=null,R=h;do{var st=R.lane&-536870913,lt=st!==R.lane;if(lt?(Te&st)===st:(o&st)===st){st!==0&&st===nr&&(Ku=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Qt=e,ce=R;st=i;var We=a;switch(ce.tag){case 1:if(Qt=ce.payload,typeof Qt=="function"){xt=Qt.call(We,xt,st);break t}xt=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=ce.payload,st=typeof Qt=="function"?Qt.call(We,xt,st):Qt,st==null)break t;xt=_({},xt,st);break t;case 2:Na=!0}}st=R.callback,st!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=f.callbacks,lt===null?f.callbacks=[st]:lt.push(st))}else lt={lane:st,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(tt=dt=lt,V=xt):dt=dt.next=lt,x|=st;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,f.lastBaseUpdate=lt,f.shared.pending=null}}while(!0);dt===null&&(V=xt),f.baseState=V,f.firstBaseUpdate=tt,f.lastBaseUpdate=dt,h===null&&(f.shared.lanes=0),Ha|=x,e.lanes=x,e.memoizedState=xt}}function gm(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function _m(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gm(a[e],i)}var rr=N(null),zl=N(0);function vm(e,i){e=ha,pt(zl,e),pt(rr,i),ha=e|i.baseLanes}function Qu(){pt(zl,ha),pt(rr,rr.current)}function Ju(){ha=zl.current,et(rr),et(zl)}var $n=N(null),pi=null;function za(e){var i=e.alternate;pt(sn,sn.current&1),pt($n,e),pi===null&&(i===null||rr.current!==null||i.memoizedState!==null)&&(pi=e)}function $u(e){pt(sn,sn.current),pt($n,e),pi===null&&(pi=e)}function xm(e){e.tag===22?(pt(sn,sn.current),pt($n,e),pi===null&&(pi=e)):Fa()}function Fa(){pt(sn,sn.current),pt($n,$n.current)}function ti(e){et($n),pi===e&&(pi=null),et(sn)}var sn=N(0);function Fl(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rh(a)||oh(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var aa=0,ge=null,ke=null,cn=null,Il=!1,or=!1,Ms=!1,Bl=0,Mo=0,lr=null,oS=0;function en(){throw Error(s(321))}function tf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!Qn(e[a],i[a]))return!1;return!0}function ef(e,i,a,o,f,h){return aa=h,ge=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=e===null||e.memoizedState===null?ng:_f,Ms=!1,h=a(o,f),Ms=!1,or&&(h=ym(i,a,o,f)),Sm(e),h}function Sm(e){O.H=To;var i=ke!==null&&ke.next!==null;if(aa=0,cn=ke=ge=null,Il=!1,Mo=0,lr=null,i)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&wl(e)&&(un=!0))}function ym(e,i,a,o){ge=e;var f=0;do{if(or&&(lr=null),Mo=0,or=!1,25<=f)throw Error(s(301));if(f+=1,cn=ke=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=ig,h=i(a,o)}while(or);return h}function lS(){var e=O.H,i=e.useState()[0];return i=typeof i.then=="function"?Eo(i):i,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(ge.flags|=1024),i}function nf(){var e=Bl!==0;return Bl=0,e}function af(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function sf(e){if(Il){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Il=!1}aa=0,cn=ke=ge=null,or=!1,Mo=Bl=0,lr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ge.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(ke===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var i=cn===null?ge.memoizedState:cn.next;if(i!==null)cn=i,ke=e;else{if(e===null)throw ge.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},cn===null?ge.memoizedState=cn=e:cn=cn.next=e}return cn}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var i=Mo;return Mo+=1,lr===null&&(lr=[]),e=fm(lr,e,i),i=ge,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?ng:_f),e}function Gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===D)return Cn(e)}throw Error(s(438,String(e)))}function rf(e){var i=null,a=ge.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Hl(),ge.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=w;return i.index++,a}function sa(e,i){return typeof i=="function"?i(e):i}function Vl(e){var i=rn();return of(i,ke,e)}function of(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var f=e.baseQueue,h=o.pending;if(h!==null){if(f!==null){var x=f.next;f.next=h.next,h.next=x}i.baseQueue=f=h,o.pending=null}if(h=e.baseState,f===null)e.memoizedState=h;else{i=f.next;var R=x=null,V=null,tt=i,dt=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(Te&xt)===xt:(aa&xt)===xt){var st=tt.revertLane;if(st===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===nr&&(dt=!0);else if((aa&st)===st){tt=tt.next,st===nr&&(dt=!0);continue}else xt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},V===null?(R=V=xt,x=h):V=V.next=xt,ge.lanes|=st,Ha|=st;xt=tt.action,Ms&&a(h,xt),h=tt.hasEagerState?tt.eagerState:a(h,xt)}else st={lane:xt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},V===null?(R=V=st,x=h):V=V.next=st,ge.lanes|=xt,Ha|=xt;tt=tt.next}while(tt!==null&&tt!==i);if(V===null?x=h:V.next=R,!Qn(h,e.memoizedState)&&(un=!0,dt&&(a=ir,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=V,o.lastRenderedState=h}return f===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function lf(e){var i=rn(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var x=f=f.next;do h=e(h,x.action),x=x.next;while(x!==f);Qn(h,i.memoizedState)||(un=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,o]}function Mm(e,i,a){var o=ge,f=rn(),h=Ce;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=i();var x=!Qn((ke||f).memoizedState,a);if(x&&(f.memoizedState=a,un=!0),f=f.queue,ff(Tm.bind(null,o,f,e),[e]),f.getSnapshot!==i||x||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,cr(9,{destroy:void 0},bm.bind(null,o,f,a,i),null),Ye===null)throw Error(s(349));h||(aa&127)!==0||Em(o,i,a)}return a}function Em(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=ge.updateQueue,i===null?(i=Hl(),ge.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function bm(e,i,a,o){i.value=a,i.getSnapshot=o,Am(i)&&Rm(e)}function Tm(e,i,a){return a(function(){Am(i)&&Rm(e)})}function Am(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!Qn(e,a)}catch{return!0}}function Rm(e){var i=ds(e,2);i!==null&&Yn(i,e,2)}function cf(e){var i=In();if(typeof e=="function"){var a=e;if(e=a(),Ms){Yt(!0);try{a()}finally{Yt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},i}function Cm(e,i,a,o){return e.baseState=a,of(e,ke,typeof o=="function"?o:sa)}function cS(e,i,a,o,f){if(Wl(e))throw Error(s(485));if(e=i.action,e!==null){var h={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};O.T!==null?a(!0):h.isTransition=!1,o(h),a=i.pending,a===null?(h.next=i.pending=h,wm(i,h)):(h.next=a.next,i.pending=a.next=h)}}function wm(e,i){var a=i.action,o=i.payload,f=e.state;if(i.isTransition){var h=O.T,x={};O.T=x;try{var R=a(f,o),V=O.S;V!==null&&V(x,R),Dm(e,i,R)}catch(tt){uf(e,i,tt)}finally{h!==null&&x.types!==null&&(h.types=x.types),O.T=h}}else try{h=a(f,o),Dm(e,i,h)}catch(tt){uf(e,i,tt)}}function Dm(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Lm(e,i,o)},function(o){return uf(e,i,o)}):Lm(e,i,a)}function Lm(e,i,a){i.status="fulfilled",i.value=a,Um(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,wm(e,a)))}function uf(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Um(i),i=i.next;while(i!==o)}e.action=null}function Um(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Nm(e,i){return i}function Om(e,i){if(Ce){var a=Ye.formState;if(a!==null){t:{var o=ge;if(Ce){if(Ze){e:{for(var f=Ze,h=di;f.nodeType!==8;){if(!h){f=null;break e}if(f=mi(f.nextSibling),f===null){f=null;break e}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){Ze=mi(f.nextSibling),o=f.data==="F!";break t}}La(o)}o=!1}o&&(i=a[0])}}return a=In(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nm,lastRenderedState:i},a.queue=o,a=$m.bind(null,ge,o),o.dispatch=a,o=cf(!1),h=gf.bind(null,ge,!1,o.queue),o=In(),f={state:i,dispatch:null,action:e,pending:null},o.queue=f,a=cS.bind(null,ge,f,h,a),f.dispatch=a,o.memoizedState=e,[i,a,!1]}function Pm(e){var i=rn();return zm(i,ke,e)}function zm(e,i,a){if(i=of(e,i,Nm)[0],e=Vl(sa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Eo(i)}catch(x){throw x===ar?Ul:x}else o=i;i=rn();var f=i.queue,h=f.dispatch;return a!==i.memoizedState&&(ge.flags|=2048,cr(9,{destroy:void 0},uS.bind(null,f,a),null)),[o,h,e]}function uS(e,i){e.action=i}function Fm(e){var i=rn(),a=ke;if(a!==null)return zm(i,a,e);rn(),i=i.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function cr(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=ge.updateQueue,i===null&&(i=Hl(),ge.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Im(){return rn().memoizedState}function kl(e,i,a,o){var f=In();ge.flags|=e,f.memoizedState=cr(1|i,{destroy:void 0},a,o===void 0?null:o)}function Xl(e,i,a,o){var f=rn();o=o===void 0?null:o;var h=f.memoizedState.inst;ke!==null&&o!==null&&tf(o,ke.memoizedState.deps)?f.memoizedState=cr(i,h,a,o):(ge.flags|=e,f.memoizedState=cr(1|i,h,a,o))}function Bm(e,i){kl(8390656,8,e,i)}function ff(e,i){Xl(2048,8,e,i)}function fS(e){ge.flags|=4;var i=ge.updateQueue;if(i===null)i=Hl(),ge.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function Hm(e){var i=rn().memoizedState;return fS({ref:i,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function Gm(e,i){return Xl(4,2,e,i)}function Vm(e,i){return Xl(4,4,e,i)}function km(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Xm(e,i,a){a=a!=null?a.concat([e]):null,Xl(4,4,km.bind(null,i,e),a)}function hf(){}function Wm(e,i){var a=rn();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&tf(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function qm(e,i){var a=rn();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&tf(i,o[1]))return o[0];if(o=e(),Ms){Yt(!0);try{e()}finally{Yt(!1)}}return a.memoizedState=[o,i],o}function df(e,i,a){return a===void 0||(aa&1073741824)!==0&&(Te&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=Yg(),ge.lanes|=e,Ha|=e,a)}function Ym(e,i,a,o){return Qn(a,i)?a:rr.current!==null?(e=df(e,a,o),Qn(e,i)||(un=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(Te&261930)===0?(un=!0,e.memoizedState=a):(e=Yg(),ge.lanes|=e,Ha|=e,i)}function jm(e,i,a,o,f){var h=B.p;B.p=h!==0&&8>h?h:8;var x=O.T,R={};O.T=R,gf(e,!1,i,a);try{var V=f(),tt=O.S;if(tt!==null&&tt(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var dt=rS(V,o);bo(e,i,dt,ii(e))}else bo(e,i,o,ii(e))}catch(xt){bo(e,i,{then:function(){},status:"rejected",reason:xt},ii())}finally{B.p=h,x!==null&&R.types!==null&&(x.types=R.types),O.T=x}}function hS(){}function pf(e,i,a,o){if(e.tag!==5)throw Error(s(476));var f=Zm(e).queue;jm(e,f,i,J,a===null?hS:function(){return Km(e),a(o)})}function Zm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:J},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Km(e){var i=Zm(e);i.next===null&&(i=e.alternate.memoizedState),bo(e,i.next.queue,{},ii())}function mf(){return Cn(Go)}function Qm(){return rn().memoizedState}function Jm(){return rn().memoizedState}function dS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=ii();e=Oa(a);var o=Pa(i,e,a);o!==null&&(Yn(o,i,a),xo(o,i,a)),i={cache:ku()},e.payload=i;return}i=i.return}}function pS(e,i,a){var o=ii();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wl(e)?tg(i,a):(a=Uu(e,i,a,o),a!==null&&(Yn(a,e,o),eg(a,i,o)))}function $m(e,i,a){var o=ii();bo(e,i,a,o)}function bo(e,i,a,o){var f={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wl(e))tg(i,f);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var x=i.lastRenderedState,R=h(x,a);if(f.hasEagerState=!0,f.eagerState=R,Qn(R,x))return Tl(e,i,f,0),Ye===null&&bl(),!1}catch{}if(a=Uu(e,i,f,o),a!==null)return Yn(a,e,o),eg(a,i,o),!0}return!1}function gf(e,i,a,o){if(o={lane:2,revertLane:jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(e)){if(i)throw Error(s(479))}else i=Uu(e,a,o,2),i!==null&&Yn(i,e,2)}function Wl(e){var i=e.alternate;return e===ge||i!==null&&i===ge}function tg(e,i){or=Il=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function eg(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,Jr(e,a)}}var To={readContext:Cn,use:Gl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};To.useEffectEvent=en;var ng={readContext:Cn,use:Gl,useCallback:function(e,i){return In().memoizedState=[e,i===void 0?null:i],e},useContext:Cn,useEffect:Bm,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,kl(4194308,4,km.bind(null,i,e),a)},useLayoutEffect:function(e,i){return kl(4194308,4,e,i)},useInsertionEffect:function(e,i){kl(4,2,e,i)},useMemo:function(e,i){var a=In();i=i===void 0?null:i;var o=e();if(Ms){Yt(!0);try{e()}finally{Yt(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=In();if(a!==void 0){var f=a(i);if(Ms){Yt(!0);try{a(i)}finally{Yt(!1)}}}else f=i;return o.memoizedState=o.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},o.queue=e,e=e.dispatch=pS.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var i=In();return e={current:e},i.memoizedState=e},useState:function(e){e=cf(e);var i=e.queue,a=$m.bind(null,ge,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(e,i){var a=In();return df(a,e,i)},useTransition:function(){var e=cf(!1);return e=jm.bind(null,ge,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=ge,f=In();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Ye===null)throw Error(s(349));(Te&127)!==0||Em(o,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,Bm(Tm.bind(null,o,h,e),[e]),o.flags|=2048,cr(9,{destroy:void 0},bm.bind(null,o,h,a,i),null),a},useId:function(){var e=In(),i=Ye.identifierPrefix;if(Ce){var a=zi,o=Pi;a=(o&~(1<<32-Wt(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=Bl++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=oS++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:mf,useFormState:Om,useActionState:Om,useOptimistic:function(e){var i=In();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=gf.bind(null,ge,!0,a),a.dispatch=i,[e,i]},useMemoCache:rf,useCacheRefresh:function(){return In().memoizedState=dS.bind(null,ge)},useEffectEvent:function(e){var i=In(),a={impl:e};return i.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},_f={readContext:Cn,use:Gl,useCallback:Wm,useContext:Cn,useEffect:ff,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:Vl,useRef:Im,useState:function(){return Vl(sa)},useDebugValue:hf,useDeferredValue:function(e,i){var a=rn();return Ym(a,ke.memoizedState,e,i)},useTransition:function(){var e=Vl(sa)[0],i=rn().memoizedState;return[typeof e=="boolean"?e:Eo(e),i]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:mf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e,i){var a=rn();return Cm(a,ke,e,i)},useMemoCache:rf,useCacheRefresh:Jm};_f.useEffectEvent=Hm;var ig={readContext:Cn,use:Gl,useCallback:Wm,useContext:Cn,useEffect:ff,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:lf,useRef:Im,useState:function(){return lf(sa)},useDebugValue:hf,useDeferredValue:function(e,i){var a=rn();return ke===null?df(a,e,i):Ym(a,ke.memoizedState,e,i)},useTransition:function(){var e=lf(sa)[0],i=rn().memoizedState;return[typeof e=="boolean"?e:Eo(e),i]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:mf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e,i){var a=rn();return ke!==null?Cm(a,ke,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:rf,useCacheRefresh:Jm};ig.useEffectEvent=Hm;function vf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:_({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xf={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=ii(),f=Oa(o);f.payload=i,a!=null&&(f.callback=a),i=Pa(e,f,o),i!==null&&(Yn(i,e,o),xo(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=ii(),f=Oa(o);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=Pa(e,f,o),i!==null&&(Yn(i,e,o),xo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=ii(),o=Oa(a);o.tag=2,i!=null&&(o.callback=i),i=Pa(e,o,a),i!==null&&(Yn(i,e,a),xo(i,e,a))}};function ag(e,i,a,o,f,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):i.prototype&&i.prototype.isPureReactComponent?!uo(a,o)||!uo(f,h):!0}function sg(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&xf.enqueueReplaceState(i,i.state,null)}function Es(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=_({},a));for(var f in e)a[f]===void 0&&(a[f]=e[f])}return a}function rg(e){El(e)}function og(e){console.error(e)}function lg(e){El(e)}function ql(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function cg(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Sf(e,i,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(e,i)},a}function ug(e){return e=Oa(e),e.tag=3,e}function fg(e,i,a,o){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var h=o.value;e.payload=function(){return f(h)},e.callback=function(){cg(i,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){cg(i,a,o),typeof f!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function mS(e,i,a,o,f){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&er(i,a,f,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?ac():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=f,o===Nl?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),Wf(e,o,f)),!1;case 22:return a.flags|=65536,o===Nl?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),Wf(e,o,f)),!1}throw Error(s(435,a.tag))}return Wf(e,o,f),ac(),!1}if(Ce)return i=$n.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,o!==Iu&&(e=Error(s(422),{cause:o}),po(ui(e,a)))):(o!==Iu&&(i=Error(s(423),{cause:o}),po(ui(i,a))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,o=ui(o,a),f=Sf(e.stateNode,o,f),Zu(e,f),nn!==4&&(nn=2)),!1;var h=Error(s(520),{cause:o});if(h=ui(h,a),No===null?No=[h]:No.push(h),nn!==4&&(nn=2),i===null)return!0;o=ui(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=f&-f,a.lanes|=e,e=Sf(a.stateNode,o,e),Zu(a,e),!1;case 1:if(i=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ga===null||!Ga.has(h))))return a.flags|=65536,f&=-f,a.lanes|=f,f=ug(f),fg(f,e,a,o),Zu(a,f),!1}a=a.return}while(a!==null);return!1}var yf=Error(s(461)),un=!1;function wn(e,i,a,o){i.child=e===null?mm(i,null,a,o):ys(i,e.child,a,o)}function hg(e,i,a,o,f){a=a.render;var h=i.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return _s(i),o=ef(e,i,a,x,h,f),R=nf(),e!==null&&!un?(af(e,i,f),ra(e,i,f)):(Ce&&R&&zu(i),i.flags|=1,wn(e,i,o,f),i.child)}function dg(e,i,a,o,f){if(e===null){var h=a.type;return typeof h=="function"&&!Nu(h)&&h.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=h,pg(e,i,h,o,f)):(e=Rl(a.type,null,o,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(h=e.child,!wf(e,f)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(x,o)&&e.ref===i.ref)return ra(e,i,f)}return i.flags|=1,e=ta(h,o),e.ref=i.ref,e.return=i,i.child=e}function pg(e,i,a,o,f){if(e!==null){var h=e.memoizedProps;if(uo(h,o)&&e.ref===i.ref)if(un=!1,i.pendingProps=o=h,wf(e,f))(e.flags&131072)!==0&&(un=!0);else return i.lanes=e.lanes,ra(e,i,f)}return Mf(e,i,a,o,f)}function mg(e,i,a,o){var f=o.children,h=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=i.child=e.child,f=0;o!==null;)f=f|o.lanes|o.childLanes,o=o.sibling;o=f&~h}else o=0,i.child=null;return gg(e,i,h,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ll(i,h!==null?h.cachePool:null),h!==null?vm(i,h):Qu(),xm(i);else return o=i.lanes=536870912,gg(e,i,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Ll(i,h.cachePool),vm(i,h),Fa(),i.memoizedState=null):(e!==null&&Ll(i,null),Qu(),Fa());return wn(e,i,f,a),i.child}function Ao(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function gg(e,i,a,o,f){var h=Wu();return h=h===null?null:{parent:ln._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Ll(i,null),Qu(),xm(i),e!==null&&er(e,i,o,!0),i.childLanes=f,null}function Yl(e,i){return i=Zl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function _g(e,i,a){return ys(i,e.child,null,a),e=Yl(i,i.pendingProps),e.flags|=2,ti(i),i.memoizedState=null,e}function gS(e,i,a){var o=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ce){if(o.mode==="hidden")return e=Yl(i,o),i.lanes=536870912,Ao(null,e);if($u(i),(e=Ze)?(e=w0(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=i,i.child=a,Rn=i,Ze=null)):e=null,e===null)throw La(i);return i.lanes=536870912,null}return Yl(i,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if($u(i),f)if(i.flags&256)i.flags&=-257,i=_g(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(un||er(e,i,a,!1),f=(a&e.childLanes)!==0,un||f){if(o=Ye,o!==null&&(x=Hs(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,ds(e,x),Yn(o,e,x),yf;ac(),i=_g(e,i,a)}else e=h.treeContext,Ze=mi(x.nextSibling),Rn=i,Ce=!0,Da=null,di=!1,e!==null&&im(i,e),i=Yl(i,o),i.flags|=4096;return i}return e=ta(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function jl(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Mf(e,i,a,o,f){return _s(i),a=ef(e,i,a,o,void 0,f),o=nf(),e!==null&&!un?(af(e,i,f),ra(e,i,f)):(Ce&&o&&zu(i),i.flags|=1,wn(e,i,a,f),i.child)}function vg(e,i,a,o,f,h){return _s(i),i.updateQueue=null,a=ym(i,o,a,f),Sm(e),o=nf(),e!==null&&!un?(af(e,i,h),ra(e,i,h)):(Ce&&o&&zu(i),i.flags|=1,wn(e,i,a,h),i.child)}function xg(e,i,a,o,f){if(_s(i),i.stateNode===null){var h=Qs,x=a.contextType;typeof x=="object"&&x!==null&&(h=Cn(x)),h=new a(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=xf,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},Yu(i),x=a.contextType,h.context=typeof x=="object"&&x!==null?Cn(x):Qs,h.state=i.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(vf(i,a,x,o),h.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&xf.enqueueReplaceState(h,h.state,null),yo(i,o,h,f),So(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){h=i.stateNode;var R=i.memoizedProps,V=Es(a,R);h.props=V;var tt=h.context,dt=a.contextType;x=Qs,typeof dt=="object"&&dt!==null&&(x=Cn(dt));var xt=a.getDerivedStateFromProps;dt=typeof xt=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||tt!==x)&&sg(i,h,o,x),Na=!1;var st=i.memoizedState;h.state=st,yo(i,o,h,f),So(),tt=i.memoizedState,R||st!==tt||Na?(typeof xt=="function"&&(vf(i,a,xt,o),tt=i.memoizedState),(V=Na||ag(i,a,V,o,st,tt,x))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=tt),h.props=o,h.state=tt,h.context=x,o=V):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,ju(e,i),x=i.memoizedProps,dt=Es(a,x),h.props=dt,xt=i.pendingProps,st=h.context,tt=a.contextType,V=Qs,typeof tt=="object"&&tt!==null&&(V=Cn(tt)),R=a.getDerivedStateFromProps,(tt=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==xt||st!==V)&&sg(i,h,o,V),Na=!1,st=i.memoizedState,h.state=st,yo(i,o,h,f),So();var lt=i.memoizedState;x!==xt||st!==lt||Na||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof R=="function"&&(vf(i,a,R,o),lt=i.memoizedState),(dt=Na||ag(i,a,dt,o,st,lt,V)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(tt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,lt,V),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,lt,V)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=lt),h.props=o,h.state=lt,h.context=V,o=dt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),o=!1)}return h=o,jl(e,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,e!==null&&o?(i.child=ys(i,e.child,null,f),i.child=ys(i,null,a,f)):wn(e,i,a,f),i.memoizedState=h.state,e=i.child):e=ra(e,i,f),e}function Sg(e,i,a,o){return ms(),i.flags|=256,wn(e,i,a,o),i.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(e){return{baseLanes:e,cachePool:cm()}}function Tf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=ni),e}function yg(e,i,a){var o=i.pendingProps,f=!1,h=(i.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),x&&(f=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ce){if(f?za(i):Fa(),(e=Ze)?(e=w0(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=i,i.child=a,Rn=i,Ze=null)):e=null,e===null)throw La(i);return oh(e)?i.lanes=32:i.lanes=536870912,null}var R=o.children;return o=o.fallback,f?(Fa(),f=i.mode,R=Zl({mode:"hidden",children:R},f),o=ps(o,f,a,null),R.return=i,o.return=i,R.sibling=o,i.child=R,o=i.child,o.memoizedState=bf(a),o.childLanes=Tf(e,x,a),i.memoizedState=Ef,Ao(null,o)):(za(i),Af(i,R))}var V=e.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(h)i.flags&256?(za(i),i.flags&=-257,i=Rf(e,i,a)):i.memoizedState!==null?(Fa(),i.child=e.child,i.flags|=128,i=null):(Fa(),R=o.fallback,f=i.mode,o=Zl({mode:"visible",children:o.children},f),R=ps(R,f,a,null),R.flags|=2,o.return=i,R.return=i,o.sibling=R,i.child=o,ys(i,e.child,null,a),o=i.child,o.memoizedState=bf(a),o.childLanes=Tf(e,x,a),i.memoizedState=Ef,i=Ao(null,o));else if(za(i),oh(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var tt=x.dgst;x=tt,o=Error(s(419)),o.stack="",o.digest=x,po({value:o,source:null,stack:null}),i=Rf(e,i,a)}else if(un||er(e,i,a,!1),x=(a&e.childLanes)!==0,un||x){if(x=Ye,x!==null&&(o=Hs(x,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,ds(e,o),Yn(x,e,o),yf;rh(R)||ac(),i=Rf(e,i,a)}else rh(R)?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,Ze=mi(R.nextSibling),Rn=i,Ce=!0,Da=null,di=!1,e!==null&&im(i,e),i=Af(i,o.children),i.flags|=4096);return i}return f?(Fa(),R=o.fallback,f=i.mode,V=e.child,tt=V.sibling,o=ta(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,tt!==null?R=ta(tt,R):(R=ps(R,f,a,null),R.flags|=2),R.return=i,o.return=i,o.sibling=R,i.child=o,Ao(null,o),o=i.child,R=e.child.memoizedState,R===null?R=bf(a):(f=R.cachePool,f!==null?(V=ln._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=cm(),R={baseLanes:R.baseLanes|a,cachePool:f}),o.memoizedState=R,o.childLanes=Tf(e,x,a),i.memoizedState=Ef,Ao(e.child,o)):(za(i),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(x=i.deletions,x===null?(i.deletions=[e],i.flags|=16):x.push(e)),i.child=a,i.memoizedState=null,a)}function Af(e,i){return i=Zl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Zl(e,i){return e=Jn(22,e,null,i),e.lanes=0,e}function Rf(e,i,a){return ys(i,e.child,null,a),e=Af(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Mg(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Gu(e.return,i,a)}function Cf(e,i,a,o,f,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:f,treeForkCount:h}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=f,x.treeForkCount=h)}function Eg(e,i,a){var o=i.pendingProps,f=o.revealOrder,h=o.tail;o=o.children;var x=sn.current,R=(x&2)!==0;if(R?(x=x&1|2,i.flags|=128):x&=1,pt(sn,x),wn(e,i,o,a),o=Ce?ho:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mg(e,a,i);else if(e.tag===19)Mg(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(a=i.child,f=null;a!==null;)e=a.alternate,e!==null&&Fl(e)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Cf(i,!1,f,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Fl(e)===null){i.child=f;break}e=f.sibling,f.sibling=a,a=f,f=e}Cf(i,!0,a,null,h,o);break;case"together":Cf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function ra(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Ha|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(er(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=ta(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function wf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function _S(e,i,a){switch(i.tag){case 3:Nt(i,i.stateNode.containerInfo),Ua(i,ln,e.memoizedState.cache),ms();break;case 27:case 5:Ht(i);break;case 4:Nt(i,i.stateNode.containerInfo);break;case 10:Ua(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,$u(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(za(i),i.flags|=128,null):(a&i.child.childLanes)!==0?yg(e,i,a):(za(i),e=ra(e,i,a),e!==null?e.sibling:null);za(i);break;case 19:var f=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(er(e,i,a,!1),o=(a&i.childLanes)!==0),f){if(o)return Eg(e,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),pt(sn,sn.current),o)break;return null;case 22:return i.lanes=0,mg(e,i,a,i.pendingProps);case 24:Ua(i,ln,e.memoizedState.cache)}return ra(e,i,a)}function bg(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)un=!0;else{if(!wf(e,a)&&(i.flags&128)===0)return un=!1,_S(e,i,a);un=(e.flags&131072)!==0}else un=!1,Ce&&(i.flags&1048576)!==0&&nm(i,ho,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=xs(i.elementType),i.type=e,typeof e=="function")Nu(e)?(o=Es(e,o),i.tag=1,i=xg(null,i,e,o,a)):(i.tag=0,i=Mf(null,i,e,o,a));else{if(e!=null){var f=e.$$typeof;if(f===L){i.tag=11,i=hg(null,i,e,o,a);break t}else if(f===F){i.tag=14,i=dg(null,i,e,o,a);break t}}throw i=ut(e)||e,Error(s(306,i,""))}}return i;case 0:return Mf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,f=Es(o,i.pendingProps),xg(e,i,o,f,a);case 3:t:{if(Nt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var h=i.memoizedState;f=h.element,ju(e,i),yo(i,o,null,a);var x=i.memoizedState;if(o=x.cache,Ua(i,ln,o),o!==h.cache&&Vu(i,[ln],a,!0),So(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Sg(e,i,o,a);break t}else if(o!==f){f=ui(Error(s(424)),i),po(f),i=Sg(e,i,o,a);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=mi(e.firstChild),Rn=i,Ce=!0,Da=null,di=!0,a=mm(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),o===f){i=ra(e,i,a);break t}wn(e,i,o,a)}i=i.child}return i;case 26:return jl(e,i),e===null?(a=P0(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ce||(a=i.type,e=i.pendingProps,o=fc(nt.current).createElement(a),o[on]=i,o[yn]=e,Dn(o,a,e),C(o),i.stateNode=o):i.memoizedState=P0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ht(i),e===null&&Ce&&(o=i.stateNode=U0(i.type,i.pendingProps,nt.current),Rn=i,di=!0,f=Ze,Wa(i.type)?(lh=f,Ze=mi(o.firstChild)):Ze=f),wn(e,i,i.pendingProps.children,a),jl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ce&&((f=o=Ze)&&(o=YS(o,i.type,i.pendingProps,di),o!==null?(i.stateNode=o,Rn=i,Ze=mi(o.firstChild),di=!1,f=!0):f=!1),f||La(i)),Ht(i),f=i.type,h=i.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,ih(f,h)?o=null:x!==null&&ih(f,x)&&(i.flags|=32),i.memoizedState!==null&&(f=ef(e,i,lS,null,null,a),Go._currentValue=f),jl(e,i),wn(e,i,o,a),i.child;case 6:return e===null&&Ce&&((e=a=Ze)&&(a=jS(a,i.pendingProps,di),a!==null?(i.stateNode=a,Rn=i,Ze=null,e=!0):e=!1),e||La(i)),null;case 13:return yg(e,i,a);case 4:return Nt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=ys(i,null,o,a):wn(e,i,o,a),i.child;case 11:return hg(e,i,i.type,i.pendingProps,a);case 7:return wn(e,i,i.pendingProps,a),i.child;case 8:return wn(e,i,i.pendingProps.children,a),i.child;case 12:return wn(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Ua(i,i.type,o.value),wn(e,i,o.children,a),i.child;case 9:return f=i.type._context,o=i.pendingProps.children,_s(i),f=Cn(f),o=o(f),i.flags|=1,wn(e,i,o,a),i.child;case 14:return dg(e,i,i.type,i.pendingProps,a);case 15:return pg(e,i,i.type,i.pendingProps,a);case 19:return Eg(e,i,a);case 31:return gS(e,i,a);case 22:return mg(e,i,a,i.pendingProps);case 24:return _s(i),o=Cn(ln),e===null?(f=Wu(),f===null&&(f=Ye,h=ku(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=a),f=h),i.memoizedState={parent:o,cache:f},Yu(i),Ua(i,ln,f)):((e.lanes&a)!==0&&(ju(e,i),yo(i,null,null,a),So()),f=e.memoizedState,h=i.memoizedState,f.parent!==o?(f={parent:o,cache:o},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ua(i,ln,o)):(o=h.cache,Ua(i,ln,o),o!==f.cache&&Vu(i,[ln],a,!0))),wn(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function oa(e){e.flags|=4}function Df(e,i,a,o,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Qg())e.flags|=8192;else throw Ss=Nl,qu}else e.flags&=-16777217}function Tg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!H0(i))if(Qg())e.flags|=8192;else throw Ss=Nl,qu}function Kl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ie():536870912,e.lanes|=i,dr|=i)}function Ro(e,i){if(!Ce)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var f=e.child;f!==null;)a|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)a|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function vS(e,i,a){var o=i.pendingProps;switch(Fu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(i),null;case 1:return Ke(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ia(ln),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tr(i)?oa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bu())),Ke(i),null;case 26:var f=i.type,h=i.memoizedState;return e===null?(oa(i),h!==null?(Ke(i),Tg(i,h)):(Ke(i),Df(i,f,null,o,a))):h?h!==e.memoizedState?(oa(i),Ke(i),Tg(i,h)):(Ke(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&oa(i),Ke(i),Df(i,f,e,o,a)),null;case 27:if(me(i),a=nt.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&oa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Ke(i),null}e=Rt.current,tr(i)?am(i):(e=U0(f,o,a),i.stateNode=e,oa(i))}return Ke(i),null;case 5:if(me(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&oa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Ke(i),null}if(h=Rt.current,tr(i))am(i);else{var x=fc(nt.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(f,{is:o.is}):x.createElement(f)}}h[on]=i,h[yn]=o;t:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break t;for(;x.sibling===null;){if(x.return===null||x.return===i)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=h;t:switch(Dn(h,f,o),f){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&oa(i)}}return Ke(i),Df(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&oa(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=nt.current,tr(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,f=Rn,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}e[on]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||y0(e.nodeValue,a)),e||La(i,!0)}else e=fc(e).createTextNode(o),e[on]=i,i.stateNode=e}return Ke(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(o=tr(i),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),e=!1}else a=Bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(ti(i),i):(ti(i),null);if((i.flags&128)!==0)throw Error(s(558))}return Ke(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=tr(i),o!==null&&o.dehydrated!==null){if(e===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[on]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),f=!1}else f=Bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ti(i),i):(ti(i),null)}return ti(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=i.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==f&&(o.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),Kl(i,i.updateQueue),Ke(i),null);case 4:return Vt(),e===null&&Jf(i.stateNode.containerInfo),Ke(i),null;case 10:return ia(i.type),Ke(i),null;case 19:if(et(sn),o=i.memoizedState,o===null)return Ke(i),null;if(f=(i.flags&128)!==0,h=o.rendering,h===null)if(f)Ro(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(h=Fl(e),h!==null){for(i.flags|=128,Ro(o,!1),e=h.updateQueue,i.updateQueue=e,Kl(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)$p(a,e),a=a.sibling;return pt(sn,sn.current&1|2),Ce&&ea(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&E()>ec&&(i.flags|=128,f=!0,Ro(o,!1),i.lanes=4194304)}else{if(!f)if(e=Fl(h),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Kl(i,e),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ce)return Ke(i),null}else 2*E()-o.renderingStartTime>ec&&a!==536870912&&(i.flags|=128,f=!0,Ro(o,!1),i.lanes=4194304);o.isBackwards?(h.sibling=i.child,i.child=h):(e=o.last,e!==null?e.sibling=h:i.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=sn.current,pt(sn,f?a&1|2:a&1),Ce&&ea(i,o.treeForkCount),e):(Ke(i),null);case 22:case 23:return ti(i),Ju(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(Ke(i),i.subtreeFlags&6&&(i.flags|=8192)):Ke(i),a=i.updateQueue,a!==null&&Kl(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&et(vs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ia(ln),Ke(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function xS(e,i){switch(Fu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ia(ln),Vt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return me(i),null;case 31:if(i.memoizedState!==null){if(ti(i),i.alternate===null)throw Error(s(340));ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ti(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return et(sn),null;case 4:return Vt(),null;case 10:return ia(i.type),null;case 22:case 23:return ti(i),Ju(),e!==null&&et(vs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ia(ln),null;case 25:return null;default:return null}}function Ag(e,i){switch(Fu(i),i.tag){case 3:ia(ln),Vt();break;case 26:case 27:case 5:me(i);break;case 4:Vt();break;case 31:i.memoizedState!==null&&ti(i);break;case 13:ti(i);break;case 19:et(sn);break;case 10:ia(i.type);break;case 22:case 23:ti(i),Ju(),e!==null&&et(vs);break;case 24:ia(ln)}}function Co(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var f=o.next;a=f;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==f)}}catch(R){Ge(i,i.return,R)}}function Ia(e,i,a){try{var o=i.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var h=f.next;o=h;do{if((o.tag&e)===e){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,f=i;var V=a,tt=R;try{tt()}catch(dt){Ge(f,V,dt)}}}o=o.next}while(o!==h)}}catch(dt){Ge(i,i.return,dt)}}function Rg(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{_m(i,a)}catch(o){Ge(e,e.return,o)}}}function Cg(e,i,a){a.props=Es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,i,o)}}function wo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(f){Ge(e,i,f)}}function Fi(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(f){Ge(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){Ge(e,i,f)}else a.current=null}function wg(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(f){Ge(e,e.return,f)}}function Lf(e,i,a){try{var o=e.stateNode;GS(o,e.type,a,i),o[yn]=i}catch(f){Ge(e,e.return,f)}}function Dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function Uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nf(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ji));else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Nf(e,i,a),e=e.sibling;e!==null;)Nf(e,i,a),e=e.sibling}function Ql(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ql(e,i,a),e=e.sibling;e!==null;)Ql(e,i,a),e=e.sibling}function Lg(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Dn(i,o,a),i[on]=e,i[yn]=a}catch(h){Ge(e,e.return,h)}}var la=!1,fn=!1,Of=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,xn=null;function SS(e,i){if(e=e.containerInfo,eh=vc,e=Xp(e),Au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var f=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,R=-1,V=-1,tt=0,dt=0,xt=e,st=null;e:for(;;){for(var lt;xt!==a||f!==0&&xt.nodeType!==3||(R=x+f),xt!==h||o!==0&&xt.nodeType!==3||(V=x+o),xt.nodeType===3&&(x+=xt.nodeValue.length),(lt=xt.firstChild)!==null;)st=xt,xt=lt;for(;;){if(xt===e)break e;if(st===a&&++tt===f&&(R=x),st===h&&++dt===o&&(V=x),(lt=xt.nextSibling)!==null)break;xt=st,st=xt.parentNode}xt=lt}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(nh={focusedElem:e,selectionRange:a},vc=!1,xn=i;xn!==null;)if(i=xn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,xn=e;else for(;xn!==null;){switch(i=xn,h=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)f=e[a],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=i,f=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Qt=Es(a.type,f);e=o.getSnapshotBeforeUpdate(Qt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Ge(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)sh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,xn=e;break}xn=i.return}}function Ng(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),o&4&&Co(5,a);break;case 1:if(ua(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(x){Ge(a,a.return,x)}else{var f=Es(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ge(a,a.return,x)}}o&64&&Rg(a),o&512&&wo(a,a.return);break;case 3:if(ua(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{_m(e,i)}catch(x){Ge(a,a.return,x)}}break;case 27:i===null&&o&4&&Lg(a);case 26:case 5:ua(e,a),i===null&&o&4&&wg(a),o&512&&wo(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),o&4&&zg(e,a);break;case 13:ua(e,a),o&4&&Fg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wS.bind(null,a),ZS(e,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){i=i!==null&&i.memoizedState!==null||fn,f=la;var h=fn;la=o,(fn=i)&&!h?fa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),la=f,fn=h}break;case 30:break;default:ua(e,a)}}function Og(e){var i=e.alternate;i!==null&&(e.alternate=null,Og(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&no(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,kn=!1;function ca(e,i,a){for(a=a.child;a!==null;)Pg(e,i,a),a=a.sibling}function Pg(e,i,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:fn||Fi(a,i),ca(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Fi(a,i);var o=Je,f=kn;Wa(a.type)&&(Je=a.stateNode,kn=!1),ca(e,i,a),Io(a.stateNode),Je=o,kn=f;break;case 5:fn||Fi(a,i);case 6:if(o=Je,f=kn,Je=null,ca(e,i,a),Je=o,kn=f,Je!==null)if(kn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(h){Ge(a,i,h)}else try{Je.removeChild(a.stateNode)}catch(h){Ge(a,i,h)}break;case 18:Je!==null&&(kn?(e=Je,R0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):R0(Je,a.stateNode));break;case 4:o=Je,f=kn,Je=a.stateNode.containerInfo,kn=!0,ca(e,i,a),Je=o,kn=f;break;case 0:case 11:case 14:case 15:Ia(2,a,i),fn||Ia(4,a,i),ca(e,i,a);break;case 1:fn||(Fi(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Cg(a,i,o)),ca(e,i,a);break;case 21:ca(e,i,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ca(e,i,a),fn=o;break;default:ca(e,i,a)}}function zg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){Ge(i,i.return,a)}}}function Fg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){Ge(i,i.return,a)}}function yS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ug),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ug),i;default:throw Error(s(435,e.tag))}}function Jl(e,i){var a=yS(e);i.forEach(function(o){if(!a.has(o)){a.add(o);var f=DS.bind(null,e,o);o.then(f,f)}})}function Xn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var f=a[o],h=e,x=i,R=x;t:for(;R!==null;){switch(R.tag){case 27:if(Wa(R.type)){Je=R.stateNode,kn=!1;break t}break;case 5:Je=R.stateNode,kn=!1;break t;case 3:case 4:Je=R.stateNode.containerInfo,kn=!0;break t}R=R.return}if(Je===null)throw Error(s(160));Pg(h,x,f),Je=null,kn=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Ig(i,e),i=i.sibling}var Ai=null;function Ig(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(i,e),Wn(e),o&4&&(Ia(3,e,e.return),Co(3,e),Ia(5,e,e.return));break;case 1:Xn(i,e),Wn(e),o&512&&(fn||a===null||Fi(a,a.return)),o&64&&la&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var f=Ai;if(Xn(i,e),Wn(e),o&512&&(fn||a===null||Fi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,f=f.ownerDocument||f;e:switch(o){case"title":h=f.getElementsByTagName("title")[0],(!h||h[ls]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(o),f.head.insertBefore(h,f.querySelector("head > title"))),Dn(h,o,a),h[on]=e,C(h),o=h;break t;case"link":var x=I0("link","href",f).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(h=x[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break e}}h=f.createElement(o),Dn(h,o,a),f.head.appendChild(h);break;case"meta":if(x=I0("meta","content",f).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(h=x[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break e}}h=f.createElement(o),Dn(h,o,a),f.head.appendChild(h);break;default:throw Error(s(468,o))}h[on]=e,C(h),o=h}e.stateNode=o}else B0(f,e.type,e.stateNode);else e.stateNode=F0(f,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?B0(f,e.type,e.stateNode):F0(f,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(i,e),Wn(e),o&512&&(fn||a===null||Fi(a,a.return)),a!==null&&o&4&&Lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(i,e),Wn(e),o&512&&(fn||a===null||Fi(a,a.return)),e.flags&32){f=e.stateNode;try{pn(f,"")}catch(Qt){Ge(e,e.return,Qt)}}o&4&&e.stateNode!=null&&(f=e.memoizedProps,Lf(e,f,a!==null?a.memoizedProps:f)),o&1024&&(Of=!0);break;case 6:if(Xn(i,e),Wn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Qt){Ge(e,e.return,Qt)}}break;case 3:if(pc=null,f=Ai,Ai=hc(i.containerInfo),Xn(i,e),Ai=f,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(i.containerInfo)}catch(Qt){Ge(e,e.return,Qt)}Of&&(Of=!1,Bg(e));break;case 4:o=Ai,Ai=hc(e.stateNode.containerInfo),Xn(i,e),Wn(e),Ai=o;break;case 12:Xn(i,e),Wn(e);break;case 31:Xn(i,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 13:Xn(i,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 22:f=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,tt=la,dt=fn;if(la=tt||f,fn=dt||V,Xn(i,e),fn=dt,la=tt,Wn(e),o&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||V||la||fn||bs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){V=a=i;try{if(h=V.stateNode,f)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=V.stateNode;var xt=V.memoizedProps.style,st=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;R.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Qt){Ge(V,V.return,Qt)}}}else if(i.tag===6){if(a===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Qt){Ge(V,V.return,Qt)}}}else if(i.tag===18){if(a===null){V=i;try{var lt=V.stateNode;f?C0(lt,!0):C0(V.stateNode,!1)}catch(Qt){Ge(V,V.return,Qt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Jl(e,a))));break;case 19:Xn(i,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 30:break;case 21:break;default:Xn(i,e),Wn(e)}}function Wn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(Dg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,h=Uf(e);Ql(e,h,f);break;case 5:var x=a.stateNode;a.flags&32&&(pn(x,""),a.flags&=-33);var R=Uf(e);Ql(e,R,x);break;case 3:case 4:var V=a.stateNode.containerInfo,tt=Uf(e);Nf(e,tt,V);break;default:throw Error(s(161))}}catch(dt){Ge(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Bg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Bg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ua(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ng(e,i.alternate,i),i=i.sibling}function bs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ia(4,i,i.return),bs(i);break;case 1:Fi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Cg(i,i.return,a),bs(i);break;case 27:Io(i.stateNode);case 26:case 5:Fi(i,i.return),bs(i);break;case 22:i.memoizedState===null&&bs(i);break;case 30:bs(i);break;default:bs(i)}e=e.sibling}}function fa(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,f=e,h=i,x=h.flags;switch(h.tag){case 0:case 11:case 15:fa(f,h,a),Co(4,h);break;case 1:if(fa(f,h,a),o=h,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(tt){Ge(o,o.return,tt)}if(o=h,f=o.updateQueue,f!==null){var R=o.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)gm(V[f],R)}catch(tt){Ge(o,o.return,tt)}}a&&x&64&&Rg(h),wo(h,h.return);break;case 27:Lg(h);case 26:case 5:fa(f,h,a),a&&o===null&&x&4&&wg(h),wo(h,h.return);break;case 12:fa(f,h,a);break;case 31:fa(f,h,a),a&&x&4&&zg(f,h);break;case 13:fa(f,h,a),a&&x&4&&Fg(f,h);break;case 22:h.memoizedState===null&&fa(f,h,a),wo(h,h.return);break;case 30:break;default:fa(f,h,a)}i=i.sibling}}function Pf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&mo(a))}function zf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&mo(e))}function Ri(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Hg(e,i,a,o),i=i.sibling}function Hg(e,i,a,o){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ri(e,i,a,o),f&2048&&Co(9,i);break;case 1:Ri(e,i,a,o);break;case 3:Ri(e,i,a,o),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&mo(e)));break;case 12:if(f&2048){Ri(e,i,a,o),e=i.stateNode;try{var h=i.memoizedProps,x=h.id,R=h.onPostCommit;typeof R=="function"&&R(x,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ge(i,i.return,V)}}else Ri(e,i,a,o);break;case 31:Ri(e,i,a,o);break;case 13:Ri(e,i,a,o);break;case 23:break;case 22:h=i.stateNode,x=i.alternate,i.memoizedState!==null?h._visibility&2?Ri(e,i,a,o):Do(e,i):h._visibility&2?Ri(e,i,a,o):(h._visibility|=2,ur(e,i,a,o,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Pf(x,i);break;case 24:Ri(e,i,a,o),f&2048&&zf(i.alternate,i);break;default:Ri(e,i,a,o)}}function ur(e,i,a,o,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=e,x=i,R=a,V=o,tt=x.flags;switch(x.tag){case 0:case 11:case 15:ur(h,x,R,V,f),Co(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?ur(h,x,R,V,f):Do(h,x):(dt._visibility|=2,ur(h,x,R,V,f)),f&&tt&2048&&Pf(x.alternate,x);break;case 24:ur(h,x,R,V,f),f&&tt&2048&&zf(x.alternate,x);break;default:ur(h,x,R,V,f)}i=i.sibling}}function Do(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,f=o.flags;switch(o.tag){case 22:Do(a,o),f&2048&&Pf(o.alternate,o);break;case 24:Do(a,o),f&2048&&zf(o.alternate,o);break;default:Do(a,o)}i=i.sibling}}var Lo=8192;function fr(e,i,a){if(e.subtreeFlags&Lo)for(e=e.child;e!==null;)Gg(e,i,a),e=e.sibling}function Gg(e,i,a){switch(e.tag){case 26:fr(e,i,a),e.flags&Lo&&e.memoizedState!==null&&oy(a,Ai,e.memoizedState,e.memoizedProps);break;case 5:fr(e,i,a);break;case 3:case 4:var o=Ai;Ai=hc(e.stateNode.containerInfo),fr(e,i,a),Ai=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Lo,Lo=16777216,fr(e,i,a),Lo=o):fr(e,i,a));break;default:fr(e,i,a)}}function Vg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Uo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];xn=o,Xg(o,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kg(e),e=e.sibling}function kg(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&Ia(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,$l(e)):Uo(e);break;default:Uo(e)}}function $l(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];xn=o,Xg(o,e)}Vg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ia(8,i,i.return),$l(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,$l(i));break;default:$l(i)}e=e.sibling}}function Xg(e,i){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var f=o.sibling,h=o.return;if(Og(o),o===a){xn=null;break t}if(f!==null){f.return=h,xn=f;break t}xn=h}}}var MS={getCacheForType:function(e){var i=Cn(ln),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return Cn(ln).controller.signal}},ES=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ye=null,Ee=null,Te=0,He=0,ei=null,Ba=!1,hr=!1,Ff=!1,ha=0,nn=0,Ha=0,Ts=0,If=0,ni=0,dr=0,No=null,qn=null,Bf=!1,tc=0,Wg=0,ec=1/0,nc=null,Ga=null,mn=0,Va=null,pr=null,da=0,Hf=0,Gf=null,qg=null,Oo=0,Vf=null;function ii(){return(ze&2)!==0&&Te!==0?Te&-Te:O.T!==null?jf():to()}function Yg(){if(ni===0)if((Te&536870912)===0||Ce){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function Yn(e,i,a){(e===Ye&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(mr(e,0),ka(e,Te,ni,!1)),Nn(e,a),((ze&2)===0||e!==Ye)&&(e===Ye&&((ze&2)===0&&(Ts|=a),nn===4&&ka(e,Te,ni,!1)),Ii(e))}function jg(e,i,a){if((ze&6)!==0)throw Error(s(327));var o=!a&&(i&127)===0&&(i&e.expiredLanes)===0||Ut(e,i),f=o?AS(e,i):Xf(e,i,!0),h=o;do{if(f===0){hr&&!o&&ka(e,i,0,!1);break}else{if(a=e.current.alternate,h&&!bS(a)){f=Xf(e,i,!1),h=!1;continue}if(f===2){if(h=i,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;t:{var R=e;f=No;var V=R.current.memoizedState.isDehydrated;if(V&&(mr(R,x).flags|=256),x=Xf(R,x,!1),x!==2){if(Ff&&!V){R.errorRecoveryDisabledLanes|=h,Ts|=h,f=4;break t}h=qn,qn=f,h!==null&&(qn===null?qn=h:qn.push.apply(qn,h))}f=x}if(h=!1,f!==2)continue}}if(f===1){mr(e,0),ka(e,i,0,!0);break}t:{switch(o=e,h=f,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:ka(o,i,ni,!Ba);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=tc+300-E(),10<f)){if(ka(o,i,ni,!Ba),yt(o,0,!0)!==0)break t;da=i,o.timeoutHandle=T0(Zg.bind(null,o,a,qn,nc,Bf,i,ni,Ts,dr,Ba,h,"Throttled",-0,0),f);break t}Zg(o,a,qn,nc,Bf,i,ni,Ts,dr,Ba,h,null,-0,0)}}break}while(!0);Ii(e)}function Zg(e,i,a,o,f,h,x,R,V,tt,dt,xt,st,lt){if(e.timeoutHandle=-1,xt=i.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},Gg(i,h,xt);var Qt=(h&62914560)===h?tc-E():(h&4194048)===h?Wg-E():0;if(Qt=ly(xt,Qt),Qt!==null){da=h,e.cancelPendingCommit=Qt(i0.bind(null,e,i,h,a,o,f,x,R,V,dt,xt,null,st,lt)),ka(e,h,x,!tt);return}}i0(e,i,h,a,o,f,x,R,V)}function bS(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var f=a[o],h=f.getSnapshot;f=f.value;try{if(!Qn(h(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ka(e,i,a,o){i&=~If,i&=~Ts,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var f=i;0<f;){var h=31-Wt(f),x=1<<h;o[h]=-1,f&=~x}a!==0&&pl(e,a,i)}function ic(){return(ze&6)===0?(Po(0),!1):!0}function kf(){if(Ee!==null){if(He===0)var e=Ee.return;else e=Ee,na=gs=null,sf(e),sr=null,_o=0,e=Ee;for(;e!==null;)Ag(e.alternate,e),e=e.return;Ee=null}}function mr(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,XS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),da=0,kf(),Ye=e,Ee=a=ta(e.current,null),Te=i,He=0,ei=null,Ba=!1,hr=Ut(e,i),Ff=!1,dr=ni=If=Ts=Ha=nn=0,qn=No=null,Bf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var f=31-Wt(o),h=1<<f;i|=e[f],o&=~h}return ha=i,bl(),a}function Kg(e,i){ge=null,O.H=To,i===ar||i===Ul?(i=hm(),He=3):i===qu?(i=hm(),He=4):He=i===yf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ei=i,Ee===null&&(nn=1,ql(e,ui(i,e.current)))}function Qg(){var e=$n.current;return e===null?!0:(Te&4194048)===Te?pi===null:(Te&62914560)===Te||(Te&536870912)!==0?e===pi:!1}function Jg(){var e=O.H;return O.H=To,e===null?To:e}function $g(){var e=O.A;return O.A=MS,e}function ac(){nn=4,Ba||(Te&4194048)!==Te&&$n.current!==null||(hr=!0),(Ha&134217727)===0&&(Ts&134217727)===0||Ye===null||ka(Ye,Te,ni,!1)}function Xf(e,i,a){var o=ze;ze|=2;var f=Jg(),h=$g();(Ye!==e||Te!==i)&&(nc=null,mr(e,i)),i=!1;var x=nn;t:do try{if(He!==0&&Ee!==null){var R=Ee,V=ei;switch(He){case 8:kf(),x=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(i=!0);var tt=He;if(He=0,ei=null,gr(e,R,V,tt),a&&hr){x=0;break t}break;default:tt=He,He=0,ei=null,gr(e,R,V,tt)}}TS(),x=nn;break}catch(dt){Kg(e,dt)}while(!0);return i&&e.shellSuspendCounter++,na=gs=null,ze=o,O.H=f,O.A=h,Ee===null&&(Ye=null,Te=0,bl()),x}function TS(){for(;Ee!==null;)t0(Ee)}function AS(e,i){var a=ze;ze|=2;var o=Jg(),f=$g();Ye!==e||Te!==i?(nc=null,ec=E()+500,mr(e,i)):hr=Ut(e,i);t:do try{if(He!==0&&Ee!==null){i=Ee;var h=ei;e:switch(He){case 1:He=0,ei=null,gr(e,i,h,1);break;case 2:case 9:if(um(h)){He=0,ei=null,e0(i);break}i=function(){He!==2&&He!==9||Ye!==e||(He=7),Ii(e)},h.then(i,i);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:um(h)?(He=0,ei=null,e0(i)):(He=0,ei=null,gr(e,i,h,7));break;case 5:var x=null;switch(Ee.tag){case 26:x=Ee.memoizedState;case 5:case 27:var R=Ee;if(x?H0(x):R.stateNode.complete){He=0,ei=null;var V=R.sibling;if(V!==null)Ee=V;else{var tt=R.return;tt!==null?(Ee=tt,sc(tt)):Ee=null}break e}}He=0,ei=null,gr(e,i,h,5);break;case 6:He=0,ei=null,gr(e,i,h,6);break;case 8:kf(),nn=6;break t;default:throw Error(s(462))}}RS();break}catch(dt){Kg(e,dt)}while(!0);return na=gs=null,O.H=o,O.A=f,ze=a,Ee!==null?0:(Ye=null,Te=0,bl(),nn)}function RS(){for(;Ee!==null&&!Dt();)t0(Ee)}function t0(e){var i=bg(e.alternate,e,ha);e.memoizedProps=e.pendingProps,i===null?sc(e):Ee=i}function e0(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=vg(a,i,i.pendingProps,i.type,void 0,Te);break;case 11:i=vg(a,i,i.pendingProps,i.type.render,i.ref,Te);break;case 5:sf(i);default:Ag(a,i),i=Ee=$p(i,ha),i=bg(a,i,ha)}e.memoizedProps=e.pendingProps,i===null?sc(e):Ee=i}function gr(e,i,a,o){na=gs=null,sf(i),sr=null,_o=0;var f=i.return;try{if(mS(e,f,i,a,Te)){nn=1,ql(e,ui(a,e.current)),Ee=null;return}}catch(h){if(f!==null)throw Ee=f,h;nn=1,ql(e,ui(a,e.current)),Ee=null;return}i.flags&32768?(Ce||o===1?e=!0:hr||(Te&536870912)!==0?e=!1:(Ba=e=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),n0(i,e)):sc(i)}function sc(e){var i=e;do{if((i.flags&32768)!==0){n0(i,Ba);return}e=i.return;var a=vS(i.alternate,i,ha);if(a!==null){Ee=a;return}if(i=i.sibling,i!==null){Ee=i;return}Ee=i=e}while(i!==null);nn===0&&(nn=5)}function n0(e,i){do{var a=xS(e.alternate,e);if(a!==null){a.flags&=32767,Ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=a}while(e!==null);nn=6,Ee=null}function i0(e,i,a,o,f,h,x,R,V){e.cancelPendingCommit=null;do rc();while(mn!==0);if((ze&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(h=i.lanes|i.childLanes,h|=Lu,Mi(e,a,h,x,R,V),e===Ye&&(Ee=Ye=null,Te=0),pr=i,Va=e,da=a,Hf=h,Gf=f,qg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,LS(ft,function(){return l0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,f=B.p,B.p=2,x=ze,ze|=4;try{SS(e,i,a)}finally{ze=x,B.p=f,O.T=o}}mn=1,a0(),s0(),r0()}}function a0(){if(mn===1){mn=0;var e=Va,i=pr,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=B.p;B.p=2;var f=ze;ze|=4;try{Ig(i,e);var h=nh,x=Xp(e.containerInfo),R=h.focusedElem,V=h.selectionRange;if(x!==R&&R&&R.ownerDocument&&kp(R.ownerDocument.documentElement,R)){if(V!==null&&Au(R)){var tt=V.start,dt=V.end;if(dt===void 0&&(dt=tt),"selectionStart"in R)R.selectionStart=tt,R.selectionEnd=Math.min(dt,R.value.length);else{var xt=R.ownerDocument||document,st=xt&&xt.defaultView||window;if(st.getSelection){var lt=st.getSelection(),Qt=R.textContent.length,ce=Math.min(V.start,Qt),We=V.end===void 0?ce:Math.min(V.end,Qt);!lt.extend&&ce>We&&(x=We,We=ce,ce=x);var Z=Vp(R,ce),X=Vp(R,We);if(Z&&X&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var $=xt.createRange();$.setStart(Z.node,Z.offset),lt.removeAllRanges(),ce>We?(lt.addRange($),lt.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),lt.addRange($))}}}}for(xt=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xt.length;R++){var gt=xt[R];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}vc=!!eh,nh=eh=null}finally{ze=f,B.p=o,O.T=a}}e.current=i,mn=2}}function s0(){if(mn===2){mn=0;var e=Va,i=pr,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=B.p;B.p=2;var f=ze;ze|=4;try{Ng(e,i.alternate,i)}finally{ze=f,B.p=o,O.T=a}}mn=3}}function r0(){if(mn===4||mn===3){mn=0,U();var e=Va,i=pr,a=da,o=qg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?mn=5:(mn=0,pr=Va=null,o0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ga=null),Gs(a),i=i.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(bt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=O.T,f=B.p,B.p=2,O.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var R=o[x];h(R.value,{componentStack:R.stack})}}finally{O.T=i,B.p=f}}(da&3)!==0&&rc(),Ii(e),f=e.pendingLanes,(a&261930)!==0&&(f&42)!==0?e===Vf?Oo++:(Oo=0,Vf=e):Oo=0,Po(0)}}function o0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,mo(i)))}function rc(){return a0(),s0(),r0(),l0()}function l0(){if(mn!==5)return!1;var e=Va,i=Hf;Hf=0;var a=Gs(da),o=O.T,f=B.p;try{B.p=32>a?32:a,O.T=null,a=Gf,Gf=null;var h=Va,x=da;if(mn=0,pr=Va=null,da=0,(ze&6)!==0)throw Error(s(331));var R=ze;if(ze|=4,kg(h.current),Hg(h,h.current,x,a),ze=R,Po(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(bt,h)}catch{}return!0}finally{B.p=f,O.T=o,o0(e,i)}}function c0(e,i,a){i=ui(a,i),i=Sf(e.stateNode,i,2),e=Pa(e,i,2),e!==null&&(Nn(e,2),Ii(e))}function Ge(e,i,a){if(e.tag===3)c0(e,e,a);else for(;i!==null;){if(i.tag===3){c0(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){e=ui(a,e),a=ug(2),o=Pa(i,a,2),o!==null&&(fg(a,o,i,e),Nn(o,2),Ii(o));break}}i=i.return}}function Wf(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new ES;var f=new Set;o.set(i,f)}else f=o.get(i),f===void 0&&(f=new Set,o.set(i,f));f.has(a)||(Ff=!0,f.add(a),e=CS.bind(null,e,i,a),i.then(e,e))}function CS(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Te&a)===a&&(nn===4||nn===3&&(Te&62914560)===Te&&300>E()-tc?(ze&2)===0&&mr(e,0):If|=a,dr===Te&&(dr=0)),Ii(e)}function u0(e,i){i===0&&(i=Ie()),e=ds(e,i),e!==null&&(Nn(e,i),Ii(e))}function wS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),u0(e,a)}function DS(e,i){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,f=e.memoizedState;f!==null&&(a=f.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),u0(e,a)}function LS(e,i){return It(e,i)}var oc=null,_r=null,qf=!1,lc=!1,Yf=!1,Xa=0;function Ii(e){e!==_r&&e.next===null&&(_r===null?oc=_r=e:_r=_r.next=e),lc=!0,qf||(qf=!0,NS())}function Po(e,i){if(!Yf&&lc){Yf=!0;do for(var a=!1,o=oc;o!==null;){if(e!==0){var f=o.pendingLanes;if(f===0)var h=0;else{var x=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Wt(42|e)+1)-1,h&=f&~(x&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,p0(o,h))}else h=Te,h=yt(o,o===Ye?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ut(o,h)||(a=!0,p0(o,h));o=o.next}while(a);Yf=!1}}function US(){f0()}function f0(){lc=qf=!1;var e=0;Xa!==0&&kS()&&(e=Xa);for(var i=E(),a=null,o=oc;o!==null;){var f=o.next,h=h0(o,i);h===0?(o.next=null,a===null?oc=f:a.next=f,f===null&&(_r=a)):(a=o,(e!==0||(h&3)!==0)&&(lc=!0)),o=f}mn!==0&&mn!==5||Po(e),Xa!==0&&(Xa=0)}function h0(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,f=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Wt(h),R=1<<x,V=f[x];V===-1?((R&a)===0||(R&o)!==0)&&(f[x]=he(R,i)):V<=i&&(e.expiredLanes|=R),h&=~R}if(i=Ye,a=Te,a=yt(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ut(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&ie(o),Gs(a)){case 2:case 8:a=St;break;case 32:a=ft;break;case 268435456:a=Lt;break;default:a=ft}return o=d0.bind(null,e),a=It(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&ie(o),e.callbackPriority=2,e.callbackNode=null,2}function d0(e,i){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(rc()&&e.callbackNode!==a)return null;var o=Te;return o=yt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(jg(e,o,i),h0(e,E()),e.callbackNode!=null&&e.callbackNode===a?d0.bind(null,e):null)}function p0(e,i){if(rc())return null;jg(e,i,!0)}function NS(){WS(function(){(ze&6)!==0?It(ct,US):f0()})}function jf(){if(Xa===0){var e=nr;e===0&&(e=Bt,Bt<<=1,(Bt&261888)===0&&(Bt=256)),Xa=e}return Xa}function m0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function g0(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function OS(e,i,a,o,f){if(i==="submit"&&a&&a.stateNode===f){var h=m0((f[yn]||null).action),x=o.submitter;x&&(i=(i=x[yn]||null)?m0(i.formAction):x.getAttribute("formAction"),i!==null&&(h=i,x=null));var R=new Sl("action","action",null,o,f);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var V=x?g0(f,x):new FormData(f);pf(a,{pending:!0,data:V,method:f.method,action:h},null,V)}}else typeof h=="function"&&(R.preventDefault(),V=x?g0(f,x):new FormData(f),pf(a,{pending:!0,data:V,method:f.method,action:h},h,V))},currentTarget:f}]})}}for(var Zf=0;Zf<Du.length;Zf++){var Kf=Du[Zf],PS=Kf.toLowerCase(),zS=Kf[0].toUpperCase()+Kf.slice(1);Ti(PS,"on"+zS)}Ti(Yp,"onAnimationEnd"),Ti(jp,"onAnimationIteration"),Ti(Zp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(Jx,"onTransitionRun"),Ti($x,"onTransitionStart"),Ti(tS,"onTransitionCancel"),Ti(Kp,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function _0(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],f=o.event;o=o.listeners;t:{var h=void 0;if(i)for(var x=o.length-1;0<=x;x--){var R=o[x],V=R.instance,tt=R.currentTarget;if(R=R.listener,V!==h&&f.isPropagationStopped())break t;h=R,f.currentTarget=tt;try{h(f)}catch(dt){El(dt)}f.currentTarget=null,h=V}else for(x=0;x<o.length;x++){if(R=o[x],V=R.instance,tt=R.currentTarget,R=R.listener,V!==h&&f.isPropagationStopped())break t;h=R,f.currentTarget=tt;try{h(f)}catch(dt){El(dt)}f.currentTarget=null,h=V}}}}function be(e,i){var a=i[Vs];a===void 0&&(a=i[Vs]=new Set);var o=e+"__bubble";a.has(o)||(v0(i,e,2,!1),a.add(o))}function Qf(e,i,a){var o=0;i&&(o|=4),v0(a,e,o,i)}var cc="_reactListening"+Math.random().toString(36).slice(2);function Jf(e){if(!e[cc]){e[cc]=!0,j.forEach(function(a){a!=="selectionchange"&&(FS.has(a)||Qf(a,!1,e),Qf(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[cc]||(i[cc]=!0,Qf("selectionchange",!1,i))}}function v0(e,i,a,o){switch(Y0(i)){case 2:var f=fy;break;case 8:f=hy;break;default:f=dh}a=f.bind(null,i,a,e),f=void 0,!_u||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),o?f!==void 0?e.addEventListener(i,a,{capture:!0,passive:f}):e.addEventListener(i,a,!0):f!==void 0?e.addEventListener(i,a,{passive:f}):e.addEventListener(i,a,!1)}function $f(e,i,a,o,f){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===f)break;if(x===4)for(x=o.return;x!==null;){var V=x.tag;if((V===3||V===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;R!==null;){if(x=Ta(R),x===null)return;if(V=x.tag,V===5||V===6||V===26||V===27){o=h=x;continue t}R=R.parentNode}}o=o.return}Ep(function(){var tt=h,dt=mu(a),xt=[];t:{var st=Qp.get(e);if(st!==void 0){var lt=Sl,Qt=e;switch(e){case"keypress":if(vl(a)===0)break t;case"keydown":case"keyup":lt=Dx;break;case"focusin":Qt="focus",lt=yu;break;case"focusout":Qt="blur",lt=yu;break;case"beforeblur":case"afterblur":lt=yu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Nx;break;case Yp:case jp:case Zp:lt=yx;break;case Kp:lt=Px;break;case"scroll":case"scrollend":lt=gx;break;case"wheel":lt=Fx;break;case"copy":case"cut":case"paste":lt=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Cp;break;case"toggle":case"beforetoggle":lt=Bx}var ce=(i&4)!==0,We=!ce&&(e==="scroll"||e==="scrollend"),Z=ce?st!==null?st+"Capture":null:st;ce=[];for(var X=tt,$;X!==null;){var gt=X;if($=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||$===null||Z===null||(gt=io(X,Z),gt!=null&&ce.push(Fo(X,gt,$))),We)break;X=X.return}0<ce.length&&(st=new lt(st,Qt,null,a,dt),xt.push({event:st,listeners:ce}))}}if((i&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",st&&a!==pu&&(Qt=a.relatedTarget||a.fromElement)&&(Ta(Qt)||Qt[Ei]))break t;if((lt||st)&&(st=dt.window===dt?dt:(st=dt.ownerDocument)?st.defaultView||st.parentWindow:window,lt?(Qt=a.relatedTarget||a.toElement,lt=tt,Qt=Qt?Ta(Qt):null,Qt!==null&&(We=c(Qt),ce=Qt.tag,Qt!==We||ce!==5&&ce!==27&&ce!==6)&&(Qt=null)):(lt=null,Qt=tt),lt!==Qt)){if(ce=Ap,gt="onMouseLeave",Z="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Cp,gt="onPointerLeave",Z="onPointerEnter",X="pointer"),We=lt==null?st:cs(lt),$=Qt==null?st:cs(Qt),st=new ce(gt,X+"leave",lt,a,dt),st.target=We,st.relatedTarget=$,gt=null,Ta(dt)===tt&&(ce=new ce(Z,X+"enter",Qt,a,dt),ce.target=$,ce.relatedTarget=We,gt=ce),We=gt,lt&&Qt)e:{for(ce=IS,Z=lt,X=Qt,$=0,gt=Z;gt;gt=ce(gt))$++;gt=0;for(var se=X;se;se=ce(se))gt++;for(;0<$-gt;)Z=ce(Z),$--;for(;0<gt-$;)X=ce(X),gt--;for(;$--;){if(Z===X||X!==null&&Z===X.alternate){ce=Z;break e}Z=ce(Z),X=ce(X)}ce=null}else ce=null;lt!==null&&x0(xt,st,lt,ce,!1),Qt!==null&&We!==null&&x0(xt,We,Qt,ce,!0)}}t:{if(st=tt?cs(tt):window,lt=st.nodeName&&st.nodeName.toLowerCase(),lt==="select"||lt==="input"&&st.type==="file")var Ue=zp;else if(Op(st))if(Fp)Ue=Zx;else{Ue=Yx;var ee=qx}else lt=st.nodeName,!lt||lt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?tt&&bi(tt.elementType)&&(Ue=zp):Ue=jx;if(Ue&&(Ue=Ue(e,tt))){Pp(xt,Ue,a,dt);break t}ee&&ee(e,st,tt),e==="focusout"&&tt&&st.type==="number"&&tt.memoizedProps.value!=null&&En(st,"number",st.value)}switch(ee=tt?cs(tt):window,e){case"focusin":(Op(ee)||ee.contentEditable==="true")&&(js=ee,Ru=tt,fo=null);break;case"focusout":fo=Ru=js=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Wp(xt,a,dt);break;case"selectionchange":if(Qx)break;case"keydown":case"keyup":Wp(xt,a,dt)}var ve;if(Eu)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Ys?Up(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(wp&&a.locale!=="ko"&&(Ys||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Ys&&(ve=bp()):(Ca=dt,vu="value"in Ca?Ca.value:Ca.textContent,Ys=!0)),ee=uc(tt,Ae),0<ee.length&&(Ae=new Rp(Ae,e,null,a,dt),xt.push({event:Ae,listeners:ee}),ve?Ae.data=ve:(ve=Np(a),ve!==null&&(Ae.data=ve)))),(ve=Gx?Vx(e,a):kx(e,a))&&(Ae=uc(tt,"onBeforeInput"),0<Ae.length&&(ee=new Rp("onBeforeInput","beforeinput",null,a,dt),xt.push({event:ee,listeners:Ae}),ee.data=ve)),OS(xt,e,tt,a,dt)}_0(xt,i)})}function Fo(e,i,a){return{instance:e,listener:i,currentTarget:a}}function uc(e,i){for(var a=i+"Capture",o=[];e!==null;){var f=e,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=io(e,a),f!=null&&o.unshift(Fo(e,f,h)),f=io(e,i),f!=null&&o.push(Fo(e,f,h))),e.tag===3)return o;e=e.return}return[]}function IS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x0(e,i,a,o,f){for(var h=i._reactName,x=[];a!==null&&a!==o;){var R=a,V=R.alternate,tt=R.stateNode;if(R=R.tag,V!==null&&V===o)break;R!==5&&R!==26&&R!==27||tt===null||(V=tt,f?(tt=io(a,h),tt!=null&&x.unshift(Fo(a,tt,V))):f||(tt=io(a,h),tt!=null&&x.push(Fo(a,tt,V)))),a=a.return}x.length!==0&&e.push({event:i,listeners:x})}var BS=/\r\n?/g,HS=/\u0000|\uFFFD/g;function S0(e){return(typeof e=="string"?e:""+e).replace(BS,`
`).replace(HS,"")}function y0(e,i){return i=S0(i),S0(e)===i}function Xe(e,i,a,o,f,h){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||pn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&pn(e,""+o);break;case"className":re(e,"class",o);break;case"tabIndex":re(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":re(e,a,o);break;case"style":Xs(e,o,h);break;case"data":if(i!=="object"){re(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(i!=="input"&&Xe(e,i,"name",f.name,f,null),Xe(e,i,"formEncType",f.formEncType,f,null),Xe(e,i,"formMethod",f.formMethod,f,null),Xe(e,i,"formTarget",f.formTarget,f,null)):(Xe(e,i,"encType",f.encType,f,null),Xe(e,i,"method",f.method,f,null),Xe(e,i,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=gl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":be("beforetoggle",e),be("toggle",e),$t(e,"popover",o);break;case"xlinkActuate":te(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":te(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":te(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":te(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":te(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":te(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":te(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":$t(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=px.get(a)||a,$t(e,a,o))}}function th(e,i,a,o,f,h){switch(a){case"style":Xs(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?pn(e,o):(typeof o=="number"||typeof o=="bigint")&&pn(e,""+o);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),h=e[yn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(i,h,f),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,f);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):$t(e,a,o)}}}function Dn(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var o=!1,f=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(e,i,h,x,a,null)}}f&&Xe(e,i,"srcSet",a.srcSet,a,null),o&&Xe(e,i,"src",a.src,a,null);return;case"input":be("invalid",e);var R=h=x=f=null,V=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":f=dt;break;case"type":x=dt;break;case"checked":V=dt;break;case"defaultChecked":tt=dt;break;case"value":h=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,i));break;default:Xe(e,i,o,dt,a,null)}}Qi(e,h,R,V,tt,x,f,!1);return;case"select":be("invalid",e),o=x=h=null;for(f in a)if(a.hasOwnProperty(f)&&(R=a[f],R!=null))switch(f){case"value":h=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Xe(e,i,f,R,a,null)}i=h,a=x,e.multiple=!!o,i!=null?li(e,!!o,i,!1):a!=null&&li(e,!!o,a,!0);return;case"textarea":be("invalid",e),h=f=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":f=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Xe(e,i,x,R,a,null)}bn(e,o,f,h);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Xe(e,i,V,o,a,null));return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(o=0;o<zo.length;o++)be(zo[o],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(e,i,tt,o,a,null)}return;default:if(bi(i)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&th(e,i,dt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Xe(e,i,R,o,a,null))}function GS(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,x=null,R=null,V=null,tt=null,dt=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":V=xt;default:o.hasOwnProperty(lt)||Xe(e,i,lt,null,o,xt)}}for(var st in o){var lt=o[st];if(xt=a[st],o.hasOwnProperty(st)&&(lt!=null||xt!=null))switch(st){case"type":h=lt;break;case"name":f=lt;break;case"checked":tt=lt;break;case"defaultChecked":dt=lt;break;case"value":x=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,i));break;default:lt!==xt&&Xe(e,i,st,lt,o,xt)}}Mn(e,x,R,V,tt,dt,h,f);return;case"select":lt=x=R=st=null;for(h in a)if(V=a[h],a.hasOwnProperty(h)&&V!=null)switch(h){case"value":break;case"multiple":lt=V;default:o.hasOwnProperty(h)||Xe(e,i,h,null,o,V)}for(f in o)if(h=o[f],V=a[f],o.hasOwnProperty(f)&&(h!=null||V!=null))switch(f){case"value":st=h;break;case"defaultValue":R=h;break;case"multiple":x=h;default:h!==V&&Xe(e,i,f,h,o,V)}i=R,a=x,o=lt,st!=null?li(e,!!a,st,!1):!!o!=!!a&&(i!=null?li(e,!!a,i,!0):li(e,!!a,a?[]:"",!1));return;case"textarea":lt=st=null;for(R in a)if(f=a[R],a.hasOwnProperty(R)&&f!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xe(e,i,R,null,o,f)}for(x in o)if(f=o[x],h=a[x],o.hasOwnProperty(x)&&(f!=null||h!=null))switch(x){case"value":st=f;break;case"defaultValue":lt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==h&&Xe(e,i,x,f,o,h)}Be(e,st,lt);return;case"option":for(var Qt in a)st=a[Qt],a.hasOwnProperty(Qt)&&st!=null&&!o.hasOwnProperty(Qt)&&(Qt==="selected"?e.selected=!1:Xe(e,i,Qt,null,o,st));for(V in o)st=o[V],lt=a[V],o.hasOwnProperty(V)&&st!==lt&&(st!=null||lt!=null)&&(V==="selected"?e.selected=st&&typeof st!="function"&&typeof st!="symbol":Xe(e,i,V,st,o,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)st=a[ce],a.hasOwnProperty(ce)&&st!=null&&!o.hasOwnProperty(ce)&&Xe(e,i,ce,null,o,st);for(tt in o)if(st=o[tt],lt=a[tt],o.hasOwnProperty(tt)&&st!==lt&&(st!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,i));break;default:Xe(e,i,tt,st,o,lt)}return;default:if(bi(i)){for(var We in a)st=a[We],a.hasOwnProperty(We)&&st!==void 0&&!o.hasOwnProperty(We)&&th(e,i,We,void 0,o,st);for(dt in o)st=o[dt],lt=a[dt],!o.hasOwnProperty(dt)||st===lt||st===void 0&&lt===void 0||th(e,i,dt,st,o,lt);return}}for(var Z in a)st=a[Z],a.hasOwnProperty(Z)&&st!=null&&!o.hasOwnProperty(Z)&&Xe(e,i,Z,null,o,st);for(xt in o)st=o[xt],lt=a[xt],!o.hasOwnProperty(xt)||st===lt||st==null&&lt==null||Xe(e,i,xt,st,o,lt)}function M0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function VS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var f=a[o],h=f.transferSize,x=f.initiatorType,R=f.duration;if(h&&R&&M0(x)){for(x=0,R=f.responseEnd,o+=1;o<a.length;o++){var V=a[o],tt=V.startTime;if(tt>R)break;var dt=V.transferSize,xt=V.initiatorType;dt&&M0(xt)&&(V=V.responseEnd,x+=dt*(V<R?1:(R-tt)/(V-tt)))}if(--o,i+=8*(h+x)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var eh=null,nh=null;function fc(e){return e.nodeType===9?e:e.ownerDocument}function E0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function b0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ih(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ah=null;function kS(){var e=window.event;return e&&e.type==="popstate"?e===ah?!1:(ah=e,!0):(ah=null,!1)}var T0=typeof setTimeout=="function"?setTimeout:void 0,XS=typeof clearTimeout=="function"?clearTimeout:void 0,A0=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof A0<"u"?function(e){return A0.resolve(null).then(e).catch(qS)}:T0;function qS(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function R0(e,i){var a=i,o=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(f),yr(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Io(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Io(a);for(var h=a.firstChild;h;){var x=h.nextSibling,R=h.nodeName;h[ls]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Io(e.ownerDocument.body);a=f}while(a);yr(i)}function C0(e,i){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function sh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sh(a),no(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function YS(e,i,a,o){for(;e.nodeType===1;){var f=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ls])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function jS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function w0(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=mi(e.nextSibling),e===null))return null;return e}function rh(e){return e.data==="$?"||e.data==="$~"}function oh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ZS(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var lh=null;function D0(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return mi(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function L0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function U0(e,i,a){switch(i=fc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Io(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);no(e)}var gi=new Map,N0=new Set;function hc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=B.d;B.d={f:KS,r:QS,D:JS,C:$S,L:ty,m:ey,X:iy,S:ny,M:ay};function KS(){var e=pa.f(),i=ic();return e||i}function QS(e){var i=Aa(e);i!==null&&i.tag===5&&i.type==="form"?Km(i):pa.r(e)}var vr=typeof document>"u"?null:document;function O0(e,i,a){var o=vr;if(o&&typeof i=="string"&&i){var f=de(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),N0.has(f)||(N0.add(f),e={rel:e,crossOrigin:a,href:i},o.querySelector(f)===null&&(i=o.createElement("link"),Dn(i,"link",e),C(i),o.head.appendChild(i)))}}function JS(e){pa.D(e),O0("dns-prefetch",e,null)}function $S(e,i){pa.C(e,i),O0("preconnect",e,i)}function ty(e,i,a){pa.L(e,i,a);var o=vr;if(o&&e&&i){var f='link[rel="preload"][as="'+de(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+de(a.imageSizes)+'"]')):f+='[href="'+de(e)+'"]';var h=f;switch(i){case"style":h=xr(e);break;case"script":h=Sr(e)}gi.has(h)||(e=_({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),gi.set(h,e),o.querySelector(f)!==null||i==="style"&&o.querySelector(Bo(h))||i==="script"&&o.querySelector(Ho(h))||(i=o.createElement("link"),Dn(i,"link",e),C(i),o.head.appendChild(i)))}}function ey(e,i){pa.m(e,i);var a=vr;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+de(o)+'"][href="'+de(e)+'"]',h=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Sr(e)}if(!gi.has(h)&&(e=_({rel:"modulepreload",href:e},i),gi.set(h,e),a.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ho(h)))return}o=a.createElement("link"),Dn(o,"link",e),C(o),a.head.appendChild(o)}}}function ny(e,i,a){pa.S(e,i,a);var o=vr;if(o&&e){var f=Ra(o).hoistableStyles,h=xr(e);i=i||"default";var x=f.get(h);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(Bo(h)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},a),(a=gi.get(h))&&ch(e,a);var V=x=o.createElement("link");C(V),Dn(V,"link",e),V._p=new Promise(function(tt,dt){V.onload=tt,V.onerror=dt}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,dc(x,i,o)}x={type:"stylesheet",instance:x,count:1,state:R},f.set(h,x)}}}function iy(e,i){pa.X(e,i);var a=vr;if(a&&e){var o=Ra(a).hoistableScripts,f=Sr(e),h=o.get(f);h||(h=a.querySelector(Ho(f)),h||(e=_({src:e,async:!0},i),(i=gi.get(f))&&uh(e,i),h=a.createElement("script"),C(h),Dn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(f,h))}}function ay(e,i){pa.M(e,i);var a=vr;if(a&&e){var o=Ra(a).hoistableScripts,f=Sr(e),h=o.get(f);h||(h=a.querySelector(Ho(f)),h||(e=_({src:e,async:!0,type:"module"},i),(i=gi.get(f))&&uh(e,i),h=a.createElement("script"),C(h),Dn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(f,h))}}function P0(e,i,a,o){var f=(f=nt.current)?hc(f):null;if(!f)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=xr(a.href),a=Ra(f).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xr(a.href);var h=Ra(f).hoistableStyles,x=h.get(e);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=f.querySelector(Bo(e)))&&!h._p&&(x.instance=h,x.state.loading=5),gi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(e,a),h||sy(f,e,a,x.state))),i&&o===null)throw Error(s(528,""));return x}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Sr(a),a=Ra(f).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xr(e){return'href="'+de(e)+'"'}function Bo(e){return'link[rel="stylesheet"]['+e+"]"}function z0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function sy(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Dn(i,"link",a),C(i),e.head.appendChild(i))}function Sr(e){return'[src="'+de(e)+'"]'}function Ho(e){return"script[async]"+e}function F0(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+de(a.href)+'"]');if(o)return i.instance=o,C(o),o;var f=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Dn(o,"style",f),dc(o,a.precedence,e),i.instance=o;case"stylesheet":f=xr(a.href);var h=e.querySelector(Bo(f));if(h)return i.state.loading|=4,i.instance=h,C(h),h;o=z0(a),(f=gi.get(f))&&ch(o,f),h=(e.ownerDocument||e).createElement("link"),C(h);var x=h;return x._p=new Promise(function(R,V){x.onload=R,x.onerror=V}),Dn(h,"link",o),i.state.loading|=4,dc(h,a.precedence,e),i.instance=h;case"script":return h=Sr(a.src),(f=e.querySelector(Ho(h)))?(i.instance=f,C(f),f):(o=a,(f=gi.get(h))&&(o=_({},a),uh(o,f)),e=e.ownerDocument||e,f=e.createElement("script"),C(f),Dn(f,"link",o),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,dc(o,a.precedence,e));return i.instance}function dc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,h=f,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===i)h=R;else if(h!==f)break}h?h.parentNode.insertBefore(e,h.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function ch(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function uh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var pc=null;function I0(e,i,a){if(pc===null){var o=new Map,f=pc=new Map;f.set(a,o)}else f=pc,o=f.get(a),o||(o=new Map,f.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),f=0;f<a.length;f++){var h=a[f];if(!(h[ls]||h[on]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(i)||"";x=e+x;var R=o.get(x);R?R.push(h):o.set(x,[h])}}return o}function B0(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function ry(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function H0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oy(e,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=xr(o.href),h=i.querySelector(Bo(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=mc.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=h,C(h);return}h=i.ownerDocument||i,o=z0(o),(f=gi.get(f))&&ch(o,f),h=h.createElement("link"),C(h);var x=h;x._p=new Promise(function(R,V){x.onload=R,x.onerror=V}),Dn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=mc.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var fh=0;function ly(e,i){return e.stylesheets&&e.count===0&&_c(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+i);0<e.imgBytes&&fh===0&&(fh=62500*VS());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>fh?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(f)}}:null}function mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gc=null;function _c(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gc=new Map,i.forEach(cy,e),gc=null,mc.call(e))}function cy(e,i){if(!(i.state.loading&4)){var a=gc.get(e);if(a)var o=a.get(null);else{a=new Map,gc.set(e,a);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var x=f[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}f=i.instance,x=f.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,f),a.set(x,f),this.count++,o=mc.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),h?h.parentNode.insertBefore(f,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var Go={$$typeof:D,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function uy(e,i,a,o,f,h,x,R,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function G0(e,i,a,o,f,h,x,R,V,tt,dt,xt){return e=new uy(e,i,a,x,V,tt,dt,xt,R),i=1,h===!0&&(i|=24),h=Jn(3,null,null,i),e.current=h,h.stateNode=e,i=ku(),i.refCount++,e.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:i},Yu(h),e}function V0(e){return e?(e=Qs,e):Qs}function k0(e,i,a,o,f,h){f=V0(f),o.context===null?o.context=f:o.pendingContext=f,o=Oa(i),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Pa(e,o,i),a!==null&&(Yn(a,e,i),xo(a,e,i))}function X0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function hh(e,i){X0(e,i),(e=e.alternate)&&X0(e,i)}function W0(e){if(e.tag===13||e.tag===31){var i=ds(e,67108864);i!==null&&Yn(i,e,67108864),hh(e,67108864)}}function q0(e){if(e.tag===13||e.tag===31){var i=ii();i=$r(i);var a=ds(e,i);a!==null&&Yn(a,e,i),hh(e,i)}}var vc=!0;function fy(e,i,a,o){var f=O.T;O.T=null;var h=B.p;try{B.p=2,dh(e,i,a,o)}finally{B.p=h,O.T=f}}function hy(e,i,a,o){var f=O.T;O.T=null;var h=B.p;try{B.p=8,dh(e,i,a,o)}finally{B.p=h,O.T=f}}function dh(e,i,a,o){if(vc){var f=ph(o);if(f===null)$f(e,i,o,xc,a),j0(e,o);else if(py(f,e,i,a,o))o.stopPropagation();else if(j0(e,o),i&4&&-1<dy.indexOf(e)){for(;f!==null;){var h=Aa(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Tt(h.pendingLanes);if(x!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var V=1<<31-Wt(x);R.entanglements[1]|=V,x&=~V}Ii(h),(ze&6)===0&&(ec=E()+500,Po(0))}}break;case 31:case 13:R=ds(h,2),R!==null&&Yn(R,h,2),ic(),hh(h,2)}if(h=ph(o),h===null&&$f(e,i,o,xc,a),h===f)break;f=h}f!==null&&o.stopPropagation()}else $f(e,i,o,null,a)}}function ph(e){return e=mu(e),mh(e)}var xc=null;function mh(e){if(xc=null,e=Ta(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=u(i),e!==null)return e;e=null}else if(a===31){if(e=d(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return xc=e,null}function Y0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k()){case ct:return 2;case St:return 8;case ft:case jt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var gh=!1,qa=null,Ya=null,ja=null,Vo=new Map,ko=new Map,Za=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j0(e,i){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(i.pointerId)}}function Xo(e,i,a,o,f,h){return e===null||e.nativeEvent!==h?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Aa(i),i!==null&&W0(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function py(e,i,a,o,f){switch(i){case"focusin":return qa=Xo(qa,e,i,a,o,f),!0;case"dragenter":return Ya=Xo(Ya,e,i,a,o,f),!0;case"mouseover":return ja=Xo(ja,e,i,a,o,f),!0;case"pointerover":var h=f.pointerId;return Vo.set(h,Xo(Vo.get(h)||null,e,i,a,o,f)),!0;case"gotpointercapture":return h=f.pointerId,ko.set(h,Xo(ko.get(h)||null,e,i,a,o,f)),!0}return!1}function Z0(e){var i=Ta(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=u(a),i!==null){e.blockedOn=i,Oi(e.priority,function(){q0(a)});return}}else if(i===31){if(i=d(a),i!==null){e.blockedOn=i,Oi(e.priority,function(){q0(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=ph(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);pu=o,a.target.dispatchEvent(o),pu=null}else return i=Aa(a),i!==null&&W0(i),e.blockedOn=a,!1;i.shift()}return!0}function K0(e,i,a){Sc(e)&&a.delete(i)}function my(){gh=!1,qa!==null&&Sc(qa)&&(qa=null),Ya!==null&&Sc(Ya)&&(Ya=null),ja!==null&&Sc(ja)&&(ja=null),Vo.forEach(K0),ko.forEach(K0)}function yc(e,i){e.blockedOn===i&&(e.blockedOn=null,gh||(gh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,my)))}var Mc=null;function Q0(e){Mc!==e&&(Mc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Mc===e&&(Mc=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],f=e[i+2];if(typeof o!="function"){if(mh(o||a)===null)continue;break}var h=Aa(a);h!==null&&(e.splice(i,3),i-=3,pf(h,{pending:!0,data:f,method:a.method,action:o},o,f))}}))}function yr(e){function i(V){return yc(V,e)}qa!==null&&yc(qa,e),Ya!==null&&yc(Ya,e),ja!==null&&yc(ja,e),Vo.forEach(i),ko.forEach(i);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Z0(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var f=a[o],h=a[o+1],x=f[yn]||null;if(typeof h=="function")x||Q0(a);else if(x){var R=null;if(h&&h.hasAttribute("formAction")){if(f=h,x=h[yn]||null)R=x.formAction;else if(mh(f)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Q0(a)}}}function J0(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return f=x})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function _h(e){this._internalRoot=e}Ec.prototype.render=_h.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=ii();k0(a,o,e,i,null,null)},Ec.prototype.unmount=_h.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;k0(e.current,2,null,e,null,null),ic(),i[Ei]=null}};function Ec(e){this._internalRoot=e}Ec.prototype.unstable_scheduleHydration=function(e){if(e){var i=to();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Za.length&&i!==0&&i<Za[a].priority;a++);Za.splice(a,0,e),a===0&&Z0(e)}};var $0=t.version;if($0!=="19.2.3")throw Error(s(527,$0,"19.2.3"));B.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var gy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{bt=bc.inject(gy),Ct=bc}catch{}}return qo.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",f=rg,h=og,x=lg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=G0(e,1,!1,null,null,a,o,null,f,h,x,J0),e[Ei]=i.current,Jf(e),new _h(i)},qo.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,f="",h=rg,x=og,R=lg,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),i=G0(e,1,!0,i,a??null,o,f,V,h,x,R,J0),i.context=V0(null),a=i.current,o=ii(),o=$r(o),f=Oa(o),f.callback=null,Pa(a,f,o),a=o,i.current.lanes=a,Nn(i,a),Ii(i),e[Ei]=i.current,Jf(e),new Ec(i)},qo.version="19.2.3",qo}var c_;function Ay(){if(c_)return Sh.exports;c_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Sh.exports=Ty(),Sh.exports}var Ry=Ay();function Cy(r){const t=[],n=[],{rise:s,going:l,stepCount:c,width:u,thickness:d,liveLoadType:m,cheekVisible:p}=r;if(c<1)return{nodes:[],elements:[]};const g=dn.E_MODULUS,_=u,v=d,y=_*v,b=_*Math.pow(v,3)/12,A=y/1e9*dn.STEEL_DENSITY*dn.GRAVITY,S=(m==="domestic"?1.5:2.5)*1e3*(u/1e3)/1e3;let z=0;t.push({id:z++,x:0,y:0,fixX:!0,fixY:!0,fixR:!0,loadX:0,loadY:0,moment:0});let D=0,L=0;for(let F=0;F<c;F++)D+=l,t.push({id:z++,x:D,y:L,fixX:!1,fixY:!1,fixR:!1,loadX:0,loadY:0,moment:0}),L+=s,t.push({id:z++,x:D,y:L,fixX:!1,fixY:!1,fixR:!1,loadX:0,loadY:0,moment:0});const I=t[t.length-1];I.fixX=!0,I.fixY=!0,I.fixR=!1;let H=0;for(let F=0;F<t.length-1;F++){const Y=t[F],T=t[F+1],w=Math.abs(T.x-Y.x);let G=A*1.35;w>.1&&(G+=S*1.5),n.push({id:H++,node1:Y.id,node2:T.id,E:g,A:y,I:b,w:G})}if(p){const F=r.cheekSide==="two"?2:1,Y=r.cheekThickness*F,T=r.cheekHeight,w=Y*T,G=Y*Math.pow(T,3)/12;let it=0;for(let Q=2;Q<t.length;Q+=2){const ut=Q;n.push({id:H++,node1:it,node2:ut,E:g,A:w,I:G,w:0}),it=ut}}return{nodes:t,elements:n}}class ss{rows;cols;data;constructor(t,n){this.rows=t,this.cols=n,this.data=Array(t).fill(0).map(()=>Array(n).fill(0))}static zeros(t,n){return new ss(t,n)}set(t,n,s){t>=0&&t<this.rows&&n>=0&&n<this.cols&&(this.data[t][n]=s)}get(t,n){return this.data[t][n]||0}add(t){if(this.rows!==t.rows||this.cols!==t.cols)throw new Error(`Matrix dimensions mismatch: ${this.rows}x${this.cols} vs ${t.rows}x${t.cols}`);const n=new ss(this.rows,this.cols);for(let s=0;s<this.rows;s++)for(let l=0;l<this.cols;l++)n.data[s][l]=this.data[s][l]+t.data[s][l];return n}multiply(t){if(this.cols!==t.rows)throw new Error(`Matrix multiply mismatch: ${this.rows}x${this.cols} * ${t.rows}x${t.cols}`);const n=new ss(this.rows,t.cols);for(let s=0;s<this.rows;s++)for(let l=0;l<t.cols;l++){let c=0;for(let u=0;u<this.cols;u++)c+=this.data[s][u]*t.data[u][l];n.data[s][l]=c}return n}multiplyVec(t){if(this.cols!==t.length)throw new Error(`Matrix-Vector dimension mismatch: Matrix cols ${this.cols} vs Vector len ${t.length}`);const n=new Array(this.rows).fill(0);for(let s=0;s<this.rows;s++){let l=0;for(let c=0;c<this.cols;c++)l+=this.data[s][c]*t[c];n[s]=l}return n}solve(t){if(this.rows!==this.cols)throw new Error("Matrix must be square to solve");if(this.rows!==t.length)throw new Error("Dimension mismatch for b");const n=this.rows,s=this.data.map(u=>[...u]),l=new Array(n).fill(0),c=[...t];for(let u=0;u<n;u++){let d=u,m=Math.abs(s[u][u]);for(let p=u+1;p<n;p++)Math.abs(s[p][u])>m&&(m=Math.abs(s[p][u]),d=p);if(d!==u&&([s[u],s[d]]=[s[d],s[u]],[c[u],c[d]]=[c[d],c[u]]),Math.abs(s[u][u])<1e-10)return console.warn("Matrix is near-singular"),l;for(let p=u+1;p<n;p++){const g=s[p][u]/s[u][u];for(let _=u;_<n;_++)s[p][_]-=g*s[u][_];c[p]-=g*c[u]}}for(let u=n-1;u>=0;u--){let d=0;for(let m=u+1;m<n;m++)d+=s[u][m]*l[m];l[u]=(c[u]-d)/s[u][u]}return l}}class wy{nodes;elements;dof;constructor(t,n){this.nodes=t,this.elements=n,this.dof=3}solve(){const n=this.nodes.length*this.dof,s=ss.zeros(n,n),l=new Array(n).fill(0);this.elements.forEach(p=>{const g=this.nodes.find(O=>O.id===p.node1),_=this.nodes.find(O=>O.id===p.node2),v=_.x-g.x,y=_.y-g.y,b=Math.sqrt(v*v+y*y),A=v/b,M=y/b,{E:S,I:z,A:D}=p,L=S*D/b,I=12*S*z/Math.pow(b,3),H=6*S*z/Math.pow(b,2),F=4*S*z/b,Y=2*S*z/b,T=ss.zeros(6,6);T.set(0,0,L),T.set(0,3,-L),T.set(3,0,-L),T.set(3,3,L),T.set(1,1,I),T.set(1,2,H),T.set(1,4,-I),T.set(1,5,H),T.set(2,1,H),T.set(2,2,F),T.set(2,4,-H),T.set(2,5,Y),T.set(4,1,-I),T.set(4,2,-H),T.set(4,4,I),T.set(4,5,-H),T.set(5,1,H),T.set(5,2,Y),T.set(5,4,-H),T.set(5,5,F);const w=ss.zeros(6,6);w.set(0,0,A),w.set(0,1,M),w.set(1,0,-M),w.set(1,1,A),w.set(2,2,1),w.set(3,3,A),w.set(3,4,M),w.set(4,3,-M),w.set(4,4,A),w.set(5,5,1);const G=ss.zeros(6,6);for(let O=0;O<6;O++)for(let B=0;B<6;B++)G.set(O,B,w.get(B,O));const it=G.multiply(T).multiply(w),Q=this.nodes.indexOf(g),ut=this.nodes.indexOf(_),rt=[Q*3,Q*3+1,Q*3+2,ut*3,ut*3+1,ut*3+2];for(let O=0;O<6;O++)for(let B=0;B<6;B++){const J=rt[O],Mt=rt[B],vt=it.get(O,B);s.set(J,Mt,s.get(J,Mt)+vt)}if(p.w!==0){const O=p.w*b;l[Q*3+1]-=O/2,l[ut*3+1]-=O/2}}),this.nodes.forEach((p,g)=>{l[g*3]+=p.loadX,l[g*3+1]+=p.loadY,l[g*3+2]+=p.moment});const c=[];this.nodes.forEach((p,g)=>{p.fixX&&c.push(g*3),p.fixY&&c.push(g*3+1),p.fixR&&c.push(g*3+2)}),c.forEach(p=>{for(let g=0;g<n;g++)s.set(p,g,0);s.set(p,p,1),l[p]=0});const u=s.solve(l),d=new Map;let m=0;return this.nodes.forEach((p,g)=>{const _=u[g*3],v=u[g*3+1],y=u[g*3+2];d.set(p.id,{u:_,v,r:y});const b=Math.sqrt(_*_+v*v);b>m&&(m=b)}),{displacements:d,reactions:new Map,maxDeflection:m}}}const dn={STEEL_DENSITY:7850,GRAVITY:9.81,E_MODULUS:21e4,YIELD_S275:275,YIELD_S355:355,LOCAL_POINT_LOAD:1e3,LOCAL_DEFLECTION_LIMIT:2,SLENDERNESS_LIMIT:50};function Dy(r){const t=k=>k||0,n=t(r.stepCount),s=t(r.width),l=t(r.rise),c=t(r.going),u=t(r.thickness),d=t(r.cheekHeight),m=t(r.cheekThickness),{steelGrade:p,liveLoadType:g,cheekVisible:_,cheekSide:v,calculationMethod:y}=r;if(y==="matrix"){const k=Cy(r),jt=new wy(k.nodes,k.elements).solve().maxDeflection,Lt=n*c/360;return{deflectionTotal:jt,deflectionBeam:jt*.2,deflectionSag:jt*.8,globalLimit:Lt,passGlobal:jt<=Lt,stress:0,passStress:!0,localDeflection:0,passLocal:!0,supportCondition:"Matrix MSM",slendernessRatio:l/u,passSlenderness:!0,reactionForce:0,steelMassKg:0,frequency:0,overallStatus:jt<=Lt?"SAFE":"UNSAFE",span:n*c,inertia:0,totalLoad:0}}const b=n*c,A=Math.sqrt(l**2+c**2),M=n*A,S=n*(l+c)*s*u/1e9;let z=0;_&&(z=(v==="two"?2:1)*M*d*m/1e9);const D=(S+z)*dn.STEEL_DENSITY,L=D*dn.GRAVITY,I=g==="domestic"?1.5:2.5,H=b*s/1e6,F=I*1e3*H,Y=L+F,T=L*1.35+F*1.5,w=Math.atan(l/(c||1)),G=l*Math.cos(w),it=(l+c)/(A||1);let ut=s*u*it*Math.pow(G,2)/12;_&&(ut+=(v==="two"?2:1)*(m*Math.pow(d,3)/12));const rt=ut>0?ut:1,O=b>0?b:1,B=Y/O,J=5*B*Math.pow(b,4)/(384*dn.E_MODULUS*rt),Mt=b/360;let vt=0,N=0;if(_)vt=J,N=0;else{const k=Math.pow(u/30,1.5),ct=Math.min(.98,.2+k),St=rt*ct;vt=5*B*Math.pow(b,4)/(384*dn.E_MODULUS*St),N=Math.max(0,vt-J)}const pt=T/O*Math.pow(b,2)/8,Rt=_&&d>G?d:G,Xt=pt*(Rt/2)/rt,nt=p==="S275"?dn.YIELD_S275:dn.YIELD_S355,Nt=Math.max(300,s)*Math.pow(u,3)/12,Vt=dn.LOCAL_POINT_LOAD*Math.pow(c,3)/(192*dn.E_MODULUS*(Nt||1));let Ht=0;const me=c*Math.pow(u,3)/12;let Me="";if(!_)Ht=1e6,Me="2-Side (Risers)";else if(v==="one"){const k=s/2;Ht=dn.LOCAL_POINT_LOAD*Math.pow(k,3)/(3*dn.E_MODULUS*(me||1)),Me="3-Side (Cantilever)"}else Ht=dn.LOCAL_POINT_LOAD*Math.pow(s,3)/(192*dn.E_MODULUS*(me||1)),Me="4-Side (Fixed)";const ue=1/(1/(Ht||1e9)+1/(Vt||1e9)),_t=l/(u||1),At=L/O,Et=J/(vt||1),P=5*At*Math.pow(b,4)/(384*dn.E_MODULUS*rt)/(Et||1),ne=P>0?18/Math.sqrt(P):0,It=vt<=Mt,ie=Xt<=nt,Dt=ue<=dn.LOCAL_DEFLECTION_LIMIT,U=_t<=dn.SLENDERNESS_LIMIT;let E="SAFE";return(!It||!ie||!Dt||!U)&&(E="UNSAFE"),{deflectionTotal:vt,deflectionBeam:J,deflectionSag:N,globalLimit:Mt,passGlobal:It,stress:Xt,passStress:ie,localDeflection:ue,passLocal:Dt,supportCondition:Me,slendernessRatio:_t,passSlenderness:U,reactionForce:T/2/1e3,steelMassKg:D,frequency:ne,overallStatus:E,span:b,inertia:ut,totalLoad:T}}const Ly=({inputs:r,setInputs:t,isOpen:n,toggleOpen:s})=>{const l=(u,d)=>{const m=d===""?0:parseFloat(d);t(p=>({...p,[u]:m}))},c=(u,d)=>{t(m=>({...m,[u]:d}))};return mt.jsx("div",{className:"w-full",children:mt.jsxs("div",{className:"bg-gray-900/90 backdrop-blur text-white rounded-xl shadow-2xl border border-gray-700 pointer-events-auto transition-all",children:[mt.jsxs("div",{className:"p-4 border-b border-gray-700 flex justify-between items-center cursor-pointer select-none",onClick:s,children:[mt.jsx("h2",{className:"text-lg font-bold text-blue-400",children:"Design Inputs"}),mt.jsx("span",{className:`transition transform ${n?"rotate-180":""}`,children:"▼"})]}),n&&mt.jsxs("div",{className:"p-4 space-y-4 max-h-[70vh] overflow-y-auto",children:[mt.jsxs("div",{className:"mb-4 bg-gray-800 p-1 rounded-lg flex text-xs font-bold text-center",children:[mt.jsx("div",{className:`flex-1 py-1.5 rounded cursor-pointer transition-colors ${r.calculationMethod==="simplified"?"bg-blue-600 text-white":"text-gray-400 hover:text-white"}`,onClick:()=>t(u=>({...u,calculationMethod:"simplified"})),children:"Simplified"}),mt.jsx("div",{className:`flex-1 py-1.5 rounded cursor-pointer transition-colors ${r.calculationMethod==="matrix"?"bg-purple-600 text-white":"text-gray-400 hover:text-white"}`,onClick:()=>t(u=>({...u,calculationMethod:"matrix"})),children:"Matrix (FEM)"})]}),mt.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[mt.jsxs("div",{children:[mt.jsx("label",{className:"text-xs text-gray-400",children:"Grade"}),mt.jsxs("select",{className:"w-full bg-gray-800 rounded p-1 text-sm border border-gray-600 focus:border-blue-500 outline-none",value:r.steelGrade,onChange:u=>c("steelGrade",u.target.value),children:[mt.jsx("option",{value:"S275",children:"S275"}),mt.jsx("option",{value:"S355",children:"S355"})]})]}),mt.jsxs("div",{children:[mt.jsx("label",{className:"text-xs text-gray-400",children:"Load"}),mt.jsxs("select",{className:"w-full bg-gray-800 rounded p-1 text-sm border border-gray-600 focus:border-blue-500 outline-none",value:r.liveLoadType,onChange:u=>c("liveLoadType",u.target.value),children:[mt.jsx("option",{value:"domestic",children:"Domestic"}),mt.jsx("option",{value:"office",children:"Office"})]})]})]}),mt.jsxs("div",{children:[mt.jsxs("label",{className:"text-xs text-gray-400 flex justify-between",children:[mt.jsx("span",{children:"Steps"}),mt.jsx("span",{children:r.stepCount})]}),mt.jsx("input",{type:"range",min:"3",max:"25",className:"w-full accent-blue-500",value:r.stepCount,onChange:u=>c("stepCount",parseInt(u.target.value))})]}),mt.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[mt.jsxs("div",{children:[mt.jsx("label",{className:"text-xs text-gray-400",children:"Rise (mm)"}),mt.jsx("input",{type:"number",className:"w-full bg-gray-800 rounded p-1 text-sm border border-gray-600",value:r.rise||"",onChange:u=>l("rise",u.target.value)})]}),mt.jsxs("div",{children:[mt.jsx("label",{className:"text-xs text-gray-400",children:"Going (mm)"}),mt.jsx("input",{type:"number",className:"w-full bg-gray-800 rounded p-1 text-sm border border-gray-600",value:r.going||"",onChange:u=>l("going",u.target.value)})]})]}),mt.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[mt.jsxs("div",{children:[mt.jsx("label",{className:"text-xs text-gray-400",children:"Width (mm)"}),mt.jsx("input",{type:"number",className:"w-full bg-gray-800 rounded p-1 text-sm border border-gray-600",value:r.width||"",onChange:u=>l("width",u.target.value)})]}),mt.jsxs("div",{children:[mt.jsx("label",{className:"text-xs text-gray-400",children:"Thick (mm)"}),mt.jsx("input",{type:"number",className:"w-full bg-gray-800 rounded p-1 text-sm border border-gray-600",value:r.thickness||"",onChange:u=>l("thickness",u.target.value)})]})]}),mt.jsxs("div",{className:"pt-4 border-t border-gray-700",children:[mt.jsxs("label",{className:"flex items-center text-sm font-bold text-gray-300 mb-2 cursor-pointer",children:[mt.jsx("input",{type:"checkbox",className:"mr-2 accent-blue-500",checked:r.cheekVisible,onChange:u=>c("cheekVisible",u.target.checked)}),"Add Stringers"]}),r.cheekVisible&&mt.jsxs("div",{className:"grid grid-cols-2 gap-3 pl-2 border-l-2 border-gray-700 animate-in fade-in slide-in-from-left-2",children:[mt.jsxs("select",{className:"bg-gray-800 rounded p-1 text-sm border border-gray-600",value:r.cheekSide,onChange:u=>c("cheekSide",u.target.value),children:[mt.jsx("option",{value:"one",children:"One Side"}),mt.jsx("option",{value:"two",children:"Two Sides"})]}),mt.jsx("input",{type:"number",placeholder:"Height",className:"bg-gray-800 rounded p-1 text-sm border border-gray-600",value:r.cheekHeight||"",onChange:u=>l("cheekHeight",u.target.value)})]})]})]})]})})},Uy=({beam:r,sag:t,total:n,limit:s})=>{const l=Math.min(100,r/(n||1)*100),c=Math.min(100,t/(n||1)*100);return mt.jsxs("div",{className:"mt-3 bg-gray-950/50 p-3 rounded border border-gray-700",children:[mt.jsxs("div",{className:"flex justify-between items-end mb-1",children:[mt.jsx("span",{className:"text-xs text-gray-400 font-semibold uppercase",children:"Total Deflection"}),mt.jsxs("span",{className:`text-lg font-mono font-bold ${n>s?"text-red-500":"text-green-400"}`,children:[n.toFixed(1)," ",mt.jsx("span",{className:"text-xs text-gray-500",children:"mm"})]})]}),mt.jsxs("div",{className:"w-full h-2 bg-gray-700 rounded-full flex overflow-hidden mb-2",children:[mt.jsx("div",{style:{width:`${l}%`},className:"bg-blue-500 h-full",title:"Beam Bending"}),mt.jsx("div",{style:{width:`${c}%`},className:"bg-orange-500 h-full",title:"Accordion Sag"})]}),mt.jsxs("div",{className:"flex justify-between text-[10px] space-x-2",children:[mt.jsxs("div",{className:"flex items-center",children:[mt.jsx("div",{className:"w-2 h-2 rounded-full bg-blue-500 mr-1"}),mt.jsxs("span",{className:"text-gray-400",children:["Beam Bend: ",mt.jsxs("span",{className:"text-gray-200 font-mono",children:[r.toFixed(1),"mm"]})]})]}),mt.jsxs("div",{className:"flex items-center",children:[mt.jsx("div",{className:"w-2 h-2 rounded-full bg-orange-500 mr-1"}),mt.jsxs("span",{className:"text-gray-400",children:["Unfolding: ",mt.jsxs("span",{className:"text-gray-200 font-mono",children:[t.toFixed(1),"mm"]})]})]})]}),mt.jsxs("div",{className:"text-[10px] text-right text-gray-500 mt-1",children:["Limit: ",s.toFixed(1),"mm"]})]})},Ny=({pass:r,value:t,unit:n,label:s,subLabel:l,warning:c})=>{let u=r?"border-green-600":"border-red-600",d=r?"bg-green-900/30":"bg-red-900/30",m=r?"bg-green-600":"bg-red-600",p=r?"PASS":"FAIL";return c&&(u="border-yellow-600",d="bg-yellow-900/30",m="bg-yellow-600",p="WARNING"),mt.jsxs("div",{className:`p-2 rounded border ${u} ${d}`,children:[mt.jsxs("div",{className:"flex justify-between items-center mb-1",children:[mt.jsx("span",{className:"text-xs text-gray-400 uppercase font-semibold",children:s}),mt.jsx("span",{className:`text-[10px] font-bold px-1.5 py-0.5 rounded text-white ${m}`,children:p})]}),mt.jsxs("div",{className:"text-xl font-mono font-bold text-gray-100",children:[t," ",mt.jsx("span",{className:"text-sm text-gray-500",children:n})]}),l&&mt.jsx("div",{className:"text-[10px] text-gray-400 mt-1",children:l})]})},Oy=({results:r,isOpen:t,toggleOpen:n,steelGrade:s})=>mt.jsx("div",{className:"w-full",children:mt.jsxs("div",{className:"bg-gray-900/90 backdrop-blur text-white rounded-xl shadow-2xl border border-gray-700 pointer-events-auto",children:[mt.jsxs("div",{className:`p-4 border-b border-gray-700 flex justify-between items-center cursor-pointer select-none ${r.overallStatus==="SAFE"?"bg-green-900/20":"bg-red-900/20"}`,onClick:n,children:[mt.jsxs("h2",{className:"text-lg font-bold flex items-center",children:[mt.jsx("span",{className:`mr-2 px-2 py-0.5 rounded text-sm ${r.overallStatus==="SAFE"?"bg-green-600":"bg-red-600"}`,children:r.overallStatus}),"Matrix"]}),mt.jsx("span",{className:`transition transform ${t?"rotate-180":""}`,children:"▼"})]}),t&&mt.jsxs("div",{className:"p-4 space-y-4 max-h-[70vh] overflow-y-auto",children:[mt.jsxs("div",{className:"space-y-2",children:[mt.jsx("h3",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider",children:"Global Beam Theory"}),mt.jsx(Uy,{beam:r.deflectionBeam,sag:r.deflectionSag,total:r.deflectionTotal,limit:r.globalLimit}),mt.jsx("div",{className:"mt-2",children:mt.jsx(Ny,{pass:r.passStress,value:r.stress.toFixed(0),unit:"MPa",label:"Beam Stress",subLabel:`Yield: ${s==="S275"?dn.YIELD_S275:dn.YIELD_S355} MPa`})}),mt.jsxs("div",{className:"text-[10px] text-gray-500 font-mono flex justify-between pt-1 px-1",children:[mt.jsxs("span",{children:["Span: ",r.span,"mm"]}),mt.jsxs("span",{children:["Load: ",(r.totalLoad/1e3).toFixed(1),"kN"]}),mt.jsxs("span",{children:["I_rigid: ",(r.inertia/1e4).toFixed(0),"e4"]})]})]}),mt.jsxs("div",{className:"space-y-2",children:[mt.jsx("h3",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider",children:"Reality Checks (Local)"}),mt.jsxs("div",{className:`p-3 rounded border ${r.passLocal?"border-gray-700 bg-gray-800":"border-red-500 bg-red-900/20"}`,children:[mt.jsxs("div",{className:"flex justify-between items-start mb-1",children:[mt.jsxs("div",{children:[mt.jsx("div",{className:"text-sm font-bold text-gray-200",children:"Tread Bounciness"}),mt.jsx("div",{className:"text-[10px] text-blue-300 font-mono",children:r.supportCondition})]}),mt.jsx("span",{className:`text-[10px] font-bold px-1.5 py-0.5 rounded ${r.passLocal?"bg-green-600 text-white":"bg-red-600 text-white"}`,children:r.passLocal?"PASS":"FAIL"})]}),mt.jsxs("div",{className:"mt-1 flex items-baseline",children:[mt.jsx("span",{className:"text-xl font-mono font-bold",children:r.localDeflection.toFixed(2)}),mt.jsx("span",{className:"text-xs text-gray-400 ml-1",children:"mm (1kN Load)"})]})]}),mt.jsxs("div",{className:`p-3 rounded border ${r.passSlenderness?"border-gray-700 bg-gray-800":"border-red-500 bg-red-900/20"}`,children:[mt.jsxs("div",{className:"flex justify-between items-start mb-1",children:[mt.jsx("span",{className:"text-sm font-bold text-gray-200",children:"Plate Buckling"}),mt.jsx("span",{className:`text-[10px] font-bold px-1.5 py-0.5 rounded ${r.passSlenderness?"bg-green-600 text-white":"bg-red-600 text-white"}`,children:r.passSlenderness?"PASS":"FAIL"})]}),mt.jsxs("div",{className:"mt-1 flex items-baseline",children:[mt.jsx("span",{className:"text-xl font-mono font-bold",children:r.slendernessRatio.toFixed(1)}),mt.jsx("span",{className:"text-xs text-gray-400 ml-1",children:"Ratio (b/t)"})]})]})]}),mt.jsxs("div",{className:"grid grid-cols-2 gap-2 text-center pt-2 border-t border-gray-700",children:[mt.jsxs("div",{children:[mt.jsx("div",{className:"text-xs text-gray-500",children:"Weight"}),mt.jsxs("div",{className:"text-sm font-bold text-gray-300",children:[r.steelMassKg.toFixed(0)," kg"]})]}),mt.jsxs("div",{children:[mt.jsx("div",{className:"text-xs text-gray-500",children:"Freq"}),mt.jsxs("div",{className:`text-sm font-bold ${r.frequency>10?"text-green-400":"text-yellow-400"}`,children:[r.frequency.toFixed(1)," Hz"]})]})]})]})]})});const ap="182",Ir={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Py=0,u_=1,zy=2,Qc=1,yv=2,el=3,os=0,Kn=1,Gi=2,ya=0,Br=1,f_=2,h_=3,d_=4,Fy=5,Us=100,Iy=101,By=102,Hy=103,Gy=104,Vy=200,ky=201,Xy=202,Wy=203,rd=204,od=205,qy=206,Yy=207,jy=208,Zy=209,Ky=210,Qy=211,Jy=212,$y=213,tM=214,ld=0,cd=1,ud=2,Gr=3,fd=4,hd=5,dd=6,pd=7,Mv=0,eM=1,nM=2,Xi=0,Ev=1,bv=2,Tv=3,Av=4,Rv=5,Cv=6,wv=7,Dv=300,zs=301,Vr=302,md=303,gd=304,cu=306,_d=1e3,Sa=1001,vd=1002,Ln=1003,iM=1004,Tc=1005,Fn=1006,bh=1007,Os=1008,ri=1009,Lv=1010,Uv=1011,ol=1012,sp=1013,Yi=1014,Vi=1015,Ea=1016,rp=1017,op=1018,ll=1020,Nv=35902,Ov=35899,Pv=1021,zv=1022,Ui=1023,ba=1026,Ps=1027,Fv=1028,lp=1029,kr=1030,cp=1031,up=1033,Jc=33776,$c=33777,tu=33778,eu=33779,xd=35840,Sd=35841,yd=35842,Md=35843,Ed=36196,bd=37492,Td=37496,Ad=37488,Rd=37489,Cd=37490,wd=37491,Dd=37808,Ld=37809,Ud=37810,Nd=37811,Od=37812,Pd=37813,zd=37814,Fd=37815,Id=37816,Bd=37817,Hd=37818,Gd=37819,Vd=37820,kd=37821,Xd=36492,Wd=36494,qd=36495,Yd=36283,jd=36284,Zd=36285,Kd=36286,aM=3200,Iv=0,sM=1,as="",xi="srgb",Xr="srgb-linear",au="linear",Ve="srgb",Mr=7680,p_=519,rM=512,oM=513,lM=514,fp=515,cM=516,uM=517,hp=518,fM=519,m_=35044,g_="300 es",ki=2e3,su=2001;function Bv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hM(){const r=ru("canvas");return r.style.display="block",r}const __={};function v_(...r){const t="THREE."+r.shift();console.log(t,...r)}function fe(...r){const t="THREE."+r.shift();console.warn(t,...r)}function De(...r){const t="THREE."+r.shift();console.error(t,...r)}function cl(...r){const t=r.join(" ");t in __||(__[t]=!0,fe(...r))}function dM(r,t,n){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}class Bs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,u=l.length;c<u;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nu=Math.PI/180,Qd=180/Math.PI;function Yr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function ye(r,t,n){return Math.max(t,Math.min(n,r))}function pM(r,t){return(r%t+t)%t}function Th(r,t,n){return(1-n)*r+n*t}function Yo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const mM={DEG2RAD:nu};class Ot{constructor(t=0,n=0){Ot.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,l=t.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*s-u*l+t.x,this.y=c*l+u*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(t=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=l}static slerpFlat(t,n,s,l,c,u,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],v=c[u+0],y=c[u+1],b=c[u+2],A=c[u+3];if(d<=0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(d>=1){t[n+0]=v,t[n+1]=y,t[n+2]=b,t[n+3]=A;return}if(_!==A||m!==v||p!==y||g!==b){let M=m*v+p*y+g*b+_*A;M<0&&(v=-v,y=-y,b=-b,A=-A,M=-M);let S=1-d;if(M<.9995){const z=Math.acos(M),D=Math.sin(z);S=Math.sin(S*z)/D,d=Math.sin(d*z)/D,m=m*S+v*d,p=p*S+y*d,g=g*S+b*d,_=_*S+A*d}else{m=m*S+v*d,p=p*S+y*d,g=g*S+b*d,_=_*S+A*d;const z=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=z,p*=z,g*=z,_*=z}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,s,l,c,u){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[u],v=c[u+1],y=c[u+2],b=c[u+3];return t[n]=d*b+g*_+m*y-p*v,t[n+1]=m*b+g*v+p*_-d*y,t[n+2]=p*b+g*y+d*v-m*_,t[n+3]=g*b-d*_-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,l){return this._x=t,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,l=t._y,c=t._z,u=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),v=m(s/2),y=m(l/2),b=m(c/2);switch(u){case"XYZ":this._x=v*g*_+p*y*b,this._y=p*y*_-v*g*b,this._z=p*g*b+v*y*_,this._w=p*g*_-v*y*b;break;case"YXZ":this._x=v*g*_+p*y*b,this._y=p*y*_-v*g*b,this._z=p*g*b-v*y*_,this._w=p*g*_+v*y*b;break;case"ZXY":this._x=v*g*_-p*y*b,this._y=p*y*_+v*g*b,this._z=p*g*b+v*y*_,this._w=p*g*_-v*y*b;break;case"ZYX":this._x=v*g*_-p*y*b,this._y=p*y*_+v*g*b,this._z=p*g*b-v*y*_,this._w=p*g*_+v*y*b;break;case"YZX":this._x=v*g*_+p*y*b,this._y=p*y*_+v*g*b,this._z=p*g*b-v*y*_,this._w=p*g*_-v*y*b;break;case"XZY":this._x=v*g*_-p*y*b,this._y=p*y*_-v*g*b,this._z=p*g*b+v*y*_,this._w=p*g*_+v*y*b;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],l=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],g=n[6],_=n[10],v=s+d+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(u-l)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+u)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(c-p)/y,this._x=(l+u)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(u-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,l=t._y,c=t._z,u=t._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=s*g+u*d+l*p-c*m,this._y=l*g+u*m+c*d-s*p,this._z=c*g+u*p+s*m-l*d,this._w=u*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,u=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,n=0,s=0){q.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(x_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(x_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=t.elements,u=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*u,this}applyQuaternion(t){const n=this.x,s=this.y,l=this.z,c=t.x,u=t.y,d=t.z,m=t.w,p=2*(u*l-d*s),g=2*(d*n-c*l),_=2*(c*s-u*n);return this.x=n+m*p+u*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,l=t.y,c=t.z,u=n.x,d=n.y,m=n.z;return this.x=l*m-c*d,this.y=c*u-s*m,this.z=s*d-l*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return n*n+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const l=Math.sin(n)*t;return this.x=l*Math.sin(s),this.y=Math.cos(n)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new q,x_=new Fs;class xe{constructor(t,n,s,l,c,u,d,m,p){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,u,d,m,p)}set(t,n,s,l,c,u,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=s,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,u=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],v=s[2],y=s[5],b=s[8],A=l[0],M=l[3],S=l[6],z=l[1],D=l[4],L=l[7],I=l[2],H=l[5],F=l[8];return c[0]=u*A+d*z+m*I,c[3]=u*M+d*D+m*H,c[6]=u*S+d*L+m*F,c[1]=p*A+g*z+_*I,c[4]=p*M+g*D+_*H,c[7]=p*S+g*L+_*F,c[2]=v*A+y*z+b*I,c[5]=v*M+y*D+b*H,c[8]=v*S+y*L+b*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],u=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return n*u*g-n*d*p-s*c*g+s*d*m+l*c*p-l*u*m}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],u=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*u-d*p,v=d*m-g*c,y=p*c-u*m,b=n*_+s*v+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=_*A,t[1]=(l*p-g*s)*A,t[2]=(d*s-l*u)*A,t[3]=v*A,t[4]=(g*n-l*m)*A,t[5]=(l*c-d*n)*A,t[6]=y*A,t[7]=(s*m-p*n)*A,t[8]=(u*n-s*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,l,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*u+p*d)+u+t,-l*p,l*m,-l*(-p*u+m*d)+d+n,0,0,1),this}scale(t,n){return this.premultiply(Rh.makeScale(t,n)),this}rotate(t){return this.premultiply(Rh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Rh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rh=new xe,S_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gM(){const r={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(l,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ve&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ve&&(l.r=Hr(l.r),l.g=Hr(l.g),l.b=Hr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,u){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return cl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return cl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Xr]:{primaries:t,whitePoint:s,transfer:au,toXYZ:S_,fromXYZ:y_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:S_,fromXYZ:y_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),r}const Le=gM();function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Er;class _M{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Er===void 0&&(Er=ru("canvas")),Er.width=t.width,Er.height=t.height;const l=Er.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Er}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ru("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let u=0;u<c.length;u++)c[u]=Ma(c[u]/255)*255;return s.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Ma(n[s]/255)*255):n[s]=Ma(n[s]);return{data:n,width:t.width,height:t.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vM=0;class dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Yr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let u=0,d=l.length;u<d;u++)l[u].isDataTexture?c.push(Ch(l[u].image)):c.push(Ch(l[u]))}else c=Ch(l);s.url=c}return n||(t.images[this.uuid]=s),s}}function Ch(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_M.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}let xM=0;const wh=new q;class Hn extends Bs{constructor(t=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,s=Sa,l=Sa,c=Fn,u=Os,d=Ui,m=ri,p=Hn.DEFAULT_ANISOTROPY,g=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Yr(),this.name="",this.source=new dp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){fe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){fe(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _d:t.x=t.x-Math.floor(t.x);break;case Sa:t.x=t.x<0?0:1;break;case vd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _d:t.y=t.y-Math.floor(t.y);break;case Sa:t.y=t.y<0?0:1;break;case vd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Dv;Hn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,n=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,l){return this.x=t,this.y=n,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*s+u[8]*l+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*l+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*l+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*l+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],v=m[1],y=m[5],b=m[9],A=m[2],M=m[6],S=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(p+1)/2,L=(y+1)/2,I=(S+1)/2,H=(g+v)/4,F=(_+A)/4,Y=(b+M)/4;return D>L&&D>I?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=H/s,c=F/s):L>I?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=H/l,c=Y/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=F/c,l=Y/c),this.set(s,l,c,n),this}let z=Math.sqrt((M-b)*(M-b)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(z)<.001&&(z=1),this.x=(M-b)/z,this.y=(_-A)/z,this.z=(v-g)/z,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SM extends Bs{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new an(0,0,t,n),this.scissorTest=!1,this.viewport=new an(0,0,t,n);const l={width:t,height:n,depth:s.depth},c=new Hn(l);this.textures=[];const u=s.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new dp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends SM{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class Hv extends Hn{constructor(t=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yM extends Hn{constructor(t=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(t=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Ci.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Ci.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Ci.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)t.isMesh===!0?t.getVertexPosition(u,Ci):Ci.fromBufferAttribute(c,u),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ac.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ac.copy(s.boundingBox)),Ac.applyMatrix4(t.matrixWorld),this.union(Ac)}const l=t.children;for(let c=0,u=l.length;c<u;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),Rc.subVectors(this.max,jo),br.subVectors(t.a,jo),Tr.subVectors(t.b,jo),Ar.subVectors(t.c,jo),Qa.subVectors(Tr,br),Ja.subVectors(Ar,Tr),As.subVectors(br,Ar);let n=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-As.z,As.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,As.z,0,-As.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-As.y,As.x,0];return!Dh(n,br,Tr,Ar,Rc)||(n=[1,0,0,0,1,0,0,0,1],!Dh(n,br,Tr,Ar,Rc))?!1:(Cc.crossVectors(Qa,Ja),n=[Cc.x,Cc.y,Cc.z],Dh(n,br,Tr,Ar,Rc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ma=[new q,new q,new q,new q,new q,new q,new q,new q],Ci=new q,Ac=new jr,br=new q,Tr=new q,Ar=new q,Qa=new q,Ja=new q,As=new q,jo=new q,Rc=new q,Cc=new q,Rs=new q;function Dh(r,t,n,s,l){for(let c=0,u=r.length-3;c<=u;c+=3){Rs.fromArray(r,c);const d=l.x*Math.abs(Rs.x)+l.y*Math.abs(Rs.y)+l.z*Math.abs(Rs.z),m=t.dot(Rs),p=n.dot(Rs),g=s.dot(Rs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const MM=new jr,Zo=new q,Lh=new q;class uu{constructor(t=new q,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):MM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,u=t.length;c<u;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const n=Zo.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Lh)),this.expandByPoint(Zo.copy(t.center).sub(Lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ga=new q,Uh=new q,wc=new q,$a=new q,Nh=new q,Dc=new q,Oh=new q;class pp{constructor(t=new q,n=new q(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ga.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,n),ga.distanceToSquared(t))}distanceSqToSegment(t,n,s,l){Uh.copy(t).add(n).multiplyScalar(.5),wc.copy(n).sub(t).normalize(),$a.copy(this.origin).sub(Uh);const c=t.distanceTo(n)*.5,u=-this.direction.dot(wc),d=$a.dot(this.direction),m=-$a.dot(wc),p=$a.lengthSq(),g=Math.abs(1-u*u);let _,v,y,b;if(g>0)if(_=u*m-d,v=u*d-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const A=1/g;_*=A,v*=A,y=_*(_+u*v+2*d)+v*(u*_+v+2*m)+p}else v=c,_=Math.max(0,-(u*v+d)),y=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(u*v+d)),y=-_*_+v*(v+2*m)+p;else v<=-b?(_=Math.max(0,-(-u*c+d)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(_=Math.max(0,-(u*c+d)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p);else v=u>0?-c:c,_=Math.max(0,-(u*v+d)),y=-_*_+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Uh).addScaledVector(wc,v),y}intersectSphere(t,n){ga.subVectors(t.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=t.radius*t.radius;if(l>c)return null;const u=Math.sqrt(c-l),d=s-u,m=s+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,l,c,u,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),s>u||c>l||((c>s||isNaN(s))&&(s=c),(u<l||isNaN(l))&&(l=u),_>=0?(d=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,n,s,l,c){Nh.subVectors(n,t),Dc.subVectors(s,t),Oh.crossVectors(Nh,Dc);let u=this.direction.dot(Oh),d;if(u>0){if(l)return null;d=1}else if(u<0)d=-1,u=-u;else return null;$a.subVectors(this.origin,t);const m=d*this.direction.dot(Dc.crossVectors($a,Dc));if(m<0)return null;const p=d*this.direction.dot(Nh.cross($a));if(p<0||m+p>u)return null;const g=-d*$a.dot(Oh);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,n,s,l,c,u,d,m,p,g,_,v,y,b,A,M){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,u,d,m,p,g,_,v,y,b,A,M)}set(t,n,s,l,c,u,d,m,p,g,_,v,y,b,A,M){const S=this.elements;return S[0]=t,S[4]=n,S[8]=s,S[12]=l,S[1]=c,S[5]=u,S[9]=d,S[13]=m,S[2]=p,S[6]=g,S[10]=_,S[14]=v,S[3]=y,S[7]=b,S[11]=A,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),u=1/Rr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,l=t.y,c=t.z,u=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,y=u*_,b=d*g,A=d*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=y+b*p,n[5]=v-A*p,n[9]=-d*m,n[2]=A-v*p,n[6]=b+y*p,n[10]=u*m}else if(t.order==="YXZ"){const v=m*g,y=m*_,b=p*g,A=p*_;n[0]=v+A*d,n[4]=b*d-y,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-d,n[2]=y*d-b,n[6]=A+v*d,n[10]=u*m}else if(t.order==="ZXY"){const v=m*g,y=m*_,b=p*g,A=p*_;n[0]=v-A*d,n[4]=-u*_,n[8]=b+y*d,n[1]=y+b*d,n[5]=u*g,n[9]=A-v*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(t.order==="ZYX"){const v=u*g,y=u*_,b=d*g,A=d*_;n[0]=m*g,n[4]=b*p-y,n[8]=v*p+A,n[1]=m*_,n[5]=A*p+v,n[9]=y*p-b,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(t.order==="YZX"){const v=u*m,y=u*p,b=d*m,A=d*p;n[0]=m*g,n[4]=A-v*_,n[8]=b*_+y,n[1]=_,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=y*_+b,n[10]=v-A*_}else if(t.order==="XZY"){const v=u*m,y=u*p,b=d*m,A=d*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=v*_+A,n[5]=u*g,n[9]=y*_-b,n[2]=b*_-y,n[6]=d*g,n[10]=A*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(EM,t,bM)}lookAt(t,n,s){const l=this.elements;return ai.subVectors(t,n),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ts.crossVectors(s,ai),ts.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ts.crossVectors(s,ai)),ts.normalize(),Lc.crossVectors(ai,ts),l[0]=ts.x,l[4]=Lc.x,l[8]=ai.x,l[1]=ts.y,l[5]=Lc.y,l[9]=ai.y,l[2]=ts.z,l[6]=Lc.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,u=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],v=s[9],y=s[13],b=s[2],A=s[6],M=s[10],S=s[14],z=s[3],D=s[7],L=s[11],I=s[15],H=l[0],F=l[4],Y=l[8],T=l[12],w=l[1],G=l[5],it=l[9],Q=l[13],ut=l[2],rt=l[6],O=l[10],B=l[14],J=l[3],Mt=l[7],vt=l[11],N=l[15];return c[0]=u*H+d*w+m*ut+p*J,c[4]=u*F+d*G+m*rt+p*Mt,c[8]=u*Y+d*it+m*O+p*vt,c[12]=u*T+d*Q+m*B+p*N,c[1]=g*H+_*w+v*ut+y*J,c[5]=g*F+_*G+v*rt+y*Mt,c[9]=g*Y+_*it+v*O+y*vt,c[13]=g*T+_*Q+v*B+y*N,c[2]=b*H+A*w+M*ut+S*J,c[6]=b*F+A*G+M*rt+S*Mt,c[10]=b*Y+A*it+M*O+S*vt,c[14]=b*T+A*Q+M*B+S*N,c[3]=z*H+D*w+L*ut+I*J,c[7]=z*F+D*G+L*rt+I*Mt,c[11]=z*Y+D*it+L*O+I*vt,c[15]=z*T+D*Q+L*B+I*N,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],l=t[8],c=t[12],u=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],y=t[14],b=t[3],A=t[7],M=t[11],S=t[15],z=m*y-p*v,D=d*y-p*_,L=d*v-m*_,I=u*y-p*g,H=u*v-m*g,F=u*_-d*g;return n*(A*z-M*D+S*L)-s*(b*z-M*I+S*H)+l*(b*D-A*I+S*F)-c*(b*L-A*H+M*F)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],u=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],y=t[11],b=t[12],A=t[13],M=t[14],S=t[15],z=_*M*p-A*v*p+A*m*y-d*M*y-_*m*S+d*v*S,D=b*v*p-g*M*p-b*m*y+u*M*y+g*m*S-u*v*S,L=g*A*p-b*_*p+b*d*y-u*A*y-g*d*S+u*_*S,I=b*_*m-g*A*m-b*d*v+u*A*v+g*d*M-u*_*M,H=n*z+s*D+l*L+c*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return t[0]=z*F,t[1]=(A*v*c-_*M*c-A*l*y+s*M*y+_*l*S-s*v*S)*F,t[2]=(d*M*c-A*m*c+A*l*p-s*M*p-d*l*S+s*m*S)*F,t[3]=(_*m*c-d*v*c-_*l*p+s*v*p+d*l*y-s*m*y)*F,t[4]=D*F,t[5]=(g*M*c-b*v*c+b*l*y-n*M*y-g*l*S+n*v*S)*F,t[6]=(b*m*c-u*M*c-b*l*p+n*M*p+u*l*S-n*m*S)*F,t[7]=(u*v*c-g*m*c+g*l*p-n*v*p-u*l*y+n*m*y)*F,t[8]=L*F,t[9]=(b*_*c-g*A*c-b*s*y+n*A*y+g*s*S-n*_*S)*F,t[10]=(u*A*c-b*d*c+b*s*p-n*A*p-u*s*S+n*d*S)*F,t[11]=(g*d*c-u*_*c-g*s*p+n*_*p+u*s*y-n*d*y)*F,t[12]=I*F,t[13]=(g*A*l-b*_*l+b*s*v-n*A*v-g*s*M+n*_*M)*F,t[14]=(b*d*l-u*A*l-b*s*m+n*A*m+u*s*M-n*d*M)*F,t[15]=(u*_*l-g*d*l+g*s*m-n*_*m-u*s*v+n*d*v)*F,this}scale(t){const n=this.elements,s=t.x,l=t.y,c=t.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,u=t.x,d=t.y,m=t.z,p=c*u,g=c*d;return this.set(p*u+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*u,0,p*m-l*d,g*m+l*u,c*m*m+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,l,c,u){return this.set(1,s,c,0,t,1,u,0,n,l,1,0,0,0,0,1),this}compose(t,n,s){const l=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,g=u+u,_=d+d,v=c*p,y=c*g,b=c*_,A=u*g,M=u*_,S=d*_,z=m*p,D=m*g,L=m*_,I=s.x,H=s.y,F=s.z;return l[0]=(1-(A+S))*I,l[1]=(y+L)*I,l[2]=(b-D)*I,l[3]=0,l[4]=(y-L)*H,l[5]=(1-(v+S))*H,l[6]=(M+z)*H,l[7]=0,l[8]=(b+D)*F,l[9]=(M-z)*F,l[10]=(1-(v+A))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let c=Rr.set(l[0],l[1],l[2]).length();const u=Rr.set(l[4],l[5],l[6]).length(),d=Rr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),wi.copy(this);const p=1/c,g=1/u,_=1/d;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=_,wi.elements[9]*=_,wi.elements[10]*=_,n.setFromRotationMatrix(wi),s.x=c,s.y=u,s.z=d,this}makePerspective(t,n,s,l,c,u,d=ki,m=!1){const p=this.elements,g=2*c/(n-t),_=2*c/(s-l),v=(n+t)/(n-t),y=(s+l)/(s-l);let b,A;if(m)b=c/(u-c),A=u*c/(u-c);else if(d===ki)b=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(d===su)b=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,s,l,c,u,d=ki,m=!1){const p=this.elements,g=2/(n-t),_=2/(s-l),v=-(n+t)/(n-t),y=-(s+l)/(s-l);let b,A;if(m)b=1/(u-c),A=u/(u-c);else if(d===ki)b=-2/(u-c),A=-(u+c)/(u-c);else if(d===su)b=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const Rr=new q,wi=new $e,EM=new q(0,0,0),bM=new q(1,1,1),ts=new q,Lc=new q,ai=new q,M_=new $e,E_=new Fs;class ji{constructor(t=0,n=0,s=0,l=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,l=this._order){return this._x=t,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const l=t.elements,c=l[0],u=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return M_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(M_,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return E_.setFromEuler(this),this.setFromQuaternion(E_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class Gv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let TM=0;const b_=new q,Cr=new Fs,_a=new $e,Uc=new q,Ko=new q,AM=new q,RM=new Fs,T_=new q(1,0,0),A_=new q(0,1,0),R_=new q(0,0,1),C_={type:"added"},CM={type:"removed"},wr={type:"childadded",child:null},Ph={type:"childremoved",child:null};class Un extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new q,n=new ji,s=new Fs,l=new q(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new xe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Cr.setFromAxisAngle(t,n),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,n){return Cr.setFromAxisAngle(t,n),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(T_,t)}rotateY(t){return this.rotateOnAxis(A_,t)}rotateZ(t){return this.rotateOnAxis(R_,t)}translateOnAxis(t,n){return b_.copy(t).applyQuaternion(this.quaternion),this.position.add(b_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(T_,t)}translateY(t){return this.translateOnAxis(A_,t)}translateZ(t){return this.translateOnAxis(R_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?Uc.copy(t):Uc.set(t,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(Ko,Uc,this.up):_a.lookAt(Uc,Ko,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(_a),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(C_),wr.child=t,this.dispatchEvent(wr),wr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(CM),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(C_),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const u=this.children[s].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,AM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,RM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(n){const d=u(t.geometries),m=u(t.materials),p=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),y=u(t.animations),b=u(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function u(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new q(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new q,va=new q,zh=new q,xa=new q,Dr=new q,Lr=new q,w_=new q,Fh=new q,Ih=new q,Bh=new q,Hh=new an,Gh=new an,Vh=new an;class Li{constructor(t=new q,n=new q,s=new q){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,l){l.subVectors(s,n),Di.subVectors(t,n),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,s,l,c){Di.subVectors(l,n),va.subVectors(s,n),zh.subVectors(t,n);const u=Di.dot(Di),d=Di.dot(va),m=Di.dot(zh),p=va.dot(va),g=va.dot(zh),_=u*p-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(p*m-d*g)*v,b=(u*g-d*m)*v;return c.set(1-y-b,b,y)}static containsPoint(t,n,s,l){return this.getBarycoord(t,n,s,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(t,n,s,l,c,u,d,m){return this.getBarycoord(t,n,s,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(u,xa.y),m.addScaledVector(d,xa.z),m)}static getInterpolatedAttribute(t,n,s,l,c,u){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(t,n),Gh.fromBufferAttribute(t,s),Vh.fromBufferAttribute(t,l),u.setScalar(0),u.addScaledVector(Hh,c.x),u.addScaledVector(Gh,c.y),u.addScaledVector(Vh,c.z),u}static isFrontFacing(t,n,s,l){return Di.subVectors(s,n),va.subVectors(t,n),Di.cross(va).dot(l)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,l){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,s,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Di.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Li.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,l,c){return Li.getInterpolation(t,this.a,this.b,this.c,n,s,l,c)}containsPoint(t){return Li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,l=this.b,c=this.c;let u,d;Dr.subVectors(l,s),Lr.subVectors(c,s),Fh.subVectors(t,s);const m=Dr.dot(Fh),p=Lr.dot(Fh);if(m<=0&&p<=0)return n.copy(s);Ih.subVectors(t,l);const g=Dr.dot(Ih),_=Lr.dot(Ih);if(g>=0&&_<=g)return n.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(s).addScaledVector(Dr,u);Bh.subVectors(t,c);const y=Dr.dot(Bh),b=Lr.dot(Bh);if(b>=0&&y<=b)return n.copy(c);const A=y*p-m*b;if(A<=0&&p>=0&&b<=0)return d=p/(p-b),n.copy(s).addScaledVector(Lr,d);const M=g*b-y*_;if(M<=0&&_-g>=0&&y-b>=0)return w_.subVectors(c,l),d=(_-g)/(_-g+(y-b)),n.copy(l).addScaledVector(w_,d);const S=1/(M+A+v);return u=A*S,d=v*S,n.copy(s).addScaledVector(Dr,u).addScaledVector(Lr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function kh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Re{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,n),this}setRGB(t,n,s,l=Le.workingColorSpace){return this.r=t,this.g=n,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,n,s,l=Le.workingColorSpace){if(t=pM(t,1),n=ye(n,0,1),s=ye(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=kh(u,c,t+1/3),this.g=kh(u,c,t),this.b=kh(u,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,n=xi){function s(c){c!==void 0&&parseFloat(c)<1&&fe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=l[1],d=l[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:fe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=xi){const s=Vv[t.toLowerCase()];return s!==void 0?this.setHex(s,n):fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Le.workingToColorSpace(zn.copy(this),t),Math.round(ye(zn.r*255,0,255))*65536+Math.round(ye(zn.g*255,0,255))*256+Math.round(ye(zn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Le.workingColorSpace){Le.workingToColorSpace(zn.copy(this),n);const s=zn.r,l=zn.g,c=zn.b,u=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+u)/2;if(d===u)m=0,p=0;else{const _=u-d;switch(p=g<=.5?_/(u+d):_/(2-u-d),u){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=Le.workingColorSpace){return Le.workingToColorSpace(zn.copy(this),n),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=xi){Le.workingToColorSpace(zn.copy(this),t);const n=zn.r,s=zn.g,l=zn.b;return t!==xi?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,n,s){return this.getHSL(es),this.setHSL(es.h+t,es.s+n,es.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(es),t.getHSL(Nc);const s=Th(es.h,Nc.h,n),l=Th(es.s,Nc.s,n),c=Th(es.l,Nc.l,n);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Re;Re.NAMES=Vv;let wM=0;class Zr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=Br,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=od,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){fe(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){fe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==rd&&(s.blendSrc=this.blendSrc),this.blendDst!==od&&(s.blendDst=this.blendDst),this.blendEquation!==Us&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=l(t.textures),u=l(t.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class kv extends Zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new q,Oc=new Ot;let DM=0;class qi{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=m_,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Oc.fromBufferAttribute(this,n),Oc.applyMatrix3(t),this.setXY(n,Oc.x,Oc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=Yo(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Yo(n,this.array)),n}setX(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Yo(n,this.array)),n}setY(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Yo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Yo(n,this.array)),n}setW(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),s=jn(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,l){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==m_&&(t.usage=this.usage),t}}class Xv extends qi{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class Wv extends qi{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class Gn extends qi{constructor(t,n,s){super(new Float32Array(t),n,s)}}let LM=0;const _i=new $e,Xh=new Un,Ur=new q,si=new jr,Qo=new jr,Sn=new q;class yi extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bv(t)?Wv:Xv)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,n,s){return _i.makeTranslation(t,n,s),this.applyMatrix4(_i),this}scale(t,n,s){return _i.makeScale(t,n,s),this.applyMatrix4(_i),this}lookAt(t){return Xh.lookAt(t),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const u=t[l];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Gn(s,3))}else{const s=Math.min(t.length,n.count);for(let l=0;l<s;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Qo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(si.min,Qo.min),si.expandByPoint(Sn),Sn.addVectors(si.max,Qo.max),si.expandByPoint(Sn)):(si.expandByPoint(Qo.min),si.expandByPoint(Qo.max))}si.getCenter(s);let l=0;for(let c=0,u=t.count;c<u;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Sn.fromBufferAttribute(d,p),m&&(Ur.fromBufferAttribute(t,p),Sn.add(Ur)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<s.count;Y++)d[Y]=new q,m[Y]=new q;const p=new q,g=new q,_=new q,v=new Ot,y=new Ot,b=new Ot,A=new q,M=new q;function S(Y,T,w){p.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,T),_.fromBufferAttribute(s,w),v.fromBufferAttribute(c,Y),y.fromBufferAttribute(c,T),b.fromBufferAttribute(c,w),g.sub(p),_.sub(p),y.sub(v),b.sub(v);const G=1/(y.x*b.y-b.x*y.y);isFinite(G)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(_,-y.y).multiplyScalar(G),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(G),d[Y].add(A),d[T].add(A),d[w].add(A),m[Y].add(M),m[T].add(M),m[w].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let Y=0,T=z.length;Y<T;++Y){const w=z[Y],G=w.start,it=w.count;for(let Q=G,ut=G+it;Q<ut;Q+=3)S(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const D=new q,L=new q,I=new q,H=new q;function F(Y){I.fromBufferAttribute(l,Y),H.copy(I);const T=d[Y];D.copy(T),D.sub(I.multiplyScalar(I.dot(T))).normalize(),L.crossVectors(H,T);const G=L.dot(m[Y])<0?-1:1;u.setXYZW(Y,D.x,D.y,D.z,G)}for(let Y=0,T=z.length;Y<T;++Y){const w=z[Y],G=w.start,it=w.count;for(let Q=G,ut=G+it;Q<ut;Q+=3)F(t.getX(Q+0)),F(t.getX(Q+1)),F(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new qi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new q,c=new q,u=new q,d=new q,m=new q,p=new q,g=new q,_=new q;if(t)for(let v=0,y=t.count;v<y;v+=3){const b=t.getX(v+0),A=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),g.subVectors(u,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=n.count;v<y;v+=3)l.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(l,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)Sn.fromBufferAttribute(t,n),Sn.normalize(),t.setXYZ(n,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,v=new p.constructor(m.length*g);let y=0,b=0;for(let A=0,M=m.length;A<M;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*g;for(let S=0;S<g;S++)v[b++]=p[y++]}return new qi(v,g,_)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const v=p[g],y=t(v,s);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D_=new $e,Cs=new pp,Pc=new uu,L_=new q,zc=new q,Fc=new q,Ic=new q,Wh=new q,Bc=new q,U_=new q,Hc=new q;class Ni extends Un{constructor(t=new yi,n=new kv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Bc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Wh.fromBufferAttribute(_,t),u?Bc.addScaledVector(Wh,g):Bc.addScaledVector(Wh.sub(n),g))}n.add(Bc)}return n}raycast(t,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(c),Cs.copy(t.ray).recast(t.near),!(Pc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Pc,L_)===null||Cs.origin.distanceToSquared(L_)>(t.far-t.near)**2))&&(D_.copy(c).invert(),Cs.copy(t.ray).applyMatrix4(D_),!(s.boundingBox!==null&&Cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Cs)))}_computeIntersections(t,n,s){let l;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const M=v[b],S=u[M.materialIndex],z=Math.max(M.start,y.start),D=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let L=z,I=D;L<I;L+=3){const H=d.getX(L),F=d.getX(L+1),Y=d.getX(L+2);l=Gc(this,S,t,s,p,g,_,H,F,Y),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let M=b,S=A;M<S;M+=3){const z=d.getX(M),D=d.getX(M+1),L=d.getX(M+2);l=Gc(this,u,t,s,p,g,_,z,D,L),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const M=v[b],S=u[M.materialIndex],z=Math.max(M.start,y.start),D=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=z,I=D;L<I;L+=3){const H=L,F=L+1,Y=L+2;l=Gc(this,S,t,s,p,g,_,H,F,Y),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let M=b,S=A;M<S;M+=3){const z=M,D=M+1,L=M+2;l=Gc(this,u,t,s,p,g,_,z,D,L),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function UM(r,t,n,s,l,c,u,d){let m;if(t.side===Kn?m=s.intersectTriangle(u,c,l,!0,d):m=s.intersectTriangle(l,c,u,t.side===os,d),m===null)return null;Hc.copy(d),Hc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Hc);return p<n.near||p>n.far?null:{distance:p,point:Hc.clone(),object:r}}function Gc(r,t,n,s,l,c,u,d,m,p){r.getVertexPosition(d,zc),r.getVertexPosition(m,Fc),r.getVertexPosition(p,Ic);const g=UM(r,t,n,s,zc,Fc,Ic,U_);if(g){const _=new q;Li.getBarycoord(U_,zc,Fc,Ic,_),l&&(g.uv=Li.getInterpolatedAttribute(l,d,m,p,_,new Ot)),c&&(g.uv1=Li.getInterpolatedAttribute(c,d,m,p,_,new Ot)),u&&(g.normal=Li.getInterpolatedAttribute(u,d,m,p,_,new q),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new q,materialIndex:0};Li.getNormal(zc,Fc,Ic,v.normal),g.face=v,g.barycoord=_}return g}class Kr extends yi{constructor(t=1,n=1,s=1,l=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:u};const d=this;l=Math.floor(l),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],_=[];let v=0,y=0;b("z","y","x",-1,-1,s,n,t,u,c,0),b("z","y","x",1,-1,s,n,-t,u,c,1),b("x","z","y",1,1,t,s,n,l,u,2),b("x","z","y",1,-1,t,s,-n,l,u,3),b("x","y","z",1,-1,t,n,s,l,c,4),b("x","y","z",-1,-1,t,n,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Gn(p,3)),this.setAttribute("normal",new Gn(g,3)),this.setAttribute("uv",new Gn(_,2));function b(A,M,S,z,D,L,I,H,F,Y,T){const w=L/F,G=I/Y,it=L/2,Q=I/2,ut=H/2,rt=F+1,O=Y+1;let B=0,J=0;const Mt=new q;for(let vt=0;vt<O;vt++){const N=vt*G-Q;for(let et=0;et<rt;et++){const pt=et*w-it;Mt[A]=pt*z,Mt[M]=N*D,Mt[S]=ut,p.push(Mt.x,Mt.y,Mt.z),Mt[A]=0,Mt[M]=0,Mt[S]=H>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),_.push(et/F),_.push(1-vt/Y),B+=1}}for(let vt=0;vt<Y;vt++)for(let N=0;N<F;N++){const et=v+N+rt*vt,pt=v+N+rt*(vt+1),Rt=v+(N+1)+rt*(vt+1),Xt=v+(N+1)+rt*vt;m.push(et,pt,Xt),m.push(pt,Rt,Xt),J+=6}d.addGroup(y,J,T),y+=J,v+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wr(r){const t={};for(const n in r){t[n]={};for(const s in r[n]){const l=r[n][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=l.clone():Array.isArray(l)?t[n][s]=l.slice():t[n][s]=l}}return t}function Bn(r){const t={};for(let n=0;n<r.length;n++){const s=Wr(r[n]);for(const l in s)t[l]=s[l]}return t}function NM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function qv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const OM={clone:Wr,merge:Bn};var PM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PM,this.fragmentShader=zM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=NM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const u=this.uniforms[l].value;u&&u.isTexture?n.uniforms[l]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[l]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[l]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[l]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[l]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[l]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[l]={type:"m4",value:u.toArray()}:n.uniforms[l]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Yv extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new q,N_=new Ot,O_=new Ot;class Si extends Yv{constructor(t=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Qd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qd*2*Math.atan(Math.tan(nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,n){return this.getViewBounds(t,N_,O_),n.subVectors(O_,N_)}setViewOffset(t,n,s,l,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(nu*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*l/m,n-=u.offsetY*s/p,l*=u.width/m,s*=u.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Nr=-90,Or=1;class FM extends Un{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Nr,Or,t,n);l.layers=this.layers,this.add(l);const c=new Si(Nr,Or,t,n);c.layers=this.layers,this.add(c);const u=new Si(Nr,Or,t,n);u.layers=this.layers,this.add(u);const d=new Si(Nr,Or,t,n);d.layers=this.layers,this.add(d);const m=new Si(Nr,Or,t,n);m.layers=this.layers,this.add(m);const p=new Si(Nr,Or,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,l,c,u,d,m]=n;for(const p of n)this.remove(p);if(t===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===su)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(n,c),t.setRenderTarget(s,1,l),t.render(n,u),t.setRenderTarget(s,2,l),t.render(n,d),t.setRenderTarget(s,3,l),t.render(n,m),t.setRenderTarget(s,4,l),t.render(n,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(n,g),t.setRenderTarget(_,v,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class jv extends Hn{constructor(t=[],n=zs,s,l,c,u,d,m,p,g){super(t,n,s,l,c,u,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zv extends Wi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new jv(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Kr(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:ya});c.uniforms.tEquirect.value=n;const u=new Ni(l,c),d=n.minFilter;return n.minFilter===Os&&(n.minFilter=Fn),new FM(1,10,this).update(t,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,s,l);t.setRenderTarget(c)}}class nl extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IM={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let l=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const A of t.hand.values()){const M=n.getJointPose(A,s),S=this._getHandJoint(p,A);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,b=.005;p.inputState.pinching&&v>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=n.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new nl;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class mp{constructor(t,n=1,s=1e3){this.isFog=!0,this.name="",this.color=new Re(t),this.near=n,this.far=s}clone(){return new mp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class BM extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class HM extends Hn{constructor(t=null,n=1,s=1,l,c,u,d,m,p=Ln,g=Ln,_,v){super(null,u,d,m,p,g,l,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=new q,GM=new q,VM=new xe;class is{constructor(t=new q(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,l){return this.normal.set(t,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const l=Yh.subVectors(s,n).cross(GM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(Yh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||VM.getNormalMatrix(t),l=this.coplanarPoint(Yh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new uu,kM=new Ot(.5,.5),Vc=new q;class gp{constructor(t=new is,n=new is,s=new is,l=new is,c=new is,u=new is){this.planes=[t,n,s,l,c,u]}set(t,n,s,l,c,u){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(u),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=ki,s=!1){const l=this.planes,c=t.elements,u=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],y=c[7],b=c[8],A=c[9],M=c[10],S=c[11],z=c[12],D=c[13],L=c[14],I=c[15];if(l[0].setComponents(p-u,y-g,S-b,I-z).normalize(),l[1].setComponents(p+u,y+g,S+b,I+z).normalize(),l[2].setComponents(p+d,y+_,S+A,I+D).normalize(),l[3].setComponents(p-d,y-_,S-A,I-D).normalize(),s)l[4].setComponents(m,v,M,L).normalize(),l[5].setComponents(p-m,y-v,S-M,I-L).normalize();else if(l[4].setComponents(p-m,y-v,S-M,I-L).normalize(),n===ki)l[5].setComponents(p+m,y+v,S+M,I+L).normalize();else if(n===su)l[5].setComponents(m,v,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);const n=kM.distanceTo(t.center);return ws.radius=.7071067811865476+n,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const n=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(Vc.x=l.normal.x>0?t.max.x:t.min.x,Vc.y=l.normal.y>0?t.max.y:t.min.y,Vc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kv extends Zr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ou=new q,lu=new q,P_=new $e,Jo=new pp,kc=new uu,jh=new q,z_=new q;class XM extends Un{constructor(t=new yi,n=new Kv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[0];for(let l=1,c=n.count;l<c;l++)ou.fromBufferAttribute(n,l-1),lu.fromBufferAttribute(n,l),s[l]=s[l-1],s[l]+=ou.distanceTo(lu);t.setAttribute("lineDistance",new Gn(s,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,t.ray.intersectsSphere(kc)===!1)return;P_.copy(l).invert(),Jo.copy(t.ray).applyMatrix4(P_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const y=Math.max(0,u.start),b=Math.min(g.count,u.start+u.count);for(let A=y,M=b-1;A<M;A+=p){const S=g.getX(A),z=g.getX(A+1),D=Xc(this,t,Jo,m,S,z,A);D&&n.push(D)}if(this.isLineLoop){const A=g.getX(b-1),M=g.getX(y),S=Xc(this,t,Jo,m,A,M,b-1);S&&n.push(S)}}else{const y=Math.max(0,u.start),b=Math.min(v.count,u.start+u.count);for(let A=y,M=b-1;A<M;A+=p){const S=Xc(this,t,Jo,m,A,A+1,A);S&&n.push(S)}if(this.isLineLoop){const A=Xc(this,t,Jo,m,b-1,y,b-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Xc(r,t,n,s,l,c,u){const d=r.geometry.attributes.position;if(ou.fromBufferAttribute(d,l),lu.fromBufferAttribute(d,c),n.distanceSqToSegment(ou,lu,jh,z_)>s)return;jh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(jh);if(!(p<t.near||p>t.far))return{distance:p,point:z_.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const F_=new q,I_=new q;class WM extends XM{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[];for(let l=0,c=n.count;l<c;l+=2)F_.fromBufferAttribute(n,l),I_.fromBufferAttribute(n,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+F_.distanceTo(I_);t.setAttribute("lineDistance",new Gn(s,1))}else fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ul extends Hn{constructor(t,n,s=Yi,l,c,u,d=Ln,m=Ln,p,g=ba,_=1){if(g!==ba&&g!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,l,c,u,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class qM extends ul{constructor(t,n=Yi,s=zs,l,c,u=Ln,d=Ln,m,p=ba){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,s,l,c,u,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Qv extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ki{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(t,n){const s=this.getUtoTmapping(t);return this.getPoint(s,n)}getPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return n}getSpacedPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPointAt(s/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let s,l=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)s=this.getPoint(u/t),c+=s.distanceTo(l),n.push(c),l=s;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const s=this.getLengths();let l=0;const c=s.length;let u;n?u=n:u=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-u,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===u)return l/(c-1);const g=s[l],v=s[l+1]-g,y=(u-g)/v;return(l+y)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const u=this.getPoint(l),d=this.getPoint(c),m=n||(u.isVector2?new Ot:new q);return m.copy(d).sub(u).normalize(),m}getTangentAt(t,n){const s=this.getUtoTmapping(t);return this.getTangent(s,n)}computeFrenetFrames(t,n=!1){const s=new q,l=[],c=[],u=[],d=new q,m=new $e;for(let y=0;y<=t;y++){const b=y/t;l[y]=this.getTangentAt(b,new q)}c[0]=new q,u[0]=new q;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),v=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),v<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),u[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),u[y]=u[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(ye(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,b))}u[y].crossVectors(l[y],c[y])}if(n===!0){let y=Math.acos(ye(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],y*b)),u[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _p extends Ki{constructor(t=0,n=0,s=1,l=1,c=0,u=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=d,this.aRotation=m}getPoint(t,n=new Ot){const s=n,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(u?c=0:c=l),this.aClockwise===!0&&!u&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=m-this.aX,y=p-this.aY;m=v*g-y*_+this.aX,p=v*_+y*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class YM extends _p{constructor(t,n,s,l,c,u){super(t,n,s,s,l,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function vp(){let r=0,t=0,n=0,s=0;function l(c,u,d,m){r=c,t=d,n=-3*c+3*u-2*d-m,s=2*c-2*u+d+m}return{initCatmullRom:function(c,u,d,m,p){l(u,d,p*(d-c),p*(m-u))},initNonuniformCatmullRom:function(c,u,d,m,p,g,_){let v=(u-c)/p-(d-c)/(p+g)+(d-u)/g,y=(d-u)/g-(m-u)/(g+_)+(m-d)/_;v*=g,y*=g,l(u,d,v,y)},calc:function(c){const u=c*c,d=u*c;return r+t*c+n*u+s*d}}}const Wc=new q,Zh=new vp,Kh=new vp,Qh=new vp;class jM extends Ki{constructor(t=[],n=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=s,this.tension=l}getPoint(t,n=new q){const s=n,l=this.points,c=l.length,u=(c-(this.closed?0:1))*t;let d=Math.floor(u),m=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=l[(d-1)%c]:(Wc.subVectors(l[0],l[1]).add(l[0]),p=Wc);const _=l[d%c],v=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(Wc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Wc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(_),y),A=Math.pow(_.distanceToSquared(v),y),M=Math.pow(v.distanceToSquared(g),y);A<1e-4&&(A=1),b<1e-4&&(b=A),M<1e-4&&(M=A),Zh.initNonuniformCatmullRom(p.x,_.x,v.x,g.x,b,A,M),Kh.initNonuniformCatmullRom(p.y,_.y,v.y,g.y,b,A,M),Qh.initNonuniformCatmullRom(p.z,_.z,v.z,g.z,b,A,M)}else this.curveType==="catmullrom"&&(Zh.initCatmullRom(p.x,_.x,v.x,g.x,this.tension),Kh.initCatmullRom(p.y,_.y,v.y,g.y,this.tension),Qh.initCatmullRom(p.z,_.z,v.z,g.z,this.tension));return s.set(Zh.calc(m),Kh.calc(m),Qh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function B_(r,t,n,s,l){const c=(s-t)*.5,u=(l-n)*.5,d=r*r,m=r*d;return(2*n-2*s+c+u)*m+(-3*n+3*s-2*c-u)*d+c*r+n}function ZM(r,t){const n=1-r;return n*n*t}function KM(r,t){return 2*(1-r)*r*t}function QM(r,t){return r*r*t}function sl(r,t,n,s){return ZM(r,t)+KM(r,n)+QM(r,s)}function JM(r,t){const n=1-r;return n*n*n*t}function $M(r,t){const n=1-r;return 3*n*n*r*t}function tE(r,t){return 3*(1-r)*r*r*t}function eE(r,t){return r*r*r*t}function rl(r,t,n,s,l){return JM(r,t)+$M(r,n)+tE(r,s)+eE(r,l)}class Jv extends Ki{constructor(t=new Ot,n=new Ot,s=new Ot,l=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new Ot){const s=n,l=this.v0,c=this.v1,u=this.v2,d=this.v3;return s.set(rl(t,l.x,c.x,u.x,d.x),rl(t,l.y,c.y,u.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nE extends Ki{constructor(t=new q,n=new q,s=new q,l=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new q){const s=n,l=this.v0,c=this.v1,u=this.v2,d=this.v3;return s.set(rl(t,l.x,c.x,u.x,d.x),rl(t,l.y,c.y,u.y,d.y),rl(t,l.z,c.z,u.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $v extends Ki{constructor(t=new Ot,n=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Ot){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Ot){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class iE extends Ki{constructor(t=new q,n=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new q){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new q){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tx extends Ki{constructor(t=new Ot,n=new Ot,s=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new Ot){const s=n,l=this.v0,c=this.v1,u=this.v2;return s.set(sl(t,l.x,c.x,u.x),sl(t,l.y,c.y,u.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class aE extends Ki{constructor(t=new q,n=new q,s=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new q){const s=n,l=this.v0,c=this.v1,u=this.v2;return s.set(sl(t,l.x,c.x,u.x),sl(t,l.y,c.y,u.y),sl(t,l.z,c.z,u.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ex extends Ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Ot){const s=n,l=this.points,c=(l.length-1)*t,u=Math.floor(c),d=c-u,m=l[u===0?u:u-1],p=l[u],g=l[u>l.length-2?l.length-1:u+1],_=l[u>l.length-3?l.length-1:u+2];return s.set(B_(d,m.x,p.x,g.x,_.x),B_(d,m.y,p.y,g.y,_.y)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new Ot().fromArray(l))}return this}}var Jd=Object.freeze({__proto__:null,ArcCurve:YM,CatmullRomCurve3:jM,CubicBezierCurve:Jv,CubicBezierCurve3:nE,EllipseCurve:_p,LineCurve:$v,LineCurve3:iE,QuadraticBezierCurve:tx,QuadraticBezierCurve3:aE,SplineCurve:ex});class sE extends Ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jd[s](n,t))}return this}getPoint(t,n){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const u=l[c]-s,d=this.curves[c],m=d.getLength(),p=m===0?0:1-u/m;return d.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let s=0,l=this.curves.length;s<l;s++)n+=this.curves[s].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const u=c[l],d=u.isEllipseCurve?t*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?t*u.points.length:t,m=u.getPoints(d);for(let p=0;p<m.length;p++){const g=m[p];s&&s.equals(g)||(n.push(g),s=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,s=this.curves.length;n<s;n++){const l=this.curves[n];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(new Jd[l.type]().fromJSON(l))}return this}}class H_ extends sE{constructor(t){super(),this.type="Path",this.currentPoint=new Ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,s=t.length;n<s;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const s=new $v(this.currentPoint.clone(),new Ot(t,n));return this.curves.push(s),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,s,l){const c=new tx(this.currentPoint.clone(),new Ot(t,n),new Ot(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,n,s,l,c,u){const d=new Jv(this.currentPoint.clone(),new Ot(t,n),new Ot(s,l),new Ot(c,u));return this.curves.push(d),this.currentPoint.set(c,u),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),s=new ex(n);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,s,l,c,u){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+d,n+m,s,l,c,u),this}absarc(t,n,s,l,c,u){return this.absellipse(t,n,s,s,l,c,u),this}ellipse(t,n,s,l,c,u,d,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,n+g,s,l,c,u,d,m),this}absellipse(t,n,s,l,c,u,d,m){const p=new _p(t,n,s,l,c,u,d,m);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nx extends H_{constructor(t){super(t),this.uuid=Yr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let s=0,l=this.holes.length;s<l;s++)n[s]=this.holes[s].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const l=t.holes[n];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,s=this.holes.length;n<s;n++){const l=this.holes[n];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const l=t.holes[n];this.holes.push(new H_().fromJSON(l))}return this}}function rE(r,t,n=2){const s=t&&t.length,l=s?t[0]*n:r.length;let c=ix(r,0,l,n,!0);const u=[];if(!c||c.next===c.prev)return u;let d,m,p;if(s&&(c=fE(r,t,c,n)),r.length>80*n){d=r[0],m=r[1];let g=d,_=m;for(let v=n;v<l;v+=n){const y=r[v],b=r[v+1];y<d&&(d=y),b<m&&(m=b),y>g&&(g=y),b>_&&(_=b)}p=Math.max(g-d,_-m),p=p!==0?32767/p:0}return fl(c,u,n,d,m,p,0),u}function ix(r,t,n,s,l){let c;if(l===ME(r,t,n,s)>0)for(let u=t;u<n;u+=s)c=G_(u/s|0,r[u],r[u+1],c);else for(let u=n-s;u>=t;u-=s)c=G_(u/s|0,r[u],r[u+1],c);return c&&qr(c,c.next)&&(dl(c),c=c.next),c}function Is(r,t){if(!r)return r;t||(t=r);let n=r,s;do if(s=!1,!n.steiner&&(qr(n,n.next)||tn(n.prev,n,n.next)===0)){if(dl(n),n=t=n.prev,n===n.next)break;s=!0}else n=n.next;while(s||n!==t);return t}function fl(r,t,n,s,l,c,u){if(!r)return;!u&&c&&gE(r,s,l,c);let d=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?lE(r,s,l,c):oE(r)){t.push(m.i,r.i,p.i),dl(r),r=p.next,d=p.next;continue}if(r=p,r===d){u?u===1?(r=cE(Is(r),t),fl(r,t,n,s,l,c,2)):u===2&&uE(r,t,n,s,l,c):fl(Is(r),t,n,s,l,c,1);break}}}function oE(r){const t=r.prev,n=r,s=r.next;if(tn(t,n,s)>=0)return!1;const l=t.x,c=n.x,u=s.x,d=t.y,m=n.y,p=s.y,g=Math.min(l,c,u),_=Math.min(d,m,p),v=Math.max(l,c,u),y=Math.max(d,m,p);let b=s.next;for(;b!==t;){if(b.x>=g&&b.x<=v&&b.y>=_&&b.y<=y&&il(l,d,c,m,u,p,b.x,b.y)&&tn(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function lE(r,t,n,s){const l=r.prev,c=r,u=r.next;if(tn(l,c,u)>=0)return!1;const d=l.x,m=c.x,p=u.x,g=l.y,_=c.y,v=u.y,y=Math.min(d,m,p),b=Math.min(g,_,v),A=Math.max(d,m,p),M=Math.max(g,_,v),S=$d(y,b,t,n,s),z=$d(A,M,t,n,s);let D=r.prevZ,L=r.nextZ;for(;D&&D.z>=S&&L&&L.z<=z;){if(D.x>=y&&D.x<=A&&D.y>=b&&D.y<=M&&D!==l&&D!==u&&il(d,g,m,_,p,v,D.x,D.y)&&tn(D.prev,D,D.next)>=0||(D=D.prevZ,L.x>=y&&L.x<=A&&L.y>=b&&L.y<=M&&L!==l&&L!==u&&il(d,g,m,_,p,v,L.x,L.y)&&tn(L.prev,L,L.next)>=0))return!1;L=L.nextZ}for(;D&&D.z>=S;){if(D.x>=y&&D.x<=A&&D.y>=b&&D.y<=M&&D!==l&&D!==u&&il(d,g,m,_,p,v,D.x,D.y)&&tn(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;L&&L.z<=z;){if(L.x>=y&&L.x<=A&&L.y>=b&&L.y<=M&&L!==l&&L!==u&&il(d,g,m,_,p,v,L.x,L.y)&&tn(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function cE(r,t){let n=r;do{const s=n.prev,l=n.next.next;!qr(s,l)&&sx(s,n,n.next,l)&&hl(s,l)&&hl(l,s)&&(t.push(s.i,n.i,l.i),dl(n),dl(n.next),n=r=l),n=n.next}while(n!==r);return Is(n)}function uE(r,t,n,s,l,c){let u=r;do{let d=u.next.next;for(;d!==u.prev;){if(u.i!==d.i&&xE(u,d)){let m=rx(u,d);u=Is(u,u.next),m=Is(m,m.next),fl(u,t,n,s,l,c,0),fl(m,t,n,s,l,c,0);return}d=d.next}u=u.next}while(u!==r)}function fE(r,t,n,s){const l=[];for(let c=0,u=t.length;c<u;c++){const d=t[c]*s,m=c<u-1?t[c+1]*s:r.length,p=ix(r,d,m,s,!1);p===p.next&&(p.steiner=!0),l.push(vE(p))}l.sort(hE);for(let c=0;c<l.length;c++)n=dE(l[c],n);return n}function hE(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);n=s-l}return n}function dE(r,t){const n=pE(r,t);if(!n)return t;const s=rx(n,r);return Is(s,s.next),Is(n,n.next)}function pE(r,t){let n=t;const s=r.x,l=r.y;let c=-1/0,u;if(qr(r,n))return n;do{if(qr(r,n.next))return n.next;if(l<=n.y&&l>=n.next.y&&n.next.y!==n.y){const _=n.x+(l-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=s&&_>c&&(c=_,u=n.x<n.next.x?n:n.next,_===s))return u}n=n.next}while(n!==t);if(!u)return null;const d=u,m=u.x,p=u.y;let g=1/0;n=u;do{if(s>=n.x&&n.x>=m&&s!==n.x&&ax(l<p?s:c,l,m,p,l<p?c:s,l,n.x,n.y)){const _=Math.abs(l-n.y)/(s-n.x);hl(n,r)&&(_<g||_===g&&(n.x>u.x||n.x===u.x&&mE(u,n)))&&(u=n,g=_)}n=n.next}while(n!==d);return u}function mE(r,t){return tn(r.prev,r,t.prev)<0&&tn(t.next,r,r.next)<0}function gE(r,t,n,s){let l=r;do l.z===0&&(l.z=$d(l.x,l.y,t,n,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,_E(l)}function _E(r){let t,n=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let u=s,d=0;for(let p=0;p<n&&(d++,u=u.nextZ,!!u);p++);let m=n;for(;d>0||m>0&&u;)d!==0&&(m===0||!u||s.z<=u.z)?(l=s,s=s.nextZ,d--):(l=u,u=u.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=u}c.nextZ=null,n*=2}while(t>1);return r}function $d(r,t,n,s,l){return r=(r-n)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function vE(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function ax(r,t,n,s,l,c,u,d){return(l-u)*(t-d)>=(r-u)*(c-d)&&(r-u)*(s-d)>=(n-u)*(t-d)&&(n-u)*(c-d)>=(l-u)*(s-d)}function il(r,t,n,s,l,c,u,d){return!(r===u&&t===d)&&ax(r,t,n,s,l,c,u,d)}function xE(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!SE(r,t)&&(hl(r,t)&&hl(t,r)&&yE(r,t)&&(tn(r.prev,r,t.prev)||tn(r,t.prev,t))||qr(r,t)&&tn(r.prev,r,r.next)>0&&tn(t.prev,t,t.next)>0)}function tn(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function qr(r,t){return r.x===t.x&&r.y===t.y}function sx(r,t,n,s){const l=Yc(tn(r,t,n)),c=Yc(tn(r,t,s)),u=Yc(tn(n,s,r)),d=Yc(tn(n,s,t));return!!(l!==c&&u!==d||l===0&&qc(r,n,t)||c===0&&qc(r,s,t)||u===0&&qc(n,r,s)||d===0&&qc(n,t,s))}function qc(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Yc(r){return r>0?1:r<0?-1:0}function SE(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&sx(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function hl(r,t){return tn(r.prev,r,r.next)<0?tn(r,t,r.next)>=0&&tn(r,r.prev,t)>=0:tn(r,t,r.prev)<0||tn(r,r.next,t)<0}function yE(r,t){let n=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&l<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==r);return s}function rx(r,t){const n=tp(r.i,r.x,r.y),s=tp(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=l,l.prev=n,s.next=n,n.prev=s,c.next=s,s.prev=c,s}function G_(r,t,n,s){const l=tp(r,t,n);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function dl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function tp(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ME(r,t,n,s){let l=0;for(let c=t,u=n-s;c<n;c+=s)l+=(r[u]-r[c])*(r[c+1]+r[u+1]),u=c;return l}class EE{static triangulate(t,n,s=2){return rE(t,n,s)}}class Fr{static area(t){const n=t.length;let s=0;for(let l=n-1,c=0;c<n;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return Fr.area(t)<0}static triangulateShape(t,n){const s=[],l=[],c=[];V_(t),k_(s,t);let u=t.length;n.forEach(V_);for(let m=0;m<n.length;m++)l.push(u),u+=n[m].length,k_(s,n[m]);const d=EE.triangulate(s,l);for(let m=0;m<d.length;m+=3)c.push(d.slice(m,m+3));return c}}function V_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function k_(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class xp extends yi{constructor(t=new nx([new Ot(.5,.5),new Ot(-.5,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const s=this,l=[],c=[];for(let d=0,m=t.length;d<m;d++){const p=t[d];u(p)}this.setAttribute("position",new Gn(l,3)),this.setAttribute("uv",new Gn(c,2)),this.computeVertexNormals();function u(d){const m=[],p=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,_=n.depth!==void 0?n.depth:1;let v=n.bevelEnabled!==void 0?n.bevelEnabled:!0,y=n.bevelThickness!==void 0?n.bevelThickness:.2,b=n.bevelSize!==void 0?n.bevelSize:y-.1,A=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const S=n.extrudePath,z=n.UVGenerator!==void 0?n.UVGenerator:bE;let D,L=!1,I,H,F,Y;if(S){D=S.getSpacedPoints(g),L=!0,v=!1;const _t=S.isCatmullRomCurve3?S.closed:!1;I=S.computeFrenetFrames(g,_t),H=new q,F=new q,Y=new q}v||(M=0,y=0,b=0,A=0);const T=d.extractPoints(p);let w=T.shape;const G=T.holes;if(!Fr.isClockWise(w)){w=w.reverse();for(let _t=0,At=G.length;_t<At;_t++){const Et=G[_t];Fr.isClockWise(Et)&&(G[_t]=Et.reverse())}}function Q(_t){const Et=10000000000000001e-36;let Ft=_t[0];for(let P=1;P<=_t.length;P++){const ne=P%_t.length,It=_t[ne],ie=It.x-Ft.x,Dt=It.y-Ft.y,U=ie*ie+Dt*Dt,E=Math.max(Math.abs(It.x),Math.abs(It.y),Math.abs(Ft.x),Math.abs(Ft.y)),k=Et*E*E;if(U<=k){_t.splice(ne,1),P--;continue}Ft=It}}Q(w),G.forEach(Q);const ut=G.length,rt=w;for(let _t=0;_t<ut;_t++){const At=G[_t];w=w.concat(At)}function O(_t,At,Et){return At||De("ExtrudeGeometry: vec does not exist"),_t.clone().addScaledVector(At,Et)}const B=w.length;function J(_t,At,Et){let Ft,P,ne;const It=_t.x-At.x,ie=_t.y-At.y,Dt=Et.x-_t.x,U=Et.y-_t.y,E=It*It+ie*ie,k=It*U-ie*Dt;if(Math.abs(k)>Number.EPSILON){const ct=Math.sqrt(E),St=Math.sqrt(Dt*Dt+U*U),ft=At.x-ie/ct,jt=At.y+It/ct,Lt=Et.x-U/St,Jt=Et.y+Dt/St,oe=((Lt-ft)*U-(Jt-jt)*Dt)/(It*U-ie*Dt);Ft=ft+It*oe-_t.x,P=jt+ie*oe-_t.y;const bt=Ft*Ft+P*P;if(bt<=2)return new Ot(Ft,P);ne=Math.sqrt(bt/2)}else{let ct=!1;It>Number.EPSILON?Dt>Number.EPSILON&&(ct=!0):It<-Number.EPSILON?Dt<-Number.EPSILON&&(ct=!0):Math.sign(ie)===Math.sign(U)&&(ct=!0),ct?(Ft=-ie,P=It,ne=Math.sqrt(E)):(Ft=It,P=ie,ne=Math.sqrt(E/2))}return new Ot(Ft/ne,P/ne)}const Mt=[];for(let _t=0,At=rt.length,Et=At-1,Ft=_t+1;_t<At;_t++,Et++,Ft++)Et===At&&(Et=0),Ft===At&&(Ft=0),Mt[_t]=J(rt[_t],rt[Et],rt[Ft]);const vt=[];let N,et=Mt.concat();for(let _t=0,At=ut;_t<At;_t++){const Et=G[_t];N=[];for(let Ft=0,P=Et.length,ne=P-1,It=Ft+1;Ft<P;Ft++,ne++,It++)ne===P&&(ne=0),It===P&&(It=0),N[Ft]=J(Et[Ft],Et[ne],Et[It]);vt.push(N),et=et.concat(N)}let pt;if(M===0)pt=Fr.triangulateShape(rt,G);else{const _t=[],At=[];for(let Et=0;Et<M;Et++){const Ft=Et/M,P=y*Math.cos(Ft*Math.PI/2),ne=b*Math.sin(Ft*Math.PI/2)+A;for(let It=0,ie=rt.length;It<ie;It++){const Dt=O(rt[It],Mt[It],ne);Vt(Dt.x,Dt.y,-P),Ft===0&&_t.push(Dt)}for(let It=0,ie=ut;It<ie;It++){const Dt=G[It];N=vt[It];const U=[];for(let E=0,k=Dt.length;E<k;E++){const ct=O(Dt[E],N[E],ne);Vt(ct.x,ct.y,-P),Ft===0&&U.push(ct)}Ft===0&&At.push(U)}}pt=Fr.triangulateShape(_t,At)}const Rt=pt.length,Xt=b+A;for(let _t=0;_t<B;_t++){const At=v?O(w[_t],et[_t],Xt):w[_t];L?(F.copy(I.normals[0]).multiplyScalar(At.x),H.copy(I.binormals[0]).multiplyScalar(At.y),Y.copy(D[0]).add(F).add(H),Vt(Y.x,Y.y,Y.z)):Vt(At.x,At.y,0)}for(let _t=1;_t<=g;_t++)for(let At=0;At<B;At++){const Et=v?O(w[At],et[At],Xt):w[At];L?(F.copy(I.normals[_t]).multiplyScalar(Et.x),H.copy(I.binormals[_t]).multiplyScalar(Et.y),Y.copy(D[_t]).add(F).add(H),Vt(Y.x,Y.y,Y.z)):Vt(Et.x,Et.y,_/g*_t)}for(let _t=M-1;_t>=0;_t--){const At=_t/M,Et=y*Math.cos(At*Math.PI/2),Ft=b*Math.sin(At*Math.PI/2)+A;for(let P=0,ne=rt.length;P<ne;P++){const It=O(rt[P],Mt[P],Ft);Vt(It.x,It.y,_+Et)}for(let P=0,ne=G.length;P<ne;P++){const It=G[P];N=vt[P];for(let ie=0,Dt=It.length;ie<Dt;ie++){const U=O(It[ie],N[ie],Ft);L?Vt(U.x,U.y+D[g-1].y,D[g-1].x+Et):Vt(U.x,U.y,_+Et)}}}nt(),ht();function nt(){const _t=l.length/3;if(v){let At=0,Et=B*At;for(let Ft=0;Ft<Rt;Ft++){const P=pt[Ft];Ht(P[2]+Et,P[1]+Et,P[0]+Et)}At=g+M*2,Et=B*At;for(let Ft=0;Ft<Rt;Ft++){const P=pt[Ft];Ht(P[0]+Et,P[1]+Et,P[2]+Et)}}else{for(let At=0;At<Rt;At++){const Et=pt[At];Ht(Et[2],Et[1],Et[0])}for(let At=0;At<Rt;At++){const Et=pt[At];Ht(Et[0]+B*g,Et[1]+B*g,Et[2]+B*g)}}s.addGroup(_t,l.length/3-_t,0)}function ht(){const _t=l.length/3;let At=0;Nt(rt,At),At+=rt.length;for(let Et=0,Ft=G.length;Et<Ft;Et++){const P=G[Et];Nt(P,At),At+=P.length}s.addGroup(_t,l.length/3-_t,1)}function Nt(_t,At){let Et=_t.length;for(;--Et>=0;){const Ft=Et;let P=Et-1;P<0&&(P=_t.length-1);for(let ne=0,It=g+M*2;ne<It;ne++){const ie=B*ne,Dt=B*(ne+1),U=At+Ft+ie,E=At+P+ie,k=At+P+Dt,ct=At+Ft+Dt;me(U,E,k,ct)}}}function Vt(_t,At,Et){m.push(_t),m.push(At),m.push(Et)}function Ht(_t,At,Et){Me(_t),Me(At),Me(Et);const Ft=l.length/3,P=z.generateTopUV(s,l,Ft-3,Ft-2,Ft-1);ue(P[0]),ue(P[1]),ue(P[2])}function me(_t,At,Et,Ft){Me(_t),Me(At),Me(Ft),Me(At),Me(Et),Me(Ft);const P=l.length/3,ne=z.generateSideWallUV(s,l,P-6,P-3,P-2,P-1);ue(ne[0]),ue(ne[1]),ue(ne[3]),ue(ne[1]),ue(ne[2]),ue(ne[3])}function Me(_t){l.push(m[_t*3+0]),l.push(m[_t*3+1]),l.push(m[_t*3+2])}function ue(_t){c.push(_t.x),c.push(_t.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,s=this.parameters.options;return TE(n,s,t)}static fromJSON(t,n){const s=[];for(let c=0,u=t.shapes.length;c<u;c++){const d=n[t.shapes[c]];s.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new Jd[l.type]().fromJSON(l)),new xp(s,t.options)}}const bE={generateTopUV:function(r,t,n,s,l){const c=t[n*3],u=t[n*3+1],d=t[s*3],m=t[s*3+1],p=t[l*3],g=t[l*3+1];return[new Ot(c,u),new Ot(d,m),new Ot(p,g)]},generateSideWallUV:function(r,t,n,s,l,c){const u=t[n*3],d=t[n*3+1],m=t[n*3+2],p=t[s*3],g=t[s*3+1],_=t[s*3+2],v=t[l*3],y=t[l*3+1],b=t[l*3+2],A=t[c*3],M=t[c*3+1],S=t[c*3+2];return Math.abs(d-g)<Math.abs(u-p)?[new Ot(u,1-m),new Ot(p,1-_),new Ot(v,1-b),new Ot(A,1-S)]:[new Ot(d,1-m),new Ot(g,1-_),new Ot(y,1-b),new Ot(M,1-S)]}};function TE(r,t,n){if(n.shapes=[],Array.isArray(r))for(let s=0,l=r.length;s<l;s++){const c=r[s];n.shapes.push(c.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class fu extends yi{constructor(t=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:l};const c=t/2,u=n/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,v=n/m,y=[],b=[],A=[],M=[];for(let S=0;S<g;S++){const z=S*v-u;for(let D=0;D<p;D++){const L=D*_-c;b.push(L,-z,0),A.push(0,0,1),M.push(D/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let z=0;z<d;z++){const D=z+p*S,L=z+p*(S+1),I=z+1+p*(S+1),H=z+1+p*S;y.push(D,L,H),y.push(L,I,H)}this.setIndex(y),this.setAttribute("position",new Gn(b,3)),this.setAttribute("normal",new Gn(A,3)),this.setAttribute("uv",new Gn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fu(t.width,t.height,t.widthSegments,t.heightSegments)}}class AE extends Zi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class X_ extends Zr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iv,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class RE extends Zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class CE extends Zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ox extends Un{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Jh=new $e,W_=new q,q_=new q;class wE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,s=this.matrix;W_.setFromMatrixPosition(t.matrixWorld),n.position.copy(W_),q_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(q_),n.updateMatrixWorld(),Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Jh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Sp extends Yv{constructor(t=-1,n=1,s=1,l=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,l,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,u=s+t,d=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class DE extends wE{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y_ extends ox{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new DE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class LE extends ox{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class UE extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class j_{constructor(t=1,n=0,s=0){this.radius=t,this.phi=n,this.theta=s}set(t,n,s){return this.radius=t,this.phi=n,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,s){return this.radius=Math.sqrt(t*t+n*n+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ye(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class NE extends WM{constructor(t=10,n=10,s=4473924,l=8947848){s=new Re(s),l=new Re(l);const c=n/2,u=t/n,d=t/2,m=[],p=[];for(let v=0,y=0,b=-d;v<=n;v++,b+=u){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const A=v===c?s:l;A.toArray(p,y),y+=3,A.toArray(p,y),y+=3,A.toArray(p,y),y+=3,A.toArray(p,y),y+=3}const g=new yi;g.setAttribute("position",new Gn(m,3)),g.setAttribute("color",new Gn(p,3));const _=new Kv({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class OE extends Bs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){fe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Z_(r,t,n,s){const l=PE(s);switch(n){case Pv:return r*t;case Fv:return r*t/l.components*l.byteLength;case lp:return r*t/l.components*l.byteLength;case kr:return r*t*2/l.components*l.byteLength;case cp:return r*t*2/l.components*l.byteLength;case zv:return r*t*3/l.components*l.byteLength;case Ui:return r*t*4/l.components*l.byteLength;case up:return r*t*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:case Md:return Math.max(r,16)*Math.max(t,8)/4;case xd:case yd:return Math.max(r,8)*Math.max(t,8)/2;case Ed:case bd:case Ad:case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Td:case Cd:case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Vd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Xd:case Wd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Yd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Zd:case Kd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function PE(r){switch(r){case ri:case Lv:return{byteLength:1,components:1};case ol:case Uv:case Ea:return{byteLength:2,components:1};case rp:case op:return{byteLength:2,components:4};case Yi:case sp:case Vi:return{byteLength:4,components:1};case Nv:case Ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);function lx(){let r=null,t=!1,n=null,s=null;function l(c,u){n(c,u),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function zE(r){const t=new WeakMap;function n(d,m){const p=d.array,g=d.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<_.length;y++){const b=_[v],A=_[y];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++v,_[v]=A)}_.length=v+1;for(let y=0,b=_.length;y<b;y++){const A=_[y];r.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:u}}var FE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ob=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,db="gl_FragColor = linearToOutputTexel( gl_FragColor );",pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ob=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ib=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_T=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ST=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ET=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$T=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,e1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,i1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,p1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Se={alphahash_fragment:FE,alphahash_pars_fragment:IE,alphamap_fragment:BE,alphamap_pars_fragment:HE,alphatest_fragment:GE,alphatest_pars_fragment:VE,aomap_fragment:kE,aomap_pars_fragment:XE,batching_pars_vertex:WE,batching_vertex:qE,begin_vertex:YE,beginnormal_vertex:jE,bsdfs:ZE,iridescence_fragment:KE,bumpmap_pars_fragment:QE,clipping_planes_fragment:JE,clipping_planes_pars_fragment:$E,clipping_planes_pars_vertex:tb,clipping_planes_vertex:eb,color_fragment:nb,color_pars_fragment:ib,color_pars_vertex:ab,color_vertex:sb,common:rb,cube_uv_reflection_fragment:ob,defaultnormal_vertex:lb,displacementmap_pars_vertex:cb,displacementmap_vertex:ub,emissivemap_fragment:fb,emissivemap_pars_fragment:hb,colorspace_fragment:db,colorspace_pars_fragment:pb,envmap_fragment:mb,envmap_common_pars_fragment:gb,envmap_pars_fragment:_b,envmap_pars_vertex:vb,envmap_physical_pars_fragment:wb,envmap_vertex:xb,fog_vertex:Sb,fog_pars_vertex:yb,fog_fragment:Mb,fog_pars_fragment:Eb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:Tb,lights_lambert_fragment:Ab,lights_lambert_pars_fragment:Rb,lights_pars_begin:Cb,lights_toon_fragment:Db,lights_toon_pars_fragment:Lb,lights_phong_fragment:Ub,lights_phong_pars_fragment:Nb,lights_physical_fragment:Ob,lights_physical_pars_fragment:Pb,lights_fragment_begin:zb,lights_fragment_maps:Fb,lights_fragment_end:Ib,logdepthbuf_fragment:Bb,logdepthbuf_pars_fragment:Hb,logdepthbuf_pars_vertex:Gb,logdepthbuf_vertex:Vb,map_fragment:kb,map_pars_fragment:Xb,map_particle_fragment:Wb,map_particle_pars_fragment:qb,metalnessmap_fragment:Yb,metalnessmap_pars_fragment:jb,morphinstance_vertex:Zb,morphcolor_vertex:Kb,morphnormal_vertex:Qb,morphtarget_pars_vertex:Jb,morphtarget_vertex:$b,normal_fragment_begin:tT,normal_fragment_maps:eT,normal_pars_fragment:nT,normal_pars_vertex:iT,normal_vertex:aT,normalmap_pars_fragment:sT,clearcoat_normal_fragment_begin:rT,clearcoat_normal_fragment_maps:oT,clearcoat_pars_fragment:lT,iridescence_pars_fragment:cT,opaque_fragment:uT,packing:fT,premultiplied_alpha_fragment:hT,project_vertex:dT,dithering_fragment:pT,dithering_pars_fragment:mT,roughnessmap_fragment:gT,roughnessmap_pars_fragment:_T,shadowmap_pars_fragment:vT,shadowmap_pars_vertex:xT,shadowmap_vertex:ST,shadowmask_pars_fragment:yT,skinbase_vertex:MT,skinning_pars_vertex:ET,skinning_vertex:bT,skinnormal_vertex:TT,specularmap_fragment:AT,specularmap_pars_fragment:RT,tonemapping_fragment:CT,tonemapping_pars_fragment:wT,transmission_fragment:DT,transmission_pars_fragment:LT,uv_pars_fragment:UT,uv_pars_vertex:NT,uv_vertex:OT,worldpos_vertex:PT,background_vert:zT,background_frag:FT,backgroundCube_vert:IT,backgroundCube_frag:BT,cube_vert:HT,cube_frag:GT,depth_vert:VT,depth_frag:kT,distance_vert:XT,distance_frag:WT,equirect_vert:qT,equirect_frag:YT,linedashed_vert:jT,linedashed_frag:ZT,meshbasic_vert:KT,meshbasic_frag:QT,meshlambert_vert:JT,meshlambert_frag:$T,meshmatcap_vert:t1,meshmatcap_frag:e1,meshnormal_vert:n1,meshnormal_frag:i1,meshphong_vert:a1,meshphong_frag:s1,meshphysical_vert:r1,meshphysical_frag:o1,meshtoon_vert:l1,meshtoon_frag:c1,points_vert:u1,points_frag:f1,shadow_vert:h1,shadow_frag:d1,sprite_vert:p1,sprite_frag:m1},kt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Hi={basic:{uniforms:Bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Re(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Bn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Bn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new Re(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Bn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Bn([kt.points,kt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Bn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Bn([kt.common,kt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Bn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Bn([kt.sprite,kt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Bn([kt.common,kt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Bn([kt.lights,kt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Hi.physical={uniforms:Bn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const jc={r:0,b:0,g:0},Ds=new ji,g1=new $e;function _1(r,t,n,s,l,c,u){const d=new Re(0);let m=c===!0?0:1,p,g,_=null,v=0,y=null;function b(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?n:t).get(L)),L}function A(D){let L=!1;const I=b(D);I===null?S(d,m):I&&I.isColor&&(S(I,1),L=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,u):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(D,L){const I=b(L);I&&(I.isCubeTexture||I.mapping===cu)?(g===void 0&&(g=new Ni(new Kr(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Wr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,F,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ds.copy(L.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(g1.makeRotationFromEuler(Ds)),g.material.toneMapped=Le.getTransfer(I.colorSpace)!==Ve,(_!==I||v!==I.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=I,v=I.version,y=r.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Ni(new fu(2,2),new Zi({name:"BackgroundMaterial",uniforms:Wr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Le.getTransfer(I.colorSpace)!==Ve,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||v!==I.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=I,v=I.version,y=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function S(D,L){D.getRGB(jc,qv(r)),s.buffers.color.setClear(jc.r,jc.g,jc.b,L,u)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,L=1){d.set(D),m=L,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,S(d,m)},render:A,addToRenderList:M,dispose:z}}function v1(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,u=!1;function d(w,G,it,Q,ut){let rt=!1;const O=_(Q,it,G);c!==O&&(c=O,p(c.object)),rt=y(w,Q,it,ut),rt&&b(w,Q,it,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(rt||u)&&(u=!1,L(w,G,it,Q),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,G,it){const Q=it.wireframe===!0;let ut=s[w.id];ut===void 0&&(ut={},s[w.id]=ut);let rt=ut[G.id];rt===void 0&&(rt={},ut[G.id]=rt);let O=rt[Q];return O===void 0&&(O=v(m()),rt[Q]=O),O}function v(w){const G=[],it=[],Q=[];for(let ut=0;ut<n;ut++)G[ut]=0,it[ut]=0,Q[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:it,attributeDivisors:Q,object:w,attributes:{},index:null}}function y(w,G,it,Q){const ut=c.attributes,rt=G.attributes;let O=0;const B=it.getAttributes();for(const J in B)if(B[J].location>=0){const vt=ut[J];let N=rt[J];if(N===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),vt===void 0||vt.attribute!==N||N&&vt.data!==N.data)return!0;O++}return c.attributesNum!==O||c.index!==Q}function b(w,G,it,Q){const ut={},rt=G.attributes;let O=0;const B=it.getAttributes();for(const J in B)if(B[J].location>=0){let vt=rt[J];vt===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor));const N={};N.attribute=vt,vt&&vt.data&&(N.data=vt.data),ut[J]=N,O++}c.attributes=ut,c.attributesNum=O,c.index=Q}function A(){const w=c.newAttributes;for(let G=0,it=w.length;G<it;G++)w[G]=0}function M(w){S(w,0)}function S(w,G){const it=c.newAttributes,Q=c.enabledAttributes,ut=c.attributeDivisors;it[w]=1,Q[w]===0&&(r.enableVertexAttribArray(w),Q[w]=1),ut[w]!==G&&(r.vertexAttribDivisor(w,G),ut[w]=G)}function z(){const w=c.newAttributes,G=c.enabledAttributes;for(let it=0,Q=G.length;it<Q;it++)G[it]!==w[it]&&(r.disableVertexAttribArray(it),G[it]=0)}function D(w,G,it,Q,ut,rt,O){O===!0?r.vertexAttribIPointer(w,G,it,ut,rt):r.vertexAttribPointer(w,G,it,Q,ut,rt)}function L(w,G,it,Q){A();const ut=Q.attributes,rt=it.getAttributes(),O=G.defaultAttributeValues;for(const B in rt){const J=rt[B];if(J.location>=0){let Mt=ut[B];if(Mt===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const vt=Mt.normalized,N=Mt.itemSize,et=t.get(Mt);if(et===void 0)continue;const pt=et.buffer,Rt=et.type,Xt=et.bytesPerElement,nt=Rt===r.INT||Rt===r.UNSIGNED_INT||Mt.gpuType===sp;if(Mt.isInterleavedBufferAttribute){const ht=Mt.data,Nt=ht.stride,Vt=Mt.offset;if(ht.isInstancedInterleavedBuffer){for(let Ht=0;Ht<J.locationSize;Ht++)S(J.location+Ht,ht.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ht=0;Ht<J.locationSize;Ht++)M(J.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let Ht=0;Ht<J.locationSize;Ht++)D(J.location+Ht,N/J.locationSize,Rt,vt,Nt*Xt,(Vt+N/J.locationSize*Ht)*Xt,nt)}else{if(Mt.isInstancedBufferAttribute){for(let ht=0;ht<J.locationSize;ht++)S(J.location+ht,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ht=0;ht<J.locationSize;ht++)M(J.location+ht);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let ht=0;ht<J.locationSize;ht++)D(J.location+ht,N/J.locationSize,Rt,vt,N*Xt,N/J.locationSize*ht*Xt,nt)}}else if(O!==void 0){const vt=O[B];if(vt!==void 0)switch(vt.length){case 2:r.vertexAttrib2fv(J.location,vt);break;case 3:r.vertexAttrib3fv(J.location,vt);break;case 4:r.vertexAttrib4fv(J.location,vt);break;default:r.vertexAttrib1fv(J.location,vt)}}}}z()}function I(){Y();for(const w in s){const G=s[w];for(const it in G){const Q=G[it];for(const ut in Q)g(Q[ut].object),delete Q[ut];delete G[it]}delete s[w]}}function H(w){if(s[w.id]===void 0)return;const G=s[w.id];for(const it in G){const Q=G[it];for(const ut in Q)g(Q[ut].object),delete Q[ut];delete G[it]}delete s[w.id]}function F(w){for(const G in s){const it=s[G];if(it[w.id]===void 0)continue;const Q=it[w.id];for(const ut in Q)g(Q[ut].object),delete Q[ut];delete it[w.id]}}function Y(){T(),u=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:H,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:M,disableUnusedAttributes:z}}function x1(r,t,n){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),n.update(g,s,1)}function u(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),n.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let b=0;b<_;b++)y+=g[b];n.update(y,s,1)}function m(p,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)u(p[b],g[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,_);let b=0;for(let A=0;A<_;A++)b+=g[A]*v[A];n.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function S1(r,t,n,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function u(F){return!(F!==Ui&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const Y=F===Ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ri&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Vi&&!Y)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(fe("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),H=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:z,maxVaryings:D,maxFragmentUniforms:L,maxSamples:I,samples:H}}function y1(r){const t=this;let n=null,s=0,l=!1,c=!1;const u=new is,d=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||l;return l=v,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const b=_.clippingPlanes,A=_.clipIntersection,M=_.clipShadows,S=r.get(_);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const z=c?0:s,D=z*4;let L=S.clippingState||null;m.value=L,L=g(b,v,D,y);for(let I=0;I!==D;++I)L[I]=n[I];S.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,y,b){const A=_!==null?_.length:0;let M=null;if(A!==0){if(M=m.value,b!==!0||M===null){const S=y+A*4,z=v.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<S)&&(M=new Float32Array(S));for(let D=0,L=y;D!==A;++D,L+=4)u.copy(_[D]).applyMatrix4(z,d),u.normal.toArray(M,L),M[L+3]=u.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function M1(r){let t=new WeakMap;function n(u,d){return d===md?u.mapping=zs:d===gd&&(u.mapping=Vr),u}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===md||d===gd)if(t.has(u)){const m=t.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new Zv(m.height);return p.fromEquirectangularTexture(r,u),t.set(u,p),u.addEventListener("dispose",l),n(p.texture,u.mapping)}else return null}}return u}function l(u){const d=u.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const rs=4,K_=[.125,.215,.35,.446,.526,.582],Ns=20,E1=256,$o=new Sp,Q_=new Re;let $h=null,td=0,ed=0,nd=!1;const b1=new q;class J_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,l=100,c={}){const{size:u=256,position:d=b1}=c;$h=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($h,td,ed),this._renderer.xr.enabled=nd,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===zs||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$h=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ea,format:Ui,colorSpace:Xr,depthBuffer:!1},l=$_(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=T1(c)),this._blurMaterial=R1(c,t,n),this._ggxMaterial=A1(c,t,n)}return l}_compileMaterial(t){const n=new Ni(new yi,t);this._renderer.compile(n,$o)}_sceneToCubeUV(t,n,s,l,c){const m=new Si(90,1,n,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(Q_),_.toneMapping=Xi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new Kr,new kv({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let S=!1;const z=t.background;z?z.isColor&&(M.color.copy(z),t.background=null,S=!0):(M.color.copy(Q_),S=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):L===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const I=this._cubeSize;Pr(l,L*I,D>2?I:0,I,I),_.setRenderTarget(l),S&&_.render(A,m),_.render(t,m)}_.toneMapping=y,_.autoClear=v,t.background=z}_textureToCubeUV(t,n){const s=this._renderer,l=t.mapping===zs||t.mapping===Vr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tv());const c=l?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Pr(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(u,$o)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const l=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[s];d.material=u;const m=u.uniforms,p=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,y=_*v,{_lodMax:b}=this,A=this._sizeLods[s],M=3*A*(s>b-rs?s-b+rs:0),S=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-n,Pr(c,M,S,3*A,2*A),l.setRenderTarget(c),l.render(d,$o),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Pr(t,M,S,3*A,2*A),l.setRenderTarget(t),l.render(d,$o)}_blur(t,n,s,l,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,s,l,"latitudinal",c),this._halfBlur(u,t,s,s,l,"longitudinal",c)}_halfBlur(t,n,s,l,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const v=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ns-1),A=c/b,M=isFinite(c)?1+Math.floor(g*A):Ns;M>Ns&&fe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ns}`);const S=[];let z=0;for(let F=0;F<Ns;++F){const Y=F/A,T=Math.exp(-Y*Y/2);S.push(T),F===0?z+=T:F<M&&(z+=2*T)}for(let F=0;F<S.length;F++)S[F]=S[F]/z;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=S,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:D}=this;v.dTheta.value=b,v.mipInt.value=D-s;const L=this._sizeLods[l],I=3*L*(l>D-rs?l-D+rs:0),H=4*(this._cubeSize-L);Pr(n,I,H,3*L,2*L),m.setRenderTarget(n),m.render(_,$o)}}function T1(r){const t=[],n=[],s=[];let l=r;const c=r-rs+1+K_.length;for(let u=0;u<c;u++){const d=Math.pow(2,l);t.push(d);let m=1/d;u>r-rs?m=K_[u-r+rs-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,b=6,A=3,M=2,S=1,z=new Float32Array(A*b*y),D=new Float32Array(M*b*y),L=new Float32Array(S*b*y);for(let H=0;H<y;H++){const F=H%3*2/3-1,Y=H>2?0:-1,T=[F,Y,0,F+2/3,Y,0,F+2/3,Y+1,0,F,Y,0,F+2/3,Y+1,0,F,Y+1,0];z.set(T,A*b*H),D.set(v,M*b*H);const w=[H,H,H,H,H,H];L.set(w,S*b*H)}const I=new yi;I.setAttribute("position",new qi(z,A)),I.setAttribute("uv",new qi(D,M)),I.setAttribute("faceIndex",new qi(L,S)),s.push(new Ni(I,null)),l>rs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function $_(r,t,n){const s=new Wi(r,t,n);return s.texture.mapping=cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pr(r,t,n,s,l){r.viewport.set(t,n,s,l),r.scissor.set(t,n,s,l)}function A1(r,t,n){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:E1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function R1(r,t,n){const s=new Float32Array(Ns),l=new q(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function tv(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function ev(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C1(r){let t=new WeakMap,n=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===md||m===gd,g=m===zs||m===Vr;if(p||g){let _=t.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new J_(r)),_=p?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new J_(r)),_=p?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function w1(r){const t={};function n(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&cl("WebGLRenderer: "+s+" extension not supported."),l}}}function D1(r,t,n,s){const l={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",u),l[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)t.update(v[y],r.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,b=_.attributes.position;let A=0;if(y!==null){const z=y.array;A=y.version;for(let D=0,L=z.length;D<L;D+=3){const I=z[D+0],H=z[D+1],F=z[D+2];v.push(I,H,H,F,F,I)}}else if(b!==void 0){const z=b.array;A=b.version;for(let D=0,L=z.length/3-1;D<L;D+=3){const I=D+0,H=D+1,F=D+2;v.push(I,H,H,F,F,I)}}else return;const M=new(Bv(v)?Wv:Xv)(v,1);M.version=A;const S=c.get(_);S&&t.remove(S),c.set(_,M)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function L1(r,t,n){let s;function l(v){s=v}let c,u;function d(v){c=v.type,u=v.bytesPerElement}function m(v,y){r.drawElements(s,y,c,v*u),n.update(y,s,1)}function p(v,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,v*u,b),n.update(y,s,b))}function g(v,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,b);let M=0;for(let S=0;S<b;S++)M+=y[S];n.update(M,s,1)}function _(v,y,b,A){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<v.length;S++)p(v[S]/u,y[S],A[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,A,0,b);let S=0;for(let z=0;z<b;z++)S+=y[z]*A[z];n.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function U1(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:De("WebGLInfo: Unknown draw mode:",u);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:s}}function N1(r,t,n){const s=new WeakMap,l=new an;function c(u,d,m){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(d);if(v===void 0||v.count!==_){let w=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var y=w;v!==void 0&&v.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let L=0;b===!0&&(L=1),A===!0&&(L=2),M===!0&&(L=3);let I=d.attributes.position.count*L,H=1;I>t.maxTextureSize&&(H=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const F=new Float32Array(I*H*4*_),Y=new Hv(F,I,H,_);Y.type=Vi,Y.needsUpdate=!0;const T=L*4;for(let G=0;G<_;G++){const it=S[G],Q=z[G],ut=D[G],rt=I*H*4*G;for(let O=0;O<it.count;O++){const B=O*T;b===!0&&(l.fromBufferAttribute(it,O),F[rt+B+0]=l.x,F[rt+B+1]=l.y,F[rt+B+2]=l.z,F[rt+B+3]=0),A===!0&&(l.fromBufferAttribute(Q,O),F[rt+B+4]=l.x,F[rt+B+5]=l.y,F[rt+B+6]=l.z,F[rt+B+7]=0),M===!0&&(l.fromBufferAttribute(ut,O),F[rt+B+8]=l.x,F[rt+B+9]=l.y,F[rt+B+10]=l.z,F[rt+B+11]=ut.itemSize===4?l.w:1)}}v={count:_,texture:Y,size:new Ot(I,H)},s.set(d,v),d.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const A=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function O1(r,t,n,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function u(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const P1={[Ev]:"LINEAR_TONE_MAPPING",[bv]:"REINHARD_TONE_MAPPING",[Tv]:"CINEON_TONE_MAPPING",[Av]:"ACES_FILMIC_TONE_MAPPING",[Cv]:"AGX_TONE_MAPPING",[wv]:"NEUTRAL_TONE_MAPPING",[Rv]:"CUSTOM_TONE_MAPPING"};function z1(r,t,n,s,l){const c=new Wi(t,n,{type:r,depthBuffer:s,stencilBuffer:l}),u=new Wi(t,n,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),d=new yi;d.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const m=new AE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ni(d,m),g=new Sp(-1,1,1,-1,0,1);let _=null,v=null,y=!1,b,A=null,M=[],S=!1;this.setSize=function(z,D){c.setSize(z,D),u.setSize(z,D);for(let L=0;L<M.length;L++){const I=M[L];I.setSize&&I.setSize(z,D)}},this.setEffects=function(z){M=z,S=M.length>0&&M[0].isRenderPass===!0;const D=c.width,L=c.height;for(let I=0;I<M.length;I++){const H=M[I];H.setSize&&H.setSize(D,L)}},this.begin=function(z,D){if(y||z.toneMapping===Xi&&M.length===0)return!1;if(A=D,D!==null){const L=D.width,I=D.height;(c.width!==L||c.height!==I)&&this.setSize(L,I)}return S===!1&&z.setRenderTarget(c),b=z.toneMapping,z.toneMapping=Xi,!0},this.hasRenderPass=function(){return S},this.end=function(z,D){z.toneMapping=b,y=!0;let L=c,I=u;for(let H=0;H<M.length;H++){const F=M[H];if(F.enabled!==!1&&(F.render(z,I,L,D),F.needsSwap!==!1)){const Y=L;L=I,I=Y}}if(_!==z.outputColorSpace||v!==z.toneMapping){_=z.outputColorSpace,v=z.toneMapping,m.defines={},Le.getTransfer(_)===Ve&&(m.defines.SRGB_TRANSFER="");const H=P1[v];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,z.setRenderTarget(A),z.render(p,g),A=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),d.dispose(),m.dispose()}}const cx=new Hn,ep=new ul(1,1),ux=new Hv,fx=new yM,hx=new jv,nv=[],iv=[],av=new Float32Array(16),sv=new Float32Array(9),rv=new Float32Array(4);function Qr(r,t,n){const s=r[0];if(s<=0||s>0)return r;const l=t*n;let c=nv[l];if(c===void 0&&(c=new Float32Array(l),nv[l]=c),t!==0){s.toArray(c,0);for(let u=1,d=0;u!==t;++u)d+=n,r[u].toArray(c,d)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==t[n])return!1;return!0}function vn(r,t){for(let n=0,s=t.length;n<s;n++)r[n]=t[n]}function du(r,t){let n=iv[t];n===void 0&&(n=new Int32Array(t),iv[t]=n);for(let s=0;s!==t;++s)n[s]=r.allocateTextureUnit();return n}function F1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function I1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;r.uniform2fv(this.addr,t),vn(n,t)}}function B1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_n(n,t))return;r.uniform3fv(this.addr,t),vn(n,t)}}function H1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;r.uniform4fv(this.addr,t),vn(n,t)}}function G1(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(n,t)}else{if(_n(n,s))return;rv.set(s),r.uniformMatrix2fv(this.addr,!1,rv),vn(n,s)}}function V1(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(n,t)}else{if(_n(n,s))return;sv.set(s),r.uniformMatrix3fv(this.addr,!1,sv),vn(n,s)}}function k1(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(n,t)}else{if(_n(n,s))return;av.set(s),r.uniformMatrix4fv(this.addr,!1,av),vn(n,s)}}function X1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function W1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;r.uniform2iv(this.addr,t),vn(n,t)}}function q1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;r.uniform3iv(this.addr,t),vn(n,t)}}function Y1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;r.uniform4iv(this.addr,t),vn(n,t)}}function j1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function Z1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;r.uniform2uiv(this.addr,t),vn(n,t)}}function K1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;r.uniform3uiv(this.addr,t),vn(n,t)}}function Q1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;r.uniform4uiv(this.addr,t),vn(n,t)}}function J1(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ep.compareFunction=n.isReversedDepthBuffer()?hp:fp,c=ep):c=cx,n.setTexture2D(t||c,l)}function $1(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(t||fx,l)}function tA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(t||hx,l)}function eA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(t||ux,l)}function nA(r){switch(r){case 5126:return F1;case 35664:return I1;case 35665:return B1;case 35666:return H1;case 35674:return G1;case 35675:return V1;case 35676:return k1;case 5124:case 35670:return X1;case 35667:case 35671:return W1;case 35668:case 35672:return q1;case 35669:case 35673:return Y1;case 5125:return j1;case 36294:return Z1;case 36295:return K1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return eA}}function iA(r,t){r.uniform1fv(this.addr,t)}function aA(r,t){const n=Qr(t,this.size,2);r.uniform2fv(this.addr,n)}function sA(r,t){const n=Qr(t,this.size,3);r.uniform3fv(this.addr,n)}function rA(r,t){const n=Qr(t,this.size,4);r.uniform4fv(this.addr,n)}function oA(r,t){const n=Qr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function lA(r,t){const n=Qr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function cA(r,t){const n=Qr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function uA(r,t){r.uniform1iv(this.addr,t)}function fA(r,t){r.uniform2iv(this.addr,t)}function hA(r,t){r.uniform3iv(this.addr,t)}function dA(r,t){r.uniform4iv(this.addr,t)}function pA(r,t){r.uniform1uiv(this.addr,t)}function mA(r,t){r.uniform2uiv(this.addr,t)}function gA(r,t){r.uniform3uiv(this.addr,t)}function _A(r,t){r.uniform4uiv(this.addr,t)}function vA(r,t,n){const s=this.cache,l=t.length,c=du(n,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=ep:u=cx;for(let d=0;d!==l;++d)n.setTexture2D(t[d]||u,c[d])}function xA(r,t,n){const s=this.cache,l=t.length,c=du(n,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let u=0;u!==l;++u)n.setTexture3D(t[u]||fx,c[u])}function SA(r,t,n){const s=this.cache,l=t.length,c=du(n,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let u=0;u!==l;++u)n.setTextureCube(t[u]||hx,c[u])}function yA(r,t,n){const s=this.cache,l=t.length,c=du(n,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let u=0;u!==l;++u)n.setTexture2DArray(t[u]||ux,c[u])}function MA(r){switch(r){case 5126:return iA;case 35664:return aA;case 35665:return sA;case 35666:return rA;case 35674:return oA;case 35675:return lA;case 35676:return cA;case 5124:case 35670:return uA;case 35667:case 35671:return fA;case 35668:case 35672:return hA;case 35669:case 35673:return dA;case 5125:return pA;case 36294:return mA;case 36295:return gA;case 36296:return _A;case 35678:case 36198:case 36298:case 36306:case 35682:return vA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return yA}}class EA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=nA(n.type)}}class bA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MA(n.type)}}class TA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const l=this.seq;for(let c=0,u=l.length;c!==u;++c){const d=l[c];d.setValue(t,n[d.id],s)}}}const id=/(\w+)(\])?(\[|\.)?/g;function ov(r,t){r.seq.push(t),r.map[t.id]=t}function AA(r,t,n){const s=r.name,l=s.length;for(id.lastIndex=0;;){const c=id.exec(s),u=id.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===l){ov(n,p===void 0?new EA(d,r,t):new bA(d,r,t));break}else{let _=n.map[d];_===void 0&&(_=new TA(d),ov(n,_)),n=_}}}class iu{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const d=t.getActiveUniform(n,u),m=t.getUniformLocation(n,d.name);AA(d,m,this)}const l=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(u):c.push(u);l.length>0&&(this.seq=l.concat(c))}setValue(t,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(t,s,l)}setOptional(t,n,s){const l=n[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,n,s,l){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,n){const s=[];for(let l=0,c=t.length;l!==c;++l){const u=t[l];u.id in n&&s.push(u)}return s}}function lv(r,t,n){const s=r.createShader(t);return r.shaderSource(s,n),r.compileShader(s),s}const RA=37297;let CA=0;function wA(r,t){const n=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=l;u<c;u++){const d=u+1;s.push(`${d===t?">":" "} ${d}: ${n[u]}`)}return s.join(`
`)}const cv=new xe;function DA(r){Le._getMatrix(cv,Le.workingColorSpace,r);const t=`mat3( ${cv.elements.map(n=>n.toFixed(4))} )`;switch(Le.getTransfer(r)){case au:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function uv(r,t,n){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+wA(r.getShaderSource(t),d)}else return c}function LA(r,t){const n=DA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const UA={[Ev]:"Linear",[bv]:"Reinhard",[Tv]:"Cineon",[Av]:"ACESFilmic",[Cv]:"AgX",[wv]:"Neutral",[Rv]:"Custom"};function NA(r,t){const n=UA[t];return n===void 0?(fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Zc=new q;function OA(){Le.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),t=Zc.y.toFixed(4),n=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function zA(r){const t=[];for(const n in r){const s=r[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function FA(r,t){const n={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:d}}return n}function al(r){return r!==""}function fv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const IA=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(r){return r.replace(IA,HA)}const BA=new Map;function HA(r,t){let n=Se[t];if(n===void 0){const s=BA.get(t);if(s!==void 0)n=Se[s],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return np(n)}const GA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(r){return r.replace(GA,VA)}function VA(r,t,n,s){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function pv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const kA={[Qc]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function XA(r){return kA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WA={[zs]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[cu]:"ENVMAP_TYPE_CUBE_UV"};function qA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":WA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const YA={[Vr]:"ENVMAP_MODE_REFRACTION"};function jA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":YA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ZA={[Mv]:"ENVMAP_BLENDING_MULTIPLY",[eM]:"ENVMAP_BLENDING_MIX",[nM]:"ENVMAP_BLENDING_ADD"};function KA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":ZA[r.combine]||"ENVMAP_BLENDING_NONE"}function QA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function JA(r,t,n,s){const l=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=XA(n),p=qA(n),g=jA(n),_=KA(n),v=QA(n),y=PA(n),b=zA(c),A=l.createProgram();let M,S,z=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(al).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(al).join(`
`),S.length>0&&(S+=`
`)):(M=[pv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),S=[pv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xi?"#define TONE_MAPPING":"",n.toneMapping!==Xi?Se.tonemapping_pars_fragment:"",n.toneMapping!==Xi?NA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,LA("linearToOutputTexel",n.outputColorSpace),OA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(al).join(`
`)),u=np(u),u=fv(u,n),u=hv(u,n),d=np(d),d=fv(d,n),d=hv(d,n),u=dv(u),d=dv(d),n.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",n.glslVersion===g_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===g_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=z+M+u,L=z+S+d,I=lv(l,l.VERTEX_SHADER,D),H=lv(l,l.FRAGMENT_SHADER,L);l.attachShader(A,I),l.attachShader(A,H),n.index0AttributeName!==void 0?l.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function F(G){if(r.debug.checkShaderErrors){const it=l.getProgramInfoLog(A)||"",Q=l.getShaderInfoLog(I)||"",ut=l.getShaderInfoLog(H)||"",rt=it.trim(),O=Q.trim(),B=ut.trim();let J=!0,Mt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,I,H);else{const vt=uv(l,I,"vertex"),N=uv(l,H,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+rt+`
`+vt+`
`+N)}else rt!==""?fe("WebGLProgram: Program Info Log:",rt):(O===""||B==="")&&(Mt=!1);Mt&&(G.diagnostics={runnable:J,programLog:rt,vertexShader:{log:O,prefix:M},fragmentShader:{log:B,prefix:S}})}l.deleteShader(I),l.deleteShader(H),Y=new iu(l,A),T=FA(l,A)}let Y;this.getUniforms=function(){return Y===void 0&&F(this),Y};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,RA)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=H,this}let $A=0;class tR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(t);return u.has(l)===!1&&(u.add(l),l.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new eR(t),n.set(t,s)),s}}class eR{constructor(t){this.id=$A++,this.code=t,this.usedTimes=0}}function nR(r,t,n,s,l,c,u){const d=new Gv,m=new tR,p=new Set,g=[],_=new Map,v=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function M(T,w,G,it,Q){const ut=it.fog,rt=Q.geometry,O=T.isMeshStandardMaterial?it.environment:null,B=(T.isMeshStandardMaterial?n:t).get(T.envMap||O),J=B&&B.mapping===cu?B.image.height:null,Mt=b[T.type];T.precision!==null&&(y=l.getMaxPrecision(T.precision),y!==T.precision&&fe("WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const vt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,N=vt!==void 0?vt.length:0;let et=0;rt.morphAttributes.position!==void 0&&(et=1),rt.morphAttributes.normal!==void 0&&(et=2),rt.morphAttributes.color!==void 0&&(et=3);let pt,Rt,Xt,nt;if(Mt){const we=Hi[Mt];pt=we.vertexShader,Rt=we.fragmentShader}else pt=T.vertexShader,Rt=T.fragmentShader,m.update(T),Xt=m.getVertexShaderID(T),nt=m.getFragmentShaderID(T);const ht=r.getRenderTarget(),Nt=r.state.buffers.depth.getReversed(),Vt=Q.isInstancedMesh===!0,Ht=Q.isBatchedMesh===!0,me=!!T.map,Me=!!T.matcap,ue=!!B,_t=!!T.aoMap,At=!!T.lightMap,Et=!!T.bumpMap,Ft=!!T.normalMap,P=!!T.displacementMap,ne=!!T.emissiveMap,It=!!T.metalnessMap,ie=!!T.roughnessMap,Dt=T.anisotropy>0,U=T.clearcoat>0,E=T.dispersion>0,k=T.iridescence>0,ct=T.sheen>0,St=T.transmission>0,ft=Dt&&!!T.anisotropyMap,jt=U&&!!T.clearcoatMap,Lt=U&&!!T.clearcoatNormalMap,Jt=U&&!!T.clearcoatRoughnessMap,oe=k&&!!T.iridescenceMap,bt=k&&!!T.iridescenceThicknessMap,Ct=ct&&!!T.sheenColorMap,Yt=ct&&!!T.sheenRoughnessMap,Wt=!!T.specularMap,Pt=!!T.specularColorMap,_e=!!T.specularIntensityMap,W=St&&!!T.transmissionMap,Bt=St&&!!T.thicknessMap,wt=!!T.gradientMap,qt=!!T.alphaMap,Tt=T.alphaTest>0,yt=!!T.alphaHash,Ut=!!T.extensions;let he=Xi;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(he=r.toneMapping);const Ie={shaderID:Mt,shaderType:T.type,shaderName:T.name,vertexShader:pt,fragmentShader:Rt,defines:T.defines,customVertexShaderID:Xt,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:Ht,batchingColor:Ht&&Q._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&Q.instanceColor!==null,instancingMorph:Vt&&Q.morphTexture!==null,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Xr,alphaToCoverage:!!T.alphaToCoverage,map:me,matcap:Me,envMap:ue,envMapMode:ue&&B.mapping,envMapCubeUVHeight:J,aoMap:_t,lightMap:At,bumpMap:Et,normalMap:Ft,displacementMap:P,emissiveMap:ne,normalMapObjectSpace:Ft&&T.normalMapType===sM,normalMapTangentSpace:Ft&&T.normalMapType===Iv,metalnessMap:It,roughnessMap:ie,anisotropy:Dt,anisotropyMap:ft,clearcoat:U,clearcoatMap:jt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Jt,dispersion:E,iridescence:k,iridescenceMap:oe,iridescenceThicknessMap:bt,sheen:ct,sheenColorMap:Ct,sheenRoughnessMap:Yt,specularMap:Wt,specularColorMap:Pt,specularIntensityMap:_e,transmission:St,transmissionMap:W,thicknessMap:Bt,gradientMap:wt,opaque:T.transparent===!1&&T.blending===Br&&T.alphaToCoverage===!1,alphaMap:qt,alphaTest:Tt,alphaHash:yt,combine:T.combine,mapUv:me&&A(T.map.channel),aoMapUv:_t&&A(T.aoMap.channel),lightMapUv:At&&A(T.lightMap.channel),bumpMapUv:Et&&A(T.bumpMap.channel),normalMapUv:Ft&&A(T.normalMap.channel),displacementMapUv:P&&A(T.displacementMap.channel),emissiveMapUv:ne&&A(T.emissiveMap.channel),metalnessMapUv:It&&A(T.metalnessMap.channel),roughnessMapUv:ie&&A(T.roughnessMap.channel),anisotropyMapUv:ft&&A(T.anisotropyMap.channel),clearcoatMapUv:jt&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&A(T.sheenRoughnessMap.channel),specularMapUv:Wt&&A(T.specularMap.channel),specularColorMapUv:Pt&&A(T.specularColorMap.channel),specularIntensityMapUv:_e&&A(T.specularIntensityMap.channel),transmissionMapUv:W&&A(T.transmissionMap.channel),thicknessMapUv:Bt&&A(T.thicknessMap.channel),alphaMapUv:qt&&A(T.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Ft||Dt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!rt.attributes.uv&&(me||qt),fog:!!ut,useFog:T.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Nt,skinning:Q.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:he,decodeVideoTexture:me&&T.map.isVideoTexture===!0&&Le.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:ne&&T.emissiveMap.isVideoTexture===!0&&Le.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Gi,flipSided:T.side===Kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ut&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&T.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function S(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)w.push(G),w.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(z(w,T),D(w,T),w.push(r.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function z(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function D(T,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),T.push(d.mask)}function L(T){const w=b[T.type];let G;if(w){const it=Hi[w];G=OM.clone(it.uniforms)}else G=T.uniforms;return G}function I(T,w){let G=_.get(w);return G!==void 0?++G.usedTimes:(G=new JA(r,w,T,c),g.push(G),_.set(w,G)),G}function H(T){if(--T.usedTimes===0){const w=g.indexOf(T);g[w]=g[g.length-1],g.pop(),_.delete(T.cacheKey),T.destroy()}}function F(T){m.remove(T)}function Y(){m.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:L,acquireProgram:I,releaseProgram:H,releaseShaderCache:F,programs:g,dispose:Y}}function iR(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function s(u){r.delete(u)}function l(u,d,m){r.get(u)[d]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:s,update:l,dispose:c}}function aR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function mv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function gv(){const r=[];let t=0;const n=[],s=[],l=[];function c(){t=0,n.length=0,s.length=0,l.length=0}function u(_,v,y,b,A,M){let S=r[t];return S===void 0?(S={id:_.id,object:_,geometry:v,material:y,groupOrder:b,renderOrder:_.renderOrder,z:A,group:M},r[t]=S):(S.id=_.id,S.object=_,S.geometry=v,S.material=y,S.groupOrder=b,S.renderOrder=_.renderOrder,S.z=A,S.group=M),t++,S}function d(_,v,y,b,A,M){const S=u(_,v,y,b,A,M);y.transmission>0?s.push(S):y.transparent===!0?l.push(S):n.push(S)}function m(_,v,y,b,A,M){const S=u(_,v,y,b,A,M);y.transmission>0?s.unshift(S):y.transparent===!0?l.unshift(S):n.unshift(S)}function p(_,v){n.length>1&&n.sort(_||aR),s.length>1&&s.sort(v||mv),l.length>1&&l.sort(v||mv)}function g(){for(let _=t,v=r.length;_<v;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function sR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let u;return c===void 0?(u=new gv,r.set(s,[u])):l>=c.length?(u=new gv,c.push(u)):u=c[l],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function rR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new q,color:new Re};break;case"SpotLight":n={position:new q,direction:new q,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=n,n}}}function oR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let lR=0;function cR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function uR(r){const t=new rR,n=oR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new q);const l=new q,c=new $e,u=new $e;function d(p){let g=0,_=0,v=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let y=0,b=0,A=0,M=0,S=0,z=0,D=0,L=0,I=0,H=0,F=0;p.sort(cR);for(let T=0,w=p.length;T<w;T++){const G=p[T],it=G.color,Q=G.intensity,ut=G.distance;let rt=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===kr?rt=G.shadow.map.texture:rt=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=it.r*Q,_+=it.g*Q,v+=it.b*Q;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],Q);F++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,J=n.get(G);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,s.directionalShadow[y]=J,s.directionalShadowMap[y]=rt,s.directionalShadowMatrix[y]=G.shadow.matrix,z++}s.directional[y]=O,y++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(it).multiplyScalar(Q),O.distance=ut,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[A]=O;const B=G.shadow;if(G.map&&(s.spotLightMap[I]=G.map,I++,B.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[A]=B.matrix,G.castShadow){const J=n.get(G);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,s.spotShadow[A]=J,s.spotShadowMap[A]=rt,L++}A++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(it).multiplyScalar(Q),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=O,M++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const B=G.shadow,J=n.get(G);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,J.shadowCameraNear=B.camera.near,J.shadowCameraFar=B.camera.far,s.pointShadow[b]=J,s.pointShadowMap[b]=rt,s.pointShadowMatrix[b]=G.shadow.matrix,D++}s.point[b]=O,b++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(Q),O.groundColor.copy(G.groundColor).multiplyScalar(Q),s.hemi[S]=O,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=kt.LTC_FLOAT_1,s.rectAreaLTC2=kt.LTC_FLOAT_2):(s.rectAreaLTC1=kt.LTC_HALF_1,s.rectAreaLTC2=kt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const Y=s.hash;(Y.directionalLength!==y||Y.pointLength!==b||Y.spotLength!==A||Y.rectAreaLength!==M||Y.hemiLength!==S||Y.numDirectionalShadows!==z||Y.numPointShadows!==D||Y.numSpotShadows!==L||Y.numSpotMaps!==I||Y.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=M,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=L+I-H,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=F,Y.directionalLength=y,Y.pointLength=b,Y.spotLength=A,Y.rectAreaLength=M,Y.hemiLength=S,Y.numDirectionalShadows=z,Y.numPointShadows=D,Y.numSpotShadows=L,Y.numSpotMaps=I,Y.numLightProbes=F,s.version=lR++)}function m(p,g){let _=0,v=0,y=0,b=0,A=0;const M=g.matrixWorldInverse;for(let S=0,z=p.length;S<z;S++){const D=p[S];if(D.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),_++}else if(D.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const L=s.rectArea[b];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),u.identity(),c.copy(D.matrixWorld),c.premultiply(M),u.extractRotation(c),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),b++}else if(D.isPointLight){const L=s.point[v];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),v++}else if(D.isHemisphereLight){const L=s.hemi[A];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(M),A++}}}return{setup:d,setupView:m,state:s}}function _v(r){const t=new uR(r),n=[],s=[];function l(g){p.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function u(g){s.push(g)}function d(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:u}}function fR(r){let t=new WeakMap;function n(l,c=0){const u=t.get(l);let d;return u===void 0?(d=new _v(r),t.set(l,[d])):c>=u.length?(d=new _v(r),u.push(d)):d=u[c],d}function s(){t=new WeakMap}return{get:n,dispose:s}}const hR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pR=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],mR=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],vv=new $e,tl=new q,ad=new q;function gR(r,t,n){let s=new gp;const l=new Ot,c=new Ot,u=new an,d=new RE,m=new CE,p={},g=n.maxTextureSize,_={[os]:Kn,[Kn]:os,[Gi]:Gi},v=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:hR,fragmentShader:dR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new yi;b.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ni(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let S=this.type;this.render=function(H,F,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;H.type===yv&&(fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Qc);const T=r.getRenderTarget(),w=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),it=r.state;it.setBlending(ya),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const Q=S!==this.type;Q&&F.traverse(function(ut){ut.material&&(Array.isArray(ut.material)?ut.material.forEach(rt=>rt.needsUpdate=!0):ut.material.needsUpdate=!0)});for(let ut=0,rt=H.length;ut<rt;ut++){const O=H[ut],B=O.shadow;if(B===void 0){fe("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const J=B.getFrameExtents();if(l.multiply(J),c.copy(B.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/J.x),l.x=c.x*J.x,B.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/J.y),l.y=c.y*J.y,B.mapSize.y=c.y)),B.map===null||Q===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===el){if(O.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Wi(l.x,l.y,{format:kr,type:Ea,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new ul(l.x,l.y,Vi),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=ba,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln}else{O.isPointLight?(B.map=new Zv(l.x),B.map.depthTexture=new qM(l.x,Yi)):(B.map=new Wi(l.x,l.y),B.map.depthTexture=new ul(l.x,l.y,Yi)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=ba;const vt=r.state.buffers.depth.getReversed();this.type===Qc?(B.map.depthTexture.compareFunction=vt?hp:fp,B.map.depthTexture.minFilter=Fn,B.map.depthTexture.magFilter=Fn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln)}B.camera.updateProjectionMatrix()}const Mt=B.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<Mt;vt++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,vt),r.clear();else{vt===0&&(r.setRenderTarget(B.map),r.clear());const N=B.getViewport(vt);u.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),it.viewport(u)}if(O.isPointLight){const N=B.camera,et=B.matrix,pt=O.distance||N.far;pt!==N.far&&(N.far=pt,N.updateProjectionMatrix()),tl.setFromMatrixPosition(O.matrixWorld),N.position.copy(tl),ad.copy(N.position),ad.add(pR[vt]),N.up.copy(mR[vt]),N.lookAt(ad),N.updateMatrixWorld(),et.makeTranslation(-tl.x,-tl.y,-tl.z),vv.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),B._frustum.setFromProjectionMatrix(vv,N.coordinateSystem,N.reversedDepth)}else B.updateMatrices(O);s=B.getFrustum(),L(F,Y,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===el&&z(B,Y),B.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(T,w,G)};function z(H,F){const Y=t.update(A);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Wi(l.x,l.y,{format:kr,type:Ea})),v.uniforms.shadow_pass.value=H.map.depthTexture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(F,null,Y,v,A,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(F,null,Y,y,A,null)}function D(H,F,Y,T){let w=null;const G=Y.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)w=G;else if(w=Y.isPointLight===!0?m:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const it=w.uuid,Q=F.uuid;let ut=p[it];ut===void 0&&(ut={},p[it]=ut);let rt=ut[Q];rt===void 0&&(rt=w.clone(),ut[Q]=rt,F.addEventListener("dispose",I)),w=rt}if(w.visible=F.visible,w.wireframe=F.wireframe,T===el?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:_[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const it=r.properties.get(w);it.light=Y}return w}function L(H,F,Y,T,w){if(H.visible===!1)return;if(H.layers.test(F.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===el)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,H.matrixWorld);const Q=t.update(H),ut=H.material;if(Array.isArray(ut)){const rt=Q.groups;for(let O=0,B=rt.length;O<B;O++){const J=rt[O],Mt=ut[J.materialIndex];if(Mt&&Mt.visible){const vt=D(H,Mt,T,w);H.onBeforeShadow(r,H,F,Y,Q,vt,J),r.renderBufferDirect(Y,null,Q,vt,H,J),H.onAfterShadow(r,H,F,Y,Q,vt,J)}}}else if(ut.visible){const rt=D(H,ut,T,w);H.onBeforeShadow(r,H,F,Y,Q,rt,null),r.renderBufferDirect(Y,null,Q,rt,H,null),H.onAfterShadow(r,H,F,Y,Q,rt,null)}}const it=H.children;for(let Q=0,ut=it.length;Q<ut;Q++)L(it[Q],F,Y,T,w)}function I(H){H.target.removeEventListener("dispose",I);for(const Y in p){const T=p[Y],w=H.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const _R={[ld]:cd,[ud]:dd,[fd]:pd,[Gr]:hd,[cd]:ld,[dd]:ud,[pd]:fd,[hd]:Gr};function vR(r,t){function n(){let W=!1;const Bt=new an;let wt=null;const qt=new an(0,0,0,0);return{setMask:function(Tt){wt!==Tt&&!W&&(r.colorMask(Tt,Tt,Tt,Tt),wt=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,yt,Ut,he,Ie){Ie===!0&&(Tt*=he,yt*=he,Ut*=he),Bt.set(Tt,yt,Ut,he),qt.equals(Bt)===!1&&(r.clearColor(Tt,yt,Ut,he),qt.copy(Bt))},reset:function(){W=!1,wt=null,qt.set(-1,0,0,0)}}}function s(){let W=!1,Bt=!1,wt=null,qt=null,Tt=null;return{setReversed:function(yt){if(Bt!==yt){const Ut=t.get("EXT_clip_control");yt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),Bt=yt;const he=Tt;Tt=null,this.setClear(he)}},getReversed:function(){return Bt},setTest:function(yt){yt?ht(r.DEPTH_TEST):Nt(r.DEPTH_TEST)},setMask:function(yt){wt!==yt&&!W&&(r.depthMask(yt),wt=yt)},setFunc:function(yt){if(Bt&&(yt=_R[yt]),qt!==yt){switch(yt){case ld:r.depthFunc(r.NEVER);break;case cd:r.depthFunc(r.ALWAYS);break;case ud:r.depthFunc(r.LESS);break;case Gr:r.depthFunc(r.LEQUAL);break;case fd:r.depthFunc(r.EQUAL);break;case hd:r.depthFunc(r.GEQUAL);break;case dd:r.depthFunc(r.GREATER);break;case pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}qt=yt}},setLocked:function(yt){W=yt},setClear:function(yt){Tt!==yt&&(Bt&&(yt=1-yt),r.clearDepth(yt),Tt=yt)},reset:function(){W=!1,wt=null,qt=null,Tt=null,Bt=!1}}}function l(){let W=!1,Bt=null,wt=null,qt=null,Tt=null,yt=null,Ut=null,he=null,Ie=null;return{setTest:function(we){W||(we?ht(r.STENCIL_TEST):Nt(r.STENCIL_TEST))},setMask:function(we){Bt!==we&&!W&&(r.stencilMask(we),Bt=we)},setFunc:function(we,Nn,Mi){(wt!==we||qt!==Nn||Tt!==Mi)&&(r.stencilFunc(we,Nn,Mi),wt=we,qt=Nn,Tt=Mi)},setOp:function(we,Nn,Mi){(yt!==we||Ut!==Nn||he!==Mi)&&(r.stencilOp(we,Nn,Mi),yt=we,Ut=Nn,he=Mi)},setLocked:function(we){W=we},setClear:function(we){Ie!==we&&(r.clearStencil(we),Ie=we)},reset:function(){W=!1,Bt=null,wt=null,qt=null,Tt=null,yt=null,Ut=null,he=null,Ie=null}}}const c=new n,u=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,y=[],b=null,A=!1,M=null,S=null,z=null,D=null,L=null,I=null,H=null,F=new Re(0,0,0),Y=0,T=!1,w=null,G=null,it=null,Q=null,ut=null;const rt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(J)[1]),O=B>=1):J.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),O=B>=2);let Mt=null,vt={};const N=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),pt=new an().fromArray(N),Rt=new an().fromArray(et);function Xt(W,Bt,wt,qt){const Tt=new Uint8Array(4),yt=r.createTexture();r.bindTexture(W,yt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ut=0;Ut<wt;Ut++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Bt,0,r.RGBA,1,1,qt,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(Bt+Ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return yt}const nt={};nt[r.TEXTURE_2D]=Xt(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=Xt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=Xt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=Xt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ht(r.DEPTH_TEST),u.setFunc(Gr),Et(!1),Ft(u_),ht(r.CULL_FACE),_t(ya);function ht(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Nt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Vt(W,Bt){return _[W]!==Bt?(r.bindFramebuffer(W,Bt),_[W]=Bt,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Bt),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Bt),!0):!1}function Ht(W,Bt){let wt=y,qt=!1;if(W){wt=v.get(Bt),wt===void 0&&(wt=[],v.set(Bt,wt));const Tt=W.textures;if(wt.length!==Tt.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,Ut=Tt.length;yt<Ut;yt++)wt[yt]=r.COLOR_ATTACHMENT0+yt;wt.length=Tt.length,qt=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,qt=!0);qt&&r.drawBuffers(wt)}function me(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const Me={[Us]:r.FUNC_ADD,[Iy]:r.FUNC_SUBTRACT,[By]:r.FUNC_REVERSE_SUBTRACT};Me[Hy]=r.MIN,Me[Gy]=r.MAX;const ue={[Vy]:r.ZERO,[ky]:r.ONE,[Xy]:r.SRC_COLOR,[rd]:r.SRC_ALPHA,[Ky]:r.SRC_ALPHA_SATURATE,[jy]:r.DST_COLOR,[qy]:r.DST_ALPHA,[Wy]:r.ONE_MINUS_SRC_COLOR,[od]:r.ONE_MINUS_SRC_ALPHA,[Zy]:r.ONE_MINUS_DST_COLOR,[Yy]:r.ONE_MINUS_DST_ALPHA,[Qy]:r.CONSTANT_COLOR,[Jy]:r.ONE_MINUS_CONSTANT_COLOR,[$y]:r.CONSTANT_ALPHA,[tM]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(W,Bt,wt,qt,Tt,yt,Ut,he,Ie,we){if(W===ya){A===!0&&(Nt(r.BLEND),A=!1);return}if(A===!1&&(ht(r.BLEND),A=!0),W!==Fy){if(W!==M||we!==T){if((S!==Us||L!==Us)&&(r.blendEquation(r.FUNC_ADD),S=Us,L=Us),we)switch(W){case Br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case f_:r.blendFunc(r.ONE,r.ONE);break;case h_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case d_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:De("WebGLState: Invalid blending: ",W);break}else switch(W){case Br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case f_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case h_:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case d_:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",W);break}z=null,D=null,I=null,H=null,F.set(0,0,0),Y=0,M=W,T=we}return}Tt=Tt||Bt,yt=yt||wt,Ut=Ut||qt,(Bt!==S||Tt!==L)&&(r.blendEquationSeparate(Me[Bt],Me[Tt]),S=Bt,L=Tt),(wt!==z||qt!==D||yt!==I||Ut!==H)&&(r.blendFuncSeparate(ue[wt],ue[qt],ue[yt],ue[Ut]),z=wt,D=qt,I=yt,H=Ut),(he.equals(F)===!1||Ie!==Y)&&(r.blendColor(he.r,he.g,he.b,Ie),F.copy(he),Y=Ie),M=W,T=!1}function At(W,Bt){W.side===Gi?Nt(r.CULL_FACE):ht(r.CULL_FACE);let wt=W.side===Kn;Bt&&(wt=!wt),Et(wt),W.blending===Br&&W.transparent===!1?_t(ya):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const qt=W.stencilWrite;d.setTest(qt),qt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ne(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Et(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function Ft(W){W!==Py?(ht(r.CULL_FACE),W!==G&&(W===u_?r.cullFace(r.BACK):W===zy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Nt(r.CULL_FACE),G=W}function P(W){W!==it&&(O&&r.lineWidth(W),it=W)}function ne(W,Bt,wt){W?(ht(r.POLYGON_OFFSET_FILL),(Q!==Bt||ut!==wt)&&(r.polygonOffset(Bt,wt),Q=Bt,ut=wt)):Nt(r.POLYGON_OFFSET_FILL)}function It(W){W?ht(r.SCISSOR_TEST):Nt(r.SCISSOR_TEST)}function ie(W){W===void 0&&(W=r.TEXTURE0+rt-1),Mt!==W&&(r.activeTexture(W),Mt=W)}function Dt(W,Bt,wt){wt===void 0&&(Mt===null?wt=r.TEXTURE0+rt-1:wt=Mt);let qt=vt[wt];qt===void 0&&(qt={type:void 0,texture:void 0},vt[wt]=qt),(qt.type!==W||qt.texture!==Bt)&&(Mt!==wt&&(r.activeTexture(wt),Mt=wt),r.bindTexture(W,Bt||nt[W]),qt.type=W,qt.texture=Bt)}function U(){const W=vt[Mt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function ct(){try{r.texSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function St(){try{r.texSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function jt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function Lt(){try{r.texStorage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Jt(){try{r.texStorage3D(...arguments)}catch(W){De("WebGLState:",W)}}function oe(){try{r.texImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function bt(){try{r.texImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function Ct(W){pt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),pt.copy(W))}function Yt(W){Rt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function Wt(W,Bt){let wt=p.get(Bt);wt===void 0&&(wt=new WeakMap,p.set(Bt,wt));let qt=wt.get(W);qt===void 0&&(qt=r.getUniformBlockIndex(Bt,W.name),wt.set(W,qt))}function Pt(W,Bt){const qt=p.get(Bt).get(W);m.get(Bt)!==qt&&(r.uniformBlockBinding(Bt,qt,W.__bindingPointIndex),m.set(Bt,qt))}function _e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Mt=null,vt={},_={},v=new WeakMap,y=[],b=null,A=!1,M=null,S=null,z=null,D=null,L=null,I=null,H=null,F=new Re(0,0,0),Y=0,T=!1,w=null,G=null,it=null,Q=null,ut=null,pt.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ht,disable:Nt,bindFramebuffer:Vt,drawBuffers:Ht,useProgram:me,setBlending:_t,setMaterial:At,setFlipSided:Et,setCullFace:Ft,setLineWidth:P,setPolygonOffset:ne,setScissorTest:It,activeTexture:ie,bindTexture:Dt,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:oe,texImage3D:bt,updateUBOMapping:Wt,uniformBlockBinding:Pt,texStorage2D:Lt,texStorage3D:Jt,texSubImage2D:ct,texSubImage3D:St,compressedTexSubImage2D:ft,compressedTexSubImage3D:jt,scissor:Ct,viewport:Yt,reset:_e}}function xR(r,t,n,s,l,c,u){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ot,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return y?new OffscreenCanvas(U,E):ru("canvas")}function A(U,E,k){let ct=1;const St=Dt(U);if((St.width>k||St.height>k)&&(ct=k/Math.max(St.width,St.height)),ct<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ft=Math.floor(ct*St.width),jt=Math.floor(ct*St.height);_===void 0&&(_=b(ft,jt));const Lt=E?b(ft,jt):_;return Lt.width=ft,Lt.height=jt,Lt.getContext("2d").drawImage(U,0,0,ft,jt),fe("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ft+"x"+jt+")."),Lt}else return"data"in U&&fe("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),U;return U}function M(U){return U.generateMipmaps}function S(U){r.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(U,E,k,ct,St=!1){if(U!==null){if(r[U]!==void 0)return r[U];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ft=E;if(E===r.RED&&(k===r.FLOAT&&(ft=r.R32F),k===r.HALF_FLOAT&&(ft=r.R16F),k===r.UNSIGNED_BYTE&&(ft=r.R8)),E===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(ft=r.R8UI),k===r.UNSIGNED_SHORT&&(ft=r.R16UI),k===r.UNSIGNED_INT&&(ft=r.R32UI),k===r.BYTE&&(ft=r.R8I),k===r.SHORT&&(ft=r.R16I),k===r.INT&&(ft=r.R32I)),E===r.RG&&(k===r.FLOAT&&(ft=r.RG32F),k===r.HALF_FLOAT&&(ft=r.RG16F),k===r.UNSIGNED_BYTE&&(ft=r.RG8)),E===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(ft=r.RG8UI),k===r.UNSIGNED_SHORT&&(ft=r.RG16UI),k===r.UNSIGNED_INT&&(ft=r.RG32UI),k===r.BYTE&&(ft=r.RG8I),k===r.SHORT&&(ft=r.RG16I),k===r.INT&&(ft=r.RG32I)),E===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),k===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),k===r.UNSIGNED_INT&&(ft=r.RGB32UI),k===r.BYTE&&(ft=r.RGB8I),k===r.SHORT&&(ft=r.RGB16I),k===r.INT&&(ft=r.RGB32I)),E===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),k===r.UNSIGNED_INT&&(ft=r.RGBA32UI),k===r.BYTE&&(ft=r.RGBA8I),k===r.SHORT&&(ft=r.RGBA16I),k===r.INT&&(ft=r.RGBA32I)),E===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),E===r.RGBA){const jt=St?au:Le.getTransfer(ct);k===r.FLOAT&&(ft=r.RGBA32F),k===r.HALF_FLOAT&&(ft=r.RGBA16F),k===r.UNSIGNED_BYTE&&(ft=jt===Ve?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function L(U,E){let k;return U?E===null||E===Yi||E===ll?k=r.DEPTH24_STENCIL8:E===Vi?k=r.DEPTH32F_STENCIL8:E===ol&&(k=r.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===ll?k=r.DEPTH_COMPONENT24:E===Vi?k=r.DEPTH_COMPONENT32F:E===ol&&(k=r.DEPTH_COMPONENT16),k}function I(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ln&&U.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function H(U){const E=U.target;E.removeEventListener("dispose",H),Y(E),E.isVideoTexture&&g.delete(E)}function F(U){const E=U.target;E.removeEventListener("dispose",F),w(E)}function Y(U){const E=s.get(U);if(E.__webglInit===void 0)return;const k=U.source,ct=v.get(k);if(ct){const St=ct[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&T(U),Object.keys(ct).length===0&&v.delete(k)}s.remove(U)}function T(U){const E=s.get(U);r.deleteTexture(E.__webglTexture);const k=U.source,ct=v.get(k);delete ct[E.__cacheKey],u.memory.textures--}function w(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let St=0;St<E.__webglFramebuffer[ct].length;St++)r.deleteFramebuffer(E.__webglFramebuffer[ct][St]);else r.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)r.deleteFramebuffer(E.__webglFramebuffer[ct]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=U.textures;for(let ct=0,St=k.length;ct<St;ct++){const ft=s.get(k[ct]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),u.memory.textures--),s.remove(k[ct])}s.remove(U)}let G=0;function it(){G=0}function Q(){const U=G;return U>=l.maxTextures&&fe("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function ut(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function rt(U,E){const k=s.get(U);if(U.isVideoTexture&&It(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&k.__version!==U.version){const ct=U.image;if(ct===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(k,U,E);return}}else U.isExternalTexture&&(k.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+E)}function O(U,E){const k=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&k.__version!==U.version){nt(k,U,E);return}else U.isExternalTexture&&(k.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+E)}function B(U,E){const k=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&k.__version!==U.version){nt(k,U,E);return}n.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+E)}function J(U,E){const k=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&k.__version!==U.version){ht(k,U,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+E)}const Mt={[_d]:r.REPEAT,[Sa]:r.CLAMP_TO_EDGE,[vd]:r.MIRRORED_REPEAT},vt={[Ln]:r.NEAREST,[iM]:r.NEAREST_MIPMAP_NEAREST,[Tc]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[bh]:r.LINEAR_MIPMAP_NEAREST,[Os]:r.LINEAR_MIPMAP_LINEAR},N={[rM]:r.NEVER,[fM]:r.ALWAYS,[oM]:r.LESS,[fp]:r.LEQUAL,[lM]:r.EQUAL,[hp]:r.GEQUAL,[cM]:r.GREATER,[uM]:r.NOTEQUAL};function et(U,E){if(E.type===Vi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===bh||E.magFilter===Tc||E.magFilter===Os||E.minFilter===Fn||E.minFilter===bh||E.minFilter===Tc||E.minFilter===Os)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,Mt[E.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,Mt[E.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,Mt[E.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,vt[E.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,vt[E.minFilter]),E.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==Tc&&E.minFilter!==Os||E.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function pt(U,E){let k=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",H));const ct=E.source;let St=v.get(ct);St===void 0&&(St={},v.set(ct,St));const ft=ut(E);if(ft!==U.__cacheKey){St[ft]===void 0&&(St[ft]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,k=!0),St[ft].usedTimes++;const jt=St[U.__cacheKey];jt!==void 0&&(St[U.__cacheKey].usedTimes--,jt.usedTimes===0&&T(E)),U.__cacheKey=ft,U.__webglTexture=St[ft].texture}return k}function Rt(U,E,k){return Math.floor(Math.floor(U/k)/E)}function Xt(U,E,k,ct){const ft=U.updateRanges;if(ft.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,k,ct,E.data);else{ft.sort((bt,Ct)=>bt.start-Ct.start);let jt=0;for(let bt=1;bt<ft.length;bt++){const Ct=ft[jt],Yt=ft[bt],Wt=Ct.start+Ct.count,Pt=Rt(Yt.start,E.width,4),_e=Rt(Ct.start,E.width,4);Yt.start<=Wt+1&&Pt===_e&&Rt(Yt.start+Yt.count-1,E.width,4)===Pt?Ct.count=Math.max(Ct.count,Yt.start+Yt.count-Ct.start):(++jt,ft[jt]=Yt)}ft.length=jt+1;const Lt=r.getParameter(r.UNPACK_ROW_LENGTH),Jt=r.getParameter(r.UNPACK_SKIP_PIXELS),oe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let bt=0,Ct=ft.length;bt<Ct;bt++){const Yt=ft[bt],Wt=Math.floor(Yt.start/4),Pt=Math.ceil(Yt.count/4),_e=Wt%E.width,W=Math.floor(Wt/E.width),Bt=Pt,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),n.texSubImage2D(r.TEXTURE_2D,0,_e,W,Bt,wt,k,ct,E.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,oe)}}function nt(U,E,k){let ct=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=r.TEXTURE_3D);const St=pt(U,E),ft=E.source;n.bindTexture(ct,U.__webglTexture,r.TEXTURE0+k);const jt=s.get(ft);if(ft.version!==jt.__version||St===!0){n.activeTexture(r.TEXTURE0+k);const Lt=Le.getPrimaries(Le.workingColorSpace),Jt=E.colorSpace===as?null:Le.getPrimaries(E.colorSpace),oe=E.colorSpace===as||Lt===Jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let bt=A(E.image,!1,l.maxTextureSize);bt=ie(E,bt);const Ct=c.convert(E.format,E.colorSpace),Yt=c.convert(E.type);let Wt=D(E.internalFormat,Ct,Yt,E.colorSpace,E.isVideoTexture);et(ct,E);let Pt;const _e=E.mipmaps,W=E.isVideoTexture!==!0,Bt=jt.__version===void 0||St===!0,wt=ft.dataReady,qt=I(E,bt);if(E.isDepthTexture)Wt=L(E.format===Ps,E.type),Bt&&(W?n.texStorage2D(r.TEXTURE_2D,1,Wt,bt.width,bt.height):n.texImage2D(r.TEXTURE_2D,0,Wt,bt.width,bt.height,0,Ct,Yt,null));else if(E.isDataTexture)if(_e.length>0){W&&Bt&&n.texStorage2D(r.TEXTURE_2D,qt,Wt,_e[0].width,_e[0].height);for(let Tt=0,yt=_e.length;Tt<yt;Tt++)Pt=_e[Tt],W?wt&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,Ct,Yt,Pt.data):n.texImage2D(r.TEXTURE_2D,Tt,Wt,Pt.width,Pt.height,0,Ct,Yt,Pt.data);E.generateMipmaps=!1}else W?(Bt&&n.texStorage2D(r.TEXTURE_2D,qt,Wt,bt.width,bt.height),wt&&Xt(E,bt,Ct,Yt)):n.texImage2D(r.TEXTURE_2D,0,Wt,bt.width,bt.height,0,Ct,Yt,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Wt,_e[0].width,_e[0].height,bt.depth);for(let Tt=0,yt=_e.length;Tt<yt;Tt++)if(Pt=_e[Tt],E.format!==Ui)if(Ct!==null)if(W){if(wt)if(E.layerUpdates.size>0){const Ut=Z_(Pt.width,Pt.height,E.format,E.type);for(const he of E.layerUpdates){const Ie=Pt.data.subarray(he*Ut/Pt.data.BYTES_PER_ELEMENT,(he+1)*Ut/Pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,he,Pt.width,Pt.height,1,Ct,Ie)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Pt.width,Pt.height,bt.depth,Ct,Pt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Tt,Wt,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?wt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Pt.width,Pt.height,bt.depth,Ct,Yt,Pt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Tt,Wt,Pt.width,Pt.height,bt.depth,0,Ct,Yt,Pt.data)}else{W&&Bt&&n.texStorage2D(r.TEXTURE_2D,qt,Wt,_e[0].width,_e[0].height);for(let Tt=0,yt=_e.length;Tt<yt;Tt++)Pt=_e[Tt],E.format!==Ui?Ct!==null?W?wt&&n.compressedTexSubImage2D(r.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,Ct,Pt.data):n.compressedTexImage2D(r.TEXTURE_2D,Tt,Wt,Pt.width,Pt.height,0,Pt.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?wt&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,Ct,Yt,Pt.data):n.texImage2D(r.TEXTURE_2D,Tt,Wt,Pt.width,Pt.height,0,Ct,Yt,Pt.data)}else if(E.isDataArrayTexture)if(W){if(Bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Wt,bt.width,bt.height,bt.depth),wt)if(E.layerUpdates.size>0){const Tt=Z_(bt.width,bt.height,E.format,E.type);for(const yt of E.layerUpdates){const Ut=bt.data.subarray(yt*Tt/bt.data.BYTES_PER_ELEMENT,(yt+1)*Tt/bt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,bt.width,bt.height,1,Ct,Yt,Ut)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ct,Yt,bt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,bt.width,bt.height,bt.depth,0,Ct,Yt,bt.data);else if(E.isData3DTexture)W?(Bt&&n.texStorage3D(r.TEXTURE_3D,qt,Wt,bt.width,bt.height,bt.depth),wt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ct,Yt,bt.data)):n.texImage3D(r.TEXTURE_3D,0,Wt,bt.width,bt.height,bt.depth,0,Ct,Yt,bt.data);else if(E.isFramebufferTexture){if(Bt)if(W)n.texStorage2D(r.TEXTURE_2D,qt,Wt,bt.width,bt.height);else{let Tt=bt.width,yt=bt.height;for(let Ut=0;Ut<qt;Ut++)n.texImage2D(r.TEXTURE_2D,Ut,Wt,Tt,yt,0,Ct,Yt,null),Tt>>=1,yt>>=1}}else if(_e.length>0){if(W&&Bt){const Tt=Dt(_e[0]);n.texStorage2D(r.TEXTURE_2D,qt,Wt,Tt.width,Tt.height)}for(let Tt=0,yt=_e.length;Tt<yt;Tt++)Pt=_e[Tt],W?wt&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Ct,Yt,Pt):n.texImage2D(r.TEXTURE_2D,Tt,Wt,Ct,Yt,Pt);E.generateMipmaps=!1}else if(W){if(Bt){const Tt=Dt(bt);n.texStorage2D(r.TEXTURE_2D,qt,Wt,Tt.width,Tt.height)}wt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,Yt,bt)}else n.texImage2D(r.TEXTURE_2D,0,Wt,Ct,Yt,bt);M(E)&&S(ct),jt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ht(U,E,k){if(E.image.length!==6)return;const ct=pt(U,E),St=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+k);const ft=s.get(St);if(St.version!==ft.__version||ct===!0){n.activeTexture(r.TEXTURE0+k);const jt=Le.getPrimaries(Le.workingColorSpace),Lt=E.colorSpace===as?null:Le.getPrimaries(E.colorSpace),Jt=E.colorSpace===as||jt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const oe=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let yt=0;yt<6;yt++)!oe&&!bt?Ct[yt]=A(E.image[yt],!0,l.maxCubemapSize):Ct[yt]=bt?E.image[yt].image:E.image[yt],Ct[yt]=ie(E,Ct[yt]);const Yt=Ct[0],Wt=c.convert(E.format,E.colorSpace),Pt=c.convert(E.type),_e=D(E.internalFormat,Wt,Pt,E.colorSpace),W=E.isVideoTexture!==!0,Bt=ft.__version===void 0||ct===!0,wt=St.dataReady;let qt=I(E,Yt);et(r.TEXTURE_CUBE_MAP,E);let Tt;if(oe){W&&Bt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,qt,_e,Yt.width,Yt.height);for(let yt=0;yt<6;yt++){Tt=Ct[yt].mipmaps;for(let Ut=0;Ut<Tt.length;Ut++){const he=Tt[Ut];E.format!==Ui?Wt!==null?W?wt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut,0,0,he.width,he.height,Wt,he.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut,_e,he.width,he.height,0,he.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut,0,0,he.width,he.height,Wt,Pt,he.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut,_e,he.width,he.height,0,Wt,Pt,he.data)}}}else{if(Tt=E.mipmaps,W&&Bt){Tt.length>0&&qt++;const yt=Dt(Ct[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,qt,_e,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(bt){W?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ct[yt].width,Ct[yt].height,Wt,Pt,Ct[yt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,_e,Ct[yt].width,Ct[yt].height,0,Wt,Pt,Ct[yt].data);for(let Ut=0;Ut<Tt.length;Ut++){const Ie=Tt[Ut].image[yt].image;W?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut+1,0,0,Ie.width,Ie.height,Wt,Pt,Ie.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut+1,_e,Ie.width,Ie.height,0,Wt,Pt,Ie.data)}}else{W?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Wt,Pt,Ct[yt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,_e,Wt,Pt,Ct[yt]);for(let Ut=0;Ut<Tt.length;Ut++){const he=Tt[Ut];W?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut+1,0,0,Wt,Pt,he.image[yt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut+1,_e,Wt,Pt,he.image[yt])}}}M(E)&&S(r.TEXTURE_CUBE_MAP),ft.__version=St.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Nt(U,E,k,ct,St,ft){const jt=c.convert(k.format,k.colorSpace),Lt=c.convert(k.type),Jt=D(k.internalFormat,jt,Lt,k.colorSpace),oe=s.get(E),bt=s.get(k);if(bt.__renderTarget=E,!oe.__hasExternalTextures){const Ct=Math.max(1,E.width>>ft),Yt=Math.max(1,E.height>>ft);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?n.texImage3D(St,ft,Jt,Ct,Yt,E.depth,0,jt,Lt,null):n.texImage2D(St,ft,Jt,Ct,Yt,0,jt,Lt,null)}n.bindFramebuffer(r.FRAMEBUFFER,U),ne(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,St,bt.__webglTexture,0,P(E)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ct,St,bt.__webglTexture,ft),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(U,E,k){if(r.bindRenderbuffer(r.RENDERBUFFER,U),E.depthBuffer){const ct=E.depthTexture,St=ct&&ct.isDepthTexture?ct.type:null,ft=L(E.stencilBuffer,St),jt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ne(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(E),ft,E.width,E.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(E),ft,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ft,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,jt,r.RENDERBUFFER,U)}else{const ct=E.textures;for(let St=0;St<ct.length;St++){const ft=ct[St],jt=c.convert(ft.format,ft.colorSpace),Lt=c.convert(ft.type),Jt=D(ft.internalFormat,jt,Lt,ft.colorSpace);ne(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(E),Jt,E.width,E.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(E),Jt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Jt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ht(U,E,k){const ct=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(E.depthTexture);if(St.__renderTarget=E,(!St.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct){if(St.__webglInit===void 0&&(St.__webglInit=!0,E.depthTexture.addEventListener("dispose",H)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),et(r.TEXTURE_CUBE_MAP,E.depthTexture);const oe=c.convert(E.depthTexture.format),bt=c.convert(E.depthTexture.type);let Ct;E.depthTexture.format===ba?Ct=r.DEPTH_COMPONENT24:E.depthTexture.format===Ps&&(Ct=r.DEPTH24_STENCIL8);for(let Yt=0;Yt<6;Yt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,Ct,E.width,E.height,0,oe,bt,null)}}else rt(E.depthTexture,0);const ft=St.__webglTexture,jt=P(E),Lt=ct?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,Jt=E.depthTexture.format===Ps?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ba)ne(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,Lt,ft,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,Lt,ft,0);else if(E.depthTexture.format===Ps)ne(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,Lt,ft,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,Lt,ft,0);else throw new Error("Unknown depthTexture format")}function me(U){const E=s.get(U),k=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ct=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",St)};ct.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=ct}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let ct=0;ct<6;ct++)Ht(E.__webglFramebuffer[ct],U,ct);else{const ct=U.texture.mipmaps;ct&&ct.length>0?Ht(E.__webglFramebuffer[0],U,0):Ht(E.__webglFramebuffer,U,0)}else if(k){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=r.createRenderbuffer(),Vt(E.__webglDepthbuffer[ct],U,!1);else{const St=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[ct];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ft)}}else{const ct=U.texture.mipmaps;if(ct&&ct.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Vt(E.__webglDepthbuffer,U,!1);else{const St=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ft)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(U,E,k){const ct=s.get(U);E!==void 0&&Nt(ct.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&me(U)}function ue(U){const E=U.texture,k=s.get(U),ct=s.get(E);U.addEventListener("dispose",F);const St=U.textures,ft=U.isWebGLCubeRenderTarget===!0,jt=St.length>1;if(jt||(ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture()),ct.__version=E.version,u.memory.textures++),ft){k.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[Lt]=[];for(let Jt=0;Jt<E.mipmaps.length;Jt++)k.__webglFramebuffer[Lt][Jt]=r.createFramebuffer()}else k.__webglFramebuffer[Lt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)k.__webglFramebuffer[Lt]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(jt)for(let Lt=0,Jt=St.length;Lt<Jt;Lt++){const oe=s.get(St[Lt]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),u.memory.textures++)}if(U.samples>0&&ne(U)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Lt=0;Lt<St.length;Lt++){const Jt=St[Lt];k.__webglColorRenderbuffer[Lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[Lt]);const oe=c.convert(Jt.format,Jt.colorSpace),bt=c.convert(Jt.type),Ct=D(Jt.internalFormat,oe,bt,Jt.colorSpace,U.isXRRenderTarget===!0),Yt=P(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,Ct,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,k.__webglColorRenderbuffer[Lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(k.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){n.bindTexture(r.TEXTURE_CUBE_MAP,ct.__webglTexture),et(r.TEXTURE_CUBE_MAP,E);for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Jt=0;Jt<E.mipmaps.length;Jt++)Nt(k.__webglFramebuffer[Lt][Jt],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Jt);else Nt(k.__webglFramebuffer[Lt],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);M(E)&&S(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(jt){for(let Lt=0,Jt=St.length;Lt<Jt;Lt++){const oe=St[Lt],bt=s.get(oe);let Ct=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ct,bt.__webglTexture),et(Ct,oe),Nt(k.__webglFramebuffer,U,oe,r.COLOR_ATTACHMENT0+Lt,Ct,0),M(oe)&&S(Ct)}n.unbindTexture()}else{let Lt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Lt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Lt,ct.__webglTexture),et(Lt,E),E.mipmaps&&E.mipmaps.length>0)for(let Jt=0;Jt<E.mipmaps.length;Jt++)Nt(k.__webglFramebuffer[Jt],U,E,r.COLOR_ATTACHMENT0,Lt,Jt);else Nt(k.__webglFramebuffer,U,E,r.COLOR_ATTACHMENT0,Lt,0);M(E)&&S(Lt),n.unbindTexture()}U.depthBuffer&&me(U)}function _t(U){const E=U.textures;for(let k=0,ct=E.length;k<ct;k++){const St=E[k];if(M(St)){const ft=z(U),jt=s.get(St).__webglTexture;n.bindTexture(ft,jt),S(ft),n.unbindTexture()}}}const At=[],Et=[];function Ft(U){if(U.samples>0){if(ne(U)===!1){const E=U.textures,k=U.width,ct=U.height;let St=r.COLOR_BUFFER_BIT;const ft=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,jt=s.get(U),Lt=E.length>1;if(Lt)for(let oe=0;oe<E.length;oe++)n.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Jt=U.texture.mipmaps;Jt&&Jt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let oe=0;oe<E.length;oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),Lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,jt.__webglColorRenderbuffer[oe]);const bt=s.get(E[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,k,ct,0,0,k,ct,St,r.NEAREST),m===!0&&(At.length=0,Et.length=0,At.push(r.COLOR_ATTACHMENT0+oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(At.push(ft),Et.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Et)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,At))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Lt)for(let oe=0;oe<E.length;oe++){n.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,jt.__webglColorRenderbuffer[oe]);const bt=s.get(E[oe]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,bt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function P(U){return Math.min(l.maxSamples,U.samples)}function ne(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function It(U){const E=u.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function ie(U,E){const k=U.colorSpace,ct=U.format,St=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||k!==Xr&&k!==as&&(Le.getTransfer(k)===Ve?(ct!==Ui||St!==ri)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",k)),E}function Dt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=it,this.setTexture2D=rt,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=Me,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function SR(r,t){function n(s,l=as){let c;const u=Le.getTransfer(l);if(s===ri)return r.UNSIGNED_BYTE;if(s===rp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===op)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Nv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Ov)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Lv)return r.BYTE;if(s===Uv)return r.SHORT;if(s===ol)return r.UNSIGNED_SHORT;if(s===sp)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===Ea)return r.HALF_FLOAT;if(s===Pv)return r.ALPHA;if(s===zv)return r.RGB;if(s===Ui)return r.RGBA;if(s===ba)return r.DEPTH_COMPONENT;if(s===Ps)return r.DEPTH_STENCIL;if(s===Fv)return r.RED;if(s===lp)return r.RED_INTEGER;if(s===kr)return r.RG;if(s===cp)return r.RG_INTEGER;if(s===up)return r.RGBA_INTEGER;if(s===Jc||s===$c||s===tu||s===eu)if(u===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xd||s===Sd||s===yd||s===Md)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ed||s===bd)return u===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Td)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ad)return c.COMPRESSED_R11_EAC;if(s===Rd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Cd)return c.COMPRESSED_RG11_EAC;if(s===wd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Dd||s===Ld||s===Ud||s===Nd||s===Od||s===Pd||s===zd||s===Fd||s===Id||s===Bd||s===Hd||s===Gd||s===Vd||s===kd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Dd)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ld)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ud)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nd)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Od)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pd)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zd)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fd)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Id)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bd)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hd)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gd)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vd)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kd)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xd||s===Wd||s===qd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Xd)return u===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yd||s===jd||s===Zd||s===Kd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Yd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===jd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ll?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ER{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new Qv(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new Zi({vertexShader:yR,fragmentShader:MR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ni(new fu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bR extends Bs{constructor(t,n){super();const s=this;let l=null,c=1,u=null,d="local-floor",m=1,p=null,g=null,_=null,v=null,y=null,b=null;const A=typeof XRWebGLBinding<"u",M=new ER,S={},z=n.getContextAttributes();let D=null,L=null;const I=[],H=[],F=new Ot;let Y=null;const T=new Si;T.viewport=new an;const w=new Si;w.viewport=new an;const G=[T,w],it=new UE;let Q=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ht=I[nt];return ht===void 0&&(ht=new qh,I[nt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(nt){let ht=I[nt];return ht===void 0&&(ht=new qh,I[nt]=ht),ht.getGripSpace()},this.getHand=function(nt){let ht=I[nt];return ht===void 0&&(ht=new qh,I[nt]=ht),ht.getHandSpace()};function rt(nt){const ht=H.indexOf(nt.inputSource);if(ht===-1)return;const Nt=I[ht];Nt!==void 0&&(Nt.update(nt.inputSource,nt.frame,p||u),Nt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function O(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",B);for(let nt=0;nt<I.length;nt++){const ht=H[nt];ht!==null&&(H[nt]=null,I[nt].disconnect(ht))}Q=null,ut=null,M.reset();for(const nt in S)delete S[nt];t.setRenderTarget(D),y=null,v=null,_=null,l=null,L=null,Xt.stop(),s.isPresenting=!1,t.setPixelRatio(Y),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,s.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,n)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",O),l.addEventListener("inputsourceschange",B),z.xrCompatible!==!0&&await n.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,Vt=null,Ht=null;z.depth&&(Ht=z.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Nt=z.stencil?Ps:ba,Vt=z.stencil?ll:Yi);const me={colorFormat:n.RGBA8,depthFormat:Ht,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(me),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new Wi(v.textureWidth,v.textureHeight,{format:Ui,type:ri,depthTexture:new ul(v.textureWidth,v.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Nt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,Nt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Wi(y.framebufferWidth,y.framebufferHeight,{format:Ui,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await l.requestReferenceSpace(d),Xt.setContext(l),Xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(nt){for(let ht=0;ht<nt.removed.length;ht++){const Nt=nt.removed[ht],Vt=H.indexOf(Nt);Vt>=0&&(H[Vt]=null,I[Vt].disconnect(Nt))}for(let ht=0;ht<nt.added.length;ht++){const Nt=nt.added[ht];let Vt=H.indexOf(Nt);if(Vt===-1){for(let me=0;me<I.length;me++)if(me>=H.length){H.push(Nt),Vt=me;break}else if(H[me]===null){H[me]=Nt,Vt=me;break}if(Vt===-1)break}const Ht=I[Vt];Ht&&Ht.connect(Nt)}}const J=new q,Mt=new q;function vt(nt,ht,Nt){J.setFromMatrixPosition(ht.matrixWorld),Mt.setFromMatrixPosition(Nt.matrixWorld);const Vt=J.distanceTo(Mt),Ht=ht.projectionMatrix.elements,me=Nt.projectionMatrix.elements,Me=Ht[14]/(Ht[10]-1),ue=Ht[14]/(Ht[10]+1),_t=(Ht[9]+1)/Ht[5],At=(Ht[9]-1)/Ht[5],Et=(Ht[8]-1)/Ht[0],Ft=(me[8]+1)/me[0],P=Me*Et,ne=Me*Ft,It=Vt/(-Et+Ft),ie=It*-Et;if(ht.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ie),nt.translateZ(It),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ht[10]===-1)nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Dt=Me+It,U=ue+It,E=P-ie,k=ne+(Vt-ie),ct=_t*ue/U*Dt,St=At*ue/U*Dt;nt.projectionMatrix.makePerspective(E,k,ct,St,Dt,U),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function N(nt,ht){ht===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ht.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let ht=nt.near,Nt=nt.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Nt=M.depthFar)),it.near=w.near=T.near=ht,it.far=w.far=T.far=Nt,(Q!==it.near||ut!==it.far)&&(l.updateRenderState({depthNear:it.near,depthFar:it.far}),Q=it.near,ut=it.far),it.layers.mask=nt.layers.mask|6,T.layers.mask=it.layers.mask&3,w.layers.mask=it.layers.mask&5;const Vt=nt.parent,Ht=it.cameras;N(it,Vt);for(let me=0;me<Ht.length;me++)N(Ht[me],Vt);Ht.length===2?vt(it,T,w):it.projectionMatrix.copy(T.projectionMatrix),et(nt,it,Vt)};function et(nt,ht,Nt){Nt===null?nt.matrix.copy(ht.matrixWorld):(nt.matrix.copy(Nt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ht.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Qd*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(nt){m=nt,v!==null&&(v.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(it)},this.getCameraTexture=function(nt){return S[nt]};let pt=null;function Rt(nt,ht){if(g=ht.getViewerPose(p||u),b=ht,g!==null){const Nt=g.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Vt=!1;Nt.length!==it.cameras.length&&(it.cameras.length=0,Vt=!0);for(let ue=0;ue<Nt.length;ue++){const _t=Nt[ue];let At=null;if(y!==null)At=y.getViewport(_t);else{const Ft=_.getViewSubImage(v,_t);At=Ft.viewport,ue===0&&(t.setRenderTargetTextures(L,Ft.colorTexture,Ft.depthStencilTexture),t.setRenderTarget(L))}let Et=G[ue];Et===void 0&&(Et=new Si,Et.layers.enable(ue),Et.viewport=new an,G[ue]=Et),Et.matrix.fromArray(_t.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(_t.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(At.x,At.y,At.width,At.height),ue===0&&(it.matrix.copy(Et.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),Vt===!0&&it.cameras.push(Et)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=s.getBinding();const ue=_.getDepthInformation(Nt[0]);ue&&ue.isValid&&ue.texture&&M.init(ue,l.renderState)}if(Ht&&Ht.includes("camera-access")&&A){t.state.unbindTexture(),_=s.getBinding();for(let ue=0;ue<Nt.length;ue++){const _t=Nt[ue].camera;if(_t){let At=S[_t];At||(At=new Qv,S[_t]=At);const Et=_.getCameraImage(_t);At.sourceTexture=Et}}}}for(let Nt=0;Nt<I.length;Nt++){const Vt=H[Nt],Ht=I[Nt];Vt!==null&&Ht!==void 0&&Ht.update(Vt,ht,p||u)}pt&&pt(nt,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),b=null}const Xt=new lx;Xt.setAnimationLoop(Rt),this.setAnimationLoop=function(nt){pt=nt},this.dispose=function(){}}}const Ls=new ji,TR=new $e;function AR(r,t){function n(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,qv(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,z,D,L){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(M,S):S.isMeshToonMaterial?(c(M,S),_(M,S)):S.isMeshPhongMaterial?(c(M,S),g(M,S)):S.isMeshStandardMaterial?(c(M,S),v(M,S),S.isMeshPhysicalMaterial&&y(M,S,L)):S.isMeshMatcapMaterial?(c(M,S),b(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),A(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(u(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,z,D):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,n(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Kn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,n(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Kn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,n(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,n(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const z=t.get(S),D=z.envMap,L=z.envMapRotation;D&&(M.envMap.value=D,Ls.copy(L),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),M.envMapRotation.value.setFromMatrix4(TR.makeRotationFromEuler(Ls)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,M.aoMapTransform))}function u(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,z,D){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*z,M.scale.value=D*.5,S.map&&(M.map.value=S.map,n(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function g(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function _(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function v(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,z){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function A(M,S){const z=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function RR(r,t,n,s){let l={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,D){const L=D.program;s.uniformBlockBinding(z,L)}function p(z,D){let L=l[z.id];L===void 0&&(b(z),L=g(z),l[z.id]=L,z.addEventListener("dispose",M));const I=D.program;s.updateUBOMapping(z,I);const H=t.render.frame;c[z.id]!==H&&(v(z),c[z.id]=H)}function g(z){const D=_();z.__bindingPointIndex=D;const L=r.createBuffer(),I=z.__size,H=z.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,I,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,L),L}function _(){for(let z=0;z<d;z++)if(u.indexOf(z)===-1)return u.push(z),z;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(z){const D=l[z.id],L=z.uniforms,I=z.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let H=0,F=L.length;H<F;H++){const Y=Array.isArray(L[H])?L[H]:[L[H]];for(let T=0,w=Y.length;T<w;T++){const G=Y[T];if(y(G,H,T,I)===!0){const it=G.__offset,Q=Array.isArray(G.value)?G.value:[G.value];let ut=0;for(let rt=0;rt<Q.length;rt++){const O=Q[rt],B=A(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,it+ut,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,ut),ut+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,it,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(z,D,L,I){const H=z.value,F=D+"_"+L;if(I[F]===void 0)return typeof H=="number"||typeof H=="boolean"?I[F]=H:I[F]=H.clone(),!0;{const Y=I[F];if(typeof H=="number"||typeof H=="boolean"){if(Y!==H)return I[F]=H,!0}else if(Y.equals(H)===!1)return Y.copy(H),!0}return!1}function b(z){const D=z.uniforms;let L=0;const I=16;for(let F=0,Y=D.length;F<Y;F++){const T=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,G=T.length;w<G;w++){const it=T[w],Q=Array.isArray(it.value)?it.value:[it.value];for(let ut=0,rt=Q.length;ut<rt;ut++){const O=Q[ut],B=A(O),J=L%I,Mt=J%B.boundary,vt=J+Mt;L+=Mt,vt!==0&&I-vt<B.storage&&(L+=I-vt),it.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=L,L+=B.storage}}}const H=L%I;return H>0&&(L+=I-H),z.__size=L,z.__cache={},this}function A(z){const D={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(D.boundary=4,D.storage=4):z.isVector2?(D.boundary=8,D.storage=8):z.isVector3||z.isColor?(D.boundary=16,D.storage=12):z.isVector4?(D.boundary=16,D.storage=16):z.isMatrix3?(D.boundary=48,D.storage=48):z.isMatrix4?(D.boundary=64,D.storage=64):z.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):fe("WebGLRenderer: Unsupported uniform value type.",z),D}function M(z){const D=z.target;D.removeEventListener("dispose",M);const L=u.indexOf(D.__bindingPointIndex);u.splice(L,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function S(){for(const z in l)r.deleteBuffer(l[z]);u=[],l={},c={}}return{bind:m,update:p,dispose:S}}const CR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function wR(){return Bi===null&&(Bi=new HM(CR,16,16,kr,Ea),Bi.name="DFG_LUT",Bi.minFilter=Fn,Bi.magFilter=Fn,Bi.wrapS=Sa,Bi.wrapT=Sa,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class DR{constructor(t={}){const{canvas:n=hM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=ri}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=u;const A=y,M=new Set([up,cp,lp]),S=new Set([ri,Yi,ol,ll,rp,op]),z=new Uint32Array(4),D=new Int32Array(4);let L=null,I=null;const H=[],F=[];let Y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=xi;let G=0,it=0,Q=null,ut=-1,rt=null;const O=new an,B=new an;let J=null;const Mt=new Re(0);let vt=0,N=n.width,et=n.height,pt=1,Rt=null,Xt=null;const nt=new an(0,0,N,et),ht=new an(0,0,N,et);let Nt=!1;const Vt=new gp;let Ht=!1,me=!1;const Me=new $e,ue=new q,_t=new an,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Ft(){return Q===null?pt:1}let P=s;function ne(C,j){return n.getContext(C,j)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ap}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",we,!1),P===null){const j="webgl2";if(P=ne(j,C),P===null)throw ne(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw De("WebGLRenderer: "+C.message),C}let It,ie,Dt,U,E,k,ct,St,ft,jt,Lt,Jt,oe,bt,Ct,Yt,Wt,Pt,_e,W,Bt,wt,qt,Tt;function yt(){It=new w1(P),It.init(),wt=new SR(P,It),ie=new S1(P,It,t,wt),Dt=new vR(P,It),ie.reversedDepthBuffer&&v&&Dt.buffers.depth.setReversed(!0),U=new U1(P),E=new iR,k=new xR(P,It,Dt,E,ie,wt,U),ct=new M1(T),St=new C1(T),ft=new zE(P),qt=new v1(P,ft),jt=new D1(P,ft,U,qt),Lt=new O1(P,jt,ft,U),_e=new N1(P,ie,k),Yt=new y1(E),Jt=new nR(T,ct,St,It,ie,qt,Yt),oe=new AR(T,E),bt=new sR,Ct=new fR(It),Pt=new _1(T,ct,St,Dt,Lt,b,m),Wt=new gR(T,Lt,ie),Tt=new RR(P,U,ie,Dt),W=new x1(P,It,U),Bt=new L1(P,It,U),U.programs=Jt.programs,T.capabilities=ie,T.extensions=It,T.properties=E,T.renderLists=bt,T.shadowMap=Wt,T.state=Dt,T.info=U}yt(),A!==ri&&(Y=new z1(A,n.width,n.height,l,c));const Ut=new bR(T,P);this.xr=Ut,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=It.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=It.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(C){C!==void 0&&(pt=C,this.setSize(N,et,!1))},this.getSize=function(C){return C.set(N,et)},this.setSize=function(C,j,ot=!0){if(Ut.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,et=j,n.width=Math.floor(C*pt),n.height=Math.floor(j*pt),ot===!0&&(n.style.width=C+"px",n.style.height=j+"px"),Y!==null&&Y.setSize(n.width,n.height),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(N*pt,et*pt).floor()},this.setDrawingBufferSize=function(C,j,ot){N=C,et=j,pt=ot,n.width=Math.floor(C*ot),n.height=Math.floor(j*ot),this.setViewport(0,0,C,j)},this.setEffects=function(C){if(A===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let j=0;j<C.length;j++)if(C[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,j,ot,at){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,j,ot,at),Dt.viewport(O.copy(nt).multiplyScalar(pt).round())},this.getScissor=function(C){return C.copy(ht)},this.setScissor=function(C,j,ot,at){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,j,ot,at),Dt.scissor(B.copy(ht).multiplyScalar(pt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(C){Dt.setScissorTest(Nt=C)},this.setOpaqueSort=function(C){Rt=C},this.setTransparentSort=function(C){Xt=C},this.getClearColor=function(C){return C.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,ot=!0){let at=0;if(C){let K=!1;if(Q!==null){const zt=Q.texture.format;K=M.has(zt)}if(K){const zt=Q.texture.type,Zt=S.has(zt),Gt=Pt.getClearColor(),Kt=Pt.getClearAlpha(),$t=Gt.r,re=Gt.g,te=Gt.b;Zt?(z[0]=$t,z[1]=re,z[2]=te,z[3]=Kt,P.clearBufferuiv(P.COLOR,0,z)):(D[0]=$t,D[1]=re,D[2]=te,D[3]=Kt,P.clearBufferiv(P.COLOR,0,D))}else at|=P.COLOR_BUFFER_BIT}j&&(at|=P.DEPTH_BUFFER_BIT),ot&&(at|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Pt.dispose(),bt.dispose(),Ct.dispose(),E.dispose(),ct.dispose(),St.dispose(),Lt.dispose(),qt.dispose(),Tt.dispose(),Jt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Gs),Ut.removeEventListener("sessionend",to),Oi.stop()};function he(C){C.preventDefault(),v_("WebGLRenderer: Context Lost."),w=!0}function Ie(){v_("WebGLRenderer: Context Restored."),w=!1;const C=U.autoReset,j=Wt.enabled,ot=Wt.autoUpdate,at=Wt.needsUpdate,K=Wt.type;yt(),U.autoReset=C,Wt.enabled=j,Wt.autoUpdate=ot,Wt.needsUpdate=at,Wt.type=K}function we(C){De("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Nn(C){const j=C.target;j.removeEventListener("dispose",Nn),Mi(j)}function Mi(C){pl(C),E.remove(C)}function pl(C){const j=E.get(C).programs;j!==void 0&&(j.forEach(function(ot){Jt.releaseProgram(ot)}),C.isShaderMaterial&&Jt.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ot,at,K,zt){j===null&&(j=At);const Zt=K.isMesh&&K.matrixWorld.determinant()<0,Gt=ls(C,j,ot,at,K);Dt.setMaterial(at,Zt);let Kt=ot.index,$t=1;if(at.wireframe===!0){if(Kt=jt.getWireframeAttribute(ot),Kt===void 0)return;$t=2}const re=ot.drawRange,te=ot.attributes.position;let le=re.start*$t,Oe=(re.start+re.count)*$t;zt!==null&&(le=Math.max(le,zt.start*$t),Oe=Math.min(Oe,(zt.start+zt.count)*$t)),Kt!==null?(le=Math.max(le,0),Oe=Math.min(Oe,Kt.count)):te!=null&&(le=Math.max(le,0),Oe=Math.min(Oe,te.count));const Qe=Oe-le;if(Qe<0||Qe===1/0)return;qt.setup(K,at,Gt,ot,Kt);let je,Fe=W;if(Kt!==null&&(je=ft.get(Kt),Fe=Bt,Fe.setIndex(je)),K.isMesh)at.wireframe===!0?(Dt.setLineWidth(at.wireframeLinewidth*Ft()),Fe.setMode(P.LINES)):Fe.setMode(P.TRIANGLES);else if(K.isLine){let ae=at.linewidth;ae===void 0&&(ae=1),Dt.setLineWidth(ae*Ft()),K.isLineSegments?Fe.setMode(P.LINES):K.isLineLoop?Fe.setMode(P.LINE_LOOP):Fe.setMode(P.LINE_STRIP)}else K.isPoints?Fe.setMode(P.POINTS):K.isSprite&&Fe.setMode(P.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)cl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))Fe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ae=K._multiDrawStarts,Pe=K._multiDrawCounts,de=K._multiDrawCount,Mn=Kt?ft.get(Kt).bytesPerElement:1,Qi=E.get(at).currentProgram.getUniforms();for(let En=0;En<de;En++)Qi.setValue(P,"_gl_DrawID",En),Fe.render(ae[En]/Mn,Pe[En])}else if(K.isInstancedMesh)Fe.renderInstances(le,Qe,K.count);else if(ot.isInstancedBufferGeometry){const ae=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Pe=Math.min(ot.instanceCount,ae);Fe.renderInstances(le,Qe,Pe)}else Fe.render(le,Qe)};function Jr(C,j,ot){C.transparent===!0&&C.side===Gi&&C.forceSinglePass===!1?(C.side=Kn,C.needsUpdate=!0,ks(C,j,ot),C.side=os,C.needsUpdate=!0,ks(C,j,ot),C.side=Gi):ks(C,j,ot)}this.compile=function(C,j,ot=null){ot===null&&(ot=C),I=Ct.get(ot),I.init(j),F.push(I),ot.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),C!==ot&&C.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),I.setupLights();const at=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const zt=K.material;if(zt)if(Array.isArray(zt))for(let Zt=0;Zt<zt.length;Zt++){const Gt=zt[Zt];Jr(Gt,ot,K),at.add(Gt)}else Jr(zt,ot,K),at.add(zt)}),I=F.pop(),at},this.compileAsync=function(C,j,ot=null){const at=this.compile(C,j,ot);return new Promise(K=>{function zt(){if(at.forEach(function(Zt){E.get(Zt).currentProgram.isReady()&&at.delete(Zt)}),at.size===0){K(C);return}setTimeout(zt,10)}It.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Hs=null;function $r(C){Hs&&Hs(C)}function Gs(){Oi.stop()}function to(){Oi.start()}const Oi=new lx;Oi.setAnimationLoop($r),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(C){Hs=C,Ut.setAnimationLoop(C),C===null?Oi.stop():Oi.start()},Ut.addEventListener("sessionstart",Gs),Ut.addEventListener("sessionend",to),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const ot=Ut.enabled===!0&&Ut.isPresenting===!0,at=Y!==null&&(Q===null||ot)&&Y.begin(T,Q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(j),j=Ut.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,j,Q),I=Ct.get(C,F.length),I.init(j),F.push(I),Me.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Vt.setFromProjectionMatrix(Me,ki,j.reversedDepth),me=this.localClippingEnabled,Ht=Yt.init(this.clippingPlanes,me),L=bt.get(C,H.length),L.init(),H.push(L),Ut.enabled===!0&&Ut.isPresenting===!0){const Zt=T.xr.getDepthSensingMesh();Zt!==null&&oi(Zt,j,-1/0,T.sortObjects)}oi(C,j,0,T.sortObjects),L.finish(),T.sortObjects===!0&&L.sort(Rt,Xt),Et=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Et&&Pt.addToRenderList(L,C),this.info.render.frame++,Ht===!0&&Yt.beginShadows();const K=I.state.shadowsArray;if(Wt.render(K,C,j),Ht===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&Y.hasRenderPass())===!1){const Zt=L.opaque,Gt=L.transmissive;if(I.setupLights(),j.isArrayCamera){const Kt=j.cameras;if(Gt.length>0)for(let $t=0,re=Kt.length;$t<re;$t++){const te=Kt[$t];yn(Zt,Gt,C,te)}Et&&Pt.render(C);for(let $t=0,re=Kt.length;$t<re;$t++){const te=Kt[$t];on(L,C,te,te.viewport)}}else Gt.length>0&&yn(Zt,Gt,C,j),Et&&Pt.render(C),on(L,C,j)}Q!==null&&it===0&&(k.updateMultisampleRenderTarget(Q),k.updateRenderTargetMipmap(Q)),at&&Y.end(T),C.isScene===!0&&C.onAfterRender(T,C,j),qt.resetDefaultState(),ut=-1,rt=null,F.pop(),F.length>0?(I=F[F.length-1],Ht===!0&&Yt.setGlobalState(T.clippingPlanes,I.state.camera)):I=null,H.pop(),H.length>0?L=H[H.length-1]:L=null};function oi(C,j,ot,at){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Vt.intersectsSprite(C)){at&&_t.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Me);const Zt=Lt.update(C),Gt=C.material;Gt.visible&&L.push(C,Zt,Gt,ot,_t.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Vt.intersectsObject(C))){const Zt=Lt.update(C),Gt=C.material;if(at&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_t.copy(C.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),_t.copy(Zt.boundingSphere.center)),_t.applyMatrix4(C.matrixWorld).applyMatrix4(Me)),Array.isArray(Gt)){const Kt=Zt.groups;for(let $t=0,re=Kt.length;$t<re;$t++){const te=Kt[$t],le=Gt[te.materialIndex];le&&le.visible&&L.push(C,Zt,le,ot,_t.z,te)}}else Gt.visible&&L.push(C,Zt,Gt,ot,_t.z,null)}}const zt=C.children;for(let Zt=0,Gt=zt.length;Zt<Gt;Zt++)oi(zt[Zt],j,ot,at)}function on(C,j,ot,at){const{opaque:K,transmissive:zt,transparent:Zt}=C;I.setupLightsView(ot),Ht===!0&&Yt.setGlobalState(T.clippingPlanes,ot),at&&Dt.viewport(O.copy(at)),K.length>0&&Ei(K,j,ot),zt.length>0&&Ei(zt,j,ot),Zt.length>0&&Ei(Zt,j,ot),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function yn(C,j,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[at.id]===void 0){const le=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[at.id]=new Wi(1,1,{generateMipmaps:!0,type:le?Ea:ri,minFilter:Os,samples:ie.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const zt=I.state.transmissionRenderTarget[at.id],Zt=at.viewport||O;zt.setSize(Zt.z*T.transmissionResolutionScale,Zt.w*T.transmissionResolutionScale);const Gt=T.getRenderTarget(),Kt=T.getActiveCubeFace(),$t=T.getActiveMipmapLevel();T.setRenderTarget(zt),T.getClearColor(Mt),vt=T.getClearAlpha(),vt<1&&T.setClearColor(16777215,.5),T.clear(),Et&&Pt.render(ot);const re=T.toneMapping;T.toneMapping=Xi;const te=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),I.setupLightsView(at),Ht===!0&&Yt.setGlobalState(T.clippingPlanes,at),Ei(C,ot,at),k.updateMultisampleRenderTarget(zt),k.updateRenderTargetMipmap(zt),It.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Oe=0,Qe=j.length;Oe<Qe;Oe++){const je=j[Oe],{object:Fe,geometry:ae,material:Pe,group:de}=je;if(Pe.side===Gi&&Fe.layers.test(at.layers)){const Mn=Pe.side;Pe.side=Kn,Pe.needsUpdate=!0,Vs(Fe,ot,at,ae,Pe,de),Pe.side=Mn,Pe.needsUpdate=!0,le=!0}}le===!0&&(k.updateMultisampleRenderTarget(zt),k.updateRenderTargetMipmap(zt))}T.setRenderTarget(Gt,Kt,$t),T.setClearColor(Mt,vt),te!==void 0&&(at.viewport=te),T.toneMapping=re}function Ei(C,j,ot){const at=j.isScene===!0?j.overrideMaterial:null;for(let K=0,zt=C.length;K<zt;K++){const Zt=C[K],{object:Gt,geometry:Kt,group:$t}=Zt;let re=Zt.material;re.allowOverride===!0&&at!==null&&(re=at),Gt.layers.test(ot.layers)&&Vs(Gt,j,ot,Kt,re,$t)}}function Vs(C,j,ot,at,K,zt){C.onBeforeRender(T,j,ot,at,K,zt),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(T,j,ot,at,C,zt),K.transparent===!0&&K.side===Gi&&K.forceSinglePass===!1?(K.side=Kn,K.needsUpdate=!0,T.renderBufferDirect(ot,j,at,K,C,zt),K.side=os,K.needsUpdate=!0,T.renderBufferDirect(ot,j,at,K,C,zt),K.side=Gi):T.renderBufferDirect(ot,j,at,K,C,zt),C.onAfterRender(T,j,ot,at,K,zt)}function ks(C,j,ot){j.isScene!==!0&&(j=At);const at=E.get(C),K=I.state.lights,zt=I.state.shadowsArray,Zt=K.state.version,Gt=Jt.getParameters(C,K.state,zt,j,ot),Kt=Jt.getProgramCacheKey(Gt);let $t=at.programs;at.environment=C.isMeshStandardMaterial?j.environment:null,at.fog=j.fog,at.envMap=(C.isMeshStandardMaterial?St:ct).get(C.envMap||at.environment),at.envMapRotation=at.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,$t===void 0&&(C.addEventListener("dispose",Nn),$t=new Map,at.programs=$t);let re=$t.get(Kt);if(re!==void 0){if(at.currentProgram===re&&at.lightsStateVersion===Zt)return eo(C,Gt),re}else Gt.uniforms=Jt.getUniforms(C),C.onBeforeCompile(Gt,T),re=Jt.acquireProgram(Gt,Kt),$t.set(Kt,re),at.uniforms=Gt.uniforms;const te=at.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(te.clippingPlanes=Yt.uniform),eo(C,Gt),at.needsLights=Ta(C),at.lightsStateVersion=Zt,at.needsLights&&(te.ambientLightColor.value=K.state.ambient,te.lightProbe.value=K.state.probe,te.directionalLights.value=K.state.directional,te.directionalLightShadows.value=K.state.directionalShadow,te.spotLights.value=K.state.spot,te.spotLightShadows.value=K.state.spotShadow,te.rectAreaLights.value=K.state.rectArea,te.ltc_1.value=K.state.rectAreaLTC1,te.ltc_2.value=K.state.rectAreaLTC2,te.pointLights.value=K.state.point,te.pointLightShadows.value=K.state.pointShadow,te.hemisphereLights.value=K.state.hemi,te.directionalShadowMap.value=K.state.directionalShadowMap,te.directionalShadowMatrix.value=K.state.directionalShadowMatrix,te.spotShadowMap.value=K.state.spotShadowMap,te.spotLightMatrix.value=K.state.spotLightMatrix,te.spotLightMap.value=K.state.spotLightMap,te.pointShadowMap.value=K.state.pointShadowMap,te.pointShadowMatrix.value=K.state.pointShadowMatrix),at.currentProgram=re,at.uniformsList=null,re}function ml(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=iu.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function eo(C,j){const ot=E.get(C);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function ls(C,j,ot,at,K){j.isScene!==!0&&(j=At),k.resetTextureUnits();const zt=j.fog,Zt=at.isMeshStandardMaterial?j.environment:null,Gt=Q===null?T.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Xr,Kt=(at.isMeshStandardMaterial?St:ct).get(at.envMap||Zt),$t=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,re=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),te=!!ot.morphAttributes.position,le=!!ot.morphAttributes.normal,Oe=!!ot.morphAttributes.color;let Qe=Xi;at.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Qe=T.toneMapping);const je=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Fe=je!==void 0?je.length:0,ae=E.get(at),Pe=I.state.lights;if(Ht===!0&&(me===!0||C!==rt)){const Tn=C===rt&&at.id===ut;Yt.setState(at,C,Tn)}let de=!1;at.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Pe.state.version||ae.outputColorSpace!==Gt||K.isBatchedMesh&&ae.batching===!1||!K.isBatchedMesh&&ae.batching===!0||K.isBatchedMesh&&ae.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ae.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ae.instancing===!1||!K.isInstancedMesh&&ae.instancing===!0||K.isSkinnedMesh&&ae.skinning===!1||!K.isSkinnedMesh&&ae.skinning===!0||K.isInstancedMesh&&ae.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ae.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ae.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ae.instancingMorph===!1&&K.morphTexture!==null||ae.envMap!==Kt||at.fog===!0&&ae.fog!==zt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Yt.numPlanes||ae.numIntersection!==Yt.numIntersection)||ae.vertexAlphas!==$t||ae.vertexTangents!==re||ae.morphTargets!==te||ae.morphNormals!==le||ae.morphColors!==Oe||ae.toneMapping!==Qe||ae.morphTargetsCount!==Fe)&&(de=!0):(de=!0,ae.__version=at.version);let Mn=ae.currentProgram;de===!0&&(Mn=ks(at,j,K));let Qi=!1,En=!1,li=!1;const Be=Mn.getUniforms(),bn=ae.uniforms;if(Dt.useProgram(Mn.program)&&(Qi=!0,En=!0,li=!0),at.id!==ut&&(ut=at.id,En=!0),Qi||rt!==C){Dt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Be.setValue(P,"projectionMatrix",C.projectionMatrix),Be.setValue(P,"viewMatrix",C.matrixWorldInverse);const An=Be.map.cameraPosition;An!==void 0&&An.setValue(P,ue.setFromMatrixPosition(C.matrixWorld)),ie.logarithmicDepthBuffer&&Be.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Be.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),rt!==C&&(rt=C,En=!0,li=!0)}if(ae.needsLights&&(Pe.state.directionalShadowMap.length>0&&Be.setValue(P,"directionalShadowMap",Pe.state.directionalShadowMap,k),Pe.state.spotShadowMap.length>0&&Be.setValue(P,"spotShadowMap",Pe.state.spotShadowMap,k),Pe.state.pointShadowMap.length>0&&Be.setValue(P,"pointShadowMap",Pe.state.pointShadowMap,k)),K.isSkinnedMesh){Be.setOptional(P,K,"bindMatrix"),Be.setOptional(P,K,"bindMatrixInverse");const Tn=K.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Be.setValue(P,"boneTexture",Tn.boneTexture,k))}K.isBatchedMesh&&(Be.setOptional(P,K,"batchingTexture"),Be.setValue(P,"batchingTexture",K._matricesTexture,k),Be.setOptional(P,K,"batchingIdTexture"),Be.setValue(P,"batchingIdTexture",K._indirectTexture,k),Be.setOptional(P,K,"batchingColorTexture"),K._colorsTexture!==null&&Be.setValue(P,"batchingColorTexture",K._colorsTexture,k));const pn=ot.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&_e.update(K,ot,Mn),(En||ae.receiveShadow!==K.receiveShadow)&&(ae.receiveShadow=K.receiveShadow,Be.setValue(P,"receiveShadow",K.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(bn.envMap.value=Kt,bn.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&j.environment!==null&&(bn.envMapIntensity.value=j.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=wR()),En&&(Be.setValue(P,"toneMappingExposure",T.toneMappingExposure),ae.needsLights&&no(bn,li),zt&&at.fog===!0&&oe.refreshFogUniforms(bn,zt),oe.refreshMaterialUniforms(bn,at,pt,et,I.state.transmissionRenderTarget[C.id]),iu.upload(P,ml(ae),bn,k)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(iu.upload(P,ml(ae),bn,k),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Be.setValue(P,"center",K.center),Be.setValue(P,"modelViewMatrix",K.modelViewMatrix),Be.setValue(P,"normalMatrix",K.normalMatrix),Be.setValue(P,"modelMatrix",K.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Tn=at.uniformsGroups;for(let An=0,Xs=Tn.length;An<Xs;An++){const bi=Tn[An];Tt.update(bi,Mn),Tt.bind(bi,Mn)}}return Mn}function no(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Ta(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return it},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(C,j,ot){const at=E.get(C);at.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=j,E.get(C.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ot,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const ot=E.get(C);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0};const Aa=P.createFramebuffer();this.setRenderTarget=function(C,j=0,ot=0){Q=C,G=j,it=ot;let at=null,K=!1,zt=!1;if(C){const Gt=E.get(C);if(Gt.__useDefaultFramebuffer!==void 0){Dt.bindFramebuffer(P.FRAMEBUFFER,Gt.__webglFramebuffer),O.copy(C.viewport),B.copy(C.scissor),J=C.scissorTest,Dt.viewport(O),Dt.scissor(B),Dt.setScissorTest(J),ut=-1;return}else if(Gt.__webglFramebuffer===void 0)k.setupRenderTarget(C);else if(Gt.__hasExternalTextures)k.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const re=C.depthTexture;if(Gt.__boundDepthTexture!==re){if(re!==null&&E.has(re)&&(C.width!==re.image.width||C.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(C)}}const Kt=C.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(zt=!0);const $t=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[j])?at=$t[j][ot]:at=$t[j],K=!0):C.samples>0&&k.useMultisampledRTT(C)===!1?at=E.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?at=$t[ot]:at=$t,O.copy(C.viewport),B.copy(C.scissor),J=C.scissorTest}else O.copy(nt).multiplyScalar(pt).floor(),B.copy(ht).multiplyScalar(pt).floor(),J=Nt;if(ot!==0&&(at=Aa),Dt.bindFramebuffer(P.FRAMEBUFFER,at)&&Dt.drawBuffers(C,at),Dt.viewport(O),Dt.scissor(B),Dt.setScissorTest(J),K){const Gt=E.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+j,Gt.__webglTexture,ot)}else if(zt){const Gt=j;for(let Kt=0;Kt<C.textures.length;Kt++){const $t=E.get(C.textures[Kt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Kt,$t.__webglTexture,ot,Gt)}}else if(C!==null&&ot!==0){const Gt=E.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Gt.__webglTexture,ot)}ut=-1},this.readRenderTargetPixels=function(C,j,ot,at,K,zt,Zt,Gt=0){if(!(C&&C.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Zt!==void 0&&(Kt=Kt[Zt]),Kt){Dt.bindFramebuffer(P.FRAMEBUFFER,Kt);try{const $t=C.textures[Gt],re=$t.format,te=$t.type;if(!ie.textureFormatReadable(re)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(te)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-at&&ot>=0&&ot<=C.height-K&&(C.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Gt),P.readPixels(j,ot,at,K,wt.convert(re),wt.convert(te),zt))}finally{const $t=Q!==null?E.get(Q).__webglFramebuffer:null;Dt.bindFramebuffer(P.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(C,j,ot,at,K,zt,Zt,Gt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Zt!==void 0&&(Kt=Kt[Zt]),Kt)if(j>=0&&j<=C.width-at&&ot>=0&&ot<=C.height-K){Dt.bindFramebuffer(P.FRAMEBUFFER,Kt);const $t=C.textures[Gt],re=$t.format,te=$t.type;if(!ie.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,le),P.bufferData(P.PIXEL_PACK_BUFFER,zt.byteLength,P.STREAM_READ),C.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Gt),P.readPixels(j,ot,at,K,wt.convert(re),wt.convert(te),0);const Oe=Q!==null?E.get(Q).__webglFramebuffer:null;Dt.bindFramebuffer(P.FRAMEBUFFER,Oe);const Qe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await dM(P,Qe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,le),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,zt),P.deleteBuffer(le),P.deleteSync(Qe),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,ot=0){const at=Math.pow(2,-ot),K=Math.floor(C.image.width*at),zt=Math.floor(C.image.height*at),Zt=j!==null?j.x:0,Gt=j!==null?j.y:0;k.setTexture2D(C,0),P.copyTexSubImage2D(P.TEXTURE_2D,ot,0,0,Zt,Gt,K,zt),Dt.unbindTexture()};const cs=P.createFramebuffer(),Ra=P.createFramebuffer();this.copyTextureToTexture=function(C,j,ot=null,at=null,K=0,zt=null){zt===null&&(K!==0?(cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),zt=K,K=0):zt=0);let Zt,Gt,Kt,$t,re,te,le,Oe,Qe;const je=C.isCompressedTexture?C.mipmaps[zt]:C.image;if(ot!==null)Zt=ot.max.x-ot.min.x,Gt=ot.max.y-ot.min.y,Kt=ot.isBox3?ot.max.z-ot.min.z:1,$t=ot.min.x,re=ot.min.y,te=ot.isBox3?ot.min.z:0;else{const pn=Math.pow(2,-K);Zt=Math.floor(je.width*pn),Gt=Math.floor(je.height*pn),C.isDataArrayTexture?Kt=je.depth:C.isData3DTexture?Kt=Math.floor(je.depth*pn):Kt=1,$t=0,re=0,te=0}at!==null?(le=at.x,Oe=at.y,Qe=at.z):(le=0,Oe=0,Qe=0);const Fe=wt.convert(j.format),ae=wt.convert(j.type);let Pe;j.isData3DTexture?(k.setTexture3D(j,0),Pe=P.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(k.setTexture2DArray(j,0),Pe=P.TEXTURE_2D_ARRAY):(k.setTexture2D(j,0),Pe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,j.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,j.unpackAlignment);const de=P.getParameter(P.UNPACK_ROW_LENGTH),Mn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Qi=P.getParameter(P.UNPACK_SKIP_PIXELS),En=P.getParameter(P.UNPACK_SKIP_ROWS),li=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,je.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,je.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$t),P.pixelStorei(P.UNPACK_SKIP_ROWS,re),P.pixelStorei(P.UNPACK_SKIP_IMAGES,te);const Be=C.isDataArrayTexture||C.isData3DTexture,bn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const pn=E.get(C),Tn=E.get(j),An=E.get(pn.__renderTarget),Xs=E.get(Tn.__renderTarget);Dt.bindFramebuffer(P.READ_FRAMEBUFFER,An.__webglFramebuffer),Dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let bi=0;bi<Kt;bi++)Be&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,E.get(C).__webglTexture,K,te+bi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,E.get(j).__webglTexture,zt,Qe+bi)),P.blitFramebuffer($t,re,Zt,Gt,le,Oe,Zt,Gt,P.DEPTH_BUFFER_BIT,P.NEAREST);Dt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||E.has(C)){const pn=E.get(C),Tn=E.get(j);Dt.bindFramebuffer(P.READ_FRAMEBUFFER,cs),Dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ra);for(let An=0;An<Kt;An++)Be?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,pn.__webglTexture,K,te+An):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pn.__webglTexture,K),bn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tn.__webglTexture,zt,Qe+An):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Tn.__webglTexture,zt),K!==0?P.blitFramebuffer($t,re,Zt,Gt,le,Oe,Zt,Gt,P.COLOR_BUFFER_BIT,P.NEAREST):bn?P.copyTexSubImage3D(Pe,zt,le,Oe,Qe+An,$t,re,Zt,Gt):P.copyTexSubImage2D(Pe,zt,le,Oe,$t,re,Zt,Gt);Dt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else bn?C.isDataTexture||C.isData3DTexture?P.texSubImage3D(Pe,zt,le,Oe,Qe,Zt,Gt,Kt,Fe,ae,je.data):j.isCompressedArrayTexture?P.compressedTexSubImage3D(Pe,zt,le,Oe,Qe,Zt,Gt,Kt,Fe,je.data):P.texSubImage3D(Pe,zt,le,Oe,Qe,Zt,Gt,Kt,Fe,ae,je):C.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,zt,le,Oe,Zt,Gt,Fe,ae,je.data):C.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,zt,le,Oe,je.width,je.height,Fe,je.data):P.texSubImage2D(P.TEXTURE_2D,zt,le,Oe,Zt,Gt,Fe,ae,je);P.pixelStorei(P.UNPACK_ROW_LENGTH,de),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Qi),P.pixelStorei(P.UNPACK_SKIP_ROWS,En),P.pixelStorei(P.UNPACK_SKIP_IMAGES,li),zt===0&&j.generateMipmaps&&P.generateMipmap(Pe),Dt.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&k.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?k.setTextureCube(C,0):C.isData3DTexture?k.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?k.setTexture2DArray(C,0):k.setTexture2D(C,0),Dt.unbindTexture()},this.resetState=function(){G=0,it=0,Q=null,Dt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),n.unpackColorSpace=Le._getUnpackColorSpace()}}const xv={type:"change"},yp={type:"start"},dx={type:"end"},Kc=new pp,Sv=new is,LR=Math.cos(70*mM.DEG2RAD),gn=new q,Zn=2*Math.PI,qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sd=1e-6;class UR extends OE{constructor(t,n=null){super(t,n),this.state=qe.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ir.ROTATE,MIDDLE:Ir.DOLLY,RIGHT:Ir.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Fs,this._lastTargetPosition=new q,this._quat=new Fs().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new j_,this._sphericalDelta=new j_,this._scale=1,this._panOffset=new q,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new q,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=OR.bind(this),this._onPointerDown=NR.bind(this),this._onPointerUp=PR.bind(this),this._onContextMenu=VR.bind(this),this._onMouseWheel=IR.bind(this),this._onKeyDown=BR.bind(this),this._onTouchStart=HR.bind(this),this._onTouchMove=GR.bind(this),this._onMouseDown=zR.bind(this),this._onMouseMove=FR.bind(this),this._interceptControlDown=kR.bind(this),this._interceptControlUp=XR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xv),this.update(),this.state=qe.NONE}update(t=null){const n=this.object.position;gn.copy(n).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Zn:s>Math.PI&&(s-=Zn),l<-Math.PI?l+=Zn:l>Math.PI&&(l-=Zn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),n.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=gn.length();u=this._clampDistance(d*this._scale);const m=d-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Kc.origin.copy(this.object.position),Kc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kc.direction))<LR?this.object.lookAt(this.target):(Sv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kc.intersectPlane(Sv,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sd||this._lastTargetPosition.distanceToSquared(this.target)>sd?(this.dispatchEvent(xv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Zn/60*this.autoRotateSpeed*t:Zn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){gn.setFromMatrixColumn(n,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,n){this.screenSpacePanning===!0?gn.setFromMatrixColumn(n,1):(gn.setFromMatrixColumn(n,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,n){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*n*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=n-s.top,u=s.width,d=s.height;this._mouse.x=l/u*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,d=(t.pageY+n.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Ot,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function NR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function OR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function PR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dx),this.state=qe.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function zR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ir.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=qe.DOLLY;break;case Ir.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=qe.ROTATE}break;case Ir.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=qe.PAN}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(yp)}function FR(r){switch(this.state){case qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function IR(r){this.enabled===!1||this.enableZoom===!1||this.state!==qe.NONE||(r.preventDefault(),this.dispatchEvent(yp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(dx))}function BR(r){this.enabled!==!1&&this._handleKeyDown(r)}function HR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=qe.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=qe.TOUCH_PAN;break;default:this.state=qe.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=qe.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=qe.TOUCH_DOLLY_ROTATE;break;default:this.state=qe.NONE}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(yp)}function GR(r){switch(this._trackPointer(r),this.state){case qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=qe.NONE}}function VR(r){this.enabled!==!1&&r.preventDefault()}function kR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function XR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const WR=({inputs:r,results:t})=>{const n=vi.useRef(null),s=vi.useRef(null),l=vi.useRef(null),c=vi.useRef(null),u=vi.useRef(null),d=vi.useRef(null);return vi.useEffect(()=>{if(!n.current)return;const m=new BM;m.background=new Re(2763306),m.fog=new mp(2763306,2e3,8e3),s.current=m;const p=new Si(45,window.innerWidth/window.innerHeight,1,1e4);p.position.set(2e3,1500,2e3),u.current=p;const g=new DR({antialias:!0});g.setSize(window.innerWidth,window.innerHeight),g.shadowMap.enabled=!0,g.shadowMap.type=yv,n.current.appendChild(g.domElement),c.current=g;const _=new UR(p,g.domElement);_.enableDamping=!0,_.dampingFactor=.05,d.current=_;const v=new LE(16777215,.7);m.add(v);const y=new Y_(16777215,1.2);y.position.set(1e3,3e3,1e3),y.castShadow=!0,m.add(y);const b=new Y_(16777215,.5);b.position.set(-1e3,1e3,-1e3),m.add(b);const A=new NE(5e3,50,4473924,3355443);m.add(A);const M=new nl;m.add(M),l.current=M;let S;const z=()=>{S=requestAnimationFrame(z),_.update(),g.render(m,p)};z();const D=()=>{u.current&&c.current&&(u.current.aspect=window.innerWidth/window.innerHeight,u.current.updateProjectionMatrix(),c.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",D),()=>{cancelAnimationFrame(S),window.removeEventListener("resize",D),c.current&&n.current&&n.current.removeChild(c.current.domElement),_.dispose(),g.dispose()}},[]),vi.useEffect(()=>{const m=l.current;if(!m)return;for(;m.children.length>0;){const T=m.children[0];m.remove(T),T.geometry&&T.geometry.dispose()}const p=T=>T||0,g=p(r.stepCount),_=p(r.width),v=p(r.rise),y=p(r.going),b=p(r.thickness),A=p(r.cheekHeight),M=p(r.cheekThickness),{cheekVisible:S,cheekSide:z}=r;if(g<=0||_<=0)return;const D=new nx;D.moveTo(0,0);for(let T=0;T<g;T++){const w=T*y,G=T*v;D.lineTo(w,G+v),D.lineTo(w+y,G+v)}for(let T=g-1;T>=0;T--){const w=T*y,G=T*v;D.lineTo(w+y,G+v-b),D.lineTo(w+b,G+v-b),D.lineTo(w+b,G)}D.lineTo(0,0);const L=new xp(D,{steps:1,depth:_,bevelEnabled:!1});L.translate(0,0,-_/2);const I=t.overallStatus==="SAFE"?16777215:16752800,H=new Ni(L,new X_({color:I,metalness:.3,roughness:.2,side:Gi}));if(H.castShadow=!0,H.receiveShadow=!0,m.add(H),S){const T=g*v,w=g*y,G=Math.sqrt(T**2+w**2)+y/2,it=Math.atan2(T,w),Q=new Kr(G,A,M),ut=new X_({color:15658734,metalness:.3,roughness:.2}),rt=O=>{const B=new Ni(Q,ut);return B.position.set(w/2,T/2+v/2,O),B.rotation.z=it,B.castShadow=!0,B};(z==="one"||z==="two")&&m.add(rt(-_/2-M/2)),z==="two"&&m.add(rt(_/2+M/2))}const Y=new jr().setFromObject(m).getCenter(new q);m.position.sub(Y)},[r,t.overallStatus]),mt.jsx("div",{ref:n,className:"absolute inset-0 w-full h-full z-0",id:"canvas-container"})};function qR(){const[r,t]=vi.useState({steelGrade:"S275",liveLoadType:"domestic",stepCount:14,width:1e3,rise:180,going:250,thickness:6,cheekVisible:!0,cheekSide:"two",cheekHeight:250,cheekThickness:10,calculationMethod:"simplified"}),[n,s]=vi.useState({inputOpen:!0,resultsOpen:!0}),l=vi.useMemo(()=>Dy(r),[r]);return mt.jsxs("div",{className:"relative w-screen h-screen bg-[#1a1a1a] overflow-hidden",children:[mt.jsx(WR,{inputs:r,results:l}),mt.jsxs("div",{className:"absolute inset-0 z-10 p-4 flex flex-col md:flex-row justify-between items-start pointer-events-none gap-4",children:[mt.jsx("div",{className:"pointer-events-auto w-full md:w-96",children:mt.jsx(Ly,{inputs:r,setInputs:t,isOpen:n.inputOpen,toggleOpen:()=>s(c=>({...c,inputOpen:!c.inputOpen}))})}),mt.jsx("div",{className:"pointer-events-auto w-full md:w-96",children:mt.jsx(Oy,{results:l,isOpen:n.resultsOpen,toggleOpen:()=>s(c=>({...c,resultsOpen:!c.resultsOpen})),steelGrade:r.steelGrade})})]})]})}Ry.createRoot(document.getElementById("root")).render(mt.jsx(vi.StrictMode,{children:mt.jsx(qR,{})}));
