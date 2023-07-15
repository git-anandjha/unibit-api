const validate = (dataLocation, joiSchema) => (req, res, next) => {
    const data = req[dataLocation];

    const { error } = joiSchema.validate(data);
    if (error) {
        const errorMessage = error.details.map((detail) => detail.message).join(", ");
        return res.status(400).json({ message: errorMessage });
    }

    next();
};

module.exports = validate;
