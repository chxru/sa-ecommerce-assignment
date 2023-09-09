import { Fetcher } from "@/util/axios";
import { useCartStore } from "@/store/cart.store";
import { IProduct } from "@saecom/types";
import { Button } from "flowbite-react";
import React, { FunctionComponent } from "react";

interface ProductProps {
  product: IProduct;
}

const ProductCard: FunctionComponent<ProductProps> = (props) => {
  const cart = useCartStore((state) => state.cart);
  const addToCard = useCartStore((state) => state.addToCart);
  const ratings = Math.floor(Math.random() * 5) + 1;
  
  const FavouriteBtnClick = async () => {
    const res = await Fetcher.post(`/favourites/`, {
      product: props.product._id,
      create: true,
    });

    if (res.status === 200) {
      console.log("Favourite added");
    }

    if (res.status === 204) {
      console.log("Favourite removed");
    }

    if (res.status === 401) {
      console.log("Not logged in");
    }

    if (res.status === 403) {
      console.log("Not authorized");
    }

    if (res.status === 404) {
      console.log("Product not found");
    }
  };

  return (
    <div className="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 mb-4 flex flex-col">
      <a href={"/product/" + props.product._id}>
        <img
          className="p-8 rounded-t-lg"
          src={props.product.image}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5 flex flex-col justify-between flex-grow">
        <a href={"/product" + props.product._id}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.product.name}
          </h5>
        </a>

        <div className="flex flex-col justify-end">
          <div className="flex items-center mt-2.5 mb-5 justify-between">
            <div className="flex flex-row">
              {[...Array(ratings)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}

              {[...Array(5 - ratings)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
            <button
              className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
              onClick={FavouriteBtnClick}
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {props.product.price
                ? `$${props.product.price.toFixed(0)}`
                : "OUT OF STOCK"}
            </span>

            {!!props.product.price && (
              <Button
                disabled={
                  cart.find((item) => item._id === props.product._id) !==
                  undefined
                }
                onClick={() => {
                  addToCard(props.product);
                }}
              >
                {cart.find((item) => item._id === props.product._id) !==
                undefined
                  ? "In the cart"
                  : "Add to cart"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
