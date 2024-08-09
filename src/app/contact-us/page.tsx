/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type TInput = {
  name: string;
  email: string;
  message: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInput>();

  const onSubmit: SubmitHandler<TInput> = (data) => {
    console.log(data);
  };

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-4 lg:py-8">
        <div className="mb-4">
          <div className="mb-4 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-white dark:text-white text-3xl sm:text-5xl">
              Get in Touch
            </h2>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6 mt-8 ">
              <p className="mt-3 mb-12 text-lg text-white dark:text-slate-400">
                className aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                scelerisque sagittis ante, ac tincidunt sem venenatis ut.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-pink-700 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white dark:text-white">
                      Our Address
                    </h3>
                    <p className="text-white dark:text-slate-400">
                      1230 Maecenas Street Donec Road
                    </p>
                    <p className="text-white dark:text-slate-400">
                      New York, EEUU
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-pink-700 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white dark:text-white">
                      Contact
                    </h3>
                    <p className="text-white dark:text-slate-400">
                      Mobile: +1 (123) 456-7890
                    </p>
                    <p className="text-white dark:text-slate-400">
                      Mail: tailnext@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-pink-700 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white dark:text-white">
                      Working hours
                    </h3>
                    <p className="text-white dark:text-slate-400">
                      Monday - Friday: 08:00 - 17:00
                    </p>
                    <p className="text-white dark:text-slate-400">
                      Saturday &amp; Sunday: 08:00 - 12:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-white relative px-2 p-4 bg-[#23131c] shadow-lg sm:rounded-3xl sm:p-16">
                <div className="text-center pb-4 -mt-4 ">
                  <h1 className="text-3xl font-bold">Contact Us!</h1>

                  <p className="text-gray-300">
                    Fill up the form below to send us a message.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="text-white">Name:</span>
                    </div>
                    <input
                      type="text"
                      placeholder="name"
                      className={`input input-bordered bg-[#44363e] w-[450px] ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      {...register("name", { required: "Name is required" })}
                    />
                  </label>
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}

                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="text-white">Email:</span>
                    </div>
                    <input
                      required
                      type="text"
                      placeholder="email"
                      className={`input input-bordered bg-[#44363e] w-[450px] ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      {...register("email", { required: "email is required" })}
                    />
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                  <label className="form-control">
                    <div className="label">
                      <span className="text-white ">Message:</span>
                    </div>
                    <textarea
                      className={` textarea textarea-bordered h-24  bg-[#44363e] w-[450px] ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      {...register("message", {
                        required: "message is required",
                      })}
                      placeholder="message"
                    ></textarea>
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}

                  <div className="mt-4 mb-4">
                    <button className="w-[450px] h-14 btn-outline border-none duration-300 rounded-md text-[18px] text-white font-bold hover:bg-[#23131c] bg-[#532a41]">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
