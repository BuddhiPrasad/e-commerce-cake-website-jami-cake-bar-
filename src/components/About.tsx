import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6">
              Since 1995, Sweet Delights has been crafting exceptional cakes that bring joy to every celebration. Our master bakers combine traditional techniques with innovative flavors to create unforgettable desserts.
            </p>
            <p className="text-gray-600 mb-8">
              Every cake is made with premium ingredients and decorated with meticulous attention to detail, ensuring that each creation is as beautiful as it is delicious.
            </p>
            <a
              href="#"
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-md hover:bg-rose-700 transition"
            >
              Learn More
            </a>
          </div>
          
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80"
              alt="Baker decorating a cake"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;