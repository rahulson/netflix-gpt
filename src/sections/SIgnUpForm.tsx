import React, { useRef, useState } from "react";
import { checkValidSignUpData, isEmpty } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/user";
import { MY_USER_AVATAR } from "../constants/AppConstants";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const setUserData = async () => {
    try {
      if (!auth.currentUser) return null;
      const { displayName, uid, email, phoneNumber, photoURL } =
        auth.currentUser;
      const token = await auth.currentUser.getIdToken();
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
    } catch (error) {}
  };
  const handleSignUp = () => {
    const message = checkValidSignUpData(
      name.current?.value ?? "",
      email.current?.value ?? "",
      password.current?.value ?? ""
    );
    setErrorMessage(message);
    if (isEmpty(message)) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value ?? "",
        password.current?.value ?? ""
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User", user);
          updateProfile(user, {
            displayName: name.current?.value ?? "",
            photoURL: MY_USER_AVATAR,
          })
            .then(() => {
              if (auth.currentUser) {
                setUserData();
              }
            })
            .catch((error) => {
              const errorMessage = error.message;
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error code", errorCode);
          console.log("Error Message", errorMessage);
          setErrorMessage(errorMessage);
        });
    }
  };

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <form
      className="w-3/12 relative p-12 bg-black text-white flex flex-col items-center bg-opacity-80 rounded-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="text-3xl font-bold py-4">Sign Up</h1>
      <input
        type="text"
        placeholder="Name"
        ref={name}
        name=""
        className="p-4 m-4 w-full bg-gray-700"
      />
      <input
        type="text"
        placeholder="Email Address"
        ref={email}
        name=""
        className="p-4 m-4 w-full bg-gray-700"
      />
      <input
        type="password"
        placeholder="Add a Password"
        ref={password}
        name=""
        className="p-4 m-4 w-full bg-gray-700"
      />
      <p className="text-lg text-red-700 py-2 w-full font-bold">
        {errorMessage}
      </p>
      <button
        className="p-4 m-4 bg-red-700 w-full rounded-lg"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      <p className="p-4" onClick={handleNavigation}>
        Already registered? Sign In
      </p>
    </form>
  );
};

export default SignUpForm;
