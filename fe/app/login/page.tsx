"use client";

import { useUserStore } from "@/store/user.store";
import { Fetcher } from "@/util/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthResponse } from "@saecom/types";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginForm = z.infer<typeof schema>;

const LoginPage: FunctionComponent = () => {
  const [loading, setLoading] = useState(true);
  const store = useUserStore();
  const { register, handleSubmit } = useForm<LoginForm>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();

  useEffect(() => {
    // redirect to home page if user is already logged in
    if (!loading && store.access_token) {
      router.push("/");
    }

    setLoading(false);
  }, [loading, store.access_token]);

  const HandleSubmit: SubmitHandler<LoginForm> = async (data) => {
    const dto = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await Fetcher.post<AuthResponse>("/auth/login", dto);
      if (res.status !== 200) {
        throw new Error("Invalid response");
      }

      const { access_token, display_name } = res.data;

      // validate values
      if (!access_token || !display_name) {
        throw new Error("Invalid response");
      }

      store.updateUser({ username: display_name });
      store.updateToken(access_token);

      // redirection is handled in useEffect
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }

      // if error is an object with message property
      if (error && typeof error === "object" && "message" in error) {
        console.error(error.message);
        return;
      }

      // if error is an array of objects with message property
      if (
        error &&
        Array.isArray(error) &&
        error.every((item) => typeof item === "object" && "message" in item)
      ) {
        console.error(error.map((item) => item.message).join("\n"));
      } else {
        console.error(error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(HandleSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("email")}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("password")}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
