import React from "react";

export default function InputField({
  label,
  type = "text",
  placeholder,
  name,
  register,
  error,
  disabled = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-medium mb-2"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
        className={`
          w-full
          rounded-xl
          border
          p-3
          outline-none
          transition
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-500"
              : "border-gray-300 focus:ring-2 focus:ring-black"
          }
        `}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}