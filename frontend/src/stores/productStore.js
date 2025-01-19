import axios from "../lib/axios";
import { create } from "zustand";
import { produce } from "immer";
export const useProductStore = create((set) => ({
  products: null,
  product: null,
  loading: false,
  error: null,
  pagination: {
    page: 0,
    limit: 0,
    totalPages: 0,
    totalCount: 0,
  },
  getAllProduct: async (page = 1, limit = 9) => {
    set({ loading: true });
    try {
      const res = await axios.get(`/api/product?page=${page}&limit=${limit}`);
      set({
        products: res.data.products,
        loading: false,
        pagination: res.data.pagination,
      });
    } catch (error) {
      set({
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
