exports.register = "INSERT INTO user (user_fname,user_lname,user_name,user_password,user_address,user_phone,user_email,user_type,user_status,user_avatar,company_ownner)"+
                            "VALUES (:user_fname,:user_lname,:user_name,:user_password,:user_address,:user_phone,:user_email,:user_type,:user_status,:user_avatar,'0')";
exports.login = "SELECT * FROM user WHERE (user_name = :user_name OR user_phone = :user_phone) AND user_type = :user_type";
exports.changePassword = "UPDATE user SET user_password = :new_pass WHERE user_id = :user_id";
exports.updateProfile = "UPDATE user SET user_fname = :user_fname, user_lname = :user_lname, user_address = :user_address, user_email = :user_email, user_avatar = :user_avatar "+ 
                        "WHERE user_phone = :user_phone";
exports.uploadCategory = "INSERT INTO category_translate(lang_id, category_id, category_title, category_desc) "+
                            "VALUES (1,:category_id,:category_title_km,:category_desc_km),(2,:category_id,:category_title,:category_desc);";
exports.getCategory = "SELECT CT.category_id,CT.category_title,CT.category_desc,CR.image FROM category_translate CT INNER JOIN category CR ON CT.category_id = CR.category_id WHERE lang_id = :lang_id";