import React from "react";
import { Link, useRouteError } from "react-router-dom";

import "styles/error.css";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error">
      <h2 className="error__title">Oops! Something went wrong.</h2>
      <p className="error__message">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"} className="btn error__button">
        Go back
      </Link>
    </div>
  );
}
