import axios from "axios";
import { create } from "zustand";
import { produce } from "immer";
export const useProductStore = create((set) => ({
  products: null,
  loading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 6,
    totalPages: 0,
    totalCount: 0,
  },
  allProducts: async (page=1, limit=9) => {
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
        error: error.response?.data.message || error.message,
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
