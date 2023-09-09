import React from "react";
import { Link } from "react-router-dom";

import "styles/country-card.css";

export default function CountryCard({ country }) {
  return (
    <article className="country-card">
      <div className="country-card__flag">{country.flag}</div>
      <h4 className="country-card__name">
        <Link to={`/country/${country.name}`} className="country-card__link">
          {country.name}
        </Link>
      </h4>
    </article>
  );
}
