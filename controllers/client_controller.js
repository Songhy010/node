exports.login = async (req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    const data ={username,password};
    res.send(data);
}

exports.register = async (req,res,next)=>{
    const company_name = req.body.company_name;
    const company_category = req.body.company_category;
    const company_address = req.body.company_address;
    const company_owner = req.body.company_owner;
    const company_owner_phone = req.body.company_owner_phone;

    const company_phone = req.body.company_phone;
    const company_email = req.body.company_email;
    const company_web = req.body.company_web;
    const company_facebook = req.body.company_facebook;

    const login_password = req.body.login_password;

    const cate = company_category[0];
    const data = {
        company_info:{
            company_name,
            company_category,
            company_address,
            company_owner,
            company_owner_phone},
        company_contact:{
            company_phone,
            company_email,
            company_web,
            company_facebook
        },
        login_password
    }
    res.send(data);
}

exports.upload = async (req,res,next)=>{
    const imgName = req.body.img_name;
    res.send({imgName});
}

exports.test = async (req,res,next)=>{
    res.send({test:"Hello"});
}