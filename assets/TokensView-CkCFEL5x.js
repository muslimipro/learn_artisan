import{a as o}from"./api-client-BYxAcs9Y.js";import{_ as l}from"./TokenCard.vue_vue_type_script_setup_true_lang-CrThTYVH.js";import{u as d}from"./useQuery-DtqSEWn3.js";import{d as m,c as e,u as s,t as _,F as f,i as k,l as y,o as t,e as g}from"./index-CTYQO7xe.js";import"./base-url-qR72hEjy.js";const h={async getTokens(){return(await o.get("/tokens/")).data},async getTokenByID(n){return(await o.get("/tokens/"+n)).data}},w={class:"flex justify-center w-full h-full p-8 flex-wrap gap-8"},T={key:0},v={key:1},q=m({__name:"TokensView",setup(n){const{isPending:r,isError:a,isSuccess:i,data:c,error:u}=d({queryKey:["tokens"],queryFn:h.getTokens});return(x,B)=>(t(),e("div",w,[s(r)?(t(),e("div",T," Pending... ")):s(a)?(t(),e("span",v,"Error: "+_(s(u)),1)):s(i)?(t(!0),e(f,{key:2},k(s(c),p=>(t(),e("div",null,[g(l,{token:p},null,8,["token"])]))),256)):y("",!0)]))}});export{q as default};
