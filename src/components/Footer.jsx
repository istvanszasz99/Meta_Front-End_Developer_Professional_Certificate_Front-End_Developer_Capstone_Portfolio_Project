import React from "react";
import FooterLogo from "../assets/images/footer-logo.png";

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="FooterContent">
          <img
            className="FooterLogo"
            src={FooterLogo}
            alt="logo"
          />
          <div className="FooterNavigation">
            <div className="FooterNavigationTitle">
              Navigation
              <p className="FooterNavigationList">
                  <a href="index.html">Home</a>
                  <a href="#about">About</a>
                  <a href="#menu">Menu</a>
                  <a href="#reservations">Reservations</a>
                  <a href="#orderOnline">Order Online</a>
                  <a href="#login">Login</a>
                  </p>
            </div>
          </div>
          <div className="FooterContact">
            <div className="FooterContactTitle">
              Contact
              <p className="FooterContactList">
                123 Lemon Lane,
                <br />
                Chicago, IL 60601
                <br />
                (312) 555-0199
                <br />
                info@littlelemon.com
              </p>
            </div>
          </div>

          <div className="FooterSocialmedialinks">
          <div className="FooterSocialmedialinksTitle">
            Social Media Links
            <p className="FooterSocialmedialinksList">
            <a href="index.html">Facebook</a>
            <a href="index.html">Instagram</a>
            <a href="index.html">Twitter</a>
            <a href="index.html">LinkedIn</a>
            <a href="index.html">TikTok</a>
            </p>
          </div>
          </div>
        </div>
      </footer>
    </>
  );
}
