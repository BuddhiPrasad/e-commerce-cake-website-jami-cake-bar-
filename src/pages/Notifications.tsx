import React from 'react';
import { Bell } from 'lucide-react';

const Notifications: React.FC = () => {
  const notifications = [
    {
      id: 1,
      title: 'Order Delivered',
      message: 'Your order #ORD-123 has been delivered successfully.',
      date: '2024-03-15',
      read: false
    },
    {
      id: 2,
      title: 'Special Offer',
      message: 'Get 20% off on all chocolate cakes this weekend!',
      date: '2024-03-14',
      read: true
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h1>
          
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg ${
                  notification.read ? 'bg-gray-50' : 'bg-rose-50'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <Bell className={`h-5 w-5 ${
                    notification.read ? 'text-gray-400' : 'text-rose-600'
                  }`} />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      {notification.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{notification.message}</p>
                    <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;