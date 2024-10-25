import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Contact info section */}
      <div className="bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 text-center mb-12">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <MapPin className="h-8 w-8 text-rose-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Bakery Street</p>
              <p className="text-gray-600">New York, NY 10001</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <Phone className="h-8 w-8 text-rose-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">(555) 123-4567</p>
              <p className="text-gray-600">(555) 987-6543</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <Mail className="h-8 w-8 text-rose-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@sweetdelights.com</p>
              <p className="text-gray-600">orders@sweetdelights.com</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <Clock className="h-8 w-8 text-rose-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Opening Hours</h3>
              <p className="text-gray-600">Mon-Sat: 9AM - 7PM</p>
              <p className="text-gray-600">Sun: 10AM - 5PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact form section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Have a question or special request? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-rose-600 text-white py-3 px-4 rounded-md hover:bg-rose-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587241321921-91a834d6d191?auto=format&fit=crop&q=80"
              alt="Our store"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;