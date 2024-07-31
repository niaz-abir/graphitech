"use client";
import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { GoStopwatch } from "react-icons/go";
import { GrProjects, GrUserExpert } from "react-icons/gr";
import { MdApproval } from "react-icons/md";
import { motion } from "framer-motion";

const ChooseUs = () => {
  const allChooseUs = [
    {
      id: 1,
      name: "Unmatched Expertise",
      icon: <GrUserExpert />,
      color: "#c42d82",
      text: "We try to give proper feedback for client.Without requiremnt we are not doing anything . There are lot of people who can connect with us",
    },
    {
      id: 1,
      name: "Customized Solutions",
      icon: <GrProjects />,
      color: "#c42d82",
      text: "We try to give proper feedback for client.Without requiremnt we are not doing anything . There are lot of people who can connect with us",
    },
    {
      id: 1,
      name: "24/7 Support",
      icon: <GoStopwatch />,
      color: "#c42d82",
      text: "We try to give proper feedback for client.Without requiremnt we are not doing anything . There are lot of people who can connect with us",
    },
    {
      id: 1,
      name: "Proactive Approach",
      icon: <MdApproval />,
      color: "#c42d82",
      text: "We try to give proper feedback for client.Without requiremnt we are not doing anything . There are lot of people who can connect with us",
    },
    {
      id: 1,
      name: "Transparent Pricing",
      icon: <GiMoneyStack />,
      color: "#c42d82",
      text: "We try to give proper feedback for client.Without requiremnt we are not doing anything . There are lot of people who can connect with us",
    },
    {
      id: 1,
      name: "Innovation-Driven",
      icon: <FaHandsClapping />,
      color: "#c42d82",
      text: "We try to give proper feedback for client.Without requiremnt we are not doing anything . There are lot of people who can connect with us",
    },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const iconAndNameVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } },
  };

  return (
    <section className="mt-16">
      <h1 className="font-bold text-center text-4xl">Why Choose us?</h1>
      <p className=" pb-8 pt-2 text-gray-400 text-center">
        We have lot of support form us .You can watch it and discuss with us.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {allChooseUs?.map((choose) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            key={choose?.id}
            className="lg:w-96 m-6  p-6 rounded-md bg-[#381f2d]/40   "
          >
            <div className="backdrop-blur-xl p-4 rounded-sm   bg-[#381f2d] ">
              <motion.h1
                variants={iconAndNameVariants}
                className="text-3xl mt-4 mb-2"
              >
                {" "}
                {choose?.icon}
              </motion.h1>
              <motion.h1
                variants={iconAndNameVariants}
                className={`text-2xl font-bold gap-2 items-center pb-2 ${choose?.color}`}
              >
                {choose?.name}
              </motion.h1>
              <motion.p
                variants={textVariants}
                className="mb-4 text-[18px] pt-2"
              >
                {choose?.text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
