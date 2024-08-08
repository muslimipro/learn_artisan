import{a as t}from"./api-client-A--2tcaO.js";const o={async getSkills(){return(await t.get("/skills/")).data},async getCourseInfoByID(e){return(await t.get("/courses/info/"+e)).data},async getStepByID(e){return(await t.get("/steps/"+e)).data},async getTopicByID(e){return(await t.get("/topics/"+e)).data},async getMdTextByURL(e){return(await t.get(`/${e}`)).data},async getArticleStepByID(e){return(await t.get("/steps/articles/"+e)).data},async getVideoStepByID(e){return(await t.get("/steps/videos/"+e)).data},async getScqStepByID(e){return(await t.get("/steps/scqs/"+e)).data},async getMcqStepByID(e){return(await t.get("/steps/mcqs/"+e)).data},async getCodeStepByID(e){return(await t.get("/steps/codes/"+e)).data},async checkScqStepByID(e,s){return(await t.patch("/steps/scqs/"+e,{choice:s})).data},async checkMcqStepByID(e,s){return(await t.patch("/steps/mcqs/"+e,{choices:s})).data},async checkCodeStepByID(e,s){return(await t.patch("/steps/codes/"+e+"/submit",{code:s})).data},async runCodeStepByID(e,s,a){return(await t.patch("/steps/codes/"+e+"/run",{code:s,user_input:a})).data}};export{o as S};
