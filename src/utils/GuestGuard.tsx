import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../selectors/auth";
import { useSelector } from "react-redux";
import { IRootState } from "../store/store";
import { GuardProps } from "../types/guard";

const GuestGuard = ({ children }: GuardProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoggedIn } = useSelector((state: IRootState) => ({
    isLoggedIn: isUserLoggedIn(state),
  }));

  useEffect(() => {
    if (isLoggedIn) {
      navigate(location?.state?.from ? location?.state?.from : "/browse", {
        state: {
          from: "",
        },
      });
    }
  }, [isLoggedIn, location, navigate]);

  return children;
};

export default GuestGuard;
