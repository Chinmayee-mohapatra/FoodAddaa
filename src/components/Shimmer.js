import React from "react";
import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  let cardCount = [];

  for (let i = 0; i <= 20; i++) {
    cardCount.push(i);
  }

  return (
    <div className="flex flex-wrap gap-2 m-4 p-4">
      {cardCount.map((i) => {
        return (
          <div key={i} className="mx-10">
            <ShimmerCard />
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
