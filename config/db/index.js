const mongoose = require("mongoose");
const { CON_URL } = require("..");

mongoose.connect(
  `${CON_URL}`
);

module.exports = mongoose;
