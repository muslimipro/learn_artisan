import{u as g,S as B}from"./course-content-store-h16eI1VJ.js";import{u as V}from"./useQuery--RUfbAsG.js";import{o as a,c as i,a as f,d as b,v as q,b as C,F as N,i as R,u as e,s as n,w as m,f as _,q as u,m as S,p as T,r as z,z as D,t as E,e as x,y as F}from"./index-CAF4wdrc.js";import"./api-client-CTLfGJbq.js";import"./base-url-qR72hEjy.js";function j(k,r){return a(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"fill-rule":"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}const L={class:"flex sticky bottom-0 self-start bg-white border p-2 rounded-lg my-4 mx-8"},P=["onClick"],K=b({__name:"StepNavigationBar",setup(k){const r=g(),{activeStepIndex:s,currentSteps:o}=q(r),{changeStep:l}=r;return(w,y)=>{const c=C("v-icon");return a(),i("div",L,[(a(!0),i(N,null,R(e(o),(h,t)=>(a(),i("div",{key:h.id,class:"flex items-center"},[f("button",{class:u([e(s)==t?"bg-black":"bg-zinc-200","flex rounded-full w-8 h-8 mx-1 items-center justify-center"]),onClick:v=>e(l)(t)},[e(o)[t].category=="code"?(a(),n(c,{key:0,class:u(["h-6 w-6",e(s)==t?"text-white":"text-black"]),"aria-hidden":"true"},{default:m(()=>[_(" mdi-xml ")]),_:2},1032,["class"])):e(o)[t].category=="scq"?(a(),n(c,{key:1,class:u(["h-6 w-6",e(s)==t?"text-white":"text-black"]),"aria-hidden":"true"},{default:m(()=>[_(" mdi-checkbox-marked-circle-outline ")]),_:2},1032,["class"])):e(o)[t].category=="mcq"?(a(),n(c,{key:2,class:u(["h-6 w-6",e(s)==t?"text-white":"text-black"]),"aria-hidden":"true"},{default:m(()=>[_(" mdi-checkbox-multiple-marked-outline ")]),_:2},1032,["class"])):e(o)[t].category=="video"?(a(),n(c,{key:3,class:u(["h-6 w-6",e(s)==t?"text-white":"text-black"]),"aria-hidden":"true"},{default:m(()=>[_(" mdi-play-circle-outline ")]),_:2},1032,["class"])):(a(),n(c,{key:4,class:u(["h-6 w-6",e(s)==t?"text-white":"text-black"]),"aria-hidden":"true"},{default:m(()=>[_(" mdi-text-box-outline ")]),_:2},1032,["class"]))],10,P),t<e(o).length-1?(a(),n(e(j),{key:0,class:"h-5 w-5","aria-hidden":"true"})):S("",!0)]))),128))])}}}),M={key:0,class:"p-8"},Q={key:1},Z={key:2,class:"flex h-full w-full"},A={class:"flex-1 flex flex-col justify-between items-center pt-8"},W=b({__name:"CourseTopicView",setup(k){const r=T(),s=g(),{setSteps:o}=s,l=z(""),{isPending:w,isError:y,data:c,error:h,refetch:t}=V({queryKey:["topic",l],queryFn:v});async function v(){const d=await B.getTopicByID(l.value);return d.steps.forEach(p=>{console.log(`step.id: ${p.id}, ${p.order}`)}),o(d.steps),F.replace({path:`/course/${r.params.id}/topic/${l.value}/step/${d.steps[0].id}`}),d}return D(()=>r.params.topic_id,()=>{l.value=r.params.topic_id.toString(),t()},{immediate:!0}),(d,p)=>{const $=C("RouterView");return e(w)?(a(),i("div",M," Pending... ")):e(y)?(a(),i("div",Q,E(e(h)),1)):e(c)?(a(),i("div",Z,[f("div",A,[x($),x(K)])])):S("",!0)}}});export{W as default};