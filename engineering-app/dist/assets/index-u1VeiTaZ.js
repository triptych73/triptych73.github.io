(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var vh={exports:{}},qo={};var t_;function vy(){if(t_)return qo;t_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var u=null;if(c!==void 0&&(u=""+c),l.key!==void 0&&(u=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:u,ref:l!==void 0?l:null,props:c}}return qo.Fragment=t,qo.jsx=n,qo.jsxs=n,qo}var e_;function xy(){return e_||(e_=1,vh.exports=vy()),vh.exports}var vt=xy(),xh={exports:{}},me={};var n_;function Sy(){if(n_)return me;n_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function x(U,$,ot){this.props=U,this.context=$,this.refs=M,this.updater=ot||b}x.prototype.isReactComponent={},x.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=x.prototype;function D(U,$,ot){this.props=U,this.context=$,this.refs=M,this.updater=ot||b}var L=D.prototype=new F;L.constructor=D,A(L,x.prototype),L.isPureReactComponent=!0;var H=Array.isArray;function B(){}var O={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function T(U,$,ot){var Rt=ot.ref;return{$$typeof:r,type:U,key:$,ref:Rt!==void 0?Rt:null,props:ot}}function w(U,$){return T(U.type,$,U.props)}function I(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function j(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ot){return $[ot]})}var tt=/\/+/g;function ct(U,$){return typeof U=="object"&&U!==null&&U.key!=null?j(""+U.key):$.toString(36)}function at(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(B,B):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function z(U,$,ot,Rt,Gt){var nt=typeof U;(nt==="undefined"||nt==="boolean")&&(U=null);var dt=!1;if(U===null)dt=!0;else switch(nt){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(U.$$typeof){case r:case t:dt=!0;break;case _:return dt=U._init,z(dt(U._payload),$,ot,Rt,Gt)}}if(dt)return Gt=Gt(U),dt=Rt===""?"."+ct(U,0):Rt,H(Gt)?(ot="",dt!=null&&(ot=dt.replace(tt,"$&/")+"/"),z(Gt,$,ot,"",function(Wt){return Wt})):Gt!=null&&(I(Gt)&&(Gt=w(Gt,ot+(Gt.key==null||U&&U.key===Gt.key?"":(""+Gt.key).replace(tt,"$&/")+"/")+dt)),$.push(Gt)),1;dt=0;var Dt=Rt===""?".":Rt+":";if(H(U))for(var Vt=0;Vt<U.length;Vt++)Rt=U[Vt],nt=Dt+ct(Rt,Vt),dt+=z(Rt,$,ot,nt,Gt);else if(Vt=y(U),typeof Vt=="function")for(U=Vt.call(U),Vt=0;!(Rt=U.next()).done;)Rt=Rt.value,nt=Dt+ct(Rt,Vt++),dt+=z(Rt,$,ot,nt,Gt);else if(nt==="object"){if(typeof U.then=="function")return z(at(U),$,ot,Rt,Gt);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return dt}function G(U,$,ot){if(U==null)return U;var Rt=[],Gt=0;return z(U,Rt,"","",function(nt){return $.call(ot,nt,Gt++)}),Rt}function K(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(ot){(U._status===0||U._status===-1)&&(U._status=1,U._result=ot)},function(ot){(U._status===0||U._status===-1)&&(U._status=2,U._result=ot)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var gt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},_t={map:G,forEach:function(U,$,ot){G(U,function(){$.apply(this,arguments)},ot)},count:function(U){var $=0;return G(U,function(){$++}),$},toArray:function(U){return G(U,function($){return $})||[]},only:function(U){if(!I(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return me.Activity=g,me.Children=_t,me.Component=x,me.Fragment=n,me.Profiler=l,me.PureComponent=D,me.StrictMode=s,me.Suspense=m,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,me.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},me.cache=function(U){return function(){return U.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(U,$,ot){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Rt=A({},U.props),Gt=U.key;if($!=null)for(nt in $.key!==void 0&&(Gt=""+$.key),$)!q.call($,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&$.ref===void 0||(Rt[nt]=$[nt]);var nt=arguments.length-2;if(nt===1)Rt.children=ot;else if(1<nt){for(var dt=Array(nt),Dt=0;Dt<nt;Dt++)dt[Dt]=arguments[Dt+2];Rt.children=dt}return T(U.type,Gt,Rt)},me.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},me.createElement=function(U,$,ot){var Rt,Gt={},nt=null;if($!=null)for(Rt in $.key!==void 0&&(nt=""+$.key),$)q.call($,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Gt[Rt]=$[Rt]);var dt=arguments.length-2;if(dt===1)Gt.children=ot;else if(1<dt){for(var Dt=Array(dt),Vt=0;Vt<dt;Vt++)Dt[Vt]=arguments[Vt+2];Gt.children=Dt}if(U&&U.defaultProps)for(Rt in dt=U.defaultProps,dt)Gt[Rt]===void 0&&(Gt[Rt]=dt[Rt]);return T(U,nt,Gt)},me.createRef=function(){return{current:null}},me.forwardRef=function(U){return{$$typeof:h,render:U}},me.isValidElement=I,me.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:K}},me.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},me.startTransition=function(U){var $=O.T,ot={};O.T=ot;try{var Rt=U(),Gt=O.S;Gt!==null&&Gt(ot,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(B,gt)}catch(nt){gt(nt)}finally{$!==null&&ot.types!==null&&($.types=ot.types),O.T=$}},me.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},me.use=function(U){return O.H.use(U)},me.useActionState=function(U,$,ot){return O.H.useActionState(U,$,ot)},me.useCallback=function(U,$){return O.H.useCallback(U,$)},me.useContext=function(U){return O.H.useContext(U)},me.useDebugValue=function(){},me.useDeferredValue=function(U,$){return O.H.useDeferredValue(U,$)},me.useEffect=function(U,$){return O.H.useEffect(U,$)},me.useEffectEvent=function(U){return O.H.useEffectEvent(U)},me.useId=function(){return O.H.useId()},me.useImperativeHandle=function(U,$,ot){return O.H.useImperativeHandle(U,$,ot)},me.useInsertionEffect=function(U,$){return O.H.useInsertionEffect(U,$)},me.useLayoutEffect=function(U,$){return O.H.useLayoutEffect(U,$)},me.useMemo=function(U,$){return O.H.useMemo(U,$)},me.useOptimistic=function(U,$){return O.H.useOptimistic(U,$)},me.useReducer=function(U,$,ot){return O.H.useReducer(U,$,ot)},me.useRef=function(U){return O.H.useRef(U)},me.useState=function(U){return O.H.useState(U)},me.useSyncExternalStore=function(U,$,ot){return O.H.useSyncExternalStore(U,$,ot)},me.useTransition=function(){return O.H.useTransition()},me.version="19.2.3",me}var i_;function ip(){return i_||(i_=1,xh.exports=Sy()),xh.exports}var Si=ip(),Sh={exports:{}},Yo={},yh={exports:{}},Mh={};var a_;function yy(){return a_||(a_=1,(function(r){function t(z,G){var K=z.length;z.push(G);t:for(;0<K;){var gt=K-1>>>1,_t=z[gt];if(0<l(_t,G))z[gt]=G,z[K]=_t,K=gt;else break t}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var G=z[0],K=z.pop();if(K!==G){z[0]=K;t:for(var gt=0,_t=z.length,U=_t>>>1;gt<U;){var $=2*(gt+1)-1,ot=z[$],Rt=$+1,Gt=z[Rt];if(0>l(ot,K))Rt<_t&&0>l(Gt,ot)?(z[gt]=Gt,z[Rt]=K,gt=Rt):(z[gt]=ot,z[$]=K,gt=$);else if(Rt<_t&&0>l(Gt,K))z[gt]=Gt,z[Rt]=K,gt=Rt;else break t}}return G}function l(z,G){var K=z.sortIndex-G.sortIndex;return K!==0?K:z.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var m=[],p=[],_=1,g=null,v=3,y=!1,b=!1,A=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(z){for(var G=n(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=z)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=n(p)}}function H(z){if(A=!1,L(z),!b)if(n(m)!==null)b=!0,B||(B=!0,j());else{var G=n(p);G!==null&&at(H,G.startTime-z)}}var B=!1,O=-1,q=5,T=-1;function w(){return M?!0:!(r.unstable_now()-T<q)}function I(){if(M=!1,B){var z=r.unstable_now();T=z;var G=!0;try{t:{b=!1,A&&(A=!1,F(O),O=-1),y=!0;var K=v;try{e:{for(L(z),g=n(m);g!==null&&!(g.expirationTime>z&&w());){var gt=g.callback;if(typeof gt=="function"){g.callback=null,v=g.priorityLevel;var _t=gt(g.expirationTime<=z);if(z=r.unstable_now(),typeof _t=="function"){g.callback=_t,L(z),G=!0;break e}g===n(m)&&s(m),L(z)}else s(m);g=n(m)}if(g!==null)G=!0;else{var U=n(p);U!==null&&at(H,U.startTime-z),G=!1}}break t}finally{g=null,v=K,y=!1}G=void 0}}finally{G?j():B=!1}}}var j;if(typeof D=="function")j=function(){D(I)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ct=tt.port2;tt.port1.onmessage=I,j=function(){ct.postMessage(null)}}else j=function(){x(I,0)};function at(z,G){O=x(function(){z(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(z){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var K=v;v=G;try{return z()}finally{v=K}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=v;v=z;try{return G()}finally{v=K}},r.unstable_scheduleCallback=function(z,G,K){var gt=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?gt+K:gt):K=gt,z){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=K+_t,z={id:_++,callback:G,priorityLevel:z,startTime:K,expirationTime:_t,sortIndex:-1},K>gt?(z.sortIndex=K,t(p,z),n(m)===null&&z===n(p)&&(A?(F(O),O=-1):A=!0,at(H,K-gt))):(z.sortIndex=_t,t(m,z),b||y||(b=!0,B||(B=!0,j()))),z},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(z){var G=v;return function(){var K=v;v=G;try{return z.apply(this,arguments)}finally{v=K}}}})(Mh)),Mh}var s_;function My(){return s_||(s_=1,yh.exports=yy()),yh.exports}var Eh={exports:{}},On={};var r_;function Ey(){if(r_)return On;r_=1;var r=ip();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},On.flushSync=function(m){var p=u.T,_=s.p;try{if(u.T=null,s.p=2,m)return m()}finally{u.T=p,s.p=_,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,_){return u.H.useFormState(m,p,_)},On.useFormStatus=function(){return u.H.useHostTransitionStatus()},On.version="19.2.3",On}var o_;function by(){if(o_)return Eh.exports;o_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Eh.exports=Ey(),Eh.exports}var l_;function Ty(){if(l_)return Yo;l_=1;var r=My(),t=ip(),n=by();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(o=f.return,o!==null){a=o;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return m(f),e;if(d===o)return m(f),i;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=f,o=d;else{for(var S=!1,R=f.child;R;){if(R===a){S=!0,a=f,o=d;break}if(R===o){S=!0,o=f,a=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===a){S=!0,a=d,o=f;break}if(R===o){S=!0,o=d,a=f;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case B:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case L:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:ct(e.type)||"Memo";case q:i=e._payload,e=e._init;try{return ct(e(i))}catch{}}return null}var at=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},gt=[],_t=-1;function U(e){return{current:e}}function $(e){0>_t||(e.current=gt[_t],gt[_t]=null,_t--)}function ot(e,i){_t++,gt[_t]=e.current,e.current=i}var Rt=U(null),Gt=U(null),nt=U(null),dt=U(null);function Dt(e,i){switch(ot(nt,i),ot(Gt,e),ot(Rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?E0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=E0(i),e=b0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(Rt),ot(Rt,e)}function Vt(){$(Rt),$(Gt),$(nt)}function Wt(e){e.memoizedState!==null&&ot(dt,e);var i=Rt.current,a=b0(i,e.type);i!==a&&(ot(Gt,e),ot(Rt,a))}function pe(e){Gt.current===e&&($(Rt),$(Gt)),dt.current===e&&($(dt),Vo._currentValue=K)}var ge,fe;function xt(e){if(ge===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ge=i&&i[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ge+e+fe}var At=!1;function Et(e,i){if(!e||At)return"";At=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ht){var rt=ht}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(ht){rt=ht}e.call(Mt.prototype)}}else{try{throw Error()}catch(ht){rt=ht}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ht){if(ht&&rt&&typeof ht.stack=="string")return[ht.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var V=S.split(`
`),it=R.split(`
`);for(f=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;f<it.length&&!it[f].includes("DetermineComponentFrameRoot");)f++;if(o===V.length||f===it.length)for(o=V.length-1,f=it.length-1;1<=o&&0<=f&&V[o]!==it[f];)f--;for(;1<=o&&0<=f;o--,f--)if(V[o]!==it[f]){if(o!==1||f!==1)do if(o--,f--,0>f||V[o]!==it[f]){var mt=`
`+V[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=f);break}}}finally{At=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?xt(a):""}function zt(e,i){switch(e.tag){case 26:case 27:case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return e.child!==i&&i!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return Et(e.type,!1);case 11:return Et(e.type.render,!1);case 1:return Et(e.type,!0);case 31:return xt("Activity");default:return""}}function P(e){try{var i="",a=null;do i+=zt(e,a),a=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ne=Object.prototype.hasOwnProperty,Bt=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,Lt=r.unstable_shouldYield,N=r.unstable_requestPaint,E=r.unstable_now,X=r.unstable_getCurrentPriorityLevel,ut=r.unstable_ImmediatePriority,pt=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,jt=r.log,se=r.unstable_setDisableYieldValue,bt=null,wt=null;function Yt(e){if(typeof jt=="function"&&se(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(bt,e)}catch{}}var Ht=Math.clz32?Math.clz32:W,Ot=Math.log,_e=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ot(e)/_e|0)|0}var Ft=256,Ct=262144,kt=4194304;function Tt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var f=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?f=Tt(o):(S&=R,S!==0?f=Tt(S):a||(a=R&~e,a!==0&&(f=Tt(a))))):(R=o&~d,R!==0?f=Tt(R):S!==0?f=Tt(S):a||(a=o&~e,a!==0&&(f=Tt(a)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:f}function Nt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ue(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ue(){var e=kt;return kt<<=1,(kt&62914560)===0&&(kt=4194304),e}function Te(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function pn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vn(e,i,a,o,f,d){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,V=e.expirationTimes,it=e.hiddenUpdates;for(a=S&~a;0<a;){var mt=31-Ht(a),Mt=1<<mt;R[mt]=0,V[mt]=-1;var rt=it[mt];if(rt!==null)for(it[mt]=null,mt=0;mt<rt.length;mt++){var ht=rt[mt];ht!==null&&(ht.lane&=-536870913)}a&=~Mt}o!==0&&Fi(e,o,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function Fi(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Ht(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function wa(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Ht(a),f=1<<o;f&i|e[o]&i&&(e[o]|=i),a&=~f}}function $i(e,i){var a=i&-i;return a=(a&42)!==0?1:Da(a),(a&(e.suspendedLanes|i))!==0?0:a}function Da(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ta(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ds(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Y0(e.type))}function kn(e,i){var a=G.p;try{return G.p=e,i()}finally{G.p=a}}var ci=Math.random().toString(36).slice(2),ln="__reactFiber$"+ci,Mn="__reactProps$"+ci,bi="__reactContainer$"+ci,qs="__reactEvents$"+ci,Ys="__reactListeners$"+ci,ml="__reactHandles$"+ci,no="__reactResources$"+ci,ps="__reactMarker$"+ci;function io(e){delete e[ln],delete e[Mn],delete e[qs],delete e[Ys],delete e[ml]}function La(e){var i=e[ln];if(i)return i;for(var a=e.parentNode;a;){if(i=a[bi]||a[ln]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=L0(e);e!==null;){if(a=e[ln])return a;e=L0(e)}return i}e=a,a=e.parentNode}return null}function Na(e){if(e=e[ln]||e[bi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ms(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Ua(e){var i=e[no];return i||(i=e[no]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function C(e){e[ps]=!0}var Z=new Set,lt={};function st(e,i){J(e,i),J(e+"Capture",i)}function J(e,i){for(lt[e]=i,e=0;e<i.length;e++)Z.add(i[e])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kt={},Xt={};function Qt(e){return ne.call(Xt,e)?!0:ne.call(Kt,e)?!1:It.test(e)?Xt[e]=!0:(Kt[e]=!0,!1)}function $t(e,i,a){if(Qt(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function oe(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function te(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}function le(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(e,i,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ze(e){if(!e._valueTracker){var i=Fe(e)?"checked":"value";e._valueTracker=Je(e,i,""+e[i])}}function Be(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=Fe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function ae(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ze=/[\n"\\]/g;function de(e){return e.replace(ze,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function En(e,i,a,o,f,d,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+le(i)):e.value!==""+le(i)&&(e.value=""+le(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?bn(e,S,le(i)):a!=null?bn(e,S,le(a)):o!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+le(R):e.removeAttribute("name")}function ea(e,i,a,o,f,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ze(e);return}a=a!=null?""+le(a):"",i=i!=null?""+le(i):a,R||i===e.value||(e.value=i),e.defaultValue=i}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ze(e)}function bn(e,i,a){i==="number"&&ae(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ui(e,i,a,o){if(e=e.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<e.length;a++)f=i.hasOwnProperty("$"+e[a].value),e[a].selected!==f&&(e[a].selected=f),f&&o&&(e[a].defaultSelected=!0)}else{for(a=""+le(a),i=null,f=0;f<e.length;f++){if(e[f].value===a){e[f].selected=!0,o&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function He(e,i,a){if(i!=null&&(i=""+le(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+le(a):""}function Tn(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(at(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=le(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ze(e)}function mn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||An.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function js(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var f in i)o=i[f],i.hasOwnProperty(f)&&a[f]!==o&&Rn(e,f,o)}else for(var d in i)i.hasOwnProperty(d)&&Rn(e,d,i[d])}function Ti(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var px=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return mx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var pu=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,Ks=null;function Mp(e){var i=Na(e);if(i&&(e=i.stateNode)){var a=e[Mn]||null;t:switch(e=i.stateNode,i.type){case"input":if(En(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var f=o[Mn]||null;if(!f)throw Error(s(90));En(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&Be(o)}break t;case"textarea":He(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&ui(e,!!a.multiple,i,!1)}}}var gu=!1;function Ep(e,i,a){if(gu)return e(i,a);gu=!0;try{var o=e(i);return o}finally{if(gu=!1,(Zs!==null||Ks!==null)&&(ic(),Zs&&(i=Zs,e=Ks,Ks=Zs=null,Mp(i),e)))for(i=0;i<e.length;i++)Mp(e[i])}}function ao(e,i){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(ia)try{var so={};Object.defineProperty(so,"passive",{get:function(){_u=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{_u=!1}var Oa=null,vu=null,_l=null;function bp(){if(_l)return _l;var e,i=vu,a=i.length,o,f="value"in Oa?Oa.value:Oa.textContent,d=f.length;for(e=0;e<a&&i[e]===f[e];e++);var S=a-e;for(o=1;o<=S&&i[a-o]===f[d-o];o++);return _l=f.slice(e,1<o?1-o:void 0)}function vl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function xl(){return!0}function Tp(){return!1}function Xn(e){function i(a,o,f,d,S){this._reactName=a,this._targetInst=f,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?xl:Tp,this.isPropagationStopped=Tp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Xn(gs),ro=g({},gs,{view:0,detail:0}),gx=Xn(ro),xu,Su,oo,yl=g({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(xu=e.screenX-oo.screenX,Su=e.screenY-oo.screenY):Su=xu=0,oo=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:Su}}),Ap=Xn(yl),_x=g({},yl,{dataTransfer:0}),vx=Xn(_x),xx=g({},ro,{relatedTarget:0}),yu=Xn(xx),Sx=g({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),yx=Xn(Sx),Mx=g({},gs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ex=Xn(Mx),bx=g({},gs,{data:0}),Rp=Xn(bx),Tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Rx[e])?!!i[e]:!1}function Mu(){return Cx}var wx=g({},ro,{key:function(e){if(e.key){var i=Tx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ax[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dx=Xn(wx),Lx=g({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Xn(Lx),Nx=g({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Ux=Xn(Nx),Ox=g({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Px=Xn(Ox),Fx=g({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=Xn(Fx),Ix=g({},gs,{newState:0,oldState:0}),Bx=Xn(Ix),Hx=[9,13,27,32],Eu=ia&&"CompositionEvent"in window,lo=null;ia&&"documentMode"in document&&(lo=document.documentMode);var Gx=ia&&"TextEvent"in window&&!lo,wp=ia&&(!Eu||lo&&8<lo&&11>=lo),Dp=" ",Lp=!1;function Np(e,i){switch(e){case"keyup":return Hx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qs=!1;function Vx(e,i){switch(e){case"compositionend":return Up(i);case"keypress":return i.which!==32?null:(Lp=!0,Dp);case"textInput":return e=i.data,e===Dp&&Lp?null:e;default:return null}}function kx(e,i){if(Qs)return e==="compositionend"||!Eu&&Np(e,i)?(e=bp(),_l=vu=Oa=null,Qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return wp&&i.locale!=="ko"?null:i.data;default:return null}}var Xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Xx[e.type]:i==="textarea"}function Pp(e,i,a,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,i=uc(i,"onChange"),0<i.length&&(a=new Sl("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var co=null,uo=null;function Wx(e){_0(e,0)}function Ml(e){var i=ms(e);if(Be(i))return e}function Fp(e,i){if(e==="change")return i}var zp=!1;if(ia){var bu;if(ia){var Tu="oninput"in document;if(!Tu){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),Tu=typeof Ip.oninput=="function"}bu=Tu}else bu=!1;zp=bu&&(!document.documentMode||9<document.documentMode)}function Bp(){co&&(co.detachEvent("onpropertychange",Hp),uo=co=null)}function Hp(e){if(e.propertyName==="value"&&Ml(uo)){var i=[];Pp(i,uo,e,mu(e)),Ep(Wx,i)}}function qx(e,i,a){e==="focusin"?(Bp(),co=i,uo=a,co.attachEvent("onpropertychange",Hp)):e==="focusout"&&Bp()}function Yx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(uo)}function jx(e,i){if(e==="click")return Ml(i)}function Zx(e,i){if(e==="input"||e==="change")return Ml(i)}function Kx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var $n=typeof Object.is=="function"?Object.is:Kx;function fo(e,i){if($n(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var f=a[o];if(!ne.call(i,f)||!$n(e[f],i[f]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vp(e,i){var a=Gp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gp(a)}}function kp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?kp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ae(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ae(e.document)}return i}function Au(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Qx=ia&&"documentMode"in document&&11>=document.documentMode,Js=null,Ru=null,ho=null,Cu=!1;function Wp(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||Js==null||Js!==ae(o)||(o=Js,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=uc(Ru,"onSelect"),0<o.length&&(i=new Sl("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=Js)))}function _s(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var $s={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},wu={},qp={};ia&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function vs(e){if(wu[e])return wu[e];if(!$s[e])return e;var i=$s[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in qp)return wu[e]=i[a];return e}var Yp=vs("animationend"),jp=vs("animationiteration"),Zp=vs("animationstart"),Jx=vs("transitionrun"),$x=vs("transitionstart"),tS=vs("transitioncancel"),Kp=vs("transitionend"),Qp=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function Ai(e,i){Qp.set(e,i),st(i,[e])}var El=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],tr=0,Lu=0;function bl(){for(var e=tr,i=Lu=tr=0;i<e;){var a=fi[i];fi[i++]=null;var o=fi[i];fi[i++]=null;var f=fi[i];fi[i++]=null;var d=fi[i];if(fi[i++]=null,o!==null&&f!==null){var S=o.pending;S===null?f.next=f:(f.next=S.next,S.next=f),o.pending=f}d!==0&&Jp(a,f,d)}}function Tl(e,i,a,o){fi[tr++]=e,fi[tr++]=i,fi[tr++]=a,fi[tr++]=o,Lu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Nu(e,i,a,o){return Tl(e,i,a,o),Al(e)}function xs(e,i){return Tl(e,null,null,i),Al(e)}function Jp(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var f=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-Ht(a),e=d.hiddenUpdates,o=e[f],o===null?e[f]=[i]:o.push(i),i.lane=a|536870912),d):null}function Al(e){if(50<Po)throw Po=0,Vf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var er={};function eS(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,i,a,o){return new eS(e,i,a,o)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,i){var a=e.alternate;return a===null?(a=ti(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $p(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Rl(e,i,a,o,f,d){var S=0;if(o=e,typeof e=="function")Uu(e)&&(S=1);else if(typeof e=="string")S=ry(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case T:return e=ti(31,a,i,f),e.elementType=T,e.lanes=d,e;case A:return Ss(a.children,f,d,i);case M:S=8,f|=24;break;case x:return e=ti(12,a,i,f|2),e.elementType=x,e.lanes=d,e;case H:return e=ti(13,a,i,f),e.elementType=H,e.lanes=d,e;case B:return e=ti(19,a,i,f),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break t;case F:S=9;break t;case L:S=11;break t;case O:S=14;break t;case q:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=ti(S,a,i,f),i.elementType=e,i.type=o,i.lanes=d,i}function Ss(e,i,a,o){return e=ti(7,e,o,i),e.lanes=a,e}function Ou(e,i,a){return e=ti(6,e,null,i),e.lanes=a,e}function tm(e){var i=ti(18,null,null,0);return i.stateNode=e,i}function Pu(e,i,a){return i=ti(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var em=new WeakMap;function hi(e,i){if(typeof e=="object"&&e!==null){var a=em.get(e);return a!==void 0?a:(i={value:e,source:i,stack:P(i)},em.set(e,i),i)}return{value:e,source:i,stack:P(i)}}var nr=[],ir=0,Cl=null,po=0,di=[],pi=0,Pa=null,zi=1,Ii="";function sa(e,i){nr[ir++]=po,nr[ir++]=Cl,Cl=e,po=i}function nm(e,i,a){di[pi++]=zi,di[pi++]=Ii,di[pi++]=Pa,Pa=e;var o=zi;e=Ii;var f=32-Ht(o)-1;o&=~(1<<f),a+=1;var d=32-Ht(i)+f;if(30<d){var S=f-f%5;d=(o&(1<<S)-1).toString(32),o>>=S,f-=S,zi=1<<32-Ht(i)+f|a<<f|o,Ii=d+e}else zi=1<<d|a<<f|o,Ii=e}function Fu(e){e.return!==null&&(sa(e,1),nm(e,1,0))}function zu(e){for(;e===Cl;)Cl=nr[--ir],nr[ir]=null,po=nr[--ir],nr[ir]=null;for(;e===Pa;)Pa=di[--pi],di[pi]=null,Ii=di[--pi],di[pi]=null,zi=di[--pi],di[pi]=null}function im(e,i){di[pi++]=zi,di[pi++]=Ii,di[pi++]=Pa,zi=i.id,Ii=i.overflow,Pa=e}var Cn=null,Ke=null,we=!1,Fa=null,mi=!1,Iu=Error(s(519));function za(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(hi(i,e)),Iu}function am(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[ln]=e,i[Mn]=o,a){case"dialog":be("cancel",i),be("close",i);break;case"iframe":case"object":case"embed":be("load",i);break;case"video":case"audio":for(a=0;a<zo.length;a++)be(zo[a],i);break;case"source":be("error",i);break;case"img":case"image":case"link":be("error",i),be("load",i);break;case"details":be("toggle",i);break;case"input":be("invalid",i),ea(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":be("invalid",i);break;case"textarea":be("invalid",i),Tn(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||y0(i.textContent,a)?(o.popover!=null&&(be("beforetoggle",i),be("toggle",i)),o.onScroll!=null&&be("scroll",i),o.onScrollEnd!=null&&be("scrollend",i),o.onClick!=null&&(i.onclick=na),i=!0):i=!1,i||za(e,!0)}function sm(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Cn=Cn.return}}function ar(e){if(e!==Cn)return!1;if(!we)return sm(e),we=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ih(e.type,e.memoizedProps)),a=!a),a&&Ke&&za(e),sm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=D0(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=D0(e)}else i===27?(i=Ke,Qa(e.type)?(e=lh,lh=null,Ke=e):Ke=i):Ke=Cn?_i(e.stateNode.nextSibling):null;return!0}function ys(){Ke=Cn=null,we=!1}function Bu(){var e=Fa;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Fa=null),e}function mo(e){Fa===null?Fa=[e]:Fa.push(e)}var Hu=U(null),Ms=null,ra=null;function Ia(e,i,a){ot(Hu,i._currentValue),i._currentValue=a}function oa(e){e._currentValue=Hu.current,$(Hu)}function Gu(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function Vu(e,i,a,o){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var S=f.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=f;for(var V=0;V<i.length;V++)if(R.context===i[V]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Gu(d.return,a,e),o||(S=null);break t}d=R.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(s(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Gu(S,a,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function sr(e,i,a,o){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=f.type;$n(f.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(f===dt.current){if(S=f.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}f=f.return}e!==null&&Vu(i,e,a,o),i.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Es(e){Ms=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return rm(Ms,e)}function Dl(e,i){return Ms===null&&Es(e),rm(e,i)}function rm(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ra===null){if(e===null)throw Error(s(308));ra=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ra=ra.next=i;return a}var nS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},iS=r.unstable_scheduleCallback,aS=r.unstable_NormalPriority,cn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new nS,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&iS(aS,function(){e.controller.abort()})}var _o=null,Xu=0,rr=0,or=null;function sS(e,i){if(_o===null){var a=_o=[];Xu=0,rr=jf(),or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xu++,i.then(om,om),i}function om(){if(--Xu===0&&_o!==null){or!==null&&(or.status="fulfilled");var e=_o;_o=null,rr=0,or=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function rS(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(o.status="rejected",o.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),o}var lm=z.S;z.S=function(e,i){Wg=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&sS(e,i),lm!==null&&lm(e,i)};var bs=U(null);function Wu(){var e=bs.current;return e!==null?e:je.pooledCache}function Ll(e,i){i===null?ot(bs,bs.current):ot(bs,i.pool)}function cm(){var e=Wu();return e===null?null:{parent:cn._currentValue,pool:e}}var lr=Error(s(460)),qu=Error(s(474)),Nl=Error(s(542)),Ul={then:function(){}};function um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fm(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(na,na),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dm(e),e;default:if(typeof i.status=="string")i.then(na,na);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=o}},function(o){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dm(e),e}throw As=i,lr}}function Ts(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(As=a,lr):a}}var As=null;function hm(){if(As===null)throw Error(s(459));var e=As;return As=null,e}function dm(e){if(e===lr||e===Nl)throw Error(s(483))}var cr=null,vo=0;function Ol(e){var i=vo;return vo+=1,cr===null&&(cr=[]),fm(cr,e,i)}function xo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Pl(e,i){throw i.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function pm(e){function i(Q,k){if(e){var et=Q.deletions;et===null?(Q.deletions=[k],Q.flags|=16):et.push(k)}}function a(Q,k){if(!e)return null;for(;k!==null;)i(Q,k),k=k.sibling;return null}function o(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function f(Q,k){return Q=aa(Q,k),Q.index=0,Q.sibling=null,Q}function d(Q,k,et){return Q.index=et,e?(et=Q.alternate,et!==null?(et=et.index,et<k?(Q.flags|=67108866,k):et):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function S(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,k,et,St){return k===null||k.tag!==6?(k=Ou(et,Q.mode,St),k.return=Q,k):(k=f(k,et),k.return=Q,k)}function V(Q,k,et,St){var re=et.type;return re===A?mt(Q,k,et.props.children,St,et.key):k!==null&&(k.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===q&&Ts(re)===k.type)?(k=f(k,et.props),xo(k,et),k.return=Q,k):(k=Rl(et.type,et.key,et.props,null,Q.mode,St),xo(k,et),k.return=Q,k)}function it(Q,k,et,St){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=Pu(et,Q.mode,St),k.return=Q,k):(k=f(k,et.children||[]),k.return=Q,k)}function mt(Q,k,et,St,re){return k===null||k.tag!==7?(k=Ss(et,Q.mode,St,re),k.return=Q,k):(k=f(k,et),k.return=Q,k)}function Mt(Q,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ou(""+k,Q.mode,et),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return et=Rl(k.type,k.key,k.props,null,Q.mode,et),xo(et,k),et.return=Q,et;case b:return k=Pu(k,Q.mode,et),k.return=Q,k;case q:return k=Ts(k),Mt(Q,k,et)}if(at(k)||j(k))return k=Ss(k,Q.mode,et,null),k.return=Q,k;if(typeof k.then=="function")return Mt(Q,Ol(k),et);if(k.$$typeof===D)return Mt(Q,Dl(Q,k),et);Pl(Q,k)}return null}function rt(Q,k,et,St){var re=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return re!==null?null:R(Q,k,""+et,St);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===re?V(Q,k,et,St):null;case b:return et.key===re?it(Q,k,et,St):null;case q:return et=Ts(et),rt(Q,k,et,St)}if(at(et)||j(et))return re!==null?null:mt(Q,k,et,St,null);if(typeof et.then=="function")return rt(Q,k,Ol(et),St);if(et.$$typeof===D)return rt(Q,k,Dl(Q,et),St);Pl(Q,et)}return null}function ht(Q,k,et,St,re){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return Q=Q.get(et)||null,R(k,Q,""+St,re);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case y:return Q=Q.get(St.key===null?et:St.key)||null,V(k,Q,St,re);case b:return Q=Q.get(St.key===null?et:St.key)||null,it(k,Q,St,re);case q:return St=Ts(St),ht(Q,k,et,St,re)}if(at(St)||j(St))return Q=Q.get(et)||null,mt(k,Q,St,re,null);if(typeof St.then=="function")return ht(Q,k,et,Ol(St),re);if(St.$$typeof===D)return ht(Q,k,et,Dl(k,St),re);Pl(k,St)}return null}function Jt(Q,k,et,St){for(var re=null,Oe=null,ee=k,xe=k=0,Re=null;ee!==null&&xe<et.length;xe++){ee.index>xe?(Re=ee,ee=null):Re=ee.sibling;var Pe=rt(Q,ee,et[xe],St);if(Pe===null){ee===null&&(ee=Re);break}e&&ee&&Pe.alternate===null&&i(Q,ee),k=d(Pe,k,xe),Oe===null?re=Pe:Oe.sibling=Pe,Oe=Pe,ee=Re}if(xe===et.length)return a(Q,ee),we&&sa(Q,xe),re;if(ee===null){for(;xe<et.length;xe++)ee=Mt(Q,et[xe],St),ee!==null&&(k=d(ee,k,xe),Oe===null?re=ee:Oe.sibling=ee,Oe=ee);return we&&sa(Q,xe),re}for(ee=o(ee);xe<et.length;xe++)Re=ht(ee,Q,xe,et[xe],St),Re!==null&&(e&&Re.alternate!==null&&ee.delete(Re.key===null?xe:Re.key),k=d(Re,k,xe),Oe===null?re=Re:Oe.sibling=Re,Oe=Re);return e&&ee.forEach(function(ns){return i(Q,ns)}),we&&sa(Q,xe),re}function ce(Q,k,et,St){if(et==null)throw Error(s(151));for(var re=null,Oe=null,ee=k,xe=k=0,Re=null,Pe=et.next();ee!==null&&!Pe.done;xe++,Pe=et.next()){ee.index>xe?(Re=ee,ee=null):Re=ee.sibling;var ns=rt(Q,ee,Pe.value,St);if(ns===null){ee===null&&(ee=Re);break}e&&ee&&ns.alternate===null&&i(Q,ee),k=d(ns,k,xe),Oe===null?re=ns:Oe.sibling=ns,Oe=ns,ee=Re}if(Pe.done)return a(Q,ee),we&&sa(Q,xe),re;if(ee===null){for(;!Pe.done;xe++,Pe=et.next())Pe=Mt(Q,Pe.value,St),Pe!==null&&(k=d(Pe,k,xe),Oe===null?re=Pe:Oe.sibling=Pe,Oe=Pe);return we&&sa(Q,xe),re}for(ee=o(ee);!Pe.done;xe++,Pe=et.next())Pe=ht(ee,Q,xe,Pe.value,St),Pe!==null&&(e&&Pe.alternate!==null&&ee.delete(Pe.key===null?xe:Pe.key),k=d(Pe,k,xe),Oe===null?re=Pe:Oe.sibling=Pe,Oe=Pe);return e&&ee.forEach(function(_y){return i(Q,_y)}),we&&sa(Q,xe),re}function qe(Q,k,et,St){if(typeof et=="object"&&et!==null&&et.type===A&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var re=et.key;k!==null;){if(k.key===re){if(re=et.type,re===A){if(k.tag===7){a(Q,k.sibling),St=f(k,et.props.children),St.return=Q,Q=St;break t}}else if(k.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===q&&Ts(re)===k.type){a(Q,k.sibling),St=f(k,et.props),xo(St,et),St.return=Q,Q=St;break t}a(Q,k);break}else i(Q,k);k=k.sibling}et.type===A?(St=Ss(et.props.children,Q.mode,St,et.key),St.return=Q,Q=St):(St=Rl(et.type,et.key,et.props,null,Q.mode,St),xo(St,et),St.return=Q,Q=St)}return S(Q);case b:t:{for(re=et.key;k!==null;){if(k.key===re)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(Q,k.sibling),St=f(k,et.children||[]),St.return=Q,Q=St;break t}else{a(Q,k);break}else i(Q,k);k=k.sibling}St=Pu(et,Q.mode,St),St.return=Q,Q=St}return S(Q);case q:return et=Ts(et),qe(Q,k,et,St)}if(at(et))return Jt(Q,k,et,St);if(j(et)){if(re=j(et),typeof re!="function")throw Error(s(150));return et=re.call(et),ce(Q,k,et,St)}if(typeof et.then=="function")return qe(Q,k,Ol(et),St);if(et.$$typeof===D)return qe(Q,k,Dl(Q,et),St);Pl(Q,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(Q,k.sibling),St=f(k,et),St.return=Q,Q=St):(a(Q,k),St=Ou(et,Q.mode,St),St.return=Q,Q=St),S(Q)):a(Q,k)}return function(Q,k,et,St){try{vo=0;var re=qe(Q,k,et,St);return cr=null,re}catch(ee){if(ee===lr||ee===Nl)throw ee;var Oe=ti(29,ee,null,Q.mode);return Oe.lanes=St,Oe.return=Q,Oe}}}var Rs=pm(!0),mm=pm(!1),Ba=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ie&2)!==0){var f=o.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),o.pending=i,i=Al(e),Jp(e,null,a),i}return Tl(e,o,i,a),Al(e)}function So(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,wa(e,a)}}function Zu(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Ku=!1;function yo(){if(Ku){var e=or;if(e!==null)throw e}}function Mo(e,i,a,o){Ku=!1;var f=e.updateQueue;Ba=!1;var d=f.firstBaseUpdate,S=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var V=R,it=V.next;V.next=null,S===null?d=it:S.next=it,S=V;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,R=mt.lastBaseUpdate,R!==S&&(R===null?mt.firstBaseUpdate=it:R.next=it,mt.lastBaseUpdate=V))}if(d!==null){var Mt=f.baseState;S=0,mt=it=V=null,R=d;do{var rt=R.lane&-536870913,ht=rt!==R.lane;if(ht?(Ae&rt)===rt:(o&rt)===rt){rt!==0&&rt===rr&&(Ku=!0),mt!==null&&(mt=mt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Jt=e,ce=R;rt=i;var qe=a;switch(ce.tag){case 1:if(Jt=ce.payload,typeof Jt=="function"){Mt=Jt.call(qe,Mt,rt);break t}Mt=Jt;break t;case 3:Jt.flags=Jt.flags&-65537|128;case 0:if(Jt=ce.payload,rt=typeof Jt=="function"?Jt.call(qe,Mt,rt):Jt,rt==null)break t;Mt=g({},Mt,rt);break t;case 2:Ba=!0}}rt=R.callback,rt!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=f.callbacks,ht===null?f.callbacks=[rt]:ht.push(rt))}else ht={lane:rt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},mt===null?(it=mt=ht,V=Mt):mt=mt.next=ht,S|=rt;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;ht=R,R=ht.next,ht.next=null,f.lastBaseUpdate=ht,f.shared.pending=null}}while(!0);mt===null&&(V=Mt),f.baseState=V,f.firstBaseUpdate=it,f.lastBaseUpdate=mt,d===null&&(f.shared.lanes=0),qa|=S,e.lanes=S,e.memoizedState=Mt}}function gm(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function _m(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gm(a[e],i)}var ur=U(null),Fl=U(0);function vm(e,i){e=ga,ot(Fl,e),ot(ur,i),ga=e|i.baseLanes}function Qu(){ot(Fl,ga),ot(ur,ur.current)}function Ju(){ga=Fl.current,$(ur),$(Fl)}var ei=U(null),gi=null;function Va(e){var i=e.alternate;ot(rn,rn.current&1),ot(ei,e),gi===null&&(i===null||ur.current!==null||i.memoizedState!==null)&&(gi=e)}function $u(e){ot(rn,rn.current),ot(ei,e),gi===null&&(gi=e)}function xm(e){e.tag===22?(ot(rn,rn.current),ot(ei,e),gi===null&&(gi=e)):ka()}function ka(){ot(rn,rn.current),ot(ei,ei.current)}function ni(e){$(ei),gi===e&&(gi=null),$(rn)}var rn=U(0);function zl(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rh(a)||oh(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var la=0,ve=null,Xe=null,un=null,Il=!1,fr=!1,Cs=!1,Bl=0,Eo=0,hr=null,oS=0;function nn(){throw Error(s(321))}function tf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!$n(e[a],i[a]))return!1;return!0}function ef(e,i,a,o,f,d){return la=d,ve=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?ng:_f,Cs=!1,d=a(o,f),Cs=!1,fr&&(d=ym(i,a,o,f)),Sm(e),d}function Sm(e){z.H=Ao;var i=Xe!==null&&Xe.next!==null;if(la=0,un=Xe=ve=null,Il=!1,Eo=0,hr=null,i)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&wl(e)&&(fn=!0))}function ym(e,i,a,o){ve=e;var f=0;do{if(fr&&(hr=null),Eo=0,fr=!1,25<=f)throw Error(s(301));if(f+=1,un=Xe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=ig,d=i(a,o)}while(fr);return d}function lS(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?bo(i):i,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(ve.flags|=1024),i}function nf(){var e=Bl!==0;return Bl=0,e}function af(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function sf(e){if(Il){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Il=!1}la=0,un=Xe=ve=null,fr=!1,Eo=Bl=0,hr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ve.memoizedState=un=e:un=un.next=e,un}function on(){if(Xe===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var i=un===null?ve.memoizedState:un.next;if(i!==null)un=i,Xe=e;else{if(e===null)throw ve.alternate===null?Error(s(467)):Error(s(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},un===null?ve.memoizedState=un=e:un=un.next=e}return un}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bo(e){var i=Eo;return Eo+=1,hr===null&&(hr=[]),e=fm(hr,e,i),i=ve,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?ng:_f),e}function Gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bo(e);if(e.$$typeof===D)return wn(e)}throw Error(s(438,String(e)))}function rf(e){var i=null,a=ve.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=ve.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Hl(),ve.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=w;return i.index++,a}function ca(e,i){return typeof i=="function"?i(e):i}function Vl(e){var i=on();return of(i,Xe,e)}function of(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var f=e.baseQueue,d=o.pending;if(d!==null){if(f!==null){var S=f.next;f.next=d.next,d.next=S}i.baseQueue=f=d,o.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var R=S=null,V=null,it=i,mt=!1;do{var Mt=it.lane&-536870913;if(Mt!==it.lane?(Ae&Mt)===Mt:(la&Mt)===Mt){var rt=it.revertLane;if(rt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),Mt===rr&&(mt=!0);else if((la&rt)===rt){it=it.next,rt===rr&&(mt=!0);continue}else Mt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(R=V=Mt,S=d):V=V.next=Mt,ve.lanes|=rt,qa|=rt;Mt=it.action,Cs&&a(d,Mt),d=it.hasEagerState?it.eagerState:a(d,Mt)}else rt={lane:Mt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(R=V=rt,S=d):V=V.next=rt,ve.lanes|=Mt,qa|=Mt;it=it.next}while(it!==null&&it!==i);if(V===null?S=d:V.next=R,!$n(d,e.memoizedState)&&(fn=!0,mt&&(a=or,a!==null)))throw a;e.memoizedState=d,e.baseState=S,e.baseQueue=V,o.lastRenderedState=d}return f===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function lf(e){var i=on(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var S=f=f.next;do d=e(d,S.action),S=S.next;while(S!==f);$n(d,i.memoizedState)||(fn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function Mm(e,i,a){var o=ve,f=on(),d=we;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var S=!$n((Xe||f).memoizedState,a);if(S&&(f.memoizedState=a,fn=!0),f=f.queue,ff(Tm.bind(null,o,f,e),[e]),f.getSnapshot!==i||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,dr(9,{destroy:void 0},bm.bind(null,o,f,a,i),null),je===null)throw Error(s(349));d||(la&127)!==0||Em(o,i,a)}return a}function Em(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=ve.updateQueue,i===null?(i=Hl(),ve.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function bm(e,i,a,o){i.value=a,i.getSnapshot=o,Am(i)&&Rm(e)}function Tm(e,i,a){return a(function(){Am(i)&&Rm(e)})}function Am(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!$n(e,a)}catch{return!0}}function Rm(e){var i=xs(e,2);i!==null&&Zn(i,e,2)}function cf(e){var i=In();if(typeof e=="function"){var a=e;if(e=a(),Cs){Yt(!0);try{a()}finally{Yt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},i}function Cm(e,i,a,o){return e.baseState=a,of(e,Xe,typeof o=="function"?o:ca)}function cS(e,i,a,o,f){if(Wl(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,wm(i,d)):(d.next=a.next,i.pending=a.next=d)}}function wm(e,i){var a=i.action,o=i.payload,f=e.state;if(i.isTransition){var d=z.T,S={};z.T=S;try{var R=a(f,o),V=z.S;V!==null&&V(S,R),Dm(e,i,R)}catch(it){uf(e,i,it)}finally{d!==null&&S.types!==null&&(d.types=S.types),z.T=d}}else try{d=a(f,o),Dm(e,i,d)}catch(it){uf(e,i,it)}}function Dm(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Lm(e,i,o)},function(o){return uf(e,i,o)}):Lm(e,i,a)}function Lm(e,i,a){i.status="fulfilled",i.value=a,Nm(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,wm(e,a)))}function uf(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Nm(i),i=i.next;while(i!==o)}e.action=null}function Nm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Um(e,i){return i}function Om(e,i){if(we){var a=je.formState;if(a!==null){t:{var o=ve;if(we){if(Ke){e:{for(var f=Ke,d=mi;f.nodeType!==8;){if(!d){f=null;break e}if(f=_i(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Ke=_i(f.nextSibling),o=f.data==="F!";break t}}za(o)}o=!1}o&&(i=a[0])}}return a=In(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Um,lastRenderedState:i},a.queue=o,a=$m.bind(null,ve,o),o.dispatch=a,o=cf(!1),d=gf.bind(null,ve,!1,o.queue),o=In(),f={state:i,dispatch:null,action:e,pending:null},o.queue=f,a=cS.bind(null,ve,f,d,a),f.dispatch=a,o.memoizedState=e,[i,a,!1]}function Pm(e){var i=on();return Fm(i,Xe,e)}function Fm(e,i,a){if(i=of(e,i,Um)[0],e=Vl(ca)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=bo(i)}catch(S){throw S===lr?Nl:S}else o=i;i=on();var f=i.queue,d=f.dispatch;return a!==i.memoizedState&&(ve.flags|=2048,dr(9,{destroy:void 0},uS.bind(null,f,a),null)),[o,d,e]}function uS(e,i){e.action=i}function zm(e){var i=on(),a=Xe;if(a!==null)return Fm(i,a,e);on(),i=i.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function dr(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=ve.updateQueue,i===null&&(i=Hl(),ve.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Im(){return on().memoizedState}function kl(e,i,a,o){var f=In();ve.flags|=e,f.memoizedState=dr(1|i,{destroy:void 0},a,o===void 0?null:o)}function Xl(e,i,a,o){var f=on();o=o===void 0?null:o;var d=f.memoizedState.inst;Xe!==null&&o!==null&&tf(o,Xe.memoizedState.deps)?f.memoizedState=dr(i,d,a,o):(ve.flags|=e,f.memoizedState=dr(1|i,d,a,o))}function Bm(e,i){kl(8390656,8,e,i)}function ff(e,i){Xl(2048,8,e,i)}function fS(e){ve.flags|=4;var i=ve.updateQueue;if(i===null)i=Hl(),ve.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function Hm(e){var i=on().memoizedState;return fS({ref:i,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function Gm(e,i){return Xl(4,2,e,i)}function Vm(e,i){return Xl(4,4,e,i)}function km(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Xm(e,i,a){a=a!=null?a.concat([e]):null,Xl(4,4,km.bind(null,i,e),a)}function hf(){}function Wm(e,i){var a=on();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&tf(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function qm(e,i){var a=on();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&tf(i,o[1]))return o[0];if(o=e(),Cs){Yt(!0);try{e()}finally{Yt(!1)}}return a.memoizedState=[o,i],o}function df(e,i,a){return a===void 0||(la&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=Yg(),ve.lanes|=e,qa|=e,a)}function Ym(e,i,a,o){return $n(a,i)?a:ur.current!==null?(e=df(e,a,o),$n(e,i)||(fn=!0),e):(la&42)===0||(la&1073741824)!==0&&(Ae&261930)===0?(fn=!0,e.memoizedState=a):(e=Yg(),ve.lanes|=e,qa|=e,i)}function jm(e,i,a,o,f){var d=G.p;G.p=d!==0&&8>d?d:8;var S=z.T,R={};z.T=R,gf(e,!1,i,a);try{var V=f(),it=z.S;if(it!==null&&it(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var mt=rS(V,o);To(e,i,mt,si(e))}else To(e,i,o,si(e))}catch(Mt){To(e,i,{then:function(){},status:"rejected",reason:Mt},si())}finally{G.p=d,S!==null&&R.types!==null&&(S.types=R.types),z.T=S}}function hS(){}function pf(e,i,a,o){if(e.tag!==5)throw Error(s(476));var f=Zm(e).queue;jm(e,f,i,K,a===null?hS:function(){return Km(e),a(o)})}function Zm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:K},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Km(e){var i=Zm(e);i.next===null&&(i=e.alternate.memoizedState),To(e,i.next.queue,{},si())}function mf(){return wn(Vo)}function Qm(){return on().memoizedState}function Jm(){return on().memoizedState}function dS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=si();e=Ha(a);var o=Ga(i,e,a);o!==null&&(Zn(o,i,a),So(o,i,a)),i={cache:ku()},e.payload=i;return}i=i.return}}function pS(e,i,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wl(e)?tg(i,a):(a=Nu(e,i,a,o),a!==null&&(Zn(a,e,o),eg(a,i,o)))}function $m(e,i,a){var o=si();To(e,i,a,o)}function To(e,i,a,o){var f={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wl(e))tg(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,R=d(S,a);if(f.hasEagerState=!0,f.eagerState=R,$n(R,S))return Tl(e,i,f,0),je===null&&bl(),!1}catch{}if(a=Nu(e,i,f,o),a!==null)return Zn(a,e,o),eg(a,i,o),!0}return!1}function gf(e,i,a,o){if(o={lane:2,revertLane:jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(e)){if(i)throw Error(s(479))}else i=Nu(e,a,o,2),i!==null&&Zn(i,e,2)}function Wl(e){var i=e.alternate;return e===ve||i!==null&&i===ve}function tg(e,i){fr=Il=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function eg(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,wa(e,a)}}var Ao={readContext:wn,use:Gl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};Ao.useEffectEvent=nn;var ng={readContext:wn,use:Gl,useCallback:function(e,i){return In().memoizedState=[e,i===void 0?null:i],e},useContext:wn,useEffect:Bm,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,kl(4194308,4,km.bind(null,i,e),a)},useLayoutEffect:function(e,i){return kl(4194308,4,e,i)},useInsertionEffect:function(e,i){kl(4,2,e,i)},useMemo:function(e,i){var a=In();i=i===void 0?null:i;var o=e();if(Cs){Yt(!0);try{e()}finally{Yt(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=In();if(a!==void 0){var f=a(i);if(Cs){Yt(!0);try{a(i)}finally{Yt(!1)}}}else f=i;return o.memoizedState=o.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},o.queue=e,e=e.dispatch=pS.bind(null,ve,e),[o.memoizedState,e]},useRef:function(e){var i=In();return e={current:e},i.memoizedState=e},useState:function(e){e=cf(e);var i=e.queue,a=$m.bind(null,ve,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(e,i){var a=In();return df(a,e,i)},useTransition:function(){var e=cf(!1);return e=jm.bind(null,ve,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=ve,f=In();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),je===null)throw Error(s(349));(Ae&127)!==0||Em(o,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,Bm(Tm.bind(null,o,d,e),[e]),o.flags|=2048,dr(9,{destroy:void 0},bm.bind(null,o,d,a,i),null),a},useId:function(){var e=In(),i=je.identifierPrefix;if(we){var a=Ii,o=zi;a=(o&~(1<<32-Ht(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=Bl++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=oS++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:mf,useFormState:Om,useActionState:Om,useOptimistic:function(e){var i=In();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=gf.bind(null,ve,!0,a),a.dispatch=i,[e,i]},useMemoCache:rf,useCacheRefresh:function(){return In().memoizedState=dS.bind(null,ve)},useEffectEvent:function(e){var i=In(),a={impl:e};return i.memoizedState=a,function(){if((Ie&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},_f={readContext:wn,use:Gl,useCallback:Wm,useContext:wn,useEffect:ff,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:Vl,useRef:Im,useState:function(){return Vl(ca)},useDebugValue:hf,useDeferredValue:function(e,i){var a=on();return Ym(a,Xe.memoizedState,e,i)},useTransition:function(){var e=Vl(ca)[0],i=on().memoizedState;return[typeof e=="boolean"?e:bo(e),i]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:mf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e,i){var a=on();return Cm(a,Xe,e,i)},useMemoCache:rf,useCacheRefresh:Jm};_f.useEffectEvent=Hm;var ig={readContext:wn,use:Gl,useCallback:Wm,useContext:wn,useEffect:ff,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:lf,useRef:Im,useState:function(){return lf(ca)},useDebugValue:hf,useDeferredValue:function(e,i){var a=on();return Xe===null?df(a,e,i):Ym(a,Xe.memoizedState,e,i)},useTransition:function(){var e=lf(ca)[0],i=on().memoizedState;return[typeof e=="boolean"?e:bo(e),i]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:mf,useFormState:zm,useActionState:zm,useOptimistic:function(e,i){var a=on();return Xe!==null?Cm(a,Xe,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:rf,useCacheRefresh:Jm};ig.useEffectEvent=Hm;function vf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:g({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xf={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=si(),f=Ha(o);f.payload=i,a!=null&&(f.callback=a),i=Ga(e,f,o),i!==null&&(Zn(i,e,o),So(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=si(),f=Ha(o);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=Ga(e,f,o),i!==null&&(Zn(i,e,o),So(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=si(),o=Ha(a);o.tag=2,i!=null&&(o.callback=i),i=Ga(e,o,a),i!==null&&(Zn(i,e,a),So(i,e,a))}};function ag(e,i,a,o,f,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):i.prototype&&i.prototype.isPureReactComponent?!fo(a,o)||!fo(f,d):!0}function sg(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&xf.enqueueReplaceState(i,i.state,null)}function ws(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=g({},a));for(var f in e)a[f]===void 0&&(a[f]=e[f])}return a}function rg(e){El(e)}function og(e){console.error(e)}function lg(e){El(e)}function ql(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function cg(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Sf(e,i,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(e,i)},a}function ug(e){return e=Ha(e),e.tag=3,e}function fg(e,i,a,o){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=o.value;e.payload=function(){return f(d)},e.callback=function(){cg(i,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){cg(i,a,o),typeof f!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function mS(e,i,a,o,f){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&sr(i,a,f,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?ac():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=f,o===Ul?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),Wf(e,o,f)),!1;case 22:return a.flags|=65536,o===Ul?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),Wf(e,o,f)),!1}throw Error(s(435,a.tag))}return Wf(e,o,f),ac(),!1}if(we)return i=ei.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,o!==Iu&&(e=Error(s(422),{cause:o}),mo(hi(e,a)))):(o!==Iu&&(i=Error(s(423),{cause:o}),mo(hi(i,a))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,o=hi(o,a),f=Sf(e.stateNode,o,f),Zu(e,f),an!==4&&(an=2)),!1;var d=Error(s(520),{cause:o});if(d=hi(d,a),Oo===null?Oo=[d]:Oo.push(d),an!==4&&(an=2),i===null)return!0;o=hi(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=f&-f,a.lanes|=e,e=Sf(a.stateNode,o,e),Zu(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ya===null||!Ya.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=ug(f),fg(f,e,a,o),Zu(a,f),!1}a=a.return}while(a!==null);return!1}var yf=Error(s(461)),fn=!1;function Dn(e,i,a,o){i.child=e===null?mm(i,null,a,o):Rs(i,e.child,a,o)}function hg(e,i,a,o,f){a=a.render;var d=i.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return Es(i),o=ef(e,i,a,S,d,f),R=nf(),e!==null&&!fn?(af(e,i,f),ua(e,i,f)):(we&&R&&Fu(i),i.flags|=1,Dn(e,i,o,f),i.child)}function dg(e,i,a,o,f){if(e===null){var d=a.type;return typeof d=="function"&&!Uu(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,pg(e,i,d,o,f)):(e=Rl(a.type,null,o,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!wf(e,f)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(S,o)&&e.ref===i.ref)return ua(e,i,f)}return i.flags|=1,e=aa(d,o),e.ref=i.ref,e.return=i,i.child=e}function pg(e,i,a,o,f){if(e!==null){var d=e.memoizedProps;if(fo(d,o)&&e.ref===i.ref)if(fn=!1,i.pendingProps=o=d,wf(e,f))(e.flags&131072)!==0&&(fn=!0);else return i.lanes=e.lanes,ua(e,i,f)}return Mf(e,i,a,o,f)}function mg(e,i,a,o){var f=o.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=i.child=e.child,f=0;o!==null;)f=f|o.lanes|o.childLanes,o=o.sibling;o=f&~d}else o=0,i.child=null;return gg(e,i,d,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ll(i,d!==null?d.cachePool:null),d!==null?vm(i,d):Qu(),xm(i);else return o=i.lanes=536870912,gg(e,i,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ll(i,d.cachePool),vm(i,d),ka(),i.memoizedState=null):(e!==null&&Ll(i,null),Qu(),ka());return Dn(e,i,f,a),i.child}function Ro(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function gg(e,i,a,o,f){var d=Wu();return d=d===null?null:{parent:cn._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},e!==null&&Ll(i,null),Qu(),xm(i),e!==null&&sr(e,i,o,!0),i.childLanes=f,null}function Yl(e,i){return i=Zl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function _g(e,i,a){return Rs(i,e.child,null,a),e=Yl(i,i.pendingProps),e.flags|=2,ni(i),i.memoizedState=null,e}function gS(e,i,a){var o=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(we){if(o.mode==="hidden")return e=Yl(i,o),i.lanes=536870912,Ro(null,e);if($u(i),(e=Ke)?(e=w0(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=i,i.child=a,Cn=i,Ke=null)):e=null,e===null)throw za(i);return i.lanes=536870912,null}return Yl(i,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if($u(i),f)if(i.flags&256)i.flags&=-257,i=_g(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(fn||sr(e,i,a,!1),f=(a&e.childLanes)!==0,fn||f){if(o=je,o!==null&&(S=$i(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,xs(e,S),Zn(o,e,S),yf;ac(),i=_g(e,i,a)}else e=d.treeContext,Ke=_i(S.nextSibling),Cn=i,we=!0,Fa=null,mi=!1,e!==null&&im(i,e),i=Yl(i,o),i.flags|=4096;return i}return e=aa(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function jl(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Mf(e,i,a,o,f){return Es(i),a=ef(e,i,a,o,void 0,f),o=nf(),e!==null&&!fn?(af(e,i,f),ua(e,i,f)):(we&&o&&Fu(i),i.flags|=1,Dn(e,i,a,f),i.child)}function vg(e,i,a,o,f,d){return Es(i),i.updateQueue=null,a=ym(i,o,a,f),Sm(e),o=nf(),e!==null&&!fn?(af(e,i,d),ua(e,i,d)):(we&&o&&Fu(i),i.flags|=1,Dn(e,i,a,d),i.child)}function xg(e,i,a,o,f){if(Es(i),i.stateNode===null){var d=er,S=a.contextType;typeof S=="object"&&S!==null&&(d=wn(S)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Yu(i),S=a.contextType,d.context=typeof S=="object"&&S!==null?wn(S):er,d.state=i.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(vf(i,a,S,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&xf.enqueueReplaceState(d,d.state,null),Mo(i,o,d,f),yo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var R=i.memoizedProps,V=ws(a,R);d.props=V;var it=d.context,mt=a.contextType;S=er,typeof mt=="object"&&mt!==null&&(S=wn(mt));var Mt=a.getDerivedStateFromProps;mt=typeof Mt=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,mt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||it!==S)&&sg(i,d,o,S),Ba=!1;var rt=i.memoizedState;d.state=rt,Mo(i,o,d,f),yo(),it=i.memoizedState,R||rt!==it||Ba?(typeof Mt=="function"&&(vf(i,a,Mt,o),it=i.memoizedState),(V=Ba||ag(i,a,V,o,rt,it,S))?(mt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=it),d.props=o,d.state=it,d.context=S,o=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,ju(e,i),S=i.memoizedProps,mt=ws(a,S),d.props=mt,Mt=i.pendingProps,rt=d.context,it=a.contextType,V=er,typeof it=="object"&&it!==null&&(V=wn(it)),R=a.getDerivedStateFromProps,(it=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Mt||rt!==V)&&sg(i,d,o,V),Ba=!1,rt=i.memoizedState,d.state=rt,Mo(i,o,d,f),yo();var ht=i.memoizedState;S!==Mt||rt!==ht||Ba||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof R=="function"&&(vf(i,a,R,o),ht=i.memoizedState),(mt=Ba||ag(i,a,mt,o,rt,ht,V)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(it||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ht,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ht,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ht),d.props=o,d.state=ht,d.context=V,o=mt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,jl(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=Rs(i,e.child,null,f),i.child=Rs(i,null,a,f)):Dn(e,i,a,f),i.memoizedState=d.state,e=i.child):e=ua(e,i,f),e}function Sg(e,i,a,o){return ys(),i.flags|=256,Dn(e,i,a,o),i.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(e){return{baseLanes:e,cachePool:cm()}}function Tf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=ai),e}function yg(e,i,a){var o=i.pendingProps,f=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(we){if(f?Va(i):ka(),(e=Ke)?(e=w0(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=i,i.child=a,Cn=i,Ke=null)):e=null,e===null)throw za(i);return oh(e)?i.lanes=32:i.lanes=536870912,null}var R=o.children;return o=o.fallback,f?(ka(),f=i.mode,R=Zl({mode:"hidden",children:R},f),o=Ss(o,f,a,null),R.return=i,o.return=i,R.sibling=o,i.child=R,o=i.child,o.memoizedState=bf(a),o.childLanes=Tf(e,S,a),i.memoizedState=Ef,Ro(null,o)):(Va(i),Af(i,R))}var V=e.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(d)i.flags&256?(Va(i),i.flags&=-257,i=Rf(e,i,a)):i.memoizedState!==null?(ka(),i.child=e.child,i.flags|=128,i=null):(ka(),R=o.fallback,f=i.mode,o=Zl({mode:"visible",children:o.children},f),R=Ss(R,f,a,null),R.flags|=2,o.return=i,R.return=i,o.sibling=R,i.child=o,Rs(i,e.child,null,a),o=i.child,o.memoizedState=bf(a),o.childLanes=Tf(e,S,a),i.memoizedState=Ef,i=Ro(null,o));else if(Va(i),oh(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var it=S.dgst;S=it,o=Error(s(419)),o.stack="",o.digest=S,mo({value:o,source:null,stack:null}),i=Rf(e,i,a)}else if(fn||sr(e,i,a,!1),S=(a&e.childLanes)!==0,fn||S){if(S=je,S!==null&&(o=$i(S,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,xs(e,o),Zn(S,e,o),yf;rh(R)||ac(),i=Rf(e,i,a)}else rh(R)?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,Ke=_i(R.nextSibling),Cn=i,we=!0,Fa=null,mi=!1,e!==null&&im(i,e),i=Af(i,o.children),i.flags|=4096);return i}return f?(ka(),R=o.fallback,f=i.mode,V=e.child,it=V.sibling,o=aa(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,it!==null?R=aa(it,R):(R=Ss(R,f,a,null),R.flags|=2),R.return=i,o.return=i,o.sibling=R,i.child=o,Ro(null,o),o=i.child,R=e.child.memoizedState,R===null?R=bf(a):(f=R.cachePool,f!==null?(V=cn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=cm(),R={baseLanes:R.baseLanes|a,cachePool:f}),o.memoizedState=R,o.childLanes=Tf(e,S,a),i.memoizedState=Ef,Ro(e.child,o)):(Va(i),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=a,i.memoizedState=null,a)}function Af(e,i){return i=Zl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Zl(e,i){return e=ti(22,e,null,i),e.lanes=0,e}function Rf(e,i,a){return Rs(i,e.child,null,a),e=Af(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Mg(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Gu(e.return,i,a)}function Cf(e,i,a,o,f,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:f,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=f,S.treeForkCount=d)}function Eg(e,i,a){var o=i.pendingProps,f=o.revealOrder,d=o.tail;o=o.children;var S=rn.current,R=(S&2)!==0;if(R?(S=S&1|2,i.flags|=128):S&=1,ot(rn,S),Dn(e,i,o,a),o=we?po:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mg(e,a,i);else if(e.tag===19)Mg(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(a=i.child,f=null;a!==null;)e=a.alternate,e!==null&&zl(e)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Cf(i,!1,f,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&zl(e)===null){i.child=f;break}e=f.sibling,f.sibling=a,a=f,f=e}Cf(i,!0,a,null,d,o);break;case"together":Cf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function ua(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),qa|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(sr(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=aa(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function wf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function _S(e,i,a){switch(i.tag){case 3:Dt(i,i.stateNode.containerInfo),Ia(i,cn,e.memoizedState.cache),ys();break;case 27:case 5:Wt(i);break;case 4:Dt(i,i.stateNode.containerInfo);break;case 10:Ia(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,$u(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Va(i),i.flags|=128,null):(a&i.child.childLanes)!==0?yg(e,i,a):(Va(i),e=ua(e,i,a),e!==null?e.sibling:null);Va(i);break;case 19:var f=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(sr(e,i,a,!1),o=(a&i.childLanes)!==0),f){if(o)return Eg(e,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ot(rn,rn.current),o)break;return null;case 22:return i.lanes=0,mg(e,i,a,i.pendingProps);case 24:Ia(i,cn,e.memoizedState.cache)}return ua(e,i,a)}function bg(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)fn=!0;else{if(!wf(e,a)&&(i.flags&128)===0)return fn=!1,_S(e,i,a);fn=(e.flags&131072)!==0}else fn=!1,we&&(i.flags&1048576)!==0&&nm(i,po,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=Ts(i.elementType),i.type=e,typeof e=="function")Uu(e)?(o=ws(e,o),i.tag=1,i=xg(null,i,e,o,a)):(i.tag=0,i=Mf(null,i,e,o,a));else{if(e!=null){var f=e.$$typeof;if(f===L){i.tag=11,i=hg(null,i,e,o,a);break t}else if(f===O){i.tag=14,i=dg(null,i,e,o,a);break t}}throw i=ct(e)||e,Error(s(306,i,""))}}return i;case 0:return Mf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,f=ws(o,i.pendingProps),xg(e,i,o,f,a);case 3:t:{if(Dt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;f=d.element,ju(e,i),Mo(i,o,null,a);var S=i.memoizedState;if(o=S.cache,Ia(i,cn,o),o!==d.cache&&Vu(i,[cn],a,!0),yo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Sg(e,i,o,a);break t}else if(o!==f){f=hi(Error(s(424)),i),mo(f),i=Sg(e,i,o,a);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=_i(e.firstChild),Cn=i,we=!0,Fa=null,mi=!0,a=mm(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ys(),o===f){i=ua(e,i,a);break t}Dn(e,i,o,a)}i=i.child}return i;case 26:return jl(e,i),e===null?(a=P0(i.type,null,i.pendingProps,null))?i.memoizedState=a:we||(a=i.type,e=i.pendingProps,o=fc(nt.current).createElement(a),o[ln]=i,o[Mn]=e,Ln(o,a,e),C(o),i.stateNode=o):i.memoizedState=P0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Wt(i),e===null&&we&&(o=i.stateNode=N0(i.type,i.pendingProps,nt.current),Cn=i,mi=!0,f=Ke,Qa(i.type)?(lh=f,Ke=_i(o.firstChild)):Ke=f),Dn(e,i,i.pendingProps.children,a),jl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&we&&((f=o=Ke)&&(o=YS(o,i.type,i.pendingProps,mi),o!==null?(i.stateNode=o,Cn=i,Ke=_i(o.firstChild),mi=!1,f=!0):f=!1),f||za(i)),Wt(i),f=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,ih(f,d)?o=null:S!==null&&ih(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=ef(e,i,lS,null,null,a),Vo._currentValue=f),jl(e,i),Dn(e,i,o,a),i.child;case 6:return e===null&&we&&((e=a=Ke)&&(a=jS(a,i.pendingProps,mi),a!==null?(i.stateNode=a,Cn=i,Ke=null,e=!0):e=!1),e||za(i)),null;case 13:return yg(e,i,a);case 4:return Dt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Rs(i,null,o,a):Dn(e,i,o,a),i.child;case 11:return hg(e,i,i.type,i.pendingProps,a);case 7:return Dn(e,i,i.pendingProps,a),i.child;case 8:return Dn(e,i,i.pendingProps.children,a),i.child;case 12:return Dn(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Ia(i,i.type,o.value),Dn(e,i,o.children,a),i.child;case 9:return f=i.type._context,o=i.pendingProps.children,Es(i),f=wn(f),o=o(f),i.flags|=1,Dn(e,i,o,a),i.child;case 14:return dg(e,i,i.type,i.pendingProps,a);case 15:return pg(e,i,i.type,i.pendingProps,a);case 19:return Eg(e,i,a);case 31:return gS(e,i,a);case 22:return mg(e,i,a,i.pendingProps);case 24:return Es(i),o=wn(cn),e===null?(f=Wu(),f===null&&(f=je,d=ku(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),i.memoizedState={parent:o,cache:f},Yu(i),Ia(i,cn,f)):((e.lanes&a)!==0&&(ju(e,i),Mo(i,null,null,a),yo()),f=e.memoizedState,d=i.memoizedState,f.parent!==o?(f={parent:o,cache:o},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ia(i,cn,o)):(o=d.cache,Ia(i,cn,o),o!==f.cache&&Vu(i,[cn],a,!0))),Dn(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function fa(e){e.flags|=4}function Df(e,i,a,o,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Qg())e.flags|=8192;else throw As=Ul,qu}else e.flags&=-16777217}function Tg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!H0(i))if(Qg())e.flags|=8192;else throw As=Ul,qu}function Kl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ue():536870912,e.lanes|=i,_r|=i)}function Co(e,i){if(!we)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var f=e.child;f!==null;)a|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)a|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function vS(e,i,a){var o=i.pendingProps;switch(zu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(i),null;case 1:return Qe(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),oa(cn),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ar(i)?fa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bu())),Qe(i),null;case 26:var f=i.type,d=i.memoizedState;return e===null?(fa(i),d!==null?(Qe(i),Tg(i,d)):(Qe(i),Df(i,f,null,o,a))):d?d!==e.memoizedState?(fa(i),Qe(i),Tg(i,d)):(Qe(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&fa(i),Qe(i),Df(i,f,e,o,a)),null;case 27:if(pe(i),a=nt.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&fa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Qe(i),null}e=Rt.current,ar(i)?am(i):(e=N0(f,o,a),i.stateNode=e,fa(i))}return Qe(i),null;case 5:if(pe(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&fa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Qe(i),null}if(d=Rt.current,ar(i))am(i);else{var S=fc(nt.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(f,{is:o.is}):S.createElement(f)}}d[ln]=i,d[Mn]=o;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;t:switch(Ln(d,f,o),f){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&fa(i)}}return Qe(i),Df(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&fa(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=nt.current,ar(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,f=Cn,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}e[ln]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||y0(e.nodeValue,a)),e||za(i,!0)}else e=fc(e).createTextNode(o),e[ln]=i,i.stateNode=e}return Qe(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(o=ar(i),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),e=!1}else a=Bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(ni(i),i):(ni(i),null);if((i.flags&128)!==0)throw Error(s(558))}return Qe(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=ar(i),o!==null&&o.dehydrated!==null){if(e===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[ln]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),f=!1}else f=Bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ni(i),i):(ni(i),null)}return ni(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=i.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==f&&(o.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),Kl(i,i.updateQueue),Qe(i),null);case 4:return Vt(),e===null&&Jf(i.stateNode.containerInfo),Qe(i),null;case 10:return oa(i.type),Qe(i),null;case 19:if($(rn),o=i.memoizedState,o===null)return Qe(i),null;if(f=(i.flags&128)!==0,d=o.rendering,d===null)if(f)Co(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=zl(e),d!==null){for(i.flags|=128,Co(o,!1),e=d.updateQueue,i.updateQueue=e,Kl(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)$p(a,e),a=a.sibling;return ot(rn,rn.current&1|2),we&&sa(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&E()>ec&&(i.flags|=128,f=!0,Co(o,!1),i.lanes=4194304)}else{if(!f)if(e=zl(d),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Kl(i,e),Co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!we)return Qe(i),null}else 2*E()-o.renderingStartTime>ec&&a!==536870912&&(i.flags|=128,f=!0,Co(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(e=o.last,e!==null?e.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=rn.current,ot(rn,f?a&1|2:a&1),we&&sa(i,o.treeForkCount),e):(Qe(i),null);case 22:case 23:return ni(i),Ju(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(Qe(i),i.subtreeFlags&6&&(i.flags|=8192)):Qe(i),a=i.updateQueue,a!==null&&Kl(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&$(bs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),oa(cn),Qe(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function xS(e,i){switch(zu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return oa(cn),Vt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return pe(i),null;case 31:if(i.memoizedState!==null){if(ni(i),i.alternate===null)throw Error(s(340));ys()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ni(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));ys()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return $(rn),null;case 4:return Vt(),null;case 10:return oa(i.type),null;case 22:case 23:return ni(i),Ju(),e!==null&&$(bs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return oa(cn),null;case 25:return null;default:return null}}function Ag(e,i){switch(zu(i),i.tag){case 3:oa(cn),Vt();break;case 26:case 27:case 5:pe(i);break;case 4:Vt();break;case 31:i.memoizedState!==null&&ni(i);break;case 13:ni(i);break;case 19:$(rn);break;case 10:oa(i.type);break;case 22:case 23:ni(i),Ju(),e!==null&&$(bs);break;case 24:oa(cn)}}function wo(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var f=o.next;a=f;do{if((a.tag&e)===e){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==f)}}catch(R){Ve(i,i.return,R)}}function Xa(e,i,a){try{var o=i.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var d=f.next;o=d;do{if((o.tag&e)===e){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,f=i;var V=a,it=R;try{it()}catch(mt){Ve(f,V,mt)}}}o=o.next}while(o!==d)}}catch(mt){Ve(i,i.return,mt)}}function Rg(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{_m(i,a)}catch(o){Ve(e,e.return,o)}}}function Cg(e,i,a){a.props=ws(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,i,o)}}function Do(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(f){Ve(e,i,f)}}function Bi(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(f){Ve(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){Ve(e,i,f)}else a.current=null}function wg(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(f){Ve(e,e.return,f)}}function Lf(e,i,a){try{var o=e.stateNode;GS(o,e.type,a,i),o[Mn]=i}catch(f){Ve(e,e.return,f)}}function Dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qa(e.type)||e.tag===4}function Nf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uf(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=na));else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Uf(e,i,a),e=e.sibling;e!==null;)Uf(e,i,a),e=e.sibling}function Ql(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ql(e,i,a),e=e.sibling;e!==null;)Ql(e,i,a),e=e.sibling}function Lg(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Ln(i,o,a),i[ln]=e,i[Mn]=a}catch(d){Ve(e,e.return,d)}}var ha=!1,hn=!1,Of=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function SS(e,i){if(e=e.containerInfo,eh=vc,e=Xp(e),Au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var f=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var S=0,R=-1,V=-1,it=0,mt=0,Mt=e,rt=null;e:for(;;){for(var ht;Mt!==a||f!==0&&Mt.nodeType!==3||(R=S+f),Mt!==d||o!==0&&Mt.nodeType!==3||(V=S+o),Mt.nodeType===3&&(S+=Mt.nodeValue.length),(ht=Mt.firstChild)!==null;)rt=Mt,Mt=ht;for(;;){if(Mt===e)break e;if(rt===a&&++it===f&&(R=S),rt===d&&++mt===o&&(V=S),(ht=Mt.nextSibling)!==null)break;Mt=rt,rt=Mt.parentNode}Mt=ht}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(nh={focusedElem:e,selectionRange:a},vc=!1,Sn=i;Sn!==null;)if(i=Sn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Sn=e;else for(;Sn!==null;){switch(i=Sn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)f=e[a],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,f=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Jt=ws(a.type,f);e=o.getSnapshotBeforeUpdate(Jt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Ve(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)sh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Sn=e;break}Sn=i.return}}function Ug(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:pa(e,a),o&4&&wo(5,a);break;case 1:if(pa(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(S){Ve(a,a.return,S)}else{var f=ws(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ve(a,a.return,S)}}o&64&&Rg(a),o&512&&Do(a,a.return);break;case 3:if(pa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{_m(e,i)}catch(S){Ve(a,a.return,S)}}break;case 27:i===null&&o&4&&Lg(a);case 26:case 5:pa(e,a),i===null&&o&4&&wg(a),o&512&&Do(a,a.return);break;case 12:pa(e,a);break;case 31:pa(e,a),o&4&&Fg(e,a);break;case 13:pa(e,a),o&4&&zg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wS.bind(null,a),ZS(e,a))));break;case 22:if(o=a.memoizedState!==null||ha,!o){i=i!==null&&i.memoizedState!==null||hn,f=ha;var d=hn;ha=o,(hn=i)&&!d?ma(e,a,(a.subtreeFlags&8772)!==0):pa(e,a),ha=f,hn=d}break;case 30:break;default:pa(e,a)}}function Og(e){var i=e.alternate;i!==null&&(e.alternate=null,Og(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&io(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Wn=!1;function da(e,i,a){for(a=a.child;a!==null;)Pg(e,i,a),a=a.sibling}function Pg(e,i,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:hn||Bi(a,i),da(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Bi(a,i);var o=$e,f=Wn;Qa(a.type)&&($e=a.stateNode,Wn=!1),da(e,i,a),Bo(a.stateNode),$e=o,Wn=f;break;case 5:hn||Bi(a,i);case 6:if(o=$e,f=Wn,$e=null,da(e,i,a),$e=o,Wn=f,$e!==null)if(Wn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(d){Ve(a,i,d)}else try{$e.removeChild(a.stateNode)}catch(d){Ve(a,i,d)}break;case 18:$e!==null&&(Wn?(e=$e,R0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tr(e)):R0($e,a.stateNode));break;case 4:o=$e,f=Wn,$e=a.stateNode.containerInfo,Wn=!0,da(e,i,a),$e=o,Wn=f;break;case 0:case 11:case 14:case 15:Xa(2,a,i),hn||Xa(4,a,i),da(e,i,a);break;case 1:hn||(Bi(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Cg(a,i,o)),da(e,i,a);break;case 21:da(e,i,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,da(e,i,a),hn=o;break;default:da(e,i,a)}}function Fg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tr(e)}catch(a){Ve(i,i.return,a)}}}function zg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tr(e)}catch(a){Ve(i,i.return,a)}}function yS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ng),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ng),i;default:throw Error(s(435,e.tag))}}function Jl(e,i){var a=yS(e);i.forEach(function(o){if(!a.has(o)){a.add(o);var f=DS.bind(null,e,o);o.then(f,f)}})}function qn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var f=a[o],d=e,S=i,R=S;t:for(;R!==null;){switch(R.tag){case 27:if(Qa(R.type)){$e=R.stateNode,Wn=!1;break t}break;case 5:$e=R.stateNode,Wn=!1;break t;case 3:case 4:$e=R.stateNode.containerInfo,Wn=!0;break t}R=R.return}if($e===null)throw Error(s(160));Pg(d,S,f),$e=null,Wn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Ig(i,e),i=i.sibling}var Ri=null;function Ig(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(i,e),Yn(e),o&4&&(Xa(3,e,e.return),wo(3,e),Xa(5,e,e.return));break;case 1:qn(i,e),Yn(e),o&512&&(hn||a===null||Bi(a,a.return)),o&64&&ha&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var f=Ri;if(qn(i,e),Yn(e),o&512&&(hn||a===null||Bi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,f=f.ownerDocument||f;e:switch(o){case"title":d=f.getElementsByTagName("title")[0],(!d||d[ps]||d[ln]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(o),f.head.insertBefore(d,f.querySelector("head > title"))),Ln(d,o,a),d[ln]=e,C(d),o=d;break t;case"link":var S=I0("link","href",f).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break e}}d=f.createElement(o),Ln(d,o,a),f.head.appendChild(d);break;case"meta":if(S=I0("meta","content",f).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break e}}d=f.createElement(o),Ln(d,o,a),f.head.appendChild(d);break;default:throw Error(s(468,o))}d[ln]=e,C(d),o=d}e.stateNode=o}else B0(f,e.type,e.stateNode);else e.stateNode=z0(f,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?B0(f,e.type,e.stateNode):z0(f,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(i,e),Yn(e),o&512&&(hn||a===null||Bi(a,a.return)),a!==null&&o&4&&Lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(i,e),Yn(e),o&512&&(hn||a===null||Bi(a,a.return)),e.flags&32){f=e.stateNode;try{mn(f,"")}catch(Jt){Ve(e,e.return,Jt)}}o&4&&e.stateNode!=null&&(f=e.memoizedProps,Lf(e,f,a!==null?a.memoizedProps:f)),o&1024&&(Of=!0);break;case 6:if(qn(i,e),Yn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Jt){Ve(e,e.return,Jt)}}break;case 3:if(pc=null,f=Ri,Ri=hc(i.containerInfo),qn(i,e),Ri=f,Yn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(i.containerInfo)}catch(Jt){Ve(e,e.return,Jt)}Of&&(Of=!1,Bg(e));break;case 4:o=Ri,Ri=hc(e.stateNode.containerInfo),qn(i,e),Yn(e),Ri=o;break;case 12:qn(i,e),Yn(e);break;case 31:qn(i,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 13:qn(i,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 22:f=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,it=ha,mt=hn;if(ha=it||f,hn=mt||V,qn(i,e),hn=mt,ha=it,Yn(e),o&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||V||ha||hn||Ds(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){V=a=i;try{if(d=V.stateNode,f)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=V.stateNode;var Mt=V.memoizedProps.style,rt=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;R.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Jt){Ve(V,V.return,Jt)}}}else if(i.tag===6){if(a===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Jt){Ve(V,V.return,Jt)}}}else if(i.tag===18){if(a===null){V=i;try{var ht=V.stateNode;f?C0(ht,!0):C0(V.stateNode,!1)}catch(Jt){Ve(V,V.return,Jt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Jl(e,a))));break;case 19:qn(i,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 30:break;case 21:break;default:qn(i,e),Yn(e)}}function Yn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(Dg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,d=Nf(e);Ql(e,d,f);break;case 5:var S=a.stateNode;a.flags&32&&(mn(S,""),a.flags&=-33);var R=Nf(e);Ql(e,R,S);break;case 3:case 4:var V=a.stateNode.containerInfo,it=Nf(e);Uf(e,it,V);break;default:throw Error(s(161))}}catch(mt){Ve(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Bg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Bg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function pa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ug(e,i.alternate,i),i=i.sibling}function Ds(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Xa(4,i,i.return),Ds(i);break;case 1:Bi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Cg(i,i.return,a),Ds(i);break;case 27:Bo(i.stateNode);case 26:case 5:Bi(i,i.return),Ds(i);break;case 22:i.memoizedState===null&&Ds(i);break;case 30:Ds(i);break;default:Ds(i)}e=e.sibling}}function ma(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,f=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:ma(f,d,a),wo(4,d);break;case 1:if(ma(f,d,a),o=d,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(it){Ve(o,o.return,it)}if(o=d,f=o.updateQueue,f!==null){var R=o.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)gm(V[f],R)}catch(it){Ve(o,o.return,it)}}a&&S&64&&Rg(d),Do(d,d.return);break;case 27:Lg(d);case 26:case 5:ma(f,d,a),a&&o===null&&S&4&&wg(d),Do(d,d.return);break;case 12:ma(f,d,a);break;case 31:ma(f,d,a),a&&S&4&&Fg(f,d);break;case 13:ma(f,d,a),a&&S&4&&zg(f,d);break;case 22:d.memoizedState===null&&ma(f,d,a),Do(d,d.return);break;case 30:break;default:ma(f,d,a)}i=i.sibling}}function Pf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&go(a))}function Ff(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&go(e))}function Ci(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Hg(e,i,a,o),i=i.sibling}function Hg(e,i,a,o){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ci(e,i,a,o),f&2048&&wo(9,i);break;case 1:Ci(e,i,a,o);break;case 3:Ci(e,i,a,o),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&go(e)));break;case 12:if(f&2048){Ci(e,i,a,o),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ve(i,i.return,V)}}else Ci(e,i,a,o);break;case 31:Ci(e,i,a,o);break;case 13:Ci(e,i,a,o);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Ci(e,i,a,o):Lo(e,i):d._visibility&2?Ci(e,i,a,o):(d._visibility|=2,pr(e,i,a,o,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Pf(S,i);break;case 24:Ci(e,i,a,o),f&2048&&Ff(i.alternate,i);break;default:Ci(e,i,a,o)}}function pr(e,i,a,o,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,S=i,R=a,V=o,it=S.flags;switch(S.tag){case 0:case 11:case 15:pr(d,S,R,V,f),wo(8,S);break;case 23:break;case 22:var mt=S.stateNode;S.memoizedState!==null?mt._visibility&2?pr(d,S,R,V,f):Lo(d,S):(mt._visibility|=2,pr(d,S,R,V,f)),f&&it&2048&&Pf(S.alternate,S);break;case 24:pr(d,S,R,V,f),f&&it&2048&&Ff(S.alternate,S);break;default:pr(d,S,R,V,f)}i=i.sibling}}function Lo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,f=o.flags;switch(o.tag){case 22:Lo(a,o),f&2048&&Pf(o.alternate,o);break;case 24:Lo(a,o),f&2048&&Ff(o.alternate,o);break;default:Lo(a,o)}i=i.sibling}}var No=8192;function mr(e,i,a){if(e.subtreeFlags&No)for(e=e.child;e!==null;)Gg(e,i,a),e=e.sibling}function Gg(e,i,a){switch(e.tag){case 26:mr(e,i,a),e.flags&No&&e.memoizedState!==null&&oy(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:mr(e,i,a);break;case 3:case 4:var o=Ri;Ri=hc(e.stateNode.containerInfo),mr(e,i,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=No,No=16777216,mr(e,i,a),No=o):mr(e,i,a));break;default:mr(e,i,a)}}function Vg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Uo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Sn=o,Xg(o,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kg(e),e=e.sibling}function kg(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,$l(e)):Uo(e);break;default:Uo(e)}}function $l(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Sn=o,Xg(o,e)}Vg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Xa(8,i,i.return),$l(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,$l(i));break;default:$l(i)}e=e.sibling}}function Xg(e,i){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Xa(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var f=o.sibling,d=o.return;if(Og(o),o===a){Sn=null;break t}if(f!==null){f.return=d,Sn=f;break t}Sn=d}}}var MS={getCacheForType:function(e){var i=wn(cn),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},ES=typeof WeakMap=="function"?WeakMap:Map,Ie=0,je=null,Ee=null,Ae=0,Ge=0,ii=null,Wa=!1,gr=!1,zf=!1,ga=0,an=0,qa=0,Ls=0,If=0,ai=0,_r=0,Oo=null,jn=null,Bf=!1,tc=0,Wg=0,ec=1/0,nc=null,Ya=null,gn=0,ja=null,vr=null,_a=0,Hf=0,Gf=null,qg=null,Po=0,Vf=null;function si(){return(Ie&2)!==0&&Ae!==0?Ae&-Ae:z.T!==null?jf():ds()}function Yg(){if(ai===0)if((Ae&536870912)===0||we){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Zn(e,i,a){(e===je&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(xr(e,0),Za(e,Ae,ai,!1)),pn(e,a),((Ie&2)===0||e!==je)&&(e===je&&((Ie&2)===0&&(Ls|=a),an===4&&Za(e,Ae,ai,!1)),Hi(e))}function jg(e,i,a){if((Ie&6)!==0)throw Error(s(327));var o=!a&&(i&127)===0&&(i&e.expiredLanes)===0||Nt(e,i),f=o?AS(e,i):Xf(e,i,!0),d=o;do{if(f===0){gr&&!o&&Za(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!bS(a)){f=Xf(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var R=e;f=Oo;var V=R.current.memoizedState.isDehydrated;if(V&&(xr(R,S).flags|=256),S=Xf(R,S,!1),S!==2){if(zf&&!V){R.errorRecoveryDisabledLanes|=d,Ls|=d,f=4;break t}d=jn,jn=f,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}f=S}if(d=!1,f!==2)continue}}if(f===1){xr(e,0),Za(e,i,0,!0);break}t:{switch(o=e,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Za(o,i,ai,!Wa);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=tc+300-E(),10<f)){if(Za(o,i,ai,!Wa),yt(o,0,!0)!==0)break t;_a=i,o.timeoutHandle=T0(Zg.bind(null,o,a,jn,nc,Bf,i,ai,Ls,_r,Wa,d,"Throttled",-0,0),f);break t}Zg(o,a,jn,nc,Bf,i,ai,Ls,_r,Wa,d,null,-0,0)}}break}while(!0);Hi(e)}function Zg(e,i,a,o,f,d,S,R,V,it,mt,Mt,rt,ht){if(e.timeoutHandle=-1,Mt=i.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},Gg(i,d,Mt);var Jt=(d&62914560)===d?tc-E():(d&4194048)===d?Wg-E():0;if(Jt=ly(Mt,Jt),Jt!==null){_a=d,e.cancelPendingCommit=Jt(i0.bind(null,e,i,d,a,o,f,S,R,V,mt,Mt,null,rt,ht)),Za(e,d,S,!it);return}}i0(e,i,d,a,o,f,S,R,V)}function bS(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var f=a[o],d=f.getSnapshot;f=f.value;try{if(!$n(d(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Za(e,i,a,o){i&=~If,i&=~Ls,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var f=i;0<f;){var d=31-Ht(f),S=1<<d;o[d]=-1,f&=~S}a!==0&&Fi(e,a,i)}function ic(){return(Ie&6)===0?(Fo(0),!1):!0}function kf(){if(Ee!==null){if(Ge===0)var e=Ee.return;else e=Ee,ra=Ms=null,sf(e),cr=null,vo=0,e=Ee;for(;e!==null;)Ag(e.alternate,e),e=e.return;Ee=null}}function xr(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,XS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),_a=0,kf(),je=e,Ee=a=aa(e.current,null),Ae=i,Ge=0,ii=null,Wa=!1,gr=Nt(e,i),zf=!1,_r=ai=If=Ls=qa=an=0,jn=Oo=null,Bf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var f=31-Ht(o),d=1<<f;i|=e[f],o&=~d}return ga=i,bl(),a}function Kg(e,i){ve=null,z.H=Ao,i===lr||i===Nl?(i=hm(),Ge=3):i===qu?(i=hm(),Ge=4):Ge=i===yf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ii=i,Ee===null&&(an=1,ql(e,hi(i,e.current)))}function Qg(){var e=ei.current;return e===null?!0:(Ae&4194048)===Ae?gi===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===gi:!1}function Jg(){var e=z.H;return z.H=Ao,e===null?Ao:e}function $g(){var e=z.A;return z.A=MS,e}function ac(){an=4,Wa||(Ae&4194048)!==Ae&&ei.current!==null||(gr=!0),(qa&134217727)===0&&(Ls&134217727)===0||je===null||Za(je,Ae,ai,!1)}function Xf(e,i,a){var o=Ie;Ie|=2;var f=Jg(),d=$g();(je!==e||Ae!==i)&&(nc=null,xr(e,i)),i=!1;var S=an;t:do try{if(Ge!==0&&Ee!==null){var R=Ee,V=ii;switch(Ge){case 8:kf(),S=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(i=!0);var it=Ge;if(Ge=0,ii=null,Sr(e,R,V,it),a&&gr){S=0;break t}break;default:it=Ge,Ge=0,ii=null,Sr(e,R,V,it)}}TS(),S=an;break}catch(mt){Kg(e,mt)}while(!0);return i&&e.shellSuspendCounter++,ra=Ms=null,Ie=o,z.H=f,z.A=d,Ee===null&&(je=null,Ae=0,bl()),S}function TS(){for(;Ee!==null;)t0(Ee)}function AS(e,i){var a=Ie;Ie|=2;var o=Jg(),f=$g();je!==e||Ae!==i?(nc=null,ec=E()+500,xr(e,i)):gr=Nt(e,i);t:do try{if(Ge!==0&&Ee!==null){i=Ee;var d=ii;e:switch(Ge){case 1:Ge=0,ii=null,Sr(e,i,d,1);break;case 2:case 9:if(um(d)){Ge=0,ii=null,e0(i);break}i=function(){Ge!==2&&Ge!==9||je!==e||(Ge=7),Hi(e)},d.then(i,i);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:um(d)?(Ge=0,ii=null,e0(i)):(Ge=0,ii=null,Sr(e,i,d,7));break;case 5:var S=null;switch(Ee.tag){case 26:S=Ee.memoizedState;case 5:case 27:var R=Ee;if(S?H0(S):R.stateNode.complete){Ge=0,ii=null;var V=R.sibling;if(V!==null)Ee=V;else{var it=R.return;it!==null?(Ee=it,sc(it)):Ee=null}break e}}Ge=0,ii=null,Sr(e,i,d,5);break;case 6:Ge=0,ii=null,Sr(e,i,d,6);break;case 8:kf(),an=6;break t;default:throw Error(s(462))}}RS();break}catch(mt){Kg(e,mt)}while(!0);return ra=Ms=null,z.H=o,z.A=f,Ie=a,Ee!==null?0:(je=null,Ae=0,bl(),an)}function RS(){for(;Ee!==null&&!Lt();)t0(Ee)}function t0(e){var i=bg(e.alternate,e,ga);e.memoizedProps=e.pendingProps,i===null?sc(e):Ee=i}function e0(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=vg(a,i,i.pendingProps,i.type,void 0,Ae);break;case 11:i=vg(a,i,i.pendingProps,i.type.render,i.ref,Ae);break;case 5:sf(i);default:Ag(a,i),i=Ee=$p(i,ga),i=bg(a,i,ga)}e.memoizedProps=e.pendingProps,i===null?sc(e):Ee=i}function Sr(e,i,a,o){ra=Ms=null,sf(i),cr=null,vo=0;var f=i.return;try{if(mS(e,f,i,a,Ae)){an=1,ql(e,hi(a,e.current)),Ee=null;return}}catch(d){if(f!==null)throw Ee=f,d;an=1,ql(e,hi(a,e.current)),Ee=null;return}i.flags&32768?(we||o===1?e=!0:gr||(Ae&536870912)!==0?e=!1:(Wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),n0(i,e)):sc(i)}function sc(e){var i=e;do{if((i.flags&32768)!==0){n0(i,Wa);return}e=i.return;var a=vS(i.alternate,i,ga);if(a!==null){Ee=a;return}if(i=i.sibling,i!==null){Ee=i;return}Ee=i=e}while(i!==null);an===0&&(an=5)}function n0(e,i){do{var a=xS(e.alternate,e);if(a!==null){a.flags&=32767,Ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=a}while(e!==null);an=6,Ee=null}function i0(e,i,a,o,f,d,S,R,V){e.cancelPendingCommit=null;do rc();while(gn!==0);if((Ie&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Lu,Vn(e,a,d,S,R,V),e===je&&(Ee=je=null,Ae=0),vr=i,ja=e,_a=a,Hf=d,Gf=f,qg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,LS(ft,function(){return l0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,f=G.p,G.p=2,S=Ie,Ie|=4;try{SS(e,i,a)}finally{Ie=S,G.p=f,z.T=o}}gn=1,a0(),s0(),r0()}}function a0(){if(gn===1){gn=0;var e=ja,i=vr,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=G.p;G.p=2;var f=Ie;Ie|=4;try{Ig(i,e);var d=nh,S=Xp(e.containerInfo),R=d.focusedElem,V=d.selectionRange;if(S!==R&&R&&R.ownerDocument&&kp(R.ownerDocument.documentElement,R)){if(V!==null&&Au(R)){var it=V.start,mt=V.end;if(mt===void 0&&(mt=it),"selectionStart"in R)R.selectionStart=it,R.selectionEnd=Math.min(mt,R.value.length);else{var Mt=R.ownerDocument||document,rt=Mt&&Mt.defaultView||window;if(rt.getSelection){var ht=rt.getSelection(),Jt=R.textContent.length,ce=Math.min(V.start,Jt),qe=V.end===void 0?ce:Math.min(V.end,Jt);!ht.extend&&ce>qe&&(S=qe,qe=ce,ce=S);var Q=Vp(R,ce),k=Vp(R,qe);if(Q&&k&&(ht.rangeCount!==1||ht.anchorNode!==Q.node||ht.anchorOffset!==Q.offset||ht.focusNode!==k.node||ht.focusOffset!==k.offset)){var et=Mt.createRange();et.setStart(Q.node,Q.offset),ht.removeAllRanges(),ce>qe?(ht.addRange(et),ht.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),ht.addRange(et))}}}}for(Mt=[],ht=R;ht=ht.parentNode;)ht.nodeType===1&&Mt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Mt.length;R++){var St=Mt[R];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}vc=!!eh,nh=eh=null}finally{Ie=f,G.p=o,z.T=a}}e.current=i,gn=2}}function s0(){if(gn===2){gn=0;var e=ja,i=vr,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=G.p;G.p=2;var f=Ie;Ie|=4;try{Ug(e,i.alternate,i)}finally{Ie=f,G.p=o,z.T=a}}gn=3}}function r0(){if(gn===4||gn===3){gn=0,N();var e=ja,i=vr,a=_a,o=qg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?gn=5:(gn=0,vr=ja=null,o0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ya=null),ta(a),i=i.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(bt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=z.T,f=G.p,G.p=2,z.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var R=o[S];d(R.value,{componentStack:R.stack})}}finally{z.T=i,G.p=f}}(_a&3)!==0&&rc(),Hi(e),f=e.pendingLanes,(a&261930)!==0&&(f&42)!==0?e===Vf?Po++:(Po=0,Vf=e):Po=0,Fo(0)}}function o0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,go(i)))}function rc(){return a0(),s0(),r0(),l0()}function l0(){if(gn!==5)return!1;var e=ja,i=Hf;Hf=0;var a=ta(_a),o=z.T,f=G.p;try{G.p=32>a?32:a,z.T=null,a=Gf,Gf=null;var d=ja,S=_a;if(gn=0,vr=ja=null,_a=0,(Ie&6)!==0)throw Error(s(331));var R=Ie;if(Ie|=4,kg(d.current),Hg(d,d.current,S,a),Ie=R,Fo(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(bt,d)}catch{}return!0}finally{G.p=f,z.T=o,o0(e,i)}}function c0(e,i,a){i=hi(a,i),i=Sf(e.stateNode,i,2),e=Ga(e,i,2),e!==null&&(pn(e,2),Hi(e))}function Ve(e,i,a){if(e.tag===3)c0(e,e,a);else for(;i!==null;){if(i.tag===3){c0(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ya===null||!Ya.has(o))){e=hi(a,e),a=ug(2),o=Ga(i,a,2),o!==null&&(fg(a,o,i,e),pn(o,2),Hi(o));break}}i=i.return}}function Wf(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new ES;var f=new Set;o.set(i,f)}else f=o.get(i),f===void 0&&(f=new Set,o.set(i,f));f.has(a)||(zf=!0,f.add(a),e=CS.bind(null,e,i,a),i.then(e,e))}function CS(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(Ae&a)===a&&(an===4||an===3&&(Ae&62914560)===Ae&&300>E()-tc?(Ie&2)===0&&xr(e,0):If|=a,_r===Ae&&(_r=0)),Hi(e)}function u0(e,i){i===0&&(i=Ue()),e=xs(e,i),e!==null&&(pn(e,i),Hi(e))}function wS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),u0(e,a)}function DS(e,i){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,f=e.memoizedState;f!==null&&(a=f.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),u0(e,a)}function LS(e,i){return Bt(e,i)}var oc=null,yr=null,qf=!1,lc=!1,Yf=!1,Ka=0;function Hi(e){e!==yr&&e.next===null&&(yr===null?oc=yr=e:yr=yr.next=e),lc=!0,qf||(qf=!0,US())}function Fo(e,i){if(!Yf&&lc){Yf=!0;do for(var a=!1,o=oc;o!==null;){if(e!==0){var f=o.pendingLanes;if(f===0)var d=0;else{var S=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Ht(42|e)+1)-1,d&=f&~(S&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,p0(o,d))}else d=Ae,d=yt(o,o===je?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Nt(o,d)||(a=!0,p0(o,d));o=o.next}while(a);Yf=!1}}function NS(){f0()}function f0(){lc=qf=!1;var e=0;Ka!==0&&kS()&&(e=Ka);for(var i=E(),a=null,o=oc;o!==null;){var f=o.next,d=h0(o,i);d===0?(o.next=null,a===null?oc=f:a.next=f,f===null&&(yr=a)):(a=o,(e!==0||(d&3)!==0)&&(lc=!0)),o=f}gn!==0&&gn!==5||Fo(e),Ka!==0&&(Ka=0)}function h0(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Ht(d),R=1<<S,V=f[S];V===-1?((R&a)===0||(R&o)!==0)&&(f[S]=ue(R,i)):V<=i&&(e.expiredLanes|=R),d&=~R}if(i=je,a=Ae,a=yt(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Nt(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&ie(o),ta(a)){case 2:case 8:a=pt;break;case 32:a=ft;break;case 268435456:a=Ut;break;default:a=ft}return o=d0.bind(null,e),a=Bt(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&ie(o),e.callbackPriority=2,e.callbackNode=null,2}function d0(e,i){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(rc()&&e.callbackNode!==a)return null;var o=Ae;return o=yt(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(jg(e,o,i),h0(e,E()),e.callbackNode!=null&&e.callbackNode===a?d0.bind(null,e):null)}function p0(e,i){if(rc())return null;jg(e,i,!0)}function US(){WS(function(){(Ie&6)!==0?Bt(ut,NS):f0()})}function jf(){if(Ka===0){var e=rr;e===0&&(e=Ft,Ft<<=1,(Ft&261888)===0&&(Ft=256)),Ka=e}return Ka}function m0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function g0(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function OS(e,i,a,o,f){if(i==="submit"&&a&&a.stateNode===f){var d=m0((f[Mn]||null).action),S=o.submitter;S&&(i=(i=S[Mn]||null)?m0(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var R=new Sl("action","action",null,o,f);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var V=S?g0(f,S):new FormData(f);pf(a,{pending:!0,data:V,method:f.method,action:d},null,V)}}else typeof d=="function"&&(R.preventDefault(),V=S?g0(f,S):new FormData(f),pf(a,{pending:!0,data:V,method:f.method,action:d},d,V))},currentTarget:f}]})}}for(var Zf=0;Zf<Du.length;Zf++){var Kf=Du[Zf],PS=Kf.toLowerCase(),FS=Kf[0].toUpperCase()+Kf.slice(1);Ai(PS,"on"+FS)}Ai(Yp,"onAnimationEnd"),Ai(jp,"onAnimationIteration"),Ai(Zp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Jx,"onTransitionRun"),Ai($x,"onTransitionStart"),Ai(tS,"onTransitionCancel"),Ai(Kp,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function _0(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],f=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var S=o.length-1;0<=S;S--){var R=o[S],V=R.instance,it=R.currentTarget;if(R=R.listener,V!==d&&f.isPropagationStopped())break t;d=R,f.currentTarget=it;try{d(f)}catch(mt){El(mt)}f.currentTarget=null,d=V}else for(S=0;S<o.length;S++){if(R=o[S],V=R.instance,it=R.currentTarget,R=R.listener,V!==d&&f.isPropagationStopped())break t;d=R,f.currentTarget=it;try{d(f)}catch(mt){El(mt)}f.currentTarget=null,d=V}}}}function be(e,i){var a=i[qs];a===void 0&&(a=i[qs]=new Set);var o=e+"__bubble";a.has(o)||(v0(i,e,2,!1),a.add(o))}function Qf(e,i,a){var o=0;i&&(o|=4),v0(a,e,o,i)}var cc="_reactListening"+Math.random().toString(36).slice(2);function Jf(e){if(!e[cc]){e[cc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(zS.has(a)||Qf(a,!1,e),Qf(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[cc]||(i[cc]=!0,Qf("selectionchange",!1,i))}}function v0(e,i,a,o){switch(Y0(i)){case 2:var f=fy;break;case 8:f=hy;break;default:f=dh}a=f.bind(null,i,a,e),f=void 0,!_u||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),o?f!==void 0?e.addEventListener(i,a,{capture:!0,passive:f}):e.addEventListener(i,a,!0):f!==void 0?e.addEventListener(i,a,{passive:f}):e.addEventListener(i,a,!1)}function $f(e,i,a,o,f){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===f)break;if(S===4)for(S=o.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;R!==null;){if(S=La(R),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){o=d=S;continue t}R=R.parentNode}}o=o.return}Ep(function(){var it=d,mt=mu(a),Mt=[];t:{var rt=Qp.get(e);if(rt!==void 0){var ht=Sl,Jt=e;switch(e){case"keypress":if(vl(a)===0)break t;case"keydown":case"keyup":ht=Dx;break;case"focusin":Jt="focus",ht=yu;break;case"focusout":Jt="blur",ht=yu;break;case"beforeblur":case"afterblur":ht=yu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=Ux;break;case Yp:case jp:case Zp:ht=yx;break;case Kp:ht=Px;break;case"scroll":case"scrollend":ht=gx;break;case"wheel":ht=zx;break;case"copy":case"cut":case"paste":ht=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=Cp;break;case"toggle":case"beforetoggle":ht=Bx}var ce=(i&4)!==0,qe=!ce&&(e==="scroll"||e==="scrollend"),Q=ce?rt!==null?rt+"Capture":null:rt;ce=[];for(var k=it,et;k!==null;){var St=k;if(et=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||et===null||Q===null||(St=ao(k,Q),St!=null&&ce.push(Io(k,St,et))),qe)break;k=k.return}0<ce.length&&(rt=new ht(rt,Jt,null,a,mt),Mt.push({event:rt,listeners:ce}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",rt&&a!==pu&&(Jt=a.relatedTarget||a.fromElement)&&(La(Jt)||Jt[bi]))break t;if((ht||rt)&&(rt=mt.window===mt?mt:(rt=mt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ht?(Jt=a.relatedTarget||a.toElement,ht=it,Jt=Jt?La(Jt):null,Jt!==null&&(qe=c(Jt),ce=Jt.tag,Jt!==qe||ce!==5&&ce!==27&&ce!==6)&&(Jt=null)):(ht=null,Jt=it),ht!==Jt)){if(ce=Ap,St="onMouseLeave",Q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Cp,St="onPointerLeave",Q="onPointerEnter",k="pointer"),qe=ht==null?rt:ms(ht),et=Jt==null?rt:ms(Jt),rt=new ce(St,k+"leave",ht,a,mt),rt.target=qe,rt.relatedTarget=et,St=null,La(mt)===it&&(ce=new ce(Q,k+"enter",Jt,a,mt),ce.target=et,ce.relatedTarget=qe,St=ce),qe=St,ht&&Jt)e:{for(ce=IS,Q=ht,k=Jt,et=0,St=Q;St;St=ce(St))et++;St=0;for(var re=k;re;re=ce(re))St++;for(;0<et-St;)Q=ce(Q),et--;for(;0<St-et;)k=ce(k),St--;for(;et--;){if(Q===k||k!==null&&Q===k.alternate){ce=Q;break e}Q=ce(Q),k=ce(k)}ce=null}else ce=null;ht!==null&&x0(Mt,rt,ht,ce,!1),Jt!==null&&qe!==null&&x0(Mt,qe,Jt,ce,!0)}}t:{if(rt=it?ms(it):window,ht=rt.nodeName&&rt.nodeName.toLowerCase(),ht==="select"||ht==="input"&&rt.type==="file")var Oe=Fp;else if(Op(rt))if(zp)Oe=Zx;else{Oe=Yx;var ee=qx}else ht=rt.nodeName,!ht||ht.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&Ti(it.elementType)&&(Oe=Fp):Oe=jx;if(Oe&&(Oe=Oe(e,it))){Pp(Mt,Oe,a,mt);break t}ee&&ee(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&bn(rt,"number",rt.value)}switch(ee=it?ms(it):window,e){case"focusin":(Op(ee)||ee.contentEditable==="true")&&(Js=ee,Ru=it,ho=null);break;case"focusout":ho=Ru=Js=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Wp(Mt,a,mt);break;case"selectionchange":if(Qx)break;case"keydown":case"keyup":Wp(Mt,a,mt)}var xe;if(Eu)t:{switch(e){case"compositionstart":var Re="onCompositionStart";break t;case"compositionend":Re="onCompositionEnd";break t;case"compositionupdate":Re="onCompositionUpdate";break t}Re=void 0}else Qs?Np(e,a)&&(Re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Re="onCompositionStart");Re&&(wp&&a.locale!=="ko"&&(Qs||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Qs&&(xe=bp()):(Oa=mt,vu="value"in Oa?Oa.value:Oa.textContent,Qs=!0)),ee=uc(it,Re),0<ee.length&&(Re=new Rp(Re,e,null,a,mt),Mt.push({event:Re,listeners:ee}),xe?Re.data=xe:(xe=Up(a),xe!==null&&(Re.data=xe)))),(xe=Gx?Vx(e,a):kx(e,a))&&(Re=uc(it,"onBeforeInput"),0<Re.length&&(ee=new Rp("onBeforeInput","beforeinput",null,a,mt),Mt.push({event:ee,listeners:Re}),ee.data=xe)),OS(Mt,e,it,a,mt)}_0(Mt,i)})}function Io(e,i,a){return{instance:e,listener:i,currentTarget:a}}function uc(e,i){for(var a=i+"Capture",o=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=ao(e,a),f!=null&&o.unshift(Io(e,f,d)),f=ao(e,i),f!=null&&o.push(Io(e,f,d))),e.tag===3)return o;e=e.return}return[]}function IS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x0(e,i,a,o,f){for(var d=i._reactName,S=[];a!==null&&a!==o;){var R=a,V=R.alternate,it=R.stateNode;if(R=R.tag,V!==null&&V===o)break;R!==5&&R!==26&&R!==27||it===null||(V=it,f?(it=ao(a,d),it!=null&&S.unshift(Io(a,it,V))):f||(it=ao(a,d),it!=null&&S.push(Io(a,it,V)))),a=a.return}S.length!==0&&e.push({event:i,listeners:S})}var BS=/\r\n?/g,HS=/\u0000|\uFFFD/g;function S0(e){return(typeof e=="string"?e:""+e).replace(BS,`
`).replace(HS,"")}function y0(e,i){return i=S0(i),S0(e)===i}function We(e,i,a,o,f,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||mn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&mn(e,""+o);break;case"className":oe(e,"class",o);break;case"tabIndex":oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(e,a,o);break;case"style":js(e,o,d);break;case"data":if(i!=="object"){oe(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&We(e,i,"name",f.name,f,null),We(e,i,"formEncType",f.formEncType,f,null),We(e,i,"formMethod",f.formMethod,f,null),We(e,i,"formTarget",f.formTarget,f,null)):(We(e,i,"encType",f.encType,f,null),We(e,i,"method",f.method,f,null),We(e,i,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=na);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=gl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":be("beforetoggle",e),be("toggle",e),$t(e,"popover",o);break;case"xlinkActuate":te(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":te(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":te(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":te(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":te(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":te(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":te(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":$t(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=px.get(a)||a,$t(e,a,o))}}function th(e,i,a,o,f,d){switch(a){case"style":js(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?mn(e,o):(typeof o=="number"||typeof o=="bigint")&&mn(e,""+o);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"onClick":o!=null&&(e.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),d=e[Mn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,f);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):$t(e,a,o)}}}function Ln(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var o=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:We(e,i,d,S,a,null)}}f&&We(e,i,"srcSet",a.srcSet,a,null),o&&We(e,i,"src",a.src,a,null);return;case"input":be("invalid",e);var R=d=S=f=null,V=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":f=mt;break;case"type":S=mt;break;case"checked":V=mt;break;case"defaultChecked":it=mt;break;case"value":d=mt;break;case"defaultValue":R=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,i));break;default:We(e,i,o,mt,a,null)}}ea(e,d,R,V,it,S,f,!1);return;case"select":be("invalid",e),o=S=d=null;for(f in a)if(a.hasOwnProperty(f)&&(R=a[f],R!=null))switch(f){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:We(e,i,f,R,a,null)}i=d,a=S,e.multiple=!!o,i!=null?ui(e,!!o,i,!1):a!=null&&ui(e,!!o,a,!0);return;case"textarea":be("invalid",e),d=f=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":f=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:We(e,i,S,R,a,null)}Tn(e,o,f,d);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":We(e,i,V,o,a,null));return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(o=0;o<zo.length;o++)be(zo[o],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:We(e,i,it,o,a,null)}return;default:if(Ti(i)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&th(e,i,mt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&We(e,i,R,o,a,null))}function GS(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,S=null,R=null,V=null,it=null,mt=null;for(ht in a){var Mt=a[ht];if(a.hasOwnProperty(ht)&&Mt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":V=Mt;default:o.hasOwnProperty(ht)||We(e,i,ht,null,o,Mt)}}for(var rt in o){var ht=o[rt];if(Mt=a[rt],o.hasOwnProperty(rt)&&(ht!=null||Mt!=null))switch(rt){case"type":d=ht;break;case"name":f=ht;break;case"checked":it=ht;break;case"defaultChecked":mt=ht;break;case"value":S=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,i));break;default:ht!==Mt&&We(e,i,rt,ht,o,Mt)}}En(e,S,R,V,it,mt,d,f);return;case"select":ht=S=R=rt=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":ht=V;default:o.hasOwnProperty(d)||We(e,i,d,null,o,V)}for(f in o)if(d=o[f],V=a[f],o.hasOwnProperty(f)&&(d!=null||V!=null))switch(f){case"value":rt=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==V&&We(e,i,f,d,o,V)}i=R,a=S,o=ht,rt!=null?ui(e,!!a,rt,!1):!!o!=!!a&&(i!=null?ui(e,!!a,i,!0):ui(e,!!a,a?[]:"",!1));return;case"textarea":ht=rt=null;for(R in a)if(f=a[R],a.hasOwnProperty(R)&&f!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:We(e,i,R,null,o,f)}for(S in o)if(f=o[S],d=a[S],o.hasOwnProperty(S)&&(f!=null||d!=null))switch(S){case"value":rt=f;break;case"defaultValue":ht=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&We(e,i,S,f,o,d)}He(e,rt,ht);return;case"option":for(var Jt in a)rt=a[Jt],a.hasOwnProperty(Jt)&&rt!=null&&!o.hasOwnProperty(Jt)&&(Jt==="selected"?e.selected=!1:We(e,i,Jt,null,o,rt));for(V in o)rt=o[V],ht=a[V],o.hasOwnProperty(V)&&rt!==ht&&(rt!=null||ht!=null)&&(V==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":We(e,i,V,rt,o,ht));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)rt=a[ce],a.hasOwnProperty(ce)&&rt!=null&&!o.hasOwnProperty(ce)&&We(e,i,ce,null,o,rt);for(it in o)if(rt=o[it],ht=a[it],o.hasOwnProperty(it)&&rt!==ht&&(rt!=null||ht!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,i));break;default:We(e,i,it,rt,o,ht)}return;default:if(Ti(i)){for(var qe in a)rt=a[qe],a.hasOwnProperty(qe)&&rt!==void 0&&!o.hasOwnProperty(qe)&&th(e,i,qe,void 0,o,rt);for(mt in o)rt=o[mt],ht=a[mt],!o.hasOwnProperty(mt)||rt===ht||rt===void 0&&ht===void 0||th(e,i,mt,rt,o,ht);return}}for(var Q in a)rt=a[Q],a.hasOwnProperty(Q)&&rt!=null&&!o.hasOwnProperty(Q)&&We(e,i,Q,null,o,rt);for(Mt in o)rt=o[Mt],ht=a[Mt],!o.hasOwnProperty(Mt)||rt===ht||rt==null&&ht==null||We(e,i,Mt,rt,o,ht)}function M0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function VS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var f=a[o],d=f.transferSize,S=f.initiatorType,R=f.duration;if(d&&R&&M0(S)){for(S=0,R=f.responseEnd,o+=1;o<a.length;o++){var V=a[o],it=V.startTime;if(it>R)break;var mt=V.transferSize,Mt=V.initiatorType;mt&&M0(Mt)&&(V=V.responseEnd,S+=mt*(V<R?1:(R-it)/(V-it)))}if(--o,i+=8*(d+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var eh=null,nh=null;function fc(e){return e.nodeType===9?e:e.ownerDocument}function E0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function b0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ih(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ah=null;function kS(){var e=window.event;return e&&e.type==="popstate"?e===ah?!1:(ah=e,!0):(ah=null,!1)}var T0=typeof setTimeout=="function"?setTimeout:void 0,XS=typeof clearTimeout=="function"?clearTimeout:void 0,A0=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof A0<"u"?function(e){return A0.resolve(null).then(e).catch(qS)}:T0;function qS(e){setTimeout(function(){throw e})}function Qa(e){return e==="head"}function R0(e,i){var a=i,o=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(f),Tr(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bo(a);for(var d=a.firstChild;d;){var S=d.nextSibling,R=d.nodeName;d[ps]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Bo(e.ownerDocument.body);a=f}while(a);Tr(i)}function C0(e,i){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function sh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sh(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function YS(e,i,a,o){for(;e.nodeType===1;){var f=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ps])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function jS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function w0(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=_i(e.nextSibling),e===null))return null;return e}function rh(e){return e.data==="$?"||e.data==="$~"}function oh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ZS(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var lh=null;function D0(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return _i(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function L0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function N0(e,i,a){switch(i=fc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);io(e)}var vi=new Map,U0=new Set;function hc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var va=G.d;G.d={f:KS,r:QS,D:JS,C:$S,L:ty,m:ey,X:iy,S:ny,M:ay};function KS(){var e=va.f(),i=ic();return e||i}function QS(e){var i=Na(e);i!==null&&i.tag===5&&i.type==="form"?Km(i):va.r(e)}var Mr=typeof document>"u"?null:document;function O0(e,i,a){var o=Mr;if(o&&typeof i=="string"&&i){var f=de(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),U0.has(f)||(U0.add(f),e={rel:e,crossOrigin:a,href:i},o.querySelector(f)===null&&(i=o.createElement("link"),Ln(i,"link",e),C(i),o.head.appendChild(i)))}}function JS(e){va.D(e),O0("dns-prefetch",e,null)}function $S(e,i){va.C(e,i),O0("preconnect",e,i)}function ty(e,i,a){va.L(e,i,a);var o=Mr;if(o&&e&&i){var f='link[rel="preload"][as="'+de(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+de(a.imageSizes)+'"]')):f+='[href="'+de(e)+'"]';var d=f;switch(i){case"style":d=Er(e);break;case"script":d=br(e)}vi.has(d)||(e=g({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),vi.set(d,e),o.querySelector(f)!==null||i==="style"&&o.querySelector(Ho(d))||i==="script"&&o.querySelector(Go(d))||(i=o.createElement("link"),Ln(i,"link",e),C(i),o.head.appendChild(i)))}}function ey(e,i){va.m(e,i);var a=Mr;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+de(o)+'"][href="'+de(e)+'"]',d=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=br(e)}if(!vi.has(d)&&(e=g({rel:"modulepreload",href:e},i),vi.set(d,e),a.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(d)))return}o=a.createElement("link"),Ln(o,"link",e),C(o),a.head.appendChild(o)}}}function ny(e,i,a){va.S(e,i,a);var o=Mr;if(o&&e){var f=Ua(o).hoistableStyles,d=Er(e);i=i||"default";var S=f.get(d);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Ho(d)))R.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},a),(a=vi.get(d))&&ch(e,a);var V=S=o.createElement("link");C(V),Ln(V,"link",e),V._p=new Promise(function(it,mt){V.onload=it,V.onerror=mt}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,dc(S,i,o)}S={type:"stylesheet",instance:S,count:1,state:R},f.set(d,S)}}}function iy(e,i){va.X(e,i);var a=Mr;if(a&&e){var o=Ua(a).hoistableScripts,f=br(e),d=o.get(f);d||(d=a.querySelector(Go(f)),d||(e=g({src:e,async:!0},i),(i=vi.get(f))&&uh(e,i),d=a.createElement("script"),C(d),Ln(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(f,d))}}function ay(e,i){va.M(e,i);var a=Mr;if(a&&e){var o=Ua(a).hoistableScripts,f=br(e),d=o.get(f);d||(d=a.querySelector(Go(f)),d||(e=g({src:e,async:!0,type:"module"},i),(i=vi.get(f))&&uh(e,i),d=a.createElement("script"),C(d),Ln(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(f,d))}}function P0(e,i,a,o){var f=(f=nt.current)?hc(f):null;if(!f)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Er(a.href),a=Ua(f).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Er(a.href);var d=Ua(f).hoistableStyles,S=d.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=f.querySelector(Ho(e)))&&!d._p&&(S.instance=d,S.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),d||sy(f,e,a,S.state))),i&&o===null)throw Error(s(528,""));return S}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=br(a),a=Ua(f).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Er(e){return'href="'+de(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function F0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function sy(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Ln(i,"link",a),C(i),e.head.appendChild(i))}function br(e){return'[src="'+de(e)+'"]'}function Go(e){return"script[async]"+e}function z0(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+de(a.href)+'"]');if(o)return i.instance=o,C(o),o;var f=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Ln(o,"style",f),dc(o,a.precedence,e),i.instance=o;case"stylesheet":f=Er(a.href);var d=e.querySelector(Ho(f));if(d)return i.state.loading|=4,i.instance=d,C(d),d;o=F0(a),(f=vi.get(f))&&ch(o,f),d=(e.ownerDocument||e).createElement("link"),C(d);var S=d;return S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),Ln(d,"link",o),i.state.loading|=4,dc(d,a.precedence,e),i.instance=d;case"script":return d=br(a.src),(f=e.querySelector(Go(d)))?(i.instance=f,C(f),f):(o=a,(f=vi.get(d))&&(o=g({},a),uh(o,f)),e=e.ownerDocument||e,f=e.createElement("script"),C(f),Ln(f,"link",o),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,dc(o,a.precedence,e));return i.instance}function dc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,d=f,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===i)d=R;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function ch(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function uh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var pc=null;function I0(e,i,a){if(pc===null){var o=new Map,f=pc=new Map;f.set(a,o)}else f=pc,o=f.get(a),o||(o=new Map,f.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),f=0;f<a.length;f++){var d=a[f];if(!(d[ps]||d[ln]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var R=o.get(S);R?R.push(d):o.set(S,[d])}}return o}function B0(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function ry(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function H0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oy(e,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=Er(o.href),d=i.querySelector(Ho(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=mc.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=d,C(d);return}d=i.ownerDocument||i,o=F0(o),(f=vi.get(f))&&ch(o,f),d=d.createElement("link"),C(d);var S=d;S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),Ln(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=mc.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var fh=0;function ly(e,i){return e.stylesheets&&e.count===0&&_c(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&fh===0&&(fh=62500*VS());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>fh?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(f)}}:null}function mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gc=null;function _c(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gc=new Map,i.forEach(cy,e),gc=null,mc.call(e))}function cy(e,i){if(!(i.state.loading&4)){var a=gc.get(e);if(a)var o=a.get(null);else{a=new Map,gc.set(e,a);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var S=f[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}f=i.instance,S=f.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,f),a.set(S,f),this.count++,o=mc.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var Vo={$$typeof:D,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function uy(e,i,a,o,f,d,S,R,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function G0(e,i,a,o,f,d,S,R,V,it,mt,Mt){return e=new uy(e,i,a,S,V,it,mt,Mt,R),i=1,d===!0&&(i|=24),d=ti(3,null,null,i),e.current=d,d.stateNode=e,i=ku(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},Yu(d),e}function V0(e){return e?(e=er,e):er}function k0(e,i,a,o,f,d){f=V0(f),o.context===null?o.context=f:o.pendingContext=f,o=Ha(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ga(e,o,i),a!==null&&(Zn(a,e,i),So(a,e,i))}function X0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function hh(e,i){X0(e,i),(e=e.alternate)&&X0(e,i)}function W0(e){if(e.tag===13||e.tag===31){var i=xs(e,67108864);i!==null&&Zn(i,e,67108864),hh(e,67108864)}}function q0(e){if(e.tag===13||e.tag===31){var i=si();i=Da(i);var a=xs(e,i);a!==null&&Zn(a,e,i),hh(e,i)}}var vc=!0;function fy(e,i,a,o){var f=z.T;z.T=null;var d=G.p;try{G.p=2,dh(e,i,a,o)}finally{G.p=d,z.T=f}}function hy(e,i,a,o){var f=z.T;z.T=null;var d=G.p;try{G.p=8,dh(e,i,a,o)}finally{G.p=d,z.T=f}}function dh(e,i,a,o){if(vc){var f=ph(o);if(f===null)$f(e,i,o,xc,a),j0(e,o);else if(py(f,e,i,a,o))o.stopPropagation();else if(j0(e,o),i&4&&-1<dy.indexOf(e)){for(;f!==null;){var d=Na(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Tt(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var V=1<<31-Ht(S);R.entanglements[1]|=V,S&=~V}Hi(d),(Ie&6)===0&&(ec=E()+500,Fo(0))}}break;case 31:case 13:R=xs(d,2),R!==null&&Zn(R,d,2),ic(),hh(d,2)}if(d=ph(o),d===null&&$f(e,i,o,xc,a),d===f)break;f=d}f!==null&&o.stopPropagation()}else $f(e,i,o,null,a)}}function ph(e){return e=mu(e),mh(e)}var xc=null;function mh(e){if(xc=null,e=La(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=u(i),e!==null)return e;e=null}else if(a===31){if(e=h(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return xc=e,null}function Y0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X()){case ut:return 2;case pt:return 8;case ft:case Zt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var gh=!1,Ja=null,$a=null,ts=null,ko=new Map,Xo=new Map,es=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j0(e,i){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":ko.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(i.pointerId)}}function Wo(e,i,a,o,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[f]},i!==null&&(i=Na(i),i!==null&&W0(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function py(e,i,a,o,f){switch(i){case"focusin":return Ja=Wo(Ja,e,i,a,o,f),!0;case"dragenter":return $a=Wo($a,e,i,a,o,f),!0;case"mouseover":return ts=Wo(ts,e,i,a,o,f),!0;case"pointerover":var d=f.pointerId;return ko.set(d,Wo(ko.get(d)||null,e,i,a,o,f)),!0;case"gotpointercapture":return d=f.pointerId,Xo.set(d,Wo(Xo.get(d)||null,e,i,a,o,f)),!0}return!1}function Z0(e){var i=La(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=u(a),i!==null){e.blockedOn=i,kn(e.priority,function(){q0(a)});return}}else if(i===31){if(i=h(a),i!==null){e.blockedOn=i,kn(e.priority,function(){q0(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=ph(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);pu=o,a.target.dispatchEvent(o),pu=null}else return i=Na(a),i!==null&&W0(i),e.blockedOn=a,!1;i.shift()}return!0}function K0(e,i,a){Sc(e)&&a.delete(i)}function my(){gh=!1,Ja!==null&&Sc(Ja)&&(Ja=null),$a!==null&&Sc($a)&&($a=null),ts!==null&&Sc(ts)&&(ts=null),ko.forEach(K0),Xo.forEach(K0)}function yc(e,i){e.blockedOn===i&&(e.blockedOn=null,gh||(gh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,my)))}var Mc=null;function Q0(e){Mc!==e&&(Mc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Mc===e&&(Mc=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],f=e[i+2];if(typeof o!="function"){if(mh(o||a)===null)continue;break}var d=Na(a);d!==null&&(e.splice(i,3),i-=3,pf(d,{pending:!0,data:f,method:a.method,action:o},o,f))}}))}function Tr(e){function i(V){return yc(V,e)}Ja!==null&&yc(Ja,e),$a!==null&&yc($a,e),ts!==null&&yc(ts,e),ko.forEach(i),Xo.forEach(i);for(var a=0;a<es.length;a++){var o=es[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)Z0(a),a.blockedOn===null&&es.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var f=a[o],d=a[o+1],S=f[Mn]||null;if(typeof d=="function")S||Q0(a);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(f=d,S=d[Mn]||null)R=S.formAction;else if(mh(f)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Q0(a)}}}function J0(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function _h(e){this._internalRoot=e}Ec.prototype.render=_h.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=si();k0(a,o,e,i,null,null)},Ec.prototype.unmount=_h.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;k0(e.current,2,null,e,null,null),ic(),i[bi]=null}};function Ec(e){this._internalRoot=e}Ec.prototype.unstable_scheduleHydration=function(e){if(e){var i=ds();e={blockedOn:null,target:e,priority:i};for(var a=0;a<es.length&&i!==0&&i<es[a].priority;a++);es.splice(a,0,e),a===0&&Z0(e)}};var $0=t.version;if($0!=="19.2.3")throw Error(s(527,$0,"19.2.3"));G.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var gy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{bt=bc.inject(gy),wt=bc}catch{}}return Yo.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",f=rg,d=og,S=lg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=G0(e,1,!1,null,null,a,o,null,f,d,S,J0),e[bi]=i.current,Jf(e),new _h(i)},Yo.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,f="",d=rg,S=og,R=lg,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),i=G0(e,1,!0,i,a??null,o,f,V,d,S,R,J0),i.context=V0(null),a=i.current,o=si(),o=Da(o),f=Ha(o),f.callback=null,Ga(a,f,o),a=o,i.current.lanes=a,pn(i,a),Hi(i),e[bi]=i.current,Jf(e),new Ec(i)},Yo.version="19.2.3",Yo}var c_;function Ay(){if(c_)return Sh.exports;c_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Sh.exports=Ty(),Sh.exports}var Ry=Ay();function Cy(r){const t=[],n=[],{rise:s,going:l,stepCount:c,width:u,thickness:h,liveLoadType:m,cheekVisible:p}=r;if(c<1)return{nodes:[],elements:[]};const _=De.E_MODULUS,g=u,v=h,y=g*v,b=g*Math.pow(v,3)/12,A=y/1e9*De.STEEL_DENSITY*De.GRAVITY,x=(m==="domestic"?1.5:2.5)*1e3*(u/1e3)/1e3;let F=0;t.push({id:F++,x:0,y:0,fixX:!0,fixY:!0,fixR:!0,loadX:0,loadY:0,moment:0});let D=0,L=0;for(let O=0;O<c;O++)D+=l,t.push({id:F++,x:D,y:L,fixX:!1,fixY:!1,fixR:!1,loadX:0,loadY:0,moment:0}),L+=s,t.push({id:F++,x:D,y:L,fixX:!1,fixY:!1,fixR:!1,loadX:0,loadY:0,moment:0});const H=t[t.length-1];H.fixX=!0,H.fixY=!0,H.fixR=!1;let B=0;for(let O=0;O<t.length-1;O++){const q=t[O],T=t[O+1],w=Math.abs(T.x-q.x);let I=A*1.35;w>.1&&(I+=x*1.5),n.push({id:B++,node1:q.id,node2:T.id,E:_,A:y,I:b,w:I,h:v})}if(p){const O=r.cheekSide==="two"?2:1,q=r.cheekThickness*O,T=r.cheekHeight,w=q*T,I=q*Math.pow(T,3)/12;let j=0;for(let tt=2;tt<t.length;tt+=2){const ct=tt;n.push({id:B++,node1:j,node2:ct,E:_,A:w,I,w:0,h:T}),j=ct}}return{nodes:t,elements:n}}class Ni{rows;cols;data;constructor(t,n){this.rows=t,this.cols=n,this.data=Array(t).fill(0).map(()=>Array(n).fill(0))}static zeros(t,n){return new Ni(t,n)}set(t,n,s){t>=0&&t<this.rows&&n>=0&&n<this.cols&&(this.data[t][n]=s)}get(t,n){return this.data[t][n]||0}add(t){if(this.rows!==t.rows||this.cols!==t.cols)throw new Error(`Matrix dimensions mismatch: ${this.rows}x${this.cols} vs ${t.rows}x${t.cols}`);const n=new Ni(this.rows,this.cols);for(let s=0;s<this.rows;s++)for(let l=0;l<this.cols;l++)n.data[s][l]=this.data[s][l]+t.data[s][l];return n}multiply(t){if(this.cols!==t.rows)throw new Error(`Matrix multiply mismatch: ${this.rows}x${this.cols} * ${t.rows}x${t.cols}`);const n=new Ni(this.rows,t.cols);for(let s=0;s<this.rows;s++)for(let l=0;l<t.cols;l++){let c=0;for(let u=0;u<this.cols;u++)c+=this.data[s][u]*t.data[u][l];n.data[s][l]=c}return n}multiplyVec(t){if(this.cols!==t.length)throw new Error(`Matrix-Vector dimension mismatch: Matrix cols ${this.cols} vs Vector len ${t.length}`);const n=new Array(this.rows).fill(0);for(let s=0;s<this.rows;s++){let l=0;for(let c=0;c<this.cols;c++)l+=this.data[s][c]*t[c];n[s]=l}return n}solve(t){if(this.rows!==this.cols)throw new Error("Matrix must be square to solve");if(this.rows!==t.length)throw new Error("Dimension mismatch for b");const n=this.rows,s=this.data.map(u=>[...u]),l=new Array(n).fill(0),c=[...t];for(let u=0;u<n;u++){let h=u,m=Math.abs(s[u][u]);for(let p=u+1;p<n;p++)Math.abs(s[p][u])>m&&(m=Math.abs(s[p][u]),h=p);if(h!==u&&([s[u],s[h]]=[s[h],s[u]],[c[u],c[h]]=[c[h],c[u]]),Math.abs(s[u][u])<1e-10)return console.warn("Matrix is near-singular"),l;for(let p=u+1;p<n;p++){const _=s[p][u]/s[u][u];for(let g=u;g<n;g++)s[p][g]-=_*s[u][g];c[p]-=_*c[u]}}for(let u=n-1;u>=0;u--){let h=0;for(let m=u+1;m<n;m++)h+=s[u][m]*l[m];l[u]=(c[u]-h)/s[u][u]}return l}}class wy{nodes;elements;dof;constructor(t,n){this.nodes=t,this.elements=n,this.dof=3}solve(){const n=this.nodes.length*this.dof,s=Ni.zeros(n,n),l=new Array(n).fill(0);this.elements.forEach(g=>{const v=this.nodes.find(K=>K.id===g.node1),y=this.nodes.find(K=>K.id===g.node2),b=y.x-v.x,A=y.y-v.y,M=Math.sqrt(b*b+A*A),x=b/M,F=A/M,{E:D,I:L,A:H}=g,B=D*H/M,O=12*D*L/Math.pow(M,3),q=6*D*L/Math.pow(M,2),T=4*D*L/M,w=2*D*L/M,I=Ni.zeros(6,6);I.set(0,0,B),I.set(0,3,-B),I.set(3,0,-B),I.set(3,3,B),I.set(1,1,O),I.set(1,2,q),I.set(1,4,-O),I.set(1,5,q),I.set(2,1,q),I.set(2,2,T),I.set(2,4,-q),I.set(2,5,w),I.set(4,1,-O),I.set(4,2,-q),I.set(4,4,O),I.set(4,5,-q),I.set(5,1,q),I.set(5,2,w),I.set(5,4,-q),I.set(5,5,T);const j=Ni.zeros(6,6);j.set(0,0,x),j.set(0,1,F),j.set(1,0,-F),j.set(1,1,x),j.set(2,2,1),j.set(3,3,x),j.set(3,4,F),j.set(4,3,-F),j.set(4,4,x),j.set(5,5,1);const tt=Ni.zeros(6,6);for(let K=0;K<6;K++)for(let gt=0;gt<6;gt++)tt.set(K,gt,j.get(gt,K));const ct=tt.multiply(I).multiply(j),at=this.nodes.indexOf(v),z=this.nodes.indexOf(y),G=[at*3,at*3+1,at*3+2,z*3,z*3+1,z*3+2];for(let K=0;K<6;K++)for(let gt=0;gt<6;gt++){const _t=G[K],U=G[gt],$=ct.get(K,gt);s.set(_t,U,s.get(_t,U)+$)}if(g.w!==0){const K=g.w*M;l[at*3+1]-=K/2,l[z*3+1]-=K/2}}),this.nodes.forEach((g,v)=>{l[v*3]+=g.loadX,l[v*3+1]+=g.loadY,l[v*3+2]+=g.moment});const c=[];this.nodes.forEach((g,v)=>{g.fixX&&c.push(v*3),g.fixY&&c.push(v*3+1),g.fixR&&c.push(v*3+2)}),c.forEach(g=>{for(let v=0;v<n;v++)s.set(g,v,0);s.set(g,g,1),l[g]=0});const u=s.solve(l),h=new Map;let m=0;this.nodes.forEach((g,v)=>{const y=u[v*3],b=u[v*3+1],A=u[v*3+2];h.set(g.id,{u:y,v:b,r:A});const M=Math.sqrt(y*y+b*b);M>m&&(m=M)});let p=0,_=0;return this.elements.forEach(g=>{const v=this.nodes.find(ge=>ge.id===g.node1),y=this.nodes.find(ge=>ge.id===g.node2),b=this.nodes.indexOf(v)*3,A=this.nodes.indexOf(y)*3,M=u[b],x=u[b+1],F=u[b+2],D=u[A],L=u[A+1],H=u[A+2],B=new Ni(6,1);B.set(0,0,M),B.set(1,0,x),B.set(2,0,F),B.set(3,0,D),B.set(4,0,L),B.set(5,0,H);const O=y.x-v.x,q=y.y-v.y,T=Math.sqrt(O*O+q*q),w=O/T,I=q/T,j=Ni.zeros(6,6);j.set(0,0,w),j.set(0,1,I),j.set(1,0,-I),j.set(1,1,w),j.set(2,2,1),j.set(3,3,w),j.set(3,4,I),j.set(4,3,-I),j.set(4,4,w),j.set(5,5,1);const tt=j.multiply(B),{E:ct,I:at,A:z,h:G}=g,K=ct*z/T,gt=12*ct*at/Math.pow(T,3),_t=6*ct*at/Math.pow(T,2),U=4*ct*at/T,$=2*ct*at/T,ot=Ni.zeros(6,6);ot.set(0,0,K),ot.set(0,3,-K),ot.set(3,0,-K),ot.set(3,3,K),ot.set(1,1,gt),ot.set(1,2,_t),ot.set(1,4,-gt),ot.set(1,5,_t),ot.set(2,1,_t),ot.set(2,2,U),ot.set(2,4,-_t),ot.set(2,5,$),ot.set(4,1,-gt),ot.set(4,2,-_t),ot.set(4,4,gt),ot.set(4,5,-_t),ot.set(5,1,_t),ot.set(5,2,$),ot.set(5,4,-_t),ot.set(5,5,U);const Rt=ot.multiply(tt),Gt=Rt.get(2,0),nt=Rt.get(5,0);let dt=0,Dt=0;g.w!==0&&(dt=g.w*T*T/12,Dt=-(g.w*T*T)/12);const Vt=Math.abs(Gt+dt),Wt=Math.abs(nt+Dt),pe=Math.max(Vt,Wt);if(p=Math.max(p,pe),G>0&&at>0){const ge=pe*(G/2)/at;_=Math.max(_,ge)}}),{displacements:h,reactions:new Map,maxDeflection:m,maxMoment:p,maxStress:_}}}const De={STEEL_DENSITY:7850,GRAVITY:9.81,E_MODULUS:21e4,YIELD_S275:275,YIELD_S355:355,LOCAL_POINT_LOAD:1e3,LOCAL_DEFLECTION_LIMIT:2,SLENDERNESS_LIMIT:50};class Dy{lines=[];header(t){this.lines.push(`
## ${t}`)}subHeader(t){this.lines.push(`
### ${t}`)}kv(t,n,s=""){this.lines.push(`- **${t}**: ${n} ${s}`)}text(t){this.lines.push(t)}build(){return this.lines.join(`
`)}}function Ly(r){const t=new Dy;t.header("Staircase Structural Analysis Report"),t.text(`Date: ${new Date().toLocaleDateString()}`);const n=pt=>pt||0,s=n(r.stepCount),l=n(r.width),c=n(r.rise),u=n(r.going),h=n(r.thickness),m=n(r.cheekHeight),p=n(r.cheekThickness),{steelGrade:_,liveLoadType:g,cheekVisible:v,cheekSide:y,calculationMethod:b}=r;t.subHeader("Design Inputs"),t.kv("Calculation Method",b==="matrix"?"Matrix Stiffness Method (FEM)":"Simplified Beam Analysis"),t.kv("Steel Grade",_),t.kv("Live Load Type",g),t.kv("Step Count",s),t.kv("Width",l,"mm"),t.kv("Rise",c,"mm"),t.kv("Going",u,"mm"),t.kv("Plate Thickness",h,"mm"),v?(t.kv("Stringers",`Yes (${y})`),t.kv("Stringer Height",m,"mm"),t.kv("Stringer Thickness",p,"mm")):t.kv("Stringers","No (Folded Plate only)");const A=De.E_MODULUS,M=_==="S275"?De.YIELD_S275:De.YIELD_S355;if(t.subHeader("Material Properties"),t.kv("Young's Modulus (E)",A,"MPa"),t.kv("Yield Strength (py)",M,"MPa"),t.kv("Density",De.STEEL_DENSITY,"kg/m3"),b==="matrix"){t.header("Matrix Analysis (Finite Element Method)");const pt=Cy(r);t.text(`Generated FEM Model: ${pt.nodes.length} Nodes, ${pt.elements.length} Elements.`);const ft=new wy(pt.nodes,pt.elements);t.text("Solving 2D Frame Stiffness Matrix...");const Zt=ft.solve();let Ut=Zt.maxDeflection;t.text("Solver Calculation Complete."),t.kv("Max Nodal Deflection (Global)",Ut.toFixed(2),"mm"),t.kv("Max Element Stress",Zt.maxStress.toFixed(2),"MPa");const jt=Ut,se=s*u/360,bt=Zt.maxStress;t.subHeader("Post-Processing Checks");const wt=De.STEEL_DENSITY;let Yt=0;pt.elements.forEach(Fi=>{const wa=pt.nodes.find(kn=>kn.id===Fi.node1),$i=pt.nodes.find(kn=>kn.id===Fi.node2),Da=$i.x-wa.x,ta=$i.y-wa.y,ds=Math.sqrt(Da*Da+ta*ta);Yt+=Fi.A*ds});const Ht=Yt/1e9*wt;t.kv("Total Steel Mass",Ht.toFixed(1),"kg");const Ot=jt>0?18/Math.sqrt(jt):0;t.kv("Natural Frequency (Approx)",Ot.toFixed(2),"Hz"),t.text("Formula: f = 18 / sqrt(delta)"),t.subHeader("Local Plate Checks");const W=Math.max(300,l)*Math.pow(h,3)/12,Ft=De.LOCAL_POINT_LOAD*Math.pow(u,3)/(192*De.E_MODULUS*(W||1));let Ct=0;const kt=u*Math.pow(h,3)/12;let Tt="Matrix MSM";if(!v)Ct=1e6;else if(y==="one"){const Fi=l/2;Ct=De.LOCAL_POINT_LOAD*Math.pow(Fi,3)/(3*De.E_MODULUS*(kt||1))}else Ct=De.LOCAL_POINT_LOAD*Math.pow(l,3)/(192*De.E_MODULUS*(kt||1));const yt=1/(1/(Ct||1e9)+1/(Ft||1e9)),Nt=yt<=De.LOCAL_DEFLECTION_LIMIT;t.kv("Local Tread Deflection",yt.toFixed(3),"mm"),t.text(`Limit: ${De.LOCAL_DEFLECTION_LIMIT} mm`),t.subHeader("Buckling Check");const ue=c/h,Ue=ue<=De.SLENDERNESS_LIMIT;t.kv("Slenderness Ratio (h/t)",ue.toFixed(1)),t.text(`Limit: ${De.SLENDERNESS_LIMIT}`);const Te=jt<=se,pn=bt<=M,Vn=Te&&pn&&Nt&&Ue?"SAFE":"UNSAFE";return t.header("Conclusion"),t.kv("Overall Status",Vn),{deflectionTotal:jt,deflectionBeam:jt*.2,deflectionSag:jt*.8,globalLimit:se,passGlobal:Te,stress:bt,passStress:pn,localDeflection:yt,passLocal:Nt,supportCondition:Tt,slendernessRatio:ue,passSlenderness:Ue,reactionForce:Ht*9.81/1e3,steelMassKg:Ht,frequency:Ot,overallStatus:Vn,span:s*u,inertia:0,totalLoad:0,report:t.build()}}t.header("Simplified Beam Analysis");const x=s*u,F=Math.sqrt(c**2+u**2),D=s*F;t.subHeader("Geometry & Loads"),t.kv("Span (L)",x,"mm"),t.kv("Slope Length",D.toFixed(0),"mm");const L=s*(c+u)*l*h/1e9;let H=0;v&&(H=(y==="two"?2:1)*D*m*p/1e9);const B=(L+H)*De.STEEL_DENSITY,O=B*De.GRAVITY,q=g==="domestic"?1.5:2.5,T=x*l/1e6,w=q*1e3*T,I=O+w,j=O*1.35+w*1.5;t.kv("Total Steel Mass",B.toFixed(1),"kg"),t.kv("Dead Load (Total)",O.toFixed(0),"N"),t.kv("Live Load (Total)",w.toFixed(0),"N"),t.kv("Total Load (SLS)",I.toFixed(0),"N"),t.kv("Total Load (ULS)",j.toFixed(0),"N");const tt=Math.atan(c/(u||1)),ct=c*Math.cos(tt),at=(c+u)/(F||1);let G=l*h*at*Math.pow(ct,2)/12;v&&(G+=(y==="two"?2:1)*(p*Math.pow(m,3)/12)),t.subHeader("Section Properties"),t.kv("Waist Thickness (t_waist)",ct.toFixed(1),"mm"),t.kv("Moment of Inertia (I_rigid)",G.toExponential(2),"mm4");const K=G>0?G:1,gt=x>0?x:1,_t=I/gt,U=5*_t*Math.pow(x,4)/(384*De.E_MODULUS*K),$=x/360;t.subHeader("Deflection Analysis"),t.text("Using Beam Formula: 5wL^4 / 384EI"),t.kv("Load per mm (SLS)",_t.toFixed(2),"N/mm"),t.kv("Rigid Beam Deflection",U.toFixed(2),"mm");let ot=0,Rt=0;if(v)ot=U,Rt=0,t.text("Note: Stringers provide full rigidity. Accordion effect ignored.");else{const pt=Math.pow(h/30,1.5),ft=Math.min(.98,.2+pt),Zt=K*ft;ot=5*_t*Math.pow(x,4)/(384*De.E_MODULUS*Zt),Rt=Math.max(0,ot-U),t.text('Folded Plate "Accordion" Effect applied.'),t.kv("Stiffness Efficiency",ft.toFixed(2)),t.kv("Effective Inertia",Zt.toExponential(2),"mm4")}t.kv("Total Deflection",ot.toFixed(2),"mm"),t.kv("Allowable Limit (L/360)",$.toFixed(2),"mm");const Gt=j/gt,nt=Gt*Math.pow(x,2)/8,dt=v&&m>ct?m:ct,Dt=nt*(dt/2)/K;t.subHeader("Stress Analysis"),t.kv("Load per mm (ULS)",Gt.toFixed(2),"N/mm"),t.kv("Max Moment (wL^2/8)",(nt/1e6).toFixed(2),"kNm"),t.kv("Bending Stress",Dt.toFixed(2),"MPa"),t.kv("Yield Limit",M,"MPa"),t.subHeader("Local Tread Analysis");const Wt=Math.max(300,l)*Math.pow(h,3)/12,pe=De.LOCAL_POINT_LOAD*Math.pow(u,3)/(192*De.E_MODULUS*(Wt||1));let ge=0;const fe=u*Math.pow(h,3)/12;let xt="";if(!v)ge=1e6,xt="2-Side (Risers)";else if(y==="one"){const pt=l/2;ge=De.LOCAL_POINT_LOAD*Math.pow(pt,3)/(3*De.E_MODULUS*(fe||1)),xt="3-Side (Cantilever)"}else ge=De.LOCAL_POINT_LOAD*Math.pow(l,3)/(192*De.E_MODULUS*(fe||1)),xt="4-Side (Fixed)";const At=1/(1/(ge||1e9)+1/(pe||1e9));t.kv("Local Deflection",At.toFixed(3),"mm"),t.text(`Scenario: ${xt}`);const Et=c/(h||1),zt=O/gt,P=U/(ot||1),Bt=5*zt*Math.pow(x,4)/(384*De.E_MODULUS*K)/(P||1),ie=Bt>0?18/Math.sqrt(Bt):0;t.subHeader("Vibration"),t.kv("Natural Frequency",ie.toFixed(2),"Hz");const Lt=ot<=$,N=Dt<=M,E=At<=De.LOCAL_DEFLECTION_LIMIT,X=Et<=De.SLENDERNESS_LIMIT;let ut="SAFE";return(!Lt||!N||!E||!X)&&(ut="UNSAFE"),t.header("Conclusion"),t.kv("Overall Status",ut),{deflectionTotal:ot,deflectionBeam:U,deflectionSag:Rt,globalLimit:$,passGlobal:Lt,stress:Dt,passStress:N,localDeflection:At,passLocal:E,supportCondition:xt,slendernessRatio:Et,passSlenderness:X,reactionForce:j/2/1e3,steelMassKg:B,frequency:ie,overallStatus:ut,span:x,inertia:G,totalLoad:j,report:t.build()}}const Ny=({inputs:r,setInputs:t,isOpen:n,toggleOpen:s})=>{const l=(u,h)=>{const m=h===""?0:parseFloat(h);t(p=>({...p,[u]:m}))},c=(u,h)=>{t(m=>({...m,[u]:h}))};return vt.jsx("div",{className:"w-full",children:vt.jsxs("div",{className:"bg-gray-900/90 backdrop-blur text-white rounded-xl shadow-2xl border border-gray-700 pointer-events-auto transition-all",children:[vt.jsxs("div",{className:"p-4 border-b border-gray-700 flex justify-between items-center cursor-pointer select-none",onClick:s,children:[vt.jsx("h2",{className:"text-lg font-bold text-blue-400",children:"Design Inputs"}),vt.jsx("span",{className:`transition transform ${n?"rotate-180":""}`,children:"▼"})]}),n&&vt.jsxs("div",{className:"p-4 space-y-4 max-h-[70vh] overflow-y-auto",children:[vt.jsxs("div",{className:"mb-4 bg-gray-800 p-1 rounded-lg flex text-xs font-bold text-center",children:[vt.jsx("div",{className:`flex-1 py-1.5 rounded cursor-pointer transition-colors ${r.calculationMethod==="simplified"?"bg-blue-600 text-white":"text-gray-400 hover:text-white"}`,onClick:()=>t(u=>({...u,calculationMethod:"simplified"})),children:"Simplified"}),vt.jsx("div",{className:`flex-1 py-1.5 rounded cursor-pointer transition-colors ${r.calculationMethod==="matrix"?"bg-purple-600 text-white":"text-gray-400 hover:text-white"}`,onClick:()=>t(u=>({...u,calculationMethod:"matrix"})),children:"Matrix (FEM)"})]}),vt.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[vt.jsxs("div",{children:[vt.jsx("label",{className:"text-xs text-gray-400",children:"Grade"}),vt.jsxs("select",{className:"w-full bg-gray-800 rounded p-1 text-sm border border-gray-600 focus:border-blue-500 outline-none",value:r.steelGrade,onChange:u=>c("steelGrade",u.target.value),children:[vt.jsx("option",{value:"S275",children:"S275"}),vt.jsx("option",{value:"S355",children:"S355"})]})]}),vt.jsxs("div",{children:[vt.jsx("label",{className:"text-xs text-gray-400",children:"Load"}),vt.jsxs("select",{className:"w-full bg-gray-800 rounded p-1 text-sm border border-gray-600 focus:border-blue-500 outline-none",value:r.liveLoadType,onChange:u=>c("liveLoadType",u.target.value),children:[vt.jsx("option",{value:"domestic",children:"Domestic"}),vt.jsx("option",{value:"office",children:"Office"})]})]})]}),vt.jsxs("div",{children:[vt.jsxs("label",{className:"text-xs text-gray-400 flex justify-between",children:[vt.jsx("span",{children:"Steps"}),vt.jsx("span",{children:r.stepCount})]}),vt.jsx("input",{type:"range",min:"3",max:"25",className:"w-full accent-blue-500",value:r.stepCount,onChange:u=>c("stepCount",parseInt(u.target.value))})]}),vt.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[vt.jsxs("div",{children:[vt.jsx("label",{className:"text-xs text-gray-400",children:"Rise (mm)"}),vt.jsx("input",{type:"number",className:"w-full bg-gray-800 rounded p-1 text-sm border border-gray-600",value:r.rise||"",onChange:u=>l("rise",u.target.value)})]}),vt.jsxs("div",{children:[vt.jsx("label",{className:"text-xs text-gray-400",children:"Going (mm)"}),vt.jsx("input",{type:"number",className:"w-full bg-gray-800 rounded p-1 text-sm border border-gray-600",value:r.going||"",onChange:u=>l("going",u.target.value)})]})]}),vt.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[vt.jsxs("div",{children:[vt.jsx("label",{className:"text-xs text-gray-400",children:"Width (mm)"}),vt.jsx("input",{type:"number",className:"w-full bg-gray-800 rounded p-1 text-sm border border-gray-600",value:r.width||"",onChange:u=>l("width",u.target.value)})]}),vt.jsxs("div",{children:[vt.jsx("label",{className:"text-xs text-gray-400",children:"Thick (mm)"}),vt.jsx("input",{type:"number",className:"w-full bg-gray-800 rounded p-1 text-sm border border-gray-600",value:r.thickness||"",onChange:u=>l("thickness",u.target.value)})]})]}),vt.jsxs("div",{className:"pt-4 border-t border-gray-700",children:[vt.jsxs("label",{className:"flex items-center text-sm font-bold text-gray-300 mb-2 cursor-pointer",children:[vt.jsx("input",{type:"checkbox",className:"mr-2 accent-blue-500",checked:r.cheekVisible,onChange:u=>c("cheekVisible",u.target.checked)}),"Add Stringers"]}),r.cheekVisible&&vt.jsxs("div",{className:"grid grid-cols-2 gap-3 pl-2 border-l-2 border-gray-700 animate-in fade-in slide-in-from-left-2",children:[vt.jsxs("select",{className:"bg-gray-800 rounded p-1 text-sm border border-gray-600",value:r.cheekSide,onChange:u=>c("cheekSide",u.target.value),children:[vt.jsx("option",{value:"one",children:"One Side"}),vt.jsx("option",{value:"two",children:"Two Sides"})]}),vt.jsx("input",{type:"number",placeholder:"Height",className:"bg-gray-800 rounded p-1 text-sm border border-gray-600",value:r.cheekHeight||"",onChange:u=>l("cheekHeight",u.target.value)})]})]})]})]})})},Uy=({beam:r,sag:t,total:n,limit:s})=>{const l=Math.min(100,r/(n||1)*100),c=Math.min(100,t/(n||1)*100);return vt.jsxs("div",{className:"mt-3 bg-gray-950/50 p-3 rounded border border-gray-700",children:[vt.jsxs("div",{className:"flex justify-between items-end mb-1",children:[vt.jsx("span",{className:"text-xs text-gray-400 font-semibold uppercase",children:"Total Deflection"}),vt.jsxs("span",{className:`text-lg font-mono font-bold ${n>s?"text-red-500":"text-green-400"}`,children:[n.toFixed(1)," ",vt.jsx("span",{className:"text-xs text-gray-500",children:"mm"})]})]}),vt.jsxs("div",{className:"w-full h-2 bg-gray-700 rounded-full flex overflow-hidden mb-2",children:[vt.jsx("div",{style:{width:`${l}%`},className:"bg-blue-500 h-full",title:"Beam Bending"}),vt.jsx("div",{style:{width:`${c}%`},className:"bg-orange-500 h-full",title:"Accordion Sag"})]}),vt.jsxs("div",{className:"flex justify-between text-[10px] space-x-2",children:[vt.jsxs("div",{className:"flex items-center",children:[vt.jsx("div",{className:"w-2 h-2 rounded-full bg-blue-500 mr-1"}),vt.jsxs("span",{className:"text-gray-400",children:["Beam Bend: ",vt.jsxs("span",{className:"text-gray-200 font-mono",children:[r.toFixed(1),"mm"]})]})]}),vt.jsxs("div",{className:"flex items-center",children:[vt.jsx("div",{className:"w-2 h-2 rounded-full bg-orange-500 mr-1"}),vt.jsxs("span",{className:"text-gray-400",children:["Unfolding: ",vt.jsxs("span",{className:"text-gray-200 font-mono",children:[t.toFixed(1),"mm"]})]})]})]}),vt.jsxs("div",{className:"text-[10px] text-right text-gray-500 mt-1",children:["Limit: ",s.toFixed(1),"mm"]})]})},Oy=({pass:r,value:t,unit:n,label:s,subLabel:l,warning:c})=>{let u=r?"border-green-600":"border-red-600",h=r?"bg-green-900/30":"bg-red-900/30",m=r?"bg-green-600":"bg-red-600",p=r?"PASS":"FAIL";return c&&(u="border-yellow-600",h="bg-yellow-900/30",m="bg-yellow-600",p="WARNING"),vt.jsxs("div",{className:`p-2 rounded border ${u} ${h}`,children:[vt.jsxs("div",{className:"flex justify-between items-center mb-1",children:[vt.jsx("span",{className:"text-xs text-gray-400 uppercase font-semibold",children:s}),vt.jsx("span",{className:`text-[10px] font-bold px-1.5 py-0.5 rounded text-white ${m}`,children:p})]}),vt.jsxs("div",{className:"text-xl font-mono font-bold text-gray-100",children:[t," ",vt.jsx("span",{className:"text-sm text-gray-500",children:n})]}),l&&vt.jsx("div",{className:"text-[10px] text-gray-400 mt-1",children:l})]})},Py=({results:r,isOpen:t,toggleOpen:n,steelGrade:s})=>vt.jsx("div",{className:"w-full",children:vt.jsxs("div",{className:"bg-gray-900/90 backdrop-blur text-white rounded-xl shadow-2xl border border-gray-700 pointer-events-auto",children:[vt.jsxs("div",{className:`p-4 border-b border-gray-700 flex justify-between items-center cursor-pointer select-none ${r.overallStatus==="SAFE"?"bg-green-900/20":"bg-red-900/20"}`,onClick:n,children:[vt.jsxs("h2",{className:"text-lg font-bold flex items-center",children:[vt.jsx("span",{className:`mr-2 px-2 py-0.5 rounded text-sm ${r.overallStatus==="SAFE"?"bg-green-600":"bg-red-600"}`,children:r.overallStatus}),"Matrix"]}),vt.jsx("span",{className:`transition transform ${t?"rotate-180":""}`,children:"▼"})]}),t&&vt.jsxs("div",{className:"p-4 space-y-4 max-h-[70vh] overflow-y-auto",children:[vt.jsxs("div",{className:"space-y-2",children:[vt.jsx("h3",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider",children:"Global Beam Theory"}),vt.jsx(Uy,{beam:r.deflectionBeam,sag:r.deflectionSag,total:r.deflectionTotal,limit:r.globalLimit}),vt.jsx("div",{className:"mt-2",children:vt.jsx(Oy,{pass:r.passStress,value:r.stress.toFixed(0),unit:"MPa",label:"Beam Stress",subLabel:`Yield: ${s==="S275"?De.YIELD_S275:De.YIELD_S355} MPa`})}),vt.jsxs("div",{className:"text-[10px] text-gray-500 font-mono flex justify-between pt-1 px-1",children:[vt.jsxs("span",{children:["Span: ",r.span,"mm"]}),vt.jsxs("span",{children:["Load: ",(r.totalLoad/1e3).toFixed(1),"kN"]}),vt.jsxs("span",{children:["I_rigid: ",(r.inertia/1e4).toFixed(0),"e4"]})]})]}),vt.jsxs("div",{className:"space-y-2",children:[vt.jsx("h3",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider",children:"Reality Checks (Local)"}),vt.jsxs("div",{className:`p-3 rounded border ${r.passLocal?"border-gray-700 bg-gray-800":"border-red-500 bg-red-900/20"}`,children:[vt.jsxs("div",{className:"flex justify-between items-start mb-1",children:[vt.jsxs("div",{children:[vt.jsx("div",{className:"text-sm font-bold text-gray-200",children:"Tread Bounciness"}),vt.jsx("div",{className:"text-[10px] text-blue-300 font-mono",children:r.supportCondition})]}),vt.jsx("span",{className:`text-[10px] font-bold px-1.5 py-0.5 rounded ${r.passLocal?"bg-green-600 text-white":"bg-red-600 text-white"}`,children:r.passLocal?"PASS":"FAIL"})]}),vt.jsxs("div",{className:"mt-1 flex items-baseline",children:[vt.jsx("span",{className:"text-xl font-mono font-bold",children:r.localDeflection.toFixed(2)}),vt.jsx("span",{className:"text-xs text-gray-400 ml-1",children:"mm (1kN Load)"})]})]}),vt.jsxs("div",{className:`p-3 rounded border ${r.passSlenderness?"border-gray-700 bg-gray-800":"border-red-500 bg-red-900/20"}`,children:[vt.jsxs("div",{className:"flex justify-between items-start mb-1",children:[vt.jsx("span",{className:"text-sm font-bold text-gray-200",children:"Plate Buckling"}),vt.jsx("span",{className:`text-[10px] font-bold px-1.5 py-0.5 rounded ${r.passSlenderness?"bg-green-600 text-white":"bg-red-600 text-white"}`,children:r.passSlenderness?"PASS":"FAIL"})]}),vt.jsxs("div",{className:"mt-1 flex items-baseline",children:[vt.jsx("span",{className:"text-xl font-mono font-bold",children:r.slendernessRatio.toFixed(1)}),vt.jsx("span",{className:"text-xs text-gray-400 ml-1",children:"Ratio (b/t)"})]})]})]}),vt.jsxs("div",{className:"grid grid-cols-2 gap-2 text-center pt-2 border-t border-gray-700",children:[vt.jsxs("div",{children:[vt.jsx("div",{className:"text-xs text-gray-500",children:"Weight"}),vt.jsxs("div",{className:"text-sm font-bold text-gray-300",children:[r.steelMassKg.toFixed(0)," kg"]})]}),vt.jsxs("div",{children:[vt.jsx("div",{className:"text-xs text-gray-500",children:"Freq"}),vt.jsxs("div",{className:`text-sm font-bold ${r.frequency>10?"text-green-400":"text-yellow-400"}`,children:[r.frequency.toFixed(1)," Hz"]})]})]})]})]})});const ap="182",Vr={ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fy=0,u_=1,zy=2,Qc=1,yv=2,nl=3,hs=0,Jn=1,ki=2,Ta=0,kr=1,f_=2,h_=3,d_=4,Iy=5,Is=100,By=101,Hy=102,Gy=103,Vy=104,ky=200,Xy=201,Wy=202,qy=203,rd=204,od=205,Yy=206,jy=207,Zy=208,Ky=209,Qy=210,Jy=211,$y=212,tM=213,eM=214,ld=0,cd=1,ud=2,Wr=3,fd=4,hd=5,dd=6,pd=7,Mv=0,nM=1,iM=2,qi=0,Ev=1,bv=2,Tv=3,Av=4,Rv=5,Cv=6,wv=7,Dv=300,Vs=301,qr=302,md=303,gd=304,cu=306,_d=1e3,ba=1001,vd=1002,Nn=1003,aM=1004,Tc=1005,zn=1006,bh=1007,Hs=1008,li=1009,Lv=1010,Nv=1011,ll=1012,sp=1013,Zi=1014,Xi=1015,Ra=1016,rp=1017,op=1018,cl=1020,Uv=35902,Ov=35899,Pv=1021,Fv=1022,Oi=1023,Ca=1026,Gs=1027,zv=1028,lp=1029,Yr=1030,cp=1031,up=1033,Jc=33776,$c=33777,tu=33778,eu=33779,xd=35840,Sd=35841,yd=35842,Md=35843,Ed=36196,bd=37492,Td=37496,Ad=37488,Rd=37489,Cd=37490,wd=37491,Dd=37808,Ld=37809,Nd=37810,Ud=37811,Od=37812,Pd=37813,Fd=37814,zd=37815,Id=37816,Bd=37817,Hd=37818,Gd=37819,Vd=37820,kd=37821,Xd=36492,Wd=36494,qd=36495,Yd=36283,jd=36284,Zd=36285,Kd=36286,sM=3200,Iv=0,rM=1,us="",yi="srgb",jr="srgb-linear",au="linear",ke="srgb",Ar=7680,p_=519,oM=512,lM=513,cM=514,fp=515,uM=516,fM=517,hp=518,hM=519,m_=35044,g_="300 es",Wi=2e3,su=2001;function Bv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dM(){const r=ru("canvas");return r.style.display="block",r}const __={};function v_(...r){const t="THREE."+r.shift();console.log(t,...r)}function he(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Le(...r){const t="THREE."+r.shift();console.error(t,...r)}function ul(...r){const t=r.join(" ");t in __||(__[t]=!0,he(...r))}function pM(r,t,n){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}class Ws{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,u=l.length;c<u;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nu=Math.PI/180,Qd=180/Math.PI;function Qr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Me(r,t,n){return Math.max(t,Math.min(n,r))}function mM(r,t){return(r%t+t)%t}function Th(r,t,n){return(1-n)*r+n*t}function jo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const gM={DEG2RAD:nu};class Pt{constructor(t=0,n=0){Pt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,l=t.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*s-u*l+t.x,this.y=c*l+u*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ks{constructor(t=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=l}static slerpFlat(t,n,s,l,c,u,h){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],v=c[u+0],y=c[u+1],b=c[u+2],A=c[u+3];if(h<=0){t[n+0]=m,t[n+1]=p,t[n+2]=_,t[n+3]=g;return}if(h>=1){t[n+0]=v,t[n+1]=y,t[n+2]=b,t[n+3]=A;return}if(g!==A||m!==v||p!==y||_!==b){let M=m*v+p*y+_*b+g*A;M<0&&(v=-v,y=-y,b=-b,A=-A,M=-M);let x=1-h;if(M<.9995){const F=Math.acos(M),D=Math.sin(F);x=Math.sin(x*F)/D,h=Math.sin(h*F)/D,m=m*x+v*h,p=p*x+y*h,_=_*x+b*h,g=g*x+A*h}else{m=m*x+v*h,p=p*x+y*h,_=_*x+b*h,g=g*x+A*h;const F=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=F,p*=F,_*=F,g*=F}}t[n]=m,t[n+1]=p,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,s,l,c,u){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[u],v=c[u+1],y=c[u+2],b=c[u+3];return t[n]=h*b+_*g+m*y-p*v,t[n+1]=m*b+_*v+p*g-h*y,t[n+2]=p*b+_*y+h*v-m*g,t[n+3]=_*b-h*g-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,l){return this._x=t,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,l=t._y,c=t._z,u=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),g=h(c/2),v=m(s/2),y=m(l/2),b=m(c/2);switch(u){case"XYZ":this._x=v*_*g+p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g-v*y*b;break;case"YXZ":this._x=v*_*g+p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g+v*y*b;break;case"ZXY":this._x=v*_*g-p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g-v*y*b;break;case"ZYX":this._x=v*_*g-p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g+v*y*b;break;case"YZX":this._x=v*_*g+p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g-v*y*b;break;case"XZY":this._x=v*_*g-p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g+v*y*b;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],l=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],_=n[6],g=n[10],v=s+h+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(u-l)*y}else if(s>h&&s>g){const y=2*Math.sqrt(1+s-h-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+u)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-s-g);this._w=(c-p)/y,this._x=(l+u)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-s-h);this._w=(u-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,l=t._y,c=t._z,u=t._w,h=n._x,m=n._y,p=n._z,_=n._w;return this._x=s*_+u*h+l*p-c*m,this._y=l*_+u*m+c*h-s*p,this._z=c*_+u*p+s*m-l*h,this._w=u*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,u=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,n=0,s=0){Y.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(x_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(x_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=t.elements,u=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*u,this}applyQuaternion(t){const n=this.x,s=this.y,l=this.z,c=t.x,u=t.y,h=t.z,m=t.w,p=2*(u*l-h*s),_=2*(h*n-c*l),g=2*(c*s-u*n);return this.x=n+m*p+u*g-h*_,this.y=s+m*_+h*p-c*g,this.z=l+m*g+c*_-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,l=t.y,c=t.z,u=n.x,h=n.y,m=n.z;return this.x=l*m-c*h,this.y=c*u-s*m,this.z=s*h-l*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return n*n+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const l=Math.sin(n)*t;return this.x=l*Math.sin(s),this.y=Math.cos(n)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new Y,x_=new ks;class Se{constructor(t,n,s,l,c,u,h,m,p){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,u,h,m,p)}set(t,n,s,l,c,u,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=n,_[4]=c,_[5]=m,_[6]=s,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,u=s[0],h=s[3],m=s[6],p=s[1],_=s[4],g=s[7],v=s[2],y=s[5],b=s[8],A=l[0],M=l[3],x=l[6],F=l[1],D=l[4],L=l[7],H=l[2],B=l[5],O=l[8];return c[0]=u*A+h*F+m*H,c[3]=u*M+h*D+m*B,c[6]=u*x+h*L+m*O,c[1]=p*A+_*F+g*H,c[4]=p*M+_*D+g*B,c[7]=p*x+_*L+g*O,c[2]=v*A+y*F+b*H,c[5]=v*M+y*D+b*B,c[8]=v*x+y*L+b*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return n*u*_-n*h*p-s*c*_+s*h*m+l*c*p-l*u*m}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=_*u-h*p,v=h*m-_*c,y=p*c-u*m,b=n*g+s*v+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=g*A,t[1]=(l*p-_*s)*A,t[2]=(h*s-l*u)*A,t[3]=v*A,t[4]=(_*n-l*m)*A,t[5]=(l*c-h*n)*A,t[6]=y*A,t[7]=(s*m-p*n)*A,t[8]=(u*n-s*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,l,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*u+p*h)+u+t,-l*p,l*m,-l*(-p*u+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Rh.makeScale(t,n)),this}rotate(t){return this.premultiply(Rh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Rh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rh=new Se,S_=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y_=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _M(){const r={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(l,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===ke&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===ke&&(l.r=Xr(l.r),l.g=Xr(l.g),l.b=Xr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,u){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ul("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ul("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[jr]:{primaries:t,whitePoint:s,transfer:au,toXYZ:S_,fromXYZ:y_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:s,transfer:ke,toXYZ:S_,fromXYZ:y_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),r}const Ne=_M();function Aa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Rr;class vM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Rr===void 0&&(Rr=ru("canvas")),Rr.width=t.width,Rr.height=t.height;const l=Rr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Rr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ru("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let u=0;u<c.length;u++)c[u]=Aa(c[u]/255)*255;return s.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Aa(n[s]/255)*255):n[s]=Aa(n[s]);return{data:n,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xM=0;class dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let u=0,h=l.length;u<h;u++)l[u].isDataTexture?c.push(Ch(l[u].image)):c.push(Ch(l[u]))}else c=Ch(l);s.url=c}return n||(t.images[this.uuid]=s),s}}function Ch(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let SM=0;const wh=new Y;class Hn extends Ws{constructor(t=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,s=ba,l=ba,c=zn,u=Hs,h=Oi,m=li,p=Hn.DEFAULT_ANISOTROPY,_=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Qr(),this.name="",this.source=new dp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){he(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){he(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _d:t.x=t.x-Math.floor(t.x);break;case ba:t.x=t.x<0?0:1;break;case vd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _d:t.y=t.y-Math.floor(t.y);break;case ba:t.y=t.y<0?0:1;break;case vd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Dv;Hn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,n=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,l){return this.x=t,this.y=n,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*s+u[8]*l+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*l+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*l+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*l+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],v=m[1],y=m[5],b=m[9],A=m[2],M=m[6],x=m[10];if(Math.abs(_-v)<.01&&Math.abs(g-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+A)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(p+1)/2,L=(y+1)/2,H=(x+1)/2,B=(_+v)/4,O=(g+A)/4,q=(b+M)/4;return D>L&&D>H?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=B/s,c=O/s):L>H?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=B/l,c=q/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=O/c,l=q/c),this.set(s,l,c,n),this}let F=Math.sqrt((M-b)*(M-b)+(g-A)*(g-A)+(v-_)*(v-_));return Math.abs(F)<.001&&(F=1),this.x=(M-b)/F,this.y=(g-A)/F,this.z=(v-_)/F,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this.w=Me(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this.w=Me(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yM extends Ws{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new sn(0,0,t,n),this.scissorTest=!1,this.viewport=new sn(0,0,t,n);const l={width:t,height:n,depth:s.depth},c=new Hn(l);this.textures=[];const u=s.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new dp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends yM{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class Hv extends Hn{constructor(t=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class MM extends Hn{constructor(t=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(t=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(wi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(wi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=wi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,wi):wi.fromBufferAttribute(c,u),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ac.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ac.copy(s.boundingBox)),Ac.applyMatrix4(t.matrixWorld),this.union(Ac)}const l=t.children;for(let c=0,u=l.length;c<u;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),Rc.subVectors(this.max,Zo),Cr.subVectors(t.a,Zo),wr.subVectors(t.b,Zo),Dr.subVectors(t.c,Zo),is.subVectors(wr,Cr),as.subVectors(Dr,wr),Ns.subVectors(Cr,Dr);let n=[0,-is.z,is.y,0,-as.z,as.y,0,-Ns.z,Ns.y,is.z,0,-is.x,as.z,0,-as.x,Ns.z,0,-Ns.x,-is.y,is.x,0,-as.y,as.x,0,-Ns.y,Ns.x,0];return!Dh(n,Cr,wr,Dr,Rc)||(n=[1,0,0,0,1,0,0,0,1],!Dh(n,Cr,wr,Dr,Rc))?!1:(Cc.crossVectors(is,as),n=[Cc.x,Cc.y,Cc.z],Dh(n,Cr,wr,Dr,Rc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xa=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],wi=new Y,Ac=new Jr,Cr=new Y,wr=new Y,Dr=new Y,is=new Y,as=new Y,Ns=new Y,Zo=new Y,Rc=new Y,Cc=new Y,Us=new Y;function Dh(r,t,n,s,l){for(let c=0,u=r.length-3;c<=u;c+=3){Us.fromArray(r,c);const h=l.x*Math.abs(Us.x)+l.y*Math.abs(Us.y)+l.z*Math.abs(Us.z),m=t.dot(Us),p=n.dot(Us),_=s.dot(Us);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const EM=new Jr,Ko=new Y,Lh=new Y;class uu{constructor(t=new Y,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):EM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,u=t.length;c<u;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);const n=Ko.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(Ko,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(Lh)),this.expandByPoint(Ko.copy(t.center).sub(Lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Sa=new Y,Nh=new Y,wc=new Y,ss=new Y,Uh=new Y,Dc=new Y,Oh=new Y;class pp{constructor(t=new Y,n=new Y(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Sa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Sa.copy(this.origin).addScaledVector(this.direction,n),Sa.distanceToSquared(t))}distanceSqToSegment(t,n,s,l){Nh.copy(t).add(n).multiplyScalar(.5),wc.copy(n).sub(t).normalize(),ss.copy(this.origin).sub(Nh);const c=t.distanceTo(n)*.5,u=-this.direction.dot(wc),h=ss.dot(this.direction),m=-ss.dot(wc),p=ss.lengthSq(),_=Math.abs(1-u*u);let g,v,y,b;if(_>0)if(g=u*m-h,v=u*h-m,b=c*_,g>=0)if(v>=-b)if(v<=b){const A=1/_;g*=A,v*=A,y=g*(g+u*v+2*h)+v*(u*g+v+2*m)+p}else v=c,g=Math.max(0,-(u*v+h)),y=-g*g+v*(v+2*m)+p;else v=-c,g=Math.max(0,-(u*v+h)),y=-g*g+v*(v+2*m)+p;else v<=-b?(g=Math.max(0,-(-u*c+h)),v=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+p):v<=b?(g=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(g=Math.max(0,-(u*c+h)),v=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+p);else v=u>0?-c:c,g=Math.max(0,-(u*v+h)),y=-g*g+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Nh).addScaledVector(wc,v),y}intersectSphere(t,n){Sa.subVectors(t.center,this.origin);const s=Sa.dot(this.direction),l=Sa.dot(Sa)-s*s,c=t.radius*t.radius;if(l>c)return null;const u=Math.sqrt(c-l),h=s-u,m=s+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,l,c,u,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),_>=0?(c=(t.min.y-v.y)*_,u=(t.max.y-v.y)*_):(c=(t.max.y-v.y)*_,u=(t.min.y-v.y)*_),s>u||c>l||((c>s||isNaN(s))&&(s=c),(u<l||isNaN(l))&&(l=u),g>=0?(h=(t.min.z-v.z)*g,m=(t.max.z-v.z)*g):(h=(t.max.z-v.z)*g,m=(t.min.z-v.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(t){return this.intersectBox(t,Sa)!==null}intersectTriangle(t,n,s,l,c){Uh.subVectors(n,t),Dc.subVectors(s,t),Oh.crossVectors(Uh,Dc);let u=this.direction.dot(Oh),h;if(u>0){if(l)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ss.subVectors(this.origin,t);const m=h*this.direction.dot(Dc.crossVectors(ss,Dc));if(m<0)return null;const p=h*this.direction.dot(Uh.cross(ss));if(p<0||m+p>u)return null;const _=-h*ss.dot(Oh);return _<0?null:this.at(_/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,n,s,l,c,u,h,m,p,_,g,v,y,b,A,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,u,h,m,p,_,g,v,y,b,A,M)}set(t,n,s,l,c,u,h,m,p,_,g,v,y,b,A,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=s,x[12]=l,x[1]=c,x[5]=u,x[9]=h,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=b,x[11]=A,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,l=1/Lr.setFromMatrixColumn(t,0).length(),c=1/Lr.setFromMatrixColumn(t,1).length(),u=1/Lr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,l=t.y,c=t.z,u=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const v=u*_,y=u*g,b=h*_,A=h*g;n[0]=m*_,n[4]=-m*g,n[8]=p,n[1]=y+b*p,n[5]=v-A*p,n[9]=-h*m,n[2]=A-v*p,n[6]=b+y*p,n[10]=u*m}else if(t.order==="YXZ"){const v=m*_,y=m*g,b=p*_,A=p*g;n[0]=v+A*h,n[4]=b*h-y,n[8]=u*p,n[1]=u*g,n[5]=u*_,n[9]=-h,n[2]=y*h-b,n[6]=A+v*h,n[10]=u*m}else if(t.order==="ZXY"){const v=m*_,y=m*g,b=p*_,A=p*g;n[0]=v-A*h,n[4]=-u*g,n[8]=b+y*h,n[1]=y+b*h,n[5]=u*_,n[9]=A-v*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(t.order==="ZYX"){const v=u*_,y=u*g,b=h*_,A=h*g;n[0]=m*_,n[4]=b*p-y,n[8]=v*p+A,n[1]=m*g,n[5]=A*p+v,n[9]=y*p-b,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(t.order==="YZX"){const v=u*m,y=u*p,b=h*m,A=h*p;n[0]=m*_,n[4]=A-v*g,n[8]=b*g+y,n[1]=g,n[5]=u*_,n[9]=-h*_,n[2]=-p*_,n[6]=y*g+b,n[10]=v-A*g}else if(t.order==="XZY"){const v=u*m,y=u*p,b=h*m,A=h*p;n[0]=m*_,n[4]=-g,n[8]=p*_,n[1]=v*g+A,n[5]=u*_,n[9]=y*g-b,n[2]=b*g-y,n[6]=h*_,n[10]=A*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bM,t,TM)}lookAt(t,n,s){const l=this.elements;return ri.subVectors(t,n),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),rs.crossVectors(s,ri),rs.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),rs.crossVectors(s,ri)),rs.normalize(),Lc.crossVectors(ri,rs),l[0]=rs.x,l[4]=Lc.x,l[8]=ri.x,l[1]=rs.y,l[5]=Lc.y,l[9]=ri.y,l[2]=rs.z,l[6]=Lc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,u=s[0],h=s[4],m=s[8],p=s[12],_=s[1],g=s[5],v=s[9],y=s[13],b=s[2],A=s[6],M=s[10],x=s[14],F=s[3],D=s[7],L=s[11],H=s[15],B=l[0],O=l[4],q=l[8],T=l[12],w=l[1],I=l[5],j=l[9],tt=l[13],ct=l[2],at=l[6],z=l[10],G=l[14],K=l[3],gt=l[7],_t=l[11],U=l[15];return c[0]=u*B+h*w+m*ct+p*K,c[4]=u*O+h*I+m*at+p*gt,c[8]=u*q+h*j+m*z+p*_t,c[12]=u*T+h*tt+m*G+p*U,c[1]=_*B+g*w+v*ct+y*K,c[5]=_*O+g*I+v*at+y*gt,c[9]=_*q+g*j+v*z+y*_t,c[13]=_*T+g*tt+v*G+y*U,c[2]=b*B+A*w+M*ct+x*K,c[6]=b*O+A*I+M*at+x*gt,c[10]=b*q+A*j+M*z+x*_t,c[14]=b*T+A*tt+M*G+x*U,c[3]=F*B+D*w+L*ct+H*K,c[7]=F*O+D*I+L*at+H*gt,c[11]=F*q+D*j+L*z+H*_t,c[15]=F*T+D*tt+L*G+H*U,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],l=t[8],c=t[12],u=t[1],h=t[5],m=t[9],p=t[13],_=t[2],g=t[6],v=t[10],y=t[14],b=t[3],A=t[7],M=t[11],x=t[15],F=m*y-p*v,D=h*y-p*g,L=h*v-m*g,H=u*y-p*_,B=u*v-m*_,O=u*g-h*_;return n*(A*F-M*D+x*L)-s*(b*F-M*H+x*B)+l*(b*D-A*H+x*O)-c*(b*L-A*B+M*O)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=t[9],v=t[10],y=t[11],b=t[12],A=t[13],M=t[14],x=t[15],F=g*M*p-A*v*p+A*m*y-h*M*y-g*m*x+h*v*x,D=b*v*p-_*M*p-b*m*y+u*M*y+_*m*x-u*v*x,L=_*A*p-b*g*p+b*h*y-u*A*y-_*h*x+u*g*x,H=b*g*m-_*A*m-b*h*v+u*A*v+_*h*M-u*g*M,B=n*F+s*D+l*L+c*H;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return t[0]=F*O,t[1]=(A*v*c-g*M*c-A*l*y+s*M*y+g*l*x-s*v*x)*O,t[2]=(h*M*c-A*m*c+A*l*p-s*M*p-h*l*x+s*m*x)*O,t[3]=(g*m*c-h*v*c-g*l*p+s*v*p+h*l*y-s*m*y)*O,t[4]=D*O,t[5]=(_*M*c-b*v*c+b*l*y-n*M*y-_*l*x+n*v*x)*O,t[6]=(b*m*c-u*M*c-b*l*p+n*M*p+u*l*x-n*m*x)*O,t[7]=(u*v*c-_*m*c+_*l*p-n*v*p-u*l*y+n*m*y)*O,t[8]=L*O,t[9]=(b*g*c-_*A*c-b*s*y+n*A*y+_*s*x-n*g*x)*O,t[10]=(u*A*c-b*h*c+b*s*p-n*A*p-u*s*x+n*h*x)*O,t[11]=(_*h*c-u*g*c-_*s*p+n*g*p+u*s*y-n*h*y)*O,t[12]=H*O,t[13]=(_*A*l-b*g*l+b*s*v-n*A*v-_*s*M+n*g*M)*O,t[14]=(b*h*l-u*A*l-b*s*m+n*A*m+u*s*M-n*h*M)*O,t[15]=(u*g*l-_*h*l+_*s*m-n*g*m-u*s*v+n*h*v)*O,this}scale(t){const n=this.elements,s=t.x,l=t.y,c=t.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,u=t.x,h=t.y,m=t.z,p=c*u,_=c*h;return this.set(p*u+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*u,0,p*m-l*h,_*m+l*u,c*m*m+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,l,c,u){return this.set(1,s,c,0,t,1,u,0,n,l,1,0,0,0,0,1),this}compose(t,n,s){const l=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,_=u+u,g=h+h,v=c*p,y=c*_,b=c*g,A=u*_,M=u*g,x=h*g,F=m*p,D=m*_,L=m*g,H=s.x,B=s.y,O=s.z;return l[0]=(1-(A+x))*H,l[1]=(y+L)*H,l[2]=(b-D)*H,l[3]=0,l[4]=(y-L)*B,l[5]=(1-(v+x))*B,l[6]=(M+F)*B,l[7]=0,l[8]=(b+D)*O,l[9]=(M-F)*O,l[10]=(1-(v+A))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let c=Lr.set(l[0],l[1],l[2]).length();const u=Lr.set(l[4],l[5],l[6]).length(),h=Lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Di.copy(this);const p=1/c,_=1/u,g=1/h;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=_,Di.elements[5]*=_,Di.elements[6]*=_,Di.elements[8]*=g,Di.elements[9]*=g,Di.elements[10]*=g,n.setFromRotationMatrix(Di),s.x=c,s.y=u,s.z=h,this}makePerspective(t,n,s,l,c,u,h=Wi,m=!1){const p=this.elements,_=2*c/(n-t),g=2*c/(s-l),v=(n+t)/(n-t),y=(s+l)/(s-l);let b,A;if(m)b=c/(u-c),A=u*c/(u-c);else if(h===Wi)b=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(h===su)b=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,s,l,c,u,h=Wi,m=!1){const p=this.elements,_=2/(n-t),g=2/(s-l),v=-(n+t)/(n-t),y=-(s+l)/(s-l);let b,A;if(m)b=1/(u-c),A=u/(u-c);else if(h===Wi)b=-2/(u-c),A=-(u+c)/(u-c);else if(h===su)b=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const Lr=new Y,Di=new tn,bM=new Y(0,0,0),TM=new Y(1,1,1),rs=new Y,Lc=new Y,ri=new Y,M_=new tn,E_=new ks;class Ki{constructor(t=0,n=0,s=0,l=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,l=this._order){return this._x=t,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const l=t.elements,c=l[0],u=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],v=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return M_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(M_,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return E_.setFromEuler(this),this.setFromQuaternion(E_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class Gv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let AM=0;const b_=new Y,Nr=new ks,ya=new tn,Nc=new Y,Qo=new Y,RM=new Y,CM=new ks,T_=new Y(1,0,0),A_=new Y(0,1,0),R_=new Y(0,0,1),C_={type:"added"},wM={type:"removed"},Ur={type:"childadded",child:null},Ph={type:"childremoved",child:null};class Un extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new Y,n=new Ki,s=new ks,l=new Y(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new Se}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Nr.setFromAxisAngle(t,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,n){return Nr.setFromAxisAngle(t,n),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(T_,t)}rotateY(t){return this.rotateOnAxis(A_,t)}rotateZ(t){return this.rotateOnAxis(R_,t)}translateOnAxis(t,n){return b_.copy(t).applyQuaternion(this.quaternion),this.position.add(b_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(T_,t)}translateY(t){return this.translateOnAxis(A_,t)}translateZ(t){return this.translateOnAxis(R_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?Nc.copy(t):Nc.set(t,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(Qo,Nc,this.up):ya.lookAt(Nc,Qo,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(ya),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(C_),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(wM),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ya.multiply(t.parent.matrixWorld)),t.applyMatrix4(ya),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(C_),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const u=this.children[s].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,t,RM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,CM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(n){const h=u(t.geometries),m=u(t.materials),p=u(t.textures),_=u(t.images),g=u(t.shapes),v=u(t.skeletons),y=u(t.animations),b=u(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function u(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new Y(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new Y,Ma=new Y,Fh=new Y,Ea=new Y,Or=new Y,Pr=new Y,w_=new Y,zh=new Y,Ih=new Y,Bh=new Y,Hh=new sn,Gh=new sn,Vh=new sn;class Ui{constructor(t=new Y,n=new Y,s=new Y){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,l){l.subVectors(s,n),Li.subVectors(t,n),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,s,l,c){Li.subVectors(l,n),Ma.subVectors(s,n),Fh.subVectors(t,n);const u=Li.dot(Li),h=Li.dot(Ma),m=Li.dot(Fh),p=Ma.dot(Ma),_=Ma.dot(Fh),g=u*p-h*h;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(p*m-h*_)*v,b=(u*_-h*m)*v;return c.set(1-y-b,b,y)}static containsPoint(t,n,s,l){return this.getBarycoord(t,n,s,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(t,n,s,l,c,u,h,m){return this.getBarycoord(t,n,s,l,Ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ea.x),m.addScaledVector(u,Ea.y),m.addScaledVector(h,Ea.z),m)}static getInterpolatedAttribute(t,n,s,l,c,u){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(t,n),Gh.fromBufferAttribute(t,s),Vh.fromBufferAttribute(t,l),u.setScalar(0),u.addScaledVector(Hh,c.x),u.addScaledVector(Gh,c.y),u.addScaledVector(Vh,c.z),u}static isFrontFacing(t,n,s,l){return Li.subVectors(s,n),Ma.subVectors(t,n),Li.cross(Ma).dot(l)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,l){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,s,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Li.cross(Ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ui.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,n,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,l=this.b,c=this.c;let u,h;Or.subVectors(l,s),Pr.subVectors(c,s),zh.subVectors(t,s);const m=Or.dot(zh),p=Pr.dot(zh);if(m<=0&&p<=0)return n.copy(s);Ih.subVectors(t,l);const _=Or.dot(Ih),g=Pr.dot(Ih);if(_>=0&&g<=_)return n.copy(l);const v=m*g-_*p;if(v<=0&&m>=0&&_<=0)return u=m/(m-_),n.copy(s).addScaledVector(Or,u);Bh.subVectors(t,c);const y=Or.dot(Bh),b=Pr.dot(Bh);if(b>=0&&y<=b)return n.copy(c);const A=y*p-m*b;if(A<=0&&p>=0&&b<=0)return h=p/(p-b),n.copy(s).addScaledVector(Pr,h);const M=_*b-y*g;if(M<=0&&g-_>=0&&y-b>=0)return w_.subVectors(c,l),h=(g-_)/(g-_+(y-b)),n.copy(l).addScaledVector(w_,h);const x=1/(M+A+v);return u=A*x,h=v*x,n.copy(s).addScaledVector(Or,u).addScaledVector(Pr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function kh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Ce{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.colorSpaceToWorking(this,n),this}setRGB(t,n,s,l=Ne.workingColorSpace){return this.r=t,this.g=n,this.b=s,Ne.colorSpaceToWorking(this,l),this}setHSL(t,n,s,l=Ne.workingColorSpace){if(t=mM(t,1),n=Me(n,0,1),s=Me(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=kh(u,c,t+1/3),this.g=kh(u,c,t),this.b=kh(u,c,t-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(t,n=yi){function s(c){c!==void 0&&parseFloat(c)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=l[1],h=l[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:he("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=yi){const s=Vv[t.toLowerCase()];return s!==void 0?this.setHex(s,n):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return Ne.workingToColorSpace(Fn.copy(this),t),Math.round(Me(Fn.r*255,0,255))*65536+Math.round(Me(Fn.g*255,0,255))*256+Math.round(Me(Fn.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ne.workingColorSpace){Ne.workingToColorSpace(Fn.copy(this),n);const s=Fn.r,l=Fn.g,c=Fn.b,u=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+u)/2;if(h===u)m=0,p=0;else{const g=u-h;switch(p=_<=.5?g/(u+h):g/(2-u-h),u){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,n=Ne.workingColorSpace){return Ne.workingToColorSpace(Fn.copy(this),n),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=yi){Ne.workingToColorSpace(Fn.copy(this),t);const n=Fn.r,s=Fn.g,l=Fn.b;return t!==yi?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,n,s){return this.getHSL(os),this.setHSL(os.h+t,os.s+n,os.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(os),t.getHSL(Uc);const s=Th(os.h,Uc.h,n),l=Th(os.s,Uc.s,n),c=Th(os.l,Uc.l,n);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ce;Ce.NAMES=Vv;let DM=0;class $r extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=kr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=od,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){he(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){he(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==rd&&(s.blendSrc=this.blendSrc),this.blendDst!==od&&(s.blendDst=this.blendDst),this.blendEquation!==Is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=l(t.textures),u=l(t.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class kv extends $r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new Y,Oc=new Pt;let LM=0;class ji{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=m_,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Oc.fromBufferAttribute(this,n),Oc.applyMatrix3(t),this.setXY(n,Oc.x,Oc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=jo(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=Kn(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=jo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=jo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=jo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=jo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),s=Kn(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,l){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),s=Kn(s,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==m_&&(t.usage=this.usage),t}}class Xv extends ji{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class Wv extends ji{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class Gn extends ji{constructor(t,n,s){super(new Float32Array(t),n,s)}}let NM=0;const xi=new tn,Xh=new Un,Fr=new Y,oi=new Jr,Jo=new Jr,yn=new Y;class Ei extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bv(t)?Wv:Xv)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Se().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,n,s){return xi.makeTranslation(t,n,s),this.applyMatrix4(xi),this}scale(t,n,s){return xi.makeScale(t,n,s),this.applyMatrix4(xi),this}lookAt(t){return Xh.lookAt(t),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const u=t[l];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Gn(s,3))}else{const s=Math.min(t.length,n.count);for(let l=0;l<s;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Jo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(oi.min,Jo.min),oi.expandByPoint(yn),yn.addVectors(oi.max,Jo.max),oi.expandByPoint(yn)):(oi.expandByPoint(Jo.min),oi.expandByPoint(Jo.max))}oi.getCenter(s);let l=0;for(let c=0,u=t.count;c<u;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)yn.fromBufferAttribute(h,p),m&&(Fr.fromBufferAttribute(t,p),yn.add(Fr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<s.count;q++)h[q]=new Y,m[q]=new Y;const p=new Y,_=new Y,g=new Y,v=new Pt,y=new Pt,b=new Pt,A=new Y,M=new Y;function x(q,T,w){p.fromBufferAttribute(s,q),_.fromBufferAttribute(s,T),g.fromBufferAttribute(s,w),v.fromBufferAttribute(c,q),y.fromBufferAttribute(c,T),b.fromBufferAttribute(c,w),_.sub(p),g.sub(p),y.sub(v),b.sub(v);const I=1/(y.x*b.y-b.x*y.y);isFinite(I)&&(A.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(I),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(I),h[q].add(A),h[T].add(A),h[w].add(A),m[q].add(M),m[T].add(M),m[w].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let q=0,T=F.length;q<T;++q){const w=F[q],I=w.start,j=w.count;for(let tt=I,ct=I+j;tt<ct;tt+=3)x(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const D=new Y,L=new Y,H=new Y,B=new Y;function O(q){H.fromBufferAttribute(l,q),B.copy(H);const T=h[q];D.copy(T),D.sub(H.multiplyScalar(H.dot(T))).normalize(),L.crossVectors(B,T);const I=L.dot(m[q])<0?-1:1;u.setXYZW(q,D.x,D.y,D.z,I)}for(let q=0,T=F.length;q<T;++q){const w=F[q],I=w.start,j=w.count;for(let tt=I,ct=I+j;tt<ct;tt+=3)O(t.getX(tt+0)),O(t.getX(tt+1)),O(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ji(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new Y,c=new Y,u=new Y,h=new Y,m=new Y,p=new Y,_=new Y,g=new Y;if(t)for(let v=0,y=t.count;v<y;v+=3){const b=t.getX(v+0),A=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),_.subVectors(u,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,M),h.add(_),m.add(_),p.add(_),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=n.count;v<y;v+=3)l.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),_.subVectors(u,c),g.subVectors(l,c),_.cross(g),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)yn.fromBufferAttribute(t,n),yn.normalize(),t.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,g=h.normalized,v=new p.constructor(m.length*_);let y=0,b=0;for(let A=0,M=m.length;A<M;A++){h.isInterleavedBufferAttribute?y=m[A]*h.data.stride+h.offset:y=m[A]*_;for(let x=0;x<_;x++)v[b++]=p[y++]}return new ji(v,_,g)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ei,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,g=p.length;_<g;_++){const v=p[_],y=t(v,s);m.push(y)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(n))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,_=u.length;p<_;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D_=new tn,Os=new pp,Pc=new uu,L_=new Y,Fc=new Y,zc=new Y,Ic=new Y,Wh=new Y,Bc=new Y,N_=new Y,Hc=new Y;class Pi extends Un{constructor(t=new Ei,n=new kv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Bc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],g=c[m];_!==0&&(Wh.fromBufferAttribute(g,t),u?Bc.addScaledVector(Wh,_):Bc.addScaledVector(Wh.sub(n),_))}n.add(Bc)}return n}raycast(t,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(c),Os.copy(t.ray).recast(t.near),!(Pc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Pc,L_)===null||Os.origin.distanceToSquared(L_)>(t.far-t.near)**2))&&(D_.copy(c).invert(),Os.copy(t.ray).applyMatrix4(D_),!(s.boundingBox!==null&&Os.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Os)))}_computeIntersections(t,n,s){let l;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const M=v[b],x=u[M.materialIndex],F=Math.max(M.start,y.start),D=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let L=F,H=D;L<H;L+=3){const B=h.getX(L),O=h.getX(L+1),q=h.getX(L+2);l=Gc(this,x,t,s,p,_,g,B,O,q),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let M=b,x=A;M<x;M+=3){const F=h.getX(M),D=h.getX(M+1),L=h.getX(M+2);l=Gc(this,u,t,s,p,_,g,F,D,L),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const M=v[b],x=u[M.materialIndex],F=Math.max(M.start,y.start),D=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=F,H=D;L<H;L+=3){const B=L,O=L+1,q=L+2;l=Gc(this,x,t,s,p,_,g,B,O,q),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let M=b,x=A;M<x;M+=3){const F=M,D=M+1,L=M+2;l=Gc(this,u,t,s,p,_,g,F,D,L),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function UM(r,t,n,s,l,c,u,h){let m;if(t.side===Jn?m=s.intersectTriangle(u,c,l,!0,h):m=s.intersectTriangle(l,c,u,t.side===hs,h),m===null)return null;Hc.copy(h),Hc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Hc);return p<n.near||p>n.far?null:{distance:p,point:Hc.clone(),object:r}}function Gc(r,t,n,s,l,c,u,h,m,p){r.getVertexPosition(h,Fc),r.getVertexPosition(m,zc),r.getVertexPosition(p,Ic);const _=UM(r,t,n,s,Fc,zc,Ic,N_);if(_){const g=new Y;Ui.getBarycoord(N_,Fc,zc,Ic,g),l&&(_.uv=Ui.getInterpolatedAttribute(l,h,m,p,g,new Pt)),c&&(_.uv1=Ui.getInterpolatedAttribute(c,h,m,p,g,new Pt)),u&&(_.normal=Ui.getInterpolatedAttribute(u,h,m,p,g,new Y),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new Y,materialIndex:0};Ui.getNormal(Fc,zc,Ic,v.normal),_.face=v,_.barycoord=g}return _}class to extends Ei{constructor(t=1,n=1,s=1,l=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:u};const h=this;l=Math.floor(l),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],_=[],g=[];let v=0,y=0;b("z","y","x",-1,-1,s,n,t,u,c,0),b("z","y","x",1,-1,s,n,-t,u,c,1),b("x","z","y",1,1,t,s,n,l,u,2),b("x","z","y",1,-1,t,s,-n,l,u,3),b("x","y","z",1,-1,t,n,s,l,c,4),b("x","y","z",-1,-1,t,n,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Gn(p,3)),this.setAttribute("normal",new Gn(_,3)),this.setAttribute("uv",new Gn(g,2));function b(A,M,x,F,D,L,H,B,O,q,T){const w=L/O,I=H/q,j=L/2,tt=H/2,ct=B/2,at=O+1,z=q+1;let G=0,K=0;const gt=new Y;for(let _t=0;_t<z;_t++){const U=_t*I-tt;for(let $=0;$<at;$++){const ot=$*w-j;gt[A]=ot*F,gt[M]=U*D,gt[x]=ct,p.push(gt.x,gt.y,gt.z),gt[A]=0,gt[M]=0,gt[x]=B>0?1:-1,_.push(gt.x,gt.y,gt.z),g.push($/O),g.push(1-_t/q),G+=1}}for(let _t=0;_t<q;_t++)for(let U=0;U<O;U++){const $=v+U+at*_t,ot=v+U+at*(_t+1),Rt=v+(U+1)+at*(_t+1),Gt=v+(U+1)+at*_t;m.push($,ot,Gt),m.push(ot,Rt,Gt),K+=6}h.addGroup(y,K,T),y+=K,v+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zr(r){const t={};for(const n in r){t[n]={};for(const s in r[n]){const l=r[n][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=l.clone():Array.isArray(l)?t[n][s]=l.slice():t[n][s]=l}}return t}function Bn(r){const t={};for(let n=0;n<r.length;n++){const s=Zr(r[n]);for(const l in s)t[l]=s[l]}return t}function OM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function qv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const PM={clone:Zr,merge:Bn};var FM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends $r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FM,this.fragmentShader=zM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zr(t.uniforms),this.uniformsGroups=OM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const u=this.uniforms[l].value;u&&u.isTexture?n.uniforms[l]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[l]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[l]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[l]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[l]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[l]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[l]={type:"m4",value:u.toArray()}:n.uniforms[l]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Yv extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new Y,U_=new Pt,O_=new Pt;class Mi extends Yv{constructor(t=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Qd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qd*2*Math.atan(Math.tan(nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,n){return this.getViewBounds(t,U_,O_),n.subVectors(O_,U_)}setViewOffset(t,n,s,l,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(nu*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*l/m,n-=u.offsetY*s/p,l*=u.width/m,s*=u.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zr=-90,Ir=1;class IM extends Un{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(zr,Ir,t,n);l.layers=this.layers,this.add(l);const c=new Mi(zr,Ir,t,n);c.layers=this.layers,this.add(c);const u=new Mi(zr,Ir,t,n);u.layers=this.layers,this.add(u);const h=new Mi(zr,Ir,t,n);h.layers=this.layers,this.add(h);const m=new Mi(zr,Ir,t,n);m.layers=this.layers,this.add(m);const p=new Mi(zr,Ir,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,l,c,u,h,m]=n;for(const p of n)this.remove(p);if(t===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===su)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(n,c),t.setRenderTarget(s,1,l),t.render(n,u),t.setRenderTarget(s,2,l),t.render(n,h),t.setRenderTarget(s,3,l),t.render(n,m),t.setRenderTarget(s,4,l),t.render(n,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(n,_),t.setRenderTarget(g,v,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class jv extends Hn{constructor(t=[],n=Vs,s,l,c,u,h,m,p,_){super(t,n,s,l,c,u,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zv extends Yi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new jv(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new to(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:Zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Ta});c.uniforms.tEquirect.value=n;const u=new Pi(l,c),h=n.minFilter;return n.minFilter===Hs&&(n.minFilter=zn),new IM(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,s,l);t.setRenderTarget(c)}}class il extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BM={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let l=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const A of t.hand.values()){const M=n.getJointPose(A,s),x=this._getHandJoint(p,A);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&v>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new il;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class mp{constructor(t,n=1,s=1e3){this.isFog=!0,this.name="",this.color=new Ce(t),this.near=n,this.far=s}clone(){return new mp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class HM extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class GM extends Hn{constructor(t=null,n=1,s=1,l,c,u,h,m,p=Nn,_=Nn,g,v){super(null,u,h,m,p,_,l,c,g,v),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=new Y,VM=new Y,kM=new Se;class cs{constructor(t=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,l){return this.normal.set(t,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const l=Yh.subVectors(s,n).cross(VM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(Yh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||kM.getNormalMatrix(t),l=this.coplanarPoint(Yh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new uu,XM=new Pt(.5,.5),Vc=new Y;class gp{constructor(t=new cs,n=new cs,s=new cs,l=new cs,c=new cs,u=new cs){this.planes=[t,n,s,l,c,u]}set(t,n,s,l,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=Wi,s=!1){const l=this.planes,c=t.elements,u=c[0],h=c[1],m=c[2],p=c[3],_=c[4],g=c[5],v=c[6],y=c[7],b=c[8],A=c[9],M=c[10],x=c[11],F=c[12],D=c[13],L=c[14],H=c[15];if(l[0].setComponents(p-u,y-_,x-b,H-F).normalize(),l[1].setComponents(p+u,y+_,x+b,H+F).normalize(),l[2].setComponents(p+h,y+g,x+A,H+D).normalize(),l[3].setComponents(p-h,y-g,x-A,H-D).normalize(),s)l[4].setComponents(m,v,M,L).normalize(),l[5].setComponents(p-m,y-v,x-M,H-L).normalize();else if(l[4].setComponents(p-m,y-v,x-M,H-L).normalize(),n===Wi)l[5].setComponents(p+m,y+v,x+M,H+L).normalize();else if(n===su)l[5].setComponents(m,v,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);const n=XM.distanceTo(t.center);return Ps.radius=.7071067811865476+n,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){const n=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(Vc.x=l.normal.x>0?t.max.x:t.min.x,Vc.y=l.normal.y>0?t.max.y:t.min.y,Vc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kv extends $r{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ou=new Y,lu=new Y,P_=new tn,$o=new pp,kc=new uu,jh=new Y,F_=new Y;class WM extends Un{constructor(t=new Ei,n=new Kv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[0];for(let l=1,c=n.count;l<c;l++)ou.fromBufferAttribute(n,l-1),lu.fromBufferAttribute(n,l),s[l]=s[l-1],s[l]+=ou.distanceTo(lu);t.setAttribute("lineDistance",new Gn(s,1))}else he("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,t.ray.intersectsSphere(kc)===!1)return;P_.copy(l).invert(),$o.copy(t.ray).applyMatrix4(P_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=s.index,v=s.attributes.position;if(_!==null){const y=Math.max(0,u.start),b=Math.min(_.count,u.start+u.count);for(let A=y,M=b-1;A<M;A+=p){const x=_.getX(A),F=_.getX(A+1),D=Xc(this,t,$o,m,x,F,A);D&&n.push(D)}if(this.isLineLoop){const A=_.getX(b-1),M=_.getX(y),x=Xc(this,t,$o,m,A,M,b-1);x&&n.push(x)}}else{const y=Math.max(0,u.start),b=Math.min(v.count,u.start+u.count);for(let A=y,M=b-1;A<M;A+=p){const x=Xc(this,t,$o,m,A,A+1,A);x&&n.push(x)}if(this.isLineLoop){const A=Xc(this,t,$o,m,b-1,y,b-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Xc(r,t,n,s,l,c,u){const h=r.geometry.attributes.position;if(ou.fromBufferAttribute(h,l),lu.fromBufferAttribute(h,c),n.distanceSqToSegment(ou,lu,jh,F_)>s)return;jh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(jh);if(!(p<t.near||p>t.far))return{distance:p,point:F_.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const z_=new Y,I_=new Y;class qM extends WM{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[];for(let l=0,c=n.count;l<c;l+=2)z_.fromBufferAttribute(n,l),I_.fromBufferAttribute(n,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+z_.distanceTo(I_);t.setAttribute("lineDistance",new Gn(s,1))}else he("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fl extends Hn{constructor(t,n,s=Zi,l,c,u,h=Nn,m=Nn,p,_=Ca,g=1){if(_!==Ca&&_!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,l,c,u,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class YM extends fl{constructor(t,n=Zi,s=Vs,l,c,u=Nn,h=Nn,m,p=Ca){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,n,s,l,c,u,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Qv extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ji{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(t,n){const s=this.getUtoTmapping(t);return this.getPoint(s,n)}getPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return n}getSpacedPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPointAt(s/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let s,l=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)s=this.getPoint(u/t),c+=s.distanceTo(l),n.push(c),l=s;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const s=this.getLengths();let l=0;const c=s.length;let u;n?u=n:u=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-u,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===u)return l/(c-1);const _=s[l],v=s[l+1]-_,y=(u-_)/v;return(l+y)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const u=this.getPoint(l),h=this.getPoint(c),m=n||(u.isVector2?new Pt:new Y);return m.copy(h).sub(u).normalize(),m}getTangentAt(t,n){const s=this.getUtoTmapping(t);return this.getTangent(s,n)}computeFrenetFrames(t,n=!1){const s=new Y,l=[],c=[],u=[],h=new Y,m=new tn;for(let y=0;y<=t;y++){const b=y/t;l[y]=this.getTangentAt(b,new Y)}c[0]=new Y,u[0]=new Y;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),g=Math.abs(l[0].y),v=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),g<=p&&(p=g,s.set(0,1,0)),v<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),u[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),u[y]=u[y-1].clone(),h.crossVectors(l[y-1],l[y]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(Me(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(h,b))}u[y].crossVectors(l[y],c[y])}if(n===!0){let y=Math.acos(Me(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],y*b)),u[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _p extends Ji{constructor(t=0,n=0,s=1,l=1,c=0,u=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=m}getPoint(t,n=new Pt){const s=n,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(u?c=0:c=l),this.aClockwise===!0&&!u&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const _=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=m-this.aX,y=p-this.aY;m=v*_-y*g+this.aX,p=v*g+y*_+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class jM extends _p{constructor(t,n,s,l,c,u){super(t,n,s,s,l,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function vp(){let r=0,t=0,n=0,s=0;function l(c,u,h,m){r=c,t=h,n=-3*c+3*u-2*h-m,s=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,p){l(u,h,p*(h-c),p*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,p,_,g){let v=(u-c)/p-(h-c)/(p+_)+(h-u)/_,y=(h-u)/_-(m-u)/(_+g)+(m-h)/g;v*=_,y*=_,l(u,h,v,y)},calc:function(c){const u=c*c,h=u*c;return r+t*c+n*u+s*h}}}const Wc=new Y,Zh=new vp,Kh=new vp,Qh=new vp;class ZM extends Ji{constructor(t=[],n=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=s,this.tension=l}getPoint(t,n=new Y){const s=n,l=this.points,c=l.length,u=(c-(this.closed?0:1))*t;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,_;this.closed||h>0?p=l[(h-1)%c]:(Wc.subVectors(l[0],l[1]).add(l[0]),p=Wc);const g=l[h%c],v=l[(h+1)%c];if(this.closed||h+2<c?_=l[(h+2)%c]:(Wc.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Wc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(g),y),A=Math.pow(g.distanceToSquared(v),y),M=Math.pow(v.distanceToSquared(_),y);A<1e-4&&(A=1),b<1e-4&&(b=A),M<1e-4&&(M=A),Zh.initNonuniformCatmullRom(p.x,g.x,v.x,_.x,b,A,M),Kh.initNonuniformCatmullRom(p.y,g.y,v.y,_.y,b,A,M),Qh.initNonuniformCatmullRom(p.z,g.z,v.z,_.z,b,A,M)}else this.curveType==="catmullrom"&&(Zh.initCatmullRom(p.x,g.x,v.x,_.x,this.tension),Kh.initCatmullRom(p.y,g.y,v.y,_.y,this.tension),Qh.initCatmullRom(p.z,g.z,v.z,_.z,this.tension));return s.set(Zh.calc(m),Kh.calc(m),Qh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new Y().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function B_(r,t,n,s,l){const c=(s-t)*.5,u=(l-n)*.5,h=r*r,m=r*h;return(2*n-2*s+c+u)*m+(-3*n+3*s-2*c-u)*h+c*r+n}function KM(r,t){const n=1-r;return n*n*t}function QM(r,t){return 2*(1-r)*r*t}function JM(r,t){return r*r*t}function rl(r,t,n,s){return KM(r,t)+QM(r,n)+JM(r,s)}function $M(r,t){const n=1-r;return n*n*n*t}function tE(r,t){const n=1-r;return 3*n*n*r*t}function eE(r,t){return 3*(1-r)*r*r*t}function nE(r,t){return r*r*r*t}function ol(r,t,n,s,l){return $M(r,t)+tE(r,n)+eE(r,s)+nE(r,l)}class Jv extends Ji{constructor(t=new Pt,n=new Pt,s=new Pt,l=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new Pt){const s=n,l=this.v0,c=this.v1,u=this.v2,h=this.v3;return s.set(ol(t,l.x,c.x,u.x,h.x),ol(t,l.y,c.y,u.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class iE extends Ji{constructor(t=new Y,n=new Y,s=new Y,l=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new Y){const s=n,l=this.v0,c=this.v1,u=this.v2,h=this.v3;return s.set(ol(t,l.x,c.x,u.x,h.x),ol(t,l.y,c.y,u.y,h.y),ol(t,l.z,c.z,u.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $v extends Ji{constructor(t=new Pt,n=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Pt){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Pt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class aE extends Ji{constructor(t=new Y,n=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new Y){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Y){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tx extends Ji{constructor(t=new Pt,n=new Pt,s=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new Pt){const s=n,l=this.v0,c=this.v1,u=this.v2;return s.set(rl(t,l.x,c.x,u.x),rl(t,l.y,c.y,u.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sE extends Ji{constructor(t=new Y,n=new Y,s=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new Y){const s=n,l=this.v0,c=this.v1,u=this.v2;return s.set(rl(t,l.x,c.x,u.x),rl(t,l.y,c.y,u.y),rl(t,l.z,c.z,u.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ex extends Ji{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Pt){const s=n,l=this.points,c=(l.length-1)*t,u=Math.floor(c),h=c-u,m=l[u===0?u:u-1],p=l[u],_=l[u>l.length-2?l.length-1:u+1],g=l[u>l.length-3?l.length-1:u+2];return s.set(B_(h,m.x,p.x,_.x,g.x),B_(h,m.y,p.y,_.y,g.y)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new Pt().fromArray(l))}return this}}var Jd=Object.freeze({__proto__:null,ArcCurve:jM,CatmullRomCurve3:ZM,CubicBezierCurve:Jv,CubicBezierCurve3:iE,EllipseCurve:_p,LineCurve:$v,LineCurve3:aE,QuadraticBezierCurve:tx,QuadraticBezierCurve3:sE,SplineCurve:ex});class rE extends Ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jd[s](n,t))}return this}getPoint(t,n){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const u=l[c]-s,h=this.curves[c],m=h.getLength(),p=m===0?0:1-u/m;return h.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let s=0,l=this.curves.length;s<l;s++)n+=this.curves[s].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const u=c[l],h=u.isEllipseCurve?t*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?t*u.points.length:t,m=u.getPoints(h);for(let p=0;p<m.length;p++){const _=m[p];s&&s.equals(_)||(n.push(_),s=_)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,s=this.curves.length;n<s;n++){const l=this.curves[n];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(new Jd[l.type]().fromJSON(l))}return this}}class H_ extends rE{constructor(t){super(),this.type="Path",this.currentPoint=new Pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,s=t.length;n<s;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const s=new $v(this.currentPoint.clone(),new Pt(t,n));return this.curves.push(s),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,s,l){const c=new tx(this.currentPoint.clone(),new Pt(t,n),new Pt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,n,s,l,c,u){const h=new Jv(this.currentPoint.clone(),new Pt(t,n),new Pt(s,l),new Pt(c,u));return this.curves.push(h),this.currentPoint.set(c,u),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),s=new ex(n);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,s,l,c,u){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,n+m,s,l,c,u),this}absarc(t,n,s,l,c,u){return this.absellipse(t,n,s,s,l,c,u),this}ellipse(t,n,s,l,c,u,h,m){const p=this.currentPoint.x,_=this.currentPoint.y;return this.absellipse(t+p,n+_,s,l,c,u,h,m),this}absellipse(t,n,s,l,c,u,h,m){const p=new _p(t,n,s,l,c,u,h,m);if(this.curves.length>0){const g=p.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(p);const _=p.getPoint(1);return this.currentPoint.copy(_),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nx extends H_{constructor(t){super(t),this.uuid=Qr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let s=0,l=this.holes.length;s<l;s++)n[s]=this.holes[s].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const l=t.holes[n];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,s=this.holes.length;n<s;n++){const l=this.holes[n];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const l=t.holes[n];this.holes.push(new H_().fromJSON(l))}return this}}function oE(r,t,n=2){const s=t&&t.length,l=s?t[0]*n:r.length;let c=ix(r,0,l,n,!0);const u=[];if(!c||c.next===c.prev)return u;let h,m,p;if(s&&(c=hE(r,t,c,n)),r.length>80*n){h=r[0],m=r[1];let _=h,g=m;for(let v=n;v<l;v+=n){const y=r[v],b=r[v+1];y<h&&(h=y),b<m&&(m=b),y>_&&(_=y),b>g&&(g=b)}p=Math.max(_-h,g-m),p=p!==0?32767/p:0}return hl(c,u,n,h,m,p,0),u}function ix(r,t,n,s,l){let c;if(l===EE(r,t,n,s)>0)for(let u=t;u<n;u+=s)c=G_(u/s|0,r[u],r[u+1],c);else for(let u=n-s;u>=t;u-=s)c=G_(u/s|0,r[u],r[u+1],c);return c&&Kr(c,c.next)&&(pl(c),c=c.next),c}function Xs(r,t){if(!r)return r;t||(t=r);let n=r,s;do if(s=!1,!n.steiner&&(Kr(n,n.next)||en(n.prev,n,n.next)===0)){if(pl(n),n=t=n.prev,n===n.next)break;s=!0}else n=n.next;while(s||n!==t);return t}function hl(r,t,n,s,l,c,u){if(!r)return;!u&&c&&_E(r,s,l,c);let h=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?cE(r,s,l,c):lE(r)){t.push(m.i,r.i,p.i),pl(r),r=p.next,h=p.next;continue}if(r=p,r===h){u?u===1?(r=uE(Xs(r),t),hl(r,t,n,s,l,c,2)):u===2&&fE(r,t,n,s,l,c):hl(Xs(r),t,n,s,l,c,1);break}}}function lE(r){const t=r.prev,n=r,s=r.next;if(en(t,n,s)>=0)return!1;const l=t.x,c=n.x,u=s.x,h=t.y,m=n.y,p=s.y,_=Math.min(l,c,u),g=Math.min(h,m,p),v=Math.max(l,c,u),y=Math.max(h,m,p);let b=s.next;for(;b!==t;){if(b.x>=_&&b.x<=v&&b.y>=g&&b.y<=y&&al(l,h,c,m,u,p,b.x,b.y)&&en(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function cE(r,t,n,s){const l=r.prev,c=r,u=r.next;if(en(l,c,u)>=0)return!1;const h=l.x,m=c.x,p=u.x,_=l.y,g=c.y,v=u.y,y=Math.min(h,m,p),b=Math.min(_,g,v),A=Math.max(h,m,p),M=Math.max(_,g,v),x=$d(y,b,t,n,s),F=$d(A,M,t,n,s);let D=r.prevZ,L=r.nextZ;for(;D&&D.z>=x&&L&&L.z<=F;){if(D.x>=y&&D.x<=A&&D.y>=b&&D.y<=M&&D!==l&&D!==u&&al(h,_,m,g,p,v,D.x,D.y)&&en(D.prev,D,D.next)>=0||(D=D.prevZ,L.x>=y&&L.x<=A&&L.y>=b&&L.y<=M&&L!==l&&L!==u&&al(h,_,m,g,p,v,L.x,L.y)&&en(L.prev,L,L.next)>=0))return!1;L=L.nextZ}for(;D&&D.z>=x;){if(D.x>=y&&D.x<=A&&D.y>=b&&D.y<=M&&D!==l&&D!==u&&al(h,_,m,g,p,v,D.x,D.y)&&en(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;L&&L.z<=F;){if(L.x>=y&&L.x<=A&&L.y>=b&&L.y<=M&&L!==l&&L!==u&&al(h,_,m,g,p,v,L.x,L.y)&&en(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function uE(r,t){let n=r;do{const s=n.prev,l=n.next.next;!Kr(s,l)&&sx(s,n,n.next,l)&&dl(s,l)&&dl(l,s)&&(t.push(s.i,n.i,l.i),pl(n),pl(n.next),n=r=l),n=n.next}while(n!==r);return Xs(n)}function fE(r,t,n,s,l,c){let u=r;do{let h=u.next.next;for(;h!==u.prev;){if(u.i!==h.i&&SE(u,h)){let m=rx(u,h);u=Xs(u,u.next),m=Xs(m,m.next),hl(u,t,n,s,l,c,0),hl(m,t,n,s,l,c,0);return}h=h.next}u=u.next}while(u!==r)}function hE(r,t,n,s){const l=[];for(let c=0,u=t.length;c<u;c++){const h=t[c]*s,m=c<u-1?t[c+1]*s:r.length,p=ix(r,h,m,s,!1);p===p.next&&(p.steiner=!0),l.push(xE(p))}l.sort(dE);for(let c=0;c<l.length;c++)n=pE(l[c],n);return n}function dE(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);n=s-l}return n}function pE(r,t){const n=mE(r,t);if(!n)return t;const s=rx(n,r);return Xs(s,s.next),Xs(n,n.next)}function mE(r,t){let n=t;const s=r.x,l=r.y;let c=-1/0,u;if(Kr(r,n))return n;do{if(Kr(r,n.next))return n.next;if(l<=n.y&&l>=n.next.y&&n.next.y!==n.y){const g=n.x+(l-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(g<=s&&g>c&&(c=g,u=n.x<n.next.x?n:n.next,g===s))return u}n=n.next}while(n!==t);if(!u)return null;const h=u,m=u.x,p=u.y;let _=1/0;n=u;do{if(s>=n.x&&n.x>=m&&s!==n.x&&ax(l<p?s:c,l,m,p,l<p?c:s,l,n.x,n.y)){const g=Math.abs(l-n.y)/(s-n.x);dl(n,r)&&(g<_||g===_&&(n.x>u.x||n.x===u.x&&gE(u,n)))&&(u=n,_=g)}n=n.next}while(n!==h);return u}function gE(r,t){return en(r.prev,r,t.prev)<0&&en(t.next,r,r.next)<0}function _E(r,t,n,s){let l=r;do l.z===0&&(l.z=$d(l.x,l.y,t,n,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,vE(l)}function vE(r){let t,n=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let u=s,h=0;for(let p=0;p<n&&(h++,u=u.nextZ,!!u);p++);let m=n;for(;h>0||m>0&&u;)h!==0&&(m===0||!u||s.z<=u.z)?(l=s,s=s.nextZ,h--):(l=u,u=u.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=u}c.nextZ=null,n*=2}while(t>1);return r}function $d(r,t,n,s,l){return r=(r-n)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function xE(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function ax(r,t,n,s,l,c,u,h){return(l-u)*(t-h)>=(r-u)*(c-h)&&(r-u)*(s-h)>=(n-u)*(t-h)&&(n-u)*(c-h)>=(l-u)*(s-h)}function al(r,t,n,s,l,c,u,h){return!(r===u&&t===h)&&ax(r,t,n,s,l,c,u,h)}function SE(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!yE(r,t)&&(dl(r,t)&&dl(t,r)&&ME(r,t)&&(en(r.prev,r,t.prev)||en(r,t.prev,t))||Kr(r,t)&&en(r.prev,r,r.next)>0&&en(t.prev,t,t.next)>0)}function en(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function Kr(r,t){return r.x===t.x&&r.y===t.y}function sx(r,t,n,s){const l=Yc(en(r,t,n)),c=Yc(en(r,t,s)),u=Yc(en(n,s,r)),h=Yc(en(n,s,t));return!!(l!==c&&u!==h||l===0&&qc(r,n,t)||c===0&&qc(r,s,t)||u===0&&qc(n,r,s)||h===0&&qc(n,t,s))}function qc(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Yc(r){return r>0?1:r<0?-1:0}function yE(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&sx(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function dl(r,t){return en(r.prev,r,r.next)<0?en(r,t,r.next)>=0&&en(r,r.prev,t)>=0:en(r,t,r.prev)<0||en(r,r.next,t)<0}function ME(r,t){let n=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&l<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==r);return s}function rx(r,t){const n=tp(r.i,r.x,r.y),s=tp(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=l,l.prev=n,s.next=n,n.prev=s,c.next=s,s.prev=c,s}function G_(r,t,n,s){const l=tp(r,t,n);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function pl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function tp(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function EE(r,t,n,s){let l=0;for(let c=t,u=n-s;c<n;c+=s)l+=(r[u]-r[c])*(r[c+1]+r[u+1]),u=c;return l}class bE{static triangulate(t,n,s=2){return oE(t,n,s)}}class Gr{static area(t){const n=t.length;let s=0;for(let l=n-1,c=0;c<n;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return Gr.area(t)<0}static triangulateShape(t,n){const s=[],l=[],c=[];V_(t),k_(s,t);let u=t.length;n.forEach(V_);for(let m=0;m<n.length;m++)l.push(u),u+=n[m].length,k_(s,n[m]);const h=bE.triangulate(s,l);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function V_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function k_(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class xp extends Ei{constructor(t=new nx([new Pt(.5,.5),new Pt(-.5,.5),new Pt(-.5,-.5),new Pt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const s=this,l=[],c=[];for(let h=0,m=t.length;h<m;h++){const p=t[h];u(p)}this.setAttribute("position",new Gn(l,3)),this.setAttribute("uv",new Gn(c,2)),this.computeVertexNormals();function u(h){const m=[],p=n.curveSegments!==void 0?n.curveSegments:12,_=n.steps!==void 0?n.steps:1,g=n.depth!==void 0?n.depth:1;let v=n.bevelEnabled!==void 0?n.bevelEnabled:!0,y=n.bevelThickness!==void 0?n.bevelThickness:.2,b=n.bevelSize!==void 0?n.bevelSize:y-.1,A=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const x=n.extrudePath,F=n.UVGenerator!==void 0?n.UVGenerator:TE;let D,L=!1,H,B,O,q;if(x){D=x.getSpacedPoints(_),L=!0,v=!1;const xt=x.isCatmullRomCurve3?x.closed:!1;H=x.computeFrenetFrames(_,xt),B=new Y,O=new Y,q=new Y}v||(M=0,y=0,b=0,A=0);const T=h.extractPoints(p);let w=T.shape;const I=T.holes;if(!Gr.isClockWise(w)){w=w.reverse();for(let xt=0,At=I.length;xt<At;xt++){const Et=I[xt];Gr.isClockWise(Et)&&(I[xt]=Et.reverse())}}function tt(xt){const Et=10000000000000001e-36;let zt=xt[0];for(let P=1;P<=xt.length;P++){const ne=P%xt.length,Bt=xt[ne],ie=Bt.x-zt.x,Lt=Bt.y-zt.y,N=ie*ie+Lt*Lt,E=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(zt.x),Math.abs(zt.y)),X=Et*E*E;if(N<=X){xt.splice(ne,1),P--;continue}zt=Bt}}tt(w),I.forEach(tt);const ct=I.length,at=w;for(let xt=0;xt<ct;xt++){const At=I[xt];w=w.concat(At)}function z(xt,At,Et){return At||Le("ExtrudeGeometry: vec does not exist"),xt.clone().addScaledVector(At,Et)}const G=w.length;function K(xt,At,Et){let zt,P,ne;const Bt=xt.x-At.x,ie=xt.y-At.y,Lt=Et.x-xt.x,N=Et.y-xt.y,E=Bt*Bt+ie*ie,X=Bt*N-ie*Lt;if(Math.abs(X)>Number.EPSILON){const ut=Math.sqrt(E),pt=Math.sqrt(Lt*Lt+N*N),ft=At.x-ie/ut,Zt=At.y+Bt/ut,Ut=Et.x-N/pt,jt=Et.y+Lt/pt,se=((Ut-ft)*N-(jt-Zt)*Lt)/(Bt*N-ie*Lt);zt=ft+Bt*se-xt.x,P=Zt+ie*se-xt.y;const bt=zt*zt+P*P;if(bt<=2)return new Pt(zt,P);ne=Math.sqrt(bt/2)}else{let ut=!1;Bt>Number.EPSILON?Lt>Number.EPSILON&&(ut=!0):Bt<-Number.EPSILON?Lt<-Number.EPSILON&&(ut=!0):Math.sign(ie)===Math.sign(N)&&(ut=!0),ut?(zt=-ie,P=Bt,ne=Math.sqrt(E)):(zt=Bt,P=ie,ne=Math.sqrt(E/2))}return new Pt(zt/ne,P/ne)}const gt=[];for(let xt=0,At=at.length,Et=At-1,zt=xt+1;xt<At;xt++,Et++,zt++)Et===At&&(Et=0),zt===At&&(zt=0),gt[xt]=K(at[xt],at[Et],at[zt]);const _t=[];let U,$=gt.concat();for(let xt=0,At=ct;xt<At;xt++){const Et=I[xt];U=[];for(let zt=0,P=Et.length,ne=P-1,Bt=zt+1;zt<P;zt++,ne++,Bt++)ne===P&&(ne=0),Bt===P&&(Bt=0),U[zt]=K(Et[zt],Et[ne],Et[Bt]);_t.push(U),$=$.concat(U)}let ot;if(M===0)ot=Gr.triangulateShape(at,I);else{const xt=[],At=[];for(let Et=0;Et<M;Et++){const zt=Et/M,P=y*Math.cos(zt*Math.PI/2),ne=b*Math.sin(zt*Math.PI/2)+A;for(let Bt=0,ie=at.length;Bt<ie;Bt++){const Lt=z(at[Bt],gt[Bt],ne);Vt(Lt.x,Lt.y,-P),zt===0&&xt.push(Lt)}for(let Bt=0,ie=ct;Bt<ie;Bt++){const Lt=I[Bt];U=_t[Bt];const N=[];for(let E=0,X=Lt.length;E<X;E++){const ut=z(Lt[E],U[E],ne);Vt(ut.x,ut.y,-P),zt===0&&N.push(ut)}zt===0&&At.push(N)}}ot=Gr.triangulateShape(xt,At)}const Rt=ot.length,Gt=b+A;for(let xt=0;xt<G;xt++){const At=v?z(w[xt],$[xt],Gt):w[xt];L?(O.copy(H.normals[0]).multiplyScalar(At.x),B.copy(H.binormals[0]).multiplyScalar(At.y),q.copy(D[0]).add(O).add(B),Vt(q.x,q.y,q.z)):Vt(At.x,At.y,0)}for(let xt=1;xt<=_;xt++)for(let At=0;At<G;At++){const Et=v?z(w[At],$[At],Gt):w[At];L?(O.copy(H.normals[xt]).multiplyScalar(Et.x),B.copy(H.binormals[xt]).multiplyScalar(Et.y),q.copy(D[xt]).add(O).add(B),Vt(q.x,q.y,q.z)):Vt(Et.x,Et.y,g/_*xt)}for(let xt=M-1;xt>=0;xt--){const At=xt/M,Et=y*Math.cos(At*Math.PI/2),zt=b*Math.sin(At*Math.PI/2)+A;for(let P=0,ne=at.length;P<ne;P++){const Bt=z(at[P],gt[P],zt);Vt(Bt.x,Bt.y,g+Et)}for(let P=0,ne=I.length;P<ne;P++){const Bt=I[P];U=_t[P];for(let ie=0,Lt=Bt.length;ie<Lt;ie++){const N=z(Bt[ie],U[ie],zt);L?Vt(N.x,N.y+D[_-1].y,D[_-1].x+Et):Vt(N.x,N.y,g+Et)}}}nt(),dt();function nt(){const xt=l.length/3;if(v){let At=0,Et=G*At;for(let zt=0;zt<Rt;zt++){const P=ot[zt];Wt(P[2]+Et,P[1]+Et,P[0]+Et)}At=_+M*2,Et=G*At;for(let zt=0;zt<Rt;zt++){const P=ot[zt];Wt(P[0]+Et,P[1]+Et,P[2]+Et)}}else{for(let At=0;At<Rt;At++){const Et=ot[At];Wt(Et[2],Et[1],Et[0])}for(let At=0;At<Rt;At++){const Et=ot[At];Wt(Et[0]+G*_,Et[1]+G*_,Et[2]+G*_)}}s.addGroup(xt,l.length/3-xt,0)}function dt(){const xt=l.length/3;let At=0;Dt(at,At),At+=at.length;for(let Et=0,zt=I.length;Et<zt;Et++){const P=I[Et];Dt(P,At),At+=P.length}s.addGroup(xt,l.length/3-xt,1)}function Dt(xt,At){let Et=xt.length;for(;--Et>=0;){const zt=Et;let P=Et-1;P<0&&(P=xt.length-1);for(let ne=0,Bt=_+M*2;ne<Bt;ne++){const ie=G*ne,Lt=G*(ne+1),N=At+zt+ie,E=At+P+ie,X=At+P+Lt,ut=At+zt+Lt;pe(N,E,X,ut)}}}function Vt(xt,At,Et){m.push(xt),m.push(At),m.push(Et)}function Wt(xt,At,Et){ge(xt),ge(At),ge(Et);const zt=l.length/3,P=F.generateTopUV(s,l,zt-3,zt-2,zt-1);fe(P[0]),fe(P[1]),fe(P[2])}function pe(xt,At,Et,zt){ge(xt),ge(At),ge(zt),ge(At),ge(Et),ge(zt);const P=l.length/3,ne=F.generateSideWallUV(s,l,P-6,P-3,P-2,P-1);fe(ne[0]),fe(ne[1]),fe(ne[3]),fe(ne[1]),fe(ne[2]),fe(ne[3])}function ge(xt){l.push(m[xt*3+0]),l.push(m[xt*3+1]),l.push(m[xt*3+2])}function fe(xt){c.push(xt.x),c.push(xt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,s=this.parameters.options;return AE(n,s,t)}static fromJSON(t,n){const s=[];for(let c=0,u=t.shapes.length;c<u;c++){const h=n[t.shapes[c]];s.push(h)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new Jd[l.type]().fromJSON(l)),new xp(s,t.options)}}const TE={generateTopUV:function(r,t,n,s,l){const c=t[n*3],u=t[n*3+1],h=t[s*3],m=t[s*3+1],p=t[l*3],_=t[l*3+1];return[new Pt(c,u),new Pt(h,m),new Pt(p,_)]},generateSideWallUV:function(r,t,n,s,l,c){const u=t[n*3],h=t[n*3+1],m=t[n*3+2],p=t[s*3],_=t[s*3+1],g=t[s*3+2],v=t[l*3],y=t[l*3+1],b=t[l*3+2],A=t[c*3],M=t[c*3+1],x=t[c*3+2];return Math.abs(h-_)<Math.abs(u-p)?[new Pt(u,1-m),new Pt(p,1-g),new Pt(v,1-b),new Pt(A,1-x)]:[new Pt(h,1-m),new Pt(_,1-g),new Pt(y,1-b),new Pt(M,1-x)]}};function AE(r,t,n){if(n.shapes=[],Array.isArray(r))for(let s=0,l=r.length;s<l;s++){const c=r[s];n.shapes.push(c.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class fu extends Ei{constructor(t=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:l};const c=t/2,u=n/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,g=t/h,v=n/m,y=[],b=[],A=[],M=[];for(let x=0;x<_;x++){const F=x*v-u;for(let D=0;D<p;D++){const L=D*g-c;b.push(L,-F,0),A.push(0,0,1),M.push(D/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let F=0;F<h;F++){const D=F+p*x,L=F+p*(x+1),H=F+1+p*(x+1),B=F+1+p*x;y.push(D,L,B),y.push(L,H,B)}this.setIndex(y),this.setAttribute("position",new Gn(b,3)),this.setAttribute("normal",new Gn(A,3)),this.setAttribute("uv",new Gn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fu(t.width,t.height,t.widthSegments,t.heightSegments)}}class RE extends Qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class X_ extends $r{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iv,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class CE extends $r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wE extends $r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ox extends Un{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Jh=new tn,W_=new Y,q_=new Y;class DE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,s=this.matrix;W_.setFromMatrixPosition(t.matrixWorld),n.position.copy(W_),q_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(q_),n.updateMatrixWorld(),Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Jh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Sp extends Yv{constructor(t=-1,n=1,s=1,l=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,l,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,u=s+t,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class LE extends DE{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y_ extends ox{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new LE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class NE extends ox{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class UE extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class j_{constructor(t=1,n=0,s=0){this.radius=t,this.phi=n,this.theta=s}set(t,n,s){return this.radius=t,this.phi=n,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,s){return this.radius=Math.sqrt(t*t+n*n+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Me(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class OE extends qM{constructor(t=10,n=10,s=4473924,l=8947848){s=new Ce(s),l=new Ce(l);const c=n/2,u=t/n,h=t/2,m=[],p=[];for(let v=0,y=0,b=-h;v<=n;v++,b+=u){m.push(-h,0,b,h,0,b),m.push(b,0,-h,b,0,h);const A=v===c?s:l;A.toArray(p,y),y+=3,A.toArray(p,y),y+=3,A.toArray(p,y),y+=3,A.toArray(p,y),y+=3}const _=new Ei;_.setAttribute("position",new Gn(m,3)),_.setAttribute("color",new Gn(p,3));const g=new Kv({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class PE extends Ws{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){he("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Z_(r,t,n,s){const l=FE(s);switch(n){case Pv:return r*t;case zv:return r*t/l.components*l.byteLength;case lp:return r*t/l.components*l.byteLength;case Yr:return r*t*2/l.components*l.byteLength;case cp:return r*t*2/l.components*l.byteLength;case Fv:return r*t*3/l.components*l.byteLength;case Oi:return r*t*4/l.components*l.byteLength;case up:return r*t*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:case Md:return Math.max(r,16)*Math.max(t,8)/4;case xd:case yd:return Math.max(r,8)*Math.max(t,8)/2;case Ed:case bd:case Ad:case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Td:case Cd:case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case zd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Vd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Xd:case Wd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Yd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Zd:case Kd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function FE(r){switch(r){case li:case Lv:return{byteLength:1,components:1};case ll:case Nv:case Ra:return{byteLength:2,components:1};case rp:case op:return{byteLength:2,components:4};case Zi:case sp:case Xi:return{byteLength:4,components:1};case Uv:case Ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);function lx(){let r=null,t=!1,n=null,s=null;function l(c,u){n(c,u),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function zE(r){const t=new WeakMap;function n(h,m){const p=h.array,_=h.usage,g=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,_),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const _=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,_);else{g.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<g.length;y++){const b=g[v],A=g[y];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++v,g[v]=A)}g.length=v+1;for(let y=0,b=g.length;y<b;y++){const A=g[y];r.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:u}}var IE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BE=`#ifdef USE_ALPHAHASH
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
#endif`,HE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
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
#endif`,WE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
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
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QE=`#ifdef USE_IRIDESCENCE
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
#endif`,JE=`#ifdef USE_BUMPMAP
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
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ob=`#define PI 3.141592653589793
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
} // validated`,lb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cb=`vec3 transformedNormal = objectNormal;
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
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",mb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tb=`#ifdef USE_GRADIENTMAP
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
}`,Ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wb=`uniform bool receiveShadow;
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
#endif`,Db=`#ifdef USE_ENVMAP
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
#endif`,Lb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pb=`PhysicalMaterial material;
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
#endif`,Fb=`uniform sampler2D dfgLUT;
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
#endif`,Ib=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yb=`#if defined( USE_POINTS_UV )
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
#endif`,jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`#ifdef USE_MORPHTARGETS
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
#endif`,tT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rT=`#ifdef USE_NORMALMAP
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
#endif`,oT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_T=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ST=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,MT=`float getShadowMask() {
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
}`,ET=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bT=`#ifdef USE_SKINNING
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
#endif`,TT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AT=`#ifdef USE_SKINNING
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
#endif`,RT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LT=`#ifdef USE_TRANSMISSION
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
#endif`,NT=`#ifdef USE_TRANSMISSION
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
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,IT=`uniform sampler2D t2D;
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
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`#include <common>
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
}`,XT=`#if DEPTH_PACKING == 3200
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
}`,WT=`#define DISTANCE
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
}`,qT=`#define DISTANCE
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
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`uniform float scale;
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
}`,KT=`uniform vec3 diffuse;
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
}`,QT=`#include <common>
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
}`,JT=`uniform vec3 diffuse;
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
}`,$T=`#define LAMBERT
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
}`,t1=`#define LAMBERT
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
}`,e1=`#define MATCAP
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
}`,n1=`#define MATCAP
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
}`,i1=`#define NORMAL
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
}`,a1=`#define NORMAL
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
}`,s1=`#define PHONG
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
}`,r1=`#define PHONG
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
}`,o1=`#define STANDARD
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
}`,l1=`#define STANDARD
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
}`,c1=`#define TOON
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
}`,u1=`#define TOON
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
}`,f1=`uniform float size;
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
}`,h1=`uniform vec3 diffuse;
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
}`,d1=`#include <common>
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
}`,p1=`uniform vec3 color;
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
}`,m1=`uniform float rotation;
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
}`,g1=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:IE,alphahash_pars_fragment:BE,alphamap_fragment:HE,alphamap_pars_fragment:GE,alphatest_fragment:VE,alphatest_pars_fragment:kE,aomap_fragment:XE,aomap_pars_fragment:WE,batching_pars_vertex:qE,batching_vertex:YE,begin_vertex:jE,beginnormal_vertex:ZE,bsdfs:KE,iridescence_fragment:QE,bumpmap_pars_fragment:JE,clipping_planes_fragment:$E,clipping_planes_pars_fragment:tb,clipping_planes_pars_vertex:eb,clipping_planes_vertex:nb,color_fragment:ib,color_pars_fragment:ab,color_pars_vertex:sb,color_vertex:rb,common:ob,cube_uv_reflection_fragment:lb,defaultnormal_vertex:cb,displacementmap_pars_vertex:ub,displacementmap_vertex:fb,emissivemap_fragment:hb,emissivemap_pars_fragment:db,colorspace_fragment:pb,colorspace_pars_fragment:mb,envmap_fragment:gb,envmap_common_pars_fragment:_b,envmap_pars_fragment:vb,envmap_pars_vertex:xb,envmap_physical_pars_fragment:Db,envmap_vertex:Sb,fog_vertex:yb,fog_pars_vertex:Mb,fog_fragment:Eb,fog_pars_fragment:bb,gradientmap_pars_fragment:Tb,lightmap_pars_fragment:Ab,lights_lambert_fragment:Rb,lights_lambert_pars_fragment:Cb,lights_pars_begin:wb,lights_toon_fragment:Lb,lights_toon_pars_fragment:Nb,lights_phong_fragment:Ub,lights_phong_pars_fragment:Ob,lights_physical_fragment:Pb,lights_physical_pars_fragment:Fb,lights_fragment_begin:zb,lights_fragment_maps:Ib,lights_fragment_end:Bb,logdepthbuf_fragment:Hb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:kb,map_fragment:Xb,map_pars_fragment:Wb,map_particle_fragment:qb,map_particle_pars_fragment:Yb,metalnessmap_fragment:jb,metalnessmap_pars_fragment:Zb,morphinstance_vertex:Kb,morphcolor_vertex:Qb,morphnormal_vertex:Jb,morphtarget_pars_vertex:$b,morphtarget_vertex:tT,normal_fragment_begin:eT,normal_fragment_maps:nT,normal_pars_fragment:iT,normal_pars_vertex:aT,normal_vertex:sT,normalmap_pars_fragment:rT,clearcoat_normal_fragment_begin:oT,clearcoat_normal_fragment_maps:lT,clearcoat_pars_fragment:cT,iridescence_pars_fragment:uT,opaque_fragment:fT,packing:hT,premultiplied_alpha_fragment:dT,project_vertex:pT,dithering_fragment:mT,dithering_pars_fragment:gT,roughnessmap_fragment:_T,roughnessmap_pars_fragment:vT,shadowmap_pars_fragment:xT,shadowmap_pars_vertex:ST,shadowmap_vertex:yT,shadowmask_pars_fragment:MT,skinbase_vertex:ET,skinning_pars_vertex:bT,skinning_vertex:TT,skinnormal_vertex:AT,specularmap_fragment:RT,specularmap_pars_fragment:CT,tonemapping_fragment:wT,tonemapping_pars_fragment:DT,transmission_fragment:LT,transmission_pars_fragment:NT,uv_pars_fragment:UT,uv_pars_vertex:OT,uv_vertex:PT,worldpos_vertex:FT,background_vert:zT,background_frag:IT,backgroundCube_vert:BT,backgroundCube_frag:HT,cube_vert:GT,cube_frag:VT,depth_vert:kT,depth_frag:XT,distance_vert:WT,distance_frag:qT,equirect_vert:YT,equirect_frag:jT,linedashed_vert:ZT,linedashed_frag:KT,meshbasic_vert:QT,meshbasic_frag:JT,meshlambert_vert:$T,meshlambert_frag:t1,meshmatcap_vert:e1,meshmatcap_frag:n1,meshnormal_vert:i1,meshnormal_frag:a1,meshphong_vert:s1,meshphong_frag:r1,meshphysical_vert:o1,meshphysical_frag:l1,meshtoon_vert:c1,meshtoon_frag:u1,points_vert:f1,points_frag:h1,shadow_vert:d1,shadow_frag:p1,sprite_vert:m1,sprite_frag:g1},qt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Vi={basic:{uniforms:Bn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Bn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Bn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Bn([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Bn([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Bn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Bn([qt.points,qt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Bn([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Bn([qt.common,qt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Bn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Bn([qt.sprite,qt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Bn([qt.common,qt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Bn([qt.lights,qt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Vi.physical={uniforms:Bn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const jc={r:0,b:0,g:0},Fs=new Ki,_1=new tn;function v1(r,t,n,s,l,c,u){const h=new Ce(0);let m=c===!0?0:1,p,_,g=null,v=0,y=null;function b(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?n:t).get(L)),L}function A(D){let L=!1;const H=b(D);H===null?x(h,m):H&&H.isColor&&(x(H,1),L=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(D,L){const H=b(L);H&&(H.isCubeTexture||H.mapping===cu)?(_===void 0&&(_=new Pi(new to(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Zr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,O,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Fs.copy(L.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(_1.makeRotationFromEuler(Fs)),_.material.toneMapped=Ne.getTransfer(H.colorSpace)!==ke,(g!==H||v!==H.version||y!==r.toneMapping)&&(_.material.needsUpdate=!0,g=H,v=H.version,y=r.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Pi(new fu(2,2),new Qi({name:"BackgroundMaterial",uniforms:Zr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(H.colorSpace)!==ke,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||v!==H.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,g=H,v=H.version,y=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function x(D,L){D.getRGB(jc,qv(r)),s.buffers.color.setClear(jc.r,jc.g,jc.b,L,u)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,L=1){h.set(D),m=L,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,x(h,m)},render:A,addToRenderList:M,dispose:F}}function x1(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,u=!1;function h(w,I,j,tt,ct){let at=!1;const z=g(tt,j,I);c!==z&&(c=z,p(c.object)),at=y(w,tt,j,ct),at&&b(w,tt,j,ct),ct!==null&&t.update(ct,r.ELEMENT_ARRAY_BUFFER),(at||u)&&(u=!1,L(w,I,j,tt),ct!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function _(w){return r.deleteVertexArray(w)}function g(w,I,j){const tt=j.wireframe===!0;let ct=s[w.id];ct===void 0&&(ct={},s[w.id]=ct);let at=ct[I.id];at===void 0&&(at={},ct[I.id]=at);let z=at[tt];return z===void 0&&(z=v(m()),at[tt]=z),z}function v(w){const I=[],j=[],tt=[];for(let ct=0;ct<n;ct++)I[ct]=0,j[ct]=0,tt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:j,attributeDivisors:tt,object:w,attributes:{},index:null}}function y(w,I,j,tt){const ct=c.attributes,at=I.attributes;let z=0;const G=j.getAttributes();for(const K in G)if(G[K].location>=0){const _t=ct[K];let U=at[K];if(U===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),_t===void 0||_t.attribute!==U||U&&_t.data!==U.data)return!0;z++}return c.attributesNum!==z||c.index!==tt}function b(w,I,j,tt){const ct={},at=I.attributes;let z=0;const G=j.getAttributes();for(const K in G)if(G[K].location>=0){let _t=at[K];_t===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor));const U={};U.attribute=_t,_t&&_t.data&&(U.data=_t.data),ct[K]=U,z++}c.attributes=ct,c.attributesNum=z,c.index=tt}function A(){const w=c.newAttributes;for(let I=0,j=w.length;I<j;I++)w[I]=0}function M(w){x(w,0)}function x(w,I){const j=c.newAttributes,tt=c.enabledAttributes,ct=c.attributeDivisors;j[w]=1,tt[w]===0&&(r.enableVertexAttribArray(w),tt[w]=1),ct[w]!==I&&(r.vertexAttribDivisor(w,I),ct[w]=I)}function F(){const w=c.newAttributes,I=c.enabledAttributes;for(let j=0,tt=I.length;j<tt;j++)I[j]!==w[j]&&(r.disableVertexAttribArray(j),I[j]=0)}function D(w,I,j,tt,ct,at,z){z===!0?r.vertexAttribIPointer(w,I,j,ct,at):r.vertexAttribPointer(w,I,j,tt,ct,at)}function L(w,I,j,tt){A();const ct=tt.attributes,at=j.getAttributes(),z=I.defaultAttributeValues;for(const G in at){const K=at[G];if(K.location>=0){let gt=ct[G];if(gt===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(gt=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(gt=w.instanceColor)),gt!==void 0){const _t=gt.normalized,U=gt.itemSize,$=t.get(gt);if($===void 0)continue;const ot=$.buffer,Rt=$.type,Gt=$.bytesPerElement,nt=Rt===r.INT||Rt===r.UNSIGNED_INT||gt.gpuType===sp;if(gt.isInterleavedBufferAttribute){const dt=gt.data,Dt=dt.stride,Vt=gt.offset;if(dt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<K.locationSize;Wt++)x(K.location+Wt,dt.meshPerAttribute);w.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Wt=0;Wt<K.locationSize;Wt++)M(K.location+Wt);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let Wt=0;Wt<K.locationSize;Wt++)D(K.location+Wt,U/K.locationSize,Rt,_t,Dt*Gt,(Vt+U/K.locationSize*Wt)*Gt,nt)}else{if(gt.isInstancedBufferAttribute){for(let dt=0;dt<K.locationSize;dt++)x(K.location+dt,gt.meshPerAttribute);w.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let dt=0;dt<K.locationSize;dt++)M(K.location+dt);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let dt=0;dt<K.locationSize;dt++)D(K.location+dt,U/K.locationSize,Rt,_t,U*Gt,U/K.locationSize*dt*Gt,nt)}}else if(z!==void 0){const _t=z[G];if(_t!==void 0)switch(_t.length){case 2:r.vertexAttrib2fv(K.location,_t);break;case 3:r.vertexAttrib3fv(K.location,_t);break;case 4:r.vertexAttrib4fv(K.location,_t);break;default:r.vertexAttrib1fv(K.location,_t)}}}}F()}function H(){q();for(const w in s){const I=s[w];for(const j in I){const tt=I[j];for(const ct in tt)_(tt[ct].object),delete tt[ct];delete I[j]}delete s[w]}}function B(w){if(s[w.id]===void 0)return;const I=s[w.id];for(const j in I){const tt=I[j];for(const ct in tt)_(tt[ct].object),delete tt[ct];delete I[j]}delete s[w.id]}function O(w){for(const I in s){const j=s[I];if(j[w.id]===void 0)continue;const tt=j[w.id];for(const ct in tt)_(tt[ct].object),delete tt[ct];delete j[w.id]}}function q(){T(),u=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:T,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:M,disableUnusedAttributes:F}}function S1(r,t,n){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),n.update(_,s,1)}function u(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),n.update(_,s,g))}function h(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];n.update(y,s,1)}function m(p,_,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)u(p[b],_[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,v,0,g);let b=0;for(let A=0;A<g;A++)b+=_[A]*v[A];n.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function y1(r,t,n,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function u(O){return!(O!==Oi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const q=O===Ra&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==li&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Xi&&!q)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(he("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:F,maxVaryings:D,maxFragmentUniforms:L,maxSamples:H,samples:B}}function M1(r){const t=this;let n=null,s=0,l=!1,c=!1;const u=new cs,h=new Se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||s!==0||l;return l=v,s=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,y){const b=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,x=r.get(g);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const F=c?0:s,D=F*4;let L=x.clippingState||null;m.value=L,L=_(b,v,D,y);for(let H=0;H!==D;++H)L[H]=n[H];x.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,v,y,b){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=m.value,b!==!0||M===null){const x=y+A*4,F=v.matrixWorldInverse;h.getNormalMatrix(F),(M===null||M.length<x)&&(M=new Float32Array(x));for(let D=0,L=y;D!==A;++D,L+=4)u.copy(g[D]).applyMatrix4(F,h),u.normal.toArray(M,L),M[L+3]=u.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function E1(r){let t=new WeakMap;function n(u,h){return h===md?u.mapping=Vs:h===gd&&(u.mapping=qr),u}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===md||h===gd)if(t.has(u)){const m=t.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new Zv(m.height);return p.fromEquirectangularTexture(r,u),t.set(u,p),u.addEventListener("dispose",l),n(p.texture,u.mapping)}else return null}}return u}function l(u){const h=u.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const fs=4,K_=[.125,.215,.35,.446,.526,.582],Bs=20,b1=256,tl=new Sp,Q_=new Ce;let $h=null,td=0,ed=0,nd=!1;const T1=new Y;class J_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,l=100,c={}){const{size:u=256,position:h=T1}=c;$h=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($h,td,ed),this._renderer.xr.enabled=nd,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Vs||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$h=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ra,format:Oi,colorSpace:jr,depthBuffer:!1},l=$_(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A1(c)),this._blurMaterial=C1(c,t,n),this._ggxMaterial=R1(c,t,n)}return l}_compileMaterial(t){const n=new Pi(new Ei,t);this._renderer.compile(n,tl)}_sceneToCubeUV(t,n,s,l,c){const m=new Mi(90,1,n,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Q_),g.toneMapping=qi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pi(new to,new kv({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let x=!1;const F=t.background;F?F.isColor&&(M.color.copy(F),t.background=null,x=!0):(M.color.copy(Q_),x=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[D],c.y,c.z)):L===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[D]));const H=this._cubeSize;Br(l,L*H,D>2?H:0,H,H),g.setRenderTarget(l),x&&g.render(A,m),g.render(t,m)}g.toneMapping=y,g.autoClear=v,t.background=F}_textureToCubeUV(t,n){const s=this._renderer,l=t.mapping===Vs||t.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tv());const c=l?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Br(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(u,tl)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const l=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[s];h.material=u;const m=u.uniforms,p=s/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),v=0+p*1.25,y=g*v,{_lodMax:b}=this,A=this._sizeLods[s],M=3*A*(s>b-fs?s-b+fs:0),x=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-n,Br(c,M,x,3*A,2*A),l.setRenderTarget(c),l.render(h,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Br(t,M,x,3*A,2*A),l.setRenderTarget(t),l.render(h,tl)}_blur(t,n,s,l,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,s,l,"latitudinal",c),this._halfBlur(u,t,s,s,l,"longitudinal",c)}_halfBlur(t,n,s,l,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const v=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Bs-1),A=c/b,M=isFinite(c)?1+Math.floor(_*A):Bs;M>Bs&&he(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Bs}`);const x=[];let F=0;for(let O=0;O<Bs;++O){const q=O/A,T=Math.exp(-q*q/2);x.push(T),O===0?F+=T:O<M&&(F+=2*T)}for(let O=0;O<x.length;O++)x[O]=x[O]/F;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:D}=this;v.dTheta.value=b,v.mipInt.value=D-s;const L=this._sizeLods[l],H=3*L*(l>D-fs?l-D+fs:0),B=4*(this._cubeSize-L);Br(n,H,B,3*L,2*L),m.setRenderTarget(n),m.render(g,tl)}}function A1(r){const t=[],n=[],s=[];let l=r;const c=r-fs+1+K_.length;for(let u=0;u<c;u++){const h=Math.pow(2,l);t.push(h);let m=1/h;u>r-fs?m=K_[u-r+fs-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,A=3,M=2,x=1,F=new Float32Array(A*b*y),D=new Float32Array(M*b*y),L=new Float32Array(x*b*y);for(let B=0;B<y;B++){const O=B%3*2/3-1,q=B>2?0:-1,T=[O,q,0,O+2/3,q,0,O+2/3,q+1,0,O,q,0,O+2/3,q+1,0,O,q+1,0];F.set(T,A*b*B),D.set(v,M*b*B);const w=[B,B,B,B,B,B];L.set(w,x*b*B)}const H=new Ei;H.setAttribute("position",new ji(F,A)),H.setAttribute("uv",new ji(D,M)),H.setAttribute("faceIndex",new ji(L,x)),s.push(new Pi(H,null)),l>fs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function $_(r,t,n){const s=new Yi(r,t,n);return s.texture.mapping=cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Br(r,t,n,s,l){r.viewport.set(t,n,s,l),r.scissor.set(t,n,s,l)}function R1(r,t,n){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function C1(r,t,n){const s=new Float32Array(Bs),l=new Y(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function tv(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function ev(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}function w1(r){let t=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===md||m===gd,_=m===Vs||m===qr;if(p||_){let g=t.get(h);const v=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new J_(r)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new J_(r)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function D1(r){const t={};function n(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&ul("WebGLRenderer: "+s+" extension not supported."),l}}}function L1(r,t,n,s){const l={},c=new WeakMap;function u(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",u),l[v.id]=!0,n.memory.geometries++),v}function m(g){const v=g.attributes;for(const y in v)t.update(v[y],r.ARRAY_BUFFER)}function p(g){const v=[],y=g.index,b=g.attributes.position;let A=0;if(y!==null){const F=y.array;A=y.version;for(let D=0,L=F.length;D<L;D+=3){const H=F[D+0],B=F[D+1],O=F[D+2];v.push(H,B,B,O,O,H)}}else if(b!==void 0){const F=b.array;A=b.version;for(let D=0,L=F.length/3-1;D<L;D+=3){const H=D+0,B=D+1,O=D+2;v.push(H,B,B,O,O,H)}}else return;const M=new(Bv(v)?Wv:Xv)(v,1);M.version=A;const x=c.get(g);x&&t.remove(x),c.set(g,M)}function _(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function N1(r,t,n){let s;function l(v){s=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,y){r.drawElements(s,y,c,v*u),n.update(y,s,1)}function p(v,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,v*u,b),n.update(y,s,b))}function _(v,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];n.update(M,s,1)}function g(v,y,b,A){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)p(v[x]/u,y[x],A[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,A,0,b);let x=0;for(let F=0;F<b;F++)x+=y[F]*A[F];n.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function U1(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:Le("WebGLInfo: Unknown draw mode:",u);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:s}}function O1(r,t,n){const s=new WeakMap,l=new sn;function c(u,h,m){const p=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let v=s.get(h);if(v===void 0||v.count!==g){let w=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var y=w;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let L=0;b===!0&&(L=1),A===!0&&(L=2),M===!0&&(L=3);let H=h.attributes.position.count*L,B=1;H>t.maxTextureSize&&(B=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const O=new Float32Array(H*B*4*g),q=new Hv(O,H,B,g);q.type=Xi,q.needsUpdate=!0;const T=L*4;for(let I=0;I<g;I++){const j=x[I],tt=F[I],ct=D[I],at=H*B*4*I;for(let z=0;z<j.count;z++){const G=z*T;b===!0&&(l.fromBufferAttribute(j,z),O[at+G+0]=l.x,O[at+G+1]=l.y,O[at+G+2]=l.z,O[at+G+3]=0),A===!0&&(l.fromBufferAttribute(tt,z),O[at+G+4]=l.x,O[at+G+5]=l.y,O[at+G+6]=l.z,O[at+G+7]=0),M===!0&&(l.fromBufferAttribute(ct,z),O[at+G+8]=l.x,O[at+G+9]=l.y,O[at+G+10]=l.z,O[at+G+11]=ct.itemSize===4?l.w:1)}}v={count:g,texture:q,size:new Pt(H,B)},s.set(h,v),h.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const A=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function P1(r,t,n,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return g}function u(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const F1={[Ev]:"LINEAR_TONE_MAPPING",[bv]:"REINHARD_TONE_MAPPING",[Tv]:"CINEON_TONE_MAPPING",[Av]:"ACES_FILMIC_TONE_MAPPING",[Cv]:"AGX_TONE_MAPPING",[wv]:"NEUTRAL_TONE_MAPPING",[Rv]:"CUSTOM_TONE_MAPPING"};function z1(r,t,n,s,l){const c=new Yi(t,n,{type:r,depthBuffer:s,stencilBuffer:l}),u=new Yi(t,n,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),h=new Ei;h.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const m=new RE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Pi(h,m),_=new Sp(-1,1,1,-1,0,1);let g=null,v=null,y=!1,b,A=null,M=[],x=!1;this.setSize=function(F,D){c.setSize(F,D),u.setSize(F,D);for(let L=0;L<M.length;L++){const H=M[L];H.setSize&&H.setSize(F,D)}},this.setEffects=function(F){M=F,x=M.length>0&&M[0].isRenderPass===!0;const D=c.width,L=c.height;for(let H=0;H<M.length;H++){const B=M[H];B.setSize&&B.setSize(D,L)}},this.begin=function(F,D){if(y||F.toneMapping===qi&&M.length===0)return!1;if(A=D,D!==null){const L=D.width,H=D.height;(c.width!==L||c.height!==H)&&this.setSize(L,H)}return x===!1&&F.setRenderTarget(c),b=F.toneMapping,F.toneMapping=qi,!0},this.hasRenderPass=function(){return x},this.end=function(F,D){F.toneMapping=b,y=!0;let L=c,H=u;for(let B=0;B<M.length;B++){const O=M[B];if(O.enabled!==!1&&(O.render(F,H,L,D),O.needsSwap!==!1)){const q=L;L=H,H=q}}if(g!==F.outputColorSpace||v!==F.toneMapping){g=F.outputColorSpace,v=F.toneMapping,m.defines={},Ne.getTransfer(g)===ke&&(m.defines.SRGB_TRANSFER="");const B=F1[v];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,F.setRenderTarget(A),F.render(p,_),A=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),h.dispose(),m.dispose()}}const cx=new Hn,ep=new fl(1,1),ux=new Hv,fx=new MM,hx=new jv,nv=[],iv=[],av=new Float32Array(16),sv=new Float32Array(9),rv=new Float32Array(4);function eo(r,t,n){const s=r[0];if(s<=0||s>0)return r;const l=t*n;let c=nv[l];if(c===void 0&&(c=new Float32Array(l),nv[l]=c),t!==0){s.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,r[u].toArray(c,h)}return c}function vn(r,t){if(r.length!==t.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==t[n])return!1;return!0}function xn(r,t){for(let n=0,s=t.length;n<s;n++)r[n]=t[n]}function du(r,t){let n=iv[t];n===void 0&&(n=new Int32Array(t),iv[t]=n);for(let s=0;s!==t;++s)n[s]=r.allocateTextureUnit();return n}function I1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function B1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;r.uniform2fv(this.addr,t),xn(n,t)}}function H1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(vn(n,t))return;r.uniform3fv(this.addr,t),xn(n,t)}}function G1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;r.uniform4fv(this.addr,t),xn(n,t)}}function V1(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(vn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(n,t)}else{if(vn(n,s))return;rv.set(s),r.uniformMatrix2fv(this.addr,!1,rv),xn(n,s)}}function k1(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(vn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(n,t)}else{if(vn(n,s))return;sv.set(s),r.uniformMatrix3fv(this.addr,!1,sv),xn(n,s)}}function X1(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(vn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(n,t)}else{if(vn(n,s))return;av.set(s),r.uniformMatrix4fv(this.addr,!1,av),xn(n,s)}}function W1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function q1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;r.uniform2iv(this.addr,t),xn(n,t)}}function Y1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vn(n,t))return;r.uniform3iv(this.addr,t),xn(n,t)}}function j1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;r.uniform4iv(this.addr,t),xn(n,t)}}function Z1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function K1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;r.uniform2uiv(this.addr,t),xn(n,t)}}function Q1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vn(n,t))return;r.uniform3uiv(this.addr,t),xn(n,t)}}function J1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;r.uniform4uiv(this.addr,t),xn(n,t)}}function $1(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ep.compareFunction=n.isReversedDepthBuffer()?hp:fp,c=ep):c=cx,n.setTexture2D(t||c,l)}function tA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(t||fx,l)}function eA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(t||hx,l)}function nA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(t||ux,l)}function iA(r){switch(r){case 5126:return I1;case 35664:return B1;case 35665:return H1;case 35666:return G1;case 35674:return V1;case 35675:return k1;case 35676:return X1;case 5124:case 35670:return W1;case 35667:case 35671:return q1;case 35668:case 35672:return Y1;case 35669:case 35673:return j1;case 5125:return Z1;case 36294:return K1;case 36295:return Q1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return eA;case 36289:case 36303:case 36311:case 36292:return nA}}function aA(r,t){r.uniform1fv(this.addr,t)}function sA(r,t){const n=eo(t,this.size,2);r.uniform2fv(this.addr,n)}function rA(r,t){const n=eo(t,this.size,3);r.uniform3fv(this.addr,n)}function oA(r,t){const n=eo(t,this.size,4);r.uniform4fv(this.addr,n)}function lA(r,t){const n=eo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function cA(r,t){const n=eo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function uA(r,t){const n=eo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function fA(r,t){r.uniform1iv(this.addr,t)}function hA(r,t){r.uniform2iv(this.addr,t)}function dA(r,t){r.uniform3iv(this.addr,t)}function pA(r,t){r.uniform4iv(this.addr,t)}function mA(r,t){r.uniform1uiv(this.addr,t)}function gA(r,t){r.uniform2uiv(this.addr,t)}function _A(r,t){r.uniform3uiv(this.addr,t)}function vA(r,t){r.uniform4uiv(this.addr,t)}function xA(r,t,n){const s=this.cache,l=t.length,c=du(n,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=ep:u=cx;for(let h=0;h!==l;++h)n.setTexture2D(t[h]||u,c[h])}function SA(r,t,n){const s=this.cache,l=t.length,c=du(n,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let u=0;u!==l;++u)n.setTexture3D(t[u]||fx,c[u])}function yA(r,t,n){const s=this.cache,l=t.length,c=du(n,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let u=0;u!==l;++u)n.setTextureCube(t[u]||hx,c[u])}function MA(r,t,n){const s=this.cache,l=t.length,c=du(n,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let u=0;u!==l;++u)n.setTexture2DArray(t[u]||ux,c[u])}function EA(r){switch(r){case 5126:return aA;case 35664:return sA;case 35665:return rA;case 35666:return oA;case 35674:return lA;case 35675:return cA;case 35676:return uA;case 5124:case 35670:return fA;case 35667:case 35671:return hA;case 35668:case 35672:return dA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return _A;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return SA;case 35680:case 36300:case 36308:case 36293:return yA;case 36289:case 36303:case 36311:case 36292:return MA}}class bA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=iA(n.type)}}class TA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=EA(n.type)}}class AA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const l=this.seq;for(let c=0,u=l.length;c!==u;++c){const h=l[c];h.setValue(t,n[h.id],s)}}}const id=/(\w+)(\])?(\[|\.)?/g;function ov(r,t){r.seq.push(t),r.map[t.id]=t}function RA(r,t,n){const s=r.name,l=s.length;for(id.lastIndex=0;;){const c=id.exec(s),u=id.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===l){ov(n,p===void 0?new bA(h,r,t):new TA(h,r,t));break}else{let g=n.map[h];g===void 0&&(g=new AA(h),ov(n,g)),n=g}}}class iu{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const h=t.getActiveUniform(n,u),m=t.getUniformLocation(n,h.name);RA(h,m,this)}const l=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(u):c.push(u);l.length>0&&(this.seq=l.concat(c))}setValue(t,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(t,s,l)}setOptional(t,n,s){const l=n[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,n,s,l){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,n){const s=[];for(let l=0,c=t.length;l!==c;++l){const u=t[l];u.id in n&&s.push(u)}return s}}function lv(r,t,n){const s=r.createShader(t);return r.shaderSource(s,n),r.compileShader(s),s}const CA=37297;let wA=0;function DA(r,t){const n=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=l;u<c;u++){const h=u+1;s.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return s.join(`
`)}const cv=new Se;function LA(r){Ne._getMatrix(cv,Ne.workingColorSpace,r);const t=`mat3( ${cv.elements.map(n=>n.toFixed(4))} )`;switch(Ne.getTransfer(r)){case au:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function uv(r,t,n){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+DA(r.getShaderSource(t),h)}else return c}function NA(r,t){const n=LA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const UA={[Ev]:"Linear",[bv]:"Reinhard",[Tv]:"Cineon",[Av]:"ACESFilmic",[Cv]:"AgX",[wv]:"Neutral",[Rv]:"Custom"};function OA(r,t){const n=UA[t];return n===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Zc=new Y;function PA(){Ne.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),t=Zc.y.toFixed(4),n=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function zA(r){const t=[];for(const n in r){const s=r[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function IA(r,t){const n={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:h}}return n}function sl(r){return r!==""}function fv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const BA=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(r){return r.replace(BA,GA)}const HA=new Map;function GA(r,t){let n=ye[t];if(n===void 0){const s=HA.get(t);if(s!==void 0)n=ye[s],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return np(n)}const VA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(r){return r.replace(VA,kA)}function kA(r,t,n,s){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function pv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const XA={[Qc]:"SHADOWMAP_TYPE_PCF",[nl]:"SHADOWMAP_TYPE_VSM"};function WA(r){return XA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qA={[Vs]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[cu]:"ENVMAP_TYPE_CUBE_UV"};function YA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":qA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const jA={[qr]:"ENVMAP_MODE_REFRACTION"};function ZA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":jA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KA={[Mv]:"ENVMAP_BLENDING_MULTIPLY",[nM]:"ENVMAP_BLENDING_MIX",[iM]:"ENVMAP_BLENDING_ADD"};function QA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":KA[r.combine]||"ENVMAP_BLENDING_NONE"}function JA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function $A(r,t,n,s){const l=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=WA(n),p=YA(n),_=ZA(n),g=QA(n),v=JA(n),y=FA(n),b=zA(c),A=l.createProgram();let M,x,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(sl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(sl).join(`
`),x.length>0&&(x+=`
`)):(M=[pv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),x=[pv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?ye.tonemapping_pars_fragment:"",n.toneMapping!==qi?OA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,NA("linearToOutputTexel",n.outputColorSpace),PA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sl).join(`
`)),u=np(u),u=fv(u,n),u=hv(u,n),h=np(h),h=fv(h,n),h=hv(h,n),u=dv(u),h=dv(h),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===g_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===g_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=F+M+u,L=F+x+h,H=lv(l,l.VERTEX_SHADER,D),B=lv(l,l.FRAGMENT_SHADER,L);l.attachShader(A,H),l.attachShader(A,B),n.index0AttributeName!==void 0?l.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(I){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(A)||"",tt=l.getShaderInfoLog(H)||"",ct=l.getShaderInfoLog(B)||"",at=j.trim(),z=tt.trim(),G=ct.trim();let K=!0,gt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,H,B);else{const _t=uv(l,H,"vertex"),U=uv(l,B,"fragment");Le("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+at+`
`+_t+`
`+U)}else at!==""?he("WebGLProgram: Program Info Log:",at):(z===""||G==="")&&(gt=!1);gt&&(I.diagnostics={runnable:K,programLog:at,vertexShader:{log:z,prefix:M},fragmentShader:{log:G,prefix:x}})}l.deleteShader(H),l.deleteShader(B),q=new iu(l,A),T=IA(l,A)}let q;this.getUniforms=function(){return q===void 0&&O(this),q};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,CA)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=B,this}let tR=0;class eR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(t);return u.has(l)===!1&&(u.add(l),l.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new nR(t),n.set(t,s)),s}}class nR{constructor(t){this.id=tR++,this.code=t,this.usedTimes=0}}function iR(r,t,n,s,l,c,u){const h=new Gv,m=new eR,p=new Set,_=[],g=new Map,v=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function M(T,w,I,j,tt){const ct=j.fog,at=tt.geometry,z=T.isMeshStandardMaterial?j.environment:null,G=(T.isMeshStandardMaterial?n:t).get(T.envMap||z),K=G&&G.mapping===cu?G.image.height:null,gt=b[T.type];T.precision!==null&&(y=l.getMaxPrecision(T.precision),y!==T.precision&&he("WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const _t=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,U=_t!==void 0?_t.length:0;let $=0;at.morphAttributes.position!==void 0&&($=1),at.morphAttributes.normal!==void 0&&($=2),at.morphAttributes.color!==void 0&&($=3);let ot,Rt,Gt,nt;if(gt){const Te=Vi[gt];ot=Te.vertexShader,Rt=Te.fragmentShader}else ot=T.vertexShader,Rt=T.fragmentShader,m.update(T),Gt=m.getVertexShaderID(T),nt=m.getFragmentShaderID(T);const dt=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),Vt=tt.isInstancedMesh===!0,Wt=tt.isBatchedMesh===!0,pe=!!T.map,ge=!!T.matcap,fe=!!G,xt=!!T.aoMap,At=!!T.lightMap,Et=!!T.bumpMap,zt=!!T.normalMap,P=!!T.displacementMap,ne=!!T.emissiveMap,Bt=!!T.metalnessMap,ie=!!T.roughnessMap,Lt=T.anisotropy>0,N=T.clearcoat>0,E=T.dispersion>0,X=T.iridescence>0,ut=T.sheen>0,pt=T.transmission>0,ft=Lt&&!!T.anisotropyMap,Zt=N&&!!T.clearcoatMap,Ut=N&&!!T.clearcoatNormalMap,jt=N&&!!T.clearcoatRoughnessMap,se=X&&!!T.iridescenceMap,bt=X&&!!T.iridescenceThicknessMap,wt=ut&&!!T.sheenColorMap,Yt=ut&&!!T.sheenRoughnessMap,Ht=!!T.specularMap,Ot=!!T.specularColorMap,_e=!!T.specularIntensityMap,W=pt&&!!T.transmissionMap,Ft=pt&&!!T.thicknessMap,Ct=!!T.gradientMap,kt=!!T.alphaMap,Tt=T.alphaTest>0,yt=!!T.alphaHash,Nt=!!T.extensions;let ue=qi;T.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ue=r.toneMapping);const Ue={shaderID:gt,shaderType:T.type,shaderName:T.name,vertexShader:ot,fragmentShader:Rt,defines:T.defines,customVertexShaderID:Gt,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:Wt,batchingColor:Wt&&tt._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&tt.instanceColor!==null,instancingMorph:Vt&&tt.morphTexture!==null,outputColorSpace:dt===null?r.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:jr,alphaToCoverage:!!T.alphaToCoverage,map:pe,matcap:ge,envMap:fe,envMapMode:fe&&G.mapping,envMapCubeUVHeight:K,aoMap:xt,lightMap:At,bumpMap:Et,normalMap:zt,displacementMap:P,emissiveMap:ne,normalMapObjectSpace:zt&&T.normalMapType===rM,normalMapTangentSpace:zt&&T.normalMapType===Iv,metalnessMap:Bt,roughnessMap:ie,anisotropy:Lt,anisotropyMap:ft,clearcoat:N,clearcoatMap:Zt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:jt,dispersion:E,iridescence:X,iridescenceMap:se,iridescenceThicknessMap:bt,sheen:ut,sheenColorMap:wt,sheenRoughnessMap:Yt,specularMap:Ht,specularColorMap:Ot,specularIntensityMap:_e,transmission:pt,transmissionMap:W,thicknessMap:Ft,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===kr&&T.alphaToCoverage===!1,alphaMap:kt,alphaTest:Tt,alphaHash:yt,combine:T.combine,mapUv:pe&&A(T.map.channel),aoMapUv:xt&&A(T.aoMap.channel),lightMapUv:At&&A(T.lightMap.channel),bumpMapUv:Et&&A(T.bumpMap.channel),normalMapUv:zt&&A(T.normalMap.channel),displacementMapUv:P&&A(T.displacementMap.channel),emissiveMapUv:ne&&A(T.emissiveMap.channel),metalnessMapUv:Bt&&A(T.metalnessMap.channel),roughnessMapUv:ie&&A(T.roughnessMap.channel),anisotropyMapUv:ft&&A(T.anisotropyMap.channel),clearcoatMapUv:Zt&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&A(T.sheenRoughnessMap.channel),specularMapUv:Ht&&A(T.specularMap.channel),specularColorMapUv:Ot&&A(T.specularColorMap.channel),specularIntensityMapUv:_e&&A(T.specularIntensityMap.channel),transmissionMapUv:W&&A(T.transmissionMap.channel),thicknessMapUv:Ft&&A(T.thicknessMap.channel),alphaMapUv:kt&&A(T.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(zt||Lt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!at.attributes.uv&&(pe||kt),fog:!!ct,useFog:T.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Dt,skinning:tt.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:pe&&T.map.isVideoTexture===!0&&Ne.getTransfer(T.map.colorSpace)===ke,decodeVideoTextureEmissive:ne&&T.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(T.emissiveMap.colorSpace)===ke,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ki,flipSided:T.side===Jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Nt&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&T.extensions.multiDraw===!0||Wt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ue.vertexUv1s=p.has(1),Ue.vertexUv2s=p.has(2),Ue.vertexUv3s=p.has(3),p.clear(),Ue}function x(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)w.push(I),w.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(F(w,T),D(w,T),w.push(r.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function F(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function D(T,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),T.push(h.mask)}function L(T){const w=b[T.type];let I;if(w){const j=Vi[w];I=PM.clone(j.uniforms)}else I=T.uniforms;return I}function H(T,w){let I=g.get(w);return I!==void 0?++I.usedTimes:(I=new $A(r,w,T,c),_.push(I),g.set(w,I)),I}function B(T){if(--T.usedTimes===0){const w=_.indexOf(T);_[w]=_[_.length-1],_.pop(),g.delete(T.cacheKey),T.destroy()}}function O(T){m.remove(T)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:L,acquireProgram:H,releaseProgram:B,releaseShaderCache:O,programs:_,dispose:q}}function aR(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function s(u){r.delete(u)}function l(u,h,m){r.get(u)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:s,update:l,dispose:c}}function sR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function mv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function gv(){const r=[];let t=0;const n=[],s=[],l=[];function c(){t=0,n.length=0,s.length=0,l.length=0}function u(g,v,y,b,A,M){let x=r[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:b,renderOrder:g.renderOrder,z:A,group:M},r[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=b,x.renderOrder=g.renderOrder,x.z=A,x.group=M),t++,x}function h(g,v,y,b,A,M){const x=u(g,v,y,b,A,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):n.push(x)}function m(g,v,y,b,A,M){const x=u(g,v,y,b,A,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):n.unshift(x)}function p(g,v){n.length>1&&n.sort(g||sR),s.length>1&&s.sort(v||mv),l.length>1&&l.sort(v||mv)}function _(){for(let g=t,v=r.length;g<v;g++){const y=r[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function rR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let u;return c===void 0?(u=new gv,r.set(s,[u])):l>=c.length?(u=new gv,c.push(u)):u=c[l],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function oR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Y,color:new Ce};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":n={color:new Ce,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=n,n}}}function lR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let cR=0;function uR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function fR(r){const t=new oR,n=lR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Y);const l=new Y,c=new tn,u=new tn;function h(p){let _=0,g=0,v=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let y=0,b=0,A=0,M=0,x=0,F=0,D=0,L=0,H=0,B=0,O=0;p.sort(uR);for(let T=0,w=p.length;T<w;T++){const I=p[T],j=I.color,tt=I.intensity,ct=I.distance;let at=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Yr?at=I.shadow.map.texture:at=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)_+=j.r*tt,g+=j.g*tt,v+=j.b*tt;else if(I.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(I.sh.coefficients[z],tt);O++}else if(I.isDirectionalLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,K=n.get(I);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,s.directionalShadow[y]=K,s.directionalShadowMap[y]=at,s.directionalShadowMatrix[y]=I.shadow.matrix,F++}s.directional[y]=z,y++}else if(I.isSpotLight){const z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(j).multiplyScalar(tt),z.distance=ct,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,s.spot[A]=z;const G=I.shadow;if(I.map&&(s.spotLightMap[H]=I.map,H++,G.updateMatrices(I),I.castShadow&&B++),s.spotLightMatrix[A]=G.matrix,I.castShadow){const K=n.get(I);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,s.spotShadow[A]=K,s.spotShadowMap[A]=at,L++}A++}else if(I.isRectAreaLight){const z=t.get(I);z.color.copy(j).multiplyScalar(tt),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),s.rectArea[M]=z,M++}else if(I.isPointLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const G=I.shadow,K=n.get(I);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,s.pointShadow[b]=K,s.pointShadowMap[b]=at,s.pointShadowMatrix[b]=I.shadow.matrix,D++}s.point[b]=z,b++}else if(I.isHemisphereLight){const z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(tt),z.groundColor.copy(I.groundColor).multiplyScalar(tt),s.hemi[x]=z,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=qt.LTC_FLOAT_1,s.rectAreaLTC2=qt.LTC_FLOAT_2):(s.rectAreaLTC1=qt.LTC_HALF_1,s.rectAreaLTC2=qt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=v;const q=s.hash;(q.directionalLength!==y||q.pointLength!==b||q.spotLength!==A||q.rectAreaLength!==M||q.hemiLength!==x||q.numDirectionalShadows!==F||q.numPointShadows!==D||q.numSpotShadows!==L||q.numSpotMaps!==H||q.numLightProbes!==O)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=L+H-B,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=O,q.directionalLength=y,q.pointLength=b,q.spotLength=A,q.rectAreaLength=M,q.hemiLength=x,q.numDirectionalShadows=F,q.numPointShadows=D,q.numSpotShadows=L,q.numSpotMaps=H,q.numLightProbes=O,s.version=cR++)}function m(p,_){let g=0,v=0,y=0,b=0,A=0;const M=_.matrixWorldInverse;for(let x=0,F=p.length;x<F;x++){const D=p[x];if(D.isDirectionalLight){const L=s.directional[g];L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),g++}else if(D.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const L=s.rectArea[b];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),u.identity(),c.copy(D.matrixWorld),c.premultiply(M),u.extractRotation(c),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),b++}else if(D.isPointLight){const L=s.point[v];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),v++}else if(D.isHemisphereLight){const L=s.hemi[A];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(M),A++}}}return{setup:h,setupView:m,state:s}}function _v(r){const t=new fR(r),n=[],s=[];function l(_){p.camera=_,n.length=0,s.length=0}function c(_){n.push(_)}function u(_){s.push(_)}function h(){t.setup(n)}function m(_){t.setupView(n,_)}const p={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:u}}function hR(r){let t=new WeakMap;function n(l,c=0){const u=t.get(l);let h;return u===void 0?(h=new _v(r),t.set(l,[h])):c>=u.length?(h=new _v(r),u.push(h)):h=u[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const dR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pR=`uniform sampler2D shadow_pass;
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
}`,mR=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],gR=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],vv=new tn,el=new Y,ad=new Y;function _R(r,t,n){let s=new gp;const l=new Pt,c=new Pt,u=new sn,h=new CE,m=new wE,p={},_=n.maxTextureSize,g={[hs]:Jn,[Jn]:hs,[ki]:ki},v=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:dR,fragmentShader:pR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ei;b.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Pi(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let x=this.type;this.render=function(B,O,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===yv&&(he("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Qc);const T=r.getRenderTarget(),w=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Ta),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const tt=x!==this.type;tt&&O.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(at=>at.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,at=B.length;ct<at;ct++){const z=B[ct],G=z.shadow;if(G===void 0){he("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const K=G.getFrameExtents();if(l.multiply(K),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/K.x),l.x=c.x*K.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/K.y),l.y=c.y*K.y,G.mapSize.y=c.y)),G.map===null||tt===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===nl){if(z.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Yi(l.x,l.y,{format:Yr,type:Ra,minFilter:zn,magFilter:zn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new fl(l.x,l.y,Xi),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=Ca,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Nn,G.map.depthTexture.magFilter=Nn}else{z.isPointLight?(G.map=new Zv(l.x),G.map.depthTexture=new YM(l.x,Zi)):(G.map=new Yi(l.x,l.y),G.map.depthTexture=new fl(l.x,l.y,Zi)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=Ca;const _t=r.state.buffers.depth.getReversed();this.type===Qc?(G.map.depthTexture.compareFunction=_t?hp:fp,G.map.depthTexture.minFilter=zn,G.map.depthTexture.magFilter=zn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Nn,G.map.depthTexture.magFilter=Nn)}G.camera.updateProjectionMatrix()}const gt=G.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<gt;_t++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,_t),r.clear();else{_t===0&&(r.setRenderTarget(G.map),r.clear());const U=G.getViewport(_t);u.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),j.viewport(u)}if(z.isPointLight){const U=G.camera,$=G.matrix,ot=z.distance||U.far;ot!==U.far&&(U.far=ot,U.updateProjectionMatrix()),el.setFromMatrixPosition(z.matrixWorld),U.position.copy(el),ad.copy(U.position),ad.add(mR[_t]),U.up.copy(gR[_t]),U.lookAt(ad),U.updateMatrixWorld(),$.makeTranslation(-el.x,-el.y,-el.z),vv.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G._frustum.setFromProjectionMatrix(vv,U.coordinateSystem,U.reversedDepth)}else G.updateMatrices(z);s=G.getFrustum(),L(O,q,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===nl&&F(G,q),G.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(T,w,I)};function F(B,O){const q=t.update(A);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Yi(l.x,l.y,{format:Yr,type:Ra})),v.uniforms.shadow_pass.value=B.map.depthTexture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(O,null,q,v,A,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(O,null,q,y,A,null)}function D(B,O,q,T){let w=null;const I=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(I!==void 0)w=I;else if(w=q.isPointLight===!0?m:h,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=w.uuid,tt=O.uuid;let ct=p[j];ct===void 0&&(ct={},p[j]=ct);let at=ct[tt];at===void 0&&(at=w.clone(),ct[tt]=at,O.addEventListener("dispose",H)),w=at}if(w.visible=O.visible,w.wireframe=O.wireframe,T===nl?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:g[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const j=r.properties.get(w);j.light=q}return w}function L(B,O,q,T,w){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===nl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const tt=t.update(B),ct=B.material;if(Array.isArray(ct)){const at=tt.groups;for(let z=0,G=at.length;z<G;z++){const K=at[z],gt=ct[K.materialIndex];if(gt&&gt.visible){const _t=D(B,gt,T,w);B.onBeforeShadow(r,B,O,q,tt,_t,K),r.renderBufferDirect(q,null,tt,_t,B,K),B.onAfterShadow(r,B,O,q,tt,_t,K)}}}else if(ct.visible){const at=D(B,ct,T,w);B.onBeforeShadow(r,B,O,q,tt,at,null),r.renderBufferDirect(q,null,tt,at,B,null),B.onAfterShadow(r,B,O,q,tt,at,null)}}const j=B.children;for(let tt=0,ct=j.length;tt<ct;tt++)L(j[tt],O,q,T,w)}function H(B){B.target.removeEventListener("dispose",H);for(const q in p){const T=p[q],w=B.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const vR={[ld]:cd,[ud]:dd,[fd]:pd,[Wr]:hd,[cd]:ld,[dd]:ud,[pd]:fd,[hd]:Wr};function xR(r,t){function n(){let W=!1;const Ft=new sn;let Ct=null;const kt=new sn(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!W&&(r.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,yt,Nt,ue,Ue){Ue===!0&&(Tt*=ue,yt*=ue,Nt*=ue),Ft.set(Tt,yt,Nt,ue),kt.equals(Ft)===!1&&(r.clearColor(Tt,yt,Nt,ue),kt.copy(Ft))},reset:function(){W=!1,Ct=null,kt.set(-1,0,0,0)}}}function s(){let W=!1,Ft=!1,Ct=null,kt=null,Tt=null;return{setReversed:function(yt){if(Ft!==yt){const Nt=t.get("EXT_clip_control");yt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),Ft=yt;const ue=Tt;Tt=null,this.setClear(ue)}},getReversed:function(){return Ft},setTest:function(yt){yt?dt(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(yt){Ct!==yt&&!W&&(r.depthMask(yt),Ct=yt)},setFunc:function(yt){if(Ft&&(yt=vR[yt]),kt!==yt){switch(yt){case ld:r.depthFunc(r.NEVER);break;case cd:r.depthFunc(r.ALWAYS);break;case ud:r.depthFunc(r.LESS);break;case Wr:r.depthFunc(r.LEQUAL);break;case fd:r.depthFunc(r.EQUAL);break;case hd:r.depthFunc(r.GEQUAL);break;case dd:r.depthFunc(r.GREATER);break;case pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}kt=yt}},setLocked:function(yt){W=yt},setClear:function(yt){Tt!==yt&&(Ft&&(yt=1-yt),r.clearDepth(yt),Tt=yt)},reset:function(){W=!1,Ct=null,kt=null,Tt=null,Ft=!1}}}function l(){let W=!1,Ft=null,Ct=null,kt=null,Tt=null,yt=null,Nt=null,ue=null,Ue=null;return{setTest:function(Te){W||(Te?dt(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Te){Ft!==Te&&!W&&(r.stencilMask(Te),Ft=Te)},setFunc:function(Te,pn,Vn){(Ct!==Te||kt!==pn||Tt!==Vn)&&(r.stencilFunc(Te,pn,Vn),Ct=Te,kt=pn,Tt=Vn)},setOp:function(Te,pn,Vn){(yt!==Te||Nt!==pn||ue!==Vn)&&(r.stencilOp(Te,pn,Vn),yt=Te,Nt=pn,ue=Vn)},setLocked:function(Te){W=Te},setClear:function(Te){Ue!==Te&&(r.clearStencil(Te),Ue=Te)},reset:function(){W=!1,Ft=null,Ct=null,kt=null,Tt=null,yt=null,Nt=null,ue=null,Ue=null}}}const c=new n,u=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},v=new WeakMap,y=[],b=null,A=!1,M=null,x=null,F=null,D=null,L=null,H=null,B=null,O=new Ce(0,0,0),q=0,T=!1,w=null,I=null,j=null,tt=null,ct=null;const at=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=G>=2);let gt=null,_t={};const U=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),ot=new sn().fromArray(U),Rt=new sn().fromArray($);function Gt(W,Ft,Ct,kt){const Tt=new Uint8Array(4),yt=r.createTexture();r.bindTexture(W,yt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Nt=0;Nt<Ct;Nt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ft,0,r.RGBA,1,1,kt,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(Ft+Nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return yt}const nt={};nt[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),dt(r.DEPTH_TEST),u.setFunc(Wr),Et(!1),zt(u_),dt(r.CULL_FACE),xt(Ta);function dt(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function Dt(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function Vt(W,Ft){return g[W]!==Ft?(r.bindFramebuffer(W,Ft),g[W]=Ft,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ft),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ft),!0):!1}function Wt(W,Ft){let Ct=y,kt=!1;if(W){Ct=v.get(Ft),Ct===void 0&&(Ct=[],v.set(Ft,Ct));const Tt=W.textures;if(Ct.length!==Tt.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,Nt=Tt.length;yt<Nt;yt++)Ct[yt]=r.COLOR_ATTACHMENT0+yt;Ct.length=Tt.length,kt=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,kt=!0);kt&&r.drawBuffers(Ct)}function pe(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const ge={[Is]:r.FUNC_ADD,[By]:r.FUNC_SUBTRACT,[Hy]:r.FUNC_REVERSE_SUBTRACT};ge[Gy]=r.MIN,ge[Vy]=r.MAX;const fe={[ky]:r.ZERO,[Xy]:r.ONE,[Wy]:r.SRC_COLOR,[rd]:r.SRC_ALPHA,[Qy]:r.SRC_ALPHA_SATURATE,[Zy]:r.DST_COLOR,[Yy]:r.DST_ALPHA,[qy]:r.ONE_MINUS_SRC_COLOR,[od]:r.ONE_MINUS_SRC_ALPHA,[Ky]:r.ONE_MINUS_DST_COLOR,[jy]:r.ONE_MINUS_DST_ALPHA,[Jy]:r.CONSTANT_COLOR,[$y]:r.ONE_MINUS_CONSTANT_COLOR,[tM]:r.CONSTANT_ALPHA,[eM]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(W,Ft,Ct,kt,Tt,yt,Nt,ue,Ue,Te){if(W===Ta){A===!0&&(Dt(r.BLEND),A=!1);return}if(A===!1&&(dt(r.BLEND),A=!0),W!==Iy){if(W!==M||Te!==T){if((x!==Is||L!==Is)&&(r.blendEquation(r.FUNC_ADD),x=Is,L=Is),Te)switch(W){case kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case f_:r.blendFunc(r.ONE,r.ONE);break;case h_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case d_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Le("WebGLState: Invalid blending: ",W);break}else switch(W){case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case f_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case h_:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case d_:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",W);break}F=null,D=null,H=null,B=null,O.set(0,0,0),q=0,M=W,T=Te}return}Tt=Tt||Ft,yt=yt||Ct,Nt=Nt||kt,(Ft!==x||Tt!==L)&&(r.blendEquationSeparate(ge[Ft],ge[Tt]),x=Ft,L=Tt),(Ct!==F||kt!==D||yt!==H||Nt!==B)&&(r.blendFuncSeparate(fe[Ct],fe[kt],fe[yt],fe[Nt]),F=Ct,D=kt,H=yt,B=Nt),(ue.equals(O)===!1||Ue!==q)&&(r.blendColor(ue.r,ue.g,ue.b,Ue),O.copy(ue),q=Ue),M=W,T=!1}function At(W,Ft){W.side===ki?Dt(r.CULL_FACE):dt(r.CULL_FACE);let Ct=W.side===Jn;Ft&&(Ct=!Ct),Et(Ct),W.blending===kr&&W.transparent===!1?xt(Ta):xt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const kt=W.stencilWrite;h.setTest(kt),kt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ne(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Et(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function zt(W){W!==Fy?(dt(r.CULL_FACE),W!==I&&(W===u_?r.cullFace(r.BACK):W===zy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),I=W}function P(W){W!==j&&(z&&r.lineWidth(W),j=W)}function ne(W,Ft,Ct){W?(dt(r.POLYGON_OFFSET_FILL),(tt!==Ft||ct!==Ct)&&(r.polygonOffset(Ft,Ct),tt=Ft,ct=Ct)):Dt(r.POLYGON_OFFSET_FILL)}function Bt(W){W?dt(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function ie(W){W===void 0&&(W=r.TEXTURE0+at-1),gt!==W&&(r.activeTexture(W),gt=W)}function Lt(W,Ft,Ct){Ct===void 0&&(gt===null?Ct=r.TEXTURE0+at-1:Ct=gt);let kt=_t[Ct];kt===void 0&&(kt={type:void 0,texture:void 0},_t[Ct]=kt),(kt.type!==W||kt.texture!==Ft)&&(gt!==Ct&&(r.activeTexture(Ct),gt=Ct),r.bindTexture(W,Ft||nt[W]),kt.type=W,kt.texture=Ft)}function N(){const W=_t[gt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(W){Le("WebGLState:",W)}}function X(){try{r.compressedTexImage3D(...arguments)}catch(W){Le("WebGLState:",W)}}function ut(){try{r.texSubImage2D(...arguments)}catch(W){Le("WebGLState:",W)}}function pt(){try{r.texSubImage3D(...arguments)}catch(W){Le("WebGLState:",W)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Le("WebGLState:",W)}}function Zt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Le("WebGLState:",W)}}function Ut(){try{r.texStorage2D(...arguments)}catch(W){Le("WebGLState:",W)}}function jt(){try{r.texStorage3D(...arguments)}catch(W){Le("WebGLState:",W)}}function se(){try{r.texImage2D(...arguments)}catch(W){Le("WebGLState:",W)}}function bt(){try{r.texImage3D(...arguments)}catch(W){Le("WebGLState:",W)}}function wt(W){ot.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),ot.copy(W))}function Yt(W){Rt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function Ht(W,Ft){let Ct=p.get(Ft);Ct===void 0&&(Ct=new WeakMap,p.set(Ft,Ct));let kt=Ct.get(W);kt===void 0&&(kt=r.getUniformBlockIndex(Ft,W.name),Ct.set(W,kt))}function Ot(W,Ft){const kt=p.get(Ft).get(W);m.get(Ft)!==kt&&(r.uniformBlockBinding(Ft,kt,W.__bindingPointIndex),m.set(Ft,kt))}function _e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},gt=null,_t={},g={},v=new WeakMap,y=[],b=null,A=!1,M=null,x=null,F=null,D=null,L=null,H=null,B=null,O=new Ce(0,0,0),q=0,T=!1,w=null,I=null,j=null,tt=null,ct=null,ot.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:dt,disable:Dt,bindFramebuffer:Vt,drawBuffers:Wt,useProgram:pe,setBlending:xt,setMaterial:At,setFlipSided:Et,setCullFace:zt,setLineWidth:P,setPolygonOffset:ne,setScissorTest:Bt,activeTexture:ie,bindTexture:Lt,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:se,texImage3D:bt,updateUBOMapping:Ht,uniformBlockBinding:Ot,texStorage2D:Ut,texStorage3D:jt,texSubImage2D:ut,texSubImage3D:pt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Zt,scissor:wt,viewport:Yt,reset:_e}}function SR(r,t,n,s,l,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return y?new OffscreenCanvas(N,E):ru("canvas")}function A(N,E,X){let ut=1;const pt=Lt(N);if((pt.width>X||pt.height>X)&&(ut=X/Math.max(pt.width,pt.height)),ut<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ft=Math.floor(ut*pt.width),Zt=Math.floor(ut*pt.height);g===void 0&&(g=b(ft,Zt));const Ut=E?b(ft,Zt):g;return Ut.width=ft,Ut.height=Zt,Ut.getContext("2d").drawImage(N,0,0,ft,Zt),he("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ft+"x"+Zt+")."),Ut}else return"data"in N&&he("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),N;return N}function M(N){return N.generateMipmaps}function x(N){r.generateMipmap(N)}function F(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(N,E,X,ut,pt=!1){if(N!==null){if(r[N]!==void 0)return r[N];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ft=E;if(E===r.RED&&(X===r.FLOAT&&(ft=r.R32F),X===r.HALF_FLOAT&&(ft=r.R16F),X===r.UNSIGNED_BYTE&&(ft=r.R8)),E===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(ft=r.R8UI),X===r.UNSIGNED_SHORT&&(ft=r.R16UI),X===r.UNSIGNED_INT&&(ft=r.R32UI),X===r.BYTE&&(ft=r.R8I),X===r.SHORT&&(ft=r.R16I),X===r.INT&&(ft=r.R32I)),E===r.RG&&(X===r.FLOAT&&(ft=r.RG32F),X===r.HALF_FLOAT&&(ft=r.RG16F),X===r.UNSIGNED_BYTE&&(ft=r.RG8)),E===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(ft=r.RG8UI),X===r.UNSIGNED_SHORT&&(ft=r.RG16UI),X===r.UNSIGNED_INT&&(ft=r.RG32UI),X===r.BYTE&&(ft=r.RG8I),X===r.SHORT&&(ft=r.RG16I),X===r.INT&&(ft=r.RG32I)),E===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),X===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),X===r.UNSIGNED_INT&&(ft=r.RGB32UI),X===r.BYTE&&(ft=r.RGB8I),X===r.SHORT&&(ft=r.RGB16I),X===r.INT&&(ft=r.RGB32I)),E===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),X===r.UNSIGNED_INT&&(ft=r.RGBA32UI),X===r.BYTE&&(ft=r.RGBA8I),X===r.SHORT&&(ft=r.RGBA16I),X===r.INT&&(ft=r.RGBA32I)),E===r.RGB&&(X===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),E===r.RGBA){const Zt=pt?au:Ne.getTransfer(ut);X===r.FLOAT&&(ft=r.RGBA32F),X===r.HALF_FLOAT&&(ft=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ft=Zt===ke?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function L(N,E){let X;return N?E===null||E===Zi||E===cl?X=r.DEPTH24_STENCIL8:E===Xi?X=r.DEPTH32F_STENCIL8:E===ll&&(X=r.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===cl?X=r.DEPTH_COMPONENT24:E===Xi?X=r.DEPTH_COMPONENT32F:E===ll&&(X=r.DEPTH_COMPONENT16),X}function H(N,E){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Nn&&N.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function B(N){const E=N.target;E.removeEventListener("dispose",B),q(E),E.isVideoTexture&&_.delete(E)}function O(N){const E=N.target;E.removeEventListener("dispose",O),w(E)}function q(N){const E=s.get(N);if(E.__webglInit===void 0)return;const X=N.source,ut=v.get(X);if(ut){const pt=ut[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&T(N),Object.keys(ut).length===0&&v.delete(X)}s.remove(N)}function T(N){const E=s.get(N);r.deleteTexture(E.__webglTexture);const X=N.source,ut=v.get(X);delete ut[E.__cacheKey],u.memory.textures--}function w(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let pt=0;pt<E.__webglFramebuffer[ut].length;pt++)r.deleteFramebuffer(E.__webglFramebuffer[ut][pt]);else r.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)r.deleteFramebuffer(E.__webglFramebuffer[ut]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=N.textures;for(let ut=0,pt=X.length;ut<pt;ut++){const ft=s.get(X[ut]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),u.memory.textures--),s.remove(X[ut])}s.remove(N)}let I=0;function j(){I=0}function tt(){const N=I;return N>=l.maxTextures&&he("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),I+=1,N}function ct(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function at(N,E){const X=s.get(N);if(N.isVideoTexture&&Bt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&X.__version!==N.version){const ut=N.image;if(ut===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(X,N,E);return}}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+E)}function z(N,E){const X=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){nt(X,N,E);return}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+E)}function G(N,E){const X=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){nt(X,N,E);return}n.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+E)}function K(N,E){const X=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&X.__version!==N.version){dt(X,N,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+E)}const gt={[_d]:r.REPEAT,[ba]:r.CLAMP_TO_EDGE,[vd]:r.MIRRORED_REPEAT},_t={[Nn]:r.NEAREST,[aM]:r.NEAREST_MIPMAP_NEAREST,[Tc]:r.NEAREST_MIPMAP_LINEAR,[zn]:r.LINEAR,[bh]:r.LINEAR_MIPMAP_NEAREST,[Hs]:r.LINEAR_MIPMAP_LINEAR},U={[oM]:r.NEVER,[hM]:r.ALWAYS,[lM]:r.LESS,[fp]:r.LEQUAL,[cM]:r.EQUAL,[hp]:r.GEQUAL,[uM]:r.GREATER,[fM]:r.NOTEQUAL};function $(N,E){if(E.type===Xi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===bh||E.magFilter===Tc||E.magFilter===Hs||E.minFilter===zn||E.minFilter===bh||E.minFilter===Tc||E.minFilter===Hs)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,gt[E.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,gt[E.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,gt[E.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,_t[E.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,_t[E.minFilter]),E.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==Tc&&E.minFilter!==Hs||E.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ot(N,E){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",B));const ut=E.source;let pt=v.get(ut);pt===void 0&&(pt={},v.set(ut,pt));const ft=ct(E);if(ft!==N.__cacheKey){pt[ft]===void 0&&(pt[ft]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,X=!0),pt[ft].usedTimes++;const Zt=pt[N.__cacheKey];Zt!==void 0&&(pt[N.__cacheKey].usedTimes--,Zt.usedTimes===0&&T(E)),N.__cacheKey=ft,N.__webglTexture=pt[ft].texture}return X}function Rt(N,E,X){return Math.floor(Math.floor(N/X)/E)}function Gt(N,E,X,ut){const ft=N.updateRanges;if(ft.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,X,ut,E.data);else{ft.sort((bt,wt)=>bt.start-wt.start);let Zt=0;for(let bt=1;bt<ft.length;bt++){const wt=ft[Zt],Yt=ft[bt],Ht=wt.start+wt.count,Ot=Rt(Yt.start,E.width,4),_e=Rt(wt.start,E.width,4);Yt.start<=Ht+1&&Ot===_e&&Rt(Yt.start+Yt.count-1,E.width,4)===Ot?wt.count=Math.max(wt.count,Yt.start+Yt.count-wt.start):(++Zt,ft[Zt]=Yt)}ft.length=Zt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),jt=r.getParameter(r.UNPACK_SKIP_PIXELS),se=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let bt=0,wt=ft.length;bt<wt;bt++){const Yt=ft[bt],Ht=Math.floor(Yt.start/4),Ot=Math.ceil(Yt.count/4),_e=Ht%E.width,W=Math.floor(Ht/E.width),Ft=Ot,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),n.texSubImage2D(r.TEXTURE_2D,0,_e,W,Ft,Ct,X,ut,E.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,se)}}function nt(N,E,X){let ut=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=r.TEXTURE_3D);const pt=ot(N,E),ft=E.source;n.bindTexture(ut,N.__webglTexture,r.TEXTURE0+X);const Zt=s.get(ft);if(ft.version!==Zt.__version||pt===!0){n.activeTexture(r.TEXTURE0+X);const Ut=Ne.getPrimaries(Ne.workingColorSpace),jt=E.colorSpace===us?null:Ne.getPrimaries(E.colorSpace),se=E.colorSpace===us||Ut===jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let bt=A(E.image,!1,l.maxTextureSize);bt=ie(E,bt);const wt=c.convert(E.format,E.colorSpace),Yt=c.convert(E.type);let Ht=D(E.internalFormat,wt,Yt,E.colorSpace,E.isVideoTexture);$(ut,E);let Ot;const _e=E.mipmaps,W=E.isVideoTexture!==!0,Ft=Zt.__version===void 0||pt===!0,Ct=ft.dataReady,kt=H(E,bt);if(E.isDepthTexture)Ht=L(E.format===Gs,E.type),Ft&&(W?n.texStorage2D(r.TEXTURE_2D,1,Ht,bt.width,bt.height):n.texImage2D(r.TEXTURE_2D,0,Ht,bt.width,bt.height,0,wt,Yt,null));else if(E.isDataTexture)if(_e.length>0){W&&Ft&&n.texStorage2D(r.TEXTURE_2D,kt,Ht,_e[0].width,_e[0].height);for(let Tt=0,yt=_e.length;Tt<yt;Tt++)Ot=_e[Tt],W?Ct&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Ot.width,Ot.height,wt,Yt,Ot.data):n.texImage2D(r.TEXTURE_2D,Tt,Ht,Ot.width,Ot.height,0,wt,Yt,Ot.data);E.generateMipmaps=!1}else W?(Ft&&n.texStorage2D(r.TEXTURE_2D,kt,Ht,bt.width,bt.height),Ct&&Gt(E,bt,wt,Yt)):n.texImage2D(r.TEXTURE_2D,0,Ht,bt.width,bt.height,0,wt,Yt,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Ft&&n.texStorage3D(r.TEXTURE_2D_ARRAY,kt,Ht,_e[0].width,_e[0].height,bt.depth);for(let Tt=0,yt=_e.length;Tt<yt;Tt++)if(Ot=_e[Tt],E.format!==Oi)if(wt!==null)if(W){if(Ct)if(E.layerUpdates.size>0){const Nt=Z_(Ot.width,Ot.height,E.format,E.type);for(const ue of E.layerUpdates){const Ue=Ot.data.subarray(ue*Nt/Ot.data.BYTES_PER_ELEMENT,(ue+1)*Nt/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,ue,Ot.width,Ot.height,1,wt,Ue)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Ot.width,Ot.height,bt.depth,wt,Ot.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Tt,Ht,Ot.width,Ot.height,bt.depth,0,Ot.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ct&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Ot.width,Ot.height,bt.depth,wt,Yt,Ot.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Tt,Ht,Ot.width,Ot.height,bt.depth,0,wt,Yt,Ot.data)}else{W&&Ft&&n.texStorage2D(r.TEXTURE_2D,kt,Ht,_e[0].width,_e[0].height);for(let Tt=0,yt=_e.length;Tt<yt;Tt++)Ot=_e[Tt],E.format!==Oi?wt!==null?W?Ct&&n.compressedTexSubImage2D(r.TEXTURE_2D,Tt,0,0,Ot.width,Ot.height,wt,Ot.data):n.compressedTexImage2D(r.TEXTURE_2D,Tt,Ht,Ot.width,Ot.height,0,Ot.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ct&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Ot.width,Ot.height,wt,Yt,Ot.data):n.texImage2D(r.TEXTURE_2D,Tt,Ht,Ot.width,Ot.height,0,wt,Yt,Ot.data)}else if(E.isDataArrayTexture)if(W){if(Ft&&n.texStorage3D(r.TEXTURE_2D_ARRAY,kt,Ht,bt.width,bt.height,bt.depth),Ct)if(E.layerUpdates.size>0){const Tt=Z_(bt.width,bt.height,E.format,E.type);for(const yt of E.layerUpdates){const Nt=bt.data.subarray(yt*Tt/bt.data.BYTES_PER_ELEMENT,(yt+1)*Tt/bt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,bt.width,bt.height,1,wt,Yt,Nt)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,wt,Yt,bt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ht,bt.width,bt.height,bt.depth,0,wt,Yt,bt.data);else if(E.isData3DTexture)W?(Ft&&n.texStorage3D(r.TEXTURE_3D,kt,Ht,bt.width,bt.height,bt.depth),Ct&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,wt,Yt,bt.data)):n.texImage3D(r.TEXTURE_3D,0,Ht,bt.width,bt.height,bt.depth,0,wt,Yt,bt.data);else if(E.isFramebufferTexture){if(Ft)if(W)n.texStorage2D(r.TEXTURE_2D,kt,Ht,bt.width,bt.height);else{let Tt=bt.width,yt=bt.height;for(let Nt=0;Nt<kt;Nt++)n.texImage2D(r.TEXTURE_2D,Nt,Ht,Tt,yt,0,wt,Yt,null),Tt>>=1,yt>>=1}}else if(_e.length>0){if(W&&Ft){const Tt=Lt(_e[0]);n.texStorage2D(r.TEXTURE_2D,kt,Ht,Tt.width,Tt.height)}for(let Tt=0,yt=_e.length;Tt<yt;Tt++)Ot=_e[Tt],W?Ct&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,wt,Yt,Ot):n.texImage2D(r.TEXTURE_2D,Tt,Ht,wt,Yt,Ot);E.generateMipmaps=!1}else if(W){if(Ft){const Tt=Lt(bt);n.texStorage2D(r.TEXTURE_2D,kt,Ht,Tt.width,Tt.height)}Ct&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,Yt,bt)}else n.texImage2D(r.TEXTURE_2D,0,Ht,wt,Yt,bt);M(E)&&x(ut),Zt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function dt(N,E,X){if(E.image.length!==6)return;const ut=ot(N,E),pt=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+X);const ft=s.get(pt);if(pt.version!==ft.__version||ut===!0){n.activeTexture(r.TEXTURE0+X);const Zt=Ne.getPrimaries(Ne.workingColorSpace),Ut=E.colorSpace===us?null:Ne.getPrimaries(E.colorSpace),jt=E.colorSpace===us||Zt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const se=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let yt=0;yt<6;yt++)!se&&!bt?wt[yt]=A(E.image[yt],!0,l.maxCubemapSize):wt[yt]=bt?E.image[yt].image:E.image[yt],wt[yt]=ie(E,wt[yt]);const Yt=wt[0],Ht=c.convert(E.format,E.colorSpace),Ot=c.convert(E.type),_e=D(E.internalFormat,Ht,Ot,E.colorSpace),W=E.isVideoTexture!==!0,Ft=ft.__version===void 0||ut===!0,Ct=pt.dataReady;let kt=H(E,Yt);$(r.TEXTURE_CUBE_MAP,E);let Tt;if(se){W&&Ft&&n.texStorage2D(r.TEXTURE_CUBE_MAP,kt,_e,Yt.width,Yt.height);for(let yt=0;yt<6;yt++){Tt=wt[yt].mipmaps;for(let Nt=0;Nt<Tt.length;Nt++){const ue=Tt[Nt];E.format!==Oi?Ht!==null?W?Ct&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Nt,0,0,ue.width,ue.height,Ht,ue.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Nt,_e,ue.width,ue.height,0,ue.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Nt,0,0,ue.width,ue.height,Ht,Ot,ue.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Nt,_e,ue.width,ue.height,0,Ht,Ot,ue.data)}}}else{if(Tt=E.mipmaps,W&&Ft){Tt.length>0&&kt++;const yt=Lt(wt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,kt,_e,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(bt){W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,wt[yt].width,wt[yt].height,Ht,Ot,wt[yt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,_e,wt[yt].width,wt[yt].height,0,Ht,Ot,wt[yt].data);for(let Nt=0;Nt<Tt.length;Nt++){const Ue=Tt[Nt].image[yt].image;W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Nt+1,0,0,Ue.width,Ue.height,Ht,Ot,Ue.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Nt+1,_e,Ue.width,Ue.height,0,Ht,Ot,Ue.data)}}else{W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ht,Ot,wt[yt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,_e,Ht,Ot,wt[yt]);for(let Nt=0;Nt<Tt.length;Nt++){const ue=Tt[Nt];W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Nt+1,0,0,Ht,Ot,ue.image[yt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Nt+1,_e,Ht,Ot,ue.image[yt])}}}M(E)&&x(r.TEXTURE_CUBE_MAP),ft.__version=pt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Dt(N,E,X,ut,pt,ft){const Zt=c.convert(X.format,X.colorSpace),Ut=c.convert(X.type),jt=D(X.internalFormat,Zt,Ut,X.colorSpace),se=s.get(E),bt=s.get(X);if(bt.__renderTarget=E,!se.__hasExternalTextures){const wt=Math.max(1,E.width>>ft),Yt=Math.max(1,E.height>>ft);pt===r.TEXTURE_3D||pt===r.TEXTURE_2D_ARRAY?n.texImage3D(pt,ft,jt,wt,Yt,E.depth,0,Zt,Ut,null):n.texImage2D(pt,ft,jt,wt,Yt,0,Zt,Ut,null)}n.bindFramebuffer(r.FRAMEBUFFER,N),ne(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,pt,bt.__webglTexture,0,P(E)):(pt===r.TEXTURE_2D||pt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ut,pt,bt.__webglTexture,ft),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(N,E,X){if(r.bindRenderbuffer(r.RENDERBUFFER,N),E.depthBuffer){const ut=E.depthTexture,pt=ut&&ut.isDepthTexture?ut.type:null,ft=L(E.stencilBuffer,pt),Zt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ne(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(E),ft,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(E),ft,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ft,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Zt,r.RENDERBUFFER,N)}else{const ut=E.textures;for(let pt=0;pt<ut.length;pt++){const ft=ut[pt],Zt=c.convert(ft.format,ft.colorSpace),Ut=c.convert(ft.type),jt=D(ft.internalFormat,Zt,Ut,ft.colorSpace);ne(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(E),jt,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(E),jt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,jt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Wt(N,E,X){const ut=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(E.depthTexture);if(pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),pt.__webglTexture===void 0){pt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),$(r.TEXTURE_CUBE_MAP,E.depthTexture);const se=c.convert(E.depthTexture.format),bt=c.convert(E.depthTexture.type);let wt;E.depthTexture.format===Ca?wt=r.DEPTH_COMPONENT24:E.depthTexture.format===Gs&&(wt=r.DEPTH24_STENCIL8);for(let Yt=0;Yt<6;Yt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,wt,E.width,E.height,0,se,bt,null)}}else at(E.depthTexture,0);const ft=pt.__webglTexture,Zt=P(E),Ut=ut?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,jt=E.depthTexture.format===Gs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ca)ne(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,jt,Ut,ft,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,jt,Ut,ft,0);else if(E.depthTexture.format===Gs)ne(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,jt,Ut,ft,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,jt,Ut,ft,0);else throw new Error("Unknown depthTexture format")}function pe(N){const E=s.get(N),X=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ut=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",pt)};ut.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=ut}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let ut=0;ut<6;ut++)Wt(E.__webglFramebuffer[ut],N,ut);else{const ut=N.texture.mipmaps;ut&&ut.length>0?Wt(E.__webglFramebuffer[0],N,0):Wt(E.__webglFramebuffer,N,0)}else if(X){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=r.createRenderbuffer(),Vt(E.__webglDepthbuffer[ut],N,!1);else{const pt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[ut];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,pt,r.RENDERBUFFER,ft)}}else{const ut=N.texture.mipmaps;if(ut&&ut.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Vt(E.__webglDepthbuffer,N,!1);else{const pt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,pt,r.RENDERBUFFER,ft)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(N,E,X){const ut=s.get(N);E!==void 0&&Dt(ut.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&pe(N)}function fe(N){const E=N.texture,X=s.get(N),ut=s.get(E);N.addEventListener("dispose",O);const pt=N.textures,ft=N.isWebGLCubeRenderTarget===!0,Zt=pt.length>1;if(Zt||(ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture()),ut.__version=E.version,u.memory.textures++),ft){X.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[Ut]=[];for(let jt=0;jt<E.mipmaps.length;jt++)X.__webglFramebuffer[Ut][jt]=r.createFramebuffer()}else X.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)X.__webglFramebuffer[Ut]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Zt)for(let Ut=0,jt=pt.length;Ut<jt;Ut++){const se=s.get(pt[Ut]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),u.memory.textures++)}if(N.samples>0&&ne(N)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ut=0;Ut<pt.length;Ut++){const jt=pt[Ut];X.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[Ut]);const se=c.convert(jt.format,jt.colorSpace),bt=c.convert(jt.type),wt=D(jt.internalFormat,se,bt,jt.colorSpace,N.isXRRenderTarget===!0),Yt=P(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,wt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,X.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(X.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){n.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),$(r.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Dt(X.__webglFramebuffer[Ut][jt],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,jt);else Dt(X.__webglFramebuffer[Ut],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(E)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let Ut=0,jt=pt.length;Ut<jt;Ut++){const se=pt[Ut],bt=s.get(se);let wt=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(wt,bt.__webglTexture),$(wt,se),Dt(X.__webglFramebuffer,N,se,r.COLOR_ATTACHMENT0+Ut,wt,0),M(se)&&x(wt)}n.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ut,ut.__webglTexture),$(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Dt(X.__webglFramebuffer[jt],N,E,r.COLOR_ATTACHMENT0,Ut,jt);else Dt(X.__webglFramebuffer,N,E,r.COLOR_ATTACHMENT0,Ut,0);M(E)&&x(Ut),n.unbindTexture()}N.depthBuffer&&pe(N)}function xt(N){const E=N.textures;for(let X=0,ut=E.length;X<ut;X++){const pt=E[X];if(M(pt)){const ft=F(N),Zt=s.get(pt).__webglTexture;n.bindTexture(ft,Zt),x(ft),n.unbindTexture()}}}const At=[],Et=[];function zt(N){if(N.samples>0){if(ne(N)===!1){const E=N.textures,X=N.width,ut=N.height;let pt=r.COLOR_BUFFER_BIT;const ft=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Zt=s.get(N),Ut=E.length>1;if(Ut)for(let se=0;se<E.length;se++)n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const jt=N.texture.mipmaps;jt&&jt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let se=0;se<E.length;se++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pt|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[se]);const bt=s.get(E[se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,X,ut,0,0,X,ut,pt,r.NEAREST),m===!0&&(At.length=0,Et.length=0,At.push(r.COLOR_ATTACHMENT0+se),N.depthBuffer&&N.resolveDepthBuffer===!1&&(At.push(ft),Et.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Et)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,At))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let se=0;se<E.length;se++){n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[se]);const bt=s.get(E[se]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,bt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function P(N){return Math.min(l.maxSamples,N.samples)}function ne(N){const E=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Bt(N){const E=u.render.frame;_.get(N)!==E&&(_.set(N,E),N.update())}function ie(N,E){const X=N.colorSpace,ut=N.format,pt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==jr&&X!==us&&(Ne.getTransfer(X)===ke?(ut!==Oi||pt!==li)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",X)),E}function Lt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=j,this.setTexture2D=at,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=ge,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function yR(r,t){function n(s,l=us){let c;const u=Ne.getTransfer(l);if(s===li)return r.UNSIGNED_BYTE;if(s===rp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===op)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Uv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Ov)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Lv)return r.BYTE;if(s===Nv)return r.SHORT;if(s===ll)return r.UNSIGNED_SHORT;if(s===sp)return r.INT;if(s===Zi)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===Ra)return r.HALF_FLOAT;if(s===Pv)return r.ALPHA;if(s===Fv)return r.RGB;if(s===Oi)return r.RGBA;if(s===Ca)return r.DEPTH_COMPONENT;if(s===Gs)return r.DEPTH_STENCIL;if(s===zv)return r.RED;if(s===lp)return r.RED_INTEGER;if(s===Yr)return r.RG;if(s===cp)return r.RG_INTEGER;if(s===up)return r.RGBA_INTEGER;if(s===Jc||s===$c||s===tu||s===eu)if(u===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xd||s===Sd||s===yd||s===Md)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ed||s===bd)return u===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Td)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ad)return c.COMPRESSED_R11_EAC;if(s===Rd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Cd)return c.COMPRESSED_RG11_EAC;if(s===wd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Dd||s===Ld||s===Nd||s===Ud||s===Od||s===Pd||s===Fd||s===zd||s===Id||s===Bd||s===Hd||s===Gd||s===Vd||s===kd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Dd)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ld)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nd)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ud)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Od)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pd)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fd)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zd)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Id)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bd)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hd)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gd)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vd)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kd)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xd||s===Wd||s===qd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Xd)return u===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yd||s===jd||s===Zd||s===Kd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Yd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===jd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const MR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ER=`
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

}`;class bR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new Qv(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new Qi({vertexShader:MR,fragmentShader:ER,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pi(new fu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TR extends Ws{constructor(t,n){super();const s=this;let l=null,c=1,u=null,h="local-floor",m=1,p=null,_=null,g=null,v=null,y=null,b=null;const A=typeof XRWebGLBinding<"u",M=new bR,x={},F=n.getContextAttributes();let D=null,L=null;const H=[],B=[],O=new Pt;let q=null;const T=new Mi;T.viewport=new sn;const w=new Mi;w.viewport=new sn;const I=[T,w],j=new UE;let tt=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let dt=H[nt];return dt===void 0&&(dt=new qh,H[nt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(nt){let dt=H[nt];return dt===void 0&&(dt=new qh,H[nt]=dt),dt.getGripSpace()},this.getHand=function(nt){let dt=H[nt];return dt===void 0&&(dt=new qh,H[nt]=dt),dt.getHandSpace()};function at(nt){const dt=B.indexOf(nt.inputSource);if(dt===-1)return;const Dt=H[dt];Dt!==void 0&&(Dt.update(nt.inputSource,nt.frame,p||u),Dt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function z(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",G);for(let nt=0;nt<H.length;nt++){const dt=B[nt];dt!==null&&(B[nt]=null,H[nt].disconnect(dt))}tt=null,ct=null,M.reset();for(const nt in x)delete x[nt];t.setRenderTarget(D),y=null,v=null,g=null,l=null,L=null,Gt.stop(),s.isPresenting=!1,t.setPixelRatio(q),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,s.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,n)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",z),l.addEventListener("inputsourceschange",G),F.xrCompatible!==!0&&await n.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Vt=null,Wt=null;F.depth&&(Wt=F.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Dt=F.stencil?Gs:Ca,Vt=F.stencil?cl:Zi);const pe={colorFormat:n.RGBA8,depthFormat:Wt,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(pe),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new Yi(v.textureWidth,v.textureHeight,{format:Oi,type:li,depthTexture:new fl(v.textureWidth,v.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Dt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,Dt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Yi(y.framebufferWidth,y.framebufferHeight,{format:Oi,type:li,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await l.requestReferenceSpace(h),Gt.setContext(l),Gt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(nt){for(let dt=0;dt<nt.removed.length;dt++){const Dt=nt.removed[dt],Vt=B.indexOf(Dt);Vt>=0&&(B[Vt]=null,H[Vt].disconnect(Dt))}for(let dt=0;dt<nt.added.length;dt++){const Dt=nt.added[dt];let Vt=B.indexOf(Dt);if(Vt===-1){for(let pe=0;pe<H.length;pe++)if(pe>=B.length){B.push(Dt),Vt=pe;break}else if(B[pe]===null){B[pe]=Dt,Vt=pe;break}if(Vt===-1)break}const Wt=H[Vt];Wt&&Wt.connect(Dt)}}const K=new Y,gt=new Y;function _t(nt,dt,Dt){K.setFromMatrixPosition(dt.matrixWorld),gt.setFromMatrixPosition(Dt.matrixWorld);const Vt=K.distanceTo(gt),Wt=dt.projectionMatrix.elements,pe=Dt.projectionMatrix.elements,ge=Wt[14]/(Wt[10]-1),fe=Wt[14]/(Wt[10]+1),xt=(Wt[9]+1)/Wt[5],At=(Wt[9]-1)/Wt[5],Et=(Wt[8]-1)/Wt[0],zt=(pe[8]+1)/pe[0],P=ge*Et,ne=ge*zt,Bt=Vt/(-Et+zt),ie=Bt*-Et;if(dt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ie),nt.translateZ(Bt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Wt[10]===-1)nt.projectionMatrix.copy(dt.projectionMatrix),nt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Lt=ge+Bt,N=fe+Bt,E=P-ie,X=ne+(Vt-ie),ut=xt*fe/N*Lt,pt=At*fe/N*Lt;nt.projectionMatrix.makePerspective(E,X,ut,pt,Lt,N),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function U(nt,dt){dt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(dt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let dt=nt.near,Dt=nt.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),j.near=w.near=T.near=dt,j.far=w.far=T.far=Dt,(tt!==j.near||ct!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),tt=j.near,ct=j.far),j.layers.mask=nt.layers.mask|6,T.layers.mask=j.layers.mask&3,w.layers.mask=j.layers.mask&5;const Vt=nt.parent,Wt=j.cameras;U(j,Vt);for(let pe=0;pe<Wt.length;pe++)U(Wt[pe],Vt);Wt.length===2?_t(j,T,w):j.projectionMatrix.copy(T.projectionMatrix),$(nt,j,Vt)};function $(nt,dt,Dt){Dt===null?nt.matrix.copy(dt.matrixWorld):(nt.matrix.copy(Dt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(dt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(dt.projectionMatrix),nt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Qd*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(nt){m=nt,v!==null&&(v.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(nt){return x[nt]};let ot=null;function Rt(nt,dt){if(_=dt.getViewerPose(p||u),b=dt,_!==null){const Dt=_.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Vt=!1;Dt.length!==j.cameras.length&&(j.cameras.length=0,Vt=!0);for(let fe=0;fe<Dt.length;fe++){const xt=Dt[fe];let At=null;if(y!==null)At=y.getViewport(xt);else{const zt=g.getViewSubImage(v,xt);At=zt.viewport,fe===0&&(t.setRenderTargetTextures(L,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(L))}let Et=I[fe];Et===void 0&&(Et=new Mi,Et.layers.enable(fe),Et.viewport=new sn,I[fe]=Et),Et.matrix.fromArray(xt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(xt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(At.x,At.y,At.width,At.height),fe===0&&(j.matrix.copy(Et.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Vt===!0&&j.cameras.push(Et)}const Wt=l.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=s.getBinding();const fe=g.getDepthInformation(Dt[0]);fe&&fe.isValid&&fe.texture&&M.init(fe,l.renderState)}if(Wt&&Wt.includes("camera-access")&&A){t.state.unbindTexture(),g=s.getBinding();for(let fe=0;fe<Dt.length;fe++){const xt=Dt[fe].camera;if(xt){let At=x[xt];At||(At=new Qv,x[xt]=At);const Et=g.getCameraImage(xt);At.sourceTexture=Et}}}}for(let Dt=0;Dt<H.length;Dt++){const Vt=B[Dt],Wt=H[Dt];Vt!==null&&Wt!==void 0&&Wt.update(Vt,dt,p||u)}ot&&ot(nt,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),b=null}const Gt=new lx;Gt.setAnimationLoop(Rt),this.setAnimationLoop=function(nt){ot=nt},this.dispose=function(){}}}const zs=new Ki,AR=new tn;function RR(r,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,qv(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,F,D,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,L)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),A(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(u(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,F,D):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Jn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Jn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const F=t.get(x),D=F.envMap,L=F.envMapRotation;D&&(M.envMap.value=D,zs.copy(L),zs.x*=-1,zs.y*=-1,zs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),M.envMapRotation.value.setFromMatrix4(AR.makeRotationFromEuler(zs)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function u(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,F,D){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*F,M.scale.value=D*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,F){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Jn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function A(M,x){const F=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function CR(r,t,n,s){let l={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,D){const L=D.program;s.uniformBlockBinding(F,L)}function p(F,D){let L=l[F.id];L===void 0&&(b(F),L=_(F),l[F.id]=L,F.addEventListener("dispose",M));const H=D.program;s.updateUBOMapping(F,H);const B=t.render.frame;c[F.id]!==B&&(v(F),c[F.id]=B)}function _(F){const D=g();F.__bindingPointIndex=D;const L=r.createBuffer(),H=F.__size,B=F.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,H,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,L),L}function g(){for(let F=0;F<h;F++)if(u.indexOf(F)===-1)return u.push(F),F;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(F){const D=l[F.id],L=F.uniforms,H=F.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let B=0,O=L.length;B<O;B++){const q=Array.isArray(L[B])?L[B]:[L[B]];for(let T=0,w=q.length;T<w;T++){const I=q[T];if(y(I,B,T,H)===!0){const j=I.__offset,tt=Array.isArray(I.value)?I.value:[I.value];let ct=0;for(let at=0;at<tt.length;at++){const z=tt[at],G=A(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,j+ct,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,ct),ct+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(F,D,L,H){const B=F.value,O=D+"_"+L;if(H[O]===void 0)return typeof B=="number"||typeof B=="boolean"?H[O]=B:H[O]=B.clone(),!0;{const q=H[O];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return H[O]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function b(F){const D=F.uniforms;let L=0;const H=16;for(let O=0,q=D.length;O<q;O++){const T=Array.isArray(D[O])?D[O]:[D[O]];for(let w=0,I=T.length;w<I;w++){const j=T[w],tt=Array.isArray(j.value)?j.value:[j.value];for(let ct=0,at=tt.length;ct<at;ct++){const z=tt[ct],G=A(z),K=L%H,gt=K%G.boundary,_t=K+gt;L+=gt,_t!==0&&H-_t<G.storage&&(L+=H-_t),j.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=L,L+=G.storage}}}const B=L%H;return B>0&&(L+=H-B),F.__size=L,F.__cache={},this}function A(F){const D={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(D.boundary=4,D.storage=4):F.isVector2?(D.boundary=8,D.storage=8):F.isVector3||F.isColor?(D.boundary=16,D.storage=12):F.isVector4?(D.boundary=16,D.storage=16):F.isMatrix3?(D.boundary=48,D.storage=48):F.isMatrix4?(D.boundary=64,D.storage=64):F.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):he("WebGLRenderer: Unsupported uniform value type.",F),D}function M(F){const D=F.target;D.removeEventListener("dispose",M);const L=u.indexOf(D.__bindingPointIndex);u.splice(L,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function x(){for(const F in l)r.deleteBuffer(l[F]);u=[],l={},c={}}return{bind:m,update:p,dispose:x}}const wR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function DR(){return Gi===null&&(Gi=new GM(wR,16,16,Yr,Ra),Gi.name="DFG_LUT",Gi.minFilter=zn,Gi.magFilter=zn,Gi.wrapS=ba,Gi.wrapT=ba,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class LR{constructor(t={}){const{canvas:n=dM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=li}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=u;const A=y,M=new Set([up,cp,lp]),x=new Set([li,Zi,ll,cl,rp,op]),F=new Uint32Array(4),D=new Int32Array(4);let L=null,H=null;const B=[],O=[];let q=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=yi;let I=0,j=0,tt=null,ct=-1,at=null;const z=new sn,G=new sn;let K=null;const gt=new Ce(0);let _t=0,U=n.width,$=n.height,ot=1,Rt=null,Gt=null;const nt=new sn(0,0,U,$),dt=new sn(0,0,U,$);let Dt=!1;const Vt=new gp;let Wt=!1,pe=!1;const ge=new tn,fe=new Y,xt=new sn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function zt(){return tt===null?ot:1}let P=s;function ne(C,Z){return n.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ap}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",Te,!1),P===null){const Z="webgl2";if(P=ne(Z,C),P===null)throw ne(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Le("WebGLRenderer: "+C.message),C}let Bt,ie,Lt,N,E,X,ut,pt,ft,Zt,Ut,jt,se,bt,wt,Yt,Ht,Ot,_e,W,Ft,Ct,kt,Tt;function yt(){Bt=new D1(P),Bt.init(),Ct=new yR(P,Bt),ie=new y1(P,Bt,t,Ct),Lt=new xR(P,Bt),ie.reversedDepthBuffer&&v&&Lt.buffers.depth.setReversed(!0),N=new U1(P),E=new aR,X=new SR(P,Bt,Lt,E,ie,Ct,N),ut=new E1(T),pt=new w1(T),ft=new zE(P),kt=new x1(P,ft),Zt=new L1(P,ft,N,kt),Ut=new P1(P,Zt,ft,N),_e=new O1(P,ie,X),Yt=new M1(E),jt=new iR(T,ut,pt,Bt,ie,kt,Yt),se=new RR(T,E),bt=new rR,wt=new hR(Bt),Ot=new v1(T,ut,pt,Lt,Ut,b,m),Ht=new _R(T,Ut,ie),Tt=new CR(P,N,ie,Lt),W=new S1(P,Bt,N),Ft=new N1(P,Bt,N),N.programs=jt.programs,T.capabilities=ie,T.extensions=Bt,T.properties=E,T.renderLists=bt,T.shadowMap=Ht,T.state=Lt,T.info=N}yt(),A!==li&&(q=new z1(A,n.width,n.height,l,c));const Nt=new TR(T,P);this.xr=Nt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=Bt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Bt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(C){C!==void 0&&(ot=C,this.setSize(U,$,!1))},this.getSize=function(C){return C.set(U,$)},this.setSize=function(C,Z,lt=!0){if(Nt.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,$=Z,n.width=Math.floor(C*ot),n.height=Math.floor(Z*ot),lt===!0&&(n.style.width=C+"px",n.style.height=Z+"px"),q!==null&&q.setSize(n.width,n.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(U*ot,$*ot).floor()},this.setDrawingBufferSize=function(C,Z,lt){U=C,$=Z,ot=lt,n.width=Math.floor(C*lt),n.height=Math.floor(Z*lt),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(A===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,Z,lt,st){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,Z,lt,st),Lt.viewport(z.copy(nt).multiplyScalar(ot).round())},this.getScissor=function(C){return C.copy(dt)},this.setScissor=function(C,Z,lt,st){C.isVector4?dt.set(C.x,C.y,C.z,C.w):dt.set(C,Z,lt,st),Lt.scissor(G.copy(dt).multiplyScalar(ot).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(C){Lt.setScissorTest(Dt=C)},this.setOpaqueSort=function(C){Rt=C},this.setTransparentSort=function(C){Gt=C},this.getClearColor=function(C){return C.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,lt=!0){let st=0;if(C){let J=!1;if(tt!==null){const It=tt.texture.format;J=M.has(It)}if(J){const It=tt.texture.type,Kt=x.has(It),Xt=Ot.getClearColor(),Qt=Ot.getClearAlpha(),$t=Xt.r,oe=Xt.g,te=Xt.b;Kt?(F[0]=$t,F[1]=oe,F[2]=te,F[3]=Qt,P.clearBufferuiv(P.COLOR,0,F)):(D[0]=$t,D[1]=oe,D[2]=te,D[3]=Qt,P.clearBufferiv(P.COLOR,0,D))}else st|=P.COLOR_BUFFER_BIT}Z&&(st|=P.DEPTH_BUFFER_BIT),lt&&(st|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),Ot.dispose(),bt.dispose(),wt.dispose(),E.dispose(),ut.dispose(),pt.dispose(),Ut.dispose(),kt.dispose(),Tt.dispose(),jt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",ta),Nt.removeEventListener("sessionend",ds),kn.stop()};function ue(C){C.preventDefault(),v_("WebGLRenderer: Context Lost."),w=!0}function Ue(){v_("WebGLRenderer: Context Restored."),w=!1;const C=N.autoReset,Z=Ht.enabled,lt=Ht.autoUpdate,st=Ht.needsUpdate,J=Ht.type;yt(),N.autoReset=C,Ht.enabled=Z,Ht.autoUpdate=lt,Ht.needsUpdate=st,Ht.type=J}function Te(C){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function pn(C){const Z=C.target;Z.removeEventListener("dispose",pn),Vn(Z)}function Vn(C){Fi(C),E.remove(C)}function Fi(C){const Z=E.get(C).programs;Z!==void 0&&(Z.forEach(function(lt){jt.releaseProgram(lt)}),C.isShaderMaterial&&jt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,lt,st,J,It){Z===null&&(Z=At);const Kt=J.isMesh&&J.matrixWorld.determinant()<0,Xt=ps(C,Z,lt,st,J);Lt.setMaterial(st,Kt);let Qt=lt.index,$t=1;if(st.wireframe===!0){if(Qt=Zt.getWireframeAttribute(lt),Qt===void 0)return;$t=2}const oe=lt.drawRange,te=lt.attributes.position;let le=oe.start*$t,Fe=(oe.start+oe.count)*$t;It!==null&&(le=Math.max(le,It.start*$t),Fe=Math.min(Fe,(It.start+It.count)*$t)),Qt!==null?(le=Math.max(le,0),Fe=Math.min(Fe,Qt.count)):te!=null&&(le=Math.max(le,0),Fe=Math.min(Fe,te.count));const Je=Fe-le;if(Je<0||Je===1/0)return;kt.setup(J,st,Xt,lt,Qt);let Ze,Be=W;if(Qt!==null&&(Ze=ft.get(Qt),Be=Ft,Be.setIndex(Ze)),J.isMesh)st.wireframe===!0?(Lt.setLineWidth(st.wireframeLinewidth*zt()),Be.setMode(P.LINES)):Be.setMode(P.TRIANGLES);else if(J.isLine){let ae=st.linewidth;ae===void 0&&(ae=1),Lt.setLineWidth(ae*zt()),J.isLineSegments?Be.setMode(P.LINES):J.isLineLoop?Be.setMode(P.LINE_LOOP):Be.setMode(P.LINE_STRIP)}else J.isPoints?Be.setMode(P.POINTS):J.isSprite&&Be.setMode(P.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ul("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Be.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Be.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ae=J._multiDrawStarts,ze=J._multiDrawCounts,de=J._multiDrawCount,En=Qt?ft.get(Qt).bytesPerElement:1,ea=E.get(st).currentProgram.getUniforms();for(let bn=0;bn<de;bn++)ea.setValue(P,"_gl_DrawID",bn),Be.render(ae[bn]/En,ze[bn])}else if(J.isInstancedMesh)Be.renderInstances(le,Je,J.count);else if(lt.isInstancedBufferGeometry){const ae=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,ze=Math.min(lt.instanceCount,ae);Be.renderInstances(le,Je,ze)}else Be.render(le,Je)};function wa(C,Z,lt){C.transparent===!0&&C.side===ki&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,Ys(C,Z,lt),C.side=hs,C.needsUpdate=!0,Ys(C,Z,lt),C.side=ki):Ys(C,Z,lt)}this.compile=function(C,Z,lt=null){lt===null&&(lt=C),H=wt.get(lt),H.init(Z),O.push(H),lt.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(H.pushLight(J),J.castShadow&&H.pushShadow(J))}),C!==lt&&C.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(H.pushLight(J),J.castShadow&&H.pushShadow(J))}),H.setupLights();const st=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const It=J.material;if(It)if(Array.isArray(It))for(let Kt=0;Kt<It.length;Kt++){const Xt=It[Kt];wa(Xt,lt,J),st.add(Xt)}else wa(It,lt,J),st.add(It)}),H=O.pop(),st},this.compileAsync=function(C,Z,lt=null){const st=this.compile(C,Z,lt);return new Promise(J=>{function It(){if(st.forEach(function(Kt){E.get(Kt).currentProgram.isReady()&&st.delete(Kt)}),st.size===0){J(C);return}setTimeout(It,10)}Bt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let $i=null;function Da(C){$i&&$i(C)}function ta(){kn.stop()}function ds(){kn.start()}const kn=new lx;kn.setAnimationLoop(Da),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(C){$i=C,Nt.setAnimationLoop(C),C===null?kn.stop():kn.start()},Nt.addEventListener("sessionstart",ta),Nt.addEventListener("sessionend",ds),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const lt=Nt.enabled===!0&&Nt.isPresenting===!0,st=q!==null&&(tt===null||lt)&&q.begin(T,tt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(Z),Z=Nt.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,Z,tt),H=wt.get(C,O.length),H.init(Z),O.push(H),ge.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Vt.setFromProjectionMatrix(ge,Wi,Z.reversedDepth),pe=this.localClippingEnabled,Wt=Yt.init(this.clippingPlanes,pe),L=bt.get(C,B.length),L.init(),B.push(L),Nt.enabled===!0&&Nt.isPresenting===!0){const Kt=T.xr.getDepthSensingMesh();Kt!==null&&ci(Kt,Z,-1/0,T.sortObjects)}ci(C,Z,0,T.sortObjects),L.finish(),T.sortObjects===!0&&L.sort(Rt,Gt),Et=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Et&&Ot.addToRenderList(L,C),this.info.render.frame++,Wt===!0&&Yt.beginShadows();const J=H.state.shadowsArray;if(Ht.render(J,C,Z),Wt===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&q.hasRenderPass())===!1){const Kt=L.opaque,Xt=L.transmissive;if(H.setupLights(),Z.isArrayCamera){const Qt=Z.cameras;if(Xt.length>0)for(let $t=0,oe=Qt.length;$t<oe;$t++){const te=Qt[$t];Mn(Kt,Xt,C,te)}Et&&Ot.render(C);for(let $t=0,oe=Qt.length;$t<oe;$t++){const te=Qt[$t];ln(L,C,te,te.viewport)}}else Xt.length>0&&Mn(Kt,Xt,C,Z),Et&&Ot.render(C),ln(L,C,Z)}tt!==null&&j===0&&(X.updateMultisampleRenderTarget(tt),X.updateRenderTargetMipmap(tt)),st&&q.end(T),C.isScene===!0&&C.onAfterRender(T,C,Z),kt.resetDefaultState(),ct=-1,at=null,O.pop(),O.length>0?(H=O[O.length-1],Wt===!0&&Yt.setGlobalState(T.clippingPlanes,H.state.camera)):H=null,B.pop(),B.length>0?L=B[B.length-1]:L=null};function ci(C,Z,lt,st){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)H.pushLight(C),C.castShadow&&H.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Vt.intersectsSprite(C)){st&&xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);const Kt=Ut.update(C),Xt=C.material;Xt.visible&&L.push(C,Kt,Xt,lt,xt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Vt.intersectsObject(C))){const Kt=Ut.update(C),Xt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xt.copy(C.boundingSphere.center)):(Kt.boundingSphere===null&&Kt.computeBoundingSphere(),xt.copy(Kt.boundingSphere.center)),xt.applyMatrix4(C.matrixWorld).applyMatrix4(ge)),Array.isArray(Xt)){const Qt=Kt.groups;for(let $t=0,oe=Qt.length;$t<oe;$t++){const te=Qt[$t],le=Xt[te.materialIndex];le&&le.visible&&L.push(C,Kt,le,lt,xt.z,te)}}else Xt.visible&&L.push(C,Kt,Xt,lt,xt.z,null)}}const It=C.children;for(let Kt=0,Xt=It.length;Kt<Xt;Kt++)ci(It[Kt],Z,lt,st)}function ln(C,Z,lt,st){const{opaque:J,transmissive:It,transparent:Kt}=C;H.setupLightsView(lt),Wt===!0&&Yt.setGlobalState(T.clippingPlanes,lt),st&&Lt.viewport(z.copy(st)),J.length>0&&bi(J,Z,lt),It.length>0&&bi(It,Z,lt),Kt.length>0&&bi(Kt,Z,lt),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Mn(C,Z,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[st.id]===void 0){const le=Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[st.id]=new Yi(1,1,{generateMipmaps:!0,type:le?Ra:li,minFilter:Hs,samples:ie.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace})}const It=H.state.transmissionRenderTarget[st.id],Kt=st.viewport||z;It.setSize(Kt.z*T.transmissionResolutionScale,Kt.w*T.transmissionResolutionScale);const Xt=T.getRenderTarget(),Qt=T.getActiveCubeFace(),$t=T.getActiveMipmapLevel();T.setRenderTarget(It),T.getClearColor(gt),_t=T.getClearAlpha(),_t<1&&T.setClearColor(16777215,.5),T.clear(),Et&&Ot.render(lt);const oe=T.toneMapping;T.toneMapping=qi;const te=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),H.setupLightsView(st),Wt===!0&&Yt.setGlobalState(T.clippingPlanes,st),bi(C,lt,st),X.updateMultisampleRenderTarget(It),X.updateRenderTargetMipmap(It),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Fe=0,Je=Z.length;Fe<Je;Fe++){const Ze=Z[Fe],{object:Be,geometry:ae,material:ze,group:de}=Ze;if(ze.side===ki&&Be.layers.test(st.layers)){const En=ze.side;ze.side=Jn,ze.needsUpdate=!0,qs(Be,lt,st,ae,ze,de),ze.side=En,ze.needsUpdate=!0,le=!0}}le===!0&&(X.updateMultisampleRenderTarget(It),X.updateRenderTargetMipmap(It))}T.setRenderTarget(Xt,Qt,$t),T.setClearColor(gt,_t),te!==void 0&&(st.viewport=te),T.toneMapping=oe}function bi(C,Z,lt){const st=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,It=C.length;J<It;J++){const Kt=C[J],{object:Xt,geometry:Qt,group:$t}=Kt;let oe=Kt.material;oe.allowOverride===!0&&st!==null&&(oe=st),Xt.layers.test(lt.layers)&&qs(Xt,Z,lt,Qt,oe,$t)}}function qs(C,Z,lt,st,J,It){C.onBeforeRender(T,Z,lt,st,J,It),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(T,Z,lt,st,C,It),J.transparent===!0&&J.side===ki&&J.forceSinglePass===!1?(J.side=Jn,J.needsUpdate=!0,T.renderBufferDirect(lt,Z,st,J,C,It),J.side=hs,J.needsUpdate=!0,T.renderBufferDirect(lt,Z,st,J,C,It),J.side=ki):T.renderBufferDirect(lt,Z,st,J,C,It),C.onAfterRender(T,Z,lt,st,J,It)}function Ys(C,Z,lt){Z.isScene!==!0&&(Z=At);const st=E.get(C),J=H.state.lights,It=H.state.shadowsArray,Kt=J.state.version,Xt=jt.getParameters(C,J.state,It,Z,lt),Qt=jt.getProgramCacheKey(Xt);let $t=st.programs;st.environment=C.isMeshStandardMaterial?Z.environment:null,st.fog=Z.fog,st.envMap=(C.isMeshStandardMaterial?pt:ut).get(C.envMap||st.environment),st.envMapRotation=st.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,$t===void 0&&(C.addEventListener("dispose",pn),$t=new Map,st.programs=$t);let oe=$t.get(Qt);if(oe!==void 0){if(st.currentProgram===oe&&st.lightsStateVersion===Kt)return no(C,Xt),oe}else Xt.uniforms=jt.getUniforms(C),C.onBeforeCompile(Xt,T),oe=jt.acquireProgram(Xt,Qt),$t.set(Qt,oe),st.uniforms=Xt.uniforms;const te=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(te.clippingPlanes=Yt.uniform),no(C,Xt),st.needsLights=La(C),st.lightsStateVersion=Kt,st.needsLights&&(te.ambientLightColor.value=J.state.ambient,te.lightProbe.value=J.state.probe,te.directionalLights.value=J.state.directional,te.directionalLightShadows.value=J.state.directionalShadow,te.spotLights.value=J.state.spot,te.spotLightShadows.value=J.state.spotShadow,te.rectAreaLights.value=J.state.rectArea,te.ltc_1.value=J.state.rectAreaLTC1,te.ltc_2.value=J.state.rectAreaLTC2,te.pointLights.value=J.state.point,te.pointLightShadows.value=J.state.pointShadow,te.hemisphereLights.value=J.state.hemi,te.directionalShadowMap.value=J.state.directionalShadowMap,te.directionalShadowMatrix.value=J.state.directionalShadowMatrix,te.spotShadowMap.value=J.state.spotShadowMap,te.spotLightMatrix.value=J.state.spotLightMatrix,te.spotLightMap.value=J.state.spotLightMap,te.pointShadowMap.value=J.state.pointShadowMap,te.pointShadowMatrix.value=J.state.pointShadowMatrix),st.currentProgram=oe,st.uniformsList=null,oe}function ml(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=iu.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function no(C,Z){const lt=E.get(C);lt.outputColorSpace=Z.outputColorSpace,lt.batching=Z.batching,lt.batchingColor=Z.batchingColor,lt.instancing=Z.instancing,lt.instancingColor=Z.instancingColor,lt.instancingMorph=Z.instancingMorph,lt.skinning=Z.skinning,lt.morphTargets=Z.morphTargets,lt.morphNormals=Z.morphNormals,lt.morphColors=Z.morphColors,lt.morphTargetsCount=Z.morphTargetsCount,lt.numClippingPlanes=Z.numClippingPlanes,lt.numIntersection=Z.numClipIntersection,lt.vertexAlphas=Z.vertexAlphas,lt.vertexTangents=Z.vertexTangents,lt.toneMapping=Z.toneMapping}function ps(C,Z,lt,st,J){Z.isScene!==!0&&(Z=At),X.resetTextureUnits();const It=Z.fog,Kt=st.isMeshStandardMaterial?Z.environment:null,Xt=tt===null?T.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:jr,Qt=(st.isMeshStandardMaterial?pt:ut).get(st.envMap||Kt),$t=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,oe=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),te=!!lt.morphAttributes.position,le=!!lt.morphAttributes.normal,Fe=!!lt.morphAttributes.color;let Je=qi;st.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Je=T.toneMapping);const Ze=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Be=Ze!==void 0?Ze.length:0,ae=E.get(st),ze=H.state.lights;if(Wt===!0&&(pe===!0||C!==at)){const An=C===at&&st.id===ct;Yt.setState(st,C,An)}let de=!1;st.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==ze.state.version||ae.outputColorSpace!==Xt||J.isBatchedMesh&&ae.batching===!1||!J.isBatchedMesh&&ae.batching===!0||J.isBatchedMesh&&ae.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ae.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ae.instancing===!1||!J.isInstancedMesh&&ae.instancing===!0||J.isSkinnedMesh&&ae.skinning===!1||!J.isSkinnedMesh&&ae.skinning===!0||J.isInstancedMesh&&ae.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ae.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ae.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ae.instancingMorph===!1&&J.morphTexture!==null||ae.envMap!==Qt||st.fog===!0&&ae.fog!==It||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Yt.numPlanes||ae.numIntersection!==Yt.numIntersection)||ae.vertexAlphas!==$t||ae.vertexTangents!==oe||ae.morphTargets!==te||ae.morphNormals!==le||ae.morphColors!==Fe||ae.toneMapping!==Je||ae.morphTargetsCount!==Be)&&(de=!0):(de=!0,ae.__version=st.version);let En=ae.currentProgram;de===!0&&(En=Ys(st,Z,J));let ea=!1,bn=!1,ui=!1;const He=En.getUniforms(),Tn=ae.uniforms;if(Lt.useProgram(En.program)&&(ea=!0,bn=!0,ui=!0),st.id!==ct&&(ct=st.id,bn=!0),ea||at!==C){Lt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),He.setValue(P,"projectionMatrix",C.projectionMatrix),He.setValue(P,"viewMatrix",C.matrixWorldInverse);const Rn=He.map.cameraPosition;Rn!==void 0&&Rn.setValue(P,fe.setFromMatrixPosition(C.matrixWorld)),ie.logarithmicDepthBuffer&&He.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&He.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),at!==C&&(at=C,bn=!0,ui=!0)}if(ae.needsLights&&(ze.state.directionalShadowMap.length>0&&He.setValue(P,"directionalShadowMap",ze.state.directionalShadowMap,X),ze.state.spotShadowMap.length>0&&He.setValue(P,"spotShadowMap",ze.state.spotShadowMap,X),ze.state.pointShadowMap.length>0&&He.setValue(P,"pointShadowMap",ze.state.pointShadowMap,X)),J.isSkinnedMesh){He.setOptional(P,J,"bindMatrix"),He.setOptional(P,J,"bindMatrixInverse");const An=J.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),He.setValue(P,"boneTexture",An.boneTexture,X))}J.isBatchedMesh&&(He.setOptional(P,J,"batchingTexture"),He.setValue(P,"batchingTexture",J._matricesTexture,X),He.setOptional(P,J,"batchingIdTexture"),He.setValue(P,"batchingIdTexture",J._indirectTexture,X),He.setOptional(P,J,"batchingColorTexture"),J._colorsTexture!==null&&He.setValue(P,"batchingColorTexture",J._colorsTexture,X));const mn=lt.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&_e.update(J,lt,En),(bn||ae.receiveShadow!==J.receiveShadow)&&(ae.receiveShadow=J.receiveShadow,He.setValue(P,"receiveShadow",J.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Tn.envMap.value=Qt,Tn.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Z.environment!==null&&(Tn.envMapIntensity.value=Z.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=DR()),bn&&(He.setValue(P,"toneMappingExposure",T.toneMappingExposure),ae.needsLights&&io(Tn,ui),It&&st.fog===!0&&se.refreshFogUniforms(Tn,It),se.refreshMaterialUniforms(Tn,st,ot,$,H.state.transmissionRenderTarget[C.id]),iu.upload(P,ml(ae),Tn,X)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(iu.upload(P,ml(ae),Tn,X),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&He.setValue(P,"center",J.center),He.setValue(P,"modelViewMatrix",J.modelViewMatrix),He.setValue(P,"normalMatrix",J.normalMatrix),He.setValue(P,"modelMatrix",J.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const An=st.uniformsGroups;for(let Rn=0,js=An.length;Rn<js;Rn++){const Ti=An[Rn];Tt.update(Ti,En),Tt.bind(Ti,En)}}return En}function io(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function La(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(C,Z,lt){const st=E.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=Z,E.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const lt=E.get(C);lt.__webglFramebuffer=Z,lt.__useDefaultFramebuffer=Z===void 0};const Na=P.createFramebuffer();this.setRenderTarget=function(C,Z=0,lt=0){tt=C,I=Z,j=lt;let st=null,J=!1,It=!1;if(C){const Xt=E.get(C);if(Xt.__useDefaultFramebuffer!==void 0){Lt.bindFramebuffer(P.FRAMEBUFFER,Xt.__webglFramebuffer),z.copy(C.viewport),G.copy(C.scissor),K=C.scissorTest,Lt.viewport(z),Lt.scissor(G),Lt.setScissorTest(K),ct=-1;return}else if(Xt.__webglFramebuffer===void 0)X.setupRenderTarget(C);else if(Xt.__hasExternalTextures)X.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const oe=C.depthTexture;if(Xt.__boundDepthTexture!==oe){if(oe!==null&&E.has(oe)&&(C.width!==oe.image.width||C.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(C)}}const Qt=C.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(It=!0);const $t=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[Z])?st=$t[Z][lt]:st=$t[Z],J=!0):C.samples>0&&X.useMultisampledRTT(C)===!1?st=E.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?st=$t[lt]:st=$t,z.copy(C.viewport),G.copy(C.scissor),K=C.scissorTest}else z.copy(nt).multiplyScalar(ot).floor(),G.copy(dt).multiplyScalar(ot).floor(),K=Dt;if(lt!==0&&(st=Na),Lt.bindFramebuffer(P.FRAMEBUFFER,st)&&Lt.drawBuffers(C,st),Lt.viewport(z),Lt.scissor(G),Lt.setScissorTest(K),J){const Xt=E.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Xt.__webglTexture,lt)}else if(It){const Xt=Z;for(let Qt=0;Qt<C.textures.length;Qt++){const $t=E.get(C.textures[Qt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Qt,$t.__webglTexture,lt,Xt)}}else if(C!==null&&lt!==0){const Xt=E.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Xt.__webglTexture,lt)}ct=-1},this.readRenderTargetPixels=function(C,Z,lt,st,J,It,Kt,Xt=0){if(!(C&&C.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Kt!==void 0&&(Qt=Qt[Kt]),Qt){Lt.bindFramebuffer(P.FRAMEBUFFER,Qt);try{const $t=C.textures[Xt],oe=$t.format,te=$t.type;if(!ie.textureFormatReadable(oe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(te)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-st&&lt>=0&&lt<=C.height-J&&(C.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Xt),P.readPixels(Z,lt,st,J,Ct.convert(oe),Ct.convert(te),It))}finally{const $t=tt!==null?E.get(tt).__webglFramebuffer:null;Lt.bindFramebuffer(P.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(C,Z,lt,st,J,It,Kt,Xt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Kt!==void 0&&(Qt=Qt[Kt]),Qt)if(Z>=0&&Z<=C.width-st&&lt>=0&&lt<=C.height-J){Lt.bindFramebuffer(P.FRAMEBUFFER,Qt);const $t=C.textures[Xt],oe=$t.format,te=$t.type;if(!ie.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,le),P.bufferData(P.PIXEL_PACK_BUFFER,It.byteLength,P.STREAM_READ),C.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Xt),P.readPixels(Z,lt,st,J,Ct.convert(oe),Ct.convert(te),0);const Fe=tt!==null?E.get(tt).__webglFramebuffer:null;Lt.bindFramebuffer(P.FRAMEBUFFER,Fe);const Je=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await pM(P,Je,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,le),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,It),P.deleteBuffer(le),P.deleteSync(Je),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,lt=0){const st=Math.pow(2,-lt),J=Math.floor(C.image.width*st),It=Math.floor(C.image.height*st),Kt=Z!==null?Z.x:0,Xt=Z!==null?Z.y:0;X.setTexture2D(C,0),P.copyTexSubImage2D(P.TEXTURE_2D,lt,0,0,Kt,Xt,J,It),Lt.unbindTexture()};const ms=P.createFramebuffer(),Ua=P.createFramebuffer();this.copyTextureToTexture=function(C,Z,lt=null,st=null,J=0,It=null){It===null&&(J!==0?(ul("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=J,J=0):It=0);let Kt,Xt,Qt,$t,oe,te,le,Fe,Je;const Ze=C.isCompressedTexture?C.mipmaps[It]:C.image;if(lt!==null)Kt=lt.max.x-lt.min.x,Xt=lt.max.y-lt.min.y,Qt=lt.isBox3?lt.max.z-lt.min.z:1,$t=lt.min.x,oe=lt.min.y,te=lt.isBox3?lt.min.z:0;else{const mn=Math.pow(2,-J);Kt=Math.floor(Ze.width*mn),Xt=Math.floor(Ze.height*mn),C.isDataArrayTexture?Qt=Ze.depth:C.isData3DTexture?Qt=Math.floor(Ze.depth*mn):Qt=1,$t=0,oe=0,te=0}st!==null?(le=st.x,Fe=st.y,Je=st.z):(le=0,Fe=0,Je=0);const Be=Ct.convert(Z.format),ae=Ct.convert(Z.type);let ze;Z.isData3DTexture?(X.setTexture3D(Z,0),ze=P.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(X.setTexture2DArray(Z,0),ze=P.TEXTURE_2D_ARRAY):(X.setTexture2D(Z,0),ze=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Z.unpackAlignment);const de=P.getParameter(P.UNPACK_ROW_LENGTH),En=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ea=P.getParameter(P.UNPACK_SKIP_PIXELS),bn=P.getParameter(P.UNPACK_SKIP_ROWS),ui=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ze.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ze.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$t),P.pixelStorei(P.UNPACK_SKIP_ROWS,oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,te);const He=C.isDataArrayTexture||C.isData3DTexture,Tn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const mn=E.get(C),An=E.get(Z),Rn=E.get(mn.__renderTarget),js=E.get(An.__renderTarget);Lt.bindFramebuffer(P.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let Ti=0;Ti<Qt;Ti++)He&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,E.get(C).__webglTexture,J,te+Ti),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,E.get(Z).__webglTexture,It,Je+Ti)),P.blitFramebuffer($t,oe,Kt,Xt,le,Fe,Kt,Xt,P.DEPTH_BUFFER_BIT,P.NEAREST);Lt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||E.has(C)){const mn=E.get(C),An=E.get(Z);Lt.bindFramebuffer(P.READ_FRAMEBUFFER,ms),Lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ua);for(let Rn=0;Rn<Qt;Rn++)He?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mn.__webglTexture,J,te+Rn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mn.__webglTexture,J),Tn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,An.__webglTexture,It,Je+Rn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,An.__webglTexture,It),J!==0?P.blitFramebuffer($t,oe,Kt,Xt,le,Fe,Kt,Xt,P.COLOR_BUFFER_BIT,P.NEAREST):Tn?P.copyTexSubImage3D(ze,It,le,Fe,Je+Rn,$t,oe,Kt,Xt):P.copyTexSubImage2D(ze,It,le,Fe,$t,oe,Kt,Xt);Lt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Tn?C.isDataTexture||C.isData3DTexture?P.texSubImage3D(ze,It,le,Fe,Je,Kt,Xt,Qt,Be,ae,Ze.data):Z.isCompressedArrayTexture?P.compressedTexSubImage3D(ze,It,le,Fe,Je,Kt,Xt,Qt,Be,Ze.data):P.texSubImage3D(ze,It,le,Fe,Je,Kt,Xt,Qt,Be,ae,Ze):C.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,It,le,Fe,Kt,Xt,Be,ae,Ze.data):C.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,It,le,Fe,Ze.width,Ze.height,Be,Ze.data):P.texSubImage2D(P.TEXTURE_2D,It,le,Fe,Kt,Xt,Be,ae,Ze);P.pixelStorei(P.UNPACK_ROW_LENGTH,de),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,En),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ea),P.pixelStorei(P.UNPACK_SKIP_ROWS,bn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ui),It===0&&Z.generateMipmaps&&P.generateMipmap(ze),Lt.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&X.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?X.setTextureCube(C,0):C.isData3DTexture?X.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?X.setTexture2DArray(C,0):X.setTexture2D(C,0),Lt.unbindTexture()},this.resetState=function(){I=0,j=0,tt=null,Lt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ne._getUnpackColorSpace()}}const xv={type:"change"},yp={type:"start"},dx={type:"end"},Kc=new pp,Sv=new cs,NR=Math.cos(70*gM.DEG2RAD),_n=new Y,Qn=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sd=1e-6;class UR extends PE{constructor(t,n=null){super(t,n),this.state=Ye.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new ks,this._lastTargetPosition=new Y,this._quat=new ks().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new j_,this._sphericalDelta=new j_,this._scale=1,this._panOffset=new Y,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new Y,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PR.bind(this),this._onPointerDown=OR.bind(this),this._onPointerUp=FR.bind(this),this._onContextMenu=kR.bind(this),this._onMouseWheel=BR.bind(this),this._onKeyDown=HR.bind(this),this._onTouchStart=GR.bind(this),this._onTouchMove=VR.bind(this),this._onMouseDown=zR.bind(this),this._onMouseMove=IR.bind(this),this._interceptControlDown=XR.bind(this),this._interceptControlUp=WR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xv),this.update(),this.state=Ye.NONE}update(t=null){const n=this.object.position;_n.copy(n).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Qn:s>Math.PI&&(s-=Qn),l<-Math.PI?l+=Qn:l>Math.PI&&(l-=Qn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),n.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=_n.length();u=this._clampDistance(h*this._scale);const m=h-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new Y(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Y(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Kc.origin.copy(this.object.position),Kc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kc.direction))<NR?this.object.lookAt(this.target):(Sv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kc.intersectPlane(Sv,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sd||this._lastTargetPosition.distanceToSquared(this.target)>sd?(this.dispatchEvent(xv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qn/60*this.autoRotateSpeed*t:Qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){_n.setFromMatrixColumn(n,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,n){this.screenSpacePanning===!0?_n.setFromMatrixColumn(n,1):(_n.setFromMatrixColumn(n,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,n){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*n*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=n-s.top,u=s.width,h=s.height;this._mouse.x=l/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Pt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function OR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function PR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function FR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dx),this.state=Ye.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function zR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ye.DOLLY;break;case Vr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}break;case Vr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(yp)}function IR(r){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function BR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(r.preventDefault(),this.dispatchEvent(yp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(dx))}function HR(r){this.enabled!==!1&&this._handleKeyDown(r)}function GR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ye.TOUCH_ROTATE;break;case Hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case Hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ye.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(yp)}function VR(r){switch(this._trackPointer(r),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ye.NONE}}function kR(r){this.enabled!==!1&&r.preventDefault()}function XR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function WR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const qR=({inputs:r,results:t})=>{const n=Si.useRef(null),s=Si.useRef(null),l=Si.useRef(null),c=Si.useRef(null),u=Si.useRef(null),h=Si.useRef(null);return Si.useEffect(()=>{if(!n.current)return;const m=new HM;m.background=new Ce(2763306),m.fog=new mp(2763306,2e3,8e3),s.current=m;const p=new Mi(45,window.innerWidth/window.innerHeight,1,1e4);p.position.set(2e3,1500,2e3),u.current=p;const _=new LR({antialias:!0});_.setSize(window.innerWidth,window.innerHeight),_.shadowMap.enabled=!0,_.shadowMap.type=yv,n.current.appendChild(_.domElement),c.current=_;const g=new UR(p,_.domElement);g.enableDamping=!0,g.dampingFactor=.05,h.current=g;const v=new NE(16777215,.7);m.add(v);const y=new Y_(16777215,1.2);y.position.set(1e3,3e3,1e3),y.castShadow=!0,m.add(y);const b=new Y_(16777215,.5);b.position.set(-1e3,1e3,-1e3),m.add(b);const A=new OE(5e3,50,4473924,3355443);m.add(A);const M=new il;m.add(M),l.current=M;let x;const F=()=>{x=requestAnimationFrame(F),g.update(),_.render(m,p)};F();const D=()=>{u.current&&c.current&&(u.current.aspect=window.innerWidth/window.innerHeight,u.current.updateProjectionMatrix(),c.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",D),()=>{cancelAnimationFrame(x),window.removeEventListener("resize",D),c.current&&n.current&&n.current.removeChild(c.current.domElement),g.dispose(),_.dispose()}},[]),Si.useEffect(()=>{const m=l.current;if(!m)return;for(;m.children.length>0;){const T=m.children[0];m.remove(T),T.geometry&&T.geometry.dispose()}const p=T=>T||0,_=p(r.stepCount),g=p(r.width),v=p(r.rise),y=p(r.going),b=p(r.thickness),A=p(r.cheekHeight),M=p(r.cheekThickness),{cheekVisible:x,cheekSide:F}=r;if(_<=0||g<=0)return;const D=new nx;D.moveTo(0,0);for(let T=0;T<_;T++){const w=T*y,I=T*v;D.lineTo(w,I+v),D.lineTo(w+y,I+v)}for(let T=_-1;T>=0;T--){const w=T*y,I=T*v;D.lineTo(w+y,I+v-b),D.lineTo(w+b,I+v-b),D.lineTo(w+b,I)}D.lineTo(0,0);const L=new xp(D,{steps:1,depth:g,bevelEnabled:!1});L.translate(0,0,-g/2);const H=t.overallStatus==="SAFE"?16777215:16752800,B=new Pi(L,new X_({color:H,metalness:.3,roughness:.2,side:ki}));if(B.castShadow=!0,B.receiveShadow=!0,m.add(B),x){const T=_*v,w=_*y,I=Math.sqrt(T**2+w**2)+y/2,j=Math.atan2(T,w),tt=new to(I,A,M),ct=new X_({color:15658734,metalness:.3,roughness:.2}),at=z=>{const G=new Pi(tt,ct);return G.position.set(w/2,T/2+v/2,z),G.rotation.z=j,G.castShadow=!0,G};(F==="one"||F==="two")&&m.add(at(-g/2-M/2)),F==="two"&&m.add(at(g/2+M/2))}const q=new Jr().setFromObject(m).getCenter(new Y);m.position.sub(q)},[r,t.overallStatus]),vt.jsx("div",{ref:n,className:"absolute inset-0 w-full h-full z-0",id:"canvas-container"})};function YR(){const[r,t]=Si.useState({steelGrade:"S275",liveLoadType:"domestic",stepCount:14,width:1e3,rise:180,going:250,thickness:6,cheekVisible:!0,cheekSide:"two",cheekHeight:250,cheekThickness:10,calculationMethod:"simplified"}),[n,s]=Si.useState({inputOpen:!0,resultsOpen:!0}),l=Si.useMemo(()=>Ly(r),[r]);return vt.jsxs("div",{className:"relative w-screen h-screen bg-[#1a1a1a] overflow-hidden",children:[vt.jsx(qR,{inputs:r,results:l}),vt.jsxs("div",{className:"absolute inset-0 z-10 p-4 flex flex-col md:flex-row justify-between items-start pointer-events-none gap-4",children:[vt.jsx("div",{className:"pointer-events-auto w-full md:w-96",children:vt.jsx(Ny,{inputs:r,setInputs:t,isOpen:n.inputOpen,toggleOpen:()=>s(c=>({...c,inputOpen:!c.inputOpen}))})}),vt.jsx("div",{className:"pointer-events-auto w-full md:w-96",children:vt.jsx(Py,{results:l,isOpen:n.resultsOpen,toggleOpen:()=>s(c=>({...c,resultsOpen:!c.resultsOpen})),steelGrade:r.steelGrade})})]})]})}Ry.createRoot(document.getElementById("root")).render(vt.jsx(Si.StrictMode,{children:vt.jsx(YR,{})}));
