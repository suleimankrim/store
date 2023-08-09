import { Size } from "@/type";
import axios from "axios";

interface GetBillboardsProps {}

const GetSize = async (id: string): Promise<Size> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/sizes/${id}`
    );
    return data as Size;
  } catch (e) {
    return Promise.reject();
  }
};
export default GetSize;
