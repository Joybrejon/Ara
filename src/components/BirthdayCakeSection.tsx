"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Confetti from 'react-confetti';
import { useWindowSize } from "@/hooks/use-window-size";

const BirthdayCakeSection: React.FC = () => {
  const [wishMade, setWishMade] = useState(false);
  const { width, height } = useWindowSize();

  const handleBlowCandle = () => {
    setWishMade(true);
  };

  return (
    <div className="p-10 bg-palette-light rounded-3xl shadow-2xl text-center h-full flex flex-col justify-center items-center">
      {wishMade && <Confetti width={width} height={height} recycle={false} numberOfPieces={100} gravity={0.1} />}
      <h2 className="text-4xl font-bold text-palette-secondary mb-6">
        Make a Wish!
      </h2>
      <div className="flex justify-center items-center mb-8">
        <img src="src\components\assets\cake.gif" alt="" width={300} height={300}/>
      </div>
      <p className="text-xl text-gray-700 mb-8">
        Make your wish and blow out the candle, make this year magical!
      </p>
      <Button
        onClick={handleBlowCandle}
        disabled={wishMade}
        className={`text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform ${
          wishMade
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-palette-secondary hover:bg-palette-primary text-white hover:scale-105"
        }`}
      >
        {wishMade ? "Wish Made! ✨" : "Blow the Candle"}
      </Button>
    </div>
  );
};

export default BirthdayCakeSection;