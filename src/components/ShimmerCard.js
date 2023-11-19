import React from "react";

const ShimmerCard = () => {
  return (
    <div className="border border-slate-100 shadow rounded-md m-4 p-4 w-[230px] max-h-full mx-auto">
      <div className="animate-pulse flex flex-col gap-2 ">
        <div className="bg-slate-300 h-32 w-full rounded-md"></div>
        <div className="flex flex-col gap-4">
          <div className="h-6 bg-slate-300 rounded"></div>
          <div className="h-4 bg-slate-300 rounded"></div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="h-4 w-10 bg-slate-300 rounded"></div>
          <div className="h-4 w-16 bg-slate-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
