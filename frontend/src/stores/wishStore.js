import { create } from "zustand";
import axiosInstance from "../lib/axios";
export const useWishStore = create((set, get) => ({
  wishes: [],
  getWish: async () => {
    try {
      const res = await axiosInstance.get("/api/wish");
      set({ wishes: res.data.wish.wishes });
    } catch (error) {
      console.log(error);
    }
  },
  addWish: async (data) => {
    try {
      await axiosInstance.post("/api/wish", data);
      get().getWish();
    } catch (error) {
      console.log(error);
    }
  },
  removeWish: async (id) => {
    try {
      await axiosInstance.delete(`/api/wish/${id}`);
      get().getWish();
    } catch (error) {
      console.log(error);
    }
  },
}));
