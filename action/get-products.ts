import { Product } from "@/type";
import axios from "axios";
import qs from "query-string";

interface GetCategoriesProps {}
const URL = `${process.env.NEXT_PUBLIC_URL}/products`;
export interface Query {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
}
const GetCategories = async (query: Query): Promise<Product[]> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        categoryId: query.categoryId,
        sizeId: query.sizeId,
        colorId: query.colorId,
        isFeatured: query.isFeatured,
      },
    });
    const { data } = await axios.get(url);
    return data as Product[];
  } catch (e) {
    return Promise.reject();
  }
};
export default GetCategories;
