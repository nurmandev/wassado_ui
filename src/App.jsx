import React from "react";

import Anchor from "./components/Anchor";
import Button from "./components/Button";
import Icon from "./components/Icon";
import Room from "./components/Room";

function App() {
  const [language, setLanguage] = React.useState("en");
  const [showMobileNavbar, setShowMobileNavbar] = React.useState(false);

  return (
    <div>
      {/* Navigation Bar */}
      <div
        id="navbar"
        className="flex md:static fixed border md:border-0 backdrop-blur-sm md:bg-transparent w-full md:z-10 z-20 justify-between px-5 md:py-6 py-3 xl:w-4/6 mx-auto bg-white"
      >
        <div className="flex md:w-1/4 w-full space-x-3 justify-between ">
          <h1
            className="text-hotel my-auto md:text-xl font-bold cursor-pointer hover:text-hotel-dark"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Wassado Hotel
          </h1>
          <Icon
            name="menu"
            className="md:hidden text-xl cursor-pointer"
            onClick={(e) => {
              setShowMobileNavbar(!showMobileNavbar);
            }}
          />
        </div>
        <div className="space-x-3 my-auto md:flex hidden">
          <div className="flex space-x-4 my-auto lg:text-base text-sm">
            <Anchor text="Rooms" href="#rooms" />
            <Anchor text="Amenities" href="#amenities" />
          </div>
          <Button text="Online Booking" href="#booking" />
          <div className="flex">
            <div className="flex my-auto h-full pl-3 pr-2 rounded-l-full bg-gray-100 border-t border-b border-l">
              <img
                className="w-5 my-auto"
                src={"/flags/" + language + ".png"}
                alt=""
              />
            </div>
            <div className="pr-2 py-2 rounded-r-full border-t border-b border-r bg-gray-100">
              <select
                name=""
                aria-label="Language picker"
                id="lang-picker"
                className="appearance-none bg-transparent"
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
              >
                <option value="en" className="font-bold">
                  English
                </option>
                <option value="tr" className="font-bold">
                  Türkçe
                </option>
                <option value="de" className="font-bold">
                  Deutsch
                </option>
                <option value="fr" className="font-bold">
                  Français
                </option>
                <option value="ru" className="font-bold">
                  Русский
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      {showMobileNavbar ? (
        <div className="md:hidden fixed z-10 top-[3.3rem] w-screen h-screen bg-black/70">
          <div className="pb-5 py-2 pl-4 bg-white backdrop-blur-sm">
            <ul>
              <Anchor
                href="#rooms"
                text="Rooms"
                onClick={() => {
                  setShowMobileNavbar(false);
                }}
              />
              <Anchor
                href="#amenities"
                text="Amenities"
                className="pb-4"
                onClick={() => {
                  setShowMobileNavbar(false);
                }}
              />
              <Button
                href="#booking"
                text="Online Booking"
                onClick={() => {
                  setShowMobileNavbar(false);
                }}
              />
              <div className="flex pt-4">
                <div className="flex my-auto h-full p-2.5 rounded-l-full bg-gray-100 border-t border-b border-l">
                  <img
                    className="w-5 my-auto"
                    src={"/flags/" + language + ".png"}
                    alt=""
                  />
                </div>
                <div className="pr-2 py-2 rounded-r-full border-t border-b border-r bg-gray-100">
                  <select
                    name=""
                    id="lang-picker"
                    className="appearance-none bg-transparent"
                    onChange={(e) => {
                      setLanguage(e.target.value);
                      setShowMobileNavbar(false);
                    }}
                  >
                    <option value="en" className="font-bold">
                      English
                    </option>
                    <option value="tr" className="font-bold">
                      Türkçe
                    </option>
                    <option value="de" className="font-bold">
                      Deutsch
                    </option>
                    <option value="fr" className="font-bold">
                      Français
                    </option>
                    <option value="ru" className="font-bold">
                      Русский
                    </option>
                  </select>
                </div>
              </div>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Main Content */}
      <div id="body" className="md:pt-0 pt-[3.5rem] xl:w-4/6 mx-auto md:px-5">
        {/* Video */}
        <div
          id="video"
          className="duration-300 md:hover:shadow-2xl cursor-pointer md:border relative flex md:rounded-xl aspect-video md:h-fit bg-black bg-opacity-55"
        >
          <iframe
            className="absolute -z-10 md:rounded-xl w-full h-full"
            src="https://videocdn.cdnpk.net/videos/a97eee1f-481b-49f5-a7a4-2c99980eaea2/horizontal/previews/clear/large.mp4?token=exp=1727963190~hmac=bd1f68e8cb2ffda5e172172c1362496acc0af0c6adedaff78c048680d206a96b"
            title="Example Hotel Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="m-auto text-white text-center space-y-4">
            <h1 className="md:text-4xl text-base text-white font-bold w-4/6 mx-auto">
              Get ready for the vacation you've been dreaming about
            </h1>
            <p className="md:text-base text-sm text-white w-64 m-auto pb-5">
              Explore and experience the wonders of Example Hotel
            </p>
            <Button
              href="#rooms"
              text="Learn more"
              className="md:text-base text-sm"
            />
          </div>
        </div>

        {/* Rooms */}
        <div id="rooms" className="md:mt-12 mt-4">
          <h1 className="text-2xl font-bold md:px-0 px-3">Rooms</h1>
          <div className="md:px-0 px-3 grid md:grid-cols-4 grid-cols-2 gap-4 mt-4">
            <Room
              name={"Standard"}
              description="Ideal for a simple visit"
              imageURL="/assets/room1.webp"
              price={60}
            />
            <Room
              name={"Standard+"}
              description="For those who want more"
              imageURL="/assets/room2.webp"
              price={80}
            />
            <Room
              name={"Bungalow"}
              description="Great view, great space"
              imageURL="/assets/room3.webp"
              price={120}
            />
            <Room
              name={"Family"}
              description="Suitable for a big family"
              imageURL="/assets/room4.webp"
              price={200}
            />
          </div>
          <div className="md:px-0 px-3">
            <Anchor
              icon="bed"
              text="Learn more about our rooms"
              showArrow={true}
            />
          </div>
        </div>

        {/* Amenities */}
        <div id="amenities" className="mt-12 md:px-0 px-3">
          <h1 className="text-2xl font-bold">Amenities</h1>
          <div className="w-full border p-4 rounded-xl mt-4">
            <div className="grid md:grid-cols-7 grid-cols-2 gap-4">
              <div className="duration-300 cursor-pointer text-center md:active:scale-95 md:hover:text-hotel">
                <h3 className="text-4xl">
                  <Icon name="wifi" />
                </h3>
                <p>Wi-Fi</p>
              </div>
              <div className="duration-300 cursor-pointer text-center md:active:scale-95 md:hover:text-hotel">
                <h3 className="text-4xl">
                  <Icon name="walk" />
                </h3>
                <p>Animation</p>
              </div>
              <div className="duration-300 cursor-pointer text-center md:active:scale-95 md:hover:text-hotel">
                <h3 className="text-4xl">
                  <Icon name="dish" />
                </h3>
                <p>Restaurant</p>
              </div>
              <div className="duration-300 cursor-pointer text-center md:active:scale-95 md:hover:text-hotel">
                <h3 className="text-4xl">
                  <Icon name="swim" />
                </h3>
                <p>Pool</p>
              </div>
              <div className="duration-300 cursor-pointer text-center md:active:scale-95 md:hover:text-hotel">
                <h3 className="text-4xl">
                  <Icon name="drink" />
                </h3>
                <p>Bar</p>
              </div>
              <div className="duration-300 cursor-pointer text-center md:active:scale-95 md:hover:text-hotel">
                <h3 className="text-4xl">
                  <Icon name="spa" />
                </h3>
                <p>Spa</p>
              </div>
              <div className="duration-300 cursor-pointer text-center md:active:scale-95 md:hover:text-hotel">
                <h3 className="text-4xl">
                  <Icon name="car" />
                </h3>
                <p>Parking</p>
              </div>
            </div>
          </div>
          <div className="md:px-0 px-3">
            <Anchor icon="file" text="See all our amenities" showArrow={true} />
          </div>
        </div>

        {/* Booking */}
        <div id="booking" className="mt-12 md:px-0 px-3">
          <h1 className="text-2xl font-bold">Check Availability</h1>
          <div className="w-full border p-4 rounded-xl mt-4">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="flex flex-col space-y-2">
                <Icon className="text-2xl" name="calendar-alt" />
                <label for="check-in-date">Check-in date</label>
                <input
                  id="check-in-date"
                  type="date"
                  className="rounded-xl px-4 py-2 bg-gray-100 border focus:outline-none w-full appearance-none text-left"
                  value="2024-07-31"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Icon className="text-2xl" name="calendar-alt" />
                <label for="check-out-date">Check-out date</label>
                <input
                  id="check-out-date"
                  type="date"
                  className="rounded-xl px-4 py-2 bg-gray-100 border focus:outline-none w-full appearance-none text-left"
                  value="2024-07-31"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Icon className="text-2xl" name="bed" />
                <label for="room-types">Room type</label>
                <select
                  id="room-types"
                  className="appearance-none h-full rounded-xl px-4 py-2 bg-gray-100 border focus:outline-none"
                  name="room-types"
                >
                  <option value="standard">Standard</option>
                  <option value="standard-plus">Standard+</option>
                  <option value="bungalow">Bungalow</option>
                  <option value="family">Family</option>
                </select>
              </div>
              <button className="duration-200 self-end w-full rounded-xl text-center px-4 py-3 md:focus:ring-2 focus:outline-none ring-offset-4 md:active:scale-95 ring-hotel hover:bg-hotel-dark cursor-pointer bg-hotel text-white border-hotel-dark">
                Check Availability
              </button>
            </div>
          </div>
        </div>

        {/* About */}
        <div id="about" className="mt-12 md:px-0 px-3">
          <h1 className="text-2xl font-bold">About Us</h1>
          <div className="grid md:grid-cols-2 gap-4 w-full mt-4">
            <div className="p-5 rounded-xl border duration-300 md:hover:shadow-xl cursor-pointer">
              <p className="text-hotel font-bold text-xl mb-2">
                The vacation in your dreams
              </p>
              <p>
                Wassado is an innovative hospitality venture slated to open its
                doors on October 26th, 2024, offering an immersive experience in
                the picturesque landscape of Senegal. Nestled across three
                terrains, Wassado features 17 distinct bungalows, a campground,
                an outdoor theater restaurant/bar, boutique, craft space, yoga
                studio, and event venue capable of accommodating up to 100
                guests. With a strong emphasis on sustainability, cultural
                immersion, and community engagement, Wassado aims to emerge as a
                leading destination for travelers seeking authentic experiences
                in Senegal.
              </p>
            </div>
            <div>
              <img
                className="duration-300 cursor-pointer w-full object-cover rounded-xl border md:hover:shadow-xl"
                src="/assets/hotel.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="mt-12 md:px-0 px-3">
          <h1 className="text-2xl font-bold">Contact</h1>
          <div className="w-full p-5 border rounded-xl mt-4 duration-300 md:hover:shadow-xl cursor-pointer">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <p className="text-hotel font-bold text-xl mb-2">Let's talk</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto, voluptatem quia? Animi, asperiores sunt dolore dicta
                  qui voluptas aspernatur repellendus minima molestias iste
                  officia aut accusamus distinctio labore maiores possimus.
                </p>
                <iframe
                  title="maps"
                  className="h-full w-full rounded-xl border focus:outline-none duration-300 mt-3"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.32108413795!2d28.682528938045223!3d41.00537021215652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1722492763561!5m2!1sen!2str"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <form
                action=""
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="flex flex-col space-y-4"
              >
                <div className="md:flex md:space-x-4 md:space-y-0 space-y-4">
                  <input
                    type="text"
                    className="rounded-xl border bg-gray-100 focus:outline-none w-full p-3 focus:bg-gray-200"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="text"
                    className="rounded-xl border bg-gray-100 focus:outline-none w-full p-3 focus:bg-gray-200"
                    placeholder="Surname"
                  />
                </div>
                <input
                  type="email"
                  className="rounded-xl border bg-gray-100 focus:outline-none w-full p-3 focus:bg-gray-200"
                  placeholder="E-mail Address"
                  required
                />
                <input
                  type="tel"
                  className="rounded-xl border bg-gray-100 focus:outline-none w-full p-3 focus:bg-gray-200"
                  placeholder="Phone Number"
                />
                <textarea
                  type="text"
                  className="rounded-xl border bg-gray-100 focus:outline-none w-full p-3 focus:bg-gray-200 resize-none"
                  placeholder="Message"
                />
                <input
                  type="submit"
                  className="duration-200 w-full rounded-xl text-center px-4 py-3 md:focus:ring-2 focus:outline-none ring-offset-4 md:active:scale-95 ring-hotel hover:bg-hotel-dark cursor-pointer bg-hotel text-white border-hotel-dark"
                  value="Send Message"
                ></input>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div id="footer" className="mt-12 md:mb-12 mb-5 md:px-0 px-5">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-lg font-bold">Footer Header</h1>
              <div className="flex flex-col space-y-2 text-sm text-hotel mt-5">
                <a href="#footer-link" className="hover:text-hotel-dark">
                  Footer Link 1
                </a>
                <a href="#footer-link" className="hover:text-hotel-dark">
                  Footer Link 2
                </a>
                <a href="#footer-link" className="hover:text-hotel-dark">
                  Footer Link 3
                </a>
                <a href="#footer-link" className="hover:text-hotel-dark">
                  Footer Link 4
                </a>
                <a href="#footer-link" className="hover:text-hotel-dark">
                  Footer Link 5
                </a>
                <a href="#footer-link" className="hover:text-hotel-dark">
                  Footer Link 6
                </a>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold">Footer Header</h1>
              <div className="flex flex-col space-y-2 text-sm text-hotel mt-5">
                <a href="#footer-link" className="hover:text-hotel-dark">
                  Footer Link 1
                </a>
                <a href="#footer-link" className="hover:text-hotel-dark">
                  Footer Link 2
                </a>
                <a href="#footer-link" className="hover:text-hotel-dark">
                  Footer Link 3
                </a>
                <a href="#footer-link" className="hover:text-hotel-dark">
                  Footer Link 4
                </a>
                <a href="#footer-link" className="hover:text-hotel-dark">
                  Footer Link 5
                </a>
                <a href="#footer-link" className="hover:text-hotel-dark">
                  Footer Link 6
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-5 text-gray-500">
              <p className="font-bold text-hotel">#VacationInYourDreams</p>
              <p>Example Street, Sample Boulevard, Istanbul/Turkey</p>
              <div>
                <p className="space-x-2">
                  <Icon name="phone-call" />
                  <a
                    className="text-hotel hover:text-hotel-dark"
                    href="tel:+901234567890"
                  >
                    +90 123 456 78 90
                  </a>
                </p>
                <p className="space-x-2">
                  <Icon name="envelope" />
                  <a
                    className="text-hotel hover:text-hotel-dark"
                    href="mailto:info@example.com"
                  >
                    info@example.com
                  </a>
                </p>
              </div>
              <div className="flex space-x-4 text-xl">
                <a
                  href="#instagram"
                  className="flex hover:bg-gray-200 p-px rounded-full cursor-pointer"
                >
                  <Icon name="instagram" type="logo" className="m-auto" />
                </a>
                <a
                  href="#facebook"
                  className="flex hover:bg-gray-200 p-px rounded-full cursor-pointer"
                >
                  <Icon name="facebook" type="logo" className="m-auto" />
                </a>
                <a
                  href="#twitter"
                  className="flex hover:bg-gray-200 p-px rounded-full cursor-pointer"
                >
                  <Icon name="twitter" type="logo" className="m-auto" />
                </a>
                <a
                  href="#youtube"
                  className="flex hover:bg-gray-200 p-px rounded-full cursor-pointer"
                >
                  <Icon name="youtube" type="logo" className="m-auto" />
                </a>
                <a
                  href="#pinterest"
                  className="flex hover:bg-gray-200 p-px rounded-full cursor-pointer"
                >
                  <Icon name="pinterest" type="logo" className="m-auto" />
                </a>
                <a
                  href="#tumblr"
                  className="flex hover:bg-gray-200 p-px rounded-full cursor-pointer"
                >
                  <Icon name="tumblr" type="logo" className="m-auto" />
                </a>
              </div>
              <p className="flex flex-col space-y-4">
                {/* <span className="my-auto">
                  Photo credit: Nik Lanús, Sara Dubler, Li Yang, Andrew Neel,
                  Oleksandr Ignatov on Unsplash
                </span> */}
                {/* <span className="my-auto">
                  Video credit: Free HD videos - no copyright on YouTube
                </span> */}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Banner */}
      <div id="cookie-banner" className="fixed w-full bottom-0 left-0">
        <div className="flex justify-between xl:w-4/6 xl:px-0 md:h-24 xl:mb-8 mx-auto bg-white/70 backdrop-blur-sm xl:rounded-xl border">
          <div className="my-auto px-8 md:py-0 py-4 text-sm">
            <p>We use cookies to enhance your experience.</p>
            <div className="align-middle w-fit group">
              <a className="group text-hotel" href="#cookies">
                <span className="align-middle">
                  Learn more about how we use cookies.
                </span>
              </a>
              <div className="duration-200 opacity-0 group-hover:opacity-100 w-full h-0.5 bg-hotel"></div>
            </div>
          </div>
          <div className="my-auto px-8">
            <Button
              text="OK"
              onClick={() => {
                document
                  .getElementById("cookie-banner")
                  .classList.add("hidden");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
