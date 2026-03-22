var q5=Object.defineProperty;var W5=(_)=>_;function Q5(_,$){this[_]=W5.bind(null,$)}var L5=(_,$)=>{for(var j in $)q5(_,j,{get:$[j],enumerable:!0,configurable:!0,set:Q5.bind($,j)})};var U1,_0,i3,U5,d$,C3,l3,n3,d3,_4,r1,a1,B5,W1={},Q1=[],O5=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B1=Array.isArray;function R$(_,$){for(var j in $)_[j]=$[j];return _}function $4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function s3(_,$,j){var Z,N,Y,z={};for(Y in $)Y=="key"?Z=$[Y]:Y=="ref"?N=$[Y]:z[Y]=$[Y];if(arguments.length>2&&(z.children=arguments.length>3?U1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)z[Y]===void 0&&(z[Y]=_.defaultProps[Y]);return X1(_,z,Z,N,null)}function X1(_,$,j,Z,N){var Y={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++i3:N,__i:-1,__u:0};return N==null&&_0.vnode!=null&&_0.vnode(Y),Y}function O1(_){return _.children}function V1(_,$){this.props=_,this.context=$}function y2(_,$){if($==null)return _.__?y2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?y2(_):null}function F5(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],Y=R$({},$);Y.__v=$.__v+1,_0.vnode&&_0.vnode(Y),j4(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?y2($):j,!!(32&$.__u),N),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,t3(Z,Y,N),$.__e=$.__=null,Y.__e!=j&&o3(Y)}}function o3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),o3(_)}function T3(_){(!_.__d&&(_.__d=!0)&&d$.push(_)&&!L1.__r++||C3!=_0.debounceRendering)&&((C3=_0.debounceRendering)||l3)(L1)}function L1(){try{for(var _,$=1;d$.length;)d$.length>$&&d$.sort(n3),_=d$.shift(),$=d$.length,F5(_)}finally{d$.length=L1.__r=0}}function r3(_,$,j,Z,N,Y,z,V,Q,q,L){var W,H,x,S,u,g,A,I=Z&&Z.__k||Q1,h=$.length;for(Q=H5(j,$,I,Q,h),W=0;W<h;W++)(x=j.__k[W])!=null&&(H=x.__i!=-1&&I[x.__i]||W1,x.__i=W,g=j4(_,x,H,N,Y,z,V,Q,q,L),S=x.__e,x.ref&&H.ref!=x.ref&&(H.ref&&Z4(H.ref,null,x),L.push(x.ref,x.__c||S,x)),u==null&&S!=null&&(u=S),(A=!!(4&x.__u))||H.__k===x.__k?Q=a3(x,Q,_,A):typeof x.type=="function"&&g!==void 0?Q=g:S&&(Q=S.nextSibling),x.__u&=-7);return j.__e=u,Q}function H5(_,$,j,Z,N){var Y,z,V,Q,q,L=j.length,W=L,H=0;for(_.__k=Array(N),Y=0;Y<N;Y++)(z=$[Y])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[Y]=X1(null,z,null,null,null):B1(z)?z=_.__k[Y]=X1(O1,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[Y]=X1(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[Y]=z,Q=Y+H,z.__=_,z.__b=_.__b+1,V=null,(q=z.__i=D5(z,j,Q,W))!=-1&&(W--,(V=j[q])&&(V.__u|=2)),V==null||V.__v==null?(q==-1&&(N>L?H--:N<L&&H++),typeof z.type!="function"&&(z.__u|=4)):q!=Q&&(q==Q-1?H--:q==Q+1?H++:(q>Q?H--:H++,z.__u|=4))):_.__k[Y]=null;if(W)for(Y=0;Y<L;Y++)(V=j[Y])!=null&&(2&V.__u)==0&&(V.__e==Z&&(Z=y2(V)),_8(V,V));return Z}function a3(_,$,j,Z){var N,Y;if(typeof _.type=="function"){for(N=_.__k,Y=0;N&&Y<N.length;Y++)N[Y]&&(N[Y].__=_,$=a3(N[Y],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=y2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function D5(_,$,j,Z){var N,Y,z,V=_.key,Q=_.type,q=$[j],L=q!=null&&(2&q.__u)==0;if(q===null&&V==null||L&&V==q.key&&Q==q.type)return j;if(Z>(L?1:0)){for(N=j-1,Y=j+1;N>=0||Y<$.length;)if((q=$[z=N>=0?N--:Y++])!=null&&(2&q.__u)==0&&V==q.key&&Q==q.type)return z}return-1}function b3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||O5.test($)?j:j+"px"}function G1(_,$,j,Z,N){var Y,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||b3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||b3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(d3,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Z?j.u=Z.u:(j.u=_4,_.addEventListener($,Y?a1:r1,Y)):_.removeEventListener($,Y?a1:r1,Y);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(V){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function S3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=_4++;else if($.t<j.u)return;return j(_0.event?_0.event($):$)}}}function j4(_,$,j,Z,N,Y,z,V,Q,q){var L,W,H,x,S,u,g,A,I,h,E,f,n,t,d,j_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(Q=!!(32&j.__u),Y=[V=$.__e=j.__e]),(L=_0.__b)&&L($);_:if(typeof j_=="function")try{if(A=$.props,I=j_.prototype&&j_.prototype.render,h=(L=j_.contextType)&&Z[L.__c],E=L?h?h.props.value:L.__:Z,j.__c?g=(W=$.__c=j.__c).__=W.__E:(I?$.__c=W=new j_(A,E):($.__c=W=new V1(A,E),W.constructor=j_,W.render=E5),h&&h.sub(W),W.state||(W.state={}),W.__n=Z,H=W.__d=!0,W.__h=[],W._sb=[]),I&&W.__s==null&&(W.__s=W.state),I&&j_.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=R$({},W.__s)),R$(W.__s,j_.getDerivedStateFromProps(A,W.__s))),x=W.props,S=W.state,W.__v=$,H)I&&j_.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),I&&W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(I&&j_.getDerivedStateFromProps==null&&A!==x&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(A,E),$.__v==j.__v||!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(A,W.__s,E)===!1){$.__v!=j.__v&&(W.props=A,W.state=W.__s,W.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),Q1.push.apply(W.__h,W._sb),W._sb=[],W.__h.length&&z.push(W);break _}W.componentWillUpdate!=null&&W.componentWillUpdate(A,W.__s,E),I&&W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(x,S,u)})}if(W.context=E,W.props=A,W.__P=_,W.__e=!1,f=_0.__r,n=0,I)W.state=W.__s,W.__d=!1,f&&f($),L=W.render(W.props,W.state,W.context),Q1.push.apply(W.__h,W._sb),W._sb=[];else do W.__d=!1,f&&f($),L=W.render(W.props,W.state,W.context),W.state=W.__s;while(W.__d&&++n<25);W.state=W.__s,W.getChildContext!=null&&(Z=R$(R$({},Z),W.getChildContext())),I&&!H&&W.getSnapshotBeforeUpdate!=null&&(u=W.getSnapshotBeforeUpdate(x,S)),t=L!=null&&L.type===O1&&L.key==null?e3(L.props.children):L,V=r3(_,B1(t)?t:[t],$,j,Z,N,Y,z,V,Q,q),W.base=$.__e,$.__u&=-161,W.__h.length&&z.push(W),g&&(W.__E=W.__=null)}catch(i){if($.__v=null,Q||Y!=null)if(i.then){for($.__u|=Q?160:128;V&&V.nodeType==8&&V.nextSibling;)V=V.nextSibling;Y[Y.indexOf(V)]=null,$.__e=V}else{for(d=Y.length;d--;)$4(Y[d]);t1($)}else $.__e=j.__e,$.__k=j.__k,i.then||t1($);_0.__e(i,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):V=$.__e=J5(j.__e,$,j,Z,N,Y,z,Q,q);return(L=_0.diffed)&&L($),128&$.__u?void 0:V}function t1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(t1))}function t3(_,$,j){for(var Z=0;Z<j.length;Z++)Z4(j[Z],j[++Z],j[++Z]);_0.__c&&_0.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(Y){Y.call(N)})}catch(Y){_0.__e(Y,N.__v)}})}function e3(_){return typeof _!="object"||_==null||_.__b>0?_:B1(_)?_.map(e3):R$({},_)}function J5(_,$,j,Z,N,Y,z,V,Q){var q,L,W,H,x,S,u,g=j.props||W1,A=$.props,I=$.type;if(I=="svg"?N="http://www.w3.org/2000/svg":I=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),Y!=null){for(q=0;q<Y.length;q++)if((x=Y[q])&&"setAttribute"in x==!!I&&(I?x.localName==I:x.nodeType==3)){_=x,Y[q]=null;break}}if(_==null){if(I==null)return document.createTextNode(A);_=document.createElementNS(N,I,A.is&&A),V&&(_0.__m&&_0.__m($,Y),V=!1),Y=null}if(I==null)g===A||V&&_.data==A||(_.data=A);else{if(Y=Y&&U1.call(_.childNodes),!V&&Y!=null)for(g={},q=0;q<_.attributes.length;q++)g[(x=_.attributes[q]).name]=x.value;for(q in g)x=g[q],q=="dangerouslySetInnerHTML"?W=x:q=="children"||(q in A)||q=="value"&&("defaultValue"in A)||q=="checked"&&("defaultChecked"in A)||G1(_,q,null,x,N);for(q in A)x=A[q],q=="children"?H=x:q=="dangerouslySetInnerHTML"?L=x:q=="value"?S=x:q=="checked"?u=x:V&&typeof x!="function"||g[q]===x||G1(_,q,x,g[q],N);if(L)V||W&&(L.__html==W.__html||L.__html==_.innerHTML)||(_.innerHTML=L.__html),$.__k=[];else if(W&&(_.innerHTML=""),r3($.type=="template"?_.content:_,B1(H)?H:[H],$,j,Z,I=="foreignObject"?"http://www.w3.org/1999/xhtml":N,Y,z,Y?Y[0]:j.__k&&y2(j,0),V,Q),Y!=null)for(q=Y.length;q--;)$4(Y[q]);V||(q="value",I=="progress"&&S==null?_.removeAttribute("value"):S!=null&&(S!==_[q]||I=="progress"&&!S||I=="option"&&S!=g[q])&&G1(_,q,S,g[q],N),q="checked",u!=null&&u!=_[q]&&G1(_,q,u,g[q],N))}return _}function Z4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){_0.__e(N,j)}}function _8(_,$,j){var Z,N;if(_0.unmount&&_0.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||Z4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Y){_0.__e(Y,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&_8(Z[N],$,j||typeof _.type!="function");j||$4(_.__e),_.__c=_.__=_.__e=void 0}function E5(_,$,j){return this.constructor(_,j)}function $8(_,$,j){var Z,N,Y,z;$==document&&($=document.documentElement),_0.__&&_0.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],z=[],j4($,_=(!Z&&j||$).__k=s3(O1,null,[_]),N||W1,W1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?U1.call($.childNodes):null,Y,!Z&&j?j:N?N.__e:$.firstChild,Z,z),t3(Y,_,z)}U1=Q1.slice,_0={__e:function(_,$,j,Z){for(var N,Y,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((Y=N.constructor)&&Y.getDerivedStateFromError!=null&&(N.setState(Y.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(V){_=V}throw _}},i3=0,U5=function(_){return _!=null&&_.constructor===void 0},V1.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=R$({},this.state),typeof _=="function"&&(_=_(R$({},j),this.props)),_&&R$(j,_),_!=null&&this.__v&&($&&this._sb.push($),T3(this))},V1.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),T3(this))},V1.prototype.render=O1,d$=[],l3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,n3=function(_,$){return _.__v.__b-$.__v.__b},L1.__r=0,d3=/(PointerCapture)$|Capture$/i,_4=0,r1=S3(!1),a1=S3(!0),B5=0;var c2,B0,o1,f3,i2=0,j8=[],U0=_0,R3=U0.__b,v3=U0.__r,m3=U0.diffed,u3=U0.__c,g3=U0.unmount,p3=U0.__;function N4(_,$){U0.__h&&U0.__h(B0,_,i2||$),i2=0;var j=B0.__H||(B0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function v(_){return i2=1,y5(N8,_)}function y5(_,$,j){var Z=N4(c2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):N8(void 0,$),function(V){var Q=Z.__N?Z.__N[0]:Z.__[0],q=Z.t(Q,V);Q!==q&&(Z.__N=[q,Z.__[1]],Z.__c.setState({}))}],Z.__c=B0,!B0.__f)){var N=function(V,Q,q){if(!Z.__c.__H)return!0;var L=Z.__c.__H.__.filter(function(H){return H.__c});if(L.every(function(H){return!H.__N}))return!Y||Y.call(this,V,Q,q);var W=Z.__c.props!==V;return L.some(function(H){if(H.__N){var x=H.__[0];H.__=H.__N,H.__N=void 0,x!==H.__[0]&&(W=!0)}}),Y&&Y.call(this,V,Q,q)||W};B0.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:z}=B0;B0.componentWillUpdate=function(V,Q,q){if(this.__e){var L=Y;Y=void 0,N(V,Q,q),Y=L}z&&z.call(this,V,Q,q)},B0.shouldComponentUpdate=N}return Z.__N||Z.__}function R(_,$){var j=N4(c2++,3);!U0.__s&&Z8(j.__H,$)&&(j.__=_,j.u=$,B0.__H.__h.push(j))}function k(_){return i2=5,R_(function(){return{current:_}},[])}function R_(_,$){var j=N4(c2++,7);return Z8(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function w(_,$){return i2=8,R_(function(){return _},$)}function A5(){for(var _;_=j8.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(q1),$.__h.some(e1),$.__h=[]}catch(j){$.__h=[],U0.__e(j,_.__v)}}}U0.__b=function(_){B0=null,R3&&R3(_)},U0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),p3&&p3(_,$)},U0.__r=function(_){v3&&v3(_),c2=0;var $=(B0=_.__c).__H;$&&(o1===B0?($.__h=[],B0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(q1),$.__h.some(e1),$.__h=[],c2=0)),o1=B0},U0.diffed=function(_){m3&&m3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(j8.push($)!==1&&f3===U0.requestAnimationFrame||((f3=U0.requestAnimationFrame)||k5)(A5)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),o1=B0=null},U0.__c=function(_,$){$.some(function(j){try{j.__h.some(q1),j.__h=j.__h.filter(function(Z){return!Z.__||e1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],U0.__e(Z,j.__v)}}),u3&&u3(_,$)},U0.unmount=function(_){g3&&g3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{q1(Z)}catch(N){$=N}}),j.__H=void 0,$&&U0.__e($,j.__v))};var h3=typeof requestAnimationFrame=="function";function k5(_){var $,j=function(){clearTimeout(Z),h3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);h3&&($=requestAnimationFrame(j))}function q1(_){var $=B0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),B0=$}function e1(_){var $=B0;_.__c=_.__(),B0=$}function Z8(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function N8(_,$){return typeof $=="function"?$(_):$}var Y8=function(_,$,j,Z){var N;$[0]=0;for(var Y=1;Y<$.length;Y++){var z=$[Y++],V=$[Y]?($[0]|=z?1:2,j[$[Y++]]):$[++Y];z===3?Z[0]=V:z===4?Z[1]=Object.assign(Z[1]||{},V):z===5?(Z[1]=Z[1]||{})[$[++Y]]=V:z===6?Z[1][$[++Y]]+=V+"":z?(N=_.apply(V,Y8(_,V,j,["",null])),Z.push(N),V[0]?$[0]|=2:($[Y-2]=0,$[Y]=N)):Z.push(V)}return Z},c3=new Map;function P5(_){var $=c3.get(this);return $||($=new Map,c3.set(this,$)),($=Y8(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,Y=1,z="",V="",Q=[0],q=function(H){Y===1&&(H||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?Q.push(0,H,z):Y===3&&(H||z)?(Q.push(3,H,z),Y=2):Y===2&&z==="..."&&H?Q.push(4,H,0):Y===2&&z&&!H?Q.push(5,0,!0,z):Y>=5&&((z||!H&&Y===5)&&(Q.push(Y,0,z,N),Y=6),H&&(Q.push(Y,H,0,N),Y=6)),z=""},L=0;L<j.length;L++){L&&(Y===1&&q(),q(L));for(var W=0;W<j[L].length;W++)Z=j[L][W],Y===1?Z==="<"?(q(),Q=[Q],Y=3):z+=Z:Y===4?z==="--"&&Z===">"?(Y=1,z=""):z=Z+z[0]:V?Z===V?V="":z+=Z:Z==='"'||Z==="'"?V=Z:Z===">"?(q(),Y=1):Y&&(Z==="="?(Y=5,N=z,z=""):Z==="/"&&(Y<5||j[L][W+1]===">")?(q(),Y===3&&(Q=Q[0]),Y=Q,(Q=Q[0]).push(2,0,Y),Y=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(q(),Y=2):z+=Z),Y===3&&z==="!--"&&(Y=4,Q=Q[0])}return q(),Q}(_)),$),arguments,[])).length>1?$:$[0]}var U=P5.bind(s3);var t0={};L5(t0,{uploadWorkspaceFile:()=>H1,uploadMedia:()=>W4,updateWorkspaceFile:()=>h5,submitAdaptiveCardAction:()=>Q4,streamSidePrompt:()=>u5,steerAgentQueueItem:()=>m5,setWorkspaceVisibility:()=>o2,setAgentThoughtVisibility:()=>B4,sendPeerAgentMessage:()=>S5,sendAgentMessage:()=>G2,searchPosts:()=>z4,restoreChatBranch:()=>b5,respondToAgentRequest:()=>F1,renameWorkspaceFile:()=>E4,renameChatBranch:()=>C5,removeAgentQueueItem:()=>v5,pruneChatBranch:()=>T5,moveWorkspaceEntry:()=>y4,getWorkspaceTree:()=>s2,getWorkspaceRawUrl:()=>D1,getWorkspaceFile:()=>H4,getWorkspaceDownloadUrl:()=>J1,getWorkspaceBranch:()=>p5,getTimeline:()=>l2,getThumbnailUrl:()=>O4,getThread:()=>K4,getPostsByHashtag:()=>Y4,getMediaUrl:()=>W$,getMediaText:()=>F4,getMediaInfo:()=>A2,getMediaBlob:()=>g5,getChatBranches:()=>I5,getAgents:()=>V4,getAgentThought:()=>U4,getAgentStatus:()=>q4,getAgentQueueState:()=>R5,getAgentModels:()=>d2,getAgentContext:()=>f5,getActiveChatAgents:()=>X4,forkChatBranch:()=>n2,deleteWorkspaceFile:()=>A4,deletePost:()=>G4,createWorkspaceFile:()=>J4,createReply:()=>w5,createPost:()=>M5,attachWorkspaceFile:()=>D4,addToWhitelist:()=>L4,SSEClient:()=>E1});async function v_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function z8(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Z.push(Y.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function x5(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:V}=await j.read();if(V)break;N+=Z.decode(z,{stream:!0});let Q=N.split(`

`);N=Q.pop()||"";for(let q of Q){let L=z8(q);if(L)$(L.event,L.data)}}N+=Z.decode();let Y=z8(N);if(Y)$(Y.event,Y.data)}async function l2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return v_(Z)}async function Y4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return v_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function z4(_,$=50,j=0,Z=null,N="current",Y=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",V=N?`&scope=${encodeURIComponent(N)}`:"",Q=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return v_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${V}${Q}`)}async function K4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return v_(`/thread/${_}${j}`)}async function M5(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return v_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function w5(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return v_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function G4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return v_(N,{method:"DELETE"})}async function G2(_,$,j=null,Z=[],N=null,Y=null){let z=Y?`?chat_jid=${encodeURIComponent(Y)}`:"";return v_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function X4(){return v_("/agent/active-chats")}async function I5(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return v_(`/agent/branches${Z}`)}async function n2(_,$={}){return v_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function C5(_,$={}){return v_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function T5(_){return v_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function b5(_,$={}){return v_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function S5(_,$,j,Z="auto",N={}){let Y={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return v_("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function V4(){return v_("/agent/roster")}async function q4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/status${$}`)}async function f5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/context${$}`)}async function R5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/queue-state${$}`)}async function v5(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function m5(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function d2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/models${$}`)}async function W4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function F1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function Q4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function u5(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await x5(j,(Y,z)=>{if($.onEvent?.(Y,z),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(Y==="side_prompt_done")Z=z;else if(Y==="side_prompt_error")N=z}),N){let Y=Error(N?.error||"Side prompt failed");throw Y.payload=N,Y}return Z}async function L4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function U4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return v_(j)}async function B4(_,$,j){return v_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function W$(_){return`/media/${_}`}function O4(_){return`/media/${_}/thumbnail`}async function A2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function F4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function g5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function s2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return v_(Z)}async function p5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return v_($)}async function H4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return v_(N)}async function h5(_,$){return v_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function D4(_){return v_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function H1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let Y=N.toString(),z=Y?`/workspace/upload?${Y}`:"/workspace/upload",V=await fetch(""+z,{method:"POST",body:Z});if(!V.ok){let Q=await V.json().catch(()=>({error:"Upload failed"})),q=Error(Q.error||`HTTP ${V.status}`);throw q.status=V.status,q.code=Q.code,q}return V.json()}async function J4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),Y=Error(N.error||`HTTP ${Z.status}`);throw Y.status=Z.status,Y.code=N.code,Y}return Z.json()}async function E4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function y4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function A4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return v_($,{method:"DELETE"})}async function o2(_,$=!1){return v_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function D1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function J1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class E1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function e0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function l_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function k2(_,$=!1){let j=e0(_);if(j===null)return $;return j==="true"}function P2(_,$=null){let j=e0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function y1(_){return String(_||"").trim().toLowerCase()}function k4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return y1($[1]||"")}function K8(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=y1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function G8(_,$,j={}){let Z=k4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return K8(_).filter((Y)=>{if(N&&Y?.chat_jid===N)return!1;return y1(Y?.agent_name).startsWith(Z)})}function P4(_){let $=y1(_);return $?`@${$} `:""}function X8(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return K8(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function V8({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let Y=460+N*68+(j?40:0);return Z>=Y}function D$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:Y="Remove",icon:z="file"}){let V=`${_}-file-pill`,Q=`${_}-file-name`,q=`${_}-file-remove`,L=z==="message"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return U`
    <span class=${V} title=${j||$} onClick=${N}>
      ${L}
      <span class=${Q}>${$}</span>
      ${Z&&U`
        <button
          class=${q}
          onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),Z()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var c5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function i5({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,N=_.contextWindow,Y="Compact context",V=`${Z!=null?`Context: ${q8(Z)} / ${q8(N)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,Q=9,q=2*Math.PI*9,L=j/100*q,W=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return U`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${V}
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
                    stroke=${W}
                    stroke-width="2.5"
                    stroke-dasharray=${`${L} ${q}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function q8(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function W8({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:Y,onEnterSearch:z,onExitSearch:V,fileRefs:Q=[],onRemoveFileRef:q,onClearFileRefs:L,messageRefs:W=[],onRemoveMessageRef:H,onClearMessageRefs:x,activeModel:S=null,modelUsage:u=null,thinkingLevel:g=null,supportsThinking:A=!1,contextUsage:I=null,onContextCompact:h,notificationsEnabled:E=!1,notificationPermission:f="default",onToggleNotifications:n,onModelChange:t,onModelStateChange:d,activeEditorPath:j_=null,onAttachEditorFile:i,onOpenFilePill:q_,followupQueueItems:d_=[],onInjectQueuedFollowup:g_,onRemoveQueuedFollowup:s,onSubmitIntercept:N_,onMessageResponse:__,onPopOutChat:W_,isAgentActive:z_=!1,activeChatAgents:Q_=[],currentChatJid:U_="web:default",connectionStatus:Y_="connected",onSetFileRefs:m_,onSetMessageRefs:w_,onSubmitError:E_,onSwitchChat:y_,onRenameSession:K0,isRenameSessionInProgress:G0=!1,onCreateSession:X_,onDeleteSession:$_,onRestoreSession:F_}){let[Z_,H_]=v(""),[I_,a_]=v(""),[p_,s_]=v([]),[h_,c_]=v(!1),[P_,A_]=v([]),[u_,X0]=v(0),[x0,C_]=v(!1),[E0,j0]=v([]),[T_,Z0]=v(0),[t_,$0]=v(!1),[N0,b_]=v(!1),[O0,b0]=v(!1),[k_,e_]=v(!1),[S0,x_]=v([]),[T,a]=v(!1),[B_,M_]=v(0),[o_,F0]=v(null),S_=k(null),f0=k(null),$$=k(null),j$=k(null),C0=k(null),w$=k(null),H0=k(null),i0=k(null),l0=k(0),R0=k(!1),Z$=200,L2=(K)=>{let O=new Set,D=[];for(let C of K||[]){if(typeof C!=="string")continue;let p=C.trim();if(!p||O.has(p))continue;O.add(p),D.push(p)}return D},U2=()=>{let K=e0("piclaw_compose_history");if(!K)return[];try{let O=JSON.parse(K);if(!Array.isArray(O))return[];return L2(O)}catch{return[]}},y0=(K)=>{l_("piclaw_compose_history",JSON.stringify(K))},D0=k(U2()),Y0=k(-1),p0=k(""),z0=Z_.trim()||p_.length>0||Q.length>0||W.length>0,M0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),N$=typeof window<"u"&&typeof Notification<"u",I$=typeof window<"u"?Boolean(window.isSecureContext):!1,u$=N$&&I$&&f!=="denied",a$=f==="granted"&&E,n0=a$?"Disable notifications":"Enable notifications",t$=p_.length>0||Q.length>0||W.length>0,e$=Y_==="disconnected"?"Reconnecting":String(Y_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(K)=>K.toUpperCase()),Y$=Y_==="disconnected"?"Reconnecting":`Connection: ${e$}`,U$=(Array.isArray(Q_)?Q_:[]).filter((K)=>!K?.archived_at),d0=X8(U$,{currentChatJid:U_,limit:4}),q0=!j&&V8({footerWidth:B_,visibleAgentCount:d0.length,hasContextIndicator:Boolean(I&&I.percent!=null)}),i_=(()=>{for(let K of Array.isArray(Q_)?Q_:[]){let O=typeof K?.chat_jid==="string"?K.chat_jid.trim():"";if(O&&O===U_)return K}return null})(),B$=Boolean(i_&&i_.chat_jid===(i_.root_chat_jid||i_.chat_jid)),J$=(()=>{let K=new Set,O=[];for(let D of Array.isArray(Q_)?Q_:[]){let C=typeof D?.chat_jid==="string"?D.chat_jid.trim():"";if(!C||C===U_||K.has(C))continue;if(!(typeof D?.agent_name==="string"?D.agent_name.trim():""))continue;K.add(C),O.push(D)}return O})(),g$=J$.length>0,B2=g$&&typeof y_==="function",D_=g$&&typeof F_==="function",z$=Boolean(G0||R0.current),E$=!j&&typeof K0==="function"&&!z$,C$=!j&&typeof X_==="function",s0=!j&&typeof $_==="function"&&!B$,T$=!j&&(B2||D_||E$||C$||s0),o0=S||"",v0=A&&g?` (${g})`:"",W0=v0.trim()?`${g}`:"",m0=typeof u?.hint_short==="string"?u.hint_short.trim():"",r0=[W0||null,m0||null].filter(Boolean).join(" • "),T0=[o0?`Current model: ${o0}${v0}`:null,u?.plan?`Plan: ${u.plan}`:null,m0||null,u?.primary?.reset_description||null,u?.secondary?.reset_description||null].filter(Boolean),p$=N0?"Switching model…":T0.join(" • ")||`Current model: ${o0}${v0} (tap to open model picker)`,a0=(K)=>{if(!K||typeof K!=="object")return;let O=K.model??K.current;if(typeof d==="function")d({model:O??null,thinking_level:K.thinking_level??null,supports_thinking:K.supports_thinking,provider_usage:K.provider_usage??null});if(O&&typeof t==="function")t(O)},h0=(K)=>{let O=K||S_.current;if(!O)return;O.style.height="auto",O.style.height=`${O.scrollHeight}px`,O.style.overflowY="hidden"},h$=(K)=>{if(!K)return{content:K,fileRefs:[]};let D=K.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),C=-1;for(let O_=0;O_<D.length;O_+=1)if(D[O_].trim()==="Files:"&&D[O_+1]&&/^\s*-\s+/.test(D[O_+1])){C=O_;break}if(C===-1)return{content:K,fileRefs:[]};let p=[],m=C+1;for(;m<D.length;m+=1){let O_=D[m];if(/^\s*-\s+/.test(O_))p.push(O_.replace(/^\s*-\s+/,"").trim());else if(!O_.trim())break;else break}if(p.length===0)return{content:K,fileRefs:[]};let r=D.slice(0,C),L_=D.slice(m);return{content:[...r,...L_].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:p}},_2=(K)=>{if(!K)return{content:K,messageRefs:[]};let D=K.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),C=-1;for(let O_=0;O_<D.length;O_+=1)if(D[O_].trim()==="Referenced messages:"&&D[O_+1]&&/^\s*-\s+/.test(D[O_+1])){C=O_;break}if(C===-1)return{content:K,messageRefs:[]};let p=[],m=C+1;for(;m<D.length;m+=1){let O_=D[m];if(/^\s*-\s+/.test(O_)){let H$=O_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(H$)p.push(H$[1])}else if(!O_.trim())break;else break}if(p.length===0)return{content:K,messageRefs:[]};let r=D.slice(0,C),L_=D.slice(m);return{content:[...r,...L_].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:p}},b$=(K)=>{let O=h$(K||""),D=_2(O.content||"");return{text:D.content||"",fileRefs:O.fileRefs,messageRefs:D.messageRefs}},J0=(K)=>{if(!K.startsWith("/")||K.includes(`
`)){C_(!1),A_([]);return}let O=K.toLowerCase().split(" ")[0];if(O.length<1){C_(!1),A_([]);return}let D=c5.filter((C)=>C.name.startsWith(O)||C.name.replace(/-/g,"").startsWith(O.replace(/-/g,"")));if(D.length>0&&!(D.length===1&&D[0].name===O))$0(!1),j0([]),A_(D),X0(0),C_(!0);else C_(!1),A_([])},O$=(K)=>{let O=Z_,D=O.indexOf(" "),C=D>=0?O.slice(D):"",p=K.name+C;H_(p),C_(!1),A_([]),requestAnimationFrame(()=>{let m=S_.current;if(!m)return;let r=p.length;m.selectionStart=r,m.selectionEnd=r,m.focus()})},y$=(K)=>{if(k4(K)==null){$0(!1),j0([]);return}let O=G8(U$,K,{currentChatJid:U_});if(O.length>0&&!(O.length===1&&P4(O[0].agent_name).trim().toLowerCase()===String(K||"").trim().toLowerCase()))C_(!1),A_([]),j0(O),Z0(0),$0(!0);else $0(!1),j0([])},A$=(K)=>{let O=P4(K?.agent_name);if(!O)return;H_(O),$0(!1),j0([]),requestAnimationFrame(()=>{let D=S_.current;if(!D)return;let C=O.length;D.selectionStart=C,D.selectionEnd=C,D.focus()})},S$=(K)=>{if(K?.preventDefault?.(),K?.stopPropagation?.(),j||!B2&&!D_&&!E$&&!C$&&!s0)return;b0(!1),C_(!1),A_([]),$0(!1),j0([]),e_((O)=>!O)},c$=(K)=>{let O=typeof K==="string"?K.trim():"";if(e_(!1),!O||O===U_){requestAnimationFrame(()=>S_.current?.focus());return}y_?.(O)},$2=async(K)=>{let O=typeof K==="string"?K.trim():"";if(e_(!1),!O||typeof F_!=="function"){requestAnimationFrame(()=>S_.current?.focus());return}try{await F_(O)}catch(D){console.warn("Failed to restore session:",D),requestAnimationFrame(()=>S_.current?.focus())}},c0=(K)=>{let O=typeof K?.chat_jid==="string"?K.chat_jid.trim():"";if(O&&typeof y_==="function"){y_(O);return}A$(K)},u0=async(K)=>{if(K?.preventDefault)K.preventDefault();if(K?.stopPropagation)K.stopPropagation();if(typeof K0!=="function"||G0||R0.current)return;R0.current=!0,e_(!1);try{await K0()}catch(O){console.warn("Failed to rename session:",O)}finally{R0.current=!1}requestAnimationFrame(()=>S_.current?.focus())},F$=async()=>{if(typeof X_!=="function")return;e_(!1);try{await X_()}catch(K){console.warn("Failed to create session:",K)}requestAnimationFrame(()=>S_.current?.focus())},j2=async()=>{if(typeof $_!=="function")return;e_(!1);try{await $_(U_)}catch(K){console.warn("Failed to delete session:",K)}requestAnimationFrame(()=>S_.current?.focus())},K$=(K)=>{if(j)a_(K);else H_(K),J0(K),y$(K);requestAnimationFrame(()=>h0())},i$=(K)=>{let O=j?I_:Z_,D=O&&!O.endsWith(`
`)?`
`:"",C=`${O}${D}${K}`.trimStart();K$(C)},k$=(K)=>{let O=K?.command?.model_label;if(O)return O;let D=K?.command?.message;if(typeof D==="string"){let C=D.match(/•\s+([^\n]+?)\s+\(current\)/);if(C?.[1])return C[1].trim()}return null},f$=async(K)=>{if(j||N0)return;b_(!0);try{let O=await G2("default",K,null,[],null,U_),D=k$(O);a0({model:D??S??null,thinking_level:O?.command?.thinking_level,supports_thinking:O?.command?.supports_thinking});try{let C=await d2(U_);if(C)a0(C)}catch{}return _?.(),!0}catch(O){return console.error("Failed to switch model:",O),alert("Failed to switch model: "+O.message),!1}finally{b_(!1)}},Z2=async()=>{await f$("/cycle-model")},O2=async(K)=>{if(!K||N0)return;if(await f$(`/model ${K}`))b0(!1)},P$=(K)=>{K.preventDefault(),K.stopPropagation(),e_(!1),b0((O)=>!O)},l$=async()=>{if(j)return;h?.(),await x$("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},N2=(K)=>{if(K==="queue"||K==="steer"||K==="auto")return K;return z_?"queue":null},x$=async(K,O,D={})=>{let{includeMedia:C=!0,includeFileRefs:p=!0,includeMessageRefs:m=!0,clearAfterSubmit:r=!0,recordHistory:L_=!0}=D||{},A0=typeof K==="string"?K:K&&typeof K?.target?.value==="string"?K.target.value:Z_,O_=typeof A0==="string"?A0:"";if(!O_.trim()&&(C?p_.length===0:!0)&&(p?Q.length===0:!0)&&(m?W.length===0:!0))return;C_(!1),A_([]),$0(!1),j0([]),e_(!1),F0(null);let H$=C?[...p_]:[],M$=p?[...Q]:[],H2=m?[...W]:[],G$=O_.trim();if(L_&&G$){let z2=D0.current,w0=L2(z2.filter((D2)=>D2!==G$));if(w0.push(G$),w0.length>200)w0.splice(0,w0.length-200);D0.current=w0,y0(w0),Y0.current=-1,p0.current=""}let p1=()=>{if(C)s_([...H$]);if(p)m_?.(M$);if(m)w_?.(H2);H_(G$),requestAnimationFrame(()=>h0())};if(r)H_(""),s_([]),L?.(),x?.();(async()=>{try{if(await N_?.({content:G$,submitMode:O,fileRefs:M$,messageRefs:H2,mediaFiles:H$})){_?.();return}let w0=[];for(let V0 of H$){let Q0=await W4(V0);w0.push(Q0.id)}let D2=M$.length?`Files:
${M$.map((V0)=>`- ${V0}`).join(`
`)}`:"",L0=H2.length?`Referenced messages:
${H2.map((V0)=>`- message:${V0}`).join(`
`)}`:"",h1=w0.length?`Attachments:
${w0.map((V0,Q0)=>{let R2=H$[Q0]?.name||`attachment-${Q0+1}`;return`- attachment:${V0} (${R2})`}).join(`
`)}`:"",J2=[G$,D2,L0,h1].filter(Boolean).join(`

`),n$=await G2("default",J2,null,w0,N2(O),U_);if(__?.(n$),n$?.command){a0({model:n$.command.model_label??S??null,thinking_level:n$.command.thinking_level,supports_thinking:n$.command.supports_thinking});try{let V0=await d2(U_);if(V0)a0(V0)}catch{}}_?.()}catch(z2){if(r)p1();let w0=z2?.message||"Failed to send message.";F0(w0),E_?.(w0),console.error("Failed to post:",z2)}})()},w2=(K)=>{g_?.(K)},I2=(K)=>{if(K.isComposing)return;if(j&&K.key==="Escape"){K.preventDefault(),a_(""),V?.();return}if(!j&&k_&&K.key==="Escape"){K.preventDefault(),e_(!1);return}if(t_&&E0.length>0){let O=S_.current?.value??(j?I_:Z_);if(!String(O||"").match(/^@([a-zA-Z0-9_-]*)$/))$0(!1),j0([]);else{if(K.key==="ArrowDown"){K.preventDefault(),Z0((D)=>(D+1)%E0.length);return}if(K.key==="ArrowUp"){K.preventDefault(),Z0((D)=>(D-1+E0.length)%E0.length);return}if(K.key==="Tab"||K.key==="Enter"){K.preventDefault(),A$(E0[T_]);return}if(K.key==="Escape"){K.preventDefault(),$0(!1),j0([]);return}}}if(x0&&P_.length>0){let O=S_.current?.value??(j?I_:Z_);if(!String(O||"").startsWith("/"))C_(!1),A_([]);else{if(K.key==="ArrowDown"){K.preventDefault(),X0((D)=>(D+1)%P_.length);return}if(K.key==="ArrowUp"){K.preventDefault(),X0((D)=>(D-1+P_.length)%P_.length);return}if(K.key==="Tab"){K.preventDefault(),O$(P_[u_]);return}if(K.key==="Enter"&&!K.shiftKey){if(!(S_.current?.value??(j?I_:Z_)).includes(" ")){K.preventDefault();let p=P_[u_];C_(!1),A_([]),x$(p.name);return}}if(K.key==="Escape"){K.preventDefault(),C_(!1),A_([]);return}}}if(!j&&(K.key==="ArrowUp"||K.key==="ArrowDown")&&!K.metaKey&&!K.ctrlKey&&!K.altKey&&!K.shiftKey){let O=S_.current;if(!O)return;let D=O.value||"",C=O.selectionStart===0&&O.selectionEnd===0,p=O.selectionStart===D.length&&O.selectionEnd===D.length;if(K.key==="ArrowUp"&&C||K.key==="ArrowDown"&&p){let m=D0.current;if(!m.length)return;K.preventDefault();let r=Y0.current;if(K.key==="ArrowUp"){if(r===-1)p0.current=D,r=m.length-1;else if(r>0)r-=1;Y0.current=r,K$(m[r]||"")}else{if(r===-1)return;if(r<m.length-1)r+=1,Y0.current=r,K$(m[r]||"");else Y0.current=-1,K$(p0.current||""),p0.current=""}requestAnimationFrame(()=>{let L_=S_.current;if(!L_)return;let A0=L_.value.length;L_.selectionStart=A0,L_.selectionEnd=A0});return}}if(K.key==="Enter"&&!K.shiftKey&&(K.ctrlKey||K.metaKey)){K.preventDefault();let O=S_.current?.value??(j?I_:Z_);if(j){if(O.trim())N?.(O.trim(),Z)}else x$(O,"steer");return}if(K.key==="Enter"&&!K.shiftKey){K.preventDefault();let O=S_.current?.value??(j?I_:Z_);if(j){if(O.trim())N?.(O.trim(),Z)}else x$(O)}},K_=(K)=>{let O=Array.from(K||[]).filter((D)=>D instanceof File&&!String(D.name||"").startsWith(".DS_Store"));if(!O.length)return;s_((D)=>[...D,...O]),F0(null)},F2=(K)=>{K_(K.target.files),K.target.value=""},C2=(K)=>{if(j)return;K.preventDefault(),K.stopPropagation(),l0.current+=1,c_(!0)},T2=(K)=>{if(j)return;if(K.preventDefault(),K.stopPropagation(),l0.current=Math.max(0,l0.current-1),l0.current===0)c_(!1)},Y2=(K)=>{if(j)return;if(K.preventDefault(),K.stopPropagation(),K.dataTransfer)K.dataTransfer.dropEffect="copy";c_(!0)},b2=(K)=>{if(j)return;K.preventDefault(),K.stopPropagation(),l0.current=0,c_(!1),K_(K.dataTransfer?.files||[])},S2=(K)=>{if(j)return;let O=K.clipboardData?.items;if(!O||!O.length)return;let D=[];for(let C of O){if(C.kind!=="file")continue;let p=C.getAsFile?.();if(p)D.push(p)}if(D.length>0)K.preventDefault(),K_(D)},f2=(K)=>{s_((O)=>O.filter((D,C)=>C!==K))},B=()=>{F0(null),s_([]),L?.(),x?.()},J=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((K)=>{let{latitude:O,longitude:D,accuracy:C}=K.coords,p=`${O.toFixed(5)}, ${D.toFixed(5)}`,m=Number.isFinite(C)?` ±${Math.round(C)}m`:"",r=`https://maps.google.com/?q=${O},${D}`,L_=`Location: ${p}${m} ${r}`;i$(L_)},(K)=>{let O=K?.message||"Unable to retrieve location.";alert(`Location error: ${O}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};R(()=>{if(!O0)return;a(!0),d2(U_).then((K)=>{let O=Array.isArray(K?.models)?K.models.filter((D)=>typeof D==="string"&&D.trim().length>0):[];O.sort((D,C)=>D.localeCompare(C,void 0,{sensitivity:"base"})),x_(O),a0(K)}).catch((K)=>{console.warn("Failed to load model list:",K),x_([])}).finally(()=>{a(!1)})},[O0,S]),R(()=>{if(j)b0(!1),e_(!1),C_(!1),A_([]),$0(!1),j0([])},[j]),R(()=>{if(k_&&!T$)e_(!1)},[k_,T$]),R(()=>{if(!O0)return;let K=(O)=>{let D=j$.current,C=C0.current,p=O.target;if(D&&D.contains(p))return;if(C&&C.contains(p))return;b0(!1)};return document.addEventListener("pointerdown",K),()=>document.removeEventListener("pointerdown",K)},[O0]),R(()=>{if(!k_)return;let K=(O)=>{let D=w$.current,C=H0.current,p=O.target;if(D&&D.contains(p))return;if(C&&C.contains(p))return;e_(!1)};return document.addEventListener("pointerdown",K),()=>document.removeEventListener("pointerdown",K)},[k_]),R(()=>{let K=()=>{let m=i0.current?.clientWidth||0;M_((r)=>r===m?r:m)};K();let O=i0.current,D=0,C=()=>{if(D)cancelAnimationFrame(D);D=requestAnimationFrame(()=>{D=0,K()})},p=null;if(O&&typeof ResizeObserver<"u")p=new ResizeObserver(()=>C()),p.observe(O);if(typeof window<"u")window.addEventListener("resize",C);return()=>{if(D)cancelAnimationFrame(D);if(p?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",C)}},[j,S,d0.length,I?.percent]);let M=(K)=>{let O=K.target.value;if(F0(null),k_)e_(!1);h0(K.target),K$(O)};return R(()=>{requestAnimationFrame(()=>h0())},[Z_,I_,j]),R(()=>{if(j)return;y$(Z_)},[U$,U_,Z_,j]),U`
        <div class="compose-box">
            ${!j&&d_.length>0&&U`
                <div class="compose-queue-stack">
                    ${d_.map((K)=>{let O=typeof K?.content==="string"?K.content:"",D=b$(O);if(!D.text.trim()&&D.fileRefs.length===0&&D.messageRefs.length===0)return null;return U`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${O}>
                                    ${D.text.trim()&&U`
                                        <div class="compose-queue-stack-text">${D.text}</div>
                                    `}
                                    ${(D.messageRefs.length>0||D.fileRefs.length>0)&&U`
                                        <div class="compose-queue-stack-refs">
                                            ${D.messageRefs.map((C)=>U`
                                                <${D$}
                                                    key=${"queue-msg-"+C}
                                                    prefix="compose"
                                                    label=${"msg:"+C}
                                                    title=${"Message reference: "+C}
                                                    icon="message"
                                                />
                                            `)}
                                            ${D.fileRefs.map((C)=>{let p=C.split("/").pop()||C;return U`
                                                    <${D$}
                                                        key=${"queue-file-"+C}
                                                        prefix="compose"
                                                        label=${p}
                                                        title=${C}
                                                        onClick=${()=>q_?.(C)}
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
                                        onClick=${()=>w2(K)}
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
                                        onClick=${()=>s?.(K)}
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
                class=${`compose-input-wrapper${h_?" drag-active":""}`}
                onDragEnter=${C2}
                onDragOver=${Y2}
                onDragLeave=${T2}
                onDrop=${b2}
            >
                <div class="compose-input-main">
                    ${o_&&!t$&&U`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${o_}</div>
                    `}
                    ${t$&&U`
                        <div class="compose-file-refs">
                            ${o_&&U`
                                <div class="compose-submit-error" role="status" aria-live="polite">${o_}</div>
                            `}
                            ${W.map((K)=>{return U`
                                    <${D$}
                                        key=${"msg-"+K}
                                        prefix="compose"
                                        label=${"msg:"+K}
                                        title=${"Message reference: "+K}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(K)}
                                    />
                                `})}
                            ${Q.map((K)=>{let O=K.split("/").pop()||K;return U`
                                    <${D$}
                                        prefix="compose"
                                        label=${O}
                                        title=${K}
                                        onClick=${()=>q_?.(K)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(K)}
                                    />
                                `})}
                            ${p_.map((K,O)=>{let D=K?.name||`attachment-${O+1}`;return U`
                                    <${D$}
                                        key=${D+O}
                                        prefix="compose"
                                        label=${D}
                                        title=${D}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>f2(O)}
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
                    ${!j&&typeof W_==="function"&&U`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>W_?.()}
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
                        ref=${S_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?I_:Z_}
                        onInput=${M}
                        onKeyDown=${I2}
                        onPaste=${S2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${t_&&E0.length>0&&U`
                        <div class="slash-autocomplete" ref=${$$}>
                            ${E0.map((K,O)=>U`
                                <div
                                    key=${K.chat_jid||K.agent_name}
                                    class=${`slash-item${O===T_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),A$(K)}}
                                    onMouseEnter=${()=>Z0(O)}
                                >
                                    <span class="slash-name">@${K.agent_name}</span>
                                    <span class="slash-desc">${K.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${x0&&P_.length>0&&U`
                        <div class="slash-autocomplete" ref=${f0}>
                            ${P_.map((K,O)=>U`
                                <div
                                    key=${K.name}
                                    class=${`slash-item${O===u_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),O$(K)}}
                                    onMouseEnter=${()=>X0(O)}
                                >
                                    <span class="slash-name">${K.name}</span>
                                    <span class="slash-desc">${K.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&!j&&U`
                        <div class="compose-model-popup" ref=${j$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${T&&U`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!T&&S0.length===0&&U`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!T&&S0.map((K)=>U`
                                    <button
                                        key=${K}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${S===K?" active":""}`}
                                        onClick=${()=>{O2(K)}}
                                        disabled=${N0}
                                    >
                                        ${K}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{Z2()}}
                                    disabled=${N0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${k_&&!j&&U`
                        <div class="compose-model-popup" ref=${w$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${U`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let K=typeof i_?.agent_name==="string"&&i_.agent_name.trim()?`@${i_.agent_name.trim()}`:U_,O=typeof i_?.chat_jid==="string"&&i_.chat_jid.trim()?i_.chat_jid.trim():U_;return`${K} — ${O} • current`})()}
                                    </div>
                                `}
                                ${!g$&&U`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${g$&&J$.map((K)=>{let O=Boolean(K.archived_at),C=K.chat_jid!==(K.root_chat_jid||K.chat_jid)&&!K.is_active&&!O&&typeof $_==="function",p=`@${K.agent_name} — ${K.chat_jid}${K.is_active?" • active":""}${O?" • archived":""}`;return U`
                                        <div key=${K.chat_jid} class=${`compose-model-popup-item-row${O?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${O?" archived":""}`}
                                                onClick=${()=>{if(O){$2(K.chat_jid);return}c$(K.chat_jid)}}
                                                disabled=${O?!D_:!B2}
                                                title=${O?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${p}
                                            </button>
                                            ${C&&U`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${K.agent_name}`}
                                                    onClick=${(m)=>{m.stopPropagation(),e_(!1),$_(K.chat_jid)}}
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
                            ${(C$||E$||s0)&&U`
                                <div class="compose-model-popup-actions">
                                    ${C$&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{F$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${E$&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${(K)=>{u0(K)}}
                                            title="Rename current branch name and agent handle"
                                            disabled=${z$}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${s0&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{j2()}}
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
                    ${!j&&S&&U`
                    <div class="compose-meta-row">
                        ${!j&&S&&U`
                            <div class="compose-model-meta">
                                <button
                                    ref=${C0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${p$}
                                    aria-label="Open model picker"
                                    onClick=${P$}
                                    disabled=${N0}
                                >
                                    ${N0?"Switching…":o0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!N0&&r0&&U`
                                        <span class="compose-model-usage-hint" title=${p$}>
                                            ${r0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&I&&I.percent!=null&&U`
                            <${i5} usage=${I} onCompact=${l$} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${q0&&U`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${d0.map((K)=>U`
                                <button
                                    key=${K.chat_jid||K.agent_name}
                                    type="button"
                                    class="compose-agent-chip"
                                    onClick=${()=>c0(K)}
                                    title=${`${K.chat_jid||"Active agent"} — switch to @${K.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${K.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${T$&&U`
                        ${i_?.agent_name&&U`
                            <span
                                class="compose-current-agent-label"
                                title=${i_.chat_jid||U_}
                                onClick=${S$}
                            >@${i_.agent_name}</span>
                        `}
                        <button
                            ref=${H0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${k_?" active":""}`}
                            onClick=${S$}
                            title=${k_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${k_?"true":"false"}
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
                                onChange=${(K)=>Y?.(K.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?V:z}
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
                    ${M0&&!j&&U`
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
                    ${u$&&!j&&U`
                        <button
                            class=${`icon-btn notification-btn${a$?" active":""}`}
                            onClick=${n}
                            title=${n0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&U`
                        ${j_&&i&&U`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${i}
                                title=${`Attach open file: ${j_}`}
                                type="button"
                                disabled=${Q.includes(j_)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${F2} />
                        </label>
                    `}
                    ${(Y_!=="connected"||!j)&&U`
                        <div class="compose-send-stack">
                            ${Y_!=="connected"&&U`
                                <span class="compose-connection-status connection-status ${Y_}" title=${Y$}>
                                    ${e$}
                                </span>
                            `}
                            ${!j&&U`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{x$()}}
                                    disabled=${!z0}
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
    `}var w4="piclaw_theme",k1="piclaw_tint",U8="piclaw_chat_themes",a2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},B8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},Q8={default:{label:"Default",mode:"auto",light:a2,dark:B8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},l5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],X2={theme:"default",tint:null},O8="light",x4=!1;function P1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function M2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function n5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let Y=parseInt(N[1],10),z=parseInt(N[2],10),V=parseInt(N[3],10);if(![Y,z,V].every((q)=>Number.isFinite(q)))return null;let Q=`#${[Y,z,V].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:z,b:V,hex:Q}}function F8(_){return M2(_)||n5(_)}function r2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${Y})`}function M4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function d5(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*Y+0.0722*z}function s5(_){return d5(_)>0.4?"#000000":"#ffffff"}function H8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function I4(_){return Q8[_]||Q8.default}function o5(_){return _.mode==="auto"?H8():_.mode}function D8(_,$){let j=I4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||a2}function J8(_,$,j){let Z=F8($);if(!Z)return _;let N=M2(_.bgPrimary),Y=M2(_.bgSecondary),z=M2(_.bgHover),V=M2(_.borderColor);if(!N||!Y||!z||!V)return _;let q=M2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:r2(N,Z,0.08),bgSecondary:r2(Y,Z,0.12),bgHover:r2(z,Z,0.16),borderColor:r2(V,Z,0.08),accent:Z.hex,accentHover:q?r2(Z,q,0.18):Z.hex}}function r5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=F8(Z),Y=N?M4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?M4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",V=N?M4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",Q=N?s5(N):$==="dark"?"#000000":"#ffffff",q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":V,"--accent-contrast-text":Q,"--danger-color":_.danger||a2.danger,"--success-color":_.success||a2.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([L,W])=>{if(W)j.style.setProperty(L,W)})}function a5(){if(typeof document>"u")return;let _=document.documentElement;l5.forEach(($)=>_.style.removeProperty($))}function x2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function L8(_){let $=P1(X2?.theme||"default"),j=X2?.tint?String(X2.tint).trim():null,Z=D8($,_);if($==="default"&&j)Z=J8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?B8.bgPrimary:a2.bgPrimary}function t5(_,$){if(typeof document>"u")return;let j=x2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=x2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",L8("light"));let N=x2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",L8("dark"));let Y=x2("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let z=x2("msapplication-navbutton-color");if(z&&_)z.setAttribute("content",_);let V=x2("apple-mobile-web-app-status-bar-style");if(V)V.setAttribute("content",$==="dark"?"black-translucent":"default")}function e5(){if(typeof window>"u")return;let _={...X2,mode:O8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function E8(){try{let _=e0(U8);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function _7(_,$,j){let Z=E8();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};l_(U8,JSON.stringify(Z))}function $7(_){if(!_)return null;return E8()[_]||null}function y8(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function C4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=P1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=I4(j),Y=o5(N),z=D8(j,Y);X2={theme:j,tint:Z},O8=Y;let V=document.documentElement;V.dataset.theme=Y,V.dataset.colorTheme=j,V.dataset.tint=Z?String(Z):"",V.style.colorScheme=Y;let Q=z;if(j==="default"&&Z)Q=J8(z,Z,Y);if(j==="default"&&!Z)a5();else r5(Q,Y);if(t5(Q.bgPrimary,Y),e5(),$.persist!==!1)if(l_(w4,j),Z)l_(k1,Z);else l_(k1,"")}function A1(){if(I4(X2.theme).mode!=="auto")return;C4(X2,{persist:!1})}function A8(){if(typeof window>"u")return()=>{};let _=y8(),$=$7(_),j=$?P1($.theme||"default"):P1(e0(w4)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=e0(k1);return N?N.trim():null})();if(C4({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!x4){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",A1);else if(N.addListener)N.addListener(A1);return x4=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",A1);else if(N.removeListener)N.removeListener(A1);x4=!1}}return()=>{}}function k8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||y8(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(_7($,j||"default",Z),C4({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")l_(w4,j||"default"),l_(k1,Z||"")}function P8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return H8()}var x1=/#(\w+)/g,j7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),Z7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),N7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),Y7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},z7=new Set(["http:","https:","mailto:",""]);function T4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function V2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!z7.has(Z.protocol))return null;return Z.href}catch{return null}}function x8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=N.nextNode())Z.push(Y);for(let z of Z){let V=z.tagName.toLowerCase();if(!Z7.has(V)){let q=z.parentNode;if(!q)continue;while(z.firstChild)q.insertBefore(z.firstChild,z);q.removeChild(z);continue}let Q=Y7[V]||new Set;for(let q of Array.from(z.attributes)){let L=q.name.toLowerCase(),W=q.value;if(L.startsWith("on")){z.removeAttribute(q.name);continue}if(L.startsWith("data-")||L.startsWith("aria-"))continue;if(Q.has(L)||N7.has(L)){if(L==="href"){let H=V2(W);if(!H)z.removeAttribute(q.name);else if(z.setAttribute(q.name,H),V==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(L==="src"){let H=V==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(W):W,x=V2(H,{allowDataImage:V==="img"});if(!x)z.removeAttribute(q.name);else z.setAttribute(q.name,x)}continue}z.removeAttribute(q.name)}}return j.body.innerHTML}function M8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function M1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=M8(j);if(N===j)break;j=N}return j}function K7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],Y=!1,z=[];for(let V of j){if(!Y&&V.trim().match(/^```mermaid\s*$/i)){Y=!0,z=[];continue}if(Y&&V.trim().match(/^```\s*$/)){let Q=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${Q}@@`),Y=!1,z=[];continue}if(Y)z.push(V);else N.push(V)}if(Y)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function G7(_){if(!_)return _;return M1(_,5)}function X7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function V7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function q7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),Y=$[N]??"",z=G7(Y);return`<div class="mermaid-container" data-mermaid="${X7(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function w8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var W7={span:new Set(["title","class","lang","dir"])};function Q7(_,$){let j=W7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=N.exec($)){let z=(Y[1]||"").toLowerCase();if(!z||z.startsWith("on")||!j.has(z))continue;let V=Y[2]??Y[3]??Y[4]??"";Z.push(` ${z}="${T4(V)}"`)}return Z.join("")}function I8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),Y=N?Z.slice(1).trim():Z,V=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[Q=""]=V.split(/\s+/,1),q=Q.toLowerCase();if(!q||!j7.has(q))return $;if(q==="br")return N?"":"<br>";if(N)return`</${q}>`;let L=V.slice(Q.length).trim(),W=Q7(q,L);return`<${q}${W}>`})}function C8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function T8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let Y=Z(N.nodeValue);if(Y!==N.nodeValue)N.nodeValue=Y}return $.body.innerHTML}function L7(_){if(!window.katex)return _;let $=(z)=>M8(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let V=[],Q=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let L=V.length;return V.push(q),`@@CODE_BLOCK_${L}@@`});return Q=Q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let L=V.length;return V.push(q),`@@CODE_INLINE_${L}@@`}),{html:Q,blocks:V}},Z=(z,V)=>{if(!V.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(Q,q)=>{let L=Number(q);return V[L]??""})},N=j(_),Y=N.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,V,Q)=>{try{let q=katex.renderToString($(Q.trim()),{displayMode:!0,throwOnError:!1});return`${V}${q}`}catch(q){return`<span class="math-error" title="${T4(q.message)}">${z}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,V,Q)=>{if(/\s$/.test(Q))return z;try{let q=katex.renderToString($(Q),{displayMode:!1,throwOnError:!1});return`${V}${q}`}catch(q){return`${V}<span class="math-error" title="${T4(q.message)}">$${Q}$</span>`}}),Z(Y,N.blocks)}function U7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let Y of Z){let z=Y.nodeValue;if(!z)continue;if(x1.lastIndex=0,!x1.test(z))continue;x1.lastIndex=0;let V=Y.parentElement;if(V&&(V.closest("a")||V.closest("code")||V.closest("pre")))continue;let Q=z.split(x1);if(Q.length<=1)continue;let q=$.createDocumentFragment();Q.forEach((L,W)=>{if(W%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",L),H.textContent=`#${L}`,q.appendChild(H)}else q.appendChild($.createTextNode(L))}),Y.parentNode?.replaceChild(q,Y)}return $.body.innerHTML}function B7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let Y of j){if(!N&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&Y.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(Y)}return Z.join(`
`)}function _$(_,$,j={}){if(!_)return"";let Z=B7(_),{text:N,blocks:Y}=K7(Z),z=M1(N,2),Q=w8(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),q=I8(Q),L=window.marked?marked.parse(q,{headerIds:!1,mangle:!1}):q.replace(/\n/g,"<br>");return L=C8(L),L=T8(L),L=L7(L),L=U7(L),L=q7(L,Y),L=x8(L,j),L}function w1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=M1($,2),N=w8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=I8(N),z=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return z=C8(z),z=T8(z),z=x8(z),z}function O7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,Y)=>{let z=N.trim().split(/\s+/).map((Q)=>{let[q,L]=Q.split(",").map(Number);return{x:q,y:L}});if(z.length<3)return`<polyline${Z}points="${N}"${Y}/>`;let V=[`M ${z[0].x},${z[0].y}`];for(let Q=1;Q<z.length-1;Q++){let q=z[Q-1],L=z[Q],W=z[Q+1],H=L.x-q.x,x=L.y-q.y,S=W.x-L.x,u=W.y-L.y,g=Math.sqrt(H*H+x*x),A=Math.sqrt(S*S+u*u),I=Math.min($,g/2,A/2);if(I<0.5){V.push(`L ${L.x},${L.y}`);continue}let h=L.x-H/g*I,E=L.y-x/g*I,f=L.x+S/A*I,n=L.y+u/A*I,d=H*u-x*S>0?1:0;V.push(`L ${h},${E}`),V.push(`A ${I},${I} 0 0 ${d} ${f},${n}`)}return V.push(`L ${z[z.length-1].x},${z[z.length-1].y}`),`<path${Z}d="${V.join(" ")}"${Y}/>`})}async function v$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=P8()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of Y)try{let V=z.dataset.mermaid,Q=V7(V||""),q=M1(Q,2),L=await $(q,{...N,transparent:!0});L=O7(L),z.innerHTML=L,z.removeAttribute("data-mermaid")}catch(V){console.error("Mermaid render error:",V);let Q=document.createElement("pre");Q.className="mermaid-error",Q.textContent=`Diagram error: ${V.message}`,z.innerHTML="",z.appendChild(Q),z.removeAttribute("data-mermaid")}}function b8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function S8(_){return String(_||"").trim()||"web:default"}function f8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function R8(_){if(!_)return!1;return _.status!=="running"}function v8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function m8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=k(null),Y=k(null),z=_?.thinking?w1(_.thinking):"",V=_?.answer?_$(_.answer,null,{sanitize:!1}):"";if(R(()=>{if(N.current&&z)v$(N.current).catch(()=>{})},[z]),R(()=>{if(Y.current&&V)v$(Y.current).catch(()=>{})},[V]),!_)return null;let Q=_.status==="running",q=Boolean(String(_.answer||"").trim()),L=Boolean(String(_.thinking||"").trim()),W=f8(_),H=R8(_),x=!Q&&q,S=Q?"Thinking…":_.status==="error"?"Error":"Done";return U`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${S}</span>
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
            ${L&&U`
                <details class="btw-block btw-thinking" open=${Q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${W&&U`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:V}}
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
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!x}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function F7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return N?{kind:j,html:N}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function H7(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Z?{kind:Y,html:Z}:{kind:Y}}function s$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function V_(_){return typeof _==="string"&&_.trim()?_.trim():null}function g8(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((N)=>typeof N==="string").map((N)=>N.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var p8="__PICLAW_WIDGET_HOST__:";function u8(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function b4(_,$){if(!_||_.type!=="generated_widget")return null;let j=F7(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:g8(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function h8(_){if(!_||typeof _!=="object")return null;let $=H7(_),j=V_(_?.widget_id)||V_(_?.widgetId)||V_(_?.tool_call_id)||V_(_?.toolCallId),Z=V_(_?.tool_call_id)||V_(_?.toolCallId),N=V_(_?.turn_id)||V_(_?.turnId),Y=V_(_?.title)||V_(_?.name)||"Generated widget",z=V_(_?.subtitle)||"",V=V_(_?.description)||z,Q=V_(_?.status),q=Q==="loading"||Q==="streaming"||Q==="final"||Q==="error"?Q:"streaming";return{title:Y,subtitle:z,description:V,originPostId:s$(_?.origin_post_id)??s$(_?.originPostId),originChatJid:V_(_?.origin_chat_jid)||V_(_?.originChatJid)||V_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:g8(_?.capabilities,!0),source:"live",status:q,turnId:N,toolCallId:Z,width:s$(_?.width),height:s$(_?.height),error:V_(_?.error)}}function c8(_){return b4(_,null)!==null}function g0(_){let $=V_(_?.toolCallId)||V_(_?.tool_call_id);if($)return $;let j=V_(_?.widgetId)||V_(_?.widget_id);if(j)return j;let Z=s$(_?.originPostId)??s$(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function i8(_){let j=(_?.artifact||{}).kind||_?.kind||null,N=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||N)}function l8(_){return i8(_)?"allow-downloads allow-scripts":"allow-downloads"}function I1(_){return{title:V_(_?.title)||"Generated widget",widgetId:V_(_?.widgetId)||V_(_?.widget_id),toolCallId:V_(_?.toolCallId)||V_(_?.tool_call_id),turnId:V_(_?.turnId)||V_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:V_(_?.status)||"final"}}function C1(_){return{...I1(_),subtitle:V_(_?.subtitle)||"",description:V_(_?.description)||"",error:V_(_?.error)||null,width:s$(_?.width),height:s$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function T1(_){return`${p8}${JSON.stringify(C1(_))}`}function n8(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=V_(_.text)||V_(_.content)||V_(_.message)||V_(_.prompt)||V_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=V_(j.text)||V_(j.content)||V_(j.message)||V_(j.prompt)||V_(j.value);if(Z)return Z}return null}function d8(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function s8(_){let $=V_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return V_(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function D7(_){let $=I1(_);return`<script>
(function () {
  const meta = ${u8($)};
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

  const windowNamePrefix = ${u8(p8)};
  let lastWindowName = null;
  function applyHostEnvelope(data) {
    if (!data) return;
    window.piclawWidget.lastHostMessage = data;
    if (data.type === 'widget.init' || data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = data.payload || null;
    }
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail: data }));
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      applyHostEnvelope({
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
    applyHostEnvelope(data);
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
</script>`}function o8(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",z=j==="svg"?N:Z;if(!z)return"";let V=i8(_),Q=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",V?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),q=j==="svg"?`<div class="widget-svg-shell">${z}</div>`:z,L=V?D7(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${Q}" />
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
${L}
</head>
<body>${q}</body>
</html>`}function r8({widget:_,onClose:$,onWidgetEvent:j}){let Z=k(null),N=k(!1),Y=R_(()=>o8(_),[_]);if(R(()=>{if(!_)return;let A=(I)=>{if(I.key==="Escape")$?.()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[_,$]),R(()=>{N.current=!1},[Y]),R(()=>{if(!_)return;let A=Z.current;if(!A)return;let I=(t)=>{try{let d=T1(_);if(A.name=d,A.contentWindow)A.contentWindow.name=d;A.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:t,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:t==="widget.init"?I1(_):C1(_)},"*")}catch{}},h=()=>{I("widget.init"),I("widget.update")},E=()=>{N.current=!0,h()};A.addEventListener("load",E);let n=[0,40,120,300,800].map((t)=>setTimeout(h,t));return()=>{A.removeEventListener("load",E),n.forEach((t)=>clearTimeout(t))}},[_,Y]),R(()=>{if(!_)return;let A=Z.current;if(!A?.contentWindow)return;try{let I=T1(_);A.name=I,A.contentWindow.name=I,A.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:C1(_)},"*")}catch{}return},[_]),R(()=>{if(!_)return;let A=(I)=>{let h=Z.current;if(!h?.contentWindow||I.source!==h.contentWindow)return;let E=I?.data;if(!E||E.__piclawGeneratedWidget!==!0)return;let f=g0({widgetId:E.widgetId,toolCallId:E.toolCallId}),n=g0(_);if(f&&n&&f!==n)return;j?.(E,_)};return window.addEventListener("message",A),()=>window.removeEventListener("message",A)},[_,j]),!_)return null;let V=(_?.artifact||{}).kind||_?.kind||"html",Q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",L=_?.source==="live"?"live":"timeline",W=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",H=L==="live"?`Live widget • ${W.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",x=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",S=!Y,u=s8(_),g=l8(_);return U`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${Q}
                onClick=${(A)=>A.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${H} • ${V.toUpperCase()}</div>
                        <div class="floating-widget-title">${Q}</div>
                        ${(q||x)&&U`
                            <div class="floating-widget-subtitle">${q||x}</div>
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
                    ${S?U`<div class="floating-widget-empty">${u}</div>`:U`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${Q}
                                name=${T1(_)}
                                sandbox=${g}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var a8="PiClaw";function S4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%Y.length,V=Y[z],Q=Z.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",L=q?q:null,W=j||Q==="PiClaw".toLowerCase()||Q==="pi";return{letter:N,color:V,image:L||(W?"/static/icon-192.png":null)}}function t8(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function e8(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function _6(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,z=Y?.dataset?.colorTheme||"",V=Y?.dataset?.tint||"",Q=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(Q&&(V||z&&z!=="default"))return Q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Y=0;Y<j.length;Y+=1)Z=(Z*31+j.charCodeAt(Y))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function J7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function t2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function $6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return t2(_)?"Compacting context":"Working..."}function E7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function j6(_,$=Date.now()){let j=J7(_);if(j===null)return null;return E7(Math.max(0,$-j))}function Z6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:Y,turnId:z,steerQueued:V,onPanelToggle:Q}){let W=($_)=>{if(!$_)return{text:"",totalLines:0,fullText:""};if(typeof $_==="string"){let I_=$_,a_=I_?I_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:I_,totalLines:a_,fullText:I_}}let F_=$_.text||"",Z_=$_.fullText||$_.full_text||F_,H_=Number.isFinite($_.totalLines)?$_.totalLines:Z_?Z_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:F_,totalLines:H_,fullText:Z_}},H=160,x=($_)=>String($_||"").replace(/<\/?internal>/gi,""),S=($_)=>{if(!$_)return 1;return Math.max(1,Math.ceil($_.length/160))},u=($_,F_,Z_)=>{let H_=($_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!H_)return{text:"",omitted:0,totalLines:Number.isFinite(Z_)?Z_:0,visibleLines:0};let I_=H_.split(`
`),a_=I_.length>F_?I_.slice(0,F_).join(`
`):H_,p_=Number.isFinite(Z_)?Z_:I_.reduce((c_,P_)=>c_+S(P_),0),s_=a_?a_.split(`
`).reduce((c_,P_)=>c_+S(P_),0):0,h_=Math.max(p_-s_,0);return{text:a_,omitted:h_,totalLines:p_,visibleLines:s_}},g=W(j),A=W(Z),I=W($),h=Boolean(g.text)||g.totalLines>0,E=Boolean(A.text)||A.totalLines>0,f=Boolean(I.fullText?.trim()||I.text?.trim());if(!_&&!f&&!h&&!E&&!N&&!Y)return null;let[n,t]=v(new Set),[d,j_]=v(()=>Date.now()),i=($_)=>t((F_)=>{let Z_=new Set(F_),H_=!Z_.has($_);if(H_)Z_.add($_);else Z_.delete($_);if(typeof Q==="function")Q($_,H_);return Z_});R(()=>{t(new Set)},[z]);let q_=t2(_);R(()=>{if(!q_)return;j_(Date.now());let $_=setInterval(()=>j_(Date.now()),1000);return()=>clearInterval($_)},[q_,_?.started_at,_?.startedAt]);let d_=_?.turn_id||z,g_=_6(d_),s=V?"turn-dot turn-dot-queued":"turn-dot",N_=($_)=>$_,__=Boolean(_?.last_activity||_?.lastActivity),W_=($_)=>$_==="warning"?"#f59e0b":$_==="error"?"var(--danger-color)":$_==="success"?"var(--success-color)":g_,z_=Y?.kind||"info",Q_=W_(z_),U_=W_(_?.kind||(q_?"warning":"info")),Y_="",m_=_?.title,w_=_?.status;if(_?.type==="plan")Y_=m_?`Planning: ${m_}`:"Planning...";else if(_?.type==="tool_call")Y_=m_?`Running: ${m_}`:"Running tool...";else if(_?.type==="tool_status")Y_=m_?`${m_}: ${w_||"Working..."}`:w_||"Working...";else if(_?.type==="error")Y_=m_||"Agent error";else Y_=m_||w_||"Working...";if(__)Y_="Last activity just now";let E_=({panelTitle:$_,text:F_,fullText:Z_,totalLines:H_,maxLines:I_,titleClass:a_,panelKey:p_})=>{let s_=n.has(p_),h_=Z_||F_||"",c_=p_==="thought"||p_==="draft"?x(h_):h_,P_=typeof I_==="number",A_=s_&&P_,u_=P_?u(c_,I_,H_):{text:c_||"",omitted:0,totalLines:Number.isFinite(H_)?H_:0};if(!c_&&!(Number.isFinite(u_.totalLines)&&u_.totalLines>0))return null;let X0=`agent-thinking-body${P_?" agent-thinking-body-collapsible":""}`,x0=P_?`--agent-thinking-collapsed-lines: ${I_};`:"";return U`
            <div
                class="agent-thinking"
                data-expanded=${s_?"true":"false"}
                data-collapsible=${P_?"true":"false"}
                style=${g_?`--turn-color: ${g_};`:""}
            >
                <div class="agent-thinking-title ${a_||""}">
                    ${g_&&U`<span class=${s} aria-hidden="true"></span>`}
                    ${$_}
                    ${A_&&U`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${$_} panel`}
                            onClick=${()=>i(p_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${X0}
                    style=${x0}
                    dangerouslySetInnerHTML=${{__html:w1(c_)}}
                />
                ${!s_&&u_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>i(p_)}>
                        ▸ ${u_.omitted} more lines
                    </button>
                `}
                ${s_&&u_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>i(p_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},y_=N?.tool_call?.title,K0=y_?`Awaiting approval: ${y_}`:"Awaiting approval",G0=q_?j6(_,d):null,X_=($_,F_,Z_=null)=>{let H_=$6($_);return U`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${F_?`--turn-color: ${F_};`:""}
                title=${$_?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${F_&&U`<span class=${s} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${H_}</span>
                    ${Z_&&U`<span class="agent-status-elapsed">${Z_}</span>`}
                </div>
                ${$_.detail&&U`<div class="agent-thinking-body">${$_.detail}</div>`}
            </div>
        `};return U`
        <div class="agent-status-panel">
            ${Y&&X_(Y,Q_)}
            ${_?.type==="intent"&&X_(_,U_,G0)}
            ${N&&U`
                <div class="agent-status agent-status-request" aria-live="polite" style=${g_?`--turn-color: ${g_};`:""}>
                    <span class=${s} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${K0}</span>
                </div>
            `}
            ${h&&E_({panelTitle:N_("Planning"),text:g.text,fullText:g.fullText,totalLines:g.totalLines,panelKey:"plan"})}
            ${E&&E_({panelTitle:N_("Thoughts"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${f&&E_({panelTitle:N_("Draft"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&U`
                <div class=${`agent-status${__?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${g_?`--turn-color: ${g_};`:""}>
                    ${g_&&U`<span class=${s} aria-hidden="true"></span>`}
                    ${_?.type==="error"?U`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!__&&U`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${Y_}</span>
                </div>
            `}
        </div>
    `}function N6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:Y}=_,z=Z?.title||"Agent Request",V=Z?.kind||"other",Q=Z?.rawInput||{},q=Q.command||Q.commands&&Q.commands[0]||null,L=Q.diff||null,W=Q.fileName||Q.path||null,H=Z?.description||Q.description||Q.explanation||null,S=(Array.isArray(Z?.locations)?Z.locations:[]).map((h)=>h?.path).filter((h)=>Boolean(h)),u=Array.from(new Set([W,...S].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let g=async(h)=>{try{await F1(j,h,Y||null),$()}catch(E){console.error("Failed to respond to agent request:",E)}},A=async()=>{try{await L4(z,`Auto-approved: ${z}`),await F1(j,"approved",Y||null),$()}catch(h){console.error("Failed to add to whitelist:",h)}},I=N&&N.length>0;return U`
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
                ${(H||q||L||u.length>0)&&U`
                    <div class="agent-request-body">
                        ${H&&U`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${u.length>0&&U`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${u.map((h,E)=>U`<li key=${E}>${h}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&U`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${L&&U`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${L}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${I?N.map((h)=>U`
                            <button 
                                key=${h.optionId||h.id||String(h)}
                                class="agent-request-btn ${h.kind==="allow_once"||h.kind==="allow_always"?"primary":""}"
                                onClick=${()=>g(h.optionId||h.id||h)}
                            >
                                ${h.name||h.label||h.optionId||h.id||String(h)}
                            </button>
                        `):U`
                        <button class="agent-request-btn primary" onClick=${()=>g("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>g("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${A}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function Y6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,Y=86400000;if(Z<Y){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*Y){let Q=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Q} ${q}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${V}`}function e2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function Q$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function q2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var y7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),A7=new Set(["text/markdown"]),k7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),P7=new Set(["application/vnd.jgraph.mxfile"]);function _1(_){return typeof _==="string"?_.trim().toLowerCase():""}function x7(_){let $=_1(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function M7(_){let $=_1(_);return!!$&&$.endsWith(".pdf")}function w7(_){let $=_1(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function $1(_,$){let j=_1(_);if(x7($)||P7.has(j))return"drawio";if(M7($)||j==="application/pdf")return"pdf";if(w7($)||k7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(y7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function z6(_){let $=_1(_);return A7.has($)}function K6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function I7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function C7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),Y=Number(j[3]);if(![Z,N,Y].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:Y}}function G6(_){return I7(_)||C7(_)}function b1(_){let $=(Y)=>{let z=Y/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function T7(_,$){let j=Math.max(b1(_),b1($)),Z=Math.min(b1(_),b1($));return(j+0.05)/(Z+0.05)}function b7(_,$,j="#ffffff"){let Z=G6(_);if(!Z)return j;let N=j,Y=-1;for(let z of $){let V=G6(z);if(!V)continue;let Q=T7(Z,V);if(Q>Y)N=z,Y=Q}return N}function f4(){let _=getComputedStyle(document.documentElement),$=(S,u)=>{for(let g of S){let A=_.getPropertyValue(g).trim();if(A)return A}return u},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),V=$(["--accent-color","--color-accent"],"#1d9bf0"),Q=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),L=$(["--danger-color","--color-error"],"#f4212e"),W=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),x=b7(V,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:Y,bgEmphasis:z,accent:V,good:Q,warning:q,attention:L,border:W,fontFamily:H,buttonTextColor:x}}function X6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:Y,warning:z,attention:V,border:Q,fontFamily:q}=f4();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:z,subtle:z},attention:{default:V,subtle:V}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:z,subtle:z},attention:{default:V,subtle:V}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:Q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var S7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),V6=!1,S1=null,q6=!1;function R4(_){_.querySelector(".adaptive-card-notice")?.remove()}function f7(_,$,j="error"){R4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function R7(_,$=(j)=>_$(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function v7(_=($)=>_$($,null)){return($,j)=>{try{let Z=R7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function m7(_){if(q6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=v7(),q6=!0}async function u7(){if(V6)return;if(S1)return S1;return S1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{V6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),S1}function g7(){return globalThis.AdaptiveCards}function p7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function h7(_){return S7.has(_)}function m4(_){if(!Array.isArray(_))return[];return _.filter(p7)}function c7(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function v4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>v4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${v4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function i7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return v4($);return typeof $==="string"?$:String($)}function l7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((V)=>Z(V));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=i7(z.type,j[z.id],z);for(let[V,Q]of Object.entries(z))if(Array.isArray(Q)||Q&&typeof Q==="object")z[V]=Z(Q);return z};return Z(_)}function n7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function d7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function s7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=d7(_.completed_at||j?.submitted_at),Y=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function W6(_,$,j){if(!h7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await u7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=g7();m7(Z);let N=new Z.AdaptiveCard,Y=f4();N.hostConfig=new Z.HostConfig(X6());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,V=$.state==="active"?$.payload:l7($.payload,z);N.parse(V),N.onExecuteAction=(L)=>{let W=c7(L);if(j?.onAction)R4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(W)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let x=H instanceof Error?H.message:String(H||"Action failed.");f7(_,x||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",W)};let Q=N.render();if(!Q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let q=s7($);if(q){_.classList.add("adaptive-card-finished");let L=document.createElement("div");L.className=`adaptive-card-status adaptive-card-status-${$.state}`;let W=document.createElement("span");if(W.className="adaptive-card-status-label",W.textContent=q.label,L.appendChild(W),q.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=q.detail,L.appendChild(H)}_.appendChild(L)}if(R4(_),_.appendChild(Q),q)n7(Q);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function j1(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>j1($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${j1(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function Q6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:j1(j)})).filter(($)=>$.value)}function o7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function u4(_){if(!Array.isArray(_))return[];return _.filter(o7)}function L6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=j1(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=Q6(j).map(({key:Y,value:z})=>`${Y}: ${z}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function U6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=Q6(_.data),Z=j.length>0?j.slice(0,2).map(({key:Y,value:z})=>`${Y}: ${z}`).join(", "):j1(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function r7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?Q$($):null},{label:"Added",value:_?.created_at?q2(_.created_at):null}].filter((Z)=>Z.value)}function a7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let Y=W$(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function B6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=R_(()=>$1($?.content_type,Z),[$?.content_type,Z]),Y=K6(N),z=R_(()=>z6($?.content_type),[$?.content_type]),[V,Q]=v(N==="text"),[q,L]=v(""),[W,H]=v(null),x=k(null),S=R_(()=>r7($),[$]),u=R_(()=>a7(_,Z,N),[_,Z,N]),g=R_(()=>{if(!z||!q)return"";return _$(q)},[z,q]);return R(()=>{let A=(I)=>{if(I.key==="Escape")j()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[j]),R(()=>{if(!x.current||!g)return;v$(x.current);return},[g]),R(()=>{let A=!1;async function I(){if(N!=="text"){Q(!1),H(null);return}Q(!0),H(null);try{let h=await F4(_);if(!A)L(h)}catch{if(!A)H("Failed to load text preview.")}finally{if(!A)Q(!1)}}return I(),()=>{A=!0}},[_,N]),U`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(A)=>{A.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
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
                            href=${W$(_)}
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
                    ${V&&U`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!V&&W&&U`<div class="attachment-preview-state">${W}</div>`}
                    ${!V&&!W&&N==="image"&&U`
                        <img class="attachment-preview-image" src=${W$(_)} alt=${Z} />
                    `}
                    ${!V&&!W&&(N==="pdf"||N==="office"||N==="drawio")&&u&&U`
                        <iframe class="attachment-preview-frame" src=${u} title=${Z}></iframe>
                    `}
                    ${!V&&!W&&N==="drawio"&&U`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!V&&!W&&N==="text"&&z&&U`
                        <div
                            ref=${x}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:g}}
                        />
                    `}
                    ${!V&&!W&&N==="text"&&!z&&U`
                        <pre class="attachment-preview-text">${q}</pre>
                    `}
                    ${!V&&!W&&N==="unsupported"&&U`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${S.map((A)=>U`
                        <div class="attachment-preview-meta-item" key=${A.label}>
                            <span class="attachment-preview-meta-label">${A.label}</span>
                            <span class="attachment-preview-meta-value">${A.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function O6({src:_,onClose:$}){return R(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),U`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function t7({mediaId:_,onPreview:$}){let[j,Z]=v(null);if(R(()=>{A2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",Y=j.metadata?.size,z=Y?Q$(Y):"",Q=$1(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return U`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${W$(_)} download=${N} class="file-attachment-main">
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
                        ${z&&U`<span class="file-size">${z}</span>`}
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
                ${Q}
            </button>
        </div>
    `}function e7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=v(null);R(()=>{if(!Number.isFinite(j))return;A2(j).then(N).catch(()=>{});return},[j]);let Y=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?W$(j):null,Q=$1(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return U`
        <span class="attachment-pill" title=${Y}>
            ${z?U`
                    <a href=${z} download=${Y} class="attachment-pill-main" onClick=${(q)=>q.stopPropagation()}>
                        <${D$}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:U`
                    <${D$}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Z&&U`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${Q}
                    onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function f1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?q2(Z):null;return U`
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
    `}function _j({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?Q$(_.size):"",N=_.mime_type||"",Y=Zj(N),z=V2(_.uri);return U`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(V)=>V.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
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
    `}function $j({block:_}){let[$,j]=v(!1),Z=_.uri||"Embedded resource",N=_.text||"",Y=Boolean(_.data),z=_.mime_type||"";return U`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&U`
                ${N&&U`<pre class="resource-embed-content">${N}</pre>`}
                ${Y&&U`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&U`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(V)=>{V.preventDefault(),V.stopPropagation();let Q=new Blob([Uint8Array.from(atob(_.data),(W)=>W.charCodeAt(0))],{type:z||"application/octet-stream"}),q=URL.createObjectURL(Q),L=document.createElement("a");L.href=q,L.download=Z.split("/").pop()||"resource",L.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function jj({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=b4(_,$),N=c8(_),Y=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,z=Z?.title||_.title||_.name||"Generated widget",V=Z?.description||_.description||_.subtitle||"",Q=_.open_label||"Open widget",q=(L)=>{if(L.preventDefault(),L.stopPropagation(),!Z)return;j?.(Z)};return U`
        <div class="generated-widget-launch" onClick=${(L)=>L.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${z}</div>
            </div>
            ${V&&U`<div class="generated-widget-launch-description">${V}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!N}
                    onClick=${q}
                    title=${N?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${Q}
                </button>
                <span class="generated-widget-launch-note">
                    ${N?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function Zj(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function Nj({preview:_}){let $=V2(_.url),j=V2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return U`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&U`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function Yj(_,$){return typeof _==="string"?_:""}var zj=1800,Kj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Gj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,Xj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function Vj(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function qj(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(Y,z)=>{let V=z||"idle";if(Y.dataset.copyState=V,V==="success")Y.innerHTML=Gj,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(V==="error")Y.innerHTML=Xj,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=Kj,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let z=document.createElement("div");z.className="post-code-block",Y.parentNode?.insertBefore(z,Y),z.appendChild(Y);let V=document.createElement("button");V.type="button",V.className="post-code-copy-btn",N(V,"idle"),z.appendChild(V);let Q=async(q)=>{q.preventDefault(),q.stopPropagation();let W=Y.querySelector("code")?.textContent||"",H=await Vj(W);N(V,H?"success":"error");let x=j.get(V);if(x)clearTimeout(x);let S=setTimeout(()=>{N(V,"idle"),j.delete(V)},zj);j.set(V,S)};V.addEventListener("click",Q),Z.push(()=>{V.removeEventListener("click",Q);let q=j.get(V);if(q)clearTimeout(q);if(z.parentNode)z.parentNode.insertBefore(Y,z),z.remove()})}),()=>{Z.forEach((Y)=>Y())}}function Wj(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q))N.push(q.replace(/^\s*-\s+/,"").trim());else if(!q.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),V=j.slice(Y),Q=[...z,...V].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,fileRefs:N}}function Qj(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q)){let W=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(W)N.push(W[1])}else if(!q.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),V=j.slice(Y),Q=[...z,...V].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,messageRefs:N}}function Lj(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1){let L=j[q].trim();if((L==="Images:"||L==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q)){let L=q.replace(/^\s*-\s+/,"").trim(),W=L.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||L.match(/^attachment:([^\s]+)\s+(.+)$/i);if(W){let H=W[1],x=(W[2]||"").trim()||H;N.push({id:H,label:x,raw:L})}else N.push({id:null,label:L,raw:L})}else if(!q.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),V=j.slice(Y),Q=[...z,...V].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,attachments:N}}function Uj(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Bj(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(Uj).sort((L,W)=>W.length-L.length),N=new RegExp(`(${Z.join("|")})`,"gi"),Y=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),V=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),Q=[],q;while(q=V.nextNode())Q.push(q);for(let L of Q){let W=L.nodeValue;if(!W||!N.test(W)){N.lastIndex=0;continue}N.lastIndex=0;let H=L.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let x=W.split(N).filter((u)=>u!=="");if(x.length===0)continue;let S=z.createDocumentFragment();for(let u of x)if(Y.test(u)){let g=z.createElement("mark");g.className="search-highlight-term",g.textContent=u,S.appendChild(g)}else S.appendChild(z.createTextNode(u));L.parentNode.replaceChild(S,L)}return z.body.innerHTML}function F6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:Y,agentAvatarUrl:z,userName:V,userAvatarUrl:Q,userAvatarBackground:q,onDelete:L,isThreadReply:W,isThreadPrev:H,isThreadNext:x,isRemoving:S,highlightQuery:u,onFileRef:g,onOpenWidget:A}){let[I,h]=v(null),E=k(null),f=_.data,n=f.type==="agent_response",t=V||"You",d=n?Y||a8:t,j_=n?S4(Y,z,!0):S4(t,Q),i=typeof q==="string"?q.trim().toLowerCase():"",q_=!n&&j_.image&&(i==="clear"||i==="transparent"),d_=n&&Boolean(j_.image),g_=`background-color: ${q_||d_?"transparent":j_.color}`,s=f.content_meta,N_=Boolean(s?.truncated),__=Boolean(s?.preview),W_=N_&&!__,z_=N_?{originalLength:Number.isFinite(s?.original_length)?s.original_length:f.content?f.content.length:0,maxLength:Number.isFinite(s?.max_length)?s.max_length:0}:null,Q_=f.content_blocks||[],U_=f.media_ids||[],Y_=Yj(f.content,f.link_previews),{content:m_,fileRefs:w_}=Wj(Y_),{content:E_,messageRefs:y_}=Qj(m_),{content:K0,attachments:G0}=Lj(E_);Y_=K0;let X_=m4(Q_),$_=u4(Q_),F_=X_.length===1&&typeof X_[0]?.fallback_text==="string"?X_[0].fallback_text.trim():"",Z_=$_.length===1?L6($_[0]).trim():"",H_=Boolean(F_)&&Y_?.trim()===F_||Boolean(Z_)&&Y_?.trim()===Z_,I_=Boolean(Y_)&&!W_&&!H_,a_=typeof u==="string"?u.trim():"",p_=R_(()=>{if(!Y_||H_)return"";let T=_$(Y_,j);return a_?Bj(T,a_):T},[Y_,H_,a_]),s_=(T,a)=>{T.stopPropagation(),h(W$(a))},[h_,c_]=v(null),P_=(T)=>{c_(T)},A_=(T)=>{T.stopPropagation(),L?.(_)},u_=(T,a)=>{let B_=new Set;if(!T||a.length===0)return{content:T,usedIds:B_};return{content:T.replace(/attachment:([^\s)"']+)/g,(o_,F0,S_,f0)=>{let $$=F0.replace(/^\/+/,""),C0=a.find((H0)=>H0.name&&H0.name.toLowerCase()===$$.toLowerCase()&&!B_.has(H0.id))||a.find((H0)=>!B_.has(H0.id));if(!C0)return o_;if(B_.add(C0.id),f0.slice(Math.max(0,S_-2),S_)==="](")return`/media/${C0.id}`;return C0.name||"attachment"}),usedIds:B_}},X0=[],x0=[],C_=[],E0=[],j0=[],T_=[],Z0=[],t_=0;if(Q_.length>0)Q_.forEach((T)=>{if(T?.type==="text"&&T.annotations)Z0.push(T.annotations);if(T?.type==="generated_widget")T_.push(T);else if(T?.type==="resource_link")E0.push(T);else if(T?.type==="resource")j0.push(T);else if(T?.type==="file"){let a=U_[t_++];if(a)x0.push(a),C_.push({id:a,name:T?.name||T?.filename||T?.title})}else if(T?.type==="image"||!T?.type){let a=U_[t_++];if(a){let B_=typeof T?.mime_type==="string"?T.mime_type:void 0;X0.push({id:a,annotations:T?.annotations,mimeType:B_}),C_.push({id:a,name:T?.name||T?.filename||T?.title})}}});else if(U_.length>0){let T=G0.length>0;U_.forEach((a,B_)=>{let M_=G0[B_]||null;if(C_.push({id:a,name:M_?.label||null}),T)x0.push(a);else X0.push({id:a,annotations:null})})}if(G0.length>0)G0.forEach((T)=>{if(!T?.id)return;let a=C_.find((B_)=>String(B_.id)===String(T.id));if(a&&!a.name)a.name=T.label});let{content:$0,usedIds:N0}=u_(Y_,C_);Y_=$0;let b_=X0.filter(({id:T})=>!N0.has(T)),O0=x0.filter((T)=>!N0.has(T)),b0=G0.length>0?G0.map((T,a)=>({id:T.id||`attachment-${a+1}`,label:T.label||`attachment-${a+1}`})):C_.map((T,a)=>({id:T.id,label:T.name||`attachment-${a+1}`})),k_=R_(()=>m4(Q_),[Q_]),e_=R_(()=>u4(Q_),[Q_]),S0=R_(()=>{return k_.map((T)=>`${T.card_id}:${T.state}`).join("|")},[k_]);R(()=>{if(!E.current)return;return v$(E.current),qj(E.current)},[p_]);let x_=k(null);return R(()=>{if(!x_.current||k_.length===0)return;let T=x_.current;T.innerHTML="";for(let a of k_){let B_=document.createElement("div");T.appendChild(B_),W6(B_,a,{onAction:async(M_)=>{if(M_.type==="Action.OpenUrl"){let o_=V2(M_.url||"");if(!o_)throw Error("Invalid URL");window.open(o_,"_blank","noopener,noreferrer");return}if(M_.type==="Action.Submit"){await Q4({post_id:_.id,thread_id:f.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:a.card_id,action:{type:M_.type,title:M_.title||"",data:M_.data}});return}console.warn("[post] unsupported adaptive card action:",M_.type,M_)}}).catch((M_)=>{console.error("[post] adaptive card render error:",M_),B_.textContent=a.fallback_text||"Card failed to render."})}},[S0,_.id]),U`
        <div id=${`post-${_.id}`} class="post ${n?"agent-post":""} ${W?"thread-reply":""} ${H?"thread-prev":""} ${x?"thread-next":""} ${S?"removing":""}" onClick=${$}>
            <div class="post-avatar ${n?"agent-avatar":""} ${j_.image?"has-image":""}" style=${g_}>
                ${j_.image?U`<img src=${j_.image} alt=${d} />`:j_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${A_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${d}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(T)=>{if(T.preventDefault(),T.stopPropagation(),Z)Z(_.id)}}>${Y6(_.timestamp)}</a>
                </div>
                ${W_&&z_&&U`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${e2(z_.originalLength)} chars
                            ${z_.maxLength?U` • Display limit: ${e2(z_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${__&&z_&&U`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${e2(z_.maxLength)} of ${e2(z_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(w_.length>0||y_.length>0||b0.length>0)&&U`
                    <div class="post-file-refs">
                        ${y_.map((T)=>{let a=(B_)=>{if(B_.preventDefault(),B_.stopPropagation(),N)N(T,_.chat_jid||null);else{let M_=document.getElementById("post-"+T);if(M_)M_.scrollIntoView({behavior:"smooth",block:"center"}),M_.classList.add("post-highlight"),setTimeout(()=>M_.classList.remove("post-highlight"),2000)}};return U`
                                <a href=${`#msg-${T}`} class="post-msg-pill-link" onClick=${a}>
                                    <${D$}
                                        prefix="post"
                                        label=${"msg:"+T}
                                        title=${"Message "+T}
                                        icon="message"
                                        onClick=${a}
                                    />
                                </a>
                            `})}
                        ${w_.map((T)=>{let a=T.split("/").pop()||T;return U`
                                <${D$}
                                    prefix="post"
                                    label=${a}
                                    title=${T}
                                    onClick=${()=>g?.(T)}
                                />
                            `})}
                        ${b0.map((T)=>U`
                            <${e7}
                                key=${T.id}
                                attachment=${T}
                                onPreview=${P_}
                            />
                        `)}
                    </div>
                `}
                ${I_&&U`
                    <div 
                        ref=${E}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:p_}}
                        onClick=${(T)=>{if(T.target.classList.contains("hashtag")){T.preventDefault(),T.stopPropagation();let a=T.target.dataset.hashtag;if(a)j?.(a)}else if(T.target.tagName==="IMG")T.preventDefault(),T.stopPropagation(),h(T.target.src)}}
                    />
                `}
                ${k_.length>0&&U`
                    <div ref=${x_} class="post-adaptive-cards" />
                `}
                ${e_.length>0&&U`
                    <div class="post-adaptive-card-submissions">
                        ${e_.map((T,a)=>{let B_=U6(T),M_=`${T.card_id}-${a}`;return U`
                                <div key=${M_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${B_.title}</span>
                                        </div>
                                    </div>
                                    ${B_.fields.length>0&&U`
                                        <div class="adaptive-card-submission-fields">
                                            ${B_.fields.map((o_)=>U`
                                                <span class="adaptive-card-submission-field" title=${`${o_.key}: ${o_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${o_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${o_.value}</span>
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
                ${T_.length>0&&U`
                    <div class="generated-widget-launches">
                        ${T_.map((T,a)=>U`
                            <${jj}
                                key=${T.widget_id||T.id||`${_.id}-widget-${a}`}
                                block=${T}
                                post=${_}
                                onOpenWidget=${A}
                            />
                        `)}
                    </div>
                `}
                ${Z0.length>0&&U`
                    ${Z0.map((T,a)=>U`
                        <${f1} key=${a} annotations=${T} />
                    `)}
                `}
                ${b_.length>0&&U`
                    <div class="media-preview">
                        ${b_.map(({id:T,mimeType:a})=>{let M_=typeof a==="string"&&a.toLowerCase().startsWith("image/svg")?W$(T):O4(T);return U`
                                <img 
                                    key=${T} 
                                    src=${M_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(o_)=>s_(o_,T)}
                                />
                            `})}
                    </div>
                `}
                ${b_.length>0&&U`
                    ${b_.map(({annotations:T},a)=>U`
                        ${T&&U`<${f1} key=${a} annotations=${T} />`}
                    `)}
                `}
                ${O0.length>0&&U`
                    <div class="file-attachments">
                        ${O0.map((T)=>U`
                            <${t7} key=${T} mediaId=${T} onPreview=${P_} />
                        `)}
                    </div>
                `}
                ${E0.length>0&&U`
                    <div class="resource-links">
                        ${E0.map((T,a)=>U`
                            <div key=${a}>
                                <${_j} block=${T} />
                                <${f1} annotations=${T.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${j0.length>0&&U`
                    <div class="resource-embeds">
                        ${j0.map((T,a)=>U`
                            <div key=${a}>
                                <${$j} block=${T} />
                                <${f1} annotations=${T.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${f.link_previews?.length>0&&U`
                    <div class="link-previews">
                        ${f.link_previews.map((T,a)=>U`
                            <${Nj} key=${a} preview=${T} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${I&&U`<${O6} src=${I} onClose=${()=>h(null)} />`}
        ${h_&&U`
            <${B6}
                mediaId=${h_.mediaId}
                info=${h_.info}
                onClose=${()=>c_(null)}
            />
        `}
    `}function H6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:Y,onScrollToMessage:z,onFileRef:V,onOpenWidget:Q,emptyMessage:q,timelineRef:L,agents:W,user:H,onDeletePost:x,reverse:S=!0,removingPostIds:u,searchQuery:g}){let[A,I]=v(!1),h=k(null),E=typeof IntersectionObserver<"u",f=w(async()=>{if(!j||!$||A)return;I(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{I(!1)}},[$,A,j]),n=w((s)=>{let{scrollTop:N_,scrollHeight:__,clientHeight:W_}=s.target,z_=S?__-W_-N_:N_,Q_=Math.max(300,W_);if(z_<Q_)f()},[S,f]);R(()=>{if(!E)return;let s=h.current,N_=L?.current;if(!s||!N_)return;let __=300,W_=new IntersectionObserver((z_)=>{for(let Q_ of z_){if(!Q_.isIntersecting)continue;f()}},{root:N_,rootMargin:`${__}px 0px ${__}px 0px`,threshold:0});return W_.observe(s),()=>W_.disconnect()},[E,$,j,L,f]);let t=k(f);if(t.current=f,R(()=>{if(E)return;if(!L?.current)return;let{scrollTop:s,scrollHeight:N_,clientHeight:__}=L.current,W_=S?N_-__-s:s,z_=Math.max(300,__);if(W_<z_)t.current?.()},[E,_,$,S,L]),R(()=>{if(!L?.current)return;if(!$||A)return;let{scrollTop:s,scrollHeight:N_,clientHeight:__}=L.current,W_=S?N_-__-s:s,z_=Math.max(300,__);if(N_<=__+1||W_<z_)t.current?.()},[_,$,A,S,L]),!_)return U`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return U`
            <div class="timeline" ref=${L}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let d=_.slice().sort((s,N_)=>s.id-N_.id),j_=(s)=>{let N_=s?.data?.thread_id;if(N_===null||N_===void 0||N_==="")return null;let __=Number(N_);return Number.isFinite(__)?__:null},i=new Map;for(let s=0;s<d.length;s+=1){let N_=d[s],__=Number(N_?.id),W_=j_(N_);if(W_!==null){let z_=i.get(W_)||{anchorIndex:-1,replyIndexes:[]};z_.replyIndexes.push(s),i.set(W_,z_)}else if(Number.isFinite(__)){let z_=i.get(__)||{anchorIndex:-1,replyIndexes:[]};z_.anchorIndex=s,i.set(__,z_)}}let q_=new Map;for(let[s,N_]of i.entries()){let __=new Set;if(N_.anchorIndex>=0)__.add(N_.anchorIndex);for(let W_ of N_.replyIndexes)__.add(W_);q_.set(s,Array.from(__).sort((W_,z_)=>W_-z_))}let d_=d.map((s,N_)=>{let __=j_(s);if(__===null)return{hasThreadPrev:!1,hasThreadNext:!1};let W_=q_.get(__);if(!W_||W_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let z_=W_.indexOf(N_);if(z_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:z_>0,hasThreadNext:z_<W_.length-1}}),g_=U`<div class="timeline-sentinel" ref=${h}></div>`;return U`
        <div class="timeline ${S?"reverse":"normal"}" ref=${L} onScroll=${n}>
            <div class="timeline-content">
                ${S?g_:null}
                ${d.map((s,N_)=>{let __=Boolean(s.data?.thread_id&&s.data.thread_id!==s.id),W_=u?.has?.(s.id),z_=d_[N_]||{};return U`
                    <${F6}
                        key=${s.id}
                        post=${s}
                        isThreadReply=${__}
                        isThreadPrev=${z_.hasThreadPrev}
                        isThreadNext=${z_.hasThreadNext}
                        isRemoving=${W_}
                        highlightQuery=${g}
                        agentName=${t8(s.data?.agent_id,W||{})}
                        agentAvatarUrl=${e8(s.data?.agent_id,W||{})}
                        userName=${H?.name||H?.user_name}
                        userAvatarUrl=${H?.avatar_url||H?.avatarUrl||H?.avatar}
                        userAvatarBackground=${H?.avatar_background||H?.avatarBackground}
                        onClick=${()=>Z?.(s)}
                        onHashtagClick=${N}
                        onMessageRef=${Y}
                        onScrollToMessage=${z}
                        onFileRef=${V}
                        onOpenWidget=${Q}
                        onDelete=${x}
                    />
                `})}
                ${S?null:g_}
            </div>
        </div>
    `}class D6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let Y=N===!0?0:typeof N==="number"?N:0;if(Y>j)j=Y,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var r_=new D6;var R1=null,g4=null;function Oj(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function J6(){if(g4)return Promise.resolve(g4);if(!R1)R1=import(Oj()).then((_)=>{return g4=_,_}).catch((_)=>{throw R1=null,_});return R1}class E6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await J6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var p4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new E6(_,$)}};function h4(){J6().catch(()=>{})}var i4="piclaw://terminal";var Fj={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Hj={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},v1=null,c4=null;function Dj(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Jj(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,Y)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!Dj(z))return $(N,Y);if(N instanceof Request)return $(new Request(j,N));return $(j,Y)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Ej(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!v1)v1=Jj(()=>Promise.resolve($.init?.())).catch((j)=>{throw v1=null,j});return await v1,$}async function yj(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!c4)c4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await c4}async function Aj(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function kj(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Pj(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function m$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function xj(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function y6(){let _=Pj(),$=_?Hj:Fj,j=m$("--bg-primary",_?"#000000":"#ffffff"),Z=m$("--text-primary",_?"#e7e9ea":"#0f1419"),N=m$("--text-secondary",_?"#71767b":"#536471"),Y=m$("--accent-color","#1d9bf0"),z=m$("--danger-color",_?"#ff7b72":"#cf222e"),V=m$("--success-color",_?"#7ee787":"#1a7f37"),Q=m$("--bg-hover",_?"#1d1f23":"#e8ebed"),q=m$("--border-color",_?"#2f3336":"#eff3f4"),L=m$("--accent-soft-strong",xj(Y,_?"47":"33"));return{background:j,foreground:Z,cursor:Y,cursorAccent:j,selectionBackground:L,selectionForeground:Z,black:Q,red:z,green:V,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:q}}class l4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Ej();if(await yj(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:y6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=y6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Aj();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(kj($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var n4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new l4(_,$)}},d4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new l4(_,$)}};function o$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Mj(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,Y=Z?.[2]||"",z=Z?.[3]||"",V=String($||"").split("/").slice(0,-1).join("/"),q=N.startsWith("/")?N:`${V?`${V}/`:""}${N}`,L=[];for(let H of q.split("/")){if(!H||H===".")continue;if(H===".."){if(L.length>0)L.pop();continue}L.push(H)}let W=L.join("/");return`${D1(W)}${Y}${z}`}function Z1(_){return _?.preview||null}function wj(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function Ij(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function Cj(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${o$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${o$(Q$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${o$(q2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${o$(Ij($))}</span>`),Z.push(`<span><strong>extension:</strong> ${o$(wj(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${o$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function Tj(_){let $=Z1(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=Cj(_,$);if($.kind==="image"){let Z=$.url||($.path?D1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${o$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=_$($.text||"",null,{rewriteImageSrc:(N)=>Mj(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${o$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class s4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=Tj(this.context)}getContent(){let _=Z1(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=Z1(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var o4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=Z1(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new s4(_,$)}},r4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return Z1(_)||_?.path?1:!1},mount(_,$){return new s4(_,$)}};var bj=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),Sj={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},fj={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function k6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function A6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class P6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=k6(j),Y=fj[N]||"\uD83D\uDCC4",z=Sj[N]||"Office Document",V=document.createElement("div");V.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",V.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${A6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${A6(z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(V);let Q=V.querySelector("#ov-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class x6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var a4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=k6(_?.path);if(!$||!bj.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new P6(_,$);return new x6(_,$)}};var Rj=/\.(csv|tsv)$/i;function M6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class w6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${M6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${M6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let z=Y.querySelector("#csv-open-tab");if(z)z.addEventListener("click",()=>{let V=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class I6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var t4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Rj.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new w6(_,$);return new I6(_,$)}};var vj=/\.pdf$/i;function mj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class C6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${mj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class T6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var e4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!vj.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new C6(_,$);return new T6(_,$)}};var uj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function _3(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class b6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${_3(N)}" alt="${_3(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${_3(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let z=Y.querySelector("#img-open-tab");if(z)z.addEventListener("click",()=>{let V=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class S6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var $3={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!uj.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new b6(_,$);return new S6(_,$)}};var gj=/\.(mp4|m4v|mov|webm|ogv)$/i;function pj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class f6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${pj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class R6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var j3={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!gj.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new f6(_,$);return new R6(_,$)}};function hj(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function cj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var Z3='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function v6(_){let $=String(_||"").trim();return $?$:Z3}function ij(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function lj(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function nj(_,$="*"){try{let j=(Y)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Y=Z.prototype.saveData;Z.prototype.saveData=function(z,V,Q,q,L,W){try{if(z&&Q!=null&&j({filename:z,format:V,data:Q,mimeType:q,base64Encoded:Boolean(L),defaultMode:W}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return Y.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let Y=N.prototype.exportFile;N.prototype.exportFile=function(z,V,Q,q,L,W){try{if(V&&j({filename:V,data:z,mimeType:Q,base64Encoded:Boolean(q),mode:L,folderId:W}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return Y.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function m6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${lj(j)}`}class u6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${cj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=ij(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(nj(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=Z3,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await m6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await m6(_,"image/png");else this.xmlData=v6(await _.text());else if(_.status===404)this.xmlData=Z3;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?v6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var N3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!hj(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new u6(_,$);return new g6(_,$)}};class p6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var n_=new p6;var m1="workspaceExplorerScale",dj=["compact","default","comfortable"],sj=new Set(dj),oj={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function h6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return sj.has(j)?j:$}function Y3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function rj(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function aj(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function z3(_={}){let $=rj(_),j=_.stored?h6(_.stored,$):$;return aj(j,_)}function c6(_){return oj[h6(_)]}var tj=60000,d6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function s6(_,$,j,Z=0,N=[]){if(!j&&d6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)s6(Y,$,j,Z+1,N);return N}function i6(_,$,j){if(!_)return"";let Z=[],N=(Y)=>{if(!j&&d6(Y))return;if(Z.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let z of Y.children)N(z)};return N(_),Z.join("|")}function V3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((V)=>[V?.path,V])):new Map,Y=!j||j.length!==Z.length,z=Z.map((V)=>{let Q=V3(N.get(V.path),V);if(Q!==N.get(V.path))Y=!0;return Q});return Y?{...$,children:z}:_}function G3(_,$,j){if(!_)return _;if(_.path===$)return V3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((Y)=>{let z=G3(Y,$,j);if(z!==Y)Z=!0;return z});return Z?{..._,children:N}:_}var o6=4,K3=14,ej=8,_Z=16;function r6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=r6(Z);return _.__bytes=j,j}function a6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=o6)return Z;let N=Array.isArray(_.children)?_.children:[],Y=[];for(let V of N){let Q=Math.max(0,Number(V?.__bytes??V?.size??0));if(Q<=0)continue;if(V.type==="dir")Y.push({kind:"dir",node:V,size:Q});else Y.push({kind:"file",name:V.name,path:V.path,size:Q})}Y.sort((V,Q)=>Q.size-V.size);let z=Y;if(Y.length>K3){let V=Y.slice(0,K3-1),Q=Y.slice(K3-1),q=Q.reduce((L,W)=>L+W.size,0);V.push({kind:"other",name:`+${Q.length} more`,path:`${Z.path}/[other]`,size:q}),z=V}return Z.children=z.map((V)=>{if(V.kind==="dir")return a6(V.node,$+1);return{name:V.name,path:V.path,size:V.size,children:[]}}),Z}function l6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function t6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${Y}%)`}function u1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function q3(_,$,j,Z,N,Y){let z=Math.PI*2-0.0001,V=Y-N>z?N+z:Y,Q=u1(_,$,Z,N),q=u1(_,$,Z,V),L=u1(_,$,j,V),W=u1(_,$,j,N),H=V-N>Math.PI?1:0;return[`M ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,"Z"].join(" ")}var e6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function _9(_,$,j){let Z=[],N=[],Y=Math.max(0,Number($)||0),z=(V,Q,q,L)=>{let W=Array.isArray(V?.children)?V.children:[];if(!W.length)return;let H=Math.max(0,Number(V.size)||0);if(H<=0)return;let x=q-Q,S=Q;W.forEach((u,g)=>{let A=Math.max(0,Number(u.size)||0);if(A<=0)return;let I=A/H,h=S,E=g===W.length-1?q:S+x*I;if(S=E,E-h<0.003)return;let f=e6[L];if(f){let n=t6(h,L,j);if(Z.push({key:u.path,path:u.path,label:u.name,size:A,color:n,depth:L,startAngle:h,endAngle:E,innerRadius:f[0],outerRadius:f[1],d:q3(120,120,f[0],f[1],h,E)}),L===1)N.push({key:u.path,name:u.name,size:A,pct:Y>0?A/Y*100:0,color:n})}if(L<o6)z(u,h,E,L+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function X3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=X3(Z,$);if(N)return N}return null}function $9(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=e6[1];if(!N)return{segments:[],legend:[]};let Y=-Math.PI/2,z=Math.PI*3/2,V=t6(Y,1,Z),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:V,depth:1,startAngle:Y,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:q3(120,120,N[0],N[1],Y,z)}],legend:[{key:q,name:_,size:j,pct:100,color:V}]}}function n6(_,$=!1,j=!1){if(!_)return null;let Z=r6(_),N=a6(_,0),Y=N.size||Z,{segments:z,legend:V}=_9(N,Y,j);if(!z.length&&Y>0){let Q=$9("[files]",N.path,Y,j);z=Q.segments,V=Q.legend}return{root:N,totalSize:Y,segments:z,legend:V,truncated:$,isDarkTheme:j}}function $Z({payload:_}){if(!_)return null;let[$,j]=v(null),[Z,N]=v(_?.root?.path||"."),[Y,z]=v(()=>[_?.root?.path||"."]),[V,Q]=v(!1);R(()=>{let i=_?.root?.path||".";N(i),z([i]),j(null)},[_?.root?.path,_?.totalSize]),R(()=>{if(!Z)return;Q(!0);let i=setTimeout(()=>Q(!1),180);return()=>clearTimeout(i)},[Z]);let q=R_(()=>{return X3(_.root,Z)||_.root},[_?.root,Z]),L=q?.size||_.totalSize||0,{segments:W,legend:H}=R_(()=>{let i=_9(q,L,_.isDarkTheme);if(i.segments.length>0)return i;if(L<=0)return i;let q_=q?.children?.length?"Total":"[files]";return $9(q_,q?.path||_?.root?.path||".",L,_.isDarkTheme)},[q,L,_.isDarkTheme,_?.root?.path]),[x,S]=v(W),u=k(new Map),g=k(0);R(()=>{let i=u.current,q_=new Map(W.map((N_)=>[N_.key,N_])),d_=performance.now(),g_=220,s=(N_)=>{let __=Math.min(1,(N_-d_)/220),W_=__*(2-__),z_=W.map((Q_)=>{let Y_=i.get(Q_.key)||{startAngle:Q_.startAngle,endAngle:Q_.startAngle,innerRadius:Q_.innerRadius,outerRadius:Q_.innerRadius},m_=(G0,X_)=>G0+(X_-G0)*W_,w_=m_(Y_.startAngle,Q_.startAngle),E_=m_(Y_.endAngle,Q_.endAngle),y_=m_(Y_.innerRadius,Q_.innerRadius),K0=m_(Y_.outerRadius,Q_.outerRadius);return{...Q_,d:q3(120,120,y_,K0,w_,E_)}});if(S(z_),__<1)g.current=requestAnimationFrame(s)};if(g.current)cancelAnimationFrame(g.current);return g.current=requestAnimationFrame(s),u.current=q_,()=>{if(g.current)cancelAnimationFrame(g.current)}},[W]);let A=x.length?x:W,I=L>0?Q$(L):"0 B",h=q?.name||"",f=(h&&h!=="."?h:"Total")||"Total",n=I,t=Y.length>1,d=(i)=>{if(!i?.path)return;let q_=X3(_.root,i.path);if(!q_||!Array.isArray(q_.children)||q_.children.length===0)return;z((d_)=>[...d_,q_.path]),N(q_.path),j(null)},j_=()=>{if(!t)return;z((i)=>{let q_=i.slice(0,-1);return N(q_[q_.length-1]||_?.root?.path||"."),q_}),j(null)};return U`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${V?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${A.length}
                data-base-size=${L}>
                ${A.map((i)=>U`
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
                        <title>${i.label} — ${Q$(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${f}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${n}</text>
                </g>
            </svg>
            ${H.length>0&&U`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((i)=>U`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${Q$(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&U`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function jZ({mediaId:_}){let[$,j]=v(null);if(R(()=>{if(!_)return;A2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?Q$($.metadata.size):"";return U`
        <a href=${W$(_)} download=${Z} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
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
    `}function j9({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:Y,terminalVisible:z=!1}){let[V,Q]=v(null),[q,L]=v(new Set(["."])),[W,H]=v(null),[x,S]=v(null),[u,g]=v(""),[A,I]=v(null),[h,E]=v(null),[f,n]=v(!0),[t,d]=v(!1),[j_,i]=v(null),[q_,d_]=v(()=>k2("workspaceShowHidden",!1)),[g_,s]=v(!1),[N_,__]=v(null),[W_,z_]=v(null),[Q_,U_]=v(null),[Y_,m_]=v(!1),[w_,E_]=v(null),[y_,K0]=v(()=>l6()),[G0,X_]=v(()=>z3({stored:e0(m1),...Y3()})),[$_,F_]=v(!1),Z_=k(q),H_=k(""),I_=k(null),a_=k(0),p_=k(new Set),s_=k(null),h_=k(new Map),c_=k(_),P_=k(Z),A_=k(null),u_=k(null),X0=k(null),x0=k(null),C_=k(null),E0=k(null),j0=k("."),T_=k(null),Z0=k({path:null,dragging:!1,startX:0,startY:0}),t_=k({path:null,dragging:!1,startX:0,startY:0}),$0=k({path:null,timer:0}),N0=k(!1),b_=k(0),O0=k(new Map),b0=k(null),k_=k(null),e_=k(null),S0=k(null),x_=k(null),T=k(null),a=k(q_),B_=k($),M_=k(j??$),o_=k(0),F0=k(Q_),S_=k(g_),f0=k(N_),$$=k(null),j$=k({x:0,y:0}),C0=k(0),w$=k(null),H0=k(W),i0=k(x),l0=k(null),R0=k(null),Z$=k(A);c_.current=_,P_.current=Z,R(()=>{Z_.current=q},[q]),R(()=>{a.current=q_},[q_]),R(()=>{B_.current=$},[$]),R(()=>{M_.current=j??$},[j,$]),R(()=>{F0.current=Q_},[Q_]),R(()=>{if(typeof window>"u")return;let B=()=>{X_(z3({stored:e0(m1),...Y3()}))};B();let J=()=>B(),M=()=>B(),K=(m)=>{if(!m||m.key===null||m.key===m1)B()};window.addEventListener("resize",J),window.addEventListener("focus",M),window.addEventListener("storage",K);let O=window.matchMedia?.("(pointer: coarse)"),D=window.matchMedia?.("(hover: none)"),C=(m,r)=>{if(!m)return;if(m.addEventListener)m.addEventListener("change",r);else if(m.addListener)m.addListener(r)},p=(m,r)=>{if(!m)return;if(m.removeEventListener)m.removeEventListener("change",r);else if(m.removeListener)m.removeListener(r)};return C(O,J),C(D,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",M),window.removeEventListener("storage",K),p(O,J),p(D,J)}},[]),R(()=>{let B=(J)=>{let M=J?.detail?.path;if(!M)return;let K=M.split("/"),O=[];for(let D=1;D<K.length;D++)O.push(K.slice(0,D).join("/"));if(O.length)L((D)=>{let C=new Set(D);C.add(".");for(let p of O)C.add(p);return C});H(M),requestAnimationFrame(()=>{let D=document.querySelector(`[data-path="${CSS.escape(M)}"]`);if(D)D.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",B),()=>window.removeEventListener("workspace-reveal-path",B)},[]),R(()=>{S_.current=g_},[g_]),R(()=>{f0.current=N_},[N_]),R(()=>{H0.current=W},[W]),R(()=>{i0.current=x},[x]),R(()=>{Z$.current=A},[A]),R(()=>{if(typeof window>"u"||typeof document>"u")return;let B=()=>K0(l6());B();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),M=()=>B();if(J?.addEventListener)J.addEventListener("change",M);else if(J?.addListener)J.addListener(M);let K=typeof MutationObserver<"u"?new MutationObserver(()=>B()):null;if(K?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)K?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",M);else if(J?.removeListener)J.removeListener(M);K?.disconnect()}},[]),R(()=>{if(!x)return;let B=C_.current;if(!B)return;let J=requestAnimationFrame(()=>{try{B.focus(),B.select()}catch{}});return()=>cancelAnimationFrame(J)},[x]),R(()=>{if(!$_)return;let B=(M)=>{let K=M?.target;if(!(K instanceof Element))return;if(x_.current?.contains(K))return;if(T.current?.contains(K))return;F_(!1)},J=(M)=>{if(M?.key==="Escape")F_(!1),T.current?.focus?.()};return document.addEventListener("mousedown",B),document.addEventListener("touchstart",B,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",B),document.removeEventListener("touchstart",B),document.removeEventListener("keydown",J)}},[$_]);let L2=async(B)=>{d(!0),I(null),E(null);try{let J=await H4(B,20000);I(J)}catch(J){I({error:J.message||"Failed to load preview"})}finally{d(!1)}};A_.current=L2;let U2=async()=>{if(!B_.current)return;try{let B=await s2("",1,a.current),J=i6(B.root,Z_.current,a.current);if(J===H_.current){n(!1);return}if(H_.current=J,I_.current=B.root,!a_.current)a_.current=requestAnimationFrame(()=>{a_.current=0,Q((M)=>V3(M,I_.current)),n(!1)})}catch(B){i(B.message||"Failed to load workspace"),n(!1)}},y0=async(B)=>{if(!B)return;if(p_.current.has(B))return;p_.current.add(B);try{let J=await s2(B,1,a.current);Q((M)=>G3(M,B,J.root))}catch(J){i(J.message||"Failed to load workspace")}finally{p_.current.delete(B)}};u_.current=y0;let D0=w(()=>{let B=W;if(!B)return".";let J=h_.current?.get(B);if(J&&J.type==="dir")return J.path;if(B==="."||!B.includes("/"))return".";let M=B.split("/");return M.pop(),M.join("/")||"."},[W]),Y0=w((B)=>{let J=B?.closest?.(".workspace-row");if(!J)return null;let M=J.dataset.path,K=J.dataset.type;if(!M)return null;if(K==="dir")return M;if(M.includes("/")){let O=M.split("/");return O.pop(),O.join("/")||"."}return"."},[]),p0=w((B)=>{return Y0(B?.target||null)},[Y0]),z0=w((B)=>{F0.current=B,U_(B)},[]),M0=w(()=>{let B=$0.current;if(B?.timer)clearTimeout(B.timer);$0.current={path:null,timer:0}},[]),N$=w((B)=>{if(!B||B==="."){M0();return}let J=h_.current?.get(B);if(!J||J.type!=="dir"){M0();return}if(Z_.current?.has(B)){M0();return}if($0.current?.path===B)return;M0();let M=setTimeout(()=>{$0.current={path:null,timer:0},u_.current?.(B),L((K)=>{let O=new Set(K);return O.add(B),O})},600);$0.current={path:B,timer:M}},[M0]),I$=w((B,J)=>{if(j$.current={x:B,y:J},C0.current)return;C0.current=requestAnimationFrame(()=>{C0.current=0;let M=$$.current;if(!M)return;let K=j$.current;M.style.transform=`translate(${K.x+12}px, ${K.y+12}px)`})},[]),r$=w((B)=>{if(!B)return;let M=(h_.current?.get(B)?.name||B.split("/").pop()||B).trim();if(!M)return;z_({path:B,label:M})},[]),u$=w(()=>{if(z_(null),C0.current)cancelAnimationFrame(C0.current),C0.current=0;if($$.current)$$.current.style.transform="translate(-9999px, -9999px)"},[]),a$=w((B)=>{if(!B)return".";let J=h_.current?.get(B);if(J&&J.type==="dir")return J.path;if(B==="."||!B.includes("/"))return".";let M=B.split("/");return M.pop(),M.join("/")||"."},[]),n0=w(()=>{S(null),g("")},[]),t$=w((B)=>{if(!B)return;let M=(h_.current?.get(B)?.name||B.split("/").pop()||B).trim();if(!M||B===".")return;S(B),g(M)},[]),e$=w(async()=>{let B=i0.current;if(!B)return;let J=(u||"").trim();if(!J){n0();return}let M=h_.current?.get(B),K=(M?.name||B.split("/").pop()||B).trim();if(J===K){n0();return}try{let D=(await E4(B,J))?.path||B,C=B.includes("/")?B.split("/").slice(0,-1).join("/")||".":".";if(n0(),i(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:B,newPath:D,type:M?.type||"file"}})),M?.type==="dir")L((p)=>{let m=new Set;for(let r of p)if(r===B)m.add(D);else if(r.startsWith(`${B}/`))m.add(`${D}${r.slice(B.length)}`);else m.add(r);return m});if(H(D),M?.type==="dir")I(null),d(!1),E(null);else A_.current?.(D);u_.current?.(C)}catch(O){i(O?.message||"Failed to rename file")}},[n0,u]),Y$=w(async(B)=>{let K=B||".";for(let O=0;O<50;O+=1){let C=`untitled${O===0?"":`-${O}`}.md`;try{let m=(await J4(K,C,""))?.path||(K==="."?C:`${K}/${C}`);if(K&&K!==".")L((r)=>new Set([...r,K]));H(m),i(null),u_.current?.(K),A_.current?.(m);return}catch(p){if(p?.status===409||p?.code==="file_exists")continue;i(p?.message||"Failed to create file");return}}i("Failed to create file (untitled name already in use).")},[]),U$=w((B)=>{if(B?.stopPropagation?.(),Y_)return;let J=a$(H0.current);Y$(J)},[Y_,a$,Y$]);R(()=>{if(typeof window>"u")return;let B=(J)=>{let M=J?.detail?.updates||[];if(!Array.isArray(M)||M.length===0)return;Q((p)=>{let m=p;for(let r of M){if(!r?.root)continue;if(!m||r.path==="."||!r.path)m=r.root;else m=G3(m,r.path,r.root)}if(m)H_.current=i6(m,Z_.current,a.current);return n(!1),m});let K=H0.current;if(Boolean(K)&&M.some((p)=>{let m=p?.path||"";if(!m||m===".")return!0;return K===m||K.startsWith(`${m}/`)||m.startsWith(`${K}/`)}))O0.current.clear();if(!K||!Z$.current)return;let D=h_.current?.get(K);if(D&&D.type==="dir")return;if(M.some((p)=>{let m=p?.path||"";if(!m||m===".")return!0;return K===m||K.startsWith(`${m}/`)}))A_.current?.(K)};return window.addEventListener("workspace-update",B),()=>window.removeEventListener("workspace-update",B)},[]),s_.current=U2;let d0=k(()=>{if(typeof window>"u")return;let B=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=M_.current??B_.current,M=document.visibilityState!=="hidden"&&(J||B.matches&&B_.current);o2(M,a.current).catch(()=>{})}).current,q0=k(0),i_=k(()=>{if(q0.current)clearTimeout(q0.current);q0.current=setTimeout(()=>{q0.current=0,d0()},250)}).current;R(()=>{if(B_.current)s_.current?.();i_()},[$,j]),R(()=>{s_.current(),d0();let B=setInterval(()=>s_.current(),tj),J=P2("previewHeight",null),M=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(b_.current=M,X0.current)X0.current.style.setProperty("--preview-height",`${M}px`);let K=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),O=()=>i_();if(K.addEventListener)K.addEventListener("change",O);else if(K.addListener)K.addListener(O);return document.addEventListener("visibilitychange",O),()=>{if(clearInterval(B),a_.current)cancelAnimationFrame(a_.current),a_.current=0;if(K.removeEventListener)K.removeEventListener("change",O);else if(K.removeListener)K.removeListener(O);if(document.removeEventListener("visibilitychange",O),q0.current)clearTimeout(q0.current),q0.current=0;if(T_.current)clearTimeout(T_.current),T_.current=null;o2(!1,a.current).catch(()=>{})}},[]);let B$=R_(()=>s6(V,q,q_),[V,q,q_]),J$=R_(()=>new Map(B$.map((B)=>[B.node.path,B.node])),[B$]),g$=R_(()=>c6(G0),[G0]);h_.current=J$;let D_=(W?h_.current.get(W):null)?.type==="dir";R(()=>{if(!W||!D_){E_(null),b0.current=null,k_.current=null;return}let B=W,J=`${q_?"hidden":"visible"}:${W}`,M=O0.current,K=M.get(J);if(K?.root){M.delete(J),M.set(J,K);let C=n6(K.root,Boolean(K.truncated),y_);if(C)b0.current=C,k_.current=W,E_({loading:!1,error:null,payload:C});return}let O=b0.current,D=k_.current;E_({loading:!0,error:null,payload:D===W?O:null}),s2(W,ej,q_).then((C)=>{if(H0.current!==B)return;let p={root:C?.root,truncated:Boolean(C?.truncated)};M.delete(J),M.set(J,p);while(M.size>_Z){let r=M.keys().next().value;if(!r)break;M.delete(r)}let m=n6(p.root,p.truncated,y_);b0.current=m,k_.current=W,E_({loading:!1,error:null,payload:m})}).catch((C)=>{if(H0.current!==B)return;E_({loading:!1,error:C?.message||"Failed to load folder size chart",payload:D===W?O:null})})},[W,D_,q_,y_]);let z$=Boolean(A&&A.kind==="text"&&!D_&&(!A.size||A.size<=262144)),E$=z$?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable",C$=Boolean(W&&W!=="."),s0=Boolean(W&&!D_),T$=Boolean(W&&!D_),o0=W&&D_?J1(W,q_):null,v0=w(()=>F_(!1),[]),W0=w(async(B)=>{v0();try{await B?.()}catch{}},[v0]);R(()=>{let B=e_.current;if(S0.current)S0.current.dispose(),S0.current=null;if(!B)return;if(B.innerHTML="",!W||D_||!A||A.error)return;let J={path:W,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},M=r_.resolve(J)||r_.get("workspace-preview-default");if(!M)return;let K=M.mount(B,J);return S0.current=K,()=>{if(S0.current===K)K.dispose(),S0.current=null;B.innerHTML=""}},[W,D_,A]);let m0=(B)=>{let J=B?.target;if(J instanceof Element)return J;return J?.parentElement||null},r0=(B)=>{return Boolean(B?.closest?.(".workspace-node-icon, .workspace-label-text"))},T0=k((B)=>{if(R0.current)clearTimeout(R0.current),R0.current=null;let M=m0(B)?.closest?.("[data-path]");if(!M)return;let K=M.dataset.path;if(M.dataset.type==="dir"||!K)return;if(i0.current===K)n0();P_.current?.(K)}).current,p$=k((B)=>{if(N0.current){N0.current=!1;return}let J=m0(B),M=J?.closest?.("[data-path]");if(x0.current?.focus?.(),!M)return;let K=M.dataset.path,O=M.dataset.type,D=Boolean(J?.closest?.(".workspace-caret")),C=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),p=H0.current===K,m=i0.current;if(m){if(m===K)return;n0()}let r=O==="file"&&l0.current===K&&!D&&!C;if(p&&!D&&!C&&K!=="."&&!r){if(R0.current)clearTimeout(R0.current);R0.current=setTimeout(()=>{R0.current=null,t$(K)},350);return}if(O==="dir"){if(l0.current=null,H(K),I(null),E(null),d(!1),!Z_.current.has(K))u_.current?.(K);if(p&&!D)return;L((A0)=>{let O_=new Set(A0);if(O_.has(K))O_.delete(K);else O_.add(K);return O_})}else{l0.current=null,H(K);let L_=h_.current.get(K);if(L_)c_.current?.(L_.path,L_);A_.current?.(K)}}).current,a0=k(()=>{H_.current="",s_.current(),Array.from(Z_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>u_.current?.(J))}).current,h0=k(()=>{l0.current=null,H(null),I(null),E(null),d(!1)}).current,h$=k(()=>{d_((B)=>{let J=!B;if(typeof window<"u")l_("workspaceShowHidden",String(J));return a.current=J,o2(!0,J).catch(()=>{}),H_.current="",s_.current?.(),Array.from(Z_.current||[]).filter((K)=>K&&K!==".").forEach((K)=>u_.current?.(K)),J})}).current,_2=k((B)=>{if(m0(B)?.closest?.("[data-path]"))return;h0()}).current,b$=w(async(B)=>{if(!B)return;let J=B.split("/").pop()||B;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await A4(B);let K=B.includes("/")?B.split("/").slice(0,-1).join("/")||".":".";if(H0.current===B)h0();u_.current?.(K),i(null)}catch(K){I((O)=>({...O||{},error:K.message||"Failed to delete file"}))}},[h0]),J0=w((B)=>{let J=x0.current;if(!J||!B||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(B)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),O$=w((B)=>{let J=B$;if(!J||J.length===0)return;let M=W?J.findIndex((K)=>K.node.path===W):-1;if(B.key==="ArrowDown"){B.preventDefault();let K=Math.min(M+1,J.length-1),O=J[K];if(!O)return;if(H(O.node.path),O.node.type!=="dir")c_.current?.(O.node.path,O.node),A_.current?.(O.node.path);else I(null),d(!1),E(null);J0(O.node.path);return}if(B.key==="ArrowUp"){B.preventDefault();let K=M<=0?0:M-1,O=J[K];if(!O)return;if(H(O.node.path),O.node.type!=="dir")c_.current?.(O.node.path,O.node),A_.current?.(O.node.path);else I(null),d(!1),E(null);J0(O.node.path);return}if(B.key==="ArrowRight"&&M>=0){let K=J[M];if(K?.node?.type==="dir"&&!q.has(K.node.path))B.preventDefault(),u_.current?.(K.node.path),L((O)=>new Set([...O,K.node.path]));return}if(B.key==="ArrowLeft"&&M>=0){let K=J[M];if(K?.node?.type==="dir"&&q.has(K.node.path))B.preventDefault(),L((O)=>{let D=new Set(O);return D.delete(K.node.path),D});return}if(B.key==="Enter"&&M>=0){B.preventDefault();let K=J[M];if(!K)return;let O=K.node.path;if(K.node.type==="dir"){if(!Z_.current.has(O))u_.current?.(O);L((C)=>{let p=new Set(C);if(p.has(O))p.delete(O);else p.add(O);return p}),I(null),E(null),d(!1)}else c_.current?.(O,K.node),A_.current?.(O);return}if((B.key==="Delete"||B.key==="Backspace")&&M>=0){let K=J[M];if(!K||K.node.type==="dir")return;B.preventDefault(),b$(K.node.path);return}if(B.key==="Escape")B.preventDefault(),h0()},[h0,b$,q,B$,J0,W]),y$=w((B)=>{let J=m0(B),M=J?.closest?.(".workspace-row");if(!M)return;let K=M.dataset.type,O=M.dataset.path;if(!O||O===".")return;if(i0.current===O)return;let D=B?.touches?.[0];if(!D)return;if(Z0.current={path:r0(J)?O:null,dragging:!1,startX:D.clientX,startY:D.clientY},K!=="file")return;if(T_.current)clearTimeout(T_.current);T_.current=setTimeout(()=>{if(T_.current=null,Z0.current?.dragging)return;b$(O)},600)},[b$]),A$=w(()=>{if(T_.current)clearTimeout(T_.current),T_.current=null;let B=Z0.current;if(B?.dragging&&B.path){let J=F0.current||D0(),M=w$.current;if(typeof M==="function")M(B.path,J)}Z0.current={path:null,dragging:!1,startX:0,startY:0},o_.current=0,s(!1),__(null),z0(null),M0(),u$()},[D0,u$,z0,M0]),S$=w((B)=>{let J=Z0.current,M=B?.touches?.[0];if(!M||!J?.path){if(T_.current)clearTimeout(T_.current),T_.current=null;return}let K=Math.abs(M.clientX-J.startX),O=Math.abs(M.clientY-J.startY),D=K>8||O>8;if(D&&T_.current)clearTimeout(T_.current),T_.current=null;if(!J.dragging&&D)J.dragging=!0,s(!0),__("move"),r$(J.path);if(J.dragging){B.preventDefault(),I$(M.clientX,M.clientY);let C=document.elementFromPoint(M.clientX,M.clientY),p=Y0(C)||D0();if(F0.current!==p)z0(p);N$(p)}},[Y0,D0,r$,I$,z0,N$]),c$=k((B)=>{B.preventDefault();let J=X0.current;if(!J)return;let M=B.clientY,K=b_.current||280,O=B.currentTarget;O.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=M,C=(m)=>{D=m.clientY;let r=J.clientHeight-80,L_=Math.min(Math.max(K-(m.clientY-M),80),r);J.style.setProperty("--preview-height",`${L_}px`),b_.current=L_},p=()=>{let m=J.clientHeight-80,r=Math.min(Math.max(K-(D-M),80),m);b_.current=r,O.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",l_("previewHeight",String(Math.round(r))),document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",p)}).current,$2=k((B)=>{B.preventDefault();let J=X0.current;if(!J)return;let M=B.touches[0];if(!M)return;let K=M.clientY,O=b_.current||280,D=B.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let C=(m)=>{let r=m.touches[0];if(!r)return;m.preventDefault();let L_=J.clientHeight-80,A0=Math.min(Math.max(O-(r.clientY-K),80),L_);J.style.setProperty("--preview-height",`${A0}px`),b_.current=A0},p=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",l_("previewHeight",String(Math.round(b_.current||O))),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}).current,c0=async()=>{if(!W)return;try{let B=await D4(W);if(B.media_id)E(B.media_id)}catch(B){I((J)=>({...J||{},error:B.message||"Failed to attach"}))}},u0=async()=>{if(!W||D_)return;await b$(W)},F$=(B)=>{return Array.from(B?.dataTransfer?.types||[]).includes("Files")},j2=w((B)=>{if(!F$(B))return;if(B.preventDefault(),o_.current+=1,!S_.current)s(!0);__("upload");let J=p0(B)||D0();z0(J),N$(J)},[D0,p0,z0,N$]),K$=w((B)=>{if(!F$(B))return;if(B.preventDefault(),B.dataTransfer)B.dataTransfer.dropEffect="copy";if(!S_.current)s(!0);if(f0.current!=="upload")__("upload");let J=p0(B)||D0();if(F0.current!==J)z0(J);N$(J)},[D0,p0,z0,N$]),i$=w((B)=>{if(!F$(B))return;if(B.preventDefault(),o_.current=Math.max(0,o_.current-1),o_.current===0)s(!1),__(null),z0(null),M0()},[z0,M0]),k$=w(async(B,J=".")=>{let M=Array.from(B||[]);if(M.length===0)return;let K=J&&J!==""?J:".",O=K!=="."?K:"workspace root";m_(!0);try{let D=null;for(let C of M)try{D=await H1(C,K)}catch(p){let m=p?.status,r=p?.code;if(m===409||r==="file_exists"){let L_=C?.name||"file";if(!window.confirm(`"${L_}" already exists in ${O}. Overwrite?`))continue;D=await H1(C,K,{overwrite:!0})}else throw p}if(D?.path)l0.current=D.path,H(D.path),A_.current?.(D.path);u_.current?.(K)}catch(D){i(D.message||"Failed to upload file")}finally{m_(!1)}},[]),f$=w(async(B,J)=>{if(!B)return;let M=h_.current?.get(B);if(!M)return;let K=J&&J!==""?J:".",O=B.includes("/")?B.split("/").slice(0,-1).join("/")||".":".";if(K===O)return;try{let C=(await y4(B,K))?.path||B;if(M.type==="dir")L((p)=>{let m=new Set;for(let r of p)if(r===B)m.add(C);else if(r.startsWith(`${B}/`))m.add(`${C}${r.slice(B.length)}`);else m.add(r);return m});if(H(C),M.type==="dir")I(null),d(!1),E(null);else A_.current?.(C);u_.current?.(O),u_.current?.(K)}catch(D){i(D?.message||"Failed to move entry")}},[]);w$.current=f$;let Z2=w(async(B)=>{if(!F$(B))return;B.preventDefault(),o_.current=0,s(!1),__(null),U_(null),M0();let J=Array.from(B?.dataTransfer?.files||[]);if(J.length===0)return;let M=F0.current||p0(B)||D0();await k$(J,M)},[D0,p0,k$]),O2=w((B)=>{if(B?.stopPropagation?.(),Y_)return;let J=B?.currentTarget?.dataset?.uploadTarget||".";j0.current=J,E0.current?.click()},[Y_]),P$=w(()=>{if(Y_)return;let B=H0.current,J=B?h_.current?.get(B):null;j0.current=J?.type==="dir"?J.path:".",E0.current?.click()},[Y_]),l$=w(()=>{W0(()=>U$(null))},[W0,U$]),N2=w(()=>{W0(()=>P$())},[W0,P$]),x$=w(()=>{W0(()=>a0())},[W0,a0]),w2=w(()=>{W0(()=>h$())},[W0,h$]),I2=w(()=>{if(!W||!z$)return;W0(()=>P_.current?.(W,A))},[W0,W,z$,A]),K_=w(()=>{if(!W||W===".")return;W0(()=>t$(W))},[W0,W,t$]),F2=w(()=>{if(!W||D_)return;W0(()=>u0())},[W0,W,D_,u0]),C2=w(()=>{if(!W||D_)return;W0(()=>c0())},[W0,W,D_,c0]),T2=w(()=>{if(!o0)return;if(v0(),typeof window<"u")window.open(o0,"_blank","noopener")},[v0,o0]),Y2=w(()=>{v0(),N?.()},[v0,N]),b2=w(()=>{v0(),Y?.()},[v0,Y]),S2=w((B)=>{if(!B||B.button!==0)return;let J=B.currentTarget;if(!J||!J.dataset)return;let M=J.dataset.path;if(!M||M===".")return;if(i0.current===M)return;let K=m0(B);if(K?.closest?.("button, a, input, .workspace-caret"))return;if(!r0(K))return;B.preventDefault(),t_.current={path:M,dragging:!1,startX:B.clientX,startY:B.clientY};let O=(C)=>{let p=t_.current;if(!p?.path)return;let m=Math.abs(C.clientX-p.startX),r=Math.abs(C.clientY-p.startY),L_=m>4||r>4;if(!p.dragging&&L_)p.dragging=!0,N0.current=!0,s(!0),__("move"),r$(p.path),I$(C.clientX,C.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(p.dragging){C.preventDefault(),I$(C.clientX,C.clientY);let A0=document.elementFromPoint(C.clientX,C.clientY),O_=Y0(A0)||D0();if(F0.current!==O_)z0(O_);N$(O_)}},D=()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",D);let C=t_.current;if(C?.dragging&&C.path){let p=F0.current||D0(),m=w$.current;if(typeof m==="function")m(C.path,p)}t_.current={path:null,dragging:!1,startX:0,startY:0},o_.current=0,s(!1),__(null),z0(null),M0(),u$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{N0.current=!1},0)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",D)},[Y0,D0,r$,I$,u$,z0,N$,M0]),f2=w(async(B)=>{let J=Array.from(B?.target?.files||[]);if(J.length===0)return;let M=j0.current||".";if(await k$(J,M),j0.current=".",B?.target)B.target.value=""},[k$]);return U`
        <aside
            class=${`workspace-sidebar${g_?" workspace-drop-active":""}`}
            data-workspace-scale=${G0}
            ref=${X0}
            onDragEnter=${j2}
            onDragOver=${K$}
            onDragLeave=${i$}
            onDrop=${Z2}
        >
            <input type="file" multiple style="display:none" ref=${E0} onChange=${f2} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${T}
                            class=${`workspace-menu-button${$_?" active":""}`}
                            onClick=${(B)=>{B.stopPropagation(),F_((J)=>!J)}}
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
                        ${$_&&U`
                            <div class="workspace-menu-dropdown" ref=${x_} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${l$} disabled=${Y_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${N2} disabled=${Y_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${x$}>Refresh tree</button>
                                <button class=${`workspace-menu-item${q_?" active":""}`} role="menuitem" onClick=${w2}>
                                    ${q_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${W&&U`<div class="workspace-menu-separator"></div>`}
                                ${W&&!D_&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I2} disabled=${!z$}>Open in editor</button>
                                `}
                                ${C$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${K_}>Rename selected</button>
                                `}
                                ${T$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C2}>Download selected file</button>
                                `}
                                ${o0&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${T2}>Download selected folder (zip)</button>
                                `}
                                ${s0&&U`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${F2}>Delete selected file</button>
                                `}

                                ${(N||Y)&&U`<div class="workspace-menu-separator"></div>`}
                                ${N&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b2}>
                                        ${z?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${U$} title="New file" disabled=${Y_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${a0} title="Refresh">
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
                ${Y_&&U`<div class="workspace-drop-hint">Uploading…</div>`}
                ${f&&U`<div class="workspace-loading">Loading…</div>`}
                ${j_&&U`<div class="workspace-error">${j_}</div>`}
                ${V&&U`
                    <div
                        class="workspace-tree-list"
                        ref=${x0}
                        tabIndex="0"
                        onClick=${p$}
                        onDblClick=${T0}
                        onKeyDown=${O$}
                        onTouchStart=${y$}
                        onTouchEnd=${A$}
                        onTouchMove=${S$}
                        onTouchCancel=${A$}
                    >
                        ${B$.map(({node:B,depth:J})=>{let M=B.type==="dir",K=B.path===W,O=B.path===x,D=M&&q.has(B.path),C=Q_&&B.path===Q_,p=Array.isArray(B.children)&&B.children.length>0?B.children.length:Number(B.child_count)||0;return U`
                                <div
                                    key=${B.path}
                                    class=${`workspace-row${K?" selected":""}${C?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*g$.indentPx}px`}}
                                    data-path=${B.path}
                                    data-type=${B.type}
                                    onMouseDown=${S2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${M?D?U`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:U`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${M?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${M?U`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:U`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${O?U`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${C_}
                                                value=${u}
                                                onInput=${(m)=>g(m?.target?.value||"")}
                                                onKeyDown=${(m)=>{if(m.key==="Enter")m.preventDefault(),e$();else if(m.key==="Escape")m.preventDefault(),n0()}}
                                                onBlur=${n0}
                                                onClick=${(m)=>m.stopPropagation()}
                                            />
                                        `:U`<span class="workspace-label"><span class="workspace-label-text">${B.name}</span></span>`}
                                    ${M&&!D&&p>0&&U`
                                        <span class="workspace-count">${p}</span>
                                    `}
                                    ${M&&U`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${B.path}
                                            title="Upload files to this folder"
                                            onClick=${O2}
                                            disabled=${Y_}
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
            ${W&&U`
                <div class="workspace-preview-splitter-h" onMouseDown=${c$} onTouchStart=${$2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${W}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${U$} title="New file" disabled=${Y_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!D_&&U`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>z$&&P_.current?.(W,A)}
                                    title=${E$}
                                    disabled=${!z$}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${u0}
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
                                    <button class="workspace-download" onClick=${P$}
                                        title="Upload files to this folder" disabled=${Y_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${J1(W,q_)}
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
                    ${t&&U`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&U`<div class="workspace-error">${A.error}</div>`}
                    ${D_&&U`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${w_?.loading&&U`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${w_?.error&&U`<div class="workspace-error">${w_.error}</div>`}
                        ${w_?.payload&&w_.payload.segments?.length>0&&U`
                            <${$Z} payload=${w_.payload} />
                        `}
                        ${w_?.payload&&(!w_.payload.segments||w_.payload.segments.length===0)&&U`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!D_&&U`
                        <div class="workspace-preview-body" ref=${e_}></div>
                    `}
                    ${h&&U`
                        <div class="workspace-download-card">
                            <${jZ} mediaId=${h} />
                        </div>
                    `}
                </div>
            `}
            ${W_&&U`
                <div class="workspace-drag-ghost" ref=${$$}>${W_.label}</div>
            `}
        </aside>
    `}var ZZ=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,NZ=/\.(csv|tsv)$/i,YZ=/\.pdf$/i,zZ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Z9=/\.drawio(\.xml|\.svg|\.png)?$/i;function N9({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:Y,onTogglePin:z,onTogglePreview:V,previewTabs:Q,onToggleDock:q,dockVisible:L,onToggleZen:W,zenMode:H}){let[x,S]=v(null),u=k(null);R(()=>{if(!x)return;let E=(f)=>{if(f.type==="keydown"&&f.key!=="Escape")return;S(null)};return document.addEventListener("click",E),document.addEventListener("keydown",E),()=>{document.removeEventListener("click",E),document.removeEventListener("keydown",E)}},[x]),R(()=>{let E=(f)=>{if(f.ctrlKey&&f.key==="Tab"){if(f.preventDefault(),!_.length)return;let n=_.findIndex((t)=>t.id===$);if(f.shiftKey){let t=_[(n-1+_.length)%_.length];j?.(t.id)}else{let t=_[(n+1)%_.length];j?.(t.id)}return}if((f.ctrlKey||f.metaKey)&&f.key==="w"){let n=document.querySelector(".editor-pane");if(n&&n.contains(document.activeElement)){if(f.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[_,$,j,Z]);let g=w((E,f)=>{if(E.button===1){E.preventDefault(),Z?.(f);return}if(E.button===0)j?.(f)},[j,Z]),A=w((E,f)=>{E.preventDefault(),S({id:f,x:E.clientX,y:E.clientY})},[]),I=w((E)=>{E.preventDefault(),E.stopPropagation()},[]),h=w((E,f)=>{E.preventDefault(),E.stopPropagation(),Z?.(f)},[Z]);if(R(()=>{if(!$||!u.current)return;let E=u.current.querySelector(".tab-item.active");if(E)E.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return U`
        <div class="tab-strip" ref=${u} role="tablist">
            ${_.map((E)=>U`
                <div
                    key=${E.id}
                    class=${`tab-item${E.id===$?" active":""}${E.dirty?" dirty":""}${E.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${E.id===$}
                    title=${E.path}
                    onMouseDown=${(f)=>g(f,E.id)}
                    onContextMenu=${(f)=>A(f,E.id)}
                >
                    ${E.pinned&&U`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${E.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${I}
                        onClick=${(f)=>h(f,E.id)}
                        title=${E.dirty?"Unsaved changes":"Close"}
                        aria-label=${E.dirty?"Unsaved changes":`Close ${E.label}`}
                    >
                        ${E.dirty?U`<span class="tab-dirty-dot" aria-hidden="true"></span>`:U`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${q&&U`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${L?" active":""}`}
                    onClick=${q}
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
            ${W&&U`
                <button
                    class=${`tab-strip-zen-toggle${H?" active":""}`}
                    onClick=${W}
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
        ${x&&U`
            <div class="tab-context-menu" style=${{left:x.x+"px",top:x.y+"px"}}>
                <button onClick=${()=>{Z?.(x.id),S(null)}}>Close</button>
                <button onClick=${()=>{N?.(x.id),S(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),S(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(x.id),S(null)}}>
                    ${_.find((E)=>E.id===x.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${V&&/\.(md|mdx|markdown)$/i.test(x.id)&&U`
                    <hr />
                    <button onClick=${()=>{V(x.id),S(null)}}>
                        ${Q?.has(x.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${ZZ.test(x.id)&&U`
                    <hr />
                    <button onClick=${()=>{let E="/workspace/raw?path="+encodeURIComponent(x.id),f=x.id.split("/").pop()||"document",n="/office-viewer/?url="+encodeURIComponent(E)+"&name="+encodeURIComponent(f);window.open(n,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
                ${NZ.test(x.id)&&U`
                    <hr />
                    <button onClick=${()=>{let E="/csv-viewer/?path="+encodeURIComponent(x.id);window.open(E,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
                ${YZ.test(x.id)&&U`
                    <hr />
                    <button onClick=${()=>{let E="/workspace/raw?path="+encodeURIComponent(x.id);window.open(E,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
                ${zZ.test(x.id)&&!Z9.test(x.id)&&U`
                    <hr />
                    <button onClick=${()=>{let E="/image-viewer/?path="+encodeURIComponent(x.id);window.open(E,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
                ${Z9.test(x.id)&&U`
                    <hr />
                    <button onClick=${()=>{let E="/drawio/edit?path="+encodeURIComponent(x.id);window.open(E,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var KZ=400,W3=60,Y9=220,Q3="mdPreviewHeight";function GZ(){try{let _=localStorage.getItem(Q3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=W3?$:Y9}catch{return Y9}}function z9({getContent:_,path:$,onClose:j}){let[Z,N]=v(""),[Y,z]=v(GZ),V=k(null),Q=k(null),q=k(""),L=k(_);return L.current=_,R(()=>{let x=()=>{let u=L.current?.()||"";if(u===q.current)return;q.current=u;try{let g=_$(u,null,{sanitize:!1});N(g)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};x();let S=setInterval(x,KZ);return()=>clearInterval(S)},[]),R(()=>{if(V.current&&Z)v$(V.current).catch(()=>{})},[Z]),U`
        <div
            class="md-preview-splitter"
            onMouseDown=${(x)=>{x.preventDefault();let S=x.clientY,u=Q.current?.offsetHeight||Y,g=Q.current?.parentElement,A=g?g.offsetHeight*0.7:500,I=x.currentTarget;I.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let h=(f)=>{let n=Math.min(Math.max(u-(f.clientY-S),W3),A);z(n)},E=()=>{I.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(Q3,String(Math.round(Q.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",E)}}
            onTouchStart=${(x)=>{x.preventDefault();let S=x.touches[0];if(!S)return;let u=S.clientY,g=Q.current?.offsetHeight||Y,A=Q.current?.parentElement,I=A?A.offsetHeight*0.7:500,h=x.currentTarget;h.classList.add("dragging"),document.body.style.userSelect="none";let E=(n)=>{let t=n.touches[0];if(!t)return;n.preventDefault();let d=Math.min(Math.max(g-(t.clientY-u),W3),I);z(d)},f=()=>{h.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(Q3,String(Math.round(Q.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",E),document.removeEventListener("touchend",f),document.removeEventListener("touchcancel",f)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",f),document.addEventListener("touchcancel",f)}}
        ></div>
        <div class="md-preview-panel" ref=${Q} style=${{height:Y+"px"}}>
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
                ref=${V}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function K9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let Y=k(_);Y.current=_;let z=k($);z.current=$;let V=k(j);V.current=j;let Q=k(Z);Q.current=Z,R(()=>{V.current();let q=new E1((W,H)=>Y.current(W,H),(W)=>z.current(W),{chatJid:N});q.connect();let L=()=>{q.reconnectIfNeeded();let W=typeof document<"u"?document:null;if(!W||W.visibilityState==="visible")Q.current?.()};return window.addEventListener("focus",L),document.addEventListener("visibilitychange",L),()=>{window.removeEventListener("focus",L),document.removeEventListener("visibilitychange",L),q.disconnect()}},[N])}function G9(){let[_,$]=v(!1),[j,Z]=v("default"),N=k(!1);R(()=>{let Q=k2("notificationsEnabled",!1);if(N.current=Q,$(Q),typeof Notification<"u")Z(Notification.permission)},[]),R(()=>{N.current=_},[_]);let Y=w(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let Q=Notification.requestPermission();if(Q&&typeof Q.then==="function")return Q;return Promise.resolve(Q)}catch{return Promise.resolve("default")}},[]),z=w(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let q=await Y();if(Z(q||"default"),q!=="granted"){N.current=!1,$(!1),l_("notificationsEnabled","false");return}}let Q=!N.current;N.current=Q,$(Q),l_("notificationsEnabled",String(Q))},[Y]),V=w((Q,q)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let L=new Notification(Q,{body:q});return L.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:V}}var N1=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function X9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=v(null),[Y,z]=v(!1),V=k(!1),Q=k(null),q=k(!1),L=k(null),W=k(null),H=k(0);R(()=>{V.current=Y},[Y]),R(()=>{W.current=Z},[Z]),R(()=>{H.current+=1,W.current=null,L.current=null,q.current=!1,V.current=!1,N(null),z(!1)},[j]);let x=w(async(g=null)=>{let A=H.current;try{if(g){let I=await Y4(g,50,0,j);if(A!==H.current)return;N(I.posts),z(!1)}else{let I=await l2(10,null,j);if(A!==H.current)return;N(I.posts),z(I.has_more)}}catch(I){if(A!==H.current)return;console.error("Failed to load posts:",I)}},[j]),S=w(async()=>{let g=H.current;try{let A=await l2(10,null,j);if(g!==H.current)return;N((I)=>{if(!I||I.length===0)return A.posts;return N1([...A.posts,...I])}),z((I)=>I||A.has_more)}catch(A){if(g!==H.current)return;console.error("Failed to refresh timeline:",A)}},[j]),u=w(async(g={})=>{let A=H.current,I=W.current;if(!I||I.length===0)return;if(q.current)return;let{preserveScroll:h=!0,preserveMode:E="top",allowRepeat:f=!1}=g,n=(j_)=>{if(!h){j_();return}if(E==="top")$(j_);else _(j_)},d=I.slice().sort((j_,i)=>j_.id-i.id)[0]?.id;if(!Number.isFinite(d))return;if(!f&&L.current===d)return;q.current=!0,L.current=d;try{let j_=await l2(10,d,j);if(A!==H.current)return;if(j_.posts.length>0)n(()=>{N((i)=>N1([...j_.posts,...i||[]])),z(j_.has_more)});else z(!1)}catch(j_){if(A!==H.current)return;console.error("Failed to load more posts:",j_)}finally{if(A===H.current)q.current=!1}},[j,_,$]);return R(()=>{Q.current=u},[u]),{posts:Z,setPosts:N,hasMore:Y,setHasMore:z,hasMoreRef:V,loadPosts:x,refreshTimeline:S,loadMore:u,loadMoreRef:Q,loadingMoreRef:q,lastBeforeIdRef:L}}function V9(){let[_,$]=v(null),[j,Z]=v({text:"",totalLines:0}),[N,Y]=v(""),[z,V]=v({text:"",totalLines:0}),[Q,q]=v(null),[L,W]=v(null),[H,x]=v(null),S=k(null),u=k(0),g=k(!1),A=k(""),I=k(""),h=k(null),E=k(null),f=k(null),n=k(null),t=k(!1),d=k(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:Y,agentThought:z,setAgentThought:V,pendingRequest:Q,setPendingRequest:q,currentTurnId:L,setCurrentTurnId:W,steerQueuedTurnId:H,setSteerQueuedTurnId:x,lastAgentEventRef:S,lastSilenceNoticeRef:u,isAgentRunningRef:g,draftBufferRef:A,thoughtBufferRef:I,pendingRequestRef:h,stalledPostIdRef:E,currentTurnIdRef:f,steerQueuedTurnIdRef:n,thoughtExpandedRef:t,draftExpandedRef:d}}function q9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=k((L)=>{L.preventDefault();let W=_.current;if(!W)return;let H=L.clientX,x=$.current||280,S=L.currentTarget;S.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=H,g=(I)=>{u=I.clientX;let h=Math.min(Math.max(x+(I.clientX-H),160),600);W.style.setProperty("--sidebar-width",`${h}px`),$.current=h},A=()=>{let I=Math.min(Math.max(x+(u-H),160),600);$.current=I,S.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",l_("sidebarWidth",String(Math.round(I))),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",A)}).current,Y=k((L)=>{L.preventDefault();let W=_.current;if(!W)return;let H=L.touches[0];if(!H)return;let x=H.clientX,S=$.current||280,u=L.currentTarget;u.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let g=(I)=>{let h=I.touches[0];if(!h)return;I.preventDefault();let E=Math.min(Math.max(S+(h.clientX-x),160),600);W.style.setProperty("--sidebar-width",`${E}px`),$.current=E},A=()=>{u.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.userSelect="",l_("sidebarWidth",String(Math.round($.current||S))),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",A),document.removeEventListener("touchcancel",A)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",A),document.addEventListener("touchcancel",A)}).current,z=k((L)=>{L.preventDefault();let W=_.current;if(!W)return;let H=L.clientX,x=j.current||$.current||280,S=L.currentTarget;S.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=H,g=(I)=>{u=I.clientX;let h=Math.min(Math.max(x+(I.clientX-H),200),800);W.style.setProperty("--editor-width",`${h}px`),j.current=h},A=()=>{let I=Math.min(Math.max(x+(u-H),200),800);j.current=I,S.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",l_("editorWidth",String(Math.round(I))),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",A)}).current,V=k((L)=>{L.preventDefault();let W=_.current;if(!W)return;let H=L.touches[0];if(!H)return;let x=H.clientX,S=j.current||$.current||280,u=L.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let g=(I)=>{let h=I.touches[0];if(!h)return;I.preventDefault();let E=Math.min(Math.max(S+(h.clientX-x),200),800);W.style.setProperty("--editor-width",`${E}px`),j.current=E},A=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",l_("editorWidth",String(Math.round(j.current||S))),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",A),document.removeEventListener("touchcancel",A)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",A),document.addEventListener("touchcancel",A)}).current,Q=k((L)=>{L.preventDefault();let W=_.current;if(!W)return;let H=L.clientY,x=Z?.current||200,S=L.currentTarget;S.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let u=H,g=(I)=>{u=I.clientY;let h=Math.min(Math.max(x-(I.clientY-H),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${h}px`),Z)Z.current=h;window.dispatchEvent(new CustomEvent("dock-resize"))},A=()=>{let I=Math.min(Math.max(x-(u-H),100),window.innerHeight*0.5);if(Z)Z.current=I;S.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",l_("dockHeight",String(Math.round(I))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",A)}).current,q=k((L)=>{L.preventDefault();let W=_.current;if(!W)return;let H=L.touches[0];if(!H)return;let x=H.clientY,S=Z?.current||200,u=L.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let g=(I)=>{let h=I.touches[0];if(!h)return;I.preventDefault();let E=Math.min(Math.max(S-(h.clientY-x),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${E}px`),Z)Z.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},A=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",l_("dockHeight",String(Math.round(Z?.current||S))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",A),document.removeEventListener("touchcancel",A)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",A),document.addEventListener("touchcancel",A)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:V,handleDockSplitterMouseDown:Q,handleDockSplitterTouchStart:q}}function W9({onTabClosed:_}={}){let $=k(_);$.current=_;let[j,Z]=v(()=>n_.getTabs()),[N,Y]=v(()=>n_.getActiveId()),[z,V]=v(()=>n_.getTabs().length>0);R(()=>{return n_.onChange((E,f)=>{Z(E),Y(f),V(E.length>0)})},[]);let[Q,q]=v(()=>new Set),L=w((E)=>{q((f)=>{let n=new Set(f);if(n.has(E))n.delete(E);else n.add(E);return n})},[]),W=w((E)=>{q((f)=>{if(!f.has(E))return f;let n=new Set(f);return n.delete(E),n})},[]),H=w((E,f={})=>{if(!E)return;let n={path:E,mode:"edit"};try{if(!r_.resolve(n)){if(!r_.get("editor")){console.warn(`[openEditor] No pane handler for: ${E}`);return}}}catch(d){console.warn(`[openEditor] paneRegistry.resolve() error for "${E}":`,d)}let t=typeof f?.label==="string"&&f.label.trim()?f.label.trim():void 0;n_.open(E,t)},[]),x=w(()=>{let E=n_.getActiveId();if(E){let f=n_.get(E);if(f?.dirty){if(!window.confirm(`"${f.label}" has unsaved changes. Close anyway?`))return}n_.close(E),W(E),$.current?.(E)}},[W]),S=w((E)=>{let f=n_.get(E);if(f?.dirty){if(!window.confirm(`"${f.label}" has unsaved changes. Close anyway?`))return}n_.close(E),W(E),$.current?.(E)},[W]),u=w((E)=>{n_.activate(E)},[]),g=w((E)=>{let f=n_.getTabs().filter((d)=>d.id!==E&&!d.pinned),n=f.filter((d)=>d.dirty).length;if(n>0){if(!window.confirm(`${n} unsaved tab${n>1?"s":""} will be closed. Continue?`))return}let t=f.map((d)=>d.id);n_.closeOthers(E),t.forEach((d)=>{W(d),$.current?.(d)})},[W]),A=w(()=>{let E=n_.getTabs().filter((t)=>!t.pinned),f=E.filter((t)=>t.dirty).length;if(f>0){if(!window.confirm(`${f} unsaved tab${f>1?"s":""} will be closed. Continue?`))return}let n=E.map((t)=>t.id);n_.closeAll(),n.forEach((t)=>{W(t),$.current?.(t)})},[W]),I=w((E)=>{n_.togglePin(E)},[]),h=w(()=>{let E=n_.getActiveId();if(E)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:E}}))},[]);return R(()=>{let E=(f)=>{let{oldPath:n,newPath:t,type:d}=f.detail||{};if(!n||!t)return;if(d==="dir"){for(let j_ of n_.getTabs())if(j_.path===n||j_.path.startsWith(`${n}/`)){let i=`${t}${j_.path.slice(n.length)}`;n_.rename(j_.id,i)}}else n_.rename(n,t)};return window.addEventListener("workspace-file-renamed",E),()=>window.removeEventListener("workspace-file-renamed",E)},[]),R(()=>{let E=(f)=>{if(n_.hasUnsaved())f.preventDefault(),f.returnValue=""};return window.addEventListener("beforeunload",E),()=>window.removeEventListener("beforeunload",E)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:Q,openEditor:H,closeEditor:x,handleTabClose:S,handleTabActivate:u,handleTabCloseOthers:g,handleTabCloseAll:A,handleTabTogglePin:I,handleTabTogglePreview:L,revealInExplorer:h}}function L3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],Y=Number(N);return Number.isFinite(Y)?Y:$}catch{return $}}var U3=L3("warning",30000),Q9=L3("finalize",120000),B3=L3("refresh",30000),L9=30000;function U9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function B9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function O9(_=30000){let[,$]=v(0);R(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function O3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function F9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function W2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function F3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||N>1||z)}function H9(_,$={}){if(W2($))return null;if(F3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:XZ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function D9(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function J9(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function E9(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function y9(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function Q2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function A9(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function XZ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function g1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function H3(_){return String(_||"").trim()||"web:default"}function k9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function P9(_={}){return W2(_)&&F3(_)}function VZ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function qZ(_={},$={}){if(!P9(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=VZ({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function x9(_={}){if(!P9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,Y=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let W of N)$.clearTimeout?.(W);N.clear()},z=()=>{Z=0,qZ({window:$,document:j})},V=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},Q=()=>{V();for(let W of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),V()},W);if(H!=null)N.add(H)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;Q()},L=$.visualViewport;return Q(),$.addEventListener("focus",Q),$.addEventListener("pageshow",Q),$.addEventListener("resize",Q),$.addEventListener("orientationchange",Q),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",Q,!0),L?.addEventListener?.("resize",Q),L?.addEventListener?.("scroll",Q),()=>{Y(),$.removeEventListener("focus",Q),$.removeEventListener("pageshow",Q),$.removeEventListener("resize",Q),$.removeEventListener("orientationchange",Q),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",Q,!0),L?.removeEventListener?.("resize",Q),L?.removeEventListener?.("scroll",Q)}}function WZ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function L$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:WZ($,j)}var QZ=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function M9(_){return QZ.has(String(_||"").trim())}function LZ(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function w9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(LZ(_),{detail:Z})),!0}var UZ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function I9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(W2({window:j,navigator:Z}))};N();let z=UZ.map((V)=>{try{return j.matchMedia?.(V)??null}catch{return null}}).filter(Boolean).map((V)=>{if(typeof V.addEventListener==="function")return V.addEventListener("change",N),()=>V.removeEventListener("change",N);if(typeof V.addListener==="function")return V.addListener(N),()=>V.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let V of z)V();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function C9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var E3="piclaw_btw_session",BZ=900,OZ="__piclawRenameBranchPromptLock__",T9=()=>{if(typeof window>"u")return null;let _=window,$=OZ,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function FZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function HZ(){let _=e0(E3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",Y=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?Y||"BTW stream interrupted. You can retry.":Y,model:null,status:z}}catch{return null}}var b9=z4,S9=G4,DZ=V4,f9=U4,R9=B4,v9=q4,D3=L$(t0,"getAgentContext",null),JZ=L$(t0,"getAgentModels",{current:null,models:[]}),EZ=L$(t0,"getActiveChatAgents",{chats:[]}),J3=L$(t0,"getChatBranches",{chats:[]}),yZ=L$(t0,"renameChatBranch",null),AZ=L$(t0,"pruneChatBranch",null),m9=L$(t0,"restoreChatBranch",null),kZ=L$(t0,"getAgentQueueState",{count:0}),PZ=L$(t0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),xZ=L$(t0,"removeAgentQueueItem",{removed:!1}),MZ=L$(t0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});r_.register(p4);r_.register(r4);r_.register(o4);r_.register(a4);r_.register(t4);r_.register(e4);r_.register($3);r_.register(j3);r_.register(N3);h4();r_.register(n4);r_.register(d4);function wZ({locationParams:_}){let $=R_(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),j=R_(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Z=R_(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),N=R_(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():$},[$,_]),[Y,z]=v("disconnected"),[V,Q]=v(()=>W2()),[q,L]=v(null),[W,H]=v(null),[x,S]=v(!1),[u,g]=v("current"),[A,I]=v([]),[h,E]=v([]),[f,n]=v(null),{agentStatus:t,setAgentStatus:d,agentDraft:j_,setAgentDraft:i,agentPlan:q_,setAgentPlan:d_,agentThought:g_,setAgentThought:s,pendingRequest:N_,setPendingRequest:__,currentTurnId:W_,setCurrentTurnId:z_,steerQueuedTurnId:Q_,setSteerQueuedTurnId:U_,lastAgentEventRef:Y_,lastSilenceNoticeRef:m_,isAgentRunningRef:w_,draftBufferRef:E_,thoughtBufferRef:y_,pendingRequestRef:K0,stalledPostIdRef:G0,currentTurnIdRef:X_,steerQueuedTurnIdRef:$_,thoughtExpandedRef:F_,draftExpandedRef:Z_}=V9(),[H_,I_]=v({}),[a_,p_]=v(null),[s_,h_]=v(null),[c_,P_]=v(!1),[A_,u_]=v(null),[X0,x0]=v([]),[C_,E0]=v([]),[j0,T_]=v(null),[Z0,t_]=v([]),[$0,N0]=v(!1),[b_,O0]=v(()=>HZ()),[b0,k_]=v(null),e_=k(new Set),S0=R_(()=>X0.find((X)=>X?.chat_jid===$)||null,[X0,$]),x_=R_(()=>C_.find((X)=>X?.chat_jid===$)||S0||null,[S0,C_,$]),T=x_?.root_chat_jid||S0?.root_chat_jid||$,a=FZ(u),[B_,M_]=v(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),o_=Z0.length,F0=k(new Set),S_=k([]),f0=k(new Set),$$=k(0),j$=k({inFlight:!1,lastAttemptAt:0,turnId:null});F0.current=new Set(Z0.map((X)=>X.row_id)),S_.current=Z0;let{notificationsEnabled:C0,notificationPermission:w$,toggleNotifications:H0,notify:i0}=G9(),[l0,R0]=v(()=>new Set),[Z$,L2]=v(()=>k2("workspaceOpen",!0)),U2=k(null),{editorOpen:y0,tabStripTabs:D0,tabStripActiveId:Y0,previewTabs:p0,openEditor:z0,closeEditor:M0,handleTabClose:N$,handleTabActivate:I$,handleTabCloseOthers:r$,handleTabCloseAll:u$,handleTabTogglePin:a$,handleTabTogglePreview:n0,revealInExplorer:t$}=W9({onTabClosed:(X)=>U2.current?.(X)}),e$=k(null),Y$=k(null),U$=k(null),d0=k(null),q0=r_.getDockPanes().length>0,[i_,B$]=v(!1),J$=w(()=>B$((X)=>!X),[]),g$=w(()=>{z0(i4,{label:"Terminal"})},[z0]),B2=!j&&(y0||q0&&i_),[D_,z$]=v(!1),E$=k(!1),C$=w(()=>{if(!y0||j)return;if(E$.current=i_,i_)B$(!1);z$(!0)},[y0,j,i_]),s0=w(()=>{if(!D_)return;if(z$(!1),E$.current)B$(!0),E$.current=!1},[D_]),T$=w(()=>{if(D_)s0();else C$()},[D_,C$,s0]);R(()=>{if(D_&&!y0)s0()},[D_,y0,s0]),R(()=>{let X=e$.current;if(!X)return;if(Y$.current)Y$.current.dispose(),Y$.current=null;let G=Y0;if(!G)return;let F={path:G,mode:"edit"},y=r_.resolve(F)||r_.get("editor");if(!y){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let P=y.mount(X,F);Y$.current=P,P.onDirtyChange?.((l)=>{n_.setDirty(G,l)}),P.onSaveRequest?.(()=>{}),P.onClose?.(()=>{M0()});let b=n_.getViewState(G);if(b&&typeof P.restoreViewState==="function")requestAnimationFrame(()=>P.restoreViewState(b));if(typeof P.onViewStateChange==="function")P.onViewStateChange((l)=>{n_.saveViewState(G,l)});return requestAnimationFrame(()=>P.focus()),()=>{if(Y$.current===P)P.dispose(),Y$.current=null}},[Y0,M0]),R(()=>{let X=(G)=>{let F=G.detail?.path;if(F)z0(F)};return document.addEventListener("office-viewer:open-tab",X),document.addEventListener("drawio:open-tab",X),document.addEventListener("csv-viewer:open-tab",X),document.addEventListener("pdf-viewer:open-tab",X),document.addEventListener("image-viewer:open-tab",X),document.addEventListener("video-viewer:open-tab",X),()=>{document.removeEventListener("office-viewer:open-tab",X),document.removeEventListener("drawio:open-tab",X),document.removeEventListener("csv-viewer:open-tab",X),document.removeEventListener("pdf-viewer:open-tab",X),document.removeEventListener("image-viewer:open-tab",X),document.removeEventListener("video-viewer:open-tab",X)}},[z0]),R(()=>{let X=U$.current;if(d0.current)d0.current.dispose(),d0.current=null;if(!X||!q0||!i_)return;let G=r_.getDockPanes()[0];if(!G){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let F=G.mount(X,{mode:"view"});return d0.current=F,requestAnimationFrame(()=>F.focus?.()),()=>{if(d0.current===F)F.dispose(),d0.current=null}},[q0,i_]);let[o0,v0]=v({name:"You",avatar_url:null,avatar_background:null}),W0=k(!1),m0=k(!1),r0=k(null),T0=k($),p$=k(new Map),a0=k($),h0=k(0),h$=k(0),_2=k({}),b$=k({name:null,avatar_url:null}),J0=k({currentHashtag:null,searchQuery:null,searchOpen:!1}),O$=k(null),y$=k(null),A$=k(0),S$=k(0),c$=k(0),$2=k(null),c0=k(null),u0=k(null),F$=k(null),j2=k(0),K$=k({title:null,avatarBase:null}),i$=k(null),k$=k(!1),[f$,Z2]=v(!1),O2=k(0),P$=w(()=>{if(i$.current)clearTimeout(i$.current),i$.current=null;n(null)},[]);O9(30000),R(()=>{return A8()},[]),R(()=>{return I9(Q)},[]),R(()=>{l_("workspaceOpen",String(Z$))},[Z$]),R(()=>{return x9()},[]),R(()=>{return()=>{P$()}},[P$]),R(()=>{if(!b_){l_(E3,"");return}l_(E3,JSON.stringify({question:b_.question||"",answer:b_.answer||"",thinking:b_.thinking||"",error:b_.error||null,status:b_.status||"success"}))},[b_]),R(()=>{_2.current=H_||{}},[H_]),R(()=>{T0.current=$},[$]),R(()=>{b$.current=o0||{name:"You",avatar_url:null,avatar_background:null}},[o0]);let l$=w((X,G,F=null)=>{if(typeof document>"u")return;let y=(X||"").trim()||"PiClaw";if(K$.current.title!==y){document.title=y;let o=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(o&&o.getAttribute("content")!==y)o.setAttribute("content",y);K$.current.title=y}let P=document.getElementById("dynamic-favicon");if(!P)return;let b=P.getAttribute("data-default")||P.getAttribute("href")||"/favicon.ico",l=G||b,e=G?`${l}|${F||""}`:l;if(K$.current.avatarBase!==e){let o=G?`${l}${l.includes("?")?"&":"?"}v=${F||Date.now()}`:l;P.setAttribute("href",o),K$.current.avatarBase=e}},[]),N2=w((X)=>{if(!X)return;I((G)=>G.includes(X)?G:[...G,X])},[]),x$=w((X)=>{I((G)=>G.filter((F)=>F!==X))},[]);U2.current=x$;let w2=w(()=>{I([])},[]),I2=w((X)=>{if(!Array.isArray(X)){I([]);return}let G=[],F=new Set;for(let y of X){if(typeof y!=="string"||!y.trim())continue;let P=y.trim();if(F.has(P))continue;F.add(P),G.push(P)}I(G)},[]),K_=w((X,G=null,F="info",y=3000)=>{P$(),n({title:X,detail:G||null,kind:F||"info"}),i$.current=setTimeout(()=>{n((P)=>P?.title===X?null:P)},y)},[P$]),F2=w((X)=>{let G=F9(X,{editorOpen:y0,resolvePane:(F)=>r_.resolve(F)});if(G.kind==="open"){z0(G.path);return}if(G.kind==="toast")K_(G.title,G.detail,G.level)},[y0,z0,K_]),C2=w(()=>{let X=Y0;if(X)N2(X)},[Y0,N2]),T2=w((X)=>{if(!X)return;E((G)=>G.includes(X)?G:[...G,X])},[]),Y2=w(async(X,G=null)=>{let F=(P)=>{P.scrollIntoView({behavior:"smooth",block:"center"}),P.classList.add("post-highlight"),setTimeout(()=>P.classList.remove("post-highlight"),2000)},y=document.getElementById("post-"+X);if(y){F(y);return}try{let P=typeof G==="string"&&G.trim()?G.trim():$,l=(await K4(X,P))?.thread?.[0];if(!l)return;L0((e)=>{if(!e)return[l];if(e.some((o)=>o.id===l.id))return e;return[...e,l]}),requestAnimationFrame(()=>{setTimeout(()=>{let e=document.getElementById("post-"+X);if(e)F(e)},50)})}catch(P){console.error("[scrollToMessage] Failed to fetch message",X,P)}},[$]),b2=w((X)=>{E((G)=>G.filter((F)=>F!==X))},[]),S2=w(()=>{E([])},[]),f2=w((X)=>{if(!Array.isArray(X)){E([]);return}let G=[],F=new Set;for(let y of X){if(typeof y!=="string"||!y.trim())continue;let P=y.trim();if(F.has(P))continue;F.add(P),G.push(P)}E(G)},[]),B=w((X)=>{let G=typeof X==="string"&&X.trim()?X.trim():"Could not send your message.";K_("Compose failed",G,"error",5000)},[K_]),J=w((X={})=>{let G=Date.now();if(Y_.current=G,X.running)w_.current=!0,N0((F)=>F?F:!0);if(X.clearSilence)m_.current=0},[N0]),M=w(()=>{if(F$.current)clearTimeout(F$.current),F$.current=null;j2.current=0},[]);R(()=>()=>{M()},[M]);let K=w(()=>{M(),d((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:G,lastActivity:F,...y}=X;return y})},[M]),O=w((X)=>{if(!X)return;M();let G=Date.now();j2.current=G,d({type:X.type||"active",last_activity:!0}),F$.current=setTimeout(()=>{if(j2.current!==G)return;d((F)=>{if(!F||!(F.last_activity||F.lastActivity))return F;return null})},L9)},[M]),D=w(()=>{w_.current=!1,N0(!1),Y_.current=null,m_.current=0,E_.current="",y_.current="",K0.current=null,c0.current=null,X_.current=null,$_.current=null,r0.current=null,j$.current={inFlight:!1,lastAttemptAt:0,turnId:null},M(),z_(null),U_(null),F_.current=!1,Z_.current=!1},[M,z_,U_,N0]),C=w((X)=>{if(!k9({remainingQueueCount:X,currentTurnId:X_.current,isAgentTurnActive:$0}))return;$_.current=null,U_(null)},[$0,U_]),p=w(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),m=w(()=>({agentStatus:t,agentDraft:j_?{...j_}:{text:"",totalLines:0},agentPlan:q_||"",agentThought:g_?{...g_}:{text:"",totalLines:0},pendingRequest:N_,currentTurnId:W_,steerQueuedTurnId:Q_,isAgentTurnActive:Boolean($0),followupQueueItems:Array.isArray(Z0)?Z0.map((X)=>({...X})):[],activeModel:a_,activeThinkingLevel:s_,supportsThinking:Boolean(c_),activeModelUsage:A_,contextUsage:j0,isAgentRunning:Boolean(w_.current),wasAgentActive:Boolean(m0.current),draftBuffer:E_.current||"",thoughtBuffer:y_.current||"",lastAgentEvent:Y_.current||null,lastSilenceNotice:m_.current||0,lastAgentResponse:c0.current||null,currentTurnIdRef:X_.current||null,steerQueuedTurnIdRef:$_.current||null,thoughtExpanded:Boolean(F_.current),draftExpanded:Boolean(Z_.current),agentStatusRef:r0.current||null,silentRecovery:{...j$.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[a_,A_,s_,j_,q_,t,g_,j0,W_,Z0,$0,N_,Q_,c_]),r=w((X)=>{let G=X||p();M(),w_.current=Boolean(G.isAgentRunning),m0.current=Boolean(G.wasAgentActive),N0(Boolean(G.isAgentTurnActive)),Y_.current=G.lastAgentEvent||null,m_.current=Number(G.lastSilenceNotice||0),E_.current=G.draftBuffer||"",y_.current=G.thoughtBuffer||"",K0.current=G.pendingRequest||null,c0.current=G.lastAgentResponse||null,X_.current=G.currentTurnIdRef||null,$_.current=G.steerQueuedTurnIdRef||null,r0.current=G.agentStatusRef||null,j$.current=G.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},F_.current=Boolean(G.thoughtExpanded),Z_.current=Boolean(G.draftExpanded),d(G.agentStatus||null),i(G.agentDraft?{...G.agentDraft}:{text:"",totalLines:0}),d_(G.agentPlan||""),s(G.agentThought?{...G.agentThought}:{text:"",totalLines:0}),__(G.pendingRequest||null),z_(G.currentTurnId||null),U_(G.steerQueuedTurnId||null),t_(Array.isArray(G.followupQueueItems)?G.followupQueueItems.map((F)=>({...F})):[]),p_(G.activeModel||null),h_(G.activeThinkingLevel||null),P_(Boolean(G.supportsThinking)),u_(G.activeModelUsage??null),T_(G.contextUsage??null)},[M,p,z_,t_,N0,U_]),L_=w((X)=>{if(!X)return;if(X_.current===X)return;X_.current=X,j$.current={inFlight:!1,lastAttemptAt:0,turnId:X},z_(X),$_.current=null,U_(null),E_.current="",y_.current="",i({text:"",totalLines:0}),d_(""),s({text:"",totalLines:0}),__(null),K0.current=null,c0.current=null,F_.current=!1,Z_.current=!1},[z_,U_]),A0=w((X)=>{if(typeof document<"u"){let o=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&o)return}let G=c0.current;if(!G||!G.post)return;if(X&&G.turnId&&G.turnId!==X)return;let F=G.post;if(F.id&&$2.current===F.id)return;let y=String(F?.data?.content||"").trim();if(!y)return;$2.current=F.id||$2.current,c0.current=null;let P=y.replace(/\s+/g," ").slice(0,200),b=_2.current||{},e=(F?.data?.agent_id?b[F.data.agent_id]:null)?.name||"Pi";i0(e,P)},[i0]),O_=w(async(X,G)=>{if(X!=="thought"&&X!=="draft")return;let F=X_.current;if(X==="thought"){if(F_.current=G,F)try{await R9(F,"thought",G)}catch(y){console.warn("Failed to update thought visibility:",y)}if(!G)return;try{let y=F?await f9(F,"thought"):null;if(y?.text)y_.current=y.text;s((P)=>({...P||{text:"",totalLines:0},fullText:y_.current||P?.fullText||"",totalLines:Number.isFinite(y?.total_lines)?y.total_lines:P?.totalLines||0}))}catch(y){console.warn("Failed to fetch full thought:",y)}return}if(Z_.current=G,F)try{await R9(F,"draft",G)}catch(y){console.warn("Failed to update draft visibility:",y)}if(!G)return;try{let y=F?await f9(F,"draft"):null;if(y?.text)E_.current=y.text;i((P)=>({...P||{text:"",totalLines:0},fullText:E_.current||P?.fullText||"",totalLines:Number.isFinite(y?.total_lines)?y.total_lines:P?.totalLines||0}))}catch(y){console.warn("Failed to fetch full draft:",y)}},[]),H$=k(null),M$=w(()=>{let X=O$.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);H$.current=M$;let H2=w((X)=>{let G=O$.current;if(!G||typeof X!=="function"){X?.();return}let{currentHashtag:F,searchQuery:y,searchOpen:P}=J0.current||{},b=!((y||P)&&!F),l=b?G.scrollHeight-G.scrollTop:G.scrollTop;X(),requestAnimationFrame(()=>{let e=O$.current;if(!e)return;if(b){let o=Math.max(e.scrollHeight-l,0);e.scrollTop=o}else{let o=Math.max(e.scrollHeight-e.clientHeight,0),c=Math.min(l,o);e.scrollTop=c}})},[]),G$=w((X)=>{let G=O$.current;if(!G||typeof X!=="function"){X?.();return}let F=G.scrollTop;X(),requestAnimationFrame(()=>{let y=O$.current;if(!y)return;let P=Math.max(y.scrollHeight-y.clientHeight,0);y.scrollTop=Math.min(F,P)})},[]),p1="Queued as a follow-up (one-at-a-time).",z2="⁣",w0=w((X)=>{if(!X||!Array.isArray(X))return X;let G=F0.current,F=new Set(G),y=X.filter((P)=>{if(F.has(P?.id))return!1;if(P?.data?.is_bot_message){let b=P?.data?.content;if(b===p1||b===z2)return!1}return!0});return y.length===X.length?X:y},[]),{posts:D2,setPosts:L0,hasMore:h1,setHasMore:J2,hasMoreRef:n$,loadPosts:V0,refreshTimeline:Q0,loadMore:y3,loadMoreRef:R2}=X9({preserveTimelineScroll:H2,preserveTimelineScrollTop:G$,chatJid:$}),E2=R_(()=>w0(D2),[D2,Z0,w0]),Y1=w(()=>{let X=G0.current;if(!X)return;L0((G)=>G?G.filter((F)=>F.id!==X):G),G0.current=null},[L0]),{handleSplitterMouseDown:u9,handleSplitterTouchStart:g9,handleEditorSplitterMouseDown:p9,handleEditorSplitterTouchStart:h9,handleDockSplitterMouseDown:c9,handleDockSplitterTouchStart:i9}=q9({appShellRef:y$,sidebarWidthRef:A$,editorWidthRef:S$,dockHeightRef:c$}),A3=w(()=>{if(!w_.current)return;w_.current=!1,m_.current=0,Y_.current=null,X_.current=null,z_(null),F_.current=!1,Z_.current=!1;let X=(E_.current||"").trim();if(E_.current="",y_.current="",i({text:"",totalLines:0}),d_(""),s({text:"",totalLines:0}),__(null),K0.current=null,c0.current=null,!X){d({type:"error",title:"Response stalled - No content received"});return}let F=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,y=Date.now(),P=new Date().toISOString(),b={id:y,timestamp:P,data:{type:"agent_response",content:F,agent_id:"default",is_local_stall:!0}};G0.current=y,L0((l)=>l?N1([...l,b]):[b]),H$.current?.(),d(null)},[z_]);R(()=>{J0.current={currentHashtag:q,searchQuery:W,searchOpen:x}},[q,W,x]);let f_=w(()=>{let X=++$$.current,G=$;kZ(G).then((F)=>{if(X!==$$.current)return;if(T0.current!==G)return;let y=f0.current,P=Array.isArray(F?.items)?F.items.map((b)=>({...b})).filter((b)=>!y.has(b.row_id)):[];if(P.length){t_((b)=>{if(b.length===P.length&&b.every((l,e)=>l.row_id===P[e].row_id))return b;return P});return}y.clear(),C(0),t_((b)=>b.length===0?b:[])}).catch(()=>{if(X!==$$.current)return;if(T0.current!==G)return;t_((F)=>F.length===0?F:[])})},[C,$,t_]),X$=w(async()=>{let X=$;try{let G=await D3(X);if(T0.current!==X)return;if(G)T_(G)}catch(G){if(T0.current!==X)return;console.warn("Failed to fetch agent context:",G)}},[$]),V$=w(async()=>{let X=$;try{let G=await v9(X);if(T0.current!==X)return null;if(!G||G.status!=="active"||!G.data){if(m0.current){let{currentHashtag:P,searchQuery:b,searchOpen:l}=J0.current||{};if(!P&&!b&&!l)Q0()}return m0.current=!1,D(),r0.current=null,d(null),i({text:"",totalLines:0}),d_(""),s({text:"",totalLines:0}),__(null),K0.current=null,G??null}m0.current=!0;let F=G.data;r0.current=F;let y=F.turn_id||F.turnId;if(y)L_(y);if(J({running:!0,clearSilence:!0}),K(),d(F),G.thought&&G.thought.text)s((P)=>{if(P&&P.text&&P.text.length>=G.thought.text.length)return P;return y_.current=G.thought.text,{text:G.thought.text,totalLines:G.thought.totalLines||0}});if(G.draft&&G.draft.text)i((P)=>{if(P&&P.text&&P.text.length>=G.draft.text.length)return P;return E_.current=G.draft.text,{text:G.draft.text,totalLines:G.draft.totalLines||0}});return G}catch(G){return console.warn("Failed to fetch agent status:",G),null}},[D,K,J,Q0,L_]),c1=w(async()=>{if(!w_.current)return null;if(K0.current)return null;let X=X_.current||null,G=j$.current,F=Date.now();if(G.inFlight)return null;if(G.turnId===X&&F-G.lastAttemptAt<B3)return null;G.inFlight=!0,G.lastAttemptAt=F,G.turnId=X;try{let{currentHashtag:y,searchQuery:P,searchOpen:b}=J0.current||{};if(!y&&!P&&!b)await Q0();return await f_(),await V$()}finally{G.inFlight=!1}},[V$,f_,Q0]);R(()=>{let X=Math.min(1000,Math.max(100,Math.floor(U3/2))),G=setInterval(()=>{if(!w_.current)return;if(K0.current)return;let F=Y_.current;if(!F)return;let y=Date.now(),P=y-F,b=t2(r0.current);if(P>=Q9){if(!b)d({type:"waiting",title:"Re-syncing after a quiet period…"});c1();return}if(P>=U3){if(y-m_.current>=B3){if(!b){let l=Math.floor(P/1000);d({type:"waiting",title:`Waiting for model… No events for ${l}s`})}m_.current=y,c1()}}},X);return()=>clearInterval(G)},[c1]);let l9=w((X)=>{if(z(X),X!=="connected"){d(null),i({text:"",totalLines:0}),d_(""),s({text:"",totalLines:0}),__(null),K0.current=null,D();return}if(!W0.current){W0.current=!0;let{currentHashtag:P,searchQuery:b,searchOpen:l}=J0.current||{};if(!P&&!b&&!l)Q0();V$(),f_(),X$();return}let{currentHashtag:G,searchQuery:F,searchOpen:y}=J0.current;if(!G&&!F&&!y)Q0();V$(),f_(),X$()},[D,Q0,V$,f_,X$]),n9=w(async(X)=>{L(X),L0(null),await V0(X)},[V0]),d9=w(async()=>{L(null),H(null),L0(null),await V0()},[V0]),s9=w(async(X,G=u)=>{if(!X||!X.trim())return;let F=G==="root"||G==="all"?G:"current";g(F),H(X.trim()),L(null),L0(null);try{let y=await b9(X.trim(),50,0,$,F,T);L0(y.results),J2(!1)}catch(y){console.error("Failed to search:",y),L0([])}},[$,T,u]),o9=w(()=>{S(!0),H(null),L(null),g("current"),L0([])},[]),r9=w(()=>{S(!1),H(null),V0()},[V0]),CZ=w(()=>{},[]),i1=!q&&!W&&!x,a9=w(async(X)=>{if(!X)return;let G=X.id,F=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():$,y=E2?.filter((b)=>b?.data?.thread_id===G&&b?.id!==G).length||0;if(y>0){if(!window.confirm(`Delete this message and its ${y} replies?`))return}let P=(b)=>{if(!b.length)return;R0((e)=>{let o=new Set(e);return b.forEach((c)=>o.add(c)),o}),setTimeout(()=>{if(G$(()=>{L0((e)=>e?e.filter((o)=>!b.includes(o.id)):e)}),R0((e)=>{let o=new Set(e);return b.forEach((c)=>o.delete(c)),o}),n$.current)R2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let b=await S9(G,y>0,F);if(b?.ids?.length)P(b.ids)}catch(b){let l=b?.message||"";if(y===0&&l.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let o=await S9(G,!0,F);if(o?.ids?.length)P(o.ids);return}console.error("Failed to delete post:",b),alert(`Failed to delete message: ${l}`)}},[$,E2,G$]),k3=w(async()=>{try{let X=await DZ();I_(U9(X));let G=X?.user||{};v0((y)=>{let P=typeof G.name==="string"&&G.name.trim()?G.name.trim():"You",b=typeof G.avatar_url==="string"?G.avatar_url.trim():null,l=typeof G.avatar_background==="string"&&G.avatar_background.trim()?G.avatar_background.trim():null;if(y.name===P&&y.avatar_url===b&&y.avatar_background===l)return y;return{name:P,avatar_url:b,avatar_background:l}});let F=(X?.agents||[]).find((y)=>y.id==="default");l$(F?.name,F?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=$,G=await D3(X);if(T0.current!==X)return;if(G)T_(G)}catch{}},[l$,$]);R(()=>{k3();let X=P2("sidebarWidth",null),G=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(A$.current=G,y$.current)y$.current.style.setProperty("--sidebar-width",`${G}px`)},[k3]);let v2=$0||t!==null,P3=w((X)=>{if(!X||typeof X!=="object")return;let G=X.agent_id;if(!G)return;let{agent_name:F,agent_avatar:y}=X;if(!F&&y===void 0)return;let P=_2.current?.[G]||{id:G},b=P.name||null,l=P.avatar_url??P.avatarUrl??P.avatar??null,e=!1,o=!1;if(F&&F!==P.name)b=F,o=!0;if(y!==void 0){let c=typeof y==="string"?y.trim():null,G_=typeof l==="string"?l.trim():null,J_=c||null;if(J_!==(G_||null))l=J_,e=!0}if(!o&&!e)return;if(I_((c)=>{let J_={...c[G]||{id:G}};if(o)J_.name=b;if(e)J_.avatar_url=l;return{...c,[G]:J_}}),G==="default")l$(b,l,e?Date.now():null)},[l$]),x3=w((X)=>{if(!X||typeof X!=="object")return;let G=X.user_name??X.userName,F=X.user_avatar??X.userAvatar,y=X.user_avatar_background??X.userAvatarBackground;if(G===void 0&&F===void 0&&y===void 0)return;v0((P)=>{let b=typeof G==="string"&&G.trim()?G.trim():P.name||"You",l=F===void 0?P.avatar_url:typeof F==="string"&&F.trim()?F.trim():null,e=y===void 0?P.avatar_background:typeof y==="string"&&y.trim()?y.trim():null;if(P.name===b&&P.avatar_url===l&&P.avatar_background===e)return P;return{name:b,avatar_url:l,avatar_background:e}})},[]),l1=w((X)=>{if(!X||typeof X!=="object")return;let G=X.model??X.current;if(G!==void 0)p_(G);if(X.thinking_level!==void 0)h_(X.thinking_level??null);if(X.supports_thinking!==void 0)P_(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)u_(X.provider_usage??null)},[]),m2=w(()=>{let X=$;JZ(X).then((G)=>{if(T0.current!==X)return;if(G)l1(G)}).catch(()=>{})},[l1,$]),I0=w(()=>{let X=$,G=(F)=>Array.isArray(F)?F.filter((y)=>y&&typeof y.chat_jid==="string"&&typeof y.agent_name==="string"&&y.agent_name.trim()):[];Promise.all([EZ().catch(()=>({chats:[]})),J3(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([F,y])=>{if(T0.current!==X)return;let P=G(F?.chats),b=G(y?.chats);if(b.length===0){x0(P);return}let l=new Map(P.map((o)=>[o.chat_jid,o])),e=b.map((o)=>{let c=l.get(o.chat_jid);return c?{...o,...c,is_active:c.is_active??o.is_active}:o});e.sort((o,c)=>{if(o.chat_jid===X&&c.chat_jid!==X)return-1;if(c.chat_jid===X&&o.chat_jid!==X)return 1;let G_=Boolean(o.archived_at),J_=Boolean(c.archived_at);if(G_!==J_)return G_?1:-1;if(Boolean(o.is_active)!==Boolean(c.is_active))return o.is_active?-1:1;return String(o.chat_jid).localeCompare(String(c.chat_jid))}),x0(e)}).catch(()=>{if(T0.current!==X)return;x0([])})},[$]),k0=w(()=>{J3(T).then((X)=>{let G=Array.isArray(X?.chats)?X.chats.filter((F)=>F&&typeof F.chat_jid==="string"&&typeof F.agent_name==="string"):[];E0(G)}).catch(()=>{})},[T]),t9=w((X)=>{let G=X?.row_id;if(G==null)return;f0.current.add(G),t_((F)=>F.filter((y)=>y?.row_id!==G)),PZ(G,H3($)).then(()=>{f_()}).catch((F)=>{console.warn("[queue] Failed to steer queued item:",F),K_("Failed to steer message","The queued message could not be sent as steering.","warning"),f0.current.delete(G),f_()})},[$,f_,t_,K_]),e9=w((X)=>{let G=X?.row_id;if(G==null)return;let F=S_.current.filter((y)=>y?.row_id!==G).length;f0.current.add(G),C(F),t_((y)=>y.filter((P)=>P?.row_id!==G)),xZ(G,H3($)).then(()=>{f_()}).catch((y)=>{console.warn("[queue] Failed to remove queued item:",y),K_("Failed to remove message","The queued message could not be removed.","warning"),f0.current.delete(G),f_()})},[C,$,f_,t_,K_]),u2=w((X)=>{if(!X||typeof X!=="object")return;if(I0(),k0(),X?.queued==="followup"||X?.queued==="steer"){f_();return}let G=X?.command;if(G&&typeof G==="object"&&(G?.queued_followup||G?.queued_steer))f_()},[I0,k0,f_]),n1=w(()=>{if(u0.current)u0.current.abort(),u0.current=null;O0(null)},[]),z1=w(async(X)=>{let G=String(X||"").trim();if(!G)return K_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(u0.current)u0.current.abort();let F=new AbortController;u0.current=F,O0({question:G,answer:"",thinking:"",error:null,model:null,status:"running"});try{let y=await MZ(G,{signal:F.signal,chatJid:S8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(P,b)=>{if(P==="side_prompt_start")O0((l)=>l?{...l,status:"running"}:l)},onThinkingDelta:(P)=>{O0((b)=>b?{...b,thinking:`${b.thinking||""}${P||""}`}:b)},onTextDelta:(P)=>{O0((b)=>b?{...b,answer:`${b.answer||""}${P||""}`}:b)}});if(u0.current!==F)return!0;O0((P)=>P?{...P,answer:y?.result||P.answer||"",thinking:y?.thinking||P.thinking||"",model:y?.model||null,status:"success",error:null}:P)}catch(y){if(F.signal.aborted)return!0;O0((P)=>P?{...P,status:"error",error:y?.payload?.error||y?.message||"BTW request failed."}:P)}finally{if(u0.current===F)u0.current=null}return!0},[$,K_]),_5=w(async({content:X})=>{let G=b8(X);if(!G)return!1;if(G.type==="help")return K_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(G.type==="clear")return n1(),K_("BTW cleared","Closed the side conversation panel.","info"),!0;if(G.type==="ask")return await z1(G.question),!0;return!1},[n1,z1,K_]),$5=w(()=>{if(b_?.question)z1(b_.question)},[b_,z1]),j5=w(async()=>{let X=v8(b_);if(!X)return;try{let G=await G2("default",X,null,[],v2?"queue":null,$);u2(G),K_(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(G){K_("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning")}},[b_,u2,v2,K_]),g2=w(()=>{m2(),I0(),k0(),f_(),X$()},[m2,I0,k0,f_,X$]);R(()=>{g2();let X=setInterval(()=>{m2(),I0(),k0(),f_()},60000);return()=>clearInterval(X)},[g2,m2,I0,k0,f_]),R(()=>{k0()},[k0]),R(()=>{let X=!1;L0(null);let G=()=>{if(X)return;requestAnimationFrame(()=>{if(X)return;M$()})};if(q)return V0(q),()=>{X=!0};if(W)return b9(W,50,0,$,u,T).then((F)=>{if(X)return;L0(F.results),J2(!1)}).catch((F)=>{if(X)return;console.error("Failed to search:",F),L0([]),J2(!1)}),()=>{X=!0};return V0().then(()=>{G()}).catch((F)=>{if(X)return;console.error("Failed to load timeline:",F)}),()=>{X=!0}},[$,q,W,u,T,V0,M$,J2,L0]),R(()=>{let X=a0.current||$;p$.current.set(X,m())},[$,m]),R(()=>{let X=a0.current||$;if(X===$)return;p$.current.set(X,m()),a0.current=$,f0.current.clear(),r(p$.current.get($)||null),f_(),V$(),X$()},[$,V$,X$,f_,r,m]);let Z5=w(()=>{let{currentHashtag:X,searchQuery:G,searchOpen:F}=J0.current||{};if(!X&&!G&&!F)Q0();g2()},[g2,Q0]),p2=w((X,G="streaming")=>{let F=h8({...X,...X&&X.status?{}:{status:G}});if(!F)return;let y=g0(F);if(y&&e_.current.has(y))return;k_((P)=>{let b=g0(P),l=Boolean(y&&b&&y===b),e={...l&&P?.artifact?P.artifact:{},...F.artifact||{}};return{...l&&P?P:{},...F,artifact:e,source:"live",originChatJid:F.originChatJid||$,openedAt:l&&P?.openedAt?P.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[$]),d1=w((X,G)=>{let F=G?.turn_id,y=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null,b=y?y===$:X==="connected"||X==="workspace_update";if(b)P3(G),x3(G);if(X==="ui_theme"){k8(G);return}if(X==="generated_widget_open"){if(!b)return;if(F&&!X_.current)L_(F);p2(G,"loading");return}if(X==="generated_widget_delta"){if(!b)return;if(F&&!X_.current)L_(F);p2(G,"streaming");return}if(X==="generated_widget_final"){if(!b)return;if(F&&!X_.current)L_(F);p2(G,"final");return}if(X==="generated_widget_error"){if(!b)return;p2(G,"error");return}if(X==="generated_widget_close"){if(!b)return;let c=g0(G);k_((G_)=>{if(!G_||G_?.source!=="live")return G_;let J_=g0(G_);if(c&&J_&&c!==J_)return G_;return null});return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))K()}if(X==="connected"){d(null),i({text:"",totalLines:0}),d_(""),s({text:"",totalLines:0}),__(null),K0.current=null,D();let c=$;v9(c).then((P0)=>{if(T0.current!==c)return;if(!P0||P0.status!=="active"||!P0.data)return;let K2=P0.data,K1=K2.turn_id||K2.turnId;if(K1)L_(K1);if(J({clearSilence:!0}),O(K2),P0.thought&&P0.thought.text)y_.current=P0.thought.text,s({text:P0.thought.text,totalLines:P0.thought.totalLines||0});if(P0.draft&&P0.draft.text)E_.current=P0.draft.text,i({text:P0.draft.text,totalLines:P0.draft.totalLines||0})}).catch((P0)=>{console.warn("Failed to fetch agent status:",P0)});let{currentHashtag:G_,searchQuery:J_,searchOpen:q$}=J0.current||{};if(!G_&&!J_&&!q$)Q0();g2();return}if(X==="agent_status"){if(!b){if(G?.type==="done"||G?.type==="error")I0(),k0();return}if(G.type==="done"||G.type==="error"){if(F&&X_.current&&F!==X_.current)return;if(G.type==="done"){A0(F||X_.current);let{currentHashtag:c,searchQuery:G_,searchOpen:J_}=J0.current||{};if(!c&&!G_&&!J_)Q0();if(G.context_usage)T_(G.context_usage)}if(m0.current=!1,D(),f0.current.clear(),I0(),f_(),i({text:"",totalLines:0}),d_(""),s({text:"",totalLines:0}),__(null),G.type==="error")d({type:"error",title:G.title||"Agent error"}),setTimeout(()=>d(null),8000);else d(null)}else{if(F)L_(F);if(J({running:!0,clearSilence:!0}),G.type==="thinking")E_.current="",y_.current="",i({text:"",totalLines:0}),d_(""),s({text:"",totalLines:0});r0.current=G,d((c)=>{if(c&&c.type===G.type&&c.title===G.title)return c;return G})}return}if(X==="agent_steer_queued"){if(!b)return;if(F&&X_.current&&F!==X_.current)return;let c=F||X_.current;if(!c)return;$_.current=c,U_(c);return}if(X==="agent_followup_queued"){if(!b)return;let c=G?.row_id,G_=G?.content;if(c!=null&&typeof G_==="string"&&G_.trim())t_((J_)=>{if(J_.some((q$)=>q$?.row_id===c))return J_;return[...J_,{row_id:c,content:G_,timestamp:G?.timestamp||null,thread_id:G?.thread_id??null}]});f_();return}if(X==="agent_followup_consumed"){if(!b)return;let c=G?.row_id;if(c!=null){let P0=S_.current.filter((K2)=>K2.row_id!==c).length;C(P0),t_((K2)=>K2.filter((K1)=>K1.row_id!==c))}f_();let{currentHashtag:G_,searchQuery:J_,searchOpen:q$}=J0.current||{};if(!G_&&!J_&&!q$)Q0();return}if(X==="agent_followup_removed"){if(!b)return;let c=G?.row_id;if(c!=null){let G_=S_.current.filter((J_)=>J_.row_id!==c).length;f0.current.add(c),C(G_),t_((J_)=>J_.filter((q$)=>q$.row_id!==c))}f_();return}if(X==="agent_draft_delta"){if(!b)return;if(F&&X_.current&&F!==X_.current)return;if(F&&!X_.current)L_(F);if(J({running:!0,clearSilence:!0}),G?.reset)E_.current="";if(G?.delta)E_.current+=G.delta;let c=Date.now();if(!h0.current||c-h0.current>=100){h0.current=c;let G_=E_.current,J_=O3(G_);if(Z_.current)i((q$)=>({text:q$?.text||"",totalLines:J_,fullText:G_}));else i({text:G_,totalLines:J_})}return}if(X==="agent_draft"){if(!b)return;if(F&&X_.current&&F!==X_.current)return;if(F&&!X_.current)L_(F);J({running:!0,clearSilence:!0});let c=G.text||"",G_=G.mode||(G.kind==="plan"?"replace":"append"),J_=Number.isFinite(G.total_lines)?G.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(G.kind==="plan")if(G_==="replace")d_(c);else d_((q$)=>(q$||"")+c);else if(!Z_.current)E_.current=c,i({text:c,totalLines:J_});return}if(X==="agent_thought_delta"){if(!b)return;if(F&&X_.current&&F!==X_.current)return;if(F&&!X_.current)L_(F);if(J({running:!0,clearSilence:!0}),G?.reset)y_.current="";if(typeof G?.delta==="string")y_.current+=G.delta;let c=Date.now();if(F_.current&&(!h$.current||c-h$.current>=100)){h$.current=c;let G_=y_.current;s((J_)=>({text:J_?.text||"",totalLines:O3(G_),fullText:G_}))}return}if(X==="agent_thought"){if(!b)return;if(F&&X_.current&&F!==X_.current)return;if(F&&!X_.current)L_(F);J({running:!0,clearSilence:!0});let c=G.text||"",G_=Number.isFinite(G.total_lines)?G.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!F_.current)y_.current=c,s({text:c,totalLines:G_});return}if(X==="model_changed"){if(!b)return;if(G?.model!==void 0)p_(G.model);if(G?.thinking_level!==void 0)h_(G.thinking_level??null);if(G?.supports_thinking!==void 0)P_(Boolean(G.supports_thinking));let c=$;D3(c).then((G_)=>{if(T0.current!==c)return;if(G_)T_(G_)}).catch(()=>{});return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:G}));return}if(M9(X)){if(!b)return;if(w9(X,G),X==="extension_ui_notify"&&typeof G?.message==="string")K_(G.message,null,G?.type||"info");if(X==="extension_ui_error"&&typeof G?.error==="string")K_("Extension UI error",G.error,"error",5000);return}let{currentHashtag:l,searchQuery:e,searchOpen:o}=J0.current;if(X==="agent_response"){if(!b)return;Y1(),c0.current={post:G,turnId:X_.current}}if(!l&&!e&&!o&&b&&(X==="new_post"||X==="new_reply"||X==="agent_response"))L0((c)=>{if(!c)return[G];if(c.some((G_)=>G_.id===G.id))return c;return[...c,G]}),H$.current?.();if(X==="interaction_updated"){if(!b)return;if(l||e||o)return;L0((c)=>{if(!c)return c;if(!c.some((G_)=>G_.id===G.id))return c;return c.map((G_)=>G_.id===G.id?G:G_)})}if(X==="interaction_deleted"){if(!b)return;if(l||e||o)return;let c=G?.ids||[];if(c.length){if(G$(()=>{L0((G_)=>G_?G_.filter((J_)=>!c.includes(J_.id)):G_)}),n$.current)R2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[p2,D,K,$,R2,J,A0,G$,I0,k0,Q0,Y1,L_,O,P3,x3,m2,f_,t_]);R(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=d1,X.reset=()=>{Y1(),D(),d(null),i({text:"",totalLines:0}),d_(""),s({text:"",totalLines:0}),__(null)},X.finalize=()=>A3(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[D,A3,d1,Y1]),K9({handleSseEvent:d1,handleConnectionStatusChange:l9,loadPosts:V0,onWake:Z5,chatJid:$}),R(()=>{if(!E2||E2.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let G=X.slice(5);Y2(G),history.replaceState(null,"",location.pathname+location.search)},[E2,Y2]);let s1=t!==null;R(()=>{if(Y!=="connected")return;let G=setInterval(()=>{let{currentHashtag:F,searchQuery:y,searchOpen:P}=J0.current||{},b=!F&&!y&&!P;if(s1){if(b)Q0();f_(),V$(),X$()}else{if(b)Q0();V$(),X$()}},s1?15000:60000);return()=>clearInterval(G)},[Y,s1,V$,X$,f_,Q0]),R(()=>{return C9(()=>{V$(),X$(),f_()})},[V$,X$,f_]);let N5=w(()=>{L2((X)=>!X)},[]),M3=w((X)=>{if(typeof window>"u")return;let G=String(X||"").trim();if(!G||G===$)return;let F=Q2(window.location.href,G,{chatOnly:j});window.location.assign(F)},[j,$]),w3=w(async()=>{if(typeof window>"u"||!x_?.chat_jid)return;let X=Date.now(),G=T9();if(!G)return;if(k$.current||X<O2.current||G.inFlight||X<G.cooldownUntil)return;k$.current=!0,G.inFlight=!0,Z2(!0);try{let F=x_.display_name||x_.agent_name||"",y=window.prompt("Agent name",F);if(y===null)return;let P=y.trim(),b=P.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||x_.agent_name||"",l=await yZ(x_.chat_jid,{displayName:P,agentName:b});await Promise.allSettled([I0(),k0()]);let e=l?.branch?.agent_name||b||x_.agent_name||"",o=l?.branch?.display_name||P||e;K_("Branch renamed",`${o} (@${e})`,"info",3500)}catch(F){let y=F instanceof Error?F.message:String(F||"Could not rename branch."),P=/already in use/i.test(y||"")?`${y} Switch to or restore that existing session from the session manager.`:y;K_("Could not rename branch",P||"Could not rename branch.","warning",5000)}finally{k$.current=!1,Z2(!1);let F=Date.now()+BZ;O2.current=F;let y=T9();if(y)y.inFlight=!1,y.cooldownUntil=F}},[x_,I0,k0,Z2,K_]),I3=w(async(X=null)=>{if(typeof window>"u")return;let G=typeof X==="string"&&X.trim()?X.trim():"",F=typeof $==="string"&&$.trim()?$.trim():"",y=G||x_?.chat_jid||F;if(!y){K_("Could not prune branch","No active session is selected yet.","warning",4000);return}let P=(x_?.chat_jid===y?x_:null)||C_.find((o)=>o?.chat_jid===y)||X0.find((o)=>o?.chat_jid===y)||null;if(P?.chat_jid===(P?.root_chat_jid||P?.chat_jid)){K_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let l=`@${P?.agent_name||y}${P?.chat_jid?` — ${P.chat_jid}`:""}`;if(!window.confirm(`Prune ${l}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await AZ(y),await Promise.allSettled([I0(),k0()]);let o=P?.root_chat_jid||"web:default";K_("Branch pruned",`${l} has been archived.`,"info",3000);let c=Q2(window.location.href,o,{chatOnly:j});window.location.assign(c)}catch(o){let c=o instanceof Error?o.message:String(o||"Could not prune branch.");K_("Could not prune branch",c||"Could not prune branch.","warning",5000)}},[X0,j,x_,C_,$,I0,k0,K_]),Y5=w(async(X)=>{let G=typeof X==="string"?X.trim():"";if(!G||typeof m9!=="function")return;try{let F=await m9(G);await Promise.allSettled([I0(),k0()]);let y=F?.branch,P=typeof y?.chat_jid==="string"&&y.chat_jid.trim()?y.chat_jid.trim():G,b=typeof y?.agent_name==="string"&&y.agent_name.trim()?`@${y.agent_name.trim()}`:P;K_("Branch restored",`Restored ${b}.`,"info",3200);let l=Q2(window.location.href,P,{chatOnly:j});window.location.assign(l)}catch(F){let y=F instanceof Error?F.message:String(F||"Could not restore branch.");K_("Could not restore branch",y||"Could not restore branch.","warning",5000)}},[j,I0,k0,K_]);R(()=>{if(!Z||typeof window>"u")return;let X=!1;return(async()=>{try{M_({status:"running",message:"Preparing a new chat branch…"});let G=await n2(N);if(X)return;let F=G?.branch,y=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!y)throw Error("Branch fork did not return a chat id.");let P=Q2(window.location.href,y,{chatOnly:!0});window.location.replace(P)}catch(G){if(X)return;M_({status:"error",message:g1(G)})}})(),()=>{X=!0}},[Z,N]);let z5=w((X)=>{if(!X||typeof X!=="object")return;let G=g0(X);if(G)e_.current.delete(G);k_({...X,openedAt:new Date().toISOString()})},[]),h2=w(()=>{k_((X)=>{let G=g0(X);if(X?.source==="live"&&G)e_.current.add(G);return null})},[]),K5=w((X,G)=>{let F=typeof X?.kind==="string"?X.kind:"",y=g0(G);if(!F||!y)return;if(F==="widget.close"){h2();return}if(F==="widget.submit"){let P=n8(X?.payload),b=d8(X?.payload),l=new Date().toISOString();if(k_((e)=>{let o=g0(e);if(!e||o!==y)return e;return{...e,runtimeState:{...e.runtimeState||{},lastEventKind:F,lastEventPayload:X?.payload||null,lastSubmitAt:l,lastHostUpdate:{type:"submit_pending",submittedAt:l,preview:P||null}}}}),!P){if(K_("Widget submission received","The widget submitted data without a message payload yet.","info",3500),b)h2();return}(async()=>{try{let e=await G2("default",P,null,[],v2?"queue":null,$);if(u2(e),k_((o)=>{let c=g0(o);if(!o||c!==y)return o;return{...o,runtimeState:{...o.runtimeState||{},lastHostUpdate:{type:e?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:l,preview:P,queued:e?.queued||null}}}}),K_(e?.queued==="followup"?"Widget submission queued":"Widget submission sent",e?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),b)h2()}catch(e){k_((o)=>{let c=g0(o);if(!o||c!==y)return o;return{...o,runtimeState:{...o.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:l,preview:P,error:e?.message||"Could not send the widget message."}}}}),K_("Widget submission failed",e?.message||"Could not send the widget message.","warning",5000)}})();return}if(F==="widget.ready"||F==="widget.request_refresh"){let P=new Date().toISOString();if(k_((b)=>{let l=g0(b);if(!b||l!==y)return b;return{...b,runtimeState:{...b.runtimeState||{},lastEventKind:F,lastEventPayload:X?.payload||null,...F==="widget.ready"?{readyAt:P,lastHostUpdate:{type:"ready_ack",at:P}}:{},...F==="widget.request_refresh"?{lastRefreshRequestAt:P,refreshCount:Number(b?.runtimeState?.refreshCount||0)+1,lastHostUpdate:{type:"refresh_ack",at:P,count:Number(b?.runtimeState?.refreshCount||0)+1,echo:X?.payload||null}}:{}}}}),F==="widget.request_refresh")K_("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[$,h2,u2,v2,K_]);R(()=>{e_.current.clear(),k_(null)},[$]);let G5=w(async()=>{if(typeof window>"u")return;try{let G=(await n2($))?.branch,F=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null;if(!F)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([I0(),k0()]);let y=G?.agent_name?`@${G.agent_name}`:F;K_("New branch created",`Switched to ${y}.`,"info",2500);let P=Q2(window.location.href,F,{chatOnly:j});window.location.assign(P)}catch(X){K_("Could not create branch",g1(X),"warning",5000)}},[j,$,I0,k0,K_]),X5=w(async()=>{if(typeof window>"u"||V)return;let X=H9($);if(!X){K_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let F=A9(window.location.href,$,{chatOnly:!0});if(!window.open(F,X.target))K_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let G=D9(X);if(!G){K_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}J9(G,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let y=(await n2($))?.branch,P=typeof y?.chat_jid==="string"&&y.chat_jid.trim()?y.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");try{let l=await X4();x0(Array.isArray(l?.chats)?l.chats:[])}catch{}try{let l=await J3(T);E0(Array.isArray(l?.chats)?l.chats:[])}catch{}let b=Q2(window.location.href,P,{chatOnly:!0});E9(G,b)}catch(F){y9(G),K_("Could not open branch window",g1(F),"error",5000)}},[$,T,V,K_]);R(()=>{if(!y0)return;if(typeof window>"u")return;let X=y$.current;if(!X)return;if(!S$.current){let G=P2("editorWidth",null),F=A$.current||280;S$.current=Number.isFinite(G)?G:F}if(X.style.setProperty("--editor-width",`${S$.current}px`),!c$.current){let G=P2("dockHeight",null);c$.current=Number.isFinite(G)?G:200}X.style.setProperty("--dock-height",`${c$.current}px`)},[y0]),R(()=>{if(!q0||j)return;let X=(G)=>{if(G.ctrlKey&&G.key==="`")G.preventDefault(),J$()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[J$,q0,j]),R(()=>{if(j)return;let X=(G)=>{if(G.ctrlKey&&G.shiftKey&&(G.key==="Z"||G.key==="z")){G.preventDefault(),T$();return}if(G.key==="Escape"&&D_)G.preventDefault(),s0()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[T$,s0,D_,j]);let V5=Boolean(Q_&&Q_===(t?.turn_id||W_));if(Z)return U`
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
        <div class=${`app-shell${Z$?"":" workspace-collapsed"}${y0?" editor-open":""}${j?" chat-only":""}${D_?" zen-mode":""}`} ref=${y$}>
            ${!j&&U`
                <${j9}
                    onFileSelect=${N2}
                    visible=${Z$}
                    active=${Z$||y0}
                    onOpenEditor=${z0}
                    onOpenTerminalTab=${g$}
                    onToggleTerminal=${q0?J$:void 0}
                    terminalVisible=${Boolean(q0&&i_)}
                />
                <button
                    class=${`workspace-toggle-tab${Z$?" open":" closed"}`}
                    onClick=${N5}
                    title=${Z$?"Hide workspace":"Show workspace"}
                    aria-label=${Z$?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${u9} onTouchStart=${g9}></div>
            `}
            ${B2&&U`
                <div class="editor-pane-container">
                    ${D_&&U`<div class="zen-hover-zone"></div>`}
                    ${y0&&U`
                        <${N9}
                            tabs=${D0}
                            activeId=${Y0}
                            onActivate=${I$}
                            onClose=${N$}
                            onCloseOthers=${r$}
                            onCloseAll=${u$}
                            onTogglePin=${a$}
                            onTogglePreview=${n0}
                            previewTabs=${p0}
                            onToggleDock=${q0?J$:void 0}
                            dockVisible=${q0&&i_}
                            onToggleZen=${T$}
                            zenMode=${D_}
                        />
                    `}
                    ${y0&&U`<div class="editor-pane-host" ref=${e$}></div>`}
                    ${y0&&Y0&&p0.has(Y0)&&U`
                        <${z9}
                            getContent=${()=>Y$.current?.getContent?.()}
                            path=${Y0}
                            onClose=${()=>n0(Y0)}
                        />
                    `}
                    ${q0&&i_&&U`<div class="dock-splitter" onMouseDown=${c9} onTouchStart=${i9}></div>`}
                    ${q0&&U`<div class=${`dock-panel${i_?"":" hidden"}`}>
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
                <div class="editor-splitter" onMouseDown=${p9} onTouchStart=${h9}></div>
            `}
            <div class="container">
                ${W&&B9()&&U`<div class="search-results-spacer"></div>`}
                ${j&&U`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${x_?.agent_name?`@${x_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${x_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${C_.length>1&&U`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(X)=>M3(X.currentTarget.value)}
                                    >
                                        ${C_.map((X)=>U`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${`@${X.agent_name} — ${X.chat_jid}${X.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${x_?.chat_jid&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${w3}
                                    title=${f$?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${f$}
                                >
                                    ${f$?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${x_?.chat_jid&&x_.chat_jid!==(x_.root_chat_jid||x_.chat_jid)&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${I3}
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
                ${(q||W)&&U`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${d9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${q?`#${q}`:`Search: ${W} · ${a}`}</span>
                    </div>
                `}
                <${H6}
                    posts=${E2}
                    hasMore=${i1?h1:!1}
                    onLoadMore=${i1?y3:void 0}
                    timelineRef=${O$}
                    onHashtagClick=${n9}
                    onMessageRef=${T2}
                    onScrollToMessage=${Y2}
                    onFileRef=${F2}
                    onPostClick=${void 0}
                    onDeletePost=${a9}
                    onOpenWidget=${z5}
                    emptyMessage=${q?`No posts with #${q}`:W?`No results for "${W}"`:void 0}
                    agents=${H_}
                    user=${o0}
                    reverse=${i1}
                    removingPostIds=${l0}
                    searchQuery=${W}
                />
                <${Z6}
                    status=${t}
                    draft=${j_}
                    plan=${q_}
                    thought=${g_}
                    pendingRequest=${N_}
                    intent=${f}
                    turnId=${W_}
                    steerQueued=${V5}
                    onPanelToggle=${O_}
                />
                <${m8}
                    session=${b_}
                    onClose=${n1}
                    onRetry=${$5}
                    onInject=${j5}
                />
                <${r8}
                    widget=${b0}
                    onClose=${h2}
                    onWidgetEvent=${K5}
                />
                <${W8}
                    onPost=${()=>{let{searchQuery:X,searchOpen:G}=J0.current||{};if(!X&&!G)V0(),M$()}}
                    onFocus=${M$}
                    searchMode=${x}
                    searchScope=${u}
                    onSearch=${s9}
                    onSearchScopeChange=${g}
                    onEnterSearch=${o9}
                    onExitSearch=${r9}
                    fileRefs=${A}
                    onRemoveFileRef=${x$}
                    onClearFileRefs=${w2}
                    onSetFileRefs=${I2}
                    messageRefs=${h}
                    onRemoveMessageRef=${b2}
                    onClearMessageRefs=${S2}
                    onSetMessageRefs=${f2}
                    onSwitchChat=${M3}
                    onRenameSession=${w3}
                    isRenameSessionInProgress=${f$}
                    onCreateSession=${G5}
                    onDeleteSession=${I3}
                    onRestoreSession=${Y5}
                    activeEditorPath=${j?null:Y0}
                    onAttachEditorFile=${j?void 0:C2}
                    onOpenFilePill=${F2}
                    followupQueueCount=${o_}
                    followupQueueItems=${Z0}
                    onInjectQueuedFollowup=${t9}
                    onRemoveQueuedFollowup=${e9}
                    onSubmitIntercept=${_5}
                    onMessageResponse=${u2}
                    onSubmitError=${B}
                    onPopOutChat=${V?void 0:X5}
                    isAgentActive=${v2}
                    activeChatAgents=${X0}
                    currentChatJid=${$}
                    connectionStatus=${Y}
                    activeModel=${a_}
                    modelUsage=${A_}
                    thinkingLevel=${s_}
                    supportsThinking=${c_}
                    contextUsage=${j0}
                    notificationsEnabled=${C0}
                    notificationPermission=${w$}
                    onToggleNotifications=${H0}
                    onModelChange=${p_}
                    onModelStateChange=${l1}
                />
                <${N6}
                    request=${N_}
                    onRespond=${()=>{__(null),K0.current=null}}
                />
            </div>
        </div>
    `}function IZ(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return U`<${wZ} locationParams=${_} />`}$8(U`<${IZ} />`,document.getElementById("app"));

//# debugId=AB0C4EA8642BCC6A64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
