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
  console.log(params)

  const { details } = useAuth();
  console.log(details)


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


  for(let i=0; i < details.length; i++)
  {
    const companyName = details[i].companyName;
    console.log(companyName)

    if(details[i].companyName == params.name)
      {
        console.log(details[i])
        console.log("yes")
        console.log("hello",details[i].img01)
        console.log(window.location.href)
        return(
  
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
                    downloadImg(details[i].qr)
                    handleClose()
        }} >
              <FaDownload size={30} color="white" />
          </div>
     </div>
      </div>}
      { !show && <section className="main">
  
        <Helmet>
        <title>{details[i].name}</title>
        </Helmet>
          <img src={details[i].images} className="bg-img" alt=""></img>
          <div className="logo-div">
          <img src={details[i].logo} className="logo22" alt=""></img>
          </div>
          <div>
                <div className="eng-heading">{details[i].name}</div>
              
                <div className="roman-heading">{details[i].romanName}</div>
  
                <div className="eye">
                  <img src={eye} height={20}></img>
                  <span>&nbsp;1102</span>
                </div>
                <div className="info">
                <div className="detail02">{details[i].clientName}</div>
                <div className="detail">{details[i].designation}</div>
                <div className="detail"> <a href={`tel:${details[i].phone01}`} className="link">{details[i].phone01}</a> /  <a href={`tel:${details[i].phone02}`} className="link">{details[i].phone02}</a></div>
                <a href="mailto:scanntap94@gmail.com" className="link"><div className="detail">{details[i].email}</div></a>
                </div>
                <div className="description">{details[i].description}</div>
  
          </div>
          <hr />
          <div className="social-segment">
          <a href={`tel:${details[i].phone01}`} className="link"><div className="socials">
              <img src={phone} height={50} width={50}></img>
              <div >
                <p className="tag-heading">Phone / الهاتف</p>
                <p className="details">{details[i].phone01}</p>
              </div>
            </div></a>
            <a href={`tel:${details[i].phone02}`} className="link"><div className="socials">
              <img src={phone} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Phone / الهاتف</p>
                <p className="details">{details[i].phone02}</p>
              </div>
            </div></a>
            <a href={`${details[i].googleMapLink}`} className="link">
              <div className="socials">
              <img src={address} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Address / العنوان</p>
                <p className="details">{details[i].address}</p>
              </div>
            </div></a>
            <a href={`https://wa.me/${details[i].whatsapp01}`} className="link"><div className="socials">
              <img src={whatsapp} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Whatsapp / واتساب</p>
                <p className="details">{details[i].whatsapp01}</p>
              </div>
            </div></a>
            <a href={`https://wa.me/${details[i].whatsapp02}`} className="link"><div className="socials" >
              <img src={whatsapp} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Whatsapp / واتساب</p>
                <p className="details">{details[i].whatsapp02}</p>
              </div>
            </div></a>
            <a href={`${details[i].instagramLink}`} className="link"><div className="socials">
              <img src={insta} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Instagram / انستغرام
                </p>
                <p className="details">{details[i].instagramLink}</p>
              </div>
            </div></a>
            <a href={`${details[i].snapchatLink}`} className="link"><div className="socials">
              <img src={snap} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Snapchat / سناب شات</p>
                <p className="details">{details[i].snapchatLink}</p>
              </div>
            </div></a>
            <a href={`${details[i].youtubeLink}`} className="link"><div className="socials">
              <img src={yt} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Youtube / موقع يوتيوب</p>
                <p className="details">{details[i].youtubeLink}</p>
              </div>
            </div></a>
            <a href={`${details[i].tiktokLink}`} className="link"><div className="socials">
              <img src={tiktok} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Tiktok / تيك توك</p>
                <p className="details">{details[i].tiktokLink}</p>
              </div>
            </div></a>
            <a href={`${details[i].twitterLink}`} className="link"><div className="socials">
              <img src={threads} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Twitter / تويتر</p>
                <p className="details">{details[i].twitterLink}</p>
              </div>
            </div></a>
            <a href={`${details[i].facebookLink}`} className="link"><div className="socials">
              <img src={fb} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Facebook / فيسبوك</p>
                <p className="details">{details[i].facebookLink}</p>
              </div>
            </div></a>
            <a href={`${details[i].googleMapLink}`} className="link"><div className="socials">
              <img src={greview} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Google Reviews / تقييمات جوجل
                </p>
                <p className="details">{details[i].googleReviewLink}</p>
              </div>
            </div></a>
            
            <a href={`${details[i].website}`} className="link"><div className="socials">
              <img src={website} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Website /رابط الموقع</p>
                <p className="details">{details[i].website}</p>
              </div>
            </div></a>
            <a href={`mailto:${details[i].email}`} className="link"><div className="socials">
              <img src={email} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Email /جي ميل</p>
                <p className="details">{details[i].email}</p>
              </div>
            </div></a>
            <a href={`${details[i].youtubeShortsLink}`} className="link"><div className="socials">
              <img src={ytshorts} height={50} width={50}></img>
              <div >
                <p className="tag-heading">YouTube Shorts / شورت يوتيوب</p>
                <p className="details">{details[i].youtubeShortsLink}</p>
              </div>
            </div></a>
            <a href={`${details[i].googleMapLink}`} className="link"><div className="socials">
              <img src={locations} height={50} width={50}></img>
              <div>
                <p className="tag-heading">Location / خرائط جوجل</p>
                <p className="details">{details[i].googleMapLink}</p>
              </div>
            </div></a>
          </div>
          <hr />
          <p className="image-gallery-heading">Image Gallery</p>
          <hr />
          <div className="image-gallery">
            <a href={details[i].img01}><img src={details[i].img01} className="image"></img></a>
            <a href={details[i].img02}><img src={details[i].img02} className="image"></img></a>
            <a href={details[i].img03}><img src={details[i].img03} className="image"></img></a>
            <a href={details[i].img04}><img src={details[i].img04} className="image"></img></a>
            <a href={details[i].img05}><img src={details[i].img05} className="image"></img></a>
            <a href={details[i].img06}><img src={details[i].img06} className="image"></img></a>
            <a href={details[i].img07}><img src={details[i].img07} className="image"></img></a>
            <a href={details[i].img08}><img src={details[i].img08} className="image"></img></a>
            <a href={details[i].img09}><img src={details[i].img09} className="image"></img></a>
            <a href={details[i].img10}><img src={details[i].img10} className="image"></img></a>
          </div>
          <hr />
          <p className="image-gallery-heading">Location</p>
          <hr />
          <div className="location">
          <iframe src={details[i].location} width="100%" height="300" allowfullscreen="" loading="lazy"></iframe> 
          </div>
          <div className="qr-section">
              <div className="qr-btn" onClick={handleShow} >
              <IoQrCodeSharp size={35} color="white" />
              </div>
       
              <div className="qr-btn" onClick={()=>{
                downloadImg(details[i].qr)
              }} value="download">
              <FaDownload size={30} color="white" />
              </div>
          </div>
  
          <hr />
          <p className="image-gallery-heading">Share On</p>
          <hr />
          {/* <ShareSocial url="localhost.com" socialTypes={["facebook"]} /> */}
          <div className="social-section">
              <div className="social-btn" >
              <FacebookShareButton url={currentPageUrl} quote="please share this" hashtag={`Welcom to ${companyName}. Get to know us at ${currentPageUrl}`}>
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
          <p className="label">Copyright © <span className="company">{details[i].companyName}</span>. All Rights Reserved.</p>
       
    
    {/* <iframe src={details[i].location} width="600" height="450" allowfullscreen="" loading="lazy"></iframe> */}
          </section>}
          </div>
        )
    
      }
      else{
        return(
          <div className=" content">
          <h2 className="header" style={{ color:"white", textAlign:"center"}}>404</h2>
          <h4 style={{ color:"white", textAlign:"center"}}>Sorry! Page not found</h4>
          <p style={{ color:"white", textAlign:"center"}}>
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
        </div>
        )
      }
     
   
  }


}
