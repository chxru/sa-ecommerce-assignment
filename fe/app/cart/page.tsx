"use client";

import AuthBox from "@/components/auth/auth.component";
import CheckoutSummary from "@/components/checkout/checkout.component";
import ShippingDetails from "@/components/shippingdetails/shippingdetails.component";
import { useCartStore } from "@/store/cart.store";
import { useUserStore } from "@/store/user.store";
import { Fetcher } from "@/util/axios";
import { IPlaceOrderForm } from "@saecom/types";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

const CartPage: FunctionComponent = () => {
  const router = useRouter();
  const cartStore = useCartStore();
  const userStore = useUserStore();

  const PlaceOrder = async (data: Omit<IPlaceOrderForm, "products">) => {
    console.log("submitting");
    const res = await Fetcher.post("/orders", {
      ...data,
      products: cartStore.cart,
    });

    if (res.status.toString().startsWith("2")) {
      cartStore.clearCart();
      router.push("/cart/confirmed");
    }
  };

  return (
    <main className="mt-24 ml-8">
      <CheckoutSummary
        cart={cartStore.cart}
        onRemoveItem={cartStore.removeFromCart}
      />

      {cartStore.cart.length !== 0 && (
        <>
          {!userStore.access_token ? (
            <AuthBox
              initialInstance="login"
              handleTokenChange={userStore.updateToken}
              handleUserChange={userStore.updateUser}
            />
          ) : (
            <ShippingDetails onSubmit={PlaceOrder} />
          )}
        </>
      )}
    </main>
  );
};

export default CartPage;
