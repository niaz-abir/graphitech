import Image from "next/image";
import React from "react";
import image from "../../../public/images/hero.jpg";
const AboutUs = () => {
  return (
    <section className="max-w-6xl pb-14 mx-auto mt-6">
      <h1 className="font-bold text-5xl pb-6">About us</h1>

      <div>
        <p className="text-[1.25rem] leading-relaxed text-foreground/80">
          <span className="font-semibold">Graphitech</span> distinguishes itself
          as more than a digital agency by employing innovators, creators and
          strategists who are committed to propelling your brand forward in the
          digital era. With a founding principle of flourishing and imagining
          the extraordinary, our organization provides a range of services
          tailored to enhance the online visibility and interaction of your
          brand.
        </p>
        <p className="text-[1.25rem] mt-8 leading-relaxed text-foreground/80">
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

          <div className="max-w-lg bg-[#23131c] rounded-md md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
            <div className="flex flex-col p-6 md:px-16">
              <h2 className="text-2xl font-bold uppercase text-pink-600 lg:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="mt-8">
                <button className="w-28 h-14 btn-outline border-none rounded-md text-[18px] text-white font-bold hover:bg-[#23131c] bg-[#532a41]">
                  contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center mt-24">
        <div className="shadow-xl shadow-[#23131c] px-6 py-10 border-l-2 border-gray-600">
          <h1 className="font-bold text-2xl pb-4  ">Our Goal</h1>
          <p>
            To revolutionize the industry by crafting brand stories that
            inspire, engage, and forge deep connections with people. Our mission
            is to create memorable narratives that resonate on an emotional
            level, driving meaningful engagement and testing.Thank you very
            much.We will create great memory.
          </p>
        </div>
        <div className="shadow-xl shadow-[#23131c] px-6 py-10 border-l-2 border-gray-500">
          <h1 className="font-bold text-2xl pb-4">Our Mission</h1>
          <p>
            To revolutionize the industry by crafting brand stories that
            inspire, engage, and forge deep connections with people. Our mission
            is to create memorable narratives that resonate on an emotional
            level, driving meaningful engagement and testing.Thank you very
            much.We will create great memory.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
