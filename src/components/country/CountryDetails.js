import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { TbBuildingCommunity } from "react-icons/tb";
import { PiGlobeHemisphereWest } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { BsPinMap } from "react-icons/bs";

import CountryDetailSkeleton from "components/skeletons/CountryDetailSkeleton";
import ErrorCard from "components/ErrorCard";

import AppBarContext from "context/AppBarContext";
import { fetchCountryDetails } from "api/country";

import "styles/country-details.css";

export default function CountryDetails() {
  const { countryName } = useParams();
  const { setButtonVisibility, setSearchBarVisibility, setTitle } =
    useContext(AppBarContext);

  useEffect(() => {
    setTitle(countryName);
    setButtonVisibility(true);
    setSearchBarVisibility(false);
  }, []);

  const {
    isLoading,
    error,
    data = {},
  } = useQuery("country", () => fetchCountryDetails(countryName));

  return (
    <>
      {isLoading && <CountryDetailSkeleton />}

      {!isLoading && error && <ErrorCard message={error.message} />}

      {!isLoading && !error && (
        <article className="country-details">
          <div className="country-details__top">
            <div className="country-details__flag">{data?.flag}</div>
            <div>
              <h2 className="country-details__name">{data?.name}</h2>
              <p className="country-details__continent">{data?.continent}</p>
            </div>
          </div>
          <div className="country-details__bottom">
            <div className="country-details__bottom__item">
              <TbBuildingCommunity />{" "}
              <span className="country-details__bottom__item__text">
                <span>Capital:</span> {data?.capital}
              </span>
            </div>
            <div className="country-details__bottom__item">
              <PiGlobeHemisphereWest />{" "}
              <span className="country-details__bottom__item__text">
                <span>Region:</span> {data?.region}
              </span>
            </div>
            <div className="country-details__bottom__item">
              <IoPeopleOutline />{" "}
              <span className="country-details__bottom__item__text">
                <span>Population:</span> {data?.population?.toLocaleString()}
              </span>
            </div>
            <div className="country-details__bottom__item">
              <BsPinMap />{" "}
              <span className="country-details__bottom__item__text">
                <span>Area:</span> {data?.area?.toLocaleString()} Km<sup>2</sup>
              </span>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
