import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { toast } from "sonner";
import { createJSONStorage, persist } from "zustand/middleware";
export const useAuthStore = create()(
  persist(
    (set) => ({
      user: null,
      users: [],
      loading: false,
      error: null,
      signup: async (data) => {
        try {
          const res = await axiosInstance.post("/api/auth/register", data);
          toast.success(res.data.message);
        } catch (error) {
          toast.error(error.response.data.message);
        }
      },
      login: async (data) => {
        try {
          set({ loading: true });
          const res = await axiosInstance.post("/api/auth/login", data);
          set({ user: res.data.user, loading: false });
        } catch (error) {
          toast.error(error.response.data.message);
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
      forgotPass: async (data) => {
        try {
          set({ loading: true });
          const res = await axiosInstance.post(
            "/api/auth/forgot-password",
            data
          );
          set({ loading: false });
          toast.success(res.data.message);
        } catch (error) {
          toast.error(error.response.data.message);
          set({ loading: false });
        }
      },
      ResetPass: async (data) => {
        try {
          set({ loading: true });
          const res = await axiosInstance.post(
            `/api/auth/reset-password/${data.token}`,
            data
          );
          set({ loading: false });
          toast.success(res.data.message);
        } catch (error) {
          toast.error(error.response.data.message);
          set({ loading: false });
        }
      },
      changePass: async (data) => {
        try {
          set({ loading: true });
          const res = await axiosInstance.post(
            "/api/auth/change-password",
            data
          );
          set({ success: res.data.success });
          toast.success(res.data.message);
          set({ loading: false });
        } catch (error) {
          toast.error(error.response.data.message);
          set({ loading: false });
          console.log(error);
        }
      },
      verify_OTP: async (data) => {
        try {
          set({ loading: true });
          const res = await axiosInstance.post("/api/auth/verify-otp", data);
          set({ loading: false });
          toast.success(res.data.message);
        } catch (error) {
          toast.error(error.response.data.message);
          set({ loading: false });
        }
      },
      logout: async () => {
        try {
          await axiosInstance.post("/api/auth/logout");
          sessionStorage.removeItem("cart-storage");
          sessionStorage.removeItem("auth-storage");
          set({ user: null });
          location.replace("/login");
        } catch (error) {
          console.log(error);
        }
      },
      getAllUser: async () => {
        try {
          set({ loading: true });
          const res = await axiosInstance.get("/api/user");
          set({ users: res.data.users, loading: false });
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
          const res = await axiosInstance.patch(
            `/api/user/${data.get("_id")}`,
            data
          );
          set({ user: res.data.user });
          toast.success(res.data.message);
        } catch (error) {
          toast.error(error.response.data.message);
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
