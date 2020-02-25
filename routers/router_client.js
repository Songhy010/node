const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const clientController = require("../controllers/client_controller");

router.post("/login",clientController.login);
router.post("/register",clientController.register);

module.exports = router;