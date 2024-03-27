import React from "react";

const LoginForm = () => {
  return (
    <form className="w-3/12 relative p-12 bg-black text-white flex flex-col items-center bg-opacity-80 rounded-lg">
      <h1 className="text-3xl font-bold py-4">Sign In</h1>
      <input
        type="text"
        placeholder="Email Address"
        name=""
        className="p-4 m-4 w-full bg-gray-700"
      />
      <input
        type="password"
        placeholder="Password"
        name=""
        className="p-4 m-4 w-full bg-gray-700"
      />
      <button className="p-4 m-4 bg-red-700 w-full rounded-lg">Sign In</button>
      <p className="p-4">New to Netflix? Sign Up Now</p>
    </form>
  );
};

export default LoginForm;
