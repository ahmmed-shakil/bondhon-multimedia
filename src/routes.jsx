// routes.js
import Home from "./views/Home/Home";
import Login from "./views/login/Login";
// import UserProfile from "./pages/UserProfile";
// import NotFoundPage from "./pages/NotFoundPage";

export const routes = [
  {
    path: "/",
    element: <Home />,
    getLayout: (page) => <>{page}</>,
    name: "Home", // Name for navigation
  },
  {
    path: "/login",
    element: <Login />,
    name: "Login", // Name for navigation
  },
  // {
  //   path: "/user/:id",
  //   element: <UserProfile />,
  //   getLayout: (page) => <UserLayout>{page}</UserLayout>,
  //   name: "User Profile", // Name for navigation
  // },
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  //   name: "Not Found", // Name for navigation
  // },
];
