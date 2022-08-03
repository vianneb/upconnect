import React from "react";
import will from "../img/will.jpg";
import mentor from "../img/mentor_avatar4.jpg";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function SelectionPage() {
  const navigate = useNavigate();
  const { user } = UserAuth();

  const userID = doc(db, "users", `${user?.email}`);

  const handleMenteeClick = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(userID, {
        isMentee: true,
        isMentor: false,
      });
      navigate("/completeProfile1");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleMentorClick = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(userID, {
        isMentee: false,
        isMentor: true,
      });
      navigate("/mentorcompleteProfile1");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-start">
      <h2 className="mt-16 text-6xl font-extrabold text-center text-primary">
        Choose your profile.
      </h2>
      <div className="flex flex-col items-center">
        <div
          className="flex border-4 border-dashed border-primary mt-16 w-10/12 hover:shadow-2xl hover:shadow-primary"
          onClick={handleMenteeClick}
        >
          <img src={will} className="rounded-full w-60 p-2" />
          <div className="flex flex-col items-start justify-start ml-8">
            <h3 className=" mt-3 text-5xl font-medium text-center text-primary">
              Student
            </h3>
            <p className="text-4xl mt-2 w-11/12">
              I am currently enrolled in college and am seeking guidance from a
              mentor.
            </p>
          </div>
        </div>
        <div
          className="flex border-4 border-dashed border-primary mt-16 w-10/12 hover:shadow-2xl hover:shadow-primary"
          onClick={handleMentorClick}
        >
          <img src={mentor} className="rounded-full w-60 h-60 p-2" />
          <div className="flex flex-col items-start justify-start ml-8">
            <h3 className=" mt-3 text-5xl font-medium text-center text-primary">
              Industry Professional
            </h3>
            <p className="text-4xl mt-2 w-11/12">
              I’ve had a job and want to provide career guidance to college
              student(s).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
