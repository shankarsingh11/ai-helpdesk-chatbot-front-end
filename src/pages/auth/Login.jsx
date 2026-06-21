import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Login
        </h1>

        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="john@gmail.com"
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-4"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-gray-600 hover:text-black"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Sign In
          </button>

          {/* Register Link */}
          <div className="text-center">
            <span className="text-gray-500">
              Don't have an account?
            </span>

            <Link
              to="/register"
              className="ml-2 font-semibold"
            >
              Sign Up
            </Link>
          </div>

          {/* Divider */}
          <div className="text-center text-gray-500">
            OR
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full border border-gray-300 rounded-xl py-3 font-medium hover:bg-gray-50"
          >
            Continue with Google
          </button>

          {/* GitHub Login */}
          <button
            type="button"
            className="w-full border border-gray-300 rounded-xl py-3 font-medium hover:bg-gray-50"
          >
            Continue with GitHub
          </button>

        </form>
      </div>
    </div>
  );
}