import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
export const CarouselGambar = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };
  return (
    <Slider {...settings}>
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <img src={slide} alt="hello" />
          ))}
        </div>
      </div>
    </Slider>
  );
};

export const CarouselMitra = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="bg-black">
        <img
          src="https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-BNI.jpg"
          alt="img-logo"
          className="object-contain w-[15rem] h-[10rem] "
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Wings_%28Indonesian_company%29_logo.svg"
          alt="img-logo"
          className="w-[15rem] h-[10rem] object-contain object-right"
        />
      </div>
      <div className=" ">
        <img
          src="https://d1sag4ddilekf6.azureedge.net/compressed/merchants/6-C2XECALFAVAEME/hero/e0e4d2b9dfb048fcae1c6934cd32cbbe_1628497395464010525.png"
          alt="img-logo"
          className="w-[15rem] h-[10rem] object-contain justify-center "
        />
      </div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikimedia/id/d/dc/Bank_Mandiri.jpg"
          alt="img-logo"
        />
      </div>
      <div>
        <img
          src="https://1.bp.blogspot.com/-uBcG0Wx6QVE/YBvz5jBBq9I/AAAAAAAAH4c/w0boQaSfo3IMLc7RBEGIRObQP4eUSKQ_QCLcBGAsYHQ/s1682/logo-bsi.png"
          alt="img-logo"
          className="w-[15rem] h-[10rem] object-contain"
        />
      </div>
      <div>
        <h3>6</h3>
      </div>
      <div>
        <h3>7</h3>
      </div>
      <div>
        <h3>8</h3>
      </div>
    </Slider>
  );
};
