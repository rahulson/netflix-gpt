import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../store/store";
import { isUserLoggedIn, getAuthInfo } from "../selectors/auth";
import { isEmpty } from "../utils/validate";
import { removeUser } from "../store/user";
import { useDispatch } from "react-redux";
import { USER_PLACEHOLDER_LOGO, NETFLIX_LOGO } from "../constants/AppConstants";

const Header = () => {
  const { user, isLoggedIn } = useSelector((state: IRootState) => ({
    user: getAuthInfo(state),
    isLoggedIn: isUserLoggedIn(state),
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("isUserLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={NETFLIX_LOGO} alt="logo" />
      {isLoggedIn && (
        <div className="flex p-2 gap-5 items-center">
          <img
            className="w-12 h-12"
            src={
              !isEmpty(user.photoURL) ? user.photoURL : USER_PLACEHOLDER_LOGO
            }
            alt="usericon"
          />
          <button className="text-white font-bold" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
