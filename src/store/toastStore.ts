import { create } from 'zustand';

type ToastState = {
  message: string | null;
  showToast: (message: string) => void;
  hideToast: () => void;
};

let hideTimeout: ReturnType<typeof setTimeout> | undefined;

export const useToastStore = create<ToastState>((set) => ({
  message: null,
  showToast: (message) => {
    if (hideTimeout) clearTimeout(hideTimeout);
    set({ message });
    hideTimeout = setTimeout(() => set({ message: null }), 2000);
  },
  hideToast: () => {
    if (hideTimeout) clearTimeout(hideTimeout);
    set({ message: null });
  },
}));
