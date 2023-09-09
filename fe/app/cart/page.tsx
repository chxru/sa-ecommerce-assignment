"use client";

import CheckoutSummary from "@/components/checkout/checkout.component";
import { useCartStore } from "@/store/cart.store";
import { FunctionComponent } from "react";

const CartPage: FunctionComponent = () => {
  const cartStore = useCartStore();

  return (
    <main className="mt-24 ml-8">
      <h1>Cart</h1>

      <CheckoutSummary
        cart={cartStore.cart}
        onRemoveItem={cartStore.removeFromCart}
      />
    </main>
  );
};

export default CartPage;
