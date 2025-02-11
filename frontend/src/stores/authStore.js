import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "sonner";

export const useAuthStore = create()(
  // persist(
    (set, get) => ({
      user: null,
      loading: false,
      error: null,
      signup: async (data) => {
        try {
          set({ loading: true });
          await axiosInstance.post("/api/auth/register", data);
          set({ loading: false });
          location.href = "/login";
          toast.success(res.data.message)
        } catch (error) {
          toast.error(error.response.data.message)  
          set({ loading: false });
        }
      },
      login: async (data) => {
        try {
          set({ loading: true });
          const res = await axiosInstance.post("/api/auth/login", data);
          set({ user: res.data.user, loading: false });
        } catch (error) { 
          toast.error(error.response.data.message)
          set({ loading: false });
        }
      },

      googleLogin: async (googleToken) => {
        try {
          set({ loading: true });
          const res = await axiosInstance.post("/api/auth/googleLogin", {
            token: googleToken,
          });
          set({ user: res.data.user, loading: false });
        } catch (error) {
          set({ loading: false });
        }
      },
      ResetPass: async (data) => {
        try {
          set({ loading: true });
          const res =  await axiosInstance.post("/api/auth/resetPasspassword", data);
          set({ loading: false });
          toast.success(res.data.message)
        } catch (error) {
          toast.error(error.response.data.message)
          set({ loading: false });
        }
      },
      logout: async () => {
        try {
          set({ loading: true });
          await axiosInstance.post("/api/auth/logout");
          sessionStorage.removeItem("cart-storage");
          sessionStorage.removeItem("address-store");
          sessionStorage.removeItem("wish-storage");
          set({ user: null, loading: false });
          location.replace("/login");
        } catch (error) {
          console.log(error);
        }
      },
      getUserbyId: async (id) => {
        try {
          set({ loading: true });
          const res = await axiosInstance.get(`/api/user/${id}`);
          set({ user: res.data.user, loading: false });
        } catch (error) {
          console.log(error);
        }
      },
      updateUser: async (data) => {
        try {
          set({ loading: true });
          const res = await axiosInstance.patch(
            `/api/user/${data.get("_id")}`,
            data
          );
          set({ user: res.data.user });
          set({ loading: false });
          toast.success(res.data.message)
        } catch (error) {
          toast.error(error.response.data.message)
          set({ loading: false });
        }
      },
    }
  // ),
    // {
    //   name: "auth",
    //   // storage: createJSONStorage(() => sessionStorage),
    // }
  )
);
