import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about";
import Landing from "./pages/landing";
import { AppLayout } from "./utlis/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Landing/>
      },
      {
        path: "about",
        element: <About/>
      }
    ]
  }
 
]);


const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App;