import { FC } from "react";
import getProduct from "@/action/get-product";
import getProducts from "@/action/get-products";
import ProductList from "@/components/ProductList";
import GalleryTab from "@/components/productView/gallery-tab";

interface PageProps {
  params: {
    productId: string;
  };
}

const Page: FC<PageProps> = async ({ params }: PageProps) => {
  const product = await getProduct(params.productId);
  const suggestedProduct = await getProducts({
    categoryId: product.Category.id,
  });

  return (
    <div className="p-4">
      <GalleryTab images={product.image} product={product}></GalleryTab>
      <ProductList
        items={suggestedProduct}
        title="Suggested Products"
      ></ProductList>
    </div>
  );
};
export default Page;
