import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black px-10 py-10 lg:px-40 text-sm text-gray-300">
      
      {/* CONTACT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

        {/* USA OFFICE */}
        <div>
          <h4 className="text-lg font-semibold flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            USA Office
          </h4>
          <p className="mt-2">
            940 W FM 544 <br />
            Dallas, TX 75098, USA
          </p>

          <div className="flex items-center mt-2">
            <FaPhone className="mr-2" />
            +1 214 449 0459
          </div>
        </div>

        {/* INDIA OFFICES */}
        <div>
          <h4 className="text-lg font-semibold flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            India Offices
          </h4>

          <div className="mt-2 space-y-1">
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              +91 8113002561
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              +91 8113002571
            </div>
            <div className="flex items-center">
              <FaWhatsapp className="mr-2 text-green-500" />
              WhatsApp Available
            </div>
          </div>

          <p className="mt-3 text-xs leading-relaxed">
            Mumbai, Hyderabad, Delhi, Chennai, Bangalore,
            Thiruvananthapuram, Kollam, Alappuzha, Kochi,
            Kottayam, Thiruvalla, Thrissur, Kasargod
          </p>
        </div>

        {/* EMAIL */}
        <div>
          <h4 className="text-lg font-semibold flex items-center">
            <FaEnvelope className="mr-2" />
            Email
          </h4>
          <p className="mt-2">info@theindiatripplan.com</p>
        </div>

      </div>

      {/* SOCIAL */}
      <div className="flex flex-col gap-2">
        <p className="text-lg">Follow Us On</p>
        <p className="flex gap-3">
          <a href="#"><FaFacebook size={20} /></a>
          <a href="#"><FaInstagram size={20} /></a>
          <a href="#"><FaXTwitter size={20} /></a>
        </p>
      </div>

      {/* COPYRIGHT */}
      <p className="mt-4">
        © theindiatripplan {new Date().toISOString().slice(0, 4)}
      </p>
      <p className="mt-1 text-xs text-gray-400">
        Website by: everlinesys.com
      </p>

    </footer>
  );
}