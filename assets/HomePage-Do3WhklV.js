import{_ as A}from"./AvatarPlaceholder.vue_vue_type_script_setup_true_lang-DqT-h7sm.js";import{_ as C}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-BT_DqjWZ.js";import{P}from"./ProfileService-BKm1NQj5.js";import{u as j}from"./useQuery-D3pHsC49.js";import{o as n,c as u,a as e,d as y,u as L,r as M,b as p,e as t,w as s,f as a,g as i,t as d,h as g,i as v,j as V,k as Z,n as q,F}from"./index-CmTIu2SI.js";import{_ as H}from"./logo-trY1JmHw.js";import"./api-client-_2bmHwbl.js";import"./base-url-qR72hEjy.js";const B="/assets/logo-black-BZde7Anq.svg";function N(b,o){return n(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"})])}function O(b,o){return n(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}const I={class:"bg-white"},K={class:"mx-auto flex items-center justify-between p-0 px-8 border-b","aria-label":"Global"},S={class:"flex lg:flex-1"},T=e("span",{class:"sr-only"},"Artisan",-1),G=e("img",{class:"h-8 pr-4",alt:"Artisan Logo",src:B},null,-1),Q=e("span",{class:"text-2xl font-semibold whitespace-nowrap"}," Artisan ",-1),U={class:"flex lg:hidden"},J=e("span",{class:"sr-only"},"Open main menu",-1),W={class:"hidden lg:flex"},X={class:"hidden lg:flex lg:flex-1 lg:justify-end items-center"},Y={key:0},ee={key:1},te={key:0,class:"overflow-hidden w-10 h-10 rounded-full"},se=e("div",{class:"fixed inset-0 z-10"},null,-1),oe={class:"flex items-center justify-between"},ae=e("span",{class:"sr-only"},"Artisan",-1),ne=e("img",{class:"h-8 pr-4",alt:"Artisan Logo",src:B},null,-1),le=e("span",{class:"text-2xl font-semibold whitespace-nowrap"}," Artisan ",-1),re=e("span",{class:"sr-only"},"Close menu",-1),ie={class:"mt-6 flow-root"},de={class:"-my-6 divide-y divide-gray-500/10"},ce={class:"py-6"},_e={class:"py-6"},ue=y({__name:"Header",setup(b){const o=L(),c=M(!1),{isPending:x,isError:w,data:f}=j({queryKey:["user/profile"],queryFn:async()=>await P.getUserProfile()}),{data:h}=j({queryKey:["user/me"],queryFn:async()=>{const l=await P.getMe();return console.log(l.role),l}});return(l,m)=>{var k,$;const r=p("RouterLink"),_=p("v-btn"),E=p("v-img"),R=p("DialogPanel"),D=p("Dialog");return n(),u("header",I,[e("nav",K,[e("div",S,[t(r,{to:"/",class:"flex box-border border-white py-4 hover:border-b-8 h-16"},{default:s(()=>[T,G,Q]),_:1})]),e("div",U,[t(C),t(_,{variant:"flat",type:"button",onClick:m[0]||(m[0]=z=>c.value=!0)},{default:s(()=>[J,t(a(N),{class:"size-6","aria-hidden":"true"})]),_:1})]),e("div",W,[t(r,{to:"/projects"},{default:s(()=>[t(_,{variant:"flat",active:a(o).name=="projects-view"},{default:s(()=>[i(d(l.$t("projects")),1)]),_:1},8,["active"])]),_:1}),t(r,{to:"/skills"},{default:s(()=>[t(_,{variant:"flat",active:a(o).name=="skills-view"},{default:s(()=>[i(d(l.$t("skills")),1)]),_:1},8,["active"])]),_:1}),t(r,{to:"/tokens"},{default:s(()=>[t(_,{variant:"flat",active:a(o).name=="tokens-view"},{default:s(()=>[i(d(l.$t("modules")),1)]),_:1},8,["active"])]),_:1})]),e("div",X,[((k=a(h))==null?void 0:k.role)=="teacher"?(n(),g(r,{key:0,to:a(o).path.includes("dashboard")?"":"/dashboard"},{default:s(()=>[t(_,{variant:"flat",active:a(o).path.includes("dashboard")},{default:s(()=>[i(d(l.$t("teacherDashboard")),1)]),_:1},8,["active"])]),_:1},8,["to"])):v("",!0),t(_,{href:"https://code.artisan.education",color:"indigo",flat:"","prepend-icon":"mdi-developer-board","append-icon":"mdi-chevron-right",target:"_blank",rel:"noopener noreferrer"},{default:s(()=>[i("IDE")]),_:1}),(($=a(h))==null?void 0:$.role)=="student"?(n(),g(_,{key:1,variant:"flat",readonly:""},{default:s(()=>[i(d(a(h).class_name),1)]),_:1})):v("",!0),t(C),t(r,{to:"/profile"},{default:s(()=>[t(_,{icon:"",variant:"flat",class:"pa-0"},{default:s(()=>[a(x)||a(w)?(n(),u("div",Y,[t(A)])):a(f)?(n(),u("div",ee,[a(f).image!=null?(n(),u("div",te,[t(E,{src:a(f).image,cover:""},null,8,["src"])])):(n(),g(A,{key:1}))])):v("",!0)]),_:1})]),_:1})])]),t(D,{class:"lg:hidden",onClose:m[2]||(m[2]=z=>c.value=!1),open:c.value},{default:s(()=>[se,t(R,{class:"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-8 py-0 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:s(()=>[e("div",oe,[t(r,{to:"/",class:"flex box-border border-white py-4 hover:border-b-8 h-16"},{default:s(()=>[ae,ne,le]),_:1}),e("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-black",onClick:m[1]||(m[1]=z=>c.value=!1)},[re,t(a(O),{class:"h-6 w-6","aria-hidden":"true"})])]),e("div",ie,[e("div",de,[e("div",ce,[t(r,{to:"/projects",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:s(()=>[i(d(l.$t("projects")),1)]),_:1}),t(r,{to:"/skills",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:s(()=>[i(d(l.$t("skills")),1)]),_:1}),t(r,{to:"/tokens",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:s(()=>[i(d(l.$t("modules")),1)]),_:1})]),e("div",_e,[t(r,{to:"/profile",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:s(()=>[i(" Profile")]),_:1})])])])]),_:1})]),_:1},8,["open"])])}}}),pe={class:"bg-black shadow absolute bottom-0 w-full"},me={class:"w-full mx-auto px-8 py-4"},fe={class:"sm:flex sm:items-center sm:justify-between"},he={class:"flex items-center"},ge=e("img",{class:"h-8 pr-2",alt:"Artisan Logo",src:H},null,-1),ve={class:"text-white text-l"},be=e("strong",null,"Artisan",-1),ye={class:"flex items-center text-white justify-end"},xe=e("span",{id:"_zero_75024"},[e("noscript",null,[e("a",{href:"https://zero.kz/?s=75024",target:"_blank"},[e("img",{src:"https://c.zero.kz/z.png?u=75024",width:"88",height:"31",alt:"ZERO.kz"})])])],-1),we={class:"text-white text-sm ml-2"},ke=y({__name:"Footer",setup(b){return V(()=>{if(window._zero_kz_=window._zero_kz_||[],window._zero_kz_.push(["id",75024]),window._zero_kz_.push(["type",1]),!document.getElementById("_zero_kz_script")){const o=document.createElement("script");o.id="_zero_kz_script",o.async=!0,o.src=(document.location.protocol==="http:"?"http:":"https:")+"//c.zero.kz/z.js",document.body.appendChild(o)}}),(o,c)=>(n(),u("footer",pe,[e("div",me,[e("div",fe,[e("div",he,[ge,e("span",ve,[be,i(" - "+d(o.$t("artOfEngineeringThinking")),1)])]),e("div",ye,[xe,e("span",we," © 2023 Artisan. "+d(o.$t("allRightsReserved")),1)])])])]))}}),Ee=y({__name:"HomePage",setup(b){const o=L(),c=Z(()=>o.meta.layout==="course");return(x,w)=>{const f=p("RouterView"),h=p("v-main");return n(),u(F,null,[c.value?v("",!0):(n(),g(ue,{key:0})),t(h,{class:q(["flex flex-1 pb-16",c.value?"bg-white":"bg-grey-lighten-4"])},{default:s(()=>[t(f)]),_:1},8,["class"]),c.value?v("",!0):(n(),g(ke,{key:1}))],64)}}});export{Ee as default};
