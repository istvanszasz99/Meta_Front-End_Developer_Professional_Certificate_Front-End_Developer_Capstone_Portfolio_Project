import React from "react";
import HeroPicture from "../assets/images/restauranfood.png";
import SpecialPic1 from "../assets/images/special-pic.png";
import SpecialPic2 from "../assets/images/special-pic2.png";
import SpecialPic3 from "../assets/images/special-pic3.png";
import ButtonLogo from "../assets/images/special-card-desc-footer-button-logo.png";
import TestemonialPfp from "../assets/images/testimonials-card-profile-pic.png";
import StarFilled from "../assets/images/star_filled.png";
import StarEmpty from "../assets/images/star_empty.png";
import AboutPic from "../assets/images/about-image-mask.png";


export default function Main() {
  return (
    <>
      <section className="Hero">
        <div className="HeroContent">
          <div className="HeroText">
        <h1 className="HeroTitle"><span>Little Lemon<br/></span><span>Chicago</span></h1>
        <p className="HeroParagraph">
          At Little Lemon, we believe that every meal should be a celebration.
          Nestled in the heart of Chicago, our cozy eatery serves up vibrant
          dishes crafted with locally sourced ingredients and a twist of
          creativity.
        </p>
        <button className="ButtonPrimary">Reserve a Table</button>
        </div>
        <img src={HeroPicture} alt="pic" className="HeroPicture" />
        </div>
      </section>
      <section className="Specials">
        <div className="SpecialsHeader">
        <h2 className="SpecialsTitle">Specials</h2>
        <button className="ButtonPrimary">Online Menu</button>
        </div>
        <div className="SpecialsCards">
        <article className="SpecialsCard">
            <img className="SpecialPic" src={SpecialPic1} alt="pic1" />
            <div className="SpecialCardDesc">
          <div className="SpecialCardDescHeader">
            <div className="SpecialCardDescHeaderTitle">Greek salad</div>
            <div className="SpecialCardDescHeaderPrice">$ 12.99</div>
          </div>
          <p className="SpecialCardDescParagraph">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <div className="SpecialCardDescFooter">
          <button className="SpecialCardDescFooterButton">
            Order a delivery{" "}
          </button>
          <img className="SpecialCardDescFooterButtonLogo" src={ButtonLogo} alt="orderLogo" />
          </div>
          </div>
        </article>
        <article className="SpecialsCard">
            <img className="SpecialPic" src={SpecialPic2} alt="pic1" />
            <div className="SpecialCardDesc">
          <div className="SpecialCardDescHeader">
            <div className="SpecialCardDescHeaderTitle">Bruchetta</div>
            <div className="SpecialCardDescHeaderPrice">$ 5.99</div>
          </div>
          <p className="SpecialCardDescParagraph">
          Our Bruschetta is made from grilled bread that has been smeared with
          garlic and seasoned with salt and olive oil.
          </p>
          <div className="SpecialCardDescFooter">
          <button className="SpecialCardDescFooterButton">
            Order a delivery{" "}
          </button>
          <img className="SpecialCardDescFooterButtonLogo" src={ButtonLogo} alt="orderLogo" />
          </div>
          </div>
        </article>
        <article className="SpecialsCard">
            <img className="SpecialPic" src={SpecialPic3} alt="pic1" />
            <div className="SpecialCardDesc">
          <div className="SpecialCardDescHeader">
            <div className="SpecialCardDescHeaderTitle">Lemon Dessert</div>
            <div className="SpecialCardDescHeaderPrice">$ 5.00</div>
          </div>
          <p className="SpecialCardDescParagraph">
          This comes straight from grandma’s recipe book, every last
          ingredient has been sourced and is as authentic as can be imagined.
            rosemary croutons.
          </p>
          <div className="SpecialCardDescFooter">
          <button className="SpecialCardDescFooterButton">
            Order a delivery{" "}
          </button>
          <img className="SpecialCardDescFooterButtonLogo" src={ButtonLogo} alt="orderLogo" />
          </div>
          </div>
        </article>
        </div>
      </section>
      <section className="Testimonials">
        <div className="TestimonialsContent">
        <h2 className="TestimonialsTitle">Testimonials</h2>
        <div className="TestimonialsCards">
        <div className="TestimonialsCard">
          <div className="TestimonialsCardRating">
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
          </div>
          <div className="TestimonialsCardProfile">
              <img className="TestimonialsCardProfilePic" src={TestemonialPfp} alt="pfp" />
              <div className="TestimonialsCardProfileNames">
            <div className="TestimonialsCardProfileFullname">Sara Lopez</div>
            <div className="TestimonialsCardProfileNickname">Sara72</div>
            </div>
          </div>
          <p className="TestimonialsCardParagraph">
            “Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”
          </p>
        </div>
        <div className="TestimonialsCard">
          <div className="TestimonialsCardRating">
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
          </div>
          <div className="TestimonialsCardProfile">
              <img className="TestimonialsCardProfilePic" src={TestemonialPfp} alt="pfp" />
              <div className="TestimonialsCardProfileNames">
            <div className="TestimonialsCardProfileFullname">Jon Do</div>
            <div className="TestimonialsCardProfileNickname">Johnny_Utah</div>
            </div>
          </div>
          <p className="TestimonialsCardParagraph">
          “We had such a great time celebrating my grandmothers bitthday!”
          </p>
        </div>
        <div className="TestimonialsCard">
          <div className="TestimonialsCardRating">
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
          </div>
          <div className="TestimonialsCardProfile">
              <img className="TestimonialsCardProfilePic" src={TestemonialPfp} alt="pfp" />
              <div className="TestimonialsCardProfileNames">
            <div className="TestimonialsCardProfileFullname">Sara Lopez</div>
            <div className="TestimonialsCardProfileNickname">Sara72</div>
            </div>
          </div>
          <p className="TestimonialsCardParagraph">
          “Best Feta Salad in town. Flawless everytime!”
          </p>
        </div>
        <div className="TestimonialsCard">
          <div className="TestimonialsCardRating">
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarFilled" src={StarFilled} alt="full" />
            <img className="StarEmpty" src={StarEmpty} alt="full" />
          </div>
          <div className="TestimonialsCardProfile">
              <img className="TestimonialsCardProfilePic" src={TestemonialPfp} alt="pfp" />
              <div className="TestimonialsCardProfileNames">
            <div className="TestimonialsCardProfileFullname">Sara Lopez</div>
            <div className="TestimonialsCardProfileNickname">Sara72</div>
            </div>
          </div>
          <p className="TestimonialsCardParagraph">
          “Such a chilled out atmosphere - love it!”
          </p>
        </div>
        </div>
        </div>
      </section>
      <section className="About">
        <div className="AboutText">
          <div className="AboutTitle">
        <h2 className="AboutTitleH1">Little Lemon</h2>
        <h3 className="AboutTitleH2">Chichago</h3>
        </div>
        <p className="AboutParagraph">
          Join us for brunch, lunch, or dinner, and let our warm atmosphere and
          friendly staff make you feel right at home.
          <br />
          Whether you’re enjoying a meal with friends or celebrating a special
          occasion, Little Lemon is the perfect spot to savor delicious food and
          create unforgettable memories.
        </p>
        </div>
        <div className="AboutImages">
        <img className="AboutImageMask" src={AboutPic} alt="pic" />
        </div>
      </section>
    </>
  );
}