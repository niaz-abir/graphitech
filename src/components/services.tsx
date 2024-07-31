"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhotoVideo } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { IoIosApps } from "react-icons/io";
import { RiWebhookLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { VscGraph } from "react-icons/vsc";

const Services = () => {
  const allServices = [
    {
      id: 1,
      name: "Video Editing",
      no: "01",
      icon: <FaPhotoVideo />,
      details:
        "Its a great service from us .We can do our best hopefully everyone can do it easily .Thank you for taking services",
    },
    {
      id: 2,
      name: "Web Development",
      no: "02",
      icon: <RiWebhookLine />,
      details:
        "Its a great service from us .We can do our best hopefully everyone can do it easily .Thank you for taking services",
    },
    {
      id: 3,
      name: "App Development",
      no: "03",
      icon: <IoIosApps />,
      details:
        "Its a great service from us .We can do our best hopefully everyone can do it easily .Thank you for taking services",
    },
    {
      id: 4,
      name: "Graphic Design",
      no: "04",
      icon: <GrAppsRounded />,
      details:
        "Its a great service from us .We can do our best hopefully everyone can do it easily .Thank you for taking services",
    },
    {
      id: 5,
      name: "Digital Marketing",
      no: "05",
      icon: <TfiWrite />,
      details:
        "Its a great service from us .We can do our best hopefully everyone can do it easily .Thank you for taking services",
    },
    {
      id: 6,
      name: "Brand Building",
      no: "06",
      icon: <VscGraph />,
      details:
        "Its a great service from us .We can do our best hopefully everyone can do it easily .Thank you for taking services",
    },
  ];

  return (
    <section>
      <div className="text-center mb-14 mt-14 p-4">
        <h1 className="font-bold text-center text-4xl">Our Services</h1>
        <p className="text-[18px] text-gray-400">
          We always try to give our best services at the moment. There are a lot
          of services here.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {allServices.map((service) => (
          <motion.div
            key={service.id}
            className="bg-[#381f2d] rounded-md p-4 lg:w-96 m-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="border-2 w-14 font-bold border-[#57444f] px-4 py-2 -ml-8 -mt-8 rounded-md bg-[#382931]">
              {service.no}
            </div>
            <motion.div
              className="p-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.4,
                  },
                },
              }}
            >
              <motion.h1
                className="font-bold flex bg-[#311d28] rounded-md gap-2 pb-2 pt-2 text-[20px] lg:text-[28px] items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-pink-600 p-2 rounded-md">
                  {service.icon}
                </span>
                {service.name}
              </motion.h1>
              <motion.h2
                className="text-[18px] pt-4 pb-6"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                {service.details}
              </motion.h2>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
