import React from "react";
import Card from "../Card/Card";
import data from "../../assets/data/jobs";

const ListCards = () => {
  return (
    <ul>
      {data.map((job) => {
        return <Card job={job} key={job.id} />;
      })}
    </ul>
  );
};

export default ListCards;
