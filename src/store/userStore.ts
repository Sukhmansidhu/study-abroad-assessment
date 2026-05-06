import { create } from "zustand";

import api from "@/services/api";

interface UserState {
  users: any[];

  total: number;

  loading: boolean;

  fetchUsers: (
    limit: number,
    skip: number,
    search?: string
  ) => Promise<void>;
}

export const useUserStore =
  create<UserState>((set) => ({
    users: [],

    total: 0,

    loading: false,

    // Caching users in Zustand helps reduce
    // unnecessary API requests and improves performance.

    fetchUsers: async (
      limit,
      skip,
      search = ""
    ) => {
      try {
        set({ loading: true });

        const endpoint = search
          ? `/users/search?q=${search}`
          : `/users?limit=${limit}&skip=${skip}`;

        const response =
          await api.get(endpoint);

        set({
          users: response.data.users,
          total: response.data.total,
        });
      } catch (error) {
        console.log(error);
      } finally {
        set({ loading: false });
      }
    },
  }));