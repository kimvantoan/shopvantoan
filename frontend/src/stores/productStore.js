import axios from "../lib/axios";
import { create } from "zustand";
export const useProductStore = create((set) => ({
  products: null,
  product: null,
  error: null,
  totalPages: 0,  
  currentPage: 1,

  getProducts: async (params) => {
    set({ loading: true });
    try {
      const res = await axios.get(`/api/product`,{params});
      set({
        products: res.data.products,
        loading: false,
        totalPages: res.data.totalPages,
        currentPage: res.data.currentPage
      });
    } catch (error) {
      set({
        products: [],
        error: error.message,
      });
    }
  },
  getProductbyId: async (id) => {
    try {
      const res = await axios.get(`/api/product/${id}`);
      set({
        product: res.data.product,
      });
    } catch (error) {
      set({
        error: error.message,
      });
    }
  },
}));
