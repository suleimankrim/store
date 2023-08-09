"use client";
import { FC, useEffect, useState } from "react";
import PreviewModal from "@/components/preview-modal";

interface PreviewProviderProps {}

const PreviewProvider: FC<PreviewProviderProps> = () => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return null;
  return <PreviewModal />;
};
export default PreviewProvider;
