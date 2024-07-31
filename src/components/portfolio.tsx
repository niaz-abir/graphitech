/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState } from "react";

const Portfolio = () => {
  const allPortfolio = [
    {
      id: 1,
      link: "https://i.ibb.co/HKQF7qb/Screenshot-2444.png",
      name: "booknokery.com",
      details: "A book selling website",
    },
    {
      id: 1,
      link: "https://i.ibb.co/kgkjhtg/Screenshot-2445.png",
      name: "innerrequire.com",
      details: "Searching job website",
    },
    {
      id: 1,
      link: "https://i.ibb.co/6PBrwvM/Screenshot-2446.png",
      name: "pizzazz.com",
      details: "Finding your pizza",
    },
    {
      id: 1,
      link: "https://i.ibb.co/qjLPtzY/Screenshot-2447.png",
      name: "miakyi.com",
      details: "choose you product",
    },
    {
      id: 1,
      link: "https://i.ibb.co/B6rGx9H/Screenshot-2448.png",
      name: "deskpass.com",
      details: "collection of product",
    },
    {
      id: 1,
      link: "https://i.ibb.co/MVhm4M9/Screenshot-2449.png",
      name: "alhera.com",
      details: "making school website",
    },
  ];

  return (
    <section className="mt-14 bg-[#23131c] p-8 rounded-md ">
      <div className="text-center pb-6">
        <h1 className="font-bold text-center text-4xl pb-2">Latest Project</h1>
        <p className="text-gray-400 text-[18px]">
          Watch our latest project and except your hope you can enjoy.
        </p>
      </div>

      <div>
        <div className="hidden lg:block">
          <div className="carousel carousel-center  rounded-box max-w-6xl p-4">
            {allPortfolio?.map((portfolio) => (
              <div key={portfolio?.id} className="max-w-3xl">
                <div className="carousel-item w-[300px] lg:w-[550px] flex flex-col">
                  <img
                    src={portfolio?.link}
                    className="rounded-box w-[250px] lg:w-[500px]"
                  />
                  <h1 className="text-[#c42d82] font-semibold mt-2">
                    {portfolio?.name}
                  </h1>
                  <h4>{portfolio?.details}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden block">
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
      </div>

      {/* <div className="flex justify-center mt-4">
        <button className="w-28 h-14 btn-outline border-none rounded-md text-[18px] text-white font-bold hover:bg-[#23131c] bg-[#532a41]">
          View All
        </button>
      </div> */}
    </section>
  );
};

export default Portfolio;
