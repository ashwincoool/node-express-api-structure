const pool = require("../../config/database");

module.exports={
    create:(data,callBack)=>{
        pool.query(
            `insert into registration (full_name,gender,password,address,created)
            values(?,?,?,?,?)`,
            [
                data.full_name,
                data.gender,
                data.password,
                data.address,
                data.created    
            ],
            (error,results,fields)=>{
                //console.log(fields);
                if(error){
                   return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },

    getList: callBack => {
        pool.query(
            `select * from registration`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            },
        );
    },

    update:(data,callBack) =>{
        pool.query(
            `update registration set full_name=?,gender=?,password=?,address=?,modified=? where id = ?`,
            [
                data.full_name,
                data.gender,
                data.password,
                data.address,
                data.modified,
                data.id
            ],
            (error,results,fields)=>{
                //console.log(fields);
                if(error){
                   return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },

    deleteData:(data,callBack) => {
        pool.query(
            `delete from registration where id=?`,
            [
                data.id
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },

    getUserByEmail : (email,callBack) => {
        pool.query(
            `select * from registration where email = ?`,
            [email],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    }
    
};