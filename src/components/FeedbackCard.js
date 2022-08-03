import "../styles/SearchCard.css";
import { Rating } from "react-simple-star-rating";

export function FeedbackCard(props) {
  return (
    <div className="col-12">
      <div>
        <div className="card-body box-shadow white p-3 mb-5">
          <div className="d-flex row">
            <div className="col-2">
              <div>
                <img
                  className="circle"
                  src={props.feedback.Image}
                  alt="mentee"
                ></img>
              </div>
            </div>
            <div className="col-8">
              <h3 className="mentor-name">{props.feedback.Name}</h3>
              <p className="job-title">{props.feedback.Header}</p>
              <p>{props.feedback.Location}</p>
              <Rating
                initialValue={props.feedback.Rating}
                tooltipArray={["Terrible", "Bad", "Average", "Good", "Awesome"]}
                showTooltip="true"
                className="star-form"
                readonly={true}
                size={22}
              />
              <p className="mt-2">{props.feedback.Feedback}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeedbackCardList(props) {
  let feedbackItems = props.feedbackList.map((feedback) => {
    let component = <FeedbackCard key={feedback.Name} feedback={feedback} />;
    return component;
  });

  return (
    <div className="container">
      <div className="row">{feedbackItems}</div>
    </div>
  );
}
