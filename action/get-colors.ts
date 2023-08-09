import { Color } from "@/type";
import axios from "axios";

const GetColors = async (): Promise<Color[]> => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/colors`);
    return data as Color[];
  } catch (e) {
    return Promise.reject();
  }
};
export default GetColors;
