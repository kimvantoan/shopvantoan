import { create } from "zustand";
import axiosInstance from "../lib/axios";

export const useOrderStore = create((set) => ({
  orders: [],
  loading: false,
  error: null,
  getOrderUser: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/api/order");
      set({ orders: res.data.orders, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  createOrder: async (data) => {
    set({ loading: true });
    try {
      await axiosInstance.post("/api/order", data);
      set({ loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  getOrderById: async (id) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get(`/api/order/${id}`);
      set({ order: res.data.order, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
