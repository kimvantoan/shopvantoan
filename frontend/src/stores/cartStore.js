import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import axiosInstance from "../lib/axios";
import { toast } from "sonner"

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      loading: false,
      error: null,
      totalPrice: 0,
      getCart: async () => {
        set({ loading: true });
        try {
          const res = await axiosInstance.get("/api/cart");
          set({ cart: res.data.cart.products });
          get().handleTotal();
          set({ loading: false })
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },

      addToCart: async (data) => {
        set({ loading: true });
        try {
          const res = await axiosInstance.post("/api/cart/add", data);
          get().getCart();
          get().handleTotal();
          set({ loading: false });
          toast.success(res.data.message)
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
      handleTotal: () => {
        set((state) => ({
          totalPrice: state.cart.reduce(
            (total, item) => total + item.productId.price * item.quantity,
            0
          ),
        }));
      },
      updateQuantity: async (data) => {
        set({ loading: true });
        try {
          await axiosInstance.put(`/api/cart/update/${data.id}`, data);
          set((state) => {
            const newCart = state.cart.map((item) =>
              item._id === data.id ? { ...item, quantity: data.quantity } : item
            );
            return { cart: newCart };
          });
          get().handleTotal();
          set({ loading: false });
        } catch (error) {
          console.log(error);
          set({ error: error.message, loading: false });
        }
      },

      deleteCart: async (id) => {
        try {
          set({ loading: true });
          await axiosInstance.delete(`/api/cart/${id}`);
          set((state) => ({
            cart: state.cart.filter((item) => item._id !== id),
          }));
          get().handleTotal();
          set({ loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
