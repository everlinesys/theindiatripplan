import React from "react";
import { Card, CardContent } from "./Card";
import { CheckCircle, Gift, Users, Star } from "lucide-react";
import Button from "./Button";

const features = [
  "Tailored Itineraries – Personalized travel plans to suit your interests, budget, and schedule.",
  "Comprehensive Coverage – Destinations across India, from the Himalayas to coastal retreats.",
  "End-to-End Services – Flights, accommodations, local transport, and guided tours, all arranged seamlessly.",
  "Local Expertise – Travel specialists ensure a well-informed and enriching experience.",
  "24/7 Assistance – Reliable support throughout your journey for a hassle-free experience.",
  "Exclusive Offers – Competitive pricing on hotels, flights, and activities.",
];

const testimonials = [
  {
    text: "A seamless and well-organized experience. Our Kerala tour was planned with precision, from houseboat stays to guided excursions.",
    author: "Priya Sharma, Mumbai",
  },
  {
    text: "Highly professional service. The Ladakh trip was well-executed, with excellent recommendations and support throughout.",
    author: "Rohit Mehta, Delhi",
  },
];

const Features: React.FC = () => {
  return (
    <div className="relative  lg:top-[-200px] p-8 max-w-4xl mx-auto">
      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-center mb-6">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-4 flex items-start gap-3 shadow-sm border border-gray-300 rounded-lg"
          >
            <CheckCircle className="text-green-600" size={40} />
            <CardContent className="p-0 text-gray-800 text-sm">
              {feature}
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Special Offers */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4 flex items-start gap-3 shadow-sm border border-gray-300 rounded-lg">
          <Gift className="text-purple-600" size={40} />
          <CardContent className="p-0 text-gray-800 text-sm">
            <strong>Early Booking Discount:</strong> Save up to 20% on
            reservations made 60 days in advance.
          </CardContent>
        </Card>
        <Card className="p-4 flex items-start gap-3 shadow-sm border border-gray-300 rounded-lg">
          <Users className="text-blue-600" size={40} />
          <CardContent className="p-0 text-gray-800 text-sm">
            <strong>Group Travel Benefits:</strong> Exclusive discounts for
            bookings of five or more travelers.
          </CardContent>
        </Card>
      </div>
      {/* Testimonials */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Client Testimonials</h2>
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="p-4 shadow-sm border border-gray-300 rounded-lg"
          >
            <CardContent className="p-0 text-gray-800 text-sm">
              <p className="italic">“{testimonial.text}”</p>
              <p className="mt-2 font-medium text-gray-600">
                – {testimonial.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Closing Statement */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Discover India with Us
      </h2>
      <p className="text-gray-800 text-sm leading-relaxed">
        India offers an unparalleled diversity of experiences, from the heritage
        of Rajasthan to the scenic beauty of Kerala. Whether you seek a cultural
        immersion, a serene retreat, or an adventurous expedition, our curated
        journeys ensure a memorable experience.
      </p>
      <p className="mt-10 font-semibold">Have Doubts?</p>
      <p className="text-xs mt-5">
        Our dedicated support team is open to chat with you on any doubt about
        making your trip to the Incredible India! <br /> Happy Travelling.
      </p>{" "}
      <div className="text-white mt-5 w-32" >
        {" "}
        <Button href="mailto:info@theindiatripplan.com" >Contact us</Button> 
      </div>

      {/* Contact & Address */}
<h2 className="text-2xl font-semibold mt-10 mb-4">Offices</h2>

<div className="space-y-4 text-sm text-gray-800">
  {/* USA Office */}
  <Card className="p-4 shadow-sm border border-gray-300 rounded-lg">
    <CardContent className="p-0">
      <p className="font-semibold">USA Office</p>
      <p>940 W FM 544, Dallas, TX 75098, USA</p>
      <p>Phone: +1 214 449 0459</p>
    </CardContent>
  </Card>

  {/* India Office */}
  <Card className="p-4 shadow-sm border border-gray-300 rounded-lg">
    <CardContent className="p-0">
      <p className="font-semibold">India Offices</p>
      <p>Phone: +91 8113002561, +91 8113002571</p>

      <p className="mt-2">
        <strong>Locations:</strong><br />
        Mumbai, Hyderabad, Delhi, Chennai, Bangalore,
        Thiruvananthapuram, Kollam, Alappuzha, Kochi,
        Kottayam, Thiruvalla, Thrissur, Kasargod
      </p>
    </CardContent>
  </Card>
</div>
    </div>
  );
};

export default Features;
