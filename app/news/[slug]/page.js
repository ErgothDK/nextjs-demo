import React, { Fragment } from "react";

const Detail = ({ params }) => {
  return (
    <Fragment>
      <h1>Detail Page</h1>
      <p>{params.slug} </p>
    </Fragment>
  );
};

export default Detail;
