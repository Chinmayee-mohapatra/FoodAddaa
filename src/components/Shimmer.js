import React from "react";
import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-2 m-4 p-4">
      {Array.from({ length: 18 }, (_, i) => (
        <ShimmerCard />
      ))}
    </div>
  );
};

export default Shimmer;
