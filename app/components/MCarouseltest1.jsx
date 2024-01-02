"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const MCarousel = ({ imagesLg, imagesSm }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imagesLg.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === imagesLg.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  // Function to handle automatic animation
  const handleAutoAnimation = () => {
    const nextIndex = (currentIndex + 1) % imagesLg.length;
    setCurrentIndex(nextIndex);
  };

  // Set up automatic animation using useEffect
  useEffect(() => {
    const intervalId = setInterval(handleAutoAnimation, 4000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="max-w-[1440px] h-[400px] sm:h-[500px] w-full m-auto py-2 px-4 relative">
      <div
        style={{ backgroundImage: `url(${imagesSm[currentIndex].url})` }}
        className="block lg:hidden w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div
        style={{ backgroundImage: `url(${imagesLg[currentIndex].url})` }}
        className="lg:block hidden w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="absolute left-0 inset-y-1/2">
        <button className="" onClick={prevSlide}>
          <Image
            width={50}
            height={50}
            src={"/assets/icons/chevron-left.svg"}
            alt={"prev"}
          />
        </button>
      </div>
      <div className="absolute right-0 inset-y-1/2">
        <button onClick={nextSlide}>
          <Image
            width={50}
            height={50}
            src={"/assets/icons/chevron-right.svg"}
            alt={"next"}
          />
        </button>
      </div>
    </div>
  );
};

export default MCarousel;
