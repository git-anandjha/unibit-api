const express = require("express");
const router = express.Router();
const signUpUser = require("./signup/signup");
const loginUser = require("./login/login");
const { validate } = require("../../middleware")
const { signUp, login } = require("../../validators/auth.validator")


router.post("/login", validate("body", login), loginUser);
router.post("/register", validate("body", signUp), signUpUser);

module.exports = router;
