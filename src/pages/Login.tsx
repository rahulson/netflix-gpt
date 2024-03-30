import LoginForm from "../sections/LoginForm";
import { NETFLIX_LOGIN_BG } from "../constants/AppConstants";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="absolute">
        <img src={NETFLIX_LOGIN_BG} alt="" />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
