import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { GoStopwatch } from "react-icons/go";
import { GrProjects, GrUserExpert } from "react-icons/gr";
import { MdApproval } from "react-icons/md";

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
  return (
    <section className="mt-24">
      <h1 className="font-bold text-center pb-8 text-3xl">Why Choose us?</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {allChooseUs?.map((choose) => (
          <div
            key={choose?.id}
            className="lg:w-96 m-6  p-6 rounded-md bg-[#381f2d]/40   "
          >
            <div className="backdrop-blur-xl p-4 rounded-sm   bg-[#381f2d] ">
              <h1 className="text-3xl mt-4 mb-2"> {choose?.icon}</h1>
              <h1
                className={`text-2xl font-bold gap-2 items-center pb-2 ${choose?.color}`}
              >
                {choose?.name}
              </h1>
              <p className="mb-4 text-[18px] pt-2">{choose?.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
