const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware.js");

// router.get("/", (req, res) => {
//     res.status(200).send("Welcome to world best mern stack website by Sumit Raj Tiwari using router");
// });

router.route("/").get(authcontrollers.home);

router.route('/register').post(validate(signupSchema), authcontrollers.register);

router.route('/login').post(validate(loginSchema), authcontrollers.login);

router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router; // vvimp to export router