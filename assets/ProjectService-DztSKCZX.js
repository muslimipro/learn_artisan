import{a as t}from"./api-client-DKgx13sC.js";const a={async getProjects(e){return(await t.get(`/projects/?language=${e}`)).data},async getProjectByID(e){return(await t.get("/projects/"+e)).data}};export{a as P};