import{_ as P,P as A}from"./ProfileService-DQLbc6Sc.js";import{o as i,c as u,a as t,d as w,r as y,u as V,b as q,w as E,e as f,f as e,g as s,m as H,h as d,t as _,F as R,i as S,j as Z,k as N,l as n,n as C,p as j,_ as O}from"./index-BgZM2aQb.js";import{u as B}from"./useQuery-3AKXZIqu.js";import"./api-client-D6HZLF2T.js";import"./base-url-qR72hEjy.js";const F="/assets/logo-black-BZde7Anq.svg";function z(h,o){return i(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"})])}function I(h,o){return i(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}const K={class:"text-center"},D=w({__name:"LocaleSwitcher",setup(h){const o=y([{locale:"en",label:"Eng"},{locale:"ru",label:"Рус"},{locale:"kk",label:"Қаз"}]),{locale:m}=V(),v=y(o.value[0]),b=r=>{v.value=r,m.value=r.locale,localStorage.setItem("selectedLanguage",r.locale)};return q(()=>{const r=localStorage.getItem("selectedLanguage"),g=o.value.find(a=>a.locale===r)||o.value[0];v.value=g,m.value=g.locale}),E(m,r=>{const g=o.value.find(a=>a.locale===r)||o.value[0];v.value=g,Z.replace({path:"/"})}),(r,g)=>{const a=f("v-btn"),p=f("v-list"),l=f("v-menu");return i(),u("div",K,[e(l,{location:"bottom"},{activator:s(({props:c})=>[e(a,H({variant:"text"},c),{default:s(()=>[d(_(v.value.label),1)]),_:2},1040)]),default:s(()=>[e(p,null,{default:s(()=>[(i(!0),u(R,null,S(o.value,(c,x)=>(i(),u("div",{key:x},[e(a,{onClick:k=>b(c),variant:"text",color:v.value.label==c.label?"primary":""},{default:s(()=>[d(_(c.label),1)]),_:2},1032,["onClick","color"])]))),128))]),_:1})]),_:1})])}}}),T={class:"bg-white"},G={class:"mx-auto flex items-center justify-between p-0 px-8 border-b","aria-label":"Global"},Q={class:"flex lg:flex-1"},U=t("span",{class:"sr-only"},"Artisan",-1),J=t("img",{class:"h-8 pr-4",alt:"Artisan Logo",src:F},null,-1),W=t("span",{class:"text-2xl font-semibold whitespace-nowrap"}," Artisan ",-1),X={class:"flex lg:hidden"},Y=t("span",{class:"sr-only"},"Open main menu",-1),ee={class:"hidden lg:flex"},te={class:"hidden lg:flex lg:flex-1 lg:justify-end items-center"},se={key:0},oe={key:1},ae={key:0,class:"overflow-hidden w-10 h-10 rounded-full"},le=t("div",{class:"fixed inset-0 z-10"},null,-1),ne={class:"flex items-center justify-between"},ie=t("span",{class:"sr-only"},"Artisan",-1),re=t("img",{class:"h-8 pr-4",alt:"Artisan Logo",src:F},null,-1),ce=t("span",{class:"text-2xl font-semibold whitespace-nowrap"}," Artisan ",-1),de=t("span",{class:"sr-only"},"Close menu",-1),_e={class:"mt-6 flow-root"},ue={class:"-my-6 divide-y divide-gray-500/10"},fe={class:"py-6"},me={class:"py-6"},ve=w({__name:"Header",setup(h){const o=N(),m=y(!1),{isPending:v,isError:b,data:r}=B({queryKey:["user/profile"],queryFn:async()=>await A.getUserProfile()}),{data:g}=B({queryKey:["user/me"],queryFn:async()=>await A.getMe()});return(a,p)=>{var $;const l=f("RouterLink"),c=f("v-btn"),x=f("v-img"),k=f("DialogPanel"),M=f("Dialog");return i(),u("header",T,[t("nav",G,[t("div",Q,[e(l,{to:"/",class:"flex box-border border-white py-4 hover:border-b-8 h-16"},{default:s(()=>[U,J,W]),_:1})]),t("div",X,[e(D),e(c,{variant:"flat",type:"button",onClick:p[0]||(p[0]=L=>m.value=!0)},{default:s(()=>[Y,e(n(z),{class:"size-6","aria-hidden":"true"})]),_:1})]),t("div",ee,[e(l,{to:"/projects"},{default:s(()=>[e(c,{variant:"flat",active:n(o).name=="projects-view"},{default:s(()=>[d(_(a.$t("projects")),1)]),_:1},8,["active"])]),_:1}),e(l,{to:"/skills"},{default:s(()=>[e(c,{variant:"flat",active:n(o).name=="skills-view"},{default:s(()=>[d(_(a.$t("skills")),1)]),_:1},8,["active"])]),_:1}),e(l,{to:"/tokens"},{default:s(()=>[e(c,{variant:"flat",active:n(o).name=="tokens-view"},{default:s(()=>[d(_(a.$t("modules")),1)]),_:1},8,["active"])]),_:1})]),t("div",te,[(($=n(g))==null?void 0:$.role)=="teacher"?(i(),C(l,{key:0,to:n(o).path.includes("dashboard")?"":"/dashboard"},{default:s(()=>[e(c,{variant:"flat",active:n(o).path.includes("dashboard")},{default:s(()=>[d(_(a.$t("teacherDashboard")),1)]),_:1},8,["active"])]),_:1},8,["to"])):j("",!0),e(D),e(l,{to:"/profile"},{default:s(()=>[e(c,{icon:"",variant:"flat",class:"pa-0"},{default:s(()=>[n(v)||n(b)?(i(),u("div",se,[e(P)])):n(r)?(i(),u("div",oe,[n(r).image!=null?(i(),u("div",ae,[e(x,{src:n(r).image,cover:""},null,8,["src"])])):(i(),C(P,{key:1}))])):j("",!0)]),_:1})]),_:1})])]),e(M,{class:"lg:hidden",onClose:p[2]||(p[2]=L=>m.value=!1),open:m.value},{default:s(()=>[le,e(k,{class:"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-8 py-0 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:s(()=>[t("div",ne,[e(l,{to:"/",class:"flex box-border border-white py-4 hover:border-b-8 h-16"},{default:s(()=>[ie,re,ce]),_:1}),t("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-black",onClick:p[1]||(p[1]=L=>m.value=!1)},[de,e(n(I),{class:"h-6 w-6","aria-hidden":"true"})])]),t("div",_e,[t("div",ue,[t("div",fe,[e(l,{to:"/projects",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:s(()=>[d(_(a.$t("projects")),1)]),_:1}),e(l,{to:"/skills",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:s(()=>[d(_(a.$t("skills")),1)]),_:1}),e(l,{to:"/tokens",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:s(()=>[d(_(a.$t("modules")),1)]),_:1})]),t("div",me,[e(l,{to:"/profile",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:s(()=>[d(" Profile")]),_:1})])])])]),_:1})]),_:1},8,["open"])])}}}),pe="/assets/logo-Ds3l-s0O.svg",he={},ge={class:"bg-black shadow absolute bottom-0 w-full"},be={class:"w-full mx-auto px-8 py-4"},xe={class:"sm:flex sm:items-center sm:justify-between"},ye={class:"flex items-center"},we=t("img",{class:"h-8 pr-2",alt:"Artisan Logo",src:pe},null,-1),ke={class:"text-white text-l"},$e=t("strong",null,"Artisan",-1),Le={class:"flex items-center text-white justify-end"},Pe={class:"text-white text-sm"};function Ae(h,o){return i(),u("footer",ge,[t("div",be,[t("div",xe,[t("div",ye,[we,t("span",ke,[$e,d(" - "+_(h.$t("artOfEngineeringThinking")),1)])]),t("div",Le,[t("span",Pe," © 2023 Artisan. "+_(h.$t("allRightsReserved")),1)])])])])}const Ce=O(he,[["render",Ae]]),Me=w({__name:"HomePage",setup(h){return(o,m)=>{const v=f("RouterView"),b=f("v-main");return i(),u(R,null,[e(ve),e(b,{class:"flex flex-1 pb-16 bg-grey-lighten-3"},{default:s(()=>[e(v)]),_:1}),e(Ce)],64)}}});export{Me as default};