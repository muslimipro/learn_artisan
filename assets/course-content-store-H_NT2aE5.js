import{P as M,r as t,J as i}from"./index-BQo8HGay.js";const I=M("useCourseContentStore",()=>{const o=t({}),n=t([]),a=t(0),s=t(0),u=t(0),c=t([]),v=t(""),r=t(null);function p(e){n.value=Array.from({length:e},()=>!0)}function d(e){n.value[e]=!n.value[e]}function f(e,l){a.value=e,s.value=l,u.value=0,i.push({path:`/course/${o.value.id}/topic/${o.value.modules[a.value].topics[s.value].id}`})}function S(e){r.value=null,u.value=e,i.push({path:`/course/${o.value.id}/topic/${c.value[u.value].parent_id}/step/${c.value[e].id}`})}function h(e){c.value=e}function g(e,l,$){a.value=e,s.value=l,u.value=$}function C(e){o.value=e}return{openedModule:n,activeModuleIndex:a,activeTopicIndex:s,activeStepIndex:u,currentSteps:c,startingCode:v,currentStepPassed:r,resizeModules:p,toggleModule:d,changeTopic:f,changeStep:S,setSteps:h,setActives:g,setCourseInfo:C}});export{I as u};
