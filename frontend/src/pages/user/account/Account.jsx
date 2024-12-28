import React from "react";
import AccountDetail from "./AccountDetail";
import ResetPwd from "./ResetPwd";
import PageTitle from "@/components/PageTitle";
import LayoutProfile from "@/layouts/userLayout/LayoutProfile";

const Account = () => {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Tài khoản", href: "/account" },
  ];
  return (
    <>
      <PageTitle pagetitle="Tài khoản" crumb={breadcrumbData} />
      <LayoutProfile> 
        <AccountDetail />
        <ResetPwd />
      </LayoutProfile>
    </>
  );
};

export default Account;
