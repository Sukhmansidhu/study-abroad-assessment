import { create } from "zustand";

import api from "@/services/api";

interface ProductState {
  products: any[];

  total: number;

  loading: boolean;

  fetchProducts: (
    limit: number,
    skip: number,
    search?: string,
    category?: string
  ) => Promise<void>;
}

export const useProductStore =
  create<ProductState>((set) => ({
    products: [],

    total: 0,

    loading: false,

    // Caching products in Zustand helps reduce
    // unnecessary API requests and improves performance.

    fetchProducts: async (
      limit,
      skip,
      search = "",
      category = ""
    ) => {
      try {
        set({ loading: true });

        let endpoint =
          `/products?limit=${limit}&skip=${skip}`;

        if (search) {
          endpoint =
            `/products/search?q=${search}`;
        }

        if (category) {
          endpoint =
            `/products/category/${category}`;
        }

        const response =
          await api.get(endpoint);

        set({
          products:
            response.data.products,
          total: response.data.total,
        });
      } catch (error) {
        console.log(error);
      } finally {
        set({ loading: false });
      }
    },
  }));