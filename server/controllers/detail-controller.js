const Detail = require("../models/client-model");

const details = async (req, res) => {
  try {
    const response = await Detail.find();
    if (!response) {
      res.status(404).json({ msg: "No service found" });
      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`services: ${error}`);
  }
};

module.exports = { details };
