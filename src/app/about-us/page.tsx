/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import image from "../../../public/images/hero.jpg";
import Link from "next/link";
import { MdOutlineWavingHand } from "react-icons/md";
const AboutUs = () => {
  return (
    <section className="max-w-6xl pb-14 mx-auto mt-6">
      <h1 className="font-bold text-5xl pl-4 lg:pl-0 pb-6">About us</h1>

      <div>
        <p className="lg:text-[1.25rem] text-[1rem] p-4 leading-relaxed text-foreground/80">
          <span className="font-semibold">Graphitech</span> distinguishes itself
          as more than a digital agency by employing innovators, creators and
          strategists who are committed to propelling your brand forward in the
          digital era. With a founding principle of flourishing and imagining
          the extraordinary, our organization provides a range of services
          tailored to enhance the online visibility and interaction of your
          brand.
        </p>
        <p className="lg:text-[1.25rem] text-[1rem] mt-8 p-4 leading-relaxed text-foreground/80">
          Distinguishes itself as more than a digital agency by employing
          innovators, creators and strategists who are committed to propelling
          your brand forward in the digital era. With a founding principle of
          flourishing and imagining the extraordinary, our organization provides
          a range of services tailored to enhance the online visibility and
          interaction of your brand. distinguishes itself as more than a digital
          agency by employing innovators, creators and strategists who are
          committed to propelling your brand forward in the digital era. With a
          founding principle of flourishing and imagining the extraordinary, our
          organization provides a range of services tailored to enhance the
          online visibility and interaction of your brand.
        </p>
      </div>

      <div>
        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <Image
              className=" w-full rounded-md object-cover"
              height={400}
              width={500}
              src={image}
              alt="Winding mountain road"
            />
          </div>

          <div className="max-w-lg bg-[#1c2f42] rounded-md md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
            <div className="flex flex-col p-6 md:px-16">
              <h2 className="text-2xl font-bold uppercase text-[#da5d10] lg:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4">
                Ready to see how we can work together? Meet our team to discuss
                your needs and explore how our solutions can drive your success.
                We'll tailor our approach to your goals and work towards
                exceptional results together.
              </p>

              <div className="mt-8">
                <button className="w-32 pl-2 h-14 btn-outline border-none rounded-md text-[18px] text-white font-bold  bg-gradient-to-r  from-[#c4672d] to-[#da5d10]">
                  <Link href="contact-us" className="flex gap-2 items-center">
                    Let's Talk <MdOutlineWavingHand />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-4 lg:flex-row gap-4 items-center mt-24">
        <div className="shadow-xl shadow-[#23131c] px-6 py-10 border-l-2 border-gray-600">
          <h1 className="font-bold text-2xl pb-4  ">Our Goal</h1>
          <p>
            Our goal is to deliver exceptional solutions tailored to your needs,
            ensuring success through innovation and dedicated support. We are
            committed to understanding your unique challenges and exceeding your
            expectations, driving growth and long-term success for your
            business.
          </p>
        </div>
        <div className="shadow-xl shadow-[#23131c] px-6 py-10 border-l-2 border-gray-500">
          <h1 className="font-bold text-2xl pb-4">Our Mission</h1>
          <p>
            Our mission is to empower your business with innovative, tailored IT
            solutions that drive efficiency and growth. We are dedicated to
            providing exceptional service and support, ensuring your success
            through every challenge and opportunity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
