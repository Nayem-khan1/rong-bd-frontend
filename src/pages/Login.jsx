import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation } from "react-router";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const from = location.state?.from || "/";

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign UP") {
        const response = await axios.post(backendUrl + "/api/auth/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.data.token);
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("userInfo", JSON.stringify(response.data.data));
          toast.success("Registration Successful");
          // navigatePrevPage(from, { replace: true });
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.data.token);
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("userInfo", JSON.stringify(response.data.data));
          toast.success("Login Successful");
          // navigatePrevPage(from, { replace: true });
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto py-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-primary"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-primary"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-primary"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign UP")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-primary text-white font-light px-8 py-2 mt-4 cursor-pointer">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
      {currentState === "Login" && (
        <button
          type="button"
          onClick={() => {
            setEmail("user@gmail.com");
            setPassword("12345678");
          }}
          className="border border-primary text-primary px-8 py-2 mt-2 hover:bg-primary hover:text-white transition"
        >
          Fill Demo Credentials
        </button>
      )}
    </form>
  );
};

export default Login;
