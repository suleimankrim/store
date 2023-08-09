import { Product } from "@/type";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";

export interface UseCartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}
export const useCart = create(
  persist<UseCartStore>(
    (setState, getState) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = getState().items;
        const exist = currentItems.find((ele) => ele.id === data.id);
        if (exist)
          return toast({
            title: "item already on the cart ",
          });
        setState({ items: [...getState().items, data] });
        return toast({
          title: "item added to the cart ",
        });
      },
      removeItem: (id: string) => {
        setState({
          items: [...getState().items.filter((ele) => ele.id !== id)],
        });
        return toast({
          title: "item removed",
        });
      },
      removeAll: () => {
        setState({
          items: [],
        });
      },
    }),
    {
      name: "store-card",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
