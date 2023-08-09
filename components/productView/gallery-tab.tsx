"use client";
import { FC, MouseEventHandler } from "react";

import { Image as ImageType, Product } from "@/type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Currency from "@/components/ui/Currency";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

interface GalleryTabProps {
  images: ImageType[];
  product: Product;
}

const GalleryTab: FC<GalleryTabProps> = ({
  images,
  product,
}: GalleryTabProps) => {
  const cart = useCart();
  const handleAddCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(product);
  };
  return (
    <>
      <Tabs defaultValue={images[0].id}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            {images.map((image) => (
              <TabsContent
                className="flex justify-center"
                key={image.id}
                value={image.id}
              >
                <div className="relative aspect-square h-60">
                  <Image
                    alt={"main image"}
                    src={image.url}
                    fill
                    key={image.id}
                  />
                </div>
              </TabsContent>
            ))}
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <Currency value={product.price} />
            <Separator />
            <div className="flex gap-2">
              <div className="font-bold">Size</div>: {product.Size.name}{" "}
            </div>
            <div className="flex gap-2">
              <h1 className="font-bold"> Color</h1>:{"  "}
              <div
                className="h-6 w-6 rounded-full border-gray-300 border-2"
                style={{
                  background: product.Color.value,
                }}
              ></div>
            </div>
            <div>
              <Button onClick={handleAddCart} className="flex items-center">
                Add To Basket
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        <TabsList className="w-full flex gap-2 bg-white">
          {images.map((image) => (
            <TabsTrigger key={image.id} value={image.id}>
              <div className="relative w-9 h-9">
                <Image src={image.url} fill alt={"product image"}></Image>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </>
  );
};
export default GalleryTab;
