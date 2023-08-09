"use client";
import { FC, useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";
import Currency from "@/components/ui/Currency";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CheckBooks from "@/components/ui/CheckBooks";
import { useSearchParams } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

interface PageProps {}

const Page: FC<PageProps> = () => {
  const [mount, setMount] = useState(false);
  const cart = useCart();
  useEffect(() => {
    setMount(true);
  }, []);
  const total = cart.items.reduce((value, acc) => {
    return value + Number(acc.price);
  }, 0);
  const searchParams = useSearchParams();
  const removeAllItems = cart.removeAll;
  useEffect(() => {
    if (searchParams.get("success")) {
      toast({
        title: "Payment success",
      });
      removeAllItems();
    } else if (searchParams.get("canceled")) {
      toast({
        title: "ops... something want wrong",
      });
    }
  }, [searchParams, removeAllItems]);

  if (!mount) return null;
  return (
    <div className="p-10">
      <h1 className="text-3xl py-4 font-bold ">Shopp Cart</h1>
      <Separator className="w-[300px] mb-2" />
      <div className="w-full h-full mb-5 xl:hidden">
        <CheckBooks total={total} />
      </div>
      <div className="grid grid-cols-2">
        <div>
          {cart.items.map((product) => (
            <div
              key={product.id}
              className="flex w-[400px] md:w-[600px] relative gap-2 mb-5 border p-3 rounded-lg shadow-md"
            >
              <Button
                onClick={() => cart.removeItem(product.id)}
                variant={"ghost"}
                className="absolute top-4 right-4"
              >
                <XCircle />
              </Button>
              <div className="h-52 aspect-square relative">
                <Image
                  src={product.image[0].url}
                  alt={"cart image"}
                  fill
                ></Image>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="font-bold text-xl"> {product.name}</div>
                  <Currency value={product.price} />
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="mr-1.5 font-bold">Size </div>
                    <div className="h-6 bg-gray-400 w-[1px]" />{" "}
                    <div>{product.Size.name}</div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="font-bold">Color</div>
                    <div className="h-6 bg-gray-400 w-[1px]" />{" "}
                    <div
                      className="w-5 h-5 rounded-full"
                      style={{ background: product.Color.value }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-full xl:flex justify-center hidden">
          <CheckBooks total={total} />
        </div>
      </div>
    </div>
  );
};
export default Page;
