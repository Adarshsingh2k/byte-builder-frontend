import React from "react";

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio" className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="portfolio-item overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500"
                alt="Project 1"
                className="w-full transition-transform transform hover:scale-105"
              />
              <div className="p-4 bg-gray-900">
                <h3 className="text-xl font-bold">E-commerce Platform</h3>
                <p className="text-gray-400">Shopify Development</p>
              </div>
            </div>
            {/* Additional portfolio items can be added here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
