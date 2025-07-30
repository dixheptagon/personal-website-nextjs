"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "John Doe - Sample",
      role: "CEO at TechCorp",
      text: "Working with Forentino was an absolute pleasure. He delivered high-quality work on time and exceeded expectations!",
      image: "/assets/profile-picture.webp",
    },
    {
      name: "Sarah Smith - Sample",
      role: "Product Manager at StartupX",
      text: "Forentino transformed our ideas into an amazing website. The process was smooth and professional from start to finish.",
      image: "/assets/profile-picture.webp",
    },
    {
      name: "David Lee - Sample",
      role: "Founder at Creatify",
      text: "Top-notch development skills and great communication. Highly recommended for anyone looking to build a stunning product.",
      image: "/assets/profile-picture.webp",
    },
    {
      name: "Michael Chen - Sample",
      role: "CTO at Innovate Labs",
      text: "Great attention to detail and excellent design sense. The final product was even better than we imagined!",
      image: "/assets/profile-picture.webp",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="mx-2 bg-white py-16 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto w-11/12 max-w-screen-xl text-center">
        <h2 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-100">
          What Clients Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 8px 24px rgba(100,116,139,0.2)",
              }}
              className="rounded-2xl px-4"
            >
              <div className="my-2 rounded-xl bg-white p-6 shadow-md transition-all dark:bg-slate-900">
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  "{item.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
