import{a as c}from"./api-client-COTgTXz3.js";import{_ as f}from"./TokenCard.vue_vue_type_script_setup_true_lang-BdttdLxR.js";import{u as k}from"./useQuery-DQeQOh-z.js";import{d as y,k as g,r as v,m as h,f as s,c as t,t as w,a as l,F as x,n as T,i as B,o as a,e as V}from"./index-BwA11LRs.js";import"./base-url-qR72hEjy.js";const C={async getTokens(n){return(await c.get(`/artisan_tokens/?language=${n}`)).data},async getTokenByID(n){return(await c.get("/artisan_tokens/"+n)).data}},E={key:0},F={key:1},N={key:2,class:"flex-col w-full"},q={class:"flex flex-wrap justify-center p-8 gap-8"},D=l("div",{class:"h-8"},null,-1),L=y({__name:"TokensView",setup(n){const{locale:e}=g(),o=v(e.value),{isPending:u,isError:d,data:r,error:_,refetch:p}=k({queryKey:["tokens"+o.value],queryFn:async()=>await C.getTokens(o.value)});return h(()=>e.value,()=>{o.value=e.value,p()},{immediate:!0}),(m,I)=>s(u)?(a(),t("div",E," Pending... ")):s(d)?(a(),t("span",F,"Error: "+w(s(_)),1)):s(r)?(a(),t("div",N,[l("div",q,[(a(!0),t(x,null,T(s(r),i=>(a(),t("div",{key:i.id},[V(f,{token:i},null,8,["token"])]))),128))]),D])):B("",!0)}});export{L as default};