import{u as S}from"./course-content-store-Crfeg03V.js";import{u as N}from"./useQuery-Co2W4cI_.js";import{S as R}from"./SkillService-PQL9Ex8e.js";import{o as r,c as n,a as y,d as $,K as B,f as z,F as T,i as j,q as e,g as d,h as _,s as p,j as u,v as V,l as D,r as E,w as F,t as P,m as C,J as K}from"./index-BsvzRqxu.js";import"./api-client-DWnZn6nH.js";import"./base-url-qR72hEjy.js";function L(b,i){return r(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[y("path",{"fill-rule":"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}const A={class:"flex sticky bottom-0 self-start bg-white border p-2 rounded-lg my-4 mx-8"},J=["onClick"],M=$({__name:"StepNavigationBar",setup(b){const i=S(),{activeStepIndex:a,currentSteps:c}=B(i),{changeStep:h}=i;function g(s){return s=="completed"?"bg-green":s=="attempted"?"bg-yellow":s=="accessed"?"bg-grey":"bg-zinc-200"}return(s,k)=>{const l=z("v-icon");return r(),n("div",A,[(r(!0),n(T,null,j(e(c),(m,t)=>(r(),n("div",{key:m.id,class:"flex items-center"},[y("button",{class:u([g(m.progress),"flex rounded-full w-8 h-8 mx-1 items-center justify-center"]),onClick:v=>e(h)(t)},[e(c)[t].category=="code"?(r(),d(l,{key:0,class:u(["h-6 w-6",e(a)==t?"text-white border-2 border-zinc-200 rounded-full pa-4":"text-black"]),"aria-hidden":"true"},{default:_(()=>[p(" mdi-xml ")]),_:2},1032,["class"])):e(c)[t].category=="scq"?(r(),d(l,{key:1,class:u(["h-6 w-6",e(a)==t?"text-white border-2 border-zinc-200 rounded-full pa-4":"text-black"]),"aria-hidden":"true"},{default:_(()=>[p(" mdi-checkbox-marked-circle-outline ")]),_:2},1032,["class"])):e(c)[t].category=="mcq"?(r(),d(l,{key:2,class:u(["h-6 w-6",e(a)==t?"text-white border-2 border-zinc-200 rounded-full pa-4":"text-black"]),"aria-hidden":"true"},{default:_(()=>[p(" mdi-checkbox-multiple-marked-outline ")]),_:2},1032,["class"])):e(c)[t].category=="video"?(r(),d(l,{key:3,class:u(["h-6 w-6",e(a)==t?"text-white border-2 border-zinc-200 rounded-full pa-4":"text-black"]),"aria-hidden":"true"},{default:_(()=>[p(" mdi-play-circle-outline ")]),_:2},1032,["class"])):(r(),d(l,{key:4,class:u(["h-6 w-6",e(a)==t?"text-white border-2 border-zinc-200 rounded-full pa-4":"text-black"]),"aria-hidden":"true"},{default:_(()=>[p(" mdi-text-box-outline ")]),_:2},1032,["class"]))],10,J),t<e(c).length-1?(r(),d(e(L),{key:0,class:"h-5 w-5","aria-hidden":"true"})):V("",!0)]))),128))])}}}),Q={key:0,class:"p-8"},Z={key:1},G={key:2,class:"flex h-full w-full"},H={class:"flex-1 flex flex-col justify-between items-center pt-8"},ee=$({__name:"CourseTopicView",setup(b){const i=D(),a=S(),{setSteps:c,setActives:h}=a,{currentStepProgress:g}=B(a),s=E(""),{isPending:k,isError:l,data:m,error:t,refetch:v}=N({queryKey:["topic",s],queryFn:q});async function q(){var f;const o=await R.getTopicByID(s.value);o.steps.forEach(x=>{console.log(`step.id: ${x.id}, ${x.progress}`)}),c(o.steps);const w=o.last_accessed_step!=null?o.last_accessed_step.id:o.steps[0].id;return K.replace({path:`/course/${i.params.id}/topic/${s.value}/step/${w}`}),h(null,null,(((f=o.last_accessed_step)==null?void 0:f.order)??1)-1),o}return F([()=>i.params.topic_id,()=>g.value],([o,w])=>{s.value=i.params.topic_id.toString(),v()},{immediate:!0}),(o,w)=>{const f=z("RouterView");return e(k)?(r(),n("div",Q," Pending... ")):e(l)?(r(),n("div",Z,P(e(t)),1)):e(m)?(r(),n("div",G,[y("div",H,[C(f),C(M)])])):V("",!0)}}});export{ee as default};