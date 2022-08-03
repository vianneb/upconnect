import { CalendlyEventListener, InlineWidget } from "react-calendly";
import { useNavigate } from "react-router-dom";

export default function Calendar(props) {
  const navigate = useNavigate();

  function handleEventScheduled() {
    navigate("/confirmation");
  }

  return (
    <div>
      <h2 className="text-primary text-5xl font-extrabold mt-10 mb-10 text-center">
        Schedule an Appointment
      </h2>
      <CalendlyEventListener onEventScheduled={handleEventScheduled}>
        <InlineWidget
          url={"https://calendly.com/upconnect/30min?back=1&month=2022-07"}
        />
      </CalendlyEventListener>
    </div>
  );
}
