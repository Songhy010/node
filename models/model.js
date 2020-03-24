const db = require('../util/db_config');
const script = require('../util/script');
exports.register= async (user_fname,user_lname,user_name,user_password,user_address,user_phone,user_email,user_type,user_status,user_avatar)=>{
    const query = await db.query(script.register,{
        replacements: {
            user_fname,
            user_lname,
            user_name,
            user_password,
            user_address,
            user_phone,
            user_email,
            user_type,
            user_status,
            user_avatar
          },
    });
    return {code:200,message:"success"};
}

exports.login = async (user_name,user_phone,user_type)=>{
    const query = await db.query(script.login,{
        replacements: {
            user_name,
            user_phone,
            user_type
          },
          type: db.QueryTypes.SELECT
    });
    return query[0];
}

exports.changePassword = async (user_id,new_pass)=>{
    const query = await db.query(script.changePassword,{
        replacements: {
            user_id,
            new_pass
          },
    });
    return {code:200,message:"success"};
}

exports.updateProfile = async (user_fname,user_lname,user_address,user_email,user_avatar,user_phone)=>{
    const query = await db.query(script.updateProfile,{
        replacements: {
            user_fname,
            user_lname,
            user_address,
            user_email,
            user_avatar,
            user_phone
          },
    });
    return {code:200,message:"success"};
}

exports.uploadCategory = async (category_id,category_title_km,category_desc_km,category_title,category_desc)=>{
    const query = await db.query(script.uploadCategory,{
        replacements: {
            category_id,
            category_title_km,
            category_desc_km,
            category_title,
            category_desc,
          },
    });
    return {code:200,message:"success"};
}

exports.getCategory = async (lang_id)=>{
    const query = await db.query(script.getCategory,{
        replacements: {
            lang_id
          },
          type: db.QueryTypes.SELECT
    });
    return query;
}

exports.getCategory = async (lang_id)=>{
    const query = await db.query(script.getCategory,{
        replacements: {
            lang_id
          },
          type: db.QueryTypes.SELECT
    });
    return query;
}

exports.createCompany = async(company_name,company_address,company_lat,company_long,company_phone,company_email,company_website,company_logo,company_code)=>{
    const query = await db.query(script.createCompany,{
        replacements: {
            company_name,
            company_address,
            company_lat,
            company_long,
            company_phone,
            company_email,
            company_website,
            company_logo,
            company_code
          },
    });
    return {code:200,message:"success"};
}

exports.getCompanyId = async (company_code)=>{
    const query = await db.query(script.getCompanyId,{
        replacements: {
            company_code
          },
          type: db.QueryTypes.SELECT
    });
    return query[0];
}

exports.uploadCompanyUser = async (user_id,company_id)=>{
    const query = await db.query(script.uploadCompanyUser,{
        replacements: {
            user_id,
            company_id
          },
    });
    return {code:200,message:"success"};
}

exports.uploadCompanyCategory = async (company_id,category_id)=>{
    const query = await db.query(script.uploadCompanyCatagory,{
        replacements: {
            company_id,
            category_id
          },
    });
    return {code:200,message:"success"};
}