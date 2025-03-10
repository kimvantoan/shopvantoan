import { create } from "zustand";
import axios from "../lib/axios";
export const useCategoryStore = create((set) => ({
  categories: [],
  category: null,
  loading: false,
  error: null,
  getCategories: async () => {
    try {
      set({ loading: true });
      const res = await axios.get("/api/category");
      set({ categories: res.data.categories });
      set({ loading: false });
      
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  getCatgoryById: async (id) => {
    try {
      set({ loading: true });
      const res = await axios.get(`/api/category/${id}`);
      // set({ category: res.data.category });
      // set({ loading: false });
      return res.data.category
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
