import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";

export default function App() {
  const theme = useSelector((state) => state.themes.theme);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return <RouterProvider router={router} />;
}
