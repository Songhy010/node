exports.register = "INSERT INTO user (user_fname,user_lname,user_name,user_password,user_address,user_phone,user_email,user_type,user_status,user_avatar,company_ownner)"+
                            "VALUES (:user_fname,:user_lname,:user_name,:user_password,:user_address,:user_phone,:user_email,:user_type,:user_status,:user_avatar,'0')";
exports.login = "SELECT * FROM user WHERE (user_name = :user_name OR user_phone = :user_phone) AND user_type = :user_type";
exports.changePassword = "UPDATE user SET user_password = :new_pass WHERE user_id = :user_id";
exports.updateProfile = "UPDATE user SET user_fname = :user_fname, user_lname = :user_lname, user_address = :user_address, user_email = :user_email, user_avatar = :user_avatar "+ 
                        "WHERE user_phone = :user_phone";
exports.uploadCategory = "INSERT INTO category_translate(lang_id, category_id, category_title, category_desc) "+
                            "VALUES (1,:category_id,:category_title_km,:category_desc_km),(2,:category_id,:category_title,:category_desc);";
exports.getCategory = "SELECT CT.category_id,CT.category_title,CT.category_desc,CR.image FROM category_translate CT INNER JOIN category CR ON CT.category_id = CR.category_id WHERE lang_id = :lang_id";
exports.createCompany = "INSERT INTO company(company_name,company_address,company_lat,company_long,company_phone,company_email,company_website,company_logo,company_code) "+
                                    "VALUES(:company_name,:company_address,:company_lat,:company_long,:company_phone,:company_email,:company_website,:company_logo,:company_code)";
exports.getCompanyId = "SELECT company_id FROM company WHERE company_code = :company_code";
exports.uploadCompanyUser = "INSERT INTO user_company(user_id,company_id) VALUES(:user_id,:company_id)";
exports.uploadCompanyCatagory = "INSERT INTO company_category(company_id,category_id) VALUES(:company_id,:category_id)";
exports.getComapany = "SELECT * FROM company_category CC "+
"INNER JOIN company CN ON CC.company_id = CN.company_id "+
"INNER JOIN category CR ON CC.category_id = CR.category_id "+
"INNER JOIN category_translate CT ON CT.category_id = CR.category_id "+
"INNER JOIN user_company UC ON UC.company_id = CN.company_id "+
"INNER JOIN user US ON US.user_id = UC.user_id "+
"WHERE CT.lang_id = 1 AND CN.company_id = :company_id";
exports.checkCompanyCategoryExist  = "SELECT * FROM company_category WHERE company_id = :company_id AND category_id = :category_id";