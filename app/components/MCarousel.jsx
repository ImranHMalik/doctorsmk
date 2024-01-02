"use client";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const MCarousel = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const [sliderRef2] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="px-5 pb-3">
        <p className="text-xl lg:text-3xl font-medium font-roboto text-gray-600">
          Welcome to Doctors Malik & Khan’s Practice, your leading source for
          top-tier private GP services in Manchester and across the Northwest.
        </p>
      </div>
      <div ref={sliderRef} className="keen-slider">
        <div className="block lg:hidden relative keen-slider__slide number-slide1">
          <Image
            width={1800}
            height={1600}
            src="/assets/images/car/car00143.jpg"
            alt=""
            className=" "
          />
          <div className="text-lg  font-light px-2">
            <p className="">
              Testing content to be written in the carousel image.
            </p>
            <p className="">will be of 2 sentences max.</p>
            <button className="ml-2 mt-3 p-3 rounded-full bg-lime-500 ">
              {" "}
              Press Me for more
            </button>
          </div>
        </div>
        <div className="block lg:hidden keen-slider__slide number-slide2">
          {" "}
          <Image
            width={1800}
            height={1600}
            src="/assets/images/car/car00243.jpg"
            alt=""
            className=" "
          />
          <div className="text-lg  font-light px-2">
            <p className="">
              Testing content to be written in the carousel image.
            </p>
            <p className="">will be of 2 sentences max.</p>
            <button className="ml-2 mt-3 p-3 rounded-full bg-lime-500 ">
              {" "}
              Press Me for more
            </button>
          </div>
        </div>
        <div className="block lg:hidden keen-slider__slide number-slide3">
          {" "}
          <Image
            width={1800}
            height={1600}
            src="/assets/images/car/car00343.jpg"
            alt=""
            className=" "
          />
          <div className="text-lg  font-light px-2">
            <p className="">
              Testing content to be written in the carousel image.
            </p>
            <p className="">will be of 2 sentences max.</p>
            <button className="ml-2 mt-3 p-3 rounded-full bg-lime-500 ">
              {" "}
              Press Me for more
            </button>
          </div>
        </div>
      </div>
      <div ref={sliderRef2} className="hidden lg:block  keen-slider">
        <div className="relative hidden lg:block keen-slider__slide number-slide1">
          <Image
            width={1800}
            height={600}
            src="/assets/images/car/car00183.jpg"
            alt=""
            className=" "
          />
        </div>
        <div className="hidden lg:block keen-slider__slide number-slide2">
          {" "}
          <Image
            width={1800}
            height={600}
            src="/assets/images/car/car00283.jpg"
            alt=""
            className=" "
          />
        </div>
        <div className="hidden lg:block keen-slider__slide number-slide3">
          {" "}
          <Image
            width={1800}
            height={600}
            src="/assets/images/car/car00383.jpg"
            alt=""
            className=" "
          />
          <div className="text-2xl font-semibold absolute left-4 top-1/2">
            <p className="">
              Testing content to be written in the carousel image.
            </p>
            <p className="">will be of 2 sentences max.</p>
            <button className="ml-5 mt-3 p-3 rounded-full bg-lime-500 ">
              {" "}
              Press Me for more
            </button>
          </div>
        </div>
      </div>
      <div className="px-5 pb-3 mb-10 mt-3">
        <p className="text-xl lg:text-2xl font-light font-roboto text-gray-600">
          Experience healthcare personalized to your requirements, administered
          by dedicated professionals.
        </p>
      </div>
    </>
  );
};

export default MCarousel;
