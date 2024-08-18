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
      id: 2,
      name: "Web Development",
      no: "02",
      icon: <RiWebhookLine />,
      details:
        "Build custom, responsive websites tailored to your business. From design to deployment, we create web solutions that drive success.",
    },
    {
      id: 4,
      name: "Graphic Design",
      no: "04",
      icon: <GrAppsRounded />,
      details:
        "Stunning visuals that capture attention and convey your message. From logos to marketing materials, we design for impact and clarity.",
    },
    {
      id: 5,
      name: "Digital Marketing",
      no: "05",
      icon: <TfiWrite />,
      details:
        "Boost your brand with targeted online strategies. From SEO to social media, we drive growth and enhance your digital presence.",
    },
    {
      id: 1,
      name: "Video Editing",
      no: "01",
      icon: <FaPhotoVideo />,
      details:
        "Transform raw footage into polished videos with expert editing, tailored to your needs. Professional results, every time.",
    },

    {
      id: 3,
      name: "App Development",
      no: "03",
      icon: <IoIosApps />,
      details:
        "Create custom, user-friendly apps that meet your business needs. From concept to launch, we build mobile solutions that engage and perform.",
    },

    {
      id: 6,
      name: "Brand Building",
      no: "06",
      icon: <VscGraph />,
      details:
        "Create a strong, memorable brand identity. We craft strategies and visuals that define your brand and connect with your audience effectively.",
    },
  ];

  return (
    <section id="services">
      <div className="text-center mb-14 mt-14 p-4">
        <h1 className="font-bold text-center text-4xl">Our Services</h1>
        <p className="text-[18px] text-gray-300">
          From enhancing your digital presence to creating impactful designs, we
          provide <br />
          solutions that drive business growth.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {allServices.map((service) => (
          <motion.div
            key={service.id}
            className="bg-[#1a2f45] rounded-md p-4 lg:w-96 m-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
                className="font-bold flex bg-[#12202e] rounded-md gap-2 pb-2 pt-2 text-[20px] lg:text-[28px] items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[#f37021] p-2 rounded-md">
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
