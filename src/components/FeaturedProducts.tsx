import React from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const products = [
  {
    id: 1,
    name: 'Chocolate Dream Cake',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Strawberry Delight',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Vanilla Bean Special',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80',
  },
];

const FeaturedProducts: React.FC = () => {
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
        Featured Products
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-gray-600">${product.price}</p>
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
    </section>
  );
};

export default FeaturedProducts;