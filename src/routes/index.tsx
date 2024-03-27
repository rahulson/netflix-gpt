import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import BrowseMovies from "../pages/BrowseMovies";
import SignUp from "../pages/SignUp";
import AppLayout from "../layout/AppLayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <BrowseMovies />,
      },
    ],
  },
]);

export default appRouter;
