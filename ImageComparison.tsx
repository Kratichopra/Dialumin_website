// import React, { useState, useRef, useEffect } from 'react';

// interface ImageComparisonProps {
//   beforeImage: string;
//   afterImage: string;
//   beforeLabel?: string;
//   afterLabel?: string;
// }

// export function ImageComparison({
//   beforeImage,
//   afterImage,
//   beforeLabel = 'Before',
//   afterLabel = 'After'
// }: ImageComparisonProps) {
//   const [isResizing, setIsResizing] = useState(false);
//   const [position, setPosition] = useState(50);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleMouseDown = () => {
//     setIsResizing(true);
//   };

//   const handleMouseUp = () => {
//     setIsResizing(false);
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isResizing || !containerRef.current) return;

//     const rect = containerRef.current.getBoundingClientRect();
//     const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
//     const percentage = (x / rect.width) * 100;
//     setPosition(percentage);
//   };

//   const handleTouchMove = (e: TouchEvent) => {
//     if (!isResizing || !containerRef.current) return;

//     const touch = e.touches[0];
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
//     const percentage = (x / rect.width) * 100;
//     setPosition(percentage);
//   };

//   useEffect(() => {
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//     document.addEventListener('touchmove', handleTouchMove);
//     document.addEventListener('touchend', handleMouseUp);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//       document.removeEventListener('touchmove', handleTouchMove);
//       document.removeEventListener('touchend', handleMouseUp);
//     };
//   }, [isResizing]);

//   return (
//     <div 
//       ref={containerRef}
//       className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-xl"
//     >
//       {/* Before Image */}
//       <div className="absolute inset-0">
//         <img
//           src={beforeImage}
//           alt="Before"
//           className="w-full h-full object-cover"
//         />
//         <span className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-sm font-medium">
//           {beforeLabel}
//         </span>
//       </div>

//       {/* After Image */}
//       <div
//         className="absolute inset-0"
//         style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
//       >
//         <img
//           src={afterImage}
//           alt="After"
//           className="w-full h-full object-cover"
//         />
//         <span className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full text-sm font-medium">
//           {afterLabel}
//         </span>
//       </div>

//       {/* Slider Handle */}
//       <div
//         className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
//         style={{ left: `${position}%` }}
//         onMouseDown={handleMouseDown}
//         onTouchStart={handleMouseDown}
//       >
//         <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-gray-600"
//           >
//             <path d="M21 12H3M3 12l5-5m-5 5 5 5M21 12l-5-5m5 5-5 5" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useRef, useState } from "react";
const ImageComparison = () => {
  const sliderRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50); // Initial slider position (50%)

  const beforeImage = "/without-remove.jpeg"; // Replace with your before image URL
  const afterImage = "/0238978c-57a9-4ab9-a451-0b91e9f3a279.png"; // Replace with your after image URL

  const handleMouseMove = (e) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = Math.min(100, Math.max(0, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <div
      style={{
        display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    // width:"1000px", // Increased max width for the outer div
    margin: "0 auto",
    padding: "40px", // Adjusted padding for more space
  }}
    >
      
     

      {/* Image Comparison Section */}
      <div
        style={{
          flex: 2,
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          height: "400px",
          overflow: "hidden",
          cursor: "pointer",
        }}
        ref={sliderRef}
        onMouseMove={handleMouseMove}
        onTouchMove={(e) => handleMouseMove(e.touches[0])}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${beforeImage})`,
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${afterImage})`,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "2px",
            backgroundColor: "#fff",
            zIndex: 2,
            left: `${sliderPosition}%`,
            cursor: "ew-resize",
          }}
          onMouseDown={(e) => e.preventDefault()} // Prevent text selection
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "20px",
              height: "20px",
              backgroundColor: "#fff",
              border: "2px solid #000",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;





