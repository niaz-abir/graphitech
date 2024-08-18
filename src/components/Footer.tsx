/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import {
  FaCodeBranch,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import image1 from "../../public/images/WhatsApp_Image_2024-08-05_at_03.20.56_95cc1b03-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mt-20 pb-6 shadow-2xl  border-t-2 border-[#204964] shadow-[#23131c]"
    >
      <footer className="footer text-white p-10">
        <div>
          <h1 className="text-[25px] font-bold">"Explore New Frontiers,</h1>
          <h1 className="text-[25px] font-bold">
            Let Your Business Soar High"
          </h1>
          <button className="p-4 mt-4 pl-2  btn-outline border-none rounded-md text-[18px] text-white font-bold transition-all duration-300 bg-gradient-to-r from-[#c4672d] to-[#da5d10] ">
            <Link href="contact-us" className="pt-2">
              Let's Connect
            </Link>
          </button>
        </div>

        <nav className="font-semibold text-[16px]">
          <h6 className="font-bold text-white text-[18px]">Services</h6>
          <a className="link link-hover text-gray-300">Development</a>
          <a className="link link-hover text-gray-300">Design</a>
          <a className="link link-hover text-gray-300">Marketing</a>
          <a className="link link-hover text-gray-300">Branding</a>
          <a className="link link-hover text-gray-300">Advertisement</a>
        </nav>
        <nav className="font-semibold text-[16px] text-gray-300">
          <h6 className="font-bold text-white text-[18px]">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-[16px]">Address</h6>
          <p className="text-[20px]"> 1300 Elmwood Avenue,</p>
          <p className="text-[20px]"> Buffalo, NY 14222, USA</p>
          <h6 className="font-semibold text-[16px] pt-2">Number:</h6>
          <p className="text-[20px]"> +1 716 406 7972</p>
        </nav>
      </footer>
      <div className="flex justify-between p-2">
        <div>
          <h4>Copyright © $2024 - All right reserved</h4>
        </div>
        <div className="flex gap-2">
          <Link href="https://www.facebook.com/graphitechsolution2">
            <FaFacebookSquare className="text-3xl " />
          </Link>
          <FaInstagram className="text-3xl" />

          <Link href="https://www.linkedin.com/company/graphitech-solution/?viewAsMember=true">
            <FaLinkedin className="text-3xl " />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
