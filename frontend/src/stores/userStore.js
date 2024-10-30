import { create } from "zustand";
import axios from "../libs/axios";
import { toast } from "react-toastify";
export const useUserStore = create((set) => ({
  user: null,
  loading: false,
  errEmail: null,
  errPassword: null,
  signup: async (data) => {
    set({ loading: true });
    try {
      const res = await axios.post("/api/auth/register", data);
      location.href = "/login";
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.message);
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
      set({ loading: false });
      toast.error(error.response.data.message);
      set({
        errEmail: error.response.data.errEmail,
        errPassword: error.response.data.errPassword,
      });
    }
  },
  logout: async () => {
    try {
      const res = await axios.get("/api/auth/logout");
      set({ user: null });
    } catch (error) {
      console.log(error);
    }
  },
}));
