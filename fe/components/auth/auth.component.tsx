import { Fetcher } from "@/util/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthResponse, IUser } from "@saecom/types";
import { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type AuthInstance = "login" | "register";

interface AuthBoxProps {
  /**
   * Initial instance of the auth box.
   */
  initialInstance: AuthInstance;
  handleUserChange: (user: IUser) => void;
  handleTokenChange: (token: string) => void;
}

const AuthBox: FunctionComponent<AuthBoxProps> = (props) => {
  const [instance, setInstance] = useState<AuthInstance>(props.initialInstance);

  const schema = z.object({
    email: z
      .string()
      .email()
      .optional()
      .refine(
        (value) => {
          // throws error if auth instance is register and email field is empty
          if (instance === "register" && !value) {
            return false;
          }

          return true;
        },
        {
          message: "Email is required",
        }
      ),
    password: z.string(),
    name: z.string(),
  });

  type AuthForm = z.infer<typeof schema>;

  const { register, handleSubmit } = useForm<AuthForm>({
    resolver: zodResolver(schema),
  });

  const HandleSubmit: SubmitHandler<AuthForm> = async (data) => {
    const dto = {
      email: data.email,
      password: data.password,
      name: data.name,
    };

    try {
      const res = await Fetcher.post<AuthResponse>(`/auth/${instance}`, dto);
      if (res.status !== 200) {
        throw new Error("Invalid response");
      }

      const { access_token, display_name } = res.data;

      // validate values
      if (!access_token || !display_name) {
        throw new Error("Invalid response");
      }

      props.handleUserChange({ username: display_name });
      props.handleTokenChange(access_token);

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

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {instance === "login" ? "Login" : "Register"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(HandleSubmit)}>
          {instance === "register" && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("name")}
                />
              </div>
            </div>
          )}

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
              {instance === "login" ? "Sign in" : "Register"}
            </button>
          </div>
        </form>

        <button
          className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 "
          onClick={() => {
            setInstance(instance === "login" ? "register" : "login");
          }}
        >
          {instance === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
        </button>
      </div>
    </>
  );
};

export default AuthBox;
