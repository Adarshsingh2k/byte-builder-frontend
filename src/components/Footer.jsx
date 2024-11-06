import React from "react";
import ContactUsForm from "./ContactUsForm";

const Footer = () => {
  return (
    <div className="">
      <footer className="">
        <div
          className="container bg-white shadow-2xl rounded-xl mx-auto px-4 py-8"
          style={{ width: "80%" }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Byte Builders</h3>
              <p className="text-gray-400">
                Building digital solutions with impact.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="hover:text-green-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-green-400">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-green-400">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Byte Builders. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
