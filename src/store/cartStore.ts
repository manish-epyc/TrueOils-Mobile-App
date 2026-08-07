import { create } from 'zustand';

type CartLine = {
  merchandiseId: string;
  quantity: number;
};

type CartState = {
  lines: CartLine[];
  addLine: (merchandiseId: string, quantity?: number) => void;
  removeLine: (merchandiseId: string) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  lines: [],
  addLine: (merchandiseId, quantity = 1) =>
    set((state) => {
      const existing = state.lines.find((l) => l.merchandiseId === merchandiseId);
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            l.merchandiseId === merchandiseId ? { ...l, quantity: l.quantity + quantity } : l
          ),
        };
      }
      return { lines: [...state.lines, { merchandiseId, quantity }] };
    }),
  removeLine: (merchandiseId) =>
    set((state) => ({ lines: state.lines.filter((l) => l.merchandiseId !== merchandiseId) })),
  clear: () => set({ lines: [] }),
}));
