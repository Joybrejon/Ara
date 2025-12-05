"use client";

import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Confetti from 'react-confetti';
import { useWindowSize } from "@/hooks/use-window-size";

interface BirthdayPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BirthdayPopup: React.FC<BirthdayPopupProps> = ({ isOpen, onClose }) => {
  const { width, height } = useWindowSize();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {isOpen && <Confetti width={width} height={height} recycle={false} numberOfPieces={200} />}
      <DialogContent className="sm:max-w-[425px] p-6 text-center bg-gradient-to-br from-palette-light to-palette-accent border-4 border-palette-accent rounded-xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-5xl font-extrabold text-palette-primary animate-bounce">
            🎉 Selamat Ulang Tahun! 🎉
          </DialogTitle>
          <DialogDescription className="text-xl text-palette-secondary mt-4">
            Semoga hari ini penuh kebahagiaan dan cinta!
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <Button onClick={onClose} className="bg-palette-secondary hover:bg-palette-primary text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Terima Kasih!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BirthdayPopup;