import{d as P,r as s,e as a,o as v,n as D,g as t,f as e,h as n,m as H,a as f,k as Q,c as F,i as J,F as M,t as O,K as X,L as Z,_ as ee}from"./index-Cyv1Qn4w.js";const te=f("div",{class:"text-h2"}," 78CDV ",-1),ae=P({__name:"ShareClassCode",setup(_){const x=s(!1);return(C,c)=>{const h=a("v-btn"),g=a("v-card"),u=a("v-dialog");return v(),D(u,{modelValue:x.value,"onUpdate:modelValue":c[0]||(c[0]=d=>x.value=d),"max-width":"400"},{activator:t(({props:d})=>[e(h,H({class:"self-end",variant:"flat",color:"info","prepend-icon":"mdi-share"},d),{default:t(()=>[n("Class Code")]),_:2},1040)]),default:t(()=>[e(g,{title:"Class CODE",class:"align-center pb-12 pl-12 pr-12 pt-2"},{default:t(()=>[te]),_:1})]),_:1},8,["modelValue"])}}}),y=_=>(X("data-v-3b8040dd"),_=_(),Z(),_),oe=y(()=>f("br",null,null,-1)),le=y(()=>f("br",null,null,-1)),ne=y(()=>f("br",null,null,-1)),se=y(()=>f("div",{class:"text-body-1"},"375xp",-1)),ce=P({__name:"ClassContentView",setup(_){const x=Q(),C=s(x.params.id.toString()),c=s([{icon:"mdi-account",text:"Yertugan Muslim"}]),h=s(["Yertugan Muslim","Walter White","Robert Oppenheimer","Aristotle"]),g=s([...h.value]),u=s(!1),d=s(!1),p=s(""),V=s(null),W=()=>{b(),u.value=!0},S=()=>{u.value=!1},Y=()=>{p.value&&(c.value.push({icon:"mdi-account",text:p.value}),p.value="",b()),S()},$=i=>{V.value=i,d.value=!0},B=()=>{d.value=!1,V.value=null},q=()=>{if(V.value){const i=c.value.findIndex(l=>{var m;return l.text===((m=V.value)==null?void 0:m.text)});i!==-1&&(c.value.splice(i,1),b())}B()},b=()=>{const i=new Set(c.value.map(l=>l.text));g.value=h.value.filter(l=>!i.has(l))};return b(),(i,l)=>{const m=a("v-select"),R=a("v-divider"),r=a("v-btn"),k=a("v-icon"),N=a("v-list-item-title"),I=a("v-list-item"),w=a("v-card"),K=a("RouterLink"),L=a("v-card-title"),j=a("v-form"),z=a("v-card-text"),A=a("v-spacer"),U=a("v-card-actions"),E=a("v-dialog"),G=a("v-col");return v(),D(G,{style:{"min-width":"300px","max-width":"100%"}},{default:t(()=>[e(m,{modelValue:C.value,"onUpdate:modelValue":l[0]||(l[0]=o=>C.value=o),class:"d-inline-flex",label:"Class",items:["7A","7B","8A","8B","9A","9B","sdfgasdgsdfgsd"]},null,8,["modelValue"]),oe,le,e(w,{title:"Teachers",class:"pa-4 border-sm rounded-lg",variant:"flat"},{append:t(()=>[e(r,{class:"self-end",variant:"flat",color:"success","prepend-icon":"mdi-plus",onClick:W},{default:t(()=>[n("Add")]),_:1})]),default:t(()=>[e(R,{class:"border-opacity-100 my-2",color:"error"}),(v(!0),F(M,null,J(c.value,(o,T)=>(v(),D(I,{key:T,color:"primary",rounded:"shaped"},{prepend:t(()=>[e(k,{icon:o.icon},null,8,["icon"])]),append:t(()=>[e(r,{icon:"",variant:"flat",class:"pa-0",onClick:()=>$(o)},{default:t(()=>[e(k,{color:"red"},{default:t(()=>[n("mdi-delete")]),_:1})]),_:2},1032,["onClick"])]),default:t(()=>[e(N,{textContent:O(o.text)},null,8,["textContent"])]),_:2},1024))),128))]),_:1}),ne,e(w,{title:"Students",class:"pa-4 border-sm rounded-lg",variant:"flat"},{append:t(()=>[e(K,{to:{name:"students-progress-view",params:{id:C.value}}},{default:t(()=>[e(r,{class:"self-end mr-4",variant:"flat",color:"warning","prepend-icon":"mdi-stairs"},{default:t(()=>[n("Progress")]),_:1})]),_:1},8,["to"]),e(ae)]),default:t(()=>[e(R,{class:"border-opacity-100 my-2",color:"error"}),(v(),F(M,null,J([{icon:"mdi-account",text:"Amiraly Bekturganov"},{icon:"mdi-account",text:"John Doe"},{icon:"mdi-account",text:"Jane Smith"}],(o,T)=>e(I,{key:T,to:{name:"student-profile-view",params:{id:o.text.toLowerCase().replace(" ","_")}},color:"primary",rounded:"shaped"},{prepend:t(()=>[e(k,{icon:o.icon},null,8,["icon"])]),append:t(()=>[se,e(r,{icon:"",variant:"flat",class:"pa-0"},{default:t(()=>[e(k,{color:"grey"},{default:t(()=>[n("mdi-cog")]),_:1})]),_:1})]),default:t(()=>[e(N,{textContent:O(o.text)},null,8,["textContent"])]),_:2},1032,["to"])),64))]),_:1}),e(E,{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=o=>u.value=o),"max-width":"600"},{default:t(()=>[e(w,null,{default:t(()=>[e(L,{class:"headline"},{default:t(()=>[n("Add New Teacher")]),_:1}),e(z,null,{default:t(()=>[e(j,null,{default:t(()=>[e(m,{modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=o=>p.value=o),items:g.value,label:"Select Teacher",outlined:"",required:""},null,8,["modelValue","items"])]),_:1})]),_:1}),e(U,null,{default:t(()=>[e(A),e(r,{text:"Cancel",onClick:S},{default:t(()=>[n("Cancel")]),_:1}),e(r,{color:"primary",onClick:Y},{default:t(()=>[n("Add")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(E,{modelValue:d.value,"onUpdate:modelValue":l[3]||(l[3]=o=>d.value=o),"max-width":"600"},{default:t(()=>[e(w,null,{default:t(()=>[e(L,{class:"headline text-center"},{default:t(()=>[n("Are you sure you want to remove this teacher?")]),_:1}),e(U,{class:"text-center"},{default:t(()=>[e(A),e(r,{text:"Cancel",onClick:B},{default:t(()=>[n("Cancel")]),_:1}),e(r,{color:"red",variant:"tonal",onClick:q},{default:t(()=>[n("Confirm")]),_:1}),e(A)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),re=ee(ce,[["__scopeId","data-v-3b8040dd"]]);export{re as default};
