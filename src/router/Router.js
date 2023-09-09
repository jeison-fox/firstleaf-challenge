import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "components/Layout";
import CountryList from "components/country/CountryList";
import CountryDetails from "components/country/CountryDetails";
import ErrorPage from "components/ErrorPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <CountryList />,
            },
            {
              path: "country/:countryName",
              element: <CountryDetails />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
