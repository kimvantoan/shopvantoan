import axiosInstance from "@/lib/axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAddressStore = create(
  persist(
    (set) => ({
      addresses: [],
      loading: false,
      error: null,
      message: null,
      action: null,
      getAllAddress: async () => {
        set({ loading: true });
        try {
          const res = await axiosInstance.get("/api/address");
          set({ addresses: res.data.addresses, loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
      getAddressById: async (id) => {
        set({ loading: true });
        try {
          const res = await axiosInstance.get(`/api/address/${id}`);
          set({ address: res.data.addressItem, loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
      createAddress: async (data) => {
        set({ loading: true });
        try {
          const res = await axiosInstance.post("/api/address", data);
          set((state) => ({
            addresses: [...state.addresses, res.data.address],
          }));
          set({ loading: false });
          set({ message: res.data.message });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
      updateAddress: async (id, data) => {
        set({ loading: true });
        try {
          const res = await axiosInstance.patch(`/api/address/${id}`, data);
          set((state) => ({
            addresses: state.addresses.map((address) =>
              address._id === id ? address=data: address
            ),
          }))
          set({ loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
      deleteAddress: async (id) => {
        set({ loading: true });
        try {
          const res = await axiosInstance.delete(`/api/address/${id}`);
          set((state) => ({
            addresses: state.addresses.filter((address) => address._id !== id),
          }));
          set({ loading: false });
          set({ message: res.data.message });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
      handleAction: (data) => {
        set({ action: data });
      },
    }),
    {
      name: "address-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
