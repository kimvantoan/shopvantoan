import { create } from "zustand";
import axios from "../lib/axios";
export const useReviewStore = create((set,get) => ({
  reviews: [],
  loading: false,
  error: null,
  getReviewsbyProduct: async (id) => {
    try {
      const res = await axios.get(`/api/review/${id}`);
      set({ reviews: res.data.reviews });
    } catch (error) {
      set({ error: error.message});
    }
  },
  createReview: async (data) => {
    try {
      await axios.post("/api/review", data);
    } catch (error) {
      set({ error: error.message});
    }
  },
}));
