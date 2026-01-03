import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co.com/BKCNFpC3/Report-garbage-pile-ups-and-keep-your-neighborhood-fresh.jpg",
      title: "A Clean City Starts With You",
      text: "Report garbage pile-ups and keep your neighborhood fresh.",
      btn: "Report Garbage",
      link: "/add-issue",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/nsXQTgp9/Join-Hands-for-a-Cleaner-Tomorrow.jpg",
      title: "Join Hands for a Cleaner Tomorrow",
      text: "Participate in cleanup drives and inspire change.",
      btn: "Join Cleanup Drive",
      link: "/issues",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/WSj6yrX/Sustainability-Begins-in-Our-Streets.jpg",
      title: "Sustainability Begins in Our Streets",
      text: "Small actions today create a better tomorrow.",
      btn: "Learn More",
      link: "/about",
    },
  ];

  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out
            ${
              index === current
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 z-0"
            }`}
        >
          {/* Background Image */}
          <img
            src={slide.img}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 max-w-2xl text-white space-y-5">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg text-gray-200">{slide.text}</p>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => navigate(slide.link)}
                  className="btn btn-primary"
                >
                  {slide.btn}
                </button>

                <button
                  onClick={() => navigate("/issues")}
                  className="btn btn-outline text-white border-white hover:bg-white hover:text-black"
                >
                  View Issues
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
        className="btn btn-circle absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white border-none hover:bg-black/70"
      >
        ❮
      </button>

      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="btn btn-circle absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white border-none hover:bg-black/70"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-all
              ${i === current ? "bg-primary w-6" : "bg-white/60"}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
