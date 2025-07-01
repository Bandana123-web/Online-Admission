import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Apply from "./Pages/Apply";
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />

  },
  {
    path: "/about",
    element: <About />
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/apply",
    element:<Apply/>
  },



{ path: "/login", 
  element: <Login /> 
},

  
  {
    path: "*",
    element: <Notfound />
  },

]);