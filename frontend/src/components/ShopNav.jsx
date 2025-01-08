import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
const ShopNav = () => {
  const menuItems = [
    {
      category: "Nam",
      href: "/men",
      items: [
        { title: "T-Shirts", href: "/men/t-shirts" },
        { title: "Casual Shirts", href: "/men/casual-shirts" },
        { title: "Formal Shirts", href: "/men/formal-shirts" },
        { title: "Jackets", href: "/men/jackets" },
        { title: "Blazers & Coats", href: "/men/blazers-coats" },
      ],
    },
    {
      category: "Nữ",
      href: "/women",
      items: [
        { title: "Kurtas & Suits", href: "/women/kurtas-suits" },
        { title: "Sarees", href: "/women/sarees" },
        { title: "Ethnic Wear", href: "/women/ethnic-wear" },
        { title: "Lehenga Cholis", href: "/women/lehenga-cholis" },
        { title: "Jackets", href: "/women/jackets" },
      ],
    },
    {
      category: "Trẻ em",
      href: "/kids",
      items: [
        { title: "T-Shirts", href: "/kids/t-shirts" },
        { title: "Shirts", href: "/kids/shirts" },
        { title: "Jeans", href: "/kids/jeans" },
        { title: "Trousers", href: "/kids/trousers" },
        { title: "Party Wear", href: "/kids/party-wear" },
        { title: "Party Wear", href: "/kids/party-wear" },
      ],
    },
  ];
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal text-lg">Cửa hàng</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-3 w-[500px] gap-3 p-4">
              {menuItems.map((category) => (
                <div className="flex flex-col gap-2" key={category.category}>
                  <Link
                    to={`/shop${category.href}`}
                    className="font-semibold p-3 hover:bg-accent rounded-lg"
                  >
                    {category.category}
                  </Link>
                  {category.items.map((item) => (
                    <NavigationMenuLink asChild key={item.title}>
                      <Link to={item.href } className="text-sm leading-none p-2 hover:bg-accent rounded-lg">
                          {item.title}
                      </Link>
                    </NavigationMenuLink>
                  ))}
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
