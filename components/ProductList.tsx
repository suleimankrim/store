import { FC } from "react";
import { Product } from "@/type";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/ProductCard";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: FC<ProductListProps> = ({
  items,
  title,
}: ProductListProps) => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="font-bold text-2xl">{title}</h1>
      {items.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <div key={product.id}>
              <ProductCard data={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductList;
