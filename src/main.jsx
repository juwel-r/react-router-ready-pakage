import { StrictMode } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Services from "./components/Pages/Services";
import AboutUs from "./components/Pages/AboutUs";
import ContactUs from "./components/Pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/services',
        element:<Services></Services>
      },
      {
        path:'/about-us',
        element:<AboutUs></AboutUs>
      },
      {
        path:'/contact-us',
        element: <ContactUs></ContactUs>
      }
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
