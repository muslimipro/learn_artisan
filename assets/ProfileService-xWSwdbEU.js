import{a as s}from"./api-client-DKgx13sC.js";const n={async getUserProfile(){return(await s.get("/user/profile")).data},async changeUserPassword(e,r){return(await s.post("/user/change_password",{old:e,new:r})).data},async getMe(){return(await s.get("/user/me")).data}};export{n as P};