import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
const ShopNav = () => {
  const menuItems = [
    {
      category: "Thời trang nam",
      href: "/men",
    },
    {
      category: "Thời trang nữ",
      href: "/women",
    },
    {
      category: "Trẻ em",
      href: "/kids",
    },
    {
      category: "Hàng mới về",
      href: "/newin",
    },
  ];
  return (
    <NavigationMenu className="z-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal text-lg">
            SẢN PHẨM
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[300px] gap-3 p-4">
              {menuItems.map((category) => (
                <div className="flex flex-col gap-2" key={category.category}>
                  <Link
                    to={`/shop${category.href}`}
                    className="p-3 hover:text-red-500"
                  >
                    {category.category}
                  </Link>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ShopNav;
