/**
 * Extracts the flag and common name from a list of country objects.
 *
 * @param {Array} countryList - The list of countries to extract information from.
 *
 * @returns {Array} An array of objects, each containing the flag and common name of a country.
 */
export const extractBasicCountryInfo = (countryList) => {
  return countryList.map((country) => {
    return {
      flag: country.flag,
      id: country.cca3,
      name: country.name.common,
    };
  });
};

/**
 * Extracts detailed information from a country object.
 *
 * @param {Object} country - The country object to extract information from.
 *
 * @returns {Object} An object containing the country's area, capital, continent,
 * flag, common name, population, and region.
 */
export const extractDetailedCountryInfo = (country) => {
  return {
    area: country.area,
    capital: country.capital?.[0] || "",
    continent: country.continents?.[0] || "",
    flag: country.flag,
    id: country.cca3,
    name: country.name.common,
    population: country.population,
    region: country.region,
  };
};
