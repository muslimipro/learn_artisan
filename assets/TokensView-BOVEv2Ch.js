import{a as l}from"./api-client-BQlDpWpK.js";import{_ as f}from"./TokenCard.vue_vue_type_script_setup_true_lang-x5nX2xPt.js";import{u as g}from"./useQuery-S9VUxE-m.js";import{d as k,u as y,r as v,w as h,l as t,c as a,t as w,a as u,F as x,f as T,q as B,o as n,j as V}from"./index-BiGyBuRT.js";import"./base-url-qR72hEjy.js";const q={async getTokens(e){return console.log(`/artisan_tokens/?language=${e}`),(await l.get(`/artisan_tokens/?language=${e}`)).data},async getTokenByID(e){return(await l.get("/artisan_tokens/"+e)).data}},C={key:0},E={key:1},F={key:2,class:"flex-col w-full"},N={class:"flex flex-wrap justify-center p-8 gap-8"},$=u("div",{class:"h-8"},null,-1),L=k({__name:"TokensView",setup(e){const{locale:s}=y(),o=v(s.value),{isPending:d,isError:_,data:c,error:p,refetch:m}=g({queryKey:["tokens"+o.value],queryFn:async()=>{const r=await q.getTokens(o.value);return console.log(r),r}});return h(()=>s.value,()=>{o.value=s.value,m()},{immediate:!0}),(r,j)=>t(d)?(n(),a("div",C," Pending... ")):t(_)?(n(),a("span",E,"Error: "+w(t(p)),1)):t(c)?(n(),a("div",F,[u("div",N,[(n(!0),a(x,null,T(t(c),i=>(n(),a("div",{key:i.id},[V(f,{token:i},null,8,["token"])]))),128))]),$])):B("",!0)}});export{L as default};
