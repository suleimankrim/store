"use client";
import { FC } from "react";
import Modal from "@/components/ui/modal";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import GalleryTab from "@/components/productView/gallery-tab";

interface PreviewModalProps {}

const PreviewModal: FC<PreviewModalProps> = () => {
  const store = usePreviewModal();
  const data = store.data;
  if (!data) return null;
  return (
    <Modal isOpen={store.isOpen} onClose={store.onClose}>
      <GalleryTab images={data.image} product={data}></GalleryTab>
    </Modal>
  );
};
export default PreviewModal;
