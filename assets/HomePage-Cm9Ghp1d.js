import{_ as A}from"./logo-black-BhklpmFU.js";import{_ as L,P as D}from"./ProfileService-5fUymdhL.js";import{o as n,c as u,a as e,d as $,r as y,u as V,w as B,b as E,e as z,f as h,g as j,h as s,t as _,n as F,i as H,F as R,j as I,p as M,k as O,_ as P,l as N,m as t,q as d,s as m,v as Z}from"./index-BysqhvNz.js";import{u as q}from"./useQuery-DiqQkp-A.js";import"./api-client-CiB1lw-F.js";import"./base-url-qR72hEjy.js";function T(l,o){return n(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"})])}function U(l,o){return n(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}const G=l=>(M("data-v-3c5780cc"),l=l(),O(),l),K={class:"selected-flag"},Q=G(()=>e("span",{class:"mdi mdi-chevron-down"},null,-1)),J=[Q],W=["onClick"],X=$({__name:"LocaleSwitcher",setup(l){const o=y([{locale:"en",label:"Eng"},{locale:"ru",label:"Рус"},{locale:"kk",label:"Қаз"}]),{locale:p}=V(),b=o.value.find(i=>i.locale===p.value)||o.value[0],g=y(b),r=y(!1),c=y(null),f=()=>{r.value=!r.value},a=i=>{g.value=i,p.value=i.locale,r.value=!1},v=i=>{c.value&&!c.value.contains(i.target)&&(r.value=!1)};return B(p,i=>{const k=o.value.find(x=>x.locale===i)||o.value[0];g.value=k}),E(()=>{document.addEventListener("mousedown",v)}),z(()=>{document.removeEventListener("mousedown",v)}),(i,k)=>{const x=h("v-btn");return n(),j(x,{ref_key:"dropdownRef",ref:c,variant:"flat",class:"language-selector px-0",onClick:f},{default:s(()=>[e("div",K,[e("span",null,_(g.value.label),1),e("span",{class:"dropdown-icon",style:F({transform:r.value?"rotate(180deg)":"rotate(0deg)"})},J,4)]),e("div",{class:I(["dropdown-content",{show:r.value}])},[(n(!0),u(R,null,H(o.value,(w,S)=>(n(),u("div",{key:S,onClick:ze=>a(w)},[e("span",null,_(w.label),1)],8,W))),128))],2)]),_:1},512)}}}),C=P(X,[["__scopeId","data-v-3c5780cc"]]),Y={class:"bg-white"},ee={class:"mx-auto flex items-center justify-between p-0 px-8 border-b","aria-label":"Global"},te={class:"flex lg:flex-1"},se=e("span",{class:"sr-only"},"Artisan",-1),oe=e("img",{class:"h-8 pr-4",alt:"Artisan Logo",src:A},null,-1),ae=e("span",{class:"text-2xl font-semibold whitespace-nowrap"}," Artisan ",-1),ne={class:"flex lg:hidden"},le=e("span",{class:"sr-only"},"Open main menu",-1),ie={class:"hidden lg:flex"},re={class:"hidden lg:flex lg:flex-1 lg:justify-end items-center"},ce={key:0},de={key:1},_e={key:0,class:"overflow-hidden w-10 h-10 rounded-full"},ue=e("div",{class:"fixed inset-0 z-10"},null,-1),pe={class:"flex items-center justify-between"},fe=e("span",{class:"sr-only"},"Artisan",-1),ve=e("img",{class:"h-8 pr-4",alt:"Artisan Logo",src:A},null,-1),me=e("span",{class:"text-2xl font-semibold whitespace-nowrap"}," Artisan ",-1),he=e("span",{class:"sr-only"},"Close menu",-1),ge={class:"mt-6 flow-root"},be={class:"-my-6 divide-y divide-gray-500/10"},xe={class:"py-6"},we={class:"py-6"},ye=$({__name:"Header",setup(l){const o=N(),p=y(!1),{isPending:b,isError:g,data:r}=q({queryKey:["user/profile"],queryFn:D.getUserProfile});return(c,f)=>{const a=h("RouterLink"),v=h("v-btn"),i=h("v-img"),k=h("DialogPanel"),x=h("Dialog");return n(),u("header",Y,[e("nav",ee,[e("div",te,[t(a,{to:"/",class:"flex box-border border-white py-4 hover:border-b-8 h-16"},{default:s(()=>[se,oe,ae]),_:1})]),e("div",ne,[t(C),t(v,{variant:"flat",type:"button",onClick:f[0]||(f[0]=w=>p.value=!0)},{default:s(()=>[le,t(d(T),{class:"size-6","aria-hidden":"true"})]),_:1})]),e("div",ie,[t(a,{to:"/projects"},{default:s(()=>[t(v,{variant:"flat",active:d(o).name=="projects-view"},{default:s(()=>[m(_(c.$t("projects")),1)]),_:1},8,["active"])]),_:1}),t(a,{to:"/skills"},{default:s(()=>[t(v,{variant:"flat",active:d(o).name=="skills-view"},{default:s(()=>[m(_(c.$t("skills")),1)]),_:1},8,["active"])]),_:1}),t(a,{to:"/tokens"},{default:s(()=>[t(v,{variant:"flat",active:d(o).name=="tokens-view"},{default:s(()=>[m(_(c.$t("tokens")),1)]),_:1},8,["active"])]),_:1})]),e("div",re,[t(C),t(a,{to:"/profile"},{default:s(()=>[t(v,{icon:"",variant:"flat",class:"pa-0"},{default:s(()=>[d(b)||d(g)?(n(),u("div",ce,[t(L)])):d(r)?(n(),u("div",de,[d(r).image!=null?(n(),u("div",_e,[t(i,{src:d(r).image,cover:""},null,8,["src"])])):(n(),j(L,{key:1}))])):Z("",!0)]),_:1})]),_:1})])]),t(x,{class:"lg:hidden",onClose:f[2]||(f[2]=w=>p.value=!1),open:p.value},{default:s(()=>[ue,t(k,{class:"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-8 py-0 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:s(()=>[e("div",pe,[t(a,{to:"/",class:"flex box-border border-white py-4 hover:border-b-8 h-16"},{default:s(()=>[fe,ve,me]),_:1}),e("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-black",onClick:f[1]||(f[1]=w=>p.value=!1)},[he,t(d(U),{class:"h-6 w-6","aria-hidden":"true"})])]),e("div",ge,[e("div",be,[e("div",xe,[t(a,{to:"/projects",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:s(()=>[m(_(c.$t("projects")),1)]),_:1}),t(a,{to:"/skills",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:s(()=>[m(_(c.$t("skills")),1)]),_:1}),t(a,{to:"/tokens",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:s(()=>[m(_(c.$t("tokens")),1)]),_:1})]),e("div",we,[t(a,{to:"/profile",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:s(()=>[m(" Profile")]),_:1})])])])]),_:1})]),_:1},8,["open"])])}}}),ke="/assets/logo-Ds3l-s0O.svg",$e={},Le={class:"bg-black shadow absolute bottom-0 w-full"},Ce={class:"w-full mx-auto px-8 py-4"},Ae={class:"sm:flex sm:items-center sm:justify-between"},je={class:"flex items-center"},Re=e("img",{class:"h-8 pr-2",alt:"Artisan Logo",src:ke},null,-1),Pe={class:"text-white text-l"},Se=e("strong",null,"Artisan",-1),De={class:"flex items-center text-white justify-end"},Ve={class:"text-white text-sm"};function Be(l,o){return n(),u("footer",Le,[e("div",Ce,[e("div",Ae,[e("div",je,[Re,e("span",Pe,[Se,m(" - "+_(l.$t("artOfEngineeringThinking")),1)])]),e("div",De,[e("span",Ve," © 2023 Artisan. "+_(l.$t("allRightsReserved")),1)])])])])}const Ee=P($e,[["render",Be]]),Ze=$({__name:"HomePage",setup(l){return(o,p)=>{const b=h("RouterView"),g=h("v-main");return n(),u(R,null,[t(ye),t(g,{class:"flex flex-1 pb-16 bg-grey-lighten-3"},{default:s(()=>[t(b)]),_:1}),t(Ee)],64)}}});export{Ze as default};