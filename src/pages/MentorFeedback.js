import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Modal from "react-bootstrap/Modal";
import "../styles/MentorFeedback.css";
import { useNavigate } from "react-router-dom";

export default function FeedbackForm() {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    navigate("/");
  };
  const handleShow = () => setShow(true);

  return (
    <div>
      <h2 className="search-heading text-primary text-5xl font-extrabold mt-10 mb-10 text-center">
        Help your mentor improve
      </h2>
      <div className="container">
        <div className="row">
          <form>
            <div className="col-12 feedback-col">
              <p>How satisfied are you with your engagment with Doug?</p>
            </div>
            <div className="col-12 feedback-col mb-5">
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                tooltipArray={["Terrible", "Bad", "Average", "Good", "Awesome"]}
                showTooltip="true"
                className="star-form"
                fillColorArray={[
                  "#f17a45",
                  "#f19745",
                  "#f1a545",
                  "#f1b345",
                  "#f1d045",
                ]}
              />
            </div>
            <div className="col-12 feedback-col">
              <label for="feedback">
                What went well and what could have gone better?
              </label>
            </div>
            <div className="col-12 feedback-col mb-5">
              <textarea
                id="feedback"
                className="feedback-text-area"
                cols="55"
                rows="7"
              ></textarea>
            </div>
          </form>
          <div className="col-12 feedback-col">
            <button className="btn btn-primary" onClick={handleShow}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your feedback was submitted &amp; sent to the mentor.
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
