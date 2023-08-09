"use client";
import { Product } from "@/type";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/Currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();
  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(data);
  };
  const handleAddCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div
      onClick={() => {
        router.push(`/products/${data.id}`);
      }}
      className="bg-white cursor-pointer group rounded-lg relative border p-3 space-y-2 w-fit"
    >
      <div className="relative aspect-square h-[200px]">
        <Image
          src={data?.image?.[0]?.url}
          className="relative rounded-lg aspect-square"
          fill
          alt={"product image"}
        ></Image>
      </div>
      <div
        className="opacity-0 group-hover:opacity-100
        transition absolute bottom-6 w-full flex justify-center gap-4"
      >
        <Button size={"icon"} onClick={onPreview}>
          <Expand />
        </Button>
        <Button size={"icon"} onClick={handleAddCart}>
          <ShoppingCart />
        </Button>
      </div>
      <div>
        <h1 className="font-bold mt-1">{data.name}</h1>
        <p className="text-gray-400">{data.Category.name}</p>
        <Currency value={data.price} />
      </div>
    </div>
  );
};
export default ProductCard;
