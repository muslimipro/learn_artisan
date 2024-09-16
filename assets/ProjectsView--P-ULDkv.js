import{u as I}from"./useQuery-DtKPxzqf.js";import{d as S,r as p,b as _,j as s,o as t,c as o,t as V,k as P,f,e as m,F as b,h as q,l as h,u as $,n as E,w as N,a as v}from"./index-CxZPMcty.js";import{P as D}from"./ProjectService-BcevoZRK.js";import{P as K}from"./ProjectCard-Dnk4N6aM.js";import{S as B}from"./SkillService-C9TIj3MB.js";import{C as A}from"./CourseCard-CGII7pw7.js";import"./api-client-Dm1tdKJi.js";import"./base-url-qR72hEjy.js";import"./yellow_star-CHjFodN-.js";import"./course-content-store-Cz2nHbMc.js";const G={key:0},L={key:1},M={key:2,class:"flex flex-wrap px-8 gap-8",style:{width:"100%"}},O=S({__name:"IntroProjectsView.",props:{course:{}},setup(j){const e=j.course,r=p([]),n=p({}),{isPending:u,isError:y,data:g,error:x}=I({queryKey:[`skill/intro/${e.id}`],queryFn:async()=>{const a=await B.getCourseInfoByID(e.id.toString());return r.value=a.modules[0].topics.map(i=>({id:e.id,name:i.name,description:"",cover_image:e.cover_image,prereqs:[],status:e.status,total_steps_count:e.total_steps_count,completed_steps_count:e.completed_steps_count,accessed_steps_count:e.accessed_steps_count,last_accessed_topic:e.last_accessed_topic})),a},refetchOnWindowFocus:!1});return(a,i)=>{const k=_("v-slide-group-item"),d=_("v-slide-group"),C=_("v-col"),w=_("v-container");return s(u)?(t(),o("div",G," Pending... ")):s(y)?(t(),o("div",L,V(s(x)),1)):s(g)?(t(),o("div",M,[r.value.length>0?(t(),P(w,{key:0,fluid:"",class:"pa-0 px-5"},{default:f(()=>[m(C,{style:{"min-width":"100px","max-width":"100%"},class:"px-0 py-0"},{default:f(()=>[m(d,{modelValue:n.value[0],"onUpdate:modelValue":i[0]||(i[0]=c=>n.value[0]=c),mobile:"","center-active":"","show-arrows":""},{default:f(()=>[(t(!0),o(b,null,q(r.value,(c,F)=>(t(),P(k,{key:c.id},{default:f(()=>[m(A,{class:"mx-4 my-2",course:c,introIndex:F},null,8,["course","introIndex"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):h("",!0)])):h("",!0)}}}),Q={key:0},R={key:1},U={key:2,class:"flex-col w-full"},W=v("div",{class:"text-h5 ml-8 mt-8 pb-4 pl-4"}," Introduction to Raspberry Pi Pico ",-1),z=v("br",null,null,-1),H=v("div",{class:"text-h5 ml-8 mt-8 pb-4 pl-4"}," Projects ",-1),J={class:"flex flex-wrap justify-center px-8 gap-8"},T=v("div",{class:"h-8"},null,-1),ae=S({__name:"ProjectsView",async setup(j){let l,e;const{locale:r}=$(),n=p(r.value),u=p([]),y=p({});u.value=([l,e]=E(()=>B.getSkills(n.value)),l=await l,e(),l),y.value=u.value[0].courses.find(d=>d.name=="Micropython")??{};const{isPending:g,isError:x,data:a,error:i,refetch:k}=I({queryKey:["projects"+n.value],queryFn:async()=>await D.getProjects(n.value)});return N(()=>r.value,()=>{n.value=r.value,k()},{immediate:!0}),(d,C)=>{const w=_("v-divider");return s(g)?(t(),o("div",Q," Pending... ")):s(x)?(t(),o("div",R,V(s(i)),1)):s(a)?(t(),o("div",U,[W,m(O,{course:y.value},null,8,["course"]),z,u.value.length>0?(t(),P(w,{key:0,thickness:2,class:"border-opacity-100"})):h("",!0),H,v("div",J,[(t(!0),o(b,null,q(s(a),c=>(t(),o("div",{key:c.id},[m(K,{project:c},null,8,["project"])]))),128))]),T])):h("",!0)}}});export{ae as default};