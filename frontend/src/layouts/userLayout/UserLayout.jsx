import React from "react";
import FooterUser from "./FooterUser";
import HeadersUser from "./HeaderUser";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <HeadersUser />
      <main>
        <Outlet />
      </main>
      <Toaster richColors/>
      <FooterUser />
    </div>
  );
};

export default UserLayout;
