import React from "react";
import SignUpForm from "../sections/SIgnUpForm";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
