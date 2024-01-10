import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Food Cart</h2>
        {items.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b py-3"
              >
                <span className="text-gray-800">{item.name}</span>
                <span className="text-green-600">
                  {item.price !== undefined ? `$${item.price.toFixed()}` : "😋"}
                </span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
