import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IoBagCheckOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const OrderSuccess = () => {
  const navigate = useNavigate();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-3 items-center">
          <div className="p-5 bg-black text-white rounded-full">
            <IoBagCheckOutline className="size-10" />
          </div>
          <h1 className="font-bold text-2xl">Đặt hàng thành công</h1>
          <p className="text-center">
            Cảm ơn bạn đã mua sắm! Đơn hàng của bạn vẫn chưa được chuyển đi,
            nhưng chúng tôi sẽ gửi email cho bạn khi hoàn tất.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button onClick={() => navigate("/orders")}>Xem đơn hàng</Button>
          <Button onClick={() => navigate("/")} variant="outline">
            Trang chủ
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderSuccess;
