"use client";

import React from "react";
import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Heart } from "lucide-react";

const BirthdayCardContent: React.FC = () => {
  return (
    <div className="p-6 text-center bg-gradient-to-br from-palette-light to-palette-accent border-4 border-palette-accent rounded-xl shadow-2xl">
      <DialogHeader>
        <DialogTitle className="text-5xl font-extrabold text-palette-primary mb-4 animate-pulse">
          Happy Birthday, My Love!
        </DialogTitle>
        <DialogDescription className="text-xl text-palette-secondary mt-4 mb-6">
          To the most wonderful person in my life,
          <br />
          May your day be filled with joy, laughter, and everything you wish for.
          <br />
          Thank you for being you. I love you more than words can say.
          <br />
          <br />
          With all my love,
          <br />
          [Oyy]
        </DialogDescription>
      </DialogHeader>
      <div className="mt-6 flex justify-center">
        <Heart className="w-24 h-24 text-red-500 animate-ping-slow" />
      </div>
    </div>
  );
};

export default BirthdayCardContent;