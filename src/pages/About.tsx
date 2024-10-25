import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80"
          alt="Bakery interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center">Our Story</h1>
        </div>
      </div>

      {/* Content sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Beginning</h2>
            <p className="text-gray-600 mb-6">
              Founded in 1995, Sweet Delights began as a small family bakery with a passion for creating exceptional cakes. What started as a modest shop has grown into a beloved destination for cake lovers across the city.
            </p>
            <p className="text-gray-600">
              Our founder, Sarah Johnson, learned the art of baking from her grandmother and has passed down these traditional techniques to our team of skilled bakers.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80"
              alt="Vintage bakery"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-rose-600 mb-4">25+</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Years of Experience</h3>
            <p className="text-gray-600">Creating memorable celebrations</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-rose-600 mb-4">10k+</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Happy Customers</h3>
            <p className="text-gray-600">Served with love and care</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-rose-600 mb-4">50+</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Cake Varieties</h3>
            <p className="text-gray-600">For every taste and occasion</p>
          </div>
        </div>

        <div className="bg-rose-50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Quality Ingredients</h3>
              <p className="text-gray-600">We use only the finest, freshest ingredients in all our creations.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Artisanal Craftsmanship</h3>
              <p className="text-gray-600">Each cake is handcrafted with attention to detail and love.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Customer Satisfaction</h3>
              <p className="text-gray-600">Your happiness is our priority, and we strive to exceed expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;