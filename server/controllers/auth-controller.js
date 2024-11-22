const Client = require("../models/client-model");
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to Scan Tap using controllers");
  } catch (error) {
    console.log(error);
  }
};

const client = async (req, res) => {
  try {
    console.log(req.body);
    const {
      companyName,
      name,
      description,
      phone01,
      phone02,
      address,
      clientName,
      designation,
      whatsapp01,
      whatsapp02,
      instagramLink,
      snapchatLink,
      youtubeLink,
      tiktokLink,
      twitterLink,
      facebookLink,
      linkedinLink,
      googleReviewLink,
      website,
      email,
      qr,
      youtubeShortsLink,
      googleMapLink,
      menuLink,
      images,
      logo,
      location,
      romanName,
      password,
      img01,
      img02,
      img03,
      img04,
      img05,
      img06,
      img07,
      img08,
      img09,
      img10,
      flag,
      visitCount,
    } = req.body;

    const userCreated = await Client.create({
      companyName,
      name,
      description,
      phone01,
      phone02,
      location,
      qr,
      clientName,
      designation,
      address,
      whatsapp01,
      whatsapp02,
      instagramLink,
      snapchatLink,
      youtubeLink,
      linkedinLink,
      tiktokLink,
      twitterLink,
      facebookLink,
      googleReviewLink,
      website,
      email,
      youtubeShortsLink,
      googleMapLink,
      menuLink,
      logo,
      images,
      romanName,
      password,
      img01,
      img02,
      img03,
      img04,
      img05,
      img06,
      img07,
      img08,
      img09,
      img10,
      flag,
      visitCount,
    });

    res.status(201).json({
      msg: "client making successful",
    });
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await Client.findOne({
      email,
    });

    console.log(userExist._id);
    return res.redirect(`/api/auth/client/${userExist.email}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, client, signin };
