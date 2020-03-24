const models = require('../models/model');

exports.createCompany = async(req,res,next)=>{
    try {
        const company_name = req.body.company_name;
        const company_address = req.body.company_address;
        const company_lat = req.body.company_lat;
        const company_long = req.body.company_long;
        const company_phone = req.body.company_phone;
        const company_email = req.body.company_email;
        const company_website = req.body.company_website;
        const company_logo = req.body.company_logo;
        const company_code = req.body.company_code;
        const user_id = req.payload.id;
        const company_id = await models.getCompanyId(company_code);
        if(company_id){
            const err = Error("Company Code is existed!");
            err.code = 401;
            next(err);
        }else{
            await models.createCompany(company_name,company_address,company_lat,company_long,company_phone,company_email,company_website,company_logo,company_code);
            const company_id = await models.getCompanyId(company_code);
            const data = await models.uploadCompanyUser(user_id,company_id.company_id);
            res.send(data);
        }
    } catch (error) {
        const err = Error("Bad Request!");
        err.code = 400;
        next(err);
    }
}

exports.uploadCompanyCategory = async(req,res,next)=>{
    try {
        const company_code = req.body.company_code;

        const company_id = await models.getCompanyId(company_code);

    } catch (error) {
        const err = Error("Bad Request!");
        err.code = 400;
        next(err); 
    }
}



exports.upload = async (req,res,next)=>{
    const imgName = req.files;
    res.send(imgName);
}

exports.test = async (req,res,next)=>{
    res.send({test:"Hello"});
}