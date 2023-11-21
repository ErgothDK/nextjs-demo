import Link from "next/link";
import React, { Fragment } from "react";

const News = () => {
  const DUMMY_LIST = [
    {
      id: Math.random(),
      title: "This is a new item",
      slug: "this-is-a-new-item",
    },
    {
      id: Math.random(),
      title: "New mechanical keyboard",
      slug: "new-mechanical-keyboard",
    },
  ];

  return (
    <Fragment>
      <h2>Hello News Page</h2>
      <ul>
        {DUMMY_LIST.map((post) => (
          <li key={post.id}>
            <Link href={`/news/${post.slug}`}> {post.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default News;
