import axios from "../lib/axios";
import { create } from "zustand";
import { current, produce } from "immer";
export const useProductStore = create((set) => ({
  products: null,
  product: null,
  loading: false,
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
        loading: false,
      });
    }
  },
  getProductbyId: async (id) => {
    set({ loading: true });
    try {
      const res = await axios.get(`/api/product/${id}`);
      set({
        product: res.data.product,
      });
      set({ loading: false });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },
  setPage: (newPage) =>
    set(
      produce((state) => {
        state.pagination.page = newPage;
      })
    ),
}));
