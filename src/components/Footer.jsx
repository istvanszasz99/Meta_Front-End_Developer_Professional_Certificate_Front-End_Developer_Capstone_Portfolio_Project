import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <img src="https://via.placeholder.com/162x284" alt="logo" />
        </div>
        <div>
          <div>
            Navigation
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#reservations">Reservations</a>
              </li>
              <li>
                <a href="#orderOnline">Order Online</a>
              </li>
              <li>
                <a href="#login">Login</a>
              </li>
            </ul>
          </div>
          <div>
            Contact
            <p>
              123 Lemon Lane,
              <br />
              Chicago, IL 60601
              <br />
              (312) 555-0199
              <br />
              info@littlelemon.com
            </p>
          </div>
          <div>
            Social Media Links
            <ul>
              <li>
                <a href="index.html">Facebook</a>
              </li>
              <li>
                <a href="index.html">Instagram</a>
              </li>
              <li>
                <a href="index.html">Twitter</a>
              </li>
              <li>
                <a href="index.html">LinkedIn</a>
              </li>
              <li>
                <a href="index.html">TikTok</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
