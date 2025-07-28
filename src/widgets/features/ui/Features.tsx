import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    description: "Receive your fresh products within 24 hours after harvest.",
  },
  {
    icon: "🌱",
    title: "Organic Products",
    description:
      "Products grown without pesticides, ensuring your health and well-being.",
  },
  {
    icon: "🤝",
    title: "Fair Prices",
    description:
      "Direct prices from the producer, without intermediaries, benefiting everyone.",
  },
];

export const Features: React.FC = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
