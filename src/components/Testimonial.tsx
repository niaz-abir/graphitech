/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section>
      <section className="max-w-5xl mx-auto w-full px-10 py-10">
        <div className="flex items-center justify-center flex-col mb-8 gap-y-2 py-5">
          <h2 className="text-2xl  md:text-3xl lg:text-5xl font-bold  text-center text-white">
            Heres what our
            <span className="text-pink-400"> customers</span> have to say
          </h2>
          <p className="text-lg font-medium text-slate-400/70">
            Discover how our service can benefit you have grow.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="border p-7 rounded-xl bg-[#381f2d] drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between"
          >
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Efficient customer support
              </p>
              <p className="font-medium text-white">
                The customer support team at our service is incredibly
                responsive and helpful. They went above and beyond to assist me
                with my issue.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/women/43.jpg"
                alt="Emily Smith"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-white">
                Emily Smith
              </p>
              <p className="text-sm font-medium text-slate-100/70">
                Marketing Manager at ABC Company
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="border p-7 rounded-xl bg-[#381f2d] drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between"
          >
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Excellent product features
              </p>
              <p className="font-medium text-white">
                The features offered by our service are outstanding. They have
                greatly improved our workflow and efficiency.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/men/34.jpg"
                alt="Michael Johnson"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-white">
                Michael Johnson
              </p>
              <p className="text-sm font-medium text-slate-100/70">
                CEO at XYZ Corporation
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="border p-7 rounded-xl bg-[#381f2d] drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between"
          >
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Seamless integration process
              </p>
              <p className="font-medium text-white">
                Integrating our systems with our service was smooth and
                hassle-free. The support team guided us through every step of
                the process.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/women/71.jpg"
                alt="Sarah Brown"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-white">
                Sarah Brown
              </p>
              <p className="text-sm font-medium text-slate-100/70">
                CTO at XYZ Corporation
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="border p-7 rounded-xl bg-[#381f2d] drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between"
          >
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Reliable service uptime
              </p>
              <p className="font-medium text-white">
                Our service has consistently maintained high uptime, ensuring
                that our operations run smoothly without any disruptions.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/men/71.jpg"
                alt="James White"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-white">
                James White
              </p>
              <p className="text-sm font-medium text-slate-100/70">
                COO at XYZ Corporation
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
