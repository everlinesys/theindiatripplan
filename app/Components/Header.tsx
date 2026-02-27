import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // Fixed import for consistency
import { FaChevronDown, FaEnvelope, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const menus = [
    {
      key: "plans",
      link: "/plans",
      text: "Plans",
      items: [
        { title: "Holiday Packages", link: "/plans/holiday-packages" },
        { title: "Corporate Travel", link: "/plans/corporate-travel" },
        { title: "Spiritual & Pilgrimage Tours", link: "/plans/spiritual-pilgrimage-tours" },
        { title: "Adventure & Wildlife Tours", link: "/plans/adventure-wildlife-tours" },
        { title: "Luxury Travel", link: "/plans/luxury-travel" },
        { title: "Budget Trips", link: "/plans/budget-trips" },
      ],
    },
    {
      key: "explore",
      link: "/explore",
      text: "Explore",
      items: [
        { title: "Rajasthan", link: "/Explore/Rajasthan" },
        { title: "Kerala", link: "/Explore/Kerala" },
        { title: "Himachal Pradesh", link: "/Explore/HimachalPradesh" },
        { title: "Uttarakhand", link: "/Explore/Uttarakhand" },
        { title: "Goa", link: "/Explore/Goa" },
        { title: "North East India", link: "/Explore/NorthEastIndia" },
        { title: "Tamil Nadu", link: "/Explore/TamilNadu" },
      ],
    },
    {
      key: "con",
      link: "mail",
      text: "info@theindiatripplan.com",
      items: [],
    },
  ];

  const handleNavigation = (location: string, hasItems: boolean, isMobile: boolean) => {
    if (location === "mail") {
      window.location.href = "mailto:info@theindiatripplan.com";
      return;
    }

    // If it's a desktop click on a parent menu with items, we usually don't want to navigate
    // to allow the dropdown to work via hover. If it's mobile, we toggle.
    if (hasItems && isMobile) return; 

    if (location) {
      navigate(location);
      setIsMenuOpen(false);
      setExpanded({});
    }
  };

  return (
    <nav className="bg-white flex justify-between p-4 sticky top-0 items-center md:px-40 z-50 text-black shadow-sm">
      {/* Logo Section */}
      <div>
        <Link to="/">
          <div className="flex flex-col">
            <img src="/indiatplogo.png" alt="Logo" width={200} />
          </div>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="flex gap-4 items-center text-sm">
        <ul className="hidden md:flex gap-4">
          {menus.map((menu) => (
            <li key={menu.key} className="relative group">
              <div
                className={
                  menu.key !== "con"
                    ? "cursor-pointer rounded px-3 py-1 bg-gray-200 flex items-center gap-2 hover:bg-gray-300 transition-colors"
                    : "cursor-pointer hover:text-red-700 text-red-500 rounded px-3 py-1 flex items-center gap-2 font-semibold"
                }
                onClick={() => handleNavigation(menu.link, menu.items.length > 0, false)}
              >
                {menu.key === "con" && <FaEnvelope />}
                <span>{menu.text}</span>
                {menu.items.length > 0 && <FaChevronDown size={12} className="group-hover:rotate-180 transition-transform" />}
              </div>

              {/* Desktop Dropdown */}
              {menu.items.length > 0 && (
                <ul className="absolute left-0 top-full pt-2 w-max hidden group-hover:block z-50">
                  <div className="bg-white shadow-lg rounded border border-gray-100 py-2">
                    {menu.items.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap text-gray-700"
                        onClick={() => handleNavigation(item.link, false, false)}
                      >
                        {item.title}
                      </li>
                    ))}
                  </div>
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src="/align-justify.svg" alt="menu" width={24} height={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 w-full h-screen bg-red-600 flex flex-col items-start justify-start z-[60] py-6 px-8 md:hidden"
          >
            <button
              onClick={() => { setIsMenuOpen(false); setExpanded({}); }}
              className="self-end mb-8 text-white"
            >
              <FaTimes size={28} />
            </button>

            <ul className="flex flex-col gap-6 text-white w-full">
              {menus.map((menu) => (
                <li key={menu.key} className="w-full">
                  <div
                    onClick={() => {
                      if (menu.items.length > 0) {
                        setExpanded((prev) => ({ ...prev, [menu.key]: !prev[menu.key] }));
                      } else {
                        handleNavigation(menu.link, false, true);
                      }
                    }}
                    className="flex items-center justify-between w-full text-xl font-medium border-b border-red-400 pb-2"
                  >
                    <div className="flex items-center gap-3">
                      {menu.key === "con" && <FaEnvelope size={18} />}
                      <span>{menu.text}</span>
                    </div>
                    {menu.items.length > 0 && (
                      <FaChevronDown 
                        size={16} 
                        className={`transition-transform ${expanded[menu.key] ? "rotate-180" : ""}`} 
                      />
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {menu.items.length > 0 && expanded[menu.key] && (
                    <motion.ul 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="ml-4 mt-3 flex flex-col gap-3 overflow-hidden"
                    >
                      {menu.items.map((item, index) => (
                        <li
                          key={index}
                          className="text-lg text-red-100 active:text-white"
                          onClick={() => handleNavigation(item.link, false, true)}
                        >
                          {item.title}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}