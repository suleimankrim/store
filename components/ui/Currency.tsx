import { FC } from "react";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value: number | string;
}

const Currency: FC<CurrencyProps> = ({ value }: CurrencyProps) => {
  return <div className="font-bold">{formatter.format(Number(value))}</div>;
};
export default Currency;
