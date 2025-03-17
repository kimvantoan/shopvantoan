import React, { useEffect, useState } from "react";
import { useProductStore } from "@/stores/productStore";
import { useReviewStore } from "@/stores/reviewStore";
import { useNavigate, useParams } from "react-router-dom";
import formatDate from "@/utils/FormatDate";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/authStore";
import { Box, Button, Rating, Tab, Tabs } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Detail = () => {
  const { product, getProductbyId } = useProductStore();
  const { user } = useAuthStore();
  const { createReview, getReviewsbyProduct, reviews, loading } =
    useReviewStore();
  const { id } = useParams();
  const [review, setReview] = React.useState({
    star: "5",
    comment: "",
    productId: id,
  });
  console.log(review);

  const navigate = useNavigate();
  const handleReview = () => {
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
    getProductbyId(id);
    getReviewsbyProduct(id);
    window.scrollTo(0, 0);
  }, [id]);

  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
  };
  const [tabValue, setTabValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="product information tabs"
        >
          <Tab label="Chi tiết sản phẩm" />
          <Tab label="Đánh giá" />
        </Tabs>
      </Box>
      <div className="py-6">
        {tabValue === 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Chi tiết sản phẩm</h3>
            <p>{product?.description}</p>
          </div>
        )}
        {tabValue === 1 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium">Khách hàng đánh giá</h3>
                <div className="flex items-center mt-1">
                  <Rating value={product.avgRate} precision={0.5} readOnly />
                  <span className="ml-2 text-sm text-gray-500">
                    Theo {reviews.length} đánh giá
                  </span>
                </div>
              </div>
              <Button
                variant="outlined"
                onClick={handleClickOpen}
                className="border-gray-300"
              >
                Write a Review
              </Button>
              <Dialog
                open={open}
                onClose={handleClickOpen}
                slotProps={{
                  paper: {
                    component: "form",
                    onSubmit: (event) => {
                      event.preventDefault();
                      handleReview();
                      handleClickOpen();
                    },
                  },
                }}
              >
                <DialogTitle>Bình luận</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Viết cảm nhận của bạn về sản phẩm này.
                  </DialogContentText>
                  <Rating
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                      setReview({ ...review, star: newValue });
                    }}
                    value={review.star}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) =>
                      setReview({ ...review, comment: e.target.value })
                    }
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClickOpen}>Hủy</Button>
                  <Button type="submit">Đánh giá</Button>
                </DialogActions>
              </Dialog>
            </div>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review._id} className="border-b border-gray-200 pb-6">
                  <div className="flex items-start">
                    <img
                      src={review.userId.avatar || "/placeholder.svg"}
                      alt={review.userId.fullname}
                      width={40}
                      height={40}
                      className="rounded-full mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">
                          {review.userId.fullname}
                        </h4>
                        <span className="text-sm text-gray-500">
                          {formatDate(review.createdAt)}
                        </span>
                      </div>
                      <Rating
                        value={review.star}
                        size="small"
                        readOnly
                        className="mt-1"
                      />
                      <p className="mt-2 text-gray-600">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="mt-6 text-center">
              <Button variant="outlined" className="border-gray-300">
                Load more
              </Button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
