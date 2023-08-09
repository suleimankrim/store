import { Product } from "@/type";
import { create } from "zustand";

export interface UsePreviewModalStore {
  isOpen: boolean;
  onOpen: (data: Product) => void;
  onClose: () => void;
  data: Product | undefined;
}
export const usePreviewModal = create<UsePreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));
