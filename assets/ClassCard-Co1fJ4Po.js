import{d as w,r as b,l as U,m as N,b as a,o as y,c as S,e,w as t,g as i,t as r,q as D,F as h,_ as B,h as V,a as $,i as q}from"./index-Dop57Fz-.js";import{a as F}from"./useQuery-Bpmlz4Uh.js";import{C as A}from"./ClassService-KdhJErSt.js";const T=w({__name:"UpdateClassFormDialog",props:{item:{}},setup(C){const s=C,l=b(!1),o=b(!1),_=F(),u=b({name:s.item.name}),v=U(()=>u.value.name),n=async()=>{if(!v.value)return alert("pleaseFillInAllFields");o.value=!0;try{await A.updateClass(s.item.id.toString(),u.value.name),_.invalidateQueries({queryKey:["classes"]}),l.value=!1}catch(d){alert(`failedToUpdateStudent: ${d}`)}finally{o.value=!1}};return N(l,d=>{d&&(u.value.name=s.item.name)}),(d,c)=>{const m=a("v-btn"),p=a("v-card-title"),x=a("v-text-field"),g=a("v-form"),f=a("v-card-text"),I=a("v-card-actions"),Q=a("v-card"),K=a("v-dialog");return y(),S(h,null,[e(m,{"prepend-icon":"mdi-pencil",variant:"plain",onClick:c[0]||(c[0]=k=>l.value=!0)},{default:t(()=>[i("Edit")]),_:1}),e(K,{modelValue:l.value,"onUpdate:modelValue":c[3]||(c[3]=k=>l.value=k),"max-width":"600"},{default:t(()=>[e(Q,{class:"pa-4"},{default:t(()=>[e(p,{class:"px-2"},{default:t(()=>[i(r("updateStudent"))]),_:1}),e(f,null,{default:t(()=>[e(g,{onSubmit:D(n,["prevent"])},{default:t(()=>[e(x,{modelValue:u.value.name,"onUpdate:modelValue":c[1]||(c[1]=k=>u.value.name=k),type:"text",density:"compact",label:"name",placeholder:"name","prepend-inner-icon":"mdi-account-outline",variant:"outlined",required:""},null,8,["modelValue"])]),_:1})]),_:1}),e(I,null,{default:t(()=>[e(m,{color:"red darken-1",variant:"text",onClick:c[2]||(c[2]=k=>l.value=!1)},{default:t(()=>[i(r("cancel"))]),_:1}),e(m,{loading:o.value,color:"primary",variant:"flat",disabled:!v.value||o.value,onClick:n},{default:t(()=>[i(r("save"))]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),L=B(T,[["__scopeId","data-v-26cdee02"]]),P=w({__name:"ArchiveClassFormDialog",props:{item:{}},setup(C){const s=C,l=b(!1),o=b(!1),_=F();async function u(){o.value=!0;try{await A.archiveClass(s.item.id.toString()),_.invalidateQueries({queryKey:["classes"]}),l.value=!1}catch(v){alert(`failedToArchiveClass: ${v}`)}finally{o.value=!1}}return(v,n)=>{const d=a("v-btn"),c=a("v-card-title"),m=a("v-card-text"),p=a("v-card"),x=a("v-card-actions"),g=a("v-dialog");return y(),S(h,null,[e(d,{"prepend-icon":"mdi-archive",variant:"plain",loading:o.value,disabled:o.value,onClick:n[0]||(n[0]=()=>{l.value=!0})},{default:t(()=>[i("Archive")]),_:1},8,["loading","disabled"]),e(g,{modelValue:l.value,"onUpdate:modelValue":n[3]||(n[3]=f=>l.value=f),"max-width":"600"},{default:t(()=>[e(p,{class:"pa-4"},{default:t(()=>[e(c,{class:"px-2"},{default:t(()=>[i(r("archiveClass")+"?")]),_:1}),e(p,{class:"ma-2",color:"yellow",variant:"tonal"},{default:t(()=>[e(m,{class:"text-medium-emphasis text-lg"},{default:t(()=>[i(r("warningAllHisProgressDataWillBeArchived"))]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(d,{color:"green darken-1",variant:"text",onClick:n[1]||(n[1]=f=>l.value=!1)},{default:t(()=>[i(r("cancel"))]),_:1}),e(d,{loading:o.value,color:"red",variant:"flat",disabled:o.value,onClick:n[2]||(n[2]=f=>u())},{default:t(()=>[i(r("archive"))]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),E=w({__name:"DeleteClassFormDialog",props:{item:{}},setup(C){const s=C,l=b(!1),o=b(!1),_=F();async function u(){o.value=!0;try{await A.deleteClass(s.item.id.toString()),_.invalidateQueries({queryKey:["classes"]}),_.invalidateQueries({queryKey:["classes/inactive"]}),l.value=!1}catch(v){alert(`failedToDeleteClass: ${v}`)}finally{o.value=!1}}return(v,n)=>{const d=a("v-btn"),c=a("v-card-title"),m=a("v-card-text"),p=a("v-card"),x=a("v-card-actions"),g=a("v-dialog");return y(),S(h,null,[e(d,{"prepend-icon":"mdi-delete",variant:"plain",loading:o.value,disabled:o.value,onClick:n[0]||(n[0]=()=>{l.value=!0})},{default:t(()=>[i("Remove")]),_:1},8,["loading","disabled"]),e(g,{modelValue:l.value,"onUpdate:modelValue":n[3]||(n[3]=f=>l.value=f),"max-width":"600"},{default:t(()=>[e(p,{class:"pa-4"},{default:t(()=>[e(c,{class:"px-2"},{default:t(()=>[i(r("deleteClass")+"?")]),_:1}),e(p,{class:"ma-2",color:"yellow",variant:"tonal"},{default:t(()=>[e(m,{class:"text-medium-emphasis text-lg"},{default:t(()=>[i(r("warningAllHisProgressDataWillBeRemovedPermanently"))]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(d,{color:"green darken-1",variant:"text",onClick:n[1]||(n[1]=f=>l.value=!1)},{default:t(()=>[i(r("cancel"))]),_:1}),e(d,{loading:o.value,color:"red",variant:"flat",disabled:o.value,onClick:n[2]||(n[2]=f=>u())},{default:t(()=>[i(r("delete"))]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),H={class:"text-body-1"},R={class:"flex items-center"},W={class:"text-body-1"},M={style:{color:"blue"}},j=w({__name:"ClassCard",props:{item:{}},setup(C){const s=C,l=U(()=>s.item);return(o,_)=>{const u=a("v-icon"),v=a("v-card-title"),n=a("v-spacer"),d=a("v-list-item"),c=a("v-list"),m=a("v-menu"),p=a("v-btn"),x=a("v-card");return y(),V(x,{to:`/dashboard/class/${s.item.id}`,class:"d-flex flex pa-2 mb-2 border-sm rounded-lg",variant:"flat",link:s.item.is_active},{default:t(()=>[e(v,null,{default:t(()=>{var g;return[i(r(s.item.name)+" ",1),e(u,{color:"success",icon:"mdi mdi-circle-small"}),$("span",H,r(((g=s.item.students)==null?void 0:g.length)??0)+" students",1)]}),_:1}),e(n),$("div",R,[$("div",W,[i(" class code: "),$("span",M,r(s.item.code),1)])]),e(p,{variant:"flat",icon:"",class:"pa-0",onClick:D(()=>{},["prevent"])},{default:t(()=>[e(u,null,{default:t(()=>[i("mdi-dots-vertical")]),_:1}),e(m,{activator:"parent"},{default:t(()=>[e(c,{onClick:_[0]||(_[0]=D(()=>{},["stop"]))},{default:t(()=>[s.item.is_active?(y(),V(d,{key:0,class:"pa-0"},{default:t(()=>[e(L,{item:l.value},null,8,["item"])]),_:1})):q("",!0),s.item.is_active?(y(),V(d,{key:1,class:"pa-0"},{default:t(()=>[e(P,{item:l.value},null,8,["item"])]),_:1})):q("",!0),s.item.is_active?q("",!0):(y(),V(d,{key:2,class:"pa-0"},{default:t(()=>[e(E,{item:l.value},null,8,["item"])]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1},8,["to","link"])}}}),O=B(j,[["__scopeId","data-v-70efd633"]]);export{O as C};
