const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
var multer  = require('multer')
const clientController = require("../controllers/client_controller");
var upload = multer({ dest: 'uploads/' });

router.post("/login",clientController.login);
router.post("/register",clientController.register);
router.post("/upload",upload.single('avatar'),clientController.upload);
router.get("/test",upload.single('avatar'),clientController.test);
module.exports = router;