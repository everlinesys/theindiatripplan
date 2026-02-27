import { useState, useEffect } from "react";
import Header from "~/Components/Header";
import Footer from "~/Components/Footer";
import Plans from "~/Components/Plans";
import { destinations } from "~/Data/plans";
import Features from "~/Components/Features";

interface Destination {
  region: string;
  name: string;
  description: string;
  places: string;
  image: string;
}

export default function Explore({ params }: { params?: { plan?: string } }) {
  const plan = params?.plan;
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);

  useEffect(() => {
    if (plan) {
      // Find destination matching the plan parameter (case-insensitive)
      const found = destinations.find(
        (d) => d.name.toLowerCase() === plan.toLowerCase()
      );
      setSelectedDestination(found || null);
    }
  }, [plan]);

  if (!plan) {
    return (
      <>
        <Header />
        <div className="mt-[60px] lg:mt-60">
          <Plans />
          <Features />
        </div>
        <Footer />
      </>
    );
  }

  if (!selectedDestination) {
    return (
      <>
        <Header />
        <div className="mt-[60px] lg:mt-60">
          <Plans />
          <Features />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8 pb-20">
        <h1 className="text-3xl font-bold mb-4">{selectedDestination.name}</h1>
        <img
          src={selectedDestination.image}
          alt={selectedDestination.region}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">
          {selectedDestination.region}
        </h2>
        <p className="text-lg mb-4">{selectedDestination.description}</p>
        <p className="text-gray-600">Places: {selectedDestination.places}</p>
      </div>
      <div className="mt-[60px] lg:mt-60">
        <Plans />
        <Features />
      </div>
      <Footer />
    </>
  );
}
