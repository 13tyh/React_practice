// src/store/useStore.ts
import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";

interface Store {
  counters: {[key: string]: number};
  increase: (id: string) => void;
  decrease: (id: string) => void;
  reset: (id: string) => void;
}

export const useStore = create(
  persist<Store>(
    (set) => ({
      counters: {},
      increase: (id) =>
        set((state) => ({
          counters: {...state.counters, [id]: (state.counters[id] || 0) + 1},
        })),
      decrease: (id) =>
        set((state) => ({
          counters: {...state.counters, [id]: (state.counters[id] || 0) - 1},
        })),
      reset: (id) =>
        set((state) => ({
          counters: {...state.counters, [id]: 0},
        })),
    }),
    {
      name: "counter-storage", // ローカルストレージに保存される名前
      storage: createJSONStorage(() => localStorage), // 保存先のストレージを指定（デフォルトは localStorage）
    }
  )
);
