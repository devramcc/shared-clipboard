import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import DashboardPage from "../pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <DashboardPage requestPath={"http://localhost:8080/api/clipboard"} />
        ),
      },
      {
        path: "latest",
        element: (
          <DashboardPage
            requestPath={"http://localhost:8080/api/clipboard/latest"}
          />
        ),
      },
      {
        path: "today",
        element: (
          <DashboardPage requestPath={"http://localhost:8080/api/clipboard/today"} />
        ),
      },
    ],
  },
]);

export default router;
