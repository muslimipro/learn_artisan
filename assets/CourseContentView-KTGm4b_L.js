import{u as A}from"./useQuery-DQeQOh-z.js";import{d as V,y as D,j as F,c as o,a as s,t as k,f as e,e as $,F as q,n as B,o as r,z as M,l as x,u as I,A as T,i as R,b as j}from"./index-BwA11LRs.js";import{S as O}from"./SkillService-nPFNUwRV.js";import{Y as E}from"./yellow_star-CHjFodN-.js";import{u as z}from"./course-content-store-BDGllAoI.js";import{_ as P}from"./RtzeroButton.vue_vue_type_script_setup_true_lang-6UkPuohH.js";import"./api-client-COTgTXz3.js";import"./base-url-qR72hEjy.js";const Y={class:"flex-none flex flex-col w-80 px-8 py-8 bg-zinc-50"},K={class:"flex-1 basis-1 flex-col text-black gap-1 overflow-y-auto"},L={class:"flex text-black w-full text-xl text-ellipsis pb-4 border-b"},Q={class:"pr-2"},W=["src"],G=s("div",{class:"py-2"},null,-1),H=["onClick"],J={class:"py-2 pr-2 bg-transparent text-black truncate text-ellipsis"},U=s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"},null,-1),X=[U],Z=["onClick"],ee={class:"text-left truncate text-ellipsis"},te=V({__name:"CourseNavigationBar",props:{courseInfo:{}},setup(S){const a=S.courseInfo,h=z(),{openedModule:c,activeModuleIndex:f,activeTopicIndex:d}=D(h),{resizeModules:w,toggleModule:m,changeTopic:b}=h;return F(()=>{w(a.modules.length)}),(l,N)=>(r(),o("div",Y,[s("div",K,[s("div",L,[s("h1",Q,k(e(a).name),1),s("img",{src:e(E)},null,8,W)]),$(P,{isNeeded:e(a).id==14},null,8,["isNeeded"]),G,(r(!0),o(q,null,B(e(a).modules,(u,n)=>(r(),o("h2",{key:u.name},[s("button",{type:"button",onClick:p=>e(m)(n),class:"flex justify-between items-center w-full"},[s("span",J,k(u.name),1),(r(),o("svg",{class:M([e(c)[n]?"":"rotate-180","w-3 h-3 shrink-0"]),fill:"none",viewBox:"0 0 10 6"},X,2))],8,H),s("div",null,[(r(!0),o(q,null,B(u.topics,(p,_)=>(r(),o("button",{key:p.id,class:M(["relative block w-full box-border h-8 px-4 py-1 border-l-2 hover:text-gray-800",[e(f)==n&&e(d)==_?"text-blue-600 border-black":"text-gray-500 border-gray-200",e(c)[n]||e(f)==n&&e(d)==_?"":"hidden"]]),onClick:t=>e(b)(n,_)},[s("p",ee,k(p.name),1)],10,Z))),128))])]))),128))])]))}}),se={class:"flex flex-col w-full bg-white"},oe={key:0},re={key:1},ne={key:2,class:"flex h-full"},he=V({__name:"CourseContentView",setup(S){const g=z(),{introIndex:a}=D(g),{setCourseInfo:h,setActives:c,setDashboardIDs:f}=g,d=x(()=>l.query.dashboard_topic_id||null),w=x(()=>parseInt(d.value??"-1")),m=x(()=>l.query.dashboard_step_order||null),b=x(()=>parseInt(m.value??"-1")),l=I(),{isPending:N,isError:u,data:n,error:p}=A({queryKey:[`skill/${l.params.id}`,l.query.dashboard_step_id,l.query.dashboard_step_order],queryFn:async()=>{const t=await O.getCourseInfoByID(l.params.id.toString());return f(l.query.dashboard_step_id||null,b.value),h(t),_(t),t},refetchOnWindowFocus:!1});async function _(t){var v;const C=d.value!=null?w.value:t.last_accessed_topic.id;for(let i=0;i<t.modules.length;i++){if(a.value!=null){c(i,a.value,0),T.replace({path:`/course/${t.id}/topic/${t.modules[i].topics[a.value].id}`});return}for(let y=0;y<t.modules[i].topics.length;y++)if(C==t.modules[i].topics[y].id){c(i,y,(m.value!=null?b.value:((v=t.last_accessed_topic.last_accessed_step)==null?void 0:v.order)??1)-1),T.replace({path:`/course/${t.id}/topic/${C}`});return}}}return(t,C)=>{const v=j("RouterView");return r(),o("div",se,[e(N)?(r(),o("div",oe," Pending... ")):e(u)?(r(),o("div",re,k(e(p)),1)):e(n)?(r(),o("div",ne,[$(te,{"course-info":e(n)},null,8,["course-info"]),$(v)])):R("",!0)])}}});export{he as default};