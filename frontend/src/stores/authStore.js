import { create } from "zustand";
import axios from "../lib/axios";
import { persist } from "zustand/middleware";
export const useAuthStore = create(
  persist((set) => ({
    user: null,
    loading: false,
    errEmail: null,
    errPassword: null,
    signup: async (data) => {
      set({ loading: true });
      try {
        const res = await axios.post("/api/auth/register", data);
        set({ loading: false });
        location.href = "/login";
      } catch (error) {
        set({ loading: false });
        set({
          errEmail: error.response.data.errEmail,
          errPassword: error.response.data.errPassword,
        });
        console.log(error);
      }
    },
    login: async (data) => {
      set({ loading: true });
      try {
        const res = await axios.post("/api/auth/login", data);
        set({ user: res.data.user, loading: false });
      } catch (error) {
        set({
          errEmail: error.response.data.errEmail,
          errPassword: error.response.data.errPassword,
        });
        set({ loading: false });
      }
    },
    logout: async () => {
      try {
        await axios.post("/api/auth/logout");
        set({ user: null });
        location.replace("/login");
      } catch (error) {
        console.log(error);
      }
    },
  }))
);
