import authAPI from "../api/authApi";

// Register
export const registerUser = async (data) => {
  const response = await authAPI.post("/register", data);

  return response.data;
};
// Login
export const loginUser = async (data) => {
  const response = await authAPI.post("/login", data);
  return response.data;
};
