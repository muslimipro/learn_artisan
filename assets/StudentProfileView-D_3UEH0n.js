import{u as R,a as A}from"./useQuery-DQeQOh-z.js";import{S as F}from"./StudentService-kP-i6Yx2.js";import{_ as O}from"./AvatarPlaceholder.vue_vue_type_script_setup_true_lang-LvvfY95t.js";import{S as M}from"./SkillsDiagram-Mle2RApW.js";import{_ as W}from"./TokenCard.vue_vue_type_script_setup_true_lang-BdttdLxR.js";import{d as L,u as N,l as K,r as S,b as n,o as i,h as v,w as t,e,a as m,c as b,t as u,i as P,f as c,n as D,z as G,g as C,F as q,_ as z,k as H,m as J,q as X}from"./index-BwA11LRs.js";import{P as Y}from"./ProjectCard-lv_oU7WJ.js";import"./api-client-COTgTXz3.js";import"./base-url-qR72hEjy.js";import"./yellow_star-CHjFodN-.js";const Z={class:"relative image-container"},ee={key:0,class:"absolute top-0 left-0 bg-yellow-400 text-black px-4 py-1 text-xs font-semibold"},te={class:"text-h5"},ae={key:0},ne=L({__name:"CourseProgressCard",props:{course:{}},setup(U){const $=N(),_=U,o=K(()=>_.course),f=K(()=>$.params.id),d=S([]);function r(p,h){return h?"bg-orange-darken-2":p=="completed"?"bg-green-darken-1":p=="attempted"?"bg-red-darken-1":p=="accessed"?"bg-grey-lighten-1":"bg-grey-lighten-2"}const{isPending:g,data:I}=R({queryKey:["skill",o.value.id,f.value],queryFn:async()=>{const p=await F.getCourseInfoByIdStudentId(o.value.id.toString(),f.value.toString());for(const h of p.modules)for(const l of h.topics){const a=await F.getTopicByIdStudentId(l.id.toString(),f.value.toString());d.value=[...d.value,...a.steps]}return p},refetchOnWindowFocus:!1});return(p,h)=>{const l=n("v-img"),a=n("v-col"),y=n("v-row"),x=n("v-tooltip"),V=n("v-btn"),j=n("v-sheet"),w=n("v-card");return i(),v(w,{class:"pa-2 border-sm rounded-lg",variant:"flat",disabled:o.value.status!="green"},{default:t(()=>[e(y,null,{default:t(()=>[e(a,{cols:"12",sm:"5",class:"justify-start align-start"},{default:t(()=>[e(y,null,{default:t(()=>[m("div",Z,[e(l,{height:"100",width:"175",src:o.value.cover_image,alt:o.value.name+" Image",cover:""},null,8,["src","alt"]),o.value.status!="green"?(i(),b("div",ee,u(p.$t("comingSoon")),1)):P("",!0)]),e(a,{class:"justify-center align-center pl-4"},{default:t(()=>[m("div",te,u(o.value.name),1),m("div",null,u(o.value.description),1),m("div",null,u(`${o.value.completed_steps_count} / ${o.value.total_steps_count}`),1)]),_:1})]),_:1})]),_:1}),e(a,{cols:"12",sm:"7",class:"d-flex flex-column justify-center align-center"},{default:t(()=>[c(g)?(i(),b("div",ae,"Pending...")):c(I)?(i(),v(j,{key:1,class:"d-flex align-content-start flex-wrap gap-1"},{default:t(()=>[(i(!0),b(q,null,D(d.value,s=>{var B;return i(),v(V,{to:`/course/${o.value.id}/topic/${s.parent_id}/step/${s.id}?dashboard_topic_id=${s.parent_id}&dashboard_step_id=${s.id}&dashboard_step_order=${s.order}`,key:s.id,class:G(["small-btn ma-0 pa-0 w-3 h-3",r(s.progress,((B=o.value.last_accessed_topic.last_accessed_step)==null?void 0:B.id)==s.id)]),variant:"flat"},{default:t(()=>[e(x,{activator:"parent",location:"top"},{default:t(()=>[C(u(`${s.id}: ${s.name}`),1)]),_:2},1024)]),_:2},1032,["to","class"])}),128))]),_:1})):P("",!0)]),_:1})]),_:1})]),_:1},8,["disabled"])}}}),oe=z(ne,[["__scopeId","data-v-75e8f92a"]]),le={class:"d-flex"},se=L({__name:"UpdateStudentFormDialog",props:{item:{}},setup(U){const{t:$}=H(),_=U,o=S(!1),f=S(!1),d=A(),r=S({name:_.item.name,image:null}),g=S(null);g.value=_.item.image;const I=l=>{const a=l.target;a.files&&a.files[0]&&(r.value.image=a.files[0],g.value=URL.createObjectURL(a.files[0]))},p=K(()=>r.value.name),h=async()=>{if(!p.value)return alert($("pleaseFillInAllFields"));const l=new FormData;l.append("name",r.value.name),r.value.image!=null&&l.append("image",r.value.image),f.value=!0;try{await F.updateStudent(_.item.id,l),await d.invalidateQueries({queryKey:["school/student/profile"]}),o.value=!1}catch(a){alert(`${$("failedToUpdateStudent")}: ${a}`)}finally{f.value=!1}};return J(o,l=>{l&&(r.value.name=_.item.name,r.value.image=null,g.value=_.item.image)}),(l,a)=>{const y=n("v-btn"),x=n("v-card-title"),V=n("v-text-field"),j=n("v-file-input"),w=n("v-img"),s=n("v-form"),B=n("v-card-text"),E=n("v-card-actions"),Q=n("v-card"),T=n("v-dialog");return i(),b(q,null,[e(y,{class:"text-none py-2","prepend-icon":"mdi-pencil",variant:"plain",onClick:a[0]||(a[0]=k=>o.value=!0)},{default:t(()=>[C(u(l.$t("Edit profile")),1)]),_:1}),e(T,{modelValue:o.value,"onUpdate:modelValue":a[4]||(a[4]=k=>o.value=k),"max-width":"600"},{default:t(()=>[e(Q,{class:"pa-4"},{default:t(()=>[e(x,{class:"px-2"},{default:t(()=>[C(u(l.$t("updateStudent")),1)]),_:1}),e(B,null,{default:t(()=>[e(s,{onSubmit:X(h,["prevent"])},{default:t(()=>[e(V,{modelValue:r.value.name,"onUpdate:modelValue":a[1]||(a[1]=k=>r.value.name=k),type:"text",density:"compact",label:l.$t("name"),placeholder:l.$t("nameSurname"),"prepend-inner-icon":"mdi-account-outline",variant:"outlined",required:""},null,8,["modelValue","label","placeholder"]),m("div",le,[e(j,{modelValue:r.value.image,"onUpdate:modelValue":a[2]||(a[2]=k=>r.value.image=k),"max-width":"100%",variant:"outlined",accept:"image/png, image/jpeg, image/bmp",label:l.$t("avatar"),placeholder:"Pick an avatar","prepend-icon":"mdi-camera",onChange:I,counter:"",required:""},null,8,["modelValue","label"]),g.value?(i(),v(w,{key:0,src:g.value,"max-width":"60","max-height":"60",class:"pa-0 ma-0"},null,8,["src"])):P("",!0)])]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(y,{color:"red darken-1",variant:"text",onClick:a[3]||(a[3]=k=>o.value=!1)},{default:t(()=>[C(u(l.$t("cancel")),1)]),_:1}),e(y,{loading:f.value,color:"primary",variant:"flat",disabled:!p.value||f.value,onClick:h},{default:t(()=>[C(u(l.$t("save")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),ie=z(se,[["__scopeId","data-v-72b6b4fb"]]),re=m("div",{class:"text-h5 pb-6"},"Student Profile",-1),ce={key:1},de={key:2},ue={class:"text-h5 pt-4"},me={class:"text-body"},_e={class:"flex pt-2"},pe=m("div",{class:"text-h4"},"375xp",-1),ve=m("br",null,null,-1),fe=m("br",null,null,-1),ge={class:"d-flex flex-wrap justify-center align-center gap-2"},Ve=L({__name:"StudentProfileView",setup(U){const $=N(),_=S($.params.id.toString()),{isPending:o,isError:f,data:d,error:r}=R({queryKey:["school/student/profile",_.value],queryFn:()=>F.getStudentProfile(_.value)}),{data:g}=R({queryKey:["school/student",_.value],queryFn:()=>F.getStudentById(_.value)});return(I,p)=>{const h=n("v-skeleton-loader"),l=n("v-avatar"),a=n("v-icon"),y=n("v-btn"),x=n("v-col"),V=n("v-row"),j=n("v-card");return i(),v(x,{style:{"min-width":"300px","max-width":"100%"}},{default:t(()=>{var w;return[re,c(o)?(i(),v(h,{key:0,type:"list-item-two-line"})):c(f)?(i(),b("div",ce,u((w=c(r))==null?void 0:w.message),1)):c(d)?(i(),b("div",de,[e(j,{class:"pa-6 border-sm rounded-lg",variant:"flat"},{default:t(()=>[e(V,null,{default:t(()=>[e(x,{cols:"12",sm:"4",class:"d-flex flex-column justify-center align-center"},{default:t(()=>[c(d).image!=null?(i(),v(l,{key:0,image:c(d).image,size:"120"},null,8,["image"])):(i(),v(O,{key:1,big:!0})),m("div",ue,u(c(d).name),1),m("div",me,u(c(d).login),1),m("div",_e,[e(y,{style:{"min-width":"0px",visibility:"hidden"},class:"pa-0 h-auto",variant:"flat",density:"compact"},{default:t(()=>[e(a,{color:"info",icon:"mdi-information"})]),_:1}),pe,e(y,{style:{"min-width":"0px"},class:"pa-0",variant:"flat",density:"compact"},{default:t(()=>[e(a,{color:"info",icon:"mdi-information"})]),_:1})]),c(g)?(i(),v(ie,{key:2,item:c(g)},null,8,["item"])):P("",!0),e(y,{class:"text-none py-2","prepend-icon":"mdi-lock-reset",variant:"plain",onClick:()=>{}},{default:t(()=>[C(u(I.$t("Reset password")),1)]),_:1})]),_:1}),e(x,{cols:"12",sm:"4",class:"d-flex flex-column justify-center align-center"},{default:t(()=>[e(M)]),_:1}),e(x,{cols:"12",sm:"4",class:"d-flex flex-wrap justify-center align-center"},{default:t(()=>[(i(!0),b(q,null,D(c(d).artisan_tokens,s=>(i(),v(W,{class:"ma-2",key:s.id,token:s,small:!0},null,8,["token"]))),128))]),_:1})]),_:1})]),_:1}),ve,(i(!0),b(q,null,D(c(d).courses,s=>(i(),v(oe,{key:s.id,course:s,class:"mb-2"},null,8,["course"]))),128)),fe,m("div",ge,[(i(!0),b(q,null,D(c(d).projects,s=>(i(),v(Y,{key:s.id,project:s,flat:!0},null,8,["project"]))),128))])])):P("",!0)]}),_:1})}}});export{Ve as default};