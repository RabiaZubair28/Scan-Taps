import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { QRCodeCanvas} from 'qrcode.react';
import phone from "../assets/phone.png"
import address from "../assets/adress.png"
import whatsapp from "../assets/whatsapp.png"
import insta from "../assets/insta.png"
import snap from "../assets/snap.png"
import yt from "../assets/yt.png"
import tiktok from "../assets/tiktok.png"
import threads from "../assets/threads.png"
import fb from "../assets/fb.png"
import greview from "../assets/greview.png"
import website from "../assets/web.png"
import email from "../assets/gmail.png"
import ytshorts from "../assets/yt-shorts.png"
import locations from "../assets/location.png"
import eye from "../assets/eye.jpg"
// import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import "./client.css"
import { Helmet } from 'react-helmet';
import { IoQrCodeSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import {FacebookShareButton, TelegramShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from 'react-share'
import { ImCross } from "react-icons/im";
import axios from "axios";
export const Client = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const params = useParams();

  const { details } = useAuth();


const toDataURL = async (url) => {

  const response = await axios.get(url, { responseType: "blob" });
  const imageDataUrl = URL.createObjectURL(response.data);

  return imageDataUrl;
};


const downloadImg = async(link) => {
    // text content
    const a = document.createElement("a");
    a.href = await toDataURL(link);
    a.download = "QR.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

const currentPageUrl = window.location.href;

var companyName,
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
img10;

  for(let i=0; i < details.length; i++)
  {
    if(details[i].companyName == params.name)
      {
        companyName = details[i].companyName;
        name = details[i].name;
    }
  }

  console.log(companyName)
  console.log(name)
 
}
