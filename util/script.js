exports.register = "INSERT INTO user (user_fname,user_lname,user_name,user_password,user_address,user_phone,user_email,user_type,user_status,user_avatar)"+
                            "VALUES (:user_fname,:user_lname,:user_name,:user_password,:user_address,:user_phone,:user_email,:user_type,:user_status,:user_avatar)";
exports.login = "SELECT * FROM user WHERE user_name = :user_name OR user_phone = :user_phone";
exports.changePassword = "UPDATE user SET user_password = :new_pass WHERE user_phone = :user_phone";
exports.updateProfile = "UPDATE user SET user_fname = :user_fname, user_lname = :user_lname, user_address = :user_address, user_email = :user_email, user_avatar = :user_avatar "+ 
                        "WHERE user_phone = :user_phone";