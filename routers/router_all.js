const express = require("express");
const basicAuth = require('express-basic-auth');
const bcrypt = require("bcrypt");
const multer  = require('multer');
const router = express.Router();
const allController = require("../controllers/all_controller");
const jwt = require('../util/jwt');

var upload = multer({ dest: 'uploads/' });
const { fileUpload } = require('../util/multer_config');
const uploadReportCardPdf = fileUpload.array('avatar');

const basic = basicAuth({users:{'admin':'qweasdzxc123!@#'}})

router.post("/register",basic,allController.register);
router.post("/login",basic,allController.login);
router.post("/change_password",jwt,allController.changePassword);
router.post("/update_profile",jwt,allController.updateProfile);
router.post("/get_category",jwt,allController.getCategory);


router.get("/test",jwt,allController.test);

module.exports = router;