import { Outlet } from "react-router-dom";

import AppBar from "components/appbar/AppBar";

import "styles/layout.css";

export default function Layout() {
  return (
    <main className="main-container">
      <AppBar />
      <div className="main-container__body">
        <Outlet />
      </div>
    </main>
  );
}
