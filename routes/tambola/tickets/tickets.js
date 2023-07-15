const Joi = require("joi");
const { insertNewDocument } = require("../../../helpers");
const crypto = require("crypto")

const generate = async (req, res) => {
    try {
        const { numberOfTickets } = req.body;
        // get id from verified token
        const id = req.userId
        // Generate tickets logic here
        const generatedTickets = generateTickets(numberOfTickets);

        // Save tickets to the database
        const tickets = [];
        for (let i = 0; i < generatedTickets.length; i++) {
            const ticketData = {
                buyer: id,
                ticket: generatedTickets[i],
                ticketNumber: `ticket${uuidv4()}`,
            };
            const newTicket = await insertNewDocument("ticket", ticketData)
            tickets.push(newTicket);
        }
        res.status(200).json({ tickets });
    } catch (error) {
        console.error(JSON.stringify(error));
        res.status(500).json({ error: "Failed to generate tickets." });
    }
}

// Generate Tambula tickets function
function generateTickets(numberOfTickets) {
    const tickets = [];

    // Generate tickets based on the given number of tickets
    for (let i = 0; i < numberOfTickets; i++) {
        const ticket = generateTicket();
        tickets.push(ticket);
    }

    return tickets;
}

// Generate a single Tambula ticket
function generateTicket() {
    const ticket = [];

    // Generate numbers 1 to 90 in an array
    const numbers = Array.from({ length: 90 }, (_, i) => i + 1);

    // Shuffle the numbers randomly
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Divide the shuffled numbers into columns
    const columns = [];
    for (let i = 0; i < 9; i++) {
        columns.push(numbers.slice(i * 10, (i + 1) * 10));
    }

    // Build the ticket rows
    for (let row = 0; row < 3; row++) {
        const ticketRow = [];

        // Build the row by selecting one number from each column
        for (let col = 0; col < 9; col++) {
            const column = columns[col];
            let num;

            // Check if the column has any remaining numbers
            if (column.length > row) {
                num = column[row];
            } else {
                num = 0; // Fill blank cell with zero
            }

            ticketRow.push(num);
        }

        // Sort the row in ascending order
        ticketRow.sort((a, b) => a - b);

        ticket.push(ticketRow);
    }

    return ticket;
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


module.exports = generate;