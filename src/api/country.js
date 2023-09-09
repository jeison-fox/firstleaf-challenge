import {
  extractBasicCountryInfo,
  extractDetailedCountryInfo,
} from "utils/country";

/**
 * Fetches a list of countries and returns basic info for each country.
 *
 * @returns {Array} An array of objects, each containing the flag and common name of a country.
 *
 * @throws {Error} Throws an error if there's an issue with the fetch operation or the response is not OK.
 */
export const fetchCountryList = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || "Unable to get country list");
    }

    const data = await response.json();
    const normalizedData = extractBasicCountryInfo(data || []);

    return normalizedData;
  } catch (error) {
    throw error;
  }
};

/**
 * Fetches detailed information for a specific country by name.
 *
 * @param {string} name - The name of the country.
 *
 * @returns {Object} An object containing detailed information about the country.
 *
 * @throws {Error} Throws an error if there's an issue with the fetch operation or the response is not OK.
 */
export const fetchCountryDetails = async (name) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || "Unable to get country details");
    }

    const data = await response.json();
    const normalizedData = extractDetailedCountryInfo(data[0] || []);

    return normalizedData;
  } catch (error) {
    throw error;
  }
};
