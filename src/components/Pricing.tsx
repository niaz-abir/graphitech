/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";

const Pricing = () => {
  return (
    <section
      id="package"
      className="py-26 mt-8 dark:bg-gray-100 dark:text-gray-800"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-wider uppercase text-gray-300">
            Package
          </span>
          <h2 className="text-3xl font-bold lg:text-4xl">
            Choose your best plan
          </h2>
        </div>
        <div className="flex flex-wrap items-stretch -mx-4 p-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.6 }}
            className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 "
          >
            <div className="flex flex-grow flex-col p-6  rounded shadow sm:p-8 bg-[#1a2f45] ">
              <div>
                <h4 className="text-2xl font-bold">Web Presence Builder</h4>
              </div>
              <p className="mt-3 mb-3 text-[20px] leading-relaxed dark:text-gray-600">
                Services Included:
              </p>
              <ul className="flex-1  mb-2 dark:text-gray-600">
                <li className="flex mb-2 space-x-2  text-[18px]">
                  <IoMdCheckmarkCircleOutline size={21} />
                  <span>Initial Website Setup & Design</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <IoMdCheckmarkCircleOutline size={21} />
                  <span>Adaptive Device Layouts</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <IoMdCheckmarkCircleOutline size={21} />
                  <span>Basic SEO Setup</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <IoMdCheckmarkCircleOutline size={21} />
                  <span>Contact Form Integration</span>
                </li>
              </ul>

              <p className="mb-3 text-[20px]  leading-relaxed dark:text-gray-600">
                Features:
              </p>
              <ul className="flex-1 mb-6 dark:text-gray-600">
                <li className="flex mb-2 space-x-2  text-[18px]">
                  <GiCheckMark size={18} />
                  <span>1 Video Consultation</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <GiCheckMark size={18} />
                  <span>2 Revisions per Service</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <GiCheckMark size={18} />
                  <span>Basic Security Implementation</span>
                </li>
              </ul>

              <button className="w-full h-14 btn-outline border-none duration-300 rounded-md text-[18px] text-white font-bold  bg-gradient-to-r from-[#c4672d] to-[#da5d10]">
                <Link href="contact-us">Let's Talk</Link>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.6 }}
            className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0"
          >
            <div className="flex flex-grow flex-col p-6  rounded shadow sm:p-8  bg-[#da5d10]">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Creative Vision Suite</h4>
              </div>
              <p className="mt-3 mb-3 text-[20px] leading-relaxed dark:text-gray-600">
                Services Included:
              </p>
              <ul className="flex-1  dark:text-gray-600">
                <li className="flex mb-2 space-x-2  text-[18px]">
                  <IoMdCheckmarkCircleOutline size={21} />
                  <span>Logo Design & Branding Kit</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <IoMdCheckmarkCircleOutline size={21} />
                  <span>3 Custom Social Media Post Designs</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <IoMdCheckmarkCircleOutline size={21} />
                  <span>Business Card and Stationery Design</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <IoMdCheckmarkCircleOutline size={21} />
                  <span>Basic Print Design Templates</span>
                </li>
              </ul>
              <p className="mt-3 mb-3 text-[20px]  leading-relaxed dark:text-gray-600">
                Features:
              </p>
              <ul className="flex-1 mb-6 dark:text-gray-600">
                <li className="flex mb-2 space-x-2  text-[18px]">
                  <GiCheckMark size={18} />
                  <span>1 Video Consultation</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <GiCheckMark size={18} />
                  <span>3 Revisions per Service</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <GiCheckMark size={18} />
                  <span>Asset Delivery in Multiple Formats</span>
                </li>
              </ul>
              <button className="w-full h-14 btn-outline border-none duration-300 rounded-md text-[18px] text-white font-bold  bg-gradient-to-r from-[#1a2f45] to-[#2b5888]">
                <Link href="contact-us">Let's Talk</Link>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.6 }}
            className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0"
          >
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-[#1a2f45] ">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">
                  Digital Growth Accelerator
                </h4>
              </div>
              <p className="mt-3 mb-3 text-[20px]  leading-relaxed dark:text-gray-600">
                Services Included:
              </p>
              <ul className="flex-1  dark:text-gray-600">
                <li className="flex mb-2 space-x-2  text-[18px]">
                  <IoMdCheckmarkCircleOutline size={21} />
                  <span>Social Media Campaign Creation</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <IoMdCheckmarkCircleOutline size={21} />
                  <span>SEO and Content Optimization</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <IoMdCheckmarkCircleOutline size={21} />
                  <span>Paid Advertising Strategy</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <IoMdCheckmarkCircleOutline size={21} />
                  <span>Email Marketing Campaign Setup</span>
                </li>
              </ul>
              <p className="mt-3 mb-3 text-[20px]  leading-relaxed dark:text-gray-600">
                Features:
              </p>
              <ul className="flex-1 mb-6 dark:text-gray-600">
                <li className="flex mb-2 space-x-2  text-[18px]">
                  <GiCheckMark size={18} />
                  <span>2 Video Consultations</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <GiCheckMark size={18} />
                  <span>4 Revisions per Service</span>
                </li>
                <li className="flex mb-2 space-x-2 text-[18px]">
                  <GiCheckMark size={18} />
                  <span>Monthly Analytics & Performance Reports</span>
                </li>
              </ul>
              <button className="w-full h-14 btn-outline border-none duration-300 rounded-md text-[18px] text-white font-bold  bg-gradient-to-r from-[#c4672d] to-[#da5d10]">
                <Link href="contact-us">Let's Talk</Link>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
