import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";

import CountryCard from "components/country/CountryCard";
import CountryCardSkeleton from "components/skeletons/CountryCardSkeleton";
import ErrorCard from "components/ErrorCard";

import AppBarContext from "context/AppBarContext";
import { fetchCountryList } from "api/country";

import "styles/country-list.css";

export default function CountryList() {
  const {
    buttonVisibility,
    searchBarVisibility,
    setButtonVisibility,
    setSearchBarVisibility,
    searchTerm,
    setTitle,
  } = useContext(AppBarContext);

  useEffect(() => {
    setButtonVisibility(false);
    setSearchBarVisibility(true);
    setTitle("Countries of the World");
  }, []);

  const {
    isLoading,
    error,
    data = [],
  } = useQuery("countries", fetchCountryList);

  /**
   * Filters the list of countries based on the provided search term.
   *
   * The filtering is case-insensitive, meaning "USA" and "usa" would yield the same results.
   * Each country in the `data` array is checked to see if its name includes the search term.
   *
   * @param {Array} data - Array of countries with at least a 'name' property.
   *
   * @param {string} searchTerm - The term to search for within the country names.
   */
  const filteredCountries = data.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="country-list">
        {isLoading &&
          Array.from({ length: 20 }).map((_, index) => (
            <CountryCardSkeleton key={`${index}-${Date.now()}`} />
          ))}

        {!isLoading &&
          !error &&
          filteredCountries.length > 0 &&
          filteredCountries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
      </div>
      {!isLoading && !error && filteredCountries.length === 0 && (
        <ErrorCard message="No countries found" showTitle={false} />
      )}

      {error && <ErrorCard message={error.message} />}
    </>
  );
}
