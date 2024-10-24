const express = require("express");
const details = require("../controllers/detail-controller");

const router = express.Router();

router.route("/detail").get(details);

module.exports = router;
