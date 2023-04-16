// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import mitraWakaf from "../../data/mitraWakaf";

const animation = { duration: 50000, easing: (t) => t };
export const MitraWakaf = () => {
  const [isSliderLoaded, setIsSliderLoaded] = useState(false);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    mode: "free-snap",
    drag: false,

    slides: {
      perView: () => {
        let slidesPerView = Number(slider.current?.container.clientWidth / 216);
        slidesPerView = Math.floor(slidesPerView || 0);
        slidesPerView = Math.max(slidesPerView, 2);
        return slidesPerView;
      },
      spacing: 30,
    },
    created: () => {
      setIsSliderLoaded(true);
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <>
      <div className="container-mitra" ref={sliderRef}>
        <div className="innerContainer">
          <div className="sliderContainer">
            <div className="keen-slider" ref={sliderRef}>
              {mitraWakaf.map((mitra, i) => (
                <a href={mitra.link} target="_blank" rel="noopener noreferrer">
                  <div className="keen-slider__slide slide">
                    <img
                      src={mitra.image}
                      alt={"logo-mitra" + i}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
