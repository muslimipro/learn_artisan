import{d as i,l as p,f as t,o as l,g as d,h as e,m as a,q as c,s as r,J as h}from"./index-C11EpQ5l.js";const w=i({__name:"DashboardNavigationBar",setup(u){const s=p();return(v,_)=>{const n=t("v-btn"),o=t("RouterLink"),f=t("v-card"),m=t("v-col");return l(),d(m,{class:"flex-grow-0 flex-shrink-0"},{default:e(()=>[a(f,{class:"d-flex flex-column pa-6 w-60 justify-center align-start border-sm rounded-lg",variant:"flat"},{default:e(()=>[a(o,{to:"/dashboard/classes"},{default:e(()=>[a(n,{link:"",variant:"flat",active:c(s).name=="classes-view"},{default:e(()=>[r("Classes")]),_:1},8,["active"])]),_:1}),a(o,{to:"/dashboard/assignments"},{default:e(()=>[a(n,{link:"",variant:"flat",active:c(s).name=="assignments-view"},{default:e(()=>[r("Assignments")]),_:1},8,["active"])]),_:1}),a(o,{to:"/dashboard/archive"},{default:e(()=>[a(n,{link:"",variant:"flat",active:c(s).name=="archive-view"},{default:e(()=>[r("Archive")]),_:1},8,["active"])]),_:1})]),_:1})]),_:1})}}}),b=i({__name:"DashboardView",setup(u){return h.replace({path:"/dashboard/classes"}),(s,v)=>{const _=t("RouterView"),n=t("v-row"),o=t("v-container");return l(),d(o,{fluid:""},{default:e(()=>[a(n,{class:"px-16 py-8"},{default:e(()=>[a(w),a(_)]),_:1})]),_:1})}}});export{b as default};
