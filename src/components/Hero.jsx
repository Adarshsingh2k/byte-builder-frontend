import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center pt-20 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div class="max-w-4xl mx-auto text-center">
              <h1 class="text-4xl md:text-6xl font-bold mb-6   text-white">
                Building the Future of
                <br />
                <span class="gradient-text ">Digital Solutions</span>
              </h1>
              <p class="text-xl text-gray-400 mb-8">
                Transform your business with cutting-edge web and app solutions
                powered by innovation and expertise.
              </p>
              <div class="flex flex-wrap justify-center gap-4">
                <button class="px-8 py-3 bg-gradient-to-r from-green-400 to-teal-400 rounded-lg font-semibold hover:opacity-90 transition">
                  Get Started
                </button>
                <button class="px-8 py-3 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400/10 transition">
                  View Our Work
                </button>
              </div>
            </div>
            <div className="floating hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500"
                alt="Digital Solutions"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
