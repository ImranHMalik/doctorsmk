"use client";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const SCarousel = () => {
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
      <div ref={sliderRef} className="keen-slider">
        <div className="block lg:hidden relative keen-slider__slide number-slide1">
          <Image
            width={1800}
            height={1600}
            src="/assets/images/ah/ah00143.jpg"
            alt=""
            className="rounded-md"
          />
        </div>
        <div className="block lg:hidden keen-slider__slide number-slide2">
          {" "}
          <Image
            width={1800}
            height={1600}
            src="/assets/images/ah/ah00243.jpg"
            alt=""
            className="rounded-md"
          />
        </div>
        <div className="block lg:hidden keen-slider__slide number-slide3">
          {" "}
          <Image
            width={1800}
            height={1600}
            src="/assets/images/ah/ah00343.jpg"
            alt=""
            className="rounded-md"
          />
        </div>
      </div>
      <div ref={sliderRef2} className="hidden lg:block  keen-slider">
        <div className="relative hidden lg:block keen-slider__slide number-slide1">
          <Image
            width={1800}
            height={600}
            src="/assets/images/ah/ah00183.jpg"
            alt=""
            className="rounded-md"
          />
        </div>
        <div className="hidden lg:block keen-slider__slide number-slide2">
          {" "}
          <Image
            width={1800}
            height={600}
            src="/assets/images/ah/ah00283.jpg"
            alt=""
            className="rounded-md"
          />
        </div>
        <div className="hidden lg:block keen-slider__slide number-slide3">
          {" "}
          <Image
            width={1800}
            height={600}
            src="/assets/images/ah/ah00383.jpg"
            alt=""
            className="rounded-md"
          />
        </div>
      </div>
      <div className="px-5 pb-3 mt-3">
        <p className="font-light text-xl font-roboto text-gray-600">
          Providing personalized professional services at the flagship CQC
          registered Alexandra Hospital, one of the UK's largest private
          hospitals outside of London, we take pride in delivering unparalleled
          medical care.
        </p>
      </div>
    </>
  );
};

export default SCarousel;
