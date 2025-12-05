"use client";

import React from "react";

const BirthdayGreeting: React.FC = () => {
  return (
    <div className="text-center p-4 mb-12">
      <h1 className="text-6xl font-extrabold text-palette-primary mb-4 leading-tight animate-fade-in-scale">
        Happy Birthday Araa!
      </h1>
      <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto animate-fade-in-scale delay-100">
        To my favorite person in the whole world
      </p>
      <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto animate-fade-in-scale delay-100">
        My only wish on your birthday is to see you happy today and forever.
      </p>
    </div>
  );
};

export default BirthdayGreeting;