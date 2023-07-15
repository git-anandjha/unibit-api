const jwt = require("jsonwebtoken");
const Config = require("../../config");
const { findOne } = require("../../helpers");

const tokenVerification = (req, res, next) => {
  let token = req.headers["token"];
  if (!token) {
    return res.status(404).send({ status: 404, message: "No token provided!" });
  }
  jwt.verify(token, Config.SECRET, async (err, decoded) => {
    if (err) {
      return res
        .status(400)
        .send({ status: 400, message: "Token Unauthorized!" });
    }
    console.log(decoded)
    const isUserExist = await findOne("user", { id: decoded.id })

    if (!isUserExist) {
      return res
        .status(404)
        .send({ status: 404, message: "User does not exist." });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = { tokenVerification: tokenVerification };
