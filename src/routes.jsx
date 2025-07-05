import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Apply from "./Pages/Apply";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />

  },
  {
    path:"/about",
    element:<About/>
  },,
  {
    path:"/apply",
    element:<Apply/>
  },

  {
    path:"/contact",
    element:<Contact/>
  },
  
  {
    path:"/Login",
    element:<Login/>
  },

  
  {
    path: "*",
    element: <Notfound />
  },

]);