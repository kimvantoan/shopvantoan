import { create } from "zustand";
import axios from "../lib/axios";
export const useReviewStore = create((set) => ({
  reviews: [],
  loading: false,
  error: null,
  getReviewsbyProduct: async (id) => {
    set({ loading: true });
    try {
      const res = await axios.get(`/api/review/${id}`);
      set({ reviews: res.data.reviews, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  createReview: async (data) => {
    set({ loading: true });
    try {
      await axios.post("/api/review", data);
      set({ loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
