import { Size } from "@/type";
import axios from "axios";

const GetSizes = async (): Promise<Size[]> => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/sizes`);
    return data as Size[];
  } catch (e) {
    return Promise.reject();
  }
};
export default GetSizes;
