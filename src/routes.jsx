// routes.js
import Circulars from "./views/Circulars/Circulars";
import Home from "./views/Home/Home";
import Shop from "./views/Shop/Shop";
import SingleJob from "./views/SingleJob/SingleJob";
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
    path: "/shop",
    element: <Shop />,
    name: "Shop", // Name for navigation
  },
  {
    path: "/circulars",
    element: <Circulars />,
    name: "Circulars", // Name for navigation
  },
  {
    path: "/details/:id",
    element: <SingleJob />,
    getLayout: (page) => <>{page}</>,
  },
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  //   name: "Not Found", // Name for navigation
  // },
];
