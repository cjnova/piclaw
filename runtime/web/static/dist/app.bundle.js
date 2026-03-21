var Y5=Object.defineProperty;var z5=(_)=>_;function K5(_,$){this[_]=z5.bind(null,$)}var W5=(_,$)=>{for(var j in $)Y5(_,j,{get:$[j],enumerable:!0,configurable:!0,set:K5.bind($,j)})};var U1,_0,c3,q5,d$,I3,h3,i3,l3,a1,d1,o1,X5,V1={},L1=[],V5=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B1=Array.isArray;function R$(_,$){for(var j in $)_[j]=$[j];return _}function t1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function n3(_,$,j){var Z,N,G,Y={};for(G in $)G=="key"?Z=$[G]:G=="ref"?N=$[G]:Y[G]=$[G];if(arguments.length>2&&(Y.children=arguments.length>3?U1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(G in _.defaultProps)Y[G]===void 0&&(Y[G]=_.defaultProps[G]);return W1(_,Y,Z,N,null)}function W1(_,$,j,Z,N){var G={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++c3:N,__i:-1,__u:0};return N==null&&_0.vnode!=null&&_0.vnode(G),G}function O1(_){return _.children}function q1(_,$){this.props=_,this.context=$}function y2(_,$){if($==null)return _.__?y2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?y2(_):null}function L5(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],G=R$({},$);G.__v=$.__v+1,_0.vnode&&_0.vnode(G),e1(_.__P,G,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?y2($):j,!!(32&$.__u),N),G.__v=$.__v,G.__.__k[G.__i]=G,r3(Z,G,N),$.__e=$.__=null,G.__e!=j&&d3(G)}}function d3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),d3(_)}function M3(_){(!_.__d&&(_.__d=!0)&&d$.push(_)&&!Q1.__r++||I3!=_0.debounceRendering)&&((I3=_0.debounceRendering)||h3)(Q1)}function Q1(){try{for(var _,$=1;d$.length;)d$.length>$&&d$.sort(i3),_=d$.shift(),$=d$.length,L5(_)}finally{d$.length=Q1.__r=0}}function o3(_,$,j,Z,N,G,Y,q,L,X,Q){var V,H,P,T,g,f,w,M=Z&&Z.__k||L1,c=$.length;for(L=Q5(j,$,M,L,c),V=0;V<c;V++)(P=j.__k[V])!=null&&(H=P.__i!=-1&&M[P.__i]||V1,P.__i=V,f=e1(_,P,H,N,G,Y,q,L,X,Q),T=P.__e,P.ref&&H.ref!=P.ref&&(H.ref&&_4(H.ref,null,P),Q.push(P.ref,P.__c||T,P)),g==null&&T!=null&&(g=T),(w=!!(4&P.__u))||H.__k===P.__k?L=s3(P,L,_,w):typeof P.type=="function"&&f!==void 0?L=f:T&&(L=T.nextSibling),P.__u&=-7);return j.__e=g,L}function Q5(_,$,j,Z,N){var G,Y,q,L,X,Q=j.length,V=Q,H=0;for(_.__k=Array(N),G=0;G<N;G++)(Y=$[G])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[G]=W1(null,Y,null,null,null):B1(Y)?Y=_.__k[G]=W1(O1,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[G]=W1(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[G]=Y,L=G+H,Y.__=_,Y.__b=_.__b+1,q=null,(X=Y.__i=U5(Y,j,L,V))!=-1&&(V--,(q=j[X])&&(q.__u|=2)),q==null||q.__v==null?(X==-1&&(N>Q?H--:N<Q&&H++),typeof Y.type!="function"&&(Y.__u|=4)):X!=L&&(X==L-1?H--:X==L+1?H++:(X>L?H--:H++,Y.__u|=4))):_.__k[G]=null;if(V)for(G=0;G<Q;G++)(q=j[G])!=null&&(2&q.__u)==0&&(q.__e==Z&&(Z=y2(q)),t3(q,q));return Z}function s3(_,$,j,Z){var N,G;if(typeof _.type=="function"){for(N=_.__k,G=0;N&&G<N.length;G++)N[G]&&(N[G].__=_,$=s3(N[G],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=y2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function U5(_,$,j,Z){var N,G,Y,q=_.key,L=_.type,X=$[j],Q=X!=null&&(2&X.__u)==0;if(X===null&&q==null||Q&&q==X.key&&L==X.type)return j;if(Z>(Q?1:0)){for(N=j-1,G=j+1;N>=0||G<$.length;)if((X=$[Y=N>=0?N--:G++])!=null&&(2&X.__u)==0&&q==X.key&&L==X.type)return Y}return-1}function b3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||V5.test($)?j:j+"px"}function K1(_,$,j,Z,N){var G,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||b3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||b3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")G=$!=($=$.replace(l3,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+G]=j,j?Z?j.u=Z.u:(j.u=a1,_.addEventListener($,G?o1:d1,G)):_.removeEventListener($,G?o1:d1,G);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function C3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=a1++;else if($.t<j.u)return;return j(_0.event?_0.event($):$)}}}function e1(_,$,j,Z,N,G,Y,q,L,X){var Q,V,H,P,T,g,f,w,M,c,y,R,o,a,d,$_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),G=[q=$.__e=j.__e]),(Q=_0.__b)&&Q($);_:if(typeof $_=="function")try{if(w=$.props,M=$_.prototype&&$_.prototype.render,c=(Q=$_.contextType)&&Z[Q.__c],y=Q?c?c.props.value:Q.__:Z,j.__c?f=(V=$.__c=j.__c).__=V.__E:(M?$.__c=V=new $_(w,y):($.__c=V=new q1(w,y),V.constructor=$_,V.render=O5),c&&c.sub(V),V.state||(V.state={}),V.__n=Z,H=V.__d=!0,V.__h=[],V._sb=[]),M&&V.__s==null&&(V.__s=V.state),M&&$_.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=R$({},V.__s)),R$(V.__s,$_.getDerivedStateFromProps(w,V.__s))),P=V.props,T=V.state,V.__v=$,H)M&&$_.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),M&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(M&&$_.getDerivedStateFromProps==null&&w!==P&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(w,y),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(w,V.__s,y)===!1){$.__v!=j.__v&&(V.props=w,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),L1.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&Y.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(w,V.__s,y),M&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(P,T,g)})}if(V.context=y,V.props=w,V.__P=_,V.__e=!1,R=_0.__r,o=0,M)V.state=V.__s,V.__d=!1,R&&R($),Q=V.render(V.props,V.state,V.context),L1.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,R&&R($),Q=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++o<25);V.state=V.__s,V.getChildContext!=null&&(Z=R$(R$({},Z),V.getChildContext())),M&&!H&&V.getSnapshotBeforeUpdate!=null&&(g=V.getSnapshotBeforeUpdate(P,T)),a=Q!=null&&Q.type===O1&&Q.key==null?a3(Q.props.children):Q,q=o3(_,B1(a)?a:[a],$,j,Z,N,G,Y,q,L,X),V.base=$.__e,$.__u&=-161,V.__h.length&&Y.push(V),f&&(V.__E=V.__=null)}catch(i){if($.__v=null,L||G!=null)if(i.then){for($.__u|=L?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;G[G.indexOf(q)]=null,$.__e=q}else{for(d=G.length;d--;)t1(G[d]);s1($)}else $.__e=j.__e,$.__k=j.__k,i.then||s1($);_0.__e(i,$,j)}else G==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):q=$.__e=B5(j.__e,$,j,Z,N,G,Y,L,X);return(Q=_0.diffed)&&Q($),128&$.__u?void 0:q}function s1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(s1))}function r3(_,$,j){for(var Z=0;Z<j.length;Z++)_4(j[Z],j[++Z],j[++Z]);_0.__c&&_0.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(G){G.call(N)})}catch(G){_0.__e(G,N.__v)}})}function a3(_){return typeof _!="object"||_==null||_.__b>0?_:B1(_)?_.map(a3):R$({},_)}function B5(_,$,j,Z,N,G,Y,q,L){var X,Q,V,H,P,T,g,f=j.props||V1,w=$.props,M=$.type;if(M=="svg"?N="http://www.w3.org/2000/svg":M=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),G!=null){for(X=0;X<G.length;X++)if((P=G[X])&&"setAttribute"in P==!!M&&(M?P.localName==M:P.nodeType==3)){_=P,G[X]=null;break}}if(_==null){if(M==null)return document.createTextNode(w);_=document.createElementNS(N,M,w.is&&w),q&&(_0.__m&&_0.__m($,G),q=!1),G=null}if(M==null)f===w||q&&_.data==w||(_.data=w);else{if(G=G&&U1.call(_.childNodes),!q&&G!=null)for(f={},X=0;X<_.attributes.length;X++)f[(P=_.attributes[X]).name]=P.value;for(X in f)P=f[X],X=="dangerouslySetInnerHTML"?V=P:X=="children"||(X in w)||X=="value"&&("defaultValue"in w)||X=="checked"&&("defaultChecked"in w)||K1(_,X,null,P,N);for(X in w)P=w[X],X=="children"?H=P:X=="dangerouslySetInnerHTML"?Q=P:X=="value"?T=P:X=="checked"?g=P:q&&typeof P!="function"||f[X]===P||K1(_,X,P,f[X],N);if(Q)q||V&&(Q.__html==V.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(V&&(_.innerHTML=""),o3($.type=="template"?_.content:_,B1(H)?H:[H],$,j,Z,M=="foreignObject"?"http://www.w3.org/1999/xhtml":N,G,Y,G?G[0]:j.__k&&y2(j,0),q,L),G!=null)for(X=G.length;X--;)t1(G[X]);q||(X="value",M=="progress"&&T==null?_.removeAttribute("value"):T!=null&&(T!==_[X]||M=="progress"&&!T||M=="option"&&T!=f[X])&&K1(_,X,T,f[X],N),X="checked",g!=null&&g!=_[X]&&K1(_,X,g,f[X],N))}return _}function _4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){_0.__e(N,j)}}function t3(_,$,j){var Z,N;if(_0.unmount&&_0.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||_4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(G){_0.__e(G,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&t3(Z[N],$,j||typeof _.type!="function");j||t1(_.__e),_.__c=_.__=_.__e=void 0}function O5(_,$,j){return this.constructor(_,j)}function e3(_,$,j){var Z,N,G,Y;$==document&&($=document.documentElement),_0.__&&_0.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,G=[],Y=[],e1($,_=(!Z&&j||$).__k=n3(O1,null,[_]),N||V1,V1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?U1.call($.childNodes):null,G,!Z&&j?j:N?N.__e:$.firstChild,Z,Y),r3(G,_,Y)}U1=L1.slice,_0={__e:function(_,$,j,Z){for(var N,G,Y;$=$.__;)if((N=$.__c)&&!N.__)try{if((G=N.constructor)&&G.getDerivedStateFromError!=null&&(N.setState(G.getDerivedStateFromError(_)),Y=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),Y=N.__d),Y)return N.__E=N}catch(q){_=q}throw _}},c3=0,q5=function(_){return _!=null&&_.constructor===void 0},q1.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=R$({},this.state),typeof _=="function"&&(_=_(R$({},j),this.props)),_&&R$(j,_),_!=null&&this.__v&&($&&this._sb.push($),M3(this))},q1.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),M3(this))},q1.prototype.render=O1,d$=[],h3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i3=function(_,$){return _.__v.__b-$.__v.__b},Q1.__r=0,l3=/(PointerCapture)$|Capture$/i,a1=0,d1=C3(!1),o1=C3(!0),X5=0;var h2,B0,n1,T3,i2=0,_8=[],U0=_0,f3=U0.__b,S3=U0.__r,R3=U0.diffed,v3=U0.__c,u3=U0.unmount,m3=U0.__;function $4(_,$){U0.__h&&U0.__h(B0,_,i2||$),i2=0;var j=B0.__H||(B0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function v(_){return i2=1,F5(j8,_)}function F5(_,$,j){var Z=$4(h2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):j8(void 0,$),function(q){var L=Z.__N?Z.__N[0]:Z.__[0],X=Z.t(L,q);L!==X&&(Z.__N=[X,Z.__[1]],Z.__c.setState({}))}],Z.__c=B0,!B0.__f)){var N=function(q,L,X){if(!Z.__c.__H)return!0;var Q=Z.__c.__H.__.filter(function(H){return H.__c});if(Q.every(function(H){return!H.__N}))return!G||G.call(this,q,L,X);var V=Z.__c.props!==q;return Q.some(function(H){if(H.__N){var P=H.__[0];H.__=H.__N,H.__N=void 0,P!==H.__[0]&&(V=!0)}}),G&&G.call(this,q,L,X)||V};B0.__f=!0;var{shouldComponentUpdate:G,componentWillUpdate:Y}=B0;B0.componentWillUpdate=function(q,L,X){if(this.__e){var Q=G;G=void 0,N(q,L,X),G=Q}Y&&Y.call(this,q,L,X)},B0.shouldComponentUpdate=N}return Z.__N||Z.__}function m(_,$){var j=$4(h2++,3);!U0.__s&&$8(j.__H,$)&&(j.__=_,j.u=$,B0.__H.__h.push(j))}function k(_){return i2=5,R_(function(){return{current:_}},[])}function R_(_,$){var j=$4(h2++,7);return $8(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function I(_,$){return i2=8,R_(function(){return _},$)}function H5(){for(var _;_=_8.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(X1),$.__h.some(r1),$.__h=[]}catch(j){$.__h=[],U0.__e(j,_.__v)}}}U0.__b=function(_){B0=null,f3&&f3(_)},U0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),m3&&m3(_,$)},U0.__r=function(_){S3&&S3(_),h2=0;var $=(B0=_.__c).__H;$&&(n1===B0?($.__h=[],B0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(X1),$.__h.some(r1),$.__h=[],h2=0)),n1=B0},U0.diffed=function(_){R3&&R3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(_8.push($)!==1&&T3===U0.requestAnimationFrame||((T3=U0.requestAnimationFrame)||D5)(H5)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),n1=B0=null},U0.__c=function(_,$){$.some(function(j){try{j.__h.some(X1),j.__h=j.__h.filter(function(Z){return!Z.__||r1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],U0.__e(Z,j.__v)}}),v3&&v3(_,$)},U0.unmount=function(_){u3&&u3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{X1(Z)}catch(N){$=N}}),j.__H=void 0,$&&U0.__e($,j.__v))};var g3=typeof requestAnimationFrame=="function";function D5(_){var $,j=function(){clearTimeout(Z),g3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);g3&&($=requestAnimationFrame(j))}function X1(_){var $=B0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),B0=$}function r1(_){var $=B0;_.__c=_.__(),B0=$}function $8(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function j8(_,$){return typeof $=="function"?$(_):$}var Z8=function(_,$,j,Z){var N;$[0]=0;for(var G=1;G<$.length;G++){var Y=$[G++],q=$[G]?($[0]|=Y?1:2,j[$[G++]]):$[++G];Y===3?Z[0]=q:Y===4?Z[1]=Object.assign(Z[1]||{},q):Y===5?(Z[1]=Z[1]||{})[$[++G]]=q:Y===6?Z[1][$[++G]]+=q+"":Y?(N=_.apply(q,Z8(_,q,j,["",null])),Z.push(N),q[0]?$[0]|=2:($[G-2]=0,$[G]=N)):Z.push(q)}return Z},p3=new Map;function J5(_){var $=p3.get(this);return $||($=new Map,p3.set(this,$)),($=Z8(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,G=1,Y="",q="",L=[0],X=function(H){G===1&&(H||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,H,Y):G===3&&(H||Y)?(L.push(3,H,Y),G=2):G===2&&Y==="..."&&H?L.push(4,H,0):G===2&&Y&&!H?L.push(5,0,!0,Y):G>=5&&((Y||!H&&G===5)&&(L.push(G,0,Y,N),G=6),H&&(L.push(G,H,0,N),G=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(G===1&&X(),X(Q));for(var V=0;V<j[Q].length;V++)Z=j[Q][V],G===1?Z==="<"?(X(),L=[L],G=3):Y+=Z:G===4?Y==="--"&&Z===">"?(G=1,Y=""):Y=Z+Y[0]:q?Z===q?q="":Y+=Z:Z==='"'||Z==="'"?q=Z:Z===">"?(X(),G=1):G&&(Z==="="?(G=5,N=Y,Y=""):Z==="/"&&(G<5||j[Q][V+1]===">")?(X(),G===3&&(L=L[0]),G=L,(L=L[0]).push(2,0,G),G=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(X(),G=2):Y+=Z),G===3&&Y==="!--"&&(G=4,L=L[0])}return X(),L}(_)),$),arguments,[])).length>1?$:$[0]}var U=J5.bind(n3);var a0={};W5(a0,{uploadWorkspaceFile:()=>H1,uploadMedia:()=>W4,updateWorkspaceFile:()=>v5,submitAdaptiveCardAction:()=>q4,streamSidePrompt:()=>f5,steerAgentQueueItem:()=>T5,setWorkspaceVisibility:()=>s2,setAgentThoughtVisibility:()=>L4,sendPeerAgentMessage:()=>I5,sendAgentMessage:()=>z2,searchPosts:()=>Z4,restoreChatBranch:()=>x5,respondToAgentRequest:()=>F1,renameWorkspaceFile:()=>H4,renameChatBranch:()=>w5,removeAgentQueueItem:()=>C5,pruneChatBranch:()=>P5,moveWorkspaceEntry:()=>D4,getWorkspaceTree:()=>o2,getWorkspaceRawUrl:()=>D1,getWorkspaceFile:()=>B4,getWorkspaceDownloadUrl:()=>J1,getWorkspaceBranch:()=>R5,getTimeline:()=>l2,getThumbnailUrl:()=>Q4,getThread:()=>N4,getPostsByHashtag:()=>j4,getMediaUrl:()=>V$,getMediaText:()=>U4,getMediaInfo:()=>E2,getMediaBlob:()=>S5,getChatBranches:()=>A5,getAgents:()=>z4,getAgentThought:()=>V4,getAgentStatus:()=>K4,getAgentQueueState:()=>b5,getAgentModels:()=>d2,getAgentContext:()=>M5,getActiveChatAgents:()=>Y4,forkChatBranch:()=>n2,deleteWorkspaceFile:()=>J4,deletePost:()=>G4,createWorkspaceFile:()=>F4,createReply:()=>k5,createPost:()=>E5,attachWorkspaceFile:()=>O4,addToWhitelist:()=>X4,SSEClient:()=>y1});async function v_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function N8(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let G of $)if(G.startsWith("event:"))j=G.slice(6).trim()||"message";else if(G.startsWith("data:"))Z.push(G.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function y5(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:Y,done:q}=await j.read();if(q)break;N+=Z.decode(Y,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let X of L){let Q=N8(X);if(Q)$(Q.event,Q.data)}}N+=Z.decode();let G=N8(N);if(G)$(G.event,G.data)}async function l2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return v_(Z)}async function j4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return v_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function Z4(_,$=50,j=0,Z=null,N="current",G=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",q=N?`&scope=${encodeURIComponent(N)}`:"",L=G?`&root_chat_jid=${encodeURIComponent(G)}`:"";return v_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${Y}${q}${L}`)}async function N4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return v_(`/thread/${_}${j}`)}async function E5(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return v_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function k5(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return v_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function G4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return v_(N,{method:"DELETE"})}async function z2(_,$,j=null,Z=[],N=null,G=null){let Y=G?`?chat_jid=${encodeURIComponent(G)}`:"";return v_(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function Y4(){return v_("/agent/active-chats")}async function A5(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return v_(`/agent/branches${Z}`)}async function n2(_,$={}){return v_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function w5(_,$={}){return v_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function P5(_){return v_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function x5(_,$={}){return v_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function I5(_,$,j,Z="auto",N={}){let G={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return v_("/agent/peer-message",{method:"POST",body:JSON.stringify(G)})}async function z4(){return v_("/agent/roster")}async function K4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/status${$}`)}async function M5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/context${$}`)}async function b5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/queue-state${$}`)}async function C5(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function T5(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function d2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/models${$}`)}async function W4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function F1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function q4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function f5(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let G=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(G.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await y5(j,(G,Y)=>{if($.onEvent?.(G,Y),G==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(G==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(G==="side_prompt_done")Z=Y;else if(G==="side_prompt_error")N=Y}),N){let G=Error(N?.error||"Side prompt failed");throw G.payload=N,G}return Z}async function X4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function V4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return v_(j)}async function L4(_,$,j){return v_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function V$(_){return`/media/${_}`}function Q4(_){return`/media/${_}/thumbnail`}async function E2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function U4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function S5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function o2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return v_(Z)}async function R5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return v_($)}async function B4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return v_(N)}async function v5(_,$){return v_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function O4(_){return v_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function H1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let G=N.toString(),Y=G?`/workspace/upload?${G}`:"/workspace/upload",q=await fetch(""+Y,{method:"POST",body:Z});if(!q.ok){let L=await q.json().catch(()=>({error:"Upload failed"})),X=Error(L.error||`HTTP ${q.status}`);throw X.status=q.status,X.code=L.code,X}return q.json()}async function F4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),G=Error(N.error||`HTTP ${Z.status}`);throw G.status=Z.status,G.code=N.code,G}return Z.json()}async function H4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function D4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function J4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return v_($,{method:"DELETE"})}async function s2(_,$=!1){return v_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function D1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function J1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class y1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function t0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function l_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function k2(_,$=!1){let j=t0(_);if(j===null)return $;return j==="true"}function A2(_,$=null){let j=t0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function E1(_){return String(_||"").trim().toLowerCase()}function y4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return E1($[1]||"")}function G8(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=E1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function Y8(_,$,j={}){let Z=y4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return G8(_).filter((G)=>{if(N&&G?.chat_jid===N)return!1;return E1(G?.agent_name).startsWith(Z)})}function E4(_){let $=E1(_);return $?`@${$} `:""}function z8(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return G8(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function K8({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let G=460+N*68+(j?40:0);return Z>=G}function D$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:G="Remove",icon:Y="file"}){let q=`${_}-file-pill`,L=`${_}-file-name`,X=`${_}-file-remove`,Q=Y==="message"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return U`
    <span class=${q} title=${j||$} onClick=${N}>
      ${Q}
      <span class=${L}>${$}</span>
      ${Z&&U`
        <button
          class=${X}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Z()}}
          title=${G}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var u5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function m5({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,N=_.contextWindow,G="Compact context",q=`${Z!=null?`Context: ${W8(Z)} / ${W8(N)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,L=9,X=2*Math.PI*9,Q=j/100*X,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return U`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${q}
            aria-label="Compact context"
            onClick=${(H)=>{H.preventDefault(),H.stopPropagation(),$?.()}}
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
                    stroke-dasharray=${`${Q} ${X}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function W8(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function q8({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:G,onEnterSearch:Y,onExitSearch:q,fileRefs:L=[],onRemoveFileRef:X,onClearFileRefs:Q,messageRefs:V=[],onRemoveMessageRef:H,onClearMessageRefs:P,activeModel:T=null,modelUsage:g=null,thinkingLevel:f=null,supportsThinking:w=!1,contextUsage:M=null,onContextCompact:c,notificationsEnabled:y=!1,notificationPermission:R="default",onToggleNotifications:o,onModelChange:a,onModelStateChange:d,activeEditorPath:$_=null,onAttachEditorFile:i,onOpenFilePill:q_,followupQueueItems:d_=[],onInjectQueuedFollowup:g_,onRemoveQueuedFollowup:n,onSubmitIntercept:N_,onMessageResponse:t,onPopOutChat:X_,isAgentActive:Y_=!1,activeChatAgents:V_=[],currentChatJid:U_="web:default",connectionStatus:G_="connected",onSetFileRefs:u_,onSetMessageRefs:x_,onSubmitError:y_,onSwitchChat:E_,onRenameSession:z0,isRenameSessionInProgress:K0=!1,onCreateSession:W_,onDeleteSession:__,onRestoreSession:F_}){let[j_,H_]=v(""),[I_,a_]=v(""),[p_,o_]=v([]),[c_,h_]=v(!1),[A_,k_]=v([]),[m_,W0]=v(0),[P0,M_]=v(!1),[y0,j0]=v([]),[b_,Z0]=v(0),[t_,$0]=v(!1),[N0,C_]=v(!1),[O0,T0]=v(!1),[T_,e_]=v(!1),[f0,w_]=v([]),[C,r]=v(!1),[B_,P_]=v(0),[s_,F0]=v(null),f_=k(null),S0=k(null),$$=k(null),j$=k(null),b0=k(null),I$=k(null),H0=k(null),h0=k(null),i0=k(0),R0=k(!1),Z$=200,L2=(z)=>{let O=new Set,D=[];for(let b of z||[]){if(typeof b!=="string")continue;let p=b.trim();if(!p||O.has(p))continue;O.add(p),D.push(p)}return D},Q2=()=>{let z=t0("piclaw_compose_history");if(!z)return[];try{let O=JSON.parse(z);if(!Array.isArray(O))return[];return L2(O)}catch{return[]}},E0=(z)=>{l_("piclaw_compose_history",JSON.stringify(z))},D0=k(Q2()),G0=k(-1),g0=k(""),Y0=j_.trim()||p_.length>0||L.length>0||V.length>0,x0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),N$=typeof window<"u"&&typeof Notification<"u",M$=typeof window<"u"?Boolean(window.isSecureContext):!1,m$=N$&&M$&&R!=="denied",r$=R==="granted"&&y,l0=r$?"Disable notifications":"Enable notifications",a$=p_.length>0||L.length>0||V.length>0,t$=G_==="disconnected"?"Reconnecting":String(G_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(z)=>z.toUpperCase()),G$=G_==="disconnected"?"Reconnecting":`Connection: ${t$}`,U$=(Array.isArray(V_)?V_:[]).filter((z)=>!z?.archived_at),n0=z8(U$,{currentChatJid:U_,limit:4}),X0=!j&&K8({footerWidth:B_,visibleAgentCount:n0.length,hasContextIndicator:Boolean(M&&M.percent!=null)}),i_=(()=>{for(let z of Array.isArray(V_)?V_:[]){let O=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(O&&O===U_)return z}return null})(),B$=Boolean(i_&&i_.chat_jid===(i_.root_chat_jid||i_.chat_jid)),J$=(()=>{let z=new Set,O=[];for(let D of Array.isArray(V_)?V_:[]){let b=typeof D?.chat_jid==="string"?D.chat_jid.trim():"";if(!b||b===U_||z.has(b))continue;if(!(typeof D?.agent_name==="string"?D.agent_name.trim():""))continue;z.add(b),O.push(D)}return O})(),g$=J$.length>0,U2=g$&&typeof E_==="function",D_=g$&&typeof F_==="function",Y$=Boolean(K0||R0.current),y$=!j&&typeof z0==="function"&&!Y$,b$=!j&&typeof W_==="function",d0=!j&&typeof __==="function"&&!B$,C$=!j&&(U2||D_||y$||b$||d0),o0=T||"",v0=w&&f?` (${f})`:"",V0=v0.trim()?`${f}`:"",u0=typeof g?.hint_short==="string"?g.hint_short.trim():"",s0=[V0||null,u0||null].filter(Boolean).join(" • "),C0=[o0?`Current model: ${o0}${v0}`:null,g?.plan?`Plan: ${g.plan}`:null,u0||null,g?.primary?.reset_description||null,g?.secondary?.reset_description||null].filter(Boolean),p$=N0?"Switching model…":C0.join(" • ")||`Current model: ${o0}${v0} (tap to open model picker)`,r0=(z)=>{if(!z||typeof z!=="object")return;let O=z.model??z.current;if(typeof d==="function")d({model:O??null,thinking_level:z.thinking_level??null,supports_thinking:z.supports_thinking,provider_usage:z.provider_usage??null});if(O&&typeof a==="function")a(O)},p0=(z)=>{let O=z||f_.current;if(!O)return;O.style.height="auto",O.style.height=`${O.scrollHeight}px`,O.style.overflowY="hidden"},c$=(z)=>{if(!z)return{content:z,fileRefs:[]};let D=z.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),b=-1;for(let O_=0;O_<D.length;O_+=1)if(D[O_].trim()==="Files:"&&D[O_+1]&&/^\s*-\s+/.test(D[O_+1])){b=O_;break}if(b===-1)return{content:z,fileRefs:[]};let p=[],u=b+1;for(;u<D.length;u+=1){let O_=D[u];if(/^\s*-\s+/.test(O_))p.push(O_.replace(/^\s*-\s+/,"").trim());else if(!O_.trim())break;else break}if(p.length===0)return{content:z,fileRefs:[]};let s=D.slice(0,b),Q_=D.slice(u);return{content:[...s,...Q_].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:p}},e$=(z)=>{if(!z)return{content:z,messageRefs:[]};let D=z.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),b=-1;for(let O_=0;O_<D.length;O_+=1)if(D[O_].trim()==="Referenced messages:"&&D[O_+1]&&/^\s*-\s+/.test(D[O_+1])){b=O_;break}if(b===-1)return{content:z,messageRefs:[]};let p=[],u=b+1;for(;u<D.length;u+=1){let O_=D[u];if(/^\s*-\s+/.test(O_)){let H$=O_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(H$)p.push(H$[1])}else if(!O_.trim())break;else break}if(p.length===0)return{content:z,messageRefs:[]};let s=D.slice(0,b),Q_=D.slice(u);return{content:[...s,...Q_].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:p}},T$=(z)=>{let O=c$(z||""),D=e$(O.content||"");return{text:D.content||"",fileRefs:O.fileRefs,messageRefs:D.messageRefs}},J0=(z)=>{if(!z.startsWith("/")||z.includes(`
`)){M_(!1),k_([]);return}let O=z.toLowerCase().split(" ")[0];if(O.length<1){M_(!1),k_([]);return}let D=u5.filter((b)=>b.name.startsWith(O)||b.name.replace(/-/g,"").startsWith(O.replace(/-/g,"")));if(D.length>0&&!(D.length===1&&D[0].name===O))$0(!1),j0([]),k_(D),W0(0),M_(!0);else M_(!1),k_([])},O$=(z)=>{let O=j_,D=O.indexOf(" "),b=D>=0?O.slice(D):"",p=z.name+b;H_(p),M_(!1),k_([]),requestAnimationFrame(()=>{let u=f_.current;if(!u)return;let s=p.length;u.selectionStart=s,u.selectionEnd=s,u.focus()})},E$=(z)=>{if(y4(z)==null){$0(!1),j0([]);return}let O=Y8(U$,z,{currentChatJid:U_});if(O.length>0&&!(O.length===1&&E4(O[0].agent_name).trim().toLowerCase()===String(z||"").trim().toLowerCase()))M_(!1),k_([]),j0(O),Z0(0),$0(!0);else $0(!1),j0([])},k$=(z)=>{let O=E4(z?.agent_name);if(!O)return;H_(O),$0(!1),j0([]),requestAnimationFrame(()=>{let D=f_.current;if(!D)return;let b=O.length;D.selectionStart=b,D.selectionEnd=b,D.focus()})},f$=(z)=>{if(z?.preventDefault?.(),z?.stopPropagation?.(),j||!U2&&!D_&&!y$&&!b$&&!d0)return;T0(!1),M_(!1),k_([]),$0(!1),j0([]),e_((O)=>!O)},h$=(z)=>{let O=typeof z==="string"?z.trim():"";if(e_(!1),!O||O===U_){requestAnimationFrame(()=>f_.current?.focus());return}E_?.(O)},_2=async(z)=>{let O=typeof z==="string"?z.trim():"";if(e_(!1),!O||typeof F_!=="function"){requestAnimationFrame(()=>f_.current?.focus());return}try{await F_(O)}catch(D){console.warn("Failed to restore session:",D),requestAnimationFrame(()=>f_.current?.focus())}},c0=(z)=>{let O=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(O&&typeof E_==="function"){E_(O);return}k$(z)},m0=async(z)=>{if(z?.preventDefault)z.preventDefault();if(z?.stopPropagation)z.stopPropagation();if(typeof z0!=="function"||K0||R0.current)return;R0.current=!0,e_(!1);try{await z0()}catch(O){console.warn("Failed to rename session:",O)}finally{R0.current=!1}requestAnimationFrame(()=>f_.current?.focus())},F$=async()=>{if(typeof W_!=="function")return;e_(!1);try{await W_()}catch(z){console.warn("Failed to create session:",z)}requestAnimationFrame(()=>f_.current?.focus())},$2=async()=>{if(typeof __!=="function")return;e_(!1);try{await __(U_)}catch(z){console.warn("Failed to delete session:",z)}requestAnimationFrame(()=>f_.current?.focus())},z$=(z)=>{if(j)a_(z);else H_(z),J0(z),E$(z);requestAnimationFrame(()=>p0())},i$=(z)=>{let O=j?I_:j_,D=O&&!O.endsWith(`
`)?`
`:"",b=`${O}${D}${z}`.trimStart();z$(b)},A$=(z)=>{let O=z?.command?.model_label;if(O)return O;let D=z?.command?.message;if(typeof D==="string"){let b=D.match(/•\s+([^\n]+?)\s+\(current\)/);if(b?.[1])return b[1].trim()}return null},S$=async(z)=>{if(j||N0)return;C_(!0);try{let O=await z2("default",z,null,[],null,U_),D=A$(O);r0({model:D??T??null,thinking_level:O?.command?.thinking_level,supports_thinking:O?.command?.supports_thinking});try{let b=await d2(U_);if(b)r0(b)}catch{}return _?.(),!0}catch(O){return console.error("Failed to switch model:",O),alert("Failed to switch model: "+O.message),!1}finally{C_(!1)}},j2=async()=>{await S$("/cycle-model")},B2=async(z)=>{if(!z||N0)return;if(await S$(`/model ${z}`))T0(!1)},w$=(z)=>{z.preventDefault(),z.stopPropagation(),e_(!1),T0((O)=>!O)},l$=async()=>{if(j)return;c?.(),await P$("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},Z2=(z)=>{if(z==="queue"||z==="steer"||z==="auto")return z;return Y_?"queue":null},P$=async(z,O,D={})=>{let{includeMedia:b=!0,includeFileRefs:p=!0,includeMessageRefs:u=!0,clearAfterSubmit:s=!0,recordHistory:Q_=!0}=D||{},k0=typeof z==="string"?z:z&&typeof z?.target?.value==="string"?z.target.value:j_,O_=typeof k0==="string"?k0:"";if(!O_.trim()&&(b?p_.length===0:!0)&&(p?L.length===0:!0)&&(u?V.length===0:!0))return;M_(!1),k_([]),$0(!1),j0([]),e_(!1),F0(null);let H$=b?[...p_]:[],x$=p?[...L]:[],F2=u?[...V]:[],K$=O_.trim();if(Q_&&K$){let G2=D0.current,I0=L2(G2.filter((H2)=>H2!==K$));if(I0.push(K$),I0.length>200)I0.splice(0,I0.length-200);D0.current=I0,E0(I0),G0.current=-1,g0.current=""}let u1=()=>{if(b)o_([...H$]);if(p)u_?.(x$);if(u)x_?.(F2);H_(K$),requestAnimationFrame(()=>p0())};if(s)H_(""),o_([]),Q?.(),P?.();(async()=>{try{if(await N_?.({content:K$,submitMode:O,fileRefs:x$,messageRefs:F2,mediaFiles:H$})){_?.();return}let I0=[];for(let q0 of H$){let L0=await W4(q0);I0.push(L0.id)}let H2=x$.length?`Files:
${x$.map((q0)=>`- ${q0}`).join(`
`)}`:"",Q0=F2.length?`Referenced messages:
${F2.map((q0)=>`- message:${q0}`).join(`
`)}`:"",m1=I0.length?`Attachments:
${I0.map((q0,L0)=>{let R2=H$[L0]?.name||`attachment-${L0+1}`;return`- attachment:${q0} (${R2})`}).join(`
`)}`:"",D2=[K$,H2,Q0,m1].filter(Boolean).join(`

`),n$=await z2("default",D2,null,I0,Z2(O),U_);if(t?.(n$),n$?.command){r0({model:n$.command.model_label??T??null,thinking_level:n$.command.thinking_level,supports_thinking:n$.command.supports_thinking});try{let q0=await d2(U_);if(q0)r0(q0)}catch{}}_?.()}catch(G2){if(s)u1();let I0=G2?.message||"Failed to send message.";F0(I0),y_?.(I0),console.error("Failed to post:",G2)}})()},I2=(z)=>{g_?.(z)},M2=(z)=>{if(z.isComposing)return;if(j&&z.key==="Escape"){z.preventDefault(),a_(""),q?.();return}if(!j&&T_&&z.key==="Escape"){z.preventDefault(),e_(!1);return}if(t_&&y0.length>0){let O=f_.current?.value??(j?I_:j_);if(!String(O||"").match(/^@([a-zA-Z0-9_-]*)$/))$0(!1),j0([]);else{if(z.key==="ArrowDown"){z.preventDefault(),Z0((D)=>(D+1)%y0.length);return}if(z.key==="ArrowUp"){z.preventDefault(),Z0((D)=>(D-1+y0.length)%y0.length);return}if(z.key==="Tab"||z.key==="Enter"){z.preventDefault(),k$(y0[b_]);return}if(z.key==="Escape"){z.preventDefault(),$0(!1),j0([]);return}}}if(P0&&A_.length>0){let O=f_.current?.value??(j?I_:j_);if(!String(O||"").startsWith("/"))M_(!1),k_([]);else{if(z.key==="ArrowDown"){z.preventDefault(),W0((D)=>(D+1)%A_.length);return}if(z.key==="ArrowUp"){z.preventDefault(),W0((D)=>(D-1+A_.length)%A_.length);return}if(z.key==="Tab"){z.preventDefault(),O$(A_[m_]);return}if(z.key==="Enter"&&!z.shiftKey){if(!(f_.current?.value??(j?I_:j_)).includes(" ")){z.preventDefault();let p=A_[m_];M_(!1),k_([]),P$(p.name);return}}if(z.key==="Escape"){z.preventDefault(),M_(!1),k_([]);return}}}if(!j&&(z.key==="ArrowUp"||z.key==="ArrowDown")&&!z.metaKey&&!z.ctrlKey&&!z.altKey&&!z.shiftKey){let O=f_.current;if(!O)return;let D=O.value||"",b=O.selectionStart===0&&O.selectionEnd===0,p=O.selectionStart===D.length&&O.selectionEnd===D.length;if(z.key==="ArrowUp"&&b||z.key==="ArrowDown"&&p){let u=D0.current;if(!u.length)return;z.preventDefault();let s=G0.current;if(z.key==="ArrowUp"){if(s===-1)g0.current=D,s=u.length-1;else if(s>0)s-=1;G0.current=s,z$(u[s]||"")}else{if(s===-1)return;if(s<u.length-1)s+=1,G0.current=s,z$(u[s]||"");else G0.current=-1,z$(g0.current||""),g0.current=""}requestAnimationFrame(()=>{let Q_=f_.current;if(!Q_)return;let k0=Q_.value.length;Q_.selectionStart=k0,Q_.selectionEnd=k0});return}}if(z.key==="Enter"&&!z.shiftKey&&(z.ctrlKey||z.metaKey)){z.preventDefault();let O=f_.current?.value??(j?I_:j_);if(j){if(O.trim())N?.(O.trim(),Z)}else P$(O,"steer");return}if(z.key==="Enter"&&!z.shiftKey){z.preventDefault();let O=f_.current?.value??(j?I_:j_);if(j){if(O.trim())N?.(O.trim(),Z)}else P$(O)}},z_=(z)=>{let O=Array.from(z||[]).filter((D)=>D instanceof File&&!String(D.name||"").startsWith(".DS_Store"));if(!O.length)return;o_((D)=>[...D,...O]),F0(null)},O2=(z)=>{z_(z.target.files),z.target.value=""},b2=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),i0.current+=1,h_(!0)},C2=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),i0.current=Math.max(0,i0.current-1),i0.current===0)h_(!1)},N2=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),z.dataTransfer)z.dataTransfer.dropEffect="copy";h_(!0)},T2=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),i0.current=0,h_(!1),z_(z.dataTransfer?.files||[])},f2=(z)=>{if(j)return;let O=z.clipboardData?.items;if(!O||!O.length)return;let D=[];for(let b of O){if(b.kind!=="file")continue;let p=b.getAsFile?.();if(p)D.push(p)}if(D.length>0)z.preventDefault(),z_(D)},S2=(z)=>{o_((O)=>O.filter((D,b)=>b!==z))},B=()=>{F0(null),o_([]),Q?.(),P?.()},J=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((z)=>{let{latitude:O,longitude:D,accuracy:b}=z.coords,p=`${O.toFixed(5)}, ${D.toFixed(5)}`,u=Number.isFinite(b)?` ±${Math.round(b)}m`:"",s=`https://maps.google.com/?q=${O},${D}`,Q_=`Location: ${p}${u} ${s}`;i$(Q_)},(z)=>{let O=z?.message||"Unable to retrieve location.";alert(`Location error: ${O}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};m(()=>{if(!O0)return;r(!0),d2(U_).then((z)=>{let O=Array.isArray(z?.models)?z.models.filter((D)=>typeof D==="string"&&D.trim().length>0):[];O.sort((D,b)=>D.localeCompare(b,void 0,{sensitivity:"base"})),w_(O),r0(z)}).catch((z)=>{console.warn("Failed to load model list:",z),w_([])}).finally(()=>{r(!1)})},[O0,T]),m(()=>{if(j)T0(!1),e_(!1),M_(!1),k_([]),$0(!1),j0([])},[j]),m(()=>{if(T_&&!C$)e_(!1)},[T_,C$]),m(()=>{if(!O0)return;let z=(O)=>{let D=j$.current,b=b0.current,p=O.target;if(D&&D.contains(p))return;if(b&&b.contains(p))return;T0(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[O0]),m(()=>{if(!T_)return;let z=(O)=>{let D=I$.current,b=H0.current,p=O.target;if(D&&D.contains(p))return;if(b&&b.contains(p))return;e_(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[T_]),m(()=>{let z=()=>{let u=h0.current?.clientWidth||0;P_((s)=>s===u?s:u)};z();let O=h0.current,D=0,b=()=>{if(D)cancelAnimationFrame(D);D=requestAnimationFrame(()=>{D=0,z()})},p=null;if(O&&typeof ResizeObserver<"u")p=new ResizeObserver(()=>b()),p.observe(O);if(typeof window<"u")window.addEventListener("resize",b);return()=>{if(D)cancelAnimationFrame(D);if(p?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",b)}},[j,T,n0.length,M?.percent]);let x=(z)=>{let O=z.target.value;if(F0(null),T_)e_(!1);p0(z.target),z$(O)};return m(()=>{requestAnimationFrame(()=>p0())},[j_,I_,j]),m(()=>{if(j)return;E$(j_)},[U$,U_,j_,j]),U`
        <div class="compose-box">
            ${!j&&d_.length>0&&U`
                <div class="compose-queue-stack">
                    ${d_.map((z)=>{let O=typeof z?.content==="string"?z.content:"",D=T$(O);if(!D.text.trim()&&D.fileRefs.length===0&&D.messageRefs.length===0)return null;return U`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${O}>
                                    ${D.text.trim()&&U`
                                        <div class="compose-queue-stack-text">${D.text}</div>
                                    `}
                                    ${(D.messageRefs.length>0||D.fileRefs.length>0)&&U`
                                        <div class="compose-queue-stack-refs">
                                            ${D.messageRefs.map((b)=>U`
                                                <${D$}
                                                    key=${"queue-msg-"+b}
                                                    prefix="compose"
                                                    label=${"msg:"+b}
                                                    title=${"Message reference: "+b}
                                                    icon="message"
                                                />
                                            `)}
                                            ${D.fileRefs.map((b)=>{let p=b.split("/").pop()||b;return U`
                                                    <${D$}
                                                        key=${"queue-file-"+b}
                                                        prefix="compose"
                                                        label=${p}
                                                        title=${b}
                                                        onClick=${()=>q_?.(b)}
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
                                        onClick=${()=>I2(z)}
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
                                        onClick=${()=>n?.(z)}
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
                class=${`compose-input-wrapper${c_?" drag-active":""}`}
                onDragEnter=${b2}
                onDragOver=${N2}
                onDragLeave=${C2}
                onDrop=${T2}
            >
                <div class="compose-input-main">
                    ${s_&&!a$&&U`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${s_}</div>
                    `}
                    ${a$&&U`
                        <div class="compose-file-refs">
                            ${s_&&U`
                                <div class="compose-submit-error" role="status" aria-live="polite">${s_}</div>
                            `}
                            ${V.map((z)=>{return U`
                                    <${D$}
                                        key=${"msg-"+z}
                                        prefix="compose"
                                        label=${"msg:"+z}
                                        title=${"Message reference: "+z}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(z)}
                                    />
                                `})}
                            ${L.map((z)=>{let O=z.split("/").pop()||z;return U`
                                    <${D$}
                                        prefix="compose"
                                        label=${O}
                                        title=${z}
                                        onClick=${()=>q_?.(z)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>X?.(z)}
                                    />
                                `})}
                            ${p_.map((z,O)=>{let D=z?.name||`attachment-${O+1}`;return U`
                                    <${D$}
                                        key=${D+O}
                                        prefix="compose"
                                        label=${D}
                                        title=${D}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>S2(O)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${B}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof X_==="function"&&U`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>X_?.()}
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
                        ref=${f_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?I_:j_}
                        onInput=${x}
                        onKeyDown=${M2}
                        onPaste=${f2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${t_&&y0.length>0&&U`
                        <div class="slash-autocomplete" ref=${$$}>
                            ${y0.map((z,O)=>U`
                                <div
                                    key=${z.chat_jid||z.agent_name}
                                    class=${`slash-item${O===b_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),k$(z)}}
                                    onMouseEnter=${()=>Z0(O)}
                                >
                                    <span class="slash-name">@${z.agent_name}</span>
                                    <span class="slash-desc">${z.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${P0&&A_.length>0&&U`
                        <div class="slash-autocomplete" ref=${S0}>
                            ${A_.map((z,O)=>U`
                                <div
                                    key=${z.name}
                                    class=${`slash-item${O===m_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),O$(z)}}
                                    onMouseEnter=${()=>W0(O)}
                                >
                                    <span class="slash-name">${z.name}</span>
                                    <span class="slash-desc">${z.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&!j&&U`
                        <div class="compose-model-popup" ref=${j$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${C&&U`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!C&&f0.length===0&&U`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!C&&f0.map((z)=>U`
                                    <button
                                        key=${z}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${T===z?" active":""}`}
                                        onClick=${()=>{B2(z)}}
                                        disabled=${N0}
                                    >
                                        ${z}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{j2()}}
                                    disabled=${N0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${T_&&!j&&U`
                        <div class="compose-model-popup" ref=${I$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${U`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let z=typeof i_?.agent_name==="string"&&i_.agent_name.trim()?`@${i_.agent_name.trim()}`:U_,O=typeof i_?.chat_jid==="string"&&i_.chat_jid.trim()?i_.chat_jid.trim():U_;return`${z} — ${O} • current`})()}
                                    </div>
                                `}
                                ${!g$&&U`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${g$&&J$.map((z)=>{let O=Boolean(z.archived_at),b=z.chat_jid!==(z.root_chat_jid||z.chat_jid)&&!z.is_active&&!O&&typeof __==="function",p=`@${z.agent_name} — ${z.chat_jid}${z.is_active?" • active":""}${O?" • archived":""}`;return U`
                                        <div key=${z.chat_jid} class=${`compose-model-popup-item-row${O?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${O?" archived":""}`}
                                                onClick=${()=>{if(O){_2(z.chat_jid);return}h$(z.chat_jid)}}
                                                disabled=${O?!D_:!U2}
                                                title=${O?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${p}
                                            </button>
                                            ${b&&U`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${z.agent_name}`}
                                                    onClick=${(u)=>{u.stopPropagation(),e_(!1),__(z.chat_jid)}}
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
                            ${(b$||y$||d0)&&U`
                                <div class="compose-model-popup-actions">
                                    ${b$&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{F$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${y$&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${(z)=>{m0(z)}}
                                            title="Rename current branch name and agent handle"
                                            disabled=${Y$}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${d0&&U`
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
                <div class="compose-footer" ref=${h0}>
                    ${!j&&T&&U`
                    <div class="compose-meta-row">
                        ${!j&&T&&U`
                            <div class="compose-model-meta">
                                <button
                                    ref=${b0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${p$}
                                    aria-label="Open model picker"
                                    onClick=${w$}
                                    disabled=${N0}
                                >
                                    ${N0?"Switching…":o0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!N0&&s0&&U`
                                        <span class="compose-model-usage-hint" title=${p$}>
                                            ${s0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&M&&M.percent!=null&&U`
                            <${m5} usage=${M} onCompact=${l$} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${X0&&U`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${n0.map((z)=>U`
                                <button
                                    key=${z.chat_jid||z.agent_name}
                                    type="button"
                                    class="compose-agent-chip"
                                    onClick=${()=>c0(z)}
                                    title=${`${z.chat_jid||"Active agent"} — switch to @${z.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${z.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${C$&&U`
                        ${i_?.agent_name&&U`
                            <span
                                class="compose-current-agent-label"
                                title=${i_.chat_jid||U_}
                                onClick=${f$}
                            >@${i_.agent_name}</span>
                        `}
                        <button
                            ref=${H0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${T_?" active":""}`}
                            onClick=${f$}
                            title=${T_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${T_?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&U`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(z)=>G?.(z.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?q:Y}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?U`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:U`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${x0&&!j&&U`
                        <button
                            class="icon-btn location-btn"
                            onClick=${J}
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
                    ${m$&&!j&&U`
                        <button
                            class=${`icon-btn notification-btn${r$?" active":""}`}
                            onClick=${o}
                            title=${l0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&U`
                        ${$_&&i&&U`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${i}
                                title=${`Attach open file: ${$_}`}
                                type="button"
                                disabled=${L.includes($_)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${O2} />
                        </label>
                    `}
                    ${(G_!=="connected"||!j)&&U`
                        <div class="compose-send-stack">
                            ${G_!=="connected"&&U`
                                <span class="compose-connection-status connection-status ${G_}" title=${G$}>
                                    ${t$}
                                </span>
                            `}
                            ${!j&&U`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{P$()}}
                                    disabled=${!Y0}
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
    `}var w4="piclaw_theme",A1="piclaw_tint",L8="piclaw_chat_themes",a2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},Q8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},X8={default:{label:"Default",mode:"auto",light:a2,dark:Q8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},g5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],K2={theme:"default",tint:null},U8="light",k4=!1;function w1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function P2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((G)=>G+G).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function p5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let G=parseInt(N[1],10),Y=parseInt(N[2],10),q=parseInt(N[3],10);if(![G,Y,q].every((X)=>Number.isFinite(X)))return null;let L=`#${[G,Y,q].map((X)=>X.toString(16).padStart(2,"0")).join("")}`;return{r:G,g:Y,b:q,hex:L}}function B8(_){return P2(_)||p5(_)}function r2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),G=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${G})`}function A4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function c5(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),G=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*G+0.0722*Y}function h5(_){return c5(_)>0.4?"#000000":"#ffffff"}function O8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function P4(_){return X8[_]||X8.default}function i5(_){return _.mode==="auto"?O8():_.mode}function F8(_,$){let j=P4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||a2}function H8(_,$,j){let Z=B8($);if(!Z)return _;let N=P2(_.bgPrimary),G=P2(_.bgSecondary),Y=P2(_.bgHover),q=P2(_.borderColor);if(!N||!G||!Y||!q)return _;let X=P2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:r2(N,Z,0.08),bgSecondary:r2(G,Z,0.12),bgHover:r2(Y,Z,0.16),borderColor:r2(q,Z,0.08),accent:Z.hex,accentHover:X?r2(Z,X,0.18):Z.hex}}function l5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=B8(Z),G=N?A4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=N?A4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",q=N?A4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?h5(N):$==="dark"?"#000000":"#ffffff",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":Y,"--accent-soft-strong":q,"--accent-contrast-text":L,"--danger-color":_.danger||a2.danger,"--success-color":_.success||a2.success,"--search-highlight-color":G||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([Q,V])=>{if(V)j.style.setProperty(Q,V)})}function n5(){if(typeof document>"u")return;let _=document.documentElement;g5.forEach(($)=>_.style.removeProperty($))}function w2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function V8(_){let $=w1(K2?.theme||"default"),j=K2?.tint?String(K2.tint).trim():null,Z=F8($,_);if($==="default"&&j)Z=H8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?Q8.bgPrimary:a2.bgPrimary}function d5(_,$){if(typeof document>"u")return;let j=w2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=w2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",V8("light"));let N=w2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",V8("dark"));let G=w2("msapplication-TileColor");if(G&&_)G.setAttribute("content",_);let Y=w2("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let q=w2("apple-mobile-web-app-status-bar-style");if(q)q.setAttribute("content",$==="dark"?"black-translucent":"default")}function o5(){if(typeof window>"u")return;let _={...K2,mode:U8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function D8(){try{let _=t0(L8);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function s5(_,$,j){let Z=D8();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};l_(L8,JSON.stringify(Z))}function r5(_){if(!_)return null;return D8()[_]||null}function J8(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function x4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=w1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=P4(j),G=i5(N),Y=F8(j,G);K2={theme:j,tint:Z},U8=G;let q=document.documentElement;q.dataset.theme=G,q.dataset.colorTheme=j,q.dataset.tint=Z?String(Z):"",q.style.colorScheme=G;let L=Y;if(j==="default"&&Z)L=H8(Y,Z,G);if(j==="default"&&!Z)n5();else l5(L,G);if(d5(L.bgPrimary,G),o5(),$.persist!==!1)if(l_(w4,j),Z)l_(A1,Z);else l_(A1,"")}function k1(){if(P4(K2.theme).mode!=="auto")return;x4(K2,{persist:!1})}function y8(){if(typeof window>"u")return()=>{};let _=J8(),$=r5(_),j=$?w1($.theme||"default"):w1(t0(w4)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=t0(A1);return N?N.trim():null})();if(x4({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!k4){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",k1);else if(N.addListener)N.addListener(k1);return k4=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",k1);else if(N.removeListener)N.removeListener(k1);k4=!1}}return()=>{}}function E8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||J8(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(s5($,j||"default",Z),x4({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")l_(w4,j||"default"),l_(A1,Z||"")}function k8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return O8()}var P1=/#(\w+)/g,a5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),t5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),e5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),_7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},$7=new Set(["http:","https:","mailto:",""]);function I4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function W2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!$7.has(Z.protocol))return null;return Z.href}catch{return null}}function A8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),G;while(G=N.nextNode())Z.push(G);for(let Y of Z){let q=Y.tagName.toLowerCase();if(!t5.has(q)){let X=Y.parentNode;if(!X)continue;while(Y.firstChild)X.insertBefore(Y.firstChild,Y);X.removeChild(Y);continue}let L=_7[q]||new Set;for(let X of Array.from(Y.attributes)){let Q=X.name.toLowerCase(),V=X.value;if(Q.startsWith("on")){Y.removeAttribute(X.name);continue}if(Q.startsWith("data-")||Q.startsWith("aria-"))continue;if(L.has(Q)||e5.has(Q)){if(Q==="href"){let H=W2(V);if(!H)Y.removeAttribute(X.name);else if(Y.setAttribute(X.name,H),q==="a"&&!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer")}else if(Q==="src"){let H=q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,P=W2(H,{allowDataImage:q==="img"});if(!P)Y.removeAttribute(X.name);else Y.setAttribute(X.name,P)}continue}Y.removeAttribute(X.name)}}return j.body.innerHTML}function w8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function x1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=w8(j);if(N===j)break;j=N}return j}function j7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],G=!1,Y=[];for(let q of j){if(!G&&q.trim().match(/^```mermaid\s*$/i)){G=!0,Y=[];continue}if(G&&q.trim().match(/^```\s*$/)){let L=Z.length;Z.push(Y.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),G=!1,Y=[];continue}if(G)Y.push(q);else N.push(q)}if(G)N.push("```mermaid"),N.push(...Y);return{text:N.join(`
`),blocks:Z}}function Z7(_){if(!_)return _;return x1(_,5)}function N7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function G7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function Y7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),G=$[N]??"",Y=Z7(G);return`<div class="mermaid-container" data-mermaid="${N7(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function P8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var z7={span:new Set(["title","class","lang","dir"])};function K7(_,$){let j=z7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,G;while(G=N.exec($)){let Y=(G[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let q=G[2]??G[3]??G[4]??"";Z.push(` ${Y}="${I4(q)}"`)}return Z.join("")}function x8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),G=N?Z.slice(1).trim():Z,q=G.endsWith("/")?G.slice(0,-1).trim():G,[L=""]=q.split(/\s+/,1),X=L.toLowerCase();if(!X||!a5.has(X))return $;if(X==="br")return N?"":"<br>";if(N)return`</${X}>`;let Q=q.slice(L.length).trim(),V=K7(X,Q);return`<${X}${V}>`})}function I8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function M8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(G)=>G.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let G=Z(N.nodeValue);if(G!==N.nodeValue)N.nodeValue=G}return $.body.innerHTML}function W7(_){if(!window.katex)return _;let $=(Y)=>w8(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let q=[],L=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(X)=>{let Q=q.length;return q.push(X),`@@CODE_BLOCK_${Q}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(X)=>{let Q=q.length;return q.push(X),`@@CODE_INLINE_${Q}@@`}),{html:L,blocks:q}},Z=(Y,q)=>{if(!q.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,X)=>{let Q=Number(X);return q[Q]??""})},N=j(_),G=N.html;return G=G.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,q,L)=>{try{let X=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${q}${X}`}catch(X){return`<span class="math-error" title="${I4(X.message)}">${Y}</span>`}}),G=G.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(Y,q,L)=>{if(/\s$/.test(L))return Y;try{let X=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${q}${X}`}catch(X){return`${q}<span class="math-error" title="${I4(X.message)}">$${L}$</span>`}}),Z(G,N.blocks)}function q7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let G of Z){let Y=G.nodeValue;if(!Y)continue;if(P1.lastIndex=0,!P1.test(Y))continue;P1.lastIndex=0;let q=G.parentElement;if(q&&(q.closest("a")||q.closest("code")||q.closest("pre")))continue;let L=Y.split(P1);if(L.length<=1)continue;let X=$.createDocumentFragment();L.forEach((Q,V)=>{if(V%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",Q),H.textContent=`#${Q}`,X.appendChild(H)}else X.appendChild($.createTextNode(Q))}),G.parentNode?.replaceChild(X,G)}return $.body.innerHTML}function X7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let G of j){if(!N&&G.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&G.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(G)}return Z.join(`
`)}function e0(_,$,j={}){if(!_)return"";let Z=X7(_),{text:N,blocks:G}=j7(Z),Y=x1(N,2),L=P8(Y).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=x8(L),Q=window.marked?marked.parse(X,{headerIds:!1,mangle:!1}):X.replace(/\n/g,"<br>");return Q=I8(Q),Q=M8(Q),Q=W7(Q),Q=q7(Q),Q=Y7(Q,G),Q=A8(Q,j),Q}function I1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=x1($,2),N=P8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),G=x8(N),Y=window.marked?marked.parse(G):G.replace(/\n/g,"<br>");return Y=I8(Y),Y=M8(Y),Y=A8(Y),Y}function V7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,G)=>{let Y=N.trim().split(/\s+/).map((L)=>{let[X,Q]=L.split(",").map(Number);return{x:X,y:Q}});if(Y.length<3)return`<polyline${Z}points="${N}"${G}/>`;let q=[`M ${Y[0].x},${Y[0].y}`];for(let L=1;L<Y.length-1;L++){let X=Y[L-1],Q=Y[L],V=Y[L+1],H=Q.x-X.x,P=Q.y-X.y,T=V.x-Q.x,g=V.y-Q.y,f=Math.sqrt(H*H+P*P),w=Math.sqrt(T*T+g*g),M=Math.min($,f/2,w/2);if(M<0.5){q.push(`L ${Q.x},${Q.y}`);continue}let c=Q.x-H/f*M,y=Q.y-P/f*M,R=Q.x+T/w*M,o=Q.y+g/w*M,d=H*g-P*T>0?1:0;q.push(`L ${c},${y}`),q.push(`A ${M},${M} 0 0 ${d} ${R},${o}`)}return q.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${Z}d="${q.join(" ")}"${G}/>`})}async function v$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=k8()==="dark"?j["tokyo-night"]:j["github-light"],G=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of G)try{let q=Y.dataset.mermaid,L=G7(q||""),X=x1(L,2),Q=await $(X,{...N,transparent:!0});Q=V7(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(q){console.error("Mermaid render error:",q);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${q.message}`,Y.innerHTML="",Y.appendChild(L),Y.removeAttribute("data-mermaid")}}function b8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function C8(_){return String(_||"").trim()||"web:default"}function T8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function f8(_){if(!_)return!1;return _.status!=="running"}function S8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function R8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=k(null),G=k(null),Y=_?.thinking?I1(_.thinking):"",q=_?.answer?e0(_.answer,null,{sanitize:!1}):"";if(m(()=>{if(N.current&&Y)v$(N.current).catch(()=>{})},[Y]),m(()=>{if(G.current&&q)v$(G.current).catch(()=>{})},[q]),!_)return null;let L=_.status==="running",X=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),V=T8(_),H=f8(_),P=!L&&X,T=L?"Thinking…":_.status==="error"?"Error":"Done";return U`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${T}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&U`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&U`<div class="btw-block btw-error">${_.error}</div>`}
            ${Q&&U`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${V&&U`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${G}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </div>
            `}

            ${H&&U`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&U`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!P}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function L7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return N?{kind:j,html:N}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function Q7(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",G=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(G==="svg")return j?{kind:G,svg:j}:{kind:G};return Z?{kind:G,html:Z}:{kind:G}}function x2(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function L_(_){return typeof _==="string"&&_.trim()?_.trim():null}function U7(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function M4(_,$){if(!_||_.type!=="generated_widget")return null;let j=L7(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,source:"timeline",status:"final"}}function v8(_){if(!_||typeof _!=="object")return null;let $=Q7(_),j=L_(_?.widget_id)||L_(_?.widgetId)||L_(_?.tool_call_id)||L_(_?.toolCallId),Z=L_(_?.tool_call_id)||L_(_?.toolCallId),N=L_(_?.turn_id)||L_(_?.turnId),G=L_(_?.title)||L_(_?.name)||"Generated widget",Y=L_(_?.subtitle)||"",q=L_(_?.description)||Y,L=L_(_?.status),X=L==="loading"||L==="streaming"||L==="final"||L==="error"?L:"streaming";return{title:G,subtitle:Y,description:q,originPostId:x2(_?.origin_post_id)??x2(_?.originPostId),originChatJid:L_(_?.origin_chat_jid)||L_(_?.originChatJid)||L_(_?.chat_jid)||null,widgetId:j,artifact:$,source:"live",status:X,turnId:N,toolCallId:Z,width:x2(_?.width),height:x2(_?.height),error:L_(_?.error)}}function u8(_){return M4(_,null)!==null}function _$(_){let $=L_(_?.toolCallId)||L_(_?.tool_call_id);if($)return $;let j=L_(_?.widgetId)||L_(_?.widget_id);if(j)return j;let Z=x2(_?.originPostId)??x2(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function m8(_){let j=(_?.artifact||{}).kind||_?.kind||null;return _?.source==="live"&&j==="html"}function g8(_){return m8(_)?"allow-downloads allow-scripts":"allow-downloads"}function b4(_){return{title:L_(_?.title)||"Generated widget",widgetId:L_(_?.widgetId)||L_(_?.widget_id),toolCallId:L_(_?.toolCallId)||L_(_?.tool_call_id),turnId:L_(_?.turnId)||L_(_?.turn_id),source:_?.source==="live"?"live":"timeline",status:L_(_?.status)||"final"}}function p8(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=L_(_.text)||L_(_.content)||L_(_.message)||L_(_.prompt)||L_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=L_(j.text)||L_(j.content)||L_(j.message)||L_(j.prompt)||L_(j.value);if(Z)return Z}return null}function c8(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function h8(_){let $=L_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return L_(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function B7(_){let $=b4(_);return`<script>
(function () {
  const meta = ${U7($)};
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

  window.piclawWidget = {
    meta,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail: data }));
  });

  function announceReady() {
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function i8(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?N:Z;if(!Y)return"";let q=m8(_),L=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",q?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),X=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,Q=q?B7(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${L}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${G.replace(/[<&>]/g,"")}</title>
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
${Q}
</head>
<body>${X}</body>
</html>`}function l8({widget:_,onClose:$,onWidgetEvent:j}){let Z=k(null);m(()=>{if(!_)return;let f=(w)=>{if(w.key==="Escape")$?.()};return document.addEventListener("keydown",f),()=>document.removeEventListener("keydown",f)},[_,$]),m(()=>{if(!_)return;let f=Z.current;if(!f)return;let w=()=>{try{f.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.init",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:b4(_)},"*")}catch{}};return f.addEventListener("load",w),()=>f.removeEventListener("load",w)},[_]),m(()=>{if(!_)return;let f=(w)=>{let M=Z.current;if(!M?.contentWindow||w.source!==M.contentWindow)return;let c=w?.data;if(!c||c.__piclawGeneratedWidget!==!0)return;let y=_$({widgetId:c.widgetId,toolCallId:c.toolCallId}),R=_$(_);if(y&&R&&y!==R)return;j?.(c,_)};return window.addEventListener("message",f),()=>window.removeEventListener("message",f)},[_,j]);let N=R_(()=>i8(_),[_]);if(!_)return null;let Y=(_?.artifact||{}).kind||_?.kind||"html",q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",L=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",X=_?.source==="live"?"live":"timeline",Q=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",V=X==="live"?`Live widget • ${Q.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",H=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",P=!N,T=h8(_),g=g8(_);return U`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${q}
                onClick=${(f)=>f.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${V} • ${Y.toUpperCase()}</div>
                        <div class="floating-widget-title">${q}</div>
                        ${(L||H)&&U`
                            <div class="floating-widget-subtitle">${L||H}</div>
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
                    ${P?U`<div class="floating-widget-empty">${T}</div>`:U`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${q}
                                sandbox=${g}
                                referrerpolicy="no-referrer"
                                srcdoc=${N}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var n8="PiClaw";function C4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),G=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=N.charCodeAt(0)%G.length,q=G[Y],L=Z.trim().toLowerCase(),X=typeof $==="string"?$.trim():"",Q=X?X:null,V=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:q,image:Q||(V?"/static/icon-192.png":null)}}function d8(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function o8(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function s8(_){if(!_)return null;if(typeof document<"u"){let G=document.documentElement,Y=G?.dataset?.colorTheme||"",q=G?.dataset?.tint||"",L=getComputedStyle(G).getPropertyValue("--accent-color")?.trim();if(L&&(q||Y&&Y!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let G=0;G<j.length;G+=1)Z=(Z*31+j.charCodeAt(G))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function O7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function t2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function r8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return t2(_)?"Compacting context":"Working..."}function F7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function a8(_,$=Date.now()){let j=O7(_);if(j===null)return null;return F7(Math.max(0,$-j))}function t8({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:G,turnId:Y,steerQueued:q,onPanelToggle:L}){let V=(__)=>{if(!__)return{text:"",totalLines:0,fullText:""};if(typeof __==="string"){let I_=__,a_=I_?I_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:I_,totalLines:a_,fullText:I_}}let F_=__.text||"",j_=__.fullText||__.full_text||F_,H_=Number.isFinite(__.totalLines)?__.totalLines:j_?j_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:F_,totalLines:H_,fullText:j_}},H=160,P=(__)=>String(__||"").replace(/<\/?internal>/gi,""),T=(__)=>{if(!__)return 1;return Math.max(1,Math.ceil(__.length/160))},g=(__,F_,j_)=>{let H_=(__||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!H_)return{text:"",omitted:0,totalLines:Number.isFinite(j_)?j_:0,visibleLines:0};let I_=H_.split(`
`),a_=I_.length>F_?I_.slice(0,F_).join(`
`):H_,p_=Number.isFinite(j_)?j_:I_.reduce((h_,A_)=>h_+T(A_),0),o_=a_?a_.split(`
`).reduce((h_,A_)=>h_+T(A_),0):0,c_=Math.max(p_-o_,0);return{text:a_,omitted:c_,totalLines:p_,visibleLines:o_}},f=V(j),w=V(Z),M=V($),c=Boolean(f.text)||f.totalLines>0,y=Boolean(w.text)||w.totalLines>0,R=Boolean(M.fullText?.trim()||M.text?.trim());if(!_&&!R&&!c&&!y&&!N&&!G)return null;let[o,a]=v(new Set),[d,$_]=v(()=>Date.now()),i=(__)=>a((F_)=>{let j_=new Set(F_),H_=!j_.has(__);if(H_)j_.add(__);else j_.delete(__);if(typeof L==="function")L(__,H_);return j_});m(()=>{a(new Set)},[Y]);let q_=t2(_);m(()=>{if(!q_)return;$_(Date.now());let __=setInterval(()=>$_(Date.now()),1000);return()=>clearInterval(__)},[q_,_?.started_at,_?.startedAt]);let d_=_?.turn_id||Y,g_=s8(d_),n=q?"turn-dot turn-dot-queued":"turn-dot",N_=(__)=>__,t=Boolean(_?.last_activity||_?.lastActivity),X_=(__)=>__==="warning"?"#f59e0b":__==="error"?"var(--danger-color)":__==="success"?"var(--success-color)":g_,Y_=G?.kind||"info",V_=X_(Y_),U_=X_(_?.kind||(q_?"warning":"info")),G_="",u_=_?.title,x_=_?.status;if(_?.type==="plan")G_=u_?`Planning: ${u_}`:"Planning...";else if(_?.type==="tool_call")G_=u_?`Running: ${u_}`:"Running tool...";else if(_?.type==="tool_status")G_=u_?`${u_}: ${x_||"Working..."}`:x_||"Working...";else if(_?.type==="error")G_=u_||"Agent error";else G_=u_||x_||"Working...";if(t)G_="Last activity just now";let y_=({panelTitle:__,text:F_,fullText:j_,totalLines:H_,maxLines:I_,titleClass:a_,panelKey:p_})=>{let o_=o.has(p_),c_=j_||F_||"",h_=p_==="thought"||p_==="draft"?P(c_):c_,A_=typeof I_==="number",k_=o_&&A_,m_=A_?g(h_,I_,H_):{text:h_||"",omitted:0,totalLines:Number.isFinite(H_)?H_:0};if(!h_&&!(Number.isFinite(m_.totalLines)&&m_.totalLines>0))return null;let W0=`agent-thinking-body${A_?" agent-thinking-body-collapsible":""}`,P0=A_?`--agent-thinking-collapsed-lines: ${I_};`:"";return U`
            <div
                class="agent-thinking"
                data-expanded=${o_?"true":"false"}
                data-collapsible=${A_?"true":"false"}
                style=${g_?`--turn-color: ${g_};`:""}
            >
                <div class="agent-thinking-title ${a_||""}">
                    ${g_&&U`<span class=${n} aria-hidden="true"></span>`}
                    ${__}
                    ${k_&&U`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${__} panel`}
                            onClick=${()=>i(p_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${W0}
                    style=${P0}
                    dangerouslySetInnerHTML=${{__html:I1(h_)}}
                />
                ${!o_&&m_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>i(p_)}>
                        ▸ ${m_.omitted} more lines
                    </button>
                `}
                ${o_&&m_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>i(p_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},E_=N?.tool_call?.title,z0=E_?`Awaiting approval: ${E_}`:"Awaiting approval",K0=q_?a8(_,d):null,W_=(__,F_,j_=null)=>{let H_=r8(__);return U`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${F_?`--turn-color: ${F_};`:""}
                title=${__?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${F_&&U`<span class=${n} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${H_}</span>
                    ${j_&&U`<span class="agent-status-elapsed">${j_}</span>`}
                </div>
                ${__.detail&&U`<div class="agent-thinking-body">${__.detail}</div>`}
            </div>
        `};return U`
        <div class="agent-status-panel">
            ${G&&W_(G,V_)}
            ${_?.type==="intent"&&W_(_,U_,K0)}
            ${N&&U`
                <div class="agent-status agent-status-request" aria-live="polite" style=${g_?`--turn-color: ${g_};`:""}>
                    <span class=${n} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${z0}</span>
                </div>
            `}
            ${c&&y_({panelTitle:N_("Planning"),text:f.text,fullText:f.fullText,totalLines:f.totalLines,panelKey:"plan"})}
            ${y&&y_({panelTitle:N_("Thoughts"),text:w.text,fullText:w.fullText,totalLines:w.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${R&&y_({panelTitle:N_("Draft"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&U`
                <div class=${`agent-status${t?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${g_?`--turn-color: ${g_};`:""}>
                    ${g_&&U`<span class=${n} aria-hidden="true"></span>`}
                    ${_?.type==="error"?U`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!t&&U`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${G_}</span>
                </div>
            `}
        </div>
    `}function e8({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:G}=_,Y=Z?.title||"Agent Request",q=Z?.kind||"other",L=Z?.rawInput||{},X=L.command||L.commands&&L.commands[0]||null,Q=L.diff||null,V=L.fileName||L.path||null,H=Z?.description||L.description||L.explanation||null,T=(Array.isArray(Z?.locations)?Z.locations:[]).map((c)=>c?.path).filter((c)=>Boolean(c)),g=Array.from(new Set([V,...T].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let f=async(c)=>{try{await F1(j,c,G||null),$()}catch(y){console.error("Failed to respond to agent request:",y)}},w=async()=>{try{await X4(Y,`Auto-approved: ${Y}`),await F1(j,"approved",G||null),$()}catch(c){console.error("Failed to add to whitelist:",c)}},M=N&&N.length>0;return U`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Y}</div>
                </div>
                ${(H||X||Q||g.length>0)&&U`
                    <div class="agent-request-body">
                        ${H&&U`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${g.length>0&&U`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${g.map((c,y)=>U`<li key=${y}>${c}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${X&&U`
                            <pre class="agent-request-command">${X}</pre>
                        `}
                        ${Q&&U`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${Q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?N.map((c)=>U`
                            <button 
                                key=${c.optionId||c.id||String(c)}
                                class="agent-request-btn ${c.kind==="allow_once"||c.kind==="allow_always"?"primary":""}"
                                onClick=${()=>f(c.optionId||c.id||c)}
                            >
                                ${c.name||c.label||c.optionId||c.id||String(c)}
                            </button>
                        `):U`
                        <button class="agent-request-btn primary" onClick=${()=>f("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>f("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${w}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function _6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,G=86400000;if(Z<G){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*G){let L=$.toLocaleDateString(void 0,{weekday:"short"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${X}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${q}`}function e2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function L$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function q2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var H7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),D7=new Set(["text/markdown"]),J7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),y7=new Set(["application/vnd.jgraph.mxfile"]);function _1(_){return typeof _==="string"?_.trim().toLowerCase():""}function E7(_){let $=_1(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function k7(_){let $=_1(_);return!!$&&$.endsWith(".pdf")}function A7(_){let $=_1(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function $1(_,$){let j=_1(_);if(E7($)||y7.has(j))return"drawio";if(k7($)||j==="application/pdf")return"pdf";if(A7($)||J7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(H7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function $6(_){let $=_1(_);return D7.has($)}function j6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function w7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function P7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),G=Number(j[3]);if(![Z,N,G].every((Y)=>Number.isFinite(Y)))return null;return{r:Z,g:N,b:G}}function Z6(_){return w7(_)||P7(_)}function M1(_){let $=(G)=>{let Y=G/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function x7(_,$){let j=Math.max(M1(_),M1($)),Z=Math.min(M1(_),M1($));return(j+0.05)/(Z+0.05)}function I7(_,$,j="#ffffff"){let Z=Z6(_);if(!Z)return j;let N=j,G=-1;for(let Y of $){let q=Z6(Y);if(!q)continue;let L=x7(Z,q);if(L>G)N=Y,G=L}return N}function T4(){let _=getComputedStyle(document.documentElement),$=(T,g)=>{for(let f of T){let w=_.getPropertyValue(f).trim();if(w)return w}return g},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),G=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),q=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),X=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),P=I7(q,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:G,bgEmphasis:Y,accent:q,good:L,warning:X,attention:Q,border:V,fontFamily:H,buttonTextColor:P}}function N6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:G,warning:Y,attention:q,border:L,fontFamily:X}=T4();return{fontFamily:X,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:G,subtle:G},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:G,subtle:G},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var M7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),G6=!1,b1=null,Y6=!1;function f4(_){_.querySelector(".adaptive-card-notice")?.remove()}function b7(_,$,j="error"){f4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function C7(_,$=(j)=>e0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function T7(_=($)=>e0($,null)){return($,j)=>{try{let Z=C7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function f7(_){if(Y6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=T7(),Y6=!0}async function S7(){if(G6)return;if(b1)return b1;return b1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{G6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),b1}function R7(){return globalThis.AdaptiveCards}function v7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function u7(_){return M7.has(_)}function R4(_){if(!Array.isArray(_))return[];return _.filter(v7)}function m7(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function S4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>S4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${S4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function g7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return S4($);return typeof $==="string"?$:String($)}function p7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((q)=>Z(q));if(!N||typeof N!=="object")return N;let Y={...N};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=g7(Y.type,j[Y.id],Y);for(let[q,L]of Object.entries(Y))if(Array.isArray(L)||L&&typeof L==="object")Y[q]=Z(L);return Y};return Z(_)}function c7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function h7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function i7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=h7(_.completed_at||j?.submitted_at),G=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:G}}async function z6(_,$,j){if(!u7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await S7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=R7();f7(Z);let N=new Z.AdaptiveCard,G=T4();N.hostConfig=new Z.HostConfig(N6());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,q=$.state==="active"?$.payload:p7($.payload,Y);N.parse(q),N.onExecuteAction=(Q)=>{let V=m7(Q);if(j?.onAction)f4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let P=H instanceof Error?H.message:String(H||"Action failed.");b7(_,P||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",G.buttonTextColor);let X=i7($);if(X){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=X.label,Q.appendChild(V),X.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=X.detail,Q.appendChild(H)}_.appendChild(Q)}if(f4(_),_.appendChild(L),X)c7(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function j1(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>j1($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${j1(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function K6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:j1(j)})).filter(($)=>$.value)}function l7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function v4(_){if(!Array.isArray(_))return[];return _.filter(l7)}function W6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=j1(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=K6(j).map(({key:G,value:Y})=>`${G}: ${Y}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function q6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=K6(_.data),Z=j.length>0?j.slice(0,2).map(({key:G,value:Y})=>`${G}: ${Y}`).join(", "):j1(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function n7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?L$($):null},{label:"Added",value:_?.created_at?q2(_.created_at):null}].filter((Z)=>Z.value)}function d7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let G=V$(_);return`/office-viewer/?url=${encodeURIComponent(G)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function X6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=R_(()=>$1($?.content_type,Z),[$?.content_type,Z]),G=j6(N),Y=R_(()=>$6($?.content_type),[$?.content_type]),[q,L]=v(N==="text"),[X,Q]=v(""),[V,H]=v(null),P=k(null),T=R_(()=>n7($),[$]),g=R_(()=>d7(_,Z,N),[_,Z,N]),f=R_(()=>{if(!Y||!X)return"";return e0(X)},[Y,X]);return m(()=>{let w=(M)=>{if(M.key==="Escape")j()};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[j]),m(()=>{if(!P.current||!f)return;v$(P.current);return},[f]),m(()=>{let w=!1;async function M(){if(N!=="text"){L(!1),H(null);return}L(!0),H(null);try{let c=await U4(_);if(!w)Q(c)}catch{if(!w)H("Failed to load text preview.")}finally{if(!w)L(!1)}}return M(),()=>{w=!0}},[_,N]),U`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(w)=>{w.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${G}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${g&&U`
                            <a
                                href=${g}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(w)=>w.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${V$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(w)=>w.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${q&&U`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!q&&V&&U`<div class="attachment-preview-state">${V}</div>`}
                    ${!q&&!V&&N==="image"&&U`
                        <img class="attachment-preview-image" src=${V$(_)} alt=${Z} />
                    `}
                    ${!q&&!V&&(N==="pdf"||N==="office"||N==="drawio")&&g&&U`
                        <iframe class="attachment-preview-frame" src=${g} title=${Z}></iframe>
                    `}
                    ${!q&&!V&&N==="drawio"&&U`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!q&&!V&&N==="text"&&Y&&U`
                        <div
                            ref=${P}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:f}}
                        />
                    `}
                    ${!q&&!V&&N==="text"&&!Y&&U`
                        <pre class="attachment-preview-text">${X}</pre>
                    `}
                    ${!q&&!V&&N==="unsupported"&&U`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${T.map((w)=>U`
                        <div class="attachment-preview-meta-item" key=${w.label}>
                            <span class="attachment-preview-meta-label">${w.label}</span>
                            <span class="attachment-preview-meta-value">${w.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function V6({src:_,onClose:$}){return m(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),U`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function o7({mediaId:_,onPreview:$}){let[j,Z]=v(null);if(m(()=>{E2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",G=j.metadata?.size,Y=G?L$(G):"",L=$1(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return U`
        <div class="file-attachment" onClick=${(X)=>X.stopPropagation()}>
            <a href=${V$(_)} download=${N} class="file-attachment-main">
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
                        ${Y&&U`<span class="file-size">${Y}</span>`}
                        ${j.content_type&&U`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${L}
            </button>
        </div>
    `}function s7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=v(null);m(()=>{if(!Number.isFinite(j))return;E2(j).then(N).catch(()=>{});return},[j]);let G=Z?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?V$(j):null,L=$1(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return U`
        <span class="attachment-pill" title=${G}>
            ${Y?U`
                    <a href=${Y} download=${G} class="attachment-pill-main" onClick=${(X)=>X.stopPropagation()}>
                        <${D$}
                            prefix="post"
                            label=${_.label}
                            title=${G}
                        />
                    </a>
                `:U`
                    <${D$}
                        prefix="post"
                        label=${_.label}
                        title=${G}
                    />
                `}
            ${Number.isFinite(j)&&Z&&U`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function C1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?q2(Z):null;return U`
        <div class="content-annotations">
            ${$&&$.length>0&&U`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&U`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&U`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function r7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?L$(_.size):"",N=_.mime_type||"",G=e7(N),Y=W2(_.uri);return U`
        <a
            href=${Y||"#"}
            class="resource-link"
            target=${Y?"_blank":void 0}
            rel=${Y?"noopener noreferrer":void 0}
            onClick=${(q)=>q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${G}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&U`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&U`<span>${N}</span>`}
                    ${Z&&U`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function a7({block:_}){let[$,j]=v(!1),Z=_.uri||"Embedded resource",N=_.text||"",G=Boolean(_.data),Y=_.mime_type||"";return U`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&U`
                ${N&&U`<pre class="resource-embed-content">${N}</pre>`}
                ${G&&U`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&U`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(q)=>{q.preventDefault(),q.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:Y||"application/octet-stream"}),X=URL.createObjectURL(L),Q=document.createElement("a");Q.href=X,Q.download=Z.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(X)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function t7({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=M4(_,$),N=u8(_),G=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=Z?.title||_.title||_.name||"Generated widget",q=Z?.description||_.description||_.subtitle||"",L=_.open_label||"Open widget",X=(Q)=>{if(Q.preventDefault(),Q.stopPropagation(),!Z)return;j?.(Z)};return U`
        <div class="generated-widget-launch" onClick=${(Q)=>Q.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${G?` • ${String(G).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Y}</div>
            </div>
            ${q&&U`<div class="generated-widget-launch-description">${q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!N}
                    onClick=${X}
                    title=${N?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${L}
                </button>
                <span class="generated-widget-launch-note">
                    ${N?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function e7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function _j({preview:_}){let $=W2(_.url),j=W2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return U`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&U`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function $j(_,$){return typeof _==="string"?_:""}var jj=1800,Zj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Nj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,Gj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function Yj(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function zj(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((G)=>G.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(G,Y)=>{let q=Y||"idle";if(G.dataset.copyState=q,q==="success")G.innerHTML=Nj,G.setAttribute("aria-label","Copied"),G.setAttribute("title","Copied"),G.classList.add("is-success"),G.classList.remove("is-error");else if(q==="error")G.innerHTML=Gj,G.setAttribute("aria-label","Copy failed"),G.setAttribute("title","Copy failed"),G.classList.add("is-error"),G.classList.remove("is-success");else G.innerHTML=Zj,G.setAttribute("aria-label","Copy code"),G.setAttribute("title","Copy code"),G.classList.remove("is-success","is-error")};return $.forEach((G)=>{let Y=document.createElement("div");Y.className="post-code-block",G.parentNode?.insertBefore(Y,G),Y.appendChild(G);let q=document.createElement("button");q.type="button",q.className="post-code-copy-btn",N(q,"idle"),Y.appendChild(q);let L=async(X)=>{X.preventDefault(),X.stopPropagation();let V=G.querySelector("code")?.textContent||"",H=await Yj(V);N(q,H?"success":"error");let P=j.get(q);if(P)clearTimeout(P);let T=setTimeout(()=>{N(q,"idle"),j.delete(q)},jj);j.set(q,T)};q.addEventListener("click",L),Z.push(()=>{q.removeEventListener("click",L);let X=j.get(q);if(X)clearTimeout(X);if(Y.parentNode)Y.parentNode.insertBefore(G,Y),Y.remove()})}),()=>{Z.forEach((G)=>G())}}function Kj(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Files:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],G=Z+1;for(;G<j.length;G+=1){let X=j[G];if(/^\s*-\s+/.test(X))N.push(X.replace(/^\s*-\s+/,"").trim());else if(!X.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,Z),q=j.slice(G),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function Wj(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Referenced messages:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],G=Z+1;for(;G<j.length;G+=1){let X=j[G];if(/^\s*-\s+/.test(X)){let V=X.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)N.push(V[1])}else if(!X.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,Z),q=j.slice(G),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function qj(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1){let Q=j[X].trim();if((Q==="Images:"||Q==="Attachments:")&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],G=Z+1;for(;G<j.length;G+=1){let X=j[G];if(/^\s*-\s+/.test(X)){let Q=X.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let H=V[1],P=(V[2]||"").trim()||H;N.push({id:H,label:P,raw:Q})}else N.push({id:null,label:Q,raw:Q})}else if(!X.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let Y=j.slice(0,Z),q=j.slice(G),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function Xj(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Vj(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(Xj).sort((Q,V)=>V.length-Q.length),N=new RegExp(`(${Z.join("|")})`,"gi"),G=new RegExp(`^(${Z.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),q=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),L=[],X;while(X=q.nextNode())L.push(X);for(let Q of L){let V=Q.nodeValue;if(!V||!N.test(V)){N.lastIndex=0;continue}N.lastIndex=0;let H=Q.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let P=V.split(N).filter((g)=>g!=="");if(P.length===0)continue;let T=Y.createDocumentFragment();for(let g of P)if(G.test(g)){let f=Y.createElement("mark");f.className="search-highlight-term",f.textContent=g,T.appendChild(f)}else T.appendChild(Y.createTextNode(g));Q.parentNode.replaceChild(T,Q)}return Y.body.innerHTML}function L6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:G,agentAvatarUrl:Y,userName:q,userAvatarUrl:L,userAvatarBackground:X,onDelete:Q,isThreadReply:V,isThreadPrev:H,isThreadNext:P,isRemoving:T,highlightQuery:g,onFileRef:f,onOpenWidget:w}){let[M,c]=v(null),y=k(null),R=_.data,o=R.type==="agent_response",a=q||"You",d=o?G||n8:a,$_=o?C4(G,Y,!0):C4(a,L),i=typeof X==="string"?X.trim().toLowerCase():"",q_=!o&&$_.image&&(i==="clear"||i==="transparent"),d_=o&&Boolean($_.image),g_=`background-color: ${q_||d_?"transparent":$_.color}`,n=R.content_meta,N_=Boolean(n?.truncated),t=Boolean(n?.preview),X_=N_&&!t,Y_=N_?{originalLength:Number.isFinite(n?.original_length)?n.original_length:R.content?R.content.length:0,maxLength:Number.isFinite(n?.max_length)?n.max_length:0}:null,V_=R.content_blocks||[],U_=R.media_ids||[],G_=$j(R.content,R.link_previews),{content:u_,fileRefs:x_}=Kj(G_),{content:y_,messageRefs:E_}=Wj(u_),{content:z0,attachments:K0}=qj(y_);G_=z0;let W_=R4(V_),__=v4(V_),F_=W_.length===1&&typeof W_[0]?.fallback_text==="string"?W_[0].fallback_text.trim():"",j_=__.length===1?W6(__[0]).trim():"",H_=Boolean(F_)&&G_?.trim()===F_||Boolean(j_)&&G_?.trim()===j_,I_=Boolean(G_)&&!X_&&!H_,a_=typeof g==="string"?g.trim():"",p_=R_(()=>{if(!G_||H_)return"";let C=e0(G_,j);return a_?Vj(C,a_):C},[G_,H_,a_]),o_=(C,r)=>{C.stopPropagation(),c(V$(r))},[c_,h_]=v(null),A_=(C)=>{h_(C)},k_=(C)=>{C.stopPropagation(),Q?.(_)},m_=(C,r)=>{let B_=new Set;if(!C||r.length===0)return{content:C,usedIds:B_};return{content:C.replace(/attachment:([^\s)"']+)/g,(s_,F0,f_,S0)=>{let $$=F0.replace(/^\/+/,""),b0=r.find((H0)=>H0.name&&H0.name.toLowerCase()===$$.toLowerCase()&&!B_.has(H0.id))||r.find((H0)=>!B_.has(H0.id));if(!b0)return s_;if(B_.add(b0.id),S0.slice(Math.max(0,f_-2),f_)==="](")return`/media/${b0.id}`;return b0.name||"attachment"}),usedIds:B_}},W0=[],P0=[],M_=[],y0=[],j0=[],b_=[],Z0=[],t_=0;if(V_.length>0)V_.forEach((C)=>{if(C?.type==="text"&&C.annotations)Z0.push(C.annotations);if(C?.type==="generated_widget")b_.push(C);else if(C?.type==="resource_link")y0.push(C);else if(C?.type==="resource")j0.push(C);else if(C?.type==="file"){let r=U_[t_++];if(r)P0.push(r),M_.push({id:r,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let r=U_[t_++];if(r){let B_=typeof C?.mime_type==="string"?C.mime_type:void 0;W0.push({id:r,annotations:C?.annotations,mimeType:B_}),M_.push({id:r,name:C?.name||C?.filename||C?.title})}}});else if(U_.length>0){let C=K0.length>0;U_.forEach((r,B_)=>{let P_=K0[B_]||null;if(M_.push({id:r,name:P_?.label||null}),C)P0.push(r);else W0.push({id:r,annotations:null})})}if(K0.length>0)K0.forEach((C)=>{if(!C?.id)return;let r=M_.find((B_)=>String(B_.id)===String(C.id));if(r&&!r.name)r.name=C.label});let{content:$0,usedIds:N0}=m_(G_,M_);G_=$0;let C_=W0.filter(({id:C})=>!N0.has(C)),O0=P0.filter((C)=>!N0.has(C)),T0=K0.length>0?K0.map((C,r)=>({id:C.id||`attachment-${r+1}`,label:C.label||`attachment-${r+1}`})):M_.map((C,r)=>({id:C.id,label:C.name||`attachment-${r+1}`})),T_=R_(()=>R4(V_),[V_]),e_=R_(()=>v4(V_),[V_]),f0=R_(()=>{return T_.map((C)=>`${C.card_id}:${C.state}`).join("|")},[T_]);m(()=>{if(!y.current)return;return v$(y.current),zj(y.current)},[p_]);let w_=k(null);return m(()=>{if(!w_.current||T_.length===0)return;let C=w_.current;C.innerHTML="";for(let r of T_){let B_=document.createElement("div");C.appendChild(B_),z6(B_,r,{onAction:async(P_)=>{if(P_.type==="Action.OpenUrl"){let s_=W2(P_.url||"");if(!s_)throw Error("Invalid URL");window.open(s_,"_blank","noopener,noreferrer");return}if(P_.type==="Action.Submit"){await q4({post_id:_.id,thread_id:R.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:r.card_id,action:{type:P_.type,title:P_.title||"",data:P_.data}});return}console.warn("[post] unsupported adaptive card action:",P_.type,P_)}}).catch((P_)=>{console.error("[post] adaptive card render error:",P_),B_.textContent=r.fallback_text||"Card failed to render."})}},[f0,_.id]),U`
        <div id=${`post-${_.id}`} class="post ${o?"agent-post":""} ${V?"thread-reply":""} ${H?"thread-prev":""} ${P?"thread-next":""} ${T?"removing":""}" onClick=${$}>
            <div class="post-avatar ${o?"agent-avatar":""} ${$_.image?"has-image":""}" style=${g_}>
                ${$_.image?U`<img src=${$_.image} alt=${d} />`:$_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${k_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${d}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${_6(_.timestamp)}</a>
                </div>
                ${X_&&Y_&&U`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${e2(Y_.originalLength)} chars
                            ${Y_.maxLength?U` • Display limit: ${e2(Y_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${t&&Y_&&U`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${e2(Y_.maxLength)} of ${e2(Y_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(x_.length>0||E_.length>0||T0.length>0)&&U`
                    <div class="post-file-refs">
                        ${E_.map((C)=>{let r=(B_)=>{if(B_.preventDefault(),B_.stopPropagation(),N)N(C,_.chat_jid||null);else{let P_=document.getElementById("post-"+C);if(P_)P_.scrollIntoView({behavior:"smooth",block:"center"}),P_.classList.add("post-highlight"),setTimeout(()=>P_.classList.remove("post-highlight"),2000)}};return U`
                                <a href=${`#msg-${C}`} class="post-msg-pill-link" onClick=${r}>
                                    <${D$}
                                        prefix="post"
                                        label=${"msg:"+C}
                                        title=${"Message "+C}
                                        icon="message"
                                        onClick=${r}
                                    />
                                </a>
                            `})}
                        ${x_.map((C)=>{let r=C.split("/").pop()||C;return U`
                                <${D$}
                                    prefix="post"
                                    label=${r}
                                    title=${C}
                                    onClick=${()=>f?.(C)}
                                />
                            `})}
                        ${T0.map((C)=>U`
                            <${s7}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${A_}
                            />
                        `)}
                    </div>
                `}
                ${I_&&U`
                    <div 
                        ref=${y}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:p_}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let r=C.target.dataset.hashtag;if(r)j?.(r)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),c(C.target.src)}}
                    />
                `}
                ${T_.length>0&&U`
                    <div ref=${w_} class="post-adaptive-cards" />
                `}
                ${e_.length>0&&U`
                    <div class="post-adaptive-card-submissions">
                        ${e_.map((C,r)=>{let B_=q6(C),P_=`${C.card_id}-${r}`;return U`
                                <div key=${P_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${B_.title}</span>
                                        </div>
                                    </div>
                                    ${B_.fields.length>0&&U`
                                        <div class="adaptive-card-submission-fields">
                                            ${B_.fields.map((s_)=>U`
                                                <span class="adaptive-card-submission-field" title=${`${s_.key}: ${s_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${s_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${s_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${q2(B_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${b_.length>0&&U`
                    <div class="generated-widget-launches">
                        ${b_.map((C,r)=>U`
                            <${t7}
                                key=${C.widget_id||C.id||`${_.id}-widget-${r}`}
                                block=${C}
                                post=${_}
                                onOpenWidget=${w}
                            />
                        `)}
                    </div>
                `}
                ${Z0.length>0&&U`
                    ${Z0.map((C,r)=>U`
                        <${C1} key=${r} annotations=${C} />
                    `)}
                `}
                ${C_.length>0&&U`
                    <div class="media-preview">
                        ${C_.map(({id:C,mimeType:r})=>{let P_=typeof r==="string"&&r.toLowerCase().startsWith("image/svg")?V$(C):Q4(C);return U`
                                <img 
                                    key=${C} 
                                    src=${P_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(s_)=>o_(s_,C)}
                                />
                            `})}
                    </div>
                `}
                ${C_.length>0&&U`
                    ${C_.map(({annotations:C},r)=>U`
                        ${C&&U`<${C1} key=${r} annotations=${C} />`}
                    `)}
                `}
                ${O0.length>0&&U`
                    <div class="file-attachments">
                        ${O0.map((C)=>U`
                            <${o7} key=${C} mediaId=${C} onPreview=${A_} />
                        `)}
                    </div>
                `}
                ${y0.length>0&&U`
                    <div class="resource-links">
                        ${y0.map((C,r)=>U`
                            <div key=${r}>
                                <${r7} block=${C} />
                                <${C1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${j0.length>0&&U`
                    <div class="resource-embeds">
                        ${j0.map((C,r)=>U`
                            <div key=${r}>
                                <${a7} block=${C} />
                                <${C1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${R.link_previews?.length>0&&U`
                    <div class="link-previews">
                        ${R.link_previews.map((C,r)=>U`
                            <${_j} key=${r} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${M&&U`<${V6} src=${M} onClose=${()=>c(null)} />`}
        ${c_&&U`
            <${X6}
                mediaId=${c_.mediaId}
                info=${c_.info}
                onClose=${()=>h_(null)}
            />
        `}
    `}function Q6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:G,onScrollToMessage:Y,onFileRef:q,onOpenWidget:L,emptyMessage:X,timelineRef:Q,agents:V,user:H,onDeletePost:P,reverse:T=!0,removingPostIds:g,searchQuery:f}){let[w,M]=v(!1),c=k(null),y=typeof IntersectionObserver<"u",R=I(async()=>{if(!j||!$||w)return;M(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{M(!1)}},[$,w,j]),o=I((n)=>{let{scrollTop:N_,scrollHeight:t,clientHeight:X_}=n.target,Y_=T?t-X_-N_:N_,V_=Math.max(300,X_);if(Y_<V_)R()},[T,R]);m(()=>{if(!y)return;let n=c.current,N_=Q?.current;if(!n||!N_)return;let t=300,X_=new IntersectionObserver((Y_)=>{for(let V_ of Y_){if(!V_.isIntersecting)continue;R()}},{root:N_,rootMargin:`${t}px 0px ${t}px 0px`,threshold:0});return X_.observe(n),()=>X_.disconnect()},[y,$,j,Q,R]);let a=k(R);if(a.current=R,m(()=>{if(y)return;if(!Q?.current)return;let{scrollTop:n,scrollHeight:N_,clientHeight:t}=Q.current,X_=T?N_-t-n:n,Y_=Math.max(300,t);if(X_<Y_)a.current?.()},[y,_,$,T,Q]),m(()=>{if(!Q?.current)return;if(!$||w)return;let{scrollTop:n,scrollHeight:N_,clientHeight:t}=Q.current,X_=T?N_-t-n:n,Y_=Math.max(300,t);if(N_<=t+1||X_<Y_)a.current?.()},[_,$,w,T,Q]),!_)return U`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return U`
            <div class="timeline" ref=${Q}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${X||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let d=_.slice().sort((n,N_)=>n.id-N_.id),$_=(n)=>{let N_=n?.data?.thread_id;if(N_===null||N_===void 0||N_==="")return null;let t=Number(N_);return Number.isFinite(t)?t:null},i=new Map;for(let n=0;n<d.length;n+=1){let N_=d[n],t=Number(N_?.id),X_=$_(N_);if(X_!==null){let Y_=i.get(X_)||{anchorIndex:-1,replyIndexes:[]};Y_.replyIndexes.push(n),i.set(X_,Y_)}else if(Number.isFinite(t)){let Y_=i.get(t)||{anchorIndex:-1,replyIndexes:[]};Y_.anchorIndex=n,i.set(t,Y_)}}let q_=new Map;for(let[n,N_]of i.entries()){let t=new Set;if(N_.anchorIndex>=0)t.add(N_.anchorIndex);for(let X_ of N_.replyIndexes)t.add(X_);q_.set(n,Array.from(t).sort((X_,Y_)=>X_-Y_))}let d_=d.map((n,N_)=>{let t=$_(n);if(t===null)return{hasThreadPrev:!1,hasThreadNext:!1};let X_=q_.get(t);if(!X_||X_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Y_=X_.indexOf(N_);if(Y_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Y_>0,hasThreadNext:Y_<X_.length-1}}),g_=U`<div class="timeline-sentinel" ref=${c}></div>`;return U`
        <div class="timeline ${T?"reverse":"normal"}" ref=${Q} onScroll=${o}>
            <div class="timeline-content">
                ${T?g_:null}
                ${d.map((n,N_)=>{let t=Boolean(n.data?.thread_id&&n.data.thread_id!==n.id),X_=g?.has?.(n.id),Y_=d_[N_]||{};return U`
                    <${L6}
                        key=${n.id}
                        post=${n}
                        isThreadReply=${t}
                        isThreadPrev=${Y_.hasThreadPrev}
                        isThreadNext=${Y_.hasThreadNext}
                        isRemoving=${X_}
                        highlightQuery=${f}
                        agentName=${d8(n.data?.agent_id,V||{})}
                        agentAvatarUrl=${o8(n.data?.agent_id,V||{})}
                        userName=${H?.name||H?.user_name}
                        userAvatarUrl=${H?.avatar_url||H?.avatarUrl||H?.avatar}
                        userAvatarBackground=${H?.avatar_background||H?.avatarBackground}
                        onClick=${()=>Z?.(n)}
                        onHashtagClick=${N}
                        onMessageRef=${G}
                        onScrollToMessage=${Y}
                        onFileRef=${q}
                        onOpenWidget=${L}
                        onDelete=${P}
                    />
                `})}
                ${T?null:g_}
            </div>
        </div>
    `}class U6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let G=N===!0?0:typeof N==="number"?N:0;if(G>j)j=G,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var r_=new U6;var T1=null,u4=null;function Lj(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function B6(){if(u4)return Promise.resolve(u4);if(!T1)T1=import(Lj()).then((_)=>{return u4=_,_}).catch((_)=>{throw T1=null,_});return T1}class O6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await B6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var m4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new O6(_,$)}};function g4(){B6().catch(()=>{})}var c4="piclaw://terminal";var Qj={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Uj={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},f1=null,p4=null;function Bj(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Oj(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,G)=>{let Y=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!Bj(Y))return $(N,G);if(N instanceof Request)return $(new Request(j,N));return $(j,G)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Fj(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!f1)f1=Oj(()=>Promise.resolve($.init?.())).catch((j)=>{throw f1=null,j});return await f1,$}async function Hj(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!p4)p4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await p4}async function Dj(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Jj(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function yj(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function u$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Ej(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function F6(){let _=yj(),$=_?Uj:Qj,j=u$("--bg-primary",_?"#000000":"#ffffff"),Z=u$("--text-primary",_?"#e7e9ea":"#0f1419"),N=u$("--text-secondary",_?"#71767b":"#536471"),G=u$("--accent-color","#1d9bf0"),Y=u$("--danger-color",_?"#ff7b72":"#cf222e"),q=u$("--success-color",_?"#7ee787":"#1a7f37"),L=u$("--bg-hover",_?"#1d1f23":"#e8ebed"),X=u$("--border-color",_?"#2f3336":"#eff3f4"),Q=u$("--accent-soft-strong",Ej(G,_?"47":"33"));return{background:j,foreground:Z,cursor:G,cursorAccent:j,selectionBackground:Q,selectionForeground:Z,black:L,red:Y,green:q,yellow:$.yellow,blue:G,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:X}}class h4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,G=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(G)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Fj();if(await Hj(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:F6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=F6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Dj();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Jj($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var i4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new h4(_,$)}},l4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new h4(_,$)}};function o$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function kj(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,G=Z?.[2]||"",Y=Z?.[3]||"",q=String($||"").split("/").slice(0,-1).join("/"),X=N.startsWith("/")?N:`${q?`${q}/`:""}${N}`,Q=[];for(let H of X.split("/")){if(!H||H===".")continue;if(H===".."){if(Q.length>0)Q.pop();continue}Q.push(H)}let V=Q.join("/");return`${D1(V)}${G}${Y}`}function Z1(_){return _?.preview||null}function Aj(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function wj(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function Pj(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${o$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${o$(L$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${o$(q2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${o$(wj($))}</span>`),Z.push(`<span><strong>extension:</strong> ${o$(Aj(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${o$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function xj(_){let $=Z1(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=Pj(_,$);if($.kind==="image"){let Z=$.url||($.path?D1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${o$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=e0($.text||"",null,{rewriteImageSrc:(N)=>kj(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${o$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class n4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=xj(this.context)}getContent(){let _=Z1(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=Z1(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var d4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=Z1(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new n4(_,$)}},o4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return Z1(_)||_?.path?1:!1},mount(_,$){return new n4(_,$)}};var Ij=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),Mj={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},bj={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function D6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function H6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class J6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=D6(j),G=bj[N]||"\uD83D\uDCC4",Y=Mj[N]||"Office Document",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${G}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${H6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${H6(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let L=q.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let X=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class y6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,G=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=D6(_?.path);if(!$||!Ij.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new J6(_,$);return new y6(_,$)}};var Cj=/\.(csv|tsv)$/i;function E6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class k6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${E6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${E6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let Y=G.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class A6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var r4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Cj.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new k6(_,$);return new A6(_,$)}};var Tj=/\.pdf$/i;function fj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class w6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${fj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let G=N.querySelector("#pdf-open-tab");if(G)G.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class P6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var a4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Tj.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new w6(_,$);return new P6(_,$)}};var Sj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function t4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class x6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${t4(N)}" alt="${t4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${t4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let Y=G.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class I6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var e4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Sj.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new x6(_,$);return new I6(_,$)}};var Rj=/\.(mp4|m4v|mov|webm|ogv)$/i;function vj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class M6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${vj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let G=N.querySelector("#video-open-tab");if(G)G.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class b6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var _3={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Rj.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new M6(_,$);return new b6(_,$)}};function uj(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function mj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var $3='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function C6(_){let $=String(_||"").trim();return $?$:$3}function gj(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function pj(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function cj(_,$="*"){try{let j=(G)=>{let Y=_.parent||_.opener;if(!Y)return!1;return Y.postMessage(JSON.stringify({event:"workspace-export",...G}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let G=Z.prototype.saveData;Z.prototype.saveData=function(Y,q,L,X,Q,V){try{if(Y&&L!=null&&j({filename:Y,format:q,data:L,mimeType:X,base64Encoded:Boolean(Q),defaultMode:V}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return G.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let G=N.prototype.exportFile;N.prototype.exportFile=function(Y,q,L,X,Q,V){try{if(q&&j({filename:q,data:Y,mimeType:L,base64Encoded:Boolean(X),mode:Q,folderId:V}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return G.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function T6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${pj(j)}`}class f6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${mj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let G=N.querySelector("#drawio-open-tab");if(G)G.addEventListener("click",()=>{let Y=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class S6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=gj(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let G=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(cj(this.iframe.contentWindow))return;setTimeout(G,250)};G()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=$3,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await T6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await T6(_,"image/png");else this.xmlData=C6(await _.text());else if(_.status===404)this.xmlData=$3;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?C6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var j3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!uj(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new f6(_,$);return new S6(_,$)}};class R6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var n_=new R6;var S1="workspaceExplorerScale",hj=["compact","default","comfortable"],ij=new Set(hj),lj={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function v6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return ij.has(j)?j:$}function Z3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function nj(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function dj(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function N3(_={}){let $=nj(_),j=_.stored?v6(_.stored,$):$;return dj(j,_)}function u6(_){return lj[v6(_)]}var oj=60000,c6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function h6(_,$,j,Z=0,N=[]){if(!j&&c6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let G of _.children)h6(G,$,j,Z+1,N);return N}function m6(_,$,j){if(!_)return"";let Z=[],N=(G)=>{if(!j&&c6(G))return;if(Z.push(G.type==="dir"?`d:${G.path}`:`f:${G.path}`),G.children&&$?.has(G.path))for(let Y of G.children)N(Y)};return N(_),Z.join("|")}function K3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((q)=>[q?.path,q])):new Map,G=!j||j.length!==Z.length,Y=Z.map((q)=>{let L=K3(N.get(q.path),q);if(L!==N.get(q.path))G=!0;return L});return G?{...$,children:Y}:_}function Y3(_,$,j){if(!_)return _;if(_.path===$)return K3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((G)=>{let Y=Y3(G,$,j);if(Y!==G)Z=!0;return Y});return Z?{..._,children:N}:_}var i6=4,G3=14,sj=8,rj=16;function l6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=l6(Z);return _.__bytes=j,j}function n6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=i6)return Z;let N=Array.isArray(_.children)?_.children:[],G=[];for(let q of N){let L=Math.max(0,Number(q?.__bytes??q?.size??0));if(L<=0)continue;if(q.type==="dir")G.push({kind:"dir",node:q,size:L});else G.push({kind:"file",name:q.name,path:q.path,size:L})}G.sort((q,L)=>L.size-q.size);let Y=G;if(G.length>G3){let q=G.slice(0,G3-1),L=G.slice(G3-1),X=L.reduce((Q,V)=>Q+V.size,0);q.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:X}),Y=q}return Z.children=Y.map((q)=>{if(q.kind==="dir")return n6(q.node,$+1);return{name:q.name,path:q.path,size:q.size,children:[]}}),Z}function g6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function d6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),G=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${G}%)`}function R1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function W3(_,$,j,Z,N,G){let Y=Math.PI*2-0.0001,q=G-N>Y?N+Y:G,L=R1(_,$,Z,N),X=R1(_,$,Z,q),Q=R1(_,$,j,q),V=R1(_,$,j,N),H=q-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var o6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function s6(_,$,j){let Z=[],N=[],G=Math.max(0,Number($)||0),Y=(q,L,X,Q)=>{let V=Array.isArray(q?.children)?q.children:[];if(!V.length)return;let H=Math.max(0,Number(q.size)||0);if(H<=0)return;let P=X-L,T=L;V.forEach((g,f)=>{let w=Math.max(0,Number(g.size)||0);if(w<=0)return;let M=w/H,c=T,y=f===V.length-1?X:T+P*M;if(T=y,y-c<0.003)return;let R=o6[Q];if(R){let o=d6(c,Q,j);if(Z.push({key:g.path,path:g.path,label:g.name,size:w,color:o,depth:Q,startAngle:c,endAngle:y,innerRadius:R[0],outerRadius:R[1],d:W3(120,120,R[0],R[1],c,y)}),Q===1)N.push({key:g.path,name:g.name,size:w,pct:G>0?w/G*100:0,color:o})}if(Q<i6)Y(g,c,y,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function z3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=z3(Z,$);if(N)return N}return null}function r6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=o6[1];if(!N)return{segments:[],legend:[]};let G=-Math.PI/2,Y=Math.PI*3/2,q=d6(G,1,Z),X=`${$||"."}/[files]`;return{segments:[{key:X,path:X,label:_,size:j,color:q,depth:1,startAngle:G,endAngle:Y,innerRadius:N[0],outerRadius:N[1],d:W3(120,120,N[0],N[1],G,Y)}],legend:[{key:X,name:_,size:j,pct:100,color:q}]}}function p6(_,$=!1,j=!1){if(!_)return null;let Z=l6(_),N=n6(_,0),G=N.size||Z,{segments:Y,legend:q}=s6(N,G,j);if(!Y.length&&G>0){let L=r6("[files]",N.path,G,j);Y=L.segments,q=L.legend}return{root:N,totalSize:G,segments:Y,legend:q,truncated:$,isDarkTheme:j}}function aj({payload:_}){if(!_)return null;let[$,j]=v(null),[Z,N]=v(_?.root?.path||"."),[G,Y]=v(()=>[_?.root?.path||"."]),[q,L]=v(!1);m(()=>{let i=_?.root?.path||".";N(i),Y([i]),j(null)},[_?.root?.path,_?.totalSize]),m(()=>{if(!Z)return;L(!0);let i=setTimeout(()=>L(!1),180);return()=>clearTimeout(i)},[Z]);let X=R_(()=>{return z3(_.root,Z)||_.root},[_?.root,Z]),Q=X?.size||_.totalSize||0,{segments:V,legend:H}=R_(()=>{let i=s6(X,Q,_.isDarkTheme);if(i.segments.length>0)return i;if(Q<=0)return i;let q_=X?.children?.length?"Total":"[files]";return r6(q_,X?.path||_?.root?.path||".",Q,_.isDarkTheme)},[X,Q,_.isDarkTheme,_?.root?.path]),[P,T]=v(V),g=k(new Map),f=k(0);m(()=>{let i=g.current,q_=new Map(V.map((N_)=>[N_.key,N_])),d_=performance.now(),g_=220,n=(N_)=>{let t=Math.min(1,(N_-d_)/220),X_=t*(2-t),Y_=V.map((V_)=>{let G_=i.get(V_.key)||{startAngle:V_.startAngle,endAngle:V_.startAngle,innerRadius:V_.innerRadius,outerRadius:V_.innerRadius},u_=(K0,W_)=>K0+(W_-K0)*X_,x_=u_(G_.startAngle,V_.startAngle),y_=u_(G_.endAngle,V_.endAngle),E_=u_(G_.innerRadius,V_.innerRadius),z0=u_(G_.outerRadius,V_.outerRadius);return{...V_,d:W3(120,120,E_,z0,x_,y_)}});if(T(Y_),t<1)f.current=requestAnimationFrame(n)};if(f.current)cancelAnimationFrame(f.current);return f.current=requestAnimationFrame(n),g.current=q_,()=>{if(f.current)cancelAnimationFrame(f.current)}},[V]);let w=P.length?P:V,M=Q>0?L$(Q):"0 B",c=X?.name||"",R=(c&&c!=="."?c:"Total")||"Total",o=M,a=G.length>1,d=(i)=>{if(!i?.path)return;let q_=z3(_.root,i.path);if(!q_||!Array.isArray(q_.children)||q_.children.length===0)return;Y((d_)=>[...d_,q_.path]),N(q_.path),j(null)},$_=()=>{if(!a)return;Y((i)=>{let q_=i.slice(0,-1);return N(q_[q_.length-1]||_?.root?.path||"."),q_}),j(null)};return U`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${X?.path||_?.root?.path||"."}`}
                data-segments=${w.length}
                data-base-size=${Q}>
                ${w.map((i)=>U`
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
                        onClick=${()=>d(i)}
                    >
                        <title>${i.label} — ${L$(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${a?" is-drill":""}`}
                    onClick=${$_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${R}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${o}</text>
                </g>
            </svg>
            ${H.length>0&&U`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((i)=>U`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${L$(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&U`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function tj({mediaId:_}){let[$,j]=v(null);if(m(()=>{if(!_)return;E2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?L$($.metadata.size):"";return U`
        <a href=${V$(_)} download=${Z} class="file-attachment"
            onClick=${(G)=>G.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&U`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function a6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:G,terminalVisible:Y=!1}){let[q,L]=v(null),[X,Q]=v(new Set(["."])),[V,H]=v(null),[P,T]=v(null),[g,f]=v(""),[w,M]=v(null),[c,y]=v(null),[R,o]=v(!0),[a,d]=v(!1),[$_,i]=v(null),[q_,d_]=v(()=>k2("workspaceShowHidden",!1)),[g_,n]=v(!1),[N_,t]=v(null),[X_,Y_]=v(null),[V_,U_]=v(null),[G_,u_]=v(!1),[x_,y_]=v(null),[E_,z0]=v(()=>g6()),[K0,W_]=v(()=>N3({stored:t0(S1),...Z3()})),[__,F_]=v(!1),j_=k(X),H_=k(""),I_=k(null),a_=k(0),p_=k(new Set),o_=k(null),c_=k(new Map),h_=k(_),A_=k(Z),k_=k(null),m_=k(null),W0=k(null),P0=k(null),M_=k(null),y0=k(null),j0=k("."),b_=k(null),Z0=k({path:null,dragging:!1,startX:0,startY:0}),t_=k({path:null,dragging:!1,startX:0,startY:0}),$0=k({path:null,timer:0}),N0=k(!1),C_=k(0),O0=k(new Map),T0=k(null),T_=k(null),e_=k(null),f0=k(null),w_=k(null),C=k(null),r=k(q_),B_=k($),P_=k(j??$),s_=k(0),F0=k(V_),f_=k(g_),S0=k(N_),$$=k(null),j$=k({x:0,y:0}),b0=k(0),I$=k(null),H0=k(V),h0=k(P),i0=k(null),R0=k(null),Z$=k(w);h_.current=_,A_.current=Z,m(()=>{j_.current=X},[X]),m(()=>{r.current=q_},[q_]),m(()=>{B_.current=$},[$]),m(()=>{P_.current=j??$},[j,$]),m(()=>{F0.current=V_},[V_]),m(()=>{if(typeof window>"u")return;let B=()=>{W_(N3({stored:t0(S1),...Z3()}))};B();let J=()=>B(),x=()=>B(),z=(u)=>{if(!u||u.key===null||u.key===S1)B()};window.addEventListener("resize",J),window.addEventListener("focus",x),window.addEventListener("storage",z);let O=window.matchMedia?.("(pointer: coarse)"),D=window.matchMedia?.("(hover: none)"),b=(u,s)=>{if(!u)return;if(u.addEventListener)u.addEventListener("change",s);else if(u.addListener)u.addListener(s)},p=(u,s)=>{if(!u)return;if(u.removeEventListener)u.removeEventListener("change",s);else if(u.removeListener)u.removeListener(s)};return b(O,J),b(D,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",x),window.removeEventListener("storage",z),p(O,J),p(D,J)}},[]),m(()=>{let B=(J)=>{let x=J?.detail?.path;if(!x)return;let z=x.split("/"),O=[];for(let D=1;D<z.length;D++)O.push(z.slice(0,D).join("/"));if(O.length)Q((D)=>{let b=new Set(D);b.add(".");for(let p of O)b.add(p);return b});H(x),requestAnimationFrame(()=>{let D=document.querySelector(`[data-path="${CSS.escape(x)}"]`);if(D)D.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",B),()=>window.removeEventListener("workspace-reveal-path",B)},[]),m(()=>{f_.current=g_},[g_]),m(()=>{S0.current=N_},[N_]),m(()=>{H0.current=V},[V]),m(()=>{h0.current=P},[P]),m(()=>{Z$.current=w},[w]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let B=()=>z0(g6());B();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),x=()=>B();if(J?.addEventListener)J.addEventListener("change",x);else if(J?.addListener)J.addListener(x);let z=typeof MutationObserver<"u"?new MutationObserver(()=>B()):null;if(z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",x);else if(J?.removeListener)J.removeListener(x);z?.disconnect()}},[]),m(()=>{if(!P)return;let B=M_.current;if(!B)return;let J=requestAnimationFrame(()=>{try{B.focus(),B.select()}catch{}});return()=>cancelAnimationFrame(J)},[P]),m(()=>{if(!__)return;let B=(x)=>{let z=x?.target;if(!(z instanceof Element))return;if(w_.current?.contains(z))return;if(C.current?.contains(z))return;F_(!1)},J=(x)=>{if(x?.key==="Escape")F_(!1),C.current?.focus?.()};return document.addEventListener("mousedown",B),document.addEventListener("touchstart",B,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",B),document.removeEventListener("touchstart",B),document.removeEventListener("keydown",J)}},[__]);let L2=async(B)=>{d(!0),M(null),y(null);try{let J=await B4(B,20000);M(J)}catch(J){M({error:J.message||"Failed to load preview"})}finally{d(!1)}};k_.current=L2;let Q2=async()=>{if(!B_.current)return;try{let B=await o2("",1,r.current),J=m6(B.root,j_.current,r.current);if(J===H_.current){o(!1);return}if(H_.current=J,I_.current=B.root,!a_.current)a_.current=requestAnimationFrame(()=>{a_.current=0,L((x)=>K3(x,I_.current)),o(!1)})}catch(B){i(B.message||"Failed to load workspace"),o(!1)}},E0=async(B)=>{if(!B)return;if(p_.current.has(B))return;p_.current.add(B);try{let J=await o2(B,1,r.current);L((x)=>Y3(x,B,J.root))}catch(J){i(J.message||"Failed to load workspace")}finally{p_.current.delete(B)}};m_.current=E0;let D0=I(()=>{let B=V;if(!B)return".";let J=c_.current?.get(B);if(J&&J.type==="dir")return J.path;if(B==="."||!B.includes("/"))return".";let x=B.split("/");return x.pop(),x.join("/")||"."},[V]),G0=I((B)=>{let J=B?.closest?.(".workspace-row");if(!J)return null;let x=J.dataset.path,z=J.dataset.type;if(!x)return null;if(z==="dir")return x;if(x.includes("/")){let O=x.split("/");return O.pop(),O.join("/")||"."}return"."},[]),g0=I((B)=>{return G0(B?.target||null)},[G0]),Y0=I((B)=>{F0.current=B,U_(B)},[]),x0=I(()=>{let B=$0.current;if(B?.timer)clearTimeout(B.timer);$0.current={path:null,timer:0}},[]),N$=I((B)=>{if(!B||B==="."){x0();return}let J=c_.current?.get(B);if(!J||J.type!=="dir"){x0();return}if(j_.current?.has(B)){x0();return}if($0.current?.path===B)return;x0();let x=setTimeout(()=>{$0.current={path:null,timer:0},m_.current?.(B),Q((z)=>{let O=new Set(z);return O.add(B),O})},600);$0.current={path:B,timer:x}},[x0]),M$=I((B,J)=>{if(j$.current={x:B,y:J},b0.current)return;b0.current=requestAnimationFrame(()=>{b0.current=0;let x=$$.current;if(!x)return;let z=j$.current;x.style.transform=`translate(${z.x+12}px, ${z.y+12}px)`})},[]),s$=I((B)=>{if(!B)return;let x=(c_.current?.get(B)?.name||B.split("/").pop()||B).trim();if(!x)return;Y_({path:B,label:x})},[]),m$=I(()=>{if(Y_(null),b0.current)cancelAnimationFrame(b0.current),b0.current=0;if($$.current)$$.current.style.transform="translate(-9999px, -9999px)"},[]),r$=I((B)=>{if(!B)return".";let J=c_.current?.get(B);if(J&&J.type==="dir")return J.path;if(B==="."||!B.includes("/"))return".";let x=B.split("/");return x.pop(),x.join("/")||"."},[]),l0=I(()=>{T(null),f("")},[]),a$=I((B)=>{if(!B)return;let x=(c_.current?.get(B)?.name||B.split("/").pop()||B).trim();if(!x||B===".")return;T(B),f(x)},[]),t$=I(async()=>{let B=h0.current;if(!B)return;let J=(g||"").trim();if(!J){l0();return}let x=c_.current?.get(B),z=(x?.name||B.split("/").pop()||B).trim();if(J===z){l0();return}try{let D=(await H4(B,J))?.path||B,b=B.includes("/")?B.split("/").slice(0,-1).join("/")||".":".";if(l0(),i(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:B,newPath:D,type:x?.type||"file"}})),x?.type==="dir")Q((p)=>{let u=new Set;for(let s of p)if(s===B)u.add(D);else if(s.startsWith(`${B}/`))u.add(`${D}${s.slice(B.length)}`);else u.add(s);return u});if(H(D),x?.type==="dir")M(null),d(!1),y(null);else k_.current?.(D);m_.current?.(b)}catch(O){i(O?.message||"Failed to rename file")}},[l0,g]),G$=I(async(B)=>{let z=B||".";for(let O=0;O<50;O+=1){let b=`untitled${O===0?"":`-${O}`}.md`;try{let u=(await F4(z,b,""))?.path||(z==="."?b:`${z}/${b}`);if(z&&z!==".")Q((s)=>new Set([...s,z]));H(u),i(null),m_.current?.(z),k_.current?.(u);return}catch(p){if(p?.status===409||p?.code==="file_exists")continue;i(p?.message||"Failed to create file");return}}i("Failed to create file (untitled name already in use).")},[]),U$=I((B)=>{if(B?.stopPropagation?.(),G_)return;let J=r$(H0.current);G$(J)},[G_,r$,G$]);m(()=>{if(typeof window>"u")return;let B=(J)=>{let x=J?.detail?.updates||[];if(!Array.isArray(x)||x.length===0)return;L((p)=>{let u=p;for(let s of x){if(!s?.root)continue;if(!u||s.path==="."||!s.path)u=s.root;else u=Y3(u,s.path,s.root)}if(u)H_.current=m6(u,j_.current,r.current);return o(!1),u});let z=H0.current;if(Boolean(z)&&x.some((p)=>{let u=p?.path||"";if(!u||u===".")return!0;return z===u||z.startsWith(`${u}/`)||u.startsWith(`${z}/`)}))O0.current.clear();if(!z||!Z$.current)return;let D=c_.current?.get(z);if(D&&D.type==="dir")return;if(x.some((p)=>{let u=p?.path||"";if(!u||u===".")return!0;return z===u||z.startsWith(`${u}/`)}))k_.current?.(z)};return window.addEventListener("workspace-update",B),()=>window.removeEventListener("workspace-update",B)},[]),o_.current=Q2;let n0=k(()=>{if(typeof window>"u")return;let B=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=P_.current??B_.current,x=document.visibilityState!=="hidden"&&(J||B.matches&&B_.current);s2(x,r.current).catch(()=>{})}).current,X0=k(0),i_=k(()=>{if(X0.current)clearTimeout(X0.current);X0.current=setTimeout(()=>{X0.current=0,n0()},250)}).current;m(()=>{if(B_.current)o_.current?.();i_()},[$,j]),m(()=>{o_.current(),n0();let B=setInterval(()=>o_.current(),oj),J=A2("previewHeight",null),x=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(C_.current=x,W0.current)W0.current.style.setProperty("--preview-height",`${x}px`);let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),O=()=>i_();if(z.addEventListener)z.addEventListener("change",O);else if(z.addListener)z.addListener(O);return document.addEventListener("visibilitychange",O),()=>{if(clearInterval(B),a_.current)cancelAnimationFrame(a_.current),a_.current=0;if(z.removeEventListener)z.removeEventListener("change",O);else if(z.removeListener)z.removeListener(O);if(document.removeEventListener("visibilitychange",O),X0.current)clearTimeout(X0.current),X0.current=0;if(b_.current)clearTimeout(b_.current),b_.current=null;s2(!1,r.current).catch(()=>{})}},[]);let B$=R_(()=>h6(q,X,q_),[q,X,q_]),J$=R_(()=>new Map(B$.map((B)=>[B.node.path,B.node])),[B$]),g$=R_(()=>u6(K0),[K0]);c_.current=J$;let D_=(V?c_.current.get(V):null)?.type==="dir";m(()=>{if(!V||!D_){y_(null),T0.current=null,T_.current=null;return}let B=V,J=`${q_?"hidden":"visible"}:${V}`,x=O0.current,z=x.get(J);if(z?.root){x.delete(J),x.set(J,z);let b=p6(z.root,Boolean(z.truncated),E_);if(b)T0.current=b,T_.current=V,y_({loading:!1,error:null,payload:b});return}let O=T0.current,D=T_.current;y_({loading:!0,error:null,payload:D===V?O:null}),o2(V,sj,q_).then((b)=>{if(H0.current!==B)return;let p={root:b?.root,truncated:Boolean(b?.truncated)};x.delete(J),x.set(J,p);while(x.size>rj){let s=x.keys().next().value;if(!s)break;x.delete(s)}let u=p6(p.root,p.truncated,E_);T0.current=u,T_.current=V,y_({loading:!1,error:null,payload:u})}).catch((b)=>{if(H0.current!==B)return;y_({loading:!1,error:b?.message||"Failed to load folder size chart",payload:D===V?O:null})})},[V,D_,q_,E_]);let Y$=Boolean(w&&w.kind==="text"&&!D_&&(!w.size||w.size<=262144)),y$=Y$?"Open in editor":w?.size>262144?"File too large to edit":"File is not editable",b$=Boolean(V&&V!=="."),d0=Boolean(V&&!D_),C$=Boolean(V&&!D_),o0=V&&D_?J1(V,q_):null,v0=I(()=>F_(!1),[]),V0=I(async(B)=>{v0();try{await B?.()}catch{}},[v0]);m(()=>{let B=e_.current;if(f0.current)f0.current.dispose(),f0.current=null;if(!B)return;if(B.innerHTML="",!V||D_||!w||w.error)return;let J={path:V,content:typeof w.text==="string"?w.text:void 0,mtime:w.mtime,size:w.size,preview:w,mode:"view"},x=r_.resolve(J)||r_.get("workspace-preview-default");if(!x)return;let z=x.mount(B,J);return f0.current=z,()=>{if(f0.current===z)z.dispose(),f0.current=null;B.innerHTML=""}},[V,D_,w]);let u0=(B)=>{let J=B?.target;if(J instanceof Element)return J;return J?.parentElement||null},s0=(B)=>{return Boolean(B?.closest?.(".workspace-node-icon, .workspace-label-text"))},C0=k((B)=>{if(R0.current)clearTimeout(R0.current),R0.current=null;let x=u0(B)?.closest?.("[data-path]");if(!x)return;let z=x.dataset.path;if(x.dataset.type==="dir"||!z)return;if(h0.current===z)l0();A_.current?.(z)}).current,p$=k((B)=>{if(N0.current){N0.current=!1;return}let J=u0(B),x=J?.closest?.("[data-path]");if(P0.current?.focus?.(),!x)return;let z=x.dataset.path,O=x.dataset.type,D=Boolean(J?.closest?.(".workspace-caret")),b=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),p=H0.current===z,u=h0.current;if(u){if(u===z)return;l0()}let s=O==="file"&&i0.current===z&&!D&&!b;if(p&&!D&&!b&&z!=="."&&!s){if(R0.current)clearTimeout(R0.current);R0.current=setTimeout(()=>{R0.current=null,a$(z)},350);return}if(O==="dir"){if(i0.current=null,H(z),M(null),y(null),d(!1),!j_.current.has(z))m_.current?.(z);if(p&&!D)return;Q((k0)=>{let O_=new Set(k0);if(O_.has(z))O_.delete(z);else O_.add(z);return O_})}else{i0.current=null,H(z);let Q_=c_.current.get(z);if(Q_)h_.current?.(Q_.path,Q_);k_.current?.(z)}}).current,r0=k(()=>{H_.current="",o_.current(),Array.from(j_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>m_.current?.(J))}).current,p0=k(()=>{i0.current=null,H(null),M(null),y(null),d(!1)}).current,c$=k(()=>{d_((B)=>{let J=!B;if(typeof window<"u")l_("workspaceShowHidden",String(J));return r.current=J,s2(!0,J).catch(()=>{}),H_.current="",o_.current?.(),Array.from(j_.current||[]).filter((z)=>z&&z!==".").forEach((z)=>m_.current?.(z)),J})}).current,e$=k((B)=>{if(u0(B)?.closest?.("[data-path]"))return;p0()}).current,T$=I(async(B)=>{if(!B)return;let J=B.split("/").pop()||B;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await J4(B);let z=B.includes("/")?B.split("/").slice(0,-1).join("/")||".":".";if(H0.current===B)p0();m_.current?.(z),i(null)}catch(z){M((O)=>({...O||{},error:z.message||"Failed to delete file"}))}},[p0]),J0=I((B)=>{let J=P0.current;if(!J||!B||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(B)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),O$=I((B)=>{let J=B$;if(!J||J.length===0)return;let x=V?J.findIndex((z)=>z.node.path===V):-1;if(B.key==="ArrowDown"){B.preventDefault();let z=Math.min(x+1,J.length-1),O=J[z];if(!O)return;if(H(O.node.path),O.node.type!=="dir")h_.current?.(O.node.path,O.node),k_.current?.(O.node.path);else M(null),d(!1),y(null);J0(O.node.path);return}if(B.key==="ArrowUp"){B.preventDefault();let z=x<=0?0:x-1,O=J[z];if(!O)return;if(H(O.node.path),O.node.type!=="dir")h_.current?.(O.node.path,O.node),k_.current?.(O.node.path);else M(null),d(!1),y(null);J0(O.node.path);return}if(B.key==="ArrowRight"&&x>=0){let z=J[x];if(z?.node?.type==="dir"&&!X.has(z.node.path))B.preventDefault(),m_.current?.(z.node.path),Q((O)=>new Set([...O,z.node.path]));return}if(B.key==="ArrowLeft"&&x>=0){let z=J[x];if(z?.node?.type==="dir"&&X.has(z.node.path))B.preventDefault(),Q((O)=>{let D=new Set(O);return D.delete(z.node.path),D});return}if(B.key==="Enter"&&x>=0){B.preventDefault();let z=J[x];if(!z)return;let O=z.node.path;if(z.node.type==="dir"){if(!j_.current.has(O))m_.current?.(O);Q((b)=>{let p=new Set(b);if(p.has(O))p.delete(O);else p.add(O);return p}),M(null),y(null),d(!1)}else h_.current?.(O,z.node),k_.current?.(O);return}if((B.key==="Delete"||B.key==="Backspace")&&x>=0){let z=J[x];if(!z||z.node.type==="dir")return;B.preventDefault(),T$(z.node.path);return}if(B.key==="Escape")B.preventDefault(),p0()},[p0,T$,X,B$,J0,V]),E$=I((B)=>{let J=u0(B),x=J?.closest?.(".workspace-row");if(!x)return;let z=x.dataset.type,O=x.dataset.path;if(!O||O===".")return;if(h0.current===O)return;let D=B?.touches?.[0];if(!D)return;if(Z0.current={path:s0(J)?O:null,dragging:!1,startX:D.clientX,startY:D.clientY},z!=="file")return;if(b_.current)clearTimeout(b_.current);b_.current=setTimeout(()=>{if(b_.current=null,Z0.current?.dragging)return;T$(O)},600)},[T$]),k$=I(()=>{if(b_.current)clearTimeout(b_.current),b_.current=null;let B=Z0.current;if(B?.dragging&&B.path){let J=F0.current||D0(),x=I$.current;if(typeof x==="function")x(B.path,J)}Z0.current={path:null,dragging:!1,startX:0,startY:0},s_.current=0,n(!1),t(null),Y0(null),x0(),m$()},[D0,m$,Y0,x0]),f$=I((B)=>{let J=Z0.current,x=B?.touches?.[0];if(!x||!J?.path){if(b_.current)clearTimeout(b_.current),b_.current=null;return}let z=Math.abs(x.clientX-J.startX),O=Math.abs(x.clientY-J.startY),D=z>8||O>8;if(D&&b_.current)clearTimeout(b_.current),b_.current=null;if(!J.dragging&&D)J.dragging=!0,n(!0),t("move"),s$(J.path);if(J.dragging){B.preventDefault(),M$(x.clientX,x.clientY);let b=document.elementFromPoint(x.clientX,x.clientY),p=G0(b)||D0();if(F0.current!==p)Y0(p);N$(p)}},[G0,D0,s$,M$,Y0,N$]),h$=k((B)=>{B.preventDefault();let J=W0.current;if(!J)return;let x=B.clientY,z=C_.current||280,O=B.currentTarget;O.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=x,b=(u)=>{D=u.clientY;let s=J.clientHeight-80,Q_=Math.min(Math.max(z-(u.clientY-x),80),s);J.style.setProperty("--preview-height",`${Q_}px`),C_.current=Q_},p=()=>{let u=J.clientHeight-80,s=Math.min(Math.max(z-(D-x),80),u);C_.current=s,O.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",l_("previewHeight",String(Math.round(s))),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",p)}).current,_2=k((B)=>{B.preventDefault();let J=W0.current;if(!J)return;let x=B.touches[0];if(!x)return;let z=x.clientY,O=C_.current||280,D=B.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let b=(u)=>{let s=u.touches[0];if(!s)return;u.preventDefault();let Q_=J.clientHeight-80,k0=Math.min(Math.max(O-(s.clientY-z),80),Q_);J.style.setProperty("--preview-height",`${k0}px`),C_.current=k0},p=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",l_("previewHeight",String(Math.round(C_.current||O))),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}).current,c0=async()=>{if(!V)return;try{let B=await O4(V);if(B.media_id)y(B.media_id)}catch(B){M((J)=>({...J||{},error:B.message||"Failed to attach"}))}},m0=async()=>{if(!V||D_)return;await T$(V)},F$=(B)=>{return Array.from(B?.dataTransfer?.types||[]).includes("Files")},$2=I((B)=>{if(!F$(B))return;if(B.preventDefault(),s_.current+=1,!f_.current)n(!0);t("upload");let J=g0(B)||D0();Y0(J),N$(J)},[D0,g0,Y0,N$]),z$=I((B)=>{if(!F$(B))return;if(B.preventDefault(),B.dataTransfer)B.dataTransfer.dropEffect="copy";if(!f_.current)n(!0);if(S0.current!=="upload")t("upload");let J=g0(B)||D0();if(F0.current!==J)Y0(J);N$(J)},[D0,g0,Y0,N$]),i$=I((B)=>{if(!F$(B))return;if(B.preventDefault(),s_.current=Math.max(0,s_.current-1),s_.current===0)n(!1),t(null),Y0(null),x0()},[Y0,x0]),A$=I(async(B,J=".")=>{let x=Array.from(B||[]);if(x.length===0)return;let z=J&&J!==""?J:".",O=z!=="."?z:"workspace root";u_(!0);try{let D=null;for(let b of x)try{D=await H1(b,z)}catch(p){let u=p?.status,s=p?.code;if(u===409||s==="file_exists"){let Q_=b?.name||"file";if(!window.confirm(`"${Q_}" already exists in ${O}. Overwrite?`))continue;D=await H1(b,z,{overwrite:!0})}else throw p}if(D?.path)i0.current=D.path,H(D.path),k_.current?.(D.path);m_.current?.(z)}catch(D){i(D.message||"Failed to upload file")}finally{u_(!1)}},[]),S$=I(async(B,J)=>{if(!B)return;let x=c_.current?.get(B);if(!x)return;let z=J&&J!==""?J:".",O=B.includes("/")?B.split("/").slice(0,-1).join("/")||".":".";if(z===O)return;try{let b=(await D4(B,z))?.path||B;if(x.type==="dir")Q((p)=>{let u=new Set;for(let s of p)if(s===B)u.add(b);else if(s.startsWith(`${B}/`))u.add(`${b}${s.slice(B.length)}`);else u.add(s);return u});if(H(b),x.type==="dir")M(null),d(!1),y(null);else k_.current?.(b);m_.current?.(O),m_.current?.(z)}catch(D){i(D?.message||"Failed to move entry")}},[]);I$.current=S$;let j2=I(async(B)=>{if(!F$(B))return;B.preventDefault(),s_.current=0,n(!1),t(null),U_(null),x0();let J=Array.from(B?.dataTransfer?.files||[]);if(J.length===0)return;let x=F0.current||g0(B)||D0();await A$(J,x)},[D0,g0,A$]),B2=I((B)=>{if(B?.stopPropagation?.(),G_)return;let J=B?.currentTarget?.dataset?.uploadTarget||".";j0.current=J,y0.current?.click()},[G_]),w$=I(()=>{if(G_)return;let B=H0.current,J=B?c_.current?.get(B):null;j0.current=J?.type==="dir"?J.path:".",y0.current?.click()},[G_]),l$=I(()=>{V0(()=>U$(null))},[V0,U$]),Z2=I(()=>{V0(()=>w$())},[V0,w$]),P$=I(()=>{V0(()=>r0())},[V0,r0]),I2=I(()=>{V0(()=>c$())},[V0,c$]),M2=I(()=>{if(!V||!Y$)return;V0(()=>A_.current?.(V,w))},[V0,V,Y$,w]),z_=I(()=>{if(!V||V===".")return;V0(()=>a$(V))},[V0,V,a$]),O2=I(()=>{if(!V||D_)return;V0(()=>m0())},[V0,V,D_,m0]),b2=I(()=>{if(!V||D_)return;V0(()=>c0())},[V0,V,D_,c0]),C2=I(()=>{if(!o0)return;if(v0(),typeof window<"u")window.open(o0,"_blank","noopener")},[v0,o0]),N2=I(()=>{v0(),N?.()},[v0,N]),T2=I(()=>{v0(),G?.()},[v0,G]),f2=I((B)=>{if(!B||B.button!==0)return;let J=B.currentTarget;if(!J||!J.dataset)return;let x=J.dataset.path;if(!x||x===".")return;if(h0.current===x)return;let z=u0(B);if(z?.closest?.("button, a, input, .workspace-caret"))return;if(!s0(z))return;B.preventDefault(),t_.current={path:x,dragging:!1,startX:B.clientX,startY:B.clientY};let O=(b)=>{let p=t_.current;if(!p?.path)return;let u=Math.abs(b.clientX-p.startX),s=Math.abs(b.clientY-p.startY),Q_=u>4||s>4;if(!p.dragging&&Q_)p.dragging=!0,N0.current=!0,n(!0),t("move"),s$(p.path),M$(b.clientX,b.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(p.dragging){b.preventDefault(),M$(b.clientX,b.clientY);let k0=document.elementFromPoint(b.clientX,b.clientY),O_=G0(k0)||D0();if(F0.current!==O_)Y0(O_);N$(O_)}},D=()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",D);let b=t_.current;if(b?.dragging&&b.path){let p=F0.current||D0(),u=I$.current;if(typeof u==="function")u(b.path,p)}t_.current={path:null,dragging:!1,startX:0,startY:0},s_.current=0,n(!1),t(null),Y0(null),x0(),m$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{N0.current=!1},0)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",D)},[G0,D0,s$,M$,m$,Y0,N$,x0]),S2=I(async(B)=>{let J=Array.from(B?.target?.files||[]);if(J.length===0)return;let x=j0.current||".";if(await A$(J,x),j0.current=".",B?.target)B.target.value=""},[A$]);return U`
        <aside
            class=${`workspace-sidebar${g_?" workspace-drop-active":""}`}
            data-workspace-scale=${K0}
            ref=${W0}
            onDragEnter=${$2}
            onDragOver=${z$}
            onDragLeave=${i$}
            onDrop=${j2}
        >
            <input type="file" multiple style="display:none" ref=${y0} onChange=${S2} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${C}
                            class=${`workspace-menu-button${__?" active":""}`}
                            onClick=${(B)=>{B.stopPropagation(),F_((J)=>!J)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${__?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${__&&U`
                            <div class="workspace-menu-dropdown" ref=${w_} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${l$} disabled=${G_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${Z2} disabled=${G_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${P$}>Refresh tree</button>
                                <button class=${`workspace-menu-item${q_?" active":""}`} role="menuitem" onClick=${I2}>
                                    ${q_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${V&&U`<div class="workspace-menu-separator"></div>`}
                                ${V&&!D_&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M2} disabled=${!Y$}>Open in editor</button>
                                `}
                                ${b$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${z_}>Rename selected</button>
                                `}
                                ${C$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b2}>Download selected file</button>
                                `}
                                ${o0&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C2}>Download selected folder (zip)</button>
                                `}
                                ${d0&&U`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${O2}>Delete selected file</button>
                                `}

                                ${(N||G)&&U`<div class="workspace-menu-separator"></div>`}
                                ${N&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${N2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${G&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${T2}>
                                        ${Y?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${U$} title="New file" disabled=${G_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${r0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${e$}>
                ${G_&&U`<div class="workspace-drop-hint">Uploading…</div>`}
                ${R&&U`<div class="workspace-loading">Loading…</div>`}
                ${$_&&U`<div class="workspace-error">${$_}</div>`}
                ${q&&U`
                    <div
                        class="workspace-tree-list"
                        ref=${P0}
                        tabIndex="0"
                        onClick=${p$}
                        onDblClick=${C0}
                        onKeyDown=${O$}
                        onTouchStart=${E$}
                        onTouchEnd=${k$}
                        onTouchMove=${f$}
                        onTouchCancel=${k$}
                    >
                        ${B$.map(({node:B,depth:J})=>{let x=B.type==="dir",z=B.path===V,O=B.path===P,D=x&&X.has(B.path),b=V_&&B.path===V_,p=Array.isArray(B.children)&&B.children.length>0?B.children.length:Number(B.child_count)||0;return U`
                                <div
                                    key=${B.path}
                                    class=${`workspace-row${z?" selected":""}${b?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*g$.indentPx}px`}}
                                    data-path=${B.path}
                                    data-type=${B.type}
                                    onMouseDown=${f2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${x?D?U`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:U`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${x?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${x?U`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:U`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${O?U`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${M_}
                                                value=${g}
                                                onInput=${(u)=>f(u?.target?.value||"")}
                                                onKeyDown=${(u)=>{if(u.key==="Enter")u.preventDefault(),t$();else if(u.key==="Escape")u.preventDefault(),l0()}}
                                                onBlur=${l0}
                                                onClick=${(u)=>u.stopPropagation()}
                                            />
                                        `:U`<span class="workspace-label"><span class="workspace-label-text">${B.name}</span></span>`}
                                    ${x&&!D&&p>0&&U`
                                        <span class="workspace-count">${p}</span>
                                    `}
                                    ${x&&U`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${B.path}
                                            title="Upload files to this folder"
                                            onClick=${B2}
                                            disabled=${G_}
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
            ${V&&U`
                <div class="workspace-preview-splitter-h" onMouseDown=${h$} onTouchStart=${_2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${U$} title="New file" disabled=${G_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!D_&&U`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>Y$&&A_.current?.(V,w)}
                                    title=${y$}
                                    disabled=${!Y$}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${m0}
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
                            ${D_?U`
                                    <button class="workspace-download" onClick=${w$}
                                        title="Upload files to this folder" disabled=${G_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${J1(V,q_)}
                                        title="Download folder as zip" onClick=${(B)=>B.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:U`<button class="workspace-download" onClick=${c0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${a&&U`<div class="workspace-loading">Loading preview…</div>`}
                    ${w?.error&&U`<div class="workspace-error">${w.error}</div>`}
                    ${D_&&U`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${x_?.loading&&U`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${x_?.error&&U`<div class="workspace-error">${x_.error}</div>`}
                        ${x_?.payload&&x_.payload.segments?.length>0&&U`
                            <${aj} payload=${x_.payload} />
                        `}
                        ${x_?.payload&&(!x_.payload.segments||x_.payload.segments.length===0)&&U`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${w&&!w.error&&!D_&&U`
                        <div class="workspace-preview-body" ref=${e_}></div>
                    `}
                    ${c&&U`
                        <div class="workspace-download-card">
                            <${tj} mediaId=${c} />
                        </div>
                    `}
                </div>
            `}
            ${X_&&U`
                <div class="workspace-drag-ghost" ref=${$$}>${X_.label}</div>
            `}
        </aside>
    `}var ej=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,_Z=/\.(csv|tsv)$/i,$Z=/\.pdf$/i,jZ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,t6=/\.drawio(\.xml|\.svg|\.png)?$/i;function e6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:G,onTogglePin:Y,onTogglePreview:q,previewTabs:L,onToggleDock:X,dockVisible:Q,onToggleZen:V,zenMode:H}){let[P,T]=v(null),g=k(null);m(()=>{if(!P)return;let y=(R)=>{if(R.type==="keydown"&&R.key!=="Escape")return;T(null)};return document.addEventListener("click",y),document.addEventListener("keydown",y),()=>{document.removeEventListener("click",y),document.removeEventListener("keydown",y)}},[P]),m(()=>{let y=(R)=>{if(R.ctrlKey&&R.key==="Tab"){if(R.preventDefault(),!_.length)return;let o=_.findIndex((a)=>a.id===$);if(R.shiftKey){let a=_[(o-1+_.length)%_.length];j?.(a.id)}else{let a=_[(o+1)%_.length];j?.(a.id)}return}if((R.ctrlKey||R.metaKey)&&R.key==="w"){let o=document.querySelector(".editor-pane");if(o&&o.contains(document.activeElement)){if(R.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[_,$,j,Z]);let f=I((y,R)=>{if(y.button===1){y.preventDefault(),Z?.(R);return}if(y.button===0)j?.(R)},[j,Z]),w=I((y,R)=>{y.preventDefault(),T({id:R,x:y.clientX,y:y.clientY})},[]),M=I((y)=>{y.preventDefault(),y.stopPropagation()},[]),c=I((y,R)=>{y.preventDefault(),y.stopPropagation(),Z?.(R)},[Z]);if(m(()=>{if(!$||!g.current)return;let y=g.current.querySelector(".tab-item.active");if(y)y.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return U`
        <div class="tab-strip" ref=${g} role="tablist">
            ${_.map((y)=>U`
                <div
                    key=${y.id}
                    class=${`tab-item${y.id===$?" active":""}${y.dirty?" dirty":""}${y.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${y.id===$}
                    title=${y.path}
                    onMouseDown=${(R)=>f(R,y.id)}
                    onContextMenu=${(R)=>w(R,y.id)}
                >
                    ${y.pinned&&U`
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
                        onClick=${(R)=>c(R,y.id)}
                        title=${y.dirty?"Unsaved changes":"Close"}
                        aria-label=${y.dirty?"Unsaved changes":`Close ${y.label}`}
                    >
                        ${y.dirty?U`<span class="tab-dirty-dot" aria-hidden="true"></span>`:U`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${X&&U`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${Q?" active":""}`}
                    onClick=${X}
                    title=${`${Q?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${Q?"Hide":"Show"} terminal`}
                    aria-pressed=${Q?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${V&&U`
                <button
                    class=${`tab-strip-zen-toggle${H?" active":""}`}
                    onClick=${V}
                    title=${`${H?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${H?"Exit":"Enter"} zen mode`}
                    aria-pressed=${H?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${H?U`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:U`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${P&&U`
            <div class="tab-context-menu" style=${{left:P.x+"px",top:P.y+"px"}}>
                <button onClick=${()=>{Z?.(P.id),T(null)}}>Close</button>
                <button onClick=${()=>{N?.(P.id),T(null)}}>Close Others</button>
                <button onClick=${()=>{G?.(),T(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(P.id),T(null)}}>
                    ${_.find((y)=>y.id===P.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${q&&/\.(md|mdx|markdown)$/i.test(P.id)&&U`
                    <hr />
                    <button onClick=${()=>{q(P.id),T(null)}}>
                        ${L?.has(P.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${ej.test(P.id)&&U`
                    <hr />
                    <button onClick=${()=>{let y="/workspace/raw?path="+encodeURIComponent(P.id),R=P.id.split("/").pop()||"document",o="/office-viewer/?url="+encodeURIComponent(y)+"&name="+encodeURIComponent(R);window.open(o,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${_Z.test(P.id)&&U`
                    <hr />
                    <button onClick=${()=>{let y="/csv-viewer/?path="+encodeURIComponent(P.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${$Z.test(P.id)&&U`
                    <hr />
                    <button onClick=${()=>{let y="/workspace/raw?path="+encodeURIComponent(P.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${jZ.test(P.id)&&!t6.test(P.id)&&U`
                    <hr />
                    <button onClick=${()=>{let y="/image-viewer/?path="+encodeURIComponent(P.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${t6.test(P.id)&&U`
                    <hr />
                    <button onClick=${()=>{let y="/drawio/edit?path="+encodeURIComponent(P.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var ZZ=400,q3=60,_9=220,X3="mdPreviewHeight";function NZ(){try{let _=localStorage.getItem(X3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=q3?$:_9}catch{return _9}}function $9({getContent:_,path:$,onClose:j}){let[Z,N]=v(""),[G,Y]=v(NZ),q=k(null),L=k(null),X=k(""),Q=k(_);return Q.current=_,m(()=>{let P=()=>{let g=Q.current?.()||"";if(g===X.current)return;X.current=g;try{let f=e0(g,null,{sanitize:!1});N(f)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};P();let T=setInterval(P,ZZ);return()=>clearInterval(T)},[]),m(()=>{if(q.current&&Z)v$(q.current).catch(()=>{})},[Z]),U`
        <div
            class="md-preview-splitter"
            onMouseDown=${(P)=>{P.preventDefault();let T=P.clientY,g=L.current?.offsetHeight||G,f=L.current?.parentElement,w=f?f.offsetHeight*0.7:500,M=P.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let c=(R)=>{let o=Math.min(Math.max(g-(R.clientY-T),q3),w);Y(o)},y=()=>{M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(X3,String(Math.round(L.current?.offsetHeight||G)))}catch{}document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",y)}}
            onTouchStart=${(P)=>{P.preventDefault();let T=P.touches[0];if(!T)return;let g=T.clientY,f=L.current?.offsetHeight||G,w=L.current?.parentElement,M=w?w.offsetHeight*0.7:500,c=P.currentTarget;c.classList.add("dragging"),document.body.style.userSelect="none";let y=(o)=>{let a=o.touches[0];if(!a)return;o.preventDefault();let d=Math.min(Math.max(f-(a.clientY-g),q3),M);Y(d)},R=()=>{c.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(X3,String(Math.round(L.current?.offsetHeight||G)))}catch{}document.removeEventListener("touchmove",y),document.removeEventListener("touchend",R),document.removeEventListener("touchcancel",R)};document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("touchend",R),document.addEventListener("touchcancel",R)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:G+"px"}}>
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
                ref=${q}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function j9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let G=k(_);G.current=_;let Y=k($);Y.current=$;let q=k(j);q.current=j;let L=k(Z);L.current=Z,m(()=>{q.current();let X=new y1((V,H)=>G.current(V,H),(V)=>Y.current(V),{chatJid:N});X.connect();let Q=()=>{X.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",Q),document.addEventListener("visibilitychange",Q),()=>{window.removeEventListener("focus",Q),document.removeEventListener("visibilitychange",Q),X.disconnect()}},[N])}function Z9(){let[_,$]=v(!1),[j,Z]=v("default"),N=k(!1);m(()=>{let L=k2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),m(()=>{N.current=_},[_]);let G=I(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),Y=I(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let X=await G();if(Z(X||"default"),X!=="granted"){N.current=!1,$(!1),l_("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),l_("notificationsEnabled",String(L))},[G]),q=I((L,X)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let Q=new Notification(L,{body:X});return Q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:Y,notify:q}}var N1=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function N9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=v(null),[G,Y]=v(!1),q=k(!1),L=k(null),X=k(!1),Q=k(null),V=k(null),H=k(0);m(()=>{q.current=G},[G]),m(()=>{V.current=Z},[Z]),m(()=>{H.current+=1,V.current=null,Q.current=null,X.current=!1,q.current=!1,N(null),Y(!1)},[j]);let P=I(async(f=null)=>{let w=H.current;try{if(f){let M=await j4(f,50,0,j);if(w!==H.current)return;N(M.posts),Y(!1)}else{let M=await l2(10,null,j);if(w!==H.current)return;N(M.posts),Y(M.has_more)}}catch(M){if(w!==H.current)return;console.error("Failed to load posts:",M)}},[j]),T=I(async()=>{let f=H.current;try{let w=await l2(10,null,j);if(f!==H.current)return;N((M)=>{if(!M||M.length===0)return w.posts;return N1([...w.posts,...M])}),Y((M)=>M||w.has_more)}catch(w){if(f!==H.current)return;console.error("Failed to refresh timeline:",w)}},[j]),g=I(async(f={})=>{let w=H.current,M=V.current;if(!M||M.length===0)return;if(X.current)return;let{preserveScroll:c=!0,preserveMode:y="top",allowRepeat:R=!1}=f,o=($_)=>{if(!c){$_();return}if(y==="top")$($_);else _($_)},d=M.slice().sort(($_,i)=>$_.id-i.id)[0]?.id;if(!Number.isFinite(d))return;if(!R&&Q.current===d)return;X.current=!0,Q.current=d;try{let $_=await l2(10,d,j);if(w!==H.current)return;if($_.posts.length>0)o(()=>{N((i)=>N1([...$_.posts,...i||[]])),Y($_.has_more)});else Y(!1)}catch($_){if(w!==H.current)return;console.error("Failed to load more posts:",$_)}finally{if(w===H.current)X.current=!1}},[j,_,$]);return m(()=>{L.current=g},[g]),{posts:Z,setPosts:N,hasMore:G,setHasMore:Y,hasMoreRef:q,loadPosts:P,refreshTimeline:T,loadMore:g,loadMoreRef:L,loadingMoreRef:X,lastBeforeIdRef:Q}}function G9(){let[_,$]=v(null),[j,Z]=v({text:"",totalLines:0}),[N,G]=v(""),[Y,q]=v({text:"",totalLines:0}),[L,X]=v(null),[Q,V]=v(null),[H,P]=v(null),T=k(null),g=k(0),f=k(!1),w=k(""),M=k(""),c=k(null),y=k(null),R=k(null),o=k(null),a=k(!1),d=k(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:G,agentThought:Y,setAgentThought:q,pendingRequest:L,setPendingRequest:X,currentTurnId:Q,setCurrentTurnId:V,steerQueuedTurnId:H,setSteerQueuedTurnId:P,lastAgentEventRef:T,lastSilenceNoticeRef:g,isAgentRunningRef:f,draftBufferRef:w,thoughtBufferRef:M,pendingRequestRef:c,stalledPostIdRef:y,currentTurnIdRef:R,steerQueuedTurnIdRef:o,thoughtExpandedRef:a,draftExpandedRef:d}}function Y9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.clientX,P=$.current||280,T=Q.currentTarget;T.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let g=H,f=(M)=>{g=M.clientX;let c=Math.min(Math.max(P+(M.clientX-H),160),600);V.style.setProperty("--sidebar-width",`${c}px`),$.current=c},w=()=>{let M=Math.min(Math.max(P+(g-H),160),600);$.current=M,T.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",l_("sidebarWidth",String(Math.round(M))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,G=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.touches[0];if(!H)return;let P=H.clientX,T=$.current||280,g=Q.currentTarget;g.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let f=(M)=>{let c=M.touches[0];if(!c)return;M.preventDefault();let y=Math.min(Math.max(T+(c.clientX-P),160),600);V.style.setProperty("--sidebar-width",`${y}px`),$.current=y},w=()=>{g.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",l_("sidebarWidth",String(Math.round($.current||T))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,Y=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.clientX,P=j.current||$.current||280,T=Q.currentTarget;T.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let g=H,f=(M)=>{g=M.clientX;let c=Math.min(Math.max(P+(M.clientX-H),200),800);V.style.setProperty("--editor-width",`${c}px`),j.current=c},w=()=>{let M=Math.min(Math.max(P+(g-H),200),800);j.current=M,T.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",l_("editorWidth",String(Math.round(M))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,q=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.touches[0];if(!H)return;let P=H.clientX,T=j.current||$.current||280,g=Q.currentTarget;g.classList.add("dragging"),document.body.style.userSelect="none";let f=(M)=>{let c=M.touches[0];if(!c)return;M.preventDefault();let y=Math.min(Math.max(T+(c.clientX-P),200),800);V.style.setProperty("--editor-width",`${y}px`),j.current=y},w=()=>{g.classList.remove("dragging"),document.body.style.userSelect="",l_("editorWidth",String(Math.round(j.current||T))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,L=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.clientY,P=Z?.current||200,T=Q.currentTarget;T.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let g=H,f=(M)=>{g=M.clientY;let c=Math.min(Math.max(P-(M.clientY-H),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${c}px`),Z)Z.current=c;window.dispatchEvent(new CustomEvent("dock-resize"))},w=()=>{let M=Math.min(Math.max(P-(g-H),100),window.innerHeight*0.5);if(Z)Z.current=M;T.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",l_("dockHeight",String(Math.round(M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,X=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.touches[0];if(!H)return;let P=H.clientY,T=Z?.current||200,g=Q.currentTarget;g.classList.add("dragging"),document.body.style.userSelect="none";let f=(M)=>{let c=M.touches[0];if(!c)return;M.preventDefault();let y=Math.min(Math.max(T-(c.clientY-P),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${y}px`),Z)Z.current=y;window.dispatchEvent(new CustomEvent("dock-resize"))},w=()=>{g.classList.remove("dragging"),document.body.style.userSelect="",l_("dockHeight",String(Math.round(Z?.current||T))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:G,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:X}}function z9({onTabClosed:_}={}){let $=k(_);$.current=_;let[j,Z]=v(()=>n_.getTabs()),[N,G]=v(()=>n_.getActiveId()),[Y,q]=v(()=>n_.getTabs().length>0);m(()=>{return n_.onChange((y,R)=>{Z(y),G(R),q(y.length>0)})},[]);let[L,X]=v(()=>new Set),Q=I((y)=>{X((R)=>{let o=new Set(R);if(o.has(y))o.delete(y);else o.add(y);return o})},[]),V=I((y)=>{X((R)=>{if(!R.has(y))return R;let o=new Set(R);return o.delete(y),o})},[]),H=I((y,R={})=>{if(!y)return;let o={path:y,mode:"edit"};try{if(!r_.resolve(o)){if(!r_.get("editor")){console.warn(`[openEditor] No pane handler for: ${y}`);return}}}catch(d){console.warn(`[openEditor] paneRegistry.resolve() error for "${y}":`,d)}let a=typeof R?.label==="string"&&R.label.trim()?R.label.trim():void 0;n_.open(y,a)},[]),P=I(()=>{let y=n_.getActiveId();if(y){let R=n_.get(y);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}n_.close(y),V(y),$.current?.(y)}},[V]),T=I((y)=>{let R=n_.get(y);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}n_.close(y),V(y),$.current?.(y)},[V]),g=I((y)=>{n_.activate(y)},[]),f=I((y)=>{let R=n_.getTabs().filter((d)=>d.id!==y&&!d.pinned),o=R.filter((d)=>d.dirty).length;if(o>0){if(!window.confirm(`${o} unsaved tab${o>1?"s":""} will be closed. Continue?`))return}let a=R.map((d)=>d.id);n_.closeOthers(y),a.forEach((d)=>{V(d),$.current?.(d)})},[V]),w=I(()=>{let y=n_.getTabs().filter((a)=>!a.pinned),R=y.filter((a)=>a.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let o=y.map((a)=>a.id);n_.closeAll(),o.forEach((a)=>{V(a),$.current?.(a)})},[V]),M=I((y)=>{n_.togglePin(y)},[]),c=I(()=>{let y=n_.getActiveId();if(y)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:y}}))},[]);return m(()=>{let y=(R)=>{let{oldPath:o,newPath:a,type:d}=R.detail||{};if(!o||!a)return;if(d==="dir"){for(let $_ of n_.getTabs())if($_.path===o||$_.path.startsWith(`${o}/`)){let i=`${a}${$_.path.slice(o.length)}`;n_.rename($_.id,i)}}else n_.rename(o,a)};return window.addEventListener("workspace-file-renamed",y),()=>window.removeEventListener("workspace-file-renamed",y)},[]),m(()=>{let y=(R)=>{if(n_.hasUnsaved())R.preventDefault(),R.returnValue=""};return window.addEventListener("beforeunload",y),()=>window.removeEventListener("beforeunload",y)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:H,closeEditor:P,handleTabClose:T,handleTabActivate:g,handleTabCloseOthers:f,handleTabCloseAll:w,handleTabTogglePin:M,handleTabTogglePreview:Q,revealInExplorer:c}}function V3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],G=Number(N);return Number.isFinite(G)?G:$}catch{return $}}var L3=V3("warning",30000),K9=V3("finalize",120000),Q3=V3("refresh",30000),W9=30000;function q9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function X9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function V9(_=30000){let[,$]=v(0);m(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function U3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function L9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function X2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function B3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),G=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(G||N>1||Y)}function Q9(_,$={}){if(X2($))return null;if(B3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:GZ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function U9(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function B9(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function O9(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function F9(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function V2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function H9(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function GZ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function v1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function O3(_){return String(_||"").trim()||"web:default"}function D9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function J9(_={}){return X2(_)&&B3(_)}function YZ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function zZ(_={},$={}){if(!J9(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=YZ({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function y9(_={}){if(!J9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,G=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of N)$.clearTimeout?.(V);N.clear()},Y=()=>{Z=0,zZ({window:$,document:j})},q=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(Y)??0},L=()=>{q();for(let V of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),q()},V);if(H!=null)N.add(H)}},X=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},Q=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",X),j.addEventListener("focusin",L,!0),Q?.addEventListener?.("resize",L),Q?.addEventListener?.("scroll",L),()=>{G(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",X),j.removeEventListener("focusin",L,!0),Q?.removeEventListener?.("resize",L),Q?.removeEventListener?.("scroll",L)}}function KZ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Q$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:KZ($,j)}var WZ=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function E9(_){return WZ.has(String(_||"").trim())}function qZ(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function k9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(qZ(_),{detail:Z})),!0}var XZ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function A9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(X2({window:j,navigator:Z}))};N();let Y=XZ.map((q)=>{try{return j.matchMedia?.(q)??null}catch{return null}}).filter(Boolean).map((q)=>{if(typeof q.addEventListener==="function")return q.addEventListener("change",N),()=>q.removeEventListener("change",N);if(typeof q.addListener==="function")return q.addListener(N),()=>q.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let q of Y)q();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function w9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var D3="piclaw_btw_session",VZ=900,LZ="__piclawRenameBranchPromptLock__",P9=()=>{if(typeof window>"u")return null;let _=window,$=LZ,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function QZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function UZ(){let _=t0(D3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",G=typeof $.error==="string"&&$.error.trim()?$.error:null,Y=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:Y==="error"?G||"BTW stream interrupted. You can retry.":G,model:null,status:Y}}catch{return null}}var x9=Z4,I9=G4,BZ=z4,M9=V4,b9=L4,C9=K4,F3=Q$(a0,"getAgentContext",null),OZ=Q$(a0,"getAgentModels",{current:null,models:[]}),FZ=Q$(a0,"getActiveChatAgents",{chats:[]}),H3=Q$(a0,"getChatBranches",{chats:[]}),HZ=Q$(a0,"renameChatBranch",null),DZ=Q$(a0,"pruneChatBranch",null),T9=Q$(a0,"restoreChatBranch",null),JZ=Q$(a0,"getAgentQueueState",{count:0}),yZ=Q$(a0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),EZ=Q$(a0,"removeAgentQueueItem",{removed:!1}),kZ=Q$(a0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});r_.register(m4);r_.register(o4);r_.register(d4);r_.register(s4);r_.register(r4);r_.register(a4);r_.register(e4);r_.register(_3);r_.register(j3);g4();r_.register(i4);r_.register(l4);function AZ({locationParams:_}){let $=R_(()=>{let W=_.get("chat_jid");return W&&W.trim()?W.trim():"web:default"},[_]),j=R_(()=>{let W=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),Z=R_(()=>{let W=(_.get("branch_loader")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),N=R_(()=>{let W=_.get("branch_source_chat_jid");return W&&W.trim()?W.trim():$},[$,_]),[G,Y]=v("disconnected"),[q,L]=v(()=>X2()),[X,Q]=v(null),[V,H]=v(null),[P,T]=v(!1),[g,f]=v("current"),[w,M]=v([]),[c,y]=v([]),[R,o]=v(null),{agentStatus:a,setAgentStatus:d,agentDraft:$_,setAgentDraft:i,agentPlan:q_,setAgentPlan:d_,agentThought:g_,setAgentThought:n,pendingRequest:N_,setPendingRequest:t,currentTurnId:X_,setCurrentTurnId:Y_,steerQueuedTurnId:V_,setSteerQueuedTurnId:U_,lastAgentEventRef:G_,lastSilenceNoticeRef:u_,isAgentRunningRef:x_,draftBufferRef:y_,thoughtBufferRef:E_,pendingRequestRef:z0,stalledPostIdRef:K0,currentTurnIdRef:W_,steerQueuedTurnIdRef:__,thoughtExpandedRef:F_,draftExpandedRef:j_}=G9(),[H_,I_]=v({}),[a_,p_]=v(null),[o_,c_]=v(null),[h_,A_]=v(!1),[k_,m_]=v(null),[W0,P0]=v([]),[M_,y0]=v([]),[j0,b_]=v(null),[Z0,t_]=v([]),[$0,N0]=v(!1),[C_,O0]=v(()=>UZ()),[T0,T_]=v(null),e_=k(new Set),f0=R_(()=>W0.find((W)=>W?.chat_jid===$)||null,[W0,$]),w_=R_(()=>M_.find((W)=>W?.chat_jid===$)||f0||null,[f0,M_,$]),C=w_?.root_chat_jid||f0?.root_chat_jid||$,r=QZ(g),[B_,P_]=v(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),s_=Z0.length,F0=k(new Set),f_=k([]),S0=k(new Set),$$=k(0),j$=k({inFlight:!1,lastAttemptAt:0,turnId:null});F0.current=new Set(Z0.map((W)=>W.row_id)),f_.current=Z0;let{notificationsEnabled:b0,notificationPermission:I$,toggleNotifications:H0,notify:h0}=Z9(),[i0,R0]=v(()=>new Set),[Z$,L2]=v(()=>k2("workspaceOpen",!0)),Q2=k(null),{editorOpen:E0,tabStripTabs:D0,tabStripActiveId:G0,previewTabs:g0,openEditor:Y0,closeEditor:x0,handleTabClose:N$,handleTabActivate:M$,handleTabCloseOthers:s$,handleTabCloseAll:m$,handleTabTogglePin:r$,handleTabTogglePreview:l0,revealInExplorer:a$}=z9({onTabClosed:(W)=>Q2.current?.(W)}),t$=k(null),G$=k(null),U$=k(null),n0=k(null),X0=r_.getDockPanes().length>0,[i_,B$]=v(!1),J$=I(()=>B$((W)=>!W),[]),g$=I(()=>{Y0(c4,{label:"Terminal"})},[Y0]),U2=!j&&(E0||X0&&i_),[D_,Y$]=v(!1),y$=k(!1),b$=I(()=>{if(!E0||j)return;if(y$.current=i_,i_)B$(!1);Y$(!0)},[E0,j,i_]),d0=I(()=>{if(!D_)return;if(Y$(!1),y$.current)B$(!0),y$.current=!1},[D_]),C$=I(()=>{if(D_)d0();else b$()},[D_,b$,d0]);m(()=>{if(D_&&!E0)d0()},[D_,E0,d0]),m(()=>{let W=t$.current;if(!W)return;if(G$.current)G$.current.dispose(),G$.current=null;let K=G0;if(!K)return;let F={path:K,mode:"edit"},E=r_.resolve(F)||r_.get("editor");if(!E){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let A=E.mount(W,F);G$.current=A,A.onDirtyChange?.((l)=>{n_.setDirty(K,l)}),A.onSaveRequest?.(()=>{}),A.onClose?.(()=>{x0()});let S=n_.getViewState(K);if(S&&typeof A.restoreViewState==="function")requestAnimationFrame(()=>A.restoreViewState(S));if(typeof A.onViewStateChange==="function")A.onViewStateChange((l)=>{n_.saveViewState(K,l)});return requestAnimationFrame(()=>A.focus()),()=>{if(G$.current===A)A.dispose(),G$.current=null}},[G0,x0]),m(()=>{let W=(K)=>{let F=K.detail?.path;if(F)Y0(F)};return document.addEventListener("office-viewer:open-tab",W),document.addEventListener("drawio:open-tab",W),document.addEventListener("csv-viewer:open-tab",W),document.addEventListener("pdf-viewer:open-tab",W),document.addEventListener("image-viewer:open-tab",W),document.addEventListener("video-viewer:open-tab",W),()=>{document.removeEventListener("office-viewer:open-tab",W),document.removeEventListener("drawio:open-tab",W),document.removeEventListener("csv-viewer:open-tab",W),document.removeEventListener("pdf-viewer:open-tab",W),document.removeEventListener("image-viewer:open-tab",W),document.removeEventListener("video-viewer:open-tab",W)}},[Y0]),m(()=>{let W=U$.current;if(n0.current)n0.current.dispose(),n0.current=null;if(!W||!X0||!i_)return;let K=r_.getDockPanes()[0];if(!K){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let F=K.mount(W,{mode:"view"});return n0.current=F,requestAnimationFrame(()=>F.focus?.()),()=>{if(n0.current===F)F.dispose(),n0.current=null}},[X0,i_]);let[o0,v0]=v({name:"You",avatar_url:null,avatar_background:null}),V0=k(!1),u0=k(!1),s0=k(null),C0=k($),p$=k(new Map),r0=k($),p0=k(0),c$=k(0),e$=k({}),T$=k({name:null,avatar_url:null}),J0=k({currentHashtag:null,searchQuery:null,searchOpen:!1}),O$=k(null),E$=k(null),k$=k(0),f$=k(0),h$=k(0),_2=k(null),c0=k(null),m0=k(null),F$=k(null),$2=k(0),z$=k({title:null,avatarBase:null}),i$=k(null),A$=k(!1),[S$,j2]=v(!1),B2=k(0),w$=I(()=>{if(i$.current)clearTimeout(i$.current),i$.current=null;o(null)},[]);V9(30000),m(()=>{return y8()},[]),m(()=>{return A9(L)},[]),m(()=>{l_("workspaceOpen",String(Z$))},[Z$]),m(()=>{return y9()},[]),m(()=>{return()=>{w$()}},[w$]),m(()=>{if(!C_){l_(D3,"");return}l_(D3,JSON.stringify({question:C_.question||"",answer:C_.answer||"",thinking:C_.thinking||"",error:C_.error||null,status:C_.status||"success"}))},[C_]),m(()=>{e$.current=H_||{}},[H_]),m(()=>{C0.current=$},[$]),m(()=>{T$.current=o0||{name:"You",avatar_url:null,avatar_background:null}},[o0]);let l$=I((W,K,F=null)=>{if(typeof document>"u")return;let E=(W||"").trim()||"PiClaw";if(z$.current.title!==E){document.title=E;let e=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(e&&e.getAttribute("content")!==E)e.setAttribute("content",E);z$.current.title=E}let A=document.getElementById("dynamic-favicon");if(!A)return;let S=A.getAttribute("data-default")||A.getAttribute("href")||"/favicon.ico",l=K||S,Z_=K?`${l}|${F||""}`:l;if(z$.current.avatarBase!==Z_){let e=K?`${l}${l.includes("?")?"&":"?"}v=${F||Date.now()}`:l;A.setAttribute("href",e),z$.current.avatarBase=Z_}},[]),Z2=I((W)=>{if(!W)return;M((K)=>K.includes(W)?K:[...K,W])},[]),P$=I((W)=>{M((K)=>K.filter((F)=>F!==W))},[]);Q2.current=P$;let I2=I(()=>{M([])},[]),M2=I((W)=>{if(!Array.isArray(W)){M([]);return}let K=[],F=new Set;for(let E of W){if(typeof E!=="string"||!E.trim())continue;let A=E.trim();if(F.has(A))continue;F.add(A),K.push(A)}M(K)},[]),z_=I((W,K=null,F="info",E=3000)=>{w$(),o({title:W,detail:K||null,kind:F||"info"}),i$.current=setTimeout(()=>{o((A)=>A?.title===W?null:A)},E)},[w$]),O2=I((W)=>{let K=L9(W,{editorOpen:E0,resolvePane:(F)=>r_.resolve(F)});if(K.kind==="open"){Y0(K.path);return}if(K.kind==="toast")z_(K.title,K.detail,K.level)},[E0,Y0,z_]),b2=I(()=>{let W=G0;if(W)Z2(W)},[G0,Z2]),C2=I((W)=>{if(!W)return;y((K)=>K.includes(W)?K:[...K,W])},[]),N2=I(async(W,K=null)=>{let F=(A)=>{A.scrollIntoView({behavior:"smooth",block:"center"}),A.classList.add("post-highlight"),setTimeout(()=>A.classList.remove("post-highlight"),2000)},E=document.getElementById("post-"+W);if(E){F(E);return}try{let A=typeof K==="string"&&K.trim()?K.trim():$,l=(await N4(W,A))?.thread?.[0];if(!l)return;Q0((Z_)=>{if(!Z_)return[l];if(Z_.some((e)=>e.id===l.id))return Z_;return[...Z_,l]}),requestAnimationFrame(()=>{setTimeout(()=>{let Z_=document.getElementById("post-"+W);if(Z_)F(Z_)},50)})}catch(A){console.error("[scrollToMessage] Failed to fetch message",W,A)}},[$]),T2=I((W)=>{y((K)=>K.filter((F)=>F!==W))},[]),f2=I(()=>{y([])},[]),S2=I((W)=>{if(!Array.isArray(W)){y([]);return}let K=[],F=new Set;for(let E of W){if(typeof E!=="string"||!E.trim())continue;let A=E.trim();if(F.has(A))continue;F.add(A),K.push(A)}y(K)},[]),B=I((W)=>{let K=typeof W==="string"&&W.trim()?W.trim():"Could not send your message.";z_("Compose failed",K,"error",5000)},[z_]),J=I((W={})=>{let K=Date.now();if(G_.current=K,W.running)x_.current=!0,N0((F)=>F?F:!0);if(W.clearSilence)u_.current=0},[N0]),x=I(()=>{if(F$.current)clearTimeout(F$.current),F$.current=null;$2.current=0},[]);m(()=>()=>{x()},[x]);let z=I(()=>{x(),d((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:K,lastActivity:F,...E}=W;return E})},[x]),O=I((W)=>{if(!W)return;x();let K=Date.now();$2.current=K,d({type:W.type||"active",last_activity:!0}),F$.current=setTimeout(()=>{if($2.current!==K)return;d((F)=>{if(!F||!(F.last_activity||F.lastActivity))return F;return null})},W9)},[x]),D=I(()=>{x_.current=!1,N0(!1),G_.current=null,u_.current=0,y_.current="",E_.current="",z0.current=null,c0.current=null,W_.current=null,__.current=null,s0.current=null,j$.current={inFlight:!1,lastAttemptAt:0,turnId:null},x(),Y_(null),U_(null),F_.current=!1,j_.current=!1},[x,Y_,U_,N0]),b=I((W)=>{if(!D9({remainingQueueCount:W,currentTurnId:W_.current,isAgentTurnActive:$0}))return;__.current=null,U_(null)},[$0,U_]),p=I(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),u=I(()=>({agentStatus:a,agentDraft:$_?{...$_}:{text:"",totalLines:0},agentPlan:q_||"",agentThought:g_?{...g_}:{text:"",totalLines:0},pendingRequest:N_,currentTurnId:X_,steerQueuedTurnId:V_,isAgentTurnActive:Boolean($0),followupQueueItems:Array.isArray(Z0)?Z0.map((W)=>({...W})):[],activeModel:a_,activeThinkingLevel:o_,supportsThinking:Boolean(h_),activeModelUsage:k_,contextUsage:j0,isAgentRunning:Boolean(x_.current),wasAgentActive:Boolean(u0.current),draftBuffer:y_.current||"",thoughtBuffer:E_.current||"",lastAgentEvent:G_.current||null,lastSilenceNotice:u_.current||0,lastAgentResponse:c0.current||null,currentTurnIdRef:W_.current||null,steerQueuedTurnIdRef:__.current||null,thoughtExpanded:Boolean(F_.current),draftExpanded:Boolean(j_.current),agentStatusRef:s0.current||null,silentRecovery:{...j$.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[a_,k_,o_,$_,q_,a,g_,j0,X_,Z0,$0,N_,V_,h_]),s=I((W)=>{let K=W||p();x(),x_.current=Boolean(K.isAgentRunning),u0.current=Boolean(K.wasAgentActive),N0(Boolean(K.isAgentTurnActive)),G_.current=K.lastAgentEvent||null,u_.current=Number(K.lastSilenceNotice||0),y_.current=K.draftBuffer||"",E_.current=K.thoughtBuffer||"",z0.current=K.pendingRequest||null,c0.current=K.lastAgentResponse||null,W_.current=K.currentTurnIdRef||null,__.current=K.steerQueuedTurnIdRef||null,s0.current=K.agentStatusRef||null,j$.current=K.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},F_.current=Boolean(K.thoughtExpanded),j_.current=Boolean(K.draftExpanded),d(K.agentStatus||null),i(K.agentDraft?{...K.agentDraft}:{text:"",totalLines:0}),d_(K.agentPlan||""),n(K.agentThought?{...K.agentThought}:{text:"",totalLines:0}),t(K.pendingRequest||null),Y_(K.currentTurnId||null),U_(K.steerQueuedTurnId||null),t_(Array.isArray(K.followupQueueItems)?K.followupQueueItems.map((F)=>({...F})):[]),p_(K.activeModel||null),c_(K.activeThinkingLevel||null),A_(Boolean(K.supportsThinking)),m_(K.activeModelUsage??null),b_(K.contextUsage??null)},[x,p,Y_,t_,N0,U_]),Q_=I((W)=>{if(!W)return;if(W_.current===W)return;W_.current=W,j$.current={inFlight:!1,lastAttemptAt:0,turnId:W},Y_(W),__.current=null,U_(null),y_.current="",E_.current="",i({text:"",totalLines:0}),d_(""),n({text:"",totalLines:0}),t(null),z0.current=null,c0.current=null,F_.current=!1,j_.current=!1},[Y_,U_]),k0=I((W)=>{if(typeof document<"u"){let e=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&e)return}let K=c0.current;if(!K||!K.post)return;if(W&&K.turnId&&K.turnId!==W)return;let F=K.post;if(F.id&&_2.current===F.id)return;let E=String(F?.data?.content||"").trim();if(!E)return;_2.current=F.id||_2.current,c0.current=null;let A=E.replace(/\s+/g," ").slice(0,200),S=e$.current||{},Z_=(F?.data?.agent_id?S[F.data.agent_id]:null)?.name||"Pi";h0(Z_,A)},[h0]),O_=I(async(W,K)=>{if(W!=="thought"&&W!=="draft")return;let F=W_.current;if(W==="thought"){if(F_.current=K,F)try{await b9(F,"thought",K)}catch(E){console.warn("Failed to update thought visibility:",E)}if(!K)return;try{let E=F?await M9(F,"thought"):null;if(E?.text)E_.current=E.text;n((A)=>({...A||{text:"",totalLines:0},fullText:E_.current||A?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:A?.totalLines||0}))}catch(E){console.warn("Failed to fetch full thought:",E)}return}if(j_.current=K,F)try{await b9(F,"draft",K)}catch(E){console.warn("Failed to update draft visibility:",E)}if(!K)return;try{let E=F?await M9(F,"draft"):null;if(E?.text)y_.current=E.text;i((A)=>({...A||{text:"",totalLines:0},fullText:y_.current||A?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:A?.totalLines||0}))}catch(E){console.warn("Failed to fetch full draft:",E)}},[]),H$=k(null),x$=I(()=>{let W=O$.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);H$.current=x$;let F2=I((W)=>{let K=O$.current;if(!K||typeof W!=="function"){W?.();return}let{currentHashtag:F,searchQuery:E,searchOpen:A}=J0.current||{},S=!((E||A)&&!F),l=S?K.scrollHeight-K.scrollTop:K.scrollTop;W(),requestAnimationFrame(()=>{let Z_=O$.current;if(!Z_)return;if(S){let e=Math.max(Z_.scrollHeight-l,0);Z_.scrollTop=e}else{let e=Math.max(Z_.scrollHeight-Z_.clientHeight,0),h=Math.min(l,e);Z_.scrollTop=h}})},[]),K$=I((W)=>{let K=O$.current;if(!K||typeof W!=="function"){W?.();return}let F=K.scrollTop;W(),requestAnimationFrame(()=>{let E=O$.current;if(!E)return;let A=Math.max(E.scrollHeight-E.clientHeight,0);E.scrollTop=Math.min(F,A)})},[]),u1="Queued as a follow-up (one-at-a-time).",G2="⁣",I0=I((W)=>{if(!W||!Array.isArray(W))return W;let K=F0.current,F=new Set(K),E=W.filter((A)=>{if(F.has(A?.id))return!1;if(A?.data?.is_bot_message){let S=A?.data?.content;if(S===u1||S===G2)return!1}return!0});return E.length===W.length?W:E},[]),{posts:H2,setPosts:Q0,hasMore:m1,setHasMore:D2,hasMoreRef:n$,loadPosts:q0,refreshTimeline:L0,loadMore:J3,loadMoreRef:R2}=N9({preserveTimelineScroll:F2,preserveTimelineScrollTop:K$,chatJid:$}),J2=R_(()=>I0(H2),[H2,Z0,I0]),G1=I(()=>{let W=K0.current;if(!W)return;Q0((K)=>K?K.filter((F)=>F.id!==W):K),K0.current=null},[Q0]),{handleSplitterMouseDown:f9,handleSplitterTouchStart:S9,handleEditorSplitterMouseDown:R9,handleEditorSplitterTouchStart:v9,handleDockSplitterMouseDown:u9,handleDockSplitterTouchStart:m9}=Y9({appShellRef:E$,sidebarWidthRef:k$,editorWidthRef:f$,dockHeightRef:h$}),y3=I(()=>{if(!x_.current)return;x_.current=!1,u_.current=0,G_.current=null,W_.current=null,Y_(null),F_.current=!1,j_.current=!1;let W=(y_.current||"").trim();if(y_.current="",E_.current="",i({text:"",totalLines:0}),d_(""),n({text:"",totalLines:0}),t(null),z0.current=null,c0.current=null,!W){d({type:"error",title:"Response stalled - No content received"});return}let F=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,E=Date.now(),A=new Date().toISOString(),S={id:E,timestamp:A,data:{type:"agent_response",content:F,agent_id:"default",is_local_stall:!0}};K0.current=E,Q0((l)=>l?N1([...l,S]):[S]),H$.current?.(),d(null)},[Y_]);m(()=>{J0.current={currentHashtag:X,searchQuery:V,searchOpen:P}},[X,V,P]);let S_=I(()=>{let W=++$$.current,K=$;JZ(K).then((F)=>{if(W!==$$.current)return;if(C0.current!==K)return;let E=S0.current,A=Array.isArray(F?.items)?F.items.map((S)=>({...S})).filter((S)=>!E.has(S.row_id)):[];if(A.length){t_((S)=>{if(S.length===A.length&&S.every((l,Z_)=>l.row_id===A[Z_].row_id))return S;return A});return}E.clear(),b(0),t_((S)=>S.length===0?S:[])}).catch(()=>{if(W!==$$.current)return;if(C0.current!==K)return;t_((F)=>F.length===0?F:[])})},[b,$,t_]),W$=I(async()=>{let W=$;try{let K=await F3(W);if(C0.current!==W)return;if(K)b_(K)}catch(K){if(C0.current!==W)return;console.warn("Failed to fetch agent context:",K)}},[$]),q$=I(async()=>{let W=$;try{let K=await C9(W);if(C0.current!==W)return null;if(!K||K.status!=="active"||!K.data){if(u0.current){let{currentHashtag:A,searchQuery:S,searchOpen:l}=J0.current||{};if(!A&&!S&&!l)L0()}return u0.current=!1,D(),s0.current=null,d(null),i({text:"",totalLines:0}),d_(""),n({text:"",totalLines:0}),t(null),z0.current=null,K??null}u0.current=!0;let F=K.data;s0.current=F;let E=F.turn_id||F.turnId;if(E)Q_(E);if(J({running:!0,clearSilence:!0}),z(),d(F),K.thought&&K.thought.text)n((A)=>{if(A&&A.text&&A.text.length>=K.thought.text.length)return A;return E_.current=K.thought.text,{text:K.thought.text,totalLines:K.thought.totalLines||0}});if(K.draft&&K.draft.text)i((A)=>{if(A&&A.text&&A.text.length>=K.draft.text.length)return A;return y_.current=K.draft.text,{text:K.draft.text,totalLines:K.draft.totalLines||0}});return K}catch(K){return console.warn("Failed to fetch agent status:",K),null}},[D,z,J,L0,Q_]),g1=I(async()=>{if(!x_.current)return null;if(z0.current)return null;let W=W_.current||null,K=j$.current,F=Date.now();if(K.inFlight)return null;if(K.turnId===W&&F-K.lastAttemptAt<Q3)return null;K.inFlight=!0,K.lastAttemptAt=F,K.turnId=W;try{let{currentHashtag:E,searchQuery:A,searchOpen:S}=J0.current||{};if(!E&&!A&&!S)await L0();return await S_(),await q$()}finally{K.inFlight=!1}},[q$,S_,L0]);m(()=>{let W=Math.min(1000,Math.max(100,Math.floor(L3/2))),K=setInterval(()=>{if(!x_.current)return;if(z0.current)return;let F=G_.current;if(!F)return;let E=Date.now(),A=E-F,S=t2(s0.current);if(A>=K9){if(!S)d({type:"waiting",title:"Re-syncing after a quiet period…"});g1();return}if(A>=L3){if(E-u_.current>=Q3){if(!S){let l=Math.floor(A/1000);d({type:"waiting",title:`Waiting for model… No events for ${l}s`})}u_.current=E,g1()}}},W);return()=>clearInterval(K)},[g1]);let g9=I((W)=>{if(Y(W),W!=="connected"){d(null),i({text:"",totalLines:0}),d_(""),n({text:"",totalLines:0}),t(null),z0.current=null,D();return}if(!V0.current){V0.current=!0;let{currentHashtag:A,searchQuery:S,searchOpen:l}=J0.current||{};if(!A&&!S&&!l)L0();q$(),S_(),W$();return}let{currentHashtag:K,searchQuery:F,searchOpen:E}=J0.current;if(!K&&!F&&!E)L0();q$(),S_(),W$()},[D,L0,q$,S_,W$]),p9=I(async(W)=>{Q(W),Q0(null),await q0(W)},[q0]),c9=I(async()=>{Q(null),H(null),Q0(null),await q0()},[q0]),h9=I(async(W,K=g)=>{if(!W||!W.trim())return;let F=K==="root"||K==="all"?K:"current";f(F),H(W.trim()),Q(null),Q0(null);try{let E=await x9(W.trim(),50,0,$,F,C);Q0(E.results),D2(!1)}catch(E){console.error("Failed to search:",E),Q0([])}},[$,C,g]),i9=I(()=>{T(!0),H(null),Q(null),f("current"),Q0([])},[]),l9=I(()=>{T(!1),H(null),q0()},[q0]),PZ=I(()=>{},[]),p1=!X&&!V&&!P,n9=I(async(W)=>{if(!W)return;let K=W.id,F=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():$,E=J2?.filter((S)=>S?.data?.thread_id===K&&S?.id!==K).length||0;if(E>0){if(!window.confirm(`Delete this message and its ${E} replies?`))return}let A=(S)=>{if(!S.length)return;R0((Z_)=>{let e=new Set(Z_);return S.forEach((h)=>e.add(h)),e}),setTimeout(()=>{if(K$(()=>{Q0((Z_)=>Z_?Z_.filter((e)=>!S.includes(e.id)):Z_)}),R0((Z_)=>{let e=new Set(Z_);return S.forEach((h)=>e.delete(h)),e}),n$.current)R2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let S=await I9(K,E>0,F);if(S?.ids?.length)A(S.ids)}catch(S){let l=S?.message||"";if(E===0&&l.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let e=await I9(K,!0,F);if(e?.ids?.length)A(e.ids);return}console.error("Failed to delete post:",S),alert(`Failed to delete message: ${l}`)}},[$,J2,K$]),E3=I(async()=>{try{let W=await BZ();I_(q9(W));let K=W?.user||{};v0((E)=>{let A=typeof K.name==="string"&&K.name.trim()?K.name.trim():"You",S=typeof K.avatar_url==="string"?K.avatar_url.trim():null,l=typeof K.avatar_background==="string"&&K.avatar_background.trim()?K.avatar_background.trim():null;if(E.name===A&&E.avatar_url===S&&E.avatar_background===l)return E;return{name:A,avatar_url:S,avatar_background:l}});let F=(W?.agents||[]).find((E)=>E.id==="default");l$(F?.name,F?.avatar_url)}catch(W){console.warn("Failed to load agents:",W)}try{let W=$,K=await F3(W);if(C0.current!==W)return;if(K)b_(K)}catch{}},[l$,$]);m(()=>{E3();let W=A2("sidebarWidth",null),K=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(k$.current=K,E$.current)E$.current.style.setProperty("--sidebar-width",`${K}px`)},[E3]);let v2=$0||a!==null,k3=I((W)=>{if(!W||typeof W!=="object")return;let K=W.agent_id;if(!K)return;let{agent_name:F,agent_avatar:E}=W;if(!F&&E===void 0)return;let A=e$.current?.[K]||{id:K},S=A.name||null,l=A.avatar_url??A.avatarUrl??A.avatar??null,Z_=!1,e=!1;if(F&&F!==A.name)S=F,e=!0;if(E!==void 0){let h=typeof E==="string"?E.trim():null,K_=typeof l==="string"?l.trim():null,J_=h||null;if(J_!==(K_||null))l=J_,Z_=!0}if(!e&&!Z_)return;if(I_((h)=>{let J_={...h[K]||{id:K}};if(e)J_.name=S;if(Z_)J_.avatar_url=l;return{...h,[K]:J_}}),K==="default")l$(S,l,Z_?Date.now():null)},[l$]),A3=I((W)=>{if(!W||typeof W!=="object")return;let K=W.user_name??W.userName,F=W.user_avatar??W.userAvatar,E=W.user_avatar_background??W.userAvatarBackground;if(K===void 0&&F===void 0&&E===void 0)return;v0((A)=>{let S=typeof K==="string"&&K.trim()?K.trim():A.name||"You",l=F===void 0?A.avatar_url:typeof F==="string"&&F.trim()?F.trim():null,Z_=E===void 0?A.avatar_background:typeof E==="string"&&E.trim()?E.trim():null;if(A.name===S&&A.avatar_url===l&&A.avatar_background===Z_)return A;return{name:S,avatar_url:l,avatar_background:Z_}})},[]),c1=I((W)=>{if(!W||typeof W!=="object")return;let K=W.model??W.current;if(K!==void 0)p_(K);if(W.thinking_level!==void 0)c_(W.thinking_level??null);if(W.supports_thinking!==void 0)A_(Boolean(W.supports_thinking));if(W.provider_usage!==void 0)m_(W.provider_usage??null)},[]),u2=I(()=>{let W=$;OZ(W).then((K)=>{if(C0.current!==W)return;if(K)c1(K)}).catch(()=>{})},[c1,$]),M0=I(()=>{let W=$,K=(F)=>Array.isArray(F)?F.filter((E)=>E&&typeof E.chat_jid==="string"&&typeof E.agent_name==="string"&&E.agent_name.trim()):[];Promise.all([FZ().catch(()=>({chats:[]})),H3(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([F,E])=>{if(C0.current!==W)return;let A=K(F?.chats),S=K(E?.chats);if(S.length===0){P0(A);return}let l=new Map(A.map((e)=>[e.chat_jid,e])),Z_=S.map((e)=>{let h=l.get(e.chat_jid);return h?{...e,...h,is_active:h.is_active??e.is_active}:e});Z_.sort((e,h)=>{if(e.chat_jid===W&&h.chat_jid!==W)return-1;if(h.chat_jid===W&&e.chat_jid!==W)return 1;let K_=Boolean(e.archived_at),J_=Boolean(h.archived_at);if(K_!==J_)return K_?1:-1;if(Boolean(e.is_active)!==Boolean(h.is_active))return e.is_active?-1:1;return String(e.chat_jid).localeCompare(String(h.chat_jid))}),P0(Z_)}).catch(()=>{if(C0.current!==W)return;P0([])})},[$]),A0=I(()=>{H3(C).then((W)=>{let K=Array.isArray(W?.chats)?W.chats.filter((F)=>F&&typeof F.chat_jid==="string"&&typeof F.agent_name==="string"):[];y0(K)}).catch(()=>{})},[C]),d9=I((W)=>{let K=W?.row_id;if(K==null)return;S0.current.add(K),t_((F)=>F.filter((E)=>E?.row_id!==K)),yZ(K,O3($)).then(()=>{S_()}).catch((F)=>{console.warn("[queue] Failed to steer queued item:",F),z_("Failed to steer message","The queued message could not be sent as steering.","warning"),S0.current.delete(K),S_()})},[$,S_,t_,z_]),o9=I((W)=>{let K=W?.row_id;if(K==null)return;let F=f_.current.filter((E)=>E?.row_id!==K).length;S0.current.add(K),b(F),t_((E)=>E.filter((A)=>A?.row_id!==K)),EZ(K,O3($)).then(()=>{S_()}).catch((E)=>{console.warn("[queue] Failed to remove queued item:",E),z_("Failed to remove message","The queued message could not be removed.","warning"),S0.current.delete(K),S_()})},[b,$,S_,t_,z_]),m2=I((W)=>{if(!W||typeof W!=="object")return;if(M0(),A0(),W?.queued==="followup"||W?.queued==="steer"){S_();return}let K=W?.command;if(K&&typeof K==="object"&&(K?.queued_followup||K?.queued_steer))S_()},[M0,A0,S_]),h1=I(()=>{if(m0.current)m0.current.abort(),m0.current=null;O0(null)},[]),Y1=I(async(W)=>{let K=String(W||"").trim();if(!K)return z_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(m0.current)m0.current.abort();let F=new AbortController;m0.current=F,O0({question:K,answer:"",thinking:"",error:null,model:null,status:"running"});try{let E=await kZ(K,{signal:F.signal,chatJid:C8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(A,S)=>{if(A==="side_prompt_start")O0((l)=>l?{...l,status:"running"}:l)},onThinkingDelta:(A)=>{O0((S)=>S?{...S,thinking:`${S.thinking||""}${A||""}`}:S)},onTextDelta:(A)=>{O0((S)=>S?{...S,answer:`${S.answer||""}${A||""}`}:S)}});if(m0.current!==F)return!0;O0((A)=>A?{...A,answer:E?.result||A.answer||"",thinking:E?.thinking||A.thinking||"",model:E?.model||null,status:"success",error:null}:A)}catch(E){if(F.signal.aborted)return!0;O0((A)=>A?{...A,status:"error",error:E?.payload?.error||E?.message||"BTW request failed."}:A)}finally{if(m0.current===F)m0.current=null}return!0},[$,z_]),s9=I(async({content:W})=>{let K=b8(W);if(!K)return!1;if(K.type==="help")return z_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(K.type==="clear")return h1(),z_("BTW cleared","Closed the side conversation panel.","info"),!0;if(K.type==="ask")return await Y1(K.question),!0;return!1},[h1,Y1,z_]),r9=I(()=>{if(C_?.question)Y1(C_.question)},[C_,Y1]),a9=I(async()=>{let W=S8(C_);if(!W)return;try{let K=await z2("default",W,null,[],v2?"queue":null,$);m2(K),z_(K?.queued==="followup"?"BTW queued":"BTW injected",K?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(K){z_("BTW inject failed",K?.message||"Could not inject BTW answer into chat.","warning")}},[C_,m2,v2,z_]),g2=I(()=>{u2(),M0(),A0(),S_(),W$()},[u2,M0,A0,S_,W$]);m(()=>{g2();let W=setInterval(()=>{u2(),M0(),A0(),S_()},60000);return()=>clearInterval(W)},[g2,u2,M0,A0,S_]),m(()=>{A0()},[A0]),m(()=>{let W=!1;Q0(null);let K=()=>{if(W)return;requestAnimationFrame(()=>{if(W)return;x$()})};if(X)return q0(X),()=>{W=!0};if(V)return x9(V,50,0,$,g,C).then((F)=>{if(W)return;Q0(F.results),D2(!1)}).catch((F)=>{if(W)return;console.error("Failed to search:",F),Q0([]),D2(!1)}),()=>{W=!0};return q0().then(()=>{K()}).catch((F)=>{if(W)return;console.error("Failed to load timeline:",F)}),()=>{W=!0}},[$,X,V,g,C,q0,x$,D2,Q0]),m(()=>{let W=r0.current||$;p$.current.set(W,u())},[$,u]),m(()=>{let W=r0.current||$;if(W===$)return;p$.current.set(W,u()),r0.current=$,S0.current.clear(),s(p$.current.get($)||null),S_(),q$(),W$()},[$,q$,W$,S_,s,u]);let t9=I(()=>{let{currentHashtag:W,searchQuery:K,searchOpen:F}=J0.current||{};if(!W&&!K&&!F)L0();g2()},[g2,L0]),p2=I((W,K="streaming")=>{let F=v8({...W,...W&&W.status?{}:{status:K}});if(!F)return;let E=_$(F);if(E&&e_.current.has(E))return;T_((A)=>{let S=_$(A),l=Boolean(E&&S&&E===S),Z_={...l&&A?.artifact?A.artifact:{},...F.artifact||{}};return{...l&&A?A:{},...F,artifact:Z_,source:"live",originChatJid:F.originChatJid||$,openedAt:l&&A?.openedAt?A.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[$]),i1=I((W,K)=>{let F=K?.turn_id,E=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null,S=E?E===$:W==="connected"||W==="workspace_update";if(S)k3(K),A3(K);if(W==="ui_theme"){E8(K);return}if(W==="generated_widget_open"){if(!S)return;if(F&&!W_.current)Q_(F);p2(K,"loading");return}if(W==="generated_widget_delta"){if(!S)return;if(F&&!W_.current)Q_(F);p2(K,"streaming");return}if(W==="generated_widget_final"){if(!S)return;if(F&&!W_.current)Q_(F);p2(K,"final");return}if(W==="generated_widget_error"){if(!S)return;p2(K,"error");return}if(W==="generated_widget_close"){if(!S)return;let h=_$(K);T_((K_)=>{if(!K_||K_?.source!=="live")return K_;let J_=_$(K_);if(h&&J_&&h!==J_)return K_;return null});return}if(W?.startsWith("agent_")){if(!(W==="agent_draft_delta"||W==="agent_thought_delta"||W==="agent_draft"||W==="agent_thought"))z()}if(W==="connected"){d(null),i({text:"",totalLines:0}),d_(""),n({text:"",totalLines:0}),t(null),z0.current=null,D();let h=$;C9(h).then((w0)=>{if(C0.current!==h)return;if(!w0||w0.status!=="active"||!w0.data)return;let Y2=w0.data,z1=Y2.turn_id||Y2.turnId;if(z1)Q_(z1);if(J({clearSilence:!0}),O(Y2),w0.thought&&w0.thought.text)E_.current=w0.thought.text,n({text:w0.thought.text,totalLines:w0.thought.totalLines||0});if(w0.draft&&w0.draft.text)y_.current=w0.draft.text,i({text:w0.draft.text,totalLines:w0.draft.totalLines||0})}).catch((w0)=>{console.warn("Failed to fetch agent status:",w0)});let{currentHashtag:K_,searchQuery:J_,searchOpen:X$}=J0.current||{};if(!K_&&!J_&&!X$)L0();g2();return}if(W==="agent_status"){if(!S){if(K?.type==="done"||K?.type==="error")M0(),A0();return}if(K.type==="done"||K.type==="error"){if(F&&W_.current&&F!==W_.current)return;if(K.type==="done"){k0(F||W_.current);let{currentHashtag:h,searchQuery:K_,searchOpen:J_}=J0.current||{};if(!h&&!K_&&!J_)L0();if(K.context_usage)b_(K.context_usage)}if(u0.current=!1,D(),S0.current.clear(),M0(),S_(),i({text:"",totalLines:0}),d_(""),n({text:"",totalLines:0}),t(null),K.type==="error")d({type:"error",title:K.title||"Agent error"}),setTimeout(()=>d(null),8000);else d(null)}else{if(F)Q_(F);if(J({running:!0,clearSilence:!0}),K.type==="thinking")y_.current="",E_.current="",i({text:"",totalLines:0}),d_(""),n({text:"",totalLines:0});s0.current=K,d((h)=>{if(h&&h.type===K.type&&h.title===K.title)return h;return K})}return}if(W==="agent_steer_queued"){if(!S)return;if(F&&W_.current&&F!==W_.current)return;let h=F||W_.current;if(!h)return;__.current=h,U_(h);return}if(W==="agent_followup_queued"){if(!S)return;let h=K?.row_id,K_=K?.content;if(h!=null&&typeof K_==="string"&&K_.trim())t_((J_)=>{if(J_.some((X$)=>X$?.row_id===h))return J_;return[...J_,{row_id:h,content:K_,timestamp:K?.timestamp||null,thread_id:K?.thread_id??null}]});S_();return}if(W==="agent_followup_consumed"){if(!S)return;let h=K?.row_id;if(h!=null){let w0=f_.current.filter((Y2)=>Y2.row_id!==h).length;b(w0),t_((Y2)=>Y2.filter((z1)=>z1.row_id!==h))}S_();let{currentHashtag:K_,searchQuery:J_,searchOpen:X$}=J0.current||{};if(!K_&&!J_&&!X$)L0();return}if(W==="agent_followup_removed"){if(!S)return;let h=K?.row_id;if(h!=null){let K_=f_.current.filter((J_)=>J_.row_id!==h).length;S0.current.add(h),b(K_),t_((J_)=>J_.filter((X$)=>X$.row_id!==h))}S_();return}if(W==="agent_draft_delta"){if(!S)return;if(F&&W_.current&&F!==W_.current)return;if(F&&!W_.current)Q_(F);if(J({running:!0,clearSilence:!0}),K?.reset)y_.current="";if(K?.delta)y_.current+=K.delta;let h=Date.now();if(!p0.current||h-p0.current>=100){p0.current=h;let K_=y_.current,J_=U3(K_);if(j_.current)i((X$)=>({text:X$?.text||"",totalLines:J_,fullText:K_}));else i({text:K_,totalLines:J_})}return}if(W==="agent_draft"){if(!S)return;if(F&&W_.current&&F!==W_.current)return;if(F&&!W_.current)Q_(F);J({running:!0,clearSilence:!0});let h=K.text||"",K_=K.mode||(K.kind==="plan"?"replace":"append"),J_=Number.isFinite(K.total_lines)?K.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(K.kind==="plan")if(K_==="replace")d_(h);else d_((X$)=>(X$||"")+h);else if(!j_.current)y_.current=h,i({text:h,totalLines:J_});return}if(W==="agent_thought_delta"){if(!S)return;if(F&&W_.current&&F!==W_.current)return;if(F&&!W_.current)Q_(F);if(J({running:!0,clearSilence:!0}),K?.reset)E_.current="";if(typeof K?.delta==="string")E_.current+=K.delta;let h=Date.now();if(F_.current&&(!c$.current||h-c$.current>=100)){c$.current=h;let K_=E_.current;n((J_)=>({text:J_?.text||"",totalLines:U3(K_),fullText:K_}))}return}if(W==="agent_thought"){if(!S)return;if(F&&W_.current&&F!==W_.current)return;if(F&&!W_.current)Q_(F);J({running:!0,clearSilence:!0});let h=K.text||"",K_=Number.isFinite(K.total_lines)?K.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!F_.current)E_.current=h,n({text:h,totalLines:K_});return}if(W==="model_changed"){if(!S)return;if(K?.model!==void 0)p_(K.model);if(K?.thinking_level!==void 0)c_(K.thinking_level??null);if(K?.supports_thinking!==void 0)A_(Boolean(K.supports_thinking));let h=$;F3(h).then((K_)=>{if(C0.current!==h)return;if(K_)b_(K_)}).catch(()=>{});return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:K}));return}if(E9(W)){if(!S)return;if(k9(W,K),W==="extension_ui_notify"&&typeof K?.message==="string")z_(K.message,null,K?.type||"info");if(W==="extension_ui_error"&&typeof K?.error==="string")z_("Extension UI error",K.error,"error",5000);return}let{currentHashtag:l,searchQuery:Z_,searchOpen:e}=J0.current;if(W==="agent_response"){if(!S)return;G1(),c0.current={post:K,turnId:W_.current}}if(!l&&!Z_&&!e&&S&&(W==="new_post"||W==="new_reply"||W==="agent_response"))Q0((h)=>{if(!h)return[K];if(h.some((K_)=>K_.id===K.id))return h;return[...h,K]}),H$.current?.();if(W==="interaction_updated"){if(!S)return;if(l||Z_||e)return;Q0((h)=>{if(!h)return h;if(!h.some((K_)=>K_.id===K.id))return h;return h.map((K_)=>K_.id===K.id?K:K_)})}if(W==="interaction_deleted"){if(!S)return;if(l||Z_||e)return;let h=K?.ids||[];if(h.length){if(K$(()=>{Q0((K_)=>K_?K_.filter((J_)=>!h.includes(J_.id)):K_)}),n$.current)R2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[p2,D,z,$,R2,J,k0,K$,M0,A0,L0,G1,Q_,O,k3,A3,u2,S_,t_]);m(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=i1,W.reset=()=>{G1(),D(),d(null),i({text:"",totalLines:0}),d_(""),n({text:"",totalLines:0}),t(null)},W.finalize=()=>y3(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[D,y3,i1,G1]),j9({handleSseEvent:i1,handleConnectionStatusChange:g9,loadPosts:q0,onWake:t9,chatJid:$}),m(()=>{if(!J2||J2.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let K=W.slice(5);N2(K),history.replaceState(null,"",location.pathname+location.search)},[J2,N2]);let l1=a!==null;m(()=>{if(G!=="connected")return;let K=setInterval(()=>{let{currentHashtag:F,searchQuery:E,searchOpen:A}=J0.current||{},S=!F&&!E&&!A;if(l1){if(S)L0();S_(),q$(),W$()}else{if(S)L0();q$(),W$()}},l1?15000:60000);return()=>clearInterval(K)},[G,l1,q$,W$,S_,L0]),m(()=>{return w9(()=>{q$(),W$(),S_()})},[q$,W$,S_]);let e9=I(()=>{L2((W)=>!W)},[]),w3=I((W)=>{if(typeof window>"u")return;let K=String(W||"").trim();if(!K||K===$)return;let F=V2(window.location.href,K,{chatOnly:j});window.location.assign(F)},[j,$]),P3=I(async()=>{if(typeof window>"u"||!w_?.chat_jid)return;let W=Date.now(),K=P9();if(!K)return;if(A$.current||W<B2.current||K.inFlight||W<K.cooldownUntil)return;A$.current=!0,K.inFlight=!0,j2(!0);try{let F=w_.display_name||w_.agent_name||"",E=window.prompt("Agent name",F);if(E===null)return;let A=E.trim(),S=A.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||w_.agent_name||"",l=await HZ(w_.chat_jid,{displayName:A,agentName:S});await Promise.allSettled([M0(),A0()]);let Z_=l?.branch?.agent_name||S||w_.agent_name||"",e=l?.branch?.display_name||A||Z_;z_("Branch renamed",`${e} (@${Z_})`,"info",3500)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not rename branch."),A=/already in use/i.test(E||"")?`${E} Switch to or restore that existing session from the session manager.`:E;z_("Could not rename branch",A||"Could not rename branch.","warning",5000)}finally{A$.current=!1,j2(!1);let F=Date.now()+VZ;B2.current=F;let E=P9();if(E)E.inFlight=!1,E.cooldownUntil=F}},[w_,M0,A0,j2,z_]),x3=I(async(W=null)=>{if(typeof window>"u")return;let K=typeof W==="string"&&W.trim()?W.trim():"",F=typeof $==="string"&&$.trim()?$.trim():"",E=K||w_?.chat_jid||F;if(!E){z_("Could not prune branch","No active session is selected yet.","warning",4000);return}let A=(w_?.chat_jid===E?w_:null)||M_.find((e)=>e?.chat_jid===E)||W0.find((e)=>e?.chat_jid===E)||null;if(A?.chat_jid===(A?.root_chat_jid||A?.chat_jid)){z_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let l=`@${A?.agent_name||E}${A?.chat_jid?` — ${A.chat_jid}`:""}`;if(!window.confirm(`Prune ${l}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await DZ(E),await Promise.allSettled([M0(),A0()]);let e=A?.root_chat_jid||"web:default";z_("Branch pruned",`${l} has been archived.`,"info",3000);let h=V2(window.location.href,e,{chatOnly:j});window.location.assign(h)}catch(e){let h=e instanceof Error?e.message:String(e||"Could not prune branch.");z_("Could not prune branch",h||"Could not prune branch.","warning",5000)}},[W0,j,w_,M_,$,M0,A0,z_]),_5=I(async(W)=>{let K=typeof W==="string"?W.trim():"";if(!K||typeof T9!=="function")return;try{let F=await T9(K);await Promise.allSettled([M0(),A0()]);let E=F?.branch,A=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():K,S=typeof E?.agent_name==="string"&&E.agent_name.trim()?`@${E.agent_name.trim()}`:A;z_("Branch restored",`Restored ${S}.`,"info",3200);let l=V2(window.location.href,A,{chatOnly:j});window.location.assign(l)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not restore branch.");z_("Could not restore branch",E||"Could not restore branch.","warning",5000)}},[j,M0,A0,z_]);m(()=>{if(!Z||typeof window>"u")return;let W=!1;return(async()=>{try{P_({status:"running",message:"Preparing a new chat branch…"});let K=await n2(N);if(W)return;let F=K?.branch,E=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let A=V2(window.location.href,E,{chatOnly:!0});window.location.replace(A)}catch(K){if(W)return;P_({status:"error",message:v1(K)})}})(),()=>{W=!0}},[Z,N]);let $5=I((W)=>{if(!W||typeof W!=="object")return;let K=_$(W);if(K)e_.current.delete(K);T_({...W,openedAt:new Date().toISOString()})},[]),c2=I(()=>{T_((W)=>{let K=_$(W);if(W?.source==="live"&&K)e_.current.add(K);return null})},[]),j5=I((W,K)=>{let F=typeof W?.kind==="string"?W.kind:"",E=_$(K);if(!F||!E)return;if(F==="widget.close"){c2();return}if(F==="widget.submit"){let A=p8(W?.payload),S=c8(W?.payload);if(T_((l)=>{let Z_=_$(l);if(!l||Z_!==E)return l;return{...l,runtimeState:{...l.runtimeState||{},lastEventKind:F,lastEventPayload:W?.payload||null,lastSubmitAt:new Date().toISOString()}}}),!A){if(z_("Widget submission received","The widget submitted data without a message payload yet.","info",3500),S)c2();return}(async()=>{try{let l=await z2("default",A,null,[],v2?"queue":null,$);if(m2(l),z_(l?.queued==="followup"?"Widget submission queued":"Widget submission sent",l?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),S)c2()}catch(l){z_("Widget submission failed",l?.message||"Could not send the widget message.","warning",5000)}})();return}if(F==="widget.ready"||F==="widget.request_refresh"){if(T_((A)=>{let S=_$(A);if(!A||S!==E)return A;return{...A,runtimeState:{...A.runtimeState||{},lastEventKind:F,lastEventPayload:W?.payload||null,...F==="widget.ready"?{readyAt:new Date().toISOString()}:{},...F==="widget.request_refresh"?{lastRefreshRequestAt:new Date().toISOString()}:{}}}}),F==="widget.request_refresh")z_("Widget refresh requested","Live widget refresh callbacks are not wired yet.","info",3000)}},[$,c2,m2,v2,z_]);m(()=>{e_.current.clear(),T_(null)},[$]);let Z5=I(async()=>{if(typeof window>"u")return;try{let K=(await n2($))?.branch,F=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!F)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([M0(),A0()]);let E=K?.agent_name?`@${K.agent_name}`:F;z_("New branch created",`Switched to ${E}.`,"info",2500);let A=V2(window.location.href,F,{chatOnly:j});window.location.assign(A)}catch(W){z_("Could not create branch",v1(W),"warning",5000)}},[j,$,M0,A0,z_]),N5=I(async()=>{if(typeof window>"u"||q)return;let W=Q9($);if(!W){z_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(W.mode==="tab"){let F=H9(window.location.href,$,{chatOnly:!0});if(!window.open(F,W.target))z_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let K=U9(W);if(!K){z_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}B9(K,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await n2($))?.branch,A=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");try{let l=await Y4();P0(Array.isArray(l?.chats)?l.chats:[])}catch{}try{let l=await H3(C);y0(Array.isArray(l?.chats)?l.chats:[])}catch{}let S=V2(window.location.href,A,{chatOnly:!0});O9(K,S)}catch(F){F9(K),z_("Could not open branch window",v1(F),"error",5000)}},[$,C,q,z_]);m(()=>{if(!E0)return;if(typeof window>"u")return;let W=E$.current;if(!W)return;if(!f$.current){let K=A2("editorWidth",null),F=k$.current||280;f$.current=Number.isFinite(K)?K:F}if(W.style.setProperty("--editor-width",`${f$.current}px`),!h$.current){let K=A2("dockHeight",null);h$.current=Number.isFinite(K)?K:200}W.style.setProperty("--dock-height",`${h$.current}px`)},[E0]),m(()=>{if(!X0||j)return;let W=(K)=>{if(K.ctrlKey&&K.key==="`")K.preventDefault(),J$()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[J$,X0,j]),m(()=>{if(j)return;let W=(K)=>{if(K.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault(),C$();return}if(K.key==="Escape"&&D_)K.preventDefault(),d0()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[C$,d0,D_,j]);let G5=Boolean(V_&&V_===(a?.turn_id||X_));if(Z)return U`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${B_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${B_.message}</p>
                    </div>
                </div>
            </div>
        `;return U`
        <div class=${`app-shell${Z$?"":" workspace-collapsed"}${E0?" editor-open":""}${j?" chat-only":""}${D_?" zen-mode":""}`} ref=${E$}>
            ${!j&&U`
                <${a6}
                    onFileSelect=${Z2}
                    visible=${Z$}
                    active=${Z$||E0}
                    onOpenEditor=${Y0}
                    onOpenTerminalTab=${g$}
                    onToggleTerminal=${X0?J$:void 0}
                    terminalVisible=${Boolean(X0&&i_)}
                />
                <button
                    class=${`workspace-toggle-tab${Z$?" open":" closed"}`}
                    onClick=${e9}
                    title=${Z$?"Hide workspace":"Show workspace"}
                    aria-label=${Z$?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${f9} onTouchStart=${S9}></div>
            `}
            ${U2&&U`
                <div class="editor-pane-container">
                    ${D_&&U`<div class="zen-hover-zone"></div>`}
                    ${E0&&U`
                        <${e6}
                            tabs=${D0}
                            activeId=${G0}
                            onActivate=${M$}
                            onClose=${N$}
                            onCloseOthers=${s$}
                            onCloseAll=${m$}
                            onTogglePin=${r$}
                            onTogglePreview=${l0}
                            previewTabs=${g0}
                            onToggleDock=${X0?J$:void 0}
                            dockVisible=${X0&&i_}
                            onToggleZen=${C$}
                            zenMode=${D_}
                        />
                    `}
                    ${E0&&U`<div class="editor-pane-host" ref=${t$}></div>`}
                    ${E0&&G0&&g0.has(G0)&&U`
                        <${$9}
                            getContent=${()=>G$.current?.getContent?.()}
                            path=${G0}
                            onClose=${()=>l0(G0)}
                        />
                    `}
                    ${X0&&i_&&U`<div class="dock-splitter" onMouseDown=${u9} onTouchStart=${m9}></div>`}
                    ${X0&&U`<div class=${`dock-panel${i_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${J$} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${U$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${R9} onTouchStart=${v9}></div>
            `}
            <div class="container">
                ${V&&X9()&&U`<div class="search-results-spacer"></div>`}
                ${j&&U`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${w_?.agent_name?`@${w_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${w_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${M_.length>1&&U`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(W)=>w3(W.currentTarget.value)}
                                    >
                                        ${M_.map((W)=>U`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${`@${W.agent_name} — ${W.chat_jid}${W.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${w_?.chat_jid&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${P3}
                                    title=${S$?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${S$}
                                >
                                    ${S$?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${w_?.chat_jid&&w_.chat_jid!==(w_.root_chat_jid||w_.chat_jid)&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${x3}
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
                ${(X||V)&&U`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${c9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${X?`#${X}`:`Search: ${V} · ${r}`}</span>
                    </div>
                `}
                <${Q6}
                    posts=${J2}
                    hasMore=${p1?m1:!1}
                    onLoadMore=${p1?J3:void 0}
                    timelineRef=${O$}
                    onHashtagClick=${p9}
                    onMessageRef=${C2}
                    onScrollToMessage=${N2}
                    onFileRef=${O2}
                    onPostClick=${void 0}
                    onDeletePost=${n9}
                    onOpenWidget=${$5}
                    emptyMessage=${X?`No posts with #${X}`:V?`No results for "${V}"`:void 0}
                    agents=${H_}
                    user=${o0}
                    reverse=${p1}
                    removingPostIds=${i0}
                    searchQuery=${V}
                />
                <${t8}
                    status=${a}
                    draft=${$_}
                    plan=${q_}
                    thought=${g_}
                    pendingRequest=${N_}
                    intent=${R}
                    turnId=${X_}
                    steerQueued=${G5}
                    onPanelToggle=${O_}
                />
                <${R8}
                    session=${C_}
                    onClose=${h1}
                    onRetry=${r9}
                    onInject=${a9}
                />
                <${l8}
                    widget=${T0}
                    onClose=${c2}
                    onWidgetEvent=${j5}
                />
                <${q8}
                    onPost=${()=>{let{searchQuery:W,searchOpen:K}=J0.current||{};if(!W&&!K)q0(),x$()}}
                    onFocus=${x$}
                    searchMode=${P}
                    searchScope=${g}
                    onSearch=${h9}
                    onSearchScopeChange=${f}
                    onEnterSearch=${i9}
                    onExitSearch=${l9}
                    fileRefs=${w}
                    onRemoveFileRef=${P$}
                    onClearFileRefs=${I2}
                    onSetFileRefs=${M2}
                    messageRefs=${c}
                    onRemoveMessageRef=${T2}
                    onClearMessageRefs=${f2}
                    onSetMessageRefs=${S2}
                    onSwitchChat=${w3}
                    onRenameSession=${P3}
                    isRenameSessionInProgress=${S$}
                    onCreateSession=${Z5}
                    onDeleteSession=${x3}
                    onRestoreSession=${_5}
                    activeEditorPath=${j?null:G0}
                    onAttachEditorFile=${j?void 0:b2}
                    onOpenFilePill=${O2}
                    followupQueueCount=${s_}
                    followupQueueItems=${Z0}
                    onInjectQueuedFollowup=${d9}
                    onRemoveQueuedFollowup=${o9}
                    onSubmitIntercept=${s9}
                    onMessageResponse=${m2}
                    onSubmitError=${B}
                    onPopOutChat=${q?void 0:N5}
                    isAgentActive=${v2}
                    activeChatAgents=${W0}
                    currentChatJid=${$}
                    connectionStatus=${G}
                    activeModel=${a_}
                    modelUsage=${k_}
                    thinkingLevel=${o_}
                    supportsThinking=${h_}
                    contextUsage=${j0}
                    notificationsEnabled=${b0}
                    notificationPermission=${I$}
                    onToggleNotifications=${H0}
                    onModelChange=${p_}
                    onModelStateChange=${c1}
                />
                <${e8}
                    request=${N_}
                    onRespond=${()=>{t(null),z0.current=null}}
                />
            </div>
        </div>
    `}function wZ(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return U`<${AZ} locationParams=${_} />`}e3(U`<${wZ} />`,document.getElementById("app"));

//# debugId=D9109FE4E17FD13864756E2164756E21
//# sourceMappingURL=app.bundle.js.map
