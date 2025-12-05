"use client";

import React from "react";
import CountdownTimer from "@/components/CountdownTimer";
import { MadeWithDyad } from "@/components/made-with-dyad";

interface RundownPageProps {
  targetDate: Date;
}

const RundownPage: React.FC<RundownPageProps> = ({ targetDate }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-palette-light to-palette-accent p-4 relative">
      <div className="relative z-10 text-center bg-white/70 p-8 rounded-xl shadow-2xl max-w-3xl w-full backdrop-blur-md">
        <h1 className="text-5xl font-extrabold text-palette-primary mb-6">
          Menuju Hari Spesial!
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Hitungan mundur sampai tanggal 6 Desember 2025.
        </p>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default RundownPage;