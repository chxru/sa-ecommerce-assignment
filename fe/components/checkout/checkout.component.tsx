// components/CheckoutSummary.tsx
import React, { useState, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutSummaryProps {
  cart: CartItem[];
  onQuantityChange?: (itemId: number, newQuantity: number) => void;
  onRemoveItem?: (itemId: number) => void;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  cart,
  onQuantityChange,
  onRemoveItem,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(cart);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    // Calculate the total price when the cart items change
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const updateQuantity = (itemId: number, newQuantity: number) => {
    // Validate that the quantity is not negative
    if (newQuantity < 0) return;

    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);

    // Call the onQuantityChange callback if provided
    if (onQuantityChange) {
      onQuantityChange(itemId, newQuantity);
    }
  };

  const removeFromCart = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);

    // Call the onRemoveItem callback if provided
    if (onRemoveItem) {
      onRemoveItem(itemId);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full"> {/* Full width styling */}
      <h2 className="text-2xl font-semibold mb-4">Checkout Summary</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <img
                src={`https://via.placeholder.com/48x48.png?text=${item.name}`}
                alt={item.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-200 rounded-full text-gray-600"
              >
                -
              </button>
              <span className="text-lg font-semibold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-200 rounded-full text-gray-600"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-xl font-semibold">Total Items: {cartItems.length}</p>
        <p className="text-xl font-semibold mt-2">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-4 w-full">
        Place Order
      </button>
    </div>
  );
};

export default CheckoutSummary;
