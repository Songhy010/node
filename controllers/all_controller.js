const models = require('../models/model');
const bcrypt = require('bcrypt');

const jwt = require("jsonwebtoken");
const jwtKey = /*process.env.JWT_KEY ||*/ "$3m$0ngHy";

const signToken = payload =>{
    return token = jwt.sign(payload,jwtKey);
}

exports.register = async (req,res,next)=>{
    try {
        const user_fname = req.body.user_fname;
        const user_lname = req.body.user_lname;
        const user_name = req.body.user_name;
        const user_password = req.body.user_password;
        const user_address = req.body.user_address;
        const user_phone = req.body.user_phone;
        const user_email = req.body.user_email;
        const user_type = req.body.user_type;
        const user_status = req.body.user_status;
        const user_avatar = req.body.user_avatar;

        const user = await models.login(user_name);

        if(user){
            const err = Error("User existed!");
            err.code = 422;
            next(err);
        }else{
            const hashPass = await bcrypt.hash(user_password,12);
            const data = await models.register(user_fname,user_lname,user_name,hashPass,user_address,user_phone,user_email,user_type,user_status,user_avatar);
            res.send(data);
        }
    } catch (error) {
        const err = Error("Missing param!");
        err.code = 422;
        next(err);
    }
}

exports.login = async (req,res,next)=>{
    try {
        const user_name = req.body.user_name;
        const user_password = req.body.user_password;
        const data = await models.login(user_name);
        if(data){
            const isEqule = await bcrypt.compare(user_password,data.user_password);
            if(isEqule){
                const token = signToken({
                    id : data.user_id,
                    type : data.user_type
                });
                res.send({data,token});
            }else{
                const err = Error("Incorrect Password");
                err.code = 422;
                next(err);
            }
        }else{
            const err = Error("Incorrect Username!");
            err.code = 422;
            next(err);
        }

    } catch (error) {
        const err = Error("Missing Param!");
        err.code = 422;
        next(err);
    }
}

exports.test = async (req,res,next)=>{
    const id = req.payload.id;
    res.send({id});
}