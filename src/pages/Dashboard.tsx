"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import BirthdayPopup from "@/components/BirthdayPopup";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";
import BirthdayGreeting from "@/components/BirthdayGreeting";
import BirthdayCakeSection from "@/components/BirthdayCakeSection";
import TimeSinceLove from "@/components/TimeSinceLove";
import PhotoGallery from "@/components/PhotoGallery";
import BirthdayCardOpener from "@/components/BirthdayCardOpener";
import RundownPage from "./RundownPage"; 
import CountdownTimer from "@/components/CountdownTimer"; 

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const birthdayDate = new Date("2025-12-06T00:00:00"); 
  const loveStartDate = new Date("2025-01-05T00:00:00");
  const today = new Date();
  const isBirthdayPassed = today.getTime() >= birthdayDate.getTime();
  const [showBirthdayPopup, setShowBirthdayPopup] = useState(false);
  
  // =================================================================
  // KONTROL MANUAL RUNDOWN:
  // Ubah ke FALSE untuk langsung melihat Dashboard Penuh (mode edit).
  // Ubah ke TRUE untuk mengaktifkan hitungan mundur berdasarkan waktu.
  const isRundownEnabled = true; 
  // =================================================================

  const [isTimeUp, setIsTimeUp] = useState(isBirthdayPassed);

  useEffect(() => {
    if (isBirthdayPassed) {
      const hasSeenPopup = localStorage.getItem("hasSeenBirthdayPopup");
      if (!hasSeenPopup) {
        setShowBirthdayPopup(true);
        localStorage.setItem("hasSeenBirthdayPopup", "true");
      }
    }
    
    // Hanya jalankan timer jika rundown diaktifkan dan waktu belum habis
    if (isRundownEnabled && !isTimeUp) {
      const timer = setInterval(() => {
        if (new Date().getTime() >= birthdayDate.getTime()) {
          setIsTimeUp(true);
          clearInterval(timer);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isBirthdayPassed, isTimeUp, birthdayDate, isRundownEnabled]);

  // Logika Tampilan: Jika rundown diaktifkan DAN waktu belum habis, tampilkan RundownPage
  if (isRundownEnabled && !isTimeUp) {
    return <RundownPage targetDate={birthdayDate} />;
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-gradient-to-br from-palette-light to-palette-accent">
      <div className="absolute top-4 right-4 z-20 p-4">
        <Button onClick={logout} variant="destructive" className="shadow-md">
          Logout
        </Button>
      </div>

      {/* Konten Dashboard Penuh (Hanya muncul setelah waktu habis atau rundown dinonaktifkan) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mt-16 pb-16 space-y-12">
        
        {/* Sesi 1: Greeting (Full Width, Full Background) */}
        <div className="w-full pt-20 pb-12 text-center">
          <BirthdayGreeting />
        </div>

        {/* Sesi 2: Cake/Wish (Card Block) */}
        <div className="w-full flex justify-center p-4">
          <div className="w-full max-w-4xl mx-auto">
            <BirthdayCakeSection />
          </div>
        </div>

        {/* Sesi 3: Time Since Love (Full Background) */}
        <div className="w-full py-16 text-center">
          <TimeSinceLove startDate={loveStartDate} />
        </div>

        {/* Sesi 4: Photo Gallery (Card Block) */}
        <div className="w-full flex justify-center p-4">
          <div className="w-full max-w-4xl mx-auto">
            <PhotoGallery />
          </div>
        </div>

        {/* Sesi 5: Birthday Card Opener (Full Background) */}
        <div className="w-full py-16 text-center">
          <BirthdayCardOpener />
        </div>
        
        {/* Footer / Closing Message */}
        <div className="w-full py-12 text-center bg-palette-light/50">
          <p className="text-xl font-medium text-palette-primary">
            May your day be a beautifull and wonderfull as you are
            <br />
            Happy birthday Araa sayang
          </p>
        </div>
      </div>

      <BirthdayPopup isOpen={showBirthdayPopup} onClose={() => setShowBirthdayPopup(false)} />
      <MadeWithDyad />
    </div>
  );
};

export default Dashboard;