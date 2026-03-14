var S8=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,Z)=>(typeof require<"u"?require:$)[Z]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var i2,G_,L3,A2,F3,j3,x8,h2={},E3=[],I8=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function $2(_,$){for(var Z in $)_[Z]=$[Z];return _}function D3(_){var $=_.parentNode;$&&$.removeChild(_)}function C3(_,$,Z){var J,X,Y,j={};for(Y in $)Y=="key"?J=$[Y]:Y=="ref"?X=$[Y]:j[Y]=$[Y];if(arguments.length>2&&(j.children=arguments.length>3?i2.call(arguments,2):Z),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)j[Y]===void 0&&(j[Y]=_.defaultProps[Y]);return u2(_,j,J,X,null)}function u2(_,$,Z,J,X){var Y={type:_,props:$,key:Z,ref:J,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:X==null?++L3:X};return G_.vnode!=null&&G_.vnode(Y),Y}function l2(_){return _.children}function m2(_,$){this.props=_,this.context=$}function Q2(_,$){if($==null)return _.__?Q2(_.__,_.__.__k.indexOf(_)+1):null;for(var Z;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null)return Z.__e;return typeof _.type=="function"?Q2(_):null}function k3(_){var $,Z;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,$=0;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null){_.__e=_.__c.base=Z.__e;break}return k3(_)}}function K3(_){(!_.__d&&(_.__d=!0)&&A2.push(_)&&!p2.__r++||j3!==G_.debounceRendering)&&((j3=G_.debounceRendering)||F3)(p2)}function p2(){for(var _;p2.__r=A2.length;)_=A2.sort(function($,Z){return $.__v.__b-Z.__v.__b}),A2=[],_.some(function($){var Z,J,X,Y,j,G;$.__d&&(j=(Y=(Z=$).__v).__e,(G=Z.__P)&&(J=[],(X=$2({},Y)).__v=Y.__v+1,H1(G,Y,X,Z.__n,G.ownerSVGElement!==void 0,Y.__h!=null?[j]:null,J,j==null?Q2(Y):j,Y.__h),M3(J,Y),Y.__e!=j&&k3(Y)))})}function y3(_,$,Z,J,X,Y,j,G,N,O){var K,U,L,E,b,F,x,M=J&&J.__k||E3,H=M.length;for(Z.__k=[],K=0;K<$.length;K++)if((E=Z.__k[K]=(E=$[K])==null||typeof E=="boolean"?null:typeof E=="string"||typeof E=="number"||typeof E=="bigint"?u2(null,E,null,null,E):Array.isArray(E)?u2(l2,{children:E},null,null,null):E.__b>0?u2(E.type,E.props,E.key,null,E.__v):E)!=null){if(E.__=Z,E.__b=Z.__b+1,(L=M[K])===null||L&&E.key==L.key&&E.type===L.type)M[K]=void 0;else for(U=0;U<H;U++){if((L=M[U])&&E.key==L.key&&E.type===L.type){M[U]=void 0;break}L=null}H1(_,E,L=L||h2,X,Y,j,G,N,O),b=E.__e,(U=E.ref)&&L.ref!=U&&(x||(x=[]),L.ref&&x.push(L.ref,null,E),x.push(U,E.__c||b,E)),b!=null?(F==null&&(F=b),typeof E.type=="function"&&E.__k!=null&&E.__k===L.__k?E.__d=N=A3(E,N,_):N=b3(_,E,L,M,b,N),O||Z.type!=="option"?typeof Z.type=="function"&&(Z.__d=N):_.value=""):N&&L.__e==N&&N.parentNode!=_&&(N=Q2(L))}for(Z.__e=F,K=H;K--;)M[K]!=null&&(typeof Z.type=="function"&&M[K].__e!=null&&M[K].__e==Z.__d&&(Z.__d=Q2(J,K+1)),w3(M[K],M[K]));if(x)for(K=0;K<x.length;K++)P3(x[K],x[++K],x[++K])}function A3(_,$,Z){var J,X;for(J=0;J<_.__k.length;J++)(X=_.__k[J])&&(X.__=_,$=typeof X.type=="function"?A3(X,$,Z):b3(Z,X,X,_.__k,X.__e,$));return $}function b3(_,$,Z,J,X,Y){var j,G,N;if($.__d!==void 0)j=$.__d,$.__d=void 0;else if(Z==null||X!=Y||X.parentNode==null)_:if(Y==null||Y.parentNode!==_)_.appendChild(X),j=null;else{for(G=Y,N=0;(G=G.nextSibling)&&N<J.length;N+=2)if(G==X)break _;_.insertBefore(X,Y),j=Y}return j!==void 0?j:X.nextSibling}function W3(_,$,Z){$[0]==="-"?_.setProperty($,Z):_[$]=Z==null?"":typeof Z!="number"||I8.test($)?Z:Z+"px"}function g2(_,$,Z,J,X){var Y;_:if($==="style")if(typeof Z=="string")_.style.cssText=Z;else{if(typeof J=="string"&&(_.style.cssText=J=""),J)for($ in J)Z&&$ in Z||W3(_.style,$,"");if(Z)for($ in Z)J&&Z[$]===J[$]||W3(_.style,$,Z[$])}else if($[0]==="o"&&$[1]==="n")Y=$!==($=$.replace(/Capture$/,"")),$=$.toLowerCase()in _?$.toLowerCase().slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=Z,Z?J||_.addEventListener($,Y?N3:G3,Y):_.removeEventListener($,Y?N3:G3,Y);else if($!=="dangerouslySetInnerHTML"){if(X)$=$.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if($!=="href"&&$!=="list"&&$!=="form"&&$!=="tabIndex"&&$!=="download"&&$ in _)try{_[$]=Z==null?"":Z;break _}catch(j){}typeof Z=="function"||(Z!=null&&(Z!==!1||$[0]==="a"&&$[1]==="r")?_.setAttribute($,Z):_.removeAttribute($))}}function G3(_){this.l[_.type+!1](G_.event?G_.event(_):_)}function N3(_){this.l[_.type+!0](G_.event?G_.event(_):_)}function H1(_,$,Z,J,X,Y,j,G,N){var O,K,U,L,E,b,F,x,M,H,S,y=$.type;if($.constructor!==void 0)return null;Z.__h!=null&&(N=Z.__h,G=$.__e=Z.__e,$.__h=null,Y=[G]),(O=G_.__b)&&O($);try{_:if(typeof y=="function"){if(x=$.props,M=(O=y.contextType)&&J[O.__c],H=O?M?M.props.value:O.__:J,Z.__c?F=(K=$.__c=Z.__c).__=K.__E:(("prototype"in y)&&y.prototype.render?$.__c=K=new y(x,H):($.__c=K=new m2(x,H),K.constructor=y,K.render=f8),M&&M.sub(K),K.props=x,K.state||(K.state={}),K.context=H,K.__n=J,U=K.__d=!0,K.__h=[]),K.__s==null&&(K.__s=K.state),y.getDerivedStateFromProps!=null&&(K.__s==K.state&&(K.__s=$2({},K.__s)),$2(K.__s,y.getDerivedStateFromProps(x,K.__s))),L=K.props,E=K.state,U)y.getDerivedStateFromProps==null&&K.componentWillMount!=null&&K.componentWillMount(),K.componentDidMount!=null&&K.__h.push(K.componentDidMount);else{if(y.getDerivedStateFromProps==null&&x!==L&&K.componentWillReceiveProps!=null&&K.componentWillReceiveProps(x,H),!K.__e&&K.shouldComponentUpdate!=null&&K.shouldComponentUpdate(x,K.__s,H)===!1||$.__v===Z.__v){K.props=x,K.state=K.__s,$.__v!==Z.__v&&(K.__d=!1),K.__v=$,$.__e=Z.__e,$.__k=Z.__k,$.__k.forEach(function(g){g&&(g.__=$)}),K.__h.length&&j.push(K);break _}K.componentWillUpdate!=null&&K.componentWillUpdate(x,K.__s,H),K.componentDidUpdate!=null&&K.__h.push(function(){K.componentDidUpdate(L,E,b)})}K.context=H,K.props=x,K.state=K.__s,(O=G_.__r)&&O($),K.__d=!1,K.__v=$,K.__P=_,O=K.render(K.props,K.state,K.context),K.state=K.__s,K.getChildContext!=null&&(J=$2($2({},J),K.getChildContext())),U||K.getSnapshotBeforeUpdate==null||(b=K.getSnapshotBeforeUpdate(L,E)),S=O!=null&&O.type===l2&&O.key==null?O.props.children:O,y3(_,Array.isArray(S)?S:[S],$,Z,J,X,Y,j,G,N),K.base=$.__e,$.__h=null,K.__h.length&&j.push(K),F&&(K.__E=K.__=null),K.__e=!1}else Y==null&&$.__v===Z.__v?($.__k=Z.__k,$.__e=Z.__e):$.__e=T8(Z.__e,$,Z,J,X,Y,j,N);(O=G_.diffed)&&O($)}catch(g){$.__v=null,(N||Y!=null)&&($.__e=G,$.__h=!!N,Y[Y.indexOf(G)]=null),G_.__e(g,$,Z)}}function M3(_,$){G_.__c&&G_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(J){J.call(Z)})}catch(J){G_.__e(J,Z.__v)}})}function T8(_,$,Z,J,X,Y,j,G){var N,O,K,U=Z.props,L=$.props,E=$.type,b=0;if(E==="svg"&&(X=!0),Y!=null){for(;b<Y.length;b++)if((N=Y[b])&&(N===_||(E?N.localName==E:N.nodeType==3))){_=N,Y[b]=null;break}}if(_==null){if(E===null)return document.createTextNode(L);_=X?document.createElementNS("http://www.w3.org/2000/svg",E):document.createElement(E,L.is&&L),Y=null,G=!1}if(E===null)U===L||G&&_.data===L||(_.data=L);else{if(Y=Y&&i2.call(_.childNodes),O=(U=Z.props||h2).dangerouslySetInnerHTML,K=L.dangerouslySetInnerHTML,!G){if(Y!=null)for(U={},b=0;b<_.attributes.length;b++)U[_.attributes[b].name]=_.attributes[b].value;(K||O)&&(K&&(O&&K.__html==O.__html||K.__html===_.innerHTML)||(_.innerHTML=K&&K.__html||""))}if(function(F,x,M,H,S){var y;for(y in M)y==="children"||y==="key"||y in x||g2(F,y,null,M[y],H);for(y in x)S&&typeof x[y]!="function"||y==="children"||y==="key"||y==="value"||y==="checked"||M[y]===x[y]||g2(F,y,x[y],M[y],H)}(_,L,U,X,G),K)$.__k=[];else if(b=$.props.children,y3(_,Array.isArray(b)?b:[b],$,Z,J,X&&E!=="foreignObject",Y,j,Y?Y[0]:Z.__k&&Q2(Z,0),G),Y!=null)for(b=Y.length;b--;)Y[b]!=null&&D3(Y[b]);G||(("value"in L)&&(b=L.value)!==void 0&&(b!==_.value||E==="progress"&&!b)&&g2(_,"value",b,U.value,!1),("checked"in L)&&(b=L.checked)!==void 0&&b!==_.checked&&g2(_,"checked",b,U.checked,!1))}return _}function P3(_,$,Z){try{typeof _=="function"?_($):_.current=$}catch(J){G_.__e(J,Z)}}function w3(_,$,Z){var J,X;if(G_.unmount&&G_.unmount(_),(J=_.ref)&&(J.current&&J.current!==_.__e||P3(J,null,$)),(J=_.__c)!=null){if(J.componentWillUnmount)try{J.componentWillUnmount()}catch(Y){G_.__e(Y,$)}J.base=J.__P=null}if(J=_.__k)for(X=0;X<J.length;X++)J[X]&&w3(J[X],$,typeof _.type!="function");Z||_.__e==null||D3(_.__e),_.__e=_.__d=void 0}function f8(_,$,Z){return this.constructor(_,Z)}function S3(_,$,Z){var J,X,Y;G_.__&&G_.__(_,$),X=(J=typeof Z=="function")?null:Z&&Z.__k||$.__k,Y=[],H1($,_=(!J&&Z||$).__k=C3(l2,null,[_]),X||h2,h2,$.ownerSVGElement!==void 0,!J&&Z?[Z]:X?null:$.firstChild?i2.call($.childNodes):null,Y,!J&&Z?Z:X?X.__e:$.firstChild,J),M3(Y,_)}i2=E3.slice,G_={__e:function(_,$){for(var Z,J,X;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((J=Z.constructor)&&J.getDerivedStateFromError!=null&&(Z.setState(J.getDerivedStateFromError(_)),X=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_),X=Z.__d),X)return Z.__E=Z}catch(Y){_=Y}throw _}},L3=0,m2.prototype.setState=function(_,$){var Z;Z=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$2({},this.state),typeof _=="function"&&(_=_($2({},Z),this.props)),_&&$2(Z,_),_!=null&&this.__v&&($&&this.__h.push($),K3(this))},m2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),K3(this))},m2.prototype.render=l2,A2=[],F3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p2.__r=0,x8=0;var o2,k0,V3,b2=0,Q1=[],O3=G_.__b,B3=G_.__r,q3=G_.diffed,z3=G_.__c,Q3=G_.unmount;function L1(_,$){G_.__h&&G_.__h(k0,_,b2||$),b2=0;var Z=k0.__H||(k0.__H={__:[],__h:[]});return _>=Z.__.length&&Z.__.push({}),Z.__[_]}function R(_){return b2=1,v8(I3,_)}function v8(_,$,Z){var J=L1(o2++,2);return J.t=_,J.__c||(J.__=[Z?Z($):I3(void 0,$),function(X){var Y=J.t(J.__[0],X);J.__[0]!==Y&&(J.__=[Y,J.__[1]],J.__c.setState({}))}],J.__c=k0),J.__}function c(_,$){var Z=L1(o2++,3);!G_.__s&&x3(Z.__H,$)&&(Z.__=_,Z.__H=$,k0.__H.__h.push(Z))}function D(_){return b2=5,V0(function(){return{current:_}},[])}function V0(_,$){var Z=L1(o2++,7);return x3(Z.__H,$)&&(Z.__=_(),Z.__H=$,Z.__h=_),Z.__}function w(_,$){return b2=8,V0(function(){return _},$)}function R8(){Q1.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(c2),_.__H.__h.forEach(U1),_.__H.__h=[]}catch($){_.__H.__h=[],G_.__e($,_.__v)}}),Q1=[]}G_.__b=function(_){k0=null,O3&&O3(_)},G_.__r=function(_){B3&&B3(_),o2=0;var $=(k0=_.__c).__H;$&&($.__h.forEach(c2),$.__h.forEach(U1),$.__h=[])},G_.diffed=function(_){q3&&q3(_);var $=_.__c;$&&$.__H&&$.__H.__h.length&&(Q1.push($)!==1&&V3===G_.requestAnimationFrame||((V3=G_.requestAnimationFrame)||function(Z){var J,X=function(){clearTimeout(Y),U3&&cancelAnimationFrame(J),setTimeout(Z)},Y=setTimeout(X,100);U3&&(J=requestAnimationFrame(X))})(R8)),k0=void 0},G_.__c=function(_,$){$.some(function(Z){try{Z.__h.forEach(c2),Z.__h=Z.__h.filter(function(J){return!J.__||U1(J)})}catch(J){$.some(function(X){X.__h&&(X.__h=[])}),$=[],G_.__e(J,Z.__v)}}),z3&&z3(_,$)},G_.unmount=function(_){Q3&&Q3(_);var $=_.__c;if($&&$.__H)try{$.__H.__.forEach(c2)}catch(Z){G_.__e(Z,$.__v)}};var U3=typeof requestAnimationFrame=="function";function c2(_){var $=k0;typeof _.__c=="function"&&_.__c(),k0=$}function U1(_){var $=k0;_.__c=_.__(),k0=$}function x3(_,$){return!_||_.length!==$.length||$.some(function(Z,J){return Z!==_[J]})}function I3(_,$){return typeof $=="function"?$(_):$}var T3=function(_,$,Z,J){var X;$[0]=0;for(var Y=1;Y<$.length;Y++){var j=$[Y++],G=$[Y]?($[0]|=j?1:2,Z[$[Y++]]):$[++Y];j===3?J[0]=G:j===4?J[1]=Object.assign(J[1]||{},G):j===5?(J[1]=J[1]||{})[$[++Y]]=G:j===6?J[1][$[++Y]]+=G+"":j?(X=_.apply(G,T3(_,G,Z,["",null])),J.push(X),G[0]?$[0]|=2:($[Y-2]=0,$[Y]=X)):J.push(G)}return J},H3=new Map,q=function(_){var $=H3.get(this);return $||($=new Map,H3.set(this,$)),($=T3(this,$.get(_)||($.set(_,$=function(Z){for(var J,X,Y=1,j="",G="",N=[0],O=function(L){Y===1&&(L||(j=j.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,L,j):Y===3&&(L||j)?(N.push(3,L,j),Y=2):Y===2&&j==="..."&&L?N.push(4,L,0):Y===2&&j&&!L?N.push(5,0,!0,j):Y>=5&&((j||!L&&Y===5)&&(N.push(Y,0,j,X),Y=6),L&&(N.push(Y,L,0,X),Y=6)),j=""},K=0;K<Z.length;K++){K&&(Y===1&&O(),O(K));for(var U=0;U<Z[K].length;U++)J=Z[K][U],Y===1?J==="<"?(O(),N=[N],Y=3):j+=J:Y===4?j==="--"&&J===">"?(Y=1,j=""):j=J+j[0]:G?J===G?G="":j+=J:J==='"'||J==="'"?G=J:J===">"?(O(),Y=1):Y&&(J==="="?(Y=5,X=j,j=""):J==="/"&&(Y<5||Z[K][U+1]===">")?(O(),Y===3&&(N=N[0]),Y=N,(N=N[0]).push(2,0,Y),Y=0):J===" "||J==="\t"||J===`
`||J==="\r"?(O(),Y=2):j+=J),Y===3&&j==="!--"&&(Y=4,N=N[0])}return O(),N}(_)),$),arguments,[])).length>1?$:$[0]}.bind(C3);async function i_(_,$={}){let Z=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Unknown error"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function n2(_=10,$=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;return i_(Z)}async function f3(_,$=50,Z=0){return i_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${Z}`)}async function v3(_,$=50,Z=0){return i_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${Z}`)}async function R3(_){return i_(`/thread/${_}`)}async function g3(_,$=!1){let Z=`/post/${_}?cascade=${$?"true":"false"}`;return i_(Z,{method:"DELETE"})}async function F1(_,$,Z=null,J=[],X=null){return i_(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:Z,media_ids:J,mode:X})})}async function u3(){return i_("/agents")}async function m3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/status${$}`)}async function E1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/context${$}`)}async function D1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/queue-state${$}`)}async function C1(_,$=null){let Z=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function k1(_,$=null){let Z=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function K2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/models${$}`)}async function c3(_){let $=new FormData;$.append("file",_);let Z=await fetch("/media/upload",{method:"POST",body:$});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Upload failed"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function y1(_,$){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function h3(_,$){let Z=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function p3(_,$="thought"){let Z=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return i_(Z)}async function i3(_,$,Z){return i_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(Z)})})}function u0(_){return`/media/${_}`}function l3(_){return`/media/${_}/thumbnail`}async function M2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function o3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function n3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function d2(_="",$=2,Z=!1){let J=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${Z?"1":"0"}`;return i_(J)}async function d3(_,$=20000,Z=null){let J=Z?`&mode=${encodeURIComponent(Z)}`:"",X=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${J}`;return i_(X)}async function r3(_){return i_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function A1(_,$="",Z={}){let J=new FormData;J.append("file",_);let X=new URLSearchParams;if($)X.set("path",$);if(Z.overwrite)X.set("overwrite","1");let Y=X.toString(),j=Y?`/workspace/upload?${Y}`:"/workspace/upload",G=await fetch(""+j,{method:"POST",body:J});if(!G.ok){let N=await G.json().catch(()=>({error:"Upload failed"})),O=Error(N.error||`HTTP ${G.status}`);throw O.status=G.status,O.code=N.code,O}return G.json()}async function s3(_,$,Z=""){let J=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:Z})});if(!J.ok){let X=await J.json().catch(()=>({error:"Create failed"})),Y=Error(X.error||`HTTP ${J.status}`);throw Y.status=J.status,Y.code=X.code,Y}return J.json()}async function a3(_,$){let Z=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Rename failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function t3(_,$){let Z=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Move failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function e3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return i_($,{method:"DELETE"})}async function r2(_,$=!1){return i_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function b1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function _4(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class M1{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_queued",(_)=>{this.onEvent("agent_followup_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_consumed",(_)=>{this.onEvent("agent_followup_consumed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_removed",(_)=>{this.onEvent("agent_followup_removed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,Z=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,Z+$),this.reconnectAttempts=0;let J=Math.max(this.cooldownUntil-Z,0),X=Math.max(this.reconnectDelay,J);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},X),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function m0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function f_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function U2(_,$=!1){let Z=m0(_);if(Z===null)return $;return Z==="true"}function H2(_,$=null){let Z=m0(_);if(Z===null)return $;let J=parseInt(Z,10);return Number.isFinite(J)?J:$}function d0({prefix:_="file",label:$,title:Z,onRemove:J,onClick:X,removeTitle:Y="Remove",icon:j="file"}){let G=`${_}-file-pill`,N=`${_}-file-name`,O=`${_}-file-remove`,K=j==="message"?q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return q`
    <span class=${G} title=${Z||$} onClick=${X}>
      ${K}
      <span class=${N}>${$}</span>
      ${J&&q`
        <button
          class=${O}
          onClick=${(U)=>{U.preventDefault(),U.stopPropagation(),J()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var u8=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function m8({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,J=_.contextWindow,X=Z!=null?`Context: ${$4(Z)} / ${$4(J)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,Y=7,j=2*Math.PI*7,G=$/100*j,N=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return q`
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
    `}function $4(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function Z4({onPost:_,onFocus:$,searchMode:Z,onSearch:J,onEnterSearch:X,onExitSearch:Y,fileRefs:j=[],onRemoveFileRef:G,onClearFileRefs:N,messageRefs:O=[],onRemoveMessageRef:K,onClearMessageRefs:U,activeModel:L=null,modelUsage:E=null,thinkingLevel:b=null,supportsThinking:F=!1,contextUsage:x=null,notificationsEnabled:M=!1,notificationPermission:H="default",onToggleNotifications:S,onModelChange:y,onModelStateChange:g,activeEditorPath:p=null,onAttachEditorFile:l,onOpenFilePill:Y_,followupQueueItems:O_=[],onInjectQueuedFollowup:__,onRemoveQueuedFollowup:N_,onMessageResponse:M_,isAgentActive:r=!1}){let[e,d]=R(""),[i,$_]=R(""),[W_,J_]=R([]),[v_,X_]=R(!1),[B_,z_]=R([]),[H_,A_]=R(0),[L_,Q_]=R(!1),[k_,w_]=R(!1),[y_,S_]=R(!1),[b_,O0]=R([]),[m_,x_]=R(!1),K_=D(null),Q0=D(null),Z0=D(null),A0=D(null),J0=D(0),F0=200,F_=(Q)=>{let f=new Set,o=[];for(let V_ of Q||[]){if(typeof V_!=="string")continue;let D_=V_.trim();if(!D_||f.has(D_))continue;f.add(D_),o.push(D_)}return o},U0=()=>{let Q=m0("piclaw_compose_history");if(!Q)return[];try{let f=JSON.parse(Q);if(!Array.isArray(f))return[];return F_(f)}catch{return[]}},b0=(Q)=>{f_("piclaw_compose_history",JSON.stringify(Q))},a_=D(U0()),Y0=D(-1),c_=D(""),I=e.trim()||W_.length>0||j.length>0||O.length>0,Z_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),E_=typeof window<"u"&&typeof Notification<"u",B0=typeof window<"u"?Boolean(window.isSecureContext):!1,u_=E_&&B0&&H!=="denied",H0=H==="granted"&&M,o_=H0?"Disable notifications":"Enable notifications",n_=L||"",d_=F&&b?` (${b})`:"",L0=d_.trim()?`${b}`:"",r0=typeof E?.hint_short==="string"?E.hint_short.trim():"",X0=[L0||null,r0||null].filter(Boolean).join(" • "),W2=[n_?`Current model: ${n_}${d_}`:null,E?.plan?`Plan: ${E.plan}`:null,r0||null,E?.primary?.reset_description||null,E?.secondary?.reset_description||null].filter(Boolean),M0=k_?"Switching model…":W2.join(" • ")||`Current model: ${n_}${d_} (tap to open model picker)`,P0=(Q)=>{if(!Q||typeof Q!=="object")return;let f=Q.model??Q.current;if(typeof g==="function")g({model:f??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(f&&typeof y==="function")y(f)},j0=(Q)=>{let f=Q||K_.current;if(!f)return;f.style.height="auto",f.style.height=`${f.scrollHeight}px`,f.style.overflowY="hidden"},c0=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){Q_(!1),z_([]);return}let f=Q.toLowerCase().split(" ")[0];if(f.length<1){Q_(!1),z_([]);return}let o=u8.filter((V_)=>V_.name.startsWith(f)||V_.name.replace(/-/g,"").startsWith(f.replace(/-/g,"")));if(o.length>0&&!(o.length===1&&o[0].name===f))z_(o),A_(0),Q_(!0);else Q_(!1),z_([])},w0=(Q)=>{let f=e,o=f.indexOf(" "),V_=o>=0?f.slice(o):"",D_=Q.name+V_;d(D_),Q_(!1),z_([]),requestAnimationFrame(()=>{let h_=K_.current;if(!h_)return;let q_=D_.length;h_.selectionStart=q_,h_.selectionEnd=q_,h_.focus()})},R_=(Q)=>{if(Z)$_(Q);else d(Q),c0(Q);requestAnimationFrame(()=>j0())},s0=(Q)=>{let f=Z?i:e,o=f&&!f.endsWith(`
`)?`
`:"",V_=`${f}${o}${Q}`.trimStart();R_(V_)},G2=(Q)=>{let f=Q?.command?.model_label;if(f)return f;let o=Q?.command?.message;if(typeof o==="string"){let V_=o.match(/•\s+([^\n]+?)\s+\(current\)/);if(V_?.[1])return V_[1].trim()}return null},J2=async(Q)=>{if(Z||k_)return;w_(!0);try{let f=await F1("default",Q,null,[]),o=G2(f);P0({model:o??L??null,thinking_level:f?.command?.thinking_level,supports_thinking:f?.command?.supports_thinking});try{let V_=await K2();if(V_)P0(V_)}catch{}return _?.(),!0}catch(f){return console.error("Failed to switch model:",f),alert("Failed to switch model: "+f.message),!1}finally{w_(!1)}},a0=async()=>{await J2("/cycle-model")},r_=async(Q)=>{if(!Q||k_)return;if(await J2(`/model ${Q}`))S_(!1)},E0=(Q)=>{Q.preventDefault(),Q.stopPropagation(),S_((f)=>!f)},D0=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return r?"queue":null},I_=async(Q,f,o={})=>{let{includeMedia:V_=!0,includeFileRefs:D_=!0,includeMessageRefs:h_=!0,clearAfterSubmit:q_=!0,recordHistory:W0=!0}=o||{},l0=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:e,f0=typeof l0==="string"?l0:"";if(!f0.trim()&&(V_?W_.length===0:!0)&&(D_?j.length===0:!0)&&(h_?O.length===0:!0))return;Q_(!1),z_([]);let o0=V_?[...W_]:[],N2=D_?[...j]:[],V2=h_?[...O]:[],s_=f0.trim();if(W0&&s_){let P_=a_.current,G0=F_(P_.filter((e0)=>e0!==s_));if(G0.push(s_),G0.length>200)G0.splice(0,G0.length-200);a_.current=G0,b0(G0),Y0.current=-1,c_.current=""}if(q_)d(""),J_([]),N?.(),U?.();(async()=>{try{let P_=[];for(let z0 of o0){let S0=await c3(z0);P_.push(S0.id)}let G0=N2.length?`Files:
${N2.map((z0)=>`- ${z0}`).join(`
`)}`:"",e0=V2.length?`Referenced messages:
${V2.map((z0)=>`- message:${z0}`).join(`
`)}`:"",p_=P_.length?`Images:
${P_.map((z0,S0)=>{let C2=o0[S0]?.name||`image-${S0+1}`;return`- attachment:${z0} (${C2})`}).join(`
`)}`:"",_0=[s_,G0,e0,p_].filter(Boolean).join(`

`),v0=await F1("default",_0,null,P_,D0(f));if(M_?.(v0),v0?.command){P0({model:v0.command.model_label??L??null,thinking_level:v0.command.thinking_level,supports_thinking:v0.command.supports_thinking});try{let z0=await K2();if(z0)P0(z0)}catch{}}_?.()}catch(P_){console.error("Failed to post:",P_)}})()},t_=(Q)=>{__?.(Q)},g_=(Q)=>{if(Q.isComposing)return;if(Z&&Q.key==="Escape"){Q.preventDefault(),$_(""),Y?.();return}if(L_&&B_.length>0){let f=K_.current?.value??(Z?i:e);if(!String(f||"").startsWith("/"))Q_(!1),z_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),A_((o)=>(o+1)%B_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),A_((o)=>(o-1+B_.length)%B_.length);return}if(Q.key==="Tab"){Q.preventDefault(),w0(B_[H_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(K_.current?.value??(Z?i:e)).includes(" ")){Q.preventDefault();let D_=B_[H_];Q_(!1),z_([]),I_(D_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),Q_(!1),z_([]);return}}}if(!Z&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let f=K_.current;if(!f)return;let o=f.value||"",V_=f.selectionStart===0&&f.selectionEnd===0,D_=f.selectionStart===o.length&&f.selectionEnd===o.length;if(Q.key==="ArrowUp"&&V_||Q.key==="ArrowDown"&&D_){let h_=a_.current;if(!h_.length)return;Q.preventDefault();let q_=Y0.current;if(Q.key==="ArrowUp"){if(q_===-1)c_.current=o,q_=h_.length-1;else if(q_>0)q_-=1;Y0.current=q_,R_(h_[q_]||"")}else{if(q_===-1)return;if(q_<h_.length-1)q_+=1,Y0.current=q_,R_(h_[q_]||"");else Y0.current=-1,R_(c_.current||""),c_.current=""}requestAnimationFrame(()=>{let W0=K_.current;if(!W0)return;let l0=W0.value.length;W0.selectionStart=l0,W0.selectionEnd=l0});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let f=K_.current?.value??(Z?i:e);if(Z){if(f.trim())J?.(f.trim())}else I_(f,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let f=K_.current?.value??(Z?i:e);if(Z){if(f.trim())J?.(f.trim())}else I_(f)}},e_=(Q)=>{let f=Array.from(Q||[]).filter((o)=>o&&o.type&&o.type.startsWith("image/"));if(!f.length)return;J_((o)=>[...o,...f])},C0=(Q)=>{e_(Q.target.files),Q.target.value=""},I0=(Q)=>{if(Z)return;Q.preventDefault(),Q.stopPropagation(),J0.current+=1,X_(!0)},h0=(Q)=>{if(Z)return;if(Q.preventDefault(),Q.stopPropagation(),J0.current=Math.max(0,J0.current-1),J0.current===0)X_(!1)},K0=(Q)=>{if(Z)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";X_(!0)},Y2=(Q)=>{if(Z)return;Q.preventDefault(),Q.stopPropagation(),J0.current=0,X_(!1),e_(Q.dataTransfer?.files||[])},T0=(Q)=>{if(Z)return;let f=Q.clipboardData?.items;if(!f||!f.length)return;let o=[];for(let V_ of f){if(V_.kind!=="file")continue;let D_=V_.getAsFile?.();if(D_)o.push(D_)}if(o.length>0)Q.preventDefault(),e_(o)},p0=(Q)=>{J_((f)=>f.filter((o,V_)=>V_!==Q))},t0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:f,longitude:o,accuracy:V_}=Q.coords,D_=`${f.toFixed(5)}, ${o.toFixed(5)}`,h_=Number.isFinite(V_)?` ±${Math.round(V_)}m`:"",q_=`https://maps.google.com/?q=${f},${o}`,W0=`Location: ${D_}${h_} ${q_}`;s0(W0)},(Q)=>{let f=Q?.message||"Unable to retrieve location.";alert(`Location error: ${f}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};c(()=>{if(!y_)return;x_(!0),K2().then((Q)=>{let f=Array.isArray(Q?.models)?Q.models.filter((o)=>typeof o==="string"&&o.trim().length>0):[];O0(f),P0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),O0([])}).finally(()=>{x_(!1)})},[y_,L]),c(()=>{if(Z)S_(!1)},[Z]),c(()=>{if(!y_)return;let Q=(f)=>{let o=Z0.current,V_=A0.current,D_=f.target;if(o&&o.contains(D_))return;if(V_&&V_.contains(D_))return;S_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[y_]);let i0=(Q)=>{let f=Q.target.value;j0(Q.target),R_(f)};return c(()=>{requestAnimationFrame(()=>j0())},[e,i,Z]),q`
        <div class="compose-box">
            ${!Z&&O_.length>0&&q`
                <div class="compose-queue-stack">
                    ${O_.map((Q)=>{let f=typeof Q?.content==="string"?Q.content:"";if(!f.trim())return null;return q`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${f}>
                                    ${f}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>t_(Q)}
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
                                    onClick=${()=>N_?.(Q)}
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
                class=${`compose-input-wrapper${v_?" drag-active":""}`}
                onDragEnter=${I0}
                onDragOver=${K0}
                onDragLeave=${h0}
                onDrop=${Y2}
            >
                <div class="compose-input-main">
                    ${(j.length>0||W_.length>0||O.length>0)&&q`
                        <div class="compose-file-refs">
                            ${O.map((Q)=>{return q`
                                    <${d0}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>K?.(Q)}
                                    />
                                `})}
                            ${j.map((Q)=>{let f=Q.split("/").pop()||Q;return q`
                                    <${d0}
                                        prefix="compose"
                                        label=${f}
                                        title=${Q}
                                        onClick=${()=>Y_?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(Q)}
                                    />
                                `})}
                            ${W_.map((Q,f)=>{let o=Q?.name||`image-${f+1}`;return q`
                                    <${d0}
                                        key=${o+f}
                                        prefix="compose"
                                        label=${o}
                                        title=${o}
                                        removeTitle="Remove image"
                                        onRemove=${()=>p0(f)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${K_}
                        placeholder=${Z?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${Z?i:e}
                        onInput=${i0}
                        onKeyDown=${g_}
                        onPaste=${T0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${L_&&B_.length>0&&q`
                        <div class="slash-autocomplete" ref=${Q0}>
                            ${B_.map((Q,f)=>q`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${f===H_?" active":""}`}
                                    onMouseDown=${(o)=>{o.preventDefault(),w0(Q)}}
                                    onMouseEnter=${()=>A_(f)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${y_&&!Z&&q`
                        <div class="compose-model-popup" ref=${Z0}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${m_&&q`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!m_&&b_.length===0&&q`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!m_&&b_.map((Q)=>q`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${L===Q?" active":""}`}
                                        onClick=${()=>{r_(Q)}}
                                        disabled=${k_}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{a0()}}
                                    disabled=${k_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!Z&&L&&q`
                    <div class="compose-meta-row">
                        ${!Z&&L&&q`
                            <div class="compose-model-meta">
                                <button
                                    ref=${A0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${M0}
                                    aria-label="Open model picker"
                                    onClick=${E0}
                                    disabled=${k_}
                                >
                                    ${k_?"Switching…":n_}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!k_&&X0&&q`
                                        <span class="compose-model-usage-hint" title=${M0}>
                                            ${X0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${Z?"search-mode":""}">
                    ${!Z&&x&&x.percent!=null&&q`
                        <${m8} usage=${x} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${Z?Y:X}
                        title=${Z?"Close search":"Search"}
                    >
                        ${Z?q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${Z_&&!Z&&q`
                        <button
                            class="icon-btn location-btn"
                            onClick=${t0}
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
                    ${u_&&!Z&&q`
                        <button
                            class=${`icon-btn notification-btn${H0?" active":""}`}
                            onClick=${S}
                            title=${o_}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!Z&&q`
                        ${p&&l&&q`
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
                            <input type="file" accept="image/*" multiple hidden onChange=${C0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{I_()}}
                            disabled=${!I}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var Y4="piclaw_theme",S1="piclaw_tint",t2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},c8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},J4={default:{label:"Default",mode:"auto",light:t2,dark:c8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},h8=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],e2={theme:"default",tint:null},X4="light",P1=!1;function j4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function L2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let Z=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(Z)&&!/^[0-9a-fA-F]{6}$/.test(Z))return null;let J=Z.length===3?Z.split("").map((Y)=>Y+Y).join(""):Z,X=parseInt(J,16);return{r:X>>16&255,g:X>>8&255,b:X&255,hex:`#${J.toLowerCase()}`}}function p8(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let Z=document.createElement("div");if(Z.style.color="",Z.style.color=$,!Z.style.color)return null;let J=Z.style.color;try{if(document.body)Z.style.display="none",document.body.appendChild(Z),J=getComputedStyle(Z).color||Z.style.color,document.body.removeChild(Z)}catch{}let X=J.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!X)return null;let Y=parseInt(X[1],10),j=parseInt(X[2],10),G=parseInt(X[3],10);if(![Y,j,G].every((O)=>Number.isFinite(O)))return null;let N=`#${[Y,j,G].map((O)=>O.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:j,b:G,hex:N}}function K4(_){return L2(_)||p8(_)}function P2(_,$,Z){let J=Math.round(_.r+($.r-_.r)*Z),X=Math.round(_.g+($.g-_.g)*Z),Y=Math.round(_.b+($.b-_.b)*Z);return`rgb(${J} ${X} ${Y})`}function w1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function W4(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function x1(_){return J4[_]||J4.default}function i8(_){return _.mode==="auto"?W4():_.mode}function l8(_,$){let Z=x1(_);if($==="dark"&&Z.dark)return Z.dark;if($==="light"&&Z.light)return Z.light;return Z.dark||Z.light||t2}function o8(_,$,Z){let J=K4($);if(!J)return _;let X=L2(_.bgPrimary),Y=L2(_.bgSecondary),j=L2(_.bgHover),G=L2(_.borderColor);if(!X||!Y||!j||!G)return _;let O=L2(Z==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:P2(X,J,0.08),bgSecondary:P2(Y,J,0.12),bgHover:P2(j,J,0.16),borderColor:P2(G,J,0.08),accent:J.hex,accentHover:O?P2(J,O,0.18):J.hex}}function n8(_,$){if(typeof document>"u")return;let Z=document.documentElement,J=_.accent,X=K4(J),Y=X?w1(X,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,j=X?w1(X,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=X?w1(X,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",N={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":J,"--accent-hover":_.accentHover||J,"--accent-soft":j,"--accent-soft-strong":G,"--danger-color":_.danger||t2.danger,"--success-color":_.success||t2.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(N).forEach(([O,K])=>{if(K)Z.style.setProperty(O,K)})}function d8(){if(typeof document>"u")return;let _=document.documentElement;h8.forEach(($)=>_.style.removeProperty($))}function s2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function r8(_,$){if(typeof document>"u")return;let Z=s2("theme-color");if(Z&&_)Z.setAttribute("content",_);let J=s2("msapplication-TileColor");if(J&&_)J.setAttribute("content",_);let X=s2("msapplication-navbutton-color");if(X&&_)X.setAttribute("content",_);let Y=s2("apple-mobile-web-app-status-bar-style");if(Y)Y.setAttribute("content",$==="dark"?"black-translucent":"default")}function s8(){if(typeof window>"u")return;let _={...e2,mode:X4};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function I1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let Z=j4(_?.theme||"default"),J=_?.tint?String(_.tint).trim():null,X=x1(Z),Y=i8(X),j=l8(Z,Y);e2={theme:Z,tint:J},X4=Y;let G=document.documentElement;G.dataset.theme=Y,G.dataset.colorTheme=Z,G.dataset.tint=J?String(J):"",G.style.colorScheme=Y;let N=j;if(Z==="default"&&J)N=o8(j,J,Y);if(Z==="default"&&!J)d8();else n8(N,Y);if(r8(N.bgPrimary,Y),s8(),$.persist!==!1)if(f_(Y4,Z),J)f_(S1,J);else f_(S1,"")}function a2(){if(x1(e2.theme).mode!=="auto")return;I1(e2,{persist:!1})}function G4(){if(typeof window>"u")return()=>{};let _=j4(m0(Y4)||"default"),$=m0(S1),Z=$?$.trim():null;if(I1({theme:_,tint:Z},{persist:!1}),window.matchMedia&&!P1){let J=window.matchMedia("(prefers-color-scheme: dark)");if(J.addEventListener)J.addEventListener("change",a2);else if(J.addListener)J.addListener(a2);return P1=!0,()=>{if(J.removeEventListener)J.removeEventListener("change",a2);else if(J.removeListener)J.removeListener(a2);P1=!1}}return()=>{}}function N4(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let Z=_.theme??_.name??_.colorTheme,J=_.tint??null;I1({theme:Z||"default",tint:J},{persist:!0})}function V4(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return W4()}var _1=/#(\w+)/g,a8=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),t8=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),e8=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),_6={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},$6=new Set(["http:","https:","mailto:",""]);function O4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function F2(_,$={}){if(!_)return null;let Z=String(_).trim();if(!Z)return null;if(Z.startsWith("#")||Z.startsWith("/"))return Z;if(Z.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(Z))return Z;return null}if(Z.startsWith("blob:"))return Z;try{let J=new URL(Z,typeof window<"u"?window.location.origin:"http://localhost");if(!$6.has(J.protocol))return null;return J.href}catch{return null}}function B4(_,$={}){if(!_)return"";let Z=new DOMParser().parseFromString(_,"text/html"),J=[],X=Z.createTreeWalker(Z.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=X.nextNode())J.push(Y);for(let j of J){let G=j.tagName.toLowerCase();if(!t8.has(G)){let O=j.parentNode;if(!O)continue;while(j.firstChild)O.insertBefore(j.firstChild,j);O.removeChild(j);continue}let N=_6[G]||new Set;for(let O of Array.from(j.attributes)){let K=O.name.toLowerCase(),U=O.value;if(K.startsWith("on")){j.removeAttribute(O.name);continue}if(K.startsWith("data-")||K.startsWith("aria-"))continue;if(N.has(K)||e8.has(K)){if(K==="href"){let L=F2(U);if(!L)j.removeAttribute(O.name);else if(j.setAttribute(O.name,L),G==="a"&&!j.getAttribute("rel"))j.setAttribute("rel","noopener noreferrer")}else if(K==="src"){let L=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(U):U,E=F2(L,{allowDataImage:G==="img"});if(!E)j.removeAttribute(O.name);else j.setAttribute(O.name,E)}continue}j.removeAttribute(O.name)}}return Z.body.innerHTML}function q4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function $1(_,$=2){if(!_)return _;let Z=_;for(let J=0;J<$;J+=1){let X=q4(Z);if(X===Z)break;Z=X}return Z}function Z6(_){if(!_)return{text:"",blocks:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=[],Y=!1,j=[];for(let G of Z){if(!Y&&G.trim().match(/^```mermaid\s*$/i)){Y=!0,j=[];continue}if(Y&&G.trim().match(/^```\s*$/)){let N=J.length;J.push(j.join(`
`)),X.push(`@@MERMAID_BLOCK_${N}@@`),Y=!1,j=[];continue}if(Y)j.push(G);else X.push(G)}if(Y)X.push("```mermaid"),X.push(...j);return{text:X.join(`
`),blocks:J}}function J6(_){if(!_)return _;return $1(_,5)}function Y6(_){let $=new TextEncoder().encode(String(_||"")),Z="";for(let J of $)Z+=String.fromCharCode(J);return btoa(Z)}function X6(_){let $=atob(String(_||"")),Z=new Uint8Array($.length);for(let J=0;J<$.length;J+=1)Z[J]=$.charCodeAt(J);return new TextDecoder().decode(Z)}function j6(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(Z,J)=>{let X=Number(J),Y=$[X]??"",j=J6(Y);return`<div class="mermaid-container" data-mermaid="${Y6(j)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function z4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,Z)=>{if(Z.includes(`
`))return`
\`\`\`
${Z}
\`\`\`
`;return`\`${Z}\``})}function Q4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,Z)=>{let J=Z.trim(),X=J.startsWith("/"),Y=X?J.slice(1).trim():J,N=(Y.endsWith("/")?Y.slice(0,-1).trim():Y).split(/\s+/)[0]?.toLowerCase();if(!N||!a8.has(N))return $;if(N==="br")return X?"":"<br>";if(X)return`</${N}>`;return`<${N}>`})}function U4(_){if(!_)return _;let $=(Z)=>Z.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(Z,J)=>`<pre><code>${$(J)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(Z,J)=>`<code>${$(J)}</code>`)}function H4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),X;while(X=Z.nextNode()){if(!X.nodeValue)continue;let Y=J(X.nodeValue);if(Y!==X.nodeValue)X.nodeValue=Y}return $.body.innerHTML}function K6(_){if(!window.katex)return _;let $=(j)=>q4(j).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),Z=(j)=>{let G=[],N=j.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(O)=>{let K=G.length;return G.push(O),`@@CODE_BLOCK_${K}@@`});return N=N.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(O)=>{let K=G.length;return G.push(O),`@@CODE_INLINE_${K}@@`}),{html:N,blocks:G}},J=(j,G)=>{if(!G.length)return j;return j.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(N,O)=>{let K=Number(O);return G[K]??""})},X=Z(_),Y=X.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(j,G,N)=>{try{let O=katex.renderToString($(N.trim()),{displayMode:!0,throwOnError:!1});return`${G}${O}`}catch(O){return`<span class="math-error" title="${O4(O.message)}">${j}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(j,G,N)=>{if(/\s$/.test(N))return j;try{let O=katex.renderToString($(N),{displayMode:!1,throwOnError:!1});return`${G}${O}`}catch(O){return`${G}<span class="math-error" title="${O4(O.message)}">$${N}$</span>`}}),J(Y,X.blocks)}function W6(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=[],X;while(X=Z.nextNode())J.push(X);for(let Y of J){let j=Y.nodeValue;if(!j)continue;if(_1.lastIndex=0,!_1.test(j))continue;_1.lastIndex=0;let G=Y.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let N=j.split(_1);if(N.length<=1)continue;let O=$.createDocumentFragment();N.forEach((K,U)=>{if(U%2===1){let L=$.createElement("a");L.setAttribute("href","#"),L.className="hashtag",L.setAttribute("data-hashtag",K),L.textContent=`#${K}`,O.appendChild(L)}else O.appendChild($.createTextNode(K))}),Y.parentNode?.replaceChild(O,Y)}return $.body.innerHTML}function G6(_){if(!_)return _;let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=!1;for(let Y of Z){if(!X&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){X=!0,J.push("$$");continue}if(X&&Y.trim().match(/^```\s*$/)){X=!1,J.push("$$");continue}J.push(Y)}return J.join(`
`)}function E2(_,$,Z={}){if(!_)return"";let J=G6(_),{text:X,blocks:Y}=Z6(J),j=$1(X,2),N=z4(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),O=Q4(N),K=window.marked?marked.parse(O,{headerIds:!1,mangle:!1}):O.replace(/\n/g,"<br>");return K=U4(K),K=H4(K),K=K6(K),K=W6(K),K=j6(K,Y),K=B4(K,Z),K}function L4(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),Z=$1($,2),X=z4(Z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=Q4(X),j=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return j=U4(j),j=H4(j),j=B4(j),j}async function Z1(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:Z}=window.beautifulMermaid,X=V4()==="dark"?Z["tokyo-night"]:Z["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let j of Y)try{let G=j.dataset.mermaid,N=X6(G||""),O=$1(N,2),K=await $(O,{...X,transparent:!0});j.innerHTML=K,j.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let N=document.createElement("pre");N.className="mermaid-error",N.textContent=`Diagram error: ${G.message}`,j.innerHTML="",j.appendChild(N),j.removeAttribute("data-mermaid")}}var F4="PiClaw";function T1(_,$){let Z=_||"PiClaw",J=Z.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=J.charCodeAt(0)%X.length,j=X[Y],G=Z.trim().toLowerCase(),N=typeof $==="string"?$.trim():"",K=(N?N:null)||(G==="PiClaw".toLowerCase()||G==="pi"?"/static/icon-192.png":null);return{letter:J,color:j,image:K}}function E4(_,$){if(!_)return"PiClaw";let Z=$[_]?.name||_;return Z?Z.charAt(0).toUpperCase()+Z.slice(1):"PiClaw"}function D4(_,$){if(!_)return null;let Z=$[_]||{};return Z.avatar_url||Z.avatarUrl||Z.avatar||null}function C4(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,j=Y?.dataset?.colorTheme||"",G=Y?.dataset?.tint||"",N=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(N&&(G||j&&j!=="default"))return N}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],Z=String(_),J=0;for(let Y=0;Y<Z.length;Y+=1)J=(J*31+Z.charCodeAt(Y))%2147483647;let X=Math.abs(J)%$.length;return $[X]}function k4({status:_,draft:$,plan:Z,thought:J,pendingRequest:X,intent:Y,turnId:j,steerQueued:G,onPanelToggle:N}){let U=(X_)=>{if(!X_)return{text:"",totalLines:0,fullText:""};if(typeof X_==="string"){let A_=X_,L_=A_?A_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:A_,totalLines:L_,fullText:A_}}let B_=X_.text||"",z_=X_.fullText||X_.full_text||B_,H_=Number.isFinite(X_.totalLines)?X_.totalLines:z_?z_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:B_,totalLines:H_,fullText:z_}},L=160,E=(X_)=>{if(!X_)return 1;return Math.max(1,Math.ceil(X_.length/160))},b=(X_,B_,z_)=>{let H_=(X_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!H_)return{text:"",omitted:0,totalLines:Number.isFinite(z_)?z_:0,visibleLines:0};let A_=H_.split(`
`),L_=A_.length>B_?A_.slice(0,B_).join(`
`):H_,Q_=Number.isFinite(z_)?z_:A_.reduce((y_,S_)=>y_+E(S_),0),k_=L_?L_.split(`
`).reduce((y_,S_)=>y_+E(S_),0):0,w_=Math.max(Q_-k_,0);return{text:L_,omitted:w_,totalLines:Q_,visibleLines:k_}},F=U(Z),x=U(J),M=U($),H=Boolean(F.text)||F.totalLines>0,S=Boolean(x.text)||x.totalLines>0,y=Boolean(M.fullText?.trim()||M.text?.trim());if(!_&&!y&&!H&&!S&&!X&&!Y)return null;let[g,p]=R(new Set),l=(X_)=>p((B_)=>{let z_=new Set(B_),H_=!z_.has(X_);if(H_)z_.add(X_);else z_.delete(X_);if(typeof N==="function")N(X_,H_);return z_});c(()=>{p(new Set)},[j]);let Y_=_?.turn_id||j,O_=C4(Y_),__=G?"turn-dot turn-dot-queued":"turn-dot",N_=(X_)=>X_,M_=Boolean(_?.last_activity||_?.lastActivity),r=Y?.kind||"info",e=r==="warning"?"#f59e0b":r==="error"?"var(--danger-color)":r==="success"?"var(--success-color)":O_,d="",i=_?.title,$_=_?.status;if(_?.type==="plan")d=i?`Planning: ${i}`:"Planning...";else if(_?.type==="tool_call")d=i?`Running: ${i}`:"Running tool...";else if(_?.type==="tool_status")d=i?`${i}: ${$_||"Working..."}`:$_||"Working...";else if(_?.type==="error")d=i||"Agent error";else d=i||$_||"Working...";if(M_)d="Last activity just now";let W_=({panelTitle:X_,text:B_,fullText:z_,totalLines:H_,maxLines:A_,titleClass:L_,panelKey:Q_})=>{let k_=g.has(Q_),w_=z_||B_||"",y_=typeof A_==="number",S_=k_&&y_,b_=y_?b(w_,A_,H_):{text:w_||"",omitted:0,totalLines:Number.isFinite(H_)?H_:0};if(!w_&&!(Number.isFinite(b_.totalLines)&&b_.totalLines>0))return null;let O0=`agent-thinking-body${y_?" agent-thinking-body-collapsible":""}`,m_=y_?`--agent-thinking-collapsed-lines: ${A_};`:"";return q`
            <div
                class="agent-thinking"
                data-expanded=${k_?"true":"false"}
                data-collapsible=${y_?"true":"false"}
                style=${O_?`--turn-color: ${O_};`:""}
            >
                <div class="agent-thinking-title ${L_||""}">
                    ${O_&&q`<span class=${__} aria-hidden="true"></span>`}
                    ${X_}
                    ${S_&&q`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${X_} panel`}
                            onClick=${()=>l(Q_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${O0}
                    style=${m_}
                    dangerouslySetInnerHTML=${{__html:L4(w_)}}
                />
                ${!k_&&b_.omitted>0&&q`
                    <button class="agent-thinking-truncation" onClick=${()=>l(Q_)}>
                        ▸ ${b_.omitted} more lines
                    </button>
                `}
                ${k_&&b_.omitted>0&&q`
                    <button class="agent-thinking-truncation" onClick=${()=>l(Q_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},J_=X?.tool_call?.title,v_=J_?`Awaiting approval: ${J_}`:"Awaiting approval";return q`
        <div class="agent-status-panel">
            ${Y&&q`
                <div
                    class="agent-thinking agent-thinking-intent"
                    aria-live="polite"
                    style=${e?`--turn-color: ${e};`:""}
                    title=${Y?.detail||""}
                >
                    <div class="agent-thinking-title intent">
                        ${e&&q`<span class=${__} aria-hidden="true"></span>`}
                        ${Y.title}
                    </div>
                    ${Y.detail&&q`<div class="agent-thinking-body">${Y.detail}</div>`}
                </div>
            `}
            ${X&&q`
                <div class="agent-status agent-status-request" aria-live="polite" style=${O_?`--turn-color: ${O_};`:""}>
                    <span class=${__} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${v_}</span>
                </div>
            `}
            ${H&&W_({panelTitle:N_("Planning"),text:F.text,fullText:F.fullText,totalLines:F.totalLines,panelKey:"plan"})}
            ${S&&W_({panelTitle:N_("Thoughts"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${y&&W_({panelTitle:N_("Draft"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&q`
                <div class=${`agent-status${M_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${O_?`--turn-color: ${O_};`:""}>
                    ${O_&&q`<span class=${__} aria-hidden="true"></span>`}
                    ${_?.type==="error"?q`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!M_&&q`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${d}</span>
                </div>
            `}
        </div>
    `}function y4({request:_,onRespond:$}){if(!_)return null;let{request_id:Z,tool_call:J,options:X}=_,Y=J?.title||"Agent Request",j=J?.kind||"other",G=J?.rawInput||{},N=G.command||G.commands&&G.commands[0]||null,O=G.diff||null,K=G.fileName||G.path||null,U=J?.description||G.description||G.explanation||null,E=(Array.isArray(J?.locations)?J.locations:[]).map((H)=>H?.path).filter((H)=>Boolean(H)),b=Array.from(new Set([K,...E].filter(Boolean)));console.log("AgentRequestModal:",{request_id:Z,tool_call:J,options:X});let F=async(H)=>{try{await y1(Z,H),$()}catch(S){console.error("Failed to respond to agent request:",S)}},x=async()=>{try{await h3(Y,`Auto-approved: ${Y}`),await y1(Z,"approved"),$()}catch(H){console.error("Failed to add to whitelist:",H)}},M=X&&X.length>0;return q`
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
                ${(U||N||O||b.length>0)&&q`
                    <div class="agent-request-body">
                        ${U&&q`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${b.length>0&&q`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${b.map((H,S)=>q`<li key=${S}>${H}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${N&&q`
                            <pre class="agent-request-command">${N}</pre>
                        `}
                        ${O&&q`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${O}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?X.map((H)=>q`
                            <button 
                                key=${H.optionId||H.id||String(H)}
                                class="agent-request-btn ${H.kind==="allow_once"||H.kind==="allow_always"?"primary":""}"
                                onClick=${()=>F(H.optionId||H.id||H)}
                            >
                                ${H.name||H.label||H.optionId||H.id||String(H)}
                            </button>
                        `):q`
                        <button class="agent-request-btn primary" onClick=${()=>F("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>F("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${x}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function A4({status:_}){if(_==="connected")return null;return q`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function b4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let J=new Date-$,X=J/1000,Y=86400000;if(J<Y){if(X<60)return"just now";if(X<3600)return`${Math.floor(X/60)}m`;return`${Math.floor(X/3600)}h`}if(J<5*Y){let N=$.toLocaleDateString(void 0,{weekday:"short"}),O=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${N} ${O}`}let j=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${j} ${G}`}function w2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function y0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function D2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var N6=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]);function S2(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(N6.has($)||$.startsWith("text/"))return"text";return"unsupported"}function M4(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function V6(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?y0($):null},{label:"Added",value:_?.created_at?D2(_.created_at):null}].filter((J)=>J.value)}function P4({mediaId:_,info:$,onClose:Z}){let J=$?.filename||`attachment-${_}`,X=V0(()=>S2($?.content_type),[$?.content_type]),Y=M4(X),[j,G]=R(X==="text"||X==="pdf"),[N,O]=R(""),[K,U]=R(null),[L,E]=R(null),b=V0(()=>V6($),[$]);return c(()=>{let F=(x)=>{if(x.key==="Escape")Z()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[Z]),c(()=>{let F=!1,x=null;async function M(){if(X==="text"){G(!0),E(null);try{let H=await o3(_);if(!F)O(H)}catch{if(!F)E("Failed to load text preview.")}finally{if(!F)G(!1)}return}if(X==="pdf"){G(!0),E(null);try{let H=await n3(_);if(x=URL.createObjectURL(H),!F)U(x)}catch{if(!F)E("Failed to load PDF preview.")}finally{if(!F)G(!1)}return}G(!1)}return M(),()=>{if(F=!0,x)URL.revokeObjectURL(x)}},[_,X]),q`
        <div class="image-modal attachment-preview-modal" onClick=${Z}>
            <div class="attachment-preview-shell" onClick=${(F)=>{F.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${J}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${u0(_)}
                            download=${J}
                            class="attachment-preview-download"
                            onClick=${(F)=>F.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${Z}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${j&&q`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!j&&L&&q`<div class="attachment-preview-state">${L}</div>`}
                    ${!j&&!L&&X==="image"&&q`
                        <img class="attachment-preview-image" src=${u0(_)} alt=${J} />
                    `}
                    ${!j&&!L&&X==="pdf"&&K&&q`
                        <iframe class="attachment-preview-frame" src=${K} title=${J}></iframe>
                    `}
                    ${!j&&!L&&X==="text"&&q`
                        <pre class="attachment-preview-text">${N}</pre>
                    `}
                    ${!j&&!L&&X==="unsupported"&&q`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${b.map((F)=>q`
                        <div class="attachment-preview-meta-item" key=${F.label}>
                            <span class="attachment-preview-meta-label">${F.label}</span>
                            <span class="attachment-preview-meta-value">${F.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function w4({src:_,onClose:$}){return c(()=>{let Z=(J)=>{if(J.key==="Escape")$()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[$]),q`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function O6({mediaId:_,onPreview:$}){let[Z,J]=R(null);if(c(()=>{M2(_).then(J).catch(()=>{})},[_]),!Z)return null;let X=Z.filename||"file",Y=Z.metadata?.size,j=Y?y0(Y):"",N=S2(Z.content_type)==="unsupported"?"Details":"Preview";return q`
        <div class="file-attachment" onClick=${(O)=>O.stopPropagation()}>
            <a href=${u0(_)} download=${X} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${X}</span>
                    <span class="file-meta-row">
                        ${j&&q`<span class="file-size">${j}</span>`}
                        ${Z.content_type&&q`<span class="file-size">${Z.content_type}</span>`}
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
                onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:_,info:Z})}}
            >
                ${N}
            </button>
        </div>
    `}function B6({attachment:_,onPreview:$}){let Z=Number(_?.id),[J,X]=R(null);c(()=>{if(!Number.isFinite(Z))return;M2(Z).then(X).catch(()=>{});return},[Z]);let Y=J?.filename||_.label||`attachment-${_.id}`,j=Number.isFinite(Z)?u0(Z):null,N=S2(J?.content_type)==="unsupported"?"Details":"Preview";return q`
        <span class="attachment-pill" title=${Y}>
            ${j?q`
                    <a href=${j} download=${Y} class="attachment-pill-main" onClick=${(O)=>O.stopPropagation()}>
                        <${d0}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:q`
                    <${d0}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(Z)&&J&&q`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${N}
                    onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:Z,info:J})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function J1({annotations:_}){if(!_)return null;let{audience:$,priority:Z,lastModified:J}=_,X=J?D2(J):null;return q`
        <div class="content-annotations">
            ${$&&$.length>0&&q`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof Z==="number"&&q`
                <span class="content-annotation">Priority: ${Z}</span>
            `}
            ${X&&q`
                <span class="content-annotation">Updated: ${X}</span>
            `}
        </div>
    `}function q6({block:_}){let $=_.title||_.name||_.uri,Z=_.description,J=_.size?y0(_.size):"",X=_.mime_type||"",Y=Q6(X),j=F2(_.uri);return q`
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
                ${Z&&q`<div class="resource-link-description">${Z}</div>`}
                <div class="resource-link-meta">
                    ${X&&q`<span>${X}</span>`}
                    ${J&&q`<span>${J}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function z6({block:_}){let[$,Z]=R(!1),J=_.uri||"Embedded resource",X=_.text||"",Y=Boolean(_.data),j=_.mime_type||"";return q`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),Z(!$)}}>
                ${$?"▼":"▶"} ${J}
            </button>
            ${$&&q`
                ${X&&q`<pre class="resource-embed-content">${X}</pre>`}
                ${Y&&q`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${j&&q`<span class="resource-embed-blob-meta">${j}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let N=new Blob([Uint8Array.from(atob(_.data),(U)=>U.charCodeAt(0))],{type:j||"application/octet-stream"}),O=URL.createObjectURL(N),K=document.createElement("a");K.href=O,K.download=J.split("/").pop()||"resource",K.click(),URL.revokeObjectURL(O)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function Q6(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function U6({preview:_}){let $=F2(_.url),Z=F2(_.image,{allowDataImage:!0}),J=Z?`background-image: url('${Z}')`:"",X=_.site_name;if(!X&&$)try{X=new URL($).hostname}catch{X=$}return q`
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
                ${_.description&&q`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function H6(_,$){return typeof _==="string"?_:""}var L6=1800,F6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,E6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,D6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function C6(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let Z=document.createElement("textarea");Z.value=$,Z.setAttribute("readonly",""),Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none",document.body.appendChild(Z),Z.select(),Z.setSelectionRange(0,Z.value.length);let J=document.execCommand("copy");return document.body.removeChild(Z),J}catch{return!1}}function k6(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let Z=new Map,J=[],X=(Y,j)=>{let G=j||"idle";if(Y.dataset.copyState=G,G==="success")Y.innerHTML=E6,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(G==="error")Y.innerHTML=D6,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=F6,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let j=document.createElement("div");j.className="post-code-block",Y.parentNode?.insertBefore(j,Y),j.appendChild(Y);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",X(G,"idle"),j.appendChild(G);let N=async(O)=>{O.preventDefault(),O.stopPropagation();let U=Y.querySelector("code")?.textContent||"",L=await C6(U);X(G,L?"success":"error");let E=Z.get(G);if(E)clearTimeout(E);let b=setTimeout(()=>{X(G,"idle"),Z.delete(G)},L6);Z.set(G,b)};G.addEventListener("click",N),J.push(()=>{G.removeEventListener("click",N);let O=Z.get(G);if(O)clearTimeout(O);if(j.parentNode)j.parentNode.insertBefore(Y,j),j.remove()})}),()=>{J.forEach((Y)=>Y())}}function y6(_){if(!_)return{content:_,fileRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Files:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,fileRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O))X.push(O.replace(/^\s*-\s+/,"").trim());else if(!O.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let j=Z.slice(0,J),G=Z.slice(Y),N=[...j,...G].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,fileRefs:X}}function A6(_){if(!_)return{content:_,messageRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Referenced messages:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,messageRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let U=O.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(U)X.push(U[1])}else if(!O.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let j=Z.slice(0,J),G=Z.slice(Y),N=[...j,...G].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,messageRefs:X}}function b6(_){if(!_)return{content:_,attachments:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Images:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,attachments:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let K=O.replace(/^\s*-\s+/,"").trim(),U=K.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||K.match(/^attachment:([^\s]+)\s+(.+)$/i);if(U){let L=U[1],E=(U[2]||"").trim()||L;X.push({id:L,label:E,raw:K})}else X.push({id:null,label:K,raw:K})}else if(!O.trim())break;else break}if(X.length===0)return{content:_,attachments:[]};let j=Z.slice(0,J),G=Z.slice(Y),N=[...j,...G].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,attachments:X}}function M6(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function P6(_,$){if(!_||!$)return _;let Z=String($).trim().split(/\s+/).filter(Boolean);if(Z.length===0)return _;let J=Z.map(M6).sort((K,U)=>U.length-K.length),X=new RegExp(`(${J.join("|")})`,"gi"),Y=new RegExp(`^(${J.join("|")})$`,"i"),j=new DOMParser().parseFromString(_,"text/html"),G=j.createTreeWalker(j.body,NodeFilter.SHOW_TEXT),N=[],O;while(O=G.nextNode())N.push(O);for(let K of N){let U=K.nodeValue;if(!U||!X.test(U)){X.lastIndex=0;continue}X.lastIndex=0;let L=K.parentElement;if(L&&L.closest("code, pre, script, style"))continue;let E=U.split(X).filter((F)=>F!=="");if(E.length===0)continue;let b=j.createDocumentFragment();for(let F of E)if(Y.test(F)){let x=j.createElement("mark");x.className="search-highlight-term",x.textContent=F,b.appendChild(x)}else b.appendChild(j.createTextNode(F));K.parentNode.replaceChild(b,K)}return j.body.innerHTML}function S4({post:_,onClick:$,onHashtagClick:Z,onMessageRef:J,onScrollToMessage:X,agentName:Y,agentAvatarUrl:j,userName:G,userAvatarUrl:N,userAvatarBackground:O,onDelete:K,isThreadReply:U,isThreadPrev:L,isThreadNext:E,isRemoving:b,highlightQuery:F,onFileRef:x}){let[M,H]=R(null),S=D(null),y=_.data,g=y.type==="agent_response",p=G||"You",l=g?Y||F4:p,Y_=g?T1(Y,j):T1(p,N),O_=typeof O==="string"?O.trim().toLowerCase():"",__=!g&&Y_.image&&(O_==="clear"||O_==="transparent"),N_=g&&Boolean(Y_.image),M_=`background-color: ${__||N_?"transparent":Y_.color}`,r=y.content_meta,e=Boolean(r?.truncated),d=Boolean(r?.preview),i=e&&!d,$_=e?{originalLength:Number.isFinite(r?.original_length)?r.original_length:y.content?y.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,W_=H6(y.content,y.link_previews),{content:J_,fileRefs:v_}=y6(W_),{content:X_,messageRefs:B_}=A6(J_),{content:z_,attachments:H_}=b6(X_);W_=z_;let A_=Boolean(W_)&&!i,L_=typeof F==="string"?F.trim():"",Q_=V0(()=>{if(!W_)return"";let I=E2(W_,Z);return L_?P6(I,L_):I},[W_,L_]),k_=(I,Z_)=>{I.stopPropagation(),H(u0(Z_))},[w_,y_]=R(null),S_=(I)=>{y_(I)},b_=(I)=>{I.stopPropagation(),K?.(_)},O0=(I,Z_)=>{let E_=new Set;if(!I||Z_.length===0)return{content:I,usedIds:E_};return{content:I.replace(/attachment:([^\s)"']+)/g,(q0,u_,H0,o_)=>{let n_=u_.replace(/^\/+/,""),L0=Z_.find((X0)=>X0.name&&X0.name.toLowerCase()===n_.toLowerCase()&&!E_.has(X0.id))||Z_.find((X0)=>!E_.has(X0.id));if(!L0)return q0;if(E_.add(L0.id),o_.slice(Math.max(0,H0-2),H0)==="](")return`/media/${L0.id}`;return L0.name||"attachment"}),usedIds:E_}},m_=[],x_=[],K_=[],Q0=[],Z0=[],A0=[],J0=y.content_blocks||[],F0=y.media_ids||[],F_=0;if(J0.length>0)J0.forEach((I)=>{if(I?.type==="text"&&I.annotations)A0.push(I.annotations);if(I?.type==="resource_link")Q0.push(I);else if(I?.type==="resource")Z0.push(I);else if(I?.type==="file"){let Z_=F0[F_++];if(Z_)x_.push(Z_),K_.push({id:Z_,name:I?.name||I?.filename||I?.title})}else if(I?.type==="image"||!I?.type){let Z_=F0[F_++];if(Z_){let E_=typeof I?.mime_type==="string"?I.mime_type:void 0;m_.push({id:Z_,annotations:I?.annotations,mimeType:E_}),K_.push({id:Z_,name:I?.name||I?.filename||I?.title})}}});else if(F0.length>0)F0.forEach((I)=>{m_.push({id:I,annotations:null}),K_.push({id:I,name:null})});if(H_.length>0)H_.forEach((I)=>{if(!I?.id)return;let Z_=K_.find((E_)=>String(E_.id)===String(I.id));if(Z_&&!Z_.name)Z_.name=I.label});let{content:U0,usedIds:b0}=O0(W_,K_);W_=U0;let a_=m_.filter(({id:I})=>!b0.has(I)),Y0=x_.filter((I)=>!b0.has(I)),c_=H_.length>0?H_.map((I,Z_)=>({id:I.id||`attachment-${Z_+1}`,label:I.label||`attachment-${Z_+1}`})):K_.map((I,Z_)=>({id:I.id,label:I.name||`attachment-${Z_+1}`}));return c(()=>{if(!S.current)return;return Z1(S.current),k6(S.current)},[Q_]),q`
        <div id=${`post-${_.id}`} class="post ${g?"agent-post":""} ${U?"thread-reply":""} ${L?"thread-prev":""} ${E?"thread-next":""} ${b?"removing":""}" onClick=${$}>
            <div class="post-avatar ${g?"agent-avatar":""} ${Y_.image?"has-image":""}" style=${M_}>
                ${Y_.image?q`<img src=${Y_.image} alt=${l} />`:Y_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${b_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${l}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(I)=>{if(I.preventDefault(),I.stopPropagation(),J)J(_.id)}}>${b4(_.timestamp)}</a>
                </div>
                ${i&&$_&&q`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${w2($_.originalLength)} chars
                            ${$_.maxLength?q` • Display limit: ${w2($_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${d&&$_&&q`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${w2($_.maxLength)} of ${w2($_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(v_.length>0||B_.length>0||c_.length>0)&&q`
                    <div class="post-file-refs">
                        ${B_.map((I)=>{let Z_=(E_)=>{if(E_.preventDefault(),E_.stopPropagation(),X)X(I);else{let B0=document.getElementById("post-"+I);if(B0)B0.scrollIntoView({behavior:"smooth",block:"center"}),B0.classList.add("post-highlight"),setTimeout(()=>B0.classList.remove("post-highlight"),2000)}};return q`
                                <a href=${`#msg-${I}`} class="post-msg-pill-link" onClick=${Z_}>
                                    <${d0}
                                        prefix="post"
                                        label=${"msg:"+I}
                                        title=${"Message "+I}
                                        icon="message"
                                        onClick=${Z_}
                                    />
                                </a>
                            `})}
                        ${v_.map((I)=>{let Z_=I.split("/").pop()||I;return q`
                                <${d0}
                                    prefix="post"
                                    label=${Z_}
                                    title=${I}
                                    onClick=${()=>x?.(I)}
                                />
                            `})}
                        ${c_.map((I)=>q`
                            <${B6}
                                key=${I.id}
                                attachment=${I}
                                onPreview=${S_}
                            />
                        `)}
                    </div>
                `}
                ${A_&&q`
                    <div 
                        ref=${S}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:Q_}}
                        onClick=${(I)=>{if(I.target.classList.contains("hashtag")){I.preventDefault(),I.stopPropagation();let Z_=I.target.dataset.hashtag;if(Z_)Z?.(Z_)}else if(I.target.tagName==="IMG")I.preventDefault(),I.stopPropagation(),H(I.target.src)}}
                    />
                `}
                ${A0.length>0&&q`
                    ${A0.map((I,Z_)=>q`
                        <${J1} key=${Z_} annotations=${I} />
                    `)}
                `}
                ${a_.length>0&&q`
                    <div class="media-preview">
                        ${a_.map(({id:I,mimeType:Z_})=>{let B0=typeof Z_==="string"&&Z_.toLowerCase().startsWith("image/svg")?u0(I):l3(I);return q`
                                <img 
                                    key=${I} 
                                    src=${B0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(q0)=>k_(q0,I)}
                                />
                            `})}
                    </div>
                `}
                ${a_.length>0&&q`
                    ${a_.map(({annotations:I},Z_)=>q`
                        ${I&&q`<${J1} key=${Z_} annotations=${I} />`}
                    `)}
                `}
                ${Y0.length>0&&q`
                    <div class="file-attachments">
                        ${Y0.map((I)=>q`
                            <${O6} key=${I} mediaId=${I} onPreview=${S_} />
                        `)}
                    </div>
                `}
                ${Q0.length>0&&q`
                    <div class="resource-links">
                        ${Q0.map((I,Z_)=>q`
                            <div key=${Z_}>
                                <${q6} block=${I} />
                                <${J1} annotations=${I.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Z0.length>0&&q`
                    <div class="resource-embeds">
                        ${Z0.map((I,Z_)=>q`
                            <div key=${Z_}>
                                <${z6} block=${I} />
                                <${J1} annotations=${I.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y.link_previews?.length>0&&q`
                    <div class="link-previews">
                        ${y.link_previews.map((I,Z_)=>q`
                            <${U6} key=${Z_} preview=${I} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${M&&q`<${w4} src=${M} onClose=${()=>H(null)} />`}
        ${w_&&q`
            <${P4}
                mediaId=${w_.mediaId}
                info=${w_.info}
                onClose=${()=>y_(null)}
            />
        `}
    `}function x4({posts:_,hasMore:$,onLoadMore:Z,onPostClick:J,onHashtagClick:X,onMessageRef:Y,onScrollToMessage:j,onFileRef:G,emptyMessage:N,timelineRef:O,agents:K,user:U,onDeletePost:L,reverse:E=!0,removingPostIds:b,searchQuery:F}){let[x,M]=R(!1),H=D(null),S=typeof IntersectionObserver<"u",y=w(async()=>{if(!Z||!$||x)return;M(!0);try{await Z({preserveScroll:!0,preserveMode:"top"})}finally{M(!1)}},[$,x,Z]),g=w((r)=>{let{scrollTop:e,scrollHeight:d,clientHeight:i}=r.target,$_=E?d-i-e:e,W_=Math.max(300,i);if($_<W_)y()},[E,y]);c(()=>{if(!S)return;let r=H.current,e=O?.current;if(!r||!e)return;let d=300,i=new IntersectionObserver(($_)=>{for(let W_ of $_){if(!W_.isIntersecting)continue;y()}},{root:e,rootMargin:`${d}px 0px ${d}px 0px`,threshold:0});return i.observe(r),()=>i.disconnect()},[S,$,Z,O,y]);let p=D(y);if(p.current=y,c(()=>{if(S)return;if(!O?.current)return;let{scrollTop:r,scrollHeight:e,clientHeight:d}=O.current,i=E?e-d-r:r,$_=Math.max(300,d);if(i<$_)p.current?.()},[S,_,$,E,O]),c(()=>{if(!O?.current)return;if(!$||x)return;let{scrollTop:r,scrollHeight:e,clientHeight:d}=O.current,i=E?e-d-r:r,$_=Math.max(300,d);if(e<=d+1||i<$_)p.current?.()},[_,$,x,E,O]),!_)return q`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return q`
            <div class="timeline" ref=${O}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${N||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let l=_.slice().sort((r,e)=>r.id-e.id),Y_=(r)=>{let e=r?.data?.thread_id;if(e===null||e===void 0||e==="")return null;let d=Number(e);return Number.isFinite(d)?d:null},O_=new Map;for(let r=0;r<l.length;r+=1){let e=l[r],d=Number(e?.id),i=Y_(e);if(i!==null){let $_=O_.get(i)||{anchorIndex:-1,replyIndexes:[]};$_.replyIndexes.push(r),O_.set(i,$_)}else if(Number.isFinite(d)){let $_=O_.get(d)||{anchorIndex:-1,replyIndexes:[]};$_.anchorIndex=r,O_.set(d,$_)}}let __=new Map;for(let[r,e]of O_.entries()){let d=new Set;if(e.anchorIndex>=0)d.add(e.anchorIndex);for(let i of e.replyIndexes)d.add(i);__.set(r,Array.from(d).sort((i,$_)=>i-$_))}let N_=l.map((r,e)=>{let d=Y_(r);if(d===null)return{hasThreadPrev:!1,hasThreadNext:!1};let i=__.get(d);if(!i||i.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=i.indexOf(e);if($_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:$_>0,hasThreadNext:$_<i.length-1}}),M_=q`<div class="timeline-sentinel" ref=${H}></div>`;return q`
        <div class="timeline ${E?"reverse":"normal"}" ref=${O} onScroll=${g}>
            <div class="timeline-content">
                ${E?M_:null}
                ${l.map((r,e)=>{let d=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),i=b?.has?.(r.id),$_=N_[e]||{};return q`
                    <${S4}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${d}
                        isThreadPrev=${$_.hasThreadPrev}
                        isThreadNext=${$_.hasThreadNext}
                        isRemoving=${i}
                        highlightQuery=${F}
                        agentName=${E4(r.data?.agent_id,K||{})}
                        agentAvatarUrl=${D4(r.data?.agent_id,K||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>J?.(r)}
                        onHashtagClick=${X}
                        onMessageRef=${Y}
                        onScrollToMessage=${j}
                        onFileRef=${G}
                        onDelete=${L}
                    />
                `})}
                ${E?null:M_}
            </div>
        </div>
    `}class I4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,Z=-1/0;for(let J of this.extensions.values()){if(J.placement!=="tabs")continue;if(!J.canHandle)continue;try{let X=J.canHandle(_);if(X===!1||X===0)continue;let Y=X===!0?0:typeof X==="number"?X:0;if(Y>Z)Z=Y,$=J}catch(X){console.warn(`[PaneRegistry] canHandle() error for "${J.id}":`,X)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var l_=new I4;var Y1=null,f1=null;function T4(){if(f1)return Promise.resolve(f1);if(!Y1)Y1=import("/static/dist/editor.bundle.js").then((_)=>{return f1=_,_}).catch((_)=>{throw Y1=null,_});return Y1}class f4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await T4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var v1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new f4(_,$)}};function R1(){T4().catch(()=>{})}class v4{container;disposed=!1;termEl;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0");let Z=document.createElement("div");Z.className="terminal-pane-header";let J=document.createElement("span");J.className="terminal-pane-title",J.textContent="Terminal";let X=document.createElement("span");X.className="terminal-pane-status",X.textContent="Not connected",Z.append(J,X);let Y=document.createElement("div");Y.className="terminal-pane-body",Y.innerHTML='<div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>',this.termEl.append(Z,Y),_.appendChild(this.termEl)}getContent(){return}isDirty(){return!1}focus(){this.termEl?.focus()}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.termEl?.remove()}}var g1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new v4(_,$)}};function Z2(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function w6(_,$){let Z=String(_||"").trim();if(!Z)return Z;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(Z)||Z.startsWith("#")||Z.startsWith("data:")||Z.startsWith("blob:"))return Z;let J=Z.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),X=J?.[1]||Z,Y=J?.[2]||"",j=J?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),O=X.startsWith("/")?X:`${G?`${G}/`:""}${X}`,K=[];for(let L of O.split("/")){if(!L||L===".")continue;if(L===".."){if(K.length>0)K.pop();continue}K.push(L)}let U=K.join("/");return`${b1(U)}${Y}${j}`}function x2(_){return _?.preview||null}function S6(_){let $=String(_||""),Z=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),J=Z>=0?$.slice(Z+1):$,X=J.lastIndexOf(".");if(X<=0||X===J.length-1)return"none";return J.slice(X+1)}function x6(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function I6(_,$){let Z=$?.path||_?.path||"",J=[];if($?.content_type)J.push(`<span><strong>type:</strong> ${Z2($.content_type)}</span>`);if(typeof $?.size==="number")J.push(`<span><strong>size:</strong> ${Z2(y0($.size))}</span>`);if($?.mtime)J.push(`<span><strong>modified:</strong> ${Z2(D2($.mtime))}</span>`);if(J.push(`<span><strong>kind:</strong> ${Z2(x6($))}</span>`),J.push(`<span><strong>extension:</strong> ${Z2(S6(Z))}</span>`),Z)J.push(`<span><strong>path:</strong> ${Z2(Z)}</span>`);if($?.truncated)J.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${J.join("")}</div>`}function T6(_){let $=x2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let Z=I6(_,$);if($.kind==="image"){let J=$.url||($.path?b1($.path):"");return`${Z}
            <div class="workspace-preview-image">
                <img src="${Z2(J)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let J=E2($.text||"",null,{rewriteImageSrc:(X)=>w6(X,$.path||_?.path)});return`${Z}<div class="workspace-preview-text">${J}</div>`}return`${Z}<pre class="workspace-preview-text"><code>${Z2($.text||"")}</code></pre>`}if($.kind==="binary")return`${Z}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${Z}<div class="workspace-preview-text">No preview available.</div>`}class u1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=T6(this.context)}getContent(){let _=x2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let Z=x2(this.context);if(Z&&Z.kind==="text"){if(Z.text=_,$!==void 0)Z.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var m1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=x2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new u1(_,$)}},c1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return x2(_)||_?.path?1:!1},mount(_,$){return new u1(_,$)}};class R4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let Z of this.listeners)try{Z(_,$)}catch{}}open(_,$){let Z=this.tabs.get(_);if(!Z)Z={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,Z);return this.activate(_),Z}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,Z]of this.tabs)if($!==_&&!Z.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((J)=>J!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let Z=this.tabs.get(_);if(!Z||Z.dirty===$)return;Z.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let Z=this.tabs.get(_);if(Z)Z.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,Z){let J=this.tabs.get(_);if(!J)return;if(this.tabs.delete(_),J.id=$,J.path=$,J.label=Z||$.split("/").pop()||$,this.tabs.set($,J),this.mruOrder=this.mruOrder.map((X)=>X===_?$:X),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($+1)%_.length];this.activate(Z.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($-1+_.length)%_.length];this.activate(Z.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var C_=new R4;var X1="workspaceExplorerScale",f6=["compact","default","comfortable"],v6=new Set(f6),R6={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function g4(_,$="default"){if(typeof _!=="string")return $;let Z=_.trim().toLowerCase();return v6.has(Z)?Z:$}function h1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),Z=Boolean(window.matchMedia?.("(hover: none)")?.matches),J=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||J&&Z}}function g6(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function u6(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function p1(_={}){let $=g6(_),Z=_.stored?g4(_.stored,$):$;return u6(Z,_)}function u4(_){return R6[g4(_)]}var m6=60000,p4=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function i4(_,$,Z,J=0,X=[]){if(!Z&&p4(_))return X;if(!_)return X;if(X.push({node:_,depth:J}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)i4(Y,$,Z,J+1,X);return X}function m4(_,$,Z){if(!_)return"";let J=[],X=(Y)=>{if(!Z&&p4(Y))return;if(J.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let j of Y.children)X(j)};return X(_),J.join("|")}function n1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let Z=Array.isArray(_.children)?_.children:null,J=Array.isArray($.children)?$.children:null;if(!J)return _;let X=Z?new Map(Z.map((G)=>[G?.path,G])):new Map,Y=!Z||Z.length!==J.length,j=J.map((G)=>{let N=n1(X.get(G.path),G);if(N!==X.get(G.path))Y=!0;return N});return Y?{...$,children:j}:_}function l1(_,$,Z){if(!_)return _;if(_.path===$)return n1(_,Z);if(!Array.isArray(_.children))return _;let J=!1,X=_.children.map((Y)=>{let j=l1(Y,$,Z);if(j!==Y)J=!0;return j});return J?{..._,children:X}:_}var l4=4,i1=14,c6=8,h6=16;function o4(_){if(!_)return 0;if(_.type==="file"){let J=Math.max(0,Number(_.size)||0);return _.__bytes=J,J}let $=Array.isArray(_.children)?_.children:[],Z=0;for(let J of $)Z+=o4(J);return _.__bytes=Z,Z}function n4(_,$=0){let Z=Math.max(0,Number(_?.__bytes??_?.size??0)),J={name:_?.name||_?.path||".",path:_?.path||".",size:Z,children:[]};if(!_||_.type!=="dir"||$>=l4)return J;let X=Array.isArray(_.children)?_.children:[],Y=[];for(let G of X){let N=Math.max(0,Number(G?.__bytes??G?.size??0));if(N<=0)continue;if(G.type==="dir")Y.push({kind:"dir",node:G,size:N});else Y.push({kind:"file",name:G.name,path:G.path,size:N})}Y.sort((G,N)=>N.size-G.size);let j=Y;if(Y.length>i1){let G=Y.slice(0,i1-1),N=Y.slice(i1-1),O=N.reduce((K,U)=>K+U.size,0);G.push({kind:"other",name:`+${N.length} more`,path:`${J.path}/[other]`,size:O}),j=G}return J.children=j.map((G)=>{if(G.kind==="dir")return n4(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),J}function c4(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,Z=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function d4(_,$,Z){let J=((_+Math.PI/2)*180/Math.PI+360)%360,X=Z?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=Z?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${J.toFixed(1)} ${X}% ${Y}%)`}function j1(_,$,Z,J){return{x:_+Z*Math.cos(J),y:$+Z*Math.sin(J)}}function d1(_,$,Z,J,X,Y){let j=Math.PI*2-0.0001,G=Y-X>j?X+j:Y,N=j1(_,$,J,X),O=j1(_,$,J,G),K=j1(_,$,Z,G),U=j1(_,$,Z,X),L=G-X>Math.PI?1:0;return[`M ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${J} ${J} 0 ${L} 1 ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`L ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${L} 0 ${U.x.toFixed(3)} ${U.y.toFixed(3)}`,"Z"].join(" ")}var r4={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function s4(_,$,Z){let J=[],X=[],Y=Math.max(0,Number($)||0),j=(G,N,O,K)=>{let U=Array.isArray(G?.children)?G.children:[];if(!U.length)return;let L=Math.max(0,Number(G.size)||0);if(L<=0)return;let E=O-N,b=N;U.forEach((F,x)=>{let M=Math.max(0,Number(F.size)||0);if(M<=0)return;let H=M/L,S=b,y=x===U.length-1?O:b+E*H;if(b=y,y-S<0.003)return;let g=r4[K];if(g){let p=d4(S,K,Z);if(J.push({key:F.path,path:F.path,label:F.name,size:M,color:p,depth:K,startAngle:S,endAngle:y,innerRadius:g[0],outerRadius:g[1],d:d1(120,120,g[0],g[1],S,y)}),K===1)X.push({key:F.path,name:F.name,size:M,pct:Y>0?M/Y*100:0,color:p})}if(K<l4)j(F,S,y,K+1)})};return j(_,-Math.PI/2,Math.PI*3/2,1),{segments:J,legend:X}}function o1(_,$){if(!_||!$)return null;if(_.path===$)return _;let Z=Array.isArray(_.children)?_.children:[];for(let J of Z){let X=o1(J,$);if(X)return X}return null}function a4(_,$,Z,J){if(!Z||Z<=0)return{segments:[],legend:[]};let X=r4[1];if(!X)return{segments:[],legend:[]};let Y=-Math.PI/2,j=Math.PI*3/2,G=d4(Y,1,J),O=`${$||"."}/[files]`;return{segments:[{key:O,path:O,label:_,size:Z,color:G,depth:1,startAngle:Y,endAngle:j,innerRadius:X[0],outerRadius:X[1],d:d1(120,120,X[0],X[1],Y,j)}],legend:[{key:O,name:_,size:Z,pct:100,color:G}]}}function h4(_,$=!1,Z=!1){if(!_)return null;let J=o4(_),X=n4(_,0),Y=X.size||J,{segments:j,legend:G}=s4(X,Y,Z);if(!j.length&&Y>0){let N=a4("[files]",X.path,Y,Z);j=N.segments,G=N.legend}return{root:X,totalSize:Y,segments:j,legend:G,truncated:$,isDarkTheme:Z}}function p6({payload:_}){if(!_)return null;let[$,Z]=R(null),[J,X]=R(_?.root?.path||"."),[Y,j]=R(()=>[_?.root?.path||"."]),[G,N]=R(!1);c(()=>{let __=_?.root?.path||".";X(__),j([__]),Z(null)},[_?.root?.path,_?.totalSize]),c(()=>{if(!J)return;N(!0);let __=setTimeout(()=>N(!1),180);return()=>clearTimeout(__)},[J]);let O=V0(()=>{return o1(_.root,J)||_.root},[_?.root,J]),K=O?.size||_.totalSize||0,{segments:U,legend:L}=V0(()=>{let __=s4(O,K,_.isDarkTheme);if(__.segments.length>0)return __;if(K<=0)return __;let N_=O?.children?.length?"Total":"[files]";return a4(N_,O?.path||_?.root?.path||".",K,_.isDarkTheme)},[O,K,_.isDarkTheme,_?.root?.path]),[E,b]=R(U),F=D(new Map),x=D(0);c(()=>{let __=F.current,N_=new Map(U.map((d)=>[d.key,d])),M_=performance.now(),r=220,e=(d)=>{let i=Math.min(1,(d-M_)/220),$_=i*(2-i),W_=U.map((J_)=>{let X_=__.get(J_.key)||{startAngle:J_.startAngle,endAngle:J_.startAngle,innerRadius:J_.innerRadius,outerRadius:J_.innerRadius},B_=(Q_,k_)=>Q_+(k_-Q_)*$_,z_=B_(X_.startAngle,J_.startAngle),H_=B_(X_.endAngle,J_.endAngle),A_=B_(X_.innerRadius,J_.innerRadius),L_=B_(X_.outerRadius,J_.outerRadius);return{...J_,d:d1(120,120,A_,L_,z_,H_)}});if(b(W_),i<1)x.current=requestAnimationFrame(e)};if(x.current)cancelAnimationFrame(x.current);return x.current=requestAnimationFrame(e),F.current=N_,()=>{if(x.current)cancelAnimationFrame(x.current)}},[U]);let M=E.length?E:U,H=K>0?y0(K):"0 B",S=O?.name||"",g=(S&&S!=="."?S:"Total")||"Total",p=H,l=Y.length>1,Y_=(__)=>{if(!__?.path)return;let N_=o1(_.root,__.path);if(!N_||!Array.isArray(N_.children)||N_.children.length===0)return;j((M_)=>[...M_,N_.path]),X(N_.path),Z(null)},O_=()=>{if(!l)return;j((__)=>{let N_=__.slice(0,-1);return X(N_[N_.length-1]||_?.root?.path||"."),N_}),Z(null)};return q`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${O?.path||_?.root?.path||"."}`}
                data-segments=${M.length}
                data-base-size=${K}>
                ${M.map((__)=>q`
                    <path
                        key=${__.key}
                        d=${__.d}
                        fill=${__.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===__.key?" is-hovered":""}`}
                        onMouseEnter=${()=>Z(__)}
                        onMouseLeave=${()=>Z(null)}
                        onTouchStart=${()=>Z(__)}
                        onTouchEnd=${()=>Z(null)}
                        onClick=${()=>Y_(__)}
                    >
                        <title>${__.label} — ${y0(__.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${l?" is-drill":""}`}
                    onClick=${O_}
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${p}</text>
                </g>
            </svg>
            ${L.length>0&&q`
                <div class="workspace-folder-starburst-legend">
                    ${L.slice(0,8).map((__)=>q`
                        <div key=${__.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${__.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${__.name}>${__.name}</span>
                            <span class="workspace-folder-starburst-size">${y0(__.size)}</span>
                            <span class="workspace-folder-starburst-pct">${__.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&q`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function i6({mediaId:_}){let[$,Z]=R(null);if(c(()=>{if(!_)return;M2(_).then(Z).catch(()=>{})},[_]),!$)return null;let J=$.filename||"file",X=$.metadata?.size?y0($.metadata.size):"";return q`
        <a href=${u0(_)} download=${J} class="file-attachment"
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
                ${X&&q`<span class="file-size">${X}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function t4({onFileSelect:_,visible:$=!0,active:Z=void 0,onOpenEditor:J}){let[X,Y]=R(null),[j,G]=R(new Set(["."])),[N,O]=R(null),[K,U]=R(null),[L,E]=R(""),[b,F]=R(null),[x,M]=R(null),[H,S]=R(!0),[y,g]=R(!1),[p,l]=R(null),[Y_,O_]=R(()=>U2("workspaceShowHidden",!1)),[__,N_]=R(!1),[M_,r]=R(null),[e,d]=R(null),[i,$_]=R(null),[W_,J_]=R(!1),[v_,X_]=R(null),[B_,z_]=R(()=>c4()),[H_,A_]=R(()=>p1({stored:m0(X1),...h1()})),L_=D(j),Q_=D(""),k_=D(null),w_=D(0),y_=D(new Set),S_=D(null),b_=D(new Map),O0=D(_),m_=D(J),x_=D(null),K_=D(null),Q0=D(null),Z0=D(null),A0=D(null),J0=D(null),F0=D("."),F_=D(null),U0=D({path:null,dragging:!1,startX:0,startY:0}),b0=D({path:null,dragging:!1,startX:0,startY:0}),a_=D({path:null,timer:0}),Y0=D(!1),c_=D(0),I=D(new Map),Z_=D(null),E_=D(null),B0=D(null),q0=D(null),u_=D(Y_),H0=D($),o_=D(Z??$),n_=D(0),d_=D(i),L0=D(__),r0=D(M_),X0=D(null),W2=D({x:0,y:0}),M0=D(0),P0=D(null),j0=D(N),c0=D(K),w0=D(null),R_=D(null),s0=D(b);O0.current=_,m_.current=J,c(()=>{L_.current=j},[j]),c(()=>{u_.current=Y_},[Y_]),c(()=>{H0.current=$},[$]),c(()=>{o_.current=Z??$},[Z,$]),c(()=>{d_.current=i},[i]),c(()=>{if(typeof window>"u")return;let W=()=>{A_(p1({stored:m0(X1),...h1()}))};W();let z=()=>W(),C=()=>W(),k=(v)=>{if(!v||v.key===null||v.key===X1)W()};window.addEventListener("resize",z),window.addEventListener("focus",C),window.addEventListener("storage",k);let m=window.matchMedia?.("(pointer: coarse)"),n=window.matchMedia?.("(hover: none)"),a=(v,j_)=>{if(!v)return;if(v.addEventListener)v.addEventListener("change",j_);else if(v.addListener)v.addListener(j_)},s=(v,j_)=>{if(!v)return;if(v.removeEventListener)v.removeEventListener("change",j_);else if(v.removeListener)v.removeListener(j_)};return a(m,z),a(n,z),()=>{window.removeEventListener("resize",z),window.removeEventListener("focus",C),window.removeEventListener("storage",k),s(m,z),s(n,z)}},[]),c(()=>{let W=(z)=>{let C=z?.detail?.path;if(!C)return;let k=C.split("/"),m=[];for(let n=1;n<k.length;n++)m.push(k.slice(0,n).join("/"));if(m.length)G((n)=>{let a=new Set(n);a.add(".");for(let s of m)a.add(s);return a});O(C),requestAnimationFrame(()=>{let n=document.querySelector(`[data-path="${CSS.escape(C)}"]`);if(n)n.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",W),()=>window.removeEventListener("workspace-reveal-path",W)},[]),c(()=>{L0.current=__},[__]),c(()=>{r0.current=M_},[M_]),c(()=>{j0.current=N},[N]),c(()=>{c0.current=K},[K]),c(()=>{s0.current=b},[b]),c(()=>{if(typeof window>"u"||typeof document>"u")return;let W=()=>z_(c4());W();let z=window.matchMedia?.("(prefers-color-scheme: dark)"),C=()=>W();if(z?.addEventListener)z.addEventListener("change",C);else if(z?.addListener)z.addListener(C);let k=typeof MutationObserver<"u"?new MutationObserver(()=>W()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(z?.removeEventListener)z.removeEventListener("change",C);else if(z?.removeListener)z.removeListener(C);k?.disconnect()}},[]),c(()=>{if(!K)return;let W=A0.current;if(!W)return;let z=requestAnimationFrame(()=>{try{W.focus(),W.select()}catch{}});return()=>cancelAnimationFrame(z)},[K]);let G2=async(W)=>{g(!0),F(null),M(null);try{let z=await d3(W,20000);F(z)}catch(z){F({error:z.message||"Failed to load preview"})}finally{g(!1)}};x_.current=G2;let J2=async()=>{if(!H0.current)return;try{let W=await d2("",1,u_.current),z=m4(W.root,L_.current,u_.current);if(z===Q_.current){S(!1);return}if(Q_.current=z,k_.current=W.root,!w_.current)w_.current=requestAnimationFrame(()=>{w_.current=0,Y((C)=>n1(C,k_.current)),S(!1)})}catch(W){l(W.message||"Failed to load workspace"),S(!1)}},a0=async(W)=>{if(!W)return;if(y_.current.has(W))return;y_.current.add(W);try{let z=await d2(W,1,u_.current);Y((C)=>l1(C,W,z.root))}catch(z){l(z.message||"Failed to load workspace")}finally{y_.current.delete(W)}};K_.current=a0;let r_=w(()=>{let W=N;if(!W)return".";let z=b_.current?.get(W);if(z&&z.type==="dir")return z.path;if(W==="."||!W.includes("/"))return".";let C=W.split("/");return C.pop(),C.join("/")||"."},[N]),E0=w((W)=>{let z=W?.closest?.(".workspace-row");if(!z)return null;let C=z.dataset.path,k=z.dataset.type;if(!C)return null;if(k==="dir")return C;if(C.includes("/")){let m=C.split("/");return m.pop(),m.join("/")||"."}return"."},[]),D0=w((W)=>{return E0(W?.target||null)},[E0]),I_=w((W)=>{d_.current=W,$_(W)},[]),t_=w(()=>{let W=a_.current;if(W?.timer)clearTimeout(W.timer);a_.current={path:null,timer:0}},[]),g_=w((W)=>{if(!W||W==="."){t_();return}let z=b_.current?.get(W);if(!z||z.type!=="dir"){t_();return}if(L_.current?.has(W)){t_();return}if(a_.current?.path===W)return;t_();let C=setTimeout(()=>{a_.current={path:null,timer:0},K_.current?.(W),G((k)=>{let m=new Set(k);return m.add(W),m})},600);a_.current={path:W,timer:C}},[t_]),e_=w((W,z)=>{if(W2.current={x:W,y:z},M0.current)return;M0.current=requestAnimationFrame(()=>{M0.current=0;let C=X0.current;if(!C)return;let k=W2.current;C.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),C0=w((W)=>{if(!W)return;let C=(b_.current?.get(W)?.name||W.split("/").pop()||W).trim();if(!C)return;d({path:W,label:C})},[]),I0=w(()=>{if(d(null),M0.current)cancelAnimationFrame(M0.current),M0.current=0;if(X0.current)X0.current.style.transform="translate(-9999px, -9999px)"},[]),h0=w((W)=>{if(!W)return".";let z=b_.current?.get(W);if(z&&z.type==="dir")return z.path;if(W==="."||!W.includes("/"))return".";let C=W.split("/");return C.pop(),C.join("/")||"."},[]),K0=w(()=>{U(null),E("")},[]),Y2=w((W)=>{if(!W)return;let C=(b_.current?.get(W)?.name||W.split("/").pop()||W).trim();if(!C||W===".")return;U(W),E(C)},[]),T0=w(async()=>{let W=c0.current;if(!W)return;let z=(L||"").trim();if(!z){K0();return}let C=b_.current?.get(W),k=(C?.name||W.split("/").pop()||W).trim();if(z===k){K0();return}try{let n=(await a3(W,z))?.path||W,a=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(K0(),l(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:W,newPath:n,type:C?.type||"file"}})),C?.type==="dir")G((s)=>{let v=new Set;for(let j_ of s)if(j_===W)v.add(n);else if(j_.startsWith(`${W}/`))v.add(`${n}${j_.slice(W.length)}`);else v.add(j_);return v});if(O(n),C?.type==="dir")F(null),g(!1),M(null);else x_.current?.(n);K_.current?.(a)}catch(m){l(m?.message||"Failed to rename file")}},[K0,L]),p0=w(async(W)=>{let k=W||".";for(let m=0;m<50;m+=1){let a=`untitled${m===0?"":`-${m}`}.md`;try{let v=(await s3(k,a,""))?.path||(k==="."?a:`${k}/${a}`);if(k&&k!==".")G((j_)=>new Set([...j_,k]));O(v),l(null),K_.current?.(k),x_.current?.(v);return}catch(s){if(s?.status===409||s?.code==="file_exists")continue;l(s?.message||"Failed to create file");return}}l("Failed to create file (untitled name already in use).")},[]),t0=w((W)=>{if(W?.stopPropagation?.(),W_)return;let z=h0(j0.current);p0(z)},[W_,h0,p0]);c(()=>{if(typeof window>"u")return;let W=(z)=>{let C=z?.detail?.updates||[];if(!Array.isArray(C)||C.length===0)return;Y((s)=>{let v=s;for(let j_ of C){if(!j_?.root)continue;if(!v||j_.path==="."||!j_.path)v=j_.root;else v=l1(v,j_.path,j_.root)}if(v)Q_.current=m4(v,L_.current,u_.current);return S(!1),v});let k=j0.current;if(Boolean(k)&&C.some((s)=>{let v=s?.path||"";if(!v||v===".")return!0;return k===v||k.startsWith(`${v}/`)||v.startsWith(`${k}/`)}))I.current.clear();if(!k||!s0.current)return;let n=b_.current?.get(k);if(n&&n.type==="dir")return;if(C.some((s)=>{let v=s?.path||"";if(!v||v===".")return!0;return k===v||k.startsWith(`${v}/`)}))x_.current?.(k)};return window.addEventListener("workspace-update",W),()=>window.removeEventListener("workspace-update",W)},[]),S_.current=J2;let i0=D(()=>{if(typeof window>"u")return;let W=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),z=o_.current??H0.current,C=document.visibilityState!=="hidden"&&(z||W.matches&&H0.current);r2(C,u_.current).catch(()=>{})}).current,Q=D(0),f=D(()=>{if(Q.current)clearTimeout(Q.current);Q.current=setTimeout(()=>{Q.current=0,i0()},250)}).current;c(()=>{if(H0.current)S_.current?.();f()},[$,Z]),c(()=>{S_.current(),i0();let W=setInterval(()=>S_.current(),m6),z=H2("previewHeight",null),C=Number.isFinite(z)?Math.min(Math.max(z,80),600):280;if(c_.current=C,Q0.current)Q0.current.style.setProperty("--preview-height",`${C}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),m=()=>f();if(k.addEventListener)k.addEventListener("change",m);else if(k.addListener)k.addListener(m);return document.addEventListener("visibilitychange",m),()=>{if(clearInterval(W),w_.current)cancelAnimationFrame(w_.current),w_.current=0;if(k.removeEventListener)k.removeEventListener("change",m);else if(k.removeListener)k.removeListener(m);if(document.removeEventListener("visibilitychange",m),Q.current)clearTimeout(Q.current),Q.current=0;if(F_.current)clearTimeout(F_.current),F_.current=null;r2(!1,u_.current).catch(()=>{})}},[]);let o=V0(()=>i4(X,j,Y_),[X,j,Y_]),V_=V0(()=>new Map(o.map((W)=>[W.node.path,W.node])),[o]),D_=V0(()=>u4(H_),[H_]);b_.current=V_;let q_=(N?b_.current.get(N):null)?.type==="dir";c(()=>{if(!N||!q_){X_(null),Z_.current=null,E_.current=null;return}let W=N,z=`${Y_?"hidden":"visible"}:${N}`,C=I.current,k=C.get(z);if(k?.root){C.delete(z),C.set(z,k);let a=h4(k.root,Boolean(k.truncated),B_);if(a)Z_.current=a,E_.current=N,X_({loading:!1,error:null,payload:a});return}let m=Z_.current,n=E_.current;X_({loading:!0,error:null,payload:n===N?m:null}),d2(N,c6,Y_).then((a)=>{if(j0.current!==W)return;let s={root:a?.root,truncated:Boolean(a?.truncated)};C.delete(z),C.set(z,s);while(C.size>h6){let j_=C.keys().next().value;if(!j_)break;C.delete(j_)}let v=h4(s.root,s.truncated,B_);Z_.current=v,E_.current=N,X_({loading:!1,error:null,payload:v})}).catch((a)=>{if(j0.current!==W)return;X_({loading:!1,error:a?.message||"Failed to load folder size chart",payload:n===N?m:null})})},[N,q_,Y_,B_]);let W0=Boolean(b&&b.kind==="text"&&!q_&&(!b.size||b.size<=262144)),l0=W0?"Open in editor":b?.size>262144?"File too large to edit":"File is not editable";c(()=>{let W=B0.current;if(q0.current)q0.current.dispose(),q0.current=null;if(!W)return;if(W.innerHTML="",!N||q_||!b||b.error)return;let z={path:N,content:typeof b.text==="string"?b.text:void 0,mtime:b.mtime,size:b.size,preview:b,mode:"view"},C=l_.resolve(z)||l_.get("workspace-preview-default");if(!C)return;let k=C.mount(W,z);return q0.current=k,()=>{if(q0.current===k)k.dispose(),q0.current=null;W.innerHTML=""}},[N,q_,b]);let f0=(W)=>{let z=W?.target;if(z instanceof Element)return z;return z?.parentElement||null},o0=(W)=>{return Boolean(W?.closest?.(".workspace-node-icon, .workspace-label-text"))},N2=D((W)=>{if(R_.current)clearTimeout(R_.current),R_.current=null;let C=f0(W)?.closest?.("[data-path]");if(!C)return;let k=C.dataset.path;if(C.dataset.type==="dir"||!k)return;if(c0.current===k)K0();m_.current?.(k)}).current,V2=D((W)=>{if(Y0.current){Y0.current=!1;return}let z=f0(W),C=z?.closest?.("[data-path]");if(Z0.current?.focus?.(),!C)return;let k=C.dataset.path,m=C.dataset.type,n=Boolean(z?.closest?.(".workspace-caret")),a=Boolean(z?.closest?.("button"))||Boolean(z?.closest?.("a"))||Boolean(z?.closest?.("input")),s=j0.current===k,v=c0.current;if(v){if(v===k)return;K0()}let j_=m==="file"&&w0.current===k&&!n&&!a;if(s&&!n&&!a&&k!=="."&&!j_){if(R_.current)clearTimeout(R_.current);R_.current=setTimeout(()=>{R_.current=null,Y2(k)},350);return}if(m==="dir"){if(w0.current=null,O(k),F(null),M(null),g(!1),!L_.current.has(k))K_.current?.(k);if(s&&!n)return;G((x0)=>{let g0=new Set(x0);if(g0.has(k))g0.delete(k);else g0.add(k);return g0})}else{w0.current=null,O(k);let T_=b_.current.get(k);if(T_)O0.current?.(T_.path,T_);x_.current?.(k)}}).current,s_=D(()=>{Q_.current="",S_.current(),Array.from(L_.current||[]).filter((z)=>z&&z!==".").forEach((z)=>K_.current?.(z))}).current,P_=D(()=>{w0.current=null,O(null),F(null),M(null),g(!1)}).current,G0=D(()=>{O_((W)=>{let z=!W;if(typeof window<"u")f_("workspaceShowHidden",String(z));return u_.current=z,r2(!0,z).catch(()=>{}),Q_.current="",S_.current?.(),Array.from(L_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>K_.current?.(k)),z})}).current,e0=D((W)=>{if(f0(W)?.closest?.("[data-path]"))return;P_()}).current,p_=w(async(W)=>{if(!W)return;let z=W.split("/").pop()||W;if(!window.confirm(`Delete "${z}"? This cannot be undone.`))return;try{await e3(W);let k=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(j0.current===W)P_();K_.current?.(k),l(null)}catch(k){F((m)=>({...m||{},error:k.message||"Failed to delete file"}))}},[P_]),_0=w((W)=>{let z=Z0.current;if(!z||!W||typeof CSS>"u"||typeof CSS.escape!=="function")return;z.querySelector(`[data-path="${CSS.escape(W)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),v0=w((W)=>{let z=o;if(!z||z.length===0)return;let C=N?z.findIndex((k)=>k.node.path===N):-1;if(W.key==="ArrowDown"){W.preventDefault();let k=Math.min(C+1,z.length-1),m=z[k];if(!m)return;if(O(m.node.path),m.node.type!=="dir")O0.current?.(m.node.path,m.node),x_.current?.(m.node.path);else F(null),g(!1),M(null);_0(m.node.path);return}if(W.key==="ArrowUp"){W.preventDefault();let k=C<=0?0:C-1,m=z[k];if(!m)return;if(O(m.node.path),m.node.type!=="dir")O0.current?.(m.node.path,m.node),x_.current?.(m.node.path);else F(null),g(!1),M(null);_0(m.node.path);return}if(W.key==="ArrowRight"&&C>=0){let k=z[C];if(k?.node?.type==="dir"&&!j.has(k.node.path))W.preventDefault(),K_.current?.(k.node.path),G((m)=>new Set([...m,k.node.path]));return}if(W.key==="ArrowLeft"&&C>=0){let k=z[C];if(k?.node?.type==="dir"&&j.has(k.node.path))W.preventDefault(),G((m)=>{let n=new Set(m);return n.delete(k.node.path),n});return}if(W.key==="Enter"&&C>=0){W.preventDefault();let k=z[C];if(!k)return;let m=k.node.path;if(k.node.type==="dir"){if(!L_.current.has(m))K_.current?.(m);G((a)=>{let s=new Set(a);if(s.has(m))s.delete(m);else s.add(m);return s}),F(null),M(null),g(!1)}else O0.current?.(m,k.node),x_.current?.(m);return}if((W.key==="Delete"||W.key==="Backspace")&&C>=0){let k=z[C];if(!k||k.node.type==="dir")return;W.preventDefault(),p_(k.node.path);return}if(W.key==="Escape")W.preventDefault(),P_()},[P_,p_,j,o,_0,N]),z0=w((W)=>{let z=f0(W),C=z?.closest?.(".workspace-row");if(!C)return;let k=C.dataset.type,m=C.dataset.path;if(!m||m===".")return;if(c0.current===m)return;let n=W?.touches?.[0];if(!n)return;if(U0.current={path:o0(z)?m:null,dragging:!1,startX:n.clientX,startY:n.clientY},k!=="file")return;if(F_.current)clearTimeout(F_.current);F_.current=setTimeout(()=>{if(F_.current=null,U0.current?.dragging)return;p_(m)},600)},[p_]),S0=w(()=>{if(F_.current)clearTimeout(F_.current),F_.current=null;let W=U0.current;if(W?.dragging&&W.path){let z=d_.current||r_(),C=P0.current;if(typeof C==="function")C(W.path,z)}U0.current={path:null,dragging:!1,startX:0,startY:0},n_.current=0,N_(!1),r(null),I_(null),t_(),I0()},[r_,I0,I_,t_]),O2=w((W)=>{let z=U0.current,C=W?.touches?.[0];if(!C||!z?.path){if(F_.current)clearTimeout(F_.current),F_.current=null;return}let k=Math.abs(C.clientX-z.startX),m=Math.abs(C.clientY-z.startY),n=k>8||m>8;if(n&&F_.current)clearTimeout(F_.current),F_.current=null;if(!z.dragging&&n)z.dragging=!0,N_(!0),r("move"),C0(z.path);if(z.dragging){W.preventDefault(),e_(C.clientX,C.clientY);let a=document.elementFromPoint(C.clientX,C.clientY),s=E0(a)||r_();if(d_.current!==s)I_(s);g_(s)}},[E0,r_,C0,e_,I_,g_]),C2=D((W)=>{W.preventDefault();let z=Q0.current;if(!z)return;let C=W.clientY,k=c_.current||280,m=W.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let n=C,a=(v)=>{n=v.clientY;let j_=z.clientHeight-80,T_=Math.min(Math.max(k-(v.clientY-C),80),j_);z.style.setProperty("--preview-height",`${T_}px`),c_.current=T_},s=()=>{let v=z.clientHeight-80,j_=Math.min(Math.max(k-(n-C),80),v);c_.current=j_,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",f_("previewHeight",String(Math.round(j_))),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",s)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",s)}).current,X2=D((W)=>{W.preventDefault();let z=Q0.current;if(!z)return;let C=W.touches[0];if(!C)return;let k=C.clientY,m=c_.current||280,n=W.currentTarget;n.classList.add("dragging"),document.body.style.userSelect="none";let a=(v)=>{let j_=v.touches[0];if(!j_)return;v.preventDefault();let T_=z.clientHeight-80,x0=Math.min(Math.max(m-(j_.clientY-k),80),T_);z.style.setProperty("--preview-height",`${x0}px`),c_.current=x0},s=()=>{n.classList.remove("dragging"),document.body.style.userSelect="",f_("previewHeight",String(Math.round(c_.current||m))),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",s),document.removeEventListener("touchcancel",s)};document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",s),document.addEventListener("touchcancel",s)}).current,K1=async()=>{if(!N)return;try{let W=await r3(N);if(W.media_id)M(W.media_id)}catch(W){F((z)=>({...z||{},error:W.message||"Failed to attach"}))}},W1=async()=>{if(!N||q_)return;await p_(N)},j2=(W)=>{return Array.from(W?.dataTransfer?.types||[]).includes("Files")},f2=w((W)=>{if(!j2(W))return;if(W.preventDefault(),n_.current+=1,!L0.current)N_(!0);r("upload");let z=D0(W)||r_();I_(z),g_(z)},[r_,D0,I_,g_]),$0=w((W)=>{if(!j2(W))return;if(W.preventDefault(),W.dataTransfer)W.dataTransfer.dropEffect="copy";if(!L0.current)N_(!0);if(r0.current!=="upload")r("upload");let z=D0(W)||r_();if(d_.current!==z)I_(z);g_(z)},[r_,D0,I_,g_]),G1=w((W)=>{if(!j2(W))return;if(W.preventDefault(),n_.current=Math.max(0,n_.current-1),n_.current===0)N_(!1),r(null),I_(null),t_()},[I_,t_]),B2=w(async(W,z=".")=>{let C=Array.from(W||[]);if(C.length===0)return;let k=z&&z!==""?z:".",m=k!=="."?k:"workspace root";J_(!0);try{let n=null;for(let a of C)try{n=await A1(a,k)}catch(s){let v=s?.status,j_=s?.code;if(v===409||j_==="file_exists"){let T_=a?.name||"file";if(!window.confirm(`"${T_}" already exists in ${m}. Overwrite?`))continue;n=await A1(a,k,{overwrite:!0})}else throw s}if(n?.path)w0.current=n.path,O(n.path),x_.current?.(n.path);K_.current?.(k)}catch(n){l(n.message||"Failed to upload file")}finally{J_(!1)}},[]),v2=w(async(W,z)=>{if(!W)return;let C=b_.current?.get(W);if(!C)return;let k=z&&z!==""?z:".",m=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(k===m)return;try{let a=(await t3(W,k))?.path||W;if(C.type==="dir")G((s)=>{let v=new Set;for(let j_ of s)if(j_===W)v.add(a);else if(j_.startsWith(`${W}/`))v.add(`${a}${j_.slice(W.length)}`);else v.add(j_);return v});if(O(a),C.type==="dir")F(null),g(!1),M(null);else x_.current?.(a);K_.current?.(m),K_.current?.(k)}catch(n){l(n?.message||"Failed to move entry")}},[]);P0.current=v2;let R0=w(async(W)=>{if(!j2(W))return;W.preventDefault(),n_.current=0,N_(!1),r(null),$_(null),t_();let z=Array.from(W?.dataTransfer?.files||[]);if(z.length===0)return;let C=d_.current||D0(W)||r_();await B2(z,C)},[r_,D0,B2]),N0=w((W)=>{if(W?.stopPropagation?.(),W_)return;let z=W?.currentTarget?.dataset?.uploadTarget||".";F0.current=z,J0.current?.click()},[W_]),N1=w(()=>{if(W_)return;let W=j0.current,z=W?b_.current?.get(W):null;F0.current=z?.type==="dir"?z.path:".",J0.current?.click()},[W_]),k2=w((W)=>{if(!W||W.button!==0)return;let z=W.currentTarget;if(!z||!z.dataset)return;let C=z.dataset.path;if(!C||C===".")return;if(c0.current===C)return;let k=f0(W);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!o0(k))return;W.preventDefault(),b0.current={path:C,dragging:!1,startX:W.clientX,startY:W.clientY};let m=(a)=>{let s=b0.current;if(!s?.path)return;let v=Math.abs(a.clientX-s.startX),j_=Math.abs(a.clientY-s.startY),T_=v>4||j_>4;if(!s.dragging&&T_)s.dragging=!0,Y0.current=!0,N_(!0),r("move"),C0(s.path),e_(a.clientX,a.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(s.dragging){a.preventDefault(),e_(a.clientX,a.clientY);let x0=document.elementFromPoint(a.clientX,a.clientY),g0=E0(x0)||r_();if(d_.current!==g0)I_(g0);g_(g0)}},n=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",n);let a=b0.current;if(a?.dragging&&a.path){let s=d_.current||r_(),v=P0.current;if(typeof v==="function")v(a.path,s)}b0.current={path:null,dragging:!1,startX:0,startY:0},n_.current=0,N_(!1),r(null),I_(null),t_(),I0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{Y0.current=!1},0)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",n)},[E0,r_,C0,e_,I0,I_,g_,t_]),_2=w(async(W)=>{let z=Array.from(W?.target?.files||[]);if(z.length===0)return;let C=F0.current||".";if(await B2(z,C),F0.current=".",W?.target)W.target.value=""},[B2]);return q`
        <aside
            class=${`workspace-sidebar${__?" workspace-drop-active":""}`}
            data-workspace-scale=${H_}
            ref=${Q0}
            onDragEnter=${f2}
            onDragOver=${$0}
            onDragLeave=${G1}
            onDrop=${R0}
        >
            <input type="file" multiple style="display:none" ref=${J0} onChange=${_2} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${t0} title="New file" disabled=${W_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${s_} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${Y_?" active":""}`}
                        onClick=${G0}
                        title=${Y_?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!Y_&&q`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${e0}>
                ${W_&&q`<div class="workspace-drop-hint">Uploading…</div>`}
                ${H&&q`<div class="workspace-loading">Loading…</div>`}
                ${p&&q`<div class="workspace-error">${p}</div>`}
                ${X&&q`
                    <div
                        class="workspace-tree-list"
                        ref=${Z0}
                        tabIndex="0"
                        onClick=${V2}
                        onDblClick=${N2}
                        onKeyDown=${v0}
                        onTouchStart=${z0}
                        onTouchEnd=${S0}
                        onTouchMove=${O2}
                        onTouchCancel=${S0}
                    >
                        ${o.map(({node:W,depth:z})=>{let C=W.type==="dir",k=W.path===N,m=W.path===K,n=C&&j.has(W.path),a=i&&W.path===i,s=Array.isArray(W.children)&&W.children.length>0?W.children.length:Number(W.child_count)||0;return q`
                                <div
                                    key=${W.path}
                                    class=${`workspace-row${k?" selected":""}${a?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+z*D_.indentPx}px`}}
                                    data-path=${W.path}
                                    data-type=${W.type}
                                    onMouseDown=${k2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${C?n?q`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:q`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${C?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${C?q`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:q`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${m?q`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${A0}
                                                value=${L}
                                                onInput=${(v)=>E(v?.target?.value||"")}
                                                onKeyDown=${(v)=>{if(v.key==="Enter")v.preventDefault(),T0();else if(v.key==="Escape")v.preventDefault(),K0()}}
                                                onBlur=${K0}
                                                onClick=${(v)=>v.stopPropagation()}
                                            />
                                        `:q`<span class="workspace-label"><span class="workspace-label-text">${W.name}</span></span>`}
                                    ${C&&!n&&s>0&&q`
                                        <span class="workspace-count">${s}</span>
                                    `}
                                    ${C&&q`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${W.path}
                                            title="Upload files to this folder"
                                            onClick=${N0}
                                            disabled=${W_}
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
            ${N&&q`
                <div class="workspace-preview-splitter-h" onMouseDown=${C2} onTouchStart=${X2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${N}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${t0} title="New file" disabled=${W_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!q_&&q`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>W0&&m_.current?.(N,b)}
                                    title=${l0}
                                    disabled=${!W0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${W1}
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
                            ${q_?q`
                                    <button class="workspace-download" onClick=${N1}
                                        title="Upload files to this folder" disabled=${W_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${_4(N,Y_)}
                                        title="Download folder as zip" onClick=${(W)=>W.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:q`<button class="workspace-download" onClick=${K1} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${y&&q`<div class="workspace-loading">Loading preview…</div>`}
                    ${b?.error&&q`<div class="workspace-error">${b.error}</div>`}
                    ${q_&&q`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${v_?.loading&&q`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${v_?.error&&q`<div class="workspace-error">${v_.error}</div>`}
                        ${v_?.payload&&v_.payload.segments?.length>0&&q`
                            <${p6} payload=${v_.payload} />
                        `}
                        ${v_?.payload&&(!v_.payload.segments||v_.payload.segments.length===0)&&q`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${b&&!b.error&&!q_&&q`
                        <div class="workspace-preview-body" ref=${B0}></div>
                    `}
                    ${x&&q`
                        <div class="workspace-download-card">
                            <${i6} mediaId=${x} />
                        </div>
                    `}
                </div>
            `}
            ${e&&q`
                <div class="workspace-drag-ghost" ref=${X0}>${e.label}</div>
            `}
        </aside>
    `}function e4({tabs:_,activeId:$,onActivate:Z,onClose:J,onCloseOthers:X,onCloseAll:Y,onTogglePin:j,onTogglePreview:G,previewTabs:N,onToggleDock:O,dockVisible:K}){let[U,L]=R(null),E=D(null);c(()=>{if(!U)return;let H=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;L(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[U]),c(()=>{let H=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let y=_.findIndex((g)=>g.id===$);if(S.shiftKey){let g=_[(y-1+_.length)%_.length];Z?.(g.id)}else{let g=_[(y+1)%_.length];Z?.(g.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let y=document.querySelector(".editor-pane");if(y&&y.contains(document.activeElement)){if(S.preventDefault(),$)J?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,Z,J]);let b=w((H,S)=>{if(H.button===1){H.preventDefault(),J?.(S);return}if(H.button===0)Z?.(S)},[Z,J]),F=w((H,S)=>{H.preventDefault(),L({id:S,x:H.clientX,y:H.clientY})},[]),x=w((H)=>{H.preventDefault(),H.stopPropagation()},[]),M=w((H,S)=>{H.preventDefault(),H.stopPropagation(),J?.(S)},[J]);if(c(()=>{if(!$||!E.current)return;let H=E.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return q`
        <div class="tab-strip" ref=${E} role="tablist">
            ${_.map((H)=>q`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(S)=>b(S,H.id)}
                    onContextMenu=${(S)=>F(S,H.id)}
                >
                    ${H.pinned&&q`
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
                        onMouseDown=${x}
                        onClick=${(S)=>M(S,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?q`<span class="tab-dirty-dot" aria-hidden="true"></span>`:q`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                <line x1="4" y1="4" x2="12" y2="12"/>
                                <line x1="12" y1="4" x2="4" y2="12"/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${O&&q`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${K?" active":""}`}
                    onClick=${O}
                    title=${`${K?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${K?"Hide":"Show"} terminal`}
                    aria-pressed=${K?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 12 4 10 8 6 12 10 12 12"/>
                        <line x1="2" y1="14" x2="14" y2="14"/>
                    </svg>
                </button>
            `}
        </div>
        ${U&&q`
            <div class="tab-context-menu" style=${{left:U.x+"px",top:U.y+"px"}}>
                <button onClick=${()=>{J?.(U.id),L(null)}}>Close</button>
                <button onClick=${()=>{X?.(U.id),L(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),L(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{j?.(U.id),L(null)}}>
                    ${_.find((H)=>H.id===U.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(U.id)&&q`
                    <hr />
                    <button onClick=${()=>{G(U.id),L(null)}}>
                        ${N?.has(U.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var l6=400,r1=60,_8=220,s1="mdPreviewHeight";function o6(){try{let _=localStorage.getItem(s1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=r1?$:_8}catch{return _8}}function $8({getContent:_,path:$,onClose:Z}){let[J,X]=R(""),[Y,j]=R(o6),G=D(null),N=D(null),O=D(""),K=D(_);return K.current=_,c(()=>{let E=()=>{let F=K.current?.()||"";if(F===O.current)return;O.current=F;try{let x=E2(F,null,{sanitize:!1});X(x)}catch{X('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};E();let b=setInterval(E,l6);return()=>clearInterval(b)},[]),c(()=>{if(G.current&&J)Z1(G.current).catch(()=>{})},[J]),q`
        <div
            class="md-preview-splitter"
            onMouseDown=${(E)=>{E.preventDefault();let b=E.clientY,F=N.current?.offsetHeight||Y,x=N.current?.parentElement,M=x?x.offsetHeight*0.7:500,H=E.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let S=(g)=>{let p=Math.min(Math.max(F-(g.clientY-b),r1),M);j(p)},y=()=>{H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(s1,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",y)}}
            onTouchStart=${(E)=>{E.preventDefault();let b=E.touches[0];if(!b)return;let F=b.clientY,x=N.current?.offsetHeight||Y,M=N.current?.parentElement,H=M?M.offsetHeight*0.7:500,S=E.currentTarget;S.classList.add("dragging"),document.body.style.userSelect="none";let y=(p)=>{let l=p.touches[0];if(!l)return;p.preventDefault();let Y_=Math.min(Math.max(x-(l.clientY-F),r1),H);j(Y_)},g=()=>{S.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(s1,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g),document.removeEventListener("touchcancel",g)};document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("touchend",g),document.addEventListener("touchcancel",g)}}
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
    `}function Z8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:Z}){let J=D(_);J.current=_;let X=D($);X.current=$;let Y=D(Z);Y.current=Z,c(()=>{Y.current();let j=new M1((N,O)=>J.current(N,O),(N)=>X.current(N));j.connect();let G=()=>{j.reconnectIfNeeded()};return window.addEventListener("focus",G),document.addEventListener("visibilitychange",G),()=>{window.removeEventListener("focus",G),document.removeEventListener("visibilitychange",G),j.disconnect()}},[])}function J8(){let[_,$]=R(!1),[Z,J]=R("default"),X=D(!1);c(()=>{let N=U2("notificationsEnabled",!1);if(X.current=N,$(N),typeof Notification<"u")J(Notification.permission)},[]),c(()=>{X.current=_},[_]);let Y=w(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch{return Promise.resolve("default")}},[]),j=w(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){J("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let O=await Y();if(J(O||"default"),O!=="granted"){X.current=!1,$(!1),f_("notificationsEnabled","false");return}}let N=!X.current;X.current=N,$(N),f_("notificationsEnabled",String(N))},[Y]),G=w((N,O)=>{if(!X.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let K=new Notification(N,{body:O});return K.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:Z,toggleNotifications:j,notify:G}}var I2=(_)=>{let $=new Set;return(_||[]).filter((Z)=>{if(!Z||$.has(Z.id))return!1;return $.add(Z.id),!0})};function Y8({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[Z,J]=R(null),[X,Y]=R(!1),j=D(!1),G=D(null),N=D(!1),O=D(null),K=D(null);c(()=>{j.current=X},[X]),c(()=>{K.current=Z},[Z]);let U=w(async(b=null)=>{try{if(b){let F=await f3(b);J(F.posts),Y(!1)}else{let F=await n2(10);J(F.posts),Y(F.has_more)}}catch(F){console.error("Failed to load posts:",F)}},[]),L=w(async()=>{try{let b=await n2(10);J((F)=>{if(!F||F.length===0)return b.posts;return I2([...b.posts,...F])}),Y((F)=>F||b.has_more)}catch(b){console.error("Failed to refresh timeline:",b)}},[]),E=w(async(b={})=>{let F=K.current;if(!F||F.length===0)return;if(N.current)return;let{preserveScroll:x=!0,preserveMode:M="top",allowRepeat:H=!1}=b,S=(p)=>{if(!x){p();return}if(M==="top")$(p);else _(p)},g=F.slice().sort((p,l)=>p.id-l.id)[0]?.id;if(!Number.isFinite(g))return;if(!H&&O.current===g)return;N.current=!0,O.current=g;try{let p=await n2(10,g);if(p.posts.length>0)S(()=>{J((l)=>I2([...p.posts,...l||[]])),Y(p.has_more)});else Y(!1)}catch(p){console.error("Failed to load more posts:",p)}finally{N.current=!1}},[_,$]);return c(()=>{G.current=E},[E]),{posts:Z,setPosts:J,hasMore:X,setHasMore:Y,hasMoreRef:j,loadPosts:U,refreshTimeline:L,loadMore:E,loadMoreRef:G,loadingMoreRef:N,lastBeforeIdRef:O}}function X8(){let[_,$]=R(null),[Z,J]=R({text:"",totalLines:0}),[X,Y]=R(""),[j,G]=R({text:"",totalLines:0}),[N,O]=R(null),[K,U]=R(null),[L,E]=R(null),b=D(null),F=D(0),x=D(!1),M=D(""),H=D(""),S=D(null),y=D(null),g=D(null),p=D(null),l=D(!1),Y_=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:Z,setAgentDraft:J,agentPlan:X,setAgentPlan:Y,agentThought:j,setAgentThought:G,pendingRequest:N,setPendingRequest:O,currentTurnId:K,setCurrentTurnId:U,steerQueuedTurnId:L,setSteerQueuedTurnId:E,lastAgentEventRef:b,lastSilenceNoticeRef:F,isAgentRunningRef:x,draftBufferRef:M,thoughtBufferRef:H,pendingRequestRef:S,stalledPostIdRef:y,currentTurnIdRef:g,steerQueuedTurnIdRef:p,thoughtExpandedRef:l,draftExpandedRef:Y_}}function j8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:Z,dockHeightRef:J}){let X=D((K)=>{K.preventDefault();let U=_.current;if(!U)return;let L=K.clientX,E=$.current||280,b=K.currentTarget;b.classList.add("dragging"),U.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let F=L,x=(H)=>{F=H.clientX;let S=Math.min(Math.max(E+(H.clientX-L),160),600);U.style.setProperty("--sidebar-width",`${S}px`),$.current=S},M=()=>{let H=Math.min(Math.max(E+(F-L),160),600);$.current=H,b.classList.remove("dragging"),U.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",f_("sidebarWidth",String(Math.round(H))),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",M)}).current,Y=D((K)=>{K.preventDefault();let U=_.current;if(!U)return;let L=K.touches[0];if(!L)return;let E=L.clientX,b=$.current||280,F=K.currentTarget;F.classList.add("dragging"),U.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let x=(H)=>{let S=H.touches[0];if(!S)return;H.preventDefault();let y=Math.min(Math.max(b+(S.clientX-E),160),600);U.style.setProperty("--sidebar-width",`${y}px`),$.current=y},M=()=>{F.classList.remove("dragging"),U.classList.remove("sidebar-resizing"),document.body.style.userSelect="",f_("sidebarWidth",String(Math.round($.current||b))),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",M),document.removeEventListener("touchcancel",M)};document.addEventListener("touchmove",x,{passive:!1}),document.addEventListener("touchend",M),document.addEventListener("touchcancel",M)}).current,j=D((K)=>{K.preventDefault();let U=_.current;if(!U)return;let L=K.clientX,E=Z.current||$.current||280,b=K.currentTarget;b.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let F=L,x=(H)=>{F=H.clientX;let S=Math.min(Math.max(E+(H.clientX-L),200),800);U.style.setProperty("--editor-width",`${S}px`),Z.current=S},M=()=>{let H=Math.min(Math.max(E+(F-L),200),800);Z.current=H,b.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",f_("editorWidth",String(Math.round(H))),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",M)}).current,G=D((K)=>{K.preventDefault();let U=_.current;if(!U)return;let L=K.touches[0];if(!L)return;let E=L.clientX,b=Z.current||$.current||280,F=K.currentTarget;F.classList.add("dragging"),document.body.style.userSelect="none";let x=(H)=>{let S=H.touches[0];if(!S)return;H.preventDefault();let y=Math.min(Math.max(b+(S.clientX-E),200),800);U.style.setProperty("--editor-width",`${y}px`),Z.current=y},M=()=>{F.classList.remove("dragging"),document.body.style.userSelect="",f_("editorWidth",String(Math.round(Z.current||b))),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",M),document.removeEventListener("touchcancel",M)};document.addEventListener("touchmove",x,{passive:!1}),document.addEventListener("touchend",M),document.addEventListener("touchcancel",M)}).current,N=D((K)=>{K.preventDefault();let U=_.current;if(!U)return;let L=K.clientY,E=J?.current||200,b=K.currentTarget;b.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let F=L,x=(H)=>{F=H.clientY;let S=Math.min(Math.max(E-(H.clientY-L),100),window.innerHeight*0.5);if(U.style.setProperty("--dock-height",`${S}px`),J)J.current=S},M=()=>{let H=Math.min(Math.max(E-(F-L),100),window.innerHeight*0.5);if(J)J.current=H;b.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",f_("dockHeight",String(Math.round(H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",M)}).current,O=D((K)=>{K.preventDefault();let U=_.current;if(!U)return;let L=K.touches[0];if(!L)return;let E=L.clientY,b=J?.current||200,F=K.currentTarget;F.classList.add("dragging"),document.body.style.userSelect="none";let x=(H)=>{let S=H.touches[0];if(!S)return;H.preventDefault();let y=Math.min(Math.max(b-(S.clientY-E),100),window.innerHeight*0.5);if(U.style.setProperty("--dock-height",`${y}px`),J)J.current=y},M=()=>{F.classList.remove("dragging"),document.body.style.userSelect="",f_("dockHeight",String(Math.round(J?.current||b))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",M),document.removeEventListener("touchcancel",M)};document.addEventListener("touchmove",x,{passive:!1}),document.addEventListener("touchend",M),document.addEventListener("touchcancel",M)}).current;return{handleSplitterMouseDown:X,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:j,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:N,handleDockSplitterTouchStart:O}}function K8({onTabClosed:_}={}){let $=D(_);$.current=_;let[Z,J]=R(()=>C_.getTabs()),[X,Y]=R(()=>C_.getActiveId()),[j,G]=R(()=>C_.getTabs().length>0);c(()=>{return C_.onChange((y,g)=>{J(y),Y(g),G(y.length>0)})},[]);let[N,O]=R(()=>new Set),K=w((y)=>{O((g)=>{let p=new Set(g);if(p.has(y))p.delete(y);else p.add(y);return p})},[]),U=w((y)=>{O((g)=>{if(!g.has(y))return g;let p=new Set(g);return p.delete(y),p})},[]),L=w((y)=>{if(!y)return;let g={path:y,mode:"edit"};try{if(!l_.resolve(g)){if(!l_.get("editor")){console.warn(`[openEditor] No pane handler for: ${y}`);return}}}catch(p){console.warn(`[openEditor] paneRegistry.resolve() error for "${y}":`,p)}C_.open(y)},[]),E=w(()=>{let y=C_.getActiveId();if(y){let g=C_.get(y);if(g?.dirty){if(!window.confirm(`"${g.label}" has unsaved changes. Close anyway?`))return}C_.close(y),U(y),$.current?.(y)}},[U]),b=w((y)=>{let g=C_.get(y);if(g?.dirty){if(!window.confirm(`"${g.label}" has unsaved changes. Close anyway?`))return}C_.close(y),U(y),$.current?.(y)},[U]),F=w((y)=>{C_.activate(y)},[]),x=w((y)=>{let g=C_.getTabs().filter((Y_)=>Y_.id!==y&&!Y_.pinned),p=g.filter((Y_)=>Y_.dirty).length;if(p>0){if(!window.confirm(`${p} unsaved tab${p>1?"s":""} will be closed. Continue?`))return}let l=g.map((Y_)=>Y_.id);C_.closeOthers(y),l.forEach((Y_)=>{U(Y_),$.current?.(Y_)})},[U]),M=w(()=>{let y=C_.getTabs().filter((l)=>!l.pinned),g=y.filter((l)=>l.dirty).length;if(g>0){if(!window.confirm(`${g} unsaved tab${g>1?"s":""} will be closed. Continue?`))return}let p=y.map((l)=>l.id);C_.closeAll(),p.forEach((l)=>{U(l),$.current?.(l)})},[U]),H=w((y)=>{C_.togglePin(y)},[]),S=w(()=>{let y=C_.getActiveId();if(y)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:y}}))},[]);return c(()=>{let y=(g)=>{let{oldPath:p,newPath:l,type:Y_}=g.detail||{};if(!p||!l)return;if(Y_==="dir"){for(let O_ of C_.getTabs())if(O_.path===p||O_.path.startsWith(`${p}/`)){let __=`${l}${O_.path.slice(p.length)}`;C_.rename(O_.id,__)}}else C_.rename(p,l)};return window.addEventListener("workspace-file-renamed",y),()=>window.removeEventListener("workspace-file-renamed",y)},[]),c(()=>{let y=(g)=>{if(C_.hasUnsaved())g.preventDefault(),g.returnValue=""};return window.addEventListener("beforeunload",y),()=>window.removeEventListener("beforeunload",y)},[]),{editorOpen:j,tabStripTabs:Z,tabStripActiveId:X,previewTabs:N,openEditor:L,closeEditor:E,handleTabClose:b,handleTabActivate:F,handleTabCloseOthers:x,handleTabCloseAll:M,handleTabTogglePin:H,handleTabTogglePreview:K,revealInExplorer:S}}function a1(_,$){try{if(typeof window>"u")return $;let Z=window.__PICLAW_SILENCE||{},J=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,X=Z[_]??window[J],Y=Number(X);return Number.isFinite(Y)?Y:$}catch{return $}}var t1=a1("warning",30000),W8=a1("finalize",120000),e1=a1("refresh",30000),G8=30000;function N8(_){let $={};return(_?.agents||[]).forEach((Z)=>{$[Z.id]=Z}),$}function V8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function O8(_=30000){let[,$]=R(0);c(()=>{let Z=setInterval(()=>$((J)=>J+1),_);return()=>clearInterval(Z)},[_])}function _3(_,$=160){let Z=String(_||"").replace(/\r\n/g,`
`);if(!Z)return 0;return Z.split(`
`).reduce((J,X)=>J+Math.max(1,Math.ceil(X.length/$)),0)}function B8(_,$){if(typeof _!=="string")return{kind:"ignore"};let Z=_.trim();if(!Z)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(Z))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:Z,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${Z}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${Z}`,level:"warning"}}return{kind:"open",path:Z}}function T2(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var n6=v3,q8=g3,d6=u3,z8=p3,Q8=i3,U8=m3,$3=typeof E1==="function"?E1:T2("getAgentContext",null),r6=typeof K2==="function"?K2:T2("getAgentModels",{current:null,models:[]}),s6=typeof D1==="function"?D1:T2("getAgentQueueState",{count:0}),a6=typeof k1==="function"?k1:T2("steerAgentQueueItem",{removed:!1,queued:"steer"}),t6=typeof C1==="function"?C1:T2("removeAgentQueueItem",{removed:!1});if(window.marked)marked.setOptions({breaks:!0,gfm:!0});l_.register(v1);l_.register(c1);l_.register(m1);R1();var e6=typeof localStorage<"u"&&localStorage.getItem("experimentalPanes")==="true";if(e6)l_.register(g1);function _5(){let[_,$]=R("disconnected"),[Z,J]=R(null),[X,Y]=R(null),[j,G]=R(!1),[N,O]=R([]),[K,U]=R([]),[L,E]=R(null),{agentStatus:b,setAgentStatus:F,agentDraft:x,setAgentDraft:M,agentPlan:H,setAgentPlan:S,agentThought:y,setAgentThought:g,pendingRequest:p,setPendingRequest:l,currentTurnId:Y_,setCurrentTurnId:O_,steerQueuedTurnId:__,setSteerQueuedTurnId:N_,lastAgentEventRef:M_,lastSilenceNoticeRef:r,isAgentRunningRef:e,draftBufferRef:d,thoughtBufferRef:i,pendingRequestRef:$_,stalledPostIdRef:W_,currentTurnIdRef:J_,steerQueuedTurnIdRef:v_,thoughtExpandedRef:X_,draftExpandedRef:B_}=X8(),[z_,H_]=R({}),[A_,L_]=R(null),[Q_,k_]=R(null),[w_,y_]=R(!1),[S_,b_]=R(null),[O0,m_]=R(null),[x_,K_]=R([]),[Q0,Z0]=R(!1),A0=x_.length,J0=D(new Set),F0=D([]),F_=D(new Set),U0=D({inFlight:!1,lastAttemptAt:0,turnId:null});J0.current=new Set(x_.map((V)=>V.row_id)),F0.current=x_;let{notificationsEnabled:b0,notificationPermission:a_,toggleNotifications:Y0,notify:c_}=J8(),[I,Z_]=R(()=>new Set),[E_,B0]=R(()=>U2("workspaceOpen",!0)),q0=D(null),{editorOpen:u_,tabStripTabs:H0,tabStripActiveId:o_,previewTabs:n_,openEditor:d_,closeEditor:L0,handleTabClose:r0,handleTabActivate:X0,handleTabCloseOthers:W2,handleTabCloseAll:M0,handleTabTogglePin:P0,handleTabTogglePreview:j0,revealInExplorer:c0}=K8({onTabClosed:(V)=>q0.current?.(V)}),w0=D(null),R_=D(null);c(()=>{let V=w0.current;if(!V)return;if(R_.current)R_.current.dispose(),R_.current=null;let B=o_;if(!B)return;let A={path:B,mode:"edit"},P=l_.resolve(A)||l_.get("editor");if(!P){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let u=P.mount(V,A);R_.current=u,u.onDirtyChange?.((h)=>{C_.setDirty(B,h)}),u.onSaveRequest?.(()=>{}),u.onClose?.(()=>{L0()});let T=C_.getViewState(B);if(T&&typeof u.restoreViewState==="function")requestAnimationFrame(()=>u.restoreViewState(T));if(typeof u.onViewStateChange==="function")u.onViewStateChange((h)=>{C_.saveViewState(B,h)});return requestAnimationFrame(()=>u.focus()),()=>{if(R_.current===u)u.dispose(),R_.current=null}},[o_,L0]);let[s0,G2]=R({name:"You",avatar_url:null,avatar_background:null}),J2=D(!1),a0=D(!1),r_=D(null),E0=D(0),D0=D(0),I_=D({}),t_=D({name:null,avatar_url:null}),g_=D({currentHashtag:null,searchQuery:null}),e_=D(null),C0=D(null),I0=D(0),h0=D(0),K0=D(0),Y2=D(null),T0=D(null),p0=D(null),t0=D(0),i0=D({title:null,avatarBase:null}),Q=D(null),f=w(()=>{if(Q.current)clearTimeout(Q.current),Q.current=null;E(null)},[]);O8(30000),c(()=>{return G4()},[]),c(()=>{f_("workspaceOpen",String(E_))},[E_]),c(()=>{return()=>{f()}},[f]),c(()=>{I_.current=z_||{}},[z_]),c(()=>{t_.current=s0||{name:"You",avatar_url:null,avatar_background:null}},[s0]);let o=w((V,B,A=null)=>{if(typeof document>"u")return;let P=(V||"").trim()||"PiClaw";if(i0.current.title!==P){document.title=P;let U_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(U_&&U_.getAttribute("content")!==P)U_.setAttribute("content",P);i0.current.title=P}let u=document.getElementById("dynamic-favicon");if(!u)return;let T=u.getAttribute("data-default")||u.getAttribute("href")||"/favicon.ico",h=B||T,t=B?`${h}|${A||""}`:h;if(i0.current.avatarBase!==t){let U_=B?`${h}${h.includes("?")?"&":"?"}v=${A||Date.now()}`:h;u.setAttribute("href",U_),i0.current.avatarBase=t}},[]),V_=w((V)=>{if(!V)return;O((B)=>B.includes(V)?B:[...B,V])},[]),D_=w((V)=>{O((B)=>B.filter((A)=>A!==V))},[]);q0.current=D_;let h_=w(()=>{O([])},[]),q_=w((V,B=null,A="info",P=3000)=>{f(),E({title:V,detail:B||null,kind:A||"info"}),Q.current=setTimeout(()=>{E((u)=>u?.title===V?null:u)},P)},[f]),W0=w((V)=>{let B=B8(V,{editorOpen:u_,resolvePane:(A)=>l_.resolve(A)});if(B.kind==="open"){d_(B.path);return}if(B.kind==="toast")q_(B.title,B.detail,B.level)},[u_,d_,q_]),l0=w(()=>{let V=o_;if(V)V_(V)},[o_,V_]),f0=w((V)=>{if(!V)return;U((B)=>B.includes(V)?B:[...B,V])},[]),o0=w(async(V)=>{let B=(P)=>{P.scrollIntoView({behavior:"smooth",block:"center"}),P.classList.add("post-highlight"),setTimeout(()=>P.classList.remove("post-highlight"),2000)},A=document.getElementById("post-"+V);if(A){B(A);return}try{let u=(await R3(V))?.thread?.[0];if(!u)return;$0((T)=>{if(!T)return[u];if(T.some((h)=>h.id===u.id))return T;return[...T,u]}),requestAnimationFrame(()=>{setTimeout(()=>{let T=document.getElementById("post-"+V);if(T)B(T)},50)})}catch(P){console.error("[scrollToMessage] Failed to fetch message",V,P)}},[]),N2=w((V)=>{U((B)=>B.filter((A)=>A!==V))},[]),V2=w(()=>{U([])},[]),s_=w((V={})=>{let B=Date.now();if(M_.current=B,V.running)e.current=!0,Z0((A)=>A?A:!0);if(V.clearSilence)r.current=0},[Z0]),P_=w(()=>{if(p0.current)clearTimeout(p0.current),p0.current=null;t0.current=0},[]);c(()=>()=>{P_()},[P_]);let G0=w(()=>{P_(),F((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:B,lastActivity:A,...P}=V;return P})},[P_]),e0=w((V)=>{if(!V)return;P_();let B=Date.now();t0.current=B,F({type:V.type||"active",last_activity:!0}),p0.current=setTimeout(()=>{if(t0.current!==B)return;F((A)=>{if(!A||!(A.last_activity||A.lastActivity))return A;return null})},G8)},[P_]),p_=w(()=>{e.current=!1,Z0(!1),M_.current=null,r.current=0,d.current="",i.current="",$_.current=null,T0.current=null,J_.current=null,v_.current=null,U0.current={inFlight:!1,lastAttemptAt:0,turnId:null},P_(),O_(null),N_(null),X_.current=!1,B_.current=!1},[P_,O_,N_,Z0]),_0=w((V)=>{if(!V)return;if(J_.current===V)return;J_.current=V,U0.current={inFlight:!1,lastAttemptAt:0,turnId:V},O_(V),v_.current=null,N_(null),d.current="",i.current="",M({text:"",totalLines:0}),S(""),g({text:"",totalLines:0}),l(null),$_.current=null,T0.current=null,X_.current=!1,B_.current=!1},[O_,N_]),v0=w((V)=>{if(typeof document<"u"){let U_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&U_)return}let B=T0.current;if(!B||!B.post)return;if(V&&B.turnId&&B.turnId!==V)return;let A=B.post;if(A.id&&Y2.current===A.id)return;let P=String(A?.data?.content||"").trim();if(!P)return;Y2.current=A.id||Y2.current,T0.current=null;let u=P.replace(/\s+/g," ").slice(0,200),T=I_.current||{},t=(A?.data?.agent_id?T[A.data.agent_id]:null)?.name||"Pi";c_(t,u)},[c_]),z0=w(async(V,B)=>{if(V!=="thought"&&V!=="draft")return;let A=J_.current;if(V==="thought"){if(X_.current=B,A)try{await Q8(A,"thought",B)}catch(P){console.warn("Failed to update thought visibility:",P)}if(!B)return;try{let P=A?await z8(A,"thought"):null;if(P?.text)i.current=P.text;g((u)=>({...u||{text:"",totalLines:0},fullText:i.current||u?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:u?.totalLines||0}))}catch(P){console.warn("Failed to fetch full thought:",P)}return}if(B_.current=B,A)try{await Q8(A,"draft",B)}catch(P){console.warn("Failed to update draft visibility:",P)}if(!B)return;try{let P=A?await z8(A,"draft"):null;if(P?.text)d.current=P.text;M((u)=>({...u||{text:"",totalLines:0},fullText:d.current||u?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:u?.totalLines||0}))}catch(P){console.warn("Failed to fetch full draft:",P)}},[]),S0=D(null),O2=w(()=>{let V=e_.current;if(!V)return;if(!(Math.abs(V.scrollTop)>150))V.scrollTop=0},[]);S0.current=O2;let C2=w((V)=>{let B=e_.current;if(!B||typeof V!=="function"){V?.();return}let{currentHashtag:A,searchQuery:P}=g_.current||{},u=!(P&&!A),T=u?B.scrollHeight-B.scrollTop:B.scrollTop;V(),requestAnimationFrame(()=>{let h=e_.current;if(!h)return;if(u){let t=Math.max(h.scrollHeight-T,0);h.scrollTop=t}else{let t=Math.max(h.scrollHeight-h.clientHeight,0),U_=Math.min(T,t);h.scrollTop=U_}})},[]),X2=w((V)=>{let B=e_.current;if(!B||typeof V!=="function"){V?.();return}let A=B.scrollTop;V(),requestAnimationFrame(()=>{let P=e_.current;if(!P)return;let u=Math.max(P.scrollHeight-P.clientHeight,0);P.scrollTop=Math.min(A,u)})},[]),K1="Queued as a follow-up (one-at-a-time).",W1="⁣",j2=w((V)=>{if(!V||!Array.isArray(V))return V;let B=J0.current,A=new Set(B),P=V.filter((u)=>{if(A.has(u?.id))return!1;if(u?.data?.is_bot_message){let T=u?.data?.content;if(T===K1||T===W1)return!1}return!0});return P.length===V.length?V:P},[]),{posts:f2,setPosts:$0,hasMore:G1,setHasMore:B2,hasMoreRef:v2,loadPosts:R0,refreshTimeline:N0,loadMore:N1,loadMoreRef:k2}=Y8({preserveTimelineScroll:C2,preserveTimelineScrollTop:X2}),_2=V0(()=>j2(f2),[f2,x_,j2]),W=w(()=>{let V=W_.current;if(!V)return;$0((B)=>B?B.filter((A)=>A.id!==V):B),W_.current=null},[$0]),{handleSplitterMouseDown:z,handleSplitterTouchStart:C,handleEditorSplitterMouseDown:k,handleEditorSplitterTouchStart:m,handleDockSplitterMouseDown:n,handleDockSplitterTouchStart:a}=j8({appShellRef:C0,sidebarWidthRef:I0,editorWidthRef:h0,dockHeightRef:K0}),s=w(()=>{if(!e.current)return;e.current=!1,r.current=0,M_.current=null,J_.current=null,O_(null),X_.current=!1,B_.current=!1;let V=(d.current||"").trim();if(d.current="",i.current="",M({text:"",totalLines:0}),S(""),g({text:"",totalLines:0}),l(null),$_.current=null,T0.current=null,!V){F({type:"error",title:"Response stalled - No content received"});return}let A=`${V}${`

⚠️ Response may be incomplete - the model stopped responding`}`,P=Date.now(),u=new Date().toISOString(),T={id:P,timestamp:u,data:{type:"agent_response",content:A,agent_id:"default",is_local_stall:!0}};W_.current=P,$0((h)=>h?I2([...h,T]):[T]),S0.current?.(),F(null)},[O_]);c(()=>{g_.current={currentHashtag:Z,searchQuery:X}},[Z,X]);let v=w(()=>{s6().then((V)=>{let B=F_.current,A=Array.isArray(V?.items)?V.items.map((P)=>({...P})).filter((P)=>!B.has(P.row_id)):[];if(A.length){K_((P)=>{if(P.length===A.length&&P.every((u,T)=>u.row_id===A[T].row_id))return P;return A});return}B.clear(),K_((P)=>P.length===0?P:[])}).catch(()=>{K_((V)=>V.length===0?V:[])})},[K_]),j_=w(async()=>{try{let V=await $3();if(V)m_(V)}catch(V){console.warn("Failed to fetch agent context:",V)}},[]),T_=w(async()=>{try{let V=await U8("web:default");if(!V||V.status!=="active"||!V.data){if(a0.current){let{currentHashtag:P,searchQuery:u}=g_.current||{};if(!P&&!u)N0()}return a0.current=!1,p_(),F(null),M({text:"",totalLines:0}),S(""),g({text:"",totalLines:0}),l(null),$_.current=null,V??null}a0.current=!0;let B=V.data,A=B.turn_id||B.turnId;if(A)_0(A);if(s_({running:!0,clearSilence:!0}),G0(),F(B),V.thought&&V.thought.text)g((P)=>{if(P&&P.text&&P.text.length>=V.thought.text.length)return P;return i.current=V.thought.text,{text:V.thought.text,totalLines:V.thought.totalLines||0}});if(V.draft&&V.draft.text)M((P)=>{if(P&&P.text&&P.text.length>=V.draft.text.length)return P;return d.current=V.draft.text,{text:V.draft.text,totalLines:V.draft.totalLines||0}});return V}catch(V){return console.warn("Failed to fetch agent status:",V),null}},[p_,G0,s_,N0,_0]),x0=w(async()=>{if(!e.current)return null;if($_.current)return null;let V=J_.current||null,B=U0.current,A=Date.now();if(B.inFlight)return null;if(B.turnId===V&&A-B.lastAttemptAt<e1)return null;B.inFlight=!0,B.lastAttemptAt=A,B.turnId=V;try{let{currentHashtag:P,searchQuery:u}=g_.current||{};if(!P&&!u)await N0();return await v(),await T_()}finally{B.inFlight=!1}},[T_,v,N0]);c(()=>{let V=Math.min(1000,Math.max(100,Math.floor(t1/2))),B=setInterval(()=>{if(!e.current)return;if($_.current)return;let A=M_.current;if(!A)return;let P=Date.now(),u=P-A;if(u>=W8){F({type:"waiting",title:"Re-syncing after a quiet period…"}),x0();return}if(u>=t1){if(P-r.current>=e1){let T=Math.floor(u/1000);F({type:"waiting",title:`Waiting for model… No events for ${T}s`}),r.current=P,x0()}}},V);return()=>clearInterval(B)},[x0]);let g0=w((V)=>{if($(V),V!=="connected"){F(null),M({text:"",totalLines:0}),S(""),g({text:"",totalLines:0}),l(null),$_.current=null,p_();return}if(!J2.current){J2.current=!0,T_();return}let{currentHashtag:B,searchQuery:A}=g_.current;if(!B&&!A)N0();T_()},[p_,N0,T_]),H8=w(async(V)=>{J(V),$0(null),await R0(V)},[R0]),L8=w(async()=>{J(null),Y(null),$0(null),await R0()},[R0]),F8=w(async(V)=>{if(!V||!V.trim())return;Y(V.trim()),J(null),$0(null);try{let B=await n6(V.trim());$0(B.results),B2(!1)}catch(B){console.error("Failed to search:",B),$0([])}},[]),E8=w(()=>{G(!0),Y(null),J(null),$0([])},[]),D8=w(()=>{G(!1),Y(null),R0()},[R0]),$5=w(()=>{},[]),C8=w(async(V)=>{if(!V)return;let B=V.id,A=_2?.filter((u)=>u?.data?.thread_id===B&&u?.id!==B).length||0;if(A>0){if(!window.confirm(`Delete this message and its ${A} replies?`))return}let P=(u)=>{if(!u.length)return;Z_((h)=>{let t=new Set(h);return u.forEach((U_)=>t.add(U_)),t}),setTimeout(()=>{if(X2(()=>{$0((h)=>h?h.filter((t)=>!u.includes(t.id)):h)}),Z_((h)=>{let t=new Set(h);return u.forEach((U_)=>t.delete(U_)),t}),v2.current)k2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let u=await q8(B,A>0);if(u?.ids?.length)P(u.ids)}catch(u){let T=u?.message||"";if(A===0&&T.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let t=await q8(B,!0);if(t?.ids?.length)P(t.ids);return}console.error("Failed to delete post:",u),alert(`Failed to delete message: ${T}`)}},[_2,X2]),Z3=w(async()=>{try{let V=await d6();H_(N8(V));let B=V?.user||{};G2((P)=>{let u=typeof B.name==="string"&&B.name.trim()?B.name.trim():"You",T=typeof B.avatar_url==="string"?B.avatar_url.trim():null,h=typeof B.avatar_background==="string"&&B.avatar_background.trim()?B.avatar_background.trim():null;if(P.name===u&&P.avatar_url===T&&P.avatar_background===h)return P;return{name:u,avatar_url:T,avatar_background:h}});let A=(V?.agents||[]).find((P)=>P.id==="default");if(A?.model)L_(A.model);o(A?.name,A?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=await $3();if(V)m_(V)}catch{}},[o]);c(()=>{Z3();let V=H2("sidebarWidth",null),B=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(I0.current=B,C0.current)C0.current.style.setProperty("--sidebar-width",`${B}px`)},[Z3]);let k8=Q0||b!==null,J3=w((V)=>{if(!V||typeof V!=="object")return;let B=V.agent_id;if(!B)return;let{agent_name:A,agent_avatar:P}=V;if(!A&&P===void 0)return;let u=I_.current?.[B]||{id:B},T=u.name||null,h=u.avatar_url??u.avatarUrl??u.avatar??null,t=!1,U_=!1;if(A&&A!==u.name)T=A,U_=!0;if(P!==void 0){let n0=typeof P==="string"?P.trim():null,X3=typeof h==="string"?h.trim():null,z2=n0||null;if(z2!==(X3||null))h=z2,t=!0}if(!U_&&!t)return;if(H_((n0)=>{let z2={...n0[B]||{id:B}};if(U_)z2.name=T;if(t)z2.avatar_url=h;return{...n0,[B]:z2}}),B==="default")o(T,h,t?Date.now():null)},[o]),Y3=w((V)=>{if(!V||typeof V!=="object")return;let B=V.user_name??V.userName,A=V.user_avatar??V.userAvatar,P=V.user_avatar_background??V.userAvatarBackground;if(B===void 0&&A===void 0&&P===void 0)return;G2((u)=>{let T=typeof B==="string"&&B.trim()?B.trim():u.name||"You",h=A===void 0?u.avatar_url:typeof A==="string"&&A.trim()?A.trim():null,t=P===void 0?u.avatar_background:typeof P==="string"&&P.trim()?P.trim():null;if(u.name===T&&u.avatar_url===h&&u.avatar_background===t)return u;return{name:T,avatar_url:h,avatar_background:t}})},[]),V1=w((V)=>{if(!V||typeof V!=="object")return;let B=V.model??V.current;if(B!==void 0)L_(B);if(V.thinking_level!==void 0)k_(V.thinking_level??null);if(V.supports_thinking!==void 0)y_(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)b_(V.provider_usage??null)},[]),y2=w(()=>{r6().then((V)=>{if(V)V1(V)}).catch(()=>{})},[V1]),y8=w((V)=>{let B=V?.row_id;if(B==null)return;F_.current.add(B),K_((A)=>A.filter((P)=>P?.row_id!==B)),a6(B).then(()=>{v()}).catch((A)=>{console.warn("[queue] Failed to steer queued item:",A),q_("Failed to steer message","The queued message could not be sent as steering.","warning"),F_.current.delete(B),v()})},[v,K_,q_]),A8=w((V)=>{let B=V?.row_id;if(B==null)return;F_.current.add(B),K_((A)=>A.filter((P)=>P?.row_id!==B)),t6(B).then(()=>{v()}).catch((A)=>{console.warn("[queue] Failed to remove queued item:",A),q_("Failed to remove message","The queued message could not be removed.","warning"),F_.current.delete(B),v()})},[v,K_,q_]),b8=w((V)=>{if(!V||typeof V!=="object")return;if(V?.queued==="followup"||V?.queued==="steer"){v();return}let B=V?.command;if(B&&typeof B==="object"&&(B?.queued_followup||B?.queued_steer))v()},[v]),O1=w(()=>{y2(),v()},[y2,v]);c(()=>{O1();let V=setInterval(()=>{y2(),v()},60000);return()=>clearInterval(V)},[O1,y2,v]);let B1=w((V,B)=>{let A=B?.turn_id;if(J3(B),Y3(B),V==="ui_theme"){N4(B);return}if(V?.startsWith("agent_")){if(!(V==="agent_draft_delta"||V==="agent_thought_delta"||V==="agent_draft"||V==="agent_thought"))G0()}if(V==="connected"){F(null),M({text:"",totalLines:0}),S(""),g({text:"",totalLines:0}),l(null),$_.current=null,p_(),U8("web:default").then((t)=>{if(!t||t.status!=="active"||!t.data)return;let U_=t.data,n0=U_.turn_id||U_.turnId;if(n0)_0(n0);if(s_({clearSilence:!0}),e0(U_),t.thought&&t.thought.text)i.current=t.thought.text,g({text:t.thought.text,totalLines:t.thought.totalLines||0});if(t.draft&&t.draft.text)d.current=t.draft.text,M({text:t.draft.text,totalLines:t.draft.totalLines||0})}).catch((t)=>{console.warn("Failed to fetch agent status:",t)});let{currentHashtag:T,searchQuery:h}=g_.current||{};if(!T&&!h)N0();O1();return}if(V==="agent_status"){if(B.type==="done"||B.type==="error"){if(A&&J_.current&&A!==J_.current)return;if(B.type==="done"){v0(A||J_.current);let{currentHashtag:T,searchQuery:h}=g_.current||{};if(!T&&!h)N0();if(B.context_usage)m_(B.context_usage)}if(a0.current=!1,p_(),F_.current.clear(),v(),M({text:"",totalLines:0}),S(""),g({text:"",totalLines:0}),l(null),B.type==="error")F({type:"error",title:B.title||"Agent error"}),setTimeout(()=>F(null),8000);else F(null)}else{if(A)_0(A);if(s_({running:!0,clearSilence:!0}),B.type==="thinking")d.current="",i.current="",M({text:"",totalLines:0}),S(""),g({text:"",totalLines:0});r_.current=B,F((T)=>{if(T&&T.type===B.type&&T.title===B.title)return T;return B})}return}if(V==="agent_steer_queued"){if(A&&J_.current&&A!==J_.current)return;let T=A||J_.current;if(!T)return;v_.current=T,N_(T);return}if(V==="agent_followup_queued"){let T=B?.row_id,h=B?.content;if(T!=null&&typeof h==="string"&&h.trim())K_((t)=>{if(t.some((U_)=>U_?.row_id===T))return t;return[...t,{row_id:T,content:h,timestamp:B?.timestamp||null,thread_id:B?.thread_id??null}]});v();return}if(V==="agent_followup_consumed"){let T=B?.row_id;if(T!=null)K_((h)=>h.filter((t)=>t.row_id!==T));v(),N0();return}if(V==="agent_followup_removed"){let T=B?.row_id;if(T!=null)F_.current.add(T),K_((h)=>h.filter((t)=>t.row_id!==T));v();return}if(V==="agent_draft_delta"){if(A&&J_.current&&A!==J_.current)return;if(A&&!J_.current)_0(A);if(s_({running:!0,clearSilence:!0}),B?.reset)d.current="";if(B?.delta)d.current+=B.delta;let T=Date.now();if(!E0.current||T-E0.current>=100){E0.current=T;let h=d.current,t=_3(h);if(B_.current)M((U_)=>({text:U_?.text||"",totalLines:t,fullText:h}));else M({text:h,totalLines:t})}return}if(V==="agent_draft"){if(A&&J_.current&&A!==J_.current)return;if(A&&!J_.current)_0(A);s_({running:!0,clearSilence:!0});let T=B.text||"",h=B.mode||(B.kind==="plan"?"replace":"append"),t=Number.isFinite(B.total_lines)?B.total_lines:T?T.replace(/\r\n/g,`
`).split(`
`).length:0;if(B.kind==="plan")if(h==="replace")S(T);else S((U_)=>(U_||"")+T);else if(!B_.current)d.current=T,M({text:T,totalLines:t});return}if(V==="agent_thought_delta"){if(A&&J_.current&&A!==J_.current)return;if(A&&!J_.current)_0(A);if(s_({running:!0,clearSilence:!0}),B?.reset)i.current="";if(typeof B?.delta==="string")i.current+=B.delta;let T=Date.now();if(X_.current&&(!D0.current||T-D0.current>=100)){D0.current=T;let h=i.current;g((t)=>({text:t?.text||"",totalLines:_3(h),fullText:h}))}return}if(V==="agent_thought"){if(A&&J_.current&&A!==J_.current)return;if(A&&!J_.current)_0(A);s_({running:!0,clearSilence:!0});let T=B.text||"",h=Number.isFinite(B.total_lines)?B.total_lines:T?T.replace(/\r\n/g,`
`).split(`
`).length:0;if(!X_.current)i.current=T,g({text:T,totalLines:h});return}if(V==="agent_request"){if(console.log("Agent request:",B),A&&J_.current&&A!==J_.current)return;if(A)_0(A);s_({running:!0,clearSilence:!0}),l(B),$_.current=B;return}if(V==="agent_request_timeout"){if(console.log("Agent request timeout:",B),A&&J_.current&&A!==J_.current)return;l(null),$_.current=null,p_(),F({type:"error",title:"Permission request timed out"});return}if(V==="model_changed"){if(B?.model!==void 0)L_(B.model);if(B?.thinking_level!==void 0)k_(B.thinking_level??null);if(B?.supports_thinking!==void 0)y_(Boolean(B.supports_thinking));$3().then((T)=>{if(T)m_(T)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:B}));return}let{currentHashtag:P,searchQuery:u}=g_.current;if(V==="agent_response")W(),T0.current={post:B,turnId:J_.current};if(!P&&!u&&(V==="new_post"||V==="agent_response"))$0((T)=>{if(!T)return[B];if(T.some((h)=>h.id===B.id))return T;return[...T,B]}),S0.current?.();if(V==="interaction_updated")$0((T)=>{if(!T)return T;if(!T.some((h)=>h.id===B.id))return T;return T.map((h)=>h.id===B.id?B:h)});if(V==="interaction_deleted"){let T=B?.ids||[];if(T.length){X2(()=>{$0((U_)=>U_?U_.filter((n0)=>!T.includes(n0.id)):U_)});let{currentHashtag:h,searchQuery:t}=g_.current;if(v2.current&&!h&&!t)k2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[p_,G0,k2,s_,v0,X2,N0,W,_0,e0,J3,Y3,y2,v,K_]);c(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=B1,V.reset=()=>{W(),p_(),F(null),M({text:"",totalLines:0}),S(""),g({text:"",totalLines:0}),l(null)},V.finalize=()=>s(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[p_,s,B1,W]),Z8({handleSseEvent:B1,handleConnectionStatusChange:g0,loadPosts:R0}),c(()=>{if(!_2||_2.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let B=V.slice(5);o0(B),history.replaceState(null,"",location.pathname+location.search)},[_2,o0]);let q1=b!==null;c(()=>{if(_!=="connected")return;let B=setInterval(()=>{let{currentHashtag:A,searchQuery:P}=g_.current||{},u=!A&&!P;if(q1){if(u)N0();v(),T_(),j_()}else{if(u)N0();T_(),j_()}},q1?15000:60000);return()=>clearInterval(B)},[_,q1,T_,j_,v,N0]);let M8=w(()=>{B0((V)=>!V)},[]);c(()=>{if(!u_)return;if(typeof window>"u")return;let V=C0.current;if(!V)return;if(!h0.current){let B=H2("editorWidth",null),A=I0.current||280;h0.current=Number.isFinite(B)?B:A}if(V.style.setProperty("--editor-width",`${h0.current}px`),!K0.current){let B=H2("dockHeight",null);K0.current=Number.isFinite(B)?B:200}V.style.setProperty("--dock-height",`${K0.current}px`)},[u_]);let q2=l_.getDockPanes().length>0,[z1,P8]=R(!1),R2=w(()=>P8((V)=>!V),[]);c(()=>{if(!q2)return;let V=(B)=>{if(B.ctrlKey&&B.key==="`")B.preventDefault(),R2()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[R2,q2]);let w8=Boolean(__&&__===(b?.turn_id||Y_));return q`
        <div class=${`app-shell${E_?"":" workspace-collapsed"}${u_?" editor-open":""}`} ref=${C0}>
            <${t4}
                onFileSelect=${V_}
                visible=${E_}
                active=${E_||u_}
                onOpenEditor=${d_}
            />
            <button
                class=${`workspace-toggle-tab${E_?" open":" closed"}`}
                onClick=${M8}
                title=${E_?"Hide workspace":"Show workspace"}
                aria-label=${E_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${z} onTouchStart=${C}></div>
            ${u_&&q`
                <div class="editor-pane-container">
                    <${e4}
                        tabs=${H0}
                        activeId=${o_}
                        onActivate=${X0}
                        onClose=${r0}
                        onCloseOthers=${W2}
                        onCloseAll=${M0}
                        onTogglePin=${P0}
                        onTogglePreview=${j0}
                        previewTabs=${n_}
                        onToggleDock=${q2?R2:void 0}
                        dockVisible=${q2&&z1}
                    />
                    <div class="editor-pane-host" ref=${w0}></div>
                    ${o_&&n_.has(o_)&&q`
                        <${$8}
                            getContent=${()=>R_.current?.getContent?.()}
                            path=${o_}
                            onClose=${()=>j0(o_)}
                        />
                    `}
                    ${q2&&z1&&q`<div class="dock-splitter" onMouseDown=${n} onTouchStart=${a}></div>`}
                    ${q2&&q`<div class=${`dock-panel${z1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${R2} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
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
                <div class="editor-splitter" onMouseDown=${k} onTouchStart=${m}></div>
            `}
            <div class="container">
                ${X&&V8()&&q`<div class="search-results-spacer"></div>`}
                ${(Z||X)&&q`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${L8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${Z?`#${Z}`:`Search: ${X}`}</span>
                    </div>
                `}
                <${x4}
                    posts=${_2}
                    hasMore=${G1}
                    onLoadMore=${N1}
                    timelineRef=${e_}
                    onHashtagClick=${H8}
                    onMessageRef=${f0}
                    onScrollToMessage=${o0}
                    onFileRef=${W0}
                    onPostClick=${void 0}
                    onDeletePost=${C8}
                    emptyMessage=${Z?`No posts with #${Z}`:X?`No results for "${X}"`:void 0}
                    agents=${z_}
                    user=${s0}
                    reverse=${!(X&&!Z)}
                    removingPostIds=${I}
                    searchQuery=${X}
                />
                <${k4}
                    status=${b}
                    draft=${x}
                    plan=${H}
                    thought=${y}
                    pendingRequest=${p}
                    intent=${L}
                    turnId=${Y_}
                    steerQueued=${w8}
                    onPanelToggle=${z0}
                />
                <${Z4}
                    onPost=${()=>{R0(),O2()}}
                    onFocus=${O2}
                    searchMode=${j}
                    onSearch=${F8}
                    onEnterSearch=${E8}
                    onExitSearch=${D8}
                    fileRefs=${N}
                    onRemoveFileRef=${D_}
                    onClearFileRefs=${h_}
                    messageRefs=${K}
                    onRemoveMessageRef=${N2}
                    onClearMessageRefs=${V2}
                    activeEditorPath=${o_}
                    onAttachEditorFile=${l0}
                    onOpenFilePill=${W0}
                    followupQueueCount=${A0}
                    followupQueueItems=${x_}
                    onInjectQueuedFollowup=${y8}
                    onRemoveQueuedFollowup=${A8}
                    onMessageResponse=${b8}
                    isAgentActive=${k8}
                    activeModel=${A_}
                    modelUsage=${S_}
                    thinkingLevel=${Q_}
                    supportsThinking=${w_}
                    contextUsage=${O0}
                    notificationsEnabled=${b0}
                    notificationPermission=${a_}
                    onToggleNotifications=${Y0}
                    onModelChange=${L_}
                    onModelStateChange=${V1}
                />
                <${A4} status=${_} />
                <${y4}
                    request=${p}
                    onRespond=${()=>{l(null),$_.current=null}}
                />
            </div>
        </div>
    `}S3(q`<${_5} />`,document.getElementById("app"));

//# debugId=878EC2EB0E9D2E0464756E2164756E21
//# sourceMappingURL=app.bundle.js.map
