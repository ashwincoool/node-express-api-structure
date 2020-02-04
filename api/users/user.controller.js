const { 
    create,
    getList,
    update,
    deleteData,
    getUserByEmail
 } = require("./user.service");

 const helper = require('./../_helpers/customHelper');
 const customLib = require('./../_libraries/customLibrary');
 const { sign } = require("jsonwebtoken");
 require("dotenv").config();

var md5 = require('md5');


module.exports = {
    createUser:(req,res)=>{
        const body = req.body;
        body.password = md5(body.password);
        body.created =  helper.dbDateTime('',true);
        
        create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:err
                });
            }
                return res.status(200).json({
                    success:1,
                    message:"success",
                    data:results
                });
        })
    },

    getList: (req,res)=>{
        getList((err, results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:err
                });
            }
                return res.status(200).json({
                    success:1,
                    message:"success",
                    data:results
                });
        })
    },

    update:(req,res)=>{
        const body = req.body;
      
        body.password = md5(body.password); 
        body.modified = helper.dbDateTime('',true); 
        update(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:err
                });
            }
            if(!results){
                console.log(err);
                return res.json({
                    success:0,
                    message:"failed to update"
                });
            }
                return res.status(200).json({
                    success:1,
                    message:"success",
                    data:results
                });
        })
    },


    deleteData:(req,res)=>{
        const body = req.body;
        deleteData(body,(err,results)=>{
            if(err){
               
                return res.status(500).json({
                    success:0,
                    message:err
                });
            }
            //console.log(results);
            if(results.affectedRows == 0){
                return res.status(500).json({
                    success:0,
                    message:"Record Not Found"
                });
            }
                if(results.affectedRows>0){
                    return res.status(200).json({
                        success:1,
                        message:"deleted successfully",
                    });
                }
              

        })
    },

    login:(req,res) =>{
        const body = req.body;
        getUserByEmail(body.email,(err,results)=>{
            if(err){
                console.log(err);
            }
            if(!results){
                return res.json({
                    success:0,
                    data:"Invalid email or password"
                });
            }
            if(md5(body.password) == results.password){
               results.password = undefined;
               const jsontoken = sign({result:results},process.env.AUTH_TOKEN_KEY,{
                    expiresIn:"1h"
               });

               return res.json({
                   success:1,
                   message:'login succesfully',
                   token: jsontoken
               })
            }else{
                return res.json({
                    success:0,
                    message:'Invalid password'
                })
            }
            
        })
    },

    //how to use library
    checkUseOfLibrary:(req,res) =>{
        // create obj of class, init values 
        var lib = new customLib('ashwin','26','ashwin@gmail.com');

        console.log(lib);
        return res.status(200).json({
            success:1,
            message:"success",
            data:lib
        });

    }

}