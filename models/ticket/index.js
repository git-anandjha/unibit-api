const mongoose = require("mongoose");
const ticketsSchema = require("./tickets-schema");

const tickets = mongoose.model("tickets", ticketsSchema);

module.exports = tickets;
