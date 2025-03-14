import React from "react";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
const Values = () => {
  const values = [
    {
      icon: LocalShippingOutlinedIcon,
      title: "Vận chuyển miễn phí",
      description: "Đơn hàng trên $200",
    },
    {
      icon: AccountBalanceWalletOutlinedIcon,
      title: "Hoàn tiền",
      description: "Đảm bảo 30 ngày",
    },
    {
      icon: HttpsOutlinedIcon,
      title: "Thẻ quà tặng",
      description: "Gửi thẻ quà tặng",
    },
    {
      icon: LocalPhoneOutlinedIcon,
      title: "Thanh toán an toàn",
      description: "Thanh toán 100% an toàn",
    },
  ];
  
  return (
    <div className="flex flex-wrap justify-between">
        {values.map((value, index) => (
          <div
            key={index}
            className="p-2 gap-3 size-52 flex flex-col justify-center bg-gray-50"
          >
            <value.icon fontSize="large" />
            <h3 className="font-medium text-lg mt-2">{value.title}</h3>
            <p className="text-gray-500 text-sm">{value.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Values;
