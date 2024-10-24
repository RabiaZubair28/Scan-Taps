const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller.js");
const { clientSchema } = require("../validators/auth-validator.js");
const validate = require("../middlewares/validate-middleware.js");

router.route("/").get(authcontrollers.home);
router.route("/client").post(validate(clientSchema), authcontrollers.client);
module.exports = router;
