import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="Nav">
        <ul className="Link">
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
      </nav>
    </>
  );
}
