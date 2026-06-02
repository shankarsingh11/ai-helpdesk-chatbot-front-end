import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {

    // Dummy Login
    localStorage.setItem("token", "dummy-jwt-token");

    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-6 border rounded-lg shadow-md w-96">

        <h1 className="text-3xl font-bold mb-4">
          AI Help Desk Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-3 rounded"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full p-2 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;