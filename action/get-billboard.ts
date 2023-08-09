import { Billboard } from "@/type";
import axios from "axios";

interface GetBillboardsProps {}

const GetBillboard = async (id: string): Promise<Billboard> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/billboard/${id}`
    );
    return data as Billboard;
  } catch (e) {
    return Promise.reject();
  }
};
export default GetBillboard;
