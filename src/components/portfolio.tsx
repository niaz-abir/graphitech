/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Portfolio = () => {
  const allPortfolio = [
    {
      id: 1,
      link: "https://i.ibb.co/FqKsh4F/Screenshot-2505.png",
      name: "https://www.degikon.com/",
      details: "A streamlined IT Solutions for Modern Businesses",
    },
    {
      id: 1,
      link: "https://i.ibb.co/gWHDjTk/Screenshot-2507.png",
      name: "https://www.thrivenvision.studio/",
      details: "Innovative IT Strategies, Simplified for Success",
    },
    {
      id: 1,
      link: "https://i.ibb.co/t8FdN0V/Screenshot-2511.png",
      name: "https://aspire-academy.vercel.app/",
      details: "Master Your Future with Aspire Academy",
    },
    {
      id: 1,
      link: "https://i.ibb.co/yyspJfJ/Screenshot-2508.png",
      name: "https://alphachimneyservice.com/",
      details: "Protecting Homes with Alpha Chimney Roofing",
    },
    {
      id: 1,
      link: "https://i.ibb.co/Bc3jnwz/Screenshot-2509.png",
      name: "https://booknookery.vercel.app/",
      details: "Discover, Buy, and Enjoy Books Easily",
    },
    {
      id: 1,
      link: "https://i.ibb.co/x3tQ933/Screenshot-2510.png",
      name: "https://pizzazz-git-main-niaz-abir.vercel.app/",
      details: "Fresh, Delicious Pizzas Delivered to You",
    },
  ];

  return (
    <section className="mt-14 bg-[#23131c] p-8 rounded-md ">
      <div className="text-center pb-6">
        <h1 className="font-bold text-center pt-6 text-4xl pb-6">
          Latest Project
        </h1>
        <p className="text-gray-400 text-[18px]">
          Watch our latest project and surpass your expectations for an
          enjoyable experience
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="hidden lg:block">
          <div className="carousel carousel-center  rounded-box max-w-6xl p-4">
            {allPortfolio?.map((portfolio) => (
              <div key={portfolio?.id} className="max-w-3xl">
                <div className="carousel-item  w-[300px] lg:w-[550px] flex flex-col">
                  <img
                    src={portfolio?.link}
                    className="rounded-box  w-[250px] lg:w-[500px]"
                  />
                  <h1 className="text-[#c42d82] font-semibold mt-2 ml-2">
                    <Link href={portfolio?.name}>{portfolio?.name}</Link>
                  </h1>
                  <h4 className="ml-2">{portfolio?.details}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="lg:hidden block"
      >
        <div className="carousel carousel-vertical rounded-box h-96">
          {allPortfolio?.map((portfolio) => (
            <div key={portfolio?.id}>
              <div className="carousel-item h-full p-4 flex flex-col">
                <img src={portfolio?.link} />
                <h1 className="text-[#c42d82] mt-2 font-semibold">
                  {portfolio?.name}
                </h1>
                <h4>{portfolio?.details}</h4>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* <div className="flex justify-center mt-4">
        <button className="w-28 h-14 btn-outline border-none rounded-md text-[18px] text-white font-bold hover:bg-[#23131c] bg-[#532a41]">
          View All
        </button>
      </div> */}
    </section>
  );
};

export default Portfolio;
