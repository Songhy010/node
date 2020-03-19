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

exports.login = async (user_name)=>{
    const query = await db.query(script.login,{
        replacements: {
            user_name
          },
          type: db.QueryTypes.SELECT
    });
    return query[0];
}