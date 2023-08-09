import React, { FC } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }: ModalProps) => {
  function onChange(open: boolean) {
    if (!open) {
      onClose();
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <div> {children} </div>
      </DialogContent>
    </Dialog>
  );
};
export default Modal;
