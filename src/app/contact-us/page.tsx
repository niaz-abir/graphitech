import React from "react";

const ContactUs = () => {
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
            <div className="card h-fit max-w-6xl p-5 md:p-8" id="form">
              <div className="min-h-screen bg-[#392b33] rounded-md py-2 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-800 to-pink-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                  <div className="text-white relative px-2 py-6 bg-[#23131c] shadow-lg sm:rounded-3xl sm:p-16">
                    <div className="text-center pb-6">
                      <h1 className="text-3xl">Contact Us!</h1>

                      <p className="text-gray-300">
                        Fill up the form below to send us a message.
                      </p>
                    </div>

                    <form>
                      <input
                        className="shadow mb-4 bg-[#44363e] text-white border-none appearance-none  rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Name"
                        name="name"
                      />

                      <input
                        className="shadow mb-4 appearance-none border-none rounded w-full py-2 px-3 bg-[#44363e] text-white leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="Email"
                        name="email"
                      />

                      <input
                        className="shadow mb-4 appearance-none border-none rounded w-full py-2 px-3 bg-[#44363e] text-white leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Subject"
                        name="_subject"
                      />

                      <textarea
                        className="shadow mb-4 min-h-0 appearance-none border-none rounded h-32 w-full py-2 px-3 bg-[#44363e] text-white leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Type your message here..."
                        name="message"
                      ></textarea>

                      <div className="flex justify-between">
                        <input
                          className="shadow bg-pink-700   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                          value="Send ➤"
                        />
                        <input
                          className="shadow bg-pink-700 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="reset"
                        />
                      </div>
                    </form>
                  </div>
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
