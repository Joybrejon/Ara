"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import BirthdayCardContent from "./BirthdayCardContent";

const BirthdayCardOpener: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-palette-primary mb-6">
        Open Your Birthday Card
      </h2>
      <div className="flex justify-center">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-white text-palette-primary text-lg px-12 py-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-50 font-bold"
        >
          Click to Open
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px] p-0 border-none bg-transparent">
          <BirthdayCardContent />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BirthdayCardOpener;