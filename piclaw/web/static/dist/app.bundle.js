var k8=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,Z)=>(typeof require<"u"?require:$)[Z]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var c2,G_,U3,C2,H3,Y3,C8,g2={},L3=[],y8=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function e0(_,$){for(var Z in $)_[Z]=$[Z];return _}function F3(_){var $=_.parentNode;$&&$.removeChild(_)}function E3(_,$,Z){var J,X,Y,j={};for(Y in $)Y=="key"?J=$[Y]:Y=="ref"?X=$[Y]:j[Y]=$[Y];if(arguments.length>2&&(j.children=arguments.length>3?c2.call(arguments,2):Z),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)j[Y]===void 0&&(j[Y]=_.defaultProps[Y]);return f2(_,j,J,X,null)}function f2(_,$,Z,J,X){var Y={type:_,props:$,key:Z,ref:J,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:X==null?++U3:X};return G_.vnode!=null&&G_.vnode(Y),Y}function m2(_){return _.children}function v2(_,$){this.props=_,this.context=$}function q2(_,$){if($==null)return _.__?q2(_.__,_.__.__k.indexOf(_)+1):null;for(var Z;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null)return Z.__e;return typeof _.type=="function"?q2(_):null}function D3(_){var $,Z;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,$=0;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null){_.__e=_.__c.base=Z.__e;break}return D3(_)}}function X3(_){(!_.__d&&(_.__d=!0)&&C2.push(_)&&!u2.__r++||Y3!==G_.debounceRendering)&&((Y3=G_.debounceRendering)||H3)(u2)}function u2(){for(var _;u2.__r=C2.length;)_=C2.sort(function($,Z){return $.__v.__b-Z.__v.__b}),C2=[],_.some(function($){var Z,J,X,Y,j,G;$.__d&&(j=(Y=(Z=$).__v).__e,(G=Z.__P)&&(J=[],(X=e0({},Y)).__v=Y.__v+1,U1(G,Y,X,Z.__n,G.ownerSVGElement!==void 0,Y.__h!=null?[j]:null,J,j==null?q2(Y):j,Y.__h),A3(J,Y),Y.__e!=j&&D3(Y)))})}function k3(_,$,Z,J,X,Y,j,G,N,O){var W,H,E,D,C,w,T,U=J&&J.__k||L3,b=U.length;for(Z.__k=[],W=0;W<$.length;W++)if((D=Z.__k[W]=(D=$[W])==null||typeof D=="boolean"?null:typeof D=="string"||typeof D=="number"||typeof D=="bigint"?f2(null,D,null,null,D):Array.isArray(D)?f2(m2,{children:D},null,null,null):D.__b>0?f2(D.type,D.props,D.key,null,D.__v):D)!=null){if(D.__=Z,D.__b=Z.__b+1,(E=U[W])===null||E&&D.key==E.key&&D.type===E.type)U[W]=void 0;else for(H=0;H<b;H++){if((E=U[H])&&D.key==E.key&&D.type===E.type){U[H]=void 0;break}E=null}U1(_,D,E=E||g2,X,Y,j,G,N,O),C=D.__e,(H=D.ref)&&E.ref!=H&&(T||(T=[]),E.ref&&T.push(E.ref,null,D),T.push(H,D.__c||C,D)),C!=null?(w==null&&(w=C),typeof D.type=="function"&&D.__k!=null&&D.__k===E.__k?D.__d=N=C3(D,N,_):N=y3(_,D,E,U,C,N),O||Z.type!=="option"?typeof Z.type=="function"&&(Z.__d=N):_.value=""):N&&E.__e==N&&N.parentNode!=_&&(N=q2(E))}for(Z.__e=w,W=b;W--;)U[W]!=null&&(typeof Z.type=="function"&&U[W].__e!=null&&U[W].__e==Z.__d&&(Z.__d=q2(J,W+1)),b3(U[W],U[W]));if(T)for(W=0;W<T.length;W++)w3(T[W],T[++W],T[++W])}function C3(_,$,Z){var J,X;for(J=0;J<_.__k.length;J++)(X=_.__k[J])&&(X.__=_,$=typeof X.type=="function"?C3(X,$,Z):y3(Z,X,X,_.__k,X.__e,$));return $}function y3(_,$,Z,J,X,Y){var j,G,N;if($.__d!==void 0)j=$.__d,$.__d=void 0;else if(Z==null||X!=Y||X.parentNode==null)_:if(Y==null||Y.parentNode!==_)_.appendChild(X),j=null;else{for(G=Y,N=0;(G=G.nextSibling)&&N<J.length;N+=2)if(G==X)break _;_.insertBefore(X,Y),j=Y}return j!==void 0?j:X.nextSibling}function W3(_,$,Z){$[0]==="-"?_.setProperty($,Z):_[$]=Z==null?"":typeof Z!="number"||y8.test($)?Z:Z+"px"}function T2(_,$,Z,J,X){var Y;_:if($==="style")if(typeof Z=="string")_.style.cssText=Z;else{if(typeof J=="string"&&(_.style.cssText=J=""),J)for($ in J)Z&&$ in Z||W3(_.style,$,"");if(Z)for($ in Z)J&&Z[$]===J[$]||W3(_.style,$,Z[$])}else if($[0]==="o"&&$[1]==="n")Y=$!==($=$.replace(/Capture$/,"")),$=$.toLowerCase()in _?$.toLowerCase().slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=Z,Z?J||_.addEventListener($,Y?K3:j3,Y):_.removeEventListener($,Y?K3:j3,Y);else if($!=="dangerouslySetInnerHTML"){if(X)$=$.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if($!=="href"&&$!=="list"&&$!=="form"&&$!=="tabIndex"&&$!=="download"&&$ in _)try{_[$]=Z==null?"":Z;break _}catch(j){}typeof Z=="function"||(Z!=null&&(Z!==!1||$[0]==="a"&&$[1]==="r")?_.setAttribute($,Z):_.removeAttribute($))}}function j3(_){this.l[_.type+!1](G_.event?G_.event(_):_)}function K3(_){this.l[_.type+!0](G_.event?G_.event(_):_)}function U1(_,$,Z,J,X,Y,j,G,N){var O,W,H,E,D,C,w,T,U,b,u,y=$.type;if($.constructor!==void 0)return null;Z.__h!=null&&(N=Z.__h,G=$.__e=Z.__e,$.__h=null,Y=[G]),(O=G_.__b)&&O($);try{_:if(typeof y=="function"){if(T=$.props,U=(O=y.contextType)&&J[O.__c],b=O?U?U.props.value:O.__:J,Z.__c?w=(W=$.__c=Z.__c).__=W.__E:(("prototype"in y)&&y.prototype.render?$.__c=W=new y(T,b):($.__c=W=new v2(T,b),W.constructor=y,W.render=w8),U&&U.sub(W),W.props=T,W.state||(W.state={}),W.context=b,W.__n=J,H=W.__d=!0,W.__h=[]),W.__s==null&&(W.__s=W.state),y.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=e0({},W.__s)),e0(W.__s,y.getDerivedStateFromProps(T,W.__s))),E=W.props,D=W.state,H)y.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(y.getDerivedStateFromProps==null&&T!==E&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(T,b),!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(T,W.__s,b)===!1||$.__v===Z.__v){W.props=T,W.state=W.__s,$.__v!==Z.__v&&(W.__d=!1),W.__v=$,$.__e=Z.__e,$.__k=Z.__k,$.__k.forEach(function(f){f&&(f.__=$)}),W.__h.length&&j.push(W);break _}W.componentWillUpdate!=null&&W.componentWillUpdate(T,W.__s,b),W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(E,D,C)})}W.context=b,W.props=T,W.state=W.__s,(O=G_.__r)&&O($),W.__d=!1,W.__v=$,W.__P=_,O=W.render(W.props,W.state,W.context),W.state=W.__s,W.getChildContext!=null&&(J=e0(e0({},J),W.getChildContext())),H||W.getSnapshotBeforeUpdate==null||(C=W.getSnapshotBeforeUpdate(E,D)),u=O!=null&&O.type===m2&&O.key==null?O.props.children:O,k3(_,Array.isArray(u)?u:[u],$,Z,J,X,Y,j,G,N),W.base=$.__e,$.__h=null,W.__h.length&&j.push(W),w&&(W.__E=W.__=null),W.__e=!1}else Y==null&&$.__v===Z.__v?($.__k=Z.__k,$.__e=Z.__e):$.__e=A8(Z.__e,$,Z,J,X,Y,j,N);(O=G_.diffed)&&O($)}catch(f){$.__v=null,(N||Y!=null)&&($.__e=G,$.__h=!!N,Y[Y.indexOf(G)]=null),G_.__e(f,$,Z)}}function A3(_,$){G_.__c&&G_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(J){J.call(Z)})}catch(J){G_.__e(J,Z.__v)}})}function A8(_,$,Z,J,X,Y,j,G){var N,O,W,H=Z.props,E=$.props,D=$.type,C=0;if(D==="svg"&&(X=!0),Y!=null){for(;C<Y.length;C++)if((N=Y[C])&&(N===_||(D?N.localName==D:N.nodeType==3))){_=N,Y[C]=null;break}}if(_==null){if(D===null)return document.createTextNode(E);_=X?document.createElementNS("http://www.w3.org/2000/svg",D):document.createElement(D,E.is&&E),Y=null,G=!1}if(D===null)H===E||G&&_.data===E||(_.data=E);else{if(Y=Y&&c2.call(_.childNodes),O=(H=Z.props||g2).dangerouslySetInnerHTML,W=E.dangerouslySetInnerHTML,!G){if(Y!=null)for(H={},C=0;C<_.attributes.length;C++)H[_.attributes[C].name]=_.attributes[C].value;(W||O)&&(W&&(O&&W.__html==O.__html||W.__html===_.innerHTML)||(_.innerHTML=W&&W.__html||""))}if(function(w,T,U,b,u){var y;for(y in U)y==="children"||y==="key"||y in T||T2(w,y,null,U[y],b);for(y in T)u&&typeof T[y]!="function"||y==="children"||y==="key"||y==="value"||y==="checked"||U[y]===T[y]||T2(w,y,T[y],U[y],b)}(_,E,H,X,G),W)$.__k=[];else if(C=$.props.children,k3(_,Array.isArray(C)?C:[C],$,Z,J,X&&D!=="foreignObject",Y,j,Y?Y[0]:Z.__k&&q2(Z,0),G),Y!=null)for(C=Y.length;C--;)Y[C]!=null&&F3(Y[C]);G||(("value"in E)&&(C=E.value)!==void 0&&(C!==_.value||D==="progress"&&!C)&&T2(_,"value",C,H.value,!1),("checked"in E)&&(C=E.checked)!==void 0&&C!==_.checked&&T2(_,"checked",C,H.checked,!1))}return _}function w3(_,$,Z){try{typeof _=="function"?_($):_.current=$}catch(J){G_.__e(J,Z)}}function b3(_,$,Z){var J,X;if(G_.unmount&&G_.unmount(_),(J=_.ref)&&(J.current&&J.current!==_.__e||w3(J,null,$)),(J=_.__c)!=null){if(J.componentWillUnmount)try{J.componentWillUnmount()}catch(Y){G_.__e(Y,$)}J.base=J.__P=null}if(J=_.__k)for(X=0;X<J.length;X++)J[X]&&b3(J[X],$,typeof _.type!="function");Z||_.__e==null||F3(_.__e),_.__e=_.__d=void 0}function w8(_,$,Z){return this.constructor(_,Z)}function P3(_,$,Z){var J,X,Y;G_.__&&G_.__(_,$),X=(J=typeof Z=="function")?null:Z&&Z.__k||$.__k,Y=[],U1($,_=(!J&&Z||$).__k=E3(m2,null,[_]),X||g2,g2,$.ownerSVGElement!==void 0,!J&&Z?[Z]:X?null:$.firstChild?c2.call($.childNodes):null,Y,!J&&Z?Z:X?X.__e:$.firstChild,J),A3(Y,_)}c2=L3.slice,G_={__e:function(_,$){for(var Z,J,X;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((J=Z.constructor)&&J.getDerivedStateFromError!=null&&(Z.setState(J.getDerivedStateFromError(_)),X=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_),X=Z.__d),X)return Z.__E=Z}catch(Y){_=Y}throw _}},U3=0,v2.prototype.setState=function(_,$){var Z;Z=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=e0({},this.state),typeof _=="function"&&(_=_(e0({},Z),this.props)),_&&e0(Z,_),_!=null&&this.__v&&($&&this.__h.push($),X3(this))},v2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),X3(this))},v2.prototype.render=m2,C2=[],H3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u2.__r=0,C8=0;var h2,D0,G3,y2=0,z1=[],V3=G_.__b,N3=G_.__r,O3=G_.diffed,B3=G_.__c,q3=G_.unmount;function H1(_,$){G_.__h&&G_.__h(D0,_,y2||$),y2=0;var Z=D0.__H||(D0.__H={__:[],__h:[]});return _>=Z.__.length&&Z.__.push({}),Z.__[_]}function v(_){return y2=1,b8(S3,_)}function b8(_,$,Z){var J=H1(h2++,2);return J.t=_,J.__c||(J.__=[Z?Z($):S3(void 0,$),function(X){var Y=J.t(J.__[0],X);J.__[0]!==Y&&(J.__=[Y,J.__[1]],J.__c.setState({}))}],J.__c=D0),J.__}function m(_,$){var Z=H1(h2++,3);!G_.__s&&M3(Z.__H,$)&&(Z.__=_,Z.__H=$,D0.__H.__h.push(Z))}function L(_){return y2=5,k0(function(){return{current:_}},[])}function k0(_,$){var Z=H1(h2++,7);return M3(Z.__H,$)&&(Z.__=_(),Z.__H=$,Z.__h=_),Z.__}function M(_,$){return y2=8,k0(function(){return _},$)}function P8(){z1.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(R2),_.__H.__h.forEach(Q1),_.__H.__h=[]}catch($){_.__H.__h=[],G_.__e($,_.__v)}}),z1=[]}G_.__b=function(_){D0=null,V3&&V3(_)},G_.__r=function(_){N3&&N3(_),h2=0;var $=(D0=_.__c).__H;$&&($.__h.forEach(R2),$.__h.forEach(Q1),$.__h=[])},G_.diffed=function(_){O3&&O3(_);var $=_.__c;$&&$.__H&&$.__H.__h.length&&(z1.push($)!==1&&G3===G_.requestAnimationFrame||((G3=G_.requestAnimationFrame)||function(Z){var J,X=function(){clearTimeout(Y),z3&&cancelAnimationFrame(J),setTimeout(Z)},Y=setTimeout(X,100);z3&&(J=requestAnimationFrame(X))})(P8)),D0=void 0},G_.__c=function(_,$){$.some(function(Z){try{Z.__h.forEach(R2),Z.__h=Z.__h.filter(function(J){return!J.__||Q1(J)})}catch(J){$.some(function(X){X.__h&&(X.__h=[])}),$=[],G_.__e(J,Z.__v)}}),B3&&B3(_,$)},G_.unmount=function(_){q3&&q3(_);var $=_.__c;if($&&$.__H)try{$.__H.__.forEach(R2)}catch(Z){G_.__e(Z,$.__v)}};var z3=typeof requestAnimationFrame=="function";function R2(_){var $=D0;typeof _.__c=="function"&&_.__c(),D0=$}function Q1(_){var $=D0;_.__c=_.__(),D0=$}function M3(_,$){return!_||_.length!==$.length||$.some(function(Z,J){return Z!==_[J]})}function S3(_,$){return typeof $=="function"?$(_):$}var x3=function(_,$,Z,J){var X;$[0]=0;for(var Y=1;Y<$.length;Y++){var j=$[Y++],G=$[Y]?($[0]|=j?1:2,Z[$[Y++]]):$[++Y];j===3?J[0]=G:j===4?J[1]=Object.assign(J[1]||{},G):j===5?(J[1]=J[1]||{})[$[++Y]]=G:j===6?J[1][$[++Y]]+=G+"":j?(X=_.apply(G,x3(_,G,Z,["",null])),J.push(X),G[0]?$[0]|=2:($[Y-2]=0,$[Y]=X)):J.push(G)}return J},Q3=new Map,Q=function(_){var $=Q3.get(this);return $||($=new Map,Q3.set(this,$)),($=x3(this,$.get(_)||($.set(_,$=function(Z){for(var J,X,Y=1,j="",G="",N=[0],O=function(E){Y===1&&(E||(j=j.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,E,j):Y===3&&(E||j)?(N.push(3,E,j),Y=2):Y===2&&j==="..."&&E?N.push(4,E,0):Y===2&&j&&!E?N.push(5,0,!0,j):Y>=5&&((j||!E&&Y===5)&&(N.push(Y,0,j,X),Y=6),E&&(N.push(Y,E,0,X),Y=6)),j=""},W=0;W<Z.length;W++){W&&(Y===1&&O(),O(W));for(var H=0;H<Z[W].length;H++)J=Z[W][H],Y===1?J==="<"?(O(),N=[N],Y=3):j+=J:Y===4?j==="--"&&J===">"?(Y=1,j=""):j=J+j[0]:G?J===G?G="":j+=J:J==='"'||J==="'"?G=J:J===">"?(O(),Y=1):Y&&(J==="="?(Y=5,X=j,j=""):J==="/"&&(Y<5||Z[W][H+1]===">")?(O(),Y===3&&(N=N[0]),Y=N,(N=N[0]).push(2,0,Y),Y=0):J===" "||J==="\t"||J===`
`||J==="\r"?(O(),Y=2):j+=J),Y===3&&j==="!--"&&(Y=4,N=N[0])}return O(),N}(_)),$),arguments,[])).length>1?$:$[0]}.bind(E3);async function o_(_,$={}){let Z=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Unknown error"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function p2(_=10,$=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;return o_(Z)}async function I3(_,$=50,Z=0){return o_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${Z}`)}async function T3(_,$=50,Z=0){return o_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${Z}`)}async function f3(_){return o_(`/thread/${_}`)}async function v3(_,$=!1){let Z=`/post/${_}?cascade=${$?"true":"false"}`;return o_(Z,{method:"DELETE"})}async function L1(_,$,Z=null,J=[],X=null){return o_(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:Z,media_ids:J,mode:X})})}async function R3(){return o_("/agents")}async function g3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o_(`/agent/status${$}`)}async function F1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o_(`/agent/context${$}`)}async function E1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o_(`/agent/queue-state${$}`)}async function D1(_,$=null){let Z=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function k1(_,$=null){let Z=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function j2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o_(`/agent/models${$}`)}async function u3(_){let $=new FormData;$.append("file",_);let Z=await fetch("/media/upload",{method:"POST",body:$});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Upload failed"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function C1(_,$){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function c3(_,$){let Z=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function m3(_,$="thought"){let Z=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return o_(Z)}async function h3(_,$,Z){return o_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(Z)})})}function z2(_){return`/media/${_}`}function p3(_){return`/media/${_}/thumbnail`}async function i2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function l2(_="",$=2,Z=!1){let J=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${Z?"1":"0"}`;return o_(J)}async function i3(_,$=20000,Z=null){let J=Z?`&mode=${encodeURIComponent(Z)}`:"",X=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${J}`;return o_(X)}async function l3(_){return o_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function y1(_,$="",Z={}){let J=new FormData;J.append("file",_);let X=new URLSearchParams;if($)X.set("path",$);if(Z.overwrite)X.set("overwrite","1");let Y=X.toString(),j=Y?`/workspace/upload?${Y}`:"/workspace/upload",G=await fetch(""+j,{method:"POST",body:J});if(!G.ok){let N=await G.json().catch(()=>({error:"Upload failed"})),O=Error(N.error||`HTTP ${G.status}`);throw O.status=G.status,O.code=N.code,O}return G.json()}async function n3(_,$,Z=""){let J=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:Z})});if(!J.ok){let X=await J.json().catch(()=>({error:"Create failed"})),Y=Error(X.error||`HTTP ${J.status}`);throw Y.status=J.status,Y.code=X.code,Y}return J.json()}async function o3(_,$){let Z=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Rename failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function d3(_,$){let Z=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Move failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function r3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return o_($,{method:"DELETE"})}async function n2(_,$=!1){return o_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function A1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function s3(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class w1{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_queued",(_)=>{this.onEvent("agent_followup_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_consumed",(_)=>{this.onEvent("agent_followup_consumed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_removed",(_)=>{this.onEvent("agent_followup_removed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,Z=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,Z+$),this.reconnectAttempts=0;let J=Math.max(this.cooldownUntil-Z,0),X=Math.max(this.reconnectDelay,J);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},X),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function R0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function I_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function Q2(_,$=!1){let Z=R0(_);if(Z===null)return $;return Z==="true"}function U2(_,$=null){let Z=R0(_);if(Z===null)return $;let J=parseInt(Z,10);return Number.isFinite(J)?J:$}function _2({prefix:_="file",label:$,title:Z,onRemove:J,onClick:X,removeTitle:Y="Remove",icon:j="file"}){let G=`${_}-file-pill`,N=`${_}-file-name`,O=`${_}-file-remove`,W=j==="message"?Q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return Q`
    <span class=${G} title=${Z||$} onClick=${X}>
      ${W}
      <span class=${N}>${$}</span>
      ${J&&Q`
        <button
          class=${O}
          onClick=${(H)=>{H.preventDefault(),H.stopPropagation(),J()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var S8=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function x8({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,J=_.contextWindow,X=Z!=null?`Context: ${a3(Z)} / ${a3(J)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,Y=7,j=2*Math.PI*7,G=$/100*j,N=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return Q`
        <span class="compose-context-pie icon-btn" title=${X}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${N}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${j}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function a3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function t3({onPost:_,onFocus:$,searchMode:Z,onSearch:J,onEnterSearch:X,onExitSearch:Y,fileRefs:j=[],onRemoveFileRef:G,onClearFileRefs:N,messageRefs:O=[],onRemoveMessageRef:W,onClearMessageRefs:H,activeModel:E=null,modelUsage:D=null,thinkingLevel:C=null,supportsThinking:w=!1,contextUsage:T=null,notificationsEnabled:U=!1,notificationPermission:b="default",onToggleNotifications:u,onModelChange:y,onModelStateChange:f,activeEditorPath:p=null,onAttachEditorFile:l,onOpenFilePill:Y_,followupQueueItems:N_=[],onInjectQueuedFollowup:$_,onRemoveQueuedFollowup:V_,onMessageResponse:P_,isAgentActive:a=!1}){let[e,d]=v(""),[i,Z_]=v(""),[j_,J_]=v([]),[T_,X_]=v(!1),[O_,q_]=v([]),[L_,A_]=v(0),[F_,U_]=v(!1),[k_,v_]=v(!1),[w_,M_]=v(!1),[C_,c_]=v([]),[l_,S_]=v(!1),K_=L(null),z0=L(null),t_=L(null),M0=L(null),K0=L(0),C0=200,z_=(z)=>{let I=new Set,r=[];for(let B_ of z||[]){if(typeof B_!=="string")continue;let y_=B_.trim();if(!y_||I.has(y_))continue;I.add(y_),r.push(y_)}return r},Q0=()=>{let z=R0("piclaw_compose_history");if(!z)return[];try{let I=JSON.parse(z);if(!Array.isArray(I))return[];return z_(I)}catch{return[]}},y0=(z)=>{I_("piclaw_compose_history",JSON.stringify(z))},S=L(Q0()),__=L(-1),E_=L(""),J0=e.trim()||j_.length>0||j.length>0||O.length>0,m_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),S0=typeof window<"u"&&typeof Notification<"u",x0=typeof window<"u"?Boolean(window.isSecureContext):!1,G0=S0&&x0&&b!=="denied",R_=b==="granted"&&U,U0=R_?"Disable notifications":"Enable notifications",r_=E||"",f_=w&&C?` (${C})`:"",$2=f_.trim()?`${C}`:"",Z2=typeof D?.hint_short==="string"?D.hint_short.trim():"",g0=[$2||null,Z2||null].filter(Boolean).join(" • "),K2=[r_?`Current model: ${r_}${f_}`:null,D?.plan?`Plan: ${D.plan}`:null,Z2||null,D?.primary?.reset_description||null,D?.secondary?.reset_description||null].filter(Boolean),A0=k_?"Switching model…":K2.join(" • ")||`Current model: ${r_}${f_} (tap to open model picker)`,H0=(z)=>{if(!z||typeof z!=="object")return;let I=z.model??z.current;if(typeof f==="function")f({model:I??null,thinking_level:z.thinking_level??null,supports_thinking:z.supports_thinking,provider_usage:z.provider_usage??null});if(I&&typeof y==="function")y(I)},O0=(z)=>{let I=z||K_.current;if(!I)return;I.style.height="auto",I.style.height=`${I.scrollHeight}px`,I.style.overflowY="hidden"},w0=(z)=>{if(!z.startsWith("/")||z.includes(`
`)){U_(!1),q_([]);return}let I=z.toLowerCase().split(" ")[0];if(I.length<1){U_(!1),q_([]);return}let r=S8.filter((B_)=>B_.name.startsWith(I)||B_.name.replace(/-/g,"").startsWith(I.replace(/-/g,"")));if(r.length>0&&!(r.length===1&&r[0].name===I))q_(r),A_(0),U_(!0);else U_(!1),q_([])},e_=(z)=>{let I=e,r=I.indexOf(" "),B_=r>=0?I.slice(r):"",y_=z.name+B_;d(y_),U_(!1),q_([]),requestAnimationFrame(()=>{let x_=K_.current;if(!x_)return;let Q_=y_.length;x_.selectionStart=Q_,x_.selectionEnd=Q_,x_.focus()})},s_=(z)=>{if(Z)Z_(z);else d(z),w0(z);requestAnimationFrame(()=>O0())},J2=(z)=>{let I=Z?i:e,r=I&&!I.endsWith(`
`)?`
`:"",B_=`${I}${r}${z}`.trimStart();s_(B_)},G2=(z)=>{let I=z?.command?.model_label;if(I)return I;let r=z?.command?.message;if(typeof r==="string"){let B_=r.match(/•\s+([^\n]+?)\s+\(current\)/);if(B_?.[1])return B_[1].trim()}return null},u0=async(z)=>{if(Z||k_)return;v_(!0);try{let I=await L1("default",z,null,[]),r=G2(I);H0({model:r??E??null,thinking_level:I?.command?.thinking_level,supports_thinking:I?.command?.supports_thinking});try{let B_=await j2();if(B_)H0(B_)}catch{}return _?.(),!0}catch(I){return console.error("Failed to switch model:",I),alert("Failed to switch model: "+I.message),!1}finally{v_(!1)}},E2=async()=>{await u0("/cycle-model")},h_=async(z)=>{if(!z||k_)return;if(await u0(`/model ${z}`))M_(!1)},L0=(z)=>{z.preventDefault(),z.stopPropagation(),M_((I)=>!I)},F0=(z)=>{if(z==="queue"||z==="steer"||z==="auto")return z;return a?"queue":null},g_=async(z,I,r={})=>{let{includeMedia:B_=!0,includeFileRefs:y_=!0,includeMessageRefs:x_=!0,clearAfterSubmit:Q_=!0,recordHistory:N0=!0}=r||{},p0=typeof z==="string"?z:z&&typeof z?.target?.value==="string"?z.target.value:e,E0=typeof p0==="string"?p0:"";if(!E0.trim()&&(B_?j_.length===0:!0)&&(y_?j.length===0:!0)&&(x_?O.length===0:!0))return;U_(!1),q_([]);let Y2=B_?[...j_]:[],V2=y_?[...j]:[],X0=x_?[...O]:[],W0=E0.trim();if(N0&&W0){let p_=S.current,B0=z_(p_.filter((_0)=>_0!==W0));if(B0.push(W0),B0.length>200)B0.splice(0,B0.length-200);S.current=B0,y0(B0),__.current=-1,E_.current=""}if(Q_)d(""),J_([]),N?.(),H?.();(async()=>{try{let p_=[];for(let $0 of Y2){let P0=await u3($0);p_.push(P0.id)}let B0=V2.length?`Files:
${V2.map(($0)=>`- ${$0}`).join(`
`)}`:"",_0=X0.length?`Referenced messages:
${X0.map(($0)=>`- message:${$0}`).join(`
`)}`:"",n_=p_.length?`Images:
${p_.map(($0,P0)=>{let l0=Y2[P0]?.name||`image-${P0+1}`;return`- attachment:${$0} (${l0})`}).join(`
`)}`:"",a0=[W0,B0,_0,n_].filter(Boolean).join(`

`),i0=await L1("default",a0,null,p_,F0(I));if(P_?.(i0),i0?.command){H0({model:i0.command.model_label??E??null,thinking_level:i0.command.thinking_level,supports_thinking:i0.command.supports_thinking});try{let $0=await j2();if($0)H0($0)}catch{}}_?.()}catch(p_){console.error("Failed to post:",p_)}})()},b_=(z)=>{$_?.(z)},a_=(z)=>{if(z.isComposing)return;if(Z&&z.key==="Escape"){z.preventDefault(),Z_(""),Y?.();return}if(F_&&O_.length>0){let I=K_.current?.value??(Z?i:e);if(!String(I||"").startsWith("/"))U_(!1),q_([]);else{if(z.key==="ArrowDown"){z.preventDefault(),A_((r)=>(r+1)%O_.length);return}if(z.key==="ArrowUp"){z.preventDefault(),A_((r)=>(r-1+O_.length)%O_.length);return}if(z.key==="Tab"){z.preventDefault(),e_(O_[L_]);return}if(z.key==="Enter"&&!z.shiftKey){if(!(K_.current?.value??(Z?i:e)).includes(" ")){z.preventDefault();let y_=O_[L_];U_(!1),q_([]),g_(y_.name);return}}if(z.key==="Escape"){z.preventDefault(),U_(!1),q_([]);return}}}if(!Z&&(z.key==="ArrowUp"||z.key==="ArrowDown")&&!z.metaKey&&!z.ctrlKey&&!z.altKey&&!z.shiftKey){let I=K_.current;if(!I)return;let r=I.value||"",B_=I.selectionStart===0&&I.selectionEnd===0,y_=I.selectionStart===r.length&&I.selectionEnd===r.length;if(z.key==="ArrowUp"&&B_||z.key==="ArrowDown"&&y_){let x_=S.current;if(!x_.length)return;z.preventDefault();let Q_=__.current;if(z.key==="ArrowUp"){if(Q_===-1)E_.current=r,Q_=x_.length-1;else if(Q_>0)Q_-=1;__.current=Q_,s_(x_[Q_]||"")}else{if(Q_===-1)return;if(Q_<x_.length-1)Q_+=1,__.current=Q_,s_(x_[Q_]||"");else __.current=-1,s_(E_.current||""),E_.current=""}requestAnimationFrame(()=>{let N0=K_.current;if(!N0)return;let p0=N0.value.length;N0.selectionStart=p0,N0.selectionEnd=p0});return}}if(z.key==="Enter"&&!z.shiftKey&&(z.ctrlKey||z.metaKey)){z.preventDefault();let I=K_.current?.value??(Z?i:e);if(Z){if(I.trim())J?.(I.trim())}else g_(I,"steer");return}if(z.key==="Enter"&&!z.shiftKey){z.preventDefault();let I=K_.current?.value??(Z?i:e);if(Z){if(I.trim())J?.(I.trim())}else g_(I)}},Y0=(z)=>{let I=Array.from(z||[]).filter((r)=>r&&r.type&&r.type.startsWith("image/"));if(!I.length)return;J_((r)=>[...r,...I])},I0=(z)=>{Y0(z.target.files),z.target.value=""},b0=(z)=>{if(Z)return;z.preventDefault(),z.stopPropagation(),K0.current+=1,X_(!0)},c0=(z)=>{if(Z)return;if(z.preventDefault(),z.stopPropagation(),K0.current=Math.max(0,K0.current-1),K0.current===0)X_(!1)},V0=(z)=>{if(Z)return;if(z.preventDefault(),z.stopPropagation(),z.dataTransfer)z.dataTransfer.dropEffect="copy";X_(!0)},T0=(z)=>{if(Z)return;z.preventDefault(),z.stopPropagation(),K0.current=0,X_(!1),Y0(z.dataTransfer?.files||[])},r0=(z)=>{if(Z)return;let I=z.clipboardData?.items;if(!I||!I.length)return;let r=[];for(let B_ of I){if(B_.kind!=="file")continue;let y_=B_.getAsFile?.();if(y_)r.push(y_)}if(r.length>0)z.preventDefault(),Y0(r)},s0=(z)=>{J_((I)=>I.filter((r,B_)=>B_!==z))},m0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((z)=>{let{latitude:I,longitude:r,accuracy:B_}=z.coords,y_=`${I.toFixed(5)}, ${r.toFixed(5)}`,x_=Number.isFinite(B_)?` ±${Math.round(B_)}m`:"",Q_=`https://maps.google.com/?q=${I},${r}`,N0=`Location: ${y_}${x_} ${Q_}`;J2(N0)},(z)=>{let I=z?.message||"Unable to retrieve location.";alert(`Location error: ${I}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};m(()=>{if(!w_)return;S_(!0),j2().then((z)=>{let I=Array.isArray(z?.models)?z.models.filter((r)=>typeof r==="string"&&r.trim().length>0):[];c_(I),H0(z)}).catch((z)=>{console.warn("Failed to load model list:",z),c_([])}).finally(()=>{S_(!1)})},[w_,E]),m(()=>{if(Z)M_(!1)},[Z]),m(()=>{if(!w_)return;let z=(I)=>{let r=t_.current,B_=M0.current,y_=I.target;if(r&&r.contains(y_))return;if(B_&&B_.contains(y_))return;M_(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[w_]);let h0=(z)=>{let I=z.target.value;O0(z.target),s_(I)};return m(()=>{requestAnimationFrame(()=>O0())},[e,i,Z]),Q`
        <div class="compose-box">
            ${!Z&&N_.length>0&&Q`
                <div class="compose-queue-stack">
                    ${N_.map((z)=>{let I=typeof z?.content==="string"?z.content:"";if(!I.trim())return null;return Q`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${I}>
                                    ${I}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>b_(z)}
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
                                    onClick=${()=>V_?.(z)}
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
                class=${`compose-input-wrapper${T_?" drag-active":""}`}
                onDragEnter=${b0}
                onDragOver=${V0}
                onDragLeave=${c0}
                onDrop=${T0}
            >
                <div class="compose-input-main">
                    ${(j.length>0||j_.length>0||O.length>0)&&Q`
                        <div class="compose-file-refs">
                            ${O.map((z)=>{return Q`
                                    <${_2}
                                        key=${"msg-"+z}
                                        prefix="compose"
                                        label=${"msg:"+z}
                                        title=${"Message reference: "+z}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>W?.(z)}
                                    />
                                `})}
                            ${j.map((z)=>{let I=z.split("/").pop()||z;return Q`
                                    <${_2}
                                        prefix="compose"
                                        label=${I}
                                        title=${z}
                                        onClick=${()=>Y_?.(z)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(z)}
                                    />
                                `})}
                            ${j_.map((z,I)=>{let r=z?.name||`image-${I+1}`;return Q`
                                    <${_2}
                                        key=${r+I}
                                        prefix="compose"
                                        label=${r}
                                        title=${r}
                                        removeTitle="Remove image"
                                        onRemove=${()=>s0(I)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${K_}
                        placeholder=${Z?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${Z?i:e}
                        onInput=${h0}
                        onKeyDown=${a_}
                        onPaste=${r0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${F_&&O_.length>0&&Q`
                        <div class="slash-autocomplete" ref=${z0}>
                            ${O_.map((z,I)=>Q`
                                <div
                                    key=${z.name}
                                    class=${`slash-item${I===L_?" active":""}`}
                                    onMouseDown=${(r)=>{r.preventDefault(),e_(z)}}
                                    onMouseEnter=${()=>A_(I)}
                                >
                                    <span class="slash-name">${z.name}</span>
                                    <span class="slash-desc">${z.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${w_&&!Z&&Q`
                        <div class="compose-model-popup" ref=${t_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${l_&&Q`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!l_&&C_.length===0&&Q`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!l_&&C_.map((z)=>Q`
                                    <button
                                        key=${z}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${E===z?" active":""}`}
                                        onClick=${()=>{h_(z)}}
                                        disabled=${k_}
                                    >
                                        ${z}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{E2()}}
                                    disabled=${k_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!Z&&E&&Q`
                    <div class="compose-meta-row">
                        ${!Z&&E&&Q`
                            <div class="compose-model-meta">
                                <button
                                    ref=${M0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${A0}
                                    aria-label="Open model picker"
                                    onClick=${L0}
                                    disabled=${k_}
                                >
                                    ${k_?"Switching…":r_}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!k_&&g0&&Q`
                                        <span class="compose-model-usage-hint" title=${A0}>
                                            ${g0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${Z?"search-mode":""}">
                    ${!Z&&T&&T.percent!=null&&Q`
                        <${x8} usage=${T} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${Z?Y:X}
                        title=${Z?"Close search":"Search"}
                    >
                        ${Z?Q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:Q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${m_&&!Z&&Q`
                        <button
                            class="icon-btn location-btn"
                            onClick=${m0}
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
                    ${G0&&!Z&&Q`
                        <button
                            class=${`icon-btn notification-btn${R_?" active":""}`}
                            onClick=${u}
                            title=${U0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!Z&&Q`
                        ${p&&l&&Q`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${l}
                                title=${`Attach open file: ${p}`}
                                type="button"
                                disabled=${j.includes(p)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${I0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{g_()}}
                            disabled=${!J0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var _4="piclaw_theme",M1="piclaw_tint",r2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},I8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},e3={default:{label:"Default",mode:"auto",light:r2,dark:I8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},T8=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],s2={theme:"default",tint:null},$4="light",b1=!1;function Z4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function H2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let Z=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(Z)&&!/^[0-9a-fA-F]{6}$/.test(Z))return null;let J=Z.length===3?Z.split("").map((Y)=>Y+Y).join(""):Z,X=parseInt(J,16);return{r:X>>16&255,g:X>>8&255,b:X&255,hex:`#${J.toLowerCase()}`}}function f8(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let Z=document.createElement("div");if(Z.style.color="",Z.style.color=$,!Z.style.color)return null;let J=Z.style.color;try{if(document.body)Z.style.display="none",document.body.appendChild(Z),J=getComputedStyle(Z).color||Z.style.color,document.body.removeChild(Z)}catch{}let X=J.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!X)return null;let Y=parseInt(X[1],10),j=parseInt(X[2],10),G=parseInt(X[3],10);if(![Y,j,G].every((O)=>Number.isFinite(O)))return null;let N=`#${[Y,j,G].map((O)=>O.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:j,b:G,hex:N}}function J4(_){return H2(_)||f8(_)}function A2(_,$,Z){let J=Math.round(_.r+($.r-_.r)*Z),X=Math.round(_.g+($.g-_.g)*Z),Y=Math.round(_.b+($.b-_.b)*Z);return`rgb(${J} ${X} ${Y})`}function P1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function Y4(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function S1(_){return e3[_]||e3.default}function v8(_){return _.mode==="auto"?Y4():_.mode}function R8(_,$){let Z=S1(_);if($==="dark"&&Z.dark)return Z.dark;if($==="light"&&Z.light)return Z.light;return Z.dark||Z.light||r2}function g8(_,$,Z){let J=J4($);if(!J)return _;let X=H2(_.bgPrimary),Y=H2(_.bgSecondary),j=H2(_.bgHover),G=H2(_.borderColor);if(!X||!Y||!j||!G)return _;let O=H2(Z==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:A2(X,J,0.08),bgSecondary:A2(Y,J,0.12),bgHover:A2(j,J,0.16),borderColor:A2(G,J,0.08),accent:J.hex,accentHover:O?A2(J,O,0.18):J.hex}}function u8(_,$){if(typeof document>"u")return;let Z=document.documentElement,J=_.accent,X=J4(J),Y=X?P1(X,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,j=X?P1(X,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=X?P1(X,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",N={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":J,"--accent-hover":_.accentHover||J,"--accent-soft":j,"--accent-soft-strong":G,"--danger-color":_.danger||r2.danger,"--success-color":_.success||r2.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(N).forEach(([O,W])=>{if(W)Z.style.setProperty(O,W)})}function c8(){if(typeof document>"u")return;let _=document.documentElement;T8.forEach(($)=>_.style.removeProperty($))}function o2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function m8(_,$){if(typeof document>"u")return;let Z=o2("theme-color");if(Z&&_)Z.setAttribute("content",_);let J=o2("msapplication-TileColor");if(J&&_)J.setAttribute("content",_);let X=o2("msapplication-navbutton-color");if(X&&_)X.setAttribute("content",_);let Y=o2("apple-mobile-web-app-status-bar-style");if(Y)Y.setAttribute("content",$==="dark"?"black-translucent":"default")}function h8(){if(typeof window>"u")return;let _={...s2,mode:$4};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function x1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let Z=Z4(_?.theme||"default"),J=_?.tint?String(_.tint).trim():null,X=S1(Z),Y=v8(X),j=R8(Z,Y);s2={theme:Z,tint:J},$4=Y;let G=document.documentElement;G.dataset.theme=Y,G.dataset.colorTheme=Z,G.dataset.tint=J?String(J):"",G.style.colorScheme=Y;let N=j;if(Z==="default"&&J)N=g8(j,J,Y);if(Z==="default"&&!J)c8();else u8(N,Y);if(m8(N.bgPrimary,Y),h8(),$.persist!==!1)if(I_(_4,Z),J)I_(M1,J);else I_(M1,"")}function d2(){if(S1(s2.theme).mode!=="auto")return;x1(s2,{persist:!1})}function X4(){if(typeof window>"u")return()=>{};let _=Z4(R0(_4)||"default"),$=R0(M1),Z=$?$.trim():null;if(x1({theme:_,tint:Z},{persist:!1}),window.matchMedia&&!b1){let J=window.matchMedia("(prefers-color-scheme: dark)");if(J.addEventListener)J.addEventListener("change",d2);else if(J.addListener)J.addListener(d2);return b1=!0,()=>{if(J.removeEventListener)J.removeEventListener("change",d2);else if(J.removeListener)J.removeListener(d2);b1=!1}}return()=>{}}function W4(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let Z=_.theme??_.name??_.colorTheme,J=_.tint??null;x1({theme:Z||"default",tint:J},{persist:!0})}function j4(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return Y4()}var a2=/#(\w+)/g,p8=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),i8=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),l8=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),n8={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},o8=new Set(["http:","https:","mailto:",""]);function K4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function L2(_,$={}){if(!_)return null;let Z=String(_).trim();if(!Z)return null;if(Z.startsWith("#")||Z.startsWith("/"))return Z;if(Z.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(Z))return Z;return null}if(Z.startsWith("blob:"))return Z;try{let J=new URL(Z,typeof window<"u"?window.location.origin:"http://localhost");if(!o8.has(J.protocol))return null;return J.href}catch{return null}}function G4(_,$={}){if(!_)return"";let Z=new DOMParser().parseFromString(_,"text/html"),J=[],X=Z.createTreeWalker(Z.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=X.nextNode())J.push(Y);for(let j of J){let G=j.tagName.toLowerCase();if(!i8.has(G)){let O=j.parentNode;if(!O)continue;while(j.firstChild)O.insertBefore(j.firstChild,j);O.removeChild(j);continue}let N=n8[G]||new Set;for(let O of Array.from(j.attributes)){let W=O.name.toLowerCase(),H=O.value;if(W.startsWith("on")){j.removeAttribute(O.name);continue}if(W.startsWith("data-")||W.startsWith("aria-"))continue;if(N.has(W)||l8.has(W)){if(W==="href"){let E=L2(H);if(!E)j.removeAttribute(O.name);else if(j.setAttribute(O.name,E),G==="a"&&!j.getAttribute("rel"))j.setAttribute("rel","noopener noreferrer")}else if(W==="src"){let E=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(H):H,D=L2(E,{allowDataImage:G==="img"});if(!D)j.removeAttribute(O.name);else j.setAttribute(O.name,D)}continue}j.removeAttribute(O.name)}}return Z.body.innerHTML}function V4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function t2(_,$=2){if(!_)return _;let Z=_;for(let J=0;J<$;J+=1){let X=V4(Z);if(X===Z)break;Z=X}return Z}function d8(_){if(!_)return{text:"",blocks:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=[],Y=!1,j=[];for(let G of Z){if(!Y&&G.trim().match(/^```mermaid\s*$/i)){Y=!0,j=[];continue}if(Y&&G.trim().match(/^```\s*$/)){let N=J.length;J.push(j.join(`
`)),X.push(`@@MERMAID_BLOCK_${N}@@`),Y=!1,j=[];continue}if(Y)j.push(G);else X.push(G)}if(Y)X.push("```mermaid"),X.push(...j);return{text:X.join(`
`),blocks:J}}function r8(_){if(!_)return _;return t2(_,5)}function s8(_){let $=new TextEncoder().encode(String(_||"")),Z="";for(let J of $)Z+=String.fromCharCode(J);return btoa(Z)}function a8(_){let $=atob(String(_||"")),Z=new Uint8Array($.length);for(let J=0;J<$.length;J+=1)Z[J]=$.charCodeAt(J);return new TextDecoder().decode(Z)}function t8(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(Z,J)=>{let X=Number(J),Y=$[X]??"",j=r8(Y);return`<div class="mermaid-container" data-mermaid="${s8(j)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function N4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,Z)=>{if(Z.includes(`
`))return`
\`\`\`
${Z}
\`\`\`
`;return`\`${Z}\``})}function O4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,Z)=>{let J=Z.trim(),X=J.startsWith("/"),Y=X?J.slice(1).trim():J,N=(Y.endsWith("/")?Y.slice(0,-1).trim():Y).split(/\s+/)[0]?.toLowerCase();if(!N||!p8.has(N))return $;if(N==="br")return X?"":"<br>";if(X)return`</${N}>`;return`<${N}>`})}function B4(_){if(!_)return _;let $=(Z)=>Z.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(Z,J)=>`<pre><code>${$(J)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(Z,J)=>`<code>${$(J)}</code>`)}function q4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),X;while(X=Z.nextNode()){if(!X.nodeValue)continue;let Y=J(X.nodeValue);if(Y!==X.nodeValue)X.nodeValue=Y}return $.body.innerHTML}function e8(_){if(!window.katex)return _;let $=(j)=>V4(j).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),Z=(j)=>{let G=[],N=j.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(O)=>{let W=G.length;return G.push(O),`@@CODE_BLOCK_${W}@@`});return N=N.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(O)=>{let W=G.length;return G.push(O),`@@CODE_INLINE_${W}@@`}),{html:N,blocks:G}},J=(j,G)=>{if(!G.length)return j;return j.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(N,O)=>{let W=Number(O);return G[W]??""})},X=Z(_),Y=X.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(j,G,N)=>{try{let O=katex.renderToString($(N.trim()),{displayMode:!0,throwOnError:!1});return`${G}${O}`}catch(O){return`<span class="math-error" title="${K4(O.message)}">${j}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(j,G,N)=>{if(/\s$/.test(N))return j;try{let O=katex.renderToString($(N),{displayMode:!1,throwOnError:!1});return`${G}${O}`}catch(O){return`${G}<span class="math-error" title="${K4(O.message)}">$${N}$</span>`}}),J(Y,X.blocks)}function _6(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=[],X;while(X=Z.nextNode())J.push(X);for(let Y of J){let j=Y.nodeValue;if(!j)continue;if(a2.lastIndex=0,!a2.test(j))continue;a2.lastIndex=0;let G=Y.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let N=j.split(a2);if(N.length<=1)continue;let O=$.createDocumentFragment();N.forEach((W,H)=>{if(H%2===1){let E=$.createElement("a");E.setAttribute("href","#"),E.className="hashtag",E.setAttribute("data-hashtag",W),E.textContent=`#${W}`,O.appendChild(E)}else O.appendChild($.createTextNode(W))}),Y.parentNode?.replaceChild(O,Y)}return $.body.innerHTML}function $6(_){if(!_)return _;let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=!1;for(let Y of Z){if(!X&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){X=!0,J.push("$$");continue}if(X&&Y.trim().match(/^```\s*$/)){X=!1,J.push("$$");continue}J.push(Y)}return J.join(`
`)}function F2(_,$,Z={}){if(!_)return"";let J=$6(_),{text:X,blocks:Y}=d8(J),j=t2(X,2),N=N4(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),O=O4(N),W=window.marked?marked.parse(O,{headerIds:!1,mangle:!1}):O.replace(/\n/g,"<br>");return W=B4(W),W=q4(W),W=e8(W),W=_6(W),W=t8(W,Y),W=G4(W,Z),W}function z4(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),Z=t2($,2),X=N4(Z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=O4(X),j=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return j=B4(j),j=q4(j),j=G4(j),j}async function e2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:Z}=window.beautifulMermaid,X=j4()==="dark"?Z["tokyo-night"]:Z["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let j of Y)try{let G=j.dataset.mermaid,N=a8(G||""),O=t2(N,2),W=await $(O,{...X,transparent:!0});j.innerHTML=W,j.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let N=document.createElement("pre");N.className="mermaid-error",N.textContent=`Diagram error: ${G.message}`,j.innerHTML="",j.appendChild(N),j.removeAttribute("data-mermaid")}}var Q4="PiClaw";function I1(_,$){let Z=_||"PiClaw",J=Z.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=J.charCodeAt(0)%X.length,j=X[Y],G=Z.trim().toLowerCase(),N=typeof $==="string"?$.trim():"",W=(N?N:null)||(G==="PiClaw".toLowerCase()||G==="pi"?"/static/icon-192.png":null);return{letter:J,color:j,image:W}}function U4(_,$){if(!_)return"PiClaw";let Z=$[_]?.name||_;return Z?Z.charAt(0).toUpperCase()+Z.slice(1):"PiClaw"}function H4(_,$){if(!_)return null;let Z=$[_]||{};return Z.avatar_url||Z.avatarUrl||Z.avatar||null}function L4(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,j=Y?.dataset?.colorTheme||"",G=Y?.dataset?.tint||"",N=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(N&&(G||j&&j!=="default"))return N}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],Z=String(_),J=0;for(let Y=0;Y<Z.length;Y+=1)J=(J*31+Z.charCodeAt(Y))%2147483647;let X=Math.abs(J)%$.length;return $[X]}function F4({status:_,draft:$,plan:Z,thought:J,pendingRequest:X,intent:Y,turnId:j,steerQueued:G,onPanelToggle:N}){let H=(X_)=>{if(!X_)return{text:"",totalLines:0,fullText:""};if(typeof X_==="string"){let A_=X_,F_=A_?A_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:A_,totalLines:F_,fullText:A_}}let O_=X_.text||"",q_=X_.fullText||X_.full_text||O_,L_=Number.isFinite(X_.totalLines)?X_.totalLines:q_?q_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:O_,totalLines:L_,fullText:q_}},E=160,D=(X_)=>{if(!X_)return 1;return Math.max(1,Math.ceil(X_.length/160))},C=(X_,O_,q_)=>{let L_=(X_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!L_)return{text:"",omitted:0,totalLines:Number.isFinite(q_)?q_:0,visibleLines:0};let A_=L_.split(`
`),F_=A_.length>O_?A_.slice(0,O_).join(`
`):L_,U_=Number.isFinite(q_)?q_:A_.reduce((w_,M_)=>w_+D(M_),0),k_=F_?F_.split(`
`).reduce((w_,M_)=>w_+D(M_),0):0,v_=Math.max(U_-k_,0);return{text:F_,omitted:v_,totalLines:U_,visibleLines:k_}},w=H(Z),T=H(J),U=H($),b=Boolean(w.text)||w.totalLines>0,u=Boolean(T.text)||T.totalLines>0,y=Boolean(U.fullText?.trim()||U.text?.trim());if(!_&&!y&&!b&&!u&&!X&&!Y)return null;let[f,p]=v(new Set),l=(X_)=>p((O_)=>{let q_=new Set(O_),L_=!q_.has(X_);if(L_)q_.add(X_);else q_.delete(X_);if(typeof N==="function")N(X_,L_);return q_});m(()=>{p(new Set)},[j]);let Y_=_?.turn_id||j,N_=L4(Y_),$_=G?"turn-dot turn-dot-queued":"turn-dot",V_=(X_)=>X_,P_=Boolean(_?.last_activity||_?.lastActivity),a=Y?.kind||"info",e=a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":N_,d="",i=_?.title,Z_=_?.status;if(_?.type==="plan")d=i?`Planning: ${i}`:"Planning...";else if(_?.type==="tool_call")d=i?`Running: ${i}`:"Running tool...";else if(_?.type==="tool_status")d=i?`${i}: ${Z_||"Working..."}`:Z_||"Working...";else if(_?.type==="error")d=i||"Agent error";else d=i||Z_||"Working...";if(P_)d="Last activity just now";let j_=({panelTitle:X_,text:O_,fullText:q_,totalLines:L_,maxLines:A_,titleClass:F_,panelKey:U_})=>{let k_=f.has(U_),v_=q_||O_||"",w_=typeof A_==="number",M_=k_&&w_,C_=w_?C(v_,A_,L_):{text:v_||"",omitted:0,totalLines:Number.isFinite(L_)?L_:0};if(!v_&&!(Number.isFinite(C_.totalLines)&&C_.totalLines>0))return null;let c_=`agent-thinking-body${w_?" agent-thinking-body-collapsible":""}`,l_=w_?`--agent-thinking-collapsed-lines: ${A_};`:"";return Q`
            <div
                class="agent-thinking"
                data-expanded=${k_?"true":"false"}
                data-collapsible=${w_?"true":"false"}
                style=${N_?`--turn-color: ${N_};`:""}
            >
                <div class="agent-thinking-title ${F_||""}">
                    ${N_&&Q`<span class=${$_} aria-hidden="true"></span>`}
                    ${X_}
                    ${M_&&Q`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${X_} panel`}
                            onClick=${()=>l(U_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${c_}
                    style=${l_}
                    dangerouslySetInnerHTML=${{__html:z4(v_)}}
                />
                ${!k_&&C_.omitted>0&&Q`
                    <button class="agent-thinking-truncation" onClick=${()=>l(U_)}>
                        ▸ ${C_.omitted} more lines
                    </button>
                `}
                ${k_&&C_.omitted>0&&Q`
                    <button class="agent-thinking-truncation" onClick=${()=>l(U_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},J_=X?.tool_call?.title,T_=J_?`Awaiting approval: ${J_}`:"Awaiting approval";return Q`
        <div class="agent-status-panel">
            ${Y&&Q`
                <div
                    class="agent-thinking agent-thinking-intent"
                    aria-live="polite"
                    style=${e?`--turn-color: ${e};`:""}
                    title=${Y?.detail||""}
                >
                    <div class="agent-thinking-title intent">
                        ${e&&Q`<span class=${$_} aria-hidden="true"></span>`}
                        ${Y.title}
                    </div>
                    ${Y.detail&&Q`<div class="agent-thinking-body">${Y.detail}</div>`}
                </div>
            `}
            ${X&&Q`
                <div class="agent-status agent-status-request" aria-live="polite" style=${N_?`--turn-color: ${N_};`:""}>
                    <span class=${$_} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${T_}</span>
                </div>
            `}
            ${b&&j_({panelTitle:V_("Planning"),text:w.text,fullText:w.fullText,totalLines:w.totalLines,panelKey:"plan"})}
            ${u&&j_({panelTitle:V_("Thoughts"),text:T.text,fullText:T.fullText,totalLines:T.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${y&&j_({panelTitle:V_("Draft"),text:U.text,fullText:U.fullText,totalLines:U.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&Q`
                <div class=${`agent-status${P_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${N_?`--turn-color: ${N_};`:""}>
                    ${N_&&Q`<span class=${$_} aria-hidden="true"></span>`}
                    ${_?.type==="error"?Q`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!P_&&Q`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${d}</span>
                </div>
            `}
        </div>
    `}function E4({request:_,onRespond:$}){if(!_)return null;let{request_id:Z,tool_call:J,options:X}=_,Y=J?.title||"Agent Request",j=J?.kind||"other",G=J?.rawInput||{},N=G.command||G.commands&&G.commands[0]||null,O=G.diff||null,W=G.fileName||G.path||null,H=J?.description||G.description||G.explanation||null,D=(Array.isArray(J?.locations)?J.locations:[]).map((b)=>b?.path).filter((b)=>Boolean(b)),C=Array.from(new Set([W,...D].filter(Boolean)));console.log("AgentRequestModal:",{request_id:Z,tool_call:J,options:X});let w=async(b)=>{try{await C1(Z,b),$()}catch(u){console.error("Failed to respond to agent request:",u)}},T=async()=>{try{await c3(Y,`Auto-approved: ${Y}`),await C1(Z,"approved"),$()}catch(b){console.error("Failed to add to whitelist:",b)}},U=X&&X.length>0;return Q`
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
                ${(H||N||O||C.length>0)&&Q`
                    <div class="agent-request-body">
                        ${H&&Q`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${C.length>0&&Q`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${C.map((b,u)=>Q`<li key=${u}>${b}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${N&&Q`
                            <pre class="agent-request-command">${N}</pre>
                        `}
                        ${O&&Q`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${O}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${U?X.map((b)=>Q`
                            <button 
                                key=${b.optionId||b.id||String(b)}
                                class="agent-request-btn ${b.kind==="allow_once"||b.kind==="allow_always"?"primary":""}"
                                onClick=${()=>w(b.optionId||b.id||b)}
                            >
                                ${b.name||b.label||b.optionId||b.id||String(b)}
                            </button>
                        `):Q`
                        <button class="agent-request-btn primary" onClick=${()=>w("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>w("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${T}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function D4({status:_}){if(_==="connected")return null;return Q`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function k4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let J=new Date-$,X=J/1000,Y=86400000;if(J<Y){if(X<60)return"just now";if(X<3600)return`${Math.floor(X/60)}m`;return`${Math.floor(X/3600)}h`}if(J<5*Y){let N=$.toLocaleDateString(void 0,{weekday:"short"}),O=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${N} ${O}`}let j=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${j} ${G}`}function w2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function d0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function _1(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function C4({src:_,onClose:$}){return m(()=>{let Z=(J)=>{if(J.key==="Escape")$()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[$]),Q`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function Z6({mediaId:_}){let[$,Z]=v(null);if(m(()=>{i2(_).then(Z).catch(()=>{})},[_]),!$)return null;let J=$.filename||"file",X=$.metadata?.size,Y=X?d0(X):"";return Q`
        <a href=${z2(_)} download=${J} class="file-attachment" onClick=${(j)=>j.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${J}</span>
                ${Y&&Q`<span class="file-size">${Y}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function $1({annotations:_}){if(!_)return null;let{audience:$,priority:Z,lastModified:J}=_,X=J?_1(J):null;return Q`
        <div class="content-annotations">
            ${$&&$.length>0&&Q`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof Z==="number"&&Q`
                <span class="content-annotation">Priority: ${Z}</span>
            `}
            ${X&&Q`
                <span class="content-annotation">Updated: ${X}</span>
            `}
        </div>
    `}function J6({block:_}){let $=_.title||_.name||_.uri,Z=_.description,J=_.size?d0(_.size):"",X=_.mime_type||"",Y=X6(X),j=L2(_.uri);return Q`
        <a
            href=${j||"#"}
            class="resource-link"
            target=${j?"_blank":void 0}
            rel=${j?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${Z&&Q`<div class="resource-link-description">${Z}</div>`}
                <div class="resource-link-meta">
                    ${X&&Q`<span>${X}</span>`}
                    ${J&&Q`<span>${J}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function Y6({block:_}){let[$,Z]=v(!1),J=_.uri||"Embedded resource",X=_.text||"",Y=Boolean(_.data),j=_.mime_type||"";return Q`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),Z(!$)}}>
                ${$?"▼":"▶"} ${J}
            </button>
            ${$&&Q`
                ${X&&Q`<pre class="resource-embed-content">${X}</pre>`}
                ${Y&&Q`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${j&&Q`<span class="resource-embed-blob-meta">${j}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let N=new Blob([Uint8Array.from(atob(_.data),(H)=>H.charCodeAt(0))],{type:j||"application/octet-stream"}),O=URL.createObjectURL(N),W=document.createElement("a");W.href=O,W.download=J.split("/").pop()||"resource",W.click(),URL.revokeObjectURL(O)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function X6(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function W6({preview:_}){let $=L2(_.url),Z=L2(_.image,{allowDataImage:!0}),J=Z?`background-image: url('${Z}')`:"",X=_.site_name;if(!X&&$)try{X=new URL($).hostname}catch{X=$}return Q`
        <a
            href=${$||"#"}
            class="link-preview ${Z?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${J}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${X||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&Q`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function j6(_,$){return typeof _==="string"?_:""}var K6=1800,G6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,V6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,N6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function O6(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let Z=document.createElement("textarea");Z.value=$,Z.setAttribute("readonly",""),Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none",document.body.appendChild(Z),Z.select(),Z.setSelectionRange(0,Z.value.length);let J=document.execCommand("copy");return document.body.removeChild(Z),J}catch{return!1}}function B6(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let Z=new Map,J=[],X=(Y,j)=>{let G=j||"idle";if(Y.dataset.copyState=G,G==="success")Y.innerHTML=V6,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(G==="error")Y.innerHTML=N6,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=G6,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let j=document.createElement("div");j.className="post-code-block",Y.parentNode?.insertBefore(j,Y),j.appendChild(Y);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",X(G,"idle"),j.appendChild(G);let N=async(O)=>{O.preventDefault(),O.stopPropagation();let H=Y.querySelector("code")?.textContent||"",E=await O6(H);X(G,E?"success":"error");let D=Z.get(G);if(D)clearTimeout(D);let C=setTimeout(()=>{X(G,"idle"),Z.delete(G)},K6);Z.set(G,C)};G.addEventListener("click",N),J.push(()=>{G.removeEventListener("click",N);let O=Z.get(G);if(O)clearTimeout(O);if(j.parentNode)j.parentNode.insertBefore(Y,j),j.remove()})}),()=>{J.forEach((Y)=>Y())}}function q6(_){if(!_)return{content:_,fileRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Files:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,fileRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O))X.push(O.replace(/^\s*-\s+/,"").trim());else if(!O.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let j=Z.slice(0,J),G=Z.slice(Y),N=[...j,...G].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,fileRefs:X}}function z6(_){if(!_)return{content:_,messageRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Referenced messages:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,messageRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let H=O.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(H)X.push(H[1])}else if(!O.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let j=Z.slice(0,J),G=Z.slice(Y),N=[...j,...G].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,messageRefs:X}}function Q6(_){if(!_)return{content:_,attachments:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Images:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,attachments:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let W=O.replace(/^\s*-\s+/,"").trim(),H=W.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||W.match(/^attachment:([^\s]+)\s+(.+)$/i);if(H){let E=H[1],D=(H[2]||"").trim()||E;X.push({id:E,label:D,raw:W})}else X.push({id:null,label:W,raw:W})}else if(!O.trim())break;else break}if(X.length===0)return{content:_,attachments:[]};let j=Z.slice(0,J),G=Z.slice(Y),N=[...j,...G].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,attachments:X}}function U6(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function H6(_,$){if(!_||!$)return _;let Z=String($).trim().split(/\s+/).filter(Boolean);if(Z.length===0)return _;let J=Z.map(U6).sort((W,H)=>H.length-W.length),X=new RegExp(`(${J.join("|")})`,"gi"),Y=new RegExp(`^(${J.join("|")})$`,"i"),j=new DOMParser().parseFromString(_,"text/html"),G=j.createTreeWalker(j.body,NodeFilter.SHOW_TEXT),N=[],O;while(O=G.nextNode())N.push(O);for(let W of N){let H=W.nodeValue;if(!H||!X.test(H)){X.lastIndex=0;continue}X.lastIndex=0;let E=W.parentElement;if(E&&E.closest("code, pre, script, style"))continue;let D=H.split(X).filter((w)=>w!=="");if(D.length===0)continue;let C=j.createDocumentFragment();for(let w of D)if(Y.test(w)){let T=j.createElement("mark");T.className="search-highlight-term",T.textContent=w,C.appendChild(T)}else C.appendChild(j.createTextNode(w));W.parentNode.replaceChild(C,W)}return j.body.innerHTML}function y4({post:_,onClick:$,onHashtagClick:Z,onMessageRef:J,onScrollToMessage:X,agentName:Y,agentAvatarUrl:j,userName:G,userAvatarUrl:N,userAvatarBackground:O,onDelete:W,isThreadReply:H,isThreadPrev:E,isThreadNext:D,isRemoving:C,highlightQuery:w,onFileRef:T}){let[U,b]=v(null),u=L(null),y=_.data,f=y.type==="agent_response",p=G||"You",l=f?Y||Q4:p,Y_=f?I1(Y,j):I1(p,N),N_=typeof O==="string"?O.trim().toLowerCase():"",$_=!f&&Y_.image&&(N_==="clear"||N_==="transparent"),V_=f&&Boolean(Y_.image),P_=`background-color: ${$_||V_?"transparent":Y_.color}`,a=y.content_meta,e=Boolean(a?.truncated),d=Boolean(a?.preview),i=e&&!d,Z_=e?{originalLength:Number.isFinite(a?.original_length)?a.original_length:y.content?y.content.length:0,maxLength:Number.isFinite(a?.max_length)?a.max_length:0}:null,j_=j6(y.content,y.link_previews),{content:J_,fileRefs:T_}=q6(j_),{content:X_,messageRefs:O_}=z6(J_),{content:q_,attachments:L_}=Q6(X_);j_=q_;let A_=Boolean(j_)&&!i,F_=typeof w==="string"?w.trim():"",U_=k0(()=>{if(!j_)return"";let S=F2(j_,Z);return F_?H6(S,F_):S},[j_,F_]),k_=(S,__)=>{S.stopPropagation(),b(z2(__))},v_=(S)=>{S.stopPropagation(),W?.(_)},w_=(S,__)=>{let E_=new Set;if(!S||__.length===0)return{content:S,usedIds:E_};return{content:S.replace(/attachment:([^\s)"']+)/g,(m_,S0,x0,d_)=>{let G0=S0.replace(/^\/+/,""),U0=__.find((f_)=>f_.name&&f_.name.toLowerCase()===G0.toLowerCase()&&!E_.has(f_.id))||__.find((f_)=>!E_.has(f_.id));if(!U0)return m_;if(E_.add(U0.id),d_.slice(Math.max(0,x0-2),x0)==="](")return`/media/${U0.id}`;return U0.name||"attachment"}),usedIds:E_}},M_=[],C_=[],c_=[],l_=[],S_=[],K_=[],z0=y.content_blocks||[],t_=y.media_ids||[],M0=0;if(z0.length>0)z0.forEach((S)=>{if(S?.type==="text"&&S.annotations)K_.push(S.annotations);if(S?.type==="resource_link")l_.push(S);else if(S?.type==="resource")S_.push(S);else if(S?.type==="file"){let __=t_[M0++];if(__)C_.push(__),c_.push({id:__,name:S?.name||S?.filename||S?.title})}else if(S?.type==="image"||!S?.type){let __=t_[M0++];if(__){let E_=typeof S?.mime_type==="string"?S.mime_type:void 0;M_.push({id:__,annotations:S?.annotations,mimeType:E_}),c_.push({id:__,name:S?.name||S?.filename||S?.title})}}});else if(t_.length>0)t_.forEach((S)=>{M_.push({id:S,annotations:null}),c_.push({id:S,name:null})});if(L_.length>0)L_.forEach((S)=>{if(!S?.id)return;let __=c_.find((E_)=>String(E_.id)===String(S.id));if(__&&!__.name)__.name=S.label});let{content:K0,usedIds:C0}=w_(j_,c_);j_=K0;let z_=M_.filter(({id:S})=>!C0.has(S)),Q0=C_.filter((S)=>!C0.has(S)),y0=L_.length>0?L_.map((S,__)=>({id:S.id||`attachment-${__+1}`,label:S.label||`attachment-${__+1}`})):c_.map((S,__)=>({id:S.id,label:S.name||`attachment-${__+1}`}));return m(()=>{if(!u.current)return;return e2(u.current),B6(u.current)},[U_]),Q`
        <div id=${`post-${_.id}`} class="post ${f?"agent-post":""} ${H?"thread-reply":""} ${E?"thread-prev":""} ${D?"thread-next":""} ${C?"removing":""}" onClick=${$}>
            <div class="post-avatar ${f?"agent-avatar":""} ${Y_.image?"has-image":""}" style=${P_}>
                ${Y_.image?Q`<img src=${Y_.image} alt=${l} />`:Y_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${v_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${l}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(S)=>{if(S.preventDefault(),S.stopPropagation(),J)J(_.id)}}>${k4(_.timestamp)}</a>
                </div>
                ${i&&Z_&&Q`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${w2(Z_.originalLength)} chars
                            ${Z_.maxLength?Q` • Display limit: ${w2(Z_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${d&&Z_&&Q`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${w2(Z_.maxLength)} of ${w2(Z_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(T_.length>0||O_.length>0||y0.length>0)&&Q`
                    <div class="post-file-refs">
                        ${O_.map((S)=>{let __=(E_)=>{if(E_.preventDefault(),E_.stopPropagation(),X)X(S);else{let J0=document.getElementById("post-"+S);if(J0)J0.scrollIntoView({behavior:"smooth",block:"center"}),J0.classList.add("post-highlight"),setTimeout(()=>J0.classList.remove("post-highlight"),2000)}};return Q`
                                <a href=${`#msg-${S}`} class="post-msg-pill-link" onClick=${__}>
                                    <${_2}
                                        prefix="post"
                                        label=${"msg:"+S}
                                        title=${"Message "+S}
                                        icon="message"
                                        onClick=${__}
                                    />
                                </a>
                            `})}
                        ${T_.map((S)=>{let __=S.split("/").pop()||S;return Q`
                                <${_2}
                                    prefix="post"
                                    label=${__}
                                    title=${S}
                                    onClick=${()=>T?.(S)}
                                />
                            `})}
                        ${y0.map((S)=>Q`
                            <${_2}
                                prefix="post"
                                label=${S.label}
                                title=${S.label}
                            />
                        `)}
                    </div>
                `}
                ${A_&&Q`
                    <div 
                        ref=${u}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:U_}}
                        onClick=${(S)=>{if(S.target.classList.contains("hashtag")){S.preventDefault(),S.stopPropagation();let __=S.target.dataset.hashtag;if(__)Z?.(__)}else if(S.target.tagName==="IMG")S.preventDefault(),S.stopPropagation(),b(S.target.src)}}
                    />
                `}
                ${K_.length>0&&Q`
                    ${K_.map((S,__)=>Q`
                        <${$1} key=${__} annotations=${S} />
                    `)}
                `}
                ${z_.length>0&&Q`
                    <div class="media-preview">
                        ${z_.map(({id:S,mimeType:__})=>{let J0=typeof __==="string"&&__.toLowerCase().startsWith("image/svg")?z2(S):p3(S);return Q`
                                <img 
                                    key=${S} 
                                    src=${J0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(m_)=>k_(m_,S)}
                                />
                            `})}
                    </div>
                `}
                ${z_.length>0&&Q`
                    ${z_.map(({annotations:S},__)=>Q`
                        ${S&&Q`<${$1} key=${__} annotations=${S} />`}
                    `)}
                `}
                ${Q0.length>0&&Q`
                    <div class="file-attachments">
                        ${Q0.map((S)=>Q`
                            <${Z6} key=${S} mediaId=${S} />
                        `)}
                    </div>
                `}
                ${l_.length>0&&Q`
                    <div class="resource-links">
                        ${l_.map((S,__)=>Q`
                            <div key=${__}>
                                <${J6} block=${S} />
                                <${$1} annotations=${S.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${S_.length>0&&Q`
                    <div class="resource-embeds">
                        ${S_.map((S,__)=>Q`
                            <div key=${__}>
                                <${Y6} block=${S} />
                                <${$1} annotations=${S.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y.link_previews?.length>0&&Q`
                    <div class="link-previews">
                        ${y.link_previews.map((S,__)=>Q`
                            <${W6} key=${__} preview=${S} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${U&&Q`<${C4} src=${U} onClose=${()=>b(null)} />`}
    `}function A4({posts:_,hasMore:$,onLoadMore:Z,onPostClick:J,onHashtagClick:X,onMessageRef:Y,onScrollToMessage:j,onFileRef:G,emptyMessage:N,timelineRef:O,agents:W,user:H,onDeletePost:E,reverse:D=!0,removingPostIds:C,searchQuery:w}){let[T,U]=v(!1),b=L(null),u=typeof IntersectionObserver<"u",y=M(async()=>{if(!Z||!$||T)return;U(!0);try{await Z({preserveScroll:!0,preserveMode:"top"})}finally{U(!1)}},[$,T,Z]),f=M((a)=>{let{scrollTop:e,scrollHeight:d,clientHeight:i}=a.target,Z_=D?d-i-e:e,j_=Math.max(300,i);if(Z_<j_)y()},[D,y]);m(()=>{if(!u)return;let a=b.current,e=O?.current;if(!a||!e)return;let d=300,i=new IntersectionObserver((Z_)=>{for(let j_ of Z_){if(!j_.isIntersecting)continue;y()}},{root:e,rootMargin:`${d}px 0px ${d}px 0px`,threshold:0});return i.observe(a),()=>i.disconnect()},[u,$,Z,O,y]);let p=L(y);if(p.current=y,m(()=>{if(u)return;if(!O?.current)return;let{scrollTop:a,scrollHeight:e,clientHeight:d}=O.current,i=D?e-d-a:a,Z_=Math.max(300,d);if(i<Z_)p.current?.()},[u,_,$,D,O]),m(()=>{if(!O?.current)return;if(!$||T)return;let{scrollTop:a,scrollHeight:e,clientHeight:d}=O.current,i=D?e-d-a:a,Z_=Math.max(300,d);if(e<=d+1||i<Z_)p.current?.()},[_,$,T,D,O]),!_)return Q`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return Q`
            <div class="timeline" ref=${O}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${N||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let l=_.slice().sort((a,e)=>a.id-e.id),Y_=(a)=>{let e=a?.data?.thread_id;if(e===null||e===void 0||e==="")return null;let d=Number(e);return Number.isFinite(d)?d:null},N_=new Map;for(let a=0;a<l.length;a+=1){let e=l[a],d=Number(e?.id),i=Y_(e);if(i!==null){let Z_=N_.get(i)||{anchorIndex:-1,replyIndexes:[]};Z_.replyIndexes.push(a),N_.set(i,Z_)}else if(Number.isFinite(d)){let Z_=N_.get(d)||{anchorIndex:-1,replyIndexes:[]};Z_.anchorIndex=a,N_.set(d,Z_)}}let $_=new Map;for(let[a,e]of N_.entries()){let d=new Set;if(e.anchorIndex>=0)d.add(e.anchorIndex);for(let i of e.replyIndexes)d.add(i);$_.set(a,Array.from(d).sort((i,Z_)=>i-Z_))}let V_=l.map((a,e)=>{let d=Y_(a);if(d===null)return{hasThreadPrev:!1,hasThreadNext:!1};let i=$_.get(d);if(!i||i.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Z_=i.indexOf(e);if(Z_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Z_>0,hasThreadNext:Z_<i.length-1}}),P_=Q`<div class="timeline-sentinel" ref=${b}></div>`;return Q`
        <div class="timeline ${D?"reverse":"normal"}" ref=${O} onScroll=${f}>
            <div class="timeline-content">
                ${D?P_:null}
                ${l.map((a,e)=>{let d=Boolean(a.data?.thread_id&&a.data.thread_id!==a.id),i=C?.has?.(a.id),Z_=V_[e]||{};return Q`
                    <${y4}
                        key=${a.id}
                        post=${a}
                        isThreadReply=${d}
                        isThreadPrev=${Z_.hasThreadPrev}
                        isThreadNext=${Z_.hasThreadNext}
                        isRemoving=${i}
                        highlightQuery=${w}
                        agentName=${U4(a.data?.agent_id,W||{})}
                        agentAvatarUrl=${H4(a.data?.agent_id,W||{})}
                        userName=${H?.name||H?.user_name}
                        userAvatarUrl=${H?.avatar_url||H?.avatarUrl||H?.avatar}
                        userAvatarBackground=${H?.avatar_background||H?.avatarBackground}
                        onClick=${()=>J?.(a)}
                        onHashtagClick=${X}
                        onMessageRef=${Y}
                        onScrollToMessage=${j}
                        onFileRef=${G}
                        onDelete=${E}
                    />
                `})}
                ${D?null:P_}
            </div>
        </div>
    `}class w4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,Z=-1/0;for(let J of this.extensions.values()){if(J.placement!=="tabs")continue;if(!J.canHandle)continue;try{let X=J.canHandle(_);if(X===!1||X===0)continue;let Y=X===!0?0:typeof X==="number"?X:0;if(Y>Z)Z=Y,$=J}catch(X){console.warn(`[PaneRegistry] canHandle() error for "${J.id}":`,X)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var i_=new w4;var Z1=null,T1=null;function b4(){if(T1)return Promise.resolve(T1);if(!Z1)Z1=import("/static/dist/editor.bundle.js").then((_)=>{return T1=_,_}).catch((_)=>{throw Z1=null,_});return Z1}class P4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await b4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){if(this.queuedViewStateCb=_,this.real&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(_)}restoreViewState(_){if(this.queuedViewState=_,this.real&&typeof this.real.restoreViewState==="function")this.real.restoreViewState(_)}getPath(){if(this.real&&typeof this.real.getPath==="function")return this.real.getPath();return this.context.path||""}setPath(_){if(this.real&&typeof this.real.setPath==="function")this.real.setPath(_)}}var f1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new P4(_,$)}};function v1(){b4().catch(()=>{})}class M4{container;disposed=!1;termEl;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0");let Z=document.createElement("div");Z.className="terminal-pane-header";let J=document.createElement("span");J.className="terminal-pane-title",J.textContent="Terminal";let X=document.createElement("span");X.className="terminal-pane-status",X.textContent="Not connected",Z.append(J,X);let Y=document.createElement("div");Y.className="terminal-pane-body",Y.innerHTML='<div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>',this.termEl.append(Z,Y),_.appendChild(this.termEl)}getContent(){return}isDirty(){return!1}focus(){this.termEl?.focus()}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.termEl?.remove()}}var R1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new M4(_,$)}};function S4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function L6(_,$){let Z=String(_||"").trim();if(!Z)return Z;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(Z)||Z.startsWith("#")||Z.startsWith("data:")||Z.startsWith("blob:"))return Z;let J=Z.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),X=J?.[1]||Z,Y=J?.[2]||"",j=J?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),O=X.startsWith("/")?X:`${G?`${G}/`:""}${X}`,W=[];for(let E of O.split("/")){if(!E||E===".")continue;if(E===".."){if(W.length>0)W.pop();continue}W.push(E)}let H=W.join("/");return`${A1(H)}${Y}${j}`}function b2(_){return _?.preview||null}function F6(_){let $=b2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';if($.kind==="image"){let Z=$.url||($.path?A1($.path):"");return`
            <div class="workspace-preview-image">
                <img src="${S4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown")return`<div class="workspace-preview-text">${F2($.text||"",null,{rewriteImageSrc:(J)=>L6(J,$.path||_?.path)})}</div>`;return`<pre class="workspace-preview-text"><code>${S4($.text||"")}</code></pre>`}if($.kind==="binary")return'<div class="workspace-preview-text">Binary file — download to view.</div>';return'<div class="workspace-preview-text">No preview available.</div>'}class g1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=F6(this.context)}getContent(){let _=b2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let Z=b2(this.context);if(Z&&Z.kind==="text"){if(Z.text=_,$!==void 0)Z.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var u1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=b2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new g1(_,$)}},c1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return b2(_)||_?.path?1:!1},mount(_,$){return new g1(_,$)}};class x4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let Z of this.listeners)try{Z(_,$)}catch{}}open(_,$){let Z=this.tabs.get(_);if(!Z)Z={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,Z);return this.activate(_),Z}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,Z]of this.tabs)if($!==_&&!Z.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((J)=>J!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let Z=this.tabs.get(_);if(!Z||Z.dirty===$)return;Z.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let Z=this.tabs.get(_);if(Z)Z.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,Z){let J=this.tabs.get(_);if(!J)return;if(this.tabs.delete(_),J.id=$,J.path=$,J.label=Z||$.split("/").pop()||$,this.tabs.set($,J),this.mruOrder=this.mruOrder.map((X)=>X===_?$:X),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($+1)%_.length];this.activate(Z.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($-1+_.length)%_.length];this.activate(Z.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var D_=new x4;var J1="workspaceExplorerScale",E6=["compact","default","comfortable"],D6=new Set(E6),k6={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function I4(_,$="default"){if(typeof _!=="string")return $;let Z=_.trim().toLowerCase();return D6.has(Z)?Z:$}function m1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),Z=Boolean(window.matchMedia?.("(hover: none)")?.matches),J=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||J&&Z}}function C6(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function y6(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function h1(_={}){let $=C6(_),Z=_.stored?I4(_.stored,$):$;return y6(Z,_)}function T4(_){return k6[I4(_)]}var A6=60000,g4=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function u4(_,$,Z,J=0,X=[]){if(!Z&&g4(_))return X;if(!_)return X;if(X.push({node:_,depth:J}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)u4(Y,$,Z,J+1,X);return X}function f4(_,$,Z){if(!_)return"";let J=[],X=(Y)=>{if(!Z&&g4(Y))return;if(J.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let j of Y.children)X(j)};return X(_),J.join("|")}function n1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let Z=Array.isArray(_.children)?_.children:null,J=Array.isArray($.children)?$.children:null;if(!J)return _;let X=Z?new Map(Z.map((G)=>[G?.path,G])):new Map,Y=!Z||Z.length!==J.length,j=J.map((G)=>{let N=n1(X.get(G.path),G);if(N!==X.get(G.path))Y=!0;return N});return Y?{...$,children:j}:_}function i1(_,$,Z){if(!_)return _;if(_.path===$)return n1(_,Z);if(!Array.isArray(_.children))return _;let J=!1,X=_.children.map((Y)=>{let j=i1(Y,$,Z);if(j!==Y)J=!0;return j});return J?{..._,children:X}:_}var c4=4,p1=14,w6=8,b6=16;function m4(_){if(!_)return 0;if(_.type==="file"){let J=Math.max(0,Number(_.size)||0);return _.__bytes=J,J}let $=Array.isArray(_.children)?_.children:[],Z=0;for(let J of $)Z+=m4(J);return _.__bytes=Z,Z}function h4(_,$=0){let Z=Math.max(0,Number(_?.__bytes??_?.size??0)),J={name:_?.name||_?.path||".",path:_?.path||".",size:Z,children:[]};if(!_||_.type!=="dir"||$>=c4)return J;let X=Array.isArray(_.children)?_.children:[],Y=[];for(let G of X){let N=Math.max(0,Number(G?.__bytes??G?.size??0));if(N<=0)continue;if(G.type==="dir")Y.push({kind:"dir",node:G,size:N});else Y.push({kind:"file",name:G.name,path:G.path,size:N})}Y.sort((G,N)=>N.size-G.size);let j=Y;if(Y.length>p1){let G=Y.slice(0,p1-1),N=Y.slice(p1-1),O=N.reduce((W,H)=>W+H.size,0);G.push({kind:"other",name:`+${N.length} more`,path:`${J.path}/[other]`,size:O}),j=G}return J.children=j.map((G)=>{if(G.kind==="dir")return h4(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),J}function v4(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,Z=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function p4(_,$,Z){let J=((_+Math.PI/2)*180/Math.PI+360)%360,X=Z?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=Z?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${J.toFixed(1)} ${X}% ${Y}%)`}function Y1(_,$,Z,J){return{x:_+Z*Math.cos(J),y:$+Z*Math.sin(J)}}function o1(_,$,Z,J,X,Y){let j=Math.PI*2-0.0001,G=Y-X>j?X+j:Y,N=Y1(_,$,J,X),O=Y1(_,$,J,G),W=Y1(_,$,Z,G),H=Y1(_,$,Z,X),E=G-X>Math.PI?1:0;return[`M ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${J} ${J} 0 ${E} 1 ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`L ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${E} 0 ${H.x.toFixed(3)} ${H.y.toFixed(3)}`,"Z"].join(" ")}var i4={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function l4(_,$,Z){let J=[],X=[],Y=Math.max(0,Number($)||0),j=(G,N,O,W)=>{let H=Array.isArray(G?.children)?G.children:[];if(!H.length)return;let E=Math.max(0,Number(G.size)||0);if(E<=0)return;let D=O-N,C=N;H.forEach((w,T)=>{let U=Math.max(0,Number(w.size)||0);if(U<=0)return;let b=U/E,u=C,y=T===H.length-1?O:C+D*b;if(C=y,y-u<0.003)return;let f=i4[W];if(f){let p=p4(u,W,Z);if(J.push({key:w.path,path:w.path,label:w.name,size:U,color:p,depth:W,startAngle:u,endAngle:y,innerRadius:f[0],outerRadius:f[1],d:o1(120,120,f[0],f[1],u,y)}),W===1)X.push({key:w.path,name:w.name,size:U,pct:Y>0?U/Y*100:0,color:p})}if(W<c4)j(w,u,y,W+1)})};return j(_,-Math.PI/2,Math.PI*3/2,1),{segments:J,legend:X}}function l1(_,$){if(!_||!$)return null;if(_.path===$)return _;let Z=Array.isArray(_.children)?_.children:[];for(let J of Z){let X=l1(J,$);if(X)return X}return null}function n4(_,$,Z,J){if(!Z||Z<=0)return{segments:[],legend:[]};let X=i4[1];if(!X)return{segments:[],legend:[]};let Y=-Math.PI/2,j=Math.PI*3/2,G=p4(Y,1,J),O=`${$||"."}/[files]`;return{segments:[{key:O,path:O,label:_,size:Z,color:G,depth:1,startAngle:Y,endAngle:j,innerRadius:X[0],outerRadius:X[1],d:o1(120,120,X[0],X[1],Y,j)}],legend:[{key:O,name:_,size:Z,pct:100,color:G}]}}function R4(_,$=!1,Z=!1){if(!_)return null;let J=m4(_),X=h4(_,0),Y=X.size||J,{segments:j,legend:G}=l4(X,Y,Z);if(!j.length&&Y>0){let N=n4("[files]",X.path,Y,Z);j=N.segments,G=N.legend}return{root:X,totalSize:Y,segments:j,legend:G,truncated:$,isDarkTheme:Z}}function P6({payload:_}){if(!_)return null;let[$,Z]=v(null),[J,X]=v(_?.root?.path||"."),[Y,j]=v(()=>[_?.root?.path||"."]),[G,N]=v(!1);m(()=>{let $_=_?.root?.path||".";X($_),j([$_]),Z(null)},[_?.root?.path,_?.totalSize]),m(()=>{if(!J)return;N(!0);let $_=setTimeout(()=>N(!1),180);return()=>clearTimeout($_)},[J]);let O=k0(()=>{return l1(_.root,J)||_.root},[_?.root,J]),W=O?.size||_.totalSize||0,{segments:H,legend:E}=k0(()=>{let $_=l4(O,W,_.isDarkTheme);if($_.segments.length>0)return $_;if(W<=0)return $_;let V_=O?.children?.length?"Total":"[files]";return n4(V_,O?.path||_?.root?.path||".",W,_.isDarkTheme)},[O,W,_.isDarkTheme,_?.root?.path]),[D,C]=v(H),w=L(new Map),T=L(0);m(()=>{let $_=w.current,V_=new Map(H.map((d)=>[d.key,d])),P_=performance.now(),a=220,e=(d)=>{let i=Math.min(1,(d-P_)/220),Z_=i*(2-i),j_=H.map((J_)=>{let X_=$_.get(J_.key)||{startAngle:J_.startAngle,endAngle:J_.startAngle,innerRadius:J_.innerRadius,outerRadius:J_.innerRadius},O_=(U_,k_)=>U_+(k_-U_)*Z_,q_=O_(X_.startAngle,J_.startAngle),L_=O_(X_.endAngle,J_.endAngle),A_=O_(X_.innerRadius,J_.innerRadius),F_=O_(X_.outerRadius,J_.outerRadius);return{...J_,d:o1(120,120,A_,F_,q_,L_)}});if(C(j_),i<1)T.current=requestAnimationFrame(e)};if(T.current)cancelAnimationFrame(T.current);return T.current=requestAnimationFrame(e),w.current=V_,()=>{if(T.current)cancelAnimationFrame(T.current)}},[H]);let U=D.length?D:H,b=W>0?d0(W):"0 B",u=O?.name||"",f=(u&&u!=="."?u:"Total")||"Total",p=b,l=Y.length>1,Y_=($_)=>{if(!$_?.path)return;let V_=l1(_.root,$_.path);if(!V_||!Array.isArray(V_.children)||V_.children.length===0)return;j((P_)=>[...P_,V_.path]),X(V_.path),Z(null)},N_=()=>{if(!l)return;j(($_)=>{let V_=$_.slice(0,-1);return X(V_[V_.length-1]||_?.root?.path||"."),V_}),Z(null)};return Q`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${O?.path||_?.root?.path||"."}`}
                data-segments=${U.length}
                data-base-size=${W}>
                ${U.map(($_)=>Q`
                    <path
                        key=${$_.key}
                        d=${$_.d}
                        fill=${$_.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===$_.key?" is-hovered":""}`}
                        onMouseEnter=${()=>Z($_)}
                        onMouseLeave=${()=>Z(null)}
                        onTouchStart=${()=>Z($_)}
                        onTouchEnd=${()=>Z(null)}
                        onClick=${()=>Y_($_)}
                    >
                        <title>${$_.label} — ${d0($_.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${l?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${f}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${p}</text>
                </g>
            </svg>
            ${E.length>0&&Q`
                <div class="workspace-folder-starburst-legend">
                    ${E.slice(0,8).map(($_)=>Q`
                        <div key=${$_.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${$_.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${$_.name}>${$_.name}</span>
                            <span class="workspace-folder-starburst-size">${d0($_.size)}</span>
                            <span class="workspace-folder-starburst-pct">${$_.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&Q`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function M6({mediaId:_}){let[$,Z]=v(null);if(m(()=>{if(!_)return;i2(_).then(Z).catch(()=>{})},[_]),!$)return null;let J=$.filename||"file",X=$.metadata?.size?d0($.metadata.size):"";return Q`
        <a href=${z2(_)} download=${J} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${J}</span>
                ${X&&Q`<span class="file-size">${X}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function o4({onFileSelect:_,visible:$=!0,active:Z=void 0,onOpenEditor:J}){let[X,Y]=v(null),[j,G]=v(new Set(["."])),[N,O]=v(null),[W,H]=v(null),[E,D]=v(""),[C,w]=v(null),[T,U]=v(null),[b,u]=v(!0),[y,f]=v(!1),[p,l]=v(null),[Y_,N_]=v(()=>Q2("workspaceShowHidden",!1)),[$_,V_]=v(!1),[P_,a]=v(null),[e,d]=v(null),[i,Z_]=v(null),[j_,J_]=v(!1),[T_,X_]=v(null),[O_,q_]=v(()=>v4()),[L_,A_]=v(()=>h1({stored:R0(J1),...m1()})),F_=L(j),U_=L(""),k_=L(null),v_=L(0),w_=L(new Set),M_=L(null),C_=L(new Map),c_=L(_),l_=L(J),S_=L(null),K_=L(null),z0=L(null),t_=L(null),M0=L(null),K0=L(null),C0=L("."),z_=L(null),Q0=L({path:null,dragging:!1,startX:0,startY:0}),y0=L({path:null,dragging:!1,startX:0,startY:0}),S=L({path:null,timer:0}),__=L(!1),E_=L(0),J0=L(new Map),m_=L(null),S0=L(null),x0=L(null),d_=L(null),G0=L(Y_),R_=L($),U0=L(Z??$),r_=L(0),f_=L(i),$2=L($_),Z2=L(P_),g0=L(null),K2=L({x:0,y:0}),A0=L(0),H0=L(null),O0=L(N),w0=L(W),e_=L(null),s_=L(null),J2=L(C);c_.current=_,l_.current=J,m(()=>{F_.current=j},[j]),m(()=>{G0.current=Y_},[Y_]),m(()=>{R_.current=$},[$]),m(()=>{U0.current=Z??$},[Z,$]),m(()=>{f_.current=i},[i]),m(()=>{if(typeof window>"u")return;let K=()=>{A_(h1({stored:R0(J1),...m1()}))};K();let q=()=>K(),F=()=>K(),k=(c)=>{if(!c||c.key===null||c.key===J1)K()};window.addEventListener("resize",q),window.addEventListener("focus",F),window.addEventListener("storage",k);let R=window.matchMedia?.("(pointer: coarse)"),n=window.matchMedia?.("(hover: none)"),o=(c,W_)=>{if(!c)return;if(c.addEventListener)c.addEventListener("change",W_);else if(c.addListener)c.addListener(W_)},s=(c,W_)=>{if(!c)return;if(c.removeEventListener)c.removeEventListener("change",W_);else if(c.removeListener)c.removeListener(W_)};return o(R,q),o(n,q),()=>{window.removeEventListener("resize",q),window.removeEventListener("focus",F),window.removeEventListener("storage",k),s(R,q),s(n,q)}},[]),m(()=>{let K=(q)=>{let F=q?.detail?.path;if(!F)return;let k=F.split("/"),R=[];for(let n=1;n<k.length;n++)R.push(k.slice(0,n).join("/"));if(R.length)G((n)=>{let o=new Set(n);o.add(".");for(let s of R)o.add(s);return o});O(F),requestAnimationFrame(()=>{let n=document.querySelector(`[data-path="${CSS.escape(F)}"]`);if(n)n.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",K),()=>window.removeEventListener("workspace-reveal-path",K)},[]),m(()=>{$2.current=$_},[$_]),m(()=>{Z2.current=P_},[P_]),m(()=>{O0.current=N},[N]),m(()=>{w0.current=W},[W]),m(()=>{J2.current=C},[C]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let K=()=>q_(v4());K();let q=window.matchMedia?.("(prefers-color-scheme: dark)"),F=()=>K();if(q?.addEventListener)q.addEventListener("change",F);else if(q?.addListener)q.addListener(F);let k=typeof MutationObserver<"u"?new MutationObserver(()=>K()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(q?.removeEventListener)q.removeEventListener("change",F);else if(q?.removeListener)q.removeListener(F);k?.disconnect()}},[]),m(()=>{if(!W)return;let K=M0.current;if(!K)return;let q=requestAnimationFrame(()=>{try{K.focus(),K.select()}catch{}});return()=>cancelAnimationFrame(q)},[W]);let G2=async(K)=>{f(!0),w(null),U(null);try{let q=await i3(K,20000);w(q)}catch(q){w({error:q.message||"Failed to load preview"})}finally{f(!1)}};S_.current=G2;let u0=async()=>{if(!R_.current)return;try{let K=await l2("",1,G0.current),q=f4(K.root,F_.current,G0.current);if(q===U_.current){u(!1);return}if(U_.current=q,k_.current=K.root,!v_.current)v_.current=requestAnimationFrame(()=>{v_.current=0,Y((F)=>n1(F,k_.current)),u(!1)})}catch(K){l(K.message||"Failed to load workspace"),u(!1)}},E2=async(K)=>{if(!K)return;if(w_.current.has(K))return;w_.current.add(K);try{let q=await l2(K,1,G0.current);Y((F)=>i1(F,K,q.root))}catch(q){l(q.message||"Failed to load workspace")}finally{w_.current.delete(K)}};K_.current=E2;let h_=M(()=>{let K=N;if(!K)return".";let q=C_.current?.get(K);if(q&&q.type==="dir")return q.path;if(K==="."||!K.includes("/"))return".";let F=K.split("/");return F.pop(),F.join("/")||"."},[N]),L0=M((K)=>{let q=K?.closest?.(".workspace-row");if(!q)return null;let F=q.dataset.path,k=q.dataset.type;if(!F)return null;if(k==="dir")return F;if(F.includes("/")){let R=F.split("/");return R.pop(),R.join("/")||"."}return"."},[]),F0=M((K)=>{return L0(K?.target||null)},[L0]),g_=M((K)=>{f_.current=K,Z_(K)},[]),b_=M(()=>{let K=S.current;if(K?.timer)clearTimeout(K.timer);S.current={path:null,timer:0}},[]),a_=M((K)=>{if(!K||K==="."){b_();return}let q=C_.current?.get(K);if(!q||q.type!=="dir"){b_();return}if(F_.current?.has(K)){b_();return}if(S.current?.path===K)return;b_();let F=setTimeout(()=>{S.current={path:null,timer:0},K_.current?.(K),G((k)=>{let R=new Set(k);return R.add(K),R})},600);S.current={path:K,timer:F}},[b_]),Y0=M((K,q)=>{if(K2.current={x:K,y:q},A0.current)return;A0.current=requestAnimationFrame(()=>{A0.current=0;let F=g0.current;if(!F)return;let k=K2.current;F.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),I0=M((K)=>{if(!K)return;let F=(C_.current?.get(K)?.name||K.split("/").pop()||K).trim();if(!F)return;d({path:K,label:F})},[]),b0=M(()=>{if(d(null),A0.current)cancelAnimationFrame(A0.current),A0.current=0;if(g0.current)g0.current.style.transform="translate(-9999px, -9999px)"},[]),c0=M((K)=>{if(!K)return".";let q=C_.current?.get(K);if(q&&q.type==="dir")return q.path;if(K==="."||!K.includes("/"))return".";let F=K.split("/");return F.pop(),F.join("/")||"."},[]),V0=M(()=>{H(null),D("")},[]),T0=M((K)=>{if(!K)return;let F=(C_.current?.get(K)?.name||K.split("/").pop()||K).trim();if(!F||K===".")return;H(K),D(F)},[]),r0=M(async()=>{let K=w0.current;if(!K)return;let q=(E||"").trim();if(!q){V0();return}let F=C_.current?.get(K),k=(F?.name||K.split("/").pop()||K).trim();if(q===k){V0();return}try{let n=(await o3(K,q))?.path||K,o=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(V0(),l(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:K,newPath:n,type:F?.type||"file"}})),F?.type==="dir")G((s)=>{let c=new Set;for(let W_ of s)if(W_===K)c.add(n);else if(W_.startsWith(`${K}/`))c.add(`${n}${W_.slice(K.length)}`);else c.add(W_);return c});if(O(n),F?.type==="dir")w(null),f(!1),U(null);else S_.current?.(n);K_.current?.(o)}catch(R){l(R?.message||"Failed to rename file")}},[V0,E]),s0=M(async(K)=>{let k=K||".";for(let R=0;R<50;R+=1){let o=`untitled${R===0?"":`-${R}`}.md`;try{let c=(await n3(k,o,""))?.path||(k==="."?o:`${k}/${o}`);if(k&&k!==".")G((W_)=>new Set([...W_,k]));O(c),l(null),K_.current?.(k),S_.current?.(c);return}catch(s){if(s?.status===409||s?.code==="file_exists")continue;l(s?.message||"Failed to create file");return}}l("Failed to create file (untitled name already in use).")},[]),m0=M((K)=>{if(K?.stopPropagation?.(),j_)return;let q=c0(O0.current);s0(q)},[j_,c0,s0]);m(()=>{if(typeof window>"u")return;let K=(q)=>{let F=q?.detail?.updates||[];if(!Array.isArray(F)||F.length===0)return;Y((s)=>{let c=s;for(let W_ of F){if(!W_?.root)continue;if(!c||W_.path==="."||!W_.path)c=W_.root;else c=i1(c,W_.path,W_.root)}if(c)U_.current=f4(c,F_.current,G0.current);return u(!1),c});let k=O0.current;if(Boolean(k)&&F.some((s)=>{let c=s?.path||"";if(!c||c===".")return!0;return k===c||k.startsWith(`${c}/`)||c.startsWith(`${k}/`)}))J0.current.clear();if(!k||!J2.current)return;let n=C_.current?.get(k);if(n&&n.type==="dir")return;if(F.some((s)=>{let c=s?.path||"";if(!c||c===".")return!0;return k===c||k.startsWith(`${c}/`)}))S_.current?.(k)};return window.addEventListener("workspace-update",K),()=>window.removeEventListener("workspace-update",K)},[]),M_.current=u0;let h0=L(()=>{if(typeof window>"u")return;let K=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),q=U0.current??R_.current,F=document.visibilityState!=="hidden"&&(q||K.matches&&R_.current);n2(F,G0.current).catch(()=>{})}).current,z=L(0),I=L(()=>{if(z.current)clearTimeout(z.current);z.current=setTimeout(()=>{z.current=0,h0()},250)}).current;m(()=>{if(R_.current)M_.current?.();I()},[$,Z]),m(()=>{M_.current(),h0();let K=setInterval(()=>M_.current(),A6),q=U2("previewHeight",null),F=Number.isFinite(q)?Math.min(Math.max(q,80),600):280;if(E_.current=F,z0.current)z0.current.style.setProperty("--preview-height",`${F}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),R=()=>I();if(k.addEventListener)k.addEventListener("change",R);else if(k.addListener)k.addListener(R);return document.addEventListener("visibilitychange",R),()=>{if(clearInterval(K),v_.current)cancelAnimationFrame(v_.current),v_.current=0;if(k.removeEventListener)k.removeEventListener("change",R);else if(k.removeListener)k.removeListener(R);if(document.removeEventListener("visibilitychange",R),z.current)clearTimeout(z.current),z.current=0;if(z_.current)clearTimeout(z_.current),z_.current=null;n2(!1,G0.current).catch(()=>{})}},[]);let r=k0(()=>u4(X,j,Y_),[X,j,Y_]),B_=k0(()=>new Map(r.map((K)=>[K.node.path,K.node])),[r]),y_=k0(()=>T4(L_),[L_]);C_.current=B_;let Q_=(N?C_.current.get(N):null)?.type==="dir";m(()=>{if(!N||!Q_){X_(null),m_.current=null,S0.current=null;return}let K=N,q=`${Y_?"hidden":"visible"}:${N}`,F=J0.current,k=F.get(q);if(k?.root){F.delete(q),F.set(q,k);let o=R4(k.root,Boolean(k.truncated),O_);if(o)m_.current=o,S0.current=N,X_({loading:!1,error:null,payload:o});return}let R=m_.current,n=S0.current;X_({loading:!0,error:null,payload:n===N?R:null}),l2(N,w6,Y_).then((o)=>{if(O0.current!==K)return;let s={root:o?.root,truncated:Boolean(o?.truncated)};F.delete(q),F.set(q,s);while(F.size>b6){let W_=F.keys().next().value;if(!W_)break;F.delete(W_)}let c=R4(s.root,s.truncated,O_);m_.current=c,S0.current=N,X_({loading:!1,error:null,payload:c})}).catch((o)=>{if(O0.current!==K)return;X_({loading:!1,error:o?.message||"Failed to load folder size chart",payload:n===N?R:null})})},[N,Q_,Y_,O_]);let N0=Boolean(C&&C.kind==="text"&&!Q_&&(!C.size||C.size<=262144)),p0=N0?"Open in editor":C?.size>262144?"File too large to edit":"File is not editable";m(()=>{let K=x0.current;if(d_.current)d_.current.dispose(),d_.current=null;if(!K)return;if(K.innerHTML="",!N||Q_||!C||C.error)return;let q={path:N,content:typeof C.text==="string"?C.text:void 0,mtime:C.mtime,size:C.size,preview:C,mode:"view"},F=i_.resolve(q)||i_.get("workspace-preview-default");if(!F)return;let k=F.mount(K,q);return d_.current=k,()=>{if(d_.current===k)k.dispose(),d_.current=null;K.innerHTML=""}},[N,Q_,C]);let E0=(K)=>{let q=K?.target;if(q instanceof Element)return q;return q?.parentElement||null},Y2=(K)=>{return Boolean(K?.closest?.(".workspace-node-icon, .workspace-label-text"))},V2=L((K)=>{if(s_.current)clearTimeout(s_.current),s_.current=null;let F=E0(K)?.closest?.("[data-path]");if(!F)return;let k=F.dataset.path;if(F.dataset.type==="dir"||!k)return;if(w0.current===k)V0();l_.current?.(k)}).current,X0=L((K)=>{if(__.current){__.current=!1;return}let q=E0(K),F=q?.closest?.("[data-path]");if(t_.current?.focus?.(),!F)return;let k=F.dataset.path,R=F.dataset.type,n=Boolean(q?.closest?.(".workspace-caret")),o=Boolean(q?.closest?.("button"))||Boolean(q?.closest?.("a"))||Boolean(q?.closest?.("input")),s=O0.current===k,c=w0.current;if(c){if(c===k)return;V0()}let W_=R==="file"&&e_.current===k&&!n&&!o;if(s&&!n&&!o&&k!=="."&&!W_){if(s_.current)clearTimeout(s_.current);s_.current=setTimeout(()=>{s_.current=null,T0(k)},350);return}if(R==="dir"){if(e_.current=null,O(k),w(null),U(null),f(!1),!F_.current.has(k))K_.current?.(k);if(s&&!n)return;G((n0)=>{let v0=new Set(n0);if(v0.has(k))v0.delete(k);else v0.add(k);return v0})}else{e_.current=null,O(k);let j0=C_.current.get(k);if(j0)c_.current?.(j0.path,j0);S_.current?.(k)}}).current,W0=L(()=>{U_.current="",M_.current(),Array.from(F_.current||[]).filter((q)=>q&&q!==".").forEach((q)=>K_.current?.(q))}).current,p_=L(()=>{e_.current=null,O(null),w(null),U(null),f(!1)}).current,B0=L(()=>{N_((K)=>{let q=!K;if(typeof window<"u")I_("workspaceShowHidden",String(q));return G0.current=q,n2(!0,q).catch(()=>{}),U_.current="",M_.current?.(),Array.from(F_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>K_.current?.(k)),q})}).current,_0=L((K)=>{if(E0(K)?.closest?.("[data-path]"))return;p_()}).current,n_=M(async(K)=>{if(!K)return;let q=K.split("/").pop()||K;if(!window.confirm(`Delete "${q}"? This cannot be undone.`))return;try{await r3(K);let k=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(O0.current===K)p_();K_.current?.(k),l(null)}catch(k){w((R)=>({...R||{},error:k.message||"Failed to delete file"}))}},[p_]),a0=M((K)=>{let q=t_.current;if(!q||!K||typeof CSS>"u"||typeof CSS.escape!=="function")return;q.querySelector(`[data-path="${CSS.escape(K)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),i0=M((K)=>{let q=r;if(!q||q.length===0)return;let F=N?q.findIndex((k)=>k.node.path===N):-1;if(K.key==="ArrowDown"){K.preventDefault();let k=Math.min(F+1,q.length-1),R=q[k];if(!R)return;if(O(R.node.path),R.node.type!=="dir")c_.current?.(R.node.path,R.node),S_.current?.(R.node.path);else w(null),f(!1),U(null);a0(R.node.path);return}if(K.key==="ArrowUp"){K.preventDefault();let k=F<=0?0:F-1,R=q[k];if(!R)return;if(O(R.node.path),R.node.type!=="dir")c_.current?.(R.node.path,R.node),S_.current?.(R.node.path);else w(null),f(!1),U(null);a0(R.node.path);return}if(K.key==="ArrowRight"&&F>=0){let k=q[F];if(k?.node?.type==="dir"&&!j.has(k.node.path))K.preventDefault(),K_.current?.(k.node.path),G((R)=>new Set([...R,k.node.path]));return}if(K.key==="ArrowLeft"&&F>=0){let k=q[F];if(k?.node?.type==="dir"&&j.has(k.node.path))K.preventDefault(),G((R)=>{let n=new Set(R);return n.delete(k.node.path),n});return}if(K.key==="Enter"&&F>=0){K.preventDefault();let k=q[F];if(!k)return;let R=k.node.path;if(k.node.type==="dir"){if(!F_.current.has(R))K_.current?.(R);G((o)=>{let s=new Set(o);if(s.has(R))s.delete(R);else s.add(R);return s}),w(null),U(null),f(!1)}else c_.current?.(R,k.node),S_.current?.(R);return}if((K.key==="Delete"||K.key==="Backspace")&&F>=0){let k=q[F];if(!k||k.node.type==="dir")return;K.preventDefault(),n_(k.node.path);return}if(K.key==="Escape")K.preventDefault(),p_()},[p_,n_,j,r,a0,N]),$0=M((K)=>{let q=E0(K),F=q?.closest?.(".workspace-row");if(!F)return;let k=F.dataset.type,R=F.dataset.path;if(!R||R===".")return;if(w0.current===R)return;let n=K?.touches?.[0];if(!n)return;if(Q0.current={path:Y2(q)?R:null,dragging:!1,startX:n.clientX,startY:n.clientY},k!=="file")return;if(z_.current)clearTimeout(z_.current);z_.current=setTimeout(()=>{if(z_.current=null,Q0.current?.dragging)return;n_(R)},600)},[n_]),P0=M(()=>{if(z_.current)clearTimeout(z_.current),z_.current=null;let K=Q0.current;if(K?.dragging&&K.path){let q=f_.current||h_(),F=H0.current;if(typeof F==="function")F(K.path,q)}Q0.current={path:null,dragging:!1,startX:0,startY:0},r_.current=0,V_(!1),a(null),g_(null),b_(),b0()},[h_,b0,g_,b_]),S2=M((K)=>{let q=Q0.current,F=K?.touches?.[0];if(!F||!q?.path){if(z_.current)clearTimeout(z_.current),z_.current=null;return}let k=Math.abs(F.clientX-q.startX),R=Math.abs(F.clientY-q.startY),n=k>8||R>8;if(n&&z_.current)clearTimeout(z_.current),z_.current=null;if(!q.dragging&&n)q.dragging=!0,V_(!0),a("move"),I0(q.path);if(q.dragging){K.preventDefault(),Y0(F.clientX,F.clientY);let o=document.elementFromPoint(F.clientX,F.clientY),s=L0(o)||h_();if(f_.current!==s)g_(s);a_(s)}},[L0,h_,I0,Y0,g_,a_]),l0=L((K)=>{K.preventDefault();let q=z0.current;if(!q)return;let F=K.clientY,k=E_.current||280,R=K.currentTarget;R.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let n=F,o=(c)=>{n=c.clientY;let W_=q.clientHeight-80,j0=Math.min(Math.max(k-(c.clientY-F),80),W_);q.style.setProperty("--preview-height",`${j0}px`),E_.current=j0},s=()=>{let c=q.clientHeight-80,W_=Math.min(Math.max(k-(n-F),80),c);E_.current=W_,R.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",I_("previewHeight",String(Math.round(W_))),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",s)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",s)}).current,X1=L((K)=>{K.preventDefault();let q=z0.current;if(!q)return;let F=K.touches[0];if(!F)return;let k=F.clientY,R=E_.current||280,n=K.currentTarget;n.classList.add("dragging"),document.body.style.userSelect="none";let o=(c)=>{let W_=c.touches[0];if(!W_)return;c.preventDefault();let j0=q.clientHeight-80,n0=Math.min(Math.max(R-(W_.clientY-k),80),j0);q.style.setProperty("--preview-height",`${n0}px`),E_.current=n0},s=()=>{n.classList.remove("dragging"),document.body.style.userSelect="",I_("previewHeight",String(Math.round(E_.current||R))),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",s),document.removeEventListener("touchcancel",s)};document.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchend",s),document.addEventListener("touchcancel",s)}).current,W1=async()=>{if(!N)return;try{let K=await l3(N);if(K.media_id)U(K.media_id)}catch(K){w((q)=>({...q||{},error:K.message||"Failed to attach"}))}},x2=async()=>{if(!N||Q_)return;await n_(N)},X2=(K)=>{return Array.from(K?.dataTransfer?.types||[]).includes("Files")},Z0=M((K)=>{if(!X2(K))return;if(K.preventDefault(),r_.current+=1,!$2.current)V_(!0);a("upload");let q=F0(K)||h_();g_(q),a_(q)},[h_,F0,g_,a_]),j1=M((K)=>{if(!X2(K))return;if(K.preventDefault(),K.dataTransfer)K.dataTransfer.dropEffect="copy";if(!$2.current)V_(!0);if(Z2.current!=="upload")a("upload");let q=F0(K)||h_();if(f_.current!==q)g_(q);a_(q)},[h_,F0,g_,a_]),K1=M((K)=>{if(!X2(K))return;if(K.preventDefault(),r_.current=Math.max(0,r_.current-1),r_.current===0)V_(!1),a(null),g_(null),b_()},[g_,b_]),W2=M(async(K,q=".")=>{let F=Array.from(K||[]);if(F.length===0)return;let k=q&&q!==""?q:".",R=k!=="."?k:"workspace root";J_(!0);try{let n=null;for(let o of F)try{n=await y1(o,k)}catch(s){let c=s?.status,W_=s?.code;if(c===409||W_==="file_exists"){let j0=o?.name||"file";if(!window.confirm(`"${j0}" already exists in ${R}. Overwrite?`))continue;n=await y1(o,k,{overwrite:!0})}else throw s}if(n?.path)e_.current=n.path,O(n.path),S_.current?.(n.path);K_.current?.(k)}catch(n){l(n.message||"Failed to upload file")}finally{J_(!1)}},[]),f0=M(async(K,q)=>{if(!K)return;let F=C_.current?.get(K);if(!F)return;let k=q&&q!==""?q:".",R=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(k===R)return;try{let o=(await d3(K,k))?.path||K;if(F.type==="dir")G((s)=>{let c=new Set;for(let W_ of s)if(W_===K)c.add(o);else if(W_.startsWith(`${K}/`))c.add(`${o}${W_.slice(K.length)}`);else c.add(W_);return c});if(O(o),F.type==="dir")w(null),f(!1),U(null);else S_.current?.(o);K_.current?.(R),K_.current?.(k)}catch(n){l(n?.message||"Failed to move entry")}},[]);H0.current=f0;let q0=M(async(K)=>{if(!X2(K))return;K.preventDefault(),r_.current=0,V_(!1),a(null),Z_(null),b_();let q=Array.from(K?.dataTransfer?.files||[]);if(q.length===0)return;let F=f_.current||F0(K)||h_();await W2(q,F)},[h_,F0,W2]),G1=M((K)=>{if(K?.stopPropagation?.(),j_)return;let q=K?.currentTarget?.dataset?.uploadTarget||".";C0.current=q,K0.current?.click()},[j_]),D2=M(()=>{if(j_)return;let K=O0.current,q=K?C_.current?.get(K):null;C0.current=q?.type==="dir"?q.path:".",K0.current?.click()},[j_]),t0=M((K)=>{if(!K||K.button!==0)return;let q=K.currentTarget;if(!q||!q.dataset)return;let F=q.dataset.path;if(!F||F===".")return;if(w0.current===F)return;let k=E0(K);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!Y2(k))return;K.preventDefault(),y0.current={path:F,dragging:!1,startX:K.clientX,startY:K.clientY};let R=(o)=>{let s=y0.current;if(!s?.path)return;let c=Math.abs(o.clientX-s.startX),W_=Math.abs(o.clientY-s.startY),j0=c>4||W_>4;if(!s.dragging&&j0)s.dragging=!0,__.current=!0,V_(!0),a("move"),I0(s.path),Y0(o.clientX,o.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(s.dragging){o.preventDefault(),Y0(o.clientX,o.clientY);let n0=document.elementFromPoint(o.clientX,o.clientY),v0=L0(n0)||h_();if(f_.current!==v0)g_(v0);a_(v0)}},n=()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",n);let o=y0.current;if(o?.dragging&&o.path){let s=f_.current||h_(),c=H0.current;if(typeof c==="function")c(o.path,s)}y0.current={path:null,dragging:!1,startX:0,startY:0},r_.current=0,V_(!1),a(null),g_(null),b_(),b0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{__.current=!1},0)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",n)},[L0,h_,I0,Y0,b0,g_,a_,b_]),N2=M(async(K)=>{let q=Array.from(K?.target?.files||[]);if(q.length===0)return;let F=C0.current||".";if(await W2(q,F),C0.current=".",K?.target)K.target.value=""},[W2]);return Q`
        <aside
            class=${`workspace-sidebar${$_?" workspace-drop-active":""}`}
            data-workspace-scale=${L_}
            ref=${z0}
            onDragEnter=${Z0}
            onDragOver=${j1}
            onDragLeave=${K1}
            onDrop=${q0}
        >
            <input type="file" multiple style="display:none" ref=${K0} onChange=${N2} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${m0} title="New file" disabled=${j_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${W0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${Y_?" active":""}`}
                        onClick=${B0}
                        title=${Y_?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!Y_&&Q`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${_0}>
                ${j_&&Q`<div class="workspace-drop-hint">Uploading…</div>`}
                ${b&&Q`<div class="workspace-loading">Loading…</div>`}
                ${p&&Q`<div class="workspace-error">${p}</div>`}
                ${X&&Q`
                    <div
                        class="workspace-tree-list"
                        ref=${t_}
                        tabIndex="0"
                        onClick=${X0}
                        onDblClick=${V2}
                        onKeyDown=${i0}
                        onTouchStart=${$0}
                        onTouchEnd=${P0}
                        onTouchMove=${S2}
                        onTouchCancel=${P0}
                    >
                        ${r.map(({node:K,depth:q})=>{let F=K.type==="dir",k=K.path===N,R=K.path===W,n=F&&j.has(K.path),o=i&&K.path===i,s=Array.isArray(K.children)&&K.children.length>0?K.children.length:Number(K.child_count)||0;return Q`
                                <div
                                    key=${K.path}
                                    class=${`workspace-row${k?" selected":""}${o?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+q*y_.indentPx}px`}}
                                    data-path=${K.path}
                                    data-type=${K.type}
                                    onMouseDown=${t0}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${F?n?Q`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:Q`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${F?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${F?Q`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:Q`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${R?Q`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${M0}
                                                value=${E}
                                                onInput=${(c)=>D(c?.target?.value||"")}
                                                onKeyDown=${(c)=>{if(c.key==="Enter")c.preventDefault(),r0();else if(c.key==="Escape")c.preventDefault(),V0()}}
                                                onBlur=${V0}
                                                onClick=${(c)=>c.stopPropagation()}
                                            />
                                        `:Q`<span class="workspace-label"><span class="workspace-label-text">${K.name}</span></span>`}
                                    ${F&&!n&&s>0&&Q`
                                        <span class="workspace-count">${s}</span>
                                    `}
                                    ${F&&Q`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${K.path}
                                            title="Upload files to this folder"
                                            onClick=${G1}
                                            disabled=${j_}
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
            ${N&&Q`
                <div class="workspace-preview-splitter-h" onMouseDown=${l0} onTouchStart=${X1}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${N}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${m0} title="New file" disabled=${j_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!Q_&&Q`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>N0&&l_.current?.(N,C)}
                                    title=${p0}
                                    disabled=${!N0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${x2}
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
                            ${Q_?Q`
                                    <button class="workspace-download" onClick=${D2}
                                        title="Upload files to this folder" disabled=${j_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${s3(N,Y_)}
                                        title="Download folder as zip" onClick=${(K)=>K.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:Q`<button class="workspace-download" onClick=${W1} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${y&&Q`<div class="workspace-loading">Loading preview…</div>`}
                    ${C?.error&&Q`<div class="workspace-error">${C.error}</div>`}
                    ${Q_&&Q`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${T_?.loading&&Q`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${T_?.error&&Q`<div class="workspace-error">${T_.error}</div>`}
                        ${T_?.payload&&T_.payload.segments?.length>0&&Q`
                            <${P6} payload=${T_.payload} />
                        `}
                        ${T_?.payload&&(!T_.payload.segments||T_.payload.segments.length===0)&&Q`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${C&&!C.error&&!Q_&&Q`
                        <div class="workspace-preview-meta">
                            ${C.size?Q`<span>${d0(C.size)}</span>`:""}
                            ${C.mtime?Q`<span>${_1(C.mtime)}</span>`:""}
                            ${C.truncated?Q`<span>truncated</span>`:""}
                        </div>
                        <div class="workspace-preview-body" ref=${x0}></div>
                    `}
                    ${T&&Q`
                        <div class="workspace-download-card">
                            <${M6} mediaId=${T} />
                        </div>
                    `}
                </div>
            `}
            ${e&&Q`
                <div class="workspace-drag-ghost" ref=${g0}>${e.label}</div>
            `}
        </aside>
    `}function d4({tabs:_,activeId:$,onActivate:Z,onClose:J,onCloseOthers:X,onCloseAll:Y,onTogglePin:j,onTogglePreview:G,previewTabs:N,onToggleDock:O,dockVisible:W}){let[H,E]=v(null),D=L(null);m(()=>{if(!H)return;let U=(b)=>{if(b.type==="keydown"&&b.key!=="Escape")return;E(null)};return document.addEventListener("click",U),document.addEventListener("keydown",U),()=>{document.removeEventListener("click",U),document.removeEventListener("keydown",U)}},[H]),m(()=>{let U=(b)=>{if(b.ctrlKey&&b.key==="Tab"){if(b.preventDefault(),!_.length)return;let u=_.findIndex((y)=>y.id===$);if(b.shiftKey){let y=_[(u-1+_.length)%_.length];Z?.(y.id)}else{let y=_[(u+1)%_.length];Z?.(y.id)}return}if((b.ctrlKey||b.metaKey)&&b.key==="w"){let u=document.querySelector(".editor-pane");if(u&&u.contains(document.activeElement)){if(b.preventDefault(),$)J?.($)}}};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[_,$,Z,J]);let C=M((U,b)=>{if(U.button===1){U.preventDefault(),J?.(b);return}if(U.button===0)Z?.(b)},[Z,J]),w=M((U,b)=>{U.preventDefault(),E({id:b,x:U.clientX,y:U.clientY})},[]),T=M((U,b)=>{U.stopPropagation(),J?.(b)},[J]);if(m(()=>{if(!$||!D.current)return;let U=D.current.querySelector(".tab-item.active");if(U)U.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return Q`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((U)=>Q`
                <div
                    key=${U.id}
                    class=${`tab-item${U.id===$?" active":""}${U.dirty?" dirty":""}${U.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${U.id===$}
                    title=${U.path}
                    onMouseDown=${(b)=>C(b,U.id)}
                    onContextMenu=${(b)=>w(b,U.id)}
                >
                    ${U.pinned&&Q`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${U.label}</span>
                    <span
                        class="tab-close"
                        onClick=${(b)=>T(b,U.id)}
                        title=${U.dirty?"Unsaved changes":"Close"}
                        aria-label=${U.dirty?"Unsaved changes":`Close ${U.label}`}
                    >
                        ${U.dirty?Q`<span class="tab-dirty-dot" aria-hidden="true"></span>`:Q`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                <line x1="4" y1="4" x2="12" y2="12"/>
                                <line x1="12" y1="4" x2="4" y2="12"/>
                            </svg>`}
                    </span>
                </div>
            `)}
            ${O&&Q`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${W?" active":""}`}
                    onClick=${O}
                    title=${`${W?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${W?"Hide":"Show"} terminal`}
                    aria-pressed=${W?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 12 4 10 8 6 12 10 12 12"/>
                        <line x1="2" y1="14" x2="14" y2="14"/>
                    </svg>
                </button>
            `}
        </div>
        ${H&&Q`
            <div class="tab-context-menu" style=${{left:H.x+"px",top:H.y+"px"}}>
                <button onClick=${()=>{J?.(H.id),E(null)}}>Close</button>
                <button onClick=${()=>{X?.(H.id),E(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),E(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{j?.(H.id),E(null)}}>
                    ${_.find((U)=>U.id===H.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(H.id)&&Q`
                    <hr />
                    <button onClick=${()=>{G(H.id),E(null)}}>
                        ${N?.has(H.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var S6=400,d1=60,r4=220,r1="mdPreviewHeight";function x6(){try{let _=localStorage.getItem(r1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=d1?$:r4}catch{return r4}}function s4({getContent:_,path:$,onClose:Z}){let[J,X]=v(""),[Y,j]=v(x6),G=L(null),N=L(null),O=L(""),W=L(_);return W.current=_,m(()=>{let D=()=>{let w=W.current?.()||"";if(w===O.current)return;O.current=w;try{let T=F2(w,null,{sanitize:!1});X(T)}catch{X('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};D();let C=setInterval(D,S6);return()=>clearInterval(C)},[]),m(()=>{if(G.current&&J)e2(G.current).catch(()=>{})},[J]),Q`
        <div
            class="md-preview-splitter"
            onMouseDown=${(D)=>{D.preventDefault();let C=D.clientY,w=N.current?.offsetHeight||Y,T=N.current?.parentElement,U=T?T.offsetHeight*0.7:500,b=D.currentTarget;b.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let u=(f)=>{let p=Math.min(Math.max(w-(f.clientY-C),d1),U);j(p)},y=()=>{b.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(r1,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",y)}}
            onTouchStart=${(D)=>{D.preventDefault();let C=D.touches[0];if(!C)return;let w=C.clientY,T=N.current?.offsetHeight||Y,U=N.current?.parentElement,b=U?U.offsetHeight*0.7:500,u=D.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let y=(p)=>{let l=p.touches[0];if(!l)return;p.preventDefault();let Y_=Math.min(Math.max(T-(l.clientY-w),d1),b);j(Y_)},f=()=>{u.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(r1,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",y),document.removeEventListener("touchend",f),document.removeEventListener("touchcancel",f)};document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("touchend",f),document.addEventListener("touchcancel",f)}}
        ></div>
        <div class="md-preview-panel" ref=${N} style=${{height:Y+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${Z} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${G}
                dangerouslySetInnerHTML=${{__html:J}}
            />
        </div>
    `}function a4({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:Z}){let J=L(_);J.current=_;let X=L($);X.current=$;let Y=L(Z);Y.current=Z,m(()=>{Y.current();let j=new w1((N,O)=>J.current(N,O),(N)=>X.current(N));j.connect();let G=()=>{j.reconnectIfNeeded()};return window.addEventListener("focus",G),document.addEventListener("visibilitychange",G),()=>{window.removeEventListener("focus",G),document.removeEventListener("visibilitychange",G),j.disconnect()}},[])}function t4(){let[_,$]=v(!1),[Z,J]=v("default"),X=L(!1);m(()=>{let N=Q2("notificationsEnabled",!1);if(X.current=N,$(N),typeof Notification<"u")J(Notification.permission)},[]),m(()=>{X.current=_},[_]);let Y=M(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch{return Promise.resolve("default")}},[]),j=M(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){J("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let O=await Y();if(J(O||"default"),O!=="granted"){X.current=!1,$(!1),I_("notificationsEnabled","false");return}}let N=!X.current;X.current=N,$(N),I_("notificationsEnabled",String(N))},[Y]),G=M((N,O)=>{if(!X.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let W=new Notification(N,{body:O});return W.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:Z,toggleNotifications:j,notify:G}}var P2=(_)=>{let $=new Set;return(_||[]).filter((Z)=>{if(!Z||$.has(Z.id))return!1;return $.add(Z.id),!0})};function e4({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[Z,J]=v(null),[X,Y]=v(!1),j=L(!1),G=L(null),N=L(!1),O=L(null),W=L(null);m(()=>{j.current=X},[X]),m(()=>{W.current=Z},[Z]);let H=M(async(C=null)=>{try{if(C){let w=await I3(C);J(w.posts),Y(!1)}else{let w=await p2(10);J(w.posts),Y(w.has_more)}}catch(w){console.error("Failed to load posts:",w)}},[]),E=M(async()=>{try{let C=await p2(10);J((w)=>{if(!w||w.length===0)return C.posts;return P2([...C.posts,...w])}),Y((w)=>w||C.has_more)}catch(C){console.error("Failed to refresh timeline:",C)}},[]),D=M(async(C={})=>{let w=W.current;if(!w||w.length===0)return;if(N.current)return;let{preserveScroll:T=!0,preserveMode:U="top",allowRepeat:b=!1}=C,u=(p)=>{if(!T){p();return}if(U==="top")$(p);else _(p)},f=w.slice().sort((p,l)=>p.id-l.id)[0]?.id;if(!Number.isFinite(f))return;if(!b&&O.current===f)return;N.current=!0,O.current=f;try{let p=await p2(10,f);if(p.posts.length>0)u(()=>{J((l)=>P2([...p.posts,...l||[]])),Y(p.has_more)});else Y(!1)}catch(p){console.error("Failed to load more posts:",p)}finally{N.current=!1}},[_,$]);return m(()=>{G.current=D},[D]),{posts:Z,setPosts:J,hasMore:X,setHasMore:Y,hasMoreRef:j,loadPosts:H,refreshTimeline:E,loadMore:D,loadMoreRef:G,loadingMoreRef:N,lastBeforeIdRef:O}}function _8(){let[_,$]=v(null),[Z,J]=v({text:"",totalLines:0}),[X,Y]=v(""),[j,G]=v({text:"",totalLines:0}),[N,O]=v(null),[W,H]=v(null),[E,D]=v(null),C=L(null),w=L(0),T=L(!1),U=L(""),b=L(""),u=L(null),y=L(null),f=L(null),p=L(null),l=L(!1),Y_=L(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:Z,setAgentDraft:J,agentPlan:X,setAgentPlan:Y,agentThought:j,setAgentThought:G,pendingRequest:N,setPendingRequest:O,currentTurnId:W,setCurrentTurnId:H,steerQueuedTurnId:E,setSteerQueuedTurnId:D,lastAgentEventRef:C,lastSilenceNoticeRef:w,isAgentRunningRef:T,draftBufferRef:U,thoughtBufferRef:b,pendingRequestRef:u,stalledPostIdRef:y,currentTurnIdRef:f,steerQueuedTurnIdRef:p,thoughtExpandedRef:l,draftExpandedRef:Y_}}function $8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:Z,dockHeightRef:J}){let X=L((W)=>{W.preventDefault();let H=_.current;if(!H)return;let E=W.clientX,D=$.current||280,C=W.currentTarget;C.classList.add("dragging"),H.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let w=E,T=(b)=>{w=b.clientX;let u=Math.min(Math.max(D+(b.clientX-E),160),600);H.style.setProperty("--sidebar-width",`${u}px`),$.current=u},U=()=>{let b=Math.min(Math.max(D+(w-E),160),600);$.current=b,C.classList.remove("dragging"),H.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",I_("sidebarWidth",String(Math.round(b))),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",U)}).current,Y=L((W)=>{W.preventDefault();let H=_.current;if(!H)return;let E=W.touches[0];if(!E)return;let D=E.clientX,C=$.current||280,w=W.currentTarget;w.classList.add("dragging"),H.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let T=(b)=>{let u=b.touches[0];if(!u)return;b.preventDefault();let y=Math.min(Math.max(C+(u.clientX-D),160),600);H.style.setProperty("--sidebar-width",`${y}px`),$.current=y},U=()=>{w.classList.remove("dragging"),H.classList.remove("sidebar-resizing"),document.body.style.userSelect="",I_("sidebarWidth",String(Math.round($.current||C))),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current,j=L((W)=>{W.preventDefault();let H=_.current;if(!H)return;let E=W.clientX,D=Z.current||$.current||280,C=W.currentTarget;C.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let w=E,T=(b)=>{w=b.clientX;let u=Math.min(Math.max(D+(b.clientX-E),200),800);H.style.setProperty("--editor-width",`${u}px`),Z.current=u},U=()=>{let b=Math.min(Math.max(D+(w-E),200),800);Z.current=b,C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",I_("editorWidth",String(Math.round(b))),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",U)}).current,G=L((W)=>{W.preventDefault();let H=_.current;if(!H)return;let E=W.touches[0];if(!E)return;let D=E.clientX,C=Z.current||$.current||280,w=W.currentTarget;w.classList.add("dragging"),document.body.style.userSelect="none";let T=(b)=>{let u=b.touches[0];if(!u)return;b.preventDefault();let y=Math.min(Math.max(C+(u.clientX-D),200),800);H.style.setProperty("--editor-width",`${y}px`),Z.current=y},U=()=>{w.classList.remove("dragging"),document.body.style.userSelect="",I_("editorWidth",String(Math.round(Z.current||C))),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current,N=L((W)=>{W.preventDefault();let H=_.current;if(!H)return;let E=W.clientY,D=J?.current||200,C=W.currentTarget;C.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let w=E,T=(b)=>{w=b.clientY;let u=Math.min(Math.max(D-(b.clientY-E),100),window.innerHeight*0.5);if(H.style.setProperty("--dock-height",`${u}px`),J)J.current=u},U=()=>{let b=Math.min(Math.max(D-(w-E),100),window.innerHeight*0.5);if(J)J.current=b;C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",I_("dockHeight",String(Math.round(b))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",U)}).current,O=L((W)=>{W.preventDefault();let H=_.current;if(!H)return;let E=W.touches[0];if(!E)return;let D=E.clientY,C=J?.current||200,w=W.currentTarget;w.classList.add("dragging"),document.body.style.userSelect="none";let T=(b)=>{let u=b.touches[0];if(!u)return;b.preventDefault();let y=Math.min(Math.max(C-(u.clientY-D),100),window.innerHeight*0.5);if(H.style.setProperty("--dock-height",`${y}px`),J)J.current=y},U=()=>{w.classList.remove("dragging"),document.body.style.userSelect="",I_("dockHeight",String(Math.round(J?.current||C))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current;return{handleSplitterMouseDown:X,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:j,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:N,handleDockSplitterTouchStart:O}}function Z8({onTabClosed:_}={}){let $=L(_);$.current=_;let[Z,J]=v(()=>D_.getTabs()),[X,Y]=v(()=>D_.getActiveId()),[j,G]=v(()=>D_.getTabs().length>0);m(()=>{return D_.onChange((y,f)=>{J(y),Y(f),G(y.length>0)})},[]);let[N,O]=v(()=>new Set),W=M((y)=>{O((f)=>{let p=new Set(f);if(p.has(y))p.delete(y);else p.add(y);return p})},[]),H=M((y)=>{O((f)=>{if(!f.has(y))return f;let p=new Set(f);return p.delete(y),p})},[]),E=M((y)=>{if(!y)return;let f={path:y,mode:"edit"};try{if(!i_.resolve(f)){if(!i_.get("editor")){console.warn(`[openEditor] No pane handler for: ${y}`);return}}}catch(p){console.warn(`[openEditor] paneRegistry.resolve() error for "${y}":`,p)}D_.open(y)},[]),D=M(()=>{let y=D_.getActiveId();if(y){let f=D_.get(y);if(f?.dirty){if(!window.confirm(`"${f.label}" has unsaved changes. Close anyway?`))return}D_.close(y),H(y),$.current?.(y)}},[H]),C=M((y)=>{let f=D_.get(y);if(f?.dirty){if(!window.confirm(`"${f.label}" has unsaved changes. Close anyway?`))return}D_.close(y),H(y),$.current?.(y)},[H]),w=M((y)=>{D_.activate(y)},[]),T=M((y)=>{let f=D_.getTabs().filter((Y_)=>Y_.id!==y&&!Y_.pinned),p=f.filter((Y_)=>Y_.dirty).length;if(p>0){if(!window.confirm(`${p} unsaved tab${p>1?"s":""} will be closed. Continue?`))return}let l=f.map((Y_)=>Y_.id);D_.closeOthers(y),l.forEach((Y_)=>{H(Y_),$.current?.(Y_)})},[H]),U=M(()=>{let y=D_.getTabs().filter((l)=>!l.pinned),f=y.filter((l)=>l.dirty).length;if(f>0){if(!window.confirm(`${f} unsaved tab${f>1?"s":""} will be closed. Continue?`))return}let p=y.map((l)=>l.id);D_.closeAll(),p.forEach((l)=>{H(l),$.current?.(l)})},[H]),b=M((y)=>{D_.togglePin(y)},[]),u=M(()=>{let y=D_.getActiveId();if(y)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:y}}))},[]);return m(()=>{let y=(f)=>{let{oldPath:p,newPath:l,type:Y_}=f.detail||{};if(!p||!l)return;if(Y_==="dir"){for(let N_ of D_.getTabs())if(N_.path===p||N_.path.startsWith(`${p}/`)){let $_=`${l}${N_.path.slice(p.length)}`;D_.rename(N_.id,$_)}}else D_.rename(p,l)};return window.addEventListener("workspace-file-renamed",y),()=>window.removeEventListener("workspace-file-renamed",y)},[]),m(()=>{let y=(f)=>{if(D_.hasUnsaved())f.preventDefault(),f.returnValue=""};return window.addEventListener("beforeunload",y),()=>window.removeEventListener("beforeunload",y)},[]),{editorOpen:j,tabStripTabs:Z,tabStripActiveId:X,previewTabs:N,openEditor:E,closeEditor:D,handleTabClose:C,handleTabActivate:w,handleTabCloseOthers:T,handleTabCloseAll:U,handleTabTogglePin:b,handleTabTogglePreview:W,revealInExplorer:u}}function s1(_,$){try{if(typeof window>"u")return $;let Z=window.__PICLAW_SILENCE||{},J=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,X=Z[_]??window[J],Y=Number(X);return Number.isFinite(Y)?Y:$}catch{return $}}var a1=s1("warning",30000),J8=s1("finalize",120000),Y8=s1("refresh",30000),X8=30000;function W8(_){let $={};return(_?.agents||[]).forEach((Z)=>{$[Z.id]=Z}),$}function j8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function K8(_=30000){let[,$]=v(0);m(()=>{let Z=setInterval(()=>$((J)=>J+1),_);return()=>clearInterval(Z)},[_])}function t1(_,$=160){let Z=String(_||"").replace(/\r\n/g,`
`);if(!Z)return 0;return Z.split(`
`).reduce((J,X)=>J+Math.max(1,Math.ceil(X.length/$)),0)}function M2(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var I6=T3,G8=v3,T6=R3,V8=m3,N8=h3,O8=g3,e1=typeof F1==="function"?F1:M2("getAgentContext",null),f6=typeof j2==="function"?j2:M2("getAgentModels",{current:null,models:[]}),v6=typeof E1==="function"?E1:M2("getAgentQueueState",{count:0}),R6=typeof k1==="function"?k1:M2("steerAgentQueueItem",{removed:!1,queued:"steer"}),g6=typeof D1==="function"?D1:M2("removeAgentQueueItem",{removed:!1});if(window.marked)marked.setOptions({breaks:!0,gfm:!0});i_.register(f1);i_.register(c1);i_.register(u1);v1();var u6=typeof localStorage<"u"&&localStorage.getItem("experimentalPanes")==="true";if(u6)i_.register(R1);function c6(){let[_,$]=v("disconnected"),[Z,J]=v(null),[X,Y]=v(null),[j,G]=v(!1),[N,O]=v([]),[W,H]=v([]),[E,D]=v(null),{agentStatus:C,setAgentStatus:w,agentDraft:T,setAgentDraft:U,agentPlan:b,setAgentPlan:u,agentThought:y,setAgentThought:f,pendingRequest:p,setPendingRequest:l,currentTurnId:Y_,setCurrentTurnId:N_,steerQueuedTurnId:$_,setSteerQueuedTurnId:V_,lastAgentEventRef:P_,lastSilenceNoticeRef:a,isAgentRunningRef:e,draftBufferRef:d,thoughtBufferRef:i,pendingRequestRef:Z_,stalledPostIdRef:j_,currentTurnIdRef:J_,steerQueuedTurnIdRef:T_,thoughtExpandedRef:X_,draftExpandedRef:O_}=_8(),[q_,L_]=v({}),[A_,F_]=v(null),[U_,k_]=v(null),[v_,w_]=v(!1),[M_,C_]=v(null),[c_,l_]=v(null),[S_,K_]=v([]),[z0,t_]=v(!1),M0=S_.length,K0=L(new Set),C0=L([]),z_=L(new Set);K0.current=new Set(S_.map((V)=>V.row_id)),C0.current=S_;let{notificationsEnabled:Q0,notificationPermission:y0,toggleNotifications:S,notify:__}=t4(),[E_,J0]=v(()=>new Set),[m_,S0]=v(()=>Q2("workspaceOpen",!0)),x0=L(null),{editorOpen:d_,tabStripTabs:G0,tabStripActiveId:R_,previewTabs:U0,openEditor:r_,closeEditor:f_,handleTabClose:$2,handleTabActivate:Z2,handleTabCloseOthers:g0,handleTabCloseAll:K2,handleTabTogglePin:A0,handleTabTogglePreview:H0,revealInExplorer:O0}=Z8({onTabClosed:(V)=>x0.current?.(V)}),w0=L(null),e_=L(null);m(()=>{let V=w0.current;if(!V)return;if(e_.current)e_.current.dispose(),e_.current=null;let B=R_;if(!B)return;let A={path:B,mode:"edit"},P=i_.resolve(A)||i_.get("editor");if(!P){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let g=P.mount(V,A);e_.current=g,g.onDirtyChange?.((h)=>{D_.setDirty(B,h)}),g.onSaveRequest?.(()=>{}),g.onClose?.(()=>{f_()});let x=D_.getViewState(B);if(x&&typeof g.restoreViewState==="function")requestAnimationFrame(()=>g.restoreViewState(x));if(typeof g.onViewStateChange==="function")g.onViewStateChange((h)=>{D_.saveViewState(B,h)});return requestAnimationFrame(()=>g.focus()),()=>{if(e_.current===g)g.dispose(),e_.current=null}},[R_,f_]);let[s_,J2]=v({name:"You",avatar_url:null,avatar_background:null}),G2=L(!1),u0=L(!1),E2=L(null),h_=L(0),L0=L(0),F0=L({}),g_=L({name:null,avatar_url:null}),b_=L({currentHashtag:null,searchQuery:null}),a_=L(null),Y0=L(null),I0=L(0),b0=L(0),c0=L(0),V0=L(null),T0=L(null),r0=L(null),s0=L(0),m0=L({title:null,avatarBase:null}),h0=L(null),z=M(()=>{if(h0.current)clearTimeout(h0.current),h0.current=null;D(null)},[]);K8(30000),m(()=>{return X4()},[]),m(()=>{I_("workspaceOpen",String(m_))},[m_]),m(()=>{return()=>{z()}},[z]),m(()=>{F0.current=q_||{}},[q_]),m(()=>{g_.current=s_||{name:"You",avatar_url:null,avatar_background:null}},[s_]);let I=M((V,B,A=null)=>{if(typeof document>"u")return;let P=(V||"").trim()||"PiClaw";if(m0.current.title!==P){document.title=P;let H_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(H_&&H_.getAttribute("content")!==P)H_.setAttribute("content",P);m0.current.title=P}let g=document.getElementById("dynamic-favicon");if(!g)return;let x=g.getAttribute("data-default")||g.getAttribute("href")||"/favicon.ico",h=B||x,t=B?`${h}|${A||""}`:h;if(m0.current.avatarBase!==t){let H_=B?`${h}${h.includes("?")?"&":"?"}v=${A||Date.now()}`:h;g.setAttribute("href",H_),m0.current.avatarBase=t}},[]),r=M((V)=>{if(!V)return;O((B)=>B.includes(V)?B:[...B,V])},[]),B_=M((V)=>{O((B)=>B.filter((A)=>A!==V))},[]);x0.current=B_;let y_=M(()=>{O([])},[]),x_=M((V,B=null,A="info",P=3000)=>{z(),D({title:V,detail:B||null,kind:A||"info"}),h0.current=setTimeout(()=>{D((g)=>g?.title===V?null:g)},P)},[z]),Q_=M((V)=>{if(typeof V!=="string")return;let B=V.trim();if(!B){x_("No file selected","Use a valid file path from a file pill.","warning");return}if(!d_){x_("Editor pane is not open","Open the editor pane to open files from pills.","warning");return}if(/^[a-z][a-z0-9+.-]*:/i.test(B)){x_("Cannot open external path from file pill","Use an in-workspace file path.","warning");return}let P={path:B,mode:"edit"};if(!i_.resolve(P)){x_("No editor available",`No editor can open: ${B}`,"warning");return}r_(B)},[d_,r_,x_]),N0=M(()=>{let V=R_;if(V)r(V)},[R_,r]),p0=M((V)=>{if(!V)return;H((B)=>B.includes(V)?B:[...B,V])},[]),E0=M(async(V)=>{let B=(P)=>{P.scrollIntoView({behavior:"smooth",block:"center"}),P.classList.add("post-highlight"),setTimeout(()=>P.classList.remove("post-highlight"),2000)},A=document.getElementById("post-"+V);if(A){B(A);return}try{let g=(await f3(V))?.thread?.[0];if(!g)return;Z0((x)=>{if(!x)return[g];if(x.some((h)=>h.id===g.id))return x;return[...x,g]}),requestAnimationFrame(()=>{setTimeout(()=>{let x=document.getElementById("post-"+V);if(x)B(x)},50)})}catch(P){console.error("[scrollToMessage] Failed to fetch message",V,P)}},[]),Y2=M((V)=>{H((B)=>B.filter((A)=>A!==V))},[]),V2=M(()=>{H([])},[]),X0=M((V={})=>{let B=Date.now();if(P_.current=B,V.running)e.current=!0,t_((A)=>A?A:!0);if(V.clearSilence)a.current=0},[t_]),W0=M(()=>{if(r0.current)clearTimeout(r0.current),r0.current=null;s0.current=0},[]);m(()=>()=>{W0()},[W0]);let p_=M(()=>{W0(),w((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:B,lastActivity:A,...P}=V;return P})},[W0]),B0=M((V)=>{if(!V)return;W0();let B=Date.now();s0.current=B,w({type:V.type||"active",last_activity:!0}),r0.current=setTimeout(()=>{if(s0.current!==B)return;w((A)=>{if(!A||!(A.last_activity||A.lastActivity))return A;return null})},X8)},[W0]),_0=M(()=>{e.current=!1,t_(!1),P_.current=null,a.current=0,d.current="",i.current="",Z_.current=null,T0.current=null,J_.current=null,T_.current=null,W0(),N_(null),V_(null),X_.current=!1,O_.current=!1},[W0,N_,V_,t_]),n_=M((V)=>{if(!V)return;if(J_.current===V)return;J_.current=V,N_(V),T_.current=null,V_(null),d.current="",i.current="",U({text:"",totalLines:0}),u(""),f({text:"",totalLines:0}),l(null),Z_.current=null,T0.current=null,X_.current=!1,O_.current=!1},[N_,V_]),a0=M((V)=>{if(typeof document<"u"){let H_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&H_)return}let B=T0.current;if(!B||!B.post)return;if(V&&B.turnId&&B.turnId!==V)return;let A=B.post;if(A.id&&V0.current===A.id)return;let P=String(A?.data?.content||"").trim();if(!P)return;V0.current=A.id||V0.current,T0.current=null;let g=P.replace(/\s+/g," ").slice(0,200),x=F0.current||{},t=(A?.data?.agent_id?x[A.data.agent_id]:null)?.name||"Pi";__(t,g)},[__]),i0=M(async(V,B)=>{if(V!=="thought"&&V!=="draft")return;let A=J_.current;if(V==="thought"){if(X_.current=B,A)try{await N8(A,"thought",B)}catch(P){console.warn("Failed to update thought visibility:",P)}if(!B)return;try{let P=A?await V8(A,"thought"):null;if(P?.text)i.current=P.text;f((g)=>({...g||{text:"",totalLines:0},fullText:i.current||g?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:g?.totalLines||0}))}catch(P){console.warn("Failed to fetch full thought:",P)}return}if(O_.current=B,A)try{await N8(A,"draft",B)}catch(P){console.warn("Failed to update draft visibility:",P)}if(!B)return;try{let P=A?await V8(A,"draft"):null;if(P?.text)d.current=P.text;U((g)=>({...g||{text:"",totalLines:0},fullText:d.current||g?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:g?.totalLines||0}))}catch(P){console.warn("Failed to fetch full draft:",P)}},[]),$0=L(null),P0=M(()=>{let V=a_.current;if(!V)return;if(!(Math.abs(V.scrollTop)>150))V.scrollTop=0},[]);$0.current=P0;let S2=M((V)=>{let B=a_.current;if(!B||typeof V!=="function"){V?.();return}let{currentHashtag:A,searchQuery:P}=b_.current||{},g=!(P&&!A),x=g?B.scrollHeight-B.scrollTop:B.scrollTop;V(),requestAnimationFrame(()=>{let h=a_.current;if(!h)return;if(g){let t=Math.max(h.scrollHeight-x,0);h.scrollTop=t}else{let t=Math.max(h.scrollHeight-h.clientHeight,0),H_=Math.min(x,t);h.scrollTop=H_}})},[]),l0=M((V)=>{let B=a_.current;if(!B||typeof V!=="function"){V?.();return}let A=B.scrollTop;V(),requestAnimationFrame(()=>{let P=a_.current;if(!P)return;let g=Math.max(P.scrollHeight-P.clientHeight,0);P.scrollTop=Math.min(A,g)})},[]),X1="Queued as a follow-up (one-at-a-time).",W1="⁣",x2=M((V)=>{if(!V||!Array.isArray(V))return V;let B=K0.current,A=new Set(B),P=C0.current;for(let x of P)if(x?.thread_id!=null)A.add(x.thread_id);let g=V.filter((x)=>{if(A.has(x?.id))return!1;if(x?.data?.is_bot_message){let h=x?.data?.content;if(h===X1||h===W1)return!1}return!0});return g.length===V.length?V:g},[]),{posts:X2,setPosts:Z0,hasMore:j1,setHasMore:K1,hasMoreRef:W2,loadPosts:f0,refreshTimeline:q0,loadMore:G1,loadMoreRef:D2}=e4({preserveTimelineScroll:S2,preserveTimelineScrollTop:l0}),t0=k0(()=>x2(X2),[X2,S_,x2]),N2=M(()=>{let V=j_.current;if(!V)return;Z0((B)=>B?B.filter((A)=>A.id!==V):B),j_.current=null},[Z0]),{handleSplitterMouseDown:K,handleSplitterTouchStart:q,handleEditorSplitterMouseDown:F,handleEditorSplitterTouchStart:k,handleDockSplitterMouseDown:R,handleDockSplitterTouchStart:n}=$8({appShellRef:Y0,sidebarWidthRef:I0,editorWidthRef:b0,dockHeightRef:c0}),o=M(()=>{if(!e.current)return;e.current=!1,a.current=0,P_.current=null,J_.current=null,N_(null),X_.current=!1,O_.current=!1;let V=(d.current||"").trim();if(d.current="",i.current="",U({text:"",totalLines:0}),u(""),f({text:"",totalLines:0}),l(null),Z_.current=null,T0.current=null,!V){w({type:"error",title:"Response stalled - No content received"});return}let A=`${V}${`

⚠️ Response may be incomplete - the model stopped responding`}`,P=Date.now(),g=new Date().toISOString(),x={id:P,timestamp:g,data:{type:"agent_response",content:A,agent_id:"default",is_local_stall:!0}};j_.current=P,Z0((h)=>h?P2([...h,x]):[x]),$0.current?.(),w(null)},[N_]);m(()=>{b_.current={currentHashtag:Z,searchQuery:X}},[Z,X]),m(()=>{let V=Math.min(1000,Math.max(100,Math.floor(a1/2))),B=setInterval(()=>{if(!e.current)return;if(Z_.current)return;let A=P_.current;if(!A)return;let P=Date.now(),g=P-A;if(g>=J8){o();return}if(g>=a1){if(P-a.current>=Y8){let x=Math.floor(g/1000);w({type:"waiting",title:`Waiting for model… No events for ${x}s`}),a.current=P}}},V);return()=>clearInterval(B)},[o]);let s=M(async()=>{try{let V=await e1();if(V)l_(V)}catch(V){console.warn("Failed to fetch agent context:",V)}},[]),c=M(async()=>{try{let V=await O8("web:default");if(!V||V.status!=="active"||!V.data){if(u0.current){let{currentHashtag:P,searchQuery:g}=b_.current||{};if(!P&&!g)q0()}u0.current=!1,_0(),w(null),U({text:"",totalLines:0}),u(""),f({text:"",totalLines:0}),l(null),Z_.current=null;return}u0.current=!0;let B=V.data,A=B.turn_id||B.turnId;if(A)n_(A);if(X0({running:!0,clearSilence:!0}),p_(),w(B),V.thought&&V.thought.text)f((P)=>{if(P&&P.text&&P.text.length>=V.thought.text.length)return P;return i.current=V.thought.text,{text:V.thought.text,totalLines:V.thought.totalLines||0}});if(V.draft&&V.draft.text)U((P)=>{if(P&&P.text&&P.text.length>=V.draft.text.length)return P;return d.current=V.draft.text,{text:V.draft.text,totalLines:V.draft.totalLines||0}})}catch(V){console.warn("Failed to fetch agent status:",V)}},[_0,p_,X0,q0,n_]),W_=M((V)=>{if($(V),V!=="connected"){w(null),U({text:"",totalLines:0}),u(""),f({text:"",totalLines:0}),l(null),Z_.current=null,_0();return}if(!G2.current){G2.current=!0,c();return}let{currentHashtag:B,searchQuery:A}=b_.current;if(!B&&!A)q0();c()},[_0,q0,c]),j0=M(async(V)=>{J(V),Z0(null),await f0(V)},[f0]),n0=M(async()=>{J(null),Y(null),Z0(null),await f0()},[f0]),v0=M(async(V)=>{if(!V||!V.trim())return;Y(V.trim()),J(null),Z0(null);try{let B=await I6(V.trim());Z0(B.results),K1(!1)}catch(B){console.error("Failed to search:",B),Z0([])}},[]),B8=M(()=>{G(!0),Y(null),J(null),Z0([])},[]),q8=M(()=>{G(!1),Y(null),f0()},[f0]),m6=M(()=>{},[]),z8=M(async(V)=>{if(!V)return;let B=V.id,A=t0?.filter((g)=>g?.data?.thread_id===B&&g?.id!==B).length||0;if(A>0){if(!window.confirm(`Delete this message and its ${A} replies?`))return}let P=(g)=>{if(!g.length)return;J0((h)=>{let t=new Set(h);return g.forEach((H_)=>t.add(H_)),t}),setTimeout(()=>{if(l0(()=>{Z0((h)=>h?h.filter((t)=>!g.includes(t.id)):h)}),J0((h)=>{let t=new Set(h);return g.forEach((H_)=>t.delete(H_)),t}),W2.current)D2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let g=await G8(B,A>0);if(g?.ids?.length)P(g.ids)}catch(g){let x=g?.message||"";if(A===0&&x.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let t=await G8(B,!0);if(t?.ids?.length)P(t.ids);return}console.error("Failed to delete post:",g),alert(`Failed to delete message: ${x}`)}},[t0,l0]),_3=M(async()=>{try{let V=await T6();L_(W8(V));let B=V?.user||{};J2((P)=>{let g=typeof B.name==="string"&&B.name.trim()?B.name.trim():"You",x=typeof B.avatar_url==="string"?B.avatar_url.trim():null,h=typeof B.avatar_background==="string"&&B.avatar_background.trim()?B.avatar_background.trim():null;if(P.name===g&&P.avatar_url===x&&P.avatar_background===h)return P;return{name:g,avatar_url:x,avatar_background:h}});let A=(V?.agents||[]).find((P)=>P.id==="default");if(A?.model)F_(A.model);I(A?.name,A?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=await e1();if(V)l_(V)}catch{}},[I]);m(()=>{_3();let V=U2("sidebarWidth",null),B=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(I0.current=B,Y0.current)Y0.current.style.setProperty("--sidebar-width",`${B}px`)},[_3]);let Q8=z0||C!==null,$3=M((V)=>{if(!V||typeof V!=="object")return;let B=V.agent_id;if(!B)return;let{agent_name:A,agent_avatar:P}=V;if(!A&&P===void 0)return;let g=F0.current?.[B]||{id:B},x=g.name||null,h=g.avatar_url??g.avatarUrl??g.avatar??null,t=!1,H_=!1;if(A&&A!==g.name)x=A,H_=!0;if(P!==void 0){let o0=typeof P==="string"?P.trim():null,J3=typeof h==="string"?h.trim():null,B2=o0||null;if(B2!==(J3||null))h=B2,t=!0}if(!H_&&!t)return;if(L_((o0)=>{let B2={...o0[B]||{id:B}};if(H_)B2.name=x;if(t)B2.avatar_url=h;return{...o0,[B]:B2}}),B==="default")I(x,h,t?Date.now():null)},[I]),Z3=M((V)=>{if(!V||typeof V!=="object")return;let B=V.user_name??V.userName,A=V.user_avatar??V.userAvatar,P=V.user_avatar_background??V.userAvatarBackground;if(B===void 0&&A===void 0&&P===void 0)return;J2((g)=>{let x=typeof B==="string"&&B.trim()?B.trim():g.name||"You",h=A===void 0?g.avatar_url:typeof A==="string"&&A.trim()?A.trim():null,t=P===void 0?g.avatar_background:typeof P==="string"&&P.trim()?P.trim():null;if(g.name===x&&g.avatar_url===h&&g.avatar_background===t)return g;return{name:x,avatar_url:h,avatar_background:t}})},[]),V1=M((V)=>{if(!V||typeof V!=="object")return;let B=V.model??V.current;if(B!==void 0)F_(B);if(V.thinking_level!==void 0)k_(V.thinking_level??null);if(V.supports_thinking!==void 0)w_(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)C_(V.provider_usage??null)},[]),k2=M(()=>{f6().then((V)=>{if(V)V1(V)}).catch(()=>{})},[V1]),u_=M(()=>{v6().then((V)=>{let B=z_.current,A=Array.isArray(V?.items)?V.items.map((P)=>({...P})).filter((P)=>!B.has(P.row_id)):[];if(A.length){K_((P)=>{if(P.length===A.length&&P.every((g,x)=>g.row_id===A[x].row_id))return P;return A});return}B.clear(),K_((P)=>P.length===0?P:[])}).catch(()=>{K_((V)=>V.length===0?V:[])})},[K_]),U8=M((V)=>{let B=V?.row_id;if(B==null)return;z_.current.add(B),K_((A)=>A.filter((P)=>P?.row_id!==B)),R6(B).then(()=>{u_()}).catch((A)=>{console.warn("[queue] Failed to steer queued item:",A),z_.current.delete(B),u_()})},[u_,K_]),H8=M((V)=>{let B=V?.row_id;if(B==null)return;z_.current.add(B),K_((A)=>A.filter((P)=>P?.row_id!==B)),g6(B).then(()=>{u_()}).catch((A)=>{console.warn("[queue] Failed to remove queued item:",A),z_.current.delete(B),u_()})},[u_,K_]),L8=M((V)=>{if(!V||typeof V!=="object")return;if(V?.queued==="followup"||V?.queued==="steer"){u_();return}let B=V?.command;if(B&&typeof B==="object"&&(B?.queued_followup||B?.queued_steer))u_()},[u_]),N1=M(()=>{k2(),u_()},[k2,u_]);m(()=>{N1();let V=setInterval(()=>{k2(),u_()},60000);return()=>clearInterval(V)},[N1,k2,u_]);let O1=M((V,B)=>{let A=B?.turn_id;if($3(B),Z3(B),V==="ui_theme"){W4(B);return}if(V?.startsWith("agent_")){if(!(V==="agent_draft_delta"||V==="agent_thought_delta"||V==="agent_draft"||V==="agent_thought"))p_()}if(V==="connected"){w(null),U({text:"",totalLines:0}),u(""),f({text:"",totalLines:0}),l(null),Z_.current=null,_0(),O8("web:default").then((t)=>{if(!t||t.status!=="active"||!t.data)return;let H_=t.data,o0=H_.turn_id||H_.turnId;if(o0)n_(o0);if(X0({clearSilence:!0}),B0(H_),t.thought&&t.thought.text)i.current=t.thought.text,f({text:t.thought.text,totalLines:t.thought.totalLines||0});if(t.draft&&t.draft.text)d.current=t.draft.text,U({text:t.draft.text,totalLines:t.draft.totalLines||0})}).catch((t)=>{console.warn("Failed to fetch agent status:",t)});let{currentHashtag:x,searchQuery:h}=b_.current||{};if(!x&&!h)q0();N1();return}if(V==="agent_status"){if(B.type==="done"||B.type==="error"){if(A&&J_.current&&A!==J_.current)return;if(B.type==="done"){a0(A||J_.current);let{currentHashtag:x,searchQuery:h}=b_.current||{};if(!x&&!h)q0();if(B.context_usage)l_(B.context_usage)}if(u0.current=!1,_0(),z_.current.clear(),u_(),U({text:"",totalLines:0}),u(""),f({text:"",totalLines:0}),l(null),B.type==="error")w({type:"error",title:B.title||"Agent error"}),setTimeout(()=>w(null),8000);else w(null)}else{if(A)n_(A);if(X0({running:!0,clearSilence:!0}),B.type==="thinking")d.current="",i.current="",U({text:"",totalLines:0}),u(""),f({text:"",totalLines:0});E2.current=B,w((x)=>{if(x&&x.type===B.type&&x.title===B.title)return x;return B})}return}if(V==="agent_steer_queued"){if(A&&J_.current&&A!==J_.current)return;let x=A||J_.current;if(!x)return;T_.current=x,V_(x);return}if(V==="agent_followup_queued"){let x=B?.row_id,h=B?.content;if(x!=null&&typeof h==="string"&&h.trim())K_((t)=>{if(t.some((H_)=>H_?.row_id===x))return t;return[...t,{row_id:x,content:h,timestamp:B?.timestamp||null,thread_id:B?.thread_id??null}]});u_();return}if(V==="agent_followup_consumed"){let x=B?.row_id;if(x!=null)K_((h)=>h.filter((t)=>t.row_id!==x));u_(),q0();return}if(V==="agent_followup_removed"){let x=B?.row_id;if(x!=null)z_.current.add(x),K_((h)=>h.filter((t)=>t.row_id!==x));u_();return}if(V==="agent_draft_delta"){if(A&&J_.current&&A!==J_.current)return;if(A&&!J_.current)n_(A);if(X0({running:!0,clearSilence:!0}),B?.reset)d.current="";if(B?.delta)d.current+=B.delta;let x=Date.now();if(!h_.current||x-h_.current>=100){h_.current=x;let h=d.current,t=t1(h);if(O_.current)U((H_)=>({text:H_?.text||"",totalLines:t,fullText:h}));else U({text:h,totalLines:t})}return}if(V==="agent_draft"){if(A&&J_.current&&A!==J_.current)return;if(A&&!J_.current)n_(A);X0({running:!0,clearSilence:!0});let x=B.text||"",h=B.mode||(B.kind==="plan"?"replace":"append"),t=Number.isFinite(B.total_lines)?B.total_lines:x?x.replace(/\r\n/g,`
`).split(`
`).length:0;if(B.kind==="plan")if(h==="replace")u(x);else u((H_)=>(H_||"")+x);else if(!O_.current)d.current=x,U({text:x,totalLines:t});return}if(V==="agent_thought_delta"){if(A&&J_.current&&A!==J_.current)return;if(A&&!J_.current)n_(A);if(X0({running:!0,clearSilence:!0}),B?.reset)i.current="";if(typeof B?.delta==="string")i.current+=B.delta;let x=Date.now();if(X_.current&&(!L0.current||x-L0.current>=100)){L0.current=x;let h=i.current;f((t)=>({text:t?.text||"",totalLines:t1(h),fullText:h}))}return}if(V==="agent_thought"){if(A&&J_.current&&A!==J_.current)return;if(A&&!J_.current)n_(A);X0({running:!0,clearSilence:!0});let x=B.text||"",h=Number.isFinite(B.total_lines)?B.total_lines:x?x.replace(/\r\n/g,`
`).split(`
`).length:0;if(!X_.current)i.current=x,f({text:x,totalLines:h});return}if(V==="agent_request"){if(console.log("Agent request:",B),A&&J_.current&&A!==J_.current)return;if(A)n_(A);X0({running:!0,clearSilence:!0}),l(B),Z_.current=B;return}if(V==="agent_request_timeout"){if(console.log("Agent request timeout:",B),A&&J_.current&&A!==J_.current)return;l(null),Z_.current=null,_0(),w({type:"error",title:"Permission request timed out"});return}if(V==="model_changed"){if(B?.model!==void 0)F_(B.model);if(B?.thinking_level!==void 0)k_(B.thinking_level??null);if(B?.supports_thinking!==void 0)w_(Boolean(B.supports_thinking));e1().then((x)=>{if(x)l_(x)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:B}));return}let{currentHashtag:P,searchQuery:g}=b_.current;if(V==="agent_response")N2(),T0.current={post:B,turnId:J_.current};if(!P&&!g&&(V==="new_post"||V==="agent_response"))Z0((x)=>{if(!x)return[B];if(x.some((h)=>h.id===B.id))return x;return[...x,B]}),$0.current?.();if(V==="interaction_updated")Z0((x)=>{if(!x)return x;if(!x.some((h)=>h.id===B.id))return x;return x.map((h)=>h.id===B.id?B:h)});if(V==="interaction_deleted"){let x=B?.ids||[];if(x.length){l0(()=>{Z0((H_)=>H_?H_.filter((o0)=>!x.includes(o0.id)):H_)});let{currentHashtag:h,searchQuery:t}=b_.current;if(W2.current&&!h&&!t)D2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[_0,p_,D2,X0,a0,l0,q0,N2,n_,B0,$3,Z3,k2,u_,K_]);m(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=O1,V.reset=()=>{N2(),_0(),w(null),U({text:"",totalLines:0}),u(""),f({text:"",totalLines:0}),l(null)},V.finalize=()=>o(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[_0,o,O1,N2]),a4({handleSseEvent:O1,handleConnectionStatusChange:W_,loadPosts:f0}),m(()=>{if(!t0||t0.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let B=V.slice(5);E0(B),history.replaceState(null,"",location.pathname+location.search)},[t0,E0]);let B1=C!==null;m(()=>{if(_!=="connected")return;let B=setInterval(()=>{let{currentHashtag:A,searchQuery:P}=b_.current||{},g=!A&&!P;if(B1){if(g)q0();u_(),c(),s()}else{if(g)q0();c(),s()}},B1?15000:60000);return()=>clearInterval(B)},[_,B1,c,s,u_,q0]);let F8=M(()=>{S0((V)=>!V)},[]);m(()=>{if(!d_)return;if(typeof window>"u")return;let V=Y0.current;if(!V)return;if(!b0.current){let B=U2("editorWidth",null),A=I0.current||280;b0.current=Number.isFinite(B)?B:A}if(V.style.setProperty("--editor-width",`${b0.current}px`),!c0.current){let B=U2("dockHeight",null);c0.current=Number.isFinite(B)?B:200}V.style.setProperty("--dock-height",`${c0.current}px`)},[d_]);let O2=i_.getDockPanes().length>0,[q1,E8]=v(!1),I2=M(()=>E8((V)=>!V),[]);m(()=>{if(!O2)return;let V=(B)=>{if(B.ctrlKey&&B.key==="`")B.preventDefault(),I2()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[I2,O2]);let D8=Boolean($_&&$_===(C?.turn_id||Y_));return Q`
        <div class=${`app-shell${m_?"":" workspace-collapsed"}${d_?" editor-open":""}`} ref=${Y0}>
            <${o4}
                onFileSelect=${r}
                visible=${m_}
                active=${m_||d_}
                onOpenEditor=${r_}
            />
            <button
                class=${`workspace-toggle-tab${m_?" open":" closed"}`}
                onClick=${F8}
                title=${m_?"Hide workspace":"Show workspace"}
                aria-label=${m_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${K} onTouchStart=${q}></div>
            ${d_&&Q`
                <div class="editor-pane-container">
                    <${d4}
                        tabs=${G0}
                        activeId=${R_}
                        onActivate=${Z2}
                        onClose=${$2}
                        onCloseOthers=${g0}
                        onCloseAll=${K2}
                        onTogglePin=${A0}
                        onTogglePreview=${H0}
                        previewTabs=${U0}
                        onToggleDock=${O2?I2:void 0}
                        dockVisible=${O2&&q1}
                    />
                    <div class="editor-pane-host" ref=${w0}></div>
                    ${R_&&U0.has(R_)&&Q`
                        <${s4}
                            getContent=${()=>e_.current?.getContent?.()}
                            path=${R_}
                            onClose=${()=>H0(R_)}
                        />
                    `}
                    ${O2&&q1&&Q`<div class="dock-splitter" onMouseDown=${R} onTouchStart=${n}></div>`}
                    ${O2&&Q`<div class=${`dock-panel${q1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${I2} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="12" x2="12" y2="4"/>
                                    <polyline points="4 4 12 4 12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body">
                            <div class="terminal-placeholder">Terminal integration pending - xterm.js + WebSocket</div>
                        </div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${F} onTouchStart=${k}></div>
            `}
            <div class="container">
                ${X&&j8()&&Q`<div class="search-results-spacer"></div>`}
                ${(Z||X)&&Q`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${n0}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${Z?`#${Z}`:`Search: ${X}`}</span>
                    </div>
                `}
                <${A4}
                    posts=${t0}
                    hasMore=${j1}
                    onLoadMore=${G1}
                    timelineRef=${a_}
                    onHashtagClick=${j0}
                    onMessageRef=${p0}
                    onScrollToMessage=${E0}
                    onFileRef=${Q_}
                    onPostClick=${void 0}
                    onDeletePost=${z8}
                    emptyMessage=${Z?`No posts with #${Z}`:X?`No results for "${X}"`:void 0}
                    agents=${q_}
                    user=${s_}
                    reverse=${!(X&&!Z)}
                    removingPostIds=${E_}
                    searchQuery=${X}
                />
                <${F4}
                    status=${C}
                    draft=${T}
                    plan=${b}
                    thought=${y}
                    pendingRequest=${p}
                    intent=${E}
                    turnId=${Y_}
                    steerQueued=${D8}
                    onPanelToggle=${i0}
                />
                <${t3}
                    onPost=${()=>{f0(),P0()}}
                    onFocus=${P0}
                    searchMode=${j}
                    onSearch=${v0}
                    onEnterSearch=${B8}
                    onExitSearch=${q8}
                    fileRefs=${N}
                    onRemoveFileRef=${B_}
                    onClearFileRefs=${y_}
                    messageRefs=${W}
                    onRemoveMessageRef=${Y2}
                    onClearMessageRefs=${V2}
                    activeEditorPath=${R_}
                    onAttachEditorFile=${N0}
                    onOpenFilePill=${Q_}
                    followupQueueCount=${M0}
                    followupQueueItems=${S_}
                    onInjectQueuedFollowup=${U8}
                    onRemoveQueuedFollowup=${H8}
                    onMessageResponse=${L8}
                    isAgentActive=${Q8}
                    activeModel=${A_}
                    modelUsage=${M_}
                    thinkingLevel=${U_}
                    supportsThinking=${v_}
                    contextUsage=${c_}
                    notificationsEnabled=${Q0}
                    notificationPermission=${y0}
                    onToggleNotifications=${S}
                    onModelChange=${F_}
                    onModelStateChange=${V1}
                />
                <${D4} status=${_} />
                <${E4}
                    request=${p}
                    onRespond=${()=>{l(null),Z_.current=null}}
                />
            </div>
        </div>
    `}P3(Q`<${c6} />`,document.getElementById("app"));

//# debugId=CA7EFCFA0041242764756E2164756E21
//# sourceMappingURL=app.bundle.js.map
