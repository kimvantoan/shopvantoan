import Filter from "@/components/Filter";
import React from "react";
import ListProduct from "./ListProduct";

import { useProductStore } from "@/stores/productStore";
import PageHeader from "./PageHeader";
import { Pagination } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Listing = () => {
  const { totalPages } = useProductStore();

  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page")) || 1;

  const handlePageChange = (event, value) => {
    query.set('page', value);
    navigate({
      search: query.toString() 
    });
  };
  return (
    <div className="mx-20 space-y-5">
      <PageHeader />
      <Filter />
      <ListProduct />
      <Pagination
      classes={{ul: "flex justify-center"}}
        count={totalPages}
        page={page} 
        onChange={handlePageChange} 
        variant="outlined"
        color="primary"
      />
    </div>
  );
};

export default Listing;
