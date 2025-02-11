import React from "react";
import { Skeleton } from "./ui/skeleton";
const CardSkeleton = () => {
  return (
    <div
      onClick={() => location.replace(`/product/${product?._id}`)}
      className="p-1"
    >
      <Skeleton className="h-[260px] mb-3" />
      <div className="space-y-3">
        <Skeleton className="w-full h-[15px]" />
        <Skeleton className="w-full h-[15px]" />
      </div>
    </div>
  );
};

export default CardSkeleton;
