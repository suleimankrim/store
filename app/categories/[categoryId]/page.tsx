import { FC } from "react";
import getCategory from "@/action/get-category";
import Billboard from "@/components/Billboard";
import getSizes from "@/action/get-sizes";
import getColors from "@/action/get-colors";
import CategoryFilter from "@/components/category-filter";
import getProducts from "@/action/get-products";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/ProductCard";
import MobileFiltter from "@/components/MobileFiltter";

interface PageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const Page: FC<PageProps> = async ({ params, searchParams }: PageProps) => {
  const category = await getCategory(params.categoryId);
  const sizes = await getSizes();
  const colors = await getColors();
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  return (
    <div>
      <Billboard billboard={category.Billboard}></Billboard>
      <div className="block lg:hidden p-3">
        {" "}
        <MobileFiltter colors={colors} sizes={sizes} />
      </div>
      <div className="grid grid-cols-2 ml-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div className="pl-4 lg:pl-10 hidden lg:block">
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
        {products.length === 0 && <NoResults />}
        {products.map((ele) => (
          <ProductCard key={ele.id} data={ele}></ProductCard>
        ))}
      </div>
    </div>
  );
};
export default Page;
