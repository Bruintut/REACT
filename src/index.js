import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/Home/Home";
import "assets/styles/main.css";
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import Inicio from "routes/Inicio";
import NewPost from "routes/NewPost";

const router = createBrowserRouter([
  {
    element: <Home/>,
    children:[
      {
        path:"/",
        element: <Inicio/>,
      },
      {
        path: "/new",
        element: <NewPost/>
      }
    ]
  }
])


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById("root")
);
