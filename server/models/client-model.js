const { mongoose } = require("mongoose");
const clientSchema = new mongoose.Schema({
  companyName: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  phone01: {
    type: String,
  },
  phone02: {
    type: String,
  },
  clientName: {
    type: String,
  },
  designation: {
    type: String,
  },
  qr: {
    type: String,
  },
  address: {
    type: String,
  },
  whatsapp01: {
    type: String,
  },
  location: {
    type: String,
  },
  whatsapp02: {
    type: String,
  },
  instagramLink: {
    type: String,
  },

  snapchatLink: {
    type: String,
  },
  youtubeLink: {
    type: String,
  },
  tiktokLink: {
    type: String,
  },
  twitterLink: {
    type: String,
  },
  facebookLink: {
    type: String,
  },
  googleReviewLink: {
    type: String,
  },
  website: {
    type: String,
  },

  email: {
    type: String,
  },
  youtubeShortsLink: {
    type: String,
  },
  googleMapLink: {
    type: String,
  },
  menuLink: {
    type: String,
  },
  logo: {
    type: String,
  },
  romanName: {
    type: String,
  },

  images: {
    type: String,
  },
  img01: {
    type: String,
  },
  img02: {
    type: String,
  },
  img03: {
    type: String,
  },
  img04: {
    type: String,
  },
  img05: {
    type: String,
  },
  img06: {
    type: String,
  },
  img07: {
    type: String,
  },
  img08: {
    type: String,
  },
  img09: {
    type: String,
  },
  img10: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Client = new mongoose.model("Client", clientSchema);
module.exports = Client;
