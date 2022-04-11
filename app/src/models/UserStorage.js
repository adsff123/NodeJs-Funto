"use strict";

const fs = require("fs").promises;


class UserStorage {
    static #getUserInfo(data, id)  {
        const users = JSON.parse(data);
        const idx = users.db_id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUsers, info)=>{
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {}); 
        
        return userInfo;
    };

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
        return fs
        .readFile("./src/database/users.json") 
        .then((data) => {
             return this.#getUserInfo(data, id);
        })
        .catch(console.error);

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