"use client";

import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

const NewMeetupPage = () => {
  async function addMeetupHandler(meetupData) {
    const reponse = await fetch("/api/meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await reponse.json();

    console.log(data);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
