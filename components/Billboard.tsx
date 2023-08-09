import { FC } from "react";
import { Billboard as BillboardType } from "@/type";

interface BillboardProps {
  billboard: BillboardType;
}

const Billboard: FC<BillboardProps> = async ({ billboard }: BillboardProps) => {
  return (
    <div className="lg:px-14 p-4">
      <div
        className="w-full flex justify-center items-center bg-cover relative max-h-[400px] aspect-square rounded-xl overflow-hiddens"
        style={{ backgroundImage: `url(${billboard.imageUrl})` }}
      >
        <div className=" font-bold text-lg">{billboard.label}</div>
      </div>
    </div>
  );
};
export default Billboard;
