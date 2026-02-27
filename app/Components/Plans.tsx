import React from "react";
import { CheckCircle } from "lucide-react";
import Button from "./Button";
import { destinations } from "~/Data/plans";
import { useNavigate } from "react-router";

const Plans: React.FC = () => {
  const navigate=useNavigate();
  return (
    <div className="lg:px-[10vw] relative top-[-50px] lg:top-[-300px] p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Top Destinations We Cover
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={() => {
              navigate(`/explore/${destination.name}`);
            }}
          >
            {destination.region !== "Custom" ? (
              <>
                <img
                  src={destination.image}
                  alt={destination.region}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {destination.region}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{destination.places}</p>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 p-4">
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  Need a Custom Plan?
                </p>
                <div className="px-4 py-2 text-white rounded cursor-pointer">
                  <Button href="mailto:info@theindiatripplan.com">Contact us</Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
