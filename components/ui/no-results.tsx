import { FC } from "react";

interface NoResultsProps {}

const NoResults: FC<NoResultsProps> = () => {
  return (
    <div className="w-full flex justify-center items-center">
      No Results Found
    </div>
  );
};
export default NoResults;
