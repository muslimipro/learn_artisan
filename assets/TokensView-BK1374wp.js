import{a as l}from"./api-client-DaD7uQMA.js";import{_ as f}from"./TokenCard.vue_vue_type_script_setup_true_lang-Bcxi8TD3.js";import{u as g}from"./useQuery-DLDhtqI6.js";import{d as k,u as y,r as v,w as h,l as t,c as a,t as w,a as u,F as x,f as T,s as B,o as n,j as V}from"./index-Cl3fCl8d.js";import"./base-url-qR72hEjy.js";const C={async getTokens(e){return console.log(`/artisan_tokens/?language=${e}`),(await l.get(`/artisan_tokens/?language=${e}`)).data},async getTokenByID(e){return(await l.get("/artisan_tokens/"+e)).data}},E={key:0},F={key:1},N={key:2,class:"flex-col w-full"},$={class:"flex flex-wrap justify-center p-8 gap-8"},j=u("div",{class:"h-8"},null,-1),L=k({__name:"TokensView",setup(e){const{locale:s}=y(),o=v(s.value),{isPending:d,isError:_,data:c,error:p,refetch:m}=g({queryKey:["tokens"+o.value],queryFn:async()=>{const r=await C.getTokens(o.value);return console.log(r),r}});return h(()=>s.value,()=>{o.value=s.value,m()},{immediate:!0}),(r,q)=>t(d)?(n(),a("div",E," Pending... ")):t(_)?(n(),a("span",F,"Error: "+w(t(p)),1)):t(c)?(n(),a("div",N,[u("div",$,[(n(!0),a(x,null,T(t(c),i=>(n(),a("div",{key:i.id},[V(f,{token:i},null,8,["token"])]))),128))]),j])):B("",!0)}});export{L as default};