import { Category } from "@/type";
import axios from "axios";

interface GetCategoriesProps {}

const GetCategories = async (): Promise<Category[]> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/categories`
    );
    return data as Category[];
  } catch (e) {
    return Promise.reject();
  }
};
export default GetCategories;
