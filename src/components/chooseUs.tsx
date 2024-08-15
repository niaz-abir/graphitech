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
      color: "#00A896",
      text: "Leverage our unmatched IT expertise to drive innovation, enhance efficiency, and fuel your business growth with cutting-edge solutions.",
    },
    {
      id: 1,
      name: "Customized Solutions",
      icon: <GrProjects />,
      color: "#C1DF1F",
      text: "Unlock success with our customized IT solutions, tailored to meet your unique business needs and drive optimal performance.",
    },
    {
      id: 1,
      name: "24/7 Support",
      icon: <GoStopwatch />,
      color: "#F58549",
      text: "Experience peace of mind with our 24/7 IT support, ensuring your systems are always up and running, anytime you need us.",
    },
    {
      id: 1,
      name: "Proactive Approach",
      icon: <MdApproval />,
      color: "#0CCA4A",
      text: "Stay ahead with our proactive IT approach, anticipating issues before they arise to keep your business running smoothly.",
    },
    {
      id: 1,
      name: "Transparent Pricing",
      icon: <GiMoneyStack />,
      color: "#EFBCD5",
      text: "Benefit from our transparent pricing, with clear, upfront costs, ensuring no surprises and complete trust in our IT services.",
    },
    {
      id: 1,
      name: "Innovation-Driven",
      icon: <FaHandsClapping />,
      color: "#E84855",
      text: "Empower your business with our innovation-driven IT services, continuously evolving to deliver cutting-edge solutions.",
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
      <p className=" pb-8 pt-2 text-gray-300 text-[18px] text-center">
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
            className="lg:w-96 m-6  p-6 rounded-md bg-[#1a2f45]/40   "
          >
            <div className="backdrop-blur-xl p-4 rounded-sm   bg-[#1a2f45] ">
              <motion.h1
                variants={iconAndNameVariants}
                className="text-3xl lg:text-4xl mt-4 mb-2   "
                style={{ color: choose?.color }}
              >
                {" "}
                {choose?.icon}
              </motion.h1>
              <motion.h1
                variants={iconAndNameVariants}
                className="text-2xl font-bold gap-2 items-center pb-2 "
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
