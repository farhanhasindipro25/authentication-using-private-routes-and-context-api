import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Orders from "./components/Orders";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Main from "./layouts/Main";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/orders",
          element: 
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>,
        },
        {
          path: "/login",
          element: <SignIn></SignIn>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
