"use client";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import CategoryFilter from "@/components/category-filter";
import { Color, Size } from "@/type";

interface MobileFiltterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFiltter: FC<MobileFiltterProps> = ({
  colors,
  sizes,
}: MobileFiltterProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default">Filter</Button>
      </SheetTrigger>
      <SheetContent>
        <div className="pl-4">
          <CategoryFilter
            name={"Size"}
            data={sizes}
            keyValue={"sizeId"}
          ></CategoryFilter>
          <CategoryFilter
            name={"Color"}
            data={colors}
            keyValue={"colorId"}
          ></CategoryFilter>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Filter</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
export default MobileFiltter;
