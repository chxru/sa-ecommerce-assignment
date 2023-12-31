import React, { useState } from "react";
import { IProduct } from "@saecom/types";
import { Button } from "flowbite-react";

interface CheckoutSummaryProps {
  cart: IProduct[];
  onRemoveItem: (itemId: string) => void;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  cart,
  onRemoveItem,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-semibold mb-4">Checkout Summary</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-500">
                  Price: ${(item.price || 0).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onRemoveItem(item._id)}
                className="text-red-500 hover:text-red-600 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-xl font-semibold">Total Items: {cart.length}</p>
        <p className="text-xl font-semibold mt-2">
          Total Price: $
          {cart.reduce((acc, item) => acc + (item.price || 0), 0).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
