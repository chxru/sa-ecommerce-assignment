import React, { useState } from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

interface CheckoutSummaryProps {
  cart: CartItem[];
  onQuantityChange?: (itemId: number, newQuantity: number) => void;
  onRemoveItem?: (itemId: number) => void;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  cart,
  onRemoveItem,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(cart);
  const [totalPrice, setTotalPrice] = useState<number>(
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  );

  const removeFromCart = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);

    // Update the total price
    const newTotalPrice = updatedCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);

    // Call the onRemoveItem callback if provided
    if (onRemoveItem) {
      onRemoveItem(itemId);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      {" "}
      {/* Full width styling */}
      <h2 className="text-2xl font-semibold mb-4">Checkout Summary</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={item.img}
                alt={item.name}
                width={48} // Specify the width you want here
                height={48}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => removeFromCart(item.id)}
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
        <p className="text-xl font-semibold">Total Items: {cartItems.length}</p>
        <p className="text-xl font-semibold mt-2">
          Total Price: ${totalPrice.toFixed(2)}
        </p>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-4 w-full">
        Place Order
      </button>
    </div>
  );
};

export default CheckoutSummary;
