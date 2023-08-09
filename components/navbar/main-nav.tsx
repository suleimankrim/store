"use client";
import { FC } from "react";
import { Category } from "@/type";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface MainNavProps {
  data: Category[];
}

const MainNav: FC<MainNavProps> = ({ data }: MainNavProps) => {
  const pathname = usePathname();
  const routes = data.map((rout) => ({
    href: `/categories/${rout.id}`,
    label: rout.name,
    active: pathname === `/categories/${rout.id}`,
  }));
  return (
    <div className="flex item-center justify-around flex-grow max-w-[700px]">
      {routes.map((route) => (
        <Link
          className={route.active ? "font-bold" : "hover:font-bold"}
          href={route.href}
          key={route.href}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};
export default MainNav;
