const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
var multer  = require('multer')
const clientController = require("../controllers/client_controller");
var upload = multer({ dest: 'uploads/' });

const { fileUpload } = require('../util/multer_config');

const uploadReportCardPdf = fileUpload.array('avatar');

router.post("/login",clientController.login);
router.post("/register",clientController.register);
router.post("/upload",uploadReportCardPdf,clientController.upload);
router.get("/test",clientController.test);
module.exports = router;