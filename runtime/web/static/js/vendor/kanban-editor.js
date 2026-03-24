(()=>{var L=acquireVsCodeApi(),{h:p,render:h,Component:e}=preact,{useState:V,useEffect:A,useCallback:I,useRef:S}=preactHooks,Z=htm.bind(p),x=null;function f(j){if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${j}-${crypto.randomUUID()}`;return`${j}-${Date.now()}-${Math.random().toString(36).slice(2,11)}`}var O={grip:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>`,plus:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,plusCircle:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,trash:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,archive:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>`,restore:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,moreVertical:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>`,check:Z`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,x:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`};function u(j){if(!j.startsWith(`---
`))return j;let G=j.indexOf(`
---
`,4);if(G===-1)return j;return j.slice(G+5)}function s(j){let G=j.indexOf("%% kanban:settings");if(G===-1)return{settings:{},content:j};let P=j.indexOf("```",G);if(P===-1)return{settings:{},content:j};let N=j.indexOf("```",P+3);if(N===-1)return{settings:{},content:j};let J=j.slice(P+3,N).trim(),K={};try{K=JSON.parse(J)}catch(F){console.warn("Failed to parse settings:",F)}let X=j.indexOf("%%",N+3),W=X===-1?N+3:X+2,$=`${j.slice(0,G).trimEnd()}
${j.slice(W).trimStart()}`.trim();return{settings:K,content:$}}function k(j){if(j.startsWith("\\#")||j.startsWith("\\---"))return j;if(j.startsWith("#")||j.startsWith("---"))return`\\${j}`;return j}function v(j){if(j.startsWith("\\#")||j.startsWith("\\---"))return j.slice(1);return j}function o(j){let G={lanes:[],archive:[],settings:{}},P=u(j),N=s(P);G.settings=N.settings,P=N.content;let J=P.split(/\n---\n/),K=J[0],X=J.length>1?J.slice(1).join(`
---
`):"";if(G.lanes=b(K),X){let $=b(X).find((F)=>F.title.toLowerCase()==="archive");if($)G.archive=$.cards}return G}function b(j){let G=[],P=j.split(/(?=^## )/gm).filter((N)=>N.trim());for(let N of P){let J=N.split(`
`),K=J[0].match(/^## (.+)$/);if(!K)continue;let X={id:f("lane"),title:K[1].trim(),cards:[]},W=null,$="";for(let F=1;F<J.length;F++){let z=J[F],y=z.match(/^- \[(.)\] (.*)$/);if(y){if(W)W.title=$.trim(),X.cards.push(W);W={id:f("card"),title:v(y[2]),checkChar:y[1],checked:y[1]!==" "},$=v(y[2])}else if(W&&z.match(/^\s+\S/))$+=`
`+v(z.replace(/^\s+/,""))}if(W)W.title=$.trim(),X.cards.push(W);G.push(X)}return G}function C(j){let G=[];G.push("---","","kanban-plugin: board","","---","");for(let P of j.lanes){G.push(`## ${P.title}`,"");for(let N of P.cards){let J=`[${N.checked?N.checkChar!==" "?N.checkChar:"x":" "}]`,K=N.title.split(`
`);G.push(`- ${J} ${k(K[0])}`);for(let X=1;X<K.length;X++)G.push(`  ${k(K[X])}`)}G.push("")}if(j.archive.length>0){G.push("---","","## Archive","");for(let P of j.archive){let N=P.title.split(`
`);G.push(`- [${P.checked?"x":" "}] ${k(N[0])}`);for(let J=1;J<N.length;J++)G.push(`  ${k(N[J])}`)}G.push("")}if(Object.keys(j.settings).length>0)G.push("%% kanban:settings","```",JSON.stringify(j.settings),"```","%%");return G.join(`
`)}function c({checked:j,onChange:G}){return Z`
    <div class="kanban-plugin__item-prefix-button-wrapper">
      <button 
        class="kanban-plugin__item-checkbox ${j?"is-checked":""}"
        onClick=${(P)=>{P.stopPropagation(),G()}}
      >
        ${j?O.check:""}
      </button>
    </div>
  `}function i({onArchive:j,onDelete:G,isEditing:P,onCancelEdit:N}){return Z`
    <div class="kanban-plugin__item-postfix-button-wrapper">
      ${P?Z`
        <button 
          class="kanban-plugin__item-postfix-button is-enabled"
          onClick=${(J)=>{J.stopPropagation(),N()}}
          title="Cancel"
        >
          ${O.x}
        </button>
      `:Z`
        <button 
          class="kanban-plugin__item-postfix-button"
          onClick=${(J)=>{J.stopPropagation(),j()}}
          title="Archive"
        >
          ${O.moreVertical}
        </button>
      `}
    </div>
  `}function l({card:j,laneId:G,cardIndex:P,onUpdate:N,onDelete:J,onArchive:K}){let[X,W]=V(!1),[$,F]=V(j.title),z=S(null);A(()=>{if(X&&z.current)z.current.focus(),z.current.setSelectionRange(z.current.value.length,z.current.value.length),z.current.style.height="auto",z.current.style.height=z.current.scrollHeight+"px"},[X]);let y=(Y)=>{x={card:j,fromLaneId:G,fromIndex:P},Y.dataTransfer.effectAllowed="move",Y.dataTransfer.setData("text/plain",j.id),setTimeout(()=>{Y.target.classList.add("is-dragging")},0)},M=(Y)=>{x=null,Y.target.classList.remove("is-dragging")},U=()=>{N({...j,checked:!j.checked,checkChar:j.checked?" ":"x"})},T=()=>{if($.trim())N({...j,title:$.trim()});W(!1)},w=(Y)=>{if(Y.key==="Enter"&&!Y.shiftKey)Y.preventDefault(),T();else if(Y.key==="Escape")F(j.title),W(!1)},B=(Y)=>{F(Y.target.value),Y.target.style.height="auto",Y.target.style.height=Y.target.scrollHeight+"px"},R=()=>{F(j.title),W(!1)};return Z`
    <div class="kanban-plugin__item-wrapper">
        <div 
          class="kanban-plugin__item ${j.checked?"is-complete":""} ${X?"is-editing":""}"
          draggable=${!X}
          onKeyDown=${(Y)=>{if((Y.ctrlKey||Y.metaKey)&&Y.key.toLowerCase()==="e")Y.preventDefault(),W(!0);if((Y.ctrlKey||Y.metaKey)&&Y.key.toLowerCase()==="d")Y.preventDefault(),J(j);if((Y.ctrlKey||Y.metaKey)&&Y.key.toLowerCase()==="a")Y.preventDefault(),K(j)}}
          onDragStart=${y}
          onDragEnd=${M}
          onDblClick=${()=>!X&&W(!0)}
          tabindex="0"
        >
        <div class="kanban-plugin__item-content-wrapper">
          <div class="kanban-plugin__item-title-wrapper">
            <${c} checked=${j.checked} onChange=${U} />
            
            ${X?Z`
              <textarea
                ref=${z}
                class="kanban-plugin__item-edit-textarea"
                value=${$}
                onInput=${B}
                onBlur=${()=>{if(X)T()}}
                onKeyDown=${w}
              />
            `:Z`
              <div class="kanban-plugin__item-title">
                ${j.title}
              </div>
            `}
            
            <${i} 
              isEditing=${X}
              onArchive=${()=>K(j)}
              onDelete=${()=>J(j)}
              onCancelEdit=${R}
            />
          </div>
        </div>
      </div>
    </div>
  `}function r({onAdd:j,onCancel:G}){let[P,N]=V(""),J=S(null);A(()=>{if(J.current)J.current.focus()},[]);let K=()=>{if(P.trim())j(P.trim()),N("")};return Z`
    <div class="kanban-plugin__item-form">
      <div class="kanban-plugin__item-input-wrapper">
        <textarea
          ref=${J}
          placeholder="Card title..."
          value=${P}
          onInput=${(W)=>N(W.target.value)}
          onKeyDown=${(W)=>{if(W.key==="Enter"&&!W.shiftKey)W.preventDefault(),K();else if(W.key==="Escape")G()}}
          rows="2"
        />
      </div>
      <div class="kanban-plugin__item-input-actions">
        <button class="kanban-plugin__item-action-add" onClick=${K}>Add card</button>
        <button class="kanban-plugin__item-action-cancel" onClick=${G}>Cancel</button>
      </div>
    </div>
  `}function n({lane:j,onUpdate:G,onDelete:P,onAddCard:N,onUpdateCard:J,onDeleteCard:K,onArchiveCard:X,onMoveCard:W}){let[$,F]=V(!1),[z,y]=V(j.title),[M,U]=V(!1),[T,w]=V(!1),B=S(null);A(()=>{if($&&B.current)B.current.focus(),B.current.select()},[$]);let R=(q)=>{if(q.preventDefault(),x)q.dataTransfer.dropEffect="move",w(!0)},Y=(q)=>{let _=q.currentTarget.getBoundingClientRect(),D=q.clientX,m=q.clientY;if(D<_.left||D>_.right||m<_.top||m>_.bottom)w(!1)},E=(q)=>{if(q.preventDefault(),w(!1),x)W(x.card,x.fromLaneId,j.id);x=null},H=()=>{if(z.trim())G({...j,title:z.trim()});F(!1)},Q=(q)=>{N(j.id,q),U(!1)};return Z`
    <div class="kanban-plugin__lane-wrapper">
      <div 
        class="kanban-plugin__lane ${T?"is-dropping":""}"
        onDragOver=${R}
        onDragLeave=${Y}
        onDrop=${E}
      >
        <div class="kanban-plugin__lane-header-wrapper">
          <div class="kanban-plugin__lane-grip">
            ${O.grip}
          </div>
          
          <div class="kanban-plugin__lane-title">
            ${$?Z`
              <input
                ref=${B}
                class="kanban-plugin__lane-title-input"
                value=${z}
                onInput=${(q)=>y(q.target.value)}
                onBlur=${()=>{if($)H()}}
                onKeyDown=${(q)=>{if(q.key==="Enter")H();if(q.key==="Escape")y(j.title),F(!1)}}
              />
            `:Z`
              <div
                class="kanban-plugin__lane-title-text"
                onDblClick=${()=>F(!0)}
                title=${j.title}
              >
                ${j.title}
              </div>
              <div class="kanban-plugin__lane-title-count">${j.cards.length}</div>
            `}
          </div>
          
          <div class="kanban-plugin__lane-settings-button-wrapper">
            <button 
              class="kanban-plugin__lane-settings-button"
              onClick=${()=>U(!0)}
              title="Add card"
            >
              ${O.plusCircle}
            </button>
            <button 
              class="kanban-plugin__lane-settings-button"
              onClick=${()=>P(j)}
              title="More options"
            >
              ${O.moreVertical}
            </button>
          </div>
        </div>
        
        <div class="kanban-plugin__lane-items">
          ${j.cards.map((q,_)=>Z`
            <${l}
              key=${q.id}
              card=${q}
              laneId=${j.id}
              cardIndex=${_}
              onUpdate=${(D)=>J(j.id,D)}
              onDelete=${(D)=>K(j.id,D)}
              onArchive=${X}
            />
          `)}
        </div>
        
        ${M?Z`
          <${r}
            onAdd=${Q}
            onCancel=${()=>U(!1)}
          />
        `:Z`
          <div class="kanban-plugin__item-button-wrapper">
            <button 
              class="kanban-plugin__new-item-button"
              onClick=${()=>U(!0)}
            >
              ${O.plus} Add a card
            </button>
          </div>
        `}
      </div>
    </div>
  `}function t({onAdd:j,onCancel:G}){let[P,N]=V(""),J=S(null);A(()=>{if(J.current)J.current.focus()},[]);let K=()=>{if(P.trim())j(P.trim())};return Z`
    <div class="kanban-plugin__lane-form-wrapper">
      <input
        ref=${J}
        class="kanban-plugin__lane-input"
        placeholder="Enter lane title..."
        value=${P}
        onInput=${(W)=>N(W.target.value)}
        onKeyDown=${(W)=>{if(W.key==="Enter")W.preventDefault(),K();else if(W.key==="Escape")G()}}
      />
      <div class="kanban-plugin__lane-input-actions">
        <button class="kanban-plugin__lane-action-add" onClick=${K}>Add lane</button>
        <button class="kanban-plugin__lane-action-cancel" onClick=${G}>Cancel</button>
      </div>
    </div>
  `}function d({cards:j,onRestore:G}){let[P,N]=V(!0);if(j.length===0)return null;return Z`
    <div class="kanban-plugin__archive">
      <div class="kanban-plugin__archive-header">
        <h3>${O.archive} Archive (${j.length})</h3>
        <button 
          class="kanban-plugin__archive-toggle"
          onClick=${()=>N(!P)}
        >
          ${P?"Hide":"Show"}
        </button>
      </div>
      ${P&&Z`
        <div class="kanban-plugin__archive-cards">
          ${j.map((J)=>Z`
            <div class="kanban-plugin__archive-card" key=${J.id}>
              <span class="kanban-plugin__archive-card-title">${J.title.split(`
`)[0]}</span>
              <button onClick=${()=>G(J)} title="Restore">
                ${O.restore}
              </button>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function a(){let[j,G]=V(null),[P,N]=V(!1),[J,K]=V([]),[X,W]=V([]);A(()=>{let H=(Q)=>{if(Q.ctrlKey||Q.metaKey){if(Q.key.toLowerCase()==="z")if(Q.preventDefault(),Q.shiftKey)z();else F();else if(Q.key.toLowerCase()==="y")Q.preventDefault(),z()}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[F,z]),A(()=>{let H=(Q)=>{let q=Q.data;switch(q.type){case"update":let _=o(q.content);G(_),L.postMessage({type:"synced"});break;case"setTheme":document.body.classList.toggle("light",q.theme==="light");break}};return window.addEventListener("message",H),L.postMessage({type:"ready"}),()=>window.removeEventListener("message",H)},[]);let $=I((H)=>{G(H),K((q)=>j?[...q,j]:q),W([]);let Q=C(H);L.postMessage({type:"edit",content:Q})},[j]),F=I(()=>{if(!j||J.length===0)return;let H=J[J.length-1];K(J.slice(0,-1)),W((Q)=>[...Q,j]),G(H),L.postMessage({type:"edit",content:C(H)})},[j,J]),z=I(()=>{if(!j||X.length===0)return;let H=X[X.length-1];W(X.slice(0,-1)),K((Q)=>[...Q,j]),G(H),L.postMessage({type:"edit",content:C(H)})},[j,X]),y=(H)=>{if(!j)return;let Q={id:f("lane"),title:H,cards:[]};$({...j,lanes:[...j.lanes,Q]}),N(!1)},M=(H)=>{if(!j)return;$({...j,lanes:j.lanes.map((Q)=>Q.id===H.id?H:Q)})},U=(H)=>{if(!j)return;$({...j,lanes:j.lanes.filter((Q)=>Q.id!==H.id)})},T=(H,Q)=>{if(!j)return;let q={id:f("card"),title:Q,checked:!1,checkChar:" "};$({...j,lanes:j.lanes.map((_)=>_.id===H?{..._,cards:[..._.cards,q]}:_)})},w=(H,Q)=>{if(!j)return;$({...j,lanes:j.lanes.map((q)=>q.id===H?{...q,cards:q.cards.map((_)=>_.id===Q.id?Q:_)}:q)})},B=(H,Q)=>{if(!j)return;$({...j,lanes:j.lanes.map((q)=>q.id===H?{...q,cards:q.cards.filter((_)=>_.id!==Q.id)}:q)})},R=(H)=>{if(!j)return;let Q={...j,lanes:j.lanes.map((q)=>({...q,cards:q.cards.filter((_)=>_.id!==H.id)})),archive:[...j.archive,{...H,checked:!0}]};$(Q)},Y=(H,Q,q)=>{if(!j)return;$({...j,lanes:j.lanes.map((_)=>{if(_.id===Q)return{..._,cards:_.cards.filter((D)=>D.id!==H.id)};if(_.id===q)return{..._,cards:[..._.cards,H]};return _})})},E=(H)=>{if(!j)return;if(j.lanes.length===0){let q={id:f("lane"),title:"Restored",cards:[{...H,checked:!1}]};$({...j,lanes:[q],archive:j.archive.filter((_)=>_.id!==H.id)});return}let Q=j.lanes[0];$({...j,lanes:j.lanes.map((q)=>q.id===Q.id?{...q,cards:[...q.cards,{...H,checked:!1}]}:q),archive:j.archive.filter((q)=>q.id!==H.id)})};if(!j)return Z`<div class="loading">Loading...</div>`;return Z`
    <div class="kanban-plugin">
      <div class="kanban-plugin__search-wrapper">
        <button onClick=${()=>N(!0)}>
          ${O.plus} Add lane
        </button>
        <button class="secondary" onClick=${F} disabled=${J.length===0} title="Undo (Ctrl+Z)">
          Undo
        </button>
        <button class="secondary" onClick=${z} disabled=${X.length===0} title="Redo (Ctrl+Y)">
          Redo
        </button>
      </div>
      
      <div class="kanban-plugin__board">
        <div>
          ${j.lanes.map((H)=>Z`
            <${n}
              key=${H.id}
              lane=${H}
              onUpdate=${M}
              onDelete=${U}
              onAddCard=${T}
              onUpdateCard=${w}
              onDeleteCard=${B}
              onArchiveCard=${R}
              onMoveCard=${Y}
            />
          `)}
          
          ${P&&Z`
            <${t}
              onAdd=${y}
              onCancel=${()=>N(!1)}
            />
          `}
        </div>
      </div>
      
      <${d} cards=${j.archive} onRestore=${E} />
    </div>
  `}function g(){let j=document.getElementById("app");if(j)h(Z`<${a} />`,j)}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",g);else g();})();
