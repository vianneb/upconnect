import "./styles/App.css";
import NavComp from "./components/NavComp";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Resources from "./pages/Resources";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MentorProfile from "./pages/MentorProfile";
import MenteeProfile from "./pages/MenteeProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import CompleteProfilePage1 from "./pages/CompleteProfilePage1";
import CompleteProfilePage2 from "./pages/CompleteProfilePage2";
import ResourceArticle from "./pages/ResourceArticle.js";
import CompleteProfilePage3 from "./pages/CompleteProfilePage3";
import MentorCompleteProfilePage1 from "./pages/MentorCompleteProfilePage1";
import MentorCompleteProfilePage2 from "./pages/MentorCompleteProfilePage2";
import MentorCompleteProfilePage3 from "./pages/MentorCompleteProfilePage3";
import FeedbackRequest from "./pages/Feedback";
import SelectionPage from "./pages/SelectionPage";

//import sample json file of mentors
import SAMPLE_MENTORS from "./data/sample_mentors.json";
import { useState } from "react";
import { AuthContextProvider } from "./contexts/AuthContext";
import Calendar from "./pages/ScheduleAppointment";
import { AppointmentCard } from "./pages/AppointmentCard";
import Confirmation from "./pages/Confirmation";
import FeedbackForm from "./pages/MentorFeedback";
import Map from "./pages/Map";
import Appointments from "./pages/Appointments";

function App() {
  //state for mentor search results
  const [filteredMentors, setFilteredMentors] = useState(SAMPLE_MENTORS);
  const [searchQuery, setSearchQuery] = useState("");

  //filter list of mentors when the user searches
  const handleSearch = (newSearchQuery) => {
    newSearchQuery = newSearchQuery.toLowerCase();
    setSearchQuery(newSearchQuery);

    let searchedMentors = SAMPLE_MENTORS.filter((mentor) => {
      if (searchQuery === "") {
        return true;
      } else {
        return (
          mentor.Name.toLowerCase().includes(newSearchQuery) ||
          mentor.Location.toLowerCase().includes(newSearchQuery) ||
          mentor.Header.toLowerCase().includes(newSearchQuery) ||
          mentor.Meeting_Days.toLowerCase().includes(newSearchQuery) ||
          mentor.Career_Topics.toLowerCase().includes(newSearchQuery)
        );
      }
    });

    setFilteredMentors(searchedMentors);
  };

  return (
    <div className="App">
      <AuthContextProvider>
        <NavComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <Search
                  mentorsList={filteredMentors}
                  handleSearch={handleSearch}
                />
              </ProtectedRoute>
            }
          />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resourcearticle" element={<ResourceArticle />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/mentorProfile"
            element={
              <ProtectedRoute>
                <MentorProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/menteeProfile"
            element={
              <ProtectedRoute>
                <MenteeProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/completeProfile1"
            element={
              <ProtectedRoute>
                <CompleteProfilePage1 />
              </ProtectedRoute>
            }
          />

          <Route
            path="/completeProfile2"
            element={
              <ProtectedRoute>
                <CompleteProfilePage2 />
              </ProtectedRoute>
            }
          />

          <Route path="/appointment" element={<AppointmentCard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route
            path="/completeProfile3"
            element={
              <ProtectedRoute>
                <CompleteProfilePage3 />
              </ProtectedRoute>
            }
          />

          <Route
            path="/mentorcompleteProfile1"
            element={
              <ProtectedRoute>
                <MentorCompleteProfilePage1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentorcompleteProfile2"
            element={
              <ProtectedRoute>
                <MentorCompleteProfilePage2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentorcompleteProfile3"
            element={
              <ProtectedRoute>
                <MentorCompleteProfilePage3 />
              </ProtectedRoute>
            }
          />

          <Route path="/appointment" element={<AppointmentCard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/selection" element={<SelectionPage />} />

          <Route path="/feedback" element={<FeedbackForm />} />

          <Route
            path="/map"
            element={
              <ProtectedRoute>
                <Map />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentorfeedback"
            element={
              <ProtectedRoute>
                <FeedbackRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <Appointments />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
