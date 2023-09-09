import React from "react";

import "styles/country-details.css";
import "styles/skeleton.css";

export default function CountryDetailSkeleton() {
  return (
    <article className="country-details country-details--skeleton">
      <div className="country-details__top">
        <div className="country-details__flag skeleton" />
        <div>
          <div className="country-details__name skeleton" />
          <div className="country-details__continent skeleton" />
        </div>
      </div>
      <div className="country-details__bottom skeleton" />
    </article>
  );
}
