/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";

type TInput = {
  user_name: string;
  user_email: string;
  user_number: string;
  user_message: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<TInput>();
  const form = useRef<HTMLFormElement>(null);

  const onSubmit: SubmitHandler<TInput> = (data) => {
    console.log(data);
    if (form.current) {
      emailjs
        .sendForm("servicegraphitech", "template_ulg1uq6", form.current, {
          publicKey: "B9eRXvIMGw4yENXED",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            reset();
          },
          (error: { text: any }) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.log("Form reference is null.");
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-4 lg:py-8">
        <div className="mb-4">
          <div className="mb-4 max-w-3xl text-center sm:text-center md:mx-auto ">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-white dark:text-white text-2xl lg:text-4xl">
              Get in Touch
            </h2>
          </div>
        </div>
        <div className="flex items-stretch  justify-center">
          <div className="grid md:grid-cols-2 items-center mt-4 ">
            <div className="h-full p-4 lg:pr-6 mt-2 lg:mt-4 ">
              <p className="mt-3 mb-12 text-lg text-white dark:text-slate-400">
                We’d love to hear from you! Whether you have questions,
                feedback, or need support, our team is here to help. Fill out
                the form below, or reach out to us via phone or email. Your
                satisfaction is our priority, and we’re committed to providing
                you with excellent service.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#da5d10] text-gray-50">
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
                      1300 Elmwood Avenue,
                    </p>
                    <p className="text-white dark:text-slate-400">
                      Buffalo, NY 14222, USA
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#da5d10] text-gray-50">
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
                      Mobile: +880263627
                    </p>
                    <p className="text-white dark:text-slate-400">
                      Mail: graphitech.sales@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#da5d10] text-gray-50">
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
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-white relative px-2 p-4 bg-[#17334e] rounded-md shadow-lg sm:rounded-3xl ">
                <div className="text-center pb-4 -mt-4">
                  <h1 className="text-3xl font-bold pt-4">Contact Us!</h1>

                  <p className="text-gray-300">
                    Fill up the form below to send us a message.
                  </p>
                </div>
                <div className="flex justify-center ">
                  <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="text-white">Name:</span>
                      </div>
                      <input
                        type="text"
                        placeholder="name"
                        className={`input input-bordered bg-[#1a2f45] w-[350px]  lg:w-[450px] ${
                          errors.user_name ? "border-red-500" : ""
                        }`}
                        {...register("user_name", {
                          required: "Name is required",
                        })}
                      />
                    </label>
                    {errors.user_name && (
                      <p className="text-red-500 text-sm">
                        {errors.user_name.message}
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
                        className={`input input-bordered bg-[#1a2f45] w-[350px]  lg:w-[450px] ${
                          errors.user_email ? "border-red-500" : ""
                        }`}
                        {...register("user_email", {
                          required: "email is required",
                        })}
                      />
                    </label>
                    {errors.user_email && (
                      <p className="text-red-500 text-sm">
                        {errors.user_email.message}
                      </p>
                    )}
                    <label className="form-control">
                      <div className="label">
                        <span className="text-white ">Message:</span>
                      </div>
                      <textarea
                        className={` textarea textarea-bordered h-24  bg-[#1a2f45] w-[350px]  lg:w-[450px] ${
                          errors.user_message ? "border-red-500" : ""
                        }`}
                        {...register("user_message", {
                          required: "message is required",
                        })}
                        placeholder="message"
                      ></textarea>
                    </label>
                    {errors.user_message && (
                      <p className="text-red-500 text-sm">
                        {errors.user_message.message}
                      </p>
                    )}

                    <div className="mt-4 mb-4">
                      <button className="w-[350px]  lg:w-[450px] h-14 btn-outline border-none duration-300 rounded-md text-[18px] text-white font-bold hover:bg-[#2a4f75] bg-[#1a2f45]">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
