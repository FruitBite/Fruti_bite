import React from "react";

const Form = () => {
  return (
    <div className="w-full py-8">
      <div className="mx-auto px-5 flex items-center flex-col gap-5 ">
        <div>
          <h1 className="text-3xl font-bold text-center">Order Now</h1>
          <p className="text-center">
            Have questions or special requirements? Our team is here to help you
            with anything you need.
          </p>
        </div>
        <form action="" className="rounded-lg border-[.1rem] border-black p-5 flex flex-col gap-5 md:w-1/2 ">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border-PRIMARY p-2 w-1/2 text-black placeholder:text-black rounded-lg outline-none focus:bg-transparent focus:border-b-PRIMARY border-[.1rem]"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border-PRIMARY p-2 w-1/2 text-black placeholder:text-black rounded-lg outline-none focus:bg-transparent focus:border-b-PRIMARY border-[.1rem]"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="border-PRIMARY p-2 w-full text-black placeholder:text-black rounded-lg outline-none focus:bg-transparent focus:border-b-PRIMARY border-[.1rem]"
          />
          <textarea
            className="border-PRIMARY p-2 w-full text-black placeholder:text-black rounded-lg outline-none focus:bg-transparent focus:border-PRIMARY border-[.1rem]"
            placeholder="Address"
          ></textarea>
          <input
            type="text"
            placeholder="Area"
            className="border-PRIMARY p-2 w-full text-black placeholder:text-black rounded-lg outline-none focus:bg-transparent focus:border-b-PRIMARY border-[.1rem]"
          />
          <select className="border-PRIMARY w-full p-2 text-black rounded-lg outline-none focus:bg-transparent focus:border-b-PRIMARY border-[.1rem] ">
            <option>Select Plan</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>
          <div className="mt-6">
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.737269657026!2d78.47823061451369!3d17.404526220251083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9132452a379b%3A0x60c5685b4d6c62cc!2sGoogle%20Headquarters!5e0!3m2!1sen!2sus!4v1634527059429!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <button className="w-full p-2 rounded-full bg-PRIMARY ">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
