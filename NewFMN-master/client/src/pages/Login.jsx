import axios from "axios";
import React, { useState } from "react";
import { setUserData } from "../Redux/slices/user-slice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loginUser = async (e) => {
    try {
      e.preventDefault();

      const user = {
        userEmail,
        userPassword,
      };

      const result = await axios.post("http://localhost:6969/auth/login", user);

      if (result.data.status === "Error") {
        toast.error("Wrong credentials");
        navigate("/login");
      } else {
        console.log("User Logged in Successfully: ", result);
        dispatch(setUserData(result.data));
        navigate("/");
      }
    } catch (error) {
      console.log("Cannot Login the User: ", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="h-heightWithoutNavbar flex w-full items-center justify-center p-5">
      <form
        className="flex w-full max-w-[420px] flex-col gap-4 rounded-xl bg-white p-5 shadow-xl"
        onSubmit={loginUser}
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start justify-center">
            <label className="font-bold" htmlFor="userEmail">Email</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              className="w-full rounded-lg border border-gray-400 p-2 focus:ring focus:ring-blue-500"
              placeholder="your.email@example.com"
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <label className="font-bold" htmlFor="userPassword">Password</label>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              className="w-full rounded-lg border border-gray-400 p-2 focus:ring focus:ring-blue-500"
              placeholder="*********"
              onChange={(e) => setUserPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          className="rounded-lg bg-blue-500 px-5 py-2 font-bold text-white hover:bg-blue-600"
          type="submit"
        >
          Log In
        </button>
        <div className="flex items-center justify-between text-sm">
          <p>New to FindMyNotes?</p>
          <Link to="/signup">
            <p className="font-bold text-blue-600 hover:underline">Create an account</p>
          </Link>
        </div>
      </form>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Login;

