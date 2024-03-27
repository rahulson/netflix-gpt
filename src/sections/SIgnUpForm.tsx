import React from "react";

const SignUpForm = () => {
  return (
    <form className="w-3/12 relative p-12 bg-black text-white flex flex-col items-center bg-opacity-80 rounded-lg">
      <h1 className="text-3xl font-bold py-4">Sign Up</h1>
      <input
        type="text"
        placeholder="Email Address"
        name=""
        className="p-4 m-4 w-full bg-gray-700"
      />
      <input
        type="text"
        placeholder="Name"
        name=""
        className="p-4 m-4 w-full bg-gray-700"
      />
      <input
        type="password"
        placeholder="Add a Password"
        name=""
        className="p-4 m-4 w-full bg-gray-700"
      />
      <button className="p-4 m-4 bg-red-700 w-full rounded-lg">Sign Up</button>
      <p className="p-4">Already registered? Sign In</p>
    </form>
  );
};

export default SignUpForm;
