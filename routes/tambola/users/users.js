const Joi = require("joi");
const { getDataWithLimit } = require("../../../helpers");

const getUserTickets = async (req, res) => {
    try {
        const id = req.userId;
        const { page = 1, limit = 10 } = req.query;

        // Fetch tickets from the database
        const result = await getDataWithLimit("ticket", { buyer: id }, "createdAt", parseInt(limit) * (parseInt(page) - 1), parseInt(limit))

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch tickets." });
    }
}


module.exports = getUserTickets;