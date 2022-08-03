import React from "react";
import "../styles/Resources.css";
import Article from "../img/resource_article.jpg";
import Chat from "../img/article_image7.jpg";
import { Link } from "react-router-dom";

export default function ResourceArticle() {
  return (
    <div className="text-primary article-heading">
      <h1>Icebreakers: Questions to ask Your Mentor</h1>
      <hr className="dline text-primary"></hr>
      <div className="container container-article">
        <img className="RAimage" src={Article} alt="upload" />
        <p className="intro">
          Mentors provide career knowledge for students interested in expanding
          their interest in these fields. The information provided by your
          mentor can help determine different paths that one might take while
          pursuing a career. When meeting with your mentor, it can be
          challenging to come up with questions that will get the most out of
          your meeting. This article is here to give you 5 professional
          questions to ask your mentor. These questions will help maximize your
          meeting time, and help break the ice.
        </p>
        <h3 className="articletitle">Professional Questions</h3>
        <p className="para1">
          Starting with the most basic question, what is your favorite and least
          favorite parts about your current job? If there are any similarities
          between you and your mentor, this question might resonate with you.
          Asking this question will allow you to create pros and cons list of
          your potential career.
        </p>
        <p className="para1">
          Knowing what you know now, what advice would you give to your college
          self? This is a great question for college students to ask their
          mentors. Although this question can differ from mentor to mentor, it
          can help you avoid some of the common mistakes that they have made
          along the way. Another way to ask this question is, What do you wish
          someone had told you when you were getting started?
        </p>
        <Link className="back-link" to="/resources">
          <button className="btn btn-primary backbtn">Back</button>
        </Link>
        <p className="intro"></p>
        <div className="container2">
          <p className="secondsidepara">
            Are there resources (books, professional organizations, etc.) that
            you recommend for someone new to this industry? Asking this question
            can give you a head start on what the average content is for someone
            in that industry. It also shows initiative and your desire to learn.
            You never know who your interviewer will be.
          </p>
          <p className="thirdsidepara">
            What is the work-life balance like? Depending on who you ask and
            what their position is at their job, the answer will vary. For most,
            this question is a deciding factor when accepting a job offer. It
            also helps determine how well employees are treated.
          </p>
          <img className="chatimage" src={Chat} alt="upload" />
          <p className="thirdsidepara">
            What was the process of finding a job after college in this career?
            This question could be a good way of getting insight to the rights
            and wrongs of the interview process. This could give you a head
            start for practicing, and increasing your chances of landing your
            dream job.
          </p>
          <p className="thirdsidepara">
            In the end, dont be discouraged, the majority of people dont know
            what to talk about when asking for career advice. Just by joining
            us, you're already one step closer to aceing the interview and
            making connections. After having a one on one session with your
            mentor, make sure to follow up with an email. Emails are a good way
            to stay connected, and possibly network with others in their pool.
          </p>
          {/* <Link className="back-link" to="/resources">
            <button className="btn btn-primary backbtn">Back</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
