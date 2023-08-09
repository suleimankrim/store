"use client";
import { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

interface NavActionProps {}

const NavAction: FC<NavActionProps> = () => {
  const [mount, setMount] = useState(false);
  const cart = useCart();
  const router = useRouter();
  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;
  return (
    <Button
      className="flex items-center rounded-full"
      onClick={() => router.push("/cart")}
      size={"icon"}
    >
      <ShoppingBasket className="h-4 w-4" />
      <span className="ml-1 text-white">{cart.items.length}</span>
    </Button>
  );
};
export default NavAction;
