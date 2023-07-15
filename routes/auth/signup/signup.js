const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET } = require("../../../config");
const { insertNewDocument, findOne } = require("../../../helpers");
const Joi = require("joi");

const signUpUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const check_user_exist = await findOne("user", { email });
    if (check_user_exist) {
      return res
        .status(404)
        .send({ status: 404, message: "User already exist!" });
    }

    const new_user = {
      ...req.body,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    };
    const user = await insertNewDocument("user", new_user);
    let token = jwt.sign({ id: new_user._id }, SECRET);
    user.password = undefined;
    return res.status(200).send({ status: 200, user, token });
  } catch (e) {
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = signUpUser;
