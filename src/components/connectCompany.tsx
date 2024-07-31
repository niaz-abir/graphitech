import React from "react";
import image1 from "../../public/images/logo-3.webp";
import Image from "next/image";

export default function ConnectCompany() {
  const allCompany = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 1,
      image: image1,
    },
    {
      id: 1,
      image: image1,
    },
    {
      id: 1,
      image: image1,
    },
    {
      id: 1,
      image: image1,
    },
    {
      id: 1,
      image: image1,
    },
    {
      id: 1,
      image: image1,
    },
    {
      id: 1,
      image: image1,
    },
    {
      id: 1,
      image: image1,
    },
  ];

  return (
    <section className="mt-24 mb-14 border-t-2 border-[#23131c] border-r-2 border-l-2 p-4">
      <div className="grid grid-cols-1 p-6 items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold pb-6">
            Collaborating With Top Industry Experts!
          </h1>
          <p>
            Our agency is a nexus for premier partnerships, trusted by over a
            hundred leading brands to create impactful and innovative
            collaborations. Experience the synergy of creativity and strategy in
            our portfolio of successful projects.
          </p>
          <button className="w-32 h-14 mt-4 btn-outline border-none rounded-md text-[18px] text-white font-bold hover:bg-[#23131c] bg-[#532a41]">
            Connect Now
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {allCompany?.map((company) => (
            <div key={company?.id}>
              <Image
                src={company?.image}
                alt=""
                height={100}
                width={120}
                className="object-fit object-center  min-w-[10rem]"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
