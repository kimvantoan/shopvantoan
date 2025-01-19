import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { createJSONStorage, persist } from "zustand/middleware";
export const useAuthStore = create()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      signup: async (data) => {
        try {
          set({ loading: true });
          await axiosInstance.post("/api/auth/register", data);
          set({ loading: false });
          location.href = "/login";
        } catch (error) {
          set({ loading: false });
        }
      },

      login: async (data) => {
        try {
          set({ loading: true });
          const res = await axiosInstance.post("/api/auth/login", data);
          set({ user: res.data.user, loading: false });
        } catch (error) {
          set({ loading: false });
        }
      },
      logout: async () => {
        try {
          set({ loading: true });
          await axiosInstance.post("/api/auth/logout");
          sessionStorage.removeItem("cart-storage");
          sessionStorage.removeItem("address-store");
          set({ user: null, loading: false });
          location.replace("/login");
        } catch (error) {
          console.log(error);
        }
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
