import React, { useContext, useState } from "react";
import { debounce } from "lodash";
import { MdOutlineClose } from "react-icons/md";

import AppBarContext from "context/AppBarContext";

export default function AppBarSearch() {
  const { searchTerm, setSearchTerm } = useContext(AppBarContext);
  const [inputValue, setInputValue] = useState(searchTerm);

  const debouncedSetSearchTerm = debounce(setSearchTerm, 500);

  /**
   * Clears the input value and the associated search term.
   *
   * This function is typically used to reset both the visible input
   * field (represented by `inputValue`) and the internal search term
   * used for searching logic (represented by `searchTerm`).
   */
  const handleClearInput = () => {
    setInputValue("");
    setSearchTerm("");
  };

  /**
   * Updates the state and context in response to changes in the search input.
   *
   * The function performs the following actions:
   * - Extracts the current value from the event's target (i.e., the input field).
   * - Updates the state for the current input value.
   * - Normalizes the input to lowercase and updates the searchTerm context.
   *
   * @param {Object} event - The event object generated from the input change event.
   */
  const handleSearchTermChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setSearchTerm(value.toLowerCase());
  };

  return (
    <div className="appbar__input-container">
      <input
        className="appbar__input"
        type="text"
        placeholder="Search country by name..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      {inputValue && (
        <button
          type="button"
          className="btn appbar__input-clear"
          onClick={handleClearInput}
        >
          <MdOutlineClose />
        </button>
      )}
    </div>
  );
}
