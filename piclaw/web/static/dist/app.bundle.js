var l7=Object.defineProperty;var n7=(_)=>_;function d7(_,$){this[_]=n7.bind(null,$)}var s7=(_,$)=>{for(var j in $)l7(_,j,{get:$[j],enumerable:!0,configurable:!0,set:d7.bind($,j)})};var o7=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var y2,h_,n1,r7,k$,x1,d1,s1,o1,G4,N4,K4,a7,D2={},E2=[],t7=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,A2=Array.isArray;function U$(_,$){for(var j in $)_[j]=$[j];return _}function W4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function r1(_,$,j){var Z,N,K,z={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?y2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return F2(_,z,Z,N,null)}function F2(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++n1:N,__i:-1,__u:0};return N==null&&h_.vnode!=null&&h_.vnode(K),K}function w2(_){return _.children}function H2(_,$){this.props=_,this.context=$}function g$(_,$){if($==null)return _.__?g$(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?g$(_):null}function e7(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=U$({},$);K.__v=$.__v+1,h_.vnode&&h_.vnode(K),X4(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?g$($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,_3(Z,K,N),$.__e=$.__=null,K.__e!=j&&a1(K)}}function a1(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),a1(_)}function T1(_){(!_.__d&&(_.__d=!0)&&k$.push(_)&&!k2.__r++||x1!=h_.debounceRendering)&&((x1=h_.debounceRendering)||d1)(k2)}function k2(){try{for(var _,$=1;k$.length;)k$.length>$&&k$.sort(s1),_=k$.shift(),$=k$.length,e7(_)}finally{k$.length=k2.__r=0}}function t1(_,$,j,Z,N,K,z,G,O,W,L){var q,H,A,x,T,v,I,Q=Z&&Z.__k||E2,w=$.length;for(O=_8(j,$,Q,O,w),q=0;q<w;q++)(A=j.__k[q])!=null&&(H=A.__i!=-1&&Q[A.__i]||D2,A.__i=q,v=X4(_,A,H,N,K,z,G,O,W,L),x=A.__e,A.ref&&H.ref!=A.ref&&(H.ref&&O4(H.ref,null,A),L.push(A.ref,A.__c||x,A)),T==null&&x!=null&&(T=x),(I=!!(4&A.__u))||H.__k===A.__k?O=e1(A,O,_,I):typeof A.type=="function"&&v!==void 0?O=v:x&&(O=x.nextSibling),A.__u&=-7);return j.__e=T,O}function _8(_,$,j,Z,N){var K,z,G,O,W,L=j.length,q=L,H=0;for(_.__k=Array(N),K=0;K<N;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=F2(null,z,null,null,null):A2(z)?z=_.__k[K]=F2(w2,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=F2(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,O=K+H,z.__=_,z.__b=_.__b+1,G=null,(W=z.__i=$8(z,j,O,q))!=-1&&(q--,(G=j[W])&&(G.__u|=2)),G==null||G.__v==null?(W==-1&&(N>L?H--:N<L&&H++),typeof z.type!="function"&&(z.__u|=4)):W!=O&&(W==O-1?H--:W==O+1?H++:(W>O?H--:H++,z.__u|=4))):_.__k[K]=null;if(q)for(K=0;K<L;K++)(G=j[K])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=g$(G)),j3(G,G));return Z}function e1(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=e1(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=g$(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function $8(_,$,j,Z){var N,K,z,G=_.key,O=_.type,W=$[j],L=W!=null&&(2&W.__u)==0;if(W===null&&G==null||L&&G==W.key&&O==W.type)return j;if(Z>(L?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((W=$[z=N>=0?N--:K++])!=null&&(2&W.__u)==0&&G==W.key&&O==W.type)return z}return-1}function f1(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||t7.test($)?j:j+"px"}function Q2(_,$,j,Z,N){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||f1(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||f1(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(o1,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=G4,_.addEventListener($,K?K4:N4,K)):_.removeEventListener($,K?K4:N4,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function R1(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=G4++;else if($.t<j.u)return;return j(h_.event?h_.event($):$)}}}function X4(_,$,j,Z,N,K,z,G,O,W){var L,q,H,A,x,T,v,I,Q,w,C,p,a,t,n,N_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(O=!!(32&j.__u),K=[G=$.__e=j.__e]),(L=h_.__b)&&L($);_:if(typeof N_=="function")try{if(I=$.props,Q=N_.prototype&&N_.prototype.render,w=(L=N_.contextType)&&Z[L.__c],C=L?w?w.props.value:L.__:Z,j.__c?v=(q=$.__c=j.__c).__=q.__E:(Q?$.__c=q=new N_(I,C):($.__c=q=new H2(I,C),q.constructor=N_,q.render=Z8),w&&w.sub(q),q.state||(q.state={}),q.__n=Z,H=q.__d=!0,q.__h=[],q._sb=[]),Q&&q.__s==null&&(q.__s=q.state),Q&&N_.getDerivedStateFromProps!=null&&(q.__s==q.state&&(q.__s=U$({},q.__s)),U$(q.__s,N_.getDerivedStateFromProps(I,q.__s))),A=q.props,x=q.state,q.__v=$,H)Q&&N_.getDerivedStateFromProps==null&&q.componentWillMount!=null&&q.componentWillMount(),Q&&q.componentDidMount!=null&&q.__h.push(q.componentDidMount);else{if(Q&&N_.getDerivedStateFromProps==null&&I!==A&&q.componentWillReceiveProps!=null&&q.componentWillReceiveProps(I,C),$.__v==j.__v||!q.__e&&q.shouldComponentUpdate!=null&&q.shouldComponentUpdate(I,q.__s,C)===!1){$.__v!=j.__v&&(q.props=I,q.state=q.__s,q.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),E2.push.apply(q.__h,q._sb),q._sb=[],q.__h.length&&z.push(q);break _}q.componentWillUpdate!=null&&q.componentWillUpdate(I,q.__s,C),Q&&q.componentDidUpdate!=null&&q.__h.push(function(){q.componentDidUpdate(A,x,T)})}if(q.context=C,q.props=I,q.__P=_,q.__e=!1,p=h_.__r,a=0,Q)q.state=q.__s,q.__d=!1,p&&p($),L=q.render(q.props,q.state,q.context),E2.push.apply(q.__h,q._sb),q._sb=[];else do q.__d=!1,p&&p($),L=q.render(q.props,q.state,q.context),q.state=q.__s;while(q.__d&&++a<25);q.state=q.__s,q.getChildContext!=null&&(Z=U$(U$({},Z),q.getChildContext())),Q&&!H&&q.getSnapshotBeforeUpdate!=null&&(T=q.getSnapshotBeforeUpdate(A,x)),t=L!=null&&L.type===w2&&L.key==null?$3(L.props.children):L,G=t1(_,A2(t)?t:[t],$,j,Z,N,K,z,G,O,W),q.base=$.__e,$.__u&=-161,q.__h.length&&z.push(q),v&&(q.__E=q.__=null)}catch(i){if($.__v=null,O||K!=null)if(i.then){for($.__u|=O?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;K[K.indexOf(G)]=null,$.__e=G}else{for(n=K.length;n--;)W4(K[n]);z4($)}else $.__e=j.__e,$.__k=j.__k,i.then||z4($);h_.__e(i,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=j8(j.__e,$,j,Z,N,K,z,O,W);return(L=h_.diffed)&&L($),128&$.__u?void 0:G}function z4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(z4))}function _3(_,$,j){for(var Z=0;Z<j.length;Z++)O4(j[Z],j[++Z],j[++Z]);h_.__c&&h_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){h_.__e(K,N.__v)}})}function $3(_){return typeof _!="object"||_==null||_.__b>0?_:A2(_)?_.map($3):U$({},_)}function j8(_,$,j,Z,N,K,z,G,O){var W,L,q,H,A,x,T,v=j.props||D2,I=$.props,Q=$.type;if(Q=="svg"?N="http://www.w3.org/2000/svg":Q=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(W=0;W<K.length;W++)if((A=K[W])&&"setAttribute"in A==!!Q&&(Q?A.localName==Q:A.nodeType==3)){_=A,K[W]=null;break}}if(_==null){if(Q==null)return document.createTextNode(I);_=document.createElementNS(N,Q,I.is&&I),G&&(h_.__m&&h_.__m($,K),G=!1),K=null}if(Q==null)v===I||G&&_.data==I||(_.data=I);else{if(K=K&&y2.call(_.childNodes),!G&&K!=null)for(v={},W=0;W<_.attributes.length;W++)v[(A=_.attributes[W]).name]=A.value;for(W in v)A=v[W],W=="dangerouslySetInnerHTML"?q=A:W=="children"||(W in I)||W=="value"&&("defaultValue"in I)||W=="checked"&&("defaultChecked"in I)||Q2(_,W,null,A,N);for(W in I)A=I[W],W=="children"?H=A:W=="dangerouslySetInnerHTML"?L=A:W=="value"?x=A:W=="checked"?T=A:G&&typeof A!="function"||v[W]===A||Q2(_,W,A,v[W],N);if(L)G||q&&(L.__html==q.__html||L.__html==_.innerHTML)||(_.innerHTML=L.__html),$.__k=[];else if(q&&(_.innerHTML=""),t1($.type=="template"?_.content:_,A2(H)?H:[H],$,j,Z,Q=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,z,K?K[0]:j.__k&&g$(j,0),G,O),K!=null)for(W=K.length;W--;)W4(K[W]);G||(W="value",Q=="progress"&&x==null?_.removeAttribute("value"):x!=null&&(x!==_[W]||Q=="progress"&&!x||Q=="option"&&x!=v[W])&&Q2(_,W,x,v[W],N),W="checked",T!=null&&T!=_[W]&&Q2(_,W,T,v[W],N))}return _}function O4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){h_.__e(N,j)}}function j3(_,$,j){var Z,N;if(h_.unmount&&h_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||O4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){h_.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&j3(Z[N],$,j||typeof _.type!="function");j||W4(_.__e),_.__c=_.__=_.__e=void 0}function Z8(_,$,j){return this.constructor(_,j)}function Z3(_,$,j){var Z,N,K,z;$==document&&($=document.documentElement),h_.__&&h_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],X4($,_=(!Z&&j||$).__k=r1(w2,null,[_]),N||D2,D2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?y2.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,z),_3(K,_,z)}y2=E2.slice,h_={__e:function(_,$,j,Z){for(var N,K,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(G){_=G}throw _}},n1=0,r7=function(_){return _!=null&&_.constructor===void 0},H2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=U$({},this.state),typeof _=="function"&&(_=_(U$({},j),this.props)),_&&U$(j,_),_!=null&&this.__v&&($&&this._sb.push($),T1(this))},H2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),T1(this))},H2.prototype.render=w2,k$=[],d1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s1=function(_,$){return _.__v.__b-$.__v.__b},k2.__r=0,o1=/(PointerCapture)$|Capture$/i,G4=0,N4=R1(!1),K4=R1(!0),a7=0;var e$,Y0,Z4,u1,_2=0,N3=[],z0=h_,v1=z0.__b,m1=z0.__r,g1=z0.diffed,p1=z0.__c,c1=z0.unmount,h1=z0.__;function q4(_,$){z0.__h&&z0.__h(Y0,_,_2||$),_2=0;var j=Y0.__H||(Y0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function f(_){return _2=1,N8(z3,_)}function N8(_,$,j){var Z=q4(e$++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):z3(void 0,$),function(G){var O=Z.__N?Z.__N[0]:Z.__[0],W=Z.t(O,G);O!==W&&(Z.__N=[W,Z.__[1]],Z.__c.setState({}))}],Z.__c=Y0,!Y0.__f)){var N=function(G,O,W){if(!Z.__c.__H)return!0;var L=Z.__c.__H.__.filter(function(H){return H.__c});if(L.every(function(H){return!H.__N}))return!K||K.call(this,G,O,W);var q=Z.__c.props!==G;return L.some(function(H){if(H.__N){var A=H.__[0];H.__=H.__N,H.__N=void 0,A!==H.__[0]&&(q=!0)}}),K&&K.call(this,G,O,W)||q};Y0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=Y0;Y0.componentWillUpdate=function(G,O,W){if(this.__e){var L=K;K=void 0,N(G,O,W),K=L}z&&z.call(this,G,O,W)},Y0.shouldComponentUpdate=N}return Z.__N||Z.__}function u(_,$){var j=q4(e$++,3);!z0.__s&&K3(j.__H,$)&&(j.__=_,j.u=$,Y0.__H.__h.push(j))}function D(_){return _2=5,i_(function(){return{current:_}},[])}function i_(_,$){var j=q4(e$++,7);return K3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return _2=8,i_(function(){return _},$)}function K8(){for(var _;_=N3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(J2),$.__h.some(Y4),$.__h=[]}catch(j){$.__h=[],z0.__e(j,_.__v)}}}z0.__b=function(_){Y0=null,v1&&v1(_)},z0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),h1&&h1(_,$)},z0.__r=function(_){m1&&m1(_),e$=0;var $=(Y0=_.__c).__H;$&&(Z4===Y0?($.__h=[],Y0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(J2),$.__h.some(Y4),$.__h=[],e$=0)),Z4=Y0},z0.diffed=function(_){g1&&g1(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(N3.push($)!==1&&u1===z0.requestAnimationFrame||((u1=z0.requestAnimationFrame)||z8)(K8)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),Z4=Y0=null},z0.__c=function(_,$){$.some(function(j){try{j.__h.some(J2),j.__h=j.__h.filter(function(Z){return!Z.__||Y4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],z0.__e(Z,j.__v)}}),p1&&p1(_,$)},z0.unmount=function(_){c1&&c1(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{J2(Z)}catch(N){$=N}}),j.__H=void 0,$&&z0.__e($,j.__v))};var i1=typeof requestAnimationFrame=="function";function z8(_){var $,j=function(){clearTimeout(Z),i1&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);i1&&($=requestAnimationFrame(j))}function J2(_){var $=Y0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),Y0=$}function Y4(_){var $=Y0;_.__c=_.__(),Y0=$}function K3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function z3(_,$){return typeof $=="function"?$(_):$}var Y3=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],G=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?Z[0]=G:z===4?Z[1]=Object.assign(Z[1]||{},G):z===5?(Z[1]=Z[1]||{})[$[++K]]=G:z===6?Z[1][$[++K]]+=G+"":z?(N=_.apply(G,Y3(_,G,j,["",null])),Z.push(N),G[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(G)}return Z},l1=new Map;function Y8(_){var $=l1.get(this);return $||($=new Map,l1.set(this,$)),($=Y3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,z="",G="",O=[0],W=function(H){K===1&&(H||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?O.push(0,H,z):K===3&&(H||z)?(O.push(3,H,z),K=2):K===2&&z==="..."&&H?O.push(4,H,0):K===2&&z&&!H?O.push(5,0,!0,z):K>=5&&((z||!H&&K===5)&&(O.push(K,0,z,N),K=6),H&&(O.push(K,H,0,N),K=6)),z=""},L=0;L<j.length;L++){L&&(K===1&&W(),W(L));for(var q=0;q<j[L].length;q++)Z=j[L][q],K===1?Z==="<"?(W(),O=[O],K=3):z+=Z:K===4?z==="--"&&Z===">"?(K=1,z=""):z=Z+z[0]:G?Z===G?G="":z+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(W(),K=1):K&&(Z==="="?(K=5,N=z,z=""):Z==="/"&&(K<5||j[L][q+1]===">")?(W(),K===3&&(O=O[0]),K=O,(O=O[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(W(),K=2):z+=Z),K===3&&z==="!--"&&(K=4,O=O[0])}return W(),O}(_)),$),arguments,[])).length>1?$:$[0]}var B=Y8.bind(r1);var s0={};s7(s0,{uploadWorkspaceFile:()=>C2,uploadMedia:()=>J4,updateWorkspaceFile:()=>D8,submitAdaptiveCardAction:()=>D4,streamSidePrompt:()=>H8,steerAgentQueueItem:()=>F8,setWorkspaceVisibility:()=>N2,setAgentThoughtVisibility:()=>y4,sendPeerAgentMessage:()=>L8,sendAgentMessage:()=>p$,searchPosts:()=>L4,respondToAgentRequest:()=>P2,renameWorkspaceFile:()=>I4,renameChatBranch:()=>q8,removeAgentQueueItem:()=>Q8,pruneChatBranch:()=>V8,moveWorkspaceEntry:()=>S4,getWorkspaceTree:()=>Z2,getWorkspaceRawUrl:()=>b2,getWorkspaceFile:()=>P4,getWorkspaceDownloadUrl:()=>T4,getWorkspaceBranch:()=>J8,getTimeline:()=>$2,getThumbnailUrl:()=>A4,getThread:()=>B4,getPostsByHashtag:()=>V4,getMediaUrl:()=>Z$,getMediaText:()=>w4,getMediaInfo:()=>c$,getMediaBlob:()=>M4,getChatBranches:()=>O8,getAgents:()=>F4,getAgentThought:()=>k4,getAgentStatus:()=>H4,getAgentQueueState:()=>U8,getAgentModels:()=>j2,getAgentContext:()=>B8,getActiveChatAgents:()=>Q4,forkChatBranch:()=>M2,deleteWorkspaceFile:()=>x4,deletePost:()=>U4,createWorkspaceFile:()=>b4,createReply:()=>X8,createPost:()=>W8,attachWorkspaceFile:()=>C4,addToWhitelist:()=>E4,SSEClient:()=>I2});async function x_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function G3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function G8(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:G}=await j.read();if(G)break;N+=Z.decode(z,{stream:!0});let O=N.split(`

`);N=O.pop()||"";for(let W of O){let L=G3(W);if(L)$(L.event,L.data)}}N+=Z.decode();let K=G3(N);if(K)$(K.event,K.data)}async function $2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return x_(Z)}async function V4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return x_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function L4(_,$=50,j=0,Z=null,N="current",K=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=N?`&scope=${encodeURIComponent(N)}`:"",O=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return x_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${G}${O}`)}async function B4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return x_(`/thread/${_}${j}`)}async function W8(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return x_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function X8(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return x_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function U4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return x_(N,{method:"DELETE"})}async function p$(_,$,j=null,Z=[],N=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return x_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function Q4(){return x_("/agent/active-chats")}async function O8(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return x_(`/agent/branches${$}`)}async function M2(_,$={}){return x_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function q8(_,$={}){return x_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function V8(_){return x_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function L8(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return x_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function F4(){return x_("/agent/roster")}async function H4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return x_(`/agent/status${$}`)}async function B8(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return x_(`/agent/context${$}`)}async function U8(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return x_(`/agent/queue-state${$}`)}async function Q8(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function F8(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function j2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return x_(`/agent/models${$}`)}async function J4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function P2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function D4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function H8(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await G8(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")Z=z;else if(K==="side_prompt_error")N=z}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function E4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function k4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return x_(j)}async function y4(_,$,j){return x_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function Z$(_){return`/media/${_}`}function A4(_){return`/media/${_}/thumbnail`}async function c$(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function w4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function M4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function Z2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return x_(Z)}async function J8(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return x_($)}async function P4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return x_(N)}async function D8(_,$){return x_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function C4(_){return x_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function C2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",G=await fetch(""+z,{method:"POST",body:Z});if(!G.ok){let O=await G.json().catch(()=>({error:"Upload failed"})),W=Error(O.error||`HTTP ${G.status}`);throw W.status=G.status,W.code=O.code,W}return G.json()}async function b4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function I4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function S4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function x4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return x_($,{method:"DELETE"})}async function N2(_,$=!1){return x_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function b2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function T4(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class I2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function o0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function r_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function h$(_,$=!1){let j=o0(_);if(j===null)return $;return j==="true"}function i$(_,$=null){let j=o0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function S2(_){return String(_||"").trim().toLowerCase()}function f4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return S2($[1]||"")}function W3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=S2(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function X3(_,$,j={}){let Z=f4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return W3(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return S2(K?.agent_name).startsWith(Z)})}function R4(_){let $=S2(_);return $?`@${$} `:""}function O3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return W3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function q3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function Q$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:z="file"}){let G=`${_}-file-pill`,O=`${_}-file-name`,W=`${_}-file-remove`,L=z==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${G} title=${j||$} onClick=${N}>
      ${L}
      <span class=${O}>${$}</span>
      ${Z&&B`
        <button
          class=${W}
          onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),Z()}}
          title=${K}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var E8=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function k8({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${V3(j)} / ${V3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,z=2*Math.PI*7,G=$/100*z,O=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${O}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function V3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function L3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:G,fileRefs:O=[],onRemoveFileRef:W,onClearFileRefs:L,messageRefs:q=[],onRemoveMessageRef:H,onClearMessageRefs:A,activeModel:x=null,modelUsage:T=null,thinkingLevel:v=null,supportsThinking:I=!1,contextUsage:Q=null,notificationsEnabled:w=!1,notificationPermission:C="default",onToggleNotifications:p,onModelChange:a,onModelStateChange:t,activeEditorPath:n=null,onAttachEditorFile:N_,onOpenFilePill:i,followupQueueItems:Q_=[],onInjectQueuedFollowup:B_,onRemoveQueuedFollowup:o,onSubmitIntercept:__,onMessageResponse:K_,onPopOutChat:j_,isAgentActive:G_=!1,activeChatAgents:O_=[],currentChatJid:D_="web:default"}){let[Z_,k_]=f(""),[w_,a_]=f(""),[y_,u_]=f([]),[b_,l_]=f(!1),[h,X_]=f([]),[V_,q_]=f(0),[E_,M_]=f(!1),[v_,F_]=f([]),[C_,S_]=f(0),[G0,n_]=f(!1),[_0,U0]=f(!1),[I_,$0]=f(!1),[Q0,E0]=f([]),[F0,W0]=f(!1),[k0,d_]=f(0),T_=D(null),C0=D(null),p_=D(null),s_=D(null),y0=D(null),U_=D(null),b=D(0),e=200,P_=(U)=>{let S=new Set,l=[];for(let z_ of U||[]){if(typeof z_!=="string")continue;let A_=z_.trim();if(!A_||S.has(A_))continue;S.add(A_),l.push(A_)}return l},m_=()=>{let U=o0("piclaw_compose_history");if(!U)return[];try{let S=JSON.parse(U);if(!Array.isArray(S))return[];return P_(S)}catch{return[]}},A0=(U)=>{r_("piclaw_compose_history",JSON.stringify(U))},a0=D(m_()),j0=D(-1),X0=D(""),q0=Z_.trim()||y_.length>0||O.length>0||q.length>0,t0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),b0=typeof window<"u"&&typeof Notification<"u",g0=typeof window<"u"?Boolean(window.isSecureContext):!1,d$=b0&&g0&&C!=="denied",A$=C==="granted"&&w,c0=A$?"Disable notifications":"Enable notifications",Z0=O3(O_,{currentChatJid:D_,limit:4}),K$=Z0.length>0,O0=!j&&q3({footerWidth:k0,visibleAgentCount:Z0.length,hasContextIndicator:Boolean(Q&&Q.percent!=null)}),N0=x||"",f_=I&&v?` (${v})`:"",R0=f_.trim()?`${v}`:"",I0=typeof T?.hint_short==="string"?T.hint_short.trim():"",z$=[R0||null,I0||null].filter(Boolean).join(" • "),J$=[N0?`Current model: ${N0}${f_}`:null,T?.plan?`Plan: ${T.plan}`:null,I0||null,T?.primary?.reset_description||null,T?.secondary?.reset_description||null].filter(Boolean),w$=_0?"Switching model…":J$.join(" • ")||`Current model: ${N0}${f_} (tap to open model picker)`,H0=(U)=>{if(!U||typeof U!=="object")return;let S=U.model??U.current;if(typeof t==="function")t({model:S??null,thinking_level:U.thinking_level??null,supports_thinking:U.supports_thinking,provider_usage:U.provider_usage??null});if(S&&typeof a==="function")a(S)},M$=(U)=>{let S=U||T_.current;if(!S)return;S.style.height="auto",S.style.height=`${S.scrollHeight}px`,S.style.overflowY="hidden"},s$=(U)=>{if(!U.startsWith("/")||U.includes(`
`)){M_(!1),X_([]);return}let S=U.toLowerCase().split(" ")[0];if(S.length<1){M_(!1),X_([]);return}let l=E8.filter((z_)=>z_.name.startsWith(S)||z_.name.replace(/-/g,"").startsWith(S.replace(/-/g,"")));if(l.length>0&&!(l.length===1&&l[0].name===S))n_(!1),F_([]),X_(l),q_(0),M_(!0);else M_(!1),X_([])},D$=(U)=>{let S=Z_,l=S.indexOf(" "),z_=l>=0?S.slice(l):"",A_=U.name+z_;k_(A_),M_(!1),X_([]),requestAnimationFrame(()=>{let o_=T_.current;if(!o_)return;let H_=A_.length;o_.selectionStart=H_,o_.selectionEnd=H_,o_.focus()})},u$=(U)=>{if(f4(U)==null){n_(!1),F_([]);return}let S=X3(O_,U,{currentChatJid:D_});if(S.length>0&&!(S.length===1&&R4(S[0].agent_name).trim().toLowerCase()===String(U||"").trim().toLowerCase()))M_(!1),X_([]),F_(S),S_(0),n_(!0);else n_(!1),F_([])},V$=(U)=>{let S=R4(U?.agent_name);if(!S)return;k_(S),n_(!1),F_([]),requestAnimationFrame(()=>{let l=T_.current;if(!l)return;let z_=S.length;l.selectionStart=z_,l.selectionEnd=z_,l.focus()})},t_=(U)=>{if(j)a_(U);else k_(U),s$(U),u$(U);requestAnimationFrame(()=>M$())},P$=(U)=>{let S=j?w_:Z_,l=S&&!S.endsWith(`
`)?`
`:"",z_=`${S}${l}${U}`.trimStart();t_(z_)},S0=(U)=>{let S=U?.command?.model_label;if(S)return S;let l=U?.command?.message;if(typeof l==="string"){let z_=l.match(/•\s+([^\n]+?)\s+\(current\)/);if(z_?.[1])return z_[1].trim()}return null},x0=async(U)=>{if(j||_0)return;U0(!0);try{let S=await p$("default",U,null,[],null,D_),l=S0(S);H0({model:l??x??null,thinking_level:S?.command?.thinking_level,supports_thinking:S?.command?.supports_thinking});try{let z_=await j2(D_);if(z_)H0(z_)}catch{}return _?.(),!0}catch(S){return console.error("Failed to switch model:",S),alert("Failed to switch model: "+S.message),!1}finally{U0(!1)}},Y$=async()=>{await x0("/cycle-model")},q2=async(U)=>{if(!U||_0)return;if(await x0(`/model ${U}`))$0(!1)},L0=(U)=>{U.preventDefault(),U.stopPropagation(),$0((S)=>!S)},C$=(U)=>{if(U==="queue"||U==="steer"||U==="auto")return U;return G_?"queue":null},G$=async(U,S,l={})=>{let{includeMedia:z_=!0,includeFileRefs:A_=!0,includeMessageRefs:o_=!0,clearAfterSubmit:H_=!0,recordHistory:K0=!0}=l||{},i0=typeof U==="string"?U:U&&typeof U?.target?.value==="string"?U.target.value:Z_,E$=typeof i0==="string"?i0:"";if(!E$.trim()&&(z_?y_.length===0:!0)&&(A_?O.length===0:!0)&&(o_?q.length===0:!0))return;M_(!1),X_([]),n_(!1),F_([]);let u0=z_?[...y_]:[],X$=A_?[...O]:[],O$=o_?[...q]:[],l0=E$.trim();if(K0&&l0){let q$=a0.current,J0=P_(q$.filter((x$)=>x$!==l0));if(J0.push(l0),J0.length>200)J0.splice(0,J0.length-200);a0.current=J0,A0(J0),j0.current=-1,X0.current=""}if(H_)k_(""),u_([]),L?.(),A?.();(async()=>{try{if(await __?.({content:l0,submitMode:S,fileRefs:X$,messageRefs:O$,mediaFiles:u0})){_?.();return}let J0=[];for(let R of u0){let s=await J4(R);J0.push(s.id)}let x$=X$.length?`Files:
${X$.map((R)=>`- ${R}`).join(`
`)}`:"",V=O$.length?`Referenced messages:
${O$.map((R)=>`- message:${R}`).join(`
`)}`:"",F=J0.length?`Images:
${J0.map((R,s)=>{let d=u0[s]?.name||`image-${s+1}`;return`- attachment:${R} (${d})`}).join(`
`)}`:"",k=[l0,x$,V,F].filter(Boolean).join(`

`),E=await p$("default",k,null,J0,C$(S),D_);if(K_?.(E),E?.command){H0({model:E.command.model_label??x??null,thinking_level:E.command.thinking_level,supports_thinking:E.command.supports_thinking});try{let R=await j2(D_);if(R)H0(R)}catch{}}_?.()}catch(q$){console.error("Failed to post:",q$)}})()},W$=(U)=>{B_?.(U)},b$=(U)=>{if(U.isComposing)return;if(j&&U.key==="Escape"){U.preventDefault(),a_(""),G?.();return}if(G0&&v_.length>0){let S=T_.current?.value??(j?w_:Z_);if(!String(S||"").match(/^@([a-zA-Z0-9_-]*)$/))n_(!1),F_([]);else{if(U.key==="ArrowDown"){U.preventDefault(),S_((l)=>(l+1)%v_.length);return}if(U.key==="ArrowUp"){U.preventDefault(),S_((l)=>(l-1+v_.length)%v_.length);return}if(U.key==="Tab"||U.key==="Enter"){U.preventDefault(),V$(v_[C_]);return}if(U.key==="Escape"){U.preventDefault(),n_(!1),F_([]);return}}}if(E_&&h.length>0){let S=T_.current?.value??(j?w_:Z_);if(!String(S||"").startsWith("/"))M_(!1),X_([]);else{if(U.key==="ArrowDown"){U.preventDefault(),q_((l)=>(l+1)%h.length);return}if(U.key==="ArrowUp"){U.preventDefault(),q_((l)=>(l-1+h.length)%h.length);return}if(U.key==="Tab"){U.preventDefault(),D$(h[V_]);return}if(U.key==="Enter"&&!U.shiftKey){if(!(T_.current?.value??(j?w_:Z_)).includes(" ")){U.preventDefault();let A_=h[V_];M_(!1),X_([]),G$(A_.name);return}}if(U.key==="Escape"){U.preventDefault(),M_(!1),X_([]);return}}}if(!j&&(U.key==="ArrowUp"||U.key==="ArrowDown")&&!U.metaKey&&!U.ctrlKey&&!U.altKey&&!U.shiftKey){let S=T_.current;if(!S)return;let l=S.value||"",z_=S.selectionStart===0&&S.selectionEnd===0,A_=S.selectionStart===l.length&&S.selectionEnd===l.length;if(U.key==="ArrowUp"&&z_||U.key==="ArrowDown"&&A_){let o_=a0.current;if(!o_.length)return;U.preventDefault();let H_=j0.current;if(U.key==="ArrowUp"){if(H_===-1)X0.current=l,H_=o_.length-1;else if(H_>0)H_-=1;j0.current=H_,t_(o_[H_]||"")}else{if(H_===-1)return;if(H_<o_.length-1)H_+=1,j0.current=H_,t_(o_[H_]||"");else j0.current=-1,t_(X0.current||""),X0.current=""}requestAnimationFrame(()=>{let K0=T_.current;if(!K0)return;let i0=K0.value.length;K0.selectionStart=i0,K0.selectionEnd=i0});return}}if(U.key==="Enter"&&!U.shiftKey&&(U.ctrlKey||U.metaKey)){U.preventDefault();let S=T_.current?.value??(j?w_:Z_);if(j){if(S.trim())N?.(S.trim(),Z)}else G$(S,"steer");return}if(U.key==="Enter"&&!U.shiftKey){U.preventDefault();let S=T_.current?.value??(j?w_:Z_);if(j){if(S.trim())N?.(S.trim(),Z)}else G$(S)}},h0=(U)=>{let S=Array.from(U||[]).filter((l)=>l&&l.type&&l.type.startsWith("image/"));if(!S.length)return;u_((l)=>[...l,...S])},e0=(U)=>{h0(U.target.files),U.target.value=""},T0=(U)=>{if(j)return;U.preventDefault(),U.stopPropagation(),b.current+=1,l_(!0)},_$=(U)=>{if(j)return;if(U.preventDefault(),U.stopPropagation(),b.current=Math.max(0,b.current-1),b.current===0)l_(!1)},I$=(U)=>{if(j)return;if(U.preventDefault(),U.stopPropagation(),U.dataTransfer)U.dataTransfer.dropEffect="copy";l_(!0)},S$=(U)=>{if(j)return;U.preventDefault(),U.stopPropagation(),b.current=0,l_(!1),h0(U.dataTransfer?.files||[])},$$=(U)=>{if(j)return;let S=U.clipboardData?.items;if(!S||!S.length)return;let l=[];for(let z_ of S){if(z_.kind!=="file")continue;let A_=z_.getAsFile?.();if(A_)l.push(A_)}if(l.length>0)U.preventDefault(),h0(l)},L$=(U)=>{u_((S)=>S.filter((l,z_)=>z_!==U))},o$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((U)=>{let{latitude:S,longitude:l,accuracy:z_}=U.coords,A_=`${S.toFixed(5)}, ${l.toFixed(5)}`,o_=Number.isFinite(z_)?` ±${Math.round(z_)}m`:"",H_=`https://maps.google.com/?q=${S},${l}`,K0=`Location: ${A_}${o_} ${H_}`;P$(K0)},(U)=>{let S=U?.message||"Unable to retrieve location.";alert(`Location error: ${S}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!I_)return;W0(!0),j2(D_).then((U)=>{let S=Array.isArray(U?.models)?U.models.filter((l)=>typeof l==="string"&&l.trim().length>0):[];E0(S),H0(U)}).catch((U)=>{console.warn("Failed to load model list:",U),E0([])}).finally(()=>{W0(!1)})},[I_,x]),u(()=>{if(j)$0(!1),M_(!1),X_([]),n_(!1),F_([])},[j]),u(()=>{if(!I_)return;let U=(S)=>{let l=s_.current,z_=y0.current,A_=S.target;if(l&&l.contains(A_))return;if(z_&&z_.contains(A_))return;$0(!1)};return document.addEventListener("pointerdown",U),()=>document.removeEventListener("pointerdown",U)},[I_]),u(()=>{let U=()=>{let o_=U_.current?.clientWidth||0;d_((H_)=>H_===o_?H_:o_)};U();let S=U_.current,l=0,z_=()=>{if(l)cancelAnimationFrame(l);l=requestAnimationFrame(()=>{l=0,U()})},A_=null;if(S&&typeof ResizeObserver<"u")A_=new ResizeObserver(()=>z_()),A_.observe(S);if(typeof window<"u")window.addEventListener("resize",z_);return()=>{if(l)cancelAnimationFrame(l);if(A_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",z_)}},[j,x,Z0.length,Q?.percent]);let w0=(U)=>{let S=U.target.value;M$(U.target),t_(S)};return u(()=>{requestAnimationFrame(()=>M$())},[Z_,w_,j]),u(()=>{if(j)return;u$(Z_)},[O_,D_,Z_,j]),B`
        <div class="compose-box">
            ${!j&&Q_.length>0&&B`
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
                                    onClick=${()=>W$(U)}
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
                                    onClick=${()=>o?.(U)}
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
                class=${`compose-input-wrapper${b_?" drag-active":""}`}
                onDragEnter=${T0}
                onDragOver=${I$}
                onDragLeave=${_$}
                onDrop=${S$}
            >
                <div class="compose-input-main">
                    ${(O.length>0||y_.length>0||q.length>0)&&B`
                        <div class="compose-file-refs">
                            ${q.map((U)=>{return B`
                                    <${Q$}
                                        key=${"msg-"+U}
                                        prefix="compose"
                                        label=${"msg:"+U}
                                        title=${"Message reference: "+U}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(U)}
                                    />
                                `})}
                            ${O.map((U)=>{let S=U.split("/").pop()||U;return B`
                                    <${Q$}
                                        prefix="compose"
                                        label=${S}
                                        title=${U}
                                        onClick=${()=>i?.(U)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>W?.(U)}
                                    />
                                `})}
                            ${y_.map((U,S)=>{let l=U?.name||`image-${S+1}`;return B`
                                    <${Q$}
                                        key=${l+S}
                                        prefix="compose"
                                        label=${l}
                                        title=${l}
                                        removeTitle="Remove image"
                                        onRemove=${()=>L$(S)}
                                    />
                                `})}
                        </div>
                    `}
                    ${!j&&typeof j_==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>j_?.()}
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
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?w_:Z_}
                        onInput=${w0}
                        onKeyDown=${b$}
                        onPaste=${$$}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${G0&&v_.length>0&&B`
                        <div class="slash-autocomplete" ref=${p_}>
                            ${v_.map((U,S)=>B`
                                <div
                                    key=${U.chat_jid||U.agent_name}
                                    class=${`slash-item${S===C_?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),V$(U)}}
                                    onMouseEnter=${()=>S_(S)}
                                >
                                    <span class="slash-name">@${U.agent_name}</span>
                                    <span class="slash-desc">${U.display_name||U.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${E_&&h.length>0&&B`
                        <div class="slash-autocomplete" ref=${C0}>
                            ${h.map((U,S)=>B`
                                <div
                                    key=${U.name}
                                    class=${`slash-item${S===V_?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),D$(U)}}
                                    onMouseEnter=${()=>q_(S)}
                                >
                                    <span class="slash-name">${U.name}</span>
                                    <span class="slash-desc">${U.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${I_&&!j&&B`
                        <div class="compose-model-popup" ref=${s_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${F0&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!F0&&Q0.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!F0&&Q0.map((U)=>B`
                                    <button
                                        key=${U}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${x===U?" active":""}`}
                                        onClick=${()=>{q2(U)}}
                                        disabled=${_0}
                                    >
                                        ${U}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{Y$()}}
                                    disabled=${_0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${U_}>
                    ${!j&&x&&B`
                    <div class="compose-meta-row">
                        ${!j&&x&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${y0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${w$}
                                    aria-label="Open model picker"
                                    onClick=${L0}
                                    disabled=${_0}
                                >
                                    ${_0?"Switching…":N0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!_0&&z$&&B`
                                        <span class="compose-model-usage-hint" title=${w$}>
                                            ${z$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${O0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${Z0.map((U)=>B`
                                <button
                                    key=${U.chat_jid||U.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${U.is_active?" active":""}`}
                                    onClick=${()=>V$(U)}
                                    title=${`${U.display_name||U.chat_jid||"Active agent"} — insert @${U.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${U.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&Q&&Q.percent!=null&&B`
                        <${k8} usage=${Q} />
                    `}
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
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
                        onClick=${j?G:z}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?B`
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
                    ${t0&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${o$}
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
                    ${d$&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${A$?" active":""}`}
                            onClick=${p}
                            title=${c0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${n&&N_&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${N_}
                                title=${`Attach open file: ${n}`}
                                type="button"
                                disabled=${O.includes(n)}
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
                            onClick=${()=>{G$()}}
                            disabled=${!q0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var U3="piclaw_theme",m4="piclaw_tint",f2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},y8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},B3={default:{label:"Default",mode:"auto",light:f2,dark:y8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},A8=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],R2={theme:"default",tint:null},Q3="light",u4=!1;function F3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function l$(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function w8(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),z=parseInt(N[2],10),G=parseInt(N[3],10);if(![K,z,G].every((W)=>Number.isFinite(W)))return null;let O=`#${[K,z,G].map((W)=>W.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:G,hex:O}}function H3(_){return l$(_)||w8(_)}function K2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function v4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function M8(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),K=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*K+0.0722*z}function P8(_){return M8(_)>0.4?"#000000":"#ffffff"}function J3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function g4(_){return B3[_]||B3.default}function C8(_){return _.mode==="auto"?J3():_.mode}function b8(_,$){let j=g4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||f2}function I8(_,$,j){let Z=H3($);if(!Z)return _;let N=l$(_.bgPrimary),K=l$(_.bgSecondary),z=l$(_.bgHover),G=l$(_.borderColor);if(!N||!K||!z||!G)return _;let W=l$(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:K2(N,Z,0.08),bgSecondary:K2(K,Z,0.12),bgHover:K2(z,Z,0.16),borderColor:K2(G,Z,0.08),accent:Z.hex,accentHover:W?K2(Z,W,0.18):Z.hex}}function S8(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=H3(Z),K=N?v4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?v4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=N?v4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",O=N?P8(N):$==="dark"?"#000000":"#ffffff",W={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":G,"--accent-contrast-text":O,"--danger-color":_.danger||f2.danger,"--success-color":_.success||f2.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(W).forEach(([L,q])=>{if(q)j.style.setProperty(L,q)})}function x8(){if(typeof document>"u")return;let _=document.documentElement;A8.forEach(($)=>_.style.removeProperty($))}function x2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function T8(_,$){if(typeof document>"u")return;let j=x2("theme-color");if(j&&_)j.setAttribute("content",_);let Z=x2("msapplication-TileColor");if(Z&&_)Z.setAttribute("content",_);let N=x2("msapplication-navbutton-color");if(N&&_)N.setAttribute("content",_);let K=x2("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function f8(){if(typeof window>"u")return;let _={...R2,mode:Q3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function p4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=F3(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=g4(j),K=C8(N),z=b8(j,K);R2={theme:j,tint:Z},Q3=K;let G=document.documentElement;G.dataset.theme=K,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=K;let O=z;if(j==="default"&&Z)O=I8(z,Z,K);if(j==="default"&&!Z)x8();else S8(O,K);if(T8(O.bgPrimary,K),f8(),$.persist!==!1)if(r_(U3,j),Z)r_(m4,Z);else r_(m4,"")}function T2(){if(g4(R2.theme).mode!=="auto")return;p4(R2,{persist:!1})}function D3(){if(typeof window>"u")return()=>{};let _=F3(o0(U3)||"default"),$=o0(m4),j=$?$.trim():null;if(p4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!u4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",T2);else if(Z.addListener)Z.addListener(T2);return u4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",T2);else if(Z.removeListener)Z.removeListener(T2);u4=!1}}return()=>{}}function E3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;p4({theme:j||"default",tint:Z},{persist:!0})}function k3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return J3()}var u2=/#(\w+)/g,R8=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),u8=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),v8=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),m8={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},g8=new Set(["http:","https:","mailto:",""]);function y3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function T$(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!g8.has(Z.protocol))return null;return Z.href}catch{return null}}function A3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let z of Z){let G=z.tagName.toLowerCase();if(!u8.has(G)){let W=z.parentNode;if(!W)continue;while(z.firstChild)W.insertBefore(z.firstChild,z);W.removeChild(z);continue}let O=m8[G]||new Set;for(let W of Array.from(z.attributes)){let L=W.name.toLowerCase(),q=W.value;if(L.startsWith("on")){z.removeAttribute(W.name);continue}if(L.startsWith("data-")||L.startsWith("aria-"))continue;if(O.has(L)||v8.has(L)){if(L==="href"){let H=T$(q);if(!H)z.removeAttribute(W.name);else if(z.setAttribute(W.name,H),G==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(L==="src"){let H=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(q):q,A=T$(H,{allowDataImage:G==="img"});if(!A)z.removeAttribute(W.name);else z.setAttribute(W.name,A)}continue}z.removeAttribute(W.name)}}return j.body.innerHTML}function w3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function v2(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=w3(j);if(N===j)break;j=N}return j}function p8(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,z=[];for(let G of j){if(!K&&G.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&G.trim().match(/^```\s*$/)){let O=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${O}@@`),K=!1,z=[];continue}if(K)z.push(G);else N.push(G)}if(K)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function c8(_){if(!_)return _;return v2(_,5)}function h8(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function i8(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function l8(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",z=c8(K);return`<div class="mermaid-container" data-mermaid="${h8(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function M3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function P3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,O=(K.endsWith("/")?K.slice(0,-1).trim():K).split(/\s+/)[0]?.toLowerCase();if(!O||!R8.has(O))return $;if(O==="br")return N?"":"<br>";if(N)return`</${O}>`;return`<${O}>`})}function C3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function b3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function n8(_){if(!window.katex)return _;let $=(z)=>w3(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let G=[],O=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(W)=>{let L=G.length;return G.push(W),`@@CODE_BLOCK_${L}@@`});return O=O.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(W)=>{let L=G.length;return G.push(W),`@@CODE_INLINE_${L}@@`}),{html:O,blocks:G}},Z=(z,G)=>{if(!G.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(O,W)=>{let L=Number(W);return G[L]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,G,O)=>{try{let W=katex.renderToString($(O.trim()),{displayMode:!0,throwOnError:!1});return`${G}${W}`}catch(W){return`<span class="math-error" title="${y3(W.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,G,O)=>{if(/\s$/.test(O))return z;try{let W=katex.renderToString($(O),{displayMode:!1,throwOnError:!1});return`${G}${W}`}catch(W){return`${G}<span class="math-error" title="${y3(W.message)}">$${O}$</span>`}}),Z(K,N.blocks)}function d8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let z=K.nodeValue;if(!z)continue;if(u2.lastIndex=0,!u2.test(z))continue;u2.lastIndex=0;let G=K.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let O=z.split(u2);if(O.length<=1)continue;let W=$.createDocumentFragment();O.forEach((L,q)=>{if(q%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",L),H.textContent=`#${L}`,W.appendChild(H)}else W.appendChild($.createTextNode(L))}),K.parentNode?.replaceChild(W,K)}return $.body.innerHTML}function s8(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function m0(_,$,j={}){if(!_)return"";let Z=s8(_),{text:N,blocks:K}=p8(Z),z=v2(N,2),O=M3(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),W=P3(O),L=window.marked?marked.parse(W,{headerIds:!1,mangle:!1}):W.replace(/\n/g,"<br>");return L=C3(L),L=b3(L),L=n8(L),L=d8(L),L=l8(L,K),L=A3(L,j),L}function m2(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=v2($,2),N=M3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=P3(N),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=C3(z),z=b3(z),z=A3(z),z}async function F$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=k3()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let G=z.dataset.mermaid,O=i8(G||""),W=v2(O,2),L=await $(W,{...N,transparent:!0});z.innerHTML=L,z.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let O=document.createElement("pre");O.className="mermaid-error",O.textContent=`Diagram error: ${G.message}`,z.innerHTML="",z.appendChild(O),z.removeAttribute("data-mermaid")}}function I3(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function S3(_){return String(_||"").trim()||"web:default"}function x3(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function T3(_){if(!_)return!1;return _.status!=="running"}function f3(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function R3({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),K=D(null),z=_?.thinking?m2(_.thinking):"",G=_?.answer?m0(_.answer,null,{sanitize:!1}):"";if(u(()=>{if(N.current&&z)F$(N.current).catch(()=>{})},[z]),u(()=>{if(K.current&&G)F$(K.current).catch(()=>{})},[G]),!_)return null;let O=_.status==="running",W=Boolean(String(_.answer||"").trim()),L=Boolean(String(_.thinking||"").trim()),q=x3(_),H=T3(_),A=!O&&W,x=O?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${x}</span>
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
            ${L&&B`
                <details class="btw-block btw-thinking" open=${O?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${q&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${H&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!A}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var u3="PiClaw";function c4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%K.length,G=K[z],O=Z.trim().toLowerCase(),W=typeof $==="string"?$.trim():"",L=W?W:null,q=j||O==="PiClaw".toLowerCase()||O==="pi";return{letter:N,color:G,image:L||(q?"/static/icon-192.png":null)}}function v3(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function m3(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function g3(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",G=K?.dataset?.tint||"",O=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(O&&(G||z&&z!=="default"))return O}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function o8(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function z2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function p3(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return z2(_)?"Compacting context":"Working..."}function r8(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function c3(_,$=Date.now()){let j=o8(_);if(j===null)return null;return r8(Math.max(0,$-j))}function h3({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:z,steerQueued:G,onPanelToggle:O}){let q=(h)=>{if(!h)return{text:"",totalLines:0,fullText:""};if(typeof h==="string"){let E_=h,M_=E_?E_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:E_,totalLines:M_,fullText:E_}}let X_=h.text||"",V_=h.fullText||h.full_text||X_,q_=Number.isFinite(h.totalLines)?h.totalLines:V_?V_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:X_,totalLines:q_,fullText:V_}},H=160,A=(h)=>{if(!h)return 1;return Math.max(1,Math.ceil(h.length/160))},x=(h,X_,V_)=>{let q_=(h||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!q_)return{text:"",omitted:0,totalLines:Number.isFinite(V_)?V_:0,visibleLines:0};let E_=q_.split(`
`),M_=E_.length>X_?E_.slice(0,X_).join(`
`):q_,v_=Number.isFinite(V_)?V_:E_.reduce((S_,G0)=>S_+A(G0),0),F_=M_?M_.split(`
`).reduce((S_,G0)=>S_+A(G0),0):0,C_=Math.max(v_-F_,0);return{text:M_,omitted:C_,totalLines:v_,visibleLines:F_}},T=q(j),v=q(Z),I=q($),Q=Boolean(T.text)||T.totalLines>0,w=Boolean(v.text)||v.totalLines>0,C=Boolean(I.fullText?.trim()||I.text?.trim());if(!_&&!C&&!Q&&!w&&!N&&!K)return null;let[p,a]=f(new Set),[t,n]=f(()=>Date.now()),N_=(h)=>a((X_)=>{let V_=new Set(X_),q_=!V_.has(h);if(q_)V_.add(h);else V_.delete(h);if(typeof O==="function")O(h,q_);return V_});u(()=>{a(new Set)},[z]);let i=z2(_);u(()=>{if(!i)return;n(Date.now());let h=setInterval(()=>n(Date.now()),1000);return()=>clearInterval(h)},[i,_?.started_at,_?.startedAt]);let Q_=_?.turn_id||z,B_=g3(Q_),o=G?"turn-dot turn-dot-queued":"turn-dot",__=(h)=>h,K_=Boolean(_?.last_activity||_?.lastActivity),j_=(h)=>h==="warning"?"#f59e0b":h==="error"?"var(--danger-color)":h==="success"?"var(--success-color)":B_,G_=K?.kind||"info",O_=j_(G_),D_=j_(_?.kind||(i?"warning":"info")),Z_="",k_=_?.title,w_=_?.status;if(_?.type==="plan")Z_=k_?`Planning: ${k_}`:"Planning...";else if(_?.type==="tool_call")Z_=k_?`Running: ${k_}`:"Running tool...";else if(_?.type==="tool_status")Z_=k_?`${k_}: ${w_||"Working..."}`:w_||"Working...";else if(_?.type==="error")Z_=k_||"Agent error";else Z_=k_||w_||"Working...";if(K_)Z_="Last activity just now";let a_=({panelTitle:h,text:X_,fullText:V_,totalLines:q_,maxLines:E_,titleClass:M_,panelKey:v_})=>{let F_=p.has(v_),C_=V_||X_||"",S_=typeof E_==="number",G0=F_&&S_,n_=S_?x(C_,E_,q_):{text:C_||"",omitted:0,totalLines:Number.isFinite(q_)?q_:0};if(!C_&&!(Number.isFinite(n_.totalLines)&&n_.totalLines>0))return null;let _0=`agent-thinking-body${S_?" agent-thinking-body-collapsible":""}`,U0=S_?`--agent-thinking-collapsed-lines: ${E_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${F_?"true":"false"}
                data-collapsible=${S_?"true":"false"}
                style=${B_?`--turn-color: ${B_};`:""}
            >
                <div class="agent-thinking-title ${M_||""}">
                    ${B_&&B`<span class=${o} aria-hidden="true"></span>`}
                    ${h}
                    ${G0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${h} panel`}
                            onClick=${()=>N_(v_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${_0}
                    style=${U0}
                    dangerouslySetInnerHTML=${{__html:m2(C_)}}
                />
                ${!F_&&n_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>N_(v_)}>
                        ▸ ${n_.omitted} more lines
                    </button>
                `}
                ${F_&&n_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>N_(v_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},y_=N?.tool_call?.title,u_=y_?`Awaiting approval: ${y_}`:"Awaiting approval",b_=i?c3(_,t):null,l_=(h,X_,V_=null)=>{let q_=p3(h);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${X_?`--turn-color: ${X_};`:""}
                title=${h?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${X_&&B`<span class=${o} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${q_}</span>
                    ${V_&&B`<span class="agent-status-elapsed">${V_}</span>`}
                </div>
                ${h.detail&&B`<div class="agent-thinking-body">${h.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${K&&l_(K,O_)}
            ${_?.type==="intent"&&l_(_,D_,b_)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${B_?`--turn-color: ${B_};`:""}>
                    <span class=${o} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${u_}</span>
                </div>
            `}
            ${Q&&a_({panelTitle:__("Planning"),text:T.text,fullText:T.fullText,totalLines:T.totalLines,panelKey:"plan"})}
            ${w&&a_({panelTitle:__("Thoughts"),text:v.text,fullText:v.fullText,totalLines:v.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${C&&a_({panelTitle:__("Draft"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${K_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${B_?`--turn-color: ${B_};`:""}>
                    ${B_&&B`<span class=${o} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!K_&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${Z_}</span>
                </div>
            `}
        </div>
    `}function i3({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,z=Z?.title||"Agent Request",G=Z?.kind||"other",O=Z?.rawInput||{},W=O.command||O.commands&&O.commands[0]||null,L=O.diff||null,q=O.fileName||O.path||null,H=Z?.description||O.description||O.explanation||null,x=(Array.isArray(Z?.locations)?Z.locations:[]).map((w)=>w?.path).filter((w)=>Boolean(w)),T=Array.from(new Set([q,...x].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let v=async(w)=>{try{await P2(j,w,K||null),$()}catch(C){console.error("Failed to respond to agent request:",C)}},I=async()=>{try{await E4(z,`Auto-approved: ${z}`),await P2(j,"approved",K||null),$()}catch(w){console.error("Failed to add to whitelist:",w)}},Q=N&&N.length>0;return B`
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
                ${(H||W||L||T.length>0)&&B`
                    <div class="agent-request-body">
                        ${H&&B`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${T.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${T.map((w,C)=>B`<li key=${C}>${w}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${W&&B`
                            <pre class="agent-request-command">${W}</pre>
                        `}
                        ${L&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${L}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${Q?N.map((w)=>B`
                            <button 
                                key=${w.optionId||w.id||String(w)}
                                class="agent-request-btn ${w.kind==="allow_once"||w.kind==="allow_always"?"primary":""}"
                                onClick=${()=>v(w.optionId||w.id||w)}
                            >
                                ${w.name||w.label||w.optionId||w.id||String(w)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>v("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>v("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${I}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function l3({status:_}){if(_==="connected")return null;return B`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function n3(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let O=$.toLocaleDateString(void 0,{weekday:"short"}),W=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${O} ${W}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${G}`}function Y2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function r0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function f$(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var a8=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),t8=new Set(["text/markdown"]);function G2(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(a8.has($)||$.startsWith("text/"))return"text";return"unsupported"}function d3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return t8.has($)}function s3(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function e8(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function _9(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:K}}function o3(_){return e8(_)||_9(_)}function g2(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function $9(_,$){let j=Math.max(g2(_),g2($)),Z=Math.min(g2(_),g2($));return(j+0.05)/(Z+0.05)}function j9(_,$,j="#ffffff"){let Z=o3(_);if(!Z)return j;let N=j,K=-1;for(let z of $){let G=o3(z);if(!G)continue;let O=$9(Z,G);if(O>K)N=z,K=O}return N}function h4(){let _=getComputedStyle(document.documentElement),$=(x,T)=>{for(let v of x){let I=_.getPropertyValue(v).trim();if(I)return I}return T},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),O=$(["--success-color","--color-success"],"#00ba7c"),W=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),L=$(["--danger-color","--color-error"],"#f4212e"),q=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),A=j9(G,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:z,accent:G,good:O,warning:W,attention:L,border:q,fontFamily:H,buttonTextColor:A}}function r3(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:z,attention:G,border:O,fontFamily:W}=h4();return{fontFamily:W,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:O},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var Z9=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),a3=!1,p2=null,t3=!1;function i4(_){_.querySelector(".adaptive-card-notice")?.remove()}function N9(_,$,j="error"){i4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function K9(_,$=(j)=>m0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function z9(_=($)=>m0($,null)){return($,j)=>{try{let Z=K9($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function Y9(_){if(t3||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=z9(),t3=!0}async function G9(){if(a3)return;if(p2)return p2;return p2=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{a3=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),p2}function W9(){return globalThis.AdaptiveCards}function X9(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function O9(_){return Z9.has(_)}function n4(_){if(!Array.isArray(_))return[];return _.filter(X9)}function q9(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,K=_?.data??$?.data;return{type:j,title:Z,data:K,url:N,raw:_}}function l4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${l4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function V9(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return l4($);return typeof $==="string"?$:String($)}function L9(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((G)=>Z(G));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=V9(z.type,j[z.id],z);for(let[G,O]of Object.entries(z))if(Array.isArray(O)||O&&typeof O==="object")z[G]=Z(O);return z};return Z(_)}function B9(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function U9(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Q9(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=U9(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function e3(_,$,j){if(!O9($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await G9()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=W9();Y9(Z);let N=new Z.AdaptiveCard,K=h4();N.hostConfig=new Z.HostConfig(r3());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:L9($.payload,z);N.parse(G),N.onExecuteAction=(L)=>{let q=q9(L);if(j?.onAction)i4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(q)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let A=H instanceof Error?H.message:String(H||"Action failed.");N9(_,A||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",q)};let O=N.render();if(!O)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let W=Q9($);if(W){_.classList.add("adaptive-card-finished");let L=document.createElement("div");L.className=`adaptive-card-status adaptive-card-status-${$.state}`;let q=document.createElement("span");if(q.className="adaptive-card-status-label",q.textContent=W.label,L.appendChild(q),W.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=W.detail,L.appendChild(H)}_.appendChild(L)}if(i4(_),_.appendChild(O),W)B9(O);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function n$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>n$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${n$(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function F9(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function d4(_){if(!Array.isArray(_))return[];return _.filter(F9)}function _6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=n$(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=Object.entries(j).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:n$(K)})).filter((N)=>N.value).slice(0,4).map(({key:N,value:K})=>`${N}: ${K}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function $6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:n$(K)})).filter((N)=>N.value).slice(0,4):[],Z=j.length>0?j.map(({key:N,value:K})=>`${N}: ${K}`).join(", "):n$(_.data)||null;return{title:$,summary:Z,fields:j,submittedAt:_.submitted_at}}function H9(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?r0($):null},{label:"Added",value:_?.created_at?f$(_.created_at):null}].filter((Z)=>Z.value)}function j6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=i_(()=>G2($?.content_type),[$?.content_type]),K=s3(N),z=i_(()=>d3($?.content_type),[$?.content_type]),[G,O]=f(N==="text"||N==="pdf"),[W,L]=f(""),[q,H]=f(null),[A,x]=f(null),T=D(null),v=i_(()=>H9($),[$]),I=i_(()=>{if(!z||!W)return"";return m0(W)},[z,W]);return u(()=>{let Q=(w)=>{if(w.key==="Escape")j()};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[j]),u(()=>{if(!T.current||!I)return;F$(T.current);return},[I]),u(()=>{let Q=!1,w=null;async function C(){if(N==="text"){O(!0),x(null);try{let p=await w4(_);if(!Q)L(p)}catch{if(!Q)x("Failed to load text preview.")}finally{if(!Q)O(!1)}return}if(N==="pdf"){O(!0),x(null);try{let p=await M4(_);if(w=URL.createObjectURL(p),!Q)H(w)}catch{if(!Q)x("Failed to load PDF preview.")}finally{if(!Q)O(!1)}return}O(!1)}return C(),()=>{if(Q=!0,w)URL.revokeObjectURL(w)}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(Q)=>{Q.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${Z$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(Q)=>Q.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${G&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&A&&B`<div class="attachment-preview-state">${A}</div>`}
                    ${!G&&!A&&N==="image"&&B`
                        <img class="attachment-preview-image" src=${Z$(_)} alt=${Z} />
                    `}
                    ${!G&&!A&&N==="pdf"&&q&&B`
                        <iframe class="attachment-preview-frame" src=${q} title=${Z}></iframe>
                    `}
                    ${!G&&!A&&N==="text"&&z&&B`
                        <div
                            ref=${T}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:I}}
                        />
                    `}
                    ${!G&&!A&&N==="text"&&!z&&B`
                        <pre class="attachment-preview-text">${W}</pre>
                    `}
                    ${!G&&!A&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${v.map((Q)=>B`
                        <div class="attachment-preview-meta-item" key=${Q.label}>
                            <span class="attachment-preview-meta-label">${Q.label}</span>
                            <span class="attachment-preview-meta-value">${Q.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function Z6({src:_,onClose:$}){return u(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function J9({mediaId:_,onPreview:$}){let[j,Z]=f(null);if(u(()=>{c$(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,z=K?r0(K):"",O=G2(j.content_type)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(W)=>W.stopPropagation()}>
            <a href=${Z$(_)} download=${N} class="file-attachment-main">
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
                        ${z&&B`<span class="file-size">${z}</span>`}
                        ${j.content_type&&B`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${O}
            </button>
        </div>
    `}function D9({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=f(null);u(()=>{if(!Number.isFinite(j))return;c$(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?Z$(j):null,O=G2(Z?.content_type)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${K}>
            ${z?B`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(W)=>W.stopPropagation()}>
                        <${Q$}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:B`
                    <${Q$}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${O}
                    onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function c2({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?f$(Z):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&B`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&B`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function E9({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?r0(_.size):"",N=_.mime_type||"",K=y9(N),z=T$(_.uri);return B`
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
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&B`<span>${N}</span>`}
                    ${Z&&B`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function k9({block:_}){let[$,j]=f(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${N&&B`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&B`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let O=new Blob([Uint8Array.from(atob(_.data),(q)=>q.charCodeAt(0))],{type:z||"application/octet-stream"}),W=URL.createObjectURL(O),L=document.createElement("a");L.href=W,L.download=Z.split("/").pop()||"resource",L.click(),URL.revokeObjectURL(W)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function y9(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function A9({preview:_}){let $=T$(_.url),j=T$(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
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
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function w9(_,$){return typeof _==="string"?_:""}var M9=1800,P9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,C9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,b9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function I9(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function S9(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,z)=>{let G=z||"idle";if(K.dataset.copyState=G,G==="success")K.innerHTML=C9,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(G==="error")K.innerHTML=b9,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=P9,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",N(G,"idle"),z.appendChild(G);let O=async(W)=>{W.preventDefault(),W.stopPropagation();let q=K.querySelector("code")?.textContent||"",H=await I9(q);N(G,H?"success":"error");let A=j.get(G);if(A)clearTimeout(A);let x=setTimeout(()=>{N(G,"idle"),j.delete(G)},M9);j.set(G,x)};G.addEventListener("click",O),Z.push(()=>{G.removeEventListener("click",O);let W=j.get(G);if(W)clearTimeout(W);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{Z.forEach((K)=>K())}}function x9(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let W=0;W<j.length;W+=1)if(j[W].trim()==="Files:"&&j[W+1]&&/^\s*-\s+/.test(j[W+1])){Z=W;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let W=j[K];if(/^\s*-\s+/.test(W))N.push(W.replace(/^\s*-\s+/,"").trim());else if(!W.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),G=j.slice(K),O=[...z,...G].join(`
`);return O=O.replace(/\n{3,}/g,`

`).trim(),{content:O,fileRefs:N}}function T9(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let W=0;W<j.length;W+=1)if(j[W].trim()==="Referenced messages:"&&j[W+1]&&/^\s*-\s+/.test(j[W+1])){Z=W;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let W=j[K];if(/^\s*-\s+/.test(W)){let q=W.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(q)N.push(q[1])}else if(!W.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),G=j.slice(K),O=[...z,...G].join(`
`);return O=O.replace(/\n{3,}/g,`

`).trim(),{content:O,messageRefs:N}}function f9(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let W=0;W<j.length;W+=1)if(j[W].trim()==="Images:"&&j[W+1]&&/^\s*-\s+/.test(j[W+1])){Z=W;break}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let W=j[K];if(/^\s*-\s+/.test(W)){let L=W.replace(/^\s*-\s+/,"").trim(),q=L.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||L.match(/^attachment:([^\s]+)\s+(.+)$/i);if(q){let H=q[1],A=(q[2]||"").trim()||H;N.push({id:H,label:A,raw:L})}else N.push({id:null,label:L,raw:L})}else if(!W.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),G=j.slice(K),O=[...z,...G].join(`
`);return O=O.replace(/\n{3,}/g,`

`).trim(),{content:O,attachments:N}}function R9(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function u9(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(R9).sort((L,q)=>q.length-L.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),G=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),O=[],W;while(W=G.nextNode())O.push(W);for(let L of O){let q=L.nodeValue;if(!q||!N.test(q)){N.lastIndex=0;continue}N.lastIndex=0;let H=L.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let A=q.split(N).filter((T)=>T!=="");if(A.length===0)continue;let x=z.createDocumentFragment();for(let T of A)if(K.test(T)){let v=z.createElement("mark");v.className="search-highlight-term",v.textContent=T,x.appendChild(v)}else x.appendChild(z.createTextNode(T));L.parentNode.replaceChild(x,L)}return z.body.innerHTML}function N6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:z,userName:G,userAvatarUrl:O,userAvatarBackground:W,onDelete:L,isThreadReply:q,isThreadPrev:H,isThreadNext:A,isRemoving:x,highlightQuery:T,onFileRef:v}){let[I,Q]=f(null),w=D(null),C=_.data,p=C.type==="agent_response",a=G||"You",t=p?K||u3:a,n=p?c4(K,z,!0):c4(a,O),N_=typeof W==="string"?W.trim().toLowerCase():"",i=!p&&n.image&&(N_==="clear"||N_==="transparent"),Q_=p&&Boolean(n.image),B_=`background-color: ${i||Q_?"transparent":n.color}`,o=C.content_meta,__=Boolean(o?.truncated),K_=Boolean(o?.preview),j_=__&&!K_,G_=__?{originalLength:Number.isFinite(o?.original_length)?o.original_length:C.content?C.content.length:0,maxLength:Number.isFinite(o?.max_length)?o.max_length:0}:null,O_=C.content_blocks||[],D_=C.media_ids||[],Z_=w9(C.content,C.link_previews),{content:k_,fileRefs:w_}=x9(Z_),{content:a_,messageRefs:y_}=T9(k_),{content:u_,attachments:b_}=f9(a_);Z_=u_;let l_=n4(O_),h=d4(O_),X_=l_.length===1&&typeof l_[0]?.fallback_text==="string"?l_[0].fallback_text.trim():"",V_=h.length===1?_6(h[0]).trim():"",q_=Boolean(X_)&&Z_?.trim()===X_||Boolean(V_)&&Z_?.trim()===V_,E_=Boolean(Z_)&&!j_&&!q_,M_=typeof T==="string"?T.trim():"",v_=i_(()=>{if(!Z_||q_)return"";let b=m0(Z_,j);return M_?u9(b,M_):b},[Z_,q_,M_]),F_=(b,e)=>{b.stopPropagation(),Q(Z$(e))},[C_,S_]=f(null),G0=(b)=>{S_(b)},n_=(b)=>{b.stopPropagation(),L?.(_)},_0=(b,e)=>{let P_=new Set;if(!b||e.length===0)return{content:b,usedIds:P_};return{content:b.replace(/attachment:([^\s)"']+)/g,(A0,a0,j0,X0)=>{let q0=a0.replace(/^\/+/,""),b0=e.find((p0)=>p0.name&&p0.name.toLowerCase()===q0.toLowerCase()&&!P_.has(p0.id))||e.find((p0)=>!P_.has(p0.id));if(!b0)return A0;if(P_.add(b0.id),X0.slice(Math.max(0,j0-2),j0)==="](")return`/media/${b0.id}`;return b0.name||"attachment"}),usedIds:P_}},U0=[],I_=[],$0=[],Q0=[],E0=[],F0=[],W0=0;if(O_.length>0)O_.forEach((b)=>{if(b?.type==="text"&&b.annotations)F0.push(b.annotations);if(b?.type==="resource_link")Q0.push(b);else if(b?.type==="resource")E0.push(b);else if(b?.type==="file"){let e=D_[W0++];if(e)I_.push(e),$0.push({id:e,name:b?.name||b?.filename||b?.title})}else if(b?.type==="image"||!b?.type){let e=D_[W0++];if(e){let P_=typeof b?.mime_type==="string"?b.mime_type:void 0;U0.push({id:e,annotations:b?.annotations,mimeType:P_}),$0.push({id:e,name:b?.name||b?.filename||b?.title})}}});else if(D_.length>0)D_.forEach((b)=>{U0.push({id:b,annotations:null}),$0.push({id:b,name:null})});if(b_.length>0)b_.forEach((b)=>{if(!b?.id)return;let e=$0.find((P_)=>String(P_.id)===String(b.id));if(e&&!e.name)e.name=b.label});let{content:k0,usedIds:d_}=_0(Z_,$0);Z_=k0;let T_=U0.filter(({id:b})=>!d_.has(b)),C0=I_.filter((b)=>!d_.has(b)),p_=b_.length>0?b_.map((b,e)=>({id:b.id||`attachment-${e+1}`,label:b.label||`attachment-${e+1}`})):$0.map((b,e)=>({id:b.id,label:b.name||`attachment-${e+1}`})),s_=i_(()=>n4(O_),[O_]),y0=i_(()=>d4(O_),[O_]);u(()=>{if(!w.current)return;return F$(w.current),S9(w.current)},[v_]);let U_=D(null);return u(()=>{if(!U_.current||s_.length===0)return;let b=U_.current;b.innerHTML="";for(let e of s_){let P_=document.createElement("div");b.appendChild(P_),e3(P_,e,{onAction:async(m_)=>{if(m_.type==="Action.OpenUrl"){let A0=T$(m_.url||"");if(!A0)throw Error("Invalid URL");window.open(A0,"_blank","noopener,noreferrer");return}if(m_.type==="Action.Submit"){await D4({post_id:_.id,thread_id:C.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:m_.type,title:m_.title||"",data:m_.data}});return}console.warn("[post] unsupported adaptive card action:",m_.type,m_)}}).catch((m_)=>{console.error("[post] adaptive card render error:",m_),P_.textContent=e.fallback_text||"Card failed to render."})}},[s_,C.thread_id,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${p?"agent-post":""} ${q?"thread-reply":""} ${H?"thread-prev":""} ${A?"thread-next":""} ${x?"removing":""}" onClick=${$}>
            <div class="post-avatar ${p?"agent-avatar":""} ${n.image?"has-image":""}" style=${B_}>
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
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(b)=>{if(b.preventDefault(),b.stopPropagation(),Z)Z(_.id)}}>${n3(_.timestamp)}</a>
                </div>
                ${j_&&G_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${Y2(G_.originalLength)} chars
                            ${G_.maxLength?B` • Display limit: ${Y2(G_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${K_&&G_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${Y2(G_.maxLength)} of ${Y2(G_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(w_.length>0||y_.length>0||p_.length>0)&&B`
                    <div class="post-file-refs">
                        ${y_.map((b)=>{let e=(P_)=>{if(P_.preventDefault(),P_.stopPropagation(),N)N(b,_.chat_jid||null);else{let m_=document.getElementById("post-"+b);if(m_)m_.scrollIntoView({behavior:"smooth",block:"center"}),m_.classList.add("post-highlight"),setTimeout(()=>m_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${b}`} class="post-msg-pill-link" onClick=${e}>
                                    <${Q$}
                                        prefix="post"
                                        label=${"msg:"+b}
                                        title=${"Message "+b}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${w_.map((b)=>{let e=b.split("/").pop()||b;return B`
                                <${Q$}
                                    prefix="post"
                                    label=${e}
                                    title=${b}
                                    onClick=${()=>v?.(b)}
                                />
                            `})}
                        ${p_.map((b)=>B`
                            <${D9}
                                key=${b.id}
                                attachment=${b}
                                onPreview=${G0}
                            />
                        `)}
                    </div>
                `}
                ${E_&&B`
                    <div 
                        ref=${w}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:v_}}
                        onClick=${(b)=>{if(b.target.classList.contains("hashtag")){b.preventDefault(),b.stopPropagation();let e=b.target.dataset.hashtag;if(e)j?.(e)}else if(b.target.tagName==="IMG")b.preventDefault(),b.stopPropagation(),Q(b.target.src)}}
                    />
                `}
                ${s_.length>0&&B`
                    <div ref=${U_} class="post-adaptive-cards" />
                `}
                ${y0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${y0.map((b,e)=>{let P_=$6(b);return B`
                                <div key=${`${b.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${P_.title}</span>
                                    </div>
                                    ${P_.summary&&B`
                                        <div class="adaptive-card-submission-summary">${P_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${f$(P_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${F0.length>0&&B`
                    ${F0.map((b,e)=>B`
                        <${c2} key=${e} annotations=${b} />
                    `)}
                `}
                ${T_.length>0&&B`
                    <div class="media-preview">
                        ${T_.map(({id:b,mimeType:e})=>{let m_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?Z$(b):A4(b);return B`
                                <img 
                                    key=${b} 
                                    src=${m_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(A0)=>F_(A0,b)}
                                />
                            `})}
                    </div>
                `}
                ${T_.length>0&&B`
                    ${T_.map(({annotations:b},e)=>B`
                        ${b&&B`<${c2} key=${e} annotations=${b} />`}
                    `)}
                `}
                ${C0.length>0&&B`
                    <div class="file-attachments">
                        ${C0.map((b)=>B`
                            <${J9} key=${b} mediaId=${b} onPreview=${G0} />
                        `)}
                    </div>
                `}
                ${Q0.length>0&&B`
                    <div class="resource-links">
                        ${Q0.map((b,e)=>B`
                            <div key=${e}>
                                <${E9} block=${b} />
                                <${c2} annotations=${b.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${E0.length>0&&B`
                    <div class="resource-embeds">
                        ${E0.map((b,e)=>B`
                            <div key=${e}>
                                <${k9} block=${b} />
                                <${c2} annotations=${b.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${C.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${C.link_previews.map((b,e)=>B`
                            <${A9} key=${e} preview=${b} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${I&&B`<${Z6} src=${I} onClose=${()=>Q(null)} />`}
        ${C_&&B`
            <${j6}
                mediaId=${C_.mediaId}
                info=${C_.info}
                onClose=${()=>S_(null)}
            />
        `}
    `}function K6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:z,onFileRef:G,emptyMessage:O,timelineRef:W,agents:L,user:q,onDeletePost:H,reverse:A=!0,removingPostIds:x,searchQuery:T}){let[v,I]=f(!1),Q=D(null),w=typeof IntersectionObserver<"u",C=P(async()=>{if(!j||!$||v)return;I(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{I(!1)}},[$,v,j]),p=P((o)=>{let{scrollTop:__,scrollHeight:K_,clientHeight:j_}=o.target,G_=A?K_-j_-__:__,O_=Math.max(300,j_);if(G_<O_)C()},[A,C]);u(()=>{if(!w)return;let o=Q.current,__=W?.current;if(!o||!__)return;let K_=300,j_=new IntersectionObserver((G_)=>{for(let O_ of G_){if(!O_.isIntersecting)continue;C()}},{root:__,rootMargin:`${K_}px 0px ${K_}px 0px`,threshold:0});return j_.observe(o),()=>j_.disconnect()},[w,$,j,W,C]);let a=D(C);if(a.current=C,u(()=>{if(w)return;if(!W?.current)return;let{scrollTop:o,scrollHeight:__,clientHeight:K_}=W.current,j_=A?__-K_-o:o,G_=Math.max(300,K_);if(j_<G_)a.current?.()},[w,_,$,A,W]),u(()=>{if(!W?.current)return;if(!$||v)return;let{scrollTop:o,scrollHeight:__,clientHeight:K_}=W.current,j_=A?__-K_-o:o,G_=Math.max(300,K_);if(__<=K_+1||j_<G_)a.current?.()},[_,$,v,A,W]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${W}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${O||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((o,__)=>o.id-__.id),n=(o)=>{let __=o?.data?.thread_id;if(__===null||__===void 0||__==="")return null;let K_=Number(__);return Number.isFinite(K_)?K_:null},N_=new Map;for(let o=0;o<t.length;o+=1){let __=t[o],K_=Number(__?.id),j_=n(__);if(j_!==null){let G_=N_.get(j_)||{anchorIndex:-1,replyIndexes:[]};G_.replyIndexes.push(o),N_.set(j_,G_)}else if(Number.isFinite(K_)){let G_=N_.get(K_)||{anchorIndex:-1,replyIndexes:[]};G_.anchorIndex=o,N_.set(K_,G_)}}let i=new Map;for(let[o,__]of N_.entries()){let K_=new Set;if(__.anchorIndex>=0)K_.add(__.anchorIndex);for(let j_ of __.replyIndexes)K_.add(j_);i.set(o,Array.from(K_).sort((j_,G_)=>j_-G_))}let Q_=t.map((o,__)=>{let K_=n(o);if(K_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let j_=i.get(K_);if(!j_||j_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let G_=j_.indexOf(__);if(G_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:G_>0,hasThreadNext:G_<j_.length-1}}),B_=B`<div class="timeline-sentinel" ref=${Q}></div>`;return B`
        <div class="timeline ${A?"reverse":"normal"}" ref=${W} onScroll=${p}>
            <div class="timeline-content">
                ${A?B_:null}
                ${t.map((o,__)=>{let K_=Boolean(o.data?.thread_id&&o.data.thread_id!==o.id),j_=x?.has?.(o.id),G_=Q_[__]||{};return B`
                    <${N6}
                        key=${o.id}
                        post=${o}
                        isThreadReply=${K_}
                        isThreadPrev=${G_.hasThreadPrev}
                        isThreadNext=${G_.hasThreadNext}
                        isRemoving=${j_}
                        highlightQuery=${T}
                        agentName=${v3(o.data?.agent_id,L||{})}
                        agentAvatarUrl=${m3(o.data?.agent_id,L||{})}
                        userName=${q?.name||q?.user_name}
                        userAvatarUrl=${q?.avatar_url||q?.avatarUrl||q?.avatar}
                        userAvatarBackground=${q?.avatar_background||q?.avatarBackground}
                        onClick=${()=>Z?.(o)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${G}
                        onDelete=${H}
                    />
                `})}
                ${A?null:B_}
            </div>
        </div>
    `}class z6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var e_=new z6;var h2=null,s4=null;function Y6(){if(s4)return Promise.resolve(s4);if(!h2)h2=import("/static/dist/editor.bundle.js").then((_)=>{return s4=_,_}).catch((_)=>{throw h2=null,_});return h2}class G6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await Y6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var o4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new G6(_,$)}};function r4(){Y6().catch(()=>{})}var v9={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},m9={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},i2=null,a4=null;function g9(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function p9(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!g9(z))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function c9(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!i2)i2=p9(()=>Promise.resolve($.init?.())).catch((j)=>{throw i2=null,j});return await i2,$}async function h9(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!a4)a4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await a4}async function i9(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function l9(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function n9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function H$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function d9(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function W6(){let _=n9(),$=_?m9:v9,j=H$("--bg-primary",_?"#000000":"#ffffff"),Z=H$("--text-primary",_?"#e7e9ea":"#0f1419"),N=H$("--text-secondary",_?"#71767b":"#536471"),K=H$("--accent-color","#1d9bf0"),z=H$("--danger-color",_?"#ff7b72":"#cf222e"),G=H$("--success-color",_?"#7ee787":"#1a7f37"),O=H$("--bg-hover",_?"#1d1f23":"#e8ebed"),W=H$("--border-color",_?"#2f3336":"#eff3f4"),L=H$("--accent-soft-strong",d9(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:L,selectionForeground:Z,black:O,red:z,green:G,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:W}}class X6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await c9();if(await h9(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:W6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=W6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await i9();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(l9($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var t4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new X6(_,$)}};function y$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function s9(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",z=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),W=N.startsWith("/")?N:`${G?`${G}/`:""}${N}`,L=[];for(let H of W.split("/")){if(!H||H===".")continue;if(H===".."){if(L.length>0)L.pop();continue}L.push(H)}let q=L.join("/");return`${b2(q)}${K}${z}`}function W2(_){return _?.preview||null}function o9(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function r9(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function a9(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${y$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${y$(r0($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${y$(f$($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${y$(r9($))}</span>`),Z.push(`<span><strong>extension:</strong> ${y$(o9(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${y$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function t9(_){let $=W2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=a9(_,$);if($.kind==="image"){let Z=$.url||($.path?b2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${y$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=m0($.text||"",null,{rewriteImageSrc:(N)=>s9(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${y$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class e4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=t9(this.context)}getContent(){let _=W2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=W2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var _1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=W2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new e4(_,$)}},$1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return W2(_)||_?.path?1:!1},mount(_,$){return new e4(_,$)}};var e9=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),_5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},$5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function q6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function O6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function V6(){return!!(self.crossOriginIsolated&&typeof SharedArrayBuffer<"u")}class L6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=q6(j),K=$5[N]||"\uD83D\uDCC4",z=_5[N]||"Office Document",G=V6(),O=document.createElement("div");if(O.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",O.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${K}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${O6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${O6(z)}</div>
                ${G?`
                    <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                        border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;"
                        onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                        onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                        Open in Tab
                    </button>
                `:`
                    <div style="padding:10px 16px;background:rgba(234,179,8,0.1);border:1px solid rgba(234,179,8,0.3);
                        border-radius:6px;font-size:12px;color:#eab308;line-height:1.5;">
                        ⚠️ Requires HTTPS for SharedArrayBuffer.<br>
                        <span style="color:var(--text-secondary,#888);font-size:11px;">
                            Connect via HTTPS to use the Office viewer.
                        </span>
                    </div>
                `}
            </div>
        `,_.appendChild(O),G){let W=O.querySelector("#ov-open-tab");if(W)W.addEventListener("click",()=>{let L=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class B6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document";if(!V6()){let G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#1e1e1e;",G.innerHTML=`
                <div style="text-align:center;max-width:420px;padding:32px;">
                    <div style="font-size:48px;margin-bottom:16px;">\uD83D\uDD12</div>
                    <div style="font-size:15px;font-weight:600;color:#e0e0e0;margin-bottom:8px;">
                        Secure Context Required
                    </div>
                    <div style="font-size:13px;color:#999;line-height:1.6;">
                        The Office viewer requires <code style="background:#333;padding:1px 5px;border-radius:3px;font-size:12px;">SharedArrayBuffer</code>
                        which is only available over HTTPS.<br><br>
                        Connect via <strong style="color:#4fc1ff;">https://</strong> to use this feature.
                    </div>
                </div>
            `,_.appendChild(G);return}let K=`/workspace/raw?path=${encodeURIComponent(j)}`,z=`/office-viewer/?url=${encodeURIComponent(K)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var j1={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=q6(_?.path);if(!$||!e9.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new L6(_,$);return new B6(_,$)}};function j5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function Z5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class U6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Z5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#drawio-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Q6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/drawio/edit?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var Z1={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!j5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new U6(_,$);return new Q6(_,$)}};class F6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var R_=new F6;var l2="workspaceExplorerScale",N5=["compact","default","comfortable"],K5=new Set(N5),z5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function H6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return K5.has(j)?j:$}function N1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function Y5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function G5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function K1(_={}){let $=Y5(_),j=_.stored?H6(_.stored,$):$;return G5(j,_)}function J6(_){return z5[H6(_)]}var W5=60000,y6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function A6(_,$,j,Z=0,N=[]){if(!j&&y6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)A6(K,$,j,Z+1,N);return N}function D6(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&y6(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)N(z)};return N(_),Z.join("|")}function W1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((G)=>[G?.path,G])):new Map,K=!j||j.length!==Z.length,z=Z.map((G)=>{let O=W1(N.get(G.path),G);if(O!==N.get(G.path))K=!0;return O});return K?{...$,children:z}:_}function Y1(_,$,j){if(!_)return _;if(_.path===$)return W1(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let z=Y1(K,$,j);if(z!==K)Z=!0;return z});return Z?{..._,children:N}:_}var w6=4,z1=14,X5=8,O5=16;function M6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=M6(Z);return _.__bytes=j,j}function P6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=w6)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let G of N){let O=Math.max(0,Number(G?.__bytes??G?.size??0));if(O<=0)continue;if(G.type==="dir")K.push({kind:"dir",node:G,size:O});else K.push({kind:"file",name:G.name,path:G.path,size:O})}K.sort((G,O)=>O.size-G.size);let z=K;if(K.length>z1){let G=K.slice(0,z1-1),O=K.slice(z1-1),W=O.reduce((L,q)=>L+q.size,0);G.push({kind:"other",name:`+${O.length} more`,path:`${Z.path}/[other]`,size:W}),z=G}return Z.children=z.map((G)=>{if(G.kind==="dir")return P6(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function E6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function C6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function n2(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function X1(_,$,j,Z,N,K){let z=Math.PI*2-0.0001,G=K-N>z?N+z:K,O=n2(_,$,Z,N),W=n2(_,$,Z,G),L=n2(_,$,j,G),q=n2(_,$,j,N),H=G-N>Math.PI?1:0;return[`M ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`L ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,"Z"].join(" ")}var b6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function I6(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),z=(G,O,W,L)=>{let q=Array.isArray(G?.children)?G.children:[];if(!q.length)return;let H=Math.max(0,Number(G.size)||0);if(H<=0)return;let A=W-O,x=O;q.forEach((T,v)=>{let I=Math.max(0,Number(T.size)||0);if(I<=0)return;let Q=I/H,w=x,C=v===q.length-1?W:x+A*Q;if(x=C,C-w<0.003)return;let p=b6[L];if(p){let a=C6(w,L,j);if(Z.push({key:T.path,path:T.path,label:T.name,size:I,color:a,depth:L,startAngle:w,endAngle:C,innerRadius:p[0],outerRadius:p[1],d:X1(120,120,p[0],p[1],w,C)}),L===1)N.push({key:T.path,name:T.name,size:I,pct:K>0?I/K*100:0,color:a})}if(L<w6)z(T,w,C,L+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function G1(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=G1(Z,$);if(N)return N}return null}function S6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=b6[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,G=C6(K,1,Z),W=`${$||"."}/[files]`;return{segments:[{key:W,path:W,label:_,size:j,color:G,depth:1,startAngle:K,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:X1(120,120,N[0],N[1],K,z)}],legend:[{key:W,name:_,size:j,pct:100,color:G}]}}function k6(_,$=!1,j=!1){if(!_)return null;let Z=M6(_),N=P6(_,0),K=N.size||Z,{segments:z,legend:G}=I6(N,K,j);if(!z.length&&K>0){let O=S6("[files]",N.path,K,j);z=O.segments,G=O.legend}return{root:N,totalSize:K,segments:z,legend:G,truncated:$,isDarkTheme:j}}function q5({payload:_}){if(!_)return null;let[$,j]=f(null),[Z,N]=f(_?.root?.path||"."),[K,z]=f(()=>[_?.root?.path||"."]),[G,O]=f(!1);u(()=>{let i=_?.root?.path||".";N(i),z([i]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!Z)return;O(!0);let i=setTimeout(()=>O(!1),180);return()=>clearTimeout(i)},[Z]);let W=i_(()=>{return G1(_.root,Z)||_.root},[_?.root,Z]),L=W?.size||_.totalSize||0,{segments:q,legend:H}=i_(()=>{let i=I6(W,L,_.isDarkTheme);if(i.segments.length>0)return i;if(L<=0)return i;let Q_=W?.children?.length?"Total":"[files]";return S6(Q_,W?.path||_?.root?.path||".",L,_.isDarkTheme)},[W,L,_.isDarkTheme,_?.root?.path]),[A,x]=f(q),T=D(new Map),v=D(0);u(()=>{let i=T.current,Q_=new Map(q.map((K_)=>[K_.key,K_])),B_=performance.now(),o=220,__=(K_)=>{let j_=Math.min(1,(K_-B_)/220),G_=j_*(2-j_),O_=q.map((D_)=>{let k_=i.get(D_.key)||{startAngle:D_.startAngle,endAngle:D_.startAngle,innerRadius:D_.innerRadius,outerRadius:D_.innerRadius},w_=(l_,h)=>l_+(h-l_)*G_,a_=w_(k_.startAngle,D_.startAngle),y_=w_(k_.endAngle,D_.endAngle),u_=w_(k_.innerRadius,D_.innerRadius),b_=w_(k_.outerRadius,D_.outerRadius);return{...D_,d:X1(120,120,u_,b_,a_,y_)}});if(x(O_),j_<1)v.current=requestAnimationFrame(__)};if(v.current)cancelAnimationFrame(v.current);return v.current=requestAnimationFrame(__),T.current=Q_,()=>{if(v.current)cancelAnimationFrame(v.current)}},[q]);let I=A.length?A:q,Q=L>0?r0(L):"0 B",w=W?.name||"",p=(w&&w!=="."?w:"Total")||"Total",a=Q,t=K.length>1,n=(i)=>{if(!i?.path)return;let Q_=G1(_.root,i.path);if(!Q_||!Array.isArray(Q_.children)||Q_.children.length===0)return;z((B_)=>[...B_,Q_.path]),N(Q_.path),j(null)},N_=()=>{if(!t)return;z((i)=>{let Q_=i.slice(0,-1);return N(Q_[Q_.length-1]||_?.root?.path||"."),Q_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${W?.path||_?.root?.path||"."}`}
                data-segments=${I.length}
                data-base-size=${L}>
                ${I.map((i)=>B`
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
                        onClick=${()=>n(i)}
                    >
                        <title>${i.label} — ${r0(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
                    onClick=${N_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${p}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${a}</text>
                </g>
            </svg>
            ${H.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((i)=>B`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${r0(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function V5({mediaId:_}){let[$,j]=f(null);if(u(()=>{if(!_)return;c$(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?r0($.metadata.size):"";return B`
        <a href=${Z$(_)} download=${Z} class="file-attachment"
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
                ${N&&B`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function x6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z}){let[N,K]=f(null),[z,G]=f(new Set(["."])),[O,W]=f(null),[L,q]=f(null),[H,A]=f(""),[x,T]=f(null),[v,I]=f(null),[Q,w]=f(!0),[C,p]=f(!1),[a,t]=f(null),[n,N_]=f(()=>h$("workspaceShowHidden",!1)),[i,Q_]=f(!1),[B_,o]=f(null),[__,K_]=f(null),[j_,G_]=f(null),[O_,D_]=f(!1),[Z_,k_]=f(null),[w_,a_]=f(()=>E6()),[y_,u_]=f(()=>K1({stored:o0(l2),...N1()})),b_=D(z),l_=D(""),h=D(null),X_=D(0),V_=D(new Set),q_=D(null),E_=D(new Map),M_=D(_),v_=D(Z),F_=D(null),C_=D(null),S_=D(null),G0=D(null),n_=D(null),_0=D(null),U0=D("."),I_=D(null),$0=D({path:null,dragging:!1,startX:0,startY:0}),Q0=D({path:null,dragging:!1,startX:0,startY:0}),E0=D({path:null,timer:0}),F0=D(!1),W0=D(0),k0=D(new Map),d_=D(null),T_=D(null),C0=D(null),p_=D(null),s_=D(n),y0=D($),U_=D(j??$),b=D(0),e=D(j_),P_=D(i),m_=D(B_),A0=D(null),a0=D({x:0,y:0}),j0=D(0),X0=D(null),q0=D(O),t0=D(L),b0=D(null),g0=D(null),p0=D(x);M_.current=_,v_.current=Z,u(()=>{b_.current=z},[z]),u(()=>{s_.current=n},[n]),u(()=>{y0.current=$},[$]),u(()=>{U_.current=j??$},[j,$]),u(()=>{e.current=j_},[j_]),u(()=>{if(typeof window>"u")return;let V=()=>{u_(K1({stored:o0(l2),...N1()}))};V();let F=()=>V(),k=()=>V(),E=(g)=>{if(!g||g.key===null||g.key===l2)V()};window.addEventListener("resize",F),window.addEventListener("focus",k),window.addEventListener("storage",E);let R=window.matchMedia?.("(pointer: coarse)"),s=window.matchMedia?.("(hover: none)"),r=(g,Y_)=>{if(!g)return;if(g.addEventListener)g.addEventListener("change",Y_);else if(g.addListener)g.addListener(Y_)},d=(g,Y_)=>{if(!g)return;if(g.removeEventListener)g.removeEventListener("change",Y_);else if(g.removeListener)g.removeListener(Y_)};return r(R,F),r(s,F),()=>{window.removeEventListener("resize",F),window.removeEventListener("focus",k),window.removeEventListener("storage",E),d(R,F),d(s,F)}},[]),u(()=>{let V=(F)=>{let k=F?.detail?.path;if(!k)return;let E=k.split("/"),R=[];for(let s=1;s<E.length;s++)R.push(E.slice(0,s).join("/"));if(R.length)G((s)=>{let r=new Set(s);r.add(".");for(let d of R)r.add(d);return r});W(k),requestAnimationFrame(()=>{let s=document.querySelector(`[data-path="${CSS.escape(k)}"]`);if(s)s.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",V),()=>window.removeEventListener("workspace-reveal-path",V)},[]),u(()=>{P_.current=i},[i]),u(()=>{m_.current=B_},[B_]),u(()=>{q0.current=O},[O]),u(()=>{t0.current=L},[L]),u(()=>{p0.current=x},[x]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let V=()=>a_(E6());V();let F=window.matchMedia?.("(prefers-color-scheme: dark)"),k=()=>V();if(F?.addEventListener)F.addEventListener("change",k);else if(F?.addListener)F.addListener(k);let E=typeof MutationObserver<"u"?new MutationObserver(()=>V()):null;if(E?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)E?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(F?.removeEventListener)F.removeEventListener("change",k);else if(F?.removeListener)F.removeListener(k);E?.disconnect()}},[]),u(()=>{if(!L)return;let V=n_.current;if(!V)return;let F=requestAnimationFrame(()=>{try{V.focus(),V.select()}catch{}});return()=>cancelAnimationFrame(F)},[L]);let d$=async(V)=>{p(!0),T(null),I(null);try{let F=await P4(V,20000);T(F)}catch(F){T({error:F.message||"Failed to load preview"})}finally{p(!1)}};F_.current=d$;let A$=async()=>{if(!y0.current)return;try{let V=await Z2("",1,s_.current),F=D6(V.root,b_.current,s_.current);if(F===l_.current){w(!1);return}if(l_.current=F,h.current=V.root,!X_.current)X_.current=requestAnimationFrame(()=>{X_.current=0,K((k)=>W1(k,h.current)),w(!1)})}catch(V){t(V.message||"Failed to load workspace"),w(!1)}},c0=async(V)=>{if(!V)return;if(V_.current.has(V))return;V_.current.add(V);try{let F=await Z2(V,1,s_.current);K((k)=>Y1(k,V,F.root))}catch(F){t(F.message||"Failed to load workspace")}finally{V_.current.delete(V)}};C_.current=c0;let Z0=P(()=>{let V=O;if(!V)return".";let F=E_.current?.get(V);if(F&&F.type==="dir")return F.path;if(V==="."||!V.includes("/"))return".";let k=V.split("/");return k.pop(),k.join("/")||"."},[O]),K$=P((V)=>{let F=V?.closest?.(".workspace-row");if(!F)return null;let k=F.dataset.path,E=F.dataset.type;if(!k)return null;if(E==="dir")return k;if(k.includes("/")){let R=k.split("/");return R.pop(),R.join("/")||"."}return"."},[]),O0=P((V)=>{return K$(V?.target||null)},[K$]),N0=P((V)=>{e.current=V,G_(V)},[]),f_=P(()=>{let V=E0.current;if(V?.timer)clearTimeout(V.timer);E0.current={path:null,timer:0}},[]),R0=P((V)=>{if(!V||V==="."){f_();return}let F=E_.current?.get(V);if(!F||F.type!=="dir"){f_();return}if(b_.current?.has(V)){f_();return}if(E0.current?.path===V)return;f_();let k=setTimeout(()=>{E0.current={path:null,timer:0},C_.current?.(V),G((E)=>{let R=new Set(E);return R.add(V),R})},600);E0.current={path:V,timer:k}},[f_]),I0=P((V,F)=>{if(a0.current={x:V,y:F},j0.current)return;j0.current=requestAnimationFrame(()=>{j0.current=0;let k=A0.current;if(!k)return;let E=a0.current;k.style.transform=`translate(${E.x+12}px, ${E.y+12}px)`})},[]),z$=P((V)=>{if(!V)return;let k=(E_.current?.get(V)?.name||V.split("/").pop()||V).trim();if(!k)return;K_({path:V,label:k})},[]),J$=P(()=>{if(K_(null),j0.current)cancelAnimationFrame(j0.current),j0.current=0;if(A0.current)A0.current.style.transform="translate(-9999px, -9999px)"},[]),w$=P((V)=>{if(!V)return".";let F=E_.current?.get(V);if(F&&F.type==="dir")return F.path;if(V==="."||!V.includes("/"))return".";let k=V.split("/");return k.pop(),k.join("/")||"."},[]),H0=P(()=>{q(null),A("")},[]),M$=P((V)=>{if(!V)return;let k=(E_.current?.get(V)?.name||V.split("/").pop()||V).trim();if(!k||V===".")return;q(V),A(k)},[]),s$=P(async()=>{let V=t0.current;if(!V)return;let F=(H||"").trim();if(!F){H0();return}let k=E_.current?.get(V),E=(k?.name||V.split("/").pop()||V).trim();if(F===E){H0();return}try{let s=(await I4(V,F))?.path||V,r=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(H0(),t(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:V,newPath:s,type:k?.type||"file"}})),k?.type==="dir")G((d)=>{let g=new Set;for(let Y_ of d)if(Y_===V)g.add(s);else if(Y_.startsWith(`${V}/`))g.add(`${s}${Y_.slice(V.length)}`);else g.add(Y_);return g});if(W(s),k?.type==="dir")T(null),p(!1),I(null);else F_.current?.(s);C_.current?.(r)}catch(R){t(R?.message||"Failed to rename file")}},[H0,H]),D$=P(async(V)=>{let E=V||".";for(let R=0;R<50;R+=1){let r=`untitled${R===0?"":`-${R}`}.md`;try{let g=(await b4(E,r,""))?.path||(E==="."?r:`${E}/${r}`);if(E&&E!==".")G((Y_)=>new Set([...Y_,E]));W(g),t(null),C_.current?.(E),F_.current?.(g);return}catch(d){if(d?.status===409||d?.code==="file_exists")continue;t(d?.message||"Failed to create file");return}}t("Failed to create file (untitled name already in use).")},[]),u$=P((V)=>{if(V?.stopPropagation?.(),O_)return;let F=w$(q0.current);D$(F)},[O_,w$,D$]);u(()=>{if(typeof window>"u")return;let V=(F)=>{let k=F?.detail?.updates||[];if(!Array.isArray(k)||k.length===0)return;K((d)=>{let g=d;for(let Y_ of k){if(!Y_?.root)continue;if(!g||Y_.path==="."||!Y_.path)g=Y_.root;else g=Y1(g,Y_.path,Y_.root)}if(g)l_.current=D6(g,b_.current,s_.current);return w(!1),g});let E=q0.current;if(Boolean(E)&&k.some((d)=>{let g=d?.path||"";if(!g||g===".")return!0;return E===g||E.startsWith(`${g}/`)||g.startsWith(`${E}/`)}))k0.current.clear();if(!E||!p0.current)return;let s=E_.current?.get(E);if(s&&s.type==="dir")return;if(k.some((d)=>{let g=d?.path||"";if(!g||g===".")return!0;return E===g||E.startsWith(`${g}/`)}))F_.current?.(E)};return window.addEventListener("workspace-update",V),()=>window.removeEventListener("workspace-update",V)},[]),q_.current=A$;let V$=D(()=>{if(typeof window>"u")return;let V=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),F=U_.current??y0.current,k=document.visibilityState!=="hidden"&&(F||V.matches&&y0.current);N2(k,s_.current).catch(()=>{})}).current,t_=D(0),P$=D(()=>{if(t_.current)clearTimeout(t_.current);t_.current=setTimeout(()=>{t_.current=0,V$()},250)}).current;u(()=>{if(y0.current)q_.current?.();P$()},[$,j]),u(()=>{q_.current(),V$();let V=setInterval(()=>q_.current(),W5),F=i$("previewHeight",null),k=Number.isFinite(F)?Math.min(Math.max(F,80),600):280;if(W0.current=k,S_.current)S_.current.style.setProperty("--preview-height",`${k}px`);let E=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),R=()=>P$();if(E.addEventListener)E.addEventListener("change",R);else if(E.addListener)E.addListener(R);return document.addEventListener("visibilitychange",R),()=>{if(clearInterval(V),X_.current)cancelAnimationFrame(X_.current),X_.current=0;if(E.removeEventListener)E.removeEventListener("change",R);else if(E.removeListener)E.removeListener(R);if(document.removeEventListener("visibilitychange",R),t_.current)clearTimeout(t_.current),t_.current=0;if(I_.current)clearTimeout(I_.current),I_.current=null;N2(!1,s_.current).catch(()=>{})}},[]);let S0=i_(()=>A6(N,z,n),[N,z,n]),x0=i_(()=>new Map(S0.map((V)=>[V.node.path,V.node])),[S0]),Y$=i_(()=>J6(y_),[y_]);E_.current=x0;let L0=(O?E_.current.get(O):null)?.type==="dir";u(()=>{if(!O||!L0){k_(null),d_.current=null,T_.current=null;return}let V=O,F=`${n?"hidden":"visible"}:${O}`,k=k0.current,E=k.get(F);if(E?.root){k.delete(F),k.set(F,E);let r=k6(E.root,Boolean(E.truncated),w_);if(r)d_.current=r,T_.current=O,k_({loading:!1,error:null,payload:r});return}let R=d_.current,s=T_.current;k_({loading:!0,error:null,payload:s===O?R:null}),Z2(O,X5,n).then((r)=>{if(q0.current!==V)return;let d={root:r?.root,truncated:Boolean(r?.truncated)};k.delete(F),k.set(F,d);while(k.size>O5){let Y_=k.keys().next().value;if(!Y_)break;k.delete(Y_)}let g=k6(d.root,d.truncated,w_);d_.current=g,T_.current=O,k_({loading:!1,error:null,payload:g})}).catch((r)=>{if(q0.current!==V)return;k_({loading:!1,error:r?.message||"Failed to load folder size chart",payload:s===O?R:null})})},[O,L0,n,w_]);let C$=Boolean(x&&x.kind==="text"&&!L0&&(!x.size||x.size<=262144)),G$=C$?"Open in editor":x?.size>262144?"File too large to edit":"File is not editable";u(()=>{let V=C0.current;if(p_.current)p_.current.dispose(),p_.current=null;if(!V)return;if(V.innerHTML="",!O||L0||!x||x.error)return;let F={path:O,content:typeof x.text==="string"?x.text:void 0,mtime:x.mtime,size:x.size,preview:x,mode:"view"},k=e_.resolve(F)||e_.get("workspace-preview-default");if(!k)return;let E=k.mount(V,F);return p_.current=E,()=>{if(p_.current===E)E.dispose(),p_.current=null;V.innerHTML=""}},[O,L0,x]);let W$=(V)=>{let F=V?.target;if(F instanceof Element)return F;return F?.parentElement||null},b$=(V)=>{return Boolean(V?.closest?.(".workspace-node-icon, .workspace-label-text"))},h0=D((V)=>{if(g0.current)clearTimeout(g0.current),g0.current=null;let k=W$(V)?.closest?.("[data-path]");if(!k)return;let E=k.dataset.path;if(k.dataset.type==="dir"||!E)return;if(t0.current===E)H0();v_.current?.(E)}).current,e0=D((V)=>{if(F0.current){F0.current=!1;return}let F=W$(V),k=F?.closest?.("[data-path]");if(G0.current?.focus?.(),!k)return;let E=k.dataset.path,R=k.dataset.type,s=Boolean(F?.closest?.(".workspace-caret")),r=Boolean(F?.closest?.("button"))||Boolean(F?.closest?.("a"))||Boolean(F?.closest?.("input")),d=q0.current===E,g=t0.current;if(g){if(g===E)return;H0()}let Y_=R==="file"&&b0.current===E&&!s&&!r;if(d&&!s&&!r&&E!=="."&&!Y_){if(g0.current)clearTimeout(g0.current);g0.current=setTimeout(()=>{g0.current=null,M$(E)},350);return}if(R==="dir"){if(b0.current=null,W(E),T(null),I(null),p(!1),!b_.current.has(E))C_.current?.(E);if(d&&!s)return;G((B0)=>{let M0=new Set(B0);if(M0.has(E))M0.delete(E);else M0.add(E);return M0})}else{b0.current=null,W(E);let D0=E_.current.get(E);if(D0)M_.current?.(D0.path,D0);F_.current?.(E)}}).current,T0=D(()=>{l_.current="",q_.current(),Array.from(b_.current||[]).filter((F)=>F&&F!==".").forEach((F)=>C_.current?.(F))}).current,_$=D(()=>{b0.current=null,W(null),T(null),I(null),p(!1)}).current,I$=D(()=>{N_((V)=>{let F=!V;if(typeof window<"u")r_("workspaceShowHidden",String(F));return s_.current=F,N2(!0,F).catch(()=>{}),l_.current="",q_.current?.(),Array.from(b_.current||[]).filter((E)=>E&&E!==".").forEach((E)=>C_.current?.(E)),F})}).current,S$=D((V)=>{if(W$(V)?.closest?.("[data-path]"))return;_$()}).current,$$=P(async(V)=>{if(!V)return;let F=V.split("/").pop()||V;if(!window.confirm(`Delete "${F}"? This cannot be undone.`))return;try{await x4(V);let E=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(q0.current===V)_$();C_.current?.(E),t(null)}catch(E){T((R)=>({...R||{},error:E.message||"Failed to delete file"}))}},[_$]),L$=P((V)=>{let F=G0.current;if(!F||!V||typeof CSS>"u"||typeof CSS.escape!=="function")return;F.querySelector(`[data-path="${CSS.escape(V)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),o$=P((V)=>{let F=S0;if(!F||F.length===0)return;let k=O?F.findIndex((E)=>E.node.path===O):-1;if(V.key==="ArrowDown"){V.preventDefault();let E=Math.min(k+1,F.length-1),R=F[E];if(!R)return;if(W(R.node.path),R.node.type!=="dir")M_.current?.(R.node.path,R.node),F_.current?.(R.node.path);else T(null),p(!1),I(null);L$(R.node.path);return}if(V.key==="ArrowUp"){V.preventDefault();let E=k<=0?0:k-1,R=F[E];if(!R)return;if(W(R.node.path),R.node.type!=="dir")M_.current?.(R.node.path,R.node),F_.current?.(R.node.path);else T(null),p(!1),I(null);L$(R.node.path);return}if(V.key==="ArrowRight"&&k>=0){let E=F[k];if(E?.node?.type==="dir"&&!z.has(E.node.path))V.preventDefault(),C_.current?.(E.node.path),G((R)=>new Set([...R,E.node.path]));return}if(V.key==="ArrowLeft"&&k>=0){let E=F[k];if(E?.node?.type==="dir"&&z.has(E.node.path))V.preventDefault(),G((R)=>{let s=new Set(R);return s.delete(E.node.path),s});return}if(V.key==="Enter"&&k>=0){V.preventDefault();let E=F[k];if(!E)return;let R=E.node.path;if(E.node.type==="dir"){if(!b_.current.has(R))C_.current?.(R);G((r)=>{let d=new Set(r);if(d.has(R))d.delete(R);else d.add(R);return d}),T(null),I(null),p(!1)}else M_.current?.(R,E.node),F_.current?.(R);return}if((V.key==="Delete"||V.key==="Backspace")&&k>=0){let E=F[k];if(!E||E.node.type==="dir")return;V.preventDefault(),$$(E.node.path);return}if(V.key==="Escape")V.preventDefault(),_$()},[_$,$$,z,S0,L$,O]),w0=P((V)=>{let F=W$(V),k=F?.closest?.(".workspace-row");if(!k)return;let E=k.dataset.type,R=k.dataset.path;if(!R||R===".")return;if(t0.current===R)return;let s=V?.touches?.[0];if(!s)return;if($0.current={path:b$(F)?R:null,dragging:!1,startX:s.clientX,startY:s.clientY},E!=="file")return;if(I_.current)clearTimeout(I_.current);I_.current=setTimeout(()=>{if(I_.current=null,$0.current?.dragging)return;$$(R)},600)},[$$]),U=P(()=>{if(I_.current)clearTimeout(I_.current),I_.current=null;let V=$0.current;if(V?.dragging&&V.path){let F=e.current||Z0(),k=X0.current;if(typeof k==="function")k(V.path,F)}$0.current={path:null,dragging:!1,startX:0,startY:0},b.current=0,Q_(!1),o(null),N0(null),f_(),J$()},[Z0,J$,N0,f_]),S=P((V)=>{let F=$0.current,k=V?.touches?.[0];if(!k||!F?.path){if(I_.current)clearTimeout(I_.current),I_.current=null;return}let E=Math.abs(k.clientX-F.startX),R=Math.abs(k.clientY-F.startY),s=E>8||R>8;if(s&&I_.current)clearTimeout(I_.current),I_.current=null;if(!F.dragging&&s)F.dragging=!0,Q_(!0),o("move"),z$(F.path);if(F.dragging){V.preventDefault(),I0(k.clientX,k.clientY);let r=document.elementFromPoint(k.clientX,k.clientY),d=K$(r)||Z0();if(e.current!==d)N0(d);R0(d)}},[K$,Z0,z$,I0,N0,R0]),l=D((V)=>{V.preventDefault();let F=S_.current;if(!F)return;let k=V.clientY,E=W0.current||280,R=V.currentTarget;R.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let s=k,r=(g)=>{s=g.clientY;let Y_=F.clientHeight-80,D0=Math.min(Math.max(E-(g.clientY-k),80),Y_);F.style.setProperty("--preview-height",`${D0}px`),W0.current=D0},d=()=>{let g=F.clientHeight-80,Y_=Math.min(Math.max(E-(s-k),80),g);W0.current=Y_,R.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("previewHeight",String(Math.round(Y_))),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",d)}).current,z_=D((V)=>{V.preventDefault();let F=S_.current;if(!F)return;let k=V.touches[0];if(!k)return;let E=k.clientY,R=W0.current||280,s=V.currentTarget;s.classList.add("dragging"),document.body.style.userSelect="none";let r=(g)=>{let Y_=g.touches[0];if(!Y_)return;g.preventDefault();let D0=F.clientHeight-80,B0=Math.min(Math.max(R-(Y_.clientY-E),80),D0);F.style.setProperty("--preview-height",`${B0}px`),W0.current=B0},d=()=>{s.classList.remove("dragging"),document.body.style.userSelect="",r_("previewHeight",String(Math.round(W0.current||R))),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",d),document.removeEventListener("touchcancel",d)};document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",d),document.addEventListener("touchcancel",d)}).current,A_=async()=>{if(!O)return;try{let V=await C4(O);if(V.media_id)I(V.media_id)}catch(V){T((F)=>({...F||{},error:V.message||"Failed to attach"}))}},o_=async()=>{if(!O||L0)return;await $$(O)},H_=(V)=>{return Array.from(V?.dataTransfer?.types||[]).includes("Files")},K0=P((V)=>{if(!H_(V))return;if(V.preventDefault(),b.current+=1,!P_.current)Q_(!0);o("upload");let F=O0(V)||Z0();N0(F),R0(F)},[Z0,O0,N0,R0]),i0=P((V)=>{if(!H_(V))return;if(V.preventDefault(),V.dataTransfer)V.dataTransfer.dropEffect="copy";if(!P_.current)Q_(!0);if(m_.current!=="upload")o("upload");let F=O0(V)||Z0();if(e.current!==F)N0(F);R0(F)},[Z0,O0,N0,R0]),E$=P((V)=>{if(!H_(V))return;if(V.preventDefault(),b.current=Math.max(0,b.current-1),b.current===0)Q_(!1),o(null),N0(null),f_()},[N0,f_]),u0=P(async(V,F=".")=>{let k=Array.from(V||[]);if(k.length===0)return;let E=F&&F!==""?F:".",R=E!=="."?E:"workspace root";D_(!0);try{let s=null;for(let r of k)try{s=await C2(r,E)}catch(d){let g=d?.status,Y_=d?.code;if(g===409||Y_==="file_exists"){let D0=r?.name||"file";if(!window.confirm(`"${D0}" already exists in ${R}. Overwrite?`))continue;s=await C2(r,E,{overwrite:!0})}else throw d}if(s?.path)b0.current=s.path,W(s.path),F_.current?.(s.path);C_.current?.(E)}catch(s){t(s.message||"Failed to upload file")}finally{D_(!1)}},[]),X$=P(async(V,F)=>{if(!V)return;let k=E_.current?.get(V);if(!k)return;let E=F&&F!==""?F:".",R=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(E===R)return;try{let r=(await S4(V,E))?.path||V;if(k.type==="dir")G((d)=>{let g=new Set;for(let Y_ of d)if(Y_===V)g.add(r);else if(Y_.startsWith(`${V}/`))g.add(`${r}${Y_.slice(V.length)}`);else g.add(Y_);return g});if(W(r),k.type==="dir")T(null),p(!1),I(null);else F_.current?.(r);C_.current?.(R),C_.current?.(E)}catch(s){t(s?.message||"Failed to move entry")}},[]);X0.current=X$;let O$=P(async(V)=>{if(!H_(V))return;V.preventDefault(),b.current=0,Q_(!1),o(null),G_(null),f_();let F=Array.from(V?.dataTransfer?.files||[]);if(F.length===0)return;let k=e.current||O0(V)||Z0();await u0(F,k)},[Z0,O0,u0]),l0=P((V)=>{if(V?.stopPropagation?.(),O_)return;let F=V?.currentTarget?.dataset?.uploadTarget||".";U0.current=F,_0.current?.click()},[O_]),q$=P(()=>{if(O_)return;let V=q0.current,F=V?E_.current?.get(V):null;U0.current=F?.type==="dir"?F.path:".",_0.current?.click()},[O_]),J0=P((V)=>{if(!V||V.button!==0)return;let F=V.currentTarget;if(!F||!F.dataset)return;let k=F.dataset.path;if(!k||k===".")return;if(t0.current===k)return;let E=W$(V);if(E?.closest?.("button, a, input, .workspace-caret"))return;if(!b$(E))return;V.preventDefault(),Q0.current={path:k,dragging:!1,startX:V.clientX,startY:V.clientY};let R=(r)=>{let d=Q0.current;if(!d?.path)return;let g=Math.abs(r.clientX-d.startX),Y_=Math.abs(r.clientY-d.startY),D0=g>4||Y_>4;if(!d.dragging&&D0)d.dragging=!0,F0.current=!0,Q_(!0),o("move"),z$(d.path),I0(r.clientX,r.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(d.dragging){r.preventDefault(),I0(r.clientX,r.clientY);let B0=document.elementFromPoint(r.clientX,r.clientY),M0=K$(B0)||Z0();if(e.current!==M0)N0(M0);R0(M0)}},s=()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",s);let r=Q0.current;if(r?.dragging&&r.path){let d=e.current||Z0(),g=X0.current;if(typeof g==="function")g(r.path,d)}Q0.current={path:null,dragging:!1,startX:0,startY:0},b.current=0,Q_(!1),o(null),N0(null),f_(),J$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{F0.current=!1},0)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",s)},[K$,Z0,z$,I0,J$,N0,R0,f_]),x$=P(async(V)=>{let F=Array.from(V?.target?.files||[]);if(F.length===0)return;let k=U0.current||".";if(await u0(F,k),U0.current=".",V?.target)V.target.value=""},[u0]);return B`
        <aside
            class=${`workspace-sidebar${i?" workspace-drop-active":""}`}
            data-workspace-scale=${y_}
            ref=${S_}
            onDragEnter=${K0}
            onDragOver=${i0}
            onDragLeave=${E$}
            onDrop=${O$}
        >
            <input type="file" multiple style="display:none" ref=${_0} onChange=${x$} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${u$} title="New file" disabled=${O_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${T0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${n?" active":""}`}
                        onClick=${I$}
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
            <div class="workspace-tree" onClick=${S$}>
                ${O_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${Q&&B`<div class="workspace-loading">Loading…</div>`}
                ${a&&B`<div class="workspace-error">${a}</div>`}
                ${N&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${G0}
                        tabIndex="0"
                        onClick=${e0}
                        onDblClick=${h0}
                        onKeyDown=${o$}
                        onTouchStart=${w0}
                        onTouchEnd=${U}
                        onTouchMove=${S}
                        onTouchCancel=${U}
                    >
                        ${S0.map(({node:V,depth:F})=>{let k=V.type==="dir",E=V.path===O,R=V.path===L,s=k&&z.has(V.path),r=j_&&V.path===j_,d=Array.isArray(V.children)&&V.children.length>0?V.children.length:Number(V.child_count)||0;return B`
                                <div
                                    key=${V.path}
                                    class=${`workspace-row${E?" selected":""}${r?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+F*Y$.indentPx}px`}}
                                    data-path=${V.path}
                                    data-type=${V.type}
                                    onMouseDown=${J0}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${k?s?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${k?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${k?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${R?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${n_}
                                                value=${H}
                                                onInput=${(g)=>A(g?.target?.value||"")}
                                                onKeyDown=${(g)=>{if(g.key==="Enter")g.preventDefault(),s$();else if(g.key==="Escape")g.preventDefault(),H0()}}
                                                onBlur=${H0}
                                                onClick=${(g)=>g.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${V.name}</span></span>`}
                                    ${k&&!s&&d>0&&B`
                                        <span class="workspace-count">${d}</span>
                                    `}
                                    ${k&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${V.path}
                                            title="Upload files to this folder"
                                            onClick=${l0}
                                            disabled=${O_}
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
            ${O&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${l} onTouchStart=${z_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${O}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${u$} title="New file" disabled=${O_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!L0&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>C$&&v_.current?.(O,x)}
                                    title=${G$}
                                    disabled=${!C$}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${o_}
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
                            ${L0?B`
                                    <button class="workspace-download" onClick=${q$}
                                        title="Upload files to this folder" disabled=${O_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${T4(O,n)}
                                        title="Download folder as zip" onClick=${(V)=>V.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${A_} title="Download">
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
                    ${x?.error&&B`<div class="workspace-error">${x.error}</div>`}
                    ${L0&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${Z_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${Z_?.error&&B`<div class="workspace-error">${Z_.error}</div>`}
                        ${Z_?.payload&&Z_.payload.segments?.length>0&&B`
                            <${q5} payload=${Z_.payload} />
                        `}
                        ${Z_?.payload&&(!Z_.payload.segments||Z_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${x&&!x.error&&!L0&&B`
                        <div class="workspace-preview-body" ref=${C0}></div>
                    `}
                    ${v&&B`
                        <div class="workspace-download-card">
                            <${V5} mediaId=${v} />
                        </div>
                    `}
                </div>
            `}
            ${__&&B`
                <div class="workspace-drag-ghost" ref=${A0}>${__.label}</div>
            `}
        </aside>
    `}var L5=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf|csv)$/i,B5=/\.drawio(\.xml|\.svg|\.png)?$/i;function T6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:z,onTogglePreview:G,previewTabs:O,onToggleDock:W,dockVisible:L}){let[q,H]=f(null),A=D(null);u(()=>{if(!q)return;let Q=(w)=>{if(w.type==="keydown"&&w.key!=="Escape")return;H(null)};return document.addEventListener("click",Q),document.addEventListener("keydown",Q),()=>{document.removeEventListener("click",Q),document.removeEventListener("keydown",Q)}},[q]),u(()=>{let Q=(w)=>{if(w.ctrlKey&&w.key==="Tab"){if(w.preventDefault(),!_.length)return;let C=_.findIndex((p)=>p.id===$);if(w.shiftKey){let p=_[(C-1+_.length)%_.length];j?.(p.id)}else{let p=_[(C+1)%_.length];j?.(p.id)}return}if((w.ctrlKey||w.metaKey)&&w.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(w.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[_,$,j,Z]);let x=P((Q,w)=>{if(Q.button===1){Q.preventDefault(),Z?.(w);return}if(Q.button===0)j?.(w)},[j,Z]),T=P((Q,w)=>{Q.preventDefault(),H({id:w,x:Q.clientX,y:Q.clientY})},[]),v=P((Q)=>{Q.preventDefault(),Q.stopPropagation()},[]),I=P((Q,w)=>{Q.preventDefault(),Q.stopPropagation(),Z?.(w)},[Z]);if(u(()=>{if(!$||!A.current)return;let Q=A.current.querySelector(".tab-item.active");if(Q)Q.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${A} role="tablist">
            ${_.map((Q)=>B`
                <div
                    key=${Q.id}
                    class=${`tab-item${Q.id===$?" active":""}${Q.dirty?" dirty":""}${Q.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${Q.id===$}
                    title=${Q.path}
                    onMouseDown=${(w)=>x(w,Q.id)}
                    onContextMenu=${(w)=>T(w,Q.id)}
                >
                    ${Q.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${Q.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${v}
                        onClick=${(w)=>I(w,Q.id)}
                        title=${Q.dirty?"Unsaved changes":"Close"}
                        aria-label=${Q.dirty?"Unsaved changes":`Close ${Q.label}`}
                    >
                        ${Q.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${W&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${L?" active":""}`}
                    onClick=${W}
                    title=${`${L?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${L?"Hide":"Show"} terminal`}
                    aria-pressed=${L?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${q&&B`
            <div class="tab-context-menu" style=${{left:q.x+"px",top:q.y+"px"}}>
                <button onClick=${()=>{Z?.(q.id),H(null)}}>Close</button>
                <button onClick=${()=>{N?.(q.id),H(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),H(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(q.id),H(null)}}>
                    ${_.find((Q)=>Q.id===q.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{G(q.id),H(null)}}>
                        ${O?.has(q.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${L5.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let Q="/workspace/raw?path="+encodeURIComponent(q.id),w=q.id.split("/").pop()||"document",C="/office-viewer/?url="+encodeURIComponent(Q)+"&name="+encodeURIComponent(w);window.open(C,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${B5.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let Q="/drawio/edit?path="+encodeURIComponent(q.id);window.open(Q,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var U5=400,O1=60,f6=220,q1="mdPreviewHeight";function Q5(){try{let _=localStorage.getItem(q1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=O1?$:f6}catch{return f6}}function R6({getContent:_,path:$,onClose:j}){let[Z,N]=f(""),[K,z]=f(Q5),G=D(null),O=D(null),W=D(""),L=D(_);return L.current=_,u(()=>{let A=()=>{let T=L.current?.()||"";if(T===W.current)return;W.current=T;try{let v=m0(T,null,{sanitize:!1});N(v)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};A();let x=setInterval(A,U5);return()=>clearInterval(x)},[]),u(()=>{if(G.current&&Z)F$(G.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(A)=>{A.preventDefault();let x=A.clientY,T=O.current?.offsetHeight||K,v=O.current?.parentElement,I=v?v.offsetHeight*0.7:500,Q=A.currentTarget;Q.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let w=(p)=>{let a=Math.min(Math.max(T-(p.clientY-x),O1),I);z(a)},C=()=>{Q.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(q1,String(Math.round(O.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",w),document.addEventListener("mouseup",C)}}
            onTouchStart=${(A)=>{A.preventDefault();let x=A.touches[0];if(!x)return;let T=x.clientY,v=O.current?.offsetHeight||K,I=O.current?.parentElement,Q=I?I.offsetHeight*0.7:500,w=A.currentTarget;w.classList.add("dragging"),document.body.style.userSelect="none";let C=(a)=>{let t=a.touches[0];if(!t)return;a.preventDefault();let n=Math.min(Math.max(v-(t.clientY-T),O1),Q);z(n)},p=()=>{w.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(q1,String(Math.round(O.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}}
        ></div>
        <div class="md-preview-panel" ref=${O} style=${{height:K+"px"}}>
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
                ref=${G}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function u6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=D(_);K.current=_;let z=D($);z.current=$;let G=D(j);G.current=j;let O=D(Z);O.current=Z,u(()=>{G.current();let W=new I2((q,H)=>K.current(q,H),(q)=>z.current(q),{chatJid:N});W.connect();let L=()=>{W.reconnectIfNeeded();let q=typeof document<"u"?document:null;if(!q||q.visibilityState==="visible")O.current?.()};return window.addEventListener("focus",L),document.addEventListener("visibilitychange",L),()=>{window.removeEventListener("focus",L),document.removeEventListener("visibilitychange",L),W.disconnect()}},[N])}function v6(){let[_,$]=f(!1),[j,Z]=f("default"),N=D(!1);u(()=>{let O=h$("notificationsEnabled",!1);if(N.current=O,$(O),typeof Notification<"u")Z(Notification.permission)},[]),u(()=>{N.current=_},[_]);let K=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let O=Notification.requestPermission();if(O&&typeof O.then==="function")return O;return Promise.resolve(O)}catch{return Promise.resolve("default")}},[]),z=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let W=await K();if(Z(W||"default"),W!=="granted"){N.current=!1,$(!1),r_("notificationsEnabled","false");return}}let O=!N.current;N.current=O,$(O),r_("notificationsEnabled",String(O))},[K]),G=P((O,W)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let L=new Notification(O,{body:W});return L.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:G}}var X2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function m6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=f(null),[K,z]=f(!1),G=D(!1),O=D(null),W=D(!1),L=D(null),q=D(null),H=D(0);u(()=>{G.current=K},[K]),u(()=>{q.current=Z},[Z]),u(()=>{H.current+=1,q.current=null,L.current=null,W.current=!1,G.current=!1,N(null),z(!1)},[j]);let A=P(async(v=null)=>{let I=H.current;try{if(v){let Q=await V4(v,50,0,j);if(I!==H.current)return;N(Q.posts),z(!1)}else{let Q=await $2(10,null,j);if(I!==H.current)return;N(Q.posts),z(Q.has_more)}}catch(Q){if(I!==H.current)return;console.error("Failed to load posts:",Q)}},[j]),x=P(async()=>{let v=H.current;try{let I=await $2(10,null,j);if(v!==H.current)return;N((Q)=>{if(!Q||Q.length===0)return I.posts;return X2([...I.posts,...Q])}),z((Q)=>Q||I.has_more)}catch(I){if(v!==H.current)return;console.error("Failed to refresh timeline:",I)}},[j]),T=P(async(v={})=>{let I=H.current,Q=q.current;if(!Q||Q.length===0)return;if(W.current)return;let{preserveScroll:w=!0,preserveMode:C="top",allowRepeat:p=!1}=v,a=(N_)=>{if(!w){N_();return}if(C==="top")$(N_);else _(N_)},n=Q.slice().sort((N_,i)=>N_.id-i.id)[0]?.id;if(!Number.isFinite(n))return;if(!p&&L.current===n)return;W.current=!0,L.current=n;try{let N_=await $2(10,n,j);if(I!==H.current)return;if(N_.posts.length>0)a(()=>{N((i)=>X2([...N_.posts,...i||[]])),z(N_.has_more)});else z(!1)}catch(N_){if(I!==H.current)return;console.error("Failed to load more posts:",N_)}finally{if(I===H.current)W.current=!1}},[j,_,$]);return u(()=>{O.current=T},[T]),{posts:Z,setPosts:N,hasMore:K,setHasMore:z,hasMoreRef:G,loadPosts:A,refreshTimeline:x,loadMore:T,loadMoreRef:O,loadingMoreRef:W,lastBeforeIdRef:L}}function g6(){let[_,$]=f(null),[j,Z]=f({text:"",totalLines:0}),[N,K]=f(""),[z,G]=f({text:"",totalLines:0}),[O,W]=f(null),[L,q]=f(null),[H,A]=f(null),x=D(null),T=D(0),v=D(!1),I=D(""),Q=D(""),w=D(null),C=D(null),p=D(null),a=D(null),t=D(!1),n=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:z,setAgentThought:G,pendingRequest:O,setPendingRequest:W,currentTurnId:L,setCurrentTurnId:q,steerQueuedTurnId:H,setSteerQueuedTurnId:A,lastAgentEventRef:x,lastSilenceNoticeRef:T,isAgentRunningRef:v,draftBufferRef:I,thoughtBufferRef:Q,pendingRequestRef:w,stalledPostIdRef:C,currentTurnIdRef:p,steerQueuedTurnIdRef:a,thoughtExpandedRef:t,draftExpandedRef:n}}function p6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientX,A=$.current||280,x=L.currentTarget;x.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=H,v=(Q)=>{T=Q.clientX;let w=Math.min(Math.max(A+(Q.clientX-H),160),600);q.style.setProperty("--sidebar-width",`${w}px`),$.current=w},I=()=>{let Q=Math.min(Math.max(A+(T-H),160),600);$.current=Q,x.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",r_("sidebarWidth",String(Math.round(Q))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",I)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",I)}).current,K=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let A=H.clientX,x=$.current||280,T=L.currentTarget;T.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let v=(Q)=>{let w=Q.touches[0];if(!w)return;Q.preventDefault();let C=Math.min(Math.max(x+(w.clientX-A),160),600);q.style.setProperty("--sidebar-width",`${C}px`),$.current=C},I=()=>{T.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.userSelect="",r_("sidebarWidth",String(Math.round($.current||x))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",I),document.removeEventListener("touchcancel",I)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",I),document.addEventListener("touchcancel",I)}).current,z=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientX,A=j.current||$.current||280,x=L.currentTarget;x.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=H,v=(Q)=>{T=Q.clientX;let w=Math.min(Math.max(A+(Q.clientX-H),200),800);q.style.setProperty("--editor-width",`${w}px`),j.current=w},I=()=>{let Q=Math.min(Math.max(A+(T-H),200),800);j.current=Q,x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("editorWidth",String(Math.round(Q))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",I)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",I)}).current,G=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let A=H.clientX,x=j.current||$.current||280,T=L.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let v=(Q)=>{let w=Q.touches[0];if(!w)return;Q.preventDefault();let C=Math.min(Math.max(x+(w.clientX-A),200),800);q.style.setProperty("--editor-width",`${C}px`),j.current=C},I=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",r_("editorWidth",String(Math.round(j.current||x))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",I),document.removeEventListener("touchcancel",I)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",I),document.addEventListener("touchcancel",I)}).current,O=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientY,A=Z?.current||200,x=L.currentTarget;x.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let T=H,v=(Q)=>{T=Q.clientY;let w=Math.min(Math.max(A-(Q.clientY-H),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${w}px`),Z)Z.current=w;window.dispatchEvent(new CustomEvent("dock-resize"))},I=()=>{let Q=Math.min(Math.max(A-(T-H),100),window.innerHeight*0.5);if(Z)Z.current=Q;x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("dockHeight",String(Math.round(Q))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",I)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",I)}).current,W=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let A=H.clientY,x=Z?.current||200,T=L.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let v=(Q)=>{let w=Q.touches[0];if(!w)return;Q.preventDefault();let C=Math.min(Math.max(x-(w.clientY-A),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${C}px`),Z)Z.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},I=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",r_("dockHeight",String(Math.round(Z?.current||x))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",I),document.removeEventListener("touchcancel",I)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",I),document.addEventListener("touchcancel",I)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:O,handleDockSplitterTouchStart:W}}function c6({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=f(()=>R_.getTabs()),[N,K]=f(()=>R_.getActiveId()),[z,G]=f(()=>R_.getTabs().length>0);u(()=>{return R_.onChange((C,p)=>{Z(C),K(p),G(C.length>0)})},[]);let[O,W]=f(()=>new Set),L=P((C)=>{W((p)=>{let a=new Set(p);if(a.has(C))a.delete(C);else a.add(C);return a})},[]),q=P((C)=>{W((p)=>{if(!p.has(C))return p;let a=new Set(p);return a.delete(C),a})},[]),H=P((C)=>{if(!C)return;let p={path:C,mode:"edit"};try{if(!e_.resolve(p)){if(!e_.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(a){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,a)}R_.open(C)},[]),A=P(()=>{let C=R_.getActiveId();if(C){let p=R_.get(C);if(p?.dirty){if(!window.confirm(`"${p.label}" has unsaved changes. Close anyway?`))return}R_.close(C),q(C),$.current?.(C)}},[q]),x=P((C)=>{let p=R_.get(C);if(p?.dirty){if(!window.confirm(`"${p.label}" has unsaved changes. Close anyway?`))return}R_.close(C),q(C),$.current?.(C)},[q]),T=P((C)=>{R_.activate(C)},[]),v=P((C)=>{let p=R_.getTabs().filter((n)=>n.id!==C&&!n.pinned),a=p.filter((n)=>n.dirty).length;if(a>0){if(!window.confirm(`${a} unsaved tab${a>1?"s":""} will be closed. Continue?`))return}let t=p.map((n)=>n.id);R_.closeOthers(C),t.forEach((n)=>{q(n),$.current?.(n)})},[q]),I=P(()=>{let C=R_.getTabs().filter((t)=>!t.pinned),p=C.filter((t)=>t.dirty).length;if(p>0){if(!window.confirm(`${p} unsaved tab${p>1?"s":""} will be closed. Continue?`))return}let a=C.map((t)=>t.id);R_.closeAll(),a.forEach((t)=>{q(t),$.current?.(t)})},[q]),Q=P((C)=>{R_.togglePin(C)},[]),w=P(()=>{let C=R_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return u(()=>{let C=(p)=>{let{oldPath:a,newPath:t,type:n}=p.detail||{};if(!a||!t)return;if(n==="dir"){for(let N_ of R_.getTabs())if(N_.path===a||N_.path.startsWith(`${a}/`)){let i=`${t}${N_.path.slice(a.length)}`;R_.rename(N_.id,i)}}else R_.rename(a,t)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),u(()=>{let C=(p)=>{if(R_.hasUnsaved())p.preventDefault(),p.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:O,openEditor:H,closeEditor:A,handleTabClose:x,handleTabActivate:T,handleTabCloseOthers:v,handleTabCloseAll:I,handleTabTogglePin:Q,handleTabTogglePreview:L,revealInExplorer:w}}function V1(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var L1=V1("warning",30000),h6=V1("finalize",120000),B1=V1("refresh",30000),i6=30000;function l6(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function n6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function d6(_=30000){let[,$]=f(0);u(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function U1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function s6(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function R$(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function Q1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||z)}function o6(_,$={}){if(R$($))return null;if(Q1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:F5(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function r6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function a6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function t6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function e6(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function O2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function _7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function F5(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function F1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function H1(_){return String(_||"").trim()||"web:default"}function $7({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function j7(_={}){return R$(_)&&Q1(_)}function H5(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function J5(_={}){if(!j7(_))return null;let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j?.documentElement)return null;let Z=H5({window:$});if(Z&&Z>0)j.documentElement.style.setProperty("--app-height",`${Z}px`);try{if(typeof $.scrollTo==="function")$.scrollTo(0,0)}catch{}try{if(j.scrollingElement)j.scrollingElement.scrollTop=0,j.scrollingElement.scrollLeft=0;if(j.documentElement)j.documentElement.scrollTop=0,j.documentElement.scrollLeft=0;if(j.body)j.body.scrollTop=0,j.body.scrollLeft=0}catch{}return Z}function Z7(_={}){if(!j7(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let q of N)$.clearTimeout?.(q);N.clear()},z=()=>{Z=0,J5({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},O=()=>{G();for(let q of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),G()},q);if(H!=null)N.add(H)}},W=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;O()},L=$.visualViewport;return O(),$.addEventListener("focus",O),$.addEventListener("pageshow",O),$.addEventListener("resize",O),$.addEventListener("orientationchange",O),j.addEventListener("visibilitychange",W),j.addEventListener("focusin",O,!0),L?.addEventListener?.("resize",O),L?.addEventListener?.("scroll",O),()=>{K(),$.removeEventListener("focus",O),$.removeEventListener("pageshow",O),$.removeEventListener("resize",O),$.removeEventListener("orientationchange",O),j.removeEventListener("visibilitychange",W),j.removeEventListener("focusin",O,!0),L?.removeEventListener?.("resize",O),L?.removeEventListener?.("scroll",O)}}function D5(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function N$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:D5($,j)}var E5=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function N7(_){return E5.has(String(_||"").trim())}function k5(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function K7(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(k5(_),{detail:Z})),!0}var y5=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function z7(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(R$({window:j,navigator:Z}))};N();let z=y5.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",N),()=>G.removeEventListener("change",N);if(typeof G.addListener==="function")return G.addListener(N),()=>G.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let G of z)G();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function Y7(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var D1="piclaw_btw_session";function A5(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function w5(){let _=o0(D1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var G7=L4,W7=U4,M5=F4,X7=k4,O7=y4,q7=H4,J1=N$(s0,"getAgentContext",null),P5=N$(s0,"getAgentModels",{current:null,models:[]}),C5=N$(s0,"getActiveChatAgents",{chats:[]}),V7=N$(s0,"getChatBranches",{chats:[]}),b5=N$(s0,"renameChatBranch",null),I5=N$(s0,"pruneChatBranch",null),S5=N$(s0,"getAgentQueueState",{count:0}),x5=N$(s0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),T5=N$(s0,"removeAgentQueueItem",{removed:!1}),f5=N$(s0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});e_.register(o4);e_.register($1);e_.register(_1);e_.register(j1);e_.register(Z1);r4();e_.register(t4);function R5({locationParams:_}){let $=i_(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),j=i_(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Z=i_(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),N=i_(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():$},[$,_]),[K,z]=f("disconnected"),[G,O]=f(()=>R$()),[W,L]=f(null),[q,H]=f(null),[A,x]=f(!1),[T,v]=f("current"),[I,Q]=f([]),[w,C]=f([]),[p,a]=f(null),{agentStatus:t,setAgentStatus:n,agentDraft:N_,setAgentDraft:i,agentPlan:Q_,setAgentPlan:B_,agentThought:o,setAgentThought:__,pendingRequest:K_,setPendingRequest:j_,currentTurnId:G_,setCurrentTurnId:O_,steerQueuedTurnId:D_,setSteerQueuedTurnId:Z_,lastAgentEventRef:k_,lastSilenceNoticeRef:w_,isAgentRunningRef:a_,draftBufferRef:y_,thoughtBufferRef:u_,pendingRequestRef:b_,stalledPostIdRef:l_,currentTurnIdRef:h,steerQueuedTurnIdRef:X_,thoughtExpandedRef:V_,draftExpandedRef:q_}=g6(),[E_,M_]=f({}),[v_,F_]=f(null),[C_,S_]=f(null),[G0,n_]=f(!1),[_0,U0]=f(null),[I_,$0]=f([]),[Q0,E0]=f([]),[F0,W0]=f(null),[k0,d_]=f([]),[T_,C0]=f(!1),[p_,s_]=f(()=>w5()),y0=i_(()=>I_.find((X)=>X?.chat_jid===$)||null,[I_,$]),U_=i_(()=>Q0.find((X)=>X?.chat_jid===$)||y0||null,[y0,Q0,$]),b=U_?.root_chat_jid||y0?.root_chat_jid||$,e=A5(T),[P_,m_]=f(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),A0=k0.length,a0=D(new Set),j0=D([]),X0=D(new Set),q0=D({inFlight:!1,lastAttemptAt:0,turnId:null});a0.current=new Set(k0.map((X)=>X.row_id)),j0.current=k0;let{notificationsEnabled:t0,notificationPermission:b0,toggleNotifications:g0,notify:p0}=v6(),[d$,A$]=f(()=>new Set),[c0,Z0]=f(()=>h$("workspaceOpen",!0)),K$=D(null),{editorOpen:O0,tabStripTabs:N0,tabStripActiveId:f_,previewTabs:R0,openEditor:I0,closeEditor:z$,handleTabClose:J$,handleTabActivate:w$,handleTabCloseOthers:H0,handleTabCloseAll:M$,handleTabTogglePin:s$,handleTabTogglePreview:D$,revealInExplorer:u$}=c6({onTabClosed:(X)=>K$.current?.(X)}),V$=D(null),t_=D(null),P$=D(null),S0=D(null),x0=e_.getDockPanes().length>0,[Y$,q2]=f(!1),L0=P(()=>q2((X)=>!X),[]),C$=!j&&(O0||x0&&Y$);u(()=>{let X=V$.current;if(!X)return;if(t_.current)t_.current.dispose(),t_.current=null;let Y=f_;if(!Y)return;let J={path:Y,mode:"edit"},M=e_.resolve(J)||e_.get("editor");if(!M){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let y=M.mount(X,J);t_.current=y,y.onDirtyChange?.(($_)=>{R_.setDirty(Y,$_)}),y.onSaveRequest?.(()=>{}),y.onClose?.(()=>{z$()});let c=R_.getViewState(Y);if(c&&typeof y.restoreViewState==="function")requestAnimationFrame(()=>y.restoreViewState(c));if(typeof y.onViewStateChange==="function")y.onViewStateChange(($_)=>{R_.saveViewState(Y,$_)});return requestAnimationFrame(()=>y.focus()),()=>{if(t_.current===y)y.dispose(),t_.current=null}},[f_,z$]),u(()=>{let X=(Y)=>{let J=Y.detail?.path;if(J)I0(J)};return document.addEventListener("office-viewer:open-tab",X),()=>document.removeEventListener("office-viewer:open-tab",X)},[I0]),u(()=>{let X=P$.current;if(S0.current)S0.current.dispose(),S0.current=null;if(!X||!x0||!Y$)return;let Y=e_.getDockPanes()[0];if(!Y){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=Y.mount(X,{mode:"view"});return S0.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(S0.current===J)J.dispose(),S0.current=null}},[x0,Y$]);let[G$,W$]=f({name:"You",avatar_url:null,avatar_background:null}),b$=D(!1),h0=D(!1),e0=D(null),T0=D($),_$=D(new Map),I$=D($),S$=D(0),$$=D(0),L$=D({}),o$=D({name:null,avatar_url:null}),w0=D({currentHashtag:null,searchQuery:null}),U=D(null),S=D(null),l=D(0),z_=D(0),A_=D(0),o_=D(null),H_=D(null),K0=D(null),i0=D(null),E$=D(0),u0=D({title:null,avatarBase:null}),X$=D(null),O$=P(()=>{if(X$.current)clearTimeout(X$.current),X$.current=null;a(null)},[]);d6(30000),u(()=>{return D3()},[]),u(()=>{return z7(O)},[]),u(()=>{r_("workspaceOpen",String(c0))},[c0]),u(()=>{return Z7()},[]),u(()=>{return()=>{O$()}},[O$]),u(()=>{if(!p_){r_(D1,"");return}r_(D1,JSON.stringify({question:p_.question||"",answer:p_.answer||"",thinking:p_.thinking||"",error:p_.error||null,status:p_.status||"success"}))},[p_]),u(()=>{L$.current=E_||{}},[E_]),u(()=>{T0.current=$},[$]),u(()=>{o$.current=G$||{name:"You",avatar_url:null,avatar_background:null}},[G$]);let l0=P((X,Y,J=null)=>{if(typeof document>"u")return;let M=(X||"").trim()||"PiClaw";if(u0.current.title!==M){document.title=M;let m=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(m&&m.getAttribute("content")!==M)m.setAttribute("content",M);u0.current.title=M}let y=document.getElementById("dynamic-favicon");if(!y)return;let c=y.getAttribute("data-default")||y.getAttribute("href")||"/favicon.ico",$_=Y||c,J_=Y?`${$_}|${J||""}`:$_;if(u0.current.avatarBase!==J_){let m=Y?`${$_}${$_.includes("?")?"&":"?"}v=${J||Date.now()}`:$_;y.setAttribute("href",m),u0.current.avatarBase=J_}},[]),q$=P((X)=>{if(!X)return;Q((Y)=>Y.includes(X)?Y:[...Y,X])},[]),J0=P((X)=>{Q((Y)=>Y.filter((J)=>J!==X))},[]);K$.current=J0;let x$=P(()=>{Q([])},[]),V=P((X,Y=null,J="info",M=3000)=>{O$(),a({title:X,detail:Y||null,kind:J||"info"}),X$.current=setTimeout(()=>{a((y)=>y?.title===X?null:y)},M)},[O$]),F=P((X)=>{let Y=s6(X,{editorOpen:O0,resolvePane:(J)=>e_.resolve(J)});if(Y.kind==="open"){I0(Y.path);return}if(Y.kind==="toast")V(Y.title,Y.detail,Y.level)},[O0,I0,V]),k=P(()=>{let X=f_;if(X)q$(X)},[f_,q$]),E=P((X)=>{if(!X)return;C((Y)=>Y.includes(X)?Y:[...Y,X])},[]),R=P(async(X,Y=null)=>{let J=(y)=>{y.scrollIntoView({behavior:"smooth",block:"center"}),y.classList.add("post-highlight"),setTimeout(()=>y.classList.remove("post-highlight"),2000)},M=document.getElementById("post-"+X);if(M){J(M);return}try{let y=typeof Y==="string"&&Y.trim()?Y.trim():$,$_=(await B4(X,y))?.thread?.[0];if(!$_)return;V0((J_)=>{if(!J_)return[$_];if(J_.some((m)=>m.id===$_.id))return J_;return[...J_,$_]}),requestAnimationFrame(()=>{setTimeout(()=>{let J_=document.getElementById("post-"+X);if(J_)J(J_)},50)})}catch(y){console.error("[scrollToMessage] Failed to fetch message",X,y)}},[$]),s=P((X)=>{C((Y)=>Y.filter((J)=>J!==X))},[]),r=P(()=>{C([])},[]),d=P((X={})=>{let Y=Date.now();if(k_.current=Y,X.running)a_.current=!0,C0((J)=>J?J:!0);if(X.clearSilence)w_.current=0},[C0]),g=P(()=>{if(i0.current)clearTimeout(i0.current),i0.current=null;E$.current=0},[]);u(()=>()=>{g()},[g]);let Y_=P(()=>{g(),n((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:Y,lastActivity:J,...M}=X;return M})},[g]),D0=P((X)=>{if(!X)return;g();let Y=Date.now();E$.current=Y,n({type:X.type||"active",last_activity:!0}),i0.current=setTimeout(()=>{if(E$.current!==Y)return;n((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},i6)},[g]),B0=P(()=>{a_.current=!1,C0(!1),k_.current=null,w_.current=0,y_.current="",u_.current="",b_.current=null,H_.current=null,h.current=null,X_.current=null,e0.current=null,q0.current={inFlight:!1,lastAttemptAt:0,turnId:null},g(),O_(null),Z_(null),V_.current=!1,q_.current=!1},[g,O_,Z_,C0]),M0=P((X)=>{if(!$7({remainingQueueCount:X,currentTurnId:h.current,isAgentTurnActive:T_}))return;X_.current=null,Z_(null)},[T_,Z_]),E1=P(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),V2=P(()=>({agentStatus:t,agentDraft:N_?{...N_}:{text:"",totalLines:0},agentPlan:Q_||"",agentThought:o?{...o}:{text:"",totalLines:0},pendingRequest:K_,currentTurnId:G_,steerQueuedTurnId:D_,isAgentTurnActive:Boolean(T_),followupQueueItems:Array.isArray(k0)?k0.map((X)=>({...X})):[],activeModel:v_,activeThinkingLevel:C_,supportsThinking:Boolean(G0),activeModelUsage:_0,contextUsage:F0,isAgentRunning:Boolean(a_.current),wasAgentActive:Boolean(h0.current),draftBuffer:y_.current||"",thoughtBuffer:u_.current||"",lastAgentEvent:k_.current||null,lastSilenceNotice:w_.current||0,lastAgentResponse:H_.current||null,currentTurnIdRef:h.current||null,steerQueuedTurnIdRef:X_.current||null,thoughtExpanded:Boolean(V_.current),draftExpanded:Boolean(q_.current),agentStatusRef:e0.current||null,silentRecovery:{...q0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[v_,_0,C_,N_,Q_,t,o,F0,G_,k0,T_,K_,D_,G0]),k1=P((X)=>{let Y=X||E1();g(),a_.current=Boolean(Y.isAgentRunning),h0.current=Boolean(Y.wasAgentActive),C0(Boolean(Y.isAgentTurnActive)),k_.current=Y.lastAgentEvent||null,w_.current=Number(Y.lastSilenceNotice||0),y_.current=Y.draftBuffer||"",u_.current=Y.thoughtBuffer||"",b_.current=Y.pendingRequest||null,H_.current=Y.lastAgentResponse||null,h.current=Y.currentTurnIdRef||null,X_.current=Y.steerQueuedTurnIdRef||null,e0.current=Y.agentStatusRef||null,q0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},V_.current=Boolean(Y.thoughtExpanded),q_.current=Boolean(Y.draftExpanded),n(Y.agentStatus||null),i(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),B_(Y.agentPlan||""),__(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),j_(Y.pendingRequest||null),O_(Y.currentTurnId||null),Z_(Y.steerQueuedTurnId||null),d_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((J)=>({...J})):[]),F_(Y.activeModel||null),S_(Y.activeThinkingLevel||null),n_(Boolean(Y.supportsThinking)),U0(Y.activeModelUsage??null),W0(Y.contextUsage??null)},[g,E1,O_,d_,C0,Z_]),B$=P((X)=>{if(!X)return;if(h.current===X)return;h.current=X,q0.current={inFlight:!1,lastAttemptAt:0,turnId:X},O_(X),X_.current=null,Z_(null),y_.current="",u_.current="",i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),j_(null),b_.current=null,H_.current=null,V_.current=!1,q_.current=!1},[O_,Z_]),y1=P((X)=>{if(typeof document<"u"){let m=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&m)return}let Y=H_.current;if(!Y||!Y.post)return;if(X&&Y.turnId&&Y.turnId!==X)return;let J=Y.post;if(J.id&&o_.current===J.id)return;let M=String(J?.data?.content||"").trim();if(!M)return;o_.current=J.id||o_.current,H_.current=null;let y=M.replace(/\s+/g," ").slice(0,200),c=L$.current||{},J_=(J?.data?.agent_id?c[J.data.agent_id]:null)?.name||"Pi";p0(J_,y)},[p0]),L7=P(async(X,Y)=>{if(X!=="thought"&&X!=="draft")return;let J=h.current;if(X==="thought"){if(V_.current=Y,J)try{await O7(J,"thought",Y)}catch(M){console.warn("Failed to update thought visibility:",M)}if(!Y)return;try{let M=J?await X7(J,"thought"):null;if(M?.text)u_.current=M.text;__((y)=>({...y||{text:"",totalLines:0},fullText:u_.current||y?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:y?.totalLines||0}))}catch(M){console.warn("Failed to fetch full thought:",M)}return}if(q_.current=Y,J)try{await O7(J,"draft",Y)}catch(M){console.warn("Failed to update draft visibility:",M)}if(!Y)return;try{let M=J?await X7(J,"draft"):null;if(M?.text)y_.current=M.text;i((y)=>({...y||{text:"",totalLines:0},fullText:y_.current||y?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:y?.totalLines||0}))}catch(M){console.warn("Failed to fetch full draft:",M)}},[]),d2=D(null),s2=P(()=>{let X=U.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);d2.current=s2;let B7=P((X)=>{let Y=U.current;if(!Y||typeof X!=="function"){X?.();return}let{currentHashtag:J,searchQuery:M}=w0.current||{},y=!(M&&!J),c=y?Y.scrollHeight-Y.scrollTop:Y.scrollTop;X(),requestAnimationFrame(()=>{let $_=U.current;if(!$_)return;if(y){let J_=Math.max($_.scrollHeight-c,0);$_.scrollTop=J_}else{let J_=Math.max($_.scrollHeight-$_.clientHeight,0),m=Math.min(c,J_);$_.scrollTop=m}})},[]),r$=P((X)=>{let Y=U.current;if(!Y||typeof X!=="function"){X?.();return}let J=Y.scrollTop;X(),requestAnimationFrame(()=>{let M=U.current;if(!M)return;let y=Math.max(M.scrollHeight-M.clientHeight,0);M.scrollTop=Math.min(J,y)})},[]),U7="Queued as a follow-up (one-at-a-time).",Q7="⁣",A1=P((X)=>{if(!X||!Array.isArray(X))return X;let Y=a0.current,J=new Set(Y),M=X.filter((y)=>{if(J.has(y?.id))return!1;if(y?.data?.is_bot_message){let c=y?.data?.content;if(c===U7||c===Q7)return!1}return!0});return M.length===X.length?X:M},[]),{posts:w1,setPosts:V0,hasMore:F7,setHasMore:L2,hasMoreRef:M1,loadPosts:j$,refreshTimeline:P0,loadMore:H7,loadMoreRef:o2}=m6({preserveTimelineScroll:B7,preserveTimelineScrollTop:r$,chatJid:$}),v$=i_(()=>A1(w1),[w1,k0,A1]),B2=P(()=>{let X=l_.current;if(!X)return;V0((Y)=>Y?Y.filter((J)=>J.id!==X):Y),l_.current=null},[V0]),{handleSplitterMouseDown:J7,handleSplitterTouchStart:D7,handleEditorSplitterMouseDown:E7,handleEditorSplitterTouchStart:k7,handleDockSplitterMouseDown:y7,handleDockSplitterTouchStart:A7}=p6({appShellRef:S,sidebarWidthRef:l,editorWidthRef:z_,dockHeightRef:A_}),P1=P(()=>{if(!a_.current)return;a_.current=!1,w_.current=0,k_.current=null,h.current=null,O_(null),V_.current=!1,q_.current=!1;let X=(y_.current||"").trim();if(y_.current="",u_.current="",i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),j_(null),b_.current=null,H_.current=null,!X){n({type:"error",title:"Response stalled - No content received"});return}let J=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,M=Date.now(),y=new Date().toISOString(),c={id:M,timestamp:y,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};l_.current=M,V0(($_)=>$_?X2([...$_,c]):[c]),d2.current?.(),n(null)},[O_]);u(()=>{w0.current={currentHashtag:W,searchQuery:q}},[W,q]);let g_=P(()=>{let X=$;S5(X).then((Y)=>{if(T0.current!==X)return;let J=X0.current,M=Array.isArray(Y?.items)?Y.items.map((y)=>({...y})).filter((y)=>!J.has(y.row_id)):[];if(M.length){d_((y)=>{if(y.length===M.length&&y.every((c,$_)=>c.row_id===M[$_].row_id))return y;return M});return}J.clear(),M0(0),d_((y)=>y.length===0?y:[])}).catch(()=>{if(T0.current!==X)return;d_((Y)=>Y.length===0?Y:[])})},[M0,$,d_]),n0=P(async()=>{let X=$;try{let Y=await J1(X);if(T0.current!==X)return;if(Y)W0(Y)}catch(Y){if(T0.current!==X)return;console.warn("Failed to fetch agent context:",Y)}},[$]),d0=P(async()=>{let X=$;try{let Y=await q7(X);if(T0.current!==X)return null;if(!Y||Y.status!=="active"||!Y.data){if(h0.current){let{currentHashtag:y,searchQuery:c}=w0.current||{};if(!y&&!c)P0()}return h0.current=!1,B0(),e0.current=null,n(null),i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),j_(null),b_.current=null,Y??null}h0.current=!0;let J=Y.data;e0.current=J;let M=J.turn_id||J.turnId;if(M)B$(M);if(d({running:!0,clearSilence:!0}),Y_(),n(J),Y.thought&&Y.thought.text)__((y)=>{if(y&&y.text&&y.text.length>=Y.thought.text.length)return y;return u_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)i((y)=>{if(y&&y.text&&y.text.length>=Y.draft.text.length)return y;return y_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[B0,Y_,d,P0,B$]),r2=P(async()=>{if(!a_.current)return null;if(b_.current)return null;let X=h.current||null,Y=q0.current,J=Date.now();if(Y.inFlight)return null;if(Y.turnId===X&&J-Y.lastAttemptAt<B1)return null;Y.inFlight=!0,Y.lastAttemptAt=J,Y.turnId=X;try{let{currentHashtag:M,searchQuery:y}=w0.current||{};if(!M&&!y)await P0();return await g_(),await d0()}finally{Y.inFlight=!1}},[d0,g_,P0]);u(()=>{let X=Math.min(1000,Math.max(100,Math.floor(L1/2))),Y=setInterval(()=>{if(!a_.current)return;if(b_.current)return;let J=k_.current;if(!J)return;let M=Date.now(),y=M-J,c=z2(e0.current);if(y>=h6){if(!c)n({type:"waiting",title:"Re-syncing after a quiet period…"});r2();return}if(y>=L1){if(M-w_.current>=B1){if(!c){let $_=Math.floor(y/1000);n({type:"waiting",title:`Waiting for model… No events for ${$_}s`})}w_.current=M,r2()}}},X);return()=>clearInterval(Y)},[r2]);let w7=P((X)=>{if(z(X),X!=="connected"){n(null),i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),j_(null),b_.current=null,B0();return}if(!b$.current){b$.current=!0,d0(),n0();return}let{currentHashtag:Y,searchQuery:J}=w0.current;if(!Y&&!J)P0();d0(),n0()},[B0,P0,d0,n0]),M7=P(async(X)=>{L(X),V0(null),await j$(X)},[j$]),P7=P(async()=>{L(null),H(null),V0(null),await j$()},[j$]),C7=P(async(X,Y=T)=>{if(!X||!X.trim())return;let J=Y==="root"||Y==="all"?Y:"current";v(J),H(X.trim()),L(null),V0(null);try{let M=await G7(X.trim(),50,0,$,J,b);V0(M.results),L2(!1)}catch(M){console.error("Failed to search:",M),V0([])}},[$,b,T]),b7=P(()=>{x(!0),H(null),L(null),v("current"),V0([])},[]),I7=P(()=>{x(!1),H(null),j$()},[j$]),v5=P(()=>{},[]),S7=P(async(X)=>{if(!X)return;let Y=X.id,J=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():$,M=v$?.filter((c)=>c?.data?.thread_id===Y&&c?.id!==Y).length||0;if(M>0){if(!window.confirm(`Delete this message and its ${M} replies?`))return}let y=(c)=>{if(!c.length)return;A$((J_)=>{let m=new Set(J_);return c.forEach((W_)=>m.add(W_)),m}),setTimeout(()=>{if(r$(()=>{V0((J_)=>J_?J_.filter((m)=>!c.includes(m.id)):J_)}),A$((J_)=>{let m=new Set(J_);return c.forEach((W_)=>m.delete(W_)),m}),M1.current)o2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let c=await W7(Y,M>0,J);if(c?.ids?.length)y(c.ids)}catch(c){let $_=c?.message||"";if(M===0&&$_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let m=await W7(Y,!0,J);if(m?.ids?.length)y(m.ids);return}console.error("Failed to delete post:",c),alert(`Failed to delete message: ${$_}`)}},[$,v$,r$]),C1=P(async()=>{try{let X=await M5();M_(l6(X));let Y=X?.user||{};W$((M)=>{let y=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",c=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,$_=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(M.name===y&&M.avatar_url===c&&M.avatar_background===$_)return M;return{name:y,avatar_url:c,avatar_background:$_}});let J=(X?.agents||[]).find((M)=>M.id==="default");l0(J?.name,J?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=$,Y=await J1(X);if(T0.current!==X)return;if(Y)W0(Y)}catch{}},[l0,$]);u(()=>{C1();let X=i$("sidebarWidth",null),Y=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(l.current=Y,S.current)S.current.style.setProperty("--sidebar-width",`${Y}px`)},[C1]);let a2=T_||t!==null,b1=P((X)=>{if(!X||typeof X!=="object")return;let Y=X.agent_id;if(!Y)return;let{agent_name:J,agent_avatar:M}=X;if(!J&&M===void 0)return;let y=L$.current?.[Y]||{id:Y},c=y.name||null,$_=y.avatar_url??y.avatarUrl??y.avatar??null,J_=!1,m=!1;if(J&&J!==y.name)c=J,m=!0;if(M!==void 0){let W_=typeof M==="string"?M.trim():null,c_=typeof $_==="string"?$_.trim():null,L_=W_||null;if(L_!==(c_||null))$_=L_,J_=!0}if(!m&&!J_)return;if(M_((W_)=>{let L_={...W_[Y]||{id:Y}};if(m)L_.name=c;if(J_)L_.avatar_url=$_;return{...W_,[Y]:L_}}),Y==="default")l0(c,$_,J_?Date.now():null)},[l0]),I1=P((X)=>{if(!X||typeof X!=="object")return;let Y=X.user_name??X.userName,J=X.user_avatar??X.userAvatar,M=X.user_avatar_background??X.userAvatarBackground;if(Y===void 0&&J===void 0&&M===void 0)return;W$((y)=>{let c=typeof Y==="string"&&Y.trim()?Y.trim():y.name||"You",$_=J===void 0?y.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,J_=M===void 0?y.avatar_background:typeof M==="string"&&M.trim()?M.trim():null;if(y.name===c&&y.avatar_url===$_&&y.avatar_background===J_)return y;return{name:c,avatar_url:$_,avatar_background:J_}})},[]),t2=P((X)=>{if(!X||typeof X!=="object")return;let Y=X.model??X.current;if(Y!==void 0)F_(Y);if(X.thinking_level!==void 0)S_(X.thinking_level??null);if(X.supports_thinking!==void 0)n_(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)U0(X.provider_usage??null)},[]),a$=P(()=>{let X=$;P5(X).then((Y)=>{if(T0.current!==X)return;if(Y)t2(Y)}).catch(()=>{})},[t2,$]),v0=P(()=>{C5().then((X)=>{let Y=Array.isArray(X?.chats)?X.chats.filter((J)=>J&&typeof J.agent_name==="string"&&J.agent_name.trim()):[];$0(Y)}).catch(()=>{})},[]),f0=P(()=>{V7(b).then((X)=>{let Y=Array.isArray(X?.chats)?X.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];E0(Y)}).catch(()=>{})},[b]),x7=P((X)=>{let Y=X?.row_id;if(Y==null)return;X0.current.add(Y),d_((J)=>J.filter((M)=>M?.row_id!==Y)),x5(Y,H1($)).then(()=>{g_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),V("Failed to steer message","The queued message could not be sent as steering.","warning"),X0.current.delete(Y),g_()})},[$,g_,d_,V]),T7=P((X)=>{let Y=X?.row_id;if(Y==null)return;let J=j0.current.filter((M)=>M?.row_id!==Y).length;X0.current.add(Y),M0(J),d_((M)=>M.filter((y)=>y?.row_id!==Y)),T5(Y,H1($)).then(()=>{g_()}).catch((M)=>{console.warn("[queue] Failed to remove queued item:",M),V("Failed to remove message","The queued message could not be removed.","warning"),X0.current.delete(Y),g_()})},[M0,$,g_,d_,V]),e2=P((X)=>{if(!X||typeof X!=="object")return;if(v0(),f0(),X?.queued==="followup"||X?.queued==="steer"){g_();return}let Y=X?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))g_()},[v0,f0,g_]),_4=P(()=>{if(K0.current)K0.current.abort(),K0.current=null;s_(null)},[]),U2=P(async(X)=>{let Y=String(X||"").trim();if(!Y)return V("BTW needs a question","Usage: /btw <question>","warning"),!0;if(K0.current)K0.current.abort();let J=new AbortController;K0.current=J,s_({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let M=await f5(Y,{signal:J.signal,chatJid:S3($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(y,c)=>{if(y==="side_prompt_start")s_(($_)=>$_?{...$_,status:"running"}:$_)},onThinkingDelta:(y)=>{s_((c)=>c?{...c,thinking:`${c.thinking||""}${y||""}`}:c)},onTextDelta:(y)=>{s_((c)=>c?{...c,answer:`${c.answer||""}${y||""}`}:c)}});if(K0.current!==J)return!0;s_((y)=>y?{...y,answer:M?.result||y.answer||"",thinking:M?.thinking||y.thinking||"",model:M?.model||null,status:"success",error:null}:y)}catch(M){if(J.signal.aborted)return!0;s_((y)=>y?{...y,status:"error",error:M?.payload?.error||M?.message||"BTW request failed."}:y)}finally{if(K0.current===J)K0.current=null}return!0},[$,V]),f7=P(async({content:X})=>{let Y=I3(X);if(!Y)return!1;if(Y.type==="help")return V("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return _4(),V("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await U2(Y.question),!0;return!1},[_4,U2,V]),R7=P(()=>{if(p_?.question)U2(p_.question)},[p_,U2]),u7=P(async()=>{let X=f3(p_);if(!X)return;try{let Y=await p$("default",X,null,[],a2?"queue":null,$);e2(Y),V(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){V("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[p_,e2,a2,V]),t$=P(()=>{a$(),v0(),f0(),g_(),n0()},[a$,v0,f0,g_,n0]);u(()=>{t$();let X=setInterval(()=>{a$(),v0(),f0(),g_()},60000);return()=>clearInterval(X)},[t$,a$,v0,f0,g_]),u(()=>{f0()},[f0]),u(()=>{let X=!1;if(V0(null),W)return j$(W),()=>{X=!0};if(q)return G7(q,50,0,$,T,b).then((Y)=>{if(X)return;V0(Y.results),L2(!1)}).catch((Y)=>{if(X)return;console.error("Failed to search:",Y),V0([]),L2(!1)}),()=>{X=!0};return j$(),()=>{X=!0}},[$,W,q,T,b,j$,L2,V0]),u(()=>{let X=I$.current||$;_$.current.set(X,V2())},[$,V2]),u(()=>{let X=I$.current||$;if(X===$)return;_$.current.set(X,V2()),I$.current=$,X0.current.clear(),k1(_$.current.get($)||null),g_(),d0(),n0()},[$,d0,n0,g_,k1,V2]);let v7=P(()=>{let{currentHashtag:X,searchQuery:Y}=w0.current||{};if(!X&&!Y)P0();t$()},[t$,P0]),$4=P((X,Y)=>{let J=Y?.turn_id,M=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,c=M?M===$:X==="connected"||X==="workspace_update";if(c)b1(Y),I1(Y);if(X==="ui_theme"){E3(Y);return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))Y_()}if(X==="connected"){n(null),i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),j_(null),b_.current=null,B0();let m=$;q7(m).then((L_)=>{if(T0.current!==m)return;if(!L_||L_.status!=="active"||!L_.data)return;let m$=L_.data,S1=m$.turn_id||m$.turnId;if(S1)B$(S1);if(d({clearSilence:!0}),D0(m$),L_.thought&&L_.thought.text)u_.current=L_.thought.text,__({text:L_.thought.text,totalLines:L_.thought.totalLines||0});if(L_.draft&&L_.draft.text)y_.current=L_.draft.text,i({text:L_.draft.text,totalLines:L_.draft.totalLines||0})}).catch((L_)=>{console.warn("Failed to fetch agent status:",L_)});let{currentHashtag:W_,searchQuery:c_}=w0.current||{};if(!W_&&!c_)P0();t$();return}if(X==="agent_status"){if(!c){if(Y?.type==="done"||Y?.type==="error")v0(),f0();return}if(Y.type==="done"||Y.type==="error"){if(J&&h.current&&J!==h.current)return;if(Y.type==="done"){y1(J||h.current);let{currentHashtag:m,searchQuery:W_}=w0.current||{};if(!m&&!W_)P0();if(Y.context_usage)W0(Y.context_usage)}if(h0.current=!1,B0(),X0.current.clear(),v0(),g_(),i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),j_(null),Y.type==="error")n({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(J)B$(J);if(d({running:!0,clearSilence:!0}),Y.type==="thinking")y_.current="",u_.current="",i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0});e0.current=Y,n((m)=>{if(m&&m.type===Y.type&&m.title===Y.title)return m;return Y})}return}if(X==="agent_steer_queued"){if(!c)return;if(J&&h.current&&J!==h.current)return;let m=J||h.current;if(!m)return;X_.current=m,Z_(m);return}if(X==="agent_followup_queued"){if(!c)return;let m=Y?.row_id,W_=Y?.content;if(m!=null&&typeof W_==="string"&&W_.trim())d_((c_)=>{if(c_.some((L_)=>L_?.row_id===m))return c_;return[...c_,{row_id:m,content:W_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});g_();return}if(X==="agent_followup_consumed"){if(!c)return;let m=Y?.row_id;if(m!=null){let W_=j0.current.filter((c_)=>c_.row_id!==m).length;M0(W_),d_((c_)=>c_.filter((L_)=>L_.row_id!==m))}g_(),P0();return}if(X==="agent_followup_removed"){if(!c)return;let m=Y?.row_id;if(m!=null){let W_=j0.current.filter((c_)=>c_.row_id!==m).length;X0.current.add(m),M0(W_),d_((c_)=>c_.filter((L_)=>L_.row_id!==m))}g_();return}if(X==="agent_draft_delta"){if(!c)return;if(J&&h.current&&J!==h.current)return;if(J&&!h.current)B$(J);if(d({running:!0,clearSilence:!0}),Y?.reset)y_.current="";if(Y?.delta)y_.current+=Y.delta;let m=Date.now();if(!S$.current||m-S$.current>=100){S$.current=m;let W_=y_.current,c_=U1(W_);if(q_.current)i((L_)=>({text:L_?.text||"",totalLines:c_,fullText:W_}));else i({text:W_,totalLines:c_})}return}if(X==="agent_draft"){if(!c)return;if(J&&h.current&&J!==h.current)return;if(J&&!h.current)B$(J);d({running:!0,clearSilence:!0});let m=Y.text||"",W_=Y.mode||(Y.kind==="plan"?"replace":"append"),c_=Number.isFinite(Y.total_lines)?Y.total_lines:m?m.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(W_==="replace")B_(m);else B_((L_)=>(L_||"")+m);else if(!q_.current)y_.current=m,i({text:m,totalLines:c_});return}if(X==="agent_thought_delta"){if(!c)return;if(J&&h.current&&J!==h.current)return;if(J&&!h.current)B$(J);if(d({running:!0,clearSilence:!0}),Y?.reset)u_.current="";if(typeof Y?.delta==="string")u_.current+=Y.delta;let m=Date.now();if(V_.current&&(!$$.current||m-$$.current>=100)){$$.current=m;let W_=u_.current;__((c_)=>({text:c_?.text||"",totalLines:U1(W_),fullText:W_}))}return}if(X==="agent_thought"){if(!c)return;if(J&&h.current&&J!==h.current)return;if(J&&!h.current)B$(J);d({running:!0,clearSilence:!0});let m=Y.text||"",W_=Number.isFinite(Y.total_lines)?Y.total_lines:m?m.replace(/\r\n/g,`
`).split(`
`).length:0;if(!V_.current)u_.current=m,__({text:m,totalLines:W_});return}if(X==="model_changed"){if(!c)return;if(Y?.model!==void 0)F_(Y.model);if(Y?.thinking_level!==void 0)S_(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)n_(Boolean(Y.supports_thinking));let m=$;J1(m).then((W_)=>{if(T0.current!==m)return;if(W_)W0(W_)}).catch(()=>{});return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}if(N7(X)){if(!c)return;if(K7(X,Y),X==="extension_ui_notify"&&typeof Y?.message==="string")V(Y.message,null,Y?.type||"info");if(X==="extension_ui_error"&&typeof Y?.error==="string")V("Extension UI error",Y.error,"error",5000);return}let{currentHashtag:$_,searchQuery:J_}=w0.current;if(X==="agent_response"){if(!c)return;B2(),H_.current={post:Y,turnId:h.current}}if(!$_&&!J_&&c&&(X==="new_post"||X==="new_reply"||X==="agent_response"))V0((m)=>{if(!m)return[Y];if(m.some((W_)=>W_.id===Y.id))return m;return[...m,Y]}),d2.current?.();if(X==="interaction_updated"){if(!c)return;V0((m)=>{if(!m)return m;if(!m.some((W_)=>W_.id===Y.id))return m;return m.map((W_)=>W_.id===Y.id?Y:W_)})}if(X==="interaction_deleted"){if(!c)return;let m=Y?.ids||[];if(m.length){r$(()=>{V0((L_)=>L_?L_.filter((m$)=>!m.includes(m$.id)):L_)});let{currentHashtag:W_,searchQuery:c_}=w0.current;if(M1.current&&!W_&&!c_)o2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[B0,Y_,$,o2,d,y1,r$,v0,f0,P0,B2,B$,D0,b1,I1,a$,g_,d_]);u(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=$4,X.reset=()=>{B2(),B0(),n(null),i({text:"",totalLines:0}),B_(""),__({text:"",totalLines:0}),j_(null)},X.finalize=()=>P1(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[B0,P1,$4,B2]),u6({handleSseEvent:$4,handleConnectionStatusChange:w7,loadPosts:j$,onWake:v7,chatJid:$}),u(()=>{if(!v$||v$.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let Y=X.slice(5);R(Y),history.replaceState(null,"",location.pathname+location.search)},[v$,R]);let j4=t!==null;u(()=>{if(K!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:J,searchQuery:M}=w0.current||{},y=!J&&!M;if(j4){if(y)P0();g_(),d0(),n0()}else{if(y)P0();d0(),n0()}},j4?15000:60000);return()=>clearInterval(Y)},[K,j4,d0,n0,g_,P0]),u(()=>{return Y7(()=>{d0(),n0(),g_()})},[d0,n0,g_]);let m7=P(()=>{Z0((X)=>!X)},[]),g7=P((X)=>{if(typeof window>"u")return;let Y=String(X||"").trim();if(!Y||Y===$)return;let J=O2(window.location.href,Y,{chatOnly:j});window.location.assign(J)},[j,$]),p7=P(async()=>{if(typeof window>"u"||!U_?.chat_jid)return;let X=U_.agent_name||"",Y=U_.display_name||"",J=window.prompt("Branch display name",Y);if(J===null)return;let M=window.prompt("Agent handle (without @)",X);if(M===null)return;try{let y=await b5(U_.chat_jid,{displayName:J,agentName:M});await Promise.allSettled([v0(),f0()]);let c=y?.branch?.agent_name||String(M||"").trim()||X;V("Branch renamed",`This chat is now @${c}.`,"info",3500)}catch(y){let c=y instanceof Error?y.message:String(y||"Could not rename branch.");V("Could not rename branch",c||"Could not rename branch.","warning",5000)}},[U_,v0,f0,V]),c7=P(async()=>{if(typeof window>"u"||!U_?.chat_jid)return;if(U_.chat_jid===(U_.root_chat_jid||U_.chat_jid)){V("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=U_.display_name||`@${U_.agent_name||U_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await I5(U_.chat_jid),await Promise.allSettled([v0(),f0()]);let M=U_.root_chat_jid||"web:default";V("Branch pruned",`${Y} has been archived.`,"info",3000);let y=O2(window.location.href,M,{chatOnly:j});window.location.assign(y)}catch(M){let y=M instanceof Error?M.message:String(M||"Could not prune branch.");V("Could not prune branch",y||"Could not prune branch.","warning",5000)}},[j,U_,v0,f0,V]);u(()=>{if(!Z||typeof window>"u")return;let X=!1;return(async()=>{try{m_({status:"running",message:"Preparing a new chat branch…"});let Y=await M2(N);if(X)return;let J=Y?.branch,M=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!M)throw Error("Branch fork did not return a chat id.");let y=O2(window.location.href,M,{chatOnly:!0});window.location.replace(y)}catch(Y){if(X)return;m_({status:"error",message:F1(Y)})}})(),()=>{X=!0}},[Z,N]);let h7=P(async()=>{if(typeof window>"u"||G)return;let X=o6($);if(!X){V("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let J=_7(window.location.href,$,{chatOnly:!0});if(!window.open(J,X.target))V("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=r6(X);if(!Y){V("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}a6(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let M=(await M2($))?.branch,y=typeof M?.chat_jid==="string"&&M.chat_jid.trim()?M.chat_jid.trim():null;if(!y)throw Error("Branch fork did not return a chat id.");try{let $_=await Q4();$0(Array.isArray($_?.chats)?$_.chats:[])}catch{}try{let $_=await V7(b);E0(Array.isArray($_?.chats)?$_.chats:[])}catch{}let c=O2(window.location.href,y,{chatOnly:!0});t6(Y,c)}catch(J){e6(Y),V("Could not open branch window",F1(J),"error",5000)}},[$,b,G,V]);u(()=>{if(!O0)return;if(typeof window>"u")return;let X=S.current;if(!X)return;if(!z_.current){let Y=i$("editorWidth",null),J=l.current||280;z_.current=Number.isFinite(Y)?Y:J}if(X.style.setProperty("--editor-width",`${z_.current}px`),!A_.current){let Y=i$("dockHeight",null);A_.current=Number.isFinite(Y)?Y:200}X.style.setProperty("--dock-height",`${A_.current}px`)},[O0]),u(()=>{if(!x0||j)return;let X=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),L0()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[L0,x0,j]);let i7=Boolean(D_&&D_===(t?.turn_id||G_));if(Z)return B`
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
        <div class=${`app-shell${c0?"":" workspace-collapsed"}${O0?" editor-open":""}${j?" chat-only":""}`} ref=${S}>
            ${!j&&B`
                <${x6}
                    onFileSelect=${q$}
                    visible=${c0}
                    active=${c0||O0}
                    onOpenEditor=${I0}
                />
                <button
                    class=${`workspace-toggle-tab${c0?" open":" closed"}`}
                    onClick=${m7}
                    title=${c0?"Hide workspace":"Show workspace"}
                    aria-label=${c0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${J7} onTouchStart=${D7}></div>
            `}
            ${C$&&B`
                <div class="editor-pane-container">
                    ${O0&&B`
                        <${T6}
                            tabs=${N0}
                            activeId=${f_}
                            onActivate=${w$}
                            onClose=${J$}
                            onCloseOthers=${H0}
                            onCloseAll=${M$}
                            onTogglePin=${s$}
                            onTogglePreview=${D$}
                            previewTabs=${R0}
                            onToggleDock=${x0?L0:void 0}
                            dockVisible=${x0&&Y$}
                        />
                    `}
                    ${O0&&B`<div class="editor-pane-host" ref=${V$}></div>`}
                    ${O0&&f_&&R0.has(f_)&&B`
                        <${R6}
                            getContent=${()=>t_.current?.getContent?.()}
                            path=${f_}
                            onClose=${()=>D$(f_)}
                        />
                    `}
                    ${x0&&Y$&&B`<div class="dock-splitter" onMouseDown=${y7} onTouchStart=${A7}></div>`}
                    ${x0&&B`<div class=${`dock-panel${Y$?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${L0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${P$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${E7} onTouchStart=${k7}></div>
            `}
            <div class="container">
                ${q&&n6()&&B`<div class="search-results-spacer"></div>`}
                ${j&&B`
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
                                        onChange=${(X)=>g7(X.currentTarget.value)}
                                    >
                                        ${Q0.map((X)=>B`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${`@${X.agent_name}${X.display_name?` — ${X.display_name}`:""}${X.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${U_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${p7}
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
                                    onClick=${c7}
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
                ${(W||q)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${P7}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${W?`#${W}`:`Search: ${q} · ${e}`}</span>
                    </div>
                `}
                <${K6}
                    posts=${v$}
                    hasMore=${F7}
                    onLoadMore=${H7}
                    timelineRef=${U}
                    onHashtagClick=${M7}
                    onMessageRef=${E}
                    onScrollToMessage=${R}
                    onFileRef=${F}
                    onPostClick=${void 0}
                    onDeletePost=${S7}
                    emptyMessage=${W?`No posts with #${W}`:q?`No results for "${q}"`:void 0}
                    agents=${E_}
                    user=${G$}
                    reverse=${!(q&&!W)}
                    removingPostIds=${d$}
                    searchQuery=${q}
                />
                <${h3}
                    status=${t}
                    draft=${N_}
                    plan=${Q_}
                    thought=${o}
                    pendingRequest=${K_}
                    intent=${p}
                    turnId=${G_}
                    steerQueued=${i7}
                    onPanelToggle=${L7}
                />
                <${R3}
                    session=${p_}
                    onClose=${_4}
                    onRetry=${R7}
                    onInject=${u7}
                />
                <${L3}
                    onPost=${()=>{j$(),s2()}}
                    onFocus=${s2}
                    searchMode=${A}
                    searchScope=${T}
                    onSearch=${C7}
                    onSearchScopeChange=${v}
                    onEnterSearch=${b7}
                    onExitSearch=${I7}
                    fileRefs=${I}
                    onRemoveFileRef=${J0}
                    onClearFileRefs=${x$}
                    messageRefs=${w}
                    onRemoveMessageRef=${s}
                    onClearMessageRefs=${r}
                    activeEditorPath=${j?null:f_}
                    onAttachEditorFile=${j?void 0:k}
                    onOpenFilePill=${F}
                    followupQueueCount=${A0}
                    followupQueueItems=${k0}
                    onInjectQueuedFollowup=${x7}
                    onRemoveQueuedFollowup=${T7}
                    onSubmitIntercept=${f7}
                    onMessageResponse=${e2}
                    onPopOutChat=${G?void 0:h7}
                    isAgentActive=${a2}
                    activeChatAgents=${I_}
                    currentChatJid=${$}
                    activeModel=${v_}
                    modelUsage=${_0}
                    thinkingLevel=${C_}
                    supportsThinking=${G0}
                    contextUsage=${F0}
                    notificationsEnabled=${t0}
                    notificationPermission=${b0}
                    onToggleNotifications=${g0}
                    onModelChange=${F_}
                    onModelStateChange=${t2}
                />
                <${l3} status=${K} />
                <${i3}
                    request=${K_}
                    onRespond=${()=>{j_(null),b_.current=null}}
                />
            </div>
        </div>
    `}function u5(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${R5} locationParams=${_} />`}Z3(B`<${u5} />`,document.getElementById("app"));

//# debugId=4EAE6CAB9C4ED99164756E2164756E21
//# sourceMappingURL=app.bundle.js.map
