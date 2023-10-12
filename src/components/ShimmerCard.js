import React from "react";

const ShimmerCard = () => {
  return (
    <div class="border border-slate-100 shadow rounded-md m-4 p-4 w-[230px] max-h-full mx-auto">
      <div class="animate-pulse flex flex-col gap-2 ">
        <div class="bg-slate-300 h-32 w-full rounded-md"></div>
        <div class="flex flex-col gap-4">
          <div class="h-6 bg-slate-300 rounded"></div>
          <div class="h-4 bg-slate-300 rounded"></div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="h-4 w-10 bg-slate-300 rounded"></div>
          <div class="h-4 w-16 bg-slate-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
