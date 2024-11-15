import{a as e}from"./api-client-_2bmHwbl.js";const o={async getClasses(){return(await e.get("/school/class/list/")).data},async getInactiveClasses(){return(await e.get("/school/class/inactivelist/")).data},async getClassByID(s){return(await e.get("/school/class/"+s)).data},async addClass(s){return await e.post(`/school/class/?name=${s}&description=...`)},async updateClass(s,a){return await e.put(`/school/class/${s}?name=${a}`)},async archiveClass(s){return await e.post(`/school/class/${s}/archive/`)},async unarchiveClass(s){return await e.post(`/school/class/${s}/unarchive/`)},async deleteClass(s){return await e.delete("/school/class/"+s)}};export{o as C};