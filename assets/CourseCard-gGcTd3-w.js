import{d as F,b as s,o as n,k as a,f as r,e as i,m as L,j as o,a as p,c as v,t as l,l as c,g as d,F as P,h as R,H as M,_ as z}from"./index-DpTojXbM.js";import{u as D}from"./course-content-store-BdQL2KIc.js";const E={class:"relative image-container"},T={key:0,class:"absolute top-0 left-0 bg-yellow-400 text-black px-4 py-1 text-xs font-semibold"},A={class:"px-6"},G={style:{color:"green"}},H=F({__name:"CourseCard",props:{course:{},flat:{type:Boolean,default:!1},introIndex:{default:null}},setup(g){const f=["src/assets/intro/Firefly.jpg","src/assets/intro/Party_popper.jpg","src/assets/intro/Beating_heart.jpg","src/assets/intro/Mood_indicator.jpg","src/assets/intro/Sound_machine.jpg","src/assets/intro/Sensory_gadget.jpg"],h=D(),{setIntroIndex:y}=h,u=g,t=u.course,k=()=>{y(u.introIndex)};return(e,J)=>{const I=s("v-img"),b=s("v-progress-linear"),C=s("v-card-item"),x=s("v-card-text"),j=s("v-divider"),w=s("v-card-subtitle"),_=s("v-chip"),B=s("v-chip-group"),q=s("v-card"),S=s("v-hover"),N=s("RouterLink");return n(),a(N,{to:o(t).status=="green"?`/course/${o(t).id}`:"",onClick:M(k,["prevent"])},{default:r(()=>[i(S,null,{default:r(({isHovering:m,props:V})=>[i(q,L({class:[{"on-hover":m,"border-sm":e.flat},"hover-card"]},V,{width:e.introIndex!=null?300:350,link:"",variant:e.flat?"flat":void 0,disabled:o(t).status!="green",elevation:e.flat?0:m?5:1}),{default:r(()=>[p("div",E,[i(I,{class:"zoomable-image",height:e.introIndex!=null?210:200,src:e.introIndex!=null?f[e.introIndex]:o(t).cover_image,alt:o(t).name+" Image",cover:""},null,8,["height","src","alt"]),o(t).status!="green"?(n(),v("div",T,l(e.$t("comingSoon")),1)):c("",!0)]),e.introIndex==null?(n(),a(b,{key:0,color:"green","model-value":o(t).completed_steps_count/o(t).total_steps_count*100,height:6},null,8,["model-value"])):c("",!0),p("div",A,[i(C,{class:"pa-0 py-2"},{title:r(()=>[d(l(o(t).name),1)]),_:1}),e.introIndex==null?(n(),a(x,{key:0,class:"pa-0 clamped-text"},{default:r(()=>[d(l(o(t).description),1)]),_:1})):c("",!0),e.introIndex==null?(n(),a(j,{key:1,class:"border-opacity-100 my-2",color:"error"})):c("",!0),e.introIndex==null?(n(),a(w,{key:2,class:"pa-0"},{default:r(()=>[d(l(e.$t("prerequisites")),1)]),_:1})):c("",!0),e.introIndex==null?(n(),a(B,{key:3,"show-arrows":!1,mobile:!0,class:"pb-4",mandatory:!1},{default:r(()=>[o(t).prereqs.length>0?(n(!0),v(P,{key:0},R(o(t).prereqs,$=>(n(),a(_,{ripple:!1},{default:r(()=>[d(l($.name),1)]),_:2},1024))),256)):(n(),a(_,{key:1,variant:"text"},{default:r(()=>[p("span",G,l(e.$t("noPrereqsRequired")),1)]),_:1}))]),_:1})):c("",!0)])]),_:2},1040,["class","width","variant","disabled","elevation"])]),_:1})]),_:1},8,["to"])}}}),Q=z(H,[["__scopeId","data-v-d0f1fcca"]]);export{Q as C};