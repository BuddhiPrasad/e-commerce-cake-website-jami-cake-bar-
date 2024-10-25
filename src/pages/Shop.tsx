import React from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const products = [
  {
    id: 1,
    name: 'Chocolate Dream Cake',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80',
    category: 'Chocolate',
  },
  {
    id: 2,
    name: 'Strawberry Delight',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80',
    category: 'Fruit',
  },
  {
    id: 3,
    name: 'Vanilla Bean Special',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80',
    category: 'Vanilla',
  },
  {
    id: 4,
    name: 'Red Velvet Dream',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1616690710400-a16d146927c5?auto=format&fit=crop&q=80',
    category: 'Special',
  },
  {
    id: 5,
    name: 'Lemon Bliss',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80',
    category: 'Fruit',
  },
  {
    id: 6,
    name: 'Caramel Dream',
    price: 47.99,
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80',
    category: 'Special',
  },
];

const Shop: React.FC = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    });
  };

  return (
    <div className="pt-16">
      {/* Hero section */}
      <div className="bg-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 text-center">Our Cakes</h1>
          <p className="mt-4 text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Browse our selection of handcrafted cakes made with love and the finest ingredients
          </p>
        </div>
      </div>

      {/* Filters and products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="w-full md:w-64 space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {['All', 'Chocolate', 'Fruit', 'Vanilla', 'Special'].map((category) => (
                  <label key={category} className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-rose-600 focus:ring-rose-500" />
                    <span className="ml-2 text-gray-600">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>$0</span>
                  <span>$100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="relative w-full h-80 rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition">
                      <Heart className="h-5 w-5 text-rose-600" />
                    </button>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                      <p className="text-lg font-medium text-gray-900">${product.price}</p>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-4 w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;