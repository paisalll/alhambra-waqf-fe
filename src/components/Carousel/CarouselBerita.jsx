// @ts-nocheck
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import imgSlider from "../../data/carousel";
import "keen-slider/keen-slider.min.css";
import "../Carousel/Carousel.scss";
import Typography from "../Typography/Typography";

export const CarouselBerita = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      mode: "free-snap",
      drag: false,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
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
          }, 2000);
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
    ],
  );

  return (
    <>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider rounded-xl">
          {imgSlider.map((item, i) => (
            <div className="keen-slider__slide slider-berita">
              <img src={item.url} alt={"wakaf-photo" + i} className="object-cover h-full w-full" />
              <div className="title-news">
                <Typography color="white" variant="h5" type="normal" className="p-4">
                  Pembangunan Mesjid Al-Hambra di daerah Tanggerang Selatan
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...// @ts-ignore
            Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};
