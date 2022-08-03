import Card from "react-bootstrap/Card";
import "../styles/AppointmentCard.css";
import { Link } from "react-router-dom";

export function AppointmentCard() {
  return (
    <div>
      <h2 className="text-primary text-5xl font-extrabold mt-10 mb-10 text-center">
        Schedule an Appointment
      </h2>
      <div className="container d-flex appt-card-container">
        <div className="row justify-content-center align-self-center appt-card-row">
          <div className="col-4">
            <Card className="h-100">
              <Card.Header className="appt-card-header"></Card.Header>
              <Card.Body className="appt-card">
                <Card.Title>15 minute meeting</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Lightning talk
                </Card.Subtitle>
                <Card.Text className="mb-4">
                  Set goals with your mentor or get quick advice.
                </Card.Text>
                <Card.Link a="/" className="appt-card-link link-primary">
                  Schedule
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card className="h-100">
              <Card.Header className="appt-card-header"></Card.Header>
              <Card.Body className="appt-card">
                <Card.Title>30 minute meeting</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Coffee chat
                </Card.Subtitle>
                <Card.Text className="mb-4">
                  Dive deeper into topics like your mentor's job &amp; how to
                  prepare for job interviews.
                </Card.Text>
                <Link to="/calendar">
                  <Card.Link a="/" className="appt-card-link link-primary">
                    Schedule
                  </Card.Link>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card className="h-100">
              <Card.Header className="appt-card-header"></Card.Header>
              <Card.Body className="appt-card">
                <Card.Title>1 hour meeting</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  In-depth conversation
                </Card.Subtitle>
                <Card.Text className="mb-4">
                  Have a detailed conversation about your mentor's professional
                  journey or have a comprehensiv mock interview.
                </Card.Text>
                <Card.Link a="/" className="appt-card-link link-primary">
                  Schedule
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
