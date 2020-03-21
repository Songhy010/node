const express = require("express");
const router = express.Router();
const jwt = require('../util/jwt');
const multer  = require('multer');
const controllerAdmin = require('../controllers/admin_controller');

var upload = multer({ dest: 'uploads/' });
const { fileUpload } = require('../util/multer_config');
const uploadReportCardPdf = fileUpload.array('avatar');

router.post("/upload_category",controllerAdmin.uploadCategory);

module.exports = router;