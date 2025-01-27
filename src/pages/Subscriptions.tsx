import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: 9.99,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    name: 'Premium',
    price: 19.99,
    features: ['All Basic features', 'Feature 4', 'Feature 5'],
  },
  {
    name: 'Pro',
    price: 29.99,
    features: ['All Premium features', 'Feature 6', 'Feature 7'],
  },
];

export default function Subscriptions() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Subscription Plans
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-3xl font-extrabold text-gray-900">
                  ${plan.price}
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-8 w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}