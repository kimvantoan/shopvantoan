import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { createJSONStorage, persist } from "zustand/middleware";
export const useWishStore = create(
  persist(
    (set, get) => ({
      wishes: [],
      loading: false,
      error: null,
      getWish: async () => {
        try {
          set({ loading: true });
          const res = await axiosInstance.get("/api/wish");
          set({ wishes: res.data.wish.wishes });
          set({ loading: false });
        } catch (error) {
          set({ loading: false });
        }
      },
      addWish: async (data) => {
        try {
          set({ loading: true });
          await axiosInstance.post("/api/wish", data);
          get().getWish();  
          set({ loading: false });
        } catch (error) {
          set({ loading: false });
        }
      },
      removeWish: async (id) => {
        try {
          set({ loading: true });
          await axiosInstance.delete(`/api/wish/${id}`);
          set((state) => ({
            wishes: state.wishes.filter((item) => item.productId._id !== id),
          })),
            set({ loading: false });
        } catch (error) {
          set({ loading: false });
        }
      },
    }),
    {
      name: "wish-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
