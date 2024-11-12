import React from "react";

export default function Main() {
  return (
    <>
      <section className="hero">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          At Little Lemon, we believe that every meal should be a celebration.
          Nestled in the heart of Chicago, our cozy eatery serves up vibrant
          dishes crafted with locally sourced ingredients and a twist of
          creativity.
        </p>
        <button>Reserve a Table</button>
        <img src="https://via.placeholder.com/375x355" alt="pic" />
      </section>
      <section>
        <h2>Specials</h2>
        <button>Online Menu</button>
        <article>
          <div>
            <img src="https://via.placeholder.com/265x185" alt="pic1" />
          </div>
          <div>
            <div>Greek salad</div>
            <div>$ 12.99</div>
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <button>
            Order a delivery{" "}
            <img src="https://via.placeholder.com/17x11" alt="orderLogo" />
          </button>
        </article>
        <article>
          <div>
            <img src="https://via.placeholder.com/265x185" alt="pic2" />
          </div>
          <div>
            <div>Bruchetta</div>
            <div>$ 5.99</div>
          </div>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <button>
            Order a delivery{" "}
            <img src="https://via.placeholder.com/17x11" alt="orderLogo" />
          </button>
        </article>{" "}
        <article>
          <div>
            <img src="https://via.placeholder.com/265x185" alt="pic3" />
          </div>
          <div>
            <div>Lemon Dessert</div>
            <div>$ 5.00</div>
          </div>
          <p>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <button>
            Order a delivery{" "}
            <img src="https://via.placeholder.com/17x11" alt="orderLogo" />
          </button>
        </article>
      </section>
      <section>
        <h2>Testimonials</h2>
        <div className="reviewCard">
          <div>
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
          </div>
          <div>
            <div>
              <img src="https://via.placeholder.com/32x32" alt="pfp" />
            </div>
            <div>Sara Lopez</div>
            <div>Sara72</div>
          </div>
          <p>
            “Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”
          </p>
        </div>

        <div className="reviewCard">
          <div>
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
          </div>
          <div>
            <div>
              <img src="https://via.placeholder.com/32x32" alt="pfp" />
            </div>
            <div>Jon Do</div>
            <div>Johnny_Utah</div>
          </div>
          <p>
            “We had such a great time celebrating my grandmothers bitthday!”
          </p>
        </div>

        <div className="reviewCard">
          <div>
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
          </div>
          <div>
            <div>
              <img src="https://via.placeholder.com/32x32" alt="pfp" />
            </div>
            <div>Sara Lopez</div>
            <div>Sara72</div>
          </div>
          <p>“Best Feta Salad in town. Flawless everytime!”</p>
        </div>

        <div className="reviewCard">
          <div>
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="full" />
            <img src="https://via.placeholder.com/24x24" alt="empty" />
          </div>
          <div>
            <div>
              <img src="https://via.placeholder.com/32x32" alt="pfp" />
            </div>
            <div>Sara Lopez</div>
            <div>Sara72</div>
          </div>
          <p>“Such a chilled out atmosphere - love it!”</p>
        </div>
      </section>
      <section>
        <h2>Little Lemon</h2>
        <h3>Chichago</h3>
        <p>
          Join us for brunch, lunch, or dinner, and let our warm atmosphere and
          friendly staff make you feel right at home.
          <br />
          Whether you’re enjoying a meal with friends or celebrating a special
          occasion, Little Lemon is the perfect spot to savor delicious food and
          create unforgettable memories.
        </p>
        <img src="https://via.placeholder.com/276x338" alt="pic1" />
        <img src="https://via.placeholder.com/276x338" alt="pic2" />
      </section>
    </>
  );
}
