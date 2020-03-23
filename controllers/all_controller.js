const models = require('../models/model');
const bcrypt = require('bcrypt');

const jwt = require("jsonwebtoken");
const jwtKey = /*process.env.JWT_KEY ||*/ "$3m$0ngHy";

const signToken = payload =>{
    return token = jwt.sign(payload,jwtKey);
}

const userFormate = (data)=>{
    return {
        username:data.user_name,
        first_name:data.user_fname,
        last_name:data.user_lname,
        address:data.user_address,
        phone:data.user_phone,
        email:data.user_email,
        type:data.user_type,
        status:data.user_status,
        avatar:data.user_avatar,
        is_ownner: data.company_ownner
    }
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

        const user = await models.login(user_name,user_phone,user_type);
       
        if(user){
            const err = Error("User existed!");
            err.code = 0;
            next(err);
        }else{
            const hashPass = await bcrypt.hash(user_password,12);
            console.log(user);

            const data = await models.register(user_fname,user_lname,user_name,hashPass,user_address,user_phone,user_email,user_type,user_status,user_avatar);
            res.send(data);
        }
    } catch (error) {
        const err = Error("Bad Request");
        err.code = 400;
        next(err);
    }
}

exports.login = async (req,res,next)=>{
    try {
        const user_name = req.body.user_name;
        const user_password = req.body.user_password;
        const user_type = req.body.user_type;
        const data = await models.login(user_name,user_name,user_type);
        if(data){
            const isEqule = await bcrypt.compare(user_password,data.user_password);
            if(isEqule){
                const token = signToken({
                    id : data.user_id,
                    type : data.user_type
                });
                res.send({data:userFormate(data),token,code:200});
            }else{
                const err = Error("Incorrect Password");
                err.code = -1;
                next(err);
            }
        }else{
            const err = Error("Incorrect Username!");
            err.code = -1;
            next(err);
        }

    } catch (error) {
        const err = Error("Bad Request!");
        err.code = 400;
        next(err);
    }
}

exports.changePassword = async (req,res,next)=>{
    try {
        const user_phone = req.body.user_phone;
        const user_id = req.payload.id;
        const new_pass = req.body.new_pass;
        const old_pass = req.body.old_pass;
        const user_type = req.payload.type;
    
        const user = await models.login(user_phone,user_phone,user_type);
        const isEqule = await bcrypt.compare(old_pass,user.user_password);
        if(isEqule){
            const hashPass = await bcrypt.hash(new_pass,12);
            const data = await models.changePassword(user_id,hashPass);
            res.send(data);
        }else{
            const err = Error("Incorrect Password");
            err.code = -1;
            next(err);
        } 
    } catch (error) {
        const err = Error("Bad Request!");
        err.code = 400;
        next(err);
    }
};

exports.updateProfile = async (req,res,next)=>{
    try {
        const user_fname = req.body.user_fname;
        const user_lname = req.body.user_lname;
        const user_address = req.body.user_address;
        const user_phone = req.body.user_phone;
        const user_email = req.body.user_email;
        const user_avatar = req.body.user_avatar;
        const user_type = req.payload.type;

        await models.updateProfile(user_fname,user_lname,user_address,user_email,user_avatar,user_phone);
        const user = await models.login(user_phone,user_phone,user_type);
        
        if(user){
           res.send({data:userFormate(user),code:200}); 
        }else{
            const err = Error("Incorrect phone number");
            err.code = -1;
            next(err);
        }
    } catch (error) {
        const err = Error("Bad Request!");
        err.code = 400;
        next(err);
    }
}

exports.getCategory = async (req,res,next)=>{
    try {
        const lang = req.body.lang;
        let lang_id = 2;
        if(lang == 'km'){
            lang_id = 1;
        }
        const data = await models.getCategory(lang_id);
        res.send(data);
    } catch (error) {
        const err = Error("Bad Request!");
        err.code = 400;
        next(err);
    }
}

exports.test = async (req,res,next)=>{
    res.send({data:"Welcome to Catalog"});
}