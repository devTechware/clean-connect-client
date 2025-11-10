import React, { useEffect, useState } from "react";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co.com/BKCNFpC3/Report-garbage-pile-ups-and-keep-your-neighborhood-fresh.jpg",
      title: "A Clean City Starts With You",
      text: "Report garbage pile-ups and keep your neighborhood fresh.",
      btn: "Report Garbage",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/nsXQTgp9/Join-Hands-for-a-Cleaner-Tomorrow.jpg",
      title: "Join Hands for a Cleaner Tomorrow",
      text: "Participate in cleanup drives and inspire change.",
      btn: "Join Cleanup Drive",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/WSj6yrX/Sustainability-Begins-in-Our-Streets.jpg",
      title: "Sustainability Begins in Our Streets",
      text: "Take small actions that make big impacts.",
      btn: "Learn More",
    },
    {
      id: 4,
      img: "https://i.ibb.co.com/fGkBRH5z/Help-authorities-identify-and-repair-damaged-roads-quickly.jpg",
      title: "Spot It. Report It. Fix It.",
      text: "Help authorities identify and repair damaged roads quickly.",
      btn: "Report Road Damage",
    },
    {
      id: 5,
      img: "https://i.ibb.co.com/XrJH9Z0S/Report-illegal-constructions-affecting-community-safety.jpg",
      title: "Protect Our Public Spaces",
      text: "Report illegal constructions affecting community safety.",
      btn: "Report Violation",
    },    
  ];

  const [current, setCurrent] = useState(0);

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`transition-all duration-700 ease-in-out ${
            index === current
              ? "opacity-100 translate-x-0"
              : "opacity-0 absolute inset-0 translate-x-full"
          }`}
        >
          <div className="grid md:grid-cols-2 items-center w-full p-8 bg-base-200 h-[450px]">
            {/* Left Image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="rounded-xl w-full h-[400px] object-cover"
            />
            {/* Right Text */}
            <div className="flex flex-col gap-4 text-left p-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {slide.title}
              </h2>
              <p className="text-gray-600">{slide.text}</p>
              <button className="btn btn-primary w-fit mt-2">
                {slide.btn}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="btn btn-circle absolute left-5 top-1/2 transform -translate-y-1/2 bg-base-300/60 backdrop-blur-sm"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="btn btn-circle absolute right-5 top-1/2 transform -translate-y-1/2 bg-base-300/60 backdrop-blur-sm"
      >
        ❯
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 absolute bottom-4 w-full">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full ${
              i === current ? "bg-primary" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
