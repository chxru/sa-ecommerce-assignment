import { FunctionComponent } from "react";

interface OrderConfirmedPageProps {}

const OrderConfirmedPage: FunctionComponent<OrderConfirmedPageProps> = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold mb-4">Your Order Has Been Placed</h1>
        <p className="text-xl">
          Thank you for your order. We will send you an email confirmation
          shortly.
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmedPage;
