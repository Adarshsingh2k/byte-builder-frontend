import { Braces, PencilLine, Rocket, Search } from "lucide-react";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const processObj = [
  {
    logo: <Search size={36} color="#4aa5de" />,
    header: "Discovery",
    description: "Understanding your needs and objectives",
  },
  {
    logo: <PencilLine size={36} color="#4aa5de" />,
    header: "Planning",
    description: "Creating a roadmap for success",
  },
  {
    logo: <Braces size={36} color="#4aa5de" />,
    header: "Development",
    description: "Building your solution with precision",
  },
  {
    logo: <Rocket size={36} color="#4aa5de" />,
    header: "Launch",
    description: "Deploying and monitoring performance",
  },
];

const Process = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal(".process-step", {
      delay: 200,
      distance: "20px",
      origin: "bottom",
      interval: 100,
    });
  }, []);

  useEffect(() => {
    // Intersection Observer for Process Section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".process-step").forEach((step) => {
      observer.observe(step);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <section id="process" className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {processObj.map((step, index) => (
              <div
                key={index}
                className="process-step relative p-6 bg-white rounded-lg shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">{step.logo}</div>
                <h3 className="text-xl font-bold text-Black mb-2">
                  {step.header}
                </h3>
                <p className="text-gray-800">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
