import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useEffect } from "react";
import { QRCodeCanvas} from 'qrcode.react';
import phone from "../assets/phone.png"
import addressImg from "../assets/adress.png"
import whatsapp from "../assets/whatsapp.png"
import insta from "../assets/insta.png"
import snap from "../assets/snap.png"
import yt from "../assets/yt.png"
import tiktok from "../assets/tiktok.png"
import threads from "../assets/threads.png"
import fb from "../assets/fb.png"
import greview from "../assets/greview.png"
import websiteImg from "../assets/web.png"
import emailImg from "../assets/gmail.png"
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
import vCard from "vcards-js"
import {FacebookShareButton, TelegramShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from 'react-share'
import { ImCross } from "react-icons/im";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";
export const Client = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const params = useParams();
  console.log(params)

  const { details } = useAuth();
  console.log(details)


const toDataURL = async (url) => {

  const response = await axios.get(url, { responseType: "blob" });
  const imageDataUrl = URL.createObjectURL(response.data);

  return imageDataUrl;
};


var [visitCount, setVisitCount] = useState(0);
var clientId = "6718de5303653c2e096b599f"; // Used it for a Client make it dynamic by fetching the current client id

  useEffect(() => {
    const fetchAndIncrementVisitCount = async () => {
      try {
        console.log("Fetching visit count...");
        const incrementResponse = await axios.post(`https://scantaps.onrender.com/api/visit/${clientId}`);
        console.log("Current visit count fetched.");
        setVisitCount(incrementResponse.data.count);
        console.log(`Visit count for client ${clientId} incremented. New count:`, incrementResponse.data.count);
      } catch (error) {
        console.error("Error fetching or incrementing visit count:", error);
      }
    };

    fetchAndIncrementVisitCount();
  }, [clientId]);



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



var _id, companyName,
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
        description = details[i].description;
        phone01 = details[i].phone01;
        phone02 = details[i].phone02;
        address = details[i].address;
        clientName = details[i].clientName;
        designation = details[i].designation;
        whatsapp01 = details[i].whatsapp01;
        whatsapp02 = details[i].whatsapp02;
        instagramLink = details[i].instagramLink;
        snapchatLink = details[i].snapchatLink;
        youtubeLink = details[i].youtubeLink;
        tiktokLink = details[i].tiktokLink;
        twitterLink = details[i].twitterLink;
        facebookLink = details[i].facebookLink;
        googleReviewLink = details[i].googleReviewLink;
        website = details[i].website;
        email = details[i].email;
        qr = details[i].qr;
        youtubeShortsLink = details[i].youtubeShortsLink;
        googleMapLink = details[i].googleMapLink;
        menuLink = details[i].menuLink;
        images = details[i].images;
        logo = details[i].logo;
        location = details[i].location;
        romanName = details[i].romanName;
        password = details[i].password;
        img01 = details[i].img01;
        img02 = details[i].img02;
        img03 = details[i].img03;
        img04 = details[i].img04;
        img05 = details[i].img05;
        img06 = details[i].img06;
        img07 = details[i].img07;
        img08 = details[i].img08;
        img09 = details[i].img09;
        img10 = details[i].img10;
    }
  }

  console.log(companyName)
  console.log(name)

  if(companyName == params.name)
  {      return(
  
      <div>
       
        { show && <div className="qr-modal"
        style={{ display: 'block', position: 'initial' }}
      >
        
        
          <ImCross className="close" onClick={handleClose} />
         
            <div className="qr-div">
          <QRCodeCanvas id="qr" className="qr"  value={window.location.href} />
          </div>
          <div className="qr2-div">
          <div className="qr-btn2" onClick={()=>{
                    downloadImg(qr)
                    handleClose()
        }} >
              <FaDownload size={30} color="white" />
          </div>
     </div>
      </div>}
      { !show && <section className="main">
  
        <Helmet>
        <title>{name}</title>
        </Helmet>
          <img src={images} className="bg-img" alt=""></img>
          <div className="logo-div">
          <img src={logo} className="logo22" alt=""></img>
          </div>
          <div>
                <div className="eng-heading">{name}</div>
              
                <div className="roman-heading">{romanName}</div>
  
                <div className="eye">
                  <img src={eye} height={20}></img>
                  <span>&nbsp;{visitCount}</span>
                </div>
                <div className="info">
                { (clientName!= "") &&<div className="detail02">{clientName}</div>}
                { (designation!= "") &&<div className="detail">{designation}</div>}
                <div className="detail"> <a href={`tel:${phone01}`} className="link">{phone01}</a> /  <a href={`tel:${phone02}`} className="link">{phone02}</a></div>
                <a href={`mailto:${email}`} className="link"><div className="detail">{email}</div></a>
                </div>
                <div className="description">{description}</div>
  
          </div>
          <hr />
          <div className="social-segment">
          { (phone01 != "") && <a href={`tel:${phone01}`} className="link"><div className="socials">
              <img src={phone} height={50} width={50}></img>
              <div >
                <p className="tag-heading">Phone / الهاتف</p>
                <p className="details">{phone01}</p>
              </div>
            </div></a>}
            { (phone02!= "") &&<a href={`tel:${phone02}`} className="link"><div className="socials">
              <img src={phone} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Phone / الهاتف</p>
                <p className="details">{phone02}</p>
              </div>
            </div></a>}
            { (googleMapLink != "") && <a href={`${googleMapLink}`} className="link">
              <div className="socials">
              <img src={addressImg} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Address / العنوان</p>
                <p className="details">{address}</p>
              </div>
            </div></a>}
            { (whatsapp01 != "") &&<a href={`https://wa.me/${whatsapp01}`} className="link"><div className="socials">
              <img src={whatsapp} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Whatsapp / واتساب</p>
                <p className="details">{whatsapp01}</p>
              </div>
            </div></a>}
            { (whatsapp02 != "") &&<a href={`https://wa.me/${whatsapp02}`} className="link"><div className="socials" >
              <img src={whatsapp} height={50} width={50}></img>
              <div >
                <p className="tag-heading">Whatsapp / واتساب</p>
                <p className="details">{whatsapp02}</p>
              </div>
            </div></a>}
            { (instagramLink != "") &&<a href={`${instagramLink}`} className="link"><div className="socials">
              <img src={insta} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Instagram / انستغرام
                </p>
                <p className="details">{instagramLink}</p>
              </div>
            </div></a>}
            { (snapchatLink != "") &&<a href={`${snapchatLink}`} className="link"><div className="socials">
              <img src={snap} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Snapchat / سناب شات</p>
                <p className="details">{snapchatLink}</p>
              </div>
            </div></a>}
            { (youtubeLink != "") &&<a href={`${youtubeLink}`} className="link"><div className="socials">
              <img src={yt} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Youtube / موقع يوتيوب</p>
                <p className="details">{youtubeLink}</p>
              </div>
            </div></a>}
            { (tiktokLink != "") &&<a href={`${tiktokLink}`} className="link"><div className="socials">
              <img src={tiktok} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Tiktok / تيك توك</p>
                <p className="details">{tiktokLink}</p>
              </div>
            </div></a>}
            { (twitterLink != "") &&<a href={`${twitterLink}`} className="link"><div className="socials">
              <img src={threads} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Twitter / تويتر</p>
                <p className="details">{twitterLink}</p>
              </div>
            </div></a>}
            { (facebookLink != "") &&<a href={`${facebookLink}`} className="link"><div className="socials">
              <img src={fb} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Facebook / فيسبوك</p>
                <p className="details">{facebookLink}</p>
              </div>
            </div></a>}
            { (googleReviewLink != "") &&<a href={`${googleReviewLink}`} className="link"><div className="socials">
              <img src={greview} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Google Reviews / تقييمات جوجل
                </p>
                <p className="details">{googleReviewLink}</p>
              </div>
            </div></a>}
            
            { (website != "") &&<a href={`${website}`} className="link"><div className="socials">
              <img src={websiteImg} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Website /رابط الموقع</p>
                <p className="details">{website}</p>
              </div>
            </div></a>}
            { (email != "") &&<a href={`mailto:${email}`} className="link"><div className="socials">
              <img src={emailImg} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Email /جي ميل</p>
                <p className="details">{email}</p>
              </div>
            </div></a>}
            { (youtubeShortsLink != "") &&<a href={`${youtubeShortsLink}`} className="link"><div className="socials">
              <img src={ytshorts} height={50} width={50}></img>
              <div >
                <p className="tag-heading">YouTube Shorts / شورت يوتيوب</p>
                <p className="details">{youtubeShortsLink}</p>
              </div>
            </div></a>}
            { (googleMapLink != "") &&<a href={`${googleMapLink}`} className="link"><div className="socials">
              <img src={locations} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Location / خرائط جوجل</p>
                <p className="details">{googleMapLink}</p>
              </div>
            </div></a>}
          </div>
          <hr />
          <p className="image-gallery-heading">Image Gallery</p>
          <hr />
          <div className="image-gallery">
          { (img01 != "") && <a href={img01}><img src={img01} className="image"></img></a>}
          { (img02 != "") &&  <a href={img02}><img src={img02} className="image"></img></a>}
          { (img03 != "") && <a href={img03}><img src={img03} className="image"></img></a>}
          { (img04 != "") && <a href={img04}><img src={img04} className="image"></img></a>}
          { (img05 != "") &&  <a href={img05}><img src={img05} className="image"></img></a>}
          { (img06 != "") && <a href={img06}><img src={img06} className="image"></img></a>}
          { (img07 != "") && <a href={img07}><img src={img07} className="image"></img></a>}
          { (img08 != "") &&  <a href={img08}><img src={img08} className="image"></img></a>}
          { (img09 != "") &&  <a href={img09}><img src={img09} className="image"></img></a>}
          { (img10 != "") &&  <a href={img10}><img src={img10} className="image"></img></a>}
          </div>
          <hr />
          <p className="image-gallery-heading">Location</p>
          <hr />
          <div className="location">
          <iframe src={location} width="100%" height="300" allowfullscreen="" loading="lazy"></iframe> 
          </div>
          <div className="qr-section">
              <div className="qr-btn" onClick={handleShow} >
              <IoQrCodeSharp size={35} color="white" />
              </div>
       
              <div className="qr-btn" onClick={
               ()=>{ downloadImg(window.location.href)}
              } value="download">
              <FaDownload size={30} color="white" />
              </div>
          </div>
  
         <hr />
          <p className="image-gallery-heading">Share On</p>
          <hr />
          {/* <ShareSocial url="localhost.com" socialTypes={["facebook"]} /> */}
          <div className="social-section">
              <div className="social-btn" >
              <FacebookShareButton url={currentPageUrl} quote="please share this" hashtag={`Welcome to ${companyName}. Get to know us at ${currentPageUrl}`}>
              <TiSocialFacebook size={30} color="white" />
              </FacebookShareButton>
              
              </div>
              <div className="social-btn" >
              <TwitterShareButton url={currentPageUrl} quote="please share this" hashtag={`Welcom to ${companyName}. Get to know us at ${currentPageUrl}`}>
              <TiSocialTwitter size={30} color="white" /></TwitterShareButton>
              </div>
              <div className="social-btn" >
              <LinkedinShareButton url={currentPageUrl} quote="please share this" hashtag={`Welcom to ${companyName}. Get to know us at ${currentPageUrl}`}>
              <TiSocialLinkedin size={30} color="white" /></LinkedinShareButton>
              </div>
              <div className="social-btn" >
              <TelegramShareButton url={currentPageUrl} quote="please share this" hashtag={`Welcom to ${companyName}. Get to know us at ${currentPageUrl}`}>
              <FaTelegramPlane size={30} color="white" /></TelegramShareButton>
              </div>
              <div className="social-btn" >
              <WhatsappShareButton url={currentPageUrl} quote="please share this" hashtag={`Welcom to ${companyName}. Get to know us at ${currentPageUrl}`}>
              <IoLogoWhatsapp size={30} color="white" /></WhatsappShareButton>
              </div>
          </div>
          <p className="label">Copyright © <span className="company">{companyName}</span>. All Rights Reserved.</p>
       
    
    {/* <iframe src={details[i].location} width="600" height="450" allowfullscreen="" loading="lazy"></iframe> */}
          </section>
          }
          </div>
        );
      }
      else{
        return(
        <div className="spin">
            <ScaleLoader
            color={"white"}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          </div>);
      }
      }

