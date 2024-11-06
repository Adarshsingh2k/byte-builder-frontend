import React from "react";

const ContactUsForm = () => {
  return (
    <div>
      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-800 rounded-lg"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 rounded-lg"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-gray-800 rounded-lg"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
