const express = require("express");
const { details } = require("../controllers/detail-controller");
const Client = require("../models/client-model");
const router = express.Router();

console.log("Details controller:", details);
router.route("/detail").get(details);
// router.route("/update/:id").put(async (req, res) => {
//   const { id } = req.params;
//   const {
//     name,
//     romanName,
//     clientName,
//     designation,
//     phone01,
//     phone02,
//     description,
//     email,
//     whatsapp01,
//     whatsapp02,
//     instagramLink,
//     snapchatLink,
//     youtubeLink,
//     tiktokLink,
//     twitterLink,
//     facebookLink,
//     googleReviewLink,
//     website,
//     youtubeShortsLink,
//     googleMapLink,
//     menuLink,
//     location,
//     address,
//   } = req.body; // The new name from the frontend

//   try {
//     // Update the name field of the specific document in MongoDB
//     const updatedClient = await Client.findByIdAndUpdate(
//       id,
//       {
//         name,
//         romanName,
//         clientName,
//         designation,
//         phone01,
//         phone02,
//         description,
//         email,
//         whatsapp01,
//         whatsapp02,
//         instagramLink,
//         snapchatLink,
//         youtubeLink,
//         tiktokLink,
//         twitterLink,
//         facebookLink,
//         googleReviewLink,
//         website,
//         youtubeShortsLink,
//         googleMapLink,
//         menuLink,
//         location,
//         address,
//       },
//       { new: true } // Returns the updated document
//     );

//     if (!updatedClient) {
//       return res.status(404).json({ message: "Client not found" });
//     }

//     res.json(updatedClient);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });
// router.route("/add/:id").put(async (req, res) => {
//   const { id } = req.params;
//   const {
//     name,
//     romanName,
//     clientName,
//     designation,
//     phone01,
//     phone02,
//     description,
//     email,
//     whatsapp01,
//     whatsapp02,
//     instagramLink,
//     snapchatLink,
//     youtubeLink,
//     tiktokLink,
//     twitterLink,
//     facebookLink,
//     googleReviewLink,
//     website,
//     youtubeShortsLink,
//     googleMapLink,
//     menuLink,
//     location,
//     address,
//   } = req.body; // The new name from the frontend

//   try {
//     // Update the name field of the specific document in MongoDB
//     const addClient = await Client.findByIdAndUpdate(
//       id,
//       {
//         name,
//         romanName,
//         clientName,
//         designation,
//         phone01,
//         phone02,
//         description,
//         email,
//         whatsapp01,
//         whatsapp02,
//         instagramLink,
//         snapchatLink,
//         youtubeLink,
//         tiktokLink,
//         twitterLink,
//         facebookLink,
//         googleReviewLink,
//         website,
//         youtubeShortsLink,
//         googleMapLink,
//         menuLink,
//         location,
//         address,
//       },
//       { new: true } // Returns the updated document
//     );

//     if (!addClient) {
//       return res.status(404).json({ message: "Client not found" });
//     }

//     res.json(addClient);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });
module.exports = router;
