import React, { useRef, useState } from "react";
import { checkValidData, isEmpty } from "../utils/validate";
import { User, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const setUserData = async (user: User) => {
    try {
      const { displayName, uid, email, phoneNumber, photoURL } = user;
      const token = await auth.currentUser?.getIdToken();
      dispatch(
        addUser({
          displayName: displayName ?? "",
          uid: uid,
          email: email ?? "",
          photoURL: photoURL ?? "",
          phoneNumber: phoneNumber ?? "",
          token: token ?? "",
        })
      );
      navigate("/browse");
    } catch (error) {
      console.log("Error Login", error);
    }
  };

  const handleNavigation = () => {
    navigate("/signup");
  };
  const handleButtonClick = () => {
    //checkValidData();
    console.log(email.current?.value);
    console.log(password.current?.value);
    const message = checkValidData(
      email.current?.value ?? "",
      password.current?.value ?? ""
    );
    setErrorMessage(message);
    if (isEmpty(message)) {
      signInWithEmailAndPassword(
        auth,
        email.current?.value ?? "",
        password.current?.value ?? ""
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User", user);
          setUserData(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error code", errorCode);
          console.log("Error Message", errorMessage);
          setErrorMessage(errorMessage);
        });
    }

    console.log("Error", message);
  };
  return (
    <form
      className="w-3/12 relative p-12 bg-black text-white flex flex-col items-center bg-opacity-80 rounded-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="text-3xl font-bold py-4">Sign In</h1>
      <input
        type="text"
        placeholder="Email Address"
        ref={email}
        name=""
        className="p-4 m-4 w-full bg-gray-700"
      />
      <input
        type="password"
        placeholder="Password"
        ref={password}
        name=""
        className="p-4 m-4 w-full bg-gray-700"
      />
      <p className="text-red-500 py-2 w-full font-bold text-lg">
        {errorMessage}
      </p>
      <button
        className="p-4 m-4 bg-red-700 w-full rounded-lg"
        onClick={handleButtonClick}
      >
        Sign In
      </button>
      <p className="p-4" onClick={handleNavigation}>
        New to Netflix? Sign Up Now
      </p>
    </form>
  );
};

export default LoginForm;
