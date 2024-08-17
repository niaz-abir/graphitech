"use client";
import Image from "next/image";
import image from "../../public/images/hero.jpg";
import Link from "next/link";

export function Banner() {
  return (
    <section>
      <div className="grid backdrop-blur-xl p-6 rounded-md grid-cols-1  mt-10 items-center justify-items-center md:grid-cols-2">
        <div className="flex flex-col items-center gap-y-5 text-center md:items-start md:text-start">
          <h1 className="text-[clamp(2rem,_4vw+1rem,_4rem)] font-extrabold capitalize leading-tight tracking-tight">
            Transform Your Business with Strategic Innovation
          </h1>
          <p className="max-w-[35rem] text-lg leading-relaxed text-foreground-500">
            At Graphitech, we empower businesses with transformative technology
            tailored to your needs. Our mission is to drive innovation and
            efficiency, helping you navigate the digital landscape with expert
            insights and cutting-edge tools designed to unlock your full
            potential.
          </p>
          <div className="flex items-center gap-x-4 pt-4 pb-4">
            <Link href="/#project">
              <button className="w-28 h-14 bg-gradient-to-r from-[#c4672d] to-[#da5d10] hover:bg-[#132836] border-none rounded-md text-[18px] text-white font-bold transition-all duration-300">
                Our Projects
              </button>
            </Link>

            <button className="w-28 h-14 rounded-md text-white text-[18px] font-bold  transition-all duration-300   bg-[#2e6c96] ">
              Book A Meeting
            </button>
          </div>
        </div>
        <div className="ml-0 lg:ml-6">
          <Image
            src={image}
            alt="Hero"
            className="rounded-md"
            height="600"
            width="600"
          />
        </div>
      </div>
    </section>
  );
}
