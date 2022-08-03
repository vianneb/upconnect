import React from "react";
import bookImage from "../img/home_background.jpg";
import CarouselComp from "../components/CarouselComp";
import { Link } from "react-router-dom";
import Typed from "react-typed";

function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url(${bookImage})`,
    backgroundSize: "cover",
  };

  return (
    <div>
      <div className="text-primary bg-center" style={backgroundImageStyle}>
        <div className="px-8 py-16">
          <div className="max-w-4xl grid grid-cols-1 gap-8">
            <h2 className="text-2xl uppercase font-extrabold">UpConnect</h2>
            <h1 className="text-6xl font-bold">
              Connect with mentors or mentees around the world!
            </h1>
            <Typed
              strings={[
                "Join our community of over a thousand mentors and mentees working together to advance career aspirations.",
                "Learn from professionals around the country that are volunteering their time to help you succeed.",
                "Spend time with current college students that are eager to learn.",
                "Spend time with a potential life long friend (:",
              ]}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
            <Link
              to="/signup"
              className="bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-md w-48 text-center"
            >
              Join us
            </Link>
          </div>
        </div>
      </div>

      <div className="px-8 py-16 mb-10">
        <div className="flex justify-center mb-16">
          <h2 className="text-5xl text-primary font-extrabold">How it works</h2>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center border-2 mb-4 w-32 h-32 rounded-full bg-third hover:shadow-2xl hover:shadow-third">
              <h3 className="text-4xl text-white font-bold">1</h3>
            </div>
            <p className="text-center text-2xl">
              Sign up as a mentee to get career advice from industry
              professionals. Sign up as a mentor to give career advice to
              college students.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center border-2 mb-4 w-32 h-32 rounded-full bg-fourth hover:shadow-2xl hover:shadow-fourth">
              <h3 className="text-4xl text-white font-bold">2</h3>
            </div>
            <p className="text-center text-2xl">
              Fill out your profile with details about your background, topics
              you want to discuss, and your preferred method of communication.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center border-2 mb-4 w-32 h-32 rounded-full bg-fifth hover:shadow-2xl hover:shadow-fifth">
              <h3 className="text-4xl text-white font-bold">3</h3>
            </div>
            <p className="text-center text-2xl">
              As a mentee, search through our database for the perfect mentor.
              As a mentor, sit tight as mentees contact you for career guidance.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <CarouselComp />
      </div>
    </div>
  );
}

export default Home;
