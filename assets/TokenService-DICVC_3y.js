import{a}from"./api-client-_2bmHwbl.js";const t={async getTokens(e){return(await a.get(`/artisan_tokens/?language=${e}`)).data},async getTokenByID(e){return(await a.get("/artisan_tokens/"+e)).data}};export{t as T};