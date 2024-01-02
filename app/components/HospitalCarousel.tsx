"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const HospitalCarousel = ({ imagesLg, imagesSm }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle automatic animation
  const handleAutoAnimationSm = () => {
    const nextIndex = (currentIndex + 1) % imagesSm.length;
    setCurrentIndex(nextIndex);
  };

  // Set up automatic animation using useEffect
  useEffect(() => {
    const intervalId = setInterval(handleAutoAnimationSm, 8000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  // Function to handle manual navigation
  const handleNavigation = (direction: any) => {
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % imagesSm.length
        : (currentIndex - 1 + imagesSm.length) % imagesSm.length;

    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <div className="px-5 pb-3">
        <p className="font-light text-lg font-roboto text-gray-600">
          Operating through the esteemed Alexandra Hospital, one of the UK's
          largest private hospitals outside of London, we take pride in
          delivering unparalleled medical care.
        </p>
      </div>
      <div className="relative">
        <div className="carousel lg:hidden">
          <Image
            width={800}
            height={600}
            src={imagesSm[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="rounded-md"
          />
        </div>
        <div className="carousel hidden lg:block">
          <Image
            width={800}
            height={400}
            src={imagesLg[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          />
        </div>
        <div className="absolute left-0 inset-y-1/2">
          <button className="" onClick={() => handleNavigation("prev")}>
            <Image
              width={50}
              height={50}
              src={"/assets/icons/chevron-left.svg"}
              alt={"prev"}
            />
          </button>
        </div>
        <div className="absolute right-0 inset-y-1/2">
          <button onClick={() => handleNavigation("next")}>
            <Image
              width={50}
              height={50}
              src={"/assets/icons/chevron-right.svg"}
              alt={"next"}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default HospitalCarousel;
