import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
const Contact = () => {
  const crumb = [
    {
      label: "Trang chủ",
      href: "/",
    },
    {
      label: "Liên hệ",
      href: "/contact",
    },
  ];
  const [formData, setFormData] = React.useState({
    fullname: "",
    phone: "",
    message: "",
  });
  return (
    <div>
      <PageTitle pagetitle="Liên hệ" crumb={crumb} />
      <div className="flex mx-28 gap-10 mt-5">
        <div>
          <h1 className="text-red-700 text-xl font-semibold">
            Thời trang cao cấp VanToan
          </h1>
          <p className="text-sm my-3">Nội dung mô tả</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <i className="p-2 border border-red-700 rounded-full text-red-700">
                <FaMapMarkerAlt />
              </i>
              <div className="text-sm">
                <b>Địa chỉ</b>
                <p>89 Thịnh Liệt, Phường Thịnh Liệt, Quận Hoàng Mai, Hà Nội</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <i className="p-2 border border-red-700 rounded-full text-red-700">
                <MdOutlineAccessTimeFilled />
              </i>
              <div className="text-sm">
                <b>Thời gian làm việc</b>
                <p>8h - 22h Từ thứ 2 đến chủ nhật</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <i className="p-2 border border-red-700 rounded-full text-red-700">
                <FaPhone />
              </i>
              <div className="text-sm">
                <b>Hotline</b>
                <p>097978140</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <i className="p-2 border border-red-700 rounded-full text-red-700">
                <IoMail />
              </i>
              <div className="text-sm">
                <b>Email</b>
                <p>kimvantoan2k3@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-red-700 text-xl font-semibold">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-sm my-3">
            Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng
            tôi sẽ liên lạc lại với bạn sớm nhất có thể .
          </p>
          <form action="" className="space-y-3">
            <Input placeholder="Họ và tên" />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Điện thoại" />
            <Textarea placeholder="Nội dung" />
            <Button type="submit" className="w-full">
              Gửi thông tin
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
