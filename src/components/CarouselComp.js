import React from "react";
import { Carousel } from "react-bootstrap";
import student1 from "../img/mentee_avatar3.jpg";
import weston from "../img/weston.jpg";
import bill from "../img/bill.jpg";

function CarouselComp() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="bg-sixth h-screen/2 lex justify-center items-center pt-10">
          <div className="flex justify-center mb-10">
            <h2 className="text-5xl text-primary font-extrabold">
              Testimonials
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-screen/4 w-6/12 flex flex-col justify-center items-center gap-6">
              <p className="text-center text-2xl text-gray-700">
                “Before UpConnect, I felt completely lost. I had no one to go to
                for career advice. UpConnect introduced me to so many
                professionals who were willing to help me with what I needed.
                Their advice makes me confident about navigating my career after
                graduation!”
              </p>
              <img
                src={student1}
                alt="student 1"
                className="w-36 h-32 rounded-full place-content-center"
              />
            </div>
          </div>
        </div>

        <Carousel.Caption>
          <div className="text-gray-700">
            <h3>Jamie Gomez</h3>
            <p>Rising senior at Dartmouth College</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="bg-sixth h-screen/2 lex justify-center items-center pt-10">
          <div className="flex justify-center mb-10">
            <h2 className="text-5xl text-primary font-extrabold">
              Testimonials
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-screen/4 w-6/12 flex flex-col justify-center items-center gap-6">
              <p className="text-center text-2xl text-gray-700">
                “Tulane has provided me with paid mentors to help me navigate my
                career aspirations. However, the services my university provides
                is nothing compared to UpConnect! With UpConnect, I have found
                mentors that are fun, inspiring, and professionals that mentor
                me because they want to.”
              </p>
              <img
                src={weston}
                alt="weston"
                className="w-36 h-32 rounded-full place-content-center"
              />
            </div>
          </div>
        </div>

        <Carousel.Caption>
          <div className="text-gray-700">
            <h3>Weston Press</h3>
            <p>Rising junior at Tulane University</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="bg-sixth h-screen/2 lex justify-center items-center pt-10">
          <div className="flex justify-center mb-10">
            <h2 className="text-5xl text-primary font-extrabold">
              Testimonials
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-screen/4 w-6/12 flex flex-col justify-center items-center gap-6">
              <p className="text-center text-2xl text-gray-700">
                “I've worked at Microsoft for many years. Now that I'm retired,
                I wanted to find young motivated minds to share my knowledge
                with. UpConnect came into my life at the perfect time. I have
                met so many brilliant students that will hopefully use my
                mentorship to innovate at Microsoft.”
              </p>
              <img
                src={bill}
                alt="bill"
                className="w-36 h-32 rounded-full place-content-center"
              />
            </div>
          </div>
        </div>

        <Carousel.Caption>
          <div className="text-gray-700">
            <h3>Bill Gates</h3>
            <p>Retired Microsoft employee</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
