var H9=Object.defineProperty;var J9=(_)=>_;function D9(_,$){this[_]=J9.bind(null,$)}var E9=(_,$)=>{for(var j in $)H9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:D9.bind($,j)})};var k9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var t2,s_,k3,y9,l$,V3,y3,A3,w3,T1,I1,b1,A9,s2={},r2=[],w9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,e2=Array.isArray;function M$(_,$){for(var j in $)_[j]=$[j];return _}function S1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function P3(_,$,j){var Z,N,z,K={};for(z in $)z=="key"?Z=$[z]:z=="ref"?N=$[z]:K[z]=$[z];if(arguments.length>2&&(K.children=arguments.length>3?t2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(z in _.defaultProps)K[z]===void 0&&(K[z]=_.defaultProps[z]);return n2(_,K,Z,N,null)}function n2(_,$,j,Z,N){var z={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++k3:N,__i:-1,__u:0};return N==null&&s_.vnode!=null&&s_.vnode(z),z}function _1(_){return _.children}function d2(_,$){this.props=_,this.context=$}function U2(_,$){if($==null)return _.__?U2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?U2(_):null}function P9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],z=M$({},$);z.__v=$.__v+1,s_.vnode&&s_.vnode(z),f1(_.__P,z,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?U2($):j,!!(32&$.__u),N),z.__v=$.__v,z.__.__k[z.__i]=z,x3(Z,z,N),$.__e=$.__=null,z.__e!=j&&M3(z)}}function M3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),M3(_)}function X3(_){(!_.__d&&(_.__d=!0)&&l$.push(_)&&!a2.__r++||V3!=s_.debounceRendering)&&((V3=s_.debounceRendering)||y3)(a2)}function a2(){try{for(var _,$=1;l$.length;)l$.length>$&&l$.sort(A3),_=l$.shift(),$=l$.length,P9(_)}finally{l$.length=a2.__r=0}}function I3(_,$,j,Z,N,z,K,X,L,q,O){var G,F,I,p,u,R,A,H=Z&&Z.__k||r2,x=$.length;for(L=M9(j,$,H,L,x),G=0;G<x;G++)(I=j.__k[G])!=null&&(F=I.__i!=-1&&H[I.__i]||s2,I.__i=G,R=f1(_,I,F,N,z,K,X,L,q,O),p=I.__e,I.ref&&F.ref!=I.ref&&(F.ref&&R1(F.ref,null,I),O.push(I.ref,I.__c||p,I)),u==null&&p!=null&&(u=p),(A=!!(4&I.__u))||F.__k===I.__k?L=b3(I,L,_,A):typeof I.type=="function"&&R!==void 0?L=R:p&&(L=p.nextSibling),I.__u&=-7);return j.__e=u,L}function M9(_,$,j,Z,N){var z,K,X,L,q,O=j.length,G=O,F=0;for(_.__k=Array(N),z=0;z<N;z++)(K=$[z])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[z]=n2(null,K,null,null,null):e2(K)?K=_.__k[z]=n2(_1,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[z]=n2(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[z]=K,L=z+F,K.__=_,K.__b=_.__b+1,X=null,(q=K.__i=I9(K,j,L,G))!=-1&&(G--,(X=j[q])&&(X.__u|=2)),X==null||X.__v==null?(q==-1&&(N>O?F--:N<O&&F++),typeof K.type!="function"&&(K.__u|=4)):q!=L&&(q==L-1?F--:q==L+1?F++:(q>L?F--:F++,K.__u|=4))):_.__k[z]=null;if(G)for(z=0;z<O;z++)(X=j[z])!=null&&(2&X.__u)==0&&(X.__e==Z&&(Z=U2(X)),T3(X,X));return Z}function b3(_,$,j,Z){var N,z;if(typeof _.type=="function"){for(N=_.__k,z=0;N&&z<N.length;z++)N[z]&&(N[z].__=_,$=b3(N[z],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=U2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function I9(_,$,j,Z){var N,z,K,X=_.key,L=_.type,q=$[j],O=q!=null&&(2&q.__u)==0;if(q===null&&X==null||O&&X==q.key&&L==q.type)return j;if(Z>(O?1:0)){for(N=j-1,z=j+1;N>=0||z<$.length;)if((q=$[K=N>=0?N--:z++])!=null&&(2&q.__u)==0&&X==q.key&&L==q.type)return K}return-1}function q3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||w9.test($)?j:j+"px"}function l2(_,$,j,Z,N){var z,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||q3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||q3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")z=$!=($=$.replace(w3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+z]=j,j?Z?j.u=Z.u:(j.u=T1,_.addEventListener($,z?b1:I1,z)):_.removeEventListener($,z?b1:I1,z);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(X){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function L3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=T1++;else if($.t<j.u)return;return j(s_.event?s_.event($):$)}}}function f1(_,$,j,Z,N,z,K,X,L,q){var O,G,F,I,p,u,R,A,H,x,b,i,n,e,d,N_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),z=[X=$.__e=j.__e]),(O=s_.__b)&&O($);_:if(typeof N_=="function")try{if(A=$.props,H=N_.prototype&&N_.prototype.render,x=(O=N_.contextType)&&Z[O.__c],b=O?x?x.props.value:O.__:Z,j.__c?R=(G=$.__c=j.__c).__=G.__E:(H?$.__c=G=new N_(A,b):($.__c=G=new d2(A,b),G.constructor=N_,G.render=x9),x&&x.sub(G),G.state||(G.state={}),G.__n=Z,F=G.__d=!0,G.__h=[],G._sb=[]),H&&G.__s==null&&(G.__s=G.state),H&&N_.getDerivedStateFromProps!=null&&(G.__s==G.state&&(G.__s=M$({},G.__s)),M$(G.__s,N_.getDerivedStateFromProps(A,G.__s))),I=G.props,p=G.state,G.__v=$,F)H&&N_.getDerivedStateFromProps==null&&G.componentWillMount!=null&&G.componentWillMount(),H&&G.componentDidMount!=null&&G.__h.push(G.componentDidMount);else{if(H&&N_.getDerivedStateFromProps==null&&A!==I&&G.componentWillReceiveProps!=null&&G.componentWillReceiveProps(A,b),$.__v==j.__v||!G.__e&&G.shouldComponentUpdate!=null&&G.shouldComponentUpdate(A,G.__s,b)===!1){$.__v!=j.__v&&(G.props=A,G.state=G.__s,G.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(c){c&&(c.__=$)}),r2.push.apply(G.__h,G._sb),G._sb=[],G.__h.length&&K.push(G);break _}G.componentWillUpdate!=null&&G.componentWillUpdate(A,G.__s,b),H&&G.componentDidUpdate!=null&&G.__h.push(function(){G.componentDidUpdate(I,p,u)})}if(G.context=b,G.props=A,G.__P=_,G.__e=!1,i=s_.__r,n=0,H)G.state=G.__s,G.__d=!1,i&&i($),O=G.render(G.props,G.state,G.context),r2.push.apply(G.__h,G._sb),G._sb=[];else do G.__d=!1,i&&i($),O=G.render(G.props,G.state,G.context),G.state=G.__s;while(G.__d&&++n<25);G.state=G.__s,G.getChildContext!=null&&(Z=M$(M$({},Z),G.getChildContext())),H&&!F&&G.getSnapshotBeforeUpdate!=null&&(u=G.getSnapshotBeforeUpdate(I,p)),e=O!=null&&O.type===_1&&O.key==null?C3(O.props.children):O,X=I3(_,e2(e)?e:[e],$,j,Z,N,z,K,X,L,q),G.base=$.__e,$.__u&=-161,G.__h.length&&K.push(G),R&&(G.__E=G.__=null)}catch(c){if($.__v=null,L||z!=null)if(c.then){for($.__u|=L?160:128;X&&X.nodeType==8&&X.nextSibling;)X=X.nextSibling;z[z.indexOf(X)]=null,$.__e=X}else{for(d=z.length;d--;)S1(z[d]);x1($)}else $.__e=j.__e,$.__k=j.__k,c.then||x1($);s_.__e(c,$,j)}else z==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):X=$.__e=b9(j.__e,$,j,Z,N,z,K,L,q);return(O=s_.diffed)&&O($),128&$.__u?void 0:X}function x1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(x1))}function x3(_,$,j){for(var Z=0;Z<j.length;Z++)R1(j[Z],j[++Z],j[++Z]);s_.__c&&s_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(z){z.call(N)})}catch(z){s_.__e(z,N.__v)}})}function C3(_){return typeof _!="object"||_==null||_.__b>0?_:e2(_)?_.map(C3):M$({},_)}function b9(_,$,j,Z,N,z,K,X,L){var q,O,G,F,I,p,u,R=j.props||s2,A=$.props,H=$.type;if(H=="svg"?N="http://www.w3.org/2000/svg":H=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),z!=null){for(q=0;q<z.length;q++)if((I=z[q])&&"setAttribute"in I==!!H&&(H?I.localName==H:I.nodeType==3)){_=I,z[q]=null;break}}if(_==null){if(H==null)return document.createTextNode(A);_=document.createElementNS(N,H,A.is&&A),X&&(s_.__m&&s_.__m($,z),X=!1),z=null}if(H==null)R===A||X&&_.data==A||(_.data=A);else{if(z=z&&t2.call(_.childNodes),!X&&z!=null)for(R={},q=0;q<_.attributes.length;q++)R[(I=_.attributes[q]).name]=I.value;for(q in R)I=R[q],q=="dangerouslySetInnerHTML"?G=I:q=="children"||(q in A)||q=="value"&&("defaultValue"in A)||q=="checked"&&("defaultChecked"in A)||l2(_,q,null,I,N);for(q in A)I=A[q],q=="children"?F=I:q=="dangerouslySetInnerHTML"?O=I:q=="value"?p=I:q=="checked"?u=I:X&&typeof I!="function"||R[q]===I||l2(_,q,I,R[q],N);if(O)X||G&&(O.__html==G.__html||O.__html==_.innerHTML)||(_.innerHTML=O.__html),$.__k=[];else if(G&&(_.innerHTML=""),I3($.type=="template"?_.content:_,e2(F)?F:[F],$,j,Z,H=="foreignObject"?"http://www.w3.org/1999/xhtml":N,z,K,z?z[0]:j.__k&&U2(j,0),X,L),z!=null)for(q=z.length;q--;)S1(z[q]);X||(q="value",H=="progress"&&p==null?_.removeAttribute("value"):p!=null&&(p!==_[q]||H=="progress"&&!p||H=="option"&&p!=R[q])&&l2(_,q,p,R[q],N),q="checked",u!=null&&u!=_[q]&&l2(_,q,u,R[q],N))}return _}function R1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){s_.__e(N,j)}}function T3(_,$,j){var Z,N;if(s_.unmount&&s_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||R1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(z){s_.__e(z,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&T3(Z[N],$,j||typeof _.type!="function");j||S1(_.__e),_.__c=_.__=_.__e=void 0}function x9(_,$,j){return this.constructor(_,j)}function S3(_,$,j){var Z,N,z,K;$==document&&($=document.documentElement),s_.__&&s_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,z=[],K=[],f1($,_=(!Z&&j||$).__k=P3(_1,null,[_]),N||s2,s2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?t2.call($.childNodes):null,z,!Z&&j?j:N?N.__e:$.firstChild,Z,K),x3(z,_,K)}t2=r2.slice,s_={__e:function(_,$,j,Z){for(var N,z,K;$=$.__;)if((N=$.__c)&&!N.__)try{if((z=N.constructor)&&z.getDerivedStateFromError!=null&&(N.setState(z.getDerivedStateFromError(_)),K=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),K=N.__d),K)return N.__E=N}catch(X){_=X}throw _}},k3=0,y9=function(_){return _!=null&&_.constructor===void 0},d2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=M$({},this.state),typeof _=="function"&&(_=_(M$({},j),this.props)),_&&M$(j,_),_!=null&&this.__v&&($&&this._sb.push($),X3(this))},d2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),X3(this))},d2.prototype.render=_1,l$=[],y3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,A3=function(_,$){return _.__v.__b-$.__v.__b},a2.__r=0,w3=/(PointerCapture)$|Capture$/i,T1=0,I1=L3(!1),b1=L3(!0),A9=0;var M2,L0,M1,B3,I2=0,f3=[],q0=s_,O3=q0.__b,Q3=q0.__r,U3=q0.diffed,F3=q0.__c,H3=q0.unmount,J3=q0.__;function v1(_,$){q0.__h&&q0.__h(L0,_,I2||$),I2=0;var j=L0.__H||(L0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function f(_){return I2=1,C9(v3,_)}function C9(_,$,j){var Z=v1(M2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):v3(void 0,$),function(X){var L=Z.__N?Z.__N[0]:Z.__[0],q=Z.t(L,X);L!==q&&(Z.__N=[q,Z.__[1]],Z.__c.setState({}))}],Z.__c=L0,!L0.__f)){var N=function(X,L,q){if(!Z.__c.__H)return!0;var O=Z.__c.__H.__.filter(function(F){return F.__c});if(O.every(function(F){return!F.__N}))return!z||z.call(this,X,L,q);var G=Z.__c.props!==X;return O.some(function(F){if(F.__N){var I=F.__[0];F.__=F.__N,F.__N=void 0,I!==F.__[0]&&(G=!0)}}),z&&z.call(this,X,L,q)||G};L0.__f=!0;var{shouldComponentUpdate:z,componentWillUpdate:K}=L0;L0.componentWillUpdate=function(X,L,q){if(this.__e){var O=z;z=void 0,N(X,L,q),z=O}K&&K.call(this,X,L,q)},L0.shouldComponentUpdate=N}return Z.__N||Z.__}function v(_,$){var j=v1(M2++,3);!q0.__s&&R3(j.__H,$)&&(j.__=_,j.u=$,L0.__H.__h.push(j))}function k(_){return I2=5,n_(function(){return{current:_}},[])}function n_(_,$){var j=v1(M2++,7);return R3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function M(_,$){return I2=8,n_(function(){return _},$)}function T9(){for(var _;_=f3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(o2),$.__h.some(C1),$.__h=[]}catch(j){$.__h=[],q0.__e(j,_.__v)}}}q0.__b=function(_){L0=null,O3&&O3(_)},q0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),J3&&J3(_,$)},q0.__r=function(_){Q3&&Q3(_),M2=0;var $=(L0=_.__c).__H;$&&(M1===L0?($.__h=[],L0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(o2),$.__h.some(C1),$.__h=[],M2=0)),M1=L0},q0.diffed=function(_){U3&&U3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(f3.push($)!==1&&B3===q0.requestAnimationFrame||((B3=q0.requestAnimationFrame)||S9)(T9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),M1=L0=null},q0.__c=function(_,$){$.some(function(j){try{j.__h.some(o2),j.__h=j.__h.filter(function(Z){return!Z.__||C1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],q0.__e(Z,j.__v)}}),F3&&F3(_,$)},q0.unmount=function(_){H3&&H3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{o2(Z)}catch(N){$=N}}),j.__H=void 0,$&&q0.__e($,j.__v))};var D3=typeof requestAnimationFrame=="function";function S9(_){var $,j=function(){clearTimeout(Z),D3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);D3&&($=requestAnimationFrame(j))}function o2(_){var $=L0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),L0=$}function C1(_){var $=L0;_.__c=_.__(),L0=$}function R3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function v3(_,$){return typeof $=="function"?$(_):$}var u3=function(_,$,j,Z){var N;$[0]=0;for(var z=1;z<$.length;z++){var K=$[z++],X=$[z]?($[0]|=K?1:2,j[$[z++]]):$[++z];K===3?Z[0]=X:K===4?Z[1]=Object.assign(Z[1]||{},X):K===5?(Z[1]=Z[1]||{})[$[++z]]=X:K===6?Z[1][$[++z]]+=X+"":K?(N=_.apply(X,u3(_,X,j,["",null])),Z.push(N),X[0]?$[0]|=2:($[z-2]=0,$[z]=N)):Z.push(X)}return Z},E3=new Map;function f9(_){var $=E3.get(this);return $||($=new Map,E3.set(this,$)),($=u3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,z=1,K="",X="",L=[0],q=function(F){z===1&&(F||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,F,K):z===3&&(F||K)?(L.push(3,F,K),z=2):z===2&&K==="..."&&F?L.push(4,F,0):z===2&&K&&!F?L.push(5,0,!0,K):z>=5&&((K||!F&&z===5)&&(L.push(z,0,K,N),z=6),F&&(L.push(z,F,0,N),z=6)),K=""},O=0;O<j.length;O++){O&&(z===1&&q(),q(O));for(var G=0;G<j[O].length;G++)Z=j[O][G],z===1?Z==="<"?(q(),L=[L],z=3):K+=Z:z===4?K==="--"&&Z===">"?(z=1,K=""):K=Z+K[0]:X?Z===X?X="":K+=Z:Z==='"'||Z==="'"?X=Z:Z===">"?(q(),z=1):z&&(Z==="="?(z=5,N=K,K=""):Z==="/"&&(z<5||j[O][G+1]===">")?(q(),z===3&&(L=L[0]),z=L,(L=L[0]).push(2,0,z),z=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(q(),z=2):K+=Z),z===3&&K==="!--"&&(z=4,L=L[0])}return q(),L}(_)),$),arguments,[])).length>1?$:$[0]}var U=f9.bind(P3);var h0={};E9(h0,{uploadWorkspaceFile:()=>j1,uploadMedia:()=>l1,updateWorkspaceFile:()=>a9,submitAdaptiveCardAction:()=>n1,streamSidePrompt:()=>o9,steerAgentQueueItem:()=>d9,setWorkspaceVisibility:()=>S2,setAgentThoughtVisibility:()=>s1,sendPeerAgentMessage:()=>h9,sendAgentMessage:()=>F2,searchPosts:()=>m1,restoreChatBranch:()=>c9,respondToAgentRequest:()=>$1,renameWorkspaceFile:()=>$4,renameChatBranch:()=>g9,removeAgentQueueItem:()=>n9,pruneChatBranch:()=>p9,moveWorkspaceEntry:()=>j4,getWorkspaceTree:()=>T2,getWorkspaceRawUrl:()=>Z1,getWorkspaceFile:()=>t1,getWorkspaceDownloadUrl:()=>N1,getWorkspaceBranch:()=>r9,getTimeline:()=>b2,getThumbnailUrl:()=>r1,getThread:()=>g1,getPostsByHashtag:()=>u1,getMediaUrl:()=>$$,getMediaText:()=>a1,getMediaInfo:()=>H2,getMediaBlob:()=>s9,getChatBranches:()=>m9,getAgents:()=>h1,getAgentThought:()=>o1,getAgentStatus:()=>i1,getAgentQueueState:()=>l9,getAgentModels:()=>C2,getAgentContext:()=>i9,getActiveChatAgents:()=>c1,forkChatBranch:()=>x2,deleteWorkspaceFile:()=>Z4,deletePost:()=>p1,createWorkspaceFile:()=>_4,createReply:()=>u9,createPost:()=>v9,attachWorkspaceFile:()=>e1,addToWhitelist:()=>d1,SSEClient:()=>z1});async function S_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function m3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let z of $)if(z.startsWith("event:"))j=z.slice(6).trim()||"message";else if(z.startsWith("data:"))Z.push(z.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function R9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:K,done:X}=await j.read();if(X)break;N+=Z.decode(K,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let q of L){let O=m3(q);if(O)$(O.event,O.data)}}N+=Z.decode();let z=m3(N);if(z)$(z.event,z.data)}async function b2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return S_(Z)}async function u1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return S_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function m1(_,$=50,j=0,Z=null,N="current",z=null){let K=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",X=N?`&scope=${encodeURIComponent(N)}`:"",L=z?`&root_chat_jid=${encodeURIComponent(z)}`:"";return S_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${X}${L}`)}async function g1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return S_(`/thread/${_}${j}`)}async function v9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return S_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function u9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return S_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function p1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return S_(N,{method:"DELETE"})}async function F2(_,$,j=null,Z=[],N=null,z=null){let K=z?`?chat_jid=${encodeURIComponent(z)}`:"";return S_(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function c1(){return S_("/agent/active-chats")}async function m9(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return S_(`/agent/branches${Z}`)}async function x2(_,$={}){return S_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function g9(_,$={}){return S_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function p9(_){return S_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function c9(_,$={}){return S_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function h9(_,$,j,Z="auto",N={}){let z={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return S_("/agent/peer-message",{method:"POST",body:JSON.stringify(z)})}async function h1(){return S_("/agent/roster")}async function i1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/status${$}`)}async function i9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/context${$}`)}async function l9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/queue-state${$}`)}async function n9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function d9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function C2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/models${$}`)}async function l1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function $1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function n1(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function o9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let z=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(z.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await R9(j,(z,K)=>{if($.onEvent?.(z,K),z==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(z==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(z==="side_prompt_done")Z=K;else if(z==="side_prompt_error")N=K}),N){let z=Error(N?.error||"Side prompt failed");throw z.payload=N,z}return Z}async function d1(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function o1(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return S_(j)}async function s1(_,$,j){return S_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function $$(_){return`/media/${_}`}function r1(_){return`/media/${_}/thumbnail`}async function H2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function a1(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function s9(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function T2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return S_(Z)}async function r9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return S_($)}async function t1(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return S_(N)}async function a9(_,$){return S_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function e1(_){return S_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function j1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let z=N.toString(),K=z?`/workspace/upload?${z}`:"/workspace/upload",X=await fetch(""+K,{method:"POST",body:Z});if(!X.ok){let L=await X.json().catch(()=>({error:"Upload failed"})),q=Error(L.error||`HTTP ${X.status}`);throw q.status=X.status,q.code=L.code,q}return X.json()}async function _4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),z=Error(N.error||`HTTP ${Z.status}`);throw z.status=Z.status,z.code=N.code,z}return Z.json()}async function $4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function j4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function Z4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return S_($,{method:"DELETE"})}async function S2(_,$=!1){return S_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function Z1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function N1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class z1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function j$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function _0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function J2(_,$=!1){let j=j$(_);if(j===null)return $;return j==="true"}function D2(_,$=null){let j=j$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function K1(_){return String(_||"").trim().toLowerCase()}function N4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return K1($[1]||"")}function g3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=K1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function p3(_,$,j={}){let Z=N4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return g3(_).filter((z)=>{if(N&&z?.chat_jid===N)return!1;return K1(z?.agent_name).startsWith(Z)})}function z4(_){let $=K1(_);return $?`@${$} `:""}function c3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return g3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function h3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let z=460+N*68+(j?40:0);return Z>=z}function G$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:z="Remove",icon:K="file"}){let X=`${_}-file-pill`,L=`${_}-file-name`,q=`${_}-file-remove`,O=K==="message"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return U`
    <span class=${X} title=${j||$} onClick=${N}>
      ${O}
      <span class=${L}>${$}</span>
      ${Z&&U`
        <button
          class=${q}
          onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),Z()}}
          title=${z}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var t9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function e9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${i3(j)} / ${i3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,z=7,K=2*Math.PI*7,X=$/100*K,L=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return U`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${L}
                    stroke-width="2.5"
                    stroke-dasharray=${`${X} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function i3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function l3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:z,onEnterSearch:K,onExitSearch:X,fileRefs:L=[],onRemoveFileRef:q,onClearFileRefs:O,messageRefs:G=[],onRemoveMessageRef:F,onClearMessageRefs:I,activeModel:p=null,modelUsage:u=null,thinkingLevel:R=null,supportsThinking:A=!1,contextUsage:H=null,notificationsEnabled:x=!1,notificationPermission:b="default",onToggleNotifications:i,onModelChange:n,onModelStateChange:e,activeEditorPath:d=null,onAttachEditorFile:N_,onOpenFilePill:c,followupQueueItems:X_=[],onInjectQueuedFollowup:c_,onRemoveQueuedFollowup:__,onSubmitIntercept:a,onMessageResponse:Z_,onPopOutChat:$_,isAgentActive:B_=!1,activeChatAgents:M_=[],currentChatJid:W_="web:default",connectionStatus:y_="connected",onSetFileRefs:O_,onSetMessageRefs:U_,onSubmitError:f_,onSwitchChat:D_,onRenameSession:I_,onCreateSession:$0,onDeleteSession:F0,onRestoreSession:V_}){let[s,F_]=f(""),[z_,A_]=f(""),[R_,h_]=f([]),[a_,i_]=f(!1),[E_,H_]=f([]),[d_,t_]=f(0),[g_,v_]=f(!1),[V0,e_]=f([]),[l0,X0]=f(0),[b_,x_]=f(!1),[k_,k0]=f(!1),[B0,w_]=f(!1),[l_,o_]=f(!1),[C_,O0]=f([]),[C0,n0]=f(!1),[T,t]=f(0),[K_,J_]=f(null),G_=k(null),T_=k(null),f0=k(null),F$=k(null),z$=k(null),x$=k(null),y0=k(null),V$=k(null),j0=k(0),M0=200,X$=(B)=>{let P=new Set,Y=[];for(let Q of B||[]){if(typeof Q!=="string")continue;let J=Q.trim();if(!J||P.has(J))continue;P.add(J),Y.push(J)}return Y},d0=()=>{let B=j$("piclaw_compose_history");if(!B)return[];try{let P=JSON.parse(B);if(!Array.isArray(P))return[];return X$(P)}catch{return[]}},T0=(B)=>{_0("piclaw_compose_history",JSON.stringify(B))},d$=k(d0()),H0=k(-1),H$=k(""),Z0=s.trim()||R_.length>0||L.length>0||G.length>0,K$=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),q$=typeof window<"u"&&typeof Notification<"u",A0=typeof window<"u"?Boolean(window.isSecureContext):!1,o0=q$&&A0&&b!=="denied",L$=b==="granted"&&x,J$=L$?"Disable notifications":"Enable notifications",C$=R_.length>0||L.length>0||G.length>0,T$=y_==="disconnected"?"Reconnecting":String(y_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(B)=>B.toUpperCase()),J0=y_==="disconnected"?"Reconnecting":`Connection: ${T$}`,B$=(Array.isArray(M_)?M_:[]).filter((B)=>!B?.archived_at),s0=c3(B$,{currentChatJid:W_,limit:4}),I0=!j&&h3({footerWidth:T,visibleAgentCount:s0.length,hasContextIndicator:Boolean(H&&H.percent!=null)}),N0=(()=>{for(let B of Array.isArray(M_)?M_:[]){let P=typeof B?.chat_jid==="string"?B.chat_jid.trim():"";if(P&&P===W_)return B}return null})(),G2=Boolean(N0&&N0.chat_jid===(N0.root_chat_jid||N0.chat_jid)),b0=(()=>{let B=new Set,P=[];for(let Y of Array.isArray(M_)?M_:[]){let Q=typeof Y?.chat_jid==="string"?Y.chat_jid.trim():"";if(!Q||Q===W_||B.has(Q))continue;if(!(typeof Y?.agent_name==="string"?Y.agent_name.trim():""))continue;B.add(Q),P.push(Y)}return P})(),D$=b0.length>0,Y$=D$&&typeof D_==="function",E$=D$&&typeof V_==="function",k$=!j&&typeof I_==="function",S$=!j&&typeof $0==="function",P_=!j&&typeof F0==="function"&&!G2,D0=!j&&(Y$||E$||k$||S$||P_),Q0=p||"",y$=A&&R?` (${R})`:"",o$=y$.trim()?`${R}`:"",f$=typeof u?.hint_short==="string"?u.hint_short.trim():"",W$=[o$||null,f$||null].filter(Boolean).join(" • "),R0=[Q0?`Current model: ${Q0}${y$}`:null,u?.plan?`Plan: ${u.plan}`:null,f$||null,u?.primary?.reset_description||null,u?.secondary?.reset_description||null].filter(Boolean),W0=k_?"Switching model…":R0.join(" • ")||`Current model: ${Q0}${y$} (tap to open model picker)`,z0=(B)=>{if(!B||typeof B!=="object")return;let P=B.model??B.current;if(typeof e==="function")e({model:P??null,thinking_level:B.thinking_level??null,supports_thinking:B.supports_thinking,provider_usage:B.provider_usage??null});if(P&&typeof n==="function")n(P)},v0=(B)=>{let P=B||G_.current;if(!P)return;P.style.height="auto",P.style.height=`${P.scrollHeight}px`,P.style.overflowY="hidden"},A$=(B)=>{if(!B)return{content:B,fileRefs:[]};let Y=B.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let h=0;h<Y.length;h+=1)if(Y[h].trim()==="Files:"&&Y[h+1]&&/^\s*-\s+/.test(Y[h+1])){Q=h;break}if(Q===-1)return{content:B,fileRefs:[]};let J=[],E=Q+1;for(;E<Y.length;E+=1){let h=Y[E];if(/^\s*-\s+/.test(h))J.push(h.replace(/^\s*-\s+/,"").trim());else if(!h.trim())break;else break}if(J.length===0)return{content:B,fileRefs:[]};let C=Y.slice(0,Q),l=Y.slice(E);return{content:[...C,...l].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:J}},s$=(B)=>{if(!B)return{content:B,messageRefs:[]};let Y=B.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let h=0;h<Y.length;h+=1)if(Y[h].trim()==="Referenced messages:"&&Y[h+1]&&/^\s*-\s+/.test(Y[h+1])){Q=h;break}if(Q===-1)return{content:B,messageRefs:[]};let J=[],E=Q+1;for(;E<Y.length;E+=1){let h=Y[E];if(/^\s*-\s+/.test(h)){let m=h.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(m)J.push(m[1])}else if(!h.trim())break;else break}if(J.length===0)return{content:B,messageRefs:[]};let C=Y.slice(0,Q),l=Y.slice(E);return{content:[...C,...l].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:J}},O$=(B)=>{let P=A$(B||""),Y=s$(P.content||"");return{text:Y.content||"",fileRefs:P.fileRefs,messageRefs:Y.messageRefs}},r0=(B)=>{if(!B.startsWith("/")||B.includes(`
`)){v_(!1),H_([]);return}let P=B.toLowerCase().split(" ")[0];if(P.length<1){v_(!1),H_([]);return}let Y=t9.filter((Q)=>Q.name.startsWith(P)||Q.name.replace(/-/g,"").startsWith(P.replace(/-/g,"")));if(Y.length>0&&!(Y.length===1&&Y[0].name===P))x_(!1),e_([]),H_(Y),t_(0),v_(!0);else v_(!1),H_([])},w$=(B)=>{let P=s,Y=P.indexOf(" "),Q=Y>=0?P.slice(Y):"",J=B.name+Q;F_(J),v_(!1),H_([]),requestAnimationFrame(()=>{let E=G_.current;if(!E)return;let C=J.length;E.selectionStart=C,E.selectionEnd=C,E.focus()})},m0=(B)=>{if(N4(B)==null){x_(!1),e_([]);return}let P=p3(B$,B,{currentChatJid:W_});if(P.length>0&&!(P.length===1&&z4(P[0].agent_name).trim().toLowerCase()===String(B||"").trim().toLowerCase()))v_(!1),H_([]),e_(P),X0(0),x_(!0);else x_(!1),e_([])},U0=(B)=>{let P=z4(B?.agent_name);if(!P)return;F_(P),x_(!1),e_([]),requestAnimationFrame(()=>{let Y=G_.current;if(!Y)return;let Q=P.length;Y.selectionStart=Q,Y.selectionEnd=Q,Y.focus()})},Q$=(B)=>{if(B?.preventDefault?.(),B?.stopPropagation?.(),j||!Y$&&!E$&&!k$&&!S$&&!P_)return;w_(!1),v_(!1),H_([]),x_(!1),e_([]),o_((P)=>!P)},r$=(B)=>{let P=typeof B==="string"?B.trim():"";if(o_(!1),!P||P===W_){requestAnimationFrame(()=>G_.current?.focus());return}D_?.(P)},R$=async(B)=>{let P=typeof B==="string"?B.trim():"";if(o_(!1),!P||typeof V_!=="function"){requestAnimationFrame(()=>G_.current?.focus());return}try{await V_(P)}catch(Y){console.warn("Failed to restore session:",Y),requestAnimationFrame(()=>G_.current?.focus())}},P$=(B)=>{let P=typeof B?.chat_jid==="string"?B.chat_jid.trim():"";if(P&&typeof D_==="function"){D_(P);return}U0(B)},v$=async()=>{if(typeof I_!=="function")return;o_(!1);try{await I_()}catch(B){console.warn("Failed to rename session:",B)}requestAnimationFrame(()=>G_.current?.focus())},u$=async()=>{if(typeof $0!=="function")return;o_(!1);try{await $0()}catch(B){console.warn("Failed to create session:",B)}requestAnimationFrame(()=>G_.current?.focus())},a$=async()=>{if(typeof F0!=="function")return;o_(!1);try{await F0(W_)}catch(B){console.warn("Failed to delete session:",B)}requestAnimationFrame(()=>G_.current?.focus())},a0=(B)=>{if(j)A_(B);else F_(B),r0(B),m0(B);requestAnimationFrame(()=>v0())},t$=(B)=>{let P=j?z_:s,Y=P&&!P.endsWith(`
`)?`
`:"",Q=`${P}${Y}${B}`.trimStart();a0(Q)},m$=(B)=>{let P=B?.command?.model_label;if(P)return P;let Y=B?.command?.message;if(typeof Y==="string"){let Q=Y.match(/•\s+([^\n]+?)\s+\(current\)/);if(Q?.[1])return Q[1].trim()}return null},q_=async(B)=>{if(j||k_)return;k0(!0);try{let P=await F2("default",B,null,[],null,W_),Y=m$(P);z0({model:Y??p??null,thinking_level:P?.command?.thinking_level,supports_thinking:P?.command?.supports_thinking});try{let Q=await C2(W_);if(Q)z0(Q)}catch{}return _?.(),!0}catch(P){return console.error("Failed to switch model:",P),alert("Failed to switch model: "+P.message),!1}finally{k0(!1)}},V2=async()=>{await q_("/cycle-model")},y2=async(B)=>{if(!B||k_)return;if(await q_(`/model ${B}`))w_(!1)},g$=(B)=>{B.preventDefault(),B.stopPropagation(),o_(!1),w_((P)=>!P)},e$=(B)=>{if(B==="queue"||B==="steer"||B==="auto")return B;return B_?"queue":null},p$=async(B,P,Y={})=>{let{includeMedia:Q=!0,includeFileRefs:J=!0,includeMessageRefs:E=!0,clearAfterSubmit:C=!0,recordHistory:l=!0}=Y||{},o=typeof B==="string"?B:B&&typeof B?.target?.value==="string"?B.target.value:s,h=typeof o==="string"?o:"";if(!h.trim()&&(Q?R_.length===0:!0)&&(J?L.length===0:!0)&&(E?G.length===0:!0))return;v_(!1),H_([]),x_(!1),e_([]),o_(!1),J_(null);let m=Q?[...R_]:[],Y_=J?[...L]:[],K0=E?[...G]:[],w0=h.trim();if(l&&w0){let G0=d$.current,x0=X$(G0.filter((j2)=>j2!==w0));if(x0.push(w0),x0.length>200)x0.splice(0,x0.length-200);d$.current=x0,T0(x0),H0.current=-1,H$.current=""}let Y0=()=>{if(Q)h_([...m]);if(J)O_?.(Y_);if(E)U_?.(K0);F_(w0),requestAnimationFrame(()=>v0())};if(C)F_(""),h_([]),O?.(),I?.();(async()=>{try{if(await a?.({content:w0,submitMode:P,fileRefs:Y_,messageRefs:K0,mediaFiles:m})){_?.();return}let x0=[];for(let t0 of m){let O2=await l1(t0);x0.push(O2.id)}let j2=Y_.length?`Files:
${Y_.map((t0)=>`- ${t0}`).join(`
`)}`:"",i$=K0.length?`Referenced messages:
${K0.map((t0)=>`- message:${t0}`).join(`
`)}`:"",B2=x0.length?`Images:
${x0.map((t0,O2)=>{let J1=m[O2]?.name||`attachment-${O2+1}`;return`- attachment:${t0} (${J1})`}).join(`
`)}`:"",H1=[w0,j2,i$,B2].filter(Boolean).join(`

`),Z2=await F2("default",H1,null,x0,e$(P),W_);if(Z_?.(Z2),Z2?.command){z0({model:Z2.command.model_label??p??null,thinking_level:Z2.command.thinking_level,supports_thinking:Z2.command.supports_thinking});try{let t0=await C2(W_);if(t0)z0(t0)}catch{}}_?.()}catch(G0){if(C)Y0();let x0=G0?.message||"Failed to send message.";J_(x0),f_?.(x0),console.error("Failed to post:",G0)}})()},A2=(B)=>{c_?.(B)},_2=(B)=>{if(B.isComposing)return;if(j&&B.key==="Escape"){B.preventDefault(),A_(""),X?.();return}if(!j&&l_&&B.key==="Escape"){B.preventDefault(),o_(!1);return}if(b_&&V0.length>0){let P=G_.current?.value??(j?z_:s);if(!String(P||"").match(/^@([a-zA-Z0-9_-]*)$/))x_(!1),e_([]);else{if(B.key==="ArrowDown"){B.preventDefault(),X0((Y)=>(Y+1)%V0.length);return}if(B.key==="ArrowUp"){B.preventDefault(),X0((Y)=>(Y-1+V0.length)%V0.length);return}if(B.key==="Tab"||B.key==="Enter"){B.preventDefault(),U0(V0[l0]);return}if(B.key==="Escape"){B.preventDefault(),x_(!1),e_([]);return}}}if(g_&&E_.length>0){let P=G_.current?.value??(j?z_:s);if(!String(P||"").startsWith("/"))v_(!1),H_([]);else{if(B.key==="ArrowDown"){B.preventDefault(),t_((Y)=>(Y+1)%E_.length);return}if(B.key==="ArrowUp"){B.preventDefault(),t_((Y)=>(Y-1+E_.length)%E_.length);return}if(B.key==="Tab"){B.preventDefault(),w$(E_[d_]);return}if(B.key==="Enter"&&!B.shiftKey){if(!(G_.current?.value??(j?z_:s)).includes(" ")){B.preventDefault();let J=E_[d_];v_(!1),H_([]),p$(J.name);return}}if(B.key==="Escape"){B.preventDefault(),v_(!1),H_([]);return}}}if(!j&&(B.key==="ArrowUp"||B.key==="ArrowDown")&&!B.metaKey&&!B.ctrlKey&&!B.altKey&&!B.shiftKey){let P=G_.current;if(!P)return;let Y=P.value||"",Q=P.selectionStart===0&&P.selectionEnd===0,J=P.selectionStart===Y.length&&P.selectionEnd===Y.length;if(B.key==="ArrowUp"&&Q||B.key==="ArrowDown"&&J){let E=d$.current;if(!E.length)return;B.preventDefault();let C=H0.current;if(B.key==="ArrowUp"){if(C===-1)H$.current=Y,C=E.length-1;else if(C>0)C-=1;H0.current=C,a0(E[C]||"")}else{if(C===-1)return;if(C<E.length-1)C+=1,H0.current=C,a0(E[C]||"");else H0.current=-1,a0(H$.current||""),H$.current=""}requestAnimationFrame(()=>{let l=G_.current;if(!l)return;let o=l.value.length;l.selectionStart=o,l.selectionEnd=o});return}}if(B.key==="Enter"&&!B.shiftKey&&(B.ctrlKey||B.metaKey)){B.preventDefault();let P=G_.current?.value??(j?z_:s);if(j){if(P.trim())N?.(P.trim(),Z)}else p$(P,"steer");return}if(B.key==="Enter"&&!B.shiftKey){B.preventDefault();let P=G_.current?.value??(j?z_:s);if(j){if(P.trim())N?.(P.trim(),Z)}else p$(P)}},$2=(B)=>{let P=Array.from(B||[]).filter((Y)=>Y&&Y.type&&Y.type.startsWith("image/"));if(!P.length)return;h_((Y)=>[...Y,...P]),J_(null)},g0=(B)=>{$2(B.target.files),B.target.value=""},u0=(B)=>{if(j)return;B.preventDefault(),B.stopPropagation(),j0.current+=1,i_(!0)},c$=(B)=>{if(j)return;if(B.preventDefault(),B.stopPropagation(),j0.current=Math.max(0,j0.current-1),j0.current===0)i_(!1)},X2=(B)=>{if(j)return;if(B.preventDefault(),B.stopPropagation(),B.dataTransfer)B.dataTransfer.dropEffect="copy";i_(!0)},p0=(B)=>{if(j)return;B.preventDefault(),B.stopPropagation(),j0.current=0,i_(!1),$2(B.dataTransfer?.files||[])},U$=(B)=>{if(j)return;let P=B.clipboardData?.items;if(!P||!P.length)return;let Y=[];for(let Q of P){if(Q.kind!=="file")continue;let J=Q.getAsFile?.();if(J)Y.push(J)}if(Y.length>0)B.preventDefault(),$2(Y)},q2=(B)=>{h_((P)=>P.filter((Y,Q)=>Q!==B))},h$=()=>{J_(null),h_([]),O?.(),I?.()},L2=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((B)=>{let{latitude:P,longitude:Y,accuracy:Q}=B.coords,J=`${P.toFixed(5)}, ${Y.toFixed(5)}`,E=Number.isFinite(Q)?` ±${Math.round(Q)}m`:"",C=`https://maps.google.com/?q=${P},${Y}`,l=`Location: ${J}${E} ${C}`;t$(l)},(B)=>{let P=B?.message||"Unable to retrieve location.";alert(`Location error: ${P}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!B0)return;n0(!0),C2(W_).then((B)=>{let P=Array.isArray(B?.models)?B.models.filter((Y)=>typeof Y==="string"&&Y.trim().length>0):[];P.sort((Y,Q)=>Y.localeCompare(Q,void 0,{sensitivity:"base"})),O0(P),z0(B)}).catch((B)=>{console.warn("Failed to load model list:",B),O0([])}).finally(()=>{n0(!1)})},[B0,p]),v(()=>{if(j)w_(!1),o_(!1),v_(!1),H_([]),x_(!1),e_([])},[j]),v(()=>{if(l_&&!D0)o_(!1)},[l_,D0]),v(()=>{if(!B0)return;let B=(P)=>{let Y=F$.current,Q=z$.current,J=P.target;if(Y&&Y.contains(J))return;if(Q&&Q.contains(J))return;w_(!1)};return document.addEventListener("pointerdown",B),()=>document.removeEventListener("pointerdown",B)},[B0]),v(()=>{if(!l_)return;let B=(P)=>{let Y=x$.current,Q=y0.current,J=P.target;if(Y&&Y.contains(J))return;if(Q&&Q.contains(J))return;o_(!1)};return document.addEventListener("pointerdown",B),()=>document.removeEventListener("pointerdown",B)},[l_]),v(()=>{let B=()=>{let E=V$.current?.clientWidth||0;t((C)=>C===E?C:E)};B();let P=V$.current,Y=0,Q=()=>{if(Y)cancelAnimationFrame(Y);Y=requestAnimationFrame(()=>{Y=0,B()})},J=null;if(P&&typeof ResizeObserver<"u")J=new ResizeObserver(()=>Q()),J.observe(P);if(typeof window<"u")window.addEventListener("resize",Q);return()=>{if(Y)cancelAnimationFrame(Y);if(J?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",Q)}},[j,p,s0.length,H?.percent]);let c0=(B)=>{let P=B.target.value;if(J_(null),l_)o_(!1);v0(B.target),a0(P)};return v(()=>{requestAnimationFrame(()=>v0())},[s,z_,j]),v(()=>{if(j)return;m0(s)},[B$,W_,s,j]),U`
        <div class="compose-box">
            ${!j&&X_.length>0&&U`
                <div class="compose-queue-stack">
                    ${X_.map((B)=>{let P=typeof B?.content==="string"?B.content:"",Y=O$(P);if(!Y.text.trim()&&Y.fileRefs.length===0&&Y.messageRefs.length===0)return null;return U`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${P}>
                                    ${Y.text.trim()&&U`
                                        <div class="compose-queue-stack-text">${Y.text}</div>
                                    `}
                                    ${(Y.messageRefs.length>0||Y.fileRefs.length>0)&&U`
                                        <div class="compose-queue-stack-refs">
                                            ${Y.messageRefs.map((Q)=>U`
                                                <${G$}
                                                    key=${"queue-msg-"+Q}
                                                    prefix="compose"
                                                    label=${"msg:"+Q}
                                                    title=${"Message reference: "+Q}
                                                    icon="message"
                                                />
                                            `)}
                                            ${Y.fileRefs.map((Q)=>{let J=Q.split("/").pop()||Q;return U`
                                                    <${G$}
                                                        key=${"queue-file-"+Q}
                                                        prefix="compose"
                                                        label=${J}
                                                        title=${Q}
                                                        onClick=${()=>c?.(Q)}
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
                                        onClick=${()=>A2(B)}
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
                                        onClick=${()=>__?.(B)}
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
                class=${`compose-input-wrapper${a_?" drag-active":""}`}
                onDragEnter=${u0}
                onDragOver=${X2}
                onDragLeave=${c$}
                onDrop=${p0}
            >
                <div class="compose-input-main">
                    ${K_&&!C$&&U`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${K_}</div>
                    `}
                    ${C$&&U`
                        <div class="compose-file-refs">
                            ${K_&&U`
                                <div class="compose-submit-error" role="status" aria-live="polite">${K_}</div>
                            `}
                            ${G.map((B)=>{return U`
                                    <${G$}
                                        key=${"msg-"+B}
                                        prefix="compose"
                                        label=${"msg:"+B}
                                        title=${"Message reference: "+B}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>F?.(B)}
                                    />
                                `})}
                            ${L.map((B)=>{let P=B.split("/").pop()||B;return U`
                                    <${G$}
                                        prefix="compose"
                                        label=${P}
                                        title=${B}
                                        onClick=${()=>c?.(B)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(B)}
                                    />
                                `})}
                            ${R_.map((B,P)=>{let Y=B?.name||`attachment-${P+1}`;return U`
                                    <${G$}
                                        key=${Y+P}
                                        prefix="compose"
                                        label=${Y}
                                        title=${Y}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>q2(P)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${h$}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof $_==="function"&&U`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>$_?.()}
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
                        ref=${G_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?z_:s}
                        onInput=${c0}
                        onKeyDown=${_2}
                        onPaste=${U$}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${b_&&V0.length>0&&U`
                        <div class="slash-autocomplete" ref=${f0}>
                            ${V0.map((B,P)=>U`
                                <div
                                    key=${B.chat_jid||B.agent_name}
                                    class=${`slash-item${P===l0?" active":""}`}
                                    onMouseDown=${(Y)=>{Y.preventDefault(),U0(B)}}
                                    onMouseEnter=${()=>X0(P)}
                                >
                                    <span class="slash-name">@${B.agent_name}</span>
                                    <span class="slash-desc">${B.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${g_&&E_.length>0&&U`
                        <div class="slash-autocomplete" ref=${T_}>
                            ${E_.map((B,P)=>U`
                                <div
                                    key=${B.name}
                                    class=${`slash-item${P===d_?" active":""}`}
                                    onMouseDown=${(Y)=>{Y.preventDefault(),w$(B)}}
                                    onMouseEnter=${()=>t_(P)}
                                >
                                    <span class="slash-name">${B.name}</span>
                                    <span class="slash-desc">${B.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${B0&&!j&&U`
                        <div class="compose-model-popup" ref=${F$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${C0&&U`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!C0&&C_.length===0&&U`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!C0&&C_.map((B)=>U`
                                    <button
                                        key=${B}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${p===B?" active":""}`}
                                        onClick=${()=>{y2(B)}}
                                        disabled=${k_}
                                    >
                                        ${B}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{V2()}}
                                    disabled=${k_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${l_&&!j&&U`
                        <div class="compose-model-popup" ref=${x$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${U`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let B=typeof N0?.agent_name==="string"&&N0.agent_name.trim()?`@${N0.agent_name.trim()}`:W_,P=typeof N0?.chat_jid==="string"&&N0.chat_jid.trim()?N0.chat_jid.trim():W_;return`${B} — ${P} • current`})()}
                                    </div>
                                `}
                                ${!D$&&U`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${D$&&b0.map((B)=>{let P=Boolean(B.archived_at),Y=`@${B.agent_name} — ${B.chat_jid}${B.is_active?" • active":""}${P?" • archived":""}`;return U`
                                        <button
                                            key=${B.chat_jid}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item${P?" archived":""}`}
                                            onClick=${()=>{if(P){R$(B.chat_jid);return}r$(B.chat_jid)}}
                                            disabled=${P?!E$:!Y$}
                                            title=${P?"Restore this archived branch":"Switch to this session"}
                                        >
                                            ${Y}
                                        </button>
                                    `})}
                            </div>
                            ${(S$||k$||P_)&&U`
                                <div class="compose-model-popup-actions">
                                    ${S$&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{u$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${k$&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${()=>{v$()}}
                                            title="Rename current branch name and agent handle"
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${P_&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{a$()}}
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
                <div class="compose-footer" ref=${V$}>
                    ${!j&&p&&U`
                    <div class="compose-meta-row">
                        ${!j&&p&&U`
                            <div class="compose-model-meta">
                                <button
                                    ref=${z$}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${W0}
                                    aria-label="Open model picker"
                                    onClick=${g$}
                                    disabled=${k_}
                                >
                                    ${k_?"Switching…":Q0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!k_&&W$&&U`
                                        <span class="compose-model-usage-hint" title=${W0}>
                                            ${W$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${I0&&U`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${s0.map((B)=>U`
                                <button
                                    key=${B.chat_jid||B.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${B.is_active?" active":""}`}
                                    onClick=${()=>P$(B)}
                                    title=${`${B.chat_jid||"Active agent"} — switch to @${B.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${B.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&H&&H.percent!=null&&U`
                        <${e9} usage=${H} />
                    `}
                    ${D0&&U`
                        <button
                            ref=${y0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${l_?" active":""}`}
                            onClick=${Q$}
                            title=${l_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${l_?"true":"false"}
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
                                onChange=${(B)=>z?.(B.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?X:K}
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
                    ${K$&&!j&&U`
                        <button
                            class="icon-btn location-btn"
                            onClick=${L2}
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
                    ${o0&&!j&&U`
                        <button
                            class=${`icon-btn notification-btn${L$?" active":""}`}
                            onClick=${i}
                            title=${J$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&U`
                        ${d&&N_&&U`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${N_}
                                title=${`Attach open file: ${d}`}
                                type="button"
                                disabled=${L.includes(d)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${g0} />
                        </label>
                    `}
                    ${(y_!=="connected"||!j)&&U`
                        <div class="compose-send-stack">
                            ${y_!=="connected"&&U`
                                <span class="compose-connection-status connection-status ${y_}" title=${J0}>
                                    ${T$}
                                </span>
                            `}
                            ${!j&&U`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{p$()}}
                                    disabled=${!Z0}
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
    `}var o3="piclaw_theme",W4="piclaw_tint",R2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},s3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},n3={default:{label:"Default",mode:"auto",light:R2,dark:s3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},_7=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],N2={theme:"default",tint:null},r3="light",K4=!1;function G4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function k2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((z)=>z+z).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function $7(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let z=parseInt(N[1],10),K=parseInt(N[2],10),X=parseInt(N[3],10);if(![z,K,X].every((q)=>Number.isFinite(q)))return null;let L=`#${[z,K,X].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:z,g:K,b:X,hex:L}}function a3(_){return k2(_)||$7(_)}function f2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),z=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${z})`}function Y4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function j7(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),z=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*z+0.0722*K}function Z7(_){return j7(_)>0.4?"#000000":"#ffffff"}function t3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function V4(_){return n3[_]||n3.default}function N7(_){return _.mode==="auto"?t3():_.mode}function e3(_,$){let j=V4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||R2}function _6(_,$,j){let Z=a3($);if(!Z)return _;let N=k2(_.bgPrimary),z=k2(_.bgSecondary),K=k2(_.bgHover),X=k2(_.borderColor);if(!N||!z||!K||!X)return _;let q=k2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:f2(N,Z,0.08),bgSecondary:f2(z,Z,0.12),bgHover:f2(K,Z,0.16),borderColor:f2(X,Z,0.08),accent:Z.hex,accentHover:q?f2(Z,q,0.18):Z.hex}}function z7(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=a3(Z),z=N?Y4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=N?Y4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",X=N?Y4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?Z7(N):$==="dark"?"#000000":"#ffffff",q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":K,"--accent-soft-strong":X,"--accent-contrast-text":L,"--danger-color":_.danger||R2.danger,"--success-color":_.success||R2.success,"--search-highlight-color":z||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([O,G])=>{if(G)j.style.setProperty(O,G)})}function K7(){if(typeof document>"u")return;let _=document.documentElement;_7.forEach(($)=>_.style.removeProperty($))}function E2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function d3(_){let $=G4(N2?.theme||"default"),j=N2?.tint?String(N2.tint).trim():null,Z=e3($,_);if($==="default"&&j)Z=_6(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?s3.bgPrimary:R2.bgPrimary}function Y7(_,$){if(typeof document>"u")return;let j=E2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=E2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",d3("light"));let N=E2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",d3("dark"));let z=E2("msapplication-TileColor");if(z&&_)z.setAttribute("content",_);let K=E2("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let X=E2("apple-mobile-web-app-status-bar-style");if(X)X.setAttribute("content",$==="dark"?"black-translucent":"default")}function W7(){if(typeof window>"u")return;let _={...N2,mode:r3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function X4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=G4(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=V4(j),z=N7(N),K=e3(j,z);N2={theme:j,tint:Z},r3=z;let X=document.documentElement;X.dataset.theme=z,X.dataset.colorTheme=j,X.dataset.tint=Z?String(Z):"",X.style.colorScheme=z;let L=K;if(j==="default"&&Z)L=_6(K,Z,z);if(j==="default"&&!Z)K7();else z7(L,z);if(Y7(L.bgPrimary,z),W7(),$.persist!==!1)if(_0(o3,j),Z)_0(W4,Z);else _0(W4,"")}function Y1(){if(V4(N2.theme).mode!=="auto")return;X4(N2,{persist:!1})}function $6(){if(typeof window>"u")return()=>{};let _=G4(j$(o3)||"default"),$=j$(W4),j=$?$.trim():null;if(X4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!K4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",Y1);else if(Z.addListener)Z.addListener(Y1);return K4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",Y1);else if(Z.removeListener)Z.removeListener(Y1);K4=!1}}return()=>{}}function j6(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;X4({theme:j||"default",tint:Z},{persist:!0})}function Z6(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return t3()}var W1=/#(\w+)/g,G7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),V7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),X7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),q7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},L7=new Set(["http:","https:","mailto:",""]);function q4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function z2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!L7.has(Z.protocol))return null;return Z.href}catch{return null}}function N6(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),z;while(z=N.nextNode())Z.push(z);for(let K of Z){let X=K.tagName.toLowerCase();if(!V7.has(X)){let q=K.parentNode;if(!q)continue;while(K.firstChild)q.insertBefore(K.firstChild,K);q.removeChild(K);continue}let L=q7[X]||new Set;for(let q of Array.from(K.attributes)){let O=q.name.toLowerCase(),G=q.value;if(O.startsWith("on")){K.removeAttribute(q.name);continue}if(O.startsWith("data-")||O.startsWith("aria-"))continue;if(L.has(O)||X7.has(O)){if(O==="href"){let F=z2(G);if(!F)K.removeAttribute(q.name);else if(K.setAttribute(q.name,F),X==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(O==="src"){let F=X==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(G):G,I=z2(F,{allowDataImage:X==="img"});if(!I)K.removeAttribute(q.name);else K.setAttribute(q.name,I)}continue}K.removeAttribute(q.name)}}return j.body.innerHTML}function z6(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function G1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=z6(j);if(N===j)break;j=N}return j}function B7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],z=!1,K=[];for(let X of j){if(!z&&X.trim().match(/^```mermaid\s*$/i)){z=!0,K=[];continue}if(z&&X.trim().match(/^```\s*$/)){let L=Z.length;Z.push(K.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),z=!1,K=[];continue}if(z)K.push(X);else N.push(X)}if(z)N.push("```mermaid"),N.push(...K);return{text:N.join(`
`),blocks:Z}}function O7(_){if(!_)return _;return G1(_,5)}function Q7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function U7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function F7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),z=$[N]??"",K=O7(z);return`<div class="mermaid-container" data-mermaid="${Q7(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function K6(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var H7={span:new Set(["title","class","lang","dir"])};function J7(_,$){let j=H7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,z;while(z=N.exec($)){let K=(z[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let X=z[2]??z[3]??z[4]??"";Z.push(` ${K}="${q4(X)}"`)}return Z.join("")}function Y6(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),z=N?Z.slice(1).trim():Z,X=z.endsWith("/")?z.slice(0,-1).trim():z,[L=""]=X.split(/\s+/,1),q=L.toLowerCase();if(!q||!G7.has(q))return $;if(q==="br")return N?"":"<br>";if(N)return`</${q}>`;let O=X.slice(L.length).trim(),G=J7(q,O);return`<${q}${G}>`})}function W6(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function G6(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(z)=>z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let z=Z(N.nodeValue);if(z!==N.nodeValue)N.nodeValue=z}return $.body.innerHTML}function D7(_){if(!window.katex)return _;let $=(K)=>z6(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let X=[],L=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let O=X.length;return X.push(q),`@@CODE_BLOCK_${O}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let O=X.length;return X.push(q),`@@CODE_INLINE_${O}@@`}),{html:L,blocks:X}},Z=(K,X)=>{if(!X.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,q)=>{let O=Number(q);return X[O]??""})},N=j(_),z=N.html;return z=z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,X,L)=>{try{let q=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${X}${q}`}catch(q){return`<span class="math-error" title="${q4(q.message)}">${K}</span>`}}),z=z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,X,L)=>{if(/\s$/.test(L))return K;try{let q=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${X}${q}`}catch(q){return`${X}<span class="math-error" title="${q4(q.message)}">$${L}$</span>`}}),Z(z,N.blocks)}function E7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let z of Z){let K=z.nodeValue;if(!K)continue;if(W1.lastIndex=0,!W1.test(K))continue;W1.lastIndex=0;let X=z.parentElement;if(X&&(X.closest("a")||X.closest("code")||X.closest("pre")))continue;let L=K.split(W1);if(L.length<=1)continue;let q=$.createDocumentFragment();L.forEach((O,G)=>{if(G%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",O),F.textContent=`#${O}`,q.appendChild(F)}else q.appendChild($.createTextNode(O))}),z.parentNode?.replaceChild(q,z)}return $.body.innerHTML}function k7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let z of j){if(!N&&z.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&z.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(z)}return Z.join(`
`)}function i0(_,$,j={}){if(!_)return"";let Z=k7(_),{text:N,blocks:z}=B7(Z),K=G1(N,2),L=K6(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),q=Y6(L),O=window.marked?marked.parse(q,{headerIds:!1,mangle:!1}):q.replace(/\n/g,"<br>");return O=W6(O),O=G6(O),O=D7(O),O=E7(O),O=F7(O,z),O=N6(O,j),O}function V1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=G1($,2),N=K6(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),z=Y6(N),K=window.marked?marked.parse(z):z.replace(/\n/g,"<br>");return K=W6(K),K=G6(K),K=N6(K),K}function y7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,z)=>{let K=N.trim().split(/\s+/).map((L)=>{let[q,O]=L.split(",").map(Number);return{x:q,y:O}});if(K.length<3)return`<polyline${Z}points="${N}"${z}/>`;let X=[`M ${K[0].x},${K[0].y}`];for(let L=1;L<K.length-1;L++){let q=K[L-1],O=K[L],G=K[L+1],F=O.x-q.x,I=O.y-q.y,p=G.x-O.x,u=G.y-O.y,R=Math.sqrt(F*F+I*I),A=Math.sqrt(p*p+u*u),H=Math.min($,R/2,A/2);if(H<0.5){X.push(`L ${O.x},${O.y}`);continue}let x=O.x-F/R*H,b=O.y-I/R*H,i=O.x+p/A*H,n=O.y+u/A*H,d=F*u-I*p>0?1:0;X.push(`L ${x},${b}`),X.push(`A ${H},${H} 0 0 ${d} ${i},${n}`)}return X.push(`L ${K[K.length-1].x},${K[K.length-1].y}`),`<path${Z}d="${X.join(" ")}"${z}/>`})}async function I$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=Z6()==="dark"?j["tokyo-night"]:j["github-light"],z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of z)try{let X=K.dataset.mermaid,L=U7(X||""),q=G1(L,2),O=await $(q,{...N,transparent:!0});O=y7(O),K.innerHTML=O,K.removeAttribute("data-mermaid")}catch(X){console.error("Mermaid render error:",X);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${X.message}`,K.innerHTML="",K.appendChild(L),K.removeAttribute("data-mermaid")}}function V6(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function X6(_){return String(_||"").trim()||"web:default"}function q6(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function L6(_){if(!_)return!1;return _.status!=="running"}function B6(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function O6({session:_,onClose:$,onInject:j,onRetry:Z}){let N=k(null),z=k(null),K=_?.thinking?V1(_.thinking):"",X=_?.answer?i0(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(N.current&&K)I$(N.current).catch(()=>{})},[K]),v(()=>{if(z.current&&X)I$(z.current).catch(()=>{})},[X]),!_)return null;let L=_.status==="running",q=Boolean(String(_.answer||"").trim()),O=Boolean(String(_.thinking||"").trim()),G=q6(_),F=L6(_),I=!L&&q,p=L?"Thinking…":_.status==="error"?"Error":"Done";return U`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${p}</span>
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
            ${O&&U`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${G&&U`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${z}
                        dangerouslySetInnerHTML=${{__html:X}}
                    ></div>
                </div>
            `}

            ${F&&U`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&U`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!I}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var Q6="PiClaw";function L4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%z.length,X=z[K],L=Z.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",O=q?q:null,G=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:X,image:O||(G?"/static/icon-192.png":null)}}function U6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function F6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function H6(_){if(!_)return null;if(typeof document<"u"){let z=document.documentElement,K=z?.dataset?.colorTheme||"",X=z?.dataset?.tint||"",L=getComputedStyle(z).getPropertyValue("--accent-color")?.trim();if(L&&(X||K&&K!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let z=0;z<j.length;z+=1)Z=(Z*31+j.charCodeAt(z))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function A7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function v2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function J6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return v2(_)?"Compacting context":"Working..."}function w7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function D6(_,$=Date.now()){let j=A7(_);if(j===null)return null;return w7(Math.max(0,$-j))}function E6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:z,turnId:K,steerQueued:X,onPanelToggle:L}){let G=(s)=>{if(!s)return{text:"",totalLines:0,fullText:""};if(typeof s==="string"){let R_=s,h_=R_?R_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:R_,totalLines:h_,fullText:R_}}let F_=s.text||"",z_=s.fullText||s.full_text||F_,A_=Number.isFinite(s.totalLines)?s.totalLines:z_?z_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:F_,totalLines:A_,fullText:z_}},F=160,I=(s)=>String(s||"").replace(/<\/?internal>/gi,""),p=(s)=>{if(!s)return 1;return Math.max(1,Math.ceil(s.length/160))},u=(s,F_,z_)=>{let A_=(s||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!A_)return{text:"",omitted:0,totalLines:Number.isFinite(z_)?z_:0,visibleLines:0};let R_=A_.split(`
`),h_=R_.length>F_?R_.slice(0,F_).join(`
`):A_,a_=Number.isFinite(z_)?z_:R_.reduce((H_,d_)=>H_+p(d_),0),i_=h_?h_.split(`
`).reduce((H_,d_)=>H_+p(d_),0):0,E_=Math.max(a_-i_,0);return{text:h_,omitted:E_,totalLines:a_,visibleLines:i_}},R=G(j),A=G(Z),H=G($),x=Boolean(R.text)||R.totalLines>0,b=Boolean(A.text)||A.totalLines>0,i=Boolean(H.fullText?.trim()||H.text?.trim());if(!_&&!i&&!x&&!b&&!N&&!z)return null;let[n,e]=f(new Set),[d,N_]=f(()=>Date.now()),c=(s)=>e((F_)=>{let z_=new Set(F_),A_=!z_.has(s);if(A_)z_.add(s);else z_.delete(s);if(typeof L==="function")L(s,A_);return z_});v(()=>{e(new Set)},[K]);let X_=v2(_);v(()=>{if(!X_)return;N_(Date.now());let s=setInterval(()=>N_(Date.now()),1000);return()=>clearInterval(s)},[X_,_?.started_at,_?.startedAt]);let c_=_?.turn_id||K,__=H6(c_),a=X?"turn-dot turn-dot-queued":"turn-dot",Z_=(s)=>s,$_=Boolean(_?.last_activity||_?.lastActivity),B_=(s)=>s==="warning"?"#f59e0b":s==="error"?"var(--danger-color)":s==="success"?"var(--success-color)":__,M_=z?.kind||"info",W_=B_(M_),y_=B_(_?.kind||(X_?"warning":"info")),O_="",U_=_?.title,f_=_?.status;if(_?.type==="plan")O_=U_?`Planning: ${U_}`:"Planning...";else if(_?.type==="tool_call")O_=U_?`Running: ${U_}`:"Running tool...";else if(_?.type==="tool_status")O_=U_?`${U_}: ${f_||"Working..."}`:f_||"Working...";else if(_?.type==="error")O_=U_||"Agent error";else O_=U_||f_||"Working...";if($_)O_="Last activity just now";let D_=({panelTitle:s,text:F_,fullText:z_,totalLines:A_,maxLines:R_,titleClass:h_,panelKey:a_})=>{let i_=n.has(a_),E_=z_||F_||"",H_=a_==="thought"||a_==="draft"?I(E_):E_,d_=typeof R_==="number",t_=i_&&d_,g_=d_?u(H_,R_,A_):{text:H_||"",omitted:0,totalLines:Number.isFinite(A_)?A_:0};if(!H_&&!(Number.isFinite(g_.totalLines)&&g_.totalLines>0))return null;let v_=`agent-thinking-body${d_?" agent-thinking-body-collapsible":""}`,V0=d_?`--agent-thinking-collapsed-lines: ${R_};`:"";return U`
            <div
                class="agent-thinking"
                data-expanded=${i_?"true":"false"}
                data-collapsible=${d_?"true":"false"}
                style=${__?`--turn-color: ${__};`:""}
            >
                <div class="agent-thinking-title ${h_||""}">
                    ${__&&U`<span class=${a} aria-hidden="true"></span>`}
                    ${s}
                    ${t_&&U`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${s} panel`}
                            onClick=${()=>c(a_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${v_}
                    style=${V0}
                    dangerouslySetInnerHTML=${{__html:V1(H_)}}
                />
                ${!i_&&g_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>c(a_)}>
                        ▸ ${g_.omitted} more lines
                    </button>
                `}
                ${i_&&g_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>c(a_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},I_=N?.tool_call?.title,$0=I_?`Awaiting approval: ${I_}`:"Awaiting approval",F0=X_?D6(_,d):null,V_=(s,F_,z_=null)=>{let A_=J6(s);return U`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${F_?`--turn-color: ${F_};`:""}
                title=${s?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${F_&&U`<span class=${a} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${A_}</span>
                    ${z_&&U`<span class="agent-status-elapsed">${z_}</span>`}
                </div>
                ${s.detail&&U`<div class="agent-thinking-body">${s.detail}</div>`}
            </div>
        `};return U`
        <div class="agent-status-panel">
            ${z&&V_(z,W_)}
            ${_?.type==="intent"&&V_(_,y_,F0)}
            ${N&&U`
                <div class="agent-status agent-status-request" aria-live="polite" style=${__?`--turn-color: ${__};`:""}>
                    <span class=${a} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${$0}</span>
                </div>
            `}
            ${x&&D_({panelTitle:Z_("Planning"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,panelKey:"plan"})}
            ${b&&D_({panelTitle:Z_("Thoughts"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${i&&D_({panelTitle:Z_("Draft"),text:H.text,fullText:H.fullText,totalLines:H.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&U`
                <div class=${`agent-status${$_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${__?`--turn-color: ${__};`:""}>
                    ${__&&U`<span class=${a} aria-hidden="true"></span>`}
                    ${_?.type==="error"?U`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!$_&&U`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${O_}</span>
                </div>
            `}
        </div>
    `}function k6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:z}=_,K=Z?.title||"Agent Request",X=Z?.kind||"other",L=Z?.rawInput||{},q=L.command||L.commands&&L.commands[0]||null,O=L.diff||null,G=L.fileName||L.path||null,F=Z?.description||L.description||L.explanation||null,p=(Array.isArray(Z?.locations)?Z.locations:[]).map((x)=>x?.path).filter((x)=>Boolean(x)),u=Array.from(new Set([G,...p].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let R=async(x)=>{try{await $1(j,x,z||null),$()}catch(b){console.error("Failed to respond to agent request:",b)}},A=async()=>{try{await d1(K,`Auto-approved: ${K}`),await $1(j,"approved",z||null),$()}catch(x){console.error("Failed to add to whitelist:",x)}},H=N&&N.length>0;return U`
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
                ${(F||q||O||u.length>0)&&U`
                    <div class="agent-request-body">
                        ${F&&U`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${u.length>0&&U`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${u.map((x,b)=>U`<li key=${b}>${x}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&U`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${O&&U`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${O}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${H?N.map((x)=>U`
                            <button 
                                key=${x.optionId||x.id||String(x)}
                                class="agent-request-btn ${x.kind==="allow_once"||x.kind==="allow_always"?"primary":""}"
                                onClick=${()=>R(x.optionId||x.id||x)}
                            >
                                ${x.name||x.label||x.optionId||x.id||String(x)}
                            </button>
                        `):U`
                        <button class="agent-request-btn primary" onClick=${()=>R("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>R("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${A}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function y6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,z=86400000;if(Z<z){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*z){let L=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${q}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${X}`}function u2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function Z$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function K2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var P7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),M7=new Set(["text/markdown"]),I7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),b7=new Set(["application/vnd.jgraph.mxfile"]);function m2(_){return typeof _==="string"?_.trim().toLowerCase():""}function x7(_){let $=m2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function C7(_){let $=m2(_);return!!$&&$.endsWith(".pdf")}function T7(_){let $=m2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function g2(_,$){let j=m2(_);if(x7($)||b7.has(j))return"drawio";if(C7($)||j==="application/pdf")return"pdf";if(T7($)||I7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(P7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function A6(_){let $=m2(_);return M7.has($)}function w6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function S7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function f7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),z=Number(j[3]);if(![Z,N,z].every((K)=>Number.isFinite(K)))return null;return{r:Z,g:N,b:z}}function P6(_){return S7(_)||f7(_)}function X1(_){let $=(z)=>{let K=z/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function R7(_,$){let j=Math.max(X1(_),X1($)),Z=Math.min(X1(_),X1($));return(j+0.05)/(Z+0.05)}function v7(_,$,j="#ffffff"){let Z=P6(_);if(!Z)return j;let N=j,z=-1;for(let K of $){let X=P6(K);if(!X)continue;let L=R7(Z,X);if(L>z)N=K,z=L}return N}function B4(){let _=getComputedStyle(document.documentElement),$=(p,u)=>{for(let R of p){let A=_.getPropertyValue(R).trim();if(A)return A}return u},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),z=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),X=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),O=$(["--danger-color","--color-error"],"#f4212e"),G=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),I=v7(X,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:z,bgEmphasis:K,accent:X,good:L,warning:q,attention:O,border:G,fontFamily:F,buttonTextColor:I}}function M6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:z,warning:K,attention:X,border:L,fontFamily:q}=B4();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:X,subtle:X}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:X,subtle:X}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var u7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),I6=!1,q1=null,b6=!1;function O4(_){_.querySelector(".adaptive-card-notice")?.remove()}function m7(_,$,j="error"){O4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function g7(_,$=(j)=>i0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function p7(_=($)=>i0($,null)){return($,j)=>{try{let Z=g7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function c7(_){if(b6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=p7(),b6=!0}async function h7(){if(I6)return;if(q1)return q1;return q1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{I6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),q1}function i7(){return globalThis.AdaptiveCards}function l7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function n7(_){return u7.has(_)}function U4(_){if(!Array.isArray(_))return[];return _.filter(l7)}function d7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,z=_?.data??$?.data;return{type:j,title:Z,data:z,url:N,raw:_}}function Q4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Q4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${Q4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function o7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return Q4($);return typeof $==="string"?$:String($)}function s7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((X)=>Z(X));if(!N||typeof N!=="object")return N;let K={...N};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=o7(K.type,j[K.id],K);for(let[X,L]of Object.entries(K))if(Array.isArray(L)||L&&typeof L==="object")K[X]=Z(L);return K};return Z(_)}function r7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function a7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function t7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=a7(_.completed_at||j?.submitted_at),z=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:z}}async function x6(_,$,j){if(!n7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await h7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=i7();c7(Z);let N=new Z.AdaptiveCard,z=B4();N.hostConfig=new Z.HostConfig(M6());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,X=$.state==="active"?$.payload:s7($.payload,K);N.parse(X),N.onExecuteAction=(O)=>{let G=d7(O);if(j?.onAction)O4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(G)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let I=F instanceof Error?F.message:String(F||"Action failed.");m7(_,I||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",G)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",z.buttonTextColor);let q=t7($);if(q){_.classList.add("adaptive-card-finished");let O=document.createElement("div");O.className=`adaptive-card-status adaptive-card-status-${$.state}`;let G=document.createElement("span");if(G.className="adaptive-card-status-label",G.textContent=q.label,O.appendChild(G),q.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=q.detail,O.appendChild(F)}_.appendChild(O)}if(O4(_),_.appendChild(L),q)r7(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function p2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>p2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${p2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function C6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:p2(j)})).filter(($)=>$.value)}function e7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function F4(_){if(!Array.isArray(_))return[];return _.filter(e7)}function T6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=p2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=C6(j).slice(0,4).map(({key:z,value:K})=>`${z}: ${K}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function S6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=C6(_.data),Z=j.length>0?j.slice(0,2).map(({key:L,value:q})=>`${L}: ${q}`).join(", "):p2(_.data)||null,N=j.length,z=j.slice(0,4),K=j.slice(4),X=K.length;return{title:$,summary:Z,fields:z,hiddenFields:K,fieldCount:N,hiddenFieldCount:X,submittedAt:_.submitted_at}}function _5(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?Z$($):null},{label:"Added",value:_?.created_at?K2(_.created_at):null}].filter((Z)=>Z.value)}function $5(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let z=$$(_);return`/office-viewer/?url=${encodeURIComponent(z)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function f6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=n_(()=>g2($?.content_type,Z),[$?.content_type,Z]),z=w6(N),K=n_(()=>A6($?.content_type),[$?.content_type]),[X,L]=f(N==="text"),[q,O]=f(""),[G,F]=f(null),I=k(null),p=n_(()=>_5($),[$]),u=n_(()=>$5(_,Z,N),[_,Z,N]),R=n_(()=>{if(!K||!q)return"";return i0(q)},[K,q]);return v(()=>{let A=(H)=>{if(H.key==="Escape")j()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[j]),v(()=>{if(!I.current||!R)return;I$(I.current);return},[R]),v(()=>{let A=!1;async function H(){if(N!=="text"){L(!1),F(null);return}L(!0),F(null);try{let x=await a1(_);if(!A)O(x)}catch{if(!A)F("Failed to load text preview.")}finally{if(!A)L(!1)}}return H(),()=>{A=!0}},[_,N]),U`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(A)=>{A.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${z}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${u&&U`
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
                            href=${$$(_)}
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
                    ${X&&U`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!X&&G&&U`<div class="attachment-preview-state">${G}</div>`}
                    ${!X&&!G&&N==="image"&&U`
                        <img class="attachment-preview-image" src=${$$(_)} alt=${Z} />
                    `}
                    ${!X&&!G&&(N==="pdf"||N==="office"||N==="drawio")&&u&&U`
                        <iframe class="attachment-preview-frame" src=${u} title=${Z}></iframe>
                    `}
                    ${!X&&!G&&N==="drawio"&&U`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!X&&!G&&N==="text"&&K&&U`
                        <div
                            ref=${I}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:R}}
                        />
                    `}
                    ${!X&&!G&&N==="text"&&!K&&U`
                        <pre class="attachment-preview-text">${q}</pre>
                    `}
                    ${!X&&!G&&N==="unsupported"&&U`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${p.map((A)=>U`
                        <div class="attachment-preview-meta-item" key=${A.label}>
                            <span class="attachment-preview-meta-label">${A.label}</span>
                            <span class="attachment-preview-meta-value">${A.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function R6({src:_,onClose:$}){return v(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),U`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function j5({mediaId:_,onPreview:$}){let[j,Z]=f(null);if(v(()=>{H2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",z=j.metadata?.size,K=z?Z$(z):"",L=g2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return U`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${$$(_)} download=${N} class="file-attachment-main">
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
                        ${K&&U`<span class="file-size">${K}</span>`}
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
                onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${L}
            </button>
        </div>
    `}function Z5({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=f(null);v(()=>{if(!Number.isFinite(j))return;H2(j).then(N).catch(()=>{});return},[j]);let z=Z?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?$$(j):null,L=g2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return U`
        <span class="attachment-pill" title=${z}>
            ${K?U`
                    <a href=${K} download=${z} class="attachment-pill-main" onClick=${(q)=>q.stopPropagation()}>
                        <${G$}
                            prefix="post"
                            label=${_.label}
                            title=${z}
                        />
                    </a>
                `:U`
                    <${G$}
                        prefix="post"
                        label=${_.label}
                        title=${z}
                    />
                `}
            ${Number.isFinite(j)&&Z&&U`
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
    `}function L1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?K2(Z):null;return U`
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
    `}function N5({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?Z$(_.size):"",N=_.mime_type||"",z=K5(N),K=z2(_.uri);return U`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(X)=>X.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${z}</span>
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
    `}function z5({block:_}){let[$,j]=f(!1),Z=_.uri||"Embedded resource",N=_.text||"",z=Boolean(_.data),K=_.mime_type||"";return U`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&U`
                ${N&&U`<pre class="resource-embed-content">${N}</pre>`}
                ${z&&U`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&U`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(X)=>{X.preventDefault(),X.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(G)=>G.charCodeAt(0))],{type:K||"application/octet-stream"}),q=URL.createObjectURL(L),O=document.createElement("a");O.href=q,O.download=Z.split("/").pop()||"resource",O.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function K5(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function Y5({preview:_}){let $=z2(_.url),j=z2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return U`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(z)=>z.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&U`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function W5(_,$){return typeof _==="string"?_:""}var G5=1800,V5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,X5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,q5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function L5(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function B5(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((z)=>z.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(z,K)=>{let X=K||"idle";if(z.dataset.copyState=X,X==="success")z.innerHTML=X5,z.setAttribute("aria-label","Copied"),z.setAttribute("title","Copied"),z.classList.add("is-success"),z.classList.remove("is-error");else if(X==="error")z.innerHTML=q5,z.setAttribute("aria-label","Copy failed"),z.setAttribute("title","Copy failed"),z.classList.add("is-error"),z.classList.remove("is-success");else z.innerHTML=V5,z.setAttribute("aria-label","Copy code"),z.setAttribute("title","Copy code"),z.classList.remove("is-success","is-error")};return $.forEach((z)=>{let K=document.createElement("div");K.className="post-code-block",z.parentNode?.insertBefore(K,z),K.appendChild(z);let X=document.createElement("button");X.type="button",X.className="post-code-copy-btn",N(X,"idle"),K.appendChild(X);let L=async(q)=>{q.preventDefault(),q.stopPropagation();let G=z.querySelector("code")?.textContent||"",F=await L5(G);N(X,F?"success":"error");let I=j.get(X);if(I)clearTimeout(I);let p=setTimeout(()=>{N(X,"idle"),j.delete(X)},G5);j.set(X,p)};X.addEventListener("click",L),Z.push(()=>{X.removeEventListener("click",L);let q=j.get(X);if(q)clearTimeout(q);if(K.parentNode)K.parentNode.insertBefore(z,K),K.remove()})}),()=>{Z.forEach((z)=>z())}}function O5(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let q=j[z];if(/^\s*-\s+/.test(q))N.push(q.replace(/^\s*-\s+/,"").trim());else if(!q.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,Z),X=j.slice(z),L=[...K,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function Q5(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let q=j[z];if(/^\s*-\s+/.test(q)){let G=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(G)N.push(G[1])}else if(!q.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,Z),X=j.slice(z),L=[...K,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function U5(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Images:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,attachments:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let q=j[z];if(/^\s*-\s+/.test(q)){let O=q.replace(/^\s*-\s+/,"").trim(),G=O.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||O.match(/^attachment:([^\s]+)\s+(.+)$/i);if(G){let F=G[1],I=(G[2]||"").trim()||F;N.push({id:F,label:I,raw:O})}else N.push({id:null,label:O,raw:O})}else if(!q.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let K=j.slice(0,Z),X=j.slice(z),L=[...K,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function F5(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function H5(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(F5).sort((O,G)=>G.length-O.length),N=new RegExp(`(${Z.join("|")})`,"gi"),z=new RegExp(`^(${Z.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),X=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),L=[],q;while(q=X.nextNode())L.push(q);for(let O of L){let G=O.nodeValue;if(!G||!N.test(G)){N.lastIndex=0;continue}N.lastIndex=0;let F=O.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let I=G.split(N).filter((u)=>u!=="");if(I.length===0)continue;let p=K.createDocumentFragment();for(let u of I)if(z.test(u)){let R=K.createElement("mark");R.className="search-highlight-term",R.textContent=u,p.appendChild(R)}else p.appendChild(K.createTextNode(u));O.parentNode.replaceChild(p,O)}return K.body.innerHTML}function v6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:z,agentAvatarUrl:K,userName:X,userAvatarUrl:L,userAvatarBackground:q,onDelete:O,isThreadReply:G,isThreadPrev:F,isThreadNext:I,isRemoving:p,highlightQuery:u,onFileRef:R}){let[A,H]=f(null),[x,b]=f(()=>new Set),i=k(null),n=_.data,e=n.type==="agent_response",d=X||"You",N_=e?z||Q6:d,c=e?L4(z,K,!0):L4(d,L),X_=typeof q==="string"?q.trim().toLowerCase():"",c_=!e&&c.image&&(X_==="clear"||X_==="transparent"),__=e&&Boolean(c.image),a=`background-color: ${c_||__?"transparent":c.color}`,Z_=n.content_meta,$_=Boolean(Z_?.truncated),B_=Boolean(Z_?.preview),M_=$_&&!B_,W_=$_?{originalLength:Number.isFinite(Z_?.original_length)?Z_.original_length:n.content?n.content.length:0,maxLength:Number.isFinite(Z_?.max_length)?Z_.max_length:0}:null,y_=n.content_blocks||[],O_=n.media_ids||[],U_=W5(n.content,n.link_previews),{content:f_,fileRefs:D_}=O5(U_),{content:I_,messageRefs:$0}=Q5(f_),{content:F0,attachments:V_}=U5(I_);U_=F0;let s=U4(y_),F_=F4(y_),z_=s.length===1&&typeof s[0]?.fallback_text==="string"?s[0].fallback_text.trim():"",A_=F_.length===1?T6(F_[0]).trim():"",R_=Boolean(z_)&&U_?.trim()===z_||Boolean(A_)&&U_?.trim()===A_,h_=Boolean(U_)&&!M_&&!R_,a_=typeof u==="string"?u.trim():"",i_=n_(()=>{if(!U_||R_)return"";let T=i0(U_,j);return a_?H5(T,a_):T},[U_,R_,a_]),E_=(T,t)=>{T.stopPropagation(),H($$(t))},[H_,d_]=f(null),t_=(T)=>{d_(T)},g_=(T)=>{T.stopPropagation(),O?.(_)},v_=(T)=>{b((t)=>{let K_=new Set(t);if(K_.has(T))K_.delete(T);else K_.add(T);return K_})},V0=(T,t)=>{let K_=new Set;if(!T||t.length===0)return{content:T,usedIds:K_};return{content:T.replace(/attachment:([^\s)"']+)/g,(G_,T_,f0,F$)=>{let z$=T_.replace(/^\/+/,""),y0=t.find((j0)=>j0.name&&j0.name.toLowerCase()===z$.toLowerCase()&&!K_.has(j0.id))||t.find((j0)=>!K_.has(j0.id));if(!y0)return G_;if(K_.add(y0.id),F$.slice(Math.max(0,f0-2),f0)==="](")return`/media/${y0.id}`;return y0.name||"attachment"}),usedIds:K_}},e_=[],l0=[],X0=[],b_=[],x_=[],k_=[],k0=0;if(y_.length>0)y_.forEach((T)=>{if(T?.type==="text"&&T.annotations)k_.push(T.annotations);if(T?.type==="resource_link")b_.push(T);else if(T?.type==="resource")x_.push(T);else if(T?.type==="file"){let t=O_[k0++];if(t)l0.push(t),X0.push({id:t,name:T?.name||T?.filename||T?.title})}else if(T?.type==="image"||!T?.type){let t=O_[k0++];if(t){let K_=typeof T?.mime_type==="string"?T.mime_type:void 0;e_.push({id:t,annotations:T?.annotations,mimeType:K_}),X0.push({id:t,name:T?.name||T?.filename||T?.title})}}});else if(O_.length>0)O_.forEach((T)=>{e_.push({id:T,annotations:null}),X0.push({id:T,name:null})});if(V_.length>0)V_.forEach((T)=>{if(!T?.id)return;let t=X0.find((K_)=>String(K_.id)===String(T.id));if(t&&!t.name)t.name=T.label});let{content:B0,usedIds:w_}=V0(U_,X0);U_=B0;let l_=e_.filter(({id:T})=>!w_.has(T)),o_=l0.filter((T)=>!w_.has(T)),C_=V_.length>0?V_.map((T,t)=>({id:T.id||`attachment-${t+1}`,label:T.label||`attachment-${t+1}`})):X0.map((T,t)=>({id:T.id,label:T.name||`attachment-${t+1}`})),O0=n_(()=>U4(y_),[y_]),C0=n_(()=>F4(y_),[y_]);v(()=>{if(!i.current)return;return I$(i.current),B5(i.current)},[i_]);let n0=k(null);return v(()=>{if(!n0.current||O0.length===0)return;let T=n0.current;T.innerHTML="";for(let t of O0){let K_=document.createElement("div");T.appendChild(K_),x6(K_,t,{onAction:async(J_)=>{if(J_.type==="Action.OpenUrl"){let G_=z2(J_.url||"");if(!G_)throw Error("Invalid URL");window.open(G_,"_blank","noopener,noreferrer");return}if(J_.type==="Action.Submit"){await n1({post_id:_.id,thread_id:n.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:t.card_id,action:{type:J_.type,title:J_.title||"",data:J_.data}});return}console.warn("[post] unsupported adaptive card action:",J_.type,J_)}}).catch((J_)=>{console.error("[post] adaptive card render error:",J_),K_.textContent=t.fallback_text||"Card failed to render."})}},[O0,n.thread_id,_.id]),U`
        <div id=${`post-${_.id}`} class="post ${e?"agent-post":""} ${G?"thread-reply":""} ${F?"thread-prev":""} ${I?"thread-next":""} ${p?"removing":""}" onClick=${$}>
            <div class="post-avatar ${e?"agent-avatar":""} ${c.image?"has-image":""}" style=${a}>
                ${c.image?U`<img src=${c.image} alt=${N_} />`:c.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${g_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${N_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(T)=>{if(T.preventDefault(),T.stopPropagation(),Z)Z(_.id)}}>${y6(_.timestamp)}</a>
                </div>
                ${M_&&W_&&U`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${u2(W_.originalLength)} chars
                            ${W_.maxLength?U` • Display limit: ${u2(W_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${B_&&W_&&U`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${u2(W_.maxLength)} of ${u2(W_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(D_.length>0||$0.length>0||C_.length>0)&&U`
                    <div class="post-file-refs">
                        ${$0.map((T)=>{let t=(K_)=>{if(K_.preventDefault(),K_.stopPropagation(),N)N(T,_.chat_jid||null);else{let J_=document.getElementById("post-"+T);if(J_)J_.scrollIntoView({behavior:"smooth",block:"center"}),J_.classList.add("post-highlight"),setTimeout(()=>J_.classList.remove("post-highlight"),2000)}};return U`
                                <a href=${`#msg-${T}`} class="post-msg-pill-link" onClick=${t}>
                                    <${G$}
                                        prefix="post"
                                        label=${"msg:"+T}
                                        title=${"Message "+T}
                                        icon="message"
                                        onClick=${t}
                                    />
                                </a>
                            `})}
                        ${D_.map((T)=>{let t=T.split("/").pop()||T;return U`
                                <${G$}
                                    prefix="post"
                                    label=${t}
                                    title=${T}
                                    onClick=${()=>R?.(T)}
                                />
                            `})}
                        ${C_.map((T)=>U`
                            <${Z5}
                                key=${T.id}
                                attachment=${T}
                                onPreview=${t_}
                            />
                        `)}
                    </div>
                `}
                ${h_&&U`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:i_}}
                        onClick=${(T)=>{if(T.target.classList.contains("hashtag")){T.preventDefault(),T.stopPropagation();let t=T.target.dataset.hashtag;if(t)j?.(t)}else if(T.target.tagName==="IMG")T.preventDefault(),T.stopPropagation(),H(T.target.src)}}
                    />
                `}
                ${O0.length>0&&U`
                    <div ref=${n0} class="post-adaptive-cards" />
                `}
                ${C0.length>0&&U`
                    <div class="post-adaptive-card-submissions">
                        ${C0.map((T,t)=>{let K_=S6(T),J_=`${T.card_id}-${t}`,G_=x.has(J_);return U`
                                <div key=${J_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${K_.title}</span>
                                        </div>
                                    </div>
                                    ${K_.summary&&U`
                                        <div class="adaptive-card-submission-summary">${K_.summary}</div>
                                    `}
                                    ${K_.fields.length>0&&U`
                                        <div class="adaptive-card-submission-fields">
                                            ${K_.fields.map((T_)=>U`
                                                <span class="adaptive-card-submission-field" title=${`${T_.key}: ${T_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${T_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${T_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    ${K_.hiddenFieldCount>0&&U`
                                        <button
                                            type="button"
                                            class="adaptive-card-submission-toggle"
                                            aria-expanded=${G_?"true":"false"}
                                            onClick=${(T_)=>{T_.preventDefault(),T_.stopPropagation(),v_(J_)}}
                                        >
                                            ${G_?`Hide ${K_.hiddenFieldCount} more`:`Show ${K_.hiddenFieldCount} more`}
                                        </button>
                                    `}
                                    ${G_&&K_.hiddenFields.length>0&&U`
                                        <div class="adaptive-card-submission-fields adaptive-card-submission-fields-extra">
                                            ${K_.hiddenFields.map((T_)=>U`
                                                <span class="adaptive-card-submission-field" title=${`${T_.key}: ${T_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${T_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${T_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${K2(K_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${k_.length>0&&U`
                    ${k_.map((T,t)=>U`
                        <${L1} key=${t} annotations=${T} />
                    `)}
                `}
                ${l_.length>0&&U`
                    <div class="media-preview">
                        ${l_.map(({id:T,mimeType:t})=>{let J_=typeof t==="string"&&t.toLowerCase().startsWith("image/svg")?$$(T):r1(T);return U`
                                <img 
                                    key=${T} 
                                    src=${J_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(G_)=>E_(G_,T)}
                                />
                            `})}
                    </div>
                `}
                ${l_.length>0&&U`
                    ${l_.map(({annotations:T},t)=>U`
                        ${T&&U`<${L1} key=${t} annotations=${T} />`}
                    `)}
                `}
                ${o_.length>0&&U`
                    <div class="file-attachments">
                        ${o_.map((T)=>U`
                            <${j5} key=${T} mediaId=${T} onPreview=${t_} />
                        `)}
                    </div>
                `}
                ${b_.length>0&&U`
                    <div class="resource-links">
                        ${b_.map((T,t)=>U`
                            <div key=${t}>
                                <${N5} block=${T} />
                                <${L1} annotations=${T.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${x_.length>0&&U`
                    <div class="resource-embeds">
                        ${x_.map((T,t)=>U`
                            <div key=${t}>
                                <${z5} block=${T} />
                                <${L1} annotations=${T.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${n.link_previews?.length>0&&U`
                    <div class="link-previews">
                        ${n.link_previews.map((T,t)=>U`
                            <${Y5} key=${t} preview=${T} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${A&&U`<${R6} src=${A} onClose=${()=>H(null)} />`}
        ${H_&&U`
            <${f6}
                mediaId=${H_.mediaId}
                info=${H_.info}
                onClose=${()=>d_(null)}
            />
        `}
    `}function u6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:z,onScrollToMessage:K,onFileRef:X,emptyMessage:L,timelineRef:q,agents:O,user:G,onDeletePost:F,reverse:I=!0,removingPostIds:p,searchQuery:u}){let[R,A]=f(!1),H=k(null),x=typeof IntersectionObserver<"u",b=M(async()=>{if(!j||!$||R)return;A(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{A(!1)}},[$,R,j]),i=M((__)=>{let{scrollTop:a,scrollHeight:Z_,clientHeight:$_}=__.target,B_=I?Z_-$_-a:a,M_=Math.max(300,$_);if(B_<M_)b()},[I,b]);v(()=>{if(!x)return;let __=H.current,a=q?.current;if(!__||!a)return;let Z_=300,$_=new IntersectionObserver((B_)=>{for(let M_ of B_){if(!M_.isIntersecting)continue;b()}},{root:a,rootMargin:`${Z_}px 0px ${Z_}px 0px`,threshold:0});return $_.observe(__),()=>$_.disconnect()},[x,$,j,q,b]);let n=k(b);if(n.current=b,v(()=>{if(x)return;if(!q?.current)return;let{scrollTop:__,scrollHeight:a,clientHeight:Z_}=q.current,$_=I?a-Z_-__:__,B_=Math.max(300,Z_);if($_<B_)n.current?.()},[x,_,$,I,q]),v(()=>{if(!q?.current)return;if(!$||R)return;let{scrollTop:__,scrollHeight:a,clientHeight:Z_}=q.current,$_=I?a-Z_-__:__,B_=Math.max(300,Z_);if(a<=Z_+1||$_<B_)n.current?.()},[_,$,R,I,q]),!_)return U`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return U`
            <div class="timeline" ref=${q}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${L||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let e=_.slice().sort((__,a)=>__.id-a.id),d=(__)=>{let a=__?.data?.thread_id;if(a===null||a===void 0||a==="")return null;let Z_=Number(a);return Number.isFinite(Z_)?Z_:null},N_=new Map;for(let __=0;__<e.length;__+=1){let a=e[__],Z_=Number(a?.id),$_=d(a);if($_!==null){let B_=N_.get($_)||{anchorIndex:-1,replyIndexes:[]};B_.replyIndexes.push(__),N_.set($_,B_)}else if(Number.isFinite(Z_)){let B_=N_.get(Z_)||{anchorIndex:-1,replyIndexes:[]};B_.anchorIndex=__,N_.set(Z_,B_)}}let c=new Map;for(let[__,a]of N_.entries()){let Z_=new Set;if(a.anchorIndex>=0)Z_.add(a.anchorIndex);for(let $_ of a.replyIndexes)Z_.add($_);c.set(__,Array.from(Z_).sort(($_,B_)=>$_-B_))}let X_=e.map((__,a)=>{let Z_=d(__);if(Z_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=c.get(Z_);if(!$_||$_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let B_=$_.indexOf(a);if(B_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:B_>0,hasThreadNext:B_<$_.length-1}}),c_=U`<div class="timeline-sentinel" ref=${H}></div>`;return U`
        <div class="timeline ${I?"reverse":"normal"}" ref=${q} onScroll=${i}>
            <div class="timeline-content">
                ${I?c_:null}
                ${e.map((__,a)=>{let Z_=Boolean(__.data?.thread_id&&__.data.thread_id!==__.id),$_=p?.has?.(__.id),B_=X_[a]||{};return U`
                    <${v6}
                        key=${__.id}
                        post=${__}
                        isThreadReply=${Z_}
                        isThreadPrev=${B_.hasThreadPrev}
                        isThreadNext=${B_.hasThreadNext}
                        isRemoving=${$_}
                        highlightQuery=${u}
                        agentName=${U6(__.data?.agent_id,O||{})}
                        agentAvatarUrl=${F6(__.data?.agent_id,O||{})}
                        userName=${G?.name||G?.user_name}
                        userAvatarUrl=${G?.avatar_url||G?.avatarUrl||G?.avatar}
                        userAvatarBackground=${G?.avatar_background||G?.avatarBackground}
                        onClick=${()=>Z?.(__)}
                        onHashtagClick=${N}
                        onMessageRef=${z}
                        onScrollToMessage=${K}
                        onFileRef=${X}
                        onDelete=${F}
                    />
                `})}
                ${I?null:c_}
            </div>
        </div>
    `}class m6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let z=N===!0?0:typeof N==="number"?N:0;if(z>j)j=z,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var r_=new m6;var B1=null,H4=null;function g6(){if(H4)return Promise.resolve(H4);if(!B1)B1=import("/static/dist/editor.bundle.js").then((_)=>{return H4=_,_}).catch((_)=>{throw B1=null,_});return B1}class p6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await g6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var J4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new p6(_,$)}};function D4(){g6().catch(()=>{})}var k4="piclaw://terminal";var J5={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},D5={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},O1=null,E4=null;function E5(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function k5(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,z)=>{let K=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!E5(K))return $(N,z);if(N instanceof Request)return $(new Request(j,N));return $(j,z)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function y5(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!O1)O1=k5(()=>Promise.resolve($.init?.())).catch((j)=>{throw O1=null,j});return await O1,$}async function A5(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!E4)E4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await E4}async function w5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function P5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function M5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function b$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function I5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function c6(){let _=M5(),$=_?D5:J5,j=b$("--bg-primary",_?"#000000":"#ffffff"),Z=b$("--text-primary",_?"#e7e9ea":"#0f1419"),N=b$("--text-secondary",_?"#71767b":"#536471"),z=b$("--accent-color","#1d9bf0"),K=b$("--danger-color",_?"#ff7b72":"#cf222e"),X=b$("--success-color",_?"#7ee787":"#1a7f37"),L=b$("--bg-hover",_?"#1d1f23":"#e8ebed"),q=b$("--border-color",_?"#2f3336":"#eff3f4"),O=b$("--accent-soft-strong",I5(z,_?"47":"33"));return{background:j,foreground:Z,cursor:z,cursorAccent:j,selectionBackground:O,selectionForeground:Z,black:L,red:K,green:X,yellow:$.yellow,blue:z,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:q}}class y4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,z=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(z)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await y5();if(await A5(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:c6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=c6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await w5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(P5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var A4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new y4(_,$)}},w4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new y4(_,$)}};function n$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function b5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,z=Z?.[2]||"",K=Z?.[3]||"",X=String($||"").split("/").slice(0,-1).join("/"),q=N.startsWith("/")?N:`${X?`${X}/`:""}${N}`,O=[];for(let F of q.split("/")){if(!F||F===".")continue;if(F===".."){if(O.length>0)O.pop();continue}O.push(F)}let G=O.join("/");return`${Z1(G)}${z}${K}`}function c2(_){return _?.preview||null}function x5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function C5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function T5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${n$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${n$(Z$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${n$(K2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${n$(C5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${n$(x5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${n$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function S5(_){let $=c2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=T5(_,$);if($.kind==="image"){let Z=$.url||($.path?Z1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${n$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=i0($.text||"",null,{rewriteImageSrc:(N)=>b5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${n$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class P4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=S5(this.context)}getContent(){let _=c2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=c2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var M4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=c2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new P4(_,$)}},I4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return c2(_)||_?.path?1:!1},mount(_,$){return new P4(_,$)}};var f5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),R5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},v5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function i6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function h6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class l6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=i6(j),z=v5[N]||"\uD83D\uDCC4",K=R5[N]||"Office Document",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${z}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${h6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${h6(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let L=X.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class n6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var b4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=i6(_?.path);if(!$||!f5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new l6(_,$);return new n6(_,$)}};var u5=/\.(csv|tsv)$/i;function d6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class o6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${d6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${d6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#csv-open-tab");if(K)K.addEventListener("click",()=>{let X=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class s6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var x4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!u5.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new o6(_,$);return new s6(_,$)}};var m5=/\.pdf$/i;function g5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class r6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${g5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#pdf-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class a6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var C4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!m5.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new r6(_,$);return new a6(_,$)}};var p5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function T4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class t6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${T4(N)}" alt="${T4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${T4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let X=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class e6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var S4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!p5.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new t6(_,$);return new e6(_,$)}};function c5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function h5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var f4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function _8(_){let $=String(_||"").trim();return $?$:f4}function i5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function l5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function n5(_,$="*"){try{let j=(z)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...z}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let z=Z.prototype.saveData;Z.prototype.saveData=function(K,X,L,q,O,G){try{if(K&&L!=null&&j({filename:K,format:X,data:L,mimeType:q,base64Encoded:Boolean(O),defaultMode:G}))return}catch(F){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",F)}return z.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let z=N.prototype.exportFile;N.prototype.exportFile=function(K,X,L,q,O,G){try{if(X&&j({filename:X,data:K,mimeType:L,base64Encoded:Boolean(q),mode:O,folderId:G}))return}catch(F){console.warn("[drawio-pane] export intercept failed, falling back to native export",F)}return z.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function $8(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${l5(j)}`}class j8{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${h5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#drawio-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Z8{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=i5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let z=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(n5(this.iframe.contentWindow))return;setTimeout(z,250)};z()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=f4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await $8(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await $8(_,"image/png");else this.xmlData=_8(await _.text());else if(_.status===404)this.xmlData=f4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?_8(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var R4={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!c5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new j8(_,$);return new Z8(_,$)}};class N8{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var p_=new N8;var Q1="workspaceExplorerScale",d5=["compact","default","comfortable"],o5=new Set(d5),s5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function z8(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return o5.has(j)?j:$}function v4(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function r5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function a5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function u4(_={}){let $=r5(_),j=_.stored?z8(_.stored,$):$;return a5(j,_)}function K8(_){return s5[z8(_)]}var t5=60000,V8=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function X8(_,$,j,Z=0,N=[]){if(!j&&V8(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let z of _.children)X8(z,$,j,Z+1,N);return N}function Y8(_,$,j){if(!_)return"";let Z=[],N=(z)=>{if(!j&&V8(z))return;if(Z.push(z.type==="dir"?`d:${z.path}`:`f:${z.path}`),z.children&&$?.has(z.path))for(let K of z.children)N(K)};return N(_),Z.join("|")}function c4(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((X)=>[X?.path,X])):new Map,z=!j||j.length!==Z.length,K=Z.map((X)=>{let L=c4(N.get(X.path),X);if(L!==N.get(X.path))z=!0;return L});return z?{...$,children:K}:_}function g4(_,$,j){if(!_)return _;if(_.path===$)return c4(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((z)=>{let K=g4(z,$,j);if(K!==z)Z=!0;return K});return Z?{..._,children:N}:_}var q8=4,m4=14,e5=8,_j=16;function L8(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=L8(Z);return _.__bytes=j,j}function B8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=q8)return Z;let N=Array.isArray(_.children)?_.children:[],z=[];for(let X of N){let L=Math.max(0,Number(X?.__bytes??X?.size??0));if(L<=0)continue;if(X.type==="dir")z.push({kind:"dir",node:X,size:L});else z.push({kind:"file",name:X.name,path:X.path,size:L})}z.sort((X,L)=>L.size-X.size);let K=z;if(z.length>m4){let X=z.slice(0,m4-1),L=z.slice(m4-1),q=L.reduce((O,G)=>O+G.size,0);X.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:q}),K=X}return Z.children=K.map((X)=>{if(X.kind==="dir")return B8(X.node,$+1);return{name:X.name,path:X.path,size:X.size,children:[]}}),Z}function W8(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function O8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),z=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${z}%)`}function U1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function h4(_,$,j,Z,N,z){let K=Math.PI*2-0.0001,X=z-N>K?N+K:z,L=U1(_,$,Z,N),q=U1(_,$,Z,X),O=U1(_,$,j,X),G=U1(_,$,j,N),F=X-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${F} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,"Z"].join(" ")}var Q8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function U8(_,$,j){let Z=[],N=[],z=Math.max(0,Number($)||0),K=(X,L,q,O)=>{let G=Array.isArray(X?.children)?X.children:[];if(!G.length)return;let F=Math.max(0,Number(X.size)||0);if(F<=0)return;let I=q-L,p=L;G.forEach((u,R)=>{let A=Math.max(0,Number(u.size)||0);if(A<=0)return;let H=A/F,x=p,b=R===G.length-1?q:p+I*H;if(p=b,b-x<0.003)return;let i=Q8[O];if(i){let n=O8(x,O,j);if(Z.push({key:u.path,path:u.path,label:u.name,size:A,color:n,depth:O,startAngle:x,endAngle:b,innerRadius:i[0],outerRadius:i[1],d:h4(120,120,i[0],i[1],x,b)}),O===1)N.push({key:u.path,name:u.name,size:A,pct:z>0?A/z*100:0,color:n})}if(O<q8)K(u,x,b,O+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function p4(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=p4(Z,$);if(N)return N}return null}function F8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=Q8[1];if(!N)return{segments:[],legend:[]};let z=-Math.PI/2,K=Math.PI*3/2,X=O8(z,1,Z),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:X,depth:1,startAngle:z,endAngle:K,innerRadius:N[0],outerRadius:N[1],d:h4(120,120,N[0],N[1],z,K)}],legend:[{key:q,name:_,size:j,pct:100,color:X}]}}function G8(_,$=!1,j=!1){if(!_)return null;let Z=L8(_),N=B8(_,0),z=N.size||Z,{segments:K,legend:X}=U8(N,z,j);if(!K.length&&z>0){let L=F8("[files]",N.path,z,j);K=L.segments,X=L.legend}return{root:N,totalSize:z,segments:K,legend:X,truncated:$,isDarkTheme:j}}function $j({payload:_}){if(!_)return null;let[$,j]=f(null),[Z,N]=f(_?.root?.path||"."),[z,K]=f(()=>[_?.root?.path||"."]),[X,L]=f(!1);v(()=>{let c=_?.root?.path||".";N(c),K([c]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Z)return;L(!0);let c=setTimeout(()=>L(!1),180);return()=>clearTimeout(c)},[Z]);let q=n_(()=>{return p4(_.root,Z)||_.root},[_?.root,Z]),O=q?.size||_.totalSize||0,{segments:G,legend:F}=n_(()=>{let c=U8(q,O,_.isDarkTheme);if(c.segments.length>0)return c;if(O<=0)return c;let X_=q?.children?.length?"Total":"[files]";return F8(X_,q?.path||_?.root?.path||".",O,_.isDarkTheme)},[q,O,_.isDarkTheme,_?.root?.path]),[I,p]=f(G),u=k(new Map),R=k(0);v(()=>{let c=u.current,X_=new Map(G.map((Z_)=>[Z_.key,Z_])),c_=performance.now(),__=220,a=(Z_)=>{let $_=Math.min(1,(Z_-c_)/220),B_=$_*(2-$_),M_=G.map((W_)=>{let O_=c.get(W_.key)||{startAngle:W_.startAngle,endAngle:W_.startAngle,innerRadius:W_.innerRadius,outerRadius:W_.innerRadius},U_=(F0,V_)=>F0+(V_-F0)*B_,f_=U_(O_.startAngle,W_.startAngle),D_=U_(O_.endAngle,W_.endAngle),I_=U_(O_.innerRadius,W_.innerRadius),$0=U_(O_.outerRadius,W_.outerRadius);return{...W_,d:h4(120,120,I_,$0,f_,D_)}});if(p(M_),$_<1)R.current=requestAnimationFrame(a)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(a),u.current=X_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[G]);let A=I.length?I:G,H=O>0?Z$(O):"0 B",x=q?.name||"",i=(x&&x!=="."?x:"Total")||"Total",n=H,e=z.length>1,d=(c)=>{if(!c?.path)return;let X_=p4(_.root,c.path);if(!X_||!Array.isArray(X_.children)||X_.children.length===0)return;K((c_)=>[...c_,X_.path]),N(X_.path),j(null)},N_=()=>{if(!e)return;K((c)=>{let X_=c.slice(0,-1);return N(X_[X_.length-1]||_?.root?.path||"."),X_}),j(null)};return U`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${X?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${A.length}
                data-base-size=${O}>
                ${A.map((c)=>U`
                    <path
                        key=${c.key}
                        d=${c.d}
                        fill=${c.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===c.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(c)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(c)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>d(c)}
                    >
                        <title>${c.label} — ${Z$(c.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${e?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${i}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${n}</text>
                </g>
            </svg>
            ${F.length>0&&U`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((c)=>U`
                        <div key=${c.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${c.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${c.name}>${c.name}</span>
                            <span class="workspace-folder-starburst-size">${Z$(c.size)}</span>
                            <span class="workspace-folder-starburst-pct">${c.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&U`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function jj({mediaId:_}){let[$,j]=f(null);if(v(()=>{if(!_)return;H2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?Z$($.metadata.size):"";return U`
        <a href=${$$(_)} download=${Z} class="file-attachment"
            onClick=${(z)=>z.stopPropagation()}>
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
    `}function H8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:z,terminalVisible:K=!1}){let[X,L]=f(null),[q,O]=f(new Set(["."])),[G,F]=f(null),[I,p]=f(null),[u,R]=f(""),[A,H]=f(null),[x,b]=f(null),[i,n]=f(!0),[e,d]=f(!1),[N_,c]=f(null),[X_,c_]=f(()=>J2("workspaceShowHidden",!1)),[__,a]=f(!1),[Z_,$_]=f(null),[B_,M_]=f(null),[W_,y_]=f(null),[O_,U_]=f(!1),[f_,D_]=f(null),[I_,$0]=f(()=>W8()),[F0,V_]=f(()=>u4({stored:j$(Q1),...v4()})),[s,F_]=f(!1),z_=k(q),A_=k(""),R_=k(null),h_=k(0),a_=k(new Set),i_=k(null),E_=k(new Map),H_=k(_),d_=k(Z),t_=k(null),g_=k(null),v_=k(null),V0=k(null),e_=k(null),l0=k(null),X0=k("."),b_=k(null),x_=k({path:null,dragging:!1,startX:0,startY:0}),k_=k({path:null,dragging:!1,startX:0,startY:0}),k0=k({path:null,timer:0}),B0=k(!1),w_=k(0),l_=k(new Map),o_=k(null),C_=k(null),O0=k(null),C0=k(null),n0=k(null),T=k(null),t=k(X_),K_=k($),J_=k(j??$),G_=k(0),T_=k(W_),f0=k(__),F$=k(Z_),z$=k(null),x$=k({x:0,y:0}),y0=k(0),V$=k(null),j0=k(G),M0=k(I),X$=k(null),d0=k(null),T0=k(A);H_.current=_,d_.current=Z,v(()=>{z_.current=q},[q]),v(()=>{t.current=X_},[X_]),v(()=>{K_.current=$},[$]),v(()=>{J_.current=j??$},[j,$]),v(()=>{T_.current=W_},[W_]),v(()=>{if(typeof window>"u")return;let Y=()=>{V_(u4({stored:j$(Q1),...v4()}))};Y();let Q=()=>Y(),J=()=>Y(),E=(m)=>{if(!m||m.key===null||m.key===Q1)Y()};window.addEventListener("resize",Q),window.addEventListener("focus",J),window.addEventListener("storage",E);let C=window.matchMedia?.("(pointer: coarse)"),l=window.matchMedia?.("(hover: none)"),o=(m,Y_)=>{if(!m)return;if(m.addEventListener)m.addEventListener("change",Y_);else if(m.addListener)m.addListener(Y_)},h=(m,Y_)=>{if(!m)return;if(m.removeEventListener)m.removeEventListener("change",Y_);else if(m.removeListener)m.removeListener(Y_)};return o(C,Q),o(l,Q),()=>{window.removeEventListener("resize",Q),window.removeEventListener("focus",J),window.removeEventListener("storage",E),h(C,Q),h(l,Q)}},[]),v(()=>{let Y=(Q)=>{let J=Q?.detail?.path;if(!J)return;let E=J.split("/"),C=[];for(let l=1;l<E.length;l++)C.push(E.slice(0,l).join("/"));if(C.length)O((l)=>{let o=new Set(l);o.add(".");for(let h of C)o.add(h);return o});F(J),requestAnimationFrame(()=>{let l=document.querySelector(`[data-path="${CSS.escape(J)}"]`);if(l)l.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",Y),()=>window.removeEventListener("workspace-reveal-path",Y)},[]),v(()=>{f0.current=__},[__]),v(()=>{F$.current=Z_},[Z_]),v(()=>{j0.current=G},[G]),v(()=>{M0.current=I},[I]),v(()=>{T0.current=A},[A]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let Y=()=>$0(W8());Y();let Q=window.matchMedia?.("(prefers-color-scheme: dark)"),J=()=>Y();if(Q?.addEventListener)Q.addEventListener("change",J);else if(Q?.addListener)Q.addListener(J);let E=typeof MutationObserver<"u"?new MutationObserver(()=>Y()):null;if(E?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)E?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(Q?.removeEventListener)Q.removeEventListener("change",J);else if(Q?.removeListener)Q.removeListener(J);E?.disconnect()}},[]),v(()=>{if(!I)return;let Y=e_.current;if(!Y)return;let Q=requestAnimationFrame(()=>{try{Y.focus(),Y.select()}catch{}});return()=>cancelAnimationFrame(Q)},[I]),v(()=>{if(!s)return;let Y=(J)=>{let E=J?.target;if(!(E instanceof Element))return;if(n0.current?.contains(E))return;if(T.current?.contains(E))return;F_(!1)},Q=(J)=>{if(J?.key==="Escape")F_(!1),T.current?.focus?.()};return document.addEventListener("mousedown",Y),document.addEventListener("touchstart",Y,{passive:!0}),document.addEventListener("keydown",Q),()=>{document.removeEventListener("mousedown",Y),document.removeEventListener("touchstart",Y),document.removeEventListener("keydown",Q)}},[s]);let d$=async(Y)=>{d(!0),H(null),b(null);try{let Q=await t1(Y,20000);H(Q)}catch(Q){H({error:Q.message||"Failed to load preview"})}finally{d(!1)}};t_.current=d$;let H0=async()=>{if(!K_.current)return;try{let Y=await T2("",1,t.current),Q=Y8(Y.root,z_.current,t.current);if(Q===A_.current){n(!1);return}if(A_.current=Q,R_.current=Y.root,!h_.current)h_.current=requestAnimationFrame(()=>{h_.current=0,L((J)=>c4(J,R_.current)),n(!1)})}catch(Y){c(Y.message||"Failed to load workspace"),n(!1)}},H$=async(Y)=>{if(!Y)return;if(a_.current.has(Y))return;a_.current.add(Y);try{let Q=await T2(Y,1,t.current);L((J)=>g4(J,Y,Q.root))}catch(Q){c(Q.message||"Failed to load workspace")}finally{a_.current.delete(Y)}};g_.current=H$;let Z0=M(()=>{let Y=G;if(!Y)return".";let Q=E_.current?.get(Y);if(Q&&Q.type==="dir")return Q.path;if(Y==="."||!Y.includes("/"))return".";let J=Y.split("/");return J.pop(),J.join("/")||"."},[G]),K$=M((Y)=>{let Q=Y?.closest?.(".workspace-row");if(!Q)return null;let J=Q.dataset.path,E=Q.dataset.type;if(!J)return null;if(E==="dir")return J;if(J.includes("/")){let C=J.split("/");return C.pop(),C.join("/")||"."}return"."},[]),q$=M((Y)=>{return K$(Y?.target||null)},[K$]),A0=M((Y)=>{T_.current=Y,y_(Y)},[]),S0=M(()=>{let Y=k0.current;if(Y?.timer)clearTimeout(Y.timer);k0.current={path:null,timer:0}},[]),o0=M((Y)=>{if(!Y||Y==="."){S0();return}let Q=E_.current?.get(Y);if(!Q||Q.type!=="dir"){S0();return}if(z_.current?.has(Y)){S0();return}if(k0.current?.path===Y)return;S0();let J=setTimeout(()=>{k0.current={path:null,timer:0},g_.current?.(Y),O((E)=>{let C=new Set(E);return C.add(Y),C})},600);k0.current={path:Y,timer:J}},[S0]),L$=M((Y,Q)=>{if(x$.current={x:Y,y:Q},y0.current)return;y0.current=requestAnimationFrame(()=>{y0.current=0;let J=z$.current;if(!J)return;let E=x$.current;J.style.transform=`translate(${E.x+12}px, ${E.y+12}px)`})},[]),J$=M((Y)=>{if(!Y)return;let J=(E_.current?.get(Y)?.name||Y.split("/").pop()||Y).trim();if(!J)return;M_({path:Y,label:J})},[]),C$=M(()=>{if(M_(null),y0.current)cancelAnimationFrame(y0.current),y0.current=0;if(z$.current)z$.current.style.transform="translate(-9999px, -9999px)"},[]),T$=M((Y)=>{if(!Y)return".";let Q=E_.current?.get(Y);if(Q&&Q.type==="dir")return Q.path;if(Y==="."||!Y.includes("/"))return".";let J=Y.split("/");return J.pop(),J.join("/")||"."},[]),J0=M(()=>{p(null),R("")},[]),B$=M((Y)=>{if(!Y)return;let J=(E_.current?.get(Y)?.name||Y.split("/").pop()||Y).trim();if(!J||Y===".")return;p(Y),R(J)},[]),s0=M(async()=>{let Y=M0.current;if(!Y)return;let Q=(u||"").trim();if(!Q){J0();return}let J=E_.current?.get(Y),E=(J?.name||Y.split("/").pop()||Y).trim();if(Q===E){J0();return}try{let l=(await $4(Y,Q))?.path||Y,o=Y.includes("/")?Y.split("/").slice(0,-1).join("/")||".":".";if(J0(),c(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:Y,newPath:l,type:J?.type||"file"}})),J?.type==="dir")O((h)=>{let m=new Set;for(let Y_ of h)if(Y_===Y)m.add(l);else if(Y_.startsWith(`${Y}/`))m.add(`${l}${Y_.slice(Y.length)}`);else m.add(Y_);return m});if(F(l),J?.type==="dir")H(null),d(!1),b(null);else t_.current?.(l);g_.current?.(o)}catch(C){c(C?.message||"Failed to rename file")}},[J0,u]),I0=M(async(Y)=>{let E=Y||".";for(let C=0;C<50;C+=1){let o=`untitled${C===0?"":`-${C}`}.md`;try{let m=(await _4(E,o,""))?.path||(E==="."?o:`${E}/${o}`);if(E&&E!==".")O((Y_)=>new Set([...Y_,E]));F(m),c(null),g_.current?.(E),t_.current?.(m);return}catch(h){if(h?.status===409||h?.code==="file_exists")continue;c(h?.message||"Failed to create file");return}}c("Failed to create file (untitled name already in use).")},[]),N0=M((Y)=>{if(Y?.stopPropagation?.(),O_)return;let Q=T$(j0.current);I0(Q)},[O_,T$,I0]);v(()=>{if(typeof window>"u")return;let Y=(Q)=>{let J=Q?.detail?.updates||[];if(!Array.isArray(J)||J.length===0)return;L((h)=>{let m=h;for(let Y_ of J){if(!Y_?.root)continue;if(!m||Y_.path==="."||!Y_.path)m=Y_.root;else m=g4(m,Y_.path,Y_.root)}if(m)A_.current=Y8(m,z_.current,t.current);return n(!1),m});let E=j0.current;if(Boolean(E)&&J.some((h)=>{let m=h?.path||"";if(!m||m===".")return!0;return E===m||E.startsWith(`${m}/`)||m.startsWith(`${E}/`)}))l_.current.clear();if(!E||!T0.current)return;let l=E_.current?.get(E);if(l&&l.type==="dir")return;if(J.some((h)=>{let m=h?.path||"";if(!m||m===".")return!0;return E===m||E.startsWith(`${m}/`)}))t_.current?.(E)};return window.addEventListener("workspace-update",Y),()=>window.removeEventListener("workspace-update",Y)},[]),i_.current=H0;let G2=k(()=>{if(typeof window>"u")return;let Y=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),Q=J_.current??K_.current,J=document.visibilityState!=="hidden"&&(Q||Y.matches&&K_.current);S2(J,t.current).catch(()=>{})}).current,b0=k(0),D$=k(()=>{if(b0.current)clearTimeout(b0.current);b0.current=setTimeout(()=>{b0.current=0,G2()},250)}).current;v(()=>{if(K_.current)i_.current?.();D$()},[$,j]),v(()=>{i_.current(),G2();let Y=setInterval(()=>i_.current(),t5),Q=D2("previewHeight",null),J=Number.isFinite(Q)?Math.min(Math.max(Q,80),600):280;if(w_.current=J,v_.current)v_.current.style.setProperty("--preview-height",`${J}px`);let E=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),C=()=>D$();if(E.addEventListener)E.addEventListener("change",C);else if(E.addListener)E.addListener(C);return document.addEventListener("visibilitychange",C),()=>{if(clearInterval(Y),h_.current)cancelAnimationFrame(h_.current),h_.current=0;if(E.removeEventListener)E.removeEventListener("change",C);else if(E.removeListener)E.removeListener(C);if(document.removeEventListener("visibilitychange",C),b0.current)clearTimeout(b0.current),b0.current=0;if(b_.current)clearTimeout(b_.current),b_.current=null;S2(!1,t.current).catch(()=>{})}},[]);let Y$=n_(()=>X8(X,q,X_),[X,q,X_]),E$=n_(()=>new Map(Y$.map((Y)=>[Y.node.path,Y.node])),[Y$]),k$=n_(()=>K8(F0),[F0]);E_.current=E$;let P_=(G?E_.current.get(G):null)?.type==="dir";v(()=>{if(!G||!P_){D_(null),o_.current=null,C_.current=null;return}let Y=G,Q=`${X_?"hidden":"visible"}:${G}`,J=l_.current,E=J.get(Q);if(E?.root){J.delete(Q),J.set(Q,E);let o=G8(E.root,Boolean(E.truncated),I_);if(o)o_.current=o,C_.current=G,D_({loading:!1,error:null,payload:o});return}let C=o_.current,l=C_.current;D_({loading:!0,error:null,payload:l===G?C:null}),T2(G,e5,X_).then((o)=>{if(j0.current!==Y)return;let h={root:o?.root,truncated:Boolean(o?.truncated)};J.delete(Q),J.set(Q,h);while(J.size>_j){let Y_=J.keys().next().value;if(!Y_)break;J.delete(Y_)}let m=G8(h.root,h.truncated,I_);o_.current=m,C_.current=G,D_({loading:!1,error:null,payload:m})}).catch((o)=>{if(j0.current!==Y)return;D_({loading:!1,error:o?.message||"Failed to load folder size chart",payload:l===G?C:null})})},[G,P_,X_,I_]);let D0=Boolean(A&&A.kind==="text"&&!P_&&(!A.size||A.size<=262144)),Q0=D0?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable",y$=Boolean(G&&G!=="."),o$=Boolean(G&&!P_),f$=Boolean(G&&!P_),W$=G&&P_?N1(G,X_):null,R0=M(()=>F_(!1),[]),W0=M(async(Y)=>{R0();try{await Y?.()}catch{}},[R0]);v(()=>{let Y=O0.current;if(C0.current)C0.current.dispose(),C0.current=null;if(!Y)return;if(Y.innerHTML="",!G||P_||!A||A.error)return;let Q={path:G,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},J=r_.resolve(Q)||r_.get("workspace-preview-default");if(!J)return;let E=J.mount(Y,Q);return C0.current=E,()=>{if(C0.current===E)E.dispose(),C0.current=null;Y.innerHTML=""}},[G,P_,A]);let z0=(Y)=>{let Q=Y?.target;if(Q instanceof Element)return Q;return Q?.parentElement||null},v0=(Y)=>{return Boolean(Y?.closest?.(".workspace-node-icon, .workspace-label-text"))},A$=k((Y)=>{if(d0.current)clearTimeout(d0.current),d0.current=null;let J=z0(Y)?.closest?.("[data-path]");if(!J)return;let E=J.dataset.path;if(J.dataset.type==="dir"||!E)return;if(M0.current===E)J0();d_.current?.(E)}).current,s$=k((Y)=>{if(B0.current){B0.current=!1;return}let Q=z0(Y),J=Q?.closest?.("[data-path]");if(V0.current?.focus?.(),!J)return;let E=J.dataset.path,C=J.dataset.type,l=Boolean(Q?.closest?.(".workspace-caret")),o=Boolean(Q?.closest?.("button"))||Boolean(Q?.closest?.("a"))||Boolean(Q?.closest?.("input")),h=j0.current===E,m=M0.current;if(m){if(m===E)return;J0()}let Y_=C==="file"&&X$.current===E&&!l&&!o;if(h&&!l&&!o&&E!=="."&&!Y_){if(d0.current)clearTimeout(d0.current);d0.current=setTimeout(()=>{d0.current=null,B$(E)},350);return}if(C==="dir"){if(X$.current=null,F(E),H(null),b(null),d(!1),!z_.current.has(E))g_.current?.(E);if(h&&!l)return;O((w0)=>{let Y0=new Set(w0);if(Y0.has(E))Y0.delete(E);else Y0.add(E);return Y0})}else{X$.current=null,F(E);let K0=E_.current.get(E);if(K0)H_.current?.(K0.path,K0);t_.current?.(E)}}).current,O$=k(()=>{A_.current="",i_.current(),Array.from(z_.current||[]).filter((Q)=>Q&&Q!==".").forEach((Q)=>g_.current?.(Q))}).current,r0=k(()=>{X$.current=null,F(null),H(null),b(null),d(!1)}).current,w$=k(()=>{c_((Y)=>{let Q=!Y;if(typeof window<"u")_0("workspaceShowHidden",String(Q));return t.current=Q,S2(!0,Q).catch(()=>{}),A_.current="",i_.current?.(),Array.from(z_.current||[]).filter((E)=>E&&E!==".").forEach((E)=>g_.current?.(E)),Q})}).current,m0=k((Y)=>{if(z0(Y)?.closest?.("[data-path]"))return;r0()}).current,U0=M(async(Y)=>{if(!Y)return;let Q=Y.split("/").pop()||Y;if(!window.confirm(`Delete "${Q}"? This cannot be undone.`))return;try{await Z4(Y);let E=Y.includes("/")?Y.split("/").slice(0,-1).join("/")||".":".";if(j0.current===Y)r0();g_.current?.(E),c(null)}catch(E){H((C)=>({...C||{},error:E.message||"Failed to delete file"}))}},[r0]),Q$=M((Y)=>{let Q=V0.current;if(!Q||!Y||typeof CSS>"u"||typeof CSS.escape!=="function")return;Q.querySelector(`[data-path="${CSS.escape(Y)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),r$=M((Y)=>{let Q=Y$;if(!Q||Q.length===0)return;let J=G?Q.findIndex((E)=>E.node.path===G):-1;if(Y.key==="ArrowDown"){Y.preventDefault();let E=Math.min(J+1,Q.length-1),C=Q[E];if(!C)return;if(F(C.node.path),C.node.type!=="dir")H_.current?.(C.node.path,C.node),t_.current?.(C.node.path);else H(null),d(!1),b(null);Q$(C.node.path);return}if(Y.key==="ArrowUp"){Y.preventDefault();let E=J<=0?0:J-1,C=Q[E];if(!C)return;if(F(C.node.path),C.node.type!=="dir")H_.current?.(C.node.path,C.node),t_.current?.(C.node.path);else H(null),d(!1),b(null);Q$(C.node.path);return}if(Y.key==="ArrowRight"&&J>=0){let E=Q[J];if(E?.node?.type==="dir"&&!q.has(E.node.path))Y.preventDefault(),g_.current?.(E.node.path),O((C)=>new Set([...C,E.node.path]));return}if(Y.key==="ArrowLeft"&&J>=0){let E=Q[J];if(E?.node?.type==="dir"&&q.has(E.node.path))Y.preventDefault(),O((C)=>{let l=new Set(C);return l.delete(E.node.path),l});return}if(Y.key==="Enter"&&J>=0){Y.preventDefault();let E=Q[J];if(!E)return;let C=E.node.path;if(E.node.type==="dir"){if(!z_.current.has(C))g_.current?.(C);O((o)=>{let h=new Set(o);if(h.has(C))h.delete(C);else h.add(C);return h}),H(null),b(null),d(!1)}else H_.current?.(C,E.node),t_.current?.(C);return}if((Y.key==="Delete"||Y.key==="Backspace")&&J>=0){let E=Q[J];if(!E||E.node.type==="dir")return;Y.preventDefault(),U0(E.node.path);return}if(Y.key==="Escape")Y.preventDefault(),r0()},[r0,U0,q,Y$,Q$,G]),R$=M((Y)=>{let Q=z0(Y),J=Q?.closest?.(".workspace-row");if(!J)return;let E=J.dataset.type,C=J.dataset.path;if(!C||C===".")return;if(M0.current===C)return;let l=Y?.touches?.[0];if(!l)return;if(x_.current={path:v0(Q)?C:null,dragging:!1,startX:l.clientX,startY:l.clientY},E!=="file")return;if(b_.current)clearTimeout(b_.current);b_.current=setTimeout(()=>{if(b_.current=null,x_.current?.dragging)return;U0(C)},600)},[U0]),P$=M(()=>{if(b_.current)clearTimeout(b_.current),b_.current=null;let Y=x_.current;if(Y?.dragging&&Y.path){let Q=T_.current||Z0(),J=V$.current;if(typeof J==="function")J(Y.path,Q)}x_.current={path:null,dragging:!1,startX:0,startY:0},G_.current=0,a(!1),$_(null),A0(null),S0(),C$()},[Z0,C$,A0,S0]),v$=M((Y)=>{let Q=x_.current,J=Y?.touches?.[0];if(!J||!Q?.path){if(b_.current)clearTimeout(b_.current),b_.current=null;return}let E=Math.abs(J.clientX-Q.startX),C=Math.abs(J.clientY-Q.startY),l=E>8||C>8;if(l&&b_.current)clearTimeout(b_.current),b_.current=null;if(!Q.dragging&&l)Q.dragging=!0,a(!0),$_("move"),J$(Q.path);if(Q.dragging){Y.preventDefault(),L$(J.clientX,J.clientY);let o=document.elementFromPoint(J.clientX,J.clientY),h=K$(o)||Z0();if(T_.current!==h)A0(h);o0(h)}},[K$,Z0,J$,L$,A0,o0]),u$=k((Y)=>{Y.preventDefault();let Q=v_.current;if(!Q)return;let J=Y.clientY,E=w_.current||280,C=Y.currentTarget;C.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let l=J,o=(m)=>{l=m.clientY;let Y_=Q.clientHeight-80,K0=Math.min(Math.max(E-(m.clientY-J),80),Y_);Q.style.setProperty("--preview-height",`${K0}px`),w_.current=K0},h=()=>{let m=Q.clientHeight-80,Y_=Math.min(Math.max(E-(l-J),80),m);w_.current=Y_,C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("previewHeight",String(Math.round(Y_))),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",h)}).current,a$=k((Y)=>{Y.preventDefault();let Q=v_.current;if(!Q)return;let J=Y.touches[0];if(!J)return;let E=J.clientY,C=w_.current||280,l=Y.currentTarget;l.classList.add("dragging"),document.body.style.userSelect="none";let o=(m)=>{let Y_=m.touches[0];if(!Y_)return;m.preventDefault();let K0=Q.clientHeight-80,w0=Math.min(Math.max(C-(Y_.clientY-E),80),K0);Q.style.setProperty("--preview-height",`${w0}px`),w_.current=w0},h=()=>{l.classList.remove("dragging"),document.body.style.userSelect="",_0("previewHeight",String(Math.round(w_.current||C))),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h)};document.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h)}).current,a0=async()=>{if(!G)return;try{let Y=await e1(G);if(Y.media_id)b(Y.media_id)}catch(Y){H((Q)=>({...Q||{},error:Y.message||"Failed to attach"}))}},t$=async()=>{if(!G||P_)return;await U0(G)},m$=(Y)=>{return Array.from(Y?.dataTransfer?.types||[]).includes("Files")},q_=M((Y)=>{if(!m$(Y))return;if(Y.preventDefault(),G_.current+=1,!f0.current)a(!0);$_("upload");let Q=q$(Y)||Z0();A0(Q),o0(Q)},[Z0,q$,A0,o0]),V2=M((Y)=>{if(!m$(Y))return;if(Y.preventDefault(),Y.dataTransfer)Y.dataTransfer.dropEffect="copy";if(!f0.current)a(!0);if(F$.current!=="upload")$_("upload");let Q=q$(Y)||Z0();if(T_.current!==Q)A0(Q);o0(Q)},[Z0,q$,A0,o0]),y2=M((Y)=>{if(!m$(Y))return;if(Y.preventDefault(),G_.current=Math.max(0,G_.current-1),G_.current===0)a(!1),$_(null),A0(null),S0()},[A0,S0]),g$=M(async(Y,Q=".")=>{let J=Array.from(Y||[]);if(J.length===0)return;let E=Q&&Q!==""?Q:".",C=E!=="."?E:"workspace root";U_(!0);try{let l=null;for(let o of J)try{l=await j1(o,E)}catch(h){let m=h?.status,Y_=h?.code;if(m===409||Y_==="file_exists"){let K0=o?.name||"file";if(!window.confirm(`"${K0}" already exists in ${C}. Overwrite?`))continue;l=await j1(o,E,{overwrite:!0})}else throw h}if(l?.path)X$.current=l.path,F(l.path),t_.current?.(l.path);g_.current?.(E)}catch(l){c(l.message||"Failed to upload file")}finally{U_(!1)}},[]),e$=M(async(Y,Q)=>{if(!Y)return;let J=E_.current?.get(Y);if(!J)return;let E=Q&&Q!==""?Q:".",C=Y.includes("/")?Y.split("/").slice(0,-1).join("/")||".":".";if(E===C)return;try{let o=(await j4(Y,E))?.path||Y;if(J.type==="dir")O((h)=>{let m=new Set;for(let Y_ of h)if(Y_===Y)m.add(o);else if(Y_.startsWith(`${Y}/`))m.add(`${o}${Y_.slice(Y.length)}`);else m.add(Y_);return m});if(F(o),J.type==="dir")H(null),d(!1),b(null);else t_.current?.(o);g_.current?.(C),g_.current?.(E)}catch(l){c(l?.message||"Failed to move entry")}},[]);V$.current=e$;let p$=M(async(Y)=>{if(!m$(Y))return;Y.preventDefault(),G_.current=0,a(!1),$_(null),y_(null),S0();let Q=Array.from(Y?.dataTransfer?.files||[]);if(Q.length===0)return;let J=T_.current||q$(Y)||Z0();await g$(Q,J)},[Z0,q$,g$]),A2=M((Y)=>{if(Y?.stopPropagation?.(),O_)return;let Q=Y?.currentTarget?.dataset?.uploadTarget||".";X0.current=Q,l0.current?.click()},[O_]),_2=M(()=>{if(O_)return;let Y=j0.current,Q=Y?E_.current?.get(Y):null;X0.current=Q?.type==="dir"?Q.path:".",l0.current?.click()},[O_]),$2=M(()=>{W0(()=>N0(null))},[W0,N0]),g0=M(()=>{W0(()=>_2())},[W0,_2]),u0=M(()=>{W0(()=>O$())},[W0,O$]),c$=M(()=>{W0(()=>w$())},[W0,w$]),X2=M(()=>{if(!G||!D0)return;W0(()=>d_.current?.(G,A))},[W0,G,D0,A]),p0=M(()=>{if(!G||G===".")return;W0(()=>B$(G))},[W0,G,B$]),U$=M(()=>{if(!G||P_)return;W0(()=>t$())},[W0,G,P_,t$]),q2=M(()=>{if(!G||P_)return;W0(()=>a0())},[W0,G,P_,a0]),h$=M(()=>{if(!W$)return;if(R0(),typeof window<"u")window.open(W$,"_blank","noopener")},[R0,W$]),L2=M(()=>{R0(),N?.()},[R0,N]),c0=M(()=>{R0(),z?.()},[R0,z]),B=M((Y)=>{if(!Y||Y.button!==0)return;let Q=Y.currentTarget;if(!Q||!Q.dataset)return;let J=Q.dataset.path;if(!J||J===".")return;if(M0.current===J)return;let E=z0(Y);if(E?.closest?.("button, a, input, .workspace-caret"))return;if(!v0(E))return;Y.preventDefault(),k_.current={path:J,dragging:!1,startX:Y.clientX,startY:Y.clientY};let C=(o)=>{let h=k_.current;if(!h?.path)return;let m=Math.abs(o.clientX-h.startX),Y_=Math.abs(o.clientY-h.startY),K0=m>4||Y_>4;if(!h.dragging&&K0)h.dragging=!0,B0.current=!0,a(!0),$_("move"),J$(h.path),L$(o.clientX,o.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(h.dragging){o.preventDefault(),L$(o.clientX,o.clientY);let w0=document.elementFromPoint(o.clientX,o.clientY),Y0=K$(w0)||Z0();if(T_.current!==Y0)A0(Y0);o0(Y0)}},l=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",l);let o=k_.current;if(o?.dragging&&o.path){let h=T_.current||Z0(),m=V$.current;if(typeof m==="function")m(o.path,h)}k_.current={path:null,dragging:!1,startX:0,startY:0},G_.current=0,a(!1),$_(null),A0(null),S0(),C$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{B0.current=!1},0)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",l)},[K$,Z0,J$,L$,C$,A0,o0,S0]),P=M(async(Y)=>{let Q=Array.from(Y?.target?.files||[]);if(Q.length===0)return;let J=X0.current||".";if(await g$(Q,J),X0.current=".",Y?.target)Y.target.value=""},[g$]);return U`
        <aside
            class=${`workspace-sidebar${__?" workspace-drop-active":""}`}
            data-workspace-scale=${F0}
            ref=${v_}
            onDragEnter=${q_}
            onDragOver=${V2}
            onDragLeave=${y2}
            onDrop=${p$}
        >
            <input type="file" multiple style="display:none" ref=${l0} onChange=${P} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${T}
                            class=${`workspace-menu-button${s?" active":""}`}
                            onClick=${(Y)=>{Y.stopPropagation(),F_((Q)=>!Q)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${s?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${s&&U`
                            <div class="workspace-menu-dropdown" ref=${n0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${$2} disabled=${O_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${g0} disabled=${O_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${u0}>Refresh tree</button>
                                <button class=${`workspace-menu-item${X_?" active":""}`} role="menuitem" onClick=${c$}>
                                    ${X_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${G&&U`<div class="workspace-menu-separator"></div>`}
                                ${G&&!P_&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X2} disabled=${!D0}>Open in editor</button>
                                `}
                                ${y$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${p0}>Rename selected</button>
                                `}
                                ${f$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${q2}>Download selected file</button>
                                `}
                                ${W$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${h$}>Download selected folder (zip)</button>
                                `}
                                ${o$&&U`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${U$}>Delete selected file</button>
                                `}

                                ${(N||z)&&U`<div class="workspace-menu-separator"></div>`}
                                ${N&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${L2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${z&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${c0}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${N0} title="New file" disabled=${O_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${O$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${m0}>
                ${O_&&U`<div class="workspace-drop-hint">Uploading…</div>`}
                ${i&&U`<div class="workspace-loading">Loading…</div>`}
                ${N_&&U`<div class="workspace-error">${N_}</div>`}
                ${X&&U`
                    <div
                        class="workspace-tree-list"
                        ref=${V0}
                        tabIndex="0"
                        onClick=${s$}
                        onDblClick=${A$}
                        onKeyDown=${r$}
                        onTouchStart=${R$}
                        onTouchEnd=${P$}
                        onTouchMove=${v$}
                        onTouchCancel=${P$}
                    >
                        ${Y$.map(({node:Y,depth:Q})=>{let J=Y.type==="dir",E=Y.path===G,C=Y.path===I,l=J&&q.has(Y.path),o=W_&&Y.path===W_,h=Array.isArray(Y.children)&&Y.children.length>0?Y.children.length:Number(Y.child_count)||0;return U`
                                <div
                                    key=${Y.path}
                                    class=${`workspace-row${E?" selected":""}${o?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+Q*k$.indentPx}px`}}
                                    data-path=${Y.path}
                                    data-type=${Y.type}
                                    onMouseDown=${B}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${J?l?U`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:U`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${J?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${J?U`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:U`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${C?U`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${e_}
                                                value=${u}
                                                onInput=${(m)=>R(m?.target?.value||"")}
                                                onKeyDown=${(m)=>{if(m.key==="Enter")m.preventDefault(),s0();else if(m.key==="Escape")m.preventDefault(),J0()}}
                                                onBlur=${J0}
                                                onClick=${(m)=>m.stopPropagation()}
                                            />
                                        `:U`<span class="workspace-label"><span class="workspace-label-text">${Y.name}</span></span>`}
                                    ${J&&!l&&h>0&&U`
                                        <span class="workspace-count">${h}</span>
                                    `}
                                    ${J&&U`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${Y.path}
                                            title="Upload files to this folder"
                                            onClick=${A2}
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
            ${G&&U`
                <div class="workspace-preview-splitter-h" onMouseDown=${u$} onTouchStart=${a$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${G}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${N0} title="New file" disabled=${O_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!P_&&U`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>D0&&d_.current?.(G,A)}
                                    title=${Q0}
                                    disabled=${!D0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${t$}
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
                            ${P_?U`
                                    <button class="workspace-download" onClick=${_2}
                                        title="Upload files to this folder" disabled=${O_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${N1(G,X_)}
                                        title="Download folder as zip" onClick=${(Y)=>Y.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:U`<button class="workspace-download" onClick=${a0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${e&&U`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&U`<div class="workspace-error">${A.error}</div>`}
                    ${P_&&U`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${f_?.loading&&U`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${f_?.error&&U`<div class="workspace-error">${f_.error}</div>`}
                        ${f_?.payload&&f_.payload.segments?.length>0&&U`
                            <${$j} payload=${f_.payload} />
                        `}
                        ${f_?.payload&&(!f_.payload.segments||f_.payload.segments.length===0)&&U`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!P_&&U`
                        <div class="workspace-preview-body" ref=${O0}></div>
                    `}
                    ${x&&U`
                        <div class="workspace-download-card">
                            <${jj} mediaId=${x} />
                        </div>
                    `}
                </div>
            `}
            ${B_&&U`
                <div class="workspace-drag-ghost" ref=${z$}>${B_.label}</div>
            `}
        </aside>
    `}var Zj=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,Nj=/\.(csv|tsv)$/i,zj=/\.pdf$/i,Kj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,J8=/\.drawio(\.xml|\.svg|\.png)?$/i;function D8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:z,onTogglePin:K,onTogglePreview:X,previewTabs:L,onToggleDock:q,dockVisible:O}){let[G,F]=f(null),I=k(null);v(()=>{if(!G)return;let H=(x)=>{if(x.type==="keydown"&&x.key!=="Escape")return;F(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[G]),v(()=>{let H=(x)=>{if(x.ctrlKey&&x.key==="Tab"){if(x.preventDefault(),!_.length)return;let b=_.findIndex((i)=>i.id===$);if(x.shiftKey){let i=_[(b-1+_.length)%_.length];j?.(i.id)}else{let i=_[(b+1)%_.length];j?.(i.id)}return}if((x.ctrlKey||x.metaKey)&&x.key==="w"){let b=document.querySelector(".editor-pane");if(b&&b.contains(document.activeElement)){if(x.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let p=M((H,x)=>{if(H.button===1){H.preventDefault(),Z?.(x);return}if(H.button===0)j?.(x)},[j,Z]),u=M((H,x)=>{H.preventDefault(),F({id:x,x:H.clientX,y:H.clientY})},[]),R=M((H)=>{H.preventDefault(),H.stopPropagation()},[]),A=M((H,x)=>{H.preventDefault(),H.stopPropagation(),Z?.(x)},[Z]);if(v(()=>{if(!$||!I.current)return;let H=I.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return U`
        <div class="tab-strip" ref=${I} role="tablist">
            ${_.map((H)=>U`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(x)=>p(x,H.id)}
                    onContextMenu=${(x)=>u(x,H.id)}
                >
                    ${H.pinned&&U`
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
                        onClick=${(x)=>A(x,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?U`<span class="tab-dirty-dot" aria-hidden="true"></span>`:U`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${q&&U`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${O?" active":""}`}
                    onClick=${q}
                    title=${`${O?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${O?"Hide":"Show"} terminal`}
                    aria-pressed=${O?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${G&&U`
            <div class="tab-context-menu" style=${{left:G.x+"px",top:G.y+"px"}}>
                <button onClick=${()=>{Z?.(G.id),F(null)}}>Close</button>
                <button onClick=${()=>{N?.(G.id),F(null)}}>Close Others</button>
                <button onClick=${()=>{z?.(),F(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(G.id),F(null)}}>
                    ${_.find((H)=>H.id===G.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${X&&/\.(md|mdx|markdown)$/i.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{X(G.id),F(null)}}>
                        ${L?.has(G.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${Zj.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(G.id),x=G.id.split("/").pop()||"document",b="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(x);window.open(b,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${Nj.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(G.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${zj.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(G.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${Kj.test(G.id)&&!J8.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(G.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${J8.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(G.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var Yj=400,i4=60,E8=220,l4="mdPreviewHeight";function Wj(){try{let _=localStorage.getItem(l4),$=_?Number(_):NaN;return Number.isFinite($)&&$>=i4?$:E8}catch{return E8}}function k8({getContent:_,path:$,onClose:j}){let[Z,N]=f(""),[z,K]=f(Wj),X=k(null),L=k(null),q=k(""),O=k(_);return O.current=_,v(()=>{let I=()=>{let u=O.current?.()||"";if(u===q.current)return;q.current=u;try{let R=i0(u,null,{sanitize:!1});N(R)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};I();let p=setInterval(I,Yj);return()=>clearInterval(p)},[]),v(()=>{if(X.current&&Z)I$(X.current).catch(()=>{})},[Z]),U`
        <div
            class="md-preview-splitter"
            onMouseDown=${(I)=>{I.preventDefault();let p=I.clientY,u=L.current?.offsetHeight||z,R=L.current?.parentElement,A=R?R.offsetHeight*0.7:500,H=I.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let x=(i)=>{let n=Math.min(Math.max(u-(i.clientY-p),i4),A);K(n)},b=()=>{H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(l4,String(Math.round(L.current?.offsetHeight||z)))}catch{}document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",b)}}
            onTouchStart=${(I)=>{I.preventDefault();let p=I.touches[0];if(!p)return;let u=p.clientY,R=L.current?.offsetHeight||z,A=L.current?.parentElement,H=A?A.offsetHeight*0.7:500,x=I.currentTarget;x.classList.add("dragging"),document.body.style.userSelect="none";let b=(n)=>{let e=n.touches[0];if(!e)return;n.preventDefault();let d=Math.min(Math.max(R-(e.clientY-u),i4),H);K(d)},i=()=>{x.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(l4,String(Math.round(L.current?.offsetHeight||z)))}catch{}document.removeEventListener("touchmove",b),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:z+"px"}}>
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
    `}function y8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let z=k(_);z.current=_;let K=k($);K.current=$;let X=k(j);X.current=j;let L=k(Z);L.current=Z,v(()=>{X.current();let q=new z1((G,F)=>z.current(G,F),(G)=>K.current(G),{chatJid:N});q.connect();let O=()=>{q.reconnectIfNeeded();let G=typeof document<"u"?document:null;if(!G||G.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",O),document.addEventListener("visibilitychange",O),()=>{window.removeEventListener("focus",O),document.removeEventListener("visibilitychange",O),q.disconnect()}},[N])}function A8(){let[_,$]=f(!1),[j,Z]=f("default"),N=k(!1);v(()=>{let L=J2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),v(()=>{N.current=_},[_]);let z=M(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),K=M(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let q=await z();if(Z(q||"default"),q!=="granted"){N.current=!1,$(!1),_0("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),_0("notificationsEnabled",String(L))},[z]),X=M((L,q)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let O=new Notification(L,{body:q});return O.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:X}}var h2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function w8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=f(null),[z,K]=f(!1),X=k(!1),L=k(null),q=k(!1),O=k(null),G=k(null),F=k(0);v(()=>{X.current=z},[z]),v(()=>{G.current=Z},[Z]),v(()=>{F.current+=1,G.current=null,O.current=null,q.current=!1,X.current=!1,N(null),K(!1)},[j]);let I=M(async(R=null)=>{let A=F.current;try{if(R){let H=await u1(R,50,0,j);if(A!==F.current)return;N(H.posts),K(!1)}else{let H=await b2(10,null,j);if(A!==F.current)return;N(H.posts),K(H.has_more)}}catch(H){if(A!==F.current)return;console.error("Failed to load posts:",H)}},[j]),p=M(async()=>{let R=F.current;try{let A=await b2(10,null,j);if(R!==F.current)return;N((H)=>{if(!H||H.length===0)return A.posts;return h2([...A.posts,...H])}),K((H)=>H||A.has_more)}catch(A){if(R!==F.current)return;console.error("Failed to refresh timeline:",A)}},[j]),u=M(async(R={})=>{let A=F.current,H=G.current;if(!H||H.length===0)return;if(q.current)return;let{preserveScroll:x=!0,preserveMode:b="top",allowRepeat:i=!1}=R,n=(N_)=>{if(!x){N_();return}if(b==="top")$(N_);else _(N_)},d=H.slice().sort((N_,c)=>N_.id-c.id)[0]?.id;if(!Number.isFinite(d))return;if(!i&&O.current===d)return;q.current=!0,O.current=d;try{let N_=await b2(10,d,j);if(A!==F.current)return;if(N_.posts.length>0)n(()=>{N((c)=>h2([...N_.posts,...c||[]])),K(N_.has_more)});else K(!1)}catch(N_){if(A!==F.current)return;console.error("Failed to load more posts:",N_)}finally{if(A===F.current)q.current=!1}},[j,_,$]);return v(()=>{L.current=u},[u]),{posts:Z,setPosts:N,hasMore:z,setHasMore:K,hasMoreRef:X,loadPosts:I,refreshTimeline:p,loadMore:u,loadMoreRef:L,loadingMoreRef:q,lastBeforeIdRef:O}}function P8(){let[_,$]=f(null),[j,Z]=f({text:"",totalLines:0}),[N,z]=f(""),[K,X]=f({text:"",totalLines:0}),[L,q]=f(null),[O,G]=f(null),[F,I]=f(null),p=k(null),u=k(0),R=k(!1),A=k(""),H=k(""),x=k(null),b=k(null),i=k(null),n=k(null),e=k(!1),d=k(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:z,agentThought:K,setAgentThought:X,pendingRequest:L,setPendingRequest:q,currentTurnId:O,setCurrentTurnId:G,steerQueuedTurnId:F,setSteerQueuedTurnId:I,lastAgentEventRef:p,lastSilenceNoticeRef:u,isAgentRunningRef:R,draftBufferRef:A,thoughtBufferRef:H,pendingRequestRef:x,stalledPostIdRef:b,currentTurnIdRef:i,steerQueuedTurnIdRef:n,thoughtExpandedRef:e,draftExpandedRef:d}}function M8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=k((O)=>{O.preventDefault();let G=_.current;if(!G)return;let F=O.clientX,I=$.current||280,p=O.currentTarget;p.classList.add("dragging"),G.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=F,R=(H)=>{u=H.clientX;let x=Math.min(Math.max(I+(H.clientX-F),160),600);G.style.setProperty("--sidebar-width",`${x}px`),$.current=x},A=()=>{let H=Math.min(Math.max(I+(u-F),160),600);$.current=H,p.classList.remove("dragging"),G.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",_0("sidebarWidth",String(Math.round(H))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",A)}).current,z=k((O)=>{O.preventDefault();let G=_.current;if(!G)return;let F=O.touches[0];if(!F)return;let I=F.clientX,p=$.current||280,u=O.currentTarget;u.classList.add("dragging"),G.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(H)=>{let x=H.touches[0];if(!x)return;H.preventDefault();let b=Math.min(Math.max(p+(x.clientX-I),160),600);G.style.setProperty("--sidebar-width",`${b}px`),$.current=b},A=()=>{u.classList.remove("dragging"),G.classList.remove("sidebar-resizing"),document.body.style.userSelect="",_0("sidebarWidth",String(Math.round($.current||p))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",A),document.removeEventListener("touchcancel",A)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",A),document.addEventListener("touchcancel",A)}).current,K=k((O)=>{O.preventDefault();let G=_.current;if(!G)return;let F=O.clientX,I=j.current||$.current||280,p=O.currentTarget;p.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=F,R=(H)=>{u=H.clientX;let x=Math.min(Math.max(I+(H.clientX-F),200),800);G.style.setProperty("--editor-width",`${x}px`),j.current=x},A=()=>{let H=Math.min(Math.max(I+(u-F),200),800);j.current=H,p.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("editorWidth",String(Math.round(H))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",A)}).current,X=k((O)=>{O.preventDefault();let G=_.current;if(!G)return;let F=O.touches[0];if(!F)return;let I=F.clientX,p=j.current||$.current||280,u=O.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let R=(H)=>{let x=H.touches[0];if(!x)return;H.preventDefault();let b=Math.min(Math.max(p+(x.clientX-I),200),800);G.style.setProperty("--editor-width",`${b}px`),j.current=b},A=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",_0("editorWidth",String(Math.round(j.current||p))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",A),document.removeEventListener("touchcancel",A)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",A),document.addEventListener("touchcancel",A)}).current,L=k((O)=>{O.preventDefault();let G=_.current;if(!G)return;let F=O.clientY,I=Z?.current||200,p=O.currentTarget;p.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let u=F,R=(H)=>{u=H.clientY;let x=Math.min(Math.max(I-(H.clientY-F),100),window.innerHeight*0.5);if(G.style.setProperty("--dock-height",`${x}px`),Z)Z.current=x;window.dispatchEvent(new CustomEvent("dock-resize"))},A=()=>{let H=Math.min(Math.max(I-(u-F),100),window.innerHeight*0.5);if(Z)Z.current=H;p.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("dockHeight",String(Math.round(H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",A)}).current,q=k((O)=>{O.preventDefault();let G=_.current;if(!G)return;let F=O.touches[0];if(!F)return;let I=F.clientY,p=Z?.current||200,u=O.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let R=(H)=>{let x=H.touches[0];if(!x)return;H.preventDefault();let b=Math.min(Math.max(p-(x.clientY-I),100),window.innerHeight*0.5);if(G.style.setProperty("--dock-height",`${b}px`),Z)Z.current=b;window.dispatchEvent(new CustomEvent("dock-resize"))},A=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",_0("dockHeight",String(Math.round(Z?.current||p))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",A),document.removeEventListener("touchcancel",A)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",A),document.addEventListener("touchcancel",A)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:X,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:q}}function I8({onTabClosed:_}={}){let $=k(_);$.current=_;let[j,Z]=f(()=>p_.getTabs()),[N,z]=f(()=>p_.getActiveId()),[K,X]=f(()=>p_.getTabs().length>0);v(()=>{return p_.onChange((b,i)=>{Z(b),z(i),X(b.length>0)})},[]);let[L,q]=f(()=>new Set),O=M((b)=>{q((i)=>{let n=new Set(i);if(n.has(b))n.delete(b);else n.add(b);return n})},[]),G=M((b)=>{q((i)=>{if(!i.has(b))return i;let n=new Set(i);return n.delete(b),n})},[]),F=M((b,i={})=>{if(!b)return;let n={path:b,mode:"edit"};try{if(!r_.resolve(n)){if(!r_.get("editor")){console.warn(`[openEditor] No pane handler for: ${b}`);return}}}catch(d){console.warn(`[openEditor] paneRegistry.resolve() error for "${b}":`,d)}let e=typeof i?.label==="string"&&i.label.trim()?i.label.trim():void 0;p_.open(b,e)},[]),I=M(()=>{let b=p_.getActiveId();if(b){let i=p_.get(b);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}p_.close(b),G(b),$.current?.(b)}},[G]),p=M((b)=>{let i=p_.get(b);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}p_.close(b),G(b),$.current?.(b)},[G]),u=M((b)=>{p_.activate(b)},[]),R=M((b)=>{let i=p_.getTabs().filter((d)=>d.id!==b&&!d.pinned),n=i.filter((d)=>d.dirty).length;if(n>0){if(!window.confirm(`${n} unsaved tab${n>1?"s":""} will be closed. Continue?`))return}let e=i.map((d)=>d.id);p_.closeOthers(b),e.forEach((d)=>{G(d),$.current?.(d)})},[G]),A=M(()=>{let b=p_.getTabs().filter((e)=>!e.pinned),i=b.filter((e)=>e.dirty).length;if(i>0){if(!window.confirm(`${i} unsaved tab${i>1?"s":""} will be closed. Continue?`))return}let n=b.map((e)=>e.id);p_.closeAll(),n.forEach((e)=>{G(e),$.current?.(e)})},[G]),H=M((b)=>{p_.togglePin(b)},[]),x=M(()=>{let b=p_.getActiveId();if(b)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:b}}))},[]);return v(()=>{let b=(i)=>{let{oldPath:n,newPath:e,type:d}=i.detail||{};if(!n||!e)return;if(d==="dir"){for(let N_ of p_.getTabs())if(N_.path===n||N_.path.startsWith(`${n}/`)){let c=`${e}${N_.path.slice(n.length)}`;p_.rename(N_.id,c)}}else p_.rename(n,e)};return window.addEventListener("workspace-file-renamed",b),()=>window.removeEventListener("workspace-file-renamed",b)},[]),v(()=>{let b=(i)=>{if(p_.hasUnsaved())i.preventDefault(),i.returnValue=""};return window.addEventListener("beforeunload",b),()=>window.removeEventListener("beforeunload",b)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:F,closeEditor:I,handleTabClose:p,handleTabActivate:u,handleTabCloseOthers:R,handleTabCloseAll:A,handleTabTogglePin:H,handleTabTogglePreview:O,revealInExplorer:x}}function n4(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],z=Number(N);return Number.isFinite(z)?z:$}catch{return $}}var d4=n4("warning",30000),b8=n4("finalize",120000),o4=n4("refresh",30000),x8=30000;function C8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function T8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function S8(_=30000){let[,$]=f(0);v(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function s4(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function f8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function Y2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function r4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),z=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(z||N>1||K)}function R8(_,$={}){if(Y2($))return null;if(r4($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Gj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function v8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function u8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function m8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function g8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function W2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function p8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function Gj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function F1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function a4(_){return String(_||"").trim()||"web:default"}function c8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function h8(_={}){return Y2(_)&&r4(_)}function Vj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Xj(_={},$={}){if(!h8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=Vj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function i8(_={}){if(!h8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,z=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let G of N)$.clearTimeout?.(G);N.clear()},K=()=>{Z=0,Xj({window:$,document:j})},X=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(K)??0},L=()=>{X();for(let G of[80,220,420]){let F=$.setTimeout?.(()=>{N.delete(F),X()},G);if(F!=null)N.add(F)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},O=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",L,!0),O?.addEventListener?.("resize",L),O?.addEventListener?.("scroll",L),()=>{z(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",L,!0),O?.removeEventListener?.("resize",L),O?.removeEventListener?.("scroll",L)}}function qj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function N$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:qj($,j)}var Lj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function l8(_){return Lj.has(String(_||"").trim())}function Bj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function n8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(Bj(_),{detail:Z})),!0}var Oj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function d8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(Y2({window:j,navigator:Z}))};N();let K=Oj.map((X)=>{try{return j.matchMedia?.(X)??null}catch{return null}}).filter(Boolean).map((X)=>{if(typeof X.addEventListener==="function")return X.addEventListener("change",N),()=>X.removeEventListener("change",N);if(typeof X.addListener==="function")return X.addListener(N),()=>X.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let X of K)X();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function o8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var _3="piclaw_btw_session";function Qj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Uj(){let _=j$(_3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",z=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:K==="error"?z||"BTW stream interrupted. You can retry.":z,model:null,status:K}}catch{return null}}var s8=m1,r8=p1,Fj=h1,a8=o1,t8=s1,e8=i1,t4=N$(h0,"getAgentContext",null),Hj=N$(h0,"getAgentModels",{current:null,models:[]}),Jj=N$(h0,"getActiveChatAgents",{chats:[]}),e4=N$(h0,"getChatBranches",{chats:[]}),Dj=N$(h0,"renameChatBranch",null),Ej=N$(h0,"pruneChatBranch",null),_9=N$(h0,"restoreChatBranch",null),kj=N$(h0,"getAgentQueueState",{count:0}),yj=N$(h0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),Aj=N$(h0,"removeAgentQueueItem",{removed:!1}),wj=N$(h0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});r_.register(J4);r_.register(I4);r_.register(M4);r_.register(b4);r_.register(x4);r_.register(C4);r_.register(S4);r_.register(R4);D4();r_.register(A4);r_.register(w4);function Pj({locationParams:_}){let $=n_(()=>{let V=_.get("chat_jid");return V&&V.trim()?V.trim():"web:default"},[_]),j=n_(()=>{let V=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),Z=n_(()=>{let V=(_.get("branch_loader")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),N=n_(()=>{let V=_.get("branch_source_chat_jid");return V&&V.trim()?V.trim():$},[$,_]),[z,K]=f("disconnected"),[X,L]=f(()=>Y2()),[q,O]=f(null),[G,F]=f(null),[I,p]=f(!1),[u,R]=f("current"),[A,H]=f([]),[x,b]=f([]),[i,n]=f(null),{agentStatus:e,setAgentStatus:d,agentDraft:N_,setAgentDraft:c,agentPlan:X_,setAgentPlan:c_,agentThought:__,setAgentThought:a,pendingRequest:Z_,setPendingRequest:$_,currentTurnId:B_,setCurrentTurnId:M_,steerQueuedTurnId:W_,setSteerQueuedTurnId:y_,lastAgentEventRef:O_,lastSilenceNoticeRef:U_,isAgentRunningRef:f_,draftBufferRef:D_,thoughtBufferRef:I_,pendingRequestRef:$0,stalledPostIdRef:F0,currentTurnIdRef:V_,steerQueuedTurnIdRef:s,thoughtExpandedRef:F_,draftExpandedRef:z_}=P8(),[A_,R_]=f({}),[h_,a_]=f(null),[i_,E_]=f(null),[H_,d_]=f(!1),[t_,g_]=f(null),[v_,V0]=f([]),[e_,l0]=f([]),[X0,b_]=f(null),[x_,k_]=f([]),[k0,B0]=f(!1),[w_,l_]=f(()=>Uj()),o_=n_(()=>v_.find((V)=>V?.chat_jid===$)||null,[v_,$]),C_=n_(()=>e_.find((V)=>V?.chat_jid===$)||o_||null,[o_,e_,$]),O0=C_?.root_chat_jid||o_?.root_chat_jid||$,C0=Qj(u),[n0,T]=f(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),t=x_.length,K_=k(new Set),J_=k([]),G_=k(new Set),T_=k(0),f0=k({inFlight:!1,lastAttemptAt:0,turnId:null});K_.current=new Set(x_.map((V)=>V.row_id)),J_.current=x_;let{notificationsEnabled:F$,notificationPermission:z$,toggleNotifications:x$,notify:y0}=A8(),[V$,j0]=f(()=>new Set),[M0,X$]=f(()=>J2("workspaceOpen",!0)),d0=k(null),{editorOpen:T0,tabStripTabs:d$,tabStripActiveId:H0,previewTabs:H$,openEditor:Z0,closeEditor:K$,handleTabClose:q$,handleTabActivate:A0,handleTabCloseOthers:S0,handleTabCloseAll:o0,handleTabTogglePin:L$,handleTabTogglePreview:J$,revealInExplorer:C$}=I8({onTabClosed:(V)=>d0.current?.(V)}),T$=k(null),J0=k(null),B$=k(null),s0=k(null),I0=r_.getDockPanes().length>0,[N0,G2]=f(!1),b0=M(()=>G2((V)=>!V),[]),D$=M(()=>{Z0(k4,{label:"Terminal"})},[Z0]),Y$=!j&&(T0||I0&&N0);v(()=>{let V=T$.current;if(!V)return;if(J0.current)J0.current.dispose(),J0.current=null;let W=H0;if(!W)return;let D={path:W,mode:"edit"},y=r_.resolve(D)||r_.get("editor");if(!y){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let w=y.mount(V,D);J0.current=w,w.onDirtyChange?.((r)=>{p_.setDirty(W,r)}),w.onSaveRequest?.(()=>{}),w.onClose?.(()=>{K$()});let g=p_.getViewState(W);if(g&&typeof w.restoreViewState==="function")requestAnimationFrame(()=>w.restoreViewState(g));if(typeof w.onViewStateChange==="function")w.onViewStateChange((r)=>{p_.saveViewState(W,r)});return requestAnimationFrame(()=>w.focus()),()=>{if(J0.current===w)w.dispose(),J0.current=null}},[H0,K$]),v(()=>{let V=(W)=>{let D=W.detail?.path;if(D)Z0(D)};return document.addEventListener("office-viewer:open-tab",V),document.addEventListener("drawio:open-tab",V),document.addEventListener("csv-viewer:open-tab",V),document.addEventListener("pdf-viewer:open-tab",V),document.addEventListener("image-viewer:open-tab",V),()=>{document.removeEventListener("office-viewer:open-tab",V),document.removeEventListener("drawio:open-tab",V),document.removeEventListener("csv-viewer:open-tab",V),document.removeEventListener("pdf-viewer:open-tab",V),document.removeEventListener("image-viewer:open-tab",V)}},[Z0]),v(()=>{let V=B$.current;if(s0.current)s0.current.dispose(),s0.current=null;if(!V||!I0||!N0)return;let W=r_.getDockPanes()[0];if(!W){V.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let D=W.mount(V,{mode:"view"});return s0.current=D,requestAnimationFrame(()=>D.focus?.()),()=>{if(s0.current===D)D.dispose(),s0.current=null}},[I0,N0]);let[E$,k$]=f({name:"You",avatar_url:null,avatar_background:null}),S$=k(!1),P_=k(!1),D0=k(null),Q0=k($),y$=k(new Map),o$=k($),f$=k(0),W$=k(0),R0=k({}),W0=k({name:null,avatar_url:null}),z0=k({currentHashtag:null,searchQuery:null}),v0=k(null),A$=k(null),s$=k(0),O$=k(0),r0=k(0),w$=k(null),m0=k(null),U0=k(null),Q$=k(null),r$=k(0),R$=k({title:null,avatarBase:null}),P$=k(null),v$=M(()=>{if(P$.current)clearTimeout(P$.current),P$.current=null;n(null)},[]);S8(30000),v(()=>{return $6()},[]),v(()=>{return d8(L)},[]),v(()=>{_0("workspaceOpen",String(M0))},[M0]),v(()=>{return i8()},[]),v(()=>{return()=>{v$()}},[v$]),v(()=>{if(!w_){_0(_3,"");return}_0(_3,JSON.stringify({question:w_.question||"",answer:w_.answer||"",thinking:w_.thinking||"",error:w_.error||null,status:w_.status||"success"}))},[w_]),v(()=>{R0.current=A_||{}},[A_]),v(()=>{Q0.current=$},[$]),v(()=>{W0.current=E$||{name:"You",avatar_url:null,avatar_background:null}},[E$]);let u$=M((V,W,D=null)=>{if(typeof document>"u")return;let y=(V||"").trim()||"PiClaw";if(R$.current.title!==y){document.title=y;let S=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(S&&S.getAttribute("content")!==y)S.setAttribute("content",y);R$.current.title=y}let w=document.getElementById("dynamic-favicon");if(!w)return;let g=w.getAttribute("data-default")||w.getAttribute("href")||"/favicon.ico",r=W||g,L_=W?`${r}|${D||""}`:r;if(R$.current.avatarBase!==L_){let S=W?`${r}${r.includes("?")?"&":"?"}v=${D||Date.now()}`:r;w.setAttribute("href",S),R$.current.avatarBase=L_}},[]),a$=M((V)=>{if(!V)return;H((W)=>W.includes(V)?W:[...W,V])},[]),a0=M((V)=>{H((W)=>W.filter((D)=>D!==V))},[]);d0.current=a0;let t$=M(()=>{H([])},[]),m$=M((V)=>{if(!Array.isArray(V)){H([]);return}let W=[],D=new Set;for(let y of V){if(typeof y!=="string"||!y.trim())continue;let w=y.trim();if(D.has(w))continue;D.add(w),W.push(w)}H(W)},[]),q_=M((V,W=null,D="info",y=3000)=>{v$(),n({title:V,detail:W||null,kind:D||"info"}),P$.current=setTimeout(()=>{n((w)=>w?.title===V?null:w)},y)},[v$]),V2=M((V)=>{let W=f8(V,{editorOpen:T0,resolvePane:(D)=>r_.resolve(D)});if(W.kind==="open"){Z0(W.path);return}if(W.kind==="toast")q_(W.title,W.detail,W.level)},[T0,Z0,q_]),y2=M(()=>{let V=H0;if(V)a$(V)},[H0,a$]),g$=M((V)=>{if(!V)return;b((W)=>W.includes(V)?W:[...W,V])},[]),e$=M(async(V,W=null)=>{let D=(w)=>{w.scrollIntoView({behavior:"smooth",block:"center"}),w.classList.add("post-highlight"),setTimeout(()=>w.classList.remove("post-highlight"),2000)},y=document.getElementById("post-"+V);if(y){D(y);return}try{let w=typeof W==="string"&&W.trim()?W.trim():$,r=(await g1(V,w))?.thread?.[0];if(!r)return;m((L_)=>{if(!L_)return[r];if(L_.some((S)=>S.id===r.id))return L_;return[...L_,r]}),requestAnimationFrame(()=>{setTimeout(()=>{let L_=document.getElementById("post-"+V);if(L_)D(L_)},50)})}catch(w){console.error("[scrollToMessage] Failed to fetch message",V,w)}},[$]),p$=M((V)=>{b((W)=>W.filter((D)=>D!==V))},[]),A2=M(()=>{b([])},[]),_2=M((V)=>{if(!Array.isArray(V)){b([]);return}let W=[],D=new Set;for(let y of V){if(typeof y!=="string"||!y.trim())continue;let w=y.trim();if(D.has(w))continue;D.add(w),W.push(w)}b(W)},[]),$2=M((V)=>{let W=typeof V==="string"&&V.trim()?V.trim():"Could not send your message.";q_("Compose failed",W,"error",5000)},[q_]),g0=M((V={})=>{let W=Date.now();if(O_.current=W,V.running)f_.current=!0,B0((D)=>D?D:!0);if(V.clearSilence)U_.current=0},[B0]),u0=M(()=>{if(Q$.current)clearTimeout(Q$.current),Q$.current=null;r$.current=0},[]);v(()=>()=>{u0()},[u0]);let c$=M(()=>{u0(),d((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:W,lastActivity:D,...y}=V;return y})},[u0]),X2=M((V)=>{if(!V)return;u0();let W=Date.now();r$.current=W,d({type:V.type||"active",last_activity:!0}),Q$.current=setTimeout(()=>{if(r$.current!==W)return;d((D)=>{if(!D||!(D.last_activity||D.lastActivity))return D;return null})},x8)},[u0]),p0=M(()=>{f_.current=!1,B0(!1),O_.current=null,U_.current=0,D_.current="",I_.current="",$0.current=null,m0.current=null,V_.current=null,s.current=null,D0.current=null,f0.current={inFlight:!1,lastAttemptAt:0,turnId:null},u0(),M_(null),y_(null),F_.current=!1,z_.current=!1},[u0,M_,y_,B0]),U$=M((V)=>{if(!c8({remainingQueueCount:V,currentTurnId:V_.current,isAgentTurnActive:k0}))return;s.current=null,y_(null)},[k0,y_]),q2=M(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),h$=M(()=>({agentStatus:e,agentDraft:N_?{...N_}:{text:"",totalLines:0},agentPlan:X_||"",agentThought:__?{...__}:{text:"",totalLines:0},pendingRequest:Z_,currentTurnId:B_,steerQueuedTurnId:W_,isAgentTurnActive:Boolean(k0),followupQueueItems:Array.isArray(x_)?x_.map((V)=>({...V})):[],activeModel:h_,activeThinkingLevel:i_,supportsThinking:Boolean(H_),activeModelUsage:t_,contextUsage:X0,isAgentRunning:Boolean(f_.current),wasAgentActive:Boolean(P_.current),draftBuffer:D_.current||"",thoughtBuffer:I_.current||"",lastAgentEvent:O_.current||null,lastSilenceNotice:U_.current||0,lastAgentResponse:m0.current||null,currentTurnIdRef:V_.current||null,steerQueuedTurnIdRef:s.current||null,thoughtExpanded:Boolean(F_.current),draftExpanded:Boolean(z_.current),agentStatusRef:D0.current||null,silentRecovery:{...f0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[h_,t_,i_,N_,X_,e,__,X0,B_,x_,k0,Z_,W_,H_]),L2=M((V)=>{let W=V||q2();u0(),f_.current=Boolean(W.isAgentRunning),P_.current=Boolean(W.wasAgentActive),B0(Boolean(W.isAgentTurnActive)),O_.current=W.lastAgentEvent||null,U_.current=Number(W.lastSilenceNotice||0),D_.current=W.draftBuffer||"",I_.current=W.thoughtBuffer||"",$0.current=W.pendingRequest||null,m0.current=W.lastAgentResponse||null,V_.current=W.currentTurnIdRef||null,s.current=W.steerQueuedTurnIdRef||null,D0.current=W.agentStatusRef||null,f0.current=W.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},F_.current=Boolean(W.thoughtExpanded),z_.current=Boolean(W.draftExpanded),d(W.agentStatus||null),c(W.agentDraft?{...W.agentDraft}:{text:"",totalLines:0}),c_(W.agentPlan||""),a(W.agentThought?{...W.agentThought}:{text:"",totalLines:0}),$_(W.pendingRequest||null),M_(W.currentTurnId||null),y_(W.steerQueuedTurnId||null),k_(Array.isArray(W.followupQueueItems)?W.followupQueueItems.map((D)=>({...D})):[]),a_(W.activeModel||null),E_(W.activeThinkingLevel||null),d_(Boolean(W.supportsThinking)),g_(W.activeModelUsage??null),b_(W.contextUsage??null)},[u0,q2,M_,k_,B0,y_]),c0=M((V)=>{if(!V)return;if(V_.current===V)return;V_.current=V,f0.current={inFlight:!1,lastAttemptAt:0,turnId:V},M_(V),s.current=null,y_(null),D_.current="",I_.current="",c({text:"",totalLines:0}),c_(""),a({text:"",totalLines:0}),$_(null),$0.current=null,m0.current=null,F_.current=!1,z_.current=!1},[M_,y_]),B=M((V)=>{if(typeof document<"u"){let S=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&S)return}let W=m0.current;if(!W||!W.post)return;if(V&&W.turnId&&W.turnId!==V)return;let D=W.post;if(D.id&&w$.current===D.id)return;let y=String(D?.data?.content||"").trim();if(!y)return;w$.current=D.id||w$.current,m0.current=null;let w=y.replace(/\s+/g," ").slice(0,200),g=R0.current||{},L_=(D?.data?.agent_id?g[D.data.agent_id]:null)?.name||"Pi";y0(L_,w)},[y0]),P=M(async(V,W)=>{if(V!=="thought"&&V!=="draft")return;let D=V_.current;if(V==="thought"){if(F_.current=W,D)try{await t8(D,"thought",W)}catch(y){console.warn("Failed to update thought visibility:",y)}if(!W)return;try{let y=D?await a8(D,"thought"):null;if(y?.text)I_.current=y.text;a((w)=>({...w||{text:"",totalLines:0},fullText:I_.current||w?.fullText||"",totalLines:Number.isFinite(y?.total_lines)?y.total_lines:w?.totalLines||0}))}catch(y){console.warn("Failed to fetch full thought:",y)}return}if(z_.current=W,D)try{await t8(D,"draft",W)}catch(y){console.warn("Failed to update draft visibility:",y)}if(!W)return;try{let y=D?await a8(D,"draft"):null;if(y?.text)D_.current=y.text;c((w)=>({...w||{text:"",totalLines:0},fullText:D_.current||w?.fullText||"",totalLines:Number.isFinite(y?.total_lines)?y.total_lines:w?.totalLines||0}))}catch(y){console.warn("Failed to fetch full draft:",y)}},[]),Y=k(null),Q=M(()=>{let V=v0.current;if(!V)return;if(!(Math.abs(V.scrollTop)>150))V.scrollTop=0},[]);Y.current=Q;let J=M((V)=>{let W=v0.current;if(!W||typeof V!=="function"){V?.();return}let{currentHashtag:D,searchQuery:y}=z0.current||{},w=!(y&&!D),g=w?W.scrollHeight-W.scrollTop:W.scrollTop;V(),requestAnimationFrame(()=>{let r=v0.current;if(!r)return;if(w){let L_=Math.max(r.scrollHeight-g,0);r.scrollTop=L_}else{let L_=Math.max(r.scrollHeight-r.clientHeight,0),S=Math.min(g,L_);r.scrollTop=S}})},[]),E=M((V)=>{let W=v0.current;if(!W||typeof V!=="function"){V?.();return}let D=W.scrollTop;V(),requestAnimationFrame(()=>{let y=v0.current;if(!y)return;let w=Math.max(y.scrollHeight-y.clientHeight,0);y.scrollTop=Math.min(D,w)})},[]),C="Queued as a follow-up (one-at-a-time).",l="⁣",o=M((V)=>{if(!V||!Array.isArray(V))return V;let W=K_.current,D=new Set(W),y=V.filter((w)=>{if(D.has(w?.id))return!1;if(w?.data?.is_bot_message){let g=w?.data?.content;if(g===C||g===l)return!1}return!0});return y.length===V.length?V:y},[]),{posts:h,setPosts:m,hasMore:Y_,setHasMore:K0,hasMoreRef:w0,loadPosts:Y0,refreshTimeline:G0,loadMore:x0,loadMoreRef:j2}=w8({preserveTimelineScroll:J,preserveTimelineScrollTop:E,chatJid:$}),i$=n_(()=>o(h),[h,x_,o]),B2=M(()=>{let V=F0.current;if(!V)return;m((W)=>W?W.filter((D)=>D.id!==V):W),F0.current=null},[m]),{handleSplitterMouseDown:H1,handleSplitterTouchStart:Z2,handleEditorSplitterMouseDown:t0,handleEditorSplitterTouchStart:O2,handleDockSplitterMouseDown:$3,handleDockSplitterTouchStart:J1}=M8({appShellRef:A$,sidebarWidthRef:s$,editorWidthRef:O$,dockHeightRef:r0}),j3=M(()=>{if(!f_.current)return;f_.current=!1,U_.current=0,O_.current=null,V_.current=null,M_(null),F_.current=!1,z_.current=!1;let V=(D_.current||"").trim();if(D_.current="",I_.current="",c({text:"",totalLines:0}),c_(""),a({text:"",totalLines:0}),$_(null),$0.current=null,m0.current=null,!V){d({type:"error",title:"Response stalled - No content received"});return}let D=`${V}${`

⚠️ Response may be incomplete - the model stopped responding`}`,y=Date.now(),w=new Date().toISOString(),g={id:y,timestamp:w,data:{type:"agent_response",content:D,agent_id:"default",is_local_stall:!0}};F0.current=y,m((r)=>r?h2([...r,g]):[g]),Y.current?.(),d(null)},[M_]);v(()=>{z0.current={currentHashtag:q,searchQuery:G}},[q,G]);let u_=M(()=>{let V=++T_.current,W=$;kj(W).then((D)=>{if(V!==T_.current)return;if(Q0.current!==W)return;let y=G_.current,w=Array.isArray(D?.items)?D.items.map((g)=>({...g})).filter((g)=>!y.has(g.row_id)):[];if(w.length){k_((g)=>{if(g.length===w.length&&g.every((r,L_)=>r.row_id===w[L_].row_id))return g;return w});return}y.clear(),U$(0),k_((g)=>g.length===0?g:[])}).catch(()=>{if(V!==T_.current)return;if(Q0.current!==W)return;k_((D)=>D.length===0?D:[])})},[U$,$,k_]),e0=M(async()=>{let V=$;try{let W=await t4(V);if(Q0.current!==V)return;if(W)b_(W)}catch(W){if(Q0.current!==V)return;console.warn("Failed to fetch agent context:",W)}},[$]),_$=M(async()=>{let V=$;try{let W=await e8(V);if(Q0.current!==V)return null;if(!W||W.status!=="active"||!W.data){if(P_.current){let{currentHashtag:w,searchQuery:g}=z0.current||{};if(!w&&!g)G0()}return P_.current=!1,p0(),D0.current=null,d(null),c({text:"",totalLines:0}),c_(""),a({text:"",totalLines:0}),$_(null),$0.current=null,W??null}P_.current=!0;let D=W.data;D0.current=D;let y=D.turn_id||D.turnId;if(y)c0(y);if(g0({running:!0,clearSilence:!0}),c$(),d(D),W.thought&&W.thought.text)a((w)=>{if(w&&w.text&&w.text.length>=W.thought.text.length)return w;return I_.current=W.thought.text,{text:W.thought.text,totalLines:W.thought.totalLines||0}});if(W.draft&&W.draft.text)c((w)=>{if(w&&w.text&&w.text.length>=W.draft.text.length)return w;return D_.current=W.draft.text,{text:W.draft.text,totalLines:W.draft.totalLines||0}});return W}catch(W){return console.warn("Failed to fetch agent status:",W),null}},[p0,c$,g0,G0,c0]),D1=M(async()=>{if(!f_.current)return null;if($0.current)return null;let V=V_.current||null,W=f0.current,D=Date.now();if(W.inFlight)return null;if(W.turnId===V&&D-W.lastAttemptAt<o4)return null;W.inFlight=!0,W.lastAttemptAt=D,W.turnId=V;try{let{currentHashtag:y,searchQuery:w}=z0.current||{};if(!y&&!w)await G0();return await u_(),await _$()}finally{W.inFlight=!1}},[_$,u_,G0]);v(()=>{let V=Math.min(1000,Math.max(100,Math.floor(d4/2))),W=setInterval(()=>{if(!f_.current)return;if($0.current)return;let D=O_.current;if(!D)return;let y=Date.now(),w=y-D,g=v2(D0.current);if(w>=b8){if(!g)d({type:"waiting",title:"Re-syncing after a quiet period…"});D1();return}if(w>=d4){if(y-U_.current>=o4){if(!g){let r=Math.floor(w/1000);d({type:"waiting",title:`Waiting for model… No events for ${r}s`})}U_.current=y,D1()}}},V);return()=>clearInterval(W)},[D1]);let $9=M((V)=>{if(K(V),V!=="connected"){d(null),c({text:"",totalLines:0}),c_(""),a({text:"",totalLines:0}),$_(null),$0.current=null,p0();return}if(!S$.current){S$.current=!0,_$(),e0();return}let{currentHashtag:W,searchQuery:D}=z0.current;if(!W&&!D)G0();_$(),u_(),e0()},[p0,G0,_$,u_,e0]),j9=M(async(V)=>{O(V),m(null),await Y0(V)},[Y0]),Z9=M(async()=>{O(null),F(null),m(null),await Y0()},[Y0]),N9=M(async(V,W=u)=>{if(!V||!V.trim())return;let D=W==="root"||W==="all"?W:"current";R(D),F(V.trim()),O(null),m(null);try{let y=await s8(V.trim(),50,0,$,D,O0);m(y.results),K0(!1)}catch(y){console.error("Failed to search:",y),m([])}},[$,O0,u]),z9=M(()=>{p(!0),F(null),O(null),R("current"),m([])},[]),K9=M(()=>{p(!1),F(null),Y0()},[Y0]),Ij=M(()=>{},[]),Y9=M(async(V)=>{if(!V)return;let W=V.id,D=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():$,y=i$?.filter((g)=>g?.data?.thread_id===W&&g?.id!==W).length||0;if(y>0){if(!window.confirm(`Delete this message and its ${y} replies?`))return}let w=(g)=>{if(!g.length)return;j0((L_)=>{let S=new Set(L_);return g.forEach((j_)=>S.add(j_)),S}),setTimeout(()=>{if(E(()=>{m((L_)=>L_?L_.filter((S)=>!g.includes(S.id)):L_)}),j0((L_)=>{let S=new Set(L_);return g.forEach((j_)=>S.delete(j_)),S}),w0.current)j2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let g=await r8(W,y>0,D);if(g?.ids?.length)w(g.ids)}catch(g){let r=g?.message||"";if(y===0&&r.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let S=await r8(W,!0,D);if(S?.ids?.length)w(S.ids);return}console.error("Failed to delete post:",g),alert(`Failed to delete message: ${r}`)}},[$,i$,E]),Z3=M(async()=>{try{let V=await Fj();R_(C8(V));let W=V?.user||{};k$((y)=>{let w=typeof W.name==="string"&&W.name.trim()?W.name.trim():"You",g=typeof W.avatar_url==="string"?W.avatar_url.trim():null,r=typeof W.avatar_background==="string"&&W.avatar_background.trim()?W.avatar_background.trim():null;if(y.name===w&&y.avatar_url===g&&y.avatar_background===r)return y;return{name:w,avatar_url:g,avatar_background:r}});let D=(V?.agents||[]).find((y)=>y.id==="default");u$(D?.name,D?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=$,W=await t4(V);if(Q0.current!==V)return;if(W)b_(W)}catch{}},[u$,$]);v(()=>{Z3();let V=D2("sidebarWidth",null),W=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(s$.current=W,A$.current)A$.current.style.setProperty("--sidebar-width",`${W}px`)},[Z3]);let E1=k0||e!==null,N3=M((V)=>{if(!V||typeof V!=="object")return;let W=V.agent_id;if(!W)return;let{agent_name:D,agent_avatar:y}=V;if(!D&&y===void 0)return;let w=R0.current?.[W]||{id:W},g=w.name||null,r=w.avatar_url??w.avatarUrl??w.avatar??null,L_=!1,S=!1;if(D&&D!==w.name)g=D,S=!0;if(y!==void 0){let j_=typeof y==="string"?y.trim():null,m_=typeof r==="string"?r.trim():null,Q_=j_||null;if(Q_!==(m_||null))r=Q_,L_=!0}if(!S&&!L_)return;if(R_((j_)=>{let Q_={...j_[W]||{id:W}};if(S)Q_.name=g;if(L_)Q_.avatar_url=r;return{...j_,[W]:Q_}}),W==="default")u$(g,r,L_?Date.now():null)},[u$]),z3=M((V)=>{if(!V||typeof V!=="object")return;let W=V.user_name??V.userName,D=V.user_avatar??V.userAvatar,y=V.user_avatar_background??V.userAvatarBackground;if(W===void 0&&D===void 0&&y===void 0)return;k$((w)=>{let g=typeof W==="string"&&W.trim()?W.trim():w.name||"You",r=D===void 0?w.avatar_url:typeof D==="string"&&D.trim()?D.trim():null,L_=y===void 0?w.avatar_background:typeof y==="string"&&y.trim()?y.trim():null;if(w.name===g&&w.avatar_url===r&&w.avatar_background===L_)return w;return{name:g,avatar_url:r,avatar_background:L_}})},[]),k1=M((V)=>{if(!V||typeof V!=="object")return;let W=V.model??V.current;if(W!==void 0)a_(W);if(V.thinking_level!==void 0)E_(V.thinking_level??null);if(V.supports_thinking!==void 0)d_(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)g_(V.provider_usage??null)},[]),w2=M(()=>{let V=$;Hj(V).then((W)=>{if(Q0.current!==V)return;if(W)k1(W)}).catch(()=>{})},[k1,$]),P0=M(()=>{let V=$,W=(D)=>Array.isArray(D)?D.filter((y)=>y&&typeof y.chat_jid==="string"&&typeof y.agent_name==="string"&&y.agent_name.trim()):[];Promise.all([Jj().catch(()=>({chats:[]})),e4(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([D,y])=>{if(Q0.current!==V)return;let w=W(D?.chats),g=W(y?.chats);if(g.length===0){V0(w);return}let r=new Map(w.map((S)=>[S.chat_jid,S])),L_=g.map((S)=>{let j_=r.get(S.chat_jid);return j_?{...S,...j_,is_active:j_.is_active??S.is_active}:S});L_.sort((S,j_)=>{if(S.chat_jid===V&&j_.chat_jid!==V)return-1;if(j_.chat_jid===V&&S.chat_jid!==V)return 1;let m_=Boolean(S.archived_at),Q_=Boolean(j_.archived_at);if(m_!==Q_)return m_?1:-1;if(Boolean(S.is_active)!==Boolean(j_.is_active))return S.is_active?-1:1;return String(S.chat_jid).localeCompare(String(j_.chat_jid))}),V0(L_)}).catch(()=>{if(Q0.current!==V)return;V0([])})},[$]),E0=M(()=>{e4(O0).then((V)=>{let W=Array.isArray(V?.chats)?V.chats.filter((D)=>D&&typeof D.chat_jid==="string"&&typeof D.agent_name==="string"):[];l0(W)}).catch(()=>{})},[O0]),W9=M((V)=>{let W=V?.row_id;if(W==null)return;G_.current.add(W),k_((D)=>D.filter((y)=>y?.row_id!==W)),yj(W,a4($)).then(()=>{u_()}).catch((D)=>{console.warn("[queue] Failed to steer queued item:",D),q_("Failed to steer message","The queued message could not be sent as steering.","warning"),G_.current.delete(W),u_()})},[$,u_,k_,q_]),G9=M((V)=>{let W=V?.row_id;if(W==null)return;let D=J_.current.filter((y)=>y?.row_id!==W).length;G_.current.add(W),U$(D),k_((y)=>y.filter((w)=>w?.row_id!==W)),Aj(W,a4($)).then(()=>{u_()}).catch((y)=>{console.warn("[queue] Failed to remove queued item:",y),q_("Failed to remove message","The queued message could not be removed.","warning"),G_.current.delete(W),u_()})},[U$,$,u_,k_,q_]),y1=M((V)=>{if(!V||typeof V!=="object")return;if(P0(),E0(),V?.queued==="followup"||V?.queued==="steer"){u_();return}let W=V?.command;if(W&&typeof W==="object"&&(W?.queued_followup||W?.queued_steer))u_()},[P0,E0,u_]),A1=M(()=>{if(U0.current)U0.current.abort(),U0.current=null;l_(null)},[]),i2=M(async(V)=>{let W=String(V||"").trim();if(!W)return q_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(U0.current)U0.current.abort();let D=new AbortController;U0.current=D,l_({question:W,answer:"",thinking:"",error:null,model:null,status:"running"});try{let y=await wj(W,{signal:D.signal,chatJid:X6($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(w,g)=>{if(w==="side_prompt_start")l_((r)=>r?{...r,status:"running"}:r)},onThinkingDelta:(w)=>{l_((g)=>g?{...g,thinking:`${g.thinking||""}${w||""}`}:g)},onTextDelta:(w)=>{l_((g)=>g?{...g,answer:`${g.answer||""}${w||""}`}:g)}});if(U0.current!==D)return!0;l_((w)=>w?{...w,answer:y?.result||w.answer||"",thinking:y?.thinking||w.thinking||"",model:y?.model||null,status:"success",error:null}:w)}catch(y){if(D.signal.aborted)return!0;l_((w)=>w?{...w,status:"error",error:y?.payload?.error||y?.message||"BTW request failed."}:w)}finally{if(U0.current===D)U0.current=null}return!0},[$,q_]),V9=M(async({content:V})=>{let W=V6(V);if(!W)return!1;if(W.type==="help")return q_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(W.type==="clear")return A1(),q_("BTW cleared","Closed the side conversation panel.","info"),!0;if(W.type==="ask")return await i2(W.question),!0;return!1},[A1,i2,q_]),X9=M(()=>{if(w_?.question)i2(w_.question)},[w_,i2]),q9=M(async()=>{let V=B6(w_);if(!V)return;try{let W=await F2("default",V,null,[],E1?"queue":null,$);y1(W),q_(W?.queued==="followup"?"BTW queued":"BTW injected",W?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(W){q_("BTW inject failed",W?.message||"Could not inject BTW answer into chat.","warning")}},[w_,y1,E1,q_]),P2=M(()=>{w2(),P0(),E0(),u_(),e0()},[w2,P0,E0,u_,e0]);v(()=>{P2();let V=setInterval(()=>{w2(),P0(),E0(),u_()},60000);return()=>clearInterval(V)},[P2,w2,P0,E0,u_]),v(()=>{E0()},[E0]),v(()=>{let V=!1;if(m(null),q)return Y0(q),()=>{V=!0};if(G)return s8(G,50,0,$,u,O0).then((W)=>{if(V)return;m(W.results),K0(!1)}).catch((W)=>{if(V)return;console.error("Failed to search:",W),m([]),K0(!1)}),()=>{V=!0};return Y0(),()=>{V=!0}},[$,q,G,u,O0,Y0,K0,m]),v(()=>{let V=o$.current||$;y$.current.set(V,h$())},[$,h$]),v(()=>{let V=o$.current||$;if(V===$)return;y$.current.set(V,h$()),o$.current=$,G_.current.clear(),L2(y$.current.get($)||null),u_(),_$(),e0()},[$,_$,e0,u_,L2,h$]);let L9=M(()=>{let{currentHashtag:V,searchQuery:W}=z0.current||{};if(!V&&!W)G0();P2()},[P2,G0]),w1=M((V,W)=>{let D=W?.turn_id,y=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null,g=y?y===$:V==="connected"||V==="workspace_update";if(g)N3(W),z3(W);if(V==="ui_theme"){j6(W);return}if(V?.startsWith("agent_")){if(!(V==="agent_draft_delta"||V==="agent_thought_delta"||V==="agent_draft"||V==="agent_thought"))c$()}if(V==="connected"){d(null),c({text:"",totalLines:0}),c_(""),a({text:"",totalLines:0}),$_(null),$0.current=null,p0();let S=$;e8(S).then((Q_)=>{if(Q0.current!==S)return;if(!Q_||Q_.status!=="active"||!Q_.data)return;let Q2=Q_.data,G3=Q2.turn_id||Q2.turnId;if(G3)c0(G3);if(g0({clearSilence:!0}),X2(Q2),Q_.thought&&Q_.thought.text)I_.current=Q_.thought.text,a({text:Q_.thought.text,totalLines:Q_.thought.totalLines||0});if(Q_.draft&&Q_.draft.text)D_.current=Q_.draft.text,c({text:Q_.draft.text,totalLines:Q_.draft.totalLines||0})}).catch((Q_)=>{console.warn("Failed to fetch agent status:",Q_)});let{currentHashtag:j_,searchQuery:m_}=z0.current||{};if(!j_&&!m_)G0();P2();return}if(V==="agent_status"){if(!g){if(W?.type==="done"||W?.type==="error")P0(),E0();return}if(W.type==="done"||W.type==="error"){if(D&&V_.current&&D!==V_.current)return;if(W.type==="done"){B(D||V_.current);let{currentHashtag:S,searchQuery:j_}=z0.current||{};if(!S&&!j_)G0();if(W.context_usage)b_(W.context_usage)}if(P_.current=!1,p0(),G_.current.clear(),P0(),u_(),c({text:"",totalLines:0}),c_(""),a({text:"",totalLines:0}),$_(null),W.type==="error")d({type:"error",title:W.title||"Agent error"}),setTimeout(()=>d(null),8000);else d(null)}else{if(D)c0(D);if(g0({running:!0,clearSilence:!0}),W.type==="thinking")D_.current="",I_.current="",c({text:"",totalLines:0}),c_(""),a({text:"",totalLines:0});D0.current=W,d((S)=>{if(S&&S.type===W.type&&S.title===W.title)return S;return W})}return}if(V==="agent_steer_queued"){if(!g)return;if(D&&V_.current&&D!==V_.current)return;let S=D||V_.current;if(!S)return;s.current=S,y_(S);return}if(V==="agent_followup_queued"){if(!g)return;let S=W?.row_id,j_=W?.content;if(S!=null&&typeof j_==="string"&&j_.trim())k_((m_)=>{if(m_.some((Q_)=>Q_?.row_id===S))return m_;return[...m_,{row_id:S,content:j_,timestamp:W?.timestamp||null,thread_id:W?.thread_id??null}]});u_();return}if(V==="agent_followup_consumed"){if(!g)return;let S=W?.row_id;if(S!=null){let j_=J_.current.filter((m_)=>m_.row_id!==S).length;U$(j_),k_((m_)=>m_.filter((Q_)=>Q_.row_id!==S))}u_(),G0();return}if(V==="agent_followup_removed"){if(!g)return;let S=W?.row_id;if(S!=null){let j_=J_.current.filter((m_)=>m_.row_id!==S).length;G_.current.add(S),U$(j_),k_((m_)=>m_.filter((Q_)=>Q_.row_id!==S))}u_();return}if(V==="agent_draft_delta"){if(!g)return;if(D&&V_.current&&D!==V_.current)return;if(D&&!V_.current)c0(D);if(g0({running:!0,clearSilence:!0}),W?.reset)D_.current="";if(W?.delta)D_.current+=W.delta;let S=Date.now();if(!f$.current||S-f$.current>=100){f$.current=S;let j_=D_.current,m_=s4(j_);if(z_.current)c((Q_)=>({text:Q_?.text||"",totalLines:m_,fullText:j_}));else c({text:j_,totalLines:m_})}return}if(V==="agent_draft"){if(!g)return;if(D&&V_.current&&D!==V_.current)return;if(D&&!V_.current)c0(D);g0({running:!0,clearSilence:!0});let S=W.text||"",j_=W.mode||(W.kind==="plan"?"replace":"append"),m_=Number.isFinite(W.total_lines)?W.total_lines:S?S.replace(/\r\n/g,`
`).split(`
`).length:0;if(W.kind==="plan")if(j_==="replace")c_(S);else c_((Q_)=>(Q_||"")+S);else if(!z_.current)D_.current=S,c({text:S,totalLines:m_});return}if(V==="agent_thought_delta"){if(!g)return;if(D&&V_.current&&D!==V_.current)return;if(D&&!V_.current)c0(D);if(g0({running:!0,clearSilence:!0}),W?.reset)I_.current="";if(typeof W?.delta==="string")I_.current+=W.delta;let S=Date.now();if(F_.current&&(!W$.current||S-W$.current>=100)){W$.current=S;let j_=I_.current;a((m_)=>({text:m_?.text||"",totalLines:s4(j_),fullText:j_}))}return}if(V==="agent_thought"){if(!g)return;if(D&&V_.current&&D!==V_.current)return;if(D&&!V_.current)c0(D);g0({running:!0,clearSilence:!0});let S=W.text||"",j_=Number.isFinite(W.total_lines)?W.total_lines:S?S.replace(/\r\n/g,`
`).split(`
`).length:0;if(!F_.current)I_.current=S,a({text:S,totalLines:j_});return}if(V==="model_changed"){if(!g)return;if(W?.model!==void 0)a_(W.model);if(W?.thinking_level!==void 0)E_(W.thinking_level??null);if(W?.supports_thinking!==void 0)d_(Boolean(W.supports_thinking));let S=$;t4(S).then((j_)=>{if(Q0.current!==S)return;if(j_)b_(j_)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:W}));return}if(l8(V)){if(!g)return;if(n8(V,W),V==="extension_ui_notify"&&typeof W?.message==="string")q_(W.message,null,W?.type||"info");if(V==="extension_ui_error"&&typeof W?.error==="string")q_("Extension UI error",W.error,"error",5000);return}let{currentHashtag:r,searchQuery:L_}=z0.current;if(V==="agent_response"){if(!g)return;B2(),m0.current={post:W,turnId:V_.current}}if(!r&&!L_&&g&&(V==="new_post"||V==="new_reply"||V==="agent_response"))m((S)=>{if(!S)return[W];if(S.some((j_)=>j_.id===W.id))return S;return[...S,W]}),Y.current?.();if(V==="interaction_updated"){if(!g)return;m((S)=>{if(!S)return S;if(!S.some((j_)=>j_.id===W.id))return S;return S.map((j_)=>j_.id===W.id?W:j_)})}if(V==="interaction_deleted"){if(!g)return;let S=W?.ids||[];if(S.length){E(()=>{m((Q_)=>Q_?Q_.filter((Q2)=>!S.includes(Q2.id)):Q_)});let{currentHashtag:j_,searchQuery:m_}=z0.current;if(w0.current&&!j_&&!m_)j2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[p0,c$,$,j2,g0,B,E,P0,E0,G0,B2,c0,X2,N3,z3,w2,u_,k_]);v(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=w1,V.reset=()=>{B2(),p0(),d(null),c({text:"",totalLines:0}),c_(""),a({text:"",totalLines:0}),$_(null)},V.finalize=()=>j3(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[p0,j3,w1,B2]),y8({handleSseEvent:w1,handleConnectionStatusChange:$9,loadPosts:Y0,onWake:L9,chatJid:$}),v(()=>{if(!i$||i$.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let W=V.slice(5);e$(W),history.replaceState(null,"",location.pathname+location.search)},[i$,e$]);let P1=e!==null;v(()=>{if(z!=="connected")return;let W=setInterval(()=>{let{currentHashtag:D,searchQuery:y}=z0.current||{},w=!D&&!y;if(P1){if(w)G0();u_(),_$(),e0()}else{if(w)G0();_$(),e0()}},P1?15000:60000);return()=>clearInterval(W)},[z,P1,_$,e0,u_,G0]),v(()=>{return o8(()=>{_$(),e0(),u_()})},[_$,e0,u_]);let B9=M(()=>{X$((V)=>!V)},[]),K3=M((V)=>{if(typeof window>"u")return;let W=String(V||"").trim();if(!W||W===$)return;let D=W2(window.location.href,W,{chatOnly:j});window.location.assign(D)},[j,$]),Y3=M(async()=>{if(typeof window>"u"||!C_?.chat_jid)return;let V=C_.agent_name||"",W=C_.display_name||"",D=window.prompt("Branch display name",W);if(D===null)return;let y=window.prompt("Agent handle (without @)",V);if(y===null)return;try{let w=await Dj(C_.chat_jid,{displayName:D,agentName:y});await Promise.allSettled([P0(),E0()]);let g=w?.branch?.agent_name||String(y||"").trim()||V;q_("Branch renamed",`This chat is now @${g}.`,"info",3500)}catch(w){let g=w instanceof Error?w.message:String(w||"Could not rename branch."),r=/already in use/i.test(g||"")?`${g} Switch to or restore that existing session from the session manager.`:g;q_("Could not rename branch",r||"Could not rename branch.","warning",5000)}},[C_,P0,E0,q_]),W3=M(async(V=null)=>{if(typeof window>"u")return;let W=typeof V==="string"&&V.trim()?V.trim():"",D=typeof $==="string"&&$.trim()?$.trim():"",y=W||C_?.chat_jid||D;if(!y){q_("Could not prune branch","No active session is selected yet.","warning",4000);return}let w=(C_?.chat_jid===y?C_:null)||e_.find((S)=>S?.chat_jid===y)||v_.find((S)=>S?.chat_jid===y)||null;if(w?.chat_jid===(w?.root_chat_jid||w?.chat_jid)){q_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let r=`@${w?.agent_name||y}${w?.chat_jid?` — ${w.chat_jid}`:""}`;if(!window.confirm(`Prune ${r}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await Ej(y),await Promise.allSettled([P0(),E0()]);let S=w?.root_chat_jid||"web:default";q_("Branch pruned",`${r} has been archived.`,"info",3000);let j_=W2(window.location.href,S,{chatOnly:j});window.location.assign(j_)}catch(S){let j_=S instanceof Error?S.message:String(S||"Could not prune branch.");q_("Could not prune branch",j_||"Could not prune branch.","warning",5000)}},[v_,j,C_,e_,$,P0,E0,q_]),O9=M(async(V)=>{let W=typeof V==="string"?V.trim():"";if(!W||typeof _9!=="function")return;try{let D=await _9(W);await Promise.allSettled([P0(),E0()]);let y=D?.branch,w=typeof y?.chat_jid==="string"&&y.chat_jid.trim()?y.chat_jid.trim():W,g=typeof y?.agent_name==="string"&&y.agent_name.trim()?`@${y.agent_name.trim()}`:w;q_("Branch restored",`Restored ${g}.`,"info",3200);let r=W2(window.location.href,w,{chatOnly:j});window.location.assign(r)}catch(D){let y=D instanceof Error?D.message:String(D||"Could not restore branch.");q_("Could not restore branch",y||"Could not restore branch.","warning",5000)}},[j,P0,E0,q_]);v(()=>{if(!Z||typeof window>"u")return;let V=!1;return(async()=>{try{T({status:"running",message:"Preparing a new chat branch…"});let W=await x2(N);if(V)return;let D=W?.branch,y=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():null;if(!y)throw Error("Branch fork did not return a chat id.");let w=W2(window.location.href,y,{chatOnly:!0});window.location.replace(w)}catch(W){if(V)return;T({status:"error",message:F1(W)})}})(),()=>{V=!0}},[Z,N]);let Q9=M(async()=>{if(typeof window>"u")return;try{let W=(await x2($))?.branch,D=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([P0(),E0()]);let y=W?.agent_name?`@${W.agent_name}`:D;q_("New branch created",`Switched to ${y}.`,"info",2500);let w=W2(window.location.href,D,{chatOnly:j});window.location.assign(w)}catch(V){q_("Could not create branch",F1(V),"warning",5000)}},[j,$,P0,E0,q_]),U9=M(async()=>{if(typeof window>"u"||X)return;let V=R8($);if(!V){q_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(V.mode==="tab"){let D=p8(window.location.href,$,{chatOnly:!0});if(!window.open(D,V.target))q_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let W=v8(V);if(!W){q_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}u8(W,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let y=(await x2($))?.branch,w=typeof y?.chat_jid==="string"&&y.chat_jid.trim()?y.chat_jid.trim():null;if(!w)throw Error("Branch fork did not return a chat id.");try{let r=await c1();V0(Array.isArray(r?.chats)?r.chats:[])}catch{}try{let r=await e4(O0);l0(Array.isArray(r?.chats)?r.chats:[])}catch{}let g=W2(window.location.href,w,{chatOnly:!0});m8(W,g)}catch(D){g8(W),q_("Could not open branch window",F1(D),"error",5000)}},[$,O0,X,q_]);v(()=>{if(!T0)return;if(typeof window>"u")return;let V=A$.current;if(!V)return;if(!O$.current){let W=D2("editorWidth",null),D=s$.current||280;O$.current=Number.isFinite(W)?W:D}if(V.style.setProperty("--editor-width",`${O$.current}px`),!r0.current){let W=D2("dockHeight",null);r0.current=Number.isFinite(W)?W:200}V.style.setProperty("--dock-height",`${r0.current}px`)},[T0]),v(()=>{if(!I0||j)return;let V=(W)=>{if(W.ctrlKey&&W.key==="`")W.preventDefault(),b0()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[b0,I0,j]);let F9=Boolean(W_&&W_===(e?.turn_id||B_));if(Z)return U`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${n0.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${n0.message}</p>
                    </div>
                </div>
            </div>
        `;return U`
        <div class=${`app-shell${M0?"":" workspace-collapsed"}${T0?" editor-open":""}${j?" chat-only":""}`} ref=${A$}>
            ${!j&&U`
                <${H8}
                    onFileSelect=${a$}
                    visible=${M0}
                    active=${M0||T0}
                    onOpenEditor=${Z0}
                    onOpenTerminalTab=${D$}
                    onToggleTerminal=${I0?b0:void 0}
                    terminalVisible=${Boolean(I0&&N0)}
                />
                <button
                    class=${`workspace-toggle-tab${M0?" open":" closed"}`}
                    onClick=${B9}
                    title=${M0?"Hide workspace":"Show workspace"}
                    aria-label=${M0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${H1} onTouchStart=${Z2}></div>
            `}
            ${Y$&&U`
                <div class="editor-pane-container">
                    ${T0&&U`
                        <${D8}
                            tabs=${d$}
                            activeId=${H0}
                            onActivate=${A0}
                            onClose=${q$}
                            onCloseOthers=${S0}
                            onCloseAll=${o0}
                            onTogglePin=${L$}
                            onTogglePreview=${J$}
                            previewTabs=${H$}
                            onToggleDock=${I0?b0:void 0}
                            dockVisible=${I0&&N0}
                        />
                    `}
                    ${T0&&U`<div class="editor-pane-host" ref=${T$}></div>`}
                    ${T0&&H0&&H$.has(H0)&&U`
                        <${k8}
                            getContent=${()=>J0.current?.getContent?.()}
                            path=${H0}
                            onClose=${()=>J$(H0)}
                        />
                    `}
                    ${I0&&N0&&U`<div class="dock-splitter" onMouseDown=${$3} onTouchStart=${J1}></div>`}
                    ${I0&&U`<div class=${`dock-panel${N0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${b0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${B$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${t0} onTouchStart=${O2}></div>
            `}
            <div class="container">
                ${G&&T8()&&U`<div class="search-results-spacer"></div>`}
                ${j&&U`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${C_?.agent_name?`@${C_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${C_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${e_.length>1&&U`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(V)=>K3(V.currentTarget.value)}
                                    >
                                        ${e_.map((V)=>U`
                                            <option key=${V.chat_jid} value=${V.chat_jid}>
                                                ${`@${V.agent_name} — ${V.chat_jid}${V.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${C_?.chat_jid&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${Y3}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${C_?.chat_jid&&C_.chat_jid!==(C_.root_chat_jid||C_.chat_jid)&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${W3}
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
                ${(q||G)&&U`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${Z9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${q?`#${q}`:`Search: ${G} · ${C0}`}</span>
                    </div>
                `}
                <${u6}
                    posts=${i$}
                    hasMore=${Y_}
                    onLoadMore=${x0}
                    timelineRef=${v0}
                    onHashtagClick=${j9}
                    onMessageRef=${g$}
                    onScrollToMessage=${e$}
                    onFileRef=${V2}
                    onPostClick=${void 0}
                    onDeletePost=${Y9}
                    emptyMessage=${q?`No posts with #${q}`:G?`No results for "${G}"`:void 0}
                    agents=${A_}
                    user=${E$}
                    reverse=${!(G&&!q)}
                    removingPostIds=${V$}
                    searchQuery=${G}
                />
                <${E6}
                    status=${e}
                    draft=${N_}
                    plan=${X_}
                    thought=${__}
                    pendingRequest=${Z_}
                    intent=${i}
                    turnId=${B_}
                    steerQueued=${F9}
                    onPanelToggle=${P}
                />
                <${O6}
                    session=${w_}
                    onClose=${A1}
                    onRetry=${X9}
                    onInject=${q9}
                />
                <${l3}
                    onPost=${()=>{Y0(),Q()}}
                    onFocus=${Q}
                    searchMode=${I}
                    searchScope=${u}
                    onSearch=${N9}
                    onSearchScopeChange=${R}
                    onEnterSearch=${z9}
                    onExitSearch=${K9}
                    fileRefs=${A}
                    onRemoveFileRef=${a0}
                    onClearFileRefs=${t$}
                    onSetFileRefs=${m$}
                    messageRefs=${x}
                    onRemoveMessageRef=${p$}
                    onClearMessageRefs=${A2}
                    onSetMessageRefs=${_2}
                    onSwitchChat=${K3}
                    onRenameSession=${Y3}
                    onCreateSession=${Q9}
                    onDeleteSession=${W3}
                    onRestoreSession=${O9}
                    activeEditorPath=${j?null:H0}
                    onAttachEditorFile=${j?void 0:y2}
                    onOpenFilePill=${V2}
                    followupQueueCount=${t}
                    followupQueueItems=${x_}
                    onInjectQueuedFollowup=${W9}
                    onRemoveQueuedFollowup=${G9}
                    onSubmitIntercept=${V9}
                    onMessageResponse=${y1}
                    onSubmitError=${$2}
                    onPopOutChat=${X?void 0:U9}
                    isAgentActive=${E1}
                    activeChatAgents=${v_}
                    currentChatJid=${$}
                    connectionStatus=${z}
                    activeModel=${h_}
                    modelUsage=${t_}
                    thinkingLevel=${i_}
                    supportsThinking=${H_}
                    contextUsage=${X0}
                    notificationsEnabled=${F$}
                    notificationPermission=${z$}
                    onToggleNotifications=${x$}
                    onModelChange=${a_}
                    onModelStateChange=${k1}
                />
                <${k6}
                    request=${Z_}
                    onRespond=${()=>{$_(null),$0.current=null}}
                />
            </div>
        </div>
    `}function Mj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return U`<${Pj} locationParams=${_} />`}S3(U`<${Mj} />`,document.getElementById("app"));

//# debugId=1698D236DD695E6564756E2164756E21
//# sourceMappingURL=app.bundle.js.map
