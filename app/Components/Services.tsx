
import { useEffect, useRef } from "react";
import {
  FaCreditCard,
  FaCrown,
  FaHiking,
  FaPlane,
  FaSun,
  FaTree,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import { services } from "~/Data/plans";
export default function Services() {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      serviceRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            ref.classList.add("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to check initial visibility
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="lg:px-20 lg:py-5 max-sm:px-8 md:px-20 md:py-10 rounded-lg relative top-[-100px] lg:top-[-350px] z-10"
      id="Services"
    >
      <div className="  text-black rounded-2xl lg:p-10 lg:px-20">
        {/* <div className="flex gap-2 mt-10 items-center">
          <FaArrowRight className="text-blue-800 text-xl font-bold transform transition duration-200 hover:translate-x-2" />
          <span>We Provide</span>
        </div> */}
        {/* <div className="text-2xl mt-4 font-semibold">
          <span>Services</span>
        </div> */}

        {/* Services Grid */}
        <div className="lg:grid lg:grid-cols-4 mt-10 lg:gap-3 max-sm:flex max-sm:flex-col max-sm:gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="py-6 px-4 bg-white service-card flex  items-left text-left cursor-pointer rounded-xl shadow-lg gap-1 overflow-hidden hover:bg-gray-200"
              ref={(el) => {
                serviceRefs.current[index] = el;
              }}
              onClick={() => {
                navigate(`/plans/${service.name}`);
              }}
            >
              {service.icon == "luxury" ? (
                <FaCrown size={40} color="gold" title="Royalty" />
              ) : service.icon == "spiritual" ? (
                <FaSun size={40} color="#f5b642" title="Sun - Enlightenment" />
              ) : service.icon == "adventure" ? (
                <FaHiking size={40} color="#3e8e41" title="Hiking" />
              ) : service.icon == "corporate" ? (
                <FaPlane size={40} color="#007bff" title="Air Travel" />
              ) : service.icon == "holiday" ? (
                <FaTree size={40} color="#0a0" />
              ) : (
                <FaCreditCard
                  size={40}
                  color="#007bff"
                  title="Budget Spending"
                />
              )}

              <div className="flex-col">
                <div className="text-lg text-gray-600 px-2 font-semibold">
                  {service.title}
                </div>
                <p className="text-xs px-2 text-gray-600">
                  {service.description}
                </p>
              </div>
              {/* <button
                className="mt-auto px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-400 transition-all"
                onClick={() => {
                  const phoneNumber = "+91 97471 01045";
                  const whatsappMessage = encodeURIComponent(
                    `BOOK_SERVICE: ${service.title}`
                  );
                  const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
                  window.location.href = whatsappLink;
                }}
              >
                Book Service
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
