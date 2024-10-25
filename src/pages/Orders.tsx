import React from 'react';
import { Package } from 'lucide-react';

const Orders: React.FC = () => {
  const orders = [
    {
      id: '#ORD-123',
      date: '2024-03-15',
      status: 'Delivered',
      total: 149.97,
      items: [
        { name: 'Chocolate Dream Cake', quantity: 2 },
        { name: 'Strawberry Delight', quantity: 1 }
      ]
    },
    {
      id: '#ORD-124',
      date: '2024-03-10',
      status: 'Processing',
      total: 89.98,
      items: [
        { name: 'Vanilla Bean Special', quantity: 2 }
      ]
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>
          
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-lg font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-gray-900">${order.total}</p>
                    <p className={`text-sm ${
                      order.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {order.status}
                    </p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm text-gray-600">
                      <span>{item.name}</span>
                      <span>x{item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;