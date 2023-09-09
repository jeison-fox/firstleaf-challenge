import React from "react";

import "styles/country-card.css";
import "styles/skeleton.css";

export default function CountryCardSkeleton() {
  return (
    <article className="country-card country-card--skeleton">
      <div className="country-card__flag skeleton" />
      <div className="country-card__name skeleton" />
    </article>
  );
}
