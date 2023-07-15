const Joi = require("joi");

const numberOfTickets = Joi.object({
    numberOfTickets: Joi.number().required(),
});

const paginatinValidator = Joi.object({
    page: Joi.number().optional().min(1),
    limit: Joi.number().optional().min(1),
});

module.exports = { numberOfTickets, paginatinValidator }