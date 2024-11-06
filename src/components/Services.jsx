import { Store, Terminal, WandSparkles } from "lucide-react";
import React from "react";

const services = [
  {
    logo: <Store size={36} color="#4ade80" className="mb-4" />,
    header: "Shopify Development",
    description:
      "Custom e-commerce solutions built on Shopify, designed forgrowth and scalability.",
  },
  {
    logo: <Terminal size={36} color="#4ade80" className="mb-4" />,
    header: "Web Applications",
    description:
      "Full-stack development using React, Angular, Node.js, Django,and FastAPI.",
  },
  {
    logo: <WandSparkles size={36} color="#4ade80" className="mb-4" />,
    header: "Gen AI Automation",
    description:
      "Leverage the power of AI to automate processes and enhance efficiency.",
  },
];

const Services = () => {
  return (
    <div>
      <section id="services" className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((i) => (
              <div className="service-card bg-white p-6 rounded-xl d-flex text-left">
                {i.logo}
                <h3 className="text-xl font-bold mb-4">{i.header}</h3>
                <p className="text-gray-800">{i.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
