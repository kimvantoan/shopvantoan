import { create } from "zustand";
import axios from "../lib/axios";
export const useCategoryStore = create((set) => ({
  categories: [],
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
}));
