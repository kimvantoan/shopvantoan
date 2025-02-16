import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const PageTitle = ({ pagetitle, crumb }) => (
    <div className="w-full bg-gray-200 py-3 px-40">
      <h1 className="text-2xl font-bold">{pagetitle}</h1>
      <Breadcrumb>
        <BreadcrumbList>
          {crumb.map((item, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              {index < crumb.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );

export default PageTitle;
