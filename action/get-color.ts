import { Color } from "@/type";
import axios from "axios";

interface GetBillboardsProps {}

const GetColor = async (id: string): Promise<Color> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/colors/${id}`
    );
    return data as Color;
  } catch (e) {
    return Promise.reject();
  }
};
export default GetColor;
