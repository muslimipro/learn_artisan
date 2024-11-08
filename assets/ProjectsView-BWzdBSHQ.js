import{u as P}from"./useQuery-DFmdIgVU.js";import{d as E,l as M,r as h,k as B,m as D,f as m,c as _,t as C,a as o,e as l,w as y,h as I,i as $,b as r,o as n,g as U,F as R,p as G}from"./index-DsDdy0ek.js";import{P as z}from"./ProjectService-B-n4J9si.js";import{P as A}from"./ProjectCard-CcpSeC29.js";import{S as O}from"./SkillService-qDffT6aU.js";import{C as H}from"./CourseCard-C1TMYgDz.js";import{T as J}from"./TokenService-XBeNNrPk.js";import"./api-client-aYpMhgqo.js";import"./base-url-qR72hEjy.js";import"./course-content-store-CaZHf6XA.js";const X={key:0},Y={key:1},Z={key:2},ee={class:"d-flex align-center justify-between"},te={class:"text-h5 pb-4"},oe={class:"d-flex align-center"},se={class:"flex flex-wrap gap-8",style:{width:"100%"}},le=E({__name:"IntroProjectsView",props:{course:{}},setup(K){const{locale:f}=M(),c=h(f.value),g=K,e=B(()=>g.course),p=h([]),a=h({}),{isPending:S,isError:j,data:q,error:V,refetch:F}=P({queryKey:[`skill/intro/${e.value.id}`,c.value],queryFn:async()=>{const s=await O.getCourseInfoByID(e.value.id.toString());return p.value=s.modules[0].topics.map(t=>({id:e.value.id,name:t.name,description:"",cover_image:e.value.cover_image,prereqs:[],status:e.value.status,total_steps_count:e.value.total_steps_count,completed_steps_count:e.value.completed_steps_count,accessed_steps_count:e.value.accessed_steps_count,last_accessed_topic:e.value.last_accessed_topic})),s},refetchOnWindowFocus:!1});D([()=>f.value,()=>e.value.id],()=>{c.value=f.value,a.value[0]||(a.value[0]=0),F()},{immediate:!0});const T=s=>{a.value[s]>0&&a.value[s]--},L=(s,t)=>{a.value[s]<t-1&&a.value[s]++};return(s,t)=>{const b=r("v-icon"),i=r("v-slide-group-item"),u=r("v-slide-group"),k=r("v-col"),x=r("v-container");return m(S)?(n(),_("div",X," Pending... ")):m(j)?(n(),_("div",Y,C(m(V)),1)):m(q)?(n(),_("div",Z,[o("div",ee,[o("div",te,C(s.$t("introToRaspberryPiPico")),1),o("div",oe,[l(b,{onClick:t[0]||(t[0]=d=>T(0)),class:"mr-2"},{default:y(()=>[U("mdi-chevron-left")]),_:1}),l(b,{onClick:t[1]||(t[1]=d=>L(0,p.value.length))},{default:y(()=>[U("mdi-chevron-right")]),_:1})])]),o("div",se,[p.value.length>0?(n(),I(x,{key:0,fluid:"",class:"pa-0"},{default:y(()=>[l(k,{style:{"min-width":"100px","max-width":"100%"},class:"px-0 py-0"},{default:y(()=>[l(u,{modelValue:a.value[0],"onUpdate:modelValue":t[2]||(t[2]=d=>a.value[0]=d),mobile:"","center-active":""},{default:y(()=>[(n(!0),_(R,null,G(p.value,(d,w)=>(n(),I(i,{key:d.id},{default:y(()=>[l(H,{class:"mx-4 my-2",course:d,introIndex:w},null,8,["course","introIndex"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):$("",!0)])])):$("",!0)}}}),ne={key:0},ae={key:1},re={key:2,class:"flex-col w-full px-16 py-8"},ce=o("br",null,null,-1),ie={class:"d-flex items-center pb-8"},ue={class:"text-h5"},de={class:"d-flex"},ve=o("div",{class:"text-subtitle-1 mr-2",style:{color:"#616161"}},"Select Level:",-1),me={style:{width:"350px"}},_e={style:{width:"400px"}},pe={class:"flex flex-wrap justify-center px-0 gap-8"},fe=o("div",{class:"h-8"},null,-1),$e=E({__name:"ProjectsView",setup(K){const{locale:f}=M(),c=h(f.value),g=h([]),e=h(0),p=h(""),{data:a,refetch:S}=P({queryKey:["skills",c.value],queryFn:async()=>await O.getSkills(c.value)}),{isPending:j,isError:q,data:V,error:F,refetch:T}=P({queryKey:["projects",c.value],queryFn:async()=>await z.getProjects(c.value)}),{data:L,refetch:s}=P({queryKey:["tokens"+c.value],queryFn:async()=>await J.getTokens(c.value)}),t=B(()=>a.value==null?null:a.value[0].courses.find(i=>i.name=="Micropython")??null);D(()=>f.value,()=>{c.value=f.value,S(),T(),s()},{immediate:!0});const b=B(()=>(V.value||[]).filter(i=>{const u=i.name.toLowerCase().includes(p.value.toLowerCase()),k=e.value==0||i.level===e.value,x=g.value.length===0||g.value.every(d=>i.artisan_tokens.map(w=>w.name).includes(d));return u&&k&&x}));return(i,u)=>{var N;const k=r("v-spacer"),x=r("v-icon"),d=r("v-rating"),w=r("v-card"),Q=r("v-text-field"),W=r("v-autocomplete");return m(j)?(n(),_("div",ne," Pending... ")):m(q)?(n(),_("div",ae,C(m(F)),1)):m(V)?(n(),_("div",re,[t.value!=null?(n(),I(le,{key:0,course:t.value},null,8,["course"])):$("",!0),ce,o("div",ie,[o("div",ue,C(i.$t("projects")),1),l(k),o("div",de,[l(w,{class:"d-flex justify-center align-center px-4 mr-4",rounded:"lg",style:{height:"48px"}},{default:y(()=>[l(x,{icon:"mdi-star-check-outline",color:"grey-darken-2",class:"mr-2"}),ve,l(d,{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=v=>e.value=v),length:5,"active-color":"yellow-darken-1",color:"grey-lighten-1",density:"compact",clearable:""},null,8,["modelValue"])]),_:1})]),o("div",me,[l(Q,{modelValue:p.value,"onUpdate:modelValue":u[1]||(u[1]=v=>p.value=v),"prepend-inner-icon":"mdi-magnify",label:"Search by title",variant:"solo",density:"comfortable","single-line":"",rounded:"lg",class:"mr-4","hide-details":""},null,8,["modelValue"])]),o("div",_e,[l(W,{modelValue:g.value,"onUpdate:modelValue":u[2]||(u[2]=v=>g.value=v),clearable:"",chips:"","prepend-inner-icon":"mdi-filter-plus-outline",label:"Filter by modules",variant:"solo",density:"comfortable",rounded:"lg",items:(N=m(L))==null?void 0:N.map(v=>v.name),multiple:"","hide-details":""},null,8,["modelValue","items"])])]),o("div",pe,[(n(!0),_(R,null,G(b.value,v=>(n(),_("div",{key:v.id},[l(A,{project:v},null,8,["project"])]))),128))]),fe])):$("",!0)}}});export{$e as default};
