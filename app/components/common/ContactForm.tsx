import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="w-full px-6 pt-[80px] pb-[80px] bg-white md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2">
        <div className=" mb-[50px]">
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <p className="text-gray-600">
            Feel free to use the form or drop us an email. Old-fashioned phone calls work too.
          </p>
          </div>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-orange-600 text-[15px]">📞</span>
              484.324.2400
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-600 text-[15px]">✉️</span>
              info@mediaproper.com
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-600 text-[15px]">📍</span>
              15 West 3rd St., Media, Pa. 19063
            </li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2">
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First"
                className="w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:text-[#023a53]"
              />
              <input
                type="text"
                placeholder="Last"
                className="w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:text-[#023a53]"
              />
            </div>

            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:text-[#023a53]"
            />

            <input
              type="text"
              placeholder="xxx-xxx-xxxx"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:text-[#023a53]"
            />

            <textarea
              placeholder="Type your message ..."
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:text-[#023a53]"
            />

            <button
              type="submit"
              className="bg-[#023a53] text-white font-semibold px-6 py-2 rounded-full hover:bg-secondary cursor-pointer duration-300 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
