import React from "react";

const TopList = ({ topics }) => {
    console.log(topics)
  return (
    <div>
      {topics.map((topic) => (
        <div key={topic.id}>{topic.title}</div>
      ))}
    </div>
  );
};

export default TopList;
