import React from "react";
import { FeedbackCardList } from "../components/FeedbackCard";

import SAMPLE_FEEDBACK from "../data/sample_feedback.json";

export default function Feedback() {
  return (
    <div>
      <h2 className="text-primary text-5xl font-extrabold mt-10 mb-10 text-center">
        Feedback from Students
      </h2>

      <div className="container">
        <div className="row">
          <FeedbackCardList feedbackList={SAMPLE_FEEDBACK} />
        </div>
      </div>
    </div>
  );
}
