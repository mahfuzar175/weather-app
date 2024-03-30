import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import WeatherApp from "../components/WeatherApp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <WeatherApp></WeatherApp>
        }
      ]
    },
  ]);