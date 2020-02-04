const { verify } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {

    checkToken:(req,res,next)=> {

        let token  = req.get("authorization");      
 
        if(token){
          //  token = token.slice(7); //  if there's basic include in headers
            verify(token,process.env.AUTH_TOKEN_KEY,(err,decoded)=>{
               // console.log(token);
                if(err){
                    res.json({
                        success:0,
                        message:"Invalid token"
                    });
                }else{
                    next();
                }


            })
        }else{
            res.json({
                success:0,
                message:"Access denied! Unauthorized user"
            })
        }

    }

}