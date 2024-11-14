import React from "react";
import HeroPicture from "../assets/images/restauranfood.png";
import AboutPic from "../assets/images/about-image-mask.png";
import SpecialsCards from "./SpecialsCards";
import TestemonialsCards from "./TestemonialsCards";

export default function Main() {
  return (
    <>
      <section className="Hero">
        <div className="HeroContent">
          <div className="HeroText">
            <h1 className="HeroTitle">
              <span>
                Little Lemon
                <br />
              </span>
              <span>Chicago</span>
            </h1>
            <p className="HeroParagraph">
              At Little Lemon, we believe that every meal should be a
              celebration. Nestled in the heart of Chicago, our cozy eatery
              serves up vibrant dishes crafted with locally sourced ingredients
              and a twist of creativity.
            </p>
            <a href="/booking"><button className="ButtonPrimary">Reserve a Table</button></a>
          </div>
          <img src={HeroPicture} alt="pic" className="HeroPicture" />
        </div>
      </section>
      <section className="Specials" id="menu">
        <div className="SpecialsHeader">
          <h2 className="SpecialsTitle">Specials</h2>
          <a href="#menu"><button className="ButtonPrimary">Online Menu</button></a>
        </div>
        <div className="SpecialsCards">
          <SpecialsCards />
        </div>
      </section>
      <section className="Testimonials">
        <div className="TestimonialsContent">
          <h2 className="TestimonialsTitle">Testimonials</h2>
          <div className="TestimonialsCards">
            <TestemonialsCards />
          </div>
        </div>
      </section>
      <section className="About" id="about">
        <div className="AboutText">
          <div className="AboutTitle">
            <h2 className="AboutTitleH1">Little Lemon</h2>
            <h3 className="AboutTitleH2">Chichago</h3>
          </div>
          <p className="AboutParagraph">
            Join us for brunch, lunch, or dinner, and let our warm atmosphere
            and friendly staff make you feel right at home.
            <br />
            Whether you’re enjoying a meal with friends or celebrating a special
            occasion, Little Lemon is the perfect spot to savor delicious food
            and create unforgettable memories.
          </p>
        </div>
        <div className="AboutImages">
          <img className="AboutImageMask" src={AboutPic} alt="pic" />
        </div>
      </section>
    </>
  );
}