import { useState, useEffect } from "react";
import Header from "~/Components/Header";
import Footer from "~/Components/Footer";
import Services from "~/Components/Services";
import Features from "~/Components/Features";
import { services } from "~/Data/plans";

interface Service {
  name: string;
  icon: string;
  title: string;
  description: string;
}

export default function Plan({ params }: { params?: { plan?: string } }) {
  const plan = params?.plan;
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    if (plan) {
      // Find service matching the plan parameter (case-insensitive)
      const found = services.find(
        (s: Service) => s.name.toLowerCase() === plan.toLowerCase()
      );
      setSelectedService(found || null);
    }
  }, [plan]);

  if (!plan) {
    return (
      <>
        <Header />
        <div className="mt-20 lg:mt-80">
          <Services />
          <Features />
        </div>
        <Footer />
      </>
    );
  }

  if (!selectedService) {
    return (
      <>
        <Header />
        <div className="mt-20 lg:mt-80">
          <Services />
          <Features />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Optionally map icon string to an actual icon component */}
          <h1 className="text-3xl font-bold mb-4">{selectedService.title}</h1>
          <p className="text-lg mb-4 text-gray-700">
            {selectedService.description}
          </p>
          <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>{" "}
      <div className="mt-20 lg:mt-80">
        <Services/>
        <Features />
      </div>
      <Footer />
    </>
  );
}
