import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import hero from "../../../assets/hero.png";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const Detail = () => {
  return (
    <Tabs defaultValue="Details" className="mx-auto w-2/3">
      <TabsList className="grid  grid-cols-2">
        <TabsTrigger value="Details" className="flex gap-2">
          <BiDotsHorizontalRounded /> <p>Chi tiết sản phẩm</p>
        </TabsTrigger>
        <TabsTrigger value="Reviews" className="flex gap-2">
          <FaStar /> <p>Đánh giá</p>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Details">
        <h3 className="font-semibold mb-4">Chi tiết sản phẩm</h3>
        <p className="text-sm text-gray-600">
          Make changes to your account here.Make changes to your account here.
        </p>
      </TabsContent>
      <TabsContent value="Reviews">
        <h3 className="font-semibold mb-4">Đánh giá</h3>
        <span className="font-bold text-3xl">4.2</span>{" "}
        <span className="text-sm text-gray-600">54 Đánh giá</span>
        <div className="flex flex-col">
          <div className="grid grid-cols-5 py-7">
            <img
              src={hero}
              alt=""
              className="size-12 rounded-full place-self-center"
            />
            <div className="col-span-3 flex flex-col break-words">
              <p className="font-medium">Username</p>
              <p className="text-gray-600 mb-2">23 APRIL</p>
              <p className="text-gray-600 ">
                wReviewReviewReviewReviewReviewReviewReviewRevieReviewReviewReviewReviewReviewReviewReviewReviewReviewReview
              </p>
            </div>
            <div className="flex justify-self-end ">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-2xl ${
                    index < 4 ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  <FaStar />
                </span>
              ))}
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
