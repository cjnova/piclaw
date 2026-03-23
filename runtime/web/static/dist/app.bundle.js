var wj=Object.defineProperty;var Rj=(_)=>_;function vj(_,$){this[_]=Rj.bind(null,$)}var fj=(_,$)=>{for(var j in $)wj(_,j,{get:$[j],enumerable:!0,configurable:!0,set:vj.bind($,j)})};var j5,V1,H3,bj,y4,K3,J3,D3,E3,$8,a5,t5,uj,e$={},_5=[],mj=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,N5=Array.isArray;function B4(_,$){for(var j in $)_[j]=$[j];return _}function j8(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function A3(_,$,j){var N,Z,Y,K={};for(Y in $)Y=="key"?N=$[Y]:Y=="ref"?Z=$[Y]:K[Y]=$[Y];if(arguments.length>2&&(K.children=arguments.length>3?j5.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)K[Y]===void 0&&(K[Y]=_.defaultProps[Y]);return s$(_,K,N,Z,null)}function s$(_,$,j,N,Z){var Y={type:_,props:$,key:j,ref:N,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++H3:Z,__i:-1,__u:0};return Z==null&&V1.vnode!=null&&V1.vnode(Y),Y}function Z5(_){return _.children}function a$(_,$){this.props=_,this.context=$}function $$(_,$){if($==null)return _.__?$$(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?$$(_):null}function gj(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,N=[],Z=[],Y=B4({},$);Y.__v=$.__v+1,V1.vnode&&V1.vnode(Y),N8(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,N,j==null?$$($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,I3(N,Y,Z),$.__e=$.__=null,Y.__e!=j&&M3(Y)}}function M3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),M3(_)}function Q3(_){(!_.__d&&(_.__d=!0)&&y4.push(_)&&!$5.__r++||K3!=V1.debounceRendering)&&((K3=V1.debounceRendering)||J3)($5)}function $5(){try{for(var _,$=1;y4.length;)y4.length>$&&y4.sort(D3),_=y4.shift(),$=y4.length,gj(_)}finally{y4.length=$5.__r=0}}function k3(_,$,j,N,Z,Y,K,Q,B,q,W){var V,U,E,J,A,T,H,M=N&&N.__k||_5,C=$.length;for(B=hj(j,$,M,B,C),V=0;V<C;V++)(E=j.__k[V])!=null&&(U=E.__i!=-1&&M[E.__i]||e$,E.__i=V,T=N8(_,E,U,Z,Y,K,Q,B,q,W),J=E.__e,E.ref&&U.ref!=E.ref&&(U.ref&&Z8(U.ref,null,E),W.push(E.ref,E.__c||J,E)),A==null&&J!=null&&(A=J),(H=!!(4&E.__u))||U.__k===E.__k?B=P3(E,B,_,H):typeof E.type=="function"&&T!==void 0?B=T:J&&(B=J.nextSibling),E.__u&=-7);return j.__e=A,B}function hj(_,$,j,N,Z){var Y,K,Q,B,q,W=j.length,V=W,U=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(K=$[Y])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[Y]=s$(null,K,null,null,null):N5(K)?K=_.__k[Y]=s$(Z5,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[Y]=s$(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[Y]=K,B=Y+U,K.__=_,K.__b=_.__b+1,Q=null,(q=K.__i=pj(K,j,B,V))!=-1&&(V--,(Q=j[q])&&(Q.__u|=2)),Q==null||Q.__v==null?(q==-1&&(Z>W?U--:Z<W&&U++),typeof K.type!="function"&&(K.__u|=4)):q!=B&&(q==B-1?U--:q==B+1?U++:(q>B?U--:U++,K.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<W;Y++)(Q=j[Y])!=null&&(2&Q.__u)==0&&(Q.__e==N&&(N=$$(Q)),y3(Q,Q));return N}function P3(_,$,j,N){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=P3(Z[Y],$,j,N));return $}_.__e!=$&&(N&&($&&_.type&&!$.parentNode&&($=$$(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function pj(_,$,j,N){var Z,Y,K,Q=_.key,B=_.type,q=$[j],W=q!=null&&(2&q.__u)==0;if(q===null&&Q==null||W&&Q==q.key&&B==q.type)return j;if(N>(W?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((q=$[K=Z>=0?Z--:Y++])!=null&&(2&q.__u)==0&&Q==q.key&&B==q.type)return K}return-1}function q3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||mj.test($)?j:j+"px"}function o$(_,$,j,N,Z){var Y,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof N=="string"&&(_.style.cssText=N=""),N)for($ in N)j&&$ in j||q3(_.style,$,"");if(j)for($ in j)N&&j[$]==N[$]||q3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(E3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?N?j.u=N.u:(j.u=$8,_.addEventListener($,Y?t5:a5,Y)):_.removeEventListener($,Y?t5:a5,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(Q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function G3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=$8++;else if($.t<j.u)return;return j(V1.event?V1.event($):$)}}}function N8(_,$,j,N,Z,Y,K,Q,B,q){var W,V,U,E,J,A,T,H,M,C,R,D,u,a,n,g=$.type;if($.constructor!==void 0)return null;128&j.__u&&(B=!!(32&j.__u),Y=[Q=$.__e=j.__e]),(W=V1.__b)&&W($);_:if(typeof g=="function")try{if(H=$.props,M=g.prototype&&g.prototype.render,C=(W=g.contextType)&&N[W.__c],R=W?C?C.props.value:W.__:N,j.__c?T=(V=$.__c=j.__c).__=V.__E:(M?$.__c=V=new g(H,R):($.__c=V=new a$(H,R),V.constructor=g,V.render=lj),C&&C.sub(V),V.state||(V.state={}),V.__n=N,U=V.__d=!0,V.__h=[],V._sb=[]),M&&V.__s==null&&(V.__s=V.state),M&&g.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=B4({},V.__s)),B4(V.__s,g.getDerivedStateFromProps(H,V.__s))),E=V.props,J=V.state,V.__v=$,U)M&&g.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),M&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(M&&g.getDerivedStateFromProps==null&&H!==E&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(H,R),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(H,V.__s,R)===!1){$.__v!=j.__v&&(V.props=H,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(w){w&&(w.__=$)}),_5.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&K.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(H,V.__s,R),M&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(E,J,A)})}if(V.context=R,V.props=H,V.__P=_,V.__e=!1,D=V1.__r,u=0,M)V.state=V.__s,V.__d=!1,D&&D($),W=V.render(V.props,V.state,V.context),_5.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,D&&D($),W=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++u<25);V.state=V.__s,V.getChildContext!=null&&(N=B4(B4({},N),V.getChildContext())),M&&!U&&V.getSnapshotBeforeUpdate!=null&&(A=V.getSnapshotBeforeUpdate(E,J)),a=W!=null&&W.type===Z5&&W.key==null?C3(W.props.children):W,Q=k3(_,N5(a)?a:[a],$,j,N,Z,Y,K,Q,B,q),V.base=$.__e,$.__u&=-161,V.__h.length&&K.push(V),T&&(V.__E=V.__=null)}catch(w){if($.__v=null,B||Y!=null)if(w.then){for($.__u|=B?160:128;Q&&Q.nodeType==8&&Q.nextSibling;)Q=Q.nextSibling;Y[Y.indexOf(Q)]=null,$.__e=Q}else{for(n=Y.length;n--;)j8(Y[n]);e5($)}else $.__e=j.__e,$.__k=j.__k,w.then||e5($);V1.__e(w,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):Q=$.__e=cj(j.__e,$,j,N,Z,Y,K,B,q);return(W=V1.diffed)&&W($),128&$.__u?void 0:Q}function e5(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(e5))}function I3(_,$,j){for(var N=0;N<j.length;N++)Z8(j[N],j[++N],j[++N]);V1.__c&&V1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){V1.__e(Y,Z.__v)}})}function C3(_){return typeof _!="object"||_==null||_.__b>0?_:N5(_)?_.map(C3):B4({},_)}function cj(_,$,j,N,Z,Y,K,Q,B){var q,W,V,U,E,J,A,T=j.props||e$,H=$.props,M=$.type;if(M=="svg"?Z="http://www.w3.org/2000/svg":M=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(q=0;q<Y.length;q++)if((E=Y[q])&&"setAttribute"in E==!!M&&(M?E.localName==M:E.nodeType==3)){_=E,Y[q]=null;break}}if(_==null){if(M==null)return document.createTextNode(H);_=document.createElementNS(Z,M,H.is&&H),Q&&(V1.__m&&V1.__m($,Y),Q=!1),Y=null}if(M==null)T===H||Q&&_.data==H||(_.data=H);else{if(Y=Y&&j5.call(_.childNodes),!Q&&Y!=null)for(T={},q=0;q<_.attributes.length;q++)T[(E=_.attributes[q]).name]=E.value;for(q in T)E=T[q],q=="dangerouslySetInnerHTML"?V=E:q=="children"||(q in H)||q=="value"&&("defaultValue"in H)||q=="checked"&&("defaultChecked"in H)||o$(_,q,null,E,Z);for(q in H)E=H[q],q=="children"?U=E:q=="dangerouslySetInnerHTML"?W=E:q=="value"?J=E:q=="checked"?A=E:Q&&typeof E!="function"||T[q]===E||o$(_,q,E,T[q],Z);if(W)Q||V&&(W.__html==V.__html||W.__html==_.innerHTML)||(_.innerHTML=W.__html),$.__k=[];else if(V&&(_.innerHTML=""),k3($.type=="template"?_.content:_,N5(U)?U:[U],$,j,N,M=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,K,Y?Y[0]:j.__k&&$$(j,0),Q,B),Y!=null)for(q=Y.length;q--;)j8(Y[q]);Q||(q="value",M=="progress"&&J==null?_.removeAttribute("value"):J!=null&&(J!==_[q]||M=="progress"&&!J||M=="option"&&J!=T[q])&&o$(_,q,J,T[q],Z),q="checked",A!=null&&A!=_[q]&&o$(_,q,A,T[q],Z))}return _}function Z8(_,$,j){try{if(typeof _=="function"){var N=typeof _.__u=="function";N&&_.__u(),N&&$==null||(_.__u=_($))}else _.current=$}catch(Z){V1.__e(Z,j)}}function y3(_,$,j){var N,Z;if(V1.unmount&&V1.unmount(_),(N=_.ref)&&(N.current&&N.current!=_.__e||Z8(N,null,$)),(N=_.__c)!=null){if(N.componentWillUnmount)try{N.componentWillUnmount()}catch(Y){V1.__e(Y,$)}N.base=N.__P=null}if(N=_.__k)for(Z=0;Z<N.length;Z++)N[Z]&&y3(N[Z],$,j||typeof _.type!="function");j||j8(_.__e),_.__c=_.__=_.__e=void 0}function lj(_,$,j){return this.constructor(_,j)}function T3(_,$,j){var N,Z,Y,K;$==document&&($=document.documentElement),V1.__&&V1.__(_,$),Z=(N=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],K=[],N8($,_=(!N&&j||$).__k=A3(Z5,null,[_]),Z||e$,e$,$.namespaceURI,!N&&j?[j]:Z?null:$.firstChild?j5.call($.childNodes):null,Y,!N&&j?j:Z?Z.__e:$.firstChild,N,K),I3(Y,_,K)}j5=_5.slice,V1={__e:function(_,$,j,N){for(var Z,Y,K;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),K=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,N||{}),K=Z.__d),K)return Z.__E=Z}catch(Q){_=Q}throw _}},H3=0,bj=function(_){return _!=null&&_.constructor===void 0},a$.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B4({},this.state),typeof _=="function"&&(_=_(B4({},j),this.props)),_&&B4(j,_),_!=null&&this.__v&&($&&this._sb.push($),Q3(this))},a$.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Q3(this))},a$.prototype.render=Z5,y4=[],J3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D3=function(_,$){return _.__v.__b-$.__v.__b},$5.__r=0,E3=/(PointerCapture)$|Capture$/i,$8=0,a5=G3(!1),t5=G3(!0),uj=0;var E$,P1,s5,B3,A$=0,S3=[],k1=V1,X3=k1.__b,V3=k1.__r,W3=k1.diffed,L3=k1.__c,U3=k1.unmount,z3=k1.__;function Y8(_,$){k1.__h&&k1.__h(P1,_,A$||$),A$=0;var j=P1.__H||(P1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function c(_){return A$=1,ij(w3,_)}function ij(_,$,j){var N=Y8(E$++,2);if(N.t=_,!N.__c&&(N.__=[j?j($):w3(void 0,$),function(Q){var B=N.__N?N.__N[0]:N.__[0],q=N.t(B,Q);B!==q&&(N.__N=[q,N.__[1]],N.__c.setState({}))}],N.__c=P1,!P1.__f)){var Z=function(Q,B,q){if(!N.__c.__H)return!0;var W=N.__c.__H.__.filter(function(U){return U.__c});if(W.every(function(U){return!U.__N}))return!Y||Y.call(this,Q,B,q);var V=N.__c.props!==Q;return W.some(function(U){if(U.__N){var E=U.__[0];U.__=U.__N,U.__N=void 0,E!==U.__[0]&&(V=!0)}}),Y&&Y.call(this,Q,B,q)||V};P1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:K}=P1;P1.componentWillUpdate=function(Q,B,q){if(this.__e){var W=Y;Y=void 0,Z(Q,B,q),Y=W}K&&K.call(this,Q,B,q)},P1.shouldComponentUpdate=Z}return N.__N||N.__}function p(_,$){var j=Y8(E$++,3);!k1.__s&&x3(j.__H,$)&&(j.__=_,j.u=$,P1.__H.__h.push(j))}function y(_){return A$=5,y0(function(){return{current:_}},[])}function y0(_,$){var j=Y8(E$++,7);return x3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function x(_,$){return A$=8,y0(function(){return _},$)}function nj(){for(var _;_=S3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(t$),$.__h.some(_8),$.__h=[]}catch(j){$.__h=[],k1.__e(j,_.__v)}}}k1.__b=function(_){P1=null,X3&&X3(_)},k1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),z3&&z3(_,$)},k1.__r=function(_){V3&&V3(_),E$=0;var $=(P1=_.__c).__H;$&&(s5===P1?($.__h=[],P1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(t$),$.__h.some(_8),$.__h=[],E$=0)),s5=P1},k1.diffed=function(_){W3&&W3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(S3.push($)!==1&&B3===k1.requestAnimationFrame||((B3=k1.requestAnimationFrame)||dj)(nj)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),s5=P1=null},k1.__c=function(_,$){$.some(function(j){try{j.__h.some(t$),j.__h=j.__h.filter(function(N){return!N.__||_8(N)})}catch(N){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],k1.__e(N,j.__v)}}),L3&&L3(_,$)},k1.unmount=function(_){U3&&U3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(N){try{t$(N)}catch(Z){$=Z}}),j.__H=void 0,$&&k1.__e($,j.__v))};var F3=typeof requestAnimationFrame=="function";function dj(_){var $,j=function(){clearTimeout(N),F3&&cancelAnimationFrame($),setTimeout(_)},N=setTimeout(j,35);F3&&($=requestAnimationFrame(j))}function t$(_){var $=P1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),P1=$}function _8(_){var $=P1;_.__c=_.__(),P1=$}function x3(_,$){return!_||_.length!==$.length||$.some(function(j,N){return j!==_[N]})}function w3(_,$){return typeof $=="function"?$(_):$}var R3=function(_,$,j,N){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var K=$[Y++],Q=$[Y]?($[0]|=K?1:2,j[$[Y++]]):$[++Y];K===3?N[0]=Q:K===4?N[1]=Object.assign(N[1]||{},Q):K===5?(N[1]=N[1]||{})[$[++Y]]=Q:K===6?N[1][$[++Y]]+=Q+"":K?(Z=_.apply(Q,R3(_,Q,j,["",null])),N.push(Z),Q[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):N.push(Q)}return N},O3=new Map;function rj(_){var $=O3.get(this);return $||($=new Map,O3.set(this,$)),($=R3(this,$.get(_)||($.set(_,$=function(j){for(var N,Z,Y=1,K="",Q="",B=[0],q=function(U){Y===1&&(U||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?B.push(0,U,K):Y===3&&(U||K)?(B.push(3,U,K),Y=2):Y===2&&K==="..."&&U?B.push(4,U,0):Y===2&&K&&!U?B.push(5,0,!0,K):Y>=5&&((K||!U&&Y===5)&&(B.push(Y,0,K,Z),Y=6),U&&(B.push(Y,U,0,Z),Y=6)),K=""},W=0;W<j.length;W++){W&&(Y===1&&q(),q(W));for(var V=0;V<j[W].length;V++)N=j[W][V],Y===1?N==="<"?(q(),B=[B],Y=3):K+=N:Y===4?K==="--"&&N===">"?(Y=1,K=""):K=N+K[0]:Q?N===Q?Q="":K+=N:N==='"'||N==="'"?Q=N:N===">"?(q(),Y=1):Y&&(N==="="?(Y=5,Z=K,K=""):N==="/"&&(Y<5||j[W][V+1]===">")?(q(),Y===3&&(B=B[0]),Y=B,(B=B[0]).push(2,0,Y),Y=0):N===" "||N==="\t"||N===`
`||N==="\r"?(q(),Y=2):K+=N),Y===3&&K==="!--"&&(Y=4,B=B[0])}return q(),B}(_)),$),arguments,[])).length>1?$:$[0]}var z=rj.bind(A3);var V_={};fj(V_,{uploadWorkspaceFile:()=>K5,uploadMedia:()=>W8,updateWorkspaceFile:()=>BN,submitAdaptiveCardAction:()=>L8,streamSidePrompt:()=>QN,steerAgentQueueItem:()=>KN,setWorkspaceVisibility:()=>I$,setAgentThoughtVisibility:()=>F8,sendPeerAgentMessage:()=>jN,sendAgentMessage:()=>i4,searchPosts:()=>Q8,restoreChatBranch:()=>$N,respondToAgentRequest:()=>Y5,renameWorkspaceFile:()=>A8,renameChatBranch:()=>ej,removeAgentQueueItem:()=>YN,pruneChatBranch:()=>_N,moveWorkspaceEntry:()=>M8,getWorkspaceTree:()=>P$,getWorkspaceRawUrl:()=>Q5,getWorkspaceFile:()=>J8,getWorkspaceDownloadUrl:()=>q5,getWorkspaceBranch:()=>GN,getTimeline:()=>l4,getThumbnailUrl:()=>O8,getThread:()=>q8,getPostsByHashtag:()=>K8,getMediaUrl:()=>C_,getMediaText:()=>H8,getMediaInfo:()=>j$,getMediaBlob:()=>qN,getChatBranches:()=>tj,getAgents:()=>X8,getAgentThought:()=>z8,getAgentStatus:()=>V8,getAgentQueueState:()=>ZN,getAgentModels:()=>k$,getAgentContext:()=>NN,getActiveChatAgents:()=>B8,forkChatBranch:()=>M$,deleteWorkspaceFile:()=>k8,deletePost:()=>G8,createWorkspaceFile:()=>E8,createReply:()=>aj,createPost:()=>sj,attachWorkspaceFile:()=>D8,addToWhitelist:()=>U8,SSEClient:()=>G5});async function $1(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let N=await j.json().catch(()=>({error:"Unknown error"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}function v3(_){let $=String(_||"").split(`
`),j="message",N=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))N.push(Y.slice(5).trim());let Z=N.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function oj(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),N=new TextDecoder,Z="";while(!0){let{value:K,done:Q}=await j.read();if(Q)break;Z+=N.decode(K,{stream:!0});let B=Z.split(`

`);Z=B.pop()||"";for(let q of B){let W=v3(q);if(W)$(W.event,W.data)}}Z+=N.decode();let Y=v3(Z);if(Y)$(Y.event,Y.data)}async function l4(_=10,$=null,j=null){let N=`/timeline?limit=${_}`;if($)N+=`&before=${$}`;if(j)N+=`&chat_jid=${encodeURIComponent(j)}`;return $1(N)}async function K8(_,$=50,j=0,N=null){let Z=N?`&chat_jid=${encodeURIComponent(N)}`:"";return $1(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function Q8(_,$=50,j=0,N=null,Z="current",Y=null){let K=N?`&chat_jid=${encodeURIComponent(N)}`:"",Q=Z?`&scope=${encodeURIComponent(Z)}`:"",B=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return $1(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${Q}${B}`)}async function q8(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return $1(`/thread/${_}${j}`)}async function sj(_,$=[],j=null){let N=j?`?chat_jid=${encodeURIComponent(j)}`:"";return $1(`/post${N}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function aj(_,$,j=[],N=null){let Z=N?`?chat_jid=${encodeURIComponent(N)}`:"";return $1(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function G8(_,$=!1,j=null){let N=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${N}`;return $1(Z,{method:"DELETE"})}async function i4(_,$,j=null,N=[],Z=null,Y=null){let K=Y?`?chat_jid=${encodeURIComponent(Y)}`:"";return $1(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:N,mode:Z})})}async function B8(){return $1("/agent/active-chats")}async function tj(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let N=j.toString()?`?${j.toString()}`:"";return $1(`/agent/branches${N}`)}async function M$(_,$={}){return $1("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function ej(_,$={}){return $1("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function _N(_){return $1("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function $N(_,$={}){return $1("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function jN(_,$,j,N="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:N,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return $1("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function X8(){return $1("/agent/roster")}async function V8(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return $1(`/agent/status${$}`)}async function NN(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return $1(`/agent/context${$}`)}async function ZN(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return $1(`/agent/queue-state${$}`)}async function YN(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function KN(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function k$(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return $1(`/agent/models${$}`)}async function W8(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let N=await j.json().catch(()=>({error:"Upload failed"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function Y5(_,$,j=null){let N=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!N.ok){let Z=await N.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${N.status}`)}return N.json()}async function L8(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function QN(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let N=null,Z=null;if(await oj(j,(Y,K)=>{if($.onEvent?.(Y,K),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(Y==="side_prompt_done")N=K;else if(Y==="side_prompt_error")Z=K}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return N}async function U8(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function z8(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return $1(j)}async function F8(_,$,j){return $1("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function C_(_){return`/media/${_}`}function O8(_){return`/media/${_}/thumbnail`}async function j$(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function H8(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function qN(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function P$(_="",$=2,j=!1){let N=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return $1(N)}async function GN(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return $1($)}async function J8(_,$=20000,j=null){let N=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${N}`;return $1(Z)}async function BN(_,$){return $1("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function D8(_){return $1("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function K5(_,$="",j={}){let N=new FormData;N.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),K=Y?`/workspace/upload?${Y}`:"/workspace/upload",Q=await fetch(""+K,{method:"POST",body:N});if(!Q.ok){let B=await Q.json().catch(()=>({error:"Upload failed"})),q=Error(B.error||`HTTP ${Q.status}`);throw q.status=Q.status,q.code=B.code,q}return Q.json()}async function E8(_,$,j=""){let N=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!N.ok){let Z=await N.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${N.status}`);throw Y.status=N.status,Y.code=Z.code,Y}return N.json()}async function A8(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(N.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=N.code,Z}return j.json()}async function M8(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Move failed"})),Z=Error(N.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=N.code,Z}return j.json()}async function k8(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return $1($,{method:"DELETE"})}async function I$(_,$=!1){return $1("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function Q5(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function q5(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class G5{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(N)=>{this.markActivity(),this.onEvent(j,JSON.parse(N.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let N=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,N);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function B5(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function XN(_,$){let j=B5(_),N=B5($);if(!N)return!1;return j.startsWith(N)||j.includes(N)}function P8(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function I8(_,$,j=Date.now(),N=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>N?Y:`${Z.value}${Y}`,updatedAt:j}}function VN(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let K=0;K<j;K+=1)Y.push((Z+K)%j);return Y}function WN(_,$,j=0,N=(Z)=>Z){let Z=B5($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],K=VN(Y.length,j),Q=Y.map((B)=>B5(N(B)));for(let B of K)if(Q[B].startsWith(Z))return B;for(let B of K)if(Q[B].includes(Z))return B;return-1}function C8(_,$,j=-1,N=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=N(Z[j]);if(XN(Y,$))return j}return WN(Z,$,0,N)}function W_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function K1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function N$(_,$=!1){let j=W_(_);if(j===null)return $;return j==="true"}function Z$(_,$=null){let j=W_(_);if(j===null)return $;let N=parseInt(j,10);return Number.isFinite(N)?N:$}function X5(_){return String(_||"").trim().toLowerCase()}function y8(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return X5($[1]||"")}function f3(_){let $=new Set,j=[];for(let N of Array.isArray(_)?_:[]){let Z=X5(N?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(N)}return j}function b3(_,$,j={}){let N=y8($);if(N==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return f3(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return X5(Y?.agent_name).startsWith(N)})}function T8(_){let $=X5(_);return $?`@${$} `:""}function u3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,N=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return f3(_).filter((Z)=>!(j&&Z?.chat_jid===j)).slice(0,N)}function m3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let N=Number(_||0),Z=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(N)||N<=0)return!1;if(Z<=0)return!1;let Y=460+Z*68+(j?40:0);return N>=Y}function g3(_,$,j={}){if(!_||_.isComposing)return!1;if(j?.searchMode)return!1;if(!j?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function p_({prefix:_="file",label:$,title:j,onRemove:N,onClick:Z,removeTitle:Y="Remove",icon:K="file"}){let Q=`${_}-file-pill`,B=`${_}-file-name`,q=`${_}-file-remove`,W=K==="message"?z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return z`
    <span class=${Q} title=${j||$} onClick=${Z}>
      ${W}
      <span class=${B}>${$}</span>
      ${N&&z`
        <button
          class=${q}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),N()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var LN=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function UN({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),N=_.tokens,Z=_.contextWindow,Y="Compact context",Q=`${N!=null?`Context: ${h3(N)} / ${h3(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,B=9,q=2*Math.PI*9,W=j/100*q,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return z`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${Q}
            aria-label="Compact context"
            onClick=${(U)=>{U.preventDefault(),U.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${V}
                    stroke-width="2.5"
                    stroke-dasharray=${`${W} ${q}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function h3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function p3({onPost:_,onFocus:$,searchMode:j,searchScope:N="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:K,onExitSearch:Q,fileRefs:B=[],onRemoveFileRef:q,onClearFileRefs:W,messageRefs:V=[],onRemoveMessageRef:U,onClearMessageRefs:E,activeModel:J=null,modelUsage:A=null,thinkingLevel:T=null,supportsThinking:H=!1,contextUsage:M=null,onContextCompact:C,notificationsEnabled:R=!1,notificationPermission:D="default",onToggleNotifications:u,onModelChange:a,onModelStateChange:n,activeEditorPath:g=null,onAttachEditorFile:w,onOpenFilePill:l,followupQueueItems:t=[],onInjectQueuedFollowup:V0,onRemoveQueuedFollowup:d,onSubmitIntercept:j0,onMessageResponse:N0,onPopOutChat:Y0,isAgentActive:Q0=!1,activeChatAgents:B0=[],currentChatJid:U0="web:default",connectionStatus:z0="connected",onSetFileRefs:O0,onSetMessageRefs:p0,onSubmitError:k0,onSwitchChat:J0,onRenameSession:c0,isRenameSessionInProgress:l0=!1,onCreateSession:T0,onDeleteSession:X0,onRestoreSession:P0}){let[D0,q0]=c(""),[I0,n0]=c(""),[m0,W1]=c([]),[A1,v0]=c(!1),[i0,N1]=c([]),[Q1,d0]=c(0),[T1,Z1]=c(!1),[f1,q1]=c([]),[p1,g0]=c(0),[e1,B1]=c(!1),[L1,O1]=c(!1),[C0,H1]=c(!1),[S0,w0]=c(!1),[a0,d1]=c([]),[m,G0]=c(0),[E0,F0]=c(0),[r0,__]=c(!1),[c1,i_]=c(0),[S_,$_]=c(null),t0=y(null),S1=y(null),r1=y(null),x1=y(null),x_=y(null),w_=y(null),z4=y(null),F4=y(null),j_=y({value:"",updatedAt:0}),n_=y(0),Y1=y(!1),$4=200,z_=(L)=>{let S=new Set,b=[];for(let r of L||[]){if(typeof r!=="string")continue;let L0=r.trim();if(!L0||S.has(L0))continue;S.add(L0),b.push(L0)}return b},h0=()=>{let L=W_("piclaw_compose_history");if(!L)return[];try{let S=JSON.parse(L);if(!Array.isArray(S))return[];return z_(S)}catch{return[]}},U1=(L)=>{K1("piclaw_compose_history",JSON.stringify(L))},f0=y(h0()),w1=y(-1),J1=y(""),j4=D0.trim()||m0.length>0||B.length>0||V.length>0,O4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),F_=typeof window<"u"&&typeof Notification<"u",R4=typeof window<"u"?Boolean(window.isSecureContext):!1,a4=F_&&R4&&D!=="denied",O_=D==="granted"&&R,W$=O_?"Disable notifications":"Enable notifications",N_=m0.length>0||B.length>0||V.length>0,Z_=z0==="disconnected"?"Reconnecting":String(z0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(L)=>L.toUpperCase()),d_=z0==="disconnected"?"Reconnecting":`Connection: ${Z_}`,H_=(Array.isArray(B0)?B0:[]).filter((L)=>!L?.archived_at),b1=u3(H_,{currentChatJid:U0,limit:4}),q_=!j&&m3({footerWidth:c1,visibleAgentCount:b1.length,hasContextIndicator:Boolean(M&&M.percent!=null)}),b0=(()=>{for(let L of Array.isArray(B0)?B0:[]){let S=typeof L?.chat_jid==="string"?L.chat_jid.trim():"";if(S&&S===U0)return L}return null})(),Y_=Boolean(b0&&b0.chat_jid===(b0.root_chat_jid||b0.chat_jid)),H4=y0(()=>{let L=new Set,S=[];for(let b of Array.isArray(B0)?B0:[]){let r=typeof b?.chat_jid==="string"?b.chat_jid.trim():"";if(!r||r===U0||L.has(r))continue;if(!(typeof b?.agent_name==="string"?b.agent_name.trim():""))continue;L.add(r),S.push(b)}return S},[B0,U0]),J4=H4.length>0,R_=J4&&typeof J0==="function",J_=J4&&typeof P0==="function",G_=Boolean(l0||Y1.current),D1=!j&&typeof c0==="function"&&!G_,G1=!j&&typeof T0==="function",o1=!j&&typeof X0==="function"&&!Y_,I1=!j&&(R_||J_||D1||G1||o1),N4=J||"",Z4=H&&T?` (${T})`:"",D4=Z4.trim()?`${T}`:"",s1=typeof A?.hint_short==="string"?A.hint_short.trim():"",Y4=[D4||null,s1||null].filter(Boolean).join(" • "),v4=[N4?`Current model: ${N4}${Z4}`:null,A?.plan?`Plan: ${A.plan}`:null,s1||null,A?.primary?.reset_description||null,A?.secondary?.reset_description||null].filter(Boolean),v_=L1?"Switching model…":v4.join(" • ")||`Current model: ${N4}${Z4} (tap to open model picker)`,D_=(L)=>{if(!L||typeof L!=="object")return;let S=L.model??L.current;if(typeof n==="function")n({model:S??null,thinking_level:L.thinking_level??null,supports_thinking:L.supports_thinking,provider_usage:L.provider_usage??null});if(S&&typeof a==="function")a(S)},B_=(L)=>{let S=L||t0.current;if(!S)return;S.style.height="auto",S.style.height=`${S.scrollHeight}px`,S.style.overflowY="hidden"},f_=(L)=>{if(!L)return{content:L,fileRefs:[]};let b=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),r=-1;for(let o0=0;o0<b.length;o0+=1)if(b[o0].trim()==="Files:"&&b[o0+1]&&/^\s*-\s+/.test(b[o0+1])){r=o0;break}if(r===-1)return{content:L,fileRefs:[]};let L0=[],u0=r+1;for(;u0<b.length;u0+=1){let o0=b[u0];if(/^\s*-\s+/.test(o0))L0.push(o0.replace(/^\s*-\s+/,"").trim());else if(!o0.trim())break;else break}if(L0.length===0)return{content:L,fileRefs:[]};let X1=b.slice(0,r),e0=b.slice(u0);return{content:[...X1,...e0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:L0}},u1=(L)=>{if(!L)return{content:L,messageRefs:[]};let b=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),r=-1;for(let o0=0;o0<b.length;o0+=1)if(b[o0].trim()==="Referenced messages:"&&b[o0+1]&&/^\s*-\s+/.test(b[o0+1])){r=o0;break}if(r===-1)return{content:L,messageRefs:[]};let L0=[],u0=r+1;for(;u0<b.length;u0+=1){let o0=b[u0];if(/^\s*-\s+/.test(o0)){let M_=o0.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(M_)L0.push(M_[1])}else if(!o0.trim())break;else break}if(L0.length===0)return{content:L,messageRefs:[]};let X1=b.slice(0,r),e0=b.slice(u0);return{content:[...X1,...e0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:L0}},f4=(L)=>{let S=f_(L||""),b=u1(S.content||"");return{text:b.content||"",fileRefs:S.fileRefs,messageRefs:b.messageRefs}},b4=(L)=>{if(!L.startsWith("/")||L.includes(`
`)){Z1(!1),N1([]);return}let S=L.toLowerCase().split(" ")[0];if(S.length<1){Z1(!1),N1([]);return}let b=LN.filter((r)=>r.name.startsWith(S)||r.name.replace(/-/g,"").startsWith(S.replace(/-/g,"")));if(b.length>0&&!(b.length===1&&b[0].name===S))B1(!1),q1([]),N1(b),d0(0),Z1(!0);else Z1(!1),N1([])},E4=(L)=>{let S=D0,b=S.indexOf(" "),r=b>=0?S.slice(b):"",L0=L.name+r;q0(L0),Z1(!1),N1([]),requestAnimationFrame(()=>{let u0=t0.current;if(!u0)return;let X1=L0.length;u0.selectionStart=X1,u0.selectionEnd=X1,u0.focus()})},r_=(L)=>{if(y8(L)==null){B1(!1),q1([]);return}let S=b3(H_,L,{currentChatJid:U0});if(S.length>0&&!(S.length===1&&T8(S[0].agent_name).trim().toLowerCase()===String(L||"").trim().toLowerCase()))Z1(!1),N1([]),q1(S),g0(0),B1(!0);else B1(!1),q1([])},b_=(L)=>{let S=T8(L?.agent_name);if(!S)return;q0(S),B1(!1),q1([]),requestAnimationFrame(()=>{let b=t0.current;if(!b)return;let r=S.length;b.selectionStart=r,b.selectionEnd=r,b.focus()})},K4=()=>{if(j||!R_&&!J_&&!D1&&!G1&&!o1)return!1;return j_.current={value:"",updatedAt:0},H1(!1),Z1(!1),N1([]),B1(!1),q1([]),w0(!0),!0},R1=(L)=>{if(L?.preventDefault?.(),L?.stopPropagation?.(),j||!R_&&!J_&&!D1&&!G1&&!o1)return;if(S0){j_.current={value:"",updatedAt:0},w0(!1);return}K4()},u_=(L)=>{let S=typeof L==="string"?L.trim():"";if(w0(!1),!S||S===U0){requestAnimationFrame(()=>t0.current?.focus());return}J0?.(S)},m_=async(L)=>{let S=typeof L==="string"?L.trim():"";if(w0(!1),!S||typeof P0!=="function"){requestAnimationFrame(()=>t0.current?.focus());return}try{await P0(S)}catch(b){console.warn("Failed to restore session:",b),requestAnimationFrame(()=>t0.current?.focus())}},o_=(L)=>{let S=typeof L?.chat_jid==="string"?L.chat_jid.trim():"";if(S&&typeof J0==="function"){J0(S);return}b_(L)},A4=(L)=>{let b=(Array.isArray(L)?L:[]).findIndex((r)=>!r?.disabled);return b>=0?b:0},z1=y0(()=>{let L=[];for(let S of H4){let b=Boolean(S?.archived_at),r=typeof S?.agent_name==="string"?S.agent_name.trim():"",L0=typeof S?.chat_jid==="string"?S.chat_jid.trim():"";if(!r||!L0)continue;L.push({type:"session",key:`session:${L0}`,label:`@${r} — ${L0}${S?.is_active?" active":""}${b?" archived":""}`,chat:S,disabled:b?!J_:!R_})}if(G1)L.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(D1)L.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:G_});if(o1)L.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return L},[H4,J_,R_,G1,D1,o1,G_]),M4=async(L)=>{if(L?.preventDefault)L.preventDefault();if(L?.stopPropagation)L.stopPropagation();if(typeof c0!=="function"||l0||Y1.current)return;Y1.current=!0,w0(!1);try{await c0()}catch(S){console.warn("Failed to rename session:",S)}finally{Y1.current=!1}requestAnimationFrame(()=>t0.current?.focus())},a1=async()=>{if(typeof T0!=="function")return;w0(!1);try{await T0()}catch(L){console.warn("Failed to create session:",L)}requestAnimationFrame(()=>t0.current?.focus())},K_=async()=>{if(typeof X0!=="function")return;w0(!1);try{await X0(U0)}catch(L){console.warn("Failed to delete session:",L)}requestAnimationFrame(()=>t0.current?.focus())},E_=(L)=>{if(j)n0(L);else q0(L),b4(L),r_(L);requestAnimationFrame(()=>B_())},u4=(L)=>{let S=j?I0:D0,b=S&&!S.endsWith(`
`)?`
`:"",r=`${S}${b}${L}`.trimStart();E_(r)},k4=(L)=>{let S=L?.command?.model_label;if(S)return S;let b=L?.command?.message;if(typeof b==="string"){let r=b.match(/•\s+([^\n]+?)\s+\(current\)/);if(r?.[1])return r[1].trim()}return null},Q4=async(L)=>{if(j||L1)return;O1(!0);try{let S=await i4("default",L,null,[],null,U0),b=k4(S);D_({model:b??J??null,thinking_level:S?.command?.thinking_level,supports_thinking:S?.command?.supports_thinking});try{let r=await k$(U0);if(r)D_(r)}catch{}return _?.(),!0}catch(S){return console.error("Failed to switch model:",S),alert("Failed to switch model: "+S.message),!1}finally{O1(!1)}},P4=async()=>{await Q4("/cycle-model")},X_=async(L)=>{if(!L||L1)return;if(await Q4(`/model ${L}`))H1(!1)},m4=(L)=>{if(!L||L.disabled)return;if(L.type==="session"){let S=L.chat;if(S?.archived_at)m_(S.chat_jid);else u_(S.chat_jid);return}if(L.type==="action"){if(L.action==="new"){a1();return}if(L.action==="rename"){M4();return}if(L.action==="delete")K_()}},g4=(L)=>{L.preventDefault(),L.stopPropagation(),j_.current={value:"",updatedAt:0},w0(!1),H1((S)=>!S)},I4=async()=>{if(j)return;C?.(),await s_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},t4=(L)=>{if(L==="queue"||L==="steer"||L==="auto")return L;return Q0?"queue":null},s_=async(L,S,b={})=>{let{includeMedia:r=!0,includeFileRefs:L0=!0,includeMessageRefs:u0=!0,clearAfterSubmit:X1=!0,recordHistory:e0=!0}=b||{},l1=typeof L==="string"?L:L&&typeof L?.target?.value==="string"?L.target.value:D0,o0=typeof l1==="string"?l1:"";if(!o0.trim()&&(r?m0.length===0:!0)&&(L0?B.length===0:!0)&&(u0?V.length===0:!0))return;Z1(!1),N1([]),B1(!1),q1([]),w0(!1),$_(null);let M_=r?[...m0]:[],p4=L0?[...B]:[],m1=u0?[...V]:[],q4=o0.trim();if(e0&&q4){let G4=f0.current,M1=z_(G4.filter((L$)=>L$!==q4));if(M1.push(q4),M1.length>200)M1.splice(0,M1.length-200);f0.current=M1,U1(M1),w1.current=-1,J1.current=""}let u5=()=>{if(r)W1([...M_]);if(L0)O0?.(p4);if(u0)p0?.(m1);q0(q4),requestAnimationFrame(()=>B_())};if(X1)q0(""),W1([]),W?.(),E?.();(async()=>{try{if(await j0?.({content:q4,submitMode:S,fileRefs:p4,messageRefs:m1,mediaFiles:M_})){_?.();return}let M1=[];for(let i1 of M_){let F1=await W8(i1);M1.push(F1.id)}let L$=p4.length?`Files:
${p4.map((i1)=>`- ${i1}`).join(`
`)}`:"",c4=m1.length?`Referenced messages:
${m1.map((i1)=>`- message:${i1}`).join(`
`)}`:"",m5=M1.length?`Attachments:
${M1.map((i1,F1)=>{let e4=M_[F1]?.name||`attachment-${F1+1}`;return`- attachment:${i1} (${e4})`}).join(`
`)}`:"",g5=[q4,L$,c4,m5].filter(Boolean).join(`

`),C4=await i4("default",g5,null,M1,t4(S),U0);if(N0?.(C4),C4?.command){D_({model:C4.command.model_label??J??null,thinking_level:C4.command.thinking_level,supports_thinking:C4.command.supports_thinking});try{let i1=await k$(U0);if(i1)D_(i1)}catch{}}_?.()}catch(G4){if(X1)u5();let M1=G4?.message||"Failed to send message.";$_(M1),k0?.(M1),console.error("Failed to post:",G4)}})()},h4=(L)=>{V0?.(L)},g_=x((L)=>{if(j||!C0&&!S0||L?.isComposing)return!1;let S=()=>{L.preventDefault?.(),L.stopPropagation?.()},b=()=>{j_.current={value:"",updatedAt:0}};if(L.key==="Escape"){if(S(),b(),C0)H1(!1);if(S0)w0(!1);return!0}if(C0){if(L.key==="ArrowDown"){if(S(),b(),a0.length>0)G0((r)=>(r+1)%a0.length);return!0}if(L.key==="ArrowUp"){if(S(),b(),a0.length>0)G0((r)=>(r-1+a0.length)%a0.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&a0.length>0)return S(),b(),X_(a0[Math.max(0,Math.min(m,a0.length-1))]),!0;if(P8(L)&&a0.length>0){S();let r=I8(j_.current,L.key);j_.current=r;let L0=C8(a0,r.value,m,(u0)=>u0);if(L0>=0)G0(L0);return!0}}if(S0){if(L.key==="ArrowDown"){if(S(),b(),z1.length>0)F0((r)=>(r+1)%z1.length);return!0}if(L.key==="ArrowUp"){if(S(),b(),z1.length>0)F0((r)=>(r-1+z1.length)%z1.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&z1.length>0)return S(),b(),m4(z1[Math.max(0,Math.min(E0,z1.length-1))]),!0;if(P8(L)&&z1.length>0){S();let r=I8(j_.current,L.key);j_.current=r;let L0=C8(z1,r.value,E0,(u0)=>u0.label);if(L0>=0)F0(L0);return!0}}return!1},[j,C0,S0,a0,m,z1,E0,X_]),F=(L)=>{if(L.isComposing)return;if(j&&L.key==="Escape"){L.preventDefault(),n0(""),Q?.();return}if(g_(L))return;let S=t0.current?.value??(j?I0:D0);if(g3(L,S,{searchMode:j,showSessionSwitcherButton:I1})){L.preventDefault(),K4();return}if(e1&&f1.length>0){let b=t0.current?.value??(j?I0:D0);if(!String(b||"").match(/^@([a-zA-Z0-9_-]*)$/))B1(!1),q1([]);else{if(L.key==="ArrowDown"){L.preventDefault(),g0((r)=>(r+1)%f1.length);return}if(L.key==="ArrowUp"){L.preventDefault(),g0((r)=>(r-1+f1.length)%f1.length);return}if(L.key==="Tab"||L.key==="Enter"){L.preventDefault(),b_(f1[p1]);return}if(L.key==="Escape"){L.preventDefault(),B1(!1),q1([]);return}}}if(T1&&i0.length>0){let b=t0.current?.value??(j?I0:D0);if(!String(b||"").startsWith("/"))Z1(!1),N1([]);else{if(L.key==="ArrowDown"){L.preventDefault(),d0((r)=>(r+1)%i0.length);return}if(L.key==="ArrowUp"){L.preventDefault(),d0((r)=>(r-1+i0.length)%i0.length);return}if(L.key==="Tab"){L.preventDefault(),E4(i0[Q1]);return}if(L.key==="Enter"&&!L.shiftKey){if(!S.includes(" ")){L.preventDefault();let L0=i0[Q1];Z1(!1),N1([]),s_(L0.name);return}}if(L.key==="Escape"){L.preventDefault(),Z1(!1),N1([]);return}}}if(!j&&(L.key==="ArrowUp"||L.key==="ArrowDown")&&!L.metaKey&&!L.ctrlKey&&!L.altKey&&!L.shiftKey){let b=t0.current;if(!b)return;let r=b.value||"",L0=b.selectionStart===0&&b.selectionEnd===0,u0=b.selectionStart===r.length&&b.selectionEnd===r.length;if(L.key==="ArrowUp"&&L0||L.key==="ArrowDown"&&u0){let X1=f0.current;if(!X1.length)return;L.preventDefault();let e0=w1.current;if(L.key==="ArrowUp"){if(e0===-1)J1.current=r,e0=X1.length-1;else if(e0>0)e0-=1;w1.current=e0,E_(X1[e0]||"")}else{if(e0===-1)return;if(e0<X1.length-1)e0+=1,w1.current=e0,E_(X1[e0]||"");else w1.current=-1,E_(J1.current||""),J1.current=""}requestAnimationFrame(()=>{let l1=t0.current;if(!l1)return;let o0=l1.value.length;l1.selectionStart=o0,l1.selectionEnd=o0});return}}if(L.key==="Enter"&&!L.shiftKey&&(L.ctrlKey||L.metaKey)){if(L.preventDefault(),j){if(S.trim())Z?.(S.trim(),N)}else s_(S,"steer");return}if(L.key==="Enter"&&!L.shiftKey)if(L.preventDefault(),j){if(S.trim())Z?.(S.trim(),N)}else s_(S)},P=(L)=>{let S=Array.from(L||[]).filter((b)=>b instanceof File&&!String(b.name||"").startsWith(".DS_Store"));if(!S.length)return;W1((b)=>[...b,...S]),$_(null)},f=(L)=>{P(L.target.files),L.target.value=""},v=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),n_.current+=1,v0(!0)},o=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),n_.current=Math.max(0,n_.current-1),n_.current===0)v0(!1)},K0=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),L.dataTransfer)L.dataTransfer.dropEffect="copy";v0(!0)},i=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),n_.current=0,v0(!1),P(L.dataTransfer?.files||[])},W0=(L)=>{if(j)return;let S=L.clipboardData?.items;if(!S||!S.length)return;let b=[];for(let r of S){if(r.kind!=="file")continue;let L0=r.getAsFile?.();if(L0)b.push(L0)}if(b.length>0)L.preventDefault(),P(b)},Z0=(L)=>{W1((S)=>S.filter((b,r)=>r!==L))},A0=()=>{$_(null),W1([]),W?.(),E?.()},C1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((L)=>{let{latitude:S,longitude:b,accuracy:r}=L.coords,L0=`${S.toFixed(5)}, ${b.toFixed(5)}`,u0=Number.isFinite(r)?` ±${Math.round(r)}m`:"",X1=`https://maps.google.com/?q=${S},${b}`,e0=`Location: ${L0}${u0} ${X1}`;u4(e0)},(L)=>{let S=L?.message||"Unable to retrieve location.";alert(`Location error: ${S}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};p(()=>{if(!C0)return;j_.current={value:"",updatedAt:0},__(!0),k$(U0).then((L)=>{let S=Array.isArray(L?.models)?L.models.filter((b)=>typeof b==="string"&&b.trim().length>0):[];S.sort((b,r)=>b.localeCompare(r,void 0,{sensitivity:"base"})),d1(S),D_(L)}).catch((L)=>{console.warn("Failed to load model list:",L),d1([])}).finally(()=>{__(!1)})},[C0,J]),p(()=>{if(j)H1(!1),w0(!1),Z1(!1),N1([]),B1(!1),q1([])},[j]),p(()=>{if(S0&&!I1)w0(!1)},[S0,I1]),p(()=>{if(!C0)return;let L=a0.findIndex((S)=>S===J);G0(L>=0?L:0)},[C0,a0,J]),p(()=>{if(!S0)return;F0(A4(z1)),j_.current={value:"",updatedAt:0}},[S0,U0]),p(()=>{if(!C0)return;let L=(S)=>{let b=x1.current,r=x_.current,L0=S.target;if(b&&b.contains(L0))return;if(r&&r.contains(L0))return;H1(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[C0]),p(()=>{if(!S0)return;let L=(S)=>{let b=w_.current,r=z4.current,L0=S.target;if(b&&b.contains(L0))return;if(r&&r.contains(L0))return;w0(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[S0]),p(()=>{if(j||!C0&&!S0)return;let L=(S)=>{g_(S)};return document.addEventListener("keydown",L,!0),()=>document.removeEventListener("keydown",L,!0)},[j,C0,S0,g_]),p(()=>{if(!C0)return;let L=x1.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[C0,m,a0]),p(()=>{if(!S0)return;let L=w_.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[S0,E0,z1.length]),p(()=>{let L=()=>{let u0=F4.current?.clientWidth||0;i_((X1)=>X1===u0?X1:u0)};L();let S=F4.current,b=0,r=()=>{if(b)cancelAnimationFrame(b);b=requestAnimationFrame(()=>{b=0,L()})},L0=null;if(S&&typeof ResizeObserver<"u")L0=new ResizeObserver(()=>r()),L0.observe(S);if(typeof window<"u")window.addEventListener("resize",r);return()=>{if(b)cancelAnimationFrame(b);if(L0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",r)}},[j,J,b1.length,M?.percent]);let A_=(L)=>{let S=L.target.value;if($_(null),S0)w0(!1);B_(L.target),E_(S)};return p(()=>{requestAnimationFrame(()=>B_())},[D0,I0,j]),p(()=>{if(j)return;r_(D0)},[H_,U0,D0,j]),z`
        <div class="compose-box">
            ${!j&&t.length>0&&z`
                <div class="compose-queue-stack">
                    ${t.map((L)=>{let S=typeof L?.content==="string"?L.content:"",b=f4(S);if(!b.text.trim()&&b.fileRefs.length===0&&b.messageRefs.length===0)return null;return z`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${S}>
                                    ${b.text.trim()&&z`
                                        <div class="compose-queue-stack-text">${b.text}</div>
                                    `}
                                    ${(b.messageRefs.length>0||b.fileRefs.length>0)&&z`
                                        <div class="compose-queue-stack-refs">
                                            ${b.messageRefs.map((r)=>z`
                                                <${p_}
                                                    key=${"queue-msg-"+r}
                                                    prefix="compose"
                                                    label=${"msg:"+r}
                                                    title=${"Message reference: "+r}
                                                    icon="message"
                                                />
                                            `)}
                                            ${b.fileRefs.map((r)=>{let L0=r.split("/").pop()||r;return z`
                                                    <${p_}
                                                        key=${"queue-file-"+r}
                                                        prefix="compose"
                                                        label=${L0}
                                                        title=${r}
                                                        onClick=${()=>l?.(r)}
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
                                        onClick=${()=>h4(L)}
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
                                        onClick=${()=>d?.(L)}
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
                class=${`compose-input-wrapper${A1?" drag-active":""}`}
                onDragEnter=${v}
                onDragOver=${K0}
                onDragLeave=${o}
                onDrop=${i}
            >
                <div class="compose-input-main">
                    ${S_&&!N_&&z`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${S_}</div>
                    `}
                    ${N_&&z`
                        <div class="compose-file-refs">
                            ${S_&&z`
                                <div class="compose-submit-error" role="status" aria-live="polite">${S_}</div>
                            `}
                            ${V.map((L)=>{return z`
                                    <${p_}
                                        key=${"msg-"+L}
                                        prefix="compose"
                                        label=${"msg:"+L}
                                        title=${"Message reference: "+L}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(L)}
                                    />
                                `})}
                            ${B.map((L)=>{let S=L.split("/").pop()||L;return z`
                                    <${p_}
                                        prefix="compose"
                                        label=${S}
                                        title=${L}
                                        onClick=${()=>l?.(L)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(L)}
                                    />
                                `})}
                            ${m0.map((L,S)=>{let b=L?.name||`attachment-${S+1}`;return z`
                                    <${p_}
                                        key=${b+S}
                                        prefix="compose"
                                        label=${b}
                                        title=${b}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>Z0(S)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${A0}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof Y0==="function"&&z`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>Y0?.()}
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
                        ref=${t0}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?I0:D0}
                        onInput=${A_}
                        onKeyDown=${F}
                        onPaste=${W0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${e1&&f1.length>0&&z`
                        <div class="slash-autocomplete" ref=${r1}>
                            ${f1.map((L,S)=>z`
                                <div
                                    key=${L.chat_jid||L.agent_name}
                                    class=${`slash-item${S===p1?" active":""}`}
                                    onMouseDown=${(b)=>{b.preventDefault(),b_(L)}}
                                    onMouseEnter=${()=>g0(S)}
                                >
                                    <span class="slash-name">@${L.agent_name}</span>
                                    <span class="slash-desc">${L.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${T1&&i0.length>0&&z`
                        <div class="slash-autocomplete" ref=${S1}>
                            ${i0.map((L,S)=>z`
                                <div
                                    key=${L.name}
                                    class=${`slash-item${S===Q1?" active":""}`}
                                    onMouseDown=${(b)=>{b.preventDefault(),E4(L)}}
                                    onMouseEnter=${()=>d0(S)}
                                >
                                    <span class="slash-name">${L.name}</span>
                                    <span class="slash-desc">${L.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${C0&&!j&&z`
                        <div class="compose-model-popup" ref=${x1} tabIndex="-1" onKeyDown=${g_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${r0&&z`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!r0&&a0.length===0&&z`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!r0&&a0.map((L,S)=>z`
                                    <button
                                        key=${L}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===S?" active":""}${J===L?" current-model":""}`}
                                        onClick=${()=>{X_(L)}}
                                        disabled=${L1}
                                    >
                                        ${L}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{P4()}}
                                    disabled=${L1}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${S0&&!j&&z`
                        <div class="compose-model-popup" ref=${w_} tabIndex="-1" onKeyDown=${g_}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${z`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let L=typeof b0?.agent_name==="string"&&b0.agent_name.trim()?`@${b0.agent_name.trim()}`:U0,S=typeof b0?.chat_jid==="string"&&b0.chat_jid.trim()?b0.chat_jid.trim():U0;return`${L} — ${S} • current`})()}
                                    </div>
                                `}
                                ${!J4&&z`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${J4&&H4.map((L,S)=>{let b=Boolean(L.archived_at),L0=L.chat_jid!==(L.root_chat_jid||L.chat_jid)&&!L.is_active&&!b&&typeof X0==="function",u0=`@${L.agent_name} — ${L.chat_jid}${L.is_active?" • active":""}${b?" • archived":""}`;return z`
                                        <div key=${L.chat_jid} class=${`compose-model-popup-item-row${b?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${b?" archived":""}${E0===S?" active":""}`}
                                                onClick=${()=>{if(b){m_(L.chat_jid);return}u_(L.chat_jid)}}
                                                disabled=${b?!J_:!R_}
                                                title=${b?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${u0}
                                            </button>
                                            ${L0&&z`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${L.agent_name}`}
                                                    onClick=${(X1)=>{X1.stopPropagation(),w0(!1),X0(L.chat_jid)}}
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
                            ${(G1||D1||o1)&&z`
                                <div class="compose-model-popup-actions">
                                    ${G1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${z1.findIndex((L)=>L.key==="action:new")===E0?" active":""}`}
                                            onClick=${()=>{a1()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${D1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${z1.findIndex((L)=>L.key==="action:rename")===E0?" active":""}`}
                                            onClick=${(L)=>{M4(L)}}
                                            title="Rename current branch name and agent handle"
                                            disabled=${G_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${o1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${z1.findIndex((L)=>L.key==="action:delete")===E0?" active":""}`}
                                            onClick=${()=>{K_()}}
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
                <div class="compose-footer" ref=${F4}>
                    ${!j&&J&&z`
                    <div class="compose-meta-row">
                        ${!j&&J&&z`
                            <div class="compose-model-meta">
                                <button
                                    ref=${x_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${v_}
                                    aria-label="Open model picker"
                                    onClick=${g4}
                                    disabled=${L1}
                                >
                                    ${L1?"Switching…":N4}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!L1&&Y4&&z`
                                        <span class="compose-model-usage-hint" title=${v_}>
                                            ${Y4}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&M&&M.percent!=null&&z`
                            <${UN} usage=${M} onCompact=${I4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${q_&&z`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${b1.map((L)=>{let S=Boolean(L?.chat_jid&&L.chat_jid===U0);return z`
                                <button
                                    key=${L.chat_jid||L.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${S?" active":""}`}
                                    onClick=${()=>o_(L)}
                                    title=${`${L.chat_jid||"Active agent"} — switch to @${L.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${L.agent_name}</span>
                                </button>
                            `})}
                        </div>
                    `}
                    ${I1&&z`
                        ${b0?.agent_name&&z`
                            <span
                                class="compose-current-agent-label active"
                                title=${b0.chat_jid||U0}
                                onClick=${R1}
                            >@${b0.agent_name}</span>
                        `}
                        <button
                            ref=${z4}
                            type="button"
                            class=${`icon-btn compose-mention-btn${S0?" active":""}`}
                            onClick=${R1}
                            title=${S0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${S0?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&z`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${N}
                                onChange=${(L)=>Y?.(L.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?Q:K}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${O4&&!j&&z`
                        <button
                            class="icon-btn location-btn"
                            onClick=${C1}
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
                    ${a4&&!j&&z`
                        <button
                            class=${`icon-btn notification-btn${O_?" active":""}`}
                            onClick=${u}
                            title=${W$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&z`
                        ${g&&w&&z`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${w}
                                title=${`Attach open file: ${g}`}
                                type="button"
                                disabled=${B.includes(g)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${f} />
                        </label>
                    `}
                    ${(z0!=="connected"||!j)&&z`
                        <div class="compose-send-stack">
                            ${z0!=="connected"&&z`
                                <span class="compose-connection-status connection-status ${z0}" title=${d_}>
                                    ${Z_}
                                </span>
                            `}
                            ${!j&&z`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{s_()}}
                                    disabled=${!j4}
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
    `}var w8="piclaw_theme",W5="piclaw_tint",i3="piclaw_chat_themes",y$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},n3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},c3={default:{label:"Default",mode:"auto",light:y$,dark:n3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},zN=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],n4={theme:"default",tint:null},d3="light",S8=!1;function L5(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function K$(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let N=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(N,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${N.toLowerCase()}`}}function FN(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let N=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),N=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=N.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),K=parseInt(Z[2],10),Q=parseInt(Z[3],10);if(![Y,K,Q].every((q)=>Number.isFinite(q)))return null;let B=`#${[Y,K,Q].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:K,b:Q,hex:B}}function r3(_){return K$(_)||FN(_)}function C$(_,$,j){let N=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${N} ${Z} ${Y})`}function x8(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function ON(_){let $=_.r/255,j=_.g/255,N=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=N<=0.03928?N/12.92:Math.pow((N+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*K}function HN(_){return ON(_)>0.4?"#000000":"#ffffff"}function o3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function R8(_){return c3[_]||c3.default}function JN(_){return _.mode==="auto"?o3():_.mode}function s3(_,$){let j=R8(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||y$}function a3(_,$,j){let N=r3($);if(!N)return _;let Z=K$(_.bgPrimary),Y=K$(_.bgSecondary),K=K$(_.bgHover),Q=K$(_.borderColor);if(!Z||!Y||!K||!Q)return _;let q=K$(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:C$(Z,N,0.08),bgSecondary:C$(Y,N,0.12),bgHover:C$(K,N,0.16),borderColor:C$(Q,N,0.08),accent:N.hex,accentHover:q?C$(N,q,0.18):N.hex}}function DN(_,$){if(typeof document>"u")return;let j=document.documentElement,N=_.accent,Z=r3(N),Y=Z?x8(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=Z?x8(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",Q=Z?x8(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",B=Z?HN(Z):$==="dark"?"#000000":"#ffffff",q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":N,"--accent-hover":_.accentHover||N,"--accent-soft":K,"--accent-soft-strong":Q,"--accent-contrast-text":B,"--danger-color":_.danger||y$.danger,"--success-color":_.success||y$.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([W,V])=>{if(V)j.style.setProperty(W,V)})}function EN(){if(typeof document>"u")return;let _=document.documentElement;zN.forEach(($)=>_.style.removeProperty($))}function Y$(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,N=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!N)N=document.createElement("meta"),document.head.appendChild(N);if(N.setAttribute("name",_),j)N.setAttribute("id",j);return N}function l3(_){let $=L5(n4?.theme||"default"),j=n4?.tint?String(n4.tint).trim():null,N=s3($,_);if($==="default"&&j)N=a3(N,j,_);if(N?.bgPrimary)return N.bgPrimary;return _==="dark"?n3.bgPrimary:y$.bgPrimary}function AN(_,$){if(typeof document>"u")return;let j=Y$("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let N=Y$("theme-color",{id:"theme-color-light"});if(N)N.setAttribute("media","(prefers-color-scheme: light)"),N.setAttribute("content",l3("light"));let Z=Y$("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",l3("dark"));let Y=Y$("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let K=Y$("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let Q=Y$("apple-mobile-web-app-status-bar-style");if(Q)Q.setAttribute("content",$==="dark"?"black-translucent":"default")}function MN(){if(typeof window>"u")return;let _={...n4,mode:d3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function t3(){try{let _=W_(i3);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function kN(_,$,j){let N=t3();if(!$&&!j)delete N[_];else N[_]={theme:$||"default",tint:j||null};K1(i3,JSON.stringify(N))}function PN(_){if(!_)return null;return t3()[_]||null}function e3(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function v8(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=L5(_?.theme||"default"),N=_?.tint?String(_.tint).trim():null,Z=R8(j),Y=JN(Z),K=s3(j,Y);n4={theme:j,tint:N},d3=Y;let Q=document.documentElement;Q.dataset.theme=Y,Q.dataset.colorTheme=j,Q.dataset.tint=N?String(N):"",Q.style.colorScheme=Y;let B=K;if(j==="default"&&N)B=a3(K,N,Y);if(j==="default"&&!N)EN();else DN(B,Y);if(AN(B.bgPrimary,Y),MN(),$.persist!==!1)if(K1(w8,j),N)K1(W5,N);else K1(W5,"")}function V5(){if(R8(n4.theme).mode!=="auto")return;v8(n4,{persist:!1})}function _2(){if(typeof window>"u")return()=>{};let _=e3(),$=PN(_),j=$?L5($.theme||"default"):L5(W_(w8)||"default"),N=$?$.tint?String($.tint).trim():null:(()=>{let Z=W_(W5);return Z?Z.trim():null})();if(v8({theme:j,tint:N},{persist:!1}),window.matchMedia&&!S8){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",V5);else if(Z.addListener)Z.addListener(V5);return S8=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",V5);else if(Z.removeListener)Z.removeListener(V5);S8=!1}}return()=>{}}function $2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||e3(),j=_.theme??_.name??_.colorTheme,N=_.tint??null;if(kN($,j||"default",N),v8({theme:j||"default",tint:N},{persist:!1}),!$||$==="web:default")K1(w8,j||"default"),K1(W5,N||"")}function j2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return o3()}var U5=/#(\w+)/g,IN=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),CN=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),yN=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),TN={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},SN=new Set(["http:","https:","mailto:",""]);function f8(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function d4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let N=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!SN.has(N.protocol))return null;return N.href}catch{return null}}function N2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),N=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())N.push(Y);for(let K of N){let Q=K.tagName.toLowerCase();if(!CN.has(Q)){let q=K.parentNode;if(!q)continue;while(K.firstChild)q.insertBefore(K.firstChild,K);q.removeChild(K);continue}let B=TN[Q]||new Set;for(let q of Array.from(K.attributes)){let W=q.name.toLowerCase(),V=q.value;if(W.startsWith("on")){K.removeAttribute(q.name);continue}if(W.startsWith("data-")||W.startsWith("aria-"))continue;if(B.has(W)||yN.has(W)){if(W==="href"){let U=d4(V);if(!U)K.removeAttribute(q.name);else if(K.setAttribute(q.name,U),Q==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(W==="src"){let U=Q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,E=d4(U,{allowDataImage:Q==="img"});if(!E)K.removeAttribute(q.name);else K.setAttribute(q.name,E)}continue}K.removeAttribute(q.name)}}return j.body.innerHTML}function Z2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function z5(_,$=2){if(!_)return _;let j=_;for(let N=0;N<$;N+=1){let Z=Z2(j);if(Z===j)break;j=Z}return j}function xN(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=[],Z=[],Y=!1,K=[];for(let Q of j){if(!Y&&Q.trim().match(/^```mermaid\s*$/i)){Y=!0,K=[];continue}if(Y&&Q.trim().match(/^```\s*$/)){let B=N.length;N.push(K.join(`
`)),Z.push(`@@MERMAID_BLOCK_${B}@@`),Y=!1,K=[];continue}if(Y)K.push(Q);else Z.push(Q)}if(Y)Z.push("```mermaid"),Z.push(...K);return{text:Z.join(`
`),blocks:N}}function wN(_){if(!_)return _;return z5(_,5)}function RN(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let N of $)j+=String.fromCharCode(N);return btoa(j)}function vN(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let N=0;N<$.length;N+=1)j[N]=$.charCodeAt(N);return new TextDecoder().decode(j)}function fN(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,N)=>{let Z=Number(N),Y=$[Z]??"",K=wN(Y);return`<div class="mermaid-container" data-mermaid="${RN(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function Y2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var bN={span:new Set(["title","class","lang","dir"])};function uN(_,$){let j=bN[_];if(!j||!$)return"";let N=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let K=(Y[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let Q=Y[2]??Y[3]??Y[4]??"";N.push(` ${K}="${f8(Q)}"`)}return N.join("")}function K2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let N=j.trim(),Z=N.startsWith("/"),Y=Z?N.slice(1).trim():N,Q=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[B=""]=Q.split(/\s+/,1),q=B.toLowerCase();if(!q||!IN.has(q))return $;if(q==="br")return Z?"":"<br>";if(Z)return`</${q}>`;let W=Q.slice(B.length).trim(),V=uN(q,W);return`<${q}${V}>`})}function Q2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,N)=>`<pre><code>${$(N)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,N)=>`<code>${$(N)}</code>`)}function q2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),N=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=N(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function mN(_){if(!window.katex)return _;let $=(K)=>Z2(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let Q=[],B=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let W=Q.length;return Q.push(q),`@@CODE_BLOCK_${W}@@`});return B=B.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let W=Q.length;return Q.push(q),`@@CODE_INLINE_${W}@@`}),{html:B,blocks:Q}},N=(K,Q)=>{if(!Q.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(B,q)=>{let W=Number(q);return Q[W]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,Q,B)=>{try{let q=katex.renderToString($(B.trim()),{displayMode:!0,throwOnError:!1});return`${Q}${q}`}catch(q){return`<span class="math-error" title="${f8(q.message)}">${K}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,Q,B)=>{if(/\s$/.test(B))return K;try{let q=katex.renderToString($(B),{displayMode:!1,throwOnError:!1});return`${Q}${q}`}catch(q){return`${Q}<span class="math-error" title="${f8(q.message)}">$${B}$</span>`}}),N(Y,Z.blocks)}function gN(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),N=[],Z;while(Z=j.nextNode())N.push(Z);for(let Y of N){let K=Y.nodeValue;if(!K)continue;if(U5.lastIndex=0,!U5.test(K))continue;U5.lastIndex=0;let Q=Y.parentElement;if(Q&&(Q.closest("a")||Q.closest("code")||Q.closest("pre")))continue;let B=K.split(U5);if(B.length<=1)continue;let q=$.createDocumentFragment();B.forEach((W,V)=>{if(V%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",W),U.textContent=`#${W}`,q.appendChild(U)}else q.appendChild($.createTextNode(W))}),Y.parentNode?.replaceChild(q,Y)}return $.body.innerHTML}function hN(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,N.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,N.push("$$");continue}N.push(Y)}return N.join(`
`)}function pN(_){let $=hN(_||""),{text:j,blocks:N}=xN($),Z=z5(j,2),K=Y2(Z).replace(/</g,"&lt;");return{safeHtml:K2(K),mermaidBlocks:N}}function L_(_,$,j={}){if(!_)return"";let{safeHtml:N,mermaidBlocks:Z}=pN(_),Y=window.marked?marked.parse(N,{headerIds:!1,mangle:!1}):N.replace(/\n/g,"<br>");return Y=Q2(Y),Y=q2(Y),Y=mN(Y),Y=gN(Y),Y=fN(Y,Z),Y=N2(Y,j),Y}function F5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=z5($,2),Z=Y2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=K2(Z),K=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return K=Q2(K),K=q2(K),K=N2(K),K}function cN(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,N,Z,Y)=>{let K=Z.trim().split(/\s+/).map((B)=>{let[q,W]=B.split(",").map(Number);return{x:q,y:W}});if(K.length<3)return`<polyline${N}points="${Z}"${Y}/>`;let Q=[`M ${K[0].x},${K[0].y}`];for(let B=1;B<K.length-1;B++){let q=K[B-1],W=K[B],V=K[B+1],U=W.x-q.x,E=W.y-q.y,J=V.x-W.x,A=V.y-W.y,T=Math.sqrt(U*U+E*E),H=Math.sqrt(J*J+A*A),M=Math.min($,T/2,H/2);if(M<0.5){Q.push(`L ${W.x},${W.y}`);continue}let C=W.x-U/T*M,R=W.y-E/T*M,D=W.x+J/H*M,u=W.y+A/H*M,n=U*A-E*J>0?1:0;Q.push(`L ${C},${R}`),Q.push(`A ${M},${M} 0 0 ${n} ${D},${u}`)}return Q.push(`L ${K[K.length-1].x},${K[K.length-1].y}`),`<path${N}d="${Q.join(" ")}"${Y}/>`})}async function X4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=j2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of Y)try{let Q=K.dataset.mermaid,B=vN(Q||""),q=z5(B,2),W=await $(q,{...Z,transparent:!0});W=cN(W),K.innerHTML=W,K.removeAttribute("data-mermaid")}catch(Q){console.error("Mermaid render error:",Q);let B=document.createElement("pre");B.className="mermaid-error",B.textContent=`Diagram error: ${Q.message}`,K.innerHTML="",K.appendChild(B),K.removeAttribute("data-mermaid")}}function G2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function B2(_){return String(_||"").trim()||"web:default"}function X2(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function V2(_){if(!_)return!1;return _.status!=="running"}function W2(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function L2({session:_,onClose:$,onInject:j,onRetry:N}){let Z=y(null),Y=y(null),K=_?.thinking?F5(_.thinking):"",Q=_?.answer?L_(_.answer,null,{sanitize:!1}):"";if(p(()=>{if(Z.current&&K)X4(Z.current).catch(()=>{})},[K]),p(()=>{if(Y.current&&Q)X4(Y.current).catch(()=>{})},[Q]),!_)return null;let B=_.status==="running",q=Boolean(String(_.answer||"").trim()),W=Boolean(String(_.thinking||"").trim()),V=X2(_),U=V2(_),E=!B&&q,J=B?"Thinking…":_.status==="error"?"Error":"Done";return z`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${J}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&z`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&z`<div class="btw-block btw-error">${_.error}</div>`}
            ${W&&z`
                <details class="btw-block btw-thinking" open=${B?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${V&&z`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:Q}}
                    ></div>
                </div>
            `}

            ${U&&z`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&z`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>N?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!E}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function lN(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return N?{kind:j,svg:N}:null}function iN(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return N?{kind:Y,html:N}:{kind:Y}}function T4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function M0(_){return typeof _==="string"&&_.trim()?_.trim():null}function z2(_,$=!1){let N=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(N))}var F2="__PICLAW_WIDGET_HOST__:";function U2(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function b8(_,$){if(!_||_.type!=="generated_widget")return null;let j=lN(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:z2(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function O2(_){if(!_||typeof _!=="object")return null;let $=iN(_),j=M0(_?.widget_id)||M0(_?.widgetId)||M0(_?.tool_call_id)||M0(_?.toolCallId),N=M0(_?.tool_call_id)||M0(_?.toolCallId),Z=M0(_?.turn_id)||M0(_?.turnId),Y=M0(_?.title)||M0(_?.name)||"Generated widget",K=M0(_?.subtitle)||"",Q=M0(_?.description)||K,B=M0(_?.status),q=B==="loading"||B==="streaming"||B==="final"||B==="error"?B:"streaming";return{title:Y,subtitle:K,description:Q,originPostId:T4(_?.origin_post_id)??T4(_?.originPostId),originChatJid:M0(_?.origin_chat_jid)||M0(_?.originChatJid)||M0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:z2(_?.capabilities,!0),source:"live",status:q,turnId:Z,toolCallId:N,width:T4(_?.width),height:T4(_?.height),error:M0(_?.error)}}function H2(_){return b8(_,null)!==null}function h1(_){let $=M0(_?.toolCallId)||M0(_?.tool_call_id);if($)return $;let j=M0(_?.widgetId)||M0(_?.widget_id);if(j)return j;let N=T4(_?.originPostId)??T4(_?.origin_post_id);if(N!==null)return`post:${N}`;return null}function J2(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function D2(_){return J2(_)?"allow-downloads allow-scripts":"allow-downloads"}function O5(_){return{title:M0(_?.title)||"Generated widget",widgetId:M0(_?.widgetId)||M0(_?.widget_id),toolCallId:M0(_?.toolCallId)||M0(_?.tool_call_id),turnId:M0(_?.turnId)||M0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:M0(_?.status)||"final"}}function H5(_){return{...O5(_),subtitle:M0(_?.subtitle)||"",description:M0(_?.description)||"",error:M0(_?.error)||null,width:T4(_?.width),height:T4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function J5(_){return`${F2}${JSON.stringify(H5(_))}`}function E2(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=M0(_.text)||M0(_.content)||M0(_.message)||M0(_.prompt)||M0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let N=M0(j.text)||M0(j.content)||M0(j.message)||M0(j.prompt)||M0(j.value);if(N)return N}return null}function A2(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function M2(_){let $=M0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return M0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function nN(_){let $=O5(_);return`<script>
(function () {
  const meta = ${U2($)};
  function post(kind, payload) {
    try {
      window.parent.postMessage({
        __piclawGeneratedWidget: true,
        kind,
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload: payload || {}
      }, '*');
    } catch {}
  }

  const windowNamePrefix = ${U2(F2)};
  let lastWindowName = null;
  let pendingHostEnvelope = null;
  let pendingHostEnvelopeFrame = 0;
  let lastDispatchedEnvelopeKey = null;

  function getEnvelopeKey(data) {
    try {
      return JSON.stringify([
        data?.type || null,
        data?.widgetId || null,
        data?.toolCallId || null,
        data?.turnId || null,
        data?.payload || null,
      ]);
    } catch {
      return null;
    }
  }

  function flushHostEnvelope() {
    pendingHostEnvelopeFrame = 0;
    const data = pendingHostEnvelope;
    pendingHostEnvelope = null;
    if (!data) return;

    window.piclawWidget.lastHostMessage = data;
    const nextPayload = data.payload || null;
    if (data.type === 'widget.init') {
      const previous = window.piclawWidget.hostState && typeof window.piclawWidget.hostState === 'object'
        ? window.piclawWidget.hostState
        : null;
      if (nextPayload && typeof nextPayload === 'object') {
        window.piclawWidget.hostState = {
          ...(previous || {}),
          ...nextPayload,
          ...(Object.prototype.hasOwnProperty.call(nextPayload, 'runtimeState')
            ? {}
            : { runtimeState: previous?.runtimeState ?? null }),
        };
      } else {
        window.piclawWidget.hostState = previous || null;
      }
    } else if (data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = nextPayload;
    }

    const effectivePayload = window.piclawWidget.hostState ?? nextPayload ?? null;
    const detail = (effectivePayload === data.payload)
      ? data
      : { ...data, payload: effectivePayload };
    const envelopeKey = getEnvelopeKey(detail);
    if (envelopeKey && envelopeKey === lastDispatchedEnvelopeKey) return;
    lastDispatchedEnvelopeKey = envelopeKey;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail }));
  }

  function scheduleHostEnvelope(data) {
    if (!data) return;
    pendingHostEnvelope = data;
    if (pendingHostEnvelopeFrame) return;
    const schedule = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb) => setTimeout(cb, 0);
    pendingHostEnvelopeFrame = schedule(flushHostEnvelope);
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      scheduleHostEnvelope({
        __piclawGeneratedWidgetHost: true,
        type: 'widget.update',
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload,
      });
    } catch {}
  }

  window.piclawWidget = {
    meta,
    lastHostMessage: null,
    hostState: null,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    scheduleHostEnvelope(data);
  });

  function announceReady() {
    readWindowNameState();
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  setInterval(readWindowNameState, 250);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function k2(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=j==="svg"?Z:N;if(!K)return"";let Q=J2(_),B=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",Q?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),q=j==="svg"?`<div class="widget-svg-shell">${K}</div>`:K,W=Q?nN(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${B}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${Y.replace(/[<&>]/g,"")}</title>
<style>
:root { color-scheme: dark light; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0f1117;
  color: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
.widget-svg-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
.widget-svg-shell svg {
  max-width: 100%;
  height: auto;
}
</style>
${W}
</head>
<body>${q}</body>
</html>`}function P2({widget:_,onClose:$,onWidgetEvent:j}){let N=y(null),Z=y(!1),Y=y0(()=>k2(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(p(()=>{if(!_)return;let H=(M)=>{if(M.key==="Escape")$?.()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$]),p(()=>{Z.current=!1},[Y]),p(()=>{if(!_)return;let H=N.current;if(!H)return;let M=(a)=>{let n=J5(_),g=a==="widget.init"?O5(_):H5(_);try{H.name=n}catch{}try{H.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:a,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:g},"*")}catch{}},C=()=>{M("widget.init"),M("widget.update")},R=()=>{Z.current=!0,C()};H.addEventListener("load",R);let u=[0,40,120,300,800].map((a)=>setTimeout(C,a));return()=>{H.removeEventListener("load",R),u.forEach((a)=>clearTimeout(a))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),p(()=>{if(!_)return;let H=N.current;if(!H?.contentWindow)return;let M=J5(_),C=H5(_);try{H.name=M}catch{}try{H.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:C},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),p(()=>{if(!_)return;let H=(M)=>{let C=M?.data;if(!C||C.__piclawGeneratedWidget!==!0)return;let R=N.current,D=h1(_),u=h1({widgetId:C.widgetId,toolCallId:C.toolCallId});if(u&&D&&u!==D)return;if(!u&&R?.contentWindow&&M.source!==R.contentWindow)return;j?.(C,_)};return window.addEventListener("message",H),()=>window.removeEventListener("message",H)},[_,j]),!_)return null;let Q=(_?.artifact||{}).kind||_?.kind||"html",B=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",W=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=W==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",E=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",J=!Y,A=M2(_),T=D2(_);return z`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${B}
                onClick=${(H)=>H.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${Q.toUpperCase()}</div>
                        <div class="floating-widget-title">${B}</div>
                        ${(q||E)&&z`
                            <div class="floating-widget-subtitle">${q||E}</div>
                        `}
                    </div>
                    <button
                        class="floating-widget-close"
                        type="button"
                        onClick=${()=>$?.()}
                        title="Close widget"
                        aria-label="Close widget"
                    >
                        Close
                    </button>
                </div>
                <div class="floating-widget-body">
                    ${J?z`<div class="floating-widget-empty">${A}</div>`:z`
                            <iframe
                                ref=${N}
                                class="floating-widget-frame"
                                title=${B}
                                name=${J5(_)}
                                sandbox=${T}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var I2="PiClaw";function u8(_,$,j=!1){let N=_||"PiClaw",Z=N.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=Z.charCodeAt(0)%Y.length,Q=Y[K],B=N.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",W=q?q:null,V=j||B==="PiClaw".toLowerCase()||B==="pi";return{letter:Z,color:Q,image:W||(V?"/static/icon-192.png":null)}}function C2(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function y2(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function T2(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,K=Y?.dataset?.colorTheme||"",Q=Y?.dataset?.tint||"",B=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(B&&(Q||K&&K!=="default"))return B}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),N=0;for(let Y=0;Y<j.length;Y+=1)N=(N*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(N)%$.length;return $[Z]}function dN(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function T$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function S2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return T$(_)?"Compacting context":"Working..."}function rN(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,N=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(N).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${N}:${String(j).padStart(2,"0")}`}function x2(_,$=Date.now()){let j=dN(_);if(j===null)return null;return rN(Math.max(0,$-j))}function w2({status:_,draft:$,plan:j,thought:N,pendingRequest:Z,intent:Y,turnId:K,steerQueued:Q,onPanelToggle:B}){let V=(X0)=>{if(!X0)return{text:"",totalLines:0,fullText:""};if(typeof X0==="string"){let I0=X0,n0=I0?I0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:I0,totalLines:n0,fullText:I0}}let P0=X0.text||"",D0=X0.fullText||X0.full_text||P0,q0=Number.isFinite(X0.totalLines)?X0.totalLines:D0?D0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:P0,totalLines:q0,fullText:D0}},U=160,E=(X0)=>String(X0||"").replace(/<\/?internal>/gi,""),J=(X0)=>{if(!X0)return 1;return Math.max(1,Math.ceil(X0.length/160))},A=(X0,P0,D0)=>{let q0=(X0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!q0)return{text:"",omitted:0,totalLines:Number.isFinite(D0)?D0:0,visibleLines:0};let I0=q0.split(`
`),n0=I0.length>P0?I0.slice(0,P0).join(`
`):q0,m0=Number.isFinite(D0)?D0:I0.reduce((v0,i0)=>v0+J(i0),0),W1=n0?n0.split(`
`).reduce((v0,i0)=>v0+J(i0),0):0,A1=Math.max(m0-W1,0);return{text:n0,omitted:A1,totalLines:m0,visibleLines:W1}},T=V(j),H=V(N),M=V($),C=Boolean(T.text)||T.totalLines>0,R=Boolean(H.text)||H.totalLines>0,D=Boolean(M.fullText?.trim()||M.text?.trim());if(!_&&!D&&!C&&!R&&!Z&&!Y)return null;let[u,a]=c(new Set),[n,g]=c(()=>Date.now()),w=(X0)=>a((P0)=>{let D0=new Set(P0),q0=!D0.has(X0);if(q0)D0.add(X0);else D0.delete(X0);if(typeof B==="function")B(X0,q0);return D0});p(()=>{a(new Set)},[K]);let l=T$(_);p(()=>{if(!l)return;g(Date.now());let X0=setInterval(()=>g(Date.now()),1000);return()=>clearInterval(X0)},[l,_?.started_at,_?.startedAt]);let t=_?.turn_id||K,V0=T2(t),d=Q?"turn-dot turn-dot-queued":"turn-dot",j0=(X0)=>X0,N0=Boolean(_?.last_activity||_?.lastActivity),Y0=(X0)=>X0==="warning"?"#f59e0b":X0==="error"?"var(--danger-color)":X0==="success"?"var(--success-color)":V0,Q0=Y?.kind||"info",B0=Y0(Q0),U0=Y0(_?.kind||(l?"warning":"info")),z0="",O0=_?.title,p0=_?.status;if(_?.type==="plan")z0=O0?`Planning: ${O0}`:"Planning...";else if(_?.type==="tool_call")z0=O0?`Running: ${O0}`:"Running tool...";else if(_?.type==="tool_status")z0=O0?`${O0}: ${p0||"Working..."}`:p0||"Working...";else if(_?.type==="error")z0=O0||"Agent error";else z0=O0||p0||"Working...";if(N0)z0="Last activity just now";let k0=({panelTitle:X0,text:P0,fullText:D0,totalLines:q0,maxLines:I0,titleClass:n0,panelKey:m0})=>{let W1=u.has(m0),A1=D0||P0||"",v0=m0==="thought"||m0==="draft"?E(A1):A1,i0=typeof I0==="number",N1=W1&&i0,Q1=i0?A(v0,I0,q0):{text:v0||"",omitted:0,totalLines:Number.isFinite(q0)?q0:0};if(!v0&&!(Number.isFinite(Q1.totalLines)&&Q1.totalLines>0))return null;let d0=`agent-thinking-body${i0?" agent-thinking-body-collapsible":""}`,T1=i0?`--agent-thinking-collapsed-lines: ${I0};`:"";return z`
            <div
                class="agent-thinking"
                data-expanded=${W1?"true":"false"}
                data-collapsible=${i0?"true":"false"}
                style=${V0?`--turn-color: ${V0};`:""}
            >
                <div class="agent-thinking-title ${n0||""}">
                    ${V0&&z`<span class=${d} aria-hidden="true"></span>`}
                    ${X0}
                    ${N1&&z`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${X0} panel`}
                            onClick=${()=>w(m0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${d0}
                    style=${T1}
                    dangerouslySetInnerHTML=${{__html:F5(v0)}}
                />
                ${!W1&&Q1.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>w(m0)}>
                        ▸ ${Q1.omitted} more lines
                    </button>
                `}
                ${W1&&Q1.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>w(m0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},J0=Z?.tool_call?.title,c0=J0?`Awaiting approval: ${J0}`:"Awaiting approval",l0=l?x2(_,n):null,T0=(X0,P0,D0=null)=>{let q0=S2(X0);return z`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${P0?`--turn-color: ${P0};`:""}
                title=${X0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${P0&&z`<span class=${d} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${q0}</span>
                    ${D0&&z`<span class="agent-status-elapsed">${D0}</span>`}
                </div>
                ${X0.detail&&z`<div class="agent-thinking-body">${X0.detail}</div>`}
            </div>
        `};return z`
        <div class="agent-status-panel">
            ${Y&&T0(Y,B0)}
            ${_?.type==="intent"&&T0(_,U0,l0)}
            ${Z&&z`
                <div class="agent-status agent-status-request" aria-live="polite" style=${V0?`--turn-color: ${V0};`:""}>
                    <span class=${d} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${c0}</span>
                </div>
            `}
            ${C&&k0({panelTitle:j0("Planning"),text:T.text,fullText:T.fullText,totalLines:T.totalLines,panelKey:"plan"})}
            ${R&&k0({panelTitle:j0("Thoughts"),text:H.text,fullText:H.fullText,totalLines:H.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${D&&k0({panelTitle:j0("Draft"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&z`
                <div class=${`agent-status${N0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${V0?`--turn-color: ${V0};`:""}>
                    ${V0&&z`<span class=${d} aria-hidden="true"></span>`}
                    ${_?.type==="error"?z`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!N0&&z`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${z0}</span>
                </div>
            `}
        </div>
    `}function R2({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:N,options:Z,chat_jid:Y}=_,K=N?.title||"Agent Request",Q=N?.kind||"other",B=N?.rawInput||{},q=B.command||B.commands&&B.commands[0]||null,W=B.diff||null,V=B.fileName||B.path||null,U=N?.description||B.description||B.explanation||null,J=(Array.isArray(N?.locations)?N.locations:[]).map((C)=>C?.path).filter((C)=>Boolean(C)),A=Array.from(new Set([V,...J].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:N,options:Z});let T=async(C)=>{try{await Y5(j,C,Y||null),$()}catch(R){console.error("Failed to respond to agent request:",R)}},H=async()=>{try{await U8(K,`Auto-approved: ${K}`),await Y5(j,"approved",Y||null),$()}catch(C){console.error("Failed to add to whitelist:",C)}},M=Z&&Z.length>0;return z`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${K}</div>
                </div>
                ${(U||q||W||A.length>0)&&z`
                    <div class="agent-request-body">
                        ${U&&z`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${A.length>0&&z`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${A.map((C,R)=>z`<li key=${R}>${C}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&z`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${W&&z`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${W}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?Z.map((C)=>z`
                            <button 
                                key=${C.optionId||C.id||String(C)}
                                class="agent-request-btn ${C.kind==="allow_once"||C.kind==="allow_always"?"primary":""}"
                                onClick=${()=>T(C.optionId||C.id||C)}
                            >
                                ${C.name||C.label||C.optionId||C.id||String(C)}
                            </button>
                        `):z`
                        <button class="agent-request-btn primary" onClick=${()=>T("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>T("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${H}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function v2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let N=new Date-$,Z=N/1000,Y=86400000;if(N<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(N<5*Y){let B=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${B} ${q}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),Q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${Q}`}function S$(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function y_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function r4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var oN=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),sN=new Set(["text/markdown"]),aN=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),tN=new Set(["application/vnd.jgraph.mxfile"]);function x$(_){return typeof _==="string"?_.trim().toLowerCase():""}function eN(_){let $=x$(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function _Z(_){let $=x$(_);return!!$&&$.endsWith(".pdf")}function $Z(_){let $=x$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function w$(_,$){let j=x$(_);if(eN($)||tN.has(j))return"drawio";if(_Z($)||j==="application/pdf")return"pdf";if($Z($)||aN.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(oN.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function f2(_){let $=x$(_);return sN.has($)}function b2(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function jZ(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let N=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(N.slice(0,2),16),g:parseInt(N.slice(2,4),16),b:parseInt(N.slice(4,6),16)}}function NZ(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let N=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![N,Z,Y].every((K)=>Number.isFinite(K)))return null;return{r:N,g:Z,b:Y}}function u2(_){return jZ(_)||NZ(_)}function D5(_){let $=(Y)=>{let K=Y/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),N=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*N+0.0722*Z}function ZZ(_,$){let j=Math.max(D5(_),D5($)),N=Math.min(D5(_),D5($));return(j+0.05)/(N+0.05)}function YZ(_,$,j="#ffffff"){let N=u2(_);if(!N)return j;let Z=j,Y=-1;for(let K of $){let Q=u2(K);if(!Q)continue;let B=ZZ(N,Q);if(B>Y)Z=K,Y=B}return Z}function m8(){let _=getComputedStyle(document.documentElement),$=(J,A)=>{for(let T of J){let H=_.getPropertyValue(T).trim();if(H)return H}return A},j=$(["--text-primary","--color-text"],"#0f1419"),N=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),Q=$(["--accent-color","--color-accent"],"#1d9bf0"),B=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),W=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),E=YZ(Q,[j,Z],j);return{fg:j,fgMuted:N,bgPrimary:Z,bg:Y,bgEmphasis:K,accent:Q,good:B,warning:q,attention:W,border:V,fontFamily:U,buttonTextColor:E}}function m2(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:N,accent:Z,good:Y,warning:K,attention:Q,border:B,fontFamily:q}=m8();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:K,subtle:K},attention:{default:Q,subtle:Q}}},emphasis:{backgroundColor:N,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:K,subtle:K},attention:{default:Q,subtle:Q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:B},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var KZ=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),g2=!1,E5=null,h2=!1;function g8(_){_.querySelector(".adaptive-card-notice")?.remove()}function QZ(_,$,j="error"){g8(_);let N=document.createElement("div");N.className=`adaptive-card-notice adaptive-card-notice-${j}`,N.textContent=$,_.appendChild(N)}function qZ(_,$=(j)=>L_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function GZ(_=($)=>L_($,null)){return($,j)=>{try{let N=qZ($,_);j.outputHtml=N.outputHtml,j.didProcess=N.didProcess}catch(N){console.error("[adaptive-card] Failed to process markdown:",N),j.outputHtml=String($??""),j.didProcess=!1}}}function BZ(_){if(h2||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=GZ(),h2=!0}async function XZ(){if(g2)return;if(E5)return E5;return E5=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{g2=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),E5}function VZ(){return globalThis.AdaptiveCards}function WZ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function LZ(_){return KZ.has(_)}function p8(_){if(!Array.isArray(_))return[];return _.filter(WZ)}function UZ(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:N,raw:_}}function h8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>h8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,N])=>`${j}: ${h8(N)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function zZ(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return h8($);return typeof $==="string"?$:String($)}function FZ(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,N=(Z)=>{if(Array.isArray(Z))return Z.map((Q)=>N(Q));if(!Z||typeof Z!=="object")return Z;let K={...Z};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=zZ(K.type,j[K.id],K);for(let[Q,B]of Object.entries(K))if(Array.isArray(B)||B&&typeof B==="object")K[Q]=N(B);return K};return N(_)}function OZ(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function HZ(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function JZ(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,N=j&&typeof j.title==="string"?j.title.trim():"",Z=HZ(_.completed_at||j?.submitted_at),Y=[N||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function p2(_,$,j){if(!LZ($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await XZ()}catch(N){return console.error("[adaptive-card] Failed to load SDK:",N),!1}try{let N=VZ();BZ(N);let Z=new N.AdaptiveCard,Y=m8();Z.hostConfig=new N.HostConfig(m2());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,Q=$.state==="active"?$.payload:FZ($.payload,K);Z.parse(Q),Z.onExecuteAction=(W)=>{let V=UZ(W);if(j?.onAction)g8(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let E=U instanceof Error?U.message:String(U||"Action failed.");QZ(_,E||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let B=Z.render();if(!B)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let q=JZ($);if(q){_.classList.add("adaptive-card-finished");let W=document.createElement("div");W.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=q.label,W.appendChild(V),q.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=q.detail,W.appendChild(U)}_.appendChild(W)}if(g8(_),_.appendChild(B),q)OZ(B);return!0}catch(N){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,N),!1}}function R$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>R$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${R$(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function c2(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:R$(j)})).filter(($)=>$.value)}function DZ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function c8(_){if(!Array.isArray(_))return[];return _.filter(DZ)}function l2(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let N=R$(j);return N?`Card submission: ${$} — ${N}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=c2(j).map(({key:Y,value:K})=>`${Y}: ${K}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function i2(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=c2(_.data),N=j.length>0?j.slice(0,2).map(({key:Y,value:K})=>`${Y}: ${K}`).join(", "):R$(_.data)||null,Z=j.length;return{title:$,summary:N,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function EZ(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?y_($):null},{label:"Added",value:_?.created_at?r4(_.created_at):null}].filter((N)=>N.value)}function AZ(_,$,j){let N=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${N}#media=${Z}&name=${N}`;if(j==="office"){let Y=C_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${N}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${N}&readonly=1#media=${Z}&name=${N}&readonly=1`;return null}function n2({mediaId:_,info:$,onClose:j}){let N=$?.filename||`attachment-${_}`,Z=y0(()=>w$($?.content_type,N),[$?.content_type,N]),Y=b2(Z),K=y0(()=>f2($?.content_type),[$?.content_type]),[Q,B]=c(Z==="text"),[q,W]=c(""),[V,U]=c(null),E=y(null),J=y0(()=>EZ($),[$]),A=y0(()=>AZ(_,N,Z),[_,N,Z]),T=y0(()=>{if(!K||!q)return"";return L_(q)},[K,q]);return p(()=>{let H=(M)=>{if(M.key==="Escape")j()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[j]),p(()=>{if(!E.current||!T)return;X4(E.current);return},[T]),p(()=>{let H=!1;async function M(){if(Z!=="text"){B(!1),U(null);return}B(!0),U(null);try{let C=await H8(_);if(!H)W(C)}catch{if(!H)U("Failed to load text preview.")}finally{if(!H)B(!1)}}return M(),()=>{H=!0}},[_,Z]),z`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(H)=>{H.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${N}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${A&&z`
                            <a
                                href=${A}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(H)=>H.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${C_(_)}
                            download=${N}
                            class="attachment-preview-download"
                            onClick=${(H)=>H.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${Q&&z`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!Q&&V&&z`<div class="attachment-preview-state">${V}</div>`}
                    ${!Q&&!V&&Z==="image"&&z`
                        <img class="attachment-preview-image" src=${C_(_)} alt=${N} />
                    `}
                    ${!Q&&!V&&(Z==="pdf"||Z==="office"||Z==="drawio")&&A&&z`
                        <iframe class="attachment-preview-frame" src=${A} title=${N}></iframe>
                    `}
                    ${!Q&&!V&&Z==="drawio"&&z`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!Q&&!V&&Z==="text"&&K&&z`
                        <div
                            ref=${E}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:T}}
                        />
                    `}
                    ${!Q&&!V&&Z==="text"&&!K&&z`
                        <pre class="attachment-preview-text">${q}</pre>
                    `}
                    ${!Q&&!V&&Z==="unsupported"&&z`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${J.map((H)=>z`
                        <div class="attachment-preview-meta-item" key=${H.label}>
                            <span class="attachment-preview-meta-label">${H.label}</span>
                            <span class="attachment-preview-meta-value">${H.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function d2({src:_,onClose:$}){return p(()=>{let j=(N)=>{if(N.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),z`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function MZ({mediaId:_,onPreview:$}){let[j,N]=c(null);if(p(()=>{j$(_).then(N).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,K=Y?y_(Y):"",B=w$(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return z`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${C_(_)} download=${Z} class="file-attachment-main">
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
                        ${K&&z`<span class="file-size">${K}</span>`}
                        ${j.content_type&&z`<span class="file-size">${j.content_type}</span>`}
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
                ${B}
            </button>
        </div>
    `}function kZ({attachment:_,onPreview:$}){let j=Number(_?.id),[N,Z]=c(null);p(()=>{if(!Number.isFinite(j))return;j$(j).then(Z).catch(()=>{});return},[j]);let Y=N?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?C_(j):null,B=w$(N?.content_type,N?.filename||_?.label)==="unsupported"?"Details":"Preview";return z`
        <span class="attachment-pill" title=${Y}>
            ${K?z`
                    <a href=${K} download=${Y} class="attachment-pill-main" onClick=${(q)=>q.stopPropagation()}>
                        <${p_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:z`
                    <${p_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&N&&z`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${B}
                    onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:j,info:N})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function A5({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:N}=_,Z=N?r4(N):null;return z`
        <div class="content-annotations">
            ${$&&$.length>0&&z`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&z`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&z`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function PZ({block:_}){let $=_.title||_.name||_.uri,j=_.description,N=_.size?y_(_.size):"",Z=_.mime_type||"",Y=yZ(Z),K=d4(_.uri);return z`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(Q)=>Q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&z`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&z`<span>${Z}</span>`}
                    ${N&&z`<span>${N}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function IZ({block:_}){let[$,j]=c(!1),N=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),K=_.mime_type||"";return z`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${N}
            </button>
            ${$&&z`
                ${Z&&z`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&z`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&z`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation();let B=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:K||"application/octet-stream"}),q=URL.createObjectURL(B),W=document.createElement("a");W.href=q,W.download=N.split("/").pop()||"resource",W.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function CZ({block:_,post:$,onOpenWidget:j}){if(!_)return null;let N=b8(_,$),Z=H2(_),Y=N?.artifact?.kind||_?.artifact?.kind||_?.kind||null,K=N?.title||_.title||_.name||"Generated widget",Q=N?.description||_.description||_.subtitle||"",B=_.open_label||"Open widget",q=(W)=>{if(W.preventDefault(),W.stopPropagation(),!N)return;j?.(N)};return z`
        <div class="generated-widget-launch" onClick=${(W)=>W.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${K}</div>
            </div>
            ${Q&&z`<div class="generated-widget-launch-description">${Q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${q}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${B}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function yZ(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function TZ({preview:_}){let $=d4(_.url),j=d4(_.image,{allowDataImage:!0}),N=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return z`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${N}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&z`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function SZ(_,$){return typeof _==="string"?_:""}var xZ=1800,wZ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,RZ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,vZ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function fZ(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let N=document.execCommand("copy");return document.body.removeChild(j),N}catch{return!1}}function bZ(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,N=[],Z=(Y,K)=>{let Q=K||"idle";if(Y.dataset.copyState=Q,Q==="success")Y.innerHTML=RZ,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(Q==="error")Y.innerHTML=vZ,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=wZ,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let K=document.createElement("div");K.className="post-code-block",Y.parentNode?.insertBefore(K,Y),K.appendChild(Y);let Q=document.createElement("button");Q.type="button",Q.className="post-code-copy-btn",Z(Q,"idle"),K.appendChild(Q);let B=async(q)=>{q.preventDefault(),q.stopPropagation();let V=Y.querySelector("code")?.textContent||"",U=await fZ(V);Z(Q,U?"success":"error");let E=j.get(Q);if(E)clearTimeout(E);let J=setTimeout(()=>{Z(Q,"idle"),j.delete(Q)},xZ);j.set(Q,J)};Q.addEventListener("click",B),N.push(()=>{Q.removeEventListener("click",B);let q=j.get(Q);if(q)clearTimeout(q);if(K.parentNode)K.parentNode.insertBefore(Y,K),K.remove()})}),()=>{N.forEach((Y)=>Y())}}function uZ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){N=q;break}if(N===-1)return{content:_,fileRefs:[]};let Z=[],Y=N+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q))Z.push(q.replace(/^\s*-\s+/,"").trim());else if(!q.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,N),Q=j.slice(Y),B=[...K,...Q].join(`
`);return B=B.replace(/\n{3,}/g,`

`).trim(),{content:B,fileRefs:Z}}function mZ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){N=q;break}if(N===-1)return{content:_,messageRefs:[]};let Z=[],Y=N+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q)){let V=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,N),Q=j.slice(Y),B=[...K,...Q].join(`
`);return B=B.replace(/\n{3,}/g,`

`).trim(),{content:B,messageRefs:Z}}function gZ(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let q=0;q<j.length;q+=1){let W=j[q].trim();if((W==="Images:"||W==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){N=q;break}}if(N===-1)return{content:_,attachments:[]};let Z=[],Y=N+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q)){let W=q.replace(/^\s*-\s+/,"").trim(),V=W.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||W.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let U=V[1],E=(V[2]||"").trim()||U;Z.push({id:U,label:E,raw:W})}else Z.push({id:null,label:W,raw:W})}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let K=j.slice(0,N),Q=j.slice(Y),B=[...K,...Q].join(`
`);return B=B.replace(/\n{3,}/g,`

`).trim(),{content:B,attachments:Z}}function hZ(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function pZ(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let N=j.map(hZ).sort((W,V)=>V.length-W.length),Z=new RegExp(`(${N.join("|")})`,"gi"),Y=new RegExp(`^(${N.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),Q=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),B=[],q;while(q=Q.nextNode())B.push(q);for(let W of B){let V=W.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let U=W.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let E=V.split(Z).filter((A)=>A!=="");if(E.length===0)continue;let J=K.createDocumentFragment();for(let A of E)if(Y.test(A)){let T=K.createElement("mark");T.className="search-highlight-term",T.textContent=A,J.appendChild(T)}else J.appendChild(K.createTextNode(A));W.parentNode.replaceChild(J,W)}return K.body.innerHTML}function r2({post:_,onClick:$,onHashtagClick:j,onMessageRef:N,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:K,userName:Q,userAvatarUrl:B,userAvatarBackground:q,onDelete:W,isThreadReply:V,isThreadPrev:U,isThreadNext:E,isRemoving:J,highlightQuery:A,onFileRef:T,onOpenWidget:H}){let[M,C]=c(null),R=y(null),D=_.data,u=D.type==="agent_response",a=Q||"You",n=u?Y||I2:a,g=u?u8(Y,K,!0):u8(a,B),w=typeof q==="string"?q.trim().toLowerCase():"",l=!u&&g.image&&(w==="clear"||w==="transparent"),t=u&&Boolean(g.image),V0=`background-color: ${l||t?"transparent":g.color}`,d=D.content_meta,j0=Boolean(d?.truncated),N0=Boolean(d?.preview),Y0=j0&&!N0,Q0=j0?{originalLength:Number.isFinite(d?.original_length)?d.original_length:D.content?D.content.length:0,maxLength:Number.isFinite(d?.max_length)?d.max_length:0}:null,B0=D.content_blocks||[],U0=D.media_ids||[],z0=SZ(D.content,D.link_previews),{content:O0,fileRefs:p0}=uZ(z0),{content:k0,messageRefs:J0}=mZ(O0),{content:c0,attachments:l0}=gZ(k0);z0=c0;let T0=p8(B0),X0=c8(B0),P0=T0.length===1&&typeof T0[0]?.fallback_text==="string"?T0[0].fallback_text.trim():"",D0=X0.length===1?l2(X0[0]).trim():"",q0=Boolean(P0)&&z0?.trim()===P0||Boolean(D0)&&z0?.trim()===D0,I0=Boolean(z0)&&!Y0&&!q0,n0=typeof A==="string"?A.trim():"",m0=y0(()=>{if(!z0||q0)return"";let m=L_(z0,j);return n0?pZ(m,n0):m},[z0,q0,n0]),W1=(m,G0)=>{m.stopPropagation(),C(C_(G0))},[A1,v0]=c(null),i0=(m)=>{v0(m)},N1=(m)=>{m.stopPropagation(),W?.(_)},Q1=(m,G0)=>{let E0=new Set;if(!m||G0.length===0)return{content:m,usedIds:E0};return{content:m.replace(/attachment:([^\s)"']+)/g,(r0,__,c1,i_)=>{let S_=__.replace(/^\/+/,""),t0=G0.find((r1)=>r1.name&&r1.name.toLowerCase()===S_.toLowerCase()&&!E0.has(r1.id))||G0.find((r1)=>!E0.has(r1.id));if(!t0)return r0;if(E0.add(t0.id),i_.slice(Math.max(0,c1-2),c1)==="](")return`/media/${t0.id}`;return t0.name||"attachment"}),usedIds:E0}},d0=[],T1=[],Z1=[],f1=[],q1=[],p1=[],g0=[],e1=0;if(B0.length>0)B0.forEach((m)=>{if(m?.type==="text"&&m.annotations)g0.push(m.annotations);if(m?.type==="generated_widget")p1.push(m);else if(m?.type==="resource_link")f1.push(m);else if(m?.type==="resource")q1.push(m);else if(m?.type==="file"){let G0=U0[e1++];if(G0)T1.push(G0),Z1.push({id:G0,name:m?.name||m?.filename||m?.title})}else if(m?.type==="image"||!m?.type){let G0=U0[e1++];if(G0){let E0=typeof m?.mime_type==="string"?m.mime_type:void 0;d0.push({id:G0,annotations:m?.annotations,mimeType:E0}),Z1.push({id:G0,name:m?.name||m?.filename||m?.title})}}});else if(U0.length>0){let m=l0.length>0;U0.forEach((G0,E0)=>{let F0=l0[E0]||null;if(Z1.push({id:G0,name:F0?.label||null}),m)T1.push(G0);else d0.push({id:G0,annotations:null})})}if(l0.length>0)l0.forEach((m)=>{if(!m?.id)return;let G0=Z1.find((E0)=>String(E0.id)===String(m.id));if(G0&&!G0.name)G0.name=m.label});let{content:B1,usedIds:L1}=Q1(z0,Z1);z0=B1;let O1=d0.filter(({id:m})=>!L1.has(m)),C0=T1.filter((m)=>!L1.has(m)),H1=l0.length>0?l0.map((m,G0)=>({id:m.id||`attachment-${G0+1}`,label:m.label||`attachment-${G0+1}`})):Z1.map((m,G0)=>({id:m.id,label:m.name||`attachment-${G0+1}`})),S0=y0(()=>p8(B0),[B0]),w0=y0(()=>c8(B0),[B0]),a0=y0(()=>{return S0.map((m)=>`${m.card_id}:${m.state}`).join("|")},[S0]);p(()=>{if(!R.current)return;return X4(R.current),bZ(R.current)},[m0]);let d1=y(null);return p(()=>{if(!d1.current||S0.length===0)return;let m=d1.current;m.innerHTML="";for(let G0 of S0){let E0=document.createElement("div");m.appendChild(E0),p2(E0,G0,{onAction:async(F0)=>{if(F0.type==="Action.OpenUrl"){let r0=d4(F0.url||"");if(!r0)throw Error("Invalid URL");window.open(r0,"_blank","noopener,noreferrer");return}if(F0.type==="Action.Submit"){await L8({post_id:_.id,thread_id:D.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:G0.card_id,action:{type:F0.type,title:F0.title||"",data:F0.data}});return}console.warn("[post] unsupported adaptive card action:",F0.type,F0)}}).catch((F0)=>{console.error("[post] adaptive card render error:",F0),E0.textContent=G0.fallback_text||"Card failed to render."})}},[a0,_.id]),z`
        <div id=${`post-${_.id}`} class="post ${u?"agent-post":""} ${V?"thread-reply":""} ${U?"thread-prev":""} ${E?"thread-next":""} ${J?"removing":""}" onClick=${$}>
            <div class="post-avatar ${u?"agent-avatar":""} ${g.image?"has-image":""}" style=${V0}>
                ${g.image?z`<img src=${g.image} alt=${n} />`:g.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${N1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${n}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(m)=>{if(m.preventDefault(),m.stopPropagation(),N)N(_.id)}}>${v2(_.timestamp)}</a>
                </div>
                ${Y0&&Q0&&z`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${S$(Q0.originalLength)} chars
                            ${Q0.maxLength?z` • Display limit: ${S$(Q0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${N0&&Q0&&z`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${S$(Q0.maxLength)} of ${S$(Q0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(p0.length>0||J0.length>0||H1.length>0)&&z`
                    <div class="post-file-refs">
                        ${J0.map((m)=>{let G0=(E0)=>{if(E0.preventDefault(),E0.stopPropagation(),Z)Z(m,_.chat_jid||null);else{let F0=document.getElementById("post-"+m);if(F0)F0.scrollIntoView({behavior:"smooth",block:"center"}),F0.classList.add("post-highlight"),setTimeout(()=>F0.classList.remove("post-highlight"),2000)}};return z`
                                <a href=${`#msg-${m}`} class="post-msg-pill-link" onClick=${G0}>
                                    <${p_}
                                        prefix="post"
                                        label=${"msg:"+m}
                                        title=${"Message "+m}
                                        icon="message"
                                        onClick=${G0}
                                    />
                                </a>
                            `})}
                        ${p0.map((m)=>{let G0=m.split("/").pop()||m;return z`
                                <${p_}
                                    prefix="post"
                                    label=${G0}
                                    title=${m}
                                    onClick=${()=>T?.(m)}
                                />
                            `})}
                        ${H1.map((m)=>z`
                            <${kZ}
                                key=${m.id}
                                attachment=${m}
                                onPreview=${i0}
                            />
                        `)}
                    </div>
                `}
                ${I0&&z`
                    <div 
                        ref=${R}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:m0}}
                        onClick=${(m)=>{if(m.target.classList.contains("hashtag")){m.preventDefault(),m.stopPropagation();let G0=m.target.dataset.hashtag;if(G0)j?.(G0)}else if(m.target.tagName==="IMG")m.preventDefault(),m.stopPropagation(),C(m.target.src)}}
                    />
                `}
                ${S0.length>0&&z`
                    <div ref=${d1} class="post-adaptive-cards" />
                `}
                ${w0.length>0&&z`
                    <div class="post-adaptive-card-submissions">
                        ${w0.map((m,G0)=>{let E0=i2(m),F0=`${m.card_id}-${G0}`;return z`
                                <div key=${F0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${E0.title}</span>
                                        </div>
                                    </div>
                                    ${E0.fields.length>0&&z`
                                        <div class="adaptive-card-submission-fields">
                                            ${E0.fields.map((r0)=>z`
                                                <span class="adaptive-card-submission-field" title=${`${r0.key}: ${r0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${r0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${r0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${r4(E0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${p1.length>0&&z`
                    <div class="generated-widget-launches">
                        ${p1.map((m,G0)=>z`
                            <${CZ}
                                key=${m.widget_id||m.id||`${_.id}-widget-${G0}`}
                                block=${m}
                                post=${_}
                                onOpenWidget=${H}
                            />
                        `)}
                    </div>
                `}
                ${g0.length>0&&z`
                    ${g0.map((m,G0)=>z`
                        <${A5} key=${G0} annotations=${m} />
                    `)}
                `}
                ${O1.length>0&&z`
                    <div class="media-preview">
                        ${O1.map(({id:m,mimeType:G0})=>{let F0=typeof G0==="string"&&G0.toLowerCase().startsWith("image/svg")?C_(m):O8(m);return z`
                                <img 
                                    key=${m} 
                                    src=${F0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(r0)=>W1(r0,m)}
                                />
                            `})}
                    </div>
                `}
                ${O1.length>0&&z`
                    ${O1.map(({annotations:m},G0)=>z`
                        ${m&&z`<${A5} key=${G0} annotations=${m} />`}
                    `)}
                `}
                ${C0.length>0&&z`
                    <div class="file-attachments">
                        ${C0.map((m)=>z`
                            <${MZ} key=${m} mediaId=${m} onPreview=${i0} />
                        `)}
                    </div>
                `}
                ${f1.length>0&&z`
                    <div class="resource-links">
                        ${f1.map((m,G0)=>z`
                            <div key=${G0}>
                                <${PZ} block=${m} />
                                <${A5} annotations=${m.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${q1.length>0&&z`
                    <div class="resource-embeds">
                        ${q1.map((m,G0)=>z`
                            <div key=${G0}>
                                <${IZ} block=${m} />
                                <${A5} annotations=${m.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${D.link_previews?.length>0&&z`
                    <div class="link-previews">
                        ${D.link_previews.map((m,G0)=>z`
                            <${TZ} key=${G0} preview=${m} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${M&&z`<${d2} src=${M} onClose=${()=>C(null)} />`}
        ${A1&&z`
            <${n2}
                mediaId=${A1.mediaId}
                info=${A1.info}
                onClose=${()=>v0(null)}
            />
        `}
    `}function o2({posts:_,hasMore:$,onLoadMore:j,onPostClick:N,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:K,onFileRef:Q,onOpenWidget:B,emptyMessage:q,timelineRef:W,agents:V,user:U,onDeletePost:E,reverse:J=!0,removingPostIds:A,searchQuery:T}){let[H,M]=c(!1),C=y(null),R=typeof IntersectionObserver<"u",D=x(async()=>{if(!j||!$||H)return;M(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{M(!1)}},[$,H,j]),u=x((d)=>{let{scrollTop:j0,scrollHeight:N0,clientHeight:Y0}=d.target,Q0=J?N0-Y0-j0:j0,B0=Math.max(300,Y0);if(Q0<B0)D()},[J,D]);p(()=>{if(!R)return;let d=C.current,j0=W?.current;if(!d||!j0)return;let N0=300,Y0=new IntersectionObserver((Q0)=>{for(let B0 of Q0){if(!B0.isIntersecting)continue;D()}},{root:j0,rootMargin:`${N0}px 0px ${N0}px 0px`,threshold:0});return Y0.observe(d),()=>Y0.disconnect()},[R,$,j,W,D]);let a=y(D);if(a.current=D,p(()=>{if(R)return;if(!W?.current)return;let{scrollTop:d,scrollHeight:j0,clientHeight:N0}=W.current,Y0=J?j0-N0-d:d,Q0=Math.max(300,N0);if(Y0<Q0)a.current?.()},[R,_,$,J,W]),p(()=>{if(!W?.current)return;if(!$||H)return;let{scrollTop:d,scrollHeight:j0,clientHeight:N0}=W.current,Y0=J?j0-N0-d:d,Q0=Math.max(300,N0);if(j0<=N0+1||Y0<Q0)a.current?.()},[_,$,H,J,W]),!_)return z`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return z`
            <div class="timeline" ref=${W}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let n=_.slice().sort((d,j0)=>d.id-j0.id),g=(d)=>{let j0=d?.data?.thread_id;if(j0===null||j0===void 0||j0==="")return null;let N0=Number(j0);return Number.isFinite(N0)?N0:null},w=new Map;for(let d=0;d<n.length;d+=1){let j0=n[d],N0=Number(j0?.id),Y0=g(j0);if(Y0!==null){let Q0=w.get(Y0)||{anchorIndex:-1,replyIndexes:[]};Q0.replyIndexes.push(d),w.set(Y0,Q0)}else if(Number.isFinite(N0)){let Q0=w.get(N0)||{anchorIndex:-1,replyIndexes:[]};Q0.anchorIndex=d,w.set(N0,Q0)}}let l=new Map;for(let[d,j0]of w.entries()){let N0=new Set;if(j0.anchorIndex>=0)N0.add(j0.anchorIndex);for(let Y0 of j0.replyIndexes)N0.add(Y0);l.set(d,Array.from(N0).sort((Y0,Q0)=>Y0-Q0))}let t=n.map((d,j0)=>{let N0=g(d);if(N0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Y0=l.get(N0);if(!Y0||Y0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Q0=Y0.indexOf(j0);if(Q0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Q0>0,hasThreadNext:Q0<Y0.length-1}}),V0=z`<div class="timeline-sentinel" ref=${C}></div>`;return z`
        <div class="timeline ${J?"reverse":"normal"}" ref=${W} onScroll=${u}>
            <div class="timeline-content">
                ${J?V0:null}
                ${n.map((d,j0)=>{let N0=Boolean(d.data?.thread_id&&d.data.thread_id!==d.id),Y0=A?.has?.(d.id),Q0=t[j0]||{};return z`
                    <${r2}
                        key=${d.id}
                        post=${d}
                        isThreadReply=${N0}
                        isThreadPrev=${Q0.hasThreadPrev}
                        isThreadNext=${Q0.hasThreadNext}
                        isRemoving=${Y0}
                        highlightQuery=${T}
                        agentName=${C2(d.data?.agent_id,V||{})}
                        agentAvatarUrl=${y2(d.data?.agent_id,V||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>N?.(d)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${K}
                        onFileRef=${Q}
                        onOpenWidget=${B}
                        onDelete=${E}
                    />
                `})}
                ${J?null:V0}
            </div>
        </div>
    `}class s2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let N of this.extensions.values()){if(N.placement!=="tabs")continue;if(!N.canHandle)continue;try{let Z=N.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=N}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${N.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var j1=new s2;var M5=null,l8=null;function cZ(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function a2(){if(l8)return Promise.resolve(l8);if(!M5)M5=import(cZ()).then((_)=>{return l8=_,_}).catch((_)=>{throw M5=null,_});return M5}class t2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await a2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var i8={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new t2(_,$)}};function n8(){a2().catch(()=>{})}var v$="piclaw://terminal";var lZ={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},iZ={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},k5=null,d8=null;function nZ(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function dZ(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,N=(Z,Y)=>{let K=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!nZ(K))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=N;try{return await _()}finally{globalThis.fetch=$}}async function rZ(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!k5)k5=dZ(()=>Promise.resolve($.init?.())).catch((j)=>{throw k5=null,j});return await k5,$}async function oZ(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!d8)d8=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await d8}async function sZ(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function aZ(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function tZ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function V4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function eZ(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function e2(){let _=tZ(),$=_?iZ:lZ,j=V4("--bg-primary",_?"#000000":"#ffffff"),N=V4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=V4("--text-secondary",_?"#71767b":"#536471"),Y=V4("--accent-color","#1d9bf0"),K=V4("--danger-color",_?"#ff7b72":"#cf222e"),Q=V4("--success-color",_?"#7ee787":"#1a7f37"),B=V4("--bg-hover",_?"#1d1f23":"#e8ebed"),q=V4("--border-color",_?"#2f3336":"#eff3f4"),W=V4("--accent-soft-strong",eZ(Y,_?"47":"33"));return{background:j,foreground:N,cursor:Y,cursorAccent:j,selectionBackground:W,selectionForeground:N,black:B,red:K,green:Q,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:N,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:q}}class r8{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,N=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(N)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await rZ();if(await oZ(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:e2()}),N=null;if(typeof _.FitAddon==="function")N=new _.FitAddon,j.loadAddon?.(N);await j.open($),this.syncHostLayout(),j.loadFonts?.(),N?.observeResize?.(),this.terminal=j,this.fitAddon=N,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=e2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let N=this.bodyEl.querySelector(".terminal-live-host");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),N=()=>_();if(j?.addEventListener)j.addEventListener("change",N);else if(j?.addListener)j.addListener(N);this.mediaQuery=j,this.mediaQueryListener=N;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await sZ();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(aZ($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((N)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:N}))}),_.onResize?.(({cols:N,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:N,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(N)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(N.data))}catch{Z={type:"output",data:String(N.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var o8={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new r8(_,$)}},s8={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new r8(_,$)}};function W4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function P5(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let N=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(N),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||K)}function _7(_,$={}){if(W4($))return null;if(P5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:_Y(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function a8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function t8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),N=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${N}</p>
            </div>
        `}catch{}}function e8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function $7(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function o4(_,$,j={}){let N=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(N.searchParams.set("chat_jid",Z),N.searchParams.delete("branch_loader"),N.searchParams.delete("branch_source_chat_jid"),N.searchParams.delete("pane_popout"),N.searchParams.delete("pane_path"),N.searchParams.delete("pane_label"),j.chatOnly!==!1)N.searchParams.set("chat_only","1");return N.toString()}function j7(_,$,j={}){let N=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(N.searchParams.set("branch_loader","1"),N.searchParams.set("branch_source_chat_jid",Z),N.searchParams.delete("chat_jid"),N.searchParams.delete("pane_popout"),N.searchParams.delete("pane_path"),N.searchParams.delete("pane_label"),j.chatOnly!==!1)N.searchParams.set("chat_only","1");return N.toString()}function N7(_,$,j={}){let N=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return N.toString();if(N.searchParams.set("pane_popout","1"),N.searchParams.set("pane_path",Z),j?.label)N.searchParams.set("pane_label",String(j.label));else N.searchParams.delete("pane_label");if(j?.chatJid)N.searchParams.set("chat_jid",String(j.chatJid));return N.searchParams.delete("chat_only"),N.searchParams.delete("branch_loader"),N.searchParams.delete("branch_source_chat_jid"),N.toString()}function _Y(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function $Y(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function Z7(_,$={}){if(W4($))return null;if(P5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:$Y(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function I5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let N=j.toLowerCase();if(N.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(N.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(N.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(N.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(N.includes("failed to fork branch")||N.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function jY(_){try{return JSON.parse(_)}catch{return null}}function NY(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function ZY(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class _6{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=ZY($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let N=this.options.parseControlMessage||jY;this.options.onMessage?.({kind:"control",raw:$.data,payload:N($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=NY(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var f$=()=>{throw Error("Operation requires compiling with --exportRuntime")},YY=typeof BigUint64Array<"u",b$=Symbol();var KY=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function Y7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,N=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...N);try{return KY.decode(N)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...N.subarray(Y,Y+=1024));return Z+String.fromCharCode(...N.subarray(Y))}}function K7(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return Y7(Z.buffer,Y)}let N=_.env=_.env||{};return N.abort=N.abort||function(Y,K,Q,B){let q=$.memory||N.memory;throw Error(`abort: ${j(q,Y)} at ${j(q,K)}:${Q}:${B}`)},N.trace=N.trace||function(Y,K,...Q){let B=$.memory||N.memory;console.log(`trace: ${j(B,Y)}${K?" ":""}${Q.slice(0,K).join(", ")}`)},N.seed=N.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function Q7(_,$){let j=$.exports,N=j.memory,Z=j.table,Y=j.__new||f$,K=j.__pin||f$,Q=j.__unpin||f$,B=j.__collect||f$,q=j.__rtti_base,W=q?(w)=>w[q>>>2]:f$;_.__new=Y,_.__pin=K,_.__unpin=Q,_.__collect=B;function V(w){let l=new Uint32Array(N.buffer);if((w>>>=0)>=W(l))throw Error(`invalid id: ${w}`);return l[(q+4>>>2)+w]}function U(w){let l=V(w);if(!(l&7))throw Error(`not an array: ${w}, flags=${l}`);return l}function E(w){return 31-Math.clz32(w>>>6&31)}function J(w){if(w==null)return 0;let l=w.length,t=Y(l<<1,2),V0=new Uint16Array(N.buffer);for(let d=0,j0=t>>>1;d<l;++d)V0[j0+d]=w.charCodeAt(d);return t}_.__newString=J;function A(w){if(w==null)return 0;let l=new Uint8Array(w),t=Y(l.length,1);return new Uint8Array(N.buffer).set(l,t),t}_.__newArrayBuffer=A;function T(w){if(!w)return null;let l=N.buffer;if(new Uint32Array(l)[w+-8>>>2]!==2)throw Error(`not a string: ${w}`);return Y7(l,w)}_.__getString=T;function H(w,l,t){let V0=N.buffer;if(t)switch(w){case 2:return new Float32Array(V0);case 3:return new Float64Array(V0)}else switch(w){case 0:return new(l?Int8Array:Uint8Array)(V0);case 1:return new(l?Int16Array:Uint16Array)(V0);case 2:return new(l?Int32Array:Uint32Array)(V0);case 3:return new(l?BigInt64Array:BigUint64Array)(V0)}throw Error(`unsupported align: ${w}`)}function M(w,l=0){let t=l,V0=U(w),d=E(V0),j0=typeof t!=="number",N0=j0?t.length:t,Y0=Y(N0<<d,V0&4?w:1),Q0;if(V0&4)Q0=Y0;else{K(Y0);let B0=Y(V0&2?16:12,w);Q(Y0);let U0=new Uint32Array(N.buffer);if(U0[B0+0>>>2]=Y0,U0[B0+4>>>2]=Y0,U0[B0+8>>>2]=N0<<d,V0&2)U0[B0+12>>>2]=N0;Q0=B0}if(j0){let B0=H(d,V0&2048,V0&4096),U0=Y0>>>d;if(V0&16384)for(let z0=0;z0<N0;++z0)B0[U0+z0]=t[z0];else B0.set(t,U0)}return Q0}_.__newArray=M;function C(w){let l=new Uint32Array(N.buffer),t=l[w+-8>>>2],V0=U(t),d=E(V0),j0=V0&4?w:l[w+4>>>2],N0=V0&2?l[w+12>>>2]:l[j0+-4>>>2]>>>d;return H(d,V0&2048,V0&4096).subarray(j0>>>=d,j0+N0)}_.__getArrayView=C;function R(w){let l=C(w),t=l.length,V0=Array(t);for(let d=0;d<t;d++)V0[d]=l[d];return V0}_.__getArray=R;function D(w){let l=N.buffer,t=new Uint32Array(l)[w+-4>>>2];return l.slice(w,w+t)}_.__getArrayBuffer=D;function u(w){if(!Z)throw Error("Operation requires compiling with --exportTable");let l=new Uint32Array(N.buffer)[w>>>2];return Z.get(l)}_.__getFunction=u;function a(w,l,t){return new w(n(w,l,t))}function n(w,l,t){let V0=N.buffer,d=new Uint32Array(V0);return new w(V0,d[t+4>>>2],d[t+8>>>2]>>>l)}function g(w,l,t){_[`__get${l}`]=a.bind(null,w,t),_[`__get${l}View`]=n.bind(null,w,t)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((w)=>{g(w,w.name,31-Math.clz32(w.BYTES_PER_ELEMENT))}),YY)[BigUint64Array,BigInt64Array].forEach((w)=>{g(w,w.name.slice(3),3)});return _.memory=_.memory||N,_.table=_.table||Z,qY(j,_)}function q7(_){return typeof Response<"u"&&_ instanceof Response}function QY(_){return _ instanceof WebAssembly.Module}async function $6(_,$={}){if(q7(_=await _))return C5(_,$);let j=QY(_)?_:await WebAssembly.compile(_),N=K7($),Z=await WebAssembly.instantiate(j,$),Y=Q7(N,Z);return{module:j,instance:Z,exports:Y}}async function C5(_,$={}){if(!WebAssembly.instantiateStreaming)return $6(q7(_=await _)?_.arrayBuffer():_,$);let j=K7($),N=await WebAssembly.instantiateStreaming(_,$),Z=Q7(j,N.instance);return{...N,exports:Z}}function qY(_,$={}){let j=_.__argumentsLength?(N)=>{_.__argumentsLength.value=N}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let N of Object.keys(_)){let Z=_[N],Y=N.split("."),K=$;while(Y.length>1){let q=Y.shift();if(!Object.hasOwn(K,q))K[q]={};K=K[q]}let Q=Y[0],B=Q.indexOf("#");if(B>=0){let q=Q.substring(0,B),W=K[q];if(typeof W>"u"||!W.prototype){let V=function(...U){return V.wrap(V.prototype.constructor(0,...U))};if(V.prototype={valueOf(){return this[b$]}},V.wrap=function(U){return Object.create(V.prototype,{[b$]:{value:U,writable:!1}})},W)Object.getOwnPropertyNames(W).forEach((U)=>Object.defineProperty(V,U,Object.getOwnPropertyDescriptor(W,U)));K[q]=V}if(Q=Q.substring(B+1),K=K[q].prototype,/^(get|set):/.test(Q)){if(!Object.hasOwn(K,Q=Q.substring(4))){let V=_[N.replace("set:","get:")],U=_[N.replace("get:","set:")];Object.defineProperty(K,Q,{get(){return V(this[b$])},set(E){U(this[b$],E)},enumerable:!0})}}else if(Q==="constructor")(K[Q]=function(...V){return j(V.length),Z(...V)}).original=Z;else(K[Q]=function(...V){return j(V.length),Z(this[b$],...V)}).original=Z}else if(/^(get|set):/.test(Q)){if(!Object.hasOwn(K,Q=Q.substring(4)))Object.defineProperty(K,Q,{get:_[N.replace("set:","get:")],set:_[N.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(K[Q]=(...q)=>{return j(q.length),Z(...q)}).original=Z;else K[Q]=Z}return $}var BY="/static/js/vendor/remote-display-decoder.wasm",y5=null;function G7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function B7(){if(y5)return y5;return y5=(async()=>{try{let N=function(Z,Y,K,Q,B,q,W){let V=G7(Y),U=j.__pin(j.__newArrayBuffer(V));try{return j[Z](U,K,Q,B,q,W.bitsPerPixel,W.bigEndian?1:0,W.trueColor?1:0,W.redMax,W.greenMax,W.blueMax,W.redShift,W.greenShift,W.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(BY,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof C5==="function"?await C5(_,{}):await $6(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,K,Q,B,q){return N("processRawRect",Z,Y,K,Q,B,q)},processCopyRect(Z,Y,K,Q,B,q){return j.processCopyRect(Z,Y,K,Q,B,q)},processRreRect(Z,Y,K,Q,B,q){return N("processRreRect",Z,Y,K,Q,B,q)},processHextileRect(Z,Y,K,Q,B,q){return N("processHextileRect",Z,Y,K,Q,B,q)},processZrleTileData(Z,Y,K,Q,B,q){return N("processZrleTileData",Z,Y,K,Q,B,q)},decodeRawRectToRgba(Z,Y,K,Q){let B=G7(Z),q=j.__pin(j.__newArrayBuffer(B));try{let W=j.__pin(j.decodeRawRectToRgba(q,Y,K,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(W))}finally{j.__unpin(W)}}finally{j.__unpin(q);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),y5}function Q$(_,$,j){return Math.max($,Math.min(j,_))}function T5(_,$,j){let N=new Uint8Array(6),Z=Q$(Math.floor(Number($||0)),0,65535),Y=Q$(Math.floor(Number(j||0)),0,65535);return N[0]=5,N[1]=Q$(Math.floor(Number(_||0)),0,255),N[2]=Z>>8&255,N[3]=Z&255,N[4]=Y>>8&255,N[5]=Y&255,N}function N6(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function X7(_,$,j,N,Z){let Y=Math.max(1,Math.floor(Number(N||0))),K=Math.max(1,Math.floor(Number(Z||0))),Q=Math.max(1,Number(j?.width||0)),B=Math.max(1,Number(j?.height||0)),q=(Number(_||0)-Number(j?.left||0))/Q,W=(Number($||0)-Number(j?.top||0))/B;return{x:Q$(Math.floor(q*Y),0,Math.max(0,Y-1)),y:Q$(Math.floor(W*K),0,Math.max(0,K-1))}}function V7(_,$,j,N=0){let Z=Number(_)<0?8:16,Y=Q$(Number(N||0)|Z,0,255);return[T5(Y,$,j),T5(Number(N||0),$,j)]}function W7(_,$){let j=new Uint8Array(8),N=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=N>>>24&255,j[5]=N>>>16&255,j[6]=N>>>8&255,j[7]=N&255,j}function u$(_){if(typeof _!=="string")return null;return _.length>0?_:null}function L7(_,$,j,N){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),K=Math.max(1,Math.floor(Number(j||0))),Q=Math.max(1,Math.floor(Number(N||0))),B=Math.min(Z/K,Y/Q);if(!Number.isFinite(B)||B<=0)return 1;return Math.max(0.01,B)}var j6={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)j6[`F${_}`]=65470+(_-1);function Z6(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(j6,Y))return j6[Y];let j=String(_?.key||""),N=j?j.codePointAt(0):null,Z=N==null?0:N>65535?2:1;if(N!=null&&j.length===Z){if(N<=255)return N;return(16777216|N)>>>0}return null}var y1=Uint8Array,U_=Uint16Array,W6=Int32Array,S5=new y1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),x5=new y1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),G6=new y1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),O7=function(_,$){var j=new U_(31);for(var N=0;N<31;++N)j[N]=$+=1<<_[N-1];var Z=new W6(j[30]);for(var N=1;N<30;++N)for(var Y=j[N];Y<j[N+1];++Y)Z[Y]=Y-j[N]<<5|N;return{b:j,r:Z}},H7=O7(S5,2),J7=H7.b,B6=H7.r;J7[28]=258,B6[258]=28;var D7=O7(x5,0),XY=D7.b,U7=D7.r,X6=new U_(32768);for(R0=0;R0<32768;++R0)t_=(R0&43690)>>1|(R0&21845)<<1,t_=(t_&52428)>>2|(t_&13107)<<2,t_=(t_&61680)>>4|(t_&3855)<<4,X6[R0]=((t_&65280)>>8|(t_&255)<<8)>>1;var t_,R0,e_=function(_,$,j){var N=_.length,Z=0,Y=new U_($);for(;Z<N;++Z)if(_[Z])++Y[_[Z]-1];var K=new U_($);for(Z=1;Z<$;++Z)K[Z]=K[Z-1]+Y[Z-1]<<1;var Q;if(j){Q=new U_(1<<$);var B=15-$;for(Z=0;Z<N;++Z)if(_[Z]){var q=Z<<4|_[Z],W=$-_[Z],V=K[_[Z]-1]++<<W;for(var U=V|(1<<W)-1;V<=U;++V)Q[X6[V]>>B]=q}}else{Q=new U_(N);for(Z=0;Z<N;++Z)if(_[Z])Q[Z]=X6[K[_[Z]-1]++]>>15-_[Z]}return Q},S4=new y1(288);for(R0=0;R0<144;++R0)S4[R0]=8;var R0;for(R0=144;R0<256;++R0)S4[R0]=9;var R0;for(R0=256;R0<280;++R0)S4[R0]=7;var R0;for(R0=280;R0<288;++R0)S4[R0]=8;var R0,p$=new y1(32);for(R0=0;R0<32;++R0)p$[R0]=5;var R0,VY=e_(S4,9,0),WY=e_(S4,9,1),LY=e_(p$,5,0),UY=e_(p$,5,1),Y6=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},c_=function(_,$,j){var N=$/8|0;return(_[N]|_[N+1]<<8)>>($&7)&j},K6=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},L6=function(_){return(_+7)/8|0},h$=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new y1(_.subarray($,j))};var zY=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Q_=function(_,$,j){var N=Error($||zY[_]);if(N.code=_,Error.captureStackTrace)Error.captureStackTrace(N,Q_);if(!j)throw N;return N},FY=function(_,$,j,N){var Z=_.length,Y=N?N.length:0;if(!Z||$.f&&!$.l)return j||new y1(0);var K=!j,Q=K||$.i!=2,B=$.i;if(K)j=new y1(Z*3);var q=function(D0){var q0=j.length;if(D0>q0){var I0=new y1(Math.max(q0*2,D0));I0.set(j),j=I0}},W=$.f||0,V=$.p||0,U=$.b||0,E=$.l,J=$.d,A=$.m,T=$.n,H=Z*8;do{if(!E){W=c_(_,V,1);var M=c_(_,V+1,3);if(V+=3,!M){var C=L6(V)+4,R=_[C-4]|_[C-3]<<8,D=C+R;if(D>Z){if(B)Q_(0);break}if(Q)q(U+R);j.set(_.subarray(C,D),U),$.b=U+=R,$.p=V=D*8,$.f=W;continue}else if(M==1)E=WY,J=UY,A=9,T=5;else if(M==2){var u=c_(_,V,31)+257,a=c_(_,V+10,15)+4,n=u+c_(_,V+5,31)+1;V+=14;var g=new y1(n),w=new y1(19);for(var l=0;l<a;++l)w[G6[l]]=c_(_,V+l*3,7);V+=a*3;var t=Y6(w),V0=(1<<t)-1,d=e_(w,t,1);for(var l=0;l<n;){var j0=d[c_(_,V,V0)];V+=j0&15;var C=j0>>4;if(C<16)g[l++]=C;else{var N0=0,Y0=0;if(C==16)Y0=3+c_(_,V,3),V+=2,N0=g[l-1];else if(C==17)Y0=3+c_(_,V,7),V+=3;else if(C==18)Y0=11+c_(_,V,127),V+=7;while(Y0--)g[l++]=N0}}var Q0=g.subarray(0,u),B0=g.subarray(u);A=Y6(Q0),T=Y6(B0),E=e_(Q0,A,1),J=e_(B0,T,1)}else Q_(1);if(V>H){if(B)Q_(0);break}}if(Q)q(U+131072);var U0=(1<<A)-1,z0=(1<<T)-1,O0=V;for(;;O0=V){var N0=E[K6(_,V)&U0],p0=N0>>4;if(V+=N0&15,V>H){if(B)Q_(0);break}if(!N0)Q_(2);if(p0<256)j[U++]=p0;else if(p0==256){O0=V,E=null;break}else{var k0=p0-254;if(p0>264){var l=p0-257,J0=S5[l];k0=c_(_,V,(1<<J0)-1)+J7[l],V+=J0}var c0=J[K6(_,V)&z0],l0=c0>>4;if(!c0)Q_(3);V+=c0&15;var B0=XY[l0];if(l0>3){var J0=x5[l0];B0+=K6(_,V)&(1<<J0)-1,V+=J0}if(V>H){if(B)Q_(0);break}if(Q)q(U+131072);var T0=U+k0;if(U<B0){var X0=Y-B0,P0=Math.min(B0,T0);if(X0+U<0)Q_(3);for(;U<P0;++U)j[U]=N[X0+U]}for(;U<T0;++U)j[U]=j[U-B0]}}if($.l=E,$.p=O0,$.b=U,$.f=W,E)W=1,$.m=A,$.d=J,$.n=T}while(!W);return U!=j.length&&K?h$(j,0,U):j.subarray(0,U)},L4=function(_,$,j){j<<=$&7;var N=$/8|0;_[N]|=j,_[N+1]|=j>>8},m$=function(_,$,j){j<<=$&7;var N=$/8|0;_[N]|=j,_[N+1]|=j>>8,_[N+2]|=j>>16},Q6=function(_,$){var j=[];for(var N=0;N<_.length;++N)if(_[N])j.push({s:N,f:_[N]});var Z=j.length,Y=j.slice();if(!Z)return{t:A7,l:0};if(Z==1){var K=new y1(j[0].s+1);return K[j[0].s]=1,{t:K,l:1}}j.sort(function(D,u){return D.f-u.f}),j.push({s:-1,f:25001});var Q=j[0],B=j[1],q=0,W=1,V=2;j[0]={s:-1,f:Q.f+B.f,l:Q,r:B};while(W!=Z-1)Q=j[j[q].f<j[V].f?q++:V++],B=j[q!=W&&j[q].f<j[V].f?q++:V++],j[W++]={s:-1,f:Q.f+B.f,l:Q,r:B};var U=Y[0].s;for(var N=1;N<Z;++N)if(Y[N].s>U)U=Y[N].s;var E=new U_(U+1),J=V6(j[W-1],E,0);if(J>$){var N=0,A=0,T=J-$,H=1<<T;Y.sort(function(u,a){return E[a.s]-E[u.s]||u.f-a.f});for(;N<Z;++N){var M=Y[N].s;if(E[M]>$)A+=H-(1<<J-E[M]),E[M]=$;else break}A>>=T;while(A>0){var C=Y[N].s;if(E[C]<$)A-=1<<$-E[C]++-1;else++N}for(;N>=0&&A;--N){var R=Y[N].s;if(E[R]==$)--E[R],++A}J=$}return{t:new y1(E),l:J}},V6=function(_,$,j){return _.s==-1?Math.max(V6(_.l,$,j+1),V6(_.r,$,j+1)):$[_.s]=j},z7=function(_){var $=_.length;while($&&!_[--$]);var j=new U_(++$),N=0,Z=_[0],Y=1,K=function(B){j[N++]=B};for(var Q=1;Q<=$;++Q)if(_[Q]==Z&&Q!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)K(32754);if(Y>2)K(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){K(Z),--Y;for(;Y>6;Y-=6)K(8304);if(Y>2)K(Y-3<<5|8208),Y=0}while(Y--)K(Z);Y=1,Z=_[Q]}return{c:j.subarray(0,N),n:$}},g$=function(_,$){var j=0;for(var N=0;N<$.length;++N)j+=_[N]*$[N];return j},E7=function(_,$,j){var N=j.length,Z=L6($+2);_[Z]=N&255,_[Z+1]=N>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<N;++Y)_[Z+Y+4]=j[Y];return(Z+4+N)*8},F7=function(_,$,j,N,Z,Y,K,Q,B,q,W){L4($,W++,j),++Z[256];var V=Q6(Z,15),U=V.t,E=V.l,J=Q6(Y,15),A=J.t,T=J.l,H=z7(U),M=H.c,C=H.n,R=z7(A),D=R.c,u=R.n,a=new U_(19);for(var n=0;n<M.length;++n)++a[M[n]&31];for(var n=0;n<D.length;++n)++a[D[n]&31];var g=Q6(a,7),w=g.t,l=g.l,t=19;for(;t>4&&!w[G6[t-1]];--t);var V0=q+5<<3,d=g$(Z,S4)+g$(Y,p$)+K,j0=g$(Z,U)+g$(Y,A)+K+14+3*t+g$(a,w)+2*a[16]+3*a[17]+7*a[18];if(B>=0&&V0<=d&&V0<=j0)return E7($,W,_.subarray(B,B+q));var N0,Y0,Q0,B0;if(L4($,W,1+(j0<d)),W+=2,j0<d){N0=e_(U,E,0),Y0=U,Q0=e_(A,T,0),B0=A;var U0=e_(w,l,0);L4($,W,C-257),L4($,W+5,u-1),L4($,W+10,t-4),W+=14;for(var n=0;n<t;++n)L4($,W+3*n,w[G6[n]]);W+=3*t;var z0=[M,D];for(var O0=0;O0<2;++O0){var p0=z0[O0];for(var n=0;n<p0.length;++n){var k0=p0[n]&31;if(L4($,W,U0[k0]),W+=w[k0],k0>15)L4($,W,p0[n]>>5&127),W+=p0[n]>>12}}}else N0=VY,Y0=S4,Q0=LY,B0=p$;for(var n=0;n<Q;++n){var J0=N[n];if(J0>255){var k0=J0>>18&31;if(m$($,W,N0[k0+257]),W+=Y0[k0+257],k0>7)L4($,W,J0>>23&31),W+=S5[k0];var c0=J0&31;if(m$($,W,Q0[c0]),W+=B0[c0],c0>3)m$($,W,J0>>5&8191),W+=x5[c0]}else m$($,W,N0[J0]),W+=Y0[J0]}return m$($,W,N0[256]),W+Y0[256]},OY=new W6([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),A7=new y1(0),HY=function(_,$,j,N,Z,Y){var K=Y.z||_.length,Q=new y1(N+K+5*(1+Math.ceil(K/7000))+Z),B=Q.subarray(N,Q.length-Z),q=Y.l,W=(Y.r||0)&7;if($){if(W)B[0]=Y.r>>3;var V=OY[$-1],U=V>>13,E=V&8191,J=(1<<j)-1,A=Y.p||new U_(32768),T=Y.h||new U_(J+1),H=Math.ceil(j/3),M=2*H,C=function(n0){return(_[n0]^_[n0+1]<<H^_[n0+2]<<M)&J},R=new W6(25000),D=new U_(288),u=new U_(32),a=0,n=0,g=Y.i||0,w=0,l=Y.w||0,t=0;for(;g+2<K;++g){var V0=C(g),d=g&32767,j0=T[V0];if(A[d]=j0,T[V0]=d,l<=g){var N0=K-g;if((a>7000||w>24576)&&(N0>423||!q)){W=F7(_,B,0,R,D,u,n,w,t,g-t,W),w=a=n=0,t=g;for(var Y0=0;Y0<286;++Y0)D[Y0]=0;for(var Y0=0;Y0<30;++Y0)u[Y0]=0}var Q0=2,B0=0,U0=E,z0=d-j0&32767;if(N0>2&&V0==C(g-z0)){var O0=Math.min(U,N0)-1,p0=Math.min(32767,g),k0=Math.min(258,N0);while(z0<=p0&&--U0&&d!=j0){if(_[g+Q0]==_[g+Q0-z0]){var J0=0;for(;J0<k0&&_[g+J0]==_[g+J0-z0];++J0);if(J0>Q0){if(Q0=J0,B0=z0,J0>O0)break;var c0=Math.min(z0,J0-2),l0=0;for(var Y0=0;Y0<c0;++Y0){var T0=g-z0+Y0&32767,X0=A[T0],P0=T0-X0&32767;if(P0>l0)l0=P0,j0=T0}}}d=j0,j0=A[d],z0+=d-j0&32767}}if(B0){R[w++]=268435456|B6[Q0]<<18|U7[B0];var D0=B6[Q0]&31,q0=U7[B0]&31;n+=S5[D0]+x5[q0],++D[257+D0],++u[q0],l=g+Q0,++a}else R[w++]=_[g],++D[_[g]]}}for(g=Math.max(g,l);g<K;++g)R[w++]=_[g],++D[_[g]];if(W=F7(_,B,q,R,D,u,n,w,t,g-t,W),!q)Y.r=W&7|B[W/8|0]<<3,W-=7,Y.h=T,Y.p=A,Y.i=g,Y.w=l}else{for(var g=Y.w||0;g<K+q;g+=65535){var I0=g+65535;if(I0>=K)B[W/8|0]=q,I0=K;W=E7(B,W+1,_.subarray(g,I0))}Y.i=K}return h$(Q,0,N+L6(W)+Z)};var M7=function(){var _=1,$=0;return{p:function(j){var N=_,Z=$,Y=j.length|0;for(var K=0;K!=Y;){var Q=Math.min(K+2655,Y);for(;K<Q;++K)Z+=N+=j[K];N=(N&65535)+15*(N>>16),Z=(Z&65535)+15*(Z>>16)}_=N,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},JY=function(_,$,j,N,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),K=new y1(Y.length+_.length);K.set(Y),K.set(_,Y.length),_=K,Z.w=Y.length}}return HY(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,N,Z)};var k7=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var DY=function(_,$){var j=$.level,N=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=N<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=M7();Z.p($.dictionary),k7(_,2,Z.d())}},EY=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)Q_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)Q_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var q6=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var N=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:N?N.length:0},this.o=new y1(32768),this.p=new y1(0),N)this.o.set(N)}return _.prototype.e=function($){if(!this.ondata)Q_(5);if(this.d)Q_(4);if(!this.p.length)this.p=$;else if($.length){var j=new y1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,N=FY(this.p,this.s,this.o);this.ondata(h$(N,j,this.s.b),this.d),this.o=h$(N,this.s.b-32768),this.s.b=this.o.length,this.p=h$(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function P7(_,$){if(!$)$={};var j=M7();j.p(_);var N=JY(_,$,$.dictionary?6:2,4);return DY(N,$),k7(N,N.length-4,j.d()),N}var I7=function(){function _($,j){q6.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(q6.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(EY(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)Q_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}q6.prototype.c.call(this,j)},_}();var AY=typeof TextDecoder<"u"&&new TextDecoder,MY=0;try{AY.decode(A7,{stream:!0}),MY=1}catch(_){}var kY=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],PY=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],IY=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],CY=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],yY=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],TY=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],SY=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],xY=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],T7=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;T7[_]=$}function S7(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function x7(_){let $=0n,j=S7(_);for(let N of j)$=$<<8n|BigInt(N);return $}function wY(_,$){let j=new Uint8Array($),N=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(N&0xffn),N>>=8n;return j}function q$(_,$,j){let N=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;N=N<<1n|Y}return N}function C7(_,$){let j=28n,N=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&N}function RY(_){let $=q$(x7(_),yY,64),j=$>>28n&0x0fffffffn,N=$&0x0fffffffn,Z=[];for(let Y of SY){j=C7(j,Y),N=C7(N,Y);let K=j<<28n|N;Z.push(q$(K,TY,56))}return Z}function vY(_){let $=0n;for(let j=0;j<8;j+=1){let N=BigInt((7-j)*6),Z=Number(_>>N&0x3fn),Y=(Z&32)>>4|Z&1,K=Z>>1&15;$=$<<4n|BigInt(xY[j][Y][K])}return $}function fY(_,$){let j=q$(_,IY,32)^BigInt($),N=vY(j);return q$(N,CY,32)}function y7(_,$){let j=RY($),N=q$(x7(_),kY,64),Z=N>>32n&0xffffffffn,Y=N&0xffffffffn;for(let Q of j){let B=Y,q=(Z^fY(Y,Q))&0xffffffffn;Z=B,Y=q}let K=Y<<32n|Z;return wY(q$(K,PY,64),8)}function bY(_){let $=String(_??""),j=new Uint8Array(8);for(let N=0;N<8;N+=1){let Z=N<$.length?$.charCodeAt(N)&255:0;j[N]=T7[Z]}return j}function w7(_,$){let j=S7($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let N=bY(_),Z=new Uint8Array(16);return Z.set(y7(j.slice(0,8),N),0),Z.set(y7(j.slice(8,16),N),8),Z}var l_="vnc";function uY(_){return Number(_)}function mY(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],N=new Set;for(let Z of $){let Y=uY(Z);if(!Number.isFinite(Y))continue;let K=Number(Y);if(!N.has(K))j.push(K),N.add(K)}if(j.length>0)return j;return[5,2,1,0,-223]}function X$(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function gY(_,$){let j=X$(_),N=X$($);if(!j.byteLength)return new Uint8Array(N);if(!N.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+N.byteLength);return Z.set(j,0),Z.set(N,j.byteLength),Z}function hY(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),N=0;for(let Z of _||[]){let Y=X$(Z);j.set(Y,N),N+=Y.byteLength}return j}function pY(){return(_)=>{let $=X$(_);try{let j=[],N=new I7((Z)=>{j.push(new Uint8Array(Z))});if(N.push($,!0),N.err)throw Error(N.msg||"zlib decompression error");return hY(j)}catch(j){try{let N=P7($);return N instanceof Uint8Array?N:new Uint8Array(N)}catch(N){let Z=N instanceof Error?N.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function cY(_){return new TextEncoder().encode(String(_||""))}function G$(_){return new TextDecoder().decode(X$(_))}function lY(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function iY(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function R7(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function nY(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function dY(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),N=new DataView(j);N.setUint8(0,2),N.setUint8(1,0),N.setUint16(2,$.length,!1);let Z=4;for(let Y of $)N.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function v7(_,$,j,N=0,Z=0){let Y=new ArrayBuffer(10),K=new DataView(Y);return K.setUint8(0,3),K.setUint8(1,_?1:0),K.setUint16(2,N,!1),K.setUint16(4,Z,!1),K.setUint16(6,Math.max(0,$||0),!1),K.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function B$(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function b7(_,$,j,N){if(j===1)return _[$];if(j===2)return N?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return N?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return N?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function rY(_,$,j,N){let Z=N||V$,Y=X$(_),K=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),Q=Math.max(0,$||0)*Math.max(0,j||0)*K;if(Y.byteLength<Q)throw Error(`Incomplete raw rectangle payload: expected ${Q} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let B=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),q=0,W=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let U=b7(Y,q,K,Z.bigEndian),E=B$(U>>>Z.redShift&Z.redMax,Z.redMax),J=B$(U>>>Z.greenShift&Z.greenMax,Z.greenMax),A=B$(U>>>Z.blueShift&Z.blueMax,Z.blueMax);B[W]=E,B[W+1]=J,B[W+2]=A,B[W+3]=255,q+=K,W+=4}return B}function U4(_,$,j){let N=j||V$,Z=Math.max(1,Math.floor(Number(N.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=b7(_,$,Z,N.bigEndian);return{rgba:[B$(Y>>>N.redShift&N.redMax,N.redMax),B$(Y>>>N.greenShift&N.greenMax,N.greenMax),B$(Y>>>N.blueShift&N.blueMax,N.blueMax),255],bytesPerPixel:Z}}function x4(_,$,j,N,Z,Y,K){if(!K)return;for(let Q=0;Q<Y;Q+=1)for(let B=0;B<Z;B+=1){let q=((N+Q)*$+(j+B))*4;_[q]=K[0],_[q+1]=K[1],_[q+2]=K[2],_[q+3]=K[3]}}function u7(_,$,j,N,Z,Y,K){for(let Q=0;Q<Y;Q+=1){let B=Q*Z*4,q=((N+Q)*$+j)*4;_.set(K.subarray(B,B+Z*4),q)}}function f7(_,$){let j=$,N=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(N+=Z,Z!==255)break}return{consumed:j-$,runLength:N}}function oY(_,$,j,N,Z,Y,K){let Q=Z||V$,B=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let q=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+q)return null;let W=_.slice($+4,$+4+q),V;try{V=K(W)}catch{return{consumed:4+q,skipped:!0}}let U=0,E=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,N||0)*4);for(let J=0;J<N;J+=64){let A=Math.min(64,N-J);for(let T=0;T<j;T+=64){let H=Math.min(64,j-T);if(V.byteLength<U+1)return null;let M=V[U++],C=M&127,R=(M&128)!==0;if(!R&&C===0){let D=H*A*B;if(V.byteLength<U+D)return null;let u=Y(V.slice(U,U+D),H,A,Q);U+=D,u7(E,j,T,J,H,A,u);continue}if(!R&&C===1){let D=U4(V,U,Q);if(!D)return null;U+=D.bytesPerPixel,x4(E,j,T,J,H,A,D.rgba);continue}if(!R&&C>1&&C<=16){let D=[];for(let g=0;g<C;g+=1){let w=U4(V,U,Q);if(!w)return null;U+=w.bytesPerPixel,D.push(w.rgba)}let u=C<=2?1:C<=4?2:4,a=Math.ceil(H*u/8),n=a*A;if(V.byteLength<U+n)return null;for(let g=0;g<A;g+=1){let w=U+g*a;for(let l=0;l<H;l+=1){let t=l*u,V0=w+(t>>3),d=8-u-(t&7),j0=V[V0]>>d&(1<<u)-1;x4(E,j,T+l,J+g,1,1,D[j0])}}U+=n;continue}if(R&&C===0){let D=0,u=0;while(u<A){let a=U4(V,U,Q);if(!a)return null;U+=a.bytesPerPixel;let n=f7(V,U);if(!n)return null;U+=n.consumed;for(let g=0;g<n.runLength;g+=1)if(x4(E,j,T+D,J+u,1,1,a.rgba),D+=1,D>=H){if(D=0,u+=1,u>=A)break}}continue}if(R&&C>0){let D=[];for(let n=0;n<C;n+=1){let g=U4(V,U,Q);if(!g)return null;U+=g.bytesPerPixel,D.push(g.rgba)}let u=0,a=0;while(a<A){if(V.byteLength<U+1)return null;let n=V[U++],g=n,w=1;if(n&128){g=n&127;let t=f7(V,U);if(!t)return null;U+=t.consumed,w=t.runLength}let l=D[g];if(!l)return null;for(let t=0;t<w;t+=1)if(x4(E,j,T+u,J+a,1,1,l),u+=1,u>=H){if(u=0,a+=1,a>=A)break}}continue}return{consumed:4+q,skipped:!0}}}return{consumed:4+q,rgba:E,decompressed:V}}function sY(_,$,j,N,Z){let Y=Z||V$,K=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+K)return null;let B=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),q=4+K+B*(K+8);if(_.byteLength<$+q)return null;let W=$+4,V=U4(_,W,Y);if(!V)return null;W+=V.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,N||0)*4);x4(U,j,0,0,j,N,V.rgba);for(let E=0;E<B;E+=1){let J=U4(_,W,Y);if(!J)return null;if(W+=J.bytesPerPixel,_.byteLength<W+8)return null;let A=new DataView(_.buffer,_.byteOffset+W,8),T=A.getUint16(0,!1),H=A.getUint16(2,!1),M=A.getUint16(4,!1),C=A.getUint16(6,!1);W+=8,x4(U,j,T,H,M,C,J.rgba)}return{consumed:W-$,rgba:U}}function aY(_,$,j,N,Z,Y){let K=Z||V$,Q=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8)),B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,N||0)*4),q=$,W=[0,0,0,255],V=[255,255,255,255];for(let U=0;U<N;U+=16){let E=Math.min(16,N-U);for(let J=0;J<j;J+=16){let A=Math.min(16,j-J);if(_.byteLength<q+1)return null;let T=_[q++];if(T&1){let H=A*E*Q;if(_.byteLength<q+H)return null;let M=Y(_.slice(q,q+H),A,E,K);q+=H,u7(B,j,J,U,A,E,M);continue}if(T&2){let H=U4(_,q,K);if(!H)return null;W=H.rgba,q+=H.bytesPerPixel}if(x4(B,j,J,U,A,E,W),T&4){let H=U4(_,q,K);if(!H)return null;V=H.rgba,q+=H.bytesPerPixel}if(T&8){if(_.byteLength<q+1)return null;let H=_[q++];for(let M=0;M<H;M+=1){let C=V;if(T&16){let w=U4(_,q,K);if(!w)return null;C=w.rgba,q+=w.bytesPerPixel}if(_.byteLength<q+2)return null;let R=_[q++],D=_[q++],u=R>>4,a=R&15,n=(D>>4)+1,g=(D&15)+1;x4(B,j,J+u,U+a,n,g,C)}}}}return{consumed:q-$,rgba:B}}var V$={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class w5{protocol=l_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:rY,this.pipeline=_.pipeline||null,this.encodings=mY(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...V$},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:pY()}receive(_){if(_)this.buffer=gY(this.buffer,_);let $=[],j=[],N=!0;while(N){if(N=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=G$(Z),K=lY(Y);if(!K)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=K,this.clientVersionText=iY(K),j.push(cY(this.clientVersionText)),$.push({type:"protocol-version",protocol:l_,server:K.text.trim(),client:this.clientVersionText.trim()}),this.state=K.minor>=7?"security-types":"security-type-33",N=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let B=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+B)break;this.consume(1);let q=G$(this.consume(4+B).slice(4));throw Error(q||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:l_,types:Y});let K=null;if(Y.includes(2)&&this.password!==null)K=2;else if(Y.includes(1))K=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(K)),$.push({type:"security-selected",protocol:l_,securityType:K,label:K===2?"VNC Authentication":"None"}),this.state=K===2?"security-challenge":"security-result",N=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+Q)break;let B=G$(this.consume(4+Q).slice(4));throw Error(B||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:l_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",N=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:l_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",N=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(w7(this.password,Z)),this.state="security-result",N=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+K){let Q=G$(this.consume(4+K).slice(4));throw Error(Q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:l_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",N=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),K=Z.getUint16(2,!1),Q=R7(Z,4),B=Z.getUint32(20,!1);if(this.buffer.byteLength<24+B)break;let q=this.consume(24),W=new DataView(q.buffer,q.byteOffset,q.byteLength);if(this.framebufferWidth=W.getUint16(0,!1),this.framebufferHeight=W.getUint16(2,!1),this.serverPixelFormat=R7(W,4),this.serverName=G$(this.consume(B)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(nY(this.clientPixelFormat)),j.push(dY(this.encodings)),j.push(v7(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:l_,width:Y,height:K,name:this.serverName,pixelFormat:Q}),N=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),Q=4,B=[],q=!1,W=!!this.pipeline;for(let U=0;U<K;U+=1){if(this.buffer.byteLength<Q+12){q=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+Q,12),J=E.getUint16(0,!1),A=E.getUint16(2,!1),T=E.getUint16(4,!1),H=E.getUint16(6,!1),M=E.getInt32(8,!1);if(Q+=12,M===0){let C=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),R=T*H*C;if(this.buffer.byteLength<Q+R){q=!0;break}let D=this.buffer.slice(Q,Q+R);if(Q+=R,W)this.pipeline.processRawRect(D,J,A,T,H,this.clientPixelFormat),B.push({kind:"pipeline",x:J,y:A,width:T,height:H});else B.push({kind:"rgba",x:J,y:A,width:T,height:H,rgba:this.decodeRawRect(D,T,H,this.clientPixelFormat)});continue}if(M===2){let C=sY(this.buffer,Q,T,H,this.clientPixelFormat);if(!C){q=!0;break}if(W){let R=this.buffer.slice(Q,Q+C.consumed);this.pipeline.processRreRect(R,J,A,T,H,this.clientPixelFormat),B.push({kind:"pipeline",x:J,y:A,width:T,height:H})}else B.push({kind:"rgba",x:J,y:A,width:T,height:H,rgba:C.rgba});Q+=C.consumed;continue}if(M===1){if(this.buffer.byteLength<Q+4){q=!0;break}let C=new DataView(this.buffer.buffer,this.buffer.byteOffset+Q,4),R=C.getUint16(0,!1),D=C.getUint16(2,!1);if(Q+=4,W)this.pipeline.processCopyRect(J,A,T,H,R,D),B.push({kind:"pipeline",x:J,y:A,width:T,height:H});else B.push({kind:"copy",x:J,y:A,width:T,height:H,srcX:R,srcY:D});continue}if(M===16){let C=oY(this.buffer,Q,T,H,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!C){q=!0;break}if(Q+=C.consumed,C.skipped)continue;if(W&&C.decompressed)this.pipeline.processZrleTileData(C.decompressed,J,A,T,H,this.clientPixelFormat),B.push({kind:"pipeline",x:J,y:A,width:T,height:H});else B.push({kind:"rgba",x:J,y:A,width:T,height:H,rgba:C.rgba});continue}if(M===5){let C=aY(this.buffer,Q,T,H,this.clientPixelFormat,this.decodeRawRect);if(!C){q=!0;break}if(W){let R=this.buffer.slice(Q,Q+C.consumed);this.pipeline.processHextileRect(R,J,A,T,H,this.clientPixelFormat),B.push({kind:"pipeline",x:J,y:A,width:T,height:H})}else B.push({kind:"rgba",x:J,y:A,width:T,height:H,rgba:C.rgba});Q+=C.consumed;continue}if(M===-223){if(this.framebufferWidth=T,this.framebufferHeight=H,W)this.pipeline.initFramebuffer(T,H);B.push({kind:"resize",x:J,y:A,width:T,height:H});continue}throw Error(`Unsupported VNC rectangle encoding ${M}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(q)break;this.consume(Q);let V={type:"framebuffer-update",protocol:l_,width:this.framebufferWidth,height:this.framebufferHeight,rects:B};if(W)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(v7(!0,this.framebufferWidth,this.framebufferHeight)),N=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:l_}),N=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+K)break;this.consume(8);let Q=G$(this.consume(K));$.push({type:"clipboard",protocol:l_,text:Q}),N=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var _4="piclaw://vnc";function tY(_){let $=String(_||"");if($===_4)return null;if(!$.startsWith(`${_4}/`))return null;let j=$.slice(`${_4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function s4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function eY(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),N=await j.json().catch(()=>({}));if(!j.ok)throw Error(N?.error||`HTTP ${j.status}`);return N}function _K(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/vnc/ws?target=${encodeURIComponent(_)}`}function $K(_,$){let j=String(_||"").trim(),N=Math.floor(Number($||0));if(!j||!Number.isFinite(N)||N<=0||N>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${N}`}class m7{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;rawFallbackAttempted=!1;protocolRecovering=!1;constructor(_,$){this.container=_,this.targetId=tY($?.path),this.targetLabel=this.targetId||null,this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_?"block":"none"}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:18px 18px 20px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:14px;box-shadow:0 16px 38px rgba(0,0,0,.22);">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host placeholder="server" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;min-height:40px;font-weight:600;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((Z)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${s4(Z.label||Z.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${s4(Z.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Z.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${s4(Z.id)}" data-target-label="${s4(Z.label||Z.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:28px 24px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);font-size:13px;color:var(--text-secondary);line-height:1.5;">
                            No saved VNC targets yet. Connect directly above.
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let N=()=>{let Z=$K(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=u$(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),N()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),N()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),N()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>N());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),K=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,K)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                        <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                    </div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                        <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                            <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                            <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                        </label>
                        <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Reconnect</button>
                        <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Target</button>
                    </div>
                </div>
                <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:16px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:12px;position:relative;overflow:hidden;">
                    <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:0 12px 36px rgba(0,0,0,.35);border-radius:8px;background:#000;"></canvas>
                    <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${s4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=u$(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=u$(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",N=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${N}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let N=j?.reveal===!0;if(this.canvas.style.display=N||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=N||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let N=L7($,j,this.canvas.width,this.canvas.height);this.displayScale=N,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*N))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*N))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return X7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(T5(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=N6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~N6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of V7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(W7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=Z6(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??Z6(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((N)=>N.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let N=this.canvas?.getContext("2d",{alpha:!1});if(N){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);N.putImageData(Z,0,0),$=!0}}else for(let N of _.rects||[]){if(N.kind==="resize"){this.ensureCanvasSize(N.width,N.height);continue}if(N.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(N),$=!0;continue}if(N.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(N),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let N=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${N}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${N}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new w5);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,N=$.receive(j);for(let Z of N.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of N.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let N=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${N}`),this.updateDisplayInfo(`Display protocol error: ${N}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(N))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=_==null?null:String(_).trim(),j=await B7(),N={};if(j)N.pipeline=j,N.decodeRawRect=(Y,K,Q,B)=>j.decodeRawRectToRgba(Y,K,Q,B);let Z=u$(this.authPassword);if(Z!==null)N.password=Z;if($)N.encodings=$;if(this.protocol=new w5(N),this.hasRenderedFrame=!1,this.frameTimeoutId=null,this.canvas)this.canvas.style.display="none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display="";this.socketBoundary=new _6({url:_K(this.targetId),binaryType:"arraybuffer",onOpen:()=>{this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(Y)=>{this.applyMetrics(Y)},onMessage:(Y)=>{this.handleSocketMessage(Y)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{this.setSessionChromeVisible(!0),this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await eY(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${s4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var U6={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===_4||$.startsWith(`${_4}/`)?9000:!1},mount(_,$){return new m7(_,$)}};function w4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function jK(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let N=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=N?.[1]||j,Y=N?.[2]||"",K=N?.[3]||"",Q=String($||"").split("/").slice(0,-1).join("/"),q=Z.startsWith("/")?Z:`${Q?`${Q}/`:""}${Z}`,W=[];for(let U of q.split("/")){if(!U||U===".")continue;if(U===".."){if(W.length>0)W.pop();continue}W.push(U)}let V=W.join("/");return`${Q5(V)}${Y}${K}`}function c$(_){return _?.preview||null}function NK(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),N=j>=0?$.slice(j+1):$,Z=N.lastIndexOf(".");if(Z<=0||Z===N.length-1)return"none";return N.slice(Z+1)}function ZK(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function YK(_,$){let j=$?.path||_?.path||"",N=[];if($?.content_type)N.push(`<span><strong>type:</strong> ${w4($.content_type)}</span>`);if(typeof $?.size==="number")N.push(`<span><strong>size:</strong> ${w4(y_($.size))}</span>`);if($?.mtime)N.push(`<span><strong>modified:</strong> ${w4(r4($.mtime))}</span>`);if(N.push(`<span><strong>kind:</strong> ${w4(ZK($))}</span>`),N.push(`<span><strong>extension:</strong> ${w4(NK(j))}</span>`),j)N.push(`<span><strong>path:</strong> ${w4(j)}</span>`);if($?.truncated)N.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${N.join("")}</div>`}function KK(_){let $=c$(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=YK(_,$);if($.kind==="image"){let N=$.url||($.path?Q5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${w4(N)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let N=L_($.text||"",null,{rewriteImageSrc:(Z)=>jK(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${N}</div>`}return`${j}<pre class="workspace-preview-text"><code>${w4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class z6{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=KK(this.context)}getContent(){let _=c$(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=c$(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var F6={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=c$(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new z6(_,$)}},O6={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return c$(_)||_?.path?1:!1},mount(_,$){return new z6(_,$)}};var QK=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),qK={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},GK={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function h7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function g7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"document",Z=h7(j),Y=GK[Z]||"\uD83D\uDCC4",K=qK[Z]||"Office Document",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${g7(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${g7(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let B=Q.querySelector("#ov-open-tab");if(B)B.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(N)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var H6={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=h7(_?.path);if(!$||!QK.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new p7(_,$);return new c7(_,$)}};var BK=/\.(csv|tsv)$/i;function l7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class i7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${l7(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${l7(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let K=Y.querySelector("#csv-open-tab");if(K)K.addEventListener("click",()=>{let Q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class n7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var J6={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!BK.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new i7(_,$);return new n7(_,$)}};var XK=/\.pdf$/i;function VK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class d7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${VK(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class r7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var D6={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!XK.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new d7(_,$);return new r7(_,$)}};var WK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function E6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class o7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${E6(Z)}" alt="${E6(N)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${E6(N)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let K=Y.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let Q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class s7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var A6={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!WK.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new o7(_,$);return new s7(_,$)}};var LK=/\.(mp4|m4v|mov|webm|ogv)$/i;function UK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class a7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${UK(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class t7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var M6={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!LK.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new a7(_,$);return new t7(_,$)}};function zK(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function FK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var k6='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function e7(_){let $=String(_||"").trim();return $?$:k6}function OK(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function HK(_){let $="",j=32768;for(let N=0;N<_.length;N+=j)$+=String.fromCharCode(..._.subarray(N,N+j));return btoa($)}function JK(_,$="*"){try{let j=(Y)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},N=_.EditorUi;if(N?.prototype&&!N.prototype.__piclawWorkspaceSavePatched){let Y=N.prototype.saveData;N.prototype.saveData=function(K,Q,B,q,W,V){try{if(K&&B!=null&&j({filename:K,format:Q,data:B,mimeType:q,base64Encoded:Boolean(W),defaultMode:V}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Y.apply(this,arguments)},N.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(K,Q,B,q,W,V){try{if(Q&&j({filename:Q,data:K,mimeType:B,base64Encoded:Boolean(q),mode:W,folderId:V}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(N?.prototype&&N.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function _9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${HK(j)}`}class $9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${FK(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class j9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=OK(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(JK(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=k6,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await _9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await _9(_,"image/png");else this.xmlData=e7(await _.text());else if(_.status===404)this.xmlData=k6;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?e7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var P6={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!zK(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new $9(_,$);return new j9(_,$)}};class N9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((N)=>N!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let N=this.tabs.get(_);if(!N)return;if(this.tabs.delete(_),N.id=$,N.path=$,N.label=j||$.split("/").pop()||$,this.tabs.set($,N),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((N)=>N.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((N)=>N.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var s0=new N9;var R5="workspaceExplorerScale",DK=["compact","default","comfortable"],EK=new Set(DK),AK={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function Z9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return EK.has(j)?j:$}function I6(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),N=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||N&&j}}function MK(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function kK(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function C6(_={}){let $=MK(_),j=_.stored?Z9(_.stored,$):$;return kK(j,_)}function Y9(_){return AK[Z9(_)]}function PK(_){if(!_||_.kind!=="text")return!1;let $=Number(_?.size);return!Number.isFinite($)||$<=262144}function y6(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let N=$({path:j,mode:"edit"});if(!N||typeof N!=="object")return!1;return N.id!=="editor"}function K9(_,$,j={}){let N=j?.resolvePane;if(y6(_,N))return!0;return PK($)}var IK=60000,B9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function CK(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return y6($,(j)=>j1.resolve(j))}function X9(_,$,j,N=0,Z=[]){if(!j&&B9(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:N}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)X9(Y,$,j,N+1,Z);return Z}function Q9(_,$,j){if(!_)return"";let N=[],Z=(Y)=>{if(!j&&B9(Y))return;if(N.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let K of Y.children)Z(K)};return Z(_),N.join("|")}function w6(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,N=Array.isArray($.children)?$.children:null;if(!N)return _;let Z=j?new Map(j.map((Q)=>[Q?.path,Q])):new Map,Y=!j||j.length!==N.length,K=N.map((Q)=>{let B=w6(Z.get(Q.path),Q);if(B!==Z.get(Q.path))Y=!0;return B});return Y?{...$,children:K}:_}function S6(_,$,j){if(!_)return _;if(_.path===$)return w6(_,j);if(!Array.isArray(_.children))return _;let N=!1,Z=_.children.map((Y)=>{let K=S6(Y,$,j);if(K!==Y)N=!0;return K});return N?{..._,children:Z}:_}var V9=4,T6=14,yK=8,TK=16;function W9(_){if(!_)return 0;if(_.type==="file"){let N=Math.max(0,Number(_.size)||0);return _.__bytes=N,N}let $=Array.isArray(_.children)?_.children:[],j=0;for(let N of $)j+=W9(N);return _.__bytes=j,j}function L9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),N={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=V9)return N;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let Q of Z){let B=Math.max(0,Number(Q?.__bytes??Q?.size??0));if(B<=0)continue;if(Q.type==="dir")Y.push({kind:"dir",node:Q,size:B});else Y.push({kind:"file",name:Q.name,path:Q.path,size:B})}Y.sort((Q,B)=>B.size-Q.size);let K=Y;if(Y.length>T6){let Q=Y.slice(0,T6-1),B=Y.slice(T6-1),q=B.reduce((W,V)=>W+V.size,0);Q.push({kind:"other",name:`+${B.length} more`,path:`${N.path}/[other]`,size:q}),K=Q}return N.children=K.map((Q)=>{if(Q.kind==="dir")return L9(Q.node,$+1);return{name:Q.name,path:Q.path,size:Q.size,children:[]}}),N}function q9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function U9(_,$,j){let N=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${N.toFixed(1)} ${Z}% ${Y}%)`}function v5(_,$,j,N){return{x:_+j*Math.cos(N),y:$+j*Math.sin(N)}}function R6(_,$,j,N,Z,Y){let K=Math.PI*2-0.0001,Q=Y-Z>K?Z+K:Y,B=v5(_,$,N,Z),q=v5(_,$,N,Q),W=v5(_,$,j,Q),V=v5(_,$,j,Z),U=Q-Z>Math.PI?1:0;return[`M ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${N} ${N} 0 ${U} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var z9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function F9(_,$,j){let N=[],Z=[],Y=Math.max(0,Number($)||0),K=(Q,B,q,W)=>{let V=Array.isArray(Q?.children)?Q.children:[];if(!V.length)return;let U=Math.max(0,Number(Q.size)||0);if(U<=0)return;let E=q-B,J=B;V.forEach((A,T)=>{let H=Math.max(0,Number(A.size)||0);if(H<=0)return;let M=H/U,C=J,R=T===V.length-1?q:J+E*M;if(J=R,R-C<0.003)return;let D=z9[W];if(D){let u=U9(C,W,j);if(N.push({key:A.path,path:A.path,label:A.name,size:H,color:u,depth:W,startAngle:C,endAngle:R,innerRadius:D[0],outerRadius:D[1],d:R6(120,120,D[0],D[1],C,R)}),W===1)Z.push({key:A.path,name:A.name,size:H,pct:Y>0?H/Y*100:0,color:u})}if(W<V9)K(A,C,R,W+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:N,legend:Z}}function x6(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let N of j){let Z=x6(N,$);if(Z)return Z}return null}function O9(_,$,j,N){if(!j||j<=0)return{segments:[],legend:[]};let Z=z9[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,K=Math.PI*3/2,Q=U9(Y,1,N),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:Q,depth:1,startAngle:Y,endAngle:K,innerRadius:Z[0],outerRadius:Z[1],d:R6(120,120,Z[0],Z[1],Y,K)}],legend:[{key:q,name:_,size:j,pct:100,color:Q}]}}function G9(_,$=!1,j=!1){if(!_)return null;let N=W9(_),Z=L9(_,0),Y=Z.size||N,{segments:K,legend:Q}=F9(Z,Y,j);if(!K.length&&Y>0){let B=O9("[files]",Z.path,Y,j);K=B.segments,Q=B.legend}return{root:Z,totalSize:Y,segments:K,legend:Q,truncated:$,isDarkTheme:j}}function SK({payload:_}){if(!_)return null;let[$,j]=c(null),[N,Z]=c(_?.root?.path||"."),[Y,K]=c(()=>[_?.root?.path||"."]),[Q,B]=c(!1);p(()=>{let w=_?.root?.path||".";Z(w),K([w]),j(null)},[_?.root?.path,_?.totalSize]),p(()=>{if(!N)return;B(!0);let w=setTimeout(()=>B(!1),180);return()=>clearTimeout(w)},[N]);let q=y0(()=>{return x6(_.root,N)||_.root},[_?.root,N]),W=q?.size||_.totalSize||0,{segments:V,legend:U}=y0(()=>{let w=F9(q,W,_.isDarkTheme);if(w.segments.length>0)return w;if(W<=0)return w;let l=q?.children?.length?"Total":"[files]";return O9(l,q?.path||_?.root?.path||".",W,_.isDarkTheme)},[q,W,_.isDarkTheme,_?.root?.path]),[E,J]=c(V),A=y(new Map),T=y(0);p(()=>{let w=A.current,l=new Map(V.map((j0)=>[j0.key,j0])),t=performance.now(),V0=220,d=(j0)=>{let N0=Math.min(1,(j0-t)/220),Y0=N0*(2-N0),Q0=V.map((B0)=>{let z0=w.get(B0.key)||{startAngle:B0.startAngle,endAngle:B0.startAngle,innerRadius:B0.innerRadius,outerRadius:B0.innerRadius},O0=(l0,T0)=>l0+(T0-l0)*Y0,p0=O0(z0.startAngle,B0.startAngle),k0=O0(z0.endAngle,B0.endAngle),J0=O0(z0.innerRadius,B0.innerRadius),c0=O0(z0.outerRadius,B0.outerRadius);return{...B0,d:R6(120,120,J0,c0,p0,k0)}});if(J(Q0),N0<1)T.current=requestAnimationFrame(d)};if(T.current)cancelAnimationFrame(T.current);return T.current=requestAnimationFrame(d),A.current=l,()=>{if(T.current)cancelAnimationFrame(T.current)}},[V]);let H=E.length?E:V,M=W>0?y_(W):"0 B",C=q?.name||"",D=(C&&C!=="."?C:"Total")||"Total",u=M,a=Y.length>1,n=(w)=>{if(!w?.path)return;let l=x6(_.root,w.path);if(!l||!Array.isArray(l.children)||l.children.length===0)return;K((t)=>[...t,l.path]),Z(l.path),j(null)},g=()=>{if(!a)return;K((w)=>{let l=w.slice(0,-1);return Z(l[l.length-1]||_?.root?.path||"."),l}),j(null)};return z`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${Q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${H.length}
                data-base-size=${W}>
                ${H.map((w)=>z`
                    <path
                        key=${w.key}
                        d=${w.d}
                        fill=${w.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===w.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(w)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(w)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>n(w)}
                    >
                        <title>${w.label} — ${y_(w.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${a?" is-drill":""}`}
                    onClick=${g}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${D}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${u}</text>
                </g>
            </svg>
            ${U.length>0&&z`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((w)=>z`
                        <div key=${w.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${w.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${w.name}>${w.name}</span>
                            <span class="workspace-folder-starburst-size">${y_(w.size)}</span>
                            <span class="workspace-folder-starburst-pct">${w.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&z`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function xK({mediaId:_}){let[$,j]=c(null);if(p(()=>{if(!_)return;j$(_).then(j).catch(()=>{})},[_]),!$)return null;let N=$.filename||"file",Z=$.metadata?.size?y_($.metadata.size):"";return z`
        <a href=${C_(_)} download=${N} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${N}</span>
                ${Z&&z`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function H9({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:N,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:K,terminalVisible:Q=!1}){let[B,q]=c(null),[W,V]=c(new Set(["."])),[U,E]=c(null),[J,A]=c(null),[T,H]=c(""),[M,C]=c(null),[R,D]=c(null),[u,a]=c(!0),[n,g]=c(!1),[w,l]=c(null),[t,V0]=c(()=>N$("workspaceShowHidden",!1)),[d,j0]=c(!1),[N0,Y0]=c(null),[Q0,B0]=c(null),[U0,z0]=c(null),[O0,p0]=c(!1),[k0,J0]=c(null),[c0,l0]=c(()=>q9()),[T0,X0]=c(()=>C6({stored:W_(R5),...I6()})),[P0,D0]=c(!1),q0=y(W),I0=y(""),n0=y(null),m0=y(0),W1=y(new Set),A1=y(null),v0=y(new Map),i0=y(_),N1=y(N),Q1=y(null),d0=y(null),T1=y(null),Z1=y(null),f1=y(null),q1=y(null),p1=y("."),g0=y(null),e1=y({path:null,dragging:!1,startX:0,startY:0}),B1=y({path:null,dragging:!1,startX:0,startY:0}),L1=y({path:null,timer:0}),O1=y(!1),C0=y(0),H1=y(new Map),S0=y(null),w0=y(null),a0=y(null),d1=y(null),m=y(null),G0=y(null),E0=y(t),F0=y($),r0=y(j??$),__=y(0),c1=y(U0),i_=y(d),S_=y(N0),$_=y(null),t0=y({x:0,y:0}),S1=y(0),r1=y(null),x1=y(U),x_=y(J),w_=y(null),z4=y(M);i0.current=_,N1.current=N,p(()=>{q0.current=W},[W]),p(()=>{E0.current=t},[t]),p(()=>{F0.current=$},[$]),p(()=>{r0.current=j??$},[j,$]),p(()=>{c1.current=U0},[U0]),p(()=>{if(typeof window>"u")return;let F=()=>{X0(C6({stored:W_(R5),...I6()}))};F();let P=()=>F(),f=()=>F(),v=(Z0)=>{if(!Z0||Z0.key===null||Z0.key===R5)F()};window.addEventListener("resize",P),window.addEventListener("focus",f),window.addEventListener("storage",v);let o=window.matchMedia?.("(pointer: coarse)"),K0=window.matchMedia?.("(hover: none)"),i=(Z0,A0)=>{if(!Z0)return;if(Z0.addEventListener)Z0.addEventListener("change",A0);else if(Z0.addListener)Z0.addListener(A0)},W0=(Z0,A0)=>{if(!Z0)return;if(Z0.removeEventListener)Z0.removeEventListener("change",A0);else if(Z0.removeListener)Z0.removeListener(A0)};return i(o,P),i(K0,P),()=>{window.removeEventListener("resize",P),window.removeEventListener("focus",f),window.removeEventListener("storage",v),W0(o,P),W0(K0,P)}},[]),p(()=>{let F=(P)=>{let f=P?.detail?.path;if(!f)return;let v=f.split("/"),o=[];for(let K0=1;K0<v.length;K0++)o.push(v.slice(0,K0).join("/"));if(o.length)V((K0)=>{let i=new Set(K0);i.add(".");for(let W0 of o)i.add(W0);return i});E(f),requestAnimationFrame(()=>{let K0=document.querySelector(`[data-path="${CSS.escape(f)}"]`);if(K0)K0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",F),()=>window.removeEventListener("workspace-reveal-path",F)},[]),p(()=>{i_.current=d},[d]),p(()=>{S_.current=N0},[N0]),p(()=>{x1.current=U},[U]),p(()=>{x_.current=J},[J]),p(()=>{z4.current=M},[M]),p(()=>{if(typeof window>"u"||typeof document>"u")return;let F=()=>l0(q9());F();let P=window.matchMedia?.("(prefers-color-scheme: dark)"),f=()=>F();if(P?.addEventListener)P.addEventListener("change",f);else if(P?.addListener)P.addListener(f);let v=typeof MutationObserver<"u"?new MutationObserver(()=>F()):null;if(v?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)v?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(P?.removeEventListener)P.removeEventListener("change",f);else if(P?.removeListener)P.removeListener(f);v?.disconnect()}},[]),p(()=>{if(!J)return;let F=f1.current;if(!F)return;let P=requestAnimationFrame(()=>{try{F.focus(),F.select()}catch{}});return()=>cancelAnimationFrame(P)},[J]),p(()=>{if(!P0)return;let F=(f)=>{let v=f?.target;if(!(v instanceof Element))return;if(m.current?.contains(v))return;if(G0.current?.contains(v))return;D0(!1)},P=(f)=>{if(f?.key==="Escape")D0(!1),G0.current?.focus?.()};return document.addEventListener("mousedown",F),document.addEventListener("touchstart",F,{passive:!0}),document.addEventListener("keydown",P),()=>{document.removeEventListener("mousedown",F),document.removeEventListener("touchstart",F),document.removeEventListener("keydown",P)}},[P0]);let F4=async(F,P={})=>{let f=Boolean(P?.autoOpen),v=String(F||"").trim();g(!0),C(null),D(null);try{let o=await J8(v,20000);if(f&&v&&K9(v,o,{resolvePane:(K0)=>j1.resolve(K0)}))return N1.current?.(v,o),o;return C(o),o}catch(o){let K0={error:o.message||"Failed to load preview"};return C(K0),K0}finally{g(!1)}};Q1.current=F4;let j_=async()=>{if(!F0.current)return;try{let F=await P$("",1,E0.current),P=Q9(F.root,q0.current,E0.current);if(P===I0.current){a(!1);return}if(I0.current=P,n0.current=F.root,!m0.current)m0.current=requestAnimationFrame(()=>{m0.current=0,q((f)=>w6(f,n0.current)),a(!1)})}catch(F){l(F.message||"Failed to load workspace"),a(!1)}},n_=async(F)=>{if(!F)return;if(W1.current.has(F))return;W1.current.add(F);try{let P=await P$(F,1,E0.current);q((f)=>S6(f,F,P.root))}catch(P){l(P.message||"Failed to load workspace")}finally{W1.current.delete(F)}};d0.current=n_;let Y1=x(()=>{let F=U;if(!F)return".";let P=v0.current?.get(F);if(P&&P.type==="dir")return P.path;if(F==="."||!F.includes("/"))return".";let f=F.split("/");return f.pop(),f.join("/")||"."},[U]),$4=x((F)=>{let P=F?.closest?.(".workspace-row");if(!P)return null;let f=P.dataset.path,v=P.dataset.type;if(!f)return null;if(v==="dir")return f;if(f.includes("/")){let o=f.split("/");return o.pop(),o.join("/")||"."}return"."},[]),z_=x((F)=>{return $4(F?.target||null)},[$4]),h0=x((F)=>{c1.current=F,z0(F)},[]),U1=x(()=>{let F=L1.current;if(F?.timer)clearTimeout(F.timer);L1.current={path:null,timer:0}},[]),f0=x((F)=>{if(!F||F==="."){U1();return}let P=v0.current?.get(F);if(!P||P.type!=="dir"){U1();return}if(q0.current?.has(F)){U1();return}if(L1.current?.path===F)return;U1();let f=setTimeout(()=>{L1.current={path:null,timer:0},d0.current?.(F),V((v)=>{let o=new Set(v);return o.add(F),o})},600);L1.current={path:F,timer:f}},[U1]),w1=x((F,P)=>{if(t0.current={x:F,y:P},S1.current)return;S1.current=requestAnimationFrame(()=>{S1.current=0;let f=$_.current;if(!f)return;let v=t0.current;f.style.transform=`translate(${v.x+12}px, ${v.y+12}px)`})},[]),J1=x((F)=>{if(!F)return;let f=(v0.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!f)return;B0({path:F,label:f})},[]),j4=x(()=>{if(B0(null),S1.current)cancelAnimationFrame(S1.current),S1.current=0;if($_.current)$_.current.style.transform="translate(-9999px, -9999px)"},[]),O4=x((F)=>{if(!F)return".";let P=v0.current?.get(F);if(P&&P.type==="dir")return P.path;if(F==="."||!F.includes("/"))return".";let f=F.split("/");return f.pop(),f.join("/")||"."},[]),F_=x(()=>{A(null),H("")},[]),R4=x((F)=>{if(!F)return;let f=(v0.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!f||F===".")return;A(F),H(f)},[]),i$=x(async()=>{let F=x_.current;if(!F)return;let P=(T||"").trim();if(!P){F_();return}let f=v0.current?.get(F),v=(f?.name||F.split("/").pop()||F).trim();if(P===v){F_();return}try{let K0=(await A8(F,P))?.path||F,i=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(F_(),l(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:F,newPath:K0,type:f?.type||"file"}})),f?.type==="dir")V((W0)=>{let Z0=new Set;for(let A0 of W0)if(A0===F)Z0.add(K0);else if(A0.startsWith(`${F}/`))Z0.add(`${K0}${A0.slice(F.length)}`);else Z0.add(A0);return Z0});if(E(K0),f?.type==="dir")C(null),g(!1),D(null);else Q1.current?.(K0);d0.current?.(i)}catch(o){l(o?.message||"Failed to rename file")}},[F_,T]),a4=x(async(F)=>{let v=F||".";for(let o=0;o<50;o+=1){let i=`untitled${o===0?"":`-${o}`}.md`;try{let Z0=(await E8(v,i,""))?.path||(v==="."?i:`${v}/${i}`);if(v&&v!==".")V((A0)=>new Set([...A0,v]));E(Z0),l(null),d0.current?.(v),Q1.current?.(Z0);return}catch(W0){if(W0?.status===409||W0?.code==="file_exists")continue;l(W0?.message||"Failed to create file");return}}l("Failed to create file (untitled name already in use).")},[]),O_=x((F)=>{if(F?.stopPropagation?.(),O0)return;let P=O4(x1.current);a4(P)},[O0,O4,a4]);p(()=>{if(typeof window>"u")return;let F=(P)=>{let f=P?.detail?.updates||[];if(!Array.isArray(f)||f.length===0)return;q((W0)=>{let Z0=W0;for(let A0 of f){if(!A0?.root)continue;if(!Z0||A0.path==="."||!A0.path)Z0=A0.root;else Z0=S6(Z0,A0.path,A0.root)}if(Z0)I0.current=Q9(Z0,q0.current,E0.current);return a(!1),Z0});let v=x1.current;if(Boolean(v)&&f.some((W0)=>{let Z0=W0?.path||"";if(!Z0||Z0===".")return!0;return v===Z0||v.startsWith(`${Z0}/`)||Z0.startsWith(`${v}/`)}))H1.current.clear();if(!v||!z4.current)return;let K0=v0.current?.get(v);if(K0&&K0.type==="dir")return;if(f.some((W0)=>{let Z0=W0?.path||"";if(!Z0||Z0===".")return!0;return v===Z0||v.startsWith(`${Z0}/`)}))Q1.current?.(v)};return window.addEventListener("workspace-update",F),()=>window.removeEventListener("workspace-update",F)},[]),A1.current=j_;let W$=y(()=>{if(typeof window>"u")return;let F=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),P=r0.current??F0.current,f=document.visibilityState!=="hidden"&&(P||F.matches&&F0.current);I$(f,E0.current).catch(()=>{})}).current,N_=y(0),Z_=y(()=>{if(N_.current)clearTimeout(N_.current);N_.current=setTimeout(()=>{N_.current=0,W$()},250)}).current;p(()=>{if(F0.current)A1.current?.();Z_()},[$,j]),p(()=>{A1.current(),W$();let F=setInterval(()=>A1.current(),IK),P=Z$("previewHeight",null),f=Number.isFinite(P)?Math.min(Math.max(P,80),600):280;if(C0.current=f,T1.current)T1.current.style.setProperty("--preview-height",`${f}px`);let v=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),o=()=>Z_();if(v.addEventListener)v.addEventListener("change",o);else if(v.addListener)v.addListener(o);return document.addEventListener("visibilitychange",o),()=>{if(clearInterval(F),m0.current)cancelAnimationFrame(m0.current),m0.current=0;if(v.removeEventListener)v.removeEventListener("change",o);else if(v.removeListener)v.removeListener(o);if(document.removeEventListener("visibilitychange",o),N_.current)clearTimeout(N_.current),N_.current=0;if(g0.current)clearTimeout(g0.current),g0.current=null;I$(!1,E0.current).catch(()=>{})}},[]);let d_=y0(()=>X9(B,W,t),[B,W,t]),H_=y0(()=>new Map(d_.map((F)=>[F.node.path,F.node])),[d_]),b1=y0(()=>Y9(T0),[T0]);v0.current=H_;let b0=(U?v0.current.get(U):null)?.type==="dir";p(()=>{if(!U||!b0){J0(null),S0.current=null,w0.current=null;return}let F=U,P=`${t?"hidden":"visible"}:${U}`,f=H1.current,v=f.get(P);if(v?.root){f.delete(P),f.set(P,v);let i=G9(v.root,Boolean(v.truncated),c0);if(i)S0.current=i,w0.current=U,J0({loading:!1,error:null,payload:i});return}let o=S0.current,K0=w0.current;J0({loading:!0,error:null,payload:K0===U?o:null}),P$(U,yK,t).then((i)=>{if(x1.current!==F)return;let W0={root:i?.root,truncated:Boolean(i?.truncated)};f.delete(P),f.set(P,W0);while(f.size>TK){let A0=f.keys().next().value;if(!A0)break;f.delete(A0)}let Z0=G9(W0.root,W0.truncated,c0);S0.current=Z0,w0.current=U,J0({loading:!1,error:null,payload:Z0})}).catch((i)=>{if(x1.current!==F)return;J0({loading:!1,error:i?.message||"Failed to load folder size chart",payload:K0===U?o:null})})},[U,b0,t,c0]);let Y_=Boolean(M&&M.kind==="text"&&!b0&&(!M.size||M.size<=262144)),H4=Y_?"Open in editor":M?.size>262144?"File too large to edit":"File is not editable",J4=Boolean(U&&U!=="."),R_=Boolean(U&&!b0),J_=Boolean(U&&!b0),G_=U&&b0?q5(U,t):null,D1=x(()=>D0(!1),[]),G1=x(async(F)=>{D1();try{await F?.()}catch{}},[D1]);p(()=>{let F=a0.current;if(d1.current)d1.current.dispose(),d1.current=null;if(!F)return;if(F.innerHTML="",!U||b0||!M||M.error)return;let P={path:U,content:typeof M.text==="string"?M.text:void 0,mtime:M.mtime,size:M.size,preview:M,mode:"view"},f=j1.resolve(P)||j1.get("workspace-preview-default");if(!f)return;let v=f.mount(F,P);return d1.current=v,()=>{if(d1.current===v)v.dispose(),d1.current=null;F.innerHTML=""}},[U,b0,M]);let o1=(F)=>{let P=F?.target;if(P instanceof Element)return P;return P?.parentElement||null},I1=(F)=>{return Boolean(F?.closest?.(".workspace-node-icon, .workspace-label-text"))},N4=y((F)=>{let P=o1(F),f=P?.closest?.("[data-path]");if(!f)return;let v=f.dataset.path;if(!v||v===".")return;let o=Boolean(P?.closest?.("button"))||Boolean(P?.closest?.("a"))||Boolean(P?.closest?.("input")),K0=Boolean(P?.closest?.(".workspace-caret"));if(o||K0)return;if(x_.current===v)return;R4(v)}).current,Z4=y((F)=>{if(O1.current){O1.current=!1;return}let P=o1(F),f=P?.closest?.("[data-path]");if(Z1.current?.focus?.(),!f)return;let v=f.dataset.path,o=f.dataset.type,K0=Boolean(P?.closest?.(".workspace-caret")),i=Boolean(P?.closest?.("button"))||Boolean(P?.closest?.("a"))||Boolean(P?.closest?.("input")),W0=x1.current===v,Z0=x_.current;if(Z0){if(Z0===v)return;F_()}let A0=o==="file"&&w_.current===v&&!K0&&!i;if(o==="dir"){if(w_.current=null,E(v),C(null),D(null),g(!1),!q0.current.has(v))d0.current?.(v);if(W0&&!K0)return;V((A_)=>{let L=new Set(A_);if(L.has(v))L.delete(v);else L.add(v);return L})}else{w_.current=null,E(v);let C1=v0.current.get(v);if(C1)i0.current?.(C1.path,C1);if(!i&&!K0&&CK(v))N1.current?.(v,z4.current);else{let L=!i&&!K0;Q1.current?.(v,{autoOpen:L})}}}).current,D4=y(()=>{I0.current="",A1.current(),Array.from(q0.current||[]).filter((P)=>P&&P!==".").forEach((P)=>d0.current?.(P))}).current,s1=y(()=>{w_.current=null,E(null),C(null),D(null),g(!1)}).current,Y4=y(()=>{V0((F)=>{let P=!F;if(typeof window<"u")K1("workspaceShowHidden",String(P));return E0.current=P,I$(!0,P).catch(()=>{}),I0.current="",A1.current?.(),Array.from(q0.current||[]).filter((v)=>v&&v!==".").forEach((v)=>d0.current?.(v)),P})}).current,v4=y((F)=>{if(o1(F)?.closest?.("[data-path]"))return;s1()}).current,v_=x(async(F)=>{if(!F)return;let P=F.split("/").pop()||F;if(!window.confirm(`Delete "${P}"? This cannot be undone.`))return;try{await k8(F);let v=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(x1.current===F)s1();d0.current?.(v),l(null)}catch(v){C((o)=>({...o||{},error:v.message||"Failed to delete file"}))}},[s1]),D_=x((F)=>{let P=Z1.current;if(!P||!F||typeof CSS>"u"||typeof CSS.escape!=="function")return;P.querySelector(`[data-path="${CSS.escape(F)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),B_=x((F)=>{let P=d_;if(!P||P.length===0)return;let f=U?P.findIndex((v)=>v.node.path===U):-1;if(F.key==="ArrowDown"){F.preventDefault();let v=Math.min(f+1,P.length-1),o=P[v];if(!o)return;if(E(o.node.path),o.node.type!=="dir")i0.current?.(o.node.path,o.node),Q1.current?.(o.node.path);else C(null),g(!1),D(null);D_(o.node.path);return}if(F.key==="ArrowUp"){F.preventDefault();let v=f<=0?0:f-1,o=P[v];if(!o)return;if(E(o.node.path),o.node.type!=="dir")i0.current?.(o.node.path,o.node),Q1.current?.(o.node.path);else C(null),g(!1),D(null);D_(o.node.path);return}if(F.key==="ArrowRight"&&f>=0){let v=P[f];if(v?.node?.type==="dir"&&!W.has(v.node.path))F.preventDefault(),d0.current?.(v.node.path),V((o)=>new Set([...o,v.node.path]));return}if(F.key==="ArrowLeft"&&f>=0){let v=P[f];if(v?.node?.type==="dir"&&W.has(v.node.path))F.preventDefault(),V((o)=>{let K0=new Set(o);return K0.delete(v.node.path),K0});return}if(F.key==="Enter"&&f>=0){F.preventDefault();let v=P[f];if(!v)return;let o=v.node.path;if(v.node.type==="dir"){if(!q0.current.has(o))d0.current?.(o);V((i)=>{let W0=new Set(i);if(W0.has(o))W0.delete(o);else W0.add(o);return W0}),C(null),D(null),g(!1)}else i0.current?.(o,v.node),Q1.current?.(o);return}if((F.key==="Delete"||F.key==="Backspace")&&f>=0){let v=P[f];if(!v||v.node.type==="dir")return;F.preventDefault(),v_(v.node.path);return}if(F.key==="Escape")F.preventDefault(),s1()},[s1,v_,W,d_,D_,U]),f_=x((F)=>{let P=o1(F),f=P?.closest?.(".workspace-row");if(!f)return;let v=f.dataset.type,o=f.dataset.path;if(!o||o===".")return;if(x_.current===o)return;let K0=F?.touches?.[0];if(!K0)return;if(e1.current={path:I1(P)?o:null,dragging:!1,startX:K0.clientX,startY:K0.clientY},v!=="file")return;if(g0.current)clearTimeout(g0.current);g0.current=setTimeout(()=>{if(g0.current=null,e1.current?.dragging)return;v_(o)},600)},[v_]),u1=x(()=>{if(g0.current)clearTimeout(g0.current),g0.current=null;let F=e1.current;if(F?.dragging&&F.path){let P=c1.current||Y1(),f=r1.current;if(typeof f==="function")f(F.path,P)}e1.current={path:null,dragging:!1,startX:0,startY:0},__.current=0,j0(!1),Y0(null),h0(null),U1(),j4()},[Y1,j4,h0,U1]),f4=x((F)=>{let P=e1.current,f=F?.touches?.[0];if(!f||!P?.path){if(g0.current)clearTimeout(g0.current),g0.current=null;return}let v=Math.abs(f.clientX-P.startX),o=Math.abs(f.clientY-P.startY),K0=v>8||o>8;if(K0&&g0.current)clearTimeout(g0.current),g0.current=null;if(!P.dragging&&K0)P.dragging=!0,j0(!0),Y0("move"),J1(P.path);if(P.dragging){F.preventDefault(),w1(f.clientX,f.clientY);let i=document.elementFromPoint(f.clientX,f.clientY),W0=$4(i)||Y1();if(c1.current!==W0)h0(W0);f0(W0)}},[$4,Y1,J1,w1,h0,f0]),b4=y((F)=>{F.preventDefault();let P=T1.current;if(!P)return;let f=F.clientY,v=C0.current||280,o=F.currentTarget;o.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let K0=f,i=(Z0)=>{K0=Z0.clientY;let A0=P.clientHeight-80,C1=Math.min(Math.max(v-(Z0.clientY-f),80),A0);P.style.setProperty("--preview-height",`${C1}px`),C0.current=C1},W0=()=>{let Z0=P.clientHeight-80,A0=Math.min(Math.max(v-(K0-f),80),Z0);C0.current=A0,o.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("previewHeight",String(Math.round(A0))),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",W0)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",W0)}).current,E4=y((F)=>{F.preventDefault();let P=T1.current;if(!P)return;let f=F.touches[0];if(!f)return;let v=f.clientY,o=C0.current||280,K0=F.currentTarget;K0.classList.add("dragging"),document.body.style.userSelect="none";let i=(Z0)=>{let A0=Z0.touches[0];if(!A0)return;Z0.preventDefault();let C1=P.clientHeight-80,A_=Math.min(Math.max(o-(A0.clientY-v),80),C1);P.style.setProperty("--preview-height",`${A_}px`),C0.current=A_},W0=()=>{K0.classList.remove("dragging"),document.body.style.userSelect="",K1("previewHeight",String(Math.round(C0.current||o))),document.removeEventListener("touchmove",i),document.removeEventListener("touchend",W0),document.removeEventListener("touchcancel",W0)};document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",W0),document.addEventListener("touchcancel",W0)}).current,r_=async()=>{if(!U)return;try{let F=await D8(U);if(F.media_id)D(F.media_id)}catch(F){C((P)=>({...P||{},error:F.message||"Failed to attach"}))}},b_=async()=>{if(!U||b0)return;await v_(U)},K4=(F)=>{return Array.from(F?.dataTransfer?.types||[]).includes("Files")},R1=x((F)=>{if(!K4(F))return;if(F.preventDefault(),__.current+=1,!i_.current)j0(!0);Y0("upload");let P=z_(F)||Y1();h0(P),f0(P)},[Y1,z_,h0,f0]),u_=x((F)=>{if(!K4(F))return;if(F.preventDefault(),F.dataTransfer)F.dataTransfer.dropEffect="copy";if(!i_.current)j0(!0);if(S_.current!=="upload")Y0("upload");let P=z_(F)||Y1();if(c1.current!==P)h0(P);f0(P)},[Y1,z_,h0,f0]),m_=x((F)=>{if(!K4(F))return;if(F.preventDefault(),__.current=Math.max(0,__.current-1),__.current===0)j0(!1),Y0(null),h0(null),U1()},[h0,U1]),o_=x(async(F,P=".")=>{let f=Array.from(F||[]);if(f.length===0)return;let v=P&&P!==""?P:".",o=v!=="."?v:"workspace root";p0(!0);try{let K0=null;for(let i of f)try{K0=await K5(i,v)}catch(W0){let Z0=W0?.status,A0=W0?.code;if(Z0===409||A0==="file_exists"){let C1=i?.name||"file";if(!window.confirm(`"${C1}" already exists in ${o}. Overwrite?`))continue;K0=await K5(i,v,{overwrite:!0})}else throw W0}if(K0?.path)w_.current=K0.path,E(K0.path),Q1.current?.(K0.path);d0.current?.(v)}catch(K0){l(K0.message||"Failed to upload file")}finally{p0(!1)}},[]),A4=x(async(F,P)=>{if(!F)return;let f=v0.current?.get(F);if(!f)return;let v=P&&P!==""?P:".",o=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(v===o)return;try{let i=(await M8(F,v))?.path||F;if(f.type==="dir")V((W0)=>{let Z0=new Set;for(let A0 of W0)if(A0===F)Z0.add(i);else if(A0.startsWith(`${F}/`))Z0.add(`${i}${A0.slice(F.length)}`);else Z0.add(A0);return Z0});if(E(i),f.type==="dir")C(null),g(!1),D(null);else Q1.current?.(i);d0.current?.(o),d0.current?.(v)}catch(K0){l(K0?.message||"Failed to move entry")}},[]);r1.current=A4;let z1=x(async(F)=>{if(!K4(F))return;F.preventDefault(),__.current=0,j0(!1),Y0(null),z0(null),U1();let P=Array.from(F?.dataTransfer?.files||[]);if(P.length===0)return;let f=c1.current||z_(F)||Y1();await o_(P,f)},[Y1,z_,o_]),M4=x((F)=>{if(F?.stopPropagation?.(),O0)return;let P=F?.currentTarget?.dataset?.uploadTarget||".";p1.current=P,q1.current?.click()},[O0]),a1=x(()=>{if(O0)return;let F=x1.current,P=F?v0.current?.get(F):null;p1.current=P?.type==="dir"?P.path:".",q1.current?.click()},[O0]),K_=x(()=>{G1(()=>O_(null))},[G1,O_]),E_=x(()=>{G1(()=>a1())},[G1,a1]),u4=x(()=>{G1(()=>D4())},[G1,D4]),k4=x(()=>{G1(()=>Y4())},[G1,Y4]),Q4=x(()=>{if(!U||!Y_)return;G1(()=>N1.current?.(U,M))},[G1,U,Y_,M]),P4=x(()=>{if(!U||U===".")return;G1(()=>R4(U))},[G1,U,R4]),X_=x(()=>{if(!U||b0)return;G1(()=>b_())},[G1,U,b0,b_]),m4=x(()=>{if(!U||b0)return;G1(()=>r_())},[G1,U,b0,r_]),g4=x(()=>{if(!G_)return;if(D1(),typeof window<"u")window.open(G_,"_blank","noopener")},[D1,G_]),I4=x(()=>{D1(),Z?.()},[D1,Z]),t4=x(()=>{D1(),Y?.()},[D1,Y]),s_=x(()=>{D1(),K?.()},[D1,K]),h4=x((F)=>{if(!F||F.button!==0)return;let P=F.currentTarget;if(!P||!P.dataset)return;let f=P.dataset.path;if(!f||f===".")return;if(x_.current===f)return;let v=o1(F);if(v?.closest?.("button, a, input, .workspace-caret"))return;if(!I1(v))return;F.preventDefault(),B1.current={path:f,dragging:!1,startX:F.clientX,startY:F.clientY};let o=(i)=>{let W0=B1.current;if(!W0?.path)return;let Z0=Math.abs(i.clientX-W0.startX),A0=Math.abs(i.clientY-W0.startY),C1=Z0>4||A0>4;if(!W0.dragging&&C1)W0.dragging=!0,O1.current=!0,j0(!0),Y0("move"),J1(W0.path),w1(i.clientX,i.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(W0.dragging){i.preventDefault(),w1(i.clientX,i.clientY);let A_=document.elementFromPoint(i.clientX,i.clientY),L=$4(A_)||Y1();if(c1.current!==L)h0(L);f0(L)}},K0=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",K0);let i=B1.current;if(i?.dragging&&i.path){let W0=c1.current||Y1(),Z0=r1.current;if(typeof Z0==="function")Z0(i.path,W0)}B1.current={path:null,dragging:!1,startX:0,startY:0},__.current=0,j0(!1),Y0(null),h0(null),U1(),j4(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{O1.current=!1},0)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",K0)},[$4,Y1,J1,w1,j4,h0,f0,U1]),g_=x(async(F)=>{let P=Array.from(F?.target?.files||[]);if(P.length===0)return;let f=p1.current||".";if(await o_(P,f),p1.current=".",F?.target)F.target.value=""},[o_]);return z`
        <aside
            class=${`workspace-sidebar${d?" workspace-drop-active":""}`}
            data-workspace-scale=${T0}
            ref=${T1}
            onDragEnter=${R1}
            onDragOver=${u_}
            onDragLeave=${m_}
            onDrop=${z1}
        >
            <input type="file" multiple style="display:none" ref=${q1} onChange=${g_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${G0}
                            class=${`workspace-menu-button${P0?" active":""}`}
                            onClick=${(F)=>{F.stopPropagation(),D0((P)=>!P)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${P0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${P0&&z`
                            <div class="workspace-menu-dropdown" ref=${m} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${K_} disabled=${O0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${E_} disabled=${O0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${u4}>Refresh tree</button>
                                <button class=${`workspace-menu-item${t?" active":""}`} role="menuitem" onClick=${k4}>
                                    ${t?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&z`<div class="workspace-menu-separator"></div>`}
                                ${U&&!b0&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q4} disabled=${!Y_}>Open in editor</button>
                                `}
                                ${J4&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P4}>Rename selected</button>
                                `}
                                ${J_&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m4}>Download selected file</button>
                                `}
                                ${G_&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${g4}>Download selected folder (zip)</button>
                                `}
                                ${R_&&z`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${X_}>Delete selected file</button>
                                `}

                                ${(Z||Y||K)&&z`<div class="workspace-menu-separator"></div>`}
                                ${Z&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I4}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${t4}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${K&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${s_}>
                                        ${Q?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${O_} title="New file" disabled=${O0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${D4} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${v4}>
                ${O0&&z`<div class="workspace-drop-hint">Uploading…</div>`}
                ${u&&z`<div class="workspace-loading">Loading…</div>`}
                ${w&&z`<div class="workspace-error">${w}</div>`}
                ${B&&z`
                    <div
                        class="workspace-tree-list"
                        ref=${Z1}
                        tabIndex="0"
                        onClick=${Z4}
                        onDblClick=${N4}
                        onKeyDown=${B_}
                        onTouchStart=${f_}
                        onTouchEnd=${u1}
                        onTouchMove=${f4}
                        onTouchCancel=${u1}
                    >
                        ${d_.map(({node:F,depth:P})=>{let f=F.type==="dir",v=F.path===U,o=F.path===J,K0=f&&W.has(F.path),i=U0&&F.path===U0,W0=Array.isArray(F.children)&&F.children.length>0?F.children.length:Number(F.child_count)||0;return z`
                                <div
                                    key=${F.path}
                                    class=${`workspace-row${v?" selected":""}${i?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+P*b1.indentPx}px`}}
                                    data-path=${F.path}
                                    data-type=${F.type}
                                    onMouseDown=${h4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${f?K0?z`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:z`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${f?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${f?z`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:z`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${o?z`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${f1}
                                                value=${T}
                                                onInput=${(Z0)=>H(Z0?.target?.value||"")}
                                                onKeyDown=${(Z0)=>{if(Z0.key==="Enter")Z0.preventDefault(),i$();else if(Z0.key==="Escape")Z0.preventDefault(),F_()}}
                                                onBlur=${F_}
                                                onClick=${(Z0)=>Z0.stopPropagation()}
                                            />
                                        `:z`<span class="workspace-label"><span class="workspace-label-text">${F.name}</span></span>`}
                                    ${f&&!K0&&W0>0&&z`
                                        <span class="workspace-count">${W0}</span>
                                    `}
                                    ${f&&z`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${F.path}
                                            title="Upload files to this folder"
                                            onClick=${M4}
                                            disabled=${O0}
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
            ${U&&z`
                <div class="workspace-preview-splitter-h" onMouseDown=${b4} onTouchStart=${E4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${O_} title="New file" disabled=${O0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!b0&&z`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>Y_&&N1.current?.(U,M)}
                                    title=${H4}
                                    disabled=${!Y_}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${b_}
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
                            ${b0?z`
                                    <button class="workspace-download" onClick=${a1}
                                        title="Upload files to this folder" disabled=${O0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${q5(U,t)}
                                        title="Download folder as zip" onClick=${(F)=>F.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:z`<button class="workspace-download" onClick=${r_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${n&&z`<div class="workspace-loading">Loading preview…</div>`}
                    ${M?.error&&z`<div class="workspace-error">${M.error}</div>`}
                    ${b0&&z`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${k0?.loading&&z`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${k0?.error&&z`<div class="workspace-error">${k0.error}</div>`}
                        ${k0?.payload&&k0.payload.segments?.length>0&&z`
                            <${SK} payload=${k0.payload} />
                        `}
                        ${k0?.payload&&(!k0.payload.segments||k0.payload.segments.length===0)&&z`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${M&&!M.error&&!b0&&z`
                        <div class="workspace-preview-body" ref=${a0}></div>
                    `}
                    ${R&&z`
                        <div class="workspace-download-card">
                            <${xK} mediaId=${R} />
                        </div>
                    `}
                </div>
            `}
            ${Q0&&z`
                <div class="workspace-drag-ghost" ref=${$_}>${Q0.label}</div>
            `}
        </aside>
    `}var wK=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,RK=/\.(csv|tsv)$/i,vK=/\.pdf$/i,fK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,J9=/\.drawio(\.xml|\.svg|\.png)?$/i;function D9({tabs:_,activeId:$,onActivate:j,onClose:N,onCloseOthers:Z,onCloseAll:Y,onTogglePin:K,onTogglePreview:Q,previewTabs:B,onToggleDock:q,dockVisible:W,onToggleZen:V,zenMode:U,onPopOutTab:E}){let[J,A]=c(null),T=y(null);p(()=>{if(!J)return;let D=(u)=>{if(u.type==="keydown"&&u.key!=="Escape")return;A(null)};return document.addEventListener("click",D),document.addEventListener("keydown",D),()=>{document.removeEventListener("click",D),document.removeEventListener("keydown",D)}},[J]),p(()=>{let D=(u)=>{if(u.ctrlKey&&u.key==="Tab"){if(u.preventDefault(),!_.length)return;let a=_.findIndex((n)=>n.id===$);if(u.shiftKey){let n=_[(a-1+_.length)%_.length];j?.(n.id)}else{let n=_[(a+1)%_.length];j?.(n.id)}return}if((u.ctrlKey||u.metaKey)&&u.key==="w"){let a=document.querySelector(".editor-pane");if(a&&a.contains(document.activeElement)){if(u.preventDefault(),$)N?.($)}}};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[_,$,j,N]);let H=x((D,u)=>{if(D.button===1){D.preventDefault(),N?.(u);return}if(D.button===0)j?.(u)},[j,N]),M=x((D,u)=>{D.preventDefault(),A({id:u,x:D.clientX,y:D.clientY})},[]),C=x((D)=>{D.preventDefault(),D.stopPropagation()},[]),R=x((D,u)=>{D.preventDefault(),D.stopPropagation(),N?.(u)},[N]);if(p(()=>{if(!$||!T.current)return;let D=T.current.querySelector(".tab-item.active");if(D)D.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return z`
        <div class="tab-strip" ref=${T} role="tablist">
            ${_.map((D)=>z`
                <div
                    key=${D.id}
                    class=${`tab-item${D.id===$?" active":""}${D.dirty?" dirty":""}${D.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${D.id===$}
                    title=${D.path}
                    onMouseDown=${(u)=>H(u,D.id)}
                    onContextMenu=${(u)=>M(u,D.id)}
                >
                    ${D.pinned&&z`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${D.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${C}
                        onClick=${(u)=>R(u,D.id)}
                        title=${D.dirty?"Unsaved changes":"Close"}
                        aria-label=${D.dirty?"Unsaved changes":`Close ${D.label}`}
                    >
                        ${D.dirty?z`<span class="tab-dirty-dot" aria-hidden="true"></span>`:z`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${q&&z`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${W?" active":""}`}
                    onClick=${q}
                    title=${`${W?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${W?"Hide":"Show"} terminal`}
                    aria-pressed=${W?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${V&&z`
                <button
                    class=${`tab-strip-zen-toggle${U?" active":""}`}
                    onClick=${V}
                    title=${`${U?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${U?"Exit":"Enter"} zen mode`}
                    aria-pressed=${U?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${U?z`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:z`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${J&&z`
            <div class="tab-context-menu" style=${{left:J.x+"px",top:J.y+"px"}}>
                <button onClick=${()=>{N?.(J.id),A(null)}}>Close</button>
                <button onClick=${()=>{Z?.(J.id),A(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),A(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(J.id),A(null)}}>
                    ${_.find((D)=>D.id===J.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${E&&z`
                    <button onClick=${()=>{let D=_.find((u)=>u.id===J.id);E(J.id,D?.label),A(null)}}>Open in Window</button>
                `}
                ${Q&&/\.(md|mdx|markdown)$/i.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{Q(J.id),A(null)}}>
                        ${B?.has(J.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${wK.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let D="/workspace/raw?path="+encodeURIComponent(J.id),u=J.id.split("/").pop()||"document",a="/office-viewer/?url="+encodeURIComponent(D)+"&name="+encodeURIComponent(u);window.open(a,"_blank","noopener"),A(null)}}>Open in New Tab</button>
                `}
                ${RK.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let D="/csv-viewer/?path="+encodeURIComponent(J.id);window.open(D,"_blank","noopener"),A(null)}}>Open in New Tab</button>
                `}
                ${vK.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let D="/workspace/raw?path="+encodeURIComponent(J.id);window.open(D,"_blank","noopener"),A(null)}}>Open in New Tab</button>
                `}
                ${fK.test(J.id)&&!J9.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let D="/image-viewer/?path="+encodeURIComponent(J.id);window.open(D,"_blank","noopener"),A(null)}}>Open in New Tab</button>
                `}
                ${J9.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let D="/drawio/edit?path="+encodeURIComponent(J.id);window.open(D,"_blank","noopener"),A(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var bK=400,v6=60,E9=220,f6="mdPreviewHeight";function uK(){try{let _=localStorage.getItem(f6),$=_?Number(_):NaN;return Number.isFinite($)&&$>=v6?$:E9}catch{return E9}}function b6({getContent:_,path:$,onClose:j}){let[N,Z]=c(""),[Y,K]=c(uK),Q=y(null),B=y(null),q=y(""),W=y(_);return W.current=_,p(()=>{let E=()=>{let A=W.current?.()||"";if(A===q.current)return;q.current=A;try{let T=L_(A,null,{sanitize:!1});Z(T)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};E();let J=setInterval(E,bK);return()=>clearInterval(J)},[]),p(()=>{if(Q.current&&N)X4(Q.current).catch(()=>{})},[N]),z`
        <div
            class="md-preview-splitter"
            onMouseDown=${(E)=>{E.preventDefault();let J=E.clientY,A=B.current?.offsetHeight||Y,T=B.current?.parentElement,H=T?T.offsetHeight*0.7:500,M=E.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let C=(D)=>{let u=Math.min(Math.max(A-(D.clientY-J),v6),H);K(u)},R=()=>{M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(f6,String(Math.round(B.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",R)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",R)}}
            onTouchStart=${(E)=>{E.preventDefault();let J=E.touches[0];if(!J)return;let A=J.clientY,T=B.current?.offsetHeight||Y,H=B.current?.parentElement,M=H?H.offsetHeight*0.7:500,C=E.currentTarget;C.classList.add("dragging"),document.body.style.userSelect="none";let R=(u)=>{let a=u.touches[0];if(!a)return;u.preventDefault();let n=Math.min(Math.max(T-(a.clientY-A),v6),M);K(n)},D=()=>{C.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(f6,String(Math.round(B.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",R),document.removeEventListener("touchend",D),document.removeEventListener("touchcancel",D)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",D),document.addEventListener("touchcancel",D)}}
        ></div>
        <div class="md-preview-panel" ref=${B} style=${{height:Y+"px"}}>
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
                ref=${Q}
                dangerouslySetInnerHTML=${{__html:N}}
            />
        </div>
    `}function A9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:N,chatJid:Z}){let Y=y(_);Y.current=_;let K=y($);K.current=$;let Q=y(j);Q.current=j;let B=y(N);B.current=N,p(()=>{Q.current();let q=new G5((V,U)=>Y.current(V,U),(V)=>K.current(V),{chatJid:Z});q.connect();let W=()=>{q.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")B.current?.()};return window.addEventListener("focus",W),document.addEventListener("visibilitychange",W),()=>{window.removeEventListener("focus",W),document.removeEventListener("visibilitychange",W),q.disconnect()}},[Z])}function M9(){let[_,$]=c(!1),[j,N]=c("default"),Z=y(!1);p(()=>{let B=N$("notificationsEnabled",!1);if(Z.current=B,$(B),typeof Notification<"u")N(Notification.permission)},[]),p(()=>{Z.current=_},[_]);let Y=x(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let B=Notification.requestPermission();if(B&&typeof B.then==="function")return B;return Promise.resolve(B)}catch{return Promise.resolve("default")}},[]),K=x(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){N("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let q=await Y();if(N(q||"default"),q!=="granted"){Z.current=!1,$(!1),K1("notificationsEnabled","false");return}}let B=!Z.current;Z.current=B,$(B),K1("notificationsEnabled",String(B))},[Y]),Q=x((B,q)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let W=new Notification(B,{body:q});return W.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:Q}}var l$=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function k9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[N,Z]=c(null),[Y,K]=c(!1),Q=y(!1),B=y(null),q=y(!1),W=y(null),V=y(null),U=y(0);p(()=>{Q.current=Y},[Y]),p(()=>{V.current=N},[N]),p(()=>{U.current+=1,W.current=null,q.current=!1,Q.current=!1,K(!1)},[j]);let E=x(async(T=null)=>{let H=U.current;try{if(T){let M=await K8(T,50,0,j);if(H!==U.current)return;Z(M.posts),K(!1)}else{let M=await l4(10,null,j);if(H!==U.current)return;Z(M.posts),K(M.has_more)}}catch(M){if(H!==U.current)return;console.error("Failed to load posts:",M)}},[j]),J=x(async()=>{let T=U.current;try{let H=await l4(10,null,j);if(T!==U.current)return;Z((M)=>{if(!M||M.length===0)return H.posts;return l$([...H.posts,...M])}),K((M)=>M||H.has_more)}catch(H){if(T!==U.current)return;console.error("Failed to refresh timeline:",H)}},[j]),A=x(async(T={})=>{let H=U.current,M=V.current;if(!M||M.length===0)return;if(q.current)return;let{preserveScroll:C=!0,preserveMode:R="top",allowRepeat:D=!1}=T,u=(g)=>{if(!C){g();return}if(R==="top")$(g);else _(g)},n=M.slice().sort((g,w)=>g.id-w.id)[0]?.id;if(!Number.isFinite(n))return;if(!D&&W.current===n)return;q.current=!0,W.current=n;try{let g=await l4(10,n,j);if(H!==U.current)return;if(g.posts.length>0)u(()=>{Z((w)=>l$([...g.posts,...w||[]])),K(g.has_more)});else K(!1)}catch(g){if(H!==U.current)return;console.error("Failed to load more posts:",g)}finally{if(H===U.current)q.current=!1}},[j,_,$]);return p(()=>{B.current=A},[A]),{posts:N,setPosts:Z,hasMore:Y,setHasMore:K,hasMoreRef:Q,loadPosts:E,refreshTimeline:J,loadMore:A,loadMoreRef:B,loadingMoreRef:q,lastBeforeIdRef:W}}function P9(){let[_,$]=c(null),[j,N]=c({text:"",totalLines:0}),[Z,Y]=c(""),[K,Q]=c({text:"",totalLines:0}),[B,q]=c(null),[W,V]=c(null),[U,E]=c(null),J=y(null),A=y(0),T=y(!1),H=y(""),M=y(""),C=y(null),R=y(null),D=y(null),u=y(null),a=y(!1),n=y(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:N,agentPlan:Z,setAgentPlan:Y,agentThought:K,setAgentThought:Q,pendingRequest:B,setPendingRequest:q,currentTurnId:W,setCurrentTurnId:V,steerQueuedTurnId:U,setSteerQueuedTurnId:E,lastAgentEventRef:J,lastSilenceNoticeRef:A,isAgentRunningRef:T,draftBufferRef:H,thoughtBufferRef:M,pendingRequestRef:C,stalledPostIdRef:R,currentTurnIdRef:D,steerQueuedTurnIdRef:u,thoughtExpandedRef:a,draftExpandedRef:n}}function I9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:N}){let Z=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.clientX,E=$.current||280,J=W.currentTarget;J.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let A=U,T=(M)=>{A=M.clientX;let C=Math.min(Math.max(E+(M.clientX-U),160),600);V.style.setProperty("--sidebar-width",`${C}px`),$.current=C},H=()=>{let M=Math.min(Math.max(E+(A-U),160),600);$.current=M,J.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",K1("sidebarWidth",String(Math.round(M))),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",H)}).current,Y=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.touches[0];if(!U)return;let E=U.clientX,J=$.current||280,A=W.currentTarget;A.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let T=(M)=>{let C=M.touches[0];if(!C)return;M.preventDefault();let R=Math.min(Math.max(J+(C.clientX-E),160),600);V.style.setProperty("--sidebar-width",`${R}px`),$.current=R},H=()=>{A.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",K1("sidebarWidth",String(Math.round($.current||J))),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,K=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.clientX,E=j.current||$.current||280,J=W.currentTarget;J.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let A=U,T=(M)=>{A=M.clientX;let C=Math.min(Math.max(E+(M.clientX-U),200),800);V.style.setProperty("--editor-width",`${C}px`),j.current=C},H=()=>{let M=Math.min(Math.max(E+(A-U),200),800);j.current=M,J.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("editorWidth",String(Math.round(M))),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",H)}).current,Q=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.touches[0];if(!U)return;let E=U.clientX,J=j.current||$.current||280,A=W.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let T=(M)=>{let C=M.touches[0];if(!C)return;M.preventDefault();let R=Math.min(Math.max(J+(C.clientX-E),200),800);V.style.setProperty("--editor-width",`${R}px`),j.current=R},H=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",K1("editorWidth",String(Math.round(j.current||J))),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,B=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.clientY,E=N?.current||200,J=W.currentTarget;J.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=U,T=(M)=>{A=M.clientY;let C=Math.min(Math.max(E-(M.clientY-U),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${C}px`),N)N.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{let M=Math.min(Math.max(E-(A-U),100),window.innerHeight*0.5);if(N)N.current=M;J.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("dockHeight",String(Math.round(M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",H)}).current,q=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.touches[0];if(!U)return;let E=U.clientY,J=N?.current||200,A=W.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let T=(M)=>{let C=M.touches[0];if(!C)return;M.preventDefault();let R=Math.min(Math.max(J-(C.clientY-E),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${R}px`),N)N.current=R;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",K1("dockHeight",String(Math.round(N?.current||J))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:Q,handleDockSplitterMouseDown:B,handleDockSplitterTouchStart:q}}function C9({onTabClosed:_}={}){let $=y(_);$.current=_;let[j,N]=c(()=>s0.getTabs()),[Z,Y]=c(()=>s0.getActiveId()),[K,Q]=c(()=>s0.getTabs().length>0);p(()=>{return s0.onChange((R,D)=>{N(R),Y(D),Q(R.length>0)})},[]);let[B,q]=c(()=>new Set),W=x((R)=>{q((D)=>{let u=new Set(D);if(u.has(R))u.delete(R);else u.add(R);return u})},[]),V=x((R)=>{q((D)=>{if(!D.has(R))return D;let u=new Set(D);return u.delete(R),u})},[]),U=x((R,D={})=>{if(!R)return;let u={path:R,mode:"edit"};try{if(!j1.resolve(u)){if(!j1.get("editor")){console.warn(`[openEditor] No pane handler for: ${R}`);return}}}catch(n){console.warn(`[openEditor] paneRegistry.resolve() error for "${R}":`,n)}let a=typeof D?.label==="string"&&D.label.trim()?D.label.trim():void 0;s0.open(R,a)},[]),E=x(()=>{let R=s0.getActiveId();if(R){let D=s0.get(R);if(D?.dirty){if(!window.confirm(`"${D.label}" has unsaved changes. Close anyway?`))return}s0.close(R),V(R),$.current?.(R)}},[V]),J=x((R)=>{let D=s0.get(R);if(D?.dirty){if(!window.confirm(`"${D.label}" has unsaved changes. Close anyway?`))return}s0.close(R),V(R),$.current?.(R)},[V]),A=x((R)=>{s0.activate(R)},[]),T=x((R)=>{let D=s0.getTabs().filter((n)=>n.id!==R&&!n.pinned),u=D.filter((n)=>n.dirty).length;if(u>0){if(!window.confirm(`${u} unsaved tab${u>1?"s":""} will be closed. Continue?`))return}let a=D.map((n)=>n.id);s0.closeOthers(R),a.forEach((n)=>{V(n),$.current?.(n)})},[V]),H=x(()=>{let R=s0.getTabs().filter((a)=>!a.pinned),D=R.filter((a)=>a.dirty).length;if(D>0){if(!window.confirm(`${D} unsaved tab${D>1?"s":""} will be closed. Continue?`))return}let u=R.map((a)=>a.id);s0.closeAll(),u.forEach((a)=>{V(a),$.current?.(a)})},[V]),M=x((R)=>{s0.togglePin(R)},[]),C=x(()=>{let R=s0.getActiveId();if(R)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:R}}))},[]);return p(()=>{let R=(D)=>{let{oldPath:u,newPath:a,type:n}=D.detail||{};if(!u||!a)return;if(n==="dir"){for(let g of s0.getTabs())if(g.path===u||g.path.startsWith(`${u}/`)){let w=`${a}${g.path.slice(u.length)}`;s0.rename(g.id,w)}}else s0.rename(u,a)};return window.addEventListener("workspace-file-renamed",R),()=>window.removeEventListener("workspace-file-renamed",R)},[]),p(()=>{let R=(D)=>{if(s0.hasUnsaved())D.preventDefault(),D.returnValue=""};return window.addEventListener("beforeunload",R),()=>window.removeEventListener("beforeunload",R)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:Z,previewTabs:B,openEditor:U,closeEditor:E,handleTabClose:J,handleTabActivate:A,handleTabCloseOthers:T,handleTabCloseAll:H,handleTabTogglePin:M,handleTabTogglePreview:W,revealInExplorer:C}}function u6(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},N=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[N],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var m6=u6("warning",30000),y9=u6("finalize",120000),g6=u6("refresh",30000),T9=30000;function S9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function x9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function w9(_=30000){let[,$]=c(0);p(()=>{let j=setInterval(()=>$((N)=>N+1),_);return()=>clearInterval(j)},[_])}function h6(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((N,Z)=>N+Math.max(1,Math.ceil(Z.length/$)),0)}function R9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function p6(_){return String(_||"").trim()||"web:default"}function v9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function f9(_={}){return W4(_)&&P5(_)}function mK(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let N=Number($?.innerHeight||0);if(Number.isFinite(N)&&N>0)return Math.round(N);return null}function gK(_={},$={}){if(!f9(_))return null;let j=_.window??(typeof window<"u"?window:null),N=_.document??(typeof document<"u"?document:null);if(!j||!N?.documentElement)return null;let Z=mK({window:j});if(Z&&Z>0)N.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(N.scrollingElement)N.scrollingElement.scrollTop=0,N.scrollingElement.scrollLeft=0;if(N.documentElement)N.documentElement.scrollTop=0,N.documentElement.scrollLeft=0;if(N.body)N.body.scrollTop=0,N.body.scrollLeft=0}catch{}}return Z}function b9(_={}){if(!f9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let N=0,Z=new Set,Y=()=>{if(N)$.cancelAnimationFrame?.(N),N=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},K=()=>{N=0,gK({window:$,document:j})},Q=()=>{if(N)$.cancelAnimationFrame?.(N);N=$.requestAnimationFrame?.(K)??0},B=()=>{Q();for(let V of[80,220,420]){let U=$.setTimeout?.(()=>{Z.delete(U),Q()},V);if(U!=null)Z.add(U)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;B()},W=$.visualViewport;return B(),$.addEventListener("focus",B),$.addEventListener("pageshow",B),$.addEventListener("resize",B),$.addEventListener("orientationchange",B),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",B,!0),W?.addEventListener?.("resize",B),W?.addEventListener?.("scroll",B),()=>{Y(),$.removeEventListener("focus",B),$.removeEventListener("pageshow",B),$.removeEventListener("resize",B),$.removeEventListener("orientationchange",B),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",B,!0),W?.removeEventListener?.("resize",B),W?.removeEventListener?.("scroll",B)}}function hK(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function T_(_,$,j){let N=_?.[$];return typeof N==="function"?N:hK($,j)}var pK=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function u9(_){return pK.has(String(_||"").trim())}function cK(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function m9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let N={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:N})),j.dispatchEvent(new CustomEvent(cK(_),{detail:N})),!0}var lK=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function g9(_,$={}){let j=$.window??(typeof window<"u"?window:null),N=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(W4({window:j,navigator:N}))};Z();let K=lK.map((Q)=>{try{return j.matchMedia?.(Q)??null}catch{return null}}).filter(Boolean).map((Q)=>{if(typeof Q.addEventListener==="function")return Q.addEventListener("change",Z),()=>Q.removeEventListener("change",Z);if(typeof Q.addListener==="function")return Q.addListener(Z),()=>Q.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let Q of K)Q();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function h9(_,$={}){let j=$.window??(typeof window<"u"?window:null),N=$.document??(typeof document<"u"?document:null);if(!j||!N||typeof _!=="function")return()=>{};let Z=()=>{if(N.visibilityState&&N.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),N.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),N.removeEventListener?.("visibilitychange",Z)}}var i6="piclaw_btw_session",iK=900,nK="__piclawRenameBranchPromptLock__",c6=()=>{if(typeof window>"u")return null;let _=window,$=nK,j=_[$];if(j&&typeof j==="object")return j;let N={inFlight:!1,cooldownUntil:0};return _[$]=N,N};function dK(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function rK(){let _=W_(i6);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",N=typeof $.answer==="string"?$.answer:"",Z=typeof $.thinking==="string"?$.thinking:"",Y=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:N,thinking:Z,error:K==="error"?Y||"BTW stream interrupted. You can retry.":Y,model:null,status:K}}catch{return null}}var p9=Q8,c9=G8,oK=X8,l9=z8,i9=F8,l6=V8,f5=T_(V_,"getAgentContext",null),n9=T_(V_,"getAgentModels",{current:null,models:[]}),d9=T_(V_,"getActiveChatAgents",{chats:[]}),b5=T_(V_,"getChatBranches",{chats:[]}),sK=T_(V_,"renameChatBranch",null),aK=T_(V_,"pruneChatBranch",null),r9=T_(V_,"restoreChatBranch",null),o9=T_(V_,"getAgentQueueState",{count:0}),tK=T_(V_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),eK=T_(V_,"removeAgentQueueItem",{removed:!1}),_Q=T_(V_,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});j1.register(i8);j1.register(O6);j1.register(F6);j1.register(H6);j1.register(J6);j1.register(D6);j1.register(A6);j1.register(M6);j1.register(P6);j1.register(U6);n8();j1.register(o8);j1.register(s8);function $Q({locationParams:_,navigate:$}){let j=y0(()=>{let G=_.get("chat_jid");return G&&G.trim()?G.trim():"web:default"},[_]),N=y0(()=>{let G=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Z=y0(()=>{let G=(_.get("pane_popout")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Y=y0(()=>{let G=_.get("pane_path");return G&&G.trim()?G.trim():""},[_]),K=y0(()=>{let G=_.get("pane_label");return G&&G.trim()?G.trim():""},[_]),Q=y0(()=>{let G=(_.get("branch_loader")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),B=y0(()=>{let G=_.get("branch_source_chat_jid");return G&&G.trim()?G.trim():j},[j,_]),[q,W]=c("disconnected"),[V,U]=c(()=>W4()),[E,J]=c(null),[A,T]=c(null),[H,M]=c(!1),[C,R]=c("current"),[D,u]=c([]),[a,n]=c([]),[g,w]=c(null),{agentStatus:l,setAgentStatus:t,agentDraft:V0,setAgentDraft:d,agentPlan:j0,setAgentPlan:N0,agentThought:Y0,setAgentThought:Q0,pendingRequest:B0,setPendingRequest:U0,currentTurnId:z0,setCurrentTurnId:O0,steerQueuedTurnId:p0,setSteerQueuedTurnId:k0,lastAgentEventRef:J0,lastSilenceNoticeRef:c0,isAgentRunningRef:l0,draftBufferRef:T0,thoughtBufferRef:X0,pendingRequestRef:P0,stalledPostIdRef:D0,currentTurnIdRef:q0,steerQueuedTurnIdRef:I0,thoughtExpandedRef:n0,draftExpandedRef:m0}=P9(),[W1,A1]=c({}),[v0,i0]=c(null),[N1,Q1]=c(null),[d0,T1]=c(!1),[Z1,f1]=c(null),[q1,p1]=c([]),[g0,e1]=c([]),[B1,L1]=c(null),[O1,C0]=c([]),[H1,S0]=c(!1),[w0,a0]=c(()=>rK()),[d1,m]=c(null),G0=y(new Set),E0=y0(()=>q1.find((G)=>G?.chat_jid===j)||null,[q1,j]),F0=y0(()=>g0.find((G)=>G?.chat_jid===j)||E0||null,[E0,g0,j]),r0=F0?.root_chat_jid||E0?.root_chat_jid||j,__=dK(C),[c1,i_]=c(()=>({status:Q?"running":"idle",message:Q?"Preparing a new chat branch…":""})),S_=O1.length,$_=y(new Set),t0=y([]),S1=y(new Set),r1=y(0),x1=y({inFlight:!1,lastAttemptAt:0,turnId:null});$_.current=new Set(O1.map((G)=>G.row_id)),t0.current=O1;let{notificationsEnabled:x_,notificationPermission:w_,toggleNotifications:z4,notify:F4}=M9(),[j_,n_]=c(()=>new Set),[Y1,$4]=c(()=>N$("workspaceOpen",!0)),z_=y(null),{editorOpen:h0,tabStripTabs:U1,tabStripActiveId:f0,previewTabs:w1,openEditor:J1,closeEditor:j4,handleTabClose:O4,handleTabActivate:F_,handleTabCloseOthers:R4,handleTabCloseAll:i$,handleTabTogglePin:a4,handleTabTogglePreview:O_,revealInExplorer:W$}=C9({onTabClosed:(G)=>z_.current?.(G)}),N_=y(null),Z_=y(null),d_=y(null),H_=y(null),b1=j1.getDockPanes().length>0,[q_,b0]=c(!1),Y_=x(()=>b0((G)=>!G),[]),H4=x(()=>{J1(v$,{label:"Terminal"})},[J1]),J4=x(()=>{J1(_4,{label:"VNC"})},[J1]),R_=y0(()=>U1.find((G)=>G.id===f0)||U1[0]||null,[f0,U1]),J_=y0(()=>K||R_?.label||Y||"Pane",[R_?.label,K,Y]),G_=y0(()=>U1.length>1||Boolean(f0&&w1.has(f0)),[w1,f0,U1.length]),D1=y0(()=>Y===_4||Y.startsWith(`${_4}/`),[Y]),G1=y0(()=>Y===v$&&!G_||D1,[D1,G_,Y]),o1=Z||!N&&(h0||b1&&q_),[I1,N4]=c(!1),Z4=y(!1),D4=x(()=>{if(!h0||N)return;if(Z4.current=q_,q_)b0(!1);N4(!0)},[h0,N,q_]),s1=x(()=>{if(!I1)return;if(N4(!1),Z4.current)b0(!0),Z4.current=!1},[I1]),Y4=x(()=>{if(I1)s1();else D4()},[I1,D4,s1]);p(()=>{if(I1&&!h0)s1()},[I1,h0,s1]),p(()=>{if(!Z||!Y)return;if(s0.getActiveId()===Y)return;J1(Y,K?{label:K}:void 0)},[J1,K,Z,Y]),p(()=>{let G=N_.current;if(!G)return;if(Z_.current)Z_.current.dispose(),Z_.current=null;let X=f0;if(!X)return;let O={path:X,mode:"edit"},k=j1.resolve(O)||j1.get("editor");if(!k){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let I=k.mount(G,O);Z_.current=I,I.onDirtyChange?.((e)=>{s0.setDirty(X,e)}),I.onSaveRequest?.(()=>{}),I.onClose?.(()=>{j4()});let h=s0.getViewState(X);if(h&&typeof I.restoreViewState==="function")requestAnimationFrame(()=>I.restoreViewState(h));if(typeof I.onViewStateChange==="function")I.onViewStateChange((e)=>{s0.saveViewState(X,e)});return requestAnimationFrame(()=>I.focus()),()=>{if(Z_.current===I)I.dispose(),Z_.current=null}},[f0,j4]),p(()=>{let G=d_.current;if(H_.current)H_.current.dispose(),H_.current=null;if(!G||!b1||!q_)return;let X=j1.getDockPanes()[0];if(!X){G.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let O=X.mount(G,{mode:"view"});return H_.current=O,requestAnimationFrame(()=>O.focus?.()),()=>{if(H_.current===O)O.dispose(),H_.current=null}},[b1,q_]);let[v4,v_]=c({name:"You",avatar_url:null,avatar_background:null}),D_=y(!1),B_=y(!1),f_=y(null),u1=y(j),f4=y(new Map),b4=y(j),E4=y(0),r_=y(0),b_=y({}),K4=y({name:null,avatar_url:null}),R1=y({currentHashtag:null,searchQuery:null,searchOpen:!1}),u_=y(null),m_=y(null),o_=y(0),A4=y(0),z1=y(0),M4=y(null),a1=y(null),K_=y(null),E_=y(null),u4=y(0),k4=y({title:null,avatarBase:null}),Q4=y(null),P4=y(!1),[X_,m4]=c(!1),g4=y(0),[I4,t4]=c(!1),[s_,h4]=c(""),g_=y(null),F=x(()=>{if(Q4.current)clearTimeout(Q4.current),Q4.current=null;w(null)},[]);w9(30000),p(()=>{if(!I4)return;requestAnimationFrame(()=>{if(I4)g_.current?.focus(),g_.current?.select?.()})},[I4]),p(()=>{return _2()},[]),p(()=>{return g9(U)},[]),p(()=>{K1("workspaceOpen",String(Y1))},[Y1]),p(()=>{return b9()},[]),p(()=>{return()=>{F()}},[F]),p(()=>{if(!w0){K1(i6,"");return}K1(i6,JSON.stringify({question:w0.question||"",answer:w0.answer||"",thinking:w0.thinking||"",error:w0.error||null,status:w0.status||"success"}))},[w0]),p(()=>{b_.current=W1||{}},[W1]),p(()=>{u1.current=j},[j]),p(()=>{K4.current=v4||{name:"You",avatar_url:null,avatar_background:null}},[v4]);let P=x((G,X,O=null)=>{if(typeof document>"u")return;let k=(G||"").trim()||"PiClaw";if(k4.current.title!==k){document.title=k;let _0=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(_0&&_0.getAttribute("content")!==k)_0.setAttribute("content",k);k4.current.title=k}let I=document.getElementById("dynamic-favicon");if(!I)return;let h=I.getAttribute("data-default")||I.getAttribute("href")||"/favicon.ico",e=X||h,$0=X?`${e}|${O||""}`:e;if(k4.current.avatarBase!==$0){let _0=X?`${e}${e.includes("?")?"&":"?"}v=${O||Date.now()}`:e;I.setAttribute("href",_0),k4.current.avatarBase=$0}},[]),f=x((G)=>{if(!G)return;u((X)=>X.includes(G)?X:[...X,G])},[]),v=x((G)=>{u((X)=>X.filter((O)=>O!==G))},[]);z_.current=v;let o=x(()=>{u([])},[]),K0=x((G)=>{if(!Array.isArray(G)){u([]);return}let X=[],O=new Set;for(let k of G){if(typeof k!=="string"||!k.trim())continue;let I=k.trim();if(O.has(I))continue;O.add(I),X.push(I)}u(X)},[]),i=x((G,X=null,O="info",k=3000)=>{F(),w({title:G,detail:X||null,kind:O||"info"}),Q4.current=setTimeout(()=>{w((I)=>I?.title===G?null:I)},k)},[F]),W0=x((G)=>{let X=R9(G,{editorOpen:h0,resolvePane:(O)=>j1.resolve(O)});if(X.kind==="open"){J1(X.path);return}if(X.kind==="toast")i(X.title,X.detail,X.level)},[h0,J1,i]),Z0=x(()=>{let G=f0;if(G)f(G)},[f0,f]),A0=x((G)=>{if(!G)return;n((X)=>X.includes(G)?X:[...X,G])},[]),C1=x(async(G,X=null)=>{let O=(I)=>{I.scrollIntoView({behavior:"smooth",block:"center"}),I.classList.add("post-highlight"),setTimeout(()=>I.classList.remove("post-highlight"),2000)},k=document.getElementById("post-"+G);if(k){O(k);return}try{let I=typeof X==="string"&&X.trim()?X.trim():j,e=(await q8(G,I))?.thread?.[0];if(!e)return;F1(($0)=>{if(!$0)return[e];if($0.some((_0)=>_0.id===e.id))return $0;return[...$0,e]}),requestAnimationFrame(()=>{setTimeout(()=>{let $0=document.getElementById("post-"+G);if($0)O($0)},50)})}catch(I){console.error("[scrollToMessage] Failed to fetch message",G,I)}},[j]),A_=x((G)=>{n((X)=>X.filter((O)=>O!==G))},[]),L=x(()=>{n([])},[]),S=x((G)=>{if(!Array.isArray(G)){n([]);return}let X=[],O=new Set;for(let k of G){if(typeof k!=="string"||!k.trim())continue;let I=k.trim();if(O.has(I))continue;O.add(I),X.push(I)}n(X)},[]),b=x((G)=>{let X=typeof G==="string"&&G.trim()?G.trim():"Could not send your message.";i("Compose failed",X,"error",5000)},[i]),r=x((G={})=>{let X=Date.now();if(J0.current=X,G.running)l0.current=!0,S0((O)=>O?O:!0);if(G.clearSilence)c0.current=0},[S0]),L0=x(()=>{if(E_.current)clearTimeout(E_.current),E_.current=null;u4.current=0},[]);p(()=>()=>{L0()},[L0]);let u0=x(()=>{L0(),t((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:X,lastActivity:O,...k}=G;return k})},[L0]),X1=x((G)=>{if(!G)return;L0();let X=Date.now();u4.current=X,t({type:G.type||"active",last_activity:!0}),E_.current=setTimeout(()=>{if(u4.current!==X)return;t((O)=>{if(!O||!(O.last_activity||O.lastActivity))return O;return null})},T9)},[L0]),e0=x(()=>{l0.current=!1,S0(!1),J0.current=null,c0.current=0,T0.current="",X0.current="",P0.current=null,a1.current=null,q0.current=null,I0.current=null,f_.current=null,x1.current={inFlight:!1,lastAttemptAt:0,turnId:null},L0(),O0(null),k0(null),n0.current=!1,m0.current=!1},[L0,O0,k0,S0]),l1=x((G)=>{if(!v9({remainingQueueCount:G,currentTurnId:q0.current,isAgentTurnActive:H1}))return;I0.current=null,k0(null)},[H1,k0]),o0=x(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),M_=x(()=>({agentStatus:l,agentDraft:V0?{...V0}:{text:"",totalLines:0},agentPlan:j0||"",agentThought:Y0?{...Y0}:{text:"",totalLines:0},pendingRequest:B0,currentTurnId:z0,steerQueuedTurnId:p0,isAgentTurnActive:Boolean(H1),followupQueueItems:Array.isArray(O1)?O1.map((G)=>({...G})):[],activeModel:v0,activeThinkingLevel:N1,supportsThinking:Boolean(d0),activeModelUsage:Z1,contextUsage:B1,isAgentRunning:Boolean(l0.current),wasAgentActive:Boolean(B_.current),draftBuffer:T0.current||"",thoughtBuffer:X0.current||"",lastAgentEvent:J0.current||null,lastSilenceNotice:c0.current||0,lastAgentResponse:a1.current||null,currentTurnIdRef:q0.current||null,steerQueuedTurnIdRef:I0.current||null,thoughtExpanded:Boolean(n0.current),draftExpanded:Boolean(m0.current),agentStatusRef:f_.current||null,silentRecovery:{...x1.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[v0,Z1,N1,V0,j0,l,Y0,B1,z0,O1,H1,B0,p0,d0]),p4=x((G)=>{let X=G||o0();L0(),l0.current=Boolean(X.isAgentRunning),B_.current=Boolean(X.wasAgentActive),S0(Boolean(X.isAgentTurnActive)),J0.current=X.lastAgentEvent||null,c0.current=Number(X.lastSilenceNotice||0),T0.current=X.draftBuffer||"",X0.current=X.thoughtBuffer||"",P0.current=X.pendingRequest||null,a1.current=X.lastAgentResponse||null,q0.current=X.currentTurnIdRef||null,I0.current=X.steerQueuedTurnIdRef||null,f_.current=X.agentStatusRef||null,x1.current=X.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},n0.current=Boolean(X.thoughtExpanded),m0.current=Boolean(X.draftExpanded),t(X.agentStatus||null),d(X.agentDraft?{...X.agentDraft}:{text:"",totalLines:0}),N0(X.agentPlan||""),Q0(X.agentThought?{...X.agentThought}:{text:"",totalLines:0}),U0(X.pendingRequest||null),O0(X.currentTurnId||null),k0(X.steerQueuedTurnId||null),C0(Array.isArray(X.followupQueueItems)?X.followupQueueItems.map((O)=>({...O})):[]),i0(X.activeModel||null),Q1(X.activeThinkingLevel||null),T1(Boolean(X.supportsThinking)),f1(X.activeModelUsage??null),L1(X.contextUsage??null)},[L0,o0,O0,C0,S0,k0]),m1=x((G)=>{if(!G)return;if(q0.current===G)return;q0.current=G,x1.current={inFlight:!1,lastAttemptAt:0,turnId:G},O0(G),I0.current=null,k0(null),T0.current="",X0.current="",d({text:"",totalLines:0}),N0(""),Q0({text:"",totalLines:0}),U0(null),P0.current=null,a1.current=null,n0.current=!1,m0.current=!1},[O0,k0]),q4=x((G)=>{if(typeof document<"u"){let _0=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&_0)return}let X=a1.current;if(!X||!X.post)return;if(G&&X.turnId&&X.turnId!==G)return;let O=X.post;if(O.id&&M4.current===O.id)return;let k=String(O?.data?.content||"").trim();if(!k)return;M4.current=O.id||M4.current,a1.current=null;let I=k.replace(/\s+/g," ").slice(0,200),h=b_.current||{},$0=(O?.data?.agent_id?h[O.data.agent_id]:null)?.name||"Pi";F4($0,I)},[F4]),u5=x(async(G,X)=>{if(G!=="thought"&&G!=="draft")return;let O=q0.current;if(G==="thought"){if(n0.current=X,O)try{await i9(O,"thought",X)}catch(k){console.warn("Failed to update thought visibility:",k)}if(!X)return;try{let k=O?await l9(O,"thought"):null;if(k?.text)X0.current=k.text;Q0((I)=>({...I||{text:"",totalLines:0},fullText:X0.current||I?.fullText||"",totalLines:Number.isFinite(k?.total_lines)?k.total_lines:I?.totalLines||0}))}catch(k){console.warn("Failed to fetch full thought:",k)}return}if(m0.current=X,O)try{await i9(O,"draft",X)}catch(k){console.warn("Failed to update draft visibility:",k)}if(!X)return;try{let k=O?await l9(O,"draft"):null;if(k?.text)T0.current=k.text;d((I)=>({...I||{text:"",totalLines:0},fullText:T0.current||I?.fullText||"",totalLines:Number.isFinite(k?.total_lines)?k.total_lines:I?.totalLines||0}))}catch(k){console.warn("Failed to fetch full draft:",k)}},[]),G4=y(null),M1=x(()=>{let G=u_.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);G4.current=M1;let L$=x((G)=>{let X=u_.current;if(!X||typeof G!=="function"){G?.();return}let{currentHashtag:O,searchQuery:k,searchOpen:I}=R1.current||{},h=!((k||I)&&!O),e=h?X.scrollHeight-X.scrollTop:X.scrollTop;G(),requestAnimationFrame(()=>{let $0=u_.current;if(!$0)return;if(h){let _0=Math.max($0.scrollHeight-e,0);$0.scrollTop=_0}else{let _0=Math.max($0.scrollHeight-$0.clientHeight,0),s=Math.min(e,_0);$0.scrollTop=s}})},[]),c4=x((G)=>{let X=u_.current;if(!X||typeof G!=="function"){G?.();return}let O=X.scrollTop;G(),requestAnimationFrame(()=>{let k=u_.current;if(!k)return;let I=Math.max(k.scrollHeight-k.clientHeight,0);k.scrollTop=Math.min(O,I)})},[]),m5="Queued as a follow-up (one-at-a-time).",g5="⁣",C4=x((G)=>{if(!G||!Array.isArray(G))return G;let X=$_.current,O=new Set(X),k=G.filter((I)=>{if(O.has(I?.id))return!1;if(I?.data?.is_bot_message){let h=I?.data?.content;if(h===m5||h===g5)return!1}return!0});return k.length===G.length?G:k},[]),{posts:i1,setPosts:F1,hasMore:n6,setHasMore:e4,hasMoreRef:d6,loadPosts:h_,refreshTimeline:n1,loadMore:s9,loadMoreRef:h5}=k9({preserveTimelineScroll:L$,preserveTimelineScrollTop:c4,chatJid:j}),_$=y0(()=>C4(i1),[i1,O1,C4]),n$=x(()=>{let G=D0.current;if(!G)return;F1((X)=>X?X.filter((O)=>O.id!==G):X),D0.current=null},[F1]),{handleSplitterMouseDown:a9,handleSplitterTouchStart:t9,handleEditorSplitterMouseDown:e9,handleEditorSplitterTouchStart:_j,handleDockSplitterMouseDown:$j,handleDockSplitterTouchStart:jj}=I9({appShellRef:m_,sidebarWidthRef:o_,editorWidthRef:A4,dockHeightRef:z1}),r6=x(()=>{if(!l0.current)return;l0.current=!1,c0.current=0,J0.current=null,q0.current=null,O0(null),n0.current=!1,m0.current=!1;let G=(T0.current||"").trim();if(T0.current="",X0.current="",d({text:"",totalLines:0}),N0(""),Q0({text:"",totalLines:0}),U0(null),P0.current=null,a1.current=null,!G){t({type:"error",title:"Response stalled - No content received"});return}let O=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,k=Date.now(),I=new Date().toISOString(),h={id:k,timestamp:I,data:{type:"agent_response",content:O,agent_id:"default",is_local_stall:!0}};D0.current=k,F1((e)=>e?l$([...e,h]):[h]),G4.current?.(),t(null)},[O0]);p(()=>{R1.current={currentHashtag:E,searchQuery:A,searchOpen:H}},[E,A,H]);let _1=x(()=>{let G=++r1.current,X=j;o9(X).then((O)=>{if(G!==r1.current)return;if(u1.current!==X)return;let k=S1.current,I=Array.isArray(O?.items)?O.items.map((h)=>({...h})).filter((h)=>!k.has(h.row_id)):[];if(I.length){C0((h)=>{if(h.length===I.length&&h.every((e,$0)=>e.row_id===I[$0].row_id))return h;return I});return}k.clear(),l1(0),C0((h)=>h.length===0?h:[])}).catch(()=>{if(G!==r1.current)return;if(u1.current!==X)return;C0((O)=>O.length===0?O:[])})},[l1,j,C0]),k_=x(async()=>{let G=j;try{let X=await f5(G);if(u1.current!==G)return;if(X)L1(X)}catch(X){if(u1.current!==G)return;console.warn("Failed to fetch agent context:",X)}},[j]),P_=x(async()=>{let G=j;try{let X=await l6(G);if(u1.current!==G)return null;if(!X||X.status!=="active"||!X.data){if(B_.current){let{currentHashtag:I,searchQuery:h,searchOpen:e}=R1.current||{};if(!I&&!h&&!e)n1()}return B_.current=!1,e0(),f_.current=null,t(null),d({text:"",totalLines:0}),N0(""),Q0({text:"",totalLines:0}),U0(null),P0.current=null,X??null}B_.current=!0;let O=X.data;f_.current=O;let k=O.turn_id||O.turnId;if(k)m1(k);if(r({running:!0,clearSilence:!0}),u0(),t(O),X.thought&&X.thought.text)Q0((I)=>{if(I&&I.text&&I.text.length>=X.thought.text.length)return I;return X0.current=X.thought.text,{text:X.thought.text,totalLines:X.thought.totalLines||0}});if(X.draft&&X.draft.text)d((I)=>{if(I&&I.text&&I.text.length>=X.draft.text.length)return I;return T0.current=X.draft.text,{text:X.draft.text,totalLines:X.draft.totalLines||0}});return X}catch(X){return console.warn("Failed to fetch agent status:",X),null}},[e0,u0,r,n1,m1]),p5=x(async()=>{if(!l0.current)return null;if(P0.current)return null;let G=q0.current||null,X=x1.current,O=Date.now();if(X.inFlight)return null;if(X.turnId===G&&O-X.lastAttemptAt<g6)return null;X.inFlight=!0,X.lastAttemptAt=O,X.turnId=G;try{let{currentHashtag:k,searchQuery:I,searchOpen:h}=R1.current||{};if(!k&&!I&&!h)await n1();return await _1(),await P_()}finally{X.inFlight=!1}},[P_,_1,n1]);p(()=>{let G=Math.min(1000,Math.max(100,Math.floor(m6/2))),X=setInterval(()=>{if(!l0.current)return;if(P0.current)return;let O=J0.current;if(!O)return;let k=Date.now(),I=k-O,h=T$(f_.current);if(I>=y9){if(!h)t({type:"waiting",title:"Re-syncing after a quiet period…"});p5();return}if(I>=m6){if(k-c0.current>=g6){if(!h){let e=Math.floor(I/1000);t({type:"waiting",title:`Waiting for model… No events for ${e}s`})}c0.current=k,p5()}}},G);return()=>clearInterval(X)},[p5]);let Nj=x((G)=>{if(W(G),G!=="connected"){t(null),d({text:"",totalLines:0}),N0(""),Q0({text:"",totalLines:0}),U0(null),P0.current=null,e0();return}if(!D_.current){D_.current=!0;let{currentHashtag:I,searchQuery:h,searchOpen:e}=R1.current||{};if(!I&&!h&&!e)n1();P_(),_1(),k_();return}let{currentHashtag:X,searchQuery:O,searchOpen:k}=R1.current;if(!X&&!O&&!k)n1();P_(),_1(),k_()},[e0,n1,P_,_1,k_]),Zj=x(async(G)=>{J(G),F1(null),await h_(G)},[h_]),Yj=x(async()=>{J(null),T(null),F1(null),await h_()},[h_]),Kj=x(async(G,X=C)=>{if(!G||!G.trim())return;let O=X==="root"||X==="all"?X:"current";R(O),T(G.trim()),J(null),F1(null);try{let k=await p9(G.trim(),50,0,j,O,r0);F1(k.results),e4(!1)}catch(k){console.error("Failed to search:",k),F1([])}},[j,r0,C]),Qj=x(()=>{M(!0),T(null),J(null),R("current"),F1([])},[]),qj=x(()=>{M(!1),T(null),h_()},[h_]),NQ=x(()=>{},[]),c5=!E&&!A&&!H,Gj=x(async(G)=>{if(!G)return;let X=G.id,O=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():j,k=_$?.filter((h)=>h?.data?.thread_id===X&&h?.id!==X).length||0;if(k>0){if(!window.confirm(`Delete this message and its ${k} replies?`))return}let I=(h)=>{if(!h.length)return;n_(($0)=>{let _0=new Set($0);return h.forEach((s)=>_0.add(s)),_0}),setTimeout(()=>{if(c4(()=>{F1(($0)=>$0?$0.filter((_0)=>!h.includes(_0.id)):$0)}),n_(($0)=>{let _0=new Set($0);return h.forEach((s)=>_0.delete(s)),_0}),d6.current)h5.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let h=await c9(X,k>0,O);if(h?.ids?.length)I(h.ids)}catch(h){let e=h?.message||"";if(k===0&&e.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let _0=await c9(X,!0,O);if(_0?.ids?.length)I(_0.ids);return}console.error("Failed to delete post:",h),alert(`Failed to delete message: ${e}`)}},[j,_$,c4]),o6=x(async()=>{try{let G=await oK();A1(S9(G));let X=G?.user||{};v_((k)=>{let I=typeof X.name==="string"&&X.name.trim()?X.name.trim():"You",h=typeof X.avatar_url==="string"?X.avatar_url.trim():null,e=typeof X.avatar_background==="string"&&X.avatar_background.trim()?X.avatar_background.trim():null;if(k.name===I&&k.avatar_url===h&&k.avatar_background===e)return k;return{name:I,avatar_url:h,avatar_background:e}});let O=(G?.agents||[]).find((k)=>k.id==="default");P(O?.name,O?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=j,X=await f5(G);if(u1.current!==G)return;if(X)L1(X)}catch{}},[P,j]);p(()=>{o6();let G=Z$("sidebarWidth",null),X=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(o_.current=X,m_.current)m_.current.style.setProperty("--sidebar-width",`${X}px`)},[o6]);let U$=H1||l!==null,s6=x((G)=>{if(!G||typeof G!=="object")return;let X=G.agent_id;if(!X)return;let{agent_name:O,agent_avatar:k}=G;if(!O&&k===void 0)return;let I=b_.current?.[X]||{id:X},h=I.name||null,e=I.avatar_url??I.avatarUrl??I.avatar??null,$0=!1,_0=!1;if(O&&O!==I.name)h=O,_0=!0;if(k!==void 0){let s=typeof k==="string"?k.trim():null,H0=typeof e==="string"?e.trim():null,x0=s||null;if(x0!==(H0||null))e=x0,$0=!0}if(!_0&&!$0)return;if(A1((s)=>{let x0={...s[X]||{id:X}};if(_0)x0.name=h;if($0)x0.avatar_url=e;return{...s,[X]:x0}}),X==="default")P(h,e,$0?Date.now():null)},[P]),a6=x((G)=>{if(!G||typeof G!=="object")return;let X=G.user_name??G.userName,O=G.user_avatar??G.userAvatar,k=G.user_avatar_background??G.userAvatarBackground;if(X===void 0&&O===void 0&&k===void 0)return;v_((I)=>{let h=typeof X==="string"&&X.trim()?X.trim():I.name||"You",e=O===void 0?I.avatar_url:typeof O==="string"&&O.trim()?O.trim():null,$0=k===void 0?I.avatar_background:typeof k==="string"&&k.trim()?k.trim():null;if(I.name===h&&I.avatar_url===e&&I.avatar_background===$0)return I;return{name:h,avatar_url:e,avatar_background:$0}})},[]),l5=x((G)=>{if(!G||typeof G!=="object")return;let X=G.model??G.current;if(X!==void 0)i0(X);if(G.thinking_level!==void 0)Q1(G.thinking_level??null);if(G.supports_thinking!==void 0)T1(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)f1(G.provider_usage??null)},[]),z$=x(()=>{let G=j;n9(G).then((X)=>{if(u1.current!==G)return;if(X)l5(X)}).catch(()=>{})},[l5,j]),g1=x(()=>{let G=j,X=(O)=>Array.isArray(O)?O.filter((k)=>k&&typeof k.chat_jid==="string"&&typeof k.agent_name==="string"&&k.agent_name.trim()):[];Promise.all([d9().catch(()=>({chats:[]})),b5(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([O,k])=>{if(u1.current!==G)return;let I=X(O?.chats),h=X(k?.chats);if(h.length===0){p1(I);return}let e=new Map(I.map((_0)=>[_0.chat_jid,_0])),$0=h.map((_0)=>{let s=e.get(_0.chat_jid);return s?{..._0,...s,is_active:s.is_active??_0.is_active}:_0});$0.sort((_0,s)=>{if(_0.chat_jid===G&&s.chat_jid!==G)return-1;if(s.chat_jid===G&&_0.chat_jid!==G)return 1;let H0=Boolean(_0.archived_at),x0=Boolean(s.archived_at);if(H0!==x0)return H0?1:-1;if(Boolean(_0.is_active)!==Boolean(s.is_active))return _0.is_active?-1:1;return String(_0.chat_jid).localeCompare(String(s.chat_jid))}),p1($0)}).catch(()=>{if(u1.current!==G)return;p1([])})},[j]),v1=x(()=>{b5(r0).then((G)=>{let X=Array.isArray(G?.chats)?G.chats.filter((O)=>O&&typeof O.chat_jid==="string"&&typeof O.agent_name==="string"):[];e1(X)}).catch(()=>{})},[r0]),Bj=x((G)=>{let X=G?.row_id;if(X==null)return;S1.current.add(X),C0((O)=>O.filter((k)=>k?.row_id!==X)),tK(X,p6(j)).then(()=>{_1()}).catch((O)=>{console.warn("[queue] Failed to steer queued item:",O),i("Failed to steer message","The queued message could not be sent as steering.","warning"),S1.current.delete(X),_1()})},[j,_1,C0,i]),Xj=x((G)=>{let X=G?.row_id;if(X==null)return;let O=t0.current.filter((k)=>k?.row_id!==X).length;S1.current.add(X),l1(O),C0((k)=>k.filter((I)=>I?.row_id!==X)),eK(X,p6(j)).then(()=>{_1()}).catch((k)=>{console.warn("[queue] Failed to remove queued item:",k),i("Failed to remove message","The queued message could not be removed.","warning"),S1.current.delete(X),_1()})},[l1,j,_1,C0,i]),F$=x((G)=>{if(!G||typeof G!=="object")return;if(g1(),v1(),G?.queued==="followup"||G?.queued==="steer"){_1();return}let X=G?.command;if(X&&typeof X==="object"&&(X?.queued_followup||X?.queued_steer))_1()},[g1,v1,_1]),i5=x(()=>{if(K_.current)K_.current.abort(),K_.current=null;a0(null)},[]),d$=x(async(G)=>{let X=String(G||"").trim();if(!X)return i("BTW needs a question","Usage: /btw <question>","warning"),!0;if(K_.current)K_.current.abort();let O=new AbortController;K_.current=O,a0({question:X,answer:"",thinking:"",error:null,model:null,status:"running"});try{let k=await _Q(X,{signal:O.signal,chatJid:B2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(I,h)=>{if(I==="side_prompt_start")a0((e)=>e?{...e,status:"running"}:e)},onThinkingDelta:(I)=>{a0((h)=>h?{...h,thinking:`${h.thinking||""}${I||""}`}:h)},onTextDelta:(I)=>{a0((h)=>h?{...h,answer:`${h.answer||""}${I||""}`}:h)}});if(K_.current!==O)return!0;a0((I)=>I?{...I,answer:k?.result||I.answer||"",thinking:k?.thinking||I.thinking||"",model:k?.model||null,status:"success",error:null}:I)}catch(k){if(O.signal.aborted)return!0;a0((I)=>I?{...I,status:"error",error:k?.payload?.error||k?.message||"BTW request failed."}:I)}finally{if(K_.current===O)K_.current=null}return!0},[j,i]),Vj=x(async({content:G})=>{let X=G2(G);if(!X)return!1;if(X.type==="help")return i("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(X.type==="clear")return i5(),i("BTW cleared","Closed the side conversation panel.","info"),!0;if(X.type==="ask")return await d$(X.question),!0;return!1},[i5,d$,i]),Wj=x(()=>{if(w0?.question)d$(w0.question)},[w0,d$]),Lj=x(async()=>{let G=W2(w0);if(!G)return;try{let X=await i4("default",G,null,[],U$?"queue":null,j);F$(X),i(X?.queued==="followup"?"BTW queued":"BTW injected",X?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(X){i("BTW inject failed",X?.message||"Could not inject BTW answer into chat.","warning")}},[w0,F$,U$,i]),t6=x(async(G=null)=>{let[X,O,k,I,h,e,$0]=await Promise.allSettled([l6(j),f5(j),o9(j),n9(j),d9(),b5(r0),l4(20,null,j)]),_0=X.status==="fulfilled"?X.value:null,s=O.status==="fulfilled"?O.value:null,H0=k.status==="fulfilled"?k.value:null,x0=I.status==="fulfilled"?I.value:null,t1=h.status==="fulfilled"?h.value:null,E1=e.status==="fulfilled"?e.value:null,a_=$0.status==="fulfilled"?$0.value:null,I_=Array.isArray(a_?.posts)?a_.posts:Array.isArray(i1)?i1:[],j3=I_.length?I_[I_.length-1]:null,Aj=I_.filter((o5)=>o5?.data?.is_bot_message).length,Mj=I_.filter((o5)=>!o5?.data?.is_bot_message).length,N3=Number(H0?.count??t0.current.length??0)||0,Z3=Array.isArray(t1?.chats)?t1.chats.length:q1.length,kj=Array.isArray(E1?.chats)?E1.chats.length:g0.length,Y3=Number(s?.percent??B1?.percent??0)||0,Pj=Number(s?.tokens??B1?.tokens??0)||0,Ij=Number(s?.contextWindow??B1?.contextWindow??0)||0,Cj=x0?.current??v0??null,yj=x0?.thinking_level??N1??null,Tj=x0?.supports_thinking??d0,Sj=_0?.status||(H1?"active":"idle"),xj=_0?.data?.type||_0?.type||null;return{generatedAt:new Date().toISOString(),request:G,chat:{currentChatJid:j,rootChatJid:r0,activeChats:Z3,branches:kj},agent:{status:Sj,phase:xj,running:Boolean(H1)},model:{current:Cj,thinkingLevel:yj,supportsThinking:Boolean(Tj)},context:{tokens:Pj,contextWindow:Ij,percent:Y3},queue:{count:N3},timeline:{loadedPosts:I_.length,botPosts:Aj,userPosts:Mj,latestPostId:j3?.id??null,latestTimestamp:j3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(Y3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,N3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,Z3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,I_.length*5))}]}},[q1,v0,N1,B1,g0,j,r0,H1,i1,d0]),O$=x(()=>{z$(),g1(),v1(),_1(),k_()},[z$,g1,v1,_1,k_]);p(()=>{O$();let G=setInterval(()=>{z$(),g1(),v1(),_1()},60000);return()=>clearInterval(G)},[O$,z$,g1,v1,_1]),p(()=>{v1()},[v1]),p(()=>{let G=!1,X=()=>{if(G)return;requestAnimationFrame(()=>{if(G)return;M1()})};if(E)return h_(E),()=>{G=!0};if(A)return p9(A,50,0,j,C,r0).then((O)=>{if(G)return;F1(O.results),e4(!1)}).catch((O)=>{if(G)return;console.error("Failed to search:",O),F1([]),e4(!1)}),()=>{G=!0};return h_().then(()=>{X()}).catch((O)=>{if(G)return;console.error("Failed to load timeline:",O)}),()=>{G=!0}},[j,E,A,C,r0,h_,M1,e4,F1]),p(()=>{let G=b4.current||j;f4.current.set(G,M_())},[j,M_]),p(()=>{let G=b4.current||j;if(G===j)return;f4.current.set(G,M_()),b4.current=j,S1.current.clear(),p4(f4.current.get(j)||null),_1(),P_(),k_()},[j,P_,k_,_1,p4,M_]);let Uj=x(()=>{let{currentHashtag:G,searchQuery:X,searchOpen:O}=R1.current||{};if(!G&&!X&&!O)n1();O$()},[O$,n1]),H$=x((G,X="streaming")=>{let O=O2({...G,...G&&G.status?{}:{status:X}});if(!O)return;let k=h1(O);if(k&&G0.current.has(k))return;m((I)=>{let h=h1(I),e=Boolean(k&&h&&k===h),$0={...e&&I?.artifact?I.artifact:{},...O.artifact||{}};return{...e&&I?I:{},...O,artifact:$0,source:"live",originChatJid:O.originChatJid||j,openedAt:e&&I?.openedAt?I.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[j]),n5=x((G,X)=>{let O=X?.turn_id,k=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null,h=k?k===j:G==="connected"||G==="workspace_update";if(h)s6(X),a6(X);if(G==="ui_theme"){$2(X);return}if(G==="generated_widget_open"){if(!h)return;if(O&&!q0.current)m1(O);H$(X,"loading");return}if(G==="generated_widget_delta"){if(!h)return;if(O&&!q0.current)m1(O);H$(X,"streaming");return}if(G==="generated_widget_final"){if(!h)return;if(O&&!q0.current)m1(O);H$(X,"final");return}if(G==="generated_widget_error"){if(!h)return;H$(X,"error");return}if(G==="generated_widget_close"){if(!h)return;let s=h1(X);m((H0)=>{if(!H0||H0?.source!=="live")return H0;let x0=h1(H0);if(s&&x0&&s!==x0)return H0;return null});return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))u0()}if(G==="connected"){t(null),d({text:"",totalLines:0}),N0(""),Q0({text:"",totalLines:0}),U0(null),P0.current=null,e0();let s=j;l6(s).then((E1)=>{if(u1.current!==s)return;if(!E1||E1.status!=="active"||!E1.data)return;let a_=E1.data,I_=a_.turn_id||a_.turnId;if(I_)m1(I_);if(r({clearSilence:!0}),X1(a_),E1.thought&&E1.thought.text)X0.current=E1.thought.text,Q0({text:E1.thought.text,totalLines:E1.thought.totalLines||0});if(E1.draft&&E1.draft.text)T0.current=E1.draft.text,d({text:E1.draft.text,totalLines:E1.draft.totalLines||0})}).catch((E1)=>{console.warn("Failed to fetch agent status:",E1)});let{currentHashtag:H0,searchQuery:x0,searchOpen:t1}=R1.current||{};if(!H0&&!x0&&!t1)n1();O$();return}if(G==="agent_status"){if(!h){if(X?.type==="done"||X?.type==="error")g1(),v1();return}if(X.type==="done"||X.type==="error"){if(O&&q0.current&&O!==q0.current)return;if(X.type==="done"){q4(O||q0.current);let{currentHashtag:s,searchQuery:H0,searchOpen:x0}=R1.current||{};if(!s&&!H0&&!x0)n1();if(X.context_usage)L1(X.context_usage)}if(B_.current=!1,e0(),S1.current.clear(),g1(),_1(),d({text:"",totalLines:0}),N0(""),Q0({text:"",totalLines:0}),U0(null),X.type==="error")t({type:"error",title:X.title||"Agent error"}),setTimeout(()=>t(null),8000);else t(null)}else{if(O)m1(O);if(r({running:!0,clearSilence:!0}),X.type==="thinking")T0.current="",X0.current="",d({text:"",totalLines:0}),N0(""),Q0({text:"",totalLines:0});f_.current=X,t((s)=>{if(s&&s.type===X.type&&s.title===X.title)return s;return X})}return}if(G==="agent_steer_queued"){if(!h)return;if(O&&q0.current&&O!==q0.current)return;let s=O||q0.current;if(!s)return;I0.current=s,k0(s);return}if(G==="agent_followup_queued"){if(!h)return;let s=X?.row_id,H0=X?.content;if(s!=null&&typeof H0==="string"&&H0.trim())C0((x0)=>{if(x0.some((t1)=>t1?.row_id===s))return x0;return[...x0,{row_id:s,content:H0,timestamp:X?.timestamp||null,thread_id:X?.thread_id??null}]});_1();return}if(G==="agent_followup_consumed"){if(!h)return;let s=X?.row_id;if(s!=null){let E1=t0.current.filter((a_)=>a_.row_id!==s).length;l1(E1),C0((a_)=>a_.filter((I_)=>I_.row_id!==s))}_1();let{currentHashtag:H0,searchQuery:x0,searchOpen:t1}=R1.current||{};if(!H0&&!x0&&!t1)n1();return}if(G==="agent_followup_removed"){if(!h)return;let s=X?.row_id;if(s!=null){let H0=t0.current.filter((x0)=>x0.row_id!==s).length;S1.current.add(s),l1(H0),C0((x0)=>x0.filter((t1)=>t1.row_id!==s))}_1();return}if(G==="agent_draft_delta"){if(!h)return;if(O&&q0.current&&O!==q0.current)return;if(O&&!q0.current)m1(O);if(r({running:!0,clearSilence:!0}),X?.reset)T0.current="";if(X?.delta)T0.current+=X.delta;let s=Date.now();if(!E4.current||s-E4.current>=100){E4.current=s;let H0=T0.current,x0=h6(H0);if(m0.current)d((t1)=>({text:t1?.text||"",totalLines:x0,fullText:H0}));else d({text:H0,totalLines:x0})}return}if(G==="agent_draft"){if(!h)return;if(O&&q0.current&&O!==q0.current)return;if(O&&!q0.current)m1(O);r({running:!0,clearSilence:!0});let s=X.text||"",H0=X.mode||(X.kind==="plan"?"replace":"append"),x0=Number.isFinite(X.total_lines)?X.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(X.kind==="plan")if(H0==="replace")N0(s);else N0((t1)=>(t1||"")+s);else if(!m0.current)T0.current=s,d({text:s,totalLines:x0});return}if(G==="agent_thought_delta"){if(!h)return;if(O&&q0.current&&O!==q0.current)return;if(O&&!q0.current)m1(O);if(r({running:!0,clearSilence:!0}),X?.reset)X0.current="";if(typeof X?.delta==="string")X0.current+=X.delta;let s=Date.now();if(n0.current&&(!r_.current||s-r_.current>=100)){r_.current=s;let H0=X0.current;Q0((x0)=>({text:x0?.text||"",totalLines:h6(H0),fullText:H0}))}return}if(G==="agent_thought"){if(!h)return;if(O&&q0.current&&O!==q0.current)return;if(O&&!q0.current)m1(O);r({running:!0,clearSilence:!0});let s=X.text||"",H0=Number.isFinite(X.total_lines)?X.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(!n0.current)X0.current=s,Q0({text:s,totalLines:H0});return}if(G==="model_changed"){if(!h)return;if(X?.model!==void 0)i0(X.model);if(X?.thinking_level!==void 0)Q1(X.thinking_level??null);if(X?.supports_thinking!==void 0)T1(Boolean(X.supports_thinking));let s=j;f5(s).then((H0)=>{if(u1.current!==s)return;if(H0)L1(H0)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:X}));return}if(u9(G)){if(!h)return;if(m9(G,X),G==="extension_ui_notify"&&typeof X?.message==="string")i(X.message,null,X?.type||"info");if(G==="extension_ui_error"&&typeof X?.error==="string")i("Extension UI error",X.error,"error",5000);return}let{currentHashtag:e,searchQuery:$0,searchOpen:_0}=R1.current;if(G==="agent_response"){if(!h)return;n$(),a1.current={post:X,turnId:q0.current}}if(!e&&!$0&&!_0&&h&&(G==="new_post"||G==="new_reply"||G==="agent_response"))F1((s)=>{if(!s)return[X];if(s.some((H0)=>H0.id===X.id))return s;return[...s,X]}),G4.current?.();if(G==="interaction_updated"){if(!h)return;if(e||$0||_0)return;F1((s)=>{if(!s)return s;if(!s.some((H0)=>H0.id===X.id))return s;return s.map((H0)=>H0.id===X.id?X:H0)})}if(G==="interaction_deleted"){if(!h)return;if(e||$0||_0)return;let s=X?.ids||[];if(s.length){if(c4(()=>{F1((H0)=>H0?H0.filter((x0)=>!s.includes(x0.id)):H0)}),d6.current)h5.current?.({preserveScroll:!0,preserveMode:"top"})}}},[H$,e0,u0,j,h5,r,q4,c4,g1,v1,n1,n$,m1,X1,s6,a6,z$,_1,C0]);p(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=n5,G.reset=()=>{n$(),e0(),t(null),d({text:"",totalLines:0}),N0(""),Q0({text:"",totalLines:0}),U0(null)},G.finalize=()=>r6(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[e0,r6,n5,n$]),A9({handleSseEvent:n5,handleConnectionStatusChange:Nj,loadPosts:h_,onWake:Uj,chatJid:j}),p(()=>{if(!_$||_$.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let X=G.slice(5);C1(X),history.replaceState(null,"",location.pathname+location.search)},[_$,C1]);let d5=l!==null;p(()=>{if(q!=="connected")return;let X=setInterval(()=>{let{currentHashtag:O,searchQuery:k,searchOpen:I}=R1.current||{},h=!O&&!k&&!I;if(d5){if(h)n1();_1(),P_(),k_()}else{if(h)n1();P_(),k_()}},d5?15000:60000);return()=>clearInterval(X)},[q,d5,P_,k_,_1,n1]),p(()=>{return h9(()=>{P_(),k_(),_1()})},[P_,k_,_1]);let zj=x(()=>{$4((G)=>!G)},[]),e6=x((G)=>{if(typeof window>"u")return;let X=String(G||"").trim();if(!X||X===j)return;let O=o4(window.location.href,X,{chatOnly:N});$?.(O)},[N,j,$]),r5=x(()=>{if(typeof window>"u"||!F0?.chat_jid)return;let G=Date.now(),X=c6();if(!X)return;if(P4.current||G<g4.current||X.inFlight||G<X.cooldownUntil)return;h4(F0.agent_name||""),t4(!0)},[F0]),J$=x(()=>{t4(!1),h4("")},[]),_3=x(async(G)=>{if(typeof window>"u"||!F0?.chat_jid)return;if(typeof G!=="string"){r5();return}let X=Date.now(),O=c6();if(!O)return;if(P4.current||X<g4.current||O.inFlight||X<O.cooldownUntil)return;P4.current=!0,O.inFlight=!0,m4(!0);try{let k=F0.agent_name||"",h=G.trim()||k,e=await sK(F0.chat_jid,{agentName:h});await Promise.allSettled([g1(),v1()]);let $0=e?.branch?.agent_name||h||k;i("Branch renamed",`@${$0}`,"info",3500),J$()}catch(k){let I=k instanceof Error?k.message:String(k||"Could not rename branch."),h=/already in use/i.test(I||"")?`${I} Switch to or restore that existing session from the session manager.`:I;i("Could not rename branch",h||"Could not rename branch.","warning",5000)}finally{P4.current=!1,m4(!1);let k=Date.now()+iK;g4.current=k;let I=c6();if(I)I.inFlight=!1,I.cooldownUntil=k}},[J$,F0,g1,v1,r5,m4,i]),$3=x(async(G=null)=>{if(typeof window>"u")return;let X=typeof G==="string"&&G.trim()?G.trim():"",O=typeof j==="string"&&j.trim()?j.trim():"",k=X||F0?.chat_jid||O;if(!k){i("Could not prune branch","No active session is selected yet.","warning",4000);return}let I=(F0?.chat_jid===k?F0:null)||g0.find((_0)=>_0?.chat_jid===k)||q1.find((_0)=>_0?.chat_jid===k)||null;if(I?.chat_jid===(I?.root_chat_jid||I?.chat_jid)){i("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let e=`@${I?.agent_name||k}${I?.chat_jid?` — ${I.chat_jid}`:""}`;if(!window.confirm(`Prune ${e}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await aK(k),await Promise.allSettled([g1(),v1()]);let _0=I?.root_chat_jid||"web:default";i("Branch pruned",`${e} has been archived.`,"info",3000);let s=o4(window.location.href,_0,{chatOnly:N});$?.(s)}catch(_0){let s=_0 instanceof Error?_0.message:String(_0||"Could not prune branch.");i("Could not prune branch",s||"Could not prune branch.","warning",5000)}},[q1,N,F0,g0,j,$,g1,v1,i]),Fj=x(async(G)=>{let X=typeof G==="string"?G.trim():"";if(!X||typeof r9!=="function")return;try{let O=await r9(X);await Promise.allSettled([g1(),v1()]);let k=O?.branch,I=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():X,h=typeof k?.agent_name==="string"&&k.agent_name.trim()?`@${k.agent_name.trim()}`:I;i("Branch restored",`Restored ${h}.`,"info",3200);let e=o4(window.location.href,I,{chatOnly:N});$?.(e)}catch(O){let k=O instanceof Error?O.message:String(O||"Could not restore branch.");i("Could not restore branch",k||"Could not restore branch.","warning",5000)}},[N,$,g1,v1,i]);p(()=>{if(!Q||typeof window>"u")return;let G=!1;return(async()=>{try{i_({status:"running",message:"Preparing a new chat branch…"});let X=await M$(B);if(G)return;let O=X?.branch,k=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!k)throw Error("Branch fork did not return a chat id.");let I=o4(window.location.href,k,{chatOnly:!0});$?.(I,{replace:!0})}catch(X){if(G)return;i_({status:"error",message:I5(X)})}})(),()=>{G=!0}},[Q,B,$]);let Oj=x((G)=>{if(!G||typeof G!=="object")return;let X=h1(G);if(X)G0.current.delete(X);m({...G,openedAt:new Date().toISOString()})},[]),D$=x(()=>{m((G)=>{let X=h1(G);if(G?.source==="live"&&X)G0.current.add(X);return null})},[]),Hj=x((G,X)=>{let O=typeof G?.kind==="string"?G.kind:"",k=h1(X);if(!O||!k)return;if(O==="widget.close"){D$();return}if(O==="widget.submit"){let I=E2(G?.payload),h=A2(G?.payload),e=new Date().toISOString();if(m(($0)=>{let _0=h1($0);if(!$0||_0!==k)return $0;return{...$0,runtimeState:{...$0.runtimeState||{},lastEventKind:O,lastEventPayload:G?.payload||null,lastSubmitAt:e,lastHostUpdate:{type:"submit_pending",submittedAt:e,preview:I||null}}}}),!I){if(i("Widget submission received","The widget submitted data without a message payload yet.","info",3500),h)D$();return}(async()=>{try{let $0=await i4("default",I,null,[],U$?"queue":null,j);if(F$($0),m((_0)=>{let s=h1(_0);if(!_0||s!==k)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastHostUpdate:{type:$0?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:e,preview:I,queued:$0?.queued||null}}}}),i($0?.queued==="followup"?"Widget submission queued":"Widget submission sent",$0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),h)D$()}catch($0){m((_0)=>{let s=h1(_0);if(!_0||s!==k)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:e,preview:I,error:$0?.message||"Could not send the widget message."}}}}),i("Widget submission failed",$0?.message||"Could not send the widget message.","warning",5000)}})();return}if(O==="widget.ready"||O==="widget.request_refresh"){let I=new Date().toISOString(),h=Boolean(G?.payload?.buildDashboard||G?.payload?.dashboardKind==="internal-state"),e=Number(X?.runtimeState?.refreshCount||0)+1;if(m(($0)=>{let _0=h1($0);if(!$0||_0!==k)return $0;return{...$0,runtimeState:{...$0.runtimeState||{},lastEventKind:O,lastEventPayload:G?.payload||null,...O==="widget.ready"?{readyAt:I,lastHostUpdate:{type:"ready_ack",at:I}}:{},...O==="widget.request_refresh"?{lastRefreshRequestAt:I,refreshCount:e,lastHostUpdate:{type:h?"refresh_building":"refresh_ack",at:I,count:e,echo:G?.payload||null}}:{}}}}),O==="widget.request_refresh")if(h)(async()=>{try{let $0=await t6(G?.payload||null);m((_0)=>{let s=h1(_0);if(!_0||s!==k)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},dashboard:$0,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:e,echo:G?.payload||null}}}}),i("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch($0){m((_0)=>{let s=h1(_0);if(!_0||s!==k)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:e,error:$0?.message||"Could not build dashboard."}}}}),i("Dashboard build failed",$0?.message||"Could not build dashboard.","warning",5000)}})();else i("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[t6,j,D$,F$,U$,i]);p(()=>{G0.current.clear(),m(null)},[j]);let Jj=x(async()=>{if(typeof window>"u")return;try{let X=(await M$(j))?.branch,O=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([g1(),v1()]);let k=X?.agent_name?`@${X.agent_name}`:O;i("New branch created",`Switched to ${k}.`,"info",2500);let I=o4(window.location.href,O,{chatOnly:N});$?.(I)}catch(G){i("Could not create branch",I5(G),"warning",5000)}},[N,j,$,g1,v1,i]),r$=x((G,X)=>{if(typeof window>"u"||V)return;let O=typeof G==="string"&&G.trim()?G.trim():"";if(!O)return;let k=()=>{let $0=s0.get(O);if(!$0||$0.dirty)return;O4(O)},I=Z7(O);if(!I){i("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000);return}let h=N7(window.location.href,O,{label:typeof X==="string"&&X.trim()?X.trim():void 0,chatJid:j});if(I.mode==="tab"){if(!window.open(h,I.target)){i("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}k();return}let e=a8(I);if(!e){i("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}t8(e,{title:typeof X==="string"&&X.trim()?`Opening ${X}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."}),e8(e,h),k()},[j,O4,V,i]);p(()=>{let G=(O)=>{let k=O.detail?.path,I=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(k)J1(k,I?{label:I}:void 0)},X=(O)=>{let k=O.detail?.path,I=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(k)r$(k,I)};return document.addEventListener("office-viewer:open-tab",G),document.addEventListener("drawio:open-tab",G),document.addEventListener("csv-viewer:open-tab",G),document.addEventListener("pdf-viewer:open-tab",G),document.addEventListener("image-viewer:open-tab",G),document.addEventListener("video-viewer:open-tab",G),document.addEventListener("vnc:open-tab",G),document.addEventListener("pane:popout",X),()=>{document.removeEventListener("office-viewer:open-tab",G),document.removeEventListener("drawio:open-tab",G),document.removeEventListener("csv-viewer:open-tab",G),document.removeEventListener("pdf-viewer:open-tab",G),document.removeEventListener("image-viewer:open-tab",G),document.removeEventListener("video-viewer:open-tab",G),document.removeEventListener("vnc:open-tab",G),document.removeEventListener("pane:popout",X)}},[r$,J1]);let Dj=x(async()=>{if(typeof window>"u"||V)return;let G=_7(j);if(!G){i("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(G.mode==="tab"){let O=j7(window.location.href,j,{chatOnly:!0});if(!window.open(O,G.target))i("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let X=a8(G);if(!X){i("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}t8(X,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let k=(await M$(j))?.branch,I=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():null;if(!I)throw Error("Branch fork did not return a chat id.");try{let e=await B8();p1(Array.isArray(e?.chats)?e.chats:[])}catch{}try{let e=await b5(r0);e1(Array.isArray(e?.chats)?e.chats:[])}catch{}let h=o4(window.location.href,I,{chatOnly:!0});e8(X,h)}catch(O){$7(X),i("Could not open branch window",I5(O),"error",5000)}},[j,r0,V,i]);p(()=>{if(!h0)return;if(typeof window>"u")return;let G=m_.current;if(!G)return;if(!A4.current){let X=Z$("editorWidth",null),O=o_.current||280;A4.current=Number.isFinite(X)?X:O}if(G.style.setProperty("--editor-width",`${A4.current}px`),!z1.current){let X=Z$("dockHeight",null);z1.current=Number.isFinite(X)?X:200}G.style.setProperty("--dock-height",`${z1.current}px`)},[h0]),p(()=>{if(!b1||N)return;let G=(X)=>{if(X.ctrlKey&&X.key==="`")X.preventDefault(),Y_()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[Y_,b1,N]),p(()=>{if(N)return;let G=(X)=>{if(X.ctrlKey&&X.shiftKey&&(X.key==="Z"||X.key==="z")){X.preventDefault(),Y4();return}if(X.key==="Escape"&&I1)X.preventDefault(),s1()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[Y4,s1,I1,N]);let Ej=Boolean(p0&&p0===(l?.turn_id||z0));if(Q)return z`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${c1.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${c1.message}</p>
                    </div>
                </div>
            </div>
        `;if(Z)return z`
            <div class=${`app-shell pane-popout${h0?" editor-open":""}`} ref=${m_}>
                <div class="editor-pane-container pane-popout-container">
                    ${h0&&!G1&&z`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${G_?z`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${J_}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${U1.length>1&&z`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${U1.map((G)=>z`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${G.id===f0?" active":""}`}
                                                                onClick=${(X)=>{F_(G.id),X.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${G.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${f0&&w1.has(f0)&&z`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(G)=>{O_(f0),G.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:z`
                                    <div class="pane-popout-controls-label" aria-label=${J_}>${J_}</div>
                                `}
                        </div>
                    `}
                    ${h0?z`<div class="editor-pane-host" ref=${N_}></div>`:z`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${h0&&f0&&w1.has(f0)&&z`
                        <${b6}
                            getContent=${()=>Z_.current?.getContent?.()}
                            path=${f0}
                            onClose=${()=>O_(f0)}
                        />
                    `}
                </div>
            </div>
        `;return z`
        <div class=${`app-shell${Y1?"":" workspace-collapsed"}${h0?" editor-open":""}${N?" chat-only":""}${I1?" zen-mode":""}`} ref=${m_}>
            ${I4&&z`
                <div class="rename-branch-overlay" onPointerDown=${(G)=>{if(G.target===G.currentTarget)J$()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(G)=>{G.preventDefault(),_3(s_)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${g_}
                            value=${s_}
                            onInput=${(G)=>{let X=G.currentTarget?.value??"";h4(String(X))}}
                            onKeyDown=${(G)=>{if(G.key==="Escape")G.preventDefault(),J$()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${X_}>
                                ${X_?"Renaming…":"Save"}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${J$}
                                disabled=${X_}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!N&&z`
                <${H9}
                    onFileSelect=${f}
                    visible=${Y1}
                    active=${Y1||h0}
                    onOpenEditor=${J1}
                    onOpenTerminalTab=${H4}
                    onOpenVncTab=${J4}
                    onToggleTerminal=${b1?Y_:void 0}
                    terminalVisible=${Boolean(b1&&q_)}
                />
                <button
                    class=${`workspace-toggle-tab${Y1?" open":" closed"}`}
                    onClick=${zj}
                    title=${Y1?"Hide workspace":"Show workspace"}
                    aria-label=${Y1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${a9} onTouchStart=${t9}></div>
            `}
            ${o1&&z`
                <div class="editor-pane-container">
                    ${I1&&z`<div class="zen-hover-zone"></div>`}
                    ${h0&&z`
                        <${D9}
                            tabs=${U1}
                            activeId=${f0}
                            onActivate=${F_}
                            onClose=${O4}
                            onCloseOthers=${R4}
                            onCloseAll=${i$}
                            onTogglePin=${a4}
                            onTogglePreview=${O_}
                            previewTabs=${w1}
                            onToggleDock=${b1?Y_:void 0}
                            dockVisible=${b1&&q_}
                            onToggleZen=${Y4}
                            zenMode=${I1}
                            onPopOutTab=${V?void 0:r$}
                        />
                    `}
                    ${h0&&z`<div class="editor-pane-host" ref=${N_}></div>`}
                    ${h0&&f0&&w1.has(f0)&&z`
                        <${b6}
                            getContent=${()=>Z_.current?.getContent?.()}
                            path=${f0}
                            onClose=${()=>O_(f0)}
                        />
                    `}
                    ${b1&&q_&&z`<div class="dock-splitter" onMouseDown=${$j} onTouchStart=${jj}></div>`}
                    ${b1&&z`<div class=${`dock-panel${q_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!V&&z`
                                    <button class="dock-panel-action" onClick=${()=>r$(v$,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                                            <path d="M8.5 2.25h5.25v5.25"/>
                                            <path d="M13.75 2.25 7.75 8.25"/>
                                        </svg>
                                    </button>
                                `}
                                <button class="dock-panel-close" onClick=${Y_} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                        <line x1="4" y1="4" x2="12" y2="12"/>
                                        <line x1="12" y1="4" x2="4" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="dock-panel-body" ref=${d_}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${e9} onTouchStart=${_j}></div>
            `}
            <div class="container">
                ${A&&x9()&&z`<div class="search-results-spacer"></div>`}
                ${N&&z`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${F0?.agent_name?`@${F0.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${F0?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${g0.length>1&&z`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(G)=>e6(G.currentTarget.value)}
                                    >
                                        ${g0.map((G)=>z`
                                            <option key=${G.chat_jid} value=${G.chat_jid}>
                                                ${`@${G.agent_name} — ${G.chat_jid}${G.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${F0?.chat_jid&&z`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${r5}
                                    title=${X_?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${X_}
                                >
                                    ${X_?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${F0?.chat_jid&&F0.chat_jid!==(F0.root_chat_jid||F0.chat_jid)&&z`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${$3}
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
                ${(E||A)&&z`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${Yj}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${E?`#${E}`:`Search: ${A} · ${__}`}</span>
                    </div>
                `}
                <${o2}
                    posts=${_$}
                    hasMore=${c5?n6:!1}
                    onLoadMore=${c5?s9:void 0}
                    timelineRef=${u_}
                    onHashtagClick=${Zj}
                    onMessageRef=${A0}
                    onScrollToMessage=${C1}
                    onFileRef=${W0}
                    onPostClick=${void 0}
                    onDeletePost=${Gj}
                    onOpenWidget=${Oj}
                    emptyMessage=${E?`No posts with #${E}`:A?`No results for "${A}"`:void 0}
                    agents=${W1}
                    user=${v4}
                    reverse=${c5}
                    removingPostIds=${j_}
                    searchQuery=${A}
                />
                <${w2}
                    status=${l}
                    draft=${V0}
                    plan=${j0}
                    thought=${Y0}
                    pendingRequest=${B0}
                    intent=${g}
                    turnId=${z0}
                    steerQueued=${Ej}
                    onPanelToggle=${u5}
                />
                <${L2}
                    session=${w0}
                    onClose=${i5}
                    onRetry=${Wj}
                    onInject=${Lj}
                />
                <${P2}
                    widget=${d1}
                    onClose=${D$}
                    onWidgetEvent=${Hj}
                />
                <${p3}
                    onPost=${()=>{let{searchQuery:G,searchOpen:X}=R1.current||{};if(!G&&!X)h_(),M1()}}
                    onFocus=${M1}
                    searchMode=${H}
                    searchScope=${C}
                    onSearch=${Kj}
                    onSearchScopeChange=${R}
                    onEnterSearch=${Qj}
                    onExitSearch=${qj}
                    fileRefs=${D}
                    onRemoveFileRef=${v}
                    onClearFileRefs=${o}
                    onSetFileRefs=${K0}
                    messageRefs=${a}
                    onRemoveMessageRef=${A_}
                    onClearMessageRefs=${L}
                    onSetMessageRefs=${S}
                    onSwitchChat=${e6}
                    onRenameSession=${_3}
                    isRenameSessionInProgress=${X_}
                    onCreateSession=${Jj}
                    onDeleteSession=${$3}
                    onRestoreSession=${Fj}
                    activeEditorPath=${N?null:f0}
                    onAttachEditorFile=${N?void 0:Z0}
                    onOpenFilePill=${W0}
                    followupQueueCount=${S_}
                    followupQueueItems=${O1}
                    onInjectQueuedFollowup=${Bj}
                    onRemoveQueuedFollowup=${Xj}
                    onSubmitIntercept=${Vj}
                    onMessageResponse=${F$}
                    onSubmitError=${b}
                    onPopOutChat=${V?void 0:Dj}
                    isAgentActive=${U$}
                    activeChatAgents=${q1}
                    currentChatJid=${j}
                    connectionStatus=${q}
                    activeModel=${v0}
                    modelUsage=${Z1}
                    thinkingLevel=${N1}
                    supportsThinking=${d0}
                    contextUsage=${B1}
                    notificationsEnabled=${x_}
                    notificationPermission=${w_}
                    onToggleNotifications=${z4}
                    onModelChange=${i0}
                    onModelStateChange=${l5}
                />
                <${R2}
                    request=${B0}
                    onRespond=${()=>{U0(null),P0.current=null}}
                />
            </div>
        </div>
    `}function jQ(){let[_,$]=c(()=>typeof window>"u"?"http://localhost/":window.location.href);p(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=x((Z,Y={})=>{if(typeof window>"u")return;let{replace:K=!1}=Y||{},Q=new URL(String(Z||""),window.location.href).toString();if(K)window.history.replaceState(null,"",Q);else window.history.pushState(null,"",Q);$(window.location.href)},[]),N=y0(()=>new URL(_).searchParams,[_]);return z`<${$Q} locationParams=${N} navigate=${j} />`}T3(z`<${jQ} />`,document.getElementById("app"));

//# debugId=D6A70409EBDB096764756E2164756E21
//# sourceMappingURL=app.bundle.js.map
