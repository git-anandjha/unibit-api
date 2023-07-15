const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
    {
        buyer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        ticket: {
            type: [[Number]],
            required: true,
        },
        ticketNumber: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

module.exports = ticketSchema
