import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  Link,
  useNavigate,
} from "react-router-dom";



import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import { loginSchema } from "../../schemas/loginSchema";
import { loginUser } from "../../services/authService";

export default function Login() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await loginUser(data);

      // Save JWT Token
      localStorage.setItem(
        "accessToken",
        response.accessToken
      );

      // Optional
      if (response.refreshToken) {
        localStorage.setItem(
          "refreshToken",
          response.refreshToken
        );
      }

      toast.success(
        response.message ||
          "Login Successful"
      );

      navigate("/dashboard");

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href =
      import.meta.env
        .VITE_GOOGLE_OAUTH_URL;
  };

  const handleGithubLogin = () => {
    window.location.href =
      import.meta.env
        .VITE_GITHUB_OAUTH_URL;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Login
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          {/* Email */}
          <div>

            <label className="block font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              {...register("email")}
              placeholder="john@gmail.com"
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.email?.message}
            </p>

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
                {...register("password")}
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

            <p className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </p>

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
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>

          {/* Register */}

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

          {/* Google */}

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full border border-gray-300 rounded-xl py-3 font-medium hover:bg-gray-50"
          >
            Continue with Google
          </button>

          {/* GitHub */}

          <button
            type="button"
            onClick={handleGithubLogin}
            className="w-full border border-gray-300 rounded-xl py-3 font-medium hover:bg-gray-50"
          >
            Continue with GitHub
          </button>

        </form>

      </div>

    </div>
  );
}