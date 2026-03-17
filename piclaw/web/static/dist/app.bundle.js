var Q9=Object.defineProperty;var U9=(_)=>_;function F9(_,$){this[_]=U9.bind(null,$)}var J9=(_,$)=>{for(var j in $)Q9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:F9.bind($,j)})};var H9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var l2,e_,q3,D9,i$,e4,L3,B3,O3,A1,E1,k1,E9,c2={},h2=[],k9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,n2=Array.isArray;function I$(_,$){for(var j in $)_[j]=$[j];return _}function P1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function Q3(_,$,j){var Z,N,z,K={};for(z in $)z=="key"?Z=$[z]:z=="ref"?N=$[z]:K[z]=$[z];if(arguments.length>2&&(K.children=arguments.length>3?l2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(z in _.defaultProps)K[z]===void 0&&(K[z]=_.defaultProps[z]);return m2(_,K,Z,N,null)}function m2(_,$,j,Z,N){var z={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++q3:N,__i:-1,__u:0};return N==null&&e_.vnode!=null&&e_.vnode(z),z}function d2(_){return _.children}function g2(_,$){this.props=_,this.context=$}function G2(_,$){if($==null)return _.__?G2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?G2(_):null}function y9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],z=I$({},$);z.__v=$.__v+1,e_.vnode&&e_.vnode(z),M1(_.__P,z,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?G2($):j,!!(32&$.__u),N),z.__v=$.__v,z.__.__k[z.__i]=z,H3(Z,z,N),$.__e=$.__=null,z.__e!=j&&U3(z)}}function U3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),U3(_)}function _3(_){(!_.__d&&(_.__d=!0)&&i$.push(_)&&!i2.__r++||e4!=e_.debounceRendering)&&((e4=e_.debounceRendering)||L3)(i2)}function i2(){try{for(var _,$=1;i$.length;)i$.length>$&&i$.sort(B3),_=i$.shift(),$=i$.length,y9(_)}finally{i$.length=i2.__r=0}}function F3(_,$,j,Z,N,z,K,G,q,V,B){var Y,U,A,u,R,f,E,F=Z&&Z.__k||h2,I=$.length;for(q=w9(j,$,F,q,I),Y=0;Y<I;Y++)(A=j.__k[Y])!=null&&(U=A.__i!=-1&&F[A.__i]||c2,A.__i=Y,f=M1(_,A,U,N,z,K,G,q,V,B),u=A.__e,A.ref&&U.ref!=A.ref&&(U.ref&&C1(U.ref,null,A),B.push(A.ref,A.__c||u,A)),R==null&&u!=null&&(R=u),(E=!!(4&A.__u))||U.__k===A.__k?q=J3(A,q,_,E):typeof A.type=="function"&&f!==void 0?q=f:u&&(q=u.nextSibling),A.__u&=-7);return j.__e=R,q}function w9(_,$,j,Z,N){var z,K,G,q,V,B=j.length,Y=B,U=0;for(_.__k=Array(N),z=0;z<N;z++)(K=$[z])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[z]=m2(null,K,null,null,null):n2(K)?K=_.__k[z]=m2(d2,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[z]=m2(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[z]=K,q=z+U,K.__=_,K.__b=_.__b+1,G=null,(V=K.__i=A9(K,j,q,Y))!=-1&&(Y--,(G=j[V])&&(G.__u|=2)),G==null||G.__v==null?(V==-1&&(N>B?U--:N<B&&U++),typeof K.type!="function"&&(K.__u|=4)):V!=q&&(V==q-1?U--:V==q+1?U++:(V>q?U--:U++,K.__u|=4))):_.__k[z]=null;if(Y)for(z=0;z<B;z++)(G=j[z])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=G2(G)),E3(G,G));return Z}function J3(_,$,j,Z){var N,z;if(typeof _.type=="function"){for(N=_.__k,z=0;N&&z<N.length;z++)N[z]&&(N[z].__=_,$=J3(N[z],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=G2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function A9(_,$,j,Z){var N,z,K,G=_.key,q=_.type,V=$[j],B=V!=null&&(2&V.__u)==0;if(V===null&&G==null||B&&G==V.key&&q==V.type)return j;if(Z>(B?1:0)){for(N=j-1,z=j+1;N>=0||z<$.length;)if((V=$[K=N>=0?N--:z++])!=null&&(2&V.__u)==0&&G==V.key&&q==V.type)return K}return-1}function $3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||k9.test($)?j:j+"px"}function u2(_,$,j,Z,N){var z,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||$3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||$3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")z=$!=($=$.replace(O3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+z]=j,j?Z?j.u=Z.u:(j.u=A1,_.addEventListener($,z?k1:E1,z)):_.removeEventListener($,z?k1:E1,z);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function j3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=A1++;else if($.t<j.u)return;return j(e_.event?e_.event($):$)}}}function M1(_,$,j,Z,N,z,K,G,q,V){var B,Y,U,A,u,R,f,E,F,I,C,i,l,e,n,z_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(q=!!(32&j.__u),z=[G=$.__e=j.__e]),(B=e_.__b)&&B($);_:if(typeof z_=="function")try{if(E=$.props,F=z_.prototype&&z_.prototype.render,I=(B=z_.contextType)&&Z[B.__c],C=B?I?I.props.value:B.__:Z,j.__c?f=(Y=$.__c=j.__c).__=Y.__E:(F?$.__c=Y=new z_(E,C):($.__c=Y=new g2(E,C),Y.constructor=z_,Y.render=M9),I&&I.sub(Y),Y.state||(Y.state={}),Y.__n=Z,U=Y.__d=!0,Y.__h=[],Y._sb=[]),F&&Y.__s==null&&(Y.__s=Y.state),F&&z_.getDerivedStateFromProps!=null&&(Y.__s==Y.state&&(Y.__s=I$({},Y.__s)),I$(Y.__s,z_.getDerivedStateFromProps(E,Y.__s))),A=Y.props,u=Y.state,Y.__v=$,U)F&&z_.getDerivedStateFromProps==null&&Y.componentWillMount!=null&&Y.componentWillMount(),F&&Y.componentDidMount!=null&&Y.__h.push(Y.componentDidMount);else{if(F&&z_.getDerivedStateFromProps==null&&E!==A&&Y.componentWillReceiveProps!=null&&Y.componentWillReceiveProps(E,C),$.__v==j.__v||!Y.__e&&Y.shouldComponentUpdate!=null&&Y.shouldComponentUpdate(E,Y.__s,C)===!1){$.__v!=j.__v&&(Y.props=E,Y.state=Y.__s,Y.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(c){c&&(c.__=$)}),h2.push.apply(Y.__h,Y._sb),Y._sb=[],Y.__h.length&&K.push(Y);break _}Y.componentWillUpdate!=null&&Y.componentWillUpdate(E,Y.__s,C),F&&Y.componentDidUpdate!=null&&Y.__h.push(function(){Y.componentDidUpdate(A,u,R)})}if(Y.context=C,Y.props=E,Y.__P=_,Y.__e=!1,i=e_.__r,l=0,F)Y.state=Y.__s,Y.__d=!1,i&&i($),B=Y.render(Y.props,Y.state,Y.context),h2.push.apply(Y.__h,Y._sb),Y._sb=[];else do Y.__d=!1,i&&i($),B=Y.render(Y.props,Y.state,Y.context),Y.state=Y.__s;while(Y.__d&&++l<25);Y.state=Y.__s,Y.getChildContext!=null&&(Z=I$(I$({},Z),Y.getChildContext())),F&&!U&&Y.getSnapshotBeforeUpdate!=null&&(R=Y.getSnapshotBeforeUpdate(A,u)),e=B!=null&&B.type===d2&&B.key==null?D3(B.props.children):B,G=F3(_,n2(e)?e:[e],$,j,Z,N,z,K,G,q,V),Y.base=$.__e,$.__u&=-161,Y.__h.length&&K.push(Y),f&&(Y.__E=Y.__=null)}catch(c){if($.__v=null,q||z!=null)if(c.then){for($.__u|=q?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;z[z.indexOf(G)]=null,$.__e=G}else{for(n=z.length;n--;)P1(z[n]);y1($)}else $.__e=j.__e,$.__k=j.__k,c.then||y1($);e_.__e(c,$,j)}else z==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=P9(j.__e,$,j,Z,N,z,K,q,V);return(B=e_.diffed)&&B($),128&$.__u?void 0:G}function y1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(y1))}function H3(_,$,j){for(var Z=0;Z<j.length;Z++)C1(j[Z],j[++Z],j[++Z]);e_.__c&&e_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(z){z.call(N)})}catch(z){e_.__e(z,N.__v)}})}function D3(_){return typeof _!="object"||_==null||_.__b>0?_:n2(_)?_.map(D3):I$({},_)}function P9(_,$,j,Z,N,z,K,G,q){var V,B,Y,U,A,u,R,f=j.props||c2,E=$.props,F=$.type;if(F=="svg"?N="http://www.w3.org/2000/svg":F=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),z!=null){for(V=0;V<z.length;V++)if((A=z[V])&&"setAttribute"in A==!!F&&(F?A.localName==F:A.nodeType==3)){_=A,z[V]=null;break}}if(_==null){if(F==null)return document.createTextNode(E);_=document.createElementNS(N,F,E.is&&E),G&&(e_.__m&&e_.__m($,z),G=!1),z=null}if(F==null)f===E||G&&_.data==E||(_.data=E);else{if(z=z&&l2.call(_.childNodes),!G&&z!=null)for(f={},V=0;V<_.attributes.length;V++)f[(A=_.attributes[V]).name]=A.value;for(V in f)A=f[V],V=="dangerouslySetInnerHTML"?Y=A:V=="children"||(V in E)||V=="value"&&("defaultValue"in E)||V=="checked"&&("defaultChecked"in E)||u2(_,V,null,A,N);for(V in E)A=E[V],V=="children"?U=A:V=="dangerouslySetInnerHTML"?B=A:V=="value"?u=A:V=="checked"?R=A:G&&typeof A!="function"||f[V]===A||u2(_,V,A,f[V],N);if(B)G||Y&&(B.__html==Y.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(Y&&(_.innerHTML=""),F3($.type=="template"?_.content:_,n2(U)?U:[U],$,j,Z,F=="foreignObject"?"http://www.w3.org/1999/xhtml":N,z,K,z?z[0]:j.__k&&G2(j,0),G,q),z!=null)for(V=z.length;V--;)P1(z[V]);G||(V="value",F=="progress"&&u==null?_.removeAttribute("value"):u!=null&&(u!==_[V]||F=="progress"&&!u||F=="option"&&u!=f[V])&&u2(_,V,u,f[V],N),V="checked",R!=null&&R!=_[V]&&u2(_,V,R,f[V],N))}return _}function C1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){e_.__e(N,j)}}function E3(_,$,j){var Z,N;if(e_.unmount&&e_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||C1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(z){e_.__e(z,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&E3(Z[N],$,j||typeof _.type!="function");j||P1(_.__e),_.__c=_.__=_.__e=void 0}function M9(_,$,j){return this.constructor(_,j)}function k3(_,$,j){var Z,N,z,K;$==document&&($=document.documentElement),e_.__&&e_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,z=[],K=[],M1($,_=(!Z&&j||$).__k=Q3(d2,null,[_]),N||c2,c2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?l2.call($.childNodes):null,z,!Z&&j?j:N?N.__e:$.firstChild,Z,K),H3(z,_,K)}l2=h2.slice,e_={__e:function(_,$,j,Z){for(var N,z,K;$=$.__;)if((N=$.__c)&&!N.__)try{if((z=N.constructor)&&z.getDerivedStateFromError!=null&&(N.setState(z.getDerivedStateFromError(_)),K=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),K=N.__d),K)return N.__E=N}catch(G){_=G}throw _}},q3=0,D9=function(_){return _!=null&&_.constructor===void 0},g2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=I$({},this.state),typeof _=="function"&&(_=_(I$({},j),this.props)),_&&I$(j,_),_!=null&&this.__v&&($&&this._sb.push($),_3(this))},g2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),_3(this))},g2.prototype.render=d2,i$=[],L3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B3=function(_,$){return _.__v.__b-$.__v.__b},i2.__r=0,O3=/(PointerCapture)$|Capture$/i,A1=0,E1=j3(!1),k1=j3(!0),E9=0;var J2,L0,D1,Z3,H2=0,y3=[],q0=e_,N3=q0.__b,z3=q0.__r,K3=q0.diffed,Y3=q0.__c,W3=q0.unmount,G3=q0.__;function b1(_,$){q0.__h&&q0.__h(L0,_,H2||$),H2=0;var j=L0.__H||(L0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return H2=1,C9(A3,_)}function C9(_,$,j){var Z=b1(J2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):A3(void 0,$),function(G){var q=Z.__N?Z.__N[0]:Z.__[0],V=Z.t(q,G);q!==V&&(Z.__N=[V,Z.__[1]],Z.__c.setState({}))}],Z.__c=L0,!L0.__f)){var N=function(G,q,V){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(U){return U.__c});if(B.every(function(U){return!U.__N}))return!z||z.call(this,G,q,V);var Y=Z.__c.props!==G;return B.some(function(U){if(U.__N){var A=U.__[0];U.__=U.__N,U.__N=void 0,A!==U.__[0]&&(Y=!0)}}),z&&z.call(this,G,q,V)||Y};L0.__f=!0;var{shouldComponentUpdate:z,componentWillUpdate:K}=L0;L0.componentWillUpdate=function(G,q,V){if(this.__e){var B=z;z=void 0,N(G,q,V),z=B}K&&K.call(this,G,q,V)},L0.shouldComponentUpdate=N}return Z.__N||Z.__}function v(_,$){var j=b1(J2++,3);!q0.__s&&w3(j.__H,$)&&(j.__=_,j.u=$,L0.__H.__h.push(j))}function D(_){return H2=5,a_(function(){return{current:_}},[])}function a_(_,$){var j=b1(J2++,7);return w3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function k(_,$){return H2=8,a_(function(){return _},$)}function b9(){for(var _;_=y3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(p2),$.__h.some(w1),$.__h=[]}catch(j){$.__h=[],q0.__e(j,_.__v)}}}q0.__b=function(_){L0=null,N3&&N3(_)},q0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),G3&&G3(_,$)},q0.__r=function(_){z3&&z3(_),J2=0;var $=(L0=_.__c).__H;$&&(D1===L0?($.__h=[],L0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(p2),$.__h.some(w1),$.__h=[],J2=0)),D1=L0},q0.diffed=function(_){K3&&K3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(y3.push($)!==1&&Z3===q0.requestAnimationFrame||((Z3=q0.requestAnimationFrame)||I9)(b9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),D1=L0=null},q0.__c=function(_,$){$.some(function(j){try{j.__h.some(p2),j.__h=j.__h.filter(function(Z){return!Z.__||w1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],q0.__e(Z,j.__v)}}),Y3&&Y3(_,$)},q0.unmount=function(_){W3&&W3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{p2(Z)}catch(N){$=N}}),j.__H=void 0,$&&q0.__e($,j.__v))};var V3=typeof requestAnimationFrame=="function";function I9(_){var $,j=function(){clearTimeout(Z),V3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);V3&&($=requestAnimationFrame(j))}function p2(_){var $=L0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),L0=$}function w1(_){var $=L0;_.__c=_.__(),L0=$}function w3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function A3(_,$){return typeof $=="function"?$(_):$}var P3=function(_,$,j,Z){var N;$[0]=0;for(var z=1;z<$.length;z++){var K=$[z++],G=$[z]?($[0]|=K?1:2,j[$[z++]]):$[++z];K===3?Z[0]=G:K===4?Z[1]=Object.assign(Z[1]||{},G):K===5?(Z[1]=Z[1]||{})[$[++z]]=G:K===6?Z[1][$[++z]]+=G+"":K?(N=_.apply(G,P3(_,G,j,["",null])),Z.push(N),G[0]?$[0]|=2:($[z-2]=0,$[z]=N)):Z.push(G)}return Z},X3=new Map;function S9(_){var $=X3.get(this);return $||($=new Map,X3.set(this,$)),($=P3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,z=1,K="",G="",q=[0],V=function(U){z===1&&(U||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?q.push(0,U,K):z===3&&(U||K)?(q.push(3,U,K),z=2):z===2&&K==="..."&&U?q.push(4,U,0):z===2&&K&&!U?q.push(5,0,!0,K):z>=5&&((K||!U&&z===5)&&(q.push(z,0,K,N),z=6),U&&(q.push(z,U,0,N),z=6)),K=""},B=0;B<j.length;B++){B&&(z===1&&V(),V(B));for(var Y=0;Y<j[B].length;Y++)Z=j[B][Y],z===1?Z==="<"?(V(),q=[q],z=3):K+=Z:z===4?K==="--"&&Z===">"?(z=1,K=""):K=Z+K[0]:G?Z===G?G="":K+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(V(),z=1):z&&(Z==="="?(z=5,N=K,K=""):Z==="/"&&(z<5||j[B][Y+1]===">")?(V(),z===3&&(q=q[0]),z=q,(q=q[0]).push(2,0,z),z=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(V(),z=2):K+=Z),z===3&&K==="!--"&&(z=4,q=q[0])}return V(),q}(_)),$),arguments,[])).length>1?$:$[0]}var O=S9.bind(Q3);var Y$={};J9(Y$,{uploadWorkspaceFile:()=>r2,uploadMedia:()=>u1,updateWorkspaceFile:()=>d9,submitAdaptiveCardAction:()=>m1,streamSidePrompt:()=>i9,steerAgentQueueItem:()=>h9,setWorkspaceVisibility:()=>y2,setAgentThoughtVisibility:()=>c1,sendPeerAgentMessage:()=>m9,sendAgentMessage:()=>V2,searchPosts:()=>S1,respondToAgentRequest:()=>o2,renameWorkspaceFile:()=>s1,renameChatBranch:()=>v9,removeAgentQueueItem:()=>c9,pruneChatBranch:()=>u9,moveWorkspaceEntry:()=>o1,getWorkspaceTree:()=>k2,getWorkspaceRawUrl:()=>a2,getWorkspaceFile:()=>l1,getWorkspaceDownloadUrl:()=>t2,getWorkspaceBranch:()=>n9,getTimeline:()=>D2,getThumbnailUrl:()=>h1,getThread:()=>x1,getPostsByHashtag:()=>I1,getMediaUrl:()=>K$,getMediaText:()=>i1,getMediaInfo:()=>X2,getMediaBlob:()=>l9,getChatBranches:()=>R9,getAgents:()=>R1,getAgentThought:()=>p1,getAgentStatus:()=>v1,getAgentQueueState:()=>p9,getAgentModels:()=>E2,getAgentContext:()=>g9,getActiveChatAgents:()=>f1,forkChatBranch:()=>s2,deleteWorkspaceFile:()=>r1,deletePost:()=>T1,createWorkspaceFile:()=>d1,createReply:()=>f9,createPost:()=>T9,attachWorkspaceFile:()=>n1,addToWhitelist:()=>g1,SSEClient:()=>e2});async function c_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function M3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let z of $)if(z.startsWith("event:"))j=z.slice(6).trim()||"message";else if(z.startsWith("data:"))Z.push(z.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function x9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:K,done:G}=await j.read();if(G)break;N+=Z.decode(K,{stream:!0});let q=N.split(`

`);N=q.pop()||"";for(let V of q){let B=M3(V);if(B)$(B.event,B.data)}}N+=Z.decode();let z=M3(N);if(z)$(z.event,z.data)}async function D2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return c_(Z)}async function I1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return c_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function S1(_,$=50,j=0,Z=null,N="current",z=null){let K=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=N?`&scope=${encodeURIComponent(N)}`:"",q=z?`&root_chat_jid=${encodeURIComponent(z)}`:"";return c_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${G}${q}`)}async function x1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return c_(`/thread/${_}${j}`)}async function T9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return c_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function f9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return c_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function T1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return c_(N,{method:"DELETE"})}async function V2(_,$,j=null,Z=[],N=null,z=null){let K=z?`?chat_jid=${encodeURIComponent(z)}`:"";return c_(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function f1(){return c_("/agent/active-chats")}async function R9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/branches${$}`)}async function s2(_,$={}){return c_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function v9(_,$={}){return c_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function u9(_){return c_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function m9(_,$,j,Z="auto",N={}){let z={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return c_("/agent/peer-message",{method:"POST",body:JSON.stringify(z)})}async function R1(){return c_("/agent/roster")}async function v1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/status${$}`)}async function g9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/context${$}`)}async function p9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/queue-state${$}`)}async function c9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function h9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function E2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/models${$}`)}async function u1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function o2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function m1(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function i9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let z=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(z.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await x9(j,(z,K)=>{if($.onEvent?.(z,K),z==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(z==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(z==="side_prompt_done")Z=K;else if(z==="side_prompt_error")N=K}),N){let z=Error(N?.error||"Side prompt failed");throw z.payload=N,z}return Z}async function g1(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function p1(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return c_(j)}async function c1(_,$,j){return c_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function K$(_){return`/media/${_}`}function h1(_){return`/media/${_}/thumbnail`}async function X2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function i1(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function l9(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function k2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return c_(Z)}async function n9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return c_($)}async function l1(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return c_(N)}async function d9(_,$){return c_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function n1(_){return c_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function r2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let z=N.toString(),K=z?`/workspace/upload?${z}`:"/workspace/upload",G=await fetch(""+K,{method:"POST",body:Z});if(!G.ok){let q=await G.json().catch(()=>({error:"Upload failed"})),V=Error(q.error||`HTTP ${G.status}`);throw V.status=G.status,V.code=q.code,V}return G.json()}async function d1(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),z=Error(N.error||`HTTP ${Z.status}`);throw z.status=Z.status,z.code=N.code,z}return Z.json()}async function s1(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function o1(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function r1(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return c_($,{method:"DELETE"})}async function y2(_,$=!1){return c_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function a2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function t2(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class e2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function W$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function N0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function q2(_,$=!1){let j=W$(_);if(j===null)return $;return j==="true"}function L2(_,$=null){let j=W$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function _1(_){return String(_||"").trim().toLowerCase()}function a1(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return _1($[1]||"")}function C3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=_1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function b3(_,$,j={}){let Z=a1($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return C3(_).filter((z)=>{if(N&&z?.chat_jid===N)return!1;return _1(z?.agent_name).startsWith(Z)})}function t1(_){let $=_1(_);return $?`@${$} `:""}function I3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return C3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function S3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let z=460+N*68+(j?40:0);return Z>=z}function Q$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:z="Remove",icon:K="file"}){let G=`${_}-file-pill`,q=`${_}-file-name`,V=`${_}-file-remove`,B=K==="message"?O`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:O`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return O`
    <span class=${G} title=${j||$} onClick=${N}>
      ${B}
      <span class=${q}>${$}</span>
      ${Z&&O`
        <button
          class=${V}
          onClick=${(Y)=>{Y.preventDefault(),Y.stopPropagation(),Z()}}
          title=${z}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var s9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function o9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${x3(j)} / ${x3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,z=7,K=2*Math.PI*7,G=$/100*K,q=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return O`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${q}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function x3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function T3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:z,onEnterSearch:K,onExitSearch:G,fileRefs:q=[],onRemoveFileRef:V,onClearFileRefs:B,messageRefs:Y=[],onRemoveMessageRef:U,onClearMessageRefs:A,activeModel:u=null,modelUsage:R=null,thinkingLevel:f=null,supportsThinking:E=!1,contextUsage:F=null,notificationsEnabled:I=!1,notificationPermission:C="default",onToggleNotifications:i,onModelChange:l,onModelStateChange:e,activeEditorPath:n=null,onAttachEditorFile:z_,onOpenFilePill:c,followupQueueItems:q_=[],onInjectQueuedFollowup:n_,onRemoveQueuedFollowup:__,onSubmitIntercept:r,onMessageResponse:N_,onPopOutChat:j_,isAgentActive:O_=!1,activeChatAgents:d_=[],currentChatJid:Q_="web:default",connectionStatus:C_="connected",onSetFileRefs:U_,onSetMessageRefs:J_,onSubmitError:R_}){let[G_,b_]=T(""),[v_,D0]=T(""),[Y_,$_]=T([]),[M_,V_]=T(!1),[E_,A_]=T([]),[$0,h_]=T(0),[j0,y_]=T(!1),[I_,S_]=T([]),[z0,f_]=T(0),[A0,W0]=T(!1),[G0,e0]=T(!1),[K0,x_]=T(!1),[Y0,s_]=T([]),[F0,P0]=T(!1),[o_,E0]=T(0),[M0,F_]=T(null),u_=D(null),n0=D(null),V$=D(null),S=D(null),s=D(null),K_=D(null),k_=D(0),m_=200,T_=(Q)=>{let b=new Set,x=[];for(let d of Q||[]){if(typeof d!=="string")continue;let X_=d.trim();if(!X_||b.has(X_))continue;b.add(X_),x.push(X_)}return x},m0=()=>{let Q=W$("piclaw_compose_history");if(!Q)return[];try{let b=JSON.parse(Q);if(!Array.isArray(b))return[];return T_(b)}catch{return[]}},T$=(Q)=>{N0("piclaw_compose_history",JSON.stringify(Q))},_$=D(m0()),X$=D(-1),B0=D(""),f$=G_.trim()||Y_.length>0||q.length>0||Y.length>0,O0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),k0=typeof window<"u"&&typeof Notification<"u",w$=typeof window<"u"?Boolean(window.isSecureContext):!1,x0=k0&&w$&&C!=="denied",Z2=C==="granted"&&I,g0=Z2?"Disable notifications":"Enable notifications",n$=Y_.length>0||q.length>0||Y.length>0,Z0=C_==="disconnected"?"Reconnecting":String(C_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(Q)=>Q.toUpperCase()),L$=C_==="disconnected"?"Reconnecting":`Connection: ${Z0}`,d0=I3(d_,{currentChatJid:Q_,limit:4}),C0=d0.length>0,b0=!j&&S3({footerWidth:o_,visibleAgentCount:d0.length,hasContextIndicator:Boolean(F&&F.percent!=null)}),T0=u||"",B$=E&&f?` (${f})`:"",A$=B$.trim()?`${f}`:"",R$=typeof R?.hint_short==="string"?R.hint_short.trim():"",v$=[A$||null,R$||null].filter(Boolean).join(" • "),J0=[T0?`Current model: ${T0}${B$}`:null,R?.plan?`Plan: ${R.plan}`:null,R$||null,R?.primary?.reset_description||null,R?.secondary?.reset_description||null].filter(Boolean),P$=G0?"Switching model…":J0.join(" • ")||`Current model: ${T0}${B$} (tap to open model picker)`,p0=(Q)=>{if(!Q||typeof Q!=="object")return;let b=Q.model??Q.current;if(typeof e==="function")e({model:b??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(b&&typeof l==="function")l(b)},Q0=(Q)=>{let b=Q||u_.current;if(!b)return;b.style.height="auto",b.style.height=`${b.scrollHeight}px`,b.style.overflowY="hidden"},c0=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let x=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let g_=0;g_<x.length;g_+=1)if(x[g_].trim()==="Files:"&&x[g_+1]&&/^\s*-\s+/.test(x[g_+1])){d=g_;break}if(d===-1)return{content:Q,fileRefs:[]};let X_=[],w_=d+1;for(;w_<x.length;w_+=1){let g_=x[w_];if(/^\s*-\s+/.test(g_))X_.push(g_.replace(/^\s*-\s+/,"").trim());else if(!g_.trim())break;else break}if(X_.length===0)return{content:Q,fileRefs:[]};let P_=x.slice(0,d),W_=x.slice(w_);return{content:[...P_,...W_].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:X_}},N2=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let x=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let g_=0;g_<x.length;g_+=1)if(x[g_].trim()==="Referenced messages:"&&x[g_+1]&&/^\s*-\s+/.test(x[g_+1])){d=g_;break}if(d===-1)return{content:Q,messageRefs:[]};let X_=[],w_=d+1;for(;w_<x.length;w_+=1){let g_=x[w_];if(/^\s*-\s+/.test(g_)){let h0=g_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(h0)X_.push(h0[1])}else if(!g_.trim())break;else break}if(X_.length===0)return{content:Q,messageRefs:[]};let P_=x.slice(0,d),W_=x.slice(w_);return{content:[...P_,...W_].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:X_}},f0=(Q)=>{let b=c0(Q||""),x=N2(b.content||"");return{text:x.content||"",fileRefs:b.fileRefs,messageRefs:x.messageRefs}},z2=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){y_(!1),A_([]);return}let b=Q.toLowerCase().split(" ")[0];if(b.length<1){y_(!1),A_([]);return}let x=s9.filter((d)=>d.name.startsWith(b)||d.name.replace(/-/g,"").startsWith(b.replace(/-/g,"")));if(x.length>0&&!(x.length===1&&x[0].name===b))W0(!1),S_([]),A_(x),h_(0),y_(!0);else y_(!1),A_([])},F$=(Q)=>{let b=G_,x=b.indexOf(" "),d=x>=0?b.slice(x):"",X_=Q.name+d;b_(X_),y_(!1),A_([]),requestAnimationFrame(()=>{let w_=u_.current;if(!w_)return;let P_=X_.length;w_.selectionStart=P_,w_.selectionEnd=P_,w_.focus()})},u$=(Q)=>{if(a1(Q)==null){W0(!1),S_([]);return}let b=b3(d_,Q,{currentChatJid:Q_});if(b.length>0&&!(b.length===1&&t1(b[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))y_(!1),A_([]),S_(b),f_(0),W0(!0);else W0(!1),S_([])},m$=(Q)=>{let b=t1(Q?.agent_name);if(!b)return;b_(b),W0(!1),S_([]),requestAnimationFrame(()=>{let x=u_.current;if(!x)return;let d=b.length;x.selectionStart=d,x.selectionEnd=d,x.focus()})},M$=(Q)=>{if(j)D0(Q);else b_(Q),z2(Q),u$(Q);requestAnimationFrame(()=>Q0())},i_=(Q)=>{let b=j?v_:G_,x=b&&!b.endsWith(`
`)?`
`:"",d=`${b}${x}${Q}`.trimStart();M$(d)},I0=(Q)=>{let b=Q?.command?.model_label;if(b)return b;let x=Q?.command?.message;if(typeof x==="string"){let d=x.match(/•\s+([^\n]+?)\s+\(current\)/);if(d?.[1])return d[1].trim()}return null},R0=async(Q)=>{if(j||G0)return;e0(!0);try{let b=await V2("default",Q,null,[],null,Q_),x=I0(b);p0({model:x??u??null,thinking_level:b?.command?.thinking_level,supports_thinking:b?.command?.supports_thinking});try{let d=await E2(Q_);if(d)p0(d)}catch{}return _?.(),!0}catch(b){return console.error("Failed to switch model:",b),alert("Failed to switch model: "+b.message),!1}finally{e0(!1)}},d$=async()=>{await R0("/cycle-model")},s$=async(Q)=>{if(!Q||G0)return;if(await R0(`/model ${Q}`))x_(!1)},o$=(Q)=>{Q.preventDefault(),Q.stopPropagation(),x_((b)=>!b)},J$=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return O_?"queue":null},y0=async(Q,b,x={})=>{let{includeMedia:d=!0,includeFileRefs:X_=!0,includeMessageRefs:w_=!0,clearAfterSubmit:P_=!0,recordHistory:W_=!0}=x||{},Z$=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:G_,g_=typeof Z$==="string"?Z$:"";if(!g_.trim()&&(d?Y_.length===0:!0)&&(X_?q.length===0:!0)&&(w_?Y.length===0:!0))return;y_(!1),A_([]),W0(!1),S_([]),F_(null);let h0=d?[...Y_]:[],E$=X_?[...q]:[],c$=w_?[...Y]:[],k$=g_.trim();if(W_&&k$){let b$=_$.current,r_=T_(b$.filter((S0)=>S0!==k$));if(r_.push(k$),r_.length>200)r_.splice(0,r_.length-200);_$.current=r_,T$(r_),X$.current=-1,B0.current=""}let t$=()=>{if(d)$_([...h0]);if(X_)U_?.(E$);if(w_)J_?.(c$);b_(k$),requestAnimationFrame(()=>Q0())};if(P_)b_(""),$_([]),B?.(),A?.();(async()=>{try{if(await r?.({content:k$,submitMode:b,fileRefs:E$,messageRefs:c$,mediaFiles:h0})){_?.();return}let r_=[];for(let v0 of h0){let O$=await u1(v0);r_.push(O$.id)}let S0=E$.length?`Files:
${E$.map((v0)=>`- ${v0}`).join(`
`)}`:"",h$=c$.length?`Referenced messages:
${c$.map((v0)=>`- message:${v0}`).join(`
`)}`:"",K2=r_.length?`Images:
${r_.map((v0,O$)=>{let r0=h0[O$]?.name||`attachment-${O$+1}`;return`- attachment:${v0} (${r0})`}).join(`
`)}`:"",o0=[k$,S0,h$,K2].filter(Boolean).join(`

`),i0=await V2("default",o0,null,r_,J$(b),Q_);if(N_?.(i0),i0?.command){p0({model:i0.command.model_label??u??null,thinking_level:i0.command.thinking_level,supports_thinking:i0.command.supports_thinking});try{let v0=await E2(Q_);if(v0)p0(v0)}catch{}}_?.()}catch(b$){if(P_)t$();let r_=b$?.message||"Failed to send message.";F_(r_),R_?.(r_),console.error("Failed to post:",b$)}})()},V0=(Q)=>{n_?.(Q)},U0=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),D0(""),G?.();return}if(A0&&I_.length>0){let b=u_.current?.value??(j?v_:G_);if(!String(b||"").match(/^@([a-zA-Z0-9_-]*)$/))W0(!1),S_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),f_((x)=>(x+1)%I_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),f_((x)=>(x-1+I_.length)%I_.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),m$(I_[z0]);return}if(Q.key==="Escape"){Q.preventDefault(),W0(!1),S_([]);return}}}if(j0&&E_.length>0){let b=u_.current?.value??(j?v_:G_);if(!String(b||"").startsWith("/"))y_(!1),A_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),h_((x)=>(x+1)%E_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),h_((x)=>(x-1+E_.length)%E_.length);return}if(Q.key==="Tab"){Q.preventDefault(),F$(E_[$0]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(u_.current?.value??(j?v_:G_)).includes(" ")){Q.preventDefault();let X_=E_[$0];y_(!1),A_([]),y0(X_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),y_(!1),A_([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let b=u_.current;if(!b)return;let x=b.value||"",d=b.selectionStart===0&&b.selectionEnd===0,X_=b.selectionStart===x.length&&b.selectionEnd===x.length;if(Q.key==="ArrowUp"&&d||Q.key==="ArrowDown"&&X_){let w_=_$.current;if(!w_.length)return;Q.preventDefault();let P_=X$.current;if(Q.key==="ArrowUp"){if(P_===-1)B0.current=x,P_=w_.length-1;else if(P_>0)P_-=1;X$.current=P_,M$(w_[P_]||"")}else{if(P_===-1)return;if(P_<w_.length-1)P_+=1,X$.current=P_,M$(w_[P_]||"");else X$.current=-1,M$(B0.current||""),B0.current=""}requestAnimationFrame(()=>{let W_=u_.current;if(!W_)return;let Z$=W_.value.length;W_.selectionStart=Z$,W_.selectionEnd=Z$});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let b=u_.current?.value??(j?v_:G_);if(j){if(b.trim())N?.(b.trim(),Z)}else y0(b,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let b=u_.current?.value??(j?v_:G_);if(j){if(b.trim())N?.(b.trim(),Z)}else y0(b)}},s0=(Q)=>{let b=Array.from(Q||[]).filter((x)=>x&&x.type&&x.type.startsWith("image/"));if(!b.length)return;$_((x)=>[...x,...b]),F_(null)},C$=(Q)=>{s0(Q.target.files),Q.target.value=""},r$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),k_.current+=1,V_(!0)},H$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),k_.current=Math.max(0,k_.current-1),k_.current===0)V_(!1)},$$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";V_(!0)},g$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),k_.current=0,V_(!1),s0(Q.dataTransfer?.files||[])},j$=(Q)=>{if(j)return;let b=Q.clipboardData?.items;if(!b||!b.length)return;let x=[];for(let d of b){if(d.kind!=="file")continue;let X_=d.getAsFile?.();if(X_)x.push(X_)}if(x.length>0)Q.preventDefault(),s0(x)},w0=(Q)=>{$_((b)=>b.filter((x,d)=>d!==Q))},D$=()=>{F_(null),$_([]),B?.(),A?.()},a$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:b,longitude:x,accuracy:d}=Q.coords,X_=`${b.toFixed(5)}, ${x.toFixed(5)}`,w_=Number.isFinite(d)?` ±${Math.round(d)}m`:"",P_=`https://maps.google.com/?q=${b},${x}`,W_=`Location: ${X_}${w_} ${P_}`;i_(W_)},(Q)=>{let b=Q?.message||"Unable to retrieve location.";alert(`Location error: ${b}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!K0)return;P0(!0),E2(Q_).then((Q)=>{let b=Array.isArray(Q?.models)?Q.models.filter((x)=>typeof x==="string"&&x.trim().length>0):[];b.sort((x,d)=>x.localeCompare(d,void 0,{sensitivity:"base"})),s_(b),p0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),s_([])}).finally(()=>{P0(!1)})},[K0,u]),v(()=>{if(j)x_(!1),y_(!1),A_([]),W0(!1),S_([])},[j]),v(()=>{if(!K0)return;let Q=(b)=>{let x=S.current,d=s.current,X_=b.target;if(x&&x.contains(X_))return;if(d&&d.contains(X_))return;x_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[K0]),v(()=>{let Q=()=>{let w_=K_.current?.clientWidth||0;E0((P_)=>P_===w_?P_:w_)};Q();let b=K_.current,x=0,d=()=>{if(x)cancelAnimationFrame(x);x=requestAnimationFrame(()=>{x=0,Q()})},X_=null;if(b&&typeof ResizeObserver<"u")X_=new ResizeObserver(()=>d()),X_.observe(b);if(typeof window<"u")window.addEventListener("resize",d);return()=>{if(x)cancelAnimationFrame(x);if(X_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",d)}},[j,u,d0.length,F?.percent]);let p$=(Q)=>{let b=Q.target.value;F_(null),Q0(Q.target),M$(b)};return v(()=>{requestAnimationFrame(()=>Q0())},[G_,v_,j]),v(()=>{if(j)return;u$(G_)},[d_,Q_,G_,j]),O`
        <div class="compose-box">
            ${!j&&q_.length>0&&O`
                <div class="compose-queue-stack">
                    ${q_.map((Q)=>{let b=typeof Q?.content==="string"?Q.content:"",x=f0(b);if(!x.text.trim()&&x.fileRefs.length===0&&x.messageRefs.length===0)return null;return O`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${b}>
                                    ${x.text.trim()&&O`
                                        <div class="compose-queue-stack-text">${x.text}</div>
                                    `}
                                    ${(x.messageRefs.length>0||x.fileRefs.length>0)&&O`
                                        <div class="compose-queue-stack-refs">
                                            ${x.messageRefs.map((d)=>O`
                                                <${Q$}
                                                    key=${"queue-msg-"+d}
                                                    prefix="compose"
                                                    label=${"msg:"+d}
                                                    title=${"Message reference: "+d}
                                                    icon="message"
                                                />
                                            `)}
                                            ${x.fileRefs.map((d)=>{let X_=d.split("/").pop()||d;return O`
                                                    <${Q$}
                                                        key=${"queue-file-"+d}
                                                        prefix="compose"
                                                        label=${X_}
                                                        title=${d}
                                                        onClick=${()=>c?.(d)}
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
                                        onClick=${()=>V0(Q)}
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
                                        onClick=${()=>__?.(Q)}
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
                class=${`compose-input-wrapper${M_?" drag-active":""}`}
                onDragEnter=${r$}
                onDragOver=${$$}
                onDragLeave=${H$}
                onDrop=${g$}
            >
                <div class="compose-input-main">
                    ${M0&&!n$&&O`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${M0}</div>
                    `}
                    ${n$&&O`
                        <div class="compose-file-refs">
                            ${M0&&O`
                                <div class="compose-submit-error" role="status" aria-live="polite">${M0}</div>
                            `}
                            ${Y.map((Q)=>{return O`
                                    <${Q$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(Q)}
                                    />
                                `})}
                            ${q.map((Q)=>{let b=Q.split("/").pop()||Q;return O`
                                    <${Q$}
                                        prefix="compose"
                                        label=${b}
                                        title=${Q}
                                        onClick=${()=>c?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>V?.(Q)}
                                    />
                                `})}
                            ${Y_.map((Q,b)=>{let x=Q?.name||`attachment-${b+1}`;return O`
                                    <${Q$}
                                        key=${x+b}
                                        prefix="compose"
                                        label=${x}
                                        title=${x}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>w0(b)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${D$}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof j_==="function"&&O`
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
                        ref=${u_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?v_:G_}
                        onInput=${p$}
                        onKeyDown=${U0}
                        onPaste=${j$}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${A0&&I_.length>0&&O`
                        <div class="slash-autocomplete" ref=${V$}>
                            ${I_.map((Q,b)=>O`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${b===z0?" active":""}`}
                                    onMouseDown=${(x)=>{x.preventDefault(),m$(Q)}}
                                    onMouseEnter=${()=>f_(b)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.display_name||Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${j0&&E_.length>0&&O`
                        <div class="slash-autocomplete" ref=${n0}>
                            ${E_.map((Q,b)=>O`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${b===$0?" active":""}`}
                                    onMouseDown=${(x)=>{x.preventDefault(),F$(Q)}}
                                    onMouseEnter=${()=>h_(b)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${K0&&!j&&O`
                        <div class="compose-model-popup" ref=${S}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${F0&&O`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!F0&&Y0.length===0&&O`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!F0&&Y0.map((Q)=>O`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${u===Q?" active":""}`}
                                        onClick=${()=>{s$(Q)}}
                                        disabled=${G0}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{d$()}}
                                    disabled=${G0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${K_}>
                    ${!j&&u&&O`
                    <div class="compose-meta-row">
                        ${!j&&u&&O`
                            <div class="compose-model-meta">
                                <button
                                    ref=${s}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${P$}
                                    aria-label="Open model picker"
                                    onClick=${o$}
                                    disabled=${G0}
                                >
                                    ${G0?"Switching…":T0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!G0&&v$&&O`
                                        <span class="compose-model-usage-hint" title=${P$}>
                                            ${v$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${b0&&O`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${d0.map((Q)=>O`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${Q.is_active?" active":""}`}
                                    onClick=${()=>m$(Q)}
                                    title=${`${Q.display_name||Q.chat_jid||"Active agent"} — insert @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&F&&F.percent!=null&&O`
                        <${o9} usage=${F} />
                    `}
                    ${j&&O`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(Q)=>z?.(Q.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?G:K}
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
                    ${O0&&!j&&O`
                        <button
                            class="icon-btn location-btn"
                            onClick=${a$}
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
                    ${x0&&!j&&O`
                        <button
                            class=${`icon-btn notification-btn${Z2?" active":""}`}
                            onClick=${i}
                            title=${g0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&O`
                        ${n&&z_&&O`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${z_}
                                title=${`Attach open file: ${n}`}
                                type="button"
                                disabled=${q.includes(n)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${C$} />
                        </label>
                    `}
                    ${(C_!=="connected"||!j)&&O`
                        <div class="compose-send-stack">
                            ${C_!=="connected"&&O`
                                <span class="compose-connection-status connection-status ${C_}" title=${L$}>
                                    ${Z0}
                                </span>
                            `}
                            ${!j&&O`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{y0()}}
                                    disabled=${!f$}
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
    `}var v3="piclaw_theme",$4="piclaw_tint",A2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},u3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},f3={default:{label:"Default",mode:"auto",light:A2,dark:u3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},r9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],e$={theme:"default",tint:null},m3="light",e1=!1;function j4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function O2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((z)=>z+z).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function a9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let z=parseInt(N[1],10),K=parseInt(N[2],10),G=parseInt(N[3],10);if(![z,K,G].every((V)=>Number.isFinite(V)))return null;let q=`#${[z,K,G].map((V)=>V.toString(16).padStart(2,"0")).join("")}`;return{r:z,g:K,b:G,hex:q}}function g3(_){return O2(_)||a9(_)}function w2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),z=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${z})`}function _4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function t9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),z=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*z+0.0722*K}function e9(_){return t9(_)>0.4?"#000000":"#ffffff"}function p3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Z4(_){return f3[_]||f3.default}function _7(_){return _.mode==="auto"?p3():_.mode}function c3(_,$){let j=Z4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||A2}function h3(_,$,j){let Z=g3($);if(!Z)return _;let N=O2(_.bgPrimary),z=O2(_.bgSecondary),K=O2(_.bgHover),G=O2(_.borderColor);if(!N||!z||!K||!G)return _;let V=O2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:w2(N,Z,0.08),bgSecondary:w2(z,Z,0.12),bgHover:w2(K,Z,0.16),borderColor:w2(G,Z,0.08),accent:Z.hex,accentHover:V?w2(Z,V,0.18):Z.hex}}function $7(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=g3(Z),z=N?_4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=N?_4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=N?_4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",q=N?e9(N):$==="dark"?"#000000":"#ffffff",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":K,"--accent-soft-strong":G,"--accent-contrast-text":q,"--danger-color":_.danger||A2.danger,"--success-color":_.success||A2.success,"--search-highlight-color":z||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([B,Y])=>{if(Y)j.style.setProperty(B,Y)})}function j7(){if(typeof document>"u")return;let _=document.documentElement;r9.forEach(($)=>_.style.removeProperty($))}function B2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function R3(_){let $=j4(e$?.theme||"default"),j=e$?.tint?String(e$.tint).trim():null,Z=c3($,_);if($==="default"&&j)Z=h3(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?u3.bgPrimary:A2.bgPrimary}function Z7(_,$){if(typeof document>"u")return;let j=B2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=B2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",R3("light"));let N=B2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",R3("dark"));let z=B2("msapplication-TileColor");if(z&&_)z.setAttribute("content",_);let K=B2("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let G=B2("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function N7(){if(typeof window>"u")return;let _={...e$,mode:m3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function N4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=j4(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=Z4(j),z=_7(N),K=c3(j,z);e$={theme:j,tint:Z},m3=z;let G=document.documentElement;G.dataset.theme=z,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=z;let q=K;if(j==="default"&&Z)q=h3(K,Z,z);if(j==="default"&&!Z)j7();else $7(q,z);if(Z7(q.bgPrimary,z),N7(),$.persist!==!1)if(N0(v3,j),Z)N0($4,Z);else N0($4,"")}function $1(){if(Z4(e$.theme).mode!=="auto")return;N4(e$,{persist:!1})}function i3(){if(typeof window>"u")return()=>{};let _=j4(W$(v3)||"default"),$=W$($4),j=$?$.trim():null;if(N4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!e1){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",$1);else if(Z.addListener)Z.addListener($1);return e1=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",$1);else if(Z.removeListener)Z.removeListener($1);e1=!1}}return()=>{}}function l3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;N4({theme:j||"default",tint:Z},{persist:!0})}function n3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return p3()}var j1=/#(\w+)/g,z7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),K7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),Y7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),W7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},G7=new Set(["http:","https:","mailto:",""]);function z4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function _2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!G7.has(Z.protocol))return null;return Z.href}catch{return null}}function d3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),z;while(z=N.nextNode())Z.push(z);for(let K of Z){let G=K.tagName.toLowerCase();if(!K7.has(G)){let V=K.parentNode;if(!V)continue;while(K.firstChild)V.insertBefore(K.firstChild,K);V.removeChild(K);continue}let q=W7[G]||new Set;for(let V of Array.from(K.attributes)){let B=V.name.toLowerCase(),Y=V.value;if(B.startsWith("on")){K.removeAttribute(V.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(q.has(B)||Y7.has(B)){if(B==="href"){let U=_2(Y);if(!U)K.removeAttribute(V.name);else if(K.setAttribute(V.name,U),G==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let U=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(Y):Y,A=_2(U,{allowDataImage:G==="img"});if(!A)K.removeAttribute(V.name);else K.setAttribute(V.name,A)}continue}K.removeAttribute(V.name)}}return j.body.innerHTML}function s3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function Z1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=s3(j);if(N===j)break;j=N}return j}function V7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],z=!1,K=[];for(let G of j){if(!z&&G.trim().match(/^```mermaid\s*$/i)){z=!0,K=[];continue}if(z&&G.trim().match(/^```\s*$/)){let q=Z.length;Z.push(K.join(`
`)),N.push(`@@MERMAID_BLOCK_${q}@@`),z=!1,K=[];continue}if(z)K.push(G);else N.push(G)}if(z)N.push("```mermaid"),N.push(...K);return{text:N.join(`
`),blocks:Z}}function X7(_){if(!_)return _;return Z1(_,5)}function q7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function L7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function B7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),z=$[N]??"",K=X7(z);return`<div class="mermaid-container" data-mermaid="${q7(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function o3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var O7={span:new Set(["title","class","lang","dir"])};function Q7(_,$){let j=O7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,z;while(z=N.exec($)){let K=(z[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let G=z[2]??z[3]??z[4]??"";Z.push(` ${K}="${z4(G)}"`)}return Z.join("")}function r3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),z=N?Z.slice(1).trim():Z,G=z.endsWith("/")?z.slice(0,-1).trim():z,[q=""]=G.split(/\s+/,1),V=q.toLowerCase();if(!V||!z7.has(V))return $;if(V==="br")return N?"":"<br>";if(N)return`</${V}>`;let B=G.slice(q.length).trim(),Y=Q7(V,B);return`<${V}${Y}>`})}function a3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function t3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(z)=>z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let z=Z(N.nodeValue);if(z!==N.nodeValue)N.nodeValue=z}return $.body.innerHTML}function U7(_){if(!window.katex)return _;let $=(K)=>s3(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let G=[],q=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(V)=>{let B=G.length;return G.push(V),`@@CODE_BLOCK_${B}@@`});return q=q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(V)=>{let B=G.length;return G.push(V),`@@CODE_INLINE_${B}@@`}),{html:q,blocks:G}},Z=(K,G)=>{if(!G.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(q,V)=>{let B=Number(V);return G[B]??""})},N=j(_),z=N.html;return z=z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,G,q)=>{try{let V=katex.renderToString($(q.trim()),{displayMode:!0,throwOnError:!1});return`${G}${V}`}catch(V){return`<span class="math-error" title="${z4(V.message)}">${K}</span>`}}),z=z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,G,q)=>{if(/\s$/.test(q))return K;try{let V=katex.renderToString($(q),{displayMode:!1,throwOnError:!1});return`${G}${V}`}catch(V){return`${G}<span class="math-error" title="${z4(V.message)}">$${q}$</span>`}}),Z(z,N.blocks)}function F7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let z of Z){let K=z.nodeValue;if(!K)continue;if(j1.lastIndex=0,!j1.test(K))continue;j1.lastIndex=0;let G=z.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let q=K.split(j1);if(q.length<=1)continue;let V=$.createDocumentFragment();q.forEach((B,Y)=>{if(Y%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",B),U.textContent=`#${B}`,V.appendChild(U)}else V.appendChild($.createTextNode(B))}),z.parentNode?.replaceChild(V,z)}return $.body.innerHTML}function J7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let z of j){if(!N&&z.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&z.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(z)}return Z.join(`
`)}function t0(_,$,j={}){if(!_)return"";let Z=J7(_),{text:N,blocks:z}=V7(Z),K=Z1(N,2),q=o3(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),V=r3(q),B=window.marked?marked.parse(V,{headerIds:!1,mangle:!1}):V.replace(/\n/g,"<br>");return B=a3(B),B=t3(B),B=U7(B),B=F7(B),B=B7(B,z),B=d3(B,j),B}function N1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=Z1($,2),N=o3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),z=r3(N),K=window.marked?marked.parse(z):z.replace(/\n/g,"<br>");return K=a3(K),K=t3(K),K=d3(K),K}function H7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,z)=>{let K=N.trim().split(/\s+/).map((q)=>{let[V,B]=q.split(",").map(Number);return{x:V,y:B}});if(K.length<3)return`<polyline${Z}points="${N}"${z}/>`;let G=[`M ${K[0].x},${K[0].y}`];for(let q=1;q<K.length-1;q++){let V=K[q-1],B=K[q],Y=K[q+1],U=B.x-V.x,A=B.y-V.y,u=Y.x-B.x,R=Y.y-B.y,f=Math.sqrt(U*U+A*A),E=Math.sqrt(u*u+R*R),F=Math.min($,f/2,E/2);if(F<0.5){G.push(`L ${B.x},${B.y}`);continue}let I=B.x-U/f*F,C=B.y-A/f*F,i=B.x+u/E*F,l=B.y+R/E*F,n=U*R-A*u>0?1:0;G.push(`L ${I},${C}`),G.push(`A ${F},${F} 0 0 ${n} ${i},${l}`)}return G.push(`L ${K[K.length-1].x},${K[K.length-1].y}`),`<path${Z}d="${G.join(" ")}"${z}/>`})}async function S$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=n3()==="dark"?j["tokyo-night"]:j["github-light"],z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of z)try{let G=K.dataset.mermaid,q=L7(G||""),V=Z1(q,2),B=await $(V,{...N,transparent:!0});B=H7(B),K.innerHTML=B,K.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let q=document.createElement("pre");q.className="mermaid-error",q.textContent=`Diagram error: ${G.message}`,K.innerHTML="",K.appendChild(q),K.removeAttribute("data-mermaid")}}function e3(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function _6(_){return String(_||"").trim()||"web:default"}function $6(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function j6(_){if(!_)return!1;return _.status!=="running"}function Z6(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function N6({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),z=D(null),K=_?.thinking?N1(_.thinking):"",G=_?.answer?t0(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(N.current&&K)S$(N.current).catch(()=>{})},[K]),v(()=>{if(z.current&&G)S$(z.current).catch(()=>{})},[G]),!_)return null;let q=_.status==="running",V=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),Y=$6(_),U=j6(_),A=!q&&V,u=q?"Thinking…":_.status==="error"?"Error":"Done";return O`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${u}</span>
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
                <details class="btw-block btw-thinking" open=${q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${Y&&O`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${z}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${U&&O`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&O`
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
    `}var z6="PiClaw";function K4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%z.length,G=z[K],q=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",B=V?V:null,Y=j||q==="PiClaw".toLowerCase()||q==="pi";return{letter:N,color:G,image:B||(Y?"/static/icon-192.png":null)}}function K6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function Y6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function W6(_){if(!_)return null;if(typeof document<"u"){let z=document.documentElement,K=z?.dataset?.colorTheme||"",G=z?.dataset?.tint||"",q=getComputedStyle(z).getPropertyValue("--accent-color")?.trim();if(q&&(G||K&&K!=="default"))return q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let z=0;z<j.length;z+=1)Z=(Z*31+j.charCodeAt(z))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function D7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function P2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function G6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return P2(_)?"Compacting context":"Working..."}function E7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function V6(_,$=Date.now()){let j=D7(_);if(j===null)return null;return E7(Math.max(0,$-j))}function X6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:z,turnId:K,steerQueued:G,onPanelToggle:q}){let Y=($_)=>{if(!$_)return{text:"",totalLines:0,fullText:""};if(typeof $_==="string"){let A_=$_,$0=A_?A_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:A_,totalLines:$0,fullText:A_}}let M_=$_.text||"",V_=$_.fullText||$_.full_text||M_,E_=Number.isFinite($_.totalLines)?$_.totalLines:V_?V_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:M_,totalLines:E_,fullText:V_}},U=160,A=($_)=>String($_||"").replace(/<\/?internal>/gi,""),u=($_)=>{if(!$_)return 1;return Math.max(1,Math.ceil($_.length/160))},R=($_,M_,V_)=>{let E_=($_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!E_)return{text:"",omitted:0,totalLines:Number.isFinite(V_)?V_:0,visibleLines:0};let A_=E_.split(`
`),$0=A_.length>M_?A_.slice(0,M_).join(`
`):E_,h_=Number.isFinite(V_)?V_:A_.reduce((I_,S_)=>I_+u(S_),0),j0=$0?$0.split(`
`).reduce((I_,S_)=>I_+u(S_),0):0,y_=Math.max(h_-j0,0);return{text:$0,omitted:y_,totalLines:h_,visibleLines:j0}},f=Y(j),E=Y(Z),F=Y($),I=Boolean(f.text)||f.totalLines>0,C=Boolean(E.text)||E.totalLines>0,i=Boolean(F.fullText?.trim()||F.text?.trim());if(!_&&!i&&!I&&!C&&!N&&!z)return null;let[l,e]=T(new Set),[n,z_]=T(()=>Date.now()),c=($_)=>e((M_)=>{let V_=new Set(M_),E_=!V_.has($_);if(E_)V_.add($_);else V_.delete($_);if(typeof q==="function")q($_,E_);return V_});v(()=>{e(new Set)},[K]);let q_=P2(_);v(()=>{if(!q_)return;z_(Date.now());let $_=setInterval(()=>z_(Date.now()),1000);return()=>clearInterval($_)},[q_,_?.started_at,_?.startedAt]);let n_=_?.turn_id||K,__=W6(n_),r=G?"turn-dot turn-dot-queued":"turn-dot",N_=($_)=>$_,j_=Boolean(_?.last_activity||_?.lastActivity),O_=($_)=>$_==="warning"?"#f59e0b":$_==="error"?"var(--danger-color)":$_==="success"?"var(--success-color)":__,d_=z?.kind||"info",Q_=O_(d_),C_=O_(_?.kind||(q_?"warning":"info")),U_="",J_=_?.title,R_=_?.status;if(_?.type==="plan")U_=J_?`Planning: ${J_}`:"Planning...";else if(_?.type==="tool_call")U_=J_?`Running: ${J_}`:"Running tool...";else if(_?.type==="tool_status")U_=J_?`${J_}: ${R_||"Working..."}`:R_||"Working...";else if(_?.type==="error")U_=J_||"Agent error";else U_=J_||R_||"Working...";if(j_)U_="Last activity just now";let G_=({panelTitle:$_,text:M_,fullText:V_,totalLines:E_,maxLines:A_,titleClass:$0,panelKey:h_})=>{let j0=l.has(h_),y_=V_||M_||"",I_=h_==="thought"||h_==="draft"?A(y_):y_,S_=typeof A_==="number",z0=j0&&S_,f_=S_?R(I_,A_,E_):{text:I_||"",omitted:0,totalLines:Number.isFinite(E_)?E_:0};if(!I_&&!(Number.isFinite(f_.totalLines)&&f_.totalLines>0))return null;let A0=`agent-thinking-body${S_?" agent-thinking-body-collapsible":""}`,W0=S_?`--agent-thinking-collapsed-lines: ${A_};`:"";return O`
            <div
                class="agent-thinking"
                data-expanded=${j0?"true":"false"}
                data-collapsible=${S_?"true":"false"}
                style=${__?`--turn-color: ${__};`:""}
            >
                <div class="agent-thinking-title ${$0||""}">
                    ${__&&O`<span class=${r} aria-hidden="true"></span>`}
                    ${$_}
                    ${z0&&O`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${$_} panel`}
                            onClick=${()=>c(h_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${A0}
                    style=${W0}
                    dangerouslySetInnerHTML=${{__html:N1(I_)}}
                />
                ${!j0&&f_.omitted>0&&O`
                    <button class="agent-thinking-truncation" onClick=${()=>c(h_)}>
                        ▸ ${f_.omitted} more lines
                    </button>
                `}
                ${j0&&f_.omitted>0&&O`
                    <button class="agent-thinking-truncation" onClick=${()=>c(h_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},b_=N?.tool_call?.title,v_=b_?`Awaiting approval: ${b_}`:"Awaiting approval",D0=q_?V6(_,n):null,Y_=($_,M_,V_=null)=>{let E_=G6($_);return O`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${M_?`--turn-color: ${M_};`:""}
                title=${$_?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${M_&&O`<span class=${r} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${E_}</span>
                    ${V_&&O`<span class="agent-status-elapsed">${V_}</span>`}
                </div>
                ${$_.detail&&O`<div class="agent-thinking-body">${$_.detail}</div>`}
            </div>
        `};return O`
        <div class="agent-status-panel">
            ${z&&Y_(z,Q_)}
            ${_?.type==="intent"&&Y_(_,C_,D0)}
            ${N&&O`
                <div class="agent-status agent-status-request" aria-live="polite" style=${__?`--turn-color: ${__};`:""}>
                    <span class=${r} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${v_}</span>
                </div>
            `}
            ${I&&G_({panelTitle:N_("Planning"),text:f.text,fullText:f.fullText,totalLines:f.totalLines,panelKey:"plan"})}
            ${C&&G_({panelTitle:N_("Thoughts"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${i&&G_({panelTitle:N_("Draft"),text:F.text,fullText:F.fullText,totalLines:F.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&O`
                <div class=${`agent-status${j_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${__?`--turn-color: ${__};`:""}>
                    ${__&&O`<span class=${r} aria-hidden="true"></span>`}
                    ${_?.type==="error"?O`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!j_&&O`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${U_}</span>
                </div>
            `}
        </div>
    `}function q6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:z}=_,K=Z?.title||"Agent Request",G=Z?.kind||"other",q=Z?.rawInput||{},V=q.command||q.commands&&q.commands[0]||null,B=q.diff||null,Y=q.fileName||q.path||null,U=Z?.description||q.description||q.explanation||null,u=(Array.isArray(Z?.locations)?Z.locations:[]).map((I)=>I?.path).filter((I)=>Boolean(I)),R=Array.from(new Set([Y,...u].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let f=async(I)=>{try{await o2(j,I,z||null),$()}catch(C){console.error("Failed to respond to agent request:",C)}},E=async()=>{try{await g1(K,`Auto-approved: ${K}`),await o2(j,"approved",z||null),$()}catch(I){console.error("Failed to add to whitelist:",I)}},F=N&&N.length>0;return O`
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
                ${(U||V||B||R.length>0)&&O`
                    <div class="agent-request-body">
                        ${U&&O`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${R.length>0&&O`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${R.map((I,C)=>O`<li key=${C}>${I}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&O`
                            <pre class="agent-request-command">${V}</pre>
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
                    ${F?N.map((I)=>O`
                            <button 
                                key=${I.optionId||I.id||String(I)}
                                class="agent-request-btn ${I.kind==="allow_once"||I.kind==="allow_always"?"primary":""}"
                                onClick=${()=>f(I.optionId||I.id||I)}
                            >
                                ${I.name||I.label||I.optionId||I.id||String(I)}
                            </button>
                        `):O`
                        <button class="agent-request-btn primary" onClick=${()=>f("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>f("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${E}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function L6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,z=86400000;if(Z<z){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*z){let q=$.toLocaleDateString(void 0,{weekday:"short"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${V}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}function M2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function G$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function $2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var k7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),y7=new Set(["text/markdown"]),w7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),A7=new Set(["application/vnd.jgraph.mxfile"]);function C2(_){return typeof _==="string"?_.trim().toLowerCase():""}function P7(_){let $=C2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function M7(_){let $=C2(_);return!!$&&$.endsWith(".pdf")}function C7(_){let $=C2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function b2(_,$){let j=C2(_);if(P7($)||A7.has(j))return"drawio";if(M7($)||j==="application/pdf")return"pdf";if(C7($)||w7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(k7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function B6(_){let $=C2(_);return y7.has($)}function O6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function b7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function I7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),z=Number(j[3]);if(![Z,N,z].every((K)=>Number.isFinite(K)))return null;return{r:Z,g:N,b:z}}function Q6(_){return b7(_)||I7(_)}function z1(_){let $=(z)=>{let K=z/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function S7(_,$){let j=Math.max(z1(_),z1($)),Z=Math.min(z1(_),z1($));return(j+0.05)/(Z+0.05)}function x7(_,$,j="#ffffff"){let Z=Q6(_);if(!Z)return j;let N=j,z=-1;for(let K of $){let G=Q6(K);if(!G)continue;let q=S7(Z,G);if(q>z)N=K,z=q}return N}function Y4(){let _=getComputedStyle(document.documentElement),$=(u,R)=>{for(let f of u){let E=_.getPropertyValue(f).trim();if(E)return E}return R},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),z=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),q=$(["--success-color","--color-success"],"#00ba7c"),V=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),Y=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),A=x7(G,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:z,bgEmphasis:K,accent:G,good:q,warning:V,attention:B,border:Y,fontFamily:U,buttonTextColor:A}}function U6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:z,warning:K,attention:G,border:q,fontFamily:V}=Y4();return{fontFamily:V,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var T7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),F6=!1,K1=null,J6=!1;function W4(_){_.querySelector(".adaptive-card-notice")?.remove()}function f7(_,$,j="error"){W4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function R7(_,$=(j)=>t0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function v7(_=($)=>t0($,null)){return($,j)=>{try{let Z=R7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function u7(_){if(J6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=v7(),J6=!0}async function m7(){if(F6)return;if(K1)return K1;return K1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{F6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),K1}function g7(){return globalThis.AdaptiveCards}function p7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function c7(_){return T7.has(_)}function V4(_){if(!Array.isArray(_))return[];return _.filter(p7)}function h7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,z=_?.data??$?.data;return{type:j,title:Z,data:z,url:N,raw:_}}function G4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>G4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${G4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function i7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return G4($);return typeof $==="string"?$:String($)}function l7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((G)=>Z(G));if(!N||typeof N!=="object")return N;let K={...N};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=i7(K.type,j[K.id],K);for(let[G,q]of Object.entries(K))if(Array.isArray(q)||q&&typeof q==="object")K[G]=Z(q);return K};return Z(_)}function n7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function d7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function s7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=d7(_.completed_at||j?.submitted_at),z=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:z}}async function H6(_,$,j){if(!c7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await m7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=g7();u7(Z);let N=new Z.AdaptiveCard,z=Y4();N.hostConfig=new Z.HostConfig(U6());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:l7($.payload,K);N.parse(G),N.onExecuteAction=(B)=>{let Y=h7(B);if(j?.onAction)W4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(Y)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let A=U instanceof Error?U.message:String(U||"Action failed.");f7(_,A||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",Y)};let q=N.render();if(!q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",z.buttonTextColor);let V=s7($);if(V){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let Y=document.createElement("span");if(Y.className="adaptive-card-status-label",Y.textContent=V.label,B.appendChild(Y),V.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=V.detail,B.appendChild(U)}_.appendChild(B)}if(W4(_),_.appendChild(q),V)n7(q);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function I2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>I2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${I2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function D6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:I2(j)})).filter(($)=>$.value)}function o7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function X4(_){if(!Array.isArray(_))return[];return _.filter(o7)}function E6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=I2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=D6(j).slice(0,4).map(({key:z,value:K})=>`${z}: ${K}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function k6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=D6(_.data),Z=j.length>0?j.slice(0,2).map(({key:q,value:V})=>`${q}: ${V}`).join(", "):I2(_.data)||null,N=j.length,z=j.slice(0,4),K=j.slice(4),G=K.length;return{title:$,summary:Z,fields:z,hiddenFields:K,fieldCount:N,hiddenFieldCount:G,submittedAt:_.submitted_at}}function r7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?G$($):null},{label:"Added",value:_?.created_at?$2(_.created_at):null}].filter((Z)=>Z.value)}function a7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let z=K$(_);return`/office-viewer/?url=${encodeURIComponent(z)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function y6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=a_(()=>b2($?.content_type,Z),[$?.content_type,Z]),z=O6(N),K=a_(()=>B6($?.content_type),[$?.content_type]),[G,q]=T(N==="text"),[V,B]=T(""),[Y,U]=T(null),A=D(null),u=a_(()=>r7($),[$]),R=a_(()=>a7(_,Z,N),[_,Z,N]),f=a_(()=>{if(!K||!V)return"";return t0(V)},[K,V]);return v(()=>{let E=(F)=>{if(F.key==="Escape")j()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[j]),v(()=>{if(!A.current||!f)return;S$(A.current);return},[f]),v(()=>{let E=!1;async function F(){if(N!=="text"){q(!1),U(null);return}q(!0),U(null);try{let I=await i1(_);if(!E)B(I)}catch{if(!E)U("Failed to load text preview.")}finally{if(!E)q(!1)}}return F(),()=>{E=!0}},[_,N]),O`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(E)=>{E.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${z}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${R&&O`
                            <a
                                href=${R}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(E)=>E.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${K$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(E)=>E.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${G&&O`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&Y&&O`<div class="attachment-preview-state">${Y}</div>`}
                    ${!G&&!Y&&N==="image"&&O`
                        <img class="attachment-preview-image" src=${K$(_)} alt=${Z} />
                    `}
                    ${!G&&!Y&&(N==="pdf"||N==="office"||N==="drawio")&&R&&O`
                        <iframe class="attachment-preview-frame" src=${R} title=${Z}></iframe>
                    `}
                    ${!G&&!Y&&N==="drawio"&&O`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!G&&!Y&&N==="text"&&K&&O`
                        <div
                            ref=${A}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:f}}
                        />
                    `}
                    ${!G&&!Y&&N==="text"&&!K&&O`
                        <pre class="attachment-preview-text">${V}</pre>
                    `}
                    ${!G&&!Y&&N==="unsupported"&&O`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${u.map((E)=>O`
                        <div class="attachment-preview-meta-item" key=${E.label}>
                            <span class="attachment-preview-meta-label">${E.label}</span>
                            <span class="attachment-preview-meta-value">${E.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function w6({src:_,onClose:$}){return v(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),O`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function t7({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(v(()=>{X2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",z=j.metadata?.size,K=z?G$(z):"",q=b2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return O`
        <div class="file-attachment" onClick=${(V)=>V.stopPropagation()}>
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
                        ${K&&O`<span class="file-size">${K}</span>`}
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
                onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${q}
            </button>
        </div>
    `}function e7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);v(()=>{if(!Number.isFinite(j))return;X2(j).then(N).catch(()=>{});return},[j]);let z=Z?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?K$(j):null,q=b2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return O`
        <span class="attachment-pill" title=${z}>
            ${K?O`
                    <a href=${K} download=${z} class="attachment-pill-main" onClick=${(V)=>V.stopPropagation()}>
                        <${Q$}
                            prefix="post"
                            label=${_.label}
                            title=${z}
                        />
                    </a>
                `:O`
                    <${Q$}
                        prefix="post"
                        label=${_.label}
                        title=${z}
                    />
                `}
            ${Number.isFinite(j)&&Z&&O`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${q}
                    onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function Y1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?$2(Z):null;return O`
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
    `}function _5({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?G$(_.size):"",N=_.mime_type||"",z=j5(N),K=_2(_.uri);return O`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${z}</span>
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
    `}function $5({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",z=Boolean(_.data),K=_.mime_type||"";return O`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&O`
                ${N&&O`<pre class="resource-embed-content">${N}</pre>`}
                ${z&&O`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&O`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let q=new Blob([Uint8Array.from(atob(_.data),(Y)=>Y.charCodeAt(0))],{type:K||"application/octet-stream"}),V=URL.createObjectURL(q),B=document.createElement("a");B.href=V,B.download=Z.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(V)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function j5(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function Z5({preview:_}){let $=_2(_.url),j=_2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return O`
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
                ${_.description&&O`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function N5(_,$){return typeof _==="string"?_:""}var z5=1800,K5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Y5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,W5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function G5(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function V5(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((z)=>z.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(z,K)=>{let G=K||"idle";if(z.dataset.copyState=G,G==="success")z.innerHTML=Y5,z.setAttribute("aria-label","Copied"),z.setAttribute("title","Copied"),z.classList.add("is-success"),z.classList.remove("is-error");else if(G==="error")z.innerHTML=W5,z.setAttribute("aria-label","Copy failed"),z.setAttribute("title","Copy failed"),z.classList.add("is-error"),z.classList.remove("is-success");else z.innerHTML=K5,z.setAttribute("aria-label","Copy code"),z.setAttribute("title","Copy code"),z.classList.remove("is-success","is-error")};return $.forEach((z)=>{let K=document.createElement("div");K.className="post-code-block",z.parentNode?.insertBefore(K,z),K.appendChild(z);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",N(G,"idle"),K.appendChild(G);let q=async(V)=>{V.preventDefault(),V.stopPropagation();let Y=z.querySelector("code")?.textContent||"",U=await G5(Y);N(G,U?"success":"error");let A=j.get(G);if(A)clearTimeout(A);let u=setTimeout(()=>{N(G,"idle"),j.delete(G)},z5);j.set(G,u)};G.addEventListener("click",q),Z.push(()=>{G.removeEventListener("click",q);let V=j.get(G);if(V)clearTimeout(V);if(K.parentNode)K.parentNode.insertBefore(z,K),K.remove()})}),()=>{Z.forEach((z)=>z())}}function X5(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Files:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V))N.push(V.replace(/^\s*-\s+/,"").trim());else if(!V.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,Z),G=j.slice(z),q=[...K,...G].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,fileRefs:N}}function q5(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Referenced messages:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V)){let Y=V.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Y)N.push(Y[1])}else if(!V.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,Z),G=j.slice(z),q=[...K,...G].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,messageRefs:N}}function L5(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Images:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,attachments:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V)){let B=V.replace(/^\s*-\s+/,"").trim(),Y=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(Y){let U=Y[1],A=(Y[2]||"").trim()||U;N.push({id:U,label:A,raw:B})}else N.push({id:null,label:B,raw:B})}else if(!V.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let K=j.slice(0,Z),G=j.slice(z),q=[...K,...G].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,attachments:N}}function B5(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function O5(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(B5).sort((B,Y)=>Y.length-B.length),N=new RegExp(`(${Z.join("|")})`,"gi"),z=new RegExp(`^(${Z.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),G=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),q=[],V;while(V=G.nextNode())q.push(V);for(let B of q){let Y=B.nodeValue;if(!Y||!N.test(Y)){N.lastIndex=0;continue}N.lastIndex=0;let U=B.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let A=Y.split(N).filter((R)=>R!=="");if(A.length===0)continue;let u=K.createDocumentFragment();for(let R of A)if(z.test(R)){let f=K.createElement("mark");f.className="search-highlight-term",f.textContent=R,u.appendChild(f)}else u.appendChild(K.createTextNode(R));B.parentNode.replaceChild(u,B)}return K.body.innerHTML}function A6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:z,agentAvatarUrl:K,userName:G,userAvatarUrl:q,userAvatarBackground:V,onDelete:B,isThreadReply:Y,isThreadPrev:U,isThreadNext:A,isRemoving:u,highlightQuery:R,onFileRef:f}){let[E,F]=T(null),[I,C]=T(()=>new Set),i=D(null),l=_.data,e=l.type==="agent_response",n=G||"You",z_=e?z||z6:n,c=e?K4(z,K,!0):K4(n,q),q_=typeof V==="string"?V.trim().toLowerCase():"",n_=!e&&c.image&&(q_==="clear"||q_==="transparent"),__=e&&Boolean(c.image),r=`background-color: ${n_||__?"transparent":c.color}`,N_=l.content_meta,j_=Boolean(N_?.truncated),O_=Boolean(N_?.preview),d_=j_&&!O_,Q_=j_?{originalLength:Number.isFinite(N_?.original_length)?N_.original_length:l.content?l.content.length:0,maxLength:Number.isFinite(N_?.max_length)?N_.max_length:0}:null,C_=l.content_blocks||[],U_=l.media_ids||[],J_=N5(l.content,l.link_previews),{content:R_,fileRefs:G_}=X5(J_),{content:b_,messageRefs:v_}=q5(R_),{content:D0,attachments:Y_}=L5(b_);J_=D0;let $_=V4(C_),M_=X4(C_),V_=$_.length===1&&typeof $_[0]?.fallback_text==="string"?$_[0].fallback_text.trim():"",E_=M_.length===1?E6(M_[0]).trim():"",A_=Boolean(V_)&&J_?.trim()===V_||Boolean(E_)&&J_?.trim()===E_,$0=Boolean(J_)&&!d_&&!A_,h_=typeof R==="string"?R.trim():"",j0=a_(()=>{if(!J_||A_)return"";let S=t0(J_,j);return h_?O5(S,h_):S},[J_,A_,h_]),y_=(S,s)=>{S.stopPropagation(),F(K$(s))},[I_,S_]=T(null),z0=(S)=>{S_(S)},f_=(S)=>{S.stopPropagation(),B?.(_)},A0=(S)=>{C((s)=>{let K_=new Set(s);if(K_.has(S))K_.delete(S);else K_.add(S);return K_})},W0=(S,s)=>{let K_=new Set;if(!S||s.length===0)return{content:S,usedIds:K_};return{content:S.replace(/attachment:([^\s)"']+)/g,(m_,T_,m0,T$)=>{let _$=T_.replace(/^\/+/,""),B0=s.find((O0)=>O0.name&&O0.name.toLowerCase()===_$.toLowerCase()&&!K_.has(O0.id))||s.find((O0)=>!K_.has(O0.id));if(!B0)return m_;if(K_.add(B0.id),T$.slice(Math.max(0,m0-2),m0)==="](")return`/media/${B0.id}`;return B0.name||"attachment"}),usedIds:K_}},G0=[],e0=[],K0=[],x_=[],Y0=[],s_=[],F0=0;if(C_.length>0)C_.forEach((S)=>{if(S?.type==="text"&&S.annotations)s_.push(S.annotations);if(S?.type==="resource_link")x_.push(S);else if(S?.type==="resource")Y0.push(S);else if(S?.type==="file"){let s=U_[F0++];if(s)e0.push(s),K0.push({id:s,name:S?.name||S?.filename||S?.title})}else if(S?.type==="image"||!S?.type){let s=U_[F0++];if(s){let K_=typeof S?.mime_type==="string"?S.mime_type:void 0;G0.push({id:s,annotations:S?.annotations,mimeType:K_}),K0.push({id:s,name:S?.name||S?.filename||S?.title})}}});else if(U_.length>0)U_.forEach((S)=>{G0.push({id:S,annotations:null}),K0.push({id:S,name:null})});if(Y_.length>0)Y_.forEach((S)=>{if(!S?.id)return;let s=K0.find((K_)=>String(K_.id)===String(S.id));if(s&&!s.name)s.name=S.label});let{content:P0,usedIds:o_}=W0(J_,K0);J_=P0;let E0=G0.filter(({id:S})=>!o_.has(S)),M0=e0.filter((S)=>!o_.has(S)),F_=Y_.length>0?Y_.map((S,s)=>({id:S.id||`attachment-${s+1}`,label:S.label||`attachment-${s+1}`})):K0.map((S,s)=>({id:S.id,label:S.name||`attachment-${s+1}`})),u_=a_(()=>V4(C_),[C_]),n0=a_(()=>X4(C_),[C_]);v(()=>{if(!i.current)return;return S$(i.current),V5(i.current)},[j0]);let V$=D(null);return v(()=>{if(!V$.current||u_.length===0)return;let S=V$.current;S.innerHTML="";for(let s of u_){let K_=document.createElement("div");S.appendChild(K_),H6(K_,s,{onAction:async(k_)=>{if(k_.type==="Action.OpenUrl"){let m_=_2(k_.url||"");if(!m_)throw Error("Invalid URL");window.open(m_,"_blank","noopener,noreferrer");return}if(k_.type==="Action.Submit"){await m1({post_id:_.id,thread_id:l.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:s.card_id,action:{type:k_.type,title:k_.title||"",data:k_.data}});return}console.warn("[post] unsupported adaptive card action:",k_.type,k_)}}).catch((k_)=>{console.error("[post] adaptive card render error:",k_),K_.textContent=s.fallback_text||"Card failed to render."})}},[u_,l.thread_id,_.id]),O`
        <div id=${`post-${_.id}`} class="post ${e?"agent-post":""} ${Y?"thread-reply":""} ${U?"thread-prev":""} ${A?"thread-next":""} ${u?"removing":""}" onClick=${$}>
            <div class="post-avatar ${e?"agent-avatar":""} ${c.image?"has-image":""}" style=${r}>
                ${c.image?O`<img src=${c.image} alt=${z_} />`:c.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${f_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${z_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(S)=>{if(S.preventDefault(),S.stopPropagation(),Z)Z(_.id)}}>${L6(_.timestamp)}</a>
                </div>
                ${d_&&Q_&&O`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${M2(Q_.originalLength)} chars
                            ${Q_.maxLength?O` • Display limit: ${M2(Q_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${O_&&Q_&&O`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${M2(Q_.maxLength)} of ${M2(Q_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(G_.length>0||v_.length>0||F_.length>0)&&O`
                    <div class="post-file-refs">
                        ${v_.map((S)=>{let s=(K_)=>{if(K_.preventDefault(),K_.stopPropagation(),N)N(S,_.chat_jid||null);else{let k_=document.getElementById("post-"+S);if(k_)k_.scrollIntoView({behavior:"smooth",block:"center"}),k_.classList.add("post-highlight"),setTimeout(()=>k_.classList.remove("post-highlight"),2000)}};return O`
                                <a href=${`#msg-${S}`} class="post-msg-pill-link" onClick=${s}>
                                    <${Q$}
                                        prefix="post"
                                        label=${"msg:"+S}
                                        title=${"Message "+S}
                                        icon="message"
                                        onClick=${s}
                                    />
                                </a>
                            `})}
                        ${G_.map((S)=>{let s=S.split("/").pop()||S;return O`
                                <${Q$}
                                    prefix="post"
                                    label=${s}
                                    title=${S}
                                    onClick=${()=>f?.(S)}
                                />
                            `})}
                        ${F_.map((S)=>O`
                            <${e7}
                                key=${S.id}
                                attachment=${S}
                                onPreview=${z0}
                            />
                        `)}
                    </div>
                `}
                ${$0&&O`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:j0}}
                        onClick=${(S)=>{if(S.target.classList.contains("hashtag")){S.preventDefault(),S.stopPropagation();let s=S.target.dataset.hashtag;if(s)j?.(s)}else if(S.target.tagName==="IMG")S.preventDefault(),S.stopPropagation(),F(S.target.src)}}
                    />
                `}
                ${u_.length>0&&O`
                    <div ref=${V$} class="post-adaptive-cards" />
                `}
                ${n0.length>0&&O`
                    <div class="post-adaptive-card-submissions">
                        ${n0.map((S,s)=>{let K_=k6(S),k_=`${S.card_id}-${s}`,m_=I.has(k_);return O`
                                <div key=${k_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${K_.title}</span>
                                        </div>
                                    </div>
                                    ${K_.summary&&O`
                                        <div class="adaptive-card-submission-summary">${K_.summary}</div>
                                    `}
                                    ${K_.fields.length>0&&O`
                                        <div class="adaptive-card-submission-fields">
                                            ${K_.fields.map((T_)=>O`
                                                <span class="adaptive-card-submission-field" title=${`${T_.key}: ${T_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${T_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${T_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    ${K_.hiddenFieldCount>0&&O`
                                        <button
                                            type="button"
                                            class="adaptive-card-submission-toggle"
                                            aria-expanded=${m_?"true":"false"}
                                            onClick=${(T_)=>{T_.preventDefault(),T_.stopPropagation(),A0(k_)}}
                                        >
                                            ${m_?`Hide ${K_.hiddenFieldCount} more`:`Show ${K_.hiddenFieldCount} more`}
                                        </button>
                                    `}
                                    ${m_&&K_.hiddenFields.length>0&&O`
                                        <div class="adaptive-card-submission-fields adaptive-card-submission-fields-extra">
                                            ${K_.hiddenFields.map((T_)=>O`
                                                <span class="adaptive-card-submission-field" title=${`${T_.key}: ${T_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${T_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${T_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${$2(K_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${s_.length>0&&O`
                    ${s_.map((S,s)=>O`
                        <${Y1} key=${s} annotations=${S} />
                    `)}
                `}
                ${E0.length>0&&O`
                    <div class="media-preview">
                        ${E0.map(({id:S,mimeType:s})=>{let k_=typeof s==="string"&&s.toLowerCase().startsWith("image/svg")?K$(S):h1(S);return O`
                                <img 
                                    key=${S} 
                                    src=${k_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(m_)=>y_(m_,S)}
                                />
                            `})}
                    </div>
                `}
                ${E0.length>0&&O`
                    ${E0.map(({annotations:S},s)=>O`
                        ${S&&O`<${Y1} key=${s} annotations=${S} />`}
                    `)}
                `}
                ${M0.length>0&&O`
                    <div class="file-attachments">
                        ${M0.map((S)=>O`
                            <${t7} key=${S} mediaId=${S} onPreview=${z0} />
                        `)}
                    </div>
                `}
                ${x_.length>0&&O`
                    <div class="resource-links">
                        ${x_.map((S,s)=>O`
                            <div key=${s}>
                                <${_5} block=${S} />
                                <${Y1} annotations=${S.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Y0.length>0&&O`
                    <div class="resource-embeds">
                        ${Y0.map((S,s)=>O`
                            <div key=${s}>
                                <${$5} block=${S} />
                                <${Y1} annotations=${S.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${l.link_previews?.length>0&&O`
                    <div class="link-previews">
                        ${l.link_previews.map((S,s)=>O`
                            <${Z5} key=${s} preview=${S} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${E&&O`<${w6} src=${E} onClose=${()=>F(null)} />`}
        ${I_&&O`
            <${y6}
                mediaId=${I_.mediaId}
                info=${I_.info}
                onClose=${()=>S_(null)}
            />
        `}
    `}function P6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:z,onScrollToMessage:K,onFileRef:G,emptyMessage:q,timelineRef:V,agents:B,user:Y,onDeletePost:U,reverse:A=!0,removingPostIds:u,searchQuery:R}){let[f,E]=T(!1),F=D(null),I=typeof IntersectionObserver<"u",C=k(async()=>{if(!j||!$||f)return;E(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{E(!1)}},[$,f,j]),i=k((__)=>{let{scrollTop:r,scrollHeight:N_,clientHeight:j_}=__.target,O_=A?N_-j_-r:r,d_=Math.max(300,j_);if(O_<d_)C()},[A,C]);v(()=>{if(!I)return;let __=F.current,r=V?.current;if(!__||!r)return;let N_=300,j_=new IntersectionObserver((O_)=>{for(let d_ of O_){if(!d_.isIntersecting)continue;C()}},{root:r,rootMargin:`${N_}px 0px ${N_}px 0px`,threshold:0});return j_.observe(__),()=>j_.disconnect()},[I,$,j,V,C]);let l=D(C);if(l.current=C,v(()=>{if(I)return;if(!V?.current)return;let{scrollTop:__,scrollHeight:r,clientHeight:N_}=V.current,j_=A?r-N_-__:__,O_=Math.max(300,N_);if(j_<O_)l.current?.()},[I,_,$,A,V]),v(()=>{if(!V?.current)return;if(!$||f)return;let{scrollTop:__,scrollHeight:r,clientHeight:N_}=V.current,j_=A?r-N_-__:__,O_=Math.max(300,N_);if(r<=N_+1||j_<O_)l.current?.()},[_,$,f,A,V]),!_)return O`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return O`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let e=_.slice().sort((__,r)=>__.id-r.id),n=(__)=>{let r=__?.data?.thread_id;if(r===null||r===void 0||r==="")return null;let N_=Number(r);return Number.isFinite(N_)?N_:null},z_=new Map;for(let __=0;__<e.length;__+=1){let r=e[__],N_=Number(r?.id),j_=n(r);if(j_!==null){let O_=z_.get(j_)||{anchorIndex:-1,replyIndexes:[]};O_.replyIndexes.push(__),z_.set(j_,O_)}else if(Number.isFinite(N_)){let O_=z_.get(N_)||{anchorIndex:-1,replyIndexes:[]};O_.anchorIndex=__,z_.set(N_,O_)}}let c=new Map;for(let[__,r]of z_.entries()){let N_=new Set;if(r.anchorIndex>=0)N_.add(r.anchorIndex);for(let j_ of r.replyIndexes)N_.add(j_);c.set(__,Array.from(N_).sort((j_,O_)=>j_-O_))}let q_=e.map((__,r)=>{let N_=n(__);if(N_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let j_=c.get(N_);if(!j_||j_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let O_=j_.indexOf(r);if(O_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:O_>0,hasThreadNext:O_<j_.length-1}}),n_=O`<div class="timeline-sentinel" ref=${F}></div>`;return O`
        <div class="timeline ${A?"reverse":"normal"}" ref=${V} onScroll=${i}>
            <div class="timeline-content">
                ${A?n_:null}
                ${e.map((__,r)=>{let N_=Boolean(__.data?.thread_id&&__.data.thread_id!==__.id),j_=u?.has?.(__.id),O_=q_[r]||{};return O`
                    <${A6}
                        key=${__.id}
                        post=${__}
                        isThreadReply=${N_}
                        isThreadPrev=${O_.hasThreadPrev}
                        isThreadNext=${O_.hasThreadNext}
                        isRemoving=${j_}
                        highlightQuery=${R}
                        agentName=${K6(__.data?.agent_id,B||{})}
                        agentAvatarUrl=${Y6(__.data?.agent_id,B||{})}
                        userName=${Y?.name||Y?.user_name}
                        userAvatarUrl=${Y?.avatar_url||Y?.avatarUrl||Y?.avatar}
                        userAvatarBackground=${Y?.avatar_background||Y?.avatarBackground}
                        onClick=${()=>Z?.(__)}
                        onHashtagClick=${N}
                        onMessageRef=${z}
                        onScrollToMessage=${K}
                        onFileRef=${G}
                        onDelete=${U}
                    />
                `})}
                ${A?null:n_}
            </div>
        </div>
    `}class M6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let z=N===!0?0:typeof N==="number"?N:0;if(z>j)j=z,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var _0=new M6;var W1=null,q4=null;function C6(){if(q4)return Promise.resolve(q4);if(!W1)W1=import("/static/dist/editor.bundle.js").then((_)=>{return q4=_,_}).catch((_)=>{throw W1=null,_});return W1}class b6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await C6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var L4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new b6(_,$)}};function B4(){C6().catch(()=>{})}var Q4="piclaw://terminal";var Q5={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},U5={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},G1=null,O4=null;function F5(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function J5(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,z)=>{let K=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!F5(K))return $(N,z);if(N instanceof Request)return $(new Request(j,N));return $(j,z)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function H5(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!G1)G1=J5(()=>Promise.resolve($.init?.())).catch((j)=>{throw G1=null,j});return await G1,$}async function D5(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!O4)O4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await O4}async function E5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function k5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function y5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function x$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function w5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function I6(){let _=y5(),$=_?U5:Q5,j=x$("--bg-primary",_?"#000000":"#ffffff"),Z=x$("--text-primary",_?"#e7e9ea":"#0f1419"),N=x$("--text-secondary",_?"#71767b":"#536471"),z=x$("--accent-color","#1d9bf0"),K=x$("--danger-color",_?"#ff7b72":"#cf222e"),G=x$("--success-color",_?"#7ee787":"#1a7f37"),q=x$("--bg-hover",_?"#1d1f23":"#e8ebed"),V=x$("--border-color",_?"#2f3336":"#eff3f4"),B=x$("--accent-soft-strong",w5(z,_?"47":"33"));return{background:j,foreground:Z,cursor:z,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:q,red:K,green:G,yellow:$.yellow,blue:z,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:V}}class U4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,z=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(z)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await H5();if(await D5(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:I6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=I6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await E5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(k5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var F4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new U4(_,$)}},J4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new U4(_,$)}};function l$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function A5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,z=Z?.[2]||"",K=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),V=N.startsWith("/")?N:`${G?`${G}/`:""}${N}`,B=[];for(let U of V.split("/")){if(!U||U===".")continue;if(U===".."){if(B.length>0)B.pop();continue}B.push(U)}let Y=B.join("/");return`${a2(Y)}${z}${K}`}function S2(_){return _?.preview||null}function P5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function M5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function C5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${l$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${l$(G$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${l$($2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${l$(M5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${l$(P5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${l$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function b5(_){let $=S2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=C5(_,$);if($.kind==="image"){let Z=$.url||($.path?a2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${l$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=t0($.text||"",null,{rewriteImageSrc:(N)=>A5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${l$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class H4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=b5(this.context)}getContent(){let _=S2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=S2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var D4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=S2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new H4(_,$)}},E4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return S2(_)||_?.path?1:!1},mount(_,$){return new H4(_,$)}};var I5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),S5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},x5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function x6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function S6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class T6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=x6(j),z=x5[N]||"\uD83D\uDCC4",K=S5[N]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${z}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${S6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${S6(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let q=G.querySelector("#ov-open-tab");if(q)q.addEventListener("click",()=>{let V=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class f6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=x6(_?.path);if(!$||!I5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new T6(_,$);return new f6(_,$)}};var T5=/\.(csv|tsv)$/i;function R6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${R6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${R6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#csv-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class u6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!T5.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new v6(_,$);return new u6(_,$)}};var f5=/\.pdf$/i;function R5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${R5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#pdf-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var w4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!f5.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new m6(_,$);return new g6(_,$)}};var v5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function A4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${A4(N)}" alt="${A4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${A4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var P4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!v5.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new p6(_,$);return new c6(_,$)}};function u5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function m5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var M4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function h6(_){let $=String(_||"").trim();return $?$:M4}function g5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function p5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function c5(_,$="*"){try{let j=(z)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...z}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let z=Z.prototype.saveData;Z.prototype.saveData=function(K,G,q,V,B,Y){try{if(K&&q!=null&&j({filename:K,format:G,data:q,mimeType:V,base64Encoded:Boolean(B),defaultMode:Y}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return z.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let z=N.prototype.exportFile;N.prototype.exportFile=function(K,G,q,V,B,Y){try{if(G&&j({filename:G,data:K,mimeType:q,base64Encoded:Boolean(V),mode:B,folderId:Y}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return z.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function i6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${p5(j)}`}class l6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${m5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#drawio-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class n6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=g5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let z=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(c5(this.iframe.contentWindow))return;setTimeout(z,250)};z()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=M4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await i6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await i6(_,"image/png");else this.xmlData=h6(await _.text());else if(_.status===404)this.xmlData=M4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?h6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var C4={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!u5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new l6(_,$);return new n6(_,$)}};class d6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var l_=new d6;var V1="workspaceExplorerScale",h5=["compact","default","comfortable"],i5=new Set(h5),l5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function s6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return i5.has(j)?j:$}function b4(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function n5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function d5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function I4(_={}){let $=n5(_),j=_.stored?s6(_.stored,$):$;return d5(j,_)}function o6(_){return l5[s6(_)]}var s5=60000,e6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function _8(_,$,j,Z=0,N=[]){if(!j&&e6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let z of _.children)_8(z,$,j,Z+1,N);return N}function r6(_,$,j){if(!_)return"";let Z=[],N=(z)=>{if(!j&&e6(z))return;if(Z.push(z.type==="dir"?`d:${z.path}`:`f:${z.path}`),z.children&&$?.has(z.path))for(let K of z.children)N(K)};return N(_),Z.join("|")}function f4(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((G)=>[G?.path,G])):new Map,z=!j||j.length!==Z.length,K=Z.map((G)=>{let q=f4(N.get(G.path),G);if(q!==N.get(G.path))z=!0;return q});return z?{...$,children:K}:_}function x4(_,$,j){if(!_)return _;if(_.path===$)return f4(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((z)=>{let K=x4(z,$,j);if(K!==z)Z=!0;return K});return Z?{..._,children:N}:_}var $8=4,S4=14,o5=8,r5=16;function j8(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=j8(Z);return _.__bytes=j,j}function Z8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=$8)return Z;let N=Array.isArray(_.children)?_.children:[],z=[];for(let G of N){let q=Math.max(0,Number(G?.__bytes??G?.size??0));if(q<=0)continue;if(G.type==="dir")z.push({kind:"dir",node:G,size:q});else z.push({kind:"file",name:G.name,path:G.path,size:q})}z.sort((G,q)=>q.size-G.size);let K=z;if(z.length>S4){let G=z.slice(0,S4-1),q=z.slice(S4-1),V=q.reduce((B,Y)=>B+Y.size,0);G.push({kind:"other",name:`+${q.length} more`,path:`${Z.path}/[other]`,size:V}),K=G}return Z.children=K.map((G)=>{if(G.kind==="dir")return Z8(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function a6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function N8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),z=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${z}%)`}function X1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function R4(_,$,j,Z,N,z){let K=Math.PI*2-0.0001,G=z-N>K?N+K:z,q=X1(_,$,Z,N),V=X1(_,$,Z,G),B=X1(_,$,j,G),Y=X1(_,$,j,N),U=G-N>Math.PI?1:0;return[`M ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${Y.x.toFixed(3)} ${Y.y.toFixed(3)}`,"Z"].join(" ")}var z8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function K8(_,$,j){let Z=[],N=[],z=Math.max(0,Number($)||0),K=(G,q,V,B)=>{let Y=Array.isArray(G?.children)?G.children:[];if(!Y.length)return;let U=Math.max(0,Number(G.size)||0);if(U<=0)return;let A=V-q,u=q;Y.forEach((R,f)=>{let E=Math.max(0,Number(R.size)||0);if(E<=0)return;let F=E/U,I=u,C=f===Y.length-1?V:u+A*F;if(u=C,C-I<0.003)return;let i=z8[B];if(i){let l=N8(I,B,j);if(Z.push({key:R.path,path:R.path,label:R.name,size:E,color:l,depth:B,startAngle:I,endAngle:C,innerRadius:i[0],outerRadius:i[1],d:R4(120,120,i[0],i[1],I,C)}),B===1)N.push({key:R.path,name:R.name,size:E,pct:z>0?E/z*100:0,color:l})}if(B<$8)K(R,I,C,B+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function T4(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=T4(Z,$);if(N)return N}return null}function Y8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=z8[1];if(!N)return{segments:[],legend:[]};let z=-Math.PI/2,K=Math.PI*3/2,G=N8(z,1,Z),V=`${$||"."}/[files]`;return{segments:[{key:V,path:V,label:_,size:j,color:G,depth:1,startAngle:z,endAngle:K,innerRadius:N[0],outerRadius:N[1],d:R4(120,120,N[0],N[1],z,K)}],legend:[{key:V,name:_,size:j,pct:100,color:G}]}}function t6(_,$=!1,j=!1){if(!_)return null;let Z=j8(_),N=Z8(_,0),z=N.size||Z,{segments:K,legend:G}=K8(N,z,j);if(!K.length&&z>0){let q=Y8("[files]",N.path,z,j);K=q.segments,G=q.legend}return{root:N,totalSize:z,segments:K,legend:G,truncated:$,isDarkTheme:j}}function a5({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[z,K]=T(()=>[_?.root?.path||"."]),[G,q]=T(!1);v(()=>{let c=_?.root?.path||".";N(c),K([c]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Z)return;q(!0);let c=setTimeout(()=>q(!1),180);return()=>clearTimeout(c)},[Z]);let V=a_(()=>{return T4(_.root,Z)||_.root},[_?.root,Z]),B=V?.size||_.totalSize||0,{segments:Y,legend:U}=a_(()=>{let c=K8(V,B,_.isDarkTheme);if(c.segments.length>0)return c;if(B<=0)return c;let q_=V?.children?.length?"Total":"[files]";return Y8(q_,V?.path||_?.root?.path||".",B,_.isDarkTheme)},[V,B,_.isDarkTheme,_?.root?.path]),[A,u]=T(Y),R=D(new Map),f=D(0);v(()=>{let c=R.current,q_=new Map(Y.map((N_)=>[N_.key,N_])),n_=performance.now(),__=220,r=(N_)=>{let j_=Math.min(1,(N_-n_)/220),O_=j_*(2-j_),d_=Y.map((Q_)=>{let U_=c.get(Q_.key)||{startAngle:Q_.startAngle,endAngle:Q_.startAngle,innerRadius:Q_.innerRadius,outerRadius:Q_.innerRadius},J_=(D0,Y_)=>D0+(Y_-D0)*O_,R_=J_(U_.startAngle,Q_.startAngle),G_=J_(U_.endAngle,Q_.endAngle),b_=J_(U_.innerRadius,Q_.innerRadius),v_=J_(U_.outerRadius,Q_.outerRadius);return{...Q_,d:R4(120,120,b_,v_,R_,G_)}});if(u(d_),j_<1)f.current=requestAnimationFrame(r)};if(f.current)cancelAnimationFrame(f.current);return f.current=requestAnimationFrame(r),R.current=q_,()=>{if(f.current)cancelAnimationFrame(f.current)}},[Y]);let E=A.length?A:Y,F=B>0?G$(B):"0 B",I=V?.name||"",i=(I&&I!=="."?I:"Total")||"Total",l=F,e=z.length>1,n=(c)=>{if(!c?.path)return;let q_=T4(_.root,c.path);if(!q_||!Array.isArray(q_.children)||q_.children.length===0)return;K((n_)=>[...n_,q_.path]),N(q_.path),j(null)},z_=()=>{if(!e)return;K((c)=>{let q_=c.slice(0,-1);return N(q_[q_.length-1]||_?.root?.path||"."),q_}),j(null)};return O`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${V?.path||_?.root?.path||"."}`}
                data-segments=${E.length}
                data-base-size=${B}>
                ${E.map((c)=>O`
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
                        onClick=${()=>n(c)}
                    >
                        <title>${c.label} — ${G$(c.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${e?" is-drill":""}`}
                    onClick=${z_}
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${l}</text>
                </g>
            </svg>
            ${U.length>0&&O`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((c)=>O`
                        <div key=${c.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${c.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${c.name}>${c.name}</span>
                            <span class="workspace-folder-starburst-size">${G$(c.size)}</span>
                            <span class="workspace-folder-starburst-pct">${c.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&O`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function t5({mediaId:_}){let[$,j]=T(null);if(v(()=>{if(!_)return;X2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?G$($.metadata.size):"";return O`
        <a href=${K$(_)} download=${Z} class="file-attachment"
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
                ${N&&O`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function W8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:z,terminalVisible:K=!1}){let[G,q]=T(null),[V,B]=T(new Set(["."])),[Y,U]=T(null),[A,u]=T(null),[R,f]=T(""),[E,F]=T(null),[I,C]=T(null),[i,l]=T(!0),[e,n]=T(!1),[z_,c]=T(null),[q_,n_]=T(()=>q2("workspaceShowHidden",!1)),[__,r]=T(!1),[N_,j_]=T(null),[O_,d_]=T(null),[Q_,C_]=T(null),[U_,J_]=T(!1),[R_,G_]=T(null),[b_,v_]=T(()=>a6()),[D0,Y_]=T(()=>I4({stored:W$(V1),...b4()})),[$_,M_]=T(!1),V_=D(V),E_=D(""),A_=D(null),$0=D(0),h_=D(new Set),j0=D(null),y_=D(new Map),I_=D(_),S_=D(Z),z0=D(null),f_=D(null),A0=D(null),W0=D(null),G0=D(null),e0=D(null),K0=D("."),x_=D(null),Y0=D({path:null,dragging:!1,startX:0,startY:0}),s_=D({path:null,dragging:!1,startX:0,startY:0}),F0=D({path:null,timer:0}),P0=D(!1),o_=D(0),E0=D(new Map),M0=D(null),F_=D(null),u_=D(null),n0=D(null),V$=D(null),S=D(null),s=D(q_),K_=D($),k_=D(j??$),m_=D(0),T_=D(Q_),m0=D(__),T$=D(N_),_$=D(null),X$=D({x:0,y:0}),B0=D(0),f$=D(null),O0=D(Y),k0=D(A),w$=D(null),q$=D(null),x0=D(E);I_.current=_,S_.current=Z,v(()=>{V_.current=V},[V]),v(()=>{s.current=q_},[q_]),v(()=>{K_.current=$},[$]),v(()=>{k_.current=j??$},[j,$]),v(()=>{T_.current=Q_},[Q_]),v(()=>{if(typeof window>"u")return;let L=()=>{Y_(I4({stored:W$(V1),...b4()}))};L();let J=()=>L(),w=()=>L(),y=(m)=>{if(!m||m.key===null||m.key===V1)L()};window.addEventListener("resize",J),window.addEventListener("focus",w),window.addEventListener("storage",y);let g=window.matchMedia?.("(pointer: coarse)"),o=window.matchMedia?.("(hover: none)"),a=(m,L_)=>{if(!m)return;if(m.addEventListener)m.addEventListener("change",L_);else if(m.addListener)m.addListener(L_)},t=(m,L_)=>{if(!m)return;if(m.removeEventListener)m.removeEventListener("change",L_);else if(m.removeListener)m.removeListener(L_)};return a(g,J),a(o,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",w),window.removeEventListener("storage",y),t(g,J),t(o,J)}},[]),v(()=>{let L=(J)=>{let w=J?.detail?.path;if(!w)return;let y=w.split("/"),g=[];for(let o=1;o<y.length;o++)g.push(y.slice(0,o).join("/"));if(g.length)B((o)=>{let a=new Set(o);a.add(".");for(let t of g)a.add(t);return a});U(w),requestAnimationFrame(()=>{let o=document.querySelector(`[data-path="${CSS.escape(w)}"]`);if(o)o.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",L),()=>window.removeEventListener("workspace-reveal-path",L)},[]),v(()=>{m0.current=__},[__]),v(()=>{T$.current=N_},[N_]),v(()=>{O0.current=Y},[Y]),v(()=>{k0.current=A},[A]),v(()=>{x0.current=E},[E]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let L=()=>v_(a6());L();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),w=()=>L();if(J?.addEventListener)J.addEventListener("change",w);else if(J?.addListener)J.addListener(w);let y=typeof MutationObserver<"u"?new MutationObserver(()=>L()):null;if(y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",w);else if(J?.removeListener)J.removeListener(w);y?.disconnect()}},[]),v(()=>{if(!A)return;let L=G0.current;if(!L)return;let J=requestAnimationFrame(()=>{try{L.focus(),L.select()}catch{}});return()=>cancelAnimationFrame(J)},[A]),v(()=>{if(!$_)return;let L=(w)=>{let y=w?.target;if(!(y instanceof Element))return;if(V$.current?.contains(y))return;if(S.current?.contains(y))return;M_(!1)},J=(w)=>{if(w?.key==="Escape")M_(!1),S.current?.focus?.()};return document.addEventListener("mousedown",L),document.addEventListener("touchstart",L,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",L),document.removeEventListener("touchstart",L),document.removeEventListener("keydown",J)}},[$_]);let Z2=async(L)=>{n(!0),F(null),C(null);try{let J=await l1(L,20000);F(J)}catch(J){F({error:J.message||"Failed to load preview"})}finally{n(!1)}};z0.current=Z2;let g0=async()=>{if(!K_.current)return;try{let L=await k2("",1,s.current),J=r6(L.root,V_.current,s.current);if(J===E_.current){l(!1);return}if(E_.current=J,A_.current=L.root,!$0.current)$0.current=requestAnimationFrame(()=>{$0.current=0,q((w)=>f4(w,A_.current)),l(!1)})}catch(L){c(L.message||"Failed to load workspace"),l(!1)}},n$=async(L)=>{if(!L)return;if(h_.current.has(L))return;h_.current.add(L);try{let J=await k2(L,1,s.current);q((w)=>x4(w,L,J.root))}catch(J){c(J.message||"Failed to load workspace")}finally{h_.current.delete(L)}};f_.current=n$;let Z0=k(()=>{let L=Y;if(!L)return".";let J=y_.current?.get(L);if(J&&J.type==="dir")return J.path;if(L==="."||!L.includes("/"))return".";let w=L.split("/");return w.pop(),w.join("/")||"."},[Y]),L$=k((L)=>{let J=L?.closest?.(".workspace-row");if(!J)return null;let w=J.dataset.path,y=J.dataset.type;if(!w)return null;if(y==="dir")return w;if(w.includes("/")){let g=w.split("/");return g.pop(),g.join("/")||"."}return"."},[]),d0=k((L)=>{return L$(L?.target||null)},[L$]),C0=k((L)=>{T_.current=L,C_(L)},[]),b0=k(()=>{let L=F0.current;if(L?.timer)clearTimeout(L.timer);F0.current={path:null,timer:0}},[]),T0=k((L)=>{if(!L||L==="."){b0();return}let J=y_.current?.get(L);if(!J||J.type!=="dir"){b0();return}if(V_.current?.has(L)){b0();return}if(F0.current?.path===L)return;b0();let w=setTimeout(()=>{F0.current={path:null,timer:0},f_.current?.(L),B((y)=>{let g=new Set(y);return g.add(L),g})},600);F0.current={path:L,timer:w}},[b0]),B$=k((L,J)=>{if(X$.current={x:L,y:J},B0.current)return;B0.current=requestAnimationFrame(()=>{B0.current=0;let w=_$.current;if(!w)return;let y=X$.current;w.style.transform=`translate(${y.x+12}px, ${y.y+12}px)`})},[]),A$=k((L)=>{if(!L)return;let w=(y_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!w)return;d_({path:L,label:w})},[]),R$=k(()=>{if(d_(null),B0.current)cancelAnimationFrame(B0.current),B0.current=0;if(_$.current)_$.current.style.transform="translate(-9999px, -9999px)"},[]),v$=k((L)=>{if(!L)return".";let J=y_.current?.get(L);if(J&&J.type==="dir")return J.path;if(L==="."||!L.includes("/"))return".";let w=L.split("/");return w.pop(),w.join("/")||"."},[]),J0=k(()=>{u(null),f("")},[]),P$=k((L)=>{if(!L)return;let w=(y_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!w||L===".")return;u(L),f(w)},[]),p0=k(async()=>{let L=k0.current;if(!L)return;let J=(R||"").trim();if(!J){J0();return}let w=y_.current?.get(L),y=(w?.name||L.split("/").pop()||L).trim();if(J===y){J0();return}try{let o=(await s1(L,J))?.path||L,a=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(J0(),c(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:L,newPath:o,type:w?.type||"file"}})),w?.type==="dir")B((t)=>{let m=new Set;for(let L_ of t)if(L_===L)m.add(o);else if(L_.startsWith(`${L}/`))m.add(`${o}${L_.slice(L.length)}`);else m.add(L_);return m});if(U(o),w?.type==="dir")F(null),n(!1),C(null);else z0.current?.(o);f_.current?.(a)}catch(g){c(g?.message||"Failed to rename file")}},[J0,R]),Q0=k(async(L)=>{let y=L||".";for(let g=0;g<50;g+=1){let a=`untitled${g===0?"":`-${g}`}.md`;try{let m=(await d1(y,a,""))?.path||(y==="."?a:`${y}/${a}`);if(y&&y!==".")B((L_)=>new Set([...L_,y]));U(m),c(null),f_.current?.(y),z0.current?.(m);return}catch(t){if(t?.status===409||t?.code==="file_exists")continue;c(t?.message||"Failed to create file");return}}c("Failed to create file (untitled name already in use).")},[]),c0=k((L)=>{if(L?.stopPropagation?.(),U_)return;let J=v$(O0.current);Q0(J)},[U_,v$,Q0]);v(()=>{if(typeof window>"u")return;let L=(J)=>{let w=J?.detail?.updates||[];if(!Array.isArray(w)||w.length===0)return;q((t)=>{let m=t;for(let L_ of w){if(!L_?.root)continue;if(!m||L_.path==="."||!L_.path)m=L_.root;else m=x4(m,L_.path,L_.root)}if(m)E_.current=r6(m,V_.current,s.current);return l(!1),m});let y=O0.current;if(Boolean(y)&&w.some((t)=>{let m=t?.path||"";if(!m||m===".")return!0;return y===m||y.startsWith(`${m}/`)||m.startsWith(`${y}/`)}))E0.current.clear();if(!y||!x0.current)return;let o=y_.current?.get(y);if(o&&o.type==="dir")return;if(w.some((t)=>{let m=t?.path||"";if(!m||m===".")return!0;return y===m||y.startsWith(`${m}/`)}))z0.current?.(y)};return window.addEventListener("workspace-update",L),()=>window.removeEventListener("workspace-update",L)},[]),j0.current=g0;let N2=D(()=>{if(typeof window>"u")return;let L=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=k_.current??K_.current,w=document.visibilityState!=="hidden"&&(J||L.matches&&K_.current);y2(w,s.current).catch(()=>{})}).current,f0=D(0),z2=D(()=>{if(f0.current)clearTimeout(f0.current);f0.current=setTimeout(()=>{f0.current=0,N2()},250)}).current;v(()=>{if(K_.current)j0.current?.();z2()},[$,j]),v(()=>{j0.current(),N2();let L=setInterval(()=>j0.current(),s5),J=L2("previewHeight",null),w=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(o_.current=w,A0.current)A0.current.style.setProperty("--preview-height",`${w}px`);let y=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),g=()=>z2();if(y.addEventListener)y.addEventListener("change",g);else if(y.addListener)y.addListener(g);return document.addEventListener("visibilitychange",g),()=>{if(clearInterval(L),$0.current)cancelAnimationFrame($0.current),$0.current=0;if(y.removeEventListener)y.removeEventListener("change",g);else if(y.removeListener)y.removeListener(g);if(document.removeEventListener("visibilitychange",g),f0.current)clearTimeout(f0.current),f0.current=0;if(x_.current)clearTimeout(x_.current),x_.current=null;y2(!1,s.current).catch(()=>{})}},[]);let F$=a_(()=>_8(G,V,q_),[G,V,q_]),u$=a_(()=>new Map(F$.map((L)=>[L.node.path,L.node])),[F$]),m$=a_(()=>o6(D0),[D0]);y_.current=u$;let i_=(Y?y_.current.get(Y):null)?.type==="dir";v(()=>{if(!Y||!i_){G_(null),M0.current=null,F_.current=null;return}let L=Y,J=`${q_?"hidden":"visible"}:${Y}`,w=E0.current,y=w.get(J);if(y?.root){w.delete(J),w.set(J,y);let a=t6(y.root,Boolean(y.truncated),b_);if(a)M0.current=a,F_.current=Y,G_({loading:!1,error:null,payload:a});return}let g=M0.current,o=F_.current;G_({loading:!0,error:null,payload:o===Y?g:null}),k2(Y,o5,q_).then((a)=>{if(O0.current!==L)return;let t={root:a?.root,truncated:Boolean(a?.truncated)};w.delete(J),w.set(J,t);while(w.size>r5){let L_=w.keys().next().value;if(!L_)break;w.delete(L_)}let m=t6(t.root,t.truncated,b_);M0.current=m,F_.current=Y,G_({loading:!1,error:null,payload:m})}).catch((a)=>{if(O0.current!==L)return;G_({loading:!1,error:a?.message||"Failed to load folder size chart",payload:o===Y?g:null})})},[Y,i_,q_,b_]);let I0=Boolean(E&&E.kind==="text"&&!i_&&(!E.size||E.size<=262144)),R0=I0?"Open in editor":E?.size>262144?"File too large to edit":"File is not editable",d$=Boolean(Y&&Y!=="."),s$=Boolean(Y&&!i_),o$=Boolean(Y&&!i_),J$=Y&&i_?t2(Y,q_):null,y0=k(()=>M_(!1),[]),V0=k(async(L)=>{y0();try{await L?.()}catch{}},[y0]);v(()=>{let L=u_.current;if(n0.current)n0.current.dispose(),n0.current=null;if(!L)return;if(L.innerHTML="",!Y||i_||!E||E.error)return;let J={path:Y,content:typeof E.text==="string"?E.text:void 0,mtime:E.mtime,size:E.size,preview:E,mode:"view"},w=_0.resolve(J)||_0.get("workspace-preview-default");if(!w)return;let y=w.mount(L,J);return n0.current=y,()=>{if(n0.current===y)y.dispose(),n0.current=null;L.innerHTML=""}},[Y,i_,E]);let U0=(L)=>{let J=L?.target;if(J instanceof Element)return J;return J?.parentElement||null},s0=(L)=>{return Boolean(L?.closest?.(".workspace-node-icon, .workspace-label-text"))},C$=D((L)=>{if(q$.current)clearTimeout(q$.current),q$.current=null;let w=U0(L)?.closest?.("[data-path]");if(!w)return;let y=w.dataset.path;if(w.dataset.type==="dir"||!y)return;if(k0.current===y)J0();S_.current?.(y)}).current,r$=D((L)=>{if(P0.current){P0.current=!1;return}let J=U0(L),w=J?.closest?.("[data-path]");if(W0.current?.focus?.(),!w)return;let y=w.dataset.path,g=w.dataset.type,o=Boolean(J?.closest?.(".workspace-caret")),a=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),t=O0.current===y,m=k0.current;if(m){if(m===y)return;J0()}let L_=g==="file"&&w$.current===y&&!o&&!a;if(t&&!o&&!a&&y!=="."&&!L_){if(q$.current)clearTimeout(q$.current);q$.current=setTimeout(()=>{q$.current=null,P$(y)},350);return}if(g==="dir"){if(w$.current=null,U(y),F(null),C(null),n(!1),!V_.current.has(y))f_.current?.(y);if(t&&!o)return;B((y$)=>{let X0=new Set(y$);if(X0.has(y))X0.delete(y);else X0.add(y);return X0})}else{w$.current=null,U(y);let H0=y_.current.get(y);if(H0)I_.current?.(H0.path,H0);z0.current?.(y)}}).current,H$=D(()=>{E_.current="",j0.current(),Array.from(V_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>f_.current?.(J))}).current,$$=D(()=>{w$.current=null,U(null),F(null),C(null),n(!1)}).current,g$=D(()=>{n_((L)=>{let J=!L;if(typeof window<"u")N0("workspaceShowHidden",String(J));return s.current=J,y2(!0,J).catch(()=>{}),E_.current="",j0.current?.(),Array.from(V_.current||[]).filter((y)=>y&&y!==".").forEach((y)=>f_.current?.(y)),J})}).current,j$=D((L)=>{if(U0(L)?.closest?.("[data-path]"))return;$$()}).current,w0=k(async(L)=>{if(!L)return;let J=L.split("/").pop()||L;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await r1(L);let y=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(O0.current===L)$$();f_.current?.(y),c(null)}catch(y){F((g)=>({...g||{},error:y.message||"Failed to delete file"}))}},[$$]),D$=k((L)=>{let J=W0.current;if(!J||!L||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(L)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),a$=k((L)=>{let J=F$;if(!J||J.length===0)return;let w=Y?J.findIndex((y)=>y.node.path===Y):-1;if(L.key==="ArrowDown"){L.preventDefault();let y=Math.min(w+1,J.length-1),g=J[y];if(!g)return;if(U(g.node.path),g.node.type!=="dir")I_.current?.(g.node.path,g.node),z0.current?.(g.node.path);else F(null),n(!1),C(null);D$(g.node.path);return}if(L.key==="ArrowUp"){L.preventDefault();let y=w<=0?0:w-1,g=J[y];if(!g)return;if(U(g.node.path),g.node.type!=="dir")I_.current?.(g.node.path,g.node),z0.current?.(g.node.path);else F(null),n(!1),C(null);D$(g.node.path);return}if(L.key==="ArrowRight"&&w>=0){let y=J[w];if(y?.node?.type==="dir"&&!V.has(y.node.path))L.preventDefault(),f_.current?.(y.node.path),B((g)=>new Set([...g,y.node.path]));return}if(L.key==="ArrowLeft"&&w>=0){let y=J[w];if(y?.node?.type==="dir"&&V.has(y.node.path))L.preventDefault(),B((g)=>{let o=new Set(g);return o.delete(y.node.path),o});return}if(L.key==="Enter"&&w>=0){L.preventDefault();let y=J[w];if(!y)return;let g=y.node.path;if(y.node.type==="dir"){if(!V_.current.has(g))f_.current?.(g);B((a)=>{let t=new Set(a);if(t.has(g))t.delete(g);else t.add(g);return t}),F(null),C(null),n(!1)}else I_.current?.(g,y.node),z0.current?.(g);return}if((L.key==="Delete"||L.key==="Backspace")&&w>=0){let y=J[w];if(!y||y.node.type==="dir")return;L.preventDefault(),w0(y.node.path);return}if(L.key==="Escape")L.preventDefault(),$$()},[$$,w0,V,F$,D$,Y]),p$=k((L)=>{let J=U0(L),w=J?.closest?.(".workspace-row");if(!w)return;let y=w.dataset.type,g=w.dataset.path;if(!g||g===".")return;if(k0.current===g)return;let o=L?.touches?.[0];if(!o)return;if(Y0.current={path:s0(J)?g:null,dragging:!1,startX:o.clientX,startY:o.clientY},y!=="file")return;if(x_.current)clearTimeout(x_.current);x_.current=setTimeout(()=>{if(x_.current=null,Y0.current?.dragging)return;w0(g)},600)},[w0]),Q=k(()=>{if(x_.current)clearTimeout(x_.current),x_.current=null;let L=Y0.current;if(L?.dragging&&L.path){let J=T_.current||Z0(),w=f$.current;if(typeof w==="function")w(L.path,J)}Y0.current={path:null,dragging:!1,startX:0,startY:0},m_.current=0,r(!1),j_(null),C0(null),b0(),R$()},[Z0,R$,C0,b0]),b=k((L)=>{let J=Y0.current,w=L?.touches?.[0];if(!w||!J?.path){if(x_.current)clearTimeout(x_.current),x_.current=null;return}let y=Math.abs(w.clientX-J.startX),g=Math.abs(w.clientY-J.startY),o=y>8||g>8;if(o&&x_.current)clearTimeout(x_.current),x_.current=null;if(!J.dragging&&o)J.dragging=!0,r(!0),j_("move"),A$(J.path);if(J.dragging){L.preventDefault(),B$(w.clientX,w.clientY);let a=document.elementFromPoint(w.clientX,w.clientY),t=L$(a)||Z0();if(T_.current!==t)C0(t);T0(t)}},[L$,Z0,A$,B$,C0,T0]),x=D((L)=>{L.preventDefault();let J=A0.current;if(!J)return;let w=L.clientY,y=o_.current||280,g=L.currentTarget;g.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let o=w,a=(m)=>{o=m.clientY;let L_=J.clientHeight-80,H0=Math.min(Math.max(y-(m.clientY-w),80),L_);J.style.setProperty("--preview-height",`${H0}px`),o_.current=H0},t=()=>{let m=J.clientHeight-80,L_=Math.min(Math.max(y-(o-w),80),m);o_.current=L_,g.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",N0("previewHeight",String(Math.round(L_))),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",t)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",t)}).current,d=D((L)=>{L.preventDefault();let J=A0.current;if(!J)return;let w=L.touches[0];if(!w)return;let y=w.clientY,g=o_.current||280,o=L.currentTarget;o.classList.add("dragging"),document.body.style.userSelect="none";let a=(m)=>{let L_=m.touches[0];if(!L_)return;m.preventDefault();let H0=J.clientHeight-80,y$=Math.min(Math.max(g-(L_.clientY-y),80),H0);J.style.setProperty("--preview-height",`${y$}px`),o_.current=y$},t=()=>{o.classList.remove("dragging"),document.body.style.userSelect="",N0("previewHeight",String(Math.round(o_.current||g))),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",t),document.removeEventListener("touchcancel",t)};document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",t),document.addEventListener("touchcancel",t)}).current,X_=async()=>{if(!Y)return;try{let L=await n1(Y);if(L.media_id)C(L.media_id)}catch(L){F((J)=>({...J||{},error:L.message||"Failed to attach"}))}},w_=async()=>{if(!Y||i_)return;await w0(Y)},P_=(L)=>{return Array.from(L?.dataTransfer?.types||[]).includes("Files")},W_=k((L)=>{if(!P_(L))return;if(L.preventDefault(),m_.current+=1,!m0.current)r(!0);j_("upload");let J=d0(L)||Z0();C0(J),T0(J)},[Z0,d0,C0,T0]),Z$=k((L)=>{if(!P_(L))return;if(L.preventDefault(),L.dataTransfer)L.dataTransfer.dropEffect="copy";if(!m0.current)r(!0);if(T$.current!=="upload")j_("upload");let J=d0(L)||Z0();if(T_.current!==J)C0(J);T0(J)},[Z0,d0,C0,T0]),g_=k((L)=>{if(!P_(L))return;if(L.preventDefault(),m_.current=Math.max(0,m_.current-1),m_.current===0)r(!1),j_(null),C0(null),b0()},[C0,b0]),h0=k(async(L,J=".")=>{let w=Array.from(L||[]);if(w.length===0)return;let y=J&&J!==""?J:".",g=y!=="."?y:"workspace root";J_(!0);try{let o=null;for(let a of w)try{o=await r2(a,y)}catch(t){let m=t?.status,L_=t?.code;if(m===409||L_==="file_exists"){let H0=a?.name||"file";if(!window.confirm(`"${H0}" already exists in ${g}. Overwrite?`))continue;o=await r2(a,y,{overwrite:!0})}else throw t}if(o?.path)w$.current=o.path,U(o.path),z0.current?.(o.path);f_.current?.(y)}catch(o){c(o.message||"Failed to upload file")}finally{J_(!1)}},[]),E$=k(async(L,J)=>{if(!L)return;let w=y_.current?.get(L);if(!w)return;let y=J&&J!==""?J:".",g=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(y===g)return;try{let a=(await o1(L,y))?.path||L;if(w.type==="dir")B((t)=>{let m=new Set;for(let L_ of t)if(L_===L)m.add(a);else if(L_.startsWith(`${L}/`))m.add(`${a}${L_.slice(L.length)}`);else m.add(L_);return m});if(U(a),w.type==="dir")F(null),n(!1),C(null);else z0.current?.(a);f_.current?.(g),f_.current?.(y)}catch(o){c(o?.message||"Failed to move entry")}},[]);f$.current=E$;let c$=k(async(L)=>{if(!P_(L))return;L.preventDefault(),m_.current=0,r(!1),j_(null),C_(null),b0();let J=Array.from(L?.dataTransfer?.files||[]);if(J.length===0)return;let w=T_.current||d0(L)||Z0();await h0(J,w)},[Z0,d0,h0]),k$=k((L)=>{if(L?.stopPropagation?.(),U_)return;let J=L?.currentTarget?.dataset?.uploadTarget||".";K0.current=J,e0.current?.click()},[U_]),t$=k(()=>{if(U_)return;let L=O0.current,J=L?y_.current?.get(L):null;K0.current=J?.type==="dir"?J.path:".",e0.current?.click()},[U_]),b$=k(()=>{V0(()=>c0(null))},[V0,c0]),r_=k(()=>{V0(()=>t$())},[V0,t$]),S0=k(()=>{V0(()=>H$())},[V0,H$]),h$=k(()=>{V0(()=>g$())},[V0,g$]),K2=k(()=>{if(!Y||!I0)return;V0(()=>S_.current?.(Y,E))},[V0,Y,I0,E]),o0=k(()=>{if(!Y||Y===".")return;V0(()=>P$(Y))},[V0,Y,P$]),i0=k(()=>{if(!Y||i_)return;V0(()=>w_())},[V0,Y,i_,w_]),v0=k(()=>{if(!Y||i_)return;V0(()=>X_())},[V0,Y,i_,X_]),O$=k(()=>{if(!J$)return;if(y0(),typeof window<"u")window.open(J$,"_blank","noopener")},[y0,J$]),Q2=k(()=>{y0(),N?.()},[y0,N]),r0=k(()=>{y0(),z?.()},[y0,z]),f2=k((L)=>{if(!L||L.button!==0)return;let J=L.currentTarget;if(!J||!J.dataset)return;let w=J.dataset.path;if(!w||w===".")return;if(k0.current===w)return;let y=U0(L);if(y?.closest?.("button, a, input, .workspace-caret"))return;if(!s0(y))return;L.preventDefault(),s_.current={path:w,dragging:!1,startX:L.clientX,startY:L.clientY};let g=(a)=>{let t=s_.current;if(!t?.path)return;let m=Math.abs(a.clientX-t.startX),L_=Math.abs(a.clientY-t.startY),H0=m>4||L_>4;if(!t.dragging&&H0)t.dragging=!0,P0.current=!0,r(!0),j_("move"),A$(t.path),B$(a.clientX,a.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(t.dragging){a.preventDefault(),B$(a.clientX,a.clientY);let y$=document.elementFromPoint(a.clientX,a.clientY),X0=L$(y$)||Z0();if(T_.current!==X0)C0(X0);T0(X0)}},o=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",o);let a=s_.current;if(a?.dragging&&a.path){let t=T_.current||Z0(),m=f$.current;if(typeof m==="function")m(a.path,t)}s_.current={path:null,dragging:!1,startX:0,startY:0},m_.current=0,r(!1),j_(null),C0(null),b0(),R$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{P0.current=!1},0)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",o)},[L$,Z0,A$,B$,R$,C0,T0,b0]),q1=k(async(L)=>{let J=Array.from(L?.target?.files||[]);if(J.length===0)return;let w=K0.current||".";if(await h0(J,w),K0.current=".",L?.target)L.target.value=""},[h0]);return O`
        <aside
            class=${`workspace-sidebar${__?" workspace-drop-active":""}`}
            data-workspace-scale=${D0}
            ref=${A0}
            onDragEnter=${W_}
            onDragOver=${Z$}
            onDragLeave=${g_}
            onDrop=${c$}
        >
            <input type="file" multiple style="display:none" ref=${e0} onChange=${q1} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${S}
                            class=${`workspace-menu-button${$_?" active":""}`}
                            onClick=${(L)=>{L.stopPropagation(),M_((J)=>!J)}}
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
                            <div class="workspace-menu-dropdown" ref=${V$} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${b$} disabled=${U_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${r_} disabled=${U_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${S0}>Refresh tree</button>
                                <button class=${`workspace-menu-item${q_?" active":""}`} role="menuitem" onClick=${h$}>
                                    ${q_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${Y&&O`<div class="workspace-menu-separator"></div>`}
                                ${Y&&!i_&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${K2} disabled=${!I0}>Open in editor</button>
                                `}
                                ${d$&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${o0}>Rename selected</button>
                                `}
                                ${o$&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${v0}>Download selected file</button>
                                `}
                                ${J$&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${O$}>Download selected folder (zip)</button>
                                `}
                                ${s$&&O`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${i0}>Delete selected file</button>
                                `}

                                ${(N||z)&&O`<div class="workspace-menu-separator"></div>`}
                                ${N&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${z&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${r0}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${c0} title="New file" disabled=${U_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${H$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${j$}>
                ${U_&&O`<div class="workspace-drop-hint">Uploading…</div>`}
                ${i&&O`<div class="workspace-loading">Loading…</div>`}
                ${z_&&O`<div class="workspace-error">${z_}</div>`}
                ${G&&O`
                    <div
                        class="workspace-tree-list"
                        ref=${W0}
                        tabIndex="0"
                        onClick=${r$}
                        onDblClick=${C$}
                        onKeyDown=${a$}
                        onTouchStart=${p$}
                        onTouchEnd=${Q}
                        onTouchMove=${b}
                        onTouchCancel=${Q}
                    >
                        ${F$.map(({node:L,depth:J})=>{let w=L.type==="dir",y=L.path===Y,g=L.path===A,o=w&&V.has(L.path),a=Q_&&L.path===Q_,t=Array.isArray(L.children)&&L.children.length>0?L.children.length:Number(L.child_count)||0;return O`
                                <div
                                    key=${L.path}
                                    class=${`workspace-row${y?" selected":""}${a?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*m$.indentPx}px`}}
                                    data-path=${L.path}
                                    data-type=${L.type}
                                    onMouseDown=${f2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${w?o?O`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:O`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${w?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${w?O`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:O`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${g?O`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${G0}
                                                value=${R}
                                                onInput=${(m)=>f(m?.target?.value||"")}
                                                onKeyDown=${(m)=>{if(m.key==="Enter")m.preventDefault(),p0();else if(m.key==="Escape")m.preventDefault(),J0()}}
                                                onBlur=${J0}
                                                onClick=${(m)=>m.stopPropagation()}
                                            />
                                        `:O`<span class="workspace-label"><span class="workspace-label-text">${L.name}</span></span>`}
                                    ${w&&!o&&t>0&&O`
                                        <span class="workspace-count">${t}</span>
                                    `}
                                    ${w&&O`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${L.path}
                                            title="Upload files to this folder"
                                            onClick=${k$}
                                            disabled=${U_}
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
            ${Y&&O`
                <div class="workspace-preview-splitter-h" onMouseDown=${x} onTouchStart=${d}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${Y}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${c0} title="New file" disabled=${U_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!i_&&O`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>I0&&S_.current?.(Y,E)}
                                    title=${R0}
                                    disabled=${!I0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${w_}
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
                            ${i_?O`
                                    <button class="workspace-download" onClick=${t$}
                                        title="Upload files to this folder" disabled=${U_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${t2(Y,q_)}
                                        title="Download folder as zip" onClick=${(L)=>L.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:O`<button class="workspace-download" onClick=${X_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${e&&O`<div class="workspace-loading">Loading preview…</div>`}
                    ${E?.error&&O`<div class="workspace-error">${E.error}</div>`}
                    ${i_&&O`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${R_?.loading&&O`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${R_?.error&&O`<div class="workspace-error">${R_.error}</div>`}
                        ${R_?.payload&&R_.payload.segments?.length>0&&O`
                            <${a5} payload=${R_.payload} />
                        `}
                        ${R_?.payload&&(!R_.payload.segments||R_.payload.segments.length===0)&&O`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${E&&!E.error&&!i_&&O`
                        <div class="workspace-preview-body" ref=${u_}></div>
                    `}
                    ${I&&O`
                        <div class="workspace-download-card">
                            <${t5} mediaId=${I} />
                        </div>
                    `}
                </div>
            `}
            ${O_&&O`
                <div class="workspace-drag-ghost" ref=${_$}>${O_.label}</div>
            `}
        </aside>
    `}var e5=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,_j=/\.(csv|tsv)$/i,$j=/\.pdf$/i,jj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,G8=/\.drawio(\.xml|\.svg|\.png)?$/i;function V8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:z,onTogglePin:K,onTogglePreview:G,previewTabs:q,onToggleDock:V,dockVisible:B}){let[Y,U]=T(null),A=D(null);v(()=>{if(!Y)return;let F=(I)=>{if(I.type==="keydown"&&I.key!=="Escape")return;U(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[Y]),v(()=>{let F=(I)=>{if(I.ctrlKey&&I.key==="Tab"){if(I.preventDefault(),!_.length)return;let C=_.findIndex((i)=>i.id===$);if(I.shiftKey){let i=_[(C-1+_.length)%_.length];j?.(i.id)}else{let i=_[(C+1)%_.length];j?.(i.id)}return}if((I.ctrlKey||I.metaKey)&&I.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(I.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Z]);let u=k((F,I)=>{if(F.button===1){F.preventDefault(),Z?.(I);return}if(F.button===0)j?.(I)},[j,Z]),R=k((F,I)=>{F.preventDefault(),U({id:I,x:F.clientX,y:F.clientY})},[]),f=k((F)=>{F.preventDefault(),F.stopPropagation()},[]),E=k((F,I)=>{F.preventDefault(),F.stopPropagation(),Z?.(I)},[Z]);if(v(()=>{if(!$||!A.current)return;let F=A.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return O`
        <div class="tab-strip" ref=${A} role="tablist">
            ${_.map((F)=>O`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(I)=>u(I,F.id)}
                    onContextMenu=${(I)=>R(I,F.id)}
                >
                    ${F.pinned&&O`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${F.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${f}
                        onClick=${(I)=>E(I,F.id)}
                        title=${F.dirty?"Unsaved changes":"Close"}
                        aria-label=${F.dirty?"Unsaved changes":`Close ${F.label}`}
                    >
                        ${F.dirty?O`<span class="tab-dirty-dot" aria-hidden="true"></span>`:O`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&O`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${B?" active":""}`}
                    onClick=${V}
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
        </div>
        ${Y&&O`
            <div class="tab-context-menu" style=${{left:Y.x+"px",top:Y.y+"px"}}>
                <button onClick=${()=>{Z?.(Y.id),U(null)}}>Close</button>
                <button onClick=${()=>{N?.(Y.id),U(null)}}>Close Others</button>
                <button onClick=${()=>{z?.(),U(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(Y.id),U(null)}}>
                    ${_.find((F)=>F.id===Y.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(Y.id)&&O`
                    <hr />
                    <button onClick=${()=>{G(Y.id),U(null)}}>
                        ${q?.has(Y.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${e5.test(Y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(Y.id),I=Y.id.split("/").pop()||"document",C="/office-viewer/?url="+encodeURIComponent(F)+"&name="+encodeURIComponent(I);window.open(C,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${_j.test(Y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let F="/csv-viewer/?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${$j.test(Y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${jj.test(Y.id)&&!G8.test(Y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let F="/image-viewer/?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${G8.test(Y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let F="/drawio/edit?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var Zj=400,v4=60,X8=220,u4="mdPreviewHeight";function Nj(){try{let _=localStorage.getItem(u4),$=_?Number(_):NaN;return Number.isFinite($)&&$>=v4?$:X8}catch{return X8}}function q8({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[z,K]=T(Nj),G=D(null),q=D(null),V=D(""),B=D(_);return B.current=_,v(()=>{let A=()=>{let R=B.current?.()||"";if(R===V.current)return;V.current=R;try{let f=t0(R,null,{sanitize:!1});N(f)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};A();let u=setInterval(A,Zj);return()=>clearInterval(u)},[]),v(()=>{if(G.current&&Z)S$(G.current).catch(()=>{})},[Z]),O`
        <div
            class="md-preview-splitter"
            onMouseDown=${(A)=>{A.preventDefault();let u=A.clientY,R=q.current?.offsetHeight||z,f=q.current?.parentElement,E=f?f.offsetHeight*0.7:500,F=A.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=(i)=>{let l=Math.min(Math.max(R-(i.clientY-u),v4),E);K(l)},C=()=>{F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(u4,String(Math.round(q.current?.offsetHeight||z)))}catch{}document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",C)}}
            onTouchStart=${(A)=>{A.preventDefault();let u=A.touches[0];if(!u)return;let R=u.clientY,f=q.current?.offsetHeight||z,E=q.current?.parentElement,F=E?E.offsetHeight*0.7:500,I=A.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let C=(l)=>{let e=l.touches[0];if(!e)return;l.preventDefault();let n=Math.min(Math.max(f-(e.clientY-R),v4),F);K(n)},i=()=>{I.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(u4,String(Math.round(q.current?.offsetHeight||z)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}}
        ></div>
        <div class="md-preview-panel" ref=${q} style=${{height:z+"px"}}>
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
    `}function L8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let z=D(_);z.current=_;let K=D($);K.current=$;let G=D(j);G.current=j;let q=D(Z);q.current=Z,v(()=>{G.current();let V=new e2((Y,U)=>z.current(Y,U),(Y)=>K.current(Y),{chatJid:N});V.connect();let B=()=>{V.reconnectIfNeeded();let Y=typeof document<"u"?document:null;if(!Y||Y.visibilityState==="visible")q.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),V.disconnect()}},[N])}function B8(){let[_,$]=T(!1),[j,Z]=T("default"),N=D(!1);v(()=>{let q=q2("notificationsEnabled",!1);if(N.current=q,$(q),typeof Notification<"u")Z(Notification.permission)},[]),v(()=>{N.current=_},[_]);let z=k(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let q=Notification.requestPermission();if(q&&typeof q.then==="function")return q;return Promise.resolve(q)}catch{return Promise.resolve("default")}},[]),K=k(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let V=await z();if(Z(V||"default"),V!=="granted"){N.current=!1,$(!1),N0("notificationsEnabled","false");return}}let q=!N.current;N.current=q,$(q),N0("notificationsEnabled",String(q))},[z]),G=k((q,V)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(q,{body:V});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:G}}var x2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function O8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[z,K]=T(!1),G=D(!1),q=D(null),V=D(!1),B=D(null),Y=D(null),U=D(0);v(()=>{G.current=z},[z]),v(()=>{Y.current=Z},[Z]),v(()=>{U.current+=1,Y.current=null,B.current=null,V.current=!1,G.current=!1,N(null),K(!1)},[j]);let A=k(async(f=null)=>{let E=U.current;try{if(f){let F=await I1(f,50,0,j);if(E!==U.current)return;N(F.posts),K(!1)}else{let F=await D2(10,null,j);if(E!==U.current)return;N(F.posts),K(F.has_more)}}catch(F){if(E!==U.current)return;console.error("Failed to load posts:",F)}},[j]),u=k(async()=>{let f=U.current;try{let E=await D2(10,null,j);if(f!==U.current)return;N((F)=>{if(!F||F.length===0)return E.posts;return x2([...E.posts,...F])}),K((F)=>F||E.has_more)}catch(E){if(f!==U.current)return;console.error("Failed to refresh timeline:",E)}},[j]),R=k(async(f={})=>{let E=U.current,F=Y.current;if(!F||F.length===0)return;if(V.current)return;let{preserveScroll:I=!0,preserveMode:C="top",allowRepeat:i=!1}=f,l=(z_)=>{if(!I){z_();return}if(C==="top")$(z_);else _(z_)},n=F.slice().sort((z_,c)=>z_.id-c.id)[0]?.id;if(!Number.isFinite(n))return;if(!i&&B.current===n)return;V.current=!0,B.current=n;try{let z_=await D2(10,n,j);if(E!==U.current)return;if(z_.posts.length>0)l(()=>{N((c)=>x2([...z_.posts,...c||[]])),K(z_.has_more)});else K(!1)}catch(z_){if(E!==U.current)return;console.error("Failed to load more posts:",z_)}finally{if(E===U.current)V.current=!1}},[j,_,$]);return v(()=>{q.current=R},[R]),{posts:Z,setPosts:N,hasMore:z,setHasMore:K,hasMoreRef:G,loadPosts:A,refreshTimeline:u,loadMore:R,loadMoreRef:q,loadingMoreRef:V,lastBeforeIdRef:B}}function Q8(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,z]=T(""),[K,G]=T({text:"",totalLines:0}),[q,V]=T(null),[B,Y]=T(null),[U,A]=T(null),u=D(null),R=D(0),f=D(!1),E=D(""),F=D(""),I=D(null),C=D(null),i=D(null),l=D(null),e=D(!1),n=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:z,agentThought:K,setAgentThought:G,pendingRequest:q,setPendingRequest:V,currentTurnId:B,setCurrentTurnId:Y,steerQueuedTurnId:U,setSteerQueuedTurnId:A,lastAgentEventRef:u,lastSilenceNoticeRef:R,isAgentRunningRef:f,draftBufferRef:E,thoughtBufferRef:F,pendingRequestRef:I,stalledPostIdRef:C,currentTurnIdRef:i,steerQueuedTurnIdRef:l,thoughtExpandedRef:e,draftExpandedRef:n}}function U8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.clientX,A=$.current||280,u=B.currentTarget;u.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let R=U,f=(F)=>{R=F.clientX;let I=Math.min(Math.max(A+(F.clientX-U),160),600);Y.style.setProperty("--sidebar-width",`${I}px`),$.current=I},E=()=>{let F=Math.min(Math.max(A+(R-U),160),600);$.current=F,u.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",N0("sidebarWidth",String(Math.round(F))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",E)}).current,z=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.touches[0];if(!U)return;let A=U.clientX,u=$.current||280,R=B.currentTarget;R.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let f=(F)=>{let I=F.touches[0];if(!I)return;F.preventDefault();let C=Math.min(Math.max(u+(I.clientX-A),160),600);Y.style.setProperty("--sidebar-width",`${C}px`),$.current=C},E=()=>{R.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.userSelect="",N0("sidebarWidth",String(Math.round($.current||u))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,K=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.clientX,A=j.current||$.current||280,u=B.currentTarget;u.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let R=U,f=(F)=>{R=F.clientX;let I=Math.min(Math.max(A+(F.clientX-U),200),800);Y.style.setProperty("--editor-width",`${I}px`),j.current=I},E=()=>{let F=Math.min(Math.max(A+(R-U),200),800);j.current=F,u.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",N0("editorWidth",String(Math.round(F))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",E)}).current,G=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.touches[0];if(!U)return;let A=U.clientX,u=j.current||$.current||280,R=B.currentTarget;R.classList.add("dragging"),document.body.style.userSelect="none";let f=(F)=>{let I=F.touches[0];if(!I)return;F.preventDefault();let C=Math.min(Math.max(u+(I.clientX-A),200),800);Y.style.setProperty("--editor-width",`${C}px`),j.current=C},E=()=>{R.classList.remove("dragging"),document.body.style.userSelect="",N0("editorWidth",String(Math.round(j.current||u))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,q=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.clientY,A=Z?.current||200,u=B.currentTarget;u.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let R=U,f=(F)=>{R=F.clientY;let I=Math.min(Math.max(A-(F.clientY-U),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${I}px`),Z)Z.current=I;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{let F=Math.min(Math.max(A-(R-U),100),window.innerHeight*0.5);if(Z)Z.current=F;u.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",N0("dockHeight",String(Math.round(F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",E)}).current,V=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.touches[0];if(!U)return;let A=U.clientY,u=Z?.current||200,R=B.currentTarget;R.classList.add("dragging"),document.body.style.userSelect="none";let f=(F)=>{let I=F.touches[0];if(!I)return;F.preventDefault();let C=Math.min(Math.max(u-(I.clientY-A),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${C}px`),Z)Z.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{R.classList.remove("dragging"),document.body.style.userSelect="",N0("dockHeight",String(Math.round(Z?.current||u))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:q,handleDockSplitterTouchStart:V}}function F8({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=T(()=>l_.getTabs()),[N,z]=T(()=>l_.getActiveId()),[K,G]=T(()=>l_.getTabs().length>0);v(()=>{return l_.onChange((C,i)=>{Z(C),z(i),G(C.length>0)})},[]);let[q,V]=T(()=>new Set),B=k((C)=>{V((i)=>{let l=new Set(i);if(l.has(C))l.delete(C);else l.add(C);return l})},[]),Y=k((C)=>{V((i)=>{if(!i.has(C))return i;let l=new Set(i);return l.delete(C),l})},[]),U=k((C,i={})=>{if(!C)return;let l={path:C,mode:"edit"};try{if(!_0.resolve(l)){if(!_0.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(n){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,n)}let e=typeof i?.label==="string"&&i.label.trim()?i.label.trim():void 0;l_.open(C,e)},[]),A=k(()=>{let C=l_.getActiveId();if(C){let i=l_.get(C);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}l_.close(C),Y(C),$.current?.(C)}},[Y]),u=k((C)=>{let i=l_.get(C);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}l_.close(C),Y(C),$.current?.(C)},[Y]),R=k((C)=>{l_.activate(C)},[]),f=k((C)=>{let i=l_.getTabs().filter((n)=>n.id!==C&&!n.pinned),l=i.filter((n)=>n.dirty).length;if(l>0){if(!window.confirm(`${l} unsaved tab${l>1?"s":""} will be closed. Continue?`))return}let e=i.map((n)=>n.id);l_.closeOthers(C),e.forEach((n)=>{Y(n),$.current?.(n)})},[Y]),E=k(()=>{let C=l_.getTabs().filter((e)=>!e.pinned),i=C.filter((e)=>e.dirty).length;if(i>0){if(!window.confirm(`${i} unsaved tab${i>1?"s":""} will be closed. Continue?`))return}let l=C.map((e)=>e.id);l_.closeAll(),l.forEach((e)=>{Y(e),$.current?.(e)})},[Y]),F=k((C)=>{l_.togglePin(C)},[]),I=k(()=>{let C=l_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return v(()=>{let C=(i)=>{let{oldPath:l,newPath:e,type:n}=i.detail||{};if(!l||!e)return;if(n==="dir"){for(let z_ of l_.getTabs())if(z_.path===l||z_.path.startsWith(`${l}/`)){let c=`${e}${z_.path.slice(l.length)}`;l_.rename(z_.id,c)}}else l_.rename(l,e)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),v(()=>{let C=(i)=>{if(l_.hasUnsaved())i.preventDefault(),i.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:N,previewTabs:q,openEditor:U,closeEditor:A,handleTabClose:u,handleTabActivate:R,handleTabCloseOthers:f,handleTabCloseAll:E,handleTabTogglePin:F,handleTabTogglePreview:B,revealInExplorer:I}}function m4(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],z=Number(N);return Number.isFinite(z)?z:$}catch{return $}}var g4=m4("warning",30000),J8=m4("finalize",120000),p4=m4("refresh",30000),H8=30000;function D8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function E8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function k8(_=30000){let[,$]=T(0);v(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function c4(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function y8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function j2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function h4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),z=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(z||N>1||K)}function w8(_,$={}){if(j2($))return null;if(h4($))return{target:"_blank",features:void 0,mode:"tab"};return{target:zj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function A8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function P8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function M8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function C8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function T2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function b8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function zj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function i4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function l4(_){return String(_||"").trim()||"web:default"}function I8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function S8(_={}){return j2(_)&&h4(_)}function Kj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Yj(_={},$={}){if(!S8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=Kj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function x8(_={}){if(!S8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,z=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let Y of N)$.clearTimeout?.(Y);N.clear()},K=()=>{Z=0,Yj({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(K)??0},q=()=>{G();for(let Y of[80,220,420]){let U=$.setTimeout?.(()=>{N.delete(U),G()},Y);if(U!=null)N.add(U)}},V=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;q()},B=$.visualViewport;return q(),$.addEventListener("focus",q),$.addEventListener("pageshow",q),$.addEventListener("resize",q),$.addEventListener("orientationchange",q),j.addEventListener("visibilitychange",V),j.addEventListener("focusin",q,!0),B?.addEventListener?.("resize",q),B?.addEventListener?.("scroll",q),()=>{z(),$.removeEventListener("focus",q),$.removeEventListener("pageshow",q),$.removeEventListener("resize",q),$.removeEventListener("orientationchange",q),j.removeEventListener("visibilitychange",V),j.removeEventListener("focusin",q,!0),B?.removeEventListener?.("resize",q),B?.removeEventListener?.("scroll",q)}}function Wj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function U$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Wj($,j)}var Gj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function T8(_){return Gj.has(String(_||"").trim())}function Vj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function f8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(Vj(_),{detail:Z})),!0}var Xj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function R8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(j2({window:j,navigator:Z}))};N();let K=Xj.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",N),()=>G.removeEventListener("change",N);if(typeof G.addListener==="function")return G.addListener(N),()=>G.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let G of K)G();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function v8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var d4="piclaw_btw_session";function qj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Lj(){let _=W$(d4);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",z=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:K==="error"?z||"BTW stream interrupted. You can retry.":z,model:null,status:K}}catch{return null}}var u8=S1,m8=T1,Bj=R1,g8=p1,p8=c1,c8=v1,n4=U$(Y$,"getAgentContext",null),Oj=U$(Y$,"getAgentModels",{current:null,models:[]}),Qj=U$(Y$,"getActiveChatAgents",{chats:[]}),h8=U$(Y$,"getChatBranches",{chats:[]}),Uj=U$(Y$,"renameChatBranch",null),Fj=U$(Y$,"pruneChatBranch",null),Jj=U$(Y$,"getAgentQueueState",{count:0}),Hj=U$(Y$,"steerAgentQueueItem",{removed:!1,queued:"steer"}),Dj=U$(Y$,"removeAgentQueueItem",{removed:!1}),Ej=U$(Y$,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});_0.register(L4);_0.register(E4);_0.register(D4);_0.register(k4);_0.register(y4);_0.register(w4);_0.register(P4);_0.register(C4);B4();_0.register(F4);_0.register(J4);function kj({locationParams:_}){let $=a_(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),j=a_(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Z=a_(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),N=a_(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():$},[$,_]),[z,K]=T("disconnected"),[G,q]=T(()=>j2()),[V,B]=T(null),[Y,U]=T(null),[A,u]=T(!1),[R,f]=T("current"),[E,F]=T([]),[I,C]=T([]),[i,l]=T(null),{agentStatus:e,setAgentStatus:n,agentDraft:z_,setAgentDraft:c,agentPlan:q_,setAgentPlan:n_,agentThought:__,setAgentThought:r,pendingRequest:N_,setPendingRequest:j_,currentTurnId:O_,setCurrentTurnId:d_,steerQueuedTurnId:Q_,setSteerQueuedTurnId:C_,lastAgentEventRef:U_,lastSilenceNoticeRef:J_,isAgentRunningRef:R_,draftBufferRef:G_,thoughtBufferRef:b_,pendingRequestRef:v_,stalledPostIdRef:D0,currentTurnIdRef:Y_,steerQueuedTurnIdRef:$_,thoughtExpandedRef:M_,draftExpandedRef:V_}=Q8(),[E_,A_]=T({}),[$0,h_]=T(null),[j0,y_]=T(null),[I_,S_]=T(!1),[z0,f_]=T(null),[A0,W0]=T([]),[G0,e0]=T([]),[K0,x_]=T(null),[Y0,s_]=T([]),[F0,P0]=T(!1),[o_,E0]=T(()=>Lj()),M0=a_(()=>A0.find((X)=>X?.chat_jid===$)||null,[A0,$]),F_=a_(()=>G0.find((X)=>X?.chat_jid===$)||M0||null,[M0,G0,$]),u_=F_?.root_chat_jid||M0?.root_chat_jid||$,n0=qj(R),[V$,S]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),s=Y0.length,K_=D(new Set),k_=D([]),m_=D(new Set),T_=D(0),m0=D({inFlight:!1,lastAttemptAt:0,turnId:null});K_.current=new Set(Y0.map((X)=>X.row_id)),k_.current=Y0;let{notificationsEnabled:T$,notificationPermission:_$,toggleNotifications:X$,notify:B0}=B8(),[f$,O0]=T(()=>new Set),[k0,w$]=T(()=>q2("workspaceOpen",!0)),q$=D(null),{editorOpen:x0,tabStripTabs:Z2,tabStripActiveId:g0,previewTabs:n$,openEditor:Z0,closeEditor:L$,handleTabClose:d0,handleTabActivate:C0,handleTabCloseOthers:b0,handleTabCloseAll:T0,handleTabTogglePin:B$,handleTabTogglePreview:A$,revealInExplorer:R$}=F8({onTabClosed:(X)=>q$.current?.(X)}),v$=D(null),J0=D(null),P$=D(null),p0=D(null),Q0=_0.getDockPanes().length>0,[c0,N2]=T(!1),f0=k(()=>N2((X)=>!X),[]),z2=k(()=>{Z0(Q4,{label:"Terminal"})},[Z0]),F$=!j&&(x0||Q0&&c0);v(()=>{let X=v$.current;if(!X)return;if(J0.current)J0.current.dispose(),J0.current=null;let W=g0;if(!W)return;let H={path:W,mode:"edit"},M=_0.resolve(H)||_0.get("editor");if(!M){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let P=M.mount(X,H);J0.current=P,P.onDirtyChange?.((Z_)=>{l_.setDirty(W,Z_)}),P.onSaveRequest?.(()=>{}),P.onClose?.(()=>{L$()});let p=l_.getViewState(W);if(p&&typeof P.restoreViewState==="function")requestAnimationFrame(()=>P.restoreViewState(p));if(typeof P.onViewStateChange==="function")P.onViewStateChange((Z_)=>{l_.saveViewState(W,Z_)});return requestAnimationFrame(()=>P.focus()),()=>{if(J0.current===P)P.dispose(),J0.current=null}},[g0,L$]),v(()=>{let X=(W)=>{let H=W.detail?.path;if(H)Z0(H)};return document.addEventListener("office-viewer:open-tab",X),document.addEventListener("drawio:open-tab",X),document.addEventListener("csv-viewer:open-tab",X),document.addEventListener("pdf-viewer:open-tab",X),document.addEventListener("image-viewer:open-tab",X),()=>{document.removeEventListener("office-viewer:open-tab",X),document.removeEventListener("drawio:open-tab",X),document.removeEventListener("csv-viewer:open-tab",X),document.removeEventListener("pdf-viewer:open-tab",X),document.removeEventListener("image-viewer:open-tab",X)}},[Z0]),v(()=>{let X=P$.current;if(p0.current)p0.current.dispose(),p0.current=null;if(!X||!Q0||!c0)return;let W=_0.getDockPanes()[0];if(!W){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let H=W.mount(X,{mode:"view"});return p0.current=H,requestAnimationFrame(()=>H.focus?.()),()=>{if(p0.current===H)H.dispose(),p0.current=null}},[Q0,c0]);let[u$,m$]=T({name:"You",avatar_url:null,avatar_background:null}),M$=D(!1),i_=D(!1),I0=D(null),R0=D($),d$=D(new Map),s$=D($),o$=D(0),J$=D(0),y0=D({}),V0=D({name:null,avatar_url:null}),U0=D({currentHashtag:null,searchQuery:null}),s0=D(null),C$=D(null),r$=D(0),H$=D(0),$$=D(0),g$=D(null),j$=D(null),w0=D(null),D$=D(null),a$=D(0),p$=D({title:null,avatarBase:null}),Q=D(null),b=k(()=>{if(Q.current)clearTimeout(Q.current),Q.current=null;l(null)},[]);k8(30000),v(()=>{return i3()},[]),v(()=>{return R8(q)},[]),v(()=>{N0("workspaceOpen",String(k0))},[k0]),v(()=>{return x8()},[]),v(()=>{return()=>{b()}},[b]),v(()=>{if(!o_){N0(d4,"");return}N0(d4,JSON.stringify({question:o_.question||"",answer:o_.answer||"",thinking:o_.thinking||"",error:o_.error||null,status:o_.status||"success"}))},[o_]),v(()=>{y0.current=E_||{}},[E_]),v(()=>{R0.current=$},[$]),v(()=>{V0.current=u$||{name:"You",avatar_url:null,avatar_background:null}},[u$]);let x=k((X,W,H=null)=>{if(typeof document>"u")return;let M=(X||"").trim()||"PiClaw";if(p$.current.title!==M){document.title=M;let h=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(h&&h.getAttribute("content")!==M)h.setAttribute("content",M);p$.current.title=M}let P=document.getElementById("dynamic-favicon");if(!P)return;let p=P.getAttribute("data-default")||P.getAttribute("href")||"/favicon.ico",Z_=W||p,H_=W?`${Z_}|${H||""}`:Z_;if(p$.current.avatarBase!==H_){let h=W?`${Z_}${Z_.includes("?")?"&":"?"}v=${H||Date.now()}`:Z_;P.setAttribute("href",h),p$.current.avatarBase=H_}},[]),d=k((X)=>{if(!X)return;F((W)=>W.includes(X)?W:[...W,X])},[]),X_=k((X)=>{F((W)=>W.filter((H)=>H!==X))},[]);q$.current=X_;let w_=k(()=>{F([])},[]),P_=k((X)=>{if(!Array.isArray(X)){F([]);return}let W=[],H=new Set;for(let M of X){if(typeof M!=="string"||!M.trim())continue;let P=M.trim();if(H.has(P))continue;H.add(P),W.push(P)}F(W)},[]),W_=k((X,W=null,H="info",M=3000)=>{b(),l({title:X,detail:W||null,kind:H||"info"}),Q.current=setTimeout(()=>{l((P)=>P?.title===X?null:P)},M)},[b]),Z$=k((X)=>{let W=y8(X,{editorOpen:x0,resolvePane:(H)=>_0.resolve(H)});if(W.kind==="open"){Z0(W.path);return}if(W.kind==="toast")W_(W.title,W.detail,W.level)},[x0,Z0,W_]),g_=k(()=>{let X=g0;if(X)d(X)},[g0,d]),h0=k((X)=>{if(!X)return;C((W)=>W.includes(X)?W:[...W,X])},[]),E$=k(async(X,W=null)=>{let H=(P)=>{P.scrollIntoView({behavior:"smooth",block:"center"}),P.classList.add("post-highlight"),setTimeout(()=>P.classList.remove("post-highlight"),2000)},M=document.getElementById("post-"+X);if(M){H(M);return}try{let P=typeof W==="string"&&W.trim()?W.trim():$,Z_=(await x1(X,P))?.thread?.[0];if(!Z_)return;m((H_)=>{if(!H_)return[Z_];if(H_.some((h)=>h.id===Z_.id))return H_;return[...H_,Z_]}),requestAnimationFrame(()=>{setTimeout(()=>{let H_=document.getElementById("post-"+X);if(H_)H(H_)},50)})}catch(P){console.error("[scrollToMessage] Failed to fetch message",X,P)}},[$]),c$=k((X)=>{C((W)=>W.filter((H)=>H!==X))},[]),k$=k(()=>{C([])},[]),t$=k((X)=>{if(!Array.isArray(X)){C([]);return}let W=[],H=new Set;for(let M of X){if(typeof M!=="string"||!M.trim())continue;let P=M.trim();if(H.has(P))continue;H.add(P),W.push(P)}C(W)},[]),b$=k((X)=>{let W=typeof X==="string"&&X.trim()?X.trim():"Could not send your message.";W_("Compose failed",W,"error",5000)},[W_]),r_=k((X={})=>{let W=Date.now();if(U_.current=W,X.running)R_.current=!0,P0((H)=>H?H:!0);if(X.clearSilence)J_.current=0},[P0]),S0=k(()=>{if(D$.current)clearTimeout(D$.current),D$.current=null;a$.current=0},[]);v(()=>()=>{S0()},[S0]);let h$=k(()=>{S0(),n((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:W,lastActivity:H,...M}=X;return M})},[S0]),K2=k((X)=>{if(!X)return;S0();let W=Date.now();a$.current=W,n({type:X.type||"active",last_activity:!0}),D$.current=setTimeout(()=>{if(a$.current!==W)return;n((H)=>{if(!H||!(H.last_activity||H.lastActivity))return H;return null})},H8)},[S0]),o0=k(()=>{R_.current=!1,P0(!1),U_.current=null,J_.current=0,G_.current="",b_.current="",v_.current=null,j$.current=null,Y_.current=null,$_.current=null,I0.current=null,m0.current={inFlight:!1,lastAttemptAt:0,turnId:null},S0(),d_(null),C_(null),M_.current=!1,V_.current=!1},[S0,d_,C_,P0]),i0=k((X)=>{if(!I8({remainingQueueCount:X,currentTurnId:Y_.current,isAgentTurnActive:F0}))return;$_.current=null,C_(null)},[F0,C_]),v0=k(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),O$=k(()=>({agentStatus:e,agentDraft:z_?{...z_}:{text:"",totalLines:0},agentPlan:q_||"",agentThought:__?{...__}:{text:"",totalLines:0},pendingRequest:N_,currentTurnId:O_,steerQueuedTurnId:Q_,isAgentTurnActive:Boolean(F0),followupQueueItems:Array.isArray(Y0)?Y0.map((X)=>({...X})):[],activeModel:$0,activeThinkingLevel:j0,supportsThinking:Boolean(I_),activeModelUsage:z0,contextUsage:K0,isAgentRunning:Boolean(R_.current),wasAgentActive:Boolean(i_.current),draftBuffer:G_.current||"",thoughtBuffer:b_.current||"",lastAgentEvent:U_.current||null,lastSilenceNotice:J_.current||0,lastAgentResponse:j$.current||null,currentTurnIdRef:Y_.current||null,steerQueuedTurnIdRef:$_.current||null,thoughtExpanded:Boolean(M_.current),draftExpanded:Boolean(V_.current),agentStatusRef:I0.current||null,silentRecovery:{...m0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[$0,z0,j0,z_,q_,e,__,K0,O_,Y0,F0,N_,Q_,I_]),Q2=k((X)=>{let W=X||v0();S0(),R_.current=Boolean(W.isAgentRunning),i_.current=Boolean(W.wasAgentActive),P0(Boolean(W.isAgentTurnActive)),U_.current=W.lastAgentEvent||null,J_.current=Number(W.lastSilenceNotice||0),G_.current=W.draftBuffer||"",b_.current=W.thoughtBuffer||"",v_.current=W.pendingRequest||null,j$.current=W.lastAgentResponse||null,Y_.current=W.currentTurnIdRef||null,$_.current=W.steerQueuedTurnIdRef||null,I0.current=W.agentStatusRef||null,m0.current=W.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},M_.current=Boolean(W.thoughtExpanded),V_.current=Boolean(W.draftExpanded),n(W.agentStatus||null),c(W.agentDraft?{...W.agentDraft}:{text:"",totalLines:0}),n_(W.agentPlan||""),r(W.agentThought?{...W.agentThought}:{text:"",totalLines:0}),j_(W.pendingRequest||null),d_(W.currentTurnId||null),C_(W.steerQueuedTurnId||null),s_(Array.isArray(W.followupQueueItems)?W.followupQueueItems.map((H)=>({...H})):[]),h_(W.activeModel||null),y_(W.activeThinkingLevel||null),S_(Boolean(W.supportsThinking)),f_(W.activeModelUsage??null),x_(W.contextUsage??null)},[S0,v0,d_,s_,P0,C_]),r0=k((X)=>{if(!X)return;if(Y_.current===X)return;Y_.current=X,m0.current={inFlight:!1,lastAttemptAt:0,turnId:X},d_(X),$_.current=null,C_(null),G_.current="",b_.current="",c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null),v_.current=null,j$.current=null,M_.current=!1,V_.current=!1},[d_,C_]),f2=k((X)=>{if(typeof document<"u"){let h=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&h)return}let W=j$.current;if(!W||!W.post)return;if(X&&W.turnId&&W.turnId!==X)return;let H=W.post;if(H.id&&g$.current===H.id)return;let M=String(H?.data?.content||"").trim();if(!M)return;g$.current=H.id||g$.current,j$.current=null;let P=M.replace(/\s+/g," ").slice(0,200),p=y0.current||{},H_=(H?.data?.agent_id?p[H.data.agent_id]:null)?.name||"Pi";B0(H_,P)},[B0]),q1=k(async(X,W)=>{if(X!=="thought"&&X!=="draft")return;let H=Y_.current;if(X==="thought"){if(M_.current=W,H)try{await p8(H,"thought",W)}catch(M){console.warn("Failed to update thought visibility:",M)}if(!W)return;try{let M=H?await g8(H,"thought"):null;if(M?.text)b_.current=M.text;r((P)=>({...P||{text:"",totalLines:0},fullText:b_.current||P?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:P?.totalLines||0}))}catch(M){console.warn("Failed to fetch full thought:",M)}return}if(V_.current=W,H)try{await p8(H,"draft",W)}catch(M){console.warn("Failed to update draft visibility:",M)}if(!W)return;try{let M=H?await g8(H,"draft"):null;if(M?.text)G_.current=M.text;c((P)=>({...P||{text:"",totalLines:0},fullText:G_.current||P?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:P?.totalLines||0}))}catch(M){console.warn("Failed to fetch full draft:",M)}},[]),L=D(null),J=k(()=>{let X=s0.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);L.current=J;let w=k((X)=>{let W=s0.current;if(!W||typeof X!=="function"){X?.();return}let{currentHashtag:H,searchQuery:M}=U0.current||{},P=!(M&&!H),p=P?W.scrollHeight-W.scrollTop:W.scrollTop;X(),requestAnimationFrame(()=>{let Z_=s0.current;if(!Z_)return;if(P){let H_=Math.max(Z_.scrollHeight-p,0);Z_.scrollTop=H_}else{let H_=Math.max(Z_.scrollHeight-Z_.clientHeight,0),h=Math.min(p,H_);Z_.scrollTop=h}})},[]),y=k((X)=>{let W=s0.current;if(!W||typeof X!=="function"){X?.();return}let H=W.scrollTop;X(),requestAnimationFrame(()=>{let M=s0.current;if(!M)return;let P=Math.max(M.scrollHeight-M.clientHeight,0);M.scrollTop=Math.min(H,P)})},[]),g="Queued as a follow-up (one-at-a-time).",o="⁣",a=k((X)=>{if(!X||!Array.isArray(X))return X;let W=K_.current,H=new Set(W),M=X.filter((P)=>{if(H.has(P?.id))return!1;if(P?.data?.is_bot_message){let p=P?.data?.content;if(p===g||p===o)return!1}return!0});return M.length===X.length?X:M},[]),{posts:t,setPosts:m,hasMore:L_,setHasMore:H0,hasMoreRef:y$,loadPosts:X0,refreshTimeline:u0,loadMore:i8,loadMoreRef:L1}=O8({preserveTimelineScroll:w,preserveTimelineScrollTop:y,chatJid:$}),Y2=a_(()=>a(t),[t,Y0,a]),R2=k(()=>{let X=D0.current;if(!X)return;m((W)=>W?W.filter((H)=>H.id!==X):W),D0.current=null},[m]),{handleSplitterMouseDown:l8,handleSplitterTouchStart:n8,handleEditorSplitterMouseDown:d8,handleEditorSplitterTouchStart:s8,handleDockSplitterMouseDown:o8,handleDockSplitterTouchStart:r8}=U8({appShellRef:C$,sidebarWidthRef:r$,editorWidthRef:H$,dockHeightRef:$$}),s4=k(()=>{if(!R_.current)return;R_.current=!1,J_.current=0,U_.current=null,Y_.current=null,d_(null),M_.current=!1,V_.current=!1;let X=(G_.current||"").trim();if(G_.current="",b_.current="",c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null),v_.current=null,j$.current=null,!X){n({type:"error",title:"Response stalled - No content received"});return}let H=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,M=Date.now(),P=new Date().toISOString(),p={id:M,timestamp:P,data:{type:"agent_response",content:H,agent_id:"default",is_local_stall:!0}};D0.current=M,m((Z_)=>Z_?x2([...Z_,p]):[p]),L.current?.(),n(null)},[d_]);v(()=>{U0.current={currentHashtag:V,searchQuery:Y}},[V,Y]);let p_=k(()=>{let X=++T_.current,W=$;Jj(W).then((H)=>{if(X!==T_.current)return;if(R0.current!==W)return;let M=m_.current,P=Array.isArray(H?.items)?H.items.map((p)=>({...p})).filter((p)=>!M.has(p.row_id)):[];if(P.length){s_((p)=>{if(p.length===P.length&&p.every((Z_,H_)=>Z_.row_id===P[H_].row_id))return p;return P});return}M.clear(),i0(0),s_((p)=>p.length===0?p:[])}).catch(()=>{if(X!==T_.current)return;if(R0.current!==W)return;s_((H)=>H.length===0?H:[])})},[i0,$,s_]),N$=k(async()=>{let X=$;try{let W=await n4(X);if(R0.current!==X)return;if(W)x_(W)}catch(W){if(R0.current!==X)return;console.warn("Failed to fetch agent context:",W)}},[$]),z$=k(async()=>{let X=$;try{let W=await c8(X);if(R0.current!==X)return null;if(!W||W.status!=="active"||!W.data){if(i_.current){let{currentHashtag:P,searchQuery:p}=U0.current||{};if(!P&&!p)u0()}return i_.current=!1,o0(),I0.current=null,n(null),c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null),v_.current=null,W??null}i_.current=!0;let H=W.data;I0.current=H;let M=H.turn_id||H.turnId;if(M)r0(M);if(r_({running:!0,clearSilence:!0}),h$(),n(H),W.thought&&W.thought.text)r((P)=>{if(P&&P.text&&P.text.length>=W.thought.text.length)return P;return b_.current=W.thought.text,{text:W.thought.text,totalLines:W.thought.totalLines||0}});if(W.draft&&W.draft.text)c((P)=>{if(P&&P.text&&P.text.length>=W.draft.text.length)return P;return G_.current=W.draft.text,{text:W.draft.text,totalLines:W.draft.totalLines||0}});return W}catch(W){return console.warn("Failed to fetch agent status:",W),null}},[o0,h$,r_,u0,r0]),B1=k(async()=>{if(!R_.current)return null;if(v_.current)return null;let X=Y_.current||null,W=m0.current,H=Date.now();if(W.inFlight)return null;if(W.turnId===X&&H-W.lastAttemptAt<p4)return null;W.inFlight=!0,W.lastAttemptAt=H,W.turnId=X;try{let{currentHashtag:M,searchQuery:P}=U0.current||{};if(!M&&!P)await u0();return await p_(),await z$()}finally{W.inFlight=!1}},[z$,p_,u0]);v(()=>{let X=Math.min(1000,Math.max(100,Math.floor(g4/2))),W=setInterval(()=>{if(!R_.current)return;if(v_.current)return;let H=U_.current;if(!H)return;let M=Date.now(),P=M-H,p=P2(I0.current);if(P>=J8){if(!p)n({type:"waiting",title:"Re-syncing after a quiet period…"});B1();return}if(P>=g4){if(M-J_.current>=p4){if(!p){let Z_=Math.floor(P/1000);n({type:"waiting",title:`Waiting for model… No events for ${Z_}s`})}J_.current=M,B1()}}},X);return()=>clearInterval(W)},[B1]);let a8=k((X)=>{if(K(X),X!=="connected"){n(null),c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null),v_.current=null,o0();return}if(!M$.current){M$.current=!0,z$(),N$();return}let{currentHashtag:W,searchQuery:H}=U0.current;if(!W&&!H)u0();z$(),p_(),N$()},[o0,u0,z$,p_,N$]),t8=k(async(X)=>{B(X),m(null),await X0(X)},[X0]),e8=k(async()=>{B(null),U(null),m(null),await X0()},[X0]),_9=k(async(X,W=R)=>{if(!X||!X.trim())return;let H=W==="root"||W==="all"?W:"current";f(H),U(X.trim()),B(null),m(null);try{let M=await u8(X.trim(),50,0,$,H,u_);m(M.results),H0(!1)}catch(M){console.error("Failed to search:",M),m([])}},[$,u_,R]),$9=k(()=>{u(!0),U(null),B(null),f("current"),m([])},[]),j9=k(()=>{u(!1),U(null),X0()},[X0]),wj=k(()=>{},[]),Z9=k(async(X)=>{if(!X)return;let W=X.id,H=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():$,M=Y2?.filter((p)=>p?.data?.thread_id===W&&p?.id!==W).length||0;if(M>0){if(!window.confirm(`Delete this message and its ${M} replies?`))return}let P=(p)=>{if(!p.length)return;O0((H_)=>{let h=new Set(H_);return p.forEach((B_)=>h.add(B_)),h}),setTimeout(()=>{if(y(()=>{m((H_)=>H_?H_.filter((h)=>!p.includes(h.id)):H_)}),O0((H_)=>{let h=new Set(H_);return p.forEach((B_)=>h.delete(B_)),h}),y$.current)L1.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let p=await m8(W,M>0,H);if(p?.ids?.length)P(p.ids)}catch(p){let Z_=p?.message||"";if(M===0&&Z_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let h=await m8(W,!0,H);if(h?.ids?.length)P(h.ids);return}console.error("Failed to delete post:",p),alert(`Failed to delete message: ${Z_}`)}},[$,Y2,y]),o4=k(async()=>{try{let X=await Bj();A_(D8(X));let W=X?.user||{};m$((M)=>{let P=typeof W.name==="string"&&W.name.trim()?W.name.trim():"You",p=typeof W.avatar_url==="string"?W.avatar_url.trim():null,Z_=typeof W.avatar_background==="string"&&W.avatar_background.trim()?W.avatar_background.trim():null;if(M.name===P&&M.avatar_url===p&&M.avatar_background===Z_)return M;return{name:P,avatar_url:p,avatar_background:Z_}});let H=(X?.agents||[]).find((M)=>M.id==="default");x(H?.name,H?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=$,W=await n4(X);if(R0.current!==X)return;if(W)x_(W)}catch{}},[x,$]);v(()=>{o4();let X=L2("sidebarWidth",null),W=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(r$.current=W,C$.current)C$.current.style.setProperty("--sidebar-width",`${W}px`)},[o4]);let O1=F0||e!==null,r4=k((X)=>{if(!X||typeof X!=="object")return;let W=X.agent_id;if(!W)return;let{agent_name:H,agent_avatar:M}=X;if(!H&&M===void 0)return;let P=y0.current?.[W]||{id:W},p=P.name||null,Z_=P.avatar_url??P.avatarUrl??P.avatar??null,H_=!1,h=!1;if(H&&H!==P.name)p=H,h=!0;if(M!==void 0){let B_=typeof M==="string"?M.trim():null,t_=typeof Z_==="string"?Z_.trim():null,D_=B_||null;if(D_!==(t_||null))Z_=D_,H_=!0}if(!h&&!H_)return;if(A_((B_)=>{let D_={...B_[W]||{id:W}};if(h)D_.name=p;if(H_)D_.avatar_url=Z_;return{...B_,[W]:D_}}),W==="default")x(p,Z_,H_?Date.now():null)},[x]),a4=k((X)=>{if(!X||typeof X!=="object")return;let W=X.user_name??X.userName,H=X.user_avatar??X.userAvatar,M=X.user_avatar_background??X.userAvatarBackground;if(W===void 0&&H===void 0&&M===void 0)return;m$((P)=>{let p=typeof W==="string"&&W.trim()?W.trim():P.name||"You",Z_=H===void 0?P.avatar_url:typeof H==="string"&&H.trim()?H.trim():null,H_=M===void 0?P.avatar_background:typeof M==="string"&&M.trim()?M.trim():null;if(P.name===p&&P.avatar_url===Z_&&P.avatar_background===H_)return P;return{name:p,avatar_url:Z_,avatar_background:H_}})},[]),Q1=k((X)=>{if(!X||typeof X!=="object")return;let W=X.model??X.current;if(W!==void 0)h_(W);if(X.thinking_level!==void 0)y_(X.thinking_level??null);if(X.supports_thinking!==void 0)S_(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)f_(X.provider_usage??null)},[]),U2=k(()=>{let X=$;Oj(X).then((W)=>{if(R0.current!==X)return;if(W)Q1(W)}).catch(()=>{})},[Q1,$]),a0=k(()=>{Qj().then((X)=>{let W=Array.isArray(X?.chats)?X.chats.filter((H)=>H&&typeof H.agent_name==="string"&&H.agent_name.trim()):[];W0(W)}).catch(()=>{})},[]),l0=k(()=>{h8(u_).then((X)=>{let W=Array.isArray(X?.chats)?X.chats.filter((H)=>H&&typeof H.chat_jid==="string"&&typeof H.agent_name==="string"):[];e0(W)}).catch(()=>{})},[u_]),N9=k((X)=>{let W=X?.row_id;if(W==null)return;m_.current.add(W),s_((H)=>H.filter((M)=>M?.row_id!==W)),Hj(W,l4($)).then(()=>{p_()}).catch((H)=>{console.warn("[queue] Failed to steer queued item:",H),W_("Failed to steer message","The queued message could not be sent as steering.","warning"),m_.current.delete(W),p_()})},[$,p_,s_,W_]),z9=k((X)=>{let W=X?.row_id;if(W==null)return;let H=k_.current.filter((M)=>M?.row_id!==W).length;m_.current.add(W),i0(H),s_((M)=>M.filter((P)=>P?.row_id!==W)),Dj(W,l4($)).then(()=>{p_()}).catch((M)=>{console.warn("[queue] Failed to remove queued item:",M),W_("Failed to remove message","The queued message could not be removed.","warning"),m_.current.delete(W),p_()})},[i0,$,p_,s_,W_]),U1=k((X)=>{if(!X||typeof X!=="object")return;if(a0(),l0(),X?.queued==="followup"||X?.queued==="steer"){p_();return}let W=X?.command;if(W&&typeof W==="object"&&(W?.queued_followup||W?.queued_steer))p_()},[a0,l0,p_]),F1=k(()=>{if(w0.current)w0.current.abort(),w0.current=null;E0(null)},[]),v2=k(async(X)=>{let W=String(X||"").trim();if(!W)return W_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(w0.current)w0.current.abort();let H=new AbortController;w0.current=H,E0({question:W,answer:"",thinking:"",error:null,model:null,status:"running"});try{let M=await Ej(W,{signal:H.signal,chatJid:_6($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(P,p)=>{if(P==="side_prompt_start")E0((Z_)=>Z_?{...Z_,status:"running"}:Z_)},onThinkingDelta:(P)=>{E0((p)=>p?{...p,thinking:`${p.thinking||""}${P||""}`}:p)},onTextDelta:(P)=>{E0((p)=>p?{...p,answer:`${p.answer||""}${P||""}`}:p)}});if(w0.current!==H)return!0;E0((P)=>P?{...P,answer:M?.result||P.answer||"",thinking:M?.thinking||P.thinking||"",model:M?.model||null,status:"success",error:null}:P)}catch(M){if(H.signal.aborted)return!0;E0((P)=>P?{...P,status:"error",error:M?.payload?.error||M?.message||"BTW request failed."}:P)}finally{if(w0.current===H)w0.current=null}return!0},[$,W_]),K9=k(async({content:X})=>{let W=e3(X);if(!W)return!1;if(W.type==="help")return W_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(W.type==="clear")return F1(),W_("BTW cleared","Closed the side conversation panel.","info"),!0;if(W.type==="ask")return await v2(W.question),!0;return!1},[F1,v2,W_]),Y9=k(()=>{if(o_?.question)v2(o_.question)},[o_,v2]),W9=k(async()=>{let X=Z6(o_);if(!X)return;try{let W=await V2("default",X,null,[],O1?"queue":null,$);U1(W),W_(W?.queued==="followup"?"BTW queued":"BTW injected",W?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(W){W_("BTW inject failed",W?.message||"Could not inject BTW answer into chat.","warning")}},[o_,U1,O1,W_]),F2=k(()=>{U2(),a0(),l0(),p_(),N$()},[U2,a0,l0,p_,N$]);v(()=>{F2();let X=setInterval(()=>{U2(),a0(),l0(),p_()},60000);return()=>clearInterval(X)},[F2,U2,a0,l0,p_]),v(()=>{l0()},[l0]),v(()=>{let X=!1;if(m(null),V)return X0(V),()=>{X=!0};if(Y)return u8(Y,50,0,$,R,u_).then((W)=>{if(X)return;m(W.results),H0(!1)}).catch((W)=>{if(X)return;console.error("Failed to search:",W),m([]),H0(!1)}),()=>{X=!0};return X0(),()=>{X=!0}},[$,V,Y,R,u_,X0,H0,m]),v(()=>{let X=s$.current||$;d$.current.set(X,O$())},[$,O$]),v(()=>{let X=s$.current||$;if(X===$)return;d$.current.set(X,O$()),s$.current=$,m_.current.clear(),Q2(d$.current.get($)||null),p_(),z$(),N$()},[$,z$,N$,p_,Q2,O$]);let G9=k(()=>{let{currentHashtag:X,searchQuery:W}=U0.current||{};if(!X&&!W)u0();F2()},[F2,u0]),J1=k((X,W)=>{let H=W?.turn_id,M=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null,p=M?M===$:X==="connected"||X==="workspace_update";if(p)r4(W),a4(W);if(X==="ui_theme"){l3(W);return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))h$()}if(X==="connected"){n(null),c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null),v_.current=null,o0();let h=$;c8(h).then((D_)=>{if(R0.current!==h)return;if(!D_||D_.status!=="active"||!D_.data)return;let W2=D_.data,t4=W2.turn_id||W2.turnId;if(t4)r0(t4);if(r_({clearSilence:!0}),K2(W2),D_.thought&&D_.thought.text)b_.current=D_.thought.text,r({text:D_.thought.text,totalLines:D_.thought.totalLines||0});if(D_.draft&&D_.draft.text)G_.current=D_.draft.text,c({text:D_.draft.text,totalLines:D_.draft.totalLines||0})}).catch((D_)=>{console.warn("Failed to fetch agent status:",D_)});let{currentHashtag:B_,searchQuery:t_}=U0.current||{};if(!B_&&!t_)u0();F2();return}if(X==="agent_status"){if(!p){if(W?.type==="done"||W?.type==="error")a0(),l0();return}if(W.type==="done"||W.type==="error"){if(H&&Y_.current&&H!==Y_.current)return;if(W.type==="done"){f2(H||Y_.current);let{currentHashtag:h,searchQuery:B_}=U0.current||{};if(!h&&!B_)u0();if(W.context_usage)x_(W.context_usage)}if(i_.current=!1,o0(),m_.current.clear(),a0(),p_(),c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null),W.type==="error")n({type:"error",title:W.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(H)r0(H);if(r_({running:!0,clearSilence:!0}),W.type==="thinking")G_.current="",b_.current="",c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0});I0.current=W,n((h)=>{if(h&&h.type===W.type&&h.title===W.title)return h;return W})}return}if(X==="agent_steer_queued"){if(!p)return;if(H&&Y_.current&&H!==Y_.current)return;let h=H||Y_.current;if(!h)return;$_.current=h,C_(h);return}if(X==="agent_followup_queued"){if(!p)return;let h=W?.row_id,B_=W?.content;if(h!=null&&typeof B_==="string"&&B_.trim())s_((t_)=>{if(t_.some((D_)=>D_?.row_id===h))return t_;return[...t_,{row_id:h,content:B_,timestamp:W?.timestamp||null,thread_id:W?.thread_id??null}]});p_();return}if(X==="agent_followup_consumed"){if(!p)return;let h=W?.row_id;if(h!=null){let B_=k_.current.filter((t_)=>t_.row_id!==h).length;i0(B_),s_((t_)=>t_.filter((D_)=>D_.row_id!==h))}p_(),u0();return}if(X==="agent_followup_removed"){if(!p)return;let h=W?.row_id;if(h!=null){let B_=k_.current.filter((t_)=>t_.row_id!==h).length;m_.current.add(h),i0(B_),s_((t_)=>t_.filter((D_)=>D_.row_id!==h))}p_();return}if(X==="agent_draft_delta"){if(!p)return;if(H&&Y_.current&&H!==Y_.current)return;if(H&&!Y_.current)r0(H);if(r_({running:!0,clearSilence:!0}),W?.reset)G_.current="";if(W?.delta)G_.current+=W.delta;let h=Date.now();if(!o$.current||h-o$.current>=100){o$.current=h;let B_=G_.current,t_=c4(B_);if(V_.current)c((D_)=>({text:D_?.text||"",totalLines:t_,fullText:B_}));else c({text:B_,totalLines:t_})}return}if(X==="agent_draft"){if(!p)return;if(H&&Y_.current&&H!==Y_.current)return;if(H&&!Y_.current)r0(H);r_({running:!0,clearSilence:!0});let h=W.text||"",B_=W.mode||(W.kind==="plan"?"replace":"append"),t_=Number.isFinite(W.total_lines)?W.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(W.kind==="plan")if(B_==="replace")n_(h);else n_((D_)=>(D_||"")+h);else if(!V_.current)G_.current=h,c({text:h,totalLines:t_});return}if(X==="agent_thought_delta"){if(!p)return;if(H&&Y_.current&&H!==Y_.current)return;if(H&&!Y_.current)r0(H);if(r_({running:!0,clearSilence:!0}),W?.reset)b_.current="";if(typeof W?.delta==="string")b_.current+=W.delta;let h=Date.now();if(M_.current&&(!J$.current||h-J$.current>=100)){J$.current=h;let B_=b_.current;r((t_)=>({text:t_?.text||"",totalLines:c4(B_),fullText:B_}))}return}if(X==="agent_thought"){if(!p)return;if(H&&Y_.current&&H!==Y_.current)return;if(H&&!Y_.current)r0(H);r_({running:!0,clearSilence:!0});let h=W.text||"",B_=Number.isFinite(W.total_lines)?W.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!M_.current)b_.current=h,r({text:h,totalLines:B_});return}if(X==="model_changed"){if(!p)return;if(W?.model!==void 0)h_(W.model);if(W?.thinking_level!==void 0)y_(W.thinking_level??null);if(W?.supports_thinking!==void 0)S_(Boolean(W.supports_thinking));let h=$;n4(h).then((B_)=>{if(R0.current!==h)return;if(B_)x_(B_)}).catch(()=>{});return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:W}));return}if(T8(X)){if(!p)return;if(f8(X,W),X==="extension_ui_notify"&&typeof W?.message==="string")W_(W.message,null,W?.type||"info");if(X==="extension_ui_error"&&typeof W?.error==="string")W_("Extension UI error",W.error,"error",5000);return}let{currentHashtag:Z_,searchQuery:H_}=U0.current;if(X==="agent_response"){if(!p)return;R2(),j$.current={post:W,turnId:Y_.current}}if(!Z_&&!H_&&p&&(X==="new_post"||X==="new_reply"||X==="agent_response"))m((h)=>{if(!h)return[W];if(h.some((B_)=>B_.id===W.id))return h;return[...h,W]}),L.current?.();if(X==="interaction_updated"){if(!p)return;m((h)=>{if(!h)return h;if(!h.some((B_)=>B_.id===W.id))return h;return h.map((B_)=>B_.id===W.id?W:B_)})}if(X==="interaction_deleted"){if(!p)return;let h=W?.ids||[];if(h.length){y(()=>{m((D_)=>D_?D_.filter((W2)=>!h.includes(W2.id)):D_)});let{currentHashtag:B_,searchQuery:t_}=U0.current;if(y$.current&&!B_&&!t_)L1.current?.({preserveScroll:!0,preserveMode:"top"})}}},[o0,h$,$,L1,r_,f2,y,a0,l0,u0,R2,r0,K2,r4,a4,U2,p_,s_]);v(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=J1,X.reset=()=>{R2(),o0(),n(null),c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null)},X.finalize=()=>s4(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[o0,s4,J1,R2]),L8({handleSseEvent:J1,handleConnectionStatusChange:a8,loadPosts:X0,onWake:G9,chatJid:$}),v(()=>{if(!Y2||Y2.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let W=X.slice(5);E$(W),history.replaceState(null,"",location.pathname+location.search)},[Y2,E$]);let H1=e!==null;v(()=>{if(z!=="connected")return;let W=setInterval(()=>{let{currentHashtag:H,searchQuery:M}=U0.current||{},P=!H&&!M;if(H1){if(P)u0();p_(),z$(),N$()}else{if(P)u0();z$(),N$()}},H1?15000:60000);return()=>clearInterval(W)},[z,H1,z$,N$,p_,u0]),v(()=>{return v8(()=>{z$(),N$(),p_()})},[z$,N$,p_]);let V9=k(()=>{w$((X)=>!X)},[]),X9=k((X)=>{if(typeof window>"u")return;let W=String(X||"").trim();if(!W||W===$)return;let H=T2(window.location.href,W,{chatOnly:j});window.location.assign(H)},[j,$]),q9=k(async()=>{if(typeof window>"u"||!F_?.chat_jid)return;let X=F_.agent_name||"",W=F_.display_name||"",H=window.prompt("Branch display name",W);if(H===null)return;let M=window.prompt("Agent handle (without @)",X);if(M===null)return;try{let P=await Uj(F_.chat_jid,{displayName:H,agentName:M});await Promise.allSettled([a0(),l0()]);let p=P?.branch?.agent_name||String(M||"").trim()||X;W_("Branch renamed",`This chat is now @${p}.`,"info",3500)}catch(P){let p=P instanceof Error?P.message:String(P||"Could not rename branch.");W_("Could not rename branch",p||"Could not rename branch.","warning",5000)}},[F_,a0,l0,W_]),L9=k(async()=>{if(typeof window>"u"||!F_?.chat_jid)return;if(F_.chat_jid===(F_.root_chat_jid||F_.chat_jid)){W_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let W=F_.display_name||`@${F_.agent_name||F_.chat_jid}`;if(!window.confirm(`Prune ${W}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await Fj(F_.chat_jid),await Promise.allSettled([a0(),l0()]);let M=F_.root_chat_jid||"web:default";W_("Branch pruned",`${W} has been archived.`,"info",3000);let P=T2(window.location.href,M,{chatOnly:j});window.location.assign(P)}catch(M){let P=M instanceof Error?M.message:String(M||"Could not prune branch.");W_("Could not prune branch",P||"Could not prune branch.","warning",5000)}},[j,F_,a0,l0,W_]);v(()=>{if(!Z||typeof window>"u")return;let X=!1;return(async()=>{try{S({status:"running",message:"Preparing a new chat branch…"});let W=await s2(N);if(X)return;let H=W?.branch,M=typeof H?.chat_jid==="string"&&H.chat_jid.trim()?H.chat_jid.trim():null;if(!M)throw Error("Branch fork did not return a chat id.");let P=T2(window.location.href,M,{chatOnly:!0});window.location.replace(P)}catch(W){if(X)return;S({status:"error",message:i4(W)})}})(),()=>{X=!0}},[Z,N]);let B9=k(async()=>{if(typeof window>"u"||G)return;let X=w8($);if(!X){W_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let H=b8(window.location.href,$,{chatOnly:!0});if(!window.open(H,X.target))W_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let W=A8(X);if(!W){W_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}P8(W,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let M=(await s2($))?.branch,P=typeof M?.chat_jid==="string"&&M.chat_jid.trim()?M.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");try{let Z_=await f1();W0(Array.isArray(Z_?.chats)?Z_.chats:[])}catch{}try{let Z_=await h8(u_);e0(Array.isArray(Z_?.chats)?Z_.chats:[])}catch{}let p=T2(window.location.href,P,{chatOnly:!0});M8(W,p)}catch(H){C8(W),W_("Could not open branch window",i4(H),"error",5000)}},[$,u_,G,W_]);v(()=>{if(!x0)return;if(typeof window>"u")return;let X=C$.current;if(!X)return;if(!H$.current){let W=L2("editorWidth",null),H=r$.current||280;H$.current=Number.isFinite(W)?W:H}if(X.style.setProperty("--editor-width",`${H$.current}px`),!$$.current){let W=L2("dockHeight",null);$$.current=Number.isFinite(W)?W:200}X.style.setProperty("--dock-height",`${$$.current}px`)},[x0]),v(()=>{if(!Q0||j)return;let X=(W)=>{if(W.ctrlKey&&W.key==="`")W.preventDefault(),f0()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[f0,Q0,j]);let O9=Boolean(Q_&&Q_===(e?.turn_id||O_));if(Z)return O`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${V$.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${V$.message}</p>
                    </div>
                </div>
            </div>
        `;return O`
        <div class=${`app-shell${k0?"":" workspace-collapsed"}${x0?" editor-open":""}${j?" chat-only":""}`} ref=${C$}>
            ${!j&&O`
                <${W8}
                    onFileSelect=${d}
                    visible=${k0}
                    active=${k0||x0}
                    onOpenEditor=${Z0}
                    onOpenTerminalTab=${z2}
                    onToggleTerminal=${Q0?f0:void 0}
                    terminalVisible=${Boolean(Q0&&c0)}
                />
                <button
                    class=${`workspace-toggle-tab${k0?" open":" closed"}`}
                    onClick=${V9}
                    title=${k0?"Hide workspace":"Show workspace"}
                    aria-label=${k0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${l8} onTouchStart=${n8}></div>
            `}
            ${F$&&O`
                <div class="editor-pane-container">
                    ${x0&&O`
                        <${V8}
                            tabs=${Z2}
                            activeId=${g0}
                            onActivate=${C0}
                            onClose=${d0}
                            onCloseOthers=${b0}
                            onCloseAll=${T0}
                            onTogglePin=${B$}
                            onTogglePreview=${A$}
                            previewTabs=${n$}
                            onToggleDock=${Q0?f0:void 0}
                            dockVisible=${Q0&&c0}
                        />
                    `}
                    ${x0&&O`<div class="editor-pane-host" ref=${v$}></div>`}
                    ${x0&&g0&&n$.has(g0)&&O`
                        <${q8}
                            getContent=${()=>J0.current?.getContent?.()}
                            path=${g0}
                            onClose=${()=>A$(g0)}
                        />
                    `}
                    ${Q0&&c0&&O`<div class="dock-splitter" onMouseDown=${o8} onTouchStart=${r8}></div>`}
                    ${Q0&&O`<div class=${`dock-panel${c0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${f0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${P$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${d8} onTouchStart=${s8}></div>
            `}
            <div class="container">
                ${Y&&E8()&&O`<div class="search-results-spacer"></div>`}
                ${j&&O`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${F_?.display_name||F_?.agent_name?`@${F_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${F_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${G0.length>1&&O`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(X)=>X9(X.currentTarget.value)}
                                    >
                                        ${G0.map((X)=>O`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${`@${X.agent_name}${X.display_name?` — ${X.display_name}`:""}${X.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${F_?.chat_jid&&O`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${q9}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${F_?.chat_jid&&F_.chat_jid!==(F_.root_chat_jid||F_.chat_jid)&&O`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${L9}
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
                ${(V||Y)&&O`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${e8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${V?`#${V}`:`Search: ${Y} · ${n0}`}</span>
                    </div>
                `}
                <${P6}
                    posts=${Y2}
                    hasMore=${L_}
                    onLoadMore=${i8}
                    timelineRef=${s0}
                    onHashtagClick=${t8}
                    onMessageRef=${h0}
                    onScrollToMessage=${E$}
                    onFileRef=${Z$}
                    onPostClick=${void 0}
                    onDeletePost=${Z9}
                    emptyMessage=${V?`No posts with #${V}`:Y?`No results for "${Y}"`:void 0}
                    agents=${E_}
                    user=${u$}
                    reverse=${!(Y&&!V)}
                    removingPostIds=${f$}
                    searchQuery=${Y}
                />
                <${X6}
                    status=${e}
                    draft=${z_}
                    plan=${q_}
                    thought=${__}
                    pendingRequest=${N_}
                    intent=${i}
                    turnId=${O_}
                    steerQueued=${O9}
                    onPanelToggle=${q1}
                />
                <${N6}
                    session=${o_}
                    onClose=${F1}
                    onRetry=${Y9}
                    onInject=${W9}
                />
                <${T3}
                    onPost=${()=>{X0(),J()}}
                    onFocus=${J}
                    searchMode=${A}
                    searchScope=${R}
                    onSearch=${_9}
                    onSearchScopeChange=${f}
                    onEnterSearch=${$9}
                    onExitSearch=${j9}
                    fileRefs=${E}
                    onRemoveFileRef=${X_}
                    onClearFileRefs=${w_}
                    onSetFileRefs=${P_}
                    messageRefs=${I}
                    onRemoveMessageRef=${c$}
                    onClearMessageRefs=${k$}
                    onSetMessageRefs=${t$}
                    activeEditorPath=${j?null:g0}
                    onAttachEditorFile=${j?void 0:g_}
                    onOpenFilePill=${Z$}
                    followupQueueCount=${s}
                    followupQueueItems=${Y0}
                    onInjectQueuedFollowup=${N9}
                    onRemoveQueuedFollowup=${z9}
                    onSubmitIntercept=${K9}
                    onMessageResponse=${U1}
                    onSubmitError=${b$}
                    onPopOutChat=${G?void 0:B9}
                    isAgentActive=${O1}
                    activeChatAgents=${A0}
                    currentChatJid=${$}
                    connectionStatus=${z}
                    activeModel=${$0}
                    modelUsage=${z0}
                    thinkingLevel=${j0}
                    supportsThinking=${I_}
                    contextUsage=${K0}
                    notificationsEnabled=${T$}
                    notificationPermission=${_$}
                    onToggleNotifications=${X$}
                    onModelChange=${h_}
                    onModelStateChange=${Q1}
                />
                <${q6}
                    request=${N_}
                    onRespond=${()=>{j_(null),v_.current=null}}
                />
            </div>
        </div>
    `}function yj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return O`<${kj} locationParams=${_} />`}k3(O`<${yj} />`,document.getElementById("app"));

//# debugId=5BC758D0BCE9331A64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
