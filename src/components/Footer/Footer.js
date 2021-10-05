import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="left-container text-start">
                  <h1>Programing Club</h1>
                  <div className="icons-container d-flex text-center ">
                    <div className="icon">
                      <FontAwesomeIcon icon={faFacebookSquare} />
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faTwitterSquare} />
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faInstagramSquare} />
                    </div>
                  </div>
                  <p className="mt-4 ">
                    <small>
                    *You learn Programing because latest generation always depend on programing.
                    </small>
                  </p>
  
                  <p className="mt-5">
                    <small>Hasib © . All rights reserved.</small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-menu-container">
                  <ul>
                    <li className="footer-menu">Home</li>
                    <li className="footer-menu">Services</li>
                    <li className="footer-menu">Programs</li>
                    <li className="footer-menu">Contact us</li>
                    <li className="footer-menu"> About us</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-footer-container">
                  <h3>Sign up for the Join our Program</h3>
                  <input
                    className="footer-input bg-white"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <div className="phone d-flex align-items-center justify-content-center mt-4">
                    <div className="foter-phone-icon">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </div>
                    <div>
                      <h5>+1 8 800 555 35 35</h5>
                    </div>
                  </div>
                  <div className="map d-flex align-items-center justify-content-center">
                    <div className="foter-phone-icon">
                      <FontAwesomeIcon icon={faMapMarkedAlt} />
                    </div>
                    <div>
                      <p>
                      Rangunia Chittagong
                       
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Footer;