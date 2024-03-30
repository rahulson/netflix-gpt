import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import BrowseMovies from "../pages/BrowseMovies";
import SignUp from "../pages/SignUp";
import AppLayout from "../layout/AppLayout";
import AuthGuard from "../utils/AuthGuard";
import GuestGuard from "../utils/GuestGuard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <GuestGuard>
        <AppLayout />
      </GuestGuard>
    ),
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <AppLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "/browse",
        element: <BrowseMovies />,
      },
    ],
  },
]);

export default appRouter;
