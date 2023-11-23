"use client";

import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

const NewMeetupPage = () => {
  function addMeetupHandler(meetupData) {
    console.log(meetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
