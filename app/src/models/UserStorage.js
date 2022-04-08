"use strict";

const fs = require("fs");


class UserStorage {

    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };

    static getUserInfo(id) {
        // const users = this.#users;
        fs.readFile("./src/database/users.json", (err,data)=>{
            if (err) throw err;
            const users = JSON.parse(data);
            const idx = users.db_id.indexOf(id);
            const userKeys = Object.keys(users);
            const userInfo = userKeys.reduce((newUsers, info)=>{
                newUsers[info] = users[info][idx];
                return newUsers;
            }, {}); 
            
            return userInfo; 
        })
        
    };

    static save(userInfo) { 
        // const users = this.#users; 
        users.db_id.push(userInfo.id);
        users.db_password.push(userInfo.password);
        users.db_name.push(userInfo.name);
        users.db_email.push(userInfo.email); 
        return {success:true};
    };
 

}

module.exports = UserStorage;