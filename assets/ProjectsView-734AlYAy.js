import{u as C}from"./useQuery-DYMwcXX6.js";import{d as F,u as B,r as k,q as I,w as N,e as m,l as a,o as t,c as r,t as x,a as c,f as v,g as _,h as b,n as j,F as E,i as K,p as w}from"./index-CNNxxnTr.js";import{P as O}from"./ProjectService-DWWcIxtY.js";import{P as Q}from"./ProjectCard-Bx86lN6L.js";import{S as D}from"./SkillService-B4l_RgKa.js";import{C as U}from"./CourseCard-BkSttmOZ.js";import"./api-client-CHsCwg_4.js";import"./base-url-qR72hEjy.js";import"./yellow_star-CHjFodN-.js";import"./course-content-store-BuE-Vvt3.js";const W={key:0},z={key:1},A={key:2},H={class:"d-flex align-center justify-between"},J={class:"text-h5 pb-4"},X={class:"d-flex align-center"},Y={class:"flex flex-wrap gap-8",style:{width:"100%"}},Z=F({__name:"IntroProjectsView.",props:{course:{}},setup(S){const{locale:i}=B(),n=k(i.value),f=S,e=I(()=>f.course),u=k([]),s=k({}),{isPending:y,isError:P,data:$,error:h,refetch:p}=C({queryKey:[`skill/intro/${e.value.id}`,n.value],queryFn:async()=>{const o=await D.getCourseInfoByID(e.value.id.toString());return u.value=o.modules[0].topics.map(l=>({id:e.value.id,name:l.name,description:"",cover_image:e.value.cover_image,prereqs:[],status:e.value.status,total_steps_count:e.value.total_steps_count,completed_steps_count:e.value.completed_steps_count,accessed_steps_count:e.value.accessed_steps_count,last_accessed_topic:e.value.last_accessed_topic})),o},refetchOnWindowFocus:!1});N([()=>i.value,()=>e.value.id],()=>{n.value=i.value,s.value[0]||(s.value[0]=0),p()},{immediate:!0});const V=o=>{s.value[o]>0&&s.value[o]--},g=(o,l)=>{s.value[o]<l-1&&s.value[o]++};return(o,l)=>{const q=m("v-icon"),L=m("v-slide-group-item"),R=m("v-slide-group"),T=m("v-col"),G=m("v-container");return a(y)?(t(),r("div",W," Pending... ")):a(P)?(t(),r("div",z,x(a(h)),1)):a($)?(t(),r("div",A,[c("div",H,[c("div",J,x(o.$t("introToRaspberryPiPico")),1),c("div",X,[v(q,{onClick:l[0]||(l[0]=d=>V(0)),class:"mr-2"},{default:_(()=>[b("mdi-chevron-left")]),_:1}),v(q,{onClick:l[1]||(l[1]=d=>g(0,u.value.length))},{default:_(()=>[b("mdi-chevron-right")]),_:1})])]),c("div",Y,[u.value.length>0?(t(),j(G,{key:0,fluid:"",class:"pa-0"},{default:_(()=>[v(T,{style:{"min-width":"100px","max-width":"100%"},class:"px-0 py-0"},{default:_(()=>[v(R,{modelValue:s.value[0],"onUpdate:modelValue":l[2]||(l[2]=d=>s.value[0]=d),mobile:"","center-active":""},{default:_(()=>[(t(!0),r(E,null,K(u.value,(d,M)=>(t(),j(L,{key:d.id},{default:_(()=>[v(U,{class:"mx-4 my-2",course:d,introIndex:M},null,8,["course","introIndex"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):w("",!0)])])):w("",!0)}}}),ee={key:0},te={key:1},se={key:2,class:"flex-col w-full px-16 py-8"},oe=c("br",null,null,-1),le={class:"text-h5 pb-4"},ne={class:"flex flex-wrap justify-center px-4 gap-8"},ae=c("div",{class:"h-8"},null,-1),ye=F({__name:"ProjectsView",setup(S){const{locale:i}=B(),n=k(i.value),{data:f,refetch:e}=C({queryKey:["skills",n.value],queryFn:async()=>await D.getSkills(n.value)}),{isPending:u,isError:s,data:y,error:P,refetch:$}=C({queryKey:["projects",n.value],queryFn:async()=>await O.getProjects(n.value)}),h=I(()=>f.value==null?null:f.value[0].courses.find(p=>p.name=="Micropython")??null);return N(()=>i.value,()=>{n.value=i.value,console.log(n.value),e(),$()},{immediate:!0}),(p,V)=>a(u)?(t(),r("div",ee," Pending... ")):a(s)?(t(),r("div",te,x(a(P)),1)):a(y)?(t(),r("div",se,[h.value!=null?(t(),j(Z,{key:0,course:h.value},null,8,["course"])):w("",!0),oe,c("div",le,x(p.$t("projects")),1),c("div",ne,[(t(!0),r(E,null,K(a(y),g=>(t(),r("div",{key:g.id},[v(Q,{project:g},null,8,["project"])]))),128))]),ae])):w("",!0)}});export{ye as default};