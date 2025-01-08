import React from "react";
import { FiHome } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";
const Timeline = ({ step }) => {
  return (
    <div className="flex justify-between">
      <Link to="/checkout/address" className="flex flex-col items-center gap-2 w-full">
        <div className={`p-2 rounded-lg bg-black text-white`}>
          <FiHome />
        </div>
        <p>Địa chỉ</p>
      </Link>
      <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
      <Link to="/checkout/payment" className="flex flex-col items-center gap-2 w-full">
        <div
          className={`p-2  rounded-lg ${
            step === "payment" || step === "review"
              ? "bg-black text-white"
              : "bg-gray-100"
          } `}
        >
          <MdOutlinePayment />
        </div>
        <p>Phương thức</p>
      </Link>
      <div className="w-full h-[1px] bg-gray-300 mt-4"></div>

      <Link to="/checkout/review" className="flex flex-col items-center gap-2 w-full">
        <div
          className={`p-2 rounded-lg ${
            step === "review" ? "bg-black text-white" : "bg-gray-100"
          } `}
        >
          <VscPreview />
        </div>
        <p>Xem trước</p>
      </Link>
    </div>
  );
};

export default Timeline;
