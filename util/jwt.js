const jwt = require("jsonwebtoken");
const jwtKey = /*process.env.JWT_KEY ||*/ "$3m$0ngHy";

module.exports = (req,res,next) =>{
    try {
        const authHeader = req.headers.authorization || req.body.token;
        const token = authHeader.startsWith('Bearer')
          ? authHeader.split(' ')[1]
          : authHeader;
    
        // prepare error
        const err = Error('Missing token');
        err.code = 422;
        if (!token) {
          throw err;
        }
        
        const payload = jwt.verify(token,jwtKey);
        if(payload){
            req.payload = payload;
            next();
        }else{
            const err = Error("Invalid Token");
            err.code = 401;
            next(err);
        }
    } catch (error) {
        next(error);
    }
}