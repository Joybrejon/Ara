"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MemoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-palette-light to-palette-accent p-4 text-center">
      <div className="bg-white/70 p-8 rounded-xl shadow-2xl max-w-2xl w-full backdrop-blur-md">
        <h1 className="text-4xl font-bold text-palette-primary mb-6">
          Your Memories 📸
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Halaman ini akan menampilkan koleksi foto-foto kenangan indah.
        </p>
        <Button onClick={() => navigate("/dashboard")} className="bg-palette-secondary hover:bg-palette-primary text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
          Kembali ke Dashboard
        </Button>
      </div>
    </div>
  );
};

export default MemoriesPage;