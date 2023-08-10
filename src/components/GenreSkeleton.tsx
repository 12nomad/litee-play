import React from "react";

const GenreSkeleton = () => {
  return (
    <div role="status" className=" animate-pulse max-w-lg flex items-center">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div key={idx} className="flex items-center w-full space-x-2">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4"></div>
        </div>
      ))}
    </div>
  );
};

export default GenreSkeleton;
