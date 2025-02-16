import React, { useEffect } from "react";
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useProductStore } from "@/stores/productStore";
import { Button } from "@/components/ui/button";
import { useReviewStore } from "@/stores/reviewStore";
import { useNavigate, useParams } from "react-router-dom";
import formatDate from "@/utils/FormatDate";
import { LoadingButton } from "@/components/ui/loading-button";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/authStore";
const Detail = () => {
  const { product } = useProductStore();
  const { user } = useAuthStore();
  const { createReview, getReviewsbyProduct, reviews, loading } =
    useReviewStore();
  const { id } = useParams();
  const [review, setReview] = React.useState({
    star: "5",
    comment: "",
    productId: id,
  });
  const navigate = useNavigate();
  const handleReview = (e) => {
    e.preventDefault();
    if (!user) {
      toast.info("Vui lòng đăng nhập", {
        action: {
          label: "Đăng nhập",
          onClick: () => navigate("/login"),
        },
      });
    } else {
      createReview(review).then(() => {
        getReviewsbyProduct(id);
      });
    }
  };

  useEffect(() => {
    getReviewsbyProduct(id);
  }, []);
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
        <p className="text-sm">{product?.description}</p>
      </TabsContent>
      <TabsContent value="Reviews">
        <h3 className="font-semibold">Đánh giá</h3>
        <div className="flex flex-col">
          {reviews?.map((review) => (
            <div className="flex flex-col py-3 border-b">
              <div className="flex gap-3">
                <img
                  src={review.userId.avatar}
                  alt=""
                  className="size-16 rounded-full place-self-center"
                />
                <div className="flex flex-col justify-between py-1">
                  <p className="font-medium">{review.userId.fullname}</p>
                  <div className="flex justify-self-end">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`text-lg ${
                          index < review.star
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      >
                        <FaStar />
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col break-words mt-3 space-y-1">
                <p className="text-sm">{review.comment}</p>
                <span className="text-xs text-gray-400">
                  Ngày đánh giá{" "}
                  <span className=" text-black">
                    {formatDate(review.createdAt)}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleReview}>
          <h3 className="font-semibold mt-5">Đánh giá của bạn</h3>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                key={index}
                value={index + 1}
                checked={review.star === (index + 1).toString()}
                onChange={(e) => setReview({ ...review, star: e.target.value })}
              />
            ))}
          </div>
          <div className="grid w-full gap-2 mt-2">
            <Label htmlFor="message">Nội dung</Label>
            <Textarea
              onChange={(e) =>
                setReview({ ...review, comment: e.target.value })
              }
              placeholder="Viết đánh giá tại đây"
              id="message"
            />
          </div>
          {loading ? (
            <LoadingButton className="mt-4 " loading></LoadingButton>
          ) : (
            <Button type="submit" className="mt-4">
              Đánh giá
            </Button>
          )}
        </form>
      </TabsContent>
    </Tabs>
  );
};

export default Detail;
