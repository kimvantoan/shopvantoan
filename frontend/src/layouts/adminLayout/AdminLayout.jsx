import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideBarAdmin from "./SideBarAdmin";
 
const AdminLayout = () => {
  return (
    <SidebarProvider>
      <SideBarAdmin />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout;
