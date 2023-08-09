"use client";
import { FC } from "react";
import { Color, Size } from "@/type";
import { useRouter, useSearchParams } from "next/navigation";

import qs from "query-string";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface CategoryFilterProps {
  data: (Color | Size)[];
  name: string;
  keyValue: string;
}

const CategoryFilter: FC<CategoryFilterProps> = ({
  keyValue,
  name,
  data,
}: CategoryFilterProps) => {
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get(keyValue);
  const router = useRouter();
  function handleOnClick(id: string) {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [keyValue]: id,
    };
    if (current[keyValue] === id) query[keyValue] = null;
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
    router.push(url, { scroll: false });
  }
  return (
    <div className={"space-y-3 mb-2"}>
      <h1 className="font-bold text-2xl">{name}</h1>
      <Separator className={"w-52"} />
      <div className="flex gap-2">
        {data.map((ele) => (
          <Button
            size={"sm"}
            onClick={() => handleOnClick(ele.id)}
            key={ele.id}
            variant={ele.id === selectedValue ? "default" : "secondary"}
          >
            {ele.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default CategoryFilter;
