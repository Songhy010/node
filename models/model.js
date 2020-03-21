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

exports.login = async (user_name,user_phone)=>{
    const query = await db.query(script.login,{
        replacements: {
            user_name,
            user_phone
          },
          type: db.QueryTypes.SELECT
    });
    return query[0];
}

exports.changePassword = async (user_phone,new_pass)=>{
    const query = await db.query(script.changePassword,{
        replacements: {
            user_phone,
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