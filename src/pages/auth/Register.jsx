import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../../schemas/registerSchema";

import { registerUser } from "../../services/authService";

import toast from "react-hot-toast";

export default function Register() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response =
        await registerUser(data);

      toast.success(
        response.message ||
          "Registration Successful"
      );

      console.log(response);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">

      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow">

        <h1 className="text-4xl font-bold text-center mb-8">
          Register
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          {/* Mobile */}

          <div>
            <label className="font-medium">
              Mobile Number
            </label>

            <input
              {...register("mobile")}
              className="w-full border rounded-xl p-3 mt-2"
              placeholder="9876543210"
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.mobile?.message}
            </p>
          </div>

          {/* Email */}

          <div>
            <label className="font-medium">
              Email
            </label>

            <input
              {...register("email")}
              className="w-full border rounded-xl p-3 mt-2"
              placeholder="john@gmail.com"
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.email?.message}
            </p>
          </div>

          {/* Password */}

          <div>
            <label className="font-medium">
              Password
            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                {...register("password")}
                className="w-full border rounded-xl p-3 mt-2"
              />

              <button
                type="button"
                className="absolute right-4 top-6"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            <p className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </p>

          </div>

          {/* Confirm Password */}

          <div>

            <label className="font-medium">
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                {...register(
                  "confirmPassword"
                )}
                className="w-full border rounded-xl p-3 mt-2"
              />

              <button
                type="button"
                className="absolute right-4 top-6"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            <p className="text-red-500 text-sm mt-1">
              {
                errors.confirmPassword
                  ?.message
              }
            </p>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-xl font-semibold"
          >
            {loading
              ? "Creating Account..."
              : "Sign Up"}
          </button>

          <div className="text-center">
            <span className="text-gray-500">
              Already have an account?
            </span>

            <a
              href="/login"
              className="font-semibold ml-2"
            >
              Sign In
            </a>
          </div>

          <div className="text-center text-gray-500">
            OR
          </div>

          <button
            type="button"
            className="w-full border py-3 rounded-xl"
          >
            Continue with Google
          </button>

        </form>

      </div>

    </div>
  );
}