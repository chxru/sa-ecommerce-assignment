import { IPlaceOrderForm } from "@saecom/types";
import { Button } from "flowbite-react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput extends Omit<IPlaceOrderForm, "products"> {}

const ShippingDetails = ({
  onSubmit,
}: {
  onSubmit: (data: IFormInput) => void;
}) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const handleFormSubmit: SubmitHandler<IFormInput> = (data) => onSubmit(data);

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className=" p-6 rounded-lg shadow-md mt-12"
    >
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email Address
        </label>
        <input
          type="email"
          {...register("email")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Email"
          required
        ></input>
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            {...register("firstName")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter First Name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            {...register("lastName")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter last Name"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="address"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Street Address
        </label>
        <input
          type="text"
          {...register("address")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your Address"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="city"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          {...register("city")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter city"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="province"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          State/Province
        </label>
        <select
          {...register("province")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="Central">Central</option>
          <option value="Eastern">Eastern</option>
          <option value="NorthCentral">North Central</option>
          <option value="Northern">Northern</option>
          <option value="North Western">North Western</option>
          <option value="Sabaragamuwa">Sabaragamuwa</option>
          <option value="Uva">Uva</option>
          <option value="Western">Western</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="zip"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Zip/Postal Code{" "}
        </label>
        <input
          type="number"
          {...register("zip")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Zip/Postal Code"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="PhoneNumber"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Phone Number
        </label>
        <input
          type="tel"
          {...register("phoneNumber")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Phone Number"
          required
        />
      </div>

      <div className="flex justify-center">
        <Button type="submit" className="w-full max-w-sm">
          Place Order
        </Button>
      </div>
    </form>
  );
};

export default ShippingDetails;
