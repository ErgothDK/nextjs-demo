import React, { Fragment } from "react";
import classes from "./MeetupDetails.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.title} />
      <address>{props.address}</address>
      <p>{props.detail}</p>
    </section>
  );
};

export default MeetupDetail;
