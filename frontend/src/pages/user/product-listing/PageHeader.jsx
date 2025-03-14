import React from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
const PageHeader = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" to="/" >
          Trang chủ
        </Link>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
          Sản phẩm
        </Typography>,
      ];
  return (
    <div className="relative h-fit ">
      <img
        undefinedhidden="true"
        alt="Cozy living space with blankets and decor"
        src="/PasteImage1.png"
        className="w-full h-full object-cover "
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <nav className="mb-4">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </nav>
        <h1 className="text-4xl font-bold mb-2">Sản phẩm</h1>
        <p className="text-lg  text-center">
          Hãy mua sắm theo sở thích của bạn
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
