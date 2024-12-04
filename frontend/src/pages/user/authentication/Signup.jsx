import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/PageTitle";
const Signup = () => {
  // const [formData, setFormData] = useState({
  //   fullname: "",
  //   email: "",
  //   password: "",
  // });
  // const { signup, errEmail, errPassword, loading } = useUserStore();
  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   signup(formData);
  const breadcrumbData = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Đăng kí', href: '/signup' }
  ];
  return (
    <>
    <PageTitle pagetitle="Đăng kí" crumb={breadcrumbData} />
    <form className="flex flex-col gap-4 items-center mx-auto my-20 w-1/4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="fullname">Họ Tên</Label>
        <Input required type="text" id="fullname" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input required type="email" id="email" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Mật khẩu</Label>
        <Input required type="password" id="password" />
      </div>
      <Button type="submit" className="w-full">Đăng kí</Button>
      <div className="hover:underline">
        <Link to={"/login"}>Bạn đã có tài khoản? Đăng nhập</Link>
      </div>
    </form>
    </>
    // <div>
    //   <div className="flex px-24 mb-20">
    //     <img src={imageAuth} alt="" />
    //     <form
    //       onSubmit={handleSignup}
    //       className="flex flex-col gap-4 mx-auto mt-20 w-1/3"
    //     >
    //       <h2 className="font-semibold text-3xl text-center">Đăng kí</h2>
    //       <label className="input input-bordered flex items-center gap-2">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 16 16"
    //           fill="currentColor"
    //           className="h-4 w-4 opacity-70"
    //         >
    //           <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
    //         </svg>
    //         <input
    //           required
    //           type="text"
    //           className="grow"
    //           placeholder="Tên người dùng"
    //           onChange={(e) =>
    //             setFormData({ ...formData, fullname: e.target.value })
    //           }
    //         />
    //       </label>
    //       <label
    //         className={`input input-bordered ${
    //           errEmail && "input-error"
    //         } flex items-center gap-2`}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 16 16"
    //           fill="currentColor"
    //           className="h-4 w-4 opacity-70"
    //         >
    //           <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    //           <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
    //         </svg>
    //         <input
    //           required
    //           type="email"
    //           className="grow"
    //           placeholder="Email"
    //           onChange={(e) =>
    //             setFormData({ ...formData, email: e.target.value })
    //           }
    //         />
    //       </label>
    //       {errEmail && <p className="text-red-500 text-sm">{errEmail}</p>}
    //       <label
    //         className={`input input-bordered ${
    //           errPassword && "input-error"
    //         } flex items-center gap-2`}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 16 16"
    //           fill="currentColor"
    //           className="h-4 w-4 opacity-70"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //         <input
    //           required
    //           type="password"
    //           className="grow"
    //           placeholder="Mật khẩu"
    //           onChange={(e) =>
    //             setFormData({ ...formData, password: e.target.value })
    //           }
    //         />
    //       </label>
    //       {errPassword && <p className="text-red-500 text-sm">{errPassword}</p>}
    //       <button type="submit" className="btn bg-#748C70 text-white">
    //         {loading ? (
    //           <span className="loading loading-spinner loading-xs"></span>
    //         ) : (
    //           "Đăng kí"
    //         )}
    //       </button>
    //       <p className="text-center">Hoặc</p>
    //       <FcGoogle size={30} className="mx-auto" />
    //       <p className="text-center">
    //         Bạn đã có tài khoản?{" "}
    //         <Link to={"/login"} className="text-#748C70">
    //           Đăng nhập
    //         </Link>
    //       </p>
    //     </form>
    //   </div>
    // </div>
  );
};
export default Signup;
