import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../selectors/auth";
import { useSelector } from "react-redux";
import { IRootState } from "../store/store";
import { GuardProps } from "../types/guard";

const AuthGuard = ({ children }: GuardProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoggedIn } = useSelector((state: IRootState) => ({
    isLoggedIn: isUserLoggedIn(state),
  }));

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/", {
        state: {
          from: location.pathname,
        },
      });
    }
  }, [isLoggedIn, location, navigate]);

  return children;
};

export default AuthGuard;
