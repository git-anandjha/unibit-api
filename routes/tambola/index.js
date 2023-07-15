const express = require("express");
const router = express.Router();
const tickets = require("./tickets/tickets");
const users = require("./users/users");
const { tokenVerification, validate } = require("../../middleware")
const { numberOfTickets, paginatinValidator } = require("../../validators/ticket.validator")


router.post("/create", tokenVerification, validate("body", numberOfTickets), tickets);
router.get("/ticket-list", tokenVerification, validate("query", paginatinValidator), users);

module.exports = router;
