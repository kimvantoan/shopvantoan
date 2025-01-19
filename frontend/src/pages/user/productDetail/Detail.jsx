import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useProductStore } from "@/stores/productStore";
const Detail = () => {
  const {product} = useProductStore();
  return (
    <Tabs defaultValue="Details" className="w-full">
      <TabsList className="grid grid-cols-2 w-1/2">
        <TabsTrigger value="Details" className="flex gap-2">
          <BiDotsHorizontalRounded /> <p>Chi tiết sản phẩm</p>
        </TabsTrigger>
        <TabsTrigger value="Reviews" className="flex gap-2">
          <FaStar /> <p>Đánh giá</p>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Details">
        <h3 className="font-semibold mb-4">Chi tiết sản phẩm</h3>
        <p className="text-sm">
          {product?.description}
        </p>
      </TabsContent>
      <TabsContent value="Reviews">
        <h3 className="font-semibold mb-4">Khách hàng đánh giá</h3>
        <div className="flex flex-col">
          <div className="flex flex-col py-7 border-b mb-4">
            <div className="flex gap-3">
              <img
                src="https://avatar.iran.liara.run/public"
                alt=""
                className="size-16 rounded-full place-self-center"
              />
              <div className="flex flex-col justify-between py-1">
                <p className="font-medium">Username</p>
                <div className="flex justify-self-end">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-lg ${
                        index < 4 ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      <FaStar />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col break-words mt-3 space-y-1">
              <p className="text-sm">
                wReviewReviewReviewReviewReviewReviewReviewRevieReviewReviewReviewReviewReviewReviewReviewReviewReviewReview
              </p>
              <span className="text-sm text-gray-400">
                Review on <span className=" text-black">01/01/2023</span>
              </span>
            </div>
          </div>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </TabsContent>
    </Tabs>
  );
};

export default Detail;
