import { create } from "zustand";

export const useFillterStore = create((set) => ({
  selectedCategories: [],
  selectedSizes: [],
  selectedPrices: [],
  selectedBrand: [],
  selectedStar: 0,

  handleStar: (value) => {
    set((state) => ({
      selectedStar: value,
    }));
  },
  handleCategoryChange: (value) => {
    set((state) => ({
      selectedCategories: state.selectedCategories.includes(value)
        ? state.selectedCategories.filter((item) => item !== value)
        : [...state.selectedCategories, value],
    }));
  },
  handleSizeChange: (value) => {
    set((state) => ({
      selectedSizes: state.selectedSizes.includes(value)
        ? state.selectedSizes.filter((item) => item !== value)
        : [...state.selectedSizes, value],
    }));
  },
  handlePriceChange: (min, max) => {
    set(() => ({
      selectedPrices: [min, max],
    }));
  },
  handleBrandChange: (value) => {
    set((state) => ({
      selectedBrand: state.selectedBrand.includes(value)
        ? state.selectedBrand.filter((item) => item !== value)
        : [...state.selectedBrand, value],
    }));
  },
  removeCategory: (category) => {
    set((state) => ({
      selectedCategories: state.selectedCategories.filter(
        (item) => item !== category
      ),
    }));
  },
  removeSize: (size) => {
    set((state) => ({
      selectedSizes: state.selectedSizes.filter((item) => item !== size),
    }));
  },
  removePrice: () => {
    set(() => ({
      selectedPrices: [],
    }));
  },
  reset: () => {
    set(() => ({
      selectedCategories: [],
      selectedSizes: [],
      selectedPrices: [],
    }));
  },
}));
