import "../styles/Confirmation.css";
import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 confirmation-col">
          <img
            src="img/nataisia.jpeg"
            alt="mentor"
            className="confirmation-img"
          ></img>
        </div>
        <div className="col-12 confirmation-col">
          <p className="confirmed">Confirmed</p>
        </div>
        <div className="col-12 confirmation-col confirmation-border mb-3">
          <p className="mb-3">You are scheduled with Nataisia</p>
        </div>
        <div className="col-12 d-flex mb-4 items-center">
          <span className="dot"></span>
          <p>Mentor/Mentee 1:1</p>
        </div>
        <div className="col-12 d-flex mb-4 items-center">
          <i class="fa-regular fa-calendar fa-2x confirmation-icon" />
          <p>August 4, 2002 at 2:00PM-2:30PM</p>
        </div>
        <div className="col-12 d-flex mb-4 items-center">
          <i class="fas fa-earth-americas fa-2x confirmation-icon" />
          <p> Pacific Time - US &amp; Canada</p>
        </div>
        <div className="col-12 d-flex confirmation-border mb-4 items-center">
          <i class="fa-solid fa-location-dot fa-2x mb-3 confirmation-icon"></i>
          <p className="mb-3"> Microsoft Campus</p>
        </div>

        <div className="col-12 d-flex items-center">
          <Link to="/feedback" className="link-primary">
            <i class="fa-solid fa-arrow-right"></i>
            Leave feedback for your mentor
          </Link>
        </div>
      </div>
    </div>
  );
}
