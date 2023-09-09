import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import AppBarSearch from "components/appbar/AppBarSearch";

import AppBarContext from "context/AppBarContext";

import "styles/appbar.css";

export default function AppBar() {
  const { appBarTitle, buttonVisibility, searchBarVisibility } =
    useContext(AppBarContext);

  return (
    <div className="appbar">
      {buttonVisibility && (
        <Link to="/" className="btn appbar__button">
          <FaArrowLeft className="appbar__button__arrow" />
        </Link>
      )}
      <h1 className="appbar__title">{appBarTitle}</h1>
      {searchBarVisibility && <AppBarSearch />}
    </div>
  );
}
