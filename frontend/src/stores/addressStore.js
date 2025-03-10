import axiosInstance from "@/lib/axios";
import { create } from "zustand";

export const useAddressStore = create(
  (set,get) => ({
    addresses: [],
    error: null,
    message: null,
    action: null,
    getAllAddress: async () => {
      try {
        const res = await axiosInstance.get("/api/address");
        set({ addresses: res.data.addresses });
      } catch (error) {
        set({ error: error.message });
      }
    },
    getAddressById: async (id) => {
      try {
        const res = await axiosInstance.get(`/api/address/${id}`);
        set({ address: res.data.addressItem });
      } catch (error) {
        set({ error: error.message});
      }
    },
    createAddress: async (data) => {
      try {
        const res = await axiosInstance.post("/api/address", data);
        set({ message: res.data.message });
        get().getAllAddress();
      } catch (error) {
        set({ error: error.message});
      }
    },
    updateAddress: async (id, data) => {
      try {
        await axiosInstance.patch(`/api/address/${id}`, data);
        get().getAllAddress();
      } catch (error) {
        set({ error: error.message });
      }
    },
    deleteAddress: async (id) => {
      try {
        const res = await axiosInstance.delete(`/api/address/${id}`);
        set({ message: res.data.message });
        get().getAllAddress();
      } catch (error) {
        set({ error: error.message });
      }
    },
    handleAction: (data) => {
      set({ action: data });
    },
  }),
);
