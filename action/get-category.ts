import { Category } from "@/type";
import axios from "axios";

const GetCategory = async (id: string): Promise<Category> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/categories/${id}`
    );
    return data as Category;
  } catch (e) {
    return Promise.reject();
  }
};
export default GetCategory;
