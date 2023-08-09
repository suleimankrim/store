import { FC } from "react";
import Link from "next/link";
import MainNav from "@/components/navbar/main-nav";
import GetCategories from "@/action/get-categories";
import NavAction from "@/components/navbar/nav-action";

interface NavbarProps {}
export const revalidate = 0;
const Navbar: FC<NavbarProps> = async () => {
  const categories = await GetCategories();
  return (
    <div className="border-b h-16 flex items-center px-4">
      <Link href="/" className="font-bold text-lg">
        STORE
      </Link>
      <div className="flex-grow">
        {" "}
        <MainNav data={categories} />
      </div>

      <div>
        <NavAction />
      </div>
    </div>
  );
};
export default Navbar;
