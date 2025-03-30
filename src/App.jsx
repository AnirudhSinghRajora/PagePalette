import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about";
import Landing from "./pages/landing";
import { AppLayout } from "./utlis/AppLayout";
import Contact from "./pages/contact";
import Pricing from "./pages/pricing";

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
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "pricing",
        element: <Pricing/>
      }
    ]
  }
 
]);


const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App;