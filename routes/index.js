const express = require("express");
const auth = require("./auth");
const tickets = require("./tambola");
const router = express.Router();

// AUTH Routes * /api/auth/*
router.use("/auth", auth);
router.use("/tambola", tickets);

module.exports = router;
