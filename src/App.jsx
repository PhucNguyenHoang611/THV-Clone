import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import { ConfigProvider } from "antd";
import Details from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/details",
        element: <Details />
      },
      {
        path: "/:category",
        element: <Dashboard />
      }
    ]
  }
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#B31312",
          fontFamily: "Inter"
        },
        components: {
          Card: {
            headerBg: "#B31312",
            colorTextHeading: "white"
          }
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
