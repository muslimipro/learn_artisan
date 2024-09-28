import{d as O,r as n,e as a,o as s,n as f,g as t,f as e,h as l,m as ne,a as y,k as se,I as re,w as de,l as i,c as x,t as S,F as $,i as K,j as ce,K as ie,L as ue,_ as _e}from"./index-C5dyWmaC.js";import{u as me}from"./useQuery-BKFB3CyQ.js";import{u as pe,C as ve}from"./dashboard-store-D6sF99pa.js";import"./api-client-DXmZwqpk.js";import"./base-url-qR72hEjy.js";const fe=y("div",{class:"text-h2"}," 78CDV ",-1),ge=O({__name:"ShareClassCode",setup(u){const _=n(!1);return(T,g)=>{const m=a("v-btn"),p=a("v-card"),V=a("v-dialog");return s(),f(V,{modelValue:_.value,"onUpdate:modelValue":g[0]||(g[0]=v=>_.value=v),"max-width":"400"},{activator:t(({props:v})=>[e(m,ne({class:"self-end",variant:"flat",color:"info","prepend-icon":"mdi-share"},v),{default:t(()=>[l("Class Code")]),_:2},1040)]),default:t(()=>[e(p,{title:"Class CODE",class:"align-center pb-12 pl-12 pr-12 pt-2"},{default:t(()=>[fe]),_:1})]),_:1},8,["modelValue"])}}}),D=u=>(ie("data-v-493346d9"),u=u(),ue(),u),Ce={key:1},he={key:2},xe=D(()=>y("br",null,null,-1)),ye=D(()=>y("br",null,null,-1)),Ve=D(()=>y("div",{class:"text-body-1 mr-2"},"375xp",-1)),be=O({__name:"ClassContentView",setup(u){const _=se(),T=pe(),{classes:g}=re(T),m=n(_.params.id.toString()),p=n(null),{isPending:V,isError:v,data:b,error:W,refetch:j}=me({queryKey:["class",m],queryFn:async()=>{const d=await ve.getClassByID(m.value);return p.value=d,d}});de(()=>_.params.id,d=>{m.value=d.toString(),j()});const G=n(["Yertugan Muslim","Walter White","Robert Oppenheimer","Aristotle"]),M=n([...G.value]),C=n(!1),k=n(!1),A=n(""),Q=n(null),Y=()=>{C.value=!0},z=()=>{C.value=!1},H=()=>{},J=()=>{k.value=!1,Q.value=null},X=()=>{};function Z(d){ce.replace({path:`/dashboard/class/${d}`})}return(d,r)=>{const I=a("v-select"),ee=a("v-skeleton-loader"),R=a("v-divider"),c=a("v-btn"),B=a("v-avatar"),N=a("v-list-item-title"),U=a("v-icon"),L=a("v-list-item"),h=a("v-card"),te=a("RouterLink"),q=a("v-card-title"),ae=a("v-form"),oe=a("v-card-text"),w=a("v-spacer"),E=a("v-card-actions"),F=a("v-dialog"),le=a("v-col");return s(),f(le,{style:{"min-width":"300px","max-width":"100%"}},{default:t(()=>{var P;return[e(I,{modelValue:p.value,"onUpdate:modelValue":[r[0]||(r[0]=o=>p.value=o),Z],class:"d-inline-flex",label:"Class",items:i(g),"item-title":"name","item-value":"id"},null,8,["modelValue","items"]),i(V)?(s(),f(ee,{key:0,type:"list-item-two-line"})):i(v)?(s(),x("div",Ce,S((P=i(W))==null?void 0:P.message),1)):(s(),x("div",he,[xe,e(h,{title:"Teachers",class:"pa-4 border-sm rounded-lg",variant:"flat"},{append:t(()=>[e(c,{class:"self-end",variant:"flat",color:"success","prepend-icon":"mdi-plus",onClick:Y},{default:t(()=>[l("Add")]),_:1})]),default:t(()=>[e(R,{class:"border-opacity-100 my-2",color:"error"}),(s(!0),x($,null,K(i(b).teachers,o=>(s(),f(L,{key:o.id,color:"primary",rounded:"shaped"},{prepend:t(()=>[e(B,{color:"grey",image:o.image||""},null,8,["image"])]),append:t(()=>[e(c,{icon:"",variant:"flat",class:"pa-0"},{default:t(()=>[e(U,{color:"red"},{default:t(()=>[l("mdi-delete")]),_:1})]),_:1})]),default:t(()=>[e(N,{textContent:S(o.name)},null,8,["textContent"])]),_:2},1024))),128))]),_:1}),ye,e(h,{title:"Students",class:"pa-4 border-sm rounded-lg",variant:"flat"},{append:t(()=>{var o;return[e(te,{to:{name:"students-progress-view",params:{id:(o=i(b))==null?void 0:o.id}}},{default:t(()=>[e(c,{class:"self-end mr-4",variant:"flat",color:"warning","prepend-icon":"mdi-stairs"},{default:t(()=>[l("Progress")]),_:1})]),_:1},8,["to"]),e(ge)]}),default:t(()=>[e(R,{class:"border-opacity-100 my-2",color:"error"}),(s(!0),x($,null,K(i(b).students,o=>(s(),f(L,{key:o.id,to:{name:"student-profile-view",params:{id:o.id}},color:"primary",rounded:"shaped"},{prepend:t(()=>[e(B,{color:"grey",image:o.image||""},null,8,["image"])]),append:t(()=>[Ve,e(U,null,{default:t(()=>[l("mdi-page-next-outline")]),_:1})]),default:t(()=>[e(N,{textContent:S(o.name)},null,8,["textContent"])]),_:2},1032,["to"]))),128))]),_:1}),e(F,{modelValue:C.value,"onUpdate:modelValue":r[2]||(r[2]=o=>C.value=o),"max-width":"600"},{default:t(()=>[e(h,null,{default:t(()=>[e(q,{class:"headline"},{default:t(()=>[l("Add New Teacher")]),_:1}),e(oe,null,{default:t(()=>[e(ae,null,{default:t(()=>[e(I,{modelValue:A.value,"onUpdate:modelValue":r[1]||(r[1]=o=>A.value=o),items:M.value,label:"Select Teacher",outlined:"",required:""},null,8,["modelValue","items"])]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(w),e(c,{text:"Cancel",onClick:z},{default:t(()=>[l("Cancel")]),_:1}),e(c,{color:"primary",onClick:H},{default:t(()=>[l("Add")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(F,{modelValue:k.value,"onUpdate:modelValue":r[3]||(r[3]=o=>k.value=o),"max-width":"600"},{default:t(()=>[e(h,null,{default:t(()=>[e(q,{class:"headline text-center"},{default:t(()=>[l("Are you sure you want to remove this teacher?")]),_:1}),e(E,{class:"text-center"},{default:t(()=>[e(w),e(c,{text:"Cancel",onClick:J},{default:t(()=>[l("Cancel")]),_:1}),e(c,{color:"red",variant:"tonal",onClick:X},{default:t(()=>[l("Confirm")]),_:1}),e(w)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))]}),_:1})}}}),Ae=_e(be,[["__scopeId","data-v-493346d9"]]);export{Ae as default};
