import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {  Home, Shirt,Layers2,Inbox, Settings } from "lucide-react"
const items = [
  {
    title: "Dasboard",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: Shirt,
  },
  {
    title: "Orders",
    url: "/admin/orders",
    icon: Inbox,
  },
  {
    title: "Categories",
    url: "/admin/categories",
    icon: Layers2,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]
const SideBarAdmin = () => {
  return (
    <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  );
};

export default SideBarAdmin;
