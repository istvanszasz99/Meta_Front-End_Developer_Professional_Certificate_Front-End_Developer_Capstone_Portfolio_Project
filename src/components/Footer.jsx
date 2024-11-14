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
                  <a href="/">Home</a>
                  <a href="#about">About</a>
                  <a href="#menu">Menu</a>
                  <a href="/booking">Reservations</a>
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
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.instagram.com">Instagram</a>
            <a href="https://www.x.com">Twitter</a>
            <a href="https://www.linkedin.com">LinkedIn</a>
            <a href="https://www.tiktok.com">TikTok</a>
            </p>
          </div>
          </div>
        </div>
      </footer>
    </>
  );
}
