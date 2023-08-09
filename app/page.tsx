import Billboard from "@/components/Billboard";
import getBillboards from "@/action/get-billboard";
import getProducts from "@/action/get-products";
import ProductList from "@/components/ProductList";

export default async function Home() {
  const billboard = await getBillboards("f6e42405-edf6-4b92-b900-4eed66c787d1");
  const products = await getProducts({ isFeatured: true });
  return (
    <>
      <Billboard billboard={billboard} />
      <ProductList title="Featured Product" items={products}></ProductList>
    </>
  );
}
