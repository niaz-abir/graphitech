import React from "react";
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
      id: 1,
      name: "Web Development",
      no: "02",
      icon: <RiWebhookLine />,
      details:
        "Its a great service from us .We can do our best hopefully everyone can do it easily .Thank you for taking services",
    },
    {
      id: 1,
      name: "App Development",
      no: "03",
      icon: <IoIosApps />,
      details:
        "Its a great service from us .We can do our best hopefully everyone can do it easily .Thank you for taking services",
    },
    {
      id: 1,
      name: "Graphic Design",
      no: "04",
      icon: <GrAppsRounded />,
      details:
        "Its a great service from us .We can do our best hopefully everyone can do it easily .Thank you for taking services",
    },
    {
      id: 1,
      name: "Digital Marketing",
      no: "05",
      icon: <TfiWrite />,
      details:
        "Its a great service from us .We can do our best hopefully everyone can do it easily .Thank you for taking services",
    },
    {
      id: 1,
      name: "Brand Building",
      no: "06",
      icon: <VscGraph />,
      details:
        "Its a great service from us .We can do our best hopefully everyone can do it easily .Thank you for taking services",
    },
  ];
  return (
    <section>
      <div className="text-center mb-14 mt-14 p-4 ">
        <h1 className="font-bold  text-center text-4xl">Our Services</h1>
        <p className="text-[18px] text-gray-400">
          We always try to give our best services at the moment.There are lot of
          service here.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {allServices?.map((services) => (
          <div
            key={services?.id}
            className="bg-[#381f2d] rounded-md p-4 lg:w-96 m-6 hover:translate-y-3 duration-300 "
          >
            <div className="border-2 w-14 font-bold border-[#57444f]  px-4 py-2 -ml-8 -mt-8 rounded-md bg-[#382931]">
              {services?.no}
            </div>
            <div className="p-4">
              <h1 className="font-bold flex bg-[#311d28] rounded-md gap-2 pb-2 pt-2 text-3xl items-center ">
                <span className="text-pink-600  p-2 rounded-md">
                  {services?.icon}
                </span>
                {services?.name}
              </h1>
              <h2 className="text-[18px] pt-4 pb-6">{services?.details}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
