import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="border-t bg-white flex justify-center items-center ">
      <p>&copy; 2023 Store, Inc . All right reserved.</p>
    </div>
  );
};
export default Footer;
