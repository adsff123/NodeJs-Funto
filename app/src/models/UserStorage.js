"use strict";

class UserStorage {
    static #users = {
        db_id: ["adsff123", "mike", "josh", "joey", "danny", "heather","soo","kevin"],
        db_password: ["1234", "1234", "1234", "1234", "1234", "1234","1234","1234"], 
        db_name: ["상효","마이크","조쉬","조이","대니","헤더","수","케빈"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;