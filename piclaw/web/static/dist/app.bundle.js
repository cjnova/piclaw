var u6=Object.defineProperty;var m6=(_)=>_;function R6(_,$){this[_]=m6.bind(null,$)}var v6=(_,$)=>{for(var N in $)u6(_,N,{get:$[N],enumerable:!0,configurable:!0,set:R6.bind($,N)})};var g6=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,N)=>(typeof require<"u"?require:$)[N]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var k$,h_,i1,c6,E2,x1,l1,n1,o1,G3,Z3,K3,p6,y$={},D$=[],h6=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,w$=Array.isArray;function U2(_,$){for(var N in $)_[N]=$[N];return _}function O3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function d1(_,$,N){var j,Z,K,z={};for(K in $)K=="key"?j=$[K]:K=="ref"?Z=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?k$.call(arguments,2):N),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return H$(_,z,j,Z,null)}function H$(_,$,N,j,Z){var K={type:_,props:$,key:N,ref:j,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++i1:Z,__i:-1,__u:0};return Z==null&&h_.vnode!=null&&h_.vnode(K),K}function b$(_){return _.children}function F$(_,$){this.props=_,this.context=$}function g2(_,$){if($==null)return _.__?g2(_.__,_.__i+1):null;for(var N;$<_.__k.length;$++)if((N=_.__k[$])!=null&&N.__e!=null)return N.__e;return typeof _.type=="function"?g2(_):null}function i6(_){if(_.__P&&_.__d){var $=_.__v,N=$.__e,j=[],Z=[],K=U2({},$);K.__v=$.__v+1,h_.vnode&&h_.vnode(K),W3(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[N]:null,j,N==null?g2($):N,!!(32&$.__u),Z),K.__v=$.__v,K.__.__k[K.__i]=K,t1(j,K,Z),$.__e=$.__=null,K.__e!=N&&r1(K)}}function r1(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),r1(_)}function S1(_){(!_.__d&&(_.__d=!0)&&E2.push(_)&&!E$.__r++||x1!=h_.debounceRendering)&&((x1=h_.debounceRendering)||l1)(E$)}function E$(){try{for(var _,$=1;E2.length;)E2.length>$&&E2.sort(n1),_=E2.shift(),$=E2.length,i6(_)}finally{E2.length=E$.__r=0}}function s1(_,$,N,j,Z,K,z,G,X,O,q){var V,F,w,f,T,R,x,H=j&&j.__k||D$,A=$.length;for(X=l6(N,$,H,X,A),V=0;V<A;V++)(w=N.__k[V])!=null&&(F=w.__i!=-1&&H[w.__i]||y$,w.__i=V,R=W3(_,w,F,Z,K,z,G,X,O,q),f=w.__e,w.ref&&F.ref!=w.ref&&(F.ref&&X3(F.ref,null,w),q.push(w.ref,w.__c||f,w)),T==null&&f!=null&&(T=f),(x=!!(4&w.__u))||F.__k===w.__k?X=a1(w,X,_,x):typeof w.type=="function"&&R!==void 0?X=R:f&&(X=f.nextSibling),w.__u&=-7);return N.__e=T,X}function l6(_,$,N,j,Z){var K,z,G,X,O,q=N.length,V=q,F=0;for(_.__k=Array(Z),K=0;K<Z;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=H$(null,z,null,null,null):w$(z)?z=_.__k[K]=H$(b$,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=H$(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,X=K+F,z.__=_,z.__b=_.__b+1,G=null,(O=z.__i=n6(z,N,X,V))!=-1&&(V--,(G=N[O])&&(G.__u|=2)),G==null||G.__v==null?(O==-1&&(Z>q?F--:Z<q&&F++),typeof z.type!="function"&&(z.__u|=4)):O!=X&&(O==X-1?F--:O==X+1?F++:(O>X?F--:F++,z.__u|=4))):_.__k[K]=null;if(V)for(K=0;K<q;K++)(G=N[K])!=null&&(2&G.__u)==0&&(G.__e==j&&(j=g2(G)),_4(G,G));return j}function a1(_,$,N,j){var Z,K;if(typeof _.type=="function"){for(Z=_.__k,K=0;Z&&K<Z.length;K++)Z[K]&&(Z[K].__=_,$=a1(Z[K],$,N,j));return $}_.__e!=$&&(j&&($&&_.type&&!$.parentNode&&($=g2(_)),N.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function n6(_,$,N,j){var Z,K,z,G=_.key,X=_.type,O=$[N],q=O!=null&&(2&O.__u)==0;if(O===null&&G==null||q&&G==O.key&&X==O.type)return N;if(j>(q?1:0)){for(Z=N-1,K=N+1;Z>=0||K<$.length;)if((O=$[z=Z>=0?Z--:K++])!=null&&(2&O.__u)==0&&G==O.key&&X==O.type)return z}return-1}function f1(_,$,N){$[0]=="-"?_.setProperty($,N==null?"":N):_[$]=N==null?"":typeof N!="number"||h6.test($)?N:N+"px"}function Q$(_,$,N,j,Z){var K,z;_:if($=="style")if(typeof N=="string")_.style.cssText=N;else{if(typeof j=="string"&&(_.style.cssText=j=""),j)for($ in j)N&&$ in N||f1(_.style,$,"");if(N)for($ in N)j&&N[$]==j[$]||f1(_.style,$,N[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(o1,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=N,N?j?N.u=j.u:(N.u=G3,_.addEventListener($,K?K3:Z3,K)):_.removeEventListener($,K?K3:Z3,K);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=N==null?"":N;break _}catch(G){}typeof N=="function"||(N==null||N===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&N==1?"":N))}}function T1(_){return function($){if(this.l){var N=this.l[$.type+_];if($.t==null)$.t=G3++;else if($.t<N.u)return;return N(h_.event?h_.event($):$)}}}function W3(_,$,N,j,Z,K,z,G,X,O){var q,V,F,w,f,T,R,x,H,A,C,c,a,t,n,Z_=$.type;if($.constructor!==void 0)return null;128&N.__u&&(X=!!(32&N.__u),K=[G=$.__e=N.__e]),(q=h_.__b)&&q($);_:if(typeof Z_=="function")try{if(x=$.props,H=Z_.prototype&&Z_.prototype.render,A=(q=Z_.contextType)&&j[q.__c],C=q?A?A.props.value:q.__:j,N.__c?R=(V=$.__c=N.__c).__=V.__E:(H?$.__c=V=new Z_(x,C):($.__c=V=new F$(x,C),V.constructor=Z_,V.render=d6),A&&A.sub(V),V.state||(V.state={}),V.__n=j,F=V.__d=!0,V.__h=[],V._sb=[]),H&&V.__s==null&&(V.__s=V.state),H&&Z_.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=U2({},V.__s)),U2(V.__s,Z_.getDerivedStateFromProps(x,V.__s))),w=V.props,f=V.state,V.__v=$,F)H&&Z_.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),H&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(H&&Z_.getDerivedStateFromProps==null&&x!==w&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(x,C),$.__v==N.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(x,V.__s,C)===!1){$.__v!=N.__v&&(V.props=x,V.state=V.__s,V.__d=!1),$.__e=N.__e,$.__k=N.__k,$.__k.some(function(i){i&&(i.__=$)}),D$.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&z.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(x,V.__s,C),H&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(w,f,T)})}if(V.context=C,V.props=x,V.__P=_,V.__e=!1,c=h_.__r,a=0,H)V.state=V.__s,V.__d=!1,c&&c($),q=V.render(V.props,V.state,V.context),D$.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,c&&c($),q=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++a<25);V.state=V.__s,V.getChildContext!=null&&(j=U2(U2({},j),V.getChildContext())),H&&!F&&V.getSnapshotBeforeUpdate!=null&&(T=V.getSnapshotBeforeUpdate(w,f)),t=q!=null&&q.type===b$&&q.key==null?e1(q.props.children):q,G=s1(_,w$(t)?t:[t],$,N,j,Z,K,z,G,X,O),V.base=$.__e,$.__u&=-161,V.__h.length&&z.push(V),R&&(V.__E=V.__=null)}catch(i){if($.__v=null,X||K!=null)if(i.then){for($.__u|=X?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;K[K.indexOf(G)]=null,$.__e=G}else{for(n=K.length;n--;)O3(K[n]);z3($)}else $.__e=N.__e,$.__k=N.__k,i.then||z3($);h_.__e(i,$,N)}else K==null&&$.__v==N.__v?($.__k=N.__k,$.__e=N.__e):G=$.__e=o6(N.__e,$,N,j,Z,K,z,X,O);return(q=h_.diffed)&&q($),128&$.__u?void 0:G}function z3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(z3))}function t1(_,$,N){for(var j=0;j<N.length;j++)X3(N[j],N[++j],N[++j]);h_.__c&&h_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(K){K.call(Z)})}catch(K){h_.__e(K,Z.__v)}})}function e1(_){return typeof _!="object"||_==null||_.__b>0?_:w$(_)?_.map(e1):U2({},_)}function o6(_,$,N,j,Z,K,z,G,X){var O,q,V,F,w,f,T,R=N.props||y$,x=$.props,H=$.type;if(H=="svg"?Z="http://www.w3.org/2000/svg":H=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),K!=null){for(O=0;O<K.length;O++)if((w=K[O])&&"setAttribute"in w==!!H&&(H?w.localName==H:w.nodeType==3)){_=w,K[O]=null;break}}if(_==null){if(H==null)return document.createTextNode(x);_=document.createElementNS(Z,H,x.is&&x),G&&(h_.__m&&h_.__m($,K),G=!1),K=null}if(H==null)R===x||G&&_.data==x||(_.data=x);else{if(K=K&&k$.call(_.childNodes),!G&&K!=null)for(R={},O=0;O<_.attributes.length;O++)R[(w=_.attributes[O]).name]=w.value;for(O in R)w=R[O],O=="dangerouslySetInnerHTML"?V=w:O=="children"||(O in x)||O=="value"&&("defaultValue"in x)||O=="checked"&&("defaultChecked"in x)||Q$(_,O,null,w,Z);for(O in x)w=x[O],O=="children"?F=w:O=="dangerouslySetInnerHTML"?q=w:O=="value"?f=w:O=="checked"?T=w:G&&typeof w!="function"||R[O]===w||Q$(_,O,w,R[O],Z);if(q)G||V&&(q.__html==V.__html||q.__html==_.innerHTML)||(_.innerHTML=q.__html),$.__k=[];else if(V&&(_.innerHTML=""),s1($.type=="template"?_.content:_,w$(F)?F:[F],$,N,j,H=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,K,z,K?K[0]:N.__k&&g2(N,0),G,X),K!=null)for(O=K.length;O--;)O3(K[O]);G||(O="value",H=="progress"&&f==null?_.removeAttribute("value"):f!=null&&(f!==_[O]||H=="progress"&&!f||H=="option"&&f!=R[O])&&Q$(_,O,f,R[O],Z),O="checked",T!=null&&T!=_[O]&&Q$(_,O,T,R[O],Z))}return _}function X3(_,$,N){try{if(typeof _=="function"){var j=typeof _.__u=="function";j&&_.__u(),j&&$==null||(_.__u=_($))}else _.current=$}catch(Z){h_.__e(Z,N)}}function _4(_,$,N){var j,Z;if(h_.unmount&&h_.unmount(_),(j=_.ref)&&(j.current&&j.current!=_.__e||X3(j,null,$)),(j=_.__c)!=null){if(j.componentWillUnmount)try{j.componentWillUnmount()}catch(K){h_.__e(K,$)}j.base=j.__P=null}if(j=_.__k)for(Z=0;Z<j.length;Z++)j[Z]&&_4(j[Z],$,N||typeof _.type!="function");N||O3(_.__e),_.__c=_.__=_.__e=void 0}function d6(_,$,N){return this.constructor(_,N)}function $4(_,$,N){var j,Z,K,z;$==document&&($=document.documentElement),h_.__&&h_.__(_,$),Z=(j=typeof N=="function")?null:N&&N.__k||$.__k,K=[],z=[],W3($,_=(!j&&N||$).__k=d1(b$,null,[_]),Z||y$,y$,$.namespaceURI,!j&&N?[N]:Z?null:$.firstChild?k$.call($.childNodes):null,K,!j&&N?N:Z?Z.__e:$.firstChild,j,z),t1(K,_,z)}k$=D$.slice,h_={__e:function(_,$,N,j){for(var Z,K,z;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((K=Z.constructor)&&K.getDerivedStateFromError!=null&&(Z.setState(K.getDerivedStateFromError(_)),z=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,j||{}),z=Z.__d),z)return Z.__E=Z}catch(G){_=G}throw _}},i1=0,c6=function(_){return _!=null&&_.constructor===void 0},F$.prototype.setState=function(_,$){var N;N=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=U2({},this.state),typeof _=="function"&&(_=_(U2({},N),this.props)),_&&U2(N,_),_!=null&&this.__v&&($&&this._sb.push($),S1(this))},F$.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),S1(this))},F$.prototype.render=b$,E2=[],l1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,n1=function(_,$){return _.__v.__b-$.__v.__b},E$.__r=0,o1=/(PointerCapture)$|Capture$/i,G3=0,Z3=T1(!1),K3=T1(!0),p6=0;var e2,z0,j3,I1,_$=0,N4=[],K0=h_,u1=K0.__b,m1=K0.__r,R1=K0.diffed,v1=K0.__c,g1=K0.unmount,c1=K0.__;function L3(_,$){K0.__h&&K0.__h(z0,_,_$||$),_$=0;var N=z0.__H||(z0.__H={__:[],__h:[]});return _>=N.__.length&&N.__.push({}),N.__[_]}function I(_){return _$=1,r6(Z4,_)}function r6(_,$,N){var j=L3(e2++,2);if(j.t=_,!j.__c&&(j.__=[N?N($):Z4(void 0,$),function(G){var X=j.__N?j.__N[0]:j.__[0],O=j.t(X,G);X!==O&&(j.__N=[O,j.__[1]],j.__c.setState({}))}],j.__c=z0,!z0.__f)){var Z=function(G,X,O){if(!j.__c.__H)return!0;var q=j.__c.__H.__.filter(function(F){return F.__c});if(q.every(function(F){return!F.__N}))return!K||K.call(this,G,X,O);var V=j.__c.props!==G;return q.some(function(F){if(F.__N){var w=F.__[0];F.__=F.__N,F.__N=void 0,w!==F.__[0]&&(V=!0)}}),K&&K.call(this,G,X,O)||V};z0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=z0;z0.componentWillUpdate=function(G,X,O){if(this.__e){var q=K;K=void 0,Z(G,X,O),K=q}z&&z.call(this,G,X,O)},z0.shouldComponentUpdate=Z}return j.__N||j.__}function m(_,$){var N=L3(e2++,3);!K0.__s&&j4(N.__H,$)&&(N.__=_,N.u=$,z0.__H.__h.push(N))}function y(_){return _$=5,i_(function(){return{current:_}},[])}function i_(_,$){var N=L3(e2++,7);return j4(N.__H,$)&&(N.__=_(),N.__H=$,N.__h=_),N.__}function P(_,$){return _$=8,i_(function(){return _},$)}function s6(){for(var _;_=N4.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(J$),$.__h.some(Y3),$.__h=[]}catch(N){$.__h=[],K0.__e(N,_.__v)}}}K0.__b=function(_){z0=null,u1&&u1(_)},K0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),c1&&c1(_,$)},K0.__r=function(_){m1&&m1(_),e2=0;var $=(z0=_.__c).__H;$&&(j3===z0?($.__h=[],z0.__h=[],$.__.some(function(N){N.__N&&(N.__=N.__N),N.u=N.__N=void 0})):($.__h.some(J$),$.__h.some(Y3),$.__h=[],e2=0)),j3=z0},K0.diffed=function(_){R1&&R1(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(N4.push($)!==1&&I1===K0.requestAnimationFrame||((I1=K0.requestAnimationFrame)||a6)(s6)),$.__H.__.some(function(N){N.u&&(N.__H=N.u),N.u=void 0})),j3=z0=null},K0.__c=function(_,$){$.some(function(N){try{N.__h.some(J$),N.__h=N.__h.filter(function(j){return!j.__||Y3(j)})}catch(j){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],K0.__e(j,N.__v)}}),v1&&v1(_,$)},K0.unmount=function(_){g1&&g1(_);var $,N=_.__c;N&&N.__H&&(N.__H.__.some(function(j){try{J$(j)}catch(Z){$=Z}}),N.__H=void 0,$&&K0.__e($,N.__v))};var p1=typeof requestAnimationFrame=="function";function a6(_){var $,N=function(){clearTimeout(j),p1&&cancelAnimationFrame($),setTimeout(_)},j=setTimeout(N,35);p1&&($=requestAnimationFrame(N))}function J$(_){var $=z0,N=_.__c;typeof N=="function"&&(_.__c=void 0,N()),z0=$}function Y3(_){var $=z0;_.__c=_.__(),z0=$}function j4(_,$){return!_||_.length!==$.length||$.some(function(N,j){return N!==_[j]})}function Z4(_,$){return typeof $=="function"?$(_):$}var K4=function(_,$,N,j){var Z;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],G=$[K]?($[0]|=z?1:2,N[$[K++]]):$[++K];z===3?j[0]=G:z===4?j[1]=Object.assign(j[1]||{},G):z===5?(j[1]=j[1]||{})[$[++K]]=G:z===6?j[1][$[++K]]+=G+"":z?(Z=_.apply(G,K4(_,G,N,["",null])),j.push(Z),G[0]?$[0]|=2:($[K-2]=0,$[K]=Z)):j.push(G)}return j},h1=new Map;function t6(_){var $=h1.get(this);return $||($=new Map,h1.set(this,$)),($=K4(this,$.get(_)||($.set(_,$=function(N){for(var j,Z,K=1,z="",G="",X=[0],O=function(F){K===1&&(F||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?X.push(0,F,z):K===3&&(F||z)?(X.push(3,F,z),K=2):K===2&&z==="..."&&F?X.push(4,F,0):K===2&&z&&!F?X.push(5,0,!0,z):K>=5&&((z||!F&&K===5)&&(X.push(K,0,z,Z),K=6),F&&(X.push(K,F,0,Z),K=6)),z=""},q=0;q<N.length;q++){q&&(K===1&&O(),O(q));for(var V=0;V<N[q].length;V++)j=N[q][V],K===1?j==="<"?(O(),X=[X],K=3):z+=j:K===4?z==="--"&&j===">"?(K=1,z=""):z=j+z[0]:G?j===G?G="":z+=j:j==='"'||j==="'"?G=j:j===">"?(O(),K=1):K&&(j==="="?(K=5,Z=z,z=""):j==="/"&&(K<5||N[q][V+1]===">")?(O(),K===3&&(X=X[0]),K=X,(X=X[0]).push(2,0,K),K=0):j===" "||j==="\t"||j===`
`||j==="\r"?(O(),K=2):z+=j),K===3&&z==="!--"&&(K=4,X=X[0])}return O(),X}(_)),$),arguments,[])).length>1?$:$[0]}var B=t6.bind(d1);var d0={};v6(d0,{uploadWorkspaceFile:()=>M$,uploadMedia:()=>J3,updateWorkspaceFile:()=>L5,submitAdaptiveCardAction:()=>y3,streamSidePrompt:()=>W5,steerAgentQueueItem:()=>O5,setWorkspaceVisibility:()=>Z$,setAgentThoughtVisibility:()=>k3,sendPeerAgentMessage:()=>K5,sendAgentMessage:()=>c2,searchPosts:()=>q3,respondToAgentRequest:()=>P$,renameWorkspaceFile:()=>x3,renameChatBranch:()=>j5,removeAgentQueueItem:()=>G5,pruneChatBranch:()=>Z5,moveWorkspaceEntry:()=>S3,getWorkspaceTree:()=>j$,getWorkspaceRawUrl:()=>C$,getWorkspaceFile:()=>P3,getWorkspaceDownloadUrl:()=>T3,getWorkspaceBranch:()=>X5,getTimeline:()=>$$,getThumbnailUrl:()=>w3,getThread:()=>B3,getPostsByHashtag:()=>V3,getMediaUrl:()=>j2,getMediaText:()=>b3,getMediaInfo:()=>p2,getMediaBlob:()=>A3,getChatBranches:()=>N5,getAgents:()=>H3,getAgentThought:()=>E3,getAgentStatus:()=>F3,getAgentQueueState:()=>Y5,getAgentModels:()=>N$,getAgentContext:()=>z5,getActiveChatAgents:()=>Q3,forkChatBranch:()=>A$,deleteWorkspaceFile:()=>f3,deletePost:()=>U3,createWorkspaceFile:()=>C3,createReply:()=>$5,createPost:()=>_5,attachWorkspaceFile:()=>M3,addToWhitelist:()=>D3,SSEClient:()=>x$});async function f_(_,$={}){let N=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!N.ok){let j=await N.json().catch(()=>({error:"Unknown error"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}function z4(_){let $=String(_||"").split(`
`),N="message",j=[];for(let K of $)if(K.startsWith("event:"))N=K.slice(6).trim()||"message";else if(K.startsWith("data:"))j.push(K.slice(5).trim());let Z=j.join(`
`);if(!Z)return null;try{return{event:N,data:JSON.parse(Z)}}catch{return{event:N,data:Z}}}async function e6(_,$){if(!_.body)throw Error("Missing event stream body");let N=_.body.getReader(),j=new TextDecoder,Z="";while(!0){let{value:z,done:G}=await N.read();if(G)break;Z+=j.decode(z,{stream:!0});let X=Z.split(`

`);Z=X.pop()||"";for(let O of X){let q=z4(O);if(q)$(q.event,q.data)}}Z+=j.decode();let K=z4(Z);if(K)$(K.event,K.data)}async function $$(_=10,$=null,N=null){let j=`/timeline?limit=${_}`;if($)j+=`&before=${$}`;if(N)j+=`&chat_jid=${encodeURIComponent(N)}`;return f_(j)}async function V3(_,$=50,N=0,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"";return f_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${N}${Z}`)}async function q3(_,$=50,N=0,j=null,Z="current",K=null){let z=j?`&chat_jid=${encodeURIComponent(j)}`:"",G=Z?`&scope=${encodeURIComponent(Z)}`:"",X=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return f_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${N}${z}${G}${X}`)}async function B3(_,$=null){let N=$?`?chat_jid=${encodeURIComponent($)}`:"";return f_(`/thread/${_}${N}`)}async function _5(_,$=[],N=null){let j=N?`?chat_jid=${encodeURIComponent(N)}`:"";return f_(`/post${j}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function $5(_,$,N=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return f_(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:N})})}async function U3(_,$=!1,N=null){let j=N?`&chat_jid=${encodeURIComponent(N)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${j}`;return f_(Z,{method:"DELETE"})}async function c2(_,$,N=null,j=[],Z=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return f_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:N,media_ids:j,mode:Z})})}async function Q3(){return f_("/agent/active-chats")}async function N5(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/branches${$}`)}async function A$(_,$={}){return f_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function j5(_,$={}){return f_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function Z5(_){return f_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function K5(_,$,N,j="auto",Z={}){let K={source_chat_jid:_,content:N,mode:j,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return f_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function H3(){return f_("/agent/roster")}async function F3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/status${$}`)}async function z5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/context${$}`)}async function Y5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/queue-state${$}`)}async function G5(_,$=null){let N=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!N.ok){let j=await N.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}async function O5(_,$=null){let N=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!N.ok){let j=await N.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}async function N$(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/models${$}`)}async function J3(_){let $=new FormData;$.append("file",_);let N=await fetch("/media/upload",{method:"POST",body:$});if(!N.ok){let j=await N.json().catch(()=>({error:"Upload failed"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}async function P$(_,$,N=null){let j=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:N||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function y3(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let N=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(N.error||`HTTP ${$.status}`)}return $.json()}async function W5(_,$={}){let N=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!N.ok){let K=await N.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${N.status}`)}let j=null,Z=null;if(await e6(N,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")j=z;else if(K==="side_prompt_error")Z=z}),Z){let K=Error(Z?.error||"Side prompt failed");throw K.payload=Z,K}return j}async function D3(_,$){let N=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!N.ok){let j=await N.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}async function E3(_,$="thought"){let N=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return f_(N)}async function k3(_,$,N){return f_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(N)})})}function j2(_){return`/media/${_}`}function w3(_){return`/media/${_}/thumbnail`}async function p2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function b3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function A3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function j$(_="",$=2,N=!1){let j=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${N?"1":"0"}`;return f_(j)}async function X5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return f_($)}async function P3(_,$=20000,N=null){let j=N?`&mode=${encodeURIComponent(N)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${j}`;return f_(Z)}async function L5(_,$){return f_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function M3(_){return f_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function M$(_,$="",N={}){let j=new FormData;j.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(N.overwrite)Z.set("overwrite","1");let K=Z.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",G=await fetch(""+z,{method:"POST",body:j});if(!G.ok){let X=await G.json().catch(()=>({error:"Upload failed"})),O=Error(X.error||`HTTP ${G.status}`);throw O.status=G.status,O.code=X.code,O}return G.json()}async function C3(_,$,N=""){let j=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:N})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Create failed"})),K=Error(Z.error||`HTTP ${j.status}`);throw K.status=j.status,K.code=Z.code,K}return j.json()}async function x3(_,$){let N=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!N.ok){let j=await N.json().catch(()=>({error:"Rename failed"})),Z=Error(j.error||`HTTP ${N.status}`);throw Z.status=N.status,Z.code=j.code,Z}return N.json()}async function S3(_,$){let N=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!N.ok){let j=await N.json().catch(()=>({error:"Move failed"})),Z=Error(j.error||`HTTP ${N.status}`);throw Z.status=N.status,Z.code=j.code,Z}return N.json()}async function f3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return f_($,{method:"DELETE"})}async function Z$(_,$=!1){return f_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function C$(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function T3(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class x${constructor(_,$,N={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof N?.chatJid==="string"&&N.chatJid.trim()?N.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(N)=>{this.onEvent($,JSON.parse(N.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,N=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,N+$),this.reconnectAttempts=0;let j=Math.max(this.cooldownUntil-N,0),Z=Math.max(this.reconnectDelay,j);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function r0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function s_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function h2(_,$=!1){let N=r0(_);if(N===null)return $;return N==="true"}function i2(_,$=null){let N=r0(_);if(N===null)return $;let j=parseInt(N,10);return Number.isFinite(j)?j:$}function S$(_){return String(_||"").trim().toLowerCase()}function I3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return S$($[1]||"")}function Y4(_){let $=new Set,N=[];for(let j of Array.isArray(_)?_:[]){let Z=S$(j?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),N.push(j)}return N}function G4(_,$,N={}){let j=I3($);if(j==null)return[];let Z=typeof N?.currentChatJid==="string"?N.currentChatJid:null;return Y4(_).filter((K)=>{if(Z&&K?.chat_jid===Z)return!1;return S$(K?.agent_name).startsWith(j)})}function u3(_){let $=S$(_);return $?`@${$} `:""}function O4(_,$={}){let N=typeof $?.currentChatJid==="string"?$.currentChatJid:null,j=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return Y4(_).filter((Z)=>!(N&&Z?.chat_jid===N)).slice(0,j)}function W4({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:N=!1}={}){let j=Number(_||0),Z=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(j)||j<=0)return!1;if(Z<=0)return!1;let K=460+Z*68+(N?40:0);return j>=K}function Q2({prefix:_="file",label:$,title:N,onRemove:j,onClick:Z,removeTitle:K="Remove",icon:z="file"}){let G=`${_}-file-pill`,X=`${_}-file-name`,O=`${_}-file-remove`,q=z==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${G} title=${N||$} onClick=${Z}>
      ${q}
      <span class=${X}>${$}</span>
      ${j&&B`
        <button
          class=${O}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),j()}}
          title=${K}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var V5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function q5({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),N=_.tokens,j=_.contextWindow,Z=N!=null?`Context: ${X4(N)} / ${X4(j)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,z=2*Math.PI*7,G=$/100*z,X=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <span class="compose-context-pie icon-btn" title=${Z}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${X}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function X4(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function L4({onPost:_,onFocus:$,searchMode:N,searchScope:j="current",onSearch:Z,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:G,fileRefs:X=[],onRemoveFileRef:O,onClearFileRefs:q,messageRefs:V=[],onRemoveMessageRef:F,onClearMessageRefs:w,activeModel:f=null,modelUsage:T=null,thinkingLevel:R=null,supportsThinking:x=!1,contextUsage:H=null,notificationsEnabled:A=!1,notificationPermission:C="default",onToggleNotifications:c,onModelChange:a,onModelStateChange:t,activeEditorPath:n=null,onAttachEditorFile:Z_,onOpenFilePill:i,followupQueueItems:Q_=[],onInjectQueuedFollowup:B_,onRemoveQueuedFollowup:r,onSubmitIntercept:__,onMessageResponse:K_,onPopOutChat:N_,isAgentActive:G_=!1,activeChatAgents:X_=[],currentChatJid:y_="web:default"}){let[j_,E_]=I(""),[b_,a_]=I(""),[k_,m_]=I([]),[C_,l_]=I(!1),[h,W_]=I([]),[V_,L_]=I(0),[D_,A_]=I(!1),[R_,H_]=I([]),[M_,S_]=I(0),[Y0,n_]=I(!1),[e_,U0]=I(!1),[x_,_0]=I(!1),[Q0,D0]=I([]),[H0,G0]=I(!1),[E0,o_]=I(0),T_=y(null),M0=y(null),c_=y(null),d_=y(null),k0=y(null),U_=y(null),M=y(0),e=200,P_=(U)=>{let S=new Set,l=[];for(let z_ of U||[]){if(typeof z_!=="string")continue;let w_=z_.trim();if(!w_||S.has(w_))continue;S.add(w_),l.push(w_)}return l},v_=()=>{let U=r0("piclaw_compose_history");if(!U)return[];try{let S=JSON.parse(U);if(!Array.isArray(S))return[];return P_(S)}catch{return[]}},w0=(U)=>{s_("piclaw_compose_history",JSON.stringify(U))},a0=y(v_()),$0=y(-1),O0=y(""),L0=j_.trim()||k_.length>0||X.length>0||V.length>0,t0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),C0=typeof window<"u"&&typeof Notification<"u",v0=typeof window<"u"?Boolean(window.isSecureContext):!1,o2=C0&&v0&&C!=="denied",w2=C==="granted"&&A,c0=w2?"Disable notifications":"Enable notifications",N0=O4(X_,{currentChatJid:y_,limit:4}),K2=N0.length>0,W0=!N&&W4({footerWidth:E0,visibleAgentCount:N0.length,hasContextIndicator:Boolean(H&&H.percent!=null)}),j0=f||"",I_=x&&R?` (${R})`:"",I0=I_.trim()?`${R}`:"",p0=typeof T?.hint_short==="string"?T.hint_short.trim():"",z2=[I0||null,p0||null].filter(Boolean).join(" • "),J2=[j0?`Current model: ${j0}${I_}`:null,T?.plan?`Plan: ${T.plan}`:null,p0||null,T?.primary?.reset_description||null,T?.secondary?.reset_description||null].filter(Boolean),b2=e_?"Switching model…":J2.join(" • ")||`Current model: ${j0}${I_} (tap to open model picker)`,F0=(U)=>{if(!U||typeof U!=="object")return;let S=U.model??U.current;if(typeof t==="function")t({model:S??null,thinking_level:U.thinking_level??null,supports_thinking:U.supports_thinking,provider_usage:U.provider_usage??null});if(S&&typeof a==="function")a(S)},A2=(U)=>{let S=U||T_.current;if(!S)return;S.style.height="auto",S.style.height=`${S.scrollHeight}px`,S.style.overflowY="hidden"},d2=(U)=>{if(!U.startsWith("/")||U.includes(`
`)){A_(!1),W_([]);return}let S=U.toLowerCase().split(" ")[0];if(S.length<1){A_(!1),W_([]);return}let l=V5.filter((z_)=>z_.name.startsWith(S)||z_.name.replace(/-/g,"").startsWith(S.replace(/-/g,"")));if(l.length>0&&!(l.length===1&&l[0].name===S))n_(!1),H_([]),W_(l),L_(0),A_(!0);else A_(!1),W_([])},y2=(U)=>{let S=j_,l=S.indexOf(" "),z_=l>=0?S.slice(l):"",w_=U.name+z_;E_(w_),A_(!1),W_([]),requestAnimationFrame(()=>{let r_=T_.current;if(!r_)return;let F_=w_.length;r_.selectionStart=F_,r_.selectionEnd=F_,r_.focus()})},m2=(U)=>{if(I3(U)==null){n_(!1),H_([]);return}let S=G4(X_,U,{currentChatJid:y_});if(S.length>0&&!(S.length===1&&u3(S[0].agent_name).trim().toLowerCase()===String(U||"").trim().toLowerCase()))A_(!1),W_([]),H_(S),S_(0),n_(!0);else n_(!1),H_([])},V2=(U)=>{let S=u3(U?.agent_name);if(!S)return;E_(S),n_(!1),H_([]),requestAnimationFrame(()=>{let l=T_.current;if(!l)return;let z_=S.length;l.selectionStart=z_,l.selectionEnd=z_,l.focus()})},t_=(U)=>{if(N)a_(U);else E_(U),d2(U),m2(U);requestAnimationFrame(()=>A2())},P2=(U)=>{let S=N?b_:j_,l=S&&!S.endsWith(`
`)?`
`:"",z_=`${S}${l}${U}`.trimStart();t_(z_)},x0=(U)=>{let S=U?.command?.model_label;if(S)return S;let l=U?.command?.message;if(typeof l==="string"){let z_=l.match(/•\s+([^\n]+?)\s+\(current\)/);if(z_?.[1])return z_[1].trim()}return null},S0=async(U)=>{if(N||e_)return;U0(!0);try{let S=await c2("default",U,null,[],null,y_),l=x0(S);F0({model:l??f??null,thinking_level:S?.command?.thinking_level,supports_thinking:S?.command?.supports_thinking});try{let z_=await N$(y_);if(z_)F0(z_)}catch{}return _?.(),!0}catch(S){return console.error("Failed to switch model:",S),alert("Failed to switch model: "+S.message),!1}finally{U0(!1)}},Y2=async()=>{await S0("/cycle-model")},L$=async(U)=>{if(!U||e_)return;if(await S0(`/model ${U}`))_0(!1)},q0=(U)=>{U.preventDefault(),U.stopPropagation(),_0((S)=>!S)},M2=(U)=>{if(U==="queue"||U==="steer"||U==="auto")return U;return G_?"queue":null},G2=async(U,S,l={})=>{let{includeMedia:z_=!0,includeFileRefs:w_=!0,includeMessageRefs:r_=!0,clearAfterSubmit:F_=!0,recordHistory:Z0=!0}=l||{},i0=typeof U==="string"?U:U&&typeof U?.target?.value==="string"?U.target.value:j_,D2=typeof i0==="string"?i0:"";if(!D2.trim()&&(z_?k_.length===0:!0)&&(w_?X.length===0:!0)&&(r_?V.length===0:!0))return;A_(!1),W_([]),n_(!1),H_([]);let u0=z_?[...k_]:[],W2=w_?[...X]:[],X2=r_?[...V]:[],l0=D2.trim();if(Z0&&l0){let L2=a0.current,J0=P_(L2.filter((f2)=>f2!==l0));if(J0.push(l0),J0.length>200)J0.splice(0,J0.length-200);a0.current=J0,w0(J0),$0.current=-1,O0.current=""}if(F_)E_(""),m_([]),q?.(),w?.();(async()=>{try{if(await __?.({content:l0,submitMode:S,fileRefs:W2,messageRefs:X2,mediaFiles:u0})){_?.();return}let J0=[];for(let u of u0){let d=await J3(u);J0.push(d.id)}let f2=W2.length?`Files:
${W2.map((u)=>`- ${u}`).join(`
`)}`:"",L=X2.length?`Referenced messages:
${X2.map((u)=>`- message:${u}`).join(`
`)}`:"",Q=J0.length?`Images:
${J0.map((u,d)=>{let o=u0[d]?.name||`image-${d+1}`;return`- attachment:${u} (${o})`}).join(`
`)}`:"",E=[l0,f2,L,Q].filter(Boolean).join(`

`),D=await c2("default",E,null,J0,M2(S),y_);if(K_?.(D),D?.command){F0({model:D.command.model_label??f??null,thinking_level:D.command.thinking_level,supports_thinking:D.command.supports_thinking});try{let u=await N$(y_);if(u)F0(u)}catch{}}_?.()}catch(L2){console.error("Failed to post:",L2)}})()},O2=(U)=>{B_?.(U)},C2=(U)=>{if(U.isComposing)return;if(N&&U.key==="Escape"){U.preventDefault(),a_(""),G?.();return}if(Y0&&R_.length>0){let S=T_.current?.value??(N?b_:j_);if(!String(S||"").match(/^@([a-zA-Z0-9_-]*)$/))n_(!1),H_([]);else{if(U.key==="ArrowDown"){U.preventDefault(),S_((l)=>(l+1)%R_.length);return}if(U.key==="ArrowUp"){U.preventDefault(),S_((l)=>(l-1+R_.length)%R_.length);return}if(U.key==="Tab"||U.key==="Enter"){U.preventDefault(),V2(R_[M_]);return}if(U.key==="Escape"){U.preventDefault(),n_(!1),H_([]);return}}}if(D_&&h.length>0){let S=T_.current?.value??(N?b_:j_);if(!String(S||"").startsWith("/"))A_(!1),W_([]);else{if(U.key==="ArrowDown"){U.preventDefault(),L_((l)=>(l+1)%h.length);return}if(U.key==="ArrowUp"){U.preventDefault(),L_((l)=>(l-1+h.length)%h.length);return}if(U.key==="Tab"){U.preventDefault(),y2(h[V_]);return}if(U.key==="Enter"&&!U.shiftKey){if(!(T_.current?.value??(N?b_:j_)).includes(" ")){U.preventDefault();let w_=h[V_];A_(!1),W_([]),G2(w_.name);return}}if(U.key==="Escape"){U.preventDefault(),A_(!1),W_([]);return}}}if(!N&&(U.key==="ArrowUp"||U.key==="ArrowDown")&&!U.metaKey&&!U.ctrlKey&&!U.altKey&&!U.shiftKey){let S=T_.current;if(!S)return;let l=S.value||"",z_=S.selectionStart===0&&S.selectionEnd===0,w_=S.selectionStart===l.length&&S.selectionEnd===l.length;if(U.key==="ArrowUp"&&z_||U.key==="ArrowDown"&&w_){let r_=a0.current;if(!r_.length)return;U.preventDefault();let F_=$0.current;if(U.key==="ArrowUp"){if(F_===-1)O0.current=l,F_=r_.length-1;else if(F_>0)F_-=1;$0.current=F_,t_(r_[F_]||"")}else{if(F_===-1)return;if(F_<r_.length-1)F_+=1,$0.current=F_,t_(r_[F_]||"");else $0.current=-1,t_(O0.current||""),O0.current=""}requestAnimationFrame(()=>{let Z0=T_.current;if(!Z0)return;let i0=Z0.value.length;Z0.selectionStart=i0,Z0.selectionEnd=i0});return}}if(U.key==="Enter"&&!U.shiftKey&&(U.ctrlKey||U.metaKey)){U.preventDefault();let S=T_.current?.value??(N?b_:j_);if(N){if(S.trim())Z?.(S.trim(),j)}else G2(S,"steer");return}if(U.key==="Enter"&&!U.shiftKey){U.preventDefault();let S=T_.current?.value??(N?b_:j_);if(N){if(S.trim())Z?.(S.trim(),j)}else G2(S)}},h0=(U)=>{let S=Array.from(U||[]).filter((l)=>l&&l.type&&l.type.startsWith("image/"));if(!S.length)return;m_((l)=>[...l,...S])},e0=(U)=>{h0(U.target.files),U.target.value=""},f0=(U)=>{if(N)return;U.preventDefault(),U.stopPropagation(),M.current+=1,l_(!0)},_2=(U)=>{if(N)return;if(U.preventDefault(),U.stopPropagation(),M.current=Math.max(0,M.current-1),M.current===0)l_(!1)},x2=(U)=>{if(N)return;if(U.preventDefault(),U.stopPropagation(),U.dataTransfer)U.dataTransfer.dropEffect="copy";l_(!0)},S2=(U)=>{if(N)return;U.preventDefault(),U.stopPropagation(),M.current=0,l_(!1),h0(U.dataTransfer?.files||[])},$2=(U)=>{if(N)return;let S=U.clipboardData?.items;if(!S||!S.length)return;let l=[];for(let z_ of S){if(z_.kind!=="file")continue;let w_=z_.getAsFile?.();if(w_)l.push(w_)}if(l.length>0)U.preventDefault(),h0(l)},q2=(U)=>{m_((S)=>S.filter((l,z_)=>z_!==U))},r2=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((U)=>{let{latitude:S,longitude:l,accuracy:z_}=U.coords,w_=`${S.toFixed(5)}, ${l.toFixed(5)}`,r_=Number.isFinite(z_)?` ±${Math.round(z_)}m`:"",F_=`https://maps.google.com/?q=${S},${l}`,Z0=`Location: ${w_}${r_} ${F_}`;P2(Z0)},(U)=>{let S=U?.message||"Unable to retrieve location.";alert(`Location error: ${S}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};m(()=>{if(!x_)return;G0(!0),N$(y_).then((U)=>{let S=Array.isArray(U?.models)?U.models.filter((l)=>typeof l==="string"&&l.trim().length>0):[];D0(S),F0(U)}).catch((U)=>{console.warn("Failed to load model list:",U),D0([])}).finally(()=>{G0(!1)})},[x_,f]),m(()=>{if(N)_0(!1),A_(!1),W_([]),n_(!1),H_([])},[N]),m(()=>{if(!x_)return;let U=(S)=>{let l=d_.current,z_=k0.current,w_=S.target;if(l&&l.contains(w_))return;if(z_&&z_.contains(w_))return;_0(!1)};return document.addEventListener("pointerdown",U),()=>document.removeEventListener("pointerdown",U)},[x_]),m(()=>{let U=()=>{let r_=U_.current?.clientWidth||0;o_((F_)=>F_===r_?F_:r_)};U();let S=U_.current,l=0,z_=()=>{if(l)cancelAnimationFrame(l);l=requestAnimationFrame(()=>{l=0,U()})},w_=null;if(S&&typeof ResizeObserver<"u")w_=new ResizeObserver(()=>z_()),w_.observe(S);if(typeof window<"u")window.addEventListener("resize",z_);return()=>{if(l)cancelAnimationFrame(l);if(w_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",z_)}},[N,f,N0.length,H?.percent]);let b0=(U)=>{let S=U.target.value;A2(U.target),t_(S)};return m(()=>{requestAnimationFrame(()=>A2())},[j_,b_,N]),m(()=>{if(N)return;m2(j_)},[X_,y_,j_,N]),B`
        <div class="compose-box">
            ${!N&&Q_.length>0&&B`
                <div class="compose-queue-stack">
                    ${Q_.map((U)=>{let S=typeof U?.content==="string"?U.content:"";if(!S.trim())return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${S}>
                                    ${S}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>O2(U)}
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
                                    onClick=${()=>r?.(U)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        `})}
                </div>
            `}
            <div
                class=${`compose-input-wrapper${C_?" drag-active":""}`}
                onDragEnter=${f0}
                onDragOver=${x2}
                onDragLeave=${_2}
                onDrop=${S2}
            >
                <div class="compose-input-main">
                    ${(X.length>0||k_.length>0||V.length>0)&&B`
                        <div class="compose-file-refs">
                            ${V.map((U)=>{return B`
                                    <${Q2}
                                        key=${"msg-"+U}
                                        prefix="compose"
                                        label=${"msg:"+U}
                                        title=${"Message reference: "+U}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>F?.(U)}
                                    />
                                `})}
                            ${X.map((U)=>{let S=U.split("/").pop()||U;return B`
                                    <${Q2}
                                        prefix="compose"
                                        label=${S}
                                        title=${U}
                                        onClick=${()=>i?.(U)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>O?.(U)}
                                    />
                                `})}
                            ${k_.map((U,S)=>{let l=U?.name||`image-${S+1}`;return B`
                                    <${Q2}
                                        key=${l+S}
                                        prefix="compose"
                                        label=${l}
                                        title=${l}
                                        removeTitle="Remove image"
                                        onRemove=${()=>q2(S)}
                                    />
                                `})}
                        </div>
                    `}
                    ${!N&&typeof N_==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>N_?.()}
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
                        ref=${T_}
                        placeholder=${N?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${N?b_:j_}
                        onInput=${b0}
                        onKeyDown=${C2}
                        onPaste=${$2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${Y0&&R_.length>0&&B`
                        <div class="slash-autocomplete" ref=${c_}>
                            ${R_.map((U,S)=>B`
                                <div
                                    key=${U.chat_jid||U.agent_name}
                                    class=${`slash-item${S===M_?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),V2(U)}}
                                    onMouseEnter=${()=>S_(S)}
                                >
                                    <span class="slash-name">@${U.agent_name}</span>
                                    <span class="slash-desc">${U.display_name||U.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${D_&&h.length>0&&B`
                        <div class="slash-autocomplete" ref=${M0}>
                            ${h.map((U,S)=>B`
                                <div
                                    key=${U.name}
                                    class=${`slash-item${S===V_?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),y2(U)}}
                                    onMouseEnter=${()=>L_(S)}
                                >
                                    <span class="slash-name">${U.name}</span>
                                    <span class="slash-desc">${U.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${x_&&!N&&B`
                        <div class="compose-model-popup" ref=${d_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${H0&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!H0&&Q0.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!H0&&Q0.map((U)=>B`
                                    <button
                                        key=${U}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${f===U?" active":""}`}
                                        onClick=${()=>{L$(U)}}
                                        disabled=${e_}
                                    >
                                        ${U}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{Y2()}}
                                    disabled=${e_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${U_}>
                    ${!N&&f&&B`
                    <div class="compose-meta-row">
                        ${!N&&f&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${b2}
                                    aria-label="Open model picker"
                                    onClick=${q0}
                                    disabled=${e_}
                                >
                                    ${e_?"Switching…":j0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!e_&&z2&&B`
                                        <span class="compose-model-usage-hint" title=${b2}>
                                            ${z2}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${N?"search-mode":""}">
                    ${W0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${N0.map((U)=>B`
                                <button
                                    key=${U.chat_jid||U.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${U.is_active?" active":""}`}
                                    onClick=${()=>V2(U)}
                                    title=${`${U.display_name||U.chat_jid||"Active agent"} — insert @${U.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${U.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!N&&H&&H.percent!=null&&B`
                        <${q5} usage=${H} />
                    `}
                    ${N&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${j}
                                onChange=${(U)=>K?.(U.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${N?G:z}
                        title=${N?"Close search":"Search"}
                    >
                        ${N?B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${t0&&!N&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${r2}
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
                    ${o2&&!N&&B`
                        <button
                            class=${`icon-btn notification-btn${w2?" active":""}`}
                            onClick=${c}
                            title=${c0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!N&&B`
                        ${n&&Z_&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${Z_}
                                title=${`Attach open file: ${n}`}
                                type="button"
                                disabled=${X.includes(n)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${e0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{G2()}}
                            disabled=${!L0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var q4="piclaw_theme",v3="piclaw_tint",I$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},B5={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},V4={default:{label:"Default",mode:"auto",light:I$,dark:B5},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},U5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],u$={theme:"default",tint:null},B4="light",m3=!1;function U4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function l2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let N=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(N)&&!/^[0-9a-fA-F]{6}$/.test(N))return null;let j=N.length===3?N.split("").map((K)=>K+K).join(""):N,Z=parseInt(j,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${j.toLowerCase()}`}}function Q5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let N=document.createElement("div");if(N.style.color="",N.style.color=$,!N.style.color)return null;let j=N.style.color;try{if(document.body)N.style.display="none",document.body.appendChild(N),j=getComputedStyle(N).color||N.style.color,document.body.removeChild(N)}catch{}let Z=j.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let K=parseInt(Z[1],10),z=parseInt(Z[2],10),G=parseInt(Z[3],10);if(![K,z,G].every((O)=>Number.isFinite(O)))return null;let X=`#${[K,z,G].map((O)=>O.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:G,hex:X}}function Q4(_){return l2(_)||Q5(_)}function K$(_,$,N){let j=Math.round(_.r+($.r-_.r)*N),Z=Math.round(_.g+($.g-_.g)*N),K=Math.round(_.b+($.b-_.b)*N);return`rgb(${j} ${Z} ${K})`}function R3(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function H4(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function g3(_){return V4[_]||V4.default}function H5(_){return _.mode==="auto"?H4():_.mode}function F5(_,$){let N=g3(_);if($==="dark"&&N.dark)return N.dark;if($==="light"&&N.light)return N.light;return N.dark||N.light||I$}function J5(_,$,N){let j=Q4($);if(!j)return _;let Z=l2(_.bgPrimary),K=l2(_.bgSecondary),z=l2(_.bgHover),G=l2(_.borderColor);if(!Z||!K||!z||!G)return _;let O=l2(N==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:K$(Z,j,0.08),bgSecondary:K$(K,j,0.12),bgHover:K$(z,j,0.16),borderColor:K$(G,j,0.08),accent:j.hex,accentHover:O?K$(j,O,0.18):j.hex}}function y5(_,$){if(typeof document>"u")return;let N=document.documentElement,j=_.accent,Z=Q4(j),K=Z?R3(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=Z?R3(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=Z?R3(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":j,"--accent-hover":_.accentHover||j,"--accent-soft":z,"--accent-soft-strong":G,"--danger-color":_.danger||I$.danger,"--success-color":_.success||I$.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([O,q])=>{if(q)N.style.setProperty(O,q)})}function D5(){if(typeof document>"u")return;let _=document.documentElement;U5.forEach(($)=>_.style.removeProperty($))}function f$(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function E5(_,$){if(typeof document>"u")return;let N=f$("theme-color");if(N&&_)N.setAttribute("content",_);let j=f$("msapplication-TileColor");if(j&&_)j.setAttribute("content",_);let Z=f$("msapplication-navbutton-color");if(Z&&_)Z.setAttribute("content",_);let K=f$("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function k5(){if(typeof window>"u")return;let _={...u$,mode:B4};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function c3(_,$={}){if(typeof window>"u"||typeof document>"u")return;let N=U4(_?.theme||"default"),j=_?.tint?String(_.tint).trim():null,Z=g3(N),K=H5(Z),z=F5(N,K);u$={theme:N,tint:j},B4=K;let G=document.documentElement;G.dataset.theme=K,G.dataset.colorTheme=N,G.dataset.tint=j?String(j):"",G.style.colorScheme=K;let X=z;if(N==="default"&&j)X=J5(z,j,K);if(N==="default"&&!j)D5();else y5(X,K);if(E5(X.bgPrimary,K),k5(),$.persist!==!1)if(s_(q4,N),j)s_(v3,j);else s_(v3,"")}function T$(){if(g3(u$.theme).mode!=="auto")return;c3(u$,{persist:!1})}function F4(){if(typeof window>"u")return()=>{};let _=U4(r0(q4)||"default"),$=r0(v3),N=$?$.trim():null;if(c3({theme:_,tint:N},{persist:!1}),window.matchMedia&&!m3){let j=window.matchMedia("(prefers-color-scheme: dark)");if(j.addEventListener)j.addEventListener("change",T$);else if(j.addListener)j.addListener(T$);return m3=!0,()=>{if(j.removeEventListener)j.removeEventListener("change",T$);else if(j.removeListener)j.removeListener(T$);m3=!1}}return()=>{}}function J4(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let N=_.theme??_.name??_.colorTheme,j=_.tint??null;c3({theme:N||"default",tint:j},{persist:!0})}function y4(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return H4()}var m$=/#(\w+)/g,w5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),b5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),A5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),P5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},M5=new Set(["http:","https:","mailto:",""]);function D4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function T2(_,$={}){if(!_)return null;let N=String(_).trim();if(!N)return null;if(N.startsWith("#")||N.startsWith("/"))return N;if(N.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(N))return N;return null}if(N.startsWith("blob:"))return N;try{let j=new URL(N,typeof window<"u"?window.location.origin:"http://localhost");if(!M5.has(j.protocol))return null;return j.href}catch{return null}}function E4(_,$={}){if(!_)return"";let N=new DOMParser().parseFromString(_,"text/html"),j=[],Z=N.createTreeWalker(N.body,NodeFilter.SHOW_ELEMENT),K;while(K=Z.nextNode())j.push(K);for(let z of j){let G=z.tagName.toLowerCase();if(!b5.has(G)){let O=z.parentNode;if(!O)continue;while(z.firstChild)O.insertBefore(z.firstChild,z);O.removeChild(z);continue}let X=P5[G]||new Set;for(let O of Array.from(z.attributes)){let q=O.name.toLowerCase(),V=O.value;if(q.startsWith("on")){z.removeAttribute(O.name);continue}if(q.startsWith("data-")||q.startsWith("aria-"))continue;if(X.has(q)||A5.has(q)){if(q==="href"){let F=T2(V);if(!F)z.removeAttribute(O.name);else if(z.setAttribute(O.name,F),G==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(q==="src"){let F=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,w=T2(F,{allowDataImage:G==="img"});if(!w)z.removeAttribute(O.name);else z.setAttribute(O.name,w)}continue}z.removeAttribute(O.name)}}return N.body.innerHTML}function k4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function R$(_,$=2){if(!_)return _;let N=_;for(let j=0;j<$;j+=1){let Z=k4(N);if(Z===N)break;N=Z}return N}function C5(_){if(!_)return{text:"",blocks:[]};let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=[],Z=[],K=!1,z=[];for(let G of N){if(!K&&G.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&G.trim().match(/^```\s*$/)){let X=j.length;j.push(z.join(`
`)),Z.push(`@@MERMAID_BLOCK_${X}@@`),K=!1,z=[];continue}if(K)z.push(G);else Z.push(G)}if(K)Z.push("```mermaid"),Z.push(...z);return{text:Z.join(`
`),blocks:j}}function x5(_){if(!_)return _;return R$(_,5)}function S5(_){let $=new TextEncoder().encode(String(_||"")),N="";for(let j of $)N+=String.fromCharCode(j);return btoa(N)}function f5(_){let $=atob(String(_||"")),N=new Uint8Array($.length);for(let j=0;j<$.length;j+=1)N[j]=$.charCodeAt(j);return new TextDecoder().decode(N)}function T5(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(N,j)=>{let Z=Number(j),K=$[Z]??"",z=x5(K);return`<div class="mermaid-container" data-mermaid="${S5(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function w4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,N)=>{if(N.includes(`
`))return`
\`\`\`
${N}
\`\`\`
`;return`\`${N}\``})}function b4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,N)=>{let j=N.trim(),Z=j.startsWith("/"),K=Z?j.slice(1).trim():j,X=(K.endsWith("/")?K.slice(0,-1).trim():K).split(/\s+/)[0]?.toLowerCase();if(!X||!w5.has(X))return $;if(X==="br")return Z?"":"<br>";if(Z)return`</${X}>`;return`<${X}>`})}function A4(_){if(!_)return _;let $=(N)=>N.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(N,j)=>`<pre><code>${$(j)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(N,j)=>`<code>${$(j)}</code>`)}function P4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),N=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),j=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=N.nextNode()){if(!Z.nodeValue)continue;let K=j(Z.nodeValue);if(K!==Z.nodeValue)Z.nodeValue=K}return $.body.innerHTML}function I5(_){if(!window.katex)return _;let $=(z)=>k4(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),N=(z)=>{let G=[],X=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(O)=>{let q=G.length;return G.push(O),`@@CODE_BLOCK_${q}@@`});return X=X.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(O)=>{let q=G.length;return G.push(O),`@@CODE_INLINE_${q}@@`}),{html:X,blocks:G}},j=(z,G)=>{if(!G.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(X,O)=>{let q=Number(O);return G[q]??""})},Z=N(_),K=Z.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,G,X)=>{try{let O=katex.renderToString($(X.trim()),{displayMode:!0,throwOnError:!1});return`${G}${O}`}catch(O){return`<span class="math-error" title="${D4(O.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,G,X)=>{if(/\s$/.test(X))return z;try{let O=katex.renderToString($(X),{displayMode:!1,throwOnError:!1});return`${G}${O}`}catch(O){return`${G}<span class="math-error" title="${D4(O.message)}">$${X}$</span>`}}),j(K,Z.blocks)}function u5(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),N=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),j=[],Z;while(Z=N.nextNode())j.push(Z);for(let K of j){let z=K.nodeValue;if(!z)continue;if(m$.lastIndex=0,!m$.test(z))continue;m$.lastIndex=0;let G=K.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let X=z.split(m$);if(X.length<=1)continue;let O=$.createDocumentFragment();X.forEach((q,V)=>{if(V%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",q),F.textContent=`#${q}`,O.appendChild(F)}else O.appendChild($.createTextNode(q))}),K.parentNode?.replaceChild(O,K)}return $.body.innerHTML}function m5(_){if(!_)return _;let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=[],Z=!1;for(let K of N){if(!Z&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,j.push("$$");continue}if(Z&&K.trim().match(/^```\s*$/)){Z=!1,j.push("$$");continue}j.push(K)}return j.join(`
`)}function R0(_,$,N={}){if(!_)return"";let j=m5(_),{text:Z,blocks:K}=C5(j),z=R$(Z,2),X=w4(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),O=b4(X),q=window.marked?marked.parse(O,{headerIds:!1,mangle:!1}):O.replace(/\n/g,"<br>");return q=A4(q),q=P4(q),q=I5(q),q=u5(q),q=T5(q,K),q=E4(q,N),q}function v$(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),N=R$($,2),Z=w4(N).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=b4(Z),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=A4(z),z=P4(z),z=E4(z),z}async function H2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:N}=window.beautifulMermaid,Z=y4()==="dark"?N["tokyo-night"]:N["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let G=z.dataset.mermaid,X=f5(G||""),O=R$(X,2),q=await $(O,{...Z,transparent:!0});z.innerHTML=q,z.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let X=document.createElement("pre");X.className="mermaid-error",X.textContent=`Diagram error: ${G.message}`,z.innerHTML="",z.appendChild(X),z.removeAttribute("data-mermaid")}}function M4(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let N=$.slice(4).trim();if(!N)return{type:"help"};if(N==="clear"||N==="close")return{type:"clear"};return{type:"ask",question:N}}function C4(_){return String(_||"").trim()||"web:default"}function x4(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function S4(_){if(!_)return!1;return _.status!=="running"}function f4(_){let $=String(_?.question||"").trim(),N=String(_?.answer||"").trim();if(!$&&!N)return"";return["BTW side conversation",$?`Question: ${$}`:null,N?`Answer:
${N}`:null].filter(Boolean).join(`

`)}function T4({session:_,onClose:$,onInject:N,onRetry:j}){let Z=y(null),K=y(null),z=_?.thinking?v$(_.thinking):"",G=_?.answer?R0(_.answer,null,{sanitize:!1}):"";if(m(()=>{if(Z.current&&z)H2(Z.current).catch(()=>{})},[z]),m(()=>{if(K.current&&G)H2(K.current).catch(()=>{})},[G]),!_)return null;let X=_.status==="running",O=Boolean(String(_.answer||"").trim()),q=Boolean(String(_.thinking||"").trim()),V=x4(_),F=S4(_),w=!X&&O,f=X?"Thinking…":_.status==="error"?"Error":"Done";return B`
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

            ${_.question&&B`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&B`<div class="btw-block btw-error">${_.error}</div>`}
            ${q&&B`
                <details class="btw-block btw-thinking" open=${X?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${V&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${F&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>j?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>N?.()} disabled=${!w}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var I4="PiClaw";function p3(_,$,N=!1){let j=_||"PiClaw",Z=j.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=Z.charCodeAt(0)%K.length,G=K[z],X=j.trim().toLowerCase(),O=typeof $==="string"?$.trim():"",q=O?O:null,V=N||X==="PiClaw".toLowerCase()||X==="pi";return{letter:Z,color:G,image:q||(V?"/static/icon-192.png":null)}}function u4(_,$){if(!_)return"PiClaw";let N=$[_]?.name||_;return N?N.charAt(0).toUpperCase()+N.slice(1):"PiClaw"}function m4(_,$){if(!_)return null;let N=$[_]||{};return N.avatar_url||N.avatarUrl||N.avatar||null}function R4(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",G=K?.dataset?.tint||"",X=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(X&&(G||z&&z!=="default"))return X}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],N=String(_),j=0;for(let K=0;K<N.length;K+=1)j=(j*31+N.charCodeAt(K))%2147483647;let Z=Math.abs(j)%$.length;return $[Z]}function R5(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let N=Date.parse($);return Number.isFinite(N)?N:null}function z$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function v4(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let N=_.status;if(typeof N==="string"&&N.trim())return N.trim();return z$(_)?"Compacting context":"Working..."}function v5(_){let $=Math.max(0,Math.floor(_/1000)),N=$%60,j=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(j).padStart(2,"0")}:${String(N).padStart(2,"0")}`;return`${j}:${String(N).padStart(2,"0")}`}function g4(_,$=Date.now()){let N=R5(_);if(N===null)return null;return v5(Math.max(0,$-N))}function c4({status:_,draft:$,plan:N,thought:j,pendingRequest:Z,intent:K,turnId:z,steerQueued:G,onPanelToggle:X}){let V=(h)=>{if(!h)return{text:"",totalLines:0,fullText:""};if(typeof h==="string"){let D_=h,A_=D_?D_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:D_,totalLines:A_,fullText:D_}}let W_=h.text||"",V_=h.fullText||h.full_text||W_,L_=Number.isFinite(h.totalLines)?h.totalLines:V_?V_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:W_,totalLines:L_,fullText:V_}},F=160,w=(h)=>{if(!h)return 1;return Math.max(1,Math.ceil(h.length/160))},f=(h,W_,V_)=>{let L_=(h||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!L_)return{text:"",omitted:0,totalLines:Number.isFinite(V_)?V_:0,visibleLines:0};let D_=L_.split(`
`),A_=D_.length>W_?D_.slice(0,W_).join(`
`):L_,R_=Number.isFinite(V_)?V_:D_.reduce((S_,Y0)=>S_+w(Y0),0),H_=A_?A_.split(`
`).reduce((S_,Y0)=>S_+w(Y0),0):0,M_=Math.max(R_-H_,0);return{text:A_,omitted:M_,totalLines:R_,visibleLines:H_}},T=V(N),R=V(j),x=V($),H=Boolean(T.text)||T.totalLines>0,A=Boolean(R.text)||R.totalLines>0,C=Boolean(x.fullText?.trim()||x.text?.trim());if(!_&&!C&&!H&&!A&&!Z&&!K)return null;let[c,a]=I(new Set),[t,n]=I(()=>Date.now()),Z_=(h)=>a((W_)=>{let V_=new Set(W_),L_=!V_.has(h);if(L_)V_.add(h);else V_.delete(h);if(typeof X==="function")X(h,L_);return V_});m(()=>{a(new Set)},[z]);let i=z$(_);m(()=>{if(!i)return;n(Date.now());let h=setInterval(()=>n(Date.now()),1000);return()=>clearInterval(h)},[i,_?.started_at,_?.startedAt]);let Q_=_?.turn_id||z,B_=R4(Q_),r=G?"turn-dot turn-dot-queued":"turn-dot",__=(h)=>h,K_=Boolean(_?.last_activity||_?.lastActivity),N_=(h)=>h==="warning"?"#f59e0b":h==="error"?"var(--danger-color)":h==="success"?"var(--success-color)":B_,G_=K?.kind||"info",X_=N_(G_),y_=N_(_?.kind||(i?"warning":"info")),j_="",E_=_?.title,b_=_?.status;if(_?.type==="plan")j_=E_?`Planning: ${E_}`:"Planning...";else if(_?.type==="tool_call")j_=E_?`Running: ${E_}`:"Running tool...";else if(_?.type==="tool_status")j_=E_?`${E_}: ${b_||"Working..."}`:b_||"Working...";else if(_?.type==="error")j_=E_||"Agent error";else j_=E_||b_||"Working...";if(K_)j_="Last activity just now";let a_=({panelTitle:h,text:W_,fullText:V_,totalLines:L_,maxLines:D_,titleClass:A_,panelKey:R_})=>{let H_=c.has(R_),M_=V_||W_||"",S_=typeof D_==="number",Y0=H_&&S_,n_=S_?f(M_,D_,L_):{text:M_||"",omitted:0,totalLines:Number.isFinite(L_)?L_:0};if(!M_&&!(Number.isFinite(n_.totalLines)&&n_.totalLines>0))return null;let e_=`agent-thinking-body${S_?" agent-thinking-body-collapsible":""}`,U0=S_?`--agent-thinking-collapsed-lines: ${D_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${H_?"true":"false"}
                data-collapsible=${S_?"true":"false"}
                style=${B_?`--turn-color: ${B_};`:""}
            >
                <div class="agent-thinking-title ${A_||""}">
                    ${B_&&B`<span class=${r} aria-hidden="true"></span>`}
                    ${h}
                    ${Y0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${h} panel`}
                            onClick=${()=>Z_(R_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${e_}
                    style=${U0}
                    dangerouslySetInnerHTML=${{__html:v$(M_)}}
                />
                ${!H_&&n_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>Z_(R_)}>
                        ▸ ${n_.omitted} more lines
                    </button>
                `}
                ${H_&&n_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>Z_(R_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},k_=Z?.tool_call?.title,m_=k_?`Awaiting approval: ${k_}`:"Awaiting approval",C_=i?g4(_,t):null,l_=(h,W_,V_=null)=>{let L_=v4(h);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${W_?`--turn-color: ${W_};`:""}
                title=${h?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${W_&&B`<span class=${r} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${L_}</span>
                    ${V_&&B`<span class="agent-status-elapsed">${V_}</span>`}
                </div>
                ${h.detail&&B`<div class="agent-thinking-body">${h.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${K&&l_(K,X_)}
            ${_?.type==="intent"&&l_(_,y_,C_)}
            ${Z&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${B_?`--turn-color: ${B_};`:""}>
                    <span class=${r} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${m_}</span>
                </div>
            `}
            ${H&&a_({panelTitle:__("Planning"),text:T.text,fullText:T.fullText,totalLines:T.totalLines,panelKey:"plan"})}
            ${A&&a_({panelTitle:__("Thoughts"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${C&&a_({panelTitle:__("Draft"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${K_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${B_?`--turn-color: ${B_};`:""}>
                    ${B_&&B`<span class=${r} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!K_&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${j_}</span>
                </div>
            `}
        </div>
    `}function p4({request:_,onRespond:$}){if(!_)return null;let{request_id:N,tool_call:j,options:Z,chat_jid:K}=_,z=j?.title||"Agent Request",G=j?.kind||"other",X=j?.rawInput||{},O=X.command||X.commands&&X.commands[0]||null,q=X.diff||null,V=X.fileName||X.path||null,F=j?.description||X.description||X.explanation||null,f=(Array.isArray(j?.locations)?j.locations:[]).map((A)=>A?.path).filter((A)=>Boolean(A)),T=Array.from(new Set([V,...f].filter(Boolean)));console.log("AgentRequestModal:",{request_id:N,tool_call:j,options:Z});let R=async(A)=>{try{await P$(N,A,K||null),$()}catch(C){console.error("Failed to respond to agent request:",C)}},x=async()=>{try{await D3(z,`Auto-approved: ${z}`),await P$(N,"approved",K||null),$()}catch(A){console.error("Failed to add to whitelist:",A)}},H=Z&&Z.length>0;return B`
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
                ${(F||O||q||T.length>0)&&B`
                    <div class="agent-request-body">
                        ${F&&B`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${T.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${T.map((A,C)=>B`<li key=${C}>${A}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${O&&B`
                            <pre class="agent-request-command">${O}</pre>
                        `}
                        ${q&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${H?Z.map((A)=>B`
                            <button 
                                key=${A.optionId||A.id||String(A)}
                                class="agent-request-btn ${A.kind==="allow_once"||A.kind==="allow_always"?"primary":""}"
                                onClick=${()=>R(A.optionId||A.id||A)}
                            >
                                ${A.name||A.label||A.optionId||A.id||String(A)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>R("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>R("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${x}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function h4({status:_}){if(_==="connected")return null;return B`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function i4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let j=new Date-$,Z=j/1000,K=86400000;if(j<K){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(j<5*K){let X=$.toLocaleDateString(void 0,{weekday:"short"}),O=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${X} ${O}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${G}`}function Y$(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function s0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function I2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var g5=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),c5=new Set(["text/markdown"]);function G$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(g5.has($)||$.startsWith("text/"))return"text";return"unsupported"}function l4(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return c5.has($)}function n4(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function p5(_){let N=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!N)return null;let j=N[1].length===3?N[1].split("").map((Z)=>`${Z}${Z}`).join(""):N[1];return{r:parseInt(j.slice(0,2),16),g:parseInt(j.slice(2,4),16),b:parseInt(j.slice(4,6),16)}}function h5(_){let N=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!N)return null;let j=Number(N[1]),Z=Number(N[2]),K=Number(N[3]);if(![j,Z,K].every((z)=>Number.isFinite(z)))return null;return{r:j,g:Z,b:K}}function o4(_){return p5(_)||h5(_)}function g$(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},N=$(_.r),j=$(_.g),Z=$(_.b);return 0.2126*N+0.7152*j+0.0722*Z}function i5(_,$){let N=Math.max(g$(_),g$($)),j=Math.min(g$(_),g$($));return(N+0.05)/(j+0.05)}function l5(_,$,N="#ffffff"){let j=o4(_);if(!j)return N;let Z=N,K=-1;for(let z of $){let G=o4(z);if(!G)continue;let X=i5(j,G);if(X>K)Z=z,K=X}return Z}function h3(){let _=getComputedStyle(document.documentElement),$=(f,T)=>{for(let R of f){let x=_.getPropertyValue(R).trim();if(x)return x}return T},N=$(["--text-primary","--color-text"],"#0f1419"),j=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),X=$(["--success-color","--color-success"],"#00ba7c"),O=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),q=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),w=l5(G,[N,Z],N);return{fg:N,fgMuted:j,bgPrimary:Z,bg:K,bgEmphasis:z,accent:G,good:X,warning:O,attention:q,border:V,fontFamily:F,buttonTextColor:w}}function d4(){let{fg:_,fgMuted:$,bg:N,bgEmphasis:j,accent:Z,good:K,warning:z,attention:G,border:X,fontFamily:O}=h3();return{fontFamily:O,containerStyles:{default:{backgroundColor:N,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:X},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var n5=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),r4=!1,c$=null,s4=!1;function i3(_){_.querySelector(".adaptive-card-notice")?.remove()}function o5(_,$,N="error"){i3(_);let j=document.createElement("div");j.className=`adaptive-card-notice adaptive-card-notice-${N}`,j.textContent=$,_.appendChild(j)}function d5(_,$=(N)=>R0(N,null)){let N=typeof _==="string"?_:String(_??"");if(!N.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(N),didProcess:!0}}function r5(_=($)=>R0($,null)){return($,N)=>{try{let j=d5($,_);N.outputHtml=j.outputHtml,N.didProcess=j.didProcess}catch(j){console.error("[adaptive-card] Failed to process markdown:",j),N.outputHtml=String($??""),N.didProcess=!1}}}function s5(_){if(s4||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=r5(),s4=!0}async function a5(){if(r4)return;if(c$)return c$;return c$=new Promise((_,$)=>{let N=document.createElement("script");N.src="/static/js/vendor/adaptivecards.min.js",N.onload=()=>{r4=!0,_()},N.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(N)}),c$}function t5(){return globalThis.AdaptiveCards}function e5(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function _9(_){return n5.has(_)}function n3(_){if(!Array.isArray(_))return[];return _.filter(e5)}function $9(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,N=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",j=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,K=_?.data??$?.data;return{type:N,title:j,data:K,url:Z,raw:_}}function l3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([N,j])=>`${N}: ${l3(j)}`).filter((N)=>!N.endsWith(": ")).join(", ");return String(_).trim()}function N9(_,$,N){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return N?.valueOn??"true";return N?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return l3($);return typeof $==="string"?$:String($)}function j9(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let N=$,j=(Z)=>{if(Array.isArray(Z))return Z.map((G)=>j(G));if(!Z||typeof Z!=="object")return Z;let z={...Z};if(typeof z.id==="string"&&z.id in N&&String(z.type||"").startsWith("Input."))z.value=N9(z.type,N[z.id],z);for(let[G,X]of Object.entries(z))if(Array.isArray(X)||X&&typeof X==="object")z[G]=j(X);return z};return j(_)}function Z9(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let N=$;try{N.setAttribute("aria-disabled","true")}catch{}try{N.setAttribute("tabindex","-1")}catch{}if("disabled"in N)try{N.disabled=!0}catch{}if("readOnly"in N)try{N.readOnly=!0}catch{}}}function K9(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function z9(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",N=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,j=N&&typeof N.title==="string"?N.title.trim():"",Z=K9(_.completed_at||N?.submitted_at),K=[j||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function a4(_,$,N){if(!_9($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await a5()}catch(j){return console.error("[adaptive-card] Failed to load SDK:",j),!1}try{let j=t5();s5(j);let Z=new j.AdaptiveCard,K=h3();Z.hostConfig=new j.HostConfig(d4());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:j9($.payload,z);Z.parse(G),Z.onExecuteAction=(q)=>{let V=$9(q);if(N?.onAction)i3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(N.onAction(V)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let w=F instanceof Error?F.message:String(F||"Action failed.");o5(_,w||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let X=Z.render();if(!X)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let O=z9($);if(O){_.classList.add("adaptive-card-finished");let q=document.createElement("div");q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=O.label,q.appendChild(V),O.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=O.detail,q.appendChild(F)}_.appendChild(q)}if(i3(_),_.appendChild(X),O)Z9(X);return!0}catch(j){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,j),!1}}function n2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>n2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,N])=>`${$}: ${n2(N)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function Y9(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function o3(_){if(!Array.isArray(_))return[];return _.filter(Y9)}function t4(_){let $=String(_.title||_.card_id||"card").trim()||"card",N=_.data;if(N==null)return`Card submission: ${$}`;if(typeof N==="string"||typeof N==="number"||typeof N==="boolean"){let j=n2(N);return j?`Card submission: ${$} — ${j}`:`Card submission: ${$}`}if(typeof N==="object"){let j=Object.entries(N).filter(([Z])=>!Z.startsWith("__")).map(([Z,K])=>({key:Z,value:n2(K)})).filter((Z)=>Z.value).slice(0,4).map(({key:Z,value:K})=>`${Z}: ${K}`);return j.length>0?`Card submission: ${$} — ${j.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function e4(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",N=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([Z])=>!Z.startsWith("__")).map(([Z,K])=>({key:Z,value:n2(K)})).filter((Z)=>Z.value).slice(0,4):[],j=N.length>0?N.map(({key:Z,value:K})=>`${Z}: ${K}`).join(", "):n2(_.data)||null;return{title:$,summary:j,fields:N,submittedAt:_.submitted_at}}function G9(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?s0($):null},{label:"Added",value:_?.created_at?I2(_.created_at):null}].filter((j)=>j.value)}function _8({mediaId:_,info:$,onClose:N}){let j=$?.filename||`attachment-${_}`,Z=i_(()=>G$($?.content_type),[$?.content_type]),K=n4(Z),z=i_(()=>l4($?.content_type),[$?.content_type]),[G,X]=I(Z==="text"||Z==="pdf"),[O,q]=I(""),[V,F]=I(null),[w,f]=I(null),T=y(null),R=i_(()=>G9($),[$]),x=i_(()=>{if(!z||!O)return"";return R0(O)},[z,O]);return m(()=>{let H=(A)=>{if(A.key==="Escape")N()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[N]),m(()=>{if(!T.current||!x)return;H2(T.current);return},[x]),m(()=>{let H=!1,A=null;async function C(){if(Z==="text"){X(!0),f(null);try{let c=await b3(_);if(!H)q(c)}catch{if(!H)f("Failed to load text preview.")}finally{if(!H)X(!1)}return}if(Z==="pdf"){X(!0),f(null);try{let c=await A3(_);if(A=URL.createObjectURL(c),!H)F(A)}catch{if(!H)f("Failed to load PDF preview.")}finally{if(!H)X(!1)}return}X(!1)}return C(),()=>{if(H=!0,A)URL.revokeObjectURL(A)}},[_,Z]),B`
        <div class="image-modal attachment-preview-modal" onClick=${N}>
            <div class="attachment-preview-shell" onClick=${(H)=>{H.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${j}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${j2(_)}
                            download=${j}
                            class="attachment-preview-download"
                            onClick=${(H)=>H.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${N}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${G&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&w&&B`<div class="attachment-preview-state">${w}</div>`}
                    ${!G&&!w&&Z==="image"&&B`
                        <img class="attachment-preview-image" src=${j2(_)} alt=${j} />
                    `}
                    ${!G&&!w&&Z==="pdf"&&V&&B`
                        <iframe class="attachment-preview-frame" src=${V} title=${j}></iframe>
                    `}
                    ${!G&&!w&&Z==="text"&&z&&B`
                        <div
                            ref=${T}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:x}}
                        />
                    `}
                    ${!G&&!w&&Z==="text"&&!z&&B`
                        <pre class="attachment-preview-text">${O}</pre>
                    `}
                    ${!G&&!w&&Z==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${R.map((H)=>B`
                        <div class="attachment-preview-meta-item" key=${H.label}>
                            <span class="attachment-preview-meta-label">${H.label}</span>
                            <span class="attachment-preview-meta-value">${H.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function $8({src:_,onClose:$}){return m(()=>{let N=(j)=>{if(j.key==="Escape")$()};return document.addEventListener("keydown",N),()=>document.removeEventListener("keydown",N)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function O9({mediaId:_,onPreview:$}){let[N,j]=I(null);if(m(()=>{p2(_).then(j).catch(()=>{})},[_]),!N)return null;let Z=N.filename||"file",K=N.metadata?.size,z=K?s0(K):"",X=G$(N.content_type)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(O)=>O.stopPropagation()}>
            <a href=${j2(_)} download=${Z} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Z}</span>
                    <span class="file-meta-row">
                        ${z&&B`<span class="file-size">${z}</span>`}
                        ${N.content_type&&B`<span class="file-size">${N.content_type}</span>`}
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
                onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:_,info:N})}}
            >
                ${X}
            </button>
        </div>
    `}function W9({attachment:_,onPreview:$}){let N=Number(_?.id),[j,Z]=I(null);m(()=>{if(!Number.isFinite(N))return;p2(N).then(Z).catch(()=>{});return},[N]);let K=j?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(N)?j2(N):null,X=G$(j?.content_type)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${K}>
            ${z?B`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(O)=>O.stopPropagation()}>
                        <${Q2}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:B`
                    <${Q2}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(N)&&j&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${X}
                    onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:N,info:j})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function p$({annotations:_}){if(!_)return null;let{audience:$,priority:N,lastModified:j}=_,Z=j?I2(j):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof N==="number"&&B`
                <span class="content-annotation">Priority: ${N}</span>
            `}
            ${Z&&B`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function X9({block:_}){let $=_.title||_.name||_.uri,N=_.description,j=_.size?s0(_.size):"",Z=_.mime_type||"",K=V9(Z),z=T2(_.uri);return B`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${K}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${N&&B`<div class="resource-link-description">${N}</div>`}
                <div class="resource-link-meta">
                    ${Z&&B`<span>${Z}</span>`}
                    ${j&&B`<span>${j}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function L9({block:_}){let[$,N]=I(!1),j=_.uri||"Embedded resource",Z=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),N(!$)}}>
                ${$?"▼":"▶"} ${j}
            </button>
            ${$&&B`
                ${Z&&B`<pre class="resource-embed-content">${Z}</pre>`}
                ${K&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&B`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let X=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:z||"application/octet-stream"}),O=URL.createObjectURL(X),q=document.createElement("a");q.href=O,q.download=j.split("/").pop()||"resource",q.click(),URL.revokeObjectURL(O)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function V9(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function q9({preview:_}){let $=T2(_.url),N=T2(_.image,{allowDataImage:!0}),j=N?`background-image: url('${N}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${N?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}
            style=${j}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function B9(_,$){return typeof _==="string"?_:""}var U9=1800,Q9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,H9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,F9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function J9(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let N=document.createElement("textarea");N.value=$,N.setAttribute("readonly",""),N.style.position="fixed",N.style.opacity="0",N.style.pointerEvents="none",document.body.appendChild(N),N.select(),N.setSelectionRange(0,N.value.length);let j=document.execCommand("copy");return document.body.removeChild(N),j}catch{return!1}}function y9(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let N=new Map,j=[],Z=(K,z)=>{let G=z||"idle";if(K.dataset.copyState=G,G==="success")K.innerHTML=H9,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(G==="error")K.innerHTML=F9,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=Q9,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",Z(G,"idle"),z.appendChild(G);let X=async(O)=>{O.preventDefault(),O.stopPropagation();let V=K.querySelector("code")?.textContent||"",F=await J9(V);Z(G,F?"success":"error");let w=N.get(G);if(w)clearTimeout(w);let f=setTimeout(()=>{Z(G,"idle"),N.delete(G)},U9);N.set(G,f)};G.addEventListener("click",X),j.push(()=>{G.removeEventListener("click",X);let O=N.get(G);if(O)clearTimeout(O);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{j.forEach((K)=>K())}}function D9(_){if(!_)return{content:_,fileRefs:[]};let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=-1;for(let O=0;O<N.length;O+=1)if(N[O].trim()==="Files:"&&N[O+1]&&/^\s*-\s+/.test(N[O+1])){j=O;break}if(j===-1)return{content:_,fileRefs:[]};let Z=[],K=j+1;for(;K<N.length;K+=1){let O=N[K];if(/^\s*-\s+/.test(O))Z.push(O.replace(/^\s*-\s+/,"").trim());else if(!O.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let z=N.slice(0,j),G=N.slice(K),X=[...z,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,fileRefs:Z}}function E9(_){if(!_)return{content:_,messageRefs:[]};let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=-1;for(let O=0;O<N.length;O+=1)if(N[O].trim()==="Referenced messages:"&&N[O+1]&&/^\s*-\s+/.test(N[O+1])){j=O;break}if(j===-1)return{content:_,messageRefs:[]};let Z=[],K=j+1;for(;K<N.length;K+=1){let O=N[K];if(/^\s*-\s+/.test(O)){let V=O.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!O.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let z=N.slice(0,j),G=N.slice(K),X=[...z,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,messageRefs:Z}}function k9(_){if(!_)return{content:_,attachments:[]};let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=-1;for(let O=0;O<N.length;O+=1)if(N[O].trim()==="Images:"&&N[O+1]&&/^\s*-\s+/.test(N[O+1])){j=O;break}if(j===-1)return{content:_,attachments:[]};let Z=[],K=j+1;for(;K<N.length;K+=1){let O=N[K];if(/^\s*-\s+/.test(O)){let q=O.replace(/^\s*-\s+/,"").trim(),V=q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let F=V[1],w=(V[2]||"").trim()||F;Z.push({id:F,label:w,raw:q})}else Z.push({id:null,label:q,raw:q})}else if(!O.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let z=N.slice(0,j),G=N.slice(K),X=[...z,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,attachments:Z}}function w9(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function b9(_,$){if(!_||!$)return _;let N=String($).trim().split(/\s+/).filter(Boolean);if(N.length===0)return _;let j=N.map(w9).sort((q,V)=>V.length-q.length),Z=new RegExp(`(${j.join("|")})`,"gi"),K=new RegExp(`^(${j.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),G=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),X=[],O;while(O=G.nextNode())X.push(O);for(let q of X){let V=q.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let F=q.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let w=V.split(Z).filter((T)=>T!=="");if(w.length===0)continue;let f=z.createDocumentFragment();for(let T of w)if(K.test(T)){let R=z.createElement("mark");R.className="search-highlight-term",R.textContent=T,f.appendChild(R)}else f.appendChild(z.createTextNode(T));q.parentNode.replaceChild(f,q)}return z.body.innerHTML}function N8({post:_,onClick:$,onHashtagClick:N,onMessageRef:j,onScrollToMessage:Z,agentName:K,agentAvatarUrl:z,userName:G,userAvatarUrl:X,userAvatarBackground:O,onDelete:q,isThreadReply:V,isThreadPrev:F,isThreadNext:w,isRemoving:f,highlightQuery:T,onFileRef:R}){let[x,H]=I(null),A=y(null),C=_.data,c=C.type==="agent_response",a=G||"You",t=c?K||I4:a,n=c?p3(K,z,!0):p3(a,X),Z_=typeof O==="string"?O.trim().toLowerCase():"",i=!c&&n.image&&(Z_==="clear"||Z_==="transparent"),Q_=c&&Boolean(n.image),B_=`background-color: ${i||Q_?"transparent":n.color}`,r=C.content_meta,__=Boolean(r?.truncated),K_=Boolean(r?.preview),N_=__&&!K_,G_=__?{originalLength:Number.isFinite(r?.original_length)?r.original_length:C.content?C.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,X_=C.content_blocks||[],y_=C.media_ids||[],j_=B9(C.content,C.link_previews),{content:E_,fileRefs:b_}=D9(j_),{content:a_,messageRefs:k_}=E9(E_),{content:m_,attachments:C_}=k9(a_);j_=m_;let l_=n3(X_),h=o3(X_),W_=l_.length===1&&typeof l_[0]?.fallback_text==="string"?l_[0].fallback_text.trim():"",V_=h.length===1?t4(h[0]).trim():"",L_=Boolean(W_)&&j_?.trim()===W_||Boolean(V_)&&j_?.trim()===V_,D_=Boolean(j_)&&!N_&&!L_,A_=typeof T==="string"?T.trim():"",R_=i_(()=>{if(!j_||L_)return"";let M=R0(j_,N);return A_?b9(M,A_):M},[j_,L_,A_]),H_=(M,e)=>{M.stopPropagation(),H(j2(e))},[M_,S_]=I(null),Y0=(M)=>{S_(M)},n_=(M)=>{M.stopPropagation(),q?.(_)},e_=(M,e)=>{let P_=new Set;if(!M||e.length===0)return{content:M,usedIds:P_};return{content:M.replace(/attachment:([^\s)"']+)/g,(w0,a0,$0,O0)=>{let L0=a0.replace(/^\/+/,""),C0=e.find((g0)=>g0.name&&g0.name.toLowerCase()===L0.toLowerCase()&&!P_.has(g0.id))||e.find((g0)=>!P_.has(g0.id));if(!C0)return w0;if(P_.add(C0.id),O0.slice(Math.max(0,$0-2),$0)==="](")return`/media/${C0.id}`;return C0.name||"attachment"}),usedIds:P_}},U0=[],x_=[],_0=[],Q0=[],D0=[],H0=[],G0=0;if(X_.length>0)X_.forEach((M)=>{if(M?.type==="text"&&M.annotations)H0.push(M.annotations);if(M?.type==="resource_link")Q0.push(M);else if(M?.type==="resource")D0.push(M);else if(M?.type==="file"){let e=y_[G0++];if(e)x_.push(e),_0.push({id:e,name:M?.name||M?.filename||M?.title})}else if(M?.type==="image"||!M?.type){let e=y_[G0++];if(e){let P_=typeof M?.mime_type==="string"?M.mime_type:void 0;U0.push({id:e,annotations:M?.annotations,mimeType:P_}),_0.push({id:e,name:M?.name||M?.filename||M?.title})}}});else if(y_.length>0)y_.forEach((M)=>{U0.push({id:M,annotations:null}),_0.push({id:M,name:null})});if(C_.length>0)C_.forEach((M)=>{if(!M?.id)return;let e=_0.find((P_)=>String(P_.id)===String(M.id));if(e&&!e.name)e.name=M.label});let{content:E0,usedIds:o_}=e_(j_,_0);j_=E0;let T_=U0.filter(({id:M})=>!o_.has(M)),M0=x_.filter((M)=>!o_.has(M)),c_=C_.length>0?C_.map((M,e)=>({id:M.id||`attachment-${e+1}`,label:M.label||`attachment-${e+1}`})):_0.map((M,e)=>({id:M.id,label:M.name||`attachment-${e+1}`})),d_=i_(()=>n3(X_),[X_]),k0=i_(()=>o3(X_),[X_]);m(()=>{if(!A.current)return;return H2(A.current),y9(A.current)},[R_]);let U_=y(null);return m(()=>{if(!U_.current||d_.length===0)return;let M=U_.current;M.innerHTML="";for(let e of d_){let P_=document.createElement("div");M.appendChild(P_),a4(P_,e,{onAction:async(v_)=>{if(v_.type==="Action.OpenUrl"){let w0=T2(v_.url||"");if(!w0)throw Error("Invalid URL");window.open(w0,"_blank","noopener,noreferrer");return}if(v_.type==="Action.Submit"){await y3({post_id:_.id,thread_id:C.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:v_.type,title:v_.title||"",data:v_.data}});return}console.warn("[post] unsupported adaptive card action:",v_.type,v_)}}).catch((v_)=>{console.error("[post] adaptive card render error:",v_),P_.textContent=e.fallback_text||"Card failed to render."})}},[d_,C.thread_id,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${c?"agent-post":""} ${V?"thread-reply":""} ${F?"thread-prev":""} ${w?"thread-next":""} ${f?"removing":""}" onClick=${$}>
            <div class="post-avatar ${c?"agent-avatar":""} ${n.image?"has-image":""}" style=${B_}>
                ${n.image?B`<img src=${n.image} alt=${t} />`:n.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${n_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${t}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(M)=>{if(M.preventDefault(),M.stopPropagation(),j)j(_.id)}}>${i4(_.timestamp)}</a>
                </div>
                ${N_&&G_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${Y$(G_.originalLength)} chars
                            ${G_.maxLength?B` • Display limit: ${Y$(G_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${K_&&G_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${Y$(G_.maxLength)} of ${Y$(G_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(b_.length>0||k_.length>0||c_.length>0)&&B`
                    <div class="post-file-refs">
                        ${k_.map((M)=>{let e=(P_)=>{if(P_.preventDefault(),P_.stopPropagation(),Z)Z(M,_.chat_jid||null);else{let v_=document.getElementById("post-"+M);if(v_)v_.scrollIntoView({behavior:"smooth",block:"center"}),v_.classList.add("post-highlight"),setTimeout(()=>v_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${M}`} class="post-msg-pill-link" onClick=${e}>
                                    <${Q2}
                                        prefix="post"
                                        label=${"msg:"+M}
                                        title=${"Message "+M}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${b_.map((M)=>{let e=M.split("/").pop()||M;return B`
                                <${Q2}
                                    prefix="post"
                                    label=${e}
                                    title=${M}
                                    onClick=${()=>R?.(M)}
                                />
                            `})}
                        ${c_.map((M)=>B`
                            <${W9}
                                key=${M.id}
                                attachment=${M}
                                onPreview=${Y0}
                            />
                        `)}
                    </div>
                `}
                ${D_&&B`
                    <div 
                        ref=${A}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:R_}}
                        onClick=${(M)=>{if(M.target.classList.contains("hashtag")){M.preventDefault(),M.stopPropagation();let e=M.target.dataset.hashtag;if(e)N?.(e)}else if(M.target.tagName==="IMG")M.preventDefault(),M.stopPropagation(),H(M.target.src)}}
                    />
                `}
                ${d_.length>0&&B`
                    <div ref=${U_} class="post-adaptive-cards" />
                `}
                ${k0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${k0.map((M,e)=>{let P_=e4(M);return B`
                                <div key=${`${M.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${P_.title}</span>
                                    </div>
                                    ${P_.summary&&B`
                                        <div class="adaptive-card-submission-summary">${P_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${I2(P_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${H0.length>0&&B`
                    ${H0.map((M,e)=>B`
                        <${p$} key=${e} annotations=${M} />
                    `)}
                `}
                ${T_.length>0&&B`
                    <div class="media-preview">
                        ${T_.map(({id:M,mimeType:e})=>{let v_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?j2(M):w3(M);return B`
                                <img 
                                    key=${M} 
                                    src=${v_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(w0)=>H_(w0,M)}
                                />
                            `})}
                    </div>
                `}
                ${T_.length>0&&B`
                    ${T_.map(({annotations:M},e)=>B`
                        ${M&&B`<${p$} key=${e} annotations=${M} />`}
                    `)}
                `}
                ${M0.length>0&&B`
                    <div class="file-attachments">
                        ${M0.map((M)=>B`
                            <${O9} key=${M} mediaId=${M} onPreview=${Y0} />
                        `)}
                    </div>
                `}
                ${Q0.length>0&&B`
                    <div class="resource-links">
                        ${Q0.map((M,e)=>B`
                            <div key=${e}>
                                <${X9} block=${M} />
                                <${p$} annotations=${M.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${D0.length>0&&B`
                    <div class="resource-embeds">
                        ${D0.map((M,e)=>B`
                            <div key=${e}>
                                <${L9} block=${M} />
                                <${p$} annotations=${M.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${C.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${C.link_previews.map((M,e)=>B`
                            <${q9} key=${e} preview=${M} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${x&&B`<${$8} src=${x} onClose=${()=>H(null)} />`}
        ${M_&&B`
            <${_8}
                mediaId=${M_.mediaId}
                info=${M_.info}
                onClose=${()=>S_(null)}
            />
        `}
    `}function j8({posts:_,hasMore:$,onLoadMore:N,onPostClick:j,onHashtagClick:Z,onMessageRef:K,onScrollToMessage:z,onFileRef:G,emptyMessage:X,timelineRef:O,agents:q,user:V,onDeletePost:F,reverse:w=!0,removingPostIds:f,searchQuery:T}){let[R,x]=I(!1),H=y(null),A=typeof IntersectionObserver<"u",C=P(async()=>{if(!N||!$||R)return;x(!0);try{await N({preserveScroll:!0,preserveMode:"top"})}finally{x(!1)}},[$,R,N]),c=P((r)=>{let{scrollTop:__,scrollHeight:K_,clientHeight:N_}=r.target,G_=w?K_-N_-__:__,X_=Math.max(300,N_);if(G_<X_)C()},[w,C]);m(()=>{if(!A)return;let r=H.current,__=O?.current;if(!r||!__)return;let K_=300,N_=new IntersectionObserver((G_)=>{for(let X_ of G_){if(!X_.isIntersecting)continue;C()}},{root:__,rootMargin:`${K_}px 0px ${K_}px 0px`,threshold:0});return N_.observe(r),()=>N_.disconnect()},[A,$,N,O,C]);let a=y(C);if(a.current=C,m(()=>{if(A)return;if(!O?.current)return;let{scrollTop:r,scrollHeight:__,clientHeight:K_}=O.current,N_=w?__-K_-r:r,G_=Math.max(300,K_);if(N_<G_)a.current?.()},[A,_,$,w,O]),m(()=>{if(!O?.current)return;if(!$||R)return;let{scrollTop:r,scrollHeight:__,clientHeight:K_}=O.current,N_=w?__-K_-r:r,G_=Math.max(300,K_);if(__<=K_+1||N_<G_)a.current?.()},[_,$,R,w,O]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${O}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${X||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((r,__)=>r.id-__.id),n=(r)=>{let __=r?.data?.thread_id;if(__===null||__===void 0||__==="")return null;let K_=Number(__);return Number.isFinite(K_)?K_:null},Z_=new Map;for(let r=0;r<t.length;r+=1){let __=t[r],K_=Number(__?.id),N_=n(__);if(N_!==null){let G_=Z_.get(N_)||{anchorIndex:-1,replyIndexes:[]};G_.replyIndexes.push(r),Z_.set(N_,G_)}else if(Number.isFinite(K_)){let G_=Z_.get(K_)||{anchorIndex:-1,replyIndexes:[]};G_.anchorIndex=r,Z_.set(K_,G_)}}let i=new Map;for(let[r,__]of Z_.entries()){let K_=new Set;if(__.anchorIndex>=0)K_.add(__.anchorIndex);for(let N_ of __.replyIndexes)K_.add(N_);i.set(r,Array.from(K_).sort((N_,G_)=>N_-G_))}let Q_=t.map((r,__)=>{let K_=n(r);if(K_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let N_=i.get(K_);if(!N_||N_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let G_=N_.indexOf(__);if(G_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:G_>0,hasThreadNext:G_<N_.length-1}}),B_=B`<div class="timeline-sentinel" ref=${H}></div>`;return B`
        <div class="timeline ${w?"reverse":"normal"}" ref=${O} onScroll=${c}>
            <div class="timeline-content">
                ${w?B_:null}
                ${t.map((r,__)=>{let K_=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),N_=f?.has?.(r.id),G_=Q_[__]||{};return B`
                    <${N8}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${K_}
                        isThreadPrev=${G_.hasThreadPrev}
                        isThreadNext=${G_.hasThreadNext}
                        isRemoving=${N_}
                        highlightQuery=${T}
                        agentName=${u4(r.data?.agent_id,q||{})}
                        agentAvatarUrl=${m4(r.data?.agent_id,q||{})}
                        userName=${V?.name||V?.user_name}
                        userAvatarUrl=${V?.avatar_url||V?.avatarUrl||V?.avatar}
                        userAvatarBackground=${V?.avatar_background||V?.avatarBackground}
                        onClick=${()=>j?.(r)}
                        onHashtagClick=${Z}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${G}
                        onDelete=${F}
                    />
                `})}
                ${w?null:B_}
            </div>
        </div>
    `}class Z8{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,N=-1/0;for(let j of this.extensions.values()){if(j.placement!=="tabs")continue;if(!j.canHandle)continue;try{let Z=j.canHandle(_);if(Z===!1||Z===0)continue;let K=Z===!0?0:typeof Z==="number"?Z:0;if(K>N)N=K,$=j}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${j.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var X0=new Z8;var h$=null,d3=null;function K8(){if(d3)return Promise.resolve(d3);if(!h$)h$=import("/static/dist/editor.bundle.js").then((_)=>{return d3=_,_}).catch((_)=>{throw h$=null,_});return h$}class z8{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await K8();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var r3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new z8(_,$)}};function s3(){K8().catch(()=>{})}var A9={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},P9={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},i$=null,a3=null;function M9(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function C9(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let N=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,j=(Z,K)=>{let z=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!M9(z))return $(Z,K);if(Z instanceof Request)return $(new Request(N,Z));return $(N,K)};globalThis.fetch=j;try{return await _()}finally{globalThis.fetch=$}}async function x9(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!i$)i$=C9(()=>Promise.resolve($.init?.())).catch((N)=>{throw i$=null,N});return await i$,$}async function S9(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!a3)a3=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await a3}async function f9(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function T9(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function I9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,N=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(N==="dark")return!0;if(N==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function F2(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function u9(_,$){if(!_||!_.startsWith("#"))return _;let N=_.slice(1);if(N.length===3)return`#${N[0]}${N[0]}${N[1]}${N[1]}${N[2]}${N[2]}${$}`;if(N.length===6)return`#${N}${$}`;return _}function Y8(){let _=I9(),$=_?P9:A9,N=F2("--bg-primary",_?"#000000":"#ffffff"),j=F2("--text-primary",_?"#e7e9ea":"#0f1419"),Z=F2("--text-secondary",_?"#71767b":"#536471"),K=F2("--accent-color","#1d9bf0"),z=F2("--danger-color",_?"#ff7b72":"#cf222e"),G=F2("--success-color",_?"#7ee787":"#1a7f37"),X=F2("--bg-hover",_?"#1d1f23":"#e8ebed"),O=F2("--border-color",_?"#2f3336":"#eff3f4"),q=F2("--accent-soft-strong",u9(K,_?"47":"33"));return{background:N,foreground:j,cursor:K,cursorAccent:N,selectionBackground:q,selectionForeground:j,black:X,red:z,green:G,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:j,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:O}}class G8{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),N=Number.isFinite(_?.width)?_.width:0,j=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(N)}x${Math.round(j)}:${Math.round(Z)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let N=_.querySelector("canvas");if(N instanceof HTMLElement)N.style.display="block",N.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await x9();if(await S9(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let N=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:Y8()}),j=null;if(typeof _.FitAddon==="function")j=new _.FitAddon,N.loadAddon?.(j);await N.open($),this.syncHostLayout(),N.loadFonts?.(),j?.observeResize?.(),this.terminal=N,this.fitAddon=j,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=Y8(),$=JSON.stringify(_),N=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let j=this.bodyEl.querySelector(".terminal-live-host");if(j instanceof HTMLElement)j.style.backgroundColor=_.background,j.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(N&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(N&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let N=window.matchMedia?.("(prefers-color-scheme: dark)"),j=()=>_();if(N?.addEventListener)N.addEventListener("change",j);else if(N?.addListener)N.addListener(j);this.mediaQuery=N,this.mediaQueryListener=j;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let N=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});N.observe(this.container),this.resizeObserver=N}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await f9();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let N=new WebSocket(T9($.ws_path||"/terminal/ws"));this.socket=N,this.setStatus("Connecting…"),_.onData?.((j)=>{if(N.readyState===WebSocket.OPEN)N.send(JSON.stringify({type:"input",data:j}))}),_.onResize?.(({cols:j,rows:Z})=>{if(N.readyState===WebSocket.OPEN)N.send(JSON.stringify({type:"resize",cols:j,rows:Z}))}),N.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),N.addEventListener("message",(j)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(j.data))}catch{Z={type:"output",data:String(j.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),N.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),N.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var t3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new G8(_,$)}};function k2(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function m9(_,$){let N=String(_||"").trim();if(!N)return N;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(N)||N.startsWith("#")||N.startsWith("data:")||N.startsWith("blob:"))return N;let j=N.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=j?.[1]||N,K=j?.[2]||"",z=j?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),O=Z.startsWith("/")?Z:`${G?`${G}/`:""}${Z}`,q=[];for(let F of O.split("/")){if(!F||F===".")continue;if(F===".."){if(q.length>0)q.pop();continue}q.push(F)}let V=q.join("/");return`${C$(V)}${K}${z}`}function O$(_){return _?.preview||null}function R9(_){let $=String(_||""),N=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),j=N>=0?$.slice(N+1):$,Z=j.lastIndexOf(".");if(Z<=0||Z===j.length-1)return"none";return j.slice(Z+1)}function v9(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function g9(_,$){let N=$?.path||_?.path||"",j=[];if($?.content_type)j.push(`<span><strong>type:</strong> ${k2($.content_type)}</span>`);if(typeof $?.size==="number")j.push(`<span><strong>size:</strong> ${k2(s0($.size))}</span>`);if($?.mtime)j.push(`<span><strong>modified:</strong> ${k2(I2($.mtime))}</span>`);if(j.push(`<span><strong>kind:</strong> ${k2(v9($))}</span>`),j.push(`<span><strong>extension:</strong> ${k2(R9(N))}</span>`),N)j.push(`<span><strong>path:</strong> ${k2(N)}</span>`);if($?.truncated)j.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${j.join("")}</div>`}function c9(_){let $=O$(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let N=g9(_,$);if($.kind==="image"){let j=$.url||($.path?C$($.path):"");return`${N}
            <div class="workspace-preview-image">
                <img src="${k2(j)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let j=R0($.text||"",null,{rewriteImageSrc:(Z)=>m9(Z,$.path||_?.path)});return`${N}<div class="workspace-preview-text">${j}</div>`}return`${N}<pre class="workspace-preview-text"><code>${k2($.text||"")}</code></pre>`}if($.kind==="binary")return`${N}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${N}<div class="workspace-preview-text">No preview available.</div>`}class e3{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=c9(this.context)}getContent(){let _=O$(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let N=O$(this.context);if(N&&N.kind==="text"){if(N.text=_,$!==void 0)N.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var _1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=O$(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new e3(_,$)}},$1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return O$(_)||_?.path?1:!1},mount(_,$){return new e3(_,$)}};class O8{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let N of this.listeners)try{N(_,$)}catch{}}open(_,$){let N=this.tabs.get(_);if(!N)N={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,N);return this.activate(_),N}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((N)=>N!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,N]of this.tabs)if($!==_&&!N.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((j)=>j!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((N)=>N!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let N=this.tabs.get(_);if(!N||N.dirty===$)return;N.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let N=this.tabs.get(_);if(N)N.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,N){let j=this.tabs.get(_);if(!j)return;if(this.tabs.delete(_),j.id=$,j.path=$,j.label=N||$.split("/").pop()||$,this.tabs.set($,j),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((j)=>j.id===this.activeId),N=_[($+1)%_.length];this.activate(N.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((j)=>j.id===this.activeId),N=_[($-1+_.length)%_.length];this.activate(N.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var u_=new O8;var l$="workspaceExplorerScale",p9=["compact","default","comfortable"],h9=new Set(p9),i9={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function W8(_,$="default"){if(typeof _!=="string")return $;let N=_.trim().toLowerCase();return h9.has(N)?N:$}function N1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),N=Boolean(window.matchMedia?.("(hover: none)")?.matches),j=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||j&&N}}function l9(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function n9(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function j1(_={}){let $=l9(_),N=_.stored?W8(_.stored,$):$;return n9(N,_)}function X8(_){return i9[W8(_)]}var o9=60000,B8=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function U8(_,$,N,j=0,Z=[]){if(!N&&B8(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:j}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)U8(K,$,N,j+1,Z);return Z}function L8(_,$,N){if(!_)return"";let j=[],Z=(K)=>{if(!N&&B8(K))return;if(j.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)Z(z)};return Z(_),j.join("|")}function Y1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let N=Array.isArray(_.children)?_.children:null,j=Array.isArray($.children)?$.children:null;if(!j)return _;let Z=N?new Map(N.map((G)=>[G?.path,G])):new Map,K=!N||N.length!==j.length,z=j.map((G)=>{let X=Y1(Z.get(G.path),G);if(X!==Z.get(G.path))K=!0;return X});return K?{...$,children:z}:_}function K1(_,$,N){if(!_)return _;if(_.path===$)return Y1(_,N);if(!Array.isArray(_.children))return _;let j=!1,Z=_.children.map((K)=>{let z=K1(K,$,N);if(z!==K)j=!0;return z});return j?{..._,children:Z}:_}var Q8=4,Z1=14,d9=8,r9=16;function H8(_){if(!_)return 0;if(_.type==="file"){let j=Math.max(0,Number(_.size)||0);return _.__bytes=j,j}let $=Array.isArray(_.children)?_.children:[],N=0;for(let j of $)N+=H8(j);return _.__bytes=N,N}function F8(_,$=0){let N=Math.max(0,Number(_?.__bytes??_?.size??0)),j={name:_?.name||_?.path||".",path:_?.path||".",size:N,children:[]};if(!_||_.type!=="dir"||$>=Q8)return j;let Z=Array.isArray(_.children)?_.children:[],K=[];for(let G of Z){let X=Math.max(0,Number(G?.__bytes??G?.size??0));if(X<=0)continue;if(G.type==="dir")K.push({kind:"dir",node:G,size:X});else K.push({kind:"file",name:G.name,path:G.path,size:X})}K.sort((G,X)=>X.size-G.size);let z=K;if(K.length>Z1){let G=K.slice(0,Z1-1),X=K.slice(Z1-1),O=X.reduce((q,V)=>q+V.size,0);G.push({kind:"other",name:`+${X.length} more`,path:`${j.path}/[other]`,size:O}),z=G}return j.children=z.map((G)=>{if(G.kind==="dir")return F8(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),j}function V8(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,N=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(N==="dark")return!0;if(N==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function J8(_,$,N){let j=((_+Math.PI/2)*180/Math.PI+360)%360,Z=N?Math.max(30,70-$*10):Math.max(34,66-$*8),K=N?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${j.toFixed(1)} ${Z}% ${K}%)`}function n$(_,$,N,j){return{x:_+N*Math.cos(j),y:$+N*Math.sin(j)}}function G1(_,$,N,j,Z,K){let z=Math.PI*2-0.0001,G=K-Z>z?Z+z:K,X=n$(_,$,j,Z),O=n$(_,$,j,G),q=n$(_,$,N,G),V=n$(_,$,N,Z),F=G-Z>Math.PI?1:0;return[`M ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 1 ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`L ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${N} ${N} 0 ${F} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var y8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function D8(_,$,N){let j=[],Z=[],K=Math.max(0,Number($)||0),z=(G,X,O,q)=>{let V=Array.isArray(G?.children)?G.children:[];if(!V.length)return;let F=Math.max(0,Number(G.size)||0);if(F<=0)return;let w=O-X,f=X;V.forEach((T,R)=>{let x=Math.max(0,Number(T.size)||0);if(x<=0)return;let H=x/F,A=f,C=R===V.length-1?O:f+w*H;if(f=C,C-A<0.003)return;let c=y8[q];if(c){let a=J8(A,q,N);if(j.push({key:T.path,path:T.path,label:T.name,size:x,color:a,depth:q,startAngle:A,endAngle:C,innerRadius:c[0],outerRadius:c[1],d:G1(120,120,c[0],c[1],A,C)}),q===1)Z.push({key:T.path,name:T.name,size:x,pct:K>0?x/K*100:0,color:a})}if(q<Q8)z(T,A,C,q+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:j,legend:Z}}function z1(_,$){if(!_||!$)return null;if(_.path===$)return _;let N=Array.isArray(_.children)?_.children:[];for(let j of N){let Z=z1(j,$);if(Z)return Z}return null}function E8(_,$,N,j){if(!N||N<=0)return{segments:[],legend:[]};let Z=y8[1];if(!Z)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,G=J8(K,1,j),O=`${$||"."}/[files]`;return{segments:[{key:O,path:O,label:_,size:N,color:G,depth:1,startAngle:K,endAngle:z,innerRadius:Z[0],outerRadius:Z[1],d:G1(120,120,Z[0],Z[1],K,z)}],legend:[{key:O,name:_,size:N,pct:100,color:G}]}}function q8(_,$=!1,N=!1){if(!_)return null;let j=H8(_),Z=F8(_,0),K=Z.size||j,{segments:z,legend:G}=D8(Z,K,N);if(!z.length&&K>0){let X=E8("[files]",Z.path,K,N);z=X.segments,G=X.legend}return{root:Z,totalSize:K,segments:z,legend:G,truncated:$,isDarkTheme:N}}function s9({payload:_}){if(!_)return null;let[$,N]=I(null),[j,Z]=I(_?.root?.path||"."),[K,z]=I(()=>[_?.root?.path||"."]),[G,X]=I(!1);m(()=>{let i=_?.root?.path||".";Z(i),z([i]),N(null)},[_?.root?.path,_?.totalSize]),m(()=>{if(!j)return;X(!0);let i=setTimeout(()=>X(!1),180);return()=>clearTimeout(i)},[j]);let O=i_(()=>{return z1(_.root,j)||_.root},[_?.root,j]),q=O?.size||_.totalSize||0,{segments:V,legend:F}=i_(()=>{let i=D8(O,q,_.isDarkTheme);if(i.segments.length>0)return i;if(q<=0)return i;let Q_=O?.children?.length?"Total":"[files]";return E8(Q_,O?.path||_?.root?.path||".",q,_.isDarkTheme)},[O,q,_.isDarkTheme,_?.root?.path]),[w,f]=I(V),T=y(new Map),R=y(0);m(()=>{let i=T.current,Q_=new Map(V.map((K_)=>[K_.key,K_])),B_=performance.now(),r=220,__=(K_)=>{let N_=Math.min(1,(K_-B_)/220),G_=N_*(2-N_),X_=V.map((y_)=>{let E_=i.get(y_.key)||{startAngle:y_.startAngle,endAngle:y_.startAngle,innerRadius:y_.innerRadius,outerRadius:y_.innerRadius},b_=(l_,h)=>l_+(h-l_)*G_,a_=b_(E_.startAngle,y_.startAngle),k_=b_(E_.endAngle,y_.endAngle),m_=b_(E_.innerRadius,y_.innerRadius),C_=b_(E_.outerRadius,y_.outerRadius);return{...y_,d:G1(120,120,m_,C_,a_,k_)}});if(f(X_),N_<1)R.current=requestAnimationFrame(__)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(__),T.current=Q_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[V]);let x=w.length?w:V,H=q>0?s0(q):"0 B",A=O?.name||"",c=(A&&A!=="."?A:"Total")||"Total",a=H,t=K.length>1,n=(i)=>{if(!i?.path)return;let Q_=z1(_.root,i.path);if(!Q_||!Array.isArray(Q_.children)||Q_.children.length===0)return;z((B_)=>[...B_,Q_.path]),Z(Q_.path),N(null)},Z_=()=>{if(!t)return;z((i)=>{let Q_=i.slice(0,-1);return Z(Q_[Q_.length-1]||_?.root?.path||"."),Q_}),N(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${O?.path||_?.root?.path||"."}`}
                data-segments=${x.length}
                data-base-size=${q}>
                ${x.map((i)=>B`
                    <path
                        key=${i.key}
                        d=${i.d}
                        fill=${i.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===i.key?" is-hovered":""}`}
                        onMouseEnter=${()=>N(i)}
                        onMouseLeave=${()=>N(null)}
                        onTouchStart=${()=>N(i)}
                        onTouchEnd=${()=>N(null)}
                        onClick=${()=>n(i)}
                    >
                        <title>${i.label} — ${s0(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
                    onClick=${Z_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${c}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${a}</text>
                </g>
            </svg>
            ${F.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((i)=>B`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${s0(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function a9({mediaId:_}){let[$,N]=I(null);if(m(()=>{if(!_)return;p2(_).then(N).catch(()=>{})},[_]),!$)return null;let j=$.filename||"file",Z=$.metadata?.size?s0($.metadata.size):"";return B`
        <a href=${j2(_)} download=${j} class="file-attachment"
            onClick=${(K)=>K.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${j}</span>
                ${Z&&B`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function k8({onFileSelect:_,visible:$=!0,active:N=void 0,onOpenEditor:j}){let[Z,K]=I(null),[z,G]=I(new Set(["."])),[X,O]=I(null),[q,V]=I(null),[F,w]=I(""),[f,T]=I(null),[R,x]=I(null),[H,A]=I(!0),[C,c]=I(!1),[a,t]=I(null),[n,Z_]=I(()=>h2("workspaceShowHidden",!1)),[i,Q_]=I(!1),[B_,r]=I(null),[__,K_]=I(null),[N_,G_]=I(null),[X_,y_]=I(!1),[j_,E_]=I(null),[b_,a_]=I(()=>V8()),[k_,m_]=I(()=>j1({stored:r0(l$),...N1()})),C_=y(z),l_=y(""),h=y(null),W_=y(0),V_=y(new Set),L_=y(null),D_=y(new Map),A_=y(_),R_=y(j),H_=y(null),M_=y(null),S_=y(null),Y0=y(null),n_=y(null),e_=y(null),U0=y("."),x_=y(null),_0=y({path:null,dragging:!1,startX:0,startY:0}),Q0=y({path:null,dragging:!1,startX:0,startY:0}),D0=y({path:null,timer:0}),H0=y(!1),G0=y(0),E0=y(new Map),o_=y(null),T_=y(null),M0=y(null),c_=y(null),d_=y(n),k0=y($),U_=y(N??$),M=y(0),e=y(N_),P_=y(i),v_=y(B_),w0=y(null),a0=y({x:0,y:0}),$0=y(0),O0=y(null),L0=y(X),t0=y(q),C0=y(null),v0=y(null),g0=y(f);A_.current=_,R_.current=j,m(()=>{C_.current=z},[z]),m(()=>{d_.current=n},[n]),m(()=>{k0.current=$},[$]),m(()=>{U_.current=N??$},[N,$]),m(()=>{e.current=N_},[N_]),m(()=>{if(typeof window>"u")return;let L=()=>{m_(j1({stored:r0(l$),...N1()}))};L();let Q=()=>L(),E=()=>L(),D=(g)=>{if(!g||g.key===null||g.key===l$)L()};window.addEventListener("resize",Q),window.addEventListener("focus",E),window.addEventListener("storage",D);let u=window.matchMedia?.("(pointer: coarse)"),d=window.matchMedia?.("(hover: none)"),s=(g,Y_)=>{if(!g)return;if(g.addEventListener)g.addEventListener("change",Y_);else if(g.addListener)g.addListener(Y_)},o=(g,Y_)=>{if(!g)return;if(g.removeEventListener)g.removeEventListener("change",Y_);else if(g.removeListener)g.removeListener(Y_)};return s(u,Q),s(d,Q),()=>{window.removeEventListener("resize",Q),window.removeEventListener("focus",E),window.removeEventListener("storage",D),o(u,Q),o(d,Q)}},[]),m(()=>{let L=(Q)=>{let E=Q?.detail?.path;if(!E)return;let D=E.split("/"),u=[];for(let d=1;d<D.length;d++)u.push(D.slice(0,d).join("/"));if(u.length)G((d)=>{let s=new Set(d);s.add(".");for(let o of u)s.add(o);return s});O(E),requestAnimationFrame(()=>{let d=document.querySelector(`[data-path="${CSS.escape(E)}"]`);if(d)d.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",L),()=>window.removeEventListener("workspace-reveal-path",L)},[]),m(()=>{P_.current=i},[i]),m(()=>{v_.current=B_},[B_]),m(()=>{L0.current=X},[X]),m(()=>{t0.current=q},[q]),m(()=>{g0.current=f},[f]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let L=()=>a_(V8());L();let Q=window.matchMedia?.("(prefers-color-scheme: dark)"),E=()=>L();if(Q?.addEventListener)Q.addEventListener("change",E);else if(Q?.addListener)Q.addListener(E);let D=typeof MutationObserver<"u"?new MutationObserver(()=>L()):null;if(D?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)D?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(Q?.removeEventListener)Q.removeEventListener("change",E);else if(Q?.removeListener)Q.removeListener(E);D?.disconnect()}},[]),m(()=>{if(!q)return;let L=n_.current;if(!L)return;let Q=requestAnimationFrame(()=>{try{L.focus(),L.select()}catch{}});return()=>cancelAnimationFrame(Q)},[q]);let o2=async(L)=>{c(!0),T(null),x(null);try{let Q=await P3(L,20000);T(Q)}catch(Q){T({error:Q.message||"Failed to load preview"})}finally{c(!1)}};H_.current=o2;let w2=async()=>{if(!k0.current)return;try{let L=await j$("",1,d_.current),Q=L8(L.root,C_.current,d_.current);if(Q===l_.current){A(!1);return}if(l_.current=Q,h.current=L.root,!W_.current)W_.current=requestAnimationFrame(()=>{W_.current=0,K((E)=>Y1(E,h.current)),A(!1)})}catch(L){t(L.message||"Failed to load workspace"),A(!1)}},c0=async(L)=>{if(!L)return;if(V_.current.has(L))return;V_.current.add(L);try{let Q=await j$(L,1,d_.current);K((E)=>K1(E,L,Q.root))}catch(Q){t(Q.message||"Failed to load workspace")}finally{V_.current.delete(L)}};M_.current=c0;let N0=P(()=>{let L=X;if(!L)return".";let Q=D_.current?.get(L);if(Q&&Q.type==="dir")return Q.path;if(L==="."||!L.includes("/"))return".";let E=L.split("/");return E.pop(),E.join("/")||"."},[X]),K2=P((L)=>{let Q=L?.closest?.(".workspace-row");if(!Q)return null;let E=Q.dataset.path,D=Q.dataset.type;if(!E)return null;if(D==="dir")return E;if(E.includes("/")){let u=E.split("/");return u.pop(),u.join("/")||"."}return"."},[]),W0=P((L)=>{return K2(L?.target||null)},[K2]),j0=P((L)=>{e.current=L,G_(L)},[]),I_=P(()=>{let L=D0.current;if(L?.timer)clearTimeout(L.timer);D0.current={path:null,timer:0}},[]),I0=P((L)=>{if(!L||L==="."){I_();return}let Q=D_.current?.get(L);if(!Q||Q.type!=="dir"){I_();return}if(C_.current?.has(L)){I_();return}if(D0.current?.path===L)return;I_();let E=setTimeout(()=>{D0.current={path:null,timer:0},M_.current?.(L),G((D)=>{let u=new Set(D);return u.add(L),u})},600);D0.current={path:L,timer:E}},[I_]),p0=P((L,Q)=>{if(a0.current={x:L,y:Q},$0.current)return;$0.current=requestAnimationFrame(()=>{$0.current=0;let E=w0.current;if(!E)return;let D=a0.current;E.style.transform=`translate(${D.x+12}px, ${D.y+12}px)`})},[]),z2=P((L)=>{if(!L)return;let E=(D_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!E)return;K_({path:L,label:E})},[]),J2=P(()=>{if(K_(null),$0.current)cancelAnimationFrame($0.current),$0.current=0;if(w0.current)w0.current.style.transform="translate(-9999px, -9999px)"},[]),b2=P((L)=>{if(!L)return".";let Q=D_.current?.get(L);if(Q&&Q.type==="dir")return Q.path;if(L==="."||!L.includes("/"))return".";let E=L.split("/");return E.pop(),E.join("/")||"."},[]),F0=P(()=>{V(null),w("")},[]),A2=P((L)=>{if(!L)return;let E=(D_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!E||L===".")return;V(L),w(E)},[]),d2=P(async()=>{let L=t0.current;if(!L)return;let Q=(F||"").trim();if(!Q){F0();return}let E=D_.current?.get(L),D=(E?.name||L.split("/").pop()||L).trim();if(Q===D){F0();return}try{let d=(await x3(L,Q))?.path||L,s=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(F0(),t(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:L,newPath:d,type:E?.type||"file"}})),E?.type==="dir")G((o)=>{let g=new Set;for(let Y_ of o)if(Y_===L)g.add(d);else if(Y_.startsWith(`${L}/`))g.add(`${d}${Y_.slice(L.length)}`);else g.add(Y_);return g});if(O(d),E?.type==="dir")T(null),c(!1),x(null);else H_.current?.(d);M_.current?.(s)}catch(u){t(u?.message||"Failed to rename file")}},[F0,F]),y2=P(async(L)=>{let D=L||".";for(let u=0;u<50;u+=1){let s=`untitled${u===0?"":`-${u}`}.md`;try{let g=(await C3(D,s,""))?.path||(D==="."?s:`${D}/${s}`);if(D&&D!==".")G((Y_)=>new Set([...Y_,D]));O(g),t(null),M_.current?.(D),H_.current?.(g);return}catch(o){if(o?.status===409||o?.code==="file_exists")continue;t(o?.message||"Failed to create file");return}}t("Failed to create file (untitled name already in use).")},[]),m2=P((L)=>{if(L?.stopPropagation?.(),X_)return;let Q=b2(L0.current);y2(Q)},[X_,b2,y2]);m(()=>{if(typeof window>"u")return;let L=(Q)=>{let E=Q?.detail?.updates||[];if(!Array.isArray(E)||E.length===0)return;K((o)=>{let g=o;for(let Y_ of E){if(!Y_?.root)continue;if(!g||Y_.path==="."||!Y_.path)g=Y_.root;else g=K1(g,Y_.path,Y_.root)}if(g)l_.current=L8(g,C_.current,d_.current);return A(!1),g});let D=L0.current;if(Boolean(D)&&E.some((o)=>{let g=o?.path||"";if(!g||g===".")return!0;return D===g||D.startsWith(`${g}/`)||g.startsWith(`${D}/`)}))E0.current.clear();if(!D||!g0.current)return;let d=D_.current?.get(D);if(d&&d.type==="dir")return;if(E.some((o)=>{let g=o?.path||"";if(!g||g===".")return!0;return D===g||D.startsWith(`${g}/`)}))H_.current?.(D)};return window.addEventListener("workspace-update",L),()=>window.removeEventListener("workspace-update",L)},[]),L_.current=w2;let V2=y(()=>{if(typeof window>"u")return;let L=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),Q=U_.current??k0.current,E=document.visibilityState!=="hidden"&&(Q||L.matches&&k0.current);Z$(E,d_.current).catch(()=>{})}).current,t_=y(0),P2=y(()=>{if(t_.current)clearTimeout(t_.current);t_.current=setTimeout(()=>{t_.current=0,V2()},250)}).current;m(()=>{if(k0.current)L_.current?.();P2()},[$,N]),m(()=>{L_.current(),V2();let L=setInterval(()=>L_.current(),o9),Q=i2("previewHeight",null),E=Number.isFinite(Q)?Math.min(Math.max(Q,80),600):280;if(G0.current=E,S_.current)S_.current.style.setProperty("--preview-height",`${E}px`);let D=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),u=()=>P2();if(D.addEventListener)D.addEventListener("change",u);else if(D.addListener)D.addListener(u);return document.addEventListener("visibilitychange",u),()=>{if(clearInterval(L),W_.current)cancelAnimationFrame(W_.current),W_.current=0;if(D.removeEventListener)D.removeEventListener("change",u);else if(D.removeListener)D.removeListener(u);if(document.removeEventListener("visibilitychange",u),t_.current)clearTimeout(t_.current),t_.current=0;if(x_.current)clearTimeout(x_.current),x_.current=null;Z$(!1,d_.current).catch(()=>{})}},[]);let x0=i_(()=>U8(Z,z,n),[Z,z,n]),S0=i_(()=>new Map(x0.map((L)=>[L.node.path,L.node])),[x0]),Y2=i_(()=>X8(k_),[k_]);D_.current=S0;let q0=(X?D_.current.get(X):null)?.type==="dir";m(()=>{if(!X||!q0){E_(null),o_.current=null,T_.current=null;return}let L=X,Q=`${n?"hidden":"visible"}:${X}`,E=E0.current,D=E.get(Q);if(D?.root){E.delete(Q),E.set(Q,D);let s=q8(D.root,Boolean(D.truncated),b_);if(s)o_.current=s,T_.current=X,E_({loading:!1,error:null,payload:s});return}let u=o_.current,d=T_.current;E_({loading:!0,error:null,payload:d===X?u:null}),j$(X,d9,n).then((s)=>{if(L0.current!==L)return;let o={root:s?.root,truncated:Boolean(s?.truncated)};E.delete(Q),E.set(Q,o);while(E.size>r9){let Y_=E.keys().next().value;if(!Y_)break;E.delete(Y_)}let g=q8(o.root,o.truncated,b_);o_.current=g,T_.current=X,E_({loading:!1,error:null,payload:g})}).catch((s)=>{if(L0.current!==L)return;E_({loading:!1,error:s?.message||"Failed to load folder size chart",payload:d===X?u:null})})},[X,q0,n,b_]);let M2=Boolean(f&&f.kind==="text"&&!q0&&(!f.size||f.size<=262144)),G2=M2?"Open in editor":f?.size>262144?"File too large to edit":"File is not editable";m(()=>{let L=M0.current;if(c_.current)c_.current.dispose(),c_.current=null;if(!L)return;if(L.innerHTML="",!X||q0||!f||f.error)return;let Q={path:X,content:typeof f.text==="string"?f.text:void 0,mtime:f.mtime,size:f.size,preview:f,mode:"view"},E=X0.resolve(Q)||X0.get("workspace-preview-default");if(!E)return;let D=E.mount(L,Q);return c_.current=D,()=>{if(c_.current===D)D.dispose(),c_.current=null;L.innerHTML=""}},[X,q0,f]);let O2=(L)=>{let Q=L?.target;if(Q instanceof Element)return Q;return Q?.parentElement||null},C2=(L)=>{return Boolean(L?.closest?.(".workspace-node-icon, .workspace-label-text"))},h0=y((L)=>{if(v0.current)clearTimeout(v0.current),v0.current=null;let E=O2(L)?.closest?.("[data-path]");if(!E)return;let D=E.dataset.path;if(E.dataset.type==="dir"||!D)return;if(t0.current===D)F0();R_.current?.(D)}).current,e0=y((L)=>{if(H0.current){H0.current=!1;return}let Q=O2(L),E=Q?.closest?.("[data-path]");if(Y0.current?.focus?.(),!E)return;let D=E.dataset.path,u=E.dataset.type,d=Boolean(Q?.closest?.(".workspace-caret")),s=Boolean(Q?.closest?.("button"))||Boolean(Q?.closest?.("a"))||Boolean(Q?.closest?.("input")),o=L0.current===D,g=t0.current;if(g){if(g===D)return;F0()}let Y_=u==="file"&&C0.current===D&&!d&&!s;if(o&&!d&&!s&&D!=="."&&!Y_){if(v0.current)clearTimeout(v0.current);v0.current=setTimeout(()=>{v0.current=null,A2(D)},350);return}if(u==="dir"){if(C0.current=null,O(D),T(null),x(null),c(!1),!C_.current.has(D))M_.current?.(D);if(o&&!d)return;G((B0)=>{let A0=new Set(B0);if(A0.has(D))A0.delete(D);else A0.add(D);return A0})}else{C0.current=null,O(D);let y0=D_.current.get(D);if(y0)A_.current?.(y0.path,y0);H_.current?.(D)}}).current,f0=y(()=>{l_.current="",L_.current(),Array.from(C_.current||[]).filter((Q)=>Q&&Q!==".").forEach((Q)=>M_.current?.(Q))}).current,_2=y(()=>{C0.current=null,O(null),T(null),x(null),c(!1)}).current,x2=y(()=>{Z_((L)=>{let Q=!L;if(typeof window<"u")s_("workspaceShowHidden",String(Q));return d_.current=Q,Z$(!0,Q).catch(()=>{}),l_.current="",L_.current?.(),Array.from(C_.current||[]).filter((D)=>D&&D!==".").forEach((D)=>M_.current?.(D)),Q})}).current,S2=y((L)=>{if(O2(L)?.closest?.("[data-path]"))return;_2()}).current,$2=P(async(L)=>{if(!L)return;let Q=L.split("/").pop()||L;if(!window.confirm(`Delete "${Q}"? This cannot be undone.`))return;try{await f3(L);let D=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(L0.current===L)_2();M_.current?.(D),t(null)}catch(D){T((u)=>({...u||{},error:D.message||"Failed to delete file"}))}},[_2]),q2=P((L)=>{let Q=Y0.current;if(!Q||!L||typeof CSS>"u"||typeof CSS.escape!=="function")return;Q.querySelector(`[data-path="${CSS.escape(L)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),r2=P((L)=>{let Q=x0;if(!Q||Q.length===0)return;let E=X?Q.findIndex((D)=>D.node.path===X):-1;if(L.key==="ArrowDown"){L.preventDefault();let D=Math.min(E+1,Q.length-1),u=Q[D];if(!u)return;if(O(u.node.path),u.node.type!=="dir")A_.current?.(u.node.path,u.node),H_.current?.(u.node.path);else T(null),c(!1),x(null);q2(u.node.path);return}if(L.key==="ArrowUp"){L.preventDefault();let D=E<=0?0:E-1,u=Q[D];if(!u)return;if(O(u.node.path),u.node.type!=="dir")A_.current?.(u.node.path,u.node),H_.current?.(u.node.path);else T(null),c(!1),x(null);q2(u.node.path);return}if(L.key==="ArrowRight"&&E>=0){let D=Q[E];if(D?.node?.type==="dir"&&!z.has(D.node.path))L.preventDefault(),M_.current?.(D.node.path),G((u)=>new Set([...u,D.node.path]));return}if(L.key==="ArrowLeft"&&E>=0){let D=Q[E];if(D?.node?.type==="dir"&&z.has(D.node.path))L.preventDefault(),G((u)=>{let d=new Set(u);return d.delete(D.node.path),d});return}if(L.key==="Enter"&&E>=0){L.preventDefault();let D=Q[E];if(!D)return;let u=D.node.path;if(D.node.type==="dir"){if(!C_.current.has(u))M_.current?.(u);G((s)=>{let o=new Set(s);if(o.has(u))o.delete(u);else o.add(u);return o}),T(null),x(null),c(!1)}else A_.current?.(u,D.node),H_.current?.(u);return}if((L.key==="Delete"||L.key==="Backspace")&&E>=0){let D=Q[E];if(!D||D.node.type==="dir")return;L.preventDefault(),$2(D.node.path);return}if(L.key==="Escape")L.preventDefault(),_2()},[_2,$2,z,x0,q2,X]),b0=P((L)=>{let Q=O2(L),E=Q?.closest?.(".workspace-row");if(!E)return;let D=E.dataset.type,u=E.dataset.path;if(!u||u===".")return;if(t0.current===u)return;let d=L?.touches?.[0];if(!d)return;if(_0.current={path:C2(Q)?u:null,dragging:!1,startX:d.clientX,startY:d.clientY},D!=="file")return;if(x_.current)clearTimeout(x_.current);x_.current=setTimeout(()=>{if(x_.current=null,_0.current?.dragging)return;$2(u)},600)},[$2]),U=P(()=>{if(x_.current)clearTimeout(x_.current),x_.current=null;let L=_0.current;if(L?.dragging&&L.path){let Q=e.current||N0(),E=O0.current;if(typeof E==="function")E(L.path,Q)}_0.current={path:null,dragging:!1,startX:0,startY:0},M.current=0,Q_(!1),r(null),j0(null),I_(),J2()},[N0,J2,j0,I_]),S=P((L)=>{let Q=_0.current,E=L?.touches?.[0];if(!E||!Q?.path){if(x_.current)clearTimeout(x_.current),x_.current=null;return}let D=Math.abs(E.clientX-Q.startX),u=Math.abs(E.clientY-Q.startY),d=D>8||u>8;if(d&&x_.current)clearTimeout(x_.current),x_.current=null;if(!Q.dragging&&d)Q.dragging=!0,Q_(!0),r("move"),z2(Q.path);if(Q.dragging){L.preventDefault(),p0(E.clientX,E.clientY);let s=document.elementFromPoint(E.clientX,E.clientY),o=K2(s)||N0();if(e.current!==o)j0(o);I0(o)}},[K2,N0,z2,p0,j0,I0]),l=y((L)=>{L.preventDefault();let Q=S_.current;if(!Q)return;let E=L.clientY,D=G0.current||280,u=L.currentTarget;u.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let d=E,s=(g)=>{d=g.clientY;let Y_=Q.clientHeight-80,y0=Math.min(Math.max(D-(g.clientY-E),80),Y_);Q.style.setProperty("--preview-height",`${y0}px`),G0.current=y0},o=()=>{let g=Q.clientHeight-80,Y_=Math.min(Math.max(D-(d-E),80),g);G0.current=Y_,u.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",s_("previewHeight",String(Math.round(Y_))),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",o)}).current,z_=y((L)=>{L.preventDefault();let Q=S_.current;if(!Q)return;let E=L.touches[0];if(!E)return;let D=E.clientY,u=G0.current||280,d=L.currentTarget;d.classList.add("dragging"),document.body.style.userSelect="none";let s=(g)=>{let Y_=g.touches[0];if(!Y_)return;g.preventDefault();let y0=Q.clientHeight-80,B0=Math.min(Math.max(u-(Y_.clientY-D),80),y0);Q.style.setProperty("--preview-height",`${B0}px`),G0.current=B0},o=()=>{d.classList.remove("dragging"),document.body.style.userSelect="",s_("previewHeight",String(Math.round(G0.current||u))),document.removeEventListener("touchmove",s),document.removeEventListener("touchend",o),document.removeEventListener("touchcancel",o)};document.addEventListener("touchmove",s,{passive:!1}),document.addEventListener("touchend",o),document.addEventListener("touchcancel",o)}).current,w_=async()=>{if(!X)return;try{let L=await M3(X);if(L.media_id)x(L.media_id)}catch(L){T((Q)=>({...Q||{},error:L.message||"Failed to attach"}))}},r_=async()=>{if(!X||q0)return;await $2(X)},F_=(L)=>{return Array.from(L?.dataTransfer?.types||[]).includes("Files")},Z0=P((L)=>{if(!F_(L))return;if(L.preventDefault(),M.current+=1,!P_.current)Q_(!0);r("upload");let Q=W0(L)||N0();j0(Q),I0(Q)},[N0,W0,j0,I0]),i0=P((L)=>{if(!F_(L))return;if(L.preventDefault(),L.dataTransfer)L.dataTransfer.dropEffect="copy";if(!P_.current)Q_(!0);if(v_.current!=="upload")r("upload");let Q=W0(L)||N0();if(e.current!==Q)j0(Q);I0(Q)},[N0,W0,j0,I0]),D2=P((L)=>{if(!F_(L))return;if(L.preventDefault(),M.current=Math.max(0,M.current-1),M.current===0)Q_(!1),r(null),j0(null),I_()},[j0,I_]),u0=P(async(L,Q=".")=>{let E=Array.from(L||[]);if(E.length===0)return;let D=Q&&Q!==""?Q:".",u=D!=="."?D:"workspace root";y_(!0);try{let d=null;for(let s of E)try{d=await M$(s,D)}catch(o){let g=o?.status,Y_=o?.code;if(g===409||Y_==="file_exists"){let y0=s?.name||"file";if(!window.confirm(`"${y0}" already exists in ${u}. Overwrite?`))continue;d=await M$(s,D,{overwrite:!0})}else throw o}if(d?.path)C0.current=d.path,O(d.path),H_.current?.(d.path);M_.current?.(D)}catch(d){t(d.message||"Failed to upload file")}finally{y_(!1)}},[]),W2=P(async(L,Q)=>{if(!L)return;let E=D_.current?.get(L);if(!E)return;let D=Q&&Q!==""?Q:".",u=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(D===u)return;try{let s=(await S3(L,D))?.path||L;if(E.type==="dir")G((o)=>{let g=new Set;for(let Y_ of o)if(Y_===L)g.add(s);else if(Y_.startsWith(`${L}/`))g.add(`${s}${Y_.slice(L.length)}`);else g.add(Y_);return g});if(O(s),E.type==="dir")T(null),c(!1),x(null);else H_.current?.(s);M_.current?.(u),M_.current?.(D)}catch(d){t(d?.message||"Failed to move entry")}},[]);O0.current=W2;let X2=P(async(L)=>{if(!F_(L))return;L.preventDefault(),M.current=0,Q_(!1),r(null),G_(null),I_();let Q=Array.from(L?.dataTransfer?.files||[]);if(Q.length===0)return;let E=e.current||W0(L)||N0();await u0(Q,E)},[N0,W0,u0]),l0=P((L)=>{if(L?.stopPropagation?.(),X_)return;let Q=L?.currentTarget?.dataset?.uploadTarget||".";U0.current=Q,e_.current?.click()},[X_]),L2=P(()=>{if(X_)return;let L=L0.current,Q=L?D_.current?.get(L):null;U0.current=Q?.type==="dir"?Q.path:".",e_.current?.click()},[X_]),J0=P((L)=>{if(!L||L.button!==0)return;let Q=L.currentTarget;if(!Q||!Q.dataset)return;let E=Q.dataset.path;if(!E||E===".")return;if(t0.current===E)return;let D=O2(L);if(D?.closest?.("button, a, input, .workspace-caret"))return;if(!C2(D))return;L.preventDefault(),Q0.current={path:E,dragging:!1,startX:L.clientX,startY:L.clientY};let u=(s)=>{let o=Q0.current;if(!o?.path)return;let g=Math.abs(s.clientX-o.startX),Y_=Math.abs(s.clientY-o.startY),y0=g>4||Y_>4;if(!o.dragging&&y0)o.dragging=!0,H0.current=!0,Q_(!0),r("move"),z2(o.path),p0(s.clientX,s.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(o.dragging){s.preventDefault(),p0(s.clientX,s.clientY);let B0=document.elementFromPoint(s.clientX,s.clientY),A0=K2(B0)||N0();if(e.current!==A0)j0(A0);I0(A0)}},d=()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d);let s=Q0.current;if(s?.dragging&&s.path){let o=e.current||N0(),g=O0.current;if(typeof g==="function")g(s.path,o)}Q0.current={path:null,dragging:!1,startX:0,startY:0},M.current=0,Q_(!1),r(null),j0(null),I_(),J2(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{H0.current=!1},0)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",d)},[K2,N0,z2,p0,J2,j0,I0,I_]),f2=P(async(L)=>{let Q=Array.from(L?.target?.files||[]);if(Q.length===0)return;let E=U0.current||".";if(await u0(Q,E),U0.current=".",L?.target)L.target.value=""},[u0]);return B`
        <aside
            class=${`workspace-sidebar${i?" workspace-drop-active":""}`}
            data-workspace-scale=${k_}
            ref=${S_}
            onDragEnter=${Z0}
            onDragOver=${i0}
            onDragLeave=${D2}
            onDrop=${X2}
        >
            <input type="file" multiple style="display:none" ref=${e_} onChange=${f2} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${m2} title="New file" disabled=${X_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${f0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${n?" active":""}`}
                        onClick=${x2}
                        title=${n?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!n&&B`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${S2}>
                ${X_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${H&&B`<div class="workspace-loading">Loading…</div>`}
                ${a&&B`<div class="workspace-error">${a}</div>`}
                ${Z&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${Y0}
                        tabIndex="0"
                        onClick=${e0}
                        onDblClick=${h0}
                        onKeyDown=${r2}
                        onTouchStart=${b0}
                        onTouchEnd=${U}
                        onTouchMove=${S}
                        onTouchCancel=${U}
                    >
                        ${x0.map(({node:L,depth:Q})=>{let E=L.type==="dir",D=L.path===X,u=L.path===q,d=E&&z.has(L.path),s=N_&&L.path===N_,o=Array.isArray(L.children)&&L.children.length>0?L.children.length:Number(L.child_count)||0;return B`
                                <div
                                    key=${L.path}
                                    class=${`workspace-row${D?" selected":""}${s?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+Q*Y2.indentPx}px`}}
                                    data-path=${L.path}
                                    data-type=${L.type}
                                    onMouseDown=${J0}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${E?d?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${E?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${E?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${u?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${n_}
                                                value=${F}
                                                onInput=${(g)=>w(g?.target?.value||"")}
                                                onKeyDown=${(g)=>{if(g.key==="Enter")g.preventDefault(),d2();else if(g.key==="Escape")g.preventDefault(),F0()}}
                                                onBlur=${F0}
                                                onClick=${(g)=>g.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${L.name}</span></span>`}
                                    ${E&&!d&&o>0&&B`
                                        <span class="workspace-count">${o}</span>
                                    `}
                                    ${E&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${L.path}
                                            title="Upload files to this folder"
                                            onClick=${l0}
                                            disabled=${X_}
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
            ${X&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${l} onTouchStart=${z_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${X}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${m2} title="New file" disabled=${X_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!q0&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>M2&&R_.current?.(X,f)}
                                    title=${G2}
                                    disabled=${!M2}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${r_}
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
                            ${q0?B`
                                    <button class="workspace-download" onClick=${L2}
                                        title="Upload files to this folder" disabled=${X_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${T3(X,n)}
                                        title="Download folder as zip" onClick=${(L)=>L.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${w_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${C&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${f?.error&&B`<div class="workspace-error">${f.error}</div>`}
                    ${q0&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${j_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${j_?.error&&B`<div class="workspace-error">${j_.error}</div>`}
                        ${j_?.payload&&j_.payload.segments?.length>0&&B`
                            <${s9} payload=${j_.payload} />
                        `}
                        ${j_?.payload&&(!j_.payload.segments||j_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${f&&!f.error&&!q0&&B`
                        <div class="workspace-preview-body" ref=${M0}></div>
                    `}
                    ${R&&B`
                        <div class="workspace-download-card">
                            <${a9} mediaId=${R} />
                        </div>
                    `}
                </div>
            `}
            ${__&&B`
                <div class="workspace-drag-ghost" ref=${w0}>${__.label}</div>
            `}
        </aside>
    `}function w8({tabs:_,activeId:$,onActivate:N,onClose:j,onCloseOthers:Z,onCloseAll:K,onTogglePin:z,onTogglePreview:G,previewTabs:X,onToggleDock:O,dockVisible:q}){let[V,F]=I(null),w=y(null);m(()=>{if(!V)return;let H=(A)=>{if(A.type==="keydown"&&A.key!=="Escape")return;F(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[V]),m(()=>{let H=(A)=>{if(A.ctrlKey&&A.key==="Tab"){if(A.preventDefault(),!_.length)return;let C=_.findIndex((c)=>c.id===$);if(A.shiftKey){let c=_[(C-1+_.length)%_.length];N?.(c.id)}else{let c=_[(C+1)%_.length];N?.(c.id)}return}if((A.ctrlKey||A.metaKey)&&A.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(A.preventDefault(),$)j?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,N,j]);let f=P((H,A)=>{if(H.button===1){H.preventDefault(),j?.(A);return}if(H.button===0)N?.(A)},[N,j]),T=P((H,A)=>{H.preventDefault(),F({id:A,x:H.clientX,y:H.clientY})},[]),R=P((H)=>{H.preventDefault(),H.stopPropagation()},[]),x=P((H,A)=>{H.preventDefault(),H.stopPropagation(),j?.(A)},[j]);if(m(()=>{if(!$||!w.current)return;let H=w.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${w} role="tablist">
            ${_.map((H)=>B`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(A)=>f(A,H.id)}
                    onContextMenu=${(A)=>T(A,H.id)}
                >
                    ${H.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${H.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${R}
                        onClick=${(A)=>x(A,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${O&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${q?" active":""}`}
                    onClick=${O}
                    title=${`${q?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${q?"Hide":"Show"} terminal`}
                    aria-pressed=${q?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${V&&B`
            <div class="tab-context-menu" style=${{left:V.x+"px",top:V.y+"px"}}>
                <button onClick=${()=>{j?.(V.id),F(null)}}>Close</button>
                <button onClick=${()=>{Z?.(V.id),F(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),F(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(V.id),F(null)}}>
                    ${_.find((H)=>H.id===V.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(V.id)&&B`
                    <hr />
                    <button onClick=${()=>{G(V.id),F(null)}}>
                        ${X?.has(V.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var t9=400,O1=60,b8=220,W1="mdPreviewHeight";function e9(){try{let _=localStorage.getItem(W1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=O1?$:b8}catch{return b8}}function A8({getContent:_,path:$,onClose:N}){let[j,Z]=I(""),[K,z]=I(e9),G=y(null),X=y(null),O=y(""),q=y(_);return q.current=_,m(()=>{let w=()=>{let T=q.current?.()||"";if(T===O.current)return;O.current=T;try{let R=R0(T,null,{sanitize:!1});Z(R)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};w();let f=setInterval(w,t9);return()=>clearInterval(f)},[]),m(()=>{if(G.current&&j)H2(G.current).catch(()=>{})},[j]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(w)=>{w.preventDefault();let f=w.clientY,T=X.current?.offsetHeight||K,R=X.current?.parentElement,x=R?R.offsetHeight*0.7:500,H=w.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=(c)=>{let a=Math.min(Math.max(T-(c.clientY-f),O1),x);z(a)},C=()=>{H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(W1,String(Math.round(X.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",C)}}
            onTouchStart=${(w)=>{w.preventDefault();let f=w.touches[0];if(!f)return;let T=f.clientY,R=X.current?.offsetHeight||K,x=X.current?.parentElement,H=x?x.offsetHeight*0.7:500,A=w.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let C=(a)=>{let t=a.touches[0];if(!t)return;a.preventDefault();let n=Math.min(Math.max(R-(t.clientY-T),O1),H);z(n)},c=()=>{A.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(W1,String(Math.round(X.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c)}}
        ></div>
        <div class="md-preview-panel" ref=${X} style=${{height:K+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${N} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${G}
                dangerouslySetInnerHTML=${{__html:j}}
            />
        </div>
    `}function P8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:N,onWake:j,chatJid:Z}){let K=y(_);K.current=_;let z=y($);z.current=$;let G=y(N);G.current=N;let X=y(j);X.current=j,m(()=>{G.current();let O=new x$((V,F)=>K.current(V,F),(V)=>z.current(V),{chatJid:Z});O.connect();let q=()=>{O.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")X.current?.()};return window.addEventListener("focus",q),document.addEventListener("visibilitychange",q),()=>{window.removeEventListener("focus",q),document.removeEventListener("visibilitychange",q),O.disconnect()}},[Z])}function M8(){let[_,$]=I(!1),[N,j]=I("default"),Z=y(!1);m(()=>{let X=h2("notificationsEnabled",!1);if(Z.current=X,$(X),typeof Notification<"u")j(Notification.permission)},[]),m(()=>{Z.current=_},[_]);let K=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let X=Notification.requestPermission();if(X&&typeof X.then==="function")return X;return Promise.resolve(X)}catch{return Promise.resolve("default")}},[]),z=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){j("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let O=await K();if(j(O||"default"),O!=="granted"){Z.current=!1,$(!1),s_("notificationsEnabled","false");return}}let X=!Z.current;Z.current=X,$(X),s_("notificationsEnabled",String(X))},[K]),G=P((X,O)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let q=new Notification(X,{body:O});return q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:N,toggleNotifications:z,notify:G}}var W$=(_)=>{let $=new Set;return(_||[]).filter((N)=>{if(!N||$.has(N.id))return!1;return $.add(N.id),!0})};function C8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:N=null}){let[j,Z]=I(null),[K,z]=I(!1),G=y(!1),X=y(null),O=y(!1),q=y(null),V=y(null),F=y(0);m(()=>{G.current=K},[K]),m(()=>{V.current=j},[j]),m(()=>{F.current+=1,V.current=null,q.current=null,O.current=!1,G.current=!1,Z(null),z(!1)},[N]);let w=P(async(R=null)=>{let x=F.current;try{if(R){let H=await V3(R,50,0,N);if(x!==F.current)return;Z(H.posts),z(!1)}else{let H=await $$(10,null,N);if(x!==F.current)return;Z(H.posts),z(H.has_more)}}catch(H){if(x!==F.current)return;console.error("Failed to load posts:",H)}},[N]),f=P(async()=>{let R=F.current;try{let x=await $$(10,null,N);if(R!==F.current)return;Z((H)=>{if(!H||H.length===0)return x.posts;return W$([...x.posts,...H])}),z((H)=>H||x.has_more)}catch(x){if(R!==F.current)return;console.error("Failed to refresh timeline:",x)}},[N]),T=P(async(R={})=>{let x=F.current,H=V.current;if(!H||H.length===0)return;if(O.current)return;let{preserveScroll:A=!0,preserveMode:C="top",allowRepeat:c=!1}=R,a=(Z_)=>{if(!A){Z_();return}if(C==="top")$(Z_);else _(Z_)},n=H.slice().sort((Z_,i)=>Z_.id-i.id)[0]?.id;if(!Number.isFinite(n))return;if(!c&&q.current===n)return;O.current=!0,q.current=n;try{let Z_=await $$(10,n,N);if(x!==F.current)return;if(Z_.posts.length>0)a(()=>{Z((i)=>W$([...Z_.posts,...i||[]])),z(Z_.has_more)});else z(!1)}catch(Z_){if(x!==F.current)return;console.error("Failed to load more posts:",Z_)}finally{if(x===F.current)O.current=!1}},[N,_,$]);return m(()=>{X.current=T},[T]),{posts:j,setPosts:Z,hasMore:K,setHasMore:z,hasMoreRef:G,loadPosts:w,refreshTimeline:f,loadMore:T,loadMoreRef:X,loadingMoreRef:O,lastBeforeIdRef:q}}function x8(){let[_,$]=I(null),[N,j]=I({text:"",totalLines:0}),[Z,K]=I(""),[z,G]=I({text:"",totalLines:0}),[X,O]=I(null),[q,V]=I(null),[F,w]=I(null),f=y(null),T=y(0),R=y(!1),x=y(""),H=y(""),A=y(null),C=y(null),c=y(null),a=y(null),t=y(!1),n=y(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:N,setAgentDraft:j,agentPlan:Z,setAgentPlan:K,agentThought:z,setAgentThought:G,pendingRequest:X,setPendingRequest:O,currentTurnId:q,setCurrentTurnId:V,steerQueuedTurnId:F,setSteerQueuedTurnId:w,lastAgentEventRef:f,lastSilenceNoticeRef:T,isAgentRunningRef:R,draftBufferRef:x,thoughtBufferRef:H,pendingRequestRef:A,stalledPostIdRef:C,currentTurnIdRef:c,steerQueuedTurnIdRef:a,thoughtExpandedRef:t,draftExpandedRef:n}}function S8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:N,dockHeightRef:j}){let Z=y((q)=>{q.preventDefault();let V=_.current;if(!V)return;let F=q.clientX,w=$.current||280,f=q.currentTarget;f.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=F,R=(H)=>{T=H.clientX;let A=Math.min(Math.max(w+(H.clientX-F),160),600);V.style.setProperty("--sidebar-width",`${A}px`),$.current=A},x=()=>{let H=Math.min(Math.max(w+(T-F),160),600);$.current=H,f.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",s_("sidebarWidth",String(Math.round(H))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",x)}).current,K=y((q)=>{q.preventDefault();let V=_.current;if(!V)return;let F=q.touches[0];if(!F)return;let w=F.clientX,f=$.current||280,T=q.currentTarget;T.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(H)=>{let A=H.touches[0];if(!A)return;H.preventDefault();let C=Math.min(Math.max(f+(A.clientX-w),160),600);V.style.setProperty("--sidebar-width",`${C}px`),$.current=C},x=()=>{T.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",s_("sidebarWidth",String(Math.round($.current||f))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current,z=y((q)=>{q.preventDefault();let V=_.current;if(!V)return;let F=q.clientX,w=N.current||$.current||280,f=q.currentTarget;f.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=F,R=(H)=>{T=H.clientX;let A=Math.min(Math.max(w+(H.clientX-F),200),800);V.style.setProperty("--editor-width",`${A}px`),N.current=A},x=()=>{let H=Math.min(Math.max(w+(T-F),200),800);N.current=H,f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",s_("editorWidth",String(Math.round(H))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",x)}).current,G=y((q)=>{q.preventDefault();let V=_.current;if(!V)return;let F=q.touches[0];if(!F)return;let w=F.clientX,f=N.current||$.current||280,T=q.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let R=(H)=>{let A=H.touches[0];if(!A)return;H.preventDefault();let C=Math.min(Math.max(f+(A.clientX-w),200),800);V.style.setProperty("--editor-width",`${C}px`),N.current=C},x=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",s_("editorWidth",String(Math.round(N.current||f))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current,X=y((q)=>{q.preventDefault();let V=_.current;if(!V)return;let F=q.clientY,w=j?.current||200,f=q.currentTarget;f.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let T=F,R=(H)=>{T=H.clientY;let A=Math.min(Math.max(w-(H.clientY-F),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${A}px`),j)j.current=A;window.dispatchEvent(new CustomEvent("dock-resize"))},x=()=>{let H=Math.min(Math.max(w-(T-F),100),window.innerHeight*0.5);if(j)j.current=H;f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",s_("dockHeight",String(Math.round(H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",x)}).current,O=y((q)=>{q.preventDefault();let V=_.current;if(!V)return;let F=q.touches[0];if(!F)return;let w=F.clientY,f=j?.current||200,T=q.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let R=(H)=>{let A=H.touches[0];if(!A)return;H.preventDefault();let C=Math.min(Math.max(f-(A.clientY-w),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${C}px`),j)j.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},x=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",s_("dockHeight",String(Math.round(j?.current||f))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:X,handleDockSplitterTouchStart:O}}function f8({onTabClosed:_}={}){let $=y(_);$.current=_;let[N,j]=I(()=>u_.getTabs()),[Z,K]=I(()=>u_.getActiveId()),[z,G]=I(()=>u_.getTabs().length>0);m(()=>{return u_.onChange((C,c)=>{j(C),K(c),G(C.length>0)})},[]);let[X,O]=I(()=>new Set),q=P((C)=>{O((c)=>{let a=new Set(c);if(a.has(C))a.delete(C);else a.add(C);return a})},[]),V=P((C)=>{O((c)=>{if(!c.has(C))return c;let a=new Set(c);return a.delete(C),a})},[]),F=P((C)=>{if(!C)return;let c={path:C,mode:"edit"};try{if(!X0.resolve(c)){if(!X0.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(a){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,a)}u_.open(C)},[]),w=P(()=>{let C=u_.getActiveId();if(C){let c=u_.get(C);if(c?.dirty){if(!window.confirm(`"${c.label}" has unsaved changes. Close anyway?`))return}u_.close(C),V(C),$.current?.(C)}},[V]),f=P((C)=>{let c=u_.get(C);if(c?.dirty){if(!window.confirm(`"${c.label}" has unsaved changes. Close anyway?`))return}u_.close(C),V(C),$.current?.(C)},[V]),T=P((C)=>{u_.activate(C)},[]),R=P((C)=>{let c=u_.getTabs().filter((n)=>n.id!==C&&!n.pinned),a=c.filter((n)=>n.dirty).length;if(a>0){if(!window.confirm(`${a} unsaved tab${a>1?"s":""} will be closed. Continue?`))return}let t=c.map((n)=>n.id);u_.closeOthers(C),t.forEach((n)=>{V(n),$.current?.(n)})},[V]),x=P(()=>{let C=u_.getTabs().filter((t)=>!t.pinned),c=C.filter((t)=>t.dirty).length;if(c>0){if(!window.confirm(`${c} unsaved tab${c>1?"s":""} will be closed. Continue?`))return}let a=C.map((t)=>t.id);u_.closeAll(),a.forEach((t)=>{V(t),$.current?.(t)})},[V]),H=P((C)=>{u_.togglePin(C)},[]),A=P(()=>{let C=u_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return m(()=>{let C=(c)=>{let{oldPath:a,newPath:t,type:n}=c.detail||{};if(!a||!t)return;if(n==="dir"){for(let Z_ of u_.getTabs())if(Z_.path===a||Z_.path.startsWith(`${a}/`)){let i=`${t}${Z_.path.slice(a.length)}`;u_.rename(Z_.id,i)}}else u_.rename(a,t)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),m(()=>{let C=(c)=>{if(u_.hasUnsaved())c.preventDefault(),c.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:z,tabStripTabs:N,tabStripActiveId:Z,previewTabs:X,openEditor:F,closeEditor:w,handleTabClose:f,handleTabActivate:T,handleTabCloseOthers:R,handleTabCloseAll:x,handleTabTogglePin:H,handleTabTogglePreview:q,revealInExplorer:A}}function X1(_,$){try{if(typeof window>"u")return $;let N=window.__PICLAW_SILENCE||{},j=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=N[_]??window[j],K=Number(Z);return Number.isFinite(K)?K:$}catch{return $}}var L1=X1("warning",30000),T8=X1("finalize",120000),V1=X1("refresh",30000),I8=30000;function u8(_){let $={};return(_?.agents||[]).forEach((N)=>{$[N.id]=N}),$}function m8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function R8(_=30000){let[,$]=I(0);m(()=>{let N=setInterval(()=>$((j)=>j+1),_);return()=>clearInterval(N)},[_])}function q1(_,$=160){let N=String(_||"").replace(/\r\n/g,`
`);if(!N)return 0;return N.split(`
`).reduce((j,Z)=>j+Math.max(1,Math.ceil(Z.length/$)),0)}function v8(_,$){if(typeof _!=="string")return{kind:"ignore"};let N=_.trim();if(!N)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(N))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:N,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${N}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${N}`,level:"warning"}}return{kind:"open",path:N}}function u2(_={}){let $=_.window??(typeof window<"u"?window:null),N=_.navigator??(typeof navigator<"u"?navigator:null);if(N&&N.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function B1(_={}){let $=_.window??(typeof window<"u"?window:null),N=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!N)return!1;let j=String(N?.userAgent||""),Z=Number(N?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(j),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||Z>1||z)}function g8(_,$={}){if(u2($))return null;if(B1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:_7(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function c8(_,$={}){let N=$.window??(typeof window<"u"?window:null);if(!N||!_)return null;try{return _.features?N.open("about:blank",_.target,_.features):N.open("about:blank",_.target)}catch{return null}}function p8(_,$={}){if(!_||!_.document)return;try{let N=String($.title||"Opening branch…"),j=String($.message||"Preparing a new branch window…");_.document.title=N,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${N}</h1>
                <p style="margin: 0; line-height: 1.5;">${j}</p>
            </div>
        `}catch{}}function h8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function i8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function X$(_,$,N={}){let j=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(j.searchParams.set("chat_jid",Z),j.searchParams.delete("branch_loader"),j.searchParams.delete("branch_source_chat_jid"),N.chatOnly!==!1)j.searchParams.set("chat_only","1");return j.toString()}function l8(_,$,N={}){let j=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(j.searchParams.set("branch_loader","1"),j.searchParams.set("branch_source_chat_jid",Z),N.chatOnly!==!1)j.searchParams.set("chat_only","1");return j.toString()}function _7(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function U1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),N=String($||"").trim();if(!N)return"PiClaw could not open a new branch window.";let j=N.toLowerCase();if(j.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(j.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(j.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(j.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(j.includes("failed to fork branch")||j.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return N}function Q1(_){return String(_||"").trim()||"web:default"}function n8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:N=!1}={}){return Number(_||0)<=0&&!$&&!N}function o8(_={}){return u2(_)&&B1(_)}function $7(_={}){let $=_.window??(typeof window<"u"?window:null),N=Number($?.visualViewport?.height||0);if(Number.isFinite(N)&&N>0)return Math.round(N);let j=Number($?.innerHeight||0);if(Number.isFinite(j)&&j>0)return Math.round(j);return null}function N7(_={}){if(!o8(_))return null;let $=_.window??(typeof window<"u"?window:null),N=_.document??(typeof document<"u"?document:null);if(!$||!N?.documentElement)return null;let j=$7({window:$});if(j&&j>0)N.documentElement.style.setProperty("--app-height",`${j}px`);try{if(typeof $.scrollTo==="function")$.scrollTo(0,0)}catch{}try{if(N.scrollingElement)N.scrollingElement.scrollTop=0,N.scrollingElement.scrollLeft=0;if(N.documentElement)N.documentElement.scrollTop=0,N.documentElement.scrollLeft=0;if(N.body)N.body.scrollTop=0,N.body.scrollLeft=0}catch{}return j}function d8(_={}){if(!o8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),N=_.document??(typeof document<"u"?document:null);if(!$||!N)return()=>{};let j=0,Z=new Set,K=()=>{if(j)$.cancelAnimationFrame?.(j),j=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},z=()=>{j=0,N7({window:$,document:N})},G=()=>{if(j)$.cancelAnimationFrame?.(j);j=$.requestAnimationFrame?.(z)??0},X=()=>{G();for(let V of[80,220,420]){let F=$.setTimeout?.(()=>{Z.delete(F),G()},V);if(F!=null)Z.add(F)}},O=()=>{if(N.visibilityState&&N.visibilityState!=="visible")return;X()},q=$.visualViewport;return X(),$.addEventListener("focus",X),$.addEventListener("pageshow",X),$.addEventListener("resize",X),$.addEventListener("orientationchange",X),N.addEventListener("visibilitychange",O),N.addEventListener("focusin",X,!0),q?.addEventListener?.("resize",X),q?.addEventListener?.("scroll",X),()=>{K(),$.removeEventListener("focus",X),$.removeEventListener("pageshow",X),$.removeEventListener("resize",X),$.removeEventListener("orientationchange",X),N.removeEventListener("visibilitychange",O),N.removeEventListener("focusin",X,!0),q?.removeEventListener?.("resize",X),q?.removeEventListener?.("scroll",X)}}function j7(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Z2(_,$,N){let j=_?.[$];return typeof j==="function"?j:j7($,N)}var Z7=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function r8(_){return Z7.has(String(_||"").trim())}function K7(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function s8(_,$,N=globalThis.window){if(!N||typeof N.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let j={type:_,payload:$};return N.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:j})),N.dispatchEvent(new CustomEvent(K7(_),{detail:j})),!0}var z7=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function a8(_,$={}){let N=$.window??(typeof window<"u"?window:null),j=$.navigator??(typeof navigator<"u"?navigator:null);if(!N||typeof _!=="function")return()=>{};let Z=()=>{_(u2({window:N,navigator:j}))};Z();let z=z7.map((G)=>{try{return N.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",Z),()=>G.removeEventListener("change",Z);if(typeof G.addListener==="function")return G.addListener(Z),()=>G.removeListener(Z);return()=>{}});return N.addEventListener?.("focus",Z),N.addEventListener?.("pageshow",Z),()=>{for(let G of z)G();N.removeEventListener?.("focus",Z),N.removeEventListener?.("pageshow",Z)}}function t8(_,$={}){let N=$.window??(typeof window<"u"?window:null),j=$.document??(typeof document<"u"?document:null);if(!N||!j||typeof _!=="function")return()=>{};let Z=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;_()};return N.addEventListener?.("focus",Z),N.addEventListener?.("pageshow",Z),j.addEventListener?.("visibilitychange",Z),()=>{N.removeEventListener?.("focus",Z),N.removeEventListener?.("pageshow",Z),j.removeEventListener?.("visibilitychange",Z)}}var F1="piclaw_btw_session";function Y7(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function G7(){let _=r0(F1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let N=typeof $.question==="string"?$.question:"",j=typeof $.answer==="string"?$.answer:"",Z=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:N,answer:j,thinking:Z,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var e8=q3,_6=U3,O7=H3,$6=E3,N6=k3,j6=F3,H1=Z2(d0,"getAgentContext",null),W7=Z2(d0,"getAgentModels",{current:null,models:[]}),X7=Z2(d0,"getActiveChatAgents",{chats:[]}),Z6=Z2(d0,"getChatBranches",{chats:[]}),L7=Z2(d0,"renameChatBranch",null),V7=Z2(d0,"pruneChatBranch",null),q7=Z2(d0,"getAgentQueueState",{count:0}),B7=Z2(d0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),U7=Z2(d0,"removeAgentQueueItem",{removed:!1}),Q7=Z2(d0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});X0.register(r3);X0.register($1);X0.register(_1);s3();X0.register(t3);function H7({locationParams:_}){let $=i_(()=>{let W=_.get("chat_jid");return W&&W.trim()?W.trim():"web:default"},[_]),N=i_(()=>{let W=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),j=i_(()=>{let W=(_.get("branch_loader")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),Z=i_(()=>{let W=_.get("branch_source_chat_jid");return W&&W.trim()?W.trim():$},[$,_]),[K,z]=I("disconnected"),[G,X]=I(()=>u2()),[O,q]=I(null),[V,F]=I(null),[w,f]=I(!1),[T,R]=I("current"),[x,H]=I([]),[A,C]=I([]),[c,a]=I(null),{agentStatus:t,setAgentStatus:n,agentDraft:Z_,setAgentDraft:i,agentPlan:Q_,setAgentPlan:B_,agentThought:r,setAgentThought:__,pendingRequest:K_,setPendingRequest:N_,currentTurnId:G_,setCurrentTurnId:X_,steerQueuedTurnId:y_,setSteerQueuedTurnId:j_,lastAgentEventRef:E_,lastSilenceNoticeRef:b_,isAgentRunningRef:a_,draftBufferRef:k_,thoughtBufferRef:m_,pendingRequestRef:C_,stalledPostIdRef:l_,currentTurnIdRef:h,steerQueuedTurnIdRef:W_,thoughtExpandedRef:V_,draftExpandedRef:L_}=x8(),[D_,A_]=I({}),[R_,H_]=I(null),[M_,S_]=I(null),[Y0,n_]=I(!1),[e_,U0]=I(null),[x_,_0]=I([]),[Q0,D0]=I([]),[H0,G0]=I(null),[E0,o_]=I([]),[T_,M0]=I(!1),[c_,d_]=I(()=>G7()),k0=i_(()=>x_.find((W)=>W?.chat_jid===$)||null,[x_,$]),U_=i_(()=>Q0.find((W)=>W?.chat_jid===$)||k0||null,[k0,Q0,$]),M=U_?.root_chat_jid||k0?.root_chat_jid||$,e=Y7(T),[P_,v_]=I(()=>({status:j?"running":"idle",message:j?"Preparing a new chat branch…":""})),w0=E0.length,a0=y(new Set),$0=y([]),O0=y(new Set),L0=y({inFlight:!1,lastAttemptAt:0,turnId:null});a0.current=new Set(E0.map((W)=>W.row_id)),$0.current=E0;let{notificationsEnabled:t0,notificationPermission:C0,toggleNotifications:v0,notify:g0}=M8(),[o2,w2]=I(()=>new Set),[c0,N0]=I(()=>h2("workspaceOpen",!0)),K2=y(null),{editorOpen:W0,tabStripTabs:j0,tabStripActiveId:I_,previewTabs:I0,openEditor:p0,closeEditor:z2,handleTabClose:J2,handleTabActivate:b2,handleTabCloseOthers:F0,handleTabCloseAll:A2,handleTabTogglePin:d2,handleTabTogglePreview:y2,revealInExplorer:m2}=f8({onTabClosed:(W)=>K2.current?.(W)}),V2=y(null),t_=y(null),P2=y(null),x0=y(null),S0=X0.getDockPanes().length>0,[Y2,L$]=I(!1),q0=P(()=>L$((W)=>!W),[]),M2=!N&&(W0||S0&&Y2);m(()=>{let W=V2.current;if(!W)return;if(t_.current)t_.current.dispose(),t_.current=null;let Y=I_;if(!Y)return;let J={path:Y,mode:"edit"},b=X0.resolve(J)||X0.get("editor");if(!b){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let k=b.mount(W,J);t_.current=k,k.onDirtyChange?.(($_)=>{u_.setDirty(Y,$_)}),k.onSaveRequest?.(()=>{}),k.onClose?.(()=>{z2()});let p=u_.getViewState(Y);if(p&&typeof k.restoreViewState==="function")requestAnimationFrame(()=>k.restoreViewState(p));if(typeof k.onViewStateChange==="function")k.onViewStateChange(($_)=>{u_.saveViewState(Y,$_)});return requestAnimationFrame(()=>k.focus()),()=>{if(t_.current===k)k.dispose(),t_.current=null}},[I_,z2]),m(()=>{let W=P2.current;if(x0.current)x0.current.dispose(),x0.current=null;if(!W||!S0||!Y2)return;let Y=X0.getDockPanes()[0];if(!Y){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=Y.mount(W,{mode:"view"});return x0.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(x0.current===J)J.dispose(),x0.current=null}},[S0,Y2]);let[G2,O2]=I({name:"You",avatar_url:null,avatar_background:null}),C2=y(!1),h0=y(!1),e0=y(null),f0=y($),_2=y(new Map),x2=y($),S2=y(0),$2=y(0),q2=y({}),r2=y({name:null,avatar_url:null}),b0=y({currentHashtag:null,searchQuery:null}),U=y(null),S=y(null),l=y(0),z_=y(0),w_=y(0),r_=y(null),F_=y(null),Z0=y(null),i0=y(null),D2=y(0),u0=y({title:null,avatarBase:null}),W2=y(null),X2=P(()=>{if(W2.current)clearTimeout(W2.current),W2.current=null;a(null)},[]);R8(30000),m(()=>{return F4()},[]),m(()=>{return a8(X)},[]),m(()=>{s_("workspaceOpen",String(c0))},[c0]),m(()=>{return d8()},[]),m(()=>{return()=>{X2()}},[X2]),m(()=>{if(!c_){s_(F1,"");return}s_(F1,JSON.stringify({question:c_.question||"",answer:c_.answer||"",thinking:c_.thinking||"",error:c_.error||null,status:c_.status||"success"}))},[c_]),m(()=>{q2.current=D_||{}},[D_]),m(()=>{f0.current=$},[$]),m(()=>{r2.current=G2||{name:"You",avatar_url:null,avatar_background:null}},[G2]);let l0=P((W,Y,J=null)=>{if(typeof document>"u")return;let b=(W||"").trim()||"PiClaw";if(u0.current.title!==b){document.title=b;let v=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(v&&v.getAttribute("content")!==b)v.setAttribute("content",b);u0.current.title=b}let k=document.getElementById("dynamic-favicon");if(!k)return;let p=k.getAttribute("data-default")||k.getAttribute("href")||"/favicon.ico",$_=Y||p,J_=Y?`${$_}|${J||""}`:$_;if(u0.current.avatarBase!==J_){let v=Y?`${$_}${$_.includes("?")?"&":"?"}v=${J||Date.now()}`:$_;k.setAttribute("href",v),u0.current.avatarBase=J_}},[]),L2=P((W)=>{if(!W)return;H((Y)=>Y.includes(W)?Y:[...Y,W])},[]),J0=P((W)=>{H((Y)=>Y.filter((J)=>J!==W))},[]);K2.current=J0;let f2=P(()=>{H([])},[]),L=P((W,Y=null,J="info",b=3000)=>{X2(),a({title:W,detail:Y||null,kind:J||"info"}),W2.current=setTimeout(()=>{a((k)=>k?.title===W?null:k)},b)},[X2]),Q=P((W)=>{let Y=v8(W,{editorOpen:W0,resolvePane:(J)=>X0.resolve(J)});if(Y.kind==="open"){p0(Y.path);return}if(Y.kind==="toast")L(Y.title,Y.detail,Y.level)},[W0,p0,L]),E=P(()=>{let W=I_;if(W)L2(W)},[I_,L2]),D=P((W)=>{if(!W)return;C((Y)=>Y.includes(W)?Y:[...Y,W])},[]),u=P(async(W,Y=null)=>{let J=(k)=>{k.scrollIntoView({behavior:"smooth",block:"center"}),k.classList.add("post-highlight"),setTimeout(()=>k.classList.remove("post-highlight"),2000)},b=document.getElementById("post-"+W);if(b){J(b);return}try{let k=typeof Y==="string"&&Y.trim()?Y.trim():$,$_=(await B3(W,k))?.thread?.[0];if(!$_)return;V0((J_)=>{if(!J_)return[$_];if(J_.some((v)=>v.id===$_.id))return J_;return[...J_,$_]}),requestAnimationFrame(()=>{setTimeout(()=>{let J_=document.getElementById("post-"+W);if(J_)J(J_)},50)})}catch(k){console.error("[scrollToMessage] Failed to fetch message",W,k)}},[$]),d=P((W)=>{C((Y)=>Y.filter((J)=>J!==W))},[]),s=P(()=>{C([])},[]),o=P((W={})=>{let Y=Date.now();if(E_.current=Y,W.running)a_.current=!0,M0((J)=>J?J:!0);if(W.clearSilence)b_.current=0},[M0]),g=P(()=>{if(i0.current)clearTimeout(i0.current),i0.current=null;D2.current=0},[]);m(()=>()=>{g()},[g]);let Y_=P(()=>{g(),n((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:Y,lastActivity:J,...b}=W;return b})},[g]),y0=P((W)=>{if(!W)return;g();let Y=Date.now();D2.current=Y,n({type:W.type||"active",last_activity:!0}),i0.current=setTimeout(()=>{if(D2.current!==Y)return;n((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},I8)},[g]),B0=P(()=>{a_.current=!1,M0(!1),E_.current=null,b_.current=0,k_.current="",m_.current="",C_.current=null,F_.current=null,h.current=null,W_.current=null,e0.current=null,L0.current={inFlight:!1,lastAttemptAt:0,turnId:null},g(),X_(null),j_(null),V_.current=!1,L_.current=!1},[g,X_,j_,M0]),A0=P((W)=>{if(!n8({remainingQueueCount:W,currentTurnId:h.current,isAgentTurnActive:T_}))return;W_.current=null,j_(null)},[T_,j_]),J1=P(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),V$=P(()=>({agentStatus:t,agentDraft:Z_?{...Z_}:{text:"",totalLines:0},agentPlan:Q_||"",agentThought:r?{...r}:{text:"",totalLines:0},pendingRequest:K_,currentTurnId:G_,steerQueuedTurnId:y_,isAgentTurnActive:Boolean(T_),followupQueueItems:Array.isArray(E0)?E0.map((W)=>({...W})):[],activeModel:R_,activeThinkingLevel:M_,supportsThinking:Boolean(Y0),activeModelUsage:e_,contextUsage:H0,isAgentRunning:Boolean(a_.current),wasAgentActive:Boolean(h0.current),draftBuffer:k_.current||"",thoughtBuffer:m_.current||"",lastAgentEvent:E_.current||null,lastSilenceNotice:b_.current||0,lastAgentResponse:F_.current||null,currentTurnIdRef:h.current||null,steerQueuedTurnIdRef:W_.current||null,thoughtExpanded:Boolean(V_.current),draftExpanded:Boolean(L_.current),agentStatusRef:e0.current||null,silentRecovery:{...L0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[R_,e_,M_,Z_,Q_,t,r,H0,G_,E0,T_,K_,y_,Y0]),y1=P((W)=>{let Y=W||J1();g(),a_.current=Boolean(Y.isAgentRunning),h0.current=Boolean(Y.wasAgentActive),M0(Boolean(Y.isAgentTurnActive)),E_.current=Y.lastAgentEvent||null,b_.current=Number(Y.lastSilenceNotice||0),k_.current=Y.draftBuffer||"",m_.current=Y.thoughtBuffer||"",C_.current=Y.pendingRequest||null,F_.current=Y.lastAgentResponse||null,h.current=Y.currentTurnIdRef||null,W_.current=Y.steerQueuedTurnIdRef||null,e0.current=Y.agentStatusRef||null,L0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},V_.current=Boolean(Y.thoughtExpanded),L_.current=Boolean(Y.draftExpanded),n(Y.agentStatus||null),i(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),B_(Y.agentPlan||""),__(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),N_(Y.pendingRequest||null),X_(Y.currentTurnId||null),j_(Y.steerQueuedTurnId||null),o_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((J)=>({...J})):[]),H_(Y.activeModel||null),S_(Y.activeThinkingLevel||null),n_(Boolean(Y.supportsThinking)),U0(Y.activeModelUsage??null),G0(Y.contextUsage??null)},[g,J1,X_,o_,M0,j_]),B2=P((W)=>{if(!W)return;if(h.current===W)return;h.current=W,L0.current={inFlight:!1,lastAttemptAt:0,turnId:W},X_(W),W_.current=null,j_(null),k_.current="",m_.current="",i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),N_(null),C_.current=null,F_.current=null,V_.current=!1,L_.current=!1},[X_,j_]),D1=P((W)=>{if(typeof document<"u"){let v=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&v)return}let Y=F_.current;if(!Y||!Y.post)return;if(W&&Y.turnId&&Y.turnId!==W)return;let J=Y.post;if(J.id&&r_.current===J.id)return;let b=String(J?.data?.content||"").trim();if(!b)return;r_.current=J.id||r_.current,F_.current=null;let k=b.replace(/\s+/g," ").slice(0,200),p=q2.current||{},J_=(J?.data?.agent_id?p[J.data.agent_id]:null)?.name||"Pi";g0(J_,k)},[g0]),K6=P(async(W,Y)=>{if(W!=="thought"&&W!=="draft")return;let J=h.current;if(W==="thought"){if(V_.current=Y,J)try{await N6(J,"thought",Y)}catch(b){console.warn("Failed to update thought visibility:",b)}if(!Y)return;try{let b=J?await $6(J,"thought"):null;if(b?.text)m_.current=b.text;__((k)=>({...k||{text:"",totalLines:0},fullText:m_.current||k?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:k?.totalLines||0}))}catch(b){console.warn("Failed to fetch full thought:",b)}return}if(L_.current=Y,J)try{await N6(J,"draft",Y)}catch(b){console.warn("Failed to update draft visibility:",b)}if(!Y)return;try{let b=J?await $6(J,"draft"):null;if(b?.text)k_.current=b.text;i((k)=>({...k||{text:"",totalLines:0},fullText:k_.current||k?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:k?.totalLines||0}))}catch(b){console.warn("Failed to fetch full draft:",b)}},[]),o$=y(null),d$=P(()=>{let W=U.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);o$.current=d$;let z6=P((W)=>{let Y=U.current;if(!Y||typeof W!=="function"){W?.();return}let{currentHashtag:J,searchQuery:b}=b0.current||{},k=!(b&&!J),p=k?Y.scrollHeight-Y.scrollTop:Y.scrollTop;W(),requestAnimationFrame(()=>{let $_=U.current;if(!$_)return;if(k){let J_=Math.max($_.scrollHeight-p,0);$_.scrollTop=J_}else{let J_=Math.max($_.scrollHeight-$_.clientHeight,0),v=Math.min(p,J_);$_.scrollTop=v}})},[]),s2=P((W)=>{let Y=U.current;if(!Y||typeof W!=="function"){W?.();return}let J=Y.scrollTop;W(),requestAnimationFrame(()=>{let b=U.current;if(!b)return;let k=Math.max(b.scrollHeight-b.clientHeight,0);b.scrollTop=Math.min(J,k)})},[]),Y6="Queued as a follow-up (one-at-a-time).",G6="⁣",E1=P((W)=>{if(!W||!Array.isArray(W))return W;let Y=a0.current,J=new Set(Y),b=W.filter((k)=>{if(J.has(k?.id))return!1;if(k?.data?.is_bot_message){let p=k?.data?.content;if(p===Y6||p===G6)return!1}return!0});return b.length===W.length?W:b},[]),{posts:k1,setPosts:V0,hasMore:O6,setHasMore:q$,hasMoreRef:w1,loadPosts:N2,refreshTimeline:P0,loadMore:W6,loadMoreRef:r$}=C8({preserveTimelineScroll:z6,preserveTimelineScrollTop:s2,chatJid:$}),R2=i_(()=>E1(k1),[k1,E0,E1]),B$=P(()=>{let W=l_.current;if(!W)return;V0((Y)=>Y?Y.filter((J)=>J.id!==W):Y),l_.current=null},[V0]),{handleSplitterMouseDown:X6,handleSplitterTouchStart:L6,handleEditorSplitterMouseDown:V6,handleEditorSplitterTouchStart:q6,handleDockSplitterMouseDown:B6,handleDockSplitterTouchStart:U6}=S8({appShellRef:S,sidebarWidthRef:l,editorWidthRef:z_,dockHeightRef:w_}),b1=P(()=>{if(!a_.current)return;a_.current=!1,b_.current=0,E_.current=null,h.current=null,X_(null),V_.current=!1,L_.current=!1;let W=(k_.current||"").trim();if(k_.current="",m_.current="",i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),N_(null),C_.current=null,F_.current=null,!W){n({type:"error",title:"Response stalled - No content received"});return}let J=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,b=Date.now(),k=new Date().toISOString(),p={id:b,timestamp:k,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};l_.current=b,V0(($_)=>$_?W$([...$_,p]):[p]),o$.current?.(),n(null)},[X_]);m(()=>{b0.current={currentHashtag:O,searchQuery:V}},[O,V]);let g_=P(()=>{let W=$;q7(W).then((Y)=>{if(f0.current!==W)return;let J=O0.current,b=Array.isArray(Y?.items)?Y.items.map((k)=>({...k})).filter((k)=>!J.has(k.row_id)):[];if(b.length){o_((k)=>{if(k.length===b.length&&k.every((p,$_)=>p.row_id===b[$_].row_id))return k;return b});return}J.clear(),A0(0),o_((k)=>k.length===0?k:[])}).catch(()=>{if(f0.current!==W)return;o_((Y)=>Y.length===0?Y:[])})},[A0,$,o_]),n0=P(async()=>{let W=$;try{let Y=await H1(W);if(f0.current!==W)return;if(Y)G0(Y)}catch(Y){if(f0.current!==W)return;console.warn("Failed to fetch agent context:",Y)}},[$]),o0=P(async()=>{let W=$;try{let Y=await j6(W);if(f0.current!==W)return null;if(!Y||Y.status!=="active"||!Y.data){if(h0.current){let{currentHashtag:k,searchQuery:p}=b0.current||{};if(!k&&!p)P0()}return h0.current=!1,B0(),e0.current=null,n(null),i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),N_(null),C_.current=null,Y??null}h0.current=!0;let J=Y.data;e0.current=J;let b=J.turn_id||J.turnId;if(b)B2(b);if(o({running:!0,clearSilence:!0}),Y_(),n(J),Y.thought&&Y.thought.text)__((k)=>{if(k&&k.text&&k.text.length>=Y.thought.text.length)return k;return m_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)i((k)=>{if(k&&k.text&&k.text.length>=Y.draft.text.length)return k;return k_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[B0,Y_,o,P0,B2]),s$=P(async()=>{if(!a_.current)return null;if(C_.current)return null;let W=h.current||null,Y=L0.current,J=Date.now();if(Y.inFlight)return null;if(Y.turnId===W&&J-Y.lastAttemptAt<V1)return null;Y.inFlight=!0,Y.lastAttemptAt=J,Y.turnId=W;try{let{currentHashtag:b,searchQuery:k}=b0.current||{};if(!b&&!k)await P0();return await g_(),await o0()}finally{Y.inFlight=!1}},[o0,g_,P0]);m(()=>{let W=Math.min(1000,Math.max(100,Math.floor(L1/2))),Y=setInterval(()=>{if(!a_.current)return;if(C_.current)return;let J=E_.current;if(!J)return;let b=Date.now(),k=b-J,p=z$(e0.current);if(k>=T8){if(!p)n({type:"waiting",title:"Re-syncing after a quiet period…"});s$();return}if(k>=L1){if(b-b_.current>=V1){if(!p){let $_=Math.floor(k/1000);n({type:"waiting",title:`Waiting for model… No events for ${$_}s`})}b_.current=b,s$()}}},W);return()=>clearInterval(Y)},[s$]);let Q6=P((W)=>{if(z(W),W!=="connected"){n(null),i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),N_(null),C_.current=null,B0();return}if(!C2.current){C2.current=!0,o0(),n0();return}let{currentHashtag:Y,searchQuery:J}=b0.current;if(!Y&&!J)P0();o0(),n0()},[B0,P0,o0,n0]),H6=P(async(W)=>{q(W),V0(null),await N2(W)},[N2]),F6=P(async()=>{q(null),F(null),V0(null),await N2()},[N2]),J6=P(async(W,Y=T)=>{if(!W||!W.trim())return;let J=Y==="root"||Y==="all"?Y:"current";R(J),F(W.trim()),q(null),V0(null);try{let b=await e8(W.trim(),50,0,$,J,M);V0(b.results),q$(!1)}catch(b){console.error("Failed to search:",b),V0([])}},[$,M,T]),y6=P(()=>{f(!0),F(null),q(null),R("current"),V0([])},[]),D6=P(()=>{f(!1),F(null),N2()},[N2]),J7=P(()=>{},[]),E6=P(async(W)=>{if(!W)return;let Y=W.id,J=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():$,b=R2?.filter((p)=>p?.data?.thread_id===Y&&p?.id!==Y).length||0;if(b>0){if(!window.confirm(`Delete this message and its ${b} replies?`))return}let k=(p)=>{if(!p.length)return;w2((J_)=>{let v=new Set(J_);return p.forEach((O_)=>v.add(O_)),v}),setTimeout(()=>{if(s2(()=>{V0((J_)=>J_?J_.filter((v)=>!p.includes(v.id)):J_)}),w2((J_)=>{let v=new Set(J_);return p.forEach((O_)=>v.delete(O_)),v}),w1.current)r$.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let p=await _6(Y,b>0,J);if(p?.ids?.length)k(p.ids)}catch(p){let $_=p?.message||"";if(b===0&&$_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let v=await _6(Y,!0,J);if(v?.ids?.length)k(v.ids);return}console.error("Failed to delete post:",p),alert(`Failed to delete message: ${$_}`)}},[$,R2,s2]),A1=P(async()=>{try{let W=await O7();A_(u8(W));let Y=W?.user||{};O2((b)=>{let k=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",p=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,$_=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(b.name===k&&b.avatar_url===p&&b.avatar_background===$_)return b;return{name:k,avatar_url:p,avatar_background:$_}});let J=(W?.agents||[]).find((b)=>b.id==="default");l0(J?.name,J?.avatar_url)}catch(W){console.warn("Failed to load agents:",W)}try{let W=$,Y=await H1(W);if(f0.current!==W)return;if(Y)G0(Y)}catch{}},[l0,$]);m(()=>{A1();let W=i2("sidebarWidth",null),Y=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(l.current=Y,S.current)S.current.style.setProperty("--sidebar-width",`${Y}px`)},[A1]);let a$=T_||t!==null,P1=P((W)=>{if(!W||typeof W!=="object")return;let Y=W.agent_id;if(!Y)return;let{agent_name:J,agent_avatar:b}=W;if(!J&&b===void 0)return;let k=q2.current?.[Y]||{id:Y},p=k.name||null,$_=k.avatar_url??k.avatarUrl??k.avatar??null,J_=!1,v=!1;if(J&&J!==k.name)p=J,v=!0;if(b!==void 0){let O_=typeof b==="string"?b.trim():null,p_=typeof $_==="string"?$_.trim():null,q_=O_||null;if(q_!==(p_||null))$_=q_,J_=!0}if(!v&&!J_)return;if(A_((O_)=>{let q_={...O_[Y]||{id:Y}};if(v)q_.name=p;if(J_)q_.avatar_url=$_;return{...O_,[Y]:q_}}),Y==="default")l0(p,$_,J_?Date.now():null)},[l0]),M1=P((W)=>{if(!W||typeof W!=="object")return;let Y=W.user_name??W.userName,J=W.user_avatar??W.userAvatar,b=W.user_avatar_background??W.userAvatarBackground;if(Y===void 0&&J===void 0&&b===void 0)return;O2((k)=>{let p=typeof Y==="string"&&Y.trim()?Y.trim():k.name||"You",$_=J===void 0?k.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,J_=b===void 0?k.avatar_background:typeof b==="string"&&b.trim()?b.trim():null;if(k.name===p&&k.avatar_url===$_&&k.avatar_background===J_)return k;return{name:p,avatar_url:$_,avatar_background:J_}})},[]),t$=P((W)=>{if(!W||typeof W!=="object")return;let Y=W.model??W.current;if(Y!==void 0)H_(Y);if(W.thinking_level!==void 0)S_(W.thinking_level??null);if(W.supports_thinking!==void 0)n_(Boolean(W.supports_thinking));if(W.provider_usage!==void 0)U0(W.provider_usage??null)},[]),a2=P(()=>{let W=$;W7(W).then((Y)=>{if(f0.current!==W)return;if(Y)t$(Y)}).catch(()=>{})},[t$,$]),m0=P(()=>{X7().then((W)=>{let Y=Array.isArray(W?.chats)?W.chats.filter((J)=>J&&typeof J.agent_name==="string"&&J.agent_name.trim()):[];_0(Y)}).catch(()=>{})},[]),T0=P(()=>{Z6(M).then((W)=>{let Y=Array.isArray(W?.chats)?W.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];D0(Y)}).catch(()=>{})},[M]),k6=P((W)=>{let Y=W?.row_id;if(Y==null)return;O0.current.add(Y),o_((J)=>J.filter((b)=>b?.row_id!==Y)),B7(Y,Q1($)).then(()=>{g_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),L("Failed to steer message","The queued message could not be sent as steering.","warning"),O0.current.delete(Y),g_()})},[$,g_,o_,L]),w6=P((W)=>{let Y=W?.row_id;if(Y==null)return;let J=$0.current.filter((b)=>b?.row_id!==Y).length;O0.current.add(Y),A0(J),o_((b)=>b.filter((k)=>k?.row_id!==Y)),U7(Y,Q1($)).then(()=>{g_()}).catch((b)=>{console.warn("[queue] Failed to remove queued item:",b),L("Failed to remove message","The queued message could not be removed.","warning"),O0.current.delete(Y),g_()})},[A0,$,g_,o_,L]),e$=P((W)=>{if(!W||typeof W!=="object")return;if(m0(),T0(),W?.queued==="followup"||W?.queued==="steer"){g_();return}let Y=W?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))g_()},[m0,T0,g_]),_3=P(()=>{if(Z0.current)Z0.current.abort(),Z0.current=null;d_(null)},[]),U$=P(async(W)=>{let Y=String(W||"").trim();if(!Y)return L("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Z0.current)Z0.current.abort();let J=new AbortController;Z0.current=J,d_({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let b=await Q7(Y,{signal:J.signal,chatJid:C4($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(k,p)=>{if(k==="side_prompt_start")d_(($_)=>$_?{...$_,status:"running"}:$_)},onThinkingDelta:(k)=>{d_((p)=>p?{...p,thinking:`${p.thinking||""}${k||""}`}:p)},onTextDelta:(k)=>{d_((p)=>p?{...p,answer:`${p.answer||""}${k||""}`}:p)}});if(Z0.current!==J)return!0;d_((k)=>k?{...k,answer:b?.result||k.answer||"",thinking:b?.thinking||k.thinking||"",model:b?.model||null,status:"success",error:null}:k)}catch(b){if(J.signal.aborted)return!0;d_((k)=>k?{...k,status:"error",error:b?.payload?.error||b?.message||"BTW request failed."}:k)}finally{if(Z0.current===J)Z0.current=null}return!0},[$,L]),b6=P(async({content:W})=>{let Y=M4(W);if(!Y)return!1;if(Y.type==="help")return L("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return _3(),L("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await U$(Y.question),!0;return!1},[_3,U$,L]),A6=P(()=>{if(c_?.question)U$(c_.question)},[c_,U$]),P6=P(async()=>{let W=f4(c_);if(!W)return;try{let Y=await c2("default",W,null,[],a$?"queue":null,$);e$(Y),L(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){L("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[c_,e$,a$,L]),t2=P(()=>{a2(),m0(),T0(),g_(),n0()},[a2,m0,T0,g_,n0]);m(()=>{t2();let W=setInterval(()=>{a2(),m0(),T0(),g_()},60000);return()=>clearInterval(W)},[t2,a2,m0,T0,g_]),m(()=>{T0()},[T0]),m(()=>{let W=!1;if(V0(null),O)return N2(O),()=>{W=!0};if(V)return e8(V,50,0,$,T,M).then((Y)=>{if(W)return;V0(Y.results),q$(!1)}).catch((Y)=>{if(W)return;console.error("Failed to search:",Y),V0([]),q$(!1)}),()=>{W=!0};return N2(),()=>{W=!0}},[$,O,V,T,M,N2,q$,V0]),m(()=>{let W=x2.current||$;_2.current.set(W,V$())},[$,V$]),m(()=>{let W=x2.current||$;if(W===$)return;_2.current.set(W,V$()),x2.current=$,O0.current.clear(),y1(_2.current.get($)||null),g_(),o0(),n0()},[$,o0,n0,g_,y1,V$]);let M6=P(()=>{let{currentHashtag:W,searchQuery:Y}=b0.current||{};if(!W&&!Y)P0();t2()},[t2,P0]),$3=P((W,Y)=>{let J=Y?.turn_id,b=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,p=b?b===$:W==="connected"||W==="workspace_update";if(p)P1(Y),M1(Y);if(W==="ui_theme"){J4(Y);return}if(W?.startsWith("agent_")){if(!(W==="agent_draft_delta"||W==="agent_thought_delta"||W==="agent_draft"||W==="agent_thought"))Y_()}if(W==="connected"){n(null),i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),N_(null),C_.current=null,B0();let v=$;j6(v).then((q_)=>{if(f0.current!==v)return;if(!q_||q_.status!=="active"||!q_.data)return;let v2=q_.data,C1=v2.turn_id||v2.turnId;if(C1)B2(C1);if(o({clearSilence:!0}),y0(v2),q_.thought&&q_.thought.text)m_.current=q_.thought.text,__({text:q_.thought.text,totalLines:q_.thought.totalLines||0});if(q_.draft&&q_.draft.text)k_.current=q_.draft.text,i({text:q_.draft.text,totalLines:q_.draft.totalLines||0})}).catch((q_)=>{console.warn("Failed to fetch agent status:",q_)});let{currentHashtag:O_,searchQuery:p_}=b0.current||{};if(!O_&&!p_)P0();t2();return}if(W==="agent_status"){if(!p){if(Y?.type==="done"||Y?.type==="error")m0(),T0();return}if(Y.type==="done"||Y.type==="error"){if(J&&h.current&&J!==h.current)return;if(Y.type==="done"){D1(J||h.current);let{currentHashtag:v,searchQuery:O_}=b0.current||{};if(!v&&!O_)P0();if(Y.context_usage)G0(Y.context_usage)}if(h0.current=!1,B0(),O0.current.clear(),m0(),g_(),i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),N_(null),Y.type==="error")n({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(J)B2(J);if(o({running:!0,clearSilence:!0}),Y.type==="thinking")k_.current="",m_.current="",i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0});e0.current=Y,n((v)=>{if(v&&v.type===Y.type&&v.title===Y.title)return v;return Y})}return}if(W==="agent_steer_queued"){if(!p)return;if(J&&h.current&&J!==h.current)return;let v=J||h.current;if(!v)return;W_.current=v,j_(v);return}if(W==="agent_followup_queued"){if(!p)return;let v=Y?.row_id,O_=Y?.content;if(v!=null&&typeof O_==="string"&&O_.trim())o_((p_)=>{if(p_.some((q_)=>q_?.row_id===v))return p_;return[...p_,{row_id:v,content:O_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});g_();return}if(W==="agent_followup_consumed"){if(!p)return;let v=Y?.row_id;if(v!=null){let O_=$0.current.filter((p_)=>p_.row_id!==v).length;A0(O_),o_((p_)=>p_.filter((q_)=>q_.row_id!==v))}g_(),P0();return}if(W==="agent_followup_removed"){if(!p)return;let v=Y?.row_id;if(v!=null){let O_=$0.current.filter((p_)=>p_.row_id!==v).length;O0.current.add(v),A0(O_),o_((p_)=>p_.filter((q_)=>q_.row_id!==v))}g_();return}if(W==="agent_draft_delta"){if(!p)return;if(J&&h.current&&J!==h.current)return;if(J&&!h.current)B2(J);if(o({running:!0,clearSilence:!0}),Y?.reset)k_.current="";if(Y?.delta)k_.current+=Y.delta;let v=Date.now();if(!S2.current||v-S2.current>=100){S2.current=v;let O_=k_.current,p_=q1(O_);if(L_.current)i((q_)=>({text:q_?.text||"",totalLines:p_,fullText:O_}));else i({text:O_,totalLines:p_})}return}if(W==="agent_draft"){if(!p)return;if(J&&h.current&&J!==h.current)return;if(J&&!h.current)B2(J);o({running:!0,clearSilence:!0});let v=Y.text||"",O_=Y.mode||(Y.kind==="plan"?"replace":"append"),p_=Number.isFinite(Y.total_lines)?Y.total_lines:v?v.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(O_==="replace")B_(v);else B_((q_)=>(q_||"")+v);else if(!L_.current)k_.current=v,i({text:v,totalLines:p_});return}if(W==="agent_thought_delta"){if(!p)return;if(J&&h.current&&J!==h.current)return;if(J&&!h.current)B2(J);if(o({running:!0,clearSilence:!0}),Y?.reset)m_.current="";if(typeof Y?.delta==="string")m_.current+=Y.delta;let v=Date.now();if(V_.current&&(!$2.current||v-$2.current>=100)){$2.current=v;let O_=m_.current;__((p_)=>({text:p_?.text||"",totalLines:q1(O_),fullText:O_}))}return}if(W==="agent_thought"){if(!p)return;if(J&&h.current&&J!==h.current)return;if(J&&!h.current)B2(J);o({running:!0,clearSilence:!0});let v=Y.text||"",O_=Number.isFinite(Y.total_lines)?Y.total_lines:v?v.replace(/\r\n/g,`
`).split(`
`).length:0;if(!V_.current)m_.current=v,__({text:v,totalLines:O_});return}if(W==="model_changed"){if(!p)return;if(Y?.model!==void 0)H_(Y.model);if(Y?.thinking_level!==void 0)S_(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)n_(Boolean(Y.supports_thinking));let v=$;H1(v).then((O_)=>{if(f0.current!==v)return;if(O_)G0(O_)}).catch(()=>{});return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}if(r8(W)){if(!p)return;if(s8(W,Y),W==="extension_ui_notify"&&typeof Y?.message==="string")L(Y.message,null,Y?.type||"info");if(W==="extension_ui_error"&&typeof Y?.error==="string")L("Extension UI error",Y.error,"error",5000);return}let{currentHashtag:$_,searchQuery:J_}=b0.current;if(W==="agent_response"){if(!p)return;B$(),F_.current={post:Y,turnId:h.current}}if(!$_&&!J_&&p&&(W==="new_post"||W==="new_reply"||W==="agent_response"))V0((v)=>{if(!v)return[Y];if(v.some((O_)=>O_.id===Y.id))return v;return[...v,Y]}),o$.current?.();if(W==="interaction_updated"){if(!p)return;V0((v)=>{if(!v)return v;if(!v.some((O_)=>O_.id===Y.id))return v;return v.map((O_)=>O_.id===Y.id?Y:O_)})}if(W==="interaction_deleted"){if(!p)return;let v=Y?.ids||[];if(v.length){s2(()=>{V0((q_)=>q_?q_.filter((v2)=>!v.includes(v2.id)):q_)});let{currentHashtag:O_,searchQuery:p_}=b0.current;if(w1.current&&!O_&&!p_)r$.current?.({preserveScroll:!0,preserveMode:"top"})}}},[B0,Y_,$,r$,o,D1,s2,m0,T0,P0,B$,B2,y0,P1,M1,a2,g_,o_]);m(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=$3,W.reset=()=>{B$(),B0(),n(null),i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),N_(null)},W.finalize=()=>b1(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[B0,b1,$3,B$]),P8({handleSseEvent:$3,handleConnectionStatusChange:Q6,loadPosts:N2,onWake:M6,chatJid:$}),m(()=>{if(!R2||R2.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let Y=W.slice(5);u(Y),history.replaceState(null,"",location.pathname+location.search)},[R2,u]);let N3=t!==null;m(()=>{if(K!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:J,searchQuery:b}=b0.current||{},k=!J&&!b;if(N3){if(k)P0();g_(),o0(),n0()}else{if(k)P0();o0(),n0()}},N3?15000:60000);return()=>clearInterval(Y)},[K,N3,o0,n0,g_,P0]),m(()=>{return t8(()=>{o0(),n0(),g_()})},[o0,n0,g_]);let C6=P(()=>{N0((W)=>!W)},[]),x6=P((W)=>{if(typeof window>"u")return;let Y=String(W||"").trim();if(!Y||Y===$)return;let J=X$(window.location.href,Y,{chatOnly:N});window.location.assign(J)},[N,$]),S6=P(async()=>{if(typeof window>"u"||!U_?.chat_jid)return;let W=U_.agent_name||"",Y=U_.display_name||"",J=window.prompt("Branch display name",Y);if(J===null)return;let b=window.prompt("Agent handle (without @)",W);if(b===null)return;try{let k=await L7(U_.chat_jid,{displayName:J,agentName:b});await Promise.allSettled([m0(),T0()]);let p=k?.branch?.agent_name||String(b||"").trim()||W;L("Branch renamed",`This chat is now @${p}.`,"info",3500)}catch(k){let p=k instanceof Error?k.message:String(k||"Could not rename branch.");L("Could not rename branch",p||"Could not rename branch.","warning",5000)}},[U_,m0,T0,L]),f6=P(async()=>{if(typeof window>"u"||!U_?.chat_jid)return;if(U_.chat_jid===(U_.root_chat_jid||U_.chat_jid)){L("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=U_.display_name||`@${U_.agent_name||U_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await V7(U_.chat_jid),await Promise.allSettled([m0(),T0()]);let b=U_.root_chat_jid||"web:default";L("Branch pruned",`${Y} has been archived.`,"info",3000);let k=X$(window.location.href,b,{chatOnly:N});window.location.assign(k)}catch(b){let k=b instanceof Error?b.message:String(b||"Could not prune branch.");L("Could not prune branch",k||"Could not prune branch.","warning",5000)}},[N,U_,m0,T0,L]);m(()=>{if(!j||typeof window>"u")return;let W=!1;return(async()=>{try{v_({status:"running",message:"Preparing a new chat branch…"});let Y=await A$(Z);if(W)return;let J=Y?.branch,b=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!b)throw Error("Branch fork did not return a chat id.");let k=X$(window.location.href,b,{chatOnly:!0});window.location.replace(k)}catch(Y){if(W)return;v_({status:"error",message:U1(Y)})}})(),()=>{W=!0}},[j,Z]);let T6=P(async()=>{if(typeof window>"u"||G)return;let W=g8($);if(!W){L("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(W.mode==="tab"){let J=l8(window.location.href,$,{chatOnly:!0});if(!window.open(J,W.target))L("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=c8(W);if(!Y){L("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}p8(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let b=(await A$($))?.branch,k=typeof b?.chat_jid==="string"&&b.chat_jid.trim()?b.chat_jid.trim():null;if(!k)throw Error("Branch fork did not return a chat id.");try{let $_=await Q3();_0(Array.isArray($_?.chats)?$_.chats:[])}catch{}try{let $_=await Z6(M);D0(Array.isArray($_?.chats)?$_.chats:[])}catch{}let p=X$(window.location.href,k,{chatOnly:!0});h8(Y,p)}catch(J){i8(Y),L("Could not open branch window",U1(J),"error",5000)}},[$,M,G,L]);m(()=>{if(!W0)return;if(typeof window>"u")return;let W=S.current;if(!W)return;if(!z_.current){let Y=i2("editorWidth",null),J=l.current||280;z_.current=Number.isFinite(Y)?Y:J}if(W.style.setProperty("--editor-width",`${z_.current}px`),!w_.current){let Y=i2("dockHeight",null);w_.current=Number.isFinite(Y)?Y:200}W.style.setProperty("--dock-height",`${w_.current}px`)},[W0]),m(()=>{if(!S0||N)return;let W=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),q0()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[q0,S0,N]);let I6=Boolean(y_&&y_===(t?.turn_id||G_));if(j)return B`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${P_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${P_.message}</p>
                    </div>
                </div>
            </div>
        `;return B`
        <div class=${`app-shell${c0?"":" workspace-collapsed"}${W0?" editor-open":""}${N?" chat-only":""}`} ref=${S}>
            ${!N&&B`
                <${k8}
                    onFileSelect=${L2}
                    visible=${c0}
                    active=${c0||W0}
                    onOpenEditor=${p0}
                />
                <button
                    class=${`workspace-toggle-tab${c0?" open":" closed"}`}
                    onClick=${C6}
                    title=${c0?"Hide workspace":"Show workspace"}
                    aria-label=${c0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${X6} onTouchStart=${L6}></div>
            `}
            ${M2&&B`
                <div class="editor-pane-container">
                    ${W0&&B`
                        <${w8}
                            tabs=${j0}
                            activeId=${I_}
                            onActivate=${b2}
                            onClose=${J2}
                            onCloseOthers=${F0}
                            onCloseAll=${A2}
                            onTogglePin=${d2}
                            onTogglePreview=${y2}
                            previewTabs=${I0}
                            onToggleDock=${S0?q0:void 0}
                            dockVisible=${S0&&Y2}
                        />
                    `}
                    ${W0&&B`<div class="editor-pane-host" ref=${V2}></div>`}
                    ${W0&&I_&&I0.has(I_)&&B`
                        <${A8}
                            getContent=${()=>t_.current?.getContent?.()}
                            path=${I_}
                            onClose=${()=>y2(I_)}
                        />
                    `}
                    ${S0&&Y2&&B`<div class="dock-splitter" onMouseDown=${B6} onTouchStart=${U6}></div>`}
                    ${S0&&B`<div class=${`dock-panel${Y2?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${q0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${P2}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${V6} onTouchStart=${q6}></div>
            `}
            <div class="container">
                ${V&&m8()&&B`<div class="search-results-spacer"></div>`}
                ${N&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${U_?.display_name||U_?.agent_name?`@${U_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${U_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${Q0.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(W)=>x6(W.currentTarget.value)}
                                    >
                                        ${Q0.map((W)=>B`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${`@${W.agent_name}${W.display_name?` — ${W.display_name}`:""}${W.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${U_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${S6}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${U_?.chat_jid&&U_.chat_jid!==(U_.root_chat_jid||U_.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${f6}
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
                ${(O||V)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${F6}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${V} · ${e}`}</span>
                    </div>
                `}
                <${j8}
                    posts=${R2}
                    hasMore=${O6}
                    onLoadMore=${W6}
                    timelineRef=${U}
                    onHashtagClick=${H6}
                    onMessageRef=${D}
                    onScrollToMessage=${u}
                    onFileRef=${Q}
                    onPostClick=${void 0}
                    onDeletePost=${E6}
                    emptyMessage=${O?`No posts with #${O}`:V?`No results for "${V}"`:void 0}
                    agents=${D_}
                    user=${G2}
                    reverse=${!(V&&!O)}
                    removingPostIds=${o2}
                    searchQuery=${V}
                />
                <${c4}
                    status=${t}
                    draft=${Z_}
                    plan=${Q_}
                    thought=${r}
                    pendingRequest=${K_}
                    intent=${c}
                    turnId=${G_}
                    steerQueued=${I6}
                    onPanelToggle=${K6}
                />
                <${T4}
                    session=${c_}
                    onClose=${_3}
                    onRetry=${A6}
                    onInject=${P6}
                />
                <${L4}
                    onPost=${()=>{N2(),d$()}}
                    onFocus=${d$}
                    searchMode=${w}
                    searchScope=${T}
                    onSearch=${J6}
                    onSearchScopeChange=${R}
                    onEnterSearch=${y6}
                    onExitSearch=${D6}
                    fileRefs=${x}
                    onRemoveFileRef=${J0}
                    onClearFileRefs=${f2}
                    messageRefs=${A}
                    onRemoveMessageRef=${d}
                    onClearMessageRefs=${s}
                    activeEditorPath=${N?null:I_}
                    onAttachEditorFile=${N?void 0:E}
                    onOpenFilePill=${Q}
                    followupQueueCount=${w0}
                    followupQueueItems=${E0}
                    onInjectQueuedFollowup=${k6}
                    onRemoveQueuedFollowup=${w6}
                    onSubmitIntercept=${b6}
                    onMessageResponse=${e$}
                    onPopOutChat=${G?void 0:T6}
                    isAgentActive=${a$}
                    activeChatAgents=${x_}
                    currentChatJid=${$}
                    activeModel=${R_}
                    modelUsage=${e_}
                    thinkingLevel=${M_}
                    supportsThinking=${Y0}
                    contextUsage=${H0}
                    notificationsEnabled=${t0}
                    notificationPermission=${C0}
                    onToggleNotifications=${v0}
                    onModelChange=${H_}
                    onModelStateChange=${t$}
                />
                <${h4} status=${K} />
                <${p4}
                    request=${K_}
                    onRespond=${()=>{N_(null),C_.current=null}}
                />
            </div>
        </div>
    `}function F7(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${H7} locationParams=${_} />`}$4(B`<${F7} />`,document.getElementById("app"));

//# debugId=99A635AB8FC1E8BE64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
