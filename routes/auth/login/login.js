const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET } = require("../../../config");
const { findOne } = require("../../../helpers");
const Joi = require("joi");


const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const populatedUser = await findOne("user", { email });
    console.log(populatedUser)
    const user = populatedUser;
    if (user) {
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return res
          .status(404)
          .send({ status: 400, message: "Invalid Email or Password!" });
      }
      user.password = undefined;
      var token = jwt.sign({ id: user._id }, SECRET);
      res.status(200).send({ status: 200, user, token });
    } else {
      return res
        .status(404)
        .send({ status: 404, message: "User does not exist!" });
    }
  } catch (e) {
    res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = loginUser;
