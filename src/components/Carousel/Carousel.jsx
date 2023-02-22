import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Carousel/Carousel.scss";
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
  const slides = [
    {
      url: "https://www.abdsi.id/wp-content/uploads/2020/12/logo-bni.jpg",
    },
    {
      url: "https://media.hitekno.com/thumbs/2021/10/12/99214-logo-bukalapak/730x480-img-99214-logo-bukalapak.jpg",
    },
    {
      url: "https://cdn0-production-images-kly.akamaized.net/SO1G6olCMK0mIGEIkftE0eHbYLM=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/842928/original/079423500_1428048706-QNB-logo.jpg",
    },

    {
      url: "https://cdn.antaranews.com/cache/800x533/2015/06/2015060320150528visa.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];
  return (
    <Slider {...settings}>
      {slides.map((item) => (
        <div className=" w-[1.5rem] h-[10rem] pr-5">
          <img
            src={item.url}
            alt="img-logo"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </Slider>
  );
};

export const CarouselBerita = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div>
        <ul style={{ color: "#204C94" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      <div className="w-full">
        <img
          src="https://www.ekonomisyariah.org/wp-content/uploads/2022/06/Perkembangan-Wakaf-Uang-di-Indonesia.jpg"
          alt="wakaf"
          className="rounded-3xl h-[26rem] w-full object-cover "
        />
      </div>
      <div className="w-full">
        <img
          src="https://www.ekonomisyariah.org/wp-content/uploads/2022/06/Perkembangan-Wakaf-Uang-di-Indonesia.jpg"
          alt="wakaf"
          className="rounded-3xl h-[26rem] w-full object-cover "
        />
      </div>
    </Slider>
  );
};
