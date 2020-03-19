exports.upload = async (req,res,next)=>{
    const imgName = req.files;
    res.send(imgName);
}

exports.test = async (req,res,next)=>{
    res.send({test:"Hello"});
}