
"use client";

import React from "react";

// Import semua gambar secara eksplisit menggunakan alias @/
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.jpg";
import img11 from "./assets/11.jpg";
import img12 from "./assets/12.jpg";
import img13 from "./assets/13.jpg";
import img14 from "./assets/14.jpg";
import img15 from "./assets/15.jpg";
import img16 from "./assets/16.jpg";
import img17 from "./assets/17.jpg";
import img18 from "./assets/18.jpg";
import img19 from "./assets/19.jpg";
import img20 from "./assets/20.jpg";

const PhotoGallery: React.FC = () => {
  const photos = [
    { id: 1, src: img1, alt: "Memory 1" },
    { id: 2, src: img2, alt: "Memory 2" },
    { id: 3, src: img3, alt: "Memory 3" },
    { id: 4, src: img4, alt: "Memory 4" },
    { id: 5, src: img5, alt: "Memory 5" },
    { id: 6, src: img6, alt: "Memory 6" },
    { id: 7, src: img7, alt: "Memory 7" },
    { id: 8, src: img8, alt: "Memory 8" },
    { id: 9, src: img9, alt: "Memory 9" },
    { id: 10, src: img10, alt: "Memory 10" },
    { id: 11, src: img11, alt: "Memory 11" },
    { id: 12, src: img12, alt: "Memory 12" },
    { id: 13, src: img13, alt: "Memory 13" },
    { id: 14, src: img14, alt: "Memory 14" },
    { id: 15, src: img15, alt: "Memory 15" },
    { id: 16, src: img16, alt: "Memory 16" },
    { id: 17, src: img17, alt: "Memory 17" },
    { id: 18, src: img18, alt: "Memory 18" },
    { id: 19, src: img19, alt: "Memory 19" },
    { id: 20, src: img20, alt: "Memory 20" },
  ];

  return (
    <div className="p-10 bg-palette-light rounded-3xl shadow-2xl text-center">
      <h2 className="text-4xl font-bold text-palette-secondary mb-6">
        Our Memories
      </h2>
      <p className="text-xl text-gray-700 font-medium  mb-8">
        A collection of our cherished moments.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative w-full aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-md group hover:scale-105 transition-transform duration-300 border border-palette-accent/50"
          >
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
