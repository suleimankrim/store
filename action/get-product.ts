import { Product } from "@/type";
import axios from "axios";

interface GetBillboardsProps {}

const GetProduct = async (id: string): Promise<Product> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/products/${id}`
    );
    return data as Product;
  } catch (e) {
    return Promise.reject();
  }
};
export default GetProduct;
