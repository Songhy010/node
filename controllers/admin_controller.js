const models = require('../models/model');

exports.uploadCategory = async (req,res,next)=>{
    try {
        const category_id = req.body.category_id;
        const category_title_km = req.body.category_title_km;
        const category_desc_km = req.body.category_desc_km;
        const category_title = req.body.category_title;
        const category_desc = req.body.category_desc;
        const data = await models.uploadCategory(category_id,category_title_km,category_desc_km,category_title,category_desc);
        res.send(data);
    } catch (error) {
        const err = Error("Bad Request!");
        err.code = 400;
        next(err);
    }
}