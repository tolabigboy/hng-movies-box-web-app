import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import Error from "./Pages/Error";
import MoreDetails from "./Pages/MoreDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
  },
  {
    path: "/movies/:id",
    element: <MoreDetails />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
