"use client";
import { Separator } from "@/components/ui/separator";
import Currency from "@/components/ui/Currency";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useCart } from "@/hooks/use-cart";

interface CheckBooksProps {}

const CheckBooks = ({ total }: { total: number }) => {
  const cart = useCart();
  async function onCheck() {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL!}/checkout`,
      {
        productIds: cart.items.map((item) => item.id),
      }
    );
    window.location = response.data.url;
  }
  return (
    <div className="border bg-gray-200 rounded-lg p-3 h-[170px] w-[300px] space-y-4">
      <div className="font-bold">Order Summery</div>
      <Separator className="bg-gray-600" />
      <div className="flex justify-between">
        <div>Order Total</div>
        <Currency value={total} />
      </div>
      <div className="w-full flex justify-center">
        <Button onClick={onCheck}>Checkout</Button>
      </div>
    </div>
  );
};
export default CheckBooks;
