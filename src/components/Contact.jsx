import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"
import { FcVideoCall } from "react-icons/fc";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/*left side*/}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy To Contact Us</span>
          <span className="secondaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in iusto tempora dicta debitis odio, qui laboriosam hic itaque nulla voluptatibus. Quo doloribus tempora saepe quaerat repellat unde laboriosam error?</span>

          <div className="flexColStart contactMods">
            
            <div className="flexStart">
            <div className="flexColStart row">
              <div className="flexColCenter mod">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Call:</span>
                    <span>+91 993 8989 405</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>
            
            <div className="flexColStart row">
              <div className="flexColCenter mod">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span>WhatsApp:</span>
                    <span>+91 993 8989 405</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now:</div>
              </div>
            </div>
            </div>
            
            <div className="flexStart">
            <div className="flexColStart row">
              <div className="flexColCenter mod">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FcVideoCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Video:</span>
                    <span>+91 993 8989 405</span>
                  </div>
                </div>
                <div className="flexCenter button">VideoCall Now:</div>
              </div>
            </div>
            <div className="flexColStart row">
              <div className="flexColCenter mod">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaSquareInstagram size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span> Instagram :</span>
                    <span>@real_estate</span>
                  </div>
                </div>
                <div className="flexCenter button">Follow Us:</div>
              </div>
            </div>
            </div>
          </div>
        </div>
        {/*right side*/}
        <div className="c-right">
          <div className="img-container">
            <img src="./assets/contact.jpg" alt="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
