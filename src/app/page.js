"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const internalLogin = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [wrongcred, setWrongcred] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://65.2.75.121:8000/internallogin",
        { username: username, password: password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br to-black from-orange-500 via-zinc-900 ">
      <form
        className="bg-transparent border-[2px] inline-flex flex-col p-9 justify-center gap-7 w-[40%] h-[50%] rounded-md "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          placeholder="Password"
          required
        />
        <button
          className="bg-orange-500 active:bg-orange-700 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Login
        </button>
        <div className="text-center flex justify-center ">
          <p className="text-white">Don't have an Account?&nbsp;</p>
          {/* <Link
            href="/internal/signup"
            className="text-orange-500 hover:underline"
          >
            Signup Now
          </Link> */}
        </div>
      </form>
    </div>
  );
};

export default internalLogin;
