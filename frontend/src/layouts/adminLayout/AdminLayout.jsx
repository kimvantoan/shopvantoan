import React from "react";
import FooterUser from "../userLayout/FooterUser";
import HeaderUser from "../userLayout/HeaderUser";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <div>
      <HeaderUser />
      <main>
        <Outlet />
      </main>
      <FooterUser />
    </div>
  );
};

export default AdminLayout;
