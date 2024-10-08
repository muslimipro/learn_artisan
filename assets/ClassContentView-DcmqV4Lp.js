import{d as D,r as w,b as a,o as i,h as k,w as t,e,g as v,p as X,a as R,t as c,u as B,l as K,m as G,c as $,f as x,i as M,q as Y,_ as O,F as P,y as Z,n as W,A as ee,D as te,E as ae}from"./index-Dop57Fz-.js";import{a as Q,u as j}from"./useQuery-Bpmlz4Uh.js";import{C as oe}from"./ClassService-KdhJErSt.js";import{u as le}from"./dashboard-store-D1DxDQdE.js";import{a as L}from"./api-client-DKgx13sC.js";import{S as ne}from"./StudentService-B-4jZezG.js";import"./base-url-qR72hEjy.js";const se={class:"text-h2"},re=D({__name:"ShareClassCode",props:{code:{}},setup(s){const m=s,y=w(!1);return(g,o)=>{const l=a("v-btn"),p=a("v-card"),b=a("v-dialog");return i(),k(b,{modelValue:y.value,"onUpdate:modelValue":o[0]||(o[0]=r=>y.value=r),"max-width":"400"},{activator:t(({props:r})=>[e(l,X({class:"self-end",variant:"flat",color:"info","prepend-icon":"mdi-share"},r),{default:t(()=>[v("Class Code")]),_:2},1040)]),default:t(()=>[e(p,{title:"Class CODE",class:"align-center pb-12 pl-12 pr-12 pt-2"},{default:t(()=>[R("div",se,c(m.code),1)]),_:1})]),_:1},8,["modelValue"])}}}),U={async getActiveTeachers(){return(await L.get("/school/teacher/activelist/")).data},async addTeacherToClass(s,m){return(await L.post(`/school/teacher/${s}/addToClass?school_class_id=${m}`)).data},async removeTeacherFromClass(s,m){return(await L.delete(`/school/teacher/${s}/removeFromClass?school_class_id=${m}`)).data}},de=D({__name:"AddTeacherFormDialog",setup(s){const m=B(),y=Q(),g=w(!1),o=w(!1),l=K(()=>m.params.id.toString()),p=w(null),{data:b,isPending:r}=j({queryKey:["school/teacher/activelist"],queryFn:async()=>await U.getActiveTeachers()}),n=async()=>{if(p.value==null)return alert("pleaseFillInAllFields");o.value=!0;try{await U.addTeacherToClass(p.value.toString(),l.value),y.invalidateQueries({queryKey:["class"]}),g.value=!1}catch(u){alert(`failedToAddTeacher: ${u}`)}finally{o.value=!1}};return G(g,u=>{u==!1&&(p.value=null)}),(u,f)=>{const _=a("v-btn"),h=a("v-card-title"),T=a("v-progress-circular"),V=a("v-select"),C=a("v-form"),F=a("v-card-text"),I=a("v-card-actions"),q=a("v-card"),A=a("v-dialog");return i(),$("div",null,[e(_,{color:"green",variant:"flat",onClick:f[0]||(f[0]=S=>g.value=!0)},{default:t(()=>[v(" + "+c("add"))]),_:1}),e(A,{modelValue:g.value,"onUpdate:modelValue":f[3]||(f[3]=S=>g.value=S),"max-width":"600"},{default:t(()=>[e(q,{class:"pa-4"},{default:t(()=>[e(h,{class:"px-2"},{default:t(()=>[v(c("addTeacher"))]),_:1}),e(F,null,{default:t(()=>[x(r)?(i(),k(T,{key:0,color:"primary",indeterminate:""})):(i(),k(C,{key:1,onSubmit:Y(n,["prevent"])},{default:t(()=>[x(b)?(i(),k(V,{key:0,modelValue:p.value,"onUpdate:modelValue":f[1]||(f[1]=S=>p.value=S),items:x(b),"item-title":"name","item-value":"id",label:"Select Teacher",outlined:"",required:""},null,8,["modelValue","items"])):M("",!0)]),_:1}))]),_:1}),e(I,null,{default:t(()=>[e(_,{color:"red darken-1",variant:"text",onClick:f[2]||(f[2]=S=>g.value=!1)},{default:t(()=>[v(c("cancel"))]),_:1}),e(_,{loading:o.value,color:"green",variant:"flat",disabled:p.value==null||o.value,onClick:n},{default:t(()=>[v(c("add"))]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}}),ie=O(de,[["__scopeId","data-v-e0b2a11d"]]),ce=D({__name:"RemoveTeacherFormDialog",props:{id:{}},setup(s){const m=B(),y=s,g=K(()=>m.params.id.toString()),o=w(!1),l=w(!1),p=Q();async function b(){l.value=!0;try{await U.removeTeacherFromClass(y.id.toString(),g.value),p.invalidateQueries({queryKey:["class"]}),o.value=!1}catch(r){alert(`failedToDeleteClass: ${r}`)}finally{l.value=!1}}return(r,n)=>{const u=a("v-btn"),f=a("v-card-title"),_=a("v-card-text"),h=a("v-card"),T=a("v-card-actions"),V=a("v-dialog");return i(),$(P,null,[e(u,{"prepend-icon":"mdi-delete",variant:"plain",loading:l.value,disabled:l.value,onClick:n[0]||(n[0]=()=>{o.value=!0})},null,8,["loading","disabled"]),e(V,{modelValue:o.value,"onUpdate:modelValue":n[3]||(n[3]=C=>o.value=C),"max-width":"600"},{default:t(()=>[e(h,{class:"pa-4"},{default:t(()=>[e(f,{class:"px-2"},{default:t(()=>[v(c("removeTeacher")+"?")]),_:1}),e(h,{class:"ma-2",color:"yellow",variant:"tonal"},{default:t(()=>[e(_,{class:"text-medium-emphasis text-lg"},{default:t(()=>[v(c("warningAllHisProgressDataWillBeRemovedPermanently"))]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(u,{color:"green darken-1",variant:"text",onClick:n[1]||(n[1]=C=>o.value=!1)},{default:t(()=>[v(c("cancel"))]),_:1}),e(u,{loading:l.value,color:"red",variant:"flat",disabled:l.value,onClick:n[2]||(n[2]=C=>b())},{default:t(()=>[v(c("remove"))]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),ue=D({__name:"RemoveStudentFormDialog",props:{id:{}},setup(s){const m=B(),y=s,g=K(()=>m.params.id.toString()),o=w(!1),l=w(!1),p=Q();async function b(){l.value=!0;try{await ne.removeStudentFromClass(y.id.toString(),g.value),p.invalidateQueries({queryKey:["class"]}),o.value=!1}catch(r){alert(`failedToDeleteClass: ${r}`)}finally{l.value=!1}}return(r,n)=>{const u=a("v-btn"),f=a("v-card-title"),_=a("v-card-text"),h=a("v-card"),T=a("v-card-actions"),V=a("v-dialog");return i(),$(P,null,[e(u,{"prepend-icon":"mdi-delete",variant:"plain",loading:l.value,disabled:l.value,onClick:n[0]||(n[0]=()=>{o.value=!0})},null,8,["loading","disabled"]),e(V,{modelValue:o.value,"onUpdate:modelValue":n[3]||(n[3]=C=>o.value=C),"max-width":"600"},{default:t(()=>[e(h,{class:"pa-4"},{default:t(()=>[e(f,{class:"px-2"},{default:t(()=>[v(c("removeStudent")+"?")]),_:1}),e(h,{class:"ma-2",color:"yellow",variant:"tonal"},{default:t(()=>[e(_,{class:"text-medium-emphasis text-lg"},{default:t(()=>[v(c("warningAllHisProgressDataWillBeRemovedPermanently"))]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(u,{color:"green darken-1",variant:"text",onClick:n[1]||(n[1]=C=>o.value=!1)},{default:t(()=>[v(c("cancel"))]),_:1}),e(u,{loading:l.value,color:"red",variant:"flat",disabled:l.value,onClick:n[2]||(n[2]=C=>b())},{default:t(()=>[v(c("remove"))]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),E=s=>(te("data-v-63e8e9c9"),s=s(),ae(),s),_e={key:1},ve={key:2},me=E(()=>R("br",null,null,-1)),pe=E(()=>R("br",null,null,-1)),fe=E(()=>R("div",{class:"text-body-1 mr-4"},"375xp",-1)),ge=D({__name:"ClassContentView",setup(s){const m=B(),y=le(),{classes:g}=Z(y),o=w(m.params.id.toString()),l=w(null),{isPending:p,isError:b,data:r,error:n,refetch:u}=j({queryKey:["class",o.value],queryFn:async()=>{const _=await oe.getClassByID(o.value);return l.value=_,_}});G(()=>m.params.id,_=>{o.value=_.toString(),u()});function f(_){ee.replace({path:`/dashboard/class/${_}`})}return(_,h)=>{const T=a("v-select"),V=a("v-skeleton-loader"),C=a("v-divider"),F=a("v-avatar"),I=a("v-list-item-title"),q=a("v-list-item"),A=a("v-card"),S=a("v-btn"),z=a("RouterLink"),J=a("v-col");return i(),k(J,{style:{"min-width":"300px","max-width":"100%"}},{default:t(()=>{var N;return[e(T,{modelValue:l.value,"onUpdate:modelValue":[h[0]||(h[0]=d=>l.value=d),f],class:"d-inline-flex",label:"Class",items:x(g),"item-title":"name","item-value":"id"},null,8,["modelValue","items"]),x(p)?(i(),k(V,{key:0,type:"list-item-two-line"})):x(b)?(i(),$("div",_e,c((N=x(n))==null?void 0:N.message),1)):(i(),$("div",ve,[me,e(A,{title:"Teachers",class:"pa-4 border-sm rounded-lg",variant:"flat"},{append:t(()=>[e(ie)]),default:t(()=>[e(C,{class:"border-opacity-100 my-2",color:"error"}),(i(!0),$(P,null,W(x(r).teachers,d=>(i(),k(q,{key:d.id,color:"primary",rounded:"shaped"},{prepend:t(()=>[e(F,{color:"grey",image:d.image||""},null,8,["image"])]),append:t(()=>[d.id!=x(r).main_teacher_id?(i(),k(ce,{key:0,id:d.id},null,8,["id"])):M("",!0)]),default:t(()=>[e(I,{textContent:c(d.name)},null,8,["textContent"])]),_:2},1024))),128))]),_:1}),pe,e(A,{title:"Students",class:"pa-4 border-sm rounded-lg",variant:"flat"},{append:t(()=>{var d,H;return[e(z,{to:{name:"students-progress-view",params:{id:(d=x(r))==null?void 0:d.id}}},{default:t(()=>[e(S,{class:"self-end mr-4",variant:"flat",color:"warning","prepend-icon":"mdi-stairs"},{default:t(()=>[v("Progress")]),_:1})]),_:1},8,["to"]),e(re,{code:((H=l.value)==null?void 0:H.code)??""},null,8,["code"])]}),default:t(()=>[e(C,{class:"border-opacity-100 my-2",color:"error"}),(i(!0),$(P,null,W(x(r).students,d=>(i(),k(q,{key:d.id,color:"primary",rounded:"shaped"},{prepend:t(()=>[e(F,{color:"grey",image:d.image||""},null,8,["image"])]),append:t(()=>[fe,e(S,{to:{name:"student-profile-view",params:{id:d.id}},class:"mx-4",variant:"tonal","append-icon":"mdi-page-next-outline"},{default:t(()=>[v("profile")]),_:2},1032,["to"]),e(ue,{id:d.id},null,8,["id"])]),default:t(()=>[e(I,{textContent:c(d.name)},null,8,["textContent"])]),_:2},1024))),128))]),_:1})]))]}),_:1})}}}),Se=O(ge,[["__scopeId","data-v-63e8e9c9"]]);export{Se as default};