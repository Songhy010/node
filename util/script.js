exports.register = "INSERT INTO user (user_fname,user_lname,user_name,user_password,user_address,user_phone,user_email,user_type,user_status,user_avatar)"+
                            "VALUES (:user_fname,:user_lname,:user_name,:user_password,:user_address,:user_phone,:user_email,:user_type,:user_status,:user_avatar)";
exports.login = "SELECT * FROM user WHERE user_name = :user_name";