import React from "react";

const ContactUs = () => {
  return (
    <div className=" w-full flex">
      <div className="w-1/2 flex flex-col justify-center items-center sm:flex-wrap">
        <h1 className="text-2xl font-bold p-4 m-4"> Contact Us </h1>
        <form
          className="flex flex-col w-2/3 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="border border-black p-2 m-4"
            placeholder="Name"
          />
          <input
            type="email"
            className="border border-black p-2 m-4"
            placeholder="Email id"
          />
          <textarea
            type="text"
            rows={5}
            className="border border-black p-2 m-4"
            placeholder="Message"
          />
          <button
            className="w-6/12 md:w-4/12 mx-auto border border-white p-2 m-4
         bg-green-700 text-white tracking-tighter font-bold rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
