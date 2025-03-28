import { create } from "zustand";

export const useFillterStore = create((set) => ({
  selectedCategories: [],
  selectedSizes: [],
  selectedPrices: [],
  selectedSize: [],
  selectedStar: [],
  handleStar: (value) => {
    set((state) => ({
      selectedStar: state.selectedStar.includes(value)
        ? state.selectedStar.filter((item) => item !== value)
        : [...state.selectedStar, value],
    }));
  },
  handleCategoryChange: (value) => {
    set((state) => ({
      selectedCategories: state.selectedCategories.includes(value)
        ? state.selectedCategories.filter((item) => item !== value)
        : [...state.selectedCategories, value],
    }));
  },
  handlePriceChange: (value) => {
    set((state) => ({
      selectedPrices: state.selectedPrices.includes(value)
        ? state.selectedPrices.filter((item) => item !== value)
        : [...state.selectedPrices, value],
    }));
  },
  handleBrandChange: (value) => {
    set((state) => ({
      selectedSize: state.selectedSize.includes(value)
        ? state.selectedSize.filter((item) => item !== value)
        : [...state.selectedSize, value],
    }));
  },
}));
