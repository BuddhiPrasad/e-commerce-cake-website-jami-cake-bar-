import React from 'react';

const BestSellers: React.FC = () => {
  return (
    <section className="bg-rose-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
          Best Sellers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80"
              alt="Wedding cake"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-serif text-white font-bold mb-2">Wedding Cakes</h3>
                <a
                  href="#"
                  className="inline-block bg-white text-rose-600 px-6 py-2 rounded-md hover:bg-rose-50 transition"
                >
                  View Collection
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80"
              alt="Birthday cake"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-serif text-white font-bold mb-2">Birthday Cakes</h3>
                <a
                  href="#"
                  className="inline-block bg-white text-rose-600 px-6 py-2 rounded-md hover:bg-rose-50 transition"
                >
                  View Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;