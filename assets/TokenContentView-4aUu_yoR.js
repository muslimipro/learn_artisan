import{m as y}from"./marked-DhwVJeM6.js";import{d as w,u as v,r as x,l as C,f as e,c as n,t as $,e as l,w as b,i as g,b as N,o as a,a as P}from"./index-Dop57Fz-.js";import{u as T}from"./useQuery-Bpmlz4Uh.js";import{b as m}from"./base-url-qR72hEjy.js";import{u as V}from"./api-C3jY4sTY.js";import{_ as B}from"./RtzeroButton.vue_vue_type_script_setup_true_lang-WobVItU9.js";const E={key:0},L={key:1},j={key:2,class:"w-full p-4 bg-white"},q=["innerHTML"],K=w({__name:"TokenContentView",setup(A){const{fetchAPI:r}=V(),c=v(),i=x(""),_=async()=>{const t=await r(`${m}/artisan_tokens/${c.params.id}`).then(s=>s.json()),d=t.path,o=await r(`${m}/${d}`).then(s=>s.text());return i.value=o,t},{isPending:p,isError:f,error:h,data:u}=T({queryKey:[`artisan_tokens:${c.params.id}`],queryFn:_}),k=C(()=>y.parse(i.value));return(t,d)=>{const o=N("v-col");return e(p)?(a(),n("div",E," Pending ")):e(f)?(a(),n("span",L,"Error: "+$(e(h)),1)):e(u)?(a(),n("div",j,[l(o,{class:"d-flex flex-column justify-center align-center"},{default:b(()=>[P("div",{class:"content markdown-body w-8/12",innerHTML:k.value},null,8,q),l(B,{isNeeded:e(u).name.toLowerCase().includes("rtzero")},null,8,["isNeeded"])]),_:1})])):g("",!0)}}});export{K as default};
