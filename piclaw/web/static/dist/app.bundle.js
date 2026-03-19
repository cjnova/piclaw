var a9=Object.defineProperty;var t9=(_)=>_;function e9(_,$){this[_]=t9.bind(null,$)}var A3=(_,$)=>{for(var j in $)a9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:e9.bind($,j)})};var f1={};A3(f1,{stopSpeaking:()=>D9,stopRecognition:()=>O9,startRecognition:()=>$Z,speakTerse:()=>ZZ,speak:()=>H9,setVoiceModeEnabled:()=>ej,isVoiceModeEnabled:()=>tj,isSpeaking:()=>NZ,isRecognizing:()=>jZ,isIOS:()=>T1,hasSpeechSynthesis:()=>U9,hasSpeechRecognition:()=>_Z,extractTerseText:()=>F9});function tj(){try{return localStorage.getItem("piclaw-voice-mode")==="1"}catch{return!1}}function ej(_){try{localStorage.setItem("piclaw-voice-mode",_?"1":"0")}catch{}}function _Z(){return typeof window<"u"&&Boolean(window.SpeechRecognition||window.webkitSpeechRecognition)}function U9(){return typeof window<"u"&&"speechSynthesis"in window}function T1(){if(typeof navigator>"u")return!1;return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function $Z(_){if(s$)O9();let $=window.SpeechRecognition||window.webkitSpeechRecognition;if(!$){if(T1())_.onError("Speech recognition unavailable on this device. Use the keyboard \uD83C\uDFA4 dictation button instead.");else _.onError("Speech recognition is not supported in this browser.");return!1}try{let j=new $;j.continuous=!0,j.interimResults=!0,j.lang=navigator.language||"en-US";let Z="";return j.onresult=(N)=>{let K="";for(let z=N.resultIndex;z<N.results.length;z++){let X=N.results[z];if(X.isFinal)Z+=X[0].transcript,_.onFinal(Z);else K+=X[0].transcript}if(K)_.onInterim(Z+K)},j.onerror=(N)=>{let K=N.error||"unknown";if(K==="no-speech")return;if(K==="not-allowed"||K==="service-not-allowed")_.onError("Microphone access denied. Check browser permissions.");else if(T1()&&(K==="network"||K==="aborted"))_.onError("Speech recognition failed on iOS. Try the keyboard \uD83C\uDFA4 dictation button instead.");else _.onError(`Speech recognition error: ${K}`)},j.onend=()=>{if(s$===j)s$=null;_.onEnd()},j.start(),s$=j,!0}catch(j){let Z=j instanceof Error?j.message:String(j);if(T1())_.onError("Speech recognition failed on iOS. Use the keyboard \uD83C\uDFA4 dictation button instead.");else _.onError(`Failed to start speech recognition: ${Z}`);return!1}}function O9(){if(s$){try{s$.stop()}catch{}s$=null}}function jZ(){return s$!==null}function F9(_){if(!_||typeof _!=="string")return"";let $=_;if($=$.replace(/```[\s\S]*?```/g,""),$=$.replace(/`[^`]+`/g,""),$=$.replace(/#{1,6}\s+/g,""),$=$.replace(/\*\*([^*]+)\*\*/g,"$1"),$=$.replace(/\*([^*]+)\*/g,"$1"),$=$.replace(/_([^_]+)_/g,"$1"),$=$.replace(/~~([^~]+)~~/g,"$1"),$=$.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1"),$=$.replace(/!\[[^\]]*\]\([^)]+\)/g,""),$=$.replace(/`?[\w./\\-]+\.\w{1,5}`?/g,""),$=$.replace(/\|[^|\n]+\|/g,""),$=$.replace(/[-:]+\|[-:|]+/g,""),$=$.replace(/\n{3,}/g,`

`),$=$.trim(),!$)return"";let j=$.split(`
`).map((X)=>X.trim()).filter(Boolean),Z=[],N=j[0]||"",K=N.search(/[.!?]\s|[.!?]$/);if(K>=0)Z.push(N.slice(0,K+1).trim());else Z.push(N);let z=0;for(let X=1;X<j.length&&z<5;X++){let L=j[X];if(/^[-•*]\s+/.test(L)||/^\d+[.)]\s+/.test(L)){let q=L.replace(/^[-•*]\s+/,"").replace(/^\d+[.)]\s+/,"");if(q.length>5)Z.push(q),z++}}return Z.join(". ").replace(/\.\./g,".").trim()}function H9(_,$){if(!U9()||!_)return!1;D9();let j=new SpeechSynthesisUtterance(_);return j.rate=1.1,j.pitch=1,j.volume=1,j.onend=()=>{if(P2===j)P2=null;$?.()},j.onerror=()=>{if(P2===j)P2=null;$?.()},P2=j,window.speechSynthesis.speak(j),!0}function ZZ(_,$){let j=F9(_);if(!j)return!1;return H9(j,$)}function D9(){if(typeof window<"u"&&"speechSynthesis"in window)window.speechSynthesis.cancel();P2=null}function NZ(){return typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.speaking}var s$=null,P2=null;var X1,a_,g3,_5,d$,P3,p3,c3,h3,a1,n1,s1,$5,z1={},W1=[],j5=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q1=Array.isArray;function x$(_,$){for(var j in $)_[j]=$[j];return _}function t1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function i3(_,$,j){var Z,N,K,z={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?X1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return N1(_,z,Z,N,null)}function N1(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++g3:N,__i:-1,__u:0};return N==null&&a_.vnode!=null&&a_.vnode(K),K}function V1(_){return _.children}function K1(_,$){this.props=_,this.context=$}function D2(_,$){if($==null)return _.__?D2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?D2(_):null}function Z5(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=x$({},$);K.__v=$.__v+1,a_.vnode&&a_.vnode(K),e1(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?D2($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,s3(Z,K,N),$.__e=$.__=null,K.__e!=j&&l3(K)}}function l3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),l3(_)}function I3(_){(!_.__d&&(_.__d=!0)&&d$.push(_)&&!G1.__r++||P3!=a_.debounceRendering)&&((P3=a_.debounceRendering)||p3)(G1)}function G1(){try{for(var _,$=1;d$.length;)d$.length>$&&d$.sort(c3),_=d$.shift(),$=d$.length,Z5(_)}finally{d$.length=G1.__r=0}}function d3(_,$,j,Z,N,K,z,X,L,q,B){var V,J,k,f,u,v,A,M=Z&&Z.__k||W1,p=$.length;for(L=N5(j,$,M,L,p),V=0;V<p;V++)(k=j.__k[V])!=null&&(J=k.__i!=-1&&M[k.__i]||z1,k.__i=V,v=e1(_,k,J,N,K,z,X,L,q,B),f=k.__e,k.ref&&J.ref!=k.ref&&(J.ref&&_4(J.ref,null,k),B.push(k.ref,k.__c||f,k)),u==null&&f!=null&&(u=f),(A=!!(4&k.__u))||J.__k===k.__k?L=n3(k,L,_,A):typeof k.type=="function"&&v!==void 0?L=v:f&&(L=f.nextSibling),k.__u&=-7);return j.__e=u,L}function N5(_,$,j,Z,N){var K,z,X,L,q,B=j.length,V=B,J=0;for(_.__k=Array(N),K=0;K<N;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=N1(null,z,null,null,null):q1(z)?z=_.__k[K]=N1(V1,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=N1(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,L=K+J,z.__=_,z.__b=_.__b+1,X=null,(q=z.__i=K5(z,j,L,V))!=-1&&(V--,(X=j[q])&&(X.__u|=2)),X==null||X.__v==null?(q==-1&&(N>B?J--:N<B&&J++),typeof z.type!="function"&&(z.__u|=4)):q!=L&&(q==L-1?J--:q==L+1?J++:(q>L?J--:J++,z.__u|=4))):_.__k[K]=null;if(V)for(K=0;K<B;K++)(X=j[K])!=null&&(2&X.__u)==0&&(X.__e==Z&&(Z=D2(X)),r3(X,X));return Z}function n3(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=n3(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=D2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function K5(_,$,j,Z){var N,K,z,X=_.key,L=_.type,q=$[j],B=q!=null&&(2&q.__u)==0;if(q===null&&X==null||B&&X==q.key&&L==q.type)return j;if(Z>(B?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((q=$[z=N>=0?N--:K++])!=null&&(2&q.__u)==0&&X==q.key&&L==q.type)return z}return-1}function b3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||j5.test($)?j:j+"px"}function Z1(_,$,j,Z,N){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||b3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||b3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(h3,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=a1,_.addEventListener($,K?s1:n1,K)):_.removeEventListener($,K?s1:n1,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(X){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function M3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=a1++;else if($.t<j.u)return;return j(a_.event?a_.event($):$)}}}function e1(_,$,j,Z,N,K,z,X,L,q){var B,V,J,k,f,u,v,A,M,p,y,g,n,a,l,j_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),K=[X=$.__e=j.__e]),(B=a_.__b)&&B($);_:if(typeof j_=="function")try{if(A=$.props,M=j_.prototype&&j_.prototype.render,p=(B=j_.contextType)&&Z[B.__c],y=B?p?p.props.value:B.__:Z,j.__c?v=(V=$.__c=j.__c).__=V.__E:(M?$.__c=V=new j_(A,y):($.__c=V=new K1(A,y),V.constructor=j_,V.render=z5),p&&p.sub(V),V.state||(V.state={}),V.__n=Z,J=V.__d=!0,V.__h=[],V._sb=[]),M&&V.__s==null&&(V.__s=V.state),M&&j_.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=x$({},V.__s)),x$(V.__s,j_.getDerivedStateFromProps(A,V.__s))),k=V.props,f=V.state,V.__v=$,J)M&&j_.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),M&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(M&&j_.getDerivedStateFromProps==null&&A!==k&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(A,y),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(A,V.__s,y)===!1){$.__v!=j.__v&&(V.props=A,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),W1.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&z.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(A,V.__s,y),M&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(k,f,u)})}if(V.context=y,V.props=A,V.__P=_,V.__e=!1,g=a_.__r,n=0,M)V.state=V.__s,V.__d=!1,g&&g($),B=V.render(V.props,V.state,V.context),W1.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,g&&g($),B=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++n<25);V.state=V.__s,V.getChildContext!=null&&(Z=x$(x$({},Z),V.getChildContext())),M&&!J&&V.getSnapshotBeforeUpdate!=null&&(u=V.getSnapshotBeforeUpdate(k,f)),a=B!=null&&B.type===V1&&B.key==null?o3(B.props.children):B,X=d3(_,q1(a)?a:[a],$,j,Z,N,K,z,X,L,q),V.base=$.__e,$.__u&=-161,V.__h.length&&z.push(V),v&&(V.__E=V.__=null)}catch(i){if($.__v=null,L||K!=null)if(i.then){for($.__u|=L?160:128;X&&X.nodeType==8&&X.nextSibling;)X=X.nextSibling;K[K.indexOf(X)]=null,$.__e=X}else{for(l=K.length;l--;)t1(K[l]);o1($)}else $.__e=j.__e,$.__k=j.__k,i.then||o1($);a_.__e(i,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):X=$.__e=Y5(j.__e,$,j,Z,N,K,z,L,q);return(B=a_.diffed)&&B($),128&$.__u?void 0:X}function o1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(o1))}function s3(_,$,j){for(var Z=0;Z<j.length;Z++)_4(j[Z],j[++Z],j[++Z]);a_.__c&&a_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){a_.__e(K,N.__v)}})}function o3(_){return typeof _!="object"||_==null||_.__b>0?_:q1(_)?_.map(o3):x$({},_)}function Y5(_,$,j,Z,N,K,z,X,L){var q,B,V,J,k,f,u,v=j.props||z1,A=$.props,M=$.type;if(M=="svg"?N="http://www.w3.org/2000/svg":M=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(q=0;q<K.length;q++)if((k=K[q])&&"setAttribute"in k==!!M&&(M?k.localName==M:k.nodeType==3)){_=k,K[q]=null;break}}if(_==null){if(M==null)return document.createTextNode(A);_=document.createElementNS(N,M,A.is&&A),X&&(a_.__m&&a_.__m($,K),X=!1),K=null}if(M==null)v===A||X&&_.data==A||(_.data=A);else{if(K=K&&X1.call(_.childNodes),!X&&K!=null)for(v={},q=0;q<_.attributes.length;q++)v[(k=_.attributes[q]).name]=k.value;for(q in v)k=v[q],q=="dangerouslySetInnerHTML"?V=k:q=="children"||(q in A)||q=="value"&&("defaultValue"in A)||q=="checked"&&("defaultChecked"in A)||Z1(_,q,null,k,N);for(q in A)k=A[q],q=="children"?J=k:q=="dangerouslySetInnerHTML"?B=k:q=="value"?f=k:q=="checked"?u=k:X&&typeof k!="function"||v[q]===k||Z1(_,q,k,v[q],N);if(B)X||V&&(B.__html==V.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(V&&(_.innerHTML=""),d3($.type=="template"?_.content:_,q1(J)?J:[J],$,j,Z,M=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,z,K?K[0]:j.__k&&D2(j,0),X,L),K!=null)for(q=K.length;q--;)t1(K[q]);X||(q="value",M=="progress"&&f==null?_.removeAttribute("value"):f!=null&&(f!==_[q]||M=="progress"&&!f||M=="option"&&f!=v[q])&&Z1(_,q,f,v[q],N),q="checked",u!=null&&u!=_[q]&&Z1(_,q,u,v[q],N))}return _}function _4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){a_.__e(N,j)}}function r3(_,$,j){var Z,N;if(a_.unmount&&a_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||_4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){a_.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&r3(Z[N],$,j||typeof _.type!="function");j||t1(_.__e),_.__c=_.__=_.__e=void 0}function z5(_,$,j){return this.constructor(_,j)}function a3(_,$,j){var Z,N,K,z;$==document&&($=document.documentElement),a_.__&&a_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],e1($,_=(!Z&&j||$).__k=i3(V1,null,[_]),N||z1,z1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?X1.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,z),s3(K,_,z)}X1=W1.slice,a_={__e:function(_,$,j,Z){for(var N,K,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(X){_=X}throw _}},g3=0,_5=function(_){return _!=null&&_.constructor===void 0},K1.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=x$({},this.state),typeof _=="function"&&(_=_(x$({},j),this.props)),_&&x$(j,_),_!=null&&this.__v&&($&&this._sb.push($),I3(this))},K1.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),I3(this))},K1.prototype.render=V1,d$=[],p3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,c3=function(_,$){return _.__v.__b-$.__v.__b},G1.__r=0,h3=/(PointerCapture)$|Capture$/i,a1=0,n1=M3(!1),s1=M3(!0),$5=0;var R2,L0,d1,x3,v2=0,t3=[],V0=a_,C3=V0.__b,T3=V0.__r,f3=V0.diffed,S3=V0.__c,R3=V0.unmount,v3=V0.__;function $4(_,$){V0.__h&&V0.__h(L0,_,v2||$),v2=0;var j=L0.__H||(L0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return v2=1,W5(_8,_)}function W5(_,$,j){var Z=$4(R2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):_8(void 0,$),function(X){var L=Z.__N?Z.__N[0]:Z.__[0],q=Z.t(L,X);L!==q&&(Z.__N=[q,Z.__[1]],Z.__c.setState({}))}],Z.__c=L0,!L0.__f)){var N=function(X,L,q){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(J){return J.__c});if(B.every(function(J){return!J.__N}))return!K||K.call(this,X,L,q);var V=Z.__c.props!==X;return B.some(function(J){if(J.__N){var k=J.__[0];J.__=J.__N,J.__N=void 0,k!==J.__[0]&&(V=!0)}}),K&&K.call(this,X,L,q)||V};L0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=L0;L0.componentWillUpdate=function(X,L,q){if(this.__e){var B=K;K=void 0,N(X,L,q),K=B}z&&z.call(this,X,L,q)},L0.shouldComponentUpdate=N}return Z.__N||Z.__}function R(_,$){var j=$4(R2++,3);!V0.__s&&e3(j.__H,$)&&(j.__=_,j.u=$,L0.__H.__h.push(j))}function E(_){return v2=5,p_(function(){return{current:_}},[])}function p_(_,$){var j=$4(R2++,7);return e3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return v2=8,p_(function(){return _},$)}function G5(){for(var _;_=t3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(Y1),$.__h.some(r1),$.__h=[]}catch(j){$.__h=[],V0.__e(j,_.__v)}}}V0.__b=function(_){L0=null,C3&&C3(_)},V0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),v3&&v3(_,$)},V0.__r=function(_){T3&&T3(_),R2=0;var $=(L0=_.__c).__H;$&&(d1===L0?($.__h=[],L0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(Y1),$.__h.some(r1),$.__h=[],R2=0)),d1=L0},V0.diffed=function(_){f3&&f3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(t3.push($)!==1&&x3===V0.requestAnimationFrame||((x3=V0.requestAnimationFrame)||X5)(G5)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),d1=L0=null},V0.__c=function(_,$){$.some(function(j){try{j.__h.some(Y1),j.__h=j.__h.filter(function(Z){return!Z.__||r1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],V0.__e(Z,j.__v)}}),S3&&S3(_,$)},V0.unmount=function(_){R3&&R3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{Y1(Z)}catch(N){$=N}}),j.__H=void 0,$&&V0.__e($,j.__v))};var u3=typeof requestAnimationFrame=="function";function X5(_){var $,j=function(){clearTimeout(Z),u3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);u3&&($=requestAnimationFrame(j))}function Y1(_){var $=L0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),L0=$}function r1(_){var $=L0;_.__c=_.__(),L0=$}function e3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function _8(_,$){return typeof $=="function"?$(_):$}var $8=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],X=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?Z[0]=X:z===4?Z[1]=Object.assign(Z[1]||{},X):z===5?(Z[1]=Z[1]||{})[$[++K]]=X:z===6?Z[1][$[++K]]+=X+"":z?(N=_.apply(X,$8(_,X,j,["",null])),Z.push(N),X[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(X)}return Z},m3=new Map;function q5(_){var $=m3.get(this);return $||($=new Map,m3.set(this,$)),($=$8(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,z="",X="",L=[0],q=function(J){K===1&&(J||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,J,z):K===3&&(J||z)?(L.push(3,J,z),K=2):K===2&&z==="..."&&J?L.push(4,J,0):K===2&&z&&!J?L.push(5,0,!0,z):K>=5&&((z||!J&&K===5)&&(L.push(K,0,z,N),K=6),J&&(L.push(K,J,0,N),K=6)),z=""},B=0;B<j.length;B++){B&&(K===1&&q(),q(B));for(var V=0;V<j[B].length;V++)Z=j[B][V],K===1?Z==="<"?(q(),L=[L],K=3):z+=Z:K===4?z==="--"&&Z===">"?(K=1,z=""):z=Z+z[0]:X?Z===X?X="":z+=Z:Z==='"'||Z==="'"?X=Z:Z===">"?(q(),K=1):K&&(Z==="="?(K=5,N=z,z=""):Z==="/"&&(K<5||j[B][V+1]===">")?(q(),K===3&&(L=L[0]),K=L,(L=L[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(q(),K=2):z+=Z),K===3&&z==="!--"&&(K=4,L=L[0])}return q(),L}(_)),$),arguments,[])).length>1?$:$[0]}var O=q5.bind(i3);var a0={};A3(a0,{uploadWorkspaceFile:()=>Q1,uploadMedia:()=>G4,updateWorkspaceFile:()=>P5,submitAdaptiveCardAction:()=>X4,streamSidePrompt:()=>k5,steerAgentQueueItem:()=>E5,setWorkspaceVisibility:()=>c2,setAgentThoughtVisibility:()=>L4,sendPeerAgentMessage:()=>H5,sendAgentMessage:()=>J2,searchPosts:()=>Z4,restoreChatBranch:()=>F5,respondToAgentRequest:()=>L1,renameWorkspaceFile:()=>H4,renameChatBranch:()=>U5,removeAgentQueueItem:()=>y5,pruneChatBranch:()=>O5,moveWorkspaceEntry:()=>D4,getWorkspaceTree:()=>p2,getWorkspaceRawUrl:()=>B1,getWorkspaceFile:()=>U4,getWorkspaceDownloadUrl:()=>U1,getWorkspaceBranch:()=>A5,getTimeline:()=>u2,getThumbnailUrl:()=>Q4,getThread:()=>N4,getPostsByHashtag:()=>j4,getMediaUrl:()=>K$,getMediaText:()=>B4,getMediaInfo:()=>y2,getMediaBlob:()=>w5,getChatBranches:()=>B5,getAgents:()=>z4,getAgentThought:()=>V4,getAgentStatus:()=>W4,getAgentQueueState:()=>J5,getAgentModels:()=>g2,getAgentContext:()=>D5,getActiveChatAgents:()=>Y4,forkChatBranch:()=>m2,deleteWorkspaceFile:()=>J4,deletePost:()=>K4,createWorkspaceFile:()=>F4,createReply:()=>Q5,createPost:()=>L5,attachWorkspaceFile:()=>O4,addToWhitelist:()=>q4,SSEClient:()=>O1});async function f_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function j8(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function V5(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:X}=await j.read();if(X)break;N+=Z.decode(z,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let q of L){let B=j8(q);if(B)$(B.event,B.data)}}N+=Z.decode();let K=j8(N);if(K)$(K.event,K.data)}async function u2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return f_(Z)}async function j4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function Z4(_,$=50,j=0,Z=null,N="current",K=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",X=N?`&scope=${encodeURIComponent(N)}`:"",L=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return f_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${X}${L}`)}async function N4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return f_(`/thread/${_}${j}`)}async function L5(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return f_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function Q5(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function K4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return f_(N,{method:"DELETE"})}async function J2(_,$,j=null,Z=[],N=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return f_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function Y4(){return f_("/agent/active-chats")}async function B5(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return f_(`/agent/branches${Z}`)}async function m2(_,$={}){return f_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function U5(_,$={}){return f_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function O5(_){return f_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function F5(_,$={}){return f_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function H5(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return f_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function z4(){return f_("/agent/roster")}async function W4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/status${$}`)}async function D5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/context${$}`)}async function J5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/queue-state${$}`)}async function y5(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function E5(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function g2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/models${$}`)}async function G4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function L1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function X4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function k5(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await V5(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")Z=z;else if(K==="side_prompt_error")N=z}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function q4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function V4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return f_(j)}async function L4(_,$,j){return f_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function K$(_){return`/media/${_}`}function Q4(_){return`/media/${_}/thumbnail`}async function y2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function B4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function w5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function p2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return f_(Z)}async function A5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return f_($)}async function U4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return f_(N)}async function P5(_,$){return f_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function O4(_){return f_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function Q1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",X=await fetch(""+z,{method:"POST",body:Z});if(!X.ok){let L=await X.json().catch(()=>({error:"Upload failed"})),q=Error(L.error||`HTTP ${X.status}`);throw q.status=X.status,q.code=L.code,q}return X.json()}async function F4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function H4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function D4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function J4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return f_($,{method:"DELETE"})}async function c2(_,$=!1){return f_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function B1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function U1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class O1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function t0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function c_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function E2(_,$=!1){let j=t0(_);if(j===null)return $;return j==="true"}function k2(_,$=null){let j=t0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function F1(_){return String(_||"").trim().toLowerCase()}function y4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return F1($[1]||"")}function Z8(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=F1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function N8(_,$,j={}){let Z=y4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return Z8(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return F1(K?.agent_name).startsWith(Z)})}function E4(_){let $=F1(_);return $?`@${$} `:""}function K8(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return Z8(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function Y8({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function L$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:z="file"}){let X=`${_}-file-pill`,L=`${_}-file-name`,q=`${_}-file-remove`,B=z==="message"?O`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:O`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return O`
    <span class=${X} title=${j||$} onClick=${N}>
      ${B}
      <span class=${L}>${$}</span>
      ${Z&&O`
        <button
          class=${q}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Z()}}
          title=${K}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var I5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function b5({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${z8(j)} / ${z8(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=9,z=2*Math.PI*9,X=$/100*z,L=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return O`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="22" height="22" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${L}
                    stroke-width="2.5"
                    stroke-dasharray=${`${X} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </span>
    `}function z8(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function W8({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:X,fileRefs:L=[],onRemoveFileRef:q,onClearFileRefs:B,messageRefs:V=[],onRemoveMessageRef:J,onClearMessageRefs:k,activeModel:f=null,modelUsage:u=null,thinkingLevel:v=null,supportsThinking:A=!1,contextUsage:M=null,notificationsEnabled:p=!1,notificationPermission:y="default",onToggleNotifications:g,onModelChange:n,onModelStateChange:a,activeEditorPath:l=null,onAttachEditorFile:j_,onOpenFilePill:i,followupQueueItems:z_=[],onInjectQueuedFollowup:i_,onRemoveQueuedFollowup:r,onSubmitIntercept:o,onMessageResponse:Z_,onPopOutChat:t,isAgentActive:K_=!1,activeChatAgents:B_=[],currentChatJid:Y_="web:default",connectionStatus:J_="connected",onSetFileRefs:V_,onSetMessageRefs:b_,onSubmitError:S_,onSwitchChat:U_,onRenameSession:M_,onCreateSession:u_,onDeleteSession:j0,onRestoreSession:W_,voiceEnabled:$_=!1,voiceListening:y_=!1,onVoiceToggle:G_,onMicClick:R_}){let[L_,m_]=C(""),[x_,d_]=C(""),[P_,v_]=C([]),[Z0,e_]=C(!1),[O_,I_]=C([]),[N0,B0]=C(0),[d0,n_]=C(!1),[E_,g_]=C([]),[s_,K0]=C(0),[y0,F_]=C(!1),[o_,c0]=C(!1),[k_,Y0]=C(!1),[x,d]=C(!1),[D_,Q_]=C([]),[t_,_$]=C(!1),[z0,x0]=C(0),[C0,W$]=C(null),C_=E(null),o$=E(null),E0=E(null),f$=E(null),h0=E(null),U0=E(null),Q$=E(null),i0=E(null),_0=E(0),t2=200,m0=(Y)=>{let Q=new Set,F=[];for(let b of Y||[]){if(typeof b!=="string")continue;let T=b.trim();if(!T||Q.has(T))continue;Q.add(T),F.push(T)}return F},V2=()=>{let Y=t0("piclaw_compose_history");if(!Y)return[];try{let Q=JSON.parse(Y);if(!Array.isArray(Q))return[];return m0(Q)}catch{return[]}},$0=(Y)=>{c_("piclaw_compose_history",JSON.stringify(Y))},n0=E(V2()),l0=E(-1),G0=E(""),T0=L_.trim()||P_.length>0||L.length>0||V.length>0,$$=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),E$=typeof window<"u"&&typeof Notification<"u",k$=typeof window<"u"?Boolean(window.isSecureContext):!1,r$=E$&&k$&&y!=="denied",Q0=y==="granted"&&p,S$=Q0?"Disable notifications":"Enable notifications",G$=P_.length>0||L.length>0||V.length>0,k0=J_==="disconnected"?"Reconnecting":String(J_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(Y)=>Y.toUpperCase()),w0=J_==="disconnected"?"Reconnecting":`Connection: ${k0}`,B$=(Array.isArray(B_)?B_:[]).filter((Y)=>!Y?.archived_at),A0=K8(B$,{currentChatJid:Y_,limit:4}),Q2=!j&&Y8({footerWidth:z0,visibleAgentCount:A0.length,hasContextIndicator:Boolean(M&&M.percent!=null)}),W0=(()=>{for(let Y of Array.isArray(B_)?B_:[]){let Q=typeof Y?.chat_jid==="string"?Y.chat_jid.trim():"";if(Q&&Q===Y_)return Y}return null})(),g0=Boolean(W0&&W0.chat_jid===(W0.root_chat_jid||W0.chat_jid)),a$=(()=>{let Y=new Set,Q=[];for(let F of Array.isArray(B_)?B_:[]){let b=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(!b||b===Y_||Y.has(b))continue;if(!(typeof F?.agent_name==="string"?F.agent_name.trim():""))continue;Y.add(b),Q.push(F)}return Q})(),w$=a$.length>0,r_=w$&&typeof U_==="function",P0=w$&&typeof W_==="function",U$=!j&&typeof M_==="function",s0=!j&&typeof u_==="function",A$=!j&&typeof j0==="function"&&!g0,t$=!j&&(r_||P0||U$||s0||A$),p0=f||"",f0=A&&v?` (${v})`:"",X0=f0.trim()?`${v}`:"",O$=typeof u?.hint_short==="string"?u.hint_short.trim():"",P$=[X0||null,O$||null].filter(Boolean).join(" • "),B2=[p0?`Current model: ${p0}${f0}`:null,u?.plan?`Plan: ${u.plan}`:null,O$||null,u?.primary?.reset_description||null,u?.secondary?.reset_description||null].filter(Boolean),e$=o_?"Switching model…":B2.join(" • ")||`Current model: ${p0}${f0} (tap to open model picker)`,S0=(Y)=>{if(!Y||typeof Y!=="object")return;let Q=Y.model??Y.current;if(typeof a==="function")a({model:Q??null,thinking_level:Y.thinking_level??null,supports_thinking:Y.supports_thinking,provider_usage:Y.provider_usage??null});if(Q&&typeof n==="function")n(Q)},O0=(Y)=>{let Q=Y||C_.current;if(!Q)return;Q.style.height="auto",Q.style.height=`${Q.scrollHeight}px`,Q.style.overflowY="hidden"},I0=(Y)=>{if(!Y)return{content:Y,fileRefs:[]};let F=Y.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),b=-1;for(let H_=0;H_<F.length;H_+=1)if(F[H_].trim()==="Files:"&&F[H_+1]&&/^\s*-\s+/.test(F[H_+1])){b=H_;break}if(b===-1)return{content:Y,fileRefs:[]};let T=[],c=b+1;for(;c<F.length;c+=1){let H_=F[c];if(/^\s*-\s+/.test(H_))T.push(H_.replace(/^\s*-\s+/,"").trim());else if(!H_.trim())break;else break}if(T.length===0)return{content:Y,fileRefs:[]};let S=F.slice(0,b),e=F.slice(c);return{content:[...S,...e].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:T}},_2=(Y)=>{if(!Y)return{content:Y,messageRefs:[]};let F=Y.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),b=-1;for(let H_=0;H_<F.length;H_+=1)if(F[H_].trim()==="Referenced messages:"&&F[H_+1]&&/^\s*-\s+/.test(F[H_+1])){b=H_;break}if(b===-1)return{content:Y,messageRefs:[]};let T=[],c=b+1;for(;c<F.length;c+=1){let H_=F[c];if(/^\s*-\s+/.test(H_)){let H0=H_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(H0)T.push(H0[1])}else if(!H_.trim())break;else break}if(T.length===0)return{content:Y,messageRefs:[]};let S=F.slice(0,b),e=F.slice(c);return{content:[...S,...e].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:T}},X$=(Y)=>{let Q=I0(Y||""),F=_2(Q.content||"");return{text:F.content||"",fileRefs:Q.fileRefs,messageRefs:F.messageRefs}},I$=(Y)=>{if(!Y.startsWith("/")||Y.includes(`
`)){n_(!1),I_([]);return}let Q=Y.toLowerCase().split(" ")[0];if(Q.length<1){n_(!1),I_([]);return}let F=I5.filter((b)=>b.name.startsWith(Q)||b.name.replace(/-/g,"").startsWith(Q.replace(/-/g,"")));if(F.length>0&&!(F.length===1&&F[0].name===Q))F_(!1),g_([]),I_(F),B0(0),n_(!0);else n_(!1),I_([])},R$=(Y)=>{let Q=L_,F=Q.indexOf(" "),b=F>=0?Q.slice(F):"",T=Y.name+b;m_(T),n_(!1),I_([]),requestAnimationFrame(()=>{let c=C_.current;if(!c)return;let S=T.length;c.selectionStart=S,c.selectionEnd=S,c.focus()})},v$=(Y)=>{if(y4(Y)==null){F_(!1),g_([]);return}let Q=N8(B$,Y,{currentChatJid:Y_});if(Q.length>0&&!(Q.length===1&&E4(Q[0].agent_name).trim().toLowerCase()===String(Y||"").trim().toLowerCase()))n_(!1),I_([]),g_(Q),K0(0),F_(!0);else F_(!1),g_([])},u$=(Y)=>{let Q=E4(Y?.agent_name);if(!Q)return;m_(Q),F_(!1),g_([]),requestAnimationFrame(()=>{let F=C_.current;if(!F)return;let b=Q.length;F.selectionStart=b,F.selectionEnd=b,F.focus()})},F0=(Y)=>{if(Y?.preventDefault?.(),Y?.stopPropagation?.(),j||!r_&&!P0&&!U$&&!s0&&!A$)return;Y0(!1),n_(!1),I_([]),F_(!1),g_([]),d((Q)=>!Q)},F$=(Y)=>{let Q=typeof Y==="string"?Y.trim():"";if(d(!1),!Q||Q===Y_){requestAnimationFrame(()=>C_.current?.focus());return}U_?.(Q)},b$=async(Y)=>{let Q=typeof Y==="string"?Y.trim():"";if(d(!1),!Q||typeof W_!=="function"){requestAnimationFrame(()=>C_.current?.focus());return}try{await W_(Q)}catch(F){console.warn("Failed to restore session:",F),requestAnimationFrame(()=>C_.current?.focus())}},M$=(Y)=>{let Q=typeof Y?.chat_jid==="string"?Y.chat_jid.trim():"";if(Q&&typeof U_==="function"){U_(Q);return}u$(Y)},H$=async()=>{if(typeof M_!=="function")return;d(!1);try{await M_()}catch(Y){console.warn("Failed to rename session:",Y)}requestAnimationFrame(()=>C_.current?.focus())},q$=async()=>{if(typeof u_!=="function")return;d(!1);try{await u_()}catch(Y){console.warn("Failed to create session:",Y)}requestAnimationFrame(()=>C_.current?.focus())},$2=async()=>{if(typeof j0!=="function")return;d(!1);try{await j0(Y_)}catch(Y){console.warn("Failed to delete session:",Y)}requestAnimationFrame(()=>C_.current?.focus())},R0=(Y)=>{if(j)d_(Y);else m_(Y),I$(Y),v$(Y);requestAnimationFrame(()=>O0())},o0=(Y)=>{let Q=j?x_:L_,F=Q&&!Q.endsWith(`
`)?`
`:"",b=`${Q}${F}${Y}`.trimStart();R0(b)},V$=(Y)=>{let Q=Y?.command?.model_label;if(Q)return Q;let F=Y?.command?.message;if(typeof F==="string"){let b=F.match(/•\s+([^\n]+?)\s+\(current\)/);if(b?.[1])return b[1].trim()}return null},m$=async(Y)=>{if(j||o_)return;c0(!0);try{let Q=await J2("default",Y,null,[],null,Y_),F=V$(Q);S0({model:F??f??null,thinking_level:Q?.command?.thinking_level,supports_thinking:Q?.command?.supports_thinking});try{let b=await g2(Y_);if(b)S0(b)}catch{}return _?.(),!0}catch(Q){return console.error("Failed to switch model:",Q),alert("Failed to switch model: "+Q.message),!1}finally{c0(!1)}},g$=async()=>{await m$("/cycle-model")},p$=async(Y)=>{if(!Y||o_)return;if(await m$(`/model ${Y}`))Y0(!1)},D$=(Y)=>{Y.preventDefault(),Y.stopPropagation(),d(!1),Y0((Q)=>!Q)},c$=(Y)=>{if(Y==="queue"||Y==="steer"||Y==="auto")return Y;return K_?"queue":null},J$=async(Y,Q,F={})=>{let{includeMedia:b=!0,includeFileRefs:T=!0,includeMessageRefs:c=!0,clearAfterSubmit:S=!0,recordHistory:e=!0}=F||{},w_=typeof Y==="string"?Y:Y&&typeof Y?.target?.value==="string"?Y.target.value:L_,H_=typeof w_==="string"?w_:"";if(!H_.trim()&&(b?P_.length===0:!0)&&(T?L.length===0:!0)&&(c?V.length===0:!0))return;n_(!1),I_([]),F_(!1),g_([]),d(!1),W$(null);let H0=b?[...P_]:[],h$=T?[...L]:[],i$=c?[...V]:[],l$=H_.trim();if(e&&l$){let K2=n0.current,v0=m0(K2.filter((F2)=>F2!==l$));if(v0.push(l$),v0.length>200)v0.splice(0,v0.length-200);n0.current=v0,$0(v0),l0.current=-1,G0.current=""}let N2=()=>{if(b)v_([...H0]);if(T)V_?.(h$);if(c)b_?.(i$);m_(l$),requestAnimationFrame(()=>O0())};if(S)m_(""),v_([]),B?.(),k?.();(async()=>{try{if(await o?.({content:l$,submitMode:Q,fileRefs:h$,messageRefs:i$,mediaFiles:H0})){_?.();return}let v0=[];for(let r0 of H0){let u0=await G4(r0);v0.push(u0.id)}let F2=h$.length?`Files:
${h$.map((r0)=>`- ${r0}`).join(`
`)}`:"",e2=i$.length?`Referenced messages:
${i$.map((r0)=>`- message:${r0}`).join(`
`)}`:"",q0=v0.length?`Attachments:
${v0.map((r0,u0)=>{let R1=H0[u0]?.name||`attachment-${u0+1}`;return`- attachment:${r0} (${R1})`}).join(`
`)}`:"",S1=[l$,F2,e2,q0].filter(Boolean).join(`

`),y$=await J2("default",S1,null,v0,c$(Q),Y_);if(Z_?.(y$),y$?.command){S0({model:y$.command.model_label??f??null,thinking_level:y$.command.thinking_level,supports_thinking:y$.command.supports_thinking});try{let r0=await g2(Y_);if(r0)S0(r0)}catch{}}_?.()}catch(K2){if(S)N2();let v0=K2?.message||"Failed to send message.";W$(v0),S_?.(v0),console.error("Failed to post:",K2)}})()},U2=(Y)=>{i_?.(Y)},I2=(Y)=>{if(Y.isComposing)return;if(j&&Y.key==="Escape"){Y.preventDefault(),d_(""),X?.();return}if(!j&&x&&Y.key==="Escape"){Y.preventDefault(),d(!1);return}if(y0&&E_.length>0){let Q=C_.current?.value??(j?x_:L_);if(!String(Q||"").match(/^@([a-zA-Z0-9_-]*)$/))F_(!1),g_([]);else{if(Y.key==="ArrowDown"){Y.preventDefault(),K0((F)=>(F+1)%E_.length);return}if(Y.key==="ArrowUp"){Y.preventDefault(),K0((F)=>(F-1+E_.length)%E_.length);return}if(Y.key==="Tab"||Y.key==="Enter"){Y.preventDefault(),u$(E_[s_]);return}if(Y.key==="Escape"){Y.preventDefault(),F_(!1),g_([]);return}}}if(d0&&O_.length>0){let Q=C_.current?.value??(j?x_:L_);if(!String(Q||"").startsWith("/"))n_(!1),I_([]);else{if(Y.key==="ArrowDown"){Y.preventDefault(),B0((F)=>(F+1)%O_.length);return}if(Y.key==="ArrowUp"){Y.preventDefault(),B0((F)=>(F-1+O_.length)%O_.length);return}if(Y.key==="Tab"){Y.preventDefault(),R$(O_[N0]);return}if(Y.key==="Enter"&&!Y.shiftKey){if(!(C_.current?.value??(j?x_:L_)).includes(" ")){Y.preventDefault();let T=O_[N0];n_(!1),I_([]),J$(T.name);return}}if(Y.key==="Escape"){Y.preventDefault(),n_(!1),I_([]);return}}}if(!j&&(Y.key==="ArrowUp"||Y.key==="ArrowDown")&&!Y.metaKey&&!Y.ctrlKey&&!Y.altKey&&!Y.shiftKey){let Q=C_.current;if(!Q)return;let F=Q.value||"",b=Q.selectionStart===0&&Q.selectionEnd===0,T=Q.selectionStart===F.length&&Q.selectionEnd===F.length;if(Y.key==="ArrowUp"&&b||Y.key==="ArrowDown"&&T){let c=n0.current;if(!c.length)return;Y.preventDefault();let S=l0.current;if(Y.key==="ArrowUp"){if(S===-1)G0.current=F,S=c.length-1;else if(S>0)S-=1;l0.current=S,R0(c[S]||"")}else{if(S===-1)return;if(S<c.length-1)S+=1,l0.current=S,R0(c[S]||"");else l0.current=-1,R0(G0.current||""),G0.current=""}requestAnimationFrame(()=>{let e=C_.current;if(!e)return;let w_=e.value.length;e.selectionStart=w_,e.selectionEnd=w_});return}}if(Y.key==="Enter"&&!Y.shiftKey&&(Y.ctrlKey||Y.metaKey)){Y.preventDefault();let Q=C_.current?.value??(j?x_:L_);if(j){if(Q.trim())N?.(Q.trim(),Z)}else J$(Q,"steer");return}if(Y.key==="Enter"&&!Y.shiftKey){Y.preventDefault();let Q=C_.current?.value??(j?x_:L_);if(j){if(Q.trim())N?.(Q.trim(),Z)}else J$(Q)}},j2=(Y)=>{let Q=Array.from(Y||[]).filter((F)=>F instanceof File&&!String(F.name||"").startsWith(".DS_Store"));if(!Q.length)return;v_((F)=>[...F,...Q]),W$(null)},q_=(Y)=>{j2(Y.target.files),Y.target.value=""},O2=(Y)=>{if(j)return;Y.preventDefault(),Y.stopPropagation(),_0.current+=1,e_(!0)},b2=(Y)=>{if(j)return;if(Y.preventDefault(),Y.stopPropagation(),_0.current=Math.max(0,_0.current-1),_0.current===0)e_(!1)},M2=(Y)=>{if(j)return;if(Y.preventDefault(),Y.stopPropagation(),Y.dataTransfer)Y.dataTransfer.dropEffect="copy";e_(!0)},Z2=(Y)=>{if(j)return;Y.preventDefault(),Y.stopPropagation(),_0.current=0,e_(!1),j2(Y.dataTransfer?.files||[])},x2=(Y)=>{if(j)return;let Q=Y.clipboardData?.items;if(!Q||!Q.length)return;let F=[];for(let b of Q){if(b.kind!=="file")continue;let T=b.getAsFile?.();if(T)F.push(T)}if(F.length>0)Y.preventDefault(),j2(F)},C2=(Y)=>{v_((Q)=>Q.filter((F,b)=>b!==Y))},T2=()=>{W$(null),v_([]),B?.(),k?.()},U=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Y)=>{let{latitude:Q,longitude:F,accuracy:b}=Y.coords,T=`${Q.toFixed(5)}, ${F.toFixed(5)}`,c=Number.isFinite(b)?` ±${Math.round(b)}m`:"",S=`https://maps.google.com/?q=${Q},${F}`,e=`Location: ${T}${c} ${S}`;o0(e)},(Y)=>{let Q=Y?.message||"Unable to retrieve location.";alert(`Location error: ${Q}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};R(()=>{if(!k_)return;_$(!0),g2(Y_).then((Y)=>{let Q=Array.isArray(Y?.models)?Y.models.filter((F)=>typeof F==="string"&&F.trim().length>0):[];Q.sort((F,b)=>F.localeCompare(b,void 0,{sensitivity:"base"})),Q_(Q),S0(Y)}).catch((Y)=>{console.warn("Failed to load model list:",Y),Q_([])}).finally(()=>{_$(!1)})},[k_,f]),R(()=>{if(j)Y0(!1),d(!1),n_(!1),I_([]),F_(!1),g_([])},[j]),R(()=>{if(x&&!t$)d(!1)},[x,t$]),R(()=>{if(!k_)return;let Y=(Q)=>{let F=f$.current,b=h0.current,T=Q.target;if(F&&F.contains(T))return;if(b&&b.contains(T))return;Y0(!1)};return document.addEventListener("pointerdown",Y),()=>document.removeEventListener("pointerdown",Y)},[k_]),R(()=>{if(!x)return;let Y=(Q)=>{let F=U0.current,b=Q$.current,T=Q.target;if(F&&F.contains(T))return;if(b&&b.contains(T))return;d(!1)};return document.addEventListener("pointerdown",Y),()=>document.removeEventListener("pointerdown",Y)},[x]),R(()=>{let Y=()=>{let c=i0.current?.clientWidth||0;x0((S)=>S===c?S:c)};Y();let Q=i0.current,F=0,b=()=>{if(F)cancelAnimationFrame(F);F=requestAnimationFrame(()=>{F=0,Y()})},T=null;if(Q&&typeof ResizeObserver<"u")T=new ResizeObserver(()=>b()),T.observe(Q);if(typeof window<"u")window.addEventListener("resize",b);return()=>{if(F)cancelAnimationFrame(F);if(T?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",b)}},[j,f,A0.length,M?.percent]);let D=(Y)=>{let Q=Y.target.value;if(W$(null),x)d(!1);O0(Y.target),R0(Q)};return R(()=>{requestAnimationFrame(()=>O0())},[L_,x_,j]),R(()=>{if(j)return;v$(L_)},[B$,Y_,L_,j]),O`
        <div class="compose-box">
            ${!j&&z_.length>0&&O`
                <div class="compose-queue-stack">
                    ${z_.map((Y)=>{let Q=typeof Y?.content==="string"?Y.content:"",F=X$(Q);if(!F.text.trim()&&F.fileRefs.length===0&&F.messageRefs.length===0)return null;return O`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${Q}>
                                    ${F.text.trim()&&O`
                                        <div class="compose-queue-stack-text">${F.text}</div>
                                    `}
                                    ${(F.messageRefs.length>0||F.fileRefs.length>0)&&O`
                                        <div class="compose-queue-stack-refs">
                                            ${F.messageRefs.map((b)=>O`
                                                <${L$}
                                                    key=${"queue-msg-"+b}
                                                    prefix="compose"
                                                    label=${"msg:"+b}
                                                    title=${"Message reference: "+b}
                                                    icon="message"
                                                />
                                            `)}
                                            ${F.fileRefs.map((b)=>{let T=b.split("/").pop()||b;return O`
                                                    <${L$}
                                                        key=${"queue-file-"+b}
                                                        prefix="compose"
                                                        label=${T}
                                                        title=${b}
                                                        onClick=${()=>i?.(b)}
                                                    />
                                                `})}
                                        </div>
                                    `}
                                </div>
                                <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                                    <button
                                        class="compose-queue-stack-steer-btn"
                                        type="button"
                                        title="Inject queued follow-up as steer"
                                        aria-label="Inject queued follow-up as steer"
                                        onClick=${()=>U2(Y)}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M4 20h12a2 2 0 0 0 2-2V8" />
                                            <polyline points="14 12 18 8 22 12" />
                                        </svg>
                                        <span>Steer</span>
                                    </button>
                                    <button
                                        class="compose-queue-stack-close-btn"
                                        type="button"
                                        title="Cancel queued message"
                                        aria-label="Cancel queued message"
                                        onClick=${()=>r?.(Y)}
                                    >
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        `})}
                </div>
            `}
            <div
                class=${`compose-input-wrapper${Z0?" drag-active":""}`}
                onDragEnter=${O2}
                onDragOver=${M2}
                onDragLeave=${b2}
                onDrop=${Z2}
            >
                <div class="compose-input-main">
                    ${C0&&!G$&&O`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${C0}</div>
                    `}
                    ${G$&&O`
                        <div class="compose-file-refs">
                            ${C0&&O`
                                <div class="compose-submit-error" role="status" aria-live="polite">${C0}</div>
                            `}
                            ${V.map((Y)=>{return O`
                                    <${L$}
                                        key=${"msg-"+Y}
                                        prefix="compose"
                                        label=${"msg:"+Y}
                                        title=${"Message reference: "+Y}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>J?.(Y)}
                                    />
                                `})}
                            ${L.map((Y)=>{let Q=Y.split("/").pop()||Y;return O`
                                    <${L$}
                                        prefix="compose"
                                        label=${Q}
                                        title=${Y}
                                        onClick=${()=>i?.(Y)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(Y)}
                                    />
                                `})}
                            ${P_.map((Y,Q)=>{let F=Y?.name||`attachment-${Q+1}`;return O`
                                    <${L$}
                                        key=${F+Q}
                                        prefix="compose"
                                        label=${F}
                                        title=${F}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>C2(Q)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${T2}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof t==="function"&&O`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>t?.()}
                            title="Open this chat in a new chat-only window"
                            aria-label="Open this chat in a new chat-only window"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 5h5v5" />
                                <path d="M10 14 19 5" />
                                <path d="M19 14v5h-5" />
                                <path d="M5 10V5h5" opacity="0" />
                                <path d="M5 19h5" />
                                <path d="M5 19v-5" />
                            </svg>
                        </button>
                    `}
                    <textarea
                        ref=${C_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?x_:L_}
                        onInput=${D}
                        onKeyDown=${I2}
                        onPaste=${x2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${y0&&E_.length>0&&O`
                        <div class="slash-autocomplete" ref=${E0}>
                            ${E_.map((Y,Q)=>O`
                                <div
                                    key=${Y.chat_jid||Y.agent_name}
                                    class=${`slash-item${Q===s_?" active":""}`}
                                    onMouseDown=${(F)=>{F.preventDefault(),u$(Y)}}
                                    onMouseEnter=${()=>K0(Q)}
                                >
                                    <span class="slash-name">@${Y.agent_name}</span>
                                    <span class="slash-desc">${Y.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${d0&&O_.length>0&&O`
                        <div class="slash-autocomplete" ref=${o$}>
                            ${O_.map((Y,Q)=>O`
                                <div
                                    key=${Y.name}
                                    class=${`slash-item${Q===N0?" active":""}`}
                                    onMouseDown=${(F)=>{F.preventDefault(),R$(Y)}}
                                    onMouseEnter=${()=>B0(Q)}
                                >
                                    <span class="slash-name">${Y.name}</span>
                                    <span class="slash-desc">${Y.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${k_&&!j&&O`
                        <div class="compose-model-popup" ref=${f$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${t_&&O`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!t_&&D_.length===0&&O`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!t_&&D_.map((Y)=>O`
                                    <button
                                        key=${Y}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${f===Y?" active":""}`}
                                        onClick=${()=>{p$(Y)}}
                                        disabled=${o_}
                                    >
                                        ${Y}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{g$()}}
                                    disabled=${o_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${x&&!j&&O`
                        <div class="compose-model-popup" ref=${U0}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${O`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let Y=typeof W0?.agent_name==="string"&&W0.agent_name.trim()?`@${W0.agent_name.trim()}`:Y_,Q=typeof W0?.chat_jid==="string"&&W0.chat_jid.trim()?W0.chat_jid.trim():Y_;return`${Y} — ${Q} • current`})()}
                                    </div>
                                `}
                                ${!w$&&O`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${w$&&a$.map((Y)=>{let Q=Boolean(Y.archived_at),b=Y.chat_jid!==(Y.root_chat_jid||Y.chat_jid)&&!Y.is_active&&!Q&&typeof j0==="function",T=`@${Y.agent_name} — ${Y.chat_jid}${Y.is_active?" • active":""}${Q?" • archived":""}`;return O`
                                        <div key=${Y.chat_jid} class=${`compose-model-popup-item-row${Q?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${Q?" archived":""}`}
                                                onClick=${()=>{if(Q){b$(Y.chat_jid);return}F$(Y.chat_jid)}}
                                                disabled=${Q?!P0:!r_}
                                                title=${Q?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${T}
                                            </button>
                                            ${b&&O`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${Y.agent_name}`}
                                                    onClick=${(c)=>{c.stopPropagation(),d(!1),j0(Y.chat_jid)}}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18" />
                                                        <line x1="6" y1="6" x2="18" y2="18" />
                                                    </svg>
                                                </button>
                                            `}
                                        </div>
                                    `})}
                            </div>
                            ${(s0||U$||A$)&&O`
                                <div class="compose-model-popup-actions">
                                    ${s0&&O`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{q$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${U$&&O`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${()=>{H$()}}
                                            title="Rename current branch name and agent handle"
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${A$&&O`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{$2()}}
                                            title="Delete (prune) current agent/session branch"
                                        >
                                            Delete current…
                                        </button>
                                    `}
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${i0}>
                    ${!j&&f&&O`
                    <div class="compose-meta-row">
                        ${!j&&f&&O`
                            <div class="compose-model-meta">
                                <button
                                    ref=${h0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${e$}
                                    aria-label="Open model picker"
                                    onClick=${D$}
                                    disabled=${o_}
                                >
                                    ${o_?"Switching…":p0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!o_&&P$&&O`
                                        <span class="compose-model-usage-hint" title=${e$}>
                                            ${P$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&M&&M.percent!=null&&O`
                            <${b5} usage=${M} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${Q2&&O`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${A0.map((Y)=>O`
                                <button
                                    key=${Y.chat_jid||Y.agent_name}
                                    type="button"
                                    class="compose-agent-chip"
                                    onClick=${()=>M$(Y)}
                                    title=${`${Y.chat_jid||"Active agent"} — switch to @${Y.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Y.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${t$&&O`
                        ${W0?.agent_name&&O`
                            <span
                                class="compose-current-agent-label"
                                title=${W0.chat_jid||Y_}
                                onClick=${F0}
                            >@${W0.agent_name}</span>
                        `}
                        <button
                            ref=${Q$}
                            type="button"
                            class=${`icon-btn compose-mention-btn${x?" active":""}`}
                            onClick=${F0}
                            title=${x?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${x?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&O`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(Y)=>K?.(Y.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?X:z}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?O`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:O`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${$$&&!j&&O`
                        <button
                            class="icon-btn location-btn"
                            onClick=${U}
                            title="Share location"
                            type="button"
                            disabled=${!1}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${r$&&!j&&O`
                        <button
                            class=${`icon-btn notification-btn${Q0?" active":""}`}
                            onClick=${g}
                            title=${S$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&O`
                        ${l&&j_&&O`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${j_}
                                title=${`Attach open file: ${l}`}
                                type="button"
                                disabled=${L.includes(l)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${q_} />
                        </label>
                    `}
                    ${(J_!=="connected"||!j)&&O`
                        <div class="compose-send-stack">
                            ${J_!=="connected"&&O`
                                <span class="compose-connection-status connection-status ${J_}" title=${w0}>
                                    ${k0}
                                </span>
                            `}
                            ${!j&&G_&&O`
                                <button
                                    class=${`icon-btn mic-btn${y_?" listening":""}${$_?" voice-active":""}`}
                                    type="button"
                                    onClick=${R_}
                                    title=${y_?"Stop listening":$_?"Start listening":"Enable voice mode"}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                                        <line x1="12" y1="19" x2="12" y2="23"/>
                                        <line x1="8" y1="23" x2="16" y2="23"/>
                                    </svg>
                                </button>
                            `}
                            ${!j&&O`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{J$()}}
                                    disabled=${!T0}
                                    title="Send (Enter)"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var A4="piclaw_theme",D1="piclaw_tint",q8="piclaw_chat_themes",i2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},V8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},G8={default:{label:"Default",mode:"auto",light:i2,dark:V8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},M5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],z2={theme:"default",tint:null},L8="light",k4=!1;function J1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function A2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function x5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),z=parseInt(N[2],10),X=parseInt(N[3],10);if(![K,z,X].every((q)=>Number.isFinite(q)))return null;let L=`#${[K,z,X].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:X,hex:L}}function Q8(_){return A2(_)||x5(_)}function h2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function w4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function C5(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),K=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*K+0.0722*z}function T5(_){return C5(_)>0.4?"#000000":"#ffffff"}function B8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function P4(_){return G8[_]||G8.default}function f5(_){return _.mode==="auto"?B8():_.mode}function U8(_,$){let j=P4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||i2}function O8(_,$,j){let Z=Q8($);if(!Z)return _;let N=A2(_.bgPrimary),K=A2(_.bgSecondary),z=A2(_.bgHover),X=A2(_.borderColor);if(!N||!K||!z||!X)return _;let q=A2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:h2(N,Z,0.08),bgSecondary:h2(K,Z,0.12),bgHover:h2(z,Z,0.16),borderColor:h2(X,Z,0.08),accent:Z.hex,accentHover:q?h2(Z,q,0.18):Z.hex}}function S5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=Q8(Z),K=N?w4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?w4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",X=N?w4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?T5(N):$==="dark"?"#000000":"#ffffff",q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":X,"--accent-contrast-text":L,"--danger-color":_.danger||i2.danger,"--success-color":_.success||i2.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([B,V])=>{if(V)j.style.setProperty(B,V)})}function R5(){if(typeof document>"u")return;let _=document.documentElement;M5.forEach(($)=>_.style.removeProperty($))}function w2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function X8(_){let $=J1(z2?.theme||"default"),j=z2?.tint?String(z2.tint).trim():null,Z=U8($,_);if($==="default"&&j)Z=O8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?V8.bgPrimary:i2.bgPrimary}function v5(_,$){if(typeof document>"u")return;let j=w2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=w2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",X8("light"));let N=w2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",X8("dark"));let K=w2("msapplication-TileColor");if(K&&_)K.setAttribute("content",_);let z=w2("msapplication-navbutton-color");if(z&&_)z.setAttribute("content",_);let X=w2("apple-mobile-web-app-status-bar-style");if(X)X.setAttribute("content",$==="dark"?"black-translucent":"default")}function u5(){if(typeof window>"u")return;let _={...z2,mode:L8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function F8(){try{let _=t0(q8);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function m5(_,$,j){let Z=F8();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};c_(q8,JSON.stringify(Z))}function g5(_){if(!_)return null;return F8()[_]||null}function H8(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function I4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=J1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=P4(j),K=f5(N),z=U8(j,K);z2={theme:j,tint:Z},L8=K;let X=document.documentElement;X.dataset.theme=K,X.dataset.colorTheme=j,X.dataset.tint=Z?String(Z):"",X.style.colorScheme=K;let L=z;if(j==="default"&&Z)L=O8(z,Z,K);if(j==="default"&&!Z)R5();else S5(L,K);if(v5(L.bgPrimary,K),u5(),$.persist!==!1)if(c_(A4,j),Z)c_(D1,Z);else c_(D1,"")}function H1(){if(P4(z2.theme).mode!=="auto")return;I4(z2,{persist:!1})}function D8(){if(typeof window>"u")return()=>{};let _=H8(),$=g5(_),j=$?J1($.theme||"default"):J1(t0(A4)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=t0(D1);return N?N.trim():null})();if(I4({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!k4){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",H1);else if(N.addListener)N.addListener(H1);return k4=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",H1);else if(N.removeListener)N.removeListener(H1);k4=!1}}return()=>{}}function J8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||H8(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(m5($,j||"default",Z),I4({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")c_(A4,j||"default"),c_(D1,Z||"")}function y8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return B8()}var y1=/#(\w+)/g,p5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),c5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),h5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),i5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},l5=new Set(["http:","https:","mailto:",""]);function b4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function W2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!l5.has(Z.protocol))return null;return Z.href}catch{return null}}function E8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let z of Z){let X=z.tagName.toLowerCase();if(!c5.has(X)){let q=z.parentNode;if(!q)continue;while(z.firstChild)q.insertBefore(z.firstChild,z);q.removeChild(z);continue}let L=i5[X]||new Set;for(let q of Array.from(z.attributes)){let B=q.name.toLowerCase(),V=q.value;if(B.startsWith("on")){z.removeAttribute(q.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(L.has(B)||h5.has(B)){if(B==="href"){let J=W2(V);if(!J)z.removeAttribute(q.name);else if(z.setAttribute(q.name,J),X==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let J=X==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,k=W2(J,{allowDataImage:X==="img"});if(!k)z.removeAttribute(q.name);else z.setAttribute(q.name,k)}continue}z.removeAttribute(q.name)}}return j.body.innerHTML}function k8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function E1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=k8(j);if(N===j)break;j=N}return j}function d5(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,z=[];for(let X of j){if(!K&&X.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&X.trim().match(/^```\s*$/)){let L=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),K=!1,z=[];continue}if(K)z.push(X);else N.push(X)}if(K)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function n5(_){if(!_)return _;return E1(_,5)}function s5(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function o5(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function r5(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",z=n5(K);return`<div class="mermaid-container" data-mermaid="${s5(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function w8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var a5={span:new Set(["title","class","lang","dir"])};function t5(_,$){let j=a5[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,K;while(K=N.exec($)){let z=(K[1]||"").toLowerCase();if(!z||z.startsWith("on")||!j.has(z))continue;let X=K[2]??K[3]??K[4]??"";Z.push(` ${z}="${b4(X)}"`)}return Z.join("")}function A8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,X=K.endsWith("/")?K.slice(0,-1).trim():K,[L=""]=X.split(/\s+/,1),q=L.toLowerCase();if(!q||!p5.has(q))return $;if(q==="br")return N?"":"<br>";if(N)return`</${q}>`;let B=X.slice(L.length).trim(),V=t5(q,B);return`<${q}${V}>`})}function P8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function I8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function e5(_){if(!window.katex)return _;let $=(z)=>k8(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let X=[],L=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let B=X.length;return X.push(q),`@@CODE_BLOCK_${B}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let B=X.length;return X.push(q),`@@CODE_INLINE_${B}@@`}),{html:L,blocks:X}},Z=(z,X)=>{if(!X.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,q)=>{let B=Number(q);return X[B]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,X,L)=>{try{let q=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${X}${q}`}catch(q){return`<span class="math-error" title="${b4(q.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,X,L)=>{if(/\s$/.test(L))return z;try{let q=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${X}${q}`}catch(q){return`${X}<span class="math-error" title="${b4(q.message)}">$${L}$</span>`}}),Z(K,N.blocks)}function _7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let z=K.nodeValue;if(!z)continue;if(y1.lastIndex=0,!y1.test(z))continue;y1.lastIndex=0;let X=K.parentElement;if(X&&(X.closest("a")||X.closest("code")||X.closest("pre")))continue;let L=z.split(y1);if(L.length<=1)continue;let q=$.createDocumentFragment();L.forEach((B,V)=>{if(V%2===1){let J=$.createElement("a");J.setAttribute("href","#"),J.className="hashtag",J.setAttribute("data-hashtag",B),J.textContent=`#${B}`,q.appendChild(J)}else q.appendChild($.createTextNode(B))}),K.parentNode?.replaceChild(q,K)}return $.body.innerHTML}function $7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function e0(_,$,j={}){if(!_)return"";let Z=$7(_),{text:N,blocks:K}=d5(Z),z=E1(N,2),L=w8(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),q=A8(L),B=window.marked?marked.parse(q,{headerIds:!1,mangle:!1}):q.replace(/\n/g,"<br>");return B=P8(B),B=I8(B),B=e5(B),B=_7(B),B=r5(B,K),B=E8(B,j),B}function k1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=E1($,2),N=w8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=A8(N),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=P8(z),z=I8(z),z=E8(z),z}function j7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,K)=>{let z=N.trim().split(/\s+/).map((L)=>{let[q,B]=L.split(",").map(Number);return{x:q,y:B}});if(z.length<3)return`<polyline${Z}points="${N}"${K}/>`;let X=[`M ${z[0].x},${z[0].y}`];for(let L=1;L<z.length-1;L++){let q=z[L-1],B=z[L],V=z[L+1],J=B.x-q.x,k=B.y-q.y,f=V.x-B.x,u=V.y-B.y,v=Math.sqrt(J*J+k*k),A=Math.sqrt(f*f+u*u),M=Math.min($,v/2,A/2);if(M<0.5){X.push(`L ${B.x},${B.y}`);continue}let p=B.x-J/v*M,y=B.y-k/v*M,g=B.x+f/A*M,n=B.y+u/A*M,l=J*u-k*f>0?1:0;X.push(`L ${p},${y}`),X.push(`A ${M},${M} 0 0 ${l} ${g},${n}`)}return X.push(`L ${z[z.length-1].x},${z[z.length-1].y}`),`<path${Z}d="${X.join(" ")}"${K}/>`})}async function C$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=y8()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let X=z.dataset.mermaid,L=o5(X||""),q=E1(L,2),B=await $(q,{...N,transparent:!0});B=j7(B),z.innerHTML=B,z.removeAttribute("data-mermaid")}catch(X){console.error("Mermaid render error:",X);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${X.message}`,z.innerHTML="",z.appendChild(L),z.removeAttribute("data-mermaid")}}function b8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function M8(_){return String(_||"").trim()||"web:default"}function x8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function C8(_){if(!_)return!1;return _.status!=="running"}function T8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function f8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=E(null),K=E(null),z=_?.thinking?k1(_.thinking):"",X=_?.answer?e0(_.answer,null,{sanitize:!1}):"";if(R(()=>{if(N.current&&z)C$(N.current).catch(()=>{})},[z]),R(()=>{if(K.current&&X)C$(K.current).catch(()=>{})},[X]),!_)return null;let L=_.status==="running",q=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),V=x8(_),J=C8(_),k=!L&&q,f=L?"Thinking…":_.status==="error"?"Error":"Done";return O`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${f}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&O`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&O`<div class="btw-block btw-error">${_.error}</div>`}
            ${B&&O`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${V&&O`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:X}}
                    ></div>
                </div>
            `}

            ${J&&O`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&O`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!k}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var S8="PiClaw";function M4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%K.length,X=K[z],L=Z.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",B=q?q:null,V=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:X,image:B||(V?"/static/icon-192.png":null)}}function R8(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function v8(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function u8(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",X=K?.dataset?.tint||"",L=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(L&&(X||z&&z!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function Z7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function l2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function m8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return l2(_)?"Compacting context":"Working..."}function N7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function g8(_,$=Date.now()){let j=Z7(_);if(j===null)return null;return N7(Math.max(0,$-j))}function p8({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:z,steerQueued:X,onPanelToggle:L}){let V=($_)=>{if(!$_)return{text:"",totalLines:0,fullText:""};if(typeof $_==="string"){let L_=$_,m_=L_?L_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:L_,totalLines:m_,fullText:L_}}let y_=$_.text||"",G_=$_.fullText||$_.full_text||y_,R_=Number.isFinite($_.totalLines)?$_.totalLines:G_?G_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y_,totalLines:R_,fullText:G_}},J=160,k=($_)=>String($_||"").replace(/<\/?internal>/gi,""),f=($_)=>{if(!$_)return 1;return Math.max(1,Math.ceil($_.length/160))},u=($_,y_,G_)=>{let R_=($_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!R_)return{text:"",omitted:0,totalLines:Number.isFinite(G_)?G_:0,visibleLines:0};let L_=R_.split(`
`),m_=L_.length>y_?L_.slice(0,y_).join(`
`):R_,x_=Number.isFinite(G_)?G_:L_.reduce((v_,Z0)=>v_+f(Z0),0),d_=m_?m_.split(`
`).reduce((v_,Z0)=>v_+f(Z0),0):0,P_=Math.max(x_-d_,0);return{text:m_,omitted:P_,totalLines:x_,visibleLines:d_}},v=V(j),A=V(Z),M=V($),p=Boolean(v.text)||v.totalLines>0,y=Boolean(A.text)||A.totalLines>0,g=Boolean(M.fullText?.trim()||M.text?.trim());if(!_&&!g&&!p&&!y&&!N&&!K)return null;let[n,a]=C(new Set),[l,j_]=C(()=>Date.now()),i=($_)=>a((y_)=>{let G_=new Set(y_),R_=!G_.has($_);if(R_)G_.add($_);else G_.delete($_);if(typeof L==="function")L($_,R_);return G_});R(()=>{a(new Set)},[z]);let z_=l2(_);R(()=>{if(!z_)return;j_(Date.now());let $_=setInterval(()=>j_(Date.now()),1000);return()=>clearInterval($_)},[z_,_?.started_at,_?.startedAt]);let i_=_?.turn_id||z,r=u8(i_),o=X?"turn-dot turn-dot-queued":"turn-dot",Z_=($_)=>$_,t=Boolean(_?.last_activity||_?.lastActivity),K_=($_)=>$_==="warning"?"#f59e0b":$_==="error"?"var(--danger-color)":$_==="success"?"var(--success-color)":r,B_=K?.kind||"info",Y_=K_(B_),J_=K_(_?.kind||(z_?"warning":"info")),V_="",b_=_?.title,S_=_?.status;if(_?.type==="plan")V_=b_?`Planning: ${b_}`:"Planning...";else if(_?.type==="tool_call")V_=b_?`Running: ${b_}`:"Running tool...";else if(_?.type==="tool_status")V_=b_?`${b_}: ${S_||"Working..."}`:S_||"Working...";else if(_?.type==="error")V_=b_||"Agent error";else V_=b_||S_||"Working...";if(t)V_="Last activity just now";let U_=({panelTitle:$_,text:y_,fullText:G_,totalLines:R_,maxLines:L_,titleClass:m_,panelKey:x_})=>{let d_=n.has(x_),P_=G_||y_||"",v_=x_==="thought"||x_==="draft"?k(P_):P_,Z0=typeof L_==="number",e_=d_&&Z0,O_=Z0?u(v_,L_,R_):{text:v_||"",omitted:0,totalLines:Number.isFinite(R_)?R_:0};if(!v_&&!(Number.isFinite(O_.totalLines)&&O_.totalLines>0))return null;let I_=`agent-thinking-body${Z0?" agent-thinking-body-collapsible":""}`,N0=Z0?`--agent-thinking-collapsed-lines: ${L_};`:"";return O`
            <div
                class="agent-thinking"
                data-expanded=${d_?"true":"false"}
                data-collapsible=${Z0?"true":"false"}
                style=${r?`--turn-color: ${r};`:""}
            >
                <div class="agent-thinking-title ${m_||""}">
                    ${r&&O`<span class=${o} aria-hidden="true"></span>`}
                    ${$_}
                    ${e_&&O`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${$_} panel`}
                            onClick=${()=>i(x_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${I_}
                    style=${N0}
                    dangerouslySetInnerHTML=${{__html:k1(v_)}}
                />
                ${!d_&&O_.omitted>0&&O`
                    <button class="agent-thinking-truncation" onClick=${()=>i(x_)}>
                        ▸ ${O_.omitted} more lines
                    </button>
                `}
                ${d_&&O_.omitted>0&&O`
                    <button class="agent-thinking-truncation" onClick=${()=>i(x_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},M_=N?.tool_call?.title,u_=M_?`Awaiting approval: ${M_}`:"Awaiting approval",j0=z_?g8(_,l):null,W_=($_,y_,G_=null)=>{let R_=m8($_);return O`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${y_?`--turn-color: ${y_};`:""}
                title=${$_?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${y_&&O`<span class=${o} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${R_}</span>
                    ${G_&&O`<span class="agent-status-elapsed">${G_}</span>`}
                </div>
                ${$_.detail&&O`<div class="agent-thinking-body">${$_.detail}</div>`}
            </div>
        `};return O`
        <div class="agent-status-panel">
            ${K&&W_(K,Y_)}
            ${_?.type==="intent"&&W_(_,J_,j0)}
            ${N&&O`
                <div class="agent-status agent-status-request" aria-live="polite" style=${r?`--turn-color: ${r};`:""}>
                    <span class=${o} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${u_}</span>
                </div>
            `}
            ${p&&U_({panelTitle:Z_("Planning"),text:v.text,fullText:v.fullText,totalLines:v.totalLines,panelKey:"plan"})}
            ${y&&U_({panelTitle:Z_("Thoughts"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${g&&U_({panelTitle:Z_("Draft"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&O`
                <div class=${`agent-status${t?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${r?`--turn-color: ${r};`:""}>
                    ${r&&O`<span class=${o} aria-hidden="true"></span>`}
                    ${_?.type==="error"?O`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!t&&O`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${V_}</span>
                </div>
            `}
        </div>
    `}function c8({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,z=Z?.title||"Agent Request",X=Z?.kind||"other",L=Z?.rawInput||{},q=L.command||L.commands&&L.commands[0]||null,B=L.diff||null,V=L.fileName||L.path||null,J=Z?.description||L.description||L.explanation||null,f=(Array.isArray(Z?.locations)?Z.locations:[]).map((p)=>p?.path).filter((p)=>Boolean(p)),u=Array.from(new Set([V,...f].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let v=async(p)=>{try{await L1(j,p,K||null),$()}catch(y){console.error("Failed to respond to agent request:",y)}},A=async()=>{try{await q4(z,`Auto-approved: ${z}`),await L1(j,"approved",K||null),$()}catch(p){console.error("Failed to add to whitelist:",p)}},M=N&&N.length>0;return O`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${z}</div>
                </div>
                ${(J||q||B||u.length>0)&&O`
                    <div class="agent-request-body">
                        ${J&&O`
                            <div class="agent-request-description">${J}</div>
                        `}
                        ${u.length>0&&O`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${u.map((p,y)=>O`<li key=${y}>${p}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&O`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${B&&O`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${B}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?N.map((p)=>O`
                            <button 
                                key=${p.optionId||p.id||String(p)}
                                class="agent-request-btn ${p.kind==="allow_once"||p.kind==="allow_always"?"primary":""}"
                                onClick=${()=>v(p.optionId||p.id||p)}
                            >
                                ${p.name||p.label||p.optionId||p.id||String(p)}
                            </button>
                        `):O`
                        <button class="agent-request-btn primary" onClick=${()=>v("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>v("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${A}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function h8(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let L=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${q}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${X}`}function d2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function Y$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function G2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var K7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),Y7=new Set(["text/markdown"]),z7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),W7=new Set(["application/vnd.jgraph.mxfile"]);function n2(_){return typeof _==="string"?_.trim().toLowerCase():""}function G7(_){let $=n2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function X7(_){let $=n2(_);return!!$&&$.endsWith(".pdf")}function q7(_){let $=n2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function s2(_,$){let j=n2(_);if(G7($)||W7.has(j))return"drawio";if(X7($)||j==="application/pdf")return"pdf";if(q7($)||z7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(K7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function i8(_){let $=n2(_);return Y7.has($)}function l8(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function V7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function L7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:K}}function d8(_){return V7(_)||L7(_)}function w1(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function Q7(_,$){let j=Math.max(w1(_),w1($)),Z=Math.min(w1(_),w1($));return(j+0.05)/(Z+0.05)}function B7(_,$,j="#ffffff"){let Z=d8(_);if(!Z)return j;let N=j,K=-1;for(let z of $){let X=d8(z);if(!X)continue;let L=Q7(Z,X);if(L>K)N=z,K=L}return N}function x4(){let _=getComputedStyle(document.documentElement),$=(f,u)=>{for(let v of f){let A=_.getPropertyValue(v).trim();if(A)return A}return u},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),X=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),J=$(["--font-family"],"system-ui, sans-serif"),k=B7(X,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:z,accent:X,good:L,warning:q,attention:B,border:V,fontFamily:J,buttonTextColor:k}}function n8(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:z,attention:X,border:L,fontFamily:q}=x4();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:X,subtle:X}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:X,subtle:X}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var U7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),s8=!1,A1=null,o8=!1;function C4(_){_.querySelector(".adaptive-card-notice")?.remove()}function O7(_,$,j="error"){C4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function F7(_,$=(j)=>e0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function H7(_=($)=>e0($,null)){return($,j)=>{try{let Z=F7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function D7(_){if(o8||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=H7(),o8=!0}async function J7(){if(s8)return;if(A1)return A1;return A1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{s8=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),A1}function y7(){return globalThis.AdaptiveCards}function E7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function k7(_){return U7.has(_)}function f4(_){if(!Array.isArray(_))return[];return _.filter(E7)}function w7(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function T4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>T4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${T4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function A7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return T4($);return typeof $==="string"?$:String($)}function P7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((X)=>Z(X));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=A7(z.type,j[z.id],z);for(let[X,L]of Object.entries(z))if(Array.isArray(L)||L&&typeof L==="object")z[X]=Z(L);return z};return Z(_)}function I7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function b7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function M7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=b7(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function r8(_,$,j){if(!k7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await J7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=y7();D7(Z);let N=new Z.AdaptiveCard,K=x4();N.hostConfig=new Z.HostConfig(n8());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,X=$.state==="active"?$.payload:P7($.payload,z);N.parse(X),N.onExecuteAction=(B)=>{let V=w7(B);if(j?.onAction)C4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((J)=>{console.error("[adaptive-card] Action failed:",J);let k=J instanceof Error?J.message:String(J||"Action failed.");O7(_,k||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let q=M7($);if(q){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=q.label,B.appendChild(V),q.detail){let J=document.createElement("span");J.className="adaptive-card-status-detail",J.textContent=q.detail,B.appendChild(J)}_.appendChild(B)}if(C4(_),_.appendChild(L),q)I7(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function o2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>o2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${o2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function a8(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:o2(j)})).filter(($)=>$.value)}function x7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function S4(_){if(!Array.isArray(_))return[];return _.filter(x7)}function t8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=o2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=a8(j).map(({key:K,value:z})=>`${K}: ${z}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function e8(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=a8(_.data),Z=j.length>0?j.slice(0,2).map(({key:K,value:z})=>`${K}: ${z}`).join(", "):o2(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function C7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?Y$($):null},{label:"Added",value:_?.created_at?G2(_.created_at):null}].filter((Z)=>Z.value)}function T7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let K=K$(_);return`/office-viewer/?url=${encodeURIComponent(K)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function _6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=p_(()=>s2($?.content_type,Z),[$?.content_type,Z]),K=l8(N),z=p_(()=>i8($?.content_type),[$?.content_type]),[X,L]=C(N==="text"),[q,B]=C(""),[V,J]=C(null),k=E(null),f=p_(()=>C7($),[$]),u=p_(()=>T7(_,Z,N),[_,Z,N]),v=p_(()=>{if(!z||!q)return"";return e0(q)},[z,q]);return R(()=>{let A=(M)=>{if(M.key==="Escape")j()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[j]),R(()=>{if(!k.current||!v)return;C$(k.current);return},[v]),R(()=>{let A=!1;async function M(){if(N!=="text"){L(!1),J(null);return}L(!0),J(null);try{let p=await B4(_);if(!A)B(p)}catch{if(!A)J("Failed to load text preview.")}finally{if(!A)L(!1)}}return M(),()=>{A=!0}},[_,N]),O`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(A)=>{A.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${u&&O`
                            <a
                                href=${u}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(A)=>A.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${K$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(A)=>A.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${X&&O`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!X&&V&&O`<div class="attachment-preview-state">${V}</div>`}
                    ${!X&&!V&&N==="image"&&O`
                        <img class="attachment-preview-image" src=${K$(_)} alt=${Z} />
                    `}
                    ${!X&&!V&&(N==="pdf"||N==="office"||N==="drawio")&&u&&O`
                        <iframe class="attachment-preview-frame" src=${u} title=${Z}></iframe>
                    `}
                    ${!X&&!V&&N==="drawio"&&O`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!X&&!V&&N==="text"&&z&&O`
                        <div
                            ref=${k}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:v}}
                        />
                    `}
                    ${!X&&!V&&N==="text"&&!z&&O`
                        <pre class="attachment-preview-text">${q}</pre>
                    `}
                    ${!X&&!V&&N==="unsupported"&&O`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${f.map((A)=>O`
                        <div class="attachment-preview-meta-item" key=${A.label}>
                            <span class="attachment-preview-meta-label">${A.label}</span>
                            <span class="attachment-preview-meta-value">${A.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function $6({src:_,onClose:$}){return R(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),O`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function f7({mediaId:_,onPreview:$}){let[j,Z]=C(null);if(R(()=>{y2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,z=K?Y$(K):"",L=s2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return O`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${K$(_)} download=${N} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${N}</span>
                    <span class="file-meta-row">
                        ${z&&O`<span class="file-size">${z}</span>`}
                        ${j.content_type&&O`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            <button
                class="file-attachment-preview"
                type="button"
                onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${L}
            </button>
        </div>
    `}function S7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=C(null);R(()=>{if(!Number.isFinite(j))return;y2(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?K$(j):null,L=s2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return O`
        <span class="attachment-pill" title=${K}>
            ${z?O`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(q)=>q.stopPropagation()}>
                        <${L$}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:O`
                    <${L$}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&O`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function P1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?G2(Z):null;return O`
        <div class="content-annotations">
            ${$&&$.length>0&&O`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&O`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&O`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function R7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?Y$(_.size):"",N=_.mime_type||"",K=u7(N),z=W2(_.uri);return O`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(X)=>X.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${K}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&O`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&O`<span>${N}</span>`}
                    ${Z&&O`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function v7({block:_}){let[$,j]=C(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return O`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&O`
                ${N&&O`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&O`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&O`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(X)=>{X.preventDefault(),X.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:z||"application/octet-stream"}),q=URL.createObjectURL(L),B=document.createElement("a");B.href=q,B.download=Z.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function u7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function m7({preview:_}){let $=W2(_.url),j=W2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return O`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&O`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function g7(_,$){return typeof _==="string"?_:""}var p7=1800,c7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,h7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,i7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function l7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function d7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,z)=>{let X=z||"idle";if(K.dataset.copyState=X,X==="success")K.innerHTML=h7,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(X==="error")K.innerHTML=i7,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=c7,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let X=document.createElement("button");X.type="button",X.className="post-code-copy-btn",N(X,"idle"),z.appendChild(X);let L=async(q)=>{q.preventDefault(),q.stopPropagation();let V=K.querySelector("code")?.textContent||"",J=await l7(V);N(X,J?"success":"error");let k=j.get(X);if(k)clearTimeout(k);let f=setTimeout(()=>{N(X,"idle"),j.delete(X)},p7);j.set(X,f)};X.addEventListener("click",L),Z.push(()=>{X.removeEventListener("click",L);let q=j.get(X);if(q)clearTimeout(q);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{Z.forEach((K)=>K())}}function n7(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let q=j[K];if(/^\s*-\s+/.test(q))N.push(q.replace(/^\s*-\s+/,"").trim());else if(!q.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),X=j.slice(K),L=[...z,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function s7(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let q=j[K];if(/^\s*-\s+/.test(q)){let V=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)N.push(V[1])}else if(!q.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),X=j.slice(K),L=[...z,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function o7(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1){let B=j[q].trim();if((B==="Images:"||B==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let q=j[K];if(/^\s*-\s+/.test(q)){let B=q.replace(/^\s*-\s+/,"").trim(),V=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let J=V[1],k=(V[2]||"").trim()||J;N.push({id:J,label:k,raw:B})}else N.push({id:null,label:B,raw:B})}else if(!q.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),X=j.slice(K),L=[...z,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function r7(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a7(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(r7).sort((B,V)=>V.length-B.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),X=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),L=[],q;while(q=X.nextNode())L.push(q);for(let B of L){let V=B.nodeValue;if(!V||!N.test(V)){N.lastIndex=0;continue}N.lastIndex=0;let J=B.parentElement;if(J&&J.closest("code, pre, script, style"))continue;let k=V.split(N).filter((u)=>u!=="");if(k.length===0)continue;let f=z.createDocumentFragment();for(let u of k)if(K.test(u)){let v=z.createElement("mark");v.className="search-highlight-term",v.textContent=u,f.appendChild(v)}else f.appendChild(z.createTextNode(u));B.parentNode.replaceChild(f,B)}return z.body.innerHTML}function j6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:z,userName:X,userAvatarUrl:L,userAvatarBackground:q,onDelete:B,isThreadReply:V,isThreadPrev:J,isThreadNext:k,isRemoving:f,highlightQuery:u,onFileRef:v}){let[A,M]=C(null),p=E(null),y=_.data,g=y.type==="agent_response",n=X||"You",a=g?K||S8:n,l=g?M4(K,z,!0):M4(n,L),j_=typeof q==="string"?q.trim().toLowerCase():"",i=!g&&l.image&&(j_==="clear"||j_==="transparent"),z_=g&&Boolean(l.image),i_=`background-color: ${i||z_?"transparent":l.color}`,r=y.content_meta,o=Boolean(r?.truncated),Z_=Boolean(r?.preview),t=o&&!Z_,K_=o?{originalLength:Number.isFinite(r?.original_length)?r.original_length:y.content?y.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,B_=y.content_blocks||[],Y_=y.media_ids||[],J_=g7(y.content,y.link_previews),{content:V_,fileRefs:b_}=n7(J_),{content:S_,messageRefs:U_}=s7(V_),{content:M_,attachments:u_}=o7(S_);J_=M_;let j0=f4(B_),W_=S4(B_),$_=j0.length===1&&typeof j0[0]?.fallback_text==="string"?j0[0].fallback_text.trim():"",y_=W_.length===1?t8(W_[0]).trim():"",G_=Boolean($_)&&J_?.trim()===$_||Boolean(y_)&&J_?.trim()===y_,R_=Boolean(J_)&&!t&&!G_,L_=typeof u==="string"?u.trim():"",m_=p_(()=>{if(!J_||G_)return"";let x=e0(J_,j);return L_?a7(x,L_):x},[J_,G_,L_]),x_=(x,d)=>{x.stopPropagation(),M(K$(d))},[d_,P_]=C(null),v_=(x)=>{P_(x)},Z0=(x)=>{x.stopPropagation(),B?.(_)},e_=(x,d)=>{let D_=new Set;if(!x||d.length===0)return{content:x,usedIds:D_};return{content:x.replace(/attachment:([^\s)"']+)/g,(t_,_$,z0,x0)=>{let C0=_$.replace(/^\/+/,""),C_=d.find((E0)=>E0.name&&E0.name.toLowerCase()===C0.toLowerCase()&&!D_.has(E0.id))||d.find((E0)=>!D_.has(E0.id));if(!C_)return t_;if(D_.add(C_.id),x0.slice(Math.max(0,z0-2),z0)==="](")return`/media/${C_.id}`;return C_.name||"attachment"}),usedIds:D_}},O_=[],I_=[],N0=[],B0=[],d0=[],n_=[],E_=0;if(B_.length>0)B_.forEach((x)=>{if(x?.type==="text"&&x.annotations)n_.push(x.annotations);if(x?.type==="resource_link")B0.push(x);else if(x?.type==="resource")d0.push(x);else if(x?.type==="file"){let d=Y_[E_++];if(d)I_.push(d),N0.push({id:d,name:x?.name||x?.filename||x?.title})}else if(x?.type==="image"||!x?.type){let d=Y_[E_++];if(d){let D_=typeof x?.mime_type==="string"?x.mime_type:void 0;O_.push({id:d,annotations:x?.annotations,mimeType:D_}),N0.push({id:d,name:x?.name||x?.filename||x?.title})}}});else if(Y_.length>0){let x=u_.length>0;Y_.forEach((d,D_)=>{let Q_=u_[D_]||null;if(N0.push({id:d,name:Q_?.label||null}),x)I_.push(d);else O_.push({id:d,annotations:null})})}if(u_.length>0)u_.forEach((x)=>{if(!x?.id)return;let d=N0.find((D_)=>String(D_.id)===String(x.id));if(d&&!d.name)d.name=x.label});let{content:g_,usedIds:s_}=e_(J_,N0);J_=g_;let K0=O_.filter(({id:x})=>!s_.has(x)),y0=I_.filter((x)=>!s_.has(x)),F_=u_.length>0?u_.map((x,d)=>({id:x.id||`attachment-${d+1}`,label:x.label||`attachment-${d+1}`})):N0.map((x,d)=>({id:x.id,label:x.name||`attachment-${d+1}`})),o_=p_(()=>f4(B_),[B_]),c0=p_(()=>S4(B_),[B_]),k_=p_(()=>{return o_.map((x)=>`${x.card_id}:${x.state}`).join("|")},[o_]);R(()=>{if(!p.current)return;return C$(p.current),d7(p.current)},[m_]);let Y0=E(null);return R(()=>{if(!Y0.current||o_.length===0)return;let x=Y0.current;x.innerHTML="";for(let d of o_){let D_=document.createElement("div");x.appendChild(D_),r8(D_,d,{onAction:async(Q_)=>{if(Q_.type==="Action.OpenUrl"){let t_=W2(Q_.url||"");if(!t_)throw Error("Invalid URL");window.open(t_,"_blank","noopener,noreferrer");return}if(Q_.type==="Action.Submit"){await X4({post_id:_.id,thread_id:y.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:d.card_id,action:{type:Q_.type,title:Q_.title||"",data:Q_.data}});return}console.warn("[post] unsupported adaptive card action:",Q_.type,Q_)}}).catch((Q_)=>{console.error("[post] adaptive card render error:",Q_),D_.textContent=d.fallback_text||"Card failed to render."})}},[k_,_.id]),O`
        <div id=${`post-${_.id}`} class="post ${g?"agent-post":""} ${V?"thread-reply":""} ${J?"thread-prev":""} ${k?"thread-next":""} ${f?"removing":""}" onClick=${$}>
            <div class="post-avatar ${g?"agent-avatar":""} ${l.image?"has-image":""}" style=${i_}>
                ${l.image?O`<img src=${l.image} alt=${a} />`:l.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${Z0}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${a}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(x)=>{if(x.preventDefault(),x.stopPropagation(),Z)Z(_.id)}}>${h8(_.timestamp)}</a>
                </div>
                ${t&&K_&&O`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${d2(K_.originalLength)} chars
                            ${K_.maxLength?O` • Display limit: ${d2(K_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${Z_&&K_&&O`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${d2(K_.maxLength)} of ${d2(K_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(b_.length>0||U_.length>0||F_.length>0)&&O`
                    <div class="post-file-refs">
                        ${U_.map((x)=>{let d=(D_)=>{if(D_.preventDefault(),D_.stopPropagation(),N)N(x,_.chat_jid||null);else{let Q_=document.getElementById("post-"+x);if(Q_)Q_.scrollIntoView({behavior:"smooth",block:"center"}),Q_.classList.add("post-highlight"),setTimeout(()=>Q_.classList.remove("post-highlight"),2000)}};return O`
                                <a href=${`#msg-${x}`} class="post-msg-pill-link" onClick=${d}>
                                    <${L$}
                                        prefix="post"
                                        label=${"msg:"+x}
                                        title=${"Message "+x}
                                        icon="message"
                                        onClick=${d}
                                    />
                                </a>
                            `})}
                        ${b_.map((x)=>{let d=x.split("/").pop()||x;return O`
                                <${L$}
                                    prefix="post"
                                    label=${d}
                                    title=${x}
                                    onClick=${()=>v?.(x)}
                                />
                            `})}
                        ${F_.map((x)=>O`
                            <${S7}
                                key=${x.id}
                                attachment=${x}
                                onPreview=${v_}
                            />
                        `)}
                    </div>
                `}
                ${R_&&O`
                    <div 
                        ref=${p}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:m_}}
                        onClick=${(x)=>{if(x.target.classList.contains("hashtag")){x.preventDefault(),x.stopPropagation();let d=x.target.dataset.hashtag;if(d)j?.(d)}else if(x.target.tagName==="IMG")x.preventDefault(),x.stopPropagation(),M(x.target.src)}}
                    />
                `}
                ${o_.length>0&&O`
                    <div ref=${Y0} class="post-adaptive-cards" />
                `}
                ${c0.length>0&&O`
                    <div class="post-adaptive-card-submissions">
                        ${c0.map((x,d)=>{let D_=e8(x),Q_=`${x.card_id}-${d}`;return O`
                                <div key=${Q_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${D_.title}</span>
                                        </div>
                                    </div>
                                    ${D_.fields.length>0&&O`
                                        <div class="adaptive-card-submission-fields">
                                            ${D_.fields.map((t_)=>O`
                                                <span class="adaptive-card-submission-field" title=${`${t_.key}: ${t_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${t_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${t_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${G2(D_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${n_.length>0&&O`
                    ${n_.map((x,d)=>O`
                        <${P1} key=${d} annotations=${x} />
                    `)}
                `}
                ${K0.length>0&&O`
                    <div class="media-preview">
                        ${K0.map(({id:x,mimeType:d})=>{let Q_=typeof d==="string"&&d.toLowerCase().startsWith("image/svg")?K$(x):Q4(x);return O`
                                <img 
                                    key=${x} 
                                    src=${Q_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(t_)=>x_(t_,x)}
                                />
                            `})}
                    </div>
                `}
                ${K0.length>0&&O`
                    ${K0.map(({annotations:x},d)=>O`
                        ${x&&O`<${P1} key=${d} annotations=${x} />`}
                    `)}
                `}
                ${y0.length>0&&O`
                    <div class="file-attachments">
                        ${y0.map((x)=>O`
                            <${f7} key=${x} mediaId=${x} onPreview=${v_} />
                        `)}
                    </div>
                `}
                ${B0.length>0&&O`
                    <div class="resource-links">
                        ${B0.map((x,d)=>O`
                            <div key=${d}>
                                <${R7} block=${x} />
                                <${P1} annotations=${x.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${d0.length>0&&O`
                    <div class="resource-embeds">
                        ${d0.map((x,d)=>O`
                            <div key=${d}>
                                <${v7} block=${x} />
                                <${P1} annotations=${x.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y.link_previews?.length>0&&O`
                    <div class="link-previews">
                        ${y.link_previews.map((x,d)=>O`
                            <${m7} key=${d} preview=${x} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${A&&O`<${$6} src=${A} onClose=${()=>M(null)} />`}
        ${d_&&O`
            <${_6}
                mediaId=${d_.mediaId}
                info=${d_.info}
                onClose=${()=>P_(null)}
            />
        `}
    `}function Z6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:z,onFileRef:X,emptyMessage:L,timelineRef:q,agents:B,user:V,onDeletePost:J,reverse:k=!0,removingPostIds:f,searchQuery:u}){let[v,A]=C(!1),M=E(null),p=typeof IntersectionObserver<"u",y=P(async()=>{if(!j||!$||v)return;A(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{A(!1)}},[$,v,j]),g=P((r)=>{let{scrollTop:o,scrollHeight:Z_,clientHeight:t}=r.target,K_=k?Z_-t-o:o,B_=Math.max(300,t);if(K_<B_)y()},[k,y]);R(()=>{if(!p)return;let r=M.current,o=q?.current;if(!r||!o)return;let Z_=300,t=new IntersectionObserver((K_)=>{for(let B_ of K_){if(!B_.isIntersecting)continue;y()}},{root:o,rootMargin:`${Z_}px 0px ${Z_}px 0px`,threshold:0});return t.observe(r),()=>t.disconnect()},[p,$,j,q,y]);let n=E(y);if(n.current=y,R(()=>{if(p)return;if(!q?.current)return;let{scrollTop:r,scrollHeight:o,clientHeight:Z_}=q.current,t=k?o-Z_-r:r,K_=Math.max(300,Z_);if(t<K_)n.current?.()},[p,_,$,k,q]),R(()=>{if(!q?.current)return;if(!$||v)return;let{scrollTop:r,scrollHeight:o,clientHeight:Z_}=q.current,t=k?o-Z_-r:r,K_=Math.max(300,Z_);if(o<=Z_+1||t<K_)n.current?.()},[_,$,v,k,q]),!_)return O`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return O`
            <div class="timeline" ref=${q}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${L||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let a=_.slice().sort((r,o)=>r.id-o.id),l=(r)=>{let o=r?.data?.thread_id;if(o===null||o===void 0||o==="")return null;let Z_=Number(o);return Number.isFinite(Z_)?Z_:null},j_=new Map;for(let r=0;r<a.length;r+=1){let o=a[r],Z_=Number(o?.id),t=l(o);if(t!==null){let K_=j_.get(t)||{anchorIndex:-1,replyIndexes:[]};K_.replyIndexes.push(r),j_.set(t,K_)}else if(Number.isFinite(Z_)){let K_=j_.get(Z_)||{anchorIndex:-1,replyIndexes:[]};K_.anchorIndex=r,j_.set(Z_,K_)}}let i=new Map;for(let[r,o]of j_.entries()){let Z_=new Set;if(o.anchorIndex>=0)Z_.add(o.anchorIndex);for(let t of o.replyIndexes)Z_.add(t);i.set(r,Array.from(Z_).sort((t,K_)=>t-K_))}let z_=a.map((r,o)=>{let Z_=l(r);if(Z_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let t=i.get(Z_);if(!t||t.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let K_=t.indexOf(o);if(K_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:K_>0,hasThreadNext:K_<t.length-1}}),i_=O`<div class="timeline-sentinel" ref=${M}></div>`;return O`
        <div class="timeline ${k?"reverse":"normal"}" ref=${q} onScroll=${g}>
            <div class="timeline-content">
                ${k?i_:null}
                ${a.map((r,o)=>{let Z_=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),t=f?.has?.(r.id),K_=z_[o]||{};return O`
                    <${j6}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${Z_}
                        isThreadPrev=${K_.hasThreadPrev}
                        isThreadNext=${K_.hasThreadNext}
                        isRemoving=${t}
                        highlightQuery=${u}
                        agentName=${R8(r.data?.agent_id,B||{})}
                        agentAvatarUrl=${v8(r.data?.agent_id,B||{})}
                        userName=${V?.name||V?.user_name}
                        userAvatarUrl=${V?.avatar_url||V?.avatarUrl||V?.avatar}
                        userAvatarBackground=${V?.avatar_background||V?.avatarBackground}
                        onClick=${()=>Z?.(r)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${X}
                        onDelete=${J}
                    />
                `})}
                ${k?null:i_}
            </div>
        </div>
    `}class N6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var l_=new N6;var I1=null,R4=null;function t7(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function K6(){if(R4)return Promise.resolve(R4);if(!I1)I1=import(t7()).then((_)=>{return R4=_,_}).catch((_)=>{throw I1=null,_});return I1}class Y6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await K6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var v4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new Y6(_,$)}};function u4(){K6().catch(()=>{})}var g4="piclaw://terminal";var e7={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},_j={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},b1=null,m4=null;function $j(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function jj(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!$j(z))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Zj(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!b1)b1=jj(()=>Promise.resolve($.init?.())).catch((j)=>{throw b1=null,j});return await b1,$}async function Nj(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!m4)m4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await m4}async function Kj(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Yj(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function zj(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function T$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Wj(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function z6(){let _=zj(),$=_?_j:e7,j=T$("--bg-primary",_?"#000000":"#ffffff"),Z=T$("--text-primary",_?"#e7e9ea":"#0f1419"),N=T$("--text-secondary",_?"#71767b":"#536471"),K=T$("--accent-color","#1d9bf0"),z=T$("--danger-color",_?"#ff7b72":"#cf222e"),X=T$("--success-color",_?"#7ee787":"#1a7f37"),L=T$("--bg-hover",_?"#1d1f23":"#e8ebed"),q=T$("--border-color",_?"#2f3336":"#eff3f4"),B=T$("--accent-soft-strong",Wj(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:L,red:z,green:X,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:q}}class p4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Zj();if(await Nj(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:z6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=z6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Kj();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Yj($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var c4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new p4(_,$)}},h4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new p4(_,$)}};function n$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Gj(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",z=Z?.[3]||"",X=String($||"").split("/").slice(0,-1).join("/"),q=N.startsWith("/")?N:`${X?`${X}/`:""}${N}`,B=[];for(let J of q.split("/")){if(!J||J===".")continue;if(J===".."){if(B.length>0)B.pop();continue}B.push(J)}let V=B.join("/");return`${B1(V)}${K}${z}`}function r2(_){return _?.preview||null}function Xj(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function qj(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function Vj(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${n$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${n$(Y$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${n$(G2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${n$(qj($))}</span>`),Z.push(`<span><strong>extension:</strong> ${n$(Xj(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${n$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function Lj(_){let $=r2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=Vj(_,$);if($.kind==="image"){let Z=$.url||($.path?B1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${n$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=e0($.text||"",null,{rewriteImageSrc:(N)=>Gj(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${n$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class i4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=Lj(this.context)}getContent(){let _=r2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=r2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var l4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=r2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new i4(_,$)}},d4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return r2(_)||_?.path?1:!1},mount(_,$){return new i4(_,$)}};var Qj=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),Bj={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},Uj={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function G6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function W6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class X6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=G6(j),K=Uj[N]||"\uD83D\uDCC4",z=Bj[N]||"Office Document",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${K}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${W6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${W6(z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let L=X.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class q6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=K,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var n4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=G6(_?.path);if(!$||!Qj.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new X6(_,$);return new q6(_,$)}};var Oj=/\.(csv|tsv)$/i;function V6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class L6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${V6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${V6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let z=K.querySelector("#csv-open-tab");if(z)z.addEventListener("click",()=>{let X=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Q6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Oj.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new L6(_,$);return new Q6(_,$)}};var Fj=/\.pdf$/i;function Hj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class B6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Hj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#pdf-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class U6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var o4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Fj.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new B6(_,$);return new U6(_,$)}};var Dj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function r4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class O6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${r4(N)}" alt="${r4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${r4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let z=K.querySelector("#img-open-tab");if(z)z.addEventListener("click",()=>{let X=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class F6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var a4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Dj.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new O6(_,$);return new F6(_,$)}};var Jj=/\.(mp4|m4v|mov|webm|ogv)$/i;function yj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class H6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${yj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#video-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class D6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var t4={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Jj.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new H6(_,$);return new D6(_,$)}};function Ej(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function kj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var e4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function J6(_){let $=String(_||"").trim();return $?$:e4}function wj(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function Aj(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function Pj(_,$="*"){try{let j=(K)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...K}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let K=Z.prototype.saveData;Z.prototype.saveData=function(z,X,L,q,B,V){try{if(z&&L!=null&&j({filename:z,format:X,data:L,mimeType:q,base64Encoded:Boolean(B),defaultMode:V}))return}catch(J){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",J)}return K.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let K=N.prototype.exportFile;N.prototype.exportFile=function(z,X,L,q,B,V){try{if(X&&j({filename:X,data:z,mimeType:L,base64Encoded:Boolean(q),mode:B,folderId:V}))return}catch(J){console.warn("[drawio-pane] export intercept failed, falling back to native export",J)}return K.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function y6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${Aj(j)}`}class E6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${kj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#drawio-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class k6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=wj(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let K=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(Pj(this.iframe.contentWindow))return;setTimeout(K,250)};K()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=e4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await y6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await y6(_,"image/png");else this.xmlData=J6(await _.text());else if(_.status===404)this.xmlData=e4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?J6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var _3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!Ej(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new E6(_,$);return new k6(_,$)}};class w6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var h_=new w6;var M1="workspaceExplorerScale",Ij=["compact","default","comfortable"],bj=new Set(Ij),Mj={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function A6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return bj.has(j)?j:$}function $3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function xj(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function Cj(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function j3(_={}){let $=xj(_),j=_.stored?A6(_.stored,$):$;return Cj(j,_)}function P6(_){return Mj[A6(_)]}var Tj=60000,x6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function C6(_,$,j,Z=0,N=[]){if(!j&&x6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)C6(K,$,j,Z+1,N);return N}function I6(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&x6(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)N(z)};return N(_),Z.join("|")}function Y3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((X)=>[X?.path,X])):new Map,K=!j||j.length!==Z.length,z=Z.map((X)=>{let L=Y3(N.get(X.path),X);if(L!==N.get(X.path))K=!0;return L});return K?{...$,children:z}:_}function N3(_,$,j){if(!_)return _;if(_.path===$)return Y3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let z=N3(K,$,j);if(z!==K)Z=!0;return z});return Z?{..._,children:N}:_}var T6=4,Z3=14,fj=8,Sj=16;function f6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=f6(Z);return _.__bytes=j,j}function S6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=T6)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let X of N){let L=Math.max(0,Number(X?.__bytes??X?.size??0));if(L<=0)continue;if(X.type==="dir")K.push({kind:"dir",node:X,size:L});else K.push({kind:"file",name:X.name,path:X.path,size:L})}K.sort((X,L)=>L.size-X.size);let z=K;if(K.length>Z3){let X=K.slice(0,Z3-1),L=K.slice(Z3-1),q=L.reduce((B,V)=>B+V.size,0);X.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:q}),z=X}return Z.children=z.map((X)=>{if(X.kind==="dir")return S6(X.node,$+1);return{name:X.name,path:X.path,size:X.size,children:[]}}),Z}function b6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function R6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function x1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function z3(_,$,j,Z,N,K){let z=Math.PI*2-0.0001,X=K-N>z?N+z:K,L=x1(_,$,Z,N),q=x1(_,$,Z,X),B=x1(_,$,j,X),V=x1(_,$,j,N),J=X-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${J} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${J} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var v6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function u6(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),z=(X,L,q,B)=>{let V=Array.isArray(X?.children)?X.children:[];if(!V.length)return;let J=Math.max(0,Number(X.size)||0);if(J<=0)return;let k=q-L,f=L;V.forEach((u,v)=>{let A=Math.max(0,Number(u.size)||0);if(A<=0)return;let M=A/J,p=f,y=v===V.length-1?q:f+k*M;if(f=y,y-p<0.003)return;let g=v6[B];if(g){let n=R6(p,B,j);if(Z.push({key:u.path,path:u.path,label:u.name,size:A,color:n,depth:B,startAngle:p,endAngle:y,innerRadius:g[0],outerRadius:g[1],d:z3(120,120,g[0],g[1],p,y)}),B===1)N.push({key:u.path,name:u.name,size:A,pct:K>0?A/K*100:0,color:n})}if(B<T6)z(u,p,y,B+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function K3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=K3(Z,$);if(N)return N}return null}function m6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=v6[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,X=R6(K,1,Z),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:X,depth:1,startAngle:K,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:z3(120,120,N[0],N[1],K,z)}],legend:[{key:q,name:_,size:j,pct:100,color:X}]}}function M6(_,$=!1,j=!1){if(!_)return null;let Z=f6(_),N=S6(_,0),K=N.size||Z,{segments:z,legend:X}=u6(N,K,j);if(!z.length&&K>0){let L=m6("[files]",N.path,K,j);z=L.segments,X=L.legend}return{root:N,totalSize:K,segments:z,legend:X,truncated:$,isDarkTheme:j}}function Rj({payload:_}){if(!_)return null;let[$,j]=C(null),[Z,N]=C(_?.root?.path||"."),[K,z]=C(()=>[_?.root?.path||"."]),[X,L]=C(!1);R(()=>{let i=_?.root?.path||".";N(i),z([i]),j(null)},[_?.root?.path,_?.totalSize]),R(()=>{if(!Z)return;L(!0);let i=setTimeout(()=>L(!1),180);return()=>clearTimeout(i)},[Z]);let q=p_(()=>{return K3(_.root,Z)||_.root},[_?.root,Z]),B=q?.size||_.totalSize||0,{segments:V,legend:J}=p_(()=>{let i=u6(q,B,_.isDarkTheme);if(i.segments.length>0)return i;if(B<=0)return i;let z_=q?.children?.length?"Total":"[files]";return m6(z_,q?.path||_?.root?.path||".",B,_.isDarkTheme)},[q,B,_.isDarkTheme,_?.root?.path]),[k,f]=C(V),u=E(new Map),v=E(0);R(()=>{let i=u.current,z_=new Map(V.map((Z_)=>[Z_.key,Z_])),i_=performance.now(),r=220,o=(Z_)=>{let t=Math.min(1,(Z_-i_)/220),K_=t*(2-t),B_=V.map((Y_)=>{let V_=i.get(Y_.key)||{startAngle:Y_.startAngle,endAngle:Y_.startAngle,innerRadius:Y_.innerRadius,outerRadius:Y_.innerRadius},b_=(j0,W_)=>j0+(W_-j0)*K_,S_=b_(V_.startAngle,Y_.startAngle),U_=b_(V_.endAngle,Y_.endAngle),M_=b_(V_.innerRadius,Y_.innerRadius),u_=b_(V_.outerRadius,Y_.outerRadius);return{...Y_,d:z3(120,120,M_,u_,S_,U_)}});if(f(B_),t<1)v.current=requestAnimationFrame(o)};if(v.current)cancelAnimationFrame(v.current);return v.current=requestAnimationFrame(o),u.current=z_,()=>{if(v.current)cancelAnimationFrame(v.current)}},[V]);let A=k.length?k:V,M=B>0?Y$(B):"0 B",p=q?.name||"",g=(p&&p!=="."?p:"Total")||"Total",n=M,a=K.length>1,l=(i)=>{if(!i?.path)return;let z_=K3(_.root,i.path);if(!z_||!Array.isArray(z_.children)||z_.children.length===0)return;z((i_)=>[...i_,z_.path]),N(z_.path),j(null)},j_=()=>{if(!a)return;z((i)=>{let z_=i.slice(0,-1);return N(z_[z_.length-1]||_?.root?.path||"."),z_}),j(null)};return O`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${X?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${A.length}
                data-base-size=${B}>
                ${A.map((i)=>O`
                    <path
                        key=${i.key}
                        d=${i.d}
                        fill=${i.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===i.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(i)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(i)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>l(i)}
                    >
                        <title>${i.label} — ${Y$(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${a?" is-drill":""}`}
                    onClick=${j_}
                    role="button"
                    aria-label="Zoom out"
                >
                    <circle
                        cx="120"
                        cy="120"
                        r="24"
                        fill="var(--bg-secondary)"
                        stroke="var(--border-color)"
                        stroke-width="1"
                        class="workspace-folder-starburst-center"
                    />
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${g}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${n}</text>
                </g>
            </svg>
            ${J.length>0&&O`
                <div class="workspace-folder-starburst-legend">
                    ${J.slice(0,8).map((i)=>O`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${Y$(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&O`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function vj({mediaId:_}){let[$,j]=C(null);if(R(()=>{if(!_)return;y2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?Y$($.metadata.size):"";return O`
        <a href=${K$(_)} download=${Z} class="file-attachment"
            onClick=${(K)=>K.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&O`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function g6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:K,terminalVisible:z=!1}){let[X,L]=C(null),[q,B]=C(new Set(["."])),[V,J]=C(null),[k,f]=C(null),[u,v]=C(""),[A,M]=C(null),[p,y]=C(null),[g,n]=C(!0),[a,l]=C(!1),[j_,i]=C(null),[z_,i_]=C(()=>E2("workspaceShowHidden",!1)),[r,o]=C(!1),[Z_,t]=C(null),[K_,B_]=C(null),[Y_,J_]=C(null),[V_,b_]=C(!1),[S_,U_]=C(null),[M_,u_]=C(()=>b6()),[j0,W_]=C(()=>j3({stored:t0(M1),...$3()})),[$_,y_]=C(!1),G_=E(q),R_=E(""),L_=E(null),m_=E(0),x_=E(new Set),d_=E(null),P_=E(new Map),v_=E(_),Z0=E(Z),e_=E(null),O_=E(null),I_=E(null),N0=E(null),B0=E(null),d0=E(null),n_=E("."),E_=E(null),g_=E({path:null,dragging:!1,startX:0,startY:0}),s_=E({path:null,dragging:!1,startX:0,startY:0}),K0=E({path:null,timer:0}),y0=E(!1),F_=E(0),o_=E(new Map),c0=E(null),k_=E(null),Y0=E(null),x=E(null),d=E(null),D_=E(null),Q_=E(z_),t_=E($),_$=E(j??$),z0=E(0),x0=E(Y_),C0=E(r),W$=E(Z_),C_=E(null),o$=E({x:0,y:0}),E0=E(0),f$=E(null),h0=E(V),U0=E(k),Q$=E(null),i0=E(null),_0=E(A);v_.current=_,Z0.current=Z,R(()=>{G_.current=q},[q]),R(()=>{Q_.current=z_},[z_]),R(()=>{t_.current=$},[$]),R(()=>{_$.current=j??$},[j,$]),R(()=>{x0.current=Y_},[Y_]),R(()=>{if(typeof window>"u")return;let U=()=>{W_(j3({stored:t0(M1),...$3()}))};U();let D=()=>U(),Y=()=>U(),Q=(S)=>{if(!S||S.key===null||S.key===M1)U()};window.addEventListener("resize",D),window.addEventListener("focus",Y),window.addEventListener("storage",Q);let F=window.matchMedia?.("(pointer: coarse)"),b=window.matchMedia?.("(hover: none)"),T=(S,e)=>{if(!S)return;if(S.addEventListener)S.addEventListener("change",e);else if(S.addListener)S.addListener(e)},c=(S,e)=>{if(!S)return;if(S.removeEventListener)S.removeEventListener("change",e);else if(S.removeListener)S.removeListener(e)};return T(F,D),T(b,D),()=>{window.removeEventListener("resize",D),window.removeEventListener("focus",Y),window.removeEventListener("storage",Q),c(F,D),c(b,D)}},[]),R(()=>{let U=(D)=>{let Y=D?.detail?.path;if(!Y)return;let Q=Y.split("/"),F=[];for(let b=1;b<Q.length;b++)F.push(Q.slice(0,b).join("/"));if(F.length)B((b)=>{let T=new Set(b);T.add(".");for(let c of F)T.add(c);return T});J(Y),requestAnimationFrame(()=>{let b=document.querySelector(`[data-path="${CSS.escape(Y)}"]`);if(b)b.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",U),()=>window.removeEventListener("workspace-reveal-path",U)},[]),R(()=>{C0.current=r},[r]),R(()=>{W$.current=Z_},[Z_]),R(()=>{h0.current=V},[V]),R(()=>{U0.current=k},[k]),R(()=>{_0.current=A},[A]),R(()=>{if(typeof window>"u"||typeof document>"u")return;let U=()=>u_(b6());U();let D=window.matchMedia?.("(prefers-color-scheme: dark)"),Y=()=>U();if(D?.addEventListener)D.addEventListener("change",Y);else if(D?.addListener)D.addListener(Y);let Q=typeof MutationObserver<"u"?new MutationObserver(()=>U()):null;if(Q?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)Q?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(D?.removeEventListener)D.removeEventListener("change",Y);else if(D?.removeListener)D.removeListener(Y);Q?.disconnect()}},[]),R(()=>{if(!k)return;let U=B0.current;if(!U)return;let D=requestAnimationFrame(()=>{try{U.focus(),U.select()}catch{}});return()=>cancelAnimationFrame(D)},[k]),R(()=>{if(!$_)return;let U=(Y)=>{let Q=Y?.target;if(!(Q instanceof Element))return;if(d.current?.contains(Q))return;if(D_.current?.contains(Q))return;y_(!1)},D=(Y)=>{if(Y?.key==="Escape")y_(!1),D_.current?.focus?.()};return document.addEventListener("mousedown",U),document.addEventListener("touchstart",U,{passive:!0}),document.addEventListener("keydown",D),()=>{document.removeEventListener("mousedown",U),document.removeEventListener("touchstart",U),document.removeEventListener("keydown",D)}},[$_]);let t2=async(U)=>{l(!0),M(null),y(null);try{let D=await U4(U,20000);M(D)}catch(D){M({error:D.message||"Failed to load preview"})}finally{l(!1)}};e_.current=t2;let m0=async()=>{if(!t_.current)return;try{let U=await p2("",1,Q_.current),D=I6(U.root,G_.current,Q_.current);if(D===R_.current){n(!1);return}if(R_.current=D,L_.current=U.root,!m_.current)m_.current=requestAnimationFrame(()=>{m_.current=0,L((Y)=>Y3(Y,L_.current)),n(!1)})}catch(U){i(U.message||"Failed to load workspace"),n(!1)}},V2=async(U)=>{if(!U)return;if(x_.current.has(U))return;x_.current.add(U);try{let D=await p2(U,1,Q_.current);L((Y)=>N3(Y,U,D.root))}catch(D){i(D.message||"Failed to load workspace")}finally{x_.current.delete(U)}};O_.current=V2;let $0=P(()=>{let U=V;if(!U)return".";let D=P_.current?.get(U);if(D&&D.type==="dir")return D.path;if(U==="."||!U.includes("/"))return".";let Y=U.split("/");return Y.pop(),Y.join("/")||"."},[V]),n0=P((U)=>{let D=U?.closest?.(".workspace-row");if(!D)return null;let Y=D.dataset.path,Q=D.dataset.type;if(!Y)return null;if(Q==="dir")return Y;if(Y.includes("/")){let F=Y.split("/");return F.pop(),F.join("/")||"."}return"."},[]),l0=P((U)=>{return n0(U?.target||null)},[n0]),G0=P((U)=>{x0.current=U,J_(U)},[]),T0=P(()=>{let U=K0.current;if(U?.timer)clearTimeout(U.timer);K0.current={path:null,timer:0}},[]),$$=P((U)=>{if(!U||U==="."){T0();return}let D=P_.current?.get(U);if(!D||D.type!=="dir"){T0();return}if(G_.current?.has(U)){T0();return}if(K0.current?.path===U)return;T0();let Y=setTimeout(()=>{K0.current={path:null,timer:0},O_.current?.(U),B((Q)=>{let F=new Set(Q);return F.add(U),F})},600);K0.current={path:U,timer:Y}},[T0]),E$=P((U,D)=>{if(o$.current={x:U,y:D},E0.current)return;E0.current=requestAnimationFrame(()=>{E0.current=0;let Y=C_.current;if(!Y)return;let Q=o$.current;Y.style.transform=`translate(${Q.x+12}px, ${Q.y+12}px)`})},[]),k$=P((U)=>{if(!U)return;let Y=(P_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!Y)return;B_({path:U,label:Y})},[]),L2=P(()=>{if(B_(null),E0.current)cancelAnimationFrame(E0.current),E0.current=0;if(C_.current)C_.current.style.transform="translate(-9999px, -9999px)"},[]),r$=P((U)=>{if(!U)return".";let D=P_.current?.get(U);if(D&&D.type==="dir")return D.path;if(U==="."||!U.includes("/"))return".";let Y=U.split("/");return Y.pop(),Y.join("/")||"."},[]),Q0=P(()=>{f(null),v("")},[]),S$=P((U)=>{if(!U)return;let Y=(P_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!Y||U===".")return;f(U),v(Y)},[]),G$=P(async()=>{let U=U0.current;if(!U)return;let D=(u||"").trim();if(!D){Q0();return}let Y=P_.current?.get(U),Q=(Y?.name||U.split("/").pop()||U).trim();if(D===Q){Q0();return}try{let b=(await H4(U,D))?.path||U,T=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(Q0(),i(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:U,newPath:b,type:Y?.type||"file"}})),Y?.type==="dir")B((c)=>{let S=new Set;for(let e of c)if(e===U)S.add(b);else if(e.startsWith(`${U}/`))S.add(`${b}${e.slice(U.length)}`);else S.add(e);return S});if(J(b),Y?.type==="dir")M(null),l(!1),y(null);else e_.current?.(b);O_.current?.(T)}catch(F){i(F?.message||"Failed to rename file")}},[Q0,u]),k0=P(async(U)=>{let Q=U||".";for(let F=0;F<50;F+=1){let T=`untitled${F===0?"":`-${F}`}.md`;try{let S=(await F4(Q,T,""))?.path||(Q==="."?T:`${Q}/${T}`);if(Q&&Q!==".")B((e)=>new Set([...e,Q]));J(S),i(null),O_.current?.(Q),e_.current?.(S);return}catch(c){if(c?.status===409||c?.code==="file_exists")continue;i(c?.message||"Failed to create file");return}}i("Failed to create file (untitled name already in use).")},[]),w0=P((U)=>{if(U?.stopPropagation?.(),V_)return;let D=r$(h0.current);k0(D)},[V_,r$,k0]);R(()=>{if(typeof window>"u")return;let U=(D)=>{let Y=D?.detail?.updates||[];if(!Array.isArray(Y)||Y.length===0)return;L((c)=>{let S=c;for(let e of Y){if(!e?.root)continue;if(!S||e.path==="."||!e.path)S=e.root;else S=N3(S,e.path,e.root)}if(S)R_.current=I6(S,G_.current,Q_.current);return n(!1),S});let Q=h0.current;if(Boolean(Q)&&Y.some((c)=>{let S=c?.path||"";if(!S||S===".")return!0;return Q===S||Q.startsWith(`${S}/`)||S.startsWith(`${Q}/`)}))o_.current.clear();if(!Q||!_0.current)return;let b=P_.current?.get(Q);if(b&&b.type==="dir")return;if(Y.some((c)=>{let S=c?.path||"";if(!S||S===".")return!0;return Q===S||Q.startsWith(`${S}/`)}))e_.current?.(Q)};return window.addEventListener("workspace-update",U),()=>window.removeEventListener("workspace-update",U)},[]),d_.current=m0;let B$=E(()=>{if(typeof window>"u")return;let U=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),D=_$.current??t_.current,Y=document.visibilityState!=="hidden"&&(D||U.matches&&t_.current);c2(Y,Q_.current).catch(()=>{})}).current,A0=E(0),Q2=E(()=>{if(A0.current)clearTimeout(A0.current);A0.current=setTimeout(()=>{A0.current=0,B$()},250)}).current;R(()=>{if(t_.current)d_.current?.();Q2()},[$,j]),R(()=>{d_.current(),B$();let U=setInterval(()=>d_.current(),Tj),D=k2("previewHeight",null),Y=Number.isFinite(D)?Math.min(Math.max(D,80),600):280;if(F_.current=Y,I_.current)I_.current.style.setProperty("--preview-height",`${Y}px`);let Q=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),F=()=>Q2();if(Q.addEventListener)Q.addEventListener("change",F);else if(Q.addListener)Q.addListener(F);return document.addEventListener("visibilitychange",F),()=>{if(clearInterval(U),m_.current)cancelAnimationFrame(m_.current),m_.current=0;if(Q.removeEventListener)Q.removeEventListener("change",F);else if(Q.removeListener)Q.removeListener(F);if(document.removeEventListener("visibilitychange",F),A0.current)clearTimeout(A0.current),A0.current=0;if(E_.current)clearTimeout(E_.current),E_.current=null;c2(!1,Q_.current).catch(()=>{})}},[]);let W0=p_(()=>C6(X,q,z_),[X,q,z_]),g0=p_(()=>new Map(W0.map((U)=>[U.node.path,U.node])),[W0]),a$=p_(()=>P6(j0),[j0]);P_.current=g0;let r_=(V?P_.current.get(V):null)?.type==="dir";R(()=>{if(!V||!r_){U_(null),c0.current=null,k_.current=null;return}let U=V,D=`${z_?"hidden":"visible"}:${V}`,Y=o_.current,Q=Y.get(D);if(Q?.root){Y.delete(D),Y.set(D,Q);let T=M6(Q.root,Boolean(Q.truncated),M_);if(T)c0.current=T,k_.current=V,U_({loading:!1,error:null,payload:T});return}let F=c0.current,b=k_.current;U_({loading:!0,error:null,payload:b===V?F:null}),p2(V,fj,z_).then((T)=>{if(h0.current!==U)return;let c={root:T?.root,truncated:Boolean(T?.truncated)};Y.delete(D),Y.set(D,c);while(Y.size>Sj){let e=Y.keys().next().value;if(!e)break;Y.delete(e)}let S=M6(c.root,c.truncated,M_);c0.current=S,k_.current=V,U_({loading:!1,error:null,payload:S})}).catch((T)=>{if(h0.current!==U)return;U_({loading:!1,error:T?.message||"Failed to load folder size chart",payload:b===V?F:null})})},[V,r_,z_,M_]);let P0=Boolean(A&&A.kind==="text"&&!r_&&(!A.size||A.size<=262144)),U$=P0?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable",s0=Boolean(V&&V!=="."),A$=Boolean(V&&!r_),t$=Boolean(V&&!r_),p0=V&&r_?U1(V,z_):null,f0=P(()=>y_(!1),[]),X0=P(async(U)=>{f0();try{await U?.()}catch{}},[f0]);R(()=>{let U=Y0.current;if(x.current)x.current.dispose(),x.current=null;if(!U)return;if(U.innerHTML="",!V||r_||!A||A.error)return;let D={path:V,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},Y=l_.resolve(D)||l_.get("workspace-preview-default");if(!Y)return;let Q=Y.mount(U,D);return x.current=Q,()=>{if(x.current===Q)Q.dispose(),x.current=null;U.innerHTML=""}},[V,r_,A]);let O$=(U)=>{let D=U?.target;if(D instanceof Element)return D;return D?.parentElement||null},P$=(U)=>{return Boolean(U?.closest?.(".workspace-node-icon, .workspace-label-text"))},B2=E((U)=>{if(i0.current)clearTimeout(i0.current),i0.current=null;let Y=O$(U)?.closest?.("[data-path]");if(!Y)return;let Q=Y.dataset.path;if(Y.dataset.type==="dir"||!Q)return;if(U0.current===Q)Q0();Z0.current?.(Q)}).current,e$=E((U)=>{if(y0.current){y0.current=!1;return}let D=O$(U),Y=D?.closest?.("[data-path]");if(N0.current?.focus?.(),!Y)return;let Q=Y.dataset.path,F=Y.dataset.type,b=Boolean(D?.closest?.(".workspace-caret")),T=Boolean(D?.closest?.("button"))||Boolean(D?.closest?.("a"))||Boolean(D?.closest?.("input")),c=h0.current===Q,S=U0.current;if(S){if(S===Q)return;Q0()}let e=F==="file"&&Q$.current===Q&&!b&&!T;if(c&&!b&&!T&&Q!=="."&&!e){if(i0.current)clearTimeout(i0.current);i0.current=setTimeout(()=>{i0.current=null,S$(Q)},350);return}if(F==="dir"){if(Q$.current=null,J(Q),M(null),y(null),l(!1),!G_.current.has(Q))O_.current?.(Q);if(c&&!b)return;B((H_)=>{let H0=new Set(H_);if(H0.has(Q))H0.delete(Q);else H0.add(Q);return H0})}else{Q$.current=null,J(Q);let w_=P_.current.get(Q);if(w_)v_.current?.(w_.path,w_);e_.current?.(Q)}}).current,S0=E(()=>{R_.current="",d_.current(),Array.from(G_.current||[]).filter((D)=>D&&D!==".").forEach((D)=>O_.current?.(D))}).current,O0=E(()=>{Q$.current=null,J(null),M(null),y(null),l(!1)}).current,I0=E(()=>{i_((U)=>{let D=!U;if(typeof window<"u")c_("workspaceShowHidden",String(D));return Q_.current=D,c2(!0,D).catch(()=>{}),R_.current="",d_.current?.(),Array.from(G_.current||[]).filter((Q)=>Q&&Q!==".").forEach((Q)=>O_.current?.(Q)),D})}).current,_2=E((U)=>{if(O$(U)?.closest?.("[data-path]"))return;O0()}).current,X$=P(async(U)=>{if(!U)return;let D=U.split("/").pop()||U;if(!window.confirm(`Delete "${D}"? This cannot be undone.`))return;try{await J4(U);let Q=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(h0.current===U)O0();O_.current?.(Q),i(null)}catch(Q){M((F)=>({...F||{},error:Q.message||"Failed to delete file"}))}},[O0]),I$=P((U)=>{let D=N0.current;if(!D||!U||typeof CSS>"u"||typeof CSS.escape!=="function")return;D.querySelector(`[data-path="${CSS.escape(U)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),R$=P((U)=>{let D=W0;if(!D||D.length===0)return;let Y=V?D.findIndex((Q)=>Q.node.path===V):-1;if(U.key==="ArrowDown"){U.preventDefault();let Q=Math.min(Y+1,D.length-1),F=D[Q];if(!F)return;if(J(F.node.path),F.node.type!=="dir")v_.current?.(F.node.path,F.node),e_.current?.(F.node.path);else M(null),l(!1),y(null);I$(F.node.path);return}if(U.key==="ArrowUp"){U.preventDefault();let Q=Y<=0?0:Y-1,F=D[Q];if(!F)return;if(J(F.node.path),F.node.type!=="dir")v_.current?.(F.node.path,F.node),e_.current?.(F.node.path);else M(null),l(!1),y(null);I$(F.node.path);return}if(U.key==="ArrowRight"&&Y>=0){let Q=D[Y];if(Q?.node?.type==="dir"&&!q.has(Q.node.path))U.preventDefault(),O_.current?.(Q.node.path),B((F)=>new Set([...F,Q.node.path]));return}if(U.key==="ArrowLeft"&&Y>=0){let Q=D[Y];if(Q?.node?.type==="dir"&&q.has(Q.node.path))U.preventDefault(),B((F)=>{let b=new Set(F);return b.delete(Q.node.path),b});return}if(U.key==="Enter"&&Y>=0){U.preventDefault();let Q=D[Y];if(!Q)return;let F=Q.node.path;if(Q.node.type==="dir"){if(!G_.current.has(F))O_.current?.(F);B((T)=>{let c=new Set(T);if(c.has(F))c.delete(F);else c.add(F);return c}),M(null),y(null),l(!1)}else v_.current?.(F,Q.node),e_.current?.(F);return}if((U.key==="Delete"||U.key==="Backspace")&&Y>=0){let Q=D[Y];if(!Q||Q.node.type==="dir")return;U.preventDefault(),X$(Q.node.path);return}if(U.key==="Escape")U.preventDefault(),O0()},[O0,X$,q,W0,I$,V]),v$=P((U)=>{let D=O$(U),Y=D?.closest?.(".workspace-row");if(!Y)return;let Q=Y.dataset.type,F=Y.dataset.path;if(!F||F===".")return;if(U0.current===F)return;let b=U?.touches?.[0];if(!b)return;if(g_.current={path:P$(D)?F:null,dragging:!1,startX:b.clientX,startY:b.clientY},Q!=="file")return;if(E_.current)clearTimeout(E_.current);E_.current=setTimeout(()=>{if(E_.current=null,g_.current?.dragging)return;X$(F)},600)},[X$]),u$=P(()=>{if(E_.current)clearTimeout(E_.current),E_.current=null;let U=g_.current;if(U?.dragging&&U.path){let D=x0.current||$0(),Y=f$.current;if(typeof Y==="function")Y(U.path,D)}g_.current={path:null,dragging:!1,startX:0,startY:0},z0.current=0,o(!1),t(null),G0(null),T0(),L2()},[$0,L2,G0,T0]),F0=P((U)=>{let D=g_.current,Y=U?.touches?.[0];if(!Y||!D?.path){if(E_.current)clearTimeout(E_.current),E_.current=null;return}let Q=Math.abs(Y.clientX-D.startX),F=Math.abs(Y.clientY-D.startY),b=Q>8||F>8;if(b&&E_.current)clearTimeout(E_.current),E_.current=null;if(!D.dragging&&b)D.dragging=!0,o(!0),t("move"),k$(D.path);if(D.dragging){U.preventDefault(),E$(Y.clientX,Y.clientY);let T=document.elementFromPoint(Y.clientX,Y.clientY),c=n0(T)||$0();if(x0.current!==c)G0(c);$$(c)}},[n0,$0,k$,E$,G0,$$]),F$=E((U)=>{U.preventDefault();let D=I_.current;if(!D)return;let Y=U.clientY,Q=F_.current||280,F=U.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let b=Y,T=(S)=>{b=S.clientY;let e=D.clientHeight-80,w_=Math.min(Math.max(Q-(S.clientY-Y),80),e);D.style.setProperty("--preview-height",`${w_}px`),F_.current=w_},c=()=>{let S=D.clientHeight-80,e=Math.min(Math.max(Q-(b-Y),80),S);F_.current=e,F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",c_("previewHeight",String(Math.round(e))),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",c)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",c)}).current,b$=E((U)=>{U.preventDefault();let D=I_.current;if(!D)return;let Y=U.touches[0];if(!Y)return;let Q=Y.clientY,F=F_.current||280,b=U.currentTarget;b.classList.add("dragging"),document.body.style.userSelect="none";let T=(S)=>{let e=S.touches[0];if(!e)return;S.preventDefault();let w_=D.clientHeight-80,H_=Math.min(Math.max(F-(e.clientY-Q),80),w_);D.style.setProperty("--preview-height",`${H_}px`),F_.current=H_},c=()=>{b.classList.remove("dragging"),document.body.style.userSelect="",c_("previewHeight",String(Math.round(F_.current||F))),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c)}).current,M$=async()=>{if(!V)return;try{let U=await O4(V);if(U.media_id)y(U.media_id)}catch(U){M((D)=>({...D||{},error:U.message||"Failed to attach"}))}},H$=async()=>{if(!V||r_)return;await X$(V)},q$=(U)=>{return Array.from(U?.dataTransfer?.types||[]).includes("Files")},$2=P((U)=>{if(!q$(U))return;if(U.preventDefault(),z0.current+=1,!C0.current)o(!0);t("upload");let D=l0(U)||$0();G0(D),$$(D)},[$0,l0,G0,$$]),R0=P((U)=>{if(!q$(U))return;if(U.preventDefault(),U.dataTransfer)U.dataTransfer.dropEffect="copy";if(!C0.current)o(!0);if(W$.current!=="upload")t("upload");let D=l0(U)||$0();if(x0.current!==D)G0(D);$$(D)},[$0,l0,G0,$$]),o0=P((U)=>{if(!q$(U))return;if(U.preventDefault(),z0.current=Math.max(0,z0.current-1),z0.current===0)o(!1),t(null),G0(null),T0()},[G0,T0]),V$=P(async(U,D=".")=>{let Y=Array.from(U||[]);if(Y.length===0)return;let Q=D&&D!==""?D:".",F=Q!=="."?Q:"workspace root";b_(!0);try{let b=null;for(let T of Y)try{b=await Q1(T,Q)}catch(c){let S=c?.status,e=c?.code;if(S===409||e==="file_exists"){let w_=T?.name||"file";if(!window.confirm(`"${w_}" already exists in ${F}. Overwrite?`))continue;b=await Q1(T,Q,{overwrite:!0})}else throw c}if(b?.path)Q$.current=b.path,J(b.path),e_.current?.(b.path);O_.current?.(Q)}catch(b){i(b.message||"Failed to upload file")}finally{b_(!1)}},[]),m$=P(async(U,D)=>{if(!U)return;let Y=P_.current?.get(U);if(!Y)return;let Q=D&&D!==""?D:".",F=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(Q===F)return;try{let T=(await D4(U,Q))?.path||U;if(Y.type==="dir")B((c)=>{let S=new Set;for(let e of c)if(e===U)S.add(T);else if(e.startsWith(`${U}/`))S.add(`${T}${e.slice(U.length)}`);else S.add(e);return S});if(J(T),Y.type==="dir")M(null),l(!1),y(null);else e_.current?.(T);O_.current?.(F),O_.current?.(Q)}catch(b){i(b?.message||"Failed to move entry")}},[]);f$.current=m$;let g$=P(async(U)=>{if(!q$(U))return;U.preventDefault(),z0.current=0,o(!1),t(null),J_(null),T0();let D=Array.from(U?.dataTransfer?.files||[]);if(D.length===0)return;let Y=x0.current||l0(U)||$0();await V$(D,Y)},[$0,l0,V$]),p$=P((U)=>{if(U?.stopPropagation?.(),V_)return;let D=U?.currentTarget?.dataset?.uploadTarget||".";n_.current=D,d0.current?.click()},[V_]),D$=P(()=>{if(V_)return;let U=h0.current,D=U?P_.current?.get(U):null;n_.current=D?.type==="dir"?D.path:".",d0.current?.click()},[V_]),c$=P(()=>{X0(()=>w0(null))},[X0,w0]),J$=P(()=>{X0(()=>D$())},[X0,D$]),U2=P(()=>{X0(()=>S0())},[X0,S0]),I2=P(()=>{X0(()=>I0())},[X0,I0]),j2=P(()=>{if(!V||!P0)return;X0(()=>Z0.current?.(V,A))},[X0,V,P0,A]),q_=P(()=>{if(!V||V===".")return;X0(()=>S$(V))},[X0,V,S$]),O2=P(()=>{if(!V||r_)return;X0(()=>H$())},[X0,V,r_,H$]),b2=P(()=>{if(!V||r_)return;X0(()=>M$())},[X0,V,r_,M$]),M2=P(()=>{if(!p0)return;if(f0(),typeof window<"u")window.open(p0,"_blank","noopener")},[f0,p0]),Z2=P(()=>{f0(),N?.()},[f0,N]),x2=P(()=>{f0(),K?.()},[f0,K]),C2=P((U)=>{if(!U||U.button!==0)return;let D=U.currentTarget;if(!D||!D.dataset)return;let Y=D.dataset.path;if(!Y||Y===".")return;if(U0.current===Y)return;let Q=O$(U);if(Q?.closest?.("button, a, input, .workspace-caret"))return;if(!P$(Q))return;U.preventDefault(),s_.current={path:Y,dragging:!1,startX:U.clientX,startY:U.clientY};let F=(T)=>{let c=s_.current;if(!c?.path)return;let S=Math.abs(T.clientX-c.startX),e=Math.abs(T.clientY-c.startY),w_=S>4||e>4;if(!c.dragging&&w_)c.dragging=!0,y0.current=!0,o(!0),t("move"),k$(c.path),E$(T.clientX,T.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(c.dragging){T.preventDefault(),E$(T.clientX,T.clientY);let H_=document.elementFromPoint(T.clientX,T.clientY),H0=n0(H_)||$0();if(x0.current!==H0)G0(H0);$$(H0)}},b=()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",b);let T=s_.current;if(T?.dragging&&T.path){let c=x0.current||$0(),S=f$.current;if(typeof S==="function")S(T.path,c)}s_.current={path:null,dragging:!1,startX:0,startY:0},z0.current=0,o(!1),t(null),G0(null),T0(),L2(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{y0.current=!1},0)};document.addEventListener("mousemove",F),document.addEventListener("mouseup",b)},[n0,$0,k$,E$,L2,G0,$$,T0]),T2=P(async(U)=>{let D=Array.from(U?.target?.files||[]);if(D.length===0)return;let Y=n_.current||".";if(await V$(D,Y),n_.current=".",U?.target)U.target.value=""},[V$]);return O`
        <aside
            class=${`workspace-sidebar${r?" workspace-drop-active":""}`}
            data-workspace-scale=${j0}
            ref=${I_}
            onDragEnter=${$2}
            onDragOver=${R0}
            onDragLeave=${o0}
            onDrop=${g$}
        >
            <input type="file" multiple style="display:none" ref=${d0} onChange=${T2} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${D_}
                            class=${`workspace-menu-button${$_?" active":""}`}
                            onClick=${(U)=>{U.stopPropagation(),y_((D)=>!D)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${$_?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${$_&&O`
                            <div class="workspace-menu-dropdown" ref=${d} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${c$} disabled=${V_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${J$} disabled=${V_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${U2}>Refresh tree</button>
                                <button class=${`workspace-menu-item${z_?" active":""}`} role="menuitem" onClick=${I2}>
                                    ${z_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${V&&O`<div class="workspace-menu-separator"></div>`}
                                ${V&&!r_&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${j2} disabled=${!P0}>Open in editor</button>
                                `}
                                ${s0&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${q_}>Rename selected</button>
                                `}
                                ${t$&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b2}>Download selected file</button>
                                `}
                                ${p0&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M2}>Download selected folder (zip)</button>
                                `}
                                ${A$&&O`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${O2}>Delete selected file</button>
                                `}

                                ${(N||K)&&O`<div class="workspace-menu-separator"></div>`}
                                ${N&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Z2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${K&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x2}>
                                        ${z?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${w0} title="New file" disabled=${V_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${S0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${_2}>
                ${V_&&O`<div class="workspace-drop-hint">Uploading…</div>`}
                ${g&&O`<div class="workspace-loading">Loading…</div>`}
                ${j_&&O`<div class="workspace-error">${j_}</div>`}
                ${X&&O`
                    <div
                        class="workspace-tree-list"
                        ref=${N0}
                        tabIndex="0"
                        onClick=${e$}
                        onDblClick=${B2}
                        onKeyDown=${R$}
                        onTouchStart=${v$}
                        onTouchEnd=${u$}
                        onTouchMove=${F0}
                        onTouchCancel=${u$}
                    >
                        ${W0.map(({node:U,depth:D})=>{let Y=U.type==="dir",Q=U.path===V,F=U.path===k,b=Y&&q.has(U.path),T=Y_&&U.path===Y_,c=Array.isArray(U.children)&&U.children.length>0?U.children.length:Number(U.child_count)||0;return O`
                                <div
                                    key=${U.path}
                                    class=${`workspace-row${Q?" selected":""}${T?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+D*a$.indentPx}px`}}
                                    data-path=${U.path}
                                    data-type=${U.type}
                                    onMouseDown=${C2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${Y?b?O`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:O`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${Y?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${Y?O`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:O`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${F?O`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${B0}
                                                value=${u}
                                                onInput=${(S)=>v(S?.target?.value||"")}
                                                onKeyDown=${(S)=>{if(S.key==="Enter")S.preventDefault(),G$();else if(S.key==="Escape")S.preventDefault(),Q0()}}
                                                onBlur=${Q0}
                                                onClick=${(S)=>S.stopPropagation()}
                                            />
                                        `:O`<span class="workspace-label"><span class="workspace-label-text">${U.name}</span></span>`}
                                    ${Y&&!b&&c>0&&O`
                                        <span class="workspace-count">${c}</span>
                                    `}
                                    ${Y&&O`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${U.path}
                                            title="Upload files to this folder"
                                            onClick=${p$}
                                            disabled=${V_}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 8 12 3 17 8"/>
                                                <line x1="12" y1="3" x2="12" y2="15"/>
                                            </svg>
                                        </button>
                                    `}
                                </div>
                            `})}
                    </div>
                `}
            </div>
            ${V&&O`
                <div class="workspace-preview-splitter-h" onMouseDown=${F$} onTouchStart=${b$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${w0} title="New file" disabled=${V_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!r_&&O`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>P0&&Z0.current?.(V,A)}
                                    title=${U$}
                                    disabled=${!P0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${H$}
                                    title="Delete file"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            `}
                            ${r_?O`
                                    <button class="workspace-download" onClick=${D$}
                                        title="Upload files to this folder" disabled=${V_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${U1(V,z_)}
                                        title="Download folder as zip" onClick=${(U)=>U.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:O`<button class="workspace-download" onClick=${M$} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${a&&O`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&O`<div class="workspace-error">${A.error}</div>`}
                    ${r_&&O`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${S_?.loading&&O`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${S_?.error&&O`<div class="workspace-error">${S_.error}</div>`}
                        ${S_?.payload&&S_.payload.segments?.length>0&&O`
                            <${Rj} payload=${S_.payload} />
                        `}
                        ${S_?.payload&&(!S_.payload.segments||S_.payload.segments.length===0)&&O`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!r_&&O`
                        <div class="workspace-preview-body" ref=${Y0}></div>
                    `}
                    ${p&&O`
                        <div class="workspace-download-card">
                            <${vj} mediaId=${p} />
                        </div>
                    `}
                </div>
            `}
            ${K_&&O`
                <div class="workspace-drag-ghost" ref=${C_}>${K_.label}</div>
            `}
        </aside>
    `}var uj=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,mj=/\.(csv|tsv)$/i,gj=/\.pdf$/i,pj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,p6=/\.drawio(\.xml|\.svg|\.png)?$/i;function c6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:z,onTogglePreview:X,previewTabs:L,onToggleDock:q,dockVisible:B,onToggleZen:V,zenMode:J}){let[k,f]=C(null),u=E(null);R(()=>{if(!k)return;let y=(g)=>{if(g.type==="keydown"&&g.key!=="Escape")return;f(null)};return document.addEventListener("click",y),document.addEventListener("keydown",y),()=>{document.removeEventListener("click",y),document.removeEventListener("keydown",y)}},[k]),R(()=>{let y=(g)=>{if(g.ctrlKey&&g.key==="Tab"){if(g.preventDefault(),!_.length)return;let n=_.findIndex((a)=>a.id===$);if(g.shiftKey){let a=_[(n-1+_.length)%_.length];j?.(a.id)}else{let a=_[(n+1)%_.length];j?.(a.id)}return}if((g.ctrlKey||g.metaKey)&&g.key==="w"){let n=document.querySelector(".editor-pane");if(n&&n.contains(document.activeElement)){if(g.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[_,$,j,Z]);let v=P((y,g)=>{if(y.button===1){y.preventDefault(),Z?.(g);return}if(y.button===0)j?.(g)},[j,Z]),A=P((y,g)=>{y.preventDefault(),f({id:g,x:y.clientX,y:y.clientY})},[]),M=P((y)=>{y.preventDefault(),y.stopPropagation()},[]),p=P((y,g)=>{y.preventDefault(),y.stopPropagation(),Z?.(g)},[Z]);if(R(()=>{if(!$||!u.current)return;let y=u.current.querySelector(".tab-item.active");if(y)y.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return O`
        <div class="tab-strip" ref=${u} role="tablist">
            ${_.map((y)=>O`
                <div
                    key=${y.id}
                    class=${`tab-item${y.id===$?" active":""}${y.dirty?" dirty":""}${y.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${y.id===$}
                    title=${y.path}
                    onMouseDown=${(g)=>v(g,y.id)}
                    onContextMenu=${(g)=>A(g,y.id)}
                >
                    ${y.pinned&&O`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${y.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${M}
                        onClick=${(g)=>p(g,y.id)}
                        title=${y.dirty?"Unsaved changes":"Close"}
                        aria-label=${y.dirty?"Unsaved changes":`Close ${y.label}`}
                    >
                        ${y.dirty?O`<span class="tab-dirty-dot" aria-hidden="true"></span>`:O`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${q&&O`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${B?" active":""}`}
                    onClick=${q}
                    title=${`${B?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${B?"Hide":"Show"} terminal`}
                    aria-pressed=${B?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${V&&O`
                <button
                    class=${`tab-strip-zen-toggle${J?" active":""}`}
                    onClick=${V}
                    title=${`${J?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${J?"Exit":"Enter"} zen mode`}
                    aria-pressed=${J?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${J?O`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:O`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${k&&O`
            <div class="tab-context-menu" style=${{left:k.x+"px",top:k.y+"px"}}>
                <button onClick=${()=>{Z?.(k.id),f(null)}}>Close</button>
                <button onClick=${()=>{N?.(k.id),f(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),f(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(k.id),f(null)}}>
                    ${_.find((y)=>y.id===k.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${X&&/\.(md|mdx|markdown)$/i.test(k.id)&&O`
                    <hr />
                    <button onClick=${()=>{X(k.id),f(null)}}>
                        ${L?.has(k.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${uj.test(k.id)&&O`
                    <hr />
                    <button onClick=${()=>{let y="/workspace/raw?path="+encodeURIComponent(k.id),g=k.id.split("/").pop()||"document",n="/office-viewer/?url="+encodeURIComponent(y)+"&name="+encodeURIComponent(g);window.open(n,"_blank","noopener"),f(null)}}>Open in New Tab</button>
                `}
                ${mj.test(k.id)&&O`
                    <hr />
                    <button onClick=${()=>{let y="/csv-viewer/?path="+encodeURIComponent(k.id);window.open(y,"_blank","noopener"),f(null)}}>Open in New Tab</button>
                `}
                ${gj.test(k.id)&&O`
                    <hr />
                    <button onClick=${()=>{let y="/workspace/raw?path="+encodeURIComponent(k.id);window.open(y,"_blank","noopener"),f(null)}}>Open in New Tab</button>
                `}
                ${pj.test(k.id)&&!p6.test(k.id)&&O`
                    <hr />
                    <button onClick=${()=>{let y="/image-viewer/?path="+encodeURIComponent(k.id);window.open(y,"_blank","noopener"),f(null)}}>Open in New Tab</button>
                `}
                ${p6.test(k.id)&&O`
                    <hr />
                    <button onClick=${()=>{let y="/drawio/edit?path="+encodeURIComponent(k.id);window.open(y,"_blank","noopener"),f(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var cj=400,W3=60,h6=220,G3="mdPreviewHeight";function hj(){try{let _=localStorage.getItem(G3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=W3?$:h6}catch{return h6}}function i6({getContent:_,path:$,onClose:j}){let[Z,N]=C(""),[K,z]=C(hj),X=E(null),L=E(null),q=E(""),B=E(_);return B.current=_,R(()=>{let k=()=>{let u=B.current?.()||"";if(u===q.current)return;q.current=u;try{let v=e0(u,null,{sanitize:!1});N(v)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};k();let f=setInterval(k,cj);return()=>clearInterval(f)},[]),R(()=>{if(X.current&&Z)C$(X.current).catch(()=>{})},[Z]),O`
        <div
            class="md-preview-splitter"
            onMouseDown=${(k)=>{k.preventDefault();let f=k.clientY,u=L.current?.offsetHeight||K,v=L.current?.parentElement,A=v?v.offsetHeight*0.7:500,M=k.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let p=(g)=>{let n=Math.min(Math.max(u-(g.clientY-f),W3),A);z(n)},y=()=>{M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(G3,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",p),document.addEventListener("mouseup",y)}}
            onTouchStart=${(k)=>{k.preventDefault();let f=k.touches[0];if(!f)return;let u=f.clientY,v=L.current?.offsetHeight||K,A=L.current?.parentElement,M=A?A.offsetHeight*0.7:500,p=k.currentTarget;p.classList.add("dragging"),document.body.style.userSelect="none";let y=(n)=>{let a=n.touches[0];if(!a)return;n.preventDefault();let l=Math.min(Math.max(v-(a.clientY-u),W3),M);z(l)},g=()=>{p.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(G3,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g),document.removeEventListener("touchcancel",g)};document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("touchend",g),document.addEventListener("touchcancel",g)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:K+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${j} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${X}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function l6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=E(_);K.current=_;let z=E($);z.current=$;let X=E(j);X.current=j;let L=E(Z);L.current=Z,R(()=>{X.current();let q=new O1((V,J)=>K.current(V,J),(V)=>z.current(V),{chatJid:N});q.connect();let B=()=>{q.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),q.disconnect()}},[N])}function d6(){let[_,$]=C(!1),[j,Z]=C("default"),N=E(!1);R(()=>{let L=E2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),R(()=>{N.current=_},[_]);let K=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),z=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let q=await K();if(Z(q||"default"),q!=="granted"){N.current=!1,$(!1),c_("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),c_("notificationsEnabled",String(L))},[K]),X=P((L,q)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(L,{body:q});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:X}}var a2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function n6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=C(null),[K,z]=C(!1),X=E(!1),L=E(null),q=E(!1),B=E(null),V=E(null),J=E(0);R(()=>{X.current=K},[K]),R(()=>{V.current=Z},[Z]),R(()=>{J.current+=1,V.current=null,B.current=null,q.current=!1,X.current=!1,N(null),z(!1)},[j]);let k=P(async(v=null)=>{let A=J.current;try{if(v){let M=await j4(v,50,0,j);if(A!==J.current)return;N(M.posts),z(!1)}else{let M=await u2(10,null,j);if(A!==J.current)return;N(M.posts),z(M.has_more)}}catch(M){if(A!==J.current)return;console.error("Failed to load posts:",M)}},[j]),f=P(async()=>{let v=J.current;try{let A=await u2(10,null,j);if(v!==J.current)return;N((M)=>{if(!M||M.length===0)return A.posts;return a2([...A.posts,...M])}),z((M)=>M||A.has_more)}catch(A){if(v!==J.current)return;console.error("Failed to refresh timeline:",A)}},[j]),u=P(async(v={})=>{let A=J.current,M=V.current;if(!M||M.length===0)return;if(q.current)return;let{preserveScroll:p=!0,preserveMode:y="top",allowRepeat:g=!1}=v,n=(j_)=>{if(!p){j_();return}if(y==="top")$(j_);else _(j_)},l=M.slice().sort((j_,i)=>j_.id-i.id)[0]?.id;if(!Number.isFinite(l))return;if(!g&&B.current===l)return;q.current=!0,B.current=l;try{let j_=await u2(10,l,j);if(A!==J.current)return;if(j_.posts.length>0)n(()=>{N((i)=>a2([...j_.posts,...i||[]])),z(j_.has_more)});else z(!1)}catch(j_){if(A!==J.current)return;console.error("Failed to load more posts:",j_)}finally{if(A===J.current)q.current=!1}},[j,_,$]);return R(()=>{L.current=u},[u]),{posts:Z,setPosts:N,hasMore:K,setHasMore:z,hasMoreRef:X,loadPosts:k,refreshTimeline:f,loadMore:u,loadMoreRef:L,loadingMoreRef:q,lastBeforeIdRef:B}}function s6(){let[_,$]=C(null),[j,Z]=C({text:"",totalLines:0}),[N,K]=C(""),[z,X]=C({text:"",totalLines:0}),[L,q]=C(null),[B,V]=C(null),[J,k]=C(null),f=E(null),u=E(0),v=E(!1),A=E(""),M=E(""),p=E(null),y=E(null),g=E(null),n=E(null),a=E(!1),l=E(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:z,setAgentThought:X,pendingRequest:L,setPendingRequest:q,currentTurnId:B,setCurrentTurnId:V,steerQueuedTurnId:J,setSteerQueuedTurnId:k,lastAgentEventRef:f,lastSilenceNoticeRef:u,isAgentRunningRef:v,draftBufferRef:A,thoughtBufferRef:M,pendingRequestRef:p,stalledPostIdRef:y,currentTurnIdRef:g,steerQueuedTurnIdRef:n,thoughtExpandedRef:a,draftExpandedRef:l}}function o6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=E((B)=>{B.preventDefault();let V=_.current;if(!V)return;let J=B.clientX,k=$.current||280,f=B.currentTarget;f.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=J,v=(M)=>{u=M.clientX;let p=Math.min(Math.max(k+(M.clientX-J),160),600);V.style.setProperty("--sidebar-width",`${p}px`),$.current=p},A=()=>{let M=Math.min(Math.max(k+(u-J),160),600);$.current=M,f.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",c_("sidebarWidth",String(Math.round(M))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",A)}).current,K=E((B)=>{B.preventDefault();let V=_.current;if(!V)return;let J=B.touches[0];if(!J)return;let k=J.clientX,f=$.current||280,u=B.currentTarget;u.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let v=(M)=>{let p=M.touches[0];if(!p)return;M.preventDefault();let y=Math.min(Math.max(f+(p.clientX-k),160),600);V.style.setProperty("--sidebar-width",`${y}px`),$.current=y},A=()=>{u.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",c_("sidebarWidth",String(Math.round($.current||f))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",A),document.removeEventListener("touchcancel",A)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",A),document.addEventListener("touchcancel",A)}).current,z=E((B)=>{B.preventDefault();let V=_.current;if(!V)return;let J=B.clientX,k=j.current||$.current||280,f=B.currentTarget;f.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=J,v=(M)=>{u=M.clientX;let p=Math.min(Math.max(k+(M.clientX-J),200),800);V.style.setProperty("--editor-width",`${p}px`),j.current=p},A=()=>{let M=Math.min(Math.max(k+(u-J),200),800);j.current=M,f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",c_("editorWidth",String(Math.round(M))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",A)}).current,X=E((B)=>{B.preventDefault();let V=_.current;if(!V)return;let J=B.touches[0];if(!J)return;let k=J.clientX,f=j.current||$.current||280,u=B.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let v=(M)=>{let p=M.touches[0];if(!p)return;M.preventDefault();let y=Math.min(Math.max(f+(p.clientX-k),200),800);V.style.setProperty("--editor-width",`${y}px`),j.current=y},A=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",c_("editorWidth",String(Math.round(j.current||f))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",A),document.removeEventListener("touchcancel",A)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",A),document.addEventListener("touchcancel",A)}).current,L=E((B)=>{B.preventDefault();let V=_.current;if(!V)return;let J=B.clientY,k=Z?.current||200,f=B.currentTarget;f.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let u=J,v=(M)=>{u=M.clientY;let p=Math.min(Math.max(k-(M.clientY-J),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${p}px`),Z)Z.current=p;window.dispatchEvent(new CustomEvent("dock-resize"))},A=()=>{let M=Math.min(Math.max(k-(u-J),100),window.innerHeight*0.5);if(Z)Z.current=M;f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",c_("dockHeight",String(Math.round(M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",A)}).current,q=E((B)=>{B.preventDefault();let V=_.current;if(!V)return;let J=B.touches[0];if(!J)return;let k=J.clientY,f=Z?.current||200,u=B.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let v=(M)=>{let p=M.touches[0];if(!p)return;M.preventDefault();let y=Math.min(Math.max(f-(p.clientY-k),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${y}px`),Z)Z.current=y;window.dispatchEvent(new CustomEvent("dock-resize"))},A=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",c_("dockHeight",String(Math.round(Z?.current||f))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",A),document.removeEventListener("touchcancel",A)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",A),document.addEventListener("touchcancel",A)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:X,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:q}}function r6({onTabClosed:_}={}){let $=E(_);$.current=_;let[j,Z]=C(()=>h_.getTabs()),[N,K]=C(()=>h_.getActiveId()),[z,X]=C(()=>h_.getTabs().length>0);R(()=>{return h_.onChange((y,g)=>{Z(y),K(g),X(y.length>0)})},[]);let[L,q]=C(()=>new Set),B=P((y)=>{q((g)=>{let n=new Set(g);if(n.has(y))n.delete(y);else n.add(y);return n})},[]),V=P((y)=>{q((g)=>{if(!g.has(y))return g;let n=new Set(g);return n.delete(y),n})},[]),J=P((y,g={})=>{if(!y)return;let n={path:y,mode:"edit"};try{if(!l_.resolve(n)){if(!l_.get("editor")){console.warn(`[openEditor] No pane handler for: ${y}`);return}}}catch(l){console.warn(`[openEditor] paneRegistry.resolve() error for "${y}":`,l)}let a=typeof g?.label==="string"&&g.label.trim()?g.label.trim():void 0;h_.open(y,a)},[]),k=P(()=>{let y=h_.getActiveId();if(y){let g=h_.get(y);if(g?.dirty){if(!window.confirm(`"${g.label}" has unsaved changes. Close anyway?`))return}h_.close(y),V(y),$.current?.(y)}},[V]),f=P((y)=>{let g=h_.get(y);if(g?.dirty){if(!window.confirm(`"${g.label}" has unsaved changes. Close anyway?`))return}h_.close(y),V(y),$.current?.(y)},[V]),u=P((y)=>{h_.activate(y)},[]),v=P((y)=>{let g=h_.getTabs().filter((l)=>l.id!==y&&!l.pinned),n=g.filter((l)=>l.dirty).length;if(n>0){if(!window.confirm(`${n} unsaved tab${n>1?"s":""} will be closed. Continue?`))return}let a=g.map((l)=>l.id);h_.closeOthers(y),a.forEach((l)=>{V(l),$.current?.(l)})},[V]),A=P(()=>{let y=h_.getTabs().filter((a)=>!a.pinned),g=y.filter((a)=>a.dirty).length;if(g>0){if(!window.confirm(`${g} unsaved tab${g>1?"s":""} will be closed. Continue?`))return}let n=y.map((a)=>a.id);h_.closeAll(),n.forEach((a)=>{V(a),$.current?.(a)})},[V]),M=P((y)=>{h_.togglePin(y)},[]),p=P(()=>{let y=h_.getActiveId();if(y)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:y}}))},[]);return R(()=>{let y=(g)=>{let{oldPath:n,newPath:a,type:l}=g.detail||{};if(!n||!a)return;if(l==="dir"){for(let j_ of h_.getTabs())if(j_.path===n||j_.path.startsWith(`${n}/`)){let i=`${a}${j_.path.slice(n.length)}`;h_.rename(j_.id,i)}}else h_.rename(n,a)};return window.addEventListener("workspace-file-renamed",y),()=>window.removeEventListener("workspace-file-renamed",y)},[]),R(()=>{let y=(g)=>{if(h_.hasUnsaved())g.preventDefault(),g.returnValue=""};return window.addEventListener("beforeunload",y),()=>window.removeEventListener("beforeunload",y)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:J,closeEditor:k,handleTabClose:f,handleTabActivate:u,handleTabCloseOthers:v,handleTabCloseAll:A,handleTabTogglePin:M,handleTabTogglePreview:B,revealInExplorer:p}}function X3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var q3=X3("warning",30000),a6=X3("finalize",120000),V3=X3("refresh",30000),t6=30000;function e6(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function _9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function $9(_=30000){let[,$]=C(0);R(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function L3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function j9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function X2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function Q3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||z)}function Z9(_,$={}){if(X2($))return null;if(Q3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:ij(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function N9(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function K9(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function Y9(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function z9(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function q2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function W9(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function ij(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function C1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function B3(_){return String(_||"").trim()||"web:default"}function G9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function X9(_={}){return X2(_)&&Q3(_)}function lj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function dj(_={},$={}){if(!X9(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=lj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function q9(_={}){if(!X9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of N)$.clearTimeout?.(V);N.clear()},z=()=>{Z=0,dj({window:$,document:j})},X=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},L=()=>{X();for(let V of[80,220,420]){let J=$.setTimeout?.(()=>{N.delete(J),X()},V);if(J!=null)N.add(J)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},B=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",L,!0),B?.addEventListener?.("resize",L),B?.addEventListener?.("scroll",L),()=>{K(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",L,!0),B?.removeEventListener?.("resize",L),B?.removeEventListener?.("scroll",L)}}function nj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function z$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:nj($,j)}var sj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function V9(_){return sj.has(String(_||"").trim())}function oj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function L9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(oj(_),{detail:Z})),!0}var rj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Q9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(X2({window:j,navigator:Z}))};N();let z=rj.map((X)=>{try{return j.matchMedia?.(X)??null}catch{return null}}).filter(Boolean).map((X)=>{if(typeof X.addEventListener==="function")return X.addEventListener("change",N),()=>X.removeEventListener("change",N);if(typeof X.addListener==="function")return X.addListener(N),()=>X.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let X of z)X();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function B9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var F3="piclaw_btw_session";function KZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function YZ(){let _=t0(F3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var J9=Z4,y9=K4,zZ=z4,E9=V4,k9=L4,w9=W4,U3=z$(a0,"getAgentContext",null),WZ=z$(a0,"getAgentModels",{current:null,models:[]}),GZ=z$(a0,"getActiveChatAgents",{chats:[]}),O3=z$(a0,"getChatBranches",{chats:[]}),XZ=z$(a0,"renameChatBranch",null),qZ=z$(a0,"pruneChatBranch",null),A9=z$(a0,"restoreChatBranch",null),VZ=z$(a0,"getAgentQueueState",{count:0}),LZ=z$(a0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),QZ=z$(a0,"removeAgentQueueItem",{removed:!1}),BZ=z$(a0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});l_.register(v4);l_.register(d4);l_.register(l4);l_.register(n4);l_.register(s4);l_.register(o4);l_.register(a4);l_.register(t4);l_.register(_3);u4();l_.register(c4);l_.register(h4);function UZ({locationParams:_}){let $=p_(()=>{let G=_.get("chat_jid");return G&&G.trim()?G.trim():"web:default"},[_]),j=p_(()=>{let G=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Z=p_(()=>{let G=(_.get("branch_loader")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),N=p_(()=>{let G=_.get("branch_source_chat_jid");return G&&G.trim()?G.trim():$},[$,_]),[K,z]=C("disconnected"),[X,L]=C(()=>X2()),[q,B]=C(null),[V,J]=C(null),[k,f]=C(!1),[u,v]=C("current"),[A,M]=C([]),[p,y]=C([]),[g,n]=C(null),{agentStatus:a,setAgentStatus:l,agentDraft:j_,setAgentDraft:i,agentPlan:z_,setAgentPlan:i_,agentThought:r,setAgentThought:o,pendingRequest:Z_,setPendingRequest:t,currentTurnId:K_,setCurrentTurnId:B_,steerQueuedTurnId:Y_,setSteerQueuedTurnId:J_,lastAgentEventRef:V_,lastSilenceNoticeRef:b_,isAgentRunningRef:S_,draftBufferRef:U_,thoughtBufferRef:M_,pendingRequestRef:u_,stalledPostIdRef:j0,currentTurnIdRef:W_,steerQueuedTurnIdRef:$_,thoughtExpandedRef:y_,draftExpandedRef:G_}=s6(),[R_,L_]=C({}),[m_,x_]=C(null),[d_,P_]=C(null),[v_,Z0]=C(!1),[e_,O_]=C(null),[I_,N0]=C([]),[B0,d0]=C([]),[n_,E_]=C(null),[g_,s_]=C([]),[K0,y0]=C(!1),[F_,o_]=C(()=>YZ()),c0=p_(()=>I_.find((G)=>G?.chat_jid===$)||null,[I_,$]),k_=p_(()=>B0.find((G)=>G?.chat_jid===$)||c0||null,[c0,B0,$]),Y0=k_?.root_chat_jid||c0?.root_chat_jid||$,x=KZ(u),[d,D_]=C(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),Q_=g_.length,t_=E(new Set),_$=E([]),z0=E(new Set),x0=E(0),C0=E({inFlight:!1,lastAttemptAt:0,turnId:null});t_.current=new Set(g_.map((G)=>G.row_id)),_$.current=g_;let{notificationsEnabled:W$,notificationPermission:C_,toggleNotifications:o$,notify:E0}=d6(),[f$,h0]=C(()=>new Set),[U0,Q$]=C(()=>E2("workspaceOpen",!0)),i0=E(null),{editorOpen:_0,tabStripTabs:t2,tabStripActiveId:m0,previewTabs:V2,openEditor:$0,closeEditor:n0,handleTabClose:l0,handleTabActivate:G0,handleTabCloseOthers:T0,handleTabCloseAll:$$,handleTabTogglePin:E$,handleTabTogglePreview:k$,revealInExplorer:L2}=r6({onTabClosed:(G)=>i0.current?.(G)}),r$=E(null),Q0=E(null),S$=E(null),G$=E(null),k0=l_.getDockPanes().length>0,[w0,B$]=C(!1),A0=P(()=>B$((G)=>!G),[]),Q2=P(()=>{$0(g4,{label:"Terminal"})},[$0]),W0=!j&&(_0||k0&&w0),[g0,a$]=C(!1),w$=E(!1),r_=P(()=>{if(!_0||j)return;if(w$.current=w0,w0)B$(!1);a$(!0)},[_0,j,w0]),P0=P(()=>{if(!g0)return;if(a$(!1),w$.current)B$(!0),w$.current=!1},[g0]),U$=P(()=>{if(g0)P0();else r_()},[g0,r_,P0]);R(()=>{if(g0&&!_0)P0()},[g0,_0,P0]);let[s0,A$]=C(()=>{try{return localStorage.getItem("piclaw-voice-mode")==="1"}catch{return!1}}),[t$,p0]=C(!1),f0=E(!1),X0=P(()=>{let G=!s0;A$(G);try{localStorage.setItem("piclaw-voice-mode",G?"1":"0")}catch{}if(!G)Promise.resolve().then(() => f1).then((W)=>{W.stopRecognition(),W.stopSpeaking()}),p0(!1)},[s0]),O$=P(()=>{if(!s0){A$(!0);try{localStorage.setItem("piclaw-voice-mode","1")}catch{}}Promise.resolve().then(() => f1).then((G)=>{if(G.isRecognizing()){G.stopRecognition(),p0(!1);return}G.stopSpeaking();let W=document.querySelector(".compose-input");if(G.startRecognition({onInterim:(w)=>{if(W)W.value=w},onFinal:(w)=>{if(W)W.value=w,W.dispatchEvent(new Event("input",{bubbles:!0}))},onEnd:()=>p0(!1),onError:(w)=>{console.warn("[voice]",w),p0(!1)}}))p0(!0),f0.current=!0})},[s0]);R(()=>{let G=r$.current;if(!G)return;if(Q0.current)Q0.current.dispose(),Q0.current=null;let W=m0;if(!W)return;let H={path:W,mode:"edit"},w=l_.resolve(H)||l_.get("editor");if(!w){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let I=w.mount(G,H);Q0.current=I,I.onDirtyChange?.((s)=>{h_.setDirty(W,s)}),I.onSaveRequest?.(()=>{}),I.onClose?.(()=>{n0()});let m=h_.getViewState(W);if(m&&typeof I.restoreViewState==="function")requestAnimationFrame(()=>I.restoreViewState(m));if(typeof I.onViewStateChange==="function")I.onViewStateChange((s)=>{h_.saveViewState(W,s)});return requestAnimationFrame(()=>I.focus()),()=>{if(Q0.current===I)I.dispose(),Q0.current=null}},[m0,n0]),R(()=>{let G=(W)=>{let H=W.detail?.path;if(H)$0(H)};return document.addEventListener("office-viewer:open-tab",G),document.addEventListener("drawio:open-tab",G),document.addEventListener("csv-viewer:open-tab",G),document.addEventListener("pdf-viewer:open-tab",G),document.addEventListener("image-viewer:open-tab",G),document.addEventListener("video-viewer:open-tab",G),()=>{document.removeEventListener("office-viewer:open-tab",G),document.removeEventListener("drawio:open-tab",G),document.removeEventListener("csv-viewer:open-tab",G),document.removeEventListener("pdf-viewer:open-tab",G),document.removeEventListener("image-viewer:open-tab",G),document.removeEventListener("video-viewer:open-tab",G)}},[$0]),R(()=>{let G=S$.current;if(G$.current)G$.current.dispose(),G$.current=null;if(!G||!k0||!w0)return;let W=l_.getDockPanes()[0];if(!W){G.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let H=W.mount(G,{mode:"view"});return G$.current=H,requestAnimationFrame(()=>H.focus?.()),()=>{if(G$.current===H)H.dispose(),G$.current=null}},[k0,w0]);let[P$,B2]=C({name:"You",avatar_url:null,avatar_background:null}),e$=E(!1),S0=E(!1),O0=E(null),I0=E($),_2=E(new Map),X$=E($),I$=E(0),R$=E(0),v$=E({}),u$=E({name:null,avatar_url:null}),F0=E({currentHashtag:null,searchQuery:null,searchOpen:!1}),F$=E(null),b$=E(null),M$=E(0),H$=E(0),q$=E(0),$2=E(null),R0=E(null),o0=E(null),V$=E(null),m$=E(0),g$=E({title:null,avatarBase:null}),p$=E(null),D$=P(()=>{if(p$.current)clearTimeout(p$.current),p$.current=null;n(null)},[]);$9(30000),R(()=>{return D8()},[]),R(()=>{return Q9(L)},[]),R(()=>{c_("workspaceOpen",String(U0))},[U0]),R(()=>{return q9()},[]),R(()=>{return()=>{D$()}},[D$]),R(()=>{if(!F_){c_(F3,"");return}c_(F3,JSON.stringify({question:F_.question||"",answer:F_.answer||"",thinking:F_.thinking||"",error:F_.error||null,status:F_.status||"success"}))},[F_]),R(()=>{v$.current=R_||{}},[R_]),R(()=>{I0.current=$},[$]),R(()=>{u$.current=P$||{name:"You",avatar_url:null,avatar_background:null}},[P$]);let c$=P((G,W,H=null)=>{if(typeof document>"u")return;let w=(G||"").trim()||"PiClaw";if(g$.current.title!==w){document.title=w;let __=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(__&&__.getAttribute("content")!==w)__.setAttribute("content",w);g$.current.title=w}let I=document.getElementById("dynamic-favicon");if(!I)return;let m=I.getAttribute("data-default")||I.getAttribute("href")||"/favicon.ico",s=W||m,N_=W?`${s}|${H||""}`:s;if(g$.current.avatarBase!==N_){let __=W?`${s}${s.includes("?")?"&":"?"}v=${H||Date.now()}`:s;I.setAttribute("href",__),g$.current.avatarBase=N_}},[]),J$=P((G)=>{if(!G)return;M((W)=>W.includes(G)?W:[...W,G])},[]),U2=P((G)=>{M((W)=>W.filter((H)=>H!==G))},[]);i0.current=U2;let I2=P(()=>{M([])},[]),j2=P((G)=>{if(!Array.isArray(G)){M([]);return}let W=[],H=new Set;for(let w of G){if(typeof w!=="string"||!w.trim())continue;let I=w.trim();if(H.has(I))continue;H.add(I),W.push(I)}M(W)},[]),q_=P((G,W=null,H="info",w=3000)=>{D$(),n({title:G,detail:W||null,kind:H||"info"}),p$.current=setTimeout(()=>{n((I)=>I?.title===G?null:I)},w)},[D$]),O2=P((G)=>{let W=j9(G,{editorOpen:_0,resolvePane:(H)=>l_.resolve(H)});if(W.kind==="open"){$0(W.path);return}if(W.kind==="toast")q_(W.title,W.detail,W.level)},[_0,$0,q_]),b2=P(()=>{let G=m0;if(G)J$(G)},[m0,J$]),M2=P((G)=>{if(!G)return;y((W)=>W.includes(G)?W:[...W,G])},[]),Z2=P(async(G,W=null)=>{let H=(I)=>{I.scrollIntoView({behavior:"smooth",block:"center"}),I.classList.add("post-highlight"),setTimeout(()=>I.classList.remove("post-highlight"),2000)},w=document.getElementById("post-"+G);if(w){H(w);return}try{let I=typeof W==="string"&&W.trim()?W.trim():$,s=(await N4(G,I))?.thread?.[0];if(!s)return;q0((N_)=>{if(!N_)return[s];if(N_.some((__)=>__.id===s.id))return N_;return[...N_,s]}),requestAnimationFrame(()=>{setTimeout(()=>{let N_=document.getElementById("post-"+G);if(N_)H(N_)},50)})}catch(I){console.error("[scrollToMessage] Failed to fetch message",G,I)}},[$]),x2=P((G)=>{y((W)=>W.filter((H)=>H!==G))},[]),C2=P(()=>{y([])},[]),T2=P((G)=>{if(!Array.isArray(G)){y([]);return}let W=[],H=new Set;for(let w of G){if(typeof w!=="string"||!w.trim())continue;let I=w.trim();if(H.has(I))continue;H.add(I),W.push(I)}y(W)},[]),U=P((G)=>{let W=typeof G==="string"&&G.trim()?G.trim():"Could not send your message.";q_("Compose failed",W,"error",5000)},[q_]),D=P((G={})=>{let W=Date.now();if(V_.current=W,G.running)S_.current=!0,y0((H)=>H?H:!0);if(G.clearSilence)b_.current=0},[y0]),Y=P(()=>{if(V$.current)clearTimeout(V$.current),V$.current=null;m$.current=0},[]);R(()=>()=>{Y()},[Y]);let Q=P(()=>{Y(),l((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:W,lastActivity:H,...w}=G;return w})},[Y]),F=P((G)=>{if(!G)return;Y();let W=Date.now();m$.current=W,l({type:G.type||"active",last_activity:!0}),V$.current=setTimeout(()=>{if(m$.current!==W)return;l((H)=>{if(!H||!(H.last_activity||H.lastActivity))return H;return null})},t6)},[Y]),b=P(()=>{S_.current=!1,y0(!1),V_.current=null,b_.current=0,U_.current="",M_.current="",u_.current=null,R0.current=null,W_.current=null,$_.current=null,O0.current=null,C0.current={inFlight:!1,lastAttemptAt:0,turnId:null},Y(),B_(null),J_(null),y_.current=!1,G_.current=!1},[Y,B_,J_,y0]),T=P((G)=>{if(!G9({remainingQueueCount:G,currentTurnId:W_.current,isAgentTurnActive:K0}))return;$_.current=null,J_(null)},[K0,J_]),c=P(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),S=P(()=>({agentStatus:a,agentDraft:j_?{...j_}:{text:"",totalLines:0},agentPlan:z_||"",agentThought:r?{...r}:{text:"",totalLines:0},pendingRequest:Z_,currentTurnId:K_,steerQueuedTurnId:Y_,isAgentTurnActive:Boolean(K0),followupQueueItems:Array.isArray(g_)?g_.map((G)=>({...G})):[],activeModel:m_,activeThinkingLevel:d_,supportsThinking:Boolean(v_),activeModelUsage:e_,contextUsage:n_,isAgentRunning:Boolean(S_.current),wasAgentActive:Boolean(S0.current),draftBuffer:U_.current||"",thoughtBuffer:M_.current||"",lastAgentEvent:V_.current||null,lastSilenceNotice:b_.current||0,lastAgentResponse:R0.current||null,currentTurnIdRef:W_.current||null,steerQueuedTurnIdRef:$_.current||null,thoughtExpanded:Boolean(y_.current),draftExpanded:Boolean(G_.current),agentStatusRef:O0.current||null,silentRecovery:{...C0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[m_,e_,d_,j_,z_,a,r,n_,K_,g_,K0,Z_,Y_,v_]),e=P((G)=>{let W=G||c();Y(),S_.current=Boolean(W.isAgentRunning),S0.current=Boolean(W.wasAgentActive),y0(Boolean(W.isAgentTurnActive)),V_.current=W.lastAgentEvent||null,b_.current=Number(W.lastSilenceNotice||0),U_.current=W.draftBuffer||"",M_.current=W.thoughtBuffer||"",u_.current=W.pendingRequest||null,R0.current=W.lastAgentResponse||null,W_.current=W.currentTurnIdRef||null,$_.current=W.steerQueuedTurnIdRef||null,O0.current=W.agentStatusRef||null,C0.current=W.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},y_.current=Boolean(W.thoughtExpanded),G_.current=Boolean(W.draftExpanded),l(W.agentStatus||null),i(W.agentDraft?{...W.agentDraft}:{text:"",totalLines:0}),i_(W.agentPlan||""),o(W.agentThought?{...W.agentThought}:{text:"",totalLines:0}),t(W.pendingRequest||null),B_(W.currentTurnId||null),J_(W.steerQueuedTurnId||null),s_(Array.isArray(W.followupQueueItems)?W.followupQueueItems.map((H)=>({...H})):[]),x_(W.activeModel||null),P_(W.activeThinkingLevel||null),Z0(Boolean(W.supportsThinking)),O_(W.activeModelUsage??null),E_(W.contextUsage??null)},[Y,c,B_,s_,y0,J_]),w_=P((G)=>{if(!G)return;if(W_.current===G)return;W_.current=G,C0.current={inFlight:!1,lastAttemptAt:0,turnId:G},B_(G),$_.current=null,J_(null),U_.current="",M_.current="",i({text:"",totalLines:0}),i_(""),o({text:"",totalLines:0}),t(null),u_.current=null,R0.current=null,y_.current=!1,G_.current=!1},[B_,J_]),H_=P((G)=>{if(typeof document<"u"){let __=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&__)return}let W=R0.current;if(!W||!W.post)return;if(G&&W.turnId&&W.turnId!==G)return;let H=W.post;if(H.id&&$2.current===H.id)return;let w=String(H?.data?.content||"").trim();if(!w)return;$2.current=H.id||$2.current,R0.current=null;let I=w.replace(/\s+/g," ").slice(0,200),m=v$.current||{},N_=(H?.data?.agent_id?m[H.data.agent_id]:null)?.name||"Pi";E0(N_,I)},[E0]),H0=P(async(G,W)=>{if(G!=="thought"&&G!=="draft")return;let H=W_.current;if(G==="thought"){if(y_.current=W,H)try{await k9(H,"thought",W)}catch(w){console.warn("Failed to update thought visibility:",w)}if(!W)return;try{let w=H?await E9(H,"thought"):null;if(w?.text)M_.current=w.text;o((I)=>({...I||{text:"",totalLines:0},fullText:M_.current||I?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:I?.totalLines||0}))}catch(w){console.warn("Failed to fetch full thought:",w)}return}if(G_.current=W,H)try{await k9(H,"draft",W)}catch(w){console.warn("Failed to update draft visibility:",w)}if(!W)return;try{let w=H?await E9(H,"draft"):null;if(w?.text)U_.current=w.text;i((I)=>({...I||{text:"",totalLines:0},fullText:U_.current||I?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:I?.totalLines||0}))}catch(w){console.warn("Failed to fetch full draft:",w)}},[]),h$=E(null),i$=P(()=>{let G=F$.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);h$.current=i$;let l$=P((G)=>{let W=F$.current;if(!W||typeof G!=="function"){G?.();return}let{currentHashtag:H,searchQuery:w,searchOpen:I}=F0.current||{},m=!((w||I)&&!H),s=m?W.scrollHeight-W.scrollTop:W.scrollTop;G(),requestAnimationFrame(()=>{let N_=F$.current;if(!N_)return;if(m){let __=Math.max(N_.scrollHeight-s,0);N_.scrollTop=__}else{let __=Math.max(N_.scrollHeight-N_.clientHeight,0),h=Math.min(s,__);N_.scrollTop=h}})},[]),N2=P((G)=>{let W=F$.current;if(!W||typeof G!=="function"){G?.();return}let H=W.scrollTop;G(),requestAnimationFrame(()=>{let w=F$.current;if(!w)return;let I=Math.max(w.scrollHeight-w.clientHeight,0);w.scrollTop=Math.min(H,I)})},[]),K2="Queued as a follow-up (one-at-a-time).",v0="⁣",F2=P((G)=>{if(!G||!Array.isArray(G))return G;let W=t_.current,H=new Set(W),w=G.filter((I)=>{if(H.has(I?.id))return!1;if(I?.data?.is_bot_message){let m=I?.data?.content;if(m===K2||m===v0)return!1}return!0});return w.length===G.length?G:w},[]),{posts:e2,setPosts:q0,hasMore:S1,setHasMore:y$,hasMoreRef:r0,loadPosts:u0,refreshTimeline:b0,loadMore:R1,loadMoreRef:v1}=n6({preserveTimelineScroll:l$,preserveTimelineScrollTop:N2,chatJid:$}),H2=p_(()=>F2(e2),[e2,g_,F2]),_1=P(()=>{let G=j0.current;if(!G)return;q0((W)=>W?W.filter((H)=>H.id!==G):W),j0.current=null},[q0]),{handleSplitterMouseDown:P9,handleSplitterTouchStart:I9,handleEditorSplitterMouseDown:b9,handleEditorSplitterTouchStart:M9,handleDockSplitterMouseDown:x9,handleDockSplitterTouchStart:C9}=o6({appShellRef:b$,sidebarWidthRef:M$,editorWidthRef:H$,dockHeightRef:q$}),H3=P(()=>{if(!S_.current)return;S_.current=!1,b_.current=0,V_.current=null,W_.current=null,B_(null),y_.current=!1,G_.current=!1;let G=(U_.current||"").trim();if(U_.current="",M_.current="",i({text:"",totalLines:0}),i_(""),o({text:"",totalLines:0}),t(null),u_.current=null,R0.current=null,!G){l({type:"error",title:"Response stalled - No content received"});return}let H=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,w=Date.now(),I=new Date().toISOString(),m={id:w,timestamp:I,data:{type:"agent_response",content:H,agent_id:"default",is_local_stall:!0}};j0.current=w,q0((s)=>s?a2([...s,m]):[m]),h$.current?.(),l(null)},[B_]);R(()=>{F0.current={currentHashtag:q,searchQuery:V,searchOpen:k}},[q,V,k]);let T_=P(()=>{let G=++x0.current,W=$;VZ(W).then((H)=>{if(G!==x0.current)return;if(I0.current!==W)return;let w=z0.current,I=Array.isArray(H?.items)?H.items.map((m)=>({...m})).filter((m)=>!w.has(m.row_id)):[];if(I.length){s_((m)=>{if(m.length===I.length&&m.every((s,N_)=>s.row_id===I[N_].row_id))return m;return I});return}w.clear(),T(0),s_((m)=>m.length===0?m:[])}).catch(()=>{if(G!==x0.current)return;if(I0.current!==W)return;s_((H)=>H.length===0?H:[])})},[T,$,s_]),j$=P(async()=>{let G=$;try{let W=await U3(G);if(I0.current!==G)return;if(W)E_(W)}catch(W){if(I0.current!==G)return;console.warn("Failed to fetch agent context:",W)}},[$]),Z$=P(async()=>{let G=$;try{let W=await w9(G);if(I0.current!==G)return null;if(!W||W.status!=="active"||!W.data){if(S0.current){let{currentHashtag:I,searchQuery:m,searchOpen:s}=F0.current||{};if(!I&&!m&&!s)b0()}return S0.current=!1,b(),O0.current=null,l(null),i({text:"",totalLines:0}),i_(""),o({text:"",totalLines:0}),t(null),u_.current=null,W??null}S0.current=!0;let H=W.data;O0.current=H;let w=H.turn_id||H.turnId;if(w)w_(w);if(D({running:!0,clearSilence:!0}),Q(),l(H),W.thought&&W.thought.text)o((I)=>{if(I&&I.text&&I.text.length>=W.thought.text.length)return I;return M_.current=W.thought.text,{text:W.thought.text,totalLines:W.thought.totalLines||0}});if(W.draft&&W.draft.text)i((I)=>{if(I&&I.text&&I.text.length>=W.draft.text.length)return I;return U_.current=W.draft.text,{text:W.draft.text,totalLines:W.draft.totalLines||0}});return W}catch(W){return console.warn("Failed to fetch agent status:",W),null}},[b,Q,D,b0,w_]),u1=P(async()=>{if(!S_.current)return null;if(u_.current)return null;let G=W_.current||null,W=C0.current,H=Date.now();if(W.inFlight)return null;if(W.turnId===G&&H-W.lastAttemptAt<V3)return null;W.inFlight=!0,W.lastAttemptAt=H,W.turnId=G;try{let{currentHashtag:w,searchQuery:I,searchOpen:m}=F0.current||{};if(!w&&!I&&!m)await b0();return await T_(),await Z$()}finally{W.inFlight=!1}},[Z$,T_,b0]);R(()=>{let G=Math.min(1000,Math.max(100,Math.floor(q3/2))),W=setInterval(()=>{if(!S_.current)return;if(u_.current)return;let H=V_.current;if(!H)return;let w=Date.now(),I=w-H,m=l2(O0.current);if(I>=a6){if(!m)l({type:"waiting",title:"Re-syncing after a quiet period…"});u1();return}if(I>=q3){if(w-b_.current>=V3){if(!m){let s=Math.floor(I/1000);l({type:"waiting",title:`Waiting for model… No events for ${s}s`})}b_.current=w,u1()}}},G);return()=>clearInterval(W)},[u1]);let T9=P((G)=>{if(z(G),G!=="connected"){l(null),i({text:"",totalLines:0}),i_(""),o({text:"",totalLines:0}),t(null),u_.current=null,b();return}if(!e$.current){e$.current=!0;let{currentHashtag:I,searchQuery:m,searchOpen:s}=F0.current||{};if(!I&&!m&&!s)b0();Z$(),T_(),j$();return}let{currentHashtag:W,searchQuery:H,searchOpen:w}=F0.current;if(!W&&!H&&!w)b0();Z$(),T_(),j$()},[b,b0,Z$,T_,j$]),f9=P(async(G)=>{B(G),q0(null),await u0(G)},[u0]),S9=P(async()=>{B(null),J(null),q0(null),await u0()},[u0]),R9=P(async(G,W=u)=>{if(!G||!G.trim())return;let H=W==="root"||W==="all"?W:"current";v(H),J(G.trim()),B(null),q0(null);try{let w=await J9(G.trim(),50,0,$,H,Y0);q0(w.results),y$(!1)}catch(w){console.error("Failed to search:",w),q0([])}},[$,Y0,u]),v9=P(()=>{f(!0),J(null),B(null),v("current"),q0([])},[]),u9=P(()=>{f(!1),J(null),u0()},[u0]),FZ=P(()=>{},[]),m1=!q&&!V&&!k,m9=P(async(G)=>{if(!G)return;let W=G.id,H=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():$,w=H2?.filter((m)=>m?.data?.thread_id===W&&m?.id!==W).length||0;if(w>0){if(!window.confirm(`Delete this message and its ${w} replies?`))return}let I=(m)=>{if(!m.length)return;h0((N_)=>{let __=new Set(N_);return m.forEach((h)=>__.add(h)),__}),setTimeout(()=>{if(N2(()=>{q0((N_)=>N_?N_.filter((__)=>!m.includes(__.id)):N_)}),h0((N_)=>{let __=new Set(N_);return m.forEach((h)=>__.delete(h)),__}),r0.current)v1.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let m=await y9(W,w>0,H);if(m?.ids?.length)I(m.ids)}catch(m){let s=m?.message||"";if(w===0&&s.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let __=await y9(W,!0,H);if(__?.ids?.length)I(__.ids);return}console.error("Failed to delete post:",m),alert(`Failed to delete message: ${s}`)}},[$,H2,N2]),D3=P(async()=>{try{let G=await zZ();L_(e6(G));let W=G?.user||{};B2((w)=>{let I=typeof W.name==="string"&&W.name.trim()?W.name.trim():"You",m=typeof W.avatar_url==="string"?W.avatar_url.trim():null,s=typeof W.avatar_background==="string"&&W.avatar_background.trim()?W.avatar_background.trim():null;if(w.name===I&&w.avatar_url===m&&w.avatar_background===s)return w;return{name:I,avatar_url:m,avatar_background:s}});let H=(G?.agents||[]).find((w)=>w.id==="default");c$(H?.name,H?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=$,W=await U3(G);if(I0.current!==G)return;if(W)E_(W)}catch{}},[c$,$]);R(()=>{D3();let G=k2("sidebarWidth",null),W=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(M$.current=W,b$.current)b$.current.style.setProperty("--sidebar-width",`${W}px`)},[D3]);let g1=K0||a!==null,J3=P((G)=>{if(!G||typeof G!=="object")return;let W=G.agent_id;if(!W)return;let{agent_name:H,agent_avatar:w}=G;if(!H&&w===void 0)return;let I=v$.current?.[W]||{id:W},m=I.name||null,s=I.avatar_url??I.avatarUrl??I.avatar??null,N_=!1,__=!1;if(H&&H!==I.name)m=H,__=!0;if(w!==void 0){let h=typeof w==="string"?w.trim():null,X_=typeof s==="string"?s.trim():null,A_=h||null;if(A_!==(X_||null))s=A_,N_=!0}if(!__&&!N_)return;if(L_((h)=>{let A_={...h[W]||{id:W}};if(__)A_.name=m;if(N_)A_.avatar_url=s;return{...h,[W]:A_}}),W==="default")c$(m,s,N_?Date.now():null)},[c$]),y3=P((G)=>{if(!G||typeof G!=="object")return;let W=G.user_name??G.userName,H=G.user_avatar??G.userAvatar,w=G.user_avatar_background??G.userAvatarBackground;if(W===void 0&&H===void 0&&w===void 0)return;B2((I)=>{let m=typeof W==="string"&&W.trim()?W.trim():I.name||"You",s=H===void 0?I.avatar_url:typeof H==="string"&&H.trim()?H.trim():null,N_=w===void 0?I.avatar_background:typeof w==="string"&&w.trim()?w.trim():null;if(I.name===m&&I.avatar_url===s&&I.avatar_background===N_)return I;return{name:m,avatar_url:s,avatar_background:N_}})},[]),p1=P((G)=>{if(!G||typeof G!=="object")return;let W=G.model??G.current;if(W!==void 0)x_(W);if(G.thinking_level!==void 0)P_(G.thinking_level??null);if(G.supports_thinking!==void 0)Z0(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)O_(G.provider_usage??null)},[]),f2=P(()=>{let G=$;WZ(G).then((W)=>{if(I0.current!==G)return;if(W)p1(W)}).catch(()=>{})},[p1,$]),M0=P(()=>{let G=$,W=(H)=>Array.isArray(H)?H.filter((w)=>w&&typeof w.chat_jid==="string"&&typeof w.agent_name==="string"&&w.agent_name.trim()):[];Promise.all([GZ().catch(()=>({chats:[]})),O3(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([H,w])=>{if(I0.current!==G)return;let I=W(H?.chats),m=W(w?.chats);if(m.length===0){N0(I);return}let s=new Map(I.map((__)=>[__.chat_jid,__])),N_=m.map((__)=>{let h=s.get(__.chat_jid);return h?{...__,...h,is_active:h.is_active??__.is_active}:__});N_.sort((__,h)=>{if(__.chat_jid===G&&h.chat_jid!==G)return-1;if(h.chat_jid===G&&__.chat_jid!==G)return 1;let X_=Boolean(__.archived_at),A_=Boolean(h.archived_at);if(X_!==A_)return X_?1:-1;if(Boolean(__.is_active)!==Boolean(h.is_active))return __.is_active?-1:1;return String(__.chat_jid).localeCompare(String(h.chat_jid))}),N0(N_)}).catch(()=>{if(I0.current!==G)return;N0([])})},[$]),D0=P(()=>{O3(Y0).then((G)=>{let W=Array.isArray(G?.chats)?G.chats.filter((H)=>H&&typeof H.chat_jid==="string"&&typeof H.agent_name==="string"):[];d0(W)}).catch(()=>{})},[Y0]),g9=P((G)=>{let W=G?.row_id;if(W==null)return;z0.current.add(W),s_((H)=>H.filter((w)=>w?.row_id!==W)),LZ(W,B3($)).then(()=>{T_()}).catch((H)=>{console.warn("[queue] Failed to steer queued item:",H),q_("Failed to steer message","The queued message could not be sent as steering.","warning"),z0.current.delete(W),T_()})},[$,T_,s_,q_]),p9=P((G)=>{let W=G?.row_id;if(W==null)return;let H=_$.current.filter((w)=>w?.row_id!==W).length;z0.current.add(W),T(H),s_((w)=>w.filter((I)=>I?.row_id!==W)),QZ(W,B3($)).then(()=>{T_()}).catch((w)=>{console.warn("[queue] Failed to remove queued item:",w),q_("Failed to remove message","The queued message could not be removed.","warning"),z0.current.delete(W),T_()})},[T,$,T_,s_,q_]),c1=P((G)=>{if(!G||typeof G!=="object")return;if(M0(),D0(),G?.queued==="followup"||G?.queued==="steer"){T_();return}let W=G?.command;if(W&&typeof W==="object"&&(W?.queued_followup||W?.queued_steer))T_()},[M0,D0,T_]),h1=P(()=>{if(o0.current)o0.current.abort(),o0.current=null;o_(null)},[]),$1=P(async(G)=>{let W=String(G||"").trim();if(!W)return q_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(o0.current)o0.current.abort();let H=new AbortController;o0.current=H,o_({question:W,answer:"",thinking:"",error:null,model:null,status:"running"});try{let w=await BZ(W,{signal:H.signal,chatJid:M8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(I,m)=>{if(I==="side_prompt_start")o_((s)=>s?{...s,status:"running"}:s)},onThinkingDelta:(I)=>{o_((m)=>m?{...m,thinking:`${m.thinking||""}${I||""}`}:m)},onTextDelta:(I)=>{o_((m)=>m?{...m,answer:`${m.answer||""}${I||""}`}:m)}});if(o0.current!==H)return!0;o_((I)=>I?{...I,answer:w?.result||I.answer||"",thinking:w?.thinking||I.thinking||"",model:w?.model||null,status:"success",error:null}:I)}catch(w){if(H.signal.aborted)return!0;o_((I)=>I?{...I,status:"error",error:w?.payload?.error||w?.message||"BTW request failed."}:I)}finally{if(o0.current===H)o0.current=null}return!0},[$,q_]),c9=P(async({content:G})=>{let W=b8(G);if(!W)return!1;if(W.type==="help")return q_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(W.type==="clear")return h1(),q_("BTW cleared","Closed the side conversation panel.","info"),!0;if(W.type==="ask")return await $1(W.question),!0;return!1},[h1,$1,q_]),h9=P(()=>{if(F_?.question)$1(F_.question)},[F_,$1]),i9=P(async()=>{let G=T8(F_);if(!G)return;try{let W=await J2("default",G,null,[],g1?"queue":null,$);c1(W),q_(W?.queued==="followup"?"BTW queued":"BTW injected",W?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(W){q_("BTW inject failed",W?.message||"Could not inject BTW answer into chat.","warning")}},[F_,c1,g1,q_]),S2=P(()=>{f2(),M0(),D0(),T_(),j$()},[f2,M0,D0,T_,j$]);R(()=>{S2();let G=setInterval(()=>{f2(),M0(),D0(),T_()},60000);return()=>clearInterval(G)},[S2,f2,M0,D0,T_]),R(()=>{D0()},[D0]),R(()=>{let G=!1;if(q0(null),q)return u0(q),()=>{G=!0};if(V)return J9(V,50,0,$,u,Y0).then((W)=>{if(G)return;q0(W.results),y$(!1)}).catch((W)=>{if(G)return;console.error("Failed to search:",W),q0([]),y$(!1)}),()=>{G=!0};return u0(),()=>{G=!0}},[$,q,V,u,Y0,u0,y$,q0]),R(()=>{let G=X$.current||$;_2.current.set(G,S())},[$,S]),R(()=>{let G=X$.current||$;if(G===$)return;_2.current.set(G,S()),X$.current=$,z0.current.clear(),e(_2.current.get($)||null),T_(),Z$(),j$()},[$,Z$,j$,T_,e,S]);let l9=P(()=>{let{currentHashtag:G,searchQuery:W,searchOpen:H}=F0.current||{};if(!G&&!W&&!H)b0();S2()},[S2,b0]),i1=P((G,W)=>{let H=W?.turn_id,w=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null,m=w?w===$:G==="connected"||G==="workspace_update";if(m)J3(W),y3(W);if(G==="ui_theme"){J8(W);return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))Q()}if(G==="connected"){l(null),i({text:"",totalLines:0}),i_(""),o({text:"",totalLines:0}),t(null),u_.current=null,b();let h=$;w9(h).then((J0)=>{if(I0.current!==h)return;if(!J0||J0.status!=="active"||!J0.data)return;let Y2=J0.data,j1=Y2.turn_id||Y2.turnId;if(j1)w_(j1);if(D({clearSilence:!0}),F(Y2),J0.thought&&J0.thought.text)M_.current=J0.thought.text,o({text:J0.thought.text,totalLines:J0.thought.totalLines||0});if(J0.draft&&J0.draft.text)U_.current=J0.draft.text,i({text:J0.draft.text,totalLines:J0.draft.totalLines||0})}).catch((J0)=>{console.warn("Failed to fetch agent status:",J0)});let{currentHashtag:X_,searchQuery:A_,searchOpen:N$}=F0.current||{};if(!X_&&!A_&&!N$)b0();S2();return}if(G==="agent_status"){if(!m){if(W?.type==="done"||W?.type==="error")M0(),D0();return}if(W.type==="done"||W.type==="error"){if(H&&W_.current&&H!==W_.current)return;if(W.type==="done"){H_(H||W_.current);let{currentHashtag:h,searchQuery:X_,searchOpen:A_}=F0.current||{};if(!h&&!X_&&!A_)b0();if(W.context_usage)E_(W.context_usage)}if(S0.current=!1,b(),z0.current.clear(),M0(),T_(),i({text:"",totalLines:0}),i_(""),o({text:"",totalLines:0}),t(null),W.type==="error")l({type:"error",title:W.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(H)w_(H);if(D({running:!0,clearSilence:!0}),W.type==="thinking")U_.current="",M_.current="",i({text:"",totalLines:0}),i_(""),o({text:"",totalLines:0});O0.current=W,l((h)=>{if(h&&h.type===W.type&&h.title===W.title)return h;return W})}return}if(G==="agent_steer_queued"){if(!m)return;if(H&&W_.current&&H!==W_.current)return;let h=H||W_.current;if(!h)return;$_.current=h,J_(h);return}if(G==="agent_followup_queued"){if(!m)return;let h=W?.row_id,X_=W?.content;if(h!=null&&typeof X_==="string"&&X_.trim())s_((A_)=>{if(A_.some((N$)=>N$?.row_id===h))return A_;return[...A_,{row_id:h,content:X_,timestamp:W?.timestamp||null,thread_id:W?.thread_id??null}]});T_();return}if(G==="agent_followup_consumed"){if(!m)return;let h=W?.row_id;if(h!=null){let J0=_$.current.filter((Y2)=>Y2.row_id!==h).length;T(J0),s_((Y2)=>Y2.filter((j1)=>j1.row_id!==h))}T_();let{currentHashtag:X_,searchQuery:A_,searchOpen:N$}=F0.current||{};if(!X_&&!A_&&!N$)b0();return}if(G==="agent_followup_removed"){if(!m)return;let h=W?.row_id;if(h!=null){let X_=_$.current.filter((A_)=>A_.row_id!==h).length;z0.current.add(h),T(X_),s_((A_)=>A_.filter((N$)=>N$.row_id!==h))}T_();return}if(G==="agent_draft_delta"){if(!m)return;if(H&&W_.current&&H!==W_.current)return;if(H&&!W_.current)w_(H);if(D({running:!0,clearSilence:!0}),W?.reset)U_.current="";if(W?.delta)U_.current+=W.delta;let h=Date.now();if(!I$.current||h-I$.current>=100){I$.current=h;let X_=U_.current,A_=L3(X_);if(G_.current)i((N$)=>({text:N$?.text||"",totalLines:A_,fullText:X_}));else i({text:X_,totalLines:A_})}return}if(G==="agent_draft"){if(!m)return;if(H&&W_.current&&H!==W_.current)return;if(H&&!W_.current)w_(H);D({running:!0,clearSilence:!0});let h=W.text||"",X_=W.mode||(W.kind==="plan"?"replace":"append"),A_=Number.isFinite(W.total_lines)?W.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(W.kind==="plan")if(X_==="replace")i_(h);else i_((N$)=>(N$||"")+h);else if(!G_.current)U_.current=h,i({text:h,totalLines:A_});return}if(G==="agent_thought_delta"){if(!m)return;if(H&&W_.current&&H!==W_.current)return;if(H&&!W_.current)w_(H);if(D({running:!0,clearSilence:!0}),W?.reset)M_.current="";if(typeof W?.delta==="string")M_.current+=W.delta;let h=Date.now();if(y_.current&&(!R$.current||h-R$.current>=100)){R$.current=h;let X_=M_.current;o((A_)=>({text:A_?.text||"",totalLines:L3(X_),fullText:X_}))}return}if(G==="agent_thought"){if(!m)return;if(H&&W_.current&&H!==W_.current)return;if(H&&!W_.current)w_(H);D({running:!0,clearSilence:!0});let h=W.text||"",X_=Number.isFinite(W.total_lines)?W.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!y_.current)M_.current=h,o({text:h,totalLines:X_});return}if(G==="model_changed"){if(!m)return;if(W?.model!==void 0)x_(W.model);if(W?.thinking_level!==void 0)P_(W.thinking_level??null);if(W?.supports_thinking!==void 0)Z0(Boolean(W.supports_thinking));let h=$;U3(h).then((X_)=>{if(I0.current!==h)return;if(X_)E_(X_)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:W}));return}if(V9(G)){if(!m)return;if(L9(G,W),G==="extension_ui_notify"&&typeof W?.message==="string")q_(W.message,null,W?.type||"info");if(G==="extension_ui_error"&&typeof W?.error==="string")q_("Extension UI error",W.error,"error",5000);return}let{currentHashtag:s,searchQuery:N_,searchOpen:__}=F0.current;if(G==="agent_response"){if(!m)return;if(_1(),R0.current={post:W,turnId:W_.current},s0&&f0.current&&W?.content)f0.current=!1,Promise.resolve().then(() => f1).then((h)=>{h.speakTerse(W.content)})}if(!s&&!N_&&!__&&m&&(G==="new_post"||G==="new_reply"||G==="agent_response"))q0((h)=>{if(!h)return[W];if(h.some((X_)=>X_.id===W.id))return h;return[...h,W]}),h$.current?.();if(G==="interaction_updated"){if(!m)return;if(s||N_||__)return;q0((h)=>{if(!h)return h;if(!h.some((X_)=>X_.id===W.id))return h;return h.map((X_)=>X_.id===W.id?W:X_)})}if(G==="interaction_deleted"){if(!m)return;if(s||N_||__)return;let h=W?.ids||[];if(h.length){if(N2(()=>{q0((X_)=>X_?X_.filter((A_)=>!h.includes(A_.id)):X_)}),r0.current)v1.current?.({preserveScroll:!0,preserveMode:"top"})}}},[b,Q,$,v1,D,H_,N2,M0,D0,b0,_1,w_,F,J3,y3,f2,T_,s_]);R(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=i1,G.reset=()=>{_1(),b(),l(null),i({text:"",totalLines:0}),i_(""),o({text:"",totalLines:0}),t(null)},G.finalize=()=>H3(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[b,H3,i1,_1]),l6({handleSseEvent:i1,handleConnectionStatusChange:T9,loadPosts:u0,onWake:l9,chatJid:$}),R(()=>{if(!H2||H2.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let W=G.slice(5);Z2(W),history.replaceState(null,"",location.pathname+location.search)},[H2,Z2]);let l1=a!==null;R(()=>{if(K!=="connected")return;let W=setInterval(()=>{let{currentHashtag:H,searchQuery:w,searchOpen:I}=F0.current||{},m=!H&&!w&&!I;if(l1){if(m)b0();T_(),Z$(),j$()}else{if(m)b0();Z$(),j$()}},l1?15000:60000);return()=>clearInterval(W)},[K,l1,Z$,j$,T_,b0]),R(()=>{return B9(()=>{Z$(),j$(),T_()})},[Z$,j$,T_]);let d9=P(()=>{Q$((G)=>!G)},[]),E3=P((G)=>{if(typeof window>"u")return;let W=String(G||"").trim();if(!W||W===$)return;let H=q2(window.location.href,W,{chatOnly:j});window.location.assign(H)},[j,$]),k3=P(async()=>{if(typeof window>"u"||!k_?.chat_jid)return;let G=k_.display_name||k_.agent_name||"",W=window.prompt("Agent name",G);if(W===null)return;let H=W.trim(),w=H.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||k_.agent_name||"";try{let I=await XZ(k_.chat_jid,{displayName:H,agentName:w});await Promise.allSettled([M0(),D0()]);let m=I?.branch?.agent_name||w||k_.agent_name||"",s=I?.branch?.display_name||H||m;q_("Branch renamed",`${s} (@${m})`,"info",3500)}catch(I){let m=I instanceof Error?I.message:String(I||"Could not rename branch."),s=/already in use/i.test(m||"")?`${m} Switch to or restore that existing session from the session manager.`:m;q_("Could not rename branch",s||"Could not rename branch.","warning",5000)}},[k_,M0,D0,q_]),w3=P(async(G=null)=>{if(typeof window>"u")return;let W=typeof G==="string"&&G.trim()?G.trim():"",H=typeof $==="string"&&$.trim()?$.trim():"",w=W||k_?.chat_jid||H;if(!w){q_("Could not prune branch","No active session is selected yet.","warning",4000);return}let I=(k_?.chat_jid===w?k_:null)||B0.find((__)=>__?.chat_jid===w)||I_.find((__)=>__?.chat_jid===w)||null;if(I?.chat_jid===(I?.root_chat_jid||I?.chat_jid)){q_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let s=`@${I?.agent_name||w}${I?.chat_jid?` — ${I.chat_jid}`:""}`;if(!window.confirm(`Prune ${s}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await qZ(w),await Promise.allSettled([M0(),D0()]);let __=I?.root_chat_jid||"web:default";q_("Branch pruned",`${s} has been archived.`,"info",3000);let h=q2(window.location.href,__,{chatOnly:j});window.location.assign(h)}catch(__){let h=__ instanceof Error?__.message:String(__||"Could not prune branch.");q_("Could not prune branch",h||"Could not prune branch.","warning",5000)}},[I_,j,k_,B0,$,M0,D0,q_]),n9=P(async(G)=>{let W=typeof G==="string"?G.trim():"";if(!W||typeof A9!=="function")return;try{let H=await A9(W);await Promise.allSettled([M0(),D0()]);let w=H?.branch,I=typeof w?.chat_jid==="string"&&w.chat_jid.trim()?w.chat_jid.trim():W,m=typeof w?.agent_name==="string"&&w.agent_name.trim()?`@${w.agent_name.trim()}`:I;q_("Branch restored",`Restored ${m}.`,"info",3200);let s=q2(window.location.href,I,{chatOnly:j});window.location.assign(s)}catch(H){let w=H instanceof Error?H.message:String(H||"Could not restore branch.");q_("Could not restore branch",w||"Could not restore branch.","warning",5000)}},[j,M0,D0,q_]);R(()=>{if(!Z||typeof window>"u")return;let G=!1;return(async()=>{try{D_({status:"running",message:"Preparing a new chat branch…"});let W=await m2(N);if(G)return;let H=W?.branch,w=typeof H?.chat_jid==="string"&&H.chat_jid.trim()?H.chat_jid.trim():null;if(!w)throw Error("Branch fork did not return a chat id.");let I=q2(window.location.href,w,{chatOnly:!0});window.location.replace(I)}catch(W){if(G)return;D_({status:"error",message:C1(W)})}})(),()=>{G=!0}},[Z,N]);let s9=P(async()=>{if(typeof window>"u")return;try{let W=(await m2($))?.branch,H=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null;if(!H)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([M0(),D0()]);let w=W?.agent_name?`@${W.agent_name}`:H;q_("New branch created",`Switched to ${w}.`,"info",2500);let I=q2(window.location.href,H,{chatOnly:j});window.location.assign(I)}catch(G){q_("Could not create branch",C1(G),"warning",5000)}},[j,$,M0,D0,q_]),o9=P(async()=>{if(typeof window>"u"||X)return;let G=Z9($);if(!G){q_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(G.mode==="tab"){let H=W9(window.location.href,$,{chatOnly:!0});if(!window.open(H,G.target))q_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let W=N9(G);if(!W){q_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}K9(W,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let w=(await m2($))?.branch,I=typeof w?.chat_jid==="string"&&w.chat_jid.trim()?w.chat_jid.trim():null;if(!I)throw Error("Branch fork did not return a chat id.");try{let s=await Y4();N0(Array.isArray(s?.chats)?s.chats:[])}catch{}try{let s=await O3(Y0);d0(Array.isArray(s?.chats)?s.chats:[])}catch{}let m=q2(window.location.href,I,{chatOnly:!0});Y9(W,m)}catch(H){z9(W),q_("Could not open branch window",C1(H),"error",5000)}},[$,Y0,X,q_]);R(()=>{if(!_0)return;if(typeof window>"u")return;let G=b$.current;if(!G)return;if(!H$.current){let W=k2("editorWidth",null),H=M$.current||280;H$.current=Number.isFinite(W)?W:H}if(G.style.setProperty("--editor-width",`${H$.current}px`),!q$.current){let W=k2("dockHeight",null);q$.current=Number.isFinite(W)?W:200}G.style.setProperty("--dock-height",`${q$.current}px`)},[_0]),R(()=>{if(!k0||j)return;let G=(W)=>{if(W.ctrlKey&&W.key==="`")W.preventDefault(),A0()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[A0,k0,j]),R(()=>{if(j)return;let G=(W)=>{if(W.ctrlKey&&W.shiftKey&&(W.key==="Z"||W.key==="z")){W.preventDefault(),U$();return}if(W.key==="Escape"&&g0)W.preventDefault(),P0()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[U$,P0,g0,j]);let r9=Boolean(Y_&&Y_===(a?.turn_id||K_));if(Z)return O`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${d.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${d.message}</p>
                    </div>
                </div>
            </div>
        `;return O`
        <div class=${`app-shell${U0?"":" workspace-collapsed"}${_0?" editor-open":""}${j?" chat-only":""}${g0?" zen-mode":""}`} ref=${b$}>
            ${!j&&O`
                <${g6}
                    onFileSelect=${J$}
                    visible=${U0}
                    active=${U0||_0}
                    onOpenEditor=${$0}
                    onOpenTerminalTab=${Q2}
                    onToggleTerminal=${k0?A0:void 0}
                    terminalVisible=${Boolean(k0&&w0)}
                />
                <button
                    class=${`workspace-toggle-tab${U0?" open":" closed"}`}
                    onClick=${d9}
                    title=${U0?"Hide workspace":"Show workspace"}
                    aria-label=${U0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${P9} onTouchStart=${I9}></div>
            `}
            ${W0&&O`
                <div class="editor-pane-container">
                    ${g0&&O`<div class="zen-hover-zone"></div>`}
                    ${_0&&O`
                        <${c6}
                            tabs=${t2}
                            activeId=${m0}
                            onActivate=${G0}
                            onClose=${l0}
                            onCloseOthers=${T0}
                            onCloseAll=${$$}
                            onTogglePin=${E$}
                            onTogglePreview=${k$}
                            previewTabs=${V2}
                            onToggleDock=${k0?A0:void 0}
                            dockVisible=${k0&&w0}
                            onToggleZen=${U$}
                            zenMode=${g0}
                        />
                    `}
                    ${_0&&O`<div class="editor-pane-host" ref=${r$}></div>`}
                    ${_0&&m0&&V2.has(m0)&&O`
                        <${i6}
                            getContent=${()=>Q0.current?.getContent?.()}
                            path=${m0}
                            onClose=${()=>k$(m0)}
                        />
                    `}
                    ${k0&&w0&&O`<div class="dock-splitter" onMouseDown=${x9} onTouchStart=${C9}></div>`}
                    ${k0&&O`<div class=${`dock-panel${w0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${A0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${S$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${b9} onTouchStart=${M9}></div>
            `}
            <div class="container">
                ${V&&_9()&&O`<div class="search-results-spacer"></div>`}
                ${j&&O`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${k_?.agent_name?`@${k_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${k_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${B0.length>1&&O`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(G)=>E3(G.currentTarget.value)}
                                    >
                                        ${B0.map((G)=>O`
                                            <option key=${G.chat_jid} value=${G.chat_jid}>
                                                ${`@${G.agent_name} — ${G.chat_jid}${G.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${k_?.chat_jid&&O`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${k3}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${k_?.chat_jid&&k_.chat_jid!==(k_.root_chat_jid||k_.chat_jid)&&O`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${w3}
                                    title="Prune this branch agent"
                                    aria-label="Prune this branch agent"
                                >
                                    Prune
                                </button>
                            `}
                            <span class="chat-window-header-badge">Chat only</span>
                        </div>
                    </div>
                `}
                ${(q||V)&&O`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${S9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${q?`#${q}`:`Search: ${V} · ${x}`}</span>
                    </div>
                `}
                <${Z6}
                    posts=${H2}
                    hasMore=${m1?S1:!1}
                    onLoadMore=${m1?R1:void 0}
                    timelineRef=${F$}
                    onHashtagClick=${f9}
                    onMessageRef=${M2}
                    onScrollToMessage=${Z2}
                    onFileRef=${O2}
                    onPostClick=${void 0}
                    onDeletePost=${m9}
                    emptyMessage=${q?`No posts with #${q}`:V?`No results for "${V}"`:void 0}
                    agents=${R_}
                    user=${P$}
                    reverse=${m1}
                    removingPostIds=${f$}
                    searchQuery=${V}
                />
                <${p8}
                    status=${a}
                    draft=${j_}
                    plan=${z_}
                    thought=${r}
                    pendingRequest=${Z_}
                    intent=${g}
                    turnId=${K_}
                    steerQueued=${r9}
                    onPanelToggle=${H0}
                />
                <${f8}
                    session=${F_}
                    onClose=${h1}
                    onRetry=${h9}
                    onInject=${i9}
                />
                <${W8}
                    onPost=${()=>{let{searchQuery:G,searchOpen:W}=F0.current||{};if(!G&&!W)u0(),i$()}}
                    onFocus=${i$}
                    searchMode=${k}
                    searchScope=${u}
                    onSearch=${R9}
                    onSearchScopeChange=${v}
                    onEnterSearch=${v9}
                    onExitSearch=${u9}
                    fileRefs=${A}
                    onRemoveFileRef=${U2}
                    onClearFileRefs=${I2}
                    onSetFileRefs=${j2}
                    messageRefs=${p}
                    onRemoveMessageRef=${x2}
                    onClearMessageRefs=${C2}
                    onSetMessageRefs=${T2}
                    onSwitchChat=${E3}
                    onRenameSession=${k3}
                    onCreateSession=${s9}
                    onDeleteSession=${w3}
                    onRestoreSession=${n9}
                    activeEditorPath=${j?null:m0}
                    onAttachEditorFile=${j?void 0:b2}
                    onOpenFilePill=${O2}
                    followupQueueCount=${Q_}
                    followupQueueItems=${g_}
                    onInjectQueuedFollowup=${g9}
                    onRemoveQueuedFollowup=${p9}
                    onSubmitIntercept=${c9}
                    onMessageResponse=${c1}
                    onSubmitError=${U}
                    onPopOutChat=${X?void 0:o9}
                    isAgentActive=${g1}
                    activeChatAgents=${I_}
                    currentChatJid=${$}
                    connectionStatus=${K}
                    voiceEnabled=${s0}
                    voiceListening=${t$}
                    onVoiceToggle=${X0}
                    onMicClick=${O$}
                    activeModel=${m_}
                    modelUsage=${e_}
                    thinkingLevel=${d_}
                    supportsThinking=${v_}
                    contextUsage=${n_}
                    notificationsEnabled=${W$}
                    notificationPermission=${C_}
                    onToggleNotifications=${o$}
                    onModelChange=${x_}
                    onModelStateChange=${p1}
                />
                <${c8}
                    request=${Z_}
                    onRespond=${()=>{t(null),u_.current=null}}
                />
            </div>
        </div>
    `}function OZ(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return O`<${UZ} locationParams=${_} />`}a3(O`<${OZ} />`,document.getElementById("app"));

//# debugId=4E5AB11269F94B2364756E2164756E21
//# sourceMappingURL=app.bundle.js.map
