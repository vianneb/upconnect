import React from "react";
import "../styles/Resources.css";
import Card from "react-bootstrap/Card";
import Icebreakers from "../img/article_image2.jpg";
import Maximize from "../img/article_image1.jpg";
import Interview from "../img/article_image3.jpg";
import Leadership from "../img/article_image4.jpg";
import Health from "../img/article_image6.jpg";
import Miscon from "../img/article_image5.jpg";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <div className="text-primary resources-heading">
      <h1>Resources</h1>
      <h2 className="sentence">
        Article to help you jumpstart your connection with your mentor
      </h2>

      <div className="togethercard1">
        <Card style={{ width: "18rem" }}>
          <Card.Img className="cardpic1" src={Icebreakers} alt="upload" />
          <Card.Body>
            <Card.Title className="cardtitle">
              Icebreakers: Questions to ask Your Mentor
            </Card.Title>
            <Card.Text className="cardbody">
              Don't know what to ask on the first meeting? Here's a list of
              insightful questions you can ask your mentor.
            </Card.Text>
            <Link className="article-link" to="/resourcearticle">
              <button className="btn btn-primary">Learn More</button>
            </Link>
            {/* <button className="btn btn-primary">Learn More</button> */}
          </Card.Body>
        </Card>

        <div className="togethercard2">
          <Card style={{ width: "18rem" }} className="togethercard">
            <Card.Img className="cardpic2" src={Maximize} alt="upload" />
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title className="cardtitle">
                How to Make the Most of Virtual Meetings
              </Card.Title>
              <Card.Text className="cardbody">
                Read for some tips on how to maximize the efficiency and impact
                of your vurtual meetings with your mentor.
              </Card.Text>
              <button className="btn btn-primary">Learn More</button>
            </Card.Body>
          </Card>

          <div className="togethercard3">
            <Card style={{ width: "18rem" }}>
              <Card.Img className="cardpic3" src={Interview} alt="upload" />
              <Card.Body>
                <Card.Title className="cardtitle">
                  Interview Prep: Sample Interview Questions
                </Card.Title>
                <Card.Text className="cardbody">
                  Preparing for an interview doesnt have to be a difficult
                  process. Click below to practice common interview questions.
                </Card.Text>
                <button className="btn btn-primary">Learn More</button>
              </Card.Body>
            </Card>

            <div className="togethercard4">
              <Card style={{ width: "18rem" }}>
                <Card.Img className="cardpic3" src={Leadership} alt="upload" />
                <Card.Body>
                  <Card.Title className="cardtitle">
                    The Fundementals of leadership
                  </Card.Title>
                  <Card.Text className="cardbody">
                    Here in Leadership 101, you will learn about basic
                    leadership and communitcation skills. Click here to learn
                    more
                  </Card.Text>
                  <button className="btn btn-primary">Learn More</button>
                </Card.Body>
              </Card>

              <div className="togethercard5">
                <Card style={{ width: "18rem" }}>
                  <Card.Img className="cardpic3" src={Health} alt="upload" />
                  <Card.Body>
                    <Card.Title className="cardtitle">
                      Keeping Up With Health and Mental Health
                    </Card.Title>
                    <Card.Text className="cardbody">
                      Stress is inevitable in the workplace. Here, you can learn
                      tips on how to improve your mental health.
                    </Card.Text>
                    <button className="btn btn-primary">Learn More</button>
                  </Card.Body>
                </Card>

                <div className="togethercard6">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img className="cardpic3" src={Miscon} alt="upload" />
                    <Card.Body>
                      <Card.Title className="cardtitle">
                        Misconceptions About the Workplace
                      </Card.Title>
                      <Card.Text className="cardbody">
                        It's important to understand what is true and what is a
                        common misconception about a certain career.
                      </Card.Text>
                      <button className="btn btn-primary">Learn More</button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
