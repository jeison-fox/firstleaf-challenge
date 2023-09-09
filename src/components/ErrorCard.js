import React from "react";

export default function ErrorCard({ message, showTitle = true }) {
  return (
    <article className="error-card">
      {showTitle && <h2 className="error-card__title">Oops! Something went wrong.</h2>}
      <p className="error-card__message">{message}</p>
    </article>
  );
}
